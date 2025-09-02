function T9(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Q$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function su(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B0={exports:{}},Ys={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D3;function E9(){if(D3)return Ys;D3=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:e,type:a,key:u,ref:o!==void 0?o:null,props:l}}return Ys.Fragment=t,Ys.jsx=n,Ys.jsxs=n,Ys}var z3;function j9(){return z3||(z3=1,B0.exports=E9()),B0.exports}var f=j9(),I0={exports:{}},Fs={},U0={exports:{}},_0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P3;function A9(){return P3||(P3=1,function(e){function t($,W){var J=$.length;$.push(W);e:for(;0<J;){var te=J-1>>>1,k=$[te];if(0<o(k,W))$[te]=W,$[J]=k,J=te;else break e}}function n($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var W=$[0],J=$.pop();if(J!==W){$[0]=J;e:for(var te=0,k=$.length,X=k>>>1;te<X;){var ne=2*(te+1)-1,re=$[ne],ue=ne+1,Se=$[ue];if(0>o(re,J))ue<k&&0>o(Se,re)?($[te]=Se,$[ue]=J,te=ue):($[te]=re,$[ne]=J,te=ne);else if(ue<k&&0>o(Se,J))$[te]=Se,$[ue]=J,te=ue;else break e}}return W}function o($,W){var J=$.sortIndex-W.sortIndex;return J!==0?J:$.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var p=[],m=[],g=1,v=null,y=3,C=!1,S=!1,j=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function V($){for(var W=n(m);W!==null;){if(W.callback===null)a(m);else if(W.startTime<=$)a(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=n(m)}}function O($){if(j=!1,V($),!S)if(n(p)!==null)S=!0,P||(P=!0,ie());else{var W=n(m);W!==null&&oe(O,W.startTime-$)}}var P=!1,z=-1,_=5,Y=-1;function F(){return L?!0:!(e.unstable_now()-Y<_)}function K(){if(L=!1,P){var $=e.unstable_now();Y=$;var W=!0;try{e:{S=!1,j&&(j=!1,E(z),z=-1),C=!0;var J=y;try{t:{for(V($),v=n(p);v!==null&&!(v.expirationTime>$&&F());){var te=v.callback;if(typeof te=="function"){v.callback=null,y=v.priorityLevel;var k=te(v.expirationTime<=$);if($=e.unstable_now(),typeof k=="function"){v.callback=k,V($),W=!0;break t}v===n(p)&&a(p),V($)}else a(p);v=n(p)}if(v!==null)W=!0;else{var X=n(m);X!==null&&oe(O,X.startTime-$),W=!1}}break e}finally{v=null,y=J,C=!1}W=void 0}}finally{W?ie():P=!1}}}var ie;if(typeof T=="function")ie=function(){T(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=K,ie=function(){de.postMessage(null)}}else ie=function(){M(K,0)};function oe($,W){z=M(function(){$(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function($){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var J=y;y=W;try{return $()}finally{y=J}},e.unstable_requestPaint=function(){L=!0},e.unstable_runWithPriority=function($,W){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=y;y=$;try{return W()}finally{y=J}},e.unstable_scheduleCallback=function($,W,J){var te=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?te+J:te):J=te,$){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=J+k,$={id:g++,callback:W,priorityLevel:$,startTime:J,expirationTime:k,sortIndex:-1},J>te?($.sortIndex=J,t(m,$),n(p)===null&&$===n(m)&&(j?(E(z),z=-1):j=!0,oe(O,J-te))):($.sortIndex=k,t(p,$),S||C||(S=!0,P||(P=!0,ie()))),$},e.unstable_shouldYield=F,e.unstable_wrapCallback=function($){var W=y;return function(){var J=y;y=W;try{return $.apply(this,arguments)}finally{y=J}}}}(_0)),_0}var N3;function M9(){return N3||(N3=1,U0.exports=A9()),U0.exports}var G0={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $3;function L9(){if($3)return ve;$3=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,j={};function L(k,X,ne){this.props=k,this.context=X,this.refs=j,this.updater=ne||C}L.prototype.isReactComponent={},L.prototype.setState=function(k,X){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,X,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function M(){}M.prototype=L.prototype;function E(k,X,ne){this.props=k,this.context=X,this.refs=j,this.updater=ne||C}var T=E.prototype=new M;T.constructor=E,S(T,L.prototype),T.isPureReactComponent=!0;var V=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function z(k,X,ne,re,ue,Se){return ne=Se.ref,{$$typeof:e,type:k,key:X,ref:ne!==void 0?ne:null,props:Se}}function _(k,X){return z(k.type,X,void 0,void 0,void 0,k.props)}function Y(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function F(k){var X={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ne){return X[ne]})}var K=/\/+/g;function ie(k,X){return typeof k=="object"&&k!==null&&k.key!=null?F(""+k.key):X.toString(36)}function le(){}function de(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(le,le):(k.status="pending",k.then(function(X){k.status==="pending"&&(k.status="fulfilled",k.value=X)},function(X){k.status==="pending"&&(k.status="rejected",k.reason=X)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function oe(k,X,ne,re,ue){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(Se){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case e:case t:pe=!0;break;case g:return pe=k._init,oe(pe(k._payload),X,ne,re,ue)}}if(pe)return ue=ue(k),pe=re===""?"."+ie(k,0):re,V(ue)?(ne="",pe!=null&&(ne=pe.replace(K,"$&/")+"/"),oe(ue,X,ne,"",function(Tt){return Tt})):ue!=null&&(Y(ue)&&(ue=_(ue,ne+(ue.key==null||k&&k.key===ue.key?"":(""+ue.key).replace(K,"$&/")+"/")+pe)),X.push(ue)),1;pe=0;var ct=re===""?".":re+":";if(V(k))for(var Re=0;Re<k.length;Re++)re=k[Re],Se=ct+ie(re,Re),pe+=oe(re,X,ne,Se,ue);else if(Re=y(k),typeof Re=="function")for(k=Re.call(k),Re=0;!(re=k.next()).done;)re=re.value,Se=ct+ie(re,Re++),pe+=oe(re,X,ne,Se,ue);else if(Se==="object"){if(typeof k.then=="function")return oe(de(k),X,ne,re,ue);throw X=String(k),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function $(k,X,ne){if(k==null)return k;var re=[],ue=0;return oe(k,re,"","",function(Se){return X.call(ne,Se,ue++)}),re}function W(k){if(k._status===-1){var X=k._result;X=X(),X.then(function(ne){(k._status===0||k._status===-1)&&(k._status=1,k._result=ne)},function(ne){(k._status===0||k._status===-1)&&(k._status=2,k._result=ne)}),k._status===-1&&(k._status=0,k._result=X)}if(k._status===1)return k._result.default;throw k._result}var J=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function te(){}return ve.Children={map:$,forEach:function(k,X,ne){$(k,function(){X.apply(this,arguments)},ne)},count:function(k){var X=0;return $(k,function(){X++}),X},toArray:function(k){return $(k,function(X){return X})||[]},only:function(k){if(!Y(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ve.Component=L,ve.Fragment=n,ve.Profiler=o,ve.PureComponent=E,ve.StrictMode=a,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ve.__COMPILER_RUNTIME={__proto__:null,c:function(k){return O.H.useMemoCache(k)}},ve.cache=function(k){return function(){return k.apply(null,arguments)}},ve.cloneElement=function(k,X,ne){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var re=S({},k.props),ue=k.key,Se=void 0;if(X!=null)for(pe in X.ref!==void 0&&(Se=void 0),X.key!==void 0&&(ue=""+X.key),X)!P.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(re[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)re.children=ne;else if(1<pe){for(var ct=Array(pe),Re=0;Re<pe;Re++)ct[Re]=arguments[Re+2];re.children=ct}return z(k.type,ue,void 0,void 0,Se,re)},ve.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},ve.createElement=function(k,X,ne){var re,ue={},Se=null;if(X!=null)for(re in X.key!==void 0&&(Se=""+X.key),X)P.call(X,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ue[re]=X[re]);var pe=arguments.length-2;if(pe===1)ue.children=ne;else if(1<pe){for(var ct=Array(pe),Re=0;Re<pe;Re++)ct[Re]=arguments[Re+2];ue.children=ct}if(k&&k.defaultProps)for(re in pe=k.defaultProps,pe)ue[re]===void 0&&(ue[re]=pe[re]);return z(k,Se,void 0,void 0,null,ue)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(k){return{$$typeof:d,render:k}},ve.isValidElement=Y,ve.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:W}},ve.memo=function(k,X){return{$$typeof:m,type:k,compare:X===void 0?null:X}},ve.startTransition=function(k){var X=O.T,ne={};O.T=ne;try{var re=k(),ue=O.S;ue!==null&&ue(ne,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(te,J)}catch(Se){J(Se)}finally{O.T=X}},ve.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ve.use=function(k){return O.H.use(k)},ve.useActionState=function(k,X,ne){return O.H.useActionState(k,X,ne)},ve.useCallback=function(k,X){return O.H.useCallback(k,X)},ve.useContext=function(k){return O.H.useContext(k)},ve.useDebugValue=function(){},ve.useDeferredValue=function(k,X){return O.H.useDeferredValue(k,X)},ve.useEffect=function(k,X,ne){var re=O.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(k,X)},ve.useId=function(){return O.H.useId()},ve.useImperativeHandle=function(k,X,ne){return O.H.useImperativeHandle(k,X,ne)},ve.useInsertionEffect=function(k,X){return O.H.useInsertionEffect(k,X)},ve.useLayoutEffect=function(k,X){return O.H.useLayoutEffect(k,X)},ve.useMemo=function(k,X){return O.H.useMemo(k,X)},ve.useOptimistic=function(k,X){return O.H.useOptimistic(k,X)},ve.useReducer=function(k,X,ne){return O.H.useReducer(k,X,ne)},ve.useRef=function(k){return O.H.useRef(k)},ve.useState=function(k){return O.H.useState(k)},ve.useSyncExternalStore=function(k,X,ne){return O.H.useSyncExternalStore(k,X,ne)},ve.useTransition=function(){return O.H.useTransition()},ve.version="19.1.1",ve}var B3;function eh(){return B3||(B3=1,G0.exports=L9()),G0.exports}var q0={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I3;function O9(){if(I3)return At;I3=1;var e=eh();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,At.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(p,m,null,g)},At.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},At.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},At.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},At.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:C}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},At.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},At.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},At.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},At.requestFormReset=function(p){a.d.r(p)},At.unstable_batchedUpdates=function(p,m){return p(m)},At.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},At.useFormStatus=function(){return u.H.useHostTransitionStatus()},At.version="19.1.1",At}var U3;function R9(){if(U3)return q0.exports;U3=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),q0.exports=O9(),q0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _3;function k9(){if(_3)return Fs;_3=1;var e=M9(),t=eh(),n=R9();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,s=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(s=r.return),i=r.return;while(i)}return r.tag===3?s:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(a(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var s=i,c=r;;){var h=s.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===s)return d(h),i;if(x===c)return d(h),r;x=x.sibling}throw Error(a(188))}if(s.return!==c.return)s=h,c=x;else{for(var b=!1,A=h.child;A;){if(A===s){b=!0,s=h,c=x;break}if(A===c){b=!0,c=h,s=x;break}A=A.sibling}if(!b){for(A=x.child;A;){if(A===s){b=!0,s=x,c=h;break}if(A===c){b=!0,c=x,s=h;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?i:r}function m(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=m(i),r!==null)return r;i=i.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function ie(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var le=Symbol.for("react.client.reference");function de(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===le?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case S:return"Fragment";case L:return"Profiler";case j:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case Y:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case C:return"Portal";case T:return(i.displayName||"Context")+".Provider";case E:return(i._context.displayName||"Context")+".Consumer";case V:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case z:return r=i.displayName||null,r!==null?r:de(i.type)||"Memo";case _:r=i._payload,i=i._init;try{return de(i(r))}catch{}}return null}var oe=Array.isArray,$=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},te=[],k=-1;function X(i){return{current:i}}function ne(i){0>k||(i.current=te[k],te[k]=null,k--)}function re(i,r){k++,te[k]=i.current,i.current=r}var ue=X(null),Se=X(null),pe=X(null),ct=X(null);function Re(i,r){switch(re(pe,r),re(Se,i),re(ue,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?c3(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=c3(r),i=u3(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ne(ue),re(ue,i)}function Tt(){ne(ue),ne(Se),ne(pe)}function Qn(i){i.memoizedState!==null&&re(ct,i);var r=ue.current,s=u3(r,i.type);r!==s&&(re(Se,i),re(ue,s))}function Zi(i){Se.current===i&&(ne(ue),ne(Se)),ct.current===i&&(ne(ct),Is._currentValue=J)}var oi=Object.prototype.hasOwnProperty,Au=e.unstable_scheduleCallback,Mu=e.unstable_cancelCallback,i7=e.unstable_shouldYield,n7=e.unstable_requestPaint,ki=e.unstable_now,a7=e.unstable_getCurrentPriorityLevel,_1=e.unstable_ImmediatePriority,G1=e.unstable_UserBlockingPriority,Po=e.unstable_NormalPriority,r7=e.unstable_LowPriority,q1=e.unstable_IdlePriority,s7=e.log,o7=e.unstable_setDisableYieldValue,Zr=null,Xt=null;function yn(i){if(typeof s7=="function"&&o7(i),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Zr,i)}catch{}}var Zt=Math.clz32?Math.clz32:u7,l7=Math.log,c7=Math.LN2;function u7(i){return i>>>=0,i===0?32:31-(l7(i)/c7|0)|0}var No=256,$o=4194304;function Jn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Bo(i,r,s){var c=i.pendingLanes;if(c===0)return 0;var h=0,x=i.suspendedLanes,b=i.pingedLanes;i=i.warmLanes;var A=c&134217727;return A!==0?(c=A&~x,c!==0?h=Jn(c):(b&=A,b!==0?h=Jn(b):s||(s=A&~i,s!==0&&(h=Jn(s))))):(A=c&~x,A!==0?h=Jn(A):b!==0?h=Jn(b):s||(s=c&~i,s!==0&&(h=Jn(s)))),h===0?0:r!==0&&r!==h&&(r&x)===0&&(x=h&-h,s=r&-r,x>=s||x===32&&(s&4194048)!==0)?r:h}function Wr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function d7(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(){var i=No;return No<<=1,(No&4194048)===0&&(No=256),i}function F1(){var i=$o;return $o<<=1,($o&62914560)===0&&($o=4194304),i}function Lu(i){for(var r=[],s=0;31>s;s++)r.push(i);return r}function Kr(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function f7(i,r,s,c,h,x){var b=i.pendingLanes;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=s,i.entangledLanes&=s,i.errorRecoveryDisabledLanes&=s,i.shellSuspendCounter=0;var A=i.entanglements,H=i.expirationTimes,U=i.hiddenUpdates;for(s=b&~s;0<s;){var Z=31-Zt(s),ee=1<<Z;A[Z]=0,H[Z]=-1;var G=U[Z];if(G!==null)for(U[Z]=null,Z=0;Z<G.length;Z++){var q=G[Z];q!==null&&(q.lane&=-536870913)}s&=~ee}c!==0&&X1(i,c,0),x!==0&&h===0&&i.tag!==0&&(i.suspendedLanes|=x&~(b&~r))}function X1(i,r,s){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Zt(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|s&4194090}function Z1(i,r){var s=i.entangledLanes|=r;for(i=i.entanglements;s;){var c=31-Zt(s),h=1<<c;h&r|i[c]&r&&(i[c]|=r),s&=~h}}function Ou(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ru(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function W1(){var i=W.p;return i!==0?i:(i=window.event,i===void 0?32:L3(i.type))}function p7(i,r){var s=W.p;try{return W.p=i,r()}finally{W.p=s}}var wn=Math.random().toString(36).slice(2),Et="__reactFiber$"+wn,Dt="__reactProps$"+wn,La="__reactContainer$"+wn,ku="__reactEvents$"+wn,h7="__reactListeners$"+wn,m7="__reactHandles$"+wn,K1="__reactResources$"+wn,Qr="__reactMarker$"+wn;function Vu(i){delete i[Et],delete i[Dt],delete i[ku],delete i[h7],delete i[m7]}function Oa(i){var r=i[Et];if(r)return r;for(var s=i.parentNode;s;){if(r=s[La]||s[Et]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(i=h3(i);i!==null;){if(s=i[Et])return s;i=h3(i)}return r}i=s,s=i.parentNode}return null}function Ra(i){if(i=i[Et]||i[La]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Jr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function ka(i){var r=i[K1];return r||(r=i[K1]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ut(i){i[Qr]=!0}var Q1=new Set,J1={};function ea(i,r){Va(i,r),Va(i+"Capture",r)}function Va(i,r){for(J1[i]=r,i=0;i<r.length;i++)Q1.add(r[i])}var g7=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),e2={},t2={};function x7(i){return oi.call(t2,i)?!0:oi.call(e2,i)?!1:g7.test(i)?t2[i]=!0:(e2[i]=!0,!1)}function Io(i,r,s){if(x7(r))if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+s)}}function Uo(i,r,s){if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+s)}}function Wi(i,r,s,c){if(c===null)i.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttributeNS(r,s,""+c)}}var Hu,i2;function Ha(i){if(Hu===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Hu=r&&r[1]||"",i2=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Hu+i+i2}var Du=!1;function zu(i,r){if(!i||Du)return"";Du=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(q){var G=q}Reflect.construct(i,[],ee)}else{try{ee.call()}catch(q){G=q}i.call(ee.prototype)}}else{try{throw Error()}catch(q){G=q}(ee=i())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=c.DetermineComponentFrameRoot(),b=x[0],A=x[1];if(b&&A){var H=b.split(`
`),U=A.split(`
`);for(h=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(c===H.length||h===U.length)for(c=H.length-1,h=U.length-1;1<=c&&0<=h&&H[c]!==U[h];)h--;for(;1<=c&&0<=h;c--,h--)if(H[c]!==U[h]){if(c!==1||h!==1)do if(c--,h--,0>h||H[c]!==U[h]){var Z=`
`+H[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=h);break}}}finally{Du=!1,Error.prepareStackTrace=s}return(s=i?i.displayName||i.name:"")?Ha(s):""}function v7(i){switch(i.tag){case 26:case 27:case 5:return Ha(i.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return zu(i.type,!1);case 11:return zu(i.type.render,!1);case 1:return zu(i.type,!0);case 31:return Ha("Activity");default:return""}}function n2(i){try{var r="";do r+=v7(i),i=i.return;while(i);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function li(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function a2(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function y7(i){var r=a2(i)?"checked":"value",s=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,x=s.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,x.call(this,b)}}),Object.defineProperty(i,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function _o(i){i._valueTracker||(i._valueTracker=y7(i))}function r2(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return i&&(c=a2(i)?i.checked?"true":"false":i.value),i=c,i!==s?(r.setValue(i),!0):!1}function Go(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var w7=/[\n"\\]/g;function ci(i){return i.replace(w7,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Pu(i,r,s,c,h,x,b,A){i.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.type=b:i.removeAttribute("type"),r!=null?b==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+li(r)):i.value!==""+li(r)&&(i.value=""+li(r)):b!=="submit"&&b!=="reset"||i.removeAttribute("value"),r!=null?Nu(i,b,li(r)):s!=null?Nu(i,b,li(s)):c!=null&&i.removeAttribute("value"),h==null&&x!=null&&(i.defaultChecked=!!x),h!=null&&(i.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+li(A):i.removeAttribute("name")}function s2(i,r,s,c,h,x,b,A){if(x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(i.type=x),r!=null||s!=null){if(!(x!=="submit"&&x!=="reset"||r!=null))return;s=s!=null?""+li(s):"",r=r!=null?""+li(r):s,A||r===i.value||(i.value=r),i.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=A?i.checked:!!c,i.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(i.name=b)}function Nu(i,r,s){r==="number"&&Go(i.ownerDocument)===i||i.defaultValue===""+s||(i.defaultValue=""+s)}function Da(i,r,s,c){if(i=i.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<i.length;s++)h=r.hasOwnProperty("$"+i[s].value),i[s].selected!==h&&(i[s].selected=h),h&&c&&(i[s].defaultSelected=!0)}else{for(s=""+li(s),r=null,h=0;h<i.length;h++){if(i[h].value===s){i[h].selected=!0,c&&(i[h].defaultSelected=!0);return}r!==null||i[h].disabled||(r=i[h])}r!==null&&(r.selected=!0)}}function o2(i,r,s){if(r!=null&&(r=""+li(r),r!==i.value&&(i.value=r),s==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=s!=null?""+li(s):""}function l2(i,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(oe(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=li(r),i.defaultValue=s,c=i.textContent,c===s&&c!==""&&c!==null&&(i.value=c)}function za(i,r){if(r){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=r;return}}i.textContent=r}var b7=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function c2(i,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,s):typeof s!="number"||s===0||b7.has(r)?r==="float"?i.cssFloat=s:i[r]=(""+s).trim():i[r]=s+"px"}function u2(i,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&c2(i,h,c)}else for(var x in r)r.hasOwnProperty(x)&&c2(i,x,r[x])}function $u(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S7=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C7=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(i){return C7.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Bu=null;function Iu(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Pa=null,Na=null;function d2(i){var r=Ra(i);if(r&&(i=r.stateNode)){var s=i[Dt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Pu(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ci(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==i&&c.form===i.form){var h=c[Dt]||null;if(!h)throw Error(a(90));Pu(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===i.form&&r2(c)}break e;case"textarea":o2(i,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Da(i,!!s.multiple,r,!1)}}}var Uu=!1;function f2(i,r,s){if(Uu)return i(r,s);Uu=!0;try{var c=i(r);return c}finally{if(Uu=!1,(Pa!==null||Na!==null)&&(Ol(),Pa&&(r=Pa,i=Na,Na=Pa=null,d2(r),i)))for(r=0;r<i.length;r++)d2(i[r])}}function es(i,r){var s=i.stateNode;if(s===null)return null;var c=s[Dt]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Ki)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{_u=!1}var bn=null,Gu=null,Yo=null;function p2(){if(Yo)return Yo;var i,r=Gu,s=r.length,c,h="value"in bn?bn.value:bn.textContent,x=h.length;for(i=0;i<s&&r[i]===h[i];i++);var b=s-i;for(c=1;c<=b&&r[s-c]===h[x-c];c++);return Yo=h.slice(i,1<c?1-c:void 0)}function Fo(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Xo(){return!0}function h2(){return!1}function zt(i){function r(s,c,h,x,b){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(s=i[A],this[A]=s?s(x):x[A]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Xo:h2,this.isPropagationStopped=h2,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),r}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=zt(ta),is=g({},ta,{view:0,detail:0}),T7=zt(is),qu,Yu,ns,Wo=g({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ns&&(ns&&i.type==="mousemove"?(qu=i.screenX-ns.screenX,Yu=i.screenY-ns.screenY):Yu=qu=0,ns=i),qu)},movementY:function(i){return"movementY"in i?i.movementY:Yu}}),m2=zt(Wo),E7=g({},Wo,{dataTransfer:0}),j7=zt(E7),A7=g({},is,{relatedTarget:0}),Fu=zt(A7),M7=g({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),L7=zt(M7),O7=g({},ta,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),R7=zt(O7),k7=g({},ta,{data:0}),g2=zt(k7),V7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z7(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=D7[i])?!!r[i]:!1}function Xu(){return z7}var P7=g({},is,{key:function(i){if(i.key){var r=V7[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Fo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?H7[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(i){return i.type==="keypress"?Fo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),N7=zt(P7),$7=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x2=zt($7),B7=g({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),I7=zt(B7),U7=g({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),_7=zt(U7),G7=g({},Wo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),q7=zt(G7),Y7=g({},ta,{newState:0,oldState:0}),F7=zt(Y7),X7=[9,13,27,32],Zu=Ki&&"CompositionEvent"in window,as=null;Ki&&"documentMode"in document&&(as=document.documentMode);var Z7=Ki&&"TextEvent"in window&&!as,v2=Ki&&(!Zu||as&&8<as&&11>=as),y2=" ",w2=!1;function b2(i,r){switch(i){case"keyup":return X7.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S2(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var $a=!1;function W7(i,r){switch(i){case"compositionend":return S2(r);case"keypress":return r.which!==32?null:(w2=!0,y2);case"textInput":return i=r.data,i===y2&&w2?null:i;default:return null}}function K7(i,r){if($a)return i==="compositionend"||!Zu&&b2(i,r)?(i=p2(),Yo=Gu=bn=null,$a=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v2&&r.locale!=="ko"?null:r.data;default:return null}}var Q7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function C2(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Q7[i.type]:r==="textarea"}function T2(i,r,s,c){Pa?Na?Na.push(c):Na=[c]:Pa=c,r=zl(r,"onChange"),0<r.length&&(s=new Zo("onChange","change",null,s,c),i.push({event:s,listeners:r}))}var rs=null,ss=null;function J7(i){a3(i,0)}function Ko(i){var r=Jr(i);if(r2(r))return i}function E2(i,r){if(i==="change")return r}var j2=!1;if(Ki){var Wu;if(Ki){var Ku="oninput"in document;if(!Ku){var A2=document.createElement("div");A2.setAttribute("oninput","return;"),Ku=typeof A2.oninput=="function"}Wu=Ku}else Wu=!1;j2=Wu&&(!document.documentMode||9<document.documentMode)}function M2(){rs&&(rs.detachEvent("onpropertychange",L2),ss=rs=null)}function L2(i){if(i.propertyName==="value"&&Ko(ss)){var r=[];T2(r,ss,i,Iu(i)),f2(J7,r)}}function ew(i,r,s){i==="focusin"?(M2(),rs=r,ss=s,rs.attachEvent("onpropertychange",L2)):i==="focusout"&&M2()}function tw(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ko(ss)}function iw(i,r){if(i==="click")return Ko(r)}function nw(i,r){if(i==="input"||i==="change")return Ko(r)}function aw(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Wt=typeof Object.is=="function"?Object.is:aw;function os(i,r){if(Wt(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var s=Object.keys(i),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!oi.call(r,h)||!Wt(i[h],r[h]))return!1}return!0}function O2(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function R2(i,r){var s=O2(i);i=0;for(var c;s;){if(s.nodeType===3){if(c=i+s.textContent.length,i<=r&&c>=r)return{node:s,offset:r-i};i=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=O2(s)}}function k2(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?k2(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function V2(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Go(i.document);r instanceof i.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)i=r.contentWindow;else break;r=Go(i.document)}return r}function Qu(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var rw=Ki&&"documentMode"in document&&11>=document.documentMode,Ba=null,Ju=null,ls=null,ed=!1;function H2(i,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ed||Ba==null||Ba!==Go(c)||(c=Ba,"selectionStart"in c&&Qu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ls&&os(ls,c)||(ls=c,c=zl(Ju,"onSelect"),0<c.length&&(r=new Zo("onSelect","select",null,r,s),i.push({event:r,listeners:c}),r.target=Ba)))}function ia(i,r){var s={};return s[i.toLowerCase()]=r.toLowerCase(),s["Webkit"+i]="webkit"+r,s["Moz"+i]="moz"+r,s}var Ia={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},td={},D2={};Ki&&(D2=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function na(i){if(td[i])return td[i];if(!Ia[i])return i;var r=Ia[i],s;for(s in r)if(r.hasOwnProperty(s)&&s in D2)return td[i]=r[s];return i}var z2=na("animationend"),P2=na("animationiteration"),N2=na("animationstart"),sw=na("transitionrun"),ow=na("transitionstart"),lw=na("transitioncancel"),$2=na("transitionend"),B2=new Map,id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");id.push("scrollEnd");function Ci(i,r){B2.set(i,r),ea(r,[i])}var I2=new WeakMap;function ui(i,r){if(typeof i=="object"&&i!==null){var s=I2.get(i);return s!==void 0?s:(r={value:i,source:r,stack:n2(r)},I2.set(i,r),r)}return{value:i,source:r,stack:n2(r)}}var di=[],Ua=0,nd=0;function Qo(){for(var i=Ua,r=nd=Ua=0;r<i;){var s=di[r];di[r++]=null;var c=di[r];di[r++]=null;var h=di[r];di[r++]=null;var x=di[r];if(di[r++]=null,c!==null&&h!==null){var b=c.pending;b===null?h.next=h:(h.next=b.next,b.next=h),c.pending=h}x!==0&&U2(s,h,x)}}function Jo(i,r,s,c){di[Ua++]=i,di[Ua++]=r,di[Ua++]=s,di[Ua++]=c,nd|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function ad(i,r,s,c){return Jo(i,r,s,c),el(i)}function _a(i,r){return Jo(i,null,null,r),el(i)}function U2(i,r,s){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s);for(var h=!1,x=i.return;x!==null;)x.childLanes|=s,c=x.alternate,c!==null&&(c.childLanes|=s),x.tag===22&&(i=x.stateNode,i===null||i._visibility&1||(h=!0)),i=x,x=x.return;return i.tag===3?(x=i.stateNode,h&&r!==null&&(h=31-Zt(s),i=x.hiddenUpdates,c=i[h],c===null?i[h]=[r]:c.push(r),r.lane=s|536870912),x):null}function el(i){if(50<Vs)throw Vs=0,u0=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ga={};function cw(i,r,s,c){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(i,r,s,c){return new cw(i,r,s,c)}function rd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Qi(i,r){var s=i.alternate;return s===null?(s=Kt(i.tag,r,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=r,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&65011712,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,r=i.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s.refCleanup=i.refCleanup,s}function _2(i,r){i.flags&=65011714;var s=i.alternate;return s===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,r=s.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function tl(i,r,s,c,h,x){var b=0;if(c=i,typeof i=="function")rd(i)&&(b=1);else if(typeof i=="string")b=d9(i,s,ue.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case Y:return i=Kt(31,s,r,h),i.elementType=Y,i.lanes=x,i;case S:return aa(s.children,h,x,r);case j:b=8,h|=24;break;case L:return i=Kt(12,s,r,h|2),i.elementType=L,i.lanes=x,i;case O:return i=Kt(13,s,r,h),i.elementType=O,i.lanes=x,i;case P:return i=Kt(19,s,r,h),i.elementType=P,i.lanes=x,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case M:case T:b=10;break e;case E:b=9;break e;case V:b=11;break e;case z:b=14;break e;case _:b=16,c=null;break e}b=29,s=Error(a(130,i===null?"null":typeof i,"")),c=null}return r=Kt(b,s,r,h),r.elementType=i,r.type=c,r.lanes=x,r}function aa(i,r,s,c){return i=Kt(7,i,c,r),i.lanes=s,i}function sd(i,r,s){return i=Kt(6,i,null,r),i.lanes=s,i}function od(i,r,s){return r=Kt(4,i.children!==null?i.children:[],i.key,r),r.lanes=s,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var qa=[],Ya=0,il=null,nl=0,fi=[],pi=0,ra=null,Ji=1,en="";function sa(i,r){qa[Ya++]=nl,qa[Ya++]=il,il=i,nl=r}function G2(i,r,s){fi[pi++]=Ji,fi[pi++]=en,fi[pi++]=ra,ra=i;var c=Ji;i=en;var h=32-Zt(c)-1;c&=~(1<<h),s+=1;var x=32-Zt(r)+h;if(30<x){var b=h-h%5;x=(c&(1<<b)-1).toString(32),c>>=b,h-=b,Ji=1<<32-Zt(r)+h|s<<h|c,en=x+i}else Ji=1<<x|s<<h|c,en=i}function ld(i){i.return!==null&&(sa(i,1),G2(i,1,0))}function cd(i){for(;i===il;)il=qa[--Ya],qa[Ya]=null,nl=qa[--Ya],qa[Ya]=null;for(;i===ra;)ra=fi[--pi],fi[pi]=null,en=fi[--pi],fi[pi]=null,Ji=fi[--pi],fi[pi]=null}var Rt=null,Ze=null,Ae=!1,oa=null,Vi=!1,ud=Error(a(519));function la(i){var r=Error(a(418,""));throw ds(ui(r,i)),ud}function q2(i){var r=i.stateNode,s=i.type,c=i.memoizedProps;switch(r[Et]=i,r[Dt]=c,s){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<Ds.length;s++)Te(Ds[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Te("invalid",r),s2(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),_o(r);break;case"select":Te("invalid",r);break;case"textarea":Te("invalid",r),l2(r,c.value,c.defaultValue,c.children),_o(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||l3(r.textContent,s)?(c.popover!=null&&(Te("beforetoggle",r),Te("toggle",r)),c.onScroll!=null&&Te("scroll",r),c.onScrollEnd!=null&&Te("scrollend",r),c.onClick!=null&&(r.onclick=Pl),r=!0):r=!1,r||la(i)}function Y2(i){for(Rt=i.return;Rt;)switch(Rt.tag){case 5:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Rt=Rt.return}}function cs(i){if(i!==Rt)return!1;if(!Ae)return Y2(i),Ae=!0,!1;var r=i.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=i.type,s=!(s!=="form"&&s!=="button")||j0(i.type,i.memoizedProps)),s=!s),s&&Ze&&la(i),Y2(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(s=i.data,s==="/$"){if(r===0){Ze=Ei(i.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;i=i.nextSibling}Ze=null}}else r===27?(r=Ze,Pn(i.type)?(i=O0,O0=null,Ze=i):Ze=r):Ze=Rt?Ei(i.stateNode.nextSibling):null;return!0}function us(){Ze=Rt=null,Ae=!1}function F2(){var i=oa;return i!==null&&($t===null?$t=i:$t.push.apply($t,i),oa=null),i}function ds(i){oa===null?oa=[i]:oa.push(i)}var dd=X(null),ca=null,tn=null;function Sn(i,r,s){re(dd,r._currentValue),r._currentValue=s}function nn(i){i._currentValue=dd.current,ne(dd)}function fd(i,r,s){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===s)break;i=i.return}}function pd(i,r,s,c){var h=i.child;for(h!==null&&(h.return=i);h!==null;){var x=h.dependencies;if(x!==null){var b=h.child;x=x.firstContext;e:for(;x!==null;){var A=x;x=h;for(var H=0;H<r.length;H++)if(A.context===r[H]){x.lanes|=s,A=x.alternate,A!==null&&(A.lanes|=s),fd(x.return,s,i),c||(b=null);break e}x=A.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=s,x=b.alternate,x!==null&&(x.lanes|=s),fd(b,s,i),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===i){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function fs(i,r,s,c){i=null;for(var h=r,x=!1;h!==null;){if(!x){if((h.flags&524288)!==0)x=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=h.type;Wt(h.pendingProps.value,b.value)||(i!==null?i.push(A):i=[A])}}else if(h===ct.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(i!==null?i.push(Is):i=[Is])}h=h.return}i!==null&&pd(r,i,s,c),r.flags|=262144}function al(i){for(i=i.firstContext;i!==null;){if(!Wt(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ua(i){ca=i,tn=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function jt(i){return X2(ca,i)}function rl(i,r){return ca===null&&ua(i),X2(i,r)}function X2(i,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},tn===null){if(i===null)throw Error(a(308));tn=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else tn=tn.next=r;return s}var uw=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(s,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(s){return s()})}},dw=e.unstable_scheduleCallback,fw=e.unstable_NormalPriority,ot={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hd(){return{controller:new uw,data:new Map,refCount:0}}function ps(i){i.refCount--,i.refCount===0&&dw(fw,function(){i.controller.abort()})}var hs=null,md=0,Fa=0,Xa=null;function pw(i,r){if(hs===null){var s=hs=[];md=0,Fa=x0(),Xa={status:"pending",value:void 0,then:function(c){s.push(c)}}}return md++,r.then(Z2,Z2),r}function Z2(){if(--md===0&&hs!==null){Xa!==null&&(Xa.status="fulfilled");var i=hs;hs=null,Fa=0,Xa=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function hw(i,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var W2=$.S;$.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&pw(i,r),W2!==null&&W2(i,r)};var da=X(null);function gd(){var i=da.current;return i!==null?i:_e.pooledCache}function sl(i,r){r===null?re(da,da.current):re(da,r.pool)}function K2(){var i=gd();return i===null?null:{parent:ot._currentValue,pool:i}}var ms=Error(a(460)),Q2=Error(a(474)),ol=Error(a(542)),xd={then:function(){}};function J2(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ll(){}function em(i,r,s){switch(s=i[s],s===void 0?i.push(r):s!==r&&(r.then(ll,ll),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,im(i),i;default:if(typeof r.status=="string")r.then(ll,ll);else{if(i=_e,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,im(i),i}throw gs=r,ms}}var gs=null;function tm(){if(gs===null)throw Error(a(459));var i=gs;return gs=null,i}function im(i){if(i===ms||i===ol)throw Error(a(483))}var Cn=!1;function vd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yd(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Tn(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function En(i,r,s){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=el(i),U2(i,null,s),r}return Jo(i,c,r,s),el(i)}function xs(i,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,Z1(i,s)}}function wd(i,r){var s=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};x===null?h=x=b:x=x.next=b,s=s.next}while(s!==null);x===null?h=x=r:x=x.next=r}else h=x=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,callbacks:c.callbacks},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=r:i.next=r,s.lastBaseUpdate=r}var bd=!1;function vs(){if(bd){var i=Xa;if(i!==null)throw i}}function ys(i,r,s,c){bd=!1;var h=i.updateQueue;Cn=!1;var x=h.firstBaseUpdate,b=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var H=A,U=H.next;H.next=null,b===null?x=U:b.next=U,b=H;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==b&&(A===null?Z.firstBaseUpdate=U:A.next=U,Z.lastBaseUpdate=H))}if(x!==null){var ee=h.baseState;b=0,Z=U=H=null,A=x;do{var G=A.lane&-536870913,q=G!==A.lane;if(q?(Ee&G)===G:(c&G)===G){G!==0&&G===Fa&&(bd=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var me=i,fe=A;G=r;var Ie=s;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){ee=me.call(Ie,ee,G);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,G=typeof me=="function"?me.call(Ie,ee,G):me,G==null)break e;ee=g({},ee,G);break e;case 2:Cn=!0}}G=A.callback,G!==null&&(i.flags|=64,q&&(i.flags|=8192),q=h.callbacks,q===null?h.callbacks=[G]:q.push(G))}else q={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(U=Z=q,H=ee):Z=Z.next=q,b|=G;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;q=A,A=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);Z===null&&(H=ee),h.baseState=H,h.firstBaseUpdate=U,h.lastBaseUpdate=Z,x===null&&(h.shared.lanes=0),Vn|=b,i.lanes=b,i.memoizedState=ee}}function nm(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function am(i,r){var s=i.callbacks;if(s!==null)for(i.callbacks=null,i=0;i<s.length;i++)nm(s[i],r)}var Za=X(null),cl=X(0);function rm(i,r){i=un,re(cl,i),re(Za,r),un=i|r.baseLanes}function Sd(){re(cl,un),re(Za,Za.current)}function Cd(){un=cl.current,ne(Za),ne(cl)}var jn=0,we=null,$e=null,it=null,ul=!1,Wa=!1,fa=!1,dl=0,ws=0,Ka=null,mw=0;function Je(){throw Error(a(321))}function Td(i,r){if(r===null)return!1;for(var s=0;s<r.length&&s<i.length;s++)if(!Wt(i[s],r[s]))return!1;return!0}function Ed(i,r,s,c,h,x){return jn=x,we=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$.H=i===null||i.memoizedState===null?Um:_m,fa=!1,x=s(c,h),fa=!1,Wa&&(x=om(r,s,c,h)),sm(i),x}function sm(i){$.H=xl;var r=$e!==null&&$e.next!==null;if(jn=0,it=$e=we=null,ul=!1,ws=0,Ka=null,r)throw Error(a(300));i===null||dt||(i=i.dependencies,i!==null&&al(i)&&(dt=!0))}function om(i,r,s,c){we=i;var h=0;do{if(Wa&&(Ka=null),ws=0,Wa=!1,25<=h)throw Error(a(301));if(h+=1,it=$e=null,i.updateQueue!=null){var x=i.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}$.H=Sw,x=r(s,c)}while(Wa);return x}function gw(){var i=$.H,r=i.useState()[0];return r=typeof r.then=="function"?bs(r):r,i=i.useState()[0],($e!==null?$e.memoizedState:null)!==i&&(we.flags|=1024),r}function jd(){var i=dl!==0;return dl=0,i}function Ad(i,r,s){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~s}function Md(i){if(ul){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ul=!1}jn=0,it=$e=we=null,Wa=!1,ws=dl=0,Ka=null}function Pt(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?we.memoizedState=it=i:it=it.next=i,it}function nt(){if($e===null){var i=we.alternate;i=i!==null?i.memoizedState:null}else i=$e.next;var r=it===null?we.memoizedState:it.next;if(r!==null)it=r,$e=i;else{if(i===null)throw we.alternate===null?Error(a(467)):Error(a(310));$e=i,i={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},it===null?we.memoizedState=it=i:it=it.next=i}return it}function Ld(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bs(i){var r=ws;return ws+=1,Ka===null&&(Ka=[]),i=em(Ka,i,r),r=we,(it===null?r.memoizedState:it.next)===null&&(r=r.alternate,$.H=r===null||r.memoizedState===null?Um:_m),i}function fl(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bs(i);if(i.$$typeof===T)return jt(i)}throw Error(a(438,String(i)))}function Od(i){var r=null,s=we.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=we.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Ld(),we.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(i),c=0;c<i;c++)s[c]=F;return r.index++,s}function an(i,r){return typeof r=="function"?r(i):r}function pl(i){var r=nt();return Rd(r,$e,i)}function Rd(i,r,s){var c=i.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var h=i.baseQueue,x=c.pending;if(x!==null){if(h!==null){var b=h.next;h.next=x.next,x.next=b}r.baseQueue=h=x,c.pending=null}if(x=i.baseState,h===null)i.memoizedState=x;else{r=h.next;var A=b=null,H=null,U=r,Z=!1;do{var ee=U.lane&-536870913;if(ee!==U.lane?(Ee&ee)===ee:(jn&ee)===ee){var G=U.revertLane;if(G===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ee===Fa&&(Z=!0);else if((jn&G)===G){U=U.next,G===Fa&&(Z=!0);continue}else ee={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},H===null?(A=H=ee,b=x):H=H.next=ee,we.lanes|=G,Vn|=G;ee=U.action,fa&&s(x,ee),x=U.hasEagerState?U.eagerState:s(x,ee)}else G={lane:ee,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},H===null?(A=H=G,b=x):H=H.next=G,we.lanes|=ee,Vn|=ee;U=U.next}while(U!==null&&U!==r);if(H===null?b=x:H.next=A,!Wt(x,i.memoizedState)&&(dt=!0,Z&&(s=Xa,s!==null)))throw s;i.memoizedState=x,i.baseState=b,i.baseQueue=H,c.lastRenderedState=x}return h===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function kd(i){var r=nt(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=i;var c=s.dispatch,h=s.pending,x=r.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do x=i(x,b.action),b=b.next;while(b!==h);Wt(x,r.memoizedState)||(dt=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function lm(i,r,s){var c=we,h=nt(),x=Ae;if(x){if(s===void 0)throw Error(a(407));s=s()}else s=r();var b=!Wt(($e||h).memoizedState,s);b&&(h.memoizedState=s,dt=!0),h=h.queue;var A=dm.bind(null,c,h,i);if(Ss(2048,8,A,[i]),h.getSnapshot!==r||b||it!==null&&it.memoizedState.tag&1){if(c.flags|=2048,Qa(9,hl(),um.bind(null,c,h,s,r),null),_e===null)throw Error(a(349));x||(jn&124)!==0||cm(c,r,s)}return s}function cm(i,r,s){i.flags|=16384,i={getSnapshot:r,value:s},r=we.updateQueue,r===null?(r=Ld(),we.updateQueue=r,r.stores=[i]):(s=r.stores,s===null?r.stores=[i]:s.push(i))}function um(i,r,s,c){r.value=s,r.getSnapshot=c,fm(r)&&pm(i)}function dm(i,r,s){return s(function(){fm(r)&&pm(i)})}function fm(i){var r=i.getSnapshot;i=i.value;try{var s=r();return!Wt(i,s)}catch{return!0}}function pm(i){var r=_a(i,2);r!==null&&ii(r,i,2)}function Vd(i){var r=Pt();if(typeof i=="function"){var s=i;if(i=s(),fa){yn(!0);try{s()}finally{yn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:i},r}function hm(i,r,s,c){return i.baseState=s,Rd(i,$e,typeof c=="function"?c:an)}function xw(i,r,s,c,h){if(gl(i))throw Error(a(485));if(i=r.action,i!==null){var x={payload:h,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){x.listeners.push(b)}};$.T!==null?s(!0):x.isTransition=!1,c(x),s=r.pending,s===null?(x.next=r.pending=x,mm(r,x)):(x.next=s.next,r.pending=s.next=x)}}function mm(i,r){var s=r.action,c=r.payload,h=i.state;if(r.isTransition){var x=$.T,b={};$.T=b;try{var A=s(h,c),H=$.S;H!==null&&H(b,A),gm(i,r,A)}catch(U){Hd(i,r,U)}finally{$.T=x}}else try{x=s(h,c),gm(i,r,x)}catch(U){Hd(i,r,U)}}function gm(i,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){xm(i,r,c)},function(c){return Hd(i,r,c)}):xm(i,r,s)}function xm(i,r,s){r.status="fulfilled",r.value=s,vm(r),i.state=s,r=i.pending,r!==null&&(s=r.next,s===r?i.pending=null:(s=s.next,r.next=s,mm(i,s)))}function Hd(i,r,s){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,vm(r),r=r.next;while(r!==c)}i.action=null}function vm(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function ym(i,r){return r}function wm(i,r){if(Ae){var s=_e.formState;if(s!==null){e:{var c=we;if(Ae){if(Ze){t:{for(var h=Ze,x=Vi;h.nodeType!==8;){if(!x){h=null;break t}if(h=Ei(h.nextSibling),h===null){h=null;break t}}x=h.data,h=x==="F!"||x==="F"?h:null}if(h){Ze=Ei(h.nextSibling),c=h.data==="F!";break e}}la(c)}c=!1}c&&(r=s[0])}}return s=Pt(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:r},s.queue=c,s=$m.bind(null,we,c),c.dispatch=s,c=Vd(!1),x=$d.bind(null,we,!1,c.queue),c=Pt(),h={state:r,dispatch:null,action:i,pending:null},c.queue=h,s=xw.bind(null,we,h,x,s),h.dispatch=s,c.memoizedState=i,[r,s,!1]}function bm(i){var r=nt();return Sm(r,$e,i)}function Sm(i,r,s){if(r=Rd(i,r,ym)[0],i=pl(an)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=bs(r)}catch(b){throw b===ms?ol:b}else c=r;r=nt();var h=r.queue,x=h.dispatch;return s!==r.memoizedState&&(we.flags|=2048,Qa(9,hl(),vw.bind(null,h,s),null)),[c,x,i]}function vw(i,r){i.action=r}function Cm(i){var r=nt(),s=$e;if(s!==null)return Sm(r,s,i);nt(),r=r.memoizedState,s=nt();var c=s.queue.dispatch;return s.memoizedState=i,[r,c,!1]}function Qa(i,r,s,c){return i={tag:i,create:s,deps:c,inst:r,next:null},r=we.updateQueue,r===null&&(r=Ld(),we.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=i.next=i:(c=s.next,s.next=i,i.next=c,r.lastEffect=i),i}function hl(){return{destroy:void 0,resource:void 0}}function Tm(){return nt().memoizedState}function ml(i,r,s,c){var h=Pt();c=c===void 0?null:c,we.flags|=i,h.memoizedState=Qa(1|r,hl(),s,c)}function Ss(i,r,s,c){var h=nt();c=c===void 0?null:c;var x=h.memoizedState.inst;$e!==null&&c!==null&&Td(c,$e.memoizedState.deps)?h.memoizedState=Qa(r,x,s,c):(we.flags|=i,h.memoizedState=Qa(1|r,x,s,c))}function Em(i,r){ml(8390656,8,i,r)}function jm(i,r){Ss(2048,8,i,r)}function Am(i,r){return Ss(4,2,i,r)}function Mm(i,r){return Ss(4,4,i,r)}function Lm(i,r){if(typeof r=="function"){i=i();var s=r(i);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Om(i,r,s){s=s!=null?s.concat([i]):null,Ss(4,4,Lm.bind(null,r,i),s)}function Dd(){}function Rm(i,r){var s=nt();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&Td(r,c[1])?c[0]:(s.memoizedState=[i,r],i)}function km(i,r){var s=nt();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&Td(r,c[1]))return c[0];if(c=i(),fa){yn(!0);try{i()}finally{yn(!1)}}return s.memoizedState=[c,r],c}function zd(i,r,s){return s===void 0||(jn&1073741824)!==0?i.memoizedState=r:(i.memoizedState=s,i=Dg(),we.lanes|=i,Vn|=i,s)}function Vm(i,r,s,c){return Wt(s,r)?s:Za.current!==null?(i=zd(i,s,c),Wt(i,r)||(dt=!0),i):(jn&42)===0?(dt=!0,i.memoizedState=s):(i=Dg(),we.lanes|=i,Vn|=i,r)}function Hm(i,r,s,c,h){var x=W.p;W.p=x!==0&&8>x?x:8;var b=$.T,A={};$.T=A,$d(i,!1,r,s);try{var H=h(),U=$.S;if(U!==null&&U(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var Z=hw(H,c);Cs(i,r,Z,ti(i))}else Cs(i,r,c,ti(i))}catch(ee){Cs(i,r,{then:function(){},status:"rejected",reason:ee},ti())}finally{W.p=x,$.T=b}}function yw(){}function Pd(i,r,s,c){if(i.tag!==5)throw Error(a(476));var h=Dm(i).queue;Hm(i,h,r,J,s===null?yw:function(){return zm(i),s(c)})}function Dm(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:J},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:s},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function zm(i){var r=Dm(i).next.queue;Cs(i,r,{},ti())}function Nd(){return jt(Is)}function Pm(){return nt().memoizedState}function Nm(){return nt().memoizedState}function ww(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var s=ti();i=Tn(s);var c=En(r,i,s);c!==null&&(ii(c,r,s),xs(c,r,s)),r={cache:hd()},i.payload=r;return}r=r.return}}function bw(i,r,s){var c=ti();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gl(i)?Bm(r,s):(s=ad(i,r,s,c),s!==null&&(ii(s,i,c),Im(s,r,c)))}function $m(i,r,s){var c=ti();Cs(i,r,s,c)}function Cs(i,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gl(i))Bm(r,h);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var b=r.lastRenderedState,A=x(b,s);if(h.hasEagerState=!0,h.eagerState=A,Wt(A,b))return Jo(i,r,h,0),_e===null&&Qo(),!1}catch{}finally{}if(s=ad(i,r,h,c),s!==null)return ii(s,i,c),Im(s,r,c),!0}return!1}function $d(i,r,s,c){if(c={lane:2,revertLane:x0(),action:c,hasEagerState:!1,eagerState:null,next:null},gl(i)){if(r)throw Error(a(479))}else r=ad(i,s,c,2),r!==null&&ii(r,i,2)}function gl(i){var r=i.alternate;return i===we||r!==null&&r===we}function Bm(i,r){Wa=ul=!0;var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}function Im(i,r,s){if((s&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,Z1(i,s)}}var xl={readContext:jt,use:fl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Um={readContext:jt,use:fl,useCallback:function(i,r){return Pt().memoizedState=[i,r===void 0?null:r],i},useContext:jt,useEffect:Em,useImperativeHandle:function(i,r,s){s=s!=null?s.concat([i]):null,ml(4194308,4,Lm.bind(null,r,i),s)},useLayoutEffect:function(i,r){return ml(4194308,4,i,r)},useInsertionEffect:function(i,r){ml(4,2,i,r)},useMemo:function(i,r){var s=Pt();r=r===void 0?null:r;var c=i();if(fa){yn(!0);try{i()}finally{yn(!1)}}return s.memoizedState=[c,r],c},useReducer:function(i,r,s){var c=Pt();if(s!==void 0){var h=s(r);if(fa){yn(!0);try{s(r)}finally{yn(!1)}}}else h=r;return c.memoizedState=c.baseState=h,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:h},c.queue=i,i=i.dispatch=bw.bind(null,we,i),[c.memoizedState,i]},useRef:function(i){var r=Pt();return i={current:i},r.memoizedState=i},useState:function(i){i=Vd(i);var r=i.queue,s=$m.bind(null,we,r);return r.dispatch=s,[i.memoizedState,s]},useDebugValue:Dd,useDeferredValue:function(i,r){var s=Pt();return zd(s,i,r)},useTransition:function(){var i=Vd(!1);return i=Hm.bind(null,we,i.queue,!0,!1),Pt().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,s){var c=we,h=Pt();if(Ae){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),_e===null)throw Error(a(349));(Ee&124)!==0||cm(c,r,s)}h.memoizedState=s;var x={value:s,getSnapshot:r};return h.queue=x,Em(dm.bind(null,c,x,i),[i]),c.flags|=2048,Qa(9,hl(),um.bind(null,c,x,s,r),null),s},useId:function(){var i=Pt(),r=_e.identifierPrefix;if(Ae){var s=en,c=Ji;s=(c&~(1<<32-Zt(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=dl++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=mw++,r="«"+r+"r"+s.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Nd,useFormState:wm,useActionState:wm,useOptimistic:function(i){var r=Pt();r.memoizedState=r.baseState=i;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=$d.bind(null,we,!0,s),s.dispatch=r,[i,r]},useMemoCache:Od,useCacheRefresh:function(){return Pt().memoizedState=ww.bind(null,we)}},_m={readContext:jt,use:fl,useCallback:Rm,useContext:jt,useEffect:jm,useImperativeHandle:Om,useInsertionEffect:Am,useLayoutEffect:Mm,useMemo:km,useReducer:pl,useRef:Tm,useState:function(){return pl(an)},useDebugValue:Dd,useDeferredValue:function(i,r){var s=nt();return Vm(s,$e.memoizedState,i,r)},useTransition:function(){var i=pl(an)[0],r=nt().memoizedState;return[typeof i=="boolean"?i:bs(i),r]},useSyncExternalStore:lm,useId:Pm,useHostTransitionStatus:Nd,useFormState:bm,useActionState:bm,useOptimistic:function(i,r){var s=nt();return hm(s,$e,i,r)},useMemoCache:Od,useCacheRefresh:Nm},Sw={readContext:jt,use:fl,useCallback:Rm,useContext:jt,useEffect:jm,useImperativeHandle:Om,useInsertionEffect:Am,useLayoutEffect:Mm,useMemo:km,useReducer:kd,useRef:Tm,useState:function(){return kd(an)},useDebugValue:Dd,useDeferredValue:function(i,r){var s=nt();return $e===null?zd(s,i,r):Vm(s,$e.memoizedState,i,r)},useTransition:function(){var i=kd(an)[0],r=nt().memoizedState;return[typeof i=="boolean"?i:bs(i),r]},useSyncExternalStore:lm,useId:Pm,useHostTransitionStatus:Nd,useFormState:Cm,useActionState:Cm,useOptimistic:function(i,r){var s=nt();return $e!==null?hm(s,$e,i,r):(s.baseState=i,[i,s.queue.dispatch])},useMemoCache:Od,useCacheRefresh:Nm},Ja=null,Ts=0;function vl(i){var r=Ts;return Ts+=1,Ja===null&&(Ja=[]),em(Ja,i,r)}function Es(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function yl(i,r){throw r.$$typeof===v?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Gm(i){var r=i._init;return r(i._payload)}function qm(i){function r(N,D){if(i){var I=N.deletions;I===null?(N.deletions=[D],N.flags|=16):I.push(D)}}function s(N,D){if(!i)return null;for(;D!==null;)r(N,D),D=D.sibling;return null}function c(N){for(var D=new Map;N!==null;)N.key!==null?D.set(N.key,N):D.set(N.index,N),N=N.sibling;return D}function h(N,D){return N=Qi(N,D),N.index=0,N.sibling=null,N}function x(N,D,I){return N.index=I,i?(I=N.alternate,I!==null?(I=I.index,I<D?(N.flags|=67108866,D):I):(N.flags|=67108866,D)):(N.flags|=1048576,D)}function b(N){return i&&N.alternate===null&&(N.flags|=67108866),N}function A(N,D,I,Q){return D===null||D.tag!==6?(D=sd(I,N.mode,Q),D.return=N,D):(D=h(D,I),D.return=N,D)}function H(N,D,I,Q){var se=I.type;return se===S?Z(N,D,I.props.children,Q,I.key):D!==null&&(D.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&Gm(se)===D.type)?(D=h(D,I.props),Es(D,I),D.return=N,D):(D=tl(I.type,I.key,I.props,null,N.mode,Q),Es(D,I),D.return=N,D)}function U(N,D,I,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==I.containerInfo||D.stateNode.implementation!==I.implementation?(D=od(I,N.mode,Q),D.return=N,D):(D=h(D,I.children||[]),D.return=N,D)}function Z(N,D,I,Q,se){return D===null||D.tag!==7?(D=aa(I,N.mode,Q,se),D.return=N,D):(D=h(D,I),D.return=N,D)}function ee(N,D,I){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=sd(""+D,N.mode,I),D.return=N,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case y:return I=tl(D.type,D.key,D.props,null,N.mode,I),Es(I,D),I.return=N,I;case C:return D=od(D,N.mode,I),D.return=N,D;case _:var Q=D._init;return D=Q(D._payload),ee(N,D,I)}if(oe(D)||ie(D))return D=aa(D,N.mode,I,null),D.return=N,D;if(typeof D.then=="function")return ee(N,vl(D),I);if(D.$$typeof===T)return ee(N,rl(N,D),I);yl(N,D)}return null}function G(N,D,I,Q){var se=D!==null?D.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return se!==null?null:A(N,D,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===se?H(N,D,I,Q):null;case C:return I.key===se?U(N,D,I,Q):null;case _:return se=I._init,I=se(I._payload),G(N,D,I,Q)}if(oe(I)||ie(I))return se!==null?null:Z(N,D,I,Q,null);if(typeof I.then=="function")return G(N,D,vl(I),Q);if(I.$$typeof===T)return G(N,D,rl(N,I),Q);yl(N,I)}return null}function q(N,D,I,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return N=N.get(I)||null,A(D,N,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return N=N.get(Q.key===null?I:Q.key)||null,H(D,N,Q,se);case C:return N=N.get(Q.key===null?I:Q.key)||null,U(D,N,Q,se);case _:var be=Q._init;return Q=be(Q._payload),q(N,D,I,Q,se)}if(oe(Q)||ie(Q))return N=N.get(I)||null,Z(D,N,Q,se,null);if(typeof Q.then=="function")return q(N,D,I,vl(Q),se);if(Q.$$typeof===T)return q(N,D,I,rl(D,Q),se);yl(D,Q)}return null}function me(N,D,I,Q){for(var se=null,be=null,ce=D,he=D=0,pt=null;ce!==null&&he<I.length;he++){ce.index>he?(pt=ce,ce=null):pt=ce.sibling;var je=G(N,ce,I[he],Q);if(je===null){ce===null&&(ce=pt);break}i&&ce&&je.alternate===null&&r(N,ce),D=x(je,D,he),be===null?se=je:be.sibling=je,be=je,ce=pt}if(he===I.length)return s(N,ce),Ae&&sa(N,he),se;if(ce===null){for(;he<I.length;he++)ce=ee(N,I[he],Q),ce!==null&&(D=x(ce,D,he),be===null?se=ce:be.sibling=ce,be=ce);return Ae&&sa(N,he),se}for(ce=c(ce);he<I.length;he++)pt=q(ce,N,he,I[he],Q),pt!==null&&(i&&pt.alternate!==null&&ce.delete(pt.key===null?he:pt.key),D=x(pt,D,he),be===null?se=pt:be.sibling=pt,be=pt);return i&&ce.forEach(function(Un){return r(N,Un)}),Ae&&sa(N,he),se}function fe(N,D,I,Q){if(I==null)throw Error(a(151));for(var se=null,be=null,ce=D,he=D=0,pt=null,je=I.next();ce!==null&&!je.done;he++,je=I.next()){ce.index>he?(pt=ce,ce=null):pt=ce.sibling;var Un=G(N,ce,je.value,Q);if(Un===null){ce===null&&(ce=pt);break}i&&ce&&Un.alternate===null&&r(N,ce),D=x(Un,D,he),be===null?se=Un:be.sibling=Un,be=Un,ce=pt}if(je.done)return s(N,ce),Ae&&sa(N,he),se;if(ce===null){for(;!je.done;he++,je=I.next())je=ee(N,je.value,Q),je!==null&&(D=x(je,D,he),be===null?se=je:be.sibling=je,be=je);return Ae&&sa(N,he),se}for(ce=c(ce);!je.done;he++,je=I.next())je=q(ce,N,he,je.value,Q),je!==null&&(i&&je.alternate!==null&&ce.delete(je.key===null?he:je.key),D=x(je,D,he),be===null?se=je:be.sibling=je,be=je);return i&&ce.forEach(function(C9){return r(N,C9)}),Ae&&sa(N,he),se}function Ie(N,D,I,Q){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var se=I.key;D!==null;){if(D.key===se){if(se=I.type,se===S){if(D.tag===7){s(N,D.sibling),Q=h(D,I.props.children),Q.return=N,N=Q;break e}}else if(D.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&Gm(se)===D.type){s(N,D.sibling),Q=h(D,I.props),Es(Q,I),Q.return=N,N=Q;break e}s(N,D);break}else r(N,D);D=D.sibling}I.type===S?(Q=aa(I.props.children,N.mode,Q,I.key),Q.return=N,N=Q):(Q=tl(I.type,I.key,I.props,null,N.mode,Q),Es(Q,I),Q.return=N,N=Q)}return b(N);case C:e:{for(se=I.key;D!==null;){if(D.key===se)if(D.tag===4&&D.stateNode.containerInfo===I.containerInfo&&D.stateNode.implementation===I.implementation){s(N,D.sibling),Q=h(D,I.children||[]),Q.return=N,N=Q;break e}else{s(N,D);break}else r(N,D);D=D.sibling}Q=od(I,N.mode,Q),Q.return=N,N=Q}return b(N);case _:return se=I._init,I=se(I._payload),Ie(N,D,I,Q)}if(oe(I))return me(N,D,I,Q);if(ie(I)){if(se=ie(I),typeof se!="function")throw Error(a(150));return I=se.call(I),fe(N,D,I,Q)}if(typeof I.then=="function")return Ie(N,D,vl(I),Q);if(I.$$typeof===T)return Ie(N,D,rl(N,I),Q);yl(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,D!==null&&D.tag===6?(s(N,D.sibling),Q=h(D,I),Q.return=N,N=Q):(s(N,D),Q=sd(I,N.mode,Q),Q.return=N,N=Q),b(N)):s(N,D)}return function(N,D,I,Q){try{Ts=0;var se=Ie(N,D,I,Q);return Ja=null,se}catch(ce){if(ce===ms||ce===ol)throw ce;var be=Kt(29,ce,null,N.mode);return be.lanes=Q,be.return=N,be}finally{}}}var er=qm(!0),Ym=qm(!1),hi=X(null),Hi=null;function An(i){var r=i.alternate;re(lt,lt.current&1),re(hi,i),Hi===null&&(r===null||Za.current!==null||r.memoizedState!==null)&&(Hi=i)}function Fm(i){if(i.tag===22){if(re(lt,lt.current),re(hi,i),Hi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Hi=i)}}else Mn()}function Mn(){re(lt,lt.current),re(hi,hi.current)}function rn(i){ne(hi),Hi===i&&(Hi=null),ne(lt)}var lt=X(0);function wl(i){for(var r=i;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||L0(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Bd(i,r,s,c){r=i.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var Id={enqueueSetState:function(i,r,s){i=i._reactInternals;var c=ti(),h=Tn(c);h.payload=r,s!=null&&(h.callback=s),r=En(i,h,c),r!==null&&(ii(r,i,c),xs(r,i,c))},enqueueReplaceState:function(i,r,s){i=i._reactInternals;var c=ti(),h=Tn(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=En(i,h,c),r!==null&&(ii(r,i,c),xs(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var s=ti(),c=Tn(s);c.tag=2,r!=null&&(c.callback=r),r=En(i,c,s),r!==null&&(ii(r,i,s),xs(r,i,s))}};function Xm(i,r,s,c,h,x,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,x,b):r.prototype&&r.prototype.isPureReactComponent?!os(s,c)||!os(h,x):!0}function Zm(i,r,s,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==i&&Id.enqueueReplaceState(r,r.state,null)}function pa(i,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(i=i.defaultProps){s===r&&(s=g({},s));for(var h in i)s[h]===void 0&&(s[h]=i[h])}return s}var bl=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Wm(i){bl(i)}function Km(i){console.error(i)}function Qm(i){bl(i)}function Sl(i,r){try{var s=i.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function Jm(i,r,s){try{var c=i.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ud(i,r,s){return s=Tn(s),s.tag=3,s.payload={element:null},s.callback=function(){Sl(i,r)},s}function eg(i){return i=Tn(i),i.tag=3,i}function tg(i,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var x=c.value;i.payload=function(){return h(x)},i.callback=function(){Jm(r,s,c)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(i.callback=function(){Jm(r,s,c),typeof h!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function Cw(i,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&fs(r,s,h,!0),s=hi.current,s!==null){switch(s.tag){case 13:return Hi===null?f0():s.alternate===null&&We===0&&(We=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===xd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),h0(i,c,h)),!1;case 22:return s.flags|=65536,c===xd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),h0(i,c,h)),!1}throw Error(a(435,s.tag))}return h0(i,c,h),f0(),!1}if(Ae)return r=hi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==ud&&(i=Error(a(422),{cause:c}),ds(ui(i,s)))):(c!==ud&&(r=Error(a(423),{cause:c}),ds(ui(r,s))),i=i.current.alternate,i.flags|=65536,h&=-h,i.lanes|=h,c=ui(c,s),h=Ud(i.stateNode,c,h),wd(i,h),We!==4&&(We=2)),!1;var x=Error(a(520),{cause:c});if(x=ui(x,s),ks===null?ks=[x]:ks.push(x),We!==4&&(We=2),r===null)return!0;c=ui(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,i=h&-h,s.lanes|=i,i=Ud(s.stateNode,c,i),wd(s,i),!1;case 1:if(r=s.type,x=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hn===null||!Hn.has(x))))return s.flags|=65536,h&=-h,s.lanes|=h,h=eg(h),tg(h,i,s,c),wd(s,h),!1}s=s.return}while(s!==null);return!1}var ig=Error(a(461)),dt=!1;function yt(i,r,s,c){r.child=i===null?Ym(r,null,s,c):er(r,i.child,s,c)}function ng(i,r,s,c,h){s=s.render;var x=r.ref;if("ref"in c){var b={};for(var A in c)A!=="ref"&&(b[A]=c[A])}else b=c;return ua(r),c=Ed(i,r,s,b,x,h),A=jd(),i!==null&&!dt?(Ad(i,r,h),sn(i,r,h)):(Ae&&A&&ld(r),r.flags|=1,yt(i,r,c,h),r.child)}function ag(i,r,s,c,h){if(i===null){var x=s.type;return typeof x=="function"&&!rd(x)&&x.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=x,rg(i,r,x,c,h)):(i=tl(s.type,null,c,r,r.mode,h),i.ref=r.ref,i.return=r,r.child=i)}if(x=i.child,!Wd(i,h)){var b=x.memoizedProps;if(s=s.compare,s=s!==null?s:os,s(b,c)&&i.ref===r.ref)return sn(i,r,h)}return r.flags|=1,i=Qi(x,c),i.ref=r.ref,i.return=r,r.child=i}function rg(i,r,s,c,h){if(i!==null){var x=i.memoizedProps;if(os(x,c)&&i.ref===r.ref)if(dt=!1,r.pendingProps=c=x,Wd(i,h))(i.flags&131072)!==0&&(dt=!0);else return r.lanes=i.lanes,sn(i,r,h)}return _d(i,r,s,c,h)}function sg(i,r,s){var c=r.pendingProps,h=c.children,x=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=x!==null?x.baseLanes|s:s,i!==null){for(h=r.child=i.child,x=0;h!==null;)x=x|h.lanes|h.childLanes,h=h.sibling;r.childLanes=x&~c}else r.childLanes=0,r.child=null;return og(i,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&sl(r,x!==null?x.cachePool:null),x!==null?rm(r,x):Sd(),Fm(r);else return r.lanes=r.childLanes=536870912,og(i,r,x!==null?x.baseLanes|s:s,s)}else x!==null?(sl(r,x.cachePool),rm(r,x),Mn(),r.memoizedState=null):(i!==null&&sl(r,null),Sd(),Mn());return yt(i,r,h,s),r.child}function og(i,r,s,c){var h=gd();return h=h===null?null:{parent:ot._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},i!==null&&sl(r,null),Sd(),Fm(r),i!==null&&fs(i,r,c,!0),null}function Cl(i,r){var s=r.ref;if(s===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(i===null||i.ref!==s)&&(r.flags|=4194816)}}function _d(i,r,s,c,h){return ua(r),s=Ed(i,r,s,c,void 0,h),c=jd(),i!==null&&!dt?(Ad(i,r,h),sn(i,r,h)):(Ae&&c&&ld(r),r.flags|=1,yt(i,r,s,h),r.child)}function lg(i,r,s,c,h,x){return ua(r),r.updateQueue=null,s=om(r,c,s,h),sm(i),c=jd(),i!==null&&!dt?(Ad(i,r,x),sn(i,r,x)):(Ae&&c&&ld(r),r.flags|=1,yt(i,r,s,x),r.child)}function cg(i,r,s,c,h){if(ua(r),r.stateNode===null){var x=Ga,b=s.contextType;typeof b=="object"&&b!==null&&(x=jt(b)),x=new s(c,x),r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=Id,r.stateNode=x,x._reactInternals=r,x=r.stateNode,x.props=c,x.state=r.memoizedState,x.refs={},vd(r),b=s.contextType,x.context=typeof b=="object"&&b!==null?jt(b):Ga,x.state=r.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Bd(r,s,b,c),x.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(b=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),b!==x.state&&Id.enqueueReplaceState(x,x.state,null),ys(r,c,x,h),vs(),x.state=r.memoizedState),typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){x=r.stateNode;var A=r.memoizedProps,H=pa(s,A);x.props=H;var U=x.context,Z=s.contextType;b=Ga,typeof Z=="object"&&Z!==null&&(b=jt(Z));var ee=s.getDerivedStateFromProps;Z=typeof ee=="function"||typeof x.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Z||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(A||U!==b)&&Zm(r,x,c,b),Cn=!1;var G=r.memoizedState;x.state=G,ys(r,c,x,h),vs(),U=r.memoizedState,A||G!==U||Cn?(typeof ee=="function"&&(Bd(r,s,ee,c),U=r.memoizedState),(H=Cn||Xm(r,s,H,c,G,U,b))?(Z||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(r.flags|=4194308)):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=U),x.props=c,x.state=U,x.context=b,c=H):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{x=r.stateNode,yd(i,r),b=r.memoizedProps,Z=pa(s,b),x.props=Z,ee=r.pendingProps,G=x.context,U=s.contextType,H=Ga,typeof U=="object"&&U!==null&&(H=jt(U)),A=s.getDerivedStateFromProps,(U=typeof A=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(b!==ee||G!==H)&&Zm(r,x,c,H),Cn=!1,G=r.memoizedState,x.state=G,ys(r,c,x,h),vs();var q=r.memoizedState;b!==ee||G!==q||Cn||i!==null&&i.dependencies!==null&&al(i.dependencies)?(typeof A=="function"&&(Bd(r,s,A,c),q=r.memoizedState),(Z=Cn||Xm(r,s,Z,c,G,q,H)||i!==null&&i.dependencies!==null&&al(i.dependencies))?(U||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(c,q,H),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(c,q,H)),typeof x.componentDidUpdate=="function"&&(r.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof x.componentDidUpdate!="function"||b===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=q),x.props=c,x.state=q,x.context=H,c=Z):(typeof x.componentDidUpdate!="function"||b===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),c=!1)}return x=c,Cl(i,r),c=(r.flags&128)!==0,x||c?(x=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:x.render(),r.flags|=1,i!==null&&c?(r.child=er(r,i.child,null,h),r.child=er(r,null,s,h)):yt(i,r,s,h),r.memoizedState=x.state,i=r.child):i=sn(i,r,h),i}function ug(i,r,s,c){return us(),r.flags|=256,yt(i,r,s,c),r.child}var Gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qd(i){return{baseLanes:i,cachePool:K2()}}function Yd(i,r,s){return i=i!==null?i.childLanes&~s:0,r&&(i|=mi),i}function dg(i,r,s){var c=r.pendingProps,h=!1,x=(r.flags&128)!==0,b;if((b=x)||(b=i!==null&&i.memoizedState===null?!1:(lt.current&2)!==0),b&&(h=!0,r.flags&=-129),b=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ae){if(h?An(r):Mn(),Ae){var A=Ze,H;if(H=A){e:{for(H=A,A=Vi;H.nodeType!==8;){if(!A){A=null;break e}if(H=Ei(H.nextSibling),H===null){A=null;break e}}A=H}A!==null?(r.memoizedState={dehydrated:A,treeContext:ra!==null?{id:Ji,overflow:en}:null,retryLane:536870912,hydrationErrors:null},H=Kt(18,null,null,0),H.stateNode=A,H.return=r,r.child=H,Rt=r,Ze=null,H=!0):H=!1}H||la(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return L0(A)?r.lanes=32:r.lanes=536870912,null;rn(r)}return A=c.children,c=c.fallback,h?(Mn(),h=r.mode,A=Tl({mode:"hidden",children:A},h),c=aa(c,h,s,null),A.return=r,c.return=r,A.sibling=c,r.child=A,h=r.child,h.memoizedState=qd(s),h.childLanes=Yd(i,b,s),r.memoizedState=Gd,c):(An(r),Fd(r,A))}if(H=i.memoizedState,H!==null&&(A=H.dehydrated,A!==null)){if(x)r.flags&256?(An(r),r.flags&=-257,r=Xd(i,r,s)):r.memoizedState!==null?(Mn(),r.child=i.child,r.flags|=128,r=null):(Mn(),h=c.fallback,A=r.mode,c=Tl({mode:"visible",children:c.children},A),h=aa(h,A,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,er(r,i.child,null,s),c=r.child,c.memoizedState=qd(s),c.childLanes=Yd(i,b,s),r.memoizedState=Gd,r=h);else if(An(r),L0(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var U=b.dgst;b=U,c=Error(a(419)),c.stack="",c.digest=b,ds({value:c,source:null,stack:null}),r=Xd(i,r,s)}else if(dt||fs(i,r,s,!1),b=(s&i.childLanes)!==0,dt||b){if(b=_e,b!==null&&(c=s&-s,c=(c&42)!==0?1:Ou(c),c=(c&(b.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,_a(i,c),ii(b,i,c),ig;A.data==="$?"||f0(),r=Xd(i,r,s)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=H.treeContext,Ze=Ei(A.nextSibling),Rt=r,Ae=!0,oa=null,Vi=!1,i!==null&&(fi[pi++]=Ji,fi[pi++]=en,fi[pi++]=ra,Ji=i.id,en=i.overflow,ra=r),r=Fd(r,c.children),r.flags|=4096);return r}return h?(Mn(),h=c.fallback,A=r.mode,H=i.child,U=H.sibling,c=Qi(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,U!==null?h=Qi(U,h):(h=aa(h,A,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,A=i.child.memoizedState,A===null?A=qd(s):(H=A.cachePool,H!==null?(U=ot._currentValue,H=H.parent!==U?{parent:U,pool:U}:H):H=K2(),A={baseLanes:A.baseLanes|s,cachePool:H}),h.memoizedState=A,h.childLanes=Yd(i,b,s),r.memoizedState=Gd,c):(An(r),s=i.child,i=s.sibling,s=Qi(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,i!==null&&(b=r.deletions,b===null?(r.deletions=[i],r.flags|=16):b.push(i)),r.child=s,r.memoizedState=null,s)}function Fd(i,r){return r=Tl({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Tl(i,r){return i=Kt(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Xd(i,r,s){return er(r,i.child,null,s),i=Fd(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function fg(i,r,s){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),fd(i.return,r,s)}function Zd(i,r,s,c,h){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=h)}function pg(i,r,s){var c=r.pendingProps,h=c.revealOrder,x=c.tail;if(yt(i,r,c.children,s),c=lt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&fg(i,s,r);else if(i.tag===19)fg(i,s,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(re(lt,c),h){case"forwards":for(s=r.child,h=null;s!==null;)i=s.alternate,i!==null&&wl(i)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Zd(r,!1,h,s,x);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(i=h.alternate,i!==null&&wl(i)===null){r.child=h;break}i=h.sibling,h.sibling=s,s=h,h=i}Zd(r,!0,s,null,x);break;case"together":Zd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function sn(i,r,s){if(i!==null&&(r.dependencies=i.dependencies),Vn|=r.lanes,(s&r.childLanes)===0)if(i!==null){if(fs(i,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,s=Qi(i,i.pendingProps),r.child=s,s.return=r;i.sibling!==null;)i=i.sibling,s=s.sibling=Qi(i,i.pendingProps),s.return=r;s.sibling=null}return r.child}function Wd(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&al(i)))}function Tw(i,r,s){switch(r.tag){case 3:Re(r,r.stateNode.containerInfo),Sn(r,ot,i.memoizedState.cache),us();break;case 27:case 5:Qn(r);break;case 4:Re(r,r.stateNode.containerInfo);break;case 10:Sn(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(An(r),r.flags|=128,null):(s&r.child.childLanes)!==0?dg(i,r,s):(An(r),i=sn(i,r,s),i!==null?i.sibling:null);An(r);break;case 19:var h=(i.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(fs(i,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return pg(i,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(lt,lt.current),c)break;return null;case 22:case 23:return r.lanes=0,sg(i,r,s);case 24:Sn(r,ot,i.memoizedState.cache)}return sn(i,r,s)}function hg(i,r,s){if(i!==null)if(i.memoizedProps!==r.pendingProps)dt=!0;else{if(!Wd(i,s)&&(r.flags&128)===0)return dt=!1,Tw(i,r,s);dt=(i.flags&131072)!==0}else dt=!1,Ae&&(r.flags&1048576)!==0&&G2(r,nl,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")rd(c)?(i=pa(c,i),r.tag=1,r=cg(null,r,c,i,s)):(r.tag=0,r=_d(null,r,c,i,s));else{if(c!=null){if(h=c.$$typeof,h===V){r.tag=11,r=ng(null,r,c,i,s);break e}else if(h===z){r.tag=14,r=ag(null,r,c,i,s);break e}}throw r=de(c)||c,Error(a(306,r,""))}}return r;case 0:return _d(i,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=pa(c,r.pendingProps),cg(i,r,c,h,s);case 3:e:{if(Re(r,r.stateNode.containerInfo),i===null)throw Error(a(387));c=r.pendingProps;var x=r.memoizedState;h=x.element,yd(i,r),ys(r,c,null,s);var b=r.memoizedState;if(c=b.cache,Sn(r,ot,c),c!==x.cache&&pd(r,[ot],s,!0),vs(),c=b.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:b.cache},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){r=ug(i,r,c,s);break e}else if(c!==h){h=ui(Error(a(424)),r),ds(h),r=ug(i,r,c,s);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ze=Ei(i.firstChild),Rt=r,Ae=!0,oa=null,Vi=!0,s=Ym(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(us(),c===h){r=sn(i,r,s);break e}yt(i,r,c,s)}r=r.child}return r;case 26:return Cl(i,r),i===null?(s=v3(r.type,null,r.pendingProps,null))?r.memoizedState=s:Ae||(s=r.type,i=r.pendingProps,c=Nl(pe.current).createElement(s),c[Et]=r,c[Dt]=i,bt(c,s,i),ut(c),r.stateNode=c):r.memoizedState=v3(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Qn(r),i===null&&Ae&&(c=r.stateNode=m3(r.type,r.pendingProps,pe.current),Rt=r,Vi=!0,h=Ze,Pn(r.type)?(O0=h,Ze=Ei(c.firstChild)):Ze=h),yt(i,r,r.pendingProps.children,s),Cl(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ae&&((h=c=Ze)&&(c=Qw(c,r.type,r.pendingProps,Vi),c!==null?(r.stateNode=c,Rt=r,Ze=Ei(c.firstChild),Vi=!1,h=!0):h=!1),h||la(r)),Qn(r),h=r.type,x=r.pendingProps,b=i!==null?i.memoizedProps:null,c=x.children,j0(h,x)?c=null:b!==null&&j0(h,b)&&(r.flags|=32),r.memoizedState!==null&&(h=Ed(i,r,gw,null,null,s),Is._currentValue=h),Cl(i,r),yt(i,r,c,s),r.child;case 6:return i===null&&Ae&&((i=s=Ze)&&(s=Jw(s,r.pendingProps,Vi),s!==null?(r.stateNode=s,Rt=r,Ze=null,i=!0):i=!1),i||la(r)),null;case 13:return dg(i,r,s);case 4:return Re(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=er(r,null,c,s):yt(i,r,c,s),r.child;case 11:return ng(i,r,r.type,r.pendingProps,s);case 7:return yt(i,r,r.pendingProps,s),r.child;case 8:return yt(i,r,r.pendingProps.children,s),r.child;case 12:return yt(i,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,Sn(r,r.type,c.value),yt(i,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,ua(r),h=jt(h),c=c(h),r.flags|=1,yt(i,r,c,s),r.child;case 14:return ag(i,r,r.type,r.pendingProps,s);case 15:return rg(i,r,r.type,r.pendingProps,s);case 19:return pg(i,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},i===null?(s=Tl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Qi(i.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return sg(i,r,s);case 24:return ua(r),c=jt(ot),i===null?(h=gd(),h===null&&(h=_e,x=hd(),h.pooledCache=x,x.refCount++,x!==null&&(h.pooledCacheLanes|=s),h=x),r.memoizedState={parent:c,cache:h},vd(r),Sn(r,ot,h)):((i.lanes&s)!==0&&(yd(i,r),ys(r,null,null,s),vs()),h=i.memoizedState,x=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Sn(r,ot,c)):(c=x.cache,Sn(r,ot,c),c!==h.cache&&pd(r,[ot],s,!0))),yt(i,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function on(i){i.flags|=4}function mg(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!C3(r)){if(r=hi.current,r!==null&&((Ee&4194048)===Ee?Hi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||r!==Hi))throw gs=xd,Q2;i.flags|=8192}}function El(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?F1():536870912,i.lanes|=r,ar|=r)}function js(i,r){if(!Ae)switch(i.tailMode){case"hidden":r=i.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Fe(i){var r=i.alternate!==null&&i.alternate.child===i.child,s=0,c=0;if(r)for(var h=i.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=c,i.childLanes=s,r}function Ew(i,r,s){var c=r.pendingProps;switch(cd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(r),null;case 1:return Fe(r),null;case 3:return s=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),nn(ot),Tt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(i===null||i.child===null)&&(cs(r)?on(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,F2())),Fe(r),null;case 26:return s=r.memoizedState,i===null?(on(r),s!==null?(Fe(r),mg(r,s)):(Fe(r),r.flags&=-16777217)):s?s!==i.memoizedState?(on(r),Fe(r),mg(r,s)):(Fe(r),r.flags&=-16777217):(i.memoizedProps!==c&&on(r),Fe(r),r.flags&=-16777217),null;case 27:Zi(r),s=pe.current;var h=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}i=ue.current,cs(r)?q2(r):(i=m3(h,c,s),r.stateNode=i,on(r))}return Fe(r),null;case 5:if(Zi(r),s=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}if(i=ue.current,cs(r))q2(r);else{switch(h=Nl(pe.current),i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}i[Et]=r,i[Dt]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=i;e:switch(bt(i,s,c),s){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&on(r)}}return Fe(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=pe.current,cs(r)){if(i=r.stateNode,s=r.memoizedProps,c=null,h=Rt,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}i[Et]=r,i=!!(i.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||l3(i.nodeValue,s)),i||la(r)}else i=Nl(i).createTextNode(c),i[Et]=r,r.stateNode=i}return Fe(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(h=cs(r),c!==null&&c.dehydrated!==null){if(i===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Et]=r}else us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fe(r),h=!1}else h=F2(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(rn(r),r):(rn(r),null)}if(rn(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,i=i!==null&&i.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var x=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(x=c.memoizedState.cachePool.pool),x!==h&&(c.flags|=2048)}return s!==i&&s&&(r.child.flags|=8192),El(r,r.updateQueue),Fe(r),null;case 4:return Tt(),i===null&&b0(r.stateNode.containerInfo),Fe(r),null;case 10:return nn(r.type),Fe(r),null;case 19:if(ne(lt),h=r.memoizedState,h===null)return Fe(r),null;if(c=(r.flags&128)!==0,x=h.rendering,x===null)if(c)js(h,!1);else{if(We!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(x=wl(i),x!==null){for(r.flags|=128,js(h,!1),i=x.updateQueue,r.updateQueue=i,El(r,i),r.subtreeFlags=0,i=s,s=r.child;s!==null;)_2(s,i),s=s.sibling;return re(lt,lt.current&1|2),r.child}i=i.sibling}h.tail!==null&&ki()>Ml&&(r.flags|=128,c=!0,js(h,!1),r.lanes=4194304)}else{if(!c)if(i=wl(x),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,El(r,i),js(h,!0),h.tail===null&&h.tailMode==="hidden"&&!x.alternate&&!Ae)return Fe(r),null}else 2*ki()-h.renderingStartTime>Ml&&s!==536870912&&(r.flags|=128,c=!0,js(h,!1),r.lanes=4194304);h.isBackwards?(x.sibling=r.child,r.child=x):(i=h.last,i!==null?i.sibling=x:r.child=x,h.last=x)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=ki(),r.sibling=null,i=lt.current,re(lt,c?i&1|2:i&1),r):(Fe(r),null);case 22:case 23:return rn(r),Cd(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Fe(r),r.subtreeFlags&6&&(r.flags|=8192)):Fe(r),s=r.updateQueue,s!==null&&El(r,s.retryQueue),s=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),i!==null&&ne(da),null;case 24:return s=null,i!==null&&(s=i.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),nn(ot),Fe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function jw(i,r){switch(cd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return nn(ot),Tt(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Zi(r),null;case 13:if(rn(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));us()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ne(lt),null;case 4:return Tt(),null;case 10:return nn(r.type),null;case 22:case 23:return rn(r),Cd(),i!==null&&ne(da),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return nn(ot),null;case 25:return null;default:return null}}function gg(i,r){switch(cd(r),r.tag){case 3:nn(ot),Tt();break;case 26:case 27:case 5:Zi(r);break;case 4:Tt();break;case 13:rn(r);break;case 19:ne(lt);break;case 10:nn(r.type);break;case 22:case 23:rn(r),Cd(),i!==null&&ne(da);break;case 24:nn(ot)}}function As(i,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&i)===i){c=void 0;var x=s.create,b=s.inst;c=x(),b.destroy=c}s=s.next}while(s!==h)}}catch(A){Ue(r,r.return,A)}}function Ln(i,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var x=h.next;c=x;do{if((c.tag&i)===i){var b=c.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,h=r;var H=s,U=A;try{U()}catch(Z){Ue(h,H,Z)}}}c=c.next}while(c!==x)}}catch(Z){Ue(r,r.return,Z)}}function xg(i){var r=i.updateQueue;if(r!==null){var s=i.stateNode;try{am(r,s)}catch(c){Ue(i,i.return,c)}}}function vg(i,r,s){s.props=pa(i.type,i.memoizedProps),s.state=i.memoizedState;try{s.componentWillUnmount()}catch(c){Ue(i,r,c)}}function Ms(i,r){try{var s=i.ref;if(s!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof s=="function"?i.refCleanup=s(c):s.current=c}}catch(h){Ue(i,r,h)}}function Di(i,r){var s=i.ref,c=i.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ue(i,r,h)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ue(i,r,h)}else s.current=null}function yg(i){var r=i.type,s=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ue(i,i.return,h)}}function Kd(i,r,s){try{var c=i.stateNode;Fw(c,i.type,s,r),c[Dt]=r}catch(h){Ue(i,i.return,h)}}function wg(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Pn(i.type)||i.tag===4}function Qd(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||wg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Pn(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Jd(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(i,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(i),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(c===27&&Pn(i.type)&&(s=i.stateNode,r=null),i=i.child,i!==null))for(Jd(i,r,s),i=i.sibling;i!==null;)Jd(i,r,s),i=i.sibling}function jl(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?s.insertBefore(i,r):s.appendChild(i);else if(c!==4&&(c===27&&Pn(i.type)&&(s=i.stateNode),i=i.child,i!==null))for(jl(i,r,s),i=i.sibling;i!==null;)jl(i,r,s),i=i.sibling}function bg(i){var r=i.stateNode,s=i.memoizedProps;try{for(var c=i.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);bt(r,c,s),r[Et]=i,r[Dt]=s}catch(x){Ue(i,i.return,x)}}var ln=!1,et=!1,e0=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,ft=null;function Aw(i,r){if(i=i.containerInfo,T0=Gl,i=V2(i),Qu(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else e:{s=(s=i.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var b=0,A=-1,H=-1,U=0,Z=0,ee=i,G=null;t:for(;;){for(var q;ee!==s||h!==0&&ee.nodeType!==3||(A=b+h),ee!==x||c!==0&&ee.nodeType!==3||(H=b+c),ee.nodeType===3&&(b+=ee.nodeValue.length),(q=ee.firstChild)!==null;)G=ee,ee=q;for(;;){if(ee===i)break t;if(G===s&&++U===h&&(A=b),G===x&&++Z===c&&(H=b),(q=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=q}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(E0={focusedElem:i,selectionRange:s},Gl=!1,ft=r;ft!==null;)if(r=ft,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,ft=i;else for(;ft!==null;){switch(r=ft,x=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&x!==null){i=void 0,s=r,h=x.memoizedProps,x=x.memoizedState,c=s.stateNode;try{var me=pa(s.type,h,s.elementType===s.type);i=c.getSnapshotBeforeUpdate(me,x),c.__reactInternalSnapshotBeforeUpdate=i}catch(fe){Ue(s,s.return,fe)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,s=i.nodeType,s===9)M0(i);else if(s===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":M0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,ft=i;break}ft=r.return}}function Cg(i,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:On(i,s),c&4&&As(5,s);break;case 1:if(On(i,s),c&4)if(i=s.stateNode,r===null)try{i.componentDidMount()}catch(b){Ue(s,s.return,b)}else{var h=pa(s.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(h,r,i.__reactInternalSnapshotBeforeUpdate)}catch(b){Ue(s,s.return,b)}}c&64&&xg(s),c&512&&Ms(s,s.return);break;case 3:if(On(i,s),c&64&&(i=s.updateQueue,i!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{am(i,r)}catch(b){Ue(s,s.return,b)}}break;case 27:r===null&&c&4&&bg(s);case 26:case 5:On(i,s),r===null&&c&4&&yg(s),c&512&&Ms(s,s.return);break;case 12:On(i,s);break;case 13:On(i,s),c&4&&jg(i,s),c&64&&(i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(s=zw.bind(null,s),e9(i,s))));break;case 22:if(c=s.memoizedState!==null||ln,!c){r=r!==null&&r.memoizedState!==null||et,h=ln;var x=et;ln=c,(et=r)&&!x?Rn(i,s,(s.subtreeFlags&8772)!==0):On(i,s),ln=h,et=x}break;case 30:break;default:On(i,s)}}function Tg(i){var r=i.alternate;r!==null&&(i.alternate=null,Tg(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Vu(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var qe=null,Nt=!1;function cn(i,r,s){for(s=s.child;s!==null;)Eg(i,r,s),s=s.sibling}function Eg(i,r,s){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Zr,s)}catch{}switch(s.tag){case 26:et||Di(s,r),cn(i,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:et||Di(s,r);var c=qe,h=Nt;Pn(s.type)&&(qe=s.stateNode,Nt=!1),cn(i,r,s),Ps(s.stateNode),qe=c,Nt=h;break;case 5:et||Di(s,r);case 6:if(c=qe,h=Nt,qe=null,cn(i,r,s),qe=c,Nt=h,qe!==null)if(Nt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(s.stateNode)}catch(x){Ue(s,r,x)}else try{qe.removeChild(s.stateNode)}catch(x){Ue(s,r,x)}break;case 18:qe!==null&&(Nt?(i=qe,p3(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.stateNode),qs(i)):p3(qe,s.stateNode));break;case 4:c=qe,h=Nt,qe=s.stateNode.containerInfo,Nt=!0,cn(i,r,s),qe=c,Nt=h;break;case 0:case 11:case 14:case 15:et||Ln(2,s,r),et||Ln(4,s,r),cn(i,r,s);break;case 1:et||(Di(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&vg(s,r,c)),cn(i,r,s);break;case 21:cn(i,r,s);break;case 22:et=(c=et)||s.memoizedState!==null,cn(i,r,s),et=c;break;default:cn(i,r,s)}}function jg(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{qs(i)}catch(s){Ue(r,r.return,s)}}function Mw(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new Sg),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new Sg),r;default:throw Error(a(435,i.tag))}}function t0(i,r){var s=Mw(i);r.forEach(function(c){var h=Pw.bind(null,i,c);s.has(c)||(s.add(c),c.then(h,h))})}function Qt(i,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],x=i,b=r,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(Pn(A.type)){qe=A.stateNode,Nt=!1;break e}break;case 5:qe=A.stateNode,Nt=!1;break e;case 3:case 4:qe=A.stateNode.containerInfo,Nt=!0;break e}A=A.return}if(qe===null)throw Error(a(160));Eg(x,b,h),qe=null,Nt=!1,x=h.alternate,x!==null&&(x.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Ag(r,i),r=r.sibling}var Ti=null;function Ag(i,r){var s=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qt(r,i),Jt(i),c&4&&(Ln(3,i,i.return),As(3,i),Ln(5,i,i.return));break;case 1:Qt(r,i),Jt(i),c&512&&(et||s===null||Di(s,s.return)),c&64&&ln&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(s=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Ti;if(Qt(r,i),Jt(i),c&512&&(et||s===null||Di(s,s.return)),c&4){var x=s!==null?s.memoizedState:null;if(c=i.memoizedState,s===null)if(c===null)if(i.stateNode===null){e:{c=i.type,s=i.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":x=h.getElementsByTagName("title")[0],(!x||x[Qr]||x[Et]||x.namespaceURI==="http://www.w3.org/2000/svg"||x.hasAttribute("itemprop"))&&(x=h.createElement(c),h.head.insertBefore(x,h.querySelector("head > title"))),bt(x,c,s),x[Et]=i,ut(x),c=x;break e;case"link":var b=b3("link","href",h).get(c+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(x=b[A],x.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&x.getAttribute("rel")===(s.rel==null?null:s.rel)&&x.getAttribute("title")===(s.title==null?null:s.title)&&x.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break t}}x=h.createElement(c),bt(x,c,s),h.head.appendChild(x);break;case"meta":if(b=b3("meta","content",h).get(c+(s.content||""))){for(A=0;A<b.length;A++)if(x=b[A],x.getAttribute("content")===(s.content==null?null:""+s.content)&&x.getAttribute("name")===(s.name==null?null:s.name)&&x.getAttribute("property")===(s.property==null?null:s.property)&&x.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&x.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break t}}x=h.createElement(c),bt(x,c,s),h.head.appendChild(x);break;default:throw Error(a(468,c))}x[Et]=i,ut(x),c=x}i.stateNode=c}else S3(h,i.type,i.stateNode);else i.stateNode=w3(h,c,i.memoizedProps);else x!==c?(x===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):x.count--,c===null?S3(h,i.type,i.stateNode):w3(h,c,i.memoizedProps)):c===null&&i.stateNode!==null&&Kd(i,i.memoizedProps,s.memoizedProps)}break;case 27:Qt(r,i),Jt(i),c&512&&(et||s===null||Di(s,s.return)),s!==null&&c&4&&Kd(i,i.memoizedProps,s.memoizedProps);break;case 5:if(Qt(r,i),Jt(i),c&512&&(et||s===null||Di(s,s.return)),i.flags&32){h=i.stateNode;try{za(h,"")}catch(q){Ue(i,i.return,q)}}c&4&&i.stateNode!=null&&(h=i.memoizedProps,Kd(i,h,s!==null?s.memoizedProps:h)),c&1024&&(e0=!0);break;case 6:if(Qt(r,i),Jt(i),c&4){if(i.stateNode===null)throw Error(a(162));c=i.memoizedProps,s=i.stateNode;try{s.nodeValue=c}catch(q){Ue(i,i.return,q)}}break;case 3:if(Il=null,h=Ti,Ti=$l(r.containerInfo),Qt(r,i),Ti=h,Jt(i),c&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(r.containerInfo)}catch(q){Ue(i,i.return,q)}e0&&(e0=!1,Mg(i));break;case 4:c=Ti,Ti=$l(i.stateNode.containerInfo),Qt(r,i),Jt(i),Ti=c;break;case 12:Qt(r,i),Jt(i);break;case 13:Qt(r,i),Jt(i),i.child.flags&8192&&i.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(o0=ki()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,t0(i,c)));break;case 22:h=i.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,U=ln,Z=et;if(ln=U||h,et=Z||H,Qt(r,i),et=Z,ln=U,Jt(i),c&8192)e:for(r=i.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||H||ln||et||ha(i)),s=null,r=i;;){if(r.tag===5||r.tag===26){if(s===null){H=s=r;try{if(x=H.stateNode,h)b=x.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=H.stateNode;var ee=H.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Ue(H,H.return,q)}}}else if(r.tag===6){if(s===null){H=r;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(q){Ue(H,H.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,t0(i,s))));break;case 19:Qt(r,i),Jt(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,t0(i,c)));break;case 30:break;case 21:break;default:Qt(r,i),Jt(i)}}function Jt(i){var r=i.flags;if(r&2){try{for(var s,c=i.return;c!==null;){if(wg(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,x=Qd(i);jl(i,x,h);break;case 5:var b=s.stateNode;s.flags&32&&(za(b,""),s.flags&=-33);var A=Qd(i);jl(i,A,b);break;case 3:case 4:var H=s.stateNode.containerInfo,U=Qd(i);Jd(i,U,H);break;default:throw Error(a(161))}}catch(Z){Ue(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function Mg(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;Mg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function On(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Cg(i,r.alternate,r),r=r.sibling}function ha(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ln(4,r,r.return),ha(r);break;case 1:Di(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&vg(r,r.return,s),ha(r);break;case 27:Ps(r.stateNode);case 26:case 5:Di(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}i=i.sibling}}function Rn(i,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=i,x=r,b=x.flags;switch(x.tag){case 0:case 11:case 15:Rn(h,x,s),As(4,x);break;case 1:if(Rn(h,x,s),c=x,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Ue(c,c.return,U)}if(c=x,h=c.updateQueue,h!==null){var A=c.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)nm(H[h],A)}catch(U){Ue(c,c.return,U)}}s&&b&64&&xg(x),Ms(x,x.return);break;case 27:bg(x);case 26:case 5:Rn(h,x,s),s&&c===null&&b&4&&yg(x),Ms(x,x.return);break;case 12:Rn(h,x,s);break;case 13:Rn(h,x,s),s&&b&4&&jg(h,x);break;case 22:x.memoizedState===null&&Rn(h,x,s),Ms(x,x.return);break;case 30:break;default:Rn(h,x,s)}r=r.sibling}}function i0(i,r){var s=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==s&&(i!=null&&i.refCount++,s!=null&&ps(s))}function n0(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ps(i))}function zi(i,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Lg(i,r,s,c),r=r.sibling}function Lg(i,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:zi(i,r,s,c),h&2048&&As(9,r);break;case 1:zi(i,r,s,c);break;case 3:zi(i,r,s,c),h&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ps(i)));break;case 12:if(h&2048){zi(i,r,s,c),i=r.stateNode;try{var x=r.memoizedProps,b=x.id,A=x.onPostCommit;typeof A=="function"&&A(b,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(H){Ue(r,r.return,H)}}else zi(i,r,s,c);break;case 13:zi(i,r,s,c);break;case 23:break;case 22:x=r.stateNode,b=r.alternate,r.memoizedState!==null?x._visibility&2?zi(i,r,s,c):Ls(i,r):x._visibility&2?zi(i,r,s,c):(x._visibility|=2,tr(i,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&i0(b,r);break;case 24:zi(i,r,s,c),h&2048&&n0(r.alternate,r);break;default:zi(i,r,s,c)}}function tr(i,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var x=i,b=r,A=s,H=c,U=b.flags;switch(b.tag){case 0:case 11:case 15:tr(x,b,A,H,h),As(8,b);break;case 23:break;case 22:var Z=b.stateNode;b.memoizedState!==null?Z._visibility&2?tr(x,b,A,H,h):Ls(x,b):(Z._visibility|=2,tr(x,b,A,H,h)),h&&U&2048&&i0(b.alternate,b);break;case 24:tr(x,b,A,H,h),h&&U&2048&&n0(b.alternate,b);break;default:tr(x,b,A,H,h)}r=r.sibling}}function Ls(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=i,c=r,h=c.flags;switch(c.tag){case 22:Ls(s,c),h&2048&&i0(c.alternate,c);break;case 24:Ls(s,c),h&2048&&n0(c.alternate,c);break;default:Ls(s,c)}r=r.sibling}}var Os=8192;function ir(i){if(i.subtreeFlags&Os)for(i=i.child;i!==null;)Og(i),i=i.sibling}function Og(i){switch(i.tag){case 26:ir(i),i.flags&Os&&i.memoizedState!==null&&p9(Ti,i.memoizedState,i.memoizedProps);break;case 5:ir(i);break;case 3:case 4:var r=Ti;Ti=$l(i.stateNode.containerInfo),ir(i),Ti=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Os,Os=16777216,ir(i),Os=r):ir(i));break;default:ir(i)}}function Rg(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Rs(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];ft=c,Vg(c,i)}Rg(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(i),i=i.sibling}function kg(i){switch(i.tag){case 0:case 11:case 15:Rs(i),i.flags&2048&&Ln(9,i,i.return);break;case 3:Rs(i);break;case 12:Rs(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Al(i)):Rs(i);break;default:Rs(i)}}function Al(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];ft=c,Vg(c,i)}Rg(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ln(8,r,r.return),Al(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Al(r));break;default:Al(r)}i=i.sibling}}function Vg(i,r){for(;ft!==null;){var s=ft;switch(s.tag){case 0:case 11:case 15:Ln(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ps(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ft=c;else e:for(s=i;ft!==null;){c=ft;var h=c.sibling,x=c.return;if(Tg(c),c===s){ft=null;break e}if(h!==null){h.return=x,ft=h;break e}ft=x}}}var Lw={getCacheForType:function(i){var r=jt(ot),s=r.data.get(i);return s===void 0&&(s=i(),r.data.set(i,s)),s}},Ow=typeof WeakMap=="function"?WeakMap:Map,ze=0,_e=null,Ce=null,Ee=0,Pe=0,ei=null,kn=!1,nr=!1,a0=!1,un=0,We=0,Vn=0,ma=0,r0=0,mi=0,ar=0,ks=null,$t=null,s0=!1,o0=0,Ml=1/0,Ll=null,Hn=null,wt=0,Dn=null,rr=null,sr=0,l0=0,c0=null,Hg=null,Vs=0,u0=null;function ti(){if((ze&2)!==0&&Ee!==0)return Ee&-Ee;if($.T!==null){var i=Fa;return i!==0?i:x0()}return W1()}function Dg(){mi===0&&(mi=(Ee&536870912)===0||Ae?Y1():536870912);var i=hi.current;return i!==null&&(i.flags|=32),mi}function ii(i,r,s){(i===_e&&(Pe===2||Pe===9)||i.cancelPendingCommit!==null)&&(or(i,0),zn(i,Ee,mi,!1)),Kr(i,s),((ze&2)===0||i!==_e)&&(i===_e&&((ze&2)===0&&(ma|=s),We===4&&zn(i,Ee,mi,!1)),Pi(i))}function zg(i,r,s){if((ze&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&i.expiredLanes)===0||Wr(i,r),h=c?Vw(i,r):p0(i,r,!0),x=c;do{if(h===0){nr&&!c&&zn(i,r,0,!1);break}else{if(s=i.current.alternate,x&&!Rw(s)){h=p0(i,r,!1),x=!1;continue}if(h===2){if(x=r,i.errorRecoveryDisabledLanes&x)var b=0;else b=i.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){r=b;e:{var A=i;h=ks;var H=A.current.memoizedState.isDehydrated;if(H&&(or(A,b).flags|=256),b=p0(A,b,!1),b!==2){if(a0&&!H){A.errorRecoveryDisabledLanes|=x,ma|=x,h=4;break e}x=$t,$t=h,x!==null&&($t===null?$t=x:$t.push.apply($t,x))}h=b}if(x=!1,h!==2)continue}}if(h===1){or(i,0),zn(i,r,0,!0);break}e:{switch(c=i,x=h,x){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:zn(c,r,mi,!kn);break e;case 2:$t=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=o0+300-ki(),10<h)){if(zn(c,r,mi,!kn),Bo(c,0,!0)!==0)break e;c.timeoutHandle=d3(Pg.bind(null,c,s,$t,Ll,s0,r,mi,ma,ar,kn,x,2,-0,0),h);break e}Pg(c,s,$t,Ll,s0,r,mi,ma,ar,kn,x,0,-0,0)}}break}while(!0);Pi(i)}function Pg(i,r,s,c,h,x,b,A,H,U,Z,ee,G,q){if(i.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(Bs={stylesheets:null,count:0,unsuspend:f9},Og(r),ee=h9(),ee!==null)){i.cancelPendingCommit=ee(Gg.bind(null,i,r,x,s,c,h,b,A,H,Z,1,G,q)),zn(i,x,b,!U);return}Gg(i,r,x,s,c,h,b,A,H)}function Rw(i){for(var r=i;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],x=h.getSnapshot;h=h.value;try{if(!Wt(x(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zn(i,r,s,c){r&=~r0,r&=~ma,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var h=r;0<h;){var x=31-Zt(h),b=1<<x;c[x]=-1,h&=~b}s!==0&&X1(i,s,r)}function Ol(){return(ze&6)===0?(Hs(0),!1):!0}function d0(){if(Ce!==null){if(Pe===0)var i=Ce.return;else i=Ce,tn=ca=null,Md(i),Ja=null,Ts=0,i=Ce;for(;i!==null;)gg(i.alternate,i),i=i.return;Ce=null}}function or(i,r){var s=i.timeoutHandle;s!==-1&&(i.timeoutHandle=-1,Zw(s)),s=i.cancelPendingCommit,s!==null&&(i.cancelPendingCommit=null,s()),d0(),_e=i,Ce=s=Qi(i.current,null),Ee=r,Pe=0,ei=null,kn=!1,nr=Wr(i,r),a0=!1,ar=mi=r0=ma=Vn=We=0,$t=ks=null,s0=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var h=31-Zt(c),x=1<<h;r|=i[h],c&=~x}return un=r,Qo(),s}function Ng(i,r){we=null,$.H=xl,r===ms||r===ol?(r=tm(),Pe=3):r===Q2?(r=tm(),Pe=4):Pe=r===ig?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ei=r,Ce===null&&(We=1,Sl(i,ui(r,i.current)))}function $g(){var i=$.H;return $.H=xl,i===null?xl:i}function Bg(){var i=$.A;return $.A=Lw,i}function f0(){We=4,kn||(Ee&4194048)!==Ee&&hi.current!==null||(nr=!0),(Vn&134217727)===0&&(ma&134217727)===0||_e===null||zn(_e,Ee,mi,!1)}function p0(i,r,s){var c=ze;ze|=2;var h=$g(),x=Bg();(_e!==i||Ee!==r)&&(Ll=null,or(i,r)),r=!1;var b=We;e:do try{if(Pe!==0&&Ce!==null){var A=Ce,H=ei;switch(Pe){case 8:d0(),b=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(r=!0);var U=Pe;if(Pe=0,ei=null,lr(i,A,H,U),s&&nr){b=0;break e}break;default:U=Pe,Pe=0,ei=null,lr(i,A,H,U)}}kw(),b=We;break}catch(Z){Ng(i,Z)}while(!0);return r&&i.shellSuspendCounter++,tn=ca=null,ze=c,$.H=h,$.A=x,Ce===null&&(_e=null,Ee=0,Qo()),b}function kw(){for(;Ce!==null;)Ig(Ce)}function Vw(i,r){var s=ze;ze|=2;var c=$g(),h=Bg();_e!==i||Ee!==r?(Ll=null,Ml=ki()+500,or(i,r)):nr=Wr(i,r);e:do try{if(Pe!==0&&Ce!==null){r=Ce;var x=ei;t:switch(Pe){case 1:Pe=0,ei=null,lr(i,r,x,1);break;case 2:case 9:if(J2(x)){Pe=0,ei=null,Ug(r);break}r=function(){Pe!==2&&Pe!==9||_e!==i||(Pe=7),Pi(i)},x.then(r,r);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:J2(x)?(Pe=0,ei=null,Ug(r)):(Pe=0,ei=null,lr(i,r,x,7));break;case 5:var b=null;switch(Ce.tag){case 26:b=Ce.memoizedState;case 5:case 27:var A=Ce;if(!b||C3(b)){Pe=0,ei=null;var H=A.sibling;if(H!==null)Ce=H;else{var U=A.return;U!==null?(Ce=U,Rl(U)):Ce=null}break t}}Pe=0,ei=null,lr(i,r,x,5);break;case 6:Pe=0,ei=null,lr(i,r,x,6);break;case 8:d0(),We=6;break e;default:throw Error(a(462))}}Hw();break}catch(Z){Ng(i,Z)}while(!0);return tn=ca=null,$.H=c,$.A=h,ze=s,Ce!==null?0:(_e=null,Ee=0,Qo(),We)}function Hw(){for(;Ce!==null&&!i7();)Ig(Ce)}function Ig(i){var r=hg(i.alternate,i,un);i.memoizedProps=i.pendingProps,r===null?Rl(i):Ce=r}function Ug(i){var r=i,s=r.alternate;switch(r.tag){case 15:case 0:r=lg(s,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=lg(s,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:Md(r);default:gg(s,r),r=Ce=_2(r,un),r=hg(s,r,un)}i.memoizedProps=i.pendingProps,r===null?Rl(i):Ce=r}function lr(i,r,s,c){tn=ca=null,Md(r),Ja=null,Ts=0;var h=r.return;try{if(Cw(i,h,r,s,Ee)){We=1,Sl(i,ui(s,i.current)),Ce=null;return}}catch(x){if(h!==null)throw Ce=h,x;We=1,Sl(i,ui(s,i.current)),Ce=null;return}r.flags&32768?(Ae||c===1?i=!0:nr||(Ee&536870912)!==0?i=!1:(kn=i=!0,(c===2||c===9||c===3||c===6)&&(c=hi.current,c!==null&&c.tag===13&&(c.flags|=16384))),_g(r,i)):Rl(r)}function Rl(i){var r=i;do{if((r.flags&32768)!==0){_g(r,kn);return}i=r.return;var s=Ew(r.alternate,r,un);if(s!==null){Ce=s;return}if(r=r.sibling,r!==null){Ce=r;return}Ce=r=i}while(r!==null);We===0&&(We=5)}function _g(i,r){do{var s=jw(i.alternate,i);if(s!==null){s.flags&=32767,Ce=s;return}if(s=i.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(i=i.sibling,i!==null)){Ce=i;return}Ce=i=s}while(i!==null);We=6,Ce=null}function Gg(i,r,s,c,h,x,b,A,H){i.cancelPendingCommit=null;do kl();while(wt!==0);if((ze&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(x=r.lanes|r.childLanes,x|=nd,f7(i,s,x,b,A,H),i===_e&&(Ce=_e=null,Ee=0),rr=r,Dn=i,sr=s,l0=x,c0=h,Hg=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,Nw(Po,function(){return Zg(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=$.T,$.T=null,h=W.p,W.p=2,b=ze,ze|=4;try{Aw(i,r,s)}finally{ze=b,W.p=h,$.T=c}}wt=1,qg(),Yg(),Fg()}}function qg(){if(wt===1){wt=0;var i=Dn,r=rr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=$.T,$.T=null;var c=W.p;W.p=2;var h=ze;ze|=4;try{Ag(r,i);var x=E0,b=V2(i.containerInfo),A=x.focusedElem,H=x.selectionRange;if(b!==A&&A&&A.ownerDocument&&k2(A.ownerDocument.documentElement,A)){if(H!==null&&Qu(A)){var U=H.start,Z=H.end;if(Z===void 0&&(Z=U),"selectionStart"in A)A.selectionStart=U,A.selectionEnd=Math.min(Z,A.value.length);else{var ee=A.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var q=G.getSelection(),me=A.textContent.length,fe=Math.min(H.start,me),Ie=H.end===void 0?fe:Math.min(H.end,me);!q.extend&&fe>Ie&&(b=Ie,Ie=fe,fe=b);var N=R2(A,fe),D=R2(A,Ie);if(N&&D&&(q.rangeCount!==1||q.anchorNode!==N.node||q.anchorOffset!==N.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var I=ee.createRange();I.setStart(N.node,N.offset),q.removeAllRanges(),fe>Ie?(q.addRange(I),q.extend(D.node,D.offset)):(I.setEnd(D.node,D.offset),q.addRange(I))}}}}for(ee=[],q=A;q=q.parentNode;)q.nodeType===1&&ee.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ee.length;A++){var Q=ee[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Gl=!!T0,E0=T0=null}finally{ze=h,W.p=c,$.T=s}}i.current=r,wt=2}}function Yg(){if(wt===2){wt=0;var i=Dn,r=rr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=$.T,$.T=null;var c=W.p;W.p=2;var h=ze;ze|=4;try{Cg(i,r.alternate,r)}finally{ze=h,W.p=c,$.T=s}}wt=3}}function Fg(){if(wt===4||wt===3){wt=0,n7();var i=Dn,r=rr,s=sr,c=Hg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?wt=5:(wt=0,rr=Dn=null,Xg(i,i.pendingLanes));var h=i.pendingLanes;if(h===0&&(Hn=null),Ru(s),r=r.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Zr,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=$.T,h=W.p,W.p=2,$.T=null;try{for(var x=i.onRecoverableError,b=0;b<c.length;b++){var A=c[b];x(A.value,{componentStack:A.stack})}}finally{$.T=r,W.p=h}}(sr&3)!==0&&kl(),Pi(i),h=i.pendingLanes,(s&4194090)!==0&&(h&42)!==0?i===u0?Vs++:(Vs=0,u0=i):Vs=0,Hs(0)}}function Xg(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,ps(r)))}function kl(i){return qg(),Yg(),Fg(),Zg()}function Zg(){if(wt!==5)return!1;var i=Dn,r=l0;l0=0;var s=Ru(sr),c=$.T,h=W.p;try{W.p=32>s?32:s,$.T=null,s=c0,c0=null;var x=Dn,b=sr;if(wt=0,rr=Dn=null,sr=0,(ze&6)!==0)throw Error(a(331));var A=ze;if(ze|=4,kg(x.current),Lg(x,x.current,b,s),ze=A,Hs(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Zr,x)}catch{}return!0}finally{W.p=h,$.T=c,Xg(i,r)}}function Wg(i,r,s){r=ui(s,r),r=Ud(i.stateNode,r,2),i=En(i,r,2),i!==null&&(Kr(i,2),Pi(i))}function Ue(i,r,s){if(i.tag===3)Wg(i,i,s);else for(;r!==null;){if(r.tag===3){Wg(r,i,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hn===null||!Hn.has(c))){i=ui(s,i),s=eg(2),c=En(r,s,2),c!==null&&(tg(s,c,r,i),Kr(c,2),Pi(c));break}}r=r.return}}function h0(i,r,s){var c=i.pingCache;if(c===null){c=i.pingCache=new Ow;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(a0=!0,h.add(s),i=Dw.bind(null,i,r,s),r.then(i,i))}function Dw(i,r,s){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&s,i.warmLanes&=~s,_e===i&&(Ee&s)===s&&(We===4||We===3&&(Ee&62914560)===Ee&&300>ki()-o0?(ze&2)===0&&or(i,0):r0|=s,ar===Ee&&(ar=0)),Pi(i)}function Kg(i,r){r===0&&(r=F1()),i=_a(i,r),i!==null&&(Kr(i,r),Pi(i))}function zw(i){var r=i.memoizedState,s=0;r!==null&&(s=r.retryLane),Kg(i,s)}function Pw(i,r){var s=0;switch(i.tag){case 13:var c=i.stateNode,h=i.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),Kg(i,s)}function Nw(i,r){return Au(i,r)}var Vl=null,cr=null,m0=!1,Hl=!1,g0=!1,ga=0;function Pi(i){i!==cr&&i.next===null&&(cr===null?Vl=cr=i:cr=cr.next=i),Hl=!0,m0||(m0=!0,Bw())}function Hs(i,r){if(!g0&&Hl){g0=!0;do for(var s=!1,c=Vl;c!==null;){if(i!==0){var h=c.pendingLanes;if(h===0)var x=0;else{var b=c.suspendedLanes,A=c.pingedLanes;x=(1<<31-Zt(42|i)+1)-1,x&=h&~(b&~A),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(s=!0,t3(c,x))}else x=Ee,x=Bo(c,c===_e?x:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(x&3)===0||Wr(c,x)||(s=!0,t3(c,x));c=c.next}while(s);g0=!1}}function $w(){Qg()}function Qg(){Hl=m0=!1;var i=0;ga!==0&&(Xw()&&(i=ga),ga=0);for(var r=ki(),s=null,c=Vl;c!==null;){var h=c.next,x=Jg(c,r);x===0?(c.next=null,s===null?Vl=h:s.next=h,h===null&&(cr=s)):(s=c,(i!==0||(x&3)!==0)&&(Hl=!0)),c=h}Hs(i)}function Jg(i,r){for(var s=i.suspendedLanes,c=i.pingedLanes,h=i.expirationTimes,x=i.pendingLanes&-62914561;0<x;){var b=31-Zt(x),A=1<<b,H=h[b];H===-1?((A&s)===0||(A&c)!==0)&&(h[b]=d7(A,r)):H<=r&&(i.expiredLanes|=A),x&=~A}if(r=_e,s=Ee,s=Bo(i,i===r?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,s===0||i===r&&(Pe===2||Pe===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Mu(c),i.callbackNode=null,i.callbackPriority=0;if((s&3)===0||Wr(i,s)){if(r=s&-s,r===i.callbackPriority)return r;switch(c!==null&&Mu(c),Ru(s)){case 2:case 8:s=G1;break;case 32:s=Po;break;case 268435456:s=q1;break;default:s=Po}return c=e3.bind(null,i),s=Au(s,c),i.callbackPriority=r,i.callbackNode=s,r}return c!==null&&c!==null&&Mu(c),i.callbackPriority=2,i.callbackNode=null,2}function e3(i,r){if(wt!==0&&wt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var s=i.callbackNode;if(kl()&&i.callbackNode!==s)return null;var c=Ee;return c=Bo(i,i===_e?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(zg(i,c,r),Jg(i,ki()),i.callbackNode!=null&&i.callbackNode===s?e3.bind(null,i):null)}function t3(i,r){if(kl())return null;zg(i,r,!0)}function Bw(){Ww(function(){(ze&6)!==0?Au(_1,$w):Qg()})}function x0(){return ga===0&&(ga=Y1()),ga}function i3(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:qo(""+i)}function n3(i,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,i.id&&s.setAttribute("form",i.id),r.parentNode.insertBefore(s,r),i=new FormData(i),s.parentNode.removeChild(s),i}function Iw(i,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var x=i3((h[Dt]||null).action),b=c.submitter;b&&(r=(r=b[Dt]||null)?i3(r.formAction):b.getAttribute("formAction"),r!==null&&(x=r,b=null));var A=new Zo("action","action",null,c,h);i.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ga!==0){var H=b?n3(h,b):new FormData(h);Pd(s,{pending:!0,data:H,method:h.method,action:x},null,H)}}else typeof x=="function"&&(A.preventDefault(),H=b?n3(h,b):new FormData(h),Pd(s,{pending:!0,data:H,method:h.method,action:x},x,H))},currentTarget:h}]})}}for(var v0=0;v0<id.length;v0++){var y0=id[v0],Uw=y0.toLowerCase(),_w=y0[0].toUpperCase()+y0.slice(1);Ci(Uw,"on"+_w)}Ci(z2,"onAnimationEnd"),Ci(P2,"onAnimationIteration"),Ci(N2,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(sw,"onTransitionRun"),Ci(ow,"onTransitionStart"),Ci(lw,"onTransitionCancel"),Ci($2,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ds));function a3(i,r){r=(r&4)!==0;for(var s=0;s<i.length;s++){var c=i[s],h=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var b=c.length-1;0<=b;b--){var A=c[b],H=A.instance,U=A.currentTarget;if(A=A.listener,H!==x&&h.isPropagationStopped())break e;x=A,h.currentTarget=U;try{x(h)}catch(Z){bl(Z)}h.currentTarget=null,x=H}else for(b=0;b<c.length;b++){if(A=c[b],H=A.instance,U=A.currentTarget,A=A.listener,H!==x&&h.isPropagationStopped())break e;x=A,h.currentTarget=U;try{x(h)}catch(Z){bl(Z)}h.currentTarget=null,x=H}}}}function Te(i,r){var s=r[ku];s===void 0&&(s=r[ku]=new Set);var c=i+"__bubble";s.has(c)||(r3(r,i,2,!1),s.add(c))}function w0(i,r,s){var c=0;r&&(c|=4),r3(s,i,c,r)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function b0(i){if(!i[Dl]){i[Dl]=!0,Q1.forEach(function(s){s!=="selectionchange"&&(Gw.has(s)||w0(s,!1,i),w0(s,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Dl]||(r[Dl]=!0,w0("selectionchange",!1,r))}}function r3(i,r,s,c){switch(L3(r)){case 2:var h=x9;break;case 8:h=v9;break;default:h=D0}s=h.bind(null,r,s,i),h=void 0,!_u||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?i.addEventListener(r,s,{capture:!0,passive:h}):i.addEventListener(r,s,!0):h!==void 0?i.addEventListener(r,s,{passive:h}):i.addEventListener(r,s,!1)}function S0(i,r,s,c,h){var x=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var A=c.stateNode.containerInfo;if(A===h)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;A!==null;){if(b=Oa(A),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){c=x=b;continue e}A=A.parentNode}}c=c.return}f2(function(){var U=x,Z=Iu(s),ee=[];e:{var G=B2.get(i);if(G!==void 0){var q=Zo,me=i;switch(i){case"keypress":if(Fo(s)===0)break e;case"keydown":case"keyup":q=N7;break;case"focusin":me="focus",q=Fu;break;case"focusout":me="blur",q=Fu;break;case"beforeblur":case"afterblur":q=Fu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=m2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=j7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=I7;break;case z2:case P2:case N2:q=L7;break;case $2:q=_7;break;case"scroll":case"scrollend":q=T7;break;case"wheel":q=q7;break;case"copy":case"cut":case"paste":q=R7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=x2;break;case"toggle":case"beforetoggle":q=F7}var fe=(r&4)!==0,Ie=!fe&&(i==="scroll"||i==="scrollend"),N=fe?G!==null?G+"Capture":null:G;fe=[];for(var D=U,I;D!==null;){var Q=D;if(I=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||I===null||N===null||(Q=es(D,N),Q!=null&&fe.push(zs(D,Q,I))),Ie)break;D=D.return}0<fe.length&&(G=new q(G,me,null,s,Z),ee.push({event:G,listeners:fe}))}}if((r&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",G&&s!==Bu&&(me=s.relatedTarget||s.fromElement)&&(Oa(me)||me[La]))break e;if((q||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,q?(me=s.relatedTarget||s.toElement,q=U,me=me?Oa(me):null,me!==null&&(Ie=l(me),fe=me.tag,me!==Ie||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(q=null,me=U),q!==me)){if(fe=m2,Q="onMouseLeave",N="onMouseEnter",D="mouse",(i==="pointerout"||i==="pointerover")&&(fe=x2,Q="onPointerLeave",N="onPointerEnter",D="pointer"),Ie=q==null?G:Jr(q),I=me==null?G:Jr(me),G=new fe(Q,D+"leave",q,s,Z),G.target=Ie,G.relatedTarget=I,Q=null,Oa(Z)===U&&(fe=new fe(N,D+"enter",me,s,Z),fe.target=I,fe.relatedTarget=Ie,Q=fe),Ie=Q,q&&me)t:{for(fe=q,N=me,D=0,I=fe;I;I=ur(I))D++;for(I=0,Q=N;Q;Q=ur(Q))I++;for(;0<D-I;)fe=ur(fe),D--;for(;0<I-D;)N=ur(N),I--;for(;D--;){if(fe===N||N!==null&&fe===N.alternate)break t;fe=ur(fe),N=ur(N)}fe=null}else fe=null;q!==null&&s3(ee,G,q,fe,!1),me!==null&&Ie!==null&&s3(ee,Ie,me,fe,!0)}}e:{if(G=U?Jr(U):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var se=E2;else if(C2(G))if(j2)se=nw;else{se=tw;var be=ew}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?U&&$u(U.elementType)&&(se=E2):se=iw;if(se&&(se=se(i,U))){T2(ee,se,s,Z);break e}be&&be(i,G,U),i==="focusout"&&U&&G.type==="number"&&U.memoizedProps.value!=null&&Nu(G,"number",G.value)}switch(be=U?Jr(U):window,i){case"focusin":(C2(be)||be.contentEditable==="true")&&(Ba=be,Ju=U,ls=null);break;case"focusout":ls=Ju=Ba=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,H2(ee,s,Z);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":H2(ee,s,Z)}var ce;if(Zu)e:{switch(i){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else $a?b2(i,s)&&(he="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(he="onCompositionStart");he&&(v2&&s.locale!=="ko"&&($a||he!=="onCompositionStart"?he==="onCompositionEnd"&&$a&&(ce=p2()):(bn=Z,Gu="value"in bn?bn.value:bn.textContent,$a=!0)),be=zl(U,he),0<be.length&&(he=new g2(he,i,null,s,Z),ee.push({event:he,listeners:be}),ce?he.data=ce:(ce=S2(s),ce!==null&&(he.data=ce)))),(ce=Z7?W7(i,s):K7(i,s))&&(he=zl(U,"onBeforeInput"),0<he.length&&(be=new g2("onBeforeInput","beforeinput",null,s,Z),ee.push({event:be,listeners:he}),be.data=ce)),Iw(ee,i,U,s,Z)}a3(ee,r)})}function zs(i,r,s){return{instance:i,listener:r,currentTarget:s}}function zl(i,r){for(var s=r+"Capture",c=[];i!==null;){var h=i,x=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||x===null||(h=es(i,s),h!=null&&c.unshift(zs(i,h,x)),h=es(i,r),h!=null&&c.push(zs(i,h,x))),i.tag===3)return c;i=i.return}return[]}function ur(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function s3(i,r,s,c,h){for(var x=r._reactName,b=[];s!==null&&s!==c;){var A=s,H=A.alternate,U=A.stateNode;if(A=A.tag,H!==null&&H===c)break;A!==5&&A!==26&&A!==27||U===null||(H=U,h?(U=es(s,x),U!=null&&b.unshift(zs(s,U,H))):h||(U=es(s,x),U!=null&&b.push(zs(s,U,H)))),s=s.return}b.length!==0&&i.push({event:r,listeners:b})}var qw=/\r\n?/g,Yw=/\u0000|\uFFFD/g;function o3(i){return(typeof i=="string"?i:""+i).replace(qw,`
`).replace(Yw,"")}function l3(i,r){return r=o3(r),o3(i)===r}function Pl(){}function Be(i,r,s,c,h,x){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||za(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&za(i,""+c);break;case"className":Uo(i,"class",c);break;case"tabIndex":Uo(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(i,s,c);break;case"style":u2(i,c,x);break;case"data":if(r!=="object"){Uo(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){i.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=qo(""+c),i.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof x=="function"&&(s==="formAction"?(r!=="input"&&Be(i,r,"name",h.name,h,null),Be(i,r,"formEncType",h.formEncType,h,null),Be(i,r,"formMethod",h.formMethod,h,null),Be(i,r,"formTarget",h.formTarget,h,null)):(Be(i,r,"encType",h.encType,h,null),Be(i,r,"method",h.method,h,null),Be(i,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=qo(""+c),i.setAttribute(s,c);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}s=qo(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""+c):i.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""):i.removeAttribute(s);break;case"capture":case"download":c===!0?i.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,c):i.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(s,c):i.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(s):i.setAttribute(s,c);break;case"popover":Te("beforetoggle",i),Te("toggle",i),Io(i,"popover",c);break;case"xlinkActuate":Wi(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Wi(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Wi(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Wi(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Wi(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Wi(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Io(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=S7.get(s)||s,Io(i,s,c))}}function C0(i,r,s,c,h,x){switch(s){case"style":u2(i,c,x);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"children":typeof c=="string"?za(i,c):(typeof c=="number"||typeof c=="bigint")&&za(i,""+c);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!J1.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),x=i[Dt]||null,x=x!=null?x[s]:null,typeof x=="function"&&i.removeEventListener(r,x,h),typeof c=="function")){typeof x!="function"&&x!==null&&(s in i?i[s]=null:i.hasAttribute(s)&&i.removeAttribute(s)),i.addEventListener(r,c,h);break e}s in i?i[s]=c:c===!0?i.setAttribute(s,""):Io(i,s,c)}}}function bt(i,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",i),Te("load",i);var c=!1,h=!1,x;for(x in s)if(s.hasOwnProperty(x)){var b=s[x];if(b!=null)switch(x){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Be(i,r,x,b,s,null)}}h&&Be(i,r,"srcSet",s.srcSet,s,null),c&&Be(i,r,"src",s.src,s,null);return;case"input":Te("invalid",i);var A=x=b=h=null,H=null,U=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":h=Z;break;case"type":b=Z;break;case"checked":H=Z;break;case"defaultChecked":U=Z;break;case"value":x=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,r));break;default:Be(i,r,c,Z,s,null)}}s2(i,x,A,H,U,b,h,!1),_o(i);return;case"select":Te("invalid",i),c=b=x=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":x=A;break;case"defaultValue":b=A;break;case"multiple":c=A;default:Be(i,r,h,A,s,null)}r=x,s=b,i.multiple=!!c,r!=null?Da(i,!!c,r,!1):s!=null&&Da(i,!!c,s,!0);return;case"textarea":Te("invalid",i),x=h=c=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":c=A;break;case"defaultValue":h=A;break;case"children":x=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Be(i,r,b,A,s,null)}l2(i,c,h,x),_o(i);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(i,r,H,c,s,null)}return;case"dialog":Te("beforetoggle",i),Te("toggle",i),Te("cancel",i),Te("close",i);break;case"iframe":case"object":Te("load",i);break;case"video":case"audio":for(c=0;c<Ds.length;c++)Te(Ds[c],i);break;case"image":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"embed":case"source":case"link":Te("error",i),Te("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(c=s[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Be(i,r,U,c,s,null)}return;default:if($u(r)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&C0(i,r,Z,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&Be(i,r,A,c,s,null))}function Fw(i,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,x=null,b=null,A=null,H=null,U=null,Z=null;for(q in s){var ee=s[q];if(s.hasOwnProperty(q)&&ee!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":H=ee;default:c.hasOwnProperty(q)||Be(i,r,q,null,c,ee)}}for(var G in c){var q=c[G];if(ee=s[G],c.hasOwnProperty(G)&&(q!=null||ee!=null))switch(G){case"type":x=q;break;case"name":h=q;break;case"checked":U=q;break;case"defaultChecked":Z=q;break;case"value":b=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,r));break;default:q!==ee&&Be(i,r,G,q,c,ee)}}Pu(i,b,A,H,U,Z,x,h);return;case"select":q=b=A=G=null;for(x in s)if(H=s[x],s.hasOwnProperty(x)&&H!=null)switch(x){case"value":break;case"multiple":q=H;default:c.hasOwnProperty(x)||Be(i,r,x,null,c,H)}for(h in c)if(x=c[h],H=s[h],c.hasOwnProperty(h)&&(x!=null||H!=null))switch(h){case"value":G=x;break;case"defaultValue":A=x;break;case"multiple":b=x;default:x!==H&&Be(i,r,h,x,c,H)}r=A,s=b,c=q,G!=null?Da(i,!!s,G,!1):!!c!=!!s&&(r!=null?Da(i,!!s,r,!0):Da(i,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(i,r,A,null,c,h)}for(b in c)if(h=c[b],x=s[b],c.hasOwnProperty(b)&&(h!=null||x!=null))switch(b){case"value":G=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==x&&Be(i,r,b,h,c,x)}o2(i,G,q);return;case"option":for(var me in s)if(G=s[me],s.hasOwnProperty(me)&&G!=null&&!c.hasOwnProperty(me))switch(me){case"selected":i.selected=!1;break;default:Be(i,r,me,null,c,G)}for(H in c)if(G=c[H],q=s[H],c.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Be(i,r,H,G,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)G=s[fe],s.hasOwnProperty(fe)&&G!=null&&!c.hasOwnProperty(fe)&&Be(i,r,fe,null,c,G);for(U in c)if(G=c[U],q=s[U],c.hasOwnProperty(U)&&G!==q&&(G!=null||q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:Be(i,r,U,G,c,q)}return;default:if($u(r)){for(var Ie in s)G=s[Ie],s.hasOwnProperty(Ie)&&G!==void 0&&!c.hasOwnProperty(Ie)&&C0(i,r,Ie,void 0,c,G);for(Z in c)G=c[Z],q=s[Z],!c.hasOwnProperty(Z)||G===q||G===void 0&&q===void 0||C0(i,r,Z,G,c,q);return}}for(var N in s)G=s[N],s.hasOwnProperty(N)&&G!=null&&!c.hasOwnProperty(N)&&Be(i,r,N,null,c,G);for(ee in c)G=c[ee],q=s[ee],!c.hasOwnProperty(ee)||G===q||G==null&&q==null||Be(i,r,ee,G,c,q)}var T0=null,E0=null;function Nl(i){return i.nodeType===9?i:i.ownerDocument}function c3(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u3(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function j0(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var A0=null;function Xw(){var i=window.event;return i&&i.type==="popstate"?i===A0?!1:(A0=i,!0):(A0=null,!1)}var d3=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,f3=typeof Promise=="function"?Promise:void 0,Ww=typeof queueMicrotask=="function"?queueMicrotask:typeof f3<"u"?function(i){return f3.resolve(null).then(i).catch(Kw)}:d3;function Kw(i){setTimeout(function(){throw i})}function Pn(i){return i==="head"}function p3(i,r){var s=r,c=0,h=0;do{var x=s.nextSibling;if(i.removeChild(s),x&&x.nodeType===8)if(s=x.data,s==="/$"){if(0<c&&8>c){s=c;var b=i.ownerDocument;if(s&1&&Ps(b.documentElement),s&2&&Ps(b.body),s&4)for(s=b.head,Ps(s),b=s.firstChild;b;){var A=b.nextSibling,H=b.nodeName;b[Qr]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&b.rel.toLowerCase()==="stylesheet"||s.removeChild(b),b=A}}if(h===0){i.removeChild(x),qs(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=x}while(s);qs(r)}function M0(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":M0(s),Vu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}i.removeChild(s)}}function Qw(i,r,s,c){for(;i.nodeType===1;){var h=s;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Qr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(x=i.getAttribute("rel"),x==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(x!==h.rel||i.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||i.getAttribute("title")!==(h.title==null?null:h.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(x=i.getAttribute("src"),(x!==(h.src==null?null:h.src)||i.getAttribute("type")!==(h.type==null?null:h.type)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&x&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var x=h.name==null?null:""+h.name;if(h.type==="hidden"&&i.getAttribute("name")===x)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function Jw(i,r,s){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!s||(i=Ei(i.nextSibling),i===null))return null;return i}function L0(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function e9(i,r){var s=i.ownerDocument;if(i.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var O0=null;function h3(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return i;r--}else s==="/$"&&r++}i=i.previousSibling}return null}function m3(i,r,s){switch(r=Nl(s),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function Ps(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Vu(i)}var gi=new Map,g3=new Set;function $l(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var dn=W.d;W.d={f:t9,r:i9,D:n9,C:a9,L:r9,m:s9,X:l9,S:o9,M:c9};function t9(){var i=dn.f(),r=Ol();return i||r}function i9(i){var r=Ra(i);r!==null&&r.tag===5&&r.type==="form"?zm(r):dn.r(i)}var dr=typeof document>"u"?null:document;function x3(i,r,s){var c=dr;if(c&&typeof r=="string"&&r){var h=ci(r);h='link[rel="'+i+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),g3.has(h)||(g3.add(h),i={rel:i,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),bt(r,"link",i),ut(r),c.head.appendChild(r)))}}function n9(i){dn.D(i),x3("dns-prefetch",i,null)}function a9(i,r){dn.C(i,r),x3("preconnect",i,r)}function r9(i,r,s){dn.L(i,r,s);var c=dr;if(c&&i&&r){var h='link[rel="preload"][as="'+ci(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ci(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ci(s.imageSizes)+'"]')):h+='[href="'+ci(i)+'"]';var x=h;switch(r){case"style":x=fr(i);break;case"script":x=pr(i)}gi.has(x)||(i=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:i,as:r},s),gi.set(x,i),c.querySelector(h)!==null||r==="style"&&c.querySelector(Ns(x))||r==="script"&&c.querySelector($s(x))||(r=c.createElement("link"),bt(r,"link",i),ut(r),c.head.appendChild(r)))}}function s9(i,r){dn.m(i,r);var s=dr;if(s&&i){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+ci(c)+'"][href="'+ci(i)+'"]',x=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":x=pr(i)}if(!gi.has(x)&&(i=g({rel:"modulepreload",href:i},r),gi.set(x,i),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($s(x)))return}c=s.createElement("link"),bt(c,"link",i),ut(c),s.head.appendChild(c)}}}function o9(i,r,s){dn.S(i,r,s);var c=dr;if(c&&i){var h=ka(c).hoistableStyles,x=fr(i);r=r||"default";var b=h.get(x);if(!b){var A={loading:0,preload:null};if(b=c.querySelector(Ns(x)))A.loading=5;else{i=g({rel:"stylesheet",href:i,"data-precedence":r},s),(s=gi.get(x))&&R0(i,s);var H=b=c.createElement("link");ut(H),bt(H,"link",i),H._p=new Promise(function(U,Z){H.onload=U,H.onerror=Z}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Bl(b,r,c)}b={type:"stylesheet",instance:b,count:1,state:A},h.set(x,b)}}}function l9(i,r){dn.X(i,r);var s=dr;if(s&&i){var c=ka(s).hoistableScripts,h=pr(i),x=c.get(h);x||(x=s.querySelector($s(h)),x||(i=g({src:i,async:!0},r),(r=gi.get(h))&&k0(i,r),x=s.createElement("script"),ut(x),bt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(h,x))}}function c9(i,r){dn.M(i,r);var s=dr;if(s&&i){var c=ka(s).hoistableScripts,h=pr(i),x=c.get(h);x||(x=s.querySelector($s(h)),x||(i=g({src:i,async:!0,type:"module"},r),(r=gi.get(h))&&k0(i,r),x=s.createElement("script"),ut(x),bt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(h,x))}}function v3(i,r,s,c){var h=(h=pe.current)?$l(h):null;if(!h)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=fr(s.href),s=ka(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){i=fr(s.href);var x=ka(h).hoistableStyles,b=x.get(i);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},x.set(i,b),(x=h.querySelector(Ns(i)))&&!x._p&&(b.instance=x,b.state.loading=5),gi.has(i)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(i,s),x||u9(h,i,s,b.state))),r&&c===null)throw Error(a(528,""));return b}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=pr(s),s=ka(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function fr(i){return'href="'+ci(i)+'"'}function Ns(i){return'link[rel="stylesheet"]['+i+"]"}function y3(i){return g({},i,{"data-precedence":i.precedence,precedence:null})}function u9(i,r,s,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),bt(r,"link",s),ut(r),i.head.appendChild(r))}function pr(i){return'[src="'+ci(i)+'"]'}function $s(i){return"script[async]"+i}function w3(i,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+ci(s.href)+'"]');if(c)return r.instance=c,ut(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),ut(c),bt(c,"style",h),Bl(c,s.precedence,i),r.instance=c;case"stylesheet":h=fr(s.href);var x=i.querySelector(Ns(h));if(x)return r.state.loading|=4,r.instance=x,ut(x),x;c=y3(s),(h=gi.get(h))&&R0(c,h),x=(i.ownerDocument||i).createElement("link"),ut(x);var b=x;return b._p=new Promise(function(A,H){b.onload=A,b.onerror=H}),bt(x,"link",c),r.state.loading|=4,Bl(x,s.precedence,i),r.instance=x;case"script":return x=pr(s.src),(h=i.querySelector($s(x)))?(r.instance=h,ut(h),h):(c=s,(h=gi.get(x))&&(c=g({},s),k0(c,h)),i=i.ownerDocument||i,h=i.createElement("script"),ut(h),bt(h,"link",c),i.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,Bl(c,s.precedence,i));return r.instance}function Bl(i,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,x=h,b=0;b<c.length;b++){var A=c[b];if(A.dataset.precedence===r)x=A;else if(x!==h)break}x?x.parentNode.insertBefore(i,x.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(i,r.firstChild))}function R0(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function k0(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Il=null;function b3(i,r,s){if(Il===null){var c=new Map,h=Il=new Map;h.set(s,c)}else h=Il,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(i))return c;for(c.set(i,null),s=s.getElementsByTagName(i),h=0;h<s.length;h++){var x=s[h];if(!(x[Qr]||x[Et]||i==="link"&&x.getAttribute("rel")==="stylesheet")&&x.namespaceURI!=="http://www.w3.org/2000/svg"){var b=x.getAttribute(r)||"";b=i+b;var A=c.get(b);A?A.push(x):c.set(b,[x])}}return c}function S3(i,r,s){i=i.ownerDocument||i,i.head.insertBefore(s,r==="title"?i.querySelector("head > title"):null)}function d9(i,r,s){if(s===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function C3(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Bs=null;function f9(){}function p9(i,r,s){if(Bs===null)throw Error(a(475));var c=Bs;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=fr(s.href),x=i.querySelector(Ns(h));if(x){i=x._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Ul.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=x,ut(x);return}x=i.ownerDocument||i,s=y3(s),(h=gi.get(h))&&R0(s,h),x=x.createElement("link"),ut(x);var b=x;b._p=new Promise(function(A,H){b.onload=A,b.onerror=H}),bt(x,"link",s),r.instance=x}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=Ul.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function h9(){if(Bs===null)throw Error(a(475));var i=Bs;return i.stylesheets&&i.count===0&&V0(i,i.stylesheets),0<i.count?function(r){var s=setTimeout(function(){if(i.stylesheets&&V0(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(s)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)V0(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var _l=null;function V0(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,_l=new Map,r.forEach(m9,i),_l=null,Ul.call(i))}function m9(i,r){if(!(r.state.loading&4)){var s=_l.get(i);if(s)var c=s.get(null);else{s=new Map,_l.set(i,s);for(var h=i.querySelectorAll("link[data-precedence],style[data-precedence]"),x=0;x<h.length;x++){var b=h[x];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),c=b)}c&&s.set(null,c)}h=r.instance,b=h.getAttribute("data-precedence"),x=s.get(b)||c,x===c&&s.set(null,h),s.set(b,h),this.count++,c=Ul.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),x?x.parentNode.insertBefore(h,x.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(h,i.firstChild)),r.state.loading|=4}}var Is={$$typeof:T,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function g9(i,r,s,c,h,x,b,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.hiddenUpdates=Lu(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=x,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function T3(i,r,s,c,h,x,b,A,H,U,Z,ee){return i=new g9(i,r,s,b,A,H,U,ee),r=1,x===!0&&(r|=24),x=Kt(3,null,null,r),i.current=x,x.stateNode=i,r=hd(),r.refCount++,i.pooledCache=r,r.refCount++,x.memoizedState={element:c,isDehydrated:s,cache:r},vd(x),i}function E3(i){return i?(i=Ga,i):Ga}function j3(i,r,s,c,h,x){h=E3(h),c.context===null?c.context=h:c.pendingContext=h,c=Tn(r),c.payload={element:s},x=x===void 0?null:x,x!==null&&(c.callback=x),s=En(i,c,r),s!==null&&(ii(s,i,r),xs(s,i,r))}function A3(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<r?s:r}}function H0(i,r){A3(i,r),(i=i.alternate)&&A3(i,r)}function M3(i){if(i.tag===13){var r=_a(i,67108864);r!==null&&ii(r,i,67108864),H0(i,67108864)}}var Gl=!0;function x9(i,r,s,c){var h=$.T;$.T=null;var x=W.p;try{W.p=2,D0(i,r,s,c)}finally{W.p=x,$.T=h}}function v9(i,r,s,c){var h=$.T;$.T=null;var x=W.p;try{W.p=8,D0(i,r,s,c)}finally{W.p=x,$.T=h}}function D0(i,r,s,c){if(Gl){var h=z0(c);if(h===null)S0(i,r,c,ql,s),O3(i,c);else if(w9(h,i,r,s,c))c.stopPropagation();else if(O3(i,c),r&4&&-1<y9.indexOf(i)){for(;h!==null;){var x=Ra(h);if(x!==null)switch(x.tag){case 3:if(x=x.stateNode,x.current.memoizedState.isDehydrated){var b=Jn(x.pendingLanes);if(b!==0){var A=x;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var H=1<<31-Zt(b);A.entanglements[1]|=H,b&=~H}Pi(x),(ze&6)===0&&(Ml=ki()+500,Hs(0))}}break;case 13:A=_a(x,2),A!==null&&ii(A,x,2),Ol(),H0(x,2)}if(x=z0(c),x===null&&S0(i,r,c,ql,s),x===h)break;h=x}h!==null&&c.stopPropagation()}else S0(i,r,c,null,s)}}function z0(i){return i=Iu(i),P0(i)}var ql=null;function P0(i){if(ql=null,i=Oa(i),i!==null){var r=l(i);if(r===null)i=null;else{var s=r.tag;if(s===13){if(i=u(r),i!==null)return i;i=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return ql=i,null}function L3(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(a7()){case _1:return 2;case G1:return 8;case Po:case r7:return 32;case q1:return 268435456;default:return 32}default:return 32}}var N0=!1,Nn=null,$n=null,Bn=null,Us=new Map,_s=new Map,In=[],y9="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O3(i,r){switch(i){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Us.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(r.pointerId)}}function Gs(i,r,s,c,h,x){return i===null||i.nativeEvent!==x?(i={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},r!==null&&(r=Ra(r),r!==null&&M3(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),i)}function w9(i,r,s,c,h){switch(r){case"focusin":return Nn=Gs(Nn,i,r,s,c,h),!0;case"dragenter":return $n=Gs($n,i,r,s,c,h),!0;case"mouseover":return Bn=Gs(Bn,i,r,s,c,h),!0;case"pointerover":var x=h.pointerId;return Us.set(x,Gs(Us.get(x)||null,i,r,s,c,h)),!0;case"gotpointercapture":return x=h.pointerId,_s.set(x,Gs(_s.get(x)||null,i,r,s,c,h)),!0}return!1}function R3(i){var r=Oa(i.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){i.blockedOn=r,p7(i.priority,function(){if(s.tag===13){var c=ti();c=Ou(c);var h=_a(s,c);h!==null&&ii(h,s,c),H0(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Yl(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var s=z0(i.nativeEvent);if(s===null){s=i.nativeEvent;var c=new s.constructor(s.type,s);Bu=c,s.target.dispatchEvent(c),Bu=null}else return r=Ra(s),r!==null&&M3(r),i.blockedOn=s,!1;r.shift()}return!0}function k3(i,r,s){Yl(i)&&s.delete(r)}function b9(){N0=!1,Nn!==null&&Yl(Nn)&&(Nn=null),$n!==null&&Yl($n)&&($n=null),Bn!==null&&Yl(Bn)&&(Bn=null),Us.forEach(k3),_s.forEach(k3)}function Fl(i,r){i.blockedOn===r&&(i.blockedOn=null,N0||(N0=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,b9)))}var Xl=null;function V3(i){Xl!==i&&(Xl=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Xl===i&&(Xl=null);for(var r=0;r<i.length;r+=3){var s=i[r],c=i[r+1],h=i[r+2];if(typeof c!="function"){if(P0(c||s)===null)continue;break}var x=Ra(s);x!==null&&(i.splice(r,3),r-=3,Pd(x,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function qs(i){function r(H){return Fl(H,i)}Nn!==null&&Fl(Nn,i),$n!==null&&Fl($n,i),Bn!==null&&Fl(Bn,i),Us.forEach(r),_s.forEach(r);for(var s=0;s<In.length;s++){var c=In[s];c.blockedOn===i&&(c.blockedOn=null)}for(;0<In.length&&(s=In[0],s.blockedOn===null);)R3(s),s.blockedOn===null&&In.shift();if(s=(i.ownerDocument||i).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],x=s[c+1],b=h[Dt]||null;if(typeof x=="function")b||V3(s);else if(b){var A=null;if(x&&x.hasAttribute("formAction")){if(h=x,b=x[Dt]||null)A=b.formAction;else if(P0(h)!==null)continue}else A=b.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),V3(s)}}}function $0(i){this._internalRoot=i}Zl.prototype.render=$0.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=ti();j3(s,c,i,r,null,null)},Zl.prototype.unmount=$0.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;j3(i.current,2,null,i,null,null),Ol(),r[La]=null}};function Zl(i){this._internalRoot=i}Zl.prototype.unstable_scheduleHydration=function(i){if(i){var r=W1();i={blockedOn:null,target:i,priority:r};for(var s=0;s<In.length&&r!==0&&r<In[s].priority;s++);In.splice(s,0,i),s===0&&R3(i)}};var H3=t.version;if(H3!=="19.1.1")throw Error(a(527,H3,"19.1.1"));W.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=p(r),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var S9={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Zr=Wl.inject(S9),Xt=Wl}catch{}}return Fs.createRoot=function(i,r){if(!o(i))throw Error(a(299));var s=!1,c="",h=Wm,x=Km,b=Qm,A=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=T3(i,1,!1,null,null,s,c,h,x,b,A,null),i[La]=r.current,b0(i),new $0(r)},Fs.hydrateRoot=function(i,r,s){if(!o(i))throw Error(a(299));var c=!1,h="",x=Wm,b=Km,A=Qm,H=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(x=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),r=T3(i,1,!0,r,s??null,c,h,x,b,A,H,U),r.context=E3(null),s=r.current,c=ti(),c=Ou(c),h=Tn(c),h.callback=null,En(s,h,c),s=c,r.current.lanes=s,Kr(r,s),Pi(r),i[La]=r.current,b0(i),new Zl(r)},Fs.version="19.1.1",Fs}var G3;function V9(){if(G3)return I0.exports;G3=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),I0.exports=k9(),I0.exports}var H9=V9();const D9=su(H9);var R=eh();const He=su(R),q3=T9({__proto__:null,default:He},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Y3="popstate";function z9(e={}){function t(a,o){let{pathname:l,search:u,hash:d}=a.location;return ap("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:mo(o)}return N9(t,n,null,e)}function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Li(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P9(){return Math.random().toString(36).substring(2,10)}function F3(e,t){return{usr:e.state,key:e.key,idx:t}}function ap(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?$r(t):t,state:n,key:t&&t.key||a||P9()}}function mo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function N9(e,t,n,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,u=o.history,d="POP",p=null,m=g();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function g(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=g(),M=L==null?null:L-m;m=L,p&&p({action:d,location:j.location,delta:M})}function y(L,M){d="PUSH";let E=ap(j.location,L,M);m=g()+1;let T=F3(E,m),V=j.createHref(E);try{u.pushState(T,"",V)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(V)}l&&p&&p({action:d,location:j.location,delta:1})}function C(L,M){d="REPLACE";let E=ap(j.location,L,M);m=g();let T=F3(E,m),V=j.createHref(E);u.replaceState(T,"",V),l&&p&&p({action:d,location:j.location,delta:0})}function S(L){return $9(L)}let j={get action(){return d},get location(){return e(o,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Y3,v),p=L,()=>{o.removeEventListener(Y3,v),p=null}},createHref(L){return t(o,L)},createURL:S,encodeLocation(L){let M=S(L);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:C,go(L){return u.go(L)}};return j}function $9(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:mo(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function M6(e,t,n="/"){return B9(e,t,n,!1)}function B9(e,t,n,a){let o=typeof t=="string"?$r(t):t,l=xn(o.pathname||"/",n);if(l==null)return null;let u=L6(e);I9(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=Q9(l);d=W9(u[p],m,a)}return d}function L6(e,t=[],n=[],a=""){let o=(l,u,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(Ye(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let m=gn([a,p.relativePath]),g=n.concat(p);l.children&&l.children.length>0&&(Ye(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),L6(l.children,t,g,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:X9(m,l.index),routesMeta:g})};return e.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let p of O6(l.path))o(l,u,p)}),t}function O6(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let u=O6(a.join("/")),d=[];return d.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...u),d.map(p=>e.startsWith("/")&&p===""?"/":p)}function I9(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Z9(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var U9=/^:[\w-]+$/,_9=3,G9=2,q9=1,Y9=10,F9=-2,X3=e=>e==="*";function X9(e,t){let n=e.split("/"),a=n.length;return n.some(X3)&&(a+=F9),t&&(a+=G9),n.filter(o=>!X3(o)).reduce((o,l)=>o+(U9.test(l)?_9:l===""?q9:Y9),a)}function Z9(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function W9(e,t,n=!1){let{routesMeta:a}=e,o={},l="/",u=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",v=zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!v&&m&&n&&!a[a.length-1].route.index&&(v=zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:gn([l,v.pathname]),pathnameBase:ib(gn([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=gn([l,v.pathnameBase]))}return u}function zc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=K9(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let S=d[y]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const C=d[y];return v&&!C?m[g]=void 0:m[g]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function K9(e,t=!1,n=!0){Li(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Q9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function J9(e,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?$r(e):e;return{pathname:n?n.startsWith("/")?n:eb(n,t):t,search:nb(a),hash:ab(o)}}function eb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Y0(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function th(e){let t=tb(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function ih(e,t,n,a=!1){let o;typeof e=="string"?o=$r(e):(o={...e},Ye(!o.pathname||!o.pathname.includes("?"),Y0("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Y0("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Y0("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=n;else{let v=t.length-1;if(!a&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}d=v>=0?t[v]:"/"}let p=J9(o,d),m=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var gn=e=>e.join("/").replace(/\/\/+/g,"/"),ib=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ab=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var R6=["POST","PUT","PATCH","DELETE"];new Set(R6);var sb=["GET",...R6];new Set(sb);var Br=R.createContext(null);Br.displayName="DataRouter";var ou=R.createContext(null);ou.displayName="DataRouterState";R.createContext(!1);var k6=R.createContext({isTransitioning:!1});k6.displayName="ViewTransition";var ob=R.createContext(new Map);ob.displayName="Fetchers";var lb=R.createContext(null);lb.displayName="Await";var Ri=R.createContext(null);Ri.displayName="Navigation";var Lo=R.createContext(null);Lo.displayName="Location";var bi=R.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var nh=R.createContext(null);nh.displayName="RouteError";function cb(e,{relative:t}={}){Ye(Ir(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=R.useContext(Ri),{hash:o,pathname:l,search:u}=Oo(e,{relative:t}),d=l;return n!=="/"&&(d=l==="/"?n:gn([n,l])),a.createHref({pathname:d,search:u,hash:o})}function Ir(){return R.useContext(Lo)!=null}function Si(){return Ye(Ir(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Lo).location}var V6="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function H6(e){R.useContext(Ri).static||R.useLayoutEffect(e)}function ah(){let{isDataRoute:e}=R.useContext(bi);return e?Eb():ub()}function ub(){Ye(Ir(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Br),{basename:t,navigator:n}=R.useContext(Ri),{matches:a}=R.useContext(bi),{pathname:o}=Si(),l=JSON.stringify(th(a)),u=R.useRef(!1);return H6(()=>{u.current=!0}),R.useCallback((p,m={})=>{if(Li(u.current,V6),!u.current)return;if(typeof p=="number"){n.go(p);return}let g=ih(p,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:gn([t,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[t,n,l,o,e])}var db=R.createContext(null);function fb(e){let t=R.useContext(bi).outlet;return t&&R.createElement(db.Provider,{value:e},t)}function pb(){let{matches:e}=R.useContext(bi),t=e[e.length-1];return t?t.params:{}}function Oo(e,{relative:t}={}){let{matches:n}=R.useContext(bi),{pathname:a}=Si(),o=JSON.stringify(th(n));return R.useMemo(()=>ih(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function hb(e,t){return D6(e,t)}function D6(e,t,n,a){var M;Ye(Ir(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(Ri),{matches:l}=R.useContext(bi),u=l[l.length-1],d=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",g=u&&u.route;{let E=g&&g.path||"";z6(p,!g||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let v=Si(),y;if(t){let E=typeof t=="string"?$r(t):t;Ye(m==="/"||((M=E.pathname)==null?void 0:M.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${E.pathname}" was given in the \`location\` prop.`),y=E}else y=v;let C=y.pathname||"/",S=C;if(m!=="/"){let E=m.replace(/^\//,"").split("/");S="/"+C.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=M6(e,{pathname:S});Li(g||j!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Li(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=yb(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},d,E.params),pathname:gn([m,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?m:gn([m,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,n,a);return t&&L?R.createElement(Lo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},L):L}function mb(){let e=Tb(),t=rb(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:o},n):null,u)}var gb=R.createElement(mb,null),xb=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?R.createElement(bi.Provider,{value:this.props.routeContext},R.createElement(nh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vb({routeContext:e,match:t,children:n}){let a=R.useContext(Br);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(bi.Provider,{value:e},n)}function yb(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=n==null?void 0:n.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);Ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(n)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:v}=n,y=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||y){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let v,y=!1,C=null,S=null;n&&(v=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||gb,u&&(d<0&&g===0?(z6("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):d===g&&(y=!0,S=m.route.hydrateFallbackElement||null)));let j=t.concat(o.slice(0,g+1)),L=()=>{let M;return v?M=C:y?M=S:m.route.Component?M=R.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=p,R.createElement(vb,{match:m,routeContext:{outlet:p,matches:j,isDataRoute:n!=null},children:M})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(xb,{location:n.location,revalidation:n.revalidation,component:C,error:v,children:L(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):L()},null)}function rh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wb(e){let t=R.useContext(Br);return Ye(t,rh(e)),t}function bb(e){let t=R.useContext(ou);return Ye(t,rh(e)),t}function Sb(e){let t=R.useContext(bi);return Ye(t,rh(e)),t}function sh(e){let t=Sb(e),n=t.matches[t.matches.length-1];return Ye(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Cb(){return sh("useRouteId")}function Tb(){var a;let e=R.useContext(nh),t=bb("useRouteError"),n=sh("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function Eb(){let{router:e}=wb("useNavigate"),t=sh("useNavigate"),n=R.useRef(!1);return H6(()=>{n.current=!0}),R.useCallback(async(o,l={})=>{Li(n.current,V6),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Z3={};function z6(e,t,n){!t&&!Z3[e]&&(Z3[e]=!0,Li(!1,n))}R.memo(jb);function jb({routes:e,future:t,state:n}){return D6(e,void 0,n,t)}function Ab({to:e,replace:t,state:n,relative:a}){Ye(Ir(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(Ri);Li(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(bi),{pathname:u}=Si(),d=ah(),p=ih(e,th(l),u,a==="path"),m=JSON.stringify(p);return R.useEffect(()=>{d(JSON.parse(m),{replace:t,state:n,relative:a})},[d,m,a,t,n]),null}function Mb(e){return fb(e.context)}function ht(e){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Lb({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:l=!1}){Ye(!Ir(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=$r(n));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=n,C=R.useMemo(()=>{let S=xn(p,u);return S==null?null:{location:{pathname:S,search:m,hash:g,state:v,key:y},navigationType:a}},[u,p,m,g,v,y,a]);return Li(C!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:R.createElement(Ri.Provider,{value:d},R.createElement(Lo.Provider,{children:t,value:C}))}function Ob({children:e,location:t}){return hb(rp(e),t)}function rp(e,t=[]){let n=[];return R.Children.forEach(e,(a,o)=>{if(!R.isValidElement(a))return;let l=[...t,o];if(a.type===R.Fragment){n.push.apply(n,rp(a.props.children,l));return}Ye(a.type===ht,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=rp(a.props.children,l)),n.push(u)}),n}var yc="get",wc="application/x-www-form-urlencoded";function lu(e){return e!=null&&typeof e.tagName=="string"}function Rb(e){return lu(e)&&e.tagName.toLowerCase()==="button"}function kb(e){return lu(e)&&e.tagName.toLowerCase()==="form"}function Vb(e){return lu(e)&&e.tagName.toLowerCase()==="input"}function Hb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Db(e,t){return e.button===0&&(!t||t==="_self")&&!Hb(e)}var Kl=null;function zb(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var Pb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function F0(e){return e!=null&&!Pb.has(e)?(Li(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wc}"`),null):e}function Nb(e,t){let n,a,o,l,u;if(kb(e)){let d=e.getAttribute("action");a=d?xn(d,t):null,n=e.getAttribute("method")||yc,o=F0(e.getAttribute("enctype"))||wc,l=new FormData(e)}else if(Rb(e)||Vb(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||d.getAttribute("action");if(a=p?xn(p,t):null,n=e.getAttribute("formmethod")||d.getAttribute("method")||yc,o=F0(e.getAttribute("formenctype"))||F0(d.getAttribute("enctype"))||wc,l=new FormData(d,e),!zb()){let{name:m,type:g,value:v}=e;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,v)}}else{if(lu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yc,a=null,o=wc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $b(e,t,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&xn(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function Bb(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ib(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ub(e,t,n){let a=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await Bb(l,n);return u.links?u.links():[]}return[]}));return Yb(a.flat(1).filter(Ib).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function W3(e,t,n,a,o,l){let u=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,d=(p,m)=>{var g;return n[m].pathname!==p.pathname||((g=n[m].route.path)==null?void 0:g.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,m)=>u(p,m)||d(p,m)):l==="data"?t.filter((p,m)=>{var v;let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function _b(e,t,{includeHydrateFallback:n}={}){return Gb(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Gb(e){return[...new Set(e)]}function qb(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function Yb(e,t){let n=new Set;return new Set(t),e.reduce((a,o)=>{let l=JSON.stringify(qb(o));return n.has(l)||(n.add(l),a.push({key:l,link:o})),a},[])}function P6(){let e=R.useContext(Br);return oh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Fb(){let e=R.useContext(ou);return oh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var lh=R.createContext(void 0);lh.displayName="FrameworkContext";function N6(){let e=R.useContext(lh);return oh(e,"You must render this element inside a <HydratedRouter> element"),e}function Xb(e,t){let n=R.useContext(lh),[a,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=t,y=R.useRef(null);R.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let j=M=>{M.forEach(E=>{u(E.isIntersecting)})},L=new IntersectionObserver(j,{threshold:.5});return y.current&&L.observe(y.current),()=>{L.disconnect()}}},[e]),R.useEffect(()=>{if(a){let j=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(j)}}},[a]);let C=()=>{o(!0)},S=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,y,{}]:[l,y,{onFocus:Xs(d,C),onBlur:Xs(p,S),onMouseEnter:Xs(m,C),onMouseLeave:Xs(g,S),onTouchStart:Xs(v,C)}]:[!1,y,{}]}function Xs(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Zb({page:e,...t}){let{router:n}=P6(),a=R.useMemo(()=>M6(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?R.createElement(Kb,{page:e,matches:a,...t}):null}function Wb(e){let{manifest:t,routeModules:n}=N6(),[a,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return Ub(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),a}function Kb({page:e,matches:t,...n}){let a=Si(),{manifest:o,routeModules:l}=N6(),{basename:u}=P6(),{loaderData:d,matches:p}=Fb(),m=R.useMemo(()=>W3(e,t,p,o,a,"data"),[e,t,p,o,a]),g=R.useMemo(()=>W3(e,t,p,o,a,"assets"),[e,t,p,o,a]),v=R.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let S=new Set,j=!1;if(t.forEach(M=>{var T;let E=o.routes[M.route.id];!E||!E.hasLoader||(!m.some(V=>V.route.id===M.route.id)&&M.route.id in d&&((T=l[M.route.id])!=null&&T.shouldRevalidate)||E.hasClientLoader?j=!0:S.add(M.route.id))}),S.size===0)return[];let L=$b(e,u,"data");return j&&S.size>0&&L.searchParams.set("_routes",t.filter(M=>S.has(M.route.id)).map(M=>M.route.id).join(",")),[L.pathname+L.search]},[u,d,a,o,m,t,e,l]),y=R.useMemo(()=>_b(g,o),[g,o]),C=Wb(g);return R.createElement(R.Fragment,null,v.map(S=>R.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...n})),y.map(S=>R.createElement("link",{key:S,rel:"modulepreload",href:S,...n})),C.map(({key:S,link:j})=>R.createElement("link",{key:S,nonce:n.nonce,...j})))}function Qb(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var $6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$6&&(window.__reactRouterVersion="7.8.0")}catch{}function Jb({basename:e,children:t,window:n}){let a=R.useRef();a.current==null&&(a.current=z9({window:n,v5Compat:!0}));let o=a.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(p=>{R.startTransition(()=>u(p))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(Lb,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var B6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I6=R.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:l,replace:u,state:d,target:p,to:m,preventScrollReset:g,viewTransition:v,...y},C){let{basename:S}=R.useContext(Ri),j=typeof m=="string"&&B6.test(m),L,M=!1;if(typeof m=="string"&&j&&(L=m,$6))try{let Y=new URL(window.location.href),F=m.startsWith("//")?new URL(Y.protocol+m):new URL(m),K=xn(F.pathname,S);F.origin===Y.origin&&K!=null?m=K+F.search+F.hash:M=!0}catch{Li(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=cb(m,{relative:o}),[T,V,O]=Xb(a,y),P=iS(m,{replace:u,state:d,target:p,preventScrollReset:g,relative:o,viewTransition:v});function z(Y){t&&t(Y),Y.defaultPrevented||P(Y)}let _=R.createElement("a",{...y,...O,href:L||E,onClick:M||l?t:z,ref:Qb(C,V),target:p,"data-discover":!j&&n==="render"?"true":void 0});return T&&!j?R.createElement(R.Fragment,null,_,R.createElement(Zb,{page:E})):_});I6.displayName="Link";var Ct=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:l,to:u,viewTransition:d,children:p,...m},g){let v=Oo(u,{relative:m.relative}),y=Si(),C=R.useContext(ou),{navigator:S,basename:j}=R.useContext(Ri),L=C!=null&&oS(v)&&d===!0,M=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,E=y.pathname,T=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(E=E.toLowerCase(),T=T?T.toLowerCase():null,M=M.toLowerCase()),T&&j&&(T=xn(T,j)||T);const V=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let O=E===M||!o&&E.startsWith(M)&&E.charAt(V)==="/",P=T!=null&&(T===M||!o&&T.startsWith(M)&&T.charAt(M.length)==="/"),z={isActive:O,isPending:P,isTransitioning:L},_=O?t:void 0,Y;typeof a=="function"?Y=a(z):Y=[a,O?"active":null,P?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let F=typeof l=="function"?l(z):l;return R.createElement(I6,{...m,"aria-current":_,className:Y,ref:g,style:F,to:u,viewTransition:d},typeof p=="function"?p(z):p)});Ct.displayName="NavLink";var eS=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:l,method:u=yc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...y},C)=>{let S=rS(),j=sS(d,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",M=typeof d=="string"&&B6.test(d),E=T=>{if(p&&p(T),T.defaultPrevented)return;T.preventDefault();let V=T.nativeEvent.submitter,O=(V==null?void 0:V.getAttribute("formmethod"))||u;S(V||T.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:v})};return R.createElement("form",{ref:C,method:L,action:j,onSubmit:a?p:E,...y,"data-discover":!M&&e==="render"?"true":void 0})});eS.displayName="Form";function tS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U6(e){let t=R.useContext(Br);return Ye(t,tS(e)),t}function iS(e,{target:t,replace:n,state:a,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=ah(),p=Si(),m=Oo(e,{relative:l});return R.useCallback(g=>{if(Db(g,t)){g.preventDefault();let v=n!==void 0?n:mo(p)===mo(m);d(e,{replace:v,state:a,preventScrollReset:o,relative:l,viewTransition:u})}},[p,d,m,n,a,t,e,o,l,u])}var nS=0,aS=()=>`__${String(++nS)}__`;function rS(){let{router:e}=U6("useSubmit"),{basename:t}=R.useContext(Ri),n=Cb();return R.useCallback(async(a,o={})=>{let{action:l,method:u,encType:d,formData:p,body:m}=Nb(a,t);if(o.navigate===!1){let g=o.fetcherKey||aS();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function sS(e,{relative:t}={}){let{basename:n}=R.useContext(Ri),a=R.useContext(bi);Ye(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...Oo(e||".",{relative:t})},u=Si();if(e==null){l.search=u.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:gn([n,l.pathname])),mo(l)}function oS(e,{relative:t}={}){let n=R.useContext(k6);Ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=U6("useViewTransitionState"),o=Oo(e,{relative:t});if(!n.isTransitioning)return!1;let l=xn(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=xn(n.nextLocation.pathname,a)||n.nextLocation.pathname;return zc(o.pathname,u)!=null||zc(o.pathname,l)!=null}function lS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function cS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var uS=function(){function e(n){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cS(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=lS(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),Mt="-ms-",Pc="-moz-",Me="-webkit-",_6="comm",ch="rule",uh="decl",dS="@import",G6="@keyframes",fS="@layer",pS=Math.abs,cu=String.fromCharCode,hS=Object.assign;function mS(e,t){return St(e,0)^45?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}function q6(e){return e.trim()}function gS(e,t){return(e=t.exec(e))?e[0]:e}function Le(e,t,n){return e.replace(t,n)}function sp(e,t){return e.indexOf(t)}function St(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function Ni(e){return e.length}function dh(e){return e.length}function Ql(e,t){return t.push(e),e}function xS(e,t){return e.map(t).join("")}var uu=1,Or=1,Y6=0,Yt=0,rt=0,Ur="";function du(e,t,n,a,o,l,u){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:uu,column:Or,length:u,return:""}}function Zs(e,t){return hS(du("",null,null,"",null,null,0),e,{length:-e.length},t)}function vS(){return rt}function yS(){return rt=Yt>0?St(Ur,--Yt):0,Or--,rt===10&&(Or=1,uu--),rt}function ri(){return rt=Yt<Y6?St(Ur,Yt++):0,Or++,rt===10&&(Or=1,uu++),rt}function _i(){return St(Ur,Yt)}function bc(){return Yt}function Ro(e,t){return go(Ur,e,t)}function xo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F6(e){return uu=Or=1,Y6=Ni(Ur=e),Yt=0,[]}function X6(e){return Ur="",e}function Sc(e){return q6(Ro(Yt-1,op(e===91?e+2:e===40?e+1:e)))}function wS(e){for(;(rt=_i())&&rt<33;)ri();return xo(e)>2||xo(rt)>3?"":" "}function bS(e,t){for(;--t&&ri()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Ro(e,bc()+(t<6&&_i()==32&&ri()==32))}function op(e){for(;ri();)switch(rt){case e:return Yt;case 34:case 39:e!==34&&e!==39&&op(rt);break;case 40:e===41&&op(e);break;case 92:ri();break}return Yt}function SS(e,t){for(;ri()&&e+rt!==57;)if(e+rt===84&&_i()===47)break;return"/*"+Ro(t,Yt-1)+"*"+cu(e===47?e:ri())}function CS(e){for(;!xo(_i());)ri();return Ro(e,Yt)}function TS(e){return X6(Cc("",null,null,null,[""],e=F6(e),0,[0],e))}function Cc(e,t,n,a,o,l,u,d,p){for(var m=0,g=0,v=u,y=0,C=0,S=0,j=1,L=1,M=1,E=0,T="",V=o,O=l,P=a,z=T;L;)switch(S=E,E=ri()){case 40:if(S!=108&&St(z,v-1)==58){sp(z+=Le(Sc(E),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:z+=Sc(E);break;case 9:case 10:case 13:case 32:z+=wS(S);break;case 92:z+=bS(bc()-1,7);continue;case 47:switch(_i()){case 42:case 47:Ql(ES(SS(ri(),bc()),t,n),p);break;default:z+="/"}break;case 123*j:d[m++]=Ni(z)*M;case 125*j:case 59:case 0:switch(E){case 0:case 125:L=0;case 59+g:M==-1&&(z=Le(z,/\f/g,"")),C>0&&Ni(z)-v&&Ql(C>32?Q3(z+";",a,n,v-1):Q3(Le(z," ","")+";",a,n,v-2),p);break;case 59:z+=";";default:if(Ql(P=K3(z,t,n,m,g,o,d,T,V=[],O=[],v),l),E===123)if(g===0)Cc(z,t,P,P,V,l,v,d,O);else switch(y===99&&St(z,3)===110?100:y){case 100:case 108:case 109:case 115:Cc(e,P,P,a&&Ql(K3(e,P,P,0,0,o,d,T,o,V=[],v),O),o,O,v,d,a?V:O);break;default:Cc(z,P,P,P,[""],O,0,d,O)}}m=g=C=0,j=M=1,T=z="",v=u;break;case 58:v=1+Ni(z),C=S;default:if(j<1){if(E==123)--j;else if(E==125&&j++==0&&yS()==125)continue}switch(z+=cu(E),E*j){case 38:M=g>0?1:(z+="\f",-1);break;case 44:d[m++]=(Ni(z)-1)*M,M=1;break;case 64:_i()===45&&(z+=Sc(ri())),y=_i(),g=v=Ni(T=z+=CS(bc())),E++;break;case 45:S===45&&Ni(z)==2&&(j=0)}}return l}function K3(e,t,n,a,o,l,u,d,p,m,g){for(var v=o-1,y=o===0?l:[""],C=dh(y),S=0,j=0,L=0;S<a;++S)for(var M=0,E=go(e,v+1,v=pS(j=u[S])),T=e;M<C;++M)(T=q6(j>0?y[M]+" "+E:Le(E,/&\f/g,y[M])))&&(p[L++]=T);return du(e,t,n,o===0?ch:d,p,m,g)}function ES(e,t,n){return du(e,t,n,_6,cu(vS()),go(e,2,-2),0)}function Q3(e,t,n,a){return du(e,t,n,uh,go(e,0,a),go(e,a+1,-1),a)}function Ar(e,t){for(var n="",a=dh(e),o=0;o<a;o++)n+=t(e[o],o,e,t)||"";return n}function jS(e,t,n,a){switch(e.type){case fS:if(e.children.length)break;case dS:case uh:return e.return=e.return||e.value;case _6:return"";case G6:return e.return=e.value+"{"+Ar(e.children,a)+"}";case ch:e.value=e.props.join(",")}return Ni(n=Ar(e.children,a))?e.return=e.value+"{"+n+"}":""}function AS(e){var t=dh(e);return function(n,a,o,l){for(var u="",d=0;d<t;d++)u+=e[d](n,a,o,l)||"";return u}}function MS(e){return function(t){t.root||(t=t.return)&&e(t)}}function LS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var OS=function(t,n,a){for(var o=0,l=0;o=l,l=_i(),o===38&&l===12&&(n[a]=1),!xo(l);)ri();return Ro(t,Yt)},RS=function(t,n){var a=-1,o=44;do switch(xo(o)){case 0:o===38&&_i()===12&&(n[a]=1),t[a]+=OS(Yt-1,n,a);break;case 2:t[a]+=Sc(o);break;case 4:if(o===44){t[++a]=_i()===58?"&\f":"",n[a]=t[a].length;break}default:t[a]+=cu(o)}while(o=ri());return t},kS=function(t,n){return X6(RS(F6(t),n))},J3=new WeakMap,VS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!J3.get(a))&&!o){J3.set(t,!0);for(var l=[],u=kS(n,l),d=a.props,p=0,m=0;p<u.length;p++)for(var g=0;g<d.length;g++,m++)t.props[m]=l[p]?u[p].replace(/&\f/g,d[g]):d[g]+" "+u[p]}}},HS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Z6(e,t){switch(mS(e,t)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Pc+e+Mt+e+e;case 6828:case 4268:return Me+e+Mt+e+e;case 6165:return Me+e+Mt+"flex-"+e+e;case 5187:return Me+e+Le(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Mt+"flex-$1$2")+e;case 5443:return Me+e+Mt+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return Me+e+Mt+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return Me+e+Mt+Le(e,"shrink","negative")+e;case 5292:return Me+e+Mt+Le(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+Le(e,"-grow","")+Me+e+Mt+Le(e,"grow","positive")+e;case 4554:return Me+Le(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ni(e)-1-t>6)switch(St(e,t+1)){case 109:if(St(e,t+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Pc+(St(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~sp(e,"stretch")?Z6(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(St(e,t+1)!==115)break;case 6444:switch(St(e,Ni(e)-3-(~sp(e,"!important")&&10))){case 107:return Le(e,":",":"+Me)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(St(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Mt+"$2box$3")+e}break;case 5936:switch(St(e,t+11)){case 114:return Me+e+Mt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Mt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Mt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Me+e+Mt+e+e}return e}var DS=function(t,n,a,o){if(t.length>-1&&!t.return)switch(t.type){case uh:t.return=Z6(t.value,t.length);break;case G6:return Ar([Zs(t,{value:Le(t.value,"@","@"+Me)})],o);case ch:if(t.length)return xS(t.props,function(l){switch(gS(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ar([Zs(t,{props:[Le(l,/:(read-\w+)/,":"+Pc+"$1")]})],o);case"::placeholder":return Ar([Zs(t,{props:[Le(l,/:(plac\w+)/,":"+Me+"input-$1")]}),Zs(t,{props:[Le(l,/:(plac\w+)/,":"+Pc+"$1")]}),Zs(t,{props:[Le(l,/:(plac\w+)/,Mt+"input-$1")]})],o)}return""})}},zS=[DS],PS=function(t){var n=t.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(j){var L=j.getAttribute("data-emotion");L.indexOf(" ")!==-1&&(document.head.appendChild(j),j.setAttribute("data-s",""))})}var o=t.stylisPlugins||zS,l={},u,d=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(j){for(var L=j.getAttribute("data-emotion").split(" "),M=1;M<L.length;M++)l[L[M]]=!0;d.push(j)});var p,m=[VS,HS];{var g,v=[jS,MS(function(j){g.insert(j)})],y=AS(m.concat(o,v)),C=function(L){return Ar(TS(L),y)};p=function(L,M,E,T){g=E,C(L?L+"{"+M.styles+"}":M.styles),T&&(S.inserted[M.name]=!0)}}var S={key:n,sheet:new uS({key:n,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return S.sheet.hydrate(d),S},X0={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function NS(){if(ex)return ke;ex=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,L=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,E=e?Symbol.for("react.scope"):60119;function T(O){if(typeof O=="object"&&O!==null){var P=O.$$typeof;switch(P){case t:switch(O=O.type,O){case p:case m:case a:case l:case o:case v:return O;default:switch(O=O&&O.$$typeof,O){case d:case g:case S:case C:case u:return O;default:return P}}case n:return P}}}function V(O){return T(O)===m}return ke.AsyncMode=p,ke.ConcurrentMode=m,ke.ContextConsumer=d,ke.ContextProvider=u,ke.Element=t,ke.ForwardRef=g,ke.Fragment=a,ke.Lazy=S,ke.Memo=C,ke.Portal=n,ke.Profiler=l,ke.StrictMode=o,ke.Suspense=v,ke.isAsyncMode=function(O){return V(O)||T(O)===p},ke.isConcurrentMode=V,ke.isContextConsumer=function(O){return T(O)===d},ke.isContextProvider=function(O){return T(O)===u},ke.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===t},ke.isForwardRef=function(O){return T(O)===g},ke.isFragment=function(O){return T(O)===a},ke.isLazy=function(O){return T(O)===S},ke.isMemo=function(O){return T(O)===C},ke.isPortal=function(O){return T(O)===n},ke.isProfiler=function(O){return T(O)===l},ke.isStrictMode=function(O){return T(O)===o},ke.isSuspense=function(O){return T(O)===v},ke.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===m||O===l||O===o||O===v||O===y||typeof O=="object"&&O!==null&&(O.$$typeof===S||O.$$typeof===C||O.$$typeof===u||O.$$typeof===d||O.$$typeof===g||O.$$typeof===L||O.$$typeof===M||O.$$typeof===E||O.$$typeof===j)},ke.typeOf=T,ke}var tx;function $S(){return tx||(tx=1,X0.exports=NS()),X0.exports}var Z0,ix;function BS(){if(ix)return Z0;ix=1;var e=$S(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var d=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Object.prototype;function C(S,j,L){if(typeof j!="string"){if(y){var M=v(j);M&&M!==y&&C(S,M,L)}var E=p(j);m&&(E=E.concat(m(j)));for(var T=u(S),V=u(j),O=0;O<E.length;++O){var P=E[O];if(!n[P]&&!(L&&L[P])&&!(V&&V[P])&&!(T&&T[P])){var z=g(j,P);try{d(S,P,z)}catch{}}}}return S}return Z0=C,Z0}BS();var IS=!0;function US(e,t,n){var a="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var W6=function(t,n,a){var o=t.key+"-"+n.name;(a===!1||IS===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},K6=function(t,n,a){W6(t,n,a);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function _S(e){for(var t=0,n,a=0,o=e.length;o>=4;++a,o-=4)n=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var GS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qS=/[A-Z]|^ms/g,YS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Q6=function(t){return t.charCodeAt(1)===45},nx=function(t){return t!=null&&typeof t!="boolean"},W0=LS(function(e){return Q6(e)?e:e.replace(qS,"-$&").toLowerCase()}),ax=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(YS,function(a,o,l){return $i={name:o,styles:l,next:$i},o})}return GS[t]!==1&&!Q6(t)&&typeof n=="number"&&n!==0?n+"px":n};function vo(e,t,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return $i={name:o.name,styles:o.styles,next:$i},o.name;var l=n;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)$i={name:u.name,styles:u.styles,next:$i},u=u.next;var d=l.styles+";";return d}return FS(e,t,n)}case"function":{if(e!==void 0){var p=$i,m=n(e);return $i=p,vo(e,t,m)}break}}var g=n;return g}function FS(e,t,n){var a="";if(Array.isArray(n))for(var o=0;o<n.length;o++)a+=vo(e,t,n[o])+";";else for(var l in n){var u=n[l];if(typeof u!="object"){var d=u;nx(d)&&(a+=W0(l)+":"+ax(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var p=0;p<u.length;p++)nx(u[p])&&(a+=W0(l)+":"+ax(l,u[p])+";");else{var m=vo(e,t,u);switch(l){case"animation":case"animationName":{a+=W0(l)+":"+m+";";break}default:a+=l+"{"+m+"}"}}}return a}var rx=/label:\s*([^\s;{]+)\s*(;|$)/g,$i;function fh(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";$i=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,o+=vo(n,t,l);else{var u=l;o+=u[0]}for(var d=1;d<e.length;d++)if(o+=vo(n,t,e[d]),a){var p=l;o+=p[d]}rx.lastIndex=0;for(var m="",g;(g=rx.exec(o))!==null;)m+="-"+g[1];var v=_S(o)+m;return{name:v,styles:o,next:$i}}var XS=function(t){return t()},J6=q3.useInsertionEffect?q3.useInsertionEffect:!1,ZS=J6||XS,sx=J6||R.useLayoutEffect,ev=R.createContext(typeof HTMLElement<"u"?PS({key:"css"}):null);ev.Provider;var tv=function(t){return R.forwardRef(function(n,a){var o=R.useContext(ev);return t(n,o,a)})},iv=R.createContext({}),ph={}.hasOwnProperty,lp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",WS=function(t,n){var a={};for(var o in n)ph.call(n,o)&&(a[o]=n[o]);return a[lp]=t,a},KS=function(t){var n=t.cache,a=t.serialized,o=t.isStringTag;return W6(n,a,o),ZS(function(){return K6(n,a,o)}),null},QS=tv(function(e,t,n){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[lp],l=[a],u="";typeof e.className=="string"?u=US(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var d=fh(l,void 0,R.useContext(iv));u+=t.key+"-"+d.name;var p={};for(var m in e)ph.call(e,m)&&m!=="css"&&m!==lp&&(p[m]=e[m]);return p.className=u,n&&(p.ref=n),R.createElement(R.Fragment,null,R.createElement(KS,{cache:t,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,p))}),JS=QS,ox=function(t,n){var a=arguments;if(n==null||!ph.call(n,"css"))return R.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=JS,l[1]=WS(t,n);for(var u=2;u<o;u++)l[u]=a[u];return R.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(ox||(ox={}));var eC=tv(function(e,t){var n=e.styles,a=fh([n],void 0,R.useContext(iv)),o=R.useRef();return sx(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),d=!1,p=document.querySelector('style[data-emotion="'+l+" "+a.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),p!==null&&(d=!0,p.setAttribute("data-emotion",l),u.hydrate([p])),o.current=[u,d],function(){u.flush()}},[t]),sx(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(a.next!==void 0&&K6(t,a.next,!0),u.tags.length){var p=u.tags[u.tags.length-1].nextElementSibling;u.before=p,u.flush()}t.insert("",a,u,!1)},[t,a.name]),null});function tC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fh(t)}const iC="/assets/Geist-Regular-BCrLS6HJ.ttf",nC="/assets/Geist-Medium-C6X8vKEc.ttf",aC="/assets/BebasNeue-Regular-D2CONTwO.ttf",rC="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",sC=tC`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${iC}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${nC}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${aC}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${rC}) format('truetype');
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
`;var It=function(){return It=Object.assign||function(t){for(var n,a=1,o=arguments.length;a<o;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},It.apply(this,arguments)};function yo(e,t,n){if(n||arguments.length===2)for(var a=0,o=t.length,l;a<o;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Ge="-ms-",ro="-moz-",Ve="-webkit-",nv="comm",fu="rule",hh="decl",oC="@import",av="@keyframes",lC="@layer",rv=Math.abs,mh=String.fromCharCode,cp=Object.assign;function cC(e,t){return xt(e,0)^45?(((t<<2^xt(e,0))<<2^xt(e,1))<<2^xt(e,2))<<2^xt(e,3):0}function sv(e){return e.trim()}function mn(e,t){return(e=t.exec(e))?e[0]:e}function ye(e,t,n){return e.replace(t,n)}function Tc(e,t,n){return e.indexOf(t,n)}function xt(e,t){return e.charCodeAt(t)|0}function Rr(e,t,n){return e.slice(t,n)}function Bi(e){return e.length}function ov(e){return e.length}function no(e,t){return t.push(e),e}function uC(e,t){return e.map(t).join("")}function lx(e,t){return e.filter(function(n){return!mn(n,t)})}var pu=1,kr=1,lv=0,yi=0,st=0,_r="";function hu(e,t,n,a,o,l,u,d){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:pu,column:kr,length:u,return:"",siblings:d}}function qn(e,t){return cp(hu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hr(e){for(;e.root;)e=qn(e.root,{children:[e]});no(e,e.siblings)}function dC(){return st}function fC(){return st=yi>0?xt(_r,--yi):0,kr--,st===10&&(kr=1,pu--),st}function Mi(){return st=yi<lv?xt(_r,yi++):0,kr++,st===10&&(kr=1,pu++),st}function Sa(){return xt(_r,yi)}function Ec(){return yi}function mu(e,t){return Rr(_r,e,t)}function up(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pC(e){return pu=kr=1,lv=Bi(_r=e),yi=0,[]}function hC(e){return _r="",e}function K0(e){return sv(mu(yi-1,dp(e===91?e+2:e===40?e+1:e)))}function mC(e){for(;(st=Sa())&&st<33;)Mi();return up(e)>2||up(st)>3?"":" "}function gC(e,t){for(;--t&&Mi()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return mu(e,Ec()+(t<6&&Sa()==32&&Mi()==32))}function dp(e){for(;Mi();)switch(st){case e:return yi;case 34:case 39:e!==34&&e!==39&&dp(st);break;case 40:e===41&&dp(e);break;case 92:Mi();break}return yi}function xC(e,t){for(;Mi()&&e+st!==57;)if(e+st===84&&Sa()===47)break;return"/*"+mu(t,yi-1)+"*"+mh(e===47?e:Mi())}function vC(e){for(;!up(Sa());)Mi();return mu(e,yi)}function yC(e){return hC(jc("",null,null,null,[""],e=pC(e),0,[0],e))}function jc(e,t,n,a,o,l,u,d,p){for(var m=0,g=0,v=u,y=0,C=0,S=0,j=1,L=1,M=1,E=0,T="",V=o,O=l,P=a,z=T;L;)switch(S=E,E=Mi()){case 40:if(S!=108&&xt(z,v-1)==58){Tc(z+=ye(K0(E),"&","&\f"),"&\f",rv(m?d[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:z+=K0(E);break;case 9:case 10:case 13:case 32:z+=mC(S);break;case 92:z+=gC(Ec()-1,7);continue;case 47:switch(Sa()){case 42:case 47:no(wC(xC(Mi(),Ec()),t,n,p),p);break;default:z+="/"}break;case 123*j:d[m++]=Bi(z)*M;case 125*j:case 59:case 0:switch(E){case 0:case 125:L=0;case 59+g:M==-1&&(z=ye(z,/\f/g,"")),C>0&&Bi(z)-v&&no(C>32?ux(z+";",a,n,v-1,p):ux(ye(z," ","")+";",a,n,v-2,p),p);break;case 59:z+=";";default:if(no(P=cx(z,t,n,m,g,o,d,T,V=[],O=[],v,l),l),E===123)if(g===0)jc(z,t,P,P,V,l,v,d,O);else switch(y===99&&xt(z,3)===110?100:y){case 100:case 108:case 109:case 115:jc(e,P,P,a&&no(cx(e,P,P,0,0,o,d,T,o,V=[],v,O),O),o,O,v,d,a?V:O);break;default:jc(z,P,P,P,[""],O,0,d,O)}}m=g=C=0,j=M=1,T=z="",v=u;break;case 58:v=1+Bi(z),C=S;default:if(j<1){if(E==123)--j;else if(E==125&&j++==0&&fC()==125)continue}switch(z+=mh(E),E*j){case 38:M=g>0?1:(z+="\f",-1);break;case 44:d[m++]=(Bi(z)-1)*M,M=1;break;case 64:Sa()===45&&(z+=K0(Mi())),y=Sa(),g=v=Bi(T=z+=vC(Ec())),E++;break;case 45:S===45&&Bi(z)==2&&(j=0)}}return l}function cx(e,t,n,a,o,l,u,d,p,m,g,v){for(var y=o-1,C=o===0?l:[""],S=ov(C),j=0,L=0,M=0;j<a;++j)for(var E=0,T=Rr(e,y+1,y=rv(L=u[j])),V=e;E<S;++E)(V=sv(L>0?C[E]+" "+T:ye(T,/&\f/g,C[E])))&&(p[M++]=V);return hu(e,t,n,o===0?fu:d,p,m,g,v)}function wC(e,t,n,a){return hu(e,t,n,nv,mh(dC()),Rr(e,2,-2),0,a)}function ux(e,t,n,a,o){return hu(e,t,n,hh,Rr(e,0,a),Rr(e,a+1,-1),a,o)}function cv(e,t,n){switch(cC(e,t)){case 5103:return Ve+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ve+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ve+e+ro+e+Ge+e+e;case 5936:switch(xt(e,t+11)){case 114:return Ve+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ve+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ve+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ve+e+Ge+e+e;case 6165:return Ve+e+Ge+"flex-"+e+e;case 5187:return Ve+e+ye(e,/(\w+).+(:[^]+)/,Ve+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return Ve+e+Ge+"flex-item-"+ye(e,/flex-|-self/g,"")+(mn(e,/flex-|baseline/)?"":Ge+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return Ve+e+Ge+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ve+e+Ge+ye(e,"shrink","negative")+e;case 5292:return Ve+e+Ge+ye(e,"basis","preferred-size")+e;case 6060:return Ve+"box-"+ye(e,"-grow","")+Ve+e+Ge+ye(e,"grow","positive")+e;case 4554:return Ve+ye(e,/([^-])(transform)/g,"$1"+Ve+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,Ve+"$1"),/(image-set)/,Ve+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,Ve+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,Ve+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ve+e+e;case 4200:if(!mn(e,/flex-|baseline/))return Ge+"grid-column-align"+Rr(e,t)+e;break;case 2592:case 3360:return Ge+ye(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(a,o){return t=o,mn(a.props,/grid-\w+-end/)})?~Tc(e+(n=n[t].value),"span",0)?e:Ge+ye(e,"-start","")+e+Ge+"grid-row-span:"+(~Tc(n,"span",0)?mn(n,/\d+/):+mn(n,/\d+/)-+mn(e,/\d+/))+";":Ge+ye(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(a){return mn(a.props,/grid-\w+-start/)})?e:Ge+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,Ve+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bi(e)-1-t>6)switch(xt(e,t+1)){case 109:if(xt(e,t+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+Ve+"$2-$3$1"+ro+(xt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Tc(e,"stretch",0)?cv(ye(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,u,d,p,m){return Ge+o+":"+l+m+(u?Ge+o+"-span:"+(d?p:+p-+l)+m:"")+e});case 4949:if(xt(e,t+6)===121)return ye(e,":",":"+Ve)+e;break;case 6444:switch(xt(e,xt(e,14)===45?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ve+(xt(e,14)===45?"inline-":"")+"box$3$1"+Ve+"$2$3$1"+Ge+"$2box$3")+e;case 100:return ye(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function bC(e,t,n,a){switch(e.type){case lC:if(e.children.length)break;case oC:case hh:return e.return=e.return||e.value;case nv:return"";case av:return e.return=e.value+"{"+Nc(e.children,a)+"}";case fu:if(!Bi(e.value=e.props.join(",")))return""}return Bi(n=Nc(e.children,a))?e.return=e.value+"{"+n+"}":""}function SC(e){var t=ov(e);return function(n,a,o,l){for(var u="",d=0;d<t;d++)u+=e[d](n,a,o,l)||"";return u}}function CC(e){return function(t){t.root||(t=t.return)&&e(t)}}function TC(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case hh:e.return=cv(e.value,e.length,n);return;case av:return Nc([qn(e,{value:ye(e.value,"@","@"+Ve)})],a);case fu:if(e.length)return uC(n=e.props,function(o){switch(mn(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hr(qn(e,{props:[ye(o,/:(read-\w+)/,":"+ro+"$1")]})),hr(qn(e,{props:[o]})),cp(e,{props:lx(n,a)});break;case"::placeholder":hr(qn(e,{props:[ye(o,/:(plac\w+)/,":"+Ve+"input-$1")]})),hr(qn(e,{props:[ye(o,/:(plac\w+)/,":"+ro+"$1")]})),hr(qn(e,{props:[ye(o,/:(plac\w+)/,Ge+"input-$1")]})),hr(qn(e,{props:[o]})),cp(e,{props:lx(n,a)});break}return""})}}var EC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ni={},Vr=typeof process<"u"&&ni!==void 0&&(ni.REACT_APP_SC_ATTR||ni.SC_ATTR)||"data-styled",uv="active",dv="data-styled-version",gu="6.1.19",gh=`/*!sc*/
`,$c=typeof window<"u"&&typeof document<"u",jC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ni!==void 0&&ni.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ni.REACT_APP_SC_DISABLE_SPEEDY!==""?ni.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ni.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ni!==void 0&&ni.SC_DISABLE_SPEEDY!==void 0&&ni.SC_DISABLE_SPEEDY!==""&&ni.SC_DISABLE_SPEEDY!=="false"&&ni.SC_DISABLE_SPEEDY),xu=Object.freeze([]),Hr=Object.freeze({});function AC(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var fv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),MC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,LC=/(^-|-$)/g;function dx(e){return e.replace(MC,"-").replace(LC,"")}var OC=/(a)(d)/gi,Jl=52,fx=function(e){return String.fromCharCode(e+(e>25?39:97))};function fp(e){var t,n="";for(t=Math.abs(e);t>Jl;t=t/Jl|0)n=fx(t%Jl)+n;return(fx(t%Jl)+n).replace(OC,"$1-$2")}var Q0,pv=5381,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hv=function(e){return wr(pv,e)};function mv(e){return fp(hv(e)>>>0)}function RC(e){return e.displayName||e.name||"Component"}function J0(e){return typeof e=="string"&&!0}var gv=typeof Symbol=="function"&&Symbol.for,xv=gv?Symbol.for("react.memo"):60115,kC=gv?Symbol.for("react.forward_ref"):60112,VC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},HC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},DC=((Q0={})[kC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Q0[xv]=vv,Q0);function px(e){return("type"in(t=e)&&t.type.$$typeof)===xv?vv:"$$typeof"in e?DC[e.$$typeof]:VC;var t}var zC=Object.defineProperty,PC=Object.getOwnPropertyNames,hx=Object.getOwnPropertySymbols,NC=Object.getOwnPropertyDescriptor,$C=Object.getPrototypeOf,mx=Object.prototype;function yv(e,t,n){if(typeof t!="string"){if(mx){var a=$C(t);a&&a!==mx&&yv(e,a,n)}var o=PC(t);hx&&(o=o.concat(hx(t)));for(var l=px(e),u=px(t),d=0;d<o.length;++d){var p=o[d];if(!(p in HC||n&&n[p]||u&&p in u||l&&p in l)){var m=NC(t,p);try{zC(e,p,m)}catch{}}}}return e}function Dr(e){return typeof e=="function"}function xh(e){return typeof e=="object"&&"styledComponentId"in e}function ya(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pp(e,t){if(e.length===0)return"";for(var n=e[0],a=1;a<e.length;a++)n+=e[a];return n}function wo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hp(e,t,n){if(n===void 0&&(n=!1),!n&&!wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=hp(e[a],t[a]);else if(wo(t))for(var a in t)e[a]=hp(e[a],t[a]);return e}function vh(e,t){Object.defineProperty(e,"toString",{value:t})}function ko(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var BC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,a=0;a<t;a++)n+=this.groupSizes[a];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;t>=l;)if((l<<=1)<0)throw ko(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(d,n[u])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n;this.groupSizes[t]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),l=o+a,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(gh);return n},e}(),Ac=new Map,Bc=new Map,Mc=1,ec=function(e){if(Ac.has(e))return Ac.get(e);for(;Bc.has(Mc);)Mc++;var t=Mc++;return Ac.set(e,t),Bc.set(t,e),t},IC=function(e,t){Mc=t+1,Ac.set(e,t),Bc.set(t,e)},UC="style[".concat(Vr,"][").concat(dv,'="').concat(gu,'"]'),_C=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),GC=function(e,t,n){for(var a,o=n.split(","),l=0,u=o.length;l<u;l++)(a=o[l])&&e.registerName(t,a)},qC=function(e,t){for(var n,a=((n=t.textContent)!==null&&n!==void 0?n:"").split(gh),o=[],l=0,u=a.length;l<u;l++){var d=a[l].trim();if(d){var p=d.match(_C);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(IC(g,m),GC(e,g,p[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(d)}}},gx=function(e){for(var t=document.querySelectorAll(UC),n=0,a=t.length;n<a;n++){var o=t[n];o&&o.getAttribute(Vr)!==uv&&(qC(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function YC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wv=function(e){var t=document.head,n=e||t,a=document.createElement("style"),o=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Vr,"]")));return p[p.length-1]}(n),l=o!==void 0?o.nextSibling:null;a.setAttribute(Vr,uv),a.setAttribute(dv,gu);var u=YC();return u&&a.setAttribute("nonce",u),n.insertBefore(a,l),a},FC=function(){function e(t){this.element=wv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var u=a[o];if(u.ownerNode===n)return u}throw ko(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),XC=function(){function e(t){this.element=wv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ZC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xx=$c,WC={isServer:!$c,useCSSOMInjection:!jC},bv=function(){function e(t,n,a){t===void 0&&(t=Hr),n===void 0&&(n={});var o=this;this.options=It(It({},WC),t),this.gs=n,this.names=new Map(a),this.server=!!t.isServer,!this.server&&$c&&xx&&(xx=!1,gx(this)),vh(this,function(){return function(l){for(var u=l.getTag(),d=u.length,p="",m=function(v){var y=function(M){return Bc.get(M)}(v);if(y===void 0)return"continue";var C=l.names.get(y),S=u.getGroup(v);if(C===void 0||!C.size||S.length===0)return"continue";var j="".concat(Vr,".g").concat(v,'[id="').concat(y,'"]'),L="";C!==void 0&&C.forEach(function(M){M.length>0&&(L+="".concat(M,","))}),p+="".concat(S).concat(j,'{content:"').concat(L,'"}').concat(gh)},g=0;g<d;g++)m(g);return p}(o)})}return e.registerId=function(t){return ec(t)},e.prototype.rehydrate=function(){!this.server&&$c&&gx(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(It(It({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var a=n.useCSSOMInjection,o=n.target;return n.isServer?new ZC(o):a?new FC(o):new XC(o)}(this.options),new BC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ec(t),this.names.has(t))this.names.get(t).add(n);else{var a=new Set;a.add(n),this.names.set(t,a)}},e.prototype.insertRules=function(t,n,a){this.registerName(t,n),this.getTag().insertRules(ec(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ec(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),KC=/&/g,QC=/^\s*\/\/.*$/gm;function Sv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Sv(n.children,t)),n})}function JC(e){var t,n,a,o=Hr,l=o.options,u=l===void 0?Hr:l,d=o.plugins,p=d===void 0?xu:d,m=function(y,C,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):y},g=p.slice();g.push(function(y){y.type===fu&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(KC,n).replace(a,m))}),u.prefix&&g.push(TC),g.push(bC);var v=function(y,C,S,j){C===void 0&&(C=""),S===void 0&&(S=""),j===void 0&&(j="&"),t=j,n=C,a=new RegExp("\\".concat(n,"\\b"),"g");var L=y.replace(QC,""),M=yC(S||C?"".concat(S," ").concat(C," { ").concat(L," }"):L);u.namespace&&(M=Sv(M,u.namespace));var E=[];return Nc(M,SC(g.concat(CC(function(T){return E.push(T)})))),E};return v.hash=p.length?p.reduce(function(y,C){return C.name||ko(15),wr(y,C.name)},pv).toString():"",v}var eT=new bv,mp=JC(),Cv=He.createContext({shouldForwardProp:void 0,styleSheet:eT,stylis:mp});Cv.Consumer;He.createContext(void 0);function vx(){return R.useContext(Cv)}var Tv=function(){function e(t,n){var a=this;this.inject=function(o,l){l===void 0&&(l=mp);var u=a.name+l.hash;o.hasNameForId(a.id,u)||o.insertRules(a.id,u,l(a.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,vh(this,function(){throw ko(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=mp),this.name+t.hash},e}(),tT=function(e){return e>="A"&&e<="Z"};function yx(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(n===1&&a==="-"&&e[0]==="-")return e;tT(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Ev=function(e){return e==null||e===!1||e===""},jv=function(e){var t,n,a=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!Ev(l)&&(Array.isArray(l)&&l.isCss||Dr(l)?a.push("".concat(yx(o),":"),l,";"):wo(l)?a.push.apply(a,yo(yo(["".concat(o," {")],jv(l),!1),["}"],!1)):a.push("".concat(yx(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in EC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return a};function Ca(e,t,n,a){if(Ev(e))return[];if(xh(e))return[".".concat(e.styledComponentId)];if(Dr(e)){if(!Dr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Ca(o,t,n,a)}var l;return e instanceof Tv?n?(e.inject(n,a),[e.getName(a)]):[e]:wo(e)?jv(e):Array.isArray(e)?Array.prototype.concat.apply(xu,e.map(function(u){return Ca(u,t,n,a)})):[e.toString()]}function iT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Dr(n)&&!xh(n))return!1}return!0}var nT=hv(gu),aT=function(){function e(t,n,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&iT(t),this.componentId=n,this.baseHash=wr(nT,n),this.baseStyle=a,bv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ya(o,this.staticRulesId);else{var l=pp(Ca(this.rules,t,n,a)),u=fp(wr(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var d=a(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,d)}o=ya(o,u),this.staticRulesId=u}else{for(var p=wr(this.baseHash,a.hash),m="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")m+=v;else if(v){var y=pp(Ca(v,t,n,a));p=wr(p,y+g),m+=y}}if(m){var C=fp(p>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,a(m,".".concat(C),void 0,this.componentId)),o=ya(o,C)}}return o},e}(),Av=He.createContext(void 0);Av.Consumer;var ef={};function rT(e,t,n){var a=xh(e),o=e,l=!J0(e),u=t.attrs,d=u===void 0?xu:u,p=t.componentId,m=p===void 0?function(V,O){var P=typeof V!="string"?"sc":dx(V);ef[P]=(ef[P]||0)+1;var z="".concat(P,"-").concat(mv(gu+P+ef[P]));return O?"".concat(O,"-").concat(z):z}(t.displayName,t.parentComponentId):p,g=t.displayName,v=g===void 0?function(V){return J0(V)?"styled.".concat(V):"Styled(".concat(RC(V),")")}(e):g,y=t.displayName&&t.componentId?"".concat(dx(t.displayName),"-").concat(t.componentId):t.componentId||m,C=a&&o.attrs?o.attrs.concat(d).filter(Boolean):d,S=t.shouldForwardProp;if(a&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;S=function(V,O){return j(V,O)&&L(V,O)}}else S=j}var M=new aT(n,y,a?o.componentStyle:void 0);function E(V,O){return function(P,z,_){var Y=P.attrs,F=P.componentStyle,K=P.defaultProps,ie=P.foldedComponentIds,le=P.styledComponentId,de=P.target,oe=He.useContext(Av),$=vx(),W=P.shouldForwardProp||$.shouldForwardProp,J=AC(z,oe,K)||Hr,te=function(Se,pe,ct){for(var Re,Tt=It(It({},pe),{className:void 0,theme:ct}),Qn=0;Qn<Se.length;Qn+=1){var Zi=Dr(Re=Se[Qn])?Re(Tt):Re;for(var oi in Zi)Tt[oi]=oi==="className"?ya(Tt[oi],Zi[oi]):oi==="style"?It(It({},Tt[oi]),Zi[oi]):Zi[oi]}return pe.className&&(Tt.className=ya(Tt.className,pe.className)),Tt}(Y,z,J),k=te.as||de,X={};for(var ne in te)te[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&te.theme===J||(ne==="forwardedAs"?X.as=te.forwardedAs:W&&!W(ne,k)||(X[ne]=te[ne]));var re=function(Se,pe){var ct=vx(),Re=Se.generateAndInjectStyles(pe,ct.styleSheet,ct.stylis);return Re}(F,te),ue=ya(ie,le);return re&&(ue+=" "+re),te.className&&(ue+=" "+te.className),X[J0(k)&&!fv.has(k)?"class":"className"]=ue,_&&(X.ref=_),R.createElement(k,X)}(T,V,O)}E.displayName=v;var T=He.forwardRef(E);return T.attrs=C,T.componentStyle=M,T.displayName=v,T.shouldForwardProp=S,T.foldedComponentIds=a?ya(o.foldedComponentIds,o.styledComponentId):"",T.styledComponentId=y,T.target=a?o.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=a?function(O){for(var P=[],z=1;z<arguments.length;z++)P[z-1]=arguments[z];for(var _=0,Y=P;_<Y.length;_++)hp(O,Y[_],!0);return O}({},o.defaultProps,V):V}}),vh(T,function(){return".".concat(T.styledComponentId)}),l&&yv(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function wx(e,t){for(var n=[e[0]],a=0,o=t.length;a<o;a+=1)n.push(t[a],e[a+1]);return n}var bx=function(e){return Object.assign(e,{isCss:!0})};function Ft(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Dr(e)||wo(e))return bx(Ca(wx(xu,yo([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ca(a):bx(Ca(wx(a,t)))}function gp(e,t,n){if(n===void 0&&(n=Hr),!t)throw ko(1,t);var a=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,Ft.apply(void 0,yo([o],l,!1)))};return a.attrs=function(o){return gp(e,t,It(It({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return gp(e,t,It(It({},n),o))},a}var Mv=function(e){return gp(rT,e)},w=Mv;fv.forEach(function(e){w[e]=Mv(e)});function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=pp(Ft.apply(void 0,yo([e],t,!1))),o=mv(a);return new Tv(o,a)}const sT=w.nav`
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
  ${({$isScrolled:e})=>e&&Ft`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,oT=w.div`
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
`,lT=w(Ct)`
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
`,cT=w.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,Ws=w.li`
  position: relative;
`,Ks=w(Ct)`
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
`,Sx=w.div`
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
`,tc=w.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,_n=w.span`
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
`,uT=w.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Lv=w.button`
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
`;var ic={},Cx;function dT(){if(Cx)return ic;Cx=1,ic.match=l,ic.parse=u;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(g,v){return u(g).some(function(y){var C=y.inverse,S=y.type==="all"||v.type===y.type;if(S&&C||!(S||C))return!1;var j=y.expressions.every(function(L){var M=L.feature,E=L.modifier,T=L.value,V=v[M];if(!V)return!1;switch(M){case"orientation":case"scan":return V.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=m(T),V=m(V);break;case"resolution":T=p(T),V=p(V);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=d(T),V=d(V);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,V=parseInt(V,10)||0;break}switch(E){case"min":return V>=T;case"max":return V<=T;default:return V===T}});return j&&!C||!j&&C})}function u(g){return g.split(",").map(function(v){v=v.trim();var y=v.match(e),C=y[1],S=y[2],j=y[3]||"",L={};return L.inverse=!!C&&C.toLowerCase()==="not",L.type=S?S.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],L.expressions=j.map(function(M){var E=M.match(t),T=E[1].toLowerCase().match(n);return{modifier:T[1],feature:T[2],value:E[2]}}),L})}function d(g){var v=Number(g),y;return v||(y=g.match(/^(\d+)\s*\/\s*(\d+)$/),v=y[1]/y[2]),v}function p(g){var v=parseFloat(g),y=String(g).match(o)[1];switch(y){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function m(g){var v=parseFloat(g),y=String(g).match(a)[1];switch(y){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return ic}var tf,Tx;function fT(){if(Tx)return tf;Tx=1;var e=dT().match,t=typeof window<"u"?window.matchMedia:null;function n(o,l,u){var d=this,p;t&&!u&&(p=t.call(window,o)),p?(this.matches=p.matches,this.media=p.media,p.addListener(v)):(this.matches=e(o,l),this.media=o),this.addListener=m,this.removeListener=g,this.dispose=y;function m(C){p&&p.addListener(C)}function g(C){p&&p.removeListener(C)}function v(C){d.matches=C.matches,d.media=C.media}function y(){p&&p.removeListener(v)}}function a(o,l,u){return new n(o,l,u)}return tf=a,tf}var pT=fT();const hT=su(pT);var mT=/[A-Z]/g,gT=/^ms-/,nf={};function xT(e){return"-"+e.toLowerCase()}function Ov(e){if(nf.hasOwnProperty(e))return nf[e];var t=e.replace(mT,xT);return nf[e]=gT.test(t)?"-"+t:t}function vT(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),a=Object.keys(t),o=n.length;if(a.length!==o)return!1;for(let l=0;l<o;l++){const u=n[l];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}var af={exports:{}},rf,Ex;function yT(){if(Ex)return rf;Ex=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return rf=e,rf}var sf,jx;function wT(){if(jx)return sf;jx=1;var e=yT();function t(){}function n(){}return n.resetWarningCache=t,sf=function(){function a(u,d,p,m,g,v){if(v!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}a.isRequired=a;function o(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},sf}var Ax;function bT(){return Ax||(Ax=1,af.exports=wT()()),af.exports}var ST=bT();const Oe=su(ST),kt=Oe.oneOfType([Oe.string,Oe.number]),Rv={all:Oe.bool,grid:Oe.bool,aural:Oe.bool,braille:Oe.bool,handheld:Oe.bool,print:Oe.bool,projection:Oe.bool,screen:Oe.bool,tty:Oe.bool,tv:Oe.bool,embossed:Oe.bool},CT={orientation:Oe.oneOf(["portrait","landscape"]),scan:Oe.oneOf(["progressive","interlace"]),aspectRatio:Oe.string,deviceAspectRatio:Oe.string,height:kt,deviceHeight:kt,width:kt,deviceWidth:kt,color:Oe.bool,colorIndex:Oe.bool,monochrome:Oe.bool,resolution:kt,type:Object.keys(Rv)},{type:J$,...TT}=CT,ET={minAspectRatio:Oe.string,maxAspectRatio:Oe.string,minDeviceAspectRatio:Oe.string,maxDeviceAspectRatio:Oe.string,minHeight:kt,maxHeight:kt,minDeviceHeight:kt,maxDeviceHeight:kt,minWidth:kt,maxWidth:kt,minDeviceWidth:kt,maxDeviceWidth:kt,minColor:Oe.number,maxColor:Oe.number,minColorIndex:Oe.number,maxColorIndex:Oe.number,minMonochrome:Oe.number,maxMonochrome:Oe.number,minResolution:kt,maxResolution:kt,...TT},jT={...Rv,...ET};var AT={all:jT};const MT=e=>`not ${e}`,LT=(e,t)=>{const n=Ov(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?MT(n):`(${n}: ${t})`},OT=e=>e.join(" and "),RT=e=>{const t=[];return Object.keys(AT.all).forEach(n=>{const a=e[n];a!=null&&t.push(LT(n,a))}),OT(t)},kT=R.createContext(void 0),VT=e=>e.query||RT(e),Mx=e=>e?Object.keys(e).reduce((n,a)=>(n[Ov(a)]=e[a],n),{}):void 0,kv=()=>{const e=R.useRef(!1);return R.useEffect(()=>{e.current=!0},[]),e.current},HT=e=>{const t=R.useContext(kT),n=()=>Mx(e)||Mx(t),[a,o]=R.useState(n);return R.useEffect(()=>{const l=n();vT(a,l)||o(l)},[e,t]),a},DT=e=>{const t=()=>VT(e),[n,a]=R.useState(t);return R.useEffect(()=>{const o=t();n!==o&&a(o)},[e]),n},zT=(e,t)=>{const n=()=>hT(e,t||{},!!t),[a,o]=R.useState(n),l=kv();return R.useEffect(()=>{if(l){const u=n();return o(u),()=>{u&&u.dispose()}}},[e,t]),a},PT=e=>{const[t,n]=R.useState(e.matches);return R.useEffect(()=>{const a=o=>{n(o.matches)};return e.addListener(a),n(e.matches),()=>{e.removeListener(a)}},[e]),t},De=(e,t,n)=>{const a=HT(t),o=DT(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=zT(o,a),u=PT(l);return kv(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},yh=R.createContext({});function Gr(e){const t=R.useRef(null);return t.current===null&&(t.current=e()),t.current}const wh=typeof window<"u",vu=wh?R.useLayoutEffect:R.useEffect,yu=R.createContext(null);function bh(e,t){e.indexOf(t)===-1&&e.push(t)}function Sh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Xi=(e,t,n)=>n>t?t:n<e?e:n;let bo=()=>{};const vn={},Vv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Hv(e){return typeof e=="object"&&e!==null}const Dv=e=>/^0[^.\s]+$/u.test(e);function Ch(e){let t;return()=>(t===void 0&&(t=e()),t)}const _t=e=>e,NT=(e,t)=>n=>t(e(n)),Vo=(...e)=>e.reduce(NT),zr=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class Th{constructor(){this.subscriptions=[]}add(t){return bh(this.subscriptions,t),()=>Sh(this.subscriptions,t)}notify(t,n,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,a);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gi=e=>e*1e3,qi=e=>e/1e3;function Eh(e,t){return t?e*(1e3/t):0}const zv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$T=1e-7,BT=12;function IT(e,t,n,a,o){let l,u,d=0;do u=t+(n-t)/2,l=zv(u,a,o)-e,l>0?n=u:t=u;while(Math.abs(l)>$T&&++d<BT);return u}function Ho(e,t,n,a){if(e===t&&n===a)return _t;const o=l=>IT(l,0,1,e,n);return l=>l===0||l===1?l:zv(o(l),t,a)}const Pv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Nv=e=>t=>1-e(1-t),wi=Ho(.33,1.53,.69,.99),jh=Nv(wi),$v=Pv(jh),Bv=e=>(e*=2)<1?.5*jh(e):.5*(2-Math.pow(2,-10*(e-1))),Ah=e=>1-Math.sin(Math.acos(e)),Ic=Nv(Ah),Iv=Pv(Ah),UT=Ho(.42,0,1,1),ae=Ho(0,0,.58,1),Mh=Ho(.42,0,.58,1),_T=e=>Array.isArray(e)&&typeof e[0]!="number",Uv=e=>Array.isArray(e)&&typeof e[0]=="number",GT={linear:_t,easeIn:UT,easeInOut:Mh,easeOut:ae,circIn:Ah,circInOut:Iv,circOut:Ic,backIn:jh,backInOut:$v,backOut:wi,anticipate:Bv},qT=e=>typeof e=="string",Lx=e=>{if(Uv(e)){bo(e.length===4);const[t,n,a,o]=e;return Ho(t,n,a,o)}else if(qT(e))return GT[e];return e},nc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function YT(e,t){let n=new Set,a=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(m.schedule(g),e()),g(d)}const m={schedule:(g,v=!1,y=!1)=>{const S=y&&o?n:a;return v&&u.add(g),S.has(g)||S.add(g),g},cancel:g=>{a.delete(g),u.delete(g)},process:g=>{if(d=g,o){l=!0;return}o=!0,[n,a]=[a,n],n.forEach(p),n.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const FT=40;function _v(e,t){let n=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,u=nc.reduce((T,V)=>(T[V]=YT(l),T),{}),{setup:d,read:p,resolveKeyframes:m,preUpdate:g,update:v,preRender:y,render:C,postRender:S}=u,j=()=>{const T=vn.useManualTiming?o.timestamp:performance.now();n=!1,vn.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(T-o.timestamp,FT),1)),o.timestamp=T,o.isProcessing=!0,d.process(o),p.process(o),m.process(o),g.process(o),v.process(o),y.process(o),C.process(o),S.process(o),o.isProcessing=!1,n&&t&&(a=!1,e(j))},L=()=>{n=!0,a=!0,o.isProcessing||e(j)};return{schedule:nc.reduce((T,V)=>{const O=u[V];return T[V]=(P,z=!1,_=!1)=>(n||L(),O.schedule(P,z,_)),T},{}),cancel:T=>{for(let V=0;V<nc.length;V++)u[nc[V]].cancel(T)},state:o,steps:u}}const{schedule:Ne,cancel:Oi,state:mt,steps:of}=_v(typeof requestAnimationFrame<"u"?requestAnimationFrame:_t,!0);let Lc;function XT(){Lc=void 0}const Ut={now:()=>(Lc===void 0&&Ut.set(mt.isProcessing||vn.useManualTiming?mt.timestamp:performance.now()),Lc),set:e=>{Lc=e,queueMicrotask(XT)}},Gv=e=>t=>typeof t=="string"&&t.startsWith(e),Lh=Gv("--"),ZT=Gv("var(--"),Oh=e=>ZT(e)?WT.test(e.split("/*")[0].trim()):!1,WT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,qr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},So={...qr,transform:e=>Xi(0,1,e)},ac={...qr,default:1},so=e=>Math.round(e*1e5)/1e5,Rh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KT(e){return e==null}const QT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kh=(e,t)=>n=>!!(typeof n=="string"&&QT.test(n)&&n.startsWith(e)||t&&!KT(n)&&Object.prototype.hasOwnProperty.call(n,t)),qv=(e,t,n)=>a=>{if(typeof a!="string")return a;const[o,l,u,d]=a.match(Rh);return{[e]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},JT=e=>Xi(0,255,e),lf={...qr,transform:e=>Math.round(JT(e))},wa={test:kh("rgb","red"),parse:qv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+lf.transform(e)+", "+lf.transform(t)+", "+lf.transform(n)+", "+so(So.transform(a))+")"};function eE(e){let t="",n="",a="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const xp={test:kh("#"),parse:eE,transform:wa.transform},Do=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Yn=Do("deg"),Yi=Do("%"),ge=Do("px"),tE=Do("vh"),iE=Do("vw"),Ox={...Yi,parse:e=>Yi.parse(e)/100,transform:e=>Yi.transform(e*100)},br={test:kh("hsl","hue"),parse:qv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Yi.transform(so(t))+", "+Yi.transform(so(n))+", "+so(So.transform(a))+")"},at={test:e=>wa.test(e)||xp.test(e)||br.test(e),parse:e=>wa.test(e)?wa.parse(e):br.test(e)?br.parse(e):xp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?wa.transform(e):br.transform(e),getAnimatableNone:e=>{const t=at.parse(e);return t.alpha=0,at.transform(t)}},nE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function aE(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Rh))==null?void 0:t.length)||0)+(((n=e.match(nE))==null?void 0:n.length)||0)>0}const Yv="number",Fv="color",rE="var",sE="var(",Rx="${}",oE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Co(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},o=[];let l=0;const d=t.replace(oE,p=>(at.test(p)?(a.color.push(l),o.push(Fv),n.push(at.parse(p))):p.startsWith(sE)?(a.var.push(l),o.push(rE),n.push(p)):(a.number.push(l),o.push(Yv),n.push(parseFloat(p))),++l,Rx)).split(Rx);return{values:n,split:d,indexes:a,types:o}}function Xv(e){return Co(e).values}function Zv(e){const{split:t,types:n}=Co(e),a=t.length;return o=>{let l="";for(let u=0;u<a;u++)if(l+=t[u],o[u]!==void 0){const d=n[u];d===Yv?l+=so(o[u]):d===Fv?l+=at.transform(o[u]):l+=o[u]}return l}}const lE=e=>typeof e=="number"?0:at.test(e)?at.getAnimatableNone(e):e;function cE(e){const t=Xv(e);return Zv(e)(t.map(lE))}const Zn={test:aE,parse:Xv,createTransformer:Zv,getAnimatableNone:cE};function cf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function uE({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let o=0,l=0,u=0;if(!t)o=l=u=n;else{const d=n<.5?n*(1+t):n+t-n*t,p=2*n-d;o=cf(p,d,e+1/3),l=cf(p,d,e),u=cf(p,d,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:a}}function Uc(e,t){return n=>n>0?t:e}const Xe=(e,t,n)=>e+(t-e)*n,uf=(e,t,n)=>{const a=e*e,o=n*(t*t-a)+a;return o<0?0:Math.sqrt(o)},dE=[xp,wa,br],fE=e=>dE.find(t=>t.test(e));function kx(e){const t=fE(e);if(!t)return!1;let n=t.parse(e);return t===br&&(n=uE(n)),n}const Vx=(e,t)=>{const n=kx(e),a=kx(t);if(!n||!a)return Uc(e,t);const o={...n};return l=>(o.red=uf(n.red,a.red,l),o.green=uf(n.green,a.green,l),o.blue=uf(n.blue,a.blue,l),o.alpha=Xe(n.alpha,a.alpha,l),wa.transform(o))},vp=new Set(["none","hidden"]);function pE(e,t){return vp.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function hE(e,t){return n=>Xe(e,t,n)}function Vh(e){return typeof e=="number"?hE:typeof e=="string"?Oh(e)?Uc:at.test(e)?Vx:xE:Array.isArray(e)?Wv:typeof e=="object"?at.test(e)?Vx:mE:Uc}function Wv(e,t){const n=[...e],a=n.length,o=e.map((l,u)=>Vh(l)(l,t[u]));return l=>{for(let u=0;u<a;u++)n[u]=o[u](l);return n}}function mE(e,t){const n={...e,...t},a={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Vh(e[o])(e[o],t[o]));return o=>{for(const l in a)n[l]=a[l](o);return n}}function gE(e,t){const n=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][a[l]],d=e.values[u]??0;n[o]=d,a[l]++}return n}const xE=(e,t)=>{const n=Zn.createTransformer(t),a=Co(e),o=Co(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?vp.has(e)&&!o.values.length||vp.has(t)&&!a.values.length?pE(e,t):Vo(Wv(gE(a,o),o.values),n):Uc(e,t)};function Kv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Xe(e,t,n):Vh(e)(e,t)}const vE=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Ne.update(t,n),stop:()=>Oi(t),now:()=>mt.isProcessing?mt.timestamp:Ut.now()}},Qv=(e,t,n=10)=>{let a="";const o=Math.max(Math.round(t/n),2);for(let l=0;l<o;l++)a+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},_c=2e4;function Hh(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<_c;)t+=n,a=e.next(t);return t>=_c?1/0:t}function yE(e,t=100,n){const a=n({...e,keyframes:[0,t]}),o=Math.min(Hh(a),_c);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:qi(o)}}const wE=5;function Jv(e,t,n){const a=Math.max(t-wE,0);return Eh(n-e(a),t-a)}const Ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},df=.001;function bE({duration:e=Ke.duration,bounce:t=Ke.bounce,velocity:n=Ke.velocity,mass:a=Ke.mass}){let o,l,u=1-t;u=Xi(Ke.minDamping,Ke.maxDamping,u),e=Xi(Ke.minDuration,Ke.maxDuration,qi(e)),u<1?(o=m=>{const g=m*u,v=g*e,y=g-n,C=yp(m,u),S=Math.exp(-v);return df-y/C*S},l=m=>{const v=m*u*e,y=v*n+n,C=Math.pow(u,2)*Math.pow(m,2)*e,S=Math.exp(-v),j=yp(Math.pow(m,2),u);return(-o(m)+df>0?-1:1)*((y-C)*S)/j}):(o=m=>{const g=Math.exp(-m*e),v=(m-n)*e+1;return-df+g*v},l=m=>{const g=Math.exp(-m*e),v=(n-m)*(e*e);return g*v});const d=5/e,p=CE(o,l,d);if(e=Gi(e),isNaN(p))return{stiffness:Ke.stiffness,damping:Ke.damping,duration:e};{const m=Math.pow(p,2)*a;return{stiffness:m,damping:u*2*Math.sqrt(a*m),duration:e}}}const SE=12;function CE(e,t,n){let a=n;for(let o=1;o<SE;o++)a=a-e(a)/t(a);return a}function yp(e,t){return e*Math.sqrt(1-t*t)}const TE=["duration","bounce"],EE=["stiffness","damping","mass"];function Hx(e,t){return t.some(n=>e[n]!==void 0)}function jE(e){let t={velocity:Ke.velocity,stiffness:Ke.stiffness,damping:Ke.damping,mass:Ke.mass,isResolvedFromDuration:!1,...e};if(!Hx(e,EE)&&Hx(e,TE))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),o=a*a,l=2*Xi(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Ke.mass,stiffness:o,damping:l}}else{const n=bE(e);t={...t,...n,mass:Ke.mass},t.isResolvedFromDuration=!0}return t}function Gc(e=Ke.visualDuration,t=Ke.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=n;const l=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],d={done:!1,value:l},{stiffness:p,damping:m,mass:g,duration:v,velocity:y,isResolvedFromDuration:C}=jE({...n,velocity:-qi(n.velocity||0)}),S=y||0,j=m/(2*Math.sqrt(p*g)),L=u-l,M=qi(Math.sqrt(p/g)),E=Math.abs(L)<5;a||(a=E?Ke.restSpeed.granular:Ke.restSpeed.default),o||(o=E?Ke.restDelta.granular:Ke.restDelta.default);let T;if(j<1){const O=yp(M,j);T=P=>{const z=Math.exp(-j*M*P);return u-z*((S+j*M*L)/O*Math.sin(O*P)+L*Math.cos(O*P))}}else if(j===1)T=O=>u-Math.exp(-M*O)*(L+(S+M*L)*O);else{const O=M*Math.sqrt(j*j-1);T=P=>{const z=Math.exp(-j*M*P),_=Math.min(O*P,300);return u-z*((S+j*M*L)*Math.sinh(_)+O*L*Math.cosh(_))/O}}const V={calculatedDuration:C&&v||null,next:O=>{const P=T(O);if(C)d.done=O>=v;else{let z=O===0?S:0;j<1&&(z=O===0?Gi(S):Jv(T,O,P));const _=Math.abs(z)<=a,Y=Math.abs(u-P)<=o;d.done=_&&Y}return d.value=d.done?u:P,d},toString:()=>{const O=Math.min(Hh(V),_c),P=Qv(z=>V.next(O*z).value,O,30);return O+"ms "+P},toTransition:()=>{}};return V}Gc.applyToOptions=e=>{const t=yE(e,100,Gc);return e.ease=t.ease,e.duration=Gi(t.duration),e.type="keyframes",e};function wp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:p,restDelta:m=.5,restSpeed:g}){const v=e[0],y={done:!1,value:v},C=_=>d!==void 0&&_<d||p!==void 0&&_>p,S=_=>d===void 0?p:p===void 0||Math.abs(d-_)<Math.abs(p-_)?d:p;let j=n*t;const L=v+j,M=u===void 0?L:u(L);M!==L&&(j=M-v);const E=_=>-j*Math.exp(-_/a),T=_=>M+E(_),V=_=>{const Y=E(_),F=T(_);y.done=Math.abs(Y)<=m,y.value=y.done?M:F};let O,P;const z=_=>{C(y.value)&&(O=_,P=Gc({keyframes:[y.value,S(y.value)],velocity:Jv(T,_,y.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return z(0),{calculatedDuration:null,next:_=>{let Y=!1;return!P&&O===void 0&&(Y=!0,V(_),z(_)),O!==void 0&&_>=O?P.next(_-O):(!Y&&V(_),y)}}}function AE(e,t,n){const a=[],o=n||vn.mix||Kv,l=e.length-1;for(let u=0;u<l;u++){let d=o(e[u],e[u+1]);if(t){const p=Array.isArray(t)?t[u]||_t:t;d=Vo(p,d)}a.push(d)}return a}function Dh(e,t,{clamp:n=!0,ease:a,mixer:o}={}){const l=e.length;if(bo(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const d=AE(t,a,o),p=d.length,m=g=>{if(u&&g<e[0])return t[0];let v=0;if(p>1)for(;v<e.length-2&&!(g<e[v+1]);v++);const y=zr(e[v],e[v+1],g);return d[v](y)};return n?g=>m(Xi(e[0],e[l-1],g)):m}function ME(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const o=zr(0,t,a);e.push(Xe(n,1,o))}}function ey(e){const t=[0];return ME(t,e.length-1),t}function LE(e,t){return e.map(n=>n*t)}function OE(e,t){return e.map(()=>t||Mh).splice(0,e.length-1)}function oo({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const o=_T(a)?a.map(Lx):Lx(a),l={done:!1,value:t[0]},u=LE(n&&n.length===t.length?n:ey(t),e),d=Dh(u,t,{ease:Array.isArray(o)?o:OE(t,o)});return{calculatedDuration:e,next:p=>(l.value=d(p),l.done=p>=e,l)}}const RE=e=>e!==null;function zh(e,{repeat:t,repeatType:n="loop"},a,o=1){const l=e.filter(RE),d=o<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!d||a===void 0?l[d]:a}const kE={decay:wp,inertia:wp,tween:oo,keyframes:oo,spring:Gc};function ty(e){typeof e.type=="string"&&(e.type=kE[e.type])}class Ph{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const VE=e=>e/100;class Nh extends Ph{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:n}=this.options;n&&n.updatedAt!==Ut.now()&&this.tick(Ut.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;ty(t);const{type:n=oo,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:d}=t;const p=n||oo;p!==oo&&typeof d[0]!="number"&&(this.mixKeyframes=Vo(VE,Kv(d[0],d[1])),d=[0,100]);const m=p({...t,keyframes:d});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...d].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=Hh(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=m}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:m=0,keyframes:g,repeat:v,repeatType:y,repeatDelay:C,type:S,onUpdate:j,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const M=this.currentTime-m*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let T=this.currentTime,V=a;if(v){const _=Math.min(this.currentTime,o)/d;let Y=Math.floor(_),F=_%1;!F&&_>=1&&(F=1),F===1&&Y--,Y=Math.min(Y,v+1),!!(Y%2)&&(y==="reverse"?(F=1-F,C&&(F-=C/d)):y==="mirror"&&(V=u)),T=Xi(0,1,F)*d}const O=E?{done:!1,value:g[0]}:V.next(T);l&&(O.value=l(O.value));let{done:P}=O;!E&&p!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return z&&S!==wp&&(O.value=zh(g,this.options,L,this.speed)),j&&j(O.value),z&&this.finish(),O}then(t,n){return this.finished.then(t,n)}get duration(){return qi(this.calculatedDuration)}get time(){return qi(this.currentTime)}set time(t){var n;t=Gi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Ut.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=qi(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=vE,startTime:n}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Ut.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function HE(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const ba=e=>e*180/Math.PI,bp=e=>{const t=ba(Math.atan2(e[1],e[0]));return Sp(t)},DE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:bp,rotateZ:bp,skewX:e=>ba(Math.atan(e[1])),skewY:e=>ba(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Sp=e=>(e=e%360,e<0&&(e+=360),e),Dx=bp,zx=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Px=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),zE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:zx,scaleY:Px,scale:e=>(zx(e)+Px(e))/2,rotateX:e=>Sp(ba(Math.atan2(e[6],e[5]))),rotateY:e=>Sp(ba(Math.atan2(-e[2],e[0]))),rotateZ:Dx,rotate:Dx,skewX:e=>ba(Math.atan(e[4])),skewY:e=>ba(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Cp(e){return e.includes("scale")?1:0}function Tp(e,t){if(!e||e==="none")return Cp(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(n)a=zE,o=n;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=DE,o=d}if(!o)return Cp(t);const l=a[t],u=o[1].split(",").map(NE);return typeof l=="function"?l(u):u[l]}const PE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Tp(n,t)};function NE(e){return parseFloat(e.trim())}const Yr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fr=new Set(Yr),Nx=e=>e===qr||e===ge,$E=new Set(["x","y","z"]),BE=Yr.filter(e=>!$E.has(e));function IE(e){const t=[];return BE.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const Ta={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Tp(t,"x"),y:(e,{transform:t})=>Tp(t,"y")};Ta.translateX=Ta.x;Ta.translateY=Ta.y;const Ea=new Set;let Ep=!1,jp=!1,Ap=!1;function iy(){if(jp){const e=Array.from(Ea).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const o=IE(a);o.length&&(n.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=n.get(a);o&&o.forEach(([l,u])=>{var d;(d=a.getValue(l))==null||d.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}jp=!1,Ep=!1,Ea.forEach(e=>e.complete(Ap)),Ea.clear()}function ny(){Ea.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(jp=!0)})}function UE(){Ap=!0,ny(),iy(),Ap=!1}class $h{constructor(t,n,a,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Ea.add(this),Ep||(Ep=!0,Ne.read(ny),Ne.resolveKeyframes(iy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&n){const d=a.readValue(n,u);d!=null&&(t[0]=d)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}HE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ea.delete(this)}cancel(){this.state==="scheduled"&&(Ea.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const _E=e=>e.startsWith("--");function GE(e,t,n){_E(t)?e.style.setProperty(t,n):e.style[t]=n}const ay=Ch(()=>window.ScrollTimeline!==void 0),qE={};function YE(e,t){const n=Ch(e);return()=>qE[t]??n()}const ry=YE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ao=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,$x={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ao([0,.65,.55,1]),circOut:ao([.55,0,1,.45]),backIn:ao([.31,.01,.66,-.59]),backOut:ao([.33,1.53,.69,.99])};function sy(e,t){if(e)return typeof e=="function"?ry()?Qv(e,t):"ease-out":Uv(e)?ao(e):Array.isArray(e)?e.map(n=>sy(n,t)||$x.easeOut):$x[e]}function FE(e,t,n,{delay:a=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:p}={},m=void 0){const g={[t]:n};p&&(g.offset=p);const v=sy(d,o);Array.isArray(v)&&(g.easing=v);const y={delay:a,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),e.animate(g,y)}function oy(e){return typeof e=="function"&&"applyToOptions"in e}function XE({type:e,...t}){return oy(e)&&ry()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class ZE extends Ph{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:a,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:p}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,bo(typeof t.type!="string");const m=XE(t);this.animation=FE(n,a,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=zh(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(g):GE(n,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return qi(Number(t))}get time(){return qi(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Gi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&ay()?(this.animation.timeline=t,_t):n(this)}}const ly={anticipate:Bv,backInOut:$v,circInOut:Iv};function WE(e){return e in ly}function KE(e){typeof e.ease=="string"&&WE(e.ease)&&(e.ease=ly[e.ease])}const Bx=10;class QE extends ZE{constructor(t){KE(t),ty(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:o,element:l,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const d=new Nh({...u,autoplay:!1}),p=Gi(this.finishedTime??this.time);n.setWithVelocity(d.sample(p-Bx).value,d.sample(p).value,Bx),d.stop()}}const Ix=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Zn.test(e)||e==="0")&&!e.startsWith("url("));function JE(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ej(e,t,n,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=Ix(o,t),d=Ix(l,t);return!u||!d?!1:JE(e)||(n==="spring"||oy(n))&&a}function Mp(e){e.duration=0,e.type}const tj=new Set(["opacity","clipPath","filter","transform"]),ij=Ch(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nj(e){var g;const{motionValue:t,name:n,repeatDelay:a,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=t.owner.getProps();return ij()&&n&&tj.has(n)&&(n!=="transform"||!m)&&!p&&!a&&o!=="mirror"&&l!==0&&u!=="inertia"}const aj=40;class rj extends Ph{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:p,motionValue:m,element:g,...v}){var S;super(),this.stop=()=>{var j,L;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=Ut.now();const y={autoplay:t,delay:n,type:a,repeat:o,repeatDelay:l,repeatType:u,name:p,motionValue:m,element:g,...v},C=(g==null?void 0:g.KeyframeResolver)||$h;this.keyframeResolver=new C(d,(j,L,M)=>this.onKeyframesResolved(j,L,y,!M),p,m,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,n,a,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:p,isHandoff:m,onUpdate:g}=a;this.resolvedAt=Ut.now(),ej(t,l,u,d)||((vn.instantAnimations||!p)&&(g==null||g(zh(t,a,n))),t[0]=t[t.length-1],Mp(a),a.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>aj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},C=!m&&nj(y)?new QE({...y,element:y.motionValue.owner.current}):new Nh(y);C.finished.then(()=>this.notifyFinished()).catch(_t),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),UE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const sj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oj(e){const t=sj.exec(e);if(!t)return[,];const[,n,a,o]=t;return[`--${n??a}`,o]}function cy(e,t,n=1){const[a,o]=oj(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const u=l.trim();return Vv(u)?parseFloat(u):u}return Oh(o)?cy(o,t,n+1):o}function Bh(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const uy=new Set(["width","height","top","left","right","bottom",...Yr]),lj={test:e=>e==="auto",parse:e=>e},dy=e=>t=>t.test(e),fy=[qr,ge,Yi,Yn,iE,tE,lj],Ux=e=>fy.find(dy(e));function cj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Dv(e):!0}const uj=new Set(["brightness","contrast","saturate","opacity"]);function dj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(Rh)||[];if(!a)return e;const o=n.replace(a,"");let l=uj.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+o+")"}const fj=/\b([a-z-]*)\(.*?\)/gu,Lp={...Zn,getAnimatableNone:e=>{const t=e.match(fj);return t?t.map(dj).join(" "):e}},_x={...qr,transform:Math.round},pj={rotate:Yn,rotateX:Yn,rotateY:Yn,rotateZ:Yn,scale:ac,scaleX:ac,scaleY:ac,scaleZ:ac,skew:Yn,skewX:Yn,skewY:Yn,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:So,originX:Ox,originY:Ox,originZ:ge},Ih={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,backgroundPositionX:ge,backgroundPositionY:ge,...pj,zIndex:_x,fillOpacity:So,strokeOpacity:So,numOctaves:_x},hj={...Ih,color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,filter:Lp,WebkitFilter:Lp},py=e=>hj[e];function hy(e,t){let n=py(e);return n!==Lp&&(n=Zn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const mj=new Set(["auto","none","0"]);function gj(e,t,n){let a=0,o;for(;a<e.length&&!o;){const l=e[a];typeof l=="string"&&!mj.has(l)&&Co(l).values.length&&(o=e[a]),a++}if(o&&n)for(const l of t)e[l]=hy(n,o)}class xj extends $h{constructor(t,n,a,o,l){super(t,n,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let m=t[p];if(typeof m=="string"&&(m=m.trim(),Oh(m))){const g=cy(m,n.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!uy.has(a)||t.length!==2)return;const[o,l]=t,u=Ux(o),d=Ux(l);if(u!==d)if(Nx(u)&&Nx(d))for(let p=0;p<t.length;p++){const m=t[p];typeof m=="string"&&(t[p]=parseFloat(m))}else Ta[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||cj(t[o]))&&a.push(o);a.length&&gj(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ta[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var d;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const l=a.length-1,u=a[l];a[l]=Ta[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([p,m])=>{t.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function my(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const gy=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Uh(e){return Hv(e)&&"offsetHeight"in e}const Gx=30,vj=e=>!isNaN(parseFloat(e)),lo={current:void 0};class yj{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var l;const o=Ut.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ut.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=vj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Th);const a=this.events[t].add(n);return t==="change"?()=>{a(),Ne.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return lo.current&&lo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Gx)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Gx);return Eh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ai(e,t){return new yj(e,t)}const{schedule:_h}=_v(queueMicrotask,!1),ji={x:!1,y:!1};function xy(){return ji.x||ji.y}function wj(e){return e==="x"||e==="y"?ji[e]?null:(ji[e]=!0,()=>{ji[e]=!1}):ji.x||ji.y?null:(ji.x=ji.y=!0,()=>{ji.x=ji.y=!1})}function vy(e,t){const n=my(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[n,o,()=>a.abort()]}function qx(e){return!(e.pointerType==="touch"||xy())}function bj(e,t,n={}){const[a,o,l]=vy(e,n),u=d=>{if(!qx(d))return;const{target:p}=d,m=t(p,d);if(typeof m!="function"||!p)return;const g=v=>{qx(v)&&(m(v),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return a.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const yy=(e,t)=>t?e===t?!0:yy(e,t.parentElement):!1,Gh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Sj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Cj(e){return Sj.has(e.tagName)||e.tabIndex!==-1}const Oc=new WeakSet;function Yx(e){return t=>{t.key==="Enter"&&e(t)}}function ff(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Tj=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=Yx(()=>{if(Oc.has(n))return;ff(n,"down");const o=Yx(()=>{ff(n,"up")}),l=()=>ff(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",l,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function Fx(e){return Gh(e)&&!xy()}function Ej(e,t,n={}){const[a,o,l]=vy(e,n),u=d=>{const p=d.currentTarget;if(!Fx(d))return;Oc.add(p);const m=t(p,d),g=(C,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",y),Oc.has(p)&&Oc.delete(p),Fx(C)&&typeof m=="function"&&m(C,{success:S})},v=C=>{g(C,p===window||p===document||n.useGlobalTarget||yy(p,C.target))},y=C=>{g(C,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",y,o)};return a.forEach(d=>{(n.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),Uh(d)&&(d.addEventListener("focus",m=>Tj(m,o)),!Cj(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function qh(e){return Hv(e)&&"ownerSVGElement"in e}const Rc=new WeakMap;let Fn;const wy=(e,t,n)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:qh(a)&&"getBBox"in a?a.getBBox()[t]:a[n],jj=wy("inline","width","offsetWidth"),Aj=wy("block","height","offsetHeight");function Mj({target:e,borderBoxSize:t}){var n;(n=Rc.get(e))==null||n.forEach(a=>{a(e,{get width(){return jj(e,t)},get height(){return Aj(e,t)}})})}function Lj(e){e.forEach(Mj)}function Oj(){typeof ResizeObserver>"u"||(Fn=new ResizeObserver(Lj))}function Rj(e,t){Fn||Oj();const n=my(e);return n.forEach(a=>{let o=Rc.get(a);o||(o=new Set,Rc.set(a,o)),o.add(t),Fn==null||Fn.observe(a)}),()=>{n.forEach(a=>{const o=Rc.get(a);o==null||o.delete(t),o!=null&&o.size||Fn==null||Fn.unobserve(a)})}}const kc=new Set;let Sr;function kj(){Sr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};kc.forEach(t=>t(e))},window.addEventListener("resize",Sr)}function Vj(e){return kc.add(e),Sr||kj(),()=>{kc.delete(e),!kc.size&&typeof Sr=="function"&&(window.removeEventListener("resize",Sr),Sr=void 0)}}function Hj(e,t){return typeof e=="function"?Vj(e):Rj(e,t)}function by(e,t){let n;const a=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;n!==u&&e(u),n=u};return Ne.preUpdate(a,!0),()=>Oi(a)}function Dj(e){return qh(e)&&e.tagName==="svg"}function zj(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],o=e[1+n],l=e[2+n],u=e[3+n],d=Dh(o,l,u);return t?d(a):d}const Lt=e=>!!(e&&e.getVelocity),Pj=[...fy,at,Zn],Nj=e=>Pj.find(dy(e)),wu=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class $j extends R.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const a=n.offsetParent,o=Uh(a)&&a.offsetWidth||0,l=this.props.sizeRef.current;l.height=n.offsetHeight||0,l.width=n.offsetWidth||0,l.top=n.offsetTop,l.left=n.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Bj({children:e,isPresent:t,anchorX:n,root:a}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(wu);return R.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:v,right:y}=u.current;if(t||!l.current||!p||!m)return;const C=n==="left"?`left: ${v}`:`right: ${y}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");d&&(S.nonce=d);const j=a??document.head;return j.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${C}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(S)&&j.removeChild(S)}},[t]),f.jsx($j,{isPresent:t,childRef:l,sizeRef:u,children:R.cloneElement(e,{ref:l})})}const Ij=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:p})=>{const m=Gr(Uj),g=R.useId();let v=!0,y=R.useMemo(()=>(v=!1,{id:g,initial:t,isPresent:n,custom:o,onExitComplete:C=>{m.set(C,!0);for(const S of m.values())if(!S)return;a&&a()},register:C=>(m.set(C,!1),()=>m.delete(C))}),[n,m,a]);return l&&v&&(y={...y}),R.useMemo(()=>{m.forEach((C,S)=>m.set(S,!1))},[n]),R.useEffect(()=>{!n&&!m.size&&a&&a()},[n]),u==="popLayout"&&(e=f.jsx(Bj,{isPresent:n,anchorX:d,root:p,children:e})),f.jsx(yu.Provider,{value:y,children:e})};function Uj(){return new Map}function Sy(e=!0){const t=R.useContext(yu);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:o}=t,l=R.useId();R.useEffect(()=>{if(e)return o(l)},[e]);const u=R.useCallback(()=>e&&a&&a(l),[l,a,e]);return!n&&a?[!1,u]:[!0]}const rc=e=>e.key||"";function Xx(e){const t=[];return R.Children.forEach(e,n=>{R.isValidElement(n)&&t.push(n)}),t}const Yh=({children:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:p})=>{const[m,g]=Sy(u),v=R.useMemo(()=>Xx(e),[e]),y=u&&!m?[]:v.map(rc),C=R.useRef(!0),S=R.useRef(v),j=Gr(()=>new Map),[L,M]=R.useState(v),[E,T]=R.useState(v);vu(()=>{C.current=!1,S.current=v;for(let P=0;P<E.length;P++){const z=rc(E[P]);y.includes(z)?j.delete(z):j.get(z)!==!0&&j.set(z,!1)}},[E,y.length,y.join("-")]);const V=[];if(v!==L){let P=[...v];for(let z=0;z<E.length;z++){const _=E[z],Y=rc(_);y.includes(Y)||(P.splice(z,0,_),V.push(_))}return l==="wait"&&V.length&&(P=V),T(Xx(P)),M(v),null}const{forceRender:O}=R.useContext(yh);return f.jsx(f.Fragment,{children:E.map(P=>{const z=rc(P),_=u&&!m?!1:v===E||y.includes(z),Y=()=>{if(j.has(z))j.set(z,!0);else return;let F=!0;j.forEach(K=>{K||(F=!1)}),F&&(O==null||O(),T(S.current),u&&(g==null||g()),a&&a())};return f.jsx(Ij,{isPresent:_,initial:!C.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:_?void 0:Y,anchorX:d,children:P},z)})})},Cy=R.createContext({strict:!1}),Zx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pr={};for(const e in Zx)Pr[e]={isEnabled:t=>Zx[e].some(n=>!!t[n])};function _j(e){for(const t in e)Pr[t]={...Pr[t],...e[t]}}const Gj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Gj.has(e)}let Ty=e=>!qc(e);function qj(e){typeof e=="function"&&(Ty=t=>t.startsWith("on")?!qc(t):e(t))}try{qj(require("@emotion/is-prop-valid").default)}catch{}function Yj(e,t,n){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(Ty(o)||n===!0&&qc(o)||!t&&!qc(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const bu=R.createContext({});function Su(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function To(e){return typeof e=="string"||Array.isArray(e)}const Fh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xh=["initial",...Fh];function Cu(e){return Su(e.animate)||Xh.some(t=>To(e[t]))}function Ey(e){return!!(Cu(e)||e.variants)}function Fj(e,t){if(Cu(e)){const{initial:n,animate:a}=e;return{initial:n===!1||To(n)?n:void 0,animate:To(a)?a:void 0}}return e.inherit!==!1?t:{}}function Xj(e){const{initial:t,animate:n}=Fj(e,R.useContext(bu));return R.useMemo(()=>({initial:t,animate:n}),[Wx(t),Wx(n)])}function Wx(e){return Array.isArray(e)?e.join(" "):e}const Eo={};function Zj(e){for(const t in e)Eo[t]=e[t],Lh(t)&&(Eo[t].isCSSVariable=!0)}function jy(e,{layout:t,layoutId:n}){return Fr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Eo[e]||e==="opacity")}const Wj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Kj=Yr.length;function Qj(e,t,n){let a="",o=!0;for(let l=0;l<Kj;l++){const u=Yr[l],d=e[u];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(u.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||n){const m=gy(d,Ih[u]);if(!p){o=!1;const g=Wj[u]||u;a+=`${g}(${m}) `}n&&(t[u]=m)}}return a=a.trim(),n?a=n(t,o?"":a):o&&(a="none"),a}function Zh(e,t,n){const{style:a,vars:o,transformOrigin:l}=e;let u=!1,d=!1;for(const p in t){const m=t[p];if(Fr.has(p)){u=!0;continue}else if(Lh(p)){o[p]=m;continue}else{const g=gy(m,Ih[p]);p.startsWith("origin")?(d=!0,l[p]=g):a[p]=g}}if(t.transform||(u||n?a.transform=Qj(t,e.transform,n):a.transform&&(a.transform="none")),d){const{originX:p="50%",originY:m="50%",originZ:g=0}=l;a.transformOrigin=`${p} ${m} ${g}`}}const Wh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ay(e,t,n){for(const a in t)!Lt(t[a])&&!jy(a,n)&&(e[a]=t[a])}function Jj({transformTemplate:e},t){return R.useMemo(()=>{const n=Wh();return Zh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function eA(e,t){const n=e.style||{},a={};return Ay(a,n,e),Object.assign(a,Jj(e,t)),a}function tA(e,t){const n={},a=eA(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const iA={offset:"stroke-dashoffset",array:"stroke-dasharray"},nA={offset:"strokeDashoffset",array:"strokeDasharray"};function aA(e,t,n=1,a=0,o=!0){e.pathLength=1;const l=o?iA:nA;e[l.offset]=ge.transform(-a);const u=ge.transform(t),d=ge.transform(n);e[l.array]=`${u} ${d}`}function My(e,{attrX:t,attrY:n,attrScale:a,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},p,m,g){if(Zh(e,d,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:y}=e;v.transform&&(y.transform=v.transform,delete v.transform),(y.transform||v.transformOrigin)&&(y.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),a!==void 0&&(v.scale=a),o!==void 0&&aA(v,o,l,u,!1)}const Ly=()=>({...Wh(),attrs:{}}),Oy=e=>typeof e=="string"&&e.toLowerCase()==="svg";function rA(e,t,n,a){const o=R.useMemo(()=>{const l=Ly();return My(l,t,Oy(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};Ay(l,e.style,e),o.style={...l,...o.style}}return o}const sA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kh(e){return typeof e!="string"||e.includes("-")?!1:!!(sA.indexOf(e)>-1||/[A-Z]/u.test(e))}function oA(e,t,n,{latestValues:a},o,l=!1){const d=(Kh(e)?rA:tA)(t,a,o,e),p=Yj(t,typeof e=="string",l),m=e!==R.Fragment?{...p,...d,ref:n}:{},{children:g}=t,v=R.useMemo(()=>Lt(g)?g.get():g,[g]);return R.createElement(e,{...m,children:v})}function Kx(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function Qh(e,t,n,a){if(typeof t=="function"){const[o,l]=Kx(a);t=t(n!==void 0?n:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=Kx(a);t=t(n!==void 0?n:e.custom,o,l)}return t}function Vc(e){return Lt(e)?e.get():e}function lA({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,o){return{latestValues:cA(n,a,o,e),renderState:t()}}function cA(e,t,n,a){const o={},l=a(e,{});for(const y in l)o[y]=Vc(l[y]);let{initial:u,animate:d}=e;const p=Cu(e),m=Ey(e);t&&m&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?d:u;if(v&&typeof v!="boolean"&&!Su(v)){const y=Array.isArray(v)?v:[v];for(let C=0;C<y.length;C++){const S=Qh(e,y[C]);if(S){const{transitionEnd:j,transition:L,...M}=S;for(const E in M){let T=M[E];if(Array.isArray(T)){const V=g?T.length-1:0;T=T[V]}T!==null&&(o[E]=T)}for(const E in j)o[E]=j[E]}}}return o}const Ry=e=>(t,n)=>{const a=R.useContext(bu),o=R.useContext(yu),l=()=>lA(e,t,a,o);return n?l():Gr(l)};function Jh(e,t,n){var l;const{style:a}=e,o={};for(const u in a)(Lt(a[u])||t.style&&Lt(t.style[u])||jy(u,e)||((l=n==null?void 0:n.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=a[u]);return o}const uA=Ry({scrapeMotionValuesFromProps:Jh,createRenderState:Wh});function ky(e,t,n){const a=Jh(e,t,n);for(const o in e)if(Lt(e[o])||Lt(t[o])){const l=Yr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=e[o]}return a}const dA=Ry({scrapeMotionValuesFromProps:ky,createRenderState:Ly}),fA=Symbol.for("motionComponentSymbol");function Cr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function pA(e,t,n){return R.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),n&&(typeof n=="function"?n(a):Cr(n)&&(n.current=a))},[t])}const e1=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),hA="framerAppearId",Vy="data-"+e1(hA),Hy=R.createContext({});function mA(e,t,n,a,o){var j,L;const{visualElement:l}=R.useContext(bu),u=R.useContext(Cy),d=R.useContext(yu),p=R.useContext(wu).reducedMotion,m=R.useRef(null);a=a||u.renderer,!m.current&&a&&(m.current=a(e,{visualState:t,parent:l,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,v=R.useContext(Hy);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&gA(m.current,n,o,v);const y=R.useRef(!1);R.useInsertionEffect(()=>{g&&y.current&&g.update(n,d)});const C=n[Vy],S=R.useRef(!!C&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,C))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,C)));return vu(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,C)}),S.current=!1),g.enteringChildren=void 0)}),g}function gA(e,t,n,a){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Dy(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&Cr(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:p,layoutRoot:m})}function Dy(e){if(e)return e.options.allowProjection!==!1?e.projection:Dy(e.parent)}function pf(e,{forwardMotionProps:t=!1}={},n,a){n&&_j(n);const o=Kh(e)?dA:uA;function l(d,p){let m;const g={...R.useContext(wu),...d,layoutId:xA(d)},{isStatic:v}=g,y=Xj(d),C=o(d,v);if(!v&&wh){vA();const S=yA(g);m=S.MeasureLayout,y.visualElement=mA(e,C,g,a,S.ProjectionNode)}return f.jsxs(bu.Provider,{value:y,children:[m&&y.visualElement?f.jsx(m,{visualElement:y.visualElement,...g}):null,oA(e,d,pA(C,y.visualElement,p),C,v,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=R.forwardRef(l);return u[fA]=e,u}function xA({layoutId:e}){const t=R.useContext(yh).id;return t&&e!==void 0?t+"-"+e:e}function vA(e,t){R.useContext(Cy).strict}function yA(e){const{drag:t,layout:n}=Pr;if(!t&&!n)return{};const a={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function wA(e,t){if(typeof Proxy>"u")return pf;const n=new Map,a=(l,u)=>pf(l,u,e,t),o=(l,u)=>a(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?a:(n.has(u)||n.set(u,pf(u,void 0,e,t)),n.get(u))})}function zy({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function bA({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function SA(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function hf(e){return e===void 0||e===1}function Op({scale:e,scaleX:t,scaleY:n}){return!hf(e)||!hf(t)||!hf(n)}function va(e){return Op(e)||Py(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Py(e){return Qx(e.x)||Qx(e.y)}function Qx(e){return e&&e!=="0%"}function Yc(e,t,n){const a=e-n,o=t*a;return n+o}function Jx(e,t,n,a,o){return o!==void 0&&(e=Yc(e,o,a)),Yc(e,n,a)+t}function Rp(e,t=0,n=1,a,o){e.min=Jx(e.min,t,n,a,o),e.max=Jx(e.max,t,n,a,o)}function Ny(e,{x:t,y:n}){Rp(e.x,t.translate,t.scale,t.originPoint),Rp(e.y,n.translate,n.scale,n.originPoint)}const e4=.999999999999,t4=1.0000000000001;function CA(e,t,n,a=!1){const o=n.length;if(!o)return;t.x=t.y=1;let l,u;for(let d=0;d<o;d++){l=n[d],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Er(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,Ny(e,u)),a&&va(l.latestValues)&&Er(e,l.latestValues))}t.x<t4&&t.x>e4&&(t.x=1),t.y<t4&&t.y>e4&&(t.y=1)}function Tr(e,t){e.min=e.min+t,e.max=e.max+t}function i4(e,t,n,a,o=.5){const l=Xe(e.min,e.max,o);Rp(e,t,n,l,a)}function Er(e,t){i4(e.x,t.x,t.scaleX,t.scale,t.originX),i4(e.y,t.y,t.scaleY,t.scale,t.originY)}function $y(e,t){return zy(SA(e.getBoundingClientRect(),t))}function TA(e,t,n){const a=$y(e,n),{scroll:o}=t;return o&&(Tr(a.x,o.offset.x),Tr(a.y,o.offset.y)),a}const n4=()=>({translate:0,scale:1,origin:0,originPoint:0}),jr=()=>({x:n4(),y:n4()}),a4=()=>({min:0,max:0}),tt=()=>({x:a4(),y:a4()}),kp={current:null},By={current:!1};function EA(){if(By.current=!0,!!wh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>kp.current=e.matches;e.addEventListener("change",t),t()}else kp.current=!1}const jA=new WeakMap;function AA(e,t,n){for(const a in t){const o=t[a],l=n[a];if(Lt(o))e.addValue(a,o);else if(Lt(l))e.addValue(a,Ai(o,{owner:e}));else if(l!==o)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(a);e.addValue(a,Ai(u!==void 0?u:o,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const r4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class MA{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$h,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ut.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ne.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=m,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=Cu(n),this.isVariantNode=Ey(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in v){const C=v[y];p[y]!==void 0&&Lt(C)&&C.set(p[y])}}mount(t){var n;this.current=t,jA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),By.current||EA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:kp.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Oi(this.notifyUpdate),Oi(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Fr.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ne.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Pr){const n=Pr[t];if(!n)continue;const{isEnabled:a,Feature:o}=n;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<r4.length;a++){const o=r4[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=AA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=Ai(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(Vv(a)||Dv(a))?a=parseFloat(a):!Nj(a)&&Zn.test(n)&&(a=hy(t,n)),this.setBaseTarget(t,Lt(a)?a.get():a)),Lt(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var l;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const u=Qh(this.props,n,(l=this.presenceContext)==null?void 0:l.custom);u&&(a=u[t])}if(n&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Lt(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Th),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){_h.render(this.render)}}class Iy extends MA{constructor(){super(...arguments),this.KeyframeResolver=xj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Lt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Uy(e,{style:t,vars:n},a,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,a);for(u in n)l.setProperty(u,n[u])}function LA(e){return window.getComputedStyle(e)}class OA extends Iy{constructor(){super(...arguments),this.type="html",this.renderInstance=Uy}readValueFromInstance(t,n){var a;if(Fr.has(n))return(a=this.projection)!=null&&a.isProjecting?Cp(n):PE(t,n);{const o=LA(t),l=(Lh(n)?o.getPropertyValue(n):o[n])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:n}){return $y(t,n)}build(t,n,a){Zh(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return Jh(t,n,a)}}const _y=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function RA(e,t,n,a){Uy(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(_y.has(o)?o:e1(o),t.attrs[o])}class kA extends Iy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tt}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Fr.has(n)){const a=py(n);return a&&a.default||0}return n=_y.has(n)?n:e1(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return ky(t,n,a)}build(t,n,a){My(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,o){RA(t,n,a,o)}mount(t){this.isSVGTag=Oy(t.tagName),super.mount(t)}}const VA=(e,t)=>Kh(e)?new kA(t):new OA(t,{allowProjection:e!==R.Fragment});function Mr(e,t,n){const a=e.getProps();return Qh(a,t,n!==void 0?n:a.custom,e)}const Vp=e=>Array.isArray(e);function HA(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ai(n))}function DA(e){return Vp(e)?e[e.length-1]||0:e}function zA(e,t){const n=Mr(e,t);let{transitionEnd:a={},transition:o={},...l}=n||{};l={...l,...a};for(const u in l){const d=DA(l[u]);HA(e,u,d)}}function PA(e){return!!(Lt(e)&&e.add)}function Hp(e,t){const n=e.getValue("willChange");if(PA(n))return n.add(t);if(!n&&vn.WillChange){const a=new vn.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function Gy(e){return e.props[Vy]}const NA=e=>e!==null;function $A(e,{repeat:t,repeatType:n="loop"},a){const o=e.filter(NA),l=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[l]}const BA={type:"spring",stiffness:500,damping:25,restSpeed:10},IA=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),UA={type:"keyframes",duration:.8},_A={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GA=(e,{keyframes:t})=>t.length>2?UA:Fr.has(e)?e.startsWith("scale")?IA(t[1]):BA:_A;function qA({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const t1=(e,t,n,a={},o,l)=>u=>{const d=Bh(a,e)||{},p=d.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Gi(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...d,delay:-m,onUpdate:y=>{t.set(y),d.onUpdate&&d.onUpdate(y)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:e,motionValue:t,element:l?void 0:o};qA(d)||Object.assign(g,GA(e,g)),g.duration&&(g.duration=Gi(g.duration)),g.repeatDelay&&(g.repeatDelay=Gi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Mp(g),g.delay===0&&(v=!0)),(vn.instantAnimations||vn.skipAnimations)&&(v=!0,Mp(g),g.delay=0),g.allowFlatten=!d.type&&!d.ease,v&&!l&&t.get()!==void 0){const y=$A(g.keyframes,d);if(y!==void 0){Ne.update(()=>{g.onUpdate(y),g.onComplete()});return}}return d.isSync?new Nh(g):new rj(g)};function YA({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function qy(e,t,{delay:n=0,transitionOverride:a,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...d}=t;a&&(l=a);const p=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in d){const v=e.getValue(g,e.latestValues[g]??null),y=d[g];if(y===void 0||m&&YA(m,g))continue;const C={delay:n,...Bh(l||{},g)},S=v.get();if(S!==void 0&&!v.isAnimating&&!Array.isArray(y)&&y===S&&!C.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const M=Gy(e);if(M){const E=window.MotionHandoffAnimation(M,g,Ne);E!==null&&(C.startTime=E,j=!0)}}Hp(e,g),v.start(t1(g,v,y,e.shouldReduceMotion&&uy.has(g)?{type:!1}:C,e,j));const L=v.animation;L&&p.push(L)}return u&&Promise.all(p).then(()=>{Ne.update(()=>{u&&zA(e,u)})}),p}function Yy(e,t,n,a=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),u=e.size,d=(u-1)*a;return typeof n=="function"?n(l,u):o===1?l*a:d-l*a}function Dp(e,t,n={}){var p;const a=Mr(e,t,n.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(o=n.transitionOverride);const l=a?()=>Promise.all(qy(e,a,n)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:y}=o;return FA(e,t,m,g,v,y,n)}:()=>Promise.resolve(),{when:d}=o;if(d){const[m,g]=d==="beforeChildren"?[l,u]:[u,l];return m().then(()=>g())}else return Promise.all([l(),u(n.delay)])}function FA(e,t,n=0,a=0,o=0,l=1,u){const d=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),d.push(Dp(p,t,{...u,delay:n+(typeof a=="function"?0:a)+Yy(e.variantChildren,p,a,o,l)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(d)}function XA(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(l=>Dp(e,l,n));a=Promise.all(o)}else if(typeof t=="string")a=Dp(e,t,n);else{const o=typeof t=="function"?Mr(e,t,n.custom):t;a=Promise.all(qy(e,o,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}function Fy(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const ZA=Xh.length;function Xy(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Xy(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<ZA;n++){const a=Xh[n],o=e.props[a];(To(o)||o===!1)&&(t[a]=o)}return t}const WA=[...Fh].reverse(),KA=Fh.length;function QA(e){return t=>Promise.all(t.map(({animation:n,options:a})=>XA(e,n,a)))}function JA(e){let t=QA(e),n=s4(),a=!0;const o=p=>(m,g)=>{var y;const v=Mr(e,g,p==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(v){const{transition:C,transitionEnd:S,...j}=v;m={...m,...j,...S}}return m};function l(p){t=p(e)}function u(p){const{props:m}=e,g=Xy(e.parent)||{},v=[],y=new Set;let C={},S=1/0;for(let L=0;L<KA;L++){const M=WA[L],E=n[M],T=m[M]!==void 0?m[M]:g[M],V=To(T),O=M===p?E.isActive:null;O===!1&&(S=L);let P=T===g[M]&&T!==m[M]&&V;if(P&&a&&e.manuallyAnimateOnMount&&(P=!1),E.protectedKeys={...C},!E.isActive&&O===null||!T&&!E.prevProp||Su(T)||typeof T=="boolean")continue;const z=eM(E.prevProp,T);let _=z||M===p&&E.isActive&&!P&&V||L>S&&V,Y=!1;const F=Array.isArray(T)?T:[T];let K=F.reduce(o(M),{});O===!1&&(K={});const{prevResolvedValues:ie={}}=E,le={...ie,...K},de=W=>{_=!0,y.has(W)&&(Y=!0,y.delete(W)),E.needsAnimating[W]=!0;const J=e.getValue(W);J&&(J.liveStyle=!1)};for(const W in le){const J=K[W],te=ie[W];if(C.hasOwnProperty(W))continue;let k=!1;Vp(J)&&Vp(te)?k=!Fy(J,te):k=J!==te,k?J!=null?de(W):y.add(W):J!==void 0&&y.has(W)?de(W):E.protectedKeys[W]=!0}E.prevProp=T,E.prevResolvedValues=K,E.isActive&&(C={...C,...K}),a&&e.blockInitialAnimation&&(_=!1);const oe=P&&z;_&&(!oe||Y)&&v.push(...F.map(W=>{const J={type:M};if(typeof W=="string"&&a&&!oe&&e.manuallyAnimateOnMount&&e.parent){const{parent:te}=e,k=Mr(te,W);if(te.enteringChildren&&k){const{delayChildren:X}=k.transition||{};J.delay=Yy(te.enteringChildren,e,X)}}return{animation:W,options:J}}))}if(y.size){const L={};if(typeof m.initial!="boolean"){const M=Mr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);M&&M.transition&&(L.transition=M.transition)}y.forEach(M=>{const E=e.getBaseTarget(M),T=e.getValue(M);T&&(T.liveStyle=!0),L[M]=E??null}),v.push({animation:L})}let j=!!v.length;return a&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(v):Promise.resolve()}function d(p,m){var v;if(n[p].isActive===m)return Promise.resolve();(v=e.variantChildren)==null||v.forEach(y=>{var C;return(C=y.animationState)==null?void 0:C.setActive(p,m)}),n[p].isActive=m;const g=u(p);for(const y in n)n[y].protectedKeys={};return g}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>n,reset:()=>{n=s4(),a=!0}}}function eM(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Fy(t,e):!1}function xa(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function s4(){return{animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()}}class Kn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class tM extends Kn{constructor(t){super(t),t.animationState||(t.animationState=JA(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Su(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let iM=0;class nM extends Kn{constructor(){super(...arguments),this.id=iM++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const aM={animation:{Feature:tM},exit:{Feature:nM}};function jo(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}function zo(e){return{point:{x:e.pageX,y:e.pageY}}}const rM=e=>t=>Gh(t)&&e(t,zo(t));function co(e,t,n,a){return jo(e,t,rM(n),a)}const Zy=1e-4,sM=1-Zy,oM=1+Zy,Wy=.01,lM=0-Wy,cM=0+Wy;function Vt(e){return e.max-e.min}function uM(e,t,n){return Math.abs(e-t)<=n}function o4(e,t,n,a=.5){e.origin=a,e.originPoint=Xe(t.min,t.max,e.origin),e.scale=Vt(n)/Vt(t),e.translate=Xe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=sM&&e.scale<=oM||isNaN(e.scale))&&(e.scale=1),(e.translate>=lM&&e.translate<=cM||isNaN(e.translate))&&(e.translate=0)}function uo(e,t,n,a){o4(e.x,t.x,n.x,a?a.originX:void 0),o4(e.y,t.y,n.y,a?a.originY:void 0)}function l4(e,t,n){e.min=n.min+t.min,e.max=e.min+Vt(t)}function dM(e,t,n){l4(e.x,t.x,n.x),l4(e.y,t.y,n.y)}function c4(e,t,n){e.min=t.min-n.min,e.max=e.min+Vt(t)}function fo(e,t,n){c4(e.x,t.x,n.x),c4(e.y,t.y,n.y)}function vi(e){return[e("x"),e("y")]}const Ky=({current:e})=>e?e.ownerDocument.defaultView:null,u4=(e,t)=>Math.abs(e-t);function fM(e,t){const n=u4(e.x,t.x),a=u4(e.y,t.y);return Math.sqrt(n**2+a**2)}class Qy{constructor(t,n,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=gf(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,S=fM(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!S)return;const{point:j}=y,{timestamp:L}=mt;this.history.push({...j,timestamp:L});const{onStart:M,onMove:E}=this.handlers;C||(M&&M(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,y)},this.handlePointerMove=(y,C)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=mf(C,this.transformPagePoint),Ne.update(this.updatePoint,!0)},this.handlePointerUp=(y,C)=>{this.end();const{onEnd:S,onSessionEnd:j,resumeAnimation:L}=this.handlers;if(this.dragSnapToOrigin&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=gf(y.type==="pointercancel"?this.lastMoveEventInfo:mf(C,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,M),j&&j(y,M)},!Gh(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=o||window;const d=zo(t),p=mf(d,this.transformPagePoint),{point:m}=p,{timestamp:g}=mt;this.history=[{...m,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,gf(p,this.history)),this.removeListeners=Vo(co(this.contextWindow,"pointermove",this.handlePointerMove),co(this.contextWindow,"pointerup",this.handlePointerUp),co(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Oi(this.updatePoint)}}function mf(e,t){return t?{point:t(e.point)}:e}function d4(e,t){return{x:e.x-t.x,y:e.y-t.y}}function gf({point:e},t){return{point:e,delta:d4(e,Jy(t)),offset:d4(e,pM(t)),velocity:hM(t,.1)}}function pM(e){return e[0]}function Jy(e){return e[e.length-1]}function hM(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const o=Jy(e);for(;n>=0&&(a=e[n],!(o.timestamp-a.timestamp>Gi(t)));)n--;if(!a)return{x:0,y:0};const l=qi(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function mM(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?Xe(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?Xe(n,e,a.max):Math.min(e,n)),e}function f4(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function gM(e,{top:t,left:n,bottom:a,right:o}){return{x:f4(e.x,n,o),y:f4(e.y,t,a)}}function p4(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function xM(e,t){return{x:p4(e.x,t.x),y:p4(e.y,t.y)}}function vM(e,t){let n=.5;const a=Vt(e),o=Vt(t);return o>a?n=zr(t.min,t.max-a,e.min):a>o&&(n=zr(e.min,e.max-o,t.min)),Xi(0,1,n)}function yM(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const zp=.35;function wM(e=zp){return e===!1?e=0:e===!0&&(e=zp),{x:h4(e,"left","right"),y:h4(e,"top","bottom")}}function h4(e,t,n){return{min:m4(e,t),max:m4(e,n)}}function m4(e,t){return typeof e=="number"?e:e[t]||0}const bM=new WeakMap;class SM{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(zo(v).point)},u=(v,y)=>{const{drag:C,dragPropagation:S,onDragStart:j}=this.getProps();if(C&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wj(C),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),vi(M=>{let E=this.getAxisMotionValue(M).get()||0;if(Yi.test(E)){const{projection:T}=this.visualElement;if(T&&T.layout){const V=T.layout.layoutBox[M];V&&(E=Vt(V)*(parseFloat(E)/100))}}this.originPoint[M]=E}),j&&Ne.postRender(()=>j(v,y)),Hp(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},d=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y;const{dragPropagation:C,dragDirectionLock:S,onDirectionLock:j,onDrag:L}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:M}=y;if(S&&this.currentDirection===null){this.currentDirection=CM(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",y.point,M),this.updateAxis("y",y.point,M),this.visualElement.render(),L&&L(v,y)},p=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y,this.stop(v,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>vi(v=>{var y;return this.getAnimationState(v)==="paused"&&((y=this.getAxisMotionValue(v).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new Qy(t,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:Ky(this.visualElement)})}stop(t,n){const a=t||this.latestPointerEvent,o=n||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!a)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ne.postRender(()=>d(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,a){const{drag:o}=this.getProps();if(!a||!sc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(u=mM(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Cr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=gM(a.layoutBox,t):this.constraints=!1,this.elastic=wM(n),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&vi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=yM(a.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Cr(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=TA(a,o.root,this.visualElement.getTransformPagePoint());let u=xM(o.layout.layoutBox,l);if(n){const d=n(bA(u));this.hasMutatedConstraints=!!d,d&&(u=zy(d))}return u}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},m=vi(g=>{if(!sc(g,n,this.currentDirection))return;let v=p&&p[g]||{};u&&(v={min:0,max:0});const y=o?200:1e6,C=o?40:1e7,S={type:"inertia",velocity:a?t[g]:0,bounceStiffness:y,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(g,S)});return Promise.all(m).then(d)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return Hp(this.visualElement,t),a.start(t1(t,a,0,n,this.visualElement,!1))}stopAnimation(){vi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){vi(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[n];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){vi(n=>{const{drag:a}=this.getProps();if(!sc(n,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[n];l.set(t[n]-Xe(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Cr(n)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};vi(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const p=d.get();o[u]=vM({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),vi(u=>{if(!sc(u,t,null))return;const d=this.getAxisMotionValue(u),{min:p,max:m}=this.constraints[u];d.set(Xe(p,m,o[u]))})}addListeners(){if(!this.visualElement.current)return;bM.set(this.visualElement,this);const t=this.visualElement.current,n=co(t,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Cr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ne.read(a);const u=jo(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(vi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=p[g].translate,v.set(v.get()+p[g].translate))}),this.visualElement.render())});return()=>{u(),n(),l(),d&&d()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=zp,dragMomentum:d=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function sc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function CM(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class TM extends Kn{constructor(t){super(t),this.removeGroupControls=_t,this.removeListeners=_t,this.controls=new SM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_t}unmount(){this.removeGroupControls(),this.removeListeners()}}const g4=e=>(t,n)=>{e&&Ne.postRender(()=>e(t,n))};class EM extends Kn{constructor(){super(...arguments),this.removePointerDownListener=_t}onPointerDown(t){this.session=new Qy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ky(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:g4(t),onStart:g4(n),onMove:a,onEnd:(l,u)=>{delete this.session,o&&Ne.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=co(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Hc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function x4(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Qs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ge.test(e))e=parseFloat(e);else return e;const n=x4(e,t.target.x),a=x4(e,t.target.y);return`${n}% ${a}%`}},jM={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,o=Zn.parse(e);if(o.length>5)return a;const l=Zn.createTransformer(e),u=typeof o[0]!="number"?1:0,d=n.x.scale*t.x,p=n.y.scale*t.y;o[0+u]/=d,o[1+u]/=p;const m=Xe(d,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=m),typeof o[3+u]=="number"&&(o[3+u]/=m),l(o)}};let xf=!1;class AM extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=t;Zj(MM),l&&(n.group&&n.group.add(l),a&&a.register&&o&&a.register(l),xf&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Hc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:o,isPresent:l}=this.props,{projection:u}=a;return u&&(u.isPresent=l,xf=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Ne.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),_h.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:o}=t;xf=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function e8(e){const[t,n]=Sy(),a=R.useContext(yh);return f.jsx(AM,{...e,layoutGroup:a,switchLayoutGroup:R.useContext(Hy),isPresent:t,safeToRemove:n})}const MM={borderRadius:{...Qs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qs,borderTopRightRadius:Qs,borderBottomLeftRadius:Qs,borderBottomRightRadius:Qs,boxShadow:jM};function LM(e,t,n){const a=Lt(e)?e:Ai(e);return a.start(t1("",a,t,n)),a.animation}const OM=(e,t)=>e.depth-t.depth;class RM{constructor(){this.children=[],this.isDirty=!1}add(t){bh(this.children,t),this.isDirty=!0}remove(t){Sh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(OM),this.isDirty=!1,this.children.forEach(t)}}function kM(e,t){const n=Ut.now(),a=({timestamp:o})=>{const l=o-n;l>=t&&(Oi(a),e(l-t))};return Ne.setup(a,!0),()=>Oi(a)}const t8=["TopLeft","TopRight","BottomLeft","BottomRight"],VM=t8.length,v4=e=>typeof e=="string"?parseFloat(e):e,y4=e=>typeof e=="number"||ge.test(e);function HM(e,t,n,a,o,l){o?(e.opacity=Xe(0,n.opacity??1,DM(a)),e.opacityExit=Xe(t.opacity??1,0,zM(a))):l&&(e.opacity=Xe(t.opacity??1,n.opacity??1,a));for(let u=0;u<VM;u++){const d=`border${t8[u]}Radius`;let p=w4(t,d),m=w4(n,d);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||y4(p)===y4(m)?(e[d]=Math.max(Xe(v4(p),v4(m),a),0),(Yi.test(m)||Yi.test(p))&&(e[d]+="%")):e[d]=m}(t.rotate||n.rotate)&&(e.rotate=Xe(t.rotate||0,n.rotate||0,a))}function w4(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const DM=i8(0,.5,Ic),zM=i8(.5,.95,_t);function i8(e,t,n){return a=>a<e?0:a>t?1:n(zr(e,t,a))}function b4(e,t){e.min=t.min,e.max=t.max}function xi(e,t){b4(e.x,t.x),b4(e.y,t.y)}function S4(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function C4(e,t,n,a,o){return e-=t,e=Yc(e,1/n,a),o!==void 0&&(e=Yc(e,1/o,a)),e}function PM(e,t=0,n=1,a=.5,o,l=e,u=e){if(Yi.test(t)&&(t=parseFloat(t),t=Xe(u.min,u.max,t/100)-u.min),typeof t!="number")return;let d=Xe(l.min,l.max,a);e===l&&(d-=t),e.min=C4(e.min,t,n,d,o),e.max=C4(e.max,t,n,d,o)}function T4(e,t,[n,a,o],l,u){PM(e,t[n],t[a],t[o],t.scale,l,u)}const NM=["x","scaleX","originX"],$M=["y","scaleY","originY"];function E4(e,t,n,a){T4(e.x,t,NM,n?n.x:void 0,a?a.x:void 0),T4(e.y,t,$M,n?n.y:void 0,a?a.y:void 0)}function j4(e){return e.translate===0&&e.scale===1}function n8(e){return j4(e.x)&&j4(e.y)}function A4(e,t){return e.min===t.min&&e.max===t.max}function BM(e,t){return A4(e.x,t.x)&&A4(e.y,t.y)}function M4(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function a8(e,t){return M4(e.x,t.x)&&M4(e.y,t.y)}function L4(e){return Vt(e.x)/Vt(e.y)}function O4(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class IM{constructor(){this.members=[]}add(t){bh(this.members,t),t.scheduleRender()}remove(t){if(Sh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let a;for(let o=n;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function UM(e,t,n){let a="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||l||u)&&(a=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:m,rotate:g,rotateX:v,rotateY:y,skewX:C,skewY:S}=n;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),v&&(a+=`rotateX(${v}deg) `),y&&(a+=`rotateY(${y}deg) `),C&&(a+=`skewX(${C}deg) `),S&&(a+=`skewY(${S}deg) `)}const d=e.x.scale*t.x,p=e.y.scale*t.y;return(d!==1||p!==1)&&(a+=`scale(${d}, ${p})`),a||"none"}const vf=["","X","Y","Z"],_M=1e3;let GM=0;function yf(e,t,n,a){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function r8(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Gy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ne,!(o||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&r8(a)}function s8({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(u={},d=t==null?void 0:t()){this.id=GM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FM),this.nodes.forEach(KM),this.nodes.forEach(QM),this.nodes.forEach(XM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new RM)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Th),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const p=this.eventHandlers.get(u);p&&p.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=qh(u)&&!Dj(u),this.instance=u;const{layoutId:d,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||d)&&(this.isLayoutDirty=!0),e){let g,v=0;const y=()=>this.root.updateBlockedByResize=!1;Ne.read(()=>{v=window.innerWidth}),e(u,()=>{const C=window.innerWidth;C!==v&&(v=C,this.root.updateBlockedByResize=!0,g&&g(),g=kM(y,250),Hc.hasAnimatedSinceResize&&(Hc.hasAnimatedSinceResize=!1,this.nodes.forEach(V4)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:y,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||m.getDefaultTransition()||nL,{onLayoutAnimationStart:j,onLayoutAnimationComplete:L}=m.getProps(),M=!this.targetLayout||!a8(this.targetLayout,C),E=!v&&y;if(this.options.layoutRoot||this.resumeFrom||E||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...Bh(S,"layout"),onPlay:j,onComplete:L};(m.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(g,E)}else v||V4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Oi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JM),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&r8(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(R4);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(k4);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(WM),this.nodes.forEach(qM),this.nodes.forEach(YM)):this.nodes.forEach(k4),this.clearAllSnapshots();const d=Ut.now();mt.delta=Xi(0,1e3/60,d-mt.timestamp),mt.timestamp=d,mt.isProcessing=!0,of.update.process(mt),of.preRender.process(mt),of.render.process(mt),mt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_h.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ZM),this.sharedNodes.forEach(eL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vt(this.snapshot.measuredBox.x)&&!Vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=tt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!n8(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;u&&this.instance&&(d||va(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return u&&(p=this.removeTransform(p)),aL(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:u}=this.options;if(!u)return tt();const d=u.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(rL))){const{scroll:g}=this.root;g&&(Tr(d.x,g.offset.x),Tr(d.y,g.offset.y))}return d}removeElementScroll(u){var p;const d=tt();if(xi(d,u),(p=this.scroll)!=null&&p.wasRoot)return d;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:v,options:y}=g;g!==this.root&&v&&y.layoutScroll&&(v.wasRoot&&xi(d,u),Tr(d.x,v.offset.x),Tr(d.y,v.offset.y))}return d}applyTransform(u,d=!1){const p=tt();xi(p,u);for(let m=0;m<this.path.length;m++){const g=this.path[m];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Er(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),va(g.latestValues)&&Er(p,g.latestValues)}return va(this.latestValues)&&Er(p,this.latestValues),p}removeTransform(u){const d=tt();xi(d,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!va(m.latestValues))continue;Op(m.latestValues)&&m.updateSnapshot();const g=tt(),v=m.measurePageBox();xi(g,v),E4(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return va(this.latestValues)&&E4(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==mt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==d;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=mt.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),fo(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),xi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=tt(),this.targetWithTransforms=tt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xi(this.target,this.layout.layoutBox),Ny(this.target,this.targetDelta)):xi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),fo(this.relativeTargetOrigin,this.target,C.target),xi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Op(this.parent.latestValues)||Py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===mt.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;xi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;CA(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=tt());const{target:C}=u;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(S4(this.prevProjectionDelta.x,this.projectionDelta.x),S4(this.prevProjectionDelta.y,this.projectionDelta.y)),uo(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!O4(this.projectionDelta.x,this.prevProjectionDelta.x)||!O4(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=jr(),this.projectionDelta=jr(),this.projectionDeltaWithTransform=jr()}setAnimationOrigin(u,d=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},v=jr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const y=tt(),C=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=C!==S,L=this.getStack(),M=!L||L.members.length<=1,E=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(iL));this.animationProgress=0;let T;this.mixTargetDelta=V=>{const O=V/1e3;H4(v.x,u.x,O),H4(v.y,u.y,O),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tL(this.relativeTarget,this.relativeTargetOrigin,y,O),T&&BM(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=tt()),xi(T,this.relativeTarget)),j&&(this.animationValues=g,HM(g,m,this.latestValues,O,E,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,p,m;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(m=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Oi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ne.update(()=>{Hc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ai(0)),this.currentAnimation=LM(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_M),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:p,layout:m,latestValues:g}=u;if(!(!d||!p||!m)){if(this!==u&&this.layout&&m&&o8(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||tt();const v=Vt(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+v;const y=Vt(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+y}xi(d,p),Er(d,g),uo(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new IM),this.sharedNodes.get(u).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const m={};p.z&&yf("z",u,m,this.animationValues);for(let g=0;g<vf.length;g++)yf(`rotate${vf[g]}`,u,m,this.animationValues),yf(`skew${vf[g]}`,u,m,this.animationValues);u.render();for(const g in m)u.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Vc(d==null?void 0:d.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Vc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let v=UM(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),u.transform=v;const{x:y,y:C}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${C.origin*100}% 0`,m.animationValues?u.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in Eo){if(g[S]===void 0)continue;const{correct:j,applyTo:L,isCSSVariable:M}=Eo[S],E=v==="none"?g[S]:j(g[S],m);if(L){const T=L.length;for(let V=0;V<T;V++)u[L[V]]=E}else M?this.options.visualElement.renderState.vars[S]=E:u[S]=E}this.options.layoutId&&(u.pointerEvents=m===this?Vc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(R4),this.root.sharedNodes.clear()}}}function qM(e){e.updateLayout()}function YM(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?vi(v=>{const y=u?t.measuredBox[v]:t.layoutBox[v],C=Vt(y);y.min=a[v].min,y.max=y.min+C}):o8(l,t.layoutBox,a)&&vi(v=>{const y=u?t.measuredBox[v]:t.layoutBox[v],C=Vt(a[v]);y.max=y.min+C,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+C)});const d=jr();uo(d,a,t.layoutBox);const p=jr();u?uo(p,e.applyTransform(o,!0),t.measuredBox):uo(p,a,t.layoutBox);const m=!n8(d);let g=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:C}=v;if(y&&C){const S=tt();fo(S,t.layoutBox,y.layoutBox);const j=tt();fo(j,a,C.layoutBox),a8(S,j)||(g=!0),v.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=S,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function FM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function XM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ZM(e){e.clearSnapshot()}function R4(e){e.clearMeasurements()}function k4(e){e.isLayoutDirty=!1}function WM(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function V4(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function KM(e){e.resolveTargetDelta()}function QM(e){e.calcProjection()}function JM(e){e.resetSkewAndRotation()}function eL(e){e.removeLeadSnapshot()}function H4(e,t,n){e.translate=Xe(t.translate,0,n),e.scale=Xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function D4(e,t,n,a){e.min=Xe(t.min,n.min,a),e.max=Xe(t.max,n.max,a)}function tL(e,t,n,a){D4(e.x,t.x,n.x,a),D4(e.y,t.y,n.y,a)}function iL(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const nL={duration:.45,ease:[.4,0,.1,1]},z4=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),P4=z4("applewebkit/")&&!z4("chrome/")?Math.round:_t;function N4(e){e.min=P4(e.min),e.max=P4(e.max)}function aL(e){N4(e.x),N4(e.y)}function o8(e,t,n){return e==="position"||e==="preserve-aspect"&&!uM(L4(t),L4(n),.2)}function rL(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const sL=s8({attachResizeListener:(e,t)=>jo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wf={current:void 0},l8=s8({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wf.current){const e=new sL({});e.mount(window),e.setOptions({layoutScroll:!0}),wf.current=e}return wf.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oL={pan:{Feature:EM},drag:{Feature:TM,ProjectionNode:l8,MeasureLayout:e8}};function $4(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,l=a[o];l&&Ne.postRender(()=>l(t,zo(t)))}class lL extends Kn{mount(){const{current:t}=this.node;t&&(this.unmount=bj(t,(n,a)=>($4(this.node,a,"Start"),o=>$4(this.node,o,"End"))))}unmount(){}}class cL extends Kn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(jo(this.node.current,"focus",()=>this.onFocus()),jo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function B4(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),l=a[o];l&&Ne.postRender(()=>l(t,zo(t)))}class uL extends Kn{mount(){const{current:t}=this.node;t&&(this.unmount=Ej(t,(n,a)=>(B4(this.node,a,"Start"),(o,{success:l})=>B4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Pp=new WeakMap,bf=new WeakMap,dL=e=>{const t=Pp.get(e.target);t&&t(e)},fL=e=>{e.forEach(dL)};function pL({root:e,...t}){const n=e||document;bf.has(n)||bf.set(n,{});const a=bf.get(n),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(fL,{root:e,...t})),a[o]}function hL(e,t,n){const a=pL(t);return Pp.set(e,n),a.observe(e),()=>{Pp.delete(e),a.unobserve(e)}}const mL={some:0,all:1};class gL extends Kn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:o="some",once:l}=t,u={root:n?n.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:mL[o]},d=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),y=m?g:v;y&&y(p)};return hL(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(xL(t,n))&&this.startObserver()}unmount(){}}function xL({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const vL={inView:{Feature:gL},tap:{Feature:uL},focus:{Feature:cL},hover:{Feature:lL}},yL={layout:{ProjectionNode:l8,MeasureLayout:e8}},wL={...aM,...vL,...oL,...yL},B=wA(wL,VA),bL=50,I4=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),SL=()=>({time:0,x:I4(),y:I4()}),CL={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function U4(e,t,n,a){const o=n[t],{length:l,position:u}=CL[t],d=o.current,p=n.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=zr(0,o.scrollLength,o.current);const m=a-p;o.velocity=m>bL?0:Eh(o.current-d,m)}function TL(e,t,n){U4(e,"x",t,n),U4(e,"y",t,n),t.time=n}function EL(e,t){const n={x:0,y:0};let a=e;for(;a&&a!==t;)if(Uh(a))n.x+=a.offsetLeft,n.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();n.x+=o.left-l.left,n.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();n.x+=o,n.y+=l;let u=null,d=a.parentNode;for(;!u;)d.tagName==="svg"&&(u=d),d=a.parentNode;a=u}else break;return n}const Np={start:0,center:.5,end:1};function _4(e,t,n=0){let a=0;if(e in Np&&(e=Np[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),n+a}const jL=[0,0];function AL(e,t,n,a){let o=Array.isArray(e)?e:jL,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Np[e]?e:"0"]),l=_4(o[0],n,a),u=_4(o[1],t),l-u}const ML={All:[[0,0],[1,1]]},LL={x:0,y:0};function OL(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function RL(e,t,n){const{offset:a=ML.All}=n,{target:o=e,axis:l="y"}=n,u=l==="y"?"height":"width",d=o!==e?EL(o,e):LL,p=o===e?{width:e.scrollWidth,height:e.scrollHeight}:OL(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const v=a.length;for(let y=0;y<v;y++){const C=AL(a[y],m[u],p[u],d[l]);!g&&C!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=C}g&&(t[l].interpolate=Dh(t[l].offset,ey(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=Xi(0,1,t[l].interpolate(t[l].current))}function kL(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)n.x.targetOffset+=a.offsetLeft,n.y.targetOffset+=a.offsetTop,a=a.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function VL(e,t,n,a={}){return{measure:o=>{kL(e,a.target,n),TL(e,n,o),(a.offset||a.target)&&RL(e,n,a)},notify:()=>t(n)}}const Js=new WeakMap,G4=new WeakMap,Sf=new WeakMap,q4=e=>e===document.scrollingElement?window:e;function c8(e,{container:t=document.scrollingElement,...n}={}){if(!t)return _t;let a=Sf.get(t);a||(a=new Set,Sf.set(t,a));const o=SL(),l=VL(t,e,o,n);if(a.add(l),!Js.has(t)){const d=()=>{for(const v of a)v.measure(mt.timestamp);Ne.preUpdate(p)},p=()=>{for(const v of a)v.notify()},m=()=>Ne.read(d);Js.set(t,m);const g=q4(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&G4.set(t,Hj(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const u=Js.get(t);return Ne.read(u,!1,!0),()=>{var m;Oi(u);const d=Sf.get(t);if(!d||(d.delete(l),d.size))return;const p=Js.get(t);Js.delete(t),p&&(q4(t).removeEventListener("scroll",p),(m=G4.get(t))==null||m(),window.removeEventListener("resize",p))}}const Y4=new Map;function HL(e){const t={value:0},n=c8(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:n}}function u8({source:e,container:t,...n}){const{axis:a}=n;e&&(t=e);const o=Y4.get(t)??new Map;Y4.set(t,o);const l=n.target??"self",u=o.get(l)??{},d=a+(n.offset??[]).join(",");return u[d]||(u[d]=!n.target&&ay()?new ScrollTimeline({source:t,axis:a}):HL({container:t,...n})),u[d]}function DL(e,t){const n=u8(t);return e.attachTimeline({timeline:t.target?void 0:n,observe:a=>(a.pause(),by(o=>{a.time=a.duration*o},n))})}function zL(e){return e.length===2}function PL(e,t){return zL(e)?c8(n=>{e(n[t.axis].progress,n)},t):by(e,u8(t))}function NL(e,{axis:t="y",container:n=document.scrollingElement,...a}={}){if(!n)return _t;const o={axis:t,container:n,...a};return typeof e=="function"?PL(e,o):DL(e,o)}const $L=()=>({scrollX:Ai(0),scrollY:Ai(0),scrollXProgress:Ai(0),scrollYProgress:Ai(0)}),oc=e=>e?!e.current:!1;function Xr({container:e,target:t,...n}={}){const a=Gr($L),o=R.useRef(null),l=R.useRef(!1),u=R.useCallback(()=>(o.current=NL((d,{x:p,y:m})=>{a.scrollX.set(p.current),a.scrollXProgress.set(p.progress),a.scrollY.set(m.current),a.scrollYProgress.set(m.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var d;(d=o.current)==null||d.call(o)}),[e,t,JSON.stringify(n.offset)]);return vu(()=>{if(l.current=!1,oc(e)||oc(t)){l.current=!0;return}else return u()},[u]),R.useEffect(()=>{if(l.current)return bo(!oc(e)),bo(!oc(t)),u()},[u]),a}function BL(e){const t=Gr(()=>Ai(e)),{isStatic:n}=R.useContext(wu);if(n){const[,a]=R.useState(e);R.useEffect(()=>t.on("change",a),[])}return t}function d8(e,t){const n=BL(t()),a=()=>n.set(t());return a(),vu(()=>{const o=()=>Ne.preRender(a,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Oi(a)}}),n}function IL(e){lo.current=[],e();const t=d8(lo.current,e);return lo.current=void 0,t}function vt(e,t,n,a){if(typeof e=="function")return IL(e);const o=typeof t=="function"?t:zj(t,n,a);return Array.isArray(e)?F4(e,o):F4([e],([l])=>o(l))}function F4(e,t){const n=Gr(()=>[]);return d8(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return t(n)})}const UL=w.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,_L=w.button`
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
`,Cf=w(B.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,GL=w(B.div)`
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
`,qL=w(Ct)`
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
`,YL=w.p`
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
`;w(B.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;w.div`
  padding: 10px 0;
`;const FL=w.img`
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

  ${FL} {
    padding: 8px;
    margin-right: -8px;
  }
`;const XL=w.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,ZL=(e,t,n,a)=>{var l,u,d,p;const o=[n,{code:t,...a||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);ja(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(d=e==null?void 0:e.services)==null?void 0:d.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},X4={},$p=(e,t,n,a)=>{ja(n)&&X4[n]||(ja(n)&&(X4[n]=new Date),ZL(e,t,n,a))},f8=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Bp=(e,t,n)=>{e.loadNamespaces(t,f8(e,n))},Z4=(e,t,n,a)=>{if(ja(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Bp(e,n,a);n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,f8(e,a))},WL=(e,t,n={})=>!t.languages||!t.languages.length?($p(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),ja=e=>typeof e=="string",KL=e=>typeof e=="object"&&e!==null,QL=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,JL={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},eO=e=>JL[e],tO=e=>e.replace(QL,eO);let Ip={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:tO};const iO=(e={})=>{Ip={...Ip,...e}},nO=()=>Ip;let p8;const aO=e=>{p8=e},rO=()=>p8,sO={type:"3rdParty",init(e){iO(e.options.react),aO(e)}},oO=R.createContext();class lO{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const cO=(e,t)=>{const n=R.useRef();return R.useEffect(()=>{n.current=e},[e,t]),n.current},h8=(e,t,n,a)=>e.getFixedT(t,n,a),uO=(e,t,n,a)=>R.useCallback(h8(e,t,n,a),[e,t,n,a]),i1=(e,t={})=>{var V,O,P,z;const{i18n:n}=t,{i18n:a,defaultNS:o}=R.useContext(oO)||{},l=n||a||rO();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new lO),!l){$p(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const _=(F,K)=>ja(K)?K:KL(K)&&ja(K.defaultValue)?K.defaultValue:Array.isArray(F)?F[F.length-1]:F,Y=[_,{},!1];return Y.t=_,Y.i18n={},Y.ready=!1,Y}(V=l.options.react)!=null&&V.wait&&$p(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...nO(),...l.options.react,...t},{useSuspense:d,keyPrefix:p}=u;let m=o||((O=l.options)==null?void 0:O.defaultNS);m=ja(m)?[m]:m||["translation"],(z=(P=l.reportNamespaces).addUsedNamespaces)==null||z.call(P,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(_=>WL(_,l,u)),v=uO(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),y=()=>v,C=()=>h8(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),[S,j]=R.useState(y);let L=m.join();t.lng&&(L=`${t.lng}${L}`);const M=cO(L),E=R.useRef(!0);R.useEffect(()=>{const{bindI18n:_,bindI18nStore:Y}=u;E.current=!0,!g&&!d&&(t.lng?Z4(l,t.lng,m,()=>{E.current&&j(C)}):Bp(l,m,()=>{E.current&&j(C)})),g&&M&&M!==L&&E.current&&j(C);const F=()=>{E.current&&j(C)};return _&&(l==null||l.on(_,F)),Y&&(l==null||l.store.on(Y,F)),()=>{E.current=!1,l&&_&&(_==null||_.split(" ").forEach(K=>l.off(K,F))),Y&&l&&Y.split(" ").forEach(K=>l.store.off(K,F))}},[l,L]),R.useEffect(()=>{E.current&&g&&j(y)},[l,p,g]);const T=[S,l,g];if(T.t=S,T.i18n=l,T.ready=g,g||!g&&!d)return T;throw new Promise(_=>{t.lng?Z4(l,t.lng,m,()=>_()):Bp(l,m,()=>_())})},dO=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,W4=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,Gn=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,fO=w.div`
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
`,pO=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,hO=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,mO=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,gO=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,xO={open:{rotate:45,y:8},closed:{rotate:0,y:0}},vO={open:{opacity:0},closed:{opacity:1}},yO={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},wO={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},bO=({isOpen:e,setIsOpen:t})=>{const[,n]=R.useState(!1),{t:a}=i1(),o=Si(),l=["/contact","/service","/tips","/pricing","/fridge"].some(m=>o.pathname.startsWith(m));R.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const u=()=>{t(!1),n(!1)},d=m=>{const g=o.pathname;return m==="/home#hero"?g==="/"||g==="/home":g.startsWith(m.split("#")[0])},p=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return f.jsxs(UL,{children:[f.jsxs(_L,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[f.jsx(Cf,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:xO}),f.jsx(Cf,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:vO}),f.jsx(Cf,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:yO})]}),f.jsx(Yh,{children:e&&f.jsxs(GL,{initial:"closed",animate:"open",exit:"closed",variants:wO,transition:{duration:.3},children:[p.map((m,g)=>{const v=d(m.to);return f.jsxs("div",{children:[f.jsx(qL,{to:m.to,onClick:u,children:f.jsx(YL,{$active:v,children:a(m.label)})}),f.jsx(XL,{})]},g)}),f.jsxs(dO,{children:[f.jsxs(W4,{children:[f.jsx(Gn,{children:"Washing Machine Fix"}),f.jsx(Gn,{children:"Dishwasher Repair"}),f.jsx(Gn,{children:"Oven Maintenance"}),f.jsx(Gn,{children:"Dryer Troubleshooting"})]}),f.jsxs(W4,{children:[f.jsx(Gn,{children:"Microwave Service"}),f.jsx(Gn,{children:"Air Conditioner Repair"}),f.jsx(Gn,{children:"Coffee Maker Repair"}),f.jsx(Gn,{children:"Blender Maintenance"})]})]}),f.jsxs(fO,{children:[f.jsx(pO,{}),f.jsxs(hO,{children:[f.jsx(mO,{children:"Designed by TRBN"}),f.jsx(gO,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},SO="/assets/LogoandTextContainer-CnBPFIWK.svg",CO=w.div`
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
`,TO=w.img`
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
`,EO=w.div`
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
`,jO=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AO=w.p`
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
`,MO=w.p`
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
`,LO=w.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,m8=w(Ct)`
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
`;Qe`
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
`;const K4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",OO=()=>{const[e,t]=R.useState(!1),[n]=R.useState(!1),[a,o]=R.useState(!1),l=Si(),u=["/contact","/service","/tips","/pricing","/fridge"].some(C=>l.pathname.startsWith(C)),d=n||a,p=ah(),m=C=>{C.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&p("/home")};R.useEffect(()=>{const C=new IntersectionObserver(([j])=>{t(!j.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),S=document.createElement("div");return S.style.position="absolute",S.style.top="50px",S.style.height="1px",S.style.pointerEvents="none",document.body.appendChild(S),C.observe(S),()=>{C.disconnect(),document.body.contains(S)&&document.body.removeChild(S)}},[]);const g=De({query:"(max-width: 1439px)"}),v=De({query:"(min-width: 768px) and (max-width: 1439px)"}),y=De({query:"(min-width: 1440px)"});return f.jsxs(sT,{$isScrolled:e,$darkMode:u,children:[f.jsxs(oT,{id:"header",children:[f.jsx(lT,{to:"/home#hero",onClick:m,$overlayOpen:d,$darkMode:u,children:f.jsx("img",{src:SO,alt:"Logo"})}),!g&&f.jsxs(cT,{children:[f.jsx(Ws,{children:f.jsx(Ks,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),f.jsx(Ws,{children:f.jsx(Ks,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),f.jsx(Ws,{children:f.jsx(Ks,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),f.jsx(Ws,{children:f.jsx(Ks,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),f.jsx(Ws,{children:f.jsx(Ks,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),y&&f.jsxs(Sx,{children:[f.jsxs(tc,{children:[f.jsx(_n,{$overlayOpen:d,$darkMode:u,children:f.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),f.jsx(_n,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),f.jsxs(tc,{children:[f.jsxs(_n,{$overlayOpen:d,$darkMode:u,children:[f.jsx("img",{src:K4,alt:"🗺️"}),f.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),f.jsx(_n,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),f.jsx(uT,{children:f.jsxs("div",{style:{display:"flex"},children:[f.jsx(m8,{to:"/contact#ap",children:"Contact Us"}),f.jsx(Lv,{$overlayOpen:d,$darkMode:u,children:f.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),g&&f.jsx(bO,{isOpen:a,setIsOpen:o})]})})]}),v&&f.jsxs(Sx,{children:[f.jsxs(tc,{children:[f.jsx(_n,{$overlayOpen:d,$darkMode:u,children:f.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),f.jsx(_n,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),f.jsxs(tc,{children:[f.jsxs(_n,{$overlayOpen:d,$darkMode:u,children:[f.jsx("img",{src:K4,alt:"🗺️"}),f.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),f.jsx(_n,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},RO=w.footer`
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
`,kO=w.div`
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
`,VO=w.div`
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
`,eo=w(Ct)`
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
`,Tf=w.p`
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
`,HO=w.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,DO=w.p`
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
`,zO=w.div`
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
`,PO=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,NO=w.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$O=w.svg`
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
`;w(Ct)`
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
`;w(Ct)`
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
`;const BO=w.div`
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
`,IO=w.div`
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
`,UO=w.p`
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
`,_O=w.p`
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
`,g8=w.div`
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
`,x8=w.div`
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
`,v8=w.button`
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
`,GO=w.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,qO=w.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,y8=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return f.jsxs("div",{children:[f.jsx(qO,{children:f.jsx(GO,{children:"Privacy and terms"})}),f.jsx(BO,{children:e.map((t,n)=>f.jsxs(IO,{children:[f.jsx(UO,{children:t.title}),f.jsx(_O,{children:t.content})]},n))})]})},YO=()=>{const[e,t]=R.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return f.jsxs(f.Fragment,{children:[f.jsx(RO,{children:f.jsxs(kO,{children:[f.jsxs(VO,{children:[f.jsxs(DO,{children:[f.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",f.jsx("br",{}),f.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),f.jsx("br",{})," ",f.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),f.jsxs(zO,{children:[f.jsx(eo,{to:"/home#hero",children:"Home"}),f.jsx(eo,{to:"/service#all",children:"Services"}),f.jsx(eo,{to:"/about#ap",children:"About Us"}),f.jsx(eo,{to:"/tips#app",children:"Tips"}),f.jsx(eo,{to:"/contact#ap",children:"Contacts"}),f.jsx(Tf,{onClick:n,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),f.jsxs(PO,{children:[f.jsxs($O,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),f.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),f.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),f.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),f.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),f.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),f.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),f.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),f.jsx(NO,{opacity:.5}),f.jsxs(HO,{children:[f.jsx(Tf,{size:"14px",weight:"500",children:"Designed by TRBN"}),f.jsx(Tf,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&f.jsx(g8,{onClick:a,children:f.jsxs(x8,{onClick:o=>o.stopPropagation(),children:[f.jsx(v8,{onClick:a,children:"×"}),f.jsx(y8,{})]})})]})},FO="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",XO="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",ZO=Qe`
  from { opacity: 0; }
  to { opacity: 1; }
`,WO=Qe`
  from { opacity: 1; }
  to { opacity: 0; }
`,KO=Qe`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,QO=w.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:e})=>e&&Ft`
      animation: ${WO} 1s forwards;
    `}
`,JO=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:e})=>e&&Ft`
      animation: ${ZO} 1.5s forwards;
    `}
`,eR=w.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:e})=>e&&Ft`
      animation: ${KO} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,tR=({onComplete:e})=>{const[t,n]=R.useState(!0),[a,o]=R.useState(!1),[l,u]=R.useState(!1),d=R.useRef(null);return R.useEffect(()=>{d.current&&(d.current.onended=()=>{n(!1),o(!0),setTimeout(()=>{u(!0),setTimeout(e,1e3)},3e3)})},[e]),f.jsxs(QO,{$hide:l,children:[t&&f.jsx(JO,{ref:d,$visible:t,autoPlay:!0,muted:!0,playsInline:!0,children:f.jsx("source",{src:XO,type:"video/mp4"})}),a&&f.jsx(eR,{src:FO,alt:"Logo",$show:a})]})},iR=()=>{const e=Si(),[t,n]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||n(!0)},[]);const a=()=>{sessionStorage.setItem("hasSeenPreloader","true"),n(!1)};return R.useEffect(()=>{if(e.hash){const o=e.hash.replace("#",""),l=document.getElementById(o);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),t?f.jsx(tR,{onComplete:a}):f.jsxs(f.Fragment,{children:[f.jsx(OO,{}),f.jsx(R.Suspense,{children:f.jsx(Mb,{})}),f.jsx(YO,{})]})};function Q4(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function n1(e,t){e===void 0&&(e={}),t===void 0&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Q4(t[a])&&Q4(e[a])&&Object.keys(t[a]).length>0&&n1(e[a],t[a])})}const w8={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Fi(){const e=typeof document<"u"?document:{};return n1(e,w8),e}const nR={document:w8,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ht(){const e=typeof window<"u"?window:{};return n1(e,nR),e}function aR(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function rR(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function b8(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Fc(){return Date.now()}function sR(e){const t=Ht();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function oR(e,t){t===void 0&&(t="x");const n=Ht();let a,o,l;const u=sR(e);return n.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new n.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=l.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=l.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(n.WebKitCSSMatrix?o=l.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function lc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function lR(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ai(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const a=n<0||arguments.length<=n?void 0:arguments[n];if(a!=null&&!lR(a)){const o=Object.keys(Object(a)).filter(l=>t.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],p=Object.getOwnPropertyDescriptor(a,d);p!==void 0&&p.enumerable&&(lc(e[d])&&lc(a[d])?a[d].__swiper__?e[d]=a[d]:ai(e[d],a[d]):!lc(e[d])&&lc(a[d])?(e[d]={},a[d].__swiper__?e[d]=a[d]:ai(e[d],a[d])):e[d]=a[d])}}}return e}function cc(e,t,n){e.style.setProperty(t,n)}function S8(e){let{swiper:t,targetPosition:n,side:a}=e;const o=Ht(),l=-t.translate;let u=null,d;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const m=n>l?"next":"prev",g=(y,C)=>m==="next"&&y>=C||m==="prev"&&y<=C,v=()=>{d=new Date().getTime(),u===null&&(u=d);const y=Math.max(Math.min((d-u)/p,1),0),C=.5-Math.cos(y*Math.PI)/2;let S=l+C*(n-l);if(g(S,n)&&(S=n),t.wrapperEl.scrollTo({[a]:S}),g(S,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:S})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(v)};v()}function Ii(e,t){t===void 0&&(t="");const n=Ht(),a=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function cR(e,t){const n=[t];for(;n.length>0;){const a=n.shift();if(e===a)return!0;n.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function uR(e,t){const n=Ht();let a=t.contains(e);return!a&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=cR(e,t))),a}function Xc(e){try{console.warn(e);return}catch{}}function Zc(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:aR(t)),n}function dR(e,t){const n=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function fR(e,t){const n=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function Xn(e,t){return Ht().getComputedStyle(e,null).getPropertyValue(t)}function Wc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function C8(e,t){const n=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&n.push(a):n.push(a),a=a.parentElement;return n}function Up(e,t,n){const a=Ht();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function gt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Kc(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function T8(e,t,n,a){return e.params.createElements&&Object.keys(a).forEach(o=>{if(!n[o]&&n.auto===!0){let l=Ii(e.el,`.${a[o]}`)[0];l||(l=Zc("div",a[o]),l.className=a[o],e.el.append(l)),n[o]=l,t[o]=l}}),n}function a1(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function l(S){let j;return S&&typeof S=="string"&&t.isElement&&(j=t.el.querySelector(S)||t.hostEl.querySelector(S),j)?j:(S&&(typeof S=="string"&&(j=[...document.querySelectorAll(S)]),t.params.uniqueNavElements&&typeof S=="string"&&j&&j.length>1&&t.el.querySelectorAll(S).length===1?j=t.el.querySelector(S):j&&j.length===1&&(j=j[0])),S&&!j?S:j)}function u(S,j){const L=t.params.navigation;S=gt(S),S.forEach(M=>{M&&(M.classList[j?"add":"remove"](...L.disabledClass.split(" ")),M.tagName==="BUTTON"&&(M.disabled=j),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](L.lockClass))})}function d(){const{nextEl:S,prevEl:j}=t.navigation;if(t.params.loop){u(j,!1),u(S,!1);return}u(j,t.isBeginning&&!t.params.rewind),u(S,t.isEnd&&!t.params.rewind)}function p(S){S.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function m(S){S.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function g(){const S=t.params.navigation;if(t.params.navigation=T8(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(S.nextEl||S.prevEl))return;let j=l(S.nextEl),L=l(S.prevEl);Object.assign(t.navigation,{nextEl:j,prevEl:L}),j=gt(j),L=gt(L);const M=(E,T)=>{E&&E.addEventListener("click",T==="next"?m:p),!t.enabled&&E&&E.classList.add(...S.lockClass.split(" "))};j.forEach(E=>M(E,"next")),L.forEach(E=>M(E,"prev"))}function v(){let{nextEl:S,prevEl:j}=t.navigation;S=gt(S),j=gt(j);const L=(M,E)=>{M.removeEventListener("click",E==="next"?m:p),M.classList.remove(...t.params.navigation.disabledClass.split(" "))};S.forEach(M=>L(M,"next")),j.forEach(M=>L(M,"prev"))}a("init",()=>{t.params.navigation.enabled===!1?C():(g(),d())}),a("toEdge fromEdge lock unlock",()=>{d()}),a("destroy",()=>{v()}),a("enable disable",()=>{let{nextEl:S,prevEl:j}=t.navigation;if(S=gt(S),j=gt(j),t.enabled){d();return}[...S,...j].filter(L=>!!L).forEach(L=>L.classList.add(t.params.navigation.lockClass))}),a("click",(S,j)=>{let{nextEl:L,prevEl:M}=t.navigation;L=gt(L),M=gt(M);const E=j.target;let T=M.includes(E)||L.includes(E);if(t.isElement&&!T){const V=j.path||j.composedPath&&j.composedPath();V&&(T=V.find(O=>L.includes(O)||M.includes(O)))}if(t.params.navigation.hideOnClick&&!T){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===E||t.pagination.el.contains(E)))return;let V;L.length?V=L[0].classList.contains(t.params.navigation.hiddenClass):M.length&&(V=M[0].classList.contains(t.params.navigation.hiddenClass)),o(V===!0?"navigationShow":"navigationHide"),[...L,...M].filter(O=>!!O).forEach(O=>O.classList.toggle(t.params.navigation.hiddenClass))}});const y=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),d()},C=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(t.navigation,{enable:y,disable:C,update:d,init:g,destroy:v})}function to(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function pR(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),t.pagination={el:null,bullets:[]};let u,d=0;function p(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function m(E,T){const{bulletActiveClass:V}=t.params.pagination;E&&(E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${V}-${T}`),E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${V}-${T}-${T}`)))}function g(E,T,V){if(E=E%V,T=T%V,T===E+1)return"next";if(T===E-1)return"previous"}function v(E){const T=E.target.closest(to(t.params.pagination.bulletClass));if(!T)return;E.preventDefault();const V=Wc(T)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===V)return;const O=g(t.realIndex,V,t.slides.length);O==="next"?t.slideNext():O==="previous"?t.slidePrev():t.slideToLoop(V)}else t.slideTo(V)}function y(){const E=t.rtl,T=t.params.pagination;if(p())return;let V=t.pagination.el;V=gt(V);let O,P;const z=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,_=t.params.loop?Math.ceil(z/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(P=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,P=t.previousSnapIndex):(P=t.previousIndex||0,O=t.activeIndex||0),T.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const Y=t.pagination.bullets;let F,K,ie;if(T.dynamicBullets&&(u=Up(Y[0],t.isHorizontal()?"width":"height"),V.forEach(le=>{le.style[t.isHorizontal()?"width":"height"]=`${u*(T.dynamicMainBullets+4)}px`}),T.dynamicMainBullets>1&&P!==void 0&&(d+=O-(P||0),d>T.dynamicMainBullets-1?d=T.dynamicMainBullets-1:d<0&&(d=0)),F=Math.max(O-d,0),K=F+(Math.min(Y.length,T.dynamicMainBullets)-1),ie=(K+F)/2),Y.forEach(le=>{const de=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(oe=>`${T.bulletActiveClass}${oe}`)].map(oe=>typeof oe=="string"&&oe.includes(" ")?oe.split(" "):oe).flat();le.classList.remove(...de)}),V.length>1)Y.forEach(le=>{const de=Wc(le);de===O?le.classList.add(...T.bulletActiveClass.split(" ")):t.isElement&&le.setAttribute("part","bullet"),T.dynamicBullets&&(de>=F&&de<=K&&le.classList.add(...`${T.bulletActiveClass}-main`.split(" ")),de===F&&m(le,"prev"),de===K&&m(le,"next"))});else{const le=Y[O];if(le&&le.classList.add(...T.bulletActiveClass.split(" ")),t.isElement&&Y.forEach((de,oe)=>{de.setAttribute("part",oe===O?"bullet-active":"bullet")}),T.dynamicBullets){const de=Y[F],oe=Y[K];for(let $=F;$<=K;$+=1)Y[$]&&Y[$].classList.add(...`${T.bulletActiveClass}-main`.split(" "));m(de,"prev"),m(oe,"next")}}if(T.dynamicBullets){const le=Math.min(Y.length,T.dynamicMainBullets+4),de=(u*le-u)/2-ie*u,oe=E?"right":"left";Y.forEach($=>{$.style[t.isHorizontal()?oe:"top"]=`${de}px`})}}V.forEach((Y,F)=>{if(T.type==="fraction"&&(Y.querySelectorAll(to(T.currentClass)).forEach(K=>{K.textContent=T.formatFractionCurrent(O+1)}),Y.querySelectorAll(to(T.totalClass)).forEach(K=>{K.textContent=T.formatFractionTotal(_)})),T.type==="progressbar"){let K;T.progressbarOpposite?K=t.isHorizontal()?"vertical":"horizontal":K=t.isHorizontal()?"horizontal":"vertical";const ie=(O+1)/_;let le=1,de=1;K==="horizontal"?le=ie:de=ie,Y.querySelectorAll(to(T.progressbarFillClass)).forEach(oe=>{oe.style.transform=`translate3d(0,0,0) scaleX(${le}) scaleY(${de})`,oe.style.transitionDuration=`${t.params.speed}ms`})}T.type==="custom"&&T.renderCustom?(Kc(Y,T.renderCustom(t,O+1,_)),F===0&&o("paginationRender",Y)):(F===0&&o("paginationRender",Y),o("paginationUpdate",Y)),t.params.watchOverflow&&t.enabled&&Y.classList[t.isLocked?"add":"remove"](T.lockClass)})}function C(){const E=t.params.pagination;if(p())return;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let V=t.pagination.el;V=gt(V);let O="";if(E.type==="bullets"){let P=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&P>T&&(P=T);for(let z=0;z<P;z+=1)E.renderBullet?O+=E.renderBullet.call(t,z,E.bulletClass):O+=`<${E.bulletElement} ${t.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?O=E.renderFraction.call(t,E.currentClass,E.totalClass):O=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?O=E.renderProgressbar.call(t,E.progressbarFillClass):O=`<span class="${E.progressbarFillClass}"></span>`),t.pagination.bullets=[],V.forEach(P=>{E.type!=="custom"&&Kc(P,O||""),E.type==="bullets"&&t.pagination.bullets.push(...P.querySelectorAll(to(E.bulletClass)))}),E.type!=="custom"&&o("paginationRender",V[0])}function S(){t.params.pagination=T8(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const E=t.params.pagination;if(!E.el)return;let T;typeof E.el=="string"&&t.isElement&&(T=t.el.querySelector(E.el)),!T&&typeof E.el=="string"&&(T=[...document.querySelectorAll(E.el)]),T||(T=E.el),!(!T||T.length===0)&&(t.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(T)&&T.length>1&&(T=[...t.el.querySelectorAll(E.el)],T.length>1&&(T=T.find(V=>C8(V,".swiper")[0]===t.el))),Array.isArray(T)&&T.length===1&&(T=T[0]),Object.assign(t.pagination,{el:T}),T=gt(T),T.forEach(V=>{E.type==="bullets"&&E.clickable&&V.classList.add(...(E.clickableClass||"").split(" ")),V.classList.add(E.modifierClass+E.type),V.classList.add(t.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(V.classList.add(`${E.modifierClass}${E.type}-dynamic`),d=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&V.classList.add(E.progressbarOppositeClass),E.clickable&&V.addEventListener("click",v),t.enabled||V.classList.add(E.lockClass)}))}function j(){const E=t.params.pagination;if(p())return;let T=t.pagination.el;T&&(T=gt(T),T.forEach(V=>{V.classList.remove(E.hiddenClass),V.classList.remove(E.modifierClass+E.type),V.classList.remove(t.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(V.classList.remove(...(E.clickableClass||"").split(" ")),V.removeEventListener("click",v))})),t.pagination.bullets&&t.pagination.bullets.forEach(V=>V.classList.remove(...E.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const E=t.params.pagination;let{el:T}=t.pagination;T=gt(T),T.forEach(V=>{V.classList.remove(E.horizontalClass,E.verticalClass),V.classList.add(t.isHorizontal()?E.horizontalClass:E.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?M():(S(),C(),y())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),a("snapIndexChange",()=>{y()}),a("snapGridLengthChange",()=>{C(),y()}),a("destroy",()=>{j()}),a("enable disable",()=>{let{el:E}=t.pagination;E&&(E=gt(E),E.forEach(T=>T.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{y()}),a("click",(E,T)=>{const V=T.target,O=gt(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!V.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&V===t.navigation.nextEl||t.navigation.prevEl&&V===t.navigation.prevEl))return;const P=O[0].classList.contains(t.params.pagination.hiddenClass);o(P===!0?"paginationShow":"paginationHide"),O.forEach(z=>z.classList.toggle(t.params.pagination.hiddenClass))}});const L=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:E}=t.pagination;E&&(E=gt(E),E.forEach(T=>T.classList.remove(t.params.pagination.paginationDisabledClass))),S(),C(),y()},M=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:E}=t.pagination;E&&(E=gt(E),E.forEach(T=>T.classList.add(t.params.pagination.paginationDisabledClass))),j()};Object.assign(t.pagination,{enable:L,disable:M,render:C,update:y,init:S,destroy:j})}function si(e){let{swiper:t,extendParams:n,on:a,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,p=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,v=new Date().getTime(),y,C,S,j,L,M,E;function T(J){!t||t.destroyed||!t.wrapperEl||J.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",T),!(E||J.detail&&J.detail.bySwiperTouchMove)&&F())}const V=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?y=!0:y&&(m=g,y=!1);const J=t.autoplay.paused?g:v+m-new Date().getTime();t.autoplay.timeLeft=J,o("autoplayTimeLeft",J,J/p),d=requestAnimationFrame(()=>{V()})},O=()=>{let J;return t.virtual&&t.params.virtual.enabled?J=t.slides.find(k=>k.classList.contains("swiper-slide-active")):J=t.slides[t.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},P=J=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(d),V();let te=typeof J>"u"?t.params.autoplay.delay:J;p=t.params.autoplay.delay,m=t.params.autoplay.delay;const k=O();!Number.isNaN(k)&&k>0&&typeof J>"u"&&(te=k,p=k,m=k),g=te;const X=t.params.speed,ne=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return te>0?(clearTimeout(u),u=setTimeout(()=>{ne()},te)):requestAnimationFrame(()=>{ne()}),te},z=()=>{v=new Date().getTime(),t.autoplay.running=!0,P(),o("autoplayStart")},_=()=>{t.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},Y=(J,te)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(u),J||(M=!0);const k=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",T):F()};if(t.autoplay.paused=!0,te){L&&(g=t.params.autoplay.delay),L=!1,k();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-v),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),k())},F=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(v=new Date().getTime(),M?(M=!1,P(g)):P(),t.autoplay.paused=!1,o("autoplayResume"))},K=()=>{if(t.destroyed||!t.autoplay.running)return;const J=Fi();J.visibilityState==="hidden"&&(M=!0,Y(!0)),J.visibilityState==="visible"&&F()},ie=J=>{J.pointerType==="mouse"&&(M=!0,E=!0,!(t.animating||t.autoplay.paused)&&Y(!0))},le=J=>{J.pointerType==="mouse"&&(E=!1,t.autoplay.paused&&F())},de=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ie),t.el.addEventListener("pointerleave",le))},oe=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ie),t.el.removeEventListener("pointerleave",le))},$=()=>{Fi().addEventListener("visibilitychange",K)},W=()=>{Fi().removeEventListener("visibilitychange",K)};a("init",()=>{t.params.autoplay.enabled&&(de(),$(),z())}),a("destroy",()=>{oe(),W(),t.autoplay.running&&_()}),a("_freeModeStaticRelease",()=>{(S||M)&&F()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?_():Y(!0,!0)}),a("beforeTransitionStart",(J,te,k)=>{t.destroyed||!t.autoplay.running||(k||!t.params.autoplay.disableOnInteraction?Y(!0,!0):_())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){_();return}C=!0,S=!1,M=!1,j=setTimeout(()=>{M=!0,S=!0,Y(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!C)){if(clearTimeout(j),clearTimeout(u),t.params.autoplay.disableOnInteraction){S=!1,C=!1;return}S&&t.params.cssMode&&F(),S=!1,C=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(L=!0)}),Object.assign(t.autoplay,{start:z,stop:_,pause:Y,resume:F})}let Ef;function hR(){const e=Ht(),t=Fi();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function E8(){return Ef||(Ef=hR()),Ef}let jf;function mR(e){let{userAgent:t}=e===void 0?{}:e;const n=E8(),a=Ht(),o=a.navigator.platform,l=t||a.navigator.userAgent,u={ios:!1,android:!1},d=a.screen.width,p=a.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const v=l.match(/(iPod)(.*OS\s([\d_]+))?/),y=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=o==="Win32";let S=o==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&S&&n.touch&&j.indexOf(`${d}x${p}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),S=!1),m&&!C&&(u.os="android",u.android=!0),(g||y||v)&&(u.os="ios",u.ios=!0),u}function j8(e){return e===void 0&&(e={}),jf||(jf=mR(e)),jf}let Af;function gR(){const e=Ht(),t=j8();let n=!1;function a(){const d=e.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(a()){const d=String(e.navigator.userAgent);if(d.includes("Version/")){const[p,m]=d.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));n=p<16||p===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=a(),u=l||o&&t.ios;return{isSafari:n||l,needPerspectiveFix:n,need3dFix:u,isWebView:o}}function A8(){return Af||(Af=gR()),Af}function xR(e){let{swiper:t,on:n,emit:a}=e;const o=Ht();let l=null,u=null;const d=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(v=>{u=o.requestAnimationFrame(()=>{const{width:y,height:C}=t;let S=y,j=C;v.forEach(L=>{let{contentBoxSize:M,contentRect:E,target:T}=L;T&&T!==t.el||(S=E?E.width:(M[0]||M).inlineSize,j=E?E.height:(M[0]||M).blockSize)}),(S!==y||j!==C)&&d()})}),l.observe(t.el))},m=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",g)}),n("destroy",()=>{m(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",g)})}function vR(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l=[],u=Ht(),d=function(g,v){v===void 0&&(v={});const y=u.MutationObserver||u.WebkitMutationObserver,C=new y(S=>{if(t.__preventObserver__)return;if(S.length===1){o("observerUpdate",S[0]);return}const j=function(){o("observerUpdate",S[0])};u.requestAnimationFrame?u.requestAnimationFrame(j):u.setTimeout(j,0)});C.observe(g,{attributes:typeof v.attributes>"u"?!0:v.attributes,childList:t.isElement||(typeof v.childList>"u"?!0:v).childList,characterData:typeof v.characterData>"u"?!0:v.characterData}),l.push(C)},p=()=>{if(t.params.observer){if(t.params.observeParents){const g=C8(t.hostEl);for(let v=0;v<g.length;v+=1)d(g[v])}d(t.hostEl,{childList:t.params.observeSlideChildren}),d(t.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",m)}var yR={on(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=n?"unshift":"push";return e.split(" ").forEach(l=>{a.eventsListeners[l]||(a.eventsListeners[l]=[]),a.eventsListeners[l][o](t)}),a},once(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];t.apply(a,u)}return o.__emitterProxy=t,a.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const a=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[a](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?n.eventsListeners[a]=[]:n.eventsListeners[a]&&n.eventsListeners[a].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[a].splice(l,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,a;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],n=l.slice(1,l.length),a=e):(t=l[0].events,n=l[0].data,a=l[0].context||e),n.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(m=>{m.apply(a,[p,...n])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(m=>{m.apply(a,n)})}),e}};function wR(){const e=this;let t,n;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=a.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Xn(a,"padding-left")||0,10)-parseInt(Xn(a,"padding-right")||0,10),n=n-parseInt(Xn(a,"padding-top")||0,10)-parseInt(Xn(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function bR(){const e=this;function t(F,K){return parseFloat(F.getPropertyValue(e.getDirectionLabel(K))||0)}const n=e.params,{wrapperEl:a,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=e,p=e.virtual&&n.virtual.enabled,m=p?e.virtual.slides.length:e.slides.length,g=Ii(o,`.${e.params.slideClass}, swiper-slide`),v=p?e.virtual.slides.length:g.length;let y=[];const C=[],S=[];let j=n.slidesOffsetBefore;typeof j=="function"&&(j=n.slidesOffsetBefore.call(e));let L=n.slidesOffsetAfter;typeof L=="function"&&(L=n.slidesOffsetAfter.call(e));const M=e.snapGrid.length,E=e.slidesGrid.length;let T=n.spaceBetween,V=-j,O=0,P=0;if(typeof l>"u")return;typeof T=="string"&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*l:typeof T=="string"&&(T=parseFloat(T)),e.virtualSize=-T,g.forEach(F=>{u?F.style.marginLeft="":F.style.marginRight="",F.style.marginBottom="",F.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(cc(a,"--swiper-centered-offset-before",""),cc(a,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let _;const Y=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(F=>typeof n.breakpoints[F].slidesPerView<"u").length>0;for(let F=0;F<v;F+=1){_=0;let K;if(g[F]&&(K=g[F]),z&&e.grid.updateSlide(F,K,g),!(g[F]&&Xn(K,"display")==="none")){if(n.slidesPerView==="auto"){Y&&(g[F].style[e.getDirectionLabel("width")]="");const ie=getComputedStyle(K),le=K.style.transform,de=K.style.webkitTransform;if(le&&(K.style.transform="none"),de&&(K.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Up(K,"width"):Up(K,"height");else{const oe=t(ie,"width"),$=t(ie,"padding-left"),W=t(ie,"padding-right"),J=t(ie,"margin-left"),te=t(ie,"margin-right"),k=ie.getPropertyValue("box-sizing");if(k&&k==="border-box")_=oe+J+te;else{const{clientWidth:X,offsetWidth:ne}=K;_=oe+$+W+J+te+(ne-X)}}le&&(K.style.transform=le),de&&(K.style.webkitTransform=de),n.roundLengths&&(_=Math.floor(_))}else _=(l-(n.slidesPerView-1)*T)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),g[F]&&(g[F].style[e.getDirectionLabel("width")]=`${_}px`);g[F]&&(g[F].swiperSlideSize=_),S.push(_),n.centeredSlides?(V=V+_/2+O/2+T,O===0&&F!==0&&(V=V-l/2-T),F===0&&(V=V-l/2-T),Math.abs(V)<1/1e3&&(V=0),n.roundLengths&&(V=Math.floor(V)),P%n.slidesPerGroup===0&&y.push(V),C.push(V)):(n.roundLengths&&(V=Math.floor(V)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&y.push(V),C.push(V),V=V+_+T),e.virtualSize+=_+T,O=_,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+L,u&&d&&(n.effect==="slide"||n.effect==="coverflow")&&(a.style.width=`${e.virtualSize+T}px`),n.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+T}px`),z&&e.grid.updateWrapperSize(_,y),!n.centeredSlides){const F=[];for(let K=0;K<y.length;K+=1){let ie=y[K];n.roundLengths&&(ie=Math.floor(ie)),y[K]<=e.virtualSize-l&&F.push(ie)}y=F,Math.floor(e.virtualSize-l)-Math.floor(y[y.length-1])>1&&y.push(e.virtualSize-l)}if(p&&n.loop){const F=S[0]+T;if(n.slidesPerGroup>1){const K=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),ie=F*n.slidesPerGroup;for(let le=0;le<K;le+=1)y.push(y[y.length-1]+ie)}for(let K=0;K<e.virtual.slidesBefore+e.virtual.slidesAfter;K+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+F),C.push(C[C.length-1]+F),e.virtualSize+=F}if(y.length===0&&(y=[0]),T!==0){const F=e.isHorizontal()&&u?"marginLeft":e.getDirectionLabel("marginRight");g.filter((K,ie)=>!n.cssMode||n.loop?!0:ie!==g.length-1).forEach(K=>{K.style[F]=`${T}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let F=0;S.forEach(ie=>{F+=ie+(T||0)}),F-=T;const K=F>l?F-l:0;y=y.map(ie=>ie<=0?-j:ie>K?K+L:ie)}if(n.centerInsufficientSlides){let F=0;S.forEach(ie=>{F+=ie+(T||0)}),F-=T;const K=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(F+K<l){const ie=(l-F-K)/2;y.forEach((le,de)=>{y[de]=le-ie}),C.forEach((le,de)=>{C[de]=le+ie})}}if(Object.assign(e,{slides:g,snapGrid:y,slidesGrid:C,slidesSizesGrid:S}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){cc(a,"--swiper-centered-offset-before",`${-y[0]}px`),cc(a,"--swiper-centered-offset-after",`${e.size/2-S[S.length-1]/2}px`);const F=-e.snapGrid[0],K=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ie=>ie+F),e.slidesGrid=e.slidesGrid.map(ie=>ie+K)}if(v!==m&&e.emit("slidesLengthChange"),y.length!==M&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),C.length!==E&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const F=`${n.containerModifierClass}backface-hidden`,K=e.el.classList.contains(F);v<=n.maxBackfaceHiddenSlides?K||e.el.classList.add(F):K&&e.el.classList.remove(F)}}function SR(e){const t=this,n=[],a=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=d=>a?t.slides[t.getSlideIndexByData(d)]:t.slides[d];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(d=>{n.push(d)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const d=t.activeIndex+l;if(d>t.slides.length&&!a)break;n.push(u(d))}else n.push(u(t.activeIndex));for(l=0;l<n.length;l+=1)if(typeof n[l]<"u"){const d=n[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function CR(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-n-e.cssOverflowAdjustment()}const J4=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function TR(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:a,rtlTranslate:o,snapGrid:l}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let d=n.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*t.size:typeof d=="string"&&(d=parseFloat(d));for(let p=0;p<a.length;p+=1){const m=a[p];let g=m.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(g-=a[0].swiperSlideOffset);const v=(u+(n.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+d),y=(u-l[0]+(n.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+d),C=-(u-g),S=C+t.slidesSizesGrid[p],j=C>=0&&C<=t.size-t.slidesSizesGrid[p],L=C>=0&&C<t.size-1||S>1&&S<=t.size||C<=0&&S>=t.size;L&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(p)),J4(m,L,n.slideVisibleClass),J4(m,j,n.slideFullyVisibleClass),m.progress=o?-v:v,m.originalProgress=o?-y:y}}function ER(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const n=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=t;const p=l,m=u;if(a===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/a;const g=Math.abs(e-t.minTranslate())<1,v=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=v||o>=1,g&&(o=0),v&&(o=1)}if(n.loop){const g=t.getSlideIndexByData(0),v=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],C=t.slidesGrid[v],S=t.slidesGrid[t.slidesGrid.length-1],j=Math.abs(e);j>=y?d=(j-y)/S:d=(j+S-C)/S,d>1&&(d-=1)}Object.assign(t,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),l&&!p&&t.emit("reachBeginning toEdge"),u&&!m&&t.emit("reachEnd toEdge"),(p&&!l||m&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const Mf=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function jR(){const e=this,{slides:t,params:n,slidesEl:a,activeIndex:o}=e,l=e.virtual&&n.virtual.enabled,u=e.grid&&n.grid&&n.grid.rows>1,d=v=>Ii(a,`.${n.slideClass}${v}, swiper-slide${v}`)[0];let p,m,g;if(l)if(n.loop){let v=o-e.virtual.slidesBefore;v<0&&(v=e.virtual.slides.length+v),v>=e.virtual.slides.length&&(v-=e.virtual.slides.length),p=d(`[data-swiper-slide-index="${v}"]`)}else p=d(`[data-swiper-slide-index="${o}"]`);else u?(p=t.find(v=>v.column===o),g=t.find(v=>v.column===o+1),m=t.find(v=>v.column===o-1)):p=t[o];p&&(u||(g=fR(p,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!g&&(g=t[0]),m=dR(p,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(v=>{Mf(v,v===p,n.slideActiveClass),Mf(v,v===g,n.slideNextClass),Mf(v,v===m,n.slidePrevClass)}),e.emitSlidesClasses()}const Dc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(n());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},Lf=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},_p=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,d=[u-t];d.push(...Array.from({length:t}).map((p,m)=>u+a+m)),e.slides.forEach((p,m)=>{d.includes(p.column)&&Lf(e,m)});return}const l=o+a-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const d=(u%n+n)%n;(d<o||d>l)&&Lf(e,d)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,n-1);u+=1)u!==o&&(u>l||u<o)&&Lf(e,u)};function AR(e){const{slidesGrid:t,params:n}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?a>=t[l]&&a<t[l+1]-(t[l+1]-t[l])/2?o=l:a>=t[l]&&a<t[l+1]&&(o=l+1):a>=t[l]&&(o=l);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function MR(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:l,realIndex:u,snapIndex:d}=t;let p=e,m;const g=C=>{let S=C-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof p>"u"&&(p=AR(t)),a.indexOf(n)>=0)m=a.indexOf(n);else{const C=Math.min(o.slidesPerGroupSkip,p);m=C+Math.floor((p-C)/o.slidesPerGroup)}if(m>=a.length&&(m=a.length-1),p===l&&!t.params.loop){m!==d&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(p===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(p);return}const v=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled&&o.loop)y=g(p);else if(v){const C=t.slides.find(j=>j.column===p);let S=parseInt(C.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(C),0)),y=Math.floor(S/o.grid.rows)}else if(t.slides[p]){const C=t.slides[p].getAttribute("data-swiper-slide-index");C?y=parseInt(C,10):y=p}else y=p;Object.assign(t,{previousSnapIndex:d,snapIndex:m,previousRealIndex:u,realIndex:y,previousIndex:l,activeIndex:p}),t.initialized&&_p(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function LR(e,t){const n=this,a=n.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${a.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<n.slides.length;d+=1)if(n.slides[d]===o){l=!0,u=d;break}}if(o&&l)n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=u;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}a.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var OR={updateSize:wR,updateSlides:bR,updateAutoHeight:SR,updateSlidesOffset:CR,updateSlidesProgress:TR,updateProgress:ER,updateSlidesClasses:jR,updateActiveIndex:MR,updateClickedSlide:LR};function RR(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:a,translate:o,wrapperEl:l}=t;if(n.virtualTranslate)return a?-o:o;if(n.cssMode)return o;let u=oR(l,e);return u+=t.cssOverflowAdjustment(),a&&(u=-u),u||0}function kR(e,t){const n=this,{rtlTranslate:a,params:o,wrapperEl:l,progress:u}=n;let d=0,p=0;const m=0;n.isHorizontal()?d=a?-e:e:p=e,o.roundLengths&&(d=Math.floor(d),p=Math.floor(p)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?d:p,o.cssMode?l[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-d:-p:o.virtualTranslate||(n.isHorizontal()?d-=n.cssOverflowAdjustment():p-=n.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${p}px, ${m}px)`);let g;const v=n.maxTranslate()-n.minTranslate();v===0?g=0:g=(e-n.minTranslate())/v,g!==u&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function VR(){return-this.snapGrid[0]}function HR(){return-this.snapGrid[this.snapGrid.length-1]}function DR(e,t,n,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),a===void 0&&(a=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const p=l.minTranslate(),m=l.maxTranslate();let g;if(a&&e>p?g=p:a&&e<m?g=m:g=e,l.updateProgress(g),u.cssMode){const v=l.isHorizontal();if(t===0)d[v?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return S8({swiper:l,targetPosition:-g,side:v?"left":"top"}),!0;d.scrollTo({[v?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,n&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var zR={getTranslate:RR,setTranslate:kR,minTranslate:VR,maxTranslate:HR,translateTo:DR};function PR(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function M8(e){let{swiper:t,runCallbacks:n,direction:a,step:o}=e;const{activeIndex:l,previousIndex:u}=t;let d=a;d||(l>u?d="next":l<u?d="prev":d="reset"),t.emit(`transition${o}`),n&&d==="reset"?t.emit(`slideResetTransition${o}`):n&&l!==u&&(t.emit(`slideChangeTransition${o}`),d==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function NR(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;a.cssMode||(a.autoHeight&&n.updateAutoHeight(),M8({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function $R(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;n.animating=!1,!a.cssMode&&(n.setTransition(0),M8({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var BR={setTransition:PR,transitionStart:NR,transitionEnd:$R};function IR(e,t,n,a,o){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:d,snapGrid:p,slidesGrid:m,previousIndex:g,activeIndex:v,rtlTranslate:y,wrapperEl:C,enabled:S}=l;if(!S&&!a&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const j=Math.min(l.params.slidesPerGroupSkip,u);let L=j+Math.floor((u-j)/l.params.slidesPerGroup);L>=p.length&&(L=p.length-1);const M=-p[L];if(d.normalizeSlideIndex)for(let z=0;z<m.length;z+=1){const _=-Math.floor(M*100),Y=Math.floor(m[z]*100),F=Math.floor(m[z+1]*100);typeof m[z+1]<"u"?_>=Y&&_<F-(F-Y)/2?u=z:_>=Y&&_<F&&(u=z+1):_>=Y&&(u=z)}if(l.initialized&&u!==v&&(!l.allowSlideNext&&(y?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(v||0)!==u))return!1;u!==(g||0)&&n&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let E;u>v?E="next":u<v?E="prev":E="reset";const T=l.virtual&&l.params.virtual.enabled;if(!(T&&o)&&(y&&-M===l.translate||!y&&M===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(M),E!=="reset"&&(l.transitionStart(n,E),l.transitionEnd(n,E)),!1;if(d.cssMode){const z=l.isHorizontal(),_=y?M:-M;if(t===0)T&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),T&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{C[z?"scrollLeft":"scrollTop"]=_})):C[z?"scrollLeft":"scrollTop"]=_,T&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return S8({swiper:l,targetPosition:_,side:z?"left":"top"}),!0;C.scrollTo({[z?"left":"top"]:_,behavior:"smooth"})}return!0}const P=A8().isSafari;return T&&!o&&P&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,a),l.transitionStart(n,E),t===0?l.transitionEnd(n,E):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(n,E))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function UR(e,t,n,a){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const y=u*o.params.grid.rows;d=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===y).column}else d=o.getSlideIndexByData(u);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let v=p-d<g;if(m&&(v=v||d<Math.ceil(g/2)),a&&m&&o.params.slidesPerView!=="auto"&&!l&&(v=!1),v){const y=m?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?d+1:d-p+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(l){const y=u*o.params.grid.rows;u=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===y).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,n,a)}),o}function _R(e,t,n){t===void 0&&(t=!0);const a=this,{enabled:o,params:l,animating:u}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(a.slidesPerViewDynamic("current",!0),1));const p=a.activeIndex<l.slidesPerGroupSkip?1:d,m=a.virtual&&l.virtual.enabled;if(l.loop){if(u&&!m&&l.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+p,e,t,n)}),!0}return l.rewind&&a.isEnd?a.slideTo(0,e,t,n):a.slideTo(a.activeIndex+p,e,t,n)}function GR(e,t,n){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:p,animating:m}=a;if(!p||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const g=a.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const v=d?a.translate:-a.translate;function y(E){return E<0?-Math.floor(Math.abs(E)):Math.floor(E)}const C=y(v),S=l.map(E=>y(E)),j=o.freeMode&&o.freeMode.enabled;let L=l[S.indexOf(C)-1];if(typeof L>"u"&&(o.cssMode||j)){let E;l.forEach((T,V)=>{C>=T&&(E=V)}),typeof E<"u"&&(L=j?l[E]:l[E>0?E-1:E])}let M=0;if(typeof L<"u"&&(M=u.indexOf(L),M<0&&(M=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-a.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&a.isBeginning){const E=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(E,e,t,n)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(M,e,t,n)}),!0;return a.slideTo(M,e,t,n)}function qR(e,t,n){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,n)}function YR(e,t,n,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[d]){const m=o.snapGrid[d],g=o.snapGrid[d+1];p-m>(g-m)*a&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[d-1],g=o.snapGrid[d];p-m<=(g-m)*a&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,n)}function FR(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,d=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(d?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Ii(n,`${u}[data-swiper-slide-index="${l}"]`)[0]),b8(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var XR={slideTo:IR,slideToLoop:UR,slideNext:_R,slidePrev:GR,slideReset:qR,slideToClosest:YR,slideToClickedSlide:FR};function ZR(e,t){const n=this,{params:a,slidesEl:o}=n;if(!a.loop||n.virtual&&n.params.virtual.enabled)return;const l=()=>{Ii(o,`.${a.slideClass}, swiper-slide`).forEach((C,S)=>{C.setAttribute("data-swiper-slide-index",S)})},u=()=>{const y=Ii(o,`.${a.slideBlankClass}`);y.forEach(C=>{C.remove()}),y.length>0&&(n.recalcSlides(),n.updateSlides())},d=n.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||d)&&u();const p=a.slidesPerGroup*(d?a.grid.rows:1),m=n.slides.length%p!==0,g=d&&n.slides.length%a.grid.rows!==0,v=y=>{for(let C=0;C<y;C+=1){const S=n.isElement?Zc("swiper-slide",[a.slideBlankClass]):Zc("div",[a.slideClass,a.slideBlankClass]);n.slidesEl.append(S)}};if(m){if(a.loopAddBlankSlides){const y=p-n.slides.length%p;v(y),n.recalcSlides(),n.updateSlides()}else Xc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(a.loopAddBlankSlides){const y=a.grid.rows-n.slides.length%a.grid.rows;v(y),n.recalcSlides(),n.updateSlides()}else Xc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();n.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function WR(e){let{slideRealIndex:t,slideTo:n=!0,direction:a,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:p}=e===void 0?{}:e;const m=this;if(!m.params.loop)return;m.emit("beforeLoopFix");const{slides:g,allowSlidePrev:v,allowSlideNext:y,slidesEl:C,params:S}=m,{centeredSlides:j,initialSlide:L}=S;if(m.allowSlidePrev=!0,m.allowSlideNext=!0,m.virtual&&S.virtual.enabled){n&&(!S.centeredSlides&&m.snapIndex===0?m.slideTo(m.virtual.slides.length,0,!1,!0):S.centeredSlides&&m.snapIndex<S.slidesPerView?m.slideTo(m.virtual.slides.length+m.snapIndex,0,!1,!0):m.snapIndex===m.snapGrid.length-1&&m.slideTo(m.virtual.slidesBefore,0,!1,!0)),m.allowSlidePrev=v,m.allowSlideNext=y,m.emit("loopFix");return}let M=S.slidesPerView;M==="auto"?M=m.slidesPerViewDynamic():(M=Math.ceil(parseFloat(S.slidesPerView,10)),j&&M%2===0&&(M=M+1));const E=S.slidesPerGroupAuto?M:S.slidesPerGroup;let T=j?Math.max(E,Math.ceil(M/2)):E;T%E!==0&&(T+=E-T%E),T+=S.loopAdditionalSlides,m.loopedSlides=T;const V=m.grid&&S.grid&&S.grid.rows>1;g.length<M+T||m.params.effect==="cards"&&g.length<M+T*2?Xc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):V&&S.grid.fill==="row"&&Xc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const O=[],P=[],z=V?Math.ceil(g.length/S.grid.rows):g.length,_=u&&z-L<M&&!j;let Y=_?L:m.activeIndex;typeof l>"u"?l=m.getSlideIndex(g.find($=>$.classList.contains(S.slideActiveClass))):Y=l;const F=a==="next"||!a,K=a==="prev"||!a;let ie=0,le=0;const oe=(V?g[l].column:l)+(j&&typeof o>"u"?-M/2+.5:0);if(oe<T){ie=Math.max(T-oe,E);for(let $=0;$<T-oe;$+=1){const W=$-Math.floor($/z)*z;if(V){const J=z-W-1;for(let te=g.length-1;te>=0;te-=1)g[te].column===J&&O.push(te)}else O.push(z-W-1)}}else if(oe+M>z-T){le=Math.max(oe-(z-T*2),E),_&&(le=Math.max(le,M-z+L+1));for(let $=0;$<le;$+=1){const W=$-Math.floor($/z)*z;V?g.forEach((J,te)=>{J.column===W&&P.push(te)}):P.push(W)}}if(m.__preventObserver__=!0,requestAnimationFrame(()=>{m.__preventObserver__=!1}),m.params.effect==="cards"&&g.length<M+T*2&&(P.includes(l)&&P.splice(P.indexOf(l),1),O.includes(l)&&O.splice(O.indexOf(l),1)),K&&O.forEach($=>{g[$].swiperLoopMoveDOM=!0,C.prepend(g[$]),g[$].swiperLoopMoveDOM=!1}),F&&P.forEach($=>{g[$].swiperLoopMoveDOM=!0,C.append(g[$]),g[$].swiperLoopMoveDOM=!1}),m.recalcSlides(),S.slidesPerView==="auto"?m.updateSlides():V&&(O.length>0&&K||P.length>0&&F)&&m.slides.forEach(($,W)=>{m.grid.updateSlide(W,$,m.slides)}),S.watchSlidesProgress&&m.updateSlidesOffset(),n){if(O.length>0&&K){if(typeof t>"u"){const $=m.slidesGrid[Y],J=m.slidesGrid[Y+ie]-$;p?m.setTranslate(m.translate-J):(m.slideTo(Y+Math.ceil(ie),0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-J,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-J))}else if(o){const $=V?O.length/S.grid.rows:O.length;m.slideTo(m.activeIndex+$,0,!1,!0),m.touchEventsData.currentTranslate=m.translate}}else if(P.length>0&&F)if(typeof t>"u"){const $=m.slidesGrid[Y],J=m.slidesGrid[Y-le]-$;p?m.setTranslate(m.translate-J):(m.slideTo(Y-le,0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-J,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-J))}else{const $=V?P.length/S.grid.rows:P.length;m.slideTo(m.activeIndex-$,0,!1,!0)}}if(m.allowSlidePrev=v,m.allowSlideNext=y,m.controller&&m.controller.control&&!d){const $={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(m.controller.control)?m.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...$,slideTo:W.params.slidesPerView===S.slidesPerView?n:!1})}):m.controller.control instanceof m.constructor&&m.controller.control.params.loop&&m.controller.control.loopFix({...$,slideTo:m.controller.control.params.slidesPerView===S.slidesPerView?n:!1})}m.emit("loopFix")}function KR(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var QR={loopCreate:ZR,loopFix:WR,loopDestroy:KR};function JR(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ek(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var tk={setGrabCursor:JR,unsetGrabCursor:ek};function ik(e,t){t===void 0&&(t=this);function n(a){if(!a||a===Fi()||a===Ht())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||n(a.getRootNode().host)}return n(t)}function e5(e,t,n){const a=Ht(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(n<=u||n>=a.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function nk(e){const t=this,n=Fi();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){e5(t,a,a.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=t;if(!d||!l.simulateTouch&&a.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=a.target;if(l.touchEventsTarget==="wrapper"&&!uR(p,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=a.composedPath?a.composedPath():a.path;m&&a.target&&a.target.shadowRoot&&g&&(p=g[0]);const v=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(a.target&&a.target.shadowRoot);if(l.noSwiping&&(y?ik(v,p):p.closest(v))){t.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;u.currentX=a.pageX,u.currentY=a.pageY;const C=u.currentX,S=u.currentY;if(!e5(t,a,C))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=C,u.startY=S,o.touchStartTime=Fc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let j=!0;p.matches(o.focusableElements)&&(j=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==p&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&n.activeElement.blur();const L=j&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||L)&&!p.isContentEditable&&a.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function ak(e){const t=Fi(),n=this,a=n.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=n;if(!d||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(a.touchId!==null||p.pointerId!==a.pointerId))return;let m;if(p.type==="touchmove"){if(m=[...p.changedTouches].find(O=>O.identifier===a.touchId),!m||m.identifier!==a.touchId)return}else m=p;if(!a.isTouched){a.startMoving&&a.isScrolling&&n.emit("touchMoveOpposite",p);return}const g=m.pageX,v=m.pageY;if(p.preventedByNestedSwiper){l.startX=g,l.startY=v;return}if(!n.allowTouchMove){p.target.matches(a.focusableElements)||(n.allowClick=!1),a.isTouched&&(Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v}),a.touchStartTime=Fc());return}if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(v<l.startY&&n.translate<=n.maxTranslate()||v>l.startY&&n.translate>=n.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(u&&(g>l.startX&&-n.translate<=n.maxTranslate()||g<l.startX&&-n.translate>=n.minTranslate()))return;if(!u&&(g<l.startX&&n.translate<=n.maxTranslate()||g>l.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(a.focusableElements)){a.isMoved=!0,n.allowClick=!1;return}a.allowTouchCallbacks&&n.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=v;const y=l.currentX-l.startX,C=l.currentY-l.startY;if(n.params.threshold&&Math.sqrt(y**2+C**2)<n.params.threshold)return;if(typeof a.isScrolling>"u"){let O;n.isHorizontal()&&l.currentY===l.startY||n.isVertical()&&l.currentX===l.startX?a.isScrolling=!1:y*y+C*C>=25&&(O=Math.atan2(Math.abs(C),Math.abs(y))*180/Math.PI,a.isScrolling=n.isHorizontal()?O>o.touchAngle:90-O>o.touchAngle)}if(a.isScrolling&&n.emit("touchMoveOpposite",p),typeof a.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(a.startMoving=!0),a.isScrolling||p.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;n.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let S=n.isHorizontal()?y:C,j=n.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),j=Math.abs(j)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,j=-j);const L=n.touchesDirection;n.swipeDirection=S>0?"prev":"next",n.touchesDirection=j>0?"prev":"next";const M=n.params.loop&&!o.cssMode,E=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!a.isMoved){if(M&&E&&n.loopFix({direction:n.swipeDirection}),a.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const O=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(O)}a.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&L!==n.touchesDirection&&M&&E&&Math.abs(S)>=1){Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}n.emit("sliderMove",p),a.isMoved=!0,a.currentTranslate=S+a.startTranslate;let T=!0,V=o.resistanceRatio;if(o.touchReleaseOnEdges&&(V=0),S>0?(M&&E&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>n.minTranslate()&&(T=!1,o.resistance&&(a.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+a.startTranslate+S)**V))):S<0&&(M&&E&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<n.maxTranslate()&&(T=!1,o.resistance&&(a.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-a.startTranslate-S)**V))),T&&(p.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,a.currentTranslate=a.startTranslate,l.diff=n.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(a.currentTranslate),n.setTranslate(a.currentTranslate))}function rk(e){const t=this,n=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(O=>O.identifier===n.touchId),!o||o.identifier!==n.touchId)return}else{if(n.touchId!==null||a.pointerId!==n.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:u,touches:d,rtlTranslate:p,slidesGrid:m,enabled:g}=t;if(!g||!u.simulateTouch&&a.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",a),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&u.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}u.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const v=Fc(),y=v-n.touchStartTime;if(t.allowClick){const O=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(O&&O[0]||a.target,O),t.emit("tap click",a),y<300&&v-n.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(n.lastClickTime=Fc(),b8(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||d.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let C;if(u.followFinger?C=p?t.translate:-t.translate:C=-n.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:C});return}const S=C>=-t.maxTranslate()&&!t.params.loop;let j=0,L=t.slidesSizesGrid[0];for(let O=0;O<m.length;O+=O<u.slidesPerGroupSkip?1:u.slidesPerGroup){const P=O<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof m[O+P]<"u"?(S||C>=m[O]&&C<m[O+P])&&(j=O,L=m[O+P]-m[O]):(S||C>=m[O])&&(j=O,L=m[m.length-1]-m[m.length-2])}let M=null,E=null;u.rewind&&(t.isBeginning?E=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const T=(C-m[j])/L,V=j<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(y>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(T>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?M:j+V):t.slideTo(j)),t.swipeDirection==="prev"&&(T>1-u.longSwipesRatio?t.slideTo(j+V):E!==null&&T<0&&Math.abs(T)>u.longSwipesRatio?t.slideTo(E):t.slideTo(j))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(j+V):t.slideTo(j):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:j+V),t.swipeDirection==="prev"&&t.slideTo(E!==null?E:j))}}function t5(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const d=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!d?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function sk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ok(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function lk(e){const t=this;Dc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function ck(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const L8=(e,t)=>{const n=Fi(),{params:a,el:o,wrapperEl:l,device:u}=e,d=!!a.nested,p=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(n[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:d}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),n[p]("touchmove",e.onTouchMove,{passive:!1,capture:d}),n[p]("pointermove",e.onTouchMove,{passive:!1,capture:d}),n[p]("touchend",e.onTouchEnd,{passive:!0}),n[p]("pointerup",e.onTouchEnd,{passive:!0}),n[p]("pointercancel",e.onTouchEnd,{passive:!0}),n[p]("touchcancel",e.onTouchEnd,{passive:!0}),n[p]("pointerout",e.onTouchEnd,{passive:!0}),n[p]("pointerleave",e.onTouchEnd,{passive:!0}),n[p]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[p]("click",e.onClick,!0),a.cssMode&&l[p]("scroll",e.onScroll),a.updateOnWindowResize?e[m](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",t5,!0):e[m]("observerUpdate",t5,!0),o[p]("load",e.onLoad,{capture:!0}))};function uk(){const e=this,{params:t}=e;e.onTouchStart=nk.bind(e),e.onTouchMove=ak.bind(e),e.onTouchEnd=rk.bind(e),e.onDocumentTouchStart=ck.bind(e),t.cssMode&&(e.onScroll=ok.bind(e)),e.onClick=sk.bind(e),e.onLoad=lk.bind(e),L8(e,"on")}function dk(){L8(this,"off")}var fk={attachEvents:uk,detachEvents:dk};const i5=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function pk(){const e=this,{realIndex:t,initialized:n,params:a,el:o}=e,l=a.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Fi(),d=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",p=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:u.querySelector(a.breakpointsBase),m=e.getBreakpoint(l,d,p);if(!m||e.currentBreakpoint===m)return;const v=(m in l?l[m]:void 0)||e.originalParams,y=i5(e,a),C=i5(e,v),S=e.params.grabCursor,j=v.grabCursor,L=a.enabled;y&&!C?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&C&&(o.classList.add(`${a.containerModifierClass}grid`),(v.grid.fill&&v.grid.fill==="column"||!v.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!j?e.unsetGrabCursor():!S&&j&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof v[P]>"u")return;const z=a[P]&&a[P].enabled,_=v[P]&&v[P].enabled;z&&!_&&e[P].disable(),!z&&_&&e[P].enable()});const M=v.direction&&v.direction!==a.direction,E=a.loop&&(v.slidesPerView!==a.slidesPerView||M),T=a.loop;M&&n&&e.changeDirection(),ai(e.params,v);const V=e.params.enabled,O=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),L&&!V?e.disable():!L&&V&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",v),n&&(E?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!T&&O?(e.loopCreate(t),e.updateSlides()):T&&!O&&e.loopDestroy()),e.emit("breakpoint",v)}function hk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let a=!1;const o=Ht(),l=t==="window"?o.innerHeight:n.clientHeight,u=Object.keys(e).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const p=parseFloat(d.substr(1));return{value:l*p,point:d}}return{value:d,point:d}});u.sort((d,p)=>parseInt(d.value,10)-parseInt(p.value,10));for(let d=0;d<u.length;d+=1){const{point:p,value:m}=u[d];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(a=p):m<=n.clientWidth&&(a=p)}return a||"max"}var mk={setBreakpoint:pk,getBreakpoint:hk};function gk(e,t){const n=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&n.push(t+o)}):typeof a=="string"&&n.push(t+a)}),n}function xk(){const e=this,{classNames:t,params:n,rtl:a,el:o,device:l}=e,u=gk(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:a},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function vk(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var yk={addClasses:xk,removeClasses:vk};function wk(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:a}=n;if(a){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var bk={checkOverflow:wk},Gp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Sk(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],l=a[o];if(typeof l!="object"||l===null){ai(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){ai(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),ai(t,a)}}const Of={eventsEmitter:yR,update:OR,translate:zR,transition:BR,slide:XR,loop:QR,grabCursor:tk,events:fk,breakpoints:mk,checkOverflow:bk,classes:yk},Rf={};let r1=class hn{constructor(){let t,n;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?n=o[0]:[t,n]=o,n||(n={}),n=ai({},n),t&&!n.el&&(n.el=t);const u=Fi();if(n.el&&typeof n.el=="string"&&u.querySelectorAll(n.el).length>1){const g=[];return u.querySelectorAll(n.el).forEach(v=>{const y=ai({},n,{el:v});g.push(new hn(y))}),g}const d=this;d.__swiper__=!0,d.support=E8(),d.device=j8({userAgent:n.userAgent}),d.browser=A8(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],n.modules&&Array.isArray(n.modules)&&d.modules.push(...n.modules);const p={};d.modules.forEach(g=>{g({params:n,swiper:d,extendParams:Sk(n,p),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const m=ai({},Gp,p);return d.params=ai({},m,Rf,n),d.originalParams=ai({},d.params),d.passedParams=ai({},n),d.params&&d.params.on&&Object.keys(d.params.on).forEach(g=>{d.on(g,d.params.on[g])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:a}=this,o=Ii(n,`.${a.slideClass}, swiper-slide`),l=Wc(o[0]);return Wc(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:a}=t;t.slides=Ii(n,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),u=(a.maxTranslate()-o)*t+o;a.translateTo(u,typeof n>"u"?0:n),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);n.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const a=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:p,activeIndex:m}=a;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let v=l[m]?Math.ceil(l[m].swiperSlideSize):0,y;for(let C=m+1;C<l.length;C+=1)l[C]&&!y&&(v+=Math.ceil(l[C].swiperSlideSize),g+=1,v>p&&(y=!0));for(let C=m-1;C>=0;C-=1)l[C]&&!y&&(v+=l[C].swiperSlideSize,g+=1,v>p&&(y=!0))}else if(t==="current")for(let v=m+1;v<l.length;v+=1)(n?u[v]+d[v]-u[m]<p:u[v]-u[m]<p)&&(g+=1);else for(let v=m-1;v>=0;v-=1)u[m]-u[v]<p&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&Dc(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,d=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(d),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const u=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}a.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),a.emit("changeDirection"),n&&a.update()),a}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let a=t||n.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=n,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Ii(a,o())[0];return!u&&n.params.createElements&&(u=Zc("div",n.params.wrapperClass),a.append(u),Ii(a,`.${n.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(n,{el:a,wrapperEl:u,slidesEl:n.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:u,hostEl:n.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Xn(a,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Xn(a,"direction")==="rtl"),wrongRTL:Xn(u,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const o=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?Dc(n,l):l.addEventListener("load",u=>{Dc(n,u.target)})}),_p(n),n.initialized=!0,_p(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const a=this,{params:o,el:l,wrapperEl:u,slides:d}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),n&&(a.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(p=>{a.off(p)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),rR(a)),a.destroyed=!0),null}static extendDefaults(t){ai(Rf,t)}static get extendedDefaults(){return Rf}static get defaults(){return Gp}static installModule(t){hn.prototype.__modules__||(hn.prototype.__modules__=[]);const n=hn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>hn.installModule(n)),hn):(hn.installModule(t),hn)}};Object.keys(Of).forEach(e=>{Object.keys(Of[e]).forEach(t=>{r1.prototype[t]=Of[e][t]})});r1.use([xR,vR]);const O8=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Aa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Lr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Aa(t[a])&&Aa(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:Lr(e[a],t[a]):e[a]=t[a]})}function R8(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function k8(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function V8(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function H8(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),n=[];return t.forEach(a=>{n.indexOf(a)<0&&n.push(a)}),n.join(" ")}function Ck(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function Tk(e){let{swiper:t,slides:n,passedParams:a,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:p}=e;const m=o.filter(Y=>Y!=="children"&&Y!=="direction"&&Y!=="wrapperClass"),{params:g,pagination:v,navigation:y,scrollbar:C,virtual:S,thumbs:j}=t;let L,M,E,T,V,O,P,z;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(L=!0),o.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(M=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(g.pagination||g.pagination===!1)&&v&&!v.el&&(E=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||d)&&(g.scrollbar||g.scrollbar===!1)&&C&&!C.el&&(T=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||u)&&(a.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(V=!0);const _=Y=>{t[Y]&&(t[Y].destroy(),Y==="navigation"?(t.isElement&&(t[Y].prevEl.remove(),t[Y].nextEl.remove()),g[Y].prevEl=void 0,g[Y].nextEl=void 0,t[Y].prevEl=void 0,t[Y].nextEl=void 0):(t.isElement&&t[Y].el.remove(),g[Y].el=void 0,t[Y].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!a.loop?O=!0:!g.loop&&a.loop?P=!0:z=!0),m.forEach(Y=>{if(Aa(g[Y])&&Aa(a[Y]))Object.assign(g[Y],a[Y]),(Y==="navigation"||Y==="pagination"||Y==="scrollbar")&&"enabled"in a[Y]&&!a[Y].enabled&&_(Y);else{const F=a[Y];(F===!0||F===!1)&&(Y==="navigation"||Y==="pagination"||Y==="scrollbar")?F===!1&&_(Y):g[Y]=a[Y]}}),m.includes("controller")&&!M&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&n&&S&&g.virtual.enabled?(S.slides=n,S.update(!0)):o.includes("virtual")&&S&&g.virtual.enabled&&(n&&(S.slides=n),S.update(!0)),o.includes("children")&&n&&g.loop&&(z=!0),L&&j.init()&&j.update(!0),M&&(t.controller.control=g.controller.control),E&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(g.pagination.el=p),v.init(),v.render(),v.update()),T&&(t.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),t.el.appendChild(d)),d&&(g.scrollbar.el=d),C.init(),C.updateSize(),C.setTranslate()),V&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),Kc(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),Kc(u,t.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),t.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),y.init(),y.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(O||z)&&t.loopDestroy(),(P||z)&&t.loopCreate(),t.update()}function Ek(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},a={},o={};Lr(n,Gp),n._emitClasses=!0,n.init=!1;const l={},u=O8.map(p=>p.replace(/_/,"")),d=Object.assign({},e);return Object.keys(d).forEach(p=>{typeof e[p]>"u"||(u.indexOf(p)>=0?Aa(e[p])?(n[p]={},o[p]={},Lr(n[p],e[p]),Lr(o[p],e[p])):(n[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?a[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:n.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:l[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{n[p]===!0&&(n[p]={}),n[p]===!1&&delete n[p]}),{params:n,passedParams:o,rest:l,events:a}}function jk(e,t){let{el:n,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=e;R8(t)&&a&&o&&(d.params.navigation.nextEl=a,d.originalParams.navigation.nextEl=a,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),k8(t)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),V8(t)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(n)}function Ak(e,t,n,a,o){const l=[];if(!t)return l;const u=p=>{l.indexOf(p)<0&&l.push(p)};if(n&&a){const p=a.map(o),m=n.map(o);p.join("")!==m.join("")&&u("children"),a.length!==n.length&&u("children")}return O8.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if(Aa(e[p])&&Aa(t[p])){const m=Object.keys(e[p]),g=Object.keys(t[p]);m.length!==g.length?u(p):(m.forEach(v=>{e[p][v]!==t[p][v]&&u(p)}),g.forEach(v=>{e[p][v]!==t[p][v]&&u(p)}))}else e[p]!==t[p]&&u(p)}),l}const Mk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Qc(){return Qc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Qc.apply(this,arguments)}function D8(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function z8(e){const t=[];return He.Children.toArray(e).forEach(n=>{D8(n)?t.push(n):n.props&&n.props.children&&z8(n.props.children).forEach(a=>t.push(a))}),t}function Lk(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return He.Children.toArray(e).forEach(a=>{if(D8(a))t.push(a);else if(a.props&&a.props.slot&&n[a.props.slot])n[a.props.slot].push(a);else if(a.props&&a.props.children){const o=z8(a.props.children);o.length>0?o.forEach(l=>t.push(l)):n["container-end"].push(a)}else n["container-end"].push(a)}),{slides:t,slots:n}}function Ok(e,t,n){if(!n)return null;const a=g=>{let v=g;return g<0?v=t.length+g:v>=t.length&&(v=v-t.length),v},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:l,to:u}=n,d=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,m=[];for(let g=d;g<p;g+=1)g>=l&&g<=u&&m.push(t[a(g)]);return m.map((g,v)=>He.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${v}`}))}function po(e,t){return typeof window>"u"?R.useEffect(e,t):R.useLayoutEffect(e,t)}const n5=R.createContext(null),Rk=R.createContext(null),Gt=R.forwardRef(function(e,t){let{className:n,tag:a="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=e===void 0?{}:e,p=!1;const[m,g]=R.useState("swiper"),[v,y]=R.useState(null),[C,S]=R.useState(!1),j=R.useRef(!1),L=R.useRef(null),M=R.useRef(null),E=R.useRef(null),T=R.useRef(null),V=R.useRef(null),O=R.useRef(null),P=R.useRef(null),z=R.useRef(null),{params:_,passedParams:Y,rest:F,events:K}=Ek(d),{slides:ie,slots:le}=Lk(l),de=()=>{S(!C)};Object.assign(_.on,{_containerClasses(te,k){g(k)}});const oe=()=>{Object.assign(_.on,K),p=!0;const te={..._};if(delete te.wrapperClass,M.current=new r1(te),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=ie;const k={cache:!1,slides:ie,renderExternal:y,renderExternalUpdate:!1};Lr(M.current.params.virtual,k),Lr(M.current.originalParams.virtual,k)}};L.current||oe(),M.current&&M.current.on("_beforeBreakpoint",de);const $=()=>{p||!K||!M.current||Object.keys(K).forEach(te=>{M.current.on(te,K[te])})},W=()=>{!K||!M.current||Object.keys(K).forEach(te=>{M.current.off(te,K[te])})};R.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",de)}),R.useEffect(()=>{!j.current&&M.current&&(M.current.emitSlidesClasses(),j.current=!0)}),po(()=>{if(t&&(t.current=L.current),!!L.current)return M.current.destroyed&&oe(),jk({el:L.current,nextEl:V.current,prevEl:O.current,paginationEl:P.current,scrollbarEl:z.current,swiper:M.current},_),u&&!M.current.destroyed&&u(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),po(()=>{$();const te=Ak(Y,E.current,ie,T.current,k=>k.key);return E.current=Y,T.current=ie,te.length&&M.current&&!M.current.destroyed&&Tk({swiper:M.current,slides:ie,passedParams:Y,changedParams:te,nextEl:V.current,prevEl:O.current,scrollbarEl:z.current,paginationEl:P.current}),()=>{W()}}),po(()=>{Mk(M.current)},[v]);function J(){return _.virtual?Ok(M.current,ie,v):ie.map((te,k)=>He.cloneElement(te,{swiper:M.current,swiperSlideIndex:k}))}return He.createElement(a,Qc({ref:L,className:H8(`${m}${n?` ${n}`:""}`)},F),He.createElement(Rk.Provider,{value:M.current},le["container-start"],He.createElement(o,{className:Ck(_.wrapperClass)},le["wrapper-start"],J(),le["wrapper-end"]),R8(_)&&He.createElement(He.Fragment,null,He.createElement("div",{ref:O,className:"swiper-button-prev"}),He.createElement("div",{ref:V,className:"swiper-button-next"})),V8(_)&&He.createElement("div",{ref:z,className:"swiper-scrollbar"}),k8(_)&&He.createElement("div",{ref:P,className:"swiper-pagination"}),le["container-end"]))});Gt.displayName="Swiper";const qt=R.forwardRef(function(e,t){let{tag:n="div",children:a,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:p,swiperSlideIndex:m,...g}=e===void 0?{}:e;const v=R.useRef(null),[y,C]=R.useState("swiper-slide"),[S,j]=R.useState(!1);function L(V,O,P){O===v.current&&C(P)}po(()=>{if(typeof m<"u"&&(v.current.swiperSlideIndex=m),t&&(t.current=v.current),!(!v.current||!l)){if(l.destroyed){y!=="swiper-slide"&&C("swiper-slide");return}return l.on("_slideClass",L),()=>{l&&l.off("_slideClass",L)}}}),po(()=>{l&&v.current&&!l.destroyed&&C(l.getSlideClasses(v.current))},[l]);const M={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},E=()=>typeof a=="function"?a(M):a,T=()=>{j(!0)};return He.createElement(n,Qc({ref:v,className:H8(`${y}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:T},g),u&&He.createElement(n5.Provider,{value:M},He.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},E(),d&&!S&&He.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&He.createElement(n5.Provider,{value:M},E(),d&&!S&&He.createElement("div",{className:"swiper-lazy-preloader"})))});qt.displayName="SwiperSlide";const kk=w(Gt)`
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
`,Vk=w(qt)`
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
`,Hk=w.section`
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
`,Dk=Qe`
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
`,zk=Qe`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-2px);
  }
`,Pk=Qe`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(2px);
  }
`,Nk=Qe`
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
`,$k=w.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,a5=w.button`
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
      ${Dk} 0.6s ease,
      ${Nk} 0.6s ease;
    transform: translateY(-2px);

    &::before {
      width: 300%;
      height: 300%;
    }

    ${e=>e.$bg==="#DBDBD8"&&Ft`
        background-color: #c8c8c5;
        box-shadow: 0 4px 15px rgba(219, 219, 216, 0.4);

        svg {
          animation: ${zk} 0.4s ease;
        }
      `}

    ${e=>e.$bg==="#3098EE"&&Ft`
        background-color: #2580d6;
        box-shadow: 0 4px 15px rgba(48, 152, 238, 0.4);

        svg {
          animation: ${Pk} 0.4s ease;
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
`,Bk=w.div`
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
`,Ik=w.p`
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
`,Uk=w.p`
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
`,_k=w.img`
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
`;const Gk=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,qk=w.div`
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
`,Yk=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Fk=w.div`
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
`;const r5=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Xk=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Zk=w.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Wk=w.div`
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
`,Kk="/assets/Review%20Image%203-bwglEcYl.png",s5="/assets/Review%20Image%201-BysFOq9G.png",o5="/assets/Review%20Image%202-C_HtVc_c.png",l5="/assets/Review%20Image%205-B3ukDKHL.png",Qk="/assets/Review%20Image%204-AW0fOgIu.png",Jk=w.section`
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
`,eV=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,tV=w.p`
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
`,iV=w.h3`
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
           max-width: 100vh;
  }
`,P8=w.span`
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
`,nV=w.div`
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
`,aV=w.div`
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
`,rV=w.div`
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
`,sV=w(rV)`
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
`,oV=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,lV=w.div`
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
`,cV=w.p`
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
`,uV=w.div`
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
`;function N8(){const[e,t]=R.useState(null),[n,a]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{e&&e.slidePrev()},d=()=>{e&&e.slideNext()},p=[{image:Kk,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:o5,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:l5,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:Qk,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:s5,description:"An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:l5,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:o5,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:s5,description:"A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}],m={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},g={hidden:{opacity:0,scale:.9,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:ae}}},v={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ae}},hover:{scale:1.1,transition:{duration:.2}},tap:{scale:.95}};return f.jsxs(Hk,{children:[f.jsxs(Bk,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:m,children:f.jsx(Ik,{children:"Our Cases"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:m,transition:{delay:.1},children:f.jsxs(Uk,{children:[f.jsx(P8,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})})]}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:g,children:f.jsx(Wk,{children:f.jsx(kk,{modules:[si],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:t,onSlideChange:y=>a(y.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:p.map(({image:y,description:C,title:S,type:j},L)=>f.jsx(Vk,{$isActive:n===L,$index:L,children:f.jsx(B.div,{whileHover:{scale:n===L?1.05:1.02,transition:{duration:.3}},whileTap:{scale:.98},children:f.jsxs(Gk,{$isActive:n===L,$index:L,children:[f.jsx(B.div,{whileHover:{scale:1.1,transition:{duration:.4}},children:f.jsx(_k,{src:y,alt:j,$isActive:n===L,$index:L})}),f.jsx(qk,{$isActive:n===L,$index:L,children:f.jsxs(Yk,{children:[f.jsx(Fk,{children:f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.7,y:n===L?0:5},transition:{duration:.3},children:f.jsx(r5,{children:C})})}),f.jsxs(Xk,{children:[f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.8,y:n===L?0:5},transition:{duration:.3,delay:.1},children:f.jsx(Zk,{children:S})}),f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.6,y:n===L?0:5},transition:{duration:.3,delay:.2},children:f.jsx(r5,{children:j})})]})]})})]})})},L))})})}),f.jsxs($k,{children:[f.jsx(B.div,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(a5,{ref:o,$bg:"#DBDBD8",onClick:u,children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(B.div,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(a5,{ref:l,$bg:"#3098EE",onClick:d,children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})}const dV=w(B.div)`
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
`,fV=w.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,pV=({type:e,message:t,onClose:n,autoClose:a=!0,autoCloseDuration:o=25e3})=>{const{t:l}=i1();R.useEffect(()=>{if(a){const d=setTimeout(()=>{n()},o);return()=>clearTimeout(d)}},[a,o,n]);const u={success:l("alert.success"),error:l("alert.error")};return f.jsxs(dV,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[f.jsx("div",{children:t||u[e]}),f.jsx(fV,{onClick:n,children:"×"})]})},hV="/assets/ContactFormImage-CaQYWUqs.png",Tu=()=>{const[e,t]=R.useState(""),[n,a]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),[p,m]=R.useState(!1),g=()=>{m(!0)},v=()=>{m(!1)},y=T=>{const{name:V,value:O}=T.target;a(P=>({...P,[V]:O})),l(P=>({...P,[V]:!1}))},C=()=>{const T={};return e||(T.service=!0),n.name||(T.name=!0),n.email||(T.email=!0),n.phone||(T.phone=!0),n.location||(T.location=!0),n.appliance||(T.appliance=!0),n.brand||(T.brand=!0),n.power||(T.power=!0),T},S=async T=>{T.preventDefault();const V=C();if(Object.keys(V).length>0){l(V),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...n})})).ok)t(""),a({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(O){console.error("Error submitting form:",O),d({type:"error",message:"There was an error submitting the form. Please try again."})}},j={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},L={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.7,ease:ae}}},M={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:ae}},focus:{scale:1.02,transition:{duration:.2}}},E={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ae}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return f.jsxs(f.Fragment,{children:[f.jsxs(wV,{children:[f.jsxs(f5,{children:[f.jsxs(Vf,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,children:f.jsxs(bV,{children:[" ",f.jsx("span",{children:"Contact"})," our team"]})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.1},children:f.jsx(fc,{children:"We love our customers, so feel free to call during normal business hours"})})]})," ",f.jsx(B.div,{variants:E,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(SV,{children:f.jsx(CV,{children:"Call Us for Fast Repair"})})})}),f.jsxs(f5,{children:[f.jsx(TV,{}),f.jsxs(EV,{children:[f.jsxs(p5,{width:"251px",children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,children:f.jsx(h5,{children:"Service Hours"})}),f.jsx(Vf,{children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.2},children:f.jsxs(fc,{children:["Mon–Sat: 8AM–6PM ",f.jsx("br",{})," Sun: 9AM–4PM"," "]})})})]}),f.jsxs(p5,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.3},children:f.jsx(h5,{children:"Our Location"})}),f.jsxs(Vf,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.4},children:f.jsxs("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:[" ",f.jsx(fc,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.5},children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(fc,{children:"+1 (805) 500-2705"})})})]})]})]})]})]}),f.jsx(B.div,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},children:f.jsxs(mV,{onSubmit:S,children:[f.jsx(B.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,ease:ae},children:f.jsx(jV,{src:hV,alt:"contact image"})}),f.jsx(fn,{children:"What service do you need for your appliances?"}),f.jsxs(gV,{children:[f.jsx(B.div,{variants:M,whileHover:"hover",children:f.jsxs(c5,{style:o.service?{borderColor:"red"}:{},children:[f.jsx(u5,{name:"service",value:"Repair",checked:e==="Repair",onChange:T=>t(T.target.value)}),f.jsx(d5,{checked:e==="Repair"}),"Repair"]})}),f.jsx(B.div,{variants:M,transition:{delay:.1},whileHover:"hover",children:f.jsxs(c5,{style:o.service?{borderColor:"red"}:{},children:[f.jsx(u5,{name:"service",value:"Installation",checked:e==="Installation",onChange:T=>t(T.target.value)}),f.jsx(d5,{checked:e==="Installation"}),"Installation"]})})]}),f.jsxs(AV,{children:[f.jsxs(MV,{children:[f.jsx(fn,{children:"Name"}),f.jsx(B.div,{variants:M,transition:{delay:.2},whileFocus:"focus",children:f.jsx(kf,{name:"name",type:"text",placeholder:"Your Name",value:n.name,onChange:y,style:o.name?{borderBottom:"1px solid red"}:{}})}),f.jsx(fn,{children:"Email"}),f.jsx(B.div,{variants:M,transition:{delay:.3},whileFocus:"focus",children:f.jsx(kf,{name:"email",type:"email",placeholder:"Your Email",value:n.email,onChange:y,style:o.email?{borderBottom:"1px solid red"}:{}})}),f.jsx(fn,{children:"Phone Number"}),f.jsx(B.div,{variants:M,transition:{delay:.4},whileFocus:"focus",children:f.jsx(kf,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:n.phone,onChange:y,style:o.phone?{borderBottom:"1px solid red"}:{}})})]}),f.jsxs(LV,{children:[f.jsx(fn,{children:"In what location do you need the service?"}),f.jsx(B.div,{variants:M,transition:{delay:.5},whileFocus:"focus",children:f.jsx(uc,{children:f.jsxs(dc,{name:"location",value:n.location,onChange:y,style:o.location?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select location"}),f.jsx("option",{children:"Malibu"}),f.jsx("option",{children:"Los Angeles County"}),f.jsx("option",{children:"Thousand Oaks"}),f.jsx("option",{children:"Newbury Park"}),f.jsx("option",{children:"Westlake Village"}),f.jsx("option",{children:"Oak Park"}),f.jsx("option",{children:"Lake Sherwood"}),f.jsx("option",{children:"Hidden Valley"}),f.jsx("option",{children:"Camarillo"}),f.jsx("option",{children:"Agoura Hills"}),f.jsx("option",{children:"Moorpark"}),f.jsx("option",{children:"Calabasas"}),f.jsx("option",{children:"Santa Rosa Valley"}),f.jsx("option",{children:"Other"})]})})}),f.jsx(fn,{children:"What do you need repaired?"}),f.jsx(B.div,{variants:M,transition:{delay:.6},whileFocus:"focus",children:f.jsx(uc,{children:f.jsxs(dc,{name:"appliance",value:n.appliance,onChange:y,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select appliance"}),f.jsx("option",{children:"Cooktop"}),f.jsx("option",{children:"Oven"}),f.jsx("option",{children:"Range"}),f.jsx("option",{children:"Washer"}),f.jsx("option",{children:"Refrigerator"}),f.jsx("option",{children:"Microwave"}),f.jsx("option",{children:"Dishwasher"}),f.jsx("option",{children:"Dryer"}),f.jsx("option",{children:"Washing Machine"}),f.jsx("option",{children:"Freezer"}),f.jsx("option",{children:"Stove"}),f.jsx("option",{children:"Wine Cooler"}),f.jsx("option",{children:"Other"})]})})}),f.jsx(fn,{children:"Brand of appliance"}),f.jsx(B.div,{variants:M,transition:{delay:.7},whileFocus:"focus",children:f.jsx(uc,{children:f.jsxs(dc,{name:"brand",value:n.brand,onChange:y,style:o.brand?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select brand"}),f.jsx("option",{children:"LG"}),f.jsx("option",{children:"Samsung"}),f.jsx("option",{children:"Whirlpool"}),f.jsx("option",{children:"Bosch"}),f.jsx("option",{children:"GE"}),f.jsx("option",{children:"Frigidaire"}),f.jsx("option",{children:"Maytag"}),f.jsx("option",{children:"KitchenAid"}),f.jsx("option",{children:"Viking"}),f.jsx("option",{children:"Fisher & Paykel"}),f.jsx("option",{children:"Amana"}),f.jsx("option",{children:"JennAir"}),f.jsx("option",{children:"Haier"}),f.jsx("option",{children:"Sharp"}),f.jsx("option",{children:"Electrolux"}),f.jsx("option",{children:"Sub-Zero"}),f.jsx("option",{children:"Thermador"}),f.jsx("option",{children:"Wolf"}),f.jsx("option",{children:"Other"})]})})})]})]}),f.jsx(fn,{children:"What type of power does this appliance use?"}),f.jsx(B.div,{variants:M,transition:{delay:.8},whileFocus:"focus",children:f.jsx(uc,{children:f.jsxs(dc,{name:"power",value:n.power,onChange:y,style:o.power?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select power"}),f.jsx("option",{children:"Electric"}),f.jsx("option",{children:"Gas"}),f.jsx("option",{children:"Dual Fuel"}),f.jsx("option",{children:"Induction"}),f.jsx("option",{children:"Solar"}),f.jsx("option",{children:"Propane"}),f.jsx("option",{children:"Natural Gas"}),f.jsx("option",{children:"Other"})]})})}),f.jsx(fn,{children:"Any details you'd like to add?"}),f.jsx(B.div,{variants:M,transition:{delay:.9},whileFocus:"focus",children:f.jsx(xV,{name:"details",placeholder:"Any details you'd like to add?",value:n.details,onChange:y})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:1},children:f.jsxs(yV,{children:['By clicking "Submit" you hereby agree to our'," ",f.jsx("span",{onClick:g,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]})}),f.jsx(B.div,{variants:E,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:1.1},whileHover:"hover",whileTap:"tap",children:f.jsx(vV,{type:"submit",children:"Submit"})})]})}),f.jsx(Yh,{children:u&&f.jsx(pV,{type:u.type,message:u.message,onClose:()=>d(null)})})]})," ",p&&f.jsx(g8,{onClick:v,children:f.jsxs(x8,{onClick:T=>T.stopPropagation(),children:[f.jsx(v8,{onClick:v,children:"×"}),f.jsx(y8,{})]})})]})},mV=w.form`
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
`,fn=w.label`
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
`,gV=w.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,c5=w.label`
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
`,u5=w.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,d5=w.span`
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
`,kf=w.input`
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
`,uc=w.div`
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
`,dc=w.select`
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
`,xV=w.textarea`
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
`,vV=w.button`
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
`,yV=w.p`
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
`,wV=w.div`
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
`,f5=w.div`
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
`,Vf=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bV=w.p`
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
`,fc=w.p`
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
`,SV=w.button`
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
`,CV=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,TV=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EV=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,p5=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,h5=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jV=w.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,AV=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,MV=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,LV=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,m5="/assets/Ellipse%204aleksey-FxWBDF7j.png",g5="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",x5="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",v5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",y5="/assets/Review%20Image-alexey-BS9M-VaX.png",w5="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",b5="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",S5="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",pc=[{avatar:m5,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:y5},{avatar:g5,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:w5},{avatar:x5,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:b5},{avatar:v5,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:S5},{avatar:m5,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:y5},{avatar:g5,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:w5},{avatar:x5,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:b5},{avatar:v5,name:"Elizabeth Castorena",time:"a week ago",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:S5}],C5={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},Hf={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:ae}},hover:{y:-5,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.1)",transition:{duration:.3,ease:ae}}},Df={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:ae}},hover:{scale:1.1,rotate:5,transition:{duration:.2}}},zf={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ae}},hover:{scale:1.05,transition:{duration:.4}}},OV=w.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,RV=w.h2`
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
`,kV=w.p`
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
`,VV=w.div`
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
`,Pf=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${e=>e.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%;
    display: block;
  }
`,Nf=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px;
`,$f=w.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,Bf=w.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,If=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Uf=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,_f=w.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,Gf=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,qf=w.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,Yf=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Ff=w.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Eu=()=>{const[,e]=He.useState(!1),t=He.useRef(null),n=He.useRef(null),a=He.useRef(null),o=De({query:"(min-width: 768px)"}),l=De({query:"(min-width: 1440px)"});return f.jsxs("div",{children:[f.jsxs(OV,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:C5,children:f.jsx(kV,{children:"Your Feedback Matters"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:C5,transition:{delay:.1},children:f.jsxs(RV,{children:["Discover why clients ",f.jsx("span",{children:" trust "})," our repairs"]})})]}),f.jsxs(VV,{ref:a,children:[f.jsxs(Pf,{$isVisible:!0,children:[f.jsx(Yf,{}),f.jsx(Ff,{}),f.jsx(Gt,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:4e3,loop:!0,modules:[si],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:pc.map((u,d)=>f.jsx(qt,{children:f.jsx(B.div,{variants:Hf,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(Nf,{children:[f.jsxs($f,{children:[f.jsx(B.div,{variants:Df,whileHover:"hover",children:f.jsx(Bf,{src:u.avatar,alt:u.name})}),f.jsxs(If,{children:[f.jsx(B.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:f.jsx(Uf,{children:u.name})}),f.jsx(B.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:f.jsx(_f,{children:u.time})})]})]}),f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:f.jsx(Gf,{children:u.text})}),f.jsx(B.div,{variants:zf,whileHover:"hover",children:f.jsx(qf,{src:u.image,alt:`Review by ${u.name}`})})]})})},`top-${d}`))})]}),f.jsxs(Pf,{$isVisible:o,children:[f.jsx(Yf,{}),f.jsx(Ff,{}),f.jsx(Gt,{ref:n,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,reverseDirection:!0},speed:2e3,loop:!0,modules:[si],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,initialSlide:pc.length-1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:pc.map((u,d)=>f.jsx(qt,{children:f.jsx(B.div,{variants:Hf,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(Nf,{children:[f.jsxs($f,{children:[f.jsx(B.div,{variants:Df,whileHover:"hover",children:f.jsx(Bf,{src:u.avatar,alt:u.name})}),f.jsxs(If,{children:[f.jsx(B.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:f.jsx(Uf,{children:u.name})}),f.jsx(B.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:f.jsx(_f,{children:u.time})})]})]}),f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:f.jsx(Gf,{children:u.text})}),f.jsx(B.div,{variants:zf,whileHover:"hover",children:f.jsx(qf,{src:u.image,alt:`Review by ${u.name}`})})]})})},`bottom-${d}`))})]}),l&&f.jsxs(Pf,{$isVisible:!0,children:[f.jsx(Yf,{}),f.jsx(Ff,{}),f.jsx(Gt,{direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:6e3,loop:!0,modules:[si],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:pc.map((u,d)=>f.jsx(qt,{children:f.jsx(B.div,{variants:Hf,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(Nf,{children:[f.jsxs($f,{children:[f.jsx(B.div,{variants:Df,whileHover:"hover",children:f.jsx(Bf,{src:u.avatar,alt:u.name})}),f.jsxs(If,{children:[f.jsx(B.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:f.jsx(Uf,{children:u.name})}),f.jsx(B.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:f.jsx(_f,{children:u.time})})]})]}),f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:f.jsx(Gf,{children:u.text})}),f.jsx(B.div,{variants:zf,whileHover:"hover",children:f.jsx(qf,{src:u.image,alt:`Review by ${u.name}`})})]})})},`desktop-${d}`))})]})]})]})},HV="/assets/Hero%20Image-CELmD3oB.png",s1="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Jc="/assets/2-lv1xptCk.svg",o1="/assets/3-xYBlE7jA.svg",l1="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",c1="/assets/5-DtA_MHfM.svg",u1="/assets/6-BYfTVs51.svg",d1="/assets/7-DtKFqDn5.svg",f1="/assets/8-C9mdpuht.svg",p1="/assets/9-1he0Czj8.svg",h1="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",m1="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",g1="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",x1="/assets/13-_M_Krupi.svg",v1="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",y1="/assets/15-VL89vzXY.svg",w1="/assets/16-D9KRuHZe.svg",b1="/assets/17-BRD6G3-l.svg",S1="/assets/18-D69HL7ID.svg",C1="/assets/19-Dos04ydj.svg",T1="/assets/21-BwEZSGFZ.svg",E1="/assets/22-CQ_f5juP.svg",j1="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",A1="/assets/24-Dmws8xhr.svg",M1="/assets/25-BaRLqQy_.svg",L1="/assets/26-B2H6SqHt.svg",O1="/assets/27-DBraEacE.svg",R1="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",k1="/assets/29-yivH26vR.svg",V1="/assets/30-DGc1459t.svg",H1="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",DV=[{id:1,imageUrl:s1},{id:2,imageUrl:Jc},{id:3,imageUrl:o1},{id:4,imageUrl:l1},{id:5,imageUrl:c1},{id:6,imageUrl:u1},{id:7,imageUrl:d1},{id:8,imageUrl:f1},{id:9,imageUrl:p1},{id:10,imageUrl:h1},{id:11,imageUrl:m1},{id:12,imageUrl:g1},{id:13,imageUrl:x1},{id:14,imageUrl:v1},{id:15,imageUrl:y1},{id:16,imageUrl:w1},{id:17,imageUrl:b1},{id:18,imageUrl:S1},{id:19,imageUrl:C1},{id:20,imageUrl:Jc},{id:21,imageUrl:T1},{id:22,imageUrl:E1},{id:23,imageUrl:j1},{id:24,imageUrl:A1},{id:25,imageUrl:M1},{id:26,imageUrl:L1},{id:27,imageUrl:O1},{id:28,imageUrl:R1},{id:29,imageUrl:k1},{id:30,imageUrl:V1},{id:31,imageUrl:H1}],zV=w.div`
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
`,PV=w.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,NV=w(Gt)`
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
`,$V=()=>f.jsx(zV,{children:f.jsx(NV,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[si],grabCursor:!1,allowTouchMove:!1,children:DV.map(e=>f.jsx(qt,{children:f.jsx(PV,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),T5={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},E5={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,delay:.3,ease:wi}}},BV=()=>{const e=De({query:"(min-width: 1440px)"}),{scrollY:t}=Xr(),n=vt(t,[0,500],[0,80]),a=vt(t,[0,300],[1,.9]),o=vt(t,[0,400],[1,1.03]),l=vt(t,[0,600],[0,-2]);return f.jsxs(CO,{id:"hero",children:[f.jsx(B.div,{style:{y:n,opacity:a,scale:o,rotate:l},children:f.jsx(TO,{src:HV,alt:"Hero Image",style:{transformStyle:"preserve-3d",transform:"translateZ(0)"}})}),e&&f.jsx(B.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,delay:.5,ease:ae},children:f.jsx($V,{})}),f.jsxs(EO,{children:[f.jsxs(jO,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:T5,children:f.jsx(AO,{children:"Your Local Appliance Repair & Maintenance Specialists"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:T5,transition:{delay:.2},children:f.jsx(MO,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})})]}),f.jsxs(LO,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:E5,children:f.jsx(m8,{to:"/contact#ap",children:"Contact Us"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:E5,transition:{delay:.1},children:f.jsx(Lv,{children:f.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})})]})]})]})},IV="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",UV="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",_V="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",GV="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",j5=[{img:IV,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:UV,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:_V,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:GV,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],A5={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},qV={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:ae}},hover:{y:-10,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ae}}},YV={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ae}},hover:{scale:1.05,transition:{duration:.4}}},M5={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ae}}},FV=()=>{const e=R.useRef(null),t=De({query:"(max-width: 767px)"}),n=De({query:"(min-width: 768px)"}),a=De({query:"(min-width: 1440px)"}),o=t?1:2,l=j5.length>o;return f.jsxs(JV,{children:[f.jsxs(eH,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:A5,children:f.jsx(tH,{children:"NEWS & TIPS"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:A5,transition:{delay:.1},children:f.jsxs(iH,{children:["APPLIANCE ",f.jsx("span",{children:"ADVICE"})," REPAIR ",f.jsx("span",{children:"TIPS"})," BLOG"]})})]}),f.jsxs(QV,{children:[f.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:.2},children:f.jsx(L5,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:.2,delay:.1},children:f.jsx(L5,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),f.jsx(XV,{$isTablet:n,children:f.jsx(Gt,{modules:[a1,si],onSwiper:u=>e.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:j5.map((u,d)=>f.jsx(qt,{children:f.jsx(B.div,{variants:qV,whileInView:"visible",viewport:{once:!1,amount:.2},transition:{delay:d*.1},children:f.jsxs(nH,{$isTablet:n,children:[f.jsx(B.div,{variants:YV,whileHover:"hover",children:f.jsx(aH,{src:u.img,alt:u.title,$isTablet:n})}),f.jsxs(rH,{children:[f.jsx(B.div,{variants:M5,transition:{delay:d*.1+.1},children:f.jsx(sH,{$isTablet:n,children:u.title})}),f.jsx(B.div,{variants:M5,transition:{delay:d*.1+.2},children:f.jsx(oH,{$isTablet:n,children:u.description})})]})]})})},d))})})]})},XV=w.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,ZV=Qe`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,WV=Qe`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,KV=Qe`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,QV=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,L5=w.button`
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
    animation: ${ZV} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&Ft`
      background-color: #c8c8c5;
      svg {
        animation: ${WV} 0.4s ease;
      }
    `}

    ${e=>e.bg==="#3098EE"&&Ft`
      background-color: #2580d6;
      svg {
        animation: ${KV} 0.4s ease;
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
`,JV=w.div`
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
`,eH=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,tH=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,iH=w.p`
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
`,nH=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${e=>e.$isTablet?"100%":"288px"};
  height: 517px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    max-width: ${e=>e.$isTablet?"100%":"288px"};
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  }
`,aH=w.img`
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
`,rH=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
   border-radius: 10px;
`,sH=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,oH=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,lH=w.div`
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
`;const O5=w.img`
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
`,cH=w(B.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,uH=w(B.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,dH=w.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,$8="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",B8=()=>{const e=De({query:"(max-width: 743px)"}),t=De({query:"(min-width: 744px) and (max-width: 1023px)"}),n=De({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:s1},{id:2,imageUrl:Jc},{id:3,imageUrl:o1},{id:4,imageUrl:l1},{id:5,imageUrl:c1},{id:6,imageUrl:u1},{id:7,imageUrl:d1},{id:8,imageUrl:f1},{id:9,imageUrl:p1},{id:10,imageUrl:h1},{id:11,imageUrl:m1},{id:12,imageUrl:g1},{id:13,imageUrl:x1},{id:14,imageUrl:v1},{id:15,imageUrl:y1},{id:16,imageUrl:w1},{id:17,imageUrl:b1},{id:18,imageUrl:S1},{id:19,imageUrl:C1},{id:20,imageUrl:$8},{id:21,imageUrl:T1},{id:22,imageUrl:E1},{id:23,imageUrl:j1},{id:24,imageUrl:A1},{id:25,imageUrl:M1},{id:26,imageUrl:L1},{id:27,imageUrl:O1},{id:28,imageUrl:R1},{id:29,imageUrl:k1},{id:30,imageUrl:V1},{id:31,imageUrl:H1}],o=e?2:t?4:5,l=a.length>o,u={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},d={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:ae}},hover:{scale:1.1,y:-5,transition:{duration:.3,ease:ae}}};return f.jsxs("div",{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(dH,{children:"Quality Service for Major & Luxury Brands"})}),f.jsxs(lH,{children:[f.jsx(cH,{}),f.jsx(Gt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[si],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map((p,m)=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:d,transition:{delay:m*.05},whileHover:"hover",children:f.jsx(O5,{src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy"})})},p.id))}),f.jsx(Gt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[si],className:"mySwiper",style:{width:"100%"},children:a.map((p,m)=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:d,transition:{delay:m*.05+.1},whileHover:"hover",children:f.jsx(O5,{src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy"})})},p.id+100))}),f.jsx(uH,{})]})]})},I8="/assets/ServicesImage-BRQYmF9y.png",fH=w.div`
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
`,pH=w.p`
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
`,hH=w.div`
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
`,mH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,R5=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gH=w.p`
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
`,xH=w.p`
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
`,k5=w.p`
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
`,vH=w.p`
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
`,yH=w.img`
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
`,V5=w.div`
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
`,H5=w.p`
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
`,qp=w(Ct)`
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
`,D5=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${qp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wH=w.div`
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
`,bH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,SH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,CH=w.p`
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
`,TH=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EH=w(Ct)`
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
`,D1=w.button`
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
`,U8=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${D1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jH=w(U8)`
  color: #242424;

  ${D1}:hover & {
    color: white;
  }
`,AH=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Xf={hidden:{opacity:0,y:60,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:ae}}},Zf={hidden:{opacity:0,x:-80,rotate:-2},visible:{opacity:1,x:0,rotate:0,transition:{duration:.9,ease:ae}}},hc={hidden:{opacity:0,x:80,scale:1.05},visible:{opacity:1,x:0,scale:1,transition:{duration:.9,ease:ae}}},MH={hidden:{opacity:0,scale:.9,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1.1,ease:Mh}}},LH={visible:{transition:{staggerChildren:.15}}},OH=()=>{const e=De({query:"(min-width: 1440px)"}),{scrollY:t}=Xr(),n=vt(t,[0,500],[0,-50]),a=vt(t,[0,400],[1,1.02]);return f.jsxs(fH,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:Xf,children:f.jsx(pH,{children:"Our Service"})}),f.jsxs(hH,{children:[f.jsxs(mH,{children:[f.jsxs(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:LH,children:[f.jsx(B.div,{variants:Zf,children:f.jsxs(R5,{children:[f.jsx(gH,{children:"01."}),f.jsx(xH,{children:"Appliance Care & Tune-Ups"})]})}),f.jsx(B.div,{variants:Zf,transition:{delay:.1},children:f.jsx(k5,{children:"Professional Installations"})}),f.jsx(B.div,{variants:Zf,transition:{delay:.2},children:f.jsx(k5,{children:"Fast & Reliable Emergency Repairs"})})]}),e&&f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Xf,transition:{delay:.4},children:f.jsxs(V5,{children:[f.jsx(H5,{children:"Do you want to know more about our service?"}),f.jsx(qp,{to:"/fridge#ap",children:f.jsx(D5,{children:"Learn more"})})]})})]}),f.jsxs(AH,{children:[f.jsx(B.div,{style:{y:n,scale:a},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:MH,children:f.jsx(yH,{src:I8,alt:"Services Image"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:hc,children:f.jsxs(wH,{children:[f.jsxs(bH,{children:[f.jsx(B.div,{variants:hc,transition:{delay:.1},children:f.jsx(R5,{children:f.jsx(vH,{children:"Preventive Care"})})}),f.jsx(B.div,{variants:hc,transition:{delay:.2},children:f.jsx(SH,{children:f.jsx(CH,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),f.jsx(B.div,{variants:hc,transition:{delay:.3},children:f.jsxs(TH,{children:[f.jsx(EH,{to:"/contact#ap",children:f.jsx(U8,{children:"Contact Us"})}),f.jsx(D1,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(jH,{children:"Call Us"})})})]})})]})})]}),!e&&f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Xf,children:f.jsxs(V5,{children:[f.jsx(H5,{children:"Do you want to know more about our service?"}),f.jsx(qp,{to:"/fridge#ap",children:f.jsx(D5,{children:"Learn more"})})]})})]})]})},RH="/assets/Service%20Area%20Section-B7et7wWI.webp",kH=w.div`
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
`,VH=w.h2`
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
`,HH=w.p`
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
`,DH=w.div`
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
`,zH=w.div`
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
`,PH=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,NH=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$H=w.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,BH=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,IH=[{county:"Ventura County",city:"Thousand Oaks",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],z5={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},UH={hidden:{opacity:0,y:50,scale:.9,rotateX:-5},visible:e=>({opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.6,delay:e*.1,ease:ae}}),hover:{y:-10,scale:1.05,rotateY:5,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ae}},tap:{scale:.98}},_H={hidden:{opacity:0,scale:.8,rotate:-90},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:wi}},hover:{scale:1.2,rotate:5,transition:{duration:.2}}},GH=()=>f.jsxs(kH,{$bg:RH,children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:z5,children:f.jsx(VH,{children:"Serving Ventura and Los Angeles Counties"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:z5,transition:{delay:.1},children:f.jsx(HH,{children:"We provide expert service throughout the greater Los Angeles area."})}),f.jsx(DH,{children:IH.map((e,t)=>f.jsx(B.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:UH,whileHover:"hover",whileTap:"tap",children:f.jsxs(zH,{children:[f.jsxs(PH,{children:[f.jsx(B.div,{variants:_H,whileHover:"hover",children:f.jsx(NH,{children:e.icon})}),f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.2},children:f.jsx($H,{children:e.county})})]}),f.jsx(B.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.3},children:f.jsx(BH,{children:e.city})})]})},t))})]}),qH="/assets/WhyAirtexnoImage-BBTHkk8n.png",P5="/assets/WhyAirtexnoImage2-BIh43Sbv.png",YH="/assets/WhyAirtexnoImage3-C5uIh3SS.png",Wf="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",FH="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",XH=()=>{const e=De({query:"(max-width: 743px)"}),t=De({query:"(min-width: 744px) and (max-width: 1023px)"}),n=De({query:"(min-width: 1024px)"}),a=De({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:qH,icon:Wf},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:P5,icon:FH},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:YH,icon:Wf},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:P5,icon:Wf}],l=e?1:t?2:3,u=o.length>l,d={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},p={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ae}}};return f.jsxs(Jk,{children:[f.jsxs(eV,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(tV,{children:"why airtexno"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.1},children:f.jsxs(iV,{children:["Same-Day Appliance Repair ",f.jsx(P8,{children:"You Can Rely On"})," "]})})]}),f.jsx(uV,{children:f.jsx(aV,{$isLargeDesktop:a,children:f.jsx(Gt,{modules:[pR,si],pagination:{clickable:!0},spaceBetween:a?0:20,loop:u,slidesPerView:l,centeredSlides:a,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((m,g)=>f.jsx(qt,{children:f.jsx(sV,{style:{backgroundImage:`url(${m.image})`},$isLargeDesktop:a,className:"slide-container",children:(m.title||m.text||m.icon)&&f.jsxs(B.div,{className:"overlay",initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:p,whileHover:{scale:1.02,transition:{duration:.3}},children:[(m.title||m.icon)&&f.jsxs(oV,{children:[m.title&&f.jsx(B.div,{variants:d,children:f.jsx(nV,{children:m.title})}),m.icon&&f.jsx(B.div,{variants:d,transition:{delay:.2},children:f.jsx(lV,{className:"icon-wrapper",children:f.jsx("img",{src:m.icon,alt:m.title||"icon",className:"icon-image"})})})]}),m.text&&f.jsx(B.div,{variants:d,transition:{delay:.3},children:f.jsx(cV,{className:"slide-text",children:m.text})})]})})},g))})})})]})},ZH=w.div`
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
`,Kf=()=>f.jsx(f.Fragment,{children:f.jsxs(ZH,{id:"hero",children:[f.jsx(BV,{}),f.jsx(OH,{}),f.jsx(XH,{}),f.jsx(N8,{}),f.jsx(GH,{}),f.jsx(B8,{}),f.jsx(Eu,{}),f.jsx(FV,{}),f.jsx(Tu,{})]})}),WH=w.div`
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
  `,KH="/assets/Team%20Member%20Image-mppsJqlp.png",QH="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",JH=Qe`
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
`,eD=Qe`
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
`,tD=Qe`
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
`,Yp=w.p`
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
`,iD=w.button`
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
      ${eD} 1s ease,
      ${tD} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${JH} 1s ease;
    }

    ${Yp} {
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

    &:hover ${Yp} {
      transform: translateX(3px);
    }
  }
`,nD=w.div`
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
`,aD=w.div`
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
`,rD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,sD=w.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,oD=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,lD=w.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,cD=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,uD=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,dD=w.div`
  position: relative;
  width: 44px;
  height: 44px;
`,fD=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,pD=w.p`
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
const hD=w.div`
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
`,mD=w.h2`
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
`;const gD=w.div`
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
`,xD=w.button`
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
`,vD=w.div`
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
`,yD=w.img.attrs(()=>({}))`
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
`,wD=w.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,bD=w.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,z1=()=>{const[e,t]=R.useState(null),n=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],a=y=>{t(C=>C===y?null:y)},o={hidden:{opacity:0,scale:.8,rotate:-20,x:-50},visible:{opacity:1,scale:1,rotate:0,x:0,transition:{duration:1.2,ease:wi,delay:.2}},hover:{scale:1.05,rotate:5,transition:{duration:.4,ease:ae}}},l={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ae,delay:.4}},hover:{scale:1.1,boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:ae}},tap:{scale:.95}},u={hidden:{opacity:0,y:30,rotate:-5},visible:{opacity:1,y:0,rotate:0,transition:{duration:.9,ease:wi,delay:.6}},hover:{y:-5,rotate:2,transition:{duration:.3,ease:ae}}},d={hidden:{opacity:0,x:-100,rotate:-10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ae}}},p={hidden:{opacity:0,x:100,rotate:10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ae}}},m={hidden:{opacity:0,height:0,scale:.9},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:ae}}},g={hidden:{opacity:0,y:-30,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,y:0,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 30px rgba(48, 152, 238, 0.8)","0 0 15px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ae,delay:.1}}},v=y=>y*.15;return f.jsxs(nD,{children:[f.jsxs(aD,{children:[f.jsxs(rD,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,whileHover:"hover",children:f.jsx(sD,{src:KH,alt:"Team Member Image"})}),f.jsxs(oD,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,children:f.jsx(lD,{children:"Book a Call"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,transition:{delay:.2},children:f.jsx(cD,{children:"Time to get introduced and explore how we can help"})}),f.jsx(B.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx("a",{href:"tel:+18055002705",children:f.jsxs(iD,{children:[f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx(Yp,{children:"Call us now"})]})})})]})]}),f.jsx(uD,{children:f.jsxs(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,whileHover:"hover",children:[f.jsxs(dD,{children:[f.jsx(fD,{}),f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:f.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),f.jsxs(pD,{children:["Prefer email communication?",f.jsx("br",{}),f.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})})]}),f.jsxs(hD,{children:[f.jsx(wD,{children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,children:f.jsx(mD,{children:"Frequently Asked Questions"})})}),f.jsx(bD,{children:n.map((y,C)=>f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:C%2===0?d:p,transition:{delay:v(C)},children:f.jsxs(gD,{children:[f.jsxs(xD,{onClick:()=>a(C),children:[y.question,f.jsx(yD,{src:QH,alt:"Toggle answer",$rotate:e===C})]}),f.jsx(B.div,{initial:"hidden",animate:e===C?"visible":"hidden",variants:m,style:{overflow:"hidden"},children:f.jsx(vD,{$isOpen:e===C,children:y.answer})})]})},C))})]})]})},SD=w.div`
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
`,CD=w.img`
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
`,TD=w.div`
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
`,ED=w.div`
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
`,jD=w.p`
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
`,AD=w.p`
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
`;w(Ct)`
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
`;Qe`
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
`;const MD="/assets/HeroImage2About-CoU9D2Tq.png",LD=()=>{const{scrollY:e}=Xr(),t=vt(e,[0,500],[0,150]),n=vt(e,[0,400],[1,1.1]),a=vt(e,[0,600],[0,-3]),o=vt(e,[0,300],[0,50]),l=vt(e,[0,200],[1,.8]),u={hidden:{opacity:0,x:-100,skewX:15},visible:{opacity:1,x:0,skewX:0,transition:{duration:1.2,ease:ae,delay:.5}}},d={hidden:{opacity:0,y:50,scaleY:0,filter:"blur(10px)"},visible:{opacity:1,y:0,scaleY:1,filter:"blur(0px)",transition:{duration:.8,ease:Ic,delay:.8}}},p={hidden:{opacity:0,y:80,rotateX:10},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1,ease:Ic,delay:.3}}},m={hidden:{opacity:0,scale:0,rotate:0},visible:{opacity:1,scale:1,rotate:360,transition:{duration:1.5,ease:ae,delay:1}}};return f.jsxs(SD,{id:"ap",children:[f.jsx(B.div,{style:{position:"absolute",top:"20%",left:"10%",width:"8px",height:"8px",background:"rgba(48, 152, 238, 0.6)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3}}),f.jsx(B.div,{style:{position:"absolute",top:"60%",right:"15%",width:"12px",height:"12px",background:"rgba(48, 152, 238, 0.4)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.5}}),f.jsx(B.div,{style:{position:"absolute",bottom:"30%",left:"20%",width:"6px",height:"6px",background:"rgba(48, 152, 238, 0.3)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.8}}),f.jsx(B.div,{style:{y:t,scale:n,rotate:a},children:f.jsx(CD,{src:MD,alt:"Hero Image"})}),f.jsx(B.div,{style:{y:o,opacity:l},children:f.jsx(TD,{children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:p,children:f.jsxs(ED,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(AD,{children:"About Our Company and Team"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(jD,{children:"Fast, affordable, and trusted service"})})]})})})}),f.jsx(B.div,{style:{position:"absolute",top:"10%",right:"5%",width:"2px",height:"100px",background:"linear-gradient(to bottom, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,height:0},whileInView:{opacity:1,height:100},viewport:{once:!1,amount:.3},transition:{duration:1,delay:1.2}}),f.jsx(B.div,{style:{position:"absolute",bottom:"15%",left:"5%",width:"100px",height:"2px",background:"linear-gradient(to right, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,width:0},whileInView:{opacity:1,width:100},viewport:{once:!1,amount:.3},transition:{duration:1,delay:1.5}})]})},OD=w.section`
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
`,RD=w.div`
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
`,kD=w.h3`
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
`,Qf=w.span`
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
`,VD=w.div`
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
`,HD=w.div`
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
`,N5=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,DD=w.div`
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
`,zD=w.div`
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
`,$5=w.p`
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
`,PD=w.img`
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
`,ND=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,$D="/assets/Services%20Image-e7Omvubx.png",BD="/assets/Team%20Image-CG0rB-nI.png",ID=()=>{const e=De({query:"(min-width: 1440px)"}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ae}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ae}}},a={hidden:{opacity:0,x:30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ae}}};return f.jsxs(OD,{children:[f.jsx(RD,{children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,children:f.jsxs(kD,{children:["Our mission is to provide ",f.jsx(Qf,{children:"reliable"})," and ",f.jsx(Qf,{children:"efficient"}),"appliance repair services that improve",f.jsx(Qf,{children:"everyday "}),"life"," "]})})}),f.jsxs(ND,{children:[f.jsxs(DD,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:n,children:f.jsx("img",{src:$D,alt:"image"})}),f.jsxs(HD,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.2},children:f.jsx(N5,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.3},children:f.jsx(VD,{children:"Sanal Gariaev"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.4},children:f.jsx(N5,{children:"Chief Executive Officer"})})]}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.5},children:f.jsxs($5,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That's why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",f.jsx("br",{}),e&&f.jsxs(f.Fragment,{children:[f.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})]})})]}),f.jsxs(zD,{children:[!e&&f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.6},children:f.jsxs($5,{children:[f.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,transition:{delay:.7},children:f.jsx(PD,{src:BD,alt:"team"})})]})]})]})},UD=w.section`
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
`,_D=w.p`
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
`,GD=w.p`
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
`,qD=w.div`
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
`,YD=w.div`
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
`,FD=w.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,XD=w.div`
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
`,ZD=w.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,WD=w.p`
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
`,KD=w.div`
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
`,QD=w.p`
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
`,JD=w.p`
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
`,ez=w.img`
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
`,tz="/assets/ValueImage-GehUXRc0.png",iz="/assets/ValueImage1-XDPVu8iL.png",nz="/assets/ValueImage2-CBdwtolx.png",az="/assets/ValueImage3-4cmMPphm.png",rz=()=>{const e=u=>({__html:u}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n={hidden:{opacity:0,y:50},visible:u=>({opacity:1,y:0,transition:{duration:.7,delay:u*.1}})},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5}}},o={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.6,delay:.2}}},l=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:tz,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:iz,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:nz,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:az,alt:"Durable Repairs"}];return f.jsxs(UD,{children:[f.jsxs("div",{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:f.jsx(_D,{children:"Our Values"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:f.jsxs(GD,{children:["Core ",f.jsx("span",{children:"Principles"})," That Drive Us"]})})]}),f.jsx(qD,{children:l.map((u,d)=>f.jsx(B.div,{custom:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:f.jsxs(YD,{children:[f.jsx(FD,{}),f.jsxs(XD,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:f.jsx(ZD,{children:f.jsx(WD,{children:u.number})})}),f.jsxs(KD,{children:[f.jsx(QD,{dangerouslySetInnerHTML:e(u.title)}),f.jsx(JD,{children:u.description})]}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,children:f.jsx(ez,{src:u.image,alt:u.alt,loading:"lazy"})})]})]})},u.id))})]})},sz=w.div`
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
`,oz=w.p`
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
`,lz=w.p`
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
`,cz=w.div`
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
`,B5=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`,mc=w.img`
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
`,uz="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",dz="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",fz="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",pz="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",hz=()=>{const{scrollY:e}=Xr(),t=vt(e,[0,300],[0,50]),n=vt(e,[0,200],[1,.8]),a={hidden:{opacity:0,y:60,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:1.2,ease:ae}}},o={hidden:{opacity:0,scale:.8,borderRadius:"50%",filter:"blur(10px) grayscale(100%)"},visible:p=>({opacity:1,scale:1,borderRadius:"8px",filter:"blur(0px) grayscale(0%)",transition:{duration:1.4,delay:p*.2,ease:ae}}),hover:{scale:1.08,borderRadius:"4px",filter:"grayscale(0%) brightness(110%)",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.25)",zIndex:10,transition:{duration:.5,ease:ae}}},l={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:1,ease:ae,staggerChildren:.1}}},u={hidden:{opacity:0,scale:.5,color:"#000000"},visible:{opacity:1,scale:1,color:"#3098EE",transition:{duration:1.5,ease:ae,delay:.5}},hover:{scale:1.1,textShadow:"0 0 20px rgba(48, 152, 238, 0.8)",transition:{duration:.3,ease:ae}}},d={hidden:{opacity:0,y:80,rotateX:15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1.2,ease:ae}},hover:{y:-10,transition:{duration:.4,ease:ae}}};return f.jsxs(sz,{children:[f.jsxs(B.div,{style:{y:t,opacity:n},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:l,children:[f.jsx(B.div,{variants:a,children:f.jsx(oz,{children:"Meet the Team"})}),f.jsx(B.div,{variants:a,transition:{delay:.2},children:f.jsxs(lz,{children:["Professionals committed to"," ",f.jsx(B.span,{variants:u,whileHover:"hover",children:"quality"})," ","service"]})})]}),f.jsxs(cz,{children:[f.jsx(B.div,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(B5,{children:[f.jsx(B.div,{custom:0,variants:o,whileHover:"hover",children:f.jsx(mc,{src:uz,alt:"Team Member 1"})}),f.jsx(B.div,{custom:1,variants:o,whileHover:"hover",children:f.jsx(mc,{src:dz,alt:"Team Member 2"})})]})}),f.jsx(B.div,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},transition:{delay:.3},whileHover:"hover",children:f.jsxs(B5,{children:[f.jsx(B.div,{custom:2,variants:o,whileHover:"hover",children:f.jsx(mc,{src:fz,alt:"Team Member 3"})}),f.jsx(B.div,{custom:3,variants:o,whileHover:"hover",children:f.jsx(mc,{src:pz,alt:"Team Member 4"})})]})})]})]})},mz=()=>f.jsxs(WH,{children:[f.jsx(LD,{}),f.jsx(ID,{}),f.jsx(rz,{}),f.jsx(hz,{}),f.jsx(z1,{})]}),gz=w.div`
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
`;const xz=()=>f.jsxs(gz,{id:"ap",children:[f.jsx(Tu,{}),f.jsx(Eu,{})]}),vz=w.div`
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
`,yz=w.div`
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
`,wz=w.h2`
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
`,bz=w.div`
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
`,Sz=w(Ct)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,Cz=w.div`
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
`,Tz=w.img`
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
`,Ez=w.h3`
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
`,jz=w.p`
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
`,P1="/assets/News%20Article%202%20Image%20Container%20(3)-BFGlTi7O.png",N1="/assets/Image3-DVPHBget.png",_8="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",$1="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",B1="/assets/News%20Article%202%20Image%20Container%20(6)-CPLTzZXw.png",G8="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",Az=[{id:1,image:G8,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:N1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:_8,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:$1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:B1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:P1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],Mz={hidden:{opacity:0,y:50,scale:.8,rotate:-5},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:1,ease:wi}}},Lz={hidden:()=>({opacity:0,y:100,rotateX:-45,scale:.7,filter:"blur(10px)"}),visible:e=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:.8,delay:e*.15,ease:wi}}),hover:{y:-15,rotateY:5,scale:1.03,boxShadow:"0 25px 50px rgba(0,0,0,0.2)",transition:{duration:.3,ease:ae}},tap:{scale:.98}},Oz={hidden:{opacity:0,scale:1.3,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.2,ease:wi}},hover:{scale:1.1,rotate:2,transition:{duration:.4,ease:ae}}},Rz={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ae,delay:.2}},hover:{y:-5,transition:{duration:.2,ease:ae}}},kz=()=>{const{scrollY:e}=Xr(),t=vt(e,[0,500],[0,50]),n=vt(e,[0,300],[1,1.1]);return f.jsxs(yz,{id:"app",children:[f.jsx(B.div,{style:{y:t,scale:n},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Mz,children:f.jsxs(wz,{children:["News ",f.jsx("span",{children:"Tips"})," "]})}),f.jsx(bz,{children:Az.map((a,o)=>f.jsx(Sz,{to:a.path,children:f.jsx(B.div,{custom:o,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:Lz,whileHover:"hover",whileTap:"tap",children:f.jsxs(Cz,{children:[f.jsx(B.div,{variants:Oz,whileHover:"hover",children:f.jsx(Tz,{src:a.image,alt:a.title})}),f.jsx(B.div,{variants:Rz,whileHover:"hover",children:f.jsxs("div",{children:[f.jsx(Ez,{children:a.title}),f.jsx(jz,{children:a.description})]})})]})})},a.id))})]})},Vz=()=>f.jsx(vz,{id:"app",children:f.jsx(kz,{})}),Hz=w.div`
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
`,Dz=w.p`
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
`,zz=w.div`
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
`,Pz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,I5=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Nz=w.p`
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
`,$z=w.p`
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
`,U5=w.p`
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
`,Bz=w.p`
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
`,Iz=w.img`
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
`,_5=w.div`
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
`,G5=w.p`
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
`,Fp=w(Ct)`
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
`,q5=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Fp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Uz=w.div`
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
`,_z=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Gz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qz=w.p`
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
`,Yz=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Fz=w.button`
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
`,I1=w.button`
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
`,q8=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${I1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Xz=w(q8)`
  color: #242424;

  ${I1}:hover & {
    color: white;
  }
`,Zz=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Wz=()=>{const e=De({query:"(min-width: 1440px)"}),{scrollY:t}=Xr(),n=vt(t,[0,500],[0,100]),a=vt(t,[0,800],[0,-2]),o=vt(t,[0,400],[1,1.05]),l={hidden:{opacity:0,y:100,rotate:-10,scale:.8},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1.2,ease:ae,delay:.2}},hover:{y:-15,rotate:2,scale:1.05,transition:{duration:.4,ease:ae}}},u={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ae,delay:.1}}},d={hidden:{opacity:0,x:-50,skewX:-10},visible:{opacity:1,x:0,skewX:0,transition:{duration:.8,ease:wi}}},p={hidden:{opacity:0,rotateY:90,scale:.8},visible:{opacity:1,rotateY:0,scale:1,transition:{duration:1,ease:ae,delay:.3}},hover:{rotateY:5,scale:1.02,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ae}}},m={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ae}},hover:{scale:1.1,boxShadow:"0 0 30px rgba(48, 152, 238, 0.4)",transition:{duration:.3,ease:ae}},tap:{scale:.95}},g={hidden:{opacity:0,rotateX:45,scale:1.2},visible:{opacity:1,rotateX:0,scale:1,transition:{duration:1.4,ease:ae}},hover:{rotateX:5,rotateY:5,scale:1.05,transition:{duration:.5,ease:ae}}};return f.jsxs(Hz,{id:"all",children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(Dz,{children:"Our Service"})}),f.jsxs(zz,{children:[f.jsxs(Pz,{children:[f.jsxs(I5,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(Nz,{children:"01."})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.2},children:f.jsx($z,{children:"Appliance Care & Tune-Ups"})})]}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.3},children:f.jsx(U5,{children:"Professional Installations"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.4},children:f.jsx(U5,{children:"Fast & Reliable Emergency Repairs"})}),e&&f.jsxs(_5,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.5},children:f.jsx(G5,{children:"Do you want to know more about our service?"})}),f.jsx(B.div,{variants:m,whileTap:"tap",children:f.jsx(Fp,{to:"/fridge#ap",children:f.jsx(q5,{children:"Learn more"})})})]})]}),f.jsxs(Zz,{children:[f.jsx(B.div,{style:{y:n,rotate:a,scale:o},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,whileHover:"hover",children:f.jsx(Iz,{src:I8,alt:"Services Image"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:p,whileHover:"hover",children:f.jsxs(Uz,{children:[f.jsxs(_z,{children:[f.jsx(I5,{children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(Bz,{children:"Preventive Care"})})}),f.jsx(Gz,{children:f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.2},children:f.jsx(qz,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),f.jsxs(Yz,{children:[f.jsx(B.div,{variants:m,whileHover:"hover",whileTap:"tap",children:f.jsx(Fz,{children:f.jsx(q8,{children:"Contact Us"})})}),f.jsx(B.div,{variants:m,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:f.jsx(I1,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(Xz,{children:"Call Us"})})})})]})]})})]}),!e&&f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:l,children:f.jsxs(_5,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(G5,{children:"Do you want to know more about our service?"})}),f.jsx(B.div,{variants:m,whileHover:"hover",whileTap:"tap",children:f.jsx(Fp,{to:"/fridge#ap",children:f.jsx(q5,{children:"Learn more"})})})]})})]})]})},Kz="/assets/Image1-oNBiuIma.png",Qz="/assets/Image2-KhSZGRyT.png",Jz="/assets/Image4-CFM8TNdX.png",eP="/assets/Image5-CmBoV_wK.png",tP=w.div`
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
`;const gc=w.img`
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
`,iP=w(B.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,nP=w(B.div)`
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
`;const aP=()=>{const e=De({query:"(max-width: 743px)"}),t=De({query:"(min-width: 744px) and (max-width: 1023px)"}),n=De({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:s1},{id:2,imageUrl:Jc},{id:3,imageUrl:o1},{id:4,imageUrl:l1},{id:5,imageUrl:c1},{id:6,imageUrl:u1},{id:7,imageUrl:d1},{id:8,imageUrl:f1},{id:9,imageUrl:p1},{id:10,imageUrl:h1},{id:11,imageUrl:m1},{id:12,imageUrl:g1},{id:13,imageUrl:x1},{id:14,imageUrl:v1},{id:15,imageUrl:y1},{id:16,imageUrl:w1},{id:17,imageUrl:b1},{id:18,imageUrl:S1},{id:19,imageUrl:C1},{id:20,imageUrl:$8},{id:21,imageUrl:T1},{id:22,imageUrl:E1},{id:23,imageUrl:j1},{id:24,imageUrl:A1},{id:25,imageUrl:M1},{id:26,imageUrl:L1},{id:27,imageUrl:O1},{id:28,imageUrl:R1},{id:29,imageUrl:k1},{id:30,imageUrl:V1},{id:31,imageUrl:H1}],o=e?2:t?4:5,l=a.length>o;return f.jsxs("div",{children:[f.jsxs(tP,{children:[f.jsx(iP,{}),f.jsx(Gt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[si],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map(u=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?f.jsx(gc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):f.jsx(gc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),f.jsx(Gt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[si],className:"mySwiper",style:{width:"100%"},children:a.map(u=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:u.imageUrl?f.jsx(gc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"}):f.jsx(gc,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),f.jsx(nP,{})]})," "]})},Y5=[{img:Kz,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:Qz,title:"Washing Machine",description:"Restoring heating and control functions."},{img:N1,title:"Oven",description:"Fixing magnetron and door issues."},{img:Jz,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:eP,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],rP=()=>{const e=R.useRef(null),t=De({query:"(max-width: 767px)"}),n=De({query:"(min-width: 768px) and (max-width: 1439px)"}),a=De({query:"(min-width: 1440px)"}),o=t?1:n?3:4,l=Y5.length>o,u={hidden:{opacity:0,y:50,rotate:-5,scale:.9},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1,ease:ae,delay:.2}}},d={hidden:{opacity:0,y:100,rotateX:-45,scale:.8,filter:"blur(10px)"},visible:v=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:1.2,ease:ae,delay:v*.15}}),hover:{y:-20,rotateY:10,scale:1.05,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:ae}}},p={hidden:{opacity:0,scale:1.3,rotate:-5},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.5,ease:ae}},hover:{scale:1.1,rotate:2,transition:{duration:.6,ease:ae}}},m={hidden:{opacity:0,x:-50,y:30},visible:{opacity:1,x:0,y:0,transition:{duration:.8,ease:wi,delay:.3}},hover:{x:10,transition:{duration:.3}}},g={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:ae,delay:.5}},hover:{scale:1.15,rotate:5,boxShadow:"0 0 25px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:ae}},tap:{scale:.95,rotate:-2}};return f.jsxs(dP,{children:[f.jsxs(fP,{children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(pP,{children:"Our Equipment"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.1},children:f.jsxs(hP,{children:[f.jsx("span",{children:"Trusted"})," brands we service"]})})]}),f.jsx(aP,{}),f.jsxs(oP,{children:[f.jsx(B.div,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(F5,{onClick:()=>{var v;return(v=e.current)==null?void 0:v.slidePrev()},bg:"#DBDBD8",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(B.div,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(F5,{onClick:()=>{var v;return(v=e.current)==null?void 0:v.slideNext()},bg:"#3098EE",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),f.jsx(sP,{$isTablet:n,children:f.jsx(Gt,{modules:[a1,si],onSwiper:v=>e.current=v,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Y5.map((v,y)=>f.jsx(qt,{children:f.jsx(B.div,{custom:y,variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(mP,{$isTablet:n,children:[f.jsx(B.div,{variants:p,whileHover:"hover",children:f.jsx(gP,{src:v.img,alt:v.title,$isTablet:n})}),f.jsx(B.div,{variants:m,whileHover:"hover",children:f.jsxs(xP,{children:[f.jsx(vP,{$isTablet:n,children:v.title}),f.jsx(yP,{$isTablet:n,children:v.description})]})})]})})},y))})})]})},sP=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,oP=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,lP=Qe`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,cP=Qe`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,uP=Qe`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,F5=w.button`
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
    animation: ${lP} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&Ft`
      background-color: #c8c8c5;
      svg {
        animation: ${cP} 0.4s ease;
      }
    `}

    ${e=>e.bg==="#3098EE"&&Ft`
      background-color: #2580d6;
      svg {
        animation: ${uP} 0.4s ease;
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
`,dP=w.div`
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
`,fP=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,pP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,hP=w.p`
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
`,mP=w.div`
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
`,gP=w.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`,xP=w.div`
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
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transform-style: preserve-3d;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
`,vP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"28px"};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,yP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,wP="/assets/ProccessSection-CpT7luA8.png",bP=w.div`
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
`,SP=w.h2`
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
`,CP=w.p`
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
`,TP=w.div`
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
`,EP=w.div`
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
`,jP=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AP=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,LP=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,OP=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:f.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:f.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],RP={hidden:{opacity:0,scale:0,rotate:-180},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.8,ease:wi,delay:.3}},hover:{rotate:360,scale:1.2,transition:{duration:.6,ease:ae}}},kP={hidden:{opacity:0,y:50,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:.8,ease:ae}}},VP={hidden:{opacity:0,x:-100,scale:.9},visible:e=>({opacity:1,x:0,scale:1,transition:{duration:.7,delay:e*.2,ease:ae}}),hover:{y:-15,scale:1.05,rotateY:10,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.4,ease:ae}}},X5={hidden:{opacity:0,x:50,filter:"blur(10px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.9,ease:ae,delay:.5}}},HP={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ae,delay:.2}}},DP=()=>f.jsxs(bP,{$bg:wP,children:[f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:kP,children:f.jsx(SP,{children:"Our Process"})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:X5,children:f.jsx(CP,{children:"Quick steps to fix appliances reliably"})}),f.jsx(TP,{children:OP.map((e,t)=>f.jsx(B.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:VP,whileHover:"hover",children:f.jsxs(EP,{children:[f.jsx(jP,{children:f.jsx(B.div,{variants:RP,whileHover:"hover",children:f.jsx(AP,{children:e.icon})})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:HP,transition:{delay:t*.2+.3},children:f.jsx(MP,{children:e.title})}),f.jsx(B.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:X5,transition:{delay:t*.2+.4},children:f.jsx(LP,{children:e.text})})]})},t))})]}),zP=()=>f.jsxs(PP,{children:[f.jsx(Wz,{}),f.jsx(rP,{}),f.jsx(N8,{}),f.jsx(DP,{}),f.jsx(Eu,{}),f.jsx(z1,{}),f.jsx(Tu,{})]}),PP=w.div`
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
`,NP=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,$P=w(Ct)`
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
`,BP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,IP=w.h1`
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
`,UP=w.img`
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
`,_P=w.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,GP=w.p`
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
`,qP=w.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,YP=w.h2`
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
`,FP=w.div`
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
`,XP=w(Ct)`
  text-decoration: none;
  color: inherit;
  width: 46%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,ZP=w.div`
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
`,WP=w.img`
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
`,KP=w.h3`
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
`,QP=w.p`
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
`,JP=[{id:4,image:$1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:B1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:P1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],eN=()=>f.jsxs(qP,{children:[f.jsx(YP,{children:f.jsx("span",{children:" Other news and tips"})}),f.jsx(FP,{children:JP.map(e=>f.jsx(XP,{to:e.path,children:f.jsxs(ZP,{children:[f.jsx(WP,{src:e.image,alt:e.title}),f.jsxs("div",{children:[f.jsx(KP,{children:e.title}),f.jsx(QP,{children:e.description})]})]})},e.id))})]}),tN=[{id:1,image:G8,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, AirTexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:N1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: AirTexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:_8,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call AirTexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:$1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: AirTexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:B1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? AirTexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:P1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you'll hear the term OEM parts. Here's why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the same parts your appliance was built with.

Why Choose OEM Over Generic?
Reliability: Fits perfectly, works as designed.
Warranty: Protects your manufacturer's warranty.
Longevity: Generic parts often fail sooner.

Examples
Using a genuine Sub-Zero compressor instead of a generic one ensures proper cooling performance.
An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At AirTexno, we only use genuine OEM or manufacturer-approved parts for repairs in Thousand Oaks and Ventura County.`}],mr=({articleId:e})=>{const{id:t}=pb(),n=e||parseInt(t||"1"),a=tN.find(o=>o.id===n);return R.useEffect(()=>{const o=window.location.hash;if(o){const l=document.querySelector(o);l&&l.scrollIntoView({behavior:"smooth"})}},[a]),a?f.jsxs(NP,{id:"ap",children:[f.jsx($P,{to:"/tips",children:"← Back to Tips"}),f.jsx(BP,{children:a.data}),f.jsx(IP,{children:a.title}),f.jsx(UP,{src:a.image,alt:a.title}),f.jsx(_P,{children:f.jsx(GP,{children:a.content})}),f.jsx(eN,{})]}):f.jsx("div",{children:"Article not found"})},iN=w.div`
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
`,Xp=w.div`
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
`,Jf=w.p`
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
`,nN=w.div`
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
`,aN=w.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,rN=w.img`
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
`,sN=w.p`
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
`,oN=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lN=w(Ct)`
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
`,U1=w.button`
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
`,Y8=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${U1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,cN=w(Y8)`
  color: #242424;

  ${U1}:hover & {
    color: white;
  }
`,ep=w.div`
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
`,pn=w.div`
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
`,eu=w.div`
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
`,uN=w.img`
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
`;const Z5=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,W5=w.div`
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
`,K5=w.div`
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
`,xc=w.img`
  padding: 8px;
  border-radius: 8px;
  object-fit: cover;
`,Q5=w.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,J5=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`,e6=w.button`
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
`,Zp=w.button`
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
`,Wp=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,t6=w(Wp)`
  color: #242424;

  ${Zp}:hover & {
    color: #fff;
  }
`;w.div`
  @media (min-width: 768px) and (max-width: 1439px) {
    ${Xp} {
      display: none;
    }
    ${eu} {
      display: flex;
    }
  }

  @media (max-width: 767px), (min-width: 1440px) {
    ${eu} {
      display: none;
    }
    ${Xp} {
      display: flex;
    }
  }
`;const dN=w.div`
  width: 553px;
  height: 396px;
`,fN=w.div`
  width: 668px;
  height: 583px;
`,tp="/assets/fridge-AVDSsy-j.png",i6="/assets/fridge1-CZ9QJ0bU.png",pN="/assets/rating-D_Pf9sUB.svg",hN=()=>{const e=De({query:"(min-width: 768px) and (max-width: 1439px)"});return De({query:"(min-width: 1440px)"})?f.jsxs(eu,{children:[f.jsxs(dN,{children:[f.jsxs(Jf,{children:[f.jsx("span",{children:"Refrigeration"})," maintenance ",f.jsx("span",{children:"and "})," setup services"]}),f.jsx(Q5,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),f.jsxs(J5,{children:[f.jsx(e6,{children:f.jsx(Wp,{children:"Contact Us"})}),f.jsx(Zp,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(t6,{children:"Call Us"})})})]}),f.jsx(uN,{src:pN,alt:"⭐⭐⭐⭐⭐"})]}),f.jsx(fN,{children:f.jsx(Z5,{children:f.jsxs(W5,{children:[f.jsxs(K5,{children:[f.jsx(xc,{src:tp,alt:"Why Airtexno Image 1",className:"main-image"}),f.jsxs(ep,{className:"tablet-text-wrapper",children:[f.jsxs(pn,{children:[f.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"Free diagnostics on the day of the request"})]}),f.jsxs(pn,{children:[f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),f.jsxs(pn,{children:[f.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),f.jsx(xc,{src:i6,alt:"Why Airtexno Image 2",className:"secondary-image"})]})})})]}):e?f.jsxs(eu,{children:[f.jsxs(Jf,{children:[f.jsx("span",{children:"Refrigeration"})," maintenance ",f.jsx("span",{children:"and "})," setup services"]}),f.jsxs(Z5,{children:[f.jsxs(W5,{children:[f.jsxs(K5,{children:[f.jsx(xc,{src:tp,alt:"Why Airtexno Image 1",className:"main-image"}),f.jsxs(ep,{className:"tablet-text-wrapper",children:[f.jsxs(pn,{children:[f.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"Free diagnostics on the day of the request"})]}),f.jsxs(pn,{children:[f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),f.jsxs(pn,{children:[f.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),f.jsx(xc,{src:i6,alt:"Why Airtexno Image 2",className:"secondary-image"})]}),f.jsx(Q5,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),f.jsxs(J5,{children:[f.jsx(e6,{children:f.jsx(Wp,{children:"Contact Us"})}),f.jsx(Zp,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(t6,{children:"Call Us"})})})]})]})]}):f.jsxs(Xp,{children:[f.jsxs(Jf,{children:[f.jsx("span",{children:"Refrigeration"})," maintenance ",f.jsx("span",{children:"and "})," setup services"]}),f.jsxs(nN,{children:[f.jsxs(aN,{children:[f.jsx(rN,{src:tp,alt:"Why Airtexno Image 1"}),f.jsxs(ep,{children:[f.jsxs(pn,{children:[f.jsx("svg",{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"Free diagnostics on the day of the request"})]}),f.jsxs(pn,{children:[f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("p",{children:"The specialist will arrive at your home in 45 minutes"})]}),f.jsxs(pn,{children:[f.jsx("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z",stroke:"#242424",strokeLinecap:"round",strokeLinejoin:"round"})})," ",f.jsx("p",{children:"Delivery of spare parts from our own warehouse"})]})]})]}),f.jsx(sN,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."}),f.jsxs(oN,{children:[f.jsx(lN,{to:"/contact#ap",children:f.jsx(Y8,{children:"Contact Us"})}),f.jsx(U1,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(cN,{children:"Call Us"})})})]})]})]})},mN=Qe`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,gN=w.div`
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
`,xN=w.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,vN=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${mN} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,yN=w.div`
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
`,wN=w.div`
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
`,bN=w.div`
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
`,SN=w.div`
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
`,CN=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,TN=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,EN=w.p`
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
`,jN=w.h2`
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
`,AN=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,MN=w.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,LN=w(Ct)`
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
`,ON=w.button`
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
`,RN=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span> $250 </span>"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from <span> $55 </span> "}];return f.jsx(bN,{children:f.jsxs(SN,{children:[f.jsxs(CN,{children:[f.jsx(EN,{children:"Typical Refrigerator Issues We Fix"}),f.jsxs(jN,{children:["Professional Refrigerator Repair ",f.jsx("span",{children:" and Installation Services"})]})]}),f.jsxs(TN,{children:[f.jsx(kN,{services:e}),f.jsxs("div",{children:[f.jsx(AN,{children:"Having issues with your fridge? Call us today — we’ll fix it and restore normal operation fast."}),f.jsxs(MN,{children:[f.jsx(LN,{to:"/contact#ap",children:"Contact Us"}),f.jsx("a",{href:"tel:+18055002705",children:f.jsx(ON,{children:"Call Us"})})]})]})]})]})})},kN=({services:e})=>{const t=[...e,...e];return f.jsx(gN,{children:f.jsx(xN,{children:f.jsx(vN,{children:t.map((n,a)=>f.jsx(yN,{children:f.jsxs(wN,{children:[f.jsx("h3",{children:n.title}),f.jsx("p",{children:n.description}),f.jsx("p",{dangerouslySetInnerHTML:{__html:n.price}})]})},a))})})})},VN="/assets/1-BfPZdbUH.png",HN="/assets/2-zYtOs5TG.png",DN="/assets/3-SBPgwxa7.png",zN="/assets/4-CWtM_DtU.png",PN="/assets/5-DO04-jdm.png",n6=[{img:VN,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:HN,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:DN,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:zN,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:PN,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."}],NN=()=>{const e=R.useRef(null),t=De({query:"(max-width: 767px)"}),n=De({query:"(min-width: 768px) and (max-width: 1439px)"}),a=De({query:"(min-width: 1440px)"}),o=t?1:n?2:a?4:2,l=n6.length>o;return f.jsxs(GN,{children:[f.jsxs(qN,{children:[f.jsx(YN,{children:"Refrigerator Repair"}),f.jsxs(FN,{children:["We repair ",f.jsx("span",{children:" all types "})," of refrigerators"]})]}),f.jsxs($N,{children:[f.jsx(Gt,{modules:[a1,si],onSwiper:u=>e.current=u,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,centeredSlides:t,children:n6.map((u,d)=>f.jsx(qt,{children:f.jsxs(XN,{children:[f.jsx(ZN,{src:u.img,alt:u.title}),f.jsxs(WN,{children:[f.jsx(KN,{children:u.title}),f.jsx(QN,{children:u.description})]})]})},d))}),f.jsxs(_N,{children:[f.jsx(a6,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slidePrev()},bg:"#DBDBD8",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx(a6,{onClick:()=>{var u;return(u=e.current)==null?void 0:u.slideNext()},bg:"#3098EE",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},$N=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
  }
`,BN=Qe`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,IN=Qe`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,UN=Qe`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,_N=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,a6=w.button`
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
    animation: ${BN} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&Ft`
        background-color: #c8c8c5;
        svg {
          animation: ${IN} 0.4s ease;
        }
      `}

    ${e=>e.bg==="#3098EE"&&Ft`
        background-color: #2580d6;
        svg {
          animation: ${UN} 0.4s ease;
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
`,GN=w.div`
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
`,qN=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,YN=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,FN=w.p`
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
`,XN=w.div`
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
`,ZN=w.img`
  border-radius: 8px;
  width: 322px;
height: 485px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,WN=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 1px;
  background: var(--white);
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
`,KN=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,QN=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,JN=()=>f.jsxs(iN,{id:"ap",children:[f.jsx(hN,{}),f.jsx(B8,{}),f.jsx(RN,{}),f.jsx(NN,{}),f.jsx(Eu,{}),f.jsx(z1,{}),f.jsx(Tu,{})]}),Bt=({children:e})=>f.jsx("div",{style:{width:"100%",position:"relative"},children:e}),e$=()=>{const e=Si();return f.jsxs(f.Fragment,{children:[" ",f.jsx(Yh,{mode:"wait",children:f.jsxs(Ob,{location:e,children:[f.jsx(ht,{path:"/",element:f.jsx(Ab,{to:"/home"})}),f.jsxs(ht,{path:"/",element:f.jsx(iR,{}),children:[f.jsx(ht,{index:!0,element:f.jsx(Bt,{children:f.jsx(Kf,{})})}),f.jsx(ht,{path:"/home",element:f.jsx(Bt,{children:f.jsx(Kf,{})})}),f.jsx(ht,{path:"/service",element:f.jsx(Bt,{children:f.jsx(zP,{})})}),f.jsx(ht,{path:"/about",element:f.jsx(Bt,{children:f.jsx(mz,{})})}),f.jsxs(ht,{path:"/tips",children:[f.jsx(ht,{index:!0,element:f.jsx(Bt,{children:f.jsx(Vz,{})})}),f.jsx(ht,{path:"refrigerator-maintenance",element:f.jsx(Bt,{children:f.jsx(mr,{articleId:1})})}),f.jsx(ht,{path:"oven-repair-signs",element:f.jsx(Bt,{children:f.jsx(mr,{articleId:2})})}),f.jsx(ht,{path:"laundry-appliance-maintenance",element:f.jsx(Bt,{children:f.jsx(mr,{articleId:3})})}),f.jsx(ht,{path:"dishwasher-drainage",element:f.jsx(Bt,{children:f.jsx(mr,{articleId:4})})}),f.jsx(ht,{path:"repair-vs-replace",element:f.jsx(Bt,{children:f.jsx(mr,{articleId:5})})}),f.jsx(ht,{path:"oem-parts",element:f.jsx(Bt,{children:f.jsx(mr,{articleId:6})})})]}),f.jsx(ht,{path:"/contact",element:f.jsx(Bt,{children:f.jsx(xz,{})})}),f.jsx(ht,{path:"/fridge",element:f.jsx(Bt,{children:f.jsx(JN,{})})}),f.jsx(ht,{path:"*",element:f.jsx(Bt,{children:f.jsx(Kf,{})})})]})]},e.pathname)})]})},xe=e=>typeof e=="string",io=()=>{let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n},r6=e=>e==null?"":""+e,t$=(e,t,n)=>{e.forEach(a=>{t[a]&&(n[a]=t[a])})},i$=/###/g,s6=e=>e&&e.indexOf("###")>-1?e.replace(i$,"."):e,o6=e=>!e||xe(e),ho=(e,t,n)=>{const a=xe(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(o6(e))return{};const l=s6(a[o]);!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return o6(e)?{}:{obj:e,k:s6(a[o])}},l6=(e,t,n)=>{const{obj:a,k:o}=ho(e,t,Object);if(a!==void 0||t.length===1){a[o]=n;return}let l=t[t.length-1],u=t.slice(0,t.length-1),d=ho(e,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=ho(e,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=n},n$=(e,t,n,a)=>{const{obj:o,k:l}=ho(e,t,Object);o[l]=o[l]||[],o[l].push(n)},tu=(e,t)=>{const{obj:n,k:a}=ho(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},a$=(e,t,n)=>{const a=tu(e,n);return a!==void 0?a:tu(t,n)},F8=(e,t,n)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?xe(e[a])||e[a]instanceof String||xe(t[a])||t[a]instanceof String?n&&(e[a]=t[a]):F8(e[a],t[a],n):e[a]=t[a]);return e},gr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var r$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const s$=e=>xe(e)?e.replace(/[&<>"'\/]/g,t=>r$[t]):e;class o${constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const l$=[" ",",","?","!",";"],c$=new o$(20),u$=(e,t,n)=>{t=t||"",n=n||"";const a=l$.filter(u=>t.indexOf(u)<0&&n.indexOf(u)<0);if(a.length===0)return!0;const o=c$.getRegExp(`(${a.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(n);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},Kp=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(n);let o=e;for(let l=0;l<a.length;){if(!o||typeof o!="object")return;let u,d="";for(let p=l;p<a.length;++p)if(p!==l&&(d+=n),d+=a[p],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<a.length-1)continue;l+=p-l+1;break}o=u}return o},iu=e=>e==null?void 0:e.replace("_","-"),d$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var n,a;(a=(n=console==null?void 0:console[e])==null?void 0:n.apply)==null||a.call(n,console,t)}};class nu{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||d$,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,a,o){return o&&!this.debug?null:(xe(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new nu(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new nu(this.logger,t)}}var Ui=new nu;class ju{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[d,p]=u;for(let m=0;m<p;m++)d(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,p]=u;for(let m=0;m<p;m++)d.apply(d,[t,...a])})}}class c6 extends ju{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,a){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;t.indexOf(".")>-1?d=t.split("."):(d=[t,n],a&&(Array.isArray(a)?d.push(...a):xe(a)&&l?d.push(...a.split(l)):d.push(a)));const p=tu(this.data,d);return!p&&!n&&!a&&t.indexOf(".")>-1&&(t=d[0],n=d[1],a=d.slice(2).join(".")),p||!u||!xe(a)?p:Kp((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[n],a,l)}addResource(t,n,a,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[t,n];a&&(d=d.concat(u?a.split(u):a)),t.indexOf(".")>-1&&(d=t.split("."),o=n,n=d[1]),this.addNamespaces(n),l6(this.data,d,o),l.silent||this.emit("added",t,n,a,o)}addResources(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in a)(xe(a[l])||Array.isArray(a[l]))&&this.addResource(t,n,l,a[l],{silent:!0});o.silent||this.emit("added",t,n,a)}addResourceBundle(t,n,a,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[t,n];t.indexOf(".")>-1&&(d=t.split("."),o=a,a=n,n=d[1]),this.addNamespaces(n);let p=tu(this.data,d)||{};u.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?F8(p,a,l):p={...p,...a},l6(this.data,d,p),u.silent||this.emit("added",t,n,a)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var X8={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,a,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,n,a,o))??t}),t}};const u6={},d6=e=>!xe(e)&&typeof e!="boolean"&&typeof e!="number";class au extends ju{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),t$(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ui.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,n);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let l=n.ns||this.options.defaultNS||[];const u=a&&t.indexOf(a)>-1,d=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!u$(t,a,o);if(u&&!d){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:xe(l)?[l]:l};const m=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:xe(l)?[l]:l}}translate(t,n,a){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,l=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(t[t.length-1],n),p=d[d.length-1],m=n.lng||this.language,g=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const K=n.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${K}${u}`,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(n)}:`${p}${K}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(n)}:u}const v=this.resolve(t,n);let y=v==null?void 0:v.res;const C=(v==null?void 0:v.usedKey)||u,S=(v==null?void 0:v.exactUsedKey)||u,j=["[object Number]","[object Function]","[object RegExp]"],L=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,E=n.count!==void 0&&!xe(n.count),T=au.hasDefaultValue(n),V=E?this.pluralResolver.getSuffix(m,n.count,n):"",O=n.ordinal&&E?this.pluralResolver.getSuffix(m,n.count,{ordinal:!1}):"",P=E&&!n.ordinal&&n.count===0,z=P&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${V}`]||n[`defaultValue${O}`]||n.defaultValue;let _=y;M&&!y&&T&&(_=z);const Y=d6(_),F=Object.prototype.toString.apply(_);if(M&&_&&Y&&j.indexOf(F)<0&&!(xe(L)&&Array.isArray(_))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const K=this.options.returnedObjectHandler?this.options.returnedObjectHandler(C,_,{...n,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(v.res=K,v.usedParams=this.getUsedParamsDetails(n),v):K}if(l){const K=Array.isArray(_),ie=K?[]:{},le=K?S:C;for(const de in _)if(Object.prototype.hasOwnProperty.call(_,de)){const oe=`${le}${l}${de}`;T&&!y?ie[de]=this.translate(oe,{...n,defaultValue:d6(z)?z[de]:void 0,joinArrays:!1,ns:d}):ie[de]=this.translate(oe,{...n,joinArrays:!1,ns:d}),ie[de]===oe&&(ie[de]=_[de])}y=ie}}else if(M&&xe(L)&&Array.isArray(y))y=y.join(L),y&&(y=this.extendTranslation(y,t,n,a));else{let K=!1,ie=!1;!this.isValidLookup(y)&&T&&(K=!0,y=z),this.isValidLookup(y)||(ie=!0,y=u);const de=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ie?void 0:y,oe=T&&z!==y&&this.options.updateMissing;if(ie||K||oe){if(this.logger.log(oe?"updateKey":"missingKey",m,p,u,oe?z:y),l){const te=this.resolve(u,{...n,keySeparator:!1});te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $=[];const W=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&W&&W[0])for(let te=0;te<W.length;te++)$.push(W[te]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(n.lng||this.language):$.push(n.lng||this.language);const J=(te,k,X)=>{var re;const ne=T&&X!==y?X:de;this.options.missingKeyHandler?this.options.missingKeyHandler(te,p,k,ne,oe,n):(re=this.backendConnector)!=null&&re.saveMissing&&this.backendConnector.saveMissing(te,p,k,ne,oe,n),this.emit("missingKey",te,p,k,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?$.forEach(te=>{const k=this.pluralResolver.getSuffixes(te,n);P&&n[`defaultValue${this.options.pluralSeparator}zero`]&&k.indexOf(`${this.options.pluralSeparator}zero`)<0&&k.push(`${this.options.pluralSeparator}zero`),k.forEach(X=>{J([te],u+X,n[`defaultValue${X}`]||z)})}):J($,u,z))}y=this.extendTranslation(y,t,n,v,a),ie&&y===u&&this.options.appendNamespaceToMissingKey&&(y=`${p}:${u}`),(ie||K)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${u}`:u,K?y:void 0))}return o?(v.res=y,v.usedParams=this.getUsedParamsDetails(n),v):y}extendTranslation(t,n,a,o,l){var m,g;var u=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const v=xe(t)&&(((g=a==null?void 0:a.interpolation)==null?void 0:g.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(v){const S=t.match(this.interpolator.nestingRegexp);y=S&&S.length}let C=a.replace&&!xe(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(C={...this.options.interpolation.defaultVariables,...C}),t=this.interpolator.interpolate(t,C,a.lng||this.language||o.usedLng,a),v){const S=t.match(this.interpolator.nestingRegexp),j=S&&S.length;y<j&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,j=new Array(S),L=0;L<S;L++)j[L]=arguments[L];return(l==null?void 0:l[0])===j[0]&&!a.context?(u.logger.warn(`It seems you are nesting recursively key: ${j[0]} in key: ${n[0]}`),null):u.translate(...j,n)},a)),a.interpolation&&this.interpolator.reset()}const d=a.postProcess||this.options.postProcess,p=xe(d)?[d]:d;return t!=null&&(p!=null&&p.length)&&a.applyPostProcessor!==!1&&(t=X8.handle(p,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,l,u,d;return xe(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(a))return;const m=this.extractFromKey(p,n),g=m.key;o=g;let v=m.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const y=n.count!==void 0&&!xe(n.count),C=y&&!n.ordinal&&n.count===0,S=n.context!==void 0&&(xe(n.context)||typeof n.context=="number")&&n.context!=="",j=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);v.forEach(L=>{var M,E;this.isValidLookup(a)||(d=L,!u6[`${j[0]}-${L}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((E=this.utils)!=null&&E.hasLoadedNamespace(d))&&(u6[`${j[0]}-${L}`]=!0,this.logger.warn(`key "${o}" for languages "${j.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),j.forEach(T=>{var P;if(this.isValidLookup(a))return;u=T;const V=[g];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(V,g,T,L,n);else{let z;y&&(z=this.pluralResolver.getSuffix(T,n.count,n));const _=`${this.options.pluralSeparator}zero`,Y=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(V.push(g+z),n.ordinal&&z.indexOf(Y)===0&&V.push(g+z.replace(Y,this.options.pluralSeparator)),C&&V.push(g+_)),S){const F=`${g}${this.options.contextSeparator}${n.context}`;V.push(F),y&&(V.push(F+z),n.ordinal&&z.indexOf(Y)===0&&V.push(F+z.replace(Y,this.options.pluralSeparator)),C&&V.push(F+_))}}let O;for(;O=V.pop();)this.isValidLookup(a)||(l=O,a=this.getResource(T,L,O,n))}))})}),{res:a,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,a){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,n,a,o):this.resourceStore.getResource(t,n,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!xe(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const l of n)delete o[l]}return o}static hasDefaultValue(t){const n="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&n===a.substring(0,n.length)&&t[a]!==void 0)return!0;return!1}}class f6{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ui.create("languageUtils")}getScriptPartFromCode(t){if(t=iu(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=iu(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(xe(t)&&t.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(t)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(a=>{if(n)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),xe(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let a=t[n];return a||(a=t[this.getScriptPartFromCode(n)]),a||(a=t[this.formatLanguageCode(n)]),a||(a=t[this.getLanguagePartFromCode(n)]),a||(a=t.default),a||[]}toResolveHierarchy(t,n){const a=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return xe(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):xe(t)&&l(this.formatLanguageCode(t)),a.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const p6={zero:0,one:1,two:2,few:3,many:4,other:5},h6={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class f${constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ui.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=iu(t==="dev"?"en":t),o=n.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:a,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),h6;if(!t.match(/-|_/))return h6;const p=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(p,n)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,l)=>p6[o]-p6[l]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",n,a))}}const m6=function(e,t,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=a$(e,t,n);return!l&&o&&xe(n)&&(l=Kp(e,n,a),l===void 0&&(l=Kp(t,n,a))),l},ip=e=>e.replace(/\$/g,"$$$$");class p${constructor(){var n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ui.create("interpolator"),this.options=t,this.format=((n=t==null?void 0:t.interpolation)==null?void 0:n.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:p,formatSeparator:m,unescapeSuffix:g,unescapePrefix:v,nestingPrefix:y,nestingPrefixEscaped:C,nestingSuffix:S,nestingSuffixEscaped:j,nestingOptionsSeparator:L,maxReplaces:M,alwaysFormat:E}=t.interpolation;this.escape=n!==void 0?n:s$,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?gr(l):u||"{{",this.suffix=d?gr(d):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?gr(y):C||gr("$t("),this.nestingSuffix=S?gr(S):j||gr(")"),this.nestingOptionsSeparator=L||",",this.maxReplaces=M||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,a)=>(n==null?void 0:n.source)===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,a,o){var C;let l,u,d;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=S=>{if(S.indexOf(this.formatSeparator)<0){const E=m6(n,p,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,a,{...o,...n,interpolationkey:S}):E}const j=S.split(this.formatSeparator),L=j.shift().trim(),M=j.join(this.formatSeparator).trim();return this.format(m6(n,p,L,this.options.keySeparator,this.options.ignoreJSONStructure),M,a,{...o,...n,interpolationkey:L})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,v=((C=o==null?void 0:o.interpolation)==null?void 0:C.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>ip(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?ip(this.escape(S)):ip(S)}].forEach(S=>{for(d=0;l=S.regex.exec(t);){const j=l[1].trim();if(u=m(j),u===void 0)if(typeof g=="function"){const M=g(t,l,o);u=xe(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,j))u="";else if(v){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${t}`),u="";else!xe(u)&&!this.useRawValueToEscape&&(u=r6(u));const L=S.safeValue(u);if(t=t.replace(l[0],L),v?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),t}nest(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(p,m)=>{const g=this.nestingOptionsSeparator;if(p.indexOf(g)<0)return p;const v=p.split(new RegExp(`${g}[ ]*{`));let y=`{${v[1]}`;p=v[0],y=this.interpolate(y,u);const C=y.match(/'/g),S=y.match(/"/g);(((C==null?void 0:C.length)??0)%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{u=JSON.parse(y),m&&(u={...m,...u})}catch(j){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,j),`${p}${g}${y}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];u={...a},u=u.replace&&!xe(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(v=>v.trim());o[1]=g.shift(),p=g,m=!0}if(l=n(d.call(this,o[1].trim(),u),u),l&&o[0]===t&&!xe(l))return l;xe(l)||(l=r6(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=p.reduce((g,v)=>this.format(g,v,a.lng,{...a,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const h$=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...p]=u.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),g=d.trim();n[g]||(n[g]=m),m==="false"&&(n[g]=!1),m==="true"&&(n[g]=!0),isNaN(m)||(n[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:n}},xr=e=>{const t={};return(n,a,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=a+JSON.stringify(l);let d=t[u];return d||(d=e(iu(a),o),t[u]=d),d(n)}};class m${constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ui.create("formatter"),this.options=t,this.formats={number:xr((n,a)=>{const o=new Intl.NumberFormat(n,{...a});return l=>o.format(l)}),currency:xr((n,a)=>{const o=new Intl.NumberFormat(n,{...a,style:"currency"});return l=>o.format(l)}),datetime:xr((n,a)=>{const o=new Intl.DateTimeFormat(n,{...a});return l=>o.format(l)}),relativetime:xr((n,a)=>{const o=new Intl.RelativeTimeFormat(n,{...a});return l=>o.format(l,a.range||"day")}),list:xr((n,a)=>{const o=new Intl.ListFormat(n,{...a});return l=>o.format(l)})},this.init(t)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=xr(n)}format(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=n.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,p)=>{var v;const{formatName:m,formatOptions:g}=h$(p);if(this.formats[m]){let y=d;try{const C=((v=o==null?void 0:o.formatParams)==null?void 0:v[o.interpolationkey])||{},S=C.locale||C.lng||o.locale||o.lng||a;y=this.formats[m](d,S,{...g,...o,...C})}catch(C){this.logger.warn(C)}return y}else this.logger.warn(`there was no format function for ${m}`);return d},t)}}const g$=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class x$ extends ju{constructor(t,n,a){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Ui.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,a,o.backend,o)}queueLoad(t,n,a,o){const l={},u={},d={},p={};return t.forEach(m=>{let g=!0;n.forEach(v=>{const y=`${m}|${v}`;!a.reload&&this.store.hasResourceBundle(m,v)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?u[y]===void 0&&(u[y]=!0):(this.state[y]=1,g=!1,u[y]===void 0&&(u[y]=!0),l[y]===void 0&&(l[y]=!0),p[v]===void 0&&(p[v]=!0)))}),g||(d[m]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(p)}}loaded(t,n,a){const o=t.split("|"),l=o[0],u=o[1];n&&this.emit("failedLoading",l,u,n),!n&&a&&this.store.addResourceBundle(l,u,a,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&a&&(this.state[t]=0);const d={};this.queue.forEach(p=>{n$(p.loaded,[l],u),g$(p,t),n&&p.errors.push(n),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{d[m]||(d[m]={});const g=p.loaded[m];g.length&&g.forEach(v=>{d[m][v]===void 0&&(d[m][v]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(p=>!p.done)}read(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:a,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,a,o+1,l*2,u)},l);return}u(m,g)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const m=p(t,n);m&&typeof m.then=="function"?m.then(g=>d(null,g)).catch(d):d(null,m)}catch(m){d(m)}return}return p(t,n,d)}prepareLoading(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();xe(t)&&(t=this.languageUtils.toResolveHierarchy(t)),xe(n)&&(n=[n]);const l=this.queueLoad(t,n,a,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,n,a){this.prepareLoading(t,n,{},a)}reload(t,n,a){this.prepareLoading(t,n,{reload:!0},a)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],l=a[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${n}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${n}loaded namespace ${l} for language ${o}`,d),this.loaded(t,u,d)})}saveMissing(t,n,a,o,l){var p,m,g,v,y;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(p=this.services)==null?void 0:p.utils)!=null&&m.hasLoadedNamespace&&!((v=(g=this.services)==null?void 0:g.utils)!=null&&v.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((y=this.backend)!=null&&y.create){const C={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let j;S.length===5?j=S(t,n,a,o,C):j=S(t,n,a,o),j&&typeof j.then=="function"?j.then(L=>d(null,L)).catch(d):d(null,j)}catch(j){d(j)}else S(t,n,a,o,d,C)}!t||!t[0]||this.store.addResource(t[0],n,a,o)}}}const g6=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),xe(e[1])&&(t.defaultValue=e[1]),xe(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(a=>{t[a]=n[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),x6=e=>{var t,n;return xe(e.ns)&&(e.ns=[e.ns]),xe(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),xe(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((n=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:n.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},vc=()=>{},v$=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class Ao extends ju{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=x6(t),this.services={},this.logger=Ui,this.modules={external:[]},v$(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(a=n,n={}),n.defaultNS==null&&n.ns&&(xe(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=g6();this.options={...o,...this.options,...x6(n)},this.options.interpolation={...o.interpolation,...this.options.interpolation},n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Ui.init(l(this.modules.logger),this.options):Ui.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=m$;const v=new f6(this.options);this.store=new c6(this.options.resources,this.options);const y=this.services;y.logger=Ui,y.resourceStore=this.store,y.languageUtils=v,y.pluralResolver=new f$(v,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new p$(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new x$(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(C){for(var S=arguments.length,j=new Array(S>1?S-1:0),L=1;L<S;L++)j[L-1]=arguments[L];t.emit(C,...j)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new au(this.services,this.options),this.translator.on("*",function(C){for(var S=arguments.length,j=new Array(S>1?S-1:0),L=1;L<S;L++)j[L-1]=arguments[L];t.emit(C,...j)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,a||(a=vc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const p=io(),m=()=>{const g=(v,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(y),a(v,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(t){var l,u;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc;const o=xe(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const d=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(v=>{v!=="cimode"&&d.indexOf(v)<0&&d.push(v)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>p(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,m=>p(m)),this.services.backendConnector.load(d,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(m)})}else a(null)}reloadResources(t,n,a){const o=io();return typeof t=="function"&&(a=t,t=void 0),typeof n=="function"&&(a=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),a||(a=vc),this.services.backendConnector.reload(t,n,l=>{o.resolve(),a(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&X8.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,n){var a=this;this.isLanguageChangingTo=t;const o=io();this.emit("languageChanging",t);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),n&&n(p,function(){return a.t(...arguments)})},d=p=>{var g,v;!t&&!p&&this.services.languageDetector&&(p=[]);const m=xe(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(v=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||v.call(g,m)),this.loadResources(m,y=>{u(y,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(t),o}getFixedT(t,n,a){var o=this;const l=function(u,d){let p;if(typeof d!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),v=2;v<m;v++)g[v-2]=arguments[v];p=o.options.overloadTranslationOptionHandler([u,d].concat(g))}else p={...d};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||l.keyPrefix);const y=o.options.keySeparator||".";let C;return p.keyPrefix&&Array.isArray(u)?C=u.map(S=>`${p.keyPrefix}${y}${S}`):C=p.keyPrefix?`${p.keyPrefix}${y}${u}`:u,o.t(C,p)};return xe(t)?l.lng=t:l.lngs=t,l.ns=n,l.keyPrefix=a,l}t(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...n)}exists(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...n)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const u=(d,p)=>{const m=this.services.backendConnector.state[`${d}|${p}`];return m===-1||m===0||m===2};if(n.precheck){const d=n.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(a,t)&&(!o||u(l,t)))}loadNamespaces(t,n){const a=io();return this.options.ns?(xe(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(t,n){const a=io();xe(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{a.resolve(),n&&n(u)}),a):(n&&n(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((l=this.services)==null?void 0:l.languageUtils)||new f6(g6());return n.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Ao(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new Ao(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},a){const d=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},Object.keys(p[m]).reduce((g,v)=>(g[v]={...p[m][v]},g),{})),{});l.store=new c6(d,o),l.services.resourceStore=l.store}return l.translator=new au(l.services,o),l.translator.on("*",function(d){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];l.emit(d,...m)}),l.init(o,n),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ot=Ao.createInstance();Ot.createInstance=Ao.createInstance;Ot.createInstance;Ot.dir;Ot.init;Ot.loadResources;Ot.reloadResources;Ot.use;Ot.changeLanguage;Ot.getFixedT;Ot.t;Ot.exists;Ot.setDefaultNamespace;Ot.hasLoadedNamespace;Ot.loadNamespaces;Ot.loadLanguages;function Qp(e){"@babel/helpers - typeof";return Qp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qp(e)}function Z8(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Qp(XMLHttpRequest))==="object"}function y$(e){return!!e&&typeof e.then=="function"}function w$(e){return y$(e)?e:Promise.resolve(e)}const b$="modulepreload",S$=function(e){return"/"+e},v6={},C$=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(n.map(m=>{if(m=S$(m),m in v6)return;v6[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":b$,g||(y.as="script"),y.crossOrigin="",y.href=m,p&&y.setAttribute("nonce",p),document.head.appendChild(y),g)return new Promise((C,S)=>{y.addEventListener("load",C),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})};function y6(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function w6(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?y6(Object(n),!0).forEach(function(a){T$(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y6(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function T$(e,t,n){return(t=E$(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E$(e){var t=j$(e,"string");return Ma(t)=="symbol"?t:t+""}function j$(e,t){if(Ma(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(Ma(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ma(e){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ma(e)}var Wn=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Wn=global.fetch:typeof window<"u"&&window.fetch&&(Wn=window.fetch);var Mo;Z8()&&(typeof global<"u"&&global.XMLHttpRequest?Mo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Mo=window.XMLHttpRequest));var ru;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?ru=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(ru=window.ActiveXObject));typeof Wn!="function"&&(Wn=void 0);if(!Wn&&!Mo&&!ru)try{C$(()=>import("./browser-ponyfill-Bs-5cHje.js").then(e=>e.b),[]).then(function(e){Wn=e.default}).catch(function(){})}catch{}var Jp=function(t,n){if(n&&Ma(n)==="object"){var a="";for(var o in n)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},b6=function(t,n,a,o){var l=function(p){if(!p.ok)return a(p.statusText||"Error",{status:p.status});p.text().then(function(m){a(null,{status:p.status,data:m})}).catch(a)};if(o){var u=o(t,n);if(u instanceof Promise){u.then(l).catch(a);return}}typeof fetch=="function"?fetch(t,n).then(l).catch(a):Wn(t,n).then(l).catch(a)},S6=!1,A$=function(t,n,a,o){t.queryStringParams&&(n=Jp(n,t.queryStringParams));var l=w6({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,d=w6({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:l},S6?{}:u),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{b6(n,d,o,p)}catch(m){if(!u||Object.keys(u).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(u).forEach(function(g){delete d[g]}),b6(n,d,o,p),S6=!0}catch(g){o(g)}}},M$=function(t,n,a,o){a&&Ma(a)==="object"&&(a=Jp("",a).slice(1)),t.queryStringParams&&(n=Jp(n,t.queryStringParams));try{var l=Mo?new Mo:new ru("MSXML2.XMLHTTP.3.0");l.open(a?"POST":"GET",n,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,a&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(a)}catch(p){console&&console.log(p)}},L$=function(t,n,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},Wn&&n.indexOf("file:")!==0)return A$(t,n,a,o);if(Z8()||typeof ActiveXObject=="function")return M$(t,n,a,o);o(new Error("No fetch and no xhr implementation found!"))};function Nr(e){"@babel/helpers - typeof";return Nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nr(e)}function C6(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function np(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C6(Object(n),!0).forEach(function(a){W8(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C6(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function O$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R$(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,K8(a.key),a)}}function k$(e,t,n){return t&&R$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function W8(e,t,n){return(t=K8(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K8(e){var t=V$(e,"string");return Nr(t)=="symbol"?t:t+""}function V$(e,t){if(Nr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(Nr(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var H$=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,a,o){return W8({},a,o||"")},parseLoadPayload:function(n,a){},request:L$,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Q8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};O$(this,e),this.services=t,this.options=n,this.allOptions=a,this.type="backend",this.init(t,n,a)}return k$(e,[{key:"init",value:function(n){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=n,this.options=np(np(np({},H$()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return a.reload()},this.options.reloadInterval);Nr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(n,a,o){this._readAny(n,n,a,a,o)}},{key:"read",value:function(n,a,o){this._readAny([n],n,[a],a,o)}},{key:"_readAny",value:function(n,a,o,l,u){var d=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(n,o)),p=w$(p),p.then(function(m){if(!m)return u(null,{});var g=d.services.interpolator.interpolate(m,{lng:n.join("+"),ns:o.join("+")});d.loadUrl(g,u,a,l)})}},{key:"loadUrl",value:function(n,a,o,l){var u=this,d=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(d,p);this.options.request(this.options,n,m,function(g,v){if(v&&(v.status>=500&&v.status<600||!v.status))return a("failed loading "+n+"; status code: "+v.status,!0);if(v&&v.status>=400&&v.status<500)return a("failed loading "+n+"; status code: "+v.status,!1);if(!v&&g&&g.message){var y=g.message.toLowerCase(),C=["failed","fetch","network","load"].find(function(L){return y.indexOf(L)>-1});if(C)return a("failed loading "+n+": "+g.message,!0)}if(g)return a(g,!1);var S,j;try{typeof v.data=="string"?S=u.options.parse(v.data,o,l):S=v.data}catch{j="failed parsing "+n+" to json"}if(j)return a(j,!1);a(null,S)})}},{key:"create",value:function(n,a,o,l,u){var d=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var p=this.options.parsePayload(a,o,l),m=0,g=[],v=[];n.forEach(function(y){var C=d.options.addPath;typeof d.options.addPath=="function"&&(C=d.options.addPath(y,a));var S=d.services.interpolator.interpolate(C,{lng:y,ns:a});d.options.request(d.options,S,p,function(j,L){m+=1,g.push(j),v.push(L),m===n.length&&typeof u=="function"&&u(g,v)})})}}},{key:"reload",value:function(){var n=this,a=this.services,o=a.backendConnector,l=a.languageUtils,u=a.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var p=[],m=function(v){var y=l.toResolveHierarchy(v);y.forEach(function(C){p.indexOf(C)<0&&p.push(C)})};m(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),p.forEach(function(g){n.allOptions.ns.forEach(function(v){o.read(g,v,"read",null,null,function(y,C){y&&u.warn("loading namespace ".concat(v," for language ").concat(g," failed"),y),!y&&C&&u.log("loaded namespace ".concat(v," for language ").concat(g),C),o.loaded("".concat(g,"|").concat(v),y,C)})})})}}}])}();Q8.type="backend";const{slice:D$,forEach:z$}=[];function P$(e){return z$.call(D$.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}function N$(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(e))}const T6=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,$$=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(a.maxAge>0){const u=a.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(a.domain){if(!T6.test(a.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${a.domain}`}if(a.path){if(!T6.test(a.path))throw new TypeError("option path is invalid");l+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(l+="; Partitioned"),l},E6={create(e,t,n,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+n*60*1e3)),a&&(o.domain=a),document.cookie=$$(e,t,o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let a=0;a<n.length;a++){let o=n[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var B$={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return E6.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:a,cookieDomain:o,cookieOptions:l}=t;n&&typeof document<"u"&&E6.create(n,e,a,o,l)}},I$={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const p=u[d].indexOf("=");p>0&&u[d].substring(0,p)===t&&(n=u[d].substring(p+1))}}return n}},U$={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:n}=e,a;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const d=u.split("&");for(let p=0;p<d.length;p++){const m=d[p].indexOf("=");m>0&&d[p].substring(0,m)===t&&(a=d[p].substring(m+1))}}if(a)return a;if(!a&&n>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof n=="number"?n:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let vr=null;const j6=()=>{if(vr!==null)return vr;try{if(vr=typeof window<"u"&&window.localStorage!==null,!vr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{vr=!1}return vr};var _$={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&j6())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&j6()&&window.localStorage.setItem(n,e)}};let yr=null;const A6=()=>{if(yr!==null)return yr;try{if(yr=typeof window<"u"&&window.sessionStorage!==null,!yr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{yr=!1}return yr};var G$={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&A6())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&A6()&&window.sessionStorage.setItem(n,e)}},q$={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:a,language:o}=navigator;if(n)for(let l=0;l<n.length;l++)t.push(n[l]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},Y$={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(n=a.getAttribute("lang")),n}},F$={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(o=n[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},X$={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,a=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[n]}};let J8=!1;try{document.cookie,J8=!0}catch{}const e7=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];J8||e7.splice(1,1);const Z$=()=>({order:e7,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class t7{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=P$(n,this.options||{},Z$()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(B$),this.addDetector(I$),this.addDetector(_$),this.addDetector(G$),this.addDetector(q$),this.addDetector(Y$),this.addDetector(F$),this.addDetector(X$),this.addDetector(U$)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(n=n.concat(o))}}),n=n.filter(a=>a!=null&&!N$(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}t7.type="languageDetector";Ot.use(Q8).use(t7).use(sO).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const W$=R.createContext(void 0),K$=({children:e})=>{const{i18n:t}=i1(),n=a=>{t.changeLanguage(a).then(()=>{window.location.reload()})};return f.jsx(W$.Provider,{value:{language:t.language,setLanguage:n},children:e})};D9.createRoot(document.getElementById("root")).render(f.jsxs(He.StrictMode,{children:[f.jsx(eC,{styles:sC}),f.jsx(Jb,{basename:"/",children:f.jsx(K$,{children:f.jsx(e$,{})})})]}));export{Q$ as c,su as g};
