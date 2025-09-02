function Ab(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var uB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bf={exports:{}},Ys={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px;function Mb(){if(Px)return Ys;Px=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var d=null;if(l!==void 0&&(d=""+l),o.key!==void 0&&(d=""+o.key),"key"in o){l={};for(var u in o)u!=="key"&&(l[u]=o[u])}else l=o;return o=l.ref,{$$typeof:e,type:a,key:d,ref:o!==void 0?o:null,props:l}}return Ys.Fragment=t,Ys.jsx=n,Ys.jsxs=n,Ys}var Nx;function Lb(){return Nx||(Nx=1,Bf.exports=Mb()),Bf.exports}var f=Lb(),If={exports:{}},qs={},Uf={exports:{}},_f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x;function Ob(){return $x||($x=1,function(e){function t(B,W){var J=B.length;B.push(W);e:for(;0<J;){var ie=J-1>>>1,V=B[ie];if(0<o(V,W))B[ie]=W,B[J]=V,J=ie;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var W=B[0],J=B.pop();if(J!==W){B[0]=J;e:for(var ie=0,V=B.length,X=V>>>1;ie<X;){var ae=2*(ie+1)-1,re=B[ae],de=ae+1,Se=B[de];if(0>o(re,J))de<V&&0>o(Se,re)?(B[ie]=Se,B[de]=J,ie=de):(B[ie]=re,B[ae]=J,ie=ae);else if(de<V&&0>o(Se,J))B[ie]=Se,B[de]=J,ie=de;else break e}}return W}function o(B,W){var J=B.sortIndex-W.sortIndex;return J!==0?J:B.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();e.unstable_now=function(){return d.now()-u}}var p=[],m=[],g=1,v=null,y=3,C=!1,b=!1,j=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function k(B){for(var W=n(m);W!==null;){if(W.callback===null)a(m);else if(W.startTime<=B)a(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=n(m)}}function O(B){if(j=!1,k(B),!b)if(n(p)!==null)b=!0,N||(N=!0,ne());else{var W=n(m);W!==null&&oe(O,W.startTime-B)}}var N=!1,P=-1,_=5,q=-1;function F(){return L?!0:!(e.unstable_now()-q<_)}function K(){if(L=!1,N){var B=e.unstable_now();q=B;var W=!0;try{e:{b=!1,j&&(j=!1,E(P),P=-1),C=!0;var J=y;try{t:{for(k(B),v=n(p);v!==null&&!(v.expirationTime>B&&F());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,y=v.priorityLevel;var V=ie(v.expirationTime<=B);if(B=e.unstable_now(),typeof V=="function"){v.callback=V,k(B),W=!0;break t}v===n(p)&&a(p),k(B)}else a(p);v=n(p)}if(v!==null)W=!0;else{var X=n(m);X!==null&&oe(O,X.startTime-B),W=!1}}break e}finally{v=null,y=J,C=!1}W=void 0}}finally{W?ne():N=!1}}}var ne;if(typeof T=="function")ne=function(){T(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=K,ne=function(){ue.postMessage(null)}}else ne=function(){M(K,0)};function oe(B,W){P=M(function(){B(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(B){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var J=y;y=W;try{return B()}finally{y=J}},e.unstable_requestPaint=function(){L=!0},e.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=y;y=B;try{return W()}finally{y=J}},e.unstable_scheduleCallback=function(B,W,J){var ie=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ie+J:ie):J=ie,B){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=J+V,B={id:g++,callback:W,priorityLevel:B,startTime:J,expirationTime:V,sortIndex:-1},J>ie?(B.sortIndex=J,t(m,B),n(p)===null&&B===n(m)&&(j?(E(P),P=-1):j=!0,oe(O,J-ie))):(B.sortIndex=V,t(p,B),b||C||(b=!0,N||(N=!0,ne()))),B},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(B){var W=y;return function(){var J=y;y=W;try{return B.apply(this,arguments)}finally{y=J}}}}(_f)),_f}var Bx;function Rb(){return Bx||(Bx=1,Uf.exports=Ob()),Uf.exports}var Gf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function Vb(){if(Ix)return ve;Ix=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(V){return V===null||typeof V!="object"?null:(V=v&&V[v]||V["@@iterator"],typeof V=="function"?V:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function L(V,X,ae){this.props=V,this.context=X,this.refs=j,this.updater=ae||C}L.prototype.isReactComponent={},L.prototype.setState=function(V,X){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,X,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function M(){}M.prototype=L.prototype;function E(V,X,ae){this.props=V,this.context=X,this.refs=j,this.updater=ae||C}var T=E.prototype=new M;T.constructor=E,b(T,L.prototype),T.isPureReactComponent=!0;var k=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function P(V,X,ae,re,de,Se){return ae=Se.ref,{$$typeof:e,type:V,key:X,ref:ae!==void 0?ae:null,props:Se}}function _(V,X){return P(V.type,X,void 0,void 0,void 0,V.props)}function q(V){return typeof V=="object"&&V!==null&&V.$$typeof===e}function F(V){var X={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ae){return X[ae]})}var K=/\/+/g;function ne(V,X){return typeof V=="object"&&V!==null&&V.key!=null?F(""+V.key):X.toString(36)}function le(){}function ue(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(le,le):(V.status="pending",V.then(function(X){V.status==="pending"&&(V.status="fulfilled",V.value=X)},function(X){V.status==="pending"&&(V.status="rejected",V.reason=X)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function oe(V,X,ae,re,de){var Se=typeof V;(Se==="undefined"||Se==="boolean")&&(V=null);var pe=!1;if(V===null)pe=!0;else switch(Se){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(V.$$typeof){case e:case t:pe=!0;break;case g:return pe=V._init,oe(pe(V._payload),X,ae,re,de)}}if(pe)return de=de(V),pe=re===""?"."+ne(V,0):re,k(de)?(ae="",pe!=null&&(ae=pe.replace(K,"$&/")+"/"),oe(de,X,ae,"",function(Et){return Et})):de!=null&&(q(de)&&(de=_(de,ae+(de.key==null||V&&V.key===de.key?"":(""+de.key).replace(K,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var dt=re===""?".":re+":";if(k(V))for(var Re=0;Re<V.length;Re++)re=V[Re],Se=dt+ne(re,Re),pe+=oe(re,X,ae,Se,de);else if(Re=y(V),typeof Re=="function")for(V=Re.call(V),Re=0;!(re=V.next()).done;)re=re.value,Se=dt+ne(re,Re++),pe+=oe(re,X,ae,Se,de);else if(Se==="object"){if(typeof V.then=="function")return oe(ue(V),X,ae,re,de);throw X=String(V),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function B(V,X,ae){if(V==null)return V;var re=[],de=0;return oe(V,re,"","",function(Se){return X.call(ae,Se,de++)}),re}function W(V){if(V._status===-1){var X=V._result;X=X(),X.then(function(ae){(V._status===0||V._status===-1)&&(V._status=1,V._result=ae)},function(ae){(V._status===0||V._status===-1)&&(V._status=2,V._result=ae)}),V._status===-1&&(V._status=0,V._result=X)}if(V._status===1)return V._result.default;throw V._result}var J=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function ie(){}return ve.Children={map:B,forEach:function(V,X,ae){B(V,function(){X.apply(this,arguments)},ae)},count:function(V){var X=0;return B(V,function(){X++}),X},toArray:function(V){return B(V,function(X){return X})||[]},only:function(V){if(!q(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ve.Component=L,ve.Fragment=n,ve.Profiler=o,ve.PureComponent=E,ve.StrictMode=a,ve.Suspense=p,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ve.__COMPILER_RUNTIME={__proto__:null,c:function(V){return O.H.useMemoCache(V)}},ve.cache=function(V){return function(){return V.apply(null,arguments)}},ve.cloneElement=function(V,X,ae){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var re=b({},V.props),de=V.key,Se=void 0;if(X!=null)for(pe in X.ref!==void 0&&(Se=void 0),X.key!==void 0&&(de=""+X.key),X)!N.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(re[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)re.children=ae;else if(1<pe){for(var dt=Array(pe),Re=0;Re<pe;Re++)dt[Re]=arguments[Re+2];re.children=dt}return P(V.type,de,void 0,void 0,Se,re)},ve.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:l,_context:V},V},ve.createElement=function(V,X,ae){var re,de={},Se=null;if(X!=null)for(re in X.key!==void 0&&(Se=""+X.key),X)N.call(X,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(de[re]=X[re]);var pe=arguments.length-2;if(pe===1)de.children=ae;else if(1<pe){for(var dt=Array(pe),Re=0;Re<pe;Re++)dt[Re]=arguments[Re+2];de.children=dt}if(V&&V.defaultProps)for(re in pe=V.defaultProps,pe)de[re]===void 0&&(de[re]=pe[re]);return P(V,Se,void 0,void 0,null,de)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(V){return{$$typeof:u,render:V}},ve.isValidElement=q,ve.lazy=function(V){return{$$typeof:g,_payload:{_status:-1,_result:V},_init:W}},ve.memo=function(V,X){return{$$typeof:m,type:V,compare:X===void 0?null:X}},ve.startTransition=function(V){var X=O.T,ae={};O.T=ae;try{var re=V(),de=O.S;de!==null&&de(ae,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(ie,J)}catch(Se){J(Se)}finally{O.T=X}},ve.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ve.use=function(V){return O.H.use(V)},ve.useActionState=function(V,X,ae){return O.H.useActionState(V,X,ae)},ve.useCallback=function(V,X){return O.H.useCallback(V,X)},ve.useContext=function(V){return O.H.useContext(V)},ve.useDebugValue=function(){},ve.useDeferredValue=function(V,X){return O.H.useDeferredValue(V,X)},ve.useEffect=function(V,X,ae){var re=O.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(V,X)},ve.useId=function(){return O.H.useId()},ve.useImperativeHandle=function(V,X,ae){return O.H.useImperativeHandle(V,X,ae)},ve.useInsertionEffect=function(V,X){return O.H.useInsertionEffect(V,X)},ve.useLayoutEffect=function(V,X){return O.H.useLayoutEffect(V,X)},ve.useMemo=function(V,X){return O.H.useMemo(V,X)},ve.useOptimistic=function(V,X){return O.H.useOptimistic(V,X)},ve.useReducer=function(V,X,ae){return O.H.useReducer(V,X,ae)},ve.useRef=function(V){return O.H.useRef(V)},ve.useState=function(V){return O.H.useState(V)},ve.useSyncExternalStore=function(V,X,ae){return O.H.useSyncExternalStore(V,X,ae)},ve.useTransition=function(){return O.H.useTransition()},ve.version="19.1.1",ve}var Ux;function th(){return Ux||(Ux=1,Gf.exports=Vb()),Gf.exports}var Yf={exports:{}},Mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function kb(){if(_x)return Mt;_x=1;var e=th();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Mt.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(p,m,null,g)},Mt.flushSync=function(p){var m=d.T,g=a.p;try{if(d.T=null,a.p=2,p)return p()}finally{d.T=m,a.p=g,a.d.f()}},Mt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Mt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Mt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=u(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:C}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=u(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Mt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=u(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mt.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=u(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Mt.requestFormReset=function(p){a.d.r(p)},Mt.unstable_batchedUpdates=function(p,m){return p(m)},Mt.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},Mt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mt.version="19.1.1",Mt}var Gx;function Db(){if(Gx)return Yf.exports;Gx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Yf.exports=kb(),Yf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx;function Hb(){if(Yx)return qs;Yx=1;var e=Rb(),t=th(),n=Db();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,s=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(s=r.return),i=r.return;while(i)}return r.tag===3?s:null}function d(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function u(i){if(l(i)!==i)throw Error(a(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var s=i,c=r;;){var h=s.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===s)return u(h),i;if(x===c)return u(h),r;x=x.sibling}throw Error(a(188))}if(s.return!==c.return)s=h,c=x;else{for(var S=!1,A=h.child;A;){if(A===s){S=!0,s=h,c=x;break}if(A===c){S=!0,c=h,s=x;break}A=A.sibling}if(!S){for(A=x.child;A;){if(A===s){S=!0,s=x,c=h;break}if(A===c){S=!0,c=x,s=h;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?i:r}function m(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=m(i),r!==null)return r;i=i.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var le=Symbol.for("react.client.reference");function ue(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===le?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case L:return"Profiler";case j:return"StrictMode";case O:return"Suspense";case N:return"SuspenseList";case q:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case C:return"Portal";case T:return(i.displayName||"Context")+".Provider";case E:return(i._context.displayName||"Context")+".Consumer";case k:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:ue(i.type)||"Memo";case _:r=i._payload,i=i._init;try{return ue(i(r))}catch{}}return null}var oe=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ie=[],V=-1;function X(i){return{current:i}}function ae(i){0>V||(i.current=ie[V],ie[V]=null,V--)}function re(i,r){V++,ie[V]=i.current,i.current=r}var de=X(null),Se=X(null),pe=X(null),dt=X(null);function Re(i,r){switch(re(pe,r),re(Se,i),re(de,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?ux(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=ux(r),i=fx(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ae(de),re(de,i)}function Et(){ae(de),ae(Se),ae(pe)}function Qn(i){i.memoizedState!==null&&re(dt,i);var r=de.current,s=fx(r,i.type);r!==s&&(re(Se,i),re(de,s))}function Zi(i){Se.current===i&&(ae(de),ae(Se)),dt.current===i&&(ae(dt),Bs._currentValue=J)}var li=Object.prototype.hasOwnProperty,jd=e.unstable_scheduleCallback,Ad=e.unstable_cancelCallback,r8=e.unstable_shouldYield,s8=e.unstable_requestPaint,Vi=e.unstable_now,o8=e.unstable_getCurrentPriorityLevel,Y1=e.unstable_ImmediatePriority,q1=e.unstable_UserBlockingPriority,Po=e.unstable_NormalPriority,l8=e.unstable_LowPriority,F1=e.unstable_IdlePriority,c8=e.log,d8=e.unstable_setDisableYieldValue,Xr=null,Zt=null;function yn(i){if(typeof c8=="function"&&d8(i),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(Xr,i)}catch{}}var Wt=Math.clz32?Math.clz32:p8,u8=Math.log,f8=Math.LN2;function p8(i){return i>>>=0,i===0?32:31-(u8(i)/f8|0)|0}var No=256,$o=4194304;function Jn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Bo(i,r,s){var c=i.pendingLanes;if(c===0)return 0;var h=0,x=i.suspendedLanes,S=i.pingedLanes;i=i.warmLanes;var A=c&134217727;return A!==0?(c=A&~x,c!==0?h=Jn(c):(S&=A,S!==0?h=Jn(S):s||(s=A&~i,s!==0&&(h=Jn(s))))):(A=c&~x,A!==0?h=Jn(A):S!==0?h=Jn(S):s||(s=c&~i,s!==0&&(h=Jn(s)))),h===0?0:r!==0&&r!==h&&(r&x)===0&&(x=h&-h,s=r&-r,x>=s||x===32&&(s&4194048)!==0)?r:h}function Zr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function h8(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X1(){var i=No;return No<<=1,(No&4194048)===0&&(No=256),i}function Z1(){var i=$o;return $o<<=1,($o&62914560)===0&&($o=4194304),i}function Md(i){for(var r=[],s=0;31>s;s++)r.push(i);return r}function Wr(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function m8(i,r,s,c,h,x){var S=i.pendingLanes;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=s,i.entangledLanes&=s,i.errorRecoveryDisabledLanes&=s,i.shellSuspendCounter=0;var A=i.entanglements,D=i.expirationTimes,U=i.hiddenUpdates;for(s=S&~s;0<s;){var Z=31-Wt(s),ee=1<<Z;A[Z]=0,D[Z]=-1;var G=U[Z];if(G!==null)for(U[Z]=null,Z=0;Z<G.length;Z++){var Y=G[Z];Y!==null&&(Y.lane&=-536870913)}s&=~ee}c!==0&&W1(i,c,0),x!==0&&h===0&&i.tag!==0&&(i.suspendedLanes|=x&~(S&~r))}function W1(i,r,s){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Wt(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|s&4194090}function K1(i,r){var s=i.entangledLanes|=r;for(i=i.entanglements;s;){var c=31-Wt(s),h=1<<c;h&r|i[c]&r&&(i[c]|=r),s&=~h}}function Ld(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Od(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Q1(){var i=W.p;return i!==0?i:(i=window.event,i===void 0?32:Rx(i.type))}function g8(i,r){var s=W.p;try{return W.p=i,r()}finally{W.p=s}}var wn=Math.random().toString(36).slice(2),jt="__reactFiber$"+wn,zt="__reactProps$"+wn,Oa="__reactContainer$"+wn,Rd="__reactEvents$"+wn,x8="__reactListeners$"+wn,v8="__reactHandles$"+wn,J1="__reactResources$"+wn,Kr="__reactMarker$"+wn;function Vd(i){delete i[jt],delete i[zt],delete i[Rd],delete i[x8],delete i[v8]}function Ra(i){var r=i[jt];if(r)return r;for(var s=i.parentNode;s;){if(r=s[Oa]||s[jt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(i=gx(i);i!==null;){if(s=i[jt])return s;i=gx(i)}return r}i=s,s=i.parentNode}return null}function Va(i){if(i=i[jt]||i[Oa]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Qr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function ka(i){var r=i[J1];return r||(r=i[J1]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ut(i){i[Kr]=!0}var e2=new Set,t2={};function ea(i,r){Da(i,r),Da(i+"Capture",r)}function Da(i,r){for(t2[i]=r,i=0;i<r.length;i++)e2.add(r[i])}var y8=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),i2={},n2={};function w8(i){return li.call(n2,i)?!0:li.call(i2,i)?!1:y8.test(i)?n2[i]=!0:(i2[i]=!0,!1)}function Io(i,r,s){if(w8(r))if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+s)}}function Uo(i,r,s){if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+s)}}function Wi(i,r,s,c){if(c===null)i.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttributeNS(r,s,""+c)}}var kd,a2;function Ha(i){if(kd===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);kd=r&&r[1]||"",a2=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kd+i+a2}var Dd=!1;function Hd(i,r){if(!i||Dd)return"";Dd=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(Y){var G=Y}Reflect.construct(i,[],ee)}else{try{ee.call()}catch(Y){G=Y}i.call(ee.prototype)}}else{try{throw Error()}catch(Y){G=Y}(ee=i())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=c.DetermineComponentFrameRoot(),S=x[0],A=x[1];if(S&&A){var D=S.split(`
`),U=A.split(`
`);for(h=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(c===D.length||h===U.length)for(c=D.length-1,h=U.length-1;1<=c&&0<=h&&D[c]!==U[h];)h--;for(;1<=c&&0<=h;c--,h--)if(D[c]!==U[h]){if(c!==1||h!==1)do if(c--,h--,0>h||D[c]!==U[h]){var Z=`
`+D[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=h);break}}}finally{Dd=!1,Error.prepareStackTrace=s}return(s=i?i.displayName||i.name:"")?Ha(s):""}function b8(i){switch(i.tag){case 26:case 27:case 5:return Ha(i.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return Hd(i.type,!1);case 11:return Hd(i.type.render,!1);case 1:return Hd(i.type,!0);case 31:return Ha("Activity");default:return""}}function r2(i){try{var r="";do r+=b8(i),i=i.return;while(i);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ci(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function s2(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function S8(i){var r=s2(i)?"checked":"value",s=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,x=s.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return h.call(this)},set:function(S){c=""+S,x.call(this,S)}}),Object.defineProperty(i,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function _o(i){i._valueTracker||(i._valueTracker=S8(i))}function o2(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return i&&(c=s2(i)?i.checked?"true":"false":i.value),i=c,i!==s?(r.setValue(i),!0):!1}function Go(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var C8=/[\n"\\]/g;function di(i){return i.replace(C8,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function zd(i,r,s,c,h,x,S,A){i.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.type=S:i.removeAttribute("type"),r!=null?S==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+ci(r)):i.value!==""+ci(r)&&(i.value=""+ci(r)):S!=="submit"&&S!=="reset"||i.removeAttribute("value"),r!=null?Pd(i,S,ci(r)):s!=null?Pd(i,S,ci(s)):c!=null&&i.removeAttribute("value"),h==null&&x!=null&&(i.defaultChecked=!!x),h!=null&&(i.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+ci(A):i.removeAttribute("name")}function l2(i,r,s,c,h,x,S,A){if(x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(i.type=x),r!=null||s!=null){if(!(x!=="submit"&&x!=="reset"||r!=null))return;s=s!=null?""+ci(s):"",r=r!=null?""+ci(r):s,A||r===i.value||(i.value=r),i.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=A?i.checked:!!c,i.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(i.name=S)}function Pd(i,r,s){r==="number"&&Go(i.ownerDocument)===i||i.defaultValue===""+s||(i.defaultValue=""+s)}function za(i,r,s,c){if(i=i.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<i.length;s++)h=r.hasOwnProperty("$"+i[s].value),i[s].selected!==h&&(i[s].selected=h),h&&c&&(i[s].defaultSelected=!0)}else{for(s=""+ci(s),r=null,h=0;h<i.length;h++){if(i[h].value===s){i[h].selected=!0,c&&(i[h].defaultSelected=!0);return}r!==null||i[h].disabled||(r=i[h])}r!==null&&(r.selected=!0)}}function c2(i,r,s){if(r!=null&&(r=""+ci(r),r!==i.value&&(i.value=r),s==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=s!=null?""+ci(s):""}function d2(i,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(oe(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=ci(r),i.defaultValue=s,c=i.textContent,c===s&&c!==""&&c!==null&&(i.value=c)}function Pa(i,r){if(r){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=r;return}}i.textContent=r}var T8=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function u2(i,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,s):typeof s!="number"||s===0||T8.has(r)?r==="float"?i.cssFloat=s:i[r]=(""+s).trim():i[r]=s+"px"}function f2(i,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&u2(i,h,c)}else for(var x in r)r.hasOwnProperty(x)&&u2(i,x,r[x])}function Nd(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E8=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(i){return j8.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var $d=null;function Bd(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Na=null,$a=null;function p2(i){var r=Va(i);if(r&&(i=r.stateNode)){var s=i[zt]||null;e:switch(i=r.stateNode,r.type){case"input":if(zd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+di(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==i&&c.form===i.form){var h=c[zt]||null;if(!h)throw Error(a(90));zd(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===i.form&&o2(c)}break e;case"textarea":c2(i,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&za(i,!!s.multiple,r,!1)}}}var Id=!1;function h2(i,r,s){if(Id)return i(r,s);Id=!0;try{var c=i(r);return c}finally{if(Id=!1,(Na!==null||$a!==null)&&(Ol(),Na&&(r=Na,i=$a,$a=Na=null,p2(r),i)))for(r=0;r<i.length;r++)p2(i[r])}}function Jr(i,r){var s=i.stateNode;if(s===null)return null;var c=s[zt]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=!1;if(Ki)try{var es={};Object.defineProperty(es,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Ud=!1}var bn=null,_d=null,qo=null;function m2(){if(qo)return qo;var i,r=_d,s=r.length,c,h="value"in bn?bn.value:bn.textContent,x=h.length;for(i=0;i<s&&r[i]===h[i];i++);var S=s-i;for(c=1;c<=S&&r[s-c]===h[x-c];c++);return qo=h.slice(i,1<c?1-c:void 0)}function Fo(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Xo(){return!0}function g2(){return!1}function Pt(i){function r(s,c,h,x,S){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=S,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(s=i[A],this[A]=s?s(x):x[A]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Xo:g2,this.isPropagationStopped=g2,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),r}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Pt(ta),ts=g({},ta,{view:0,detail:0}),A8=Pt(ts),Gd,Yd,is,Wo=g({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==is&&(is&&i.type==="mousemove"?(Gd=i.screenX-is.screenX,Yd=i.screenY-is.screenY):Yd=Gd=0,is=i),Gd)},movementY:function(i){return"movementY"in i?i.movementY:Yd}}),x2=Pt(Wo),M8=g({},Wo,{dataTransfer:0}),L8=Pt(M8),O8=g({},ts,{relatedTarget:0}),qd=Pt(O8),R8=g({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),V8=Pt(R8),k8=g({},ta,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),D8=Pt(k8),H8=g({},ta,{data:0}),v2=Pt(H8),z8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $8(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=N8[i])?!!r[i]:!1}function Fd(){return $8}var B8=g({},ts,{key:function(i){if(i.key){var r=z8[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Fo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?P8[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(i){return i.type==="keypress"?Fo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),I8=Pt(B8),U8=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y2=Pt(U8),_8=g({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),G8=Pt(_8),Y8=g({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),q8=Pt(Y8),F8=g({},Wo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),X8=Pt(F8),Z8=g({},ta,{newState:0,oldState:0}),W8=Pt(Z8),K8=[9,13,27,32],Xd=Ki&&"CompositionEvent"in window,ns=null;Ki&&"documentMode"in document&&(ns=document.documentMode);var Q8=Ki&&"TextEvent"in window&&!ns,w2=Ki&&(!Xd||ns&&8<ns&&11>=ns),b2=" ",S2=!1;function C2(i,r){switch(i){case"keyup":return K8.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T2(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ba=!1;function J8(i,r){switch(i){case"compositionend":return T2(r);case"keypress":return r.which!==32?null:(S2=!0,b2);case"textInput":return i=r.data,i===b2&&S2?null:i;default:return null}}function e7(i,r){if(Ba)return i==="compositionend"||!Xd&&C2(i,r)?(i=m2(),qo=_d=bn=null,Ba=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return w2&&r.locale!=="ko"?null:r.data;default:return null}}var t7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E2(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!t7[i.type]:r==="textarea"}function j2(i,r,s,c){Na?$a?$a.push(c):$a=[c]:Na=c,r=zl(r,"onChange"),0<r.length&&(s=new Zo("onChange","change",null,s,c),i.push({event:s,listeners:r}))}var as=null,rs=null;function i7(i){sx(i,0)}function Ko(i){var r=Qr(i);if(o2(r))return i}function A2(i,r){if(i==="change")return r}var M2=!1;if(Ki){var Zd;if(Ki){var Wd="oninput"in document;if(!Wd){var L2=document.createElement("div");L2.setAttribute("oninput","return;"),Wd=typeof L2.oninput=="function"}Zd=Wd}else Zd=!1;M2=Zd&&(!document.documentMode||9<document.documentMode)}function O2(){as&&(as.detachEvent("onpropertychange",R2),rs=as=null)}function R2(i){if(i.propertyName==="value"&&Ko(rs)){var r=[];j2(r,rs,i,Bd(i)),h2(i7,r)}}function n7(i,r,s){i==="focusin"?(O2(),as=r,rs=s,as.attachEvent("onpropertychange",R2)):i==="focusout"&&O2()}function a7(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ko(rs)}function r7(i,r){if(i==="click")return Ko(r)}function s7(i,r){if(i==="input"||i==="change")return Ko(r)}function o7(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Kt=typeof Object.is=="function"?Object.is:o7;function ss(i,r){if(Kt(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var s=Object.keys(i),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!li.call(r,h)||!Kt(i[h],r[h]))return!1}return!0}function V2(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function k2(i,r){var s=V2(i);i=0;for(var c;s;){if(s.nodeType===3){if(c=i+s.textContent.length,i<=r&&c>=r)return{node:s,offset:r-i};i=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=V2(s)}}function D2(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?D2(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function H2(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Go(i.document);r instanceof i.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)i=r.contentWindow;else break;r=Go(i.document)}return r}function Kd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var l7=Ki&&"documentMode"in document&&11>=document.documentMode,Ia=null,Qd=null,os=null,Jd=!1;function z2(i,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Jd||Ia==null||Ia!==Go(c)||(c=Ia,"selectionStart"in c&&Kd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),os&&ss(os,c)||(os=c,c=zl(Qd,"onSelect"),0<c.length&&(r=new Zo("onSelect","select",null,r,s),i.push({event:r,listeners:c}),r.target=Ia)))}function ia(i,r){var s={};return s[i.toLowerCase()]=r.toLowerCase(),s["Webkit"+i]="webkit"+r,s["Moz"+i]="moz"+r,s}var Ua={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},eu={},P2={};Ki&&(P2=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function na(i){if(eu[i])return eu[i];if(!Ua[i])return i;var r=Ua[i],s;for(s in r)if(r.hasOwnProperty(s)&&s in P2)return eu[i]=r[s];return i}var N2=na("animationend"),$2=na("animationiteration"),B2=na("animationstart"),c7=na("transitionrun"),d7=na("transitionstart"),u7=na("transitioncancel"),I2=na("transitionend"),U2=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function Ci(i,r){U2.set(i,r),ea(r,[i])}var _2=new WeakMap;function ui(i,r){if(typeof i=="object"&&i!==null){var s=_2.get(i);return s!==void 0?s:(r={value:i,source:r,stack:r2(r)},_2.set(i,r),r)}return{value:i,source:r,stack:r2(r)}}var fi=[],_a=0,iu=0;function Qo(){for(var i=_a,r=iu=_a=0;r<i;){var s=fi[r];fi[r++]=null;var c=fi[r];fi[r++]=null;var h=fi[r];fi[r++]=null;var x=fi[r];if(fi[r++]=null,c!==null&&h!==null){var S=c.pending;S===null?h.next=h:(h.next=S.next,S.next=h),c.pending=h}x!==0&&G2(s,h,x)}}function Jo(i,r,s,c){fi[_a++]=i,fi[_a++]=r,fi[_a++]=s,fi[_a++]=c,iu|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function nu(i,r,s,c){return Jo(i,r,s,c),el(i)}function Ga(i,r){return Jo(i,null,null,r),el(i)}function G2(i,r,s){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s);for(var h=!1,x=i.return;x!==null;)x.childLanes|=s,c=x.alternate,c!==null&&(c.childLanes|=s),x.tag===22&&(i=x.stateNode,i===null||i._visibility&1||(h=!0)),i=x,x=x.return;return i.tag===3?(x=i.stateNode,h&&r!==null&&(h=31-Wt(s),i=x.hiddenUpdates,c=i[h],c===null?i[h]=[r]:c.push(r),r.lane=s|536870912),x):null}function el(i){if(50<Vs)throw Vs=0,df=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ya={};function f7(i,r,s,c){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(i,r,s,c){return new f7(i,r,s,c)}function au(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Qi(i,r){var s=i.alternate;return s===null?(s=Qt(i.tag,r,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=r,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&65011712,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,r=i.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s.refCleanup=i.refCleanup,s}function Y2(i,r){i.flags&=65011714;var s=i.alternate;return s===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,r=s.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function tl(i,r,s,c,h,x){var S=0;if(c=i,typeof i=="function")au(i)&&(S=1);else if(typeof i=="string")S=hb(i,s,de.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case q:return i=Qt(31,s,r,h),i.elementType=q,i.lanes=x,i;case b:return aa(s.children,h,x,r);case j:S=8,h|=24;break;case L:return i=Qt(12,s,r,h|2),i.elementType=L,i.lanes=x,i;case O:return i=Qt(13,s,r,h),i.elementType=O,i.lanes=x,i;case N:return i=Qt(19,s,r,h),i.elementType=N,i.lanes=x,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case M:case T:S=10;break e;case E:S=9;break e;case k:S=11;break e;case P:S=14;break e;case _:S=16,c=null;break e}S=29,s=Error(a(130,i===null?"null":typeof i,"")),c=null}return r=Qt(S,s,r,h),r.elementType=i,r.type=c,r.lanes=x,r}function aa(i,r,s,c){return i=Qt(7,i,c,r),i.lanes=s,i}function ru(i,r,s){return i=Qt(6,i,null,r),i.lanes=s,i}function su(i,r,s){return r=Qt(4,i.children!==null?i.children:[],i.key,r),r.lanes=s,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var qa=[],Fa=0,il=null,nl=0,pi=[],hi=0,ra=null,Ji=1,en="";function sa(i,r){qa[Fa++]=nl,qa[Fa++]=il,il=i,nl=r}function q2(i,r,s){pi[hi++]=Ji,pi[hi++]=en,pi[hi++]=ra,ra=i;var c=Ji;i=en;var h=32-Wt(c)-1;c&=~(1<<h),s+=1;var x=32-Wt(r)+h;if(30<x){var S=h-h%5;x=(c&(1<<S)-1).toString(32),c>>=S,h-=S,Ji=1<<32-Wt(r)+h|s<<h|c,en=x+i}else Ji=1<<x|s<<h|c,en=i}function ou(i){i.return!==null&&(sa(i,1),q2(i,1,0))}function lu(i){for(;i===il;)il=qa[--Fa],qa[Fa]=null,nl=qa[--Fa],qa[Fa]=null;for(;i===ra;)ra=pi[--hi],pi[hi]=null,en=pi[--hi],pi[hi]=null,Ji=pi[--hi],pi[hi]=null}var Vt=null,We=null,Ae=!1,oa=null,ki=!1,cu=Error(a(519));function la(i){var r=Error(a(418,""));throw ds(ui(r,i)),cu}function F2(i){var r=i.stateNode,s=i.type,c=i.memoizedProps;switch(r[jt]=i,r[zt]=c,s){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<Ds.length;s++)Te(Ds[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Te("invalid",r),l2(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),_o(r);break;case"select":Te("invalid",r);break;case"textarea":Te("invalid",r),d2(r,c.value,c.defaultValue,c.children),_o(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||dx(r.textContent,s)?(c.popover!=null&&(Te("beforetoggle",r),Te("toggle",r)),c.onScroll!=null&&Te("scroll",r),c.onScrollEnd!=null&&Te("scrollend",r),c.onClick!=null&&(r.onclick=Pl),r=!0):r=!1,r||la(i)}function X2(i){for(Vt=i.return;Vt;)switch(Vt.tag){case 5:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Vt=Vt.return}}function ls(i){if(i!==Vt)return!1;if(!Ae)return X2(i),Ae=!0,!1;var r=i.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=i.type,s=!(s!=="form"&&s!=="button")||jf(i.type,i.memoizedProps)),s=!s),s&&We&&la(i),X2(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(s=i.data,s==="/$"){if(r===0){We=Ei(i.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;i=i.nextSibling}We=null}}else r===27?(r=We,Pn(i.type)?(i=Of,Of=null,We=i):We=r):We=Vt?Ei(i.stateNode.nextSibling):null;return!0}function cs(){We=Vt=null,Ae=!1}function Z2(){var i=oa;return i!==null&&(Bt===null?Bt=i:Bt.push.apply(Bt,i),oa=null),i}function ds(i){oa===null?oa=[i]:oa.push(i)}var du=X(null),ca=null,tn=null;function Sn(i,r,s){re(du,r._currentValue),r._currentValue=s}function nn(i){i._currentValue=du.current,ae(du)}function uu(i,r,s){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===s)break;i=i.return}}function fu(i,r,s,c){var h=i.child;for(h!==null&&(h.return=i);h!==null;){var x=h.dependencies;if(x!==null){var S=h.child;x=x.firstContext;e:for(;x!==null;){var A=x;x=h;for(var D=0;D<r.length;D++)if(A.context===r[D]){x.lanes|=s,A=x.alternate,A!==null&&(A.lanes|=s),uu(x.return,s,i),c||(S=null);break e}x=A.next}}else if(h.tag===18){if(S=h.return,S===null)throw Error(a(341));S.lanes|=s,x=S.alternate,x!==null&&(x.lanes|=s),uu(S,s,i),S=null}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===i){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}}function us(i,r,s,c){i=null;for(var h=r,x=!1;h!==null;){if(!x){if((h.flags&524288)!==0)x=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var S=h.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=h.type;Kt(h.pendingProps.value,S.value)||(i!==null?i.push(A):i=[A])}}else if(h===dt.current){if(S=h.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(i!==null?i.push(Bs):i=[Bs])}h=h.return}i!==null&&fu(r,i,s,c),r.flags|=262144}function al(i){for(i=i.firstContext;i!==null;){if(!Kt(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function da(i){ca=i,tn=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function At(i){return W2(ca,i)}function rl(i,r){return ca===null&&da(i),W2(i,r)}function W2(i,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},tn===null){if(i===null)throw Error(a(308));tn=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else tn=tn.next=r;return s}var p7=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(s,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(s){return s()})}},h7=e.unstable_scheduleCallback,m7=e.unstable_NormalPriority,lt={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new p7,data:new Map,refCount:0}}function fs(i){i.refCount--,i.refCount===0&&h7(m7,function(){i.controller.abort()})}var ps=null,hu=0,Xa=0,Za=null;function g7(i,r){if(ps===null){var s=ps=[];hu=0,Xa=xf(),Za={status:"pending",value:void 0,then:function(c){s.push(c)}}}return hu++,r.then(K2,K2),r}function K2(){if(--hu===0&&ps!==null){Za!==null&&(Za.status="fulfilled");var i=ps;ps=null,Xa=0,Za=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function x7(i,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var Q2=B.S;B.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&g7(i,r),Q2!==null&&Q2(i,r)};var ua=X(null);function mu(){var i=ua.current;return i!==null?i:_e.pooledCache}function sl(i,r){r===null?re(ua,ua.current):re(ua,r.pool)}function J2(){var i=mu();return i===null?null:{parent:lt._currentValue,pool:i}}var hs=Error(a(460)),em=Error(a(474)),ol=Error(a(542)),gu={then:function(){}};function tm(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ll(){}function im(i,r,s){switch(s=i[s],s===void 0?i.push(r):s!==r&&(r.then(ll,ll),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,am(i),i;default:if(typeof r.status=="string")r.then(ll,ll);else{if(i=_e,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,am(i),i}throw ms=r,hs}}var ms=null;function nm(){if(ms===null)throw Error(a(459));var i=ms;return ms=null,i}function am(i){if(i===hs||i===ol)throw Error(a(483))}var Cn=!1;function xu(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vu(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Tn(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function En(i,r,s){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=el(i),G2(i,null,s),r}return Jo(i,c,r,s),el(i)}function gs(i,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,K1(i,s)}}function yu(i,r){var s=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};x===null?h=x=S:x=x.next=S,s=s.next}while(s!==null);x===null?h=x=r:x=x.next=r}else h=x=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,callbacks:c.callbacks},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=r:i.next=r,s.lastBaseUpdate=r}var wu=!1;function xs(){if(wu){var i=Za;if(i!==null)throw i}}function vs(i,r,s,c){wu=!1;var h=i.updateQueue;Cn=!1;var x=h.firstBaseUpdate,S=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var D=A,U=D.next;D.next=null,S===null?x=U:S.next=U,S=D;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==S&&(A===null?Z.firstBaseUpdate=U:A.next=U,Z.lastBaseUpdate=D))}if(x!==null){var ee=h.baseState;S=0,Z=U=D=null,A=x;do{var G=A.lane&-536870913,Y=G!==A.lane;if(Y?(Ee&G)===G:(c&G)===G){G!==0&&G===Xa&&(wu=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var me=i,fe=A;G=r;var Ie=s;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){ee=me.call(Ie,ee,G);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,G=typeof me=="function"?me.call(Ie,ee,G):me,G==null)break e;ee=g({},ee,G);break e;case 2:Cn=!0}}G=A.callback,G!==null&&(i.flags|=64,Y&&(i.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(U=Z=Y,D=ee):Z=Z.next=Y,S|=G;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);Z===null&&(D=ee),h.baseState=D,h.firstBaseUpdate=U,h.lastBaseUpdate=Z,x===null&&(h.shared.lanes=0),kn|=S,i.lanes=S,i.memoizedState=ee}}function rm(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function sm(i,r){var s=i.callbacks;if(s!==null)for(i.callbacks=null,i=0;i<s.length;i++)rm(s[i],r)}var Wa=X(null),cl=X(0);function om(i,r){i=dn,re(cl,i),re(Wa,r),dn=i|r.baseLanes}function bu(){re(cl,dn),re(Wa,Wa.current)}function Su(){dn=cl.current,ae(Wa),ae(cl)}var jn=0,we=null,$e=null,nt=null,dl=!1,Ka=!1,fa=!1,ul=0,ys=0,Qa=null,v7=0;function et(){throw Error(a(321))}function Cu(i,r){if(r===null)return!1;for(var s=0;s<r.length&&s<i.length;s++)if(!Kt(i[s],r[s]))return!1;return!0}function Tu(i,r,s,c,h,x){return jn=x,we=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=i===null||i.memoizedState===null?Gm:Ym,fa=!1,x=s(c,h),fa=!1,Ka&&(x=cm(r,s,c,h)),lm(i),x}function lm(i){B.H=xl;var r=$e!==null&&$e.next!==null;if(jn=0,nt=$e=we=null,dl=!1,ys=0,Qa=null,r)throw Error(a(300));i===null||ft||(i=i.dependencies,i!==null&&al(i)&&(ft=!0))}function cm(i,r,s,c){we=i;var h=0;do{if(Ka&&(Qa=null),ys=0,Ka=!1,25<=h)throw Error(a(301));if(h+=1,nt=$e=null,i.updateQueue!=null){var x=i.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}B.H=E7,x=r(s,c)}while(Ka);return x}function y7(){var i=B.H,r=i.useState()[0];return r=typeof r.then=="function"?ws(r):r,i=i.useState()[0],($e!==null?$e.memoizedState:null)!==i&&(we.flags|=1024),r}function Eu(){var i=ul!==0;return ul=0,i}function ju(i,r,s){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~s}function Au(i){if(dl){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}jn=0,nt=$e=we=null,Ka=!1,ys=ul=0,Qa=null}function Nt(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?we.memoizedState=nt=i:nt=nt.next=i,nt}function at(){if($e===null){var i=we.alternate;i=i!==null?i.memoizedState:null}else i=$e.next;var r=nt===null?we.memoizedState:nt.next;if(r!==null)nt=r,$e=i;else{if(i===null)throw we.alternate===null?Error(a(467)):Error(a(310));$e=i,i={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},nt===null?we.memoizedState=nt=i:nt=nt.next=i}return nt}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ws(i){var r=ys;return ys+=1,Qa===null&&(Qa=[]),i=im(Qa,i,r),r=we,(nt===null?r.memoizedState:nt.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?Gm:Ym),i}function fl(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return ws(i);if(i.$$typeof===T)return At(i)}throw Error(a(438,String(i)))}function Lu(i){var r=null,s=we.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=we.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Mu(),we.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(i),c=0;c<i;c++)s[c]=F;return r.index++,s}function an(i,r){return typeof r=="function"?r(i):r}function pl(i){var r=at();return Ou(r,$e,i)}function Ou(i,r,s){var c=i.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var h=i.baseQueue,x=c.pending;if(x!==null){if(h!==null){var S=h.next;h.next=x.next,x.next=S}r.baseQueue=h=x,c.pending=null}if(x=i.baseState,h===null)i.memoizedState=x;else{r=h.next;var A=S=null,D=null,U=r,Z=!1;do{var ee=U.lane&-536870913;if(ee!==U.lane?(Ee&ee)===ee:(jn&ee)===ee){var G=U.revertLane;if(G===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ee===Xa&&(Z=!0);else if((jn&G)===G){U=U.next,G===Xa&&(Z=!0);continue}else ee={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},D===null?(A=D=ee,S=x):D=D.next=ee,we.lanes|=G,kn|=G;ee=U.action,fa&&s(x,ee),x=U.hasEagerState?U.eagerState:s(x,ee)}else G={lane:ee,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},D===null?(A=D=G,S=x):D=D.next=G,we.lanes|=ee,kn|=ee;U=U.next}while(U!==null&&U!==r);if(D===null?S=x:D.next=A,!Kt(x,i.memoizedState)&&(ft=!0,Z&&(s=Za,s!==null)))throw s;i.memoizedState=x,i.baseState=S,i.baseQueue=D,c.lastRenderedState=x}return h===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Ru(i){var r=at(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=i;var c=s.dispatch,h=s.pending,x=r.memoizedState;if(h!==null){s.pending=null;var S=h=h.next;do x=i(x,S.action),S=S.next;while(S!==h);Kt(x,r.memoizedState)||(ft=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function dm(i,r,s){var c=we,h=at(),x=Ae;if(x){if(s===void 0)throw Error(a(407));s=s()}else s=r();var S=!Kt(($e||h).memoizedState,s);S&&(h.memoizedState=s,ft=!0),h=h.queue;var A=pm.bind(null,c,h,i);if(bs(2048,8,A,[i]),h.getSnapshot!==r||S||nt!==null&&nt.memoizedState.tag&1){if(c.flags|=2048,Ja(9,hl(),fm.bind(null,c,h,s,r),null),_e===null)throw Error(a(349));x||(jn&124)!==0||um(c,r,s)}return s}function um(i,r,s){i.flags|=16384,i={getSnapshot:r,value:s},r=we.updateQueue,r===null?(r=Mu(),we.updateQueue=r,r.stores=[i]):(s=r.stores,s===null?r.stores=[i]:s.push(i))}function fm(i,r,s,c){r.value=s,r.getSnapshot=c,hm(r)&&mm(i)}function pm(i,r,s){return s(function(){hm(r)&&mm(i)})}function hm(i){var r=i.getSnapshot;i=i.value;try{var s=r();return!Kt(i,s)}catch{return!0}}function mm(i){var r=Ga(i,2);r!==null&&ni(r,i,2)}function Vu(i){var r=Nt();if(typeof i=="function"){var s=i;if(i=s(),fa){yn(!0);try{s()}finally{yn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:i},r}function gm(i,r,s,c){return i.baseState=s,Ou(i,$e,typeof c=="function"?c:an)}function w7(i,r,s,c,h){if(gl(i))throw Error(a(485));if(i=r.action,i!==null){var x={payload:h,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){x.listeners.push(S)}};B.T!==null?s(!0):x.isTransition=!1,c(x),s=r.pending,s===null?(x.next=r.pending=x,xm(r,x)):(x.next=s.next,r.pending=s.next=x)}}function xm(i,r){var s=r.action,c=r.payload,h=i.state;if(r.isTransition){var x=B.T,S={};B.T=S;try{var A=s(h,c),D=B.S;D!==null&&D(S,A),vm(i,r,A)}catch(U){ku(i,r,U)}finally{B.T=x}}else try{x=s(h,c),vm(i,r,x)}catch(U){ku(i,r,U)}}function vm(i,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){ym(i,r,c)},function(c){return ku(i,r,c)}):ym(i,r,s)}function ym(i,r,s){r.status="fulfilled",r.value=s,wm(r),i.state=s,r=i.pending,r!==null&&(s=r.next,s===r?i.pending=null:(s=s.next,r.next=s,xm(i,s)))}function ku(i,r,s){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,wm(r),r=r.next;while(r!==c)}i.action=null}function wm(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function bm(i,r){return r}function Sm(i,r){if(Ae){var s=_e.formState;if(s!==null){e:{var c=we;if(Ae){if(We){t:{for(var h=We,x=ki;h.nodeType!==8;){if(!x){h=null;break t}if(h=Ei(h.nextSibling),h===null){h=null;break t}}x=h.data,h=x==="F!"||x==="F"?h:null}if(h){We=Ei(h.nextSibling),c=h.data==="F!";break e}}la(c)}c=!1}c&&(r=s[0])}}return s=Nt(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:r},s.queue=c,s=Im.bind(null,we,c),c.dispatch=s,c=Vu(!1),x=Nu.bind(null,we,!1,c.queue),c=Nt(),h={state:r,dispatch:null,action:i,pending:null},c.queue=h,s=w7.bind(null,we,h,x,s),h.dispatch=s,c.memoizedState=i,[r,s,!1]}function Cm(i){var r=at();return Tm(r,$e,i)}function Tm(i,r,s){if(r=Ou(i,r,bm)[0],i=pl(an)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=ws(r)}catch(S){throw S===hs?ol:S}else c=r;r=at();var h=r.queue,x=h.dispatch;return s!==r.memoizedState&&(we.flags|=2048,Ja(9,hl(),b7.bind(null,h,s),null)),[c,x,i]}function b7(i,r){i.action=r}function Em(i){var r=at(),s=$e;if(s!==null)return Tm(r,s,i);at(),r=r.memoizedState,s=at();var c=s.queue.dispatch;return s.memoizedState=i,[r,c,!1]}function Ja(i,r,s,c){return i={tag:i,create:s,deps:c,inst:r,next:null},r=we.updateQueue,r===null&&(r=Mu(),we.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=i.next=i:(c=s.next,s.next=i,i.next=c,r.lastEffect=i),i}function hl(){return{destroy:void 0,resource:void 0}}function jm(){return at().memoizedState}function ml(i,r,s,c){var h=Nt();c=c===void 0?null:c,we.flags|=i,h.memoizedState=Ja(1|r,hl(),s,c)}function bs(i,r,s,c){var h=at();c=c===void 0?null:c;var x=h.memoizedState.inst;$e!==null&&c!==null&&Cu(c,$e.memoizedState.deps)?h.memoizedState=Ja(r,x,s,c):(we.flags|=i,h.memoizedState=Ja(1|r,x,s,c))}function Am(i,r){ml(8390656,8,i,r)}function Mm(i,r){bs(2048,8,i,r)}function Lm(i,r){return bs(4,2,i,r)}function Om(i,r){return bs(4,4,i,r)}function Rm(i,r){if(typeof r=="function"){i=i();var s=r(i);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Vm(i,r,s){s=s!=null?s.concat([i]):null,bs(4,4,Rm.bind(null,r,i),s)}function Du(){}function km(i,r){var s=at();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&Cu(r,c[1])?c[0]:(s.memoizedState=[i,r],i)}function Dm(i,r){var s=at();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&Cu(r,c[1]))return c[0];if(c=i(),fa){yn(!0);try{i()}finally{yn(!1)}}return s.memoizedState=[c,r],c}function Hu(i,r,s){return s===void 0||(jn&1073741824)!==0?i.memoizedState=r:(i.memoizedState=s,i=Pg(),we.lanes|=i,kn|=i,s)}function Hm(i,r,s,c){return Kt(s,r)?s:Wa.current!==null?(i=Hu(i,s,c),Kt(i,r)||(ft=!0),i):(jn&42)===0?(ft=!0,i.memoizedState=s):(i=Pg(),we.lanes|=i,kn|=i,r)}function zm(i,r,s,c,h){var x=W.p;W.p=x!==0&&8>x?x:8;var S=B.T,A={};B.T=A,Nu(i,!1,r,s);try{var D=h(),U=B.S;if(U!==null&&U(A,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Z=x7(D,c);Ss(i,r,Z,ii(i))}else Ss(i,r,c,ii(i))}catch(ee){Ss(i,r,{then:function(){},status:"rejected",reason:ee},ii())}finally{W.p=x,B.T=S}}function S7(){}function zu(i,r,s,c){if(i.tag!==5)throw Error(a(476));var h=Pm(i).queue;zm(i,h,r,J,s===null?S7:function(){return Nm(i),s(c)})}function Pm(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:J},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:s},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Nm(i){var r=Pm(i).next.queue;Ss(i,r,{},ii())}function Pu(){return At(Bs)}function $m(){return at().memoizedState}function Bm(){return at().memoizedState}function C7(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var s=ii();i=Tn(s);var c=En(r,i,s);c!==null&&(ni(c,r,s),gs(c,r,s)),r={cache:pu()},i.payload=r;return}r=r.return}}function T7(i,r,s){var c=ii();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gl(i)?Um(r,s):(s=nu(i,r,s,c),s!==null&&(ni(s,i,c),_m(s,r,c)))}function Im(i,r,s){var c=ii();Ss(i,r,s,c)}function Ss(i,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gl(i))Um(r,h);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var S=r.lastRenderedState,A=x(S,s);if(h.hasEagerState=!0,h.eagerState=A,Kt(A,S))return Jo(i,r,h,0),_e===null&&Qo(),!1}catch{}finally{}if(s=nu(i,r,h,c),s!==null)return ni(s,i,c),_m(s,r,c),!0}return!1}function Nu(i,r,s,c){if(c={lane:2,revertLane:xf(),action:c,hasEagerState:!1,eagerState:null,next:null},gl(i)){if(r)throw Error(a(479))}else r=nu(i,s,c,2),r!==null&&ni(r,i,2)}function gl(i){var r=i.alternate;return i===we||r!==null&&r===we}function Um(i,r){Ka=dl=!0;var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}function _m(i,r,s){if((s&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,K1(i,s)}}var xl={readContext:At,use:fl,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et},Gm={readContext:At,use:fl,useCallback:function(i,r){return Nt().memoizedState=[i,r===void 0?null:r],i},useContext:At,useEffect:Am,useImperativeHandle:function(i,r,s){s=s!=null?s.concat([i]):null,ml(4194308,4,Rm.bind(null,r,i),s)},useLayoutEffect:function(i,r){return ml(4194308,4,i,r)},useInsertionEffect:function(i,r){ml(4,2,i,r)},useMemo:function(i,r){var s=Nt();r=r===void 0?null:r;var c=i();if(fa){yn(!0);try{i()}finally{yn(!1)}}return s.memoizedState=[c,r],c},useReducer:function(i,r,s){var c=Nt();if(s!==void 0){var h=s(r);if(fa){yn(!0);try{s(r)}finally{yn(!1)}}}else h=r;return c.memoizedState=c.baseState=h,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:h},c.queue=i,i=i.dispatch=T7.bind(null,we,i),[c.memoizedState,i]},useRef:function(i){var r=Nt();return i={current:i},r.memoizedState=i},useState:function(i){i=Vu(i);var r=i.queue,s=Im.bind(null,we,r);return r.dispatch=s,[i.memoizedState,s]},useDebugValue:Du,useDeferredValue:function(i,r){var s=Nt();return Hu(s,i,r)},useTransition:function(){var i=Vu(!1);return i=zm.bind(null,we,i.queue,!0,!1),Nt().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,s){var c=we,h=Nt();if(Ae){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),_e===null)throw Error(a(349));(Ee&124)!==0||um(c,r,s)}h.memoizedState=s;var x={value:s,getSnapshot:r};return h.queue=x,Am(pm.bind(null,c,x,i),[i]),c.flags|=2048,Ja(9,hl(),fm.bind(null,c,x,s,r),null),s},useId:function(){var i=Nt(),r=_e.identifierPrefix;if(Ae){var s=en,c=Ji;s=(c&~(1<<32-Wt(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=ul++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=v7++,r="«"+r+"r"+s.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Pu,useFormState:Sm,useActionState:Sm,useOptimistic:function(i){var r=Nt();r.memoizedState=r.baseState=i;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Nu.bind(null,we,!0,s),s.dispatch=r,[i,r]},useMemoCache:Lu,useCacheRefresh:function(){return Nt().memoizedState=C7.bind(null,we)}},Ym={readContext:At,use:fl,useCallback:km,useContext:At,useEffect:Mm,useImperativeHandle:Vm,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Dm,useReducer:pl,useRef:jm,useState:function(){return pl(an)},useDebugValue:Du,useDeferredValue:function(i,r){var s=at();return Hm(s,$e.memoizedState,i,r)},useTransition:function(){var i=pl(an)[0],r=at().memoizedState;return[typeof i=="boolean"?i:ws(i),r]},useSyncExternalStore:dm,useId:$m,useHostTransitionStatus:Pu,useFormState:Cm,useActionState:Cm,useOptimistic:function(i,r){var s=at();return gm(s,$e,i,r)},useMemoCache:Lu,useCacheRefresh:Bm},E7={readContext:At,use:fl,useCallback:km,useContext:At,useEffect:Mm,useImperativeHandle:Vm,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:Dm,useReducer:Ru,useRef:jm,useState:function(){return Ru(an)},useDebugValue:Du,useDeferredValue:function(i,r){var s=at();return $e===null?Hu(s,i,r):Hm(s,$e.memoizedState,i,r)},useTransition:function(){var i=Ru(an)[0],r=at().memoizedState;return[typeof i=="boolean"?i:ws(i),r]},useSyncExternalStore:dm,useId:$m,useHostTransitionStatus:Pu,useFormState:Em,useActionState:Em,useOptimistic:function(i,r){var s=at();return $e!==null?gm(s,$e,i,r):(s.baseState=i,[i,s.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:Bm},er=null,Cs=0;function vl(i){var r=Cs;return Cs+=1,er===null&&(er=[]),im(er,i,r)}function Ts(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function yl(i,r){throw r.$$typeof===v?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function qm(i){var r=i._init;return r(i._payload)}function Fm(i){function r($,z){if(i){var I=$.deletions;I===null?($.deletions=[z],$.flags|=16):I.push(z)}}function s($,z){if(!i)return null;for(;z!==null;)r($,z),z=z.sibling;return null}function c($){for(var z=new Map;$!==null;)$.key!==null?z.set($.key,$):z.set($.index,$),$=$.sibling;return z}function h($,z){return $=Qi($,z),$.index=0,$.sibling=null,$}function x($,z,I){return $.index=I,i?(I=$.alternate,I!==null?(I=I.index,I<z?($.flags|=67108866,z):I):($.flags|=67108866,z)):($.flags|=1048576,z)}function S($){return i&&$.alternate===null&&($.flags|=67108866),$}function A($,z,I,Q){return z===null||z.tag!==6?(z=ru(I,$.mode,Q),z.return=$,z):(z=h(z,I),z.return=$,z)}function D($,z,I,Q){var se=I.type;return se===b?Z($,z,I.props.children,Q,I.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&qm(se)===z.type)?(z=h(z,I.props),Ts(z,I),z.return=$,z):(z=tl(I.type,I.key,I.props,null,$.mode,Q),Ts(z,I),z.return=$,z)}function U($,z,I,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==I.containerInfo||z.stateNode.implementation!==I.implementation?(z=su(I,$.mode,Q),z.return=$,z):(z=h(z,I.children||[]),z.return=$,z)}function Z($,z,I,Q,se){return z===null||z.tag!==7?(z=aa(I,$.mode,Q,se),z.return=$,z):(z=h(z,I),z.return=$,z)}function ee($,z,I){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=ru(""+z,$.mode,I),z.return=$,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case y:return I=tl(z.type,z.key,z.props,null,$.mode,I),Ts(I,z),I.return=$,I;case C:return z=su(z,$.mode,I),z.return=$,z;case _:var Q=z._init;return z=Q(z._payload),ee($,z,I)}if(oe(z)||ne(z))return z=aa(z,$.mode,I,null),z.return=$,z;if(typeof z.then=="function")return ee($,vl(z),I);if(z.$$typeof===T)return ee($,rl($,z),I);yl($,z)}return null}function G($,z,I,Q){var se=z!==null?z.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return se!==null?null:A($,z,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===se?D($,z,I,Q):null;case C:return I.key===se?U($,z,I,Q):null;case _:return se=I._init,I=se(I._payload),G($,z,I,Q)}if(oe(I)||ne(I))return se!==null?null:Z($,z,I,Q,null);if(typeof I.then=="function")return G($,z,vl(I),Q);if(I.$$typeof===T)return G($,z,rl($,I),Q);yl($,I)}return null}function Y($,z,I,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $=$.get(I)||null,A(z,$,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return $=$.get(Q.key===null?I:Q.key)||null,D(z,$,Q,se);case C:return $=$.get(Q.key===null?I:Q.key)||null,U(z,$,Q,se);case _:var be=Q._init;return Q=be(Q._payload),Y($,z,I,Q,se)}if(oe(Q)||ne(Q))return $=$.get(I)||null,Z(z,$,Q,se,null);if(typeof Q.then=="function")return Y($,z,I,vl(Q),se);if(Q.$$typeof===T)return Y($,z,I,rl(z,Q),se);yl(z,Q)}return null}function me($,z,I,Q){for(var se=null,be=null,ce=z,he=z=0,ht=null;ce!==null&&he<I.length;he++){ce.index>he?(ht=ce,ce=null):ht=ce.sibling;var je=G($,ce,I[he],Q);if(je===null){ce===null&&(ce=ht);break}i&&ce&&je.alternate===null&&r($,ce),z=x(je,z,he),be===null?se=je:be.sibling=je,be=je,ce=ht}if(he===I.length)return s($,ce),Ae&&sa($,he),se;if(ce===null){for(;he<I.length;he++)ce=ee($,I[he],Q),ce!==null&&(z=x(ce,z,he),be===null?se=ce:be.sibling=ce,be=ce);return Ae&&sa($,he),se}for(ce=c(ce);he<I.length;he++)ht=Y(ce,$,he,I[he],Q),ht!==null&&(i&&ht.alternate!==null&&ce.delete(ht.key===null?he:ht.key),z=x(ht,z,he),be===null?se=ht:be.sibling=ht,be=ht);return i&&ce.forEach(function(Un){return r($,Un)}),Ae&&sa($,he),se}function fe($,z,I,Q){if(I==null)throw Error(a(151));for(var se=null,be=null,ce=z,he=z=0,ht=null,je=I.next();ce!==null&&!je.done;he++,je=I.next()){ce.index>he?(ht=ce,ce=null):ht=ce.sibling;var Un=G($,ce,je.value,Q);if(Un===null){ce===null&&(ce=ht);break}i&&ce&&Un.alternate===null&&r($,ce),z=x(Un,z,he),be===null?se=Un:be.sibling=Un,be=Un,ce=ht}if(je.done)return s($,ce),Ae&&sa($,he),se;if(ce===null){for(;!je.done;he++,je=I.next())je=ee($,je.value,Q),je!==null&&(z=x(je,z,he),be===null?se=je:be.sibling=je,be=je);return Ae&&sa($,he),se}for(ce=c(ce);!je.done;he++,je=I.next())je=Y(ce,$,he,je.value,Q),je!==null&&(i&&je.alternate!==null&&ce.delete(je.key===null?he:je.key),z=x(je,z,he),be===null?se=je:be.sibling=je,be=je);return i&&ce.forEach(function(jb){return r($,jb)}),Ae&&sa($,he),se}function Ie($,z,I,Q){if(typeof I=="object"&&I!==null&&I.type===b&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var se=I.key;z!==null;){if(z.key===se){if(se=I.type,se===b){if(z.tag===7){s($,z.sibling),Q=h(z,I.props.children),Q.return=$,$=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&qm(se)===z.type){s($,z.sibling),Q=h(z,I.props),Ts(Q,I),Q.return=$,$=Q;break e}s($,z);break}else r($,z);z=z.sibling}I.type===b?(Q=aa(I.props.children,$.mode,Q,I.key),Q.return=$,$=Q):(Q=tl(I.type,I.key,I.props,null,$.mode,Q),Ts(Q,I),Q.return=$,$=Q)}return S($);case C:e:{for(se=I.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===I.containerInfo&&z.stateNode.implementation===I.implementation){s($,z.sibling),Q=h(z,I.children||[]),Q.return=$,$=Q;break e}else{s($,z);break}else r($,z);z=z.sibling}Q=su(I,$.mode,Q),Q.return=$,$=Q}return S($);case _:return se=I._init,I=se(I._payload),Ie($,z,I,Q)}if(oe(I))return me($,z,I,Q);if(ne(I)){if(se=ne(I),typeof se!="function")throw Error(a(150));return I=se.call(I),fe($,z,I,Q)}if(typeof I.then=="function")return Ie($,z,vl(I),Q);if(I.$$typeof===T)return Ie($,z,rl($,I),Q);yl($,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,z!==null&&z.tag===6?(s($,z.sibling),Q=h(z,I),Q.return=$,$=Q):(s($,z),Q=ru(I,$.mode,Q),Q.return=$,$=Q),S($)):s($,z)}return function($,z,I,Q){try{Cs=0;var se=Ie($,z,I,Q);return er=null,se}catch(ce){if(ce===hs||ce===ol)throw ce;var be=Qt(29,ce,null,$.mode);return be.lanes=Q,be.return=$,be}finally{}}}var tr=Fm(!0),Xm=Fm(!1),mi=X(null),Di=null;function An(i){var r=i.alternate;re(ct,ct.current&1),re(mi,i),Di===null&&(r===null||Wa.current!==null||r.memoizedState!==null)&&(Di=i)}function Zm(i){if(i.tag===22){if(re(ct,ct.current),re(mi,i),Di===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Di=i)}}else Mn()}function Mn(){re(ct,ct.current),re(mi,mi.current)}function rn(i){ae(mi),Di===i&&(Di=null),ae(ct)}var ct=X(0);function wl(i){for(var r=i;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Lf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function $u(i,r,s,c){r=i.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var Bu={enqueueSetState:function(i,r,s){i=i._reactInternals;var c=ii(),h=Tn(c);h.payload=r,s!=null&&(h.callback=s),r=En(i,h,c),r!==null&&(ni(r,i,c),gs(r,i,c))},enqueueReplaceState:function(i,r,s){i=i._reactInternals;var c=ii(),h=Tn(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=En(i,h,c),r!==null&&(ni(r,i,c),gs(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var s=ii(),c=Tn(s);c.tag=2,r!=null&&(c.callback=r),r=En(i,c,s),r!==null&&(ni(r,i,s),gs(r,i,s))}};function Wm(i,r,s,c,h,x,S){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,x,S):r.prototype&&r.prototype.isPureReactComponent?!ss(s,c)||!ss(h,x):!0}function Km(i,r,s,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==i&&Bu.enqueueReplaceState(r,r.state,null)}function pa(i,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(i=i.defaultProps){s===r&&(s=g({},s));for(var h in i)s[h]===void 0&&(s[h]=i[h])}return s}var bl=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Qm(i){bl(i)}function Jm(i){console.error(i)}function eg(i){bl(i)}function Sl(i,r){try{var s=i.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function tg(i,r,s){try{var c=i.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Iu(i,r,s){return s=Tn(s),s.tag=3,s.payload={element:null},s.callback=function(){Sl(i,r)},s}function ig(i){return i=Tn(i),i.tag=3,i}function ng(i,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var x=c.value;i.payload=function(){return h(x)},i.callback=function(){tg(r,s,c)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(i.callback=function(){tg(r,s,c),typeof h!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function j7(i,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&us(r,s,h,!0),s=mi.current,s!==null){switch(s.tag){case 13:return Di===null?ff():s.alternate===null&&Ke===0&&(Ke=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===gu?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),hf(i,c,h)),!1;case 22:return s.flags|=65536,c===gu?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),hf(i,c,h)),!1}throw Error(a(435,s.tag))}return hf(i,c,h),ff(),!1}if(Ae)return r=mi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==cu&&(i=Error(a(422),{cause:c}),ds(ui(i,s)))):(c!==cu&&(r=Error(a(423),{cause:c}),ds(ui(r,s))),i=i.current.alternate,i.flags|=65536,h&=-h,i.lanes|=h,c=ui(c,s),h=Iu(i.stateNode,c,h),yu(i,h),Ke!==4&&(Ke=2)),!1;var x=Error(a(520),{cause:c});if(x=ui(x,s),Rs===null?Rs=[x]:Rs.push(x),Ke!==4&&(Ke=2),r===null)return!0;c=ui(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,i=h&-h,s.lanes|=i,i=Iu(s.stateNode,c,i),yu(s,i),!1;case 1:if(r=s.type,x=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dn===null||!Dn.has(x))))return s.flags|=65536,h&=-h,s.lanes|=h,h=ig(h),ng(h,i,s,c),yu(s,h),!1}s=s.return}while(s!==null);return!1}var ag=Error(a(461)),ft=!1;function yt(i,r,s,c){r.child=i===null?Xm(r,null,s,c):tr(r,i.child,s,c)}function rg(i,r,s,c,h){s=s.render;var x=r.ref;if("ref"in c){var S={};for(var A in c)A!=="ref"&&(S[A]=c[A])}else S=c;return da(r),c=Tu(i,r,s,S,x,h),A=Eu(),i!==null&&!ft?(ju(i,r,h),sn(i,r,h)):(Ae&&A&&ou(r),r.flags|=1,yt(i,r,c,h),r.child)}function sg(i,r,s,c,h){if(i===null){var x=s.type;return typeof x=="function"&&!au(x)&&x.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=x,og(i,r,x,c,h)):(i=tl(s.type,null,c,r,r.mode,h),i.ref=r.ref,i.return=r,r.child=i)}if(x=i.child,!Zu(i,h)){var S=x.memoizedProps;if(s=s.compare,s=s!==null?s:ss,s(S,c)&&i.ref===r.ref)return sn(i,r,h)}return r.flags|=1,i=Qi(x,c),i.ref=r.ref,i.return=r,r.child=i}function og(i,r,s,c,h){if(i!==null){var x=i.memoizedProps;if(ss(x,c)&&i.ref===r.ref)if(ft=!1,r.pendingProps=c=x,Zu(i,h))(i.flags&131072)!==0&&(ft=!0);else return r.lanes=i.lanes,sn(i,r,h)}return Uu(i,r,s,c,h)}function lg(i,r,s){var c=r.pendingProps,h=c.children,x=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=x!==null?x.baseLanes|s:s,i!==null){for(h=r.child=i.child,x=0;h!==null;)x=x|h.lanes|h.childLanes,h=h.sibling;r.childLanes=x&~c}else r.childLanes=0,r.child=null;return cg(i,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&sl(r,x!==null?x.cachePool:null),x!==null?om(r,x):bu(),Zm(r);else return r.lanes=r.childLanes=536870912,cg(i,r,x!==null?x.baseLanes|s:s,s)}else x!==null?(sl(r,x.cachePool),om(r,x),Mn(),r.memoizedState=null):(i!==null&&sl(r,null),bu(),Mn());return yt(i,r,h,s),r.child}function cg(i,r,s,c){var h=mu();return h=h===null?null:{parent:lt._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},i!==null&&sl(r,null),bu(),Zm(r),i!==null&&us(i,r,c,!0),null}function Cl(i,r){var s=r.ref;if(s===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(i===null||i.ref!==s)&&(r.flags|=4194816)}}function Uu(i,r,s,c,h){return da(r),s=Tu(i,r,s,c,void 0,h),c=Eu(),i!==null&&!ft?(ju(i,r,h),sn(i,r,h)):(Ae&&c&&ou(r),r.flags|=1,yt(i,r,s,h),r.child)}function dg(i,r,s,c,h,x){return da(r),r.updateQueue=null,s=cm(r,c,s,h),lm(i),c=Eu(),i!==null&&!ft?(ju(i,r,x),sn(i,r,x)):(Ae&&c&&ou(r),r.flags|=1,yt(i,r,s,x),r.child)}function ug(i,r,s,c,h){if(da(r),r.stateNode===null){var x=Ya,S=s.contextType;typeof S=="object"&&S!==null&&(x=At(S)),x=new s(c,x),r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=Bu,r.stateNode=x,x._reactInternals=r,x=r.stateNode,x.props=c,x.state=r.memoizedState,x.refs={},xu(r),S=s.contextType,x.context=typeof S=="object"&&S!==null?At(S):Ya,x.state=r.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&($u(r,s,S,c),x.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(S=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),S!==x.state&&Bu.enqueueReplaceState(x,x.state,null),vs(r,c,x,h),xs(),x.state=r.memoizedState),typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){x=r.stateNode;var A=r.memoizedProps,D=pa(s,A);x.props=D;var U=x.context,Z=s.contextType;S=Ya,typeof Z=="object"&&Z!==null&&(S=At(Z));var ee=s.getDerivedStateFromProps;Z=typeof ee=="function"||typeof x.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Z||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(A||U!==S)&&Km(r,x,c,S),Cn=!1;var G=r.memoizedState;x.state=G,vs(r,c,x,h),xs(),U=r.memoizedState,A||G!==U||Cn?(typeof ee=="function"&&($u(r,s,ee,c),U=r.memoizedState),(D=Cn||Wm(r,s,D,c,G,U,S))?(Z||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(r.flags|=4194308)):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=U),x.props=c,x.state=U,x.context=S,c=D):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{x=r.stateNode,vu(i,r),S=r.memoizedProps,Z=pa(s,S),x.props=Z,ee=r.pendingProps,G=x.context,U=s.contextType,D=Ya,typeof U=="object"&&U!==null&&(D=At(U)),A=s.getDerivedStateFromProps,(U=typeof A=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==ee||G!==D)&&Km(r,x,c,D),Cn=!1,G=r.memoizedState,x.state=G,vs(r,c,x,h),xs();var Y=r.memoizedState;S!==ee||G!==Y||Cn||i!==null&&i.dependencies!==null&&al(i.dependencies)?(typeof A=="function"&&($u(r,s,A,c),Y=r.memoizedState),(Z=Cn||Wm(r,s,Z,c,G,Y,D)||i!==null&&i.dependencies!==null&&al(i.dependencies))?(U||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(c,Y,D),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(c,Y,D)),typeof x.componentDidUpdate=="function"&&(r.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof x.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Y),x.props=c,x.state=Y,x.context=D,c=Z):(typeof x.componentDidUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),c=!1)}return x=c,Cl(i,r),c=(r.flags&128)!==0,x||c?(x=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:x.render(),r.flags|=1,i!==null&&c?(r.child=tr(r,i.child,null,h),r.child=tr(r,null,s,h)):yt(i,r,s,h),r.memoizedState=x.state,i=r.child):i=sn(i,r,h),i}function fg(i,r,s,c){return cs(),r.flags|=256,yt(i,r,s,c),r.child}var _u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(i){return{baseLanes:i,cachePool:J2()}}function Yu(i,r,s){return i=i!==null?i.childLanes&~s:0,r&&(i|=gi),i}function pg(i,r,s){var c=r.pendingProps,h=!1,x=(r.flags&128)!==0,S;if((S=x)||(S=i!==null&&i.memoizedState===null?!1:(ct.current&2)!==0),S&&(h=!0,r.flags&=-129),S=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ae){if(h?An(r):Mn(),Ae){var A=We,D;if(D=A){e:{for(D=A,A=ki;D.nodeType!==8;){if(!A){A=null;break e}if(D=Ei(D.nextSibling),D===null){A=null;break e}}A=D}A!==null?(r.memoizedState={dehydrated:A,treeContext:ra!==null?{id:Ji,overflow:en}:null,retryLane:536870912,hydrationErrors:null},D=Qt(18,null,null,0),D.stateNode=A,D.return=r,r.child=D,Vt=r,We=null,D=!0):D=!1}D||la(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Lf(A)?r.lanes=32:r.lanes=536870912,null;rn(r)}return A=c.children,c=c.fallback,h?(Mn(),h=r.mode,A=Tl({mode:"hidden",children:A},h),c=aa(c,h,s,null),A.return=r,c.return=r,A.sibling=c,r.child=A,h=r.child,h.memoizedState=Gu(s),h.childLanes=Yu(i,S,s),r.memoizedState=_u,c):(An(r),qu(r,A))}if(D=i.memoizedState,D!==null&&(A=D.dehydrated,A!==null)){if(x)r.flags&256?(An(r),r.flags&=-257,r=Fu(i,r,s)):r.memoizedState!==null?(Mn(),r.child=i.child,r.flags|=128,r=null):(Mn(),h=c.fallback,A=r.mode,c=Tl({mode:"visible",children:c.children},A),h=aa(h,A,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,tr(r,i.child,null,s),c=r.child,c.memoizedState=Gu(s),c.childLanes=Yu(i,S,s),r.memoizedState=_u,r=h);else if(An(r),Lf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var U=S.dgst;S=U,c=Error(a(419)),c.stack="",c.digest=S,ds({value:c,source:null,stack:null}),r=Fu(i,r,s)}else if(ft||us(i,r,s,!1),S=(s&i.childLanes)!==0,ft||S){if(S=_e,S!==null&&(c=s&-s,c=(c&42)!==0?1:Ld(c),c=(c&(S.suspendedLanes|s))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,Ga(i,c),ni(S,i,c),ag;A.data==="$?"||ff(),r=Fu(i,r,s)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=D.treeContext,We=Ei(A.nextSibling),Vt=r,Ae=!0,oa=null,ki=!1,i!==null&&(pi[hi++]=Ji,pi[hi++]=en,pi[hi++]=ra,Ji=i.id,en=i.overflow,ra=r),r=qu(r,c.children),r.flags|=4096);return r}return h?(Mn(),h=c.fallback,A=r.mode,D=i.child,U=D.sibling,c=Qi(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,U!==null?h=Qi(U,h):(h=aa(h,A,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,A=i.child.memoizedState,A===null?A=Gu(s):(D=A.cachePool,D!==null?(U=lt._currentValue,D=D.parent!==U?{parent:U,pool:U}:D):D=J2(),A={baseLanes:A.baseLanes|s,cachePool:D}),h.memoizedState=A,h.childLanes=Yu(i,S,s),r.memoizedState=_u,c):(An(r),s=i.child,i=s.sibling,s=Qi(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,i!==null&&(S=r.deletions,S===null?(r.deletions=[i],r.flags|=16):S.push(i)),r.child=s,r.memoizedState=null,s)}function qu(i,r){return r=Tl({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Tl(i,r){return i=Qt(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Fu(i,r,s){return tr(r,i.child,null,s),i=qu(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function hg(i,r,s){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),uu(i.return,r,s)}function Xu(i,r,s,c,h){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=h)}function mg(i,r,s){var c=r.pendingProps,h=c.revealOrder,x=c.tail;if(yt(i,r,c.children,s),c=ct.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&hg(i,s,r);else if(i.tag===19)hg(i,s,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(re(ct,c),h){case"forwards":for(s=r.child,h=null;s!==null;)i=s.alternate,i!==null&&wl(i)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Xu(r,!1,h,s,x);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(i=h.alternate,i!==null&&wl(i)===null){r.child=h;break}i=h.sibling,h.sibling=s,s=h,h=i}Xu(r,!0,s,null,x);break;case"together":Xu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function sn(i,r,s){if(i!==null&&(r.dependencies=i.dependencies),kn|=r.lanes,(s&r.childLanes)===0)if(i!==null){if(us(i,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,s=Qi(i,i.pendingProps),r.child=s,s.return=r;i.sibling!==null;)i=i.sibling,s=s.sibling=Qi(i,i.pendingProps),s.return=r;s.sibling=null}return r.child}function Zu(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&al(i)))}function A7(i,r,s){switch(r.tag){case 3:Re(r,r.stateNode.containerInfo),Sn(r,lt,i.memoizedState.cache),cs();break;case 27:case 5:Qn(r);break;case 4:Re(r,r.stateNode.containerInfo);break;case 10:Sn(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(An(r),r.flags|=128,null):(s&r.child.childLanes)!==0?pg(i,r,s):(An(r),i=sn(i,r,s),i!==null?i.sibling:null);An(r);break;case 19:var h=(i.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(us(i,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return mg(i,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(ct,ct.current),c)break;return null;case 22:case 23:return r.lanes=0,lg(i,r,s);case 24:Sn(r,lt,i.memoizedState.cache)}return sn(i,r,s)}function gg(i,r,s){if(i!==null)if(i.memoizedProps!==r.pendingProps)ft=!0;else{if(!Zu(i,s)&&(r.flags&128)===0)return ft=!1,A7(i,r,s);ft=(i.flags&131072)!==0}else ft=!1,Ae&&(r.flags&1048576)!==0&&q2(r,nl,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")au(c)?(i=pa(c,i),r.tag=1,r=ug(null,r,c,i,s)):(r.tag=0,r=Uu(null,r,c,i,s));else{if(c!=null){if(h=c.$$typeof,h===k){r.tag=11,r=rg(null,r,c,i,s);break e}else if(h===P){r.tag=14,r=sg(null,r,c,i,s);break e}}throw r=ue(c)||c,Error(a(306,r,""))}}return r;case 0:return Uu(i,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=pa(c,r.pendingProps),ug(i,r,c,h,s);case 3:e:{if(Re(r,r.stateNode.containerInfo),i===null)throw Error(a(387));c=r.pendingProps;var x=r.memoizedState;h=x.element,vu(i,r),vs(r,c,null,s);var S=r.memoizedState;if(c=S.cache,Sn(r,lt,c),c!==x.cache&&fu(r,[lt],s,!0),xs(),c=S.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:S.cache},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){r=fg(i,r,c,s);break e}else if(c!==h){h=ui(Error(a(424)),r),ds(h),r=fg(i,r,c,s);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(We=Ei(i.firstChild),Vt=r,Ae=!0,oa=null,ki=!0,s=Xm(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(cs(),c===h){r=sn(i,r,s);break e}yt(i,r,c,s)}r=r.child}return r;case 26:return Cl(i,r),i===null?(s=wx(r.type,null,r.pendingProps,null))?r.memoizedState=s:Ae||(s=r.type,i=r.pendingProps,c=Nl(pe.current).createElement(s),c[jt]=r,c[zt]=i,bt(c,s,i),ut(c),r.stateNode=c):r.memoizedState=wx(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Qn(r),i===null&&Ae&&(c=r.stateNode=xx(r.type,r.pendingProps,pe.current),Vt=r,ki=!0,h=We,Pn(r.type)?(Of=h,We=Ei(c.firstChild)):We=h),yt(i,r,r.pendingProps.children,s),Cl(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ae&&((h=c=We)&&(c=tb(c,r.type,r.pendingProps,ki),c!==null?(r.stateNode=c,Vt=r,We=Ei(c.firstChild),ki=!1,h=!0):h=!1),h||la(r)),Qn(r),h=r.type,x=r.pendingProps,S=i!==null?i.memoizedProps:null,c=x.children,jf(h,x)?c=null:S!==null&&jf(h,S)&&(r.flags|=32),r.memoizedState!==null&&(h=Tu(i,r,y7,null,null,s),Bs._currentValue=h),Cl(i,r),yt(i,r,c,s),r.child;case 6:return i===null&&Ae&&((i=s=We)&&(s=ib(s,r.pendingProps,ki),s!==null?(r.stateNode=s,Vt=r,We=null,i=!0):i=!1),i||la(r)),null;case 13:return pg(i,r,s);case 4:return Re(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=tr(r,null,c,s):yt(i,r,c,s),r.child;case 11:return rg(i,r,r.type,r.pendingProps,s);case 7:return yt(i,r,r.pendingProps,s),r.child;case 8:return yt(i,r,r.pendingProps.children,s),r.child;case 12:return yt(i,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,Sn(r,r.type,c.value),yt(i,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,da(r),h=At(h),c=c(h),r.flags|=1,yt(i,r,c,s),r.child;case 14:return sg(i,r,r.type,r.pendingProps,s);case 15:return og(i,r,r.type,r.pendingProps,s);case 19:return mg(i,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},i===null?(s=Tl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Qi(i.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return lg(i,r,s);case 24:return da(r),c=At(lt),i===null?(h=mu(),h===null&&(h=_e,x=pu(),h.pooledCache=x,x.refCount++,x!==null&&(h.pooledCacheLanes|=s),h=x),r.memoizedState={parent:c,cache:h},xu(r),Sn(r,lt,h)):((i.lanes&s)!==0&&(vu(i,r),vs(r,null,null,s),xs()),h=i.memoizedState,x=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Sn(r,lt,c)):(c=x.cache,Sn(r,lt,c),c!==h.cache&&fu(r,[lt],s,!0))),yt(i,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function on(i){i.flags|=4}function xg(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!Ex(r)){if(r=mi.current,r!==null&&((Ee&4194048)===Ee?Di!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||r!==Di))throw ms=gu,em;i.flags|=8192}}function El(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Z1():536870912,i.lanes|=r,rr|=r)}function Es(i,r){if(!Ae)switch(i.tailMode){case"hidden":r=i.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Fe(i){var r=i.alternate!==null&&i.alternate.child===i.child,s=0,c=0;if(r)for(var h=i.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=c,i.childLanes=s,r}function M7(i,r,s){var c=r.pendingProps;switch(lu(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(r),null;case 1:return Fe(r),null;case 3:return s=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),nn(lt),Et(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(i===null||i.child===null)&&(ls(r)?on(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Z2())),Fe(r),null;case 26:return s=r.memoizedState,i===null?(on(r),s!==null?(Fe(r),xg(r,s)):(Fe(r),r.flags&=-16777217)):s?s!==i.memoizedState?(on(r),Fe(r),xg(r,s)):(Fe(r),r.flags&=-16777217):(i.memoizedProps!==c&&on(r),Fe(r),r.flags&=-16777217),null;case 27:Zi(r),s=pe.current;var h=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}i=de.current,ls(r)?F2(r):(i=xx(h,c,s),r.stateNode=i,on(r))}return Fe(r),null;case 5:if(Zi(r),s=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}if(i=de.current,ls(r))F2(r);else{switch(h=Nl(pe.current),i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}i[jt]=r,i[zt]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=i;e:switch(bt(i,s,c),s){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&on(r)}}return Fe(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=pe.current,ls(r)){if(i=r.stateNode,s=r.memoizedProps,c=null,h=Vt,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}i[jt]=r,i=!!(i.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||dx(i.nodeValue,s)),i||la(r)}else i=Nl(i).createTextNode(c),i[jt]=r,r.stateNode=i}return Fe(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(h=ls(r),c!==null&&c.dehydrated!==null){if(i===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[jt]=r}else cs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fe(r),h=!1}else h=Z2(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(rn(r),r):(rn(r),null)}if(rn(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,i=i!==null&&i.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var x=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(x=c.memoizedState.cachePool.pool),x!==h&&(c.flags|=2048)}return s!==i&&s&&(r.child.flags|=8192),El(r,r.updateQueue),Fe(r),null;case 4:return Et(),i===null&&bf(r.stateNode.containerInfo),Fe(r),null;case 10:return nn(r.type),Fe(r),null;case 19:if(ae(ct),h=r.memoizedState,h===null)return Fe(r),null;if(c=(r.flags&128)!==0,x=h.rendering,x===null)if(c)Es(h,!1);else{if(Ke!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(x=wl(i),x!==null){for(r.flags|=128,Es(h,!1),i=x.updateQueue,r.updateQueue=i,El(r,i),r.subtreeFlags=0,i=s,s=r.child;s!==null;)Y2(s,i),s=s.sibling;return re(ct,ct.current&1|2),r.child}i=i.sibling}h.tail!==null&&Vi()>Ml&&(r.flags|=128,c=!0,Es(h,!1),r.lanes=4194304)}else{if(!c)if(i=wl(x),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,El(r,i),Es(h,!0),h.tail===null&&h.tailMode==="hidden"&&!x.alternate&&!Ae)return Fe(r),null}else 2*Vi()-h.renderingStartTime>Ml&&s!==536870912&&(r.flags|=128,c=!0,Es(h,!1),r.lanes=4194304);h.isBackwards?(x.sibling=r.child,r.child=x):(i=h.last,i!==null?i.sibling=x:r.child=x,h.last=x)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Vi(),r.sibling=null,i=ct.current,re(ct,c?i&1|2:i&1),r):(Fe(r),null);case 22:case 23:return rn(r),Su(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Fe(r),r.subtreeFlags&6&&(r.flags|=8192)):Fe(r),s=r.updateQueue,s!==null&&El(r,s.retryQueue),s=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),i!==null&&ae(ua),null;case 24:return s=null,i!==null&&(s=i.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),nn(lt),Fe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function L7(i,r){switch(lu(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return nn(lt),Et(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Zi(r),null;case 13:if(rn(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));cs()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ae(ct),null;case 4:return Et(),null;case 10:return nn(r.type),null;case 22:case 23:return rn(r),Su(),i!==null&&ae(ua),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return nn(lt),null;case 25:return null;default:return null}}function vg(i,r){switch(lu(r),r.tag){case 3:nn(lt),Et();break;case 26:case 27:case 5:Zi(r);break;case 4:Et();break;case 13:rn(r);break;case 19:ae(ct);break;case 10:nn(r.type);break;case 22:case 23:rn(r),Su(),i!==null&&ae(ua);break;case 24:nn(lt)}}function js(i,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&i)===i){c=void 0;var x=s.create,S=s.inst;c=x(),S.destroy=c}s=s.next}while(s!==h)}}catch(A){Ue(r,r.return,A)}}function Ln(i,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var x=h.next;c=x;do{if((c.tag&i)===i){var S=c.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,h=r;var D=s,U=A;try{U()}catch(Z){Ue(h,D,Z)}}}c=c.next}while(c!==x)}}catch(Z){Ue(r,r.return,Z)}}function yg(i){var r=i.updateQueue;if(r!==null){var s=i.stateNode;try{sm(r,s)}catch(c){Ue(i,i.return,c)}}}function wg(i,r,s){s.props=pa(i.type,i.memoizedProps),s.state=i.memoizedState;try{s.componentWillUnmount()}catch(c){Ue(i,r,c)}}function As(i,r){try{var s=i.ref;if(s!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof s=="function"?i.refCleanup=s(c):s.current=c}}catch(h){Ue(i,r,h)}}function Hi(i,r){var s=i.ref,c=i.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ue(i,r,h)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ue(i,r,h)}else s.current=null}function bg(i){var r=i.type,s=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ue(i,i.return,h)}}function Wu(i,r,s){try{var c=i.stateNode;W7(c,i.type,s,r),c[zt]=r}catch(h){Ue(i,i.return,h)}}function Sg(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Pn(i.type)||i.tag===4}function Ku(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Sg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Pn(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Qu(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(i,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(i),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(c===27&&Pn(i.type)&&(s=i.stateNode,r=null),i=i.child,i!==null))for(Qu(i,r,s),i=i.sibling;i!==null;)Qu(i,r,s),i=i.sibling}function jl(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?s.insertBefore(i,r):s.appendChild(i);else if(c!==4&&(c===27&&Pn(i.type)&&(s=i.stateNode),i=i.child,i!==null))for(jl(i,r,s),i=i.sibling;i!==null;)jl(i,r,s),i=i.sibling}function Cg(i){var r=i.stateNode,s=i.memoizedProps;try{for(var c=i.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);bt(r,c,s),r[jt]=i,r[zt]=s}catch(x){Ue(i,i.return,x)}}var ln=!1,tt=!1,Ju=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,pt=null;function O7(i,r){if(i=i.containerInfo,Tf=Gl,i=H2(i),Kd(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else e:{s=(s=i.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var S=0,A=-1,D=-1,U=0,Z=0,ee=i,G=null;t:for(;;){for(var Y;ee!==s||h!==0&&ee.nodeType!==3||(A=S+h),ee!==x||c!==0&&ee.nodeType!==3||(D=S+c),ee.nodeType===3&&(S+=ee.nodeValue.length),(Y=ee.firstChild)!==null;)G=ee,ee=Y;for(;;){if(ee===i)break t;if(G===s&&++U===h&&(A=S),G===x&&++Z===c&&(D=S),(Y=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=Y}s=A===-1||D===-1?null:{start:A,end:D}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ef={focusedElem:i,selectionRange:s},Gl=!1,pt=r;pt!==null;)if(r=pt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,pt=i;else for(;pt!==null;){switch(r=pt,x=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&x!==null){i=void 0,s=r,h=x.memoizedProps,x=x.memoizedState,c=s.stateNode;try{var me=pa(s.type,h,s.elementType===s.type);i=c.getSnapshotBeforeUpdate(me,x),c.__reactInternalSnapshotBeforeUpdate=i}catch(fe){Ue(s,s.return,fe)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,s=i.nodeType,s===9)Mf(i);else if(s===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Mf(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,pt=i;break}pt=r.return}}function Eg(i,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:On(i,s),c&4&&js(5,s);break;case 1:if(On(i,s),c&4)if(i=s.stateNode,r===null)try{i.componentDidMount()}catch(S){Ue(s,s.return,S)}else{var h=pa(s.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(h,r,i.__reactInternalSnapshotBeforeUpdate)}catch(S){Ue(s,s.return,S)}}c&64&&yg(s),c&512&&As(s,s.return);break;case 3:if(On(i,s),c&64&&(i=s.updateQueue,i!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{sm(i,r)}catch(S){Ue(s,s.return,S)}}break;case 27:r===null&&c&4&&Cg(s);case 26:case 5:On(i,s),r===null&&c&4&&bg(s),c&512&&As(s,s.return);break;case 12:On(i,s);break;case 13:On(i,s),c&4&&Mg(i,s),c&64&&(i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(s=$7.bind(null,s),nb(i,s))));break;case 22:if(c=s.memoizedState!==null||ln,!c){r=r!==null&&r.memoizedState!==null||tt,h=ln;var x=tt;ln=c,(tt=r)&&!x?Rn(i,s,(s.subtreeFlags&8772)!==0):On(i,s),ln=h,tt=x}break;case 30:break;default:On(i,s)}}function jg(i){var r=i.alternate;r!==null&&(i.alternate=null,jg(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Vd(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ye=null,$t=!1;function cn(i,r,s){for(s=s.child;s!==null;)Ag(i,r,s),s=s.sibling}function Ag(i,r,s){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Xr,s)}catch{}switch(s.tag){case 26:tt||Hi(s,r),cn(i,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:tt||Hi(s,r);var c=Ye,h=$t;Pn(s.type)&&(Ye=s.stateNode,$t=!1),cn(i,r,s),zs(s.stateNode),Ye=c,$t=h;break;case 5:tt||Hi(s,r);case 6:if(c=Ye,h=$t,Ye=null,cn(i,r,s),Ye=c,$t=h,Ye!==null)if($t)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(s.stateNode)}catch(x){Ue(s,r,x)}else try{Ye.removeChild(s.stateNode)}catch(x){Ue(s,r,x)}break;case 18:Ye!==null&&($t?(i=Ye,mx(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.stateNode),Gs(i)):mx(Ye,s.stateNode));break;case 4:c=Ye,h=$t,Ye=s.stateNode.containerInfo,$t=!0,cn(i,r,s),Ye=c,$t=h;break;case 0:case 11:case 14:case 15:tt||Ln(2,s,r),tt||Ln(4,s,r),cn(i,r,s);break;case 1:tt||(Hi(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&wg(s,r,c)),cn(i,r,s);break;case 21:cn(i,r,s);break;case 22:tt=(c=tt)||s.memoizedState!==null,cn(i,r,s),tt=c;break;default:cn(i,r,s)}}function Mg(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Gs(i)}catch(s){Ue(r,r.return,s)}}function R7(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new Tg),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new Tg),r;default:throw Error(a(435,i.tag))}}function ef(i,r){var s=R7(i);r.forEach(function(c){var h=B7.bind(null,i,c);s.has(c)||(s.add(c),c.then(h,h))})}function Jt(i,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],x=i,S=r,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Pn(A.type)){Ye=A.stateNode,$t=!1;break e}break;case 5:Ye=A.stateNode,$t=!1;break e;case 3:case 4:Ye=A.stateNode.containerInfo,$t=!0;break e}A=A.return}if(Ye===null)throw Error(a(160));Ag(x,S,h),Ye=null,$t=!1,x=h.alternate,x!==null&&(x.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Lg(r,i),r=r.sibling}var Ti=null;function Lg(i,r){var s=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Jt(r,i),ei(i),c&4&&(Ln(3,i,i.return),js(3,i),Ln(5,i,i.return));break;case 1:Jt(r,i),ei(i),c&512&&(tt||s===null||Hi(s,s.return)),c&64&&ln&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(s=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Ti;if(Jt(r,i),ei(i),c&512&&(tt||s===null||Hi(s,s.return)),c&4){var x=s!==null?s.memoizedState:null;if(c=i.memoizedState,s===null)if(c===null)if(i.stateNode===null){e:{c=i.type,s=i.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":x=h.getElementsByTagName("title")[0],(!x||x[Kr]||x[jt]||x.namespaceURI==="http://www.w3.org/2000/svg"||x.hasAttribute("itemprop"))&&(x=h.createElement(c),h.head.insertBefore(x,h.querySelector("head > title"))),bt(x,c,s),x[jt]=i,ut(x),c=x;break e;case"link":var S=Cx("link","href",h).get(c+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(x=S[A],x.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&x.getAttribute("rel")===(s.rel==null?null:s.rel)&&x.getAttribute("title")===(s.title==null?null:s.title)&&x.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break t}}x=h.createElement(c),bt(x,c,s),h.head.appendChild(x);break;case"meta":if(S=Cx("meta","content",h).get(c+(s.content||""))){for(A=0;A<S.length;A++)if(x=S[A],x.getAttribute("content")===(s.content==null?null:""+s.content)&&x.getAttribute("name")===(s.name==null?null:s.name)&&x.getAttribute("property")===(s.property==null?null:s.property)&&x.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&x.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break t}}x=h.createElement(c),bt(x,c,s),h.head.appendChild(x);break;default:throw Error(a(468,c))}x[jt]=i,ut(x),c=x}i.stateNode=c}else Tx(h,i.type,i.stateNode);else i.stateNode=Sx(h,c,i.memoizedProps);else x!==c?(x===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):x.count--,c===null?Tx(h,i.type,i.stateNode):Sx(h,c,i.memoizedProps)):c===null&&i.stateNode!==null&&Wu(i,i.memoizedProps,s.memoizedProps)}break;case 27:Jt(r,i),ei(i),c&512&&(tt||s===null||Hi(s,s.return)),s!==null&&c&4&&Wu(i,i.memoizedProps,s.memoizedProps);break;case 5:if(Jt(r,i),ei(i),c&512&&(tt||s===null||Hi(s,s.return)),i.flags&32){h=i.stateNode;try{Pa(h,"")}catch(Y){Ue(i,i.return,Y)}}c&4&&i.stateNode!=null&&(h=i.memoizedProps,Wu(i,h,s!==null?s.memoizedProps:h)),c&1024&&(Ju=!0);break;case 6:if(Jt(r,i),ei(i),c&4){if(i.stateNode===null)throw Error(a(162));c=i.memoizedProps,s=i.stateNode;try{s.nodeValue=c}catch(Y){Ue(i,i.return,Y)}}break;case 3:if(Il=null,h=Ti,Ti=$l(r.containerInfo),Jt(r,i),Ti=h,ei(i),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Gs(r.containerInfo)}catch(Y){Ue(i,i.return,Y)}Ju&&(Ju=!1,Og(i));break;case 4:c=Ti,Ti=$l(i.stateNode.containerInfo),Jt(r,i),ei(i),Ti=c;break;case 12:Jt(r,i),ei(i);break;case 13:Jt(r,i),ei(i),i.child.flags&8192&&i.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(of=Vi()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,ef(i,c)));break;case 22:h=i.memoizedState!==null;var D=s!==null&&s.memoizedState!==null,U=ln,Z=tt;if(ln=U||h,tt=Z||D,Jt(r,i),tt=Z,ln=U,ei(i),c&8192)e:for(r=i.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||D||ln||tt||ha(i)),s=null,r=i;;){if(r.tag===5||r.tag===26){if(s===null){D=s=r;try{if(x=D.stateNode,h)S=x.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=D.stateNode;var ee=D.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Y){Ue(D,D.return,Y)}}}else if(r.tag===6){if(s===null){D=r;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(Y){Ue(D,D.return,Y)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,ef(i,s))));break;case 19:Jt(r,i),ei(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,ef(i,c)));break;case 30:break;case 21:break;default:Jt(r,i),ei(i)}}function ei(i){var r=i.flags;if(r&2){try{for(var s,c=i.return;c!==null;){if(Sg(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,x=Ku(i);jl(i,x,h);break;case 5:var S=s.stateNode;s.flags&32&&(Pa(S,""),s.flags&=-33);var A=Ku(i);jl(i,A,S);break;case 3:case 4:var D=s.stateNode.containerInfo,U=Ku(i);Qu(i,U,D);break;default:throw Error(a(161))}}catch(Z){Ue(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function Og(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;Og(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function On(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Eg(i,r.alternate,r),r=r.sibling}function ha(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ln(4,r,r.return),ha(r);break;case 1:Hi(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&wg(r,r.return,s),ha(r);break;case 27:zs(r.stateNode);case 26:case 5:Hi(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}i=i.sibling}}function Rn(i,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=i,x=r,S=x.flags;switch(x.tag){case 0:case 11:case 15:Rn(h,x,s),js(4,x);break;case 1:if(Rn(h,x,s),c=x,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Ue(c,c.return,U)}if(c=x,h=c.updateQueue,h!==null){var A=c.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)rm(D[h],A)}catch(U){Ue(c,c.return,U)}}s&&S&64&&yg(x),As(x,x.return);break;case 27:Cg(x);case 26:case 5:Rn(h,x,s),s&&c===null&&S&4&&bg(x),As(x,x.return);break;case 12:Rn(h,x,s);break;case 13:Rn(h,x,s),s&&S&4&&Mg(h,x);break;case 22:x.memoizedState===null&&Rn(h,x,s),As(x,x.return);break;case 30:break;default:Rn(h,x,s)}r=r.sibling}}function tf(i,r){var s=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==s&&(i!=null&&i.refCount++,s!=null&&fs(s))}function nf(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&fs(i))}function zi(i,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Rg(i,r,s,c),r=r.sibling}function Rg(i,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:zi(i,r,s,c),h&2048&&js(9,r);break;case 1:zi(i,r,s,c);break;case 3:zi(i,r,s,c),h&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&fs(i)));break;case 12:if(h&2048){zi(i,r,s,c),i=r.stateNode;try{var x=r.memoizedProps,S=x.id,A=x.onPostCommit;typeof A=="function"&&A(S,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(D){Ue(r,r.return,D)}}else zi(i,r,s,c);break;case 13:zi(i,r,s,c);break;case 23:break;case 22:x=r.stateNode,S=r.alternate,r.memoizedState!==null?x._visibility&2?zi(i,r,s,c):Ms(i,r):x._visibility&2?zi(i,r,s,c):(x._visibility|=2,ir(i,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&tf(S,r);break;case 24:zi(i,r,s,c),h&2048&&nf(r.alternate,r);break;default:zi(i,r,s,c)}}function ir(i,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var x=i,S=r,A=s,D=c,U=S.flags;switch(S.tag){case 0:case 11:case 15:ir(x,S,A,D,h),js(8,S);break;case 23:break;case 22:var Z=S.stateNode;S.memoizedState!==null?Z._visibility&2?ir(x,S,A,D,h):Ms(x,S):(Z._visibility|=2,ir(x,S,A,D,h)),h&&U&2048&&tf(S.alternate,S);break;case 24:ir(x,S,A,D,h),h&&U&2048&&nf(S.alternate,S);break;default:ir(x,S,A,D,h)}r=r.sibling}}function Ms(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=i,c=r,h=c.flags;switch(c.tag){case 22:Ms(s,c),h&2048&&tf(c.alternate,c);break;case 24:Ms(s,c),h&2048&&nf(c.alternate,c);break;default:Ms(s,c)}r=r.sibling}}var Ls=8192;function nr(i){if(i.subtreeFlags&Ls)for(i=i.child;i!==null;)Vg(i),i=i.sibling}function Vg(i){switch(i.tag){case 26:nr(i),i.flags&Ls&&i.memoizedState!==null&&gb(Ti,i.memoizedState,i.memoizedProps);break;case 5:nr(i);break;case 3:case 4:var r=Ti;Ti=$l(i.stateNode.containerInfo),nr(i),Ti=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Ls,Ls=16777216,nr(i),Ls=r):nr(i));break;default:nr(i)}}function kg(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Os(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];pt=c,Hg(c,i)}kg(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Dg(i),i=i.sibling}function Dg(i){switch(i.tag){case 0:case 11:case 15:Os(i),i.flags&2048&&Ln(9,i,i.return);break;case 3:Os(i);break;case 12:Os(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Al(i)):Os(i);break;default:Os(i)}}function Al(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];pt=c,Hg(c,i)}kg(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ln(8,r,r.return),Al(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Al(r));break;default:Al(r)}i=i.sibling}}function Hg(i,r){for(;pt!==null;){var s=pt;switch(s.tag){case 0:case 11:case 15:Ln(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:fs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,pt=c;else e:for(s=i;pt!==null;){c=pt;var h=c.sibling,x=c.return;if(jg(c),c===s){pt=null;break e}if(h!==null){h.return=x,pt=h;break e}pt=x}}}var V7={getCacheForType:function(i){var r=At(lt),s=r.data.get(i);return s===void 0&&(s=i(),r.data.set(i,s)),s}},k7=typeof WeakMap=="function"?WeakMap:Map,ze=0,_e=null,Ce=null,Ee=0,Pe=0,ti=null,Vn=!1,ar=!1,af=!1,dn=0,Ke=0,kn=0,ma=0,rf=0,gi=0,rr=0,Rs=null,Bt=null,sf=!1,of=0,Ml=1/0,Ll=null,Dn=null,wt=0,Hn=null,sr=null,or=0,lf=0,cf=null,zg=null,Vs=0,df=null;function ii(){if((ze&2)!==0&&Ee!==0)return Ee&-Ee;if(B.T!==null){var i=Xa;return i!==0?i:xf()}return Q1()}function Pg(){gi===0&&(gi=(Ee&536870912)===0||Ae?X1():536870912);var i=mi.current;return i!==null&&(i.flags|=32),gi}function ni(i,r,s){(i===_e&&(Pe===2||Pe===9)||i.cancelPendingCommit!==null)&&(lr(i,0),zn(i,Ee,gi,!1)),Wr(i,s),((ze&2)===0||i!==_e)&&(i===_e&&((ze&2)===0&&(ma|=s),Ke===4&&zn(i,Ee,gi,!1)),Pi(i))}function Ng(i,r,s){if((ze&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&i.expiredLanes)===0||Zr(i,r),h=c?z7(i,r):pf(i,r,!0),x=c;do{if(h===0){ar&&!c&&zn(i,r,0,!1);break}else{if(s=i.current.alternate,x&&!D7(s)){h=pf(i,r,!1),x=!1;continue}if(h===2){if(x=r,i.errorRecoveryDisabledLanes&x)var S=0;else S=i.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){r=S;e:{var A=i;h=Rs;var D=A.current.memoizedState.isDehydrated;if(D&&(lr(A,S).flags|=256),S=pf(A,S,!1),S!==2){if(af&&!D){A.errorRecoveryDisabledLanes|=x,ma|=x,h=4;break e}x=Bt,Bt=h,x!==null&&(Bt===null?Bt=x:Bt.push.apply(Bt,x))}h=S}if(x=!1,h!==2)continue}}if(h===1){lr(i,0),zn(i,r,0,!0);break}e:{switch(c=i,x=h,x){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:zn(c,r,gi,!Vn);break e;case 2:Bt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=of+300-Vi(),10<h)){if(zn(c,r,gi,!Vn),Bo(c,0,!0)!==0)break e;c.timeoutHandle=px($g.bind(null,c,s,Bt,Ll,sf,r,gi,ma,rr,Vn,x,2,-0,0),h);break e}$g(c,s,Bt,Ll,sf,r,gi,ma,rr,Vn,x,0,-0,0)}}break}while(!0);Pi(i)}function $g(i,r,s,c,h,x,S,A,D,U,Z,ee,G,Y){if(i.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&($s={stylesheets:null,count:0,unsuspend:mb},Vg(r),ee=xb(),ee!==null)){i.cancelPendingCommit=ee(qg.bind(null,i,r,x,s,c,h,S,A,D,Z,1,G,Y)),zn(i,x,S,!U);return}qg(i,r,x,s,c,h,S,A,D)}function D7(i){for(var r=i;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],x=h.getSnapshot;h=h.value;try{if(!Kt(x(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zn(i,r,s,c){r&=~rf,r&=~ma,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var h=r;0<h;){var x=31-Wt(h),S=1<<x;c[x]=-1,h&=~S}s!==0&&W1(i,s,r)}function Ol(){return(ze&6)===0?(ks(0),!1):!0}function uf(){if(Ce!==null){if(Pe===0)var i=Ce.return;else i=Ce,tn=ca=null,Au(i),er=null,Cs=0,i=Ce;for(;i!==null;)vg(i.alternate,i),i=i.return;Ce=null}}function lr(i,r){var s=i.timeoutHandle;s!==-1&&(i.timeoutHandle=-1,Q7(s)),s=i.cancelPendingCommit,s!==null&&(i.cancelPendingCommit=null,s()),uf(),_e=i,Ce=s=Qi(i.current,null),Ee=r,Pe=0,ti=null,Vn=!1,ar=Zr(i,r),af=!1,rr=gi=rf=ma=kn=Ke=0,Bt=Rs=null,sf=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var h=31-Wt(c),x=1<<h;r|=i[h],c&=~x}return dn=r,Qo(),s}function Bg(i,r){we=null,B.H=xl,r===hs||r===ol?(r=nm(),Pe=3):r===em?(r=nm(),Pe=4):Pe=r===ag?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ti=r,Ce===null&&(Ke=1,Sl(i,ui(r,i.current)))}function Ig(){var i=B.H;return B.H=xl,i===null?xl:i}function Ug(){var i=B.A;return B.A=V7,i}function ff(){Ke=4,Vn||(Ee&4194048)!==Ee&&mi.current!==null||(ar=!0),(kn&134217727)===0&&(ma&134217727)===0||_e===null||zn(_e,Ee,gi,!1)}function pf(i,r,s){var c=ze;ze|=2;var h=Ig(),x=Ug();(_e!==i||Ee!==r)&&(Ll=null,lr(i,r)),r=!1;var S=Ke;e:do try{if(Pe!==0&&Ce!==null){var A=Ce,D=ti;switch(Pe){case 8:uf(),S=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(r=!0);var U=Pe;if(Pe=0,ti=null,cr(i,A,D,U),s&&ar){S=0;break e}break;default:U=Pe,Pe=0,ti=null,cr(i,A,D,U)}}H7(),S=Ke;break}catch(Z){Bg(i,Z)}while(!0);return r&&i.shellSuspendCounter++,tn=ca=null,ze=c,B.H=h,B.A=x,Ce===null&&(_e=null,Ee=0,Qo()),S}function H7(){for(;Ce!==null;)_g(Ce)}function z7(i,r){var s=ze;ze|=2;var c=Ig(),h=Ug();_e!==i||Ee!==r?(Ll=null,Ml=Vi()+500,lr(i,r)):ar=Zr(i,r);e:do try{if(Pe!==0&&Ce!==null){r=Ce;var x=ti;t:switch(Pe){case 1:Pe=0,ti=null,cr(i,r,x,1);break;case 2:case 9:if(tm(x)){Pe=0,ti=null,Gg(r);break}r=function(){Pe!==2&&Pe!==9||_e!==i||(Pe=7),Pi(i)},x.then(r,r);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:tm(x)?(Pe=0,ti=null,Gg(r)):(Pe=0,ti=null,cr(i,r,x,7));break;case 5:var S=null;switch(Ce.tag){case 26:S=Ce.memoizedState;case 5:case 27:var A=Ce;if(!S||Ex(S)){Pe=0,ti=null;var D=A.sibling;if(D!==null)Ce=D;else{var U=A.return;U!==null?(Ce=U,Rl(U)):Ce=null}break t}}Pe=0,ti=null,cr(i,r,x,5);break;case 6:Pe=0,ti=null,cr(i,r,x,6);break;case 8:uf(),Ke=6;break e;default:throw Error(a(462))}}P7();break}catch(Z){Bg(i,Z)}while(!0);return tn=ca=null,B.H=c,B.A=h,ze=s,Ce!==null?0:(_e=null,Ee=0,Qo(),Ke)}function P7(){for(;Ce!==null&&!r8();)_g(Ce)}function _g(i){var r=gg(i.alternate,i,dn);i.memoizedProps=i.pendingProps,r===null?Rl(i):Ce=r}function Gg(i){var r=i,s=r.alternate;switch(r.tag){case 15:case 0:r=dg(s,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=dg(s,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:Au(r);default:vg(s,r),r=Ce=Y2(r,dn),r=gg(s,r,dn)}i.memoizedProps=i.pendingProps,r===null?Rl(i):Ce=r}function cr(i,r,s,c){tn=ca=null,Au(r),er=null,Cs=0;var h=r.return;try{if(j7(i,h,r,s,Ee)){Ke=1,Sl(i,ui(s,i.current)),Ce=null;return}}catch(x){if(h!==null)throw Ce=h,x;Ke=1,Sl(i,ui(s,i.current)),Ce=null;return}r.flags&32768?(Ae||c===1?i=!0:ar||(Ee&536870912)!==0?i=!1:(Vn=i=!0,(c===2||c===9||c===3||c===6)&&(c=mi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Yg(r,i)):Rl(r)}function Rl(i){var r=i;do{if((r.flags&32768)!==0){Yg(r,Vn);return}i=r.return;var s=M7(r.alternate,r,dn);if(s!==null){Ce=s;return}if(r=r.sibling,r!==null){Ce=r;return}Ce=r=i}while(r!==null);Ke===0&&(Ke=5)}function Yg(i,r){do{var s=L7(i.alternate,i);if(s!==null){s.flags&=32767,Ce=s;return}if(s=i.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(i=i.sibling,i!==null)){Ce=i;return}Ce=i=s}while(i!==null);Ke=6,Ce=null}function qg(i,r,s,c,h,x,S,A,D){i.cancelPendingCommit=null;do Vl();while(wt!==0);if((ze&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(x=r.lanes|r.childLanes,x|=iu,m8(i,s,x,S,A,D),i===_e&&(Ce=_e=null,Ee=0),sr=r,Hn=i,or=s,lf=x,cf=h,zg=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,I7(Po,function(){return Kg(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,h=W.p,W.p=2,S=ze,ze|=4;try{O7(i,r,s)}finally{ze=S,W.p=h,B.T=c}}wt=1,Fg(),Xg(),Zg()}}function Fg(){if(wt===1){wt=0;var i=Hn,r=sr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=W.p;W.p=2;var h=ze;ze|=4;try{Lg(r,i);var x=Ef,S=H2(i.containerInfo),A=x.focusedElem,D=x.selectionRange;if(S!==A&&A&&A.ownerDocument&&D2(A.ownerDocument.documentElement,A)){if(D!==null&&Kd(A)){var U=D.start,Z=D.end;if(Z===void 0&&(Z=U),"selectionStart"in A)A.selectionStart=U,A.selectionEnd=Math.min(Z,A.value.length);else{var ee=A.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var Y=G.getSelection(),me=A.textContent.length,fe=Math.min(D.start,me),Ie=D.end===void 0?fe:Math.min(D.end,me);!Y.extend&&fe>Ie&&(S=Ie,Ie=fe,fe=S);var $=k2(A,fe),z=k2(A,Ie);if($&&z&&(Y.rangeCount!==1||Y.anchorNode!==$.node||Y.anchorOffset!==$.offset||Y.focusNode!==z.node||Y.focusOffset!==z.offset)){var I=ee.createRange();I.setStart($.node,$.offset),Y.removeAllRanges(),fe>Ie?(Y.addRange(I),Y.extend(z.node,z.offset)):(I.setEnd(z.node,z.offset),Y.addRange(I))}}}}for(ee=[],Y=A;Y=Y.parentNode;)Y.nodeType===1&&ee.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ee.length;A++){var Q=ee[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Gl=!!Tf,Ef=Tf=null}finally{ze=h,W.p=c,B.T=s}}i.current=r,wt=2}}function Xg(){if(wt===2){wt=0;var i=Hn,r=sr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=W.p;W.p=2;var h=ze;ze|=4;try{Eg(i,r.alternate,r)}finally{ze=h,W.p=c,B.T=s}}wt=3}}function Zg(){if(wt===4||wt===3){wt=0,s8();var i=Hn,r=sr,s=or,c=zg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?wt=5:(wt=0,sr=Hn=null,Wg(i,i.pendingLanes));var h=i.pendingLanes;if(h===0&&(Dn=null),Od(s),r=r.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Xr,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=B.T,h=W.p,W.p=2,B.T=null;try{for(var x=i.onRecoverableError,S=0;S<c.length;S++){var A=c[S];x(A.value,{componentStack:A.stack})}}finally{B.T=r,W.p=h}}(or&3)!==0&&Vl(),Pi(i),h=i.pendingLanes,(s&4194090)!==0&&(h&42)!==0?i===df?Vs++:(Vs=0,df=i):Vs=0,ks(0)}}function Wg(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,fs(r)))}function Vl(i){return Fg(),Xg(),Zg(),Kg()}function Kg(){if(wt!==5)return!1;var i=Hn,r=lf;lf=0;var s=Od(or),c=B.T,h=W.p;try{W.p=32>s?32:s,B.T=null,s=cf,cf=null;var x=Hn,S=or;if(wt=0,sr=Hn=null,or=0,(ze&6)!==0)throw Error(a(331));var A=ze;if(ze|=4,Dg(x.current),Rg(x,x.current,S,s),ze=A,ks(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Xr,x)}catch{}return!0}finally{W.p=h,B.T=c,Wg(i,r)}}function Qg(i,r,s){r=ui(s,r),r=Iu(i.stateNode,r,2),i=En(i,r,2),i!==null&&(Wr(i,2),Pi(i))}function Ue(i,r,s){if(i.tag===3)Qg(i,i,s);else for(;r!==null;){if(r.tag===3){Qg(r,i,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dn===null||!Dn.has(c))){i=ui(s,i),s=ig(2),c=En(r,s,2),c!==null&&(ng(s,c,r,i),Wr(c,2),Pi(c));break}}r=r.return}}function hf(i,r,s){var c=i.pingCache;if(c===null){c=i.pingCache=new k7;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(af=!0,h.add(s),i=N7.bind(null,i,r,s),r.then(i,i))}function N7(i,r,s){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&s,i.warmLanes&=~s,_e===i&&(Ee&s)===s&&(Ke===4||Ke===3&&(Ee&62914560)===Ee&&300>Vi()-of?(ze&2)===0&&lr(i,0):rf|=s,rr===Ee&&(rr=0)),Pi(i)}function Jg(i,r){r===0&&(r=Z1()),i=Ga(i,r),i!==null&&(Wr(i,r),Pi(i))}function $7(i){var r=i.memoizedState,s=0;r!==null&&(s=r.retryLane),Jg(i,s)}function B7(i,r){var s=0;switch(i.tag){case 13:var c=i.stateNode,h=i.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),Jg(i,s)}function I7(i,r){return jd(i,r)}var kl=null,dr=null,mf=!1,Dl=!1,gf=!1,ga=0;function Pi(i){i!==dr&&i.next===null&&(dr===null?kl=dr=i:dr=dr.next=i),Dl=!0,mf||(mf=!0,_7())}function ks(i,r){if(!gf&&Dl){gf=!0;do for(var s=!1,c=kl;c!==null;){if(i!==0){var h=c.pendingLanes;if(h===0)var x=0;else{var S=c.suspendedLanes,A=c.pingedLanes;x=(1<<31-Wt(42|i)+1)-1,x&=h&~(S&~A),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(s=!0,nx(c,x))}else x=Ee,x=Bo(c,c===_e?x:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(x&3)===0||Zr(c,x)||(s=!0,nx(c,x));c=c.next}while(s);gf=!1}}function U7(){ex()}function ex(){Dl=mf=!1;var i=0;ga!==0&&(K7()&&(i=ga),ga=0);for(var r=Vi(),s=null,c=kl;c!==null;){var h=c.next,x=tx(c,r);x===0?(c.next=null,s===null?kl=h:s.next=h,h===null&&(dr=s)):(s=c,(i!==0||(x&3)!==0)&&(Dl=!0)),c=h}ks(i)}function tx(i,r){for(var s=i.suspendedLanes,c=i.pingedLanes,h=i.expirationTimes,x=i.pendingLanes&-62914561;0<x;){var S=31-Wt(x),A=1<<S,D=h[S];D===-1?((A&s)===0||(A&c)!==0)&&(h[S]=h8(A,r)):D<=r&&(i.expiredLanes|=A),x&=~A}if(r=_e,s=Ee,s=Bo(i,i===r?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,s===0||i===r&&(Pe===2||Pe===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Ad(c),i.callbackNode=null,i.callbackPriority=0;if((s&3)===0||Zr(i,s)){if(r=s&-s,r===i.callbackPriority)return r;switch(c!==null&&Ad(c),Od(s)){case 2:case 8:s=q1;break;case 32:s=Po;break;case 268435456:s=F1;break;default:s=Po}return c=ix.bind(null,i),s=jd(s,c),i.callbackPriority=r,i.callbackNode=s,r}return c!==null&&c!==null&&Ad(c),i.callbackPriority=2,i.callbackNode=null,2}function ix(i,r){if(wt!==0&&wt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var s=i.callbackNode;if(Vl()&&i.callbackNode!==s)return null;var c=Ee;return c=Bo(i,i===_e?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(Ng(i,c,r),tx(i,Vi()),i.callbackNode!=null&&i.callbackNode===s?ix.bind(null,i):null)}function nx(i,r){if(Vl())return null;Ng(i,r,!0)}function _7(){J7(function(){(ze&6)!==0?jd(Y1,U7):ex()})}function xf(){return ga===0&&(ga=X1()),ga}function ax(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Yo(""+i)}function rx(i,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,i.id&&s.setAttribute("form",i.id),r.parentNode.insertBefore(s,r),i=new FormData(i),s.parentNode.removeChild(s),i}function G7(i,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var x=ax((h[zt]||null).action),S=c.submitter;S&&(r=(r=S[zt]||null)?ax(r.formAction):S.getAttribute("formAction"),r!==null&&(x=r,S=null));var A=new Zo("action","action",null,c,h);i.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ga!==0){var D=S?rx(h,S):new FormData(h);zu(s,{pending:!0,data:D,method:h.method,action:x},null,D)}}else typeof x=="function"&&(A.preventDefault(),D=S?rx(h,S):new FormData(h),zu(s,{pending:!0,data:D,method:h.method,action:x},x,D))},currentTarget:h}]})}}for(var vf=0;vf<tu.length;vf++){var yf=tu[vf],Y7=yf.toLowerCase(),q7=yf[0].toUpperCase()+yf.slice(1);Ci(Y7,"on"+q7)}Ci(N2,"onAnimationEnd"),Ci($2,"onAnimationIteration"),Ci(B2,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(c7,"onTransitionRun"),Ci(d7,"onTransitionStart"),Ci(u7,"onTransitionCancel"),Ci(I2,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ds));function sx(i,r){r=(r&4)!==0;for(var s=0;s<i.length;s++){var c=i[s],h=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var S=c.length-1;0<=S;S--){var A=c[S],D=A.instance,U=A.currentTarget;if(A=A.listener,D!==x&&h.isPropagationStopped())break e;x=A,h.currentTarget=U;try{x(h)}catch(Z){bl(Z)}h.currentTarget=null,x=D}else for(S=0;S<c.length;S++){if(A=c[S],D=A.instance,U=A.currentTarget,A=A.listener,D!==x&&h.isPropagationStopped())break e;x=A,h.currentTarget=U;try{x(h)}catch(Z){bl(Z)}h.currentTarget=null,x=D}}}}function Te(i,r){var s=r[Rd];s===void 0&&(s=r[Rd]=new Set);var c=i+"__bubble";s.has(c)||(ox(r,i,2,!1),s.add(c))}function wf(i,r,s){var c=0;r&&(c|=4),ox(s,i,c,r)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function bf(i){if(!i[Hl]){i[Hl]=!0,e2.forEach(function(s){s!=="selectionchange"&&(F7.has(s)||wf(s,!1,i),wf(s,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Hl]||(r[Hl]=!0,wf("selectionchange",!1,r))}}function ox(i,r,s,c){switch(Rx(r)){case 2:var h=wb;break;case 8:h=bb;break;default:h=Hf}s=h.bind(null,r,s,i),h=void 0,!Ud||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?i.addEventListener(r,s,{capture:!0,passive:h}):i.addEventListener(r,s,!0):h!==void 0?i.addEventListener(r,s,{passive:h}):i.addEventListener(r,s,!1)}function Sf(i,r,s,c,h){var x=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var A=c.stateNode.containerInfo;if(A===h)break;if(S===4)for(S=c.return;S!==null;){var D=S.tag;if((D===3||D===4)&&S.stateNode.containerInfo===h)return;S=S.return}for(;A!==null;){if(S=Ra(A),S===null)return;if(D=S.tag,D===5||D===6||D===26||D===27){c=x=S;continue e}A=A.parentNode}}c=c.return}h2(function(){var U=x,Z=Bd(s),ee=[];e:{var G=U2.get(i);if(G!==void 0){var Y=Zo,me=i;switch(i){case"keypress":if(Fo(s)===0)break e;case"keydown":case"keyup":Y=I8;break;case"focusin":me="focus",Y=qd;break;case"focusout":me="blur",Y=qd;break;case"beforeblur":case"afterblur":Y=qd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=x2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=L8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=G8;break;case N2:case $2:case B2:Y=V8;break;case I2:Y=q8;break;case"scroll":case"scrollend":Y=A8;break;case"wheel":Y=X8;break;case"copy":case"cut":case"paste":Y=D8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=y2;break;case"toggle":case"beforetoggle":Y=W8}var fe=(r&4)!==0,Ie=!fe&&(i==="scroll"||i==="scrollend"),$=fe?G!==null?G+"Capture":null:G;fe=[];for(var z=U,I;z!==null;){var Q=z;if(I=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||I===null||$===null||(Q=Jr(z,$),Q!=null&&fe.push(Hs(z,Q,I))),Ie)break;z=z.return}0<fe.length&&(G=new Y(G,me,null,s,Z),ee.push({event:G,listeners:fe}))}}if((r&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",Y=i==="mouseout"||i==="pointerout",G&&s!==$d&&(me=s.relatedTarget||s.fromElement)&&(Ra(me)||me[Oa]))break e;if((Y||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(me=s.relatedTarget||s.toElement,Y=U,me=me?Ra(me):null,me!==null&&(Ie=l(me),fe=me.tag,me!==Ie||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(Y=null,me=U),Y!==me)){if(fe=x2,Q="onMouseLeave",$="onMouseEnter",z="mouse",(i==="pointerout"||i==="pointerover")&&(fe=y2,Q="onPointerLeave",$="onPointerEnter",z="pointer"),Ie=Y==null?G:Qr(Y),I=me==null?G:Qr(me),G=new fe(Q,z+"leave",Y,s,Z),G.target=Ie,G.relatedTarget=I,Q=null,Ra(Z)===U&&(fe=new fe($,z+"enter",me,s,Z),fe.target=I,fe.relatedTarget=Ie,Q=fe),Ie=Q,Y&&me)t:{for(fe=Y,$=me,z=0,I=fe;I;I=ur(I))z++;for(I=0,Q=$;Q;Q=ur(Q))I++;for(;0<z-I;)fe=ur(fe),z--;for(;0<I-z;)$=ur($),I--;for(;z--;){if(fe===$||$!==null&&fe===$.alternate)break t;fe=ur(fe),$=ur($)}fe=null}else fe=null;Y!==null&&lx(ee,G,Y,fe,!1),me!==null&&Ie!==null&&lx(ee,Ie,me,fe,!0)}}e:{if(G=U?Qr(U):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var se=A2;else if(E2(G))if(M2)se=s7;else{se=a7;var be=n7}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?U&&Nd(U.elementType)&&(se=A2):se=r7;if(se&&(se=se(i,U))){j2(ee,se,s,Z);break e}be&&be(i,G,U),i==="focusout"&&U&&G.type==="number"&&U.memoizedProps.value!=null&&Pd(G,"number",G.value)}switch(be=U?Qr(U):window,i){case"focusin":(E2(be)||be.contentEditable==="true")&&(Ia=be,Qd=U,os=null);break;case"focusout":os=Qd=Ia=null;break;case"mousedown":Jd=!0;break;case"contextmenu":case"mouseup":case"dragend":Jd=!1,z2(ee,s,Z);break;case"selectionchange":if(l7)break;case"keydown":case"keyup":z2(ee,s,Z)}var ce;if(Xd)e:{switch(i){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Ba?C2(i,s)&&(he="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(he="onCompositionStart");he&&(w2&&s.locale!=="ko"&&(Ba||he!=="onCompositionStart"?he==="onCompositionEnd"&&Ba&&(ce=m2()):(bn=Z,_d="value"in bn?bn.value:bn.textContent,Ba=!0)),be=zl(U,he),0<be.length&&(he=new v2(he,i,null,s,Z),ee.push({event:he,listeners:be}),ce?he.data=ce:(ce=T2(s),ce!==null&&(he.data=ce)))),(ce=Q8?J8(i,s):e7(i,s))&&(he=zl(U,"onBeforeInput"),0<he.length&&(be=new v2("onBeforeInput","beforeinput",null,s,Z),ee.push({event:be,listeners:he}),be.data=ce)),G7(ee,i,U,s,Z)}sx(ee,r)})}function Hs(i,r,s){return{instance:i,listener:r,currentTarget:s}}function zl(i,r){for(var s=r+"Capture",c=[];i!==null;){var h=i,x=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||x===null||(h=Jr(i,s),h!=null&&c.unshift(Hs(i,h,x)),h=Jr(i,r),h!=null&&c.push(Hs(i,h,x))),i.tag===3)return c;i=i.return}return[]}function ur(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function lx(i,r,s,c,h){for(var x=r._reactName,S=[];s!==null&&s!==c;){var A=s,D=A.alternate,U=A.stateNode;if(A=A.tag,D!==null&&D===c)break;A!==5&&A!==26&&A!==27||U===null||(D=U,h?(U=Jr(s,x),U!=null&&S.unshift(Hs(s,U,D))):h||(U=Jr(s,x),U!=null&&S.push(Hs(s,U,D)))),s=s.return}S.length!==0&&i.push({event:r,listeners:S})}var X7=/\r\n?/g,Z7=/\u0000|\uFFFD/g;function cx(i){return(typeof i=="string"?i:""+i).replace(X7,`
`).replace(Z7,"")}function dx(i,r){return r=cx(r),cx(i)===r}function Pl(){}function Be(i,r,s,c,h,x){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Pa(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Pa(i,""+c);break;case"className":Uo(i,"class",c);break;case"tabIndex":Uo(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(i,s,c);break;case"style":f2(i,c,x);break;case"data":if(r!=="object"){Uo(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){i.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=Yo(""+c),i.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof x=="function"&&(s==="formAction"?(r!=="input"&&Be(i,r,"name",h.name,h,null),Be(i,r,"formEncType",h.formEncType,h,null),Be(i,r,"formMethod",h.formMethod,h,null),Be(i,r,"formTarget",h.formTarget,h,null)):(Be(i,r,"encType",h.encType,h,null),Be(i,r,"method",h.method,h,null),Be(i,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=Yo(""+c),i.setAttribute(s,c);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}s=Yo(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""+c):i.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""):i.removeAttribute(s);break;case"capture":case"download":c===!0?i.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,c):i.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(s,c):i.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(s):i.setAttribute(s,c);break;case"popover":Te("beforetoggle",i),Te("toggle",i),Io(i,"popover",c);break;case"xlinkActuate":Wi(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Wi(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Wi(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Wi(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Wi(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Wi(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Io(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=E8.get(s)||s,Io(i,s,c))}}function Cf(i,r,s,c,h,x){switch(s){case"style":f2(i,c,x);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"children":typeof c=="string"?Pa(i,c):(typeof c=="number"||typeof c=="bigint")&&Pa(i,""+c);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!t2.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),x=i[zt]||null,x=x!=null?x[s]:null,typeof x=="function"&&i.removeEventListener(r,x,h),typeof c=="function")){typeof x!="function"&&x!==null&&(s in i?i[s]=null:i.hasAttribute(s)&&i.removeAttribute(s)),i.addEventListener(r,c,h);break e}s in i?i[s]=c:c===!0?i.setAttribute(s,""):Io(i,s,c)}}}function bt(i,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",i),Te("load",i);var c=!1,h=!1,x;for(x in s)if(s.hasOwnProperty(x)){var S=s[x];if(S!=null)switch(x){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Be(i,r,x,S,s,null)}}h&&Be(i,r,"srcSet",s.srcSet,s,null),c&&Be(i,r,"src",s.src,s,null);return;case"input":Te("invalid",i);var A=x=S=h=null,D=null,U=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":h=Z;break;case"type":S=Z;break;case"checked":D=Z;break;case"defaultChecked":U=Z;break;case"value":x=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,r));break;default:Be(i,r,c,Z,s,null)}}l2(i,x,A,D,U,S,h,!1),_o(i);return;case"select":Te("invalid",i),c=S=x=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":x=A;break;case"defaultValue":S=A;break;case"multiple":c=A;default:Be(i,r,h,A,s,null)}r=x,s=S,i.multiple=!!c,r!=null?za(i,!!c,r,!1):s!=null&&za(i,!!c,s,!0);return;case"textarea":Te("invalid",i),x=h=c=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":c=A;break;case"defaultValue":h=A;break;case"children":x=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Be(i,r,S,A,s,null)}d2(i,c,h,x),_o(i);return;case"option":for(D in s)if(s.hasOwnProperty(D)&&(c=s[D],c!=null))switch(D){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(i,r,D,c,s,null)}return;case"dialog":Te("beforetoggle",i),Te("toggle",i),Te("cancel",i),Te("close",i);break;case"iframe":case"object":Te("load",i);break;case"video":case"audio":for(c=0;c<Ds.length;c++)Te(Ds[c],i);break;case"image":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"embed":case"source":case"link":Te("error",i),Te("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(c=s[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Be(i,r,U,c,s,null)}return;default:if(Nd(r)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&Cf(i,r,Z,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&Be(i,r,A,c,s,null))}function W7(i,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,x=null,S=null,A=null,D=null,U=null,Z=null;for(Y in s){var ee=s[Y];if(s.hasOwnProperty(Y)&&ee!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":D=ee;default:c.hasOwnProperty(Y)||Be(i,r,Y,null,c,ee)}}for(var G in c){var Y=c[G];if(ee=s[G],c.hasOwnProperty(G)&&(Y!=null||ee!=null))switch(G){case"type":x=Y;break;case"name":h=Y;break;case"checked":U=Y;break;case"defaultChecked":Z=Y;break;case"value":S=Y;break;case"defaultValue":A=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:Y!==ee&&Be(i,r,G,Y,c,ee)}}zd(i,S,A,D,U,Z,x,h);return;case"select":Y=S=A=G=null;for(x in s)if(D=s[x],s.hasOwnProperty(x)&&D!=null)switch(x){case"value":break;case"multiple":Y=D;default:c.hasOwnProperty(x)||Be(i,r,x,null,c,D)}for(h in c)if(x=c[h],D=s[h],c.hasOwnProperty(h)&&(x!=null||D!=null))switch(h){case"value":G=x;break;case"defaultValue":A=x;break;case"multiple":S=x;default:x!==D&&Be(i,r,h,x,c,D)}r=A,s=S,c=Y,G!=null?za(i,!!s,G,!1):!!c!=!!s&&(r!=null?za(i,!!s,r,!0):za(i,!!s,s?[]:"",!1));return;case"textarea":Y=G=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(i,r,A,null,c,h)}for(S in c)if(h=c[S],x=s[S],c.hasOwnProperty(S)&&(h!=null||x!=null))switch(S){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==x&&Be(i,r,S,h,c,x)}c2(i,G,Y);return;case"option":for(var me in s)if(G=s[me],s.hasOwnProperty(me)&&G!=null&&!c.hasOwnProperty(me))switch(me){case"selected":i.selected=!1;break;default:Be(i,r,me,null,c,G)}for(D in c)if(G=c[D],Y=s[D],c.hasOwnProperty(D)&&G!==Y&&(G!=null||Y!=null))switch(D){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Be(i,r,D,G,c,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)G=s[fe],s.hasOwnProperty(fe)&&G!=null&&!c.hasOwnProperty(fe)&&Be(i,r,fe,null,c,G);for(U in c)if(G=c[U],Y=s[U],c.hasOwnProperty(U)&&G!==Y&&(G!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:Be(i,r,U,G,c,Y)}return;default:if(Nd(r)){for(var Ie in s)G=s[Ie],s.hasOwnProperty(Ie)&&G!==void 0&&!c.hasOwnProperty(Ie)&&Cf(i,r,Ie,void 0,c,G);for(Z in c)G=c[Z],Y=s[Z],!c.hasOwnProperty(Z)||G===Y||G===void 0&&Y===void 0||Cf(i,r,Z,G,c,Y);return}}for(var $ in s)G=s[$],s.hasOwnProperty($)&&G!=null&&!c.hasOwnProperty($)&&Be(i,r,$,null,c,G);for(ee in c)G=c[ee],Y=s[ee],!c.hasOwnProperty(ee)||G===Y||G==null&&Y==null||Be(i,r,ee,G,c,Y)}var Tf=null,Ef=null;function Nl(i){return i.nodeType===9?i:i.ownerDocument}function ux(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fx(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function jf(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Af=null;function K7(){var i=window.event;return i&&i.type==="popstate"?i===Af?!1:(Af=i,!0):(Af=null,!1)}var px=typeof setTimeout=="function"?setTimeout:void 0,Q7=typeof clearTimeout=="function"?clearTimeout:void 0,hx=typeof Promise=="function"?Promise:void 0,J7=typeof queueMicrotask=="function"?queueMicrotask:typeof hx<"u"?function(i){return hx.resolve(null).then(i).catch(eb)}:px;function eb(i){setTimeout(function(){throw i})}function Pn(i){return i==="head"}function mx(i,r){var s=r,c=0,h=0;do{var x=s.nextSibling;if(i.removeChild(s),x&&x.nodeType===8)if(s=x.data,s==="/$"){if(0<c&&8>c){s=c;var S=i.ownerDocument;if(s&1&&zs(S.documentElement),s&2&&zs(S.body),s&4)for(s=S.head,zs(s),S=s.firstChild;S;){var A=S.nextSibling,D=S.nodeName;S[Kr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&S.rel.toLowerCase()==="stylesheet"||s.removeChild(S),S=A}}if(h===0){i.removeChild(x),Gs(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=x}while(s);Gs(r)}function Mf(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Mf(s),Vd(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}i.removeChild(s)}}function tb(i,r,s,c){for(;i.nodeType===1;){var h=s;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Kr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(x=i.getAttribute("rel"),x==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(x!==h.rel||i.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||i.getAttribute("title")!==(h.title==null?null:h.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(x=i.getAttribute("src"),(x!==(h.src==null?null:h.src)||i.getAttribute("type")!==(h.type==null?null:h.type)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&x&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var x=h.name==null?null:""+h.name;if(h.type==="hidden"&&i.getAttribute("name")===x)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function ib(i,r,s){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!s||(i=Ei(i.nextSibling),i===null))return null;return i}function Lf(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function nb(i,r){var s=i.ownerDocument;if(i.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Of=null;function gx(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return i;r--}else s==="/$"&&r++}i=i.previousSibling}return null}function xx(i,r,s){switch(r=Nl(s),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function zs(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Vd(i)}var xi=new Map,vx=new Set;function $l(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var un=W.d;W.d={f:ab,r:rb,D:sb,C:ob,L:lb,m:cb,X:ub,S:db,M:fb};function ab(){var i=un.f(),r=Ol();return i||r}function rb(i){var r=Va(i);r!==null&&r.tag===5&&r.type==="form"?Nm(r):un.r(i)}var fr=typeof document>"u"?null:document;function yx(i,r,s){var c=fr;if(c&&typeof r=="string"&&r){var h=di(r);h='link[rel="'+i+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),vx.has(h)||(vx.add(h),i={rel:i,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),bt(r,"link",i),ut(r),c.head.appendChild(r)))}}function sb(i){un.D(i),yx("dns-prefetch",i,null)}function ob(i,r){un.C(i,r),yx("preconnect",i,r)}function lb(i,r,s){un.L(i,r,s);var c=fr;if(c&&i&&r){var h='link[rel="preload"][as="'+di(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+di(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+di(s.imageSizes)+'"]')):h+='[href="'+di(i)+'"]';var x=h;switch(r){case"style":x=pr(i);break;case"script":x=hr(i)}xi.has(x)||(i=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:i,as:r},s),xi.set(x,i),c.querySelector(h)!==null||r==="style"&&c.querySelector(Ps(x))||r==="script"&&c.querySelector(Ns(x))||(r=c.createElement("link"),bt(r,"link",i),ut(r),c.head.appendChild(r)))}}function cb(i,r){un.m(i,r);var s=fr;if(s&&i){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+di(c)+'"][href="'+di(i)+'"]',x=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":x=hr(i)}if(!xi.has(x)&&(i=g({rel:"modulepreload",href:i},r),xi.set(x,i),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Ns(x)))return}c=s.createElement("link"),bt(c,"link",i),ut(c),s.head.appendChild(c)}}}function db(i,r,s){un.S(i,r,s);var c=fr;if(c&&i){var h=ka(c).hoistableStyles,x=pr(i);r=r||"default";var S=h.get(x);if(!S){var A={loading:0,preload:null};if(S=c.querySelector(Ps(x)))A.loading=5;else{i=g({rel:"stylesheet",href:i,"data-precedence":r},s),(s=xi.get(x))&&Rf(i,s);var D=S=c.createElement("link");ut(D),bt(D,"link",i),D._p=new Promise(function(U,Z){D.onload=U,D.onerror=Z}),D.addEventListener("load",function(){A.loading|=1}),D.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Bl(S,r,c)}S={type:"stylesheet",instance:S,count:1,state:A},h.set(x,S)}}}function ub(i,r){un.X(i,r);var s=fr;if(s&&i){var c=ka(s).hoistableScripts,h=hr(i),x=c.get(h);x||(x=s.querySelector(Ns(h)),x||(i=g({src:i,async:!0},r),(r=xi.get(h))&&Vf(i,r),x=s.createElement("script"),ut(x),bt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(h,x))}}function fb(i,r){un.M(i,r);var s=fr;if(s&&i){var c=ka(s).hoistableScripts,h=hr(i),x=c.get(h);x||(x=s.querySelector(Ns(h)),x||(i=g({src:i,async:!0,type:"module"},r),(r=xi.get(h))&&Vf(i,r),x=s.createElement("script"),ut(x),bt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(h,x))}}function wx(i,r,s,c){var h=(h=pe.current)?$l(h):null;if(!h)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=pr(s.href),s=ka(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){i=pr(s.href);var x=ka(h).hoistableStyles,S=x.get(i);if(S||(h=h.ownerDocument||h,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},x.set(i,S),(x=h.querySelector(Ps(i)))&&!x._p&&(S.instance=x,S.state.loading=5),xi.has(i)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xi.set(i,s),x||pb(h,i,s,S.state))),r&&c===null)throw Error(a(528,""));return S}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=hr(s),s=ka(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function pr(i){return'href="'+di(i)+'"'}function Ps(i){return'link[rel="stylesheet"]['+i+"]"}function bx(i){return g({},i,{"data-precedence":i.precedence,precedence:null})}function pb(i,r,s,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),bt(r,"link",s),ut(r),i.head.appendChild(r))}function hr(i){return'[src="'+di(i)+'"]'}function Ns(i){return"script[async]"+i}function Sx(i,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+di(s.href)+'"]');if(c)return r.instance=c,ut(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),ut(c),bt(c,"style",h),Bl(c,s.precedence,i),r.instance=c;case"stylesheet":h=pr(s.href);var x=i.querySelector(Ps(h));if(x)return r.state.loading|=4,r.instance=x,ut(x),x;c=bx(s),(h=xi.get(h))&&Rf(c,h),x=(i.ownerDocument||i).createElement("link"),ut(x);var S=x;return S._p=new Promise(function(A,D){S.onload=A,S.onerror=D}),bt(x,"link",c),r.state.loading|=4,Bl(x,s.precedence,i),r.instance=x;case"script":return x=hr(s.src),(h=i.querySelector(Ns(x)))?(r.instance=h,ut(h),h):(c=s,(h=xi.get(x))&&(c=g({},s),Vf(c,h)),i=i.ownerDocument||i,h=i.createElement("script"),ut(h),bt(h,"link",c),i.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,Bl(c,s.precedence,i));return r.instance}function Bl(i,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,x=h,S=0;S<c.length;S++){var A=c[S];if(A.dataset.precedence===r)x=A;else if(x!==h)break}x?x.parentNode.insertBefore(i,x.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(i,r.firstChild))}function Rf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Vf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Il=null;function Cx(i,r,s){if(Il===null){var c=new Map,h=Il=new Map;h.set(s,c)}else h=Il,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(i))return c;for(c.set(i,null),s=s.getElementsByTagName(i),h=0;h<s.length;h++){var x=s[h];if(!(x[Kr]||x[jt]||i==="link"&&x.getAttribute("rel")==="stylesheet")&&x.namespaceURI!=="http://www.w3.org/2000/svg"){var S=x.getAttribute(r)||"";S=i+S;var A=c.get(S);A?A.push(x):c.set(S,[x])}}return c}function Tx(i,r,s){i=i.ownerDocument||i,i.head.insertBefore(s,r==="title"?i.querySelector("head > title"):null)}function hb(i,r,s){if(s===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Ex(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var $s=null;function mb(){}function gb(i,r,s){if($s===null)throw Error(a(475));var c=$s;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=pr(s.href),x=i.querySelector(Ps(h));if(x){i=x._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Ul.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=x,ut(x);return}x=i.ownerDocument||i,s=bx(s),(h=xi.get(h))&&Rf(s,h),x=x.createElement("link"),ut(x);var S=x;S._p=new Promise(function(A,D){S.onload=A,S.onerror=D}),bt(x,"link",s),r.instance=x}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=Ul.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function xb(){if($s===null)throw Error(a(475));var i=$s;return i.stylesheets&&i.count===0&&kf(i,i.stylesheets),0<i.count?function(r){var s=setTimeout(function(){if(i.stylesheets&&kf(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(s)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)kf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var _l=null;function kf(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,_l=new Map,r.forEach(vb,i),_l=null,Ul.call(i))}function vb(i,r){if(!(r.state.loading&4)){var s=_l.get(i);if(s)var c=s.get(null);else{s=new Map,_l.set(i,s);for(var h=i.querySelectorAll("link[data-precedence],style[data-precedence]"),x=0;x<h.length;x++){var S=h[x];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),c=S)}c&&s.set(null,c)}h=r.instance,S=h.getAttribute("data-precedence"),x=s.get(S)||c,x===c&&s.set(null,h),s.set(S,h),this.count++,c=Ul.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),x?x.parentNode.insertBefore(h,x.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(h,i.firstChild)),r.state.loading|=4}}var Bs={$$typeof:T,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function yb(i,r,s,c,h,x,S,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Md(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.hiddenUpdates=Md(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=x,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function jx(i,r,s,c,h,x,S,A,D,U,Z,ee){return i=new yb(i,r,s,S,A,D,U,ee),r=1,x===!0&&(r|=24),x=Qt(3,null,null,r),i.current=x,x.stateNode=i,r=pu(),r.refCount++,i.pooledCache=r,r.refCount++,x.memoizedState={element:c,isDehydrated:s,cache:r},xu(x),i}function Ax(i){return i?(i=Ya,i):Ya}function Mx(i,r,s,c,h,x){h=Ax(h),c.context===null?c.context=h:c.pendingContext=h,c=Tn(r),c.payload={element:s},x=x===void 0?null:x,x!==null&&(c.callback=x),s=En(i,c,r),s!==null&&(ni(s,i,r),gs(s,i,r))}function Lx(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<r?s:r}}function Df(i,r){Lx(i,r),(i=i.alternate)&&Lx(i,r)}function Ox(i){if(i.tag===13){var r=Ga(i,67108864);r!==null&&ni(r,i,67108864),Df(i,67108864)}}var Gl=!0;function wb(i,r,s,c){var h=B.T;B.T=null;var x=W.p;try{W.p=2,Hf(i,r,s,c)}finally{W.p=x,B.T=h}}function bb(i,r,s,c){var h=B.T;B.T=null;var x=W.p;try{W.p=8,Hf(i,r,s,c)}finally{W.p=x,B.T=h}}function Hf(i,r,s,c){if(Gl){var h=zf(c);if(h===null)Sf(i,r,c,Yl,s),Vx(i,c);else if(Cb(h,i,r,s,c))c.stopPropagation();else if(Vx(i,c),r&4&&-1<Sb.indexOf(i)){for(;h!==null;){var x=Va(h);if(x!==null)switch(x.tag){case 3:if(x=x.stateNode,x.current.memoizedState.isDehydrated){var S=Jn(x.pendingLanes);if(S!==0){var A=x;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var D=1<<31-Wt(S);A.entanglements[1]|=D,S&=~D}Pi(x),(ze&6)===0&&(Ml=Vi()+500,ks(0))}}break;case 13:A=Ga(x,2),A!==null&&ni(A,x,2),Ol(),Df(x,2)}if(x=zf(c),x===null&&Sf(i,r,c,Yl,s),x===h)break;h=x}h!==null&&c.stopPropagation()}else Sf(i,r,c,null,s)}}function zf(i){return i=Bd(i),Pf(i)}var Yl=null;function Pf(i){if(Yl=null,i=Ra(i),i!==null){var r=l(i);if(r===null)i=null;else{var s=r.tag;if(s===13){if(i=d(r),i!==null)return i;i=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Yl=i,null}function Rx(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(o8()){case Y1:return 2;case q1:return 8;case Po:case l8:return 32;case F1:return 268435456;default:return 32}default:return 32}}var Nf=!1,Nn=null,$n=null,Bn=null,Is=new Map,Us=new Map,In=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vx(i,r){switch(i){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Is.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(r.pointerId)}}function _s(i,r,s,c,h,x){return i===null||i.nativeEvent!==x?(i={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},r!==null&&(r=Va(r),r!==null&&Ox(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),i)}function Cb(i,r,s,c,h){switch(r){case"focusin":return Nn=_s(Nn,i,r,s,c,h),!0;case"dragenter":return $n=_s($n,i,r,s,c,h),!0;case"mouseover":return Bn=_s(Bn,i,r,s,c,h),!0;case"pointerover":var x=h.pointerId;return Is.set(x,_s(Is.get(x)||null,i,r,s,c,h)),!0;case"gotpointercapture":return x=h.pointerId,Us.set(x,_s(Us.get(x)||null,i,r,s,c,h)),!0}return!1}function kx(i){var r=Ra(i.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){i.blockedOn=r,g8(i.priority,function(){if(s.tag===13){var c=ii();c=Ld(c);var h=Ga(s,c);h!==null&&ni(h,s,c),Df(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ql(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var s=zf(i.nativeEvent);if(s===null){s=i.nativeEvent;var c=new s.constructor(s.type,s);$d=c,s.target.dispatchEvent(c),$d=null}else return r=Va(s),r!==null&&Ox(r),i.blockedOn=s,!1;r.shift()}return!0}function Dx(i,r,s){ql(i)&&s.delete(r)}function Tb(){Nf=!1,Nn!==null&&ql(Nn)&&(Nn=null),$n!==null&&ql($n)&&($n=null),Bn!==null&&ql(Bn)&&(Bn=null),Is.forEach(Dx),Us.forEach(Dx)}function Fl(i,r){i.blockedOn===r&&(i.blockedOn=null,Nf||(Nf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tb)))}var Xl=null;function Hx(i){Xl!==i&&(Xl=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Xl===i&&(Xl=null);for(var r=0;r<i.length;r+=3){var s=i[r],c=i[r+1],h=i[r+2];if(typeof c!="function"){if(Pf(c||s)===null)continue;break}var x=Va(s);x!==null&&(i.splice(r,3),r-=3,zu(x,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function Gs(i){function r(D){return Fl(D,i)}Nn!==null&&Fl(Nn,i),$n!==null&&Fl($n,i),Bn!==null&&Fl(Bn,i),Is.forEach(r),Us.forEach(r);for(var s=0;s<In.length;s++){var c=In[s];c.blockedOn===i&&(c.blockedOn=null)}for(;0<In.length&&(s=In[0],s.blockedOn===null);)kx(s),s.blockedOn===null&&In.shift();if(s=(i.ownerDocument||i).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],x=s[c+1],S=h[zt]||null;if(typeof x=="function")S||Hx(s);else if(S){var A=null;if(x&&x.hasAttribute("formAction")){if(h=x,S=x[zt]||null)A=S.formAction;else if(Pf(h)!==null)continue}else A=S.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),Hx(s)}}}function $f(i){this._internalRoot=i}Zl.prototype.render=$f.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=ii();Mx(s,c,i,r,null,null)},Zl.prototype.unmount=$f.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Mx(i.current,2,null,i,null,null),Ol(),r[Oa]=null}};function Zl(i){this._internalRoot=i}Zl.prototype.unstable_scheduleHydration=function(i){if(i){var r=Q1();i={blockedOn:null,target:i,priority:r};for(var s=0;s<In.length&&r!==0&&r<In[s].priority;s++);In.splice(s,0,i),s===0&&kx(i)}};var zx=t.version;if(zx!=="19.1.1")throw Error(a(527,zx,"19.1.1"));W.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=p(r),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var Eb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Xr=Wl.inject(Eb),Zt=Wl}catch{}}return qs.createRoot=function(i,r){if(!o(i))throw Error(a(299));var s=!1,c="",h=Qm,x=Jm,S=eg,A=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(S=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=jx(i,1,!1,null,null,s,c,h,x,S,A,null),i[Oa]=r.current,bf(i),new $f(r)},qs.hydrateRoot=function(i,r,s){if(!o(i))throw Error(a(299));var c=!1,h="",x=Qm,S=Jm,A=eg,D=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(x=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(D=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),r=jx(i,1,!0,r,s??null,c,h,x,S,A,D,U),r.context=Ax(null),s=r.current,c=ii(),c=Ld(c),h=Tn(c),h.callback=null,En(s,h,c),s=c,r.current.lanes=s,Wr(r,s),Pi(r),i[Oa]=r.current,bf(i),new Zl(r)},qs.version="19.1.1",qs}var qx;function zb(){if(qx)return If.exports;qx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),If.exports=Hb(),If.exports}var Pb=zb();const Nb=sd(Pb);var R=th();const De=sd(R),Fx=Ab({__proto__:null,default:De},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xx="popstate";function $b(e={}){function t(a,o){let{pathname:l,search:d,hash:u}=a.location;return ap("",{pathname:l,search:d,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:ho(o)}return Ib(t,n,null,e)}function qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Li(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bb(){return Math.random().toString(36).substring(2,10)}function Zx(e,t){return{usr:e.state,key:e.key,idx:t}}function ap(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Br(t):t,state:n,key:t&&t.key||a||Bb()}}function ho({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function Ib(e,t,n,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,d=o.history,u="POP",p=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function v(){u="POP";let L=g(),M=L==null?null:L-m;m=L,p&&p({action:u,location:j.location,delta:M})}function y(L,M){u="PUSH";let E=ap(j.location,L,M);m=g()+1;let T=Zx(E,m),k=j.createHref(E);try{d.pushState(T,"",k)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(k)}l&&p&&p({action:u,location:j.location,delta:1})}function C(L,M){u="REPLACE";let E=ap(j.location,L,M);m=g();let T=Zx(E,m),k=j.createHref(E);d.replaceState(T,"",k),l&&p&&p({action:u,location:j.location,delta:0})}function b(L){return Ub(L)}let j={get action(){return u},get location(){return e(o,d)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Xx,v),p=L,()=>{o.removeEventListener(Xx,v),p=null}},createHref(L){return t(o,L)},createURL:b,encodeLocation(L){let M=b(L);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:C,go(L){return d.go(L)}};return j}function Ub(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),qe(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:ho(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Oy(e,t,n="/"){return _b(e,t,n,!1)}function _b(e,t,n,a){let o=typeof t=="string"?Br(t):t,l=gn(o.pathname||"/",n);if(l==null)return null;let d=Ry(e);Gb(d);let u=null;for(let p=0;u==null&&p<d.length;++p){let m=t9(l);u=Jb(d[p],m,a)}return u}function Ry(e,t=[],n=[],a=""){let o=(l,d,u)=>{let p={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};p.relativePath.startsWith("/")&&(qe(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let m=mn([a,p.relativePath]),g=n.concat(p);l.children&&l.children.length>0&&(qe(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ry(l.children,t,g,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:Kb(m,l.index),routesMeta:g})};return e.forEach((l,d)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,d);else for(let p of Vy(l.path))o(l,d,p)}),t}function Vy(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let d=Vy(a.join("/")),u=[];return u.push(...d.map(p=>p===""?l:[l,p].join("/"))),o&&u.push(...d),u.map(p=>e.startsWith("/")&&p===""?"/":p)}function Gb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qb(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var Yb=/^:[\w-]+$/,qb=3,Fb=2,Xb=1,Zb=10,Wb=-2,Wx=e=>e==="*";function Kb(e,t){let n=e.split("/"),a=n.length;return n.some(Wx)&&(a+=Wb),t&&(a+=Fb),n.filter(o=>!Wx(o)).reduce((o,l)=>o+(Yb.test(l)?qb:l===""?Xb:Zb),a)}function Qb(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function Jb(e,t,n=!1){let{routesMeta:a}=e,o={},l="/",d=[];for(let u=0;u<a.length;++u){let p=a[u],m=u===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",v=zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!v&&m&&n&&!a[a.length-1].route.index&&(v=zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),d.push({params:o,pathname:mn([l,v.pathname]),pathnameBase:r9(mn([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=mn([l,v.pathnameBase]))}return d}function zc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=e9(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=u[y]||"";d=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const C=u[y];return v&&!C?m[g]=void 0:m[g]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:d,pattern:e}}function e9(e,t=!1,n=!0){Li(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,u,p)=>(a.push({paramName:u,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function t9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function i9(e,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:n9(n,t):t,search:s9(a),hash:o9(o)}}function n9(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function qf(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function a9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ih(e){let t=a9(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function nh(e,t,n,a=!1){let o;typeof e=="string"?o=Br(e):(o={...e},qe(!o.pathname||!o.pathname.includes("?"),qf("?","pathname","search",o)),qe(!o.pathname||!o.pathname.includes("#"),qf("#","pathname","hash",o)),qe(!o.search||!o.search.includes("#"),qf("#","search","hash",o)));let l=e===""||o.pathname==="",d=l?"/":o.pathname,u;if(d==null)u=n;else{let v=t.length-1;if(!a&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}u=v>=0?t[v]:"/"}let p=i9(o,u),m=d&&d!=="/"&&d.endsWith("/"),g=(l||d===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var mn=e=>e.join("/").replace(/\/\/+/g,"/"),r9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ky=["POST","PUT","PATCH","DELETE"];new Set(ky);var c9=["GET",...ky];new Set(c9);var Ir=R.createContext(null);Ir.displayName="DataRouter";var od=R.createContext(null);od.displayName="DataRouterState";R.createContext(!1);var Dy=R.createContext({isTransitioning:!1});Dy.displayName="ViewTransition";var d9=R.createContext(new Map);d9.displayName="Fetchers";var u9=R.createContext(null);u9.displayName="Await";var Ri=R.createContext(null);Ri.displayName="Navigation";var Mo=R.createContext(null);Mo.displayName="Location";var bi=R.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var ah=R.createContext(null);ah.displayName="RouteError";function f9(e,{relative:t}={}){qe(Ur(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=R.useContext(Ri),{hash:o,pathname:l,search:d}=Lo(e,{relative:t}),u=l;return n!=="/"&&(u=l==="/"?n:mn([n,l])),a.createHref({pathname:u,search:d,hash:o})}function Ur(){return R.useContext(Mo)!=null}function Si(){return qe(Ur(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Mo).location}var Hy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zy(e){R.useContext(Ri).static||R.useLayoutEffect(e)}function rh(){let{isDataRoute:e}=R.useContext(bi);return e?M9():p9()}function p9(){qe(Ur(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Ir),{basename:t,navigator:n}=R.useContext(Ri),{matches:a}=R.useContext(bi),{pathname:o}=Si(),l=JSON.stringify(ih(a)),d=R.useRef(!1);return zy(()=>{d.current=!0}),R.useCallback((p,m={})=>{if(Li(d.current,Hy),!d.current)return;if(typeof p=="number"){n.go(p);return}let g=nh(p,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:mn([t,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[t,n,l,o,e])}var h9=R.createContext(null);function m9(e){let t=R.useContext(bi).outlet;return t&&R.createElement(h9.Provider,{value:e},t)}function g9(){let{matches:e}=R.useContext(bi),t=e[e.length-1];return t?t.params:{}}function Lo(e,{relative:t}={}){let{matches:n}=R.useContext(bi),{pathname:a}=Si(),o=JSON.stringify(ih(n));return R.useMemo(()=>nh(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function x9(e,t){return Py(e,t)}function Py(e,t,n,a){var M;qe(Ur(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(Ri),{matches:l}=R.useContext(bi),d=l[l.length-1],u=d?d.params:{},p=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let E=g&&g.path||"";Ny(p,!g||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let v=Si(),y;if(t){let E=typeof t=="string"?Br(t):t;qe(m==="/"||((M=E.pathname)==null?void 0:M.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${E.pathname}" was given in the \`location\` prop.`),y=E}else y=v;let C=y.pathname||"/",b=C;if(m!=="/"){let E=m.replace(/^\//,"").split("/");b="/"+C.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=Oy(e,{pathname:b});Li(g||j!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Li(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=S9(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},u,E.params),pathname:mn([m,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?m:mn([m,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,n,a);return t&&L?R.createElement(Mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},L):L}function v9(){let e=A9(),t=l9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:o},n):null,d)}var y9=R.createElement(v9,null),w9=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?R.createElement(bi.Provider,{value:this.props.routeContext},R.createElement(ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function b9({routeContext:e,match:t,children:n}){let a=R.useContext(Ir);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(bi.Provider,{value:e},n)}function S9(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=n==null?void 0:n.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let d=!1,u=-1;if(n)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=p),m.route.id){let{loaderData:g,errors:v}=n,y=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||y){d=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let v,y=!1,C=null,b=null;n&&(v=l&&m.route.id?l[m.route.id]:void 0,C=m.route.errorElement||y9,d&&(u<0&&g===0?(Ny("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):u===g&&(y=!0,b=m.route.hydrateFallbackElement||null)));let j=t.concat(o.slice(0,g+1)),L=()=>{let M;return v?M=C:y?M=b:m.route.Component?M=R.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=p,R.createElement(b9,{match:m,routeContext:{outlet:p,matches:j,isDataRoute:n!=null},children:M})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(w9,{location:n.location,revalidation:n.revalidation,component:C,error:v,children:L(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):L()},null)}function sh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C9(e){let t=R.useContext(Ir);return qe(t,sh(e)),t}function T9(e){let t=R.useContext(od);return qe(t,sh(e)),t}function E9(e){let t=R.useContext(bi);return qe(t,sh(e)),t}function oh(e){let t=E9(e),n=t.matches[t.matches.length-1];return qe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function j9(){return oh("useRouteId")}function A9(){var a;let e=R.useContext(ah),t=T9("useRouteError"),n=oh("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function M9(){let{router:e}=C9("useNavigate"),t=oh("useNavigate"),n=R.useRef(!1);return zy(()=>{n.current=!0}),R.useCallback(async(o,l={})=>{Li(n.current,Hy),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Kx={};function Ny(e,t,n){!t&&!Kx[e]&&(Kx[e]=!0,Li(!1,n))}R.memo(L9);function L9({routes:e,future:t,state:n}){return Py(e,void 0,n,t)}function O9({to:e,replace:t,state:n,relative:a}){qe(Ur(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(Ri);Li(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(bi),{pathname:d}=Si(),u=rh(),p=nh(e,ih(l),d,a==="path"),m=JSON.stringify(p);return R.useEffect(()=>{u(JSON.parse(m),{replace:t,state:n,relative:a})},[u,m,a,t,n]),null}function R9(e){return m9(e.context)}function mt(e){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function V9({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:l=!1}){qe(!Ur(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:d,navigator:o,static:l,future:{}}),[d,o,l]);typeof n=="string"&&(n=Br(n));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=n,C=R.useMemo(()=>{let b=gn(p,d);return b==null?null:{location:{pathname:b,search:m,hash:g,state:v,key:y},navigationType:a}},[d,p,m,g,v,y,a]);return Li(C!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:R.createElement(Ri.Provider,{value:u},R.createElement(Mo.Provider,{children:t,value:C}))}function k9({children:e,location:t}){return x9(rp(e),t)}function rp(e,t=[]){let n=[];return R.Children.forEach(e,(a,o)=>{if(!R.isValidElement(a))return;let l=[...t,o];if(a.type===R.Fragment){n.push.apply(n,rp(a.props.children,l));return}qe(a.type===mt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=rp(a.props.children,l)),n.push(d)}),n}var yc="get",wc="application/x-www-form-urlencoded";function ld(e){return e!=null&&typeof e.tagName=="string"}function D9(e){return ld(e)&&e.tagName.toLowerCase()==="button"}function H9(e){return ld(e)&&e.tagName.toLowerCase()==="form"}function z9(e){return ld(e)&&e.tagName.toLowerCase()==="input"}function P9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N9(e,t){return e.button===0&&(!t||t==="_self")&&!P9(e)}var Kl=null;function $9(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var B9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ff(e){return e!=null&&!B9.has(e)?(Li(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wc}"`),null):e}function I9(e,t){let n,a,o,l,d;if(H9(e)){let u=e.getAttribute("action");a=u?gn(u,t):null,n=e.getAttribute("method")||yc,o=Ff(e.getAttribute("enctype"))||wc,l=new FormData(e)}else if(D9(e)||z9(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||u.getAttribute("action");if(a=p?gn(p,t):null,n=e.getAttribute("formmethod")||u.getAttribute("method")||yc,o=Ff(e.getAttribute("formenctype"))||Ff(u.getAttribute("enctype"))||wc,l=new FormData(u,e),!$9()){let{name:m,type:g,value:v}=e;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,v)}}else{if(ld(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yc,a=null,o=wc,d=e}return l&&o==="text/plain"&&(d=l,l=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:l,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function U9(e,t,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&gn(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function _9(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Y9(e,t,n){let a=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let d=await _9(l,n);return d.links?d.links():[]}return[]}));return Z9(a.flat(1).filter(G9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Qx(e,t,n,a,o,l){let d=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,u=(p,m)=>{var g;return n[m].pathname!==p.pathname||((g=n[m].route.path)==null?void 0:g.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,m)=>d(p,m)||u(p,m)):l==="data"?t.filter((p,m)=>{var v;let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,m)||u(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function q9(e,t,{includeHydrateFallback:n}={}){return F9(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function F9(e){return[...new Set(e)]}function X9(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function Z9(e,t){let n=new Set;return new Set(t),e.reduce((a,o)=>{let l=JSON.stringify(X9(o));return n.has(l)||(n.add(l),a.push({key:l,link:o})),a},[])}function $y(){let e=R.useContext(Ir);return lh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function W9(){let e=R.useContext(od);return lh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ch=R.createContext(void 0);ch.displayName="FrameworkContext";function By(){let e=R.useContext(ch);return lh(e,"You must render this element inside a <HydratedRouter> element"),e}function K9(e,t){let n=R.useContext(ch),[a,o]=R.useState(!1),[l,d]=R.useState(!1),{onFocus:u,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=t,y=R.useRef(null);R.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let j=M=>{M.forEach(E=>{d(E.isIntersecting)})},L=new IntersectionObserver(j,{threshold:.5});return y.current&&L.observe(y.current),()=>{L.disconnect()}}},[e]),R.useEffect(()=>{if(a){let j=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(j)}}},[a]);let C=()=>{o(!0)},b=()=>{o(!1),d(!1)};return n?e!=="intent"?[l,y,{}]:[l,y,{onFocus:Fs(u,C),onBlur:Fs(p,b),onMouseEnter:Fs(m,C),onMouseLeave:Fs(g,b),onTouchStart:Fs(v,C)}]:[!1,y,{}]}function Fs(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Q9({page:e,...t}){let{router:n}=$y(),a=R.useMemo(()=>Oy(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?R.createElement(eS,{page:e,matches:a,...t}):null}function J9(e){let{manifest:t,routeModules:n}=By(),[a,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return Y9(e,t,n).then(d=>{l||o(d)}),()=>{l=!0}},[e,t,n]),a}function eS({page:e,matches:t,...n}){let a=Si(),{manifest:o,routeModules:l}=By(),{basename:d}=$y(),{loaderData:u,matches:p}=W9(),m=R.useMemo(()=>Qx(e,t,p,o,a,"data"),[e,t,p,o,a]),g=R.useMemo(()=>Qx(e,t,p,o,a,"assets"),[e,t,p,o,a]),v=R.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let b=new Set,j=!1;if(t.forEach(M=>{var T;let E=o.routes[M.route.id];!E||!E.hasLoader||(!m.some(k=>k.route.id===M.route.id)&&M.route.id in u&&((T=l[M.route.id])!=null&&T.shouldRevalidate)||E.hasClientLoader?j=!0:b.add(M.route.id))}),b.size===0)return[];let L=U9(e,d,"data");return j&&b.size>0&&L.searchParams.set("_routes",t.filter(M=>b.has(M.route.id)).map(M=>M.route.id).join(",")),[L.pathname+L.search]},[d,u,a,o,m,t,e,l]),y=R.useMemo(()=>q9(g,o),[g,o]),C=J9(g);return R.createElement(R.Fragment,null,v.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),y.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),C.map(({key:b,link:j})=>R.createElement("link",{key:b,nonce:n.nonce,...j})))}function tS(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Iy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Iy&&(window.__reactRouterVersion="7.8.0")}catch{}function iS({basename:e,children:t,window:n}){let a=R.useRef();a.current==null&&(a.current=$b({window:n,v5Compat:!0}));let o=a.current,[l,d]=R.useState({action:o.action,location:o.location}),u=R.useCallback(p=>{R.startTransition(()=>d(p))},[d]);return R.useLayoutEffect(()=>o.listen(u),[o,u]),R.createElement(V9,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var Uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_y=R.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:l,replace:d,state:u,target:p,to:m,preventScrollReset:g,viewTransition:v,...y},C){let{basename:b}=R.useContext(Ri),j=typeof m=="string"&&Uy.test(m),L,M=!1;if(typeof m=="string"&&j&&(L=m,Iy))try{let q=new URL(window.location.href),F=m.startsWith("//")?new URL(q.protocol+m):new URL(m),K=gn(F.pathname,b);F.origin===q.origin&&K!=null?m=K+F.search+F.hash:M=!0}catch{Li(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=f9(m,{relative:o}),[T,k,O]=K9(a,y),N=rS(m,{replace:d,state:u,target:p,preventScrollReset:g,relative:o,viewTransition:v});function P(q){t&&t(q),q.defaultPrevented||N(q)}let _=R.createElement("a",{...y,...O,href:L||E,onClick:M||l?t:P,ref:tS(C,k),target:p,"data-discover":!j&&n==="render"?"true":void 0});return T&&!j?R.createElement(R.Fragment,null,_,R.createElement(Q9,{page:E})):_});_y.displayName="Link";var Tt=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:l,to:d,viewTransition:u,children:p,...m},g){let v=Lo(d,{relative:m.relative}),y=Si(),C=R.useContext(od),{navigator:b,basename:j}=R.useContext(Ri),L=C!=null&&dS(v)&&u===!0,M=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,E=y.pathname,T=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(E=E.toLowerCase(),T=T?T.toLowerCase():null,M=M.toLowerCase()),T&&j&&(T=gn(T,j)||T);const k=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let O=E===M||!o&&E.startsWith(M)&&E.charAt(k)==="/",N=T!=null&&(T===M||!o&&T.startsWith(M)&&T.charAt(M.length)==="/"),P={isActive:O,isPending:N,isTransitioning:L},_=O?t:void 0,q;typeof a=="function"?q=a(P):q=[a,O?"active":null,N?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let F=typeof l=="function"?l(P):l;return R.createElement(_y,{...m,"aria-current":_,className:q,ref:g,style:F,to:d,viewTransition:u},typeof p=="function"?p(P):p)});Tt.displayName="NavLink";var nS=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:l,method:d=yc,action:u,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...y},C)=>{let b=lS(),j=cS(u,{relative:m}),L=d.toLowerCase()==="get"?"get":"post",M=typeof u=="string"&&Uy.test(u),E=T=>{if(p&&p(T),T.defaultPrevented)return;T.preventDefault();let k=T.nativeEvent.submitter,O=(k==null?void 0:k.getAttribute("formmethod"))||d;b(k||T.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:v})};return R.createElement("form",{ref:C,method:L,action:j,onSubmit:a?p:E,...y,"data-discover":!M&&e==="render"?"true":void 0})});nS.displayName="Form";function aS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gy(e){let t=R.useContext(Ir);return qe(t,aS(e)),t}function rS(e,{target:t,replace:n,state:a,preventScrollReset:o,relative:l,viewTransition:d}={}){let u=rh(),p=Si(),m=Lo(e,{relative:l});return R.useCallback(g=>{if(N9(g,t)){g.preventDefault();let v=n!==void 0?n:ho(p)===ho(m);u(e,{replace:v,state:a,preventScrollReset:o,relative:l,viewTransition:d})}},[p,u,m,n,a,t,e,o,l,d])}var sS=0,oS=()=>`__${String(++sS)}__`;function lS(){let{router:e}=Gy("useSubmit"),{basename:t}=R.useContext(Ri),n=j9();return R.useCallback(async(a,o={})=>{let{action:l,method:d,encType:u,formData:p,body:m}=I9(a,t);if(o.navigate===!1){let g=o.fetcherKey||oS();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||d,formEncType:o.encType||u,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||d,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function cS(e,{relative:t}={}){let{basename:n}=R.useContext(Ri),a=R.useContext(bi);qe(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...Lo(e||".",{relative:t})},d=Si();if(e==null){l.search=d.search;let u=new URLSearchParams(l.search),p=u.getAll("index");if(p.some(g=>g==="")){u.delete("index"),p.filter(v=>v).forEach(v=>u.append("index",v));let g=u.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:mn([n,l.pathname])),ho(l)}function dS(e,{relative:t}={}){let n=R.useContext(Dy);qe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Gy("useViewTransitionState"),o=Lo(e,{relative:t});if(!n.isTransitioning)return!1;let l=gn(n.currentLocation.pathname,a)||n.currentLocation.pathname,d=gn(n.nextLocation.pathname,a)||n.nextLocation.pathname;return zc(o.pathname,d)!=null||zc(o.pathname,l)!=null}function uS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function fS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var pS=function(){function e(n){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fS(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=uS(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),Lt="-ms-",Pc="-moz-",Me="-webkit-",Yy="comm",dh="rule",uh="decl",hS="@import",qy="@keyframes",mS="@layer",gS=Math.abs,cd=String.fromCharCode,xS=Object.assign;function vS(e,t){return St(e,0)^45?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}function Fy(e){return e.trim()}function yS(e,t){return(e=t.exec(e))?e[0]:e}function Le(e,t,n){return e.replace(t,n)}function sp(e,t){return e.indexOf(t)}function St(e,t){return e.charCodeAt(t)|0}function mo(e,t,n){return e.slice(t,n)}function Ni(e){return e.length}function fh(e){return e.length}function Ql(e,t){return t.push(e),e}function wS(e,t){return e.map(t).join("")}var dd=1,Rr=1,Xy=0,Ft=0,st=0,_r="";function ud(e,t,n,a,o,l,d){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:dd,column:Rr,length:d,return:""}}function Xs(e,t){return xS(ud("",null,null,"",null,null,0),e,{length:-e.length},t)}function bS(){return st}function SS(){return st=Ft>0?St(_r,--Ft):0,Rr--,st===10&&(Rr=1,dd--),st}function si(){return st=Ft<Xy?St(_r,Ft++):0,Rr++,st===10&&(Rr=1,dd++),st}function _i(){return St(_r,Ft)}function bc(){return Ft}function Oo(e,t){return mo(_r,e,t)}function go(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zy(e){return dd=Rr=1,Xy=Ni(_r=e),Ft=0,[]}function Wy(e){return _r="",e}function Sc(e){return Fy(Oo(Ft-1,op(e===91?e+2:e===40?e+1:e)))}function CS(e){for(;(st=_i())&&st<33;)si();return go(e)>2||go(st)>3?"":" "}function TS(e,t){for(;--t&&si()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return Oo(e,bc()+(t<6&&_i()==32&&si()==32))}function op(e){for(;si();)switch(st){case e:return Ft;case 34:case 39:e!==34&&e!==39&&op(st);break;case 40:e===41&&op(e);break;case 92:si();break}return Ft}function ES(e,t){for(;si()&&e+st!==57;)if(e+st===84&&_i()===47)break;return"/*"+Oo(t,Ft-1)+"*"+cd(e===47?e:si())}function jS(e){for(;!go(_i());)si();return Oo(e,Ft)}function AS(e){return Wy(Cc("",null,null,null,[""],e=Zy(e),0,[0],e))}function Cc(e,t,n,a,o,l,d,u,p){for(var m=0,g=0,v=d,y=0,C=0,b=0,j=1,L=1,M=1,E=0,T="",k=o,O=l,N=a,P=T;L;)switch(b=E,E=si()){case 40:if(b!=108&&St(P,v-1)==58){sp(P+=Le(Sc(E),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:P+=Sc(E);break;case 9:case 10:case 13:case 32:P+=CS(b);break;case 92:P+=TS(bc()-1,7);continue;case 47:switch(_i()){case 42:case 47:Ql(MS(ES(si(),bc()),t,n),p);break;default:P+="/"}break;case 123*j:u[m++]=Ni(P)*M;case 125*j:case 59:case 0:switch(E){case 0:case 125:L=0;case 59+g:M==-1&&(P=Le(P,/\f/g,"")),C>0&&Ni(P)-v&&Ql(C>32?e3(P+";",a,n,v-1):e3(Le(P," ","")+";",a,n,v-2),p);break;case 59:P+=";";default:if(Ql(N=Jx(P,t,n,m,g,o,u,T,k=[],O=[],v),l),E===123)if(g===0)Cc(P,t,N,N,k,l,v,u,O);else switch(y===99&&St(P,3)===110?100:y){case 100:case 108:case 109:case 115:Cc(e,N,N,a&&Ql(Jx(e,N,N,0,0,o,u,T,o,k=[],v),O),o,O,v,u,a?k:O);break;default:Cc(P,N,N,N,[""],O,0,u,O)}}m=g=C=0,j=M=1,T=P="",v=d;break;case 58:v=1+Ni(P),C=b;default:if(j<1){if(E==123)--j;else if(E==125&&j++==0&&SS()==125)continue}switch(P+=cd(E),E*j){case 38:M=g>0?1:(P+="\f",-1);break;case 44:u[m++]=(Ni(P)-1)*M,M=1;break;case 64:_i()===45&&(P+=Sc(si())),y=_i(),g=v=Ni(T=P+=jS(bc())),E++;break;case 45:b===45&&Ni(P)==2&&(j=0)}}return l}function Jx(e,t,n,a,o,l,d,u,p,m,g){for(var v=o-1,y=o===0?l:[""],C=fh(y),b=0,j=0,L=0;b<a;++b)for(var M=0,E=mo(e,v+1,v=gS(j=d[b])),T=e;M<C;++M)(T=Fy(j>0?y[M]+" "+E:Le(E,/&\f/g,y[M])))&&(p[L++]=T);return ud(e,t,n,o===0?dh:u,p,m,g)}function MS(e,t,n){return ud(e,t,n,Yy,cd(bS()),mo(e,2,-2),0)}function e3(e,t,n,a){return ud(e,t,n,uh,mo(e,0,a),mo(e,a+1,-1),a)}function Mr(e,t){for(var n="",a=fh(e),o=0;o<a;o++)n+=t(e[o],o,e,t)||"";return n}function LS(e,t,n,a){switch(e.type){case mS:if(e.children.length)break;case hS:case uh:return e.return=e.return||e.value;case Yy:return"";case qy:return e.return=e.value+"{"+Mr(e.children,a)+"}";case dh:e.value=e.props.join(",")}return Ni(n=Mr(e.children,a))?e.return=e.value+"{"+n+"}":""}function OS(e){var t=fh(e);return function(n,a,o,l){for(var d="",u=0;u<t;u++)d+=e[u](n,a,o,l)||"";return d}}function RS(e){return function(t){t.root||(t=t.return)&&e(t)}}function VS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var kS=function(t,n,a){for(var o=0,l=0;o=l,l=_i(),o===38&&l===12&&(n[a]=1),!go(l);)si();return Oo(t,Ft)},DS=function(t,n){var a=-1,o=44;do switch(go(o)){case 0:o===38&&_i()===12&&(n[a]=1),t[a]+=kS(Ft-1,n,a);break;case 2:t[a]+=Sc(o);break;case 4:if(o===44){t[++a]=_i()===58?"&\f":"",n[a]=t[a].length;break}default:t[a]+=cd(o)}while(o=si());return t},HS=function(t,n){return Wy(DS(Zy(t),n))},t3=new WeakMap,zS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!t3.get(a))&&!o){t3.set(t,!0);for(var l=[],d=HS(n,l),u=a.props,p=0,m=0;p<d.length;p++)for(var g=0;g<u.length;g++,m++)t.props[m]=l[p]?d[p].replace(/&\f/g,u[g]):u[g]+" "+d[p]}}},PS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ky(e,t){switch(vS(e,t)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+Pc+e+Lt+e+e;case 6828:case 4268:return Me+e+Lt+e+e;case 6165:return Me+e+Lt+"flex-"+e+e;case 5187:return Me+e+Le(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Lt+"flex-$1$2")+e;case 5443:return Me+e+Lt+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return Me+e+Lt+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return Me+e+Lt+Le(e,"shrink","negative")+e;case 5292:return Me+e+Lt+Le(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+Le(e,"-grow","")+Me+e+Lt+Le(e,"grow","positive")+e;case 4554:return Me+Le(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ni(e)-1-t>6)switch(St(e,t+1)){case 109:if(St(e,t+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Pc+(St(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~sp(e,"stretch")?Ky(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(St(e,t+1)!==115)break;case 6444:switch(St(e,Ni(e)-3-(~sp(e,"!important")&&10))){case 107:return Le(e,":",":"+Me)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Me+(St(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Lt+"$2box$3")+e}break;case 5936:switch(St(e,t+11)){case 114:return Me+e+Lt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Lt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Lt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Me+e+Lt+e+e}return e}var NS=function(t,n,a,o){if(t.length>-1&&!t.return)switch(t.type){case uh:t.return=Ky(t.value,t.length);break;case qy:return Mr([Xs(t,{value:Le(t.value,"@","@"+Me)})],o);case dh:if(t.length)return wS(t.props,function(l){switch(yS(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mr([Xs(t,{props:[Le(l,/:(read-\w+)/,":"+Pc+"$1")]})],o);case"::placeholder":return Mr([Xs(t,{props:[Le(l,/:(plac\w+)/,":"+Me+"input-$1")]}),Xs(t,{props:[Le(l,/:(plac\w+)/,":"+Pc+"$1")]}),Xs(t,{props:[Le(l,/:(plac\w+)/,Lt+"input-$1")]})],o)}return""})}},$S=[NS],BS=function(t){var n=t.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(j){var L=j.getAttribute("data-emotion");L.indexOf(" ")!==-1&&(document.head.appendChild(j),j.setAttribute("data-s",""))})}var o=t.stylisPlugins||$S,l={},d,u=[];d=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(j){for(var L=j.getAttribute("data-emotion").split(" "),M=1;M<L.length;M++)l[L[M]]=!0;u.push(j)});var p,m=[zS,PS];{var g,v=[LS,RS(function(j){g.insert(j)})],y=OS(m.concat(o,v)),C=function(L){return Mr(AS(L),y)};p=function(L,M,E,T){g=E,C(L?L+"{"+M.styles+"}":M.styles),T&&(b.inserted[M.name]=!0)}}var b={key:n,sheet:new pS({key:n,container:d,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return b.sheet.hydrate(u),b},Xf={exports:{}},Ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i3;function IS(){if(i3)return Ve;i3=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,L=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,E=e?Symbol.for("react.scope"):60119;function T(O){if(typeof O=="object"&&O!==null){var N=O.$$typeof;switch(N){case t:switch(O=O.type,O){case p:case m:case a:case l:case o:case v:return O;default:switch(O=O&&O.$$typeof,O){case u:case g:case b:case C:case d:return O;default:return N}}case n:return N}}}function k(O){return T(O)===m}return Ve.AsyncMode=p,Ve.ConcurrentMode=m,Ve.ContextConsumer=u,Ve.ContextProvider=d,Ve.Element=t,Ve.ForwardRef=g,Ve.Fragment=a,Ve.Lazy=b,Ve.Memo=C,Ve.Portal=n,Ve.Profiler=l,Ve.StrictMode=o,Ve.Suspense=v,Ve.isAsyncMode=function(O){return k(O)||T(O)===p},Ve.isConcurrentMode=k,Ve.isContextConsumer=function(O){return T(O)===u},Ve.isContextProvider=function(O){return T(O)===d},Ve.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===t},Ve.isForwardRef=function(O){return T(O)===g},Ve.isFragment=function(O){return T(O)===a},Ve.isLazy=function(O){return T(O)===b},Ve.isMemo=function(O){return T(O)===C},Ve.isPortal=function(O){return T(O)===n},Ve.isProfiler=function(O){return T(O)===l},Ve.isStrictMode=function(O){return T(O)===o},Ve.isSuspense=function(O){return T(O)===v},Ve.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===m||O===l||O===o||O===v||O===y||typeof O=="object"&&O!==null&&(O.$$typeof===b||O.$$typeof===C||O.$$typeof===d||O.$$typeof===u||O.$$typeof===g||O.$$typeof===L||O.$$typeof===M||O.$$typeof===E||O.$$typeof===j)},Ve.typeOf=T,Ve}var n3;function US(){return n3||(n3=1,Xf.exports=IS()),Xf.exports}var Zf,a3;function _S(){if(a3)return Zf;a3=1;var e=US(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=o;function d(b){return e.isMemo(b)?o:l[b.$$typeof]||t}var u=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Object.prototype;function C(b,j,L){if(typeof j!="string"){if(y){var M=v(j);M&&M!==y&&C(b,M,L)}var E=p(j);m&&(E=E.concat(m(j)));for(var T=d(b),k=d(j),O=0;O<E.length;++O){var N=E[O];if(!n[N]&&!(L&&L[N])&&!(k&&k[N])&&!(T&&T[N])){var P=g(j,N);try{u(b,N,P)}catch{}}}}return b}return Zf=C,Zf}_S();var GS=!0;function YS(e,t,n){var a="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var Qy=function(t,n,a){var o=t.key+"-"+n.name;(a===!1||GS===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Jy=function(t,n,a){Qy(t,n,a);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function qS(e){for(var t=0,n,a=0,o=e.length;o>=4;++a,o-=4)n=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var FS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},XS=/[A-Z]|^ms/g,ZS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,e5=function(t){return t.charCodeAt(1)===45},r3=function(t){return t!=null&&typeof t!="boolean"},Wf=VS(function(e){return e5(e)?e:e.replace(XS,"-$&").toLowerCase()}),s3=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ZS,function(a,o,l){return $i={name:o,styles:l,next:$i},o})}return FS[t]!==1&&!e5(t)&&typeof n=="number"&&n!==0?n+"px":n};function xo(e,t,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return $i={name:o.name,styles:o.styles,next:$i},o.name;var l=n;if(l.styles!==void 0){var d=l.next;if(d!==void 0)for(;d!==void 0;)$i={name:d.name,styles:d.styles,next:$i},d=d.next;var u=l.styles+";";return u}return WS(e,t,n)}case"function":{if(e!==void 0){var p=$i,m=n(e);return $i=p,xo(e,t,m)}break}}var g=n;return g}function WS(e,t,n){var a="";if(Array.isArray(n))for(var o=0;o<n.length;o++)a+=xo(e,t,n[o])+";";else for(var l in n){var d=n[l];if(typeof d!="object"){var u=d;r3(u)&&(a+=Wf(l)+":"+s3(l,u)+";")}else if(Array.isArray(d)&&typeof d[0]=="string"&&t==null)for(var p=0;p<d.length;p++)r3(d[p])&&(a+=Wf(l)+":"+s3(l,d[p])+";");else{var m=xo(e,t,d);switch(l){case"animation":case"animationName":{a+=Wf(l)+":"+m+";";break}default:a+=l+"{"+m+"}"}}}return a}var o3=/label:\s*([^\s;{]+)\s*(;|$)/g,$i;function ph(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";$i=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,o+=xo(n,t,l);else{var d=l;o+=d[0]}for(var u=1;u<e.length;u++)if(o+=xo(n,t,e[u]),a){var p=l;o+=p[u]}o3.lastIndex=0;for(var m="",g;(g=o3.exec(o))!==null;)m+="-"+g[1];var v=qS(o)+m;return{name:v,styles:o,next:$i}}var KS=function(t){return t()},t5=Fx.useInsertionEffect?Fx.useInsertionEffect:!1,QS=t5||KS,l3=t5||R.useLayoutEffect,i5=R.createContext(typeof HTMLElement<"u"?BS({key:"css"}):null);i5.Provider;var n5=function(t){return R.forwardRef(function(n,a){var o=R.useContext(i5);return t(n,o,a)})},a5=R.createContext({}),hh={}.hasOwnProperty,lp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",JS=function(t,n){var a={};for(var o in n)hh.call(n,o)&&(a[o]=n[o]);return a[lp]=t,a},eC=function(t){var n=t.cache,a=t.serialized,o=t.isStringTag;return Qy(n,a,o),QS(function(){return Jy(n,a,o)}),null},tC=n5(function(e,t,n){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[lp],l=[a],d="";typeof e.className=="string"?d=YS(t.registered,l,e.className):e.className!=null&&(d=e.className+" ");var u=ph(l,void 0,R.useContext(a5));d+=t.key+"-"+u.name;var p={};for(var m in e)hh.call(e,m)&&m!=="css"&&m!==lp&&(p[m]=e[m]);return p.className=d,n&&(p.ref=n),R.createElement(R.Fragment,null,R.createElement(eC,{cache:t,serialized:u,isStringTag:typeof o=="string"}),R.createElement(o,p))}),iC=tC,c3=function(t,n){var a=arguments;if(n==null||!hh.call(n,"css"))return R.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=iC,l[1]=JS(t,n);for(var d=2;d<o;d++)l[d]=a[d];return R.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(c3||(c3={}));var nC=n5(function(e,t){var n=e.styles,a=ph([n],void 0,R.useContext(a5)),o=R.useRef();return l3(function(){var l=t.key+"-global",d=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),u=!1,p=document.querySelector('style[data-emotion="'+l+" "+a.name+'"]');return t.sheet.tags.length&&(d.before=t.sheet.tags[0]),p!==null&&(u=!0,p.setAttribute("data-emotion",l),d.hydrate([p])),o.current=[d,u],function(){d.flush()}},[t]),l3(function(){var l=o.current,d=l[0],u=l[1];if(u){l[1]=!1;return}if(a.next!==void 0&&Jy(t,a.next,!0),d.tags.length){var p=d.tags[d.tags.length-1].nextElementSibling;d.before=p,d.flush()}t.insert("",a,d,!1)},[t,a.name]),null});function aC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ph(t)}const rC="/assets/Geist-Regular-BCrLS6HJ.ttf",sC="/assets/Geist-Medium-C6X8vKEc.ttf",oC="/assets/BebasNeue-Regular-D2CONTwO.ttf",lC="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",cC=aC`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${rC}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${sC}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${oC}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${lC}) format('truetype');
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
`;var Ut=function(){return Ut=Object.assign||function(t){for(var n,a=1,o=arguments.length;a<o;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Ut.apply(this,arguments)};function vo(e,t,n){if(n||arguments.length===2)for(var a=0,o=t.length,l;a<o;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Ge="-ms-",ao="-moz-",ke="-webkit-",r5="comm",fd="rule",mh="decl",dC="@import",s5="@keyframes",uC="@layer",o5=Math.abs,gh=String.fromCharCode,cp=Object.assign;function fC(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function l5(e){return e.trim()}function hn(e,t){return(e=t.exec(e))?e[0]:e}function ye(e,t,n){return e.replace(t,n)}function Tc(e,t,n){return e.indexOf(t,n)}function vt(e,t){return e.charCodeAt(t)|0}function Vr(e,t,n){return e.slice(t,n)}function Bi(e){return e.length}function c5(e){return e.length}function io(e,t){return t.push(e),e}function pC(e,t){return e.map(t).join("")}function d3(e,t){return e.filter(function(n){return!hn(n,t)})}var pd=1,kr=1,d5=0,wi=0,ot=0,Gr="";function hd(e,t,n,a,o,l,d,u){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:pd,column:kr,length:d,return:"",siblings:u}}function Yn(e,t){return cp(hd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mr(e){for(;e.root;)e=Yn(e.root,{children:[e]});io(e,e.siblings)}function hC(){return ot}function mC(){return ot=wi>0?vt(Gr,--wi):0,kr--,ot===10&&(kr=1,pd--),ot}function Mi(){return ot=wi<d5?vt(Gr,wi++):0,kr++,ot===10&&(kr=1,pd++),ot}function Sa(){return vt(Gr,wi)}function Ec(){return wi}function md(e,t){return Vr(Gr,e,t)}function dp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gC(e){return pd=kr=1,d5=Bi(Gr=e),wi=0,[]}function xC(e){return Gr="",e}function Kf(e){return l5(md(wi-1,up(e===91?e+2:e===40?e+1:e)))}function vC(e){for(;(ot=Sa())&&ot<33;)Mi();return dp(e)>2||dp(ot)>3?"":" "}function yC(e,t){for(;--t&&Mi()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return md(e,Ec()+(t<6&&Sa()==32&&Mi()==32))}function up(e){for(;Mi();)switch(ot){case e:return wi;case 34:case 39:e!==34&&e!==39&&up(ot);break;case 40:e===41&&up(e);break;case 92:Mi();break}return wi}function wC(e,t){for(;Mi()&&e+ot!==57;)if(e+ot===84&&Sa()===47)break;return"/*"+md(t,wi-1)+"*"+gh(e===47?e:Mi())}function bC(e){for(;!dp(Sa());)Mi();return md(e,wi)}function SC(e){return xC(jc("",null,null,null,[""],e=gC(e),0,[0],e))}function jc(e,t,n,a,o,l,d,u,p){for(var m=0,g=0,v=d,y=0,C=0,b=0,j=1,L=1,M=1,E=0,T="",k=o,O=l,N=a,P=T;L;)switch(b=E,E=Mi()){case 40:if(b!=108&&vt(P,v-1)==58){Tc(P+=ye(Kf(E),"&","&\f"),"&\f",o5(m?u[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:P+=Kf(E);break;case 9:case 10:case 13:case 32:P+=vC(b);break;case 92:P+=yC(Ec()-1,7);continue;case 47:switch(Sa()){case 42:case 47:io(CC(wC(Mi(),Ec()),t,n,p),p);break;default:P+="/"}break;case 123*j:u[m++]=Bi(P)*M;case 125*j:case 59:case 0:switch(E){case 0:case 125:L=0;case 59+g:M==-1&&(P=ye(P,/\f/g,"")),C>0&&Bi(P)-v&&io(C>32?f3(P+";",a,n,v-1,p):f3(ye(P," ","")+";",a,n,v-2,p),p);break;case 59:P+=";";default:if(io(N=u3(P,t,n,m,g,o,u,T,k=[],O=[],v,l),l),E===123)if(g===0)jc(P,t,N,N,k,l,v,u,O);else switch(y===99&&vt(P,3)===110?100:y){case 100:case 108:case 109:case 115:jc(e,N,N,a&&io(u3(e,N,N,0,0,o,u,T,o,k=[],v,O),O),o,O,v,u,a?k:O);break;default:jc(P,N,N,N,[""],O,0,u,O)}}m=g=C=0,j=M=1,T=P="",v=d;break;case 58:v=1+Bi(P),C=b;default:if(j<1){if(E==123)--j;else if(E==125&&j++==0&&mC()==125)continue}switch(P+=gh(E),E*j){case 38:M=g>0?1:(P+="\f",-1);break;case 44:u[m++]=(Bi(P)-1)*M,M=1;break;case 64:Sa()===45&&(P+=Kf(Mi())),y=Sa(),g=v=Bi(T=P+=bC(Ec())),E++;break;case 45:b===45&&Bi(P)==2&&(j=0)}}return l}function u3(e,t,n,a,o,l,d,u,p,m,g,v){for(var y=o-1,C=o===0?l:[""],b=c5(C),j=0,L=0,M=0;j<a;++j)for(var E=0,T=Vr(e,y+1,y=o5(L=d[j])),k=e;E<b;++E)(k=l5(L>0?C[E]+" "+T:ye(T,/&\f/g,C[E])))&&(p[M++]=k);return hd(e,t,n,o===0?fd:u,p,m,g,v)}function CC(e,t,n,a){return hd(e,t,n,r5,gh(hC()),Vr(e,2,-2),0,a)}function f3(e,t,n,a,o){return hd(e,t,n,mh,Vr(e,0,a),Vr(e,a+1,-1),a,o)}function u5(e,t,n){switch(fC(e,t)){case 5103:return ke+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+e+e;case 4789:return ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+e+ao+e+Ge+e+e;case 5936:switch(vt(e,t+11)){case 114:return ke+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ke+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ke+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ke+e+Ge+e+e;case 6165:return ke+e+Ge+"flex-"+e+e;case 5187:return ke+e+ye(e,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return ke+e+Ge+"flex-item-"+ye(e,/flex-|-self/g,"")+(hn(e,/flex-|baseline/)?"":Ge+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return ke+e+Ge+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return ke+e+Ge+ye(e,"shrink","negative")+e;case 5292:return ke+e+Ge+ye(e,"basis","preferred-size")+e;case 6060:return ke+"box-"+ye(e,"-grow","")+ke+e+Ge+ye(e,"grow","positive")+e;case 4554:return ke+ye(e,/([^-])(transform)/g,"$1"+ke+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+e+e;case 4200:if(!hn(e,/flex-|baseline/))return Ge+"grid-column-align"+Vr(e,t)+e;break;case 2592:case 3360:return Ge+ye(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(a,o){return t=o,hn(a.props,/grid-\w+-end/)})?~Tc(e+(n=n[t].value),"span",0)?e:Ge+ye(e,"-start","")+e+Ge+"grid-row-span:"+(~Tc(n,"span",0)?hn(n,/\d+/):+hn(n,/\d+/)-+hn(e,/\d+/))+";":Ge+ye(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(a){return hn(a.props,/grid-\w+-start/)})?e:Ge+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,ke+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bi(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+ao+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Tc(e,"stretch",0)?u5(ye(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,d,u,p,m){return Ge+o+":"+l+m+(d?Ge+o+"-span:"+(u?p:+p-+l)+m:"")+e});case 4949:if(vt(e,t+6)===121)return ye(e,":",":"+ke)+e;break;case 6444:switch(vt(e,vt(e,14)===45?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(vt(e,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Ge+"$2box$3")+e;case 100:return ye(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function TC(e,t,n,a){switch(e.type){case uC:if(e.children.length)break;case dC:case mh:return e.return=e.return||e.value;case r5:return"";case s5:return e.return=e.value+"{"+Nc(e.children,a)+"}";case fd:if(!Bi(e.value=e.props.join(",")))return""}return Bi(n=Nc(e.children,a))?e.return=e.value+"{"+n+"}":""}function EC(e){var t=c5(e);return function(n,a,o,l){for(var d="",u=0;u<t;u++)d+=e[u](n,a,o,l)||"";return d}}function jC(e){return function(t){t.root||(t=t.return)&&e(t)}}function AC(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case mh:e.return=u5(e.value,e.length,n);return;case s5:return Nc([Yn(e,{value:ye(e.value,"@","@"+ke)})],a);case fd:if(e.length)return pC(n=e.props,function(o){switch(hn(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mr(Yn(e,{props:[ye(o,/:(read-\w+)/,":"+ao+"$1")]})),mr(Yn(e,{props:[o]})),cp(e,{props:d3(n,a)});break;case"::placeholder":mr(Yn(e,{props:[ye(o,/:(plac\w+)/,":"+ke+"input-$1")]})),mr(Yn(e,{props:[ye(o,/:(plac\w+)/,":"+ao+"$1")]})),mr(Yn(e,{props:[ye(o,/:(plac\w+)/,Ge+"input-$1")]})),mr(Yn(e,{props:[o]})),cp(e,{props:d3(n,a)});break}return""})}}var MC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ai={},Dr=typeof process<"u"&&ai!==void 0&&(ai.REACT_APP_SC_ATTR||ai.SC_ATTR)||"data-styled",f5="active",p5="data-styled-version",gd="6.1.19",xh=`/*!sc*/
`,$c=typeof window<"u"&&typeof document<"u",LC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ai!==void 0&&ai.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ai.REACT_APP_SC_DISABLE_SPEEDY!==""?ai.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ai.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ai!==void 0&&ai.SC_DISABLE_SPEEDY!==void 0&&ai.SC_DISABLE_SPEEDY!==""&&ai.SC_DISABLE_SPEEDY!=="false"&&ai.SC_DISABLE_SPEEDY),xd=Object.freeze([]),Hr=Object.freeze({});function OC(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var h5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),RC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,VC=/(^-|-$)/g;function p3(e){return e.replace(RC,"-").replace(VC,"")}var kC=/(a)(d)/gi,Jl=52,h3=function(e){return String.fromCharCode(e+(e>25?39:97))};function fp(e){var t,n="";for(t=Math.abs(e);t>Jl;t=t/Jl|0)n=h3(t%Jl)+n;return(h3(t%Jl)+n).replace(kC,"$1-$2")}var Qf,m5=5381,br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},g5=function(e){return br(m5,e)};function x5(e){return fp(g5(e)>>>0)}function DC(e){return e.displayName||e.name||"Component"}function Jf(e){return typeof e=="string"&&!0}var v5=typeof Symbol=="function"&&Symbol.for,y5=v5?Symbol.for("react.memo"):60115,HC=v5?Symbol.for("react.forward_ref"):60112,zC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},PC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},NC=((Qf={})[HC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qf[y5]=w5,Qf);function m3(e){return("type"in(t=e)&&t.type.$$typeof)===y5?w5:"$$typeof"in e?NC[e.$$typeof]:zC;var t}var $C=Object.defineProperty,BC=Object.getOwnPropertyNames,g3=Object.getOwnPropertySymbols,IC=Object.getOwnPropertyDescriptor,UC=Object.getPrototypeOf,x3=Object.prototype;function b5(e,t,n){if(typeof t!="string"){if(x3){var a=UC(t);a&&a!==x3&&b5(e,a,n)}var o=BC(t);g3&&(o=o.concat(g3(t)));for(var l=m3(e),d=m3(t),u=0;u<o.length;++u){var p=o[u];if(!(p in PC||n&&n[p]||d&&p in d||l&&p in l)){var m=IC(t,p);try{$C(e,p,m)}catch{}}}}return e}function zr(e){return typeof e=="function"}function vh(e){return typeof e=="object"&&"styledComponentId"in e}function ya(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pp(e,t){if(e.length===0)return"";for(var n=e[0],a=1;a<e.length;a++)n+=e[a];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hp(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=hp(e[a],t[a]);else if(yo(t))for(var a in t)e[a]=hp(e[a],t[a]);return e}function yh(e,t){Object.defineProperty(e,"toString",{value:t})}function Ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _C=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,a=0;a<t;a++)n+=this.groupSizes[a];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;t>=l;)if((l<<=1)<0)throw Ro(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var d=o;d<l;d++)this.groupSizes[d]=0}for(var u=this.indexOfGroup(t+1),p=(d=0,n.length);d<p;d++)this.tag.insertRule(u,n[d])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n;this.groupSizes[t]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),l=o+a,d=o;d<l;d++)n+="".concat(this.tag.getRule(d)).concat(xh);return n},e}(),Ac=new Map,Bc=new Map,Mc=1,ec=function(e){if(Ac.has(e))return Ac.get(e);for(;Bc.has(Mc);)Mc++;var t=Mc++;return Ac.set(e,t),Bc.set(t,e),t},GC=function(e,t){Mc=t+1,Ac.set(e,t),Bc.set(t,e)},YC="style[".concat(Dr,"][").concat(p5,'="').concat(gd,'"]'),qC=new RegExp("^".concat(Dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FC=function(e,t,n){for(var a,o=n.split(","),l=0,d=o.length;l<d;l++)(a=o[l])&&e.registerName(t,a)},XC=function(e,t){for(var n,a=((n=t.textContent)!==null&&n!==void 0?n:"").split(xh),o=[],l=0,d=a.length;l<d;l++){var u=a[l].trim();if(u){var p=u.match(qC);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(GC(g,m),FC(e,g,p[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(u)}}},v3=function(e){for(var t=document.querySelectorAll(YC),n=0,a=t.length;n<a;n++){var o=t[n];o&&o.getAttribute(Dr)!==f5&&(XC(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ZC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var S5=function(e){var t=document.head,n=e||t,a=document.createElement("style"),o=function(u){var p=Array.from(u.querySelectorAll("style[".concat(Dr,"]")));return p[p.length-1]}(n),l=o!==void 0?o.nextSibling:null;a.setAttribute(Dr,f5),a.setAttribute(p5,gd);var d=ZC();return d&&a.setAttribute("nonce",d),n.insertBefore(a,l),a},WC=function(){function e(t){this.element=S5(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var d=a[o];if(d.ownerNode===n)return d}throw Ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),KC=function(){function e(t){this.element=S5(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),QC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),y3=$c,JC={isServer:!$c,useCSSOMInjection:!LC},C5=function(){function e(t,n,a){t===void 0&&(t=Hr),n===void 0&&(n={});var o=this;this.options=Ut(Ut({},JC),t),this.gs=n,this.names=new Map(a),this.server=!!t.isServer,!this.server&&$c&&y3&&(y3=!1,v3(this)),yh(this,function(){return function(l){for(var d=l.getTag(),u=d.length,p="",m=function(v){var y=function(M){return Bc.get(M)}(v);if(y===void 0)return"continue";var C=l.names.get(y),b=d.getGroup(v);if(C===void 0||!C.size||b.length===0)return"continue";var j="".concat(Dr,".g").concat(v,'[id="').concat(y,'"]'),L="";C!==void 0&&C.forEach(function(M){M.length>0&&(L+="".concat(M,","))}),p+="".concat(b).concat(j,'{content:"').concat(L,'"}').concat(xh)},g=0;g<u;g++)m(g);return p}(o)})}return e.registerId=function(t){return ec(t)},e.prototype.rehydrate=function(){!this.server&&$c&&v3(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ut(Ut({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var a=n.useCSSOMInjection,o=n.target;return n.isServer?new QC(o):a?new WC(o):new KC(o)}(this.options),new _C(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ec(t),this.names.has(t))this.names.get(t).add(n);else{var a=new Set;a.add(n),this.names.set(t,a)}},e.prototype.insertRules=function(t,n,a){this.registerName(t,n),this.getTag().insertRules(ec(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ec(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eT=/&/g,tT=/^\s*\/\/.*$/gm;function T5(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=T5(n.children,t)),n})}function iT(e){var t,n,a,o=Hr,l=o.options,d=l===void 0?Hr:l,u=o.plugins,p=u===void 0?xd:u,m=function(y,C,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):y},g=p.slice();g.push(function(y){y.type===fd&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(eT,n).replace(a,m))}),d.prefix&&g.push(AC),g.push(TC);var v=function(y,C,b,j){C===void 0&&(C=""),b===void 0&&(b=""),j===void 0&&(j="&"),t=j,n=C,a=new RegExp("\\".concat(n,"\\b"),"g");var L=y.replace(tT,""),M=SC(b||C?"".concat(b," ").concat(C," { ").concat(L," }"):L);d.namespace&&(M=T5(M,d.namespace));var E=[];return Nc(M,EC(g.concat(jC(function(T){return E.push(T)})))),E};return v.hash=p.length?p.reduce(function(y,C){return C.name||Ro(15),br(y,C.name)},m5).toString():"",v}var nT=new C5,mp=iT(),E5=De.createContext({shouldForwardProp:void 0,styleSheet:nT,stylis:mp});E5.Consumer;De.createContext(void 0);function w3(){return R.useContext(E5)}var j5=function(){function e(t,n){var a=this;this.inject=function(o,l){l===void 0&&(l=mp);var d=a.name+l.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,l(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yh(this,function(){throw Ro(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=mp),this.name+t.hash},e}(),aT=function(e){return e>="A"&&e<="Z"};function b3(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(n===1&&a==="-"&&e[0]==="-")return e;aT(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var A5=function(e){return e==null||e===!1||e===""},M5=function(e){var t,n,a=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!A5(l)&&(Array.isArray(l)&&l.isCss||zr(l)?a.push("".concat(b3(o),":"),l,";"):yo(l)?a.push.apply(a,vo(vo(["".concat(o," {")],M5(l),!1),["}"],!1)):a.push("".concat(b3(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in MC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return a};function Ca(e,t,n,a){if(A5(e))return[];if(vh(e))return[".".concat(e.styledComponentId)];if(zr(e)){if(!zr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Ca(o,t,n,a)}var l;return e instanceof j5?n?(e.inject(n,a),[e.getName(a)]):[e]:yo(e)?M5(e):Array.isArray(e)?Array.prototype.concat.apply(xd,e.map(function(d){return Ca(d,t,n,a)})):[e.toString()]}function rT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!vh(n))return!1}return!0}var sT=g5(gd),oT=function(){function e(t,n,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&rT(t),this.componentId=n,this.baseHash=br(sT,n),this.baseStyle=a,C5.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ya(o,this.staticRulesId);else{var l=pp(Ca(this.rules,t,n,a)),d=fp(br(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,d)){var u=a(l,".".concat(d),void 0,this.componentId);n.insertRules(this.componentId,d,u)}o=ya(o,d),this.staticRulesId=d}else{for(var p=br(this.baseHash,a.hash),m="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")m+=v;else if(v){var y=pp(Ca(v,t,n,a));p=br(p,y+g),m+=y}}if(m){var C=fp(p>>>0);n.hasNameForId(this.componentId,C)||n.insertRules(this.componentId,C,a(m,".".concat(C),void 0,this.componentId)),o=ya(o,C)}}return o},e}(),L5=De.createContext(void 0);L5.Consumer;var e0={};function lT(e,t,n){var a=vh(e),o=e,l=!Jf(e),d=t.attrs,u=d===void 0?xd:d,p=t.componentId,m=p===void 0?function(k,O){var N=typeof k!="string"?"sc":p3(k);e0[N]=(e0[N]||0)+1;var P="".concat(N,"-").concat(x5(gd+N+e0[N]));return O?"".concat(O,"-").concat(P):P}(t.displayName,t.parentComponentId):p,g=t.displayName,v=g===void 0?function(k){return Jf(k)?"styled.".concat(k):"Styled(".concat(DC(k),")")}(e):g,y=t.displayName&&t.componentId?"".concat(p3(t.displayName),"-").concat(t.componentId):t.componentId||m,C=a&&o.attrs?o.attrs.concat(u).filter(Boolean):u,b=t.shouldForwardProp;if(a&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;b=function(k,O){return j(k,O)&&L(k,O)}}else b=j}var M=new oT(n,y,a?o.componentStyle:void 0);function E(k,O){return function(N,P,_){var q=N.attrs,F=N.componentStyle,K=N.defaultProps,ne=N.foldedComponentIds,le=N.styledComponentId,ue=N.target,oe=De.useContext(L5),B=w3(),W=N.shouldForwardProp||B.shouldForwardProp,J=OC(P,oe,K)||Hr,ie=function(Se,pe,dt){for(var Re,Et=Ut(Ut({},pe),{className:void 0,theme:dt}),Qn=0;Qn<Se.length;Qn+=1){var Zi=zr(Re=Se[Qn])?Re(Et):Re;for(var li in Zi)Et[li]=li==="className"?ya(Et[li],Zi[li]):li==="style"?Ut(Ut({},Et[li]),Zi[li]):Zi[li]}return pe.className&&(Et.className=ya(Et.className,pe.className)),Et}(q,P,J),V=ie.as||ue,X={};for(var ae in ie)ie[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&ie.theme===J||(ae==="forwardedAs"?X.as=ie.forwardedAs:W&&!W(ae,V)||(X[ae]=ie[ae]));var re=function(Se,pe){var dt=w3(),Re=Se.generateAndInjectStyles(pe,dt.styleSheet,dt.stylis);return Re}(F,ie),de=ya(ne,le);return re&&(de+=" "+re),ie.className&&(de+=" "+ie.className),X[Jf(V)&&!h5.has(V)?"class":"className"]=de,_&&(X.ref=_),R.createElement(V,X)}(T,k,O)}E.displayName=v;var T=De.forwardRef(E);return T.attrs=C,T.componentStyle=M,T.displayName=v,T.shouldForwardProp=b,T.foldedComponentIds=a?ya(o.foldedComponentIds,o.styledComponentId):"",T.styledComponentId=y,T.target=a?o.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=a?function(O){for(var N=[],P=1;P<arguments.length;P++)N[P-1]=arguments[P];for(var _=0,q=N;_<q.length;_++)hp(O,q[_],!0);return O}({},o.defaultProps,k):k}}),yh(T,function(){return".".concat(T.styledComponentId)}),l&&b5(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function S3(e,t){for(var n=[e[0]],a=0,o=t.length;a<o;a+=1)n.push(t[a],e[a+1]);return n}var C3=function(e){return Object.assign(e,{isCss:!0})};function Xt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||yo(e))return C3(Ca(S3(xd,vo([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ca(a):C3(Ca(S3(a,t)))}function gp(e,t,n){if(n===void 0&&(n=Hr),!t)throw Ro(1,t);var a=function(o){for(var l=[],d=1;d<arguments.length;d++)l[d-1]=arguments[d];return e(t,n,Xt.apply(void 0,vo([o],l,!1)))};return a.attrs=function(o){return gp(e,t,Ut(Ut({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return gp(e,t,Ut(Ut({},n),o))},a}var O5=function(e){return gp(lT,e)},w=O5;h5.forEach(function(e){w[e]=O5(e)});function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=pp(Xt.apply(void 0,vo([e],t,!1))),o=x5(a);return new j5(o,a)}const cT=w.nav`
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
  ${({$isScrolled:e})=>e&&Xt`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,dT=w.div`
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
`,uT=w(Tt)`
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
`,fT=w.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,Zs=w.li`
  position: relative;
`,Ws=w(Tt)`
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
`,T3=w.div`
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
`,pT=w.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,R5=w.button`
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
`;var ic={},E3;function hT(){if(E3)return ic;E3=1,ic.match=l,ic.parse=d;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(g,v){return d(g).some(function(y){var C=y.inverse,b=y.type==="all"||v.type===y.type;if(b&&C||!(b||C))return!1;var j=y.expressions.every(function(L){var M=L.feature,E=L.modifier,T=L.value,k=v[M];if(!k)return!1;switch(M){case"orientation":case"scan":return k.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=m(T),k=m(k);break;case"resolution":T=p(T),k=p(k);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=u(T),k=u(k);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,k=parseInt(k,10)||0;break}switch(E){case"min":return k>=T;case"max":return k<=T;default:return k===T}});return j&&!C||!j&&C})}function d(g){return g.split(",").map(function(v){v=v.trim();var y=v.match(e),C=y[1],b=y[2],j=y[3]||"",L={};return L.inverse=!!C&&C.toLowerCase()==="not",L.type=b?b.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],L.expressions=j.map(function(M){var E=M.match(t),T=E[1].toLowerCase().match(n);return{modifier:T[1],feature:T[2],value:E[2]}}),L})}function u(g){var v=Number(g),y;return v||(y=g.match(/^(\d+)\s*\/\s*(\d+)$/),v=y[1]/y[2]),v}function p(g){var v=parseFloat(g),y=String(g).match(o)[1];switch(y){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function m(g){var v=parseFloat(g),y=String(g).match(a)[1];switch(y){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return ic}var t0,j3;function mT(){if(j3)return t0;j3=1;var e=hT().match,t=typeof window<"u"?window.matchMedia:null;function n(o,l,d){var u=this,p;t&&!d&&(p=t.call(window,o)),p?(this.matches=p.matches,this.media=p.media,p.addListener(v)):(this.matches=e(o,l),this.media=o),this.addListener=m,this.removeListener=g,this.dispose=y;function m(C){p&&p.addListener(C)}function g(C){p&&p.removeListener(C)}function v(C){u.matches=C.matches,u.media=C.media}function y(){p&&p.removeListener(v)}}function a(o,l,d){return new n(o,l,d)}return t0=a,t0}var gT=mT();const xT=sd(gT);var vT=/[A-Z]/g,yT=/^ms-/,i0={};function wT(e){return"-"+e.toLowerCase()}function V5(e){if(i0.hasOwnProperty(e))return i0[e];var t=e.replace(vT,wT);return i0[e]=yT.test(t)?"-"+t:t}function bT(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),a=Object.keys(t),o=n.length;if(a.length!==o)return!1;for(let l=0;l<o;l++){const d=n[l];if(e[d]!==t[d]||!Object.prototype.hasOwnProperty.call(t,d))return!1}return!0}var n0={exports:{}},a0,A3;function ST(){if(A3)return a0;A3=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return a0=e,a0}var r0,M3;function CT(){if(M3)return r0;M3=1;var e=ST();function t(){}function n(){}return n.resetWarningCache=t,r0=function(){function a(d,u,p,m,g,v){if(v!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}a.isRequired=a;function o(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},r0}var L3;function TT(){return L3||(L3=1,n0.exports=CT()()),n0.exports}var ET=TT();const Oe=sd(ET),kt=Oe.oneOfType([Oe.string,Oe.number]),k5={all:Oe.bool,grid:Oe.bool,aural:Oe.bool,braille:Oe.bool,handheld:Oe.bool,print:Oe.bool,projection:Oe.bool,screen:Oe.bool,tty:Oe.bool,tv:Oe.bool,embossed:Oe.bool},jT={orientation:Oe.oneOf(["portrait","landscape"]),scan:Oe.oneOf(["progressive","interlace"]),aspectRatio:Oe.string,deviceAspectRatio:Oe.string,height:kt,deviceHeight:kt,width:kt,deviceWidth:kt,color:Oe.bool,colorIndex:Oe.bool,monochrome:Oe.bool,resolution:kt,type:Object.keys(k5)},{type:fB,...AT}=jT,MT={minAspectRatio:Oe.string,maxAspectRatio:Oe.string,minDeviceAspectRatio:Oe.string,maxDeviceAspectRatio:Oe.string,minHeight:kt,maxHeight:kt,minDeviceHeight:kt,maxDeviceHeight:kt,minWidth:kt,maxWidth:kt,minDeviceWidth:kt,maxDeviceWidth:kt,minColor:Oe.number,maxColor:Oe.number,minColorIndex:Oe.number,maxColorIndex:Oe.number,minMonochrome:Oe.number,maxMonochrome:Oe.number,minResolution:kt,maxResolution:kt,...AT},LT={...k5,...MT};var OT={all:LT};const RT=e=>`not ${e}`,VT=(e,t)=>{const n=V5(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?RT(n):`(${n}: ${t})`},kT=e=>e.join(" and "),DT=e=>{const t=[];return Object.keys(OT.all).forEach(n=>{const a=e[n];a!=null&&t.push(VT(n,a))}),kT(t)},HT=R.createContext(void 0),zT=e=>e.query||DT(e),O3=e=>e?Object.keys(e).reduce((n,a)=>(n[V5(a)]=e[a],n),{}):void 0,D5=()=>{const e=R.useRef(!1);return R.useEffect(()=>{e.current=!0},[]),e.current},PT=e=>{const t=R.useContext(HT),n=()=>O3(e)||O3(t),[a,o]=R.useState(n);return R.useEffect(()=>{const l=n();bT(a,l)||o(l)},[e,t]),a},NT=e=>{const t=()=>zT(e),[n,a]=R.useState(t);return R.useEffect(()=>{const o=t();n!==o&&a(o)},[e]),n},$T=(e,t)=>{const n=()=>xT(e,t||{},!!t),[a,o]=R.useState(n),l=D5();return R.useEffect(()=>{if(l){const d=n();return o(d),()=>{d&&d.dispose()}}},[e,t]),a},BT=e=>{const[t,n]=R.useState(e.matches);return R.useEffect(()=>{const a=o=>{n(o.matches)};return e.addListener(a),n(e.matches),()=>{e.removeListener(a)}},[e]),t},He=(e,t,n)=>{const a=PT(t),o=NT(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=$T(o,a),d=BT(l);return D5(),R.useEffect(()=>{},[d]),R.useEffect(()=>()=>{l&&l.dispose()},[]),d},wh=R.createContext({});function La(e){const t=R.useRef(null);return t.current===null&&(t.current=e()),t.current}const bh=typeof window<"u",Vo=bh?R.useLayoutEffect:R.useEffect,vd=R.createContext(null);function Sh(e,t){e.indexOf(t)===-1&&e.push(t)}function Ch(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Xi=(e,t,n)=>n>t?t:n<e?e:n;let wo=()=>{};const xn={},H5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function z5(e){return typeof e=="object"&&e!==null}const P5=e=>/^0[^.\s]+$/u.test(e);function Th(e){let t;return()=>(t===void 0&&(t=e()),t)}const Gt=e=>e,IT=(e,t)=>n=>t(e(n)),ko=(...e)=>e.reduce(IT),Pr=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class Eh{constructor(){this.subscriptions=[]}add(t){return Sh(this.subscriptions,t),()=>Ch(this.subscriptions,t)}notify(t,n,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,a);else for(let l=0;l<o;l++){const d=this.subscriptions[l];d&&d(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gi=e=>e*1e3,Yi=e=>e/1e3;function jh(e,t){return t?e*(1e3/t):0}const N5=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,UT=1e-7,_T=12;function GT(e,t,n,a,o){let l,d,u=0;do d=t+(n-t)/2,l=N5(d,a,o)-e,l>0?n=d:t=d;while(Math.abs(l)>UT&&++u<_T);return d}function Do(e,t,n,a){if(e===t&&n===a)return Gt;const o=l=>GT(l,0,1,e,n);return l=>l===0||l===1?l:N5(o(l),t,a)}const $5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,B5=e=>t=>1-e(1-t),Ct=Do(.33,1.53,.69,.99),Ah=B5(Ct),I5=$5(Ah),U5=e=>(e*=2)<1?.5*Ah(e):.5*(2-Math.pow(2,-10*(e-1))),Mh=e=>1-Math.sin(Math.acos(e)),Ic=B5(Mh),_5=$5(Mh),YT=Do(.42,0,1,1),te=Do(0,0,.58,1),Lh=Do(.42,0,.58,1),qT=e=>Array.isArray(e)&&typeof e[0]!="number",G5=e=>Array.isArray(e)&&typeof e[0]=="number",FT={linear:Gt,easeIn:YT,easeInOut:Lh,easeOut:te,circIn:Mh,circInOut:_5,circOut:Ic,backIn:Ah,backInOut:I5,backOut:Ct,anticipate:U5},XT=e=>typeof e=="string",R3=e=>{if(G5(e)){wo(e.length===4);const[t,n,a,o]=e;return Do(t,n,a,o)}else if(XT(e))return FT[e];return e},nc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ZT(e,t){let n=new Set,a=new Set,o=!1,l=!1;const d=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function p(g){d.has(g)&&(m.schedule(g),e()),g(u)}const m={schedule:(g,v=!1,y=!1)=>{const b=y&&o?n:a;return v&&d.add(g),b.has(g)||b.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(u=g,o){l=!0;return}o=!0,[n,a]=[a,n],n.forEach(p),n.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const WT=40;function Y5(e,t){let n=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,d=nc.reduce((T,k)=>(T[k]=ZT(l),T),{}),{setup:u,read:p,resolveKeyframes:m,preUpdate:g,update:v,preRender:y,render:C,postRender:b}=d,j=()=>{const T=xn.useManualTiming?o.timestamp:performance.now();n=!1,xn.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(T-o.timestamp,WT),1)),o.timestamp=T,o.isProcessing=!0,u.process(o),p.process(o),m.process(o),g.process(o),v.process(o),y.process(o),C.process(o),b.process(o),o.isProcessing=!1,n&&t&&(a=!1,e(j))},L=()=>{n=!0,a=!0,o.isProcessing||e(j)};return{schedule:nc.reduce((T,k)=>{const O=d[k];return T[k]=(N,P=!1,_=!1)=>(n||L(),O.schedule(N,P,_)),T},{}),cancel:T=>{for(let k=0;k<nc.length;k++)d[nc[k]].cancel(T)},state:o,steps:d}}const{schedule:Ne,cancel:Oi,state:gt,steps:s0}=Y5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0);let Lc;function KT(){Lc=void 0}const _t={now:()=>(Lc===void 0&&_t.set(gt.isProcessing||xn.useManualTiming?gt.timestamp:performance.now()),Lc),set:e=>{Lc=e,queueMicrotask(KT)}},q5=e=>t=>typeof t=="string"&&t.startsWith(e),Oh=q5("--"),QT=q5("var(--"),Rh=e=>QT(e)?JT.test(e.split("/*")[0].trim()):!1,JT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bo={...Yr,transform:e=>Xi(0,1,e)},ac={...Yr,default:1},ro=e=>Math.round(e*1e5)/1e5,Vh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eE(e){return e==null}const tE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,kh=(e,t)=>n=>!!(typeof n=="string"&&tE.test(n)&&n.startsWith(e)||t&&!eE(n)&&Object.prototype.hasOwnProperty.call(n,t)),F5=(e,t,n)=>a=>{if(typeof a!="string")return a;const[o,l,d,u]=a.match(Vh);return{[e]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(d),alpha:u!==void 0?parseFloat(u):1}},iE=e=>Xi(0,255,e),o0={...Yr,transform:e=>Math.round(iE(e))},wa={test:kh("rgb","red"),parse:F5("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+o0.transform(e)+", "+o0.transform(t)+", "+o0.transform(n)+", "+ro(bo.transform(a))+")"};function nE(e){let t="",n="",a="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const xp={test:kh("#"),parse:nE,transform:wa.transform},Ho=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qn=Ho("deg"),qi=Ho("%"),ge=Ho("px"),aE=Ho("vh"),rE=Ho("vw"),V3={...qi,parse:e=>qi.parse(e)/100,transform:e=>qi.transform(e*100)},Sr={test:kh("hsl","hue"),parse:F5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+qi.transform(ro(t))+", "+qi.transform(ro(n))+", "+ro(bo.transform(a))+")"},rt={test:e=>wa.test(e)||xp.test(e)||Sr.test(e),parse:e=>wa.test(e)?wa.parse(e):Sr.test(e)?Sr.parse(e):xp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?wa.transform(e):Sr.transform(e),getAnimatableNone:e=>{const t=rt.parse(e);return t.alpha=0,rt.transform(t)}},sE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function oE(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Vh))==null?void 0:t.length)||0)+(((n=e.match(sE))==null?void 0:n.length)||0)>0}const X5="number",Z5="color",lE="var",cE="var(",k3="${}",dE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function So(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},o=[];let l=0;const u=t.replace(dE,p=>(rt.test(p)?(a.color.push(l),o.push(Z5),n.push(rt.parse(p))):p.startsWith(cE)?(a.var.push(l),o.push(lE),n.push(p)):(a.number.push(l),o.push(X5),n.push(parseFloat(p))),++l,k3)).split(k3);return{values:n,split:u,indexes:a,types:o}}function W5(e){return So(e).values}function K5(e){const{split:t,types:n}=So(e),a=t.length;return o=>{let l="";for(let d=0;d<a;d++)if(l+=t[d],o[d]!==void 0){const u=n[d];u===X5?l+=ro(o[d]):u===Z5?l+=rt.transform(o[d]):l+=o[d]}return l}}const uE=e=>typeof e=="number"?0:rt.test(e)?rt.getAnimatableNone(e):e;function fE(e){const t=W5(e);return K5(e)(t.map(uE))}const Zn={test:oE,parse:W5,createTransformer:K5,getAnimatableNone:fE};function l0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function pE({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let o=0,l=0,d=0;if(!t)o=l=d=n;else{const u=n<.5?n*(1+t):n+t-n*t,p=2*n-u;o=l0(p,u,e+1/3),l=l0(p,u,e),d=l0(p,u,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(d*255),alpha:a}}function Uc(e,t){return n=>n>0?t:e}const Xe=(e,t,n)=>e+(t-e)*n,c0=(e,t,n)=>{const a=e*e,o=n*(t*t-a)+a;return o<0?0:Math.sqrt(o)},hE=[xp,wa,Sr],mE=e=>hE.find(t=>t.test(e));function D3(e){const t=mE(e);if(!t)return!1;let n=t.parse(e);return t===Sr&&(n=pE(n)),n}const H3=(e,t)=>{const n=D3(e),a=D3(t);if(!n||!a)return Uc(e,t);const o={...n};return l=>(o.red=c0(n.red,a.red,l),o.green=c0(n.green,a.green,l),o.blue=c0(n.blue,a.blue,l),o.alpha=Xe(n.alpha,a.alpha,l),wa.transform(o))},vp=new Set(["none","hidden"]);function gE(e,t){return vp.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function xE(e,t){return n=>Xe(e,t,n)}function Dh(e){return typeof e=="number"?xE:typeof e=="string"?Rh(e)?Uc:rt.test(e)?H3:wE:Array.isArray(e)?Q5:typeof e=="object"?rt.test(e)?H3:vE:Uc}function Q5(e,t){const n=[...e],a=n.length,o=e.map((l,d)=>Dh(l)(l,t[d]));return l=>{for(let d=0;d<a;d++)n[d]=o[d](l);return n}}function vE(e,t){const n={...e,...t},a={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Dh(e[o])(e[o],t[o]));return o=>{for(const l in a)n[l]=a[l](o);return n}}function yE(e,t){const n=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],d=e.indexes[l][a[l]],u=e.values[d]??0;n[o]=u,a[l]++}return n}const wE=(e,t)=>{const n=Zn.createTransformer(t),a=So(e),o=So(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?vp.has(e)&&!o.values.length||vp.has(t)&&!a.values.length?gE(e,t):ko(Q5(yE(a,o),o.values),n):Uc(e,t)};function J5(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Xe(e,t,n):Dh(e)(e,t)}const bE=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Ne.update(t,n),stop:()=>Oi(t),now:()=>gt.isProcessing?gt.timestamp:_t.now()}},e6=(e,t,n=10)=>{let a="";const o=Math.max(Math.round(t/n),2);for(let l=0;l<o;l++)a+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},_c=2e4;function Hh(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<_c;)t+=n,a=e.next(t);return t>=_c?1/0:t}function SE(e,t=100,n){const a=n({...e,keyframes:[0,t]}),o=Math.min(Hh(a),_c);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:Yi(o)}}const CE=5;function t6(e,t,n){const a=Math.max(t-CE,0);return jh(n-e(a),t-a)}const Qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},d0=.001;function TE({duration:e=Qe.duration,bounce:t=Qe.bounce,velocity:n=Qe.velocity,mass:a=Qe.mass}){let o,l,d=1-t;d=Xi(Qe.minDamping,Qe.maxDamping,d),e=Xi(Qe.minDuration,Qe.maxDuration,Yi(e)),d<1?(o=m=>{const g=m*d,v=g*e,y=g-n,C=yp(m,d),b=Math.exp(-v);return d0-y/C*b},l=m=>{const v=m*d*e,y=v*n+n,C=Math.pow(d,2)*Math.pow(m,2)*e,b=Math.exp(-v),j=yp(Math.pow(m,2),d);return(-o(m)+d0>0?-1:1)*((y-C)*b)/j}):(o=m=>{const g=Math.exp(-m*e),v=(m-n)*e+1;return-d0+g*v},l=m=>{const g=Math.exp(-m*e),v=(n-m)*(e*e);return g*v});const u=5/e,p=jE(o,l,u);if(e=Gi(e),isNaN(p))return{stiffness:Qe.stiffness,damping:Qe.damping,duration:e};{const m=Math.pow(p,2)*a;return{stiffness:m,damping:d*2*Math.sqrt(a*m),duration:e}}}const EE=12;function jE(e,t,n){let a=n;for(let o=1;o<EE;o++)a=a-e(a)/t(a);return a}function yp(e,t){return e*Math.sqrt(1-t*t)}const AE=["duration","bounce"],ME=["stiffness","damping","mass"];function z3(e,t){return t.some(n=>e[n]!==void 0)}function LE(e){let t={velocity:Qe.velocity,stiffness:Qe.stiffness,damping:Qe.damping,mass:Qe.mass,isResolvedFromDuration:!1,...e};if(!z3(e,ME)&&z3(e,AE))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),o=a*a,l=2*Xi(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Qe.mass,stiffness:o,damping:l}}else{const n=TE(e);t={...t,...n,mass:Qe.mass},t.isResolvedFromDuration=!0}return t}function Gc(e=Qe.visualDuration,t=Qe.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=n;const l=n.keyframes[0],d=n.keyframes[n.keyframes.length-1],u={done:!1,value:l},{stiffness:p,damping:m,mass:g,duration:v,velocity:y,isResolvedFromDuration:C}=LE({...n,velocity:-Yi(n.velocity||0)}),b=y||0,j=m/(2*Math.sqrt(p*g)),L=d-l,M=Yi(Math.sqrt(p/g)),E=Math.abs(L)<5;a||(a=E?Qe.restSpeed.granular:Qe.restSpeed.default),o||(o=E?Qe.restDelta.granular:Qe.restDelta.default);let T;if(j<1){const O=yp(M,j);T=N=>{const P=Math.exp(-j*M*N);return d-P*((b+j*M*L)/O*Math.sin(O*N)+L*Math.cos(O*N))}}else if(j===1)T=O=>d-Math.exp(-M*O)*(L+(b+M*L)*O);else{const O=M*Math.sqrt(j*j-1);T=N=>{const P=Math.exp(-j*M*N),_=Math.min(O*N,300);return d-P*((b+j*M*L)*Math.sinh(_)+O*L*Math.cosh(_))/O}}const k={calculatedDuration:C&&v||null,next:O=>{const N=T(O);if(C)u.done=O>=v;else{let P=O===0?b:0;j<1&&(P=O===0?Gi(b):t6(T,O,N));const _=Math.abs(P)<=a,q=Math.abs(d-N)<=o;u.done=_&&q}return u.value=u.done?d:N,u},toString:()=>{const O=Math.min(Hh(k),_c),N=e6(P=>k.next(O*P).value,O,30);return O+"ms "+N},toTransition:()=>{}};return k}Gc.applyToOptions=e=>{const t=SE(e,100,Gc);return e.ease=t.ease,e.duration=Gi(t.duration),e.type="keyframes",e};function wp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:d,min:u,max:p,restDelta:m=.5,restSpeed:g}){const v=e[0],y={done:!1,value:v},C=_=>u!==void 0&&_<u||p!==void 0&&_>p,b=_=>u===void 0?p:p===void 0||Math.abs(u-_)<Math.abs(p-_)?u:p;let j=n*t;const L=v+j,M=d===void 0?L:d(L);M!==L&&(j=M-v);const E=_=>-j*Math.exp(-_/a),T=_=>M+E(_),k=_=>{const q=E(_),F=T(_);y.done=Math.abs(q)<=m,y.value=y.done?M:F};let O,N;const P=_=>{C(y.value)&&(O=_,N=Gc({keyframes:[y.value,b(y.value)],velocity:t6(T,_,y.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return P(0),{calculatedDuration:null,next:_=>{let q=!1;return!N&&O===void 0&&(q=!0,k(_),P(_)),O!==void 0&&_>=O?N.next(_-O):(!q&&k(_),y)}}}function OE(e,t,n){const a=[],o=n||xn.mix||J5,l=e.length-1;for(let d=0;d<l;d++){let u=o(e[d],e[d+1]);if(t){const p=Array.isArray(t)?t[d]||Gt:t;u=ko(p,u)}a.push(u)}return a}function zh(e,t,{clamp:n=!0,ease:a,mixer:o}={}){const l=e.length;if(wo(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const d=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const u=OE(t,a,o),p=u.length,m=g=>{if(d&&g<e[0])return t[0];let v=0;if(p>1)for(;v<e.length-2&&!(g<e[v+1]);v++);const y=Pr(e[v],e[v+1],g);return u[v](y)};return n?g=>m(Xi(e[0],e[l-1],g)):m}function RE(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const o=Pr(0,t,a);e.push(Xe(n,1,o))}}function i6(e){const t=[0];return RE(t,e.length-1),t}function VE(e,t){return e.map(n=>n*t)}function kE(e,t){return e.map(()=>t||Lh).splice(0,e.length-1)}function so({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const o=qT(a)?a.map(R3):R3(a),l={done:!1,value:t[0]},d=VE(n&&n.length===t.length?n:i6(t),e),u=zh(d,t,{ease:Array.isArray(o)?o:kE(t,o)});return{calculatedDuration:e,next:p=>(l.value=u(p),l.done=p>=e,l)}}const DE=e=>e!==null;function Ph(e,{repeat:t,repeatType:n="loop"},a,o=1){const l=e.filter(DE),u=o<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!u||a===void 0?l[u]:a}const HE={decay:wp,inertia:wp,tween:so,keyframes:so,spring:Gc};function n6(e){typeof e.type=="string"&&(e.type=HE[e.type])}class Nh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const zE=e=>e/100;class $h extends Nh{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:n}=this.options;n&&n.updatedAt!==_t.now()&&this.tick(_t.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;n6(t);const{type:n=so,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:d=0}=t;let{keyframes:u}=t;const p=n||so;p!==so&&typeof u[0]!="number"&&(this.mixKeyframes=ko(zE,J5(u[0],u[1])),u=[0,100]);const m=p({...t,keyframes:u});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...u].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=Hh(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=m}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:d,resolvedDuration:u,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:m=0,keyframes:g,repeat:v,repeatType:y,repeatDelay:C,type:b,onUpdate:j,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const M=this.currentTime-m*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let T=this.currentTime,k=a;if(v){const _=Math.min(this.currentTime,o)/u;let q=Math.floor(_),F=_%1;!F&&_>=1&&(F=1),F===1&&q--,q=Math.min(q,v+1),!!(q%2)&&(y==="reverse"?(F=1-F,C&&(F-=C/u)):y==="mirror"&&(k=d)),T=Xi(0,1,F)*u}const O=E?{done:!1,value:g[0]}:k.next(T);l&&(O.value=l(O.value));let{done:N}=O;!E&&p!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return P&&b!==wp&&(O.value=Ph(g,this.options,L,this.speed)),j&&j(O.value),P&&this.finish(),O}then(t,n){return this.finished.then(t,n)}get duration(){return Yi(this.calculatedDuration)}get time(){return Yi(this.currentTime)}set time(t){var n;t=Gi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(_t.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Yi(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=bE,startTime:n}=this.options;this.driver||(this.driver=t(d=>this.tick(d))),(l=(o=this.options).onPlay)==null||l.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_t.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function PE(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const ba=e=>e*180/Math.PI,bp=e=>{const t=ba(Math.atan2(e[1],e[0]));return Sp(t)},NE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:bp,rotateZ:bp,skewX:e=>ba(Math.atan(e[1])),skewY:e=>ba(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Sp=e=>(e=e%360,e<0&&(e+=360),e),P3=bp,N3=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),$3=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),$E={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:N3,scaleY:$3,scale:e=>(N3(e)+$3(e))/2,rotateX:e=>Sp(ba(Math.atan2(e[6],e[5]))),rotateY:e=>Sp(ba(Math.atan2(-e[2],e[0]))),rotateZ:P3,rotate:P3,skewX:e=>ba(Math.atan(e[4])),skewY:e=>ba(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Cp(e){return e.includes("scale")?1:0}function Tp(e,t){if(!e||e==="none")return Cp(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(n)a=$E,o=n;else{const u=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=NE,o=u}if(!o)return Cp(t);const l=a[t],d=o[1].split(",").map(IE);return typeof l=="function"?l(d):d[l]}const BE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Tp(n,t)};function IE(e){return parseFloat(e.trim())}const qr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fr=new Set(qr),B3=e=>e===Yr||e===ge,UE=new Set(["x","y","z"]),_E=qr.filter(e=>!UE.has(e));function GE(e){const t=[];return _E.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const Ta={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Tp(t,"x"),y:(e,{transform:t})=>Tp(t,"y")};Ta.translateX=Ta.x;Ta.translateY=Ta.y;const Ea=new Set;let Ep=!1,jp=!1,Ap=!1;function a6(){if(jp){const e=Array.from(Ea).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const o=GE(a);o.length&&(n.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=n.get(a);o&&o.forEach(([l,d])=>{var u;(u=a.getValue(l))==null||u.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}jp=!1,Ep=!1,Ea.forEach(e=>e.complete(Ap)),Ea.clear()}function r6(){Ea.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(jp=!0)})}function YE(){Ap=!0,r6(),a6(),Ap=!1}class Bh{constructor(t,n,a,o,l,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=o,this.element=l,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ea.add(this),Ep||(Ep=!0,Ne.read(r6),Ne.resolveKeyframes(a6))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),d=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&n){const u=a.readValue(n,d);u!=null&&(t[0]=u)}t[0]===void 0&&(t[0]=d),o&&l===void 0&&o.set(t[0])}PE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ea.delete(this)}cancel(){this.state==="scheduled"&&(Ea.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qE=e=>e.startsWith("--");function FE(e,t,n){qE(t)?e.style.setProperty(t,n):e.style[t]=n}const s6=Th(()=>window.ScrollTimeline!==void 0),XE={};function ZE(e,t){const n=Th(e);return()=>XE[t]??n()}const o6=ZE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),no=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,I3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:no([0,.65,.55,1]),circOut:no([.55,0,1,.45]),backIn:no([.31,.01,.66,-.59]),backOut:no([.33,1.53,.69,.99])};function l6(e,t){if(e)return typeof e=="function"?o6()?e6(e,t):"ease-out":G5(e)?no(e):Array.isArray(e)?e.map(n=>l6(n,t)||I3.easeOut):I3[e]}function WE(e,t,n,{delay:a=0,duration:o=300,repeat:l=0,repeatType:d="loop",ease:u="easeOut",times:p}={},m=void 0){const g={[t]:n};p&&(g.offset=p);const v=l6(u,o);Array.isArray(v)&&(g.easing=v);const y={delay:a,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:d==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),e.animate(g,y)}function c6(e){return typeof e=="function"&&"applyToOptions"in e}function KE({type:e,...t}){return c6(e)&&o6()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class QE extends Nh{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:a,keyframes:o,pseudoElement:l,allowFlatten:d=!1,finalKeyframe:u,onComplete:p}=t;this.isPseudoElement=!!l,this.allowFlatten=d,this.options=t,wo(typeof t.type!="string");const m=KE(t);this.animation=WE(n,a,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=Ph(o,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(g):FE(n,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return Yi(Number(t))}get time(){return Yi(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Gi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&s6()?(this.animation.timeline=t,Gt):n(this)}}const d6={anticipate:U5,backInOut:I5,circInOut:_5};function JE(e){return e in d6}function ej(e){typeof e.ease=="string"&&JE(e.ease)&&(e.ease=d6[e.ease])}const U3=10;class tj extends QE{constructor(t){ej(t),n6(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:o,element:l,...d}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const u=new $h({...d,autoplay:!1}),p=Gi(this.finishedTime??this.time);n.setWithVelocity(u.sample(p-U3).value,u.sample(p).value,U3),u.stop()}}const _3=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Zn.test(e)||e==="0")&&!e.startsWith("url("));function ij(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function nj(e,t,n,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],d=_3(o,t),u=_3(l,t);return!d||!u?!1:ij(e)||(n==="spring"||c6(n))&&a}function Mp(e){e.duration=0,e.type}const aj=new Set(["opacity","clipPath","filter","transform"]),rj=Th(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sj(e){var g;const{motionValue:t,name:n,repeatDelay:a,repeatType:o,damping:l,type:d}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=t.owner.getProps();return rj()&&n&&aj.has(n)&&(n!=="transform"||!m)&&!p&&!a&&o!=="mirror"&&l!==0&&d!=="inertia"}const oj=40;class lj extends Nh{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:d="loop",keyframes:u,name:p,motionValue:m,element:g,...v}){var b;super(),this.stop=()=>{var j,L;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=_t.now();const y={autoplay:t,delay:n,type:a,repeat:o,repeatDelay:l,repeatType:d,name:p,motionValue:m,element:g,...v},C=(g==null?void 0:g.KeyframeResolver)||Bh;this.keyframeResolver=new C(u,(j,L,M)=>this.onKeyframesResolved(j,L,y,!M),p,m,g),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,a,o){this.keyframeResolver=void 0;const{name:l,type:d,velocity:u,delay:p,isHandoff:m,onUpdate:g}=a;this.resolvedAt=_t.now(),nj(t,l,d,u)||((xn.instantAnimations||!p)&&(g==null||g(Ph(t,a,n))),t[0]=t[t.length-1],Mp(a),a.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>oj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},C=!m&&sj(y)?new tj({...y,element:y.motionValue.owner.current}):new $h(y);C.finished.then(()=>this.notifyFinished()).catch(Gt),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),YE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const cj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dj(e){const t=cj.exec(e);if(!t)return[,];const[,n,a,o]=t;return[`--${n??a}`,o]}function u6(e,t,n=1){const[a,o]=dj(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const d=l.trim();return H5(d)?parseFloat(d):d}return Rh(o)?u6(o,t,n+1):o}function Ih(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const f6=new Set(["width","height","top","left","right","bottom",...qr]),uj={test:e=>e==="auto",parse:e=>e},p6=e=>t=>t.test(e),h6=[Yr,ge,qi,qn,rE,aE,uj],G3=e=>h6.find(p6(e));function fj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||P5(e):!0}const pj=new Set(["brightness","contrast","saturate","opacity"]);function hj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(Vh)||[];if(!a)return e;const o=n.replace(a,"");let l=pj.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+o+")"}const mj=/\b([a-z-]*)\(.*?\)/gu,Lp={...Zn,getAnimatableNone:e=>{const t=e.match(mj);return t?t.map(hj).join(" "):e}},Y3={...Yr,transform:Math.round},gj={rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:ac,scaleX:ac,scaleY:ac,scaleZ:ac,skew:qn,skewX:qn,skewY:qn,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:bo,originX:V3,originY:V3,originZ:ge},Uh={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,backgroundPositionX:ge,backgroundPositionY:ge,...gj,zIndex:Y3,fillOpacity:bo,strokeOpacity:bo,numOctaves:Y3},xj={...Uh,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Lp,WebkitFilter:Lp},m6=e=>xj[e];function g6(e,t){let n=m6(e);return n!==Lp&&(n=Zn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const vj=new Set(["auto","none","0"]);function yj(e,t,n){let a=0,o;for(;a<e.length&&!o;){const l=e[a];typeof l=="string"&&!vj.has(l)&&So(l).values.length&&(o=e[a]),a++}if(o&&n)for(const l of t)e[l]=g6(n,o)}class wj extends Bh{constructor(t,n,a,o,l){super(t,n,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let m=t[p];if(typeof m=="string"&&(m=m.trim(),Rh(m))){const g=u6(m,n.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!f6.has(a)||t.length!==2)return;const[o,l]=t,d=G3(o),u=G3(l);if(d!==u)if(B3(d)&&B3(u))for(let p=0;p<t.length;p++){const m=t[p];typeof m=="string"&&(t[p]=parseFloat(m))}else Ta[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||fj(t[o]))&&a.push(o);a.length&&yj(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ta[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var u;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const l=a.length-1,d=a[l];a[l]=Ta[n](t.measureViewportBox(),window.getComputedStyle(t.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([p,m])=>{t.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function x6(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const v6=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function _h(e){return z5(e)&&"offsetHeight"in e}const q3=30,bj=e=>!isNaN(parseFloat(e)),oo={current:void 0};class Sj{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var l;const o=_t.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=_t.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=bj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Eh);const a=this.events[t].add(n);return t==="change"?()=>{a(),Ne.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return oo.current&&oo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=_t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>q3)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,q3);return jh(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ai(e,t){return new Sj(e,t)}const{schedule:Gh}=Y5(queueMicrotask,!1),ji={x:!1,y:!1};function y6(){return ji.x||ji.y}function Cj(e){return e==="x"||e==="y"?ji[e]?null:(ji[e]=!0,()=>{ji[e]=!1}):ji.x||ji.y?null:(ji.x=ji.y=!0,()=>{ji.x=ji.y=!1})}function w6(e,t){const n=x6(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[n,o,()=>a.abort()]}function F3(e){return!(e.pointerType==="touch"||y6())}function Tj(e,t,n={}){const[a,o,l]=w6(e,n),d=u=>{if(!F3(u))return;const{target:p}=u,m=t(p,u);if(typeof m!="function"||!p)return;const g=v=>{F3(v)&&(m(v),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return a.forEach(u=>{u.addEventListener("pointerenter",d,o)}),l}const b6=(e,t)=>t?e===t?!0:b6(e,t.parentElement):!1,Yh=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Ej=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jj(e){return Ej.has(e.tagName)||e.tabIndex!==-1}const Oc=new WeakSet;function X3(e){return t=>{t.key==="Enter"&&e(t)}}function u0(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Aj=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=X3(()=>{if(Oc.has(n))return;u0(n,"down");const o=X3(()=>{u0(n,"up")}),l=()=>u0(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",l,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function Z3(e){return Yh(e)&&!y6()}function Mj(e,t,n={}){const[a,o,l]=w6(e,n),d=u=>{const p=u.currentTarget;if(!Z3(u))return;Oc.add(p);const m=t(p,u),g=(C,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",y),Oc.has(p)&&Oc.delete(p),Z3(C)&&typeof m=="function"&&m(C,{success:b})},v=C=>{g(C,p===window||p===document||n.useGlobalTarget||b6(p,C.target))},y=C=>{g(C,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",y,o)};return a.forEach(u=>{(n.useGlobalTarget?window:u).addEventListener("pointerdown",d,o),_h(u)&&(u.addEventListener("focus",m=>Aj(m,o)),!jj(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),l}function qh(e){return z5(e)&&"ownerSVGElement"in e}const Rc=new WeakMap;let Fn;const S6=(e,t,n)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:qh(a)&&"getBBox"in a?a.getBBox()[t]:a[n],Lj=S6("inline","width","offsetWidth"),Oj=S6("block","height","offsetHeight");function Rj({target:e,borderBoxSize:t}){var n;(n=Rc.get(e))==null||n.forEach(a=>{a(e,{get width(){return Lj(e,t)},get height(){return Oj(e,t)}})})}function Vj(e){e.forEach(Rj)}function kj(){typeof ResizeObserver>"u"||(Fn=new ResizeObserver(Vj))}function Dj(e,t){Fn||kj();const n=x6(e);return n.forEach(a=>{let o=Rc.get(a);o||(o=new Set,Rc.set(a,o)),o.add(t),Fn==null||Fn.observe(a)}),()=>{n.forEach(a=>{const o=Rc.get(a);o==null||o.delete(t),o!=null&&o.size||Fn==null||Fn.unobserve(a)})}}const Vc=new Set;let Cr;function Hj(){Cr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Vc.forEach(t=>t(e))},window.addEventListener("resize",Cr)}function zj(e){return Vc.add(e),Cr||Hj(),()=>{Vc.delete(e),!Vc.size&&typeof Cr=="function"&&(window.removeEventListener("resize",Cr),Cr=void 0)}}function Pj(e,t){return typeof e=="function"?zj(e):Dj(e,t)}function C6(e,t){let n;const a=()=>{const{currentTime:o}=t,d=(o===null?0:o.value)/100;n!==d&&e(d),n=d};return Ne.preUpdate(a,!0),()=>Oi(a)}function Nj(e){return qh(e)&&e.tagName==="svg"}function $j(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],o=e[1+n],l=e[2+n],d=e[3+n],u=zh(o,l,d);return t?u(a):u}const Ot=e=>!!(e&&e.getVelocity),Bj=[...h6,rt,Zn],Ij=e=>Bj.find(p6(e)),yd=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Uj extends R.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const a=n.offsetParent,o=_h(a)&&a.offsetWidth||0,l=this.props.sizeRef.current;l.height=n.offsetHeight||0,l.width=n.offsetWidth||0,l.top=n.offsetTop,l.left=n.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function _j({children:e,isPresent:t,anchorX:n,root:a}){const o=R.useId(),l=R.useRef(null),d=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=R.useContext(yd);return R.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:v,right:y}=d.current;if(t||!l.current||!p||!m)return;const C=n==="left"?`left: ${v}`:`right: ${y}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");u&&(b.nonce=u);const j=a??document.head;return j.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${C}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(b)&&j.removeChild(b)}},[t]),f.jsx(Uj,{isPresent:t,childRef:l,sizeRef:d,children:R.cloneElement(e,{ref:l})})}const Gj=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:o,presenceAffectsLayout:l,mode:d,anchorX:u,root:p})=>{const m=La(Yj),g=R.useId();let v=!0,y=R.useMemo(()=>(v=!1,{id:g,initial:t,isPresent:n,custom:o,onExitComplete:C=>{m.set(C,!0);for(const b of m.values())if(!b)return;a&&a()},register:C=>(m.set(C,!1),()=>m.delete(C))}),[n,m,a]);return l&&v&&(y={...y}),R.useMemo(()=>{m.forEach((C,b)=>m.set(b,!1))},[n]),R.useEffect(()=>{!n&&!m.size&&a&&a()},[n]),d==="popLayout"&&(e=f.jsx(_j,{isPresent:n,anchorX:u,root:p,children:e})),f.jsx(vd.Provider,{value:y,children:e})};function Yj(){return new Map}function T6(e=!0){const t=R.useContext(vd);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:o}=t,l=R.useId();R.useEffect(()=>{if(e)return o(l)},[e]);const d=R.useCallback(()=>e&&a&&a(l),[l,a,e]);return!n&&a?[!1,d]:[!0]}const rc=e=>e.key||"";function W3(e){const t=[];return R.Children.forEach(e,n=>{R.isValidElement(n)&&t.push(n)}),t}const Fh=({children:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:l="sync",propagate:d=!1,anchorX:u="left",root:p})=>{const[m,g]=T6(d),v=R.useMemo(()=>W3(e),[e]),y=d&&!m?[]:v.map(rc),C=R.useRef(!0),b=R.useRef(v),j=La(()=>new Map),[L,M]=R.useState(v),[E,T]=R.useState(v);Vo(()=>{C.current=!1,b.current=v;for(let N=0;N<E.length;N++){const P=rc(E[N]);y.includes(P)?j.delete(P):j.get(P)!==!0&&j.set(P,!1)}},[E,y.length,y.join("-")]);const k=[];if(v!==L){let N=[...v];for(let P=0;P<E.length;P++){const _=E[P],q=rc(_);y.includes(q)||(N.splice(P,0,_),k.push(_))}return l==="wait"&&k.length&&(N=k),T(W3(N)),M(v),null}const{forceRender:O}=R.useContext(wh);return f.jsx(f.Fragment,{children:E.map(N=>{const P=rc(N),_=d&&!m?!1:v===E||y.includes(P),q=()=>{if(j.has(P))j.set(P,!0);else return;let F=!0;j.forEach(K=>{K||(F=!1)}),F&&(O==null||O(),T(b.current),d&&(g==null||g()),a&&a())};return f.jsx(Gj,{isPresent:_,initial:!C.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:_?void 0:q,anchorX:u,children:N},P)})})},E6=R.createContext({strict:!1}),K3={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Nr={};for(const e in K3)Nr[e]={isEnabled:t=>K3[e].some(n=>!!t[n])};function qj(e){for(const t in e)Nr[t]={...Nr[t],...e[t]}}const Fj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Yc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Fj.has(e)}let j6=e=>!Yc(e);function Xj(e){typeof e=="function"&&(j6=t=>t.startsWith("on")?!Yc(t):e(t))}try{Xj(require("@emotion/is-prop-valid").default)}catch{}function Zj(e,t,n){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(j6(o)||n===!0&&Yc(o)||!t&&!Yc(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const wd=R.createContext({});function bd(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Co(e){return typeof e=="string"||Array.isArray(e)}const Xh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zh=["initial",...Xh];function Sd(e){return bd(e.animate)||Zh.some(t=>Co(e[t]))}function A6(e){return!!(Sd(e)||e.variants)}function Wj(e,t){if(Sd(e)){const{initial:n,animate:a}=e;return{initial:n===!1||Co(n)?n:void 0,animate:Co(a)?a:void 0}}return e.inherit!==!1?t:{}}function Kj(e){const{initial:t,animate:n}=Wj(e,R.useContext(wd));return R.useMemo(()=>({initial:t,animate:n}),[Q3(t),Q3(n)])}function Q3(e){return Array.isArray(e)?e.join(" "):e}const To={};function Qj(e){for(const t in e)To[t]=e[t],Oh(t)&&(To[t].isCSSVariable=!0)}function M6(e,{layout:t,layoutId:n}){return Fr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!To[e]||e==="opacity")}const Jj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},eA=qr.length;function tA(e,t,n){let a="",o=!0;for(let l=0;l<eA;l++){const d=qr[l],u=e[d];if(u===void 0)continue;let p=!0;if(typeof u=="number"?p=u===(d.startsWith("scale")?1:0):p=parseFloat(u)===0,!p||n){const m=v6(u,Uh[d]);if(!p){o=!1;const g=Jj[d]||d;a+=`${g}(${m}) `}n&&(t[d]=m)}}return a=a.trim(),n?a=n(t,o?"":a):o&&(a="none"),a}function Wh(e,t,n){const{style:a,vars:o,transformOrigin:l}=e;let d=!1,u=!1;for(const p in t){const m=t[p];if(Fr.has(p)){d=!0;continue}else if(Oh(p)){o[p]=m;continue}else{const g=v6(m,Uh[p]);p.startsWith("origin")?(u=!0,l[p]=g):a[p]=g}}if(t.transform||(d||n?a.transform=tA(t,e.transform,n):a.transform&&(a.transform="none")),u){const{originX:p="50%",originY:m="50%",originZ:g=0}=l;a.transformOrigin=`${p} ${m} ${g}`}}const Kh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function L6(e,t,n){for(const a in t)!Ot(t[a])&&!M6(a,n)&&(e[a]=t[a])}function iA({transformTemplate:e},t){return R.useMemo(()=>{const n=Kh();return Wh(n,t,e),Object.assign({},n.vars,n.style)},[t])}function nA(e,t){const n=e.style||{},a={};return L6(a,n,e),Object.assign(a,iA(e,t)),a}function aA(e,t){const n={},a=nA(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const rA={offset:"stroke-dashoffset",array:"stroke-dasharray"},sA={offset:"strokeDashoffset",array:"strokeDasharray"};function oA(e,t,n=1,a=0,o=!0){e.pathLength=1;const l=o?rA:sA;e[l.offset]=ge.transform(-a);const d=ge.transform(t),u=ge.transform(n);e[l.array]=`${d} ${u}`}function O6(e,{attrX:t,attrY:n,attrScale:a,pathLength:o,pathSpacing:l=1,pathOffset:d=0,...u},p,m,g){if(Wh(e,u,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:y}=e;v.transform&&(y.transform=v.transform,delete v.transform),(y.transform||v.transformOrigin)&&(y.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),a!==void 0&&(v.scale=a),o!==void 0&&oA(v,o,l,d,!1)}const R6=()=>({...Kh(),attrs:{}}),V6=e=>typeof e=="string"&&e.toLowerCase()==="svg";function lA(e,t,n,a){const o=R.useMemo(()=>{const l=R6();return O6(l,t,V6(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};L6(l,e.style,e),o.style={...l,...o.style}}return o}const cA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qh(e){return typeof e!="string"||e.includes("-")?!1:!!(cA.indexOf(e)>-1||/[A-Z]/u.test(e))}function dA(e,t,n,{latestValues:a},o,l=!1){const u=(Qh(e)?lA:aA)(t,a,o,e),p=Zj(t,typeof e=="string",l),m=e!==R.Fragment?{...p,...u,ref:n}:{},{children:g}=t,v=R.useMemo(()=>Ot(g)?g.get():g,[g]);return R.createElement(e,{...m,children:v})}function J3(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function Jh(e,t,n,a){if(typeof t=="function"){const[o,l]=J3(a);t=t(n!==void 0?n:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=J3(a);t=t(n!==void 0?n:e.custom,o,l)}return t}function kc(e){return Ot(e)?e.get():e}function uA({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,o){return{latestValues:fA(n,a,o,e),renderState:t()}}function fA(e,t,n,a){const o={},l=a(e,{});for(const y in l)o[y]=kc(l[y]);let{initial:d,animate:u}=e;const p=Sd(e),m=A6(e);t&&m&&!p&&e.inherit!==!1&&(d===void 0&&(d=t.initial),u===void 0&&(u=t.animate));let g=n?n.initial===!1:!1;g=g||d===!1;const v=g?u:d;if(v&&typeof v!="boolean"&&!bd(v)){const y=Array.isArray(v)?v:[v];for(let C=0;C<y.length;C++){const b=Jh(e,y[C]);if(b){const{transitionEnd:j,transition:L,...M}=b;for(const E in M){let T=M[E];if(Array.isArray(T)){const k=g?T.length-1:0;T=T[k]}T!==null&&(o[E]=T)}for(const E in j)o[E]=j[E]}}}return o}const k6=e=>(t,n)=>{const a=R.useContext(wd),o=R.useContext(vd),l=()=>uA(e,t,a,o);return n?l():La(l)};function e1(e,t,n){var l;const{style:a}=e,o={};for(const d in a)(Ot(a[d])||t.style&&Ot(t.style[d])||M6(d,e)||((l=n==null?void 0:n.getValue(d))==null?void 0:l.liveStyle)!==void 0)&&(o[d]=a[d]);return o}const pA=k6({scrapeMotionValuesFromProps:e1,createRenderState:Kh});function D6(e,t,n){const a=e1(e,t,n);for(const o in e)if(Ot(e[o])||Ot(t[o])){const l=qr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=e[o]}return a}const hA=k6({scrapeMotionValuesFromProps:D6,createRenderState:R6}),mA=Symbol.for("motionComponentSymbol");function Tr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gA(e,t,n){return R.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),n&&(typeof n=="function"?n(a):Tr(n)&&(n.current=a))},[t])}const t1=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xA="framerAppearId",H6="data-"+t1(xA),z6=R.createContext({});function vA(e,t,n,a,o){var j,L;const{visualElement:l}=R.useContext(wd),d=R.useContext(E6),u=R.useContext(vd),p=R.useContext(yd).reducedMotion,m=R.useRef(null);a=a||d.renderer,!m.current&&a&&(m.current=a(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,v=R.useContext(z6);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&yA(m.current,n,o,v);const y=R.useRef(!1);R.useInsertionEffect(()=>{g&&y.current&&g.update(n,u)});const C=n[H6],b=R.useRef(!!C&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,C))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,C)));return Vo(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),b.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(!b.current&&g.animationState&&g.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,C)}),b.current=!1),g.enteringChildren=void 0)}),g}function yA(e,t,n,a){const{layoutId:o,layout:l,drag:d,dragConstraints:u,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:P6(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!d||u&&Tr(u),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:p,layoutRoot:m})}function P6(e){if(e)return e.options.allowProjection!==!1?e.projection:P6(e.parent)}function f0(e,{forwardMotionProps:t=!1}={},n,a){n&&qj(n);const o=Qh(e)?hA:pA;function l(u,p){let m;const g={...R.useContext(yd),...u,layoutId:wA(u)},{isStatic:v}=g,y=Kj(u),C=o(u,v);if(!v&&bh){bA();const b=SA(g);m=b.MeasureLayout,y.visualElement=vA(e,C,g,a,b.ProjectionNode)}return f.jsxs(wd.Provider,{value:y,children:[m&&y.visualElement?f.jsx(m,{visualElement:y.visualElement,...g}):null,dA(e,u,gA(C,y.visualElement,p),C,v,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const d=R.forwardRef(l);return d[mA]=e,d}function wA({layoutId:e}){const t=R.useContext(wh).id;return t&&e!==void 0?t+"-"+e:e}function bA(e,t){R.useContext(E6).strict}function SA(e){const{drag:t,layout:n}=Nr;if(!t&&!n)return{};const a={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function CA(e,t){if(typeof Proxy>"u")return f0;const n=new Map,a=(l,d)=>f0(l,d,e,t),o=(l,d)=>a(l,d);return new Proxy(o,{get:(l,d)=>d==="create"?a:(n.has(d)||n.set(d,f0(d,void 0,e,t)),n.get(d))})}function N6({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function TA({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function EA(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function p0(e){return e===void 0||e===1}function Op({scale:e,scaleX:t,scaleY:n}){return!p0(e)||!p0(t)||!p0(n)}function va(e){return Op(e)||$6(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function $6(e){return e4(e.x)||e4(e.y)}function e4(e){return e&&e!=="0%"}function qc(e,t,n){const a=e-n,o=t*a;return n+o}function t4(e,t,n,a,o){return o!==void 0&&(e=qc(e,o,a)),qc(e,n,a)+t}function Rp(e,t=0,n=1,a,o){e.min=t4(e.min,t,n,a,o),e.max=t4(e.max,t,n,a,o)}function B6(e,{x:t,y:n}){Rp(e.x,t.translate,t.scale,t.originPoint),Rp(e.y,n.translate,n.scale,n.originPoint)}const i4=.999999999999,n4=1.0000000000001;function jA(e,t,n,a=!1){const o=n.length;if(!o)return;t.x=t.y=1;let l,d;for(let u=0;u<o;u++){l=n[u],d=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&jr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),d&&(t.x*=d.x.scale,t.y*=d.y.scale,B6(e,d)),a&&va(l.latestValues)&&jr(e,l.latestValues))}t.x<n4&&t.x>i4&&(t.x=1),t.y<n4&&t.y>i4&&(t.y=1)}function Er(e,t){e.min=e.min+t,e.max=e.max+t}function a4(e,t,n,a,o=.5){const l=Xe(e.min,e.max,o);Rp(e,t,n,l,a)}function jr(e,t){a4(e.x,t.x,t.scaleX,t.scale,t.originX),a4(e.y,t.y,t.scaleY,t.scale,t.originY)}function I6(e,t){return N6(EA(e.getBoundingClientRect(),t))}function AA(e,t,n){const a=I6(e,n),{scroll:o}=t;return o&&(Er(a.x,o.offset.x),Er(a.y,o.offset.y)),a}const r4=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ar=()=>({x:r4(),y:r4()}),s4=()=>({min:0,max:0}),it=()=>({x:s4(),y:s4()}),Vp={current:null},U6={current:!1};function MA(){if(U6.current=!0,!!bh)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vp.current=e.matches;e.addEventListener("change",t),t()}else Vp.current=!1}const LA=new WeakMap;function OA(e,t,n){for(const a in t){const o=t[a],l=n[a];if(Ot(o))e.addValue(a,o);else if(Ot(l))e.addValue(a,Ai(o,{owner:e}));else if(l!==o)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=e.getStaticValue(a);e.addValue(a,Ai(d!==void 0?d:o,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const o4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class RA{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:d},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Bh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=_t.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ne.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=d;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=m,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!l,this.isControllingVariants=Sd(n),this.isVariantNode=A6(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in v){const C=v[y];p[y]!==void 0&&Ot(C)&&C.set(p[y])}}mount(t){var n;this.current=t,LA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),U6.current||MA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vp.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Oi(this.notifyUpdate),Oi(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Fr.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",d=>{this.latestValues[t]=d,this.props.onUpdate&&Ne.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Nr){const n=Nr[t];if(!n)continue;const{isEnabled:a,Feature:o}=n;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):it()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<o4.length;a++){const o=o4[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,d=t[l];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=OA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=Ai(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(H5(a)||P5(a))?a=parseFloat(a):!Ij(a)&&Zn.test(n)&&(a=g6(t,n)),this.setBaseTarget(t,Ot(a)?a.get():a)),Ot(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var l;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const d=Jh(this.props,n,(l=this.presenceContext)==null?void 0:l.custom);d&&(a=d[t])}if(n&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ot(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Eh),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Gh.render(this.render)}}class _6 extends RA{constructor(){super(...arguments),this.KeyframeResolver=wj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ot(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function G6(e,{style:t,vars:n},a,o){const l=e.style;let d;for(d in t)l[d]=t[d];o==null||o.applyProjectionStyles(l,a);for(d in n)l.setProperty(d,n[d])}function VA(e){return window.getComputedStyle(e)}class kA extends _6{constructor(){super(...arguments),this.type="html",this.renderInstance=G6}readValueFromInstance(t,n){var a;if(Fr.has(n))return(a=this.projection)!=null&&a.isProjecting?Cp(n):BE(t,n);{const o=VA(t),l=(Oh(n)?o.getPropertyValue(n):o[n])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:n}){return I6(t,n)}build(t,n,a){Wh(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return e1(t,n,a)}}const Y6=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function DA(e,t,n,a){G6(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(Y6.has(o)?o:t1(o),t.attrs[o])}class HA extends _6{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=it}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Fr.has(n)){const a=m6(n);return a&&a.default||0}return n=Y6.has(n)?n:t1(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return D6(t,n,a)}build(t,n,a){O6(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,o){DA(t,n,a,o)}mount(t){this.isSVGTag=V6(t.tagName),super.mount(t)}}const zA=(e,t)=>Qh(e)?new HA(t):new kA(t,{allowProjection:e!==R.Fragment});function Lr(e,t,n){const a=e.getProps();return Jh(a,t,n!==void 0?n:a.custom,e)}const kp=e=>Array.isArray(e);function PA(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ai(n))}function NA(e){return kp(e)?e[e.length-1]||0:e}function i1(e,t){const n=Lr(e,t);let{transitionEnd:a={},transition:o={},...l}=n||{};l={...l,...a};for(const d in l){const u=NA(l[d]);PA(e,d,u)}}function $A(e){return!!(Ot(e)&&e.add)}function Dp(e,t){const n=e.getValue("willChange");if($A(n))return n.add(t);if(!n&&xn.WillChange){const a=new xn.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function q6(e){return e.props[H6]}const BA=e=>e!==null;function IA(e,{repeat:t,repeatType:n="loop"},a){const o=e.filter(BA),l=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[l]}const UA={type:"spring",stiffness:500,damping:25,restSpeed:10},_A=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),GA={type:"keyframes",duration:.8},YA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qA=(e,{keyframes:t})=>t.length>2?GA:Fr.has(e)?e.startsWith("scale")?_A(t[1]):UA:YA;function FA({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:d,repeatDelay:u,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const n1=(e,t,n,a={},o,l)=>d=>{const u=Ih(a,e)||{},p=u.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Gi(p);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...u,delay:-m,onUpdate:y=>{t.set(y),u.onUpdate&&u.onUpdate(y)},onComplete:()=>{d(),u.onComplete&&u.onComplete()},name:e,motionValue:t,element:l?void 0:o};FA(u)||Object.assign(g,qA(e,g)),g.duration&&(g.duration=Gi(g.duration)),g.repeatDelay&&(g.repeatDelay=Gi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Mp(g),g.delay===0&&(v=!0)),(xn.instantAnimations||xn.skipAnimations)&&(v=!0,Mp(g),g.delay=0),g.allowFlatten=!u.type&&!u.ease,v&&!l&&t.get()!==void 0){const y=IA(g.keyframes,u);if(y!==void 0){Ne.update(()=>{g.onUpdate(y),g.onComplete()});return}}return u.isSync?new $h(g):new lj(g)};function XA({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function F6(e,t,{delay:n=0,transitionOverride:a,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:d,...u}=t;a&&(l=a);const p=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in u){const v=e.getValue(g,e.latestValues[g]??null),y=u[g];if(y===void 0||m&&XA(m,g))continue;const C={delay:n,...Ih(l||{},g)},b=v.get();if(b!==void 0&&!v.isAnimating&&!Array.isArray(y)&&y===b&&!C.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const M=q6(e);if(M){const E=window.MotionHandoffAnimation(M,g,Ne);E!==null&&(C.startTime=E,j=!0)}}Dp(e,g),v.start(n1(g,v,y,e.shouldReduceMotion&&f6.has(g)?{type:!1}:C,e,j));const L=v.animation;L&&p.push(L)}return d&&Promise.all(p).then(()=>{Ne.update(()=>{d&&i1(e,d)})}),p}function X6(e,t,n,a=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),d=e.size,u=(d-1)*a;return typeof n=="function"?n(l,d):o===1?l*a:u-l*a}function Hp(e,t,n={}){var p;const a=Lr(e,t,n.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(o=n.transitionOverride);const l=a?()=>Promise.all(F6(e,a,n)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:y}=o;return ZA(e,t,m,g,v,y,n)}:()=>Promise.resolve(),{when:u}=o;if(u){const[m,g]=u==="beforeChildren"?[l,d]:[d,l];return m().then(()=>g())}else return Promise.all([l(),d(n.delay)])}function ZA(e,t,n=0,a=0,o=0,l=1,d){const u=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),u.push(Hp(p,t,{...d,delay:n+(typeof a=="function"?0:a)+X6(e.variantChildren,p,a,o,l)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(u)}function Z6(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(l=>Hp(e,l,n));a=Promise.all(o)}else if(typeof t=="string")a=Hp(e,t,n);else{const o=typeof t=="function"?Lr(e,t,n.custom):t;a=Promise.all(F6(e,o,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}function W6(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const WA=Zh.length;function K6(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?K6(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<WA;n++){const a=Zh[n],o=e.props[a];(Co(o)||o===!1)&&(t[a]=o)}return t}const KA=[...Xh].reverse(),QA=Xh.length;function JA(e){return t=>Promise.all(t.map(({animation:n,options:a})=>Z6(e,n,a)))}function eM(e){let t=JA(e),n=l4(),a=!0;const o=p=>(m,g)=>{var y;const v=Lr(e,g,p==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(v){const{transition:C,transitionEnd:b,...j}=v;m={...m,...j,...b}}return m};function l(p){t=p(e)}function d(p){const{props:m}=e,g=K6(e.parent)||{},v=[],y=new Set;let C={},b=1/0;for(let L=0;L<QA;L++){const M=KA[L],E=n[M],T=m[M]!==void 0?m[M]:g[M],k=Co(T),O=M===p?E.isActive:null;O===!1&&(b=L);let N=T===g[M]&&T!==m[M]&&k;if(N&&a&&e.manuallyAnimateOnMount&&(N=!1),E.protectedKeys={...C},!E.isActive&&O===null||!T&&!E.prevProp||bd(T)||typeof T=="boolean")continue;const P=tM(E.prevProp,T);let _=P||M===p&&E.isActive&&!N&&k||L>b&&k,q=!1;const F=Array.isArray(T)?T:[T];let K=F.reduce(o(M),{});O===!1&&(K={});const{prevResolvedValues:ne={}}=E,le={...ne,...K},ue=W=>{_=!0,y.has(W)&&(q=!0,y.delete(W)),E.needsAnimating[W]=!0;const J=e.getValue(W);J&&(J.liveStyle=!1)};for(const W in le){const J=K[W],ie=ne[W];if(C.hasOwnProperty(W))continue;let V=!1;kp(J)&&kp(ie)?V=!W6(J,ie):V=J!==ie,V?J!=null?ue(W):y.add(W):J!==void 0&&y.has(W)?ue(W):E.protectedKeys[W]=!0}E.prevProp=T,E.prevResolvedValues=K,E.isActive&&(C={...C,...K}),a&&e.blockInitialAnimation&&(_=!1);const oe=N&&P;_&&(!oe||q)&&v.push(...F.map(W=>{const J={type:M};if(typeof W=="string"&&a&&!oe&&e.manuallyAnimateOnMount&&e.parent){const{parent:ie}=e,V=Lr(ie,W);if(ie.enteringChildren&&V){const{delayChildren:X}=V.transition||{};J.delay=X6(ie.enteringChildren,e,X)}}return{animation:W,options:J}}))}if(y.size){const L={};if(typeof m.initial!="boolean"){const M=Lr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);M&&M.transition&&(L.transition=M.transition)}y.forEach(M=>{const E=e.getBaseTarget(M),T=e.getValue(M);T&&(T.liveStyle=!0),L[M]=E??null}),v.push({animation:L})}let j=!!v.length;return a&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(v):Promise.resolve()}function u(p,m){var v;if(n[p].isActive===m)return Promise.resolve();(v=e.variantChildren)==null||v.forEach(y=>{var C;return(C=y.animationState)==null?void 0:C.setActive(p,m)}),n[p].isActive=m;const g=d(p);for(const y in n)n[y].protectedKeys={};return g}return{animateChanges:d,setActive:u,setAnimateFunction:l,getState:()=>n,reset:()=>{n=l4(),a=!0}}}function tM(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!W6(t,e):!1}function xa(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function l4(){return{animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()}}class Kn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class iM extends Kn{constructor(t){super(t),t.animationState||(t.animationState=eM(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();bd(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let nM=0;class aM extends Kn{constructor(){super(...arguments),this.id=nM++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const rM={animation:{Feature:iM},exit:{Feature:aM}};function Eo(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}function zo(e){return{point:{x:e.pageX,y:e.pageY}}}const sM=e=>t=>Yh(t)&&e(t,zo(t));function lo(e,t,n,a){return Eo(e,t,sM(n),a)}const Q6=1e-4,oM=1-Q6,lM=1+Q6,J6=.01,cM=0-J6,dM=0+J6;function Dt(e){return e.max-e.min}function uM(e,t,n){return Math.abs(e-t)<=n}function c4(e,t,n,a=.5){e.origin=a,e.originPoint=Xe(t.min,t.max,e.origin),e.scale=Dt(n)/Dt(t),e.translate=Xe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=oM&&e.scale<=lM||isNaN(e.scale))&&(e.scale=1),(e.translate>=cM&&e.translate<=dM||isNaN(e.translate))&&(e.translate=0)}function co(e,t,n,a){c4(e.x,t.x,n.x,a?a.originX:void 0),c4(e.y,t.y,n.y,a?a.originY:void 0)}function d4(e,t,n){e.min=n.min+t.min,e.max=e.min+Dt(t)}function fM(e,t,n){d4(e.x,t.x,n.x),d4(e.y,t.y,n.y)}function u4(e,t,n){e.min=t.min-n.min,e.max=e.min+Dt(t)}function uo(e,t,n){u4(e.x,t.x,n.x),u4(e.y,t.y,n.y)}function yi(e){return[e("x"),e("y")]}const ew=({current:e})=>e?e.ownerDocument.defaultView:null,f4=(e,t)=>Math.abs(e-t);function pM(e,t){const n=f4(e.x,t.x),a=f4(e.y,t.y);return Math.sqrt(n**2+a**2)}class tw{constructor(t,n,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=m0(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,b=pM(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!b)return;const{point:j}=y,{timestamp:L}=gt;this.history.push({...j,timestamp:L});const{onStart:M,onMove:E}=this.handlers;C||(M&&M(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,y)},this.handlePointerMove=(y,C)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=h0(C,this.transformPagePoint),Ne.update(this.updatePoint,!0)},this.handlePointerUp=(y,C)=>{this.end();const{onEnd:b,onSessionEnd:j,resumeAnimation:L}=this.handlers;if(this.dragSnapToOrigin&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=m0(y.type==="pointercancel"?this.lastMoveEventInfo:h0(C,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,M),j&&j(y,M)},!Yh(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=o||window;const u=zo(t),p=h0(u,this.transformPagePoint),{point:m}=p,{timestamp:g}=gt;this.history=[{...m,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,m0(p,this.history)),this.removeListeners=ko(lo(this.contextWindow,"pointermove",this.handlePointerMove),lo(this.contextWindow,"pointerup",this.handlePointerUp),lo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Oi(this.updatePoint)}}function h0(e,t){return t?{point:t(e.point)}:e}function p4(e,t){return{x:e.x-t.x,y:e.y-t.y}}function m0({point:e},t){return{point:e,delta:p4(e,iw(t)),offset:p4(e,hM(t)),velocity:mM(t,.1)}}function hM(e){return e[0]}function iw(e){return e[e.length-1]}function mM(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const o=iw(e);for(;n>=0&&(a=e[n],!(o.timestamp-a.timestamp>Gi(t)));)n--;if(!a)return{x:0,y:0};const l=Yi(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const d={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function gM(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?Xe(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?Xe(n,e,a.max):Math.min(e,n)),e}function h4(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function xM(e,{top:t,left:n,bottom:a,right:o}){return{x:h4(e.x,n,o),y:h4(e.y,t,a)}}function m4(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function vM(e,t){return{x:m4(e.x,t.x),y:m4(e.y,t.y)}}function yM(e,t){let n=.5;const a=Dt(e),o=Dt(t);return o>a?n=Pr(t.min,t.max-a,e.min):a>o&&(n=Pr(e.min,e.max-o,t.min)),Xi(0,1,n)}function wM(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const zp=.35;function bM(e=zp){return e===!1?e=0:e===!0&&(e=zp),{x:g4(e,"left","right"),y:g4(e,"top","bottom")}}function g4(e,t,n){return{min:x4(e,t),max:x4(e,n)}}function x4(e,t){return typeof e=="number"?e:e[t]||0}const SM=new WeakMap;class CM{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=it(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(zo(v).point)},d=(v,y)=>{const{drag:C,dragPropagation:b,onDragStart:j}=this.getProps();if(C&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Cj(C),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yi(M=>{let E=this.getAxisMotionValue(M).get()||0;if(qi.test(E)){const{projection:T}=this.visualElement;if(T&&T.layout){const k=T.layout.layoutBox[M];k&&(E=Dt(k)*(parseFloat(E)/100))}}this.originPoint[M]=E}),j&&Ne.postRender(()=>j(v,y)),Dp(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},u=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y;const{dragPropagation:C,dragDirectionLock:b,onDirectionLock:j,onDrag:L}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:M}=y;if(b&&this.currentDirection===null){this.currentDirection=TM(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",y.point,M),this.updateAxis("y",y.point,M),this.visualElement.render(),L&&L(v,y)},p=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y,this.stop(v,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>yi(v=>{var y;return this.getAnimationState(v)==="paused"&&((y=this.getAxisMotionValue(v).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new tw(t,{onSessionStart:l,onStart:d,onMove:u,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:ew(this.visualElement)})}stop(t,n){const a=t||this.latestPointerEvent,o=n||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!a)return;const{velocity:d}=o;this.startAnimation(d);const{onDragEnd:u}=this.getProps();u&&Ne.postRender(()=>u(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,a){const{drag:o}=this.getProps();if(!a||!sc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let d=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(d=gM(d,this.constraints[t],this.elastic[t])),l.set(d)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Tr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=xM(a.layoutBox,t):this.constraints=!1,this.elastic=bM(n),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&yi(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=wM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Tr(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=AA(a,o.root,this.visualElement.getTransformPagePoint());let d=vM(o.layout.layoutBox,l);if(n){const u=n(TA(d));this.hasMutatedConstraints=!!u,u&&(d=N6(u))}return d}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:d,onDragTransitionEnd:u}=this.getProps(),p=this.constraints||{},m=yi(g=>{if(!sc(g,n,this.currentDirection))return;let v=p&&p[g]||{};d&&(v={min:0,max:0});const y=o?200:1e6,C=o?40:1e7,b={type:"inertia",velocity:a?t[g]:0,bounceStiffness:y,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(g,b)});return Promise.all(m).then(u)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return Dp(this.visualElement,t),a.start(n1(t,a,0,n,this.visualElement,!1))}stopAnimation(){yi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){yi(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[n];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){yi(n=>{const{drag:a}=this.getProps();if(!sc(n,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(n);if(o&&o.layout){const{min:d,max:u}=o.layout.layoutBox[n];l.set(t[n]-Xe(d,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Tr(n)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};yi(d=>{const u=this.getAxisMotionValue(d);if(u&&this.constraints!==!1){const p=u.get();o[d]=yM({min:p,max:p},this.constraints[d])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),yi(d=>{if(!sc(d,t,null))return;const u=this.getAxisMotionValue(d),{min:p,max:m}=this.constraints[d];u.set(Xe(p,m,o[d]))})}addListeners(){if(!this.visualElement.current)return;SM.set(this.visualElement,this);const t=this.visualElement.current,n=lo(t,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Tr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ne.read(a);const d=Eo(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(yi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=p[g].translate,v.set(v.get()+p[g].translate))}),this.visualElement.render())});return()=>{d(),n(),l(),u&&u()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:d=zp,dragMomentum:u=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:d,dragMomentum:u}}}function sc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function TM(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class EM extends Kn{constructor(t){super(t),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new CM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const v4=e=>(t,n)=>{e&&Ne.postRender(()=>e(t,n))};class jM extends Kn{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(t){this.session=new tw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ew(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:v4(t),onStart:v4(n),onMove:a,onEnd:(l,d)=>{delete this.session,o&&Ne.postRender(()=>o(l,d))}}}mount(){this.removePointerDownListener=lo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Dc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function y4(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ks={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ge.test(e))e=parseFloat(e);else return e;const n=y4(e,t.target.x),a=y4(e,t.target.y);return`${n}% ${a}%`}},AM={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,o=Zn.parse(e);if(o.length>5)return a;const l=Zn.createTransformer(e),d=typeof o[0]!="number"?1:0,u=n.x.scale*t.x,p=n.y.scale*t.y;o[0+d]/=u,o[1+d]/=p;const m=Xe(u,p,.5);return typeof o[2+d]=="number"&&(o[2+d]/=m),typeof o[3+d]=="number"&&(o[3+d]/=m),l(o)}};let g0=!1;class MM extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=t;Qj(LM),l&&(n.group&&n.group.add(l),a&&a.register&&o&&a.register(l),g0&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Dc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:o,isPresent:l}=this.props,{projection:d}=a;return d&&(d.isPresent=l,g0=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==l?d.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?d.promote():d.relegate()||Ne.postRender(()=>{const u=d.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Gh.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:o}=t;g0=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function nw(e){const[t,n]=T6(),a=R.useContext(wh);return f.jsx(MM,{...e,layoutGroup:a,switchLayoutGroup:R.useContext(z6),isPresent:t,safeToRemove:n})}const LM={borderRadius:{...Ks,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ks,borderTopRightRadius:Ks,borderBottomLeftRadius:Ks,borderBottomRightRadius:Ks,boxShadow:AM};function OM(e,t,n){const a=Ot(e)?e:Ai(e);return a.start(n1("",a,t,n)),a.animation}const RM=(e,t)=>e.depth-t.depth;class VM{constructor(){this.children=[],this.isDirty=!1}add(t){Sh(this.children,t),this.isDirty=!0}remove(t){Ch(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(RM),this.isDirty=!1,this.children.forEach(t)}}function kM(e,t){const n=_t.now(),a=({timestamp:o})=>{const l=o-n;l>=t&&(Oi(a),e(l-t))};return Ne.setup(a,!0),()=>Oi(a)}const aw=["TopLeft","TopRight","BottomLeft","BottomRight"],DM=aw.length,w4=e=>typeof e=="string"?parseFloat(e):e,b4=e=>typeof e=="number"||ge.test(e);function HM(e,t,n,a,o,l){o?(e.opacity=Xe(0,n.opacity??1,zM(a)),e.opacityExit=Xe(t.opacity??1,0,PM(a))):l&&(e.opacity=Xe(t.opacity??1,n.opacity??1,a));for(let d=0;d<DM;d++){const u=`border${aw[d]}Radius`;let p=S4(t,u),m=S4(n,u);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||b4(p)===b4(m)?(e[u]=Math.max(Xe(w4(p),w4(m),a),0),(qi.test(m)||qi.test(p))&&(e[u]+="%")):e[u]=m}(t.rotate||n.rotate)&&(e.rotate=Xe(t.rotate||0,n.rotate||0,a))}function S4(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const zM=rw(0,.5,Ic),PM=rw(.5,.95,Gt);function rw(e,t,n){return a=>a<e?0:a>t?1:n(Pr(e,t,a))}function C4(e,t){e.min=t.min,e.max=t.max}function vi(e,t){C4(e.x,t.x),C4(e.y,t.y)}function T4(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function E4(e,t,n,a,o){return e-=t,e=qc(e,1/n,a),o!==void 0&&(e=qc(e,1/o,a)),e}function NM(e,t=0,n=1,a=.5,o,l=e,d=e){if(qi.test(t)&&(t=parseFloat(t),t=Xe(d.min,d.max,t/100)-d.min),typeof t!="number")return;let u=Xe(l.min,l.max,a);e===l&&(u-=t),e.min=E4(e.min,t,n,u,o),e.max=E4(e.max,t,n,u,o)}function j4(e,t,[n,a,o],l,d){NM(e,t[n],t[a],t[o],t.scale,l,d)}const $M=["x","scaleX","originX"],BM=["y","scaleY","originY"];function A4(e,t,n,a){j4(e.x,t,$M,n?n.x:void 0,a?a.x:void 0),j4(e.y,t,BM,n?n.y:void 0,a?a.y:void 0)}function M4(e){return e.translate===0&&e.scale===1}function sw(e){return M4(e.x)&&M4(e.y)}function L4(e,t){return e.min===t.min&&e.max===t.max}function IM(e,t){return L4(e.x,t.x)&&L4(e.y,t.y)}function O4(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ow(e,t){return O4(e.x,t.x)&&O4(e.y,t.y)}function R4(e){return Dt(e.x)/Dt(e.y)}function V4(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class UM{constructor(){this.members=[]}add(t){Sh(this.members,t),t.scheduleRender()}remove(t){if(Ch(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let a;for(let o=n;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _M(e,t,n){let a="";const o=e.x.translate/t.x,l=e.y.translate/t.y,d=(n==null?void 0:n.z)||0;if((o||l||d)&&(a=`translate3d(${o}px, ${l}px, ${d}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:m,rotate:g,rotateX:v,rotateY:y,skewX:C,skewY:b}=n;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),v&&(a+=`rotateX(${v}deg) `),y&&(a+=`rotateY(${y}deg) `),C&&(a+=`skewX(${C}deg) `),b&&(a+=`skewY(${b}deg) `)}const u=e.x.scale*t.x,p=e.y.scale*t.y;return(u!==1||p!==1)&&(a+=`scale(${u}, ${p})`),a||"none"}const x0=["","X","Y","Z"],GM=1e3;let YM=0;function v0(e,t,n,a){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function lw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=q6(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ne,!(o||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&lw(a)}function cw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(d={},u=t==null?void 0:t()){this.id=YM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(XM),this.nodes.forEach(QM),this.nodes.forEach(JM),this.nodes.forEach(ZM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new VM)}addEventListener(d,u){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Eh),this.eventHandlers.get(d).add(u)}notifyListeners(d,...u){const p=this.eventHandlers.get(d);p&&p.notify(...u)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=qh(d)&&!Nj(d),this.instance=d;const{layoutId:u,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||u)&&(this.isLayoutDirty=!0),e){let g,v=0;const y=()=>this.root.updateBlockedByResize=!1;Ne.read(()=>{v=window.innerWidth}),e(d,()=>{const C=window.innerWidth;C!==v&&(v=C,this.root.updateBlockedByResize=!0,g&&g(),g=kM(y,250),Dc.hasAnimatedSinceResize&&(Dc.hasAnimatedSinceResize=!1,this.nodes.forEach(H4)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&m&&(u||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:y,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||m.getDefaultTransition()||aL,{onLayoutAnimationStart:j,onLayoutAnimationComplete:L}=m.getProps(),M=!this.targetLayout||!ow(this.targetLayout,C),E=!v&&y;if(this.options.layoutRoot||this.resumeFrom||E||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...Ih(b,"layout"),onPlay:j,onComplete:L};(m.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(g,E)}else v||H4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Oi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(eL),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:p}=this.options;if(u===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(k4);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(D4);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(KM),this.nodes.forEach(qM),this.nodes.forEach(FM)):this.nodes.forEach(D4),this.clearAllSnapshots();const u=_t.now();gt.delta=Xi(0,1e3/60,u-gt.timestamp),gt.timestamp=u,gt.isProcessing=!0,s0.update.process(gt),s0.preRender.process(gt),s0.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Gh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(WM),this.sharedNodes.forEach(tL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Dt(this.snapshot.measuredBox.x)&&!Dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=it(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(u=!1),u&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!sw(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;d&&this.instance&&(u||va(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const u=this.measurePageBox();let p=this.removeElementScroll(u);return d&&(p=this.removeTransform(p)),rL(p),{animationId:this.root.animationId,measuredBox:u,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:d}=this.options;if(!d)return it();const u=d.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(sL))){const{scroll:g}=this.root;g&&(Er(u.x,g.offset.x),Er(u.y,g.offset.y))}return u}removeElementScroll(d){var p;const u=it();if(vi(u,d),(p=this.scroll)!=null&&p.wasRoot)return u;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:v,options:y}=g;g!==this.root&&v&&y.layoutScroll&&(v.wasRoot&&vi(u,d),Er(u.x,v.offset.x),Er(u.y,v.offset.y))}return u}applyTransform(d,u=!1){const p=it();vi(p,d);for(let m=0;m<this.path.length;m++){const g=this.path[m];!u&&g.options.layoutScroll&&g.scroll&&g!==g.root&&jr(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),va(g.latestValues)&&jr(p,g.latestValues)}return va(this.latestValues)&&jr(p,this.latestValues),p}removeTransform(d){const u=it();vi(u,d);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!va(m.latestValues))continue;Op(m.latestValues)&&m.updateSnapshot();const g=it(),v=m.measurePageBox();vi(g,v),A4(u,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return va(this.latestValues)&&A4(u,this.latestValues),u}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var y;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==u;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=gt.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=it(),this.relativeTargetOrigin=it(),uo(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=it(),this.targetWithTransforms=it()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vi(this.target,this.layout.layoutBox),B6(this.target,this.targetDelta)):vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=it(),this.relativeTargetOrigin=it(),uo(this.relativeTargetOrigin,this.target,C.target),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Op(this.parent.latestValues)||$6(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const d=this.getLead(),u=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(p=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;vi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;jA(this.layoutCorrected,this.treeScale,this.path,u),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=it());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(T4(this.prevProjectionDelta.x,this.projectionDelta.x),T4(this.prevProjectionDelta.y,this.projectionDelta.y)),co(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!V4(this.projectionDelta.x,this.prevProjectionDelta.x)||!V4(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ar(),this.projectionDelta=Ar(),this.projectionDeltaWithTransform=Ar()}setAnimationOrigin(d,u=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},v=Ar();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=it(),C=p?p.source:void 0,b=this.layout?this.layout.source:void 0,j=C!==b,L=this.getStack(),M=!L||L.members.length<=1,E=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(nL));this.animationProgress=0;let T;this.mixTargetDelta=k=>{const O=k/1e3;z4(v.x,d.x,O),z4(v.y,d.y,O),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uo(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iL(this.relativeTarget,this.relativeTargetOrigin,y,O),T&&IM(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=it()),vi(T,this.relativeTarget)),j&&(this.animationValues=g,HM(g,m,this.latestValues,O,E,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var u,p,m;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(m=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Oi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ne.update(()=>{Dc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ai(0)),this.currentAnimation=OM(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(GM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:u,target:p,layout:m,latestValues:g}=d;if(!(!u||!p||!m)){if(this!==d&&this.layout&&m&&dw(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||it();const v=Dt(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+v;const y=Dt(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+y}vi(u,p),jr(u,g),co(this.projectionDeltaWithTransform,this.layoutCorrected,u,g)}}registerSharedNode(d,u){this.sharedNodes.has(d)||this.sharedNodes.set(d,new UM),this.sharedNodes.get(d).add(u);const m=u.options.initialPromotionConfig;u.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(u):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var u;const{layoutId:d}=this.options;return d?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:d}=this.options;return d?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:u,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let u=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(u=!0),!u)return;const m={};p.z&&v0("z",d,m,this.animationValues);for(let g=0;g<x0.length;g++)v0(`rotate${x0[g]}`,d,m,this.animationValues),v0(`skew${x0[g]}`,d,m,this.animationValues);d.render();for(const g in m)d.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);d.scheduleRender()}applyProjectionStyles(d,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=kc(u==null?void 0:u.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=kc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let v=_M(this.projectionDeltaWithTransform,this.treeScale,g);p&&(v=p(g,v)),d.transform=v;const{x:y,y:C}=this.projectionDelta;d.transformOrigin=`${y.origin*100}% ${C.origin*100}% 0`,m.animationValues?d.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in To){if(g[b]===void 0)continue;const{correct:j,applyTo:L,isCSSVariable:M}=To[b],E=v==="none"?g[b]:j(g[b],m);if(L){const T=L.length;for(let k=0;k<T;k++)d[L[k]]=E}else M?this.options.visualElement.renderState.vars[b]=E:d[b]=E}this.options.layoutId&&(d.pointerEvents=m===this?kc(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var u;return(u=d.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(k4),this.root.sharedNodes.clear()}}}function qM(e){e.updateLayout()}function FM(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:l}=e.options,d=t.source!==e.layout.source;l==="size"?yi(v=>{const y=d?t.measuredBox[v]:t.layoutBox[v],C=Dt(y);y.min=a[v].min,y.max=y.min+C}):dw(l,t.layoutBox,a)&&yi(v=>{const y=d?t.measuredBox[v]:t.layoutBox[v],C=Dt(a[v]);y.max=y.min+C,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+C)});const u=Ar();co(u,a,t.layoutBox);const p=Ar();d?co(p,e.applyTransform(o,!0),t.measuredBox):co(p,a,t.layoutBox);const m=!sw(u);let g=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:C}=v;if(y&&C){const b=it();uo(b,t.layoutBox,y.layoutBox);const j=it();uo(j,a,C.layoutBox),ow(b,j)||(g=!0),v.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=b,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:p,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function XM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ZM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function WM(e){e.clearSnapshot()}function k4(e){e.clearMeasurements()}function D4(e){e.isLayoutDirty=!1}function KM(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function H4(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function QM(e){e.resolveTargetDelta()}function JM(e){e.calcProjection()}function eL(e){e.resetSkewAndRotation()}function tL(e){e.removeLeadSnapshot()}function z4(e,t,n){e.translate=Xe(t.translate,0,n),e.scale=Xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function P4(e,t,n,a){e.min=Xe(t.min,n.min,a),e.max=Xe(t.max,n.max,a)}function iL(e,t,n,a){P4(e.x,t.x,n.x,a),P4(e.y,t.y,n.y,a)}function nL(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const aL={duration:.45,ease:[.4,0,.1,1]},N4=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),$4=N4("applewebkit/")&&!N4("chrome/")?Math.round:Gt;function B4(e){e.min=$4(e.min),e.max=$4(e.max)}function rL(e){B4(e.x),B4(e.y)}function dw(e,t,n){return e==="position"||e==="preserve-aspect"&&!uM(R4(t),R4(n),.2)}function sL(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const oL=cw({attachResizeListener:(e,t)=>Eo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),y0={current:void 0},uw=cw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!y0.current){const e=new oL({});e.mount(window),e.setOptions({layoutScroll:!0}),y0.current=e}return y0.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),lL={pan:{Feature:jM},drag:{Feature:EM,ProjectionNode:uw,MeasureLayout:nw}};function I4(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,l=a[o];l&&Ne.postRender(()=>l(t,zo(t)))}class cL extends Kn{mount(){const{current:t}=this.node;t&&(this.unmount=Tj(t,(n,a)=>(I4(this.node,a,"Start"),o=>I4(this.node,o,"End"))))}unmount(){}}class dL extends Kn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ko(Eo(this.node.current,"focus",()=>this.onFocus()),Eo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function U4(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),l=a[o];l&&Ne.postRender(()=>l(t,zo(t)))}class uL extends Kn{mount(){const{current:t}=this.node;t&&(this.unmount=Mj(t,(n,a)=>(U4(this.node,a,"Start"),(o,{success:l})=>U4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Pp=new WeakMap,w0=new WeakMap,fL=e=>{const t=Pp.get(e.target);t&&t(e)},pL=e=>{e.forEach(fL)};function hL({root:e,...t}){const n=e||document;w0.has(n)||w0.set(n,{});const a=w0.get(n),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(pL,{root:e,...t})),a[o]}function mL(e,t,n){const a=hL(t);return Pp.set(e,n),a.observe(e),()=>{Pp.delete(e),a.unobserve(e)}}const gL={some:0,all:1};class xL extends Kn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:o="some",once:l}=t,d={root:n?n.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:gL[o]},u=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),y=m?g:v;y&&y(p)};return mL(this.node.current,d,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(vL(t,n))&&this.startObserver()}unmount(){}}function vL({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const yL={inView:{Feature:xL},tap:{Feature:uL},focus:{Feature:dL},hover:{Feature:cL}},wL={layout:{ProjectionNode:uw,MeasureLayout:nw}},bL={...rM,...yL,...lL,...wL},H=CA(bL,zA),SL=50,_4=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),CL=()=>({time:0,x:_4(),y:_4()}),TL={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function G4(e,t,n,a){const o=n[t],{length:l,position:d}=TL[t],u=o.current,p=n.time;o.current=e[`scroll${d}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Pr(0,o.scrollLength,o.current);const m=a-p;o.velocity=m>SL?0:jh(o.current-u,m)}function EL(e,t,n){G4(e,"x",t,n),G4(e,"y",t,n),t.time=n}function jL(e,t){const n={x:0,y:0};let a=e;for(;a&&a!==t;)if(_h(a))n.x+=a.offsetLeft,n.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();n.x+=o.left-l.left,n.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();n.x+=o,n.y+=l;let d=null,u=a.parentNode;for(;!d;)u.tagName==="svg"&&(d=u),u=a.parentNode;a=d}else break;return n}const Np={start:0,center:.5,end:1};function Y4(e,t,n=0){let a=0;if(e in Np&&(e=Np[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),n+a}const AL=[0,0];function ML(e,t,n,a){let o=Array.isArray(e)?e:AL,l=0,d=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Np[e]?e:"0"]),l=Y4(o[0],n,a),d=Y4(o[1],t),l-d}const LL={All:[[0,0],[1,1]]},OL={x:0,y:0};function RL(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function VL(e,t,n){const{offset:a=LL.All}=n,{target:o=e,axis:l="y"}=n,d=l==="y"?"height":"width",u=o!==e?jL(o,e):OL,p=o===e?{width:e.scrollWidth,height:e.scrollHeight}:RL(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const v=a.length;for(let y=0;y<v;y++){const C=ML(a[y],m[d],p[d],u[l]);!g&&C!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=C}g&&(t[l].interpolate=zh(t[l].offset,i6(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=Xi(0,1,t[l].interpolate(t[l].current))}function kL(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)n.x.targetOffset+=a.offsetLeft,n.y.targetOffset+=a.offsetTop,a=a.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function DL(e,t,n,a={}){return{measure:o=>{kL(e,a.target,n),EL(e,n,o),(a.offset||a.target)&&VL(e,n,a)},notify:()=>t(n)}}const Qs=new WeakMap,q4=new WeakMap,b0=new WeakMap,F4=e=>e===document.scrollingElement?window:e;function fw(e,{container:t=document.scrollingElement,...n}={}){if(!t)return Gt;let a=b0.get(t);a||(a=new Set,b0.set(t,a));const o=CL(),l=DL(t,e,o,n);if(a.add(l),!Qs.has(t)){const u=()=>{for(const v of a)v.measure(gt.timestamp);Ne.preUpdate(p)},p=()=>{for(const v of a)v.notify()},m=()=>Ne.read(u);Qs.set(t,m);const g=F4(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&q4.set(t,Pj(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const d=Qs.get(t);return Ne.read(d,!1,!0),()=>{var m;Oi(d);const u=b0.get(t);if(!u||(u.delete(l),u.size))return;const p=Qs.get(t);Qs.delete(t),p&&(F4(t).removeEventListener("scroll",p),(m=q4.get(t))==null||m(),window.removeEventListener("resize",p))}}const X4=new Map;function HL(e){const t={value:0},n=fw(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:n}}function pw({source:e,container:t,...n}){const{axis:a}=n;e&&(t=e);const o=X4.get(t)??new Map;X4.set(t,o);const l=n.target??"self",d=o.get(l)??{},u=a+(n.offset??[]).join(",");return d[u]||(d[u]=!n.target&&s6()?new ScrollTimeline({source:t,axis:a}):HL({container:t,...n})),d[u]}function zL(e,t){const n=pw(t);return e.attachTimeline({timeline:t.target?void 0:n,observe:a=>(a.pause(),C6(o=>{a.time=a.duration*o},n))})}function PL(e){return e.length===2}function NL(e,t){return PL(e)?fw(n=>{e(n[t.axis].progress,n)},t):C6(e,pw(t))}function $L(e,{axis:t="y",container:n=document.scrollingElement,...a}={}){if(!n)return Gt;const o={axis:t,container:n,...a};return typeof e=="function"?NL(e,o):zL(e,o)}const BL=()=>({scrollX:Ai(0),scrollY:Ai(0),scrollXProgress:Ai(0),scrollYProgress:Ai(0)}),oc=e=>e?!e.current:!1;function vn({container:e,target:t,...n}={}){const a=La(BL),o=R.useRef(null),l=R.useRef(!1),d=R.useCallback(()=>(o.current=$L((u,{x:p,y:m})=>{a.scrollX.set(p.current),a.scrollXProgress.set(p.progress),a.scrollY.set(m.current),a.scrollYProgress.set(m.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var u;(u=o.current)==null||u.call(o)}),[e,t,JSON.stringify(n.offset)]);return Vo(()=>{if(l.current=!1,oc(e)||oc(t)){l.current=!0;return}else return d()},[d]),R.useEffect(()=>{if(l.current)return wo(!oc(e)),wo(!oc(t)),d()},[d]),a}function IL(e){const t=La(()=>Ai(e)),{isStatic:n}=R.useContext(yd);if(n){const[,a]=R.useState(e);R.useEffect(()=>t.on("change",a),[])}return t}function hw(e,t){const n=IL(t()),a=()=>n.set(t());return a(),Vo(()=>{const o=()=>Ne.preRender(a,!1,!0),l=e.map(d=>d.on("change",o));return()=>{l.forEach(d=>d()),Oi(a)}}),n}function UL(e){oo.current=[],e();const t=hw(oo.current,e);return oo.current=void 0,t}function Ze(e,t,n,a){if(typeof e=="function")return UL(e);const o=typeof t=="function"?t:$j(t,n,a);return Array.isArray(e)?Z4(e,o):Z4([e],([l])=>o(l))}function Z4(e,t){const n=La(()=>[]);return hw(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return t(n)})}function _L(e){e.values.forEach(t=>t.stop())}function $p(e,t){[...t].reverse().forEach(a=>{const o=e.getVariant(a);o&&i1(e,o),e.variantChildren&&e.variantChildren.forEach(l=>{$p(l,t)})})}function GL(e,t){if(Array.isArray(t))return $p(e,t);if(typeof t=="string")return $p(e,[t]);i1(e,t)}function YL(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,a){const o=[];return e.forEach(l=>{o.push(Z6(l,n,{transitionOverride:a}))}),Promise.all(o)},set(n){return e.forEach(a=>{GL(a,n)})},stop(){e.forEach(n=>{_L(n)})},mount(){return()=>{t.stop()}}};return t}function qL(){const e=La(YL);return Vo(e.mount,[]),e}const FL=qL,XL=w.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,ZL=w.button`
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
`,S0=w(H.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,WL=w(H.div)`
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
`,KL=w(Tt)`
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
`,QL=w.p`
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
`;w(H.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;w.div`
  padding: 10px 0;
`;const JL=w.img`
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

  ${JL} {
    padding: 8px;
    margin-right: -8px;
  }
`;const eO=w.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,tO=(e,t,n,a)=>{var l,d,u,p;const o=[n,{code:t,...a||{}}];if((d=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&d.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);ja(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(u=e==null?void 0:e.services)==null?void 0:u.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},W4={},Bp=(e,t,n,a)=>{ja(n)&&W4[n]||(ja(n)&&(W4[n]=new Date),tO(e,t,n,a))},mw=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Ip=(e,t,n)=>{e.loadNamespaces(t,mw(e,n))},K4=(e,t,n,a)=>{if(ja(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Ip(e,n,a);n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,mw(e,a))},iO=(e,t,n={})=>!t.languages||!t.languages.length?(Bp(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),ja=e=>typeof e=="string",nO=e=>typeof e=="object"&&e!==null,aO=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,rO={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},sO=e=>rO[e],oO=e=>e.replace(aO,sO);let Up={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:oO};const lO=(e={})=>{Up={...Up,...e}},cO=()=>Up;let gw;const dO=e=>{gw=e},uO=()=>gw,fO={type:"3rdParty",init(e){lO(e.options.react),dO(e)}},pO=R.createContext();class hO{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const mO=(e,t)=>{const n=R.useRef();return R.useEffect(()=>{n.current=e},[e,t]),n.current},xw=(e,t,n,a)=>e.getFixedT(t,n,a),gO=(e,t,n,a)=>R.useCallback(xw(e,t,n,a),[e,t,n,a]),a1=(e,t={})=>{var k,O,N,P;const{i18n:n}=t,{i18n:a,defaultNS:o}=R.useContext(pO)||{},l=n||a||uO();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new hO),!l){Bp(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const _=(F,K)=>ja(K)?K:nO(K)&&ja(K.defaultValue)?K.defaultValue:Array.isArray(F)?F[F.length-1]:F,q=[_,{},!1];return q.t=_,q.i18n={},q.ready=!1,q}(k=l.options.react)!=null&&k.wait&&Bp(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const d={...cO(),...l.options.react,...t},{useSuspense:u,keyPrefix:p}=d;let m=o||((O=l.options)==null?void 0:O.defaultNS);m=ja(m)?[m]:m||["translation"],(P=(N=l.reportNamespaces).addUsedNamespaces)==null||P.call(N,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(_=>iO(_,l,d)),v=gO(l,t.lng||null,d.nsMode==="fallback"?m:m[0],p),y=()=>v,C=()=>xw(l,t.lng||null,d.nsMode==="fallback"?m:m[0],p),[b,j]=R.useState(y);let L=m.join();t.lng&&(L=`${t.lng}${L}`);const M=mO(L),E=R.useRef(!0);R.useEffect(()=>{const{bindI18n:_,bindI18nStore:q}=d;E.current=!0,!g&&!u&&(t.lng?K4(l,t.lng,m,()=>{E.current&&j(C)}):Ip(l,m,()=>{E.current&&j(C)})),g&&M&&M!==L&&E.current&&j(C);const F=()=>{E.current&&j(C)};return _&&(l==null||l.on(_,F)),q&&(l==null||l.store.on(q,F)),()=>{E.current=!1,l&&_&&(_==null||_.split(" ").forEach(K=>l.off(K,F))),q&&l&&q.split(" ").forEach(K=>l.store.off(K,F))}},[l,L]),R.useEffect(()=>{E.current&&g&&j(y)},[l,p,g]);const T=[b,l,g];if(T.t=b,T.i18n=l,T.ready=g,g||!g&&!u)return T;throw new Promise(_=>{t.lng?K4(l,t.lng,m,()=>_()):Ip(l,m,()=>_())})},xO=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,Q4=w.div`
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
`,vO=w.div`
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
`,yO=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,wO=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,bO=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,SO=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,CO={open:{rotate:45,y:8},closed:{rotate:0,y:0}},TO={open:{opacity:0},closed:{opacity:1}},EO={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},jO={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},AO=({isOpen:e,setIsOpen:t})=>{const[,n]=R.useState(!1),{t:a}=a1(),o=Si(),l=["/contact","/service","/tips","/pricing","/fridge"].some(m=>o.pathname.startsWith(m));R.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const d=()=>{t(!1),n(!1)},u=m=>{const g=o.pathname;return m==="/home#hero"?g==="/"||g==="/home":g.startsWith(m.split("#")[0])},p=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return f.jsxs(XL,{children:[f.jsxs(ZL,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[f.jsx(S0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:CO}),f.jsx(S0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:TO}),f.jsx(S0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:EO})]}),f.jsx(Fh,{children:e&&f.jsxs(WL,{initial:"closed",animate:"open",exit:"closed",variants:jO,transition:{duration:.3},children:[p.map((m,g)=>{const v=u(m.to);return f.jsxs("div",{children:[f.jsx(KL,{to:m.to,onClick:d,children:f.jsx(QL,{$active:v,children:a(m.label)})}),f.jsx(eO,{})]},g)}),f.jsxs(xO,{children:[f.jsxs(Q4,{children:[f.jsx(Gn,{children:"Washing Machine Fix"}),f.jsx(Gn,{children:"Dishwasher Repair"}),f.jsx(Gn,{children:"Oven Maintenance"}),f.jsx(Gn,{children:"Dryer Troubleshooting"})]}),f.jsxs(Q4,{children:[f.jsx(Gn,{children:"Microwave Service"}),f.jsx(Gn,{children:"Air Conditioner Repair"}),f.jsx(Gn,{children:"Coffee Maker Repair"}),f.jsx(Gn,{children:"Blender Maintenance"})]})]}),f.jsxs(vO,{children:[f.jsx(yO,{}),f.jsxs(wO,{children:[f.jsx(bO,{children:"Designed by TRBN"}),f.jsx(SO,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},MO="/assets/LogoandTextContainer-CnBPFIWK.svg",LO=w.div`
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
`,OO=w.img`
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
`,RO=w.div`
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
`,VO=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kO=w.p`
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
`,DO=w.p`
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
`,HO=w.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,vw=w(Tt)`
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
`;Je`
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
`;const J4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",zO=()=>{const[e,t]=R.useState(!1),[n]=R.useState(!1),[a,o]=R.useState(!1),l=Si(),d=["/contact","/service","/tips","/pricing","/fridge"].some(C=>l.pathname.startsWith(C)),u=n||a,p=rh(),m=C=>{C.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&p("/home")};R.useEffect(()=>{const C=new IntersectionObserver(([j])=>{t(!j.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),C.observe(b),()=>{C.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const g=He({query:"(max-width: 1439px)"}),v=He({query:"(min-width: 768px) and (max-width: 1439px)"}),y=He({query:"(min-width: 1440px)"});return f.jsxs(cT,{$isScrolled:e,$darkMode:d,children:[f.jsxs(dT,{id:"header",children:[f.jsx(uT,{to:"/home#hero",onClick:m,$overlayOpen:u,$darkMode:d,children:f.jsx("img",{src:MO,alt:"Logo"})}),!g&&f.jsxs(fT,{children:[f.jsx(Zs,{children:f.jsx(Ws,{to:"/home#hero",$overlayOpen:u,$darkMode:d,children:"Home"})}),f.jsx(Zs,{children:f.jsx(Ws,{to:"/service#all",$overlayOpen:u,$darkMode:d,children:"Services"})}),f.jsx(Zs,{children:f.jsx(Ws,{to:"/about#ap",$overlayOpen:u,$darkMode:d,children:"About Us"})}),f.jsx(Zs,{children:f.jsx(Ws,{to:"/tips#app",$overlayOpen:u,$darkMode:d,children:"Tips"})}),f.jsx(Zs,{children:f.jsx(Ws,{to:"/contact#ap",$overlayOpen:u,$darkMode:d,children:"Contact"})})]}),y&&f.jsxs(T3,{children:[f.jsxs(tc,{children:[f.jsx(_n,{$overlayOpen:u,$darkMode:d,children:f.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),f.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),f.jsxs(tc,{children:[f.jsxs(_n,{$overlayOpen:u,$darkMode:d,children:[f.jsx("img",{src:J4,alt:"🗺️"}),f.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),f.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"& Nearby Cities"})]})]}),f.jsx(pT,{children:f.jsxs("div",{style:{display:"flex"},children:[f.jsx(vw,{to:"/contact#ap",children:"Contact Us"}),f.jsx(R5,{$overlayOpen:u,$darkMode:d,children:f.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),g&&f.jsx(AO,{isOpen:a,setIsOpen:o})]})})]}),v&&f.jsxs(T3,{children:[f.jsxs(tc,{children:[f.jsx(_n,{$overlayOpen:u,$darkMode:d,children:f.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),f.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),f.jsxs(tc,{children:[f.jsxs(_n,{$overlayOpen:u,$darkMode:d,children:[f.jsx("img",{src:J4,alt:"🗺️"}),f.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),f.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"& Nearby Cities"})]})]})]})},PO=w.footer`
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
`,NO=w.div`
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
`,$O=w.div`
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
`,Js=w(Tt)`
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
`,C0=w.p`
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
`,BO=w.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,IO=w.p`
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
`,UO=w.div`
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
`,_O=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GO=w.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YO=w.svg`
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
`;w(Tt)`
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
`;w(Tt)`
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
`;const qO=w.div`
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
`,FO=w.div`
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
`,XO=w.p`
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
`,ZO=w.p`
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
`,yw=w.div`
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
`,ww=w.div`
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
`,bw=w.button`
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
`,WO=w.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,KO=w.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,Sw=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return f.jsxs("div",{children:[f.jsx(KO,{children:f.jsx(WO,{children:"Privacy and terms"})}),f.jsx(qO,{children:e.map((t,n)=>f.jsxs(FO,{children:[f.jsx(XO,{children:t.title}),f.jsx(ZO,{children:t.content})]},n))})]})},QO=()=>{const[e,t]=R.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return f.jsxs(f.Fragment,{children:[f.jsx(PO,{children:f.jsxs(NO,{children:[f.jsxs($O,{children:[f.jsxs(IO,{children:[f.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",f.jsx("br",{}),f.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),f.jsx("br",{})," ",f.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),f.jsxs(UO,{children:[f.jsx(Js,{to:"/home#hero",children:"Home"}),f.jsx(Js,{to:"/service#all",children:"Services"}),f.jsx(Js,{to:"/about#ap",children:"About Us"}),f.jsx(Js,{to:"/tips#app",children:"Tips"}),f.jsx(Js,{to:"/contact#ap",children:"Contacts"}),f.jsx(C0,{onClick:n,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),f.jsxs(_O,{children:[f.jsxs(YO,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),f.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),f.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),f.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),f.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),f.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),f.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),f.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),f.jsx(GO,{opacity:.5}),f.jsxs(BO,{children:[f.jsx(C0,{size:"14px",weight:"500",children:"Designed by TRBN"}),f.jsx(C0,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&f.jsx(yw,{onClick:a,children:f.jsxs(ww,{onClick:o=>o.stopPropagation(),children:[f.jsx(bw,{onClick:a,children:"×"}),f.jsx(Sw,{})]})})]})},JO="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",eR="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",tR=Je`
  from { opacity: 0; }
  to { opacity: 1; }
`,iR=Je`
  from { opacity: 1; }
  to { opacity: 0; }
`,nR=Je`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,aR=w.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:e})=>e&&Xt`
      animation: ${iR} 1s forwards;
    `}
`,rR=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:e})=>e&&Xt`
      animation: ${tR} 1.5s forwards;
    `}
`,sR=w.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:e})=>e&&Xt`
      animation: ${nR} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,oR=({onComplete:e})=>{const[t,n]=R.useState(!0),[a,o]=R.useState(!1),[l,d]=R.useState(!1),u=R.useRef(null);return R.useEffect(()=>{u.current&&(u.current.onended=()=>{n(!1),o(!0),setTimeout(()=>{d(!0),setTimeout(e,1e3)},3e3)})},[e]),f.jsxs(aR,{$hide:l,children:[t&&f.jsx(rR,{ref:u,$visible:t,autoPlay:!0,muted:!0,playsInline:!0,children:f.jsx("source",{src:eR,type:"video/mp4"})}),a&&f.jsx(sR,{src:JO,alt:"Logo",$show:a})]})},lR=()=>{const e=Si(),[t,n]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||n(!0)},[]);const a=()=>{sessionStorage.setItem("hasSeenPreloader","true"),n(!1)};return R.useEffect(()=>{if(e.hash){const o=e.hash.replace("#",""),l=document.getElementById(o);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),t?f.jsx(oR,{onComplete:a}):f.jsxs(f.Fragment,{children:[f.jsx(zO,{}),f.jsx(R.Suspense,{children:f.jsx(R9,{})}),f.jsx(QO,{})]})};function ev(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function r1(e,t){e===void 0&&(e={}),t===void 0&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:ev(t[a])&&ev(e[a])&&Object.keys(t[a]).length>0&&r1(e[a],t[a])})}const Cw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Fi(){const e=typeof document<"u"?document:{};return r1(e,Cw),e}const cR={document:Cw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ht(){const e=typeof window<"u"?window:{};return r1(e,cR),e}function dR(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function uR(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Tw(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Fc(){return Date.now()}function fR(e){const t=Ht();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function pR(e,t){t===void 0&&(t="x");const n=Ht();let a,o,l;const d=fR(e);return n.WebKitCSSMatrix?(o=d.transform||d.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(u=>u.replace(",",".")).join(", ")),l=new n.WebKitCSSMatrix(o==="none"?"":o)):(l=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=l.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=l.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(n.WebKitCSSMatrix?o=l.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function lc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function hR(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ri(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const a=n<0||arguments.length<=n?void 0:arguments[n];if(a!=null&&!hR(a)){const o=Object.keys(Object(a)).filter(l=>t.indexOf(l)<0);for(let l=0,d=o.length;l<d;l+=1){const u=o[l],p=Object.getOwnPropertyDescriptor(a,u);p!==void 0&&p.enumerable&&(lc(e[u])&&lc(a[u])?a[u].__swiper__?e[u]=a[u]:ri(e[u],a[u]):!lc(e[u])&&lc(a[u])?(e[u]={},a[u].__swiper__?e[u]=a[u]:ri(e[u],a[u])):e[u]=a[u])}}}return e}function cc(e,t,n){e.style.setProperty(t,n)}function Ew(e){let{swiper:t,targetPosition:n,side:a}=e;const o=Ht(),l=-t.translate;let d=null,u;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const m=n>l?"next":"prev",g=(y,C)=>m==="next"&&y>=C||m==="prev"&&y<=C,v=()=>{u=new Date().getTime(),d===null&&(d=u);const y=Math.max(Math.min((u-d)/p,1),0),C=.5-Math.cos(y*Math.PI)/2;let b=l+C*(n-l);if(g(b,n)&&(b=n),t.wrapperEl.scrollTo({[a]:b}),g(b,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:b})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(v)};v()}function Ii(e,t){t===void 0&&(t="");const n=Ht(),a=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function mR(e,t){const n=[t];for(;n.length>0;){const a=n.shift();if(e===a)return!0;n.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function gR(e,t){const n=Ht();let a=t.contains(e);return!a&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=mR(e,t))),a}function Xc(e){try{console.warn(e);return}catch{}}function Zc(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:dR(t)),n}function xR(e,t){const n=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function vR(e,t){const n=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function Xn(e,t){return Ht().getComputedStyle(e,null).getPropertyValue(t)}function Wc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function jw(e,t){const n=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&n.push(a):n.push(a),a=a.parentElement;return n}function _p(e,t,n){const a=Ht();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function xt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Kc(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Aw(e,t,n,a){return e.params.createElements&&Object.keys(a).forEach(o=>{if(!n[o]&&n.auto===!0){let l=Ii(e.el,`.${a[o]}`)[0];l||(l=Zc("div",a[o]),l.className=a[o],e.el.append(l)),n[o]=l,t[o]=l}}),n}function s1(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function l(b){let j;return b&&typeof b=="string"&&t.isElement&&(j=t.el.querySelector(b)||t.hostEl.querySelector(b),j)?j:(b&&(typeof b=="string"&&(j=[...document.querySelectorAll(b)]),t.params.uniqueNavElements&&typeof b=="string"&&j&&j.length>1&&t.el.querySelectorAll(b).length===1?j=t.el.querySelector(b):j&&j.length===1&&(j=j[0])),b&&!j?b:j)}function d(b,j){const L=t.params.navigation;b=xt(b),b.forEach(M=>{M&&(M.classList[j?"add":"remove"](...L.disabledClass.split(" ")),M.tagName==="BUTTON"&&(M.disabled=j),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](L.lockClass))})}function u(){const{nextEl:b,prevEl:j}=t.navigation;if(t.params.loop){d(j,!1),d(b,!1);return}d(j,t.isBeginning&&!t.params.rewind),d(b,t.isEnd&&!t.params.rewind)}function p(b){b.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function m(b){b.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function g(){const b=t.params.navigation;if(t.params.navigation=Aw(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let j=l(b.nextEl),L=l(b.prevEl);Object.assign(t.navigation,{nextEl:j,prevEl:L}),j=xt(j),L=xt(L);const M=(E,T)=>{E&&E.addEventListener("click",T==="next"?m:p),!t.enabled&&E&&E.classList.add(...b.lockClass.split(" "))};j.forEach(E=>M(E,"next")),L.forEach(E=>M(E,"prev"))}function v(){let{nextEl:b,prevEl:j}=t.navigation;b=xt(b),j=xt(j);const L=(M,E)=>{M.removeEventListener("click",E==="next"?m:p),M.classList.remove(...t.params.navigation.disabledClass.split(" "))};b.forEach(M=>L(M,"next")),j.forEach(M=>L(M,"prev"))}a("init",()=>{t.params.navigation.enabled===!1?C():(g(),u())}),a("toEdge fromEdge lock unlock",()=>{u()}),a("destroy",()=>{v()}),a("enable disable",()=>{let{nextEl:b,prevEl:j}=t.navigation;if(b=xt(b),j=xt(j),t.enabled){u();return}[...b,...j].filter(L=>!!L).forEach(L=>L.classList.add(t.params.navigation.lockClass))}),a("click",(b,j)=>{let{nextEl:L,prevEl:M}=t.navigation;L=xt(L),M=xt(M);const E=j.target;let T=M.includes(E)||L.includes(E);if(t.isElement&&!T){const k=j.path||j.composedPath&&j.composedPath();k&&(T=k.find(O=>L.includes(O)||M.includes(O)))}if(t.params.navigation.hideOnClick&&!T){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===E||t.pagination.el.contains(E)))return;let k;L.length?k=L[0].classList.contains(t.params.navigation.hiddenClass):M.length&&(k=M[0].classList.contains(t.params.navigation.hiddenClass)),o(k===!0?"navigationShow":"navigationHide"),[...L,...M].filter(O=>!!O).forEach(O=>O.classList.toggle(t.params.navigation.hiddenClass))}});const y=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),u()},C=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(t.navigation,{enable:y,disable:C,update:u,init:g,destroy:v})}function eo(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function yR(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),t.pagination={el:null,bullets:[]};let d,u=0;function p(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function m(E,T){const{bulletActiveClass:k}=t.params.pagination;E&&(E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${k}-${T}`),E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${k}-${T}-${T}`)))}function g(E,T,k){if(E=E%k,T=T%k,T===E+1)return"next";if(T===E-1)return"previous"}function v(E){const T=E.target.closest(eo(t.params.pagination.bulletClass));if(!T)return;E.preventDefault();const k=Wc(T)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===k)return;const O=g(t.realIndex,k,t.slides.length);O==="next"?t.slideNext():O==="previous"?t.slidePrev():t.slideToLoop(k)}else t.slideTo(k)}function y(){const E=t.rtl,T=t.params.pagination;if(p())return;let k=t.pagination.el;k=xt(k);let O,N;const P=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,_=t.params.loop?Math.ceil(P/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(N=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,N=t.previousSnapIndex):(N=t.previousIndex||0,O=t.activeIndex||0),T.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const q=t.pagination.bullets;let F,K,ne;if(T.dynamicBullets&&(d=_p(q[0],t.isHorizontal()?"width":"height"),k.forEach(le=>{le.style[t.isHorizontal()?"width":"height"]=`${d*(T.dynamicMainBullets+4)}px`}),T.dynamicMainBullets>1&&N!==void 0&&(u+=O-(N||0),u>T.dynamicMainBullets-1?u=T.dynamicMainBullets-1:u<0&&(u=0)),F=Math.max(O-u,0),K=F+(Math.min(q.length,T.dynamicMainBullets)-1),ne=(K+F)/2),q.forEach(le=>{const ue=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(oe=>`${T.bulletActiveClass}${oe}`)].map(oe=>typeof oe=="string"&&oe.includes(" ")?oe.split(" "):oe).flat();le.classList.remove(...ue)}),k.length>1)q.forEach(le=>{const ue=Wc(le);ue===O?le.classList.add(...T.bulletActiveClass.split(" ")):t.isElement&&le.setAttribute("part","bullet"),T.dynamicBullets&&(ue>=F&&ue<=K&&le.classList.add(...`${T.bulletActiveClass}-main`.split(" ")),ue===F&&m(le,"prev"),ue===K&&m(le,"next"))});else{const le=q[O];if(le&&le.classList.add(...T.bulletActiveClass.split(" ")),t.isElement&&q.forEach((ue,oe)=>{ue.setAttribute("part",oe===O?"bullet-active":"bullet")}),T.dynamicBullets){const ue=q[F],oe=q[K];for(let B=F;B<=K;B+=1)q[B]&&q[B].classList.add(...`${T.bulletActiveClass}-main`.split(" "));m(ue,"prev"),m(oe,"next")}}if(T.dynamicBullets){const le=Math.min(q.length,T.dynamicMainBullets+4),ue=(d*le-d)/2-ne*d,oe=E?"right":"left";q.forEach(B=>{B.style[t.isHorizontal()?oe:"top"]=`${ue}px`})}}k.forEach((q,F)=>{if(T.type==="fraction"&&(q.querySelectorAll(eo(T.currentClass)).forEach(K=>{K.textContent=T.formatFractionCurrent(O+1)}),q.querySelectorAll(eo(T.totalClass)).forEach(K=>{K.textContent=T.formatFractionTotal(_)})),T.type==="progressbar"){let K;T.progressbarOpposite?K=t.isHorizontal()?"vertical":"horizontal":K=t.isHorizontal()?"horizontal":"vertical";const ne=(O+1)/_;let le=1,ue=1;K==="horizontal"?le=ne:ue=ne,q.querySelectorAll(eo(T.progressbarFillClass)).forEach(oe=>{oe.style.transform=`translate3d(0,0,0) scaleX(${le}) scaleY(${ue})`,oe.style.transitionDuration=`${t.params.speed}ms`})}T.type==="custom"&&T.renderCustom?(Kc(q,T.renderCustom(t,O+1,_)),F===0&&o("paginationRender",q)):(F===0&&o("paginationRender",q),o("paginationUpdate",q)),t.params.watchOverflow&&t.enabled&&q.classList[t.isLocked?"add":"remove"](T.lockClass)})}function C(){const E=t.params.pagination;if(p())return;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let k=t.pagination.el;k=xt(k);let O="";if(E.type==="bullets"){let N=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&N>T&&(N=T);for(let P=0;P<N;P+=1)E.renderBullet?O+=E.renderBullet.call(t,P,E.bulletClass):O+=`<${E.bulletElement} ${t.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?O=E.renderFraction.call(t,E.currentClass,E.totalClass):O=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?O=E.renderProgressbar.call(t,E.progressbarFillClass):O=`<span class="${E.progressbarFillClass}"></span>`),t.pagination.bullets=[],k.forEach(N=>{E.type!=="custom"&&Kc(N,O||""),E.type==="bullets"&&t.pagination.bullets.push(...N.querySelectorAll(eo(E.bulletClass)))}),E.type!=="custom"&&o("paginationRender",k[0])}function b(){t.params.pagination=Aw(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const E=t.params.pagination;if(!E.el)return;let T;typeof E.el=="string"&&t.isElement&&(T=t.el.querySelector(E.el)),!T&&typeof E.el=="string"&&(T=[...document.querySelectorAll(E.el)]),T||(T=E.el),!(!T||T.length===0)&&(t.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(T)&&T.length>1&&(T=[...t.el.querySelectorAll(E.el)],T.length>1&&(T=T.find(k=>jw(k,".swiper")[0]===t.el))),Array.isArray(T)&&T.length===1&&(T=T[0]),Object.assign(t.pagination,{el:T}),T=xt(T),T.forEach(k=>{E.type==="bullets"&&E.clickable&&k.classList.add(...(E.clickableClass||"").split(" ")),k.classList.add(E.modifierClass+E.type),k.classList.add(t.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(k.classList.add(`${E.modifierClass}${E.type}-dynamic`),u=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&k.classList.add(E.progressbarOppositeClass),E.clickable&&k.addEventListener("click",v),t.enabled||k.classList.add(E.lockClass)}))}function j(){const E=t.params.pagination;if(p())return;let T=t.pagination.el;T&&(T=xt(T),T.forEach(k=>{k.classList.remove(E.hiddenClass),k.classList.remove(E.modifierClass+E.type),k.classList.remove(t.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(k.classList.remove(...(E.clickableClass||"").split(" ")),k.removeEventListener("click",v))})),t.pagination.bullets&&t.pagination.bullets.forEach(k=>k.classList.remove(...E.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const E=t.params.pagination;let{el:T}=t.pagination;T=xt(T),T.forEach(k=>{k.classList.remove(E.horizontalClass,E.verticalClass),k.classList.add(t.isHorizontal()?E.horizontalClass:E.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?M():(b(),C(),y())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),a("snapIndexChange",()=>{y()}),a("snapGridLengthChange",()=>{C(),y()}),a("destroy",()=>{j()}),a("enable disable",()=>{let{el:E}=t.pagination;E&&(E=xt(E),E.forEach(T=>T.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{y()}),a("click",(E,T)=>{const k=T.target,O=xt(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!k.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&k===t.navigation.nextEl||t.navigation.prevEl&&k===t.navigation.prevEl))return;const N=O[0].classList.contains(t.params.pagination.hiddenClass);o(N===!0?"paginationShow":"paginationHide"),O.forEach(P=>P.classList.toggle(t.params.pagination.hiddenClass))}});const L=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:E}=t.pagination;E&&(E=xt(E),E.forEach(T=>T.classList.remove(t.params.pagination.paginationDisabledClass))),b(),C(),y()},M=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:E}=t.pagination;E&&(E=xt(E),E.forEach(T=>T.classList.add(t.params.pagination.paginationDisabledClass))),j()};Object.assign(t.pagination,{enable:L,disable:M,render:C,update:y,init:b,destroy:j})}function oi(e){let{swiper:t,extendParams:n,on:a,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,u,p=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,v=new Date().getTime(),y,C,b,j,L,M,E;function T(J){!t||t.destroyed||!t.wrapperEl||J.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",T),!(E||J.detail&&J.detail.bySwiperTouchMove)&&F())}const k=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?y=!0:y&&(m=g,y=!1);const J=t.autoplay.paused?g:v+m-new Date().getTime();t.autoplay.timeLeft=J,o("autoplayTimeLeft",J,J/p),u=requestAnimationFrame(()=>{k()})},O=()=>{let J;return t.virtual&&t.params.virtual.enabled?J=t.slides.find(V=>V.classList.contains("swiper-slide-active")):J=t.slides[t.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},N=J=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(u),k();let ie=typeof J>"u"?t.params.autoplay.delay:J;p=t.params.autoplay.delay,m=t.params.autoplay.delay;const V=O();!Number.isNaN(V)&&V>0&&typeof J>"u"&&(ie=V,p=V,m=V),g=ie;const X=t.params.speed,ae=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{N()})))};return ie>0?(clearTimeout(d),d=setTimeout(()=>{ae()},ie)):requestAnimationFrame(()=>{ae()}),ie},P=()=>{v=new Date().getTime(),t.autoplay.running=!0,N(),o("autoplayStart")},_=()=>{t.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(u),o("autoplayStop")},q=(J,ie)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(d),J||(M=!0);const V=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",T):F()};if(t.autoplay.paused=!0,ie){L&&(g=t.params.autoplay.delay),L=!1,V();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-v),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),V())},F=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(v=new Date().getTime(),M?(M=!1,N(g)):N(),t.autoplay.paused=!1,o("autoplayResume"))},K=()=>{if(t.destroyed||!t.autoplay.running)return;const J=Fi();J.visibilityState==="hidden"&&(M=!0,q(!0)),J.visibilityState==="visible"&&F()},ne=J=>{J.pointerType==="mouse"&&(M=!0,E=!0,!(t.animating||t.autoplay.paused)&&q(!0))},le=J=>{J.pointerType==="mouse"&&(E=!1,t.autoplay.paused&&F())},ue=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ne),t.el.addEventListener("pointerleave",le))},oe=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ne),t.el.removeEventListener("pointerleave",le))},B=()=>{Fi().addEventListener("visibilitychange",K)},W=()=>{Fi().removeEventListener("visibilitychange",K)};a("init",()=>{t.params.autoplay.enabled&&(ue(),B(),P())}),a("destroy",()=>{oe(),W(),t.autoplay.running&&_()}),a("_freeModeStaticRelease",()=>{(b||M)&&F()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?_():q(!0,!0)}),a("beforeTransitionStart",(J,ie,V)=>{t.destroyed||!t.autoplay.running||(V||!t.params.autoplay.disableOnInteraction?q(!0,!0):_())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){_();return}C=!0,b=!1,M=!1,j=setTimeout(()=>{M=!0,b=!0,q(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!C)){if(clearTimeout(j),clearTimeout(d),t.params.autoplay.disableOnInteraction){b=!1,C=!1;return}b&&t.params.cssMode&&F(),b=!1,C=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(L=!0)}),Object.assign(t.autoplay,{start:P,stop:_,pause:q,resume:F})}let T0;function wR(){const e=Ht(),t=Fi();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Mw(){return T0||(T0=wR()),T0}let E0;function bR(e){let{userAgent:t}=e===void 0?{}:e;const n=Mw(),a=Ht(),o=a.navigator.platform,l=t||a.navigator.userAgent,d={ios:!1,android:!1},u=a.screen.width,p=a.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const v=l.match(/(iPod)(.*OS\s([\d_]+))?/),y=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=o==="Win32";let b=o==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&b&&n.touch&&j.indexOf(`${u}x${p}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),b=!1),m&&!C&&(d.os="android",d.android=!0),(g||y||v)&&(d.os="ios",d.ios=!0),d}function Lw(e){return e===void 0&&(e={}),E0||(E0=bR(e)),E0}let j0;function SR(){const e=Ht(),t=Lw();let n=!1;function a(){const u=e.navigator.userAgent.toLowerCase();return u.indexOf("safari")>=0&&u.indexOf("chrome")<0&&u.indexOf("android")<0}if(a()){const u=String(e.navigator.userAgent);if(u.includes("Version/")){const[p,m]=u.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));n=p<16||p===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=a(),d=l||o&&t.ios;return{isSafari:n||l,needPerspectiveFix:n,need3dFix:d,isWebView:o}}function Ow(){return j0||(j0=SR()),j0}function CR(e){let{swiper:t,on:n,emit:a}=e;const o=Ht();let l=null,d=null;const u=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(v=>{d=o.requestAnimationFrame(()=>{const{width:y,height:C}=t;let b=y,j=C;v.forEach(L=>{let{contentBoxSize:M,contentRect:E,target:T}=L;T&&T!==t.el||(b=E?E.width:(M[0]||M).inlineSize,j=E?E.height:(M[0]||M).blockSize)}),(b!==y||j!==C)&&u()})}),l.observe(t.el))},m=()=>{d&&o.cancelAnimationFrame(d),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",u),o.addEventListener("orientationchange",g)}),n("destroy",()=>{m(),o.removeEventListener("resize",u),o.removeEventListener("orientationchange",g)})}function TR(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l=[],d=Ht(),u=function(g,v){v===void 0&&(v={});const y=d.MutationObserver||d.WebkitMutationObserver,C=new y(b=>{if(t.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const j=function(){o("observerUpdate",b[0])};d.requestAnimationFrame?d.requestAnimationFrame(j):d.setTimeout(j,0)});C.observe(g,{attributes:typeof v.attributes>"u"?!0:v.attributes,childList:t.isElement||(typeof v.childList>"u"?!0:v).childList,characterData:typeof v.characterData>"u"?!0:v.characterData}),l.push(C)},p=()=>{if(t.params.observer){if(t.params.observeParents){const g=jw(t.hostEl);for(let v=0;v<g.length;v+=1)u(g[v])}u(t.hostEl,{childList:t.params.observeSlideChildren}),u(t.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",m)}var ER={on(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=n?"unshift":"push";return e.split(" ").forEach(l=>{a.eventsListeners[l]||(a.eventsListeners[l]=[]),a.eventsListeners[l][o](t)}),a},once(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,d=new Array(l),u=0;u<l;u++)d[u]=arguments[u];t.apply(a,d)}return o.__emitterProxy=t,a.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const a=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[a](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?n.eventsListeners[a]=[]:n.eventsListeners[a]&&n.eventsListeners[a].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[a].splice(l,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,a;for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],n=l.slice(1,l.length),a=e):(t=l[0].events,n=l[0].data,a=l[0].context||e),n.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(m=>{m.apply(a,[p,...n])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(m=>{m.apply(a,n)})}),e}};function jR(){const e=this;let t,n;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=a.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Xn(a,"padding-left")||0,10)-parseInt(Xn(a,"padding-right")||0,10),n=n-parseInt(Xn(a,"padding-top")||0,10)-parseInt(Xn(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function AR(){const e=this;function t(F,K){return parseFloat(F.getPropertyValue(e.getDirectionLabel(K))||0)}const n=e.params,{wrapperEl:a,slidesEl:o,size:l,rtlTranslate:d,wrongRTL:u}=e,p=e.virtual&&n.virtual.enabled,m=p?e.virtual.slides.length:e.slides.length,g=Ii(o,`.${e.params.slideClass}, swiper-slide`),v=p?e.virtual.slides.length:g.length;let y=[];const C=[],b=[];let j=n.slidesOffsetBefore;typeof j=="function"&&(j=n.slidesOffsetBefore.call(e));let L=n.slidesOffsetAfter;typeof L=="function"&&(L=n.slidesOffsetAfter.call(e));const M=e.snapGrid.length,E=e.slidesGrid.length;let T=n.spaceBetween,k=-j,O=0,N=0;if(typeof l>"u")return;typeof T=="string"&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*l:typeof T=="string"&&(T=parseFloat(T)),e.virtualSize=-T,g.forEach(F=>{d?F.style.marginLeft="":F.style.marginRight="",F.style.marginBottom="",F.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(cc(a,"--swiper-centered-offset-before",""),cc(a,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let _;const q=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(F=>typeof n.breakpoints[F].slidesPerView<"u").length>0;for(let F=0;F<v;F+=1){_=0;let K;if(g[F]&&(K=g[F]),P&&e.grid.updateSlide(F,K,g),!(g[F]&&Xn(K,"display")==="none")){if(n.slidesPerView==="auto"){q&&(g[F].style[e.getDirectionLabel("width")]="");const ne=getComputedStyle(K),le=K.style.transform,ue=K.style.webkitTransform;if(le&&(K.style.transform="none"),ue&&(K.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?_p(K,"width"):_p(K,"height");else{const oe=t(ne,"width"),B=t(ne,"padding-left"),W=t(ne,"padding-right"),J=t(ne,"margin-left"),ie=t(ne,"margin-right"),V=ne.getPropertyValue("box-sizing");if(V&&V==="border-box")_=oe+J+ie;else{const{clientWidth:X,offsetWidth:ae}=K;_=oe+B+W+J+ie+(ae-X)}}le&&(K.style.transform=le),ue&&(K.style.webkitTransform=ue),n.roundLengths&&(_=Math.floor(_))}else _=(l-(n.slidesPerView-1)*T)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),g[F]&&(g[F].style[e.getDirectionLabel("width")]=`${_}px`);g[F]&&(g[F].swiperSlideSize=_),b.push(_),n.centeredSlides?(k=k+_/2+O/2+T,O===0&&F!==0&&(k=k-l/2-T),F===0&&(k=k-l/2-T),Math.abs(k)<1/1e3&&(k=0),n.roundLengths&&(k=Math.floor(k)),N%n.slidesPerGroup===0&&y.push(k),C.push(k)):(n.roundLengths&&(k=Math.floor(k)),(N-Math.min(e.params.slidesPerGroupSkip,N))%e.params.slidesPerGroup===0&&y.push(k),C.push(k),k=k+_+T),e.virtualSize+=_+T,O=_,N+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+L,d&&u&&(n.effect==="slide"||n.effect==="coverflow")&&(a.style.width=`${e.virtualSize+T}px`),n.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+T}px`),P&&e.grid.updateWrapperSize(_,y),!n.centeredSlides){const F=[];for(let K=0;K<y.length;K+=1){let ne=y[K];n.roundLengths&&(ne=Math.floor(ne)),y[K]<=e.virtualSize-l&&F.push(ne)}y=F,Math.floor(e.virtualSize-l)-Math.floor(y[y.length-1])>1&&y.push(e.virtualSize-l)}if(p&&n.loop){const F=b[0]+T;if(n.slidesPerGroup>1){const K=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),ne=F*n.slidesPerGroup;for(let le=0;le<K;le+=1)y.push(y[y.length-1]+ne)}for(let K=0;K<e.virtual.slidesBefore+e.virtual.slidesAfter;K+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+F),C.push(C[C.length-1]+F),e.virtualSize+=F}if(y.length===0&&(y=[0]),T!==0){const F=e.isHorizontal()&&d?"marginLeft":e.getDirectionLabel("marginRight");g.filter((K,ne)=>!n.cssMode||n.loop?!0:ne!==g.length-1).forEach(K=>{K.style[F]=`${T}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let F=0;b.forEach(ne=>{F+=ne+(T||0)}),F-=T;const K=F>l?F-l:0;y=y.map(ne=>ne<=0?-j:ne>K?K+L:ne)}if(n.centerInsufficientSlides){let F=0;b.forEach(ne=>{F+=ne+(T||0)}),F-=T;const K=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(F+K<l){const ne=(l-F-K)/2;y.forEach((le,ue)=>{y[ue]=le-ne}),C.forEach((le,ue)=>{C[ue]=le+ne})}}if(Object.assign(e,{slides:g,snapGrid:y,slidesGrid:C,slidesSizesGrid:b}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){cc(a,"--swiper-centered-offset-before",`${-y[0]}px`),cc(a,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);const F=-e.snapGrid[0],K=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ne=>ne+F),e.slidesGrid=e.slidesGrid.map(ne=>ne+K)}if(v!==m&&e.emit("slidesLengthChange"),y.length!==M&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),C.length!==E&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const F=`${n.containerModifierClass}backface-hidden`,K=e.el.classList.contains(F);v<=n.maxBackfaceHiddenSlides?K||e.el.classList.add(F):K&&e.el.classList.remove(F)}}function MR(e){const t=this,n=[],a=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const d=u=>a?t.slides[t.getSlideIndexByData(u)]:t.slides[u];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(u=>{n.push(u)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const u=t.activeIndex+l;if(u>t.slides.length&&!a)break;n.push(d(u))}else n.push(d(t.activeIndex));for(l=0;l<n.length;l+=1)if(typeof n[l]<"u"){const u=n[l].offsetHeight;o=u>o?u:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function LR(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-n-e.cssOverflowAdjustment()}const tv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function OR(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:a,rtlTranslate:o,snapGrid:l}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let d=-e;o&&(d=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let u=n.spaceBetween;typeof u=="string"&&u.indexOf("%")>=0?u=parseFloat(u.replace("%",""))/100*t.size:typeof u=="string"&&(u=parseFloat(u));for(let p=0;p<a.length;p+=1){const m=a[p];let g=m.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(g-=a[0].swiperSlideOffset);const v=(d+(n.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+u),y=(d-l[0]+(n.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+u),C=-(d-g),b=C+t.slidesSizesGrid[p],j=C>=0&&C<=t.size-t.slidesSizesGrid[p],L=C>=0&&C<t.size-1||b>1&&b<=t.size||C<=0&&b>=t.size;L&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(p)),tv(m,L,n.slideVisibleClass),tv(m,j,n.slideFullyVisibleClass),m.progress=o?-v:v,m.originalProgress=o?-y:y}}function RR(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const n=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:d,progressLoop:u}=t;const p=l,m=d;if(a===0)o=0,l=!0,d=!0;else{o=(e-t.minTranslate())/a;const g=Math.abs(e-t.minTranslate())<1,v=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,d=v||o>=1,g&&(o=0),v&&(o=1)}if(n.loop){const g=t.getSlideIndexByData(0),v=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],C=t.slidesGrid[v],b=t.slidesGrid[t.slidesGrid.length-1],j=Math.abs(e);j>=y?u=(j-y)/b:u=(j+b-C)/b,u>1&&(u-=1)}Object.assign(t,{progress:o,progressLoop:u,isBeginning:l,isEnd:d}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),l&&!p&&t.emit("reachBeginning toEdge"),d&&!m&&t.emit("reachEnd toEdge"),(p&&!l||m&&!d)&&t.emit("fromEdge"),t.emit("progress",o)}const A0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function VR(){const e=this,{slides:t,params:n,slidesEl:a,activeIndex:o}=e,l=e.virtual&&n.virtual.enabled,d=e.grid&&n.grid&&n.grid.rows>1,u=v=>Ii(a,`.${n.slideClass}${v}, swiper-slide${v}`)[0];let p,m,g;if(l)if(n.loop){let v=o-e.virtual.slidesBefore;v<0&&(v=e.virtual.slides.length+v),v>=e.virtual.slides.length&&(v-=e.virtual.slides.length),p=u(`[data-swiper-slide-index="${v}"]`)}else p=u(`[data-swiper-slide-index="${o}"]`);else d?(p=t.find(v=>v.column===o),g=t.find(v=>v.column===o+1),m=t.find(v=>v.column===o-1)):p=t[o];p&&(d||(g=vR(p,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!g&&(g=t[0]),m=xR(p,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(v=>{A0(v,v===p,n.slideActiveClass),A0(v,v===g,n.slideNextClass),A0(v,v===m,n.slidePrevClass)}),e.emitSlidesClasses()}const Hc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(n());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},M0=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Gp=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const d=o,u=[d-t];u.push(...Array.from({length:t}).map((p,m)=>d+a+m)),e.slides.forEach((p,m)=>{u.includes(p.column)&&M0(e,m)});return}const l=o+a-1;if(e.params.rewind||e.params.loop)for(let d=o-t;d<=l+t;d+=1){const u=(d%n+n)%n;(u<o||u>l)&&M0(e,u)}else for(let d=Math.max(o-t,0);d<=Math.min(l+t,n-1);d+=1)d!==o&&(d>l||d<o)&&M0(e,d)};function kR(e){const{slidesGrid:t,params:n}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?a>=t[l]&&a<t[l+1]-(t[l+1]-t[l])/2?o=l:a>=t[l]&&a<t[l+1]&&(o=l+1):a>=t[l]&&(o=l);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function DR(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:l,realIndex:d,snapIndex:u}=t;let p=e,m;const g=C=>{let b=C-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof p>"u"&&(p=kR(t)),a.indexOf(n)>=0)m=a.indexOf(n);else{const C=Math.min(o.slidesPerGroupSkip,p);m=C+Math.floor((p-C)/o.slidesPerGroup)}if(m>=a.length&&(m=a.length-1),p===l&&!t.params.loop){m!==u&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(p===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(p);return}const v=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled&&o.loop)y=g(p);else if(v){const C=t.slides.find(j=>j.column===p);let b=parseInt(C.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(C),0)),y=Math.floor(b/o.grid.rows)}else if(t.slides[p]){const C=t.slides[p].getAttribute("data-swiper-slide-index");C?y=parseInt(C,10):y=p}else y=p;Object.assign(t,{previousSnapIndex:u,snapIndex:m,previousRealIndex:d,realIndex:y,previousIndex:l,activeIndex:p}),t.initialized&&Gp(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(d!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function HR(e,t){const n=this,a=n.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(u=>{!o&&u.matches&&u.matches(`.${a.slideClass}, swiper-slide`)&&(o=u)});let l=!1,d;if(o){for(let u=0;u<n.slides.length;u+=1)if(n.slides[u]===o){l=!0,d=u;break}}if(o&&l)n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=d;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}a.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var zR={updateSize:jR,updateSlides:AR,updateAutoHeight:MR,updateSlidesOffset:LR,updateSlidesProgress:OR,updateProgress:RR,updateSlidesClasses:VR,updateActiveIndex:DR,updateClickedSlide:HR};function PR(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:a,translate:o,wrapperEl:l}=t;if(n.virtualTranslate)return a?-o:o;if(n.cssMode)return o;let d=pR(l,e);return d+=t.cssOverflowAdjustment(),a&&(d=-d),d||0}function NR(e,t){const n=this,{rtlTranslate:a,params:o,wrapperEl:l,progress:d}=n;let u=0,p=0;const m=0;n.isHorizontal()?u=a?-e:e:p=e,o.roundLengths&&(u=Math.floor(u),p=Math.floor(p)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?u:p,o.cssMode?l[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-u:-p:o.virtualTranslate||(n.isHorizontal()?u-=n.cssOverflowAdjustment():p-=n.cssOverflowAdjustment(),l.style.transform=`translate3d(${u}px, ${p}px, ${m}px)`);let g;const v=n.maxTranslate()-n.minTranslate();v===0?g=0:g=(e-n.minTranslate())/v,g!==d&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function $R(){return-this.snapGrid[0]}function BR(){return-this.snapGrid[this.snapGrid.length-1]}function IR(e,t,n,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),a===void 0&&(a=!0);const l=this,{params:d,wrapperEl:u}=l;if(l.animating&&d.preventInteractionOnTransition)return!1;const p=l.minTranslate(),m=l.maxTranslate();let g;if(a&&e>p?g=p:a&&e<m?g=m:g=e,l.updateProgress(g),d.cssMode){const v=l.isHorizontal();if(t===0)u[v?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return Ew({swiper:l,targetPosition:-g,side:v?"left":"top"}),!0;u.scrollTo({[v?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,n&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var UR={getTranslate:PR,setTranslate:NR,minTranslate:$R,maxTranslate:BR,translateTo:IR};function _R(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Rw(e){let{swiper:t,runCallbacks:n,direction:a,step:o}=e;const{activeIndex:l,previousIndex:d}=t;let u=a;u||(l>d?u="next":l<d?u="prev":u="reset"),t.emit(`transition${o}`),n&&u==="reset"?t.emit(`slideResetTransition${o}`):n&&l!==d&&(t.emit(`slideChangeTransition${o}`),u==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function GR(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;a.cssMode||(a.autoHeight&&n.updateAutoHeight(),Rw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function YR(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;n.animating=!1,!a.cssMode&&(n.setTransition(0),Rw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var qR={setTransition:_R,transitionStart:GR,transitionEnd:YR};function FR(e,t,n,a,o){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let d=e;d<0&&(d=0);const{params:u,snapGrid:p,slidesGrid:m,previousIndex:g,activeIndex:v,rtlTranslate:y,wrapperEl:C,enabled:b}=l;if(!b&&!a&&!o||l.destroyed||l.animating&&u.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const j=Math.min(l.params.slidesPerGroupSkip,d);let L=j+Math.floor((d-j)/l.params.slidesPerGroup);L>=p.length&&(L=p.length-1);const M=-p[L];if(u.normalizeSlideIndex)for(let P=0;P<m.length;P+=1){const _=-Math.floor(M*100),q=Math.floor(m[P]*100),F=Math.floor(m[P+1]*100);typeof m[P+1]<"u"?_>=q&&_<F-(F-q)/2?d=P:_>=q&&_<F&&(d=P+1):_>=q&&(d=P)}if(l.initialized&&d!==v&&(!l.allowSlideNext&&(y?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(v||0)!==d))return!1;d!==(g||0)&&n&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let E;d>v?E="next":d<v?E="prev":E="reset";const T=l.virtual&&l.params.virtual.enabled;if(!(T&&o)&&(y&&-M===l.translate||!y&&M===l.translate))return l.updateActiveIndex(d),u.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),u.effect!=="slide"&&l.setTranslate(M),E!=="reset"&&(l.transitionStart(n,E),l.transitionEnd(n,E)),!1;if(u.cssMode){const P=l.isHorizontal(),_=y?M:-M;if(t===0)T&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),T&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{C[P?"scrollLeft":"scrollTop"]=_})):C[P?"scrollLeft":"scrollTop"]=_,T&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return Ew({swiper:l,targetPosition:_,side:P?"left":"top"}),!0;C.scrollTo({[P?"left":"top"]:_,behavior:"smooth"})}return!0}const N=Ow().isSafari;return T&&!o&&N&&l.isElement&&l.virtual.update(!1,!1,d),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(d),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,a),l.transitionStart(n,E),t===0?l.transitionEnd(n,E):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(n,E))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function XR(e,t,n,a){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let d=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)d=d+o.virtual.slidesBefore;else{let u;if(l){const y=d*o.params.grid.rows;u=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===y).column}else u=o.getSlideIndexByData(d);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let v=p-u<g;if(m&&(v=v||u<Math.ceil(g/2)),a&&m&&o.params.slidesPerView!=="auto"&&!l&&(v=!1),v){const y=m?u<o.activeIndex?"prev":"next":u-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?u+1:u-p+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(l){const y=d*o.params.grid.rows;d=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===y).column}else d=o.getSlideIndexByData(d)}return requestAnimationFrame(()=>{o.slideTo(d,t,n,a)}),o}function ZR(e,t,n){t===void 0&&(t=!0);const a=this,{enabled:o,params:l,animating:d}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let u=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(u=Math.max(a.slidesPerViewDynamic("current",!0),1));const p=a.activeIndex<l.slidesPerGroupSkip?1:u,m=a.virtual&&l.virtual.enabled;if(l.loop){if(d&&!m&&l.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+p,e,t,n)}),!0}return l.rewind&&a.isEnd?a.slideTo(0,e,t,n):a.slideTo(a.activeIndex+p,e,t,n)}function WR(e,t,n){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:l,slidesGrid:d,rtlTranslate:u,enabled:p,animating:m}=a;if(!p||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const g=a.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const v=u?a.translate:-a.translate;function y(E){return E<0?-Math.floor(Math.abs(E)):Math.floor(E)}const C=y(v),b=l.map(E=>y(E)),j=o.freeMode&&o.freeMode.enabled;let L=l[b.indexOf(C)-1];if(typeof L>"u"&&(o.cssMode||j)){let E;l.forEach((T,k)=>{C>=T&&(E=k)}),typeof E<"u"&&(L=j?l[E]:l[E>0?E-1:E])}let M=0;if(typeof L<"u"&&(M=d.indexOf(L),M<0&&(M=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-a.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&a.isBeginning){const E=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(E,e,t,n)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(M,e,t,n)}),!0;return a.slideTo(M,e,t,n)}function KR(e,t,n){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,n)}function QR(e,t,n,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const d=Math.min(o.params.slidesPerGroupSkip,l),u=d+Math.floor((l-d)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[u]){const m=o.snapGrid[u],g=o.snapGrid[u+1];p-m>(g-m)*a&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[u-1],g=o.snapGrid[u];p-m<=(g-m)*a&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,n)}function JR(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const d=e.isElement?"swiper-slide":`.${t.slideClass}`,u=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(u?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Ii(n,`${d}[data-swiper-slide-index="${l}"]`)[0]),Tw(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var eV={slideTo:FR,slideToLoop:XR,slideNext:ZR,slidePrev:WR,slideReset:KR,slideToClosest:QR,slideToClickedSlide:JR};function tV(e,t){const n=this,{params:a,slidesEl:o}=n;if(!a.loop||n.virtual&&n.params.virtual.enabled)return;const l=()=>{Ii(o,`.${a.slideClass}, swiper-slide`).forEach((C,b)=>{C.setAttribute("data-swiper-slide-index",b)})},d=()=>{const y=Ii(o,`.${a.slideBlankClass}`);y.forEach(C=>{C.remove()}),y.length>0&&(n.recalcSlides(),n.updateSlides())},u=n.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||u)&&d();const p=a.slidesPerGroup*(u?a.grid.rows:1),m=n.slides.length%p!==0,g=u&&n.slides.length%a.grid.rows!==0,v=y=>{for(let C=0;C<y;C+=1){const b=n.isElement?Zc("swiper-slide",[a.slideBlankClass]):Zc("div",[a.slideClass,a.slideBlankClass]);n.slidesEl.append(b)}};if(m){if(a.loopAddBlankSlides){const y=p-n.slides.length%p;v(y),n.recalcSlides(),n.updateSlides()}else Xc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(a.loopAddBlankSlides){const y=a.grid.rows-n.slides.length%a.grid.rows;v(y),n.recalcSlides(),n.updateSlides()}else Xc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();n.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function iV(e){let{slideRealIndex:t,slideTo:n=!0,direction:a,setTranslate:o,activeSlideIndex:l,initial:d,byController:u,byMousewheel:p}=e===void 0?{}:e;const m=this;if(!m.params.loop)return;m.emit("beforeLoopFix");const{slides:g,allowSlidePrev:v,allowSlideNext:y,slidesEl:C,params:b}=m,{centeredSlides:j,initialSlide:L}=b;if(m.allowSlidePrev=!0,m.allowSlideNext=!0,m.virtual&&b.virtual.enabled){n&&(!b.centeredSlides&&m.snapIndex===0?m.slideTo(m.virtual.slides.length,0,!1,!0):b.centeredSlides&&m.snapIndex<b.slidesPerView?m.slideTo(m.virtual.slides.length+m.snapIndex,0,!1,!0):m.snapIndex===m.snapGrid.length-1&&m.slideTo(m.virtual.slidesBefore,0,!1,!0)),m.allowSlidePrev=v,m.allowSlideNext=y,m.emit("loopFix");return}let M=b.slidesPerView;M==="auto"?M=m.slidesPerViewDynamic():(M=Math.ceil(parseFloat(b.slidesPerView,10)),j&&M%2===0&&(M=M+1));const E=b.slidesPerGroupAuto?M:b.slidesPerGroup;let T=j?Math.max(E,Math.ceil(M/2)):E;T%E!==0&&(T+=E-T%E),T+=b.loopAdditionalSlides,m.loopedSlides=T;const k=m.grid&&b.grid&&b.grid.rows>1;g.length<M+T||m.params.effect==="cards"&&g.length<M+T*2?Xc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&b.grid.fill==="row"&&Xc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const O=[],N=[],P=k?Math.ceil(g.length/b.grid.rows):g.length,_=d&&P-L<M&&!j;let q=_?L:m.activeIndex;typeof l>"u"?l=m.getSlideIndex(g.find(B=>B.classList.contains(b.slideActiveClass))):q=l;const F=a==="next"||!a,K=a==="prev"||!a;let ne=0,le=0;const oe=(k?g[l].column:l)+(j&&typeof o>"u"?-M/2+.5:0);if(oe<T){ne=Math.max(T-oe,E);for(let B=0;B<T-oe;B+=1){const W=B-Math.floor(B/P)*P;if(k){const J=P-W-1;for(let ie=g.length-1;ie>=0;ie-=1)g[ie].column===J&&O.push(ie)}else O.push(P-W-1)}}else if(oe+M>P-T){le=Math.max(oe-(P-T*2),E),_&&(le=Math.max(le,M-P+L+1));for(let B=0;B<le;B+=1){const W=B-Math.floor(B/P)*P;k?g.forEach((J,ie)=>{J.column===W&&N.push(ie)}):N.push(W)}}if(m.__preventObserver__=!0,requestAnimationFrame(()=>{m.__preventObserver__=!1}),m.params.effect==="cards"&&g.length<M+T*2&&(N.includes(l)&&N.splice(N.indexOf(l),1),O.includes(l)&&O.splice(O.indexOf(l),1)),K&&O.forEach(B=>{g[B].swiperLoopMoveDOM=!0,C.prepend(g[B]),g[B].swiperLoopMoveDOM=!1}),F&&N.forEach(B=>{g[B].swiperLoopMoveDOM=!0,C.append(g[B]),g[B].swiperLoopMoveDOM=!1}),m.recalcSlides(),b.slidesPerView==="auto"?m.updateSlides():k&&(O.length>0&&K||N.length>0&&F)&&m.slides.forEach((B,W)=>{m.grid.updateSlide(W,B,m.slides)}),b.watchSlidesProgress&&m.updateSlidesOffset(),n){if(O.length>0&&K){if(typeof t>"u"){const B=m.slidesGrid[q],J=m.slidesGrid[q+ne]-B;p?m.setTranslate(m.translate-J):(m.slideTo(q+Math.ceil(ne),0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-J,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-J))}else if(o){const B=k?O.length/b.grid.rows:O.length;m.slideTo(m.activeIndex+B,0,!1,!0),m.touchEventsData.currentTranslate=m.translate}}else if(N.length>0&&F)if(typeof t>"u"){const B=m.slidesGrid[q],J=m.slidesGrid[q-le]-B;p?m.setTranslate(m.translate-J):(m.slideTo(q-le,0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-J,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-J))}else{const B=k?N.length/b.grid.rows:N.length;m.slideTo(m.activeIndex-B,0,!1,!0)}}if(m.allowSlidePrev=v,m.allowSlideNext=y,m.controller&&m.controller.control&&!u){const B={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(m.controller.control)?m.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...B,slideTo:W.params.slidesPerView===b.slidesPerView?n:!1})}):m.controller.control instanceof m.constructor&&m.controller.control.params.loop&&m.controller.control.loopFix({...B,slideTo:m.controller.control.params.slidesPerView===b.slidesPerView?n:!1})}m.emit("loopFix")}function nV(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var aV={loopCreate:tV,loopFix:iV,loopDestroy:nV};function rV(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function sV(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var oV={setGrabCursor:rV,unsetGrabCursor:sV};function lV(e,t){t===void 0&&(t=this);function n(a){if(!a||a===Fi()||a===Ht())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||n(a.getRootNode().host)}return n(t)}function iv(e,t,n){const a=Ht(),{params:o}=e,l=o.edgeSwipeDetection,d=o.edgeSwipeThreshold;return l&&(n<=d||n>=a.innerWidth-d)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function cV(e){const t=this,n=Fi();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){iv(t,a,a.targetTouches[0].pageX);return}const{params:l,touches:d,enabled:u}=t;if(!u||!l.simulateTouch&&a.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=a.target;if(l.touchEventsTarget==="wrapper"&&!gR(p,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=a.composedPath?a.composedPath():a.path;m&&a.target&&a.target.shadowRoot&&g&&(p=g[0]);const v=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(a.target&&a.target.shadowRoot);if(l.noSwiping&&(y?lV(v,p):p.closest(v))){t.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;d.currentX=a.pageX,d.currentY=a.pageY;const C=d.currentX,b=d.currentY;if(!iv(t,a,C))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=C,d.startY=b,o.touchStartTime=Fc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let j=!0;p.matches(o.focusableElements)&&(j=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==p&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&n.activeElement.blur();const L=j&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||L)&&!p.isContentEditable&&a.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function dV(e){const t=Fi(),n=this,a=n.touchEventsData,{params:o,touches:l,rtlTranslate:d,enabled:u}=n;if(!u||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(a.touchId!==null||p.pointerId!==a.pointerId))return;let m;if(p.type==="touchmove"){if(m=[...p.changedTouches].find(O=>O.identifier===a.touchId),!m||m.identifier!==a.touchId)return}else m=p;if(!a.isTouched){a.startMoving&&a.isScrolling&&n.emit("touchMoveOpposite",p);return}const g=m.pageX,v=m.pageY;if(p.preventedByNestedSwiper){l.startX=g,l.startY=v;return}if(!n.allowTouchMove){p.target.matches(a.focusableElements)||(n.allowClick=!1),a.isTouched&&(Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v}),a.touchStartTime=Fc());return}if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(v<l.startY&&n.translate<=n.maxTranslate()||v>l.startY&&n.translate>=n.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(d&&(g>l.startX&&-n.translate<=n.maxTranslate()||g<l.startX&&-n.translate>=n.minTranslate()))return;if(!d&&(g<l.startX&&n.translate<=n.maxTranslate()||g>l.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(a.focusableElements)){a.isMoved=!0,n.allowClick=!1;return}a.allowTouchCallbacks&&n.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=v;const y=l.currentX-l.startX,C=l.currentY-l.startY;if(n.params.threshold&&Math.sqrt(y**2+C**2)<n.params.threshold)return;if(typeof a.isScrolling>"u"){let O;n.isHorizontal()&&l.currentY===l.startY||n.isVertical()&&l.currentX===l.startX?a.isScrolling=!1:y*y+C*C>=25&&(O=Math.atan2(Math.abs(C),Math.abs(y))*180/Math.PI,a.isScrolling=n.isHorizontal()?O>o.touchAngle:90-O>o.touchAngle)}if(a.isScrolling&&n.emit("touchMoveOpposite",p),typeof a.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(a.startMoving=!0),a.isScrolling||p.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;n.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let b=n.isHorizontal()?y:C,j=n.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(d?1:-1),j=Math.abs(j)*(d?1:-1)),l.diff=b,b*=o.touchRatio,d&&(b=-b,j=-j);const L=n.touchesDirection;n.swipeDirection=b>0?"prev":"next",n.touchesDirection=j>0?"prev":"next";const M=n.params.loop&&!o.cssMode,E=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!a.isMoved){if(M&&E&&n.loopFix({direction:n.swipeDirection}),a.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const O=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(O)}a.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&L!==n.touchesDirection&&M&&E&&Math.abs(b)>=1){Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}n.emit("sliderMove",p),a.isMoved=!0,a.currentTranslate=b+a.startTranslate;let T=!0,k=o.resistanceRatio;if(o.touchReleaseOnEdges&&(k=0),b>0?(M&&E&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>n.minTranslate()&&(T=!1,o.resistance&&(a.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+a.startTranslate+b)**k))):b<0&&(M&&E&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<n.maxTranslate()&&(T=!1,o.resistance&&(a.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-a.startTranslate-b)**k))),T&&(p.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,a.currentTranslate=a.startTranslate,l.diff=n.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(a.currentTranslate),n.setTranslate(a.currentTranslate))}function uV(e){const t=this,n=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(O=>O.identifier===n.touchId),!o||o.identifier!==n.touchId)return}else{if(n.touchId!==null||a.pointerId!==n.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:d,touches:u,rtlTranslate:p,slidesGrid:m,enabled:g}=t;if(!g||!d.simulateTouch&&a.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",a),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&d.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}d.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const v=Fc(),y=v-n.touchStartTime;if(t.allowClick){const O=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(O&&O[0]||a.target,O),t.emit("tap click",a),y<300&&v-n.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(n.lastClickTime=Fc(),Tw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||u.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let C;if(d.followFinger?C=p?t.translate:-t.translate:C=-n.currentTranslate,d.cssMode)return;if(d.freeMode&&d.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:C});return}const b=C>=-t.maxTranslate()&&!t.params.loop;let j=0,L=t.slidesSizesGrid[0];for(let O=0;O<m.length;O+=O<d.slidesPerGroupSkip?1:d.slidesPerGroup){const N=O<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;typeof m[O+N]<"u"?(b||C>=m[O]&&C<m[O+N])&&(j=O,L=m[O+N]-m[O]):(b||C>=m[O])&&(j=O,L=m[m.length-1]-m[m.length-2])}let M=null,E=null;d.rewind&&(t.isBeginning?E=d.virtual&&d.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const T=(C-m[j])/L,k=j<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;if(y>d.longSwipesMs){if(!d.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(T>=d.longSwipesRatio?t.slideTo(d.rewind&&t.isEnd?M:j+k):t.slideTo(j)),t.swipeDirection==="prev"&&(T>1-d.longSwipesRatio?t.slideTo(j+k):E!==null&&T<0&&Math.abs(T)>d.longSwipesRatio?t.slideTo(E):t.slideTo(j))}else{if(!d.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(j+k):t.slideTo(j):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:j+k),t.swipeDirection==="prev"&&t.slideTo(E!==null?E:j))}}function nv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:l}=e,d=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const u=d&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!u?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!d?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function fV(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function pV(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function hV(e){const t=this;Hc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function mV(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Vw=(e,t)=>{const n=Fi(),{params:a,el:o,wrapperEl:l,device:d}=e,u=!!a.nested,p=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(n[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:u}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),n[p]("touchmove",e.onTouchMove,{passive:!1,capture:u}),n[p]("pointermove",e.onTouchMove,{passive:!1,capture:u}),n[p]("touchend",e.onTouchEnd,{passive:!0}),n[p]("pointerup",e.onTouchEnd,{passive:!0}),n[p]("pointercancel",e.onTouchEnd,{passive:!0}),n[p]("touchcancel",e.onTouchEnd,{passive:!0}),n[p]("pointerout",e.onTouchEnd,{passive:!0}),n[p]("pointerleave",e.onTouchEnd,{passive:!0}),n[p]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[p]("click",e.onClick,!0),a.cssMode&&l[p]("scroll",e.onScroll),a.updateOnWindowResize?e[m](d.ios||d.android?"resize orientationchange observerUpdate":"resize observerUpdate",nv,!0):e[m]("observerUpdate",nv,!0),o[p]("load",e.onLoad,{capture:!0}))};function gV(){const e=this,{params:t}=e;e.onTouchStart=cV.bind(e),e.onTouchMove=dV.bind(e),e.onTouchEnd=uV.bind(e),e.onDocumentTouchStart=mV.bind(e),t.cssMode&&(e.onScroll=pV.bind(e)),e.onClick=fV.bind(e),e.onLoad=hV.bind(e),Vw(e,"on")}function xV(){Vw(this,"off")}var vV={attachEvents:gV,detachEvents:xV};const av=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function yV(){const e=this,{realIndex:t,initialized:n,params:a,el:o}=e,l=a.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const d=Fi(),u=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",p=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:d.querySelector(a.breakpointsBase),m=e.getBreakpoint(l,u,p);if(!m||e.currentBreakpoint===m)return;const v=(m in l?l[m]:void 0)||e.originalParams,y=av(e,a),C=av(e,v),b=e.params.grabCursor,j=v.grabCursor,L=a.enabled;y&&!C?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&C&&(o.classList.add(`${a.containerModifierClass}grid`),(v.grid.fill&&v.grid.fill==="column"||!v.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!j?e.unsetGrabCursor():!b&&j&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(N=>{if(typeof v[N]>"u")return;const P=a[N]&&a[N].enabled,_=v[N]&&v[N].enabled;P&&!_&&e[N].disable(),!P&&_&&e[N].enable()});const M=v.direction&&v.direction!==a.direction,E=a.loop&&(v.slidesPerView!==a.slidesPerView||M),T=a.loop;M&&n&&e.changeDirection(),ri(e.params,v);const k=e.params.enabled,O=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),L&&!k?e.disable():!L&&k&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",v),n&&(E?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!T&&O?(e.loopCreate(t),e.updateSlides()):T&&!O&&e.loopDestroy()),e.emit("breakpoint",v)}function wV(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let a=!1;const o=Ht(),l=t==="window"?o.innerHeight:n.clientHeight,d=Object.keys(e).map(u=>{if(typeof u=="string"&&u.indexOf("@")===0){const p=parseFloat(u.substr(1));return{value:l*p,point:u}}return{value:u,point:u}});d.sort((u,p)=>parseInt(u.value,10)-parseInt(p.value,10));for(let u=0;u<d.length;u+=1){const{point:p,value:m}=d[u];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(a=p):m<=n.clientWidth&&(a=p)}return a||"max"}var bV={setBreakpoint:yV,getBreakpoint:wV};function SV(e,t){const n=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&n.push(t+o)}):typeof a=="string"&&n.push(t+a)}),n}function CV(){const e=this,{classNames:t,params:n,rtl:a,el:o,device:l}=e,d=SV(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:a},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...d),o.classList.add(...t),e.emitContainerClasses()}function TV(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var EV={addClasses:CV,removeClasses:TV};function jV(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:a}=n;if(a){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var AV={checkOverflow:jV},Yp={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function MV(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],l=a[o];if(typeof l!="object"||l===null){ri(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){ri(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),ri(t,a)}}const L0={eventsEmitter:ER,update:zR,translate:UR,transition:qR,slide:eV,loop:aV,grabCursor:oV,events:vV,breakpoints:bV,checkOverflow:AV,classes:EV},O0={};let o1=class pn{constructor(){let t,n;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?n=o[0]:[t,n]=o,n||(n={}),n=ri({},n),t&&!n.el&&(n.el=t);const d=Fi();if(n.el&&typeof n.el=="string"&&d.querySelectorAll(n.el).length>1){const g=[];return d.querySelectorAll(n.el).forEach(v=>{const y=ri({},n,{el:v});g.push(new pn(y))}),g}const u=this;u.__swiper__=!0,u.support=Mw(),u.device=Lw({userAgent:n.userAgent}),u.browser=Ow(),u.eventsListeners={},u.eventsAnyListeners=[],u.modules=[...u.__modules__],n.modules&&Array.isArray(n.modules)&&u.modules.push(...n.modules);const p={};u.modules.forEach(g=>{g({params:n,swiper:u,extendParams:MV(n,p),on:u.on.bind(u),once:u.once.bind(u),off:u.off.bind(u),emit:u.emit.bind(u)})});const m=ri({},Yp,p);return u.params=ri({},m,O0,n),u.originalParams=ri({},u.params),u.passedParams=ri({},n),u.params&&u.params.on&&Object.keys(u.params.on).forEach(g=>{u.on(g,u.params.on[g])}),u.params&&u.params.onAny&&u.onAny(u.params.onAny),Object.assign(u,{enabled:u.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return u.params.direction==="horizontal"},isVertical(){return u.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:u.params.allowSlideNext,allowSlidePrev:u.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:u.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:u.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),u.emit("_swiper"),u.params.init&&u.init(),u}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:a}=this,o=Ii(n,`.${a.slideClass}, swiper-slide`),l=Wc(o[0]);return Wc(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:a}=t;t.slides=Ii(n,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),d=(a.maxTranslate()-o)*t+o;a.translateTo(d,typeof n>"u"?0:n),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);n.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const a=this,{params:o,slides:l,slidesGrid:d,slidesSizesGrid:u,size:p,activeIndex:m}=a;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let v=l[m]?Math.ceil(l[m].swiperSlideSize):0,y;for(let C=m+1;C<l.length;C+=1)l[C]&&!y&&(v+=Math.ceil(l[C].swiperSlideSize),g+=1,v>p&&(y=!0));for(let C=m-1;C>=0;C-=1)l[C]&&!y&&(v+=l[C].swiperSlideSize,g+=1,v>p&&(y=!0))}else if(t==="current")for(let v=m+1;v<l.length;v+=1)(n?d[v]+u[v]-d[m]<p:d[v]-d[m]<p)&&(g+=1);else for(let v=m-1;v>=0;v-=1)d[m]-d[v]<p&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(d=>{d.complete&&Hc(t,d)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const d=t.rtlTranslate?t.translate*-1:t.translate,u=Math.min(Math.max(d,t.maxTranslate()),t.minTranslate());t.setTranslate(u),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const d=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(d.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}a.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),a.emit("changeDirection"),n&&a.update()),a}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let a=t||n.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=n,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let d=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Ii(a,o())[0];return!d&&n.params.createElements&&(d=Zc("div",n.params.wrapperClass),a.append(d),Ii(a,`.${n.params.slideClass}`).forEach(u=>{d.append(u)})),Object.assign(n,{el:a,wrapperEl:d,slidesEl:n.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:d,hostEl:n.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Xn(a,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Xn(a,"direction")==="rtl"),wrongRTL:Xn(d,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const o=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?Hc(n,l):l.addEventListener("load",d=>{Hc(n,d.target)})}),Gp(n),n.initialized=!0,Gp(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const a=this,{params:o,el:l,wrapperEl:d,slides:u}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),n&&(a.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),d&&d.removeAttribute("style"),u&&u.length&&u.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(p=>{a.off(p)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),uR(a)),a.destroyed=!0),null}static extendDefaults(t){ri(O0,t)}static get extendedDefaults(){return O0}static get defaults(){return Yp}static installModule(t){pn.prototype.__modules__||(pn.prototype.__modules__=[]);const n=pn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>pn.installModule(n)),pn):(pn.installModule(t),pn)}};Object.keys(L0).forEach(e=>{Object.keys(L0[e]).forEach(t=>{o1.prototype[t]=L0[e][t]})});o1.use([CR,TR]);const kw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Aa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Or(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Aa(t[a])&&Aa(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:Or(e[a],t[a]):e[a]=t[a]})}function Dw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Hw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function zw(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Pw(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),n=[];return t.forEach(a=>{n.indexOf(a)<0&&n.push(a)}),n.join(" ")}function LV(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function OV(e){let{swiper:t,slides:n,passedParams:a,changedParams:o,nextEl:l,prevEl:d,scrollbarEl:u,paginationEl:p}=e;const m=o.filter(q=>q!=="children"&&q!=="direction"&&q!=="wrapperClass"),{params:g,pagination:v,navigation:y,scrollbar:C,virtual:b,thumbs:j}=t;let L,M,E,T,k,O,N,P;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(L=!0),o.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(M=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(g.pagination||g.pagination===!1)&&v&&!v.el&&(E=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||u)&&(g.scrollbar||g.scrollbar===!1)&&C&&!C.el&&(T=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||d)&&(a.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(k=!0);const _=q=>{t[q]&&(t[q].destroy(),q==="navigation"?(t.isElement&&(t[q].prevEl.remove(),t[q].nextEl.remove()),g[q].prevEl=void 0,g[q].nextEl=void 0,t[q].prevEl=void 0,t[q].nextEl=void 0):(t.isElement&&t[q].el.remove(),g[q].el=void 0,t[q].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!a.loop?O=!0:!g.loop&&a.loop?N=!0:P=!0),m.forEach(q=>{if(Aa(g[q])&&Aa(a[q]))Object.assign(g[q],a[q]),(q==="navigation"||q==="pagination"||q==="scrollbar")&&"enabled"in a[q]&&!a[q].enabled&&_(q);else{const F=a[q];(F===!0||F===!1)&&(q==="navigation"||q==="pagination"||q==="scrollbar")?F===!1&&_(q):g[q]=a[q]}}),m.includes("controller")&&!M&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&n&&b&&g.virtual.enabled?(b.slides=n,b.update(!0)):o.includes("virtual")&&b&&g.virtual.enabled&&(n&&(b.slides=n),b.update(!0)),o.includes("children")&&n&&g.loop&&(P=!0),L&&j.init()&&j.update(!0),M&&(t.controller.control=g.controller.control),E&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(g.pagination.el=p),v.init(),v.render(),v.update()),T&&(t.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-scrollbar"),u.part.add("scrollbar"),t.el.appendChild(u)),u&&(g.scrollbar.el=u),C.init(),C.updateSize(),C.setTranslate()),k&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),Kc(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-prev"),Kc(d,t.hostEl.constructor.prevButtonSvg),d.part.add("button-prev"),t.el.appendChild(d))),l&&(g.navigation.nextEl=l),d&&(g.navigation.prevEl=d),y.init(),y.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(O||P)&&t.loopDestroy(),(N||P)&&t.loopCreate(),t.update()}function RV(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},a={},o={};Or(n,Yp),n._emitClasses=!0,n.init=!1;const l={},d=kw.map(p=>p.replace(/_/,"")),u=Object.assign({},e);return Object.keys(u).forEach(p=>{typeof e[p]>"u"||(d.indexOf(p)>=0?Aa(e[p])?(n[p]={},o[p]={},Or(n[p],e[p]),Or(o[p],e[p])):(n[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?a[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:n.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:l[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{n[p]===!0&&(n[p]={}),n[p]===!1&&delete n[p]}),{params:n,passedParams:o,rest:l,events:a}}function VV(e,t){let{el:n,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:d,swiper:u}=e;Dw(t)&&a&&o&&(u.params.navigation.nextEl=a,u.originalParams.navigation.nextEl=a,u.params.navigation.prevEl=o,u.originalParams.navigation.prevEl=o),Hw(t)&&l&&(u.params.pagination.el=l,u.originalParams.pagination.el=l),zw(t)&&d&&(u.params.scrollbar.el=d,u.originalParams.scrollbar.el=d),u.init(n)}function kV(e,t,n,a,o){const l=[];if(!t)return l;const d=p=>{l.indexOf(p)<0&&l.push(p)};if(n&&a){const p=a.map(o),m=n.map(o);p.join("")!==m.join("")&&d("children"),a.length!==n.length&&d("children")}return kw.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if(Aa(e[p])&&Aa(t[p])){const m=Object.keys(e[p]),g=Object.keys(t[p]);m.length!==g.length?d(p):(m.forEach(v=>{e[p][v]!==t[p][v]&&d(p)}),g.forEach(v=>{e[p][v]!==t[p][v]&&d(p)}))}else e[p]!==t[p]&&d(p)}),l}const DV=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Qc(){return Qc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Qc.apply(this,arguments)}function Nw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function $w(e){const t=[];return De.Children.toArray(e).forEach(n=>{Nw(n)?t.push(n):n.props&&n.props.children&&$w(n.props.children).forEach(a=>t.push(a))}),t}function HV(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return De.Children.toArray(e).forEach(a=>{if(Nw(a))t.push(a);else if(a.props&&a.props.slot&&n[a.props.slot])n[a.props.slot].push(a);else if(a.props&&a.props.children){const o=$w(a.props.children);o.length>0?o.forEach(l=>t.push(l)):n["container-end"].push(a)}else n["container-end"].push(a)}),{slides:t,slots:n}}function zV(e,t,n){if(!n)return null;const a=g=>{let v=g;return g<0?v=t.length+g:v>=t.length&&(v=v-t.length),v},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:l,to:d}=n,u=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,m=[];for(let g=u;g<p;g+=1)g>=l&&g<=d&&m.push(t[a(g)]);return m.map((g,v)=>De.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${v}`}))}function fo(e,t){return typeof window>"u"?R.useEffect(e,t):R.useLayoutEffect(e,t)}const rv=R.createContext(null),PV=R.createContext(null),Yt=R.forwardRef(function(e,t){let{className:n,tag:a="div",wrapperTag:o="div",children:l,onSwiper:d,...u}=e===void 0?{}:e,p=!1;const[m,g]=R.useState("swiper"),[v,y]=R.useState(null),[C,b]=R.useState(!1),j=R.useRef(!1),L=R.useRef(null),M=R.useRef(null),E=R.useRef(null),T=R.useRef(null),k=R.useRef(null),O=R.useRef(null),N=R.useRef(null),P=R.useRef(null),{params:_,passedParams:q,rest:F,events:K}=RV(u),{slides:ne,slots:le}=HV(l),ue=()=>{b(!C)};Object.assign(_.on,{_containerClasses(ie,V){g(V)}});const oe=()=>{Object.assign(_.on,K),p=!0;const ie={..._};if(delete ie.wrapperClass,M.current=new o1(ie),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=ne;const V={cache:!1,slides:ne,renderExternal:y,renderExternalUpdate:!1};Or(M.current.params.virtual,V),Or(M.current.originalParams.virtual,V)}};L.current||oe(),M.current&&M.current.on("_beforeBreakpoint",ue);const B=()=>{p||!K||!M.current||Object.keys(K).forEach(ie=>{M.current.on(ie,K[ie])})},W=()=>{!K||!M.current||Object.keys(K).forEach(ie=>{M.current.off(ie,K[ie])})};R.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",ue)}),R.useEffect(()=>{!j.current&&M.current&&(M.current.emitSlidesClasses(),j.current=!0)}),fo(()=>{if(t&&(t.current=L.current),!!L.current)return M.current.destroyed&&oe(),VV({el:L.current,nextEl:k.current,prevEl:O.current,paginationEl:N.current,scrollbarEl:P.current,swiper:M.current},_),d&&!M.current.destroyed&&d(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),fo(()=>{B();const ie=kV(q,E.current,ne,T.current,V=>V.key);return E.current=q,T.current=ne,ie.length&&M.current&&!M.current.destroyed&&OV({swiper:M.current,slides:ne,passedParams:q,changedParams:ie,nextEl:k.current,prevEl:O.current,scrollbarEl:P.current,paginationEl:N.current}),()=>{W()}}),fo(()=>{DV(M.current)},[v]);function J(){return _.virtual?zV(M.current,ne,v):ne.map((ie,V)=>De.cloneElement(ie,{swiper:M.current,swiperSlideIndex:V}))}return De.createElement(a,Qc({ref:L,className:Pw(`${m}${n?` ${n}`:""}`)},F),De.createElement(PV.Provider,{value:M.current},le["container-start"],De.createElement(o,{className:LV(_.wrapperClass)},le["wrapper-start"],J(),le["wrapper-end"]),Dw(_)&&De.createElement(De.Fragment,null,De.createElement("div",{ref:O,className:"swiper-button-prev"}),De.createElement("div",{ref:k,className:"swiper-button-next"})),zw(_)&&De.createElement("div",{ref:P,className:"swiper-scrollbar"}),Hw(_)&&De.createElement("div",{ref:N,className:"swiper-pagination"}),le["container-end"]))});Yt.displayName="Swiper";const qt=R.forwardRef(function(e,t){let{tag:n="div",children:a,className:o="",swiper:l,zoom:d,lazy:u,virtualIndex:p,swiperSlideIndex:m,...g}=e===void 0?{}:e;const v=R.useRef(null),[y,C]=R.useState("swiper-slide"),[b,j]=R.useState(!1);function L(k,O,N){O===v.current&&C(N)}fo(()=>{if(typeof m<"u"&&(v.current.swiperSlideIndex=m),t&&(t.current=v.current),!(!v.current||!l)){if(l.destroyed){y!=="swiper-slide"&&C("swiper-slide");return}return l.on("_slideClass",L),()=>{l&&l.off("_slideClass",L)}}}),fo(()=>{l&&v.current&&!l.destroyed&&C(l.getSlideClasses(v.current))},[l]);const M={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},E=()=>typeof a=="function"?a(M):a,T=()=>{j(!0)};return De.createElement(n,Qc({ref:v,className:Pw(`${y}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:T},g),d&&De.createElement(rv.Provider,{value:M},De.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof d=="number"?d:void 0},E(),u&&!b&&De.createElement("div",{className:"swiper-lazy-preloader"}))),!d&&De.createElement(rv.Provider,{value:M},E(),u&&!b&&De.createElement("div",{className:"swiper-lazy-preloader"})))});qt.displayName="SwiperSlide";const NV=w(Yt)`
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
`,$V=w(qt)`
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
`,BV=w.section`
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
`,IV=Je`
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
`,UV=Je`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-2px);
  }
`,_V=Je`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(2px);
  }
`,GV=Je`
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
`,YV=w.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,sv=w.button`
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
      ${IV} 0.6s ease,
      ${GV} 0.6s ease;
    transform: translateY(-2px);

    &::before {
      width: 300%;
      height: 300%;
    }

    ${e=>e.$bg==="#DBDBD8"&&Xt`
        background-color: #c8c8c5;
        box-shadow: 0 4px 15px rgba(219, 219, 216, 0.4);

        svg {
          animation: ${UV} 0.4s ease;
        }
      `}

    ${e=>e.$bg==="#3098EE"&&Xt`
        background-color: #2580d6;
        box-shadow: 0 4px 15px rgba(48, 152, 238, 0.4);

        svg {
          animation: ${_V} 0.4s ease;
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
`,qV=w.div`
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
`,FV=w.p`
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
`,XV=w.p`
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
`,ZV=w.img`
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
`;const WV=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,KV=w.div`
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
`,QV=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,JV=w.div`
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
`;const ov=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ek=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,tk=w.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ik=w.div`
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
`,nk="/assets/Review%20Image%203-bwglEcYl.png",lv="/assets/Review%20Image%201-BysFOq9G.png",cv="/assets/Review%20Image%202-C_HtVc_c.png",dv="/assets/Review%20Image%205-B3ukDKHL.png",ak="/assets/Review%20Image%204-AW0fOgIu.png",rk=w.section`
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
`,sk=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,ok=w.p`
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
`,lk=w.h3`
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
`,Bw=w.span`
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
`,ck=w.div`
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
`,dk=w.div`
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
`,uk=w.div`
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
`,fk=w(uk)`
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
`,pk=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,hk=w.div`
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
`,mk=w.p`
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
`,gk=w.div`
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
`;function Iw(){const[e,t]=R.useState(null),[n,a]=R.useState(0),o=R.useRef(null),l=R.useRef(null),d=()=>{e&&e.slidePrev()},u=()=>{e&&e.slideNext()},p=[{image:nk,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:cv,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:dv,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:ak,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:lv,description:"An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:dv,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:cv,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:lv,description:"A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}],m={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},g={hidden:{opacity:0,scale:.9,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:te}}},v={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}},hover:{scale:1.1,transition:{duration:.2}},tap:{scale:.95}};return f.jsxs(BV,{children:[f.jsxs(qV,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:m,children:f.jsx(FV,{children:"Our Cases"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:m,transition:{delay:.1},children:f.jsxs(XV,{children:[f.jsx(Bw,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:g,children:f.jsx(ik,{children:f.jsx(NV,{modules:[oi],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:t,onSlideChange:y=>a(y.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:p.map(({image:y,description:C,title:b,type:j},L)=>f.jsx($V,{$isActive:n===L,$index:L,children:f.jsx(H.div,{whileHover:{scale:n===L?1.05:1.02,transition:{duration:.3}},whileTap:{scale:.98},children:f.jsxs(WV,{$isActive:n===L,$index:L,children:[f.jsx(H.div,{whileHover:{scale:1.1,transition:{duration:.4}},children:f.jsx(ZV,{src:y,alt:j,$isActive:n===L,$index:L})}),f.jsx(KV,{$isActive:n===L,$index:L,children:f.jsxs(QV,{children:[f.jsx(JV,{children:f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.7,y:n===L?0:5},transition:{duration:.3},children:f.jsx(ov,{children:C})})}),f.jsxs(ek,{children:[f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.8,y:n===L?0:5},transition:{duration:.3,delay:.1},children:f.jsx(tk,{children:b})}),f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.6,y:n===L?0:5},transition:{duration:.3,delay:.2},children:f.jsx(ov,{children:j})})]})]})})]})})},L))})})}),f.jsxs(YV,{children:[f.jsx(H.div,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(sv,{ref:o,$bg:"#DBDBD8",onClick:d,children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(H.div,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(sv,{ref:l,$bg:"#3098EE",onClick:u,children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})}const xk=w(H.div)`
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
`,vk=w.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,yk=({type:e,message:t,onClose:n,autoClose:a=!0,autoCloseDuration:o=25e3})=>{const{t:l}=a1();R.useEffect(()=>{if(a){const u=setTimeout(()=>{n()},o);return()=>clearTimeout(u)}},[a,o,n]);const d={success:l("alert.success"),error:l("alert.error")};return f.jsxs(xk,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[f.jsx("div",{children:t||d[e]}),f.jsx(vk,{onClick:n,children:"×"})]})},wk="/assets/ContactFormImage-CaQYWUqs.png",Cd=()=>{const[e,t]=R.useState(""),[n,a]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[d,u]=R.useState(null),[p,m]=R.useState(!1),g=()=>{m(!0)},v=()=>{m(!1)},y=T=>{const{name:k,value:O}=T.target;a(N=>({...N,[k]:O})),l(N=>({...N,[k]:!1}))},C=()=>{const T={};return e||(T.service=!0),n.name||(T.name=!0),n.email||(T.email=!0),n.phone||(T.phone=!0),n.location||(T.location=!0),n.appliance||(T.appliance=!0),n.brand||(T.brand=!0),n.power||(T.power=!0),T},b=async T=>{T.preventDefault();const k=C();if(Object.keys(k).length>0){l(k),u({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...n})})).ok)t(""),a({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),u({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(O){console.error("Error submitting form:",O),u({type:"error",message:"There was an error submitting the form. Please try again."})}},j={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},L={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.7,ease:te}}},M={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:te}},focus:{scale:1.02,transition:{duration:.2}}},E={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return f.jsxs(f.Fragment,{children:[f.jsxs(jk,{children:[f.jsxs(hv,{children:[f.jsxs(V0,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,children:f.jsxs(Ak,{children:[" ",f.jsx("span",{children:"Contact"})," our team"]})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.1},children:f.jsx(fc,{children:"We love our customers, so feel free to call during normal business hours"})})]})," ",f.jsx(H.div,{variants:E,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(Mk,{children:f.jsx(Lk,{children:"Call Us for Fast Repair"})})})}),f.jsxs(hv,{children:[f.jsx(Ok,{}),f.jsxs(Rk,{children:[f.jsxs(mv,{width:"251px",children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,children:f.jsx(gv,{children:"Service Hours"})}),f.jsx(V0,{children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.2},children:f.jsxs(fc,{children:["Mon–Sat: 8AM–6PM ",f.jsx("br",{})," Sun: 9AM–4PM"," "]})})})]}),f.jsxs(mv,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.3},children:f.jsx(gv,{children:"Our Location"})}),f.jsxs(V0,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.4},children:f.jsxs("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:[" ",f.jsx(fc,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:.5},children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(fc,{children:"+1 (805) 500-2705"})})})]})]})]})]})]}),f.jsx(H.div,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},children:f.jsxs(bk,{onSubmit:b,children:[f.jsx(H.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,ease:te},children:f.jsx(Vk,{src:wk,alt:"contact image"})}),f.jsx(fn,{children:"What service do you need for your appliances?"}),f.jsxs(Sk,{children:[f.jsx(H.div,{variants:M,whileHover:"hover",children:f.jsxs(uv,{style:o.service?{borderColor:"red"}:{},children:[f.jsx(fv,{name:"service",value:"Repair",checked:e==="Repair",onChange:T=>t(T.target.value)}),f.jsx(pv,{checked:e==="Repair"}),"Repair"]})}),f.jsx(H.div,{variants:M,transition:{delay:.1},whileHover:"hover",children:f.jsxs(uv,{style:o.service?{borderColor:"red"}:{},children:[f.jsx(fv,{name:"service",value:"Installation",checked:e==="Installation",onChange:T=>t(T.target.value)}),f.jsx(pv,{checked:e==="Installation"}),"Installation"]})})]}),f.jsxs(kk,{children:[f.jsxs(Dk,{children:[f.jsx(fn,{children:"Name"}),f.jsx(H.div,{variants:M,transition:{delay:.2},whileFocus:"focus",children:f.jsx(R0,{name:"name",type:"text",placeholder:"Your Name",value:n.name,onChange:y,style:o.name?{borderBottom:"1px solid red"}:{}})}),f.jsx(fn,{children:"Email"}),f.jsx(H.div,{variants:M,transition:{delay:.3},whileFocus:"focus",children:f.jsx(R0,{name:"email",type:"email",placeholder:"Your Email",value:n.email,onChange:y,style:o.email?{borderBottom:"1px solid red"}:{}})}),f.jsx(fn,{children:"Phone Number"}),f.jsx(H.div,{variants:M,transition:{delay:.4},whileFocus:"focus",children:f.jsx(R0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:n.phone,onChange:y,style:o.phone?{borderBottom:"1px solid red"}:{}})})]}),f.jsxs(Hk,{children:[f.jsx(fn,{children:"In what location do you need the service?"}),f.jsx(H.div,{variants:M,transition:{delay:.5},whileFocus:"focus",children:f.jsx(dc,{children:f.jsxs(uc,{name:"location",value:n.location,onChange:y,style:o.location?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select location"}),f.jsx("option",{children:"Malibu"}),f.jsx("option",{children:"Los Angeles County"}),f.jsx("option",{children:"Thousand Oaks"}),f.jsx("option",{children:"Newbury Park"}),f.jsx("option",{children:"Westlake Village"}),f.jsx("option",{children:"Oak Park"}),f.jsx("option",{children:"Lake Sherwood"}),f.jsx("option",{children:"Hidden Valley"}),f.jsx("option",{children:"Camarillo"}),f.jsx("option",{children:"Agoura Hills"}),f.jsx("option",{children:"Moorpark"}),f.jsx("option",{children:"Calabasas"}),f.jsx("option",{children:"Santa Rosa Valley"}),f.jsx("option",{children:"Other"})]})})}),f.jsx(fn,{children:"What do you need repaired?"}),f.jsx(H.div,{variants:M,transition:{delay:.6},whileFocus:"focus",children:f.jsx(dc,{children:f.jsxs(uc,{name:"appliance",value:n.appliance,onChange:y,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select appliance"}),f.jsx("option",{children:"Cooktop"}),f.jsx("option",{children:"Oven"}),f.jsx("option",{children:"Range"}),f.jsx("option",{children:"Washer"}),f.jsx("option",{children:"Refrigerator"}),f.jsx("option",{children:"Microwave"}),f.jsx("option",{children:"Dishwasher"}),f.jsx("option",{children:"Dryer"}),f.jsx("option",{children:"Washing Machine"}),f.jsx("option",{children:"Freezer"}),f.jsx("option",{children:"Stove"}),f.jsx("option",{children:"Wine Cooler"}),f.jsx("option",{children:"Other"})]})})}),f.jsx(fn,{children:"Brand of appliance"}),f.jsx(H.div,{variants:M,transition:{delay:.7},whileFocus:"focus",children:f.jsx(dc,{children:f.jsxs(uc,{name:"brand",value:n.brand,onChange:y,style:o.brand?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select brand"}),f.jsx("option",{children:"LG"}),f.jsx("option",{children:"Samsung"}),f.jsx("option",{children:"Whirlpool"}),f.jsx("option",{children:"Bosch"}),f.jsx("option",{children:"GE"}),f.jsx("option",{children:"Frigidaire"}),f.jsx("option",{children:"Maytag"}),f.jsx("option",{children:"KitchenAid"}),f.jsx("option",{children:"Viking"}),f.jsx("option",{children:"Fisher & Paykel"}),f.jsx("option",{children:"Amana"}),f.jsx("option",{children:"JennAir"}),f.jsx("option",{children:"Haier"}),f.jsx("option",{children:"Sharp"}),f.jsx("option",{children:"Electrolux"}),f.jsx("option",{children:"Sub-Zero"}),f.jsx("option",{children:"Thermador"}),f.jsx("option",{children:"Wolf"}),f.jsx("option",{children:"Other"})]})})})]})]}),f.jsx(fn,{children:"What type of power does this appliance use?"}),f.jsx(H.div,{variants:M,transition:{delay:.8},whileFocus:"focus",children:f.jsx(dc,{children:f.jsxs(uc,{name:"power",value:n.power,onChange:y,style:o.power?{borderBottom:"1px solid red"}:{},children:[f.jsx("option",{value:"",children:"Select power"}),f.jsx("option",{children:"Electric"}),f.jsx("option",{children:"Gas"}),f.jsx("option",{children:"Dual Fuel"}),f.jsx("option",{children:"Induction"}),f.jsx("option",{children:"Solar"}),f.jsx("option",{children:"Propane"}),f.jsx("option",{children:"Natural Gas"}),f.jsx("option",{children:"Other"})]})})}),f.jsx(fn,{children:"Any details you'd like to add?"}),f.jsx(H.div,{variants:M,transition:{delay:.9},whileFocus:"focus",children:f.jsx(Ck,{name:"details",placeholder:"Any details you'd like to add?",value:n.details,onChange:y})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:j,transition:{delay:1},children:f.jsxs(Ek,{children:['By clicking "Submit" you hereby agree to our'," ",f.jsx("span",{onClick:g,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]})}),f.jsx(H.div,{variants:E,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:1.1},whileHover:"hover",whileTap:"tap",children:f.jsx(Tk,{type:"submit",children:"Submit"})})]})}),f.jsx(Fh,{children:d&&f.jsx(yk,{type:d.type,message:d.message,onClose:()=>u(null)})})]})," ",p&&f.jsx(yw,{onClick:v,children:f.jsxs(ww,{onClick:T=>T.stopPropagation(),children:[f.jsx(bw,{onClick:v,children:"×"}),f.jsx(Sw,{})]})})]})},bk=w.form`
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
`,Sk=w.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uv=w.label`
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
`,fv=w.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,pv=w.span`
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
`,R0=w.input`
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
`,dc=w.div`
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
`,uc=w.select`
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
`,Ck=w.textarea`
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
`,Tk=w.button`
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
`,Ek=w.p`
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
`,jk=w.div`
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
`,hv=w.div`
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
`,V0=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ak=w.p`
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
`,Mk=w.button`
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
`,Lk=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Ok=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Rk=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mv=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,gv=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Vk=w.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,kk=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Dk=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,Hk=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,xv="/assets/Ellipse%204aleksey-FxWBDF7j.png",vv="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",yv="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",wv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",bv="/assets/Review%20Image-alexey-BS9M-VaX.png",Sv="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Cv="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Tv="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",pc=[{avatar:xv,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:bv},{avatar:vv,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Sv},{avatar:yv,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Cv},{avatar:wv,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Tv},{avatar:xv,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:bv},{avatar:vv,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:Sv},{avatar:yv,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Cv},{avatar:wv,name:"Elizabeth Castorena",time:"a week ago",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Tv}],Ev={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},k0={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:te}},hover:{y:-5,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.1)",transition:{duration:.3,ease:te}}},D0={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:te}},hover:{scale:1.1,rotate:5,transition:{duration:.2}}},H0={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}},hover:{scale:1.05,transition:{duration:.4}}},zk=w.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Pk=w.h2`
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
`,Nk=w.p`
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
`,$k=w.div`
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
`,z0=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${e=>e.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%;
    display: block;
  }
`,P0=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px;
`,N0=w.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,$0=w.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,B0=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I0=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,U0=w.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,_0=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,G0=w.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,Y0=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,q0=w.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Td=()=>{const[,e]=De.useState(!1),t=De.useRef(null),n=De.useRef(null),a=De.useRef(null),o=He({query:"(min-width: 768px)"}),l=He({query:"(min-width: 1440px)"});return f.jsxs("div",{children:[f.jsxs(zk,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Ev,children:f.jsx(Nk,{children:"Your Feedback Matters"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Ev,transition:{delay:.1},children:f.jsxs(Pk,{children:["Discover why clients ",f.jsx("span",{children:" trust "})," our repairs"]})})]}),f.jsxs($k,{ref:a,children:[f.jsxs(z0,{$isVisible:!0,children:[f.jsx(Y0,{}),f.jsx(q0,{}),f.jsx(Yt,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:4e3,loop:!0,modules:[oi],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:pc.map((d,u)=>f.jsx(qt,{children:f.jsx(H.div,{variants:k0,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(P0,{children:[f.jsxs(N0,{children:[f.jsx(H.div,{variants:D0,whileHover:"hover",children:f.jsx($0,{src:d.avatar,alt:d.name})}),f.jsxs(B0,{children:[f.jsx(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:f.jsx(I0,{children:d.name})}),f.jsx(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:f.jsx(U0,{children:d.time})})]})]}),f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:f.jsx(_0,{children:d.text})}),f.jsx(H.div,{variants:H0,whileHover:"hover",children:f.jsx(G0,{src:d.image,alt:`Review by ${d.name}`})})]})})},`top-${u}`))})]}),f.jsxs(z0,{$isVisible:o,children:[f.jsx(Y0,{}),f.jsx(q0,{}),f.jsx(Yt,{ref:n,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,reverseDirection:!0},speed:2e3,loop:!0,modules:[oi],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,initialSlide:pc.length-1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:pc.map((d,u)=>f.jsx(qt,{children:f.jsx(H.div,{variants:k0,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(P0,{children:[f.jsxs(N0,{children:[f.jsx(H.div,{variants:D0,whileHover:"hover",children:f.jsx($0,{src:d.avatar,alt:d.name})}),f.jsxs(B0,{children:[f.jsx(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:f.jsx(I0,{children:d.name})}),f.jsx(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:f.jsx(U0,{children:d.time})})]})]}),f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:f.jsx(_0,{children:d.text})}),f.jsx(H.div,{variants:H0,whileHover:"hover",children:f.jsx(G0,{src:d.image,alt:`Review by ${d.name}`})})]})})},`bottom-${u}`))})]}),l&&f.jsxs(z0,{$isVisible:!0,children:[f.jsx(Y0,{}),f.jsx(q0,{}),f.jsx(Yt,{direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:6e3,loop:!0,modules:[oi],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:pc.map((d,u)=>f.jsx(qt,{children:f.jsx(H.div,{variants:k0,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(P0,{children:[f.jsxs(N0,{children:[f.jsx(H.div,{variants:D0,whileHover:"hover",children:f.jsx($0,{src:d.avatar,alt:d.name})}),f.jsxs(B0,{children:[f.jsx(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:f.jsx(I0,{children:d.name})}),f.jsx(H.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:f.jsx(U0,{children:d.time})})]})]}),f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:f.jsx(_0,{children:d.text})}),f.jsx(H.div,{variants:H0,whileHover:"hover",children:f.jsx(G0,{src:d.image,alt:`Review by ${d.name}`})})]})})},`desktop-${u}`))})]})]})]})},Bk="/assets/Hero%20Image-CELmD3oB.png",l1="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Jc="/assets/2-lv1xptCk.svg",c1="/assets/3-xYBlE7jA.svg",d1="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",u1="/assets/5-DtA_MHfM.svg",f1="/assets/6-BYfTVs51.svg",p1="/assets/7-DtKFqDn5.svg",h1="/assets/8-C9mdpuht.svg",m1="/assets/9-1he0Czj8.svg",g1="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",x1="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",v1="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",y1="/assets/13-_M_Krupi.svg",w1="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",b1="/assets/15-VL89vzXY.svg",S1="/assets/16-D9KRuHZe.svg",C1="/assets/17-BRD6G3-l.svg",T1="/assets/18-D69HL7ID.svg",E1="/assets/19-Dos04ydj.svg",j1="/assets/21-BwEZSGFZ.svg",A1="/assets/22-CQ_f5juP.svg",M1="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",L1="/assets/24-Dmws8xhr.svg",O1="/assets/25-BaRLqQy_.svg",R1="/assets/26-B2H6SqHt.svg",V1="/assets/27-DBraEacE.svg",k1="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",D1="/assets/29-yivH26vR.svg",H1="/assets/30-DGc1459t.svg",z1="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",Ik=[{id:1,imageUrl:l1},{id:2,imageUrl:Jc},{id:3,imageUrl:c1},{id:4,imageUrl:d1},{id:5,imageUrl:u1},{id:6,imageUrl:f1},{id:7,imageUrl:p1},{id:8,imageUrl:h1},{id:9,imageUrl:m1},{id:10,imageUrl:g1},{id:11,imageUrl:x1},{id:12,imageUrl:v1},{id:13,imageUrl:y1},{id:14,imageUrl:w1},{id:15,imageUrl:b1},{id:16,imageUrl:S1},{id:17,imageUrl:C1},{id:18,imageUrl:T1},{id:19,imageUrl:E1},{id:20,imageUrl:Jc},{id:21,imageUrl:j1},{id:22,imageUrl:A1},{id:23,imageUrl:M1},{id:24,imageUrl:L1},{id:25,imageUrl:O1},{id:26,imageUrl:R1},{id:27,imageUrl:V1},{id:28,imageUrl:k1},{id:29,imageUrl:D1},{id:30,imageUrl:H1},{id:31,imageUrl:z1}],Uk=w.div`
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
`,_k=w.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,Gk=w(Yt)`
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
`,Yk=()=>f.jsx(Uk,{children:f.jsx(Gk,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[oi],grabCursor:!1,allowTouchMove:!1,children:Ik.map(e=>f.jsx(qt,{children:f.jsx(_k,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),jv={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},Av={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,delay:.3,ease:Ct}}},qk=()=>{const e=He({query:"(min-width: 1440px)"}),{scrollY:t}=vn(),n=Ze(t,[0,500],[0,80]),a=Ze(t,[0,300],[1,.9]),o=Ze(t,[0,400],[1,1.03]),l=Ze(t,[0,600],[0,-2]);return f.jsxs(LO,{id:"hero",children:[f.jsx(H.div,{style:{y:n,opacity:a,scale:o,rotate:l},children:f.jsx(OO,{src:Bk,alt:"Hero Image",style:{transformStyle:"preserve-3d",transform:"translateZ(0)"}})}),e&&f.jsx(H.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!1,amount:.3},transition:{duration:.8,delay:.5,ease:te},children:f.jsx(Yk,{})}),f.jsxs(RO,{children:[f.jsxs(VO,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:jv,children:f.jsx(kO,{children:"Your Local Appliance Repair & Maintenance Specialists"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:jv,transition:{delay:.2},children:f.jsx(DO,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})})]}),f.jsxs(HO,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Av,children:f.jsx(vw,{to:"/contact#ap",children:"Contact Us"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Av,transition:{delay:.1},children:f.jsx(R5,{children:f.jsx("a",{href:"tel:+18055002705",children:" Call Us"})})})]})]})]})},Fk="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",Xk="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",Zk="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Wk="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Mv=[{img:Fk,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:Xk,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:Zk,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:Wk,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],Lv={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},Kk={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:te}},hover:{y:-10,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}}},Qk={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}},hover:{scale:1.05,transition:{duration:.4}}},Ov={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:te}}},Jk=()=>{const e=R.useRef(null),t=He({query:"(max-width: 767px)"}),n=He({query:"(min-width: 768px)"}),a=He({query:"(min-width: 1440px)"}),o=t?1:2,l=Mv.length>o;return f.jsxs(rD,{children:[f.jsxs(sD,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Lv,children:f.jsx(oD,{children:"NEWS & TIPS"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Lv,transition:{delay:.1},children:f.jsxs(lD,{children:["APPLIANCE ",f.jsx("span",{children:"ADVICE"})," REPAIR ",f.jsx("span",{children:"TIPS"})," BLOG"]})})]}),f.jsxs(aD,{children:[f.jsx(H.div,{whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:.2},children:f.jsx(Rv,{onClick:()=>{var d;return(d=e.current)==null?void 0:d.slidePrev()},bg:"#DBDBD8",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(H.div,{whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:.2,delay:.1},children:f.jsx(Rv,{onClick:()=>{var d;return(d=e.current)==null?void 0:d.slideNext()},bg:"#3098EE",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),f.jsx(eD,{$isTablet:n,children:f.jsx(Yt,{modules:[s1,oi],onSwiper:d=>e.current=d,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Mv.map((d,u)=>f.jsx(qt,{children:f.jsx(H.div,{variants:Kk,whileInView:"visible",viewport:{once:!1,amount:.2},transition:{delay:u*.1},children:f.jsxs(cD,{$isTablet:n,children:[f.jsx(H.div,{variants:Qk,whileHover:"hover",children:f.jsx(dD,{src:d.img,alt:d.title,$isTablet:n})}),f.jsxs(uD,{children:[f.jsx(H.div,{variants:Ov,transition:{delay:u*.1+.1},children:f.jsx(fD,{$isTablet:n,children:d.title})}),f.jsx(H.div,{variants:Ov,transition:{delay:u*.1+.2},children:f.jsx(pD,{$isTablet:n,children:d.description})})]})]})})},u))})})]})},eD=w.div`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,tD=Je`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,iD=Je`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,nD=Je`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,aD=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Rv=w.button`
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
    animation: ${tD} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&Xt`
      background-color: #c8c8c5;
      svg {
        animation: ${iD} 0.4s ease;
      }
    `}

    ${e=>e.bg==="#3098EE"&&Xt`
      background-color: #2580d6;
      svg {
        animation: ${nD} 0.4s ease;
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
`,rD=w.div`
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
`,sD=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,oD=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);
  
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,lD=w.p`
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
`,cD=w.div`
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
`,dD=w.img`
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
`,uD=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
   border-radius: 10px;
`,fD=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,pD=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,hD=w.div`
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
`;const Vv=w.img`
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
`,mD=w(H.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,gD=w(H.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,xD=w.h3`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`,Uw="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",_w=()=>{const e=He({query:"(max-width: 743px)"}),t=He({query:"(min-width: 744px) and (max-width: 1023px)"}),n=He({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:l1},{id:2,imageUrl:Jc},{id:3,imageUrl:c1},{id:4,imageUrl:d1},{id:5,imageUrl:u1},{id:6,imageUrl:f1},{id:7,imageUrl:p1},{id:8,imageUrl:h1},{id:9,imageUrl:m1},{id:10,imageUrl:g1},{id:11,imageUrl:x1},{id:12,imageUrl:v1},{id:13,imageUrl:y1},{id:14,imageUrl:w1},{id:15,imageUrl:b1},{id:16,imageUrl:S1},{id:17,imageUrl:C1},{id:18,imageUrl:T1},{id:19,imageUrl:E1},{id:20,imageUrl:Uw},{id:21,imageUrl:j1},{id:22,imageUrl:A1},{id:23,imageUrl:M1},{id:24,imageUrl:L1},{id:25,imageUrl:O1},{id:26,imageUrl:R1},{id:27,imageUrl:V1},{id:28,imageUrl:k1},{id:29,imageUrl:D1},{id:30,imageUrl:H1},{id:31,imageUrl:z1}],o=e?2:t?4:5,l=a.length>o,d={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},u={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:te}},hover:{scale:1.1,y:-5,transition:{duration:.3,ease:te}}};return f.jsxs("div",{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(xD,{children:"Quality Service for Major & Luxury Brands"})}),f.jsxs(hD,{children:[f.jsx(mD,{}),f.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map((p,m)=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:u,transition:{delay:m*.05},whileHover:"hover",children:f.jsx(Vv,{src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy"})})},p.id))}),f.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%"},children:a.map((p,m)=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:u,transition:{delay:m*.05+.1},whileHover:"hover",children:f.jsx(Vv,{src:p.imageUrl,alt:`Partner ${p.id}`,loading:"lazy"})})},p.id+100))}),f.jsx(gD,{})]})]})},Gw="/assets/ServicesImage-BRQYmF9y.png",vD=w.div`
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
`,yD=w.p`
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
`,wD=w.div`
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
`,bD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kv=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,SD=w.p`
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
`,CD=w.p`
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
`,Dv=w.p`
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
`,TD=w.p`
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
`,ED=w.img`
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
`,Hv=w.div`
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
`,zv=w.p`
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
`,qp=w(Tt)`
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
`,Pv=w.p`
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
`,jD=w.div`
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
`,AD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,LD=w.p`
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
`,OD=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,RD=w(Tt)`
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
`,P1=w.button`
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
`,Yw=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${P1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,VD=w(Yw)`
  color: #242424;

  ${P1}:hover & {
    color: white;
  }
`,kD=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,F0={hidden:{opacity:0,y:60,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:te}}},X0={hidden:{opacity:0,x:-80,rotate:-2},visible:{opacity:1,x:0,rotate:0,transition:{duration:.9,ease:te}}},hc={hidden:{opacity:0,x:80,scale:1.05},visible:{opacity:1,x:0,scale:1,transition:{duration:.9,ease:te}}},DD={hidden:{opacity:0,scale:.9,filter:"blur(10px)"},visible:{opacity:1,scale:1,filter:"blur(0px)",transition:{duration:1.1,ease:Lh}}},HD={visible:{transition:{staggerChildren:.15}}},zD=()=>{const e=He({query:"(min-width: 1440px)"}),{scrollY:t}=vn(),n=Ze(t,[0,500],[0,-50]),a=Ze(t,[0,400],[1,1.02]);return f.jsxs(vD,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:F0,children:f.jsx(yD,{children:"Our Service"})}),f.jsxs(wD,{children:[f.jsxs(bD,{children:[f.jsxs(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:HD,children:[f.jsx(H.div,{variants:X0,children:f.jsxs(kv,{children:[f.jsx(SD,{children:"01."}),f.jsx(CD,{children:"Appliance Care & Tune-Ups"})]})}),f.jsx(H.div,{variants:X0,transition:{delay:.1},children:f.jsx(Dv,{children:"Professional Installations"})}),f.jsx(H.div,{variants:X0,transition:{delay:.2},children:f.jsx(Dv,{children:"Fast & Reliable Emergency Repairs"})})]}),e&&f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:F0,transition:{delay:.4},children:f.jsxs(Hv,{children:[f.jsx(zv,{children:"Do you want to know more about our service?"}),f.jsx(qp,{to:"/fridge#ap",children:f.jsx(Pv,{children:"Learn more"})})]})})]}),f.jsxs(kD,{children:[f.jsx(H.div,{style:{y:n,scale:a},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:DD,children:f.jsx(ED,{src:Gw,alt:"Services Image"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:hc,children:f.jsxs(jD,{children:[f.jsxs(AD,{children:[f.jsx(H.div,{variants:hc,transition:{delay:.1},children:f.jsx(kv,{children:f.jsx(TD,{children:"Preventive Care"})})}),f.jsx(H.div,{variants:hc,transition:{delay:.2},children:f.jsx(MD,{children:f.jsx(LD,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),f.jsx(H.div,{variants:hc,transition:{delay:.3},children:f.jsxs(OD,{children:[f.jsx(RD,{to:"/contact#ap",children:f.jsx(Yw,{children:"Contact Us"})}),f.jsx(P1,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(VD,{children:"Call Us"})})})]})})]})})]}),!e&&f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:F0,children:f.jsxs(Hv,{children:[f.jsx(zv,{children:"Do you want to know more about our service?"}),f.jsx(qp,{to:"/fridge#ap",children:f.jsx(Pv,{children:"Learn more"})})]})})]})]})},PD="/assets/Service%20Area%20Section-B7et7wWI.webp",ND=w.div`
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
`,$D=w.h2`
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
`,BD=w.p`
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
`,ID=w.div`
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
`,UD=w.div`
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
`,_D=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,GD=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YD=w.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,qD=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,FD=[{county:"Ventura County",city:"Thousand Oaks",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:f.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:f.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:f.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:f.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],Nv={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},XD={hidden:{opacity:0,y:50,scale:.9,rotateX:-5},visible:e=>({opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.6,delay:e*.1,ease:te}}),hover:{y:-10,scale:1.05,rotateY:5,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}},tap:{scale:.98}},ZD={hidden:{opacity:0,scale:.8,rotate:-90},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:Ct}},hover:{scale:1.2,rotate:5,transition:{duration:.2}}},WD=()=>f.jsxs(ND,{$bg:PD,children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Nv,children:f.jsx($D,{children:"Serving Ventura and Los Angeles Counties"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Nv,transition:{delay:.1},children:f.jsx(BD,{children:"We provide expert service throughout the greater Los Angeles area."})}),f.jsx(ID,{children:FD.map((e,t)=>f.jsx(H.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:XD,whileHover:"hover",whileTap:"tap",children:f.jsxs(UD,{children:[f.jsxs(_D,{children:[f.jsx(H.div,{variants:ZD,whileHover:"hover",children:f.jsx(GD,{children:e.icon})}),f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.2},children:f.jsx(YD,{children:e.county})})]}),f.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.3},children:f.jsx(qD,{children:e.city})})]})},t))})]}),KD="/assets/WhyAirtexnoImage-BBTHkk8n.png",$v="/assets/WhyAirtexnoImage2-BIh43Sbv.png",QD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",Z0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",JD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",eH=()=>{const e=He({query:"(max-width: 743px)"}),t=He({query:"(min-width: 744px) and (max-width: 1023px)"}),n=He({query:"(min-width: 1024px)"}),a=He({query:"(min-width: 1440px)"}),o=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:KD,icon:Z0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:$v,icon:JD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:QD,icon:Z0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:$v,icon:Z0}],l=e?1:t?2:3,d=o.length>l,u={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},p={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}}};return f.jsxs(rk,{children:[f.jsxs(sk,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(ok,{children:"why airtexno"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.1},children:f.jsxs(lk,{children:["Same-Day Appliance Repair ",f.jsx(Bw,{children:"You Can Rely On"})," "]})})]}),f.jsx(gk,{children:f.jsx(dk,{$isLargeDesktop:a,children:f.jsx(Yt,{modules:[yR,oi],pagination:{clickable:!0},spaceBetween:a?0:20,loop:d,slidesPerView:l,centeredSlides:a,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,className:"businessSwiper",children:o.map((m,g)=>f.jsx(qt,{children:f.jsx(fk,{style:{backgroundImage:`url(${m.image})`},$isLargeDesktop:a,className:"slide-container",children:(m.title||m.text||m.icon)&&f.jsxs(H.div,{className:"overlay",initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:p,whileHover:{scale:1.02,transition:{duration:.3}},children:[(m.title||m.icon)&&f.jsxs(pk,{children:[m.title&&f.jsx(H.div,{variants:u,children:f.jsx(ck,{children:m.title})}),m.icon&&f.jsx(H.div,{variants:u,transition:{delay:.2},children:f.jsx(hk,{className:"icon-wrapper",children:f.jsx("img",{src:m.icon,alt:m.title||"icon",className:"icon-image"})})})]}),m.text&&f.jsx(H.div,{variants:u,transition:{delay:.3},children:f.jsx(mk,{className:"slide-text",children:m.text})})]})})},g))})})})]})},tH=w.div`
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
`,W0=()=>f.jsx(f.Fragment,{children:f.jsxs(tH,{id:"hero",children:[f.jsx(qk,{}),f.jsx(zD,{}),f.jsx(eH,{}),f.jsx(Iw,{}),f.jsx(WD,{}),f.jsx(_w,{}),f.jsx(Td,{}),f.jsx(Jk,{}),f.jsx(Cd,{})]})}),iH=w.div`
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
  `,nH="/assets/Team%20Member%20Image-mppsJqlp.png",aH="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",rH=Je`
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
`,sH=Je`
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
`,oH=Je`
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
`,Fp=w.p`
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
`,lH=w.button`
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
      ${sH} 1s ease,
      ${oH} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${rH} 1s ease;
    }

    ${Fp} {
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

    &:hover ${Fp} {
      transform: translateX(3px);
    }
  }
`,cH=w.div`
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
`,dH=w.div`
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
`,uH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,fH=w.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,pH=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,hH=w.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,mH=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,gH=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,xH=w.div`
  position: relative;
  width: 44px;
  height: 44px;
`,vH=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,yH=w.p`
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
const wH=w.div`
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
`,bH=w.h2`
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
`;const SH=w.div`
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
`,CH=w.button`
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
`,TH=w.div`
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
`,EH=w.img.attrs(()=>({}))`
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
`,jH=w.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,AH=w.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,N1=()=>{const[e,t]=R.useState(null),n=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],a=y=>{t(C=>C===y?null:y)},o={hidden:{opacity:0,scale:.8,rotate:-20,x:-50},visible:{opacity:1,scale:1,rotate:0,x:0,transition:{duration:1.2,ease:Ct,delay:.2}},hover:{scale:1.05,rotate:5,transition:{duration:.4,ease:te}}},l={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:.8,ease:te,delay:.4}},hover:{scale:1.1,boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:te}},tap:{scale:.95}},d={hidden:{opacity:0,y:30,rotate:-5},visible:{opacity:1,y:0,rotate:0,transition:{duration:.9,ease:Ct,delay:.6}},hover:{y:-5,rotate:2,transition:{duration:.3,ease:te}}},u={hidden:{opacity:0,x:-100,rotate:-10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:te}}},p={hidden:{opacity:0,x:100,rotate:10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:te}}},m={hidden:{opacity:0,height:0,scale:.9},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:te}}},g={hidden:{opacity:0,y:-30,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,y:0,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 30px rgba(48, 152, 238, 0.8)","0 0 15px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:te,delay:.1}}},v=y=>y*.15;return f.jsxs(cH,{children:[f.jsxs(dH,{children:[f.jsxs(uH,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,whileHover:"hover",children:f.jsx(fH,{src:nH,alt:"Team Member Image"})}),f.jsxs(pH,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,children:f.jsx(hH,{children:"Book a Call"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,transition:{delay:.2},children:f.jsx(mH,{children:"Time to get introduced and explore how we can help"})}),f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileTap:"tap",children:f.jsx("a",{href:"tel:+18055002705",children:f.jsxs(lH,{children:[f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx(Fp,{children:"Call us now"})]})})})]})]}),f.jsx(gH,{children:f.jsxs(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,whileHover:"hover",children:[f.jsxs(xH,{children:[f.jsx(vH,{}),f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:f.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),f.jsxs(yH,{children:["Prefer email communication?",f.jsx("br",{}),f.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})})]}),f.jsxs(wH,{children:[f.jsx(jH,{children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,children:f.jsx(bH,{children:"Frequently Asked Questions"})})}),f.jsx(AH,{children:n.map((y,C)=>f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:C%2===0?u:p,transition:{delay:v(C)},children:f.jsxs(SH,{children:[f.jsxs(CH,{onClick:()=>a(C),children:[y.question,f.jsx(EH,{src:aH,alt:"Toggle answer",$rotate:e===C})]}),f.jsx(H.div,{initial:"hidden",animate:e===C?"visible":"hidden",variants:m,style:{overflow:"hidden"},children:f.jsx(TH,{$isOpen:e===C,children:y.answer})})]})},C))})]})]})},MH=w.div`
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
`,LH=w.img`
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
`,OH=w.div`
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
`,RH=w.div`
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
`,VH=w.p`
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
`,kH=w.p`
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
`;w(Tt)`
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
`;Je`
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
`;const DH="/assets/HeroImage2About-CoU9D2Tq.png",HH=()=>{const{scrollY:e}=vn(),t=Ze(e,[0,500],[0,150]),n=Ze(e,[0,400],[1,1.1]),a=Ze(e,[0,600],[0,-3]),o=Ze(e,[0,300],[0,50]),l=Ze(e,[0,200],[1,.8]),d={hidden:{opacity:0,x:-100,skewX:15},visible:{opacity:1,x:0,skewX:0,transition:{duration:1.2,ease:te,delay:.5}}},u={hidden:{opacity:0,y:50,scaleY:0,filter:"blur(10px)"},visible:{opacity:1,y:0,scaleY:1,filter:"blur(0px)",transition:{duration:.8,ease:Ic,delay:.8}}},p={hidden:{opacity:0,y:80,rotateX:10},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1,ease:Ic,delay:.3}}},m={hidden:{opacity:0,scale:0,rotate:0},visible:{opacity:1,scale:1,rotate:360,transition:{duration:1.5,ease:te,delay:1}}};return f.jsxs(MH,{id:"ap",children:[f.jsx(H.div,{style:{position:"absolute",top:"20%",left:"10%",width:"8px",height:"8px",background:"rgba(48, 152, 238, 0.6)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3}}),f.jsx(H.div,{style:{position:"absolute",top:"60%",right:"15%",width:"12px",height:"12px",background:"rgba(48, 152, 238, 0.4)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.5}}),f.jsx(H.div,{style:{position:"absolute",bottom:"30%",left:"20%",width:"6px",height:"6px",background:"rgba(48, 152, 238, 0.3)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.8}}),f.jsx(H.div,{style:{y:t,scale:n,rotate:a},children:f.jsx(LH,{src:DH,alt:"Hero Image"})}),f.jsx(H.div,{style:{y:o,opacity:l},children:f.jsx(OH,{children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:p,children:f.jsxs(RH,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(kH,{children:"About Our Company and Team"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(VH,{children:"Fast, affordable, and trusted service"})})]})})})}),f.jsx(H.div,{style:{position:"absolute",top:"10%",right:"5%",width:"2px",height:"100px",background:"linear-gradient(to bottom, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,height:0},whileInView:{opacity:1,height:100},viewport:{once:!1,amount:.3},transition:{duration:1,delay:1.2}}),f.jsx(H.div,{style:{position:"absolute",bottom:"15%",left:"5%",width:"100px",height:"2px",background:"linear-gradient(to right, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,width:0},whileInView:{opacity:1,width:100},viewport:{once:!1,amount:.3},transition:{duration:1,delay:1.5}})]})},zH=w.section`
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
`,PH=w.div`
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
`,NH=w.h3`
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
`,K0=w.span`
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
`,$H=w.div`
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
`,BH=w.div`
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
`,Bv=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,IH=w.div`
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
`,UH=w.div`
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
`,Iv=w.p`
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
`,_H=w.img`
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
`,GH=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,YH="/assets/Services%20Image-e7Omvubx.png",qH="/assets/Team%20Image-CG0rB-nI.png",FH=()=>{const e=He({query:"(min-width: 1440px)"}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:te}}},a={hidden:{opacity:0,x:30},visible:{opacity:1,x:0,transition:{duration:.8,ease:te}}};return f.jsxs(zH,{children:[f.jsx(PH,{children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,children:f.jsxs(NH,{children:["Our mission is to provide ",f.jsx(K0,{children:"reliable"})," and ",f.jsx(K0,{children:"efficient"}),"appliance repair services that improve",f.jsx(K0,{children:"everyday "}),"life"," "]})})}),f.jsxs(GH,{children:[f.jsxs(IH,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:n,children:f.jsx("img",{src:YH,alt:"image"})}),f.jsxs(BH,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.2},children:f.jsx(Bv,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.3},children:f.jsx($H,{children:"Sanal Gariaev"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.4},children:f.jsx(Bv,{children:"Chief Executive Officer"})})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.5},children:f.jsxs(Iv,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That's why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",f.jsx("br",{}),e&&f.jsxs(f.Fragment,{children:[f.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})]})})]}),f.jsxs(UH,{children:[!e&&f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.6},children:f.jsxs(Iv,{children:[f.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,transition:{delay:.7},children:f.jsx(_H,{src:qH,alt:"team"})})]})]})]})},XH=w.section`
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
`,ZH=w.p`
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
`,WH=w.p`
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
`,KH=w.div`
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
`,QH=w.div`
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
`,JH=w.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,ez=w.div`
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
`,tz=w.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,iz=w.p`
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
`,nz=w.div`
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
`,az=w.p`
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
`,rz=w.p`
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
`,sz=w.img`
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
`,oz="/assets/ValueImage-GehUXRc0.png",lz="/assets/ValueImage1-XDPVu8iL.png",cz="/assets/ValueImage2-CBdwtolx.png",dz="/assets/ValueImage3-4cmMPphm.png",uz=()=>{const e=d=>({__html:d}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n={hidden:{opacity:0,y:50},visible:d=>({opacity:1,y:0,transition:{duration:.7,delay:d*.1}})},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5}}},o={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.6,delay:.2}}},l=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:oz,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:lz,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:cz,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:dz,alt:"Durable Repairs"}];return f.jsxs(XH,{children:[f.jsxs("div",{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:f.jsx(ZH,{children:"Our Values"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:f.jsxs(WH,{children:["Core ",f.jsx("span",{children:"Principles"})," That Drive Us"]})})]}),f.jsx(KH,{children:l.map((d,u)=>f.jsx(H.div,{custom:u,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:f.jsxs(QH,{children:[f.jsx(JH,{}),f.jsxs(ez,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:f.jsx(tz,{children:f.jsx(iz,{children:d.number})})}),f.jsxs(nz,{children:[f.jsx(az,{dangerouslySetInnerHTML:e(d.title)}),f.jsx(rz,{children:d.description})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,children:f.jsx(sz,{src:d.image,alt:d.alt,loading:"lazy"})})]})]})},d.id))})]})},fz=w.div`
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
`,pz=w.p`
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
`,hz=w.p`
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
`,mz=w.div`
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
`,Uv=w.div`
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
`,gz="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",xz="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",vz="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",yz="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",wz=()=>{const{scrollY:e}=vn(),t=Ze(e,[0,300],[0,50]),n=Ze(e,[0,200],[1,.8]),a={hidden:{opacity:0,y:60,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:1.2,ease:te}}},o={hidden:{opacity:0,scale:.8,borderRadius:"50%",filter:"blur(10px) grayscale(100%)"},visible:p=>({opacity:1,scale:1,borderRadius:"8px",filter:"blur(0px) grayscale(0%)",transition:{duration:1.4,delay:p*.2,ease:te}}),hover:{scale:1.08,borderRadius:"4px",filter:"grayscale(0%) brightness(110%)",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.25)",zIndex:10,transition:{duration:.5,ease:te}}},l={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:1,ease:te,staggerChildren:.1}}},d={hidden:{opacity:0,scale:.5,color:"#000000"},visible:{opacity:1,scale:1,color:"#3098EE",transition:{duration:1.5,ease:te,delay:.5}},hover:{scale:1.1,textShadow:"0 0 20px rgba(48, 152, 238, 0.8)",transition:{duration:.3,ease:te}}},u={hidden:{opacity:0,y:80,rotateX:15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1.2,ease:te}},hover:{y:-10,transition:{duration:.4,ease:te}}};return f.jsxs(fz,{children:[f.jsxs(H.div,{style:{y:t,opacity:n},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:l,children:[f.jsx(H.div,{variants:a,children:f.jsx(pz,{children:"Meet the Team"})}),f.jsx(H.div,{variants:a,transition:{delay:.2},children:f.jsxs(hz,{children:["Professionals committed to"," ",f.jsx(H.span,{variants:d,whileHover:"hover",children:"quality"})," ","service"]})})]}),f.jsxs(mz,{children:[f.jsx(H.div,{variants:u,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(Uv,{children:[f.jsx(H.div,{custom:0,variants:o,whileHover:"hover",children:f.jsx(mc,{src:gz,alt:"Team Member 1"})}),f.jsx(H.div,{custom:1,variants:o,whileHover:"hover",children:f.jsx(mc,{src:xz,alt:"Team Member 2"})})]})}),f.jsx(H.div,{variants:u,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},transition:{delay:.3},whileHover:"hover",children:f.jsxs(Uv,{children:[f.jsx(H.div,{custom:2,variants:o,whileHover:"hover",children:f.jsx(mc,{src:vz,alt:"Team Member 3"})}),f.jsx(H.div,{custom:3,variants:o,whileHover:"hover",children:f.jsx(mc,{src:yz,alt:"Team Member 4"})})]})})]})]})},bz=()=>f.jsxs(iH,{children:[f.jsx(HH,{}),f.jsx(FH,{}),f.jsx(uz,{}),f.jsx(wz,{}),f.jsx(N1,{})]}),Sz=w.div`
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
`;const Cz=()=>f.jsxs(Sz,{id:"ap",children:[f.jsx(Cd,{}),f.jsx(Td,{})]}),Tz=w.div`
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
`,Ez=w.div`
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
`,jz=w.h2`
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
`,Az=w.div`
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
`,Mz=w(Tt)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,Lz=w.div`
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
`,Oz=w.img`
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
`,Rz=w.h3`
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
  height: 80px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
  }
`,Vz=w.p`
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
`,$1="/assets/News%20Article%202%20Image%20Container%20(3)-BFGlTi7O.png",B1="/assets/Image3-DVPHBget.png",qw="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",I1="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",U1="/assets/News%20Article%202%20Image%20Container%20(6)-CPLTzZXw.png",Fw="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",kz=[{id:1,image:Fw,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:B1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:qw,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:I1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:U1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:$1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],Dz={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},Hz={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:te}},hover:{y:-5,transition:{duration:.3,ease:te}}},zz={hidden:{opacity:0,scale:1.05},visible:{opacity:1,scale:1,transition:{duration:.7,ease:te}},hover:{scale:1.03,transition:{duration:.3,ease:te}}},Pz={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:te}}},Nz=()=>{const{scrollY:e}=vn(),t=FL(),n=Ze(e,[0,300],[0,30]);return R.useEffect(()=>{t.start("visible")},[t]),f.jsxs(Ez,{id:"app",children:[f.jsx(H.div,{style:{y:n},initial:"hidden",animate:t,variants:Dz,children:f.jsxs(jz,{children:["News ",f.jsx("span",{children:"Tips"})," "]})}),f.jsx(Az,{children:kz.map((a,o)=>f.jsx(Mz,{to:a.path,children:f.jsx(H.div,{initial:"hidden",animate:t,variants:Hz,transition:{delay:o*.1},whileHover:"hover",children:f.jsxs(Lz,{children:[f.jsx(H.div,{variants:zz,transition:{delay:o*.1},whileHover:"hover",children:f.jsx(Oz,{src:a.image,alt:a.title})}),f.jsx(H.div,{variants:Pz,transition:{delay:o*.1+.2},children:f.jsxs("div",{children:[f.jsx(Rz,{children:a.title}),f.jsx(Vz,{children:a.description})]})})]})})},a.id))})]})},$z=()=>f.jsx(Tz,{id:"app",children:f.jsx(Nz,{})}),Bz=w.div`
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
`,Iz=w.p`
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
`,Uz=w.div`
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
`,_z=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_v=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Gz=w.p`
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
`,Yz=w.p`
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
`,Gv=w.p`
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
`,qz=w.p`
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
`,Fz=w.img`
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
`,Yv=w.div`
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
`,qv=w.p`
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
`,Xp=w(Tt)`
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
`,Fv=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Xp}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Xz=w.div`
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
`,Zz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Wz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Kz=w.p`
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
`,Qz=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Jz=w.button`
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
`,_1=w.button`
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
`,Xw=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${_1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,eP=w(Xw)`
  color: #242424;

  ${_1}:hover & {
    color: white;
  }
`,tP=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,iP=()=>{const e=He({query:"(min-width: 1440px)"}),{scrollY:t}=vn(),n=Ze(t,[0,500],[0,100]),a=Ze(t,[0,800],[0,-2]),o=Ze(t,[0,400],[1,1.05]),l={hidden:{opacity:0,y:100,rotate:-10,scale:.8},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1.2,ease:te,delay:.2}},hover:{y:-15,rotate:2,scale:1.05,transition:{duration:.4,ease:te}}},d={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:te,delay:.1}}},u={hidden:{opacity:0,x:-50,skewX:-10},visible:{opacity:1,x:0,skewX:0,transition:{duration:.8,ease:Ct}}},p={hidden:{opacity:0,rotateY:90,scale:.8},visible:{opacity:1,rotateY:0,scale:1,transition:{duration:1,ease:te,delay:.3}},hover:{rotateY:5,scale:1.02,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}}},m={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}},hover:{scale:1.1,boxShadow:"0 0 30px rgba(48, 152, 238, 0.4)",transition:{duration:.3,ease:te}},tap:{scale:.95}},g={hidden:{opacity:0,rotateX:45,scale:1.2},visible:{opacity:1,rotateX:0,scale:1,transition:{duration:1.4,ease:te}},hover:{rotateX:5,rotateY:5,scale:1.05,transition:{duration:.5,ease:te}}};return f.jsxs(Bz,{id:"all",children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(Iz,{children:"Our Service"})}),f.jsxs(Uz,{children:[f.jsxs(_z,{children:[f.jsxs(_v,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(Gz,{children:"01."})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.2},children:f.jsx(Yz,{children:"Appliance Care & Tune-Ups"})})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.3},children:f.jsx(Gv,{children:"Professional Installations"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.4},children:f.jsx(Gv,{children:"Fast & Reliable Emergency Repairs"})}),e&&f.jsxs(Yv,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.5},children:f.jsx(qv,{children:"Do you want to know more about our service?"})}),f.jsx(H.div,{variants:m,whileTap:"tap",children:f.jsx(Xp,{to:"/fridge#ap",children:f.jsx(Fv,{children:"Learn more"})})})]})]}),f.jsxs(tP,{children:[f.jsx(H.div,{style:{y:n,rotate:a,scale:o},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:g,whileHover:"hover",children:f.jsx(Fz,{src:Gw,alt:"Services Image"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:p,whileHover:"hover",children:f.jsxs(Xz,{children:[f.jsxs(Zz,{children:[f.jsx(_v,{children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(qz,{children:"Preventive Care"})})}),f.jsx(Wz,{children:f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,transition:{delay:.2},children:f.jsx(Kz,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),f.jsxs(Qz,{children:[f.jsx(H.div,{variants:m,whileHover:"hover",whileTap:"tap",children:f.jsx(Jz,{children:f.jsx(Xw,{children:"Contact Us"})})}),f.jsx(H.div,{variants:m,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:f.jsx(_1,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(eP,{children:"Call Us"})})})})]})]})})]}),!e&&f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:l,children:f.jsxs(Yv,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:u,children:f.jsx(qv,{children:"Do you want to know more about our service?"})}),f.jsx(H.div,{variants:m,whileHover:"hover",whileTap:"tap",children:f.jsx(Xp,{to:"/fridge#ap",children:f.jsx(Fv,{children:"Learn more"})})})]})})]})]})},nP="/assets/Image1-oNBiuIma.png",aP="/assets/Image2-KhSZGRyT.png",rP="/assets/Image4-CFM8TNdX.png",sP="/assets/Image5-CmBoV_wK.png",oP=w.div`
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
`,lP=w(H.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,cP=w(H.div)`
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
`;const dP=()=>{const e=He({query:"(max-width: 743px)"}),t=He({query:"(min-width: 744px) and (max-width: 1023px)"}),n=He({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:l1},{id:2,imageUrl:Jc},{id:3,imageUrl:c1},{id:4,imageUrl:d1},{id:5,imageUrl:u1},{id:6,imageUrl:f1},{id:7,imageUrl:p1},{id:8,imageUrl:h1},{id:9,imageUrl:m1},{id:10,imageUrl:g1},{id:11,imageUrl:x1},{id:12,imageUrl:v1},{id:13,imageUrl:y1},{id:14,imageUrl:w1},{id:15,imageUrl:b1},{id:16,imageUrl:S1},{id:17,imageUrl:C1},{id:18,imageUrl:T1},{id:19,imageUrl:E1},{id:20,imageUrl:Uw},{id:21,imageUrl:j1},{id:22,imageUrl:A1},{id:23,imageUrl:M1},{id:24,imageUrl:L1},{id:25,imageUrl:O1},{id:26,imageUrl:R1},{id:27,imageUrl:V1},{id:28,imageUrl:k1},{id:29,imageUrl:D1},{id:30,imageUrl:H1},{id:31,imageUrl:z1}],o=e?2:t?4:5,l=a.length>o;return f.jsxs("div",{children:[f.jsxs(oP,{children:[f.jsx(lP,{}),f.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map(d=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:d.imageUrl?f.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"}):f.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"})},d.id))}),f.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%"},children:a.map(d=>f.jsx(qt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:d.imageUrl?f.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"}):f.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"})},d.id))}),f.jsx(cP,{})]})," "]})},Xv=[{img:nP,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:aP,title:"Washing Machine",description:"Restoring heating and control functions."},{img:B1,title:"Oven",description:"Fixing magnetron and door issues."},{img:rP,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:sP,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],uP=()=>{const e=R.useRef(null),t=He({query:"(max-width: 767px)"}),n=He({query:"(min-width: 768px) and (max-width: 1439px)"}),a=He({query:"(min-width: 1440px)"}),o=t?1:n?3:4,l=Xv.length>o,d={hidden:{opacity:0,y:50,rotate:-5,scale:.9},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1,ease:te,delay:.2}}},u={hidden:{opacity:0,y:100,rotateX:-45,scale:.8,filter:"blur(10px)"},visible:v=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:1.2,ease:te,delay:v*.15}}),hover:{y:-20,rotateY:10,scale:1.05,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:te}}},p={hidden:{opacity:0,scale:1.3,rotate:-5},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.5,ease:te}},hover:{scale:1.1,rotate:2,transition:{duration:.6,ease:te}}},m={hidden:{opacity:0,x:-50,y:30},visible:{opacity:1,x:0,y:0,transition:{duration:.8,ease:Ct,delay:.3}},hover:{x:10,transition:{duration:.3}}},g={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:te,delay:.5}},hover:{scale:1.15,rotate:5,boxShadow:"0 0 25px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:te}},tap:{scale:.95,rotate:-2}};return f.jsxs(xP,{children:[f.jsxs(vP,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsx(yP,{children:"Our Equipment"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,transition:{delay:.1},children:f.jsxs(wP,{children:[f.jsx("span",{children:"Trusted"})," brands we service"]})})]}),f.jsx(dP,{}),f.jsxs(pP,{children:[f.jsx(H.div,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(Zv,{onClick:()=>{var v;return(v=e.current)==null?void 0:v.slidePrev()},bg:"#DBDBD8",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(H.div,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(Zv,{onClick:()=>{var v;return(v=e.current)==null?void 0:v.slideNext()},bg:"#3098EE",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),f.jsx(fP,{$isTablet:n,children:f.jsx(Yt,{modules:[s1,oi],onSwiper:v=>e.current=v,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Xv.map((v,y)=>f.jsx(qt,{children:f.jsx(H.div,{custom:y,variants:u,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},whileHover:"hover",children:f.jsxs(bP,{$isTablet:n,children:[f.jsx(H.div,{variants:p,whileHover:"hover",children:f.jsx(SP,{src:v.img,alt:v.title,$isTablet:n})}),f.jsx(H.div,{variants:m,whileHover:"hover",children:f.jsxs(CP,{children:[f.jsx(TP,{$isTablet:n,children:v.title}),f.jsx(EP,{$isTablet:n,children:v.description})]})})]})})},y))})})]})},fP=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,pP=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,hP=Je`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,mP=Je`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,gP=Je`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,Zv=w.button`
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

    ${e=>e.bg==="#DBDBD8"&&Xt`
      background-color: #c8c8c5;
      svg {
        animation: ${mP} 0.4s ease;
      }
    `}

    ${e=>e.bg==="#3098EE"&&Xt`
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
`,xP=w.div`
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
`,yP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,wP=w.p`
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
`,bP=w.div`
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
`,SP=w.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`,CP=w.div`
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
`,TP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"28px"};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,EP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,jP="/assets/ProccessSection-CpT7luA8.png",AP=w.div`
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
`,MP=w.h2`
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
`,LP=w.p`
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
`,OP=w.div`
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
`,RP=w.div`
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
`,VP=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,kP=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,DP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,HP=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,zP=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:f.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:f.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:f.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],PP={hidden:{opacity:0,scale:0,rotate:-180},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.8,ease:Ct,delay:.3}},hover:{rotate:360,scale:1.2,transition:{duration:.6,ease:te}}},NP={hidden:{opacity:0,y:50,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:.8,ease:te}}},$P={hidden:{opacity:0,x:-100,scale:.9},visible:e=>({opacity:1,x:0,scale:1,transition:{duration:.7,delay:e*.2,ease:te}}),hover:{y:-15,scale:1.05,rotateY:10,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.4,ease:te}}},Wv={hidden:{opacity:0,x:50,filter:"blur(10px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.9,ease:te,delay:.5}}},BP={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:te,delay:.2}}},IP=()=>f.jsxs(AP,{$bg:jP,children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:NP,children:f.jsx(MP,{children:"Our Process"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Wv,children:f.jsx(LP,{children:"Quick steps to fix appliances reliably"})}),f.jsx(OP,{children:zP.map((e,t)=>f.jsx(H.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:$P,whileHover:"hover",children:f.jsxs(RP,{children:[f.jsx(VP,{children:f.jsx(H.div,{variants:PP,whileHover:"hover",children:f.jsx(kP,{children:e.icon})})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:BP,transition:{delay:t*.2+.3},children:f.jsx(DP,{children:e.title})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:Wv,transition:{delay:t*.2+.4},children:f.jsx(HP,{children:e.text})})]})},t))})]}),UP=()=>f.jsxs(_P,{children:[f.jsx(iP,{}),f.jsx(uP,{}),f.jsx(Iw,{}),f.jsx(IP,{}),f.jsx(Td,{}),f.jsx(N1,{}),f.jsx(Cd,{})]}),_P=w.div`
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
`,GP=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,YP=w(Tt)`
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
`,qP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,FP=w.h1`
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
`,XP=w.img`
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
`,ZP=w.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`,WP=w.p`
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
`,KP=w.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,QP=w.h2`
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
`,JP=w.div`
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
`,eN=w(Tt)`
  text-decoration: none;
  color: inherit;
  width: 46%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,tN=w.div`
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
`,iN=w.img`
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
`,nN=w.h3`
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
`,aN=w.p`
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
`,rN=[{id:4,image:I1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:U1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:$1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],sN=()=>f.jsxs(KP,{children:[f.jsx(QP,{children:f.jsx("span",{children:" Other news and tips"})}),f.jsx(JP,{children:rN.map(e=>f.jsx(eN,{to:e.path,children:f.jsxs(tN,{children:[f.jsx(iN,{src:e.image,alt:e.title}),f.jsxs("div",{children:[f.jsx(nN,{children:e.title}),f.jsx(aN,{children:e.description})]})]})},e.id))})]}),oN=[{id:1,image:Fw,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, AirTexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:B1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: AirTexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:qw,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call AirTexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:I1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: AirTexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:U1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? AirTexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:$1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you'll hear the term OEM parts. Here's why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the same parts your appliance was built with.

Why Choose OEM Over Generic?
Reliability: Fits perfectly, works as designed.
Warranty: Protects your manufacturer's warranty.
Longevity: Generic parts often fail sooner.

Examples
Using a genuine Sub-Zero compressor instead of a generic one ensures proper cooling performance.
An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At AirTexno, we only use genuine OEM or manufacturer-approved parts for repairs in Thousand Oaks and Ventura County.`}],lN={hidden:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{duration:.8,ease:te}},exit:{opacity:0,x:100,transition:{duration:.5,ease:te}}},cN={hidden:{opacity:0,y:-30,rotate:-10},visible:{opacity:1,y:0,rotate:0,transition:{duration:.6,ease:Ct,delay:.1}},hover:{scale:1.05,x:-5,transition:{duration:.2,ease:te}},tap:{scale:.95}},dN={hidden:{opacity:0,y:50,scale:.9,textShadow:"0 0 0px rgba(0,0,0,0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(0,0,0,0)","0 0 30px rgba(0,0,0,0.3)","0 0 10px rgba(0,0,0,0.1)"],transition:{duration:1,ease:Ct,delay:.2}}},uN={hidden:{opacity:0,scale:1.2,rotate:-5,filter:"blur(10px)"},visible:{opacity:1,scale:1,rotate:0,filter:"blur(0px)",transition:{duration:1.2,ease:Ct,delay:.3}}},fN={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te,delay:.4}}},pN={hidden:{opacity:0,y:20,skewY:2},visible:e=>({opacity:1,y:0,skewY:0,transition:{duration:.6,ease:te,delay:.5+e*.05}})},hN={hidden:{opacity:0,scale:.8,rotateX:-90},visible:{opacity:1,scale:1,rotateX:0,transition:{duration:.7,ease:Ct,delay:.1}}},gr=({articleId:e})=>{const{id:t}=g9(),n=e||parseInt(t||"1"),a=oN.find(p=>p.id===n),{scrollY:o}=vn(),l=Ze(o,[0,500],[0,50]),d=Ze(o,[0,300],[1,.9]);if(R.useEffect(()=>{const p=window.location.hash;if(p){const m=document.querySelector(p);m&&setTimeout(()=>{m.scrollIntoView({behavior:"smooth"})},500)}},[a]),!a)return f.jsx("div",{children:"Article not found"});const u=a.content.split(`

`);return f.jsx(H.div,{variants:lN,initial:"hidden",animate:"visible",exit:"exit",style:{y:l,opacity:d},children:f.jsxs(GP,{id:"ap",children:[f.jsx(H.div,{variants:cN,whileHover:"hover",whileTap:"tap",children:f.jsx(YP,{to:"/tips",children:"← Back to Tips"})}),f.jsx(H.div,{variants:hN,children:f.jsx(qP,{children:a.data})}),f.jsx(H.div,{variants:dN,children:f.jsx(FP,{children:a.title})}),f.jsx(H.div,{variants:uN,children:f.jsx(XP,{src:a.image,alt:a.title})}),f.jsx(H.div,{variants:fN,children:f.jsx(ZP,{children:u.map((p,m)=>f.jsxs(H.div,{custom:m,variants:pN,initial:"hidden",animate:"visible",children:[f.jsx(WP,{children:p}),m<u.length-1&&f.jsx(f.Fragment,{children:f.jsx("br",{})})]},m))})}),f.jsx(H.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:f.jsx(sN,{})})]})})},mN=w.div`
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
`,Zp=w.div`
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
`,Q0=w.p`
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
`,gN=w.div`
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
`,xN=w.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,vN=w.img`
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
`,yN=w.p`
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
`,wN=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bN=w(Tt)`
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
`,G1=w.button`
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
`,Zw=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${G1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,SN=w(Zw)`
  color: #242424;

  ${G1}:hover & {
    color: white;
  }
`,J0=w.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin: 0 auto;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  flex-wrap: wrap;

  @media (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 20px;
    flex-direction: column;
    gap: 8px;
  }
`,ep=w.div`
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
`,ed=w.div`
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
`,CN=w.img`
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
`;const Kv=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,Qv=w.div`
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
`,Jv=w.div`
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
`,ey=w.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,ty=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`,iy=w.button`
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
`,Wp=w.button`
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
`,Kp=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,ny=w(Kp)`
  color: #242424;

  ${Wp}:hover & {
    color: #fff;
  }
`;w.div`
  @media (min-width: 768px) and (max-width: 1439px) {
    ${Zp} {
      display: none;
    }
    ${ed} {
      display: flex;
    }
  }

  @media (max-width: 767px), (min-width: 1440px) {
    ${ed} {
      display: none;
    }
    ${Zp} {
      display: flex;
    }
  }
`;const TN=w.div`
  width: 553px;
  height: 396px;
`,EN=w.div`
  width: 668px;
  height: 583px;
`,tp="/assets/fridge-AVDSsy-j.png",ay="/assets/fridge1-CZ9QJ0bU.png",jN="/assets/rating-D_Pf9sUB.svg",AN=()=>{const e=He({query:"(min-width: 768px) and (max-width: 1439px)"}),t=He({query:"(min-width: 1440px)"}),n={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:te}}},a={hidden:{opacity:0,scale:1.1,rotate:-2},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1,ease:te,delay:.2}}},o={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:te,delay:.4}}},l={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te,delay:.6}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}},d={hidden:{opacity:0,scale:0,rotate:-180},visible:u=>({opacity:1,scale:1,rotate:0,transition:{duration:.5,delay:.8+u*.1,ease:Ct}})};return t?f.jsxs(ed,{children:[f.jsxs(TN,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:n,children:f.jsxs(Q0,{children:[f.jsx("span",{children:"Refrigeration"})," maintenance ",f.jsx("span",{children:"and "})," setup services"]})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:f.jsx(ey,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),f.jsxs(ty,{children:[f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(iy,{children:f.jsx(Kp,{children:"Contact Us"})})}),f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(Wp,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(ny,{children:"Call Us"})})})})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,transition:{delay:.8},children:f.jsx(CN,{src:jN,alt:"⭐⭐⭐⭐⭐"})})]}),f.jsx(EN,{children:f.jsx(Kv,{children:f.jsxs(Qv,{children:[f.jsxs(Jv,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,children:f.jsx(xc,{src:tp,alt:"Why Airtexno Image 1",className:"main-image"})}),f.jsx(J0,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive at your home in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from our own warehouse"}].map((u,p)=>f.jsx(H.div,{custom:p,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsxs(ep,{children:[f.jsx("span",{style:{fontSize:"20px"},children:u.icon}),f.jsx("p",{children:u.text})]})},p))})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,transition:{delay:.3},children:f.jsx(xc,{src:ay,alt:"Why Airtexno Image 2",className:"secondary-image"})})]})})})]}):e?f.jsxs(ed,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:n,children:f.jsxs(Q0,{children:[f.jsx("span",{children:"Refrigeration"})," maintenance ",f.jsx("span",{children:"and "})," setup services"]})}),f.jsxs(Kv,{children:[f.jsxs(Qv,{children:[f.jsxs(Jv,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,children:f.jsx(xc,{src:tp,alt:"Why Airtexno Image 1",className:"main-image"})}),f.jsx(J0,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((u,p)=>f.jsx(H.div,{custom:p,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsxs(ep,{children:[f.jsx("span",{style:{fontSize:"18px"},children:u.icon}),f.jsx("p",{children:u.text})]})},p))})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,transition:{delay:.3},children:f.jsx(xc,{src:ay,alt:"Why Airtexno Image 2",className:"secondary-image"})})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:f.jsx(ey,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),f.jsxs(ty,{children:[f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(iy,{children:f.jsx(Kp,{children:"Contact Us"})})}),f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(Wp,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(ny,{children:"Call Us"})})})})]})]})]}):f.jsxs(Zp,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:n,children:f.jsxs(Q0,{children:[f.jsx("span",{children:"Refrigeration"})," maintenance ",f.jsx("span",{children:"and "})," setup services"]})}),f.jsxs(gN,{children:[f.jsxs(xN,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:a,children:f.jsx(vN,{src:tp,alt:"Why Airtexno Image 1"})}),f.jsx(J0,{children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((u,p)=>f.jsx(H.div,{custom:p,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:d,children:f.jsxs(ep,{children:[f.jsx("span",{style:{fontSize:"16px"},children:u.icon}),f.jsx("p",{children:u.text})]})},p))})]}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:o,children:f.jsx(yN,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),f.jsxs(wN,{children:[f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(bN,{to:"/contact#ap",children:f.jsx(Zw,{children:"Contact Us"})})}),f.jsx(H.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(G1,{children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(SN,{children:"Call Us"})})})})]})]})]})},MN=Je`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,LN=w.div`
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
`,ON=w.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,RN=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${MN} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,VN=w.div`
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
`,kN=w.div`
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
`,DN=w.div`
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
`,HN=w.div`
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
`,zN=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,PN=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,NN=w.p`
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
`,$N=w.h2`
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
`,BN=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,IN=w.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,UN=w(Tt)`
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
`,_N=w.button`
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
`,GN=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span> $250 </span>"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from <span> $55 </span> "}],t={hidden:{opacity:0,y:50,scale:.9,rotate:-2},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:.8,ease:te}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:te,delay:.2}}},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return f.jsx(DN,{children:f.jsxs(HN,{children:[f.jsxs(zN,{children:[f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,children:f.jsx(NN,{children:"Typical Refrigerator Issues We Fix"})}),f.jsx(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:t,transition:{delay:.1},children:f.jsxs($N,{children:["Professional Refrigerator Repair ",f.jsx("span",{children:" and Installation Services"})]})})]}),f.jsxs(PN,{children:[f.jsx(YN,{services:e}),f.jsxs(H.div,{initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:n,children:[f.jsx(BN,{children:"Having issues with your fridge? Call us today — we'll fix it and restore normal operation fast."}),f.jsxs(IN,{children:[f.jsx(H.div,{variants:a,whileHover:"hover",whileTap:"tap",children:f.jsx(UN,{to:"/contact#ap",children:"Contact Us"})}),f.jsx(H.div,{variants:a,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:f.jsx("a",{href:"tel:+18055002705",children:f.jsx(_N,{children:"Call Us"})})})]})]})]})]})})},YN=({services:e})=>{const{scrollY:t}=vn(),n=Ze(t,[0,1e3],[0,200]),a=Ze(t,[0,800],[0,1]),o=[...e,...e],l={hidden:u=>({opacity:0,y:100,scale:.8,rotateX:-45,filter:"blur(5px)"}),visible:u=>({opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:{duration:.7,delay:u*.1,ease:Ct}}),hover:{scale:1.02,y:-5,rotateY:3,boxShadow:"0 15px 30px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}}},d={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:te,delay:.2}}};return f.jsx(H.div,{style:{y:n,rotate:a},children:f.jsx(LN,{children:f.jsx(ON,{children:f.jsx(RN,{children:o.map((u,p)=>f.jsx(H.div,{custom:p,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:l,whileHover:"hover",children:f.jsx(VN,{children:f.jsx(H.div,{variants:d,children:f.jsxs(kN,{children:[f.jsx("h3",{children:u.title}),f.jsx("p",{children:u.description}),f.jsx("p",{dangerouslySetInnerHTML:{__html:u.price}})]})})})},p))})})})})},qN="/assets/1-BfPZdbUH.png",FN="/assets/2-zYtOs5TG.png",XN="/assets/3-SBPgwxa7.png",ZN="/assets/4-CWtM_DtU.png",WN="/assets/5-DO04-jdm.png",ry=[{img:qN,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:FN,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:XN,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:ZN,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:WN,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."}],KN=()=>{const e=R.useRef(null),t=He({query:"(max-width: 767px)"}),n=He({query:"(min-width: 768px) and (max-width: 1439px)"}),a=He({query:"(min-width: 1440px)"}),o=t?1:n?2:a?4:2,l=ry.length>o,{scrollY:d}=vn(),u=Ze(d,[0,500],[0,80]),p=Ze(d,[0,300],[1,1.05]),m={hidden:{opacity:0,scale:.8,filter:"blur(20px) brightness(0.8)"},visible:{opacity:1,scale:1,filter:"blur(0px) brightness(1)",transition:{duration:1.2,ease:Ct}}},g={hidden:b=>({opacity:0,x:b%2===0?-100:100,y:50,rotate:b%2===0?-5:5,scale:.7}),visible:b=>({opacity:1,x:0,y:0,rotate:0,scale:1,transition:{duration:.9,delay:b*.2,ease:Ct}}),hover:{y:-20,scale:1.05,rotate:0,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:te}}},v={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.7,ease:te,delay:.3}},hover:{y:-5,transition:{duration:.2,ease:te}}},y={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:te}},hover:{scale:1.15,backgroundColor:"#2a8ad8",boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:te}},tap:{scale:.95,transition:{duration:.1}}},C={hidden:{opacity:0,y:50,scale:.8,textShadow:"0 0 0px rgba(255, 255, 255, 0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(255, 255, 255, 0)","0 0 30px rgba(255, 255, 255, 0.8)","0 0 15px rgba(255, 255, 255, 0.4)"],transition:{duration:1.5,ease:te}}};return f.jsxs(n$,{children:[f.jsx(H.div,{style:{y:u,scale:p},initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},variants:C,children:f.jsxs(a$,{children:[f.jsx(r$,{children:"Refrigerator Repair"}),f.jsxs(s$,{children:["We repair ",f.jsx("span",{children:" all types "})," of refrigerators"]})]})}),f.jsxs(QN,{children:[f.jsx(Yt,{modules:[s1,oi],onSwiper:b=>e.current=b,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,centeredSlides:t,children:ry.map((b,j)=>f.jsx(qt,{children:f.jsx(H.div,{custom:j,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.2},variants:g,whileHover:"hover",children:f.jsxs(o$,{children:[f.jsx(H.div,{variants:m,whileHover:{scale:1.1},transition:{duration:.4},children:f.jsx(l$,{src:b.img,alt:b.title})}),f.jsx(H.div,{variants:v,whileHover:"hover",children:f.jsxs(c$,{children:[f.jsx(d$,{children:b.title}),f.jsx(u$,{children:b.description})]})})]})})},j))}),f.jsxs(i$,{children:[f.jsx(H.div,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},whileHover:"hover",whileTap:"tap",children:f.jsx(sy,{onClick:()=>{var b;return(b=e.current)==null?void 0:b.slidePrev()},bg:"#DBDBD8",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),f.jsx(H.div,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!1,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:f.jsx(sy,{onClick:()=>{var b;return(b=e.current)==null?void 0:b.slideNext()},bg:"#3098EE",children:f.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:f.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})]})},QN=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
  }
`,JN=Je`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,e$=Je`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,t$=Je`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,i$=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,sy=w.button`
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
    animation: ${JN} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&Xt`
        background-color: #c8c8c5;
        svg {
          animation: ${e$} 0.4s ease;
        }
      `}

    ${e=>e.bg==="#3098EE"&&Xt`
        background-color: #2580d6;
        svg {
          animation: ${t$} 0.4s ease;
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
`,n$=w.div`
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
`,a$=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,r$=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,s$=w.p`
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
`,o$=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`,l$=w.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,c$=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 1px;
  background: var(--white);
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
`,d$=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,u$=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,f$=()=>f.jsxs(mN,{id:"ap",children:[f.jsx(AN,{}),f.jsx(_w,{}),f.jsx(GN,{}),f.jsx(KN,{}),f.jsx(Td,{}),f.jsx(N1,{}),f.jsx(Cd,{})]}),It=({children:e})=>f.jsx("div",{style:{width:"100%",position:"relative"},children:e}),p$=()=>{const e=Si();return f.jsxs(f.Fragment,{children:[" ",f.jsx(Fh,{mode:"wait",children:f.jsxs(k9,{location:e,children:[f.jsx(mt,{path:"/",element:f.jsx(O9,{to:"/home"})}),f.jsxs(mt,{path:"/",element:f.jsx(lR,{}),children:[f.jsx(mt,{index:!0,element:f.jsx(It,{children:f.jsx(W0,{})})}),f.jsx(mt,{path:"/home",element:f.jsx(It,{children:f.jsx(W0,{})})}),f.jsx(mt,{path:"/service",element:f.jsx(It,{children:f.jsx(UP,{})})}),f.jsx(mt,{path:"/about",element:f.jsx(It,{children:f.jsx(bz,{})})}),f.jsxs(mt,{path:"/tips",children:[f.jsx(mt,{index:!0,element:f.jsx(It,{children:f.jsx($z,{})})}),f.jsx(mt,{path:"refrigerator-maintenance",element:f.jsx(It,{children:f.jsx(gr,{articleId:1})})}),f.jsx(mt,{path:"oven-repair-signs",element:f.jsx(It,{children:f.jsx(gr,{articleId:2})})}),f.jsx(mt,{path:"laundry-appliance-maintenance",element:f.jsx(It,{children:f.jsx(gr,{articleId:3})})}),f.jsx(mt,{path:"dishwasher-drainage",element:f.jsx(It,{children:f.jsx(gr,{articleId:4})})}),f.jsx(mt,{path:"repair-vs-replace",element:f.jsx(It,{children:f.jsx(gr,{articleId:5})})}),f.jsx(mt,{path:"oem-parts",element:f.jsx(It,{children:f.jsx(gr,{articleId:6})})})]}),f.jsx(mt,{path:"/contact",element:f.jsx(It,{children:f.jsx(Cz,{})})}),f.jsx(mt,{path:"/fridge",element:f.jsx(It,{children:f.jsx(f$,{})})}),f.jsx(mt,{path:"*",element:f.jsx(It,{children:f.jsx(W0,{})})})]})]},e.pathname)})]})},xe=e=>typeof e=="string",to=()=>{let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n},oy=e=>e==null?"":""+e,h$=(e,t,n)=>{e.forEach(a=>{t[a]&&(n[a]=t[a])})},m$=/###/g,ly=e=>e&&e.indexOf("###")>-1?e.replace(m$,"."):e,cy=e=>!e||xe(e),po=(e,t,n)=>{const a=xe(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(cy(e))return{};const l=ly(a[o]);!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return cy(e)?{}:{obj:e,k:ly(a[o])}},dy=(e,t,n)=>{const{obj:a,k:o}=po(e,t,Object);if(a!==void 0||t.length===1){a[o]=n;return}let l=t[t.length-1],d=t.slice(0,t.length-1),u=po(e,d,Object);for(;u.obj===void 0&&d.length;)l=`${d[d.length-1]}.${l}`,d=d.slice(0,d.length-1),u=po(e,d,Object),u!=null&&u.obj&&typeof u.obj[`${u.k}.${l}`]<"u"&&(u.obj=void 0);u.obj[`${u.k}.${l}`]=n},g$=(e,t,n,a)=>{const{obj:o,k:l}=po(e,t,Object);o[l]=o[l]||[],o[l].push(n)},td=(e,t)=>{const{obj:n,k:a}=po(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},x$=(e,t,n)=>{const a=td(e,n);return a!==void 0?a:td(t,n)},Ww=(e,t,n)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?xe(e[a])||e[a]instanceof String||xe(t[a])||t[a]instanceof String?n&&(e[a]=t[a]):Ww(e[a],t[a],n):e[a]=t[a]);return e},xr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var v$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const y$=e=>xe(e)?e.replace(/[&<>"'\/]/g,t=>v$[t]):e;class w${constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const b$=[" ",",","?","!",";"],S$=new w$(20),C$=(e,t,n)=>{t=t||"",n=n||"";const a=b$.filter(d=>t.indexOf(d)<0&&n.indexOf(d)<0);if(a.length===0)return!0;const o=S$.getRegExp(`(${a.map(d=>d==="?"?"\\?":d).join("|")})`);let l=!o.test(e);if(!l){const d=e.indexOf(n);d>0&&!o.test(e.substring(0,d))&&(l=!0)}return l},Qp=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(n);let o=e;for(let l=0;l<a.length;){if(!o||typeof o!="object")return;let d,u="";for(let p=l;p<a.length;++p)if(p!==l&&(u+=n),u+=a[p],d=o[u],d!==void 0){if(["string","number","boolean"].indexOf(typeof d)>-1&&p<a.length-1)continue;l+=p-l+1;break}o=d}return o},id=e=>e==null?void 0:e.replace("_","-"),T$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var n,a;(a=(n=console==null?void 0:console[e])==null?void 0:n.apply)==null||a.call(n,console,t)}};class nd{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||T$,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,a,o){return o&&!this.debug?null:(xe(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new nd(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new nd(this.logger,t)}}var Ui=new nd;class Ed{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(d=>{let[u,p]=d;for(let m=0;m<p;m++)u(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(d=>{let[u,p]=d;for(let m=0;m<p;m++)u.apply(u,[t,...a])})}}class uy extends Ed{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,a){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,d=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let u;t.indexOf(".")>-1?u=t.split("."):(u=[t,n],a&&(Array.isArray(a)?u.push(...a):xe(a)&&l?u.push(...a.split(l)):u.push(a)));const p=td(this.data,u);return!p&&!n&&!a&&t.indexOf(".")>-1&&(t=u[0],n=u[1],a=u.slice(2).join(".")),p||!d||!xe(a)?p:Qp((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[n],a,l)}addResource(t,n,a,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const d=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let u=[t,n];a&&(u=u.concat(d?a.split(d):a)),t.indexOf(".")>-1&&(u=t.split("."),o=n,n=u[1]),this.addNamespaces(n),dy(this.data,u,o),l.silent||this.emit("added",t,n,a,o)}addResources(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in a)(xe(a[l])||Array.isArray(a[l]))&&this.addResource(t,n,l,a[l],{silent:!0});o.silent||this.emit("added",t,n,a)}addResourceBundle(t,n,a,o,l){let d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},u=[t,n];t.indexOf(".")>-1&&(u=t.split("."),o=a,a=n,n=u[1]),this.addNamespaces(n);let p=td(this.data,u)||{};d.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?Ww(p,a,l):p={...p,...a},dy(this.data,u,p),d.silent||this.emit("added",t,n,a)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var Kw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,a,o){return e.forEach(l=>{var d;t=((d=this.processors[l])==null?void 0:d.process(t,n,a,o))??t}),t}};const fy={},py=e=>!xe(e)&&typeof e!="boolean"&&typeof e!="number";class ad extends Ed{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),h$(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ui.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,n);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let l=n.ns||this.options.defaultNS||[];const d=a&&t.indexOf(a)>-1,u=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!C$(t,a,o);if(d&&!u){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:xe(l)?[l]:l};const m=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:xe(l)?[l]:l}}translate(t,n,a){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,l=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:d,namespaces:u}=this.extractFromKey(t[t.length-1],n),p=u[u.length-1],m=n.lng||this.language,g=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const K=n.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${K}${d}`,usedKey:d,exactUsedKey:d,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(n)}:`${p}${K}${d}`}return o?{res:d,usedKey:d,exactUsedKey:d,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(n)}:d}const v=this.resolve(t,n);let y=v==null?void 0:v.res;const C=(v==null?void 0:v.usedKey)||d,b=(v==null?void 0:v.exactUsedKey)||d,j=["[object Number]","[object Function]","[object RegExp]"],L=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,E=n.count!==void 0&&!xe(n.count),T=ad.hasDefaultValue(n),k=E?this.pluralResolver.getSuffix(m,n.count,n):"",O=n.ordinal&&E?this.pluralResolver.getSuffix(m,n.count,{ordinal:!1}):"",N=E&&!n.ordinal&&n.count===0,P=N&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${k}`]||n[`defaultValue${O}`]||n.defaultValue;let _=y;M&&!y&&T&&(_=P);const q=py(_),F=Object.prototype.toString.apply(_);if(M&&_&&q&&j.indexOf(F)<0&&!(xe(L)&&Array.isArray(_))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const K=this.options.returnedObjectHandler?this.options.returnedObjectHandler(C,_,{...n,ns:u}):`key '${d} (${this.language})' returned an object instead of string.`;return o?(v.res=K,v.usedParams=this.getUsedParamsDetails(n),v):K}if(l){const K=Array.isArray(_),ne=K?[]:{},le=K?b:C;for(const ue in _)if(Object.prototype.hasOwnProperty.call(_,ue)){const oe=`${le}${l}${ue}`;T&&!y?ne[ue]=this.translate(oe,{...n,defaultValue:py(P)?P[ue]:void 0,joinArrays:!1,ns:u}):ne[ue]=this.translate(oe,{...n,joinArrays:!1,ns:u}),ne[ue]===oe&&(ne[ue]=_[ue])}y=ne}}else if(M&&xe(L)&&Array.isArray(y))y=y.join(L),y&&(y=this.extendTranslation(y,t,n,a));else{let K=!1,ne=!1;!this.isValidLookup(y)&&T&&(K=!0,y=P),this.isValidLookup(y)||(ne=!0,y=d);const ue=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ne?void 0:y,oe=T&&P!==y&&this.options.updateMissing;if(ne||K||oe){if(this.logger.log(oe?"updateKey":"missingKey",m,p,d,oe?P:y),l){const ie=this.resolve(d,{...n,keySeparator:!1});ie&&ie.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const W=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&W&&W[0])for(let ie=0;ie<W.length;ie++)B.push(W[ie]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(n.lng||this.language):B.push(n.lng||this.language);const J=(ie,V,X)=>{var re;const ae=T&&X!==y?X:ue;this.options.missingKeyHandler?this.options.missingKeyHandler(ie,p,V,ae,oe,n):(re=this.backendConnector)!=null&&re.saveMissing&&this.backendConnector.saveMissing(ie,p,V,ae,oe,n),this.emit("missingKey",ie,p,V,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?B.forEach(ie=>{const V=this.pluralResolver.getSuffixes(ie,n);N&&n[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(X=>{J([ie],d+X,n[`defaultValue${X}`]||P)})}):J(B,d,P))}y=this.extendTranslation(y,t,n,v,a),ne&&y===d&&this.options.appendNamespaceToMissingKey&&(y=`${p}:${d}`),(ne||K)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${d}`:d,K?y:void 0))}return o?(v.res=y,v.usedParams=this.getUsedParamsDetails(n),v):y}extendTranslation(t,n,a,o,l){var m,g;var d=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const v=xe(t)&&(((g=a==null?void 0:a.interpolation)==null?void 0:g.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(v){const b=t.match(this.interpolator.nestingRegexp);y=b&&b.length}let C=a.replace&&!xe(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(C={...this.options.interpolation.defaultVariables,...C}),t=this.interpolator.interpolate(t,C,a.lng||this.language||o.usedLng,a),v){const b=t.match(this.interpolator.nestingRegexp),j=b&&b.length;y<j&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var b=arguments.length,j=new Array(b),L=0;L<b;L++)j[L]=arguments[L];return(l==null?void 0:l[0])===j[0]&&!a.context?(d.logger.warn(`It seems you are nesting recursively key: ${j[0]} in key: ${n[0]}`),null):d.translate(...j,n)},a)),a.interpolation&&this.interpolator.reset()}const u=a.postProcess||this.options.postProcess,p=xe(u)?[u]:u;return t!=null&&(p!=null&&p.length)&&a.applyPostProcessor!==!1&&(t=Kw.handle(p,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,l,d,u;return xe(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(a))return;const m=this.extractFromKey(p,n),g=m.key;o=g;let v=m.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const y=n.count!==void 0&&!xe(n.count),C=y&&!n.ordinal&&n.count===0,b=n.context!==void 0&&(xe(n.context)||typeof n.context=="number")&&n.context!=="",j=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);v.forEach(L=>{var M,E;this.isValidLookup(a)||(u=L,!fy[`${j[0]}-${L}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((E=this.utils)!=null&&E.hasLoadedNamespace(u))&&(fy[`${j[0]}-${L}`]=!0,this.logger.warn(`key "${o}" for languages "${j.join(", ")}" won't get resolved as namespace "${u}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),j.forEach(T=>{var N;if(this.isValidLookup(a))return;d=T;const k=[g];if((N=this.i18nFormat)!=null&&N.addLookupKeys)this.i18nFormat.addLookupKeys(k,g,T,L,n);else{let P;y&&(P=this.pluralResolver.getSuffix(T,n.count,n));const _=`${this.options.pluralSeparator}zero`,q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(k.push(g+P),n.ordinal&&P.indexOf(q)===0&&k.push(g+P.replace(q,this.options.pluralSeparator)),C&&k.push(g+_)),b){const F=`${g}${this.options.contextSeparator}${n.context}`;k.push(F),y&&(k.push(F+P),n.ordinal&&P.indexOf(q)===0&&k.push(F+P.replace(q,this.options.pluralSeparator)),C&&k.push(F+_))}}let O;for(;O=k.pop();)this.isValidLookup(a)||(l=O,a=this.getResource(T,L,O,n))}))})}),{res:a,usedKey:o,exactUsedKey:l,usedLng:d,usedNS:u}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,a){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,n,a,o):this.resourceStore.getResource(t,n,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!xe(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const l of n)delete o[l]}return o}static hasDefaultValue(t){const n="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&n===a.substring(0,n.length)&&t[a]!==void 0)return!0;return!1}}class hy{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ui.create("languageUtils")}getScriptPartFromCode(t){if(t=id(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=id(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(xe(t)&&t.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(t)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(a=>{if(n)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),xe(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let a=t[n];return a||(a=t[this.getScriptPartFromCode(n)]),a||(a=t[this.formatLanguageCode(n)]),a||(a=t[this.getLanguagePartFromCode(n)]),a||(a=t.default),a||[]}toResolveHierarchy(t,n){const a=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],l=d=>{d&&(this.isSupportedCode(d)?o.push(d):this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))};return xe(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):xe(t)&&l(this.formatLanguageCode(t)),a.forEach(d=>{o.indexOf(d)<0&&l(this.formatLanguageCode(d))}),o}}const my={zero:0,one:1,two:2,few:3,many:4,other:5},gy={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class E${constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ui.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=id(t==="dev"?"en":t),o=n.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:a,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let d;try{d=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),gy;if(!t.match(/-|_/))return gy;const p=this.languageUtils.getLanguagePartFromCode(t);d=this.getRule(p,n)}return this.pluralRulesCache[l]=d,d}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,l)=>my[o]-my[l]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",n,a))}}const xy=function(e,t,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=x$(e,t,n);return!l&&o&&xe(n)&&(l=Qp(e,n,a),l===void 0&&(l=Qp(t,n,a))),l},ip=e=>e.replace(/\$/g,"$$$$");class j${constructor(){var n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ui.create("interpolator"),this.options=t,this.format=((n=t==null?void 0:t.interpolation)==null?void 0:n.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:l,prefixEscaped:d,suffix:u,suffixEscaped:p,formatSeparator:m,unescapeSuffix:g,unescapePrefix:v,nestingPrefix:y,nestingPrefixEscaped:C,nestingSuffix:b,nestingSuffixEscaped:j,nestingOptionsSeparator:L,maxReplaces:M,alwaysFormat:E}=t.interpolation;this.escape=n!==void 0?n:y$,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?xr(l):d||"{{",this.suffix=u?xr(u):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?xr(y):C||xr("$t("),this.nestingSuffix=b?xr(b):j||xr(")"),this.nestingOptionsSeparator=L||",",this.maxReplaces=M||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,a)=>(n==null?void 0:n.source)===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,a,o){var C;let l,d,u;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=b=>{if(b.indexOf(this.formatSeparator)<0){const E=xy(n,p,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,a,{...o,...n,interpolationkey:b}):E}const j=b.split(this.formatSeparator),L=j.shift().trim(),M=j.join(this.formatSeparator).trim();return this.format(xy(n,p,L,this.options.keySeparator,this.options.ignoreJSONStructure),M,a,{...o,...n,interpolationkey:L})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,v=((C=o==null?void 0:o.interpolation)==null?void 0:C.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>ip(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?ip(this.escape(b)):ip(b)}].forEach(b=>{for(u=0;l=b.regex.exec(t);){const j=l[1].trim();if(d=m(j),d===void 0)if(typeof g=="function"){const M=g(t,l,o);d=xe(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,j))d="";else if(v){d=l[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${t}`),d="";else!xe(d)&&!this.useRawValueToEscape&&(d=oy(d));const L=b.safeValue(d);if(t=t.replace(l[0],L),v?(b.regex.lastIndex+=d.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,u++,u>=this.maxReplaces)break}}),t}nest(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,d;const u=(p,m)=>{const g=this.nestingOptionsSeparator;if(p.indexOf(g)<0)return p;const v=p.split(new RegExp(`${g}[ ]*{`));let y=`{${v[1]}`;p=v[0],y=this.interpolate(y,d);const C=y.match(/'/g),b=y.match(/"/g);(((C==null?void 0:C.length)??0)%2===0&&!b||b.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),m&&(d={...m,...d})}catch(j){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,j),`${p}${g}${y}`}return d.defaultValue&&d.defaultValue.indexOf(this.prefix)>-1&&delete d.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];d={...a},d=d.replace&&!xe(d.replace)?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(v=>v.trim());o[1]=g.shift(),p=g,m=!0}if(l=n(u.call(this,o[1].trim(),d),d),l&&o[0]===t&&!xe(l))return l;xe(l)||(l=oy(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=p.reduce((g,v)=>this.format(g,v,a.lng,{...a,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const A$=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(d=>{if(d){const[u,...p]=d.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),g=u.trim();n[g]||(n[g]=m),m==="false"&&(n[g]=!1),m==="true"&&(n[g]=!0),isNaN(m)||(n[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:n}},vr=e=>{const t={};return(n,a,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const d=a+JSON.stringify(l);let u=t[d];return u||(u=e(id(a),o),t[d]=u),u(n)}};class M${constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ui.create("formatter"),this.options=t,this.formats={number:vr((n,a)=>{const o=new Intl.NumberFormat(n,{...a});return l=>o.format(l)}),currency:vr((n,a)=>{const o=new Intl.NumberFormat(n,{...a,style:"currency"});return l=>o.format(l)}),datetime:vr((n,a)=>{const o=new Intl.DateTimeFormat(n,{...a});return l=>o.format(l)}),relativetime:vr((n,a)=>{const o=new Intl.RelativeTimeFormat(n,{...a});return l=>o.format(l,a.range||"day")}),list:vr((n,a)=>{const o=new Intl.ListFormat(n,{...a});return l=>o.format(l)})},this.init(t)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=vr(n)}format(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=n.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(u=>u.indexOf(")")>-1)){const u=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,u)].join(this.formatSeparator)}return l.reduce((u,p)=>{var v;const{formatName:m,formatOptions:g}=A$(p);if(this.formats[m]){let y=u;try{const C=((v=o==null?void 0:o.formatParams)==null?void 0:v[o.interpolationkey])||{},b=C.locale||C.lng||o.locale||o.lng||a;y=this.formats[m](u,b,{...g,...o,...C})}catch(C){this.logger.warn(C)}return y}else this.logger.warn(`there was no format function for ${m}`);return u},t)}}const L$=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class O$ extends Ed{constructor(t,n,a){var l,d;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Ui.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(d=(l=this.backend)==null?void 0:l.init)==null||d.call(l,a,o.backend,o)}queueLoad(t,n,a,o){const l={},d={},u={},p={};return t.forEach(m=>{let g=!0;n.forEach(v=>{const y=`${m}|${v}`;!a.reload&&this.store.hasResourceBundle(m,v)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?d[y]===void 0&&(d[y]=!0):(this.state[y]=1,g=!1,d[y]===void 0&&(d[y]=!0),l[y]===void 0&&(l[y]=!0),p[v]===void 0&&(p[v]=!0)))}),g||(u[m]=!0)}),(Object.keys(l).length||Object.keys(d).length)&&this.queue.push({pending:d,pendingCount:Object.keys(d).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(d),toLoadLanguages:Object.keys(u),toLoadNamespaces:Object.keys(p)}}loaded(t,n,a){const o=t.split("|"),l=o[0],d=o[1];n&&this.emit("failedLoading",l,d,n),!n&&a&&this.store.addResourceBundle(l,d,a,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&a&&(this.state[t]=0);const u={};this.queue.forEach(p=>{g$(p.loaded,[l],d),L$(p,t),n&&p.errors.push(n),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{u[m]||(u[m]={});const g=p.loaded[m];g.length&&g.forEach(v=>{u[m][v]===void 0&&(u[m][v]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",u),this.queue=this.queue.filter(p=>!p.done)}read(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,d=arguments.length>5?arguments[5]:void 0;if(!t.length)return d(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:a,tried:o,wait:l,callback:d});return}this.readingCalls++;const u=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,a,o+1,l*2,d)},l);return}d(m,g)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const m=p(t,n);m&&typeof m.then=="function"?m.then(g=>u(null,g)).catch(u):u(null,m)}catch(m){u(m)}return}return p(t,n,u)}prepareLoading(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();xe(t)&&(t=this.languageUtils.toResolveHierarchy(t)),xe(n)&&(n=[n]);const l=this.queueLoad(t,n,a,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(d=>{this.loadOne(d)})}load(t,n,a){this.prepareLoading(t,n,{},a)}reload(t,n,a){this.prepareLoading(t,n,{reload:!0},a)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],l=a[1];this.read(o,l,"read",void 0,void 0,(d,u)=>{d&&this.logger.warn(`${n}loading namespace ${l} for language ${o} failed`,d),!d&&u&&this.logger.log(`${n}loaded namespace ${l} for language ${o}`,u),this.loaded(t,d,u)})}saveMissing(t,n,a,o,l){var p,m,g,v,y;let d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(p=this.services)==null?void 0:p.utils)!=null&&m.hasLoadedNamespace&&!((v=(g=this.services)==null?void 0:g.utils)!=null&&v.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((y=this.backend)!=null&&y.create){const C={...d,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let j;b.length===5?j=b(t,n,a,o,C):j=b(t,n,a,o),j&&typeof j.then=="function"?j.then(L=>u(null,L)).catch(u):u(null,j)}catch(j){u(j)}else b(t,n,a,o,u,C)}!t||!t[0]||this.store.addResource(t[0],n,a,o)}}}const vy=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),xe(e[1])&&(t.defaultValue=e[1]),xe(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(a=>{t[a]=n[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),yy=e=>{var t,n;return xe(e.ns)&&(e.ns=[e.ns]),xe(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),xe(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((n=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:n.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},vc=()=>{},R$=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class jo extends Ed{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=yy(t),this.services={},this.logger=Ui,this.modules={external:[]},R$(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(a=n,n={}),n.defaultNS==null&&n.ns&&(xe(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=vy();this.options={...o,...this.options,...yy(n)},this.options.interpolation={...o.interpolation,...this.options.interpolation},n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Ui.init(l(this.modules.logger),this.options):Ui.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=M$;const v=new hy(this.options);this.store=new uy(this.options.resources,this.options);const y=this.services;y.logger=Ui,y.resourceStore=this.store,y.languageUtils=v,y.pluralResolver=new E$(v,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new j$(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new O$(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(C){for(var b=arguments.length,j=new Array(b>1?b-1:0),L=1;L<b;L++)j[L-1]=arguments[L];t.emit(C,...j)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new ad(this.services,this.options),this.translator.on("*",function(C){for(var b=arguments.length,j=new Array(b>1?b-1:0),L=1;L<b;L++)j[L-1]=arguments[L];t.emit(C,...j)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,a||(a=vc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const p=to(),m=()=>{const g=(v,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(y),a(v,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(t){var l,d;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc;const o=xe(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const u=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(v=>{v!=="cimode"&&u.indexOf(v)<0&&u.push(v)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>p(g)),(d=(l=this.options.preload)==null?void 0:l.forEach)==null||d.call(l,m=>p(m)),this.services.backendConnector.load(u,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(m)})}else a(null)}reloadResources(t,n,a){const o=to();return typeof t=="function"&&(a=t,t=void 0),typeof n=="function"&&(a=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),a||(a=vc),this.services.backendConnector.reload(t,n,l=>{o.resolve(),a(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Kw.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,n){var a=this;this.isLanguageChangingTo=t;const o=to();this.emit("languageChanging",t);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},d=(p,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),n&&n(p,function(){return a.t(...arguments)})},u=p=>{var g,v;!t&&!p&&this.services.languageDetector&&(p=[]);const m=xe(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(v=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||v.call(g,m)),this.loadResources(m,y=>{d(y,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?u(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(u):this.services.languageDetector.detect(u):u(t),o}getFixedT(t,n,a){var o=this;const l=function(d,u){let p;if(typeof u!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),v=2;v<m;v++)g[v-2]=arguments[v];p=o.options.overloadTranslationOptionHandler([d,u].concat(g))}else p={...u};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||l.keyPrefix);const y=o.options.keySeparator||".";let C;return p.keyPrefix&&Array.isArray(d)?C=d.map(b=>`${p.keyPrefix}${y}${b}`):C=p.keyPrefix?`${p.keyPrefix}${y}${d}`:d,o.t(C,p)};return xe(t)?l.lng=t:l.lngs=t,l.ns=n,l.keyPrefix=a,l}t(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...n)}exists(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...n)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const d=(u,p)=>{const m=this.services.backendConnector.state[`${u}|${p}`];return m===-1||m===0||m===2};if(n.precheck){const u=n.precheck(this,d);if(u!==void 0)return u}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||d(a,t)&&(!o||d(l,t)))}loadNamespaces(t,n){const a=to();return this.options.ns?(xe(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(t,n){const a=to();xe(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(d=>o.indexOf(d)<0&&this.services.languageUtils.isSupportedCode(d));return l.length?(this.options.preload=o.concat(l),this.loadResources(d=>{a.resolve(),n&&n(d)}),a):(n&&n(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((l=this.services)==null?void 0:l.languageUtils)||new hy(vy());return n.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new jo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new jo(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(u=>{l[u]=this[u]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},a){const u=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},Object.keys(p[m]).reduce((g,v)=>(g[v]={...p[m][v]},g),{})),{});l.store=new uy(u,o),l.services.resourceStore=l.store}return l.translator=new ad(l.services,o),l.translator.on("*",function(u){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];l.emit(u,...m)}),l.init(o,n),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Rt=jo.createInstance();Rt.createInstance=jo.createInstance;Rt.createInstance;Rt.dir;Rt.init;Rt.loadResources;Rt.reloadResources;Rt.use;Rt.changeLanguage;Rt.getFixedT;Rt.t;Rt.exists;Rt.setDefaultNamespace;Rt.hasLoadedNamespace;Rt.loadNamespaces;Rt.loadLanguages;function Jp(e){"@babel/helpers - typeof";return Jp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jp(e)}function Qw(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Jp(XMLHttpRequest))==="object"}function V$(e){return!!e&&typeof e.then=="function"}function k$(e){return V$(e)?e:Promise.resolve(e)}const D$="modulepreload",H$=function(e){return"/"+e},wy={},z$=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),p=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=d(n.map(m=>{if(m=H$(m),m in wy)return;wy[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":D$,g||(y.as="script"),y.crossOrigin="",y.href=m,p&&y.setAttribute("nonce",p),document.head.appendChild(y),g)return new Promise((C,b)=>{y.addEventListener("load",C),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return o.then(d=>{for(const u of d||[])u.status==="rejected"&&l(u.reason);return t().catch(l)})};function by(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function Sy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?by(Object(n),!0).forEach(function(a){P$(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):by(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function P$(e,t,n){return(t=N$(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N$(e){var t=$$(e,"string");return Ma(t)=="symbol"?t:t+""}function $$(e,t){if(Ma(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(Ma(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ma(e){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ma(e)}var Wn=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Wn=global.fetch:typeof window<"u"&&window.fetch&&(Wn=window.fetch);var Ao;Qw()&&(typeof global<"u"&&global.XMLHttpRequest?Ao=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ao=window.XMLHttpRequest));var rd;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?rd=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(rd=window.ActiveXObject));typeof Wn!="function"&&(Wn=void 0);if(!Wn&&!Ao&&!rd)try{z$(()=>import("./browser-ponyfill-BywHXR0g.js").then(e=>e.b),[]).then(function(e){Wn=e.default}).catch(function(){})}catch{}var eh=function(t,n){if(n&&Ma(n)==="object"){var a="";for(var o in n)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},Cy=function(t,n,a,o){var l=function(p){if(!p.ok)return a(p.statusText||"Error",{status:p.status});p.text().then(function(m){a(null,{status:p.status,data:m})}).catch(a)};if(o){var d=o(t,n);if(d instanceof Promise){d.then(l).catch(a);return}}typeof fetch=="function"?fetch(t,n).then(l).catch(a):Wn(t,n).then(l).catch(a)},Ty=!1,B$=function(t,n,a,o){t.queryStringParams&&(n=eh(n,t.queryStringParams));var l=Sy({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(l["Content-Type"]="application/json");var d=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,u=Sy({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:l},Ty?{}:d),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Cy(n,u,o,p)}catch(m){if(!d||Object.keys(d).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(d).forEach(function(g){delete u[g]}),Cy(n,u,o,p),Ty=!0}catch(g){o(g)}}},I$=function(t,n,a,o){a&&Ma(a)==="object"&&(a=eh("",a).slice(1)),t.queryStringParams&&(n=eh(n,t.queryStringParams));try{var l=Ao?new Ao:new rd("MSXML2.XMLHTTP.3.0");l.open(a?"POST":"GET",n,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,a&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var d=t.customHeaders;if(d=typeof d=="function"?d():d,d)for(var u in d)l.setRequestHeader(u,d[u]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(a)}catch(p){console&&console.log(p)}},U$=function(t,n,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},Wn&&n.indexOf("file:")!==0)return B$(t,n,a,o);if(Qw()||typeof ActiveXObject=="function")return I$(t,n,a,o);o(new Error("No fetch and no xhr implementation found!"))};function $r(e){"@babel/helpers - typeof";return $r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$r(e)}function Ey(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function np(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ey(Object(n),!0).forEach(function(a){Jw(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function _$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G$(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,e8(a.key),a)}}function Y$(e,t,n){return t&&G$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jw(e,t,n){return(t=e8(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e8(e){var t=q$(e,"string");return $r(t)=="symbol"?t:t+""}function q$(e,t){if($r(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if($r(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var F$=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,a,o){return Jw({},a,o||"")},parseLoadPayload:function(n,a){},request:U$,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},t8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};_$(this,e),this.services=t,this.options=n,this.allOptions=a,this.type="backend",this.init(t,n,a)}return Y$(e,[{key:"init",value:function(n){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=n,this.options=np(np(np({},F$()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var d=setInterval(function(){return a.reload()},this.options.reloadInterval);$r(d)==="object"&&typeof d.unref=="function"&&d.unref()}}},{key:"readMulti",value:function(n,a,o){this._readAny(n,n,a,a,o)}},{key:"read",value:function(n,a,o){this._readAny([n],n,[a],a,o)}},{key:"_readAny",value:function(n,a,o,l,d){var u=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(n,o)),p=k$(p),p.then(function(m){if(!m)return d(null,{});var g=u.services.interpolator.interpolate(m,{lng:n.join("+"),ns:o.join("+")});u.loadUrl(g,d,a,l)})}},{key:"loadUrl",value:function(n,a,o,l){var d=this,u=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(u,p);this.options.request(this.options,n,m,function(g,v){if(v&&(v.status>=500&&v.status<600||!v.status))return a("failed loading "+n+"; status code: "+v.status,!0);if(v&&v.status>=400&&v.status<500)return a("failed loading "+n+"; status code: "+v.status,!1);if(!v&&g&&g.message){var y=g.message.toLowerCase(),C=["failed","fetch","network","load"].find(function(L){return y.indexOf(L)>-1});if(C)return a("failed loading "+n+": "+g.message,!0)}if(g)return a(g,!1);var b,j;try{typeof v.data=="string"?b=d.options.parse(v.data,o,l):b=v.data}catch{j="failed parsing "+n+" to json"}if(j)return a(j,!1);a(null,b)})}},{key:"create",value:function(n,a,o,l,d){var u=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var p=this.options.parsePayload(a,o,l),m=0,g=[],v=[];n.forEach(function(y){var C=u.options.addPath;typeof u.options.addPath=="function"&&(C=u.options.addPath(y,a));var b=u.services.interpolator.interpolate(C,{lng:y,ns:a});u.options.request(u.options,b,p,function(j,L){m+=1,g.push(j),v.push(L),m===n.length&&typeof d=="function"&&d(g,v)})})}}},{key:"reload",value:function(){var n=this,a=this.services,o=a.backendConnector,l=a.languageUtils,d=a.logger,u=o.language;if(!(u&&u.toLowerCase()==="cimode")){var p=[],m=function(v){var y=l.toResolveHierarchy(v);y.forEach(function(C){p.indexOf(C)<0&&p.push(C)})};m(u),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),p.forEach(function(g){n.allOptions.ns.forEach(function(v){o.read(g,v,"read",null,null,function(y,C){y&&d.warn("loading namespace ".concat(v," for language ").concat(g," failed"),y),!y&&C&&d.log("loaded namespace ".concat(v," for language ").concat(g),C),o.loaded("".concat(g,"|").concat(v),y,C)})})})}}}])}();t8.type="backend";const{slice:X$,forEach:Z$}=[];function W$(e){return Z$.call(X$.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}function K$(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(e))}const jy=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Q$=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(a.maxAge>0){const d=a.maxAge-0;if(Number.isNaN(d))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(d)}`}if(a.domain){if(!jy.test(a.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${a.domain}`}if(a.path){if(!jy.test(a.path))throw new TypeError("option path is invalid");l+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(l+="; Partitioned"),l},Ay={create(e,t,n,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+n*60*1e3)),a&&(o.domain=a),document.cookie=Q$(e,t,o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let a=0;a<n.length;a++){let o=n[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var J$={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Ay.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:a,cookieDomain:o,cookieOptions:l}=t;n&&typeof document<"u"&&Ay.create(n,e,a,o,l)}},eB={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const d=o.substring(1).split("&");for(let u=0;u<d.length;u++){const p=d[u].indexOf("=");p>0&&d[u].substring(0,p)===t&&(n=d[u].substring(p+1))}}return n}},tB={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:n}=e,a;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const d=l.substring(1);if(t){const u=d.split("&");for(let p=0;p<u.length;p++){const m=u[p].indexOf("=");m>0&&u[p].substring(0,m)===t&&(a=u[p].substring(m+1))}}if(a)return a;if(!a&&n>-1){const u=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(u)?(o=u[typeof n=="number"?n:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let yr=null;const My=()=>{if(yr!==null)return yr;try{if(yr=typeof window<"u"&&window.localStorage!==null,!yr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{yr=!1}return yr};var iB={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&My())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&My()&&window.localStorage.setItem(n,e)}};let wr=null;const Ly=()=>{if(wr!==null)return wr;try{if(wr=typeof window<"u"&&window.sessionStorage!==null,!wr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{wr=!1}return wr};var nB={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Ly())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Ly()&&window.sessionStorage.setItem(n,e)}},aB={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:a,language:o}=navigator;if(n)for(let l=0;l<n.length;l++)t.push(n[l]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},rB={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(n=a.getAttribute("lang")),n}},sB={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(o=n[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},oB={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,a=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[n]}};let i8=!1;try{document.cookie,i8=!0}catch{}const n8=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];i8||n8.splice(1,1);const lB=()=>({order:n8,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class a8{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=W$(n,this.options||{},lB()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(J$),this.addDetector(eB),this.addDetector(iB),this.addDetector(nB),this.addDetector(aB),this.addDetector(rB),this.addDetector(sB),this.addDetector(oB),this.addDetector(tB)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(n=n.concat(o))}}),n=n.filter(a=>a!=null&&!K$(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}a8.type="languageDetector";Rt.use(t8).use(a8).use(fO).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const cB=R.createContext(void 0),dB=({children:e})=>{const{i18n:t}=a1(),n=a=>{t.changeLanguage(a).then(()=>{window.location.reload()})};return f.jsx(cB.Provider,{value:{language:t.language,setLanguage:n},children:e})};Nb.createRoot(document.getElementById("root")).render(f.jsxs(De.StrictMode,{children:[f.jsx(nC,{styles:cC}),f.jsx(iS,{basename:"/",children:f.jsx(dB,{children:f.jsx(p$,{})})})]}));export{uB as c,sd as g};
