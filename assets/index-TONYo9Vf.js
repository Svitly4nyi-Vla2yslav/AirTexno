function Sb(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var AB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yf={exports:{}},Ys={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bx;function Cb(){if(Bx)return Ys;Bx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var d in o)d!=="key"&&(l[d]=o[d])}else l=o;return o=l.ref,{$$typeof:e,type:a,key:u,ref:o!==void 0?o:null,props:l}}return Ys.Fragment=t,Ys.jsx=n,Ys.jsxs=n,Ys}var $x;function Tb(){return $x||($x=1,Yf.exports=Cb()),Yf.exports}var m=Tb(),Ff={exports:{}},Fs={},Xf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function Eb(){return Ix||(Ix=1,function(e){function t($,W){var J=$.length;$.push(W);e:for(;0<J;){var te=J-1>>>1,k=$[te];if(0<o(k,W))$[te]=W,$[J]=k,J=te;else break e}}function n($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var W=$[0],J=$.pop();if(J!==W){$[0]=J;e:for(var te=0,k=$.length,X=k>>>1;te<X;){var ae=2*(te+1)-1,re=$[ae],ue=ae+1,Se=$[ue];if(0>o(re,J))ue<k&&0>o(Se,re)?($[te]=Se,$[ue]=J,te=ue):($[te]=re,$[ae]=J,te=ae);else if(ue<k&&0>o(Se,J))$[te]=Se,$[ue]=J,te=ue;else break e}}return W}function o($,W){var J=$.sortIndex-W.sortIndex;return J!==0?J:$.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],h=[],g=1,v=null,y=3,w=!1,b=!1,j=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function V($){for(var W=n(h);W!==null;){if(W.callback===null)a(h);else if(W.startTime<=$)a(h),W.sortIndex=W.expirationTime,t(f,W);else break;W=n(h)}}function O($){if(j=!1,V($),!b)if(n(f)!==null)b=!0,N||(N=!0,ne());else{var W=n(h);W!==null&&oe(O,W.startTime-$)}}var N=!1,H=-1,U=5,Y=-1;function F(){return L?!0:!(e.unstable_now()-Y<U)}function K(){if(L=!1,N){var $=e.unstable_now();Y=$;var W=!0;try{e:{b=!1,j&&(j=!1,T(H),H=-1),w=!0;var J=y;try{t:{for(V($),v=n(f);v!==null&&!(v.expirationTime>$&&F());){var te=v.callback;if(typeof te=="function"){v.callback=null,y=v.priorityLevel;var k=te(v.expirationTime<=$);if($=e.unstable_now(),typeof k=="function"){v.callback=k,V($),W=!0;break t}v===n(f)&&a(f),V($)}else a(f);v=n(f)}if(v!==null)W=!0;else{var X=n(h);X!==null&&oe(O,X.startTime-$),W=!1}}break e}finally{v=null,y=J,w=!1}W=void 0}}finally{W?ne():N=!1}}}var ne;if(typeof E=="function")ne=function(){E(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,de=le.port2;le.port1.onmessage=K,ne=function(){de.postMessage(null)}}else ne=function(){M(K,0)};function oe($,W){H=M(function(){$(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function($){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var J=y;y=W;try{return $()}finally{y=J}},e.unstable_requestPaint=function(){L=!0},e.unstable_runWithPriority=function($,W){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=y;y=$;try{return W()}finally{y=J}},e.unstable_scheduleCallback=function($,W,J){var te=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?te+J:te):J=te,$){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=J+k,$={id:g++,callback:W,priorityLevel:$,startTime:J,expirationTime:k,sortIndex:-1},J>te?($.sortIndex=J,t(h,$),n(f)===null&&$===n(h)&&(j?(T(H),H=-1):j=!0,oe(O,J-te))):($.sortIndex=k,t(f,$),b||w||(b=!0,N||(N=!0,ne()))),$},e.unstable_shouldYield=F,e.unstable_wrapCallback=function($){var W=y;return function(){var J=y;y=W;try{return $.apply(this,arguments)}finally{y=J}}}}(Zf)),Zf}var Ux;function jb(){return Ux||(Ux=1,Xf.exports=Eb()),Xf.exports}var Wf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function Ab(){if(_x)return ve;_x=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function L(k,X,ae){this.props=k,this.context=X,this.refs=j,this.updater=ae||w}L.prototype.isReactComponent={},L.prototype.setState=function(k,X){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,X,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function M(){}M.prototype=L.prototype;function T(k,X,ae){this.props=k,this.context=X,this.refs=j,this.updater=ae||w}var E=T.prototype=new M;E.constructor=T,b(E,L.prototype),E.isPureReactComponent=!0;var V=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function H(k,X,ae,re,ue,Se){return ae=Se.ref,{$$typeof:e,type:k,key:X,ref:ae!==void 0?ae:null,props:Se}}function U(k,X){return H(k.type,X,void 0,void 0,void 0,k.props)}function Y(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function F(k){var X={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ae){return X[ae]})}var K=/\/+/g;function ne(k,X){return typeof k=="object"&&k!==null&&k.key!=null?F(""+k.key):X.toString(36)}function le(){}function de(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(le,le):(k.status="pending",k.then(function(X){k.status==="pending"&&(k.status="fulfilled",k.value=X)},function(X){k.status==="pending"&&(k.status="rejected",k.reason=X)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function oe(k,X,ae,re,ue){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(Se){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case e:case t:pe=!0;break;case g:return pe=k._init,oe(pe(k._payload),X,ae,re,ue)}}if(pe)return ue=ue(k),pe=re===""?"."+ne(k,0):re,V(ue)?(ae="",pe!=null&&(ae=pe.replace(K,"$&/")+"/"),oe(ue,X,ae,"",function(Ct){return Ct})):ue!=null&&(Y(ue)&&(ue=U(ue,ae+(ue.key==null||k&&k.key===ue.key?"":(""+ue.key).replace(K,"$&/")+"/")+pe)),X.push(ue)),1;pe=0;var lt=re===""?".":re+":";if(V(k))for(var ke=0;ke<k.length;ke++)re=k[ke],Se=lt+ne(re,ke),pe+=oe(re,X,ae,Se,ue);else if(ke=y(k),typeof ke=="function")for(k=ke.call(k),ke=0;!(re=k.next()).done;)re=re.value,Se=lt+ne(re,ke++),pe+=oe(re,X,ae,Se,ue);else if(Se==="object"){if(typeof k.then=="function")return oe(de(k),X,ae,re,ue);throw X=String(k),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function $(k,X,ae){if(k==null)return k;var re=[],ue=0;return oe(k,re,"","",function(Se){return X.call(ae,Se,ue++)}),re}function W(k){if(k._status===-1){var X=k._result;X=X(),X.then(function(ae){(k._status===0||k._status===-1)&&(k._status=1,k._result=ae)},function(ae){(k._status===0||k._status===-1)&&(k._status=2,k._result=ae)}),k._status===-1&&(k._status=0,k._result=X)}if(k._status===1)return k._result.default;throw k._result}var J=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function te(){}return ve.Children={map:$,forEach:function(k,X,ae){$(k,function(){X.apply(this,arguments)},ae)},count:function(k){var X=0;return $(k,function(){X++}),X},toArray:function(k){return $(k,function(X){return X})||[]},only:function(k){if(!Y(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ve.Component=L,ve.Fragment=n,ve.Profiler=o,ve.PureComponent=T,ve.StrictMode=a,ve.Suspense=f,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ve.__COMPILER_RUNTIME={__proto__:null,c:function(k){return O.H.useMemoCache(k)}},ve.cache=function(k){return function(){return k.apply(null,arguments)}},ve.cloneElement=function(k,X,ae){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var re=b({},k.props),ue=k.key,Se=void 0;if(X!=null)for(pe in X.ref!==void 0&&(Se=void 0),X.key!==void 0&&(ue=""+X.key),X)!N.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(re[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)re.children=ae;else if(1<pe){for(var lt=Array(pe),ke=0;ke<pe;ke++)lt[ke]=arguments[ke+2];re.children=lt}return H(k.type,ue,void 0,void 0,Se,re)},ve.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},ve.createElement=function(k,X,ae){var re,ue={},Se=null;if(X!=null)for(re in X.key!==void 0&&(Se=""+X.key),X)N.call(X,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ue[re]=X[re]);var pe=arguments.length-2;if(pe===1)ue.children=ae;else if(1<pe){for(var lt=Array(pe),ke=0;ke<pe;ke++)lt[ke]=arguments[ke+2];ue.children=lt}if(k&&k.defaultProps)for(re in pe=k.defaultProps,pe)ue[re]===void 0&&(ue[re]=pe[re]);return H(k,Se,void 0,void 0,null,ue)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(k){return{$$typeof:d,render:k}},ve.isValidElement=Y,ve.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:W}},ve.memo=function(k,X){return{$$typeof:h,type:k,compare:X===void 0?null:X}},ve.startTransition=function(k){var X=O.T,ae={};O.T=ae;try{var re=k(),ue=O.S;ue!==null&&ue(ae,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(te,J)}catch(Se){J(Se)}finally{O.T=X}},ve.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ve.use=function(k){return O.H.use(k)},ve.useActionState=function(k,X,ae){return O.H.useActionState(k,X,ae)},ve.useCallback=function(k,X){return O.H.useCallback(k,X)},ve.useContext=function(k){return O.H.useContext(k)},ve.useDebugValue=function(){},ve.useDeferredValue=function(k,X){return O.H.useDeferredValue(k,X)},ve.useEffect=function(k,X,ae){var re=O.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(k,X)},ve.useId=function(){return O.H.useId()},ve.useImperativeHandle=function(k,X,ae){return O.H.useImperativeHandle(k,X,ae)},ve.useInsertionEffect=function(k,X){return O.H.useInsertionEffect(k,X)},ve.useLayoutEffect=function(k,X){return O.H.useLayoutEffect(k,X)},ve.useMemo=function(k,X){return O.H.useMemo(k,X)},ve.useOptimistic=function(k,X){return O.H.useOptimistic(k,X)},ve.useReducer=function(k,X,ae){return O.H.useReducer(k,X,ae)},ve.useRef=function(k){return O.H.useRef(k)},ve.useState=function(k){return O.H.useState(k)},ve.useSyncExternalStore=function(k,X,ae){return O.H.useSyncExternalStore(k,X,ae)},ve.useTransition=function(){return O.H.useTransition()},ve.version="19.1.1",ve}var Gx;function rh(){return Gx||(Gx=1,Wf.exports=Ab()),Wf.exports}var Kf={exports:{}},jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx;function Mb(){if(qx)return jt;qx=1;var e=rh();function t(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:f,containerInfo:h,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,jt.createPortal=function(f,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(f,h,null,g)},jt.flushSync=function(f){var h=u.T,g=a.p;try{if(u.T=null,a.p=2,f)return f()}finally{u.T=h,a.p=g,a.d.f()}},jt.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(f,h))},jt.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},jt.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?a.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:w}):g==="script"&&a.d.X(f,{crossOrigin:v,integrity:y,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jt.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);a.d.M(f,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(f)},jt.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);a.d.L(f,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jt.preloadModule=function(f,h){if(typeof f=="string")if(h){var g=d(h.as,h.crossOrigin);a.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(f)},jt.requestFormReset=function(f){a.d.r(f)},jt.unstable_batchedUpdates=function(f,h){return f(h)},jt.useFormState=function(f,h,g){return u.H.useFormState(f,h,g)},jt.useFormStatus=function(){return u.H.useHostTransitionStatus()},jt.version="19.1.1",jt}var Yx;function Ob(){if(Yx)return Kf.exports;Yx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Kf.exports=Mb(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx;function Rb(){if(Fx)return Fs;Fx=1;var e=jb(),t=rh(),n=Ob();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,s=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(s=r.return),i=r.return;while(i)}return r.tag===3?s:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(a(188))}function f(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var s=i,c=r;;){var p=s.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===s)return d(p),i;if(x===c)return d(p),r;x=x.sibling}throw Error(a(188))}if(s.return!==c.return)s=p,c=x;else{for(var S=!1,A=p.child;A;){if(A===s){S=!0,s=p,c=x;break}if(A===c){S=!0,c=p,s=x;break}A=A.sibling}if(!S){for(A=x.child;A;){if(A===s){S=!0,s=x,c=p;break}if(A===c){S=!0,c=x,s=p;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?i:r}function h(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=h(i),r!==null)return r;i=i.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),E=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var le=Symbol.for("react.client.reference");function de(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===le?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case L:return"Profiler";case j:return"StrictMode";case O:return"Suspense";case N:return"SuspenseList";case Y:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case w:return"Portal";case E:return(i.displayName||"Context")+".Provider";case T:return(i._context.displayName||"Context")+".Consumer";case V:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return r=i.displayName||null,r!==null?r:de(i.type)||"Memo";case U:r=i._payload,i=i._init;try{return de(i(r))}catch{}}return null}var oe=Array.isArray,$=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},te=[],k=-1;function X(i){return{current:i}}function ae(i){0>k||(i.current=te[k],te[k]=null,k--)}function re(i,r){k++,te[k]=i.current,i.current=r}var ue=X(null),Se=X(null),pe=X(null),lt=X(null);function ke(i,r){switch(re(pe,r),re(Se,i),re(ue,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?px(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=px(r),i=hx(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ae(ue),re(ue,i)}function Ct(){ae(ue),ae(Se),ae(pe)}function Qn(i){i.memoizedState!==null&&re(lt,i);var r=ue.current,s=hx(r,i.type);r!==s&&(re(Se,i),re(ue,s))}function Fi(i){Se.current===i&&(ae(ue),ae(Se)),lt.current===i&&(ae(lt),Is._currentValue=J)}var ri=Object.prototype.hasOwnProperty,ku=e.unstable_scheduleCallback,Vu=e.unstable_cancelCallback,e8=e.unstable_shouldYield,t8=e.unstable_requestPaint,Ri=e.unstable_now,i8=e.unstable_getCurrentPriorityLevel,F1=e.unstable_ImmediatePriority,X1=e.unstable_UserBlockingPriority,Po=e.unstable_NormalPriority,n8=e.unstable_LowPriority,Z1=e.unstable_IdlePriority,a8=e.log,r8=e.unstable_setDisableYieldValue,Zr=null,Yt=null;function gn(i){if(typeof a8=="function"&&r8(i),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Zr,i)}catch{}}var Ft=Math.clz32?Math.clz32:l8,s8=Math.log,o8=Math.LN2;function l8(i){return i>>>=0,i===0?32:31-(s8(i)/o8|0)|0}var No=256,Bo=4194304;function Jn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function $o(i,r,s){var c=i.pendingLanes;if(c===0)return 0;var p=0,x=i.suspendedLanes,S=i.pingedLanes;i=i.warmLanes;var A=c&134217727;return A!==0?(c=A&~x,c!==0?p=Jn(c):(S&=A,S!==0?p=Jn(S):s||(s=A&~i,s!==0&&(p=Jn(s))))):(A=c&~x,A!==0?p=Jn(A):S!==0?p=Jn(S):s||(s=c&~i,s!==0&&(p=Jn(s)))),p===0?0:r!==0&&r!==p&&(r&x)===0&&(x=p&-p,s=r&-r,x>=s||x===32&&(s&4194048)!==0)?r:p}function Wr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function c8(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W1(){var i=No;return No<<=1,(No&4194048)===0&&(No=256),i}function K1(){var i=Bo;return Bo<<=1,(Bo&62914560)===0&&(Bo=4194304),i}function Du(i){for(var r=[],s=0;31>s;s++)r.push(i);return r}function Kr(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function u8(i,r,s,c,p,x){var S=i.pendingLanes;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=s,i.entangledLanes&=s,i.errorRecoveryDisabledLanes&=s,i.shellSuspendCounter=0;var A=i.entanglements,D=i.expirationTimes,_=i.hiddenUpdates;for(s=S&~s;0<s;){var Z=31-Ft(s),ee=1<<Z;A[Z]=0,D[Z]=-1;var G=_[Z];if(G!==null)for(_[Z]=null,Z=0;Z<G.length;Z++){var q=G[Z];q!==null&&(q.lane&=-536870913)}s&=~ee}c!==0&&Q1(i,c,0),x!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=x&~(S&~r))}function Q1(i,r,s){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Ft(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|s&4194090}function J1(i,r){var s=i.entangledLanes|=r;for(i=i.entanglements;s;){var c=31-Ft(s),p=1<<c;p&r|i[c]&r&&(i[c]|=r),s&=~p}}function zu(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Hu(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function em(){var i=W.p;return i!==0?i:(i=window.event,i===void 0?32:Vx(i.type))}function d8(i,r){var s=W.p;try{return W.p=i,r()}finally{W.p=s}}var xn=Math.random().toString(36).slice(2),Tt="__reactFiber$"+xn,zt="__reactProps$"+xn,Oa="__reactContainer$"+xn,Pu="__reactEvents$"+xn,f8="__reactListeners$"+xn,p8="__reactHandles$"+xn,tm="__reactResources$"+xn,Qr="__reactMarker$"+xn;function Nu(i){delete i[Tt],delete i[zt],delete i[Pu],delete i[f8],delete i[p8]}function Ra(i){var r=i[Tt];if(r)return r;for(var s=i.parentNode;s;){if(r=s[Oa]||s[Tt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(i=vx(i);i!==null;){if(s=i[Tt])return s;i=vx(i)}return r}i=s,s=i.parentNode}return null}function La(i){if(i=i[Tt]||i[Oa]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Jr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function ka(i){var r=i[tm];return r||(r=i[tm]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ct(i){i[Qr]=!0}var im=new Set,nm={};function ea(i,r){Va(i,r),Va(i+"Capture",r)}function Va(i,r){for(nm[i]=r,i=0;i<r.length;i++)im.add(r[i])}var h8=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),am={},rm={};function m8(i){return ri.call(rm,i)?!0:ri.call(am,i)?!1:h8.test(i)?rm[i]=!0:(am[i]=!0,!1)}function Io(i,r,s){if(m8(r))if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+s)}}function Uo(i,r,s){if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+s)}}function Xi(i,r,s,c){if(c===null)i.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttributeNS(r,s,""+c)}}var Bu,sm;function Da(i){if(Bu===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Bu=r&&r[1]||"",sm=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bu+i+sm}var $u=!1;function Iu(i,r){if(!i||$u)return"";$u=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(q){var G=q}Reflect.construct(i,[],ee)}else{try{ee.call()}catch(q){G=q}i.call(ee.prototype)}}else{try{throw Error()}catch(q){G=q}(ee=i())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=c.DetermineComponentFrameRoot(),S=x[0],A=x[1];if(S&&A){var D=S.split(`
`),_=A.split(`
`);for(p=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;p<_.length&&!_[p].includes("DetermineComponentFrameRoot");)p++;if(c===D.length||p===_.length)for(c=D.length-1,p=_.length-1;1<=c&&0<=p&&D[c]!==_[p];)p--;for(;1<=c&&0<=p;c--,p--)if(D[c]!==_[p]){if(c!==1||p!==1)do if(c--,p--,0>p||D[c]!==_[p]){var Z=`
`+D[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=p);break}}}finally{$u=!1,Error.prepareStackTrace=s}return(s=i?i.displayName||i.name:"")?Da(s):""}function g8(i){switch(i.tag){case 26:case 27:case 5:return Da(i.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 15:return Iu(i.type,!1);case 11:return Iu(i.type.render,!1);case 1:return Iu(i.type,!0);case 31:return Da("Activity");default:return""}}function om(i){try{var r="";do r+=g8(i),i=i.return;while(i);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function si(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function lm(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function x8(i){var r=lm(i)?"checked":"value",s=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var p=s.get,x=s.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return p.call(this)},set:function(S){c=""+S,x.call(this,S)}}),Object.defineProperty(i,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function _o(i){i._valueTracker||(i._valueTracker=x8(i))}function cm(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return i&&(c=lm(i)?i.checked?"true":"false":i.value),i=c,i!==s?(r.setValue(i),!0):!1}function Go(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var v8=/[\n"\\]/g;function oi(i){return i.replace(v8,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Uu(i,r,s,c,p,x,S,A){i.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.type=S:i.removeAttribute("type"),r!=null?S==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+si(r)):i.value!==""+si(r)&&(i.value=""+si(r)):S!=="submit"&&S!=="reset"||i.removeAttribute("value"),r!=null?_u(i,S,si(r)):s!=null?_u(i,S,si(s)):c!=null&&i.removeAttribute("value"),p==null&&x!=null&&(i.defaultChecked=!!x),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+si(A):i.removeAttribute("name")}function um(i,r,s,c,p,x,S,A){if(x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(i.type=x),r!=null||s!=null){if(!(x!=="submit"&&x!=="reset"||r!=null))return;s=s!=null?""+si(s):"",r=r!=null?""+si(r):s,A||r===i.value||(i.value=r),i.defaultValue=r}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=A?i.checked:!!c,i.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(i.name=S)}function _u(i,r,s){r==="number"&&Go(i.ownerDocument)===i||i.defaultValue===""+s||(i.defaultValue=""+s)}function za(i,r,s,c){if(i=i.options,r){r={};for(var p=0;p<s.length;p++)r["$"+s[p]]=!0;for(s=0;s<i.length;s++)p=r.hasOwnProperty("$"+i[s].value),i[s].selected!==p&&(i[s].selected=p),p&&c&&(i[s].defaultSelected=!0)}else{for(s=""+si(s),r=null,p=0;p<i.length;p++){if(i[p].value===s){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}r!==null||i[p].disabled||(r=i[p])}r!==null&&(r.selected=!0)}}function dm(i,r,s){if(r!=null&&(r=""+si(r),r!==i.value&&(i.value=r),s==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=s!=null?""+si(s):""}function fm(i,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(oe(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=si(r),i.defaultValue=s,c=i.textContent,c===s&&c!==""&&c!==null&&(i.value=c)}function Ha(i,r){if(r){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=r;return}}i.textContent=r}var y8=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pm(i,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,s):typeof s!="number"||s===0||y8.has(r)?r==="float"?i.cssFloat=s:i[r]=(""+s).trim():i[r]=s+"px"}function hm(i,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var p in r)c=r[p],r.hasOwnProperty(p)&&s[p]!==c&&pm(i,p,c)}else for(var x in r)r.hasOwnProperty(x)&&pm(i,x,r[x])}function Gu(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w8=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(i){return b8.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var qu=null;function Yu(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Pa=null,Na=null;function mm(i){var r=La(i);if(r&&(i=r.stateNode)){var s=i[zt]||null;e:switch(i=r.stateNode,r.type){case"input":if(Uu(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+oi(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==i&&c.form===i.form){var p=c[zt]||null;if(!p)throw Error(a(90));Uu(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===i.form&&cm(c)}break e;case"textarea":dm(i,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&za(i,!!s.multiple,r,!1)}}}var Fu=!1;function gm(i,r,s){if(Fu)return i(r,s);Fu=!0;try{var c=i(r);return c}finally{if(Fu=!1,(Pa!==null||Na!==null)&&(Rl(),Pa&&(r=Pa,i=Na,Na=Pa=null,mm(r),i)))for(r=0;r<i.length;r++)mm(i[r])}}function es(i,r){var s=i.stateNode;if(s===null)return null;var c=s[zt]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(Zi)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Xu=!1}var vn=null,Zu=null,Yo=null;function xm(){if(Yo)return Yo;var i,r=Zu,s=r.length,c,p="value"in vn?vn.value:vn.textContent,x=p.length;for(i=0;i<s&&r[i]===p[i];i++);var S=s-i;for(c=1;c<=S&&r[s-c]===p[x-c];c++);return Yo=p.slice(i,1<c?1-c:void 0)}function Fo(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Xo(){return!0}function vm(){return!1}function Ht(i){function r(s,c,p,x,S){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=S,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(s=i[A],this[A]=s?s(x):x[A]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Xo:vm,this.isPropagationStopped=vm,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),r}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Ht(ta),is=g({},ta,{view:0,detail:0}),S8=Ht(is),Wu,Ku,ns,Wo=g({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ns&&(ns&&i.type==="mousemove"?(Wu=i.screenX-ns.screenX,Ku=i.screenY-ns.screenY):Ku=Wu=0,ns=i),Wu)},movementY:function(i){return"movementY"in i?i.movementY:Ku}}),ym=Ht(Wo),C8=g({},Wo,{dataTransfer:0}),T8=Ht(C8),E8=g({},is,{relatedTarget:0}),Qu=Ht(E8),j8=g({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),A8=Ht(j8),M8=g({},ta,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),O8=Ht(M8),R8=g({},ta,{data:0}),wm=Ht(R8),L8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D8(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=V8[i])?!!r[i]:!1}function Ju(){return D8}var z8=g({},is,{key:function(i){if(i.key){var r=L8[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Fo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?k8[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(i){return i.type==="keypress"?Fo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),H8=Ht(z8),P8=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=Ht(P8),N8=g({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),B8=Ht(N8),$8=g({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),I8=Ht($8),U8=g({},Wo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),_8=Ht(U8),G8=g({},ta,{newState:0,oldState:0}),q8=Ht(G8),Y8=[9,13,27,32],ed=Zi&&"CompositionEvent"in window,as=null;Zi&&"documentMode"in document&&(as=document.documentMode);var F8=Zi&&"TextEvent"in window&&!as,Sm=Zi&&(!ed||as&&8<as&&11>=as),Cm=" ",Tm=!1;function Em(i,r){switch(i){case"keyup":return Y8.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ba=!1;function X8(i,r){switch(i){case"compositionend":return jm(r);case"keypress":return r.which!==32?null:(Tm=!0,Cm);case"textInput":return i=r.data,i===Cm&&Tm?null:i;default:return null}}function Z8(i,r){if(Ba)return i==="compositionend"||!ed&&Em(i,r)?(i=xm(),Yo=Zu=vn=null,Ba=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Sm&&r.locale!=="ko"?null:r.data;default:return null}}var W8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!W8[i.type]:r==="textarea"}function Mm(i,r,s,c){Pa?Na?Na.push(c):Na=[c]:Pa=c,r=Hl(r,"onChange"),0<r.length&&(s=new Zo("onChange","change",null,s,c),i.push({event:s,listeners:r}))}var rs=null,ss=null;function K8(i){lx(i,0)}function Ko(i){var r=Jr(i);if(cm(r))return i}function Om(i,r){if(i==="change")return r}var Rm=!1;if(Zi){var td;if(Zi){var id="oninput"in document;if(!id){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),id=typeof Lm.oninput=="function"}td=id}else td=!1;Rm=td&&(!document.documentMode||9<document.documentMode)}function km(){rs&&(rs.detachEvent("onpropertychange",Vm),ss=rs=null)}function Vm(i){if(i.propertyName==="value"&&Ko(ss)){var r=[];Mm(r,ss,i,Yu(i)),gm(K8,r)}}function Q8(i,r,s){i==="focusin"?(km(),rs=r,ss=s,rs.attachEvent("onpropertychange",Vm)):i==="focusout"&&km()}function J8(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ko(ss)}function e7(i,r){if(i==="click")return Ko(r)}function t7(i,r){if(i==="input"||i==="change")return Ko(r)}function i7(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Xt=typeof Object.is=="function"?Object.is:i7;function os(i,r){if(Xt(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var s=Object.keys(i),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!ri.call(r,p)||!Xt(i[p],r[p]))return!1}return!0}function Dm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function zm(i,r){var s=Dm(i);i=0;for(var c;s;){if(s.nodeType===3){if(c=i+s.textContent.length,i<=r&&c>=r)return{node:s,offset:r-i};i=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Dm(s)}}function Hm(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Hm(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Pm(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Go(i.document);r instanceof i.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)i=r.contentWindow;else break;r=Go(i.document)}return r}function nd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var n7=Zi&&"documentMode"in document&&11>=document.documentMode,$a=null,ad=null,ls=null,rd=!1;function Nm(i,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;rd||$a==null||$a!==Go(c)||(c=$a,"selectionStart"in c&&nd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ls&&os(ls,c)||(ls=c,c=Hl(ad,"onSelect"),0<c.length&&(r=new Zo("onSelect","select",null,r,s),i.push({event:r,listeners:c}),r.target=$a)))}function ia(i,r){var s={};return s[i.toLowerCase()]=r.toLowerCase(),s["Webkit"+i]="webkit"+r,s["Moz"+i]="moz"+r,s}var Ia={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},sd={},Bm={};Zi&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function na(i){if(sd[i])return sd[i];if(!Ia[i])return i;var r=Ia[i],s;for(s in r)if(r.hasOwnProperty(s)&&s in Bm)return sd[i]=r[s];return i}var $m=na("animationend"),Im=na("animationiteration"),Um=na("animationstart"),a7=na("transitionrun"),r7=na("transitionstart"),s7=na("transitioncancel"),_m=na("transitionend"),Gm=new Map,od="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");od.push("scrollEnd");function bi(i,r){Gm.set(i,r),ea(r,[i])}var qm=new WeakMap;function li(i,r){if(typeof i=="object"&&i!==null){var s=qm.get(i);return s!==void 0?s:(r={value:i,source:r,stack:om(r)},qm.set(i,r),r)}return{value:i,source:r,stack:om(r)}}var ci=[],Ua=0,ld=0;function Qo(){for(var i=Ua,r=ld=Ua=0;r<i;){var s=ci[r];ci[r++]=null;var c=ci[r];ci[r++]=null;var p=ci[r];ci[r++]=null;var x=ci[r];if(ci[r++]=null,c!==null&&p!==null){var S=c.pending;S===null?p.next=p:(p.next=S.next,S.next=p),c.pending=p}x!==0&&Ym(s,p,x)}}function Jo(i,r,s,c){ci[Ua++]=i,ci[Ua++]=r,ci[Ua++]=s,ci[Ua++]=c,ld|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function cd(i,r,s,c){return Jo(i,r,s,c),el(i)}function _a(i,r){return Jo(i,null,null,r),el(i)}function Ym(i,r,s){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s);for(var p=!1,x=i.return;x!==null;)x.childLanes|=s,c=x.alternate,c!==null&&(c.childLanes|=s),x.tag===22&&(i=x.stateNode,i===null||i._visibility&1||(p=!0)),i=x,x=x.return;return i.tag===3?(x=i.stateNode,p&&r!==null&&(p=31-Ft(s),i=x.hiddenUpdates,c=i[p],c===null?i[p]=[r]:c.push(r),r.lane=s|536870912),x):null}function el(i){if(50<Vs)throw Vs=0,gf=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ga={};function o7(i,r,s,c){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(i,r,s,c){return new o7(i,r,s,c)}function ud(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Wi(i,r){var s=i.alternate;return s===null?(s=Zt(i.tag,r,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=r,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&65011712,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,r=i.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s.refCleanup=i.refCleanup,s}function Fm(i,r){i.flags&=65011714;var s=i.alternate;return s===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,r=s.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function tl(i,r,s,c,p,x){var S=0;if(c=i,typeof i=="function")ud(i)&&(S=1);else if(typeof i=="string")S=cb(i,s,ue.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case Y:return i=Zt(31,s,r,p),i.elementType=Y,i.lanes=x,i;case b:return aa(s.children,p,x,r);case j:S=8,p|=24;break;case L:return i=Zt(12,s,r,p|2),i.elementType=L,i.lanes=x,i;case O:return i=Zt(13,s,r,p),i.elementType=O,i.lanes=x,i;case N:return i=Zt(19,s,r,p),i.elementType=N,i.lanes=x,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case M:case E:S=10;break e;case T:S=9;break e;case V:S=11;break e;case H:S=14;break e;case U:S=16,c=null;break e}S=29,s=Error(a(130,i===null?"null":typeof i,"")),c=null}return r=Zt(S,s,r,p),r.elementType=i,r.type=c,r.lanes=x,r}function aa(i,r,s,c){return i=Zt(7,i,c,r),i.lanes=s,i}function dd(i,r,s){return i=Zt(6,i,null,r),i.lanes=s,i}function fd(i,r,s){return r=Zt(4,i.children!==null?i.children:[],i.key,r),r.lanes=s,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var qa=[],Ya=0,il=null,nl=0,ui=[],di=0,ra=null,Ki=1,Qi="";function sa(i,r){qa[Ya++]=nl,qa[Ya++]=il,il=i,nl=r}function Xm(i,r,s){ui[di++]=Ki,ui[di++]=Qi,ui[di++]=ra,ra=i;var c=Ki;i=Qi;var p=32-Ft(c)-1;c&=~(1<<p),s+=1;var x=32-Ft(r)+p;if(30<x){var S=p-p%5;x=(c&(1<<S)-1).toString(32),c>>=S,p-=S,Ki=1<<32-Ft(r)+p|s<<p|c,Qi=x+i}else Ki=1<<x|s<<p|c,Qi=i}function pd(i){i.return!==null&&(sa(i,1),Xm(i,1,0))}function hd(i){for(;i===il;)il=qa[--Ya],qa[Ya]=null,nl=qa[--Ya],qa[Ya]=null;for(;i===ra;)ra=ui[--di],ui[di]=null,Qi=ui[--di],ui[di]=null,Ki=ui[--di],ui[di]=null}var Lt=null,Ze=null,Me=!1,oa=null,Li=!1,md=Error(a(519));function la(i){var r=Error(a(418,""));throw ds(li(r,i)),md}function Zm(i){var r=i.stateNode,s=i.type,c=i.memoizedProps;switch(r[Tt]=i,r[zt]=c,s){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<zs.length;s++)Te(zs[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Te("invalid",r),um(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),_o(r);break;case"select":Te("invalid",r);break;case"textarea":Te("invalid",r),fm(r,c.value,c.defaultValue,c.children),_o(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||fx(r.textContent,s)?(c.popover!=null&&(Te("beforetoggle",r),Te("toggle",r)),c.onScroll!=null&&Te("scroll",r),c.onScrollEnd!=null&&Te("scrollend",r),c.onClick!=null&&(r.onclick=Pl),r=!0):r=!1,r||la(i)}function Wm(i){for(Lt=i.return;Lt;)switch(Lt.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Lt=Lt.return}}function cs(i){if(i!==Lt)return!1;if(!Me)return Wm(i),Me=!0,!1;var r=i.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=i.type,s=!(s!=="form"&&s!=="button")||kf(i.type,i.memoizedProps)),s=!s),s&&Ze&&la(i),Wm(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(s=i.data,s==="/$"){if(r===0){Ze=Ci(i.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;i=i.nextSibling}Ze=null}}else r===27?(r=Ze,Dn(i.type)?(i=Hf,Hf=null,Ze=i):Ze=r):Ze=Lt?Ci(i.stateNode.nextSibling):null;return!0}function us(){Ze=Lt=null,Me=!1}function Km(){var i=oa;return i!==null&&(Bt===null?Bt=i:Bt.push.apply(Bt,i),oa=null),i}function ds(i){oa===null?oa=[i]:oa.push(i)}var gd=X(null),ca=null,Ji=null;function yn(i,r,s){re(gd,r._currentValue),r._currentValue=s}function en(i){i._currentValue=gd.current,ae(gd)}function xd(i,r,s){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===s)break;i=i.return}}function vd(i,r,s,c){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var x=p.dependencies;if(x!==null){var S=p.child;x=x.firstContext;e:for(;x!==null;){var A=x;x=p;for(var D=0;D<r.length;D++)if(A.context===r[D]){x.lanes|=s,A=x.alternate,A!==null&&(A.lanes|=s),xd(x.return,s,i),c||(S=null);break e}x=A.next}}else if(p.tag===18){if(S=p.return,S===null)throw Error(a(341));S.lanes|=s,x=S.alternate,x!==null&&(x.lanes|=s),xd(S,s,i),S=null}else S=p.child;if(S!==null)S.return=p;else for(S=p;S!==null;){if(S===i){S=null;break}if(p=S.sibling,p!==null){p.return=S.return,S=p;break}S=S.return}p=S}}function fs(i,r,s,c){i=null;for(var p=r,x=!1;p!==null;){if(!x){if((p.flags&524288)!==0)x=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var S=p.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=p.type;Xt(p.pendingProps.value,S.value)||(i!==null?i.push(A):i=[A])}}else if(p===lt.current){if(S=p.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(Is):i=[Is])}p=p.return}i!==null&&vd(r,i,s,c),r.flags|=262144}function al(i){for(i=i.firstContext;i!==null;){if(!Xt(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ua(i){ca=i,Ji=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Et(i){return Qm(ca,i)}function rl(i,r){return ca===null&&ua(i),Qm(i,r)}function Qm(i,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Ji===null){if(i===null)throw Error(a(308));Ji=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ji=Ji.next=r;return s}var l7=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(s,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(s){return s()})}},c7=e.unstable_scheduleCallback,u7=e.unstable_NormalPriority,st={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yd(){return{controller:new l7,data:new Map,refCount:0}}function ps(i){i.refCount--,i.refCount===0&&c7(u7,function(){i.controller.abort()})}var hs=null,wd=0,Fa=0,Xa=null;function d7(i,r){if(hs===null){var s=hs=[];wd=0,Fa=Cf(),Xa={status:"pending",value:void 0,then:function(c){s.push(c)}}}return wd++,r.then(Jm,Jm),r}function Jm(){if(--wd===0&&hs!==null){Xa!==null&&(Xa.status="fulfilled");var i=hs;hs=null,Fa=0,Xa=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function f7(i,r){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var p=0;p<s.length;p++)(0,s[p])(r)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var e2=$.S;$.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&d7(i,r),e2!==null&&e2(i,r)};var da=X(null);function bd(){var i=da.current;return i!==null?i:_e.pooledCache}function sl(i,r){r===null?re(da,da.current):re(da,r.pool)}function t2(){var i=bd();return i===null?null:{parent:st._currentValue,pool:i}}var ms=Error(a(460)),i2=Error(a(474)),ol=Error(a(542)),Sd={then:function(){}};function n2(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ll(){}function a2(i,r,s){switch(s=i[s],s===void 0?i.push(r):s!==r&&(r.then(ll,ll),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,s2(i),i;default:if(typeof r.status=="string")r.then(ll,ll);else{if(i=_e,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=c}},function(c){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,s2(i),i}throw gs=r,ms}}var gs=null;function r2(){if(gs===null)throw Error(a(459));var i=gs;return gs=null,i}function s2(i){if(i===ms||i===ol)throw Error(a(483))}var wn=!1;function Cd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Td(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function bn(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Sn(i,r,s){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,r=el(i),Ym(i,null,s),r}return Jo(i,c,r,s),el(i)}function xs(i,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,J1(i,s)}}function Ed(i,r){var s=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};x===null?p=x=S:x=x.next=S,s=s.next}while(s!==null);x===null?p=x=r:x=x.next=r}else p=x=r;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,callbacks:c.callbacks},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=r:i.next=r,s.lastBaseUpdate=r}var jd=!1;function vs(){if(jd){var i=Xa;if(i!==null)throw i}}function ys(i,r,s,c){jd=!1;var p=i.updateQueue;wn=!1;var x=p.firstBaseUpdate,S=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var D=A,_=D.next;D.next=null,S===null?x=_:S.next=_,S=D;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==S&&(A===null?Z.firstBaseUpdate=_:A.next=_,Z.lastBaseUpdate=D))}if(x!==null){var ee=p.baseState;S=0,Z=_=D=null,A=x;do{var G=A.lane&-536870913,q=G!==A.lane;if(q?(Ee&G)===G:(c&G)===G){G!==0&&G===Fa&&(jd=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var me=i,fe=A;G=r;var Ie=s;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){ee=me.call(Ie,ee,G);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,G=typeof me=="function"?me.call(Ie,ee,G):me,G==null)break e;ee=g({},ee,G);break e;case 2:wn=!0}}G=A.callback,G!==null&&(i.flags|=64,q&&(i.flags|=8192),q=p.callbacks,q===null?p.callbacks=[G]:q.push(G))}else q={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(_=Z=q,D=ee):Z=Z.next=q,S|=G;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;q=A,A=q.next,q.next=null,p.lastBaseUpdate=q,p.shared.pending=null}}while(!0);Z===null&&(D=ee),p.baseState=D,p.firstBaseUpdate=_,p.lastBaseUpdate=Z,x===null&&(p.shared.lanes=0),Rn|=S,i.lanes=S,i.memoizedState=ee}}function o2(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function l2(i,r){var s=i.callbacks;if(s!==null)for(i.callbacks=null,i=0;i<s.length;i++)o2(s[i],r)}var Za=X(null),cl=X(0);function c2(i,r){i=ln,re(cl,i),re(Za,r),ln=i|r.baseLanes}function Ad(){re(cl,ln),re(Za,Za.current)}function Md(){ln=cl.current,ae(Za),ae(cl)}var Cn=0,we=null,Be=null,tt=null,ul=!1,Wa=!1,fa=!1,dl=0,ws=0,Ka=null,p7=0;function Qe(){throw Error(a(321))}function Od(i,r){if(r===null)return!1;for(var s=0;s<r.length&&s<i.length;s++)if(!Xt(i[s],r[s]))return!1;return!0}function Rd(i,r,s,c,p,x){return Cn=x,we=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$.H=i===null||i.memoizedState===null?Y2:F2,fa=!1,x=s(c,p),fa=!1,Wa&&(x=d2(r,s,c,p)),u2(i),x}function u2(i){$.H=xl;var r=Be!==null&&Be.next!==null;if(Cn=0,tt=Be=we=null,ul=!1,ws=0,Ka=null,r)throw Error(a(300));i===null||ut||(i=i.dependencies,i!==null&&al(i)&&(ut=!0))}function d2(i,r,s,c){we=i;var p=0;do{if(Wa&&(Ka=null),ws=0,Wa=!1,25<=p)throw Error(a(301));if(p+=1,tt=Be=null,i.updateQueue!=null){var x=i.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}$.H=w7,x=r(s,c)}while(Wa);return x}function h7(){var i=$.H,r=i.useState()[0];return r=typeof r.then=="function"?bs(r):r,i=i.useState()[0],(Be!==null?Be.memoizedState:null)!==i&&(we.flags|=1024),r}function Ld(){var i=dl!==0;return dl=0,i}function kd(i,r,s){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~s}function Vd(i){if(ul){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ul=!1}Cn=0,tt=Be=we=null,Wa=!1,ws=dl=0,Ka=null}function Pt(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?we.memoizedState=tt=i:tt=tt.next=i,tt}function it(){if(Be===null){var i=we.alternate;i=i!==null?i.memoizedState:null}else i=Be.next;var r=tt===null?we.memoizedState:tt.next;if(r!==null)tt=r,Be=i;else{if(i===null)throw we.alternate===null?Error(a(467)):Error(a(310));Be=i,i={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},tt===null?we.memoizedState=tt=i:tt=tt.next=i}return tt}function Dd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bs(i){var r=ws;return ws+=1,Ka===null&&(Ka=[]),i=a2(Ka,i,r),r=we,(tt===null?r.memoizedState:tt.next)===null&&(r=r.alternate,$.H=r===null||r.memoizedState===null?Y2:F2),i}function fl(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bs(i);if(i.$$typeof===E)return Et(i)}throw Error(a(438,String(i)))}function zd(i){var r=null,s=we.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=we.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Dd(),we.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(i),c=0;c<i;c++)s[c]=F;return r.index++,s}function tn(i,r){return typeof r=="function"?r(i):r}function pl(i){var r=it();return Hd(r,Be,i)}function Hd(i,r,s){var c=i.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var p=i.baseQueue,x=c.pending;if(x!==null){if(p!==null){var S=p.next;p.next=x.next,x.next=S}r.baseQueue=p=x,c.pending=null}if(x=i.baseState,p===null)i.memoizedState=x;else{r=p.next;var A=S=null,D=null,_=r,Z=!1;do{var ee=_.lane&-536870913;if(ee!==_.lane?(Ee&ee)===ee:(Cn&ee)===ee){var G=_.revertLane;if(G===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),ee===Fa&&(Z=!0);else if((Cn&G)===G){_=_.next,G===Fa&&(Z=!0);continue}else ee={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},D===null?(A=D=ee,S=x):D=D.next=ee,we.lanes|=G,Rn|=G;ee=_.action,fa&&s(x,ee),x=_.hasEagerState?_.eagerState:s(x,ee)}else G={lane:ee,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},D===null?(A=D=G,S=x):D=D.next=G,we.lanes|=ee,Rn|=ee;_=_.next}while(_!==null&&_!==r);if(D===null?S=x:D.next=A,!Xt(x,i.memoizedState)&&(ut=!0,Z&&(s=Xa,s!==null)))throw s;i.memoizedState=x,i.baseState=S,i.baseQueue=D,c.lastRenderedState=x}return p===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Pd(i){var r=it(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=i;var c=s.dispatch,p=s.pending,x=r.memoizedState;if(p!==null){s.pending=null;var S=p=p.next;do x=i(x,S.action),S=S.next;while(S!==p);Xt(x,r.memoizedState)||(ut=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function f2(i,r,s){var c=we,p=it(),x=Me;if(x){if(s===void 0)throw Error(a(407));s=s()}else s=r();var S=!Xt((Be||p).memoizedState,s);S&&(p.memoizedState=s,ut=!0),p=p.queue;var A=m2.bind(null,c,p,i);if(Ss(2048,8,A,[i]),p.getSnapshot!==r||S||tt!==null&&tt.memoizedState.tag&1){if(c.flags|=2048,Qa(9,hl(),h2.bind(null,c,p,s,r),null),_e===null)throw Error(a(349));x||(Cn&124)!==0||p2(c,r,s)}return s}function p2(i,r,s){i.flags|=16384,i={getSnapshot:r,value:s},r=we.updateQueue,r===null?(r=Dd(),we.updateQueue=r,r.stores=[i]):(s=r.stores,s===null?r.stores=[i]:s.push(i))}function h2(i,r,s,c){r.value=s,r.getSnapshot=c,g2(r)&&x2(i)}function m2(i,r,s){return s(function(){g2(r)&&x2(i)})}function g2(i){var r=i.getSnapshot;i=i.value;try{var s=r();return!Xt(i,s)}catch{return!0}}function x2(i){var r=_a(i,2);r!==null&&ei(r,i,2)}function Nd(i){var r=Pt();if(typeof i=="function"){var s=i;if(i=s(),fa){gn(!0);try{s()}finally{gn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:i},r}function v2(i,r,s,c){return i.baseState=s,Hd(i,Be,typeof c=="function"?c:tn)}function m7(i,r,s,c,p){if(gl(i))throw Error(a(485));if(i=r.action,i!==null){var x={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){x.listeners.push(S)}};$.T!==null?s(!0):x.isTransition=!1,c(x),s=r.pending,s===null?(x.next=r.pending=x,y2(r,x)):(x.next=s.next,r.pending=s.next=x)}}function y2(i,r){var s=r.action,c=r.payload,p=i.state;if(r.isTransition){var x=$.T,S={};$.T=S;try{var A=s(p,c),D=$.S;D!==null&&D(S,A),w2(i,r,A)}catch(_){Bd(i,r,_)}finally{$.T=x}}else try{x=s(p,c),w2(i,r,x)}catch(_){Bd(i,r,_)}}function w2(i,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){b2(i,r,c)},function(c){return Bd(i,r,c)}):b2(i,r,s)}function b2(i,r,s){r.status="fulfilled",r.value=s,S2(r),i.state=s,r=i.pending,r!==null&&(s=r.next,s===r?i.pending=null:(s=s.next,r.next=s,y2(i,s)))}function Bd(i,r,s){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,S2(r),r=r.next;while(r!==c)}i.action=null}function S2(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function C2(i,r){return r}function T2(i,r){if(Me){var s=_e.formState;if(s!==null){e:{var c=we;if(Me){if(Ze){t:{for(var p=Ze,x=Li;p.nodeType!==8;){if(!x){p=null;break t}if(p=Ci(p.nextSibling),p===null){p=null;break t}}x=p.data,p=x==="F!"||x==="F"?p:null}if(p){Ze=Ci(p.nextSibling),c=p.data==="F!";break e}}la(c)}c=!1}c&&(r=s[0])}}return s=Pt(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:C2,lastRenderedState:r},s.queue=c,s=_2.bind(null,we,c),c.dispatch=s,c=Nd(!1),x=Gd.bind(null,we,!1,c.queue),c=Pt(),p={state:r,dispatch:null,action:i,pending:null},c.queue=p,s=m7.bind(null,we,p,x,s),p.dispatch=s,c.memoizedState=i,[r,s,!1]}function E2(i){var r=it();return j2(r,Be,i)}function j2(i,r,s){if(r=Hd(i,r,C2)[0],i=pl(tn)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=bs(r)}catch(S){throw S===ms?ol:S}else c=r;r=it();var p=r.queue,x=p.dispatch;return s!==r.memoizedState&&(we.flags|=2048,Qa(9,hl(),g7.bind(null,p,s),null)),[c,x,i]}function g7(i,r){i.action=r}function A2(i){var r=it(),s=Be;if(s!==null)return j2(r,s,i);it(),r=r.memoizedState,s=it();var c=s.queue.dispatch;return s.memoizedState=i,[r,c,!1]}function Qa(i,r,s,c){return i={tag:i,create:s,deps:c,inst:r,next:null},r=we.updateQueue,r===null&&(r=Dd(),we.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=i.next=i:(c=s.next,s.next=i,i.next=c,r.lastEffect=i),i}function hl(){return{destroy:void 0,resource:void 0}}function M2(){return it().memoizedState}function ml(i,r,s,c){var p=Pt();c=c===void 0?null:c,we.flags|=i,p.memoizedState=Qa(1|r,hl(),s,c)}function Ss(i,r,s,c){var p=it();c=c===void 0?null:c;var x=p.memoizedState.inst;Be!==null&&c!==null&&Od(c,Be.memoizedState.deps)?p.memoizedState=Qa(r,x,s,c):(we.flags|=i,p.memoizedState=Qa(1|r,x,s,c))}function O2(i,r){ml(8390656,8,i,r)}function R2(i,r){Ss(2048,8,i,r)}function L2(i,r){return Ss(4,2,i,r)}function k2(i,r){return Ss(4,4,i,r)}function V2(i,r){if(typeof r=="function"){i=i();var s=r(i);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function D2(i,r,s){s=s!=null?s.concat([i]):null,Ss(4,4,V2.bind(null,r,i),s)}function $d(){}function z2(i,r){var s=it();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&Od(r,c[1])?c[0]:(s.memoizedState=[i,r],i)}function H2(i,r){var s=it();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&Od(r,c[1]))return c[0];if(c=i(),fa){gn(!0);try{i()}finally{gn(!1)}}return s.memoizedState=[c,r],c}function Id(i,r,s){return s===void 0||(Cn&1073741824)!==0?i.memoizedState=r:(i.memoizedState=s,i=Bg(),we.lanes|=i,Rn|=i,s)}function P2(i,r,s,c){return Xt(s,r)?s:Za.current!==null?(i=Id(i,s,c),Xt(i,r)||(ut=!0),i):(Cn&42)===0?(ut=!0,i.memoizedState=s):(i=Bg(),we.lanes|=i,Rn|=i,r)}function N2(i,r,s,c,p){var x=W.p;W.p=x!==0&&8>x?x:8;var S=$.T,A={};$.T=A,Gd(i,!1,r,s);try{var D=p(),_=$.S;if(_!==null&&_(A,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Z=f7(D,c);Cs(i,r,Z,Jt(i))}else Cs(i,r,c,Jt(i))}catch(ee){Cs(i,r,{then:function(){},status:"rejected",reason:ee},Jt())}finally{W.p=x,$.T=S}}function x7(){}function Ud(i,r,s,c){if(i.tag!==5)throw Error(a(476));var p=B2(i).queue;N2(i,p,r,J,s===null?x7:function(){return $2(i),s(c)})}function B2(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:J},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:s},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function $2(i){var r=B2(i).next.queue;Cs(i,r,{},Jt())}function _d(){return Et(Is)}function I2(){return it().memoizedState}function U2(){return it().memoizedState}function v7(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var s=Jt();i=bn(s);var c=Sn(r,i,s);c!==null&&(ei(c,r,s),xs(c,r,s)),r={cache:yd()},i.payload=r;return}r=r.return}}function y7(i,r,s){var c=Jt();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gl(i)?G2(r,s):(s=cd(i,r,s,c),s!==null&&(ei(s,i,c),q2(s,r,c)))}function _2(i,r,s){var c=Jt();Cs(i,r,s,c)}function Cs(i,r,s,c){var p={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gl(i))G2(r,p);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var S=r.lastRenderedState,A=x(S,s);if(p.hasEagerState=!0,p.eagerState=A,Xt(A,S))return Jo(i,r,p,0),_e===null&&Qo(),!1}catch{}finally{}if(s=cd(i,r,p,c),s!==null)return ei(s,i,c),q2(s,r,c),!0}return!1}function Gd(i,r,s,c){if(c={lane:2,revertLane:Cf(),action:c,hasEagerState:!1,eagerState:null,next:null},gl(i)){if(r)throw Error(a(479))}else r=cd(i,s,c,2),r!==null&&ei(r,i,2)}function gl(i){var r=i.alternate;return i===we||r!==null&&r===we}function G2(i,r){Wa=ul=!0;var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}function q2(i,r,s){if((s&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,J1(i,s)}}var xl={readContext:Et,use:fl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Y2={readContext:Et,use:fl,useCallback:function(i,r){return Pt().memoizedState=[i,r===void 0?null:r],i},useContext:Et,useEffect:O2,useImperativeHandle:function(i,r,s){s=s!=null?s.concat([i]):null,ml(4194308,4,V2.bind(null,r,i),s)},useLayoutEffect:function(i,r){return ml(4194308,4,i,r)},useInsertionEffect:function(i,r){ml(4,2,i,r)},useMemo:function(i,r){var s=Pt();r=r===void 0?null:r;var c=i();if(fa){gn(!0);try{i()}finally{gn(!1)}}return s.memoizedState=[c,r],c},useReducer:function(i,r,s){var c=Pt();if(s!==void 0){var p=s(r);if(fa){gn(!0);try{s(r)}finally{gn(!1)}}}else p=r;return c.memoizedState=c.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},c.queue=i,i=i.dispatch=y7.bind(null,we,i),[c.memoizedState,i]},useRef:function(i){var r=Pt();return i={current:i},r.memoizedState=i},useState:function(i){i=Nd(i);var r=i.queue,s=_2.bind(null,we,r);return r.dispatch=s,[i.memoizedState,s]},useDebugValue:$d,useDeferredValue:function(i,r){var s=Pt();return Id(s,i,r)},useTransition:function(){var i=Nd(!1);return i=N2.bind(null,we,i.queue,!0,!1),Pt().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,s){var c=we,p=Pt();if(Me){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),_e===null)throw Error(a(349));(Ee&124)!==0||p2(c,r,s)}p.memoizedState=s;var x={value:s,getSnapshot:r};return p.queue=x,O2(m2.bind(null,c,x,i),[i]),c.flags|=2048,Qa(9,hl(),h2.bind(null,c,x,s,r),null),s},useId:function(){var i=Pt(),r=_e.identifierPrefix;if(Me){var s=Qi,c=Ki;s=(c&~(1<<32-Ft(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=dl++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=p7++,r="«"+r+"r"+s.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:_d,useFormState:T2,useActionState:T2,useOptimistic:function(i){var r=Pt();r.memoizedState=r.baseState=i;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Gd.bind(null,we,!0,s),s.dispatch=r,[i,r]},useMemoCache:zd,useCacheRefresh:function(){return Pt().memoizedState=v7.bind(null,we)}},F2={readContext:Et,use:fl,useCallback:z2,useContext:Et,useEffect:R2,useImperativeHandle:D2,useInsertionEffect:L2,useLayoutEffect:k2,useMemo:H2,useReducer:pl,useRef:M2,useState:function(){return pl(tn)},useDebugValue:$d,useDeferredValue:function(i,r){var s=it();return P2(s,Be.memoizedState,i,r)},useTransition:function(){var i=pl(tn)[0],r=it().memoizedState;return[typeof i=="boolean"?i:bs(i),r]},useSyncExternalStore:f2,useId:I2,useHostTransitionStatus:_d,useFormState:E2,useActionState:E2,useOptimistic:function(i,r){var s=it();return v2(s,Be,i,r)},useMemoCache:zd,useCacheRefresh:U2},w7={readContext:Et,use:fl,useCallback:z2,useContext:Et,useEffect:R2,useImperativeHandle:D2,useInsertionEffect:L2,useLayoutEffect:k2,useMemo:H2,useReducer:Pd,useRef:M2,useState:function(){return Pd(tn)},useDebugValue:$d,useDeferredValue:function(i,r){var s=it();return Be===null?Id(s,i,r):P2(s,Be.memoizedState,i,r)},useTransition:function(){var i=Pd(tn)[0],r=it().memoizedState;return[typeof i=="boolean"?i:bs(i),r]},useSyncExternalStore:f2,useId:I2,useHostTransitionStatus:_d,useFormState:A2,useActionState:A2,useOptimistic:function(i,r){var s=it();return Be!==null?v2(s,Be,i,r):(s.baseState=i,[i,s.queue.dispatch])},useMemoCache:zd,useCacheRefresh:U2},Ja=null,Ts=0;function vl(i){var r=Ts;return Ts+=1,Ja===null&&(Ja=[]),a2(Ja,i,r)}function Es(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function yl(i,r){throw r.$$typeof===v?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function X2(i){var r=i._init;return r(i._payload)}function Z2(i){function r(B,z){if(i){var I=B.deletions;I===null?(B.deletions=[z],B.flags|=16):I.push(z)}}function s(B,z){if(!i)return null;for(;z!==null;)r(B,z),z=z.sibling;return null}function c(B){for(var z=new Map;B!==null;)B.key!==null?z.set(B.key,B):z.set(B.index,B),B=B.sibling;return z}function p(B,z){return B=Wi(B,z),B.index=0,B.sibling=null,B}function x(B,z,I){return B.index=I,i?(I=B.alternate,I!==null?(I=I.index,I<z?(B.flags|=67108866,z):I):(B.flags|=67108866,z)):(B.flags|=1048576,z)}function S(B){return i&&B.alternate===null&&(B.flags|=67108866),B}function A(B,z,I,Q){return z===null||z.tag!==6?(z=dd(I,B.mode,Q),z.return=B,z):(z=p(z,I),z.return=B,z)}function D(B,z,I,Q){var se=I.type;return se===b?Z(B,z,I.props.children,Q,I.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&X2(se)===z.type)?(z=p(z,I.props),Es(z,I),z.return=B,z):(z=tl(I.type,I.key,I.props,null,B.mode,Q),Es(z,I),z.return=B,z)}function _(B,z,I,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==I.containerInfo||z.stateNode.implementation!==I.implementation?(z=fd(I,B.mode,Q),z.return=B,z):(z=p(z,I.children||[]),z.return=B,z)}function Z(B,z,I,Q,se){return z===null||z.tag!==7?(z=aa(I,B.mode,Q,se),z.return=B,z):(z=p(z,I),z.return=B,z)}function ee(B,z,I){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=dd(""+z,B.mode,I),z.return=B,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case y:return I=tl(z.type,z.key,z.props,null,B.mode,I),Es(I,z),I.return=B,I;case w:return z=fd(z,B.mode,I),z.return=B,z;case U:var Q=z._init;return z=Q(z._payload),ee(B,z,I)}if(oe(z)||ne(z))return z=aa(z,B.mode,I,null),z.return=B,z;if(typeof z.then=="function")return ee(B,vl(z),I);if(z.$$typeof===E)return ee(B,rl(B,z),I);yl(B,z)}return null}function G(B,z,I,Q){var se=z!==null?z.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return se!==null?null:A(B,z,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===se?D(B,z,I,Q):null;case w:return I.key===se?_(B,z,I,Q):null;case U:return se=I._init,I=se(I._payload),G(B,z,I,Q)}if(oe(I)||ne(I))return se!==null?null:Z(B,z,I,Q,null);if(typeof I.then=="function")return G(B,z,vl(I),Q);if(I.$$typeof===E)return G(B,z,rl(B,I),Q);yl(B,I)}return null}function q(B,z,I,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return B=B.get(I)||null,A(z,B,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return B=B.get(Q.key===null?I:Q.key)||null,D(z,B,Q,se);case w:return B=B.get(Q.key===null?I:Q.key)||null,_(z,B,Q,se);case U:var be=Q._init;return Q=be(Q._payload),q(B,z,I,Q,se)}if(oe(Q)||ne(Q))return B=B.get(I)||null,Z(z,B,Q,se,null);if(typeof Q.then=="function")return q(B,z,I,vl(Q),se);if(Q.$$typeof===E)return q(B,z,I,rl(z,Q),se);yl(z,Q)}return null}function me(B,z,I,Q){for(var se=null,be=null,ce=z,he=z=0,ft=null;ce!==null&&he<I.length;he++){ce.index>he?(ft=ce,ce=null):ft=ce.sibling;var Ae=G(B,ce,I[he],Q);if(Ae===null){ce===null&&(ce=ft);break}i&&ce&&Ae.alternate===null&&r(B,ce),z=x(Ae,z,he),be===null?se=Ae:be.sibling=Ae,be=Ae,ce=ft}if(he===I.length)return s(B,ce),Me&&sa(B,he),se;if(ce===null){for(;he<I.length;he++)ce=ee(B,I[he],Q),ce!==null&&(z=x(ce,z,he),be===null?se=ce:be.sibling=ce,be=ce);return Me&&sa(B,he),se}for(ce=c(ce);he<I.length;he++)ft=q(ce,B,he,I[he],Q),ft!==null&&(i&&ft.alternate!==null&&ce.delete(ft.key===null?he:ft.key),z=x(ft,z,he),be===null?se=ft:be.sibling=ft,be=ft);return i&&ce.forEach(function(Bn){return r(B,Bn)}),Me&&sa(B,he),se}function fe(B,z,I,Q){if(I==null)throw Error(a(151));for(var se=null,be=null,ce=z,he=z=0,ft=null,Ae=I.next();ce!==null&&!Ae.done;he++,Ae=I.next()){ce.index>he?(ft=ce,ce=null):ft=ce.sibling;var Bn=G(B,ce,Ae.value,Q);if(Bn===null){ce===null&&(ce=ft);break}i&&ce&&Bn.alternate===null&&r(B,ce),z=x(Bn,z,he),be===null?se=Bn:be.sibling=Bn,be=Bn,ce=ft}if(Ae.done)return s(B,ce),Me&&sa(B,he),se;if(ce===null){for(;!Ae.done;he++,Ae=I.next())Ae=ee(B,Ae.value,Q),Ae!==null&&(z=x(Ae,z,he),be===null?se=Ae:be.sibling=Ae,be=Ae);return Me&&sa(B,he),se}for(ce=c(ce);!Ae.done;he++,Ae=I.next())Ae=q(ce,B,he,Ae.value,Q),Ae!==null&&(i&&Ae.alternate!==null&&ce.delete(Ae.key===null?he:Ae.key),z=x(Ae,z,he),be===null?se=Ae:be.sibling=Ae,be=Ae);return i&&ce.forEach(function(bb){return r(B,bb)}),Me&&sa(B,he),se}function Ie(B,z,I,Q){if(typeof I=="object"&&I!==null&&I.type===b&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var se=I.key;z!==null;){if(z.key===se){if(se=I.type,se===b){if(z.tag===7){s(B,z.sibling),Q=p(z,I.props.children),Q.return=B,B=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===U&&X2(se)===z.type){s(B,z.sibling),Q=p(z,I.props),Es(Q,I),Q.return=B,B=Q;break e}s(B,z);break}else r(B,z);z=z.sibling}I.type===b?(Q=aa(I.props.children,B.mode,Q,I.key),Q.return=B,B=Q):(Q=tl(I.type,I.key,I.props,null,B.mode,Q),Es(Q,I),Q.return=B,B=Q)}return S(B);case w:e:{for(se=I.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===I.containerInfo&&z.stateNode.implementation===I.implementation){s(B,z.sibling),Q=p(z,I.children||[]),Q.return=B,B=Q;break e}else{s(B,z);break}else r(B,z);z=z.sibling}Q=fd(I,B.mode,Q),Q.return=B,B=Q}return S(B);case U:return se=I._init,I=se(I._payload),Ie(B,z,I,Q)}if(oe(I))return me(B,z,I,Q);if(ne(I)){if(se=ne(I),typeof se!="function")throw Error(a(150));return I=se.call(I),fe(B,z,I,Q)}if(typeof I.then=="function")return Ie(B,z,vl(I),Q);if(I.$$typeof===E)return Ie(B,z,rl(B,I),Q);yl(B,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,z!==null&&z.tag===6?(s(B,z.sibling),Q=p(z,I),Q.return=B,B=Q):(s(B,z),Q=dd(I,B.mode,Q),Q.return=B,B=Q),S(B)):s(B,z)}return function(B,z,I,Q){try{Ts=0;var se=Ie(B,z,I,Q);return Ja=null,se}catch(ce){if(ce===ms||ce===ol)throw ce;var be=Zt(29,ce,null,B.mode);return be.lanes=Q,be.return=B,be}finally{}}}var er=Z2(!0),W2=Z2(!1),fi=X(null),ki=null;function Tn(i){var r=i.alternate;re(ot,ot.current&1),re(fi,i),ki===null&&(r===null||Za.current!==null||r.memoizedState!==null)&&(ki=i)}function K2(i){if(i.tag===22){if(re(ot,ot.current),re(fi,i),ki===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(ki=i)}}else En()}function En(){re(ot,ot.current),re(fi,fi.current)}function nn(i){ae(fi),ki===i&&(ki=null),ae(ot)}var ot=X(0);function wl(i){for(var r=i;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||zf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function qd(i,r,s,c){r=i.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var Yd={enqueueSetState:function(i,r,s){i=i._reactInternals;var c=Jt(),p=bn(c);p.payload=r,s!=null&&(p.callback=s),r=Sn(i,p,c),r!==null&&(ei(r,i,c),xs(r,i,c))},enqueueReplaceState:function(i,r,s){i=i._reactInternals;var c=Jt(),p=bn(c);p.tag=1,p.payload=r,s!=null&&(p.callback=s),r=Sn(i,p,c),r!==null&&(ei(r,i,c),xs(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var s=Jt(),c=bn(s);c.tag=2,r!=null&&(c.callback=r),r=Sn(i,c,s),r!==null&&(ei(r,i,s),xs(r,i,s))}};function Q2(i,r,s,c,p,x,S){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,x,S):r.prototype&&r.prototype.isPureReactComponent?!os(s,c)||!os(p,x):!0}function J2(i,r,s,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==i&&Yd.enqueueReplaceState(r,r.state,null)}function pa(i,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(i=i.defaultProps){s===r&&(s=g({},s));for(var p in i)s[p]===void 0&&(s[p]=i[p])}return s}var bl=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function eg(i){bl(i)}function tg(i){console.error(i)}function ig(i){bl(i)}function Sl(i,r){try{var s=i.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function ng(i,r,s){try{var c=i.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Fd(i,r,s){return s=bn(s),s.tag=3,s.payload={element:null},s.callback=function(){Sl(i,r)},s}function ag(i){return i=bn(i),i.tag=3,i}function rg(i,r,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var x=c.value;i.payload=function(){return p(x)},i.callback=function(){ng(r,s,c)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(i.callback=function(){ng(r,s,c),typeof p!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function b7(i,r,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&fs(r,s,p,!0),s=fi.current,s!==null){switch(s.tag){case 13:return ki===null?vf():s.alternate===null&&We===0&&(We=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===Sd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),wf(i,c,p)),!1;case 22:return s.flags|=65536,c===Sd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),wf(i,c,p)),!1}throw Error(a(435,s.tag))}return wf(i,c,p),vf(),!1}if(Me)return r=fi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,c!==md&&(i=Error(a(422),{cause:c}),ds(li(i,s)))):(c!==md&&(r=Error(a(423),{cause:c}),ds(li(r,s))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,c=li(c,s),p=Fd(i.stateNode,c,p),Ed(i,p),We!==4&&(We=2)),!1;var x=Error(a(520),{cause:c});if(x=li(x,s),ks===null?ks=[x]:ks.push(x),We!==4&&(We=2),r===null)return!0;c=li(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,i=p&-p,s.lanes|=i,i=Fd(s.stateNode,c,i),Ed(s,i),!1;case 1:if(r=s.type,x=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ln===null||!Ln.has(x))))return s.flags|=65536,p&=-p,s.lanes|=p,p=ag(p),rg(p,i,s,c),Ed(s,p),!1}s=s.return}while(s!==null);return!1}var sg=Error(a(461)),ut=!1;function xt(i,r,s,c){r.child=i===null?W2(r,null,s,c):er(r,i.child,s,c)}function og(i,r,s,c,p){s=s.render;var x=r.ref;if("ref"in c){var S={};for(var A in c)A!=="ref"&&(S[A]=c[A])}else S=c;return ua(r),c=Rd(i,r,s,S,x,p),A=Ld(),i!==null&&!ut?(kd(i,r,p),an(i,r,p)):(Me&&A&&pd(r),r.flags|=1,xt(i,r,c,p),r.child)}function lg(i,r,s,c,p){if(i===null){var x=s.type;return typeof x=="function"&&!ud(x)&&x.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=x,cg(i,r,x,c,p)):(i=tl(s.type,null,c,r,r.mode,p),i.ref=r.ref,i.return=r,r.child=i)}if(x=i.child,!tf(i,p)){var S=x.memoizedProps;if(s=s.compare,s=s!==null?s:os,s(S,c)&&i.ref===r.ref)return an(i,r,p)}return r.flags|=1,i=Wi(x,c),i.ref=r.ref,i.return=r,r.child=i}function cg(i,r,s,c,p){if(i!==null){var x=i.memoizedProps;if(os(x,c)&&i.ref===r.ref)if(ut=!1,r.pendingProps=c=x,tf(i,p))(i.flags&131072)!==0&&(ut=!0);else return r.lanes=i.lanes,an(i,r,p)}return Xd(i,r,s,c,p)}function ug(i,r,s){var c=r.pendingProps,p=c.children,x=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=x!==null?x.baseLanes|s:s,i!==null){for(p=r.child=i.child,x=0;p!==null;)x=x|p.lanes|p.childLanes,p=p.sibling;r.childLanes=x&~c}else r.childLanes=0,r.child=null;return dg(i,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&sl(r,x!==null?x.cachePool:null),x!==null?c2(r,x):Ad(),K2(r);else return r.lanes=r.childLanes=536870912,dg(i,r,x!==null?x.baseLanes|s:s,s)}else x!==null?(sl(r,x.cachePool),c2(r,x),En(),r.memoizedState=null):(i!==null&&sl(r,null),Ad(),En());return xt(i,r,p,s),r.child}function dg(i,r,s,c){var p=bd();return p=p===null?null:{parent:st._currentValue,pool:p},r.memoizedState={baseLanes:s,cachePool:p},i!==null&&sl(r,null),Ad(),K2(r),i!==null&&fs(i,r,c,!0),null}function Cl(i,r){var s=r.ref;if(s===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(i===null||i.ref!==s)&&(r.flags|=4194816)}}function Xd(i,r,s,c,p){return ua(r),s=Rd(i,r,s,c,void 0,p),c=Ld(),i!==null&&!ut?(kd(i,r,p),an(i,r,p)):(Me&&c&&pd(r),r.flags|=1,xt(i,r,s,p),r.child)}function fg(i,r,s,c,p,x){return ua(r),r.updateQueue=null,s=d2(r,c,s,p),u2(i),c=Ld(),i!==null&&!ut?(kd(i,r,x),an(i,r,x)):(Me&&c&&pd(r),r.flags|=1,xt(i,r,s,x),r.child)}function pg(i,r,s,c,p){if(ua(r),r.stateNode===null){var x=Ga,S=s.contextType;typeof S=="object"&&S!==null&&(x=Et(S)),x=new s(c,x),r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=Yd,r.stateNode=x,x._reactInternals=r,x=r.stateNode,x.props=c,x.state=r.memoizedState,x.refs={},Cd(r),S=s.contextType,x.context=typeof S=="object"&&S!==null?Et(S):Ga,x.state=r.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(qd(r,s,S,c),x.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(S=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),S!==x.state&&Yd.enqueueReplaceState(x,x.state,null),ys(r,c,x,p),vs(),x.state=r.memoizedState),typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){x=r.stateNode;var A=r.memoizedProps,D=pa(s,A);x.props=D;var _=x.context,Z=s.contextType;S=Ga,typeof Z=="object"&&Z!==null&&(S=Et(Z));var ee=s.getDerivedStateFromProps;Z=typeof ee=="function"||typeof x.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Z||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(A||_!==S)&&J2(r,x,c,S),wn=!1;var G=r.memoizedState;x.state=G,ys(r,c,x,p),vs(),_=r.memoizedState,A||G!==_||wn?(typeof ee=="function"&&(qd(r,s,ee,c),_=r.memoizedState),(D=wn||Q2(r,s,D,c,G,_,S))?(Z||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(r.flags|=4194308)):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=_),x.props=c,x.state=_,x.context=S,c=D):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{x=r.stateNode,Td(i,r),S=r.memoizedProps,Z=pa(s,S),x.props=Z,ee=r.pendingProps,G=x.context,_=s.contextType,D=Ga,typeof _=="object"&&_!==null&&(D=Et(_)),A=s.getDerivedStateFromProps,(_=typeof A=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==ee||G!==D)&&J2(r,x,c,D),wn=!1,G=r.memoizedState,x.state=G,ys(r,c,x,p),vs();var q=r.memoizedState;S!==ee||G!==q||wn||i!==null&&i.dependencies!==null&&al(i.dependencies)?(typeof A=="function"&&(qd(r,s,A,c),q=r.memoizedState),(Z=wn||Q2(r,s,Z,c,G,q,D)||i!==null&&i.dependencies!==null&&al(i.dependencies))?(_||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(c,q,D),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(c,q,D)),typeof x.componentDidUpdate=="function"&&(r.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof x.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=q),x.props=c,x.state=q,x.context=D,c=Z):(typeof x.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),c=!1)}return x=c,Cl(i,r),c=(r.flags&128)!==0,x||c?(x=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:x.render(),r.flags|=1,i!==null&&c?(r.child=er(r,i.child,null,p),r.child=er(r,null,s,p)):xt(i,r,s,p),r.memoizedState=x.state,i=r.child):i=an(i,r,p),i}function hg(i,r,s,c){return us(),r.flags|=256,xt(i,r,s,c),r.child}var Zd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wd(i){return{baseLanes:i,cachePool:t2()}}function Kd(i,r,s){return i=i!==null?i.childLanes&~s:0,r&&(i|=pi),i}function mg(i,r,s){var c=r.pendingProps,p=!1,x=(r.flags&128)!==0,S;if((S=x)||(S=i!==null&&i.memoizedState===null?!1:(ot.current&2)!==0),S&&(p=!0,r.flags&=-129),S=(r.flags&32)!==0,r.flags&=-33,i===null){if(Me){if(p?Tn(r):En(),Me){var A=Ze,D;if(D=A){e:{for(D=A,A=Li;D.nodeType!==8;){if(!A){A=null;break e}if(D=Ci(D.nextSibling),D===null){A=null;break e}}A=D}A!==null?(r.memoizedState={dehydrated:A,treeContext:ra!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},D=Zt(18,null,null,0),D.stateNode=A,D.return=r,r.child=D,Lt=r,Ze=null,D=!0):D=!1}D||la(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return zf(A)?r.lanes=32:r.lanes=536870912,null;nn(r)}return A=c.children,c=c.fallback,p?(En(),p=r.mode,A=Tl({mode:"hidden",children:A},p),c=aa(c,p,s,null),A.return=r,c.return=r,A.sibling=c,r.child=A,p=r.child,p.memoizedState=Wd(s),p.childLanes=Kd(i,S,s),r.memoizedState=Zd,c):(Tn(r),Qd(r,A))}if(D=i.memoizedState,D!==null&&(A=D.dehydrated,A!==null)){if(x)r.flags&256?(Tn(r),r.flags&=-257,r=Jd(i,r,s)):r.memoizedState!==null?(En(),r.child=i.child,r.flags|=128,r=null):(En(),p=c.fallback,A=r.mode,c=Tl({mode:"visible",children:c.children},A),p=aa(p,A,s,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,er(r,i.child,null,s),c=r.child,c.memoizedState=Wd(s),c.childLanes=Kd(i,S,s),r.memoizedState=Zd,r=p);else if(Tn(r),zf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var _=S.dgst;S=_,c=Error(a(419)),c.stack="",c.digest=S,ds({value:c,source:null,stack:null}),r=Jd(i,r,s)}else if(ut||fs(i,r,s,!1),S=(s&i.childLanes)!==0,ut||S){if(S=_e,S!==null&&(c=s&-s,c=(c&42)!==0?1:zu(c),c=(c&(S.suspendedLanes|s))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,_a(i,c),ei(S,i,c),sg;A.data==="$?"||vf(),r=Jd(i,r,s)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=D.treeContext,Ze=Ci(A.nextSibling),Lt=r,Me=!0,oa=null,Li=!1,i!==null&&(ui[di++]=Ki,ui[di++]=Qi,ui[di++]=ra,Ki=i.id,Qi=i.overflow,ra=r),r=Qd(r,c.children),r.flags|=4096);return r}return p?(En(),p=c.fallback,A=r.mode,D=i.child,_=D.sibling,c=Wi(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,_!==null?p=Wi(_,p):(p=aa(p,A,s,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,A=i.child.memoizedState,A===null?A=Wd(s):(D=A.cachePool,D!==null?(_=st._currentValue,D=D.parent!==_?{parent:_,pool:_}:D):D=t2(),A={baseLanes:A.baseLanes|s,cachePool:D}),p.memoizedState=A,p.childLanes=Kd(i,S,s),r.memoizedState=Zd,c):(Tn(r),s=i.child,i=s.sibling,s=Wi(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,i!==null&&(S=r.deletions,S===null?(r.deletions=[i],r.flags|=16):S.push(i)),r.child=s,r.memoizedState=null,s)}function Qd(i,r){return r=Tl({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Tl(i,r){return i=Zt(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Jd(i,r,s){return er(r,i.child,null,s),i=Qd(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function gg(i,r,s){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),xd(i.return,r,s)}function ef(i,r,s,c,p){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=p)}function xg(i,r,s){var c=r.pendingProps,p=c.revealOrder,x=c.tail;if(xt(i,r,c.children,s),c=ot.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&gg(i,s,r);else if(i.tag===19)gg(i,s,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(re(ot,c),p){case"forwards":for(s=r.child,p=null;s!==null;)i=s.alternate,i!==null&&wl(i)===null&&(p=s),s=s.sibling;s=p,s===null?(p=r.child,r.child=null):(p=s.sibling,s.sibling=null),ef(r,!1,p,s,x);break;case"backwards":for(s=null,p=r.child,r.child=null;p!==null;){if(i=p.alternate,i!==null&&wl(i)===null){r.child=p;break}i=p.sibling,p.sibling=s,s=p,p=i}ef(r,!0,s,null,x);break;case"together":ef(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function an(i,r,s){if(i!==null&&(r.dependencies=i.dependencies),Rn|=r.lanes,(s&r.childLanes)===0)if(i!==null){if(fs(i,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,s=Wi(i,i.pendingProps),r.child=s,s.return=r;i.sibling!==null;)i=i.sibling,s=s.sibling=Wi(i,i.pendingProps),s.return=r;s.sibling=null}return r.child}function tf(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&al(i)))}function S7(i,r,s){switch(r.tag){case 3:ke(r,r.stateNode.containerInfo),yn(r,st,i.memoizedState.cache),us();break;case 27:case 5:Qn(r);break;case 4:ke(r,r.stateNode.containerInfo);break;case 10:yn(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Tn(r),r.flags|=128,null):(s&r.child.childLanes)!==0?mg(i,r,s):(Tn(r),i=an(i,r,s),i!==null?i.sibling:null);Tn(r);break;case 19:var p=(i.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(fs(i,r,s,!1),c=(s&r.childLanes)!==0),p){if(c)return xg(i,r,s);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),re(ot,ot.current),c)break;return null;case 22:case 23:return r.lanes=0,ug(i,r,s);case 24:yn(r,st,i.memoizedState.cache)}return an(i,r,s)}function vg(i,r,s){if(i!==null)if(i.memoizedProps!==r.pendingProps)ut=!0;else{if(!tf(i,s)&&(r.flags&128)===0)return ut=!1,S7(i,r,s);ut=(i.flags&131072)!==0}else ut=!1,Me&&(r.flags&1048576)!==0&&Xm(r,nl,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,p=c._init;if(c=p(c._payload),r.type=c,typeof c=="function")ud(c)?(i=pa(c,i),r.tag=1,r=pg(null,r,c,i,s)):(r.tag=0,r=Xd(null,r,c,i,s));else{if(c!=null){if(p=c.$$typeof,p===V){r.tag=11,r=og(null,r,c,i,s);break e}else if(p===H){r.tag=14,r=lg(null,r,c,i,s);break e}}throw r=de(c)||c,Error(a(306,r,""))}}return r;case 0:return Xd(i,r,r.type,r.pendingProps,s);case 1:return c=r.type,p=pa(c,r.pendingProps),pg(i,r,c,p,s);case 3:e:{if(ke(r,r.stateNode.containerInfo),i===null)throw Error(a(387));c=r.pendingProps;var x=r.memoizedState;p=x.element,Td(i,r),ys(r,c,null,s);var S=r.memoizedState;if(c=S.cache,yn(r,st,c),c!==x.cache&&vd(r,[st],s,!0),vs(),c=S.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:S.cache},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){r=hg(i,r,c,s);break e}else if(c!==p){p=li(Error(a(424)),r),ds(p),r=hg(i,r,c,s);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ze=Ci(i.firstChild),Lt=r,Me=!0,oa=null,Li=!0,s=W2(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(us(),c===p){r=an(i,r,s);break e}xt(i,r,c,s)}r=r.child}return r;case 26:return Cl(i,r),i===null?(s=Sx(r.type,null,r.pendingProps,null))?r.memoizedState=s:Me||(s=r.type,i=r.pendingProps,c=Nl(pe.current).createElement(s),c[Tt]=r,c[zt]=i,yt(c,s,i),ct(c),r.stateNode=c):r.memoizedState=Sx(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Qn(r),i===null&&Me&&(c=r.stateNode=yx(r.type,r.pendingProps,pe.current),Lt=r,Li=!0,p=Ze,Dn(r.type)?(Hf=p,Ze=Ci(c.firstChild)):Ze=p),xt(i,r,r.pendingProps.children,s),Cl(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Me&&((p=c=Ze)&&(c=W7(c,r.type,r.pendingProps,Li),c!==null?(r.stateNode=c,Lt=r,Ze=Ci(c.firstChild),Li=!1,p=!0):p=!1),p||la(r)),Qn(r),p=r.type,x=r.pendingProps,S=i!==null?i.memoizedProps:null,c=x.children,kf(p,x)?c=null:S!==null&&kf(p,S)&&(r.flags|=32),r.memoizedState!==null&&(p=Rd(i,r,h7,null,null,s),Is._currentValue=p),Cl(i,r),xt(i,r,c,s),r.child;case 6:return i===null&&Me&&((i=s=Ze)&&(s=K7(s,r.pendingProps,Li),s!==null?(r.stateNode=s,Lt=r,Ze=null,i=!0):i=!1),i||la(r)),null;case 13:return mg(i,r,s);case 4:return ke(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=er(r,null,c,s):xt(i,r,c,s),r.child;case 11:return og(i,r,r.type,r.pendingProps,s);case 7:return xt(i,r,r.pendingProps,s),r.child;case 8:return xt(i,r,r.pendingProps.children,s),r.child;case 12:return xt(i,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,yn(r,r.type,c.value),xt(i,r,c.children,s),r.child;case 9:return p=r.type._context,c=r.pendingProps.children,ua(r),p=Et(p),c=c(p),r.flags|=1,xt(i,r,c,s),r.child;case 14:return lg(i,r,r.type,r.pendingProps,s);case 15:return cg(i,r,r.type,r.pendingProps,s);case 19:return xg(i,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},i===null?(s=Tl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Wi(i.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return ug(i,r,s);case 24:return ua(r),c=Et(st),i===null?(p=bd(),p===null&&(p=_e,x=yd(),p.pooledCache=x,x.refCount++,x!==null&&(p.pooledCacheLanes|=s),p=x),r.memoizedState={parent:c,cache:p},Cd(r),yn(r,st,p)):((i.lanes&s)!==0&&(Td(i,r),ys(r,null,null,s),vs()),p=i.memoizedState,x=r.memoizedState,p.parent!==c?(p={parent:c,cache:c},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),yn(r,st,c)):(c=x.cache,yn(r,st,c),c!==p.cache&&vd(r,[st],s,!0))),xt(i,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function rn(i){i.flags|=4}function yg(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!Ax(r)){if(r=fi.current,r!==null&&((Ee&4194048)===Ee?ki!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||r!==ki))throw gs=Sd,i2;i.flags|=8192}}function El(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?K1():536870912,i.lanes|=r,ar|=r)}function js(i,r){if(!Me)switch(i.tailMode){case"hidden":r=i.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Fe(i){var r=i.alternate!==null&&i.alternate.child===i.child,s=0,c=0;if(r)for(var p=i.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=s,r}function C7(i,r,s){var c=r.pendingProps;switch(hd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(r),null;case 1:return Fe(r),null;case 3:return s=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),en(st),Ct(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(i===null||i.child===null)&&(cs(r)?rn(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Km())),Fe(r),null;case 26:return s=r.memoizedState,i===null?(rn(r),s!==null?(Fe(r),yg(r,s)):(Fe(r),r.flags&=-16777217)):s?s!==i.memoizedState?(rn(r),Fe(r),yg(r,s)):(Fe(r),r.flags&=-16777217):(i.memoizedProps!==c&&rn(r),Fe(r),r.flags&=-16777217),null;case 27:Fi(r),s=pe.current;var p=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&rn(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}i=ue.current,cs(r)?Zm(r):(i=yx(p,c,s),r.stateNode=i,rn(r))}return Fe(r),null;case 5:if(Fi(r),s=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&rn(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}if(i=ue.current,cs(r))Zm(r);else{switch(p=Nl(pe.current),i){case 1:i=p.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=p.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=p.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?p.createElement(s,{is:c.is}):p.createElement(s)}}i[Tt]=r,i[zt]=c;e:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)i.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break e;for(;p.sibling===null;){if(p.return===null||p.return===r)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=i;e:switch(yt(i,s,c),s){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&rn(r)}}return Fe(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&rn(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=pe.current,cs(r)){if(i=r.stateNode,s=r.memoizedProps,c=null,p=Lt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}i[Tt]=r,i=!!(i.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||fx(i.nodeValue,s)),i||la(r)}else i=Nl(i).createTextNode(c),i[Tt]=r,r.stateNode=i}return Fe(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=cs(r),c!==null&&c.dehydrated!==null){if(i===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Tt]=r}else us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fe(r),p=!1}else p=Km(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(nn(r),r):(nn(r),null)}if(nn(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,i=i!==null&&i.memoizedState!==null,s){c=r.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var x=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(x=c.memoizedState.cachePool.pool),x!==p&&(c.flags|=2048)}return s!==i&&s&&(r.child.flags|=8192),El(r,r.updateQueue),Fe(r),null;case 4:return Ct(),i===null&&Af(r.stateNode.containerInfo),Fe(r),null;case 10:return en(r.type),Fe(r),null;case 19:if(ae(ot),p=r.memoizedState,p===null)return Fe(r),null;if(c=(r.flags&128)!==0,x=p.rendering,x===null)if(c)js(p,!1);else{if(We!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(x=wl(i),x!==null){for(r.flags|=128,js(p,!1),i=x.updateQueue,r.updateQueue=i,El(r,i),r.subtreeFlags=0,i=s,s=r.child;s!==null;)Fm(s,i),s=s.sibling;return re(ot,ot.current&1|2),r.child}i=i.sibling}p.tail!==null&&Ri()>Ml&&(r.flags|=128,c=!0,js(p,!1),r.lanes=4194304)}else{if(!c)if(i=wl(x),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,El(r,i),js(p,!0),p.tail===null&&p.tailMode==="hidden"&&!x.alternate&&!Me)return Fe(r),null}else 2*Ri()-p.renderingStartTime>Ml&&s!==536870912&&(r.flags|=128,c=!0,js(p,!1),r.lanes=4194304);p.isBackwards?(x.sibling=r.child,r.child=x):(i=p.last,i!==null?i.sibling=x:r.child=x,p.last=x)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Ri(),r.sibling=null,i=ot.current,re(ot,c?i&1|2:i&1),r):(Fe(r),null);case 22:case 23:return nn(r),Md(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Fe(r),r.subtreeFlags&6&&(r.flags|=8192)):Fe(r),s=r.updateQueue,s!==null&&El(r,s.retryQueue),s=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),i!==null&&ae(da),null;case 24:return s=null,i!==null&&(s=i.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),en(st),Fe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function T7(i,r){switch(hd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return en(st),Ct(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Fi(r),null;case 13:if(nn(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));us()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ae(ot),null;case 4:return Ct(),null;case 10:return en(r.type),null;case 22:case 23:return nn(r),Md(),i!==null&&ae(da),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return en(st),null;case 25:return null;default:return null}}function wg(i,r){switch(hd(r),r.tag){case 3:en(st),Ct();break;case 26:case 27:case 5:Fi(r);break;case 4:Ct();break;case 13:nn(r);break;case 19:ae(ot);break;case 10:en(r.type);break;case 22:case 23:nn(r),Md(),i!==null&&ae(da);break;case 24:en(st)}}function As(i,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&i)===i){c=void 0;var x=s.create,S=s.inst;c=x(),S.destroy=c}s=s.next}while(s!==p)}}catch(A){Ue(r,r.return,A)}}function jn(i,r,s){try{var c=r.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var x=p.next;c=x;do{if((c.tag&i)===i){var S=c.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,p=r;var D=s,_=A;try{_()}catch(Z){Ue(p,D,Z)}}}c=c.next}while(c!==x)}}catch(Z){Ue(r,r.return,Z)}}function bg(i){var r=i.updateQueue;if(r!==null){var s=i.stateNode;try{l2(r,s)}catch(c){Ue(i,i.return,c)}}}function Sg(i,r,s){s.props=pa(i.type,i.memoizedProps),s.state=i.memoizedState;try{s.componentWillUnmount()}catch(c){Ue(i,r,c)}}function Ms(i,r){try{var s=i.ref;if(s!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof s=="function"?i.refCleanup=s(c):s.current=c}}catch(p){Ue(i,r,p)}}function Vi(i,r){var s=i.ref,c=i.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){Ue(i,r,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){Ue(i,r,p)}else s.current=null}function Cg(i){var r=i.type,s=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){Ue(i,i.return,p)}}function nf(i,r,s){try{var c=i.stateNode;q7(c,i.type,s,r),c[zt]=r}catch(p){Ue(i,i.return,p)}}function Tg(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Dn(i.type)||i.tag===4}function af(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Tg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Dn(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function rf(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(i,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(i),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(c===27&&Dn(i.type)&&(s=i.stateNode,r=null),i=i.child,i!==null))for(rf(i,r,s),i=i.sibling;i!==null;)rf(i,r,s),i=i.sibling}function jl(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?s.insertBefore(i,r):s.appendChild(i);else if(c!==4&&(c===27&&Dn(i.type)&&(s=i.stateNode),i=i.child,i!==null))for(jl(i,r,s),i=i.sibling;i!==null;)jl(i,r,s),i=i.sibling}function Eg(i){var r=i.stateNode,s=i.memoizedProps;try{for(var c=i.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);yt(r,c,s),r[Tt]=i,r[zt]=s}catch(x){Ue(i,i.return,x)}}var sn=!1,Je=!1,sf=!1,jg=typeof WeakSet=="function"?WeakSet:Set,dt=null;function E7(i,r){if(i=i.containerInfo,Rf=Gl,i=Pm(i),nd(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else e:{s=(s=i.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var S=0,A=-1,D=-1,_=0,Z=0,ee=i,G=null;t:for(;;){for(var q;ee!==s||p!==0&&ee.nodeType!==3||(A=S+p),ee!==x||c!==0&&ee.nodeType!==3||(D=S+c),ee.nodeType===3&&(S+=ee.nodeValue.length),(q=ee.firstChild)!==null;)G=ee,ee=q;for(;;){if(ee===i)break t;if(G===s&&++_===p&&(A=S),G===x&&++Z===c&&(D=S),(q=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=q}s=A===-1||D===-1?null:{start:A,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Lf={focusedElem:i,selectionRange:s},Gl=!1,dt=r;dt!==null;)if(r=dt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,dt=i;else for(;dt!==null;){switch(r=dt,x=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&x!==null){i=void 0,s=r,p=x.memoizedProps,x=x.memoizedState,c=s.stateNode;try{var me=pa(s.type,p,s.elementType===s.type);i=c.getSnapshotBeforeUpdate(me,x),c.__reactInternalSnapshotBeforeUpdate=i}catch(fe){Ue(s,s.return,fe)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,s=i.nodeType,s===9)Df(i);else if(s===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Df(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,dt=i;break}dt=r.return}}function Ag(i,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:An(i,s),c&4&&As(5,s);break;case 1:if(An(i,s),c&4)if(i=s.stateNode,r===null)try{i.componentDidMount()}catch(S){Ue(s,s.return,S)}else{var p=pa(s.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(p,r,i.__reactInternalSnapshotBeforeUpdate)}catch(S){Ue(s,s.return,S)}}c&64&&bg(s),c&512&&Ms(s,s.return);break;case 3:if(An(i,s),c&64&&(i=s.updateQueue,i!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{l2(i,r)}catch(S){Ue(s,s.return,S)}}break;case 27:r===null&&c&4&&Eg(s);case 26:case 5:An(i,s),r===null&&c&4&&Cg(s),c&512&&Ms(s,s.return);break;case 12:An(i,s);break;case 13:An(i,s),c&4&&Rg(i,s),c&64&&(i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(s=D7.bind(null,s),Q7(i,s))));break;case 22:if(c=s.memoizedState!==null||sn,!c){r=r!==null&&r.memoizedState!==null||Je,p=sn;var x=Je;sn=c,(Je=r)&&!x?Mn(i,s,(s.subtreeFlags&8772)!==0):An(i,s),sn=p,Je=x}break;case 30:break;default:An(i,s)}}function Mg(i){var r=i.alternate;r!==null&&(i.alternate=null,Mg(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Nu(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var qe=null,Nt=!1;function on(i,r,s){for(s=s.child;s!==null;)Og(i,r,s),s=s.sibling}function Og(i,r,s){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Zr,s)}catch{}switch(s.tag){case 26:Je||Vi(s,r),on(i,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Je||Vi(s,r);var c=qe,p=Nt;Dn(s.type)&&(qe=s.stateNode,Nt=!1),on(i,r,s),Ps(s.stateNode),qe=c,Nt=p;break;case 5:Je||Vi(s,r);case 6:if(c=qe,p=Nt,qe=null,on(i,r,s),qe=c,Nt=p,qe!==null)if(Nt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(s.stateNode)}catch(x){Ue(s,r,x)}else try{qe.removeChild(s.stateNode)}catch(x){Ue(s,r,x)}break;case 18:qe!==null&&(Nt?(i=qe,xx(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.stateNode),qs(i)):xx(qe,s.stateNode));break;case 4:c=qe,p=Nt,qe=s.stateNode.containerInfo,Nt=!0,on(i,r,s),qe=c,Nt=p;break;case 0:case 11:case 14:case 15:Je||jn(2,s,r),Je||jn(4,s,r),on(i,r,s);break;case 1:Je||(Vi(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Sg(s,r,c)),on(i,r,s);break;case 21:on(i,r,s);break;case 22:Je=(c=Je)||s.memoizedState!==null,on(i,r,s),Je=c;break;default:on(i,r,s)}}function Rg(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{qs(i)}catch(s){Ue(r,r.return,s)}}function j7(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new jg),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new jg),r;default:throw Error(a(435,i.tag))}}function of(i,r){var s=j7(i);r.forEach(function(c){var p=z7.bind(null,i,c);s.has(c)||(s.add(c),c.then(p,p))})}function Wt(i,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],x=i,S=r,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Dn(A.type)){qe=A.stateNode,Nt=!1;break e}break;case 5:qe=A.stateNode,Nt=!1;break e;case 3:case 4:qe=A.stateNode.containerInfo,Nt=!0;break e}A=A.return}if(qe===null)throw Error(a(160));Og(x,S,p),qe=null,Nt=!1,x=p.alternate,x!==null&&(x.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Lg(r,i),r=r.sibling}var Si=null;function Lg(i,r){var s=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Wt(r,i),Kt(i),c&4&&(jn(3,i,i.return),As(3,i),jn(5,i,i.return));break;case 1:Wt(r,i),Kt(i),c&512&&(Je||s===null||Vi(s,s.return)),c&64&&sn&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(s=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=Si;if(Wt(r,i),Kt(i),c&512&&(Je||s===null||Vi(s,s.return)),c&4){var x=s!==null?s.memoizedState:null;if(c=i.memoizedState,s===null)if(c===null)if(i.stateNode===null){e:{c=i.type,s=i.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":x=p.getElementsByTagName("title")[0],(!x||x[Qr]||x[Tt]||x.namespaceURI==="http://www.w3.org/2000/svg"||x.hasAttribute("itemprop"))&&(x=p.createElement(c),p.head.insertBefore(x,p.querySelector("head > title"))),yt(x,c,s),x[Tt]=i,ct(x),c=x;break e;case"link":var S=Ex("link","href",p).get(c+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(x=S[A],x.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&x.getAttribute("rel")===(s.rel==null?null:s.rel)&&x.getAttribute("title")===(s.title==null?null:s.title)&&x.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break t}}x=p.createElement(c),yt(x,c,s),p.head.appendChild(x);break;case"meta":if(S=Ex("meta","content",p).get(c+(s.content||""))){for(A=0;A<S.length;A++)if(x=S[A],x.getAttribute("content")===(s.content==null?null:""+s.content)&&x.getAttribute("name")===(s.name==null?null:s.name)&&x.getAttribute("property")===(s.property==null?null:s.property)&&x.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&x.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break t}}x=p.createElement(c),yt(x,c,s),p.head.appendChild(x);break;default:throw Error(a(468,c))}x[Tt]=i,ct(x),c=x}i.stateNode=c}else jx(p,i.type,i.stateNode);else i.stateNode=Tx(p,c,i.memoizedProps);else x!==c?(x===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):x.count--,c===null?jx(p,i.type,i.stateNode):Tx(p,c,i.memoizedProps)):c===null&&i.stateNode!==null&&nf(i,i.memoizedProps,s.memoizedProps)}break;case 27:Wt(r,i),Kt(i),c&512&&(Je||s===null||Vi(s,s.return)),s!==null&&c&4&&nf(i,i.memoizedProps,s.memoizedProps);break;case 5:if(Wt(r,i),Kt(i),c&512&&(Je||s===null||Vi(s,s.return)),i.flags&32){p=i.stateNode;try{Ha(p,"")}catch(q){Ue(i,i.return,q)}}c&4&&i.stateNode!=null&&(p=i.memoizedProps,nf(i,p,s!==null?s.memoizedProps:p)),c&1024&&(sf=!0);break;case 6:if(Wt(r,i),Kt(i),c&4){if(i.stateNode===null)throw Error(a(162));c=i.memoizedProps,s=i.stateNode;try{s.nodeValue=c}catch(q){Ue(i,i.return,q)}}break;case 3:if(Il=null,p=Si,Si=Bl(r.containerInfo),Wt(r,i),Si=p,Kt(i),c&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(r.containerInfo)}catch(q){Ue(i,i.return,q)}sf&&(sf=!1,kg(i));break;case 4:c=Si,Si=Bl(i.stateNode.containerInfo),Wt(r,i),Kt(i),Si=c;break;case 12:Wt(r,i),Kt(i);break;case 13:Wt(r,i),Kt(i),i.child.flags&8192&&i.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(pf=Ri()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,of(i,c)));break;case 22:p=i.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,_=sn,Z=Je;if(sn=_||p,Je=Z||D,Wt(r,i),Je=Z,sn=_,Kt(i),c&8192)e:for(r=i.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(s===null||D||sn||Je||ha(i)),s=null,r=i;;){if(r.tag===5||r.tag===26){if(s===null){D=s=r;try{if(x=D.stateNode,p)S=x.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=D.stateNode;var ee=D.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Ue(D,D.return,q)}}}else if(r.tag===6){if(s===null){D=r;try{D.stateNode.nodeValue=p?"":D.memoizedProps}catch(q){Ue(D,D.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,of(i,s))));break;case 19:Wt(r,i),Kt(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,of(i,c)));break;case 30:break;case 21:break;default:Wt(r,i),Kt(i)}}function Kt(i){var r=i.flags;if(r&2){try{for(var s,c=i.return;c!==null;){if(Tg(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var p=s.stateNode,x=af(i);jl(i,x,p);break;case 5:var S=s.stateNode;s.flags&32&&(Ha(S,""),s.flags&=-33);var A=af(i);jl(i,A,S);break;case 3:case 4:var D=s.stateNode.containerInfo,_=af(i);rf(i,_,D);break;default:throw Error(a(161))}}catch(Z){Ue(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function kg(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;kg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function An(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Ag(i,r.alternate,r),r=r.sibling}function ha(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:jn(4,r,r.return),ha(r);break;case 1:Vi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Sg(r,r.return,s),ha(r);break;case 27:Ps(r.stateNode);case 26:case 5:Vi(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}i=i.sibling}}function Mn(i,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,p=i,x=r,S=x.flags;switch(x.tag){case 0:case 11:case 15:Mn(p,x,s),As(4,x);break;case 1:if(Mn(p,x,s),c=x,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(_){Ue(c,c.return,_)}if(c=x,p=c.updateQueue,p!==null){var A=c.stateNode;try{var D=p.shared.hiddenCallbacks;if(D!==null)for(p.shared.hiddenCallbacks=null,p=0;p<D.length;p++)o2(D[p],A)}catch(_){Ue(c,c.return,_)}}s&&S&64&&bg(x),Ms(x,x.return);break;case 27:Eg(x);case 26:case 5:Mn(p,x,s),s&&c===null&&S&4&&Cg(x),Ms(x,x.return);break;case 12:Mn(p,x,s);break;case 13:Mn(p,x,s),s&&S&4&&Rg(p,x);break;case 22:x.memoizedState===null&&Mn(p,x,s),Ms(x,x.return);break;case 30:break;default:Mn(p,x,s)}r=r.sibling}}function lf(i,r){var s=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==s&&(i!=null&&i.refCount++,s!=null&&ps(s))}function cf(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ps(i))}function Di(i,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Vg(i,r,s,c),r=r.sibling}function Vg(i,r,s,c){var p=r.flags;switch(r.tag){case 0:case 11:case 15:Di(i,r,s,c),p&2048&&As(9,r);break;case 1:Di(i,r,s,c);break;case 3:Di(i,r,s,c),p&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ps(i)));break;case 12:if(p&2048){Di(i,r,s,c),i=r.stateNode;try{var x=r.memoizedProps,S=x.id,A=x.onPostCommit;typeof A=="function"&&A(S,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(D){Ue(r,r.return,D)}}else Di(i,r,s,c);break;case 13:Di(i,r,s,c);break;case 23:break;case 22:x=r.stateNode,S=r.alternate,r.memoizedState!==null?x._visibility&2?Di(i,r,s,c):Os(i,r):x._visibility&2?Di(i,r,s,c):(x._visibility|=2,tr(i,r,s,c,(r.subtreeFlags&10256)!==0)),p&2048&&lf(S,r);break;case 24:Di(i,r,s,c),p&2048&&cf(r.alternate,r);break;default:Di(i,r,s,c)}}function tr(i,r,s,c,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var x=i,S=r,A=s,D=c,_=S.flags;switch(S.tag){case 0:case 11:case 15:tr(x,S,A,D,p),As(8,S);break;case 23:break;case 22:var Z=S.stateNode;S.memoizedState!==null?Z._visibility&2?tr(x,S,A,D,p):Os(x,S):(Z._visibility|=2,tr(x,S,A,D,p)),p&&_&2048&&lf(S.alternate,S);break;case 24:tr(x,S,A,D,p),p&&_&2048&&cf(S.alternate,S);break;default:tr(x,S,A,D,p)}r=r.sibling}}function Os(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=i,c=r,p=c.flags;switch(c.tag){case 22:Os(s,c),p&2048&&lf(c.alternate,c);break;case 24:Os(s,c),p&2048&&cf(c.alternate,c);break;default:Os(s,c)}r=r.sibling}}var Rs=8192;function ir(i){if(i.subtreeFlags&Rs)for(i=i.child;i!==null;)Dg(i),i=i.sibling}function Dg(i){switch(i.tag){case 26:ir(i),i.flags&Rs&&i.memoizedState!==null&&db(Si,i.memoizedState,i.memoizedProps);break;case 5:ir(i);break;case 3:case 4:var r=Si;Si=Bl(i.stateNode.containerInfo),ir(i),Si=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Rs,Rs=16777216,ir(i),Rs=r):ir(i));break;default:ir(i)}}function zg(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Ls(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];dt=c,Pg(c,i)}zg(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Hg(i),i=i.sibling}function Hg(i){switch(i.tag){case 0:case 11:case 15:Ls(i),i.flags&2048&&jn(9,i,i.return);break;case 3:Ls(i);break;case 12:Ls(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Al(i)):Ls(i);break;default:Ls(i)}}function Al(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];dt=c,Pg(c,i)}zg(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:jn(8,r,r.return),Al(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Al(r));break;default:Al(r)}i=i.sibling}}function Pg(i,r){for(;dt!==null;){var s=dt;switch(s.tag){case 0:case 11:case 15:jn(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ps(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,dt=c;else e:for(s=i;dt!==null;){c=dt;var p=c.sibling,x=c.return;if(Mg(c),c===s){dt=null;break e}if(p!==null){p.return=x,dt=p;break e}dt=x}}}var A7={getCacheForType:function(i){var r=Et(st),s=r.data.get(i);return s===void 0&&(s=i(),r.data.set(i,s)),s}},M7=typeof WeakMap=="function"?WeakMap:Map,ze=0,_e=null,Ce=null,Ee=0,He=0,Qt=null,On=!1,nr=!1,uf=!1,ln=0,We=0,Rn=0,ma=0,df=0,pi=0,ar=0,ks=null,Bt=null,ff=!1,pf=0,Ml=1/0,Ol=null,Ln=null,vt=0,kn=null,rr=null,sr=0,hf=0,mf=null,Ng=null,Vs=0,gf=null;function Jt(){if((ze&2)!==0&&Ee!==0)return Ee&-Ee;if($.T!==null){var i=Fa;return i!==0?i:Cf()}return em()}function Bg(){pi===0&&(pi=(Ee&536870912)===0||Me?W1():536870912);var i=fi.current;return i!==null&&(i.flags|=32),pi}function ei(i,r,s){(i===_e&&(He===2||He===9)||i.cancelPendingCommit!==null)&&(or(i,0),Vn(i,Ee,pi,!1)),Kr(i,s),((ze&2)===0||i!==_e)&&(i===_e&&((ze&2)===0&&(ma|=s),We===4&&Vn(i,Ee,pi,!1)),zi(i))}function $g(i,r,s){if((ze&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&i.expiredLanes)===0||Wr(i,r),p=c?L7(i,r):yf(i,r,!0),x=c;do{if(p===0){nr&&!c&&Vn(i,r,0,!1);break}else{if(s=i.current.alternate,x&&!O7(s)){p=yf(i,r,!1),x=!1;continue}if(p===2){if(x=r,i.errorRecoveryDisabledLanes&x)var S=0;else S=i.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){r=S;e:{var A=i;p=ks;var D=A.current.memoizedState.isDehydrated;if(D&&(or(A,S).flags|=256),S=yf(A,S,!1),S!==2){if(uf&&!D){A.errorRecoveryDisabledLanes|=x,ma|=x,p=4;break e}x=Bt,Bt=p,x!==null&&(Bt===null?Bt=x:Bt.push.apply(Bt,x))}p=S}if(x=!1,p!==2)continue}}if(p===1){or(i,0),Vn(i,r,0,!0);break}e:{switch(c=i,x=p,x){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Vn(c,r,pi,!On);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(p=pf+300-Ri(),10<p)){if(Vn(c,r,pi,!On),$o(c,0,!0)!==0)break e;c.timeoutHandle=mx(Ig.bind(null,c,s,Bt,Ol,ff,r,pi,ma,ar,On,x,2,-0,0),p);break e}Ig(c,s,Bt,Ol,ff,r,pi,ma,ar,On,x,0,-0,0)}}break}while(!0);zi(i)}function Ig(i,r,s,c,p,x,S,A,D,_,Z,ee,G,q){if(i.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&($s={stylesheets:null,count:0,unsuspend:ub},Dg(r),ee=fb(),ee!==null)){i.cancelPendingCommit=ee(Xg.bind(null,i,r,x,s,c,p,S,A,D,Z,1,G,q)),Vn(i,x,S,!_);return}Xg(i,r,x,s,c,p,S,A,D)}function O7(i){for(var r=i;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],x=p.getSnapshot;p=p.value;try{if(!Xt(x(),p))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vn(i,r,s,c){r&=~df,r&=~ma,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var p=r;0<p;){var x=31-Ft(p),S=1<<x;c[x]=-1,p&=~S}s!==0&&Q1(i,s,r)}function Rl(){return(ze&6)===0?(Ds(0),!1):!0}function xf(){if(Ce!==null){if(He===0)var i=Ce.return;else i=Ce,Ji=ca=null,Vd(i),Ja=null,Ts=0,i=Ce;for(;i!==null;)wg(i.alternate,i),i=i.return;Ce=null}}function or(i,r){var s=i.timeoutHandle;s!==-1&&(i.timeoutHandle=-1,F7(s)),s=i.cancelPendingCommit,s!==null&&(i.cancelPendingCommit=null,s()),xf(),_e=i,Ce=s=Wi(i.current,null),Ee=r,He=0,Qt=null,On=!1,nr=Wr(i,r),uf=!1,ar=pi=df=ma=Rn=We=0,Bt=ks=null,ff=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var p=31-Ft(c),x=1<<p;r|=i[p],c&=~x}return ln=r,Qo(),s}function Ug(i,r){we=null,$.H=xl,r===ms||r===ol?(r=r2(),He=3):r===i2?(r=r2(),He=4):He=r===sg?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Qt=r,Ce===null&&(We=1,Sl(i,li(r,i.current)))}function _g(){var i=$.H;return $.H=xl,i===null?xl:i}function Gg(){var i=$.A;return $.A=A7,i}function vf(){We=4,On||(Ee&4194048)!==Ee&&fi.current!==null||(nr=!0),(Rn&134217727)===0&&(ma&134217727)===0||_e===null||Vn(_e,Ee,pi,!1)}function yf(i,r,s){var c=ze;ze|=2;var p=_g(),x=Gg();(_e!==i||Ee!==r)&&(Ol=null,or(i,r)),r=!1;var S=We;e:do try{if(He!==0&&Ce!==null){var A=Ce,D=Qt;switch(He){case 8:xf(),S=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(r=!0);var _=He;if(He=0,Qt=null,lr(i,A,D,_),s&&nr){S=0;break e}break;default:_=He,He=0,Qt=null,lr(i,A,D,_)}}R7(),S=We;break}catch(Z){Ug(i,Z)}while(!0);return r&&i.shellSuspendCounter++,Ji=ca=null,ze=c,$.H=p,$.A=x,Ce===null&&(_e=null,Ee=0,Qo()),S}function R7(){for(;Ce!==null;)qg(Ce)}function L7(i,r){var s=ze;ze|=2;var c=_g(),p=Gg();_e!==i||Ee!==r?(Ol=null,Ml=Ri()+500,or(i,r)):nr=Wr(i,r);e:do try{if(He!==0&&Ce!==null){r=Ce;var x=Qt;t:switch(He){case 1:He=0,Qt=null,lr(i,r,x,1);break;case 2:case 9:if(n2(x)){He=0,Qt=null,Yg(r);break}r=function(){He!==2&&He!==9||_e!==i||(He=7),zi(i)},x.then(r,r);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:n2(x)?(He=0,Qt=null,Yg(r)):(He=0,Qt=null,lr(i,r,x,7));break;case 5:var S=null;switch(Ce.tag){case 26:S=Ce.memoizedState;case 5:case 27:var A=Ce;if(!S||Ax(S)){He=0,Qt=null;var D=A.sibling;if(D!==null)Ce=D;else{var _=A.return;_!==null?(Ce=_,Ll(_)):Ce=null}break t}}He=0,Qt=null,lr(i,r,x,5);break;case 6:He=0,Qt=null,lr(i,r,x,6);break;case 8:xf(),We=6;break e;default:throw Error(a(462))}}k7();break}catch(Z){Ug(i,Z)}while(!0);return Ji=ca=null,$.H=c,$.A=p,ze=s,Ce!==null?0:(_e=null,Ee=0,Qo(),We)}function k7(){for(;Ce!==null&&!e8();)qg(Ce)}function qg(i){var r=vg(i.alternate,i,ln);i.memoizedProps=i.pendingProps,r===null?Ll(i):Ce=r}function Yg(i){var r=i,s=r.alternate;switch(r.tag){case 15:case 0:r=fg(s,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=fg(s,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:Vd(r);default:wg(s,r),r=Ce=Fm(r,ln),r=vg(s,r,ln)}i.memoizedProps=i.pendingProps,r===null?Ll(i):Ce=r}function lr(i,r,s,c){Ji=ca=null,Vd(r),Ja=null,Ts=0;var p=r.return;try{if(b7(i,p,r,s,Ee)){We=1,Sl(i,li(s,i.current)),Ce=null;return}}catch(x){if(p!==null)throw Ce=p,x;We=1,Sl(i,li(s,i.current)),Ce=null;return}r.flags&32768?(Me||c===1?i=!0:nr||(Ee&536870912)!==0?i=!1:(On=i=!0,(c===2||c===9||c===3||c===6)&&(c=fi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Fg(r,i)):Ll(r)}function Ll(i){var r=i;do{if((r.flags&32768)!==0){Fg(r,On);return}i=r.return;var s=C7(r.alternate,r,ln);if(s!==null){Ce=s;return}if(r=r.sibling,r!==null){Ce=r;return}Ce=r=i}while(r!==null);We===0&&(We=5)}function Fg(i,r){do{var s=T7(i.alternate,i);if(s!==null){s.flags&=32767,Ce=s;return}if(s=i.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(i=i.sibling,i!==null)){Ce=i;return}Ce=i=s}while(i!==null);We=6,Ce=null}function Xg(i,r,s,c,p,x,S,A,D){i.cancelPendingCommit=null;do kl();while(vt!==0);if((ze&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(x=r.lanes|r.childLanes,x|=ld,u8(i,s,x,S,A,D),i===_e&&(Ce=_e=null,Ee=0),rr=r,kn=i,sr=s,hf=x,mf=p,Ng=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,H7(Po,function(){return Jg(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=$.T,$.T=null,p=W.p,W.p=2,S=ze,ze|=4;try{E7(i,r,s)}finally{ze=S,W.p=p,$.T=c}}vt=1,Zg(),Wg(),Kg()}}function Zg(){if(vt===1){vt=0;var i=kn,r=rr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=$.T,$.T=null;var c=W.p;W.p=2;var p=ze;ze|=4;try{Lg(r,i);var x=Lf,S=Pm(i.containerInfo),A=x.focusedElem,D=x.selectionRange;if(S!==A&&A&&A.ownerDocument&&Hm(A.ownerDocument.documentElement,A)){if(D!==null&&nd(A)){var _=D.start,Z=D.end;if(Z===void 0&&(Z=_),"selectionStart"in A)A.selectionStart=_,A.selectionEnd=Math.min(Z,A.value.length);else{var ee=A.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var q=G.getSelection(),me=A.textContent.length,fe=Math.min(D.start,me),Ie=D.end===void 0?fe:Math.min(D.end,me);!q.extend&&fe>Ie&&(S=Ie,Ie=fe,fe=S);var B=zm(A,fe),z=zm(A,Ie);if(B&&z&&(q.rangeCount!==1||q.anchorNode!==B.node||q.anchorOffset!==B.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var I=ee.createRange();I.setStart(B.node,B.offset),q.removeAllRanges(),fe>Ie?(q.addRange(I),q.extend(z.node,z.offset)):(I.setEnd(z.node,z.offset),q.addRange(I))}}}}for(ee=[],q=A;q=q.parentNode;)q.nodeType===1&&ee.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ee.length;A++){var Q=ee[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Gl=!!Rf,Lf=Rf=null}finally{ze=p,W.p=c,$.T=s}}i.current=r,vt=2}}function Wg(){if(vt===2){vt=0;var i=kn,r=rr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=$.T,$.T=null;var c=W.p;W.p=2;var p=ze;ze|=4;try{Ag(i,r.alternate,r)}finally{ze=p,W.p=c,$.T=s}}vt=3}}function Kg(){if(vt===4||vt===3){vt=0,t8();var i=kn,r=rr,s=sr,c=Ng;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?vt=5:(vt=0,rr=kn=null,Qg(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(Ln=null),Hu(s),r=r.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Zr,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=$.T,p=W.p,W.p=2,$.T=null;try{for(var x=i.onRecoverableError,S=0;S<c.length;S++){var A=c[S];x(A.value,{componentStack:A.stack})}}finally{$.T=r,W.p=p}}(sr&3)!==0&&kl(),zi(i),p=i.pendingLanes,(s&4194090)!==0&&(p&42)!==0?i===gf?Vs++:(Vs=0,gf=i):Vs=0,Ds(0)}}function Qg(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,ps(r)))}function kl(i){return Zg(),Wg(),Kg(),Jg()}function Jg(){if(vt!==5)return!1;var i=kn,r=hf;hf=0;var s=Hu(sr),c=$.T,p=W.p;try{W.p=32>s?32:s,$.T=null,s=mf,mf=null;var x=kn,S=sr;if(vt=0,rr=kn=null,sr=0,(ze&6)!==0)throw Error(a(331));var A=ze;if(ze|=4,Hg(x.current),Vg(x,x.current,S,s),ze=A,Ds(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Zr,x)}catch{}return!0}finally{W.p=p,$.T=c,Qg(i,r)}}function ex(i,r,s){r=li(s,r),r=Fd(i.stateNode,r,2),i=Sn(i,r,2),i!==null&&(Kr(i,2),zi(i))}function Ue(i,r,s){if(i.tag===3)ex(i,i,s);else for(;r!==null;){if(r.tag===3){ex(r,i,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ln===null||!Ln.has(c))){i=li(s,i),s=ag(2),c=Sn(r,s,2),c!==null&&(rg(s,c,r,i),Kr(c,2),zi(c));break}}r=r.return}}function wf(i,r,s){var c=i.pingCache;if(c===null){c=i.pingCache=new M7;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(s)||(uf=!0,p.add(s),i=V7.bind(null,i,r,s),r.then(i,i))}function V7(i,r,s){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&s,i.warmLanes&=~s,_e===i&&(Ee&s)===s&&(We===4||We===3&&(Ee&62914560)===Ee&&300>Ri()-pf?(ze&2)===0&&or(i,0):df|=s,ar===Ee&&(ar=0)),zi(i)}function tx(i,r){r===0&&(r=K1()),i=_a(i,r),i!==null&&(Kr(i,r),zi(i))}function D7(i){var r=i.memoizedState,s=0;r!==null&&(s=r.retryLane),tx(i,s)}function z7(i,r){var s=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),tx(i,s)}function H7(i,r){return ku(i,r)}var Vl=null,cr=null,bf=!1,Dl=!1,Sf=!1,ga=0;function zi(i){i!==cr&&i.next===null&&(cr===null?Vl=cr=i:cr=cr.next=i),Dl=!0,bf||(bf=!0,N7())}function Ds(i,r){if(!Sf&&Dl){Sf=!0;do for(var s=!1,c=Vl;c!==null;){if(i!==0){var p=c.pendingLanes;if(p===0)var x=0;else{var S=c.suspendedLanes,A=c.pingedLanes;x=(1<<31-Ft(42|i)+1)-1,x&=p&~(S&~A),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(s=!0,rx(c,x))}else x=Ee,x=$o(c,c===_e?x:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(x&3)===0||Wr(c,x)||(s=!0,rx(c,x));c=c.next}while(s);Sf=!1}}function P7(){ix()}function ix(){Dl=bf=!1;var i=0;ga!==0&&(Y7()&&(i=ga),ga=0);for(var r=Ri(),s=null,c=Vl;c!==null;){var p=c.next,x=nx(c,r);x===0?(c.next=null,s===null?Vl=p:s.next=p,p===null&&(cr=s)):(s=c,(i!==0||(x&3)!==0)&&(Dl=!0)),c=p}Ds(i)}function nx(i,r){for(var s=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,x=i.pendingLanes&-62914561;0<x;){var S=31-Ft(x),A=1<<S,D=p[S];D===-1?((A&s)===0||(A&c)!==0)&&(p[S]=c8(A,r)):D<=r&&(i.expiredLanes|=A),x&=~A}if(r=_e,s=Ee,s=$o(i,i===r?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,s===0||i===r&&(He===2||He===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Vu(c),i.callbackNode=null,i.callbackPriority=0;if((s&3)===0||Wr(i,s)){if(r=s&-s,r===i.callbackPriority)return r;switch(c!==null&&Vu(c),Hu(s)){case 2:case 8:s=X1;break;case 32:s=Po;break;case 268435456:s=Z1;break;default:s=Po}return c=ax.bind(null,i),s=ku(s,c),i.callbackPriority=r,i.callbackNode=s,r}return c!==null&&c!==null&&Vu(c),i.callbackPriority=2,i.callbackNode=null,2}function ax(i,r){if(vt!==0&&vt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var s=i.callbackNode;if(kl()&&i.callbackNode!==s)return null;var c=Ee;return c=$o(i,i===_e?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:($g(i,c,r),nx(i,Ri()),i.callbackNode!=null&&i.callbackNode===s?ax.bind(null,i):null)}function rx(i,r){if(kl())return null;$g(i,r,!0)}function N7(){X7(function(){(ze&6)!==0?ku(F1,P7):ix()})}function Cf(){return ga===0&&(ga=W1()),ga}function sx(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:qo(""+i)}function ox(i,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,i.id&&s.setAttribute("form",i.id),r.parentNode.insertBefore(s,r),i=new FormData(i),s.parentNode.removeChild(s),i}function B7(i,r,s,c,p){if(r==="submit"&&s&&s.stateNode===p){var x=sx((p[zt]||null).action),S=c.submitter;S&&(r=(r=S[zt]||null)?sx(r.formAction):S.getAttribute("formAction"),r!==null&&(x=r,S=null));var A=new Zo("action","action",null,c,p);i.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ga!==0){var D=S?ox(p,S):new FormData(p);Ud(s,{pending:!0,data:D,method:p.method,action:x},null,D)}}else typeof x=="function"&&(A.preventDefault(),D=S?ox(p,S):new FormData(p),Ud(s,{pending:!0,data:D,method:p.method,action:x},x,D))},currentTarget:p}]})}}for(var Tf=0;Tf<od.length;Tf++){var Ef=od[Tf],$7=Ef.toLowerCase(),I7=Ef[0].toUpperCase()+Ef.slice(1);bi($7,"on"+I7)}bi($m,"onAnimationEnd"),bi(Im,"onAnimationIteration"),bi(Um,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(a7,"onTransitionRun"),bi(r7,"onTransitionStart"),bi(s7,"onTransitionCancel"),bi(_m,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zs));function lx(i,r){r=(r&4)!==0;for(var s=0;s<i.length;s++){var c=i[s],p=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var S=c.length-1;0<=S;S--){var A=c[S],D=A.instance,_=A.currentTarget;if(A=A.listener,D!==x&&p.isPropagationStopped())break e;x=A,p.currentTarget=_;try{x(p)}catch(Z){bl(Z)}p.currentTarget=null,x=D}else for(S=0;S<c.length;S++){if(A=c[S],D=A.instance,_=A.currentTarget,A=A.listener,D!==x&&p.isPropagationStopped())break e;x=A,p.currentTarget=_;try{x(p)}catch(Z){bl(Z)}p.currentTarget=null,x=D}}}}function Te(i,r){var s=r[Pu];s===void 0&&(s=r[Pu]=new Set);var c=i+"__bubble";s.has(c)||(cx(r,i,2,!1),s.add(c))}function jf(i,r,s){var c=0;r&&(c|=4),cx(s,i,c,r)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Af(i){if(!i[zl]){i[zl]=!0,im.forEach(function(s){s!=="selectionchange"&&(U7.has(s)||jf(s,!1,i),jf(s,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[zl]||(r[zl]=!0,jf("selectionchange",!1,r))}}function cx(i,r,s,c){switch(Vx(r)){case 2:var p=mb;break;case 8:p=gb;break;default:p=If}s=p.bind(null,r,s,i),p=void 0,!Xu||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(r,s,{capture:!0,passive:p}):i.addEventListener(r,s,!0):p!==void 0?i.addEventListener(r,s,{passive:p}):i.addEventListener(r,s,!1)}function Mf(i,r,s,c,p){var x=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var A=c.stateNode.containerInfo;if(A===p)break;if(S===4)for(S=c.return;S!==null;){var D=S.tag;if((D===3||D===4)&&S.stateNode.containerInfo===p)return;S=S.return}for(;A!==null;){if(S=Ra(A),S===null)return;if(D=S.tag,D===5||D===6||D===26||D===27){c=x=S;continue e}A=A.parentNode}}c=c.return}gm(function(){var _=x,Z=Yu(s),ee=[];e:{var G=Gm.get(i);if(G!==void 0){var q=Zo,me=i;switch(i){case"keypress":if(Fo(s)===0)break e;case"keydown":case"keyup":q=H8;break;case"focusin":me="focus",q=Qu;break;case"focusout":me="blur",q=Qu;break;case"beforeblur":case"afterblur":q=Qu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=T8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=B8;break;case $m:case Im:case Um:q=A8;break;case _m:q=I8;break;case"scroll":case"scrollend":q=S8;break;case"wheel":q=_8;break;case"copy":case"cut":case"paste":q=O8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=bm;break;case"toggle":case"beforetoggle":q=q8}var fe=(r&4)!==0,Ie=!fe&&(i==="scroll"||i==="scrollend"),B=fe?G!==null?G+"Capture":null:G;fe=[];for(var z=_,I;z!==null;){var Q=z;if(I=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||I===null||B===null||(Q=es(z,B),Q!=null&&fe.push(Hs(z,Q,I))),Ie)break;z=z.return}0<fe.length&&(G=new q(G,me,null,s,Z),ee.push({event:G,listeners:fe}))}}if((r&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",G&&s!==qu&&(me=s.relatedTarget||s.fromElement)&&(Ra(me)||me[Oa]))break e;if((q||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,q?(me=s.relatedTarget||s.toElement,q=_,me=me?Ra(me):null,me!==null&&(Ie=l(me),fe=me.tag,me!==Ie||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(q=null,me=_),q!==me)){if(fe=ym,Q="onMouseLeave",B="onMouseEnter",z="mouse",(i==="pointerout"||i==="pointerover")&&(fe=bm,Q="onPointerLeave",B="onPointerEnter",z="pointer"),Ie=q==null?G:Jr(q),I=me==null?G:Jr(me),G=new fe(Q,z+"leave",q,s,Z),G.target=Ie,G.relatedTarget=I,Q=null,Ra(Z)===_&&(fe=new fe(B,z+"enter",me,s,Z),fe.target=I,fe.relatedTarget=Ie,Q=fe),Ie=Q,q&&me)t:{for(fe=q,B=me,z=0,I=fe;I;I=ur(I))z++;for(I=0,Q=B;Q;Q=ur(Q))I++;for(;0<z-I;)fe=ur(fe),z--;for(;0<I-z;)B=ur(B),I--;for(;z--;){if(fe===B||B!==null&&fe===B.alternate)break t;fe=ur(fe),B=ur(B)}fe=null}else fe=null;q!==null&&ux(ee,G,q,fe,!1),me!==null&&Ie!==null&&ux(ee,Ie,me,fe,!0)}}e:{if(G=_?Jr(_):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var se=Om;else if(Am(G))if(Rm)se=t7;else{se=J8;var be=Q8}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?_&&Gu(_.elementType)&&(se=Om):se=e7;if(se&&(se=se(i,_))){Mm(ee,se,s,Z);break e}be&&be(i,G,_),i==="focusout"&&_&&G.type==="number"&&_.memoizedProps.value!=null&&_u(G,"number",G.value)}switch(be=_?Jr(_):window,i){case"focusin":(Am(be)||be.contentEditable==="true")&&($a=be,ad=_,ls=null);break;case"focusout":ls=ad=$a=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Nm(ee,s,Z);break;case"selectionchange":if(n7)break;case"keydown":case"keyup":Nm(ee,s,Z)}var ce;if(ed)e:{switch(i){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Ba?Em(i,s)&&(he="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(he="onCompositionStart");he&&(Sm&&s.locale!=="ko"&&(Ba||he!=="onCompositionStart"?he==="onCompositionEnd"&&Ba&&(ce=xm()):(vn=Z,Zu="value"in vn?vn.value:vn.textContent,Ba=!0)),be=Hl(_,he),0<be.length&&(he=new wm(he,i,null,s,Z),ee.push({event:he,listeners:be}),ce?he.data=ce:(ce=jm(s),ce!==null&&(he.data=ce)))),(ce=F8?X8(i,s):Z8(i,s))&&(he=Hl(_,"onBeforeInput"),0<he.length&&(be=new wm("onBeforeInput","beforeinput",null,s,Z),ee.push({event:be,listeners:he}),be.data=ce)),B7(ee,i,_,s,Z)}lx(ee,r)})}function Hs(i,r,s){return{instance:i,listener:r,currentTarget:s}}function Hl(i,r){for(var s=r+"Capture",c=[];i!==null;){var p=i,x=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||x===null||(p=es(i,s),p!=null&&c.unshift(Hs(i,p,x)),p=es(i,r),p!=null&&c.push(Hs(i,p,x))),i.tag===3)return c;i=i.return}return[]}function ur(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function ux(i,r,s,c,p){for(var x=r._reactName,S=[];s!==null&&s!==c;){var A=s,D=A.alternate,_=A.stateNode;if(A=A.tag,D!==null&&D===c)break;A!==5&&A!==26&&A!==27||_===null||(D=_,p?(_=es(s,x),_!=null&&S.unshift(Hs(s,_,D))):p||(_=es(s,x),_!=null&&S.push(Hs(s,_,D)))),s=s.return}S.length!==0&&i.push({event:r,listeners:S})}var _7=/\r\n?/g,G7=/\u0000|\uFFFD/g;function dx(i){return(typeof i=="string"?i:""+i).replace(_7,`
`).replace(G7,"")}function fx(i,r){return r=dx(r),dx(i)===r}function Pl(){}function $e(i,r,s,c,p,x){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Ha(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Ha(i,""+c);break;case"className":Uo(i,"class",c);break;case"tabIndex":Uo(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(i,s,c);break;case"style":hm(i,c,x);break;case"data":if(r!=="object"){Uo(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){i.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=qo(""+c),i.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof x=="function"&&(s==="formAction"?(r!=="input"&&$e(i,r,"name",p.name,p,null),$e(i,r,"formEncType",p.formEncType,p,null),$e(i,r,"formMethod",p.formMethod,p,null),$e(i,r,"formTarget",p.formTarget,p,null)):($e(i,r,"encType",p.encType,p,null),$e(i,r,"method",p.method,p,null),$e(i,r,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=qo(""+c),i.setAttribute(s,c);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}s=qo(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""+c):i.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""):i.removeAttribute(s);break;case"capture":case"download":c===!0?i.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,c):i.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(s,c):i.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(s):i.setAttribute(s,c);break;case"popover":Te("beforetoggle",i),Te("toggle",i),Io(i,"popover",c);break;case"xlinkActuate":Xi(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Xi(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Xi(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Xi(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Xi(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Xi(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Xi(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Xi(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Xi(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Io(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=w8.get(s)||s,Io(i,s,c))}}function Of(i,r,s,c,p,x){switch(s){case"style":hm(i,c,x);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"children":typeof c=="string"?Ha(i,c):(typeof c=="number"||typeof c=="bigint")&&Ha(i,""+c);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nm.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),r=s.slice(2,p?s.length-7:void 0),x=i[zt]||null,x=x!=null?x[s]:null,typeof x=="function"&&i.removeEventListener(r,x,p),typeof c=="function")){typeof x!="function"&&x!==null&&(s in i?i[s]=null:i.hasAttribute(s)&&i.removeAttribute(s)),i.addEventListener(r,c,p);break e}s in i?i[s]=c:c===!0?i.setAttribute(s,""):Io(i,s,c)}}}function yt(i,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",i),Te("load",i);var c=!1,p=!1,x;for(x in s)if(s.hasOwnProperty(x)){var S=s[x];if(S!=null)switch(x){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:$e(i,r,x,S,s,null)}}p&&$e(i,r,"srcSet",s.srcSet,s,null),c&&$e(i,r,"src",s.src,s,null);return;case"input":Te("invalid",i);var A=x=S=p=null,D=null,_=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":p=Z;break;case"type":S=Z;break;case"checked":D=Z;break;case"defaultChecked":_=Z;break;case"value":x=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,r));break;default:$e(i,r,c,Z,s,null)}}um(i,x,A,D,_,S,p,!1),_o(i);return;case"select":Te("invalid",i),c=S=x=null;for(p in s)if(s.hasOwnProperty(p)&&(A=s[p],A!=null))switch(p){case"value":x=A;break;case"defaultValue":S=A;break;case"multiple":c=A;default:$e(i,r,p,A,s,null)}r=x,s=S,i.multiple=!!c,r!=null?za(i,!!c,r,!1):s!=null&&za(i,!!c,s,!0);return;case"textarea":Te("invalid",i),x=p=c=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":c=A;break;case"defaultValue":p=A;break;case"children":x=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:$e(i,r,S,A,s,null)}fm(i,c,p,x),_o(i);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(c=s[D],c!=null))switch(D){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:$e(i,r,D,c,s,null)}return;case"dialog":Te("beforetoggle",i),Te("toggle",i),Te("cancel",i),Te("close",i);break;case"iframe":case"object":Te("load",i);break;case"video":case"audio":for(c=0;c<zs.length;c++)Te(zs[c],i);break;case"image":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"embed":case"source":case"link":Te("error",i),Te("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in s)if(s.hasOwnProperty(_)&&(c=s[_],c!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:$e(i,r,_,c,s,null)}return;default:if(Gu(r)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&Of(i,r,Z,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&$e(i,r,A,c,s,null))}function q7(i,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,x=null,S=null,A=null,D=null,_=null,Z=null;for(q in s){var ee=s[q];if(s.hasOwnProperty(q)&&ee!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":D=ee;default:c.hasOwnProperty(q)||$e(i,r,q,null,c,ee)}}for(var G in c){var q=c[G];if(ee=s[G],c.hasOwnProperty(G)&&(q!=null||ee!=null))switch(G){case"type":x=q;break;case"name":p=q;break;case"checked":_=q;break;case"defaultChecked":Z=q;break;case"value":S=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,r));break;default:q!==ee&&$e(i,r,G,q,c,ee)}}Uu(i,S,A,D,_,Z,x,p);return;case"select":q=S=A=G=null;for(x in s)if(D=s[x],s.hasOwnProperty(x)&&D!=null)switch(x){case"value":break;case"multiple":q=D;default:c.hasOwnProperty(x)||$e(i,r,x,null,c,D)}for(p in c)if(x=c[p],D=s[p],c.hasOwnProperty(p)&&(x!=null||D!=null))switch(p){case"value":G=x;break;case"defaultValue":A=x;break;case"multiple":S=x;default:x!==D&&$e(i,r,p,x,c,D)}r=A,s=S,c=q,G!=null?za(i,!!s,G,!1):!!c!=!!s&&(r!=null?za(i,!!s,r,!0):za(i,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(A in s)if(p=s[A],s.hasOwnProperty(A)&&p!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:$e(i,r,A,null,c,p)}for(S in c)if(p=c[S],x=s[S],c.hasOwnProperty(S)&&(p!=null||x!=null))switch(S){case"value":G=p;break;case"defaultValue":q=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==x&&$e(i,r,S,p,c,x)}dm(i,G,q);return;case"option":for(var me in s)if(G=s[me],s.hasOwnProperty(me)&&G!=null&&!c.hasOwnProperty(me))switch(me){case"selected":i.selected=!1;break;default:$e(i,r,me,null,c,G)}for(D in c)if(G=c[D],q=s[D],c.hasOwnProperty(D)&&G!==q&&(G!=null||q!=null))switch(D){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:$e(i,r,D,G,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)G=s[fe],s.hasOwnProperty(fe)&&G!=null&&!c.hasOwnProperty(fe)&&$e(i,r,fe,null,c,G);for(_ in c)if(G=c[_],q=s[_],c.hasOwnProperty(_)&&G!==q&&(G!=null||q!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:$e(i,r,_,G,c,q)}return;default:if(Gu(r)){for(var Ie in s)G=s[Ie],s.hasOwnProperty(Ie)&&G!==void 0&&!c.hasOwnProperty(Ie)&&Of(i,r,Ie,void 0,c,G);for(Z in c)G=c[Z],q=s[Z],!c.hasOwnProperty(Z)||G===q||G===void 0&&q===void 0||Of(i,r,Z,G,c,q);return}}for(var B in s)G=s[B],s.hasOwnProperty(B)&&G!=null&&!c.hasOwnProperty(B)&&$e(i,r,B,null,c,G);for(ee in c)G=c[ee],q=s[ee],!c.hasOwnProperty(ee)||G===q||G==null&&q==null||$e(i,r,ee,G,c,q)}var Rf=null,Lf=null;function Nl(i){return i.nodeType===9?i:i.ownerDocument}function px(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hx(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function kf(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vf=null;function Y7(){var i=window.event;return i&&i.type==="popstate"?i===Vf?!1:(Vf=i,!0):(Vf=null,!1)}var mx=typeof setTimeout=="function"?setTimeout:void 0,F7=typeof clearTimeout=="function"?clearTimeout:void 0,gx=typeof Promise=="function"?Promise:void 0,X7=typeof queueMicrotask=="function"?queueMicrotask:typeof gx<"u"?function(i){return gx.resolve(null).then(i).catch(Z7)}:mx;function Z7(i){setTimeout(function(){throw i})}function Dn(i){return i==="head"}function xx(i,r){var s=r,c=0,p=0;do{var x=s.nextSibling;if(i.removeChild(s),x&&x.nodeType===8)if(s=x.data,s==="/$"){if(0<c&&8>c){s=c;var S=i.ownerDocument;if(s&1&&Ps(S.documentElement),s&2&&Ps(S.body),s&4)for(s=S.head,Ps(s),S=s.firstChild;S;){var A=S.nextSibling,D=S.nodeName;S[Qr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=A}}if(p===0){i.removeChild(x),qs(r);return}p--}else s==="$"||s==="$?"||s==="$!"?p++:c=s.charCodeAt(0)-48;else c=0;s=x}while(s);qs(r)}function Df(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Df(s),Nu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}i.removeChild(s)}}function W7(i,r,s,c){for(;i.nodeType===1;){var p=s;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Qr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(x=i.getAttribute("rel"),x==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(x!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(x=i.getAttribute("src"),(x!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&x&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var x=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===x)return i}else return i;if(i=Ci(i.nextSibling),i===null)break}return null}function K7(i,r,s){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!s||(i=Ci(i.nextSibling),i===null))return null;return i}function zf(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function Q7(i,r){var s=i.ownerDocument;if(i.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Ci(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Hf=null;function vx(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return i;r--}else s==="/$"&&r++}i=i.previousSibling}return null}function yx(i,r,s){switch(r=Nl(s),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function Ps(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Nu(i)}var hi=new Map,wx=new Set;function Bl(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var cn=W.d;W.d={f:J7,r:eb,D:tb,C:ib,L:nb,m:ab,X:sb,S:rb,M:ob};function J7(){var i=cn.f(),r=Rl();return i||r}function eb(i){var r=La(i);r!==null&&r.tag===5&&r.type==="form"?$2(r):cn.r(i)}var dr=typeof document>"u"?null:document;function bx(i,r,s){var c=dr;if(c&&typeof r=="string"&&r){var p=oi(r);p='link[rel="'+i+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),wx.has(p)||(wx.add(p),i={rel:i,crossOrigin:s,href:r},c.querySelector(p)===null&&(r=c.createElement("link"),yt(r,"link",i),ct(r),c.head.appendChild(r)))}}function tb(i){cn.D(i),bx("dns-prefetch",i,null)}function ib(i,r){cn.C(i,r),bx("preconnect",i,r)}function nb(i,r,s){cn.L(i,r,s);var c=dr;if(c&&i&&r){var p='link[rel="preload"][as="'+oi(r)+'"]';r==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+oi(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+oi(s.imageSizes)+'"]')):p+='[href="'+oi(i)+'"]';var x=p;switch(r){case"style":x=fr(i);break;case"script":x=pr(i)}hi.has(x)||(i=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:i,as:r},s),hi.set(x,i),c.querySelector(p)!==null||r==="style"&&c.querySelector(Ns(x))||r==="script"&&c.querySelector(Bs(x))||(r=c.createElement("link"),yt(r,"link",i),ct(r),c.head.appendChild(r)))}}function ab(i,r){cn.m(i,r);var s=dr;if(s&&i){var c=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+oi(c)+'"][href="'+oi(i)+'"]',x=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":x=pr(i)}if(!hi.has(x)&&(i=g({rel:"modulepreload",href:i},r),hi.set(x,i),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Bs(x)))return}c=s.createElement("link"),yt(c,"link",i),ct(c),s.head.appendChild(c)}}}function rb(i,r,s){cn.S(i,r,s);var c=dr;if(c&&i){var p=ka(c).hoistableStyles,x=fr(i);r=r||"default";var S=p.get(x);if(!S){var A={loading:0,preload:null};if(S=c.querySelector(Ns(x)))A.loading=5;else{i=g({rel:"stylesheet",href:i,"data-precedence":r},s),(s=hi.get(x))&&Pf(i,s);var D=S=c.createElement("link");ct(D),yt(D,"link",i),D._p=new Promise(function(_,Z){D.onload=_,D.onerror=Z}),D.addEventListener("load",function(){A.loading|=1}),D.addEventListener("error",function(){A.loading|=2}),A.loading|=4,$l(S,r,c)}S={type:"stylesheet",instance:S,count:1,state:A},p.set(x,S)}}}function sb(i,r){cn.X(i,r);var s=dr;if(s&&i){var c=ka(s).hoistableScripts,p=pr(i),x=c.get(p);x||(x=s.querySelector(Bs(p)),x||(i=g({src:i,async:!0},r),(r=hi.get(p))&&Nf(i,r),x=s.createElement("script"),ct(x),yt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(p,x))}}function ob(i,r){cn.M(i,r);var s=dr;if(s&&i){var c=ka(s).hoistableScripts,p=pr(i),x=c.get(p);x||(x=s.querySelector(Bs(p)),x||(i=g({src:i,async:!0,type:"module"},r),(r=hi.get(p))&&Nf(i,r),x=s.createElement("script"),ct(x),yt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(p,x))}}function Sx(i,r,s,c){var p=(p=pe.current)?Bl(p):null;if(!p)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=fr(s.href),s=ka(p).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){i=fr(s.href);var x=ka(p).hoistableStyles,S=x.get(i);if(S||(p=p.ownerDocument||p,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},x.set(i,S),(x=p.querySelector(Ns(i)))&&!x._p&&(S.instance=x,S.state.loading=5),hi.has(i)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(i,s),x||lb(p,i,s,S.state))),r&&c===null)throw Error(a(528,""));return S}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=pr(s),s=ka(p).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function fr(i){return'href="'+oi(i)+'"'}function Ns(i){return'link[rel="stylesheet"]['+i+"]"}function Cx(i){return g({},i,{"data-precedence":i.precedence,precedence:null})}function lb(i,r,s,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),yt(r,"link",s),ct(r),i.head.appendChild(r))}function pr(i){return'[src="'+oi(i)+'"]'}function Bs(i){return"script[async]"+i}function Tx(i,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+oi(s.href)+'"]');if(c)return r.instance=c,ct(c),c;var p=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),ct(c),yt(c,"style",p),$l(c,s.precedence,i),r.instance=c;case"stylesheet":p=fr(s.href);var x=i.querySelector(Ns(p));if(x)return r.state.loading|=4,r.instance=x,ct(x),x;c=Cx(s),(p=hi.get(p))&&Pf(c,p),x=(i.ownerDocument||i).createElement("link"),ct(x);var S=x;return S._p=new Promise(function(A,D){S.onload=A,S.onerror=D}),yt(x,"link",c),r.state.loading|=4,$l(x,s.precedence,i),r.instance=x;case"script":return x=pr(s.src),(p=i.querySelector(Bs(x)))?(r.instance=p,ct(p),p):(c=s,(p=hi.get(x))&&(c=g({},s),Nf(c,p)),i=i.ownerDocument||i,p=i.createElement("script"),ct(p),yt(p,"link",c),i.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,$l(c,s.precedence,i));return r.instance}function $l(i,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,x=p,S=0;S<c.length;S++){var A=c[S];if(A.dataset.precedence===r)x=A;else if(x!==p)break}x?x.parentNode.insertBefore(i,x.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(i,r.firstChild))}function Pf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Nf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Il=null;function Ex(i,r,s){if(Il===null){var c=new Map,p=Il=new Map;p.set(s,c)}else p=Il,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(i))return c;for(c.set(i,null),s=s.getElementsByTagName(i),p=0;p<s.length;p++){var x=s[p];if(!(x[Qr]||x[Tt]||i==="link"&&x.getAttribute("rel")==="stylesheet")&&x.namespaceURI!=="http://www.w3.org/2000/svg"){var S=x.getAttribute(r)||"";S=i+S;var A=c.get(S);A?A.push(x):c.set(S,[x])}}return c}function jx(i,r,s){i=i.ownerDocument||i,i.head.insertBefore(s,r==="title"?i.querySelector("head > title"):null)}function cb(i,r,s){if(s===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Ax(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var $s=null;function ub(){}function db(i,r,s){if($s===null)throw Error(a(475));var c=$s;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=fr(s.href),x=i.querySelector(Ns(p));if(x){i=x._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Ul.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=x,ct(x);return}x=i.ownerDocument||i,s=Cx(s),(p=hi.get(p))&&Pf(s,p),x=x.createElement("link"),ct(x);var S=x;S._p=new Promise(function(A,D){S.onload=A,S.onerror=D}),yt(x,"link",s),r.instance=x}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=Ul.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function fb(){if($s===null)throw Error(a(475));var i=$s;return i.stylesheets&&i.count===0&&Bf(i,i.stylesheets),0<i.count?function(r){var s=setTimeout(function(){if(i.stylesheets&&Bf(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(s)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)Bf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var _l=null;function Bf(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,_l=new Map,r.forEach(pb,i),_l=null,Ul.call(i))}function pb(i,r){if(!(r.state.loading&4)){var s=_l.get(i);if(s)var c=s.get(null);else{s=new Map,_l.set(i,s);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),x=0;x<p.length;x++){var S=p[x];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),c=S)}c&&s.set(null,c)}p=r.instance,S=p.getAttribute("data-precedence"),x=s.get(S)||c,x===c&&s.set(null,p),s.set(S,p),this.count++,c=Ul.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),x?x.parentNode.insertBefore(p,x.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),r.state.loading|=4}}var Is={$$typeof:E,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function hb(i,r,s,c,p,x,S,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Du(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.hiddenUpdates=Du(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=x,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Mx(i,r,s,c,p,x,S,A,D,_,Z,ee){return i=new hb(i,r,s,S,A,D,_,ee),r=1,x===!0&&(r|=24),x=Zt(3,null,null,r),i.current=x,x.stateNode=i,r=yd(),r.refCount++,i.pooledCache=r,r.refCount++,x.memoizedState={element:c,isDehydrated:s,cache:r},Cd(x),i}function Ox(i){return i?(i=Ga,i):Ga}function Rx(i,r,s,c,p,x){p=Ox(p),c.context===null?c.context=p:c.pendingContext=p,c=bn(r),c.payload={element:s},x=x===void 0?null:x,x!==null&&(c.callback=x),s=Sn(i,c,r),s!==null&&(ei(s,i,r),xs(s,i,r))}function Lx(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<r?s:r}}function $f(i,r){Lx(i,r),(i=i.alternate)&&Lx(i,r)}function kx(i){if(i.tag===13){var r=_a(i,67108864);r!==null&&ei(r,i,67108864),$f(i,67108864)}}var Gl=!0;function mb(i,r,s,c){var p=$.T;$.T=null;var x=W.p;try{W.p=2,If(i,r,s,c)}finally{W.p=x,$.T=p}}function gb(i,r,s,c){var p=$.T;$.T=null;var x=W.p;try{W.p=8,If(i,r,s,c)}finally{W.p=x,$.T=p}}function If(i,r,s,c){if(Gl){var p=Uf(c);if(p===null)Mf(i,r,c,ql,s),Dx(i,c);else if(vb(p,i,r,s,c))c.stopPropagation();else if(Dx(i,c),r&4&&-1<xb.indexOf(i)){for(;p!==null;){var x=La(p);if(x!==null)switch(x.tag){case 3:if(x=x.stateNode,x.current.memoizedState.isDehydrated){var S=Jn(x.pendingLanes);if(S!==0){var A=x;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var D=1<<31-Ft(S);A.entanglements[1]|=D,S&=~D}zi(x),(ze&6)===0&&(Ml=Ri()+500,Ds(0))}}break;case 13:A=_a(x,2),A!==null&&ei(A,x,2),Rl(),$f(x,2)}if(x=Uf(c),x===null&&Mf(i,r,c,ql,s),x===p)break;p=x}p!==null&&c.stopPropagation()}else Mf(i,r,c,null,s)}}function Uf(i){return i=Yu(i),_f(i)}var ql=null;function _f(i){if(ql=null,i=Ra(i),i!==null){var r=l(i);if(r===null)i=null;else{var s=r.tag;if(s===13){if(i=u(r),i!==null)return i;i=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return ql=i,null}function Vx(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(i8()){case F1:return 2;case X1:return 8;case Po:case n8:return 32;case Z1:return 268435456;default:return 32}default:return 32}}var Gf=!1,zn=null,Hn=null,Pn=null,Us=new Map,_s=new Map,Nn=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dx(i,r){switch(i){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Us.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(r.pointerId)}}function Gs(i,r,s,c,p,x){return i===null||i.nativeEvent!==x?(i={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},r!==null&&(r=La(r),r!==null&&kx(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),i)}function vb(i,r,s,c,p){switch(r){case"focusin":return zn=Gs(zn,i,r,s,c,p),!0;case"dragenter":return Hn=Gs(Hn,i,r,s,c,p),!0;case"mouseover":return Pn=Gs(Pn,i,r,s,c,p),!0;case"pointerover":var x=p.pointerId;return Us.set(x,Gs(Us.get(x)||null,i,r,s,c,p)),!0;case"gotpointercapture":return x=p.pointerId,_s.set(x,Gs(_s.get(x)||null,i,r,s,c,p)),!0}return!1}function zx(i){var r=Ra(i.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){i.blockedOn=r,d8(i.priority,function(){if(s.tag===13){var c=Jt();c=zu(c);var p=_a(s,c);p!==null&&ei(p,s,c),$f(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Yl(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var s=Uf(i.nativeEvent);if(s===null){s=i.nativeEvent;var c=new s.constructor(s.type,s);qu=c,s.target.dispatchEvent(c),qu=null}else return r=La(s),r!==null&&kx(r),i.blockedOn=s,!1;r.shift()}return!0}function Hx(i,r,s){Yl(i)&&s.delete(r)}function yb(){Gf=!1,zn!==null&&Yl(zn)&&(zn=null),Hn!==null&&Yl(Hn)&&(Hn=null),Pn!==null&&Yl(Pn)&&(Pn=null),Us.forEach(Hx),_s.forEach(Hx)}function Fl(i,r){i.blockedOn===r&&(i.blockedOn=null,Gf||(Gf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yb)))}var Xl=null;function Px(i){Xl!==i&&(Xl=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Xl===i&&(Xl=null);for(var r=0;r<i.length;r+=3){var s=i[r],c=i[r+1],p=i[r+2];if(typeof c!="function"){if(_f(c||s)===null)continue;break}var x=La(s);x!==null&&(i.splice(r,3),r-=3,Ud(x,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function qs(i){function r(D){return Fl(D,i)}zn!==null&&Fl(zn,i),Hn!==null&&Fl(Hn,i),Pn!==null&&Fl(Pn,i),Us.forEach(r),_s.forEach(r);for(var s=0;s<Nn.length;s++){var c=Nn[s];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Nn.length&&(s=Nn[0],s.blockedOn===null);)zx(s),s.blockedOn===null&&Nn.shift();if(s=(i.ownerDocument||i).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],x=s[c+1],S=p[zt]||null;if(typeof x=="function")S||Px(s);else if(S){var A=null;if(x&&x.hasAttribute("formAction")){if(p=x,S=x[zt]||null)A=S.formAction;else if(_f(p)!==null)continue}else A=S.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),Px(s)}}}function qf(i){this._internalRoot=i}Zl.prototype.render=qf.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=Jt();Rx(s,c,i,r,null,null)},Zl.prototype.unmount=qf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Rx(i.current,2,null,i,null,null),Rl(),r[Oa]=null}};function Zl(i){this._internalRoot=i}Zl.prototype.unstable_scheduleHydration=function(i){if(i){var r=em();i={blockedOn:null,target:i,priority:r};for(var s=0;s<Nn.length&&r!==0&&r<Nn[s].priority;s++);Nn.splice(s,0,i),s===0&&zx(i)}};var Nx=t.version;if(Nx!=="19.1.1")throw Error(a(527,Nx,"19.1.1"));W.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=f(r),i=i!==null?h(i):null,i=i===null?null:i.stateNode,i};var wb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Zr=Wl.inject(wb),Yt=Wl}catch{}}return Fs.createRoot=function(i,r){if(!o(i))throw Error(a(299));var s=!1,c="",p=eg,x=tg,S=ig,A=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(S=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=Mx(i,1,!1,null,null,s,c,p,x,S,A,null),i[Oa]=r.current,Af(i),new qf(r)},Fs.hydrateRoot=function(i,r,s){if(!o(i))throw Error(a(299));var c=!1,p="",x=eg,S=tg,A=ig,D=null,_=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(x=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(_=s.formState)),r=Mx(i,1,!0,r,s??null,c,p,x,S,A,D,_),r.context=Ox(null),s=r.current,c=Jt(),c=zu(c),p=bn(c),p.callback=null,Sn(s,p,c),s=c,r.current.lanes=s,Kr(r,s),zi(r),i[Oa]=r.current,Af(i),new Zl(r)},Fs.version="19.1.1",Fs}var Xx;function Lb(){if(Xx)return Ff.exports;Xx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Ff.exports=Rb(),Ff.exports}var kb=Lb();const Vb=ou(kb);var R=rh();const je=ou(R),Zx=Sb({__proto__:null,default:je},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wx="popstate";function Db(e={}){function t(a,o){let{pathname:l,search:u,hash:d}=a.location;return up("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:mo(o)}return Hb(t,n,null,e)}function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ai(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zb(){return Math.random().toString(36).substring(2,10)}function Kx(e,t){return{usr:e.state,key:e.key,idx:t}}function up(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ir(t):t,state:n,key:t&&t.key||a||zb()}}function mo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function Hb(e,t,n,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,u=o.history,d="POP",f=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=g(),M=L==null?null:L-h;h=L,f&&f({action:d,location:j.location,delta:M})}function y(L,M){d="PUSH";let T=up(j.location,L,M);h=g()+1;let E=Kx(T,h),V=j.createHref(T);try{u.pushState(E,"",V)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(V)}l&&f&&f({action:d,location:j.location,delta:1})}function w(L,M){d="REPLACE";let T=up(j.location,L,M);h=g();let E=Kx(T,h),V=j.createHref(T);u.replaceState(E,"",V),l&&f&&f({action:d,location:j.location,delta:0})}function b(L){return Pb(L)}let j={get action(){return d},get location(){return e(o,u)},listen(L){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Wx,v),f=L,()=>{o.removeEventListener(Wx,v),f=null}},createHref(L){return t(o,L)},createURL:b,encodeLocation(L){let M=b(L);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:w,go(L){return u.go(L)}};return j}function Pb(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:mo(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function O4(e,t,n="/"){return Nb(e,t,n,!1)}function Nb(e,t,n,a){let o=typeof t=="string"?Ir(t):t,l=hn(o.pathname||"/",n);if(l==null)return null;let u=R4(e);Bb(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let h=Wb(l);d=Xb(u[f],h,a)}return d}function R4(e,t=[],n=[],a=""){let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(Ye(f.relativePath.startsWith(a),`Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(a.length));let h=pn([a,f.relativePath]),g=n.concat(f);l.children&&l.children.length>0&&(Ye(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),R4(l.children,t,g,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:Yb(h,l.index),routesMeta:g})};return e.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of L4(l.path))o(l,u,f)}),t}function L4(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let u=L4(a.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>e.startsWith("/")&&f===""?"/":f)}function Bb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fb(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var $b=/^:[\w-]+$/,Ib=3,Ub=2,_b=1,Gb=10,qb=-2,Qx=e=>e==="*";function Yb(e,t){let n=e.split("/"),a=n.length;return n.some(Qx)&&(a+=qb),t&&(a+=Ub),n.filter(o=>!Qx(o)).reduce((o,l)=>o+($b.test(l)?Ib:l===""?_b:Gb),a)}function Fb(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function Xb(e,t,n=!1){let{routesMeta:a}=e,o={},l="/",u=[];for(let d=0;d<a.length;++d){let f=a[d],h=d===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",v=zc({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},g),y=f.route;if(!v&&h&&n&&!a[a.length-1].route.index&&(v=zc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:pn([l,v.pathname]),pathnameBase:e9(pn([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=pn([l,v.pathnameBase]))}return u}function zc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Zb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:a.reduce((h,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=d[y]||"";u=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const w=d[y];return v&&!w?h[g]=void 0:h[g]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function Zb(e,t=!1,n=!0){Ai(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(a.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function Wb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ai(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Kb(e,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?Ir(e):e;return{pathname:n?n.startsWith("/")?n:Qb(n,t):t,search:t9(a),hash:i9(o)}}function Qb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qf(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sh(e){let t=Jb(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function oh(e,t,n,a=!1){let o;typeof e=="string"?o=Ir(e):(o={...e},Ye(!o.pathname||!o.pathname.includes("?"),Qf("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Qf("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Qf("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=n;else{let v=t.length-1;if(!a&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}d=v>=0?t[v]:"/"}let f=Kb(o,d),h=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(h||g)&&(f.pathname+="/"),f}var pn=e=>e.join("/").replace(/\/\/+/g,"/"),e9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function n9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var k4=["POST","PUT","PATCH","DELETE"];new Set(k4);var a9=["GET",...k4];new Set(a9);var Ur=R.createContext(null);Ur.displayName="DataRouter";var lu=R.createContext(null);lu.displayName="DataRouterState";R.createContext(!1);var V4=R.createContext({isTransitioning:!1});V4.displayName="ViewTransition";var r9=R.createContext(new Map);r9.displayName="Fetchers";var s9=R.createContext(null);s9.displayName="Await";var Oi=R.createContext(null);Oi.displayName="Navigation";var Mo=R.createContext(null);Mo.displayName="Location";var yi=R.createContext({outlet:null,matches:[],isDataRoute:!1});yi.displayName="Route";var lh=R.createContext(null);lh.displayName="RouteError";function o9(e,{relative:t}={}){Ye(_r(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=R.useContext(Oi),{hash:o,pathname:l,search:u}=Oo(e,{relative:t}),d=l;return n!=="/"&&(d=l==="/"?n:pn([n,l])),a.createHref({pathname:d,search:u,hash:o})}function _r(){return R.useContext(Mo)!=null}function wi(){return Ye(_r(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Mo).location}var D4="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z4(e){R.useContext(Oi).static||R.useLayoutEffect(e)}function ch(){let{isDataRoute:e}=R.useContext(yi);return e?C9():l9()}function l9(){Ye(_r(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Ur),{basename:t,navigator:n}=R.useContext(Oi),{matches:a}=R.useContext(yi),{pathname:o}=wi(),l=JSON.stringify(sh(a)),u=R.useRef(!1);return z4(()=>{u.current=!0}),R.useCallback((f,h={})=>{if(Ai(u.current,D4),!u.current)return;if(typeof f=="number"){n.go(f);return}let g=oh(f,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:pn([t,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[t,n,l,o,e])}var c9=R.createContext(null);function u9(e){let t=R.useContext(yi).outlet;return t&&R.createElement(c9.Provider,{value:e},t)}function d9(){let{matches:e}=R.useContext(yi),t=e[e.length-1];return t?t.params:{}}function Oo(e,{relative:t}={}){let{matches:n}=R.useContext(yi),{pathname:a}=wi(),o=JSON.stringify(sh(n));return R.useMemo(()=>oh(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function f9(e,t){return H4(e,t)}function H4(e,t,n,a){var M;Ye(_r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(Oi),{matches:l}=R.useContext(yi),u=l[l.length-1],d=u?u.params:{},f=u?u.pathname:"/",h=u?u.pathnameBase:"/",g=u&&u.route;{let T=g&&g.path||"";P4(f,!g||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let v=wi(),y;if(t){let T=typeof t=="string"?Ir(t):t;Ye(h==="/"||((M=T.pathname)==null?void 0:M.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${T.pathname}" was given in the \`location\` prop.`),y=T}else y=v;let w=y.pathname||"/",b=w;if(h!=="/"){let T=h.replace(/^\//,"").split("/");b="/"+w.replace(/^\//,"").split("/").slice(T.length).join("/")}let j=O4(e,{pathname:b});Ai(g||j!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Ai(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=x9(j&&j.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:pn([h,o.encodeLocation?o.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?h:pn([h,o.encodeLocation?o.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),l,n,a);return t&&L?R.createElement(Mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},L):L}function p9(){let e=S9(),t=n9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:o},n):null,u)}var h9=R.createElement(p9,null),m9=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?R.createElement(yi.Provider,{value:this.props.routeContext},R.createElement(lh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function g9({routeContext:e,match:t,children:n}){let a=R.useContext(Ur);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(yi.Provider,{value:e},n)}function x9(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=n==null?void 0:n.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);Ye(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:g,errors:v}=n,y=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,g)=>{let v,y=!1,w=null,b=null;n&&(v=l&&h.route.id?l[h.route.id]:void 0,w=h.route.errorElement||h9,u&&(d<0&&g===0?(P4("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):d===g&&(y=!0,b=h.route.hydrateFallbackElement||null)));let j=t.concat(o.slice(0,g+1)),L=()=>{let M;return v?M=w:y?M=b:h.route.Component?M=R.createElement(h.route.Component,null):h.route.element?M=h.route.element:M=f,R.createElement(g9,{match:h,routeContext:{outlet:f,matches:j,isDataRoute:n!=null},children:M})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?R.createElement(m9,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:L(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):L()},null)}function uh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v9(e){let t=R.useContext(Ur);return Ye(t,uh(e)),t}function y9(e){let t=R.useContext(lu);return Ye(t,uh(e)),t}function w9(e){let t=R.useContext(yi);return Ye(t,uh(e)),t}function dh(e){let t=w9(e),n=t.matches[t.matches.length-1];return Ye(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function b9(){return dh("useRouteId")}function S9(){var a;let e=R.useContext(lh),t=y9("useRouteError"),n=dh("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function C9(){let{router:e}=v9("useNavigate"),t=dh("useNavigate"),n=R.useRef(!1);return z4(()=>{n.current=!0}),R.useCallback(async(o,l={})=>{Ai(n.current,D4),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Jx={};function P4(e,t,n){!t&&!Jx[e]&&(Jx[e]=!0,Ai(!1,n))}R.memo(T9);function T9({routes:e,future:t,state:n}){return H4(e,void 0,n,t)}function E9({to:e,replace:t,state:n,relative:a}){Ye(_r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(Oi);Ai(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(yi),{pathname:u}=wi(),d=ch(),f=oh(e,sh(l),u,a==="path"),h=JSON.stringify(f);return R.useEffect(()=>{d(JSON.parse(h),{replace:t,state:n,relative:a})},[d,h,a,t,n]),null}function j9(e){return u9(e.context)}function pt(e){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function A9({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:l=!1}){Ye(!_r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=Ir(n));let{pathname:f="/",search:h="",hash:g="",state:v=null,key:y="default"}=n,w=R.useMemo(()=>{let b=hn(f,u);return b==null?null:{location:{pathname:b,search:h,hash:g,state:v,key:y},navigationType:a}},[u,f,h,g,v,y,a]);return Ai(w!=null,`<Router basename="${u}"> is not able to match the URL "${f}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:R.createElement(Oi.Provider,{value:d},R.createElement(Mo.Provider,{children:t,value:w}))}function M9({children:e,location:t}){return f9(dp(e),t)}function dp(e,t=[]){let n=[];return R.Children.forEach(e,(a,o)=>{if(!R.isValidElement(a))return;let l=[...t,o];if(a.type===R.Fragment){n.push.apply(n,dp(a.props.children,l));return}Ye(a.type===pt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=dp(a.props.children,l)),n.push(u)}),n}var vc="get",yc="application/x-www-form-urlencoded";function cu(e){return e!=null&&typeof e.tagName=="string"}function O9(e){return cu(e)&&e.tagName.toLowerCase()==="button"}function R9(e){return cu(e)&&e.tagName.toLowerCase()==="form"}function L9(e){return cu(e)&&e.tagName.toLowerCase()==="input"}function k9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function V9(e,t){return e.button===0&&(!t||t==="_self")&&!k9(e)}var Kl=null;function D9(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var z9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jf(e){return e!=null&&!z9.has(e)?(Ai(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yc}"`),null):e}function H9(e,t){let n,a,o,l,u;if(R9(e)){let d=e.getAttribute("action");a=d?hn(d,t):null,n=e.getAttribute("method")||vc,o=Jf(e.getAttribute("enctype"))||yc,l=new FormData(e)}else if(O9(e)||L9(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||d.getAttribute("action");if(a=f?hn(f,t):null,n=e.getAttribute("formmethod")||d.getAttribute("method")||vc,o=Jf(e.getAttribute("formenctype"))||Jf(d.getAttribute("enctype"))||yc,l=new FormData(d,e),!D9()){let{name:h,type:g,value:v}=e;if(g==="image"){let y=h?`${h}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else h&&l.append(h,v)}}else{if(cu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vc,a=null,o=yc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function P9(e,t,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&hn(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function N9(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function B9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function $9(e,t,n){let a=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await N9(l,n);return u.links?u.links():[]}return[]}));return G9(a.flat(1).filter(B9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function e3(e,t,n,a,o,l){let u=(f,h)=>n[h]?f.route.id!==n[h].route.id:!0,d=(f,h)=>{var g;return n[h].pathname!==f.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==f.params["*"]};return l==="assets"?t.filter((f,h)=>u(f,h)||d(f,h)):l==="data"?t.filter((f,h)=>{var v;let g=a.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(u(f,h)||d(f,h))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function I9(e,t,{includeHydrateFallback:n}={}){return U9(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function U9(e){return[...new Set(e)]}function _9(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function G9(e,t){let n=new Set;return new Set(t),e.reduce((a,o)=>{let l=JSON.stringify(_9(o));return n.has(l)||(n.add(l),a.push({key:l,link:o})),a},[])}function N4(){let e=R.useContext(Ur);return fh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function q9(){let e=R.useContext(lu);return fh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ph=R.createContext(void 0);ph.displayName="FrameworkContext";function B4(){let e=R.useContext(ph);return fh(e,"You must render this element inside a <HydratedRouter> element"),e}function Y9(e,t){let n=R.useContext(ph),[a,o]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=t,y=R.useRef(null);R.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let j=M=>{M.forEach(T=>{u(T.isIntersecting)})},L=new IntersectionObserver(j,{threshold:.5});return y.current&&L.observe(y.current),()=>{L.disconnect()}}},[e]),R.useEffect(()=>{if(a){let j=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(j)}}},[a]);let w=()=>{o(!0)},b=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,y,{}]:[l,y,{onFocus:Xs(d,w),onBlur:Xs(f,b),onMouseEnter:Xs(h,w),onMouseLeave:Xs(g,b),onTouchStart:Xs(v,w)}]:[!1,y,{}]}function Xs(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function F9({page:e,...t}){let{router:n}=N4(),a=R.useMemo(()=>O4(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?R.createElement(Z9,{page:e,matches:a,...t}):null}function X9(e){let{manifest:t,routeModules:n}=B4(),[a,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return $9(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),a}function Z9({page:e,matches:t,...n}){let a=wi(),{manifest:o,routeModules:l}=B4(),{basename:u}=N4(),{loaderData:d,matches:f}=q9(),h=R.useMemo(()=>e3(e,t,f,o,a,"data"),[e,t,f,o,a]),g=R.useMemo(()=>e3(e,t,f,o,a,"assets"),[e,t,f,o,a]),v=R.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let b=new Set,j=!1;if(t.forEach(M=>{var E;let T=o.routes[M.route.id];!T||!T.hasLoader||(!h.some(V=>V.route.id===M.route.id)&&M.route.id in d&&((E=l[M.route.id])!=null&&E.shouldRevalidate)||T.hasClientLoader?j=!0:b.add(M.route.id))}),b.size===0)return[];let L=P9(e,u,"data");return j&&b.size>0&&L.searchParams.set("_routes",t.filter(M=>b.has(M.route.id)).map(M=>M.route.id).join(",")),[L.pathname+L.search]},[u,d,a,o,h,t,e,l]),y=R.useMemo(()=>I9(g,o),[g,o]),w=X9(g);return R.createElement(R.Fragment,null,v.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),y.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),w.map(({key:b,link:j})=>R.createElement("link",{key:b,nonce:n.nonce,...j})))}function W9(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var $4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$4&&(window.__reactRouterVersion="7.8.0")}catch{}function K9({basename:e,children:t,window:n}){let a=R.useRef();a.current==null&&(a.current=Db({window:n,v5Compat:!0}));let o=a.current,[l,u]=R.useState({action:o.action,location:o.location}),d=R.useCallback(f=>{R.startTransition(()=>u(f))},[u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(A9,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var I4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U4=R.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:l,replace:u,state:d,target:f,to:h,preventScrollReset:g,viewTransition:v,...y},w){let{basename:b}=R.useContext(Oi),j=typeof h=="string"&&I4.test(h),L,M=!1;if(typeof h=="string"&&j&&(L=h,$4))try{let Y=new URL(window.location.href),F=h.startsWith("//")?new URL(Y.protocol+h):new URL(h),K=hn(F.pathname,b);F.origin===Y.origin&&K!=null?h=K+F.search+F.hash:M=!0}catch{Ai(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=o9(h,{relative:o}),[E,V,O]=Y9(a,y),N=eS(h,{replace:u,state:d,target:f,preventScrollReset:g,relative:o,viewTransition:v});function H(Y){t&&t(Y),Y.defaultPrevented||N(Y)}let U=R.createElement("a",{...y,...O,href:L||T,onClick:M||l?t:H,ref:W9(w,V),target:f,"data-discover":!j&&n==="render"?"true":void 0});return E&&!j?R.createElement(R.Fragment,null,U,R.createElement(F9,{page:T})):U});U4.displayName="Link";var St=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:l,to:u,viewTransition:d,children:f,...h},g){let v=Oo(u,{relative:h.relative}),y=wi(),w=R.useContext(lu),{navigator:b,basename:j}=R.useContext(Oi),L=w!=null&&rS(v)&&d===!0,M=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,T=y.pathname,E=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(T=T.toLowerCase(),E=E?E.toLowerCase():null,M=M.toLowerCase()),E&&j&&(E=hn(E,j)||E);const V=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let O=T===M||!o&&T.startsWith(M)&&T.charAt(V)==="/",N=E!=null&&(E===M||!o&&E.startsWith(M)&&E.charAt(M.length)==="/"),H={isActive:O,isPending:N,isTransitioning:L},U=O?t:void 0,Y;typeof a=="function"?Y=a(H):Y=[a,O?"active":null,N?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let F=typeof l=="function"?l(H):l;return R.createElement(U4,{...h,"aria-current":U,className:Y,ref:g,style:F,to:u,viewTransition:d},typeof f=="function"?f(H):f)});St.displayName="NavLink";var Q9=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:l,method:u=vc,action:d,onSubmit:f,relative:h,preventScrollReset:g,viewTransition:v,...y},w)=>{let b=nS(),j=aS(d,{relative:h}),L=u.toLowerCase()==="get"?"get":"post",M=typeof d=="string"&&I4.test(d),T=E=>{if(f&&f(E),E.defaultPrevented)return;E.preventDefault();let V=E.nativeEvent.submitter,O=(V==null?void 0:V.getAttribute("formmethod"))||u;b(V||E.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:l,relative:h,preventScrollReset:g,viewTransition:v})};return R.createElement("form",{ref:w,method:L,action:j,onSubmit:a?f:T,...y,"data-discover":!M&&e==="render"?"true":void 0})});Q9.displayName="Form";function J9(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _4(e){let t=R.useContext(Ur);return Ye(t,J9(e)),t}function eS(e,{target:t,replace:n,state:a,preventScrollReset:o,relative:l,viewTransition:u}={}){let d=ch(),f=wi(),h=Oo(e,{relative:l});return R.useCallback(g=>{if(V9(g,t)){g.preventDefault();let v=n!==void 0?n:mo(f)===mo(h);d(e,{replace:v,state:a,preventScrollReset:o,relative:l,viewTransition:u})}},[f,d,h,n,a,t,e,o,l,u])}var tS=0,iS=()=>`__${String(++tS)}__`;function nS(){let{router:e}=_4("useSubmit"),{basename:t}=R.useContext(Oi),n=b9();return R.useCallback(async(a,o={})=>{let{action:l,method:u,encType:d,formData:f,body:h}=H9(a,t);if(o.navigate===!1){let g=o.fetcherKey||iS();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function aS(e,{relative:t}={}){let{basename:n}=R.useContext(Oi),a=R.useContext(yi);Ye(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...Oo(e||".",{relative:t})},u=wi();if(e==null){l.search=u.search;let d=new URLSearchParams(l.search),f=d.getAll("index");if(f.some(g=>g==="")){d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:pn([n,l.pathname])),mo(l)}function rS(e,{relative:t}={}){let n=R.useContext(V4);Ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=_4("useViewTransitionState"),o=Oo(e,{relative:t});if(!n.isTransitioning)return!1;let l=hn(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=hn(n.nextLocation.pathname,a)||n.nextLocation.pathname;return zc(o.pathname,u)!=null||zc(o.pathname,l)!=null}function sS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function oS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var lS=function(){function e(n){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oS(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=sS(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),At="-ms-",Hc="-moz-",Oe="-webkit-",G4="comm",hh="rule",mh="decl",cS="@import",q4="@keyframes",uS="@layer",dS=Math.abs,uu=String.fromCharCode,fS=Object.assign;function pS(e,t){return wt(e,0)^45?(((t<<2^wt(e,0))<<2^wt(e,1))<<2^wt(e,2))<<2^wt(e,3):0}function Y4(e){return e.trim()}function hS(e,t){return(e=t.exec(e))?e[0]:e}function Re(e,t,n){return e.replace(t,n)}function fp(e,t){return e.indexOf(t)}function wt(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function Hi(e){return e.length}function gh(e){return e.length}function Ql(e,t){return t.push(e),e}function mS(e,t){return e.map(t).join("")}var du=1,Rr=1,F4=0,qt=0,at=0,Gr="";function fu(e,t,n,a,o,l,u){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:du,column:Rr,length:u,return:""}}function Zs(e,t){return fS(fu("",null,null,"",null,null,0),e,{length:-e.length},t)}function gS(){return at}function xS(){return at=qt>0?wt(Gr,--qt):0,Rr--,at===10&&(Rr=1,du--),at}function ni(){return at=qt<F4?wt(Gr,qt++):0,Rr++,at===10&&(Rr=1,du++),at}function Ii(){return wt(Gr,qt)}function wc(){return qt}function Ro(e,t){return go(Gr,e,t)}function xo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X4(e){return du=Rr=1,F4=Hi(Gr=e),qt=0,[]}function Z4(e){return Gr="",e}function bc(e){return Y4(Ro(qt-1,pp(e===91?e+2:e===40?e+1:e)))}function vS(e){for(;(at=Ii())&&at<33;)ni();return xo(e)>2||xo(at)>3?"":" "}function yS(e,t){for(;--t&&ni()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return Ro(e,wc()+(t<6&&Ii()==32&&ni()==32))}function pp(e){for(;ni();)switch(at){case e:return qt;case 34:case 39:e!==34&&e!==39&&pp(at);break;case 40:e===41&&pp(e);break;case 92:ni();break}return qt}function wS(e,t){for(;ni()&&e+at!==57;)if(e+at===84&&Ii()===47)break;return"/*"+Ro(t,qt-1)+"*"+uu(e===47?e:ni())}function bS(e){for(;!xo(Ii());)ni();return Ro(e,qt)}function SS(e){return Z4(Sc("",null,null,null,[""],e=X4(e),0,[0],e))}function Sc(e,t,n,a,o,l,u,d,f){for(var h=0,g=0,v=u,y=0,w=0,b=0,j=1,L=1,M=1,T=0,E="",V=o,O=l,N=a,H=E;L;)switch(b=T,T=ni()){case 40:if(b!=108&&wt(H,v-1)==58){fp(H+=Re(bc(T),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:H+=bc(T);break;case 9:case 10:case 13:case 32:H+=vS(b);break;case 92:H+=yS(wc()-1,7);continue;case 47:switch(Ii()){case 42:case 47:Ql(CS(wS(ni(),wc()),t,n),f);break;default:H+="/"}break;case 123*j:d[h++]=Hi(H)*M;case 125*j:case 59:case 0:switch(T){case 0:case 125:L=0;case 59+g:M==-1&&(H=Re(H,/\f/g,"")),w>0&&Hi(H)-v&&Ql(w>32?i3(H+";",a,n,v-1):i3(Re(H," ","")+";",a,n,v-2),f);break;case 59:H+=";";default:if(Ql(N=t3(H,t,n,h,g,o,d,E,V=[],O=[],v),l),T===123)if(g===0)Sc(H,t,N,N,V,l,v,d,O);else switch(y===99&&wt(H,3)===110?100:y){case 100:case 108:case 109:case 115:Sc(e,N,N,a&&Ql(t3(e,N,N,0,0,o,d,E,o,V=[],v),O),o,O,v,d,a?V:O);break;default:Sc(H,N,N,N,[""],O,0,d,O)}}h=g=w=0,j=M=1,E=H="",v=u;break;case 58:v=1+Hi(H),w=b;default:if(j<1){if(T==123)--j;else if(T==125&&j++==0&&xS()==125)continue}switch(H+=uu(T),T*j){case 38:M=g>0?1:(H+="\f",-1);break;case 44:d[h++]=(Hi(H)-1)*M,M=1;break;case 64:Ii()===45&&(H+=bc(ni())),y=Ii(),g=v=Hi(E=H+=bS(wc())),T++;break;case 45:b===45&&Hi(H)==2&&(j=0)}}return l}function t3(e,t,n,a,o,l,u,d,f,h,g){for(var v=o-1,y=o===0?l:[""],w=gh(y),b=0,j=0,L=0;b<a;++b)for(var M=0,T=go(e,v+1,v=dS(j=u[b])),E=e;M<w;++M)(E=Y4(j>0?y[M]+" "+T:Re(T,/&\f/g,y[M])))&&(f[L++]=E);return fu(e,t,n,o===0?hh:d,f,h,g)}function CS(e,t,n){return fu(e,t,n,G4,uu(gS()),go(e,2,-2),0)}function i3(e,t,n,a){return fu(e,t,n,mh,go(e,0,a),go(e,a+1,-1),a)}function Ar(e,t){for(var n="",a=gh(e),o=0;o<a;o++)n+=t(e[o],o,e,t)||"";return n}function TS(e,t,n,a){switch(e.type){case uS:if(e.children.length)break;case cS:case mh:return e.return=e.return||e.value;case G4:return"";case q4:return e.return=e.value+"{"+Ar(e.children,a)+"}";case hh:e.value=e.props.join(",")}return Hi(n=Ar(e.children,a))?e.return=e.value+"{"+n+"}":""}function ES(e){var t=gh(e);return function(n,a,o,l){for(var u="",d=0;d<t;d++)u+=e[d](n,a,o,l)||"";return u}}function jS(e){return function(t){t.root||(t=t.return)&&e(t)}}function AS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var MS=function(t,n,a){for(var o=0,l=0;o=l,l=Ii(),o===38&&l===12&&(n[a]=1),!xo(l);)ni();return Ro(t,qt)},OS=function(t,n){var a=-1,o=44;do switch(xo(o)){case 0:o===38&&Ii()===12&&(n[a]=1),t[a]+=MS(qt-1,n,a);break;case 2:t[a]+=bc(o);break;case 4:if(o===44){t[++a]=Ii()===58?"&\f":"",n[a]=t[a].length;break}default:t[a]+=uu(o)}while(o=ni());return t},RS=function(t,n){return Z4(OS(X4(t),n))},n3=new WeakMap,LS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!n3.get(a))&&!o){n3.set(t,!0);for(var l=[],u=RS(n,l),d=a.props,f=0,h=0;f<u.length;f++)for(var g=0;g<d.length;g++,h++)t.props[h]=l[f]?u[f].replace(/&\f/g,d[g]):d[g]+" "+u[f]}}},kS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function W4(e,t){switch(pS(e,t)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+Hc+e+At+e+e;case 6828:case 4268:return Oe+e+At+e+e;case 6165:return Oe+e+At+"flex-"+e+e;case 5187:return Oe+e+Re(e,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+At+"flex-$1$2")+e;case 5443:return Oe+e+At+"flex-item-"+Re(e,/flex-|-self/,"")+e;case 4675:return Oe+e+At+"flex-line-pack"+Re(e,/align-content|flex-|-self/,"")+e;case 5548:return Oe+e+At+Re(e,"shrink","negative")+e;case 5292:return Oe+e+At+Re(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+Re(e,"-grow","")+Oe+e+At+Re(e,"grow","positive")+e;case 4554:return Oe+Re(e,/([^-])(transform)/g,"$1"+Oe+"$2")+e;case 6187:return Re(Re(Re(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return Re(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Re(Re(e,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+At+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4095:case 3583:case 4068:case 2532:return Re(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hi(e)-1-t>6)switch(wt(e,t+1)){case 109:if(wt(e,t+4)!==45)break;case 102:return Re(e,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Hc+(wt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fp(e,"stretch")?W4(Re(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(wt(e,t+1)!==115)break;case 6444:switch(wt(e,Hi(e)-3-(~fp(e,"!important")&&10))){case 107:return Re(e,":",":"+Oe)+e;case 101:return Re(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(wt(e,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+At+"$2box$3")+e}break;case 5936:switch(wt(e,t+11)){case 114:return Oe+e+At+Re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+At+Re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+At+Re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Oe+e+At+e+e}return e}var VS=function(t,n,a,o){if(t.length>-1&&!t.return)switch(t.type){case mh:t.return=W4(t.value,t.length);break;case q4:return Ar([Zs(t,{value:Re(t.value,"@","@"+Oe)})],o);case hh:if(t.length)return mS(t.props,function(l){switch(hS(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ar([Zs(t,{props:[Re(l,/:(read-\w+)/,":"+Hc+"$1")]})],o);case"::placeholder":return Ar([Zs(t,{props:[Re(l,/:(plac\w+)/,":"+Oe+"input-$1")]}),Zs(t,{props:[Re(l,/:(plac\w+)/,":"+Hc+"$1")]}),Zs(t,{props:[Re(l,/:(plac\w+)/,At+"input-$1")]})],o)}return""})}},DS=[VS],zS=function(t){var n=t.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(j){var L=j.getAttribute("data-emotion");L.indexOf(" ")!==-1&&(document.head.appendChild(j),j.setAttribute("data-s",""))})}var o=t.stylisPlugins||DS,l={},u,d=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(j){for(var L=j.getAttribute("data-emotion").split(" "),M=1;M<L.length;M++)l[L[M]]=!0;d.push(j)});var f,h=[LS,kS];{var g,v=[TS,jS(function(j){g.insert(j)})],y=ES(h.concat(o,v)),w=function(L){return Ar(SS(L),y)};f=function(L,M,T,E){g=T,w(L?L+"{"+M.styles+"}":M.styles),E&&(b.inserted[M.name]=!0)}}var b={key:n,sheet:new lS({key:n,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:f};return b.sheet.hydrate(d),b},e0={exports:{}},Ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a3;function HS(){if(a3)return Ve;a3=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,h=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,w=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,L=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function E(O){if(typeof O=="object"&&O!==null){var N=O.$$typeof;switch(N){case t:switch(O=O.type,O){case f:case h:case a:case l:case o:case v:return O;default:switch(O=O&&O.$$typeof,O){case d:case g:case b:case w:case u:return O;default:return N}}case n:return N}}}function V(O){return E(O)===h}return Ve.AsyncMode=f,Ve.ConcurrentMode=h,Ve.ContextConsumer=d,Ve.ContextProvider=u,Ve.Element=t,Ve.ForwardRef=g,Ve.Fragment=a,Ve.Lazy=b,Ve.Memo=w,Ve.Portal=n,Ve.Profiler=l,Ve.StrictMode=o,Ve.Suspense=v,Ve.isAsyncMode=function(O){return V(O)||E(O)===f},Ve.isConcurrentMode=V,Ve.isContextConsumer=function(O){return E(O)===d},Ve.isContextProvider=function(O){return E(O)===u},Ve.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===t},Ve.isForwardRef=function(O){return E(O)===g},Ve.isFragment=function(O){return E(O)===a},Ve.isLazy=function(O){return E(O)===b},Ve.isMemo=function(O){return E(O)===w},Ve.isPortal=function(O){return E(O)===n},Ve.isProfiler=function(O){return E(O)===l},Ve.isStrictMode=function(O){return E(O)===o},Ve.isSuspense=function(O){return E(O)===v},Ve.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===h||O===l||O===o||O===v||O===y||typeof O=="object"&&O!==null&&(O.$$typeof===b||O.$$typeof===w||O.$$typeof===u||O.$$typeof===d||O.$$typeof===g||O.$$typeof===L||O.$$typeof===M||O.$$typeof===T||O.$$typeof===j)},Ve.typeOf=E,Ve}var r3;function PS(){return r3||(r3=1,e0.exports=HS()),e0.exports}var t0,s3;function NS(){if(s3)return t0;s3=1;var e=PS(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=o;function u(b){return e.isMemo(b)?o:l[b.$$typeof]||t}var d=Object.defineProperty,f=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Object.prototype;function w(b,j,L){if(typeof j!="string"){if(y){var M=v(j);M&&M!==y&&w(b,M,L)}var T=f(j);h&&(T=T.concat(h(j)));for(var E=u(b),V=u(j),O=0;O<T.length;++O){var N=T[O];if(!n[N]&&!(L&&L[N])&&!(V&&V[N])&&!(E&&E[N])){var H=g(j,N);try{d(b,N,H)}catch{}}}}return b}return t0=w,t0}NS();var BS=!0;function $S(e,t,n){var a="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var K4=function(t,n,a){var o=t.key+"-"+n.name;(a===!1||BS===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Q4=function(t,n,a){K4(t,n,a);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function IS(e){for(var t=0,n,a=0,o=e.length;o>=4;++a,o-=4)n=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var US={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_S=/[A-Z]|^ms/g,GS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,J4=function(t){return t.charCodeAt(1)===45},o3=function(t){return t!=null&&typeof t!="boolean"},i0=AS(function(e){return J4(e)?e:e.replace(_S,"-$&").toLowerCase()}),l3=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(GS,function(a,o,l){return Pi={name:o,styles:l,next:Pi},o})}return US[t]!==1&&!J4(t)&&typeof n=="number"&&n!==0?n+"px":n};function vo(e,t,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return Pi={name:o.name,styles:o.styles,next:Pi},o.name;var l=n;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Pi={name:u.name,styles:u.styles,next:Pi},u=u.next;var d=l.styles+";";return d}return qS(e,t,n)}case"function":{if(e!==void 0){var f=Pi,h=n(e);return Pi=f,vo(e,t,h)}break}}var g=n;return g}function qS(e,t,n){var a="";if(Array.isArray(n))for(var o=0;o<n.length;o++)a+=vo(e,t,n[o])+";";else for(var l in n){var u=n[l];if(typeof u!="object"){var d=u;o3(d)&&(a+=i0(l)+":"+l3(l,d)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var f=0;f<u.length;f++)o3(u[f])&&(a+=i0(l)+":"+l3(l,u[f])+";");else{var h=vo(e,t,u);switch(l){case"animation":case"animationName":{a+=i0(l)+":"+h+";";break}default:a+=l+"{"+h+"}"}}}return a}var c3=/label:\s*([^\s;{]+)\s*(;|$)/g,Pi;function xh(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";Pi=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,o+=vo(n,t,l);else{var u=l;o+=u[0]}for(var d=1;d<e.length;d++)if(o+=vo(n,t,e[d]),a){var f=l;o+=f[d]}c3.lastIndex=0;for(var h="",g;(g=c3.exec(o))!==null;)h+="-"+g[1];var v=IS(o)+h;return{name:v,styles:o,next:Pi}}var YS=function(t){return t()},e5=Zx.useInsertionEffect?Zx.useInsertionEffect:!1,FS=e5||YS,u3=e5||R.useLayoutEffect,t5=R.createContext(typeof HTMLElement<"u"?zS({key:"css"}):null);t5.Provider;var i5=function(t){return R.forwardRef(function(n,a){var o=R.useContext(t5);return t(n,o,a)})},n5=R.createContext({}),vh={}.hasOwnProperty,hp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",XS=function(t,n){var a={};for(var o in n)vh.call(n,o)&&(a[o]=n[o]);return a[hp]=t,a},ZS=function(t){var n=t.cache,a=t.serialized,o=t.isStringTag;return K4(n,a,o),FS(function(){return Q4(n,a,o)}),null},WS=i5(function(e,t,n){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[hp],l=[a],u="";typeof e.className=="string"?u=$S(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var d=xh(l,void 0,R.useContext(n5));u+=t.key+"-"+d.name;var f={};for(var h in e)vh.call(e,h)&&h!=="css"&&h!==hp&&(f[h]=e[h]);return f.className=u,n&&(f.ref=n),R.createElement(R.Fragment,null,R.createElement(ZS,{cache:t,serialized:d,isStringTag:typeof o=="string"}),R.createElement(o,f))}),KS=WS,d3=function(t,n){var a=arguments;if(n==null||!vh.call(n,"css"))return R.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=KS,l[1]=XS(t,n);for(var u=2;u<o;u++)l[u]=a[u];return R.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(d3||(d3={}));var QS=i5(function(e,t){var n=e.styles,a=xh([n],void 0,R.useContext(n5)),o=R.useRef();return u3(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),d=!1,f=document.querySelector('style[data-emotion="'+l+" "+a.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),f!==null&&(d=!0,f.setAttribute("data-emotion",l),u.hydrate([f])),o.current=[u,d],function(){u.flush()}},[t]),u3(function(){var l=o.current,u=l[0],d=l[1];if(d){l[1]=!1;return}if(a.next!==void 0&&Q4(t,a.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}t.insert("",a,u,!1)},[t,a.name]),null});function JS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xh(t)}const eC="/assets/Geist-Regular-BCrLS6HJ.ttf",tC="/assets/Geist-Medium-C6X8vKEc.ttf",iC="/assets/BebasNeue-Regular-D2CONTwO.ttf",nC="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",aC=JS`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${eC}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${tC}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${iC}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${nC}) format('truetype');
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
`;var Mt=function(){return Mt=Object.assign||function(t){for(var n,a=1,o=arguments.length;a<o;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Mt.apply(this,arguments)};function Lr(e,t,n){if(n||arguments.length===2)for(var a=0,o=t.length,l;a<o;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Ge="-ms-",ro="-moz-",De="-webkit-",a5="comm",pu="rule",yh="decl",rC="@import",r5="@keyframes",sC="@layer",s5=Math.abs,wh=String.fromCharCode,mp=Object.assign;function oC(e,t){return gt(e,0)^45?(((t<<2^gt(e,0))<<2^gt(e,1))<<2^gt(e,2))<<2^gt(e,3):0}function o5(e){return e.trim()}function fn(e,t){return(e=t.exec(e))?e[0]:e}function ye(e,t,n){return e.replace(t,n)}function Cc(e,t,n){return e.indexOf(t,n)}function gt(e,t){return e.charCodeAt(t)|0}function kr(e,t,n){return e.slice(t,n)}function Ni(e){return e.length}function l5(e){return e.length}function no(e,t){return t.push(e),e}function lC(e,t){return e.map(t).join("")}function f3(e,t){return e.filter(function(n){return!fn(n,t)})}var hu=1,Vr=1,c5=0,xi=0,rt=0,qr="";function mu(e,t,n,a,o,l,u,d){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:hu,column:Vr,length:u,return:"",siblings:d}}function Un(e,t){return mp(mu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hr(e){for(;e.root;)e=Un(e.root,{children:[e]});no(e,e.siblings)}function cC(){return rt}function uC(){return rt=xi>0?gt(qr,--xi):0,Vr--,rt===10&&(Vr=1,hu--),rt}function ji(){return rt=xi<c5?gt(qr,xi++):0,Vr++,rt===10&&(Vr=1,hu++),rt}function Sa(){return gt(qr,xi)}function Tc(){return xi}function gu(e,t){return kr(qr,e,t)}function gp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dC(e){return hu=Vr=1,c5=Ni(qr=e),xi=0,[]}function fC(e){return qr="",e}function n0(e){return o5(gu(xi-1,xp(e===91?e+2:e===40?e+1:e)))}function pC(e){for(;(rt=Sa())&&rt<33;)ji();return gp(e)>2||gp(rt)>3?"":" "}function hC(e,t){for(;--t&&ji()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return gu(e,Tc()+(t<6&&Sa()==32&&ji()==32))}function xp(e){for(;ji();)switch(rt){case e:return xi;case 34:case 39:e!==34&&e!==39&&xp(rt);break;case 40:e===41&&xp(e);break;case 92:ji();break}return xi}function mC(e,t){for(;ji()&&e+rt!==57;)if(e+rt===84&&Sa()===47)break;return"/*"+gu(t,xi-1)+"*"+wh(e===47?e:ji())}function gC(e){for(;!gp(Sa());)ji();return gu(e,xi)}function xC(e){return fC(Ec("",null,null,null,[""],e=dC(e),0,[0],e))}function Ec(e,t,n,a,o,l,u,d,f){for(var h=0,g=0,v=u,y=0,w=0,b=0,j=1,L=1,M=1,T=0,E="",V=o,O=l,N=a,H=E;L;)switch(b=T,T=ji()){case 40:if(b!=108&&gt(H,v-1)==58){Cc(H+=ye(n0(T),"&","&\f"),"&\f",s5(h?d[h-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:H+=n0(T);break;case 9:case 10:case 13:case 32:H+=pC(b);break;case 92:H+=hC(Tc()-1,7);continue;case 47:switch(Sa()){case 42:case 47:no(vC(mC(ji(),Tc()),t,n,f),f);break;default:H+="/"}break;case 123*j:d[h++]=Ni(H)*M;case 125*j:case 59:case 0:switch(T){case 0:case 125:L=0;case 59+g:M==-1&&(H=ye(H,/\f/g,"")),w>0&&Ni(H)-v&&no(w>32?h3(H+";",a,n,v-1,f):h3(ye(H," ","")+";",a,n,v-2,f),f);break;case 59:H+=";";default:if(no(N=p3(H,t,n,h,g,o,d,E,V=[],O=[],v,l),l),T===123)if(g===0)Ec(H,t,N,N,V,l,v,d,O);else switch(y===99&&gt(H,3)===110?100:y){case 100:case 108:case 109:case 115:Ec(e,N,N,a&&no(p3(e,N,N,0,0,o,d,E,o,V=[],v,O),O),o,O,v,d,a?V:O);break;default:Ec(H,N,N,N,[""],O,0,d,O)}}h=g=w=0,j=M=1,E=H="",v=u;break;case 58:v=1+Ni(H),w=b;default:if(j<1){if(T==123)--j;else if(T==125&&j++==0&&uC()==125)continue}switch(H+=wh(T),T*j){case 38:M=g>0?1:(H+="\f",-1);break;case 44:d[h++]=(Ni(H)-1)*M,M=1;break;case 64:Sa()===45&&(H+=n0(ji())),y=Sa(),g=v=Ni(E=H+=gC(Tc())),T++;break;case 45:b===45&&Ni(H)==2&&(j=0)}}return l}function p3(e,t,n,a,o,l,u,d,f,h,g,v){for(var y=o-1,w=o===0?l:[""],b=l5(w),j=0,L=0,M=0;j<a;++j)for(var T=0,E=kr(e,y+1,y=s5(L=u[j])),V=e;T<b;++T)(V=o5(L>0?w[T]+" "+E:ye(E,/&\f/g,w[T])))&&(f[M++]=V);return mu(e,t,n,o===0?pu:d,f,h,g,v)}function vC(e,t,n,a){return mu(e,t,n,a5,wh(cC()),kr(e,2,-2),0,a)}function h3(e,t,n,a,o){return mu(e,t,n,yh,kr(e,0,a),kr(e,a+1,-1),a,o)}function u5(e,t,n){switch(oC(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+ro+e+Ge+e+e;case 5936:switch(gt(e,t+11)){case 114:return De+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return De+e+Ge+e+e;case 6165:return De+e+Ge+"flex-"+e+e;case 5187:return De+e+ye(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return De+e+Ge+"flex-item-"+ye(e,/flex-|-self/g,"")+(fn(e,/flex-|baseline/)?"":Ge+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return De+e+Ge+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return De+e+Ge+ye(e,"shrink","negative")+e;case 5292:return De+e+Ge+ye(e,"basis","preferred-size")+e;case 6060:return De+"box-"+ye(e,"-grow","")+De+e+Ge+ye(e,"grow","positive")+e;case 4554:return De+ye(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4200:if(!fn(e,/flex-|baseline/))return Ge+"grid-column-align"+kr(e,t)+e;break;case 2592:case 3360:return Ge+ye(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(a,o){return t=o,fn(a.props,/grid-\w+-end/)})?~Cc(e+(n=n[t].value),"span",0)?e:Ge+ye(e,"-start","")+e+Ge+"grid-row-span:"+(~Cc(n,"span",0)?fn(n,/\d+/):+fn(n,/\d+/)-+fn(e,/\d+/))+";":Ge+ye(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(a){return fn(a.props,/grid-\w+-start/)})?e:Ge+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ni(e)-1-t>6)switch(gt(e,t+1)){case 109:if(gt(e,t+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+ro+(gt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Cc(e,"stretch",0)?u5(ye(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,u,d,f,h){return Ge+o+":"+l+h+(u?Ge+o+"-span:"+(d?f:+f-+l)+h:"")+e});case 4949:if(gt(e,t+6)===121)return ye(e,":",":"+De)+e;break;case 6444:switch(gt(e,gt(e,14)===45?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(gt(e,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Ge+"$2box$3")+e;case 100:return ye(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function Pc(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function yC(e,t,n,a){switch(e.type){case sC:if(e.children.length)break;case rC:case yh:return e.return=e.return||e.value;case a5:return"";case r5:return e.return=e.value+"{"+Pc(e.children,a)+"}";case pu:if(!Ni(e.value=e.props.join(",")))return""}return Ni(n=Pc(e.children,a))?e.return=e.value+"{"+n+"}":""}function wC(e){var t=l5(e);return function(n,a,o,l){for(var u="",d=0;d<t;d++)u+=e[d](n,a,o,l)||"";return u}}function bC(e){return function(t){t.root||(t=t.return)&&e(t)}}function SC(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case yh:e.return=u5(e.value,e.length,n);return;case r5:return Pc([Un(e,{value:ye(e.value,"@","@"+De)})],a);case pu:if(e.length)return lC(n=e.props,function(o){switch(fn(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hr(Un(e,{props:[ye(o,/:(read-\w+)/,":"+ro+"$1")]})),hr(Un(e,{props:[o]})),mp(e,{props:f3(n,a)});break;case"::placeholder":hr(Un(e,{props:[ye(o,/:(plac\w+)/,":"+De+"input-$1")]})),hr(Un(e,{props:[ye(o,/:(plac\w+)/,":"+ro+"$1")]})),hr(Un(e,{props:[ye(o,/:(plac\w+)/,Ge+"input-$1")]})),hr(Un(e,{props:[o]})),mp(e,{props:f3(n,a)});break}return""})}}var CC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ti={},Dr=typeof process<"u"&&ti!==void 0&&(ti.REACT_APP_SC_ATTR||ti.SC_ATTR)||"data-styled",d5="active",f5="data-styled-version",xu="6.1.19",bh=`/*!sc*/
`,Nc=typeof window<"u"&&typeof document<"u",TC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ti!==void 0&&ti.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ti.REACT_APP_SC_DISABLE_SPEEDY!==""?ti.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ti.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ti!==void 0&&ti.SC_DISABLE_SPEEDY!==void 0&&ti.SC_DISABLE_SPEEDY!==""&&ti.SC_DISABLE_SPEEDY!=="false"&&ti.SC_DISABLE_SPEEDY),EC={},vu=Object.freeze([]),zr=Object.freeze({});function p5(e,t,n){return n===void 0&&(n=zr),e.theme!==n.theme&&e.theme||t||n.theme}var h5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AC=/(^-|-$)/g;function m3(e){return e.replace(jC,"-").replace(AC,"")}var MC=/(a)(d)/gi,Jl=52,g3=function(e){return String.fromCharCode(e+(e>25?39:97))};function vp(e){var t,n="";for(t=Math.abs(e);t>Jl;t=t/Jl|0)n=g3(t%Jl)+n;return(g3(t%Jl)+n).replace(MC,"$1-$2")}var a0,m5=5381,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},g5=function(e){return wr(m5,e)};function Sh(e){return vp(g5(e)>>>0)}function OC(e){return e.displayName||e.name||"Component"}function r0(e){return typeof e=="string"&&!0}var x5=typeof Symbol=="function"&&Symbol.for,v5=x5?Symbol.for("react.memo"):60115,RC=x5?Symbol.for("react.forward_ref"):60112,LC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VC=((a0={})[RC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a0[v5]=y5,a0);function x3(e){return("type"in(t=e)&&t.type.$$typeof)===v5?y5:"$$typeof"in e?VC[e.$$typeof]:LC;var t}var DC=Object.defineProperty,zC=Object.getOwnPropertyNames,v3=Object.getOwnPropertySymbols,HC=Object.getOwnPropertyDescriptor,PC=Object.getPrototypeOf,y3=Object.prototype;function w5(e,t,n){if(typeof t!="string"){if(y3){var a=PC(t);a&&a!==y3&&w5(e,a,n)}var o=zC(t);v3&&(o=o.concat(v3(t)));for(var l=x3(e),u=x3(t),d=0;d<o.length;++d){var f=o[d];if(!(f in kC||n&&n[f]||u&&f in u||l&&f in l)){var h=HC(t,f);try{DC(e,f,h)}catch{}}}}return e}function Hr(e){return typeof e=="function"}function Ch(e){return typeof e=="object"&&"styledComponentId"in e}function ya(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bc(e,t){if(e.length===0)return"";for(var n=e[0],a=1;a<e.length;a++)n+=e[a];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yp(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=yp(e[a],t[a]);else if(yo(t))for(var a in t)e[a]=yp(e[a],t[a]);return e}function Th(e,t){Object.defineProperty(e,"toString",{value:t})}function Lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var NC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,a=0;a<t;a++)n+=this.groupSizes[a];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;t>=l;)if((l<<=1)<0)throw Lo(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(t+1),f=(u=0,n.length);u<f;u++)this.tag.insertRule(d,n[u])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n;this.groupSizes[t]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),l=o+a,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(bh);return n},e}(),jc=new Map,$c=new Map,Ac=1,ec=function(e){if(jc.has(e))return jc.get(e);for(;$c.has(Ac);)Ac++;var t=Ac++;return jc.set(e,t),$c.set(t,e),t},BC=function(e,t){Ac=t+1,jc.set(e,t),$c.set(t,e)},$C="style[".concat(Dr,"][").concat(f5,'="').concat(xu,'"]'),IC=new RegExp("^".concat(Dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),UC=function(e,t,n){for(var a,o=n.split(","),l=0,u=o.length;l<u;l++)(a=o[l])&&e.registerName(t,a)},_C=function(e,t){for(var n,a=((n=t.textContent)!==null&&n!==void 0?n:"").split(bh),o=[],l=0,u=a.length;l<u;l++){var d=a[l].trim();if(d){var f=d.match(IC);if(f){var h=0|parseInt(f[1],10),g=f[2];h!==0&&(BC(g,h),UC(e,g,f[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(d)}}},w3=function(e){for(var t=document.querySelectorAll($C),n=0,a=t.length;n<a;n++){var o=t[n];o&&o.getAttribute(Dr)!==d5&&(_C(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function GC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var b5=function(e){var t=document.head,n=e||t,a=document.createElement("style"),o=function(d){var f=Array.from(d.querySelectorAll("style[".concat(Dr,"]")));return f[f.length-1]}(n),l=o!==void 0?o.nextSibling:null;a.setAttribute(Dr,d5),a.setAttribute(f5,xu);var u=GC();return u&&a.setAttribute("nonce",u),n.insertBefore(a,l),a},qC=function(){function e(t){this.element=b5(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var u=a[o];if(u.ownerNode===n)return u}throw Lo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),YC=function(){function e(t){this.element=b5(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),FC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),b3=Nc,XC={isServer:!Nc,useCSSOMInjection:!TC},Ic=function(){function e(t,n,a){t===void 0&&(t=zr),n===void 0&&(n={});var o=this;this.options=Mt(Mt({},XC),t),this.gs=n,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Nc&&b3&&(b3=!1,w3(this)),Th(this,function(){return function(l){for(var u=l.getTag(),d=u.length,f="",h=function(v){var y=function(M){return $c.get(M)}(v);if(y===void 0)return"continue";var w=l.names.get(y),b=u.getGroup(v);if(w===void 0||!w.size||b.length===0)return"continue";var j="".concat(Dr,".g").concat(v,'[id="').concat(y,'"]'),L="";w!==void 0&&w.forEach(function(M){M.length>0&&(L+="".concat(M,","))}),f+="".concat(b).concat(j,'{content:"').concat(L,'"}').concat(bh)},g=0;g<d;g++)h(g);return f}(o)})}return e.registerId=function(t){return ec(t)},e.prototype.rehydrate=function(){!this.server&&Nc&&w3(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Mt(Mt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var a=n.useCSSOMInjection,o=n.target;return n.isServer?new FC(o):a?new qC(o):new YC(o)}(this.options),new NC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ec(t),this.names.has(t))this.names.get(t).add(n);else{var a=new Set;a.add(n),this.names.set(t,a)}},e.prototype.insertRules=function(t,n,a){this.registerName(t,n),this.getTag().insertRules(ec(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ec(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ZC=/&/g,WC=/^\s*\/\/.*$/gm;function S5(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=S5(n.children,t)),n})}function KC(e){var t,n,a,o=zr,l=o.options,u=l===void 0?zr:l,d=o.plugins,f=d===void 0?vu:d,h=function(y,w,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):y},g=f.slice();g.push(function(y){y.type===pu&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(ZC,n).replace(a,h))}),u.prefix&&g.push(SC),g.push(yC);var v=function(y,w,b,j){w===void 0&&(w=""),b===void 0&&(b=""),j===void 0&&(j="&"),t=j,n=w,a=new RegExp("\\".concat(n,"\\b"),"g");var L=y.replace(WC,""),M=xC(b||w?"".concat(b," ").concat(w," { ").concat(L," }"):L);u.namespace&&(M=S5(M,u.namespace));var T=[];return Pc(M,wC(g.concat(bC(function(E){return T.push(E)})))),T};return v.hash=f.length?f.reduce(function(y,w){return w.name||Lo(15),wr(y,w.name)},m5).toString():"",v}var QC=new Ic,wp=KC(),C5=je.createContext({shouldForwardProp:void 0,styleSheet:QC,stylis:wp});C5.Consumer;je.createContext(void 0);function bp(){return R.useContext(C5)}var T5=function(){function e(t,n){var a=this;this.inject=function(o,l){l===void 0&&(l=wp);var u=a.name+l.hash;o.hasNameForId(a.id,u)||o.insertRules(a.id,u,l(a.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Th(this,function(){throw Lo(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wp),this.name+t.hash},e}(),JC=function(e){return e>="A"&&e<="Z"};function S3(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(n===1&&a==="-"&&e[0]==="-")return e;JC(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var E5=function(e){return e==null||e===!1||e===""},j5=function(e){var t,n,a=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!E5(l)&&(Array.isArray(l)&&l.isCss||Hr(l)?a.push("".concat(S3(o),":"),l,";"):yo(l)?a.push.apply(a,Lr(Lr(["".concat(o," {")],j5(l),!1),["}"],!1)):a.push("".concat(S3(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in CC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return a};function Yn(e,t,n,a){if(E5(e))return[];if(Ch(e))return[".".concat(e.styledComponentId)];if(Hr(e)){if(!Hr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Yn(o,t,n,a)}var l;return e instanceof T5?n?(e.inject(n,a),[e.getName(a)]):[e]:yo(e)?j5(e):Array.isArray(e)?Array.prototype.concat.apply(vu,e.map(function(u){return Yn(u,t,n,a)})):[e.toString()]}function A5(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hr(n)&&!Ch(n))return!1}return!0}var eT=g5(xu),tT=function(){function e(t,n,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&A5(t),this.componentId=n,this.baseHash=wr(eT,n),this.baseStyle=a,Ic.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ya(o,this.staticRulesId);else{var l=Bc(Yn(this.rules,t,n,a)),u=vp(wr(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var d=a(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,d)}o=ya(o,u),this.staticRulesId=u}else{for(var f=wr(this.baseHash,a.hash),h="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")h+=v;else if(v){var y=Bc(Yn(v,t,n,a));f=wr(f,y+g),h+=y}}if(h){var w=vp(f>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,a(h,".".concat(w),void 0,this.componentId)),o=ya(o,w)}}return o},e}(),Eh=je.createContext(void 0);Eh.Consumer;var s0={};function iT(e,t,n){var a=Ch(e),o=e,l=!r0(e),u=t.attrs,d=u===void 0?vu:u,f=t.componentId,h=f===void 0?function(V,O){var N=typeof V!="string"?"sc":m3(V);s0[N]=(s0[N]||0)+1;var H="".concat(N,"-").concat(Sh(xu+N+s0[N]));return O?"".concat(O,"-").concat(H):H}(t.displayName,t.parentComponentId):f,g=t.displayName,v=g===void 0?function(V){return r0(V)?"styled.".concat(V):"Styled(".concat(OC(V),")")}(e):g,y=t.displayName&&t.componentId?"".concat(m3(t.displayName),"-").concat(t.componentId):t.componentId||h,w=a&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=t.shouldForwardProp;if(a&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;b=function(V,O){return j(V,O)&&L(V,O)}}else b=j}var M=new tT(n,y,a?o.componentStyle:void 0);function T(V,O){return function(N,H,U){var Y=N.attrs,F=N.componentStyle,K=N.defaultProps,ne=N.foldedComponentIds,le=N.styledComponentId,de=N.target,oe=je.useContext(Eh),$=bp(),W=N.shouldForwardProp||$.shouldForwardProp,J=p5(H,oe,K)||zr,te=function(Se,pe,lt){for(var ke,Ct=Mt(Mt({},pe),{className:void 0,theme:lt}),Qn=0;Qn<Se.length;Qn+=1){var Fi=Hr(ke=Se[Qn])?ke(Ct):ke;for(var ri in Fi)Ct[ri]=ri==="className"?ya(Ct[ri],Fi[ri]):ri==="style"?Mt(Mt({},Ct[ri]),Fi[ri]):Fi[ri]}return pe.className&&(Ct.className=ya(Ct.className,pe.className)),Ct}(Y,H,J),k=te.as||de,X={};for(var ae in te)te[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&te.theme===J||(ae==="forwardedAs"?X.as=te.forwardedAs:W&&!W(ae,k)||(X[ae]=te[ae]));var re=function(Se,pe){var lt=bp(),ke=Se.generateAndInjectStyles(pe,lt.styleSheet,lt.stylis);return ke}(F,te),ue=ya(ne,le);return re&&(ue+=" "+re),te.className&&(ue+=" "+te.className),X[r0(k)&&!h5.has(k)?"class":"className"]=ue,U&&(X.ref=U),R.createElement(k,X)}(E,V,O)}T.displayName=v;var E=je.forwardRef(T);return E.attrs=w,E.componentStyle=M,E.displayName=v,E.shouldForwardProp=b,E.foldedComponentIds=a?ya(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=y,E.target=a?o.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=a?function(O){for(var N=[],H=1;H<arguments.length;H++)N[H-1]=arguments[H];for(var U=0,Y=N;U<Y.length;U++)yp(O,Y[U],!0);return O}({},o.defaultProps,V):V}}),Th(E,function(){return".".concat(E.styledComponentId)}),l&&w5(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function C3(e,t){for(var n=[e[0]],a=0,o=t.length;a<o;a+=1)n.push(t[a],e[a+1]);return n}var T3=function(e){return Object.assign(e,{isCss:!0})};function Pr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hr(e)||yo(e))return T3(Yn(C3(vu,Lr([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Yn(a):T3(Yn(C3(a,t)))}function Sp(e,t,n){if(n===void 0&&(n=zr),!t)throw Lo(1,t);var a=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,Pr.apply(void 0,Lr([o],l,!1)))};return a.attrs=function(o){return Sp(e,t,Mt(Mt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Sp(e,t,Mt(Mt({},n),o))},a}var M5=function(e){return Sp(iT,e)},C=M5;h5.forEach(function(e){C[e]=M5(e)});var nT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=A5(t),Ic.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,a,o){var l=o(Bc(Yn(this.rules,n,a,o)),""),u=this.componentId+t;a.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,a,o){t>2&&Ic.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,n,a,o)},e}();function aT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Pr.apply(void 0,Lr([e],t,!1)),o="sc-global-".concat(Sh(JSON.stringify(a))),l=new nT(a,o),u=function(f){var h=bp(),g=je.useContext(Eh),v=je.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&d(v,f,h.styleSheet,g,h.stylis),je.useLayoutEffect(function(){if(!h.styleSheet.server)return d(v,f,h.styleSheet,g,h.stylis),function(){return l.removeStyles(v,h.styleSheet)}},[v,f,h.styleSheet,g,h.stylis]),null};function d(f,h,g,v,y){if(l.isStatic)l.renderStyles(f,EC,g,y);else{var w=Mt(Mt({},h),{theme:p5(h,v,u.defaultProps)});l.renderStyles(f,w,g,y)}}return je.memo(u)}function Zn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Bc(Pr.apply(void 0,Lr([e],t,!1))),o=Sh(a);return new T5(o,a)}const rT=C.nav`
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
  ${({$isScrolled:e})=>e&&Pr`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,sT=C.div`
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
`,oT=C(St)`
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
`,lT=C.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,Ws=C.li`
  position: relative;
`,Ks=C(St)`
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
`,E3=C.div`
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
`,tc=C.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`,$n=C.span`
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
`,cT=C.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,O5=C.button`
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
`;var ic={},j3;function uT(){if(j3)return ic;j3=1,ic.match=l,ic.parse=u;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(g,v){return u(g).some(function(y){var w=y.inverse,b=y.type==="all"||v.type===y.type;if(b&&w||!(b||w))return!1;var j=y.expressions.every(function(L){var M=L.feature,T=L.modifier,E=L.value,V=v[M];if(!V)return!1;switch(M){case"orientation":case"scan":return V.toLowerCase()===E.toLowerCase();case"width":case"height":case"device-width":case"device-height":E=h(E),V=h(V);break;case"resolution":E=f(E),V=f(V);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":E=d(E),V=d(V);break;case"grid":case"color":case"color-index":case"monochrome":E=parseInt(E,10)||1,V=parseInt(V,10)||0;break}switch(T){case"min":return V>=E;case"max":return V<=E;default:return V===E}});return j&&!w||!j&&w})}function u(g){return g.split(",").map(function(v){v=v.trim();var y=v.match(e),w=y[1],b=y[2],j=y[3]||"",L={};return L.inverse=!!w&&w.toLowerCase()==="not",L.type=b?b.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],L.expressions=j.map(function(M){var T=M.match(t),E=T[1].toLowerCase().match(n);return{modifier:E[1],feature:E[2],value:T[2]}}),L})}function d(g){var v=Number(g),y;return v||(y=g.match(/^(\d+)\s*\/\s*(\d+)$/),v=y[1]/y[2]),v}function f(g){var v=parseFloat(g),y=String(g).match(o)[1];switch(y){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function h(g){var v=parseFloat(g),y=String(g).match(a)[1];switch(y){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return ic}var o0,A3;function dT(){if(A3)return o0;A3=1;var e=uT().match,t=typeof window<"u"?window.matchMedia:null;function n(o,l,u){var d=this,f;t&&!u&&(f=t.call(window,o)),f?(this.matches=f.matches,this.media=f.media,f.addListener(v)):(this.matches=e(o,l),this.media=o),this.addListener=h,this.removeListener=g,this.dispose=y;function h(w){f&&f.addListener(w)}function g(w){f&&f.removeListener(w)}function v(w){d.matches=w.matches,d.media=w.media}function y(){f&&f.removeListener(v)}}function a(o,l,u){return new n(o,l,u)}return o0=a,o0}var fT=dT();const pT=ou(fT);var hT=/[A-Z]/g,mT=/^ms-/,l0={};function gT(e){return"-"+e.toLowerCase()}function R5(e){if(l0.hasOwnProperty(e))return l0[e];var t=e.replace(hT,gT);return l0[e]=mT.test(t)?"-"+t:t}function xT(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),a=Object.keys(t),o=n.length;if(a.length!==o)return!1;for(let l=0;l<o;l++){const u=n[l];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}var c0={exports:{}},u0,M3;function vT(){if(M3)return u0;M3=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return u0=e,u0}var d0,O3;function yT(){if(O3)return d0;O3=1;var e=vT();function t(){}function n(){}return n.resetWarningCache=t,d0=function(){function a(u,d,f,h,g,v){if(v!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}a.isRequired=a;function o(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},d0}var R3;function wT(){return R3||(R3=1,c0.exports=yT()()),c0.exports}var bT=wT();const Le=ou(bT),kt=Le.oneOfType([Le.string,Le.number]),L5={all:Le.bool,grid:Le.bool,aural:Le.bool,braille:Le.bool,handheld:Le.bool,print:Le.bool,projection:Le.bool,screen:Le.bool,tty:Le.bool,tv:Le.bool,embossed:Le.bool},ST={orientation:Le.oneOf(["portrait","landscape"]),scan:Le.oneOf(["progressive","interlace"]),aspectRatio:Le.string,deviceAspectRatio:Le.string,height:kt,deviceHeight:kt,width:kt,deviceWidth:kt,color:Le.bool,colorIndex:Le.bool,monochrome:Le.bool,resolution:kt,type:Object.keys(L5)},{type:MB,...CT}=ST,TT={minAspectRatio:Le.string,maxAspectRatio:Le.string,minDeviceAspectRatio:Le.string,maxDeviceAspectRatio:Le.string,minHeight:kt,maxHeight:kt,minDeviceHeight:kt,maxDeviceHeight:kt,minWidth:kt,maxWidth:kt,minDeviceWidth:kt,maxDeviceWidth:kt,minColor:Le.number,maxColor:Le.number,minColorIndex:Le.number,maxColorIndex:Le.number,minMonochrome:Le.number,maxMonochrome:Le.number,minResolution:kt,maxResolution:kt,...CT},ET={...L5,...TT};var jT={all:ET};const AT=e=>`not ${e}`,MT=(e,t)=>{const n=R5(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?AT(n):`(${n}: ${t})`},OT=e=>e.join(" and "),RT=e=>{const t=[];return Object.keys(jT.all).forEach(n=>{const a=e[n];a!=null&&t.push(MT(n,a))}),OT(t)},LT=R.createContext(void 0),kT=e=>e.query||RT(e),L3=e=>e?Object.keys(e).reduce((n,a)=>(n[R5(a)]=e[a],n),{}):void 0,k5=()=>{const e=R.useRef(!1);return R.useEffect(()=>{e.current=!0},[]),e.current},VT=e=>{const t=R.useContext(LT),n=()=>L3(e)||L3(t),[a,o]=R.useState(n);return R.useEffect(()=>{const l=n();xT(a,l)||o(l)},[e,t]),a},DT=e=>{const t=()=>kT(e),[n,a]=R.useState(t);return R.useEffect(()=>{const o=t();n!==o&&a(o)},[e]),n},zT=(e,t)=>{const n=()=>pT(e,t||{},!!t),[a,o]=R.useState(n),l=k5();return R.useEffect(()=>{if(l){const u=n();return o(u),()=>{u&&u.dispose()}}},[e,t]),a},HT=e=>{const[t,n]=R.useState(e.matches);return R.useEffect(()=>{const a=o=>{n(o.matches)};return e.addListener(a),n(e.matches),()=>{e.removeListener(a)}},[e]),t},Pe=(e,t,n)=>{const a=VT(t),o=DT(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=zT(o,a),u=HT(l);return k5(),R.useEffect(()=>{},[u]),R.useEffect(()=>()=>{l&&l.dispose()},[]),u},jh=R.createContext({});function Ma(e){const t=R.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ah=typeof window<"u",ko=Ah?R.useLayoutEffect:R.useEffect,yu=R.createContext(null);function Mh(e,t){e.indexOf(t)===-1&&e.push(t)}function Oh(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Yi=(e,t,n)=>n>t?t:n<e?e:n;let wo=()=>{};const mn={},V5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function D5(e){return typeof e=="object"&&e!==null}const z5=e=>/^0[^.\s]+$/u.test(e);function Rh(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ut=e=>e,PT=(e,t)=>n=>t(e(n)),Vo=(...e)=>e.reduce(PT),Nr=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class Lh{constructor(){this.subscriptions=[]}add(t){return Mh(this.subscriptions,t),()=>Oh(this.subscriptions,t)}notify(t,n,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,a);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ui=e=>e*1e3,_i=e=>e/1e3;function kh(e,t){return t?e*(1e3/t):0}const H5=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,NT=1e-7,BT=12;function $T(e,t,n,a,o){let l,u,d=0;do u=t+(n-t)/2,l=H5(u,a,o)-e,l>0?n=u:t=u;while(Math.abs(l)>NT&&++d<BT);return u}function Do(e,t,n,a){if(e===t&&n===a)return Ut;const o=l=>$T(l,0,1,e,n);return l=>l===0||l===1?l:H5(o(l),t,a)}const P5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,N5=e=>t=>1-e(1-t),vi=Do(.33,1.53,.69,.99),Vh=N5(vi),B5=P5(Vh),$5=e=>(e*=2)<1?.5*Vh(e):.5*(2-Math.pow(2,-10*(e-1))),Dh=e=>1-Math.sin(Math.acos(e)),Uc=N5(Dh),I5=P5(Dh),IT=Do(.42,0,1,1),ie=Do(0,0,.58,1),U5=Do(.42,0,.58,1),UT=e=>Array.isArray(e)&&typeof e[0]!="number",_5=e=>Array.isArray(e)&&typeof e[0]=="number",_T={linear:Ut,easeIn:IT,easeInOut:U5,easeOut:ie,circIn:Dh,circInOut:I5,circOut:Uc,backIn:Vh,backInOut:B5,backOut:vi,anticipate:$5},GT=e=>typeof e=="string",k3=e=>{if(_5(e)){wo(e.length===4);const[t,n,a,o]=e;return Do(t,n,a,o)}else if(GT(e))return _T[e];return e},nc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function qT(e,t){let n=new Set,a=new Set,o=!1,l=!1;const u=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(g){u.has(g)&&(h.schedule(g),e()),g(d)}const h={schedule:(g,v=!1,y=!1)=>{const b=y&&o?n:a;return v&&u.add(g),b.has(g)||b.add(g),g},cancel:g=>{a.delete(g),u.delete(g)},process:g=>{if(d=g,o){l=!0;return}o=!0,[n,a]=[a,n],n.forEach(f),n.clear(),o=!1,l&&(l=!1,h.process(g))}};return h}const YT=40;function G5(e,t){let n=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,u=nc.reduce((E,V)=>(E[V]=qT(l),E),{}),{setup:d,read:f,resolveKeyframes:h,preUpdate:g,update:v,preRender:y,render:w,postRender:b}=u,j=()=>{const E=mn.useManualTiming?o.timestamp:performance.now();n=!1,mn.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(E-o.timestamp,YT),1)),o.timestamp=E,o.isProcessing=!0,d.process(o),f.process(o),h.process(o),g.process(o),v.process(o),y.process(o),w.process(o),b.process(o),o.isProcessing=!1,n&&t&&(a=!1,e(j))},L=()=>{n=!0,a=!0,o.isProcessing||e(j)};return{schedule:nc.reduce((E,V)=>{const O=u[V];return E[V]=(N,H=!1,U=!1)=>(n||L(),O.schedule(N,H,U)),E},{}),cancel:E=>{for(let V=0;V<nc.length;V++)u[nc[V]].cancel(E)},state:o,steps:u}}const{schedule:Ne,cancel:Mi,state:ht,steps:f0}=G5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ut,!0);let Mc;function FT(){Mc=void 0}const It={now:()=>(Mc===void 0&&It.set(ht.isProcessing||mn.useManualTiming?ht.timestamp:performance.now()),Mc),set:e=>{Mc=e,queueMicrotask(FT)}},q5=e=>t=>typeof t=="string"&&t.startsWith(e),zh=q5("--"),XT=q5("var(--"),Hh=e=>XT(e)?ZT.test(e.split("/*")[0].trim()):!1,ZT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bo={...Yr,transform:e=>Yi(0,1,e)},ac={...Yr,default:1},so=e=>Math.round(e*1e5)/1e5,Ph=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function WT(e){return e==null}const KT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nh=(e,t)=>n=>!!(typeof n=="string"&&KT.test(n)&&n.startsWith(e)||t&&!WT(n)&&Object.prototype.hasOwnProperty.call(n,t)),Y5=(e,t,n)=>a=>{if(typeof a!="string")return a;const[o,l,u,d]=a.match(Ph);return{[e]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(u),alpha:d!==void 0?parseFloat(d):1}},QT=e=>Yi(0,255,e),p0={...Yr,transform:e=>Math.round(QT(e))},wa={test:Nh("rgb","red"),parse:Y5("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+p0.transform(e)+", "+p0.transform(t)+", "+p0.transform(n)+", "+so(bo.transform(a))+")"};function JT(e){let t="",n="",a="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const Cp={test:Nh("#"),parse:JT,transform:wa.transform},zo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),_n=zo("deg"),Gi=zo("%"),ge=zo("px"),eE=zo("vh"),tE=zo("vw"),V3={...Gi,parse:e=>Gi.parse(e)/100,transform:e=>Gi.transform(e*100)},br={test:Nh("hsl","hue"),parse:Y5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Gi.transform(so(t))+", "+Gi.transform(so(n))+", "+so(bo.transform(a))+")"},nt={test:e=>wa.test(e)||Cp.test(e)||br.test(e),parse:e=>wa.test(e)?wa.parse(e):br.test(e)?br.parse(e):Cp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?wa.transform(e):br.transform(e),getAnimatableNone:e=>{const t=nt.parse(e);return t.alpha=0,nt.transform(t)}},iE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nE(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ph))==null?void 0:t.length)||0)+(((n=e.match(iE))==null?void 0:n.length)||0)>0}const F5="number",X5="color",aE="var",rE="var(",D3="${}",sE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function So(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},o=[];let l=0;const d=t.replace(sE,f=>(nt.test(f)?(a.color.push(l),o.push(X5),n.push(nt.parse(f))):f.startsWith(rE)?(a.var.push(l),o.push(aE),n.push(f)):(a.number.push(l),o.push(F5),n.push(parseFloat(f))),++l,D3)).split(D3);return{values:n,split:d,indexes:a,types:o}}function Z5(e){return So(e).values}function W5(e){const{split:t,types:n}=So(e),a=t.length;return o=>{let l="";for(let u=0;u<a;u++)if(l+=t[u],o[u]!==void 0){const d=n[u];d===F5?l+=so(o[u]):d===X5?l+=nt.transform(o[u]):l+=o[u]}return l}}const oE=e=>typeof e=="number"?0:nt.test(e)?nt.getAnimatableNone(e):e;function lE(e){const t=Z5(e);return W5(e)(t.map(oE))}const Fn={test:nE,parse:Z5,createTransformer:W5,getAnimatableNone:lE};function h0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function cE({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let o=0,l=0,u=0;if(!t)o=l=u=n;else{const d=n<.5?n*(1+t):n+t-n*t,f=2*n-d;o=h0(f,d,e+1/3),l=h0(f,d,e),u=h0(f,d,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:a}}function _c(e,t){return n=>n>0?t:e}const Xe=(e,t,n)=>e+(t-e)*n,m0=(e,t,n)=>{const a=e*e,o=n*(t*t-a)+a;return o<0?0:Math.sqrt(o)},uE=[Cp,wa,br],dE=e=>uE.find(t=>t.test(e));function z3(e){const t=dE(e);if(!t)return!1;let n=t.parse(e);return t===br&&(n=cE(n)),n}const H3=(e,t)=>{const n=z3(e),a=z3(t);if(!n||!a)return _c(e,t);const o={...n};return l=>(o.red=m0(n.red,a.red,l),o.green=m0(n.green,a.green,l),o.blue=m0(n.blue,a.blue,l),o.alpha=Xe(n.alpha,a.alpha,l),wa.transform(o))},Tp=new Set(["none","hidden"]);function fE(e,t){return Tp.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function pE(e,t){return n=>Xe(e,t,n)}function Bh(e){return typeof e=="number"?pE:typeof e=="string"?Hh(e)?_c:nt.test(e)?H3:gE:Array.isArray(e)?K5:typeof e=="object"?nt.test(e)?H3:hE:_c}function K5(e,t){const n=[...e],a=n.length,o=e.map((l,u)=>Bh(l)(l,t[u]));return l=>{for(let u=0;u<a;u++)n[u]=o[u](l);return n}}function hE(e,t){const n={...e,...t},a={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Bh(e[o])(e[o],t[o]));return o=>{for(const l in a)n[l]=a[l](o);return n}}function mE(e,t){const n=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][a[l]],d=e.values[u]??0;n[o]=d,a[l]++}return n}const gE=(e,t)=>{const n=Fn.createTransformer(t),a=So(e),o=So(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?Tp.has(e)&&!o.values.length||Tp.has(t)&&!a.values.length?fE(e,t):Vo(K5(mE(a,o),o.values),n):_c(e,t)};function Q5(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Xe(e,t,n):Bh(e)(e,t)}const xE=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Ne.update(t,n),stop:()=>Mi(t),now:()=>ht.isProcessing?ht.timestamp:It.now()}},J5=(e,t,n=10)=>{let a="";const o=Math.max(Math.round(t/n),2);for(let l=0;l<o;l++)a+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Gc=2e4;function $h(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<Gc;)t+=n,a=e.next(t);return t>=Gc?1/0:t}function vE(e,t=100,n){const a=n({...e,keyframes:[0,t]}),o=Math.min($h(a),Gc);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:_i(o)}}const yE=5;function e6(e,t,n){const a=Math.max(t-yE,0);return kh(n-e(a),t-a)}const Ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},g0=.001;function wE({duration:e=Ke.duration,bounce:t=Ke.bounce,velocity:n=Ke.velocity,mass:a=Ke.mass}){let o,l,u=1-t;u=Yi(Ke.minDamping,Ke.maxDamping,u),e=Yi(Ke.minDuration,Ke.maxDuration,_i(e)),u<1?(o=h=>{const g=h*u,v=g*e,y=g-n,w=Ep(h,u),b=Math.exp(-v);return g0-y/w*b},l=h=>{const v=h*u*e,y=v*n+n,w=Math.pow(u,2)*Math.pow(h,2)*e,b=Math.exp(-v),j=Ep(Math.pow(h,2),u);return(-o(h)+g0>0?-1:1)*((y-w)*b)/j}):(o=h=>{const g=Math.exp(-h*e),v=(h-n)*e+1;return-g0+g*v},l=h=>{const g=Math.exp(-h*e),v=(n-h)*(e*e);return g*v});const d=5/e,f=SE(o,l,d);if(e=Ui(e),isNaN(f))return{stiffness:Ke.stiffness,damping:Ke.damping,duration:e};{const h=Math.pow(f,2)*a;return{stiffness:h,damping:u*2*Math.sqrt(a*h),duration:e}}}const bE=12;function SE(e,t,n){let a=n;for(let o=1;o<bE;o++)a=a-e(a)/t(a);return a}function Ep(e,t){return e*Math.sqrt(1-t*t)}const CE=["duration","bounce"],TE=["stiffness","damping","mass"];function P3(e,t){return t.some(n=>e[n]!==void 0)}function EE(e){let t={velocity:Ke.velocity,stiffness:Ke.stiffness,damping:Ke.damping,mass:Ke.mass,isResolvedFromDuration:!1,...e};if(!P3(e,TE)&&P3(e,CE))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),o=a*a,l=2*Yi(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Ke.mass,stiffness:o,damping:l}}else{const n=wE(e);t={...t,...n,mass:Ke.mass},t.isResolvedFromDuration=!0}return t}function qc(e=Ke.visualDuration,t=Ke.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=n;const l=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],d={done:!1,value:l},{stiffness:f,damping:h,mass:g,duration:v,velocity:y,isResolvedFromDuration:w}=EE({...n,velocity:-_i(n.velocity||0)}),b=y||0,j=h/(2*Math.sqrt(f*g)),L=u-l,M=_i(Math.sqrt(f/g)),T=Math.abs(L)<5;a||(a=T?Ke.restSpeed.granular:Ke.restSpeed.default),o||(o=T?Ke.restDelta.granular:Ke.restDelta.default);let E;if(j<1){const O=Ep(M,j);E=N=>{const H=Math.exp(-j*M*N);return u-H*((b+j*M*L)/O*Math.sin(O*N)+L*Math.cos(O*N))}}else if(j===1)E=O=>u-Math.exp(-M*O)*(L+(b+M*L)*O);else{const O=M*Math.sqrt(j*j-1);E=N=>{const H=Math.exp(-j*M*N),U=Math.min(O*N,300);return u-H*((b+j*M*L)*Math.sinh(U)+O*L*Math.cosh(U))/O}}const V={calculatedDuration:w&&v||null,next:O=>{const N=E(O);if(w)d.done=O>=v;else{let H=O===0?b:0;j<1&&(H=O===0?Ui(b):e6(E,O,N));const U=Math.abs(H)<=a,Y=Math.abs(u-N)<=o;d.done=U&&Y}return d.value=d.done?u:N,d},toString:()=>{const O=Math.min($h(V),Gc),N=J5(H=>V.next(O*H).value,O,30);return O+"ms "+N},toTransition:()=>{}};return V}qc.applyToOptions=e=>{const t=vE(e,100,qc);return e.ease=t.ease,e.duration=Ui(t.duration),e.type="keyframes",e};function jp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:d,max:f,restDelta:h=.5,restSpeed:g}){const v=e[0],y={done:!1,value:v},w=U=>d!==void 0&&U<d||f!==void 0&&U>f,b=U=>d===void 0?f:f===void 0||Math.abs(d-U)<Math.abs(f-U)?d:f;let j=n*t;const L=v+j,M=u===void 0?L:u(L);M!==L&&(j=M-v);const T=U=>-j*Math.exp(-U/a),E=U=>M+T(U),V=U=>{const Y=T(U),F=E(U);y.done=Math.abs(Y)<=h,y.value=y.done?M:F};let O,N;const H=U=>{w(y.value)&&(O=U,N=qc({keyframes:[y.value,b(y.value)],velocity:e6(E,U,y.value),damping:o,stiffness:l,restDelta:h,restSpeed:g}))};return H(0),{calculatedDuration:null,next:U=>{let Y=!1;return!N&&O===void 0&&(Y=!0,V(U),H(U)),O!==void 0&&U>=O?N.next(U-O):(!Y&&V(U),y)}}}function jE(e,t,n){const a=[],o=n||mn.mix||Q5,l=e.length-1;for(let u=0;u<l;u++){let d=o(e[u],e[u+1]);if(t){const f=Array.isArray(t)?t[u]||Ut:t;d=Vo(f,d)}a.push(d)}return a}function Ih(e,t,{clamp:n=!0,ease:a,mixer:o}={}){const l=e.length;if(wo(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const d=jE(t,a,o),f=d.length,h=g=>{if(u&&g<e[0])return t[0];let v=0;if(f>1)for(;v<e.length-2&&!(g<e[v+1]);v++);const y=Nr(e[v],e[v+1],g);return d[v](y)};return n?g=>h(Yi(e[0],e[l-1],g)):h}function AE(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const o=Nr(0,t,a);e.push(Xe(n,1,o))}}function t6(e){const t=[0];return AE(t,e.length-1),t}function ME(e,t){return e.map(n=>n*t)}function OE(e,t){return e.map(()=>t||U5).splice(0,e.length-1)}function oo({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const o=UT(a)?a.map(k3):k3(a),l={done:!1,value:t[0]},u=ME(n&&n.length===t.length?n:t6(t),e),d=Ih(u,t,{ease:Array.isArray(o)?o:OE(t,o)});return{calculatedDuration:e,next:f=>(l.value=d(f),l.done=f>=e,l)}}const RE=e=>e!==null;function Uh(e,{repeat:t,repeatType:n="loop"},a,o=1){const l=e.filter(RE),d=o<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!d||a===void 0?l[d]:a}const LE={decay:jp,inertia:jp,tween:oo,keyframes:oo,spring:qc};function i6(e){typeof e.type=="string"&&(e.type=LE[e.type])}class _h{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const kE=e=>e/100;class Gh extends _h{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:n}=this.options;n&&n.updatedAt!==It.now()&&this.tick(It.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;i6(t);const{type:n=oo,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:d}=t;const f=n||oo;f!==oo&&typeof d[0]!="number"&&(this.mixKeyframes=Vo(kE,Q5(d[0],d[1])),d=[0,100]);const h=f({...t,keyframes:d});l==="mirror"&&(this.mirroredGenerator=f({...t,keyframes:[...d].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=$h(h));const{calculatedDuration:g}=h;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=h}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:d,calculatedDuration:f}=this;if(this.startTime===null)return a.next(0);const{delay:h=0,keyframes:g,repeat:v,repeatType:y,repeatDelay:w,type:b,onUpdate:j,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const M=this.currentTime-h*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let E=this.currentTime,V=a;if(v){const U=Math.min(this.currentTime,o)/d;let Y=Math.floor(U),F=U%1;!F&&U>=1&&(F=1),F===1&&Y--,Y=Math.min(Y,v+1),!!(Y%2)&&(y==="reverse"?(F=1-F,w&&(F-=w/d)):y==="mirror"&&(V=u)),E=Yi(0,1,F)*d}const O=T?{done:!1,value:g[0]}:V.next(E);l&&(O.value=l(O.value));let{done:N}=O;!T&&f!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const H=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return H&&b!==jp&&(O.value=Uh(g,this.options,L,this.speed)),j&&j(O.value),H&&this.finish(),O}then(t,n){return this.finished.then(t,n)}get duration(){return _i(this.calculatedDuration)}get time(){return _i(this.currentTime)}set time(t){var n;t=Ui(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(It.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=_i(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=xE,startTime:n}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(It.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function VE(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const ba=e=>e*180/Math.PI,Ap=e=>{const t=ba(Math.atan2(e[1],e[0]));return Mp(t)},DE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ap,rotateZ:Ap,skewX:e=>ba(Math.atan(e[1])),skewY:e=>ba(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Mp=e=>(e=e%360,e<0&&(e+=360),e),N3=Ap,B3=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),$3=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),zE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:B3,scaleY:$3,scale:e=>(B3(e)+$3(e))/2,rotateX:e=>Mp(ba(Math.atan2(e[6],e[5]))),rotateY:e=>Mp(ba(Math.atan2(-e[2],e[0]))),rotateZ:N3,rotate:N3,skewX:e=>ba(Math.atan(e[4])),skewY:e=>ba(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Op(e){return e.includes("scale")?1:0}function Rp(e,t){if(!e||e==="none")return Op(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(n)a=zE,o=n;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=DE,o=d}if(!o)return Op(t);const l=a[t],u=o[1].split(",").map(PE);return typeof l=="function"?l(u):u[l]}const HE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Rp(n,t)};function PE(e){return parseFloat(e.trim())}const Fr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xr=new Set(Fr),I3=e=>e===Yr||e===ge,NE=new Set(["x","y","z"]),BE=Fr.filter(e=>!NE.has(e));function $E(e){const t=[];return BE.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const Ca={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Rp(t,"x"),y:(e,{transform:t})=>Rp(t,"y")};Ca.translateX=Ca.x;Ca.translateY=Ca.y;const Ta=new Set;let Lp=!1,kp=!1,Vp=!1;function n6(){if(kp){const e=Array.from(Ta).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const o=$E(a);o.length&&(n.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=n.get(a);o&&o.forEach(([l,u])=>{var d;(d=a.getValue(l))==null||d.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}kp=!1,Lp=!1,Ta.forEach(e=>e.complete(Vp)),Ta.clear()}function a6(){Ta.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(kp=!0)})}function IE(){Vp=!0,a6(),n6(),Vp=!1}class qh{constructor(t,n,a,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Ta.add(this),Lp||(Lp=!0,Ne.read(a6),Ne.resolveKeyframes(n6))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&n){const d=a.readValue(n,u);d!=null&&(t[0]=d)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}VE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ta.delete(this)}cancel(){this.state==="scheduled"&&(Ta.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const UE=e=>e.startsWith("--");function _E(e,t,n){UE(t)?e.style.setProperty(t,n):e.style[t]=n}const r6=Rh(()=>window.ScrollTimeline!==void 0),GE={};function qE(e,t){const n=Rh(e);return()=>GE[t]??n()}const s6=qE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ao=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,U3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ao([0,.65,.55,1]),circOut:ao([.55,0,1,.45]),backIn:ao([.31,.01,.66,-.59]),backOut:ao([.33,1.53,.69,.99])};function o6(e,t){if(e)return typeof e=="function"?s6()?J5(e,t):"ease-out":_5(e)?ao(e):Array.isArray(e)?e.map(n=>o6(n,t)||U3.easeOut):U3[e]}function YE(e,t,n,{delay:a=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:d="easeOut",times:f}={},h=void 0){const g={[t]:n};f&&(g.offset=f);const v=o6(d,o);Array.isArray(v)&&(g.easing=v);const y={delay:a,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(y.pseudoElement=h),e.animate(g,y)}function l6(e){return typeof e=="function"&&"applyToOptions"in e}function FE({type:e,...t}){return l6(e)&&s6()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class XE extends _h{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:a,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:d,onComplete:f}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,wo(typeof t.type!="string");const h=FE(t);this.animation=YE(n,a,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=Uh(o,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(g):_E(n,a,g),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return _i(Number(t))}get time(){return _i(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Ui(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&r6()?(this.animation.timeline=t,Ut):n(this)}}const c6={anticipate:$5,backInOut:B5,circInOut:I5};function ZE(e){return e in c6}function WE(e){typeof e.ease=="string"&&ZE(e.ease)&&(e.ease=c6[e.ease])}const _3=10;class KE extends XE{constructor(t){WE(t),i6(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:o,element:l,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const d=new Gh({...u,autoplay:!1}),f=Ui(this.finishedTime??this.time);n.setWithVelocity(d.sample(f-_3).value,d.sample(f).value,_3),d.stop()}}const G3=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Fn.test(e)||e==="0")&&!e.startsWith("url("));function QE(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function JE(e,t,n,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=G3(o,t),d=G3(l,t);return!u||!d?!1:QE(e)||(n==="spring"||l6(n))&&a}function Dp(e){e.duration=0,e.type}const ej=new Set(["opacity","clipPath","filter","transform"]),tj=Rh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ij(e){var g;const{motionValue:t,name:n,repeatDelay:a,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return tj()&&n&&ej.has(n)&&(n!=="transform"||!h)&&!f&&!a&&o!=="mirror"&&l!==0&&u!=="inertia"}const nj=40;class aj extends _h{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:d,name:f,motionValue:h,element:g,...v}){var b;super(),this.stop=()=>{var j,L;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=It.now();const y={autoplay:t,delay:n,type:a,repeat:o,repeatDelay:l,repeatType:u,name:f,motionValue:h,element:g,...v},w=(g==null?void 0:g.KeyframeResolver)||qh;this.keyframeResolver=new w(d,(j,L,M)=>this.onKeyframesResolved(j,L,y,!M),f,h,g),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,a,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:d,delay:f,isHandoff:h,onUpdate:g}=a;this.resolvedAt=It.now(),JE(t,l,u,d)||((mn.instantAnimations||!f)&&(g==null||g(Uh(t,a,n))),t[0]=t[t.length-1],Dp(a),a.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>nj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},w=!h&&ij(y)?new KE({...y,element:y.motionValue.owner.current}):new Gh(y);w.finished.then(()=>this.notifyFinished()).catch(Ut),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),IE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const rj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sj(e){const t=rj.exec(e);if(!t)return[,];const[,n,a,o]=t;return[`--${n??a}`,o]}function u6(e,t,n=1){const[a,o]=sj(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const u=l.trim();return V5(u)?parseFloat(u):u}return Hh(o)?u6(o,t,n+1):o}function Yh(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const d6=new Set(["width","height","top","left","right","bottom",...Fr]),oj={test:e=>e==="auto",parse:e=>e},f6=e=>t=>t.test(e),p6=[Yr,ge,Gi,_n,tE,eE,oj],q3=e=>p6.find(f6(e));function lj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||z5(e):!0}const cj=new Set(["brightness","contrast","saturate","opacity"]);function uj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(Ph)||[];if(!a)return e;const o=n.replace(a,"");let l=cj.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+o+")"}const dj=/\b([a-z-]*)\(.*?\)/gu,zp={...Fn,getAnimatableNone:e=>{const t=e.match(dj);return t?t.map(uj).join(" "):e}},Y3={...Yr,transform:Math.round},fj={rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:ac,scaleX:ac,scaleY:ac,scaleZ:ac,skew:_n,skewX:_n,skewY:_n,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:bo,originX:V3,originY:V3,originZ:ge},Fh={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,backgroundPositionX:ge,backgroundPositionY:ge,...fj,zIndex:Y3,fillOpacity:bo,strokeOpacity:bo,numOctaves:Y3},pj={...Fh,color:nt,backgroundColor:nt,outlineColor:nt,fill:nt,stroke:nt,borderColor:nt,borderTopColor:nt,borderRightColor:nt,borderBottomColor:nt,borderLeftColor:nt,filter:zp,WebkitFilter:zp},h6=e=>pj[e];function m6(e,t){let n=h6(e);return n!==zp&&(n=Fn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const hj=new Set(["auto","none","0"]);function mj(e,t,n){let a=0,o;for(;a<e.length&&!o;){const l=e[a];typeof l=="string"&&!hj.has(l)&&So(l).values.length&&(o=e[a]),a++}if(o&&n)for(const l of t)e[l]=m6(n,o)}class gj extends qh{constructor(t,n,a,o,l){super(t,n,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let h=t[f];if(typeof h=="string"&&(h=h.trim(),Hh(h))){const g=u6(h,n.current);g!==void 0&&(t[f]=g),f===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!d6.has(a)||t.length!==2)return;const[o,l]=t,u=q3(o),d=q3(l);if(u!==d)if(I3(u)&&I3(d))for(let f=0;f<t.length;f++){const h=t[f];typeof h=="string"&&(t[f]=parseFloat(h))}else Ca[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||lj(t[o]))&&a.push(o);a.length&&mj(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ca[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var d;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const l=a.length-1,u=a[l];a[l]=Ca[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}function Xh(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const g6=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Zh(e){return D5(e)&&"offsetHeight"in e}const F3=30,xj=e=>!isNaN(parseFloat(e)),lo={current:void 0};class vj{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var l;const o=It.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=It.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=xj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Lh);const a=this.events[t].add(n);return t==="change"?()=>{a(),Ne.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return lo.current&&lo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=It.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>F3)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,F3);return kh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ei(e,t){return new vj(e,t)}const{schedule:Wh}=G5(queueMicrotask,!1),Ti={x:!1,y:!1};function x6(){return Ti.x||Ti.y}function yj(e){return e==="x"||e==="y"?Ti[e]?null:(Ti[e]=!0,()=>{Ti[e]=!1}):Ti.x||Ti.y?null:(Ti.x=Ti.y=!0,()=>{Ti.x=Ti.y=!1})}function v6(e,t){const n=Xh(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[n,o,()=>a.abort()]}function X3(e){return!(e.pointerType==="touch"||x6())}function wj(e,t,n={}){const[a,o,l]=v6(e,n),u=d=>{if(!X3(d))return;const{target:f}=d,h=t(f,d);if(typeof h!="function"||!f)return;const g=v=>{X3(v)&&(h(v),f.removeEventListener("pointerleave",g))};f.addEventListener("pointerleave",g,o)};return a.forEach(d=>{d.addEventListener("pointerenter",u,o)}),l}const y6=(e,t)=>t?e===t?!0:y6(e,t.parentElement):!1,Kh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,bj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Sj(e){return bj.has(e.tagName)||e.tabIndex!==-1}const Oc=new WeakSet;function Z3(e){return t=>{t.key==="Enter"&&e(t)}}function x0(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Cj=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=Z3(()=>{if(Oc.has(n))return;x0(n,"down");const o=Z3(()=>{x0(n,"up")}),l=()=>x0(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",l,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function W3(e){return Kh(e)&&!x6()}function Tj(e,t,n={}){const[a,o,l]=v6(e,n),u=d=>{const f=d.currentTarget;if(!W3(d))return;Oc.add(f);const h=t(f,d),g=(w,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",y),Oc.has(f)&&Oc.delete(f),W3(w)&&typeof h=="function"&&h(w,{success:b})},v=w=>{g(w,f===window||f===document||n.useGlobalTarget||y6(f,w.target))},y=w=>{g(w,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",y,o)};return a.forEach(d=>{(n.useGlobalTarget?window:d).addEventListener("pointerdown",u,o),Zh(d)&&(d.addEventListener("focus",h=>Cj(h,o)),!Sj(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),l}function Qh(e){return D5(e)&&"ownerSVGElement"in e}const Rc=new WeakMap;let Gn;const w6=(e,t,n)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:Qh(a)&&"getBBox"in a?a.getBBox()[t]:a[n],Ej=w6("inline","width","offsetWidth"),jj=w6("block","height","offsetHeight");function Aj({target:e,borderBoxSize:t}){var n;(n=Rc.get(e))==null||n.forEach(a=>{a(e,{get width(){return Ej(e,t)},get height(){return jj(e,t)}})})}function Mj(e){e.forEach(Aj)}function Oj(){typeof ResizeObserver>"u"||(Gn=new ResizeObserver(Mj))}function Rj(e,t){Gn||Oj();const n=Xh(e);return n.forEach(a=>{let o=Rc.get(a);o||(o=new Set,Rc.set(a,o)),o.add(t),Gn==null||Gn.observe(a)}),()=>{n.forEach(a=>{const o=Rc.get(a);o==null||o.delete(t),o!=null&&o.size||Gn==null||Gn.unobserve(a)})}}const Lc=new Set;let Sr;function Lj(){Sr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Lc.forEach(t=>t(e))},window.addEventListener("resize",Sr)}function kj(e){return Lc.add(e),Sr||Lj(),()=>{Lc.delete(e),!Lc.size&&typeof Sr=="function"&&(window.removeEventListener("resize",Sr),Sr=void 0)}}function Vj(e,t){return typeof e=="function"?kj(e):Rj(e,t)}function b6(e,t){let n;const a=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;n!==u&&e(u),n=u};return Ne.preUpdate(a,!0),()=>Mi(a)}function Dj(e){return Qh(e)&&e.tagName==="svg"}function zj(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],o=e[1+n],l=e[2+n],u=e[3+n],d=Ih(o,l,u);return t?d(a):d}const Ot=e=>!!(e&&e.getVelocity),Hj=[...p6,nt,Fn],Pj=e=>Hj.find(f6(e)),wu=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Nj extends R.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const a=n.offsetParent,o=Zh(a)&&a.offsetWidth||0,l=this.props.sizeRef.current;l.height=n.offsetHeight||0,l.width=n.offsetWidth||0,l.top=n.offsetTop,l.left=n.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Bj({children:e,isPresent:t,anchorX:n,root:a}){const o=R.useId(),l=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=R.useContext(wu);return R.useInsertionEffect(()=>{const{width:f,height:h,top:g,left:v,right:y}=u.current;if(t||!l.current||!f||!h)return;const w=n==="left"?`left: ${v}`:`right: ${y}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");d&&(b.nonce=d);const j=a??document.head;return j.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${w}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(b)&&j.removeChild(b)}},[t]),m.jsx(Nj,{isPresent:t,childRef:l,sizeRef:u,children:R.cloneElement(e,{ref:l})})}const $j=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:o,presenceAffectsLayout:l,mode:u,anchorX:d,root:f})=>{const h=Ma(Ij),g=R.useId();let v=!0,y=R.useMemo(()=>(v=!1,{id:g,initial:t,isPresent:n,custom:o,onExitComplete:w=>{h.set(w,!0);for(const b of h.values())if(!b)return;a&&a()},register:w=>(h.set(w,!1),()=>h.delete(w))}),[n,h,a]);return l&&v&&(y={...y}),R.useMemo(()=>{h.forEach((w,b)=>h.set(b,!1))},[n]),R.useEffect(()=>{!n&&!h.size&&a&&a()},[n]),u==="popLayout"&&(e=m.jsx(Bj,{isPresent:n,anchorX:d,root:f,children:e})),m.jsx(yu.Provider,{value:y,children:e})};function Ij(){return new Map}function S6(e=!0){const t=R.useContext(yu);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:o}=t,l=R.useId();R.useEffect(()=>{if(e)return o(l)},[e]);const u=R.useCallback(()=>e&&a&&a(l),[l,a,e]);return!n&&a?[!1,u]:[!0]}const rc=e=>e.key||"";function K3(e){const t=[];return R.Children.forEach(e,n=>{R.isValidElement(n)&&t.push(n)}),t}const Jh=({children:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:d="left",root:f})=>{const[h,g]=S6(u),v=R.useMemo(()=>K3(e),[e]),y=u&&!h?[]:v.map(rc),w=R.useRef(!0),b=R.useRef(v),j=Ma(()=>new Map),[L,M]=R.useState(v),[T,E]=R.useState(v);ko(()=>{w.current=!1,b.current=v;for(let N=0;N<T.length;N++){const H=rc(T[N]);y.includes(H)?j.delete(H):j.get(H)!==!0&&j.set(H,!1)}},[T,y.length,y.join("-")]);const V=[];if(v!==L){let N=[...v];for(let H=0;H<T.length;H++){const U=T[H],Y=rc(U);y.includes(Y)||(N.splice(H,0,U),V.push(U))}return l==="wait"&&V.length&&(N=V),E(K3(N)),M(v),null}const{forceRender:O}=R.useContext(jh);return m.jsx(m.Fragment,{children:T.map(N=>{const H=rc(N),U=u&&!h?!1:v===T||y.includes(H),Y=()=>{if(j.has(H))j.set(H,!0);else return;let F=!0;j.forEach(K=>{K||(F=!1)}),F&&(O==null||O(),E(b.current),u&&(g==null||g()),a&&a())};return m.jsx($j,{isPresent:U,initial:!w.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:U?void 0:Y,anchorX:d,children:N},H)})})},C6=R.createContext({strict:!1}),Q3={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Br={};for(const e in Q3)Br[e]={isEnabled:t=>Q3[e].some(n=>!!t[n])};function Uj(e){for(const t in e)Br[t]={...Br[t],...e[t]}}const _j=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Yc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||_j.has(e)}let T6=e=>!Yc(e);function Gj(e){typeof e=="function"&&(T6=t=>t.startsWith("on")?!Yc(t):e(t))}try{Gj(require("@emotion/is-prop-valid").default)}catch{}function qj(e,t,n){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(T6(o)||n===!0&&Yc(o)||!t&&!Yc(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const bu=R.createContext({});function Su(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Co(e){return typeof e=="string"||Array.isArray(e)}const e1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],t1=["initial",...e1];function Cu(e){return Su(e.animate)||t1.some(t=>Co(e[t]))}function E6(e){return!!(Cu(e)||e.variants)}function Yj(e,t){if(Cu(e)){const{initial:n,animate:a}=e;return{initial:n===!1||Co(n)?n:void 0,animate:Co(a)?a:void 0}}return e.inherit!==!1?t:{}}function Fj(e){const{initial:t,animate:n}=Yj(e,R.useContext(bu));return R.useMemo(()=>({initial:t,animate:n}),[J3(t),J3(n)])}function J3(e){return Array.isArray(e)?e.join(" "):e}const To={};function Xj(e){for(const t in e)To[t]=e[t],zh(t)&&(To[t].isCSSVariable=!0)}function j6(e,{layout:t,layoutId:n}){return Xr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!To[e]||e==="opacity")}const Zj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Wj=Fr.length;function Kj(e,t,n){let a="",o=!0;for(let l=0;l<Wj;l++){const u=Fr[l],d=e[u];if(d===void 0)continue;let f=!0;if(typeof d=="number"?f=d===(u.startsWith("scale")?1:0):f=parseFloat(d)===0,!f||n){const h=g6(d,Fh[u]);if(!f){o=!1;const g=Zj[u]||u;a+=`${g}(${h}) `}n&&(t[u]=h)}}return a=a.trim(),n?a=n(t,o?"":a):o&&(a="none"),a}function i1(e,t,n){const{style:a,vars:o,transformOrigin:l}=e;let u=!1,d=!1;for(const f in t){const h=t[f];if(Xr.has(f)){u=!0;continue}else if(zh(f)){o[f]=h;continue}else{const g=g6(h,Fh[f]);f.startsWith("origin")?(d=!0,l[f]=g):a[f]=g}}if(t.transform||(u||n?a.transform=Kj(t,e.transform,n):a.transform&&(a.transform="none")),d){const{originX:f="50%",originY:h="50%",originZ:g=0}=l;a.transformOrigin=`${f} ${h} ${g}`}}const n1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function A6(e,t,n){for(const a in t)!Ot(t[a])&&!j6(a,n)&&(e[a]=t[a])}function Qj({transformTemplate:e},t){return R.useMemo(()=>{const n=n1();return i1(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Jj(e,t){const n=e.style||{},a={};return A6(a,n,e),Object.assign(a,Qj(e,t)),a}function eA(e,t){const n={},a=Jj(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const tA={offset:"stroke-dashoffset",array:"stroke-dasharray"},iA={offset:"strokeDashoffset",array:"strokeDasharray"};function nA(e,t,n=1,a=0,o=!0){e.pathLength=1;const l=o?tA:iA;e[l.offset]=ge.transform(-a);const u=ge.transform(t),d=ge.transform(n);e[l.array]=`${u} ${d}`}function M6(e,{attrX:t,attrY:n,attrScale:a,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...d},f,h,g){if(i1(e,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:y}=e;v.transform&&(y.transform=v.transform,delete v.transform),(y.transform||v.transformOrigin)&&(y.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),a!==void 0&&(v.scale=a),o!==void 0&&nA(v,o,l,u,!1)}const O6=()=>({...n1(),attrs:{}}),R6=e=>typeof e=="string"&&e.toLowerCase()==="svg";function aA(e,t,n,a){const o=R.useMemo(()=>{const l=O6();return M6(l,t,R6(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};A6(l,e.style,e),o.style={...l,...o.style}}return o}const rA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function a1(e){return typeof e!="string"||e.includes("-")?!1:!!(rA.indexOf(e)>-1||/[A-Z]/u.test(e))}function sA(e,t,n,{latestValues:a},o,l=!1){const d=(a1(e)?aA:eA)(t,a,o,e),f=qj(t,typeof e=="string",l),h=e!==R.Fragment?{...f,...d,ref:n}:{},{children:g}=t,v=R.useMemo(()=>Ot(g)?g.get():g,[g]);return R.createElement(e,{...h,children:v})}function ev(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function r1(e,t,n,a){if(typeof t=="function"){const[o,l]=ev(a);t=t(n!==void 0?n:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=ev(a);t=t(n!==void 0?n:e.custom,o,l)}return t}function kc(e){return Ot(e)?e.get():e}function oA({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,o){return{latestValues:lA(n,a,o,e),renderState:t()}}function lA(e,t,n,a){const o={},l=a(e,{});for(const y in l)o[y]=kc(l[y]);let{initial:u,animate:d}=e;const f=Cu(e),h=E6(e);t&&h&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),d===void 0&&(d=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?d:u;if(v&&typeof v!="boolean"&&!Su(v)){const y=Array.isArray(v)?v:[v];for(let w=0;w<y.length;w++){const b=r1(e,y[w]);if(b){const{transitionEnd:j,transition:L,...M}=b;for(const T in M){let E=M[T];if(Array.isArray(E)){const V=g?E.length-1:0;E=E[V]}E!==null&&(o[T]=E)}for(const T in j)o[T]=j[T]}}}return o}const L6=e=>(t,n)=>{const a=R.useContext(bu),o=R.useContext(yu),l=()=>oA(e,t,a,o);return n?l():Ma(l)};function s1(e,t,n){var l;const{style:a}=e,o={};for(const u in a)(Ot(a[u])||t.style&&Ot(t.style[u])||j6(u,e)||((l=n==null?void 0:n.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=a[u]);return o}const cA=L6({scrapeMotionValuesFromProps:s1,createRenderState:n1});function k6(e,t,n){const a=s1(e,t,n);for(const o in e)if(Ot(e[o])||Ot(t[o])){const l=Fr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=e[o]}return a}const uA=L6({scrapeMotionValuesFromProps:k6,createRenderState:O6}),dA=Symbol.for("motionComponentSymbol");function Cr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function fA(e,t,n){return R.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),n&&(typeof n=="function"?n(a):Cr(n)&&(n.current=a))},[t])}const o1=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),pA="framerAppearId",V6="data-"+o1(pA),D6=R.createContext({});function hA(e,t,n,a,o){var j,L;const{visualElement:l}=R.useContext(bu),u=R.useContext(C6),d=R.useContext(yu),f=R.useContext(wu).reducedMotion,h=R.useRef(null);a=a||u.renderer,!h.current&&a&&(h.current=a(e,{visualState:t,parent:l,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:f}));const g=h.current,v=R.useContext(D6);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&mA(h.current,n,o,v);const y=R.useRef(!1);R.useInsertionEffect(()=>{g&&y.current&&g.update(n,d)});const w=n[V6],b=R.useRef(!!w&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,w))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,w)));return ko(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),b.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(!b.current&&g.animationState&&g.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,w)}),b.current=!1),g.enteringChildren=void 0)}),g}function mA(e,t,n,a){const{layoutId:o,layout:l,drag:u,dragConstraints:d,layoutScroll:f,layoutRoot:h,layoutCrossfade:g}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:z6(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||d&&Cr(d),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:f,layoutRoot:h})}function z6(e){if(e)return e.options.allowProjection!==!1?e.projection:z6(e.parent)}function v0(e,{forwardMotionProps:t=!1}={},n,a){n&&Uj(n);const o=a1(e)?uA:cA;function l(d,f){let h;const g={...R.useContext(wu),...d,layoutId:gA(d)},{isStatic:v}=g,y=Fj(d),w=o(d,v);if(!v&&Ah){xA();const b=vA(g);h=b.MeasureLayout,y.visualElement=hA(e,w,g,a,b.ProjectionNode)}return m.jsxs(bu.Provider,{value:y,children:[h&&y.visualElement?m.jsx(h,{visualElement:y.visualElement,...g}):null,sA(e,d,fA(w,y.visualElement,f),w,v,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=R.forwardRef(l);return u[dA]=e,u}function gA({layoutId:e}){const t=R.useContext(jh).id;return t&&e!==void 0?t+"-"+e:e}function xA(e,t){R.useContext(C6).strict}function vA(e){const{drag:t,layout:n}=Br;if(!t&&!n)return{};const a={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function yA(e,t){if(typeof Proxy>"u")return v0;const n=new Map,a=(l,u)=>v0(l,u,e,t),o=(l,u)=>a(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?a:(n.has(u)||n.set(u,v0(u,void 0,e,t)),n.get(u))})}function H6({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function wA({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function bA(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function y0(e){return e===void 0||e===1}function Hp({scale:e,scaleX:t,scaleY:n}){return!y0(e)||!y0(t)||!y0(n)}function va(e){return Hp(e)||P6(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function P6(e){return tv(e.x)||tv(e.y)}function tv(e){return e&&e!=="0%"}function Fc(e,t,n){const a=e-n,o=t*a;return n+o}function iv(e,t,n,a,o){return o!==void 0&&(e=Fc(e,o,a)),Fc(e,n,a)+t}function Pp(e,t=0,n=1,a,o){e.min=iv(e.min,t,n,a,o),e.max=iv(e.max,t,n,a,o)}function N6(e,{x:t,y:n}){Pp(e.x,t.translate,t.scale,t.originPoint),Pp(e.y,n.translate,n.scale,n.originPoint)}const nv=.999999999999,av=1.0000000000001;function SA(e,t,n,a=!1){const o=n.length;if(!o)return;t.x=t.y=1;let l,u;for(let d=0;d<o;d++){l=n[d],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Er(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,N6(e,u)),a&&va(l.latestValues)&&Er(e,l.latestValues))}t.x<av&&t.x>nv&&(t.x=1),t.y<av&&t.y>nv&&(t.y=1)}function Tr(e,t){e.min=e.min+t,e.max=e.max+t}function rv(e,t,n,a,o=.5){const l=Xe(e.min,e.max,o);Pp(e,t,n,l,a)}function Er(e,t){rv(e.x,t.x,t.scaleX,t.scale,t.originX),rv(e.y,t.y,t.scaleY,t.scale,t.originY)}function B6(e,t){return H6(bA(e.getBoundingClientRect(),t))}function CA(e,t,n){const a=B6(e,n),{scroll:o}=t;return o&&(Tr(a.x,o.offset.x),Tr(a.y,o.offset.y)),a}const sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),jr=()=>({x:sv(),y:sv()}),ov=()=>({min:0,max:0}),et=()=>({x:ov(),y:ov()}),Np={current:null},$6={current:!1};function TA(){if($6.current=!0,!!Ah)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Np.current=e.matches;e.addEventListener("change",t),t()}else Np.current=!1}const EA=new WeakMap;function jA(e,t,n){for(const a in t){const o=t[a],l=n[a];if(Ot(o))e.addValue(a,o);else if(Ot(l))e.addValue(a,Ei(o,{owner:e}));else if(l!==o)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(a);e.addValue(a,Ei(u!==void 0?u:o,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const lv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class AA{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=It.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ne.render(this.render,!1,!0))};const{latestValues:f,renderState:h}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=n.initial?{...f}:{},this.renderState=h,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=d,this.blockInitialAnimation=!!l,this.isControllingVariants=Cu(n),this.isVariantNode=E6(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in v){const w=v[y];f[y]!==void 0&&Ot(w)&&w.set(f[y])}}mount(t){var n;this.current=t,EA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),$6.current||TA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Np.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Mi(this.notifyUpdate),Mi(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Xr.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ne.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Br){const n=Br[t];if(!n)continue;const{isEnabled:a,Feature:o}=n;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):et()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<lv.length;a++){const o=lv[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=jA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=Ei(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(V5(a)||z5(a))?a=parseFloat(a):!Pj(a)&&Fn.test(n)&&(a=m6(t,n)),this.setBaseTarget(t,Ot(a)?a.get():a)),Ot(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var l;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const u=r1(this.props,n,(l=this.presenceContext)==null?void 0:l.custom);u&&(a=u[t])}if(n&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ot(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Lh),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Wh.render(this.render)}}class I6 extends AA{constructor(){super(...arguments),this.KeyframeResolver=gj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ot(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function U6(e,{style:t,vars:n},a,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,a);for(u in n)l.setProperty(u,n[u])}function MA(e){return window.getComputedStyle(e)}class OA extends I6{constructor(){super(...arguments),this.type="html",this.renderInstance=U6}readValueFromInstance(t,n){var a;if(Xr.has(n))return(a=this.projection)!=null&&a.isProjecting?Op(n):HE(t,n);{const o=MA(t),l=(zh(n)?o.getPropertyValue(n):o[n])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:n}){return B6(t,n)}build(t,n,a){i1(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return s1(t,n,a)}}const _6=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function RA(e,t,n,a){U6(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(_6.has(o)?o:o1(o),t.attrs[o])}class LA extends I6{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=et}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Xr.has(n)){const a=h6(n);return a&&a.default||0}return n=_6.has(n)?n:o1(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return k6(t,n,a)}build(t,n,a){M6(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,o){RA(t,n,a,o)}mount(t){this.isSVGTag=R6(t.tagName),super.mount(t)}}const kA=(e,t)=>a1(e)?new LA(t):new OA(t,{allowProjection:e!==R.Fragment});function Mr(e,t,n){const a=e.getProps();return r1(a,t,n!==void 0?n:a.custom,e)}const Bp=e=>Array.isArray(e);function VA(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ei(n))}function DA(e){return Bp(e)?e[e.length-1]||0:e}function l1(e,t){const n=Mr(e,t);let{transitionEnd:a={},transition:o={},...l}=n||{};l={...l,...a};for(const u in l){const d=DA(l[u]);VA(e,u,d)}}function zA(e){return!!(Ot(e)&&e.add)}function $p(e,t){const n=e.getValue("willChange");if(zA(n))return n.add(t);if(!n&&mn.WillChange){const a=new mn.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function G6(e){return e.props[V6]}const HA=e=>e!==null;function PA(e,{repeat:t,repeatType:n="loop"},a){const o=e.filter(HA),l=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[l]}const NA={type:"spring",stiffness:500,damping:25,restSpeed:10},BA=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),$A={type:"keyframes",duration:.8},IA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},UA=(e,{keyframes:t})=>t.length>2?$A:Xr.has(e)?e.startsWith("scale")?BA(t[1]):NA:IA;function _A({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:d,from:f,elapsed:h,...g}){return!!Object.keys(g).length}const c1=(e,t,n,a={},o,l)=>u=>{const d=Yh(a,e)||{},f=d.delay||a.delay||0;let{elapsed:h=0}=a;h=h-Ui(f);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...d,delay:-h,onUpdate:y=>{t.set(y),d.onUpdate&&d.onUpdate(y)},onComplete:()=>{u(),d.onComplete&&d.onComplete()},name:e,motionValue:t,element:l?void 0:o};_A(d)||Object.assign(g,UA(e,g)),g.duration&&(g.duration=Ui(g.duration)),g.repeatDelay&&(g.repeatDelay=Ui(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Dp(g),g.delay===0&&(v=!0)),(mn.instantAnimations||mn.skipAnimations)&&(v=!0,Dp(g),g.delay=0),g.allowFlatten=!d.type&&!d.ease,v&&!l&&t.get()!==void 0){const y=PA(g.keyframes,d);if(y!==void 0){Ne.update(()=>{g.onUpdate(y),g.onComplete()});return}}return d.isSync?new Gh(g):new aj(g)};function GA({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function q6(e,t,{delay:n=0,transitionOverride:a,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...d}=t;a&&(l=a);const f=[],h=o&&e.animationState&&e.animationState.getState()[o];for(const g in d){const v=e.getValue(g,e.latestValues[g]??null),y=d[g];if(y===void 0||h&&GA(h,g))continue;const w={delay:n,...Yh(l||{},g)},b=v.get();if(b!==void 0&&!v.isAnimating&&!Array.isArray(y)&&y===b&&!w.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const M=G6(e);if(M){const T=window.MotionHandoffAnimation(M,g,Ne);T!==null&&(w.startTime=T,j=!0)}}$p(e,g),v.start(c1(g,v,y,e.shouldReduceMotion&&d6.has(g)?{type:!1}:w,e,j));const L=v.animation;L&&f.push(L)}return u&&Promise.all(f).then(()=>{Ne.update(()=>{u&&l1(e,u)})}),f}function Y6(e,t,n,a=0,o=1){const l=Array.from(e).sort((h,g)=>h.sortNodePosition(g)).indexOf(t),u=e.size,d=(u-1)*a;return typeof n=="function"?n(l,u):o===1?l*a:d-l*a}function Ip(e,t,n={}){var f;const a=Mr(e,t,n.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(o=n.transitionOverride);const l=a?()=>Promise.all(q6(e,a,n)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:y}=o;return qA(e,t,h,g,v,y,n)}:()=>Promise.resolve(),{when:d}=o;if(d){const[h,g]=d==="beforeChildren"?[l,u]:[u,l];return h().then(()=>g())}else return Promise.all([l(),u(n.delay)])}function qA(e,t,n=0,a=0,o=0,l=1,u){const d=[];for(const f of e.variantChildren)f.notify("AnimationStart",t),d.push(Ip(f,t,{...u,delay:n+(typeof a=="function"?0:a)+Y6(e.variantChildren,f,a,o,l)}).then(()=>f.notify("AnimationComplete",t)));return Promise.all(d)}function F6(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(l=>Ip(e,l,n));a=Promise.all(o)}else if(typeof t=="string")a=Ip(e,t,n);else{const o=typeof t=="function"?Mr(e,t,n.custom):t;a=Promise.all(q6(e,o,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}function X6(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const YA=t1.length;function Z6(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Z6(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<YA;n++){const a=t1[n],o=e.props[a];(Co(o)||o===!1)&&(t[a]=o)}return t}const FA=[...e1].reverse(),XA=e1.length;function ZA(e){return t=>Promise.all(t.map(({animation:n,options:a})=>F6(e,n,a)))}function WA(e){let t=ZA(e),n=cv(),a=!0;const o=f=>(h,g)=>{var y;const v=Mr(e,g,f==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(v){const{transition:w,transitionEnd:b,...j}=v;h={...h,...j,...b}}return h};function l(f){t=f(e)}function u(f){const{props:h}=e,g=Z6(e.parent)||{},v=[],y=new Set;let w={},b=1/0;for(let L=0;L<XA;L++){const M=FA[L],T=n[M],E=h[M]!==void 0?h[M]:g[M],V=Co(E),O=M===f?T.isActive:null;O===!1&&(b=L);let N=E===g[M]&&E!==h[M]&&V;if(N&&a&&e.manuallyAnimateOnMount&&(N=!1),T.protectedKeys={...w},!T.isActive&&O===null||!E&&!T.prevProp||Su(E)||typeof E=="boolean")continue;const H=KA(T.prevProp,E);let U=H||M===f&&T.isActive&&!N&&V||L>b&&V,Y=!1;const F=Array.isArray(E)?E:[E];let K=F.reduce(o(M),{});O===!1&&(K={});const{prevResolvedValues:ne={}}=T,le={...ne,...K},de=W=>{U=!0,y.has(W)&&(Y=!0,y.delete(W)),T.needsAnimating[W]=!0;const J=e.getValue(W);J&&(J.liveStyle=!1)};for(const W in le){const J=K[W],te=ne[W];if(w.hasOwnProperty(W))continue;let k=!1;Bp(J)&&Bp(te)?k=!X6(J,te):k=J!==te,k?J!=null?de(W):y.add(W):J!==void 0&&y.has(W)?de(W):T.protectedKeys[W]=!0}T.prevProp=E,T.prevResolvedValues=K,T.isActive&&(w={...w,...K}),a&&e.blockInitialAnimation&&(U=!1);const oe=N&&H;U&&(!oe||Y)&&v.push(...F.map(W=>{const J={type:M};if(typeof W=="string"&&a&&!oe&&e.manuallyAnimateOnMount&&e.parent){const{parent:te}=e,k=Mr(te,W);if(te.enteringChildren&&k){const{delayChildren:X}=k.transition||{};J.delay=Y6(te.enteringChildren,e,X)}}return{animation:W,options:J}}))}if(y.size){const L={};if(typeof h.initial!="boolean"){const M=Mr(e,Array.isArray(h.initial)?h.initial[0]:h.initial);M&&M.transition&&(L.transition=M.transition)}y.forEach(M=>{const T=e.getBaseTarget(M),E=e.getValue(M);E&&(E.liveStyle=!0),L[M]=T??null}),v.push({animation:L})}let j=!!v.length;return a&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(v):Promise.resolve()}function d(f,h){var v;if(n[f].isActive===h)return Promise.resolve();(v=e.variantChildren)==null||v.forEach(y=>{var w;return(w=y.animationState)==null?void 0:w.setActive(f,h)}),n[f].isActive=h;const g=u(f);for(const y in n)n[y].protectedKeys={};return g}return{animateChanges:u,setActive:d,setAnimateFunction:l,getState:()=>n,reset:()=>{n=cv(),a=!0}}}function KA(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!X6(t,e):!1}function xa(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cv(){return{animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()}}class Wn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class QA extends Wn{constructor(t){super(t),t.animationState||(t.animationState=WA(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Su(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let JA=0;class eM extends Wn{constructor(){super(...arguments),this.id=JA++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const tM={animation:{Feature:QA},exit:{Feature:eM}};function Eo(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}function Ho(e){return{point:{x:e.pageX,y:e.pageY}}}const iM=e=>t=>Kh(t)&&e(t,Ho(t));function co(e,t,n,a){return Eo(e,t,iM(n),a)}const W6=1e-4,nM=1-W6,aM=1+W6,K6=.01,rM=0-K6,sM=0+K6;function Vt(e){return e.max-e.min}function oM(e,t,n){return Math.abs(e-t)<=n}function uv(e,t,n,a=.5){e.origin=a,e.originPoint=Xe(t.min,t.max,e.origin),e.scale=Vt(n)/Vt(t),e.translate=Xe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=nM&&e.scale<=aM||isNaN(e.scale))&&(e.scale=1),(e.translate>=rM&&e.translate<=sM||isNaN(e.translate))&&(e.translate=0)}function uo(e,t,n,a){uv(e.x,t.x,n.x,a?a.originX:void 0),uv(e.y,t.y,n.y,a?a.originY:void 0)}function dv(e,t,n){e.min=n.min+t.min,e.max=e.min+Vt(t)}function lM(e,t,n){dv(e.x,t.x,n.x),dv(e.y,t.y,n.y)}function fv(e,t,n){e.min=t.min-n.min,e.max=e.min+Vt(t)}function fo(e,t,n){fv(e.x,t.x,n.x),fv(e.y,t.y,n.y)}function gi(e){return[e("x"),e("y")]}const Q6=({current:e})=>e?e.ownerDocument.defaultView:null,pv=(e,t)=>Math.abs(e-t);function cM(e,t){const n=pv(e.x,t.x),a=pv(e.y,t.y);return Math.sqrt(n**2+a**2)}class J6{constructor(t,n,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=b0(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,b=cM(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!b)return;const{point:j}=y,{timestamp:L}=ht;this.history.push({...j,timestamp:L});const{onStart:M,onMove:T}=this.handlers;w||(M&&M(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,y)},this.handlePointerMove=(y,w)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=w0(w,this.transformPagePoint),Ne.update(this.updatePoint,!0)},this.handlePointerUp=(y,w)=>{this.end();const{onEnd:b,onSessionEnd:j,resumeAnimation:L}=this.handlers;if(this.dragSnapToOrigin&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=b0(y.type==="pointercancel"?this.lastMoveEventInfo:w0(w,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,M),j&&j(y,M)},!Kh(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=o||window;const d=Ho(t),f=w0(d,this.transformPagePoint),{point:h}=f,{timestamp:g}=ht;this.history=[{...h,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,b0(f,this.history)),this.removeListeners=Vo(co(this.contextWindow,"pointermove",this.handlePointerMove),co(this.contextWindow,"pointerup",this.handlePointerUp),co(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Mi(this.updatePoint)}}function w0(e,t){return t?{point:t(e.point)}:e}function hv(e,t){return{x:e.x-t.x,y:e.y-t.y}}function b0({point:e},t){return{point:e,delta:hv(e,ew(t)),offset:hv(e,uM(t)),velocity:dM(t,.1)}}function uM(e){return e[0]}function ew(e){return e[e.length-1]}function dM(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const o=ew(e);for(;n>=0&&(a=e[n],!(o.timestamp-a.timestamp>Ui(t)));)n--;if(!a)return{x:0,y:0};const l=_i(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function fM(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?Xe(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?Xe(n,e,a.max):Math.min(e,n)),e}function mv(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function pM(e,{top:t,left:n,bottom:a,right:o}){return{x:mv(e.x,n,o),y:mv(e.y,t,a)}}function gv(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function hM(e,t){return{x:gv(e.x,t.x),y:gv(e.y,t.y)}}function mM(e,t){let n=.5;const a=Vt(e),o=Vt(t);return o>a?n=Nr(t.min,t.max-a,e.min):a>o&&(n=Nr(e.min,e.max-o,t.min)),Yi(0,1,n)}function gM(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Up=.35;function xM(e=Up){return e===!1?e=0:e===!0&&(e=Up),{x:xv(e,"left","right"),y:xv(e,"top","bottom")}}function xv(e,t,n){return{min:vv(e,t),max:vv(e,n)}}function vv(e,t){return typeof e=="number"?e:e[t]||0}const vM=new WeakMap;class yM{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=et(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ho(v).point)},u=(v,y)=>{const{drag:w,dragPropagation:b,onDragStart:j}=this.getProps();if(w&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=yj(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gi(M=>{let T=this.getAxisMotionValue(M).get()||0;if(Gi.test(T)){const{projection:E}=this.visualElement;if(E&&E.layout){const V=E.layout.layoutBox[M];V&&(T=Vt(V)*(parseFloat(T)/100))}}this.originPoint[M]=T}),j&&Ne.postRender(()=>j(v,y)),$p(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},d=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y;const{dragPropagation:w,dragDirectionLock:b,onDirectionLock:j,onDrag:L}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:M}=y;if(b&&this.currentDirection===null){this.currentDirection=wM(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",y.point,M),this.updateAxis("y",y.point,M),this.visualElement.render(),L&&L(v,y)},f=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y,this.stop(v,y),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>gi(v=>{var y;return this.getAnimationState(v)==="paused"&&((y=this.getAxisMotionValue(v).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new J6(t,{onSessionStart:l,onStart:u,onMove:d,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:Q6(this.visualElement)})}stop(t,n){const a=t||this.latestPointerEvent,o=n||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!a)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:d}=this.getProps();d&&Ne.postRender(()=>d(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,a){const{drag:o}=this.getProps();if(!a||!sc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(u=fM(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Cr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=pM(a.layoutBox,t):this.constraints=!1,this.elastic=xM(n),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&gi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=gM(a.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Cr(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=CA(a,o.root,this.visualElement.getTransformPagePoint());let u=hM(o.layout.layoutBox,l);if(n){const d=n(wA(u));this.hasMutatedConstraints=!!d,d&&(u=H6(d))}return u}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:d}=this.getProps(),f=this.constraints||{},h=gi(g=>{if(!sc(g,n,this.currentDirection))return;let v=f&&f[g]||{};u&&(v={min:0,max:0});const y=o?200:1e6,w=o?40:1e7,b={type:"inertia",velocity:a?t[g]:0,bounceStiffness:y,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(g,b)});return Promise.all(h).then(d)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return $p(this.visualElement,t),a.start(c1(t,a,0,n,this.visualElement,!1))}stopAnimation(){gi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){gi(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[n];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){gi(n=>{const{drag:a}=this.getProps();if(!sc(n,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:d}=o.layout.layoutBox[n];l.set(t[n]-Xe(u,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Cr(n)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};gi(u=>{const d=this.getAxisMotionValue(u);if(d&&this.constraints!==!1){const f=d.get();o[u]=mM({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),gi(u=>{if(!sc(u,t,null))return;const d=this.getAxisMotionValue(u),{min:f,max:h}=this.constraints[u];d.set(Xe(f,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;vM.set(this.visualElement,this);const t=this.visualElement.current,n=co(t,"pointerdown",f=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(f)}),a=()=>{const{dragConstraints:f}=this.getProps();Cr(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ne.read(a);const u=Eo(window,"resize",()=>this.scalePositionWithinConstraints()),d=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(gi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=f[g].translate,v.set(v.get()+f[g].translate))}),this.visualElement.render())});return()=>{u(),n(),l(),d&&d()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Up,dragMomentum:d=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:d}}}function sc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function wM(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class bM extends Wn{constructor(t){super(t),this.removeGroupControls=Ut,this.removeListeners=Ut,this.controls=new yM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ut}unmount(){this.removeGroupControls(),this.removeListeners()}}const yv=e=>(t,n)=>{e&&Ne.postRender(()=>e(t,n))};class SM extends Wn{constructor(){super(...arguments),this.removePointerDownListener=Ut}onPointerDown(t){this.session=new J6(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Q6(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:yv(t),onStart:yv(n),onMove:a,onEnd:(l,u)=>{delete this.session,o&&Ne.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=co(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Vc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function wv(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Qs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ge.test(e))e=parseFloat(e);else return e;const n=wv(e,t.target.x),a=wv(e,t.target.y);return`${n}% ${a}%`}},CM={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,o=Fn.parse(e);if(o.length>5)return a;const l=Fn.createTransformer(e),u=typeof o[0]!="number"?1:0,d=n.x.scale*t.x,f=n.y.scale*t.y;o[0+u]/=d,o[1+u]/=f;const h=Xe(d,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let S0=!1;class TM extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=t;Xj(EM),l&&(n.group&&n.group.add(l),a&&a.register&&o&&a.register(l),S0&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Vc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:o,isPresent:l}=this.props,{projection:u}=a;return u&&(u.isPresent=l,S0=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Ne.postRender(()=>{const d=u.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Wh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:o}=t;S0=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function tw(e){const[t,n]=S6(),a=R.useContext(jh);return m.jsx(TM,{...e,layoutGroup:a,switchLayoutGroup:R.useContext(D6),isPresent:t,safeToRemove:n})}const EM={borderRadius:{...Qs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qs,borderTopRightRadius:Qs,borderBottomLeftRadius:Qs,borderBottomRightRadius:Qs,boxShadow:CM};function jM(e,t,n){const a=Ot(e)?e:Ei(e);return a.start(c1("",a,t,n)),a.animation}const AM=(e,t)=>e.depth-t.depth;class MM{constructor(){this.children=[],this.isDirty=!1}add(t){Mh(this.children,t),this.isDirty=!0}remove(t){Oh(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(AM),this.isDirty=!1,this.children.forEach(t)}}function OM(e,t){const n=It.now(),a=({timestamp:o})=>{const l=o-n;l>=t&&(Mi(a),e(l-t))};return Ne.setup(a,!0),()=>Mi(a)}const iw=["TopLeft","TopRight","BottomLeft","BottomRight"],RM=iw.length,bv=e=>typeof e=="string"?parseFloat(e):e,Sv=e=>typeof e=="number"||ge.test(e);function LM(e,t,n,a,o,l){o?(e.opacity=Xe(0,n.opacity??1,kM(a)),e.opacityExit=Xe(t.opacity??1,0,VM(a))):l&&(e.opacity=Xe(t.opacity??1,n.opacity??1,a));for(let u=0;u<RM;u++){const d=`border${iw[u]}Radius`;let f=Cv(t,d),h=Cv(n,d);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||Sv(f)===Sv(h)?(e[d]=Math.max(Xe(bv(f),bv(h),a),0),(Gi.test(h)||Gi.test(f))&&(e[d]+="%")):e[d]=h}(t.rotate||n.rotate)&&(e.rotate=Xe(t.rotate||0,n.rotate||0,a))}function Cv(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const kM=nw(0,.5,Uc),VM=nw(.5,.95,Ut);function nw(e,t,n){return a=>a<e?0:a>t?1:n(Nr(e,t,a))}function Tv(e,t){e.min=t.min,e.max=t.max}function mi(e,t){Tv(e.x,t.x),Tv(e.y,t.y)}function Ev(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function jv(e,t,n,a,o){return e-=t,e=Fc(e,1/n,a),o!==void 0&&(e=Fc(e,1/o,a)),e}function DM(e,t=0,n=1,a=.5,o,l=e,u=e){if(Gi.test(t)&&(t=parseFloat(t),t=Xe(u.min,u.max,t/100)-u.min),typeof t!="number")return;let d=Xe(l.min,l.max,a);e===l&&(d-=t),e.min=jv(e.min,t,n,d,o),e.max=jv(e.max,t,n,d,o)}function Av(e,t,[n,a,o],l,u){DM(e,t[n],t[a],t[o],t.scale,l,u)}const zM=["x","scaleX","originX"],HM=["y","scaleY","originY"];function Mv(e,t,n,a){Av(e.x,t,zM,n?n.x:void 0,a?a.x:void 0),Av(e.y,t,HM,n?n.y:void 0,a?a.y:void 0)}function Ov(e){return e.translate===0&&e.scale===1}function aw(e){return Ov(e.x)&&Ov(e.y)}function Rv(e,t){return e.min===t.min&&e.max===t.max}function PM(e,t){return Rv(e.x,t.x)&&Rv(e.y,t.y)}function Lv(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function rw(e,t){return Lv(e.x,t.x)&&Lv(e.y,t.y)}function kv(e){return Vt(e.x)/Vt(e.y)}function Vv(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class NM{constructor(){this.members=[]}add(t){Mh(this.members,t),t.scheduleRender()}remove(t){if(Oh(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let a;for(let o=n;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function BM(e,t,n){let a="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||l||u)&&(a=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:y,skewX:w,skewY:b}=n;h&&(a=`perspective(${h}px) ${a}`),g&&(a+=`rotate(${g}deg) `),v&&(a+=`rotateX(${v}deg) `),y&&(a+=`rotateY(${y}deg) `),w&&(a+=`skewX(${w}deg) `),b&&(a+=`skewY(${b}deg) `)}const d=e.x.scale*t.x,f=e.y.scale*t.y;return(d!==1||f!==1)&&(a+=`scale(${d}, ${f})`),a||"none"}const C0=["","X","Y","Z"],$M=1e3;let IM=0;function T0(e,t,n,a){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function sw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=G6(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ne,!(o||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&sw(a)}function ow({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(u={},d=t==null?void 0:t()){this.id=IM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(GM),this.nodes.forEach(XM),this.nodes.forEach(ZM),this.nodes.forEach(qM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new MM)}addEventListener(u,d){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Lh),this.eventHandlers.get(u).add(d)}notifyListeners(u,...d){const f=this.eventHandlers.get(u);f&&f.notify(...d)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Qh(u)&&!Dj(u),this.instance=u;const{layoutId:d,layout:f,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||d)&&(this.isLayoutDirty=!0),e){let g,v=0;const y=()=>this.root.updateBlockedByResize=!1;Ne.read(()=>{v=window.innerWidth}),e(u,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,g&&g(),g=OM(y,250),Vc.hasAnimatedSinceResize&&(Vc.hasAnimatedSinceResize=!1,this.nodes.forEach(Hv)))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||f)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:y,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||eO,{onLayoutAnimationStart:j,onLayoutAnimationComplete:L}=h.getProps(),M=!this.targetLayout||!rw(this.targetLayout,w),T=!v&&y;if(this.options.layoutRoot||this.resumeFrom||T||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const E={...Yh(b,"layout"),onPlay:j,onComplete:L};(h.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E),this.setAnimationOrigin(g,T)}else v||Hv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(WM),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:d,layout:f}=this.options;if(d===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(zv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(FM),this.nodes.forEach(UM),this.nodes.forEach(_M)):this.nodes.forEach(zv),this.clearAllSnapshots();const d=It.now();ht.delta=Yi(0,1e3/60,d-ht.timestamp),ht.timestamp=d,ht.isProcessing=!0,f0.update.process(ht),f0.preRender.process(ht),f0.render.process(ht),ht.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(YM),this.sharedNodes.forEach(KM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vt(this.snapshot.measuredBox.x)&&!Vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=et(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(d=!1),d&&this.instance){const f=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!aw(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&this.instance&&(d||va(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const d=this.measurePageBox();let f=this.removeElementScroll(d);return u&&(f=this.removeTransform(f)),tO(f),{animationId:this.root.animationId,measuredBox:d,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:u}=this.options;if(!u)return et();const d=u.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(iO))){const{scroll:g}=this.root;g&&(Tr(d.x,g.offset.x),Tr(d.y,g.offset.y))}return d}removeElementScroll(u){var f;const d=et();if(mi(d,u),(f=this.scroll)!=null&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:v,options:y}=g;g!==this.root&&v&&y.layoutScroll&&(v.wasRoot&&mi(d,u),Tr(d.x,v.offset.x),Tr(d.y,v.offset.y))}return d}applyTransform(u,d=!1){const f=et();mi(f,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Er(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),va(g.latestValues)&&Er(f,g.latestValues)}return va(this.latestValues)&&Er(f,this.latestValues),f}removeTransform(u){const d=et();mi(d,u);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!va(h.latestValues))continue;Hp(h.latestValues)&&h.updateSnapshot();const g=et(),v=h.measurePageBox();mi(g,v),Mv(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return va(this.latestValues)&&Mv(d,this.latestValues),d}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ht.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==d;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=ht.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=et(),this.relativeTargetOrigin=et(),fo(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=et(),this.targetWithTransforms=et()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),lM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mi(this.target,this.layout.layoutBox),N6(this.target,this.targetDelta)):mi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=et(),this.relativeTargetOrigin=et(),fo(this.relativeTargetOrigin,this.target,w.target),mi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Hp(this.parent.latestValues)||P6(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(f=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===ht.timestamp&&(f=!1),f)return;const{layout:h,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||g))return;mi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;SA(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=et());const{target:w}=u;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ev(this.prevProjectionDelta.x,this.projectionDelta.x),Ev(this.prevProjectionDelta.y,this.projectionDelta.y)),uo(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!Vv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=jr(),this.projectionDelta=jr(),this.projectionDeltaWithTransform=jr()}setAnimationOrigin(u,d=!1){const f=this.snapshot,h=f?f.latestValues:{},g={...this.latestValues},v=jr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const y=et(),w=f?f.source:void 0,b=this.layout?this.layout.source:void 0,j=w!==b,L=this.getStack(),M=!L||L.members.length<=1,T=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(JM));this.animationProgress=0;let E;this.mixTargetDelta=V=>{const O=V/1e3;Pv(v.x,u.x,O),Pv(v.y,u.y,O),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),QM(this.relativeTarget,this.relativeTargetOrigin,y,O),E&&PM(this.relativeTarget,E)&&(this.isProjectionDirty=!1),E||(E=et()),mi(E,this.relativeTarget)),j&&(this.animationValues=g,LM(g,h,this.latestValues,O,T,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var d,f,h;this.notifyListeners("animationStart"),(d=this.currentAnimation)==null||d.stop(),(h=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ne.update(()=>{Vc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ei(0)),this.currentAnimation=jM(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($M),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:d,target:f,layout:h,latestValues:g}=u;if(!(!d||!f||!h)){if(this!==u&&this.layout&&h&&lw(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||et();const v=Vt(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+v;const y=Vt(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+y}mi(d,f),Er(d,g),uo(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(u,d){this.sharedNodes.has(u)||this.sharedNodes.set(u,new NM),this.sharedNodes.get(u).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var d;const{layoutId:u}=this.options;return u?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:u}=this.options;return u?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:d,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let d=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(d=!0),!d)return;const h={};f.z&&T0("z",u,h,this.animationValues);for(let g=0;g<C0.length;g++)T0(`rotate${C0[g]}`,u,h,this.animationValues),T0(`skew${C0[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}applyProjectionStyles(u,d){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=kc(d==null?void 0:d.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=kc(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=BM(this.projectionDeltaWithTransform,this.treeScale,g);f&&(v=f(g,v)),u.transform=v;const{x:y,y:w}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${w.origin*100}% 0`,h.animationValues?u.opacity=h===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=h===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in To){if(g[b]===void 0)continue;const{correct:j,applyTo:L,isCSSVariable:M}=To[b],T=v==="none"?g[b]:j(g[b],h);if(L){const E=L.length;for(let V=0;V<E;V++)u[L[V]]=T}else M?this.options.visualElement.renderState.vars[b]=T:u[b]=T}this.options.layoutId&&(u.pointerEvents=h===this?kc(d==null?void 0:d.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var d;return(d=u.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(Dv),this.root.sharedNodes.clear()}}}function UM(e){e.updateLayout()}function _M(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?gi(v=>{const y=u?t.measuredBox[v]:t.layoutBox[v],w=Vt(y);y.min=a[v].min,y.max=y.min+w}):lw(l,t.layoutBox,a)&&gi(v=>{const y=u?t.measuredBox[v]:t.layoutBox[v],w=Vt(a[v]);y.max=y.min+w,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+w)});const d=jr();uo(d,a,t.layoutBox);const f=jr();u?uo(f,e.applyTransform(o,!0),t.measuredBox):uo(f,a,t.layoutBox);const h=!aw(d);let g=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:w}=v;if(y&&w){const b=et();fo(b,t.layoutBox,y.layoutBox);const j=et();fo(j,a,w.layoutBox),rw(b,j)||(g=!0),v.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=b,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:f,layoutDelta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function GM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function YM(e){e.clearSnapshot()}function Dv(e){e.clearMeasurements()}function zv(e){e.isLayoutDirty=!1}function FM(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Hv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function XM(e){e.resolveTargetDelta()}function ZM(e){e.calcProjection()}function WM(e){e.resetSkewAndRotation()}function KM(e){e.removeLeadSnapshot()}function Pv(e,t,n){e.translate=Xe(t.translate,0,n),e.scale=Xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Nv(e,t,n,a){e.min=Xe(t.min,n.min,a),e.max=Xe(t.max,n.max,a)}function QM(e,t,n,a){Nv(e.x,t.x,n.x,a),Nv(e.y,t.y,n.y,a)}function JM(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const eO={duration:.45,ease:[.4,0,.1,1]},Bv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),$v=Bv("applewebkit/")&&!Bv("chrome/")?Math.round:Ut;function Iv(e){e.min=$v(e.min),e.max=$v(e.max)}function tO(e){Iv(e.x),Iv(e.y)}function lw(e,t,n){return e==="position"||e==="preserve-aspect"&&!oM(kv(t),kv(n),.2)}function iO(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const nO=ow({attachResizeListener:(e,t)=>Eo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),E0={current:void 0},cw=ow({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!E0.current){const e=new nO({});e.mount(window),e.setOptions({layoutScroll:!0}),E0.current=e}return E0.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),aO={pan:{Feature:SM},drag:{Feature:bM,ProjectionNode:cw,MeasureLayout:tw}};function Uv(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,l=a[o];l&&Ne.postRender(()=>l(t,Ho(t)))}class rO extends Wn{mount(){const{current:t}=this.node;t&&(this.unmount=wj(t,(n,a)=>(Uv(this.node,a,"Start"),o=>Uv(this.node,o,"End"))))}unmount(){}}class sO extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(Eo(this.node.current,"focus",()=>this.onFocus()),Eo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _v(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),l=a[o];l&&Ne.postRender(()=>l(t,Ho(t)))}class oO extends Wn{mount(){const{current:t}=this.node;t&&(this.unmount=Tj(t,(n,a)=>(_v(this.node,a,"Start"),(o,{success:l})=>_v(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const _p=new WeakMap,j0=new WeakMap,lO=e=>{const t=_p.get(e.target);t&&t(e)},cO=e=>{e.forEach(lO)};function uO({root:e,...t}){const n=e||document;j0.has(n)||j0.set(n,{});const a=j0.get(n),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(cO,{root:e,...t})),a[o]}function dO(e,t,n){const a=uO(t);return _p.set(e,n),a.observe(e),()=>{_p.delete(e),a.unobserve(e)}}const fO={some:0,all:1};class pO extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:o="some",once:l}=t,u={root:n?n.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:fO[o]},d=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),y=h?g:v;y&&y(f)};return dO(this.node.current,u,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(hO(t,n))&&this.startObserver()}unmount(){}}function hO({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const mO={inView:{Feature:pO},tap:{Feature:oO},focus:{Feature:sO},hover:{Feature:rO}},gO={layout:{ProjectionNode:cw,MeasureLayout:tw}},xO={...tM,...mO,...aO,...gO},P=yA(xO,kA),vO=50,Gv=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),yO=()=>({time:0,x:Gv(),y:Gv()}),wO={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function qv(e,t,n,a){const o=n[t],{length:l,position:u}=wO[t],d=o.current,f=n.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Nr(0,o.scrollLength,o.current);const h=a-f;o.velocity=h>vO?0:kh(o.current-d,h)}function bO(e,t,n){qv(e,"x",t,n),qv(e,"y",t,n),t.time=n}function SO(e,t){const n={x:0,y:0};let a=e;for(;a&&a!==t;)if(Zh(a))n.x+=a.offsetLeft,n.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();n.x+=o.left-l.left,n.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();n.x+=o,n.y+=l;let u=null,d=a.parentNode;for(;!u;)d.tagName==="svg"&&(u=d),d=a.parentNode;a=u}else break;return n}const Gp={start:0,center:.5,end:1};function Yv(e,t,n=0){let a=0;if(e in Gp&&(e=Gp[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),n+a}const CO=[0,0];function TO(e,t,n,a){let o=Array.isArray(e)?e:CO,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Gp[e]?e:"0"]),l=Yv(o[0],n,a),u=Yv(o[1],t),l-u}const EO={All:[[0,0],[1,1]]},jO={x:0,y:0};function AO(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function MO(e,t,n){const{offset:a=EO.All}=n,{target:o=e,axis:l="y"}=n,u=l==="y"?"height":"width",d=o!==e?SO(o,e):jO,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:AO(o),h={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const v=a.length;for(let y=0;y<v;y++){const w=TO(a[y],h[u],f[u],d[l]);!g&&w!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=w}g&&(t[l].interpolate=Ih(t[l].offset,t6(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=Yi(0,1,t[l].interpolate(t[l].current))}function OO(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)n.x.targetOffset+=a.offsetLeft,n.y.targetOffset+=a.offsetTop,a=a.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function RO(e,t,n,a={}){return{measure:o=>{OO(e,a.target,n),bO(e,n,o),(a.offset||a.target)&&MO(e,n,a)},notify:()=>t(n)}}const Js=new WeakMap,Fv=new WeakMap,A0=new WeakMap,Xv=e=>e===document.scrollingElement?window:e;function uw(e,{container:t=document.scrollingElement,...n}={}){if(!t)return Ut;let a=A0.get(t);a||(a=new Set,A0.set(t,a));const o=yO(),l=RO(t,e,o,n);if(a.add(l),!Js.has(t)){const d=()=>{for(const v of a)v.measure(ht.timestamp);Ne.preUpdate(f)},f=()=>{for(const v of a)v.notify()},h=()=>Ne.read(d);Js.set(t,h);const g=Xv(t);window.addEventListener("resize",h,{passive:!0}),t!==document.documentElement&&Fv.set(t,Vj(t,h)),g.addEventListener("scroll",h,{passive:!0}),h()}const u=Js.get(t);return Ne.read(u,!1,!0),()=>{var h;Mi(u);const d=A0.get(t);if(!d||(d.delete(l),d.size))return;const f=Js.get(t);Js.delete(t),f&&(Xv(t).removeEventListener("scroll",f),(h=Fv.get(t))==null||h(),window.removeEventListener("resize",f))}}const Zv=new Map;function LO(e){const t={value:0},n=uw(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:n}}function dw({source:e,container:t,...n}){const{axis:a}=n;e&&(t=e);const o=Zv.get(t)??new Map;Zv.set(t,o);const l=n.target??"self",u=o.get(l)??{},d=a+(n.offset??[]).join(",");return u[d]||(u[d]=!n.target&&r6()?new ScrollTimeline({source:t,axis:a}):LO({container:t,...n})),u[d]}function kO(e,t){const n=dw(t);return e.attachTimeline({timeline:t.target?void 0:n,observe:a=>(a.pause(),b6(o=>{a.time=a.duration*o},n))})}function VO(e){return e.length===2}function DO(e,t){return VO(e)?uw(n=>{e(n[t.axis].progress,n)},t):b6(e,dw(t))}function zO(e,{axis:t="y",container:n=document.scrollingElement,...a}={}){if(!n)return Ut;const o={axis:t,container:n,...a};return typeof e=="function"?DO(e,o):kO(e,o)}const HO=()=>({scrollX:Ei(0),scrollY:Ei(0),scrollXProgress:Ei(0),scrollYProgress:Ei(0)}),oc=e=>e?!e.current:!1;function Kn({container:e,target:t,...n}={}){const a=Ma(HO),o=R.useRef(null),l=R.useRef(!1),u=R.useCallback(()=>(o.current=zO((d,{x:f,y:h})=>{a.scrollX.set(f.current),a.scrollXProgress.set(f.progress),a.scrollY.set(h.current),a.scrollYProgress.set(h.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var d;(d=o.current)==null||d.call(o)}),[e,t,JSON.stringify(n.offset)]);return ko(()=>{if(l.current=!1,oc(e)||oc(t)){l.current=!0;return}else return u()},[u]),R.useEffect(()=>{if(l.current)return wo(!oc(e)),wo(!oc(t)),u()},[u]),a}function PO(e){const t=Ma(()=>Ei(e)),{isStatic:n}=R.useContext(wu);if(n){const[,a]=R.useState(e);R.useEffect(()=>t.on("change",a),[])}return t}function fw(e,t){const n=PO(t()),a=()=>n.set(t());return a(),ko(()=>{const o=()=>Ne.preRender(a,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Mi(a)}}),n}function NO(e){lo.current=[],e();const t=fw(lo.current,e);return lo.current=void 0,t}function bt(e,t,n,a){if(typeof e=="function")return NO(e);const o=typeof t=="function"?t:zj(t,n,a);return Array.isArray(e)?Wv(e,o):Wv([e],([l])=>o(l))}function Wv(e,t){const n=Ma(()=>[]);return fw(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return t(n)})}function BO(e){e.values.forEach(t=>t.stop())}function qp(e,t){[...t].reverse().forEach(a=>{const o=e.getVariant(a);o&&l1(e,o),e.variantChildren&&e.variantChildren.forEach(l=>{qp(l,t)})})}function $O(e,t){if(Array.isArray(t))return qp(e,t);if(typeof t=="string")return qp(e,[t]);l1(e,t)}function IO(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,a){const o=[];return e.forEach(l=>{o.push(F6(l,n,{transitionOverride:a}))}),Promise.all(o)},set(n){return e.forEach(a=>{$O(a,n)})},stop(){e.forEach(n=>{BO(n)})},mount(){return()=>{t.stop()}}};return t}function UO(){const e=Ma(IO);return ko(e.mount,[]),e}const _O=UO,GO={some:0,all:1};function qO(e,t,{root:n,margin:a,amount:o="some"}={}){const l=Xh(e),u=new WeakMap,d=h=>{h.forEach(g=>{const v=u.get(g.target);if(g.isIntersecting!==!!v)if(g.isIntersecting){const y=t(g.target,g);typeof y=="function"?u.set(g.target,y):f.unobserve(g.target)}else typeof v=="function"&&(v(g),u.delete(g.target))})},f=new IntersectionObserver(d,{root:n,rootMargin:a,threshold:typeof o=="number"?o:GO[o]});return l.forEach(h=>f.observe(h)),()=>f.disconnect()}function Tu(e,{root:t,margin:n,amount:a,once:o=!1,initial:l=!1}={}){const[u,d]=R.useState(l);return R.useEffect(()=>{if(!e.current||o&&u)return;const f=()=>(d(!0),o?void 0:()=>d(!1)),h={root:t&&t.current||void 0,margin:n,amount:a};return qO(e.current,f,h)},[t,e,n,o,a]),u}const YO=C.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,FO=C.button`
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
`,M0=C(P.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,XO=C(P.div)`
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
`,ZO=C(St)`
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
`,WO=C.p`
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
`;C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;C(P.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;C.div`
  padding: 10px 0;
`;const KO=C.img`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
`;C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${KO} {
    padding: 8px;
    margin-right: -8px;
  }
`;const QO=C.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,JO=(e,t,n,a)=>{var l,u,d,f;const o=[n,{code:t,...a||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);Ea(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(d=e==null?void 0:e.services)==null?void 0:d.logger)!=null&&f.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},Kv={},Yp=(e,t,n,a)=>{Ea(n)&&Kv[n]||(Ea(n)&&(Kv[n]=new Date),JO(e,t,n,a))},pw=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Fp=(e,t,n)=>{e.loadNamespaces(t,pw(e,n))},Qv=(e,t,n,a)=>{if(Ea(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Fp(e,n,a);n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,pw(e,a))},eR=(e,t,n={})=>!t.languages||!t.languages.length?(Yp(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),Ea=e=>typeof e=="string",tR=e=>typeof e=="object"&&e!==null,iR=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,nR={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},aR=e=>nR[e],rR=e=>e.replace(iR,aR);let Xp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:rR};const sR=(e={})=>{Xp={...Xp,...e}},oR=()=>Xp;let hw;const lR=e=>{hw=e},cR=()=>hw,uR={type:"3rdParty",init(e){sR(e.options.react),lR(e)}},dR=R.createContext();class fR{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const pR=(e,t)=>{const n=R.useRef();return R.useEffect(()=>{n.current=e},[e,t]),n.current},mw=(e,t,n,a)=>e.getFixedT(t,n,a),hR=(e,t,n,a)=>R.useCallback(mw(e,t,n,a),[e,t,n,a]),u1=(e,t={})=>{var V,O,N,H;const{i18n:n}=t,{i18n:a,defaultNS:o}=R.useContext(dR)||{},l=n||a||cR();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new fR),!l){Yp(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const U=(F,K)=>Ea(K)?K:tR(K)&&Ea(K.defaultValue)?K.defaultValue:Array.isArray(F)?F[F.length-1]:F,Y=[U,{},!1];return Y.t=U,Y.i18n={},Y.ready=!1,Y}(V=l.options.react)!=null&&V.wait&&Yp(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...oR(),...l.options.react,...t},{useSuspense:d,keyPrefix:f}=u;let h=o||((O=l.options)==null?void 0:O.defaultNS);h=Ea(h)?[h]:h||["translation"],(H=(N=l.reportNamespaces).addUsedNamespaces)==null||H.call(N,h);const g=(l.isInitialized||l.initializedStoreOnce)&&h.every(U=>eR(U,l,u)),v=hR(l,t.lng||null,u.nsMode==="fallback"?h:h[0],f),y=()=>v,w=()=>mw(l,t.lng||null,u.nsMode==="fallback"?h:h[0],f),[b,j]=R.useState(y);let L=h.join();t.lng&&(L=`${t.lng}${L}`);const M=pR(L),T=R.useRef(!0);R.useEffect(()=>{const{bindI18n:U,bindI18nStore:Y}=u;T.current=!0,!g&&!d&&(t.lng?Qv(l,t.lng,h,()=>{T.current&&j(w)}):Fp(l,h,()=>{T.current&&j(w)})),g&&M&&M!==L&&T.current&&j(w);const F=()=>{T.current&&j(w)};return U&&(l==null||l.on(U,F)),Y&&(l==null||l.store.on(Y,F)),()=>{T.current=!1,l&&U&&(U==null||U.split(" ").forEach(K=>l.off(K,F))),Y&&l&&Y.split(" ").forEach(K=>l.store.off(K,F))}},[l,L]),R.useEffect(()=>{T.current&&g&&j(y)},[l,f,g]);const E=[b,l,g];if(E.t=b,E.i18n=l,E.ready=g,g||!g&&!d)return E;throw new Promise(U=>{t.lng?Qv(l,t.lng,h,()=>U()):Fp(l,h,()=>U())})},mR=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,Jv=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`,In=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,gR=C.div`
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
`,xR=C.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,vR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,yR=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,wR=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,bR={open:{rotate:45,y:8},closed:{rotate:0,y:0}},SR={open:{opacity:0},closed:{opacity:1}},CR={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},TR={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},ER=({isOpen:e,setIsOpen:t})=>{const[,n]=R.useState(!1),{t:a}=u1(),o=wi(),l=["/contact","/service","/tips","/pricing","/fridge"].some(h=>o.pathname.startsWith(h));R.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const u=()=>{t(!1),n(!1)},d=h=>{const g=o.pathname;return h==="/home#hero"?g==="/"||g==="/home":g.startsWith(h.split("#")[0])},f=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return m.jsxs(YO,{children:[m.jsxs(FO,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[m.jsx(M0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:bR}),m.jsx(M0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:SR}),m.jsx(M0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:CR})]}),m.jsx(Jh,{children:e&&m.jsxs(XO,{initial:"closed",animate:"open",exit:"closed",variants:TR,transition:{duration:.3},children:[f.map((h,g)=>{const v=d(h.to);return m.jsxs("div",{children:[m.jsx(ZO,{to:h.to,onClick:u,children:m.jsx(WO,{$active:v,children:a(h.label)})}),m.jsx(QO,{})]},g)}),m.jsxs(mR,{children:[m.jsxs(Jv,{children:[m.jsx(In,{children:"Washing Machine Fix"}),m.jsx(In,{children:"Dishwasher Repair"}),m.jsx(In,{children:"Oven Maintenance"}),m.jsx(In,{children:"Dryer Troubleshooting"})]}),m.jsxs(Jv,{children:[m.jsx(In,{children:"Microwave Service"}),m.jsx(In,{children:"Air Conditioner Repair"}),m.jsx(In,{children:"Coffee Maker Repair"}),m.jsx(In,{children:"Blender Maintenance"})]})]}),m.jsxs(gR,{children:[m.jsx(xR,{}),m.jsxs(vR,{children:[m.jsx(yR,{children:"Designed by TRBN"}),m.jsx(wR,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},jR="/assets/LogoandTextContainer-CnBPFIWK.svg",AR=C.div`
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
`,MR=C.video`
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
`;C.img`
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
`;const OR=C.div`
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 0;
`,RR=C.div`
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
`,LR=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,kR=C.p`
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
`,VR=C.p`
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
`,DR=C.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  z-index: 3; /* Вище затемнення */
`,gw=C(St)`
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
`;Zn`
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
`;const ey="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",zR=()=>{const[e,t]=R.useState(!1),[n]=R.useState(!1),[a,o]=R.useState(!1),l=wi(),u=["/contact","/service","/tips","/pricing","/fridge"].some(w=>l.pathname.startsWith(w)),d=n||a,f=ch(),h=w=>{w.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&f("/home")};R.useEffect(()=>{const w=new IntersectionObserver(([j])=>{t(!j.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),w.observe(b),()=>{w.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const g=Pe({query:"(max-width: 1439px)"}),v=Pe({query:"(min-width: 768px) and (max-width: 1439px)"}),y=Pe({query:"(min-width: 1440px)"});return m.jsxs(rT,{$isScrolled:e,$darkMode:u,children:[m.jsxs(sT,{id:"header",children:[m.jsx(oT,{to:"/home#hero",onClick:h,$overlayOpen:d,$darkMode:u,children:m.jsx("img",{src:jR,alt:"Logo"})}),!g&&m.jsxs(lT,{children:[m.jsx(Ws,{children:m.jsx(Ks,{to:"/home#hero",$overlayOpen:d,$darkMode:u,children:"Home"})}),m.jsx(Ws,{children:m.jsx(Ks,{to:"/service#all",$overlayOpen:d,$darkMode:u,children:"Services"})}),m.jsx(Ws,{children:m.jsx(Ks,{to:"/about#ap",$overlayOpen:d,$darkMode:u,children:"About Us"})}),m.jsx(Ws,{children:m.jsx(Ks,{to:"/tips#app",$overlayOpen:d,$darkMode:u,children:"Tips"})}),m.jsx(Ws,{children:m.jsx(Ks,{to:"/contact#ap",$overlayOpen:d,$darkMode:u,children:"Contact"})})]}),y&&m.jsxs(E3,{children:[m.jsxs(tc,{children:[m.jsx($n,{$overlayOpen:d,$darkMode:u,children:m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),m.jsx($n,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),m.jsxs(tc,{children:[m.jsxs($n,{$overlayOpen:d,$darkMode:u,children:[m.jsx("img",{src:ey,alt:"🗺️"}),m.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),m.jsx($n,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]}),m.jsx(cT,{children:m.jsxs("div",{style:{display:"flex",gap:16},children:[m.jsx(gw,{to:"/contact#ap",children:"Contact Us"}),m.jsx(O5,{$overlayOpen:d,$darkMode:u,children:m.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),g&&m.jsx(ER,{isOpen:a,setIsOpen:o})]})})]}),v&&m.jsxs(E3,{children:[m.jsxs(tc,{children:[m.jsx($n,{$overlayOpen:d,$darkMode:u,children:m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),m.jsx($n,{$overlayOpen:d,$darkMode:u,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),m.jsxs(tc,{children:[m.jsxs($n,{$overlayOpen:d,$darkMode:u,children:[m.jsx("img",{src:ey,alt:"🗺️"}),m.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),m.jsx($n,{$overlayOpen:d,$darkMode:u,children:"& Nearby Cities"})]})]})]})},HR=C.footer`
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
`,PR=C.div`
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
`,NR=C.div`
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
`,eo=C(St)`
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
`,O0=C.p`
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
`,BR=C.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,$R=C.p`
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
`,IR=C.div`
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
`,UR=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_R=C.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GR=C.svg`
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
`;C(St)`
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
`;C(St)`
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
`;const qR=C.div`
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
`,YR=C.div`
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
`,FR=C.p`
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
`,XR=C.p`
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
`,xw=C.div`
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
`,vw=C.div`
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
`,yw=C.button`
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
`,ZR=C.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,WR=C.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,ww=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return m.jsxs("div",{children:[m.jsx(WR,{children:m.jsx(ZR,{children:"Privacy and terms"})}),m.jsx(qR,{children:e.map((t,n)=>m.jsxs(YR,{children:[m.jsx(FR,{children:t.title}),m.jsx(XR,{children:t.content})]},n))})]})},KR=()=>{const[e,t]=R.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return m.jsxs(m.Fragment,{children:[m.jsx(HR,{children:m.jsxs(PR,{children:[m.jsxs(NR,{children:[m.jsxs($R,{children:[m.jsx("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",m.jsx("br",{}),m.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),m.jsx("br",{})," ",m.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexnola@gmail.com"})]}),m.jsxs(IR,{children:[m.jsx(eo,{to:"/home#hero",children:"Home"}),m.jsx(eo,{to:"/service#all",children:"Services"}),m.jsx(eo,{to:"/about#ap",children:"About Us"}),m.jsx(eo,{to:"/tips#app",children:"Tips"}),m.jsx(eo,{to:"/contact#ap",children:"Contacts"}),m.jsx(O0,{onClick:n,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),m.jsxs(UR,{children:[m.jsxs(GR,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),m.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),m.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),m.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),m.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),m.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),m.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),m.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),m.jsx(_R,{opacity:.5}),m.jsxs(BR,{children:[m.jsx(O0,{size:"14px",weight:"500",children:"Designed by TRBN"}),m.jsx(O0,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&m.jsx(xw,{onClick:a,children:m.jsxs(vw,{onClick:o=>o.stopPropagation(),children:[m.jsx(yw,{onClick:a,children:"×"}),m.jsx(ww,{})]})})]})},QR=()=>{const e=wi();return R.useEffect(()=>{const t=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}},[]),R.useEffect(()=>{if(e.hash){const t=e.hash.replace("#",""),n=document.getElementById(t);n&&setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),m.jsxs(m.Fragment,{children:[m.jsx(zR,{}),m.jsx(R.Suspense,{children:m.jsx(j9,{})}),m.jsx(KR,{})]})};function ty(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function d1(e,t){e===void 0&&(e={}),t===void 0&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:ty(t[a])&&ty(e[a])&&Object.keys(t[a]).length>0&&d1(e[a],t[a])})}const bw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function qi(){const e=typeof document<"u"?document:{};return d1(e,bw),e}const JR={document:bw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Dt(){const e=typeof window<"u"?window:{};return d1(e,JR),e}function eL(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function tL(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Sw(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Xc(){return Date.now()}function iL(e){const t=Dt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function nL(e,t){t===void 0&&(t="x");const n=Dt();let a,o,l;const u=iL(e);return n.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(d=>d.replace(",",".")).join(", ")),l=new n.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=l.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=l.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(n.WebKitCSSMatrix?o=l.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function lc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function aL(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ii(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const a=n<0||arguments.length<=n?void 0:arguments[n];if(a!=null&&!aL(a)){const o=Object.keys(Object(a)).filter(l=>t.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const d=o[l],f=Object.getOwnPropertyDescriptor(a,d);f!==void 0&&f.enumerable&&(lc(e[d])&&lc(a[d])?a[d].__swiper__?e[d]=a[d]:ii(e[d],a[d]):!lc(e[d])&&lc(a[d])?(e[d]={},a[d].__swiper__?e[d]=a[d]:ii(e[d],a[d])):e[d]=a[d])}}}return e}function cc(e,t,n){e.style.setProperty(t,n)}function Cw(e){let{swiper:t,targetPosition:n,side:a}=e;const o=Dt(),l=-t.translate;let u=null,d;const f=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const h=n>l?"next":"prev",g=(y,w)=>h==="next"&&y>=w||h==="prev"&&y<=w,v=()=>{d=new Date().getTime(),u===null&&(u=d);const y=Math.max(Math.min((d-u)/f,1),0),w=.5-Math.cos(y*Math.PI)/2;let b=l+w*(n-l);if(g(b,n)&&(b=n),t.wrapperEl.scrollTo({[a]:b}),g(b,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:b})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(v)};v()}function Bi(e,t){t===void 0&&(t="");const n=Dt(),a=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function rL(e,t){const n=[t];for(;n.length>0;){const a=n.shift();if(e===a)return!0;n.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function sL(e,t){const n=Dt();let a=t.contains(e);return!a&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=rL(e,t))),a}function Zc(e){try{console.warn(e);return}catch{}}function Wc(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:eL(t)),n}function oL(e,t){const n=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function lL(e,t){const n=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function qn(e,t){return Dt().getComputedStyle(e,null).getPropertyValue(t)}function Kc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Tw(e,t){const n=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&n.push(a):n.push(a),a=a.parentElement;return n}function Zp(e,t,n){const a=Dt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function mt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Qc(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Ew(e,t,n,a){return e.params.createElements&&Object.keys(a).forEach(o=>{if(!n[o]&&n.auto===!0){let l=Bi(e.el,`.${a[o]}`)[0];l||(l=Wc("div",a[o]),l.className=a[o],e.el.append(l)),n[o]=l,t[o]=l}}),n}function f1(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function l(b){let j;return b&&typeof b=="string"&&t.isElement&&(j=t.el.querySelector(b)||t.hostEl.querySelector(b),j)?j:(b&&(typeof b=="string"&&(j=[...document.querySelectorAll(b)]),t.params.uniqueNavElements&&typeof b=="string"&&j&&j.length>1&&t.el.querySelectorAll(b).length===1?j=t.el.querySelector(b):j&&j.length===1&&(j=j[0])),b&&!j?b:j)}function u(b,j){const L=t.params.navigation;b=mt(b),b.forEach(M=>{M&&(M.classList[j?"add":"remove"](...L.disabledClass.split(" ")),M.tagName==="BUTTON"&&(M.disabled=j),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](L.lockClass))})}function d(){const{nextEl:b,prevEl:j}=t.navigation;if(t.params.loop){u(j,!1),u(b,!1);return}u(j,t.isBeginning&&!t.params.rewind),u(b,t.isEnd&&!t.params.rewind)}function f(b){b.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function h(b){b.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function g(){const b=t.params.navigation;if(t.params.navigation=Ew(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let j=l(b.nextEl),L=l(b.prevEl);Object.assign(t.navigation,{nextEl:j,prevEl:L}),j=mt(j),L=mt(L);const M=(T,E)=>{T&&T.addEventListener("click",E==="next"?h:f),!t.enabled&&T&&T.classList.add(...b.lockClass.split(" "))};j.forEach(T=>M(T,"next")),L.forEach(T=>M(T,"prev"))}function v(){let{nextEl:b,prevEl:j}=t.navigation;b=mt(b),j=mt(j);const L=(M,T)=>{M.removeEventListener("click",T==="next"?h:f),M.classList.remove(...t.params.navigation.disabledClass.split(" "))};b.forEach(M=>L(M,"next")),j.forEach(M=>L(M,"prev"))}a("init",()=>{t.params.navigation.enabled===!1?w():(g(),d())}),a("toEdge fromEdge lock unlock",()=>{d()}),a("destroy",()=>{v()}),a("enable disable",()=>{let{nextEl:b,prevEl:j}=t.navigation;if(b=mt(b),j=mt(j),t.enabled){d();return}[...b,...j].filter(L=>!!L).forEach(L=>L.classList.add(t.params.navigation.lockClass))}),a("click",(b,j)=>{let{nextEl:L,prevEl:M}=t.navigation;L=mt(L),M=mt(M);const T=j.target;let E=M.includes(T)||L.includes(T);if(t.isElement&&!E){const V=j.path||j.composedPath&&j.composedPath();V&&(E=V.find(O=>L.includes(O)||M.includes(O)))}if(t.params.navigation.hideOnClick&&!E){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===T||t.pagination.el.contains(T)))return;let V;L.length?V=L[0].classList.contains(t.params.navigation.hiddenClass):M.length&&(V=M[0].classList.contains(t.params.navigation.hiddenClass)),o(V===!0?"navigationShow":"navigationHide"),[...L,...M].filter(O=>!!O).forEach(O=>O.classList.toggle(t.params.navigation.hiddenClass))}});const y=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),d()},w=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(t.navigation,{enable:y,disable:w,update:d,init:g,destroy:v})}function to(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function cL(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:T=>T,formatFractionTotal:T=>T,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),t.pagination={el:null,bullets:[]};let u,d=0;function f(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function h(T,E){const{bulletActiveClass:V}=t.params.pagination;T&&(T=T[`${E==="prev"?"previous":"next"}ElementSibling`],T&&(T.classList.add(`${V}-${E}`),T=T[`${E==="prev"?"previous":"next"}ElementSibling`],T&&T.classList.add(`${V}-${E}-${E}`)))}function g(T,E,V){if(T=T%V,E=E%V,E===T+1)return"next";if(E===T-1)return"previous"}function v(T){const E=T.target.closest(to(t.params.pagination.bulletClass));if(!E)return;T.preventDefault();const V=Kc(E)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===V)return;const O=g(t.realIndex,V,t.slides.length);O==="next"?t.slideNext():O==="previous"?t.slidePrev():t.slideToLoop(V)}else t.slideTo(V)}function y(){const T=t.rtl,E=t.params.pagination;if(f())return;let V=t.pagination.el;V=mt(V);let O,N;const H=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,U=t.params.loop?Math.ceil(H/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(N=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,N=t.previousSnapIndex):(N=t.previousIndex||0,O=t.activeIndex||0),E.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const Y=t.pagination.bullets;let F,K,ne;if(E.dynamicBullets&&(u=Zp(Y[0],t.isHorizontal()?"width":"height"),V.forEach(le=>{le.style[t.isHorizontal()?"width":"height"]=`${u*(E.dynamicMainBullets+4)}px`}),E.dynamicMainBullets>1&&N!==void 0&&(d+=O-(N||0),d>E.dynamicMainBullets-1?d=E.dynamicMainBullets-1:d<0&&(d=0)),F=Math.max(O-d,0),K=F+(Math.min(Y.length,E.dynamicMainBullets)-1),ne=(K+F)/2),Y.forEach(le=>{const de=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(oe=>`${E.bulletActiveClass}${oe}`)].map(oe=>typeof oe=="string"&&oe.includes(" ")?oe.split(" "):oe).flat();le.classList.remove(...de)}),V.length>1)Y.forEach(le=>{const de=Kc(le);de===O?le.classList.add(...E.bulletActiveClass.split(" ")):t.isElement&&le.setAttribute("part","bullet"),E.dynamicBullets&&(de>=F&&de<=K&&le.classList.add(...`${E.bulletActiveClass}-main`.split(" ")),de===F&&h(le,"prev"),de===K&&h(le,"next"))});else{const le=Y[O];if(le&&le.classList.add(...E.bulletActiveClass.split(" ")),t.isElement&&Y.forEach((de,oe)=>{de.setAttribute("part",oe===O?"bullet-active":"bullet")}),E.dynamicBullets){const de=Y[F],oe=Y[K];for(let $=F;$<=K;$+=1)Y[$]&&Y[$].classList.add(...`${E.bulletActiveClass}-main`.split(" "));h(de,"prev"),h(oe,"next")}}if(E.dynamicBullets){const le=Math.min(Y.length,E.dynamicMainBullets+4),de=(u*le-u)/2-ne*u,oe=T?"right":"left";Y.forEach($=>{$.style[t.isHorizontal()?oe:"top"]=`${de}px`})}}V.forEach((Y,F)=>{if(E.type==="fraction"&&(Y.querySelectorAll(to(E.currentClass)).forEach(K=>{K.textContent=E.formatFractionCurrent(O+1)}),Y.querySelectorAll(to(E.totalClass)).forEach(K=>{K.textContent=E.formatFractionTotal(U)})),E.type==="progressbar"){let K;E.progressbarOpposite?K=t.isHorizontal()?"vertical":"horizontal":K=t.isHorizontal()?"horizontal":"vertical";const ne=(O+1)/U;let le=1,de=1;K==="horizontal"?le=ne:de=ne,Y.querySelectorAll(to(E.progressbarFillClass)).forEach(oe=>{oe.style.transform=`translate3d(0,0,0) scaleX(${le}) scaleY(${de})`,oe.style.transitionDuration=`${t.params.speed}ms`})}E.type==="custom"&&E.renderCustom?(Qc(Y,E.renderCustom(t,O+1,U)),F===0&&o("paginationRender",Y)):(F===0&&o("paginationRender",Y),o("paginationUpdate",Y)),t.params.watchOverflow&&t.enabled&&Y.classList[t.isLocked?"add":"remove"](E.lockClass)})}function w(){const T=t.params.pagination;if(f())return;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let V=t.pagination.el;V=mt(V);let O="";if(T.type==="bullets"){let N=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&N>E&&(N=E);for(let H=0;H<N;H+=1)T.renderBullet?O+=T.renderBullet.call(t,H,T.bulletClass):O+=`<${T.bulletElement} ${t.isElement?'part="bullet"':""} class="${T.bulletClass}"></${T.bulletElement}>`}T.type==="fraction"&&(T.renderFraction?O=T.renderFraction.call(t,T.currentClass,T.totalClass):O=`<span class="${T.currentClass}"></span> / <span class="${T.totalClass}"></span>`),T.type==="progressbar"&&(T.renderProgressbar?O=T.renderProgressbar.call(t,T.progressbarFillClass):O=`<span class="${T.progressbarFillClass}"></span>`),t.pagination.bullets=[],V.forEach(N=>{T.type!=="custom"&&Qc(N,O||""),T.type==="bullets"&&t.pagination.bullets.push(...N.querySelectorAll(to(T.bulletClass)))}),T.type!=="custom"&&o("paginationRender",V[0])}function b(){t.params.pagination=Ew(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const T=t.params.pagination;if(!T.el)return;let E;typeof T.el=="string"&&t.isElement&&(E=t.el.querySelector(T.el)),!E&&typeof T.el=="string"&&(E=[...document.querySelectorAll(T.el)]),E||(E=T.el),!(!E||E.length===0)&&(t.params.uniqueNavElements&&typeof T.el=="string"&&Array.isArray(E)&&E.length>1&&(E=[...t.el.querySelectorAll(T.el)],E.length>1&&(E=E.find(V=>Tw(V,".swiper")[0]===t.el))),Array.isArray(E)&&E.length===1&&(E=E[0]),Object.assign(t.pagination,{el:E}),E=mt(E),E.forEach(V=>{T.type==="bullets"&&T.clickable&&V.classList.add(...(T.clickableClass||"").split(" ")),V.classList.add(T.modifierClass+T.type),V.classList.add(t.isHorizontal()?T.horizontalClass:T.verticalClass),T.type==="bullets"&&T.dynamicBullets&&(V.classList.add(`${T.modifierClass}${T.type}-dynamic`),d=0,T.dynamicMainBullets<1&&(T.dynamicMainBullets=1)),T.type==="progressbar"&&T.progressbarOpposite&&V.classList.add(T.progressbarOppositeClass),T.clickable&&V.addEventListener("click",v),t.enabled||V.classList.add(T.lockClass)}))}function j(){const T=t.params.pagination;if(f())return;let E=t.pagination.el;E&&(E=mt(E),E.forEach(V=>{V.classList.remove(T.hiddenClass),V.classList.remove(T.modifierClass+T.type),V.classList.remove(t.isHorizontal()?T.horizontalClass:T.verticalClass),T.clickable&&(V.classList.remove(...(T.clickableClass||"").split(" ")),V.removeEventListener("click",v))})),t.pagination.bullets&&t.pagination.bullets.forEach(V=>V.classList.remove(...T.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const T=t.params.pagination;let{el:E}=t.pagination;E=mt(E),E.forEach(V=>{V.classList.remove(T.horizontalClass,T.verticalClass),V.classList.add(t.isHorizontal()?T.horizontalClass:T.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?M():(b(),w(),y())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),a("snapIndexChange",()=>{y()}),a("snapGridLengthChange",()=>{w(),y()}),a("destroy",()=>{j()}),a("enable disable",()=>{let{el:T}=t.pagination;T&&(T=mt(T),T.forEach(E=>E.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{y()}),a("click",(T,E)=>{const V=E.target,O=mt(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!V.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&V===t.navigation.nextEl||t.navigation.prevEl&&V===t.navigation.prevEl))return;const N=O[0].classList.contains(t.params.pagination.hiddenClass);o(N===!0?"paginationShow":"paginationHide"),O.forEach(H=>H.classList.toggle(t.params.pagination.hiddenClass))}});const L=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:T}=t.pagination;T&&(T=mt(T),T.forEach(E=>E.classList.remove(t.params.pagination.paginationDisabledClass))),b(),w(),y()},M=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:T}=t.pagination;T&&(T=mt(T),T.forEach(E=>E.classList.add(t.params.pagination.paginationDisabledClass))),j()};Object.assign(t.pagination,{enable:L,disable:M,render:w,update:y,init:b,destroy:j})}function ai(e){let{swiper:t,extendParams:n,on:a,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,d,f=l&&l.autoplay?l.autoplay.delay:3e3,h=l&&l.autoplay?l.autoplay.delay:3e3,g,v=new Date().getTime(),y,w,b,j,L,M,T;function E(J){!t||t.destroyed||!t.wrapperEl||J.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",E),!(T||J.detail&&J.detail.bySwiperTouchMove)&&F())}const V=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?y=!0:y&&(h=g,y=!1);const J=t.autoplay.paused?g:v+h-new Date().getTime();t.autoplay.timeLeft=J,o("autoplayTimeLeft",J,J/f),d=requestAnimationFrame(()=>{V()})},O=()=>{let J;return t.virtual&&t.params.virtual.enabled?J=t.slides.find(k=>k.classList.contains("swiper-slide-active")):J=t.slides[t.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},N=J=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(d),V();let te=typeof J>"u"?t.params.autoplay.delay:J;f=t.params.autoplay.delay,h=t.params.autoplay.delay;const k=O();!Number.isNaN(k)&&k>0&&typeof J>"u"&&(te=k,f=k,h=k),g=te;const X=t.params.speed,ae=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{N()})))};return te>0?(clearTimeout(u),u=setTimeout(()=>{ae()},te)):requestAnimationFrame(()=>{ae()}),te},H=()=>{v=new Date().getTime(),t.autoplay.running=!0,N(),o("autoplayStart")},U=()=>{t.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(d),o("autoplayStop")},Y=(J,te)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(u),J||(M=!0);const k=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",E):F()};if(t.autoplay.paused=!0,te){L&&(g=t.params.autoplay.delay),L=!1,k();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-v),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),k())},F=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(v=new Date().getTime(),M?(M=!1,N(g)):N(),t.autoplay.paused=!1,o("autoplayResume"))},K=()=>{if(t.destroyed||!t.autoplay.running)return;const J=qi();J.visibilityState==="hidden"&&(M=!0,Y(!0)),J.visibilityState==="visible"&&F()},ne=J=>{J.pointerType==="mouse"&&(M=!0,T=!0,!(t.animating||t.autoplay.paused)&&Y(!0))},le=J=>{J.pointerType==="mouse"&&(T=!1,t.autoplay.paused&&F())},de=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ne),t.el.addEventListener("pointerleave",le))},oe=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ne),t.el.removeEventListener("pointerleave",le))},$=()=>{qi().addEventListener("visibilitychange",K)},W=()=>{qi().removeEventListener("visibilitychange",K)};a("init",()=>{t.params.autoplay.enabled&&(de(),$(),H())}),a("destroy",()=>{oe(),W(),t.autoplay.running&&U()}),a("_freeModeStaticRelease",()=>{(b||M)&&F()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?U():Y(!0,!0)}),a("beforeTransitionStart",(J,te,k)=>{t.destroyed||!t.autoplay.running||(k||!t.params.autoplay.disableOnInteraction?Y(!0,!0):U())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){U();return}w=!0,b=!1,M=!1,j=setTimeout(()=>{M=!0,b=!0,Y(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!w)){if(clearTimeout(j),clearTimeout(u),t.params.autoplay.disableOnInteraction){b=!1,w=!1;return}b&&t.params.cssMode&&F(),b=!1,w=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(L=!0)}),Object.assign(t.autoplay,{start:H,stop:U,pause:Y,resume:F})}let R0;function uL(){const e=Dt(),t=qi();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function jw(){return R0||(R0=uL()),R0}let L0;function dL(e){let{userAgent:t}=e===void 0?{}:e;const n=jw(),a=Dt(),o=a.navigator.platform,l=t||a.navigator.userAgent,u={ios:!1,android:!1},d=a.screen.width,f=a.screen.height,h=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const v=l.match(/(iPod)(.*OS\s([\d_]+))?/),y=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),w=o==="Win32";let b=o==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&b&&n.touch&&j.indexOf(`${d}x${f}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),b=!1),h&&!w&&(u.os="android",u.android=!0),(g||y||v)&&(u.os="ios",u.ios=!0),u}function Aw(e){return e===void 0&&(e={}),L0||(L0=dL(e)),L0}let k0;function fL(){const e=Dt(),t=Aw();let n=!1;function a(){const d=e.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(a()){const d=String(e.navigator.userAgent);if(d.includes("Version/")){const[f,h]=d.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));n=f<16||f===16&&h<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=a(),u=l||o&&t.ios;return{isSafari:n||l,needPerspectiveFix:n,need3dFix:u,isWebView:o}}function Mw(){return k0||(k0=fL()),k0}function pL(e){let{swiper:t,on:n,emit:a}=e;const o=Dt();let l=null,u=null;const d=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},f=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(v=>{u=o.requestAnimationFrame(()=>{const{width:y,height:w}=t;let b=y,j=w;v.forEach(L=>{let{contentBoxSize:M,contentRect:T,target:E}=L;E&&E!==t.el||(b=T?T.width:(M[0]||M).inlineSize,j=T?T.height:(M[0]||M).blockSize)}),(b!==y||j!==w)&&d()})}),l.observe(t.el))},h=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){f();return}o.addEventListener("resize",d),o.addEventListener("orientationchange",g)}),n("destroy",()=>{h(),o.removeEventListener("resize",d),o.removeEventListener("orientationchange",g)})}function hL(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l=[],u=Dt(),d=function(g,v){v===void 0&&(v={});const y=u.MutationObserver||u.WebkitMutationObserver,w=new y(b=>{if(t.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const j=function(){o("observerUpdate",b[0])};u.requestAnimationFrame?u.requestAnimationFrame(j):u.setTimeout(j,0)});w.observe(g,{attributes:typeof v.attributes>"u"?!0:v.attributes,childList:t.isElement||(typeof v.childList>"u"?!0:v).childList,characterData:typeof v.characterData>"u"?!0:v.characterData}),l.push(w)},f=()=>{if(t.params.observer){if(t.params.observeParents){const g=Tw(t.hostEl);for(let v=0;v<g.length;v+=1)d(g[v])}d(t.hostEl,{childList:t.params.observeSlideChildren}),d(t.wrapperEl,{attributes:!1})}},h=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",f),a("destroy",h)}var mL={on(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=n?"unshift":"push";return e.split(" ").forEach(l=>{a.eventsListeners[l]||(a.eventsListeners[l]=[]),a.eventsListeners[l][o](t)}),a},once(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),d=0;d<l;d++)u[d]=arguments[d];t.apply(a,u)}return o.__emitterProxy=t,a.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const a=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[a](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?n.eventsListeners[a]=[]:n.eventsListeners[a]&&n.eventsListeners[a].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[a].splice(l,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,a;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],n=l.slice(1,l.length),a=e):(t=l[0].events,n=l[0].data,a=l[0].context||e),n.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(f=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(h=>{h.apply(a,[f,...n])}),e.eventsListeners&&e.eventsListeners[f]&&e.eventsListeners[f].forEach(h=>{h.apply(a,n)})}),e}};function gL(){const e=this;let t,n;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=a.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(qn(a,"padding-left")||0,10)-parseInt(qn(a,"padding-right")||0,10),n=n-parseInt(qn(a,"padding-top")||0,10)-parseInt(qn(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function xL(){const e=this;function t(F,K){return parseFloat(F.getPropertyValue(e.getDirectionLabel(K))||0)}const n=e.params,{wrapperEl:a,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:d}=e,f=e.virtual&&n.virtual.enabled,h=f?e.virtual.slides.length:e.slides.length,g=Bi(o,`.${e.params.slideClass}, swiper-slide`),v=f?e.virtual.slides.length:g.length;let y=[];const w=[],b=[];let j=n.slidesOffsetBefore;typeof j=="function"&&(j=n.slidesOffsetBefore.call(e));let L=n.slidesOffsetAfter;typeof L=="function"&&(L=n.slidesOffsetAfter.call(e));const M=e.snapGrid.length,T=e.slidesGrid.length;let E=n.spaceBetween,V=-j,O=0,N=0;if(typeof l>"u")return;typeof E=="string"&&E.indexOf("%")>=0?E=parseFloat(E.replace("%",""))/100*l:typeof E=="string"&&(E=parseFloat(E)),e.virtualSize=-E,g.forEach(F=>{u?F.style.marginLeft="":F.style.marginRight="",F.style.marginBottom="",F.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(cc(a,"--swiper-centered-offset-before",""),cc(a,"--swiper-centered-offset-after",""));const H=n.grid&&n.grid.rows>1&&e.grid;H?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let U;const Y=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(F=>typeof n.breakpoints[F].slidesPerView<"u").length>0;for(let F=0;F<v;F+=1){U=0;let K;if(g[F]&&(K=g[F]),H&&e.grid.updateSlide(F,K,g),!(g[F]&&qn(K,"display")==="none")){if(n.slidesPerView==="auto"){Y&&(g[F].style[e.getDirectionLabel("width")]="");const ne=getComputedStyle(K),le=K.style.transform,de=K.style.webkitTransform;if(le&&(K.style.transform="none"),de&&(K.style.webkitTransform="none"),n.roundLengths)U=e.isHorizontal()?Zp(K,"width"):Zp(K,"height");else{const oe=t(ne,"width"),$=t(ne,"padding-left"),W=t(ne,"padding-right"),J=t(ne,"margin-left"),te=t(ne,"margin-right"),k=ne.getPropertyValue("box-sizing");if(k&&k==="border-box")U=oe+J+te;else{const{clientWidth:X,offsetWidth:ae}=K;U=oe+$+W+J+te+(ae-X)}}le&&(K.style.transform=le),de&&(K.style.webkitTransform=de),n.roundLengths&&(U=Math.floor(U))}else U=(l-(n.slidesPerView-1)*E)/n.slidesPerView,n.roundLengths&&(U=Math.floor(U)),g[F]&&(g[F].style[e.getDirectionLabel("width")]=`${U}px`);g[F]&&(g[F].swiperSlideSize=U),b.push(U),n.centeredSlides?(V=V+U/2+O/2+E,O===0&&F!==0&&(V=V-l/2-E),F===0&&(V=V-l/2-E),Math.abs(V)<1/1e3&&(V=0),n.roundLengths&&(V=Math.floor(V)),N%n.slidesPerGroup===0&&y.push(V),w.push(V)):(n.roundLengths&&(V=Math.floor(V)),(N-Math.min(e.params.slidesPerGroupSkip,N))%e.params.slidesPerGroup===0&&y.push(V),w.push(V),V=V+U+E),e.virtualSize+=U+E,O=U,N+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+L,u&&d&&(n.effect==="slide"||n.effect==="coverflow")&&(a.style.width=`${e.virtualSize+E}px`),n.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+E}px`),H&&e.grid.updateWrapperSize(U,y),!n.centeredSlides){const F=[];for(let K=0;K<y.length;K+=1){let ne=y[K];n.roundLengths&&(ne=Math.floor(ne)),y[K]<=e.virtualSize-l&&F.push(ne)}y=F,Math.floor(e.virtualSize-l)-Math.floor(y[y.length-1])>1&&y.push(e.virtualSize-l)}if(f&&n.loop){const F=b[0]+E;if(n.slidesPerGroup>1){const K=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),ne=F*n.slidesPerGroup;for(let le=0;le<K;le+=1)y.push(y[y.length-1]+ne)}for(let K=0;K<e.virtual.slidesBefore+e.virtual.slidesAfter;K+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+F),w.push(w[w.length-1]+F),e.virtualSize+=F}if(y.length===0&&(y=[0]),E!==0){const F=e.isHorizontal()&&u?"marginLeft":e.getDirectionLabel("marginRight");g.filter((K,ne)=>!n.cssMode||n.loop?!0:ne!==g.length-1).forEach(K=>{K.style[F]=`${E}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let F=0;b.forEach(ne=>{F+=ne+(E||0)}),F-=E;const K=F>l?F-l:0;y=y.map(ne=>ne<=0?-j:ne>K?K+L:ne)}if(n.centerInsufficientSlides){let F=0;b.forEach(ne=>{F+=ne+(E||0)}),F-=E;const K=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(F+K<l){const ne=(l-F-K)/2;y.forEach((le,de)=>{y[de]=le-ne}),w.forEach((le,de)=>{w[de]=le+ne})}}if(Object.assign(e,{slides:g,snapGrid:y,slidesGrid:w,slidesSizesGrid:b}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){cc(a,"--swiper-centered-offset-before",`${-y[0]}px`),cc(a,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);const F=-e.snapGrid[0],K=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ne=>ne+F),e.slidesGrid=e.slidesGrid.map(ne=>ne+K)}if(v!==h&&e.emit("slidesLengthChange"),y.length!==M&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),w.length!==T&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!f&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const F=`${n.containerModifierClass}backface-hidden`,K=e.el.classList.contains(F);v<=n.maxBackfaceHiddenSlides?K||e.el.classList.add(F):K&&e.el.classList.remove(F)}}function vL(e){const t=this,n=[],a=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=d=>a?t.slides[t.getSlideIndexByData(d)]:t.slides[d];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(d=>{n.push(d)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const d=t.activeIndex+l;if(d>t.slides.length&&!a)break;n.push(u(d))}else n.push(u(t.activeIndex));for(l=0;l<n.length;l+=1)if(typeof n[l]<"u"){const d=n[l].offsetHeight;o=d>o?d:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function yL(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-n-e.cssOverflowAdjustment()}const iy=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function wL(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:a,rtlTranslate:o,snapGrid:l}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let d=n.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*t.size:typeof d=="string"&&(d=parseFloat(d));for(let f=0;f<a.length;f+=1){const h=a[f];let g=h.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(g-=a[0].swiperSlideOffset);const v=(u+(n.centeredSlides?t.minTranslate():0)-g)/(h.swiperSlideSize+d),y=(u-l[0]+(n.centeredSlides?t.minTranslate():0)-g)/(h.swiperSlideSize+d),w=-(u-g),b=w+t.slidesSizesGrid[f],j=w>=0&&w<=t.size-t.slidesSizesGrid[f],L=w>=0&&w<t.size-1||b>1&&b<=t.size||w<=0&&b>=t.size;L&&(t.visibleSlides.push(h),t.visibleSlidesIndexes.push(f)),iy(h,L,n.slideVisibleClass),iy(h,j,n.slideFullyVisibleClass),h.progress=o?-v:v,h.originalProgress=o?-y:y}}function bL(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const n=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:d}=t;const f=l,h=u;if(a===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/a;const g=Math.abs(e-t.minTranslate())<1,v=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=v||o>=1,g&&(o=0),v&&(o=1)}if(n.loop){const g=t.getSlideIndexByData(0),v=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],w=t.slidesGrid[v],b=t.slidesGrid[t.slidesGrid.length-1],j=Math.abs(e);j>=y?d=(j-y)/b:d=(j+b-w)/b,d>1&&(d-=1)}Object.assign(t,{progress:o,progressLoop:d,isBeginning:l,isEnd:u}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),l&&!f&&t.emit("reachBeginning toEdge"),u&&!h&&t.emit("reachEnd toEdge"),(f&&!l||h&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const V0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function SL(){const e=this,{slides:t,params:n,slidesEl:a,activeIndex:o}=e,l=e.virtual&&n.virtual.enabled,u=e.grid&&n.grid&&n.grid.rows>1,d=v=>Bi(a,`.${n.slideClass}${v}, swiper-slide${v}`)[0];let f,h,g;if(l)if(n.loop){let v=o-e.virtual.slidesBefore;v<0&&(v=e.virtual.slides.length+v),v>=e.virtual.slides.length&&(v-=e.virtual.slides.length),f=d(`[data-swiper-slide-index="${v}"]`)}else f=d(`[data-swiper-slide-index="${o}"]`);else u?(f=t.find(v=>v.column===o),g=t.find(v=>v.column===o+1),h=t.find(v=>v.column===o-1)):f=t[o];f&&(u||(g=lL(f,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!g&&(g=t[0]),h=oL(f,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!h===0&&(h=t[t.length-1]))),t.forEach(v=>{V0(v,v===f,n.slideActiveClass),V0(v,v===g,n.slideNextClass),V0(v,v===h,n.slidePrevClass)}),e.emitSlidesClasses()}const Dc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(n());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},D0=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Wp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,d=[u-t];d.push(...Array.from({length:t}).map((f,h)=>u+a+h)),e.slides.forEach((f,h)=>{d.includes(f.column)&&D0(e,h)});return}const l=o+a-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const d=(u%n+n)%n;(d<o||d>l)&&D0(e,d)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,n-1);u+=1)u!==o&&(u>l||u<o)&&D0(e,u)};function CL(e){const{slidesGrid:t,params:n}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?a>=t[l]&&a<t[l+1]-(t[l+1]-t[l])/2?o=l:a>=t[l]&&a<t[l+1]&&(o=l+1):a>=t[l]&&(o=l);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function TL(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:l,realIndex:u,snapIndex:d}=t;let f=e,h;const g=w=>{let b=w-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof f>"u"&&(f=CL(t)),a.indexOf(n)>=0)h=a.indexOf(n);else{const w=Math.min(o.slidesPerGroupSkip,f);h=w+Math.floor((f-w)/o.slidesPerGroup)}if(h>=a.length&&(h=a.length-1),f===l&&!t.params.loop){h!==d&&(t.snapIndex=h,t.emit("snapIndexChange"));return}if(f===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(f);return}const v=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled&&o.loop)y=g(f);else if(v){const w=t.slides.find(j=>j.column===f);let b=parseInt(w.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(w),0)),y=Math.floor(b/o.grid.rows)}else if(t.slides[f]){const w=t.slides[f].getAttribute("data-swiper-slide-index");w?y=parseInt(w,10):y=f}else y=f;Object.assign(t,{previousSnapIndex:d,snapIndex:h,previousRealIndex:u,realIndex:y,previousIndex:l,activeIndex:f}),t.initialized&&Wp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function EL(e,t){const n=this,a=n.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(d=>{!o&&d.matches&&d.matches(`.${a.slideClass}, swiper-slide`)&&(o=d)});let l=!1,u;if(o){for(let d=0;d<n.slides.length;d+=1)if(n.slides[d]===o){l=!0,u=d;break}}if(o&&l)n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=u;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}a.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var jL={updateSize:gL,updateSlides:xL,updateAutoHeight:vL,updateSlidesOffset:yL,updateSlidesProgress:wL,updateProgress:bL,updateSlidesClasses:SL,updateActiveIndex:TL,updateClickedSlide:EL};function AL(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:a,translate:o,wrapperEl:l}=t;if(n.virtualTranslate)return a?-o:o;if(n.cssMode)return o;let u=nL(l,e);return u+=t.cssOverflowAdjustment(),a&&(u=-u),u||0}function ML(e,t){const n=this,{rtlTranslate:a,params:o,wrapperEl:l,progress:u}=n;let d=0,f=0;const h=0;n.isHorizontal()?d=a?-e:e:f=e,o.roundLengths&&(d=Math.floor(d),f=Math.floor(f)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?d:f,o.cssMode?l[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-d:-f:o.virtualTranslate||(n.isHorizontal()?d-=n.cssOverflowAdjustment():f-=n.cssOverflowAdjustment(),l.style.transform=`translate3d(${d}px, ${f}px, ${h}px)`);let g;const v=n.maxTranslate()-n.minTranslate();v===0?g=0:g=(e-n.minTranslate())/v,g!==u&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function OL(){return-this.snapGrid[0]}function RL(){return-this.snapGrid[this.snapGrid.length-1]}function LL(e,t,n,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),a===void 0&&(a=!0);const l=this,{params:u,wrapperEl:d}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),h=l.maxTranslate();let g;if(a&&e>f?g=f:a&&e<h?g=h:g=e,l.updateProgress(g),u.cssMode){const v=l.isHorizontal();if(t===0)d[v?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return Cw({swiper:l,targetPosition:-g,side:v?"left":"top"}),!0;d.scrollTo({[v?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,n&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var kL={getTranslate:AL,setTranslate:ML,minTranslate:OL,maxTranslate:RL,translateTo:LL};function VL(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Ow(e){let{swiper:t,runCallbacks:n,direction:a,step:o}=e;const{activeIndex:l,previousIndex:u}=t;let d=a;d||(l>u?d="next":l<u?d="prev":d="reset"),t.emit(`transition${o}`),n&&d==="reset"?t.emit(`slideResetTransition${o}`):n&&l!==u&&(t.emit(`slideChangeTransition${o}`),d==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function DL(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;a.cssMode||(a.autoHeight&&n.updateAutoHeight(),Ow({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function zL(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;n.animating=!1,!a.cssMode&&(n.setTransition(0),Ow({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var HL={setTransition:VL,transitionStart:DL,transitionEnd:zL};function PL(e,t,n,a,o){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:d,snapGrid:f,slidesGrid:h,previousIndex:g,activeIndex:v,rtlTranslate:y,wrapperEl:w,enabled:b}=l;if(!b&&!a&&!o||l.destroyed||l.animating&&d.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const j=Math.min(l.params.slidesPerGroupSkip,u);let L=j+Math.floor((u-j)/l.params.slidesPerGroup);L>=f.length&&(L=f.length-1);const M=-f[L];if(d.normalizeSlideIndex)for(let H=0;H<h.length;H+=1){const U=-Math.floor(M*100),Y=Math.floor(h[H]*100),F=Math.floor(h[H+1]*100);typeof h[H+1]<"u"?U>=Y&&U<F-(F-Y)/2?u=H:U>=Y&&U<F&&(u=H+1):U>=Y&&(u=H)}if(l.initialized&&u!==v&&(!l.allowSlideNext&&(y?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(v||0)!==u))return!1;u!==(g||0)&&n&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let T;u>v?T="next":u<v?T="prev":T="reset";const E=l.virtual&&l.params.virtual.enabled;if(!(E&&o)&&(y&&-M===l.translate||!y&&M===l.translate))return l.updateActiveIndex(u),d.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),d.effect!=="slide"&&l.setTranslate(M),T!=="reset"&&(l.transitionStart(n,T),l.transitionEnd(n,T)),!1;if(d.cssMode){const H=l.isHorizontal(),U=y?M:-M;if(t===0)E&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),E&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{w[H?"scrollLeft":"scrollTop"]=U})):w[H?"scrollLeft":"scrollTop"]=U,E&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return Cw({swiper:l,targetPosition:U,side:H?"left":"top"}),!0;w.scrollTo({[H?"left":"top"]:U,behavior:"smooth"})}return!0}const N=Mw().isSafari;return E&&!o&&N&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,a),l.transitionStart(n,T),t===0?l.transitionEnd(n,T):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(U){!l||l.destroyed||U.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(n,T))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function NL(e,t,n,a){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let d;if(l){const y=u*o.params.grid.rows;d=o.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else d=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:h}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),h&&g%2===0&&(g=g+1));let v=f-d<g;if(h&&(v=v||d<Math.ceil(g/2)),a&&h&&o.params.slidesPerView!=="auto"&&!l&&(v=!1),v){const y=h?d<o.activeIndex?"prev":"next":d-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?d+1:d-f+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(l){const y=u*o.params.grid.rows;u=o.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,n,a)}),o}function BL(e,t,n){t===void 0&&(t=!0);const a=this,{enabled:o,params:l,animating:u}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let d=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(d=Math.max(a.slidesPerViewDynamic("current",!0),1));const f=a.activeIndex<l.slidesPerGroupSkip?1:d,h=a.virtual&&l.virtual.enabled;if(l.loop){if(u&&!h&&l.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+f,e,t,n)}),!0}return l.rewind&&a.isEnd?a.slideTo(0,e,t,n):a.slideTo(a.activeIndex+f,e,t,n)}function $L(e,t,n){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:d,enabled:f,animating:h}=a;if(!f||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const g=a.virtual&&o.virtual.enabled;if(o.loop){if(h&&!g&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const v=d?a.translate:-a.translate;function y(T){return T<0?-Math.floor(Math.abs(T)):Math.floor(T)}const w=y(v),b=l.map(T=>y(T)),j=o.freeMode&&o.freeMode.enabled;let L=l[b.indexOf(w)-1];if(typeof L>"u"&&(o.cssMode||j)){let T;l.forEach((E,V)=>{w>=E&&(T=V)}),typeof T<"u"&&(L=j?l[T]:l[T>0?T-1:T])}let M=0;if(typeof L<"u"&&(M=u.indexOf(L),M<0&&(M=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-a.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&a.isBeginning){const T=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(T,e,t,n)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(M,e,t,n)}),!0;return a.slideTo(M,e,t,n)}function IL(e,t,n){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,n)}function UL(e,t,n,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),d=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[d]){const h=o.snapGrid[d],g=o.snapGrid[d+1];f-h>(g-h)*a&&(l+=o.params.slidesPerGroup)}else{const h=o.snapGrid[d-1],g=o.snapGrid[d];f-h<=(g-h)*a&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,n)}function _L(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,d=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(d?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Bi(n,`${u}[data-swiper-slide-index="${l}"]`)[0]),Sw(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var GL={slideTo:PL,slideToLoop:NL,slideNext:BL,slidePrev:$L,slideReset:IL,slideToClosest:UL,slideToClickedSlide:_L};function qL(e,t){const n=this,{params:a,slidesEl:o}=n;if(!a.loop||n.virtual&&n.params.virtual.enabled)return;const l=()=>{Bi(o,`.${a.slideClass}, swiper-slide`).forEach((w,b)=>{w.setAttribute("data-swiper-slide-index",b)})},u=()=>{const y=Bi(o,`.${a.slideBlankClass}`);y.forEach(w=>{w.remove()}),y.length>0&&(n.recalcSlides(),n.updateSlides())},d=n.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||d)&&u();const f=a.slidesPerGroup*(d?a.grid.rows:1),h=n.slides.length%f!==0,g=d&&n.slides.length%a.grid.rows!==0,v=y=>{for(let w=0;w<y;w+=1){const b=n.isElement?Wc("swiper-slide",[a.slideBlankClass]):Wc("div",[a.slideClass,a.slideBlankClass]);n.slidesEl.append(b)}};if(h){if(a.loopAddBlankSlides){const y=f-n.slides.length%f;v(y),n.recalcSlides(),n.updateSlides()}else Zc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(a.loopAddBlankSlides){const y=a.grid.rows-n.slides.length%a.grid.rows;v(y),n.recalcSlides(),n.updateSlides()}else Zc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();n.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function YL(e){let{slideRealIndex:t,slideTo:n=!0,direction:a,setTranslate:o,activeSlideIndex:l,initial:u,byController:d,byMousewheel:f}=e===void 0?{}:e;const h=this;if(!h.params.loop)return;h.emit("beforeLoopFix");const{slides:g,allowSlidePrev:v,allowSlideNext:y,slidesEl:w,params:b}=h,{centeredSlides:j,initialSlide:L}=b;if(h.allowSlidePrev=!0,h.allowSlideNext=!0,h.virtual&&b.virtual.enabled){n&&(!b.centeredSlides&&h.snapIndex===0?h.slideTo(h.virtual.slides.length,0,!1,!0):b.centeredSlides&&h.snapIndex<b.slidesPerView?h.slideTo(h.virtual.slides.length+h.snapIndex,0,!1,!0):h.snapIndex===h.snapGrid.length-1&&h.slideTo(h.virtual.slidesBefore,0,!1,!0)),h.allowSlidePrev=v,h.allowSlideNext=y,h.emit("loopFix");return}let M=b.slidesPerView;M==="auto"?M=h.slidesPerViewDynamic():(M=Math.ceil(parseFloat(b.slidesPerView,10)),j&&M%2===0&&(M=M+1));const T=b.slidesPerGroupAuto?M:b.slidesPerGroup;let E=j?Math.max(T,Math.ceil(M/2)):T;E%T!==0&&(E+=T-E%T),E+=b.loopAdditionalSlides,h.loopedSlides=E;const V=h.grid&&b.grid&&b.grid.rows>1;g.length<M+E||h.params.effect==="cards"&&g.length<M+E*2?Zc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):V&&b.grid.fill==="row"&&Zc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const O=[],N=[],H=V?Math.ceil(g.length/b.grid.rows):g.length,U=u&&H-L<M&&!j;let Y=U?L:h.activeIndex;typeof l>"u"?l=h.getSlideIndex(g.find($=>$.classList.contains(b.slideActiveClass))):Y=l;const F=a==="next"||!a,K=a==="prev"||!a;let ne=0,le=0;const oe=(V?g[l].column:l)+(j&&typeof o>"u"?-M/2+.5:0);if(oe<E){ne=Math.max(E-oe,T);for(let $=0;$<E-oe;$+=1){const W=$-Math.floor($/H)*H;if(V){const J=H-W-1;for(let te=g.length-1;te>=0;te-=1)g[te].column===J&&O.push(te)}else O.push(H-W-1)}}else if(oe+M>H-E){le=Math.max(oe-(H-E*2),T),U&&(le=Math.max(le,M-H+L+1));for(let $=0;$<le;$+=1){const W=$-Math.floor($/H)*H;V?g.forEach((J,te)=>{J.column===W&&N.push(te)}):N.push(W)}}if(h.__preventObserver__=!0,requestAnimationFrame(()=>{h.__preventObserver__=!1}),h.params.effect==="cards"&&g.length<M+E*2&&(N.includes(l)&&N.splice(N.indexOf(l),1),O.includes(l)&&O.splice(O.indexOf(l),1)),K&&O.forEach($=>{g[$].swiperLoopMoveDOM=!0,w.prepend(g[$]),g[$].swiperLoopMoveDOM=!1}),F&&N.forEach($=>{g[$].swiperLoopMoveDOM=!0,w.append(g[$]),g[$].swiperLoopMoveDOM=!1}),h.recalcSlides(),b.slidesPerView==="auto"?h.updateSlides():V&&(O.length>0&&K||N.length>0&&F)&&h.slides.forEach(($,W)=>{h.grid.updateSlide(W,$,h.slides)}),b.watchSlidesProgress&&h.updateSlidesOffset(),n){if(O.length>0&&K){if(typeof t>"u"){const $=h.slidesGrid[Y],J=h.slidesGrid[Y+ne]-$;f?h.setTranslate(h.translate-J):(h.slideTo(Y+Math.ceil(ne),0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-J,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-J))}else if(o){const $=V?O.length/b.grid.rows:O.length;h.slideTo(h.activeIndex+$,0,!1,!0),h.touchEventsData.currentTranslate=h.translate}}else if(N.length>0&&F)if(typeof t>"u"){const $=h.slidesGrid[Y],J=h.slidesGrid[Y-le]-$;f?h.setTranslate(h.translate-J):(h.slideTo(Y-le,0,!1,!0),o&&(h.touchEventsData.startTranslate=h.touchEventsData.startTranslate-J,h.touchEventsData.currentTranslate=h.touchEventsData.currentTranslate-J))}else{const $=V?N.length/b.grid.rows:N.length;h.slideTo(h.activeIndex-$,0,!1,!0)}}if(h.allowSlidePrev=v,h.allowSlideNext=y,h.controller&&h.controller.control&&!d){const $={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(h.controller.control)?h.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...$,slideTo:W.params.slidesPerView===b.slidesPerView?n:!1})}):h.controller.control instanceof h.constructor&&h.controller.control.params.loop&&h.controller.control.loopFix({...$,slideTo:h.controller.control.params.slidesPerView===b.slidesPerView?n:!1})}h.emit("loopFix")}function FL(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var XL={loopCreate:qL,loopFix:YL,loopDestroy:FL};function ZL(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function WL(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var KL={setGrabCursor:ZL,unsetGrabCursor:WL};function QL(e,t){t===void 0&&(t=this);function n(a){if(!a||a===qi()||a===Dt())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||n(a.getRootNode().host)}return n(t)}function ny(e,t,n){const a=Dt(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(n<=u||n>=a.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function JL(e){const t=this,n=qi();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){ny(t,a,a.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:d}=t;if(!d||!l.simulateTouch&&a.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let f=a.target;if(l.touchEventsTarget==="wrapper"&&!sL(f,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const h=!!l.noSwipingClass&&l.noSwipingClass!=="",g=a.composedPath?a.composedPath():a.path;h&&a.target&&a.target.shadowRoot&&g&&(f=g[0]);const v=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(a.target&&a.target.shadowRoot);if(l.noSwiping&&(y?QL(v,f):f.closest(v))){t.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=a.pageX,u.currentY=a.pageY;const w=u.currentX,b=u.currentY;if(!ny(t,a,w))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=w,u.startY=b,o.touchStartTime=Xc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let j=!0;f.matches(o.focusableElements)&&(j=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==f&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&n.activeElement.blur();const L=j&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||L)&&!f.isContentEditable&&a.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function ek(e){const t=qi(),n=this,a=n.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:d}=n;if(!d||!o.simulateTouch&&e.pointerType==="mouse")return;let f=e;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(a.touchId!==null||f.pointerId!==a.pointerId))return;let h;if(f.type==="touchmove"){if(h=[...f.changedTouches].find(O=>O.identifier===a.touchId),!h||h.identifier!==a.touchId)return}else h=f;if(!a.isTouched){a.startMoving&&a.isScrolling&&n.emit("touchMoveOpposite",f);return}const g=h.pageX,v=h.pageY;if(f.preventedByNestedSwiper){l.startX=g,l.startY=v;return}if(!n.allowTouchMove){f.target.matches(a.focusableElements)||(n.allowClick=!1),a.isTouched&&(Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v}),a.touchStartTime=Xc());return}if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(v<l.startY&&n.translate<=n.maxTranslate()||v>l.startY&&n.translate>=n.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(u&&(g>l.startX&&-n.translate<=n.maxTranslate()||g<l.startX&&-n.translate>=n.minTranslate()))return;if(!u&&(g<l.startX&&n.translate<=n.maxTranslate()||g>l.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==f.target&&f.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&f.target===t.activeElement&&f.target.matches(a.focusableElements)){a.isMoved=!0,n.allowClick=!1;return}a.allowTouchCallbacks&&n.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=v;const y=l.currentX-l.startX,w=l.currentY-l.startY;if(n.params.threshold&&Math.sqrt(y**2+w**2)<n.params.threshold)return;if(typeof a.isScrolling>"u"){let O;n.isHorizontal()&&l.currentY===l.startY||n.isVertical()&&l.currentX===l.startX?a.isScrolling=!1:y*y+w*w>=25&&(O=Math.atan2(Math.abs(w),Math.abs(y))*180/Math.PI,a.isScrolling=n.isHorizontal()?O>o.touchAngle:90-O>o.touchAngle)}if(a.isScrolling&&n.emit("touchMoveOpposite",f),typeof a.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(a.startMoving=!0),a.isScrolling||f.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;n.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let b=n.isHorizontal()?y:w,j=n.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(u?1:-1),j=Math.abs(j)*(u?1:-1)),l.diff=b,b*=o.touchRatio,u&&(b=-b,j=-j);const L=n.touchesDirection;n.swipeDirection=b>0?"prev":"next",n.touchesDirection=j>0?"prev":"next";const M=n.params.loop&&!o.cssMode,T=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!a.isMoved){if(M&&T&&n.loopFix({direction:n.swipeDirection}),a.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const O=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(O)}a.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&L!==n.touchesDirection&&M&&T&&Math.abs(b)>=1){Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}n.emit("sliderMove",f),a.isMoved=!0,a.currentTranslate=b+a.startTranslate;let E=!0,V=o.resistanceRatio;if(o.touchReleaseOnEdges&&(V=0),b>0?(M&&T&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>n.minTranslate()&&(E=!1,o.resistance&&(a.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+a.startTranslate+b)**V))):b<0&&(M&&T&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<n.maxTranslate()&&(E=!1,o.resistance&&(a.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-a.startTranslate-b)**V))),E&&(f.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,a.currentTranslate=a.startTranslate,l.diff=n.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(a.currentTranslate),n.setTranslate(a.currentTranslate))}function tk(e){const t=this,n=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(O=>O.identifier===n.touchId),!o||o.identifier!==n.touchId)return}else{if(n.touchId!==null||a.pointerId!==n.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:u,touches:d,rtlTranslate:f,slidesGrid:h,enabled:g}=t;if(!g||!u.simulateTouch&&a.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",a),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&u.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}u.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const v=Xc(),y=v-n.touchStartTime;if(t.allowClick){const O=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(O&&O[0]||a.target,O),t.emit("tap click",a),y<300&&v-n.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(n.lastClickTime=Xc(),Sw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||d.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let w;if(u.followFinger?w=f?t.translate:-t.translate:w=-n.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:w});return}const b=w>=-t.maxTranslate()&&!t.params.loop;let j=0,L=t.slidesSizesGrid[0];for(let O=0;O<h.length;O+=O<u.slidesPerGroupSkip?1:u.slidesPerGroup){const N=O<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof h[O+N]<"u"?(b||w>=h[O]&&w<h[O+N])&&(j=O,L=h[O+N]-h[O]):(b||w>=h[O])&&(j=O,L=h[h.length-1]-h[h.length-2])}let M=null,T=null;u.rewind&&(t.isBeginning?T=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const E=(w-h[j])/L,V=j<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(y>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(E>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?M:j+V):t.slideTo(j)),t.swipeDirection==="prev"&&(E>1-u.longSwipesRatio?t.slideTo(j+V):T!==null&&E<0&&Math.abs(E)>u.longSwipesRatio?t.slideTo(T):t.slideTo(j))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(j+V):t.slideTo(j):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:j+V),t.swipeDirection==="prev"&&t.slideTo(T!==null?T:j))}}function ay(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const d=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!d?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function ik(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function nk(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ak(e){const t=this;Dc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function rk(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Rw=(e,t)=>{const n=qi(),{params:a,el:o,wrapperEl:l,device:u}=e,d=!!a.nested,f=t==="on"?"addEventListener":"removeEventListener",h=t;!o||typeof o=="string"||(n[f]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:d}),o[f]("touchstart",e.onTouchStart,{passive:!1}),o[f]("pointerdown",e.onTouchStart,{passive:!1}),n[f]("touchmove",e.onTouchMove,{passive:!1,capture:d}),n[f]("pointermove",e.onTouchMove,{passive:!1,capture:d}),n[f]("touchend",e.onTouchEnd,{passive:!0}),n[f]("pointerup",e.onTouchEnd,{passive:!0}),n[f]("pointercancel",e.onTouchEnd,{passive:!0}),n[f]("touchcancel",e.onTouchEnd,{passive:!0}),n[f]("pointerout",e.onTouchEnd,{passive:!0}),n[f]("pointerleave",e.onTouchEnd,{passive:!0}),n[f]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[f]("click",e.onClick,!0),a.cssMode&&l[f]("scroll",e.onScroll),a.updateOnWindowResize?e[h](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",ay,!0):e[h]("observerUpdate",ay,!0),o[f]("load",e.onLoad,{capture:!0}))};function sk(){const e=this,{params:t}=e;e.onTouchStart=JL.bind(e),e.onTouchMove=ek.bind(e),e.onTouchEnd=tk.bind(e),e.onDocumentTouchStart=rk.bind(e),t.cssMode&&(e.onScroll=nk.bind(e)),e.onClick=ik.bind(e),e.onLoad=ak.bind(e),Rw(e,"on")}function ok(){Rw(this,"off")}var lk={attachEvents:sk,detachEvents:ok};const ry=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ck(){const e=this,{realIndex:t,initialized:n,params:a,el:o}=e,l=a.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=qi(),d=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",f=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:u.querySelector(a.breakpointsBase),h=e.getBreakpoint(l,d,f);if(!h||e.currentBreakpoint===h)return;const v=(h in l?l[h]:void 0)||e.originalParams,y=ry(e,a),w=ry(e,v),b=e.params.grabCursor,j=v.grabCursor,L=a.enabled;y&&!w?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&w&&(o.classList.add(`${a.containerModifierClass}grid`),(v.grid.fill&&v.grid.fill==="column"||!v.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!j?e.unsetGrabCursor():!b&&j&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(N=>{if(typeof v[N]>"u")return;const H=a[N]&&a[N].enabled,U=v[N]&&v[N].enabled;H&&!U&&e[N].disable(),!H&&U&&e[N].enable()});const M=v.direction&&v.direction!==a.direction,T=a.loop&&(v.slidesPerView!==a.slidesPerView||M),E=a.loop;M&&n&&e.changeDirection(),ii(e.params,v);const V=e.params.enabled,O=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),L&&!V?e.disable():!L&&V&&e.enable(),e.currentBreakpoint=h,e.emit("_beforeBreakpoint",v),n&&(T?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!E&&O?(e.loopCreate(t),e.updateSlides()):E&&!O&&e.loopDestroy()),e.emit("breakpoint",v)}function uk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let a=!1;const o=Dt(),l=t==="window"?o.innerHeight:n.clientHeight,u=Object.keys(e).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const f=parseFloat(d.substr(1));return{value:l*f,point:d}}return{value:d,point:d}});u.sort((d,f)=>parseInt(d.value,10)-parseInt(f.value,10));for(let d=0;d<u.length;d+=1){const{point:f,value:h}=u[d];t==="window"?o.matchMedia(`(min-width: ${h}px)`).matches&&(a=f):h<=n.clientWidth&&(a=f)}return a||"max"}var dk={setBreakpoint:ck,getBreakpoint:uk};function fk(e,t){const n=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&n.push(t+o)}):typeof a=="string"&&n.push(t+a)}),n}function pk(){const e=this,{classNames:t,params:n,rtl:a,el:o,device:l}=e,u=fk(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:a},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function hk(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var mk={addClasses:pk,removeClasses:hk};function gk(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:a}=n;if(a){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var xk={checkOverflow:gk},Kp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function vk(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],l=a[o];if(typeof l!="object"||l===null){ii(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){ii(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),ii(t,a)}}const z0={eventsEmitter:mL,update:jL,translate:kL,transition:HL,slide:GL,loop:XL,grabCursor:KL,events:lk,breakpoints:dk,checkOverflow:xk,classes:mk},H0={};let p1=class dn{constructor(){let t,n;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?n=o[0]:[t,n]=o,n||(n={}),n=ii({},n),t&&!n.el&&(n.el=t);const u=qi();if(n.el&&typeof n.el=="string"&&u.querySelectorAll(n.el).length>1){const g=[];return u.querySelectorAll(n.el).forEach(v=>{const y=ii({},n,{el:v});g.push(new dn(y))}),g}const d=this;d.__swiper__=!0,d.support=jw(),d.device=Aw({userAgent:n.userAgent}),d.browser=Mw(),d.eventsListeners={},d.eventsAnyListeners=[],d.modules=[...d.__modules__],n.modules&&Array.isArray(n.modules)&&d.modules.push(...n.modules);const f={};d.modules.forEach(g=>{g({params:n,swiper:d,extendParams:vk(n,f),on:d.on.bind(d),once:d.once.bind(d),off:d.off.bind(d),emit:d.emit.bind(d)})});const h=ii({},Kp,f);return d.params=ii({},h,H0,n),d.originalParams=ii({},d.params),d.passedParams=ii({},n),d.params&&d.params.on&&Object.keys(d.params.on).forEach(g=>{d.on(g,d.params.on[g])}),d.params&&d.params.onAny&&d.onAny(d.params.onAny),Object.assign(d,{enabled:d.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return d.params.direction==="horizontal"},isVertical(){return d.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:d.params.allowSlideNext,allowSlidePrev:d.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:d.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:d.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),d.emit("_swiper"),d.params.init&&d.init(),d}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:a}=this,o=Bi(n,`.${a.slideClass}, swiper-slide`),l=Kc(o[0]);return Kc(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:a}=t;t.slides=Bi(n,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),u=(a.maxTranslate()-o)*t+o;a.translateTo(u,typeof n>"u"?0:n),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);n.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const a=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:d,size:f,activeIndex:h}=a;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let v=l[h]?Math.ceil(l[h].swiperSlideSize):0,y;for(let w=h+1;w<l.length;w+=1)l[w]&&!y&&(v+=Math.ceil(l[w].swiperSlideSize),g+=1,v>f&&(y=!0));for(let w=h-1;w>=0;w-=1)l[w]&&!y&&(v+=l[w].swiperSlideSize,g+=1,v>f&&(y=!0))}else if(t==="current")for(let v=h+1;v<l.length;v+=1)(n?u[v]+d[v]-u[h]<f:u[v]-u[h]<f)&&(g+=1);else for(let v=h-1;v>=0;v-=1)u[h]-u[v]<f&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&Dc(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,d=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(d),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const u=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}a.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),a.emit("changeDirection"),n&&a.update()),a}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let a=t||n.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=n,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Bi(a,o())[0];return!u&&n.params.createElements&&(u=Wc("div",n.params.wrapperClass),a.append(u),Bi(a,`.${n.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(n,{el:a,wrapperEl:u,slidesEl:n.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:u,hostEl:n.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||qn(a,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||qn(a,"direction")==="rtl"),wrongRTL:qn(u,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const o=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?Dc(n,l):l.addEventListener("load",u=>{Dc(n,u.target)})}),Wp(n),n.initialized=!0,Wp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const a=this,{params:o,el:l,wrapperEl:u,slides:d}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),n&&(a.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(f=>{a.off(f)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),tL(a)),a.destroyed=!0),null}static extendDefaults(t){ii(H0,t)}static get extendedDefaults(){return H0}static get defaults(){return Kp}static installModule(t){dn.prototype.__modules__||(dn.prototype.__modules__=[]);const n=dn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>dn.installModule(n)),dn):(dn.installModule(t),dn)}};Object.keys(z0).forEach(e=>{Object.keys(z0[e]).forEach(t=>{p1.prototype[t]=z0[e][t]})});p1.use([pL,hL]);const Lw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ja(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Or(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:ja(t[a])&&ja(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:Or(e[a],t[a]):e[a]=t[a]})}function kw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Vw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Dw(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function zw(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),n=[];return t.forEach(a=>{n.indexOf(a)<0&&n.push(a)}),n.join(" ")}function yk(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function wk(e){let{swiper:t,slides:n,passedParams:a,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:d,paginationEl:f}=e;const h=o.filter(Y=>Y!=="children"&&Y!=="direction"&&Y!=="wrapperClass"),{params:g,pagination:v,navigation:y,scrollbar:w,virtual:b,thumbs:j}=t;let L,M,T,E,V,O,N,H;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(L=!0),o.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(M=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||f)&&(g.pagination||g.pagination===!1)&&v&&!v.el&&(T=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||d)&&(g.scrollbar||g.scrollbar===!1)&&w&&!w.el&&(E=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||u)&&(a.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(V=!0);const U=Y=>{t[Y]&&(t[Y].destroy(),Y==="navigation"?(t.isElement&&(t[Y].prevEl.remove(),t[Y].nextEl.remove()),g[Y].prevEl=void 0,g[Y].nextEl=void 0,t[Y].prevEl=void 0,t[Y].nextEl=void 0):(t.isElement&&t[Y].el.remove(),g[Y].el=void 0,t[Y].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!a.loop?O=!0:!g.loop&&a.loop?N=!0:H=!0),h.forEach(Y=>{if(ja(g[Y])&&ja(a[Y]))Object.assign(g[Y],a[Y]),(Y==="navigation"||Y==="pagination"||Y==="scrollbar")&&"enabled"in a[Y]&&!a[Y].enabled&&U(Y);else{const F=a[Y];(F===!0||F===!1)&&(Y==="navigation"||Y==="pagination"||Y==="scrollbar")?F===!1&&U(Y):g[Y]=a[Y]}}),h.includes("controller")&&!M&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&n&&b&&g.virtual.enabled?(b.slides=n,b.update(!0)):o.includes("virtual")&&b&&g.virtual.enabled&&(n&&(b.slides=n),b.update(!0)),o.includes("children")&&n&&g.loop&&(H=!0),L&&j.init()&&j.update(!0),M&&(t.controller.control=g.controller.control),T&&(t.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),t.el.appendChild(f)),f&&(g.pagination.el=f),v.init(),v.render(),v.update()),E&&(t.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-scrollbar"),d.part.add("scrollbar"),t.el.appendChild(d)),d&&(g.scrollbar.el=d),w.init(),w.updateSize(),w.setTranslate()),V&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),Qc(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),Qc(u,t.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),t.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),y.init(),y.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(O||H)&&t.loopDestroy(),(N||H)&&t.loopCreate(),t.update()}function bk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},a={},o={};Or(n,Kp),n._emitClasses=!0,n.init=!1;const l={},u=Lw.map(f=>f.replace(/_/,"")),d=Object.assign({},e);return Object.keys(d).forEach(f=>{typeof e[f]>"u"||(u.indexOf(f)>=0?ja(e[f])?(n[f]={},o[f]={},Or(n[f],e[f]),Or(o[f],e[f])):(n[f]=e[f],o[f]=e[f]):f.search(/on[A-Z]/)===0&&typeof e[f]=="function"?t?a[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:n.on[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:l[f]=e[f])}),["navigation","pagination","scrollbar"].forEach(f=>{n[f]===!0&&(n[f]={}),n[f]===!1&&delete n[f]}),{params:n,passedParams:o,rest:l,events:a}}function Sk(e,t){let{el:n,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:d}=e;kw(t)&&a&&o&&(d.params.navigation.nextEl=a,d.originalParams.navigation.nextEl=a,d.params.navigation.prevEl=o,d.originalParams.navigation.prevEl=o),Vw(t)&&l&&(d.params.pagination.el=l,d.originalParams.pagination.el=l),Dw(t)&&u&&(d.params.scrollbar.el=u,d.originalParams.scrollbar.el=u),d.init(n)}function Ck(e,t,n,a,o){const l=[];if(!t)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(n&&a){const f=a.map(o),h=n.map(o);f.join("")!==h.join("")&&u("children"),a.length!==n.length&&u("children")}return Lw.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in e&&f in t)if(ja(e[f])&&ja(t[f])){const h=Object.keys(e[f]),g=Object.keys(t[f]);h.length!==g.length?u(f):(h.forEach(v=>{e[f][v]!==t[f][v]&&u(f)}),g.forEach(v=>{e[f][v]!==t[f][v]&&u(f)}))}else e[f]!==t[f]&&u(f)}),l}const Tk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Jc(){return Jc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Jc.apply(this,arguments)}function Hw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Pw(e){const t=[];return je.Children.toArray(e).forEach(n=>{Hw(n)?t.push(n):n.props&&n.props.children&&Pw(n.props.children).forEach(a=>t.push(a))}),t}function Ek(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return je.Children.toArray(e).forEach(a=>{if(Hw(a))t.push(a);else if(a.props&&a.props.slot&&n[a.props.slot])n[a.props.slot].push(a);else if(a.props&&a.props.children){const o=Pw(a.props.children);o.length>0?o.forEach(l=>t.push(l)):n["container-end"].push(a)}else n["container-end"].push(a)}),{slides:t,slots:n}}function jk(e,t,n){if(!n)return null;const a=g=>{let v=g;return g<0?v=t.length+g:v>=t.length&&(v=v-t.length),v},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:l,to:u}=n,d=e.params.loop?-t.length:0,f=e.params.loop?t.length*2:t.length,h=[];for(let g=d;g<f;g+=1)g>=l&&g<=u&&h.push(t[a(g)]);return h.map((g,v)=>je.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${v}`}))}function po(e,t){return typeof window>"u"?R.useEffect(e,t):R.useLayoutEffect(e,t)}const sy=R.createContext(null),Ak=R.createContext(null),_t=R.forwardRef(function(e,t){let{className:n,tag:a="div",wrapperTag:o="div",children:l,onSwiper:u,...d}=e===void 0?{}:e,f=!1;const[h,g]=R.useState("swiper"),[v,y]=R.useState(null),[w,b]=R.useState(!1),j=R.useRef(!1),L=R.useRef(null),M=R.useRef(null),T=R.useRef(null),E=R.useRef(null),V=R.useRef(null),O=R.useRef(null),N=R.useRef(null),H=R.useRef(null),{params:U,passedParams:Y,rest:F,events:K}=bk(d),{slides:ne,slots:le}=Ek(l),de=()=>{b(!w)};Object.assign(U.on,{_containerClasses(te,k){g(k)}});const oe=()=>{Object.assign(U.on,K),f=!0;const te={...U};if(delete te.wrapperClass,M.current=new p1(te),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=ne;const k={cache:!1,slides:ne,renderExternal:y,renderExternalUpdate:!1};Or(M.current.params.virtual,k),Or(M.current.originalParams.virtual,k)}};L.current||oe(),M.current&&M.current.on("_beforeBreakpoint",de);const $=()=>{f||!K||!M.current||Object.keys(K).forEach(te=>{M.current.on(te,K[te])})},W=()=>{!K||!M.current||Object.keys(K).forEach(te=>{M.current.off(te,K[te])})};R.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",de)}),R.useEffect(()=>{!j.current&&M.current&&(M.current.emitSlidesClasses(),j.current=!0)}),po(()=>{if(t&&(t.current=L.current),!!L.current)return M.current.destroyed&&oe(),Sk({el:L.current,nextEl:V.current,prevEl:O.current,paginationEl:N.current,scrollbarEl:H.current,swiper:M.current},U),u&&!M.current.destroyed&&u(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),po(()=>{$();const te=Ck(Y,T.current,ne,E.current,k=>k.key);return T.current=Y,E.current=ne,te.length&&M.current&&!M.current.destroyed&&wk({swiper:M.current,slides:ne,passedParams:Y,changedParams:te,nextEl:V.current,prevEl:O.current,scrollbarEl:H.current,paginationEl:N.current}),()=>{W()}}),po(()=>{Tk(M.current)},[v]);function J(){return U.virtual?jk(M.current,ne,v):ne.map((te,k)=>je.cloneElement(te,{swiper:M.current,swiperSlideIndex:k}))}return je.createElement(a,Jc({ref:L,className:zw(`${h}${n?` ${n}`:""}`)},F),je.createElement(Ak.Provider,{value:M.current},le["container-start"],je.createElement(o,{className:yk(U.wrapperClass)},le["wrapper-start"],J(),le["wrapper-end"]),kw(U)&&je.createElement(je.Fragment,null,je.createElement("div",{ref:O,className:"swiper-button-prev"}),je.createElement("div",{ref:V,className:"swiper-button-next"})),Dw(U)&&je.createElement("div",{ref:H,className:"swiper-scrollbar"}),Vw(U)&&je.createElement("div",{ref:N,className:"swiper-pagination"}),le["container-end"]))});_t.displayName="Swiper";const Gt=R.forwardRef(function(e,t){let{tag:n="div",children:a,className:o="",swiper:l,zoom:u,lazy:d,virtualIndex:f,swiperSlideIndex:h,...g}=e===void 0?{}:e;const v=R.useRef(null),[y,w]=R.useState("swiper-slide"),[b,j]=R.useState(!1);function L(V,O,N){O===v.current&&w(N)}po(()=>{if(typeof h<"u"&&(v.current.swiperSlideIndex=h),t&&(t.current=v.current),!(!v.current||!l)){if(l.destroyed){y!=="swiper-slide"&&w("swiper-slide");return}return l.on("_slideClass",L),()=>{l&&l.off("_slideClass",L)}}}),po(()=>{l&&v.current&&!l.destroyed&&w(l.getSlideClasses(v.current))},[l]);const M={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},T=()=>typeof a=="function"?a(M):a,E=()=>{j(!0)};return je.createElement(n,Jc({ref:v,className:zw(`${y}${o?` ${o}`:""}`),"data-swiper-slide-index":f,onLoad:E},g),u&&je.createElement(sy.Provider,{value:M},je.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},T(),d&&!b&&je.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&je.createElement(sy.Provider,{value:M},T(),d&&!b&&je.createElement("div",{className:"swiper-lazy-preloader"})))});Gt.displayName="SwiperSlide";const Mk=C(_t)`
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
`,Ok=C(Gt)`
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
`,Rk=C.section`
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
`,Lk=C.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`,oy=C.button`
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
`,kk=C.div`
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
`,Vk=C.p`
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
`,Dk=C.p`
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
`,zk=C.img`
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
`;const Hk=C.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,Pk=C.div`
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
`,Nk=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Bk=C.div`
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
`;const ly=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  opacity: ${e=>e.$isActive?1:.7};
  transform: ${e=>e.$isActive?"translateY(0)":"translateY(5px)"};
  transition: all 0.2s ease; // CSS transition замість Framer Motion
`,$k=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ik=C.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  opacity: ${e=>e.$isActive?1:.8};
  transform: ${e=>e.$isActive?"translateY(0)":"translateY(5px)"};
  transition: all 0.2s ease; // CSS transition замість Framer Motion
`,Uk=C.div`
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
`,_k="/assets/Review%20Image%203-bwglEcYl.png",cy="/assets/Review%20Image%201-BysFOq9G.png",uy="/assets/Review%20Image%202-C_HtVc_c.png",dy="/assets/Review%20Image%205-B3ukDKHL.png",Gk="/assets/Review%20Image%204-AW0fOgIu.png",qk=aT`
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
`,Yk=C.section`
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
`,Fk=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`,Xk=C.p`
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
`,Zk=C.h3`
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
`,Nw=C.span`
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
`,Wk=C.div`
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
`,Kk=C.div`
  position: relative;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 20rem;
  overflow: hidden;
  background: transparent;
  z-index: 1;
  margin: 0;

  .swiper {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
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
`,Qk=C.div`
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
`,Jk=C(Qk)`
  ${e=>e.$isLargeDesktop&&`
    margin: 0;
    transition: all 0.2s ease;
    
    .overlay {
      margin-bottom: 5%;
    }
  `}
`,eV=C.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`,tV=C.div`
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
`,iV=C.p`
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
`,nV=C.div`
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
`;function Bw(){const[e,t]=R.useState(null),[n,a]=R.useState(0),o=R.useRef(null),l=R.useRef(null),u=()=>{e&&e.slidePrev()},d=()=>{e&&e.slideNext()},f=[{image:_k,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:uy,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:dy,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:Gk,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:cy,description:"An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:dy,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:uy,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:cy,description:"A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}];return m.jsxs(Rk,{children:[m.jsxs(kk,{children:[m.jsx(Vk,{children:"Our Cases"}),m.jsxs(Dk,{children:[m.jsx(Nw,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})]}),m.jsx(Uk,{children:m.jsx(Mk,{modules:[ai],spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},speed:800,onSwiper:t,onSlideChange:h=>a(h.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},touchStartPreventDefault:!1,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:f.map(({image:h,description:g,title:v,type:y},w)=>m.jsx(Ok,{$isActive:n===w,$index:w,children:m.jsxs(Hk,{$isActive:n===w,$index:w,children:[m.jsx(zk,{src:h,alt:y,$isActive:n===w,$index:w}),m.jsx(Pk,{$isActive:n===w,$index:w,children:m.jsxs(Nk,{children:[m.jsx(Bk,{children:m.jsx(ly,{$isActive:n===w,children:g})}),m.jsxs($k,{children:[m.jsx(Ik,{$isActive:n===w,children:v}),m.jsx(ly,{$isActive:n===w,children:y})]})]})})]})},w))})}),m.jsxs(Lk,{children:[m.jsx(oy,{ref:o,onClick:u,"aria-label":"Previous slide",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(oy,{ref:l,onClick:d,"aria-label":"Next slide",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})}const aV=C(P.div)`
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
`,rV=C.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,sV=({type:e,message:t,onClose:n,autoClose:a=!0,autoCloseDuration:o=25e3})=>{const{t:l}=u1();R.useEffect(()=>{if(a){const d=setTimeout(()=>{n()},o);return()=>clearTimeout(d)}},[a,o,n]);const u={success:l("alert.success"),error:l("alert.error")};return m.jsxs(aV,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[m.jsx("div",{children:t||u[e]}),m.jsx(rV,{onClick:n,children:"×"})]})},oV="/assets/ContactFormImage-CaQYWUqs.png",Eu=()=>{const[e,t]=R.useState(""),[n,a]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[u,d]=R.useState(null),[f,h]=R.useState(!1),[g,v]=R.useState(!1),y=()=>{h(!0)},w=()=>{h(!1)},b=O=>{const{name:N,value:H}=O.target;a(U=>({...U,[N]:H})),l(U=>({...U,[N]:!1}))},j=()=>{const O={};return e||(O.service=!0),n.name||(O.name=!0),n.email||(O.email=!0),n.phone||(O.phone=!0),n.location||(O.location=!0),O},L=async O=>{O.preventDefault();const N=j();if(Object.keys(N).length>0){l(N),d({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...n})})).ok)t(""),a({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),d({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(H){console.error("Error submitting form:",H),d({type:"error",message:"There was an error submitting the form. Please try again."})}},M={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ie}}},T={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.4,ease:ie}}},E={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.3,ease:ie}},focus:{scale:1.01,transition:{duration:.1}}},V={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.3,ease:ie}},hover:{scale:1.02,transition:{duration:.1}},tap:{scale:.98}};return m.jsxs(m.Fragment,{children:[m.jsxs(pV,{children:[m.jsxs(my,{children:[m.jsxs(N0,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,children:m.jsxs(hV,{children:[" ",m.jsx("span",{children:"Contact"})," our team"]})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,transition:{delay:.1},children:m.jsx(fc,{children:"We love our customers, so feel free to call during normal business hours"})})]})," ",m.jsx(P.div,{variants:V,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",whileTap:"tap",children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(mV,{children:m.jsx(gV,{children:"Call Us for Fast Repair"})})})}),m.jsxs(my,{children:[m.jsx(xV,{}),m.jsxs(vV,{children:[m.jsxs(gy,{width:"251px",children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,children:m.jsx(xy,{children:"Service Hours"})}),m.jsx(N0,{children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,transition:{delay:.2},children:m.jsxs(fc,{children:["Mon–Sat: 8AM–6PM ",m.jsx("br",{})," Sun: 9AM–4PM"," "]})})})]}),m.jsxs(gy,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,transition:{delay:.3},children:m.jsx(xy,{children:"Our Location"})}),m.jsxs(N0,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,transition:{delay:.4},children:m.jsxs("a",{href:"https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA",target:"_blank",rel:"noopener noreferrer",children:[" ",m.jsx(fc,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,transition:{delay:.5},children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(fc,{children:"+1 (805) 500-2705"})})})]})]})]})]})]}),m.jsx(P.div,{variants:T,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsxs(lV,{onSubmit:L,children:[m.jsx(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,ease:ie},children:m.jsx(yV,{src:oV,alt:"contact image",onLoad:()=>v(!0),style:{opacity:g?1:0,transition:"opacity 0.3s ease"}})}),m.jsx(un,{children:"What service do you need for your appliances?"}),m.jsxs(cV,{children:[m.jsx(P.div,{variants:E,whileHover:"hover",children:m.jsxs(fy,{style:o.service?{borderColor:"red"}:{},children:[m.jsx(py,{name:"service",value:"Repair",checked:e==="Repair",onChange:O=>t(O.target.value)}),m.jsx(hy,{checked:e==="Repair"}),"Repair"]})}),m.jsx(P.div,{variants:E,transition:{delay:.1},whileHover:"hover",children:m.jsxs(fy,{style:o.service?{borderColor:"red"}:{},children:[m.jsx(py,{name:"service",value:"Installation",checked:e==="Installation",onChange:O=>t(O.target.value)}),m.jsx(hy,{checked:e==="Installation"}),"Installation"]})})]}),m.jsxs(wV,{children:[m.jsxs(bV,{children:[m.jsx(un,{children:"Name"}),m.jsx(P.div,{variants:E,transition:{delay:.2},whileFocus:"focus",children:m.jsx(P0,{name:"name",type:"text",placeholder:"Your Name",value:n.name,onChange:b,style:o.name?{borderBottom:"1px solid red"}:{}})}),m.jsx(un,{children:"Email"}),m.jsx(P.div,{variants:E,transition:{delay:.3},whileFocus:"focus",children:m.jsx(P0,{name:"email",type:"email",placeholder:"Your Email",value:n.email,onChange:b,style:o.email?{borderBottom:"1px solid red"}:{}})}),m.jsx(un,{children:"Phone Number"}),m.jsx(P.div,{variants:E,transition:{delay:.4},whileFocus:"focus",children:m.jsx(P0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:n.phone,onChange:b,style:o.phone?{borderBottom:"1px solid red"}:{}})})]}),m.jsxs(SV,{children:[m.jsx(un,{children:"In what location do you need the service?"}),m.jsx(P.div,{variants:E,transition:{delay:.5},whileFocus:"focus",children:m.jsx(uc,{children:m.jsxs(dc,{name:"location",value:n.location,onChange:b,style:o.location?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select location"}),m.jsx("option",{children:"Agoura Hills"}),m.jsx("option",{children:"Calabasas"}),m.jsx("option",{children:"Camarillo"}),m.jsx("option",{children:"Hidden Valley"}),m.jsx("option",{children:"Lake Sherwood"}),m.jsx("option",{children:"Los Angeles County"}),m.jsx("option",{children:"Malibu"}),m.jsx("option",{children:"Moorpark"}),m.jsx("option",{children:"Newbury Park"}),m.jsx("option",{children:"Oak Park"}),m.jsx("option",{children:"Santa Rosa Valley"}),m.jsx("option",{children:"Thousand Oaks"}),m.jsx("option",{children:"Westlake Village"}),m.jsx("option",{children:"Other"})]})})}),m.jsx(un,{children:"What do you need repaired?"}),m.jsx(P.div,{variants:E,transition:{delay:.6},whileFocus:"focus",children:m.jsx(uc,{children:m.jsxs(dc,{name:"appliance",value:n.appliance,onChange:b,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select appliance"}),m.jsx("option",{children:"Refrigerator"}),m.jsx("option",{children:"Dryer"}),m.jsx("option",{children:"Oven"}),m.jsx("option",{children:"Ice Maker"}),m.jsx("option",{children:"Washer"}),m.jsx("option",{children:"Range"}),m.jsx("option",{children:"Wine Cooler"}),m.jsx("option",{children:"Freezer"}),m.jsx("option",{children:"Air Conditioner"}),m.jsx("option",{children:"Furnace"}),m.jsx("option",{children:"Other"})]})})}),m.jsx(un,{children:"Brand of appliance"}),m.jsx(P.div,{variants:E,transition:{delay:.7},whileFocus:"focus",children:m.jsx(uc,{children:m.jsxs(dc,{name:"brand",value:n.brand,onChange:b,style:o.brand?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select brand"}),m.jsx("option",{children:"Amana"}),m.jsx("option",{children:"Bosch"}),m.jsx("option",{children:"Electrolux"}),m.jsx("option",{children:"Fisher & Paykel"}),m.jsx("option",{children:"Frigidaire"}),m.jsx("option",{children:"GE"}),m.jsx("option",{children:"Haier"}),m.jsx("option",{children:"JennAir"}),m.jsx("option",{children:"KitchenAid"}),m.jsx("option",{children:"LG"}),m.jsx("option",{children:"Maytag"}),m.jsx("option",{children:"Samsung"}),m.jsx("option",{children:"Sharp"}),m.jsx("option",{children:"Sub-Zero"}),m.jsx("option",{children:"Thermador"}),m.jsx("option",{children:"Viking"}),m.jsx("option",{children:"Whirlpool"}),m.jsx("option",{children:"Wolf"}),m.jsx("option",{children:"Other"})]})})})]})]}),m.jsx(un,{children:"What type of power does this appliance use?"}),m.jsx(P.div,{variants:E,transition:{delay:.8},whileFocus:"focus",children:m.jsx(uc,{children:m.jsxs(dc,{name:"power",value:n.power,onChange:b,style:o.power?{borderBottom:"1px solid red"}:{},children:[m.jsx("option",{value:"",children:"Select power"}),m.jsx("option",{children:"Electric"}),m.jsx("option",{children:"Natural Gas"}),m.jsx("option",{children:"Propane"})]})})}),m.jsx(un,{children:"Any details you'd like to add?"}),m.jsx(P.div,{variants:E,transition:{delay:.9},whileFocus:"focus",children:m.jsx(uV,{name:"details",placeholder:"Any details you'd like to add?",value:n.details,onChange:b})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:M,transition:{delay:1},children:m.jsxs(fV,{children:['By clicking "Submit" you hereby agree to our'," ",m.jsx("span",{onClick:y,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]})}),m.jsx(P.div,{variants:V,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:1.1},whileHover:"hover",whileTap:"tap",children:m.jsx(dV,{type:"submit",children:"Submit"})})]})}),m.jsx(Jh,{children:u&&m.jsx(sV,{type:u.type,message:u.message,onClose:()=>d(null)})})]})," ",f&&m.jsx(xw,{onClick:w,children:m.jsxs(vw,{onClick:O=>O.stopPropagation(),children:[m.jsx(yw,{onClick:w,children:"×"}),m.jsx(ww,{})]})})]})},lV=C.form`
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
`,un=C.label`
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
`,cV=C.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`,fy=C.label`
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
`,py=C.input.attrs({type:"radio"})`
  display: none;
`,hy=C.span`
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
`,P0=C.input`
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
`,uc=C.div`
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
`,dc=C.select`
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
`,uV=C.textarea`
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
`,dV=C.button`
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
`,fV=C.p`
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
`,pV=C.div`
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
`,my=C.div`
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
`,N0=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 10px;
  }
`,hV=C.p`
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
`,fc=C.p`
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
`,mV=C.button`
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
`,gV=C.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`,xV=C.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
`,vV=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`,gy=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};

  @media screen and (max-width: 767px) {
    width: 100% !important;
    gap: 10px;
  }
`,xy=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`,yV=C.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }
`,wV=C.div`
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
`,bV=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,SV=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,vy="/assets/Ellipse%204aleksey-FxWBDF7j.png",yy="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",wy="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",by="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",Sy="/assets/Review%20Image-alexey-BS9M-VaX.png",Cy="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Ty="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Ey="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",pc=[{avatar:vy,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      Airtexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      Airtexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Sy},{avatar:yy,name:"Sanal Kandymov",time:"a week ago",text:`Great service! Airtexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Cy},{avatar:wy,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Ty},{avatar:by,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Ey},{avatar:vy,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      Airtexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      Airtexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Sy},{avatar:yy,name:"Sanal Kandymov",time:"a week ago",text:`Great service! Airtexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Cy},{avatar:wy,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Ty},{avatar:by,name:"Elizabeth Castorena",time:"a week ago",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Ey}],jy={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie}}},B0={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:ie}},hover:{y:-5,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.1)",transition:{duration:.3,ease:ie}}},$0={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:ie}},hover:{scale:1.1,rotate:5,transition:{duration:.2}}},I0={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ie}},hover:{scale:1.05,transition:{duration:.4}}},CV=C.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,TV=C.h2`
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
`,EV=C.p`
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
`,jV=C.div`
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
`,U0=C.div`
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
`,_0=C.div`
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
`,G0=C.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,q0=C.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  -moz-loading: lazy;
`,Y0=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,F0=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,X0=C.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,Z0=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,W0=C.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
  -moz-loading: lazy;
`,K0=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Q0=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,AV=C.div`
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
`,ju=()=>{const[,e]=je.useState(!1),t=je.useRef(null),n=je.useRef(null),a=je.useRef(null),o=Pe({query:"(min-width: 768px)"}),l=Pe({query:"(min-width: 1440px)"});return m.jsxs("div",{children:[m.jsxs(CV,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:jy,children:m.jsx(EV,{children:"Your Feedback Matters"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:jy,transition:{delay:.1},children:m.jsxs(TV,{children:["Discover why clients ",m.jsx("span",{children:" trust "})," our repairs"]})})]}),m.jsxs(jV,{ref:a,children:[m.jsx(AV,{}),m.jsxs(U0,{$isVisible:!0,children:[m.jsx(K0,{}),m.jsx(Q0,{}),m.jsx(_t,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:4e3,loop:!0,modules:[ai],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%",pointerEvents:"none"},preventInteractionOnTransition:!0,watchOverflow:!0,children:pc.map((u,d)=>m.jsx(Gt,{children:m.jsx(P.div,{variants:B0,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(_0,{children:[m.jsxs(G0,{children:[m.jsx(P.div,{variants:$0,whileHover:"hover",children:m.jsx(q0,{src:u.avatar,alt:u.name,loading:"lazy",decoding:"async"})}),m.jsxs(Y0,{children:[m.jsx(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:m.jsx(F0,{children:u.name})}),m.jsx(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:m.jsx(X0,{children:u.time})})]})]}),m.jsx(P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:m.jsx(Z0,{children:u.text})}),m.jsx(P.div,{variants:I0,whileHover:"hover",children:m.jsx(W0,{src:u.image,alt:`Review by ${u.name}`,loading:"lazy",decoding:"async"})})]})})},`top-${d}`))})]}),m.jsxs(U0,{$isVisible:o,children:[m.jsx(K0,{}),m.jsx(Q0,{}),m.jsx(_t,{ref:n,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,reverseDirection:!0},speed:2e3,loop:!0,modules:[ai],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,initialSlide:pc.length-1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%",pointerEvents:"none"},preventInteractionOnTransition:!0,watchOverflow:!0,children:pc.map((u,d)=>m.jsx(Gt,{children:m.jsx(P.div,{variants:B0,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(_0,{children:[m.jsxs(G0,{children:[m.jsx(P.div,{variants:$0,whileHover:"hover",children:m.jsx(q0,{src:u.avatar,alt:u.name})}),m.jsxs(Y0,{children:[m.jsx(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:m.jsx(F0,{children:u.name})}),m.jsx(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:m.jsx(X0,{children:u.time})})]})]}),m.jsx(P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:m.jsx(Z0,{children:u.text})}),m.jsx(P.div,{variants:I0,whileHover:"hover",children:m.jsx(W0,{src:u.image,alt:`Review by ${u.name}`})})]})})},`bottom-${d}`))})]}),l&&m.jsxs(U0,{$isVisible:!0,children:[m.jsx(K0,{}),m.jsx(Q0,{}),m.jsx(_t,{direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:6e3,loop:!0,modules:[ai],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%",pointerEvents:"none"},preventInteractionOnTransition:!0,watchOverflow:!0,children:pc.map((u,d)=>m.jsx(Gt,{children:m.jsx(P.div,{variants:B0,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(_0,{children:[m.jsxs(G0,{children:[m.jsx(P.div,{variants:$0,whileHover:"hover",children:m.jsx(q0,{src:u.avatar,alt:u.name})}),m.jsxs(Y0,{children:[m.jsx(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:m.jsx(F0,{children:u.name})}),m.jsx(P.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:m.jsx(X0,{children:u.time})})]})]}),m.jsx(P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:m.jsx(Z0,{children:u.text})}),m.jsx(P.div,{variants:I0,whileHover:"hover",children:m.jsx(W0,{src:u.image,alt:`Review by ${u.name}`})})]})})},`desktop-${d}`))})]})]})]})},Ay="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",h1="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",eu="/assets/2-lv1xptCk.svg",m1="/assets/3-xYBlE7jA.svg",g1="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",x1="/assets/5-DtA_MHfM.svg",v1="/assets/6-BYfTVs51.svg",y1="/assets/7-DtKFqDn5.svg",w1="/assets/8-C9mdpuht.svg",b1="/assets/9-1he0Czj8.svg",S1="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",C1="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",T1="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",E1="/assets/13-_M_Krupi.svg",j1="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",A1="/assets/15-VL89vzXY.svg",M1="/assets/16-D9KRuHZe.svg",O1="/assets/17-BRD6G3-l.svg",R1="/assets/18-D69HL7ID.svg",L1="/assets/19-Dos04ydj.svg",k1="/assets/21-BwEZSGFZ.svg",V1="/assets/22-CQ_f5juP.svg",D1="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",z1="/assets/24-Dmws8xhr.svg",H1="/assets/25-BaRLqQy_.svg",P1="/assets/26-B2H6SqHt.svg",N1="/assets/27-DBraEacE.svg",B1="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",$1="/assets/29-yivH26vR.svg",I1="/assets/30-DGc1459t.svg",U1="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",MV=[{id:1,imageUrl:h1},{id:2,imageUrl:eu},{id:3,imageUrl:m1},{id:4,imageUrl:g1},{id:5,imageUrl:x1},{id:6,imageUrl:v1},{id:7,imageUrl:y1},{id:8,imageUrl:w1},{id:9,imageUrl:b1},{id:10,imageUrl:S1},{id:11,imageUrl:C1},{id:12,imageUrl:T1},{id:13,imageUrl:E1},{id:14,imageUrl:j1},{id:15,imageUrl:A1},{id:16,imageUrl:M1},{id:17,imageUrl:O1},{id:18,imageUrl:R1},{id:19,imageUrl:L1},{id:20,imageUrl:eu},{id:21,imageUrl:k1},{id:22,imageUrl:V1},{id:23,imageUrl:D1},{id:24,imageUrl:z1},{id:25,imageUrl:H1},{id:26,imageUrl:P1},{id:27,imageUrl:N1},{id:28,imageUrl:B1},{id:29,imageUrl:$1},{id:30,imageUrl:I1},{id:31,imageUrl:U1}],OV=C.div`
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
`,RV=C.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,LV=C(_t)`
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
`,kV=()=>m.jsx(OV,{children:m.jsx(LV,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[ai],grabCursor:!1,allowTouchMove:!1,children:MV.map(e=>m.jsx(Gt,{children:m.jsx(RV,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),My={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ie}}},Oy={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ie}}},VV=()=>{const e=Pe({query:"(min-width: 1440px)"}),t=Pe({query:"(max-width: 1024px)"}),[n,a]=R.useState(!1),o=R.useRef(null),l=R.useRef(null),u=Tu(l,{once:!0,margin:"-10%"});R.useEffect(()=>{u&&!n&&a(!0)},[u,n]);const{scrollY:d}=Kn(),f=bt(d,[0,400],[0,e?80:t?20:40]),h=bt(d,[0,300],[1,.95]),g=()=>{o.current&&o.current.play().catch(v=>{console.log("Auto-play was prevented:",v)})};return m.jsx(m.Fragment,{children:m.jsxs(AR,{id:"hero",ref:l,children:[m.jsxs(P.div,{style:{y:f,opacity:h},children:[m.jsxs(MR,{ref:o,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,onLoadedData:g,preload:"auto",children:[m.jsx("source",{src:Ay,type:"video/mp4"}),m.jsx("source",{src:Ay.replace(".mp4",".webm"),type:"video/webm"}),"Ваш браузер не підтримує відео тег."]}),m.jsx(OR,{})]}),e&&m.jsx(P.div,{initial:{opacity:0,x:50},animate:n?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.7,ease:"easeOut"},children:m.jsx(kV,{})}),m.jsxs(RR,{children:[m.jsxs(LR,{children:[m.jsx(P.div,{initial:"hidden",animate:n?"visible":"hidden",variants:My,children:m.jsx(kR,{children:"THOUSAND OAKS APPLIANCE REPAIR"})}),m.jsx(P.div,{initial:"hidden",animate:n?"visible":"hidden",variants:My,transition:{delay:.1},children:m.jsx(VR,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})})]}),m.jsxs(DR,{children:[m.jsx(P.div,{initial:"hidden",animate:n?"visible":"hidden",variants:Oy,children:m.jsx(gw,{to:"/contact#ap",children:"Contact Us"})}),m.jsx(P.div,{initial:"hidden",animate:n?"visible":"hidden",variants:Oy,transition:{delay:.05},children:m.jsx(O5,{children:m.jsx("a",{href:"tel:+18055002705",children:"Call Us"})})})]})]})]})})},Au="/assets/News%20Article%202%20Image%20Container%20(3)-46MbbkbU.png",Mu="/assets/Image3-DVPHBget.png",_1="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",Ou="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",Ru="/assets/tips-DqrVri1G.png",G1="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",Ry=[{id:1,image:G1,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:Mu,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:_1,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:Ou,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:Ru,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:Au,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],Ly={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie}}},DV={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.7,ease:ie}},hover:{y:-10,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ie}}},zV={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:ie}},hover:{scale:1.05,transition:{duration:.4}}},ky={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ie}}},HV=()=>{const e=R.useRef(null),t=Pe({query:"(max-width: 767px)"}),n=Pe({query:"(min-width: 768px)"}),a=t?1:n?2:3,o=Ry.length>a,l=()=>{e.current&&e.current.slidePrev()},u=()=>{e.current&&e.current.slideNext()};return m.jsxs($V,{children:[m.jsxs(IV,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Ly,children:m.jsx(UV,{children:"NEWS & TIPS"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Ly,transition:{delay:.1},children:m.jsxs(_V,{children:["APPLIANCE ",m.jsx("span",{children:"ADVICE"})," REPAIR ",m.jsx("span",{children:"TIPS"})," BLOG"]})})]}),m.jsxs(NV,{children:[m.jsx(_t,{modules:[f1,ai],onSwiper:d=>e.current=d,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:o,slidesPerView:a,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,children:Ry.map((d,f)=>m.jsx(Gt,{children:m.jsx(PV,{to:d.path,children:m.jsx(P.div,{variants:DV,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsxs(GV,{children:[m.jsx(P.div,{variants:zV,whileHover:"hover",children:m.jsx(qV,{src:d.image,alt:d.title,loading:"lazy",decoding:"async"})}),m.jsxs(YV,{children:[m.jsx(P.div,{variants:ky,children:m.jsx(FV,{children:d.title})}),m.jsx(P.div,{variants:ky,children:m.jsx(XV,{children:d.description})})]})]})})})},d.id))}),m.jsxs(BV,{children:[m.jsx(Vy,{onClick:l,whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(Vy,{onClick:u,whileHover:{scale:1.1},whileTap:{scale:.95},children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},PV=C(St)`
  text-decoration: none;
  display: block;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`,NV=C.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`,BV=C.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`,Vy=C(P.button)`
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
`,$V=C.div`
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
`,IV=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,UV=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,_V=C.p`
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
`,GV=C.div`
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
`,qV=C.img`
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
`,YV=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0;
`,FV=C.p`
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
`,XV=C.p`
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
`,ZV=C.div`
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
`,Dy=C.img`
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
`,WV=C(P.div)`
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
`,KV=C(P.div)`
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
`,QV=C.h3`
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
`,$w="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Iw=()=>{const e=Pe({query:"(max-width: 743px)"}),t=Pe({query:"(min-width: 744px) and (max-width: 1023px)"}),n=Pe({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:h1},{id:2,imageUrl:eu},{id:3,imageUrl:m1},{id:4,imageUrl:g1},{id:5,imageUrl:x1},{id:6,imageUrl:v1},{id:7,imageUrl:y1},{id:8,imageUrl:w1},{id:9,imageUrl:b1},{id:10,imageUrl:S1},{id:11,imageUrl:C1},{id:12,imageUrl:T1},{id:13,imageUrl:E1},{id:14,imageUrl:j1},{id:15,imageUrl:A1},{id:16,imageUrl:M1},{id:17,imageUrl:O1},{id:18,imageUrl:R1},{id:19,imageUrl:L1},{id:20,imageUrl:$w},{id:21,imageUrl:k1},{id:22,imageUrl:V1},{id:23,imageUrl:D1},{id:24,imageUrl:z1},{id:25,imageUrl:H1},{id:26,imageUrl:P1},{id:27,imageUrl:N1},{id:28,imageUrl:B1},{id:29,imageUrl:$1},{id:30,imageUrl:I1},{id:31,imageUrl:U1}],o=e?2:t?4:5,l=a.length>o,u={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie}}},d={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:ie}},hover:{scale:1.1,y:-5,transition:{duration:.3,ease:ie}}};return m.jsxs("div",{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,children:m.jsx(QV,{children:"Quality Service for Major & Luxury Brands"})}),m.jsxs(ZV,{children:[m.jsx(WV,{}),m.jsx(_t,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ai],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},touchRatio:1,touchAngle:45,shortSwipes:!0,resistance:!0,resistanceRatio:.85,children:a.map((f,h)=>m.jsx(Gt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:d,transition:{delay:h*.05},whileHover:"hover",style:{WebkitTransform:"translateZ(0)",backfaceVisibility:"hidden"},children:m.jsx(Dy,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy",decoding:"async",onDragStart:g=>g.preventDefault(),draggable:"false"})})},f.id))}),m.jsx(_t,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ai],className:"mySwiper",style:{width:"100%"},touchRatio:1,touchAngle:45,shortSwipes:!0,resistance:!0,resistanceRatio:.85,children:a.map((f,h)=>m.jsx(Gt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10,touchAction:"pan-y",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"},children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:d,transition:{delay:h*.05+.1},whileHover:"hover",style:{WebkitTransform:"translateZ(0)",backfaceVisibility:"hidden"},children:m.jsx(Dy,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy",decoding:"async",onDragStart:g=>g.preventDefault(),draggable:"false"})})},f.id+100))}),m.jsx(KV,{})]})]})},JV="/assets/ServicesImage-BRQYmF9y.png",eD=C.div`
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
`,tD=C.p`
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
`,iD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 3rem;
  }
`,nD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 0.25rem;
  }
`,zy=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 0.75rem;
  }
`,aD=C.p`
  color: #242424;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,rD=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,Hy=C.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,sD=C.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`,oD=C.img`
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
`,Py=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    padding-top: 40%;
  }
`,Ny=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;
`,tu=C(St)`
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
`,By=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  transition: color 0.2s ease;

  ${tu}:hover &, ${tu}:focus & {
    color: white;
  }
`,lD=C.div`
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
    max-width: 537px;
    margin: 0 2.01rem;
    bottom: 10px;
  }
`,cD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,uD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,dD=C.p`
  color: var(--black-500);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`,fD=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
`,pD=C(St)`
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
`,Qp=C.button`
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
`,Uw=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,hD=C(Uw)`
  color: #242424;
  transition: color 0.2s ease;

  ${Qp}:hover &, ${Qp}:focus & {
    color: white;
  }
`,mD=C.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;C.div`
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
`;const J0={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:ie}}},ep={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:ie}}},hc={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:ie}}},gD={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ie}}},xD={visible:{transition:{staggerChildren:.1}}},_w=()=>{const e=Pe({query:"(min-width: 1440px)"}),[t,n]=R.useState(!1),a=R.useRef(null),o=Tu(a,{once:!0,margin:"-20%"});R.useEffect(()=>{o&&!t&&n(!0)},[o,t]);const{scrollY:l}=Kn(),u=bt(l,[0,300],[0,e?-50:-20],{clamp:!1});return m.jsxs(eD,{ref:a,children:[m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:J0,children:m.jsx(tD,{children:"Our Service"})}),m.jsxs(iD,{children:[m.jsxs(nD,{children:[m.jsxs(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:xD,children:[m.jsx(P.div,{variants:ep,children:m.jsxs(zy,{children:[m.jsx(aD,{children:"01."}),m.jsx(rD,{children:"Appliance Care & Tune-Ups"})]})}),m.jsx(P.div,{variants:ep,children:m.jsx(Hy,{children:"Professional Installations"})}),m.jsx(P.div,{variants:ep,children:m.jsx(Hy,{children:"Fast & Reliable Emergency Repairs"})})]}),e&&m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:J0,children:m.jsxs(Py,{children:[m.jsx(Ny,{children:"Do you want to know more about our service?"}),m.jsx(tu,{to:"/fridge#ap",children:m.jsx(By,{children:"Learn more"})})]})})]}),m.jsxs(mD,{children:[m.jsx(P.div,{style:{y:u},initial:"hidden",animate:t?"visible":"hidden",variants:gD,children:m.jsx(oD,{src:JV,alt:"Services Image",loading:"lazy"})}),m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:hc,children:m.jsxs(lD,{children:[m.jsxs(cD,{children:[m.jsx(P.div,{variants:hc,children:m.jsx(zy,{children:m.jsx(sD,{children:"Preventive Care"})})}),m.jsx(P.div,{variants:hc,children:m.jsx(uD,{children:m.jsx(dD,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),m.jsx(P.div,{variants:hc,children:m.jsxs(fD,{children:[m.jsx(pD,{to:"/contact#ap",children:m.jsx(Uw,{children:"Contact Us"})}),m.jsx(Qp,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(hD,{children:"Call Us"})})})]})})]})})]}),!e&&m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:J0,children:m.jsxs(Py,{children:[m.jsx(Ny,{children:"Do you want to know more about our service?"}),m.jsx(tu,{to:"/fridge#ap",children:m.jsx(By,{children:"Learn more"})})]})})]})]})},vD="/assets/Service%20Area%20Section-B7et7wWI.webp",yD=C.div`
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
`,wD=C.h2`
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
`,bD=C.p`
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
`,SD=C.div`
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
`,CD=C.div`
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
`,TD=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ED=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,jD=C.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AD=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MD=[{county:"Ventura County",city:"Thousand Oaks",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:m.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:m.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:m.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],$y={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie}}},OD={hidden:{opacity:0,y:50,scale:.9,rotateX:-5},visible:e=>({opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.6,delay:e*.1,ease:ie}}),hover:{y:-10,scale:1.05,rotateY:5,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ie}},tap:{scale:.98}},RD={hidden:{opacity:0,scale:.8,rotate:-90},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:vi}},hover:{scale:1.2,rotate:5,transition:{duration:.2}}},LD=()=>m.jsxs(yD,{$bg:vD,children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:$y,children:m.jsx(wD,{children:"We provide expert service throughout the greater Los Angeles area"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:$y,transition:{delay:.1},children:m.jsx(bD,{children:"We provide expert service throughout the greater Los Angeles area."})}),m.jsx(SD,{children:MD.map((e,t)=>m.jsx(P.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:OD,whileHover:"hover",whileTap:"tap",children:m.jsxs(CD,{children:[m.jsxs(TD,{children:[m.jsx(P.div,{variants:RD,whileHover:"hover",children:m.jsx(ED,{children:e.icon})}),m.jsx(P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.2},children:m.jsx(jD,{children:e.county})})]}),m.jsx(P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.3},children:m.jsx(AD,{children:e.city})})]})},t))})]}),kD="/assets/WhyAirtexnoImage-BBTHkk8n.png",Iy="/assets/WhyAirtexnoImage2-BIh43Sbv.png",VD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",tp="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",DD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",zD=()=>{const e=Pe({query:"(max-width: 743px)"}),t=Pe({query:"(min-width: 744px) and (max-width: 1023px)"}),n=Pe({query:"(min-width: 1024px)"}),a=Pe({query:"(min-width: 1440px)"}),[o,l]=R.useState(!1),u=R.useRef(null),d=Tu(u,{once:!0,margin:"-10%"});R.useEffect(()=>{d&&!o&&l(!0)},[d,o]);const f=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:kD,icon:tp},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:Iy,icon:DD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:VD,icon:tp},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:Iy,icon:tp}],h=e?1:t?2:3,g=f.length>h,v={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ie}}},y={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ie}}};return m.jsxs(m.Fragment,{children:[m.jsx(qk,{}),m.jsxs(Yk,{ref:u,children:[m.jsxs(Fk,{children:[m.jsx(P.div,{initial:"hidden",animate:o?"visible":"hidden",variants:v,children:m.jsx(Xk,{children:"why airtexno"})}),m.jsx(P.div,{initial:"hidden",animate:o?"visible":"hidden",variants:v,transition:{delay:.1},children:m.jsxs(Zk,{children:["Same-Day Appliance Repair ",m.jsx(Nw,{children:"You Can Rely On"})," "]})})]}),m.jsx(nV,{children:m.jsx(Kk,{$isLargeDesktop:a,children:m.jsx(_t,{modules:[cL,ai],pagination:{clickable:!0,dynamicBullets:!0},spaceBetween:a?0:16,loop:g,slidesPerView:h,centeredSlides:a,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,className:"businessSwiper",touchRatio:1.5,resistanceRatio:.5,children:f.map((w,b)=>m.jsx(Gt,{children:m.jsx(Jk,{style:{backgroundImage:`url(${w.image})`},$isLargeDesktop:a,className:"slide-container",children:(w.title||w.text||w.icon)&&m.jsxs(P.div,{className:"overlay",initial:"hidden",animate:o?"visible":"hidden",variants:y,whileHover:e?{}:{scale:1.02,transition:{duration:.2}},children:[(w.title||w.icon)&&m.jsxs(eV,{children:[w.title&&m.jsx(P.div,{variants:v,children:m.jsx(Wk,{children:w.title})}),w.icon&&m.jsx(P.div,{variants:v,transition:{delay:.1},children:m.jsx(tV,{className:"icon-wrapper",children:m.jsx("img",{src:w.icon,alt:w.title||"icon",className:"icon-image",loading:"lazy"})})})]}),w.text&&m.jsx(P.div,{variants:v,transition:{delay:.2},children:m.jsx(iV,{className:"slide-text",children:w.text})})]})})},b))})})})]})]})},HD=C.div`
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
`,ip=()=>m.jsx(m.Fragment,{children:m.jsxs(HD,{id:"hero",children:[m.jsx(VV,{}),m.jsx(_w,{}),m.jsx(zD,{}),m.jsx(Bw,{}),m.jsx(LD,{}),m.jsx(Iw,{}),m.jsx(ju,{}),m.jsx(HV,{}),m.jsx(Eu,{})]})}),PD=C.div`
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
  `,ND="/assets/Team%20Member%20Image-mppsJqlp.png",BD="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",$D=Zn`
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
`,ID=Zn`
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
`,UD=Zn`
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
`,Jp=C.p`
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
`,_D=C.button`
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
      ${ID} 1s ease,
      ${UD} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${$D} 1s ease;
    }

    ${Jp} {
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

    &:hover ${Jp} {
      transform: translateX(3px);
    }
  }
`,GD=C.div`
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
`,qD=C.div`
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
`,YD=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,FD=C.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,XD=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,ZD=C.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,WD=C.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,KD=C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,QD=C.div`
  position: relative;
  width: 44px;
  height: 44px;
`,JD=C.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,ez=C.p`
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
const tz=C.div`
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
`,iz=C.h2`
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
`;const nz=C.div`
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
`,az=C.button`
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
`,rz=C.div`
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
`,sz=C.img.attrs(()=>({}))`
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
`,oz=C.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,lz=C.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,q1=()=>{const[e,t]=R.useState(null),n=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],a=y=>{t(w=>w===y?null:y)},o={hidden:{opacity:0,scale:.8,rotate:-20,x:-50},visible:{opacity:1,scale:1,rotate:0,x:0,transition:{duration:1.2,ease:vi,delay:.2}},hover:{scale:1.05,rotate:5,transition:{duration:.4,ease:ie}}},l={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ie,delay:.4}},hover:{scale:1.1,boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:ie}},tap:{scale:.95}},u={hidden:{opacity:0,y:30,rotate:-5},visible:{opacity:1,y:0,rotate:0,transition:{duration:.9,ease:vi,delay:.6}},hover:{y:-5,rotate:2,transition:{duration:.3,ease:ie}}},d={hidden:{opacity:0,x:-100,rotate:-10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ie}}},f={hidden:{opacity:0,x:100,rotate:10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:ie}}},h={hidden:{opacity:0,height:0,scale:.9},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:ie}}},g={hidden:{opacity:0,y:-30,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,y:0,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 30px rgba(48, 152, 238, 0.8)","0 0 15px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ie,delay:.1}}},v=y=>y*.15;return m.jsxs(GD,{children:[m.jsxs(qD,{children:[m.jsxs(YD,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,whileHover:"hover",children:m.jsx(FD,{src:ND,alt:"Team Member Image"})}),m.jsxs(XD,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,children:m.jsx(ZD,{children:"Book a Call"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,transition:{delay:.2},children:m.jsx(WD,{children:"Time to get introduced and explore how we can help"})}),m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileTap:"tap",children:m.jsx("a",{href:"tel:+18055002705",children:m.jsxs(_D,{children:[m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),m.jsx(Jp,{children:"Call us now"})]})})})]})]}),m.jsx(KD,{children:m.jsxs(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,whileHover:"hover",children:[m.jsxs(QD,{children:[m.jsx(JD,{}),m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:m.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),m.jsxs(ez,{children:["Prefer email communication?",m.jsx("br",{}),m.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})})]}),m.jsxs(tz,{children:[m.jsx(oz,{children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,children:m.jsx(iz,{children:"Frequently Asked Questions"})})}),m.jsx(lz,{children:n.map((y,w)=>m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:w%2===0?d:f,transition:{delay:v(w)},children:m.jsxs(nz,{children:[m.jsxs(az,{onClick:()=>a(w),children:[y.question,m.jsx(sz,{src:BD,alt:"Toggle answer",$rotate:e===w})]}),m.jsx(P.div,{initial:"hidden",animate:e===w?"visible":"hidden",variants:h,style:{overflow:"hidden"},children:m.jsx(rz,{$isOpen:e===w,children:y.answer})})]})},w))})]})]})},cz=C.div`
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
`,uz=C.img`
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
`,dz=C.div`
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
`,fz=C.div`
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
`,pz=C.p`
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
`,hz=C.p`
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
`;C(St)`
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
`;Zn`
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
`;const mz="/assets/HeroImage2About-CoU9D2Tq.png",gz=()=>{const{scrollY:e}=Kn(),t=bt(e,[0,500],[0,150]),n=bt(e,[0,400],[1,1.1]),a=bt(e,[0,600],[0,-3]),o=bt(e,[0,300],[0,50]),l=bt(e,[0,200],[1,.8]),u={hidden:{opacity:0,x:-100,skewX:15},visible:{opacity:1,x:0,skewX:0,transition:{duration:1.2,ease:ie,delay:.5}}},d={hidden:{opacity:0,y:50,scaleY:0,filter:"blur(10px)"},visible:{opacity:1,y:0,scaleY:1,filter:"blur(0px)",transition:{duration:.8,ease:Uc,delay:.8}}},f={hidden:{opacity:0,y:80,rotateX:10},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1,ease:Uc,delay:.3}}},h={hidden:{opacity:0,scale:0,rotate:0},visible:{opacity:1,scale:1,rotate:360,transition:{duration:1.5,ease:ie,delay:1}}};return m.jsxs(cz,{id:"ap",children:[m.jsx(P.div,{style:{position:"absolute",top:"20%",left:"10%",width:"8px",height:"8px",background:"rgba(48, 152, 238, 0.6)",borderRadius:"50%",zIndex:2},variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3}}),m.jsx(P.div,{style:{position:"absolute",top:"60%",right:"15%",width:"12px",height:"12px",background:"rgba(48, 152, 238, 0.4)",borderRadius:"50%",zIndex:2},variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.5}}),m.jsx(P.div,{style:{position:"absolute",bottom:"30%",left:"20%",width:"6px",height:"6px",background:"rgba(48, 152, 238, 0.3)",borderRadius:"50%",zIndex:2},variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.8}}),m.jsx(P.div,{style:{y:t,scale:n,rotate:a},children:m.jsx(uz,{src:mz,alt:"Hero Image"})}),m.jsx(P.div,{style:{y:o,opacity:l},children:m.jsx(dz,{children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:m.jsxs(fz,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:m.jsx(hz,{children:"About Our Company and Team"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,children:m.jsx(pz,{children:"Fast, affordable, and trusted service"})})]})})})}),m.jsx(P.div,{style:{position:"absolute",top:"10%",right:"5%",width:"2px",height:"100px",background:"linear-gradient(to bottom, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,height:0},whileInView:{opacity:1,height:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.2}}),m.jsx(P.div,{style:{position:"absolute",bottom:"15%",left:"5%",width:"100px",height:"2px",background:"linear-gradient(to right, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,width:0},whileInView:{opacity:1,width:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.5}})]})},xz=C.section`
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
`,vz=C.div`
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
`,yz=C.h3`
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
`,np=C.span`
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
`,wz=C.div`
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
`,bz=C.div`
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
`,Uy=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,Sz=C.div`
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
`,Cz=C.div`
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
`,_y=C.p`
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
`,Tz=C.img`
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
`,Ez=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,jz="/assets/Services%20Image-e7Omvubx.png",Az="/assets/Team%20Image-CG0rB-nI.png",Mz=()=>{const e=Pe({query:"(min-width: 1440px)"}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ie}}},a={hidden:{opacity:0,x:30},visible:{opacity:1,x:0,transition:{duration:.8,ease:ie}}};return m.jsxs(xz,{children:[m.jsx(vz,{children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:m.jsxs(yz,{children:["Our mission is to provide ",m.jsx(np,{children:"reliable"})," and ",m.jsx(np,{children:"efficient"}),"appliance repair services that improve",m.jsx(np,{children:"everyday "}),"life"," "]})})}),m.jsxs(Ez,{children:[m.jsxs(Sz,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:m.jsx("img",{src:jz,alt:"image"})}),m.jsxs(bz,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.2},children:m.jsx(Uy,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.3},children:m.jsx(wz,{children:"Sanal Gariaev"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.4},children:m.jsx(Uy,{children:"Chief Executive Officer"})})]}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.5},children:m.jsxs(_y,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That's why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",m.jsx("br",{}),e&&m.jsxs(m.Fragment,{children:[m.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})]})})]}),m.jsxs(Cz,{children:[!e&&m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.6},children:m.jsxs(_y,{children:[m.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,transition:{delay:.7},children:m.jsx(Tz,{src:Az,alt:"team"})})]})]})]})},Oz=C.section`
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
`,Rz=C.p`
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
`,Lz=C.p`
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
`,kz=C.div`
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
`,Vz=C.div`
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
`,Dz=C.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,zz=C.div`
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
`,Hz=C.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem;
  }
`,Pz=C.p`
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
`,Nz=C.div`
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
`,Bz=C.p`
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
`,$z=C.p`
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
`,Iz=C.img`
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
`,Uz="/assets/ValueImage-GehUXRc0.png",_z="/assets/ValueImage1-XDPVu8iL.png",Gz="/assets/ValueImage2-CBdwtolx.png",qz="/assets/ValueImage3-4cmMPphm.png",Yz=()=>{const e=R.useRef(null),t=Tu(e,{once:!0,margin:"-20%"}),n=f=>({__html:f}),a={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},o={hidden:{opacity:0,y:30},visible:f=>({opacity:1,y:0,transition:{duration:.6,delay:f*.1}})},l={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4}}},u={hidden:{opacity:0,x:-10},visible:{opacity:1,x:0,transition:{duration:.5,delay:.1}}},d=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:Uz,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:_z,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:Gz,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:qz,alt:"Durable Repairs"}];return m.jsxs(Oz,{ref:e,children:[m.jsxs("div",{children:[m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:a,children:m.jsx(Rz,{children:"Our Values"})}),m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:a,transition:{delay:.1},children:m.jsxs(Lz,{children:["Core ",m.jsx("span",{children:"Principles"})," That Drive Us"]})})]}),m.jsx(kz,{children:d.map((f,h)=>m.jsx(P.div,{custom:h,initial:"hidden",animate:t?"visible":"hidden",variants:o,children:m.jsxs(Vz,{children:[m.jsx(Dz,{}),m.jsxs(zz,{children:[m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:l,children:m.jsx(Hz,{children:m.jsx(Pz,{children:f.number})})}),m.jsxs(Nz,{children:[m.jsx(Bz,{dangerouslySetInnerHTML:n(f.title)}),m.jsx($z,{children:f.description})]}),m.jsx(P.div,{initial:"hidden",animate:t?"visible":"hidden",variants:u,transition:{delay:h*.1+.1},children:m.jsx(Iz,{src:f.image,alt:f.alt})})]})]})},f.id))})]})},Fz=C.div`
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
`,Xz=C.p`
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
`,Zz=C.p`
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
`,Wz=C.div`
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
`,Gy=C.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
  }
`,mc=C.img`
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
`,Kz="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",Qz="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",Jz="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",eH="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",tH=()=>{const{scrollY:e}=Kn(),t=bt(e,[0,300],[0,50]),n=bt(e,[0,200],[1,.8]),a={hidden:{opacity:0,y:60,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:1.2,ease:ie}}},o={hidden:{opacity:0,scale:.8,borderRadius:"50%",filter:"blur(10px) grayscale(100%)"},visible:f=>({opacity:1,scale:1,borderRadius:"8px",filter:"blur(0px) grayscale(0%)",transition:{duration:1.4,delay:f*.2,ease:ie}}),hover:{scale:1.08,borderRadius:"4px",filter:"grayscale(0%) brightness(110%)",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.25)",zIndex:10,transition:{duration:.5,ease:ie}}},l={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:1,ease:ie,staggerChildren:.1}}},u={hidden:{opacity:0,scale:.5,color:"#000000"},visible:{opacity:1,scale:1,color:"#3098EE",transition:{duration:1.5,ease:ie,delay:.5}},hover:{scale:1.1,textShadow:"0 0 20px rgba(48, 152, 238, 0.8)",transition:{duration:.3,ease:ie}}},d={hidden:{opacity:0,y:80,rotateX:15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1.2,ease:ie}},hover:{y:-10,transition:{duration:.4,ease:ie}}};return m.jsxs(Fz,{children:[m.jsxs(P.div,{style:{y:t,opacity:n},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:l,children:[m.jsx(P.div,{variants:a,children:m.jsx(Xz,{children:"Meet the Team"})}),m.jsx(P.div,{variants:a,transition:{delay:.2},children:m.jsxs(Zz,{children:["Professionals committed to"," ",m.jsx(P.span,{variants:u,whileHover:"hover",children:"quality"})," ","service"]})})]}),m.jsxs(Wz,{children:[m.jsx(P.div,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(Gy,{children:[m.jsx(P.div,{custom:0,variants:o,whileHover:"hover",children:m.jsx(mc,{src:Kz,alt:"Team Member 1"})}),m.jsx(P.div,{custom:1,variants:o,whileHover:"hover",children:m.jsx(mc,{src:Qz,alt:"Team Member 2"})})]})}),m.jsx(P.div,{variants:d,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:.3},whileHover:"hover",children:m.jsxs(Gy,{children:[m.jsx(P.div,{custom:2,variants:o,whileHover:"hover",children:m.jsx(mc,{src:Jz,alt:"Team Member 3"})}),m.jsx(P.div,{custom:3,variants:o,whileHover:"hover",children:m.jsx(mc,{src:eH,alt:"Team Member 4"})})]})})]})]})},iH=()=>m.jsxs(PD,{children:[m.jsx(gz,{}),m.jsx(Mz,{}),m.jsx(Yz,{}),m.jsx(tH,{}),m.jsx(q1,{})]}),nH=C.div`
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
`;const aH=()=>m.jsxs(nH,{id:"ap",children:[m.jsx(Eu,{}),m.jsx(ju,{})]}),rH=C.div`
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
`,sH=C.div`
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
`,oH=C.h2`
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
`,lH=C.div`
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
`,cH=C(St)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,uH=C.div`
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
`,dH=C.img`
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
`,fH=C.h3`
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
`,pH=C.p`
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
`,hH=[{id:1,image:G1,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:Mu,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:_1,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:Ou,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:Ru,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:Au,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],mH={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie}}},gH={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ie}},hover:{y:-5,transition:{duration:.3,ease:ie}}},xH={hidden:{opacity:0,scale:1.05},visible:{opacity:1,scale:1,transition:{duration:.7,ease:ie}},hover:{scale:1.03,transition:{duration:.3,ease:ie}}},vH={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:ie}}},yH=()=>{const{scrollY:e}=Kn(),t=_O(),n=bt(e,[0,300],[0,30]);return R.useEffect(()=>{t.start("visible")},[t]),m.jsxs(sH,{id:"app",children:[m.jsx(P.div,{style:{y:n},initial:"hidden",animate:t,variants:mH,children:m.jsxs(oH,{children:["News ",m.jsx("span",{children:"Tips"})," "]})}),m.jsx(lH,{children:hH.map((a,o)=>m.jsx(cH,{to:a.path,children:m.jsx(P.div,{initial:"hidden",animate:t,variants:gH,transition:{delay:o*.1},whileHover:"hover",children:m.jsxs(uH,{children:[m.jsx(P.div,{variants:xH,transition:{delay:o*.1},whileHover:"hover",children:m.jsx(dH,{src:a.image,alt:a.title})}),m.jsx(P.div,{variants:vH,transition:{delay:o*.1+.2},children:m.jsxs("div",{children:[m.jsx(fH,{children:a.title}),m.jsx(pH,{children:a.description})]})})]})})},a.id))})]})},wH=()=>m.jsx(rH,{id:"app",children:m.jsx(yH,{})}),bH="/assets/Image1-oNBiuIma.png",SH="/assets/Image2-KhSZGRyT.png",CH="/assets/Image4-CFM8TNdX.png",TH="/assets/Image5-CmBoV_wK.png",EH=C.div`
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
`,jH=C.div`
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
`;C.p`
  padding: 10px auto 50px auto;
  width: 90%;
  height: 1px;
  margin: 20px auto;
  background: radial-gradient(ellipse 118.85px 58.06px at 50% 50%, rgb(252, 252, 252) 0%, rgba(58, 55, 55, 0.42) 80%);
`;C.div`
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  
  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;const qy=C.img`
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
`,AH=C(P.div)`
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
`,MH=C(P.div)`
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
`;C.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`;const OH=()=>{const e=Pe({query:"(max-width: 743px)"}),t=Pe({query:"(min-width: 744px) and (max-width: 1023px)"}),n=Pe({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:h1},{id:2,imageUrl:eu},{id:3,imageUrl:m1},{id:4,imageUrl:g1},{id:5,imageUrl:x1},{id:6,imageUrl:v1},{id:7,imageUrl:y1},{id:8,imageUrl:w1},{id:9,imageUrl:b1},{id:10,imageUrl:S1},{id:11,imageUrl:C1},{id:12,imageUrl:T1},{id:13,imageUrl:E1},{id:14,imageUrl:j1},{id:15,imageUrl:A1},{id:16,imageUrl:M1},{id:17,imageUrl:O1},{id:18,imageUrl:R1},{id:19,imageUrl:L1},{id:20,imageUrl:$w},{id:21,imageUrl:k1},{id:22,imageUrl:V1},{id:23,imageUrl:D1},{id:24,imageUrl:z1},{id:25,imageUrl:H1},{id:26,imageUrl:P1},{id:27,imageUrl:N1},{id:28,imageUrl:B1},{id:29,imageUrl:$1},{id:30,imageUrl:I1},{id:31,imageUrl:U1}],o=e?2:t?4:5,l=a.length>o;return m.jsx(EH,{children:m.jsxs(jH,{children:[m.jsx(AH,{}),m.jsx(_t,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[ai],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map(u=>m.jsx(Gt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:m.jsx(qy,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),m.jsx(_t,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[ai],className:"mySwiper",style:{width:"100%"},children:a.map(u=>m.jsx(Gt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:m.jsx(qy,{src:u.imageUrl,alt:`Partner ${u.id}`,loading:"lazy"})},u.id))}),m.jsx(MH,{})]})})},Yy=[{img:bH,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:SH,title:"Washing Machine",description:"Restoring heating and control functions."},{img:Mu,title:"Oven",description:"Fixing magnetron and door issues."},{img:CH,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:TH,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],RH=()=>{const e=R.useRef(null),t=Pe({query:"(max-width: 767px)"}),n=Pe({query:"(min-width: 768px) and (max-width: 1439px)"}),a=Pe({query:"(min-width: 1440px)"}),o=t?1:n?3:4,l=Yy.length>o,u=()=>{e.current&&e.current.slidePrev()},d=()=>{e.current&&e.current.slideNext()},f={hidden:{opacity:0,y:50,rotate:-5,scale:.9},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1,ease:ie,delay:.2}}},h={hidden:{opacity:0,y:100,rotateX:-45,scale:.8,filter:"blur(10px)"},visible:y=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:1.2,ease:ie,delay:y*.15}}),hover:{y:-20,rotateY:10,scale:1.05,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:ie}}},g={hidden:{opacity:0,scale:1.3,rotate:-5},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.5,ease:ie}},hover:{scale:1.1,rotate:2,transition:{duration:.6,ease:ie}}},v={hidden:{opacity:0,x:-50,y:30},visible:{opacity:1,x:0,y:0,transition:{duration:.8,ease:vi,delay:.3}},hover:{x:10,transition:{duration:.3}}};return m.jsxs(DH,{children:[m.jsxs(zH,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:m.jsx(HH,{children:"Our Equipment"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,transition:{delay:.1},children:m.jsxs(PH,{children:[m.jsx("span",{children:"Trusted"})," brands we service"]})})]}),m.jsx(OH,{}),m.jsxs(LH,{$isTablet:n,children:[m.jsx(_t,{modules:[f1,ai],onSwiper:y=>e.current=y,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:l,slidesPerView:o,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,children:Yy.map((y,w)=>m.jsx(Gt,{children:m.jsx(P.div,{custom:w,variants:h,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:m.jsxs(NH,{$isTablet:n,children:[m.jsx(P.div,{variants:g,whileHover:"hover",children:m.jsx(BH,{src:y.img,alt:y.title,$isTablet:n})}),m.jsx(P.div,{variants:v,whileHover:"hover",children:m.jsxs($H,{children:[m.jsx(IH,{$isTablet:n,children:y.title}),m.jsx(UH,{$isTablet:n,children:y.description})]})})]})})},w))}),m.jsxs(kH,{children:[m.jsx(Fy,{onClick:u,onMouseDown:y=>y.preventDefault(),children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),m.jsx(Fy,{onClick:d,onMouseDown:y=>y.preventDefault(),children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})]})},LH=C.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,kH=C.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`,VH=Zn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Fy=C.button`
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
    animation: ${VH} 0.3s ease;
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
`,DH=C.div`
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
`,zH=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,HH=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,PH=C.p`
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
`,NH=C.div`
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
`,BH=C.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`,$H=C.div`
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
`,IH=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"28px"};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,UH=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,_H="/assets/ProccessSection-CpT7luA8.png",GH=C.div`
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
`,qH=C.h2`
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
`,YH=C.p`
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
`,FH=C.div`
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
`,XH=C.div`
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
`,ZH=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,WH=C.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,KH=C.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,QH=C.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,JH=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:m.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:m.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:m.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],eP={hidden:{opacity:0,scale:0,rotate:-180},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.8,ease:vi,delay:.3}},hover:{rotate:360,scale:1.2,transition:{duration:.6,ease:ie}}},tP={hidden:{opacity:0,y:50,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:.8,ease:ie}}},iP={hidden:{opacity:0,x:-100,scale:.9},visible:e=>({opacity:1,x:0,scale:1,transition:{duration:.7,delay:e*.2,ease:ie}}),hover:{y:-15,scale:1.05,rotateY:10,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.4,ease:ie}}},Xy={hidden:{opacity:0,x:50,filter:"blur(10px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.9,ease:ie,delay:.5}}},nP={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:ie,delay:.2}}},aP=()=>m.jsxs(GH,{$bg:_H,children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:tP,children:m.jsx(qH,{children:"Our Process"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Xy,children:m.jsx(YH,{children:"Quick steps to fix appliances reliably"})}),m.jsx(FH,{children:JH.map((e,t)=>m.jsx(P.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:iP,whileHover:"hover",children:m.jsxs(XH,{children:[m.jsx(ZH,{children:m.jsx(P.div,{variants:eP,whileHover:"hover",children:m.jsx(WH,{children:e.icon})})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:nP,transition:{delay:t*.2+.3},children:m.jsx(KH,{children:e.title})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Xy,transition:{delay:t*.2+.4},children:m.jsx(QH,{children:e.text})})]})},t))})]}),rP=()=>m.jsxs(sP,{children:[m.jsx(_w,{}),m.jsx(RH,{}),m.jsx(Bw,{}),m.jsx(aP,{}),m.jsx(ju,{}),m.jsx(q1,{}),m.jsx(Eu,{})]}),sP=C.div`
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
`,oP=C.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,lP=C(St)`
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
`,cP=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,uP=C.h1`
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
`,dP=C.img`
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
`,fP=C.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`,pP=C.p`
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
`,hP=C.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,mP=C.h2`
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
`,gP=C.div`
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
`,xP=C(St)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,vP=C.div`
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
`,yP=C.img`
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
`,wP=C.h3`
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
`,bP=C.p`
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
`,SP=[{id:4,image:Ou,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:Ru,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:Au,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],CP=()=>m.jsxs(hP,{children:[m.jsx(mP,{children:m.jsx("span",{children:" Other news and tips"})}),m.jsx(gP,{children:SP.map(e=>m.jsx(xP,{to:e.path,children:m.jsxs(vP,{children:[m.jsx(yP,{src:e.image,alt:e.title}),m.jsxs("div",{children:[m.jsx(wP,{children:e.title}),m.jsx(bP,{children:e.description})]})]})},e.id))})]}),TP=[{id:1,image:G1,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, Airtexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:Mu,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: Airtexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:_1,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call Airtexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:Ou,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: Airtexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:Ru,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? Airtexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:Au,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you’ll often hear the term OEM parts. Here’s why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the exact parts your appliance was originally built with.

Why Choose OEM Over Aftermarket? <br/>
 • Reliability: Designed to fit perfectly and work as intended.
 <br/> • Warranty Protection: Helps maintain your manufacturer’s warranty.
 <br/> • Longevity: Aftermarket parts may fail sooner or perform inconsistently.

Examples:
Using a genuine Sub-Zero compressor instead of an aftermarket one ensures proper cooling performance. An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At Airtexno, we only use genuine OEM or manufacturer-approved parts for all appliance repairs in Thousand Oaks and Ventura County.`}],EP={hidden:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{duration:.8,ease:ie}},exit:{opacity:0,x:100,transition:{duration:.5,ease:ie}}},jP={hidden:{opacity:0,y:-30,rotate:-10},visible:{opacity:1,y:0,rotate:0,transition:{duration:.6,ease:vi,delay:.1}},hover:{scale:1.05,x:-5,transition:{duration:.2,ease:ie}},tap:{scale:.95}},AP={hidden:{opacity:0,y:50,scale:.9,textShadow:"0 0 0px rgba(0,0,0,0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(0,0,0,0)","0 0 30px rgba(0,0,0,0.3)","0 0 10px rgba(0,0,0,0.1)"],transition:{duration:1,ease:vi,delay:.2}}},MP={hidden:{opacity:0,scale:1.2,rotate:-5,filter:"blur(10px)"},visible:{opacity:1,scale:1,rotate:0,filter:"blur(0px)",transition:{duration:1.2,ease:vi,delay:.3}}},OP={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:ie,delay:.4}}},RP={hidden:{opacity:0,y:20,skewY:2},visible:e=>({opacity:1,y:0,skewY:0,transition:{duration:.6,ease:ie,delay:.5+e*.05}})},LP={hidden:{opacity:0,scale:.8,rotateX:-90},visible:{opacity:1,scale:1,rotateX:0,transition:{duration:.7,ease:vi,delay:.1}}},mr=({articleId:e})=>{const{id:t}=d9(),n=e||parseInt(t||"1"),a=TP.find(f=>f.id===n),{scrollY:o}=Kn(),l=bt(o,[0,500],[0,50]),u=bt(o,[0,300],[1,.9]);if(R.useEffect(()=>{const f=window.location.hash;if(f){const h=document.querySelector(f);h&&setTimeout(()=>{h.scrollIntoView({behavior:"smooth"})},500)}},[a]),!a)return m.jsx("div",{children:"Article not found"});const d=a.content.split(`

`);return m.jsx(P.div,{variants:EP,initial:"hidden",animate:"visible",exit:"exit",style:{y:l,opacity:u},children:m.jsxs(oP,{id:"ap",children:[m.jsx(P.div,{variants:jP,whileHover:"hover",whileTap:"tap",children:m.jsx(lP,{to:"/tips",children:"← Back to Tips"})}),m.jsx(P.div,{variants:LP,children:m.jsx(cP,{children:a.data})}),m.jsx(P.div,{variants:AP,children:m.jsx(uP,{children:a.title})}),m.jsx(P.div,{variants:MP,children:m.jsx(dP,{src:a.image,alt:a.title})}),m.jsx(P.div,{variants:OP,children:m.jsx(fP,{children:d.map((f,h)=>m.jsxs(P.div,{custom:h,variants:RP,initial:"hidden",animate:"visible",children:[m.jsx(pP,{dangerouslySetInnerHTML:{__html:f}}),h<d.length-1&&m.jsx(m.Fragment,{children:m.jsx("br",{})})]},h))})}),m.jsx(P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:m.jsx(CP,{})})]})})},kP=C.div`
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
`,VP=C.div`
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
`,ap=C.p`
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
`,DP=C.div`
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
`,zP=C.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,HP=C.img`
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
`,PP=C.p`
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
`,NP=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  
  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`,BP=C(St)`
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
`,Y1=C.button`
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
`,Gw=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Y1}:hover & {
    color: white;
  }
`,$P=C(Gw)`
  color: #242424;

  ${Y1}:hover & {
    color: white;
  }
`,rp=C.div`
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
`,sp=C.div`
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
`,Zy=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  min-width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding: 1rem;
  padding-top: 150px;
  
  /* Оптимізація для iOS */
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
  }
`,IP=C.img`
  display: none;
  @media (min-width: 1440px) {
    display: flex;
    padding-top: 20%;
  }
`,Wy=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,Ky=C.div`
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
`,Qy=C.div`
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
`,gc=C.img`
  padding: 8px;
  border-radius: 8px;
  object-fit: cover;
  
  /* Оптимізація для мобільних пристроїв */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`,Jy=C.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,e4=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  
  /* Запобігання випадковим клікам на мобільних */
  touch-action: manipulation;
`,t4=C.button`
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
`,eh=C.button`
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
`,th=C.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,i4=C(th)`
  color: #242424;

  ${eh}:hover & {
    color: #fff;
  }
`,UP=C.div`
  width: 553px;
  height: 396px;
`,_P=C.div`
  width: 668px;
  height: 583px;
`;C.div`
  /* Запобігання випадковим масштабуванням на iOS */
  input, textarea, select {
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
`;const op="/assets/fridge-AVDSsy-j.png",n4="/assets/fridge1-CZ9QJ0bU.png",GP="/assets/rating-D_Pf9sUB.svg",qP=()=>{const e=Pe({query:"(min-width: 768px) and (max-width: 1439px)"}),t=Pe({query:"(min-width: 1440px)"}),n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:ie}}},a={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.7,ease:ie,delay:.1}}},o={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:ie,delay:.2}}},l={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.4,ease:ie,delay:.3}}},u={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.4,ease:ie}}};return t?m.jsxs(Zy,{children:[m.jsxs(UP,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:m.jsxs(ap,{children:[m.jsx("span",{children:"Refrigeration"})," maintenance ",m.jsx("span",{children:"and "})," setup services"]})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:m.jsx(Jy,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),m.jsxs(e4,{children:[m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx(t4,{children:m.jsx(th,{children:"Contact Us"})})}),m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx(eh,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(i4,{children:"Call Us"})})})})]}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:m.jsx(IP,{src:GP,alt:"⭐⭐⭐⭐⭐",loading:"lazy"})})]}),m.jsx(_P,{children:m.jsx(Wy,{children:m.jsxs(Ky,{children:[m.jsxs(Qy,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:m.jsx(gc,{src:op,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"})}),m.jsx(rp,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive at your home in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from our own warehouse"}].map((d,f)=>m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:u,transition:{delay:f*.1},children:m.jsxs(sp,{children:[m.jsx("span",{style:{fontSize:"20px"},children:d.icon}),m.jsx("p",{children:d.text})]})},f))})]}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:m.jsx(gc,{src:n4,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})})]})})})]}):e?m.jsxs(Zy,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:m.jsxs(ap,{children:[m.jsx("span",{children:"Refrigeration"})," maintenance ",m.jsx("span",{children:"and "})," setup services"]})}),m.jsxs(Wy,{children:[m.jsxs(Ky,{children:[m.jsxs(Qy,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:m.jsx(gc,{src:op,alt:"Why Airtexno Image 1",className:"main-image",loading:"lazy"})}),m.jsx(rp,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((d,f)=>m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:u,transition:{delay:f*.1},children:m.jsxs(sp,{children:[m.jsx("span",{style:{fontSize:"18px"},children:d.icon}),m.jsx("p",{children:d.text})]})},f))})]}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:m.jsx(gc,{src:n4,alt:"Why Airtexno Image 2",className:"secondary-image",loading:"lazy"})})]}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:m.jsx(Jy,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),m.jsxs(e4,{children:[m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx(t4,{children:m.jsx(th,{children:"Contact Us"})})}),m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx(eh,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(i4,{children:"Call Us"})})})})]})]})]}):m.jsxs(VP,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:m.jsxs(ap,{children:[m.jsx("span",{children:"Refrigeration"})," maintenance ",m.jsx("span",{children:"and "})," setup services"]})}),m.jsxs(DP,{children:[m.jsxs(zP,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:a,children:m.jsx(HP,{src:op,alt:"Why Airtexno Image 1",loading:"lazy"})}),m.jsx(rp,{children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((d,f)=>m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:u,transition:{delay:f*.1},children:m.jsxs(sp,{children:[m.jsx("span",{style:{fontSize:"16px"},children:d.icon}),m.jsx("p",{children:d.text})]})},f))})]}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:o,children:m.jsx(PP,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),m.jsxs(NP,{children:[m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx(BP,{to:"/contact#ap",children:m.jsx(Gw,{children:"Contact Us"})})}),m.jsx(P.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:m.jsx(Y1,{children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx($P,{children:"Call Us"})})})})]})]})]})},YP=Zn`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,FP=C.div`
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
`,XP=C.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,ZP=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${YP} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,WP=C.div`
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
`,KP=C.div`
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
`,QP=C.div`
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
`,JP=C.div`
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
`,eN=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,tN=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,iN=C.p`
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
`,nN=C.h2`
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
`,aN=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,rN=C.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,sN=C(St)`
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
`,oN=C.button`
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
`,lN=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span> $250 </span>"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from <span> $55 </span> "}],t={hidden:{opacity:0,y:50,scale:.9,rotate:-2},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:.8,ease:ie}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:ie,delay:.2}}},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:ie}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return m.jsx(QP,{children:m.jsxs(JP,{children:[m.jsxs(eN,{children:[m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:m.jsx(iN,{children:"Typical Refrigerator Issues We Fix"})}),m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:m.jsxs(nN,{children:["Professional Refrigerator Repair ",m.jsx("span",{children:" and Installation Services"})]})})]}),m.jsxs(tN,{children:[m.jsx(cN,{services:e}),m.jsxs(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:[m.jsx(aN,{children:"Having issues with your fridge? Call us today — we'll fix it and restore normal operation fast."}),m.jsxs(rN,{children:[m.jsx(P.div,{variants:a,whileHover:"hover",whileTap:"tap",children:m.jsx(sN,{to:"/contact#ap",children:"Contact Us"})}),m.jsx(P.div,{variants:a,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:m.jsx("a",{href:"tel:+18055002705",children:m.jsx(oN,{children:"Call Us"})})})]})]})]})]})})},cN=({services:e})=>{const{scrollY:t}=Kn(),n=bt(t,[0,1e3],[0,200]),a=bt(t,[0,800],[0,1]),o=[...e,...e],l={hidden:d=>({opacity:0,y:100,scale:.8,rotateX:-45,filter:"blur(5px)"}),visible:d=>({opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:{duration:.7,delay:d*.1,ease:vi}}),hover:{scale:1.02,y:-5,rotateY:3,boxShadow:"0 15px 30px rgba(0,0,0,0.15)",transition:{duration:.3,ease:ie}}},u={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:ie,delay:.2}}};return m.jsx(P.div,{style:{y:n,rotate:a},children:m.jsx(FP,{children:m.jsx(XP,{children:m.jsx(ZP,{children:o.map((d,f)=>m.jsx(P.div,{custom:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:l,whileHover:"hover",children:m.jsx(WP,{children:m.jsx(P.div,{variants:u,children:m.jsxs(KP,{children:[m.jsx("h3",{children:d.title}),m.jsx("p",{children:d.description}),m.jsx("p",{dangerouslySetInnerHTML:{__html:d.price}})]})})})},f))})})})})},uN="/assets/1-BfPZdbUH.png",dN="/assets/2-zYtOs5TG.png",fN="/assets/3-SBPgwxa7.png",pN="/assets/4-CWtM_DtU.png",hN="/assets/5-DO04-jdm.png",a4=[{img:uN,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:dN,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:fN,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:pN,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:hN,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."}],mN=()=>{const e=R.useRef(null),t=Pe({query:"(max-width: 767px)"}),n=Pe({query:"(min-width: 768px) and (max-width: 1439px)"}),a=Pe({query:"(min-width: 1440px)"}),o=t?1:n?2:a?4:2,l=a4.length>o,{scrollY:u}=Kn(),d=bt(u,[0,500],[0,80]),f=bt(u,[0,300],[1,1.05]),h={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.8,ease:ie}}},g={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:ie}}},v={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:ie}}},y={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.4,ease:ie}}},w={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:ie}}};return m.jsxs(yN,{children:[m.jsx(P.div,{style:{y:d,scale:f},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:w,children:m.jsxs(wN,{children:[m.jsx(bN,{children:"Refrigerator Repair"}),m.jsxs(SN,{children:["We repair ",m.jsx("span",{children:" all types "})," of refrigerators"]})]})}),m.jsxs(gN,{children:[m.jsx(_t,{modules:[f1,ai],onSwiper:b=>e.current=b,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,loop:l,slidesPerView:o,centeredSlides:t,touchRatio:1.5,touchAngle:45,simulateTouch:!0,allowTouchMove:!0,resistance:!0,resistanceRatio:.85,children:a4.map((b,j)=>m.jsx(Gt,{children:m.jsx(P.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:g,children:m.jsxs(CN,{children:[m.jsx(P.div,{variants:h,children:m.jsx(TN,{src:b.img,alt:b.title,loading:"lazy",decoding:"async"})}),m.jsx(P.div,{variants:v,children:m.jsxs(EN,{children:[m.jsx(jN,{children:b.title}),m.jsx(AN,{children:b.description})]})})]})})},j))}),m.jsxs(vN,{children:[m.jsx(P.div,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:m.jsx(r4,{onClick:()=>{var b;return(b=e.current)==null?void 0:b.slidePrev()},bg:"#DBDBD8",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),m.jsx(P.div,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},children:m.jsx(r4,{onClick:()=>{var b;return(b=e.current)==null?void 0:b.slideNext()},bg:"#3098EE",children:m.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})]})},gN=C.div`
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
`,xN=Zn`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,vN=C.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,r4=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: ${e=>e.bg};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  touch-action: manipulation;

  &:hover {
    animation: ${xN} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    ${e=>e.bg==="#DBDBD8"&&Pr`
        background-color: #c8c8c5;
      `}

    ${e=>e.bg==="#3098EE"&&Pr`
        background-color: #2580d6;
      `}
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;
  }
`,yN=C.div`
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
`,wN=C.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,bN=C.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,SN=C.p`
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
`,CN=C.div`
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
`,TN=C.img`
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
`,EN=C.div`
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
`,jN=C.p`
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
`,AN=C.p`
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
`,MN=()=>m.jsxs(kP,{id:"ap",children:[m.jsx(qP,{}),m.jsx(Iw,{}),m.jsx(lN,{}),m.jsx(mN,{}),m.jsx(ju,{}),m.jsx(q1,{}),m.jsx(Eu,{})]}),$t=({children:e})=>m.jsx("div",{style:{width:"100%",position:"relative"},children:e}),ON=()=>{const e=wi();return m.jsxs(m.Fragment,{children:[" ",m.jsx(Jh,{mode:"wait",children:m.jsxs(M9,{location:e,children:[m.jsx(pt,{path:"/",element:m.jsx(E9,{to:"/home"})}),m.jsxs(pt,{path:"/",element:m.jsx(QR,{}),children:[m.jsx(pt,{index:!0,element:m.jsx($t,{children:m.jsx(ip,{})})}),m.jsx(pt,{path:"/home",element:m.jsx($t,{children:m.jsx(ip,{})})}),m.jsx(pt,{path:"/service",element:m.jsx($t,{children:m.jsx(rP,{})})}),m.jsx(pt,{path:"/about",element:m.jsx($t,{children:m.jsx(iH,{})})}),m.jsxs(pt,{path:"/tips",children:[m.jsx(pt,{index:!0,element:m.jsx($t,{children:m.jsx(wH,{})})}),m.jsx(pt,{path:"refrigerator-maintenance",element:m.jsx($t,{children:m.jsx(mr,{articleId:1})})}),m.jsx(pt,{path:"oven-repair-signs",element:m.jsx($t,{children:m.jsx(mr,{articleId:2})})}),m.jsx(pt,{path:"laundry-appliance-maintenance",element:m.jsx($t,{children:m.jsx(mr,{articleId:3})})}),m.jsx(pt,{path:"dishwasher-drainage",element:m.jsx($t,{children:m.jsx(mr,{articleId:4})})}),m.jsx(pt,{path:"repair-vs-replace",element:m.jsx($t,{children:m.jsx(mr,{articleId:5})})}),m.jsx(pt,{path:"oem-parts",element:m.jsx($t,{children:m.jsx(mr,{articleId:6})})})]}),m.jsx(pt,{path:"/contact",element:m.jsx($t,{children:m.jsx(aH,{})})}),m.jsx(pt,{path:"/fridge",element:m.jsx($t,{children:m.jsx(MN,{})})}),m.jsx(pt,{path:"*",element:m.jsx($t,{children:m.jsx(ip,{})})})]})]},e.pathname)})]})},xe=e=>typeof e=="string",io=()=>{let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n},s4=e=>e==null?"":""+e,RN=(e,t,n)=>{e.forEach(a=>{t[a]&&(n[a]=t[a])})},LN=/###/g,o4=e=>e&&e.indexOf("###")>-1?e.replace(LN,"."):e,l4=e=>!e||xe(e),ho=(e,t,n)=>{const a=xe(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(l4(e))return{};const l=o4(a[o]);!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return l4(e)?{}:{obj:e,k:o4(a[o])}},c4=(e,t,n)=>{const{obj:a,k:o}=ho(e,t,Object);if(a!==void 0||t.length===1){a[o]=n;return}let l=t[t.length-1],u=t.slice(0,t.length-1),d=ho(e,u,Object);for(;d.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),d=ho(e,u,Object),d!=null&&d.obj&&typeof d.obj[`${d.k}.${l}`]<"u"&&(d.obj=void 0);d.obj[`${d.k}.${l}`]=n},kN=(e,t,n,a)=>{const{obj:o,k:l}=ho(e,t,Object);o[l]=o[l]||[],o[l].push(n)},iu=(e,t)=>{const{obj:n,k:a}=ho(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},VN=(e,t,n)=>{const a=iu(e,n);return a!==void 0?a:iu(t,n)},qw=(e,t,n)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?xe(e[a])||e[a]instanceof String||xe(t[a])||t[a]instanceof String?n&&(e[a]=t[a]):qw(e[a],t[a],n):e[a]=t[a]);return e},gr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var DN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const zN=e=>xe(e)?e.replace(/[&<>"'\/]/g,t=>DN[t]):e;class HN{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const PN=[" ",",","?","!",";"],NN=new HN(20),BN=(e,t,n)=>{t=t||"",n=n||"";const a=PN.filter(u=>t.indexOf(u)<0&&n.indexOf(u)<0);if(a.length===0)return!0;const o=NN.getRegExp(`(${a.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(n);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},ih=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(n);let o=e;for(let l=0;l<a.length;){if(!o||typeof o!="object")return;let u,d="";for(let f=l;f<a.length;++f)if(f!==l&&(d+=n),d+=a[f],u=o[d],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<a.length-1)continue;l+=f-l+1;break}o=u}return o},nu=e=>e==null?void 0:e.replace("_","-"),$N={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var n,a;(a=(n=console==null?void 0:console[e])==null?void 0:n.apply)==null||a.call(n,console,t)}};class au{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||$N,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,a,o){return o&&!this.debug?null:(xe(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new au(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new au(this.logger,t)}}var $i=new au;class Lu{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[d,f]=u;for(let h=0;h<f;h++)d(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[d,f]=u;for(let h=0;h<f;h++)d.apply(d,[t,...a])})}}class u4 extends Lu{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,a){var h,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;t.indexOf(".")>-1?d=t.split("."):(d=[t,n],a&&(Array.isArray(a)?d.push(...a):xe(a)&&l?d.push(...a.split(l)):d.push(a)));const f=iu(this.data,d);return!f&&!n&&!a&&t.indexOf(".")>-1&&(t=d[0],n=d[1],a=d.slice(2).join(".")),f||!u||!xe(a)?f:ih((g=(h=this.data)==null?void 0:h[t])==null?void 0:g[n],a,l)}addResource(t,n,a,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let d=[t,n];a&&(d=d.concat(u?a.split(u):a)),t.indexOf(".")>-1&&(d=t.split("."),o=n,n=d[1]),this.addNamespaces(n),c4(this.data,d,o),l.silent||this.emit("added",t,n,a,o)}addResources(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in a)(xe(a[l])||Array.isArray(a[l]))&&this.addResource(t,n,l,a[l],{silent:!0});o.silent||this.emit("added",t,n,a)}addResourceBundle(t,n,a,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},d=[t,n];t.indexOf(".")>-1&&(d=t.split("."),o=a,a=n,n=d[1]),this.addNamespaces(n);let f=iu(this.data,d)||{};u.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?qw(f,a,l):f={...f,...a},c4(this.data,d,f),u.silent||this.emit("added",t,n,a)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Yw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,a,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,n,a,o))??t}),t}};const d4={},f4=e=>!xe(e)&&typeof e!="boolean"&&typeof e!="number";class ru extends Lu{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),RN(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=$i.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,n);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let l=n.ns||this.options.defaultNS||[];const u=a&&t.indexOf(a)>-1,d=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!BN(t,a,o);if(u&&!d){const f=t.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:t,namespaces:xe(l)?[l]:l};const h=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(h[0])>-1)&&(l=h.shift()),t=h.join(o)}return{key:t,namespaces:xe(l)?[l]:l}}translate(t,n,a){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,l=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:u,namespaces:d}=this.extractFromKey(t[t.length-1],n),f=d[d.length-1],h=n.lng||this.language,g=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((h==null?void 0:h.toLowerCase())==="cimode"){if(g){const K=n.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${K}${u}`,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:f,usedParams:this.getUsedParamsDetails(n)}:`${f}${K}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:h,usedNS:f,usedParams:this.getUsedParamsDetails(n)}:u}const v=this.resolve(t,n);let y=v==null?void 0:v.res;const w=(v==null?void 0:v.usedKey)||u,b=(v==null?void 0:v.exactUsedKey)||u,j=["[object Number]","[object Function]","[object RegExp]"],L=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,T=n.count!==void 0&&!xe(n.count),E=ru.hasDefaultValue(n),V=T?this.pluralResolver.getSuffix(h,n.count,n):"",O=n.ordinal&&T?this.pluralResolver.getSuffix(h,n.count,{ordinal:!1}):"",N=T&&!n.ordinal&&n.count===0,H=N&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${V}`]||n[`defaultValue${O}`]||n.defaultValue;let U=y;M&&!y&&E&&(U=H);const Y=f4(U),F=Object.prototype.toString.apply(U);if(M&&U&&Y&&j.indexOf(F)<0&&!(xe(L)&&Array.isArray(U))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const K=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,U,{...n,ns:d}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(v.res=K,v.usedParams=this.getUsedParamsDetails(n),v):K}if(l){const K=Array.isArray(U),ne=K?[]:{},le=K?b:w;for(const de in U)if(Object.prototype.hasOwnProperty.call(U,de)){const oe=`${le}${l}${de}`;E&&!y?ne[de]=this.translate(oe,{...n,defaultValue:f4(H)?H[de]:void 0,joinArrays:!1,ns:d}):ne[de]=this.translate(oe,{...n,joinArrays:!1,ns:d}),ne[de]===oe&&(ne[de]=U[de])}y=ne}}else if(M&&xe(L)&&Array.isArray(y))y=y.join(L),y&&(y=this.extendTranslation(y,t,n,a));else{let K=!1,ne=!1;!this.isValidLookup(y)&&E&&(K=!0,y=H),this.isValidLookup(y)||(ne=!0,y=u);const de=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ne?void 0:y,oe=E&&H!==y&&this.options.updateMissing;if(ne||K||oe){if(this.logger.log(oe?"updateKey":"missingKey",h,f,u,oe?H:y),l){const te=this.resolve(u,{...n,keySeparator:!1});te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $=[];const W=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&W&&W[0])for(let te=0;te<W.length;te++)$.push(W[te]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(n.lng||this.language):$.push(n.lng||this.language);const J=(te,k,X)=>{var re;const ae=E&&X!==y?X:de;this.options.missingKeyHandler?this.options.missingKeyHandler(te,f,k,ae,oe,n):(re=this.backendConnector)!=null&&re.saveMissing&&this.backendConnector.saveMissing(te,f,k,ae,oe,n),this.emit("missingKey",te,f,k,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?$.forEach(te=>{const k=this.pluralResolver.getSuffixes(te,n);N&&n[`defaultValue${this.options.pluralSeparator}zero`]&&k.indexOf(`${this.options.pluralSeparator}zero`)<0&&k.push(`${this.options.pluralSeparator}zero`),k.forEach(X=>{J([te],u+X,n[`defaultValue${X}`]||H)})}):J($,u,H))}y=this.extendTranslation(y,t,n,v,a),ne&&y===u&&this.options.appendNamespaceToMissingKey&&(y=`${f}:${u}`),(ne||K)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,K?y:void 0))}return o?(v.res=y,v.usedParams=this.getUsedParamsDetails(n),v):y}extendTranslation(t,n,a,o,l){var h,g;var u=this;if((h=this.i18nFormat)!=null&&h.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const v=xe(t)&&(((g=a==null?void 0:a.interpolation)==null?void 0:g.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(v){const b=t.match(this.interpolator.nestingRegexp);y=b&&b.length}let w=a.replace&&!xe(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(w={...this.options.interpolation.defaultVariables,...w}),t=this.interpolator.interpolate(t,w,a.lng||this.language||o.usedLng,a),v){const b=t.match(this.interpolator.nestingRegexp),j=b&&b.length;y<j&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var b=arguments.length,j=new Array(b),L=0;L<b;L++)j[L]=arguments[L];return(l==null?void 0:l[0])===j[0]&&!a.context?(u.logger.warn(`It seems you are nesting recursively key: ${j[0]} in key: ${n[0]}`),null):u.translate(...j,n)},a)),a.interpolation&&this.interpolator.reset()}const d=a.postProcess||this.options.postProcess,f=xe(d)?[d]:d;return t!=null&&(f!=null&&f.length)&&a.applyPostProcessor!==!1&&(t=Yw.handle(f,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,l,u,d;return xe(t)&&(t=[t]),t.forEach(f=>{if(this.isValidLookup(a))return;const h=this.extractFromKey(f,n),g=h.key;o=g;let v=h.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const y=n.count!==void 0&&!xe(n.count),w=y&&!n.ordinal&&n.count===0,b=n.context!==void 0&&(xe(n.context)||typeof n.context=="number")&&n.context!=="",j=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);v.forEach(L=>{var M,T;this.isValidLookup(a)||(d=L,!d4[`${j[0]}-${L}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((T=this.utils)!=null&&T.hasLoadedNamespace(d))&&(d4[`${j[0]}-${L}`]=!0,this.logger.warn(`key "${o}" for languages "${j.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),j.forEach(E=>{var N;if(this.isValidLookup(a))return;u=E;const V=[g];if((N=this.i18nFormat)!=null&&N.addLookupKeys)this.i18nFormat.addLookupKeys(V,g,E,L,n);else{let H;y&&(H=this.pluralResolver.getSuffix(E,n.count,n));const U=`${this.options.pluralSeparator}zero`,Y=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(V.push(g+H),n.ordinal&&H.indexOf(Y)===0&&V.push(g+H.replace(Y,this.options.pluralSeparator)),w&&V.push(g+U)),b){const F=`${g}${this.options.contextSeparator}${n.context}`;V.push(F),y&&(V.push(F+H),n.ordinal&&H.indexOf(Y)===0&&V.push(F+H.replace(Y,this.options.pluralSeparator)),w&&V.push(F+U))}}let O;for(;O=V.pop();)this.isValidLookup(a)||(l=O,a=this.getResource(E,L,O,n))}))})}),{res:a,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:d}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,a){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,n,a,o):this.resourceStore.getResource(t,n,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!xe(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const l of n)delete o[l]}return o}static hasDefaultValue(t){const n="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&n===a.substring(0,n.length)&&t[a]!==void 0)return!0;return!1}}class p4{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=$i.create("languageUtils")}getScriptPartFromCode(t){if(t=nu(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=nu(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(xe(t)&&t.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(t)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(a=>{if(n)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),xe(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let a=t[n];return a||(a=t[this.getScriptPartFromCode(n)]),a||(a=t[this.formatLanguageCode(n)]),a||(a=t[this.getLanguagePartFromCode(n)]),a||(a=t.default),a||[]}toResolveHierarchy(t,n){const a=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return xe(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):xe(t)&&l(this.formatLanguageCode(t)),a.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const h4={zero:0,one:1,two:2,few:3,many:4,other:5},m4={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class IN{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=$i.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=nu(t==="dev"?"en":t),o=n.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:a,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),m4;if(!t.match(/-|_/))return m4;const f=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(f,n)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,l)=>h4[o]-h4[l]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",n,a))}}const g4=function(e,t,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=VN(e,t,n);return!l&&o&&xe(n)&&(l=ih(e,n,a),l===void 0&&(l=ih(t,n,a))),l},lp=e=>e.replace(/\$/g,"$$$$");class UN{constructor(){var n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=$i.create("interpolator"),this.options=t,this.format=((n=t==null?void 0:t.interpolation)==null?void 0:n.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:d,suffixEscaped:f,formatSeparator:h,unescapeSuffix:g,unescapePrefix:v,nestingPrefix:y,nestingPrefixEscaped:w,nestingSuffix:b,nestingSuffixEscaped:j,nestingOptionsSeparator:L,maxReplaces:M,alwaysFormat:T}=t.interpolation;this.escape=n!==void 0?n:zN,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?gr(l):u||"{{",this.suffix=d?gr(d):f||"}}",this.formatSeparator=h||",",this.unescapePrefix=g?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?gr(y):w||gr("$t("),this.nestingSuffix=b?gr(b):j||gr(")"),this.nestingOptionsSeparator=L||",",this.maxReplaces=M||1e3,this.alwaysFormat=T!==void 0?T:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,a)=>(n==null?void 0:n.source)===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,a,o){var w;let l,u,d;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=b=>{if(b.indexOf(this.formatSeparator)<0){const T=g4(n,f,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,a,{...o,...n,interpolationkey:b}):T}const j=b.split(this.formatSeparator),L=j.shift().trim(),M=j.join(this.formatSeparator).trim();return this.format(g4(n,f,L,this.options.keySeparator,this.options.ignoreJSONStructure),M,a,{...o,...n,interpolationkey:L})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,v=((w=o==null?void 0:o.interpolation)==null?void 0:w.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>lp(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?lp(this.escape(b)):lp(b)}].forEach(b=>{for(d=0;l=b.regex.exec(t);){const j=l[1].trim();if(u=h(j),u===void 0)if(typeof g=="function"){const M=g(t,l,o);u=xe(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,j))u="";else if(v){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${t}`),u="";else!xe(u)&&!this.useRawValueToEscape&&(u=s4(u));const L=b.safeValue(u);if(t=t.replace(l[0],L),v?(b.regex.lastIndex+=u.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,d++,d>=this.maxReplaces)break}}),t}nest(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const d=(f,h)=>{const g=this.nestingOptionsSeparator;if(f.indexOf(g)<0)return f;const v=f.split(new RegExp(`${g}[ ]*{`));let y=`{${v[1]}`;f=v[0],y=this.interpolate(y,u);const w=y.match(/'/g),b=y.match(/"/g);(((w==null?void 0:w.length)??0)%2===0&&!b||b.length%2!==0)&&(y=y.replace(/'/g,'"'));try{u=JSON.parse(y),h&&(u={...h,...u})}catch(j){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,j),`${f}${g}${y}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f};for(;o=this.nestingRegexp.exec(t);){let f=[];u={...a},u=u.replace&&!xe(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let h=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(v=>v.trim());o[1]=g.shift(),f=g,h=!0}if(l=n(d.call(this,o[1].trim(),u),u),l&&o[0]===t&&!xe(l))return l;xe(l)||(l=s4(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),h&&(l=f.reduce((g,v)=>this.format(g,v,a.lng,{...a,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const _N=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(u=>{if(u){const[d,...f]=u.split(":"),h=f.join(":").trim().replace(/^'+|'+$/g,""),g=d.trim();n[g]||(n[g]=h),h==="false"&&(n[g]=!1),h==="true"&&(n[g]=!0),isNaN(h)||(n[g]=parseInt(h,10))}})}return{formatName:t,formatOptions:n}},xr=e=>{const t={};return(n,a,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=a+JSON.stringify(l);let d=t[u];return d||(d=e(nu(a),o),t[u]=d),d(n)}};class GN{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=$i.create("formatter"),this.options=t,this.formats={number:xr((n,a)=>{const o=new Intl.NumberFormat(n,{...a});return l=>o.format(l)}),currency:xr((n,a)=>{const o=new Intl.NumberFormat(n,{...a,style:"currency"});return l=>o.format(l)}),datetime:xr((n,a)=>{const o=new Intl.DateTimeFormat(n,{...a});return l=>o.format(l)}),relativetime:xr((n,a)=>{const o=new Intl.RelativeTimeFormat(n,{...a});return l=>o.format(l,a.range||"day")}),list:xr((n,a)=>{const o=new Intl.ListFormat(n,{...a});return l=>o.format(l)})},this.init(t)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=xr(n)}format(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=n.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(d=>d.indexOf(")")>-1)){const d=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,d)].join(this.formatSeparator)}return l.reduce((d,f)=>{var v;const{formatName:h,formatOptions:g}=_N(f);if(this.formats[h]){let y=d;try{const w=((v=o==null?void 0:o.formatParams)==null?void 0:v[o.interpolationkey])||{},b=w.locale||w.lng||o.locale||o.lng||a;y=this.formats[h](d,b,{...g,...o,...w})}catch(w){this.logger.warn(w)}return y}else this.logger.warn(`there was no format function for ${h}`);return d},t)}}const qN=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class YN extends Lu{constructor(t,n,a){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=$i.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,a,o.backend,o)}queueLoad(t,n,a,o){const l={},u={},d={},f={};return t.forEach(h=>{let g=!0;n.forEach(v=>{const y=`${h}|${v}`;!a.reload&&this.store.hasResourceBundle(h,v)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?u[y]===void 0&&(u[y]=!0):(this.state[y]=1,g=!1,u[y]===void 0&&(u[y]=!0),l[y]===void 0&&(l[y]=!0),f[v]===void 0&&(f[v]=!0)))}),g||(d[h]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(d),toLoadNamespaces:Object.keys(f)}}loaded(t,n,a){const o=t.split("|"),l=o[0],u=o[1];n&&this.emit("failedLoading",l,u,n),!n&&a&&this.store.addResourceBundle(l,u,a,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&a&&(this.state[t]=0);const d={};this.queue.forEach(f=>{kN(f.loaded,[l],u),qN(f,t),n&&f.errors.push(n),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(h=>{d[h]||(d[h]={});const g=f.loaded[h];g.length&&g.forEach(v=>{d[h][v]===void 0&&(d[h][v]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",d),this.queue=this.queue.filter(f=>!f.done)}read(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:a,tried:o,wait:l,callback:u});return}this.readingCalls++;const d=(h,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(h&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,a,o+1,l*2,u)},l);return}u(h,g)},f=this.backend[a].bind(this.backend);if(f.length===2){try{const h=f(t,n);h&&typeof h.then=="function"?h.then(g=>d(null,g)).catch(d):d(null,h)}catch(h){d(h)}return}return f(t,n,d)}prepareLoading(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();xe(t)&&(t=this.languageUtils.toResolveHierarchy(t)),xe(n)&&(n=[n]);const l=this.queueLoad(t,n,a,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,n,a){this.prepareLoading(t,n,{},a)}reload(t,n,a){this.prepareLoading(t,n,{reload:!0},a)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],l=a[1];this.read(o,l,"read",void 0,void 0,(u,d)=>{u&&this.logger.warn(`${n}loading namespace ${l} for language ${o} failed`,u),!u&&d&&this.logger.log(`${n}loaded namespace ${l} for language ${o}`,d),this.loaded(t,u,d)})}saveMissing(t,n,a,o,l){var f,h,g,v,y;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((h=(f=this.services)==null?void 0:f.utils)!=null&&h.hasLoadedNamespace&&!((v=(g=this.services)==null?void 0:g.utils)!=null&&v.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((y=this.backend)!=null&&y.create){const w={...u,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let j;b.length===5?j=b(t,n,a,o,w):j=b(t,n,a,o),j&&typeof j.then=="function"?j.then(L=>d(null,L)).catch(d):d(null,j)}catch(j){d(j)}else b(t,n,a,o,d,w)}!t||!t[0]||this.store.addResource(t[0],n,a,o)}}}const x4=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),xe(e[1])&&(t.defaultValue=e[1]),xe(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(a=>{t[a]=n[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),v4=e=>{var t,n;return xe(e.ns)&&(e.ns=[e.ns]),xe(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),xe(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((n=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:n.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},xc=()=>{},FN=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class jo extends Lu{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=v4(t),this.services={},this.logger=$i,this.modules={external:[]},FN(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(a=n,n={}),n.defaultNS==null&&n.ns&&(xe(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=x4();this.options={...o,...this.options,...v4(n)},this.options.interpolation={...o.interpolation,...this.options.interpolation},n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?$i.init(l(this.modules.logger),this.options):$i.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=GN;const v=new p4(this.options);this.store=new u4(this.options.resources,this.options);const y=this.services;y.logger=$i,y.resourceStore=this.store,y.languageUtils=v,y.pluralResolver=new IN(v,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new UN(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new YN(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(w){for(var b=arguments.length,j=new Array(b>1?b-1:0),L=1;L<b;L++)j[L-1]=arguments[L];t.emit(w,...j)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new ru(this.services,this.options),this.translator.on("*",function(w){for(var b=arguments.length,j=new Array(b>1?b-1:0),L=1;L<b;L++)j[L-1]=arguments[L];t.emit(w,...j)}),this.modules.external.forEach(w=>{w.init&&w.init(this)})}if(this.format=this.options.interpolation.format,a||(a=xc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const f=io(),h=()=>{const g=(v,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(y),a(v,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),f}loadResources(t){var l,u;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xc;const o=xe(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const d=[],f=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(v=>{v!=="cimode"&&d.indexOf(v)<0&&d.push(v)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>f(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,h=>f(h)),this.services.backendConnector.load(d,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(h)})}else a(null)}reloadResources(t,n,a){const o=io();return typeof t=="function"&&(a=t,t=void 0),typeof n=="function"&&(a=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),a||(a=xc),this.services.backendConnector.reload(t,n,l=>{o.resolve(),a(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Yw.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,n){var a=this;this.isLanguageChangingTo=t;const o=io();this.emit("languageChanging",t);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,h)=>{h?(l(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),n&&n(f,function(){return a.t(...arguments)})},d=f=>{var g,v;!t&&!f&&this.services.languageDetector&&(f=[]);const h=xe(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);h&&(this.language||l(h),this.translator.language||this.translator.changeLanguage(h),(v=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||v.call(g,h)),this.loadResources(h,y=>{u(y,h)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(t),o}getFixedT(t,n,a){var o=this;const l=function(u,d){let f;if(typeof d!="object"){for(var h=arguments.length,g=new Array(h>2?h-2:0),v=2;v<h;v++)g[v-2]=arguments[v];f=o.options.overloadTranslationOptionHandler([u,d].concat(g))}else f={...d};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||a||l.keyPrefix);const y=o.options.keySeparator||".";let w;return f.keyPrefix&&Array.isArray(u)?w=u.map(b=>`${f.keyPrefix}${y}${b}`):w=f.keyPrefix?`${f.keyPrefix}${y}${u}`:u,o.t(w,f)};return xe(t)?l.lng=t:l.lngs=t,l.ns=n,l.keyPrefix=a,l}t(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...n)}exists(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...n)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const u=(d,f)=>{const h=this.services.backendConnector.state[`${d}|${f}`];return h===-1||h===0||h===2};if(n.precheck){const d=n.precheck(this,u);if(d!==void 0)return d}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(a,t)&&(!o||u(l,t)))}loadNamespaces(t,n){const a=io();return this.options.ns?(xe(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(t,n){const a=io();xe(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{a.resolve(),n&&n(u)}),a):(n&&n(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((l=this.services)==null?void 0:l.languageUtils)||new p4(x4());return n.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new jo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xc;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new jo(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(d=>{l[d]=this[d]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},a){const d=Object.keys(this.store.data).reduce((f,h)=>(f[h]={...this.store.data[h]},Object.keys(f[h]).reduce((g,v)=>(g[v]={...f[h][v]},g),{})),{});l.store=new u4(d,o),l.services.resourceStore=l.store}return l.translator=new ru(l.services,o),l.translator.on("*",function(d){for(var f=arguments.length,h=new Array(f>1?f-1:0),g=1;g<f;g++)h[g-1]=arguments[g];l.emit(d,...h)}),l.init(o,n),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Rt=jo.createInstance();Rt.createInstance=jo.createInstance;Rt.createInstance;Rt.dir;Rt.init;Rt.loadResources;Rt.reloadResources;Rt.use;Rt.changeLanguage;Rt.getFixedT;Rt.t;Rt.exists;Rt.setDefaultNamespace;Rt.hasLoadedNamespace;Rt.loadNamespaces;Rt.loadLanguages;function nh(e){"@babel/helpers - typeof";return nh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nh(e)}function Fw(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":nh(XMLHttpRequest))==="object"}function XN(e){return!!e&&typeof e.then=="function"}function ZN(e){return XN(e)?e:Promise.resolve(e)}const WN="modulepreload",KN=function(e){return"/"+e},y4={},QN=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=u(n.map(h=>{if(h=KN(h),h in y4)return;y4[h]=!0;const g=h.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":WN,g||(y.as="script"),y.crossOrigin="",y.href=h,f&&y.setAttribute("nonce",f),document.head.appendChild(y),g)return new Promise((w,b)=>{y.addEventListener("load",w),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})};function w4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function b4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w4(Object(n),!0).forEach(function(a){JN(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w4(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function JN(e,t,n){return(t=eB(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eB(e){var t=tB(e,"string");return Aa(t)=="symbol"?t:t+""}function tB(e,t){if(Aa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(Aa(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Aa(e){"@babel/helpers - typeof";return Aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Aa(e)}var Xn=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Xn=global.fetch:typeof window<"u"&&window.fetch&&(Xn=window.fetch);var Ao;Fw()&&(typeof global<"u"&&global.XMLHttpRequest?Ao=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ao=window.XMLHttpRequest));var su;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?su=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(su=window.ActiveXObject));typeof Xn!="function"&&(Xn=void 0);if(!Xn&&!Ao&&!su)try{QN(()=>import("./browser-ponyfill-aN0DzNP3.js").then(e=>e.b),[]).then(function(e){Xn=e.default}).catch(function(){})}catch{}var ah=function(t,n){if(n&&Aa(n)==="object"){var a="";for(var o in n)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},S4=function(t,n,a,o){var l=function(f){if(!f.ok)return a(f.statusText||"Error",{status:f.status});f.text().then(function(h){a(null,{status:f.status,data:h})}).catch(a)};if(o){var u=o(t,n);if(u instanceof Promise){u.then(l).catch(a);return}}typeof fetch=="function"?fetch(t,n).then(l).catch(a):Xn(t,n).then(l).catch(a)},C4=!1,iB=function(t,n,a,o){t.queryStringParams&&(n=ah(n,t.queryStringParams));var l=b4({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,d=b4({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:l},C4?{}:u),f=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{S4(n,d,o,f)}catch(h){if(!u||Object.keys(u).length===0||!h.message||h.message.indexOf("not implemented")<0)return o(h);try{Object.keys(u).forEach(function(g){delete d[g]}),S4(n,d,o,f),C4=!0}catch(g){o(g)}}},nB=function(t,n,a,o){a&&Aa(a)==="object"&&(a=ah("",a).slice(1)),t.queryStringParams&&(n=ah(n,t.queryStringParams));try{var l=Ao?new Ao:new su("MSXML2.XMLHTTP.3.0");l.open(a?"POST":"GET",n,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,a&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var d in u)l.setRequestHeader(d,u[d]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(a)}catch(f){console&&console.log(f)}},aB=function(t,n,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},Xn&&n.indexOf("file:")!==0)return iB(t,n,a,o);if(Fw()||typeof ActiveXObject=="function")return nB(t,n,a,o);o(new Error("No fetch and no xhr implementation found!"))};function $r(e){"@babel/helpers - typeof";return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$r(e)}function T4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function cp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T4(Object(n),!0).forEach(function(a){Xw(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T4(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function rB(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sB(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,Zw(a.key),a)}}function oB(e,t,n){return t&&sB(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xw(e,t,n){return(t=Zw(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zw(e){var t=lB(e,"string");return $r(t)=="symbol"?t:t+""}function lB(e,t){if($r(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if($r(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var cB=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,a,o){return Xw({},a,o||"")},parseLoadPayload:function(n,a){},request:aB,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Ww=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};rB(this,e),this.services=t,this.options=n,this.allOptions=a,this.type="backend",this.init(t,n,a)}return oB(e,[{key:"init",value:function(n){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=n,this.options=cp(cp(cp({},cB()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return a.reload()},this.options.reloadInterval);$r(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(n,a,o){this._readAny(n,n,a,a,o)}},{key:"read",value:function(n,a,o){this._readAny([n],n,[a],a,o)}},{key:"_readAny",value:function(n,a,o,l,u){var d=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(n,o)),f=ZN(f),f.then(function(h){if(!h)return u(null,{});var g=d.services.interpolator.interpolate(h,{lng:n.join("+"),ns:o.join("+")});d.loadUrl(g,u,a,l)})}},{key:"loadUrl",value:function(n,a,o,l){var u=this,d=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,h=this.options.parseLoadPayload(d,f);this.options.request(this.options,n,h,function(g,v){if(v&&(v.status>=500&&v.status<600||!v.status))return a("failed loading "+n+"; status code: "+v.status,!0);if(v&&v.status>=400&&v.status<500)return a("failed loading "+n+"; status code: "+v.status,!1);if(!v&&g&&g.message){var y=g.message.toLowerCase(),w=["failed","fetch","network","load"].find(function(L){return y.indexOf(L)>-1});if(w)return a("failed loading "+n+": "+g.message,!0)}if(g)return a(g,!1);var b,j;try{typeof v.data=="string"?b=u.options.parse(v.data,o,l):b=v.data}catch{j="failed parsing "+n+" to json"}if(j)return a(j,!1);a(null,b)})}},{key:"create",value:function(n,a,o,l,u){var d=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var f=this.options.parsePayload(a,o,l),h=0,g=[],v=[];n.forEach(function(y){var w=d.options.addPath;typeof d.options.addPath=="function"&&(w=d.options.addPath(y,a));var b=d.services.interpolator.interpolate(w,{lng:y,ns:a});d.options.request(d.options,b,f,function(j,L){h+=1,g.push(j),v.push(L),h===n.length&&typeof u=="function"&&u(g,v)})})}}},{key:"reload",value:function(){var n=this,a=this.services,o=a.backendConnector,l=a.languageUtils,u=a.logger,d=o.language;if(!(d&&d.toLowerCase()==="cimode")){var f=[],h=function(v){var y=l.toResolveHierarchy(v);y.forEach(function(w){f.indexOf(w)<0&&f.push(w)})};h(d),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return h(g)}),f.forEach(function(g){n.allOptions.ns.forEach(function(v){o.read(g,v,"read",null,null,function(y,w){y&&u.warn("loading namespace ".concat(v," for language ").concat(g," failed"),y),!y&&w&&u.log("loaded namespace ".concat(v," for language ").concat(g),w),o.loaded("".concat(g,"|").concat(v),y,w)})})})}}}])}();Ww.type="backend";const{slice:uB,forEach:dB}=[];function fB(e){return dB.call(uB.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}function pB(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(e))}const E4=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,hB=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(a.maxAge>0){const u=a.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(a.domain){if(!E4.test(a.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${a.domain}`}if(a.path){if(!E4.test(a.path))throw new TypeError("option path is invalid");l+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(l+="; Partitioned"),l},j4={create(e,t,n,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+n*60*1e3)),a&&(o.domain=a),document.cookie=hB(e,t,o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let a=0;a<n.length;a++){let o=n[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var mB={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return j4.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:a,cookieDomain:o,cookieOptions:l}=t;n&&typeof document<"u"&&j4.create(n,e,a,o,l)}},gB={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let d=0;d<u.length;d++){const f=u[d].indexOf("=");f>0&&u[d].substring(0,f)===t&&(n=u[d].substring(f+1))}}return n}},xB={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:n}=e,a;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const d=u.split("&");for(let f=0;f<d.length;f++){const h=d[f].indexOf("=");h>0&&d[f].substring(0,h)===t&&(a=d[f].substring(h+1))}}if(a)return a;if(!a&&n>-1){const d=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(d)?(o=d[typeof n=="number"?n:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let vr=null;const A4=()=>{if(vr!==null)return vr;try{if(vr=typeof window<"u"&&window.localStorage!==null,!vr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{vr=!1}return vr};var vB={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&A4())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&A4()&&window.localStorage.setItem(n,e)}};let yr=null;const M4=()=>{if(yr!==null)return yr;try{if(yr=typeof window<"u"&&window.sessionStorage!==null,!yr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{yr=!1}return yr};var yB={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&M4())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&M4()&&window.sessionStorage.setItem(n,e)}},wB={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:a,language:o}=navigator;if(n)for(let l=0;l<n.length;l++)t.push(n[l]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},bB={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(n=a.getAttribute("lang")),n}},SB={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(o=n[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},CB={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,a=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[n]}};let Kw=!1;try{document.cookie,Kw=!0}catch{}const Qw=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];Kw||Qw.splice(1,1);const TB=()=>({order:Qw,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class Jw{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=fB(n,this.options||{},TB()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(mB),this.addDetector(gB),this.addDetector(vB),this.addDetector(yB),this.addDetector(wB),this.addDetector(bB),this.addDetector(SB),this.addDetector(CB),this.addDetector(xB)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(n=n.concat(o))}}),n=n.filter(a=>a!=null&&!pB(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}Jw.type="languageDetector";Rt.use(Ww).use(Jw).use(uR).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const EB=R.createContext(void 0),jB=({children:e})=>{const{i18n:t}=u1(),n=a=>{t.changeLanguage(a).then(()=>{window.location.reload()})};return m.jsx(EB.Provider,{value:{language:t.language,setLanguage:n},children:e})};Vb.createRoot(document.getElementById("root")).render(m.jsxs(je.StrictMode,{children:[m.jsx(QS,{styles:aC}),m.jsx(K9,{basename:"/",children:m.jsx(jB,{children:m.jsx(ON,{})})})]}));export{AB as c,ou as g};
