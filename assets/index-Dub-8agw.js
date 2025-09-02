function Ob(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var vB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _f={exports:{}},Ys={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux;function Rb(){if(Ux)return Ys;Ux=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var d=null;if(l!==void 0&&(d=""+l),o.key!==void 0&&(d=""+o.key),"key"in o){l={};for(var u in o)u!=="key"&&(l[u]=o[u])}else l=o;return o=l.ref,{$$typeof:e,type:a,key:d,ref:o!==void 0?o:null,props:l}}return Ys.Fragment=t,Ys.jsx=n,Ys.jsxs=n,Ys}var _x;function kb(){return _x||(_x=1,_f.exports=Rb()),_f.exports}var h=kb(),Gf={exports:{}},Fs={},qf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function Vb(){return Gx||(Gx=1,function(e){function t(B,W){var J=B.length;B.push(W);e:for(;0<J;){var ie=J-1>>>1,k=B[ie];if(0<o(k,W))B[ie]=W,B[J]=k,J=ie;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var W=B[0],J=B.pop();if(J!==W){B[0]=J;e:for(var ie=0,k=B.length,X=k>>>1;ie<X;){var ae=2*(ie+1)-1,re=B[ae],de=ae+1,Se=B[de];if(0>o(re,J))de<k&&0>o(Se,re)?(B[ie]=Se,B[de]=J,ie=de):(B[ie]=re,B[ae]=J,ie=ae);else if(de<k&&0>o(Se,J))B[ie]=Se,B[de]=J,ie=de;else break e}}return W}function o(B,W){var J=B.sortIndex-W.sortIndex;return J!==0?J:B.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var d=Date,u=d.now();e.unstable_now=function(){return d.now()-u}}var f=[],m=[],g=1,v=null,y=3,S=!1,b=!1,j=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function V(B){for(var W=n(m);W!==null;){if(W.callback===null)a(m);else if(W.startTime<=B)a(m),W.sortIndex=W.expirationTime,t(f,W);else break;W=n(m)}}function O(B){if(j=!1,V(B),!b)if(n(f)!==null)b=!0,N||(N=!0,ne());else{var W=n(m);W!==null&&oe(O,W.startTime-B)}}var N=!1,P=-1,_=5,Y=-1;function F(){return L?!0:!(e.unstable_now()-Y<_)}function K(){if(L=!1,N){var B=e.unstable_now();Y=B;var W=!0;try{e:{b=!1,j&&(j=!1,E(P),P=-1),S=!0;var J=y;try{t:{for(V(B),v=n(f);v!==null&&!(v.expirationTime>B&&F());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,y=v.priorityLevel;var k=ie(v.expirationTime<=B);if(B=e.unstable_now(),typeof k=="function"){v.callback=k,V(B),W=!0;break t}v===n(f)&&a(f),V(B)}else a(f);v=n(f)}if(v!==null)W=!0;else{var X=n(m);X!==null&&oe(O,X.startTime-B),W=!1}}break e}finally{v=null,y=J,S=!1}W=void 0}}finally{W?ne():N=!1}}}var ne;if(typeof T=="function")ne=function(){T(K)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=K,ne=function(){ue.postMessage(null)}}else ne=function(){M(K,0)};function oe(B,W){P=M(function(){B(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(B){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var J=y;y=W;try{return B()}finally{y=J}},e.unstable_requestPaint=function(){L=!0},e.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=y;y=B;try{return W()}finally{y=J}},e.unstable_scheduleCallback=function(B,W,J){var ie=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ie+J:ie):J=ie,B){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=J+k,B={id:g++,callback:W,priorityLevel:B,startTime:J,expirationTime:k,sortIndex:-1},J>ie?(B.sortIndex=J,t(m,B),n(f)===null&&B===n(m)&&(j?(E(P),P=-1):j=!0,oe(O,J-ie))):(B.sortIndex=k,t(f,B),b||S||(b=!0,N||(N=!0,ne()))),B},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(B){var W=y;return function(){var J=y;y=W;try{return B.apply(this,arguments)}finally{y=J}}}}(Yf)),Yf}var qx;function Hb(){return qx||(qx=1,qf.exports=Vb()),qf.exports}var Ff={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx;function Db(){if(Yx)return ve;Yx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),d=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function L(k,X,ae){this.props=k,this.context=X,this.refs=j,this.updater=ae||S}L.prototype.isReactComponent={},L.prototype.setState=function(k,X){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,X,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function M(){}M.prototype=L.prototype;function E(k,X,ae){this.props=k,this.context=X,this.refs=j,this.updater=ae||S}var T=E.prototype=new M;T.constructor=E,b(T,L.prototype),T.isPureReactComponent=!0;var V=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function P(k,X,ae,re,de,Se){return ae=Se.ref,{$$typeof:e,type:k,key:X,ref:ae!==void 0?ae:null,props:Se}}function _(k,X){return P(k.type,X,void 0,void 0,void 0,k.props)}function Y(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function F(k){var X={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ae){return X[ae]})}var K=/\/+/g;function ne(k,X){return typeof k=="object"&&k!==null&&k.key!=null?F(""+k.key):X.toString(36)}function le(){}function ue(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(le,le):(k.status="pending",k.then(function(X){k.status==="pending"&&(k.status="fulfilled",k.value=X)},function(X){k.status==="pending"&&(k.status="rejected",k.reason=X)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function oe(k,X,ae,re,de){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(Se){case"bigint":case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case e:case t:he=!0;break;case g:return he=k._init,oe(he(k._payload),X,ae,re,de)}}if(he)return de=de(k),he=re===""?"."+ne(k,0):re,V(de)?(ae="",he!=null&&(ae=he.replace(K,"$&/")+"/"),oe(de,X,ae,"",function(Tt){return Tt})):de!=null&&(Y(de)&&(de=_(de,ae+(de.key==null||k&&k.key===de.key?"":(""+de.key).replace(K,"$&/")+"/")+he)),X.push(de)),1;he=0;var dt=re===""?".":re+":";if(V(k))for(var Ve=0;Ve<k.length;Ve++)re=k[Ve],Se=dt+ne(re,Ve),he+=oe(re,X,ae,Se,de);else if(Ve=y(k),typeof Ve=="function")for(k=Ve.call(k),Ve=0;!(re=k.next()).done;)re=re.value,Se=dt+ne(re,Ve++),he+=oe(re,X,ae,Se,de);else if(Se==="object"){if(typeof k.then=="function")return oe(ue(k),X,ae,re,de);throw X=String(k),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return he}function B(k,X,ae){if(k==null)return k;var re=[],de=0;return oe(k,re,"","",function(Se){return X.call(ae,Se,de++)}),re}function W(k){if(k._status===-1){var X=k._result;X=X(),X.then(function(ae){(k._status===0||k._status===-1)&&(k._status=1,k._result=ae)},function(ae){(k._status===0||k._status===-1)&&(k._status=2,k._result=ae)}),k._status===-1&&(k._status=0,k._result=X)}if(k._status===1)return k._result.default;throw k._result}var J=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ie(){}return ve.Children={map:B,forEach:function(k,X,ae){B(k,function(){X.apply(this,arguments)},ae)},count:function(k){var X=0;return B(k,function(){X++}),X},toArray:function(k){return B(k,function(X){return X})||[]},only:function(k){if(!Y(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ve.Component=L,ve.Fragment=n,ve.Profiler=o,ve.PureComponent=E,ve.StrictMode=a,ve.Suspense=f,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ve.__COMPILER_RUNTIME={__proto__:null,c:function(k){return O.H.useMemoCache(k)}},ve.cache=function(k){return function(){return k.apply(null,arguments)}},ve.cloneElement=function(k,X,ae){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var re=b({},k.props),de=k.key,Se=void 0;if(X!=null)for(he in X.ref!==void 0&&(Se=void 0),X.key!==void 0&&(de=""+X.key),X)!N.call(X,he)||he==="key"||he==="__self"||he==="__source"||he==="ref"&&X.ref===void 0||(re[he]=X[he]);var he=arguments.length-2;if(he===1)re.children=ae;else if(1<he){for(var dt=Array(he),Ve=0;Ve<he;Ve++)dt[Ve]=arguments[Ve+2];re.children=dt}return P(k.type,de,void 0,void 0,Se,re)},ve.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},ve.createElement=function(k,X,ae){var re,de={},Se=null;if(X!=null)for(re in X.key!==void 0&&(Se=""+X.key),X)N.call(X,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(de[re]=X[re]);var he=arguments.length-2;if(he===1)de.children=ae;else if(1<he){for(var dt=Array(he),Ve=0;Ve<he;Ve++)dt[Ve]=arguments[Ve+2];de.children=dt}if(k&&k.defaultProps)for(re in he=k.defaultProps,he)de[re]===void 0&&(de[re]=he[re]);return P(k,Se,void 0,void 0,null,de)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(k){return{$$typeof:u,render:k}},ve.isValidElement=Y,ve.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:W}},ve.memo=function(k,X){return{$$typeof:m,type:k,compare:X===void 0?null:X}},ve.startTransition=function(k){var X=O.T,ae={};O.T=ae;try{var re=k(),de=O.S;de!==null&&de(ae,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(ie,J)}catch(Se){J(Se)}finally{O.T=X}},ve.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ve.use=function(k){return O.H.use(k)},ve.useActionState=function(k,X,ae){return O.H.useActionState(k,X,ae)},ve.useCallback=function(k,X){return O.H.useCallback(k,X)},ve.useContext=function(k){return O.H.useContext(k)},ve.useDebugValue=function(){},ve.useDeferredValue=function(k,X){return O.H.useDeferredValue(k,X)},ve.useEffect=function(k,X,ae){var re=O.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(k,X)},ve.useId=function(){return O.H.useId()},ve.useImperativeHandle=function(k,X,ae){return O.H.useImperativeHandle(k,X,ae)},ve.useInsertionEffect=function(k,X){return O.H.useInsertionEffect(k,X)},ve.useLayoutEffect=function(k,X){return O.H.useLayoutEffect(k,X)},ve.useMemo=function(k,X){return O.H.useMemo(k,X)},ve.useOptimistic=function(k,X){return O.H.useOptimistic(k,X)},ve.useReducer=function(k,X,ae){return O.H.useReducer(k,X,ae)},ve.useRef=function(k){return O.H.useRef(k)},ve.useState=function(k){return O.H.useState(k)},ve.useSyncExternalStore=function(k,X,ae){return O.H.useSyncExternalStore(k,X,ae)},ve.useTransition=function(){return O.H.useTransition()},ve.version="19.1.1",ve}var Fx;function ap(){return Fx||(Fx=1,Ff.exports=Db()),Ff.exports}var Xf={exports:{}},At={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function zb(){if(Xx)return At;Xx=1;var e=ap();function t(f){var m="https://react.dev/errors/"+f;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:f,containerInfo:m,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(f,m){if(f==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,At.createPortal=function(f,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(f,m,null,g)},At.flushSync=function(f){var m=d.T,g=a.p;try{if(d.T=null,a.p=2,f)return f()}finally{d.T=m,a.p=g,a.d.f()}},At.preconnect=function(f,m){typeof f=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(f,m))},At.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},At.preinit=function(f,m){if(typeof f=="string"&&m&&typeof m.as=="string"){var g=m.as,v=u(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(f,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&a.d.X(f,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},At.preinitModule=function(f,m){if(typeof f=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=u(m.as,m.crossOrigin);a.d.M(f,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(f)},At.preload=function(f,m){if(typeof f=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=u(g,m.crossOrigin);a.d.L(f,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},At.preloadModule=function(f,m){if(typeof f=="string")if(m){var g=u(m.as,m.crossOrigin);a.d.m(f,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(f)},At.requestFormReset=function(f){a.d.r(f)},At.unstable_batchedUpdates=function(f,m){return f(m)},At.useFormState=function(f,m,g){return d.H.useFormState(f,m,g)},At.useFormStatus=function(){return d.H.useHostTransitionStatus()},At.version="19.1.1",At}var Zx;function Pb(){if(Zx)return Xf.exports;Zx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Xf.exports=zb(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;function Nb(){if(Wx)return Fs;Wx=1;var e=Hb(),t=ap(),n=Pb();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,s=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(s=r.return),i=r.return;while(i)}return r.tag===3?s:null}function d(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function u(i){if(l(i)!==i)throw Error(a(188))}function f(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var s=i,c=r;;){var p=s.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){s=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===s)return u(p),i;if(x===c)return u(p),r;x=x.sibling}throw Error(a(188))}if(s.return!==c.return)s=p,c=x;else{for(var C=!1,A=p.child;A;){if(A===s){C=!0,s=p,c=x;break}if(A===c){C=!0,c=p,s=x;break}A=A.sibling}if(!C){for(A=x.child;A;){if(A===s){C=!0,s=x,c=p;break}if(A===c){C=!0,c=x,s=p;break}A=A.sibling}if(!C)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?i:r}function m(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=m(i),r!==null)return r;i=i.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var le=Symbol.for("react.client.reference");function ue(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===le?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case L:return"Profiler";case j:return"StrictMode";case O:return"Suspense";case N:return"SuspenseList";case Y:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case S:return"Portal";case T:return(i.displayName||"Context")+".Provider";case E:return(i._context.displayName||"Context")+".Consumer";case V:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:ue(i.type)||"Memo";case _:r=i._payload,i=i._init;try{return ue(i(r))}catch{}}return null}var oe=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ie=[],k=-1;function X(i){return{current:i}}function ae(i){0>k||(i.current=ie[k],ie[k]=null,k--)}function re(i,r){k++,ie[k]=i.current,i.current=r}var de=X(null),Se=X(null),he=X(null),dt=X(null);function Ve(i,r){switch(re(he,r),re(Se,i),re(de,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?gx(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=gx(r),i=xx(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ae(de),re(de,i)}function Tt(){ae(de),ae(Se),ae(he)}function Jn(i){i.memoizedState!==null&&re(dt,i);var r=de.current,s=xx(r,i.type);r!==s&&(re(Se,i),re(de,s))}function Zi(i){Se.current===i&&(ae(de),ae(Se)),dt.current===i&&(ae(dt),Is._currentValue=J)}var li=Object.prototype.hasOwnProperty,Ld=e.unstable_scheduleCallback,Od=e.unstable_cancelCallback,l8=e.unstable_shouldYield,c8=e.unstable_requestPaint,ki=e.unstable_now,d8=e.unstable_getCurrentPriorityLevel,W1=e.unstable_ImmediatePriority,K1=e.unstable_UserBlockingPriority,Po=e.unstable_NormalPriority,u8=e.unstable_LowPriority,Q1=e.unstable_IdlePriority,f8=e.log,h8=e.unstable_setDisableYieldValue,Zr=null,Zt=null;function yn(i){if(typeof f8=="function"&&h8(i),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(Zr,i)}catch{}}var Wt=Math.clz32?Math.clz32:g8,p8=Math.log,m8=Math.LN2;function g8(i){return i>>>=0,i===0?32:31-(p8(i)/m8|0)|0}var No=256,$o=4194304;function ea(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Bo(i,r,s){var c=i.pendingLanes;if(c===0)return 0;var p=0,x=i.suspendedLanes,C=i.pingedLanes;i=i.warmLanes;var A=c&134217727;return A!==0?(c=A&~x,c!==0?p=ea(c):(C&=A,C!==0?p=ea(C):s||(s=A&~i,s!==0&&(p=ea(s))))):(A=c&~x,A!==0?p=ea(A):C!==0?p=ea(C):s||(s=c&~i,s!==0&&(p=ea(s)))),p===0?0:r!==0&&r!==p&&(r&x)===0&&(x=p&-p,s=r&-r,x>=s||x===32&&(s&4194048)!==0)?r:p}function Wr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function x8(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J1(){var i=No;return No<<=1,(No&4194048)===0&&(No=256),i}function e2(){var i=$o;return $o<<=1,($o&62914560)===0&&($o=4194304),i}function Rd(i){for(var r=[],s=0;31>s;s++)r.push(i);return r}function Kr(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function v8(i,r,s,c,p,x){var C=i.pendingLanes;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=s,i.entangledLanes&=s,i.errorRecoveryDisabledLanes&=s,i.shellSuspendCounter=0;var A=i.entanglements,H=i.expirationTimes,U=i.hiddenUpdates;for(s=C&~s;0<s;){var Z=31-Wt(s),ee=1<<Z;A[Z]=0,H[Z]=-1;var G=U[Z];if(G!==null)for(U[Z]=null,Z=0;Z<G.length;Z++){var q=G[Z];q!==null&&(q.lane&=-536870913)}s&=~ee}c!==0&&t2(i,c,0),x!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=x&~(C&~r))}function t2(i,r,s){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-Wt(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|s&4194090}function i2(i,r){var s=i.entangledLanes|=r;for(i=i.entanglements;s;){var c=31-Wt(s),p=1<<c;p&r|i[c]&r&&(i[c]|=r),s&=~p}}function kd(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Vd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function n2(){var i=W.p;return i!==0?i:(i=window.event,i===void 0?32:zx(i.type))}function y8(i,r){var s=W.p;try{return W.p=i,r()}finally{W.p=s}}var wn=Math.random().toString(36).slice(2),Et="__reactFiber$"+wn,Nt="__reactProps$"+wn,Oa="__reactContainer$"+wn,Hd="__reactEvents$"+wn,w8="__reactListeners$"+wn,b8="__reactHandles$"+wn,a2="__reactResources$"+wn,Qr="__reactMarker$"+wn;function Dd(i){delete i[Et],delete i[Nt],delete i[Hd],delete i[w8],delete i[b8]}function Ra(i){var r=i[Et];if(r)return r;for(var s=i.parentNode;s;){if(r=s[Oa]||s[Et]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(i=bx(i);i!==null;){if(s=i[Et])return s;i=bx(i)}return r}i=s,s=i.parentNode}return null}function ka(i){if(i=i[Et]||i[Oa]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Jr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function Va(i){var r=i[a2];return r||(r=i[a2]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ut(i){i[Qr]=!0}var r2=new Set,s2={};function ta(i,r){Ha(i,r),Ha(i+"Capture",r)}function Ha(i,r){for(s2[i]=r,i=0;i<r.length;i++)r2.add(r[i])}var S8=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),o2={},l2={};function C8(i){return li.call(l2,i)?!0:li.call(o2,i)?!1:S8.test(i)?l2[i]=!0:(o2[i]=!0,!1)}function Io(i,r,s){if(C8(r))if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+s)}}function Uo(i,r,s){if(s===null)i.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+s)}}function Wi(i,r,s,c){if(c===null)i.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttributeNS(r,s,""+c)}}var zd,c2;function Da(i){if(zd===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);zd=r&&r[1]||"",c2=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zd+i+c2}var Pd=!1;function Nd(i,r){if(!i||Pd)return"";Pd=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(q){var G=q}Reflect.construct(i,[],ee)}else{try{ee.call()}catch(q){G=q}i.call(ee.prototype)}}else{try{throw Error()}catch(q){G=q}(ee=i())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=c.DetermineComponentFrameRoot(),C=x[0],A=x[1];if(C&&A){var H=C.split(`
`),U=A.split(`
`);for(p=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;p<U.length&&!U[p].includes("DetermineComponentFrameRoot");)p++;if(c===H.length||p===U.length)for(c=H.length-1,p=U.length-1;1<=c&&0<=p&&H[c]!==U[p];)p--;for(;1<=c&&0<=p;c--,p--)if(H[c]!==U[p]){if(c!==1||p!==1)do if(c--,p--,0>p||H[c]!==U[p]){var Z=`
`+H[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=p);break}}}finally{Pd=!1,Error.prepareStackTrace=s}return(s=i?i.displayName||i.name:"")?Da(s):""}function T8(i){switch(i.tag){case 26:case 27:case 5:return Da(i.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 15:return Nd(i.type,!1);case 11:return Nd(i.type.render,!1);case 1:return Nd(i.type,!0);case 31:return Da("Activity");default:return""}}function d2(i){try{var r="";do r+=T8(i),i=i.return;while(i);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ci(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function u2(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function E8(i){var r=u2(i)?"checked":"value",s=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),c=""+i[r];if(!i.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var p=s.get,x=s.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return p.call(this)},set:function(C){c=""+C,x.call(this,C)}}),Object.defineProperty(i,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function _o(i){i._valueTracker||(i._valueTracker=E8(i))}function f2(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return i&&(c=u2(i)?i.checked?"true":"false":i.value),i=c,i!==s?(r.setValue(i),!0):!1}function Go(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var j8=/[\n"\\]/g;function di(i){return i.replace(j8,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function $d(i,r,s,c,p,x,C,A){i.name="",C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?i.type=C:i.removeAttribute("type"),r!=null?C==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+ci(r)):i.value!==""+ci(r)&&(i.value=""+ci(r)):C!=="submit"&&C!=="reset"||i.removeAttribute("value"),r!=null?Bd(i,C,ci(r)):s!=null?Bd(i,C,ci(s)):c!=null&&i.removeAttribute("value"),p==null&&x!=null&&(i.defaultChecked=!!x),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+ci(A):i.removeAttribute("name")}function h2(i,r,s,c,p,x,C,A){if(x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(i.type=x),r!=null||s!=null){if(!(x!=="submit"&&x!=="reset"||r!=null))return;s=s!=null?""+ci(s):"",r=r!=null?""+ci(r):s,A||r===i.value||(i.value=r),i.defaultValue=r}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=A?i.checked:!!c,i.defaultChecked=!!c,C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"&&(i.name=C)}function Bd(i,r,s){r==="number"&&Go(i.ownerDocument)===i||i.defaultValue===""+s||(i.defaultValue=""+s)}function za(i,r,s,c){if(i=i.options,r){r={};for(var p=0;p<s.length;p++)r["$"+s[p]]=!0;for(s=0;s<i.length;s++)p=r.hasOwnProperty("$"+i[s].value),i[s].selected!==p&&(i[s].selected=p),p&&c&&(i[s].defaultSelected=!0)}else{for(s=""+ci(s),r=null,p=0;p<i.length;p++){if(i[p].value===s){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}r!==null||i[p].disabled||(r=i[p])}r!==null&&(r.selected=!0)}}function p2(i,r,s){if(r!=null&&(r=""+ci(r),r!==i.value&&(i.value=r),s==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=s!=null?""+ci(s):""}function m2(i,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(oe(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=ci(r),i.defaultValue=s,c=i.textContent,c===s&&c!==""&&c!==null&&(i.value=c)}function Pa(i,r){if(r){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=r;return}}i.textContent=r}var A8=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function g2(i,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,s):typeof s!="number"||s===0||A8.has(r)?r==="float"?i.cssFloat=s:i[r]=(""+s).trim():i[r]=s+"px"}function x2(i,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var p in r)c=r[p],r.hasOwnProperty(p)&&s[p]!==c&&g2(i,p,c)}else for(var x in r)r.hasOwnProperty(x)&&g2(i,x,r[x])}function Id(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M8=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L8=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(i){return L8.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var Ud=null;function _d(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Na=null,$a=null;function v2(i){var r=ka(i);if(r&&(i=r.stateNode)){var s=i[Nt]||null;e:switch(i=r.stateNode,r.type){case"input":if($d(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+di(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==i&&c.form===i.form){var p=c[Nt]||null;if(!p)throw Error(a(90));$d(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===i.form&&f2(c)}break e;case"textarea":p2(i,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&za(i,!!s.multiple,r,!1)}}}var Gd=!1;function y2(i,r,s){if(Gd)return i(r,s);Gd=!0;try{var c=i(r);return c}finally{if(Gd=!1,(Na!==null||$a!==null)&&(Ol(),Na&&(r=Na,i=$a,$a=Na=null,v2(r),i)))for(r=0;r<i.length;r++)v2(i[r])}}function es(i,r){var s=i.stateNode;if(s===null)return null;var c=s[Nt]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=!1;if(Ki)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){qd=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{qd=!1}var bn=null,Yd=null,Yo=null;function w2(){if(Yo)return Yo;var i,r=Yd,s=r.length,c,p="value"in bn?bn.value:bn.textContent,x=p.length;for(i=0;i<s&&r[i]===p[i];i++);var C=s-i;for(c=1;c<=C&&r[s-c]===p[x-c];c++);return Yo=p.slice(i,1<c?1-c:void 0)}function Fo(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Xo(){return!0}function b2(){return!1}function $t(i){function r(s,c,p,x,C){this._reactName=s,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(s=i[A],this[A]=s?s(x):x[A]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Xo:b2,this.isPropagationStopped=b2,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),r}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=$t(ia),is=g({},ia,{view:0,detail:0}),O8=$t(is),Fd,Xd,ns,Wo=g({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ns&&(ns&&i.type==="mousemove"?(Fd=i.screenX-ns.screenX,Xd=i.screenY-ns.screenY):Xd=Fd=0,ns=i),Fd)},movementY:function(i){return"movementY"in i?i.movementY:Xd}}),S2=$t(Wo),R8=g({},Wo,{dataTransfer:0}),k8=$t(R8),V8=g({},is,{relatedTarget:0}),Zd=$t(V8),H8=g({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),D8=$t(H8),z8=g({},ia,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),P8=$t(z8),N8=g({},ia,{data:0}),C2=$t(N8),$8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U8(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=I8[i])?!!r[i]:!1}function Wd(){return U8}var _8=g({},is,{key:function(i){if(i.key){var r=$8[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Fo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?B8[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(i){return i.type==="keypress"?Fo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),G8=$t(_8),q8=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T2=$t(q8),Y8=g({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),F8=$t(Y8),X8=g({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z8=$t(X8),W8=g({},Wo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),K8=$t(W8),Q8=g({},ia,{newState:0,oldState:0}),J8=$t(Q8),e7=[9,13,27,32],Kd=Ki&&"CompositionEvent"in window,as=null;Ki&&"documentMode"in document&&(as=document.documentMode);var t7=Ki&&"TextEvent"in window&&!as,E2=Ki&&(!Kd||as&&8<as&&11>=as),j2=" ",A2=!1;function M2(i,r){switch(i){case"keyup":return e7.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L2(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ba=!1;function i7(i,r){switch(i){case"compositionend":return L2(r);case"keypress":return r.which!==32?null:(A2=!0,j2);case"textInput":return i=r.data,i===j2&&A2?null:i;default:return null}}function n7(i,r){if(Ba)return i==="compositionend"||!Kd&&M2(i,r)?(i=w2(),Yo=Yd=bn=null,Ba=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return E2&&r.locale!=="ko"?null:r.data;default:return null}}var a7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O2(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!a7[i.type]:r==="textarea"}function R2(i,r,s,c){Na?$a?$a.push(c):$a=[c]:Na=c,r=zl(r,"onChange"),0<r.length&&(s=new Zo("onChange","change",null,s,c),i.push({event:s,listeners:r}))}var rs=null,ss=null;function r7(i){ux(i,0)}function Ko(i){var r=Jr(i);if(f2(r))return i}function k2(i,r){if(i==="change")return r}var V2=!1;if(Ki){var Qd;if(Ki){var Jd="oninput"in document;if(!Jd){var H2=document.createElement("div");H2.setAttribute("oninput","return;"),Jd=typeof H2.oninput=="function"}Qd=Jd}else Qd=!1;V2=Qd&&(!document.documentMode||9<document.documentMode)}function D2(){rs&&(rs.detachEvent("onpropertychange",z2),ss=rs=null)}function z2(i){if(i.propertyName==="value"&&Ko(ss)){var r=[];R2(r,ss,i,_d(i)),y2(r7,r)}}function s7(i,r,s){i==="focusin"?(D2(),rs=r,ss=s,rs.attachEvent("onpropertychange",z2)):i==="focusout"&&D2()}function o7(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ko(ss)}function l7(i,r){if(i==="click")return Ko(r)}function c7(i,r){if(i==="input"||i==="change")return Ko(r)}function d7(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Kt=typeof Object.is=="function"?Object.is:d7;function os(i,r){if(Kt(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var s=Object.keys(i),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var p=s[c];if(!li.call(r,p)||!Kt(i[p],r[p]))return!1}return!0}function P2(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function N2(i,r){var s=P2(i);i=0;for(var c;s;){if(s.nodeType===3){if(c=i+s.textContent.length,i<=r&&c>=r)return{node:s,offset:r-i};i=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=P2(s)}}function $2(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?$2(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function B2(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Go(i.document);r instanceof i.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)i=r.contentWindow;else break;r=Go(i.document)}return r}function eu(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var u7=Ki&&"documentMode"in document&&11>=document.documentMode,Ia=null,tu=null,ls=null,iu=!1;function I2(i,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;iu||Ia==null||Ia!==Go(c)||(c=Ia,"selectionStart"in c&&eu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ls&&os(ls,c)||(ls=c,c=zl(tu,"onSelect"),0<c.length&&(r=new Zo("onSelect","select",null,r,s),i.push({event:r,listeners:c}),r.target=Ia)))}function na(i,r){var s={};return s[i.toLowerCase()]=r.toLowerCase(),s["Webkit"+i]="webkit"+r,s["Moz"+i]="moz"+r,s}var Ua={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},nu={},U2={};Ki&&(U2=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function aa(i){if(nu[i])return nu[i];if(!Ua[i])return i;var r=Ua[i],s;for(s in r)if(r.hasOwnProperty(s)&&s in U2)return nu[i]=r[s];return i}var _2=aa("animationend"),G2=aa("animationiteration"),q2=aa("animationstart"),f7=aa("transitionrun"),h7=aa("transitionstart"),p7=aa("transitioncancel"),Y2=aa("transitionend"),F2=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function Ci(i,r){F2.set(i,r),ta(r,[i])}var X2=new WeakMap;function ui(i,r){if(typeof i=="object"&&i!==null){var s=X2.get(i);return s!==void 0?s:(r={value:i,source:r,stack:d2(r)},X2.set(i,r),r)}return{value:i,source:r,stack:d2(r)}}var fi=[],_a=0,ru=0;function Qo(){for(var i=_a,r=ru=_a=0;r<i;){var s=fi[r];fi[r++]=null;var c=fi[r];fi[r++]=null;var p=fi[r];fi[r++]=null;var x=fi[r];if(fi[r++]=null,c!==null&&p!==null){var C=c.pending;C===null?p.next=p:(p.next=C.next,C.next=p),c.pending=p}x!==0&&Z2(s,p,x)}}function Jo(i,r,s,c){fi[_a++]=i,fi[_a++]=r,fi[_a++]=s,fi[_a++]=c,ru|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function su(i,r,s,c){return Jo(i,r,s,c),el(i)}function Ga(i,r){return Jo(i,null,null,r),el(i)}function Z2(i,r,s){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s);for(var p=!1,x=i.return;x!==null;)x.childLanes|=s,c=x.alternate,c!==null&&(c.childLanes|=s),x.tag===22&&(i=x.stateNode,i===null||i._visibility&1||(p=!0)),i=x,x=x.return;return i.tag===3?(x=i.stateNode,p&&r!==null&&(p=31-Wt(s),i=x.hiddenUpdates,c=i[p],c===null?i[p]=[r]:c.push(r),r.lane=s|536870912),x):null}function el(i){if(50<Vs)throw Vs=0,hf=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var qa={};function m7(i,r,s,c){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(i,r,s,c){return new m7(i,r,s,c)}function ou(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Qi(i,r){var s=i.alternate;return s===null?(s=Qt(i.tag,r,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=r,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&65011712,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,r=i.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s.refCleanup=i.refCleanup,s}function W2(i,r){i.flags&=65011714;var s=i.alternate;return s===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,r=s.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function tl(i,r,s,c,p,x){var C=0;if(c=i,typeof i=="function")ou(i)&&(C=1);else if(typeof i=="string")C=xb(i,s,de.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case Y:return i=Qt(31,s,r,p),i.elementType=Y,i.lanes=x,i;case b:return ra(s.children,p,x,r);case j:C=8,p|=24;break;case L:return i=Qt(12,s,r,p|2),i.elementType=L,i.lanes=x,i;case O:return i=Qt(13,s,r,p),i.elementType=O,i.lanes=x,i;case N:return i=Qt(19,s,r,p),i.elementType=N,i.lanes=x,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case M:case T:C=10;break e;case E:C=9;break e;case V:C=11;break e;case P:C=14;break e;case _:C=16,c=null;break e}C=29,s=Error(a(130,i===null?"null":typeof i,"")),c=null}return r=Qt(C,s,r,p),r.elementType=i,r.type=c,r.lanes=x,r}function ra(i,r,s,c){return i=Qt(7,i,c,r),i.lanes=s,i}function lu(i,r,s){return i=Qt(6,i,null,r),i.lanes=s,i}function cu(i,r,s){return r=Qt(4,i.children!==null?i.children:[],i.key,r),r.lanes=s,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Ya=[],Fa=0,il=null,nl=0,hi=[],pi=0,sa=null,Ji=1,en="";function oa(i,r){Ya[Fa++]=nl,Ya[Fa++]=il,il=i,nl=r}function K2(i,r,s){hi[pi++]=Ji,hi[pi++]=en,hi[pi++]=sa,sa=i;var c=Ji;i=en;var p=32-Wt(c)-1;c&=~(1<<p),s+=1;var x=32-Wt(r)+p;if(30<x){var C=p-p%5;x=(c&(1<<C)-1).toString(32),c>>=C,p-=C,Ji=1<<32-Wt(r)+p|s<<p|c,en=x+i}else Ji=1<<x|s<<p|c,en=i}function du(i){i.return!==null&&(oa(i,1),K2(i,1,0))}function uu(i){for(;i===il;)il=Ya[--Fa],Ya[Fa]=null,nl=Ya[--Fa],Ya[Fa]=null;for(;i===sa;)sa=hi[--pi],hi[pi]=null,en=hi[--pi],hi[pi]=null,Ji=hi[--pi],hi[pi]=null}var Vt=null,Ze=null,Me=!1,la=null,Vi=!1,fu=Error(a(519));function ca(i){var r=Error(a(418,""));throw us(ui(r,i)),fu}function Q2(i){var r=i.stateNode,s=i.type,c=i.memoizedProps;switch(r[Et]=i,r[Nt]=c,s){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<Ds.length;s++)Te(Ds[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Te("invalid",r),h2(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),_o(r);break;case"select":Te("invalid",r);break;case"textarea":Te("invalid",r),m2(r,c.value,c.defaultValue,c.children),_o(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||mx(r.textContent,s)?(c.popover!=null&&(Te("beforetoggle",r),Te("toggle",r)),c.onScroll!=null&&Te("scroll",r),c.onScrollEnd!=null&&Te("scrollend",r),c.onClick!=null&&(r.onclick=Pl),r=!0):r=!1,r||ca(i)}function J2(i){for(Vt=i.return;Vt;)switch(Vt.tag){case 5:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Vt=Vt.return}}function cs(i){if(i!==Vt)return!1;if(!Me)return J2(i),Me=!0,!1;var r=i.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=i.type,s=!(s!=="form"&&s!=="button")||Lf(i.type,i.memoizedProps)),s=!s),s&&Ze&&ca(i),J2(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(s=i.data,s==="/$"){if(r===0){Ze=Ei(i.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;i=i.nextSibling}Ze=null}}else r===27?(r=Ze,Pn(i.type)?(i=Vf,Vf=null,Ze=i):Ze=r):Ze=Vt?Ei(i.stateNode.nextSibling):null;return!0}function ds(){Ze=Vt=null,Me=!1}function em(){var i=la;return i!==null&&(Ut===null?Ut=i:Ut.push.apply(Ut,i),la=null),i}function us(i){la===null?la=[i]:la.push(i)}var hu=X(null),da=null,tn=null;function Sn(i,r,s){re(hu,r._currentValue),r._currentValue=s}function nn(i){i._currentValue=hu.current,ae(hu)}function pu(i,r,s){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===s)break;i=i.return}}function mu(i,r,s,c){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var x=p.dependencies;if(x!==null){var C=p.child;x=x.firstContext;e:for(;x!==null;){var A=x;x=p;for(var H=0;H<r.length;H++)if(A.context===r[H]){x.lanes|=s,A=x.alternate,A!==null&&(A.lanes|=s),pu(x.return,s,i),c||(C=null);break e}x=A.next}}else if(p.tag===18){if(C=p.return,C===null)throw Error(a(341));C.lanes|=s,x=C.alternate,x!==null&&(x.lanes|=s),pu(C,s,i),C=null}else C=p.child;if(C!==null)C.return=p;else for(C=p;C!==null;){if(C===i){C=null;break}if(p=C.sibling,p!==null){p.return=C.return,C=p;break}C=C.return}p=C}}function fs(i,r,s,c){i=null;for(var p=r,x=!1;p!==null;){if(!x){if((p.flags&524288)!==0)x=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var C=p.alternate;if(C===null)throw Error(a(387));if(C=C.memoizedProps,C!==null){var A=p.type;Kt(p.pendingProps.value,C.value)||(i!==null?i.push(A):i=[A])}}else if(p===dt.current){if(C=p.alternate,C===null)throw Error(a(387));C.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(Is):i=[Is])}p=p.return}i!==null&&mu(r,i,s,c),r.flags|=262144}function al(i){for(i=i.firstContext;i!==null;){if(!Kt(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ua(i){da=i,tn=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function jt(i){return tm(da,i)}function rl(i,r){return da===null&&ua(i),tm(i,r)}function tm(i,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},tn===null){if(i===null)throw Error(a(308));tn=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else tn=tn.next=r;return s}var g7=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(s,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(s){return s()})}},x7=e.unstable_scheduleCallback,v7=e.unstable_NormalPriority,lt={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new g7,data:new Map,refCount:0}}function hs(i){i.refCount--,i.refCount===0&&x7(v7,function(){i.controller.abort()})}var ps=null,xu=0,Xa=0,Za=null;function y7(i,r){if(ps===null){var s=ps=[];xu=0,Xa=wf(),Za={status:"pending",value:void 0,then:function(c){s.push(c)}}}return xu++,r.then(im,im),r}function im(){if(--xu===0&&ps!==null){Za!==null&&(Za.status="fulfilled");var i=ps;ps=null,Xa=0,Za=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function w7(i,r){var s=[],c={status:"pending",value:null,reason:null,then:function(p){s.push(p)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var p=0;p<s.length;p++)(0,s[p])(r)},function(p){for(c.status="rejected",c.reason=p,p=0;p<s.length;p++)(0,s[p])(void 0)}),c}var nm=B.S;B.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&y7(i,r),nm!==null&&nm(i,r)};var fa=X(null);function vu(){var i=fa.current;return i!==null?i:_e.pooledCache}function sl(i,r){r===null?re(fa,fa.current):re(fa,r.pool)}function am(){var i=vu();return i===null?null:{parent:lt._currentValue,pool:i}}var ms=Error(a(460)),rm=Error(a(474)),ol=Error(a(542)),yu={then:function(){}};function sm(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ll(){}function om(i,r,s){switch(s=i[s],s===void 0?i.push(r):s!==r&&(r.then(ll,ll),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,cm(i),i;default:if(typeof r.status=="string")r.then(ll,ll);else{if(i=_e,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=c}},function(c){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,cm(i),i}throw gs=r,ms}}var gs=null;function lm(){if(gs===null)throw Error(a(459));var i=gs;return gs=null,i}function cm(i){if(i===ms||i===ol)throw Error(a(483))}var Cn=!1;function wu(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Tn(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function En(i,r,s){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,r=el(i),Z2(i,null,s),r}return Jo(i,c,r,s),el(i)}function xs(i,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,i2(i,s)}}function Su(i,r){var s=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var p=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var C={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};x===null?p=x=C:x=x.next=C,s=s.next}while(s!==null);x===null?p=x=r:x=x.next=r}else p=x=r;s={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,callbacks:c.callbacks},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=r:i.next=r,s.lastBaseUpdate=r}var Cu=!1;function vs(){if(Cu){var i=Za;if(i!==null)throw i}}function ys(i,r,s,c){Cu=!1;var p=i.updateQueue;Cn=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var H=A,U=H.next;H.next=null,C===null?x=U:C.next=U,C=H;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==C&&(A===null?Z.firstBaseUpdate=U:A.next=U,Z.lastBaseUpdate=H))}if(x!==null){var ee=p.baseState;C=0,Z=U=H=null,A=x;do{var G=A.lane&-536870913,q=G!==A.lane;if(q?(Ee&G)===G:(c&G)===G){G!==0&&G===Xa&&(Cu=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var me=i,fe=A;G=r;var Ie=s;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){ee=me.call(Ie,ee,G);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,G=typeof me=="function"?me.call(Ie,ee,G):me,G==null)break e;ee=g({},ee,G);break e;case 2:Cn=!0}}G=A.callback,G!==null&&(i.flags|=64,q&&(i.flags|=8192),q=p.callbacks,q===null?p.callbacks=[G]:q.push(G))}else q={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(U=Z=q,H=ee):Z=Z.next=q,C|=G;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;q=A,A=q.next,q.next=null,p.lastBaseUpdate=q,p.shared.pending=null}}while(!0);Z===null&&(H=ee),p.baseState=H,p.firstBaseUpdate=U,p.lastBaseUpdate=Z,x===null&&(p.shared.lanes=0),Vn|=C,i.lanes=C,i.memoizedState=ee}}function dm(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function um(i,r){var s=i.callbacks;if(s!==null)for(i.callbacks=null,i=0;i<s.length;i++)dm(s[i],r)}var Wa=X(null),cl=X(0);function fm(i,r){i=dn,re(cl,i),re(Wa,r),dn=i|r.baseLanes}function Tu(){re(cl,dn),re(Wa,Wa.current)}function Eu(){dn=cl.current,ae(Wa),ae(cl)}var jn=0,we=null,$e=null,it=null,dl=!1,Ka=!1,ha=!1,ul=0,ws=0,Qa=null,b7=0;function Je(){throw Error(a(321))}function ju(i,r){if(r===null)return!1;for(var s=0;s<r.length&&s<i.length;s++)if(!Kt(i[s],r[s]))return!1;return!0}function Au(i,r,s,c,p,x){return jn=x,we=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=i===null||i.memoizedState===null?Zm:Wm,ha=!1,x=s(c,p),ha=!1,Ka&&(x=pm(r,s,c,p)),hm(i),x}function hm(i){B.H=xl;var r=$e!==null&&$e.next!==null;if(jn=0,it=$e=we=null,dl=!1,ws=0,Qa=null,r)throw Error(a(300));i===null||ft||(i=i.dependencies,i!==null&&al(i)&&(ft=!0))}function pm(i,r,s,c){we=i;var p=0;do{if(Ka&&(Qa=null),ws=0,Ka=!1,25<=p)throw Error(a(301));if(p+=1,it=$e=null,i.updateQueue!=null){var x=i.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}B.H=M7,x=r(s,c)}while(Ka);return x}function S7(){var i=B.H,r=i.useState()[0];return r=typeof r.then=="function"?bs(r):r,i=i.useState()[0],($e!==null?$e.memoizedState:null)!==i&&(we.flags|=1024),r}function Mu(){var i=ul!==0;return ul=0,i}function Lu(i,r,s){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~s}function Ou(i){if(dl){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}jn=0,it=$e=we=null,Ka=!1,ws=ul=0,Qa=null}function Bt(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?we.memoizedState=it=i:it=it.next=i,it}function nt(){if($e===null){var i=we.alternate;i=i!==null?i.memoizedState:null}else i=$e.next;var r=it===null?we.memoizedState:it.next;if(r!==null)it=r,$e=i;else{if(i===null)throw we.alternate===null?Error(a(467)):Error(a(310));$e=i,i={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},it===null?we.memoizedState=it=i:it=it.next=i}return it}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bs(i){var r=ws;return ws+=1,Qa===null&&(Qa=[]),i=om(Qa,i,r),r=we,(it===null?r.memoizedState:it.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?Zm:Wm),i}function fl(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bs(i);if(i.$$typeof===T)return jt(i)}throw Error(a(438,String(i)))}function ku(i){var r=null,s=we.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=we.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Ru(),we.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(i),c=0;c<i;c++)s[c]=F;return r.index++,s}function an(i,r){return typeof r=="function"?r(i):r}function hl(i){var r=nt();return Vu(r,$e,i)}function Vu(i,r,s){var c=i.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var p=i.baseQueue,x=c.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}r.baseQueue=p=x,c.pending=null}if(x=i.baseState,p===null)i.memoizedState=x;else{r=p.next;var A=C=null,H=null,U=r,Z=!1;do{var ee=U.lane&-536870913;if(ee!==U.lane?(Ee&ee)===ee:(jn&ee)===ee){var G=U.revertLane;if(G===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ee===Xa&&(Z=!0);else if((jn&G)===G){U=U.next,G===Xa&&(Z=!0);continue}else ee={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},H===null?(A=H=ee,C=x):H=H.next=ee,we.lanes|=G,Vn|=G;ee=U.action,ha&&s(x,ee),x=U.hasEagerState?U.eagerState:s(x,ee)}else G={lane:ee,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},H===null?(A=H=G,C=x):H=H.next=G,we.lanes|=ee,Vn|=ee;U=U.next}while(U!==null&&U!==r);if(H===null?C=x:H.next=A,!Kt(x,i.memoizedState)&&(ft=!0,Z&&(s=Za,s!==null)))throw s;i.memoizedState=x,i.baseState=C,i.baseQueue=H,c.lastRenderedState=x}return p===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Hu(i){var r=nt(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=i;var c=s.dispatch,p=s.pending,x=r.memoizedState;if(p!==null){s.pending=null;var C=p=p.next;do x=i(x,C.action),C=C.next;while(C!==p);Kt(x,r.memoizedState)||(ft=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function mm(i,r,s){var c=we,p=nt(),x=Me;if(x){if(s===void 0)throw Error(a(407));s=s()}else s=r();var C=!Kt(($e||p).memoizedState,s);C&&(p.memoizedState=s,ft=!0),p=p.queue;var A=vm.bind(null,c,p,i);if(Ss(2048,8,A,[i]),p.getSnapshot!==r||C||it!==null&&it.memoizedState.tag&1){if(c.flags|=2048,Ja(9,pl(),xm.bind(null,c,p,s,r),null),_e===null)throw Error(a(349));x||(jn&124)!==0||gm(c,r,s)}return s}function gm(i,r,s){i.flags|=16384,i={getSnapshot:r,value:s},r=we.updateQueue,r===null?(r=Ru(),we.updateQueue=r,r.stores=[i]):(s=r.stores,s===null?r.stores=[i]:s.push(i))}function xm(i,r,s,c){r.value=s,r.getSnapshot=c,ym(r)&&wm(i)}function vm(i,r,s){return s(function(){ym(r)&&wm(i)})}function ym(i){var r=i.getSnapshot;i=i.value;try{var s=r();return!Kt(i,s)}catch{return!0}}function wm(i){var r=Ga(i,2);r!==null&&ni(r,i,2)}function Du(i){var r=Bt();if(typeof i=="function"){var s=i;if(i=s(),ha){yn(!0);try{s()}finally{yn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:i},r}function bm(i,r,s,c){return i.baseState=s,Vu(i,$e,typeof c=="function"?c:an)}function C7(i,r,s,c,p){if(gl(i))throw Error(a(485));if(i=r.action,i!==null){var x={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(C){x.listeners.push(C)}};B.T!==null?s(!0):x.isTransition=!1,c(x),s=r.pending,s===null?(x.next=r.pending=x,Sm(r,x)):(x.next=s.next,r.pending=s.next=x)}}function Sm(i,r){var s=r.action,c=r.payload,p=i.state;if(r.isTransition){var x=B.T,C={};B.T=C;try{var A=s(p,c),H=B.S;H!==null&&H(C,A),Cm(i,r,A)}catch(U){zu(i,r,U)}finally{B.T=x}}else try{x=s(p,c),Cm(i,r,x)}catch(U){zu(i,r,U)}}function Cm(i,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Tm(i,r,c)},function(c){return zu(i,r,c)}):Tm(i,r,s)}function Tm(i,r,s){r.status="fulfilled",r.value=s,Em(r),i.state=s,r=i.pending,r!==null&&(s=r.next,s===r?i.pending=null:(s=s.next,r.next=s,Sm(i,s)))}function zu(i,r,s){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,Em(r),r=r.next;while(r!==c)}i.action=null}function Em(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function jm(i,r){return r}function Am(i,r){if(Me){var s=_e.formState;if(s!==null){e:{var c=we;if(Me){if(Ze){t:{for(var p=Ze,x=Vi;p.nodeType!==8;){if(!x){p=null;break t}if(p=Ei(p.nextSibling),p===null){p=null;break t}}x=p.data,p=x==="F!"||x==="F"?p:null}if(p){Ze=Ei(p.nextSibling),c=p.data==="F!";break e}}ca(c)}c=!1}c&&(r=s[0])}}return s=Bt(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:r},s.queue=c,s=Ym.bind(null,we,c),c.dispatch=s,c=Du(!1),x=Iu.bind(null,we,!1,c.queue),c=Bt(),p={state:r,dispatch:null,action:i,pending:null},c.queue=p,s=C7.bind(null,we,p,x,s),p.dispatch=s,c.memoizedState=i,[r,s,!1]}function Mm(i){var r=nt();return Lm(r,$e,i)}function Lm(i,r,s){if(r=Vu(i,r,jm)[0],i=hl(an)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=bs(r)}catch(C){throw C===ms?ol:C}else c=r;r=nt();var p=r.queue,x=p.dispatch;return s!==r.memoizedState&&(we.flags|=2048,Ja(9,pl(),T7.bind(null,p,s),null)),[c,x,i]}function T7(i,r){i.action=r}function Om(i){var r=nt(),s=$e;if(s!==null)return Lm(r,s,i);nt(),r=r.memoizedState,s=nt();var c=s.queue.dispatch;return s.memoizedState=i,[r,c,!1]}function Ja(i,r,s,c){return i={tag:i,create:s,deps:c,inst:r,next:null},r=we.updateQueue,r===null&&(r=Ru(),we.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=i.next=i:(c=s.next,s.next=i,i.next=c,r.lastEffect=i),i}function pl(){return{destroy:void 0,resource:void 0}}function Rm(){return nt().memoizedState}function ml(i,r,s,c){var p=Bt();c=c===void 0?null:c,we.flags|=i,p.memoizedState=Ja(1|r,pl(),s,c)}function Ss(i,r,s,c){var p=nt();c=c===void 0?null:c;var x=p.memoizedState.inst;$e!==null&&c!==null&&ju(c,$e.memoizedState.deps)?p.memoizedState=Ja(r,x,s,c):(we.flags|=i,p.memoizedState=Ja(1|r,x,s,c))}function km(i,r){ml(8390656,8,i,r)}function Vm(i,r){Ss(2048,8,i,r)}function Hm(i,r){return Ss(4,2,i,r)}function Dm(i,r){return Ss(4,4,i,r)}function zm(i,r){if(typeof r=="function"){i=i();var s=r(i);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Pm(i,r,s){s=s!=null?s.concat([i]):null,Ss(4,4,zm.bind(null,r,i),s)}function Pu(){}function Nm(i,r){var s=nt();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&ju(r,c[1])?c[0]:(s.memoizedState=[i,r],i)}function $m(i,r){var s=nt();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&ju(r,c[1]))return c[0];if(c=i(),ha){yn(!0);try{i()}finally{yn(!1)}}return s.memoizedState=[c,r],c}function Nu(i,r,s){return s===void 0||(jn&1073741824)!==0?i.memoizedState=r:(i.memoizedState=s,i=Ug(),we.lanes|=i,Vn|=i,s)}function Bm(i,r,s,c){return Kt(s,r)?s:Wa.current!==null?(i=Nu(i,s,c),Kt(i,r)||(ft=!0),i):(jn&42)===0?(ft=!0,i.memoizedState=s):(i=Ug(),we.lanes|=i,Vn|=i,r)}function Im(i,r,s,c,p){var x=W.p;W.p=x!==0&&8>x?x:8;var C=B.T,A={};B.T=A,Iu(i,!1,r,s);try{var H=p(),U=B.S;if(U!==null&&U(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var Z=w7(H,c);Cs(i,r,Z,ii(i))}else Cs(i,r,c,ii(i))}catch(ee){Cs(i,r,{then:function(){},status:"rejected",reason:ee},ii())}finally{W.p=x,B.T=C}}function E7(){}function $u(i,r,s,c){if(i.tag!==5)throw Error(a(476));var p=Um(i).queue;Im(i,p,r,J,s===null?E7:function(){return _m(i),s(c)})}function Um(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:J},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:s},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function _m(i){var r=Um(i).next.queue;Cs(i,r,{},ii())}function Bu(){return jt(Is)}function Gm(){return nt().memoizedState}function qm(){return nt().memoizedState}function j7(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var s=ii();i=Tn(s);var c=En(r,i,s);c!==null&&(ni(c,r,s),xs(c,r,s)),r={cache:gu()},i.payload=r;return}r=r.return}}function A7(i,r,s){var c=ii();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gl(i)?Fm(r,s):(s=su(i,r,s,c),s!==null&&(ni(s,i,c),Xm(s,r,c)))}function Ym(i,r,s){var c=ii();Cs(i,r,s,c)}function Cs(i,r,s,c){var p={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gl(i))Fm(r,p);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var C=r.lastRenderedState,A=x(C,s);if(p.hasEagerState=!0,p.eagerState=A,Kt(A,C))return Jo(i,r,p,0),_e===null&&Qo(),!1}catch{}finally{}if(s=su(i,r,p,c),s!==null)return ni(s,i,c),Xm(s,r,c),!0}return!1}function Iu(i,r,s,c){if(c={lane:2,revertLane:wf(),action:c,hasEagerState:!1,eagerState:null,next:null},gl(i)){if(r)throw Error(a(479))}else r=su(i,s,c,2),r!==null&&ni(r,i,2)}function gl(i){var r=i.alternate;return i===we||r!==null&&r===we}function Fm(i,r){Ka=dl=!0;var s=i.pending;s===null?r.next=r:(r.next=s.next,s.next=r),i.pending=r}function Xm(i,r,s){if((s&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,s|=c,r.lanes=s,i2(i,s)}}var xl={readContext:jt,use:fl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Zm={readContext:jt,use:fl,useCallback:function(i,r){return Bt().memoizedState=[i,r===void 0?null:r],i},useContext:jt,useEffect:km,useImperativeHandle:function(i,r,s){s=s!=null?s.concat([i]):null,ml(4194308,4,zm.bind(null,r,i),s)},useLayoutEffect:function(i,r){return ml(4194308,4,i,r)},useInsertionEffect:function(i,r){ml(4,2,i,r)},useMemo:function(i,r){var s=Bt();r=r===void 0?null:r;var c=i();if(ha){yn(!0);try{i()}finally{yn(!1)}}return s.memoizedState=[c,r],c},useReducer:function(i,r,s){var c=Bt();if(s!==void 0){var p=s(r);if(ha){yn(!0);try{s(r)}finally{yn(!1)}}}else p=r;return c.memoizedState=c.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},c.queue=i,i=i.dispatch=A7.bind(null,we,i),[c.memoizedState,i]},useRef:function(i){var r=Bt();return i={current:i},r.memoizedState=i},useState:function(i){i=Du(i);var r=i.queue,s=Ym.bind(null,we,r);return r.dispatch=s,[i.memoizedState,s]},useDebugValue:Pu,useDeferredValue:function(i,r){var s=Bt();return Nu(s,i,r)},useTransition:function(){var i=Du(!1);return i=Im.bind(null,we,i.queue,!0,!1),Bt().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,s){var c=we,p=Bt();if(Me){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),_e===null)throw Error(a(349));(Ee&124)!==0||gm(c,r,s)}p.memoizedState=s;var x={value:s,getSnapshot:r};return p.queue=x,km(vm.bind(null,c,x,i),[i]),c.flags|=2048,Ja(9,pl(),xm.bind(null,c,x,s,r),null),s},useId:function(){var i=Bt(),r=_e.identifierPrefix;if(Me){var s=en,c=Ji;s=(c&~(1<<32-Wt(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=ul++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=b7++,r="«"+r+"r"+s.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Bu,useFormState:Am,useActionState:Am,useOptimistic:function(i){var r=Bt();r.memoizedState=r.baseState=i;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Iu.bind(null,we,!0,s),s.dispatch=r,[i,r]},useMemoCache:ku,useCacheRefresh:function(){return Bt().memoizedState=j7.bind(null,we)}},Wm={readContext:jt,use:fl,useCallback:Nm,useContext:jt,useEffect:Vm,useImperativeHandle:Pm,useInsertionEffect:Hm,useLayoutEffect:Dm,useMemo:$m,useReducer:hl,useRef:Rm,useState:function(){return hl(an)},useDebugValue:Pu,useDeferredValue:function(i,r){var s=nt();return Bm(s,$e.memoizedState,i,r)},useTransition:function(){var i=hl(an)[0],r=nt().memoizedState;return[typeof i=="boolean"?i:bs(i),r]},useSyncExternalStore:mm,useId:Gm,useHostTransitionStatus:Bu,useFormState:Mm,useActionState:Mm,useOptimistic:function(i,r){var s=nt();return bm(s,$e,i,r)},useMemoCache:ku,useCacheRefresh:qm},M7={readContext:jt,use:fl,useCallback:Nm,useContext:jt,useEffect:Vm,useImperativeHandle:Pm,useInsertionEffect:Hm,useLayoutEffect:Dm,useMemo:$m,useReducer:Hu,useRef:Rm,useState:function(){return Hu(an)},useDebugValue:Pu,useDeferredValue:function(i,r){var s=nt();return $e===null?Nu(s,i,r):Bm(s,$e.memoizedState,i,r)},useTransition:function(){var i=Hu(an)[0],r=nt().memoizedState;return[typeof i=="boolean"?i:bs(i),r]},useSyncExternalStore:mm,useId:Gm,useHostTransitionStatus:Bu,useFormState:Om,useActionState:Om,useOptimistic:function(i,r){var s=nt();return $e!==null?bm(s,$e,i,r):(s.baseState=i,[i,s.queue.dispatch])},useMemoCache:ku,useCacheRefresh:qm},er=null,Ts=0;function vl(i){var r=Ts;return Ts+=1,er===null&&(er=[]),om(er,i,r)}function Es(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function yl(i,r){throw r.$$typeof===v?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Km(i){var r=i._init;return r(i._payload)}function Qm(i){function r($,z){if(i){var I=$.deletions;I===null?($.deletions=[z],$.flags|=16):I.push(z)}}function s($,z){if(!i)return null;for(;z!==null;)r($,z),z=z.sibling;return null}function c($){for(var z=new Map;$!==null;)$.key!==null?z.set($.key,$):z.set($.index,$),$=$.sibling;return z}function p($,z){return $=Qi($,z),$.index=0,$.sibling=null,$}function x($,z,I){return $.index=I,i?(I=$.alternate,I!==null?(I=I.index,I<z?($.flags|=67108866,z):I):($.flags|=67108866,z)):($.flags|=1048576,z)}function C($){return i&&$.alternate===null&&($.flags|=67108866),$}function A($,z,I,Q){return z===null||z.tag!==6?(z=lu(I,$.mode,Q),z.return=$,z):(z=p(z,I),z.return=$,z)}function H($,z,I,Q){var se=I.type;return se===b?Z($,z,I.props.children,Q,I.key):z!==null&&(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&Km(se)===z.type)?(z=p(z,I.props),Es(z,I),z.return=$,z):(z=tl(I.type,I.key,I.props,null,$.mode,Q),Es(z,I),z.return=$,z)}function U($,z,I,Q){return z===null||z.tag!==4||z.stateNode.containerInfo!==I.containerInfo||z.stateNode.implementation!==I.implementation?(z=cu(I,$.mode,Q),z.return=$,z):(z=p(z,I.children||[]),z.return=$,z)}function Z($,z,I,Q,se){return z===null||z.tag!==7?(z=ra(I,$.mode,Q,se),z.return=$,z):(z=p(z,I),z.return=$,z)}function ee($,z,I){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=lu(""+z,$.mode,I),z.return=$,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case y:return I=tl(z.type,z.key,z.props,null,$.mode,I),Es(I,z),I.return=$,I;case S:return z=cu(z,$.mode,I),z.return=$,z;case _:var Q=z._init;return z=Q(z._payload),ee($,z,I)}if(oe(z)||ne(z))return z=ra(z,$.mode,I,null),z.return=$,z;if(typeof z.then=="function")return ee($,vl(z),I);if(z.$$typeof===T)return ee($,rl($,z),I);yl($,z)}return null}function G($,z,I,Q){var se=z!==null?z.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return se!==null?null:A($,z,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===se?H($,z,I,Q):null;case S:return I.key===se?U($,z,I,Q):null;case _:return se=I._init,I=se(I._payload),G($,z,I,Q)}if(oe(I)||ne(I))return se!==null?null:Z($,z,I,Q,null);if(typeof I.then=="function")return G($,z,vl(I),Q);if(I.$$typeof===T)return G($,z,rl($,I),Q);yl($,I)}return null}function q($,z,I,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $=$.get(I)||null,A(z,$,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return $=$.get(Q.key===null?I:Q.key)||null,H(z,$,Q,se);case S:return $=$.get(Q.key===null?I:Q.key)||null,U(z,$,Q,se);case _:var be=Q._init;return Q=be(Q._payload),q($,z,I,Q,se)}if(oe(Q)||ne(Q))return $=$.get(I)||null,Z(z,$,Q,se,null);if(typeof Q.then=="function")return q($,z,I,vl(Q),se);if(Q.$$typeof===T)return q($,z,I,rl(z,Q),se);yl(z,Q)}return null}function me($,z,I,Q){for(var se=null,be=null,ce=z,pe=z=0,pt=null;ce!==null&&pe<I.length;pe++){ce.index>pe?(pt=ce,ce=null):pt=ce.sibling;var Ae=G($,ce,I[pe],Q);if(Ae===null){ce===null&&(ce=pt);break}i&&ce&&Ae.alternate===null&&r($,ce),z=x(Ae,z,pe),be===null?se=Ae:be.sibling=Ae,be=Ae,ce=pt}if(pe===I.length)return s($,ce),Me&&oa($,pe),se;if(ce===null){for(;pe<I.length;pe++)ce=ee($,I[pe],Q),ce!==null&&(z=x(ce,z,pe),be===null?se=ce:be.sibling=ce,be=ce);return Me&&oa($,pe),se}for(ce=c(ce);pe<I.length;pe++)pt=q(ce,$,pe,I[pe],Q),pt!==null&&(i&&pt.alternate!==null&&ce.delete(pt.key===null?pe:pt.key),z=x(pt,z,pe),be===null?se=pt:be.sibling=pt,be=pt);return i&&ce.forEach(function(Un){return r($,Un)}),Me&&oa($,pe),se}function fe($,z,I,Q){if(I==null)throw Error(a(151));for(var se=null,be=null,ce=z,pe=z=0,pt=null,Ae=I.next();ce!==null&&!Ae.done;pe++,Ae=I.next()){ce.index>pe?(pt=ce,ce=null):pt=ce.sibling;var Un=G($,ce,Ae.value,Q);if(Un===null){ce===null&&(ce=pt);break}i&&ce&&Un.alternate===null&&r($,ce),z=x(Un,z,pe),be===null?se=Un:be.sibling=Un,be=Un,ce=pt}if(Ae.done)return s($,ce),Me&&oa($,pe),se;if(ce===null){for(;!Ae.done;pe++,Ae=I.next())Ae=ee($,Ae.value,Q),Ae!==null&&(z=x(Ae,z,pe),be===null?se=Ae:be.sibling=Ae,be=Ae);return Me&&oa($,pe),se}for(ce=c(ce);!Ae.done;pe++,Ae=I.next())Ae=q(ce,$,pe,Ae.value,Q),Ae!==null&&(i&&Ae.alternate!==null&&ce.delete(Ae.key===null?pe:Ae.key),z=x(Ae,z,pe),be===null?se=Ae:be.sibling=Ae,be=Ae);return i&&ce.forEach(function(Lb){return r($,Lb)}),Me&&oa($,pe),se}function Ie($,z,I,Q){if(typeof I=="object"&&I!==null&&I.type===b&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var se=I.key;z!==null;){if(z.key===se){if(se=I.type,se===b){if(z.tag===7){s($,z.sibling),Q=p(z,I.props.children),Q.return=$,$=Q;break e}}else if(z.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===_&&Km(se)===z.type){s($,z.sibling),Q=p(z,I.props),Es(Q,I),Q.return=$,$=Q;break e}s($,z);break}else r($,z);z=z.sibling}I.type===b?(Q=ra(I.props.children,$.mode,Q,I.key),Q.return=$,$=Q):(Q=tl(I.type,I.key,I.props,null,$.mode,Q),Es(Q,I),Q.return=$,$=Q)}return C($);case S:e:{for(se=I.key;z!==null;){if(z.key===se)if(z.tag===4&&z.stateNode.containerInfo===I.containerInfo&&z.stateNode.implementation===I.implementation){s($,z.sibling),Q=p(z,I.children||[]),Q.return=$,$=Q;break e}else{s($,z);break}else r($,z);z=z.sibling}Q=cu(I,$.mode,Q),Q.return=$,$=Q}return C($);case _:return se=I._init,I=se(I._payload),Ie($,z,I,Q)}if(oe(I))return me($,z,I,Q);if(ne(I)){if(se=ne(I),typeof se!="function")throw Error(a(150));return I=se.call(I),fe($,z,I,Q)}if(typeof I.then=="function")return Ie($,z,vl(I),Q);if(I.$$typeof===T)return Ie($,z,rl($,I),Q);yl($,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,z!==null&&z.tag===6?(s($,z.sibling),Q=p(z,I),Q.return=$,$=Q):(s($,z),Q=lu(I,$.mode,Q),Q.return=$,$=Q),C($)):s($,z)}return function($,z,I,Q){try{Ts=0;var se=Ie($,z,I,Q);return er=null,se}catch(ce){if(ce===ms||ce===ol)throw ce;var be=Qt(29,ce,null,$.mode);return be.lanes=Q,be.return=$,be}finally{}}}var tr=Qm(!0),Jm=Qm(!1),mi=X(null),Hi=null;function An(i){var r=i.alternate;re(ct,ct.current&1),re(mi,i),Hi===null&&(r===null||Wa.current!==null||r.memoizedState!==null)&&(Hi=i)}function eg(i){if(i.tag===22){if(re(ct,ct.current),re(mi,i),Hi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Hi=i)}}else Mn()}function Mn(){re(ct,ct.current),re(mi,mi.current)}function rn(i){ae(mi),Hi===i&&(Hi=null),ae(ct)}var ct=X(0);function wl(i){for(var r=i;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||kf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Uu(i,r,s,c){r=i.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var _u={enqueueSetState:function(i,r,s){i=i._reactInternals;var c=ii(),p=Tn(c);p.payload=r,s!=null&&(p.callback=s),r=En(i,p,c),r!==null&&(ni(r,i,c),xs(r,i,c))},enqueueReplaceState:function(i,r,s){i=i._reactInternals;var c=ii(),p=Tn(c);p.tag=1,p.payload=r,s!=null&&(p.callback=s),r=En(i,p,c),r!==null&&(ni(r,i,c),xs(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var s=ii(),c=Tn(s);c.tag=2,r!=null&&(c.callback=r),r=En(i,c,s),r!==null&&(ni(r,i,s),xs(r,i,s))}};function tg(i,r,s,c,p,x,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,x,C):r.prototype&&r.prototype.isPureReactComponent?!os(s,c)||!os(p,x):!0}function ig(i,r,s,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==i&&_u.enqueueReplaceState(r,r.state,null)}function pa(i,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(i=i.defaultProps){s===r&&(s=g({},s));for(var p in i)s[p]===void 0&&(s[p]=i[p])}return s}var bl=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function ng(i){bl(i)}function ag(i){console.error(i)}function rg(i){bl(i)}function Sl(i,r){try{var s=i.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function sg(i,r,s){try{var c=i.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Gu(i,r,s){return s=Tn(s),s.tag=3,s.payload={element:null},s.callback=function(){Sl(i,r)},s}function og(i){return i=Tn(i),i.tag=3,i}function lg(i,r,s,c){var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var x=c.value;i.payload=function(){return p(x)},i.callback=function(){sg(r,s,c)}}var C=s.stateNode;C!==null&&typeof C.componentDidCatch=="function"&&(i.callback=function(){sg(r,s,c),typeof p!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function L7(i,r,s,c,p){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&fs(r,s,p,!0),s=mi.current,s!==null){switch(s.tag){case 13:return Hi===null?mf():s.alternate===null&&We===0&&(We=3),s.flags&=-257,s.flags|=65536,s.lanes=p,c===yu?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),xf(i,c,p)),!1;case 22:return s.flags|=65536,c===yu?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),xf(i,c,p)),!1}throw Error(a(435,s.tag))}return xf(i,c,p),mf(),!1}if(Me)return r=mi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,c!==fu&&(i=Error(a(422),{cause:c}),us(ui(i,s)))):(c!==fu&&(r=Error(a(423),{cause:c}),us(ui(r,s))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,c=ui(c,s),p=Gu(i.stateNode,c,p),Su(i,p),We!==4&&(We=2)),!1;var x=Error(a(520),{cause:c});if(x=ui(x,s),ks===null?ks=[x]:ks.push(x),We!==4&&(We=2),r===null)return!0;c=ui(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,i=p&-p,s.lanes|=i,i=Gu(s.stateNode,c,i),Su(s,i),!1;case 1:if(r=s.type,x=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hn===null||!Hn.has(x))))return s.flags|=65536,p&=-p,s.lanes|=p,p=og(p),lg(p,i,s,c),Su(s,p),!1}s=s.return}while(s!==null);return!1}var cg=Error(a(461)),ft=!1;function yt(i,r,s,c){r.child=i===null?Jm(r,null,s,c):tr(r,i.child,s,c)}function dg(i,r,s,c,p){s=s.render;var x=r.ref;if("ref"in c){var C={};for(var A in c)A!=="ref"&&(C[A]=c[A])}else C=c;return ua(r),c=Au(i,r,s,C,x,p),A=Mu(),i!==null&&!ft?(Lu(i,r,p),sn(i,r,p)):(Me&&A&&du(r),r.flags|=1,yt(i,r,c,p),r.child)}function ug(i,r,s,c,p){if(i===null){var x=s.type;return typeof x=="function"&&!ou(x)&&x.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=x,fg(i,r,x,c,p)):(i=tl(s.type,null,c,r,r.mode,p),i.ref=r.ref,i.return=r,r.child=i)}if(x=i.child,!Qu(i,p)){var C=x.memoizedProps;if(s=s.compare,s=s!==null?s:os,s(C,c)&&i.ref===r.ref)return sn(i,r,p)}return r.flags|=1,i=Qi(x,c),i.ref=r.ref,i.return=r,r.child=i}function fg(i,r,s,c,p){if(i!==null){var x=i.memoizedProps;if(os(x,c)&&i.ref===r.ref)if(ft=!1,r.pendingProps=c=x,Qu(i,p))(i.flags&131072)!==0&&(ft=!0);else return r.lanes=i.lanes,sn(i,r,p)}return qu(i,r,s,c,p)}function hg(i,r,s){var c=r.pendingProps,p=c.children,x=i!==null?i.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=x!==null?x.baseLanes|s:s,i!==null){for(p=r.child=i.child,x=0;p!==null;)x=x|p.lanes|p.childLanes,p=p.sibling;r.childLanes=x&~c}else r.childLanes=0,r.child=null;return pg(i,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&sl(r,x!==null?x.cachePool:null),x!==null?fm(r,x):Tu(),eg(r);else return r.lanes=r.childLanes=536870912,pg(i,r,x!==null?x.baseLanes|s:s,s)}else x!==null?(sl(r,x.cachePool),fm(r,x),Mn(),r.memoizedState=null):(i!==null&&sl(r,null),Tu(),Mn());return yt(i,r,p,s),r.child}function pg(i,r,s,c){var p=vu();return p=p===null?null:{parent:lt._currentValue,pool:p},r.memoizedState={baseLanes:s,cachePool:p},i!==null&&sl(r,null),Tu(),eg(r),i!==null&&fs(i,r,c,!0),null}function Cl(i,r){var s=r.ref;if(s===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(i===null||i.ref!==s)&&(r.flags|=4194816)}}function qu(i,r,s,c,p){return ua(r),s=Au(i,r,s,c,void 0,p),c=Mu(),i!==null&&!ft?(Lu(i,r,p),sn(i,r,p)):(Me&&c&&du(r),r.flags|=1,yt(i,r,s,p),r.child)}function mg(i,r,s,c,p,x){return ua(r),r.updateQueue=null,s=pm(r,c,s,p),hm(i),c=Mu(),i!==null&&!ft?(Lu(i,r,x),sn(i,r,x)):(Me&&c&&du(r),r.flags|=1,yt(i,r,s,x),r.child)}function gg(i,r,s,c,p){if(ua(r),r.stateNode===null){var x=qa,C=s.contextType;typeof C=="object"&&C!==null&&(x=jt(C)),x=new s(c,x),r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=_u,r.stateNode=x,x._reactInternals=r,x=r.stateNode,x.props=c,x.state=r.memoizedState,x.refs={},wu(r),C=s.contextType,x.context=typeof C=="object"&&C!==null?jt(C):qa,x.state=r.memoizedState,C=s.getDerivedStateFromProps,typeof C=="function"&&(Uu(r,s,C,c),x.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(C=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),C!==x.state&&_u.enqueueReplaceState(x,x.state,null),ys(r,c,x,p),vs(),x.state=r.memoizedState),typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){x=r.stateNode;var A=r.memoizedProps,H=pa(s,A);x.props=H;var U=x.context,Z=s.contextType;C=qa,typeof Z=="object"&&Z!==null&&(C=jt(Z));var ee=s.getDerivedStateFromProps;Z=typeof ee=="function"||typeof x.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,Z||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(A||U!==C)&&ig(r,x,c,C),Cn=!1;var G=r.memoizedState;x.state=G,ys(r,c,x,p),vs(),U=r.memoizedState,A||G!==U||Cn?(typeof ee=="function"&&(Uu(r,s,ee,c),U=r.memoizedState),(H=Cn||tg(r,s,H,c,G,U,C))?(Z||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(r.flags|=4194308)):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=U),x.props=c,x.state=U,x.context=C,c=H):(typeof x.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{x=r.stateNode,bu(i,r),C=r.memoizedProps,Z=pa(s,C),x.props=Z,ee=r.pendingProps,G=x.context,U=s.contextType,H=qa,typeof U=="object"&&U!==null&&(H=jt(U)),A=s.getDerivedStateFromProps,(U=typeof A=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(C!==ee||G!==H)&&ig(r,x,c,H),Cn=!1,G=r.memoizedState,x.state=G,ys(r,c,x,p),vs();var q=r.memoizedState;C!==ee||G!==q||Cn||i!==null&&i.dependencies!==null&&al(i.dependencies)?(typeof A=="function"&&(Uu(r,s,A,c),q=r.memoizedState),(Z=Cn||tg(r,s,Z,c,G,q,H)||i!==null&&i.dependencies!==null&&al(i.dependencies))?(U||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(c,q,H),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(c,q,H)),typeof x.componentDidUpdate=="function"&&(r.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof x.componentDidUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=q),x.props=c,x.state=q,x.context=H,c=Z):(typeof x.componentDidUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(r.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&G===i.memoizedState||(r.flags|=1024),c=!1)}return x=c,Cl(i,r),c=(r.flags&128)!==0,x||c?(x=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:x.render(),r.flags|=1,i!==null&&c?(r.child=tr(r,i.child,null,p),r.child=tr(r,null,s,p)):yt(i,r,s,p),r.memoizedState=x.state,i=r.child):i=sn(i,r,p),i}function xg(i,r,s,c){return ds(),r.flags|=256,yt(i,r,s,c),r.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(i){return{baseLanes:i,cachePool:am()}}function Xu(i,r,s){return i=i!==null?i.childLanes&~s:0,r&&(i|=gi),i}function vg(i,r,s){var c=r.pendingProps,p=!1,x=(r.flags&128)!==0,C;if((C=x)||(C=i!==null&&i.memoizedState===null?!1:(ct.current&2)!==0),C&&(p=!0,r.flags&=-129),C=(r.flags&32)!==0,r.flags&=-33,i===null){if(Me){if(p?An(r):Mn(),Me){var A=Ze,H;if(H=A){e:{for(H=A,A=Vi;H.nodeType!==8;){if(!A){A=null;break e}if(H=Ei(H.nextSibling),H===null){A=null;break e}}A=H}A!==null?(r.memoizedState={dehydrated:A,treeContext:sa!==null?{id:Ji,overflow:en}:null,retryLane:536870912,hydrationErrors:null},H=Qt(18,null,null,0),H.stateNode=A,H.return=r,r.child=H,Vt=r,Ze=null,H=!0):H=!1}H||ca(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return kf(A)?r.lanes=32:r.lanes=536870912,null;rn(r)}return A=c.children,c=c.fallback,p?(Mn(),p=r.mode,A=Tl({mode:"hidden",children:A},p),c=ra(c,p,s,null),A.return=r,c.return=r,A.sibling=c,r.child=A,p=r.child,p.memoizedState=Fu(s),p.childLanes=Xu(i,C,s),r.memoizedState=Yu,c):(An(r),Zu(r,A))}if(H=i.memoizedState,H!==null&&(A=H.dehydrated,A!==null)){if(x)r.flags&256?(An(r),r.flags&=-257,r=Wu(i,r,s)):r.memoizedState!==null?(Mn(),r.child=i.child,r.flags|=128,r=null):(Mn(),p=c.fallback,A=r.mode,c=Tl({mode:"visible",children:c.children},A),p=ra(p,A,s,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,tr(r,i.child,null,s),c=r.child,c.memoizedState=Fu(s),c.childLanes=Xu(i,C,s),r.memoizedState=Yu,r=p);else if(An(r),kf(A)){if(C=A.nextSibling&&A.nextSibling.dataset,C)var U=C.dgst;C=U,c=Error(a(419)),c.stack="",c.digest=C,us({value:c,source:null,stack:null}),r=Wu(i,r,s)}else if(ft||fs(i,r,s,!1),C=(s&i.childLanes)!==0,ft||C){if(C=_e,C!==null&&(c=s&-s,c=(c&42)!==0?1:kd(c),c=(c&(C.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,Ga(i,c),ni(C,i,c),cg;A.data==="$?"||mf(),r=Wu(i,r,s)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=H.treeContext,Ze=Ei(A.nextSibling),Vt=r,Me=!0,la=null,Vi=!1,i!==null&&(hi[pi++]=Ji,hi[pi++]=en,hi[pi++]=sa,Ji=i.id,en=i.overflow,sa=r),r=Zu(r,c.children),r.flags|=4096);return r}return p?(Mn(),p=c.fallback,A=r.mode,H=i.child,U=H.sibling,c=Qi(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,U!==null?p=Qi(U,p):(p=ra(p,A,s,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,A=i.child.memoizedState,A===null?A=Fu(s):(H=A.cachePool,H!==null?(U=lt._currentValue,H=H.parent!==U?{parent:U,pool:U}:H):H=am(),A={baseLanes:A.baseLanes|s,cachePool:H}),p.memoizedState=A,p.childLanes=Xu(i,C,s),r.memoizedState=Yu,c):(An(r),s=i.child,i=s.sibling,s=Qi(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,i!==null&&(C=r.deletions,C===null?(r.deletions=[i],r.flags|=16):C.push(i)),r.child=s,r.memoizedState=null,s)}function Zu(i,r){return r=Tl({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Tl(i,r){return i=Qt(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Wu(i,r,s){return tr(r,i.child,null,s),i=Zu(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function yg(i,r,s){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),pu(i.return,r,s)}function Ku(i,r,s,c,p){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=p)}function wg(i,r,s){var c=r.pendingProps,p=c.revealOrder,x=c.tail;if(yt(i,r,c.children,s),c=ct.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&yg(i,s,r);else if(i.tag===19)yg(i,s,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(re(ct,c),p){case"forwards":for(s=r.child,p=null;s!==null;)i=s.alternate,i!==null&&wl(i)===null&&(p=s),s=s.sibling;s=p,s===null?(p=r.child,r.child=null):(p=s.sibling,s.sibling=null),Ku(r,!1,p,s,x);break;case"backwards":for(s=null,p=r.child,r.child=null;p!==null;){if(i=p.alternate,i!==null&&wl(i)===null){r.child=p;break}i=p.sibling,p.sibling=s,s=p,p=i}Ku(r,!0,s,null,x);break;case"together":Ku(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function sn(i,r,s){if(i!==null&&(r.dependencies=i.dependencies),Vn|=r.lanes,(s&r.childLanes)===0)if(i!==null){if(fs(i,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,s=Qi(i,i.pendingProps),r.child=s,s.return=r;i.sibling!==null;)i=i.sibling,s=s.sibling=Qi(i,i.pendingProps),s.return=r;s.sibling=null}return r.child}function Qu(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&al(i)))}function O7(i,r,s){switch(r.tag){case 3:Ve(r,r.stateNode.containerInfo),Sn(r,lt,i.memoizedState.cache),ds();break;case 27:case 5:Jn(r);break;case 4:Ve(r,r.stateNode.containerInfo);break;case 10:Sn(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(An(r),r.flags|=128,null):(s&r.child.childLanes)!==0?vg(i,r,s):(An(r),i=sn(i,r,s),i!==null?i.sibling:null);An(r);break;case 19:var p=(i.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(fs(i,r,s,!1),c=(s&r.childLanes)!==0),p){if(c)return wg(i,r,s);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),re(ct,ct.current),c)break;return null;case 22:case 23:return r.lanes=0,hg(i,r,s);case 24:Sn(r,lt,i.memoizedState.cache)}return sn(i,r,s)}function bg(i,r,s){if(i!==null)if(i.memoizedProps!==r.pendingProps)ft=!0;else{if(!Qu(i,s)&&(r.flags&128)===0)return ft=!1,O7(i,r,s);ft=(i.flags&131072)!==0}else ft=!1,Me&&(r.flags&1048576)!==0&&K2(r,nl,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var c=r.elementType,p=c._init;if(c=p(c._payload),r.type=c,typeof c=="function")ou(c)?(i=pa(c,i),r.tag=1,r=gg(null,r,c,i,s)):(r.tag=0,r=qu(null,r,c,i,s));else{if(c!=null){if(p=c.$$typeof,p===V){r.tag=11,r=dg(null,r,c,i,s);break e}else if(p===P){r.tag=14,r=ug(null,r,c,i,s);break e}}throw r=ue(c)||c,Error(a(306,r,""))}}return r;case 0:return qu(i,r,r.type,r.pendingProps,s);case 1:return c=r.type,p=pa(c,r.pendingProps),gg(i,r,c,p,s);case 3:e:{if(Ve(r,r.stateNode.containerInfo),i===null)throw Error(a(387));c=r.pendingProps;var x=r.memoizedState;p=x.element,bu(i,r),ys(r,c,null,s);var C=r.memoizedState;if(c=C.cache,Sn(r,lt,c),c!==x.cache&&mu(r,[lt],s,!0),vs(),c=C.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:C.cache},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){r=xg(i,r,c,s);break e}else if(c!==p){p=ui(Error(a(424)),r),us(p),r=xg(i,r,c,s);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Ze=Ei(i.firstChild),Vt=r,Me=!0,la=null,Vi=!0,s=Jm(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ds(),c===p){r=sn(i,r,s);break e}yt(i,r,c,s)}r=r.child}return r;case 26:return Cl(i,r),i===null?(s=Ex(r.type,null,r.pendingProps,null))?r.memoizedState=s:Me||(s=r.type,i=r.pendingProps,c=Nl(he.current).createElement(s),c[Et]=r,c[Nt]=i,bt(c,s,i),ut(c),r.stateNode=c):r.memoizedState=Ex(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Jn(r),i===null&&Me&&(c=r.stateNode=Sx(r.type,r.pendingProps,he.current),Vt=r,Vi=!0,p=Ze,Pn(r.type)?(Vf=p,Ze=Ei(c.firstChild)):Ze=p),yt(i,r,r.pendingProps.children,s),Cl(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Me&&((p=c=Ze)&&(c=ab(c,r.type,r.pendingProps,Vi),c!==null?(r.stateNode=c,Vt=r,Ze=Ei(c.firstChild),Vi=!1,p=!0):p=!1),p||ca(r)),Jn(r),p=r.type,x=r.pendingProps,C=i!==null?i.memoizedProps:null,c=x.children,Lf(p,x)?c=null:C!==null&&Lf(p,C)&&(r.flags|=32),r.memoizedState!==null&&(p=Au(i,r,S7,null,null,s),Is._currentValue=p),Cl(i,r),yt(i,r,c,s),r.child;case 6:return i===null&&Me&&((i=s=Ze)&&(s=rb(s,r.pendingProps,Vi),s!==null?(r.stateNode=s,Vt=r,Ze=null,i=!0):i=!1),i||ca(r)),null;case 13:return vg(i,r,s);case 4:return Ve(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=tr(r,null,c,s):yt(i,r,c,s),r.child;case 11:return dg(i,r,r.type,r.pendingProps,s);case 7:return yt(i,r,r.pendingProps,s),r.child;case 8:return yt(i,r,r.pendingProps.children,s),r.child;case 12:return yt(i,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,Sn(r,r.type,c.value),yt(i,r,c.children,s),r.child;case 9:return p=r.type._context,c=r.pendingProps.children,ua(r),p=jt(p),c=c(p),r.flags|=1,yt(i,r,c,s),r.child;case 14:return ug(i,r,r.type,r.pendingProps,s);case 15:return fg(i,r,r.type,r.pendingProps,s);case 19:return wg(i,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},i===null?(s=Tl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Qi(i.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return hg(i,r,s);case 24:return ua(r),c=jt(lt),i===null?(p=vu(),p===null&&(p=_e,x=gu(),p.pooledCache=x,x.refCount++,x!==null&&(p.pooledCacheLanes|=s),p=x),r.memoizedState={parent:c,cache:p},wu(r),Sn(r,lt,p)):((i.lanes&s)!==0&&(bu(i,r),ys(r,null,null,s),vs()),p=i.memoizedState,x=r.memoizedState,p.parent!==c?(p={parent:c,cache:c},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),Sn(r,lt,c)):(c=x.cache,Sn(r,lt,c),c!==p.cache&&mu(r,[lt],s,!0))),yt(i,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function on(i){i.flags|=4}function Sg(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!Ox(r)){if(r=mi.current,r!==null&&((Ee&4194048)===Ee?Hi!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||r!==Hi))throw gs=yu,rm;i.flags|=8192}}function El(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?e2():536870912,i.lanes|=r,rr|=r)}function js(i,r){if(!Me)switch(i.tailMode){case"hidden":r=i.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Fe(i){var r=i.alternate!==null&&i.alternate.child===i.child,s=0,c=0;if(r)for(var p=i.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)s|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=s,r}function R7(i,r,s){var c=r.pendingProps;switch(uu(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(r),null;case 1:return Fe(r),null;case 3:return s=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),nn(lt),Tt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(i===null||i.child===null)&&(cs(r)?on(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,em())),Fe(r),null;case 26:return s=r.memoizedState,i===null?(on(r),s!==null?(Fe(r),Sg(r,s)):(Fe(r),r.flags&=-16777217)):s?s!==i.memoizedState?(on(r),Fe(r),Sg(r,s)):(Fe(r),r.flags&=-16777217):(i.memoizedProps!==c&&on(r),Fe(r),r.flags&=-16777217),null;case 27:Zi(r),s=he.current;var p=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}i=de.current,cs(r)?Q2(r):(i=Sx(p,c,s),r.stateNode=i,on(r))}return Fe(r),null;case 5:if(Zi(r),s=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Fe(r),null}if(i=de.current,cs(r))Q2(r);else{switch(p=Nl(he.current),i){case 1:i=p.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=p.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=p.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=p.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?p.createElement(s,{is:c.is}):p.createElement(s)}}i[Et]=r,i[Nt]=c;e:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)i.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break e;for(;p.sibling===null;){if(p.return===null||p.return===r)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=i;e:switch(bt(i,s,c),s){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&on(r)}}return Fe(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&on(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(i=he.current,cs(r)){if(i=r.stateNode,s=r.memoizedProps,c=null,p=Vt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}i[Et]=r,i=!!(i.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||mx(i.nodeValue,s)),i||ca(r)}else i=Nl(i).createTextNode(c),i[Et]=r,r.stateNode=i}return Fe(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=cs(r),c!==null&&c.dehydrated!==null){if(i===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Et]=r}else ds(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fe(r),p=!1}else p=em(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(rn(r),r):(rn(r),null)}if(rn(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,i=i!==null&&i.memoizedState!==null,s){c=r.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var x=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(x=c.memoizedState.cachePool.pool),x!==p&&(c.flags|=2048)}return s!==i&&s&&(r.child.flags|=8192),El(r,r.updateQueue),Fe(r),null;case 4:return Tt(),i===null&&Tf(r.stateNode.containerInfo),Fe(r),null;case 10:return nn(r.type),Fe(r),null;case 19:if(ae(ct),p=r.memoizedState,p===null)return Fe(r),null;if(c=(r.flags&128)!==0,x=p.rendering,x===null)if(c)js(p,!1);else{if(We!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(x=wl(i),x!==null){for(r.flags|=128,js(p,!1),i=x.updateQueue,r.updateQueue=i,El(r,i),r.subtreeFlags=0,i=s,s=r.child;s!==null;)W2(s,i),s=s.sibling;return re(ct,ct.current&1|2),r.child}i=i.sibling}p.tail!==null&&ki()>Ml&&(r.flags|=128,c=!0,js(p,!1),r.lanes=4194304)}else{if(!c)if(i=wl(x),i!==null){if(r.flags|=128,c=!0,i=i.updateQueue,r.updateQueue=i,El(r,i),js(p,!0),p.tail===null&&p.tailMode==="hidden"&&!x.alternate&&!Me)return Fe(r),null}else 2*ki()-p.renderingStartTime>Ml&&s!==536870912&&(r.flags|=128,c=!0,js(p,!1),r.lanes=4194304);p.isBackwards?(x.sibling=r.child,r.child=x):(i=p.last,i!==null?i.sibling=x:r.child=x,p.last=x)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=ki(),r.sibling=null,i=ct.current,re(ct,c?i&1|2:i&1),r):(Fe(r),null);case 22:case 23:return rn(r),Eu(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Fe(r),r.subtreeFlags&6&&(r.flags|=8192)):Fe(r),s=r.updateQueue,s!==null&&El(r,s.retryQueue),s=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),i!==null&&ae(fa),null;case 24:return s=null,i!==null&&(s=i.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),nn(lt),Fe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function k7(i,r){switch(uu(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return nn(lt),Tt(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Zi(r),null;case 13:if(rn(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ds()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ae(ct),null;case 4:return Tt(),null;case 10:return nn(r.type),null;case 22:case 23:return rn(r),Eu(),i!==null&&ae(fa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return nn(lt),null;case 25:return null;default:return null}}function Cg(i,r){switch(uu(r),r.tag){case 3:nn(lt),Tt();break;case 26:case 27:case 5:Zi(r);break;case 4:Tt();break;case 13:rn(r);break;case 19:ae(ct);break;case 10:nn(r.type);break;case 22:case 23:rn(r),Eu(),i!==null&&ae(fa);break;case 24:nn(lt)}}function As(i,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var p=c.next;s=p;do{if((s.tag&i)===i){c=void 0;var x=s.create,C=s.inst;c=x(),C.destroy=c}s=s.next}while(s!==p)}}catch(A){Ue(r,r.return,A)}}function Ln(i,r,s){try{var c=r.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var x=p.next;c=x;do{if((c.tag&i)===i){var C=c.inst,A=C.destroy;if(A!==void 0){C.destroy=void 0,p=r;var H=s,U=A;try{U()}catch(Z){Ue(p,H,Z)}}}c=c.next}while(c!==x)}}catch(Z){Ue(r,r.return,Z)}}function Tg(i){var r=i.updateQueue;if(r!==null){var s=i.stateNode;try{um(r,s)}catch(c){Ue(i,i.return,c)}}}function Eg(i,r,s){s.props=pa(i.type,i.memoizedProps),s.state=i.memoizedState;try{s.componentWillUnmount()}catch(c){Ue(i,r,c)}}function Ms(i,r){try{var s=i.ref;if(s!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof s=="function"?i.refCleanup=s(c):s.current=c}}catch(p){Ue(i,r,p)}}function Di(i,r){var s=i.ref,c=i.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(p){Ue(i,r,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(p){Ue(i,r,p)}else s.current=null}function jg(i){var r=i.type,s=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(p){Ue(i,i.return,p)}}function Ju(i,r,s){try{var c=i.stateNode;J7(c,i.type,s,r),c[Nt]=r}catch(p){Ue(i,i.return,p)}}function Ag(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Pn(i.type)||i.tag===4}function ef(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Ag(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Pn(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function tf(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(i,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(i),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(c===27&&Pn(i.type)&&(s=i.stateNode,r=null),i=i.child,i!==null))for(tf(i,r,s),i=i.sibling;i!==null;)tf(i,r,s),i=i.sibling}function jl(i,r,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?s.insertBefore(i,r):s.appendChild(i);else if(c!==4&&(c===27&&Pn(i.type)&&(s=i.stateNode),i=i.child,i!==null))for(jl(i,r,s),i=i.sibling;i!==null;)jl(i,r,s),i=i.sibling}function Mg(i){var r=i.stateNode,s=i.memoizedProps;try{for(var c=i.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);bt(r,c,s),r[Et]=i,r[Nt]=s}catch(x){Ue(i,i.return,x)}}var ln=!1,et=!1,nf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,ht=null;function V7(i,r){if(i=i.containerInfo,Af=Gl,i=B2(i),eu(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else e:{s=(s=i.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var C=0,A=-1,H=-1,U=0,Z=0,ee=i,G=null;t:for(;;){for(var q;ee!==s||p!==0&&ee.nodeType!==3||(A=C+p),ee!==x||c!==0&&ee.nodeType!==3||(H=C+c),ee.nodeType===3&&(C+=ee.nodeValue.length),(q=ee.firstChild)!==null;)G=ee,ee=q;for(;;){if(ee===i)break t;if(G===s&&++U===p&&(A=C),G===x&&++Z===c&&(H=C),(q=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=q}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mf={focusedElem:i,selectionRange:s},Gl=!1,ht=r;ht!==null;)if(r=ht,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,ht=i;else for(;ht!==null;){switch(r=ht,x=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&x!==null){i=void 0,s=r,p=x.memoizedProps,x=x.memoizedState,c=s.stateNode;try{var me=pa(s.type,p,s.elementType===s.type);i=c.getSnapshotBeforeUpdate(me,x),c.__reactInternalSnapshotBeforeUpdate=i}catch(fe){Ue(s,s.return,fe)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,s=i.nodeType,s===9)Rf(i);else if(s===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Rf(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,ht=i;break}ht=r.return}}function Og(i,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:On(i,s),c&4&&As(5,s);break;case 1:if(On(i,s),c&4)if(i=s.stateNode,r===null)try{i.componentDidMount()}catch(C){Ue(s,s.return,C)}else{var p=pa(s.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(p,r,i.__reactInternalSnapshotBeforeUpdate)}catch(C){Ue(s,s.return,C)}}c&64&&Tg(s),c&512&&Ms(s,s.return);break;case 3:if(On(i,s),c&64&&(i=s.updateQueue,i!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{um(i,r)}catch(C){Ue(s,s.return,C)}}break;case 27:r===null&&c&4&&Mg(s);case 26:case 5:On(i,s),r===null&&c&4&&jg(s),c&512&&Ms(s,s.return);break;case 12:On(i,s);break;case 13:On(i,s),c&4&&Vg(i,s),c&64&&(i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(s=U7.bind(null,s),sb(i,s))));break;case 22:if(c=s.memoizedState!==null||ln,!c){r=r!==null&&r.memoizedState!==null||et,p=ln;var x=et;ln=c,(et=r)&&!x?Rn(i,s,(s.subtreeFlags&8772)!==0):On(i,s),ln=p,et=x}break;case 30:break;default:On(i,s)}}function Rg(i){var r=i.alternate;r!==null&&(i.alternate=null,Rg(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Dd(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var qe=null,It=!1;function cn(i,r,s){for(s=s.child;s!==null;)kg(i,r,s),s=s.sibling}function kg(i,r,s){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Zr,s)}catch{}switch(s.tag){case 26:et||Di(s,r),cn(i,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:et||Di(s,r);var c=qe,p=It;Pn(s.type)&&(qe=s.stateNode,It=!1),cn(i,r,s),Ps(s.stateNode),qe=c,It=p;break;case 5:et||Di(s,r);case 6:if(c=qe,p=It,qe=null,cn(i,r,s),qe=c,It=p,qe!==null)if(It)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(s.stateNode)}catch(x){Ue(s,r,x)}else try{qe.removeChild(s.stateNode)}catch(x){Ue(s,r,x)}break;case 18:qe!==null&&(It?(i=qe,wx(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.stateNode),qs(i)):wx(qe,s.stateNode));break;case 4:c=qe,p=It,qe=s.stateNode.containerInfo,It=!0,cn(i,r,s),qe=c,It=p;break;case 0:case 11:case 14:case 15:et||Ln(2,s,r),et||Ln(4,s,r),cn(i,r,s);break;case 1:et||(Di(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Eg(s,r,c)),cn(i,r,s);break;case 21:cn(i,r,s);break;case 22:et=(c=et)||s.memoizedState!==null,cn(i,r,s),et=c;break;default:cn(i,r,s)}}function Vg(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{qs(i)}catch(s){Ue(r,r.return,s)}}function H7(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new Lg),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new Lg),r;default:throw Error(a(435,i.tag))}}function af(i,r){var s=H7(i);r.forEach(function(c){var p=_7.bind(null,i,c);s.has(c)||(s.add(c),c.then(p,p))})}function Jt(i,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var p=s[c],x=i,C=r,A=C;e:for(;A!==null;){switch(A.tag){case 27:if(Pn(A.type)){qe=A.stateNode,It=!1;break e}break;case 5:qe=A.stateNode,It=!1;break e;case 3:case 4:qe=A.stateNode.containerInfo,It=!0;break e}A=A.return}if(qe===null)throw Error(a(160));kg(x,C,p),qe=null,It=!1,x=p.alternate,x!==null&&(x.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Hg(r,i),r=r.sibling}var Ti=null;function Hg(i,r){var s=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Jt(r,i),ei(i),c&4&&(Ln(3,i,i.return),As(3,i),Ln(5,i,i.return));break;case 1:Jt(r,i),ei(i),c&512&&(et||s===null||Di(s,s.return)),c&64&&ln&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(s=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var p=Ti;if(Jt(r,i),ei(i),c&512&&(et||s===null||Di(s,s.return)),c&4){var x=s!==null?s.memoizedState:null;if(c=i.memoizedState,s===null)if(c===null)if(i.stateNode===null){e:{c=i.type,s=i.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":x=p.getElementsByTagName("title")[0],(!x||x[Qr]||x[Et]||x.namespaceURI==="http://www.w3.org/2000/svg"||x.hasAttribute("itemprop"))&&(x=p.createElement(c),p.head.insertBefore(x,p.querySelector("head > title"))),bt(x,c,s),x[Et]=i,ut(x),c=x;break e;case"link":var C=Mx("link","href",p).get(c+(s.href||""));if(C){for(var A=0;A<C.length;A++)if(x=C[A],x.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&x.getAttribute("rel")===(s.rel==null?null:s.rel)&&x.getAttribute("title")===(s.title==null?null:s.title)&&x.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){C.splice(A,1);break t}}x=p.createElement(c),bt(x,c,s),p.head.appendChild(x);break;case"meta":if(C=Mx("meta","content",p).get(c+(s.content||""))){for(A=0;A<C.length;A++)if(x=C[A],x.getAttribute("content")===(s.content==null?null:""+s.content)&&x.getAttribute("name")===(s.name==null?null:s.name)&&x.getAttribute("property")===(s.property==null?null:s.property)&&x.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&x.getAttribute("charset")===(s.charSet==null?null:s.charSet)){C.splice(A,1);break t}}x=p.createElement(c),bt(x,c,s),p.head.appendChild(x);break;default:throw Error(a(468,c))}x[Et]=i,ut(x),c=x}i.stateNode=c}else Lx(p,i.type,i.stateNode);else i.stateNode=Ax(p,c,i.memoizedProps);else x!==c?(x===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):x.count--,c===null?Lx(p,i.type,i.stateNode):Ax(p,c,i.memoizedProps)):c===null&&i.stateNode!==null&&Ju(i,i.memoizedProps,s.memoizedProps)}break;case 27:Jt(r,i),ei(i),c&512&&(et||s===null||Di(s,s.return)),s!==null&&c&4&&Ju(i,i.memoizedProps,s.memoizedProps);break;case 5:if(Jt(r,i),ei(i),c&512&&(et||s===null||Di(s,s.return)),i.flags&32){p=i.stateNode;try{Pa(p,"")}catch(q){Ue(i,i.return,q)}}c&4&&i.stateNode!=null&&(p=i.memoizedProps,Ju(i,p,s!==null?s.memoizedProps:p)),c&1024&&(nf=!0);break;case 6:if(Jt(r,i),ei(i),c&4){if(i.stateNode===null)throw Error(a(162));c=i.memoizedProps,s=i.stateNode;try{s.nodeValue=c}catch(q){Ue(i,i.return,q)}}break;case 3:if(Il=null,p=Ti,Ti=$l(r.containerInfo),Jt(r,i),Ti=p,ei(i),c&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(r.containerInfo)}catch(q){Ue(i,i.return,q)}nf&&(nf=!1,Dg(i));break;case 4:c=Ti,Ti=$l(i.stateNode.containerInfo),Jt(r,i),ei(i),Ti=c;break;case 12:Jt(r,i),ei(i);break;case 13:Jt(r,i),ei(i),i.child.flags&8192&&i.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(df=ki()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,af(i,c)));break;case 22:p=i.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,U=ln,Z=et;if(ln=U||p,et=Z||H,Jt(r,i),et=Z,ln=U,ei(i),c&8192)e:for(r=i.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(s===null||H||ln||et||ma(i)),s=null,r=i;;){if(r.tag===5||r.tag===26){if(s===null){H=s=r;try{if(x=H.stateNode,p)C=x.style,typeof C.setProperty=="function"?C.setProperty("display","none","important"):C.display="none";else{A=H.stateNode;var ee=H.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Ue(H,H.return,q)}}}else if(r.tag===6){if(s===null){H=r;try{H.stateNode.nodeValue=p?"":H.memoizedProps}catch(q){Ue(H,H.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,af(i,s))));break;case 19:Jt(r,i),ei(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,af(i,c)));break;case 30:break;case 21:break;default:Jt(r,i),ei(i)}}function ei(i){var r=i.flags;if(r&2){try{for(var s,c=i.return;c!==null;){if(Ag(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var p=s.stateNode,x=ef(i);jl(i,x,p);break;case 5:var C=s.stateNode;s.flags&32&&(Pa(C,""),s.flags&=-33);var A=ef(i);jl(i,A,C);break;case 3:case 4:var H=s.stateNode.containerInfo,U=ef(i);tf(i,U,H);break;default:throw Error(a(161))}}catch(Z){Ue(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function Dg(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;Dg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function On(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Og(i,r.alternate,r),r=r.sibling}function ma(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Ln(4,r,r.return),ma(r);break;case 1:Di(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Eg(r,r.return,s),ma(r);break;case 27:Ps(r.stateNode);case 26:case 5:Di(r,r.return),ma(r);break;case 22:r.memoizedState===null&&ma(r);break;case 30:ma(r);break;default:ma(r)}i=i.sibling}}function Rn(i,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,p=i,x=r,C=x.flags;switch(x.tag){case 0:case 11:case 15:Rn(p,x,s),As(4,x);break;case 1:if(Rn(p,x,s),c=x,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(U){Ue(c,c.return,U)}if(c=x,p=c.updateQueue,p!==null){var A=c.stateNode;try{var H=p.shared.hiddenCallbacks;if(H!==null)for(p.shared.hiddenCallbacks=null,p=0;p<H.length;p++)dm(H[p],A)}catch(U){Ue(c,c.return,U)}}s&&C&64&&Tg(x),Ms(x,x.return);break;case 27:Mg(x);case 26:case 5:Rn(p,x,s),s&&c===null&&C&4&&jg(x),Ms(x,x.return);break;case 12:Rn(p,x,s);break;case 13:Rn(p,x,s),s&&C&4&&Vg(p,x);break;case 22:x.memoizedState===null&&Rn(p,x,s),Ms(x,x.return);break;case 30:break;default:Rn(p,x,s)}r=r.sibling}}function rf(i,r){var s=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==s&&(i!=null&&i.refCount++,s!=null&&hs(s))}function sf(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&hs(i))}function zi(i,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)zg(i,r,s,c),r=r.sibling}function zg(i,r,s,c){var p=r.flags;switch(r.tag){case 0:case 11:case 15:zi(i,r,s,c),p&2048&&As(9,r);break;case 1:zi(i,r,s,c);break;case 3:zi(i,r,s,c),p&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&hs(i)));break;case 12:if(p&2048){zi(i,r,s,c),i=r.stateNode;try{var x=r.memoizedProps,C=x.id,A=x.onPostCommit;typeof A=="function"&&A(C,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(H){Ue(r,r.return,H)}}else zi(i,r,s,c);break;case 13:zi(i,r,s,c);break;case 23:break;case 22:x=r.stateNode,C=r.alternate,r.memoizedState!==null?x._visibility&2?zi(i,r,s,c):Ls(i,r):x._visibility&2?zi(i,r,s,c):(x._visibility|=2,ir(i,r,s,c,(r.subtreeFlags&10256)!==0)),p&2048&&rf(C,r);break;case 24:zi(i,r,s,c),p&2048&&sf(r.alternate,r);break;default:zi(i,r,s,c)}}function ir(i,r,s,c,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var x=i,C=r,A=s,H=c,U=C.flags;switch(C.tag){case 0:case 11:case 15:ir(x,C,A,H,p),As(8,C);break;case 23:break;case 22:var Z=C.stateNode;C.memoizedState!==null?Z._visibility&2?ir(x,C,A,H,p):Ls(x,C):(Z._visibility|=2,ir(x,C,A,H,p)),p&&U&2048&&rf(C.alternate,C);break;case 24:ir(x,C,A,H,p),p&&U&2048&&sf(C.alternate,C);break;default:ir(x,C,A,H,p)}r=r.sibling}}function Ls(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=i,c=r,p=c.flags;switch(c.tag){case 22:Ls(s,c),p&2048&&rf(c.alternate,c);break;case 24:Ls(s,c),p&2048&&sf(c.alternate,c);break;default:Ls(s,c)}r=r.sibling}}var Os=8192;function nr(i){if(i.subtreeFlags&Os)for(i=i.child;i!==null;)Pg(i),i=i.sibling}function Pg(i){switch(i.tag){case 26:nr(i),i.flags&Os&&i.memoizedState!==null&&yb(Ti,i.memoizedState,i.memoizedProps);break;case 5:nr(i);break;case 3:case 4:var r=Ti;Ti=$l(i.stateNode.containerInfo),nr(i),Ti=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Os,Os=16777216,nr(i),Os=r):nr(i));break;default:nr(i)}}function Ng(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Rs(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];ht=c,Bg(c,i)}Ng(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)$g(i),i=i.sibling}function $g(i){switch(i.tag){case 0:case 11:case 15:Rs(i),i.flags&2048&&Ln(9,i,i.return);break;case 3:Rs(i);break;case 12:Rs(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Al(i)):Rs(i);break;default:Rs(i)}}function Al(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];ht=c,Bg(c,i)}Ng(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Ln(8,r,r.return),Al(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Al(r));break;default:Al(r)}i=i.sibling}}function Bg(i,r){for(;ht!==null;){var s=ht;switch(s.tag){case 0:case 11:case 15:Ln(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:hs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,ht=c;else e:for(s=i;ht!==null;){c=ht;var p=c.sibling,x=c.return;if(Rg(c),c===s){ht=null;break e}if(p!==null){p.return=x,ht=p;break e}ht=x}}}var D7={getCacheForType:function(i){var r=jt(lt),s=r.data.get(i);return s===void 0&&(s=i(),r.data.set(i,s)),s}},z7=typeof WeakMap=="function"?WeakMap:Map,ze=0,_e=null,Ce=null,Ee=0,Pe=0,ti=null,kn=!1,ar=!1,of=!1,dn=0,We=0,Vn=0,ga=0,lf=0,gi=0,rr=0,ks=null,Ut=null,cf=!1,df=0,Ml=1/0,Ll=null,Hn=null,wt=0,Dn=null,sr=null,or=0,uf=0,ff=null,Ig=null,Vs=0,hf=null;function ii(){if((ze&2)!==0&&Ee!==0)return Ee&-Ee;if(B.T!==null){var i=Xa;return i!==0?i:wf()}return n2()}function Ug(){gi===0&&(gi=(Ee&536870912)===0||Me?J1():536870912);var i=mi.current;return i!==null&&(i.flags|=32),gi}function ni(i,r,s){(i===_e&&(Pe===2||Pe===9)||i.cancelPendingCommit!==null)&&(lr(i,0),zn(i,Ee,gi,!1)),Kr(i,s),((ze&2)===0||i!==_e)&&(i===_e&&((ze&2)===0&&(ga|=s),We===4&&zn(i,Ee,gi,!1)),Pi(i))}function _g(i,r,s){if((ze&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&i.expiredLanes)===0||Wr(i,r),p=c?$7(i,r):gf(i,r,!0),x=c;do{if(p===0){ar&&!c&&zn(i,r,0,!1);break}else{if(s=i.current.alternate,x&&!P7(s)){p=gf(i,r,!1),x=!1;continue}if(p===2){if(x=r,i.errorRecoveryDisabledLanes&x)var C=0;else C=i.pendingLanes&-536870913,C=C!==0?C:C&536870912?536870912:0;if(C!==0){r=C;e:{var A=i;p=ks;var H=A.current.memoizedState.isDehydrated;if(H&&(lr(A,C).flags|=256),C=gf(A,C,!1),C!==2){if(of&&!H){A.errorRecoveryDisabledLanes|=x,ga|=x,p=4;break e}x=Ut,Ut=p,x!==null&&(Ut===null?Ut=x:Ut.push.apply(Ut,x))}p=C}if(x=!1,p!==2)continue}}if(p===1){lr(i,0),zn(i,r,0,!0);break}e:{switch(c=i,x=p,x){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:zn(c,r,gi,!kn);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(p=df+300-ki(),10<p)){if(zn(c,r,gi,!kn),Bo(c,0,!0)!==0)break e;c.timeoutHandle=vx(Gg.bind(null,c,s,Ut,Ll,cf,r,gi,ga,rr,kn,x,2,-0,0),p);break e}Gg(c,s,Ut,Ll,cf,r,gi,ga,rr,kn,x,0,-0,0)}}break}while(!0);Pi(i)}function Gg(i,r,s,c,p,x,C,A,H,U,Z,ee,G,q){if(i.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(Bs={stylesheets:null,count:0,unsuspend:vb},Pg(r),ee=wb(),ee!==null)){i.cancelPendingCommit=ee(Kg.bind(null,i,r,x,s,c,p,C,A,H,Z,1,G,q)),zn(i,x,C,!U);return}Kg(i,r,x,s,c,p,C,A,H)}function P7(i){for(var r=i;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var p=s[c],x=p.getSnapshot;p=p.value;try{if(!Kt(x(),p))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zn(i,r,s,c){r&=~lf,r&=~ga,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var p=r;0<p;){var x=31-Wt(p),C=1<<x;c[x]=-1,p&=~C}s!==0&&t2(i,s,r)}function Ol(){return(ze&6)===0?(Hs(0),!1):!0}function pf(){if(Ce!==null){if(Pe===0)var i=Ce.return;else i=Ce,tn=da=null,Ou(i),er=null,Ts=0,i=Ce;for(;i!==null;)Cg(i.alternate,i),i=i.return;Ce=null}}function lr(i,r){var s=i.timeoutHandle;s!==-1&&(i.timeoutHandle=-1,tb(s)),s=i.cancelPendingCommit,s!==null&&(i.cancelPendingCommit=null,s()),pf(),_e=i,Ce=s=Qi(i.current,null),Ee=r,Pe=0,ti=null,kn=!1,ar=Wr(i,r),of=!1,rr=gi=lf=ga=Vn=We=0,Ut=ks=null,cf=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var p=31-Wt(c),x=1<<p;r|=i[p],c&=~x}return dn=r,Qo(),s}function qg(i,r){we=null,B.H=xl,r===ms||r===ol?(r=lm(),Pe=3):r===rm?(r=lm(),Pe=4):Pe=r===cg?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ti=r,Ce===null&&(We=1,Sl(i,ui(r,i.current)))}function Yg(){var i=B.H;return B.H=xl,i===null?xl:i}function Fg(){var i=B.A;return B.A=D7,i}function mf(){We=4,kn||(Ee&4194048)!==Ee&&mi.current!==null||(ar=!0),(Vn&134217727)===0&&(ga&134217727)===0||_e===null||zn(_e,Ee,gi,!1)}function gf(i,r,s){var c=ze;ze|=2;var p=Yg(),x=Fg();(_e!==i||Ee!==r)&&(Ll=null,lr(i,r)),r=!1;var C=We;e:do try{if(Pe!==0&&Ce!==null){var A=Ce,H=ti;switch(Pe){case 8:pf(),C=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(r=!0);var U=Pe;if(Pe=0,ti=null,cr(i,A,H,U),s&&ar){C=0;break e}break;default:U=Pe,Pe=0,ti=null,cr(i,A,H,U)}}N7(),C=We;break}catch(Z){qg(i,Z)}while(!0);return r&&i.shellSuspendCounter++,tn=da=null,ze=c,B.H=p,B.A=x,Ce===null&&(_e=null,Ee=0,Qo()),C}function N7(){for(;Ce!==null;)Xg(Ce)}function $7(i,r){var s=ze;ze|=2;var c=Yg(),p=Fg();_e!==i||Ee!==r?(Ll=null,Ml=ki()+500,lr(i,r)):ar=Wr(i,r);e:do try{if(Pe!==0&&Ce!==null){r=Ce;var x=ti;t:switch(Pe){case 1:Pe=0,ti=null,cr(i,r,x,1);break;case 2:case 9:if(sm(x)){Pe=0,ti=null,Zg(r);break}r=function(){Pe!==2&&Pe!==9||_e!==i||(Pe=7),Pi(i)},x.then(r,r);break e;case 3:Pe=7;break e;case 4:Pe=5;break e;case 7:sm(x)?(Pe=0,ti=null,Zg(r)):(Pe=0,ti=null,cr(i,r,x,7));break;case 5:var C=null;switch(Ce.tag){case 26:C=Ce.memoizedState;case 5:case 27:var A=Ce;if(!C||Ox(C)){Pe=0,ti=null;var H=A.sibling;if(H!==null)Ce=H;else{var U=A.return;U!==null?(Ce=U,Rl(U)):Ce=null}break t}}Pe=0,ti=null,cr(i,r,x,5);break;case 6:Pe=0,ti=null,cr(i,r,x,6);break;case 8:pf(),We=6;break e;default:throw Error(a(462))}}B7();break}catch(Z){qg(i,Z)}while(!0);return tn=da=null,B.H=c,B.A=p,ze=s,Ce!==null?0:(_e=null,Ee=0,Qo(),We)}function B7(){for(;Ce!==null&&!l8();)Xg(Ce)}function Xg(i){var r=bg(i.alternate,i,dn);i.memoizedProps=i.pendingProps,r===null?Rl(i):Ce=r}function Zg(i){var r=i,s=r.alternate;switch(r.tag){case 15:case 0:r=mg(s,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=mg(s,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:Ou(r);default:Cg(s,r),r=Ce=W2(r,dn),r=bg(s,r,dn)}i.memoizedProps=i.pendingProps,r===null?Rl(i):Ce=r}function cr(i,r,s,c){tn=da=null,Ou(r),er=null,Ts=0;var p=r.return;try{if(L7(i,p,r,s,Ee)){We=1,Sl(i,ui(s,i.current)),Ce=null;return}}catch(x){if(p!==null)throw Ce=p,x;We=1,Sl(i,ui(s,i.current)),Ce=null;return}r.flags&32768?(Me||c===1?i=!0:ar||(Ee&536870912)!==0?i=!1:(kn=i=!0,(c===2||c===9||c===3||c===6)&&(c=mi.current,c!==null&&c.tag===13&&(c.flags|=16384))),Wg(r,i)):Rl(r)}function Rl(i){var r=i;do{if((r.flags&32768)!==0){Wg(r,kn);return}i=r.return;var s=R7(r.alternate,r,dn);if(s!==null){Ce=s;return}if(r=r.sibling,r!==null){Ce=r;return}Ce=r=i}while(r!==null);We===0&&(We=5)}function Wg(i,r){do{var s=k7(i.alternate,i);if(s!==null){s.flags&=32767,Ce=s;return}if(s=i.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(i=i.sibling,i!==null)){Ce=i;return}Ce=i=s}while(i!==null);We=6,Ce=null}function Kg(i,r,s,c,p,x,C,A,H){i.cancelPendingCommit=null;do kl();while(wt!==0);if((ze&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(x=r.lanes|r.childLanes,x|=ru,v8(i,s,x,C,A,H),i===_e&&(Ce=_e=null,Ee=0),sr=r,Dn=i,or=s,uf=x,ff=p,Ig=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,G7(Po,function(){return ix(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,p=W.p,W.p=2,C=ze,ze|=4;try{V7(i,r,s)}finally{ze=C,W.p=p,B.T=c}}wt=1,Qg(),Jg(),ex()}}function Qg(){if(wt===1){wt=0;var i=Dn,r=sr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=W.p;W.p=2;var p=ze;ze|=4;try{Hg(r,i);var x=Mf,C=B2(i.containerInfo),A=x.focusedElem,H=x.selectionRange;if(C!==A&&A&&A.ownerDocument&&$2(A.ownerDocument.documentElement,A)){if(H!==null&&eu(A)){var U=H.start,Z=H.end;if(Z===void 0&&(Z=U),"selectionStart"in A)A.selectionStart=U,A.selectionEnd=Math.min(Z,A.value.length);else{var ee=A.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var q=G.getSelection(),me=A.textContent.length,fe=Math.min(H.start,me),Ie=H.end===void 0?fe:Math.min(H.end,me);!q.extend&&fe>Ie&&(C=Ie,Ie=fe,fe=C);var $=N2(A,fe),z=N2(A,Ie);if($&&z&&(q.rangeCount!==1||q.anchorNode!==$.node||q.anchorOffset!==$.offset||q.focusNode!==z.node||q.focusOffset!==z.offset)){var I=ee.createRange();I.setStart($.node,$.offset),q.removeAllRanges(),fe>Ie?(q.addRange(I),q.extend(z.node,z.offset)):(I.setEnd(z.node,z.offset),q.addRange(I))}}}}for(ee=[],q=A;q=q.parentNode;)q.nodeType===1&&ee.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ee.length;A++){var Q=ee[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Gl=!!Af,Mf=Af=null}finally{ze=p,W.p=c,B.T=s}}i.current=r,wt=2}}function Jg(){if(wt===2){wt=0;var i=Dn,r=sr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=W.p;W.p=2;var p=ze;ze|=4;try{Og(i,r.alternate,r)}finally{ze=p,W.p=c,B.T=s}}wt=3}}function ex(){if(wt===4||wt===3){wt=0,c8();var i=Dn,r=sr,s=or,c=Ig;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?wt=5:(wt=0,sr=Dn=null,tx(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(Hn=null),Vd(s),r=r.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Zr,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=B.T,p=W.p,W.p=2,B.T=null;try{for(var x=i.onRecoverableError,C=0;C<c.length;C++){var A=c[C];x(A.value,{componentStack:A.stack})}}finally{B.T=r,W.p=p}}(or&3)!==0&&kl(),Pi(i),p=i.pendingLanes,(s&4194090)!==0&&(p&42)!==0?i===hf?Vs++:(Vs=0,hf=i):Vs=0,Hs(0)}}function tx(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,hs(r)))}function kl(i){return Qg(),Jg(),ex(),ix()}function ix(){if(wt!==5)return!1;var i=Dn,r=uf;uf=0;var s=Vd(or),c=B.T,p=W.p;try{W.p=32>s?32:s,B.T=null,s=ff,ff=null;var x=Dn,C=or;if(wt=0,sr=Dn=null,or=0,(ze&6)!==0)throw Error(a(331));var A=ze;if(ze|=4,$g(x.current),zg(x,x.current,C,s),ze=A,Hs(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Zr,x)}catch{}return!0}finally{W.p=p,B.T=c,tx(i,r)}}function nx(i,r,s){r=ui(s,r),r=Gu(i.stateNode,r,2),i=En(i,r,2),i!==null&&(Kr(i,2),Pi(i))}function Ue(i,r,s){if(i.tag===3)nx(i,i,s);else for(;r!==null;){if(r.tag===3){nx(r,i,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hn===null||!Hn.has(c))){i=ui(s,i),s=og(2),c=En(r,s,2),c!==null&&(lg(s,c,r,i),Kr(c,2),Pi(c));break}}r=r.return}}function xf(i,r,s){var c=i.pingCache;if(c===null){c=i.pingCache=new z7;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(s)||(of=!0,p.add(s),i=I7.bind(null,i,r,s),r.then(i,i))}function I7(i,r,s){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&s,i.warmLanes&=~s,_e===i&&(Ee&s)===s&&(We===4||We===3&&(Ee&62914560)===Ee&&300>ki()-df?(ze&2)===0&&lr(i,0):lf|=s,rr===Ee&&(rr=0)),Pi(i)}function ax(i,r){r===0&&(r=e2()),i=Ga(i,r),i!==null&&(Kr(i,r),Pi(i))}function U7(i){var r=i.memoizedState,s=0;r!==null&&(s=r.retryLane),ax(i,s)}function _7(i,r){var s=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(s=p.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),ax(i,s)}function G7(i,r){return Ld(i,r)}var Vl=null,dr=null,vf=!1,Hl=!1,yf=!1,xa=0;function Pi(i){i!==dr&&i.next===null&&(dr===null?Vl=dr=i:dr=dr.next=i),Hl=!0,vf||(vf=!0,Y7())}function Hs(i,r){if(!yf&&Hl){yf=!0;do for(var s=!1,c=Vl;c!==null;){if(i!==0){var p=c.pendingLanes;if(p===0)var x=0;else{var C=c.suspendedLanes,A=c.pingedLanes;x=(1<<31-Wt(42|i)+1)-1,x&=p&~(C&~A),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(s=!0,lx(c,x))}else x=Ee,x=Bo(c,c===_e?x:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(x&3)===0||Wr(c,x)||(s=!0,lx(c,x));c=c.next}while(s);yf=!1}}function q7(){rx()}function rx(){Hl=vf=!1;var i=0;xa!==0&&(eb()&&(i=xa),xa=0);for(var r=ki(),s=null,c=Vl;c!==null;){var p=c.next,x=sx(c,r);x===0?(c.next=null,s===null?Vl=p:s.next=p,p===null&&(dr=s)):(s=c,(i!==0||(x&3)!==0)&&(Hl=!0)),c=p}Hs(i)}function sx(i,r){for(var s=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,x=i.pendingLanes&-62914561;0<x;){var C=31-Wt(x),A=1<<C,H=p[C];H===-1?((A&s)===0||(A&c)!==0)&&(p[C]=x8(A,r)):H<=r&&(i.expiredLanes|=A),x&=~A}if(r=_e,s=Ee,s=Bo(i,i===r?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,s===0||i===r&&(Pe===2||Pe===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Od(c),i.callbackNode=null,i.callbackPriority=0;if((s&3)===0||Wr(i,s)){if(r=s&-s,r===i.callbackPriority)return r;switch(c!==null&&Od(c),Vd(s)){case 2:case 8:s=K1;break;case 32:s=Po;break;case 268435456:s=Q1;break;default:s=Po}return c=ox.bind(null,i),s=Ld(s,c),i.callbackPriority=r,i.callbackNode=s,r}return c!==null&&c!==null&&Od(c),i.callbackPriority=2,i.callbackNode=null,2}function ox(i,r){if(wt!==0&&wt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var s=i.callbackNode;if(kl()&&i.callbackNode!==s)return null;var c=Ee;return c=Bo(i,i===_e?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(_g(i,c,r),sx(i,ki()),i.callbackNode!=null&&i.callbackNode===s?ox.bind(null,i):null)}function lx(i,r){if(kl())return null;_g(i,r,!0)}function Y7(){ib(function(){(ze&6)!==0?Ld(W1,q7):rx()})}function wf(){return xa===0&&(xa=J1()),xa}function cx(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:qo(""+i)}function dx(i,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,i.id&&s.setAttribute("form",i.id),r.parentNode.insertBefore(s,r),i=new FormData(i),s.parentNode.removeChild(s),i}function F7(i,r,s,c,p){if(r==="submit"&&s&&s.stateNode===p){var x=cx((p[Nt]||null).action),C=c.submitter;C&&(r=(r=C[Nt]||null)?cx(r.formAction):C.getAttribute("formAction"),r!==null&&(x=r,C=null));var A=new Zo("action","action",null,c,p);i.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(xa!==0){var H=C?dx(p,C):new FormData(p);$u(s,{pending:!0,data:H,method:p.method,action:x},null,H)}}else typeof x=="function"&&(A.preventDefault(),H=C?dx(p,C):new FormData(p),$u(s,{pending:!0,data:H,method:p.method,action:x},x,H))},currentTarget:p}]})}}for(var bf=0;bf<au.length;bf++){var Sf=au[bf],X7=Sf.toLowerCase(),Z7=Sf[0].toUpperCase()+Sf.slice(1);Ci(X7,"on"+Z7)}Ci(_2,"onAnimationEnd"),Ci(G2,"onAnimationIteration"),Ci(q2,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(f7,"onTransitionRun"),Ci(h7,"onTransitionStart"),Ci(p7,"onTransitionCancel"),Ci(Y2,"onTransitionEnd"),Ha("onMouseEnter",["mouseout","mouseover"]),Ha("onMouseLeave",["mouseout","mouseover"]),Ha("onPointerEnter",["pointerout","pointerover"]),Ha("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ds));function ux(i,r){r=(r&4)!==0;for(var s=0;s<i.length;s++){var c=i[s],p=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var C=c.length-1;0<=C;C--){var A=c[C],H=A.instance,U=A.currentTarget;if(A=A.listener,H!==x&&p.isPropagationStopped())break e;x=A,p.currentTarget=U;try{x(p)}catch(Z){bl(Z)}p.currentTarget=null,x=H}else for(C=0;C<c.length;C++){if(A=c[C],H=A.instance,U=A.currentTarget,A=A.listener,H!==x&&p.isPropagationStopped())break e;x=A,p.currentTarget=U;try{x(p)}catch(Z){bl(Z)}p.currentTarget=null,x=H}}}}function Te(i,r){var s=r[Hd];s===void 0&&(s=r[Hd]=new Set);var c=i+"__bubble";s.has(c)||(fx(r,i,2,!1),s.add(c))}function Cf(i,r,s){var c=0;r&&(c|=4),fx(s,i,c,r)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Tf(i){if(!i[Dl]){i[Dl]=!0,r2.forEach(function(s){s!=="selectionchange"&&(W7.has(s)||Cf(s,!1,i),Cf(s,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Dl]||(r[Dl]=!0,Cf("selectionchange",!1,r))}}function fx(i,r,s,c){switch(zx(r)){case 2:var p=Cb;break;case 8:p=Tb;break;default:p=Nf}s=p.bind(null,r,s,i),p=void 0,!qd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(r,s,{capture:!0,passive:p}):i.addEventListener(r,s,!0):p!==void 0?i.addEventListener(r,s,{passive:p}):i.addEventListener(r,s,!1)}function Ef(i,r,s,c,p){var x=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var A=c.stateNode.containerInfo;if(A===p)break;if(C===4)for(C=c.return;C!==null;){var H=C.tag;if((H===3||H===4)&&C.stateNode.containerInfo===p)return;C=C.return}for(;A!==null;){if(C=Ra(A),C===null)return;if(H=C.tag,H===5||H===6||H===26||H===27){c=x=C;continue e}A=A.parentNode}}c=c.return}y2(function(){var U=x,Z=_d(s),ee=[];e:{var G=F2.get(i);if(G!==void 0){var q=Zo,me=i;switch(i){case"keypress":if(Fo(s)===0)break e;case"keydown":case"keyup":q=G8;break;case"focusin":me="focus",q=Zd;break;case"focusout":me="blur",q=Zd;break;case"beforeblur":case"afterblur":q=Zd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=S2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=k8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=F8;break;case _2:case G2:case q2:q=D8;break;case Y2:q=Z8;break;case"scroll":case"scrollend":q=O8;break;case"wheel":q=K8;break;case"copy":case"cut":case"paste":q=P8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=T2;break;case"toggle":case"beforetoggle":q=J8}var fe=(r&4)!==0,Ie=!fe&&(i==="scroll"||i==="scrollend"),$=fe?G!==null?G+"Capture":null:G;fe=[];for(var z=U,I;z!==null;){var Q=z;if(I=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||I===null||$===null||(Q=es(z,$),Q!=null&&fe.push(zs(z,Q,I))),Ie)break;z=z.return}0<fe.length&&(G=new q(G,me,null,s,Z),ee.push({event:G,listeners:fe}))}}if((r&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",G&&s!==Ud&&(me=s.relatedTarget||s.fromElement)&&(Ra(me)||me[Oa]))break e;if((q||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,q?(me=s.relatedTarget||s.toElement,q=U,me=me?Ra(me):null,me!==null&&(Ie=l(me),fe=me.tag,me!==Ie||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(q=null,me=U),q!==me)){if(fe=S2,Q="onMouseLeave",$="onMouseEnter",z="mouse",(i==="pointerout"||i==="pointerover")&&(fe=T2,Q="onPointerLeave",$="onPointerEnter",z="pointer"),Ie=q==null?G:Jr(q),I=me==null?G:Jr(me),G=new fe(Q,z+"leave",q,s,Z),G.target=Ie,G.relatedTarget=I,Q=null,Ra(Z)===U&&(fe=new fe($,z+"enter",me,s,Z),fe.target=I,fe.relatedTarget=Ie,Q=fe),Ie=Q,q&&me)t:{for(fe=q,$=me,z=0,I=fe;I;I=ur(I))z++;for(I=0,Q=$;Q;Q=ur(Q))I++;for(;0<z-I;)fe=ur(fe),z--;for(;0<I-z;)$=ur($),I--;for(;z--;){if(fe===$||$!==null&&fe===$.alternate)break t;fe=ur(fe),$=ur($)}fe=null}else fe=null;q!==null&&hx(ee,G,q,fe,!1),me!==null&&Ie!==null&&hx(ee,Ie,me,fe,!0)}}e:{if(G=U?Jr(U):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var se=k2;else if(O2(G))if(V2)se=c7;else{se=o7;var be=s7}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?U&&Id(U.elementType)&&(se=k2):se=l7;if(se&&(se=se(i,U))){R2(ee,se,s,Z);break e}be&&be(i,G,U),i==="focusout"&&U&&G.type==="number"&&U.memoizedProps.value!=null&&Bd(G,"number",G.value)}switch(be=U?Jr(U):window,i){case"focusin":(O2(be)||be.contentEditable==="true")&&(Ia=be,tu=U,ls=null);break;case"focusout":ls=tu=Ia=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,I2(ee,s,Z);break;case"selectionchange":if(u7)break;case"keydown":case"keyup":I2(ee,s,Z)}var ce;if(Kd)e:{switch(i){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Ba?M2(i,s)&&(pe="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(E2&&s.locale!=="ko"&&(Ba||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ba&&(ce=w2()):(bn=Z,Yd="value"in bn?bn.value:bn.textContent,Ba=!0)),be=zl(U,pe),0<be.length&&(pe=new C2(pe,i,null,s,Z),ee.push({event:pe,listeners:be}),ce?pe.data=ce:(ce=L2(s),ce!==null&&(pe.data=ce)))),(ce=t7?i7(i,s):n7(i,s))&&(pe=zl(U,"onBeforeInput"),0<pe.length&&(be=new C2("onBeforeInput","beforeinput",null,s,Z),ee.push({event:be,listeners:pe}),be.data=ce)),F7(ee,i,U,s,Z)}ux(ee,r)})}function zs(i,r,s){return{instance:i,listener:r,currentTarget:s}}function zl(i,r){for(var s=r+"Capture",c=[];i!==null;){var p=i,x=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||x===null||(p=es(i,s),p!=null&&c.unshift(zs(i,p,x)),p=es(i,r),p!=null&&c.push(zs(i,p,x))),i.tag===3)return c;i=i.return}return[]}function ur(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function hx(i,r,s,c,p){for(var x=r._reactName,C=[];s!==null&&s!==c;){var A=s,H=A.alternate,U=A.stateNode;if(A=A.tag,H!==null&&H===c)break;A!==5&&A!==26&&A!==27||U===null||(H=U,p?(U=es(s,x),U!=null&&C.unshift(zs(s,U,H))):p||(U=es(s,x),U!=null&&C.push(zs(s,U,H)))),s=s.return}C.length!==0&&i.push({event:r,listeners:C})}var K7=/\r\n?/g,Q7=/\u0000|\uFFFD/g;function px(i){return(typeof i=="string"?i:""+i).replace(K7,`
`).replace(Q7,"")}function mx(i,r){return r=px(r),px(i)===r}function Pl(){}function Be(i,r,s,c,p,x){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Pa(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Pa(i,""+c);break;case"className":Uo(i,"class",c);break;case"tabIndex":Uo(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Uo(i,s,c);break;case"style":x2(i,c,x);break;case"data":if(r!=="object"){Uo(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){i.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=qo(""+c),i.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof x=="function"&&(s==="formAction"?(r!=="input"&&Be(i,r,"name",p.name,p,null),Be(i,r,"formEncType",p.formEncType,p,null),Be(i,r,"formMethod",p.formMethod,p,null),Be(i,r,"formTarget",p.formTarget,p,null)):(Be(i,r,"encType",p.encType,p,null),Be(i,r,"method",p.method,p,null),Be(i,r,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=qo(""+c),i.setAttribute(s,c);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}s=qo(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""+c):i.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""):i.removeAttribute(s);break;case"capture":case"download":c===!0?i.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,c):i.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(s,c):i.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(s):i.setAttribute(s,c);break;case"popover":Te("beforetoggle",i),Te("toggle",i),Io(i,"popover",c);break;case"xlinkActuate":Wi(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Wi(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Wi(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Wi(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Wi(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Wi(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Wi(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Io(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=M8.get(s)||s,Io(i,s,c))}}function jf(i,r,s,c,p,x){switch(s){case"style":x2(i,c,x);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=s}}break;case"children":typeof c=="string"?Pa(i,c):(typeof c=="number"||typeof c=="bigint")&&Pa(i,""+c);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!s2.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(p=s.endsWith("Capture"),r=s.slice(2,p?s.length-7:void 0),x=i[Nt]||null,x=x!=null?x[s]:null,typeof x=="function"&&i.removeEventListener(r,x,p),typeof c=="function")){typeof x!="function"&&x!==null&&(s in i?i[s]=null:i.hasAttribute(s)&&i.removeAttribute(s)),i.addEventListener(r,c,p);break e}s in i?i[s]=c:c===!0?i.setAttribute(s,""):Io(i,s,c)}}}function bt(i,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",i),Te("load",i);var c=!1,p=!1,x;for(x in s)if(s.hasOwnProperty(x)){var C=s[x];if(C!=null)switch(x){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Be(i,r,x,C,s,null)}}p&&Be(i,r,"srcSet",s.srcSet,s,null),c&&Be(i,r,"src",s.src,s,null);return;case"input":Te("invalid",i);var A=x=C=p=null,H=null,U=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":p=Z;break;case"type":C=Z;break;case"checked":H=Z;break;case"defaultChecked":U=Z;break;case"value":x=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,r));break;default:Be(i,r,c,Z,s,null)}}h2(i,x,A,H,U,C,p,!1),_o(i);return;case"select":Te("invalid",i),c=C=x=null;for(p in s)if(s.hasOwnProperty(p)&&(A=s[p],A!=null))switch(p){case"value":x=A;break;case"defaultValue":C=A;break;case"multiple":c=A;default:Be(i,r,p,A,s,null)}r=x,s=C,i.multiple=!!c,r!=null?za(i,!!c,r,!1):s!=null&&za(i,!!c,s,!0);return;case"textarea":Te("invalid",i),x=p=c=null;for(C in s)if(s.hasOwnProperty(C)&&(A=s[C],A!=null))switch(C){case"value":c=A;break;case"defaultValue":p=A;break;case"children":x=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Be(i,r,C,A,s,null)}m2(i,c,p,x),_o(i);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(i,r,H,c,s,null)}return;case"dialog":Te("beforetoggle",i),Te("toggle",i),Te("cancel",i),Te("close",i);break;case"iframe":case"object":Te("load",i);break;case"video":case"audio":for(c=0;c<Ds.length;c++)Te(Ds[c],i);break;case"image":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"embed":case"source":case"link":Te("error",i),Te("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(c=s[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Be(i,r,U,c,s,null)}return;default:if(Id(r)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&jf(i,r,Z,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&Be(i,r,A,c,s,null))}function J7(i,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,x=null,C=null,A=null,H=null,U=null,Z=null;for(q in s){var ee=s[q];if(s.hasOwnProperty(q)&&ee!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":H=ee;default:c.hasOwnProperty(q)||Be(i,r,q,null,c,ee)}}for(var G in c){var q=c[G];if(ee=s[G],c.hasOwnProperty(G)&&(q!=null||ee!=null))switch(G){case"type":x=q;break;case"name":p=q;break;case"checked":U=q;break;case"defaultChecked":Z=q;break;case"value":C=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,r));break;default:q!==ee&&Be(i,r,G,q,c,ee)}}$d(i,C,A,H,U,Z,x,p);return;case"select":q=C=A=G=null;for(x in s)if(H=s[x],s.hasOwnProperty(x)&&H!=null)switch(x){case"value":break;case"multiple":q=H;default:c.hasOwnProperty(x)||Be(i,r,x,null,c,H)}for(p in c)if(x=c[p],H=s[p],c.hasOwnProperty(p)&&(x!=null||H!=null))switch(p){case"value":G=x;break;case"defaultValue":A=x;break;case"multiple":C=x;default:x!==H&&Be(i,r,p,x,c,H)}r=A,s=C,c=q,G!=null?za(i,!!s,G,!1):!!c!=!!s&&(r!=null?za(i,!!s,r,!0):za(i,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(A in s)if(p=s[A],s.hasOwnProperty(A)&&p!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(i,r,A,null,c,p)}for(C in c)if(p=c[C],x=s[C],c.hasOwnProperty(C)&&(p!=null||x!=null))switch(C){case"value":G=p;break;case"defaultValue":q=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==x&&Be(i,r,C,p,c,x)}p2(i,G,q);return;case"option":for(var me in s)if(G=s[me],s.hasOwnProperty(me)&&G!=null&&!c.hasOwnProperty(me))switch(me){case"selected":i.selected=!1;break;default:Be(i,r,me,null,c,G)}for(H in c)if(G=c[H],q=s[H],c.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Be(i,r,H,G,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)G=s[fe],s.hasOwnProperty(fe)&&G!=null&&!c.hasOwnProperty(fe)&&Be(i,r,fe,null,c,G);for(U in c)if(G=c[U],q=s[U],c.hasOwnProperty(U)&&G!==q&&(G!=null||q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:Be(i,r,U,G,c,q)}return;default:if(Id(r)){for(var Ie in s)G=s[Ie],s.hasOwnProperty(Ie)&&G!==void 0&&!c.hasOwnProperty(Ie)&&jf(i,r,Ie,void 0,c,G);for(Z in c)G=c[Z],q=s[Z],!c.hasOwnProperty(Z)||G===q||G===void 0&&q===void 0||jf(i,r,Z,G,c,q);return}}for(var $ in s)G=s[$],s.hasOwnProperty($)&&G!=null&&!c.hasOwnProperty($)&&Be(i,r,$,null,c,G);for(ee in c)G=c[ee],q=s[ee],!c.hasOwnProperty(ee)||G===q||G==null&&q==null||Be(i,r,ee,G,c,q)}var Af=null,Mf=null;function Nl(i){return i.nodeType===9?i:i.ownerDocument}function gx(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xx(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Lf(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Of=null;function eb(){var i=window.event;return i&&i.type==="popstate"?i===Of?!1:(Of=i,!0):(Of=null,!1)}var vx=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,yx=typeof Promise=="function"?Promise:void 0,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof yx<"u"?function(i){return yx.resolve(null).then(i).catch(nb)}:vx;function nb(i){setTimeout(function(){throw i})}function Pn(i){return i==="head"}function wx(i,r){var s=r,c=0,p=0;do{var x=s.nextSibling;if(i.removeChild(s),x&&x.nodeType===8)if(s=x.data,s==="/$"){if(0<c&&8>c){s=c;var C=i.ownerDocument;if(s&1&&Ps(C.documentElement),s&2&&Ps(C.body),s&4)for(s=C.head,Ps(s),C=s.firstChild;C;){var A=C.nextSibling,H=C.nodeName;C[Qr]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&C.rel.toLowerCase()==="stylesheet"||s.removeChild(C),C=A}}if(p===0){i.removeChild(x),qs(r);return}p--}else s==="$"||s==="$?"||s==="$!"?p++:c=s.charCodeAt(0)-48;else c=0;s=x}while(s);qs(r)}function Rf(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rf(s),Dd(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}i.removeChild(s)}}function ab(i,r,s,c){for(;i.nodeType===1;){var p=s;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Qr])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(x=i.getAttribute("rel"),x==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(x!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(x=i.getAttribute("src"),(x!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&x&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var x=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===x)return i}else return i;if(i=Ei(i.nextSibling),i===null)break}return null}function rb(i,r,s){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!s||(i=Ei(i.nextSibling),i===null))return null;return i}function kf(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function sb(i,r){var s=i.ownerDocument;if(i.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function Ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Vf=null;function bx(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return i;r--}else s==="/$"&&r++}i=i.previousSibling}return null}function Sx(i,r,s){switch(r=Nl(s),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function Ps(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Dd(i)}var xi=new Map,Cx=new Set;function $l(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var un=W.d;W.d={f:ob,r:lb,D:cb,C:db,L:ub,m:fb,X:pb,S:hb,M:mb};function ob(){var i=un.f(),r=Ol();return i||r}function lb(i){var r=ka(i);r!==null&&r.tag===5&&r.type==="form"?_m(r):un.r(i)}var fr=typeof document>"u"?null:document;function Tx(i,r,s){var c=fr;if(c&&typeof r=="string"&&r){var p=di(r);p='link[rel="'+i+'"][href="'+p+'"]',typeof s=="string"&&(p+='[crossorigin="'+s+'"]'),Cx.has(p)||(Cx.add(p),i={rel:i,crossOrigin:s,href:r},c.querySelector(p)===null&&(r=c.createElement("link"),bt(r,"link",i),ut(r),c.head.appendChild(r)))}}function cb(i){un.D(i),Tx("dns-prefetch",i,null)}function db(i,r){un.C(i,r),Tx("preconnect",i,r)}function ub(i,r,s){un.L(i,r,s);var c=fr;if(c&&i&&r){var p='link[rel="preload"][as="'+di(r)+'"]';r==="image"&&s&&s.imageSrcSet?(p+='[imagesrcset="'+di(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(p+='[imagesizes="'+di(s.imageSizes)+'"]')):p+='[href="'+di(i)+'"]';var x=p;switch(r){case"style":x=hr(i);break;case"script":x=pr(i)}xi.has(x)||(i=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:i,as:r},s),xi.set(x,i),c.querySelector(p)!==null||r==="style"&&c.querySelector(Ns(x))||r==="script"&&c.querySelector($s(x))||(r=c.createElement("link"),bt(r,"link",i),ut(r),c.head.appendChild(r)))}}function fb(i,r){un.m(i,r);var s=fr;if(s&&i){var c=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+di(c)+'"][href="'+di(i)+'"]',x=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":x=pr(i)}if(!xi.has(x)&&(i=g({rel:"modulepreload",href:i},r),xi.set(x,i),s.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($s(x)))return}c=s.createElement("link"),bt(c,"link",i),ut(c),s.head.appendChild(c)}}}function hb(i,r,s){un.S(i,r,s);var c=fr;if(c&&i){var p=Va(c).hoistableStyles,x=hr(i);r=r||"default";var C=p.get(x);if(!C){var A={loading:0,preload:null};if(C=c.querySelector(Ns(x)))A.loading=5;else{i=g({rel:"stylesheet",href:i,"data-precedence":r},s),(s=xi.get(x))&&Hf(i,s);var H=C=c.createElement("link");ut(H),bt(H,"link",i),H._p=new Promise(function(U,Z){H.onload=U,H.onerror=Z}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Bl(C,r,c)}C={type:"stylesheet",instance:C,count:1,state:A},p.set(x,C)}}}function pb(i,r){un.X(i,r);var s=fr;if(s&&i){var c=Va(s).hoistableScripts,p=pr(i),x=c.get(p);x||(x=s.querySelector($s(p)),x||(i=g({src:i,async:!0},r),(r=xi.get(p))&&Df(i,r),x=s.createElement("script"),ut(x),bt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(p,x))}}function mb(i,r){un.M(i,r);var s=fr;if(s&&i){var c=Va(s).hoistableScripts,p=pr(i),x=c.get(p);x||(x=s.querySelector($s(p)),x||(i=g({src:i,async:!0,type:"module"},r),(r=xi.get(p))&&Df(i,r),x=s.createElement("script"),ut(x),bt(x,"link",i),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},c.set(p,x))}}function Ex(i,r,s,c){var p=(p=he.current)?$l(p):null;if(!p)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=hr(s.href),s=Va(p).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){i=hr(s.href);var x=Va(p).hoistableStyles,C=x.get(i);if(C||(p=p.ownerDocument||p,C={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},x.set(i,C),(x=p.querySelector(Ns(i)))&&!x._p&&(C.instance=x,C.state.loading=5),xi.has(i)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xi.set(i,s),x||gb(p,i,s,C.state))),r&&c===null)throw Error(a(528,""));return C}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=pr(s),s=Va(p).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function hr(i){return'href="'+di(i)+'"'}function Ns(i){return'link[rel="stylesheet"]['+i+"]"}function jx(i){return g({},i,{"data-precedence":i.precedence,precedence:null})}function gb(i,r,s,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),bt(r,"link",s),ut(r),i.head.appendChild(r))}function pr(i){return'[src="'+di(i)+'"]'}function $s(i){return"script[async]"+i}function Ax(i,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+di(s.href)+'"]');if(c)return r.instance=c,ut(c),c;var p=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),ut(c),bt(c,"style",p),Bl(c,s.precedence,i),r.instance=c;case"stylesheet":p=hr(s.href);var x=i.querySelector(Ns(p));if(x)return r.state.loading|=4,r.instance=x,ut(x),x;c=jx(s),(p=xi.get(p))&&Hf(c,p),x=(i.ownerDocument||i).createElement("link"),ut(x);var C=x;return C._p=new Promise(function(A,H){C.onload=A,C.onerror=H}),bt(x,"link",c),r.state.loading|=4,Bl(x,s.precedence,i),r.instance=x;case"script":return x=pr(s.src),(p=i.querySelector($s(x)))?(r.instance=p,ut(p),p):(c=s,(p=xi.get(x))&&(c=g({},s),Df(c,p)),i=i.ownerDocument||i,p=i.createElement("script"),ut(p),bt(p,"link",c),i.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,Bl(c,s.precedence,i));return r.instance}function Bl(i,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,x=p,C=0;C<c.length;C++){var A=c[C];if(A.dataset.precedence===r)x=A;else if(x!==p)break}x?x.parentNode.insertBefore(i,x.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(i,r.firstChild))}function Hf(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Df(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Il=null;function Mx(i,r,s){if(Il===null){var c=new Map,p=Il=new Map;p.set(s,c)}else p=Il,c=p.get(s),c||(c=new Map,p.set(s,c));if(c.has(i))return c;for(c.set(i,null),s=s.getElementsByTagName(i),p=0;p<s.length;p++){var x=s[p];if(!(x[Qr]||x[Et]||i==="link"&&x.getAttribute("rel")==="stylesheet")&&x.namespaceURI!=="http://www.w3.org/2000/svg"){var C=x.getAttribute(r)||"";C=i+C;var A=c.get(C);A?A.push(x):c.set(C,[x])}}return c}function Lx(i,r,s){i=i.ownerDocument||i,i.head.insertBefore(s,r==="title"?i.querySelector("head > title"):null)}function xb(i,r,s){if(s===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Ox(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Bs=null;function vb(){}function yb(i,r,s){if(Bs===null)throw Error(a(475));var c=Bs;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=hr(s.href),x=i.querySelector(Ns(p));if(x){i=x._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Ul.bind(c),i.then(c,c)),r.state.loading|=4,r.instance=x,ut(x);return}x=i.ownerDocument||i,s=jx(s),(p=xi.get(p))&&Hf(s,p),x=x.createElement("link"),ut(x);var C=x;C._p=new Promise(function(A,H){C.onload=A,C.onerror=H}),bt(x,"link",s),r.instance=x}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=Ul.bind(c),i.addEventListener("load",r),i.addEventListener("error",r))}}function wb(){if(Bs===null)throw Error(a(475));var i=Bs;return i.stylesheets&&i.count===0&&zf(i,i.stylesheets),0<i.count?function(r){var s=setTimeout(function(){if(i.stylesheets&&zf(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(s)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)zf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var _l=null;function zf(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,_l=new Map,r.forEach(bb,i),_l=null,Ul.call(i))}function bb(i,r){if(!(r.state.loading&4)){var s=_l.get(i);if(s)var c=s.get(null);else{s=new Map,_l.set(i,s);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),x=0;x<p.length;x++){var C=p[x];(C.nodeName==="LINK"||C.getAttribute("media")!=="not all")&&(s.set(C.dataset.precedence,C),c=C)}c&&s.set(null,c)}p=r.instance,C=p.getAttribute("data-precedence"),x=s.get(C)||c,x===c&&s.set(null,p),s.set(C,p),this.count++,c=Ul.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),x?x.parentNode.insertBefore(p,x.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),r.state.loading|=4}}var Is={$$typeof:T,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Sb(i,r,s,c,p,x,C,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.hiddenUpdates=Rd(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=x,this.onRecoverableError=C,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Rx(i,r,s,c,p,x,C,A,H,U,Z,ee){return i=new Sb(i,r,s,C,A,H,U,ee),r=1,x===!0&&(r|=24),x=Qt(3,null,null,r),i.current=x,x.stateNode=i,r=gu(),r.refCount++,i.pooledCache=r,r.refCount++,x.memoizedState={element:c,isDehydrated:s,cache:r},wu(x),i}function kx(i){return i?(i=qa,i):qa}function Vx(i,r,s,c,p,x){p=kx(p),c.context===null?c.context=p:c.pendingContext=p,c=Tn(r),c.payload={element:s},x=x===void 0?null:x,x!==null&&(c.callback=x),s=En(i,c,r),s!==null&&(ni(s,i,r),xs(s,i,r))}function Hx(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<r?s:r}}function Pf(i,r){Hx(i,r),(i=i.alternate)&&Hx(i,r)}function Dx(i){if(i.tag===13){var r=Ga(i,67108864);r!==null&&ni(r,i,67108864),Pf(i,67108864)}}var Gl=!0;function Cb(i,r,s,c){var p=B.T;B.T=null;var x=W.p;try{W.p=2,Nf(i,r,s,c)}finally{W.p=x,B.T=p}}function Tb(i,r,s,c){var p=B.T;B.T=null;var x=W.p;try{W.p=8,Nf(i,r,s,c)}finally{W.p=x,B.T=p}}function Nf(i,r,s,c){if(Gl){var p=$f(c);if(p===null)Ef(i,r,c,ql,s),Px(i,c);else if(jb(p,i,r,s,c))c.stopPropagation();else if(Px(i,c),r&4&&-1<Eb.indexOf(i)){for(;p!==null;){var x=ka(p);if(x!==null)switch(x.tag){case 3:if(x=x.stateNode,x.current.memoizedState.isDehydrated){var C=ea(x.pendingLanes);if(C!==0){var A=x;for(A.pendingLanes|=2,A.entangledLanes|=2;C;){var H=1<<31-Wt(C);A.entanglements[1]|=H,C&=~H}Pi(x),(ze&6)===0&&(Ml=ki()+500,Hs(0))}}break;case 13:A=Ga(x,2),A!==null&&ni(A,x,2),Ol(),Pf(x,2)}if(x=$f(c),x===null&&Ef(i,r,c,ql,s),x===p)break;p=x}p!==null&&c.stopPropagation()}else Ef(i,r,c,null,s)}}function $f(i){return i=_d(i),Bf(i)}var ql=null;function Bf(i){if(ql=null,i=Ra(i),i!==null){var r=l(i);if(r===null)i=null;else{var s=r.tag;if(s===13){if(i=d(r),i!==null)return i;i=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return ql=i,null}function zx(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(d8()){case W1:return 2;case K1:return 8;case Po:case u8:return 32;case Q1:return 268435456;default:return 32}default:return 32}}var If=!1,Nn=null,$n=null,Bn=null,Us=new Map,_s=new Map,In=[],Eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Px(i,r){switch(i){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Us.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(r.pointerId)}}function Gs(i,r,s,c,p,x){return i===null||i.nativeEvent!==x?(i={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},r!==null&&(r=ka(r),r!==null&&Dx(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),i)}function jb(i,r,s,c,p){switch(r){case"focusin":return Nn=Gs(Nn,i,r,s,c,p),!0;case"dragenter":return $n=Gs($n,i,r,s,c,p),!0;case"mouseover":return Bn=Gs(Bn,i,r,s,c,p),!0;case"pointerover":var x=p.pointerId;return Us.set(x,Gs(Us.get(x)||null,i,r,s,c,p)),!0;case"gotpointercapture":return x=p.pointerId,_s.set(x,Gs(_s.get(x)||null,i,r,s,c,p)),!0}return!1}function Nx(i){var r=Ra(i.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){i.blockedOn=r,y8(i.priority,function(){if(s.tag===13){var c=ii();c=kd(c);var p=Ga(s,c);p!==null&&ni(p,s,c),Pf(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Yl(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var s=$f(i.nativeEvent);if(s===null){s=i.nativeEvent;var c=new s.constructor(s.type,s);Ud=c,s.target.dispatchEvent(c),Ud=null}else return r=ka(s),r!==null&&Dx(r),i.blockedOn=s,!1;r.shift()}return!0}function $x(i,r,s){Yl(i)&&s.delete(r)}function Ab(){If=!1,Nn!==null&&Yl(Nn)&&(Nn=null),$n!==null&&Yl($n)&&($n=null),Bn!==null&&Yl(Bn)&&(Bn=null),Us.forEach($x),_s.forEach($x)}function Fl(i,r){i.blockedOn===r&&(i.blockedOn=null,If||(If=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ab)))}var Xl=null;function Bx(i){Xl!==i&&(Xl=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Xl===i&&(Xl=null);for(var r=0;r<i.length;r+=3){var s=i[r],c=i[r+1],p=i[r+2];if(typeof c!="function"){if(Bf(c||s)===null)continue;break}var x=ka(s);x!==null&&(i.splice(r,3),r-=3,$u(x,{pending:!0,data:p,method:s.method,action:c},c,p))}}))}function qs(i){function r(H){return Fl(H,i)}Nn!==null&&Fl(Nn,i),$n!==null&&Fl($n,i),Bn!==null&&Fl(Bn,i),Us.forEach(r),_s.forEach(r);for(var s=0;s<In.length;s++){var c=In[s];c.blockedOn===i&&(c.blockedOn=null)}for(;0<In.length&&(s=In[0],s.blockedOn===null);)Nx(s),s.blockedOn===null&&In.shift();if(s=(i.ownerDocument||i).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var p=s[c],x=s[c+1],C=p[Nt]||null;if(typeof x=="function")C||Bx(s);else if(C){var A=null;if(x&&x.hasAttribute("formAction")){if(p=x,C=x[Nt]||null)A=C.formAction;else if(Bf(p)!==null)continue}else A=C.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),Bx(s)}}}function Uf(i){this._internalRoot=i}Zl.prototype.render=Uf.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=ii();Vx(s,c,i,r,null,null)},Zl.prototype.unmount=Uf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Vx(i.current,2,null,i,null,null),Ol(),r[Oa]=null}};function Zl(i){this._internalRoot=i}Zl.prototype.unstable_scheduleHydration=function(i){if(i){var r=n2();i={blockedOn:null,target:i,priority:r};for(var s=0;s<In.length&&r!==0&&r<In[s].priority;s++);In.splice(s,0,i),s===0&&Nx(i)}};var Ix=t.version;if(Ix!=="19.1.1")throw Error(a(527,Ix,"19.1.1"));W.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=f(r),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var Mb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Zr=Wl.inject(Mb),Zt=Wl}catch{}}return Fs.createRoot=function(i,r){if(!o(i))throw Error(a(299));var s=!1,c="",p=ng,x=ag,C=rg,A=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=Rx(i,1,!1,null,null,s,c,p,x,C,A,null),i[Oa]=r.current,Tf(i),new Uf(r)},Fs.hydrateRoot=function(i,r,s){if(!o(i))throw Error(a(299));var c=!1,p="",x=ng,C=ag,A=rg,H=null,U=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onUncaughtError!==void 0&&(x=s.onUncaughtError),s.onCaughtError!==void 0&&(C=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(U=s.formState)),r=Rx(i,1,!0,r,s??null,c,p,x,C,A,H,U),r.context=kx(null),s=r.current,c=ii(),c=kd(c),p=Tn(c),p.callback=null,En(s,p,c),s=c,r.current.lanes=s,Kr(r,s),Pi(r),i[Oa]=r.current,Tf(i),new Zl(r)},Fs.version="19.1.1",Fs}var Kx;function $b(){if(Kx)return Gf.exports;Kx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Gf.exports=Nb(),Gf.exports}var Bb=$b();const Ib=cd(Bb);var R=ap();const je=cd(R),Qx=Ob({__proto__:null,default:je},[R]);/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Jx="popstate";function Ub(e={}){function t(a,o){let{pathname:l,search:d,hash:u}=a.location;return oh("",{pathname:l,search:d,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:mo(o)}return Gb(t,n,null,e)}function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Li(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _b(){return Math.random().toString(36).substring(2,10)}function e3(e,t){return{usr:e.state,key:e.key,idx:t}}function oh(e,t,n=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ir(t):t,state:n,key:t&&t.key||a||_b()}}function mo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function Gb(e,t,n,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,d=o.history,u="POP",f=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function v(){u="POP";let L=g(),M=L==null?null:L-m;m=L,f&&f({action:u,location:j.location,delta:M})}function y(L,M){u="PUSH";let E=oh(j.location,L,M);m=g()+1;let T=e3(E,m),V=j.createHref(E);try{d.pushState(T,"",V)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(V)}l&&f&&f({action:u,location:j.location,delta:1})}function S(L,M){u="REPLACE";let E=oh(j.location,L,M);m=g();let T=e3(E,m),V=j.createHref(E);d.replaceState(T,"",V),l&&f&&f({action:u,location:j.location,delta:0})}function b(L){return qb(L)}let j={get action(){return u},get location(){return e(o,d)},listen(L){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Jx,v),f=L,()=>{o.removeEventListener(Jx,v),f=null}},createHref(L){return t(o,L)},createURL:b,encodeLocation(L){let M=b(L);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:S,go(L){return d.go(L)}};return j}function qb(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:mo(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Hy(e,t,n="/"){return Yb(e,t,n,!1)}function Yb(e,t,n,a){let o=typeof t=="string"?Ir(t):t,l=gn(o.pathname||"/",n);if(l==null)return null;let d=Dy(e);Fb(d);let u=null;for(let f=0;u==null&&f<d.length;++f){let m=a9(l);u=i9(d[f],m,a)}return u}function Dy(e,t=[],n=[],a=""){let o=(l,d,u)=>{let f={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};f.relativePath.startsWith("/")&&(Ye(f.relativePath.startsWith(a),`Absolute route path "${f.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(a.length));let m=mn([a,f.relativePath]),g=n.concat(f);l.children&&l.children.length>0&&(Ye(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Dy(l.children,t,g,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:e9(m,l.index),routesMeta:g})};return e.forEach((l,d)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,d);else for(let f of zy(l.path))o(l,d,f)}),t}function zy(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let d=zy(a.join("/")),u=[];return u.push(...d.map(f=>f===""?l:[l,f].join("/"))),o&&u.push(...d),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function Fb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t9(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var Xb=/^:[\w-]+$/,Zb=3,Wb=2,Kb=1,Qb=10,Jb=-2,t3=e=>e==="*";function e9(e,t){let n=e.split("/"),a=n.length;return n.some(t3)&&(a+=Jb),t&&(a+=Wb),n.filter(o=>!t3(o)).reduce((o,l)=>o+(Xb.test(l)?Zb:l===""?Kb:Qb),a)}function t9(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function i9(e,t,n=!1){let{routesMeta:a}=e,o={},l="/",d=[];for(let u=0;u<a.length;++u){let f=a[u],m=u===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",v=zc({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},g),y=f.route;if(!v&&m&&n&&!a[a.length-1].route.index&&(v=zc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!v)return null;Object.assign(o,v.params),d.push({params:o,pathname:mn([l,v.pathname]),pathnameBase:l9(mn([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=mn([l,v.pathnameBase]))}return d}function zc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=n9(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=u[y]||"";d=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const S=u[y];return v&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:d,pattern:e}}function n9(e,t=!1,n=!0){Li(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,u,f)=>(a.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function a9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function r9(e,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof e=="string"?Ir(e):e;return{pathname:n?n.startsWith("/")?n:s9(n,t):t,search:c9(a),hash:d9(o)}}function s9(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zf(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rp(e){let t=o9(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function sp(e,t,n,a=!1){let o;typeof e=="string"?o=Ir(e):(o={...e},Ye(!o.pathname||!o.pathname.includes("?"),Zf("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Zf("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Zf("#","search","hash",o)));let l=e===""||o.pathname==="",d=l?"/":o.pathname,u;if(d==null)u=n;else{let v=t.length-1;if(!a&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}u=v>=0?t[v]:"/"}let f=r9(o,u),m=d&&d!=="/"&&d.endsWith("/"),g=(l||d===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||g)&&(f.pathname+="/"),f}var mn=e=>e.join("/").replace(/\/\/+/g,"/"),l9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,d9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function u9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Py=["POST","PUT","PATCH","DELETE"];new Set(Py);var f9=["GET",...Py];new Set(f9);var Ur=R.createContext(null);Ur.displayName="DataRouter";var dd=R.createContext(null);dd.displayName="DataRouterState";R.createContext(!1);var Ny=R.createContext({isTransitioning:!1});Ny.displayName="ViewTransition";var h9=R.createContext(new Map);h9.displayName="Fetchers";var p9=R.createContext(null);p9.displayName="Await";var Ri=R.createContext(null);Ri.displayName="Navigation";var Mo=R.createContext(null);Mo.displayName="Location";var bi=R.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var op=R.createContext(null);op.displayName="RouteError";function m9(e,{relative:t}={}){Ye(_r(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=R.useContext(Ri),{hash:o,pathname:l,search:d}=Lo(e,{relative:t}),u=l;return n!=="/"&&(u=l==="/"?n:mn([n,l])),a.createHref({pathname:u,search:d,hash:o})}function _r(){return R.useContext(Mo)!=null}function Si(){return Ye(_r(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Mo).location}var $y="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function By(e){R.useContext(Ri).static||R.useLayoutEffect(e)}function lp(){let{isDataRoute:e}=R.useContext(bi);return e?R9():g9()}function g9(){Ye(_r(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Ur),{basename:t,navigator:n}=R.useContext(Ri),{matches:a}=R.useContext(bi),{pathname:o}=Si(),l=JSON.stringify(rp(a)),d=R.useRef(!1);return By(()=>{d.current=!0}),R.useCallback((f,m={})=>{if(Li(d.current,$y),!d.current)return;if(typeof f=="number"){n.go(f);return}let g=sp(f,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:mn([t,g.pathname])),(m.replace?n.replace:n.push)(g,m.state,m)},[t,n,l,o,e])}var x9=R.createContext(null);function v9(e){let t=R.useContext(bi).outlet;return t&&R.createElement(x9.Provider,{value:e},t)}function y9(){let{matches:e}=R.useContext(bi),t=e[e.length-1];return t?t.params:{}}function Lo(e,{relative:t}={}){let{matches:n}=R.useContext(bi),{pathname:a}=Si(),o=JSON.stringify(rp(n));return R.useMemo(()=>sp(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function w9(e,t){return Iy(e,t)}function Iy(e,t,n,a){var M;Ye(_r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(Ri),{matches:l}=R.useContext(bi),d=l[l.length-1],u=d?d.params:{},f=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let E=g&&g.path||"";Uy(f,!g||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let v=Si(),y;if(t){let E=typeof t=="string"?Ir(t):t;Ye(m==="/"||((M=E.pathname)==null?void 0:M.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${E.pathname}" was given in the \`location\` prop.`),y=E}else y=v;let S=y.pathname||"/",b=S;if(m!=="/"){let E=m.replace(/^\//,"").split("/");b="/"+S.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=Hy(e,{pathname:b});Li(g||j!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Li(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=E9(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},u,E.params),pathname:mn([m,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?m:mn([m,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,n,a);return t&&L?R.createElement(Mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},L):L}function b9(){let e=O9(),t=u9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:o},n):null,d)}var S9=R.createElement(b9,null),C9=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?R.createElement(bi.Provider,{value:this.props.routeContext},R.createElement(op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function T9({routeContext:e,match:t,children:n}){let a=R.useContext(Ur);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(bi.Provider,{value:e},n)}function E9(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=n==null?void 0:n.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);Ye(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let d=!1,u=-1;if(n)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:v}=n,y=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||y){d=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let v,y=!1,S=null,b=null;n&&(v=l&&m.route.id?l[m.route.id]:void 0,S=m.route.errorElement||S9,d&&(u<0&&g===0?(Uy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):u===g&&(y=!0,b=m.route.hydrateFallbackElement||null)));let j=t.concat(o.slice(0,g+1)),L=()=>{let M;return v?M=S:y?M=b:m.route.Component?M=R.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=f,R.createElement(T9,{match:m,routeContext:{outlet:f,matches:j,isDataRoute:n!=null},children:M})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?R.createElement(C9,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):L()},null)}function cp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j9(e){let t=R.useContext(Ur);return Ye(t,cp(e)),t}function A9(e){let t=R.useContext(dd);return Ye(t,cp(e)),t}function M9(e){let t=R.useContext(bi);return Ye(t,cp(e)),t}function dp(e){let t=M9(e),n=t.matches[t.matches.length-1];return Ye(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function L9(){return dp("useRouteId")}function O9(){var a;let e=R.useContext(op),t=A9("useRouteError"),n=dp("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function R9(){let{router:e}=j9("useNavigate"),t=dp("useNavigate"),n=R.useRef(!1);return By(()=>{n.current=!0}),R.useCallback(async(o,l={})=>{Li(n.current,$y),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var i3={};function Uy(e,t,n){!t&&!i3[e]&&(i3[e]=!0,Li(!1,n))}R.memo(k9);function k9({routes:e,future:t,state:n}){return Iy(e,void 0,n,t)}function V9({to:e,replace:t,state:n,relative:a}){Ye(_r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=R.useContext(Ri);Li(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(bi),{pathname:d}=Si(),u=lp(),f=sp(e,rp(l),d,a==="path"),m=JSON.stringify(f);return R.useEffect(()=>{u(JSON.parse(m),{replace:t,state:n,relative:a})},[u,m,a,t,n]),null}function H9(e){return v9(e.context)}function mt(e){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function D9({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:l=!1}){Ye(!_r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:d,navigator:o,static:l,future:{}}),[d,o,l]);typeof n=="string"&&(n=Ir(n));let{pathname:f="/",search:m="",hash:g="",state:v=null,key:y="default"}=n,S=R.useMemo(()=>{let b=gn(f,d);return b==null?null:{location:{pathname:b,search:m,hash:g,state:v,key:y},navigationType:a}},[d,f,m,g,v,y,a]);return Li(S!=null,`<Router basename="${d}"> is not able to match the URL "${f}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(Ri.Provider,{value:u},R.createElement(Mo.Provider,{children:t,value:S}))}function z9({children:e,location:t}){return w9(lh(e),t)}function lh(e,t=[]){let n=[];return R.Children.forEach(e,(a,o)=>{if(!R.isValidElement(a))return;let l=[...t,o];if(a.type===R.Fragment){n.push.apply(n,lh(a.props.children,l));return}Ye(a.type===mt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=lh(a.props.children,l)),n.push(d)}),n}var yc="get",wc="application/x-www-form-urlencoded";function ud(e){return e!=null&&typeof e.tagName=="string"}function P9(e){return ud(e)&&e.tagName.toLowerCase()==="button"}function N9(e){return ud(e)&&e.tagName.toLowerCase()==="form"}function $9(e){return ud(e)&&e.tagName.toLowerCase()==="input"}function B9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I9(e,t){return e.button===0&&(!t||t==="_self")&&!B9(e)}var Kl=null;function U9(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var _9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wf(e){return e!=null&&!_9.has(e)?(Li(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wc}"`),null):e}function G9(e,t){let n,a,o,l,d;if(N9(e)){let u=e.getAttribute("action");a=u?gn(u,t):null,n=e.getAttribute("method")||yc,o=Wf(e.getAttribute("enctype"))||wc,l=new FormData(e)}else if(P9(e)||$9(e)&&(e.type==="submit"||e.type==="image")){let u=e.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||u.getAttribute("action");if(a=f?gn(f,t):null,n=e.getAttribute("formmethod")||u.getAttribute("method")||yc,o=Wf(e.getAttribute("formenctype"))||Wf(u.getAttribute("enctype"))||wc,l=new FormData(u,e),!U9()){let{name:m,type:g,value:v}=e;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,v)}}else{if(ud(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yc,a=null,o=wc,d=e}return l&&o==="text/plain"&&(d=l,l=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:l,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function up(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function q9(e,t,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&gn(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function Y9(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function F9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function X9(e,t,n){let a=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let d=await Y9(l,n);return d.links?d.links():[]}return[]}));return Q9(a.flat(1).filter(F9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function n3(e,t,n,a,o,l){let d=(f,m)=>n[m]?f.route.id!==n[m].route.id:!0,u=(f,m)=>{var g;return n[m].pathname!==f.pathname||((g=n[m].route.path)==null?void 0:g.endsWith("*"))&&n[m].params["*"]!==f.params["*"]};return l==="assets"?t.filter((f,m)=>d(f,m)||u(f,m)):l==="data"?t.filter((f,m)=>{var v;let g=a.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(d(f,m)||u(f,m))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Z9(e,t,{includeHydrateFallback:n}={}){return W9(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function W9(e){return[...new Set(e)]}function K9(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function Q9(e,t){let n=new Set;return new Set(t),e.reduce((a,o)=>{let l=JSON.stringify(K9(o));return n.has(l)||(n.add(l),a.push({key:l,link:o})),a},[])}function _y(){let e=R.useContext(Ur);return up(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function J9(){let e=R.useContext(dd);return up(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var fp=R.createContext(void 0);fp.displayName="FrameworkContext";function Gy(){let e=R.useContext(fp);return up(e,"You must render this element inside a <HydratedRouter> element"),e}function eS(e,t){let n=R.useContext(fp),[a,o]=R.useState(!1),[l,d]=R.useState(!1),{onFocus:u,onBlur:f,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=t,y=R.useRef(null);R.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let j=M=>{M.forEach(E=>{d(E.isIntersecting)})},L=new IntersectionObserver(j,{threshold:.5});return y.current&&L.observe(y.current),()=>{L.disconnect()}}},[e]),R.useEffect(()=>{if(a){let j=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(j)}}},[a]);let S=()=>{o(!0)},b=()=>{o(!1),d(!1)};return n?e!=="intent"?[l,y,{}]:[l,y,{onFocus:Xs(u,S),onBlur:Xs(f,b),onMouseEnter:Xs(m,S),onMouseLeave:Xs(g,b),onTouchStart:Xs(v,S)}]:[!1,y,{}]}function Xs(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function tS({page:e,...t}){let{router:n}=_y(),a=R.useMemo(()=>Hy(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?R.createElement(nS,{page:e,matches:a,...t}):null}function iS(e){let{manifest:t,routeModules:n}=Gy(),[a,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return X9(e,t,n).then(d=>{l||o(d)}),()=>{l=!0}},[e,t,n]),a}function nS({page:e,matches:t,...n}){let a=Si(),{manifest:o,routeModules:l}=Gy(),{basename:d}=_y(),{loaderData:u,matches:f}=J9(),m=R.useMemo(()=>n3(e,t,f,o,a,"data"),[e,t,f,o,a]),g=R.useMemo(()=>n3(e,t,f,o,a,"assets"),[e,t,f,o,a]),v=R.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let b=new Set,j=!1;if(t.forEach(M=>{var T;let E=o.routes[M.route.id];!E||!E.hasLoader||(!m.some(V=>V.route.id===M.route.id)&&M.route.id in u&&((T=l[M.route.id])!=null&&T.shouldRevalidate)||E.hasClientLoader?j=!0:b.add(M.route.id))}),b.size===0)return[];let L=q9(e,d,"data");return j&&b.size>0&&L.searchParams.set("_routes",t.filter(M=>b.has(M.route.id)).map(M=>M.route.id).join(",")),[L.pathname+L.search]},[d,u,a,o,m,t,e,l]),y=R.useMemo(()=>Z9(g,o),[g,o]),S=iS(g);return R.createElement(R.Fragment,null,v.map(b=>R.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),y.map(b=>R.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),S.map(({key:b,link:j})=>R.createElement("link",{key:b,nonce:n.nonce,...j})))}function aS(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var qy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qy&&(window.__reactRouterVersion="7.8.0")}catch{}function rS({basename:e,children:t,window:n}){let a=R.useRef();a.current==null&&(a.current=Ub({window:n,v5Compat:!0}));let o=a.current,[l,d]=R.useState({action:o.action,location:o.location}),u=R.useCallback(f=>{R.startTransition(()=>d(f))},[d]);return R.useLayoutEffect(()=>o.listen(u),[o,u]),R.createElement(D9,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fy=R.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:l,replace:d,state:u,target:f,to:m,preventScrollReset:g,viewTransition:v,...y},S){let{basename:b}=R.useContext(Ri),j=typeof m=="string"&&Yy.test(m),L,M=!1;if(typeof m=="string"&&j&&(L=m,qy))try{let Y=new URL(window.location.href),F=m.startsWith("//")?new URL(Y.protocol+m):new URL(m),K=gn(F.pathname,b);F.origin===Y.origin&&K!=null?m=K+F.search+F.hash:M=!0}catch{Li(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=m9(m,{relative:o}),[T,V,O]=eS(a,y),N=lS(m,{replace:d,state:u,target:f,preventScrollReset:g,relative:o,viewTransition:v});function P(Y){t&&t(Y),Y.defaultPrevented||N(Y)}let _=R.createElement("a",{...y,...O,href:L||E,onClick:M||l?t:P,ref:aS(S,V),target:f,"data-discover":!j&&n==="render"?"true":void 0});return T&&!j?R.createElement(R.Fragment,null,_,R.createElement(tS,{page:E})):_});Fy.displayName="Link";var Ct=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:l,to:d,viewTransition:u,children:f,...m},g){let v=Lo(d,{relative:m.relative}),y=Si(),S=R.useContext(dd),{navigator:b,basename:j}=R.useContext(Ri),L=S!=null&&hS(v)&&u===!0,M=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,E=y.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(E=E.toLowerCase(),T=T?T.toLowerCase():null,M=M.toLowerCase()),T&&j&&(T=gn(T,j)||T);const V=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let O=E===M||!o&&E.startsWith(M)&&E.charAt(V)==="/",N=T!=null&&(T===M||!o&&T.startsWith(M)&&T.charAt(M.length)==="/"),P={isActive:O,isPending:N,isTransitioning:L},_=O?t:void 0,Y;typeof a=="function"?Y=a(P):Y=[a,O?"active":null,N?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let F=typeof l=="function"?l(P):l;return R.createElement(Fy,{...m,"aria-current":_,className:Y,ref:g,style:F,to:d,viewTransition:u},typeof f=="function"?f(P):f)});Ct.displayName="NavLink";var sS=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:l,method:d=yc,action:u,onSubmit:f,relative:m,preventScrollReset:g,viewTransition:v,...y},S)=>{let b=uS(),j=fS(u,{relative:m}),L=d.toLowerCase()==="get"?"get":"post",M=typeof u=="string"&&Yy.test(u),E=T=>{if(f&&f(T),T.defaultPrevented)return;T.preventDefault();let V=T.nativeEvent.submitter,O=(V==null?void 0:V.getAttribute("formmethod"))||d;b(V||T.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:v})};return R.createElement("form",{ref:S,method:L,action:j,onSubmit:a?f:E,...y,"data-discover":!M&&e==="render"?"true":void 0})});sS.displayName="Form";function oS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xy(e){let t=R.useContext(Ur);return Ye(t,oS(e)),t}function lS(e,{target:t,replace:n,state:a,preventScrollReset:o,relative:l,viewTransition:d}={}){let u=lp(),f=Si(),m=Lo(e,{relative:l});return R.useCallback(g=>{if(I9(g,t)){g.preventDefault();let v=n!==void 0?n:mo(f)===mo(m);u(e,{replace:v,state:a,preventScrollReset:o,relative:l,viewTransition:d})}},[f,u,m,n,a,t,e,o,l,d])}var cS=0,dS=()=>`__${String(++cS)}__`;function uS(){let{router:e}=Xy("useSubmit"),{basename:t}=R.useContext(Ri),n=L9();return R.useCallback(async(a,o={})=>{let{action:l,method:d,encType:u,formData:f,body:m}=G9(a,t);if(o.navigate===!1){let g=o.fetcherKey||dS();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||d,formEncType:o.encType||u,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||d,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function fS(e,{relative:t}={}){let{basename:n}=R.useContext(Ri),a=R.useContext(bi);Ye(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...Lo(e||".",{relative:t})},d=Si();if(e==null){l.search=d.search;let u=new URLSearchParams(l.search),f=u.getAll("index");if(f.some(g=>g==="")){u.delete("index"),f.filter(v=>v).forEach(v=>u.append("index",v));let g=u.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:mn([n,l.pathname])),mo(l)}function hS(e,{relative:t}={}){let n=R.useContext(Ny);Ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Xy("useViewTransitionState"),o=Lo(e,{relative:t});if(!n.isTransitioning)return!1;let l=gn(n.currentLocation.pathname,a)||n.currentLocation.pathname,d=gn(n.nextLocation.pathname,a)||n.nextLocation.pathname;return zc(o.pathname,d)!=null||zc(o.pathname,l)!=null}function pS(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function mS(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var gS=function(){function e(n){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mS(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=pS(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),Mt="-ms-",Pc="-moz-",Le="-webkit-",Zy="comm",hp="rule",pp="decl",xS="@import",Wy="@keyframes",vS="@layer",yS=Math.abs,fd=String.fromCharCode,wS=Object.assign;function bS(e,t){return St(e,0)^45?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}function Ky(e){return e.trim()}function SS(e,t){return(e=t.exec(e))?e[0]:e}function Oe(e,t,n){return e.replace(t,n)}function ch(e,t){return e.indexOf(t)}function St(e,t){return e.charCodeAt(t)|0}function go(e,t,n){return e.slice(t,n)}function Ni(e){return e.length}function mp(e){return e.length}function Ql(e,t){return t.push(e),e}function CS(e,t){return e.map(t).join("")}var hd=1,Rr=1,Qy=0,Xt=0,rt=0,Gr="";function pd(e,t,n,a,o,l,d){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:hd,column:Rr,length:d,return:""}}function Zs(e,t){return wS(pd("",null,null,"",null,null,0),e,{length:-e.length},t)}function TS(){return rt}function ES(){return rt=Xt>0?St(Gr,--Xt):0,Rr--,rt===10&&(Rr=1,hd--),rt}function si(){return rt=Xt<Qy?St(Gr,Xt++):0,Rr++,rt===10&&(Rr=1,hd++),rt}function _i(){return St(Gr,Xt)}function bc(){return Xt}function Oo(e,t){return go(Gr,e,t)}function xo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jy(e){return hd=Rr=1,Qy=Ni(Gr=e),Xt=0,[]}function e5(e){return Gr="",e}function Sc(e){return Ky(Oo(Xt-1,dh(e===91?e+2:e===40?e+1:e)))}function jS(e){for(;(rt=_i())&&rt<33;)si();return xo(e)>2||xo(rt)>3?"":" "}function AS(e,t){for(;--t&&si()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Oo(e,bc()+(t<6&&_i()==32&&si()==32))}function dh(e){for(;si();)switch(rt){case e:return Xt;case 34:case 39:e!==34&&e!==39&&dh(rt);break;case 40:e===41&&dh(e);break;case 92:si();break}return Xt}function MS(e,t){for(;si()&&e+rt!==57;)if(e+rt===84&&_i()===47)break;return"/*"+Oo(t,Xt-1)+"*"+fd(e===47?e:si())}function LS(e){for(;!xo(_i());)si();return Oo(e,Xt)}function OS(e){return e5(Cc("",null,null,null,[""],e=Jy(e),0,[0],e))}function Cc(e,t,n,a,o,l,d,u,f){for(var m=0,g=0,v=d,y=0,S=0,b=0,j=1,L=1,M=1,E=0,T="",V=o,O=l,N=a,P=T;L;)switch(b=E,E=si()){case 40:if(b!=108&&St(P,v-1)==58){ch(P+=Oe(Sc(E),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:P+=Sc(E);break;case 9:case 10:case 13:case 32:P+=jS(b);break;case 92:P+=AS(bc()-1,7);continue;case 47:switch(_i()){case 42:case 47:Ql(RS(MS(si(),bc()),t,n),f);break;default:P+="/"}break;case 123*j:u[m++]=Ni(P)*M;case 125*j:case 59:case 0:switch(E){case 0:case 125:L=0;case 59+g:M==-1&&(P=Oe(P,/\f/g,"")),S>0&&Ni(P)-v&&Ql(S>32?r3(P+";",a,n,v-1):r3(Oe(P," ","")+";",a,n,v-2),f);break;case 59:P+=";";default:if(Ql(N=a3(P,t,n,m,g,o,u,T,V=[],O=[],v),l),E===123)if(g===0)Cc(P,t,N,N,V,l,v,u,O);else switch(y===99&&St(P,3)===110?100:y){case 100:case 108:case 109:case 115:Cc(e,N,N,a&&Ql(a3(e,N,N,0,0,o,u,T,o,V=[],v),O),o,O,v,u,a?V:O);break;default:Cc(P,N,N,N,[""],O,0,u,O)}}m=g=S=0,j=M=1,T=P="",v=d;break;case 58:v=1+Ni(P),S=b;default:if(j<1){if(E==123)--j;else if(E==125&&j++==0&&ES()==125)continue}switch(P+=fd(E),E*j){case 38:M=g>0?1:(P+="\f",-1);break;case 44:u[m++]=(Ni(P)-1)*M,M=1;break;case 64:_i()===45&&(P+=Sc(si())),y=_i(),g=v=Ni(T=P+=LS(bc())),E++;break;case 45:b===45&&Ni(P)==2&&(j=0)}}return l}function a3(e,t,n,a,o,l,d,u,f,m,g){for(var v=o-1,y=o===0?l:[""],S=mp(y),b=0,j=0,L=0;b<a;++b)for(var M=0,E=go(e,v+1,v=yS(j=d[b])),T=e;M<S;++M)(T=Ky(j>0?y[M]+" "+E:Oe(E,/&\f/g,y[M])))&&(f[L++]=T);return pd(e,t,n,o===0?hp:u,f,m,g)}function RS(e,t,n){return pd(e,t,n,Zy,fd(TS()),go(e,2,-2),0)}function r3(e,t,n,a){return pd(e,t,n,pp,go(e,0,a),go(e,a+1,-1),a)}function Mr(e,t){for(var n="",a=mp(e),o=0;o<a;o++)n+=t(e[o],o,e,t)||"";return n}function kS(e,t,n,a){switch(e.type){case vS:if(e.children.length)break;case xS:case pp:return e.return=e.return||e.value;case Zy:return"";case Wy:return e.return=e.value+"{"+Mr(e.children,a)+"}";case hp:e.value=e.props.join(",")}return Ni(n=Mr(e.children,a))?e.return=e.value+"{"+n+"}":""}function VS(e){var t=mp(e);return function(n,a,o,l){for(var d="",u=0;u<t;u++)d+=e[u](n,a,o,l)||"";return d}}function HS(e){return function(t){t.root||(t=t.return)&&e(t)}}function DS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var zS=function(t,n,a){for(var o=0,l=0;o=l,l=_i(),o===38&&l===12&&(n[a]=1),!xo(l);)si();return Oo(t,Xt)},PS=function(t,n){var a=-1,o=44;do switch(xo(o)){case 0:o===38&&_i()===12&&(n[a]=1),t[a]+=zS(Xt-1,n,a);break;case 2:t[a]+=Sc(o);break;case 4:if(o===44){t[++a]=_i()===58?"&\f":"",n[a]=t[a].length;break}default:t[a]+=fd(o)}while(o=si());return t},NS=function(t,n){return e5(PS(Jy(t),n))},s3=new WeakMap,$S=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!s3.get(a))&&!o){s3.set(t,!0);for(var l=[],d=NS(n,l),u=a.props,f=0,m=0;f<d.length;f++)for(var g=0;g<u.length;g++,m++)t.props[m]=l[f]?d[f].replace(/&\f/g,u[g]):u[g]+" "+d[f]}}},BS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function t5(e,t){switch(bS(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+Pc+e+Mt+e+e;case 6828:case 4268:return Le+e+Mt+e+e;case 6165:return Le+e+Mt+"flex-"+e+e;case 5187:return Le+e+Oe(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Mt+"flex-$1$2")+e;case 5443:return Le+e+Mt+"flex-item-"+Oe(e,/flex-|-self/,"")+e;case 4675:return Le+e+Mt+"flex-line-pack"+Oe(e,/align-content|flex-|-self/,"")+e;case 5548:return Le+e+Mt+Oe(e,"shrink","negative")+e;case 5292:return Le+e+Mt+Oe(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+Oe(e,"-grow","")+Le+e+Mt+Oe(e,"grow","positive")+e;case 4554:return Le+Oe(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return Oe(Oe(Oe(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return Oe(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return Oe(Oe(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4095:case 3583:case 4068:case 2532:return Oe(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ni(e)-1-t>6)switch(St(e,t+1)){case 109:if(St(e,t+4)!==45)break;case 102:return Oe(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+Pc+(St(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ch(e,"stretch")?t5(Oe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(St(e,t+1)!==115)break;case 6444:switch(St(e,Ni(e)-3-(~ch(e,"!important")&&10))){case 107:return Oe(e,":",":"+Le)+e;case 101:return Oe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Le+(St(e,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Mt+"$2box$3")+e}break;case 5936:switch(St(e,t+11)){case 114:return Le+e+Mt+Oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+Mt+Oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+Mt+Oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Le+e+Mt+e+e}return e}var IS=function(t,n,a,o){if(t.length>-1&&!t.return)switch(t.type){case pp:t.return=t5(t.value,t.length);break;case Wy:return Mr([Zs(t,{value:Oe(t.value,"@","@"+Le)})],o);case hp:if(t.length)return CS(t.props,function(l){switch(SS(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mr([Zs(t,{props:[Oe(l,/:(read-\w+)/,":"+Pc+"$1")]})],o);case"::placeholder":return Mr([Zs(t,{props:[Oe(l,/:(plac\w+)/,":"+Le+"input-$1")]}),Zs(t,{props:[Oe(l,/:(plac\w+)/,":"+Pc+"$1")]}),Zs(t,{props:[Oe(l,/:(plac\w+)/,Mt+"input-$1")]})],o)}return""})}},US=[IS],_S=function(t){var n=t.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(j){var L=j.getAttribute("data-emotion");L.indexOf(" ")!==-1&&(document.head.appendChild(j),j.setAttribute("data-s",""))})}var o=t.stylisPlugins||US,l={},d,u=[];d=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(j){for(var L=j.getAttribute("data-emotion").split(" "),M=1;M<L.length;M++)l[L[M]]=!0;u.push(j)});var f,m=[$S,BS];{var g,v=[kS,HS(function(j){g.insert(j)})],y=VS(m.concat(o,v)),S=function(L){return Mr(OS(L),y)};f=function(L,M,E,T){g=E,S(L?L+"{"+M.styles+"}":M.styles),T&&(b.inserted[M.name]=!0)}}var b={key:n,sheet:new gS({key:n,container:d,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:f};return b.sheet.hydrate(u),b},Kf={exports:{}},He={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o3;function GS(){if(o3)return He;o3=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,L=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,E=e?Symbol.for("react.scope"):60119;function T(O){if(typeof O=="object"&&O!==null){var N=O.$$typeof;switch(N){case t:switch(O=O.type,O){case f:case m:case a:case l:case o:case v:return O;default:switch(O=O&&O.$$typeof,O){case u:case g:case b:case S:case d:return O;default:return N}}case n:return N}}}function V(O){return T(O)===m}return He.AsyncMode=f,He.ConcurrentMode=m,He.ContextConsumer=u,He.ContextProvider=d,He.Element=t,He.ForwardRef=g,He.Fragment=a,He.Lazy=b,He.Memo=S,He.Portal=n,He.Profiler=l,He.StrictMode=o,He.Suspense=v,He.isAsyncMode=function(O){return V(O)||T(O)===f},He.isConcurrentMode=V,He.isContextConsumer=function(O){return T(O)===u},He.isContextProvider=function(O){return T(O)===d},He.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===t},He.isForwardRef=function(O){return T(O)===g},He.isFragment=function(O){return T(O)===a},He.isLazy=function(O){return T(O)===b},He.isMemo=function(O){return T(O)===S},He.isPortal=function(O){return T(O)===n},He.isProfiler=function(O){return T(O)===l},He.isStrictMode=function(O){return T(O)===o},He.isSuspense=function(O){return T(O)===v},He.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===m||O===l||O===o||O===v||O===y||typeof O=="object"&&O!==null&&(O.$$typeof===b||O.$$typeof===S||O.$$typeof===d||O.$$typeof===u||O.$$typeof===g||O.$$typeof===L||O.$$typeof===M||O.$$typeof===E||O.$$typeof===j)},He.typeOf=T,He}var l3;function qS(){return l3||(l3=1,Kf.exports=GS()),Kf.exports}var Qf,c3;function YS(){if(c3)return Qf;c3=1;var e=qS(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=o;function d(b){return e.isMemo(b)?o:l[b.$$typeof]||t}var u=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Object.prototype;function S(b,j,L){if(typeof j!="string"){if(y){var M=v(j);M&&M!==y&&S(b,M,L)}var E=f(j);m&&(E=E.concat(m(j)));for(var T=d(b),V=d(j),O=0;O<E.length;++O){var N=E[O];if(!n[N]&&!(L&&L[N])&&!(V&&V[N])&&!(T&&T[N])){var P=g(j,N);try{u(b,N,P)}catch{}}}}return b}return Qf=S,Qf}YS();var FS=!0;function XS(e,t,n){var a="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var i5=function(t,n,a){var o=t.key+"-"+n.name;(a===!1||FS===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},n5=function(t,n,a){i5(t,n,a);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function ZS(e){for(var t=0,n,a=0,o=e.length;o>=4;++a,o-=4)n=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var WS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},KS=/[A-Z]|^ms/g,QS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a5=function(t){return t.charCodeAt(1)===45},d3=function(t){return t!=null&&typeof t!="boolean"},Jf=DS(function(e){return a5(e)?e:e.replace(KS,"-$&").toLowerCase()}),u3=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(QS,function(a,o,l){return $i={name:o,styles:l,next:$i},o})}return WS[t]!==1&&!a5(t)&&typeof n=="number"&&n!==0?n+"px":n};function vo(e,t,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return $i={name:o.name,styles:o.styles,next:$i},o.name;var l=n;if(l.styles!==void 0){var d=l.next;if(d!==void 0)for(;d!==void 0;)$i={name:d.name,styles:d.styles,next:$i},d=d.next;var u=l.styles+";";return u}return JS(e,t,n)}case"function":{if(e!==void 0){var f=$i,m=n(e);return $i=f,vo(e,t,m)}break}}var g=n;return g}function JS(e,t,n){var a="";if(Array.isArray(n))for(var o=0;o<n.length;o++)a+=vo(e,t,n[o])+";";else for(var l in n){var d=n[l];if(typeof d!="object"){var u=d;d3(u)&&(a+=Jf(l)+":"+u3(l,u)+";")}else if(Array.isArray(d)&&typeof d[0]=="string"&&t==null)for(var f=0;f<d.length;f++)d3(d[f])&&(a+=Jf(l)+":"+u3(l,d[f])+";");else{var m=vo(e,t,d);switch(l){case"animation":case"animationName":{a+=Jf(l)+":"+m+";";break}default:a+=l+"{"+m+"}"}}}return a}var f3=/label:\s*([^\s;{]+)\s*(;|$)/g,$i;function gp(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";$i=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,o+=vo(n,t,l);else{var d=l;o+=d[0]}for(var u=1;u<e.length;u++)if(o+=vo(n,t,e[u]),a){var f=l;o+=f[u]}f3.lastIndex=0;for(var m="",g;(g=f3.exec(o))!==null;)m+="-"+g[1];var v=ZS(o)+m;return{name:v,styles:o,next:$i}}var eC=function(t){return t()},r5=Qx.useInsertionEffect?Qx.useInsertionEffect:!1,tC=r5||eC,h3=r5||R.useLayoutEffect,s5=R.createContext(typeof HTMLElement<"u"?_S({key:"css"}):null);s5.Provider;var o5=function(t){return R.forwardRef(function(n,a){var o=R.useContext(s5);return t(n,o,a)})},l5=R.createContext({}),xp={}.hasOwnProperty,uh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",iC=function(t,n){var a={};for(var o in n)xp.call(n,o)&&(a[o]=n[o]);return a[uh]=t,a},nC=function(t){var n=t.cache,a=t.serialized,o=t.isStringTag;return i5(n,a,o),tC(function(){return n5(n,a,o)}),null},aC=o5(function(e,t,n){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[uh],l=[a],d="";typeof e.className=="string"?d=XS(t.registered,l,e.className):e.className!=null&&(d=e.className+" ");var u=gp(l,void 0,R.useContext(l5));d+=t.key+"-"+u.name;var f={};for(var m in e)xp.call(e,m)&&m!=="css"&&m!==uh&&(f[m]=e[m]);return f.className=d,n&&(f.ref=n),R.createElement(R.Fragment,null,R.createElement(nC,{cache:t,serialized:u,isStringTag:typeof o=="string"}),R.createElement(o,f))}),rC=aC,p3=function(t,n){var a=arguments;if(n==null||!xp.call(n,"css"))return R.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=rC,l[1]=iC(t,n);for(var d=2;d<o;d++)l[d]=a[d];return R.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(p3||(p3={}));var sC=o5(function(e,t){var n=e.styles,a=gp([n],void 0,R.useContext(l5)),o=R.useRef();return h3(function(){var l=t.key+"-global",d=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),u=!1,f=document.querySelector('style[data-emotion="'+l+" "+a.name+'"]');return t.sheet.tags.length&&(d.before=t.sheet.tags[0]),f!==null&&(u=!0,f.setAttribute("data-emotion",l),d.hydrate([f])),o.current=[d,u],function(){d.flush()}},[t]),h3(function(){var l=o.current,d=l[0],u=l[1];if(u){l[1]=!1;return}if(a.next!==void 0&&n5(t,a.next,!0),d.tags.length){var f=d.tags[d.tags.length-1].nextElementSibling;d.before=f,d.flush()}t.insert("",a,d,!1)},[t,a.name]),null});function oC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return gp(t)}const lC="/assets/Geist-Regular-BCrLS6HJ.ttf",cC="/assets/Geist-Medium-C6X8vKEc.ttf",dC="/assets/BebasNeue-Regular-D2CONTwO.ttf",uC="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",fC=oC`
  /* Font Awesome */
  @font-face {
    font-family: 'Geist Regular';
    src: url(${lC}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap; /* Додано для кращого відображення шрифтів */
  }

  /* Helvetica */
  @font-face {
    font-family: 'Geist Medium';
    src: url(${cC}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Bebas Neue Regular';
    src: url(${dC}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* Inter */
  @font-face {
    font-family: 'Inter';
    src: url(${uC}) format('truetype');
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
`;var Lt=function(){return Lt=Object.assign||function(t){for(var n,a=1,o=arguments.length;a<o;a++){n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Lt.apply(this,arguments)};function kr(e,t,n){if(n||arguments.length===2)for(var a=0,o=t.length,l;a<o;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Ge="-ms-",ro="-moz-",De="-webkit-",c5="comm",md="rule",vp="decl",hC="@import",d5="@keyframes",pC="@layer",u5=Math.abs,yp=String.fromCharCode,fh=Object.assign;function mC(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function f5(e){return e.trim()}function pn(e,t){return(e=t.exec(e))?e[0]:e}function ye(e,t,n){return e.replace(t,n)}function Tc(e,t,n){return e.indexOf(t,n)}function vt(e,t){return e.charCodeAt(t)|0}function Vr(e,t,n){return e.slice(t,n)}function Bi(e){return e.length}function h5(e){return e.length}function no(e,t){return t.push(e),e}function gC(e,t){return e.map(t).join("")}function m3(e,t){return e.filter(function(n){return!pn(n,t)})}var gd=1,Hr=1,p5=0,wi=0,st=0,qr="";function xd(e,t,n,a,o,l,d,u){return{value:e,root:t,parent:n,type:a,props:o,children:l,line:gd,column:Hr,length:d,return:"",siblings:u}}function qn(e,t){return fh(xd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mr(e){for(;e.root;)e=qn(e.root,{children:[e]});no(e,e.siblings)}function xC(){return st}function vC(){return st=wi>0?vt(qr,--wi):0,Hr--,st===10&&(Hr=1,gd--),st}function Mi(){return st=wi<p5?vt(qr,wi++):0,Hr++,st===10&&(Hr=1,gd++),st}function Ca(){return vt(qr,wi)}function Ec(){return wi}function vd(e,t){return Vr(qr,e,t)}function hh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yC(e){return gd=Hr=1,p5=Bi(qr=e),wi=0,[]}function wC(e){return qr="",e}function e0(e){return f5(vd(wi-1,ph(e===91?e+2:e===40?e+1:e)))}function bC(e){for(;(st=Ca())&&st<33;)Mi();return hh(e)>2||hh(st)>3?"":" "}function SC(e,t){for(;--t&&Mi()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return vd(e,Ec()+(t<6&&Ca()==32&&Mi()==32))}function ph(e){for(;Mi();)switch(st){case e:return wi;case 34:case 39:e!==34&&e!==39&&ph(st);break;case 40:e===41&&ph(e);break;case 92:Mi();break}return wi}function CC(e,t){for(;Mi()&&e+st!==57;)if(e+st===84&&Ca()===47)break;return"/*"+vd(t,wi-1)+"*"+yp(e===47?e:Mi())}function TC(e){for(;!hh(Ca());)Mi();return vd(e,wi)}function EC(e){return wC(jc("",null,null,null,[""],e=yC(e),0,[0],e))}function jc(e,t,n,a,o,l,d,u,f){for(var m=0,g=0,v=d,y=0,S=0,b=0,j=1,L=1,M=1,E=0,T="",V=o,O=l,N=a,P=T;L;)switch(b=E,E=Mi()){case 40:if(b!=108&&vt(P,v-1)==58){Tc(P+=ye(e0(E),"&","&\f"),"&\f",u5(m?u[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:P+=e0(E);break;case 9:case 10:case 13:case 32:P+=bC(b);break;case 92:P+=SC(Ec()-1,7);continue;case 47:switch(Ca()){case 42:case 47:no(jC(CC(Mi(),Ec()),t,n,f),f);break;default:P+="/"}break;case 123*j:u[m++]=Bi(P)*M;case 125*j:case 59:case 0:switch(E){case 0:case 125:L=0;case 59+g:M==-1&&(P=ye(P,/\f/g,"")),S>0&&Bi(P)-v&&no(S>32?x3(P+";",a,n,v-1,f):x3(ye(P," ","")+";",a,n,v-2,f),f);break;case 59:P+=";";default:if(no(N=g3(P,t,n,m,g,o,u,T,V=[],O=[],v,l),l),E===123)if(g===0)jc(P,t,N,N,V,l,v,u,O);else switch(y===99&&vt(P,3)===110?100:y){case 100:case 108:case 109:case 115:jc(e,N,N,a&&no(g3(e,N,N,0,0,o,u,T,o,V=[],v,O),O),o,O,v,u,a?V:O);break;default:jc(P,N,N,N,[""],O,0,u,O)}}m=g=S=0,j=M=1,T=P="",v=d;break;case 58:v=1+Bi(P),S=b;default:if(j<1){if(E==123)--j;else if(E==125&&j++==0&&vC()==125)continue}switch(P+=yp(E),E*j){case 38:M=g>0?1:(P+="\f",-1);break;case 44:u[m++]=(Bi(P)-1)*M,M=1;break;case 64:Ca()===45&&(P+=e0(Mi())),y=Ca(),g=v=Bi(T=P+=TC(Ec())),E++;break;case 45:b===45&&Bi(P)==2&&(j=0)}}return l}function g3(e,t,n,a,o,l,d,u,f,m,g,v){for(var y=o-1,S=o===0?l:[""],b=h5(S),j=0,L=0,M=0;j<a;++j)for(var E=0,T=Vr(e,y+1,y=u5(L=d[j])),V=e;E<b;++E)(V=f5(L>0?S[E]+" "+T:ye(T,/&\f/g,S[E])))&&(f[M++]=V);return xd(e,t,n,o===0?md:u,f,m,g,v)}function jC(e,t,n,a){return xd(e,t,n,c5,yp(xC()),Vr(e,2,-2),0,a)}function x3(e,t,n,a,o){return xd(e,t,n,vp,Vr(e,0,a),Vr(e,a+1,-1),a,o)}function m5(e,t,n){switch(mC(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 4789:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+ro+e+Ge+e+e;case 5936:switch(vt(e,t+11)){case 114:return De+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Ge+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return De+e+Ge+e+e;case 6165:return De+e+Ge+"flex-"+e+e;case 5187:return De+e+ye(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return De+e+Ge+"flex-item-"+ye(e,/flex-|-self/g,"")+(pn(e,/flex-|baseline/)?"":Ge+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return De+e+Ge+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return De+e+Ge+ye(e,"shrink","negative")+e;case 5292:return De+e+Ge+ye(e,"basis","preferred-size")+e;case 6060:return De+"box-"+ye(e,"-grow","")+De+e+Ge+ye(e,"grow","positive")+e;case 4554:return De+ye(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4200:if(!pn(e,/flex-|baseline/))return Ge+"grid-column-align"+Vr(e,t)+e;break;case 2592:case 3360:return Ge+ye(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(a,o){return t=o,pn(a.props,/grid-\w+-end/)})?~Tc(e+(n=n[t].value),"span",0)?e:Ge+ye(e,"-start","")+e+Ge+"grid-row-span:"+(~Tc(n,"span",0)?pn(n,/\d+/):+pn(n,/\d+/)-+pn(e,/\d+/))+";":Ge+ye(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(a){return pn(a.props,/grid-\w+-start/)})?e:Ge+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bi(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+ro+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Tc(e,"stretch",0)?m5(ye(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,d,u,f,m){return Ge+o+":"+l+m+(d?Ge+o+"-span:"+(u?f:+f-+l)+m:"")+e});case 4949:if(vt(e,t+6)===121)return ye(e,":",":"+De)+e;break;case 6444:switch(vt(e,vt(e,14)===45?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(vt(e,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Ge+"$2box$3")+e;case 100:return ye(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function Nc(e,t){for(var n="",a=0;a<e.length;a++)n+=t(e[a],a,e,t)||"";return n}function AC(e,t,n,a){switch(e.type){case pC:if(e.children.length)break;case hC:case vp:return e.return=e.return||e.value;case c5:return"";case d5:return e.return=e.value+"{"+Nc(e.children,a)+"}";case md:if(!Bi(e.value=e.props.join(",")))return""}return Bi(n=Nc(e.children,a))?e.return=e.value+"{"+n+"}":""}function MC(e){var t=h5(e);return function(n,a,o,l){for(var d="",u=0;u<t;u++)d+=e[u](n,a,o,l)||"";return d}}function LC(e){return function(t){t.root||(t=t.return)&&e(t)}}function OC(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case vp:e.return=m5(e.value,e.length,n);return;case d5:return Nc([qn(e,{value:ye(e.value,"@","@"+De)})],a);case md:if(e.length)return gC(n=e.props,function(o){switch(pn(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mr(qn(e,{props:[ye(o,/:(read-\w+)/,":"+ro+"$1")]})),mr(qn(e,{props:[o]})),fh(e,{props:m3(n,a)});break;case"::placeholder":mr(qn(e,{props:[ye(o,/:(plac\w+)/,":"+De+"input-$1")]})),mr(qn(e,{props:[ye(o,/:(plac\w+)/,":"+ro+"$1")]})),mr(qn(e,{props:[ye(o,/:(plac\w+)/,Ge+"input-$1")]})),mr(qn(e,{props:[o]})),fh(e,{props:m3(n,a)});break}return""})}}var RC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ai={},Dr=typeof process<"u"&&ai!==void 0&&(ai.REACT_APP_SC_ATTR||ai.SC_ATTR)||"data-styled",g5="active",x5="data-styled-version",yd="6.1.19",wp=`/*!sc*/
`,$c=typeof window<"u"&&typeof document<"u",kC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ai!==void 0&&ai.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ai.REACT_APP_SC_DISABLE_SPEEDY!==""?ai.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ai.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ai!==void 0&&ai.SC_DISABLE_SPEEDY!==void 0&&ai.SC_DISABLE_SPEEDY!==""&&ai.SC_DISABLE_SPEEDY!=="false"&&ai.SC_DISABLE_SPEEDY),VC={},wd=Object.freeze([]),zr=Object.freeze({});function v5(e,t,n){return n===void 0&&(n=zr),e.theme!==n.theme&&e.theme||t||n.theme}var y5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),HC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,DC=/(^-|-$)/g;function v3(e){return e.replace(HC,"-").replace(DC,"")}var zC=/(a)(d)/gi,Jl=52,y3=function(e){return String.fromCharCode(e+(e>25?39:97))};function mh(e){var t,n="";for(t=Math.abs(e);t>Jl;t=t/Jl|0)n=y3(t%Jl)+n;return(y3(t%Jl)+n).replace(zC,"$1-$2")}var t0,w5=5381,br=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},b5=function(e){return br(w5,e)};function bp(e){return mh(b5(e)>>>0)}function PC(e){return e.displayName||e.name||"Component"}function i0(e){return typeof e=="string"&&!0}var S5=typeof Symbol=="function"&&Symbol.for,C5=S5?Symbol.for("react.memo"):60115,NC=S5?Symbol.for("react.forward_ref"):60112,$C={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},BC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},T5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IC=((t0={})[NC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},t0[C5]=T5,t0);function w3(e){return("type"in(t=e)&&t.type.$$typeof)===C5?T5:"$$typeof"in e?IC[e.$$typeof]:$C;var t}var UC=Object.defineProperty,_C=Object.getOwnPropertyNames,b3=Object.getOwnPropertySymbols,GC=Object.getOwnPropertyDescriptor,qC=Object.getPrototypeOf,S3=Object.prototype;function E5(e,t,n){if(typeof t!="string"){if(S3){var a=qC(t);a&&a!==S3&&E5(e,a,n)}var o=_C(t);b3&&(o=o.concat(b3(t)));for(var l=w3(e),d=w3(t),u=0;u<o.length;++u){var f=o[u];if(!(f in BC||n&&n[f]||d&&f in d||l&&f in l)){var m=GC(t,f);try{UC(e,f,m)}catch{}}}}return e}function Pr(e){return typeof e=="function"}function Sp(e){return typeof e=="object"&&"styledComponentId"in e}function wa(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bc(e,t){if(e.length===0)return"";for(var n=e[0],a=1;a<e.length;a++)n+=e[a];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gh(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=gh(e[a],t[a]);else if(yo(t))for(var a in t)e[a]=gh(e[a],t[a]);return e}function Cp(e,t){Object.defineProperty(e,"toString",{value:t})}function Ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var YC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,a=0;a<t;a++)n+=this.groupSizes[a];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;t>=l;)if((l<<=1)<0)throw Ro(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var d=o;d<l;d++)this.groupSizes[d]=0}for(var u=this.indexOfGroup(t+1),f=(d=0,n.length);d<f;d++)this.tag.insertRule(u,n[d])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n;this.groupSizes[t]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),l=o+a,d=o;d<l;d++)n+="".concat(this.tag.getRule(d)).concat(wp);return n},e}(),Ac=new Map,Ic=new Map,Mc=1,ec=function(e){if(Ac.has(e))return Ac.get(e);for(;Ic.has(Mc);)Mc++;var t=Mc++;return Ac.set(e,t),Ic.set(t,e),t},FC=function(e,t){Mc=t+1,Ac.set(e,t),Ic.set(t,e)},XC="style[".concat(Dr,"][").concat(x5,'="').concat(yd,'"]'),ZC=new RegExp("^".concat(Dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),WC=function(e,t,n){for(var a,o=n.split(","),l=0,d=o.length;l<d;l++)(a=o[l])&&e.registerName(t,a)},KC=function(e,t){for(var n,a=((n=t.textContent)!==null&&n!==void 0?n:"").split(wp),o=[],l=0,d=a.length;l<d;l++){var u=a[l].trim();if(u){var f=u.match(ZC);if(f){var m=0|parseInt(f[1],10),g=f[2];m!==0&&(FC(g,m),WC(e,g,f[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(u)}}},C3=function(e){for(var t=document.querySelectorAll(XC),n=0,a=t.length;n<a;n++){var o=t[n];o&&o.getAttribute(Dr)!==g5&&(KC(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function QC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j5=function(e){var t=document.head,n=e||t,a=document.createElement("style"),o=function(u){var f=Array.from(u.querySelectorAll("style[".concat(Dr,"]")));return f[f.length-1]}(n),l=o!==void 0?o.nextSibling:null;a.setAttribute(Dr,g5),a.setAttribute(x5,yd);var d=QC();return d&&a.setAttribute("nonce",d),n.insertBefore(a,l),a},JC=function(){function e(t){this.element=j5(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var d=a[o];if(d.ownerNode===n)return d}throw Ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),eT=function(){function e(t){this.element=j5(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var a=document.createTextNode(n);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tT=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),T3=$c,iT={isServer:!$c,useCSSOMInjection:!kC},Uc=function(){function e(t,n,a){t===void 0&&(t=zr),n===void 0&&(n={});var o=this;this.options=Lt(Lt({},iT),t),this.gs=n,this.names=new Map(a),this.server=!!t.isServer,!this.server&&$c&&T3&&(T3=!1,C3(this)),Cp(this,function(){return function(l){for(var d=l.getTag(),u=d.length,f="",m=function(v){var y=function(M){return Ic.get(M)}(v);if(y===void 0)return"continue";var S=l.names.get(y),b=d.getGroup(v);if(S===void 0||!S.size||b.length===0)return"continue";var j="".concat(Dr,".g").concat(v,'[id="').concat(y,'"]'),L="";S!==void 0&&S.forEach(function(M){M.length>0&&(L+="".concat(M,","))}),f+="".concat(b).concat(j,'{content:"').concat(L,'"}').concat(wp)},g=0;g<u;g++)m(g);return f}(o)})}return e.registerId=function(t){return ec(t)},e.prototype.rehydrate=function(){!this.server&&$c&&C3(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Lt(Lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var a=n.useCSSOMInjection,o=n.target;return n.isServer?new tT(o):a?new JC(o):new eT(o)}(this.options),new YC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ec(t),this.names.has(t))this.names.get(t).add(n);else{var a=new Set;a.add(n),this.names.set(t,a)}},e.prototype.insertRules=function(t,n,a){this.registerName(t,n),this.getTag().insertRules(ec(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ec(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),nT=/&/g,aT=/^\s*\/\/.*$/gm;function A5(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=A5(n.children,t)),n})}function rT(e){var t,n,a,o=zr,l=o.options,d=l===void 0?zr:l,u=o.plugins,f=u===void 0?wd:u,m=function(y,S,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):y},g=f.slice();g.push(function(y){y.type===md&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(nT,n).replace(a,m))}),d.prefix&&g.push(OC),g.push(AC);var v=function(y,S,b,j){S===void 0&&(S=""),b===void 0&&(b=""),j===void 0&&(j="&"),t=j,n=S,a=new RegExp("\\".concat(n,"\\b"),"g");var L=y.replace(aT,""),M=EC(b||S?"".concat(b," ").concat(S," { ").concat(L," }"):L);d.namespace&&(M=A5(M,d.namespace));var E=[];return Nc(M,MC(g.concat(LC(function(T){return E.push(T)})))),E};return v.hash=f.length?f.reduce(function(y,S){return S.name||Ro(15),br(y,S.name)},w5).toString():"",v}var sT=new Uc,xh=rT(),M5=je.createContext({shouldForwardProp:void 0,styleSheet:sT,stylis:xh});M5.Consumer;je.createContext(void 0);function vh(){return R.useContext(M5)}var L5=function(){function e(t,n){var a=this;this.inject=function(o,l){l===void 0&&(l=xh);var d=a.name+l.hash;o.hasNameForId(a.id,d)||o.insertRules(a.id,d,l(a.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Cp(this,function(){throw Ro(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xh),this.name+t.hash},e}(),oT=function(e){return e>="A"&&e<="Z"};function E3(e){for(var t="",n=0;n<e.length;n++){var a=e[n];if(n===1&&a==="-"&&e[0]==="-")return e;oT(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var O5=function(e){return e==null||e===!1||e===""},R5=function(e){var t,n,a=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!O5(l)&&(Array.isArray(l)&&l.isCss||Pr(l)?a.push("".concat(E3(o),":"),l,";"):yo(l)?a.push.apply(a,kr(kr(["".concat(o," {")],R5(l),!1),["}"],!1)):a.push("".concat(E3(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in RC||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return a};function Zn(e,t,n,a){if(O5(e))return[];if(Sp(e))return[".".concat(e.styledComponentId)];if(Pr(e)){if(!Pr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Zn(o,t,n,a)}var l;return e instanceof L5?n?(e.inject(n,a),[e.getName(a)]):[e]:yo(e)?R5(e):Array.isArray(e)?Array.prototype.concat.apply(wd,e.map(function(d){return Zn(d,t,n,a)})):[e.toString()]}function k5(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pr(n)&&!Sp(n))return!1}return!0}var lT=b5(yd),cT=function(){function e(t,n,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&k5(t),this.componentId=n,this.baseHash=br(lT,n),this.baseStyle=a,Uc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=wa(o,this.staticRulesId);else{var l=Bc(Zn(this.rules,t,n,a)),d=mh(br(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,d)){var u=a(l,".".concat(d),void 0,this.componentId);n.insertRules(this.componentId,d,u)}o=wa(o,d),this.staticRulesId=d}else{for(var f=br(this.baseHash,a.hash),m="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")m+=v;else if(v){var y=Bc(Zn(v,t,n,a));f=br(f,y+g),m+=y}}if(m){var S=mh(f>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,a(m,".".concat(S),void 0,this.componentId)),o=wa(o,S)}}return o},e}(),Tp=je.createContext(void 0);Tp.Consumer;var n0={};function dT(e,t,n){var a=Sp(e),o=e,l=!i0(e),d=t.attrs,u=d===void 0?wd:d,f=t.componentId,m=f===void 0?function(V,O){var N=typeof V!="string"?"sc":v3(V);n0[N]=(n0[N]||0)+1;var P="".concat(N,"-").concat(bp(yd+N+n0[N]));return O?"".concat(O,"-").concat(P):P}(t.displayName,t.parentComponentId):f,g=t.displayName,v=g===void 0?function(V){return i0(V)?"styled.".concat(V):"Styled(".concat(PC(V),")")}(e):g,y=t.displayName&&t.componentId?"".concat(v3(t.displayName),"-").concat(t.componentId):t.componentId||m,S=a&&o.attrs?o.attrs.concat(u).filter(Boolean):u,b=t.shouldForwardProp;if(a&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;b=function(V,O){return j(V,O)&&L(V,O)}}else b=j}var M=new cT(n,y,a?o.componentStyle:void 0);function E(V,O){return function(N,P,_){var Y=N.attrs,F=N.componentStyle,K=N.defaultProps,ne=N.foldedComponentIds,le=N.styledComponentId,ue=N.target,oe=je.useContext(Tp),B=vh(),W=N.shouldForwardProp||B.shouldForwardProp,J=v5(P,oe,K)||zr,ie=function(Se,he,dt){for(var Ve,Tt=Lt(Lt({},he),{className:void 0,theme:dt}),Jn=0;Jn<Se.length;Jn+=1){var Zi=Pr(Ve=Se[Jn])?Ve(Tt):Ve;for(var li in Zi)Tt[li]=li==="className"?wa(Tt[li],Zi[li]):li==="style"?Lt(Lt({},Tt[li]),Zi[li]):Zi[li]}return he.className&&(Tt.className=wa(Tt.className,he.className)),Tt}(Y,P,J),k=ie.as||ue,X={};for(var ae in ie)ie[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&ie.theme===J||(ae==="forwardedAs"?X.as=ie.forwardedAs:W&&!W(ae,k)||(X[ae]=ie[ae]));var re=function(Se,he){var dt=vh(),Ve=Se.generateAndInjectStyles(he,dt.styleSheet,dt.stylis);return Ve}(F,ie),de=wa(ne,le);return re&&(de+=" "+re),ie.className&&(de+=" "+ie.className),X[i0(k)&&!y5.has(k)?"class":"className"]=de,_&&(X.ref=_),R.createElement(k,X)}(T,V,O)}E.displayName=v;var T=je.forwardRef(E);return T.attrs=S,T.componentStyle=M,T.displayName=v,T.shouldForwardProp=b,T.foldedComponentIds=a?wa(o.foldedComponentIds,o.styledComponentId):"",T.styledComponentId=y,T.target=a?o.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=a?function(O){for(var N=[],P=1;P<arguments.length;P++)N[P-1]=arguments[P];for(var _=0,Y=N;_<Y.length;_++)gh(O,Y[_],!0);return O}({},o.defaultProps,V):V}}),Cp(T,function(){return".".concat(T.styledComponentId)}),l&&E5(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function j3(e,t){for(var n=[e[0]],a=0,o=t.length;a<o;a+=1)n.push(t[a],e[a+1]);return n}var A3=function(e){return Object.assign(e,{isCss:!0})};function zt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Pr(e)||yo(e))return A3(Zn(j3(wd,kr([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Zn(a):A3(Zn(j3(a,t)))}function yh(e,t,n){if(n===void 0&&(n=zr),!t)throw Ro(1,t);var a=function(o){for(var l=[],d=1;d<arguments.length;d++)l[d-1]=arguments[d];return e(t,n,zt.apply(void 0,kr([o],l,!1)))};return a.attrs=function(o){return yh(e,t,Lt(Lt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return yh(e,t,Lt(Lt({},n),o))},a}var V5=function(e){return yh(dT,e)},w=V5;y5.forEach(function(e){w[e]=V5(e)});var uT=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=k5(t),Uc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,a,o){var l=o(Bc(Zn(this.rules,n,a,o)),""),d=this.componentId+t;a.insertRules(d,d,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,a,o){t>2&&Uc.registerId(this.componentId+t),this.removeStyles(t,a),this.createStyles(t,n,a,o)},e}();function fT(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=zt.apply(void 0,kr([e],t,!1)),o="sc-global-".concat(bp(JSON.stringify(a))),l=new uT(a,o),d=function(f){var m=vh(),g=je.useContext(Tp),v=je.useRef(m.styleSheet.allocateGSInstance(o)).current;return m.styleSheet.server&&u(v,f,m.styleSheet,g,m.stylis),je.useLayoutEffect(function(){if(!m.styleSheet.server)return u(v,f,m.styleSheet,g,m.stylis),function(){return l.removeStyles(v,m.styleSheet)}},[v,f,m.styleSheet,g,m.stylis]),null};function u(f,m,g,v,y){if(l.isStatic)l.renderStyles(f,VC,g,y);else{var S=Lt(Lt({},m),{theme:v5(m,v,d.defaultProps)});l.renderStyles(f,S,g,y)}}return je.memo(d)}function Qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var a=Bc(zt.apply(void 0,kr([e],t,!1))),o=bp(a);return new L5(o,a)}const hT=w.nav`
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
  ${({$isScrolled:e})=>e&&zt`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`,pT=w.div`
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
`,mT=w(Ct)`
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
`,gT=w.ul`
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
`,M3=w.div`
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
`,xT=w.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,H5=w.button`
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
`;var ic={},L3;function vT(){if(L3)return ic;L3=1,ic.match=l,ic.parse=d;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,n=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function l(g,v){return d(g).some(function(y){var S=y.inverse,b=y.type==="all"||v.type===y.type;if(b&&S||!(b||S))return!1;var j=y.expressions.every(function(L){var M=L.feature,E=L.modifier,T=L.value,V=v[M];if(!V)return!1;switch(M){case"orientation":case"scan":return V.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=m(T),V=m(V);break;case"resolution":T=f(T),V=f(V);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=u(T),V=u(V);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,V=parseInt(V,10)||0;break}switch(E){case"min":return V>=T;case"max":return V<=T;default:return V===T}});return j&&!S||!j&&S})}function d(g){return g.split(",").map(function(v){v=v.trim();var y=v.match(e),S=y[1],b=y[2],j=y[3]||"",L={};return L.inverse=!!S&&S.toLowerCase()==="not",L.type=b?b.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],L.expressions=j.map(function(M){var E=M.match(t),T=E[1].toLowerCase().match(n);return{modifier:T[1],feature:T[2],value:E[2]}}),L})}function u(g){var v=Number(g),y;return v||(y=g.match(/^(\d+)\s*\/\s*(\d+)$/),v=y[1]/y[2]),v}function f(g){var v=parseFloat(g),y=String(g).match(o)[1];switch(y){case"dpcm":return v/2.54;case"dppx":return v*96;default:return v}}function m(g){var v=parseFloat(g),y=String(g).match(a)[1];switch(y){case"em":return v*16;case"rem":return v*16;case"cm":return v*96/2.54;case"mm":return v*96/2.54/10;case"in":return v*96;case"pt":return v*72;case"pc":return v*72/12;default:return v}}return ic}var a0,O3;function yT(){if(O3)return a0;O3=1;var e=vT().match,t=typeof window<"u"?window.matchMedia:null;function n(o,l,d){var u=this,f;t&&!d&&(f=t.call(window,o)),f?(this.matches=f.matches,this.media=f.media,f.addListener(v)):(this.matches=e(o,l),this.media=o),this.addListener=m,this.removeListener=g,this.dispose=y;function m(S){f&&f.addListener(S)}function g(S){f&&f.removeListener(S)}function v(S){u.matches=S.matches,u.media=S.media}function y(){f&&f.removeListener(v)}}function a(o,l,d){return new n(o,l,d)}return a0=a,a0}var wT=yT();const bT=cd(wT);var ST=/[A-Z]/g,CT=/^ms-/,r0={};function TT(e){return"-"+e.toLowerCase()}function D5(e){if(r0.hasOwnProperty(e))return r0[e];var t=e.replace(ST,TT);return r0[e]=CT.test(t)?"-"+t:t}function ET(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),a=Object.keys(t),o=n.length;if(a.length!==o)return!1;for(let l=0;l<o;l++){const d=n[l];if(e[d]!==t[d]||!Object.prototype.hasOwnProperty.call(t,d))return!1}return!0}var s0={exports:{}},o0,R3;function jT(){if(R3)return o0;R3=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return o0=e,o0}var l0,k3;function AT(){if(k3)return l0;k3=1;var e=jT();function t(){}function n(){}return n.resetWarningCache=t,l0=function(){function a(d,u,f,m,g,v){if(v!==e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}a.isRequired=a;function o(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return l.PropTypes=l,l},l0}var V3;function MT(){return V3||(V3=1,s0.exports=AT()()),s0.exports}var LT=MT();const Re=cd(LT),Ht=Re.oneOfType([Re.string,Re.number]),z5={all:Re.bool,grid:Re.bool,aural:Re.bool,braille:Re.bool,handheld:Re.bool,print:Re.bool,projection:Re.bool,screen:Re.bool,tty:Re.bool,tv:Re.bool,embossed:Re.bool},OT={orientation:Re.oneOf(["portrait","landscape"]),scan:Re.oneOf(["progressive","interlace"]),aspectRatio:Re.string,deviceAspectRatio:Re.string,height:Ht,deviceHeight:Ht,width:Ht,deviceWidth:Ht,color:Re.bool,colorIndex:Re.bool,monochrome:Re.bool,resolution:Ht,type:Object.keys(z5)},{type:yB,...RT}=OT,kT={minAspectRatio:Re.string,maxAspectRatio:Re.string,minDeviceAspectRatio:Re.string,maxDeviceAspectRatio:Re.string,minHeight:Ht,maxHeight:Ht,minDeviceHeight:Ht,maxDeviceHeight:Ht,minWidth:Ht,maxWidth:Ht,minDeviceWidth:Ht,maxDeviceWidth:Ht,minColor:Re.number,maxColor:Re.number,minColorIndex:Re.number,maxColorIndex:Re.number,minMonochrome:Re.number,maxMonochrome:Re.number,minResolution:Ht,maxResolution:Ht,...RT},VT={...z5,...kT};var HT={all:VT};const DT=e=>`not ${e}`,zT=(e,t)=>{const n=D5(e);return typeof t=="number"&&(t=`${t}px`),t===!0?n:t===!1?DT(n):`(${n}: ${t})`},PT=e=>e.join(" and "),NT=e=>{const t=[];return Object.keys(HT.all).forEach(n=>{const a=e[n];a!=null&&t.push(zT(n,a))}),PT(t)},$T=R.createContext(void 0),BT=e=>e.query||NT(e),H3=e=>e?Object.keys(e).reduce((n,a)=>(n[D5(a)]=e[a],n),{}):void 0,P5=()=>{const e=R.useRef(!1);return R.useEffect(()=>{e.current=!0},[]),e.current},IT=e=>{const t=R.useContext($T),n=()=>H3(e)||H3(t),[a,o]=R.useState(n);return R.useEffect(()=>{const l=n();ET(a,l)||o(l)},[e,t]),a},UT=e=>{const t=()=>BT(e),[n,a]=R.useState(t);return R.useEffect(()=>{const o=t();n!==o&&a(o)},[e]),n},_T=(e,t)=>{const n=()=>bT(e,t||{},!!t),[a,o]=R.useState(n),l=P5();return R.useEffect(()=>{if(l){const d=n();return o(d),()=>{d&&d.dispose()}}},[e,t]),a},GT=e=>{const[t,n]=R.useState(e.matches);return R.useEffect(()=>{const a=o=>{n(o.matches)};return e.addListener(a),n(e.matches),()=>{e.removeListener(a)}},[e]),t},ke=(e,t,n)=>{const a=IT(t),o=UT(e);if(!o)throw new Error("Invalid or missing MediaQuery!");const l=_T(o,a),d=GT(l);return P5(),R.useEffect(()=>{},[d]),R.useEffect(()=>()=>{l&&l.dispose()},[]),d},Ep=R.createContext({});function La(e){const t=R.useRef(null);return t.current===null&&(t.current=e()),t.current}const jp=typeof window<"u",ko=jp?R.useLayoutEffect:R.useEffect,bd=R.createContext(null);function Ap(e,t){e.indexOf(t)===-1&&e.push(t)}function Mp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Xi=(e,t,n)=>n>t?t:n<e?e:n;let wo=()=>{};const xn={},N5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function $5(e){return typeof e=="object"&&e!==null}const B5=e=>/^0[^.\s]+$/u.test(e);function Lp(e){let t;return()=>(t===void 0&&(t=e()),t)}const qt=e=>e,qT=(e,t)=>n=>t(e(n)),Vo=(...e)=>e.reduce(qT),Nr=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class Op{constructor(){this.subscriptions=[]}add(t){return Ap(this.subscriptions,t),()=>Mp(this.subscriptions,t)}notify(t,n,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,a);else for(let l=0;l<o;l++){const d=this.subscriptions[l];d&&d(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Gi=e=>e*1e3,qi=e=>e/1e3;function Rp(e,t){return t?e*(1e3/t):0}const I5=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,YT=1e-7,FT=12;function XT(e,t,n,a,o){let l,d,u=0;do d=t+(n-t)/2,l=I5(d,a,o)-e,l>0?n=d:t=d;while(Math.abs(l)>YT&&++u<FT);return d}function Ho(e,t,n,a){if(e===t&&n===a)return qt;const o=l=>XT(l,0,1,e,n);return l=>l===0||l===1?l:I5(o(l),t,a)}const U5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,_5=e=>t=>1-e(1-t),Rt=Ho(.33,1.53,.69,.99),kp=_5(Rt),G5=U5(kp),q5=e=>(e*=2)<1?.5*kp(e):.5*(2-Math.pow(2,-10*(e-1))),Vp=e=>1-Math.sin(Math.acos(e)),_c=_5(Vp),Y5=U5(Vp),ZT=Ho(.42,0,1,1),te=Ho(0,0,.58,1),F5=Ho(.42,0,.58,1),WT=e=>Array.isArray(e)&&typeof e[0]!="number",X5=e=>Array.isArray(e)&&typeof e[0]=="number",KT={linear:qt,easeIn:ZT,easeInOut:F5,easeOut:te,circIn:Vp,circInOut:Y5,circOut:_c,backIn:kp,backInOut:G5,backOut:Rt,anticipate:q5},QT=e=>typeof e=="string",D3=e=>{if(X5(e)){wo(e.length===4);const[t,n,a,o]=e;return Ho(t,n,a,o)}else if(QT(e))return KT[e];return e},nc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function JT(e,t){let n=new Set,a=new Set,o=!1,l=!1;const d=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(g){d.has(g)&&(m.schedule(g),e()),g(u)}const m={schedule:(g,v=!1,y=!1)=>{const b=y&&o?n:a;return v&&d.add(g),b.has(g)||b.add(g),g},cancel:g=>{a.delete(g),d.delete(g)},process:g=>{if(u=g,o){l=!0;return}o=!0,[n,a]=[a,n],n.forEach(f),n.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const eE=40;function Z5(e,t){let n=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,d=nc.reduce((T,V)=>(T[V]=JT(l),T),{}),{setup:u,read:f,resolveKeyframes:m,preUpdate:g,update:v,preRender:y,render:S,postRender:b}=d,j=()=>{const T=xn.useManualTiming?o.timestamp:performance.now();n=!1,xn.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(T-o.timestamp,eE),1)),o.timestamp=T,o.isProcessing=!0,u.process(o),f.process(o),m.process(o),g.process(o),v.process(o),y.process(o),S.process(o),b.process(o),o.isProcessing=!1,n&&t&&(a=!1,e(j))},L=()=>{n=!0,a=!0,o.isProcessing||e(j)};return{schedule:nc.reduce((T,V)=>{const O=d[V];return T[V]=(N,P=!1,_=!1)=>(n||L(),O.schedule(N,P,_)),T},{}),cancel:T=>{for(let V=0;V<nc.length;V++)d[nc[V]].cancel(T)},state:o,steps:d}}const{schedule:Ne,cancel:Oi,state:gt,steps:c0}=Z5(typeof requestAnimationFrame<"u"?requestAnimationFrame:qt,!0);let Lc;function tE(){Lc=void 0}const Gt={now:()=>(Lc===void 0&&Gt.set(gt.isProcessing||xn.useManualTiming?gt.timestamp:performance.now()),Lc),set:e=>{Lc=e,queueMicrotask(tE)}},W5=e=>t=>typeof t=="string"&&t.startsWith(e),Hp=W5("--"),iE=W5("var(--"),Dp=e=>iE(e)?nE.test(e.split("/*")[0].trim()):!1,nE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},bo={...Yr,transform:e=>Xi(0,1,e)},ac={...Yr,default:1},so=e=>Math.round(e*1e5)/1e5,zp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aE(e){return e==null}const rE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pp=(e,t)=>n=>!!(typeof n=="string"&&rE.test(n)&&n.startsWith(e)||t&&!aE(n)&&Object.prototype.hasOwnProperty.call(n,t)),K5=(e,t,n)=>a=>{if(typeof a!="string")return a;const[o,l,d,u]=a.match(zp);return{[e]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(d),alpha:u!==void 0?parseFloat(u):1}},sE=e=>Xi(0,255,e),d0={...Yr,transform:e=>Math.round(sE(e))},ba={test:Pp("rgb","red"),parse:K5("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+d0.transform(e)+", "+d0.transform(t)+", "+d0.transform(n)+", "+so(bo.transform(a))+")"};function oE(e){let t="",n="",a="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const wh={test:Pp("#"),parse:oE,transform:ba.transform},Do=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Yn=Do("deg"),Yi=Do("%"),ge=Do("px"),lE=Do("vh"),cE=Do("vw"),z3={...Yi,parse:e=>Yi.parse(e)/100,transform:e=>Yi.transform(e*100)},Sr={test:Pp("hsl","hue"),parse:K5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+Yi.transform(so(t))+", "+Yi.transform(so(n))+", "+so(bo.transform(a))+")"},at={test:e=>ba.test(e)||wh.test(e)||Sr.test(e),parse:e=>ba.test(e)?ba.parse(e):Sr.test(e)?Sr.parse(e):wh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ba.transform(e):Sr.transform(e),getAnimatableNone:e=>{const t=at.parse(e);return t.alpha=0,at.transform(t)}},dE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uE(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zp))==null?void 0:t.length)||0)+(((n=e.match(dE))==null?void 0:n.length)||0)>0}const Q5="number",J5="color",fE="var",hE="var(",P3="${}",pE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function So(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},o=[];let l=0;const u=t.replace(pE,f=>(at.test(f)?(a.color.push(l),o.push(J5),n.push(at.parse(f))):f.startsWith(hE)?(a.var.push(l),o.push(fE),n.push(f)):(a.number.push(l),o.push(Q5),n.push(parseFloat(f))),++l,P3)).split(P3);return{values:n,split:u,indexes:a,types:o}}function e6(e){return So(e).values}function t6(e){const{split:t,types:n}=So(e),a=t.length;return o=>{let l="";for(let d=0;d<a;d++)if(l+=t[d],o[d]!==void 0){const u=n[d];u===Q5?l+=so(o[d]):u===J5?l+=at.transform(o[d]):l+=o[d]}return l}}const mE=e=>typeof e=="number"?0:at.test(e)?at.getAnimatableNone(e):e;function gE(e){const t=e6(e);return t6(e)(t.map(mE))}const Wn={test:uE,parse:e6,createTransformer:t6,getAnimatableNone:gE};function u0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xE({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let o=0,l=0,d=0;if(!t)o=l=d=n;else{const u=n<.5?n*(1+t):n+t-n*t,f=2*n-u;o=u0(f,u,e+1/3),l=u0(f,u,e),d=u0(f,u,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(d*255),alpha:a}}function Gc(e,t){return n=>n>0?t:e}const Xe=(e,t,n)=>e+(t-e)*n,f0=(e,t,n)=>{const a=e*e,o=n*(t*t-a)+a;return o<0?0:Math.sqrt(o)},vE=[wh,ba,Sr],yE=e=>vE.find(t=>t.test(e));function N3(e){const t=yE(e);if(!t)return!1;let n=t.parse(e);return t===Sr&&(n=xE(n)),n}const $3=(e,t)=>{const n=N3(e),a=N3(t);if(!n||!a)return Gc(e,t);const o={...n};return l=>(o.red=f0(n.red,a.red,l),o.green=f0(n.green,a.green,l),o.blue=f0(n.blue,a.blue,l),o.alpha=Xe(n.alpha,a.alpha,l),ba.transform(o))},bh=new Set(["none","hidden"]);function wE(e,t){return bh.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bE(e,t){return n=>Xe(e,t,n)}function Np(e){return typeof e=="number"?bE:typeof e=="string"?Dp(e)?Gc:at.test(e)?$3:TE:Array.isArray(e)?i6:typeof e=="object"?at.test(e)?$3:SE:Gc}function i6(e,t){const n=[...e],a=n.length,o=e.map((l,d)=>Np(l)(l,t[d]));return l=>{for(let d=0;d<a;d++)n[d]=o[d](l);return n}}function SE(e,t){const n={...e,...t},a={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Np(e[o])(e[o],t[o]));return o=>{for(const l in a)n[l]=a[l](o);return n}}function CE(e,t){const n=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],d=e.indexes[l][a[l]],u=e.values[d]??0;n[o]=u,a[l]++}return n}const TE=(e,t)=>{const n=Wn.createTransformer(t),a=So(e),o=So(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?bh.has(e)&&!o.values.length||bh.has(t)&&!a.values.length?wE(e,t):Vo(i6(CE(a,o),o.values),n):Gc(e,t)};function n6(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Xe(e,t,n):Np(e)(e,t)}const EE=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Ne.update(t,n),stop:()=>Oi(t),now:()=>gt.isProcessing?gt.timestamp:Gt.now()}},a6=(e,t,n=10)=>{let a="";const o=Math.max(Math.round(t/n),2);for(let l=0;l<o;l++)a+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},qc=2e4;function $p(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<qc;)t+=n,a=e.next(t);return t>=qc?1/0:t}function jE(e,t=100,n){const a=n({...e,keyframes:[0,t]}),o=Math.min($p(a),qc);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:qi(o)}}const AE=5;function r6(e,t,n){const a=Math.max(t-AE,0);return Rp(n-e(a),t-a)}const Ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},h0=.001;function ME({duration:e=Ke.duration,bounce:t=Ke.bounce,velocity:n=Ke.velocity,mass:a=Ke.mass}){let o,l,d=1-t;d=Xi(Ke.minDamping,Ke.maxDamping,d),e=Xi(Ke.minDuration,Ke.maxDuration,qi(e)),d<1?(o=m=>{const g=m*d,v=g*e,y=g-n,S=Sh(m,d),b=Math.exp(-v);return h0-y/S*b},l=m=>{const v=m*d*e,y=v*n+n,S=Math.pow(d,2)*Math.pow(m,2)*e,b=Math.exp(-v),j=Sh(Math.pow(m,2),d);return(-o(m)+h0>0?-1:1)*((y-S)*b)/j}):(o=m=>{const g=Math.exp(-m*e),v=(m-n)*e+1;return-h0+g*v},l=m=>{const g=Math.exp(-m*e),v=(n-m)*(e*e);return g*v});const u=5/e,f=OE(o,l,u);if(e=Gi(e),isNaN(f))return{stiffness:Ke.stiffness,damping:Ke.damping,duration:e};{const m=Math.pow(f,2)*a;return{stiffness:m,damping:d*2*Math.sqrt(a*m),duration:e}}}const LE=12;function OE(e,t,n){let a=n;for(let o=1;o<LE;o++)a=a-e(a)/t(a);return a}function Sh(e,t){return e*Math.sqrt(1-t*t)}const RE=["duration","bounce"],kE=["stiffness","damping","mass"];function B3(e,t){return t.some(n=>e[n]!==void 0)}function VE(e){let t={velocity:Ke.velocity,stiffness:Ke.stiffness,damping:Ke.damping,mass:Ke.mass,isResolvedFromDuration:!1,...e};if(!B3(e,kE)&&B3(e,RE))if(e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),o=a*a,l=2*Xi(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Ke.mass,stiffness:o,damping:l}}else{const n=ME(e);t={...t,...n,mass:Ke.mass},t.isResolvedFromDuration=!0}return t}function Yc(e=Ke.visualDuration,t=Ke.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=n;const l=n.keyframes[0],d=n.keyframes[n.keyframes.length-1],u={done:!1,value:l},{stiffness:f,damping:m,mass:g,duration:v,velocity:y,isResolvedFromDuration:S}=VE({...n,velocity:-qi(n.velocity||0)}),b=y||0,j=m/(2*Math.sqrt(f*g)),L=d-l,M=qi(Math.sqrt(f/g)),E=Math.abs(L)<5;a||(a=E?Ke.restSpeed.granular:Ke.restSpeed.default),o||(o=E?Ke.restDelta.granular:Ke.restDelta.default);let T;if(j<1){const O=Sh(M,j);T=N=>{const P=Math.exp(-j*M*N);return d-P*((b+j*M*L)/O*Math.sin(O*N)+L*Math.cos(O*N))}}else if(j===1)T=O=>d-Math.exp(-M*O)*(L+(b+M*L)*O);else{const O=M*Math.sqrt(j*j-1);T=N=>{const P=Math.exp(-j*M*N),_=Math.min(O*N,300);return d-P*((b+j*M*L)*Math.sinh(_)+O*L*Math.cosh(_))/O}}const V={calculatedDuration:S&&v||null,next:O=>{const N=T(O);if(S)u.done=O>=v;else{let P=O===0?b:0;j<1&&(P=O===0?Gi(b):r6(T,O,N));const _=Math.abs(P)<=a,Y=Math.abs(d-N)<=o;u.done=_&&Y}return u.value=u.done?d:N,u},toString:()=>{const O=Math.min($p(V),qc),N=a6(P=>V.next(O*P).value,O,30);return O+"ms "+N},toTransition:()=>{}};return V}Yc.applyToOptions=e=>{const t=jE(e,100,Yc);return e.ease=t.ease,e.duration=Gi(t.duration),e.type="keyframes",e};function Ch({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:d,min:u,max:f,restDelta:m=.5,restSpeed:g}){const v=e[0],y={done:!1,value:v},S=_=>u!==void 0&&_<u||f!==void 0&&_>f,b=_=>u===void 0?f:f===void 0||Math.abs(u-_)<Math.abs(f-_)?u:f;let j=n*t;const L=v+j,M=d===void 0?L:d(L);M!==L&&(j=M-v);const E=_=>-j*Math.exp(-_/a),T=_=>M+E(_),V=_=>{const Y=E(_),F=T(_);y.done=Math.abs(Y)<=m,y.value=y.done?M:F};let O,N;const P=_=>{S(y.value)&&(O=_,N=Yc({keyframes:[y.value,b(y.value)],velocity:r6(T,_,y.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return P(0),{calculatedDuration:null,next:_=>{let Y=!1;return!N&&O===void 0&&(Y=!0,V(_),P(_)),O!==void 0&&_>=O?N.next(_-O):(!Y&&V(_),y)}}}function HE(e,t,n){const a=[],o=n||xn.mix||n6,l=e.length-1;for(let d=0;d<l;d++){let u=o(e[d],e[d+1]);if(t){const f=Array.isArray(t)?t[d]||qt:t;u=Vo(f,u)}a.push(u)}return a}function Bp(e,t,{clamp:n=!0,ease:a,mixer:o}={}){const l=e.length;if(wo(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const d=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const u=HE(t,a,o),f=u.length,m=g=>{if(d&&g<e[0])return t[0];let v=0;if(f>1)for(;v<e.length-2&&!(g<e[v+1]);v++);const y=Nr(e[v],e[v+1],g);return u[v](y)};return n?g=>m(Xi(e[0],e[l-1],g)):m}function DE(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const o=Nr(0,t,a);e.push(Xe(n,1,o))}}function s6(e){const t=[0];return DE(t,e.length-1),t}function zE(e,t){return e.map(n=>n*t)}function PE(e,t){return e.map(()=>t||F5).splice(0,e.length-1)}function oo({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const o=WT(a)?a.map(D3):D3(a),l={done:!1,value:t[0]},d=zE(n&&n.length===t.length?n:s6(t),e),u=Bp(d,t,{ease:Array.isArray(o)?o:PE(t,o)});return{calculatedDuration:e,next:f=>(l.value=u(f),l.done=f>=e,l)}}const NE=e=>e!==null;function Ip(e,{repeat:t,repeatType:n="loop"},a,o=1){const l=e.filter(NE),u=o<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!u||a===void 0?l[u]:a}const $E={decay:Ch,inertia:Ch,tween:oo,keyframes:oo,spring:Yc};function o6(e){typeof e.type=="string"&&(e.type=$E[e.type])}class Up{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const BE=e=>e/100;class _p extends Up{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:n}=this.options;n&&n.updatedAt!==Gt.now()&&this.tick(Gt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;o6(t);const{type:n=oo,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:d=0}=t;let{keyframes:u}=t;const f=n||oo;f!==oo&&typeof u[0]!="number"&&(this.mixKeyframes=Vo(BE,n6(u[0],u[1])),u=[0,100]);const m=f({...t,keyframes:u});l==="mirror"&&(this.mirroredGenerator=f({...t,keyframes:[...u].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=$p(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=m}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:d,resolvedDuration:u,calculatedDuration:f}=this;if(this.startTime===null)return a.next(0);const{delay:m=0,keyframes:g,repeat:v,repeatType:y,repeatDelay:S,type:b,onUpdate:j,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const M=this.currentTime-m*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let T=this.currentTime,V=a;if(v){const _=Math.min(this.currentTime,o)/u;let Y=Math.floor(_),F=_%1;!F&&_>=1&&(F=1),F===1&&Y--,Y=Math.min(Y,v+1),!!(Y%2)&&(y==="reverse"?(F=1-F,S&&(F-=S/u)):y==="mirror"&&(V=d)),T=Xi(0,1,F)*u}const O=E?{done:!1,value:g[0]}:V.next(T);l&&(O.value=l(O.value));let{done:N}=O;!E&&f!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return P&&b!==Ch&&(O.value=Ip(g,this.options,L,this.speed)),j&&j(O.value),P&&this.finish(),O}then(t,n){return this.finished.then(t,n)}get duration(){return qi(this.calculatedDuration)}get time(){return qi(this.currentTime)}set time(t){var n;t=Gi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Gt.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=qi(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=EE,startTime:n}=this.options;this.driver||(this.driver=t(d=>this.tick(d))),(l=(o=this.options).onPlay)==null||l.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Gt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function IE(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Sa=e=>e*180/Math.PI,Th=e=>{const t=Sa(Math.atan2(e[1],e[0]));return Eh(t)},UE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Th,rotateZ:Th,skewX:e=>Sa(Math.atan(e[1])),skewY:e=>Sa(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Eh=e=>(e=e%360,e<0&&(e+=360),e),I3=Th,U3=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),_3=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),_E={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:U3,scaleY:_3,scale:e=>(U3(e)+_3(e))/2,rotateX:e=>Eh(Sa(Math.atan2(e[6],e[5]))),rotateY:e=>Eh(Sa(Math.atan2(-e[2],e[0]))),rotateZ:I3,rotate:I3,skewX:e=>Sa(Math.atan(e[4])),skewY:e=>Sa(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function jh(e){return e.includes("scale")?1:0}function Ah(e,t){if(!e||e==="none")return jh(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(n)a=_E,o=n;else{const u=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=UE,o=u}if(!o)return jh(t);const l=a[t],d=o[1].split(",").map(qE);return typeof l=="function"?l(d):d[l]}const GE=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Ah(n,t)};function qE(e){return parseFloat(e.trim())}const Fr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xr=new Set(Fr),G3=e=>e===Yr||e===ge,YE=new Set(["x","y","z"]),FE=Fr.filter(e=>!YE.has(e));function XE(e){const t=[];return FE.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const Ta={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ah(t,"x"),y:(e,{transform:t})=>Ah(t,"y")};Ta.translateX=Ta.x;Ta.translateY=Ta.y;const Ea=new Set;let Mh=!1,Lh=!1,Oh=!1;function l6(){if(Lh){const e=Array.from(Ea).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const o=XE(a);o.length&&(n.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=n.get(a);o&&o.forEach(([l,d])=>{var u;(u=a.getValue(l))==null||u.set(d)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Lh=!1,Mh=!1,Ea.forEach(e=>e.complete(Oh)),Ea.clear()}function c6(){Ea.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Lh=!0)})}function ZE(){Oh=!0,c6(),l6(),Oh=!1}class Gp{constructor(t,n,a,o,l,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=o,this.element=l,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ea.add(this),Mh||(Mh=!0,Ne.read(c6),Ne.resolveKeyframes(l6))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),d=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&n){const u=a.readValue(n,d);u!=null&&(t[0]=u)}t[0]===void 0&&(t[0]=d),o&&l===void 0&&o.set(t[0])}IE(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ea.delete(this)}cancel(){this.state==="scheduled"&&(Ea.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const WE=e=>e.startsWith("--");function KE(e,t,n){WE(t)?e.style.setProperty(t,n):e.style[t]=n}const d6=Lp(()=>window.ScrollTimeline!==void 0),QE={};function JE(e,t){const n=Lp(e);return()=>QE[t]??n()}const u6=JE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ao=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,q3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ao([0,.65,.55,1]),circOut:ao([.55,0,1,.45]),backIn:ao([.31,.01,.66,-.59]),backOut:ao([.33,1.53,.69,.99])};function f6(e,t){if(e)return typeof e=="function"?u6()?a6(e,t):"ease-out":X5(e)?ao(e):Array.isArray(e)?e.map(n=>f6(n,t)||q3.easeOut):q3[e]}function ej(e,t,n,{delay:a=0,duration:o=300,repeat:l=0,repeatType:d="loop",ease:u="easeOut",times:f}={},m=void 0){const g={[t]:n};f&&(g.offset=f);const v=f6(u,o);Array.isArray(v)&&(g.easing=v);const y={delay:a,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:d==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),e.animate(g,y)}function h6(e){return typeof e=="function"&&"applyToOptions"in e}function tj({type:e,...t}){return h6(e)&&u6()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class ij extends Up{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:a,keyframes:o,pseudoElement:l,allowFlatten:d=!1,finalKeyframe:u,onComplete:f}=t;this.isPseudoElement=!!l,this.allowFlatten=d,this.options=t,wo(typeof t.type!="string");const m=tj(t);this.animation=ej(n,a,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=Ip(o,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(g):KE(n,a,g),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,a;const t=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return qi(Number(t))}get time(){return qi(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Gi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&d6()?(this.animation.timeline=t,qt):n(this)}}const p6={anticipate:q5,backInOut:G5,circInOut:Y5};function nj(e){return e in p6}function aj(e){typeof e.ease=="string"&&nj(e.ease)&&(e.ease=p6[e.ease])}const Y3=10;class rj extends ij{constructor(t){aj(t),o6(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:o,element:l,...d}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const u=new _p({...d,autoplay:!1}),f=Gi(this.finishedTime??this.time);n.setWithVelocity(u.sample(f-Y3).value,u.sample(f).value,Y3),u.stop()}}const F3=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Wn.test(e)||e==="0")&&!e.startsWith("url("));function sj(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function oj(e,t,n,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],d=F3(o,t),u=F3(l,t);return!d||!u?!1:sj(e)||(n==="spring"||h6(n))&&a}function Rh(e){e.duration=0,e.type}const lj=new Set(["opacity","clipPath","filter","transform"]),cj=Lp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function dj(e){var g;const{motionValue:t,name:n,repeatDelay:a,repeatType:o,damping:l,type:d}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:m}=t.owner.getProps();return cj()&&n&&lj.has(n)&&(n!=="transform"||!m)&&!f&&!a&&o!=="mirror"&&l!==0&&d!=="inertia"}const uj=40;class fj extends Up{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:d="loop",keyframes:u,name:f,motionValue:m,element:g,...v}){var b;super(),this.stop=()=>{var j,L;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=Gt.now();const y={autoplay:t,delay:n,type:a,repeat:o,repeatDelay:l,repeatType:d,name:f,motionValue:m,element:g,...v},S=(g==null?void 0:g.KeyframeResolver)||Gp;this.keyframeResolver=new S(u,(j,L,M)=>this.onKeyframesResolved(j,L,y,!M),f,m,g),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,a,o){this.keyframeResolver=void 0;const{name:l,type:d,velocity:u,delay:f,isHandoff:m,onUpdate:g}=a;this.resolvedAt=Gt.now(),oj(t,l,d,u)||((xn.instantAnimations||!f)&&(g==null||g(Ip(t,a,n))),t[0]=t[t.length-1],Rh(a),a.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>uj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},S=!m&&dj(y)?new rj({...y,element:y.motionValue.owner.current}):new _p(y);S.finished.then(()=>this.notifyFinished()).catch(qt),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),ZE()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const hj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pj(e){const t=hj.exec(e);if(!t)return[,];const[,n,a,o]=t;return[`--${n??a}`,o]}function m6(e,t,n=1){const[a,o]=pj(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const d=l.trim();return N5(d)?parseFloat(d):d}return Dp(o)?m6(o,t,n+1):o}function qp(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const g6=new Set(["width","height","top","left","right","bottom",...Fr]),mj={test:e=>e==="auto",parse:e=>e},x6=e=>t=>t.test(e),v6=[Yr,ge,Yi,Yn,cE,lE,mj],X3=e=>v6.find(x6(e));function gj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||B5(e):!0}const xj=new Set(["brightness","contrast","saturate","opacity"]);function vj(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(zp)||[];if(!a)return e;const o=n.replace(a,"");let l=xj.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+o+")"}const yj=/\b([a-z-]*)\(.*?\)/gu,kh={...Wn,getAnimatableNone:e=>{const t=e.match(yj);return t?t.map(vj).join(" "):e}},Z3={...Yr,transform:Math.round},wj={rotate:Yn,rotateX:Yn,rotateY:Yn,rotateZ:Yn,scale:ac,scaleX:ac,scaleY:ac,scaleZ:ac,skew:Yn,skewX:Yn,skewY:Yn,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:bo,originX:z3,originY:z3,originZ:ge},Yp={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,backgroundPositionX:ge,backgroundPositionY:ge,...wj,zIndex:Z3,fillOpacity:bo,strokeOpacity:bo,numOctaves:Z3},bj={...Yp,color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,filter:kh,WebkitFilter:kh},y6=e=>bj[e];function w6(e,t){let n=y6(e);return n!==kh&&(n=Wn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Sj=new Set(["auto","none","0"]);function Cj(e,t,n){let a=0,o;for(;a<e.length&&!o;){const l=e[a];typeof l=="string"&&!Sj.has(l)&&So(l).values.length&&(o=e[a]),a++}if(o&&n)for(const l of t)e[l]=w6(n,o)}class Tj extends Gp{constructor(t,n,a,o,l){super(t,n,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let m=t[f];if(typeof m=="string"&&(m=m.trim(),Dp(m))){const g=m6(m,n.current);g!==void 0&&(t[f]=g),f===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!g6.has(a)||t.length!==2)return;const[o,l]=t,d=X3(o),u=X3(l);if(d!==u)if(G3(d)&&G3(u))for(let f=0;f<t.length;f++){const m=t[f];typeof m=="string"&&(t[f]=parseFloat(m))}else Ta[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||gj(t[o]))&&a.push(o);a.length&&Cj(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ta[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var u;const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const l=a.length-1,d=a[l];a[l]=Ta[n](t.measureViewportBox(),window.getComputedStyle(t.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([f,m])=>{t.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function Fp(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const b6=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Xp(e){return $5(e)&&"offsetHeight"in e}const W3=30,Ej=e=>!isNaN(parseFloat(e)),lo={current:void 0};class jj{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var l;const o=Gt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Gt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Ej(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Op);const a=this.events[t].add(n);return t==="change"?()=>{a(),Ne.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return lo.current&&lo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Gt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>W3)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,W3);return Rp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ai(e,t){return new jj(e,t)}const{schedule:Zp}=Z5(queueMicrotask,!1),ji={x:!1,y:!1};function S6(){return ji.x||ji.y}function Aj(e){return e==="x"||e==="y"?ji[e]?null:(ji[e]=!0,()=>{ji[e]=!1}):ji.x||ji.y?null:(ji.x=ji.y=!0,()=>{ji.x=ji.y=!1})}function C6(e,t){const n=Fp(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[n,o,()=>a.abort()]}function K3(e){return!(e.pointerType==="touch"||S6())}function Mj(e,t,n={}){const[a,o,l]=C6(e,n),d=u=>{if(!K3(u))return;const{target:f}=u,m=t(f,u);if(typeof m!="function"||!f)return;const g=v=>{K3(v)&&(m(v),f.removeEventListener("pointerleave",g))};f.addEventListener("pointerleave",g,o)};return a.forEach(u=>{u.addEventListener("pointerenter",d,o)}),l}const T6=(e,t)=>t?e===t?!0:T6(e,t.parentElement):!1,Wp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Lj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Oj(e){return Lj.has(e.tagName)||e.tabIndex!==-1}const Oc=new WeakSet;function Q3(e){return t=>{t.key==="Enter"&&e(t)}}function p0(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Rj=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=Q3(()=>{if(Oc.has(n))return;p0(n,"down");const o=Q3(()=>{p0(n,"up")}),l=()=>p0(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",l,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function J3(e){return Wp(e)&&!S6()}function kj(e,t,n={}){const[a,o,l]=C6(e,n),d=u=>{const f=u.currentTarget;if(!J3(u))return;Oc.add(f);const m=t(f,u),g=(S,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",y),Oc.has(f)&&Oc.delete(f),J3(S)&&typeof m=="function"&&m(S,{success:b})},v=S=>{g(S,f===window||f===document||n.useGlobalTarget||T6(f,S.target))},y=S=>{g(S,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",y,o)};return a.forEach(u=>{(n.useGlobalTarget?window:u).addEventListener("pointerdown",d,o),Xp(u)&&(u.addEventListener("focus",m=>Rj(m,o)),!Oj(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),l}function Kp(e){return $5(e)&&"ownerSVGElement"in e}const Rc=new WeakMap;let Fn;const E6=(e,t,n)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:Kp(a)&&"getBBox"in a?a.getBBox()[t]:a[n],Vj=E6("inline","width","offsetWidth"),Hj=E6("block","height","offsetHeight");function Dj({target:e,borderBoxSize:t}){var n;(n=Rc.get(e))==null||n.forEach(a=>{a(e,{get width(){return Vj(e,t)},get height(){return Hj(e,t)}})})}function zj(e){e.forEach(Dj)}function Pj(){typeof ResizeObserver>"u"||(Fn=new ResizeObserver(zj))}function Nj(e,t){Fn||Pj();const n=Fp(e);return n.forEach(a=>{let o=Rc.get(a);o||(o=new Set,Rc.set(a,o)),o.add(t),Fn==null||Fn.observe(a)}),()=>{n.forEach(a=>{const o=Rc.get(a);o==null||o.delete(t),o!=null&&o.size||Fn==null||Fn.unobserve(a)})}}const kc=new Set;let Cr;function $j(){Cr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};kc.forEach(t=>t(e))},window.addEventListener("resize",Cr)}function Bj(e){return kc.add(e),Cr||$j(),()=>{kc.delete(e),!kc.size&&typeof Cr=="function"&&(window.removeEventListener("resize",Cr),Cr=void 0)}}function Ij(e,t){return typeof e=="function"?Bj(e):Nj(e,t)}function j6(e,t){let n;const a=()=>{const{currentTime:o}=t,d=(o===null?0:o.value)/100;n!==d&&e(d),n=d};return Ne.preUpdate(a,!0),()=>Oi(a)}function Uj(e){return Kp(e)&&e.tagName==="svg"}function _j(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],o=e[1+n],l=e[2+n],d=e[3+n],u=Bp(o,l,d);return t?u(a):u}const Ot=e=>!!(e&&e.getVelocity),Gj=[...v6,at,Wn],qj=e=>Gj.find(x6(e)),Sd=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Yj extends R.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const a=n.offsetParent,o=Xp(a)&&a.offsetWidth||0,l=this.props.sizeRef.current;l.height=n.offsetHeight||0,l.width=n.offsetWidth||0,l.top=n.offsetTop,l.left=n.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Fj({children:e,isPresent:t,anchorX:n,root:a}){const o=R.useId(),l=R.useRef(null),d=R.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=R.useContext(Sd);return R.useInsertionEffect(()=>{const{width:f,height:m,top:g,left:v,right:y}=d.current;if(t||!l.current||!f||!m)return;const S=n==="left"?`left: ${v}`:`right: ${y}`;l.current.dataset.motionPopId=o;const b=document.createElement("style");u&&(b.nonce=u);const j=a??document.head;return j.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            ${S}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(b)&&j.removeChild(b)}},[t]),h.jsx(Yj,{isPresent:t,childRef:l,sizeRef:d,children:R.cloneElement(e,{ref:l})})}const Xj=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:o,presenceAffectsLayout:l,mode:d,anchorX:u,root:f})=>{const m=La(Zj),g=R.useId();let v=!0,y=R.useMemo(()=>(v=!1,{id:g,initial:t,isPresent:n,custom:o,onExitComplete:S=>{m.set(S,!0);for(const b of m.values())if(!b)return;a&&a()},register:S=>(m.set(S,!1),()=>m.delete(S))}),[n,m,a]);return l&&v&&(y={...y}),R.useMemo(()=>{m.forEach((S,b)=>m.set(b,!1))},[n]),R.useEffect(()=>{!n&&!m.size&&a&&a()},[n]),d==="popLayout"&&(e=h.jsx(Fj,{isPresent:n,anchorX:u,root:f,children:e})),h.jsx(bd.Provider,{value:y,children:e})};function Zj(){return new Map}function A6(e=!0){const t=R.useContext(bd);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:o}=t,l=R.useId();R.useEffect(()=>{if(e)return o(l)},[e]);const d=R.useCallback(()=>e&&a&&a(l),[l,a,e]);return!n&&a?[!1,d]:[!0]}const rc=e=>e.key||"";function e4(e){const t=[];return R.Children.forEach(e,n=>{R.isValidElement(n)&&t.push(n)}),t}const Qp=({children:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:l="sync",propagate:d=!1,anchorX:u="left",root:f})=>{const[m,g]=A6(d),v=R.useMemo(()=>e4(e),[e]),y=d&&!m?[]:v.map(rc),S=R.useRef(!0),b=R.useRef(v),j=La(()=>new Map),[L,M]=R.useState(v),[E,T]=R.useState(v);ko(()=>{S.current=!1,b.current=v;for(let N=0;N<E.length;N++){const P=rc(E[N]);y.includes(P)?j.delete(P):j.get(P)!==!0&&j.set(P,!1)}},[E,y.length,y.join("-")]);const V=[];if(v!==L){let N=[...v];for(let P=0;P<E.length;P++){const _=E[P],Y=rc(_);y.includes(Y)||(N.splice(P,0,_),V.push(_))}return l==="wait"&&V.length&&(N=V),T(e4(N)),M(v),null}const{forceRender:O}=R.useContext(Ep);return h.jsx(h.Fragment,{children:E.map(N=>{const P=rc(N),_=d&&!m?!1:v===E||y.includes(P),Y=()=>{if(j.has(P))j.set(P,!0);else return;let F=!0;j.forEach(K=>{K||(F=!1)}),F&&(O==null||O(),T(b.current),d&&(g==null||g()),a&&a())};return h.jsx(Xj,{isPresent:_,initial:!S.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:_?void 0:Y,anchorX:u,children:N},P)})})},M6=R.createContext({strict:!1}),t4={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},$r={};for(const e in t4)$r[e]={isEnabled:t=>t4[e].some(n=>!!t[n])};function Wj(e){for(const t in e)$r[t]={...$r[t],...e[t]}}const Kj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Fc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Kj.has(e)}let L6=e=>!Fc(e);function Qj(e){typeof e=="function"&&(L6=t=>t.startsWith("on")?!Fc(t):e(t))}try{Qj(require("@emotion/is-prop-valid").default)}catch{}function Jj(e,t,n){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(L6(o)||n===!0&&Fc(o)||!t&&!Fc(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const Cd=R.createContext({});function Td(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Co(e){return typeof e=="string"||Array.isArray(e)}const Jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],e1=["initial",...Jp];function Ed(e){return Td(e.animate)||e1.some(t=>Co(e[t]))}function O6(e){return!!(Ed(e)||e.variants)}function eA(e,t){if(Ed(e)){const{initial:n,animate:a}=e;return{initial:n===!1||Co(n)?n:void 0,animate:Co(a)?a:void 0}}return e.inherit!==!1?t:{}}function tA(e){const{initial:t,animate:n}=eA(e,R.useContext(Cd));return R.useMemo(()=>({initial:t,animate:n}),[i4(t),i4(n)])}function i4(e){return Array.isArray(e)?e.join(" "):e}const To={};function iA(e){for(const t in e)To[t]=e[t],Hp(t)&&(To[t].isCSSVariable=!0)}function R6(e,{layout:t,layoutId:n}){return Xr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!To[e]||e==="opacity")}const nA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aA=Fr.length;function rA(e,t,n){let a="",o=!0;for(let l=0;l<aA;l++){const d=Fr[l],u=e[d];if(u===void 0)continue;let f=!0;if(typeof u=="number"?f=u===(d.startsWith("scale")?1:0):f=parseFloat(u)===0,!f||n){const m=b6(u,Yp[d]);if(!f){o=!1;const g=nA[d]||d;a+=`${g}(${m}) `}n&&(t[d]=m)}}return a=a.trim(),n?a=n(t,o?"":a):o&&(a="none"),a}function t1(e,t,n){const{style:a,vars:o,transformOrigin:l}=e;let d=!1,u=!1;for(const f in t){const m=t[f];if(Xr.has(f)){d=!0;continue}else if(Hp(f)){o[f]=m;continue}else{const g=b6(m,Yp[f]);f.startsWith("origin")?(u=!0,l[f]=g):a[f]=g}}if(t.transform||(d||n?a.transform=rA(t,e.transform,n):a.transform&&(a.transform="none")),u){const{originX:f="50%",originY:m="50%",originZ:g=0}=l;a.transformOrigin=`${f} ${m} ${g}`}}const i1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function k6(e,t,n){for(const a in t)!Ot(t[a])&&!R6(a,n)&&(e[a]=t[a])}function sA({transformTemplate:e},t){return R.useMemo(()=>{const n=i1();return t1(n,t,e),Object.assign({},n.vars,n.style)},[t])}function oA(e,t){const n=e.style||{},a={};return k6(a,n,e),Object.assign(a,sA(e,t)),a}function lA(e,t){const n={},a=oA(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const cA={offset:"stroke-dashoffset",array:"stroke-dasharray"},dA={offset:"strokeDashoffset",array:"strokeDasharray"};function uA(e,t,n=1,a=0,o=!0){e.pathLength=1;const l=o?cA:dA;e[l.offset]=ge.transform(-a);const d=ge.transform(t),u=ge.transform(n);e[l.array]=`${d} ${u}`}function V6(e,{attrX:t,attrY:n,attrScale:a,pathLength:o,pathSpacing:l=1,pathOffset:d=0,...u},f,m,g){if(t1(e,u,m),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:y}=e;v.transform&&(y.transform=v.transform,delete v.transform),(y.transform||v.transformOrigin)&&(y.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),a!==void 0&&(v.scale=a),o!==void 0&&uA(v,o,l,d,!1)}const H6=()=>({...i1(),attrs:{}}),D6=e=>typeof e=="string"&&e.toLowerCase()==="svg";function fA(e,t,n,a){const o=R.useMemo(()=>{const l=H6();return V6(l,t,D6(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};k6(l,e.style,e),o.style={...l,...o.style}}return o}const hA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function n1(e){return typeof e!="string"||e.includes("-")?!1:!!(hA.indexOf(e)>-1||/[A-Z]/u.test(e))}function pA(e,t,n,{latestValues:a},o,l=!1){const u=(n1(e)?fA:lA)(t,a,o,e),f=Jj(t,typeof e=="string",l),m=e!==R.Fragment?{...f,...u,ref:n}:{},{children:g}=t,v=R.useMemo(()=>Ot(g)?g.get():g,[g]);return R.createElement(e,{...m,children:v})}function n4(e){const t=[{},{}];return e==null||e.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function a1(e,t,n,a){if(typeof t=="function"){const[o,l]=n4(a);t=t(n!==void 0?n:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=n4(a);t=t(n!==void 0?n:e.custom,o,l)}return t}function Vc(e){return Ot(e)?e.get():e}function mA({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,o){return{latestValues:gA(n,a,o,e),renderState:t()}}function gA(e,t,n,a){const o={},l=a(e,{});for(const y in l)o[y]=Vc(l[y]);let{initial:d,animate:u}=e;const f=Ed(e),m=O6(e);t&&m&&!f&&e.inherit!==!1&&(d===void 0&&(d=t.initial),u===void 0&&(u=t.animate));let g=n?n.initial===!1:!1;g=g||d===!1;const v=g?u:d;if(v&&typeof v!="boolean"&&!Td(v)){const y=Array.isArray(v)?v:[v];for(let S=0;S<y.length;S++){const b=a1(e,y[S]);if(b){const{transitionEnd:j,transition:L,...M}=b;for(const E in M){let T=M[E];if(Array.isArray(T)){const V=g?T.length-1:0;T=T[V]}T!==null&&(o[E]=T)}for(const E in j)o[E]=j[E]}}}return o}const z6=e=>(t,n)=>{const a=R.useContext(Cd),o=R.useContext(bd),l=()=>mA(e,t,a,o);return n?l():La(l)};function r1(e,t,n){var l;const{style:a}=e,o={};for(const d in a)(Ot(a[d])||t.style&&Ot(t.style[d])||R6(d,e)||((l=n==null?void 0:n.getValue(d))==null?void 0:l.liveStyle)!==void 0)&&(o[d]=a[d]);return o}const xA=z6({scrapeMotionValuesFromProps:r1,createRenderState:i1});function P6(e,t,n){const a=r1(e,t,n);for(const o in e)if(Ot(e[o])||Ot(t[o])){const l=Fr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=e[o]}return a}const vA=z6({scrapeMotionValuesFromProps:P6,createRenderState:H6}),yA=Symbol.for("motionComponentSymbol");function Tr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function wA(e,t,n){return R.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),n&&(typeof n=="function"?n(a):Tr(n)&&(n.current=a))},[t])}const s1=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),bA="framerAppearId",N6="data-"+s1(bA),$6=R.createContext({});function SA(e,t,n,a,o){var j,L;const{visualElement:l}=R.useContext(Cd),d=R.useContext(M6),u=R.useContext(bd),f=R.useContext(Sd).reducedMotion,m=R.useRef(null);a=a||d.renderer,!m.current&&a&&(m.current=a(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:f}));const g=m.current,v=R.useContext($6);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&CA(m.current,n,o,v);const y=R.useRef(!1);R.useInsertionEffect(()=>{g&&y.current&&g.update(n,u)});const S=n[N6],b=R.useRef(!!S&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,S))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,S)));return ko(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),b.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(!b.current&&g.animationState&&g.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,S)}),b.current=!1),g.enteringChildren=void 0)}),g}function CA(e,t,n,a){const{layoutId:o,layout:l,drag:d,dragConstraints:u,layoutScroll:f,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:B6(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!d||u&&Tr(u),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:f,layoutRoot:m})}function B6(e){if(e)return e.options.allowProjection!==!1?e.projection:B6(e.parent)}function m0(e,{forwardMotionProps:t=!1}={},n,a){n&&Wj(n);const o=n1(e)?vA:xA;function l(u,f){let m;const g={...R.useContext(Sd),...u,layoutId:TA(u)},{isStatic:v}=g,y=tA(u),S=o(u,v);if(!v&&jp){EA();const b=jA(g);m=b.MeasureLayout,y.visualElement=SA(e,S,g,a,b.ProjectionNode)}return h.jsxs(Cd.Provider,{value:y,children:[m&&y.visualElement?h.jsx(m,{visualElement:y.visualElement,...g}):null,pA(e,u,wA(S,y.visualElement,f),S,v,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const d=R.forwardRef(l);return d[yA]=e,d}function TA({layoutId:e}){const t=R.useContext(Ep).id;return t&&e!==void 0?t+"-"+e:e}function EA(e,t){R.useContext(M6).strict}function jA(e){const{drag:t,layout:n}=$r;if(!t&&!n)return{};const a={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function AA(e,t){if(typeof Proxy>"u")return m0;const n=new Map,a=(l,d)=>m0(l,d,e,t),o=(l,d)=>a(l,d);return new Proxy(o,{get:(l,d)=>d==="create"?a:(n.has(d)||n.set(d,m0(d,void 0,e,t)),n.get(d))})}function I6({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function MA({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function LA(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function g0(e){return e===void 0||e===1}function Vh({scale:e,scaleX:t,scaleY:n}){return!g0(e)||!g0(t)||!g0(n)}function ya(e){return Vh(e)||U6(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function U6(e){return a4(e.x)||a4(e.y)}function a4(e){return e&&e!=="0%"}function Xc(e,t,n){const a=e-n,o=t*a;return n+o}function r4(e,t,n,a,o){return o!==void 0&&(e=Xc(e,o,a)),Xc(e,n,a)+t}function Hh(e,t=0,n=1,a,o){e.min=r4(e.min,t,n,a,o),e.max=r4(e.max,t,n,a,o)}function _6(e,{x:t,y:n}){Hh(e.x,t.translate,t.scale,t.originPoint),Hh(e.y,n.translate,n.scale,n.originPoint)}const s4=.999999999999,o4=1.0000000000001;function OA(e,t,n,a=!1){const o=n.length;if(!o)return;t.x=t.y=1;let l,d;for(let u=0;u<o;u++){l=n[u],d=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&jr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),d&&(t.x*=d.x.scale,t.y*=d.y.scale,_6(e,d)),a&&ya(l.latestValues)&&jr(e,l.latestValues))}t.x<o4&&t.x>s4&&(t.x=1),t.y<o4&&t.y>s4&&(t.y=1)}function Er(e,t){e.min=e.min+t,e.max=e.max+t}function l4(e,t,n,a,o=.5){const l=Xe(e.min,e.max,o);Hh(e,t,n,l,a)}function jr(e,t){l4(e.x,t.x,t.scaleX,t.scale,t.originX),l4(e.y,t.y,t.scaleY,t.scale,t.originY)}function G6(e,t){return I6(LA(e.getBoundingClientRect(),t))}function RA(e,t,n){const a=G6(e,n),{scroll:o}=t;return o&&(Er(a.x,o.offset.x),Er(a.y,o.offset.y)),a}const c4=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ar=()=>({x:c4(),y:c4()}),d4=()=>({min:0,max:0}),tt=()=>({x:d4(),y:d4()}),Dh={current:null},q6={current:!1};function kA(){if(q6.current=!0,!!jp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dh.current=e.matches;e.addEventListener("change",t),t()}else Dh.current=!1}const VA=new WeakMap;function HA(e,t,n){for(const a in t){const o=t[a],l=n[a];if(Ot(o))e.addValue(a,o);else if(Ot(l))e.addValue(a,Ai(o,{owner:e}));else if(l!==o)if(e.hasValue(a)){const d=e.getValue(a);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=e.getStaticValue(a);e.addValue(a,Ai(d!==void 0?d:o,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const u4=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class DA{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:d},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Gt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ne.render(this.render,!1,!0))};const{latestValues:f,renderState:m}=d;this.latestValues=f,this.baseTarget={...f},this.initialValues=n.initial?{...f}:{},this.renderState=m,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!l,this.isControllingVariants=Ed(n),this.isVariantNode=O6(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in v){const S=v[y];f[y]!==void 0&&Ot(S)&&S.set(f[y])}}mount(t){var n;this.current=t,VA.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),q6.current||kA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dh.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Oi(this.notifyUpdate),Oi(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const a=this.features[n];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=Xr.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",d=>{this.latestValues[t]=d,this.props.onUpdate&&Ne.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in $r){const n=$r[t];if(!n)continue;const{isEnabled:a,Feature:o}=n;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<u4.length;a++){const o=u4[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,d=t[l];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=HA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=Ai(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(N5(a)||B5(a))?a=parseFloat(a):!qj(a)&&Wn.test(n)&&(a=w6(t,n)),this.setBaseTarget(t,Ot(a)?a.get():a)),Ot(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var l;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const d=a1(this.props,n,(l=this.presenceContext)==null?void 0:l.custom);d&&(a=d[t])}if(n&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Ot(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Op),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Zp.render(this.render)}}class Y6 extends DA{constructor(){super(...arguments),this.KeyframeResolver=Tj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ot(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function F6(e,{style:t,vars:n},a,o){const l=e.style;let d;for(d in t)l[d]=t[d];o==null||o.applyProjectionStyles(l,a);for(d in n)l.setProperty(d,n[d])}function zA(e){return window.getComputedStyle(e)}class PA extends Y6{constructor(){super(...arguments),this.type="html",this.renderInstance=F6}readValueFromInstance(t,n){var a;if(Xr.has(n))return(a=this.projection)!=null&&a.isProjecting?jh(n):GE(t,n);{const o=zA(t),l=(Hp(n)?o.getPropertyValue(n):o[n])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:n}){return G6(t,n)}build(t,n,a){t1(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return r1(t,n,a)}}const X6=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function NA(e,t,n,a){F6(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(X6.has(o)?o:s1(o),t.attrs[o])}class $A extends Y6{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tt}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Xr.has(n)){const a=y6(n);return a&&a.default||0}return n=X6.has(n)?n:s1(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return P6(t,n,a)}build(t,n,a){V6(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,o){NA(t,n,a,o)}mount(t){this.isSVGTag=D6(t.tagName),super.mount(t)}}const BA=(e,t)=>n1(e)?new $A(t):new PA(t,{allowProjection:e!==R.Fragment});function Lr(e,t,n){const a=e.getProps();return a1(a,t,n!==void 0?n:a.custom,e)}const zh=e=>Array.isArray(e);function IA(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ai(n))}function UA(e){return zh(e)?e[e.length-1]||0:e}function o1(e,t){const n=Lr(e,t);let{transitionEnd:a={},transition:o={},...l}=n||{};l={...l,...a};for(const d in l){const u=UA(l[d]);IA(e,d,u)}}function _A(e){return!!(Ot(e)&&e.add)}function Ph(e,t){const n=e.getValue("willChange");if(_A(n))return n.add(t);if(!n&&xn.WillChange){const a=new xn.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function Z6(e){return e.props[N6]}const GA=e=>e!==null;function qA(e,{repeat:t,repeatType:n="loop"},a){const o=e.filter(GA),l=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[l]}const YA={type:"spring",stiffness:500,damping:25,restSpeed:10},FA=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),XA={type:"keyframes",duration:.8},ZA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},WA=(e,{keyframes:t})=>t.length>2?XA:Xr.has(e)?e.startsWith("scale")?FA(t[1]):YA:ZA;function KA({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:d,repeatDelay:u,from:f,elapsed:m,...g}){return!!Object.keys(g).length}const l1=(e,t,n,a={},o,l)=>d=>{const u=qp(a,e)||{},f=u.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Gi(f);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...u,delay:-m,onUpdate:y=>{t.set(y),u.onUpdate&&u.onUpdate(y)},onComplete:()=>{d(),u.onComplete&&u.onComplete()},name:e,motionValue:t,element:l?void 0:o};KA(u)||Object.assign(g,WA(e,g)),g.duration&&(g.duration=Gi(g.duration)),g.repeatDelay&&(g.repeatDelay=Gi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Rh(g),g.delay===0&&(v=!0)),(xn.instantAnimations||xn.skipAnimations)&&(v=!0,Rh(g),g.delay=0),g.allowFlatten=!u.type&&!u.ease,v&&!l&&t.get()!==void 0){const y=qA(g.keyframes,u);if(y!==void 0){Ne.update(()=>{g.onUpdate(y),g.onComplete()});return}}return u.isSync?new _p(g):new fj(g)};function QA({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function W6(e,t,{delay:n=0,transitionOverride:a,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:d,...u}=t;a&&(l=a);const f=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in u){const v=e.getValue(g,e.latestValues[g]??null),y=u[g];if(y===void 0||m&&QA(m,g))continue;const S={delay:n,...qp(l||{},g)},b=v.get();if(b!==void 0&&!v.isAnimating&&!Array.isArray(y)&&y===b&&!S.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const M=Z6(e);if(M){const E=window.MotionHandoffAnimation(M,g,Ne);E!==null&&(S.startTime=E,j=!0)}}Ph(e,g),v.start(l1(g,v,y,e.shouldReduceMotion&&g6.has(g)?{type:!1}:S,e,j));const L=v.animation;L&&f.push(L)}return d&&Promise.all(f).then(()=>{Ne.update(()=>{d&&o1(e,d)})}),f}function K6(e,t,n,a=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),d=e.size,u=(d-1)*a;return typeof n=="function"?n(l,d):o===1?l*a:u-l*a}function Nh(e,t,n={}){var f;const a=Lr(e,t,n.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(o=n.transitionOverride);const l=a?()=>Promise.all(W6(e,a,n)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:y}=o;return JA(e,t,m,g,v,y,n)}:()=>Promise.resolve(),{when:u}=o;if(u){const[m,g]=u==="beforeChildren"?[l,d]:[d,l];return m().then(()=>g())}else return Promise.all([l(),d(n.delay)])}function JA(e,t,n=0,a=0,o=0,l=1,d){const u=[];for(const f of e.variantChildren)f.notify("AnimationStart",t),u.push(Nh(f,t,{...d,delay:n+(typeof a=="function"?0:a)+K6(e.variantChildren,f,a,o,l)}).then(()=>f.notify("AnimationComplete",t)));return Promise.all(u)}function Q6(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(l=>Nh(e,l,n));a=Promise.all(o)}else if(typeof t=="string")a=Nh(e,t,n);else{const o=typeof t=="function"?Lr(e,t,n.custom):t;a=Promise.all(W6(e,o,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}function J6(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const eM=e1.length;function ew(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ew(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<eM;n++){const a=e1[n],o=e.props[a];(Co(o)||o===!1)&&(t[a]=o)}return t}const tM=[...Jp].reverse(),iM=Jp.length;function nM(e){return t=>Promise.all(t.map(({animation:n,options:a})=>Q6(e,n,a)))}function aM(e){let t=nM(e),n=f4(),a=!0;const o=f=>(m,g)=>{var y;const v=Lr(e,g,f==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(v){const{transition:S,transitionEnd:b,...j}=v;m={...m,...j,...b}}return m};function l(f){t=f(e)}function d(f){const{props:m}=e,g=ew(e.parent)||{},v=[],y=new Set;let S={},b=1/0;for(let L=0;L<iM;L++){const M=tM[L],E=n[M],T=m[M]!==void 0?m[M]:g[M],V=Co(T),O=M===f?E.isActive:null;O===!1&&(b=L);let N=T===g[M]&&T!==m[M]&&V;if(N&&a&&e.manuallyAnimateOnMount&&(N=!1),E.protectedKeys={...S},!E.isActive&&O===null||!T&&!E.prevProp||Td(T)||typeof T=="boolean")continue;const P=rM(E.prevProp,T);let _=P||M===f&&E.isActive&&!N&&V||L>b&&V,Y=!1;const F=Array.isArray(T)?T:[T];let K=F.reduce(o(M),{});O===!1&&(K={});const{prevResolvedValues:ne={}}=E,le={...ne,...K},ue=W=>{_=!0,y.has(W)&&(Y=!0,y.delete(W)),E.needsAnimating[W]=!0;const J=e.getValue(W);J&&(J.liveStyle=!1)};for(const W in le){const J=K[W],ie=ne[W];if(S.hasOwnProperty(W))continue;let k=!1;zh(J)&&zh(ie)?k=!J6(J,ie):k=J!==ie,k?J!=null?ue(W):y.add(W):J!==void 0&&y.has(W)?ue(W):E.protectedKeys[W]=!0}E.prevProp=T,E.prevResolvedValues=K,E.isActive&&(S={...S,...K}),a&&e.blockInitialAnimation&&(_=!1);const oe=N&&P;_&&(!oe||Y)&&v.push(...F.map(W=>{const J={type:M};if(typeof W=="string"&&a&&!oe&&e.manuallyAnimateOnMount&&e.parent){const{parent:ie}=e,k=Lr(ie,W);if(ie.enteringChildren&&k){const{delayChildren:X}=k.transition||{};J.delay=K6(ie.enteringChildren,e,X)}}return{animation:W,options:J}}))}if(y.size){const L={};if(typeof m.initial!="boolean"){const M=Lr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);M&&M.transition&&(L.transition=M.transition)}y.forEach(M=>{const E=e.getBaseTarget(M),T=e.getValue(M);T&&(T.liveStyle=!0),L[M]=E??null}),v.push({animation:L})}let j=!!v.length;return a&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(v):Promise.resolve()}function u(f,m){var v;if(n[f].isActive===m)return Promise.resolve();(v=e.variantChildren)==null||v.forEach(y=>{var S;return(S=y.animationState)==null?void 0:S.setActive(f,m)}),n[f].isActive=m;const g=d(f);for(const y in n)n[y].protectedKeys={};return g}return{animateChanges:d,setActive:u,setAnimateFunction:l,getState:()=>n,reset:()=>{n=f4(),a=!0}}}function rM(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!J6(t,e):!1}function va(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function f4(){return{animate:va(!0),whileInView:va(),whileHover:va(),whileTap:va(),whileDrag:va(),whileFocus:va(),exit:va()}}class Qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class sM extends Qn{constructor(t){super(t),t.animationState||(t.animationState=aM(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Td(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let oM=0;class lM extends Qn{constructor(){super(...arguments),this.id=oM++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const cM={animation:{Feature:sM},exit:{Feature:lM}};function Eo(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}function zo(e){return{point:{x:e.pageX,y:e.pageY}}}const dM=e=>t=>Wp(t)&&e(t,zo(t));function co(e,t,n,a){return Eo(e,t,dM(n),a)}const tw=1e-4,uM=1-tw,fM=1+tw,iw=.01,hM=0-iw,pM=0+iw;function Dt(e){return e.max-e.min}function mM(e,t,n){return Math.abs(e-t)<=n}function h4(e,t,n,a=.5){e.origin=a,e.originPoint=Xe(t.min,t.max,e.origin),e.scale=Dt(n)/Dt(t),e.translate=Xe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=uM&&e.scale<=fM||isNaN(e.scale))&&(e.scale=1),(e.translate>=hM&&e.translate<=pM||isNaN(e.translate))&&(e.translate=0)}function uo(e,t,n,a){h4(e.x,t.x,n.x,a?a.originX:void 0),h4(e.y,t.y,n.y,a?a.originY:void 0)}function p4(e,t,n){e.min=n.min+t.min,e.max=e.min+Dt(t)}function gM(e,t,n){p4(e.x,t.x,n.x),p4(e.y,t.y,n.y)}function m4(e,t,n){e.min=t.min-n.min,e.max=e.min+Dt(t)}function fo(e,t,n){m4(e.x,t.x,n.x),m4(e.y,t.y,n.y)}function yi(e){return[e("x"),e("y")]}const nw=({current:e})=>e?e.ownerDocument.defaultView:null,g4=(e,t)=>Math.abs(e-t);function xM(e,t){const n=g4(e.x,t.x),a=g4(e.y,t.y);return Math.sqrt(n**2+a**2)}class aw{constructor(t,n,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=v0(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,b=xM(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!b)return;const{point:j}=y,{timestamp:L}=gt;this.history.push({...j,timestamp:L});const{onStart:M,onMove:E}=this.handlers;S||(M&&M(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,y)},this.handlePointerMove=(y,S)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=x0(S,this.transformPagePoint),Ne.update(this.updatePoint,!0)},this.handlePointerUp=(y,S)=>{this.end();const{onEnd:b,onSessionEnd:j,resumeAnimation:L}=this.handlers;if(this.dragSnapToOrigin&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=v0(y.type==="pointercancel"?this.lastMoveEventInfo:x0(S,this.transformPagePoint),this.history);this.startEvent&&b&&b(y,M),j&&j(y,M)},!Wp(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=o||window;const u=zo(t),f=x0(u,this.transformPagePoint),{point:m}=f,{timestamp:g}=gt;this.history=[{...m,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,v0(f,this.history)),this.removeListeners=Vo(co(this.contextWindow,"pointermove",this.handlePointerMove),co(this.contextWindow,"pointerup",this.handlePointerUp),co(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Oi(this.updatePoint)}}function x0(e,t){return t?{point:t(e.point)}:e}function x4(e,t){return{x:e.x-t.x,y:e.y-t.y}}function v0({point:e},t){return{point:e,delta:x4(e,rw(t)),offset:x4(e,vM(t)),velocity:yM(t,.1)}}function vM(e){return e[0]}function rw(e){return e[e.length-1]}function yM(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const o=rw(e);for(;n>=0&&(a=e[n],!(o.timestamp-a.timestamp>Gi(t)));)n--;if(!a)return{x:0,y:0};const l=qi(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const d={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function wM(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?Xe(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?Xe(n,e,a.max):Math.min(e,n)),e}function v4(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function bM(e,{top:t,left:n,bottom:a,right:o}){return{x:v4(e.x,n,o),y:v4(e.y,t,a)}}function y4(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function SM(e,t){return{x:y4(e.x,t.x),y:y4(e.y,t.y)}}function CM(e,t){let n=.5;const a=Dt(e),o=Dt(t);return o>a?n=Nr(t.min,t.max-a,e.min):a>o&&(n=Nr(e.min,e.max-o,t.min)),Xi(0,1,n)}function TM(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const $h=.35;function EM(e=$h){return e===!1?e=0:e===!0&&(e=$h),{x:w4(e,"left","right"),y:w4(e,"top","bottom")}}function w4(e,t,n){return{min:b4(e,t),max:b4(e,n)}}function b4(e,t){return typeof e=="number"?e:e[t]||0}const jM=new WeakMap;class AM{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(zo(v).point)},d=(v,y)=>{const{drag:S,dragPropagation:b,onDragStart:j}=this.getProps();if(S&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Aj(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yi(M=>{let E=this.getAxisMotionValue(M).get()||0;if(Yi.test(E)){const{projection:T}=this.visualElement;if(T&&T.layout){const V=T.layout.layoutBox[M];V&&(E=Dt(V)*(parseFloat(E)/100))}}this.originPoint[M]=E}),j&&Ne.postRender(()=>j(v,y)),Ph(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},u=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y;const{dragPropagation:S,dragDirectionLock:b,onDirectionLock:j,onDrag:L}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:M}=y;if(b&&this.currentDirection===null){this.currentDirection=MM(M),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",y.point,M),this.updateAxis("y",y.point,M),this.visualElement.render(),L&&L(v,y)},f=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y,this.stop(v,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>yi(v=>{var y;return this.getAnimationState(v)==="paused"&&((y=this.getAxisMotionValue(v).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new aw(t,{onSessionStart:l,onStart:d,onMove:u,onSessionEnd:f,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:nw(this.visualElement)})}stop(t,n){const a=t||this.latestPointerEvent,o=n||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!a)return;const{velocity:d}=o;this.startAnimation(d);const{onDragEnd:u}=this.getProps();u&&Ne.postRender(()=>u(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,a){const{drag:o}=this.getProps();if(!a||!sc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let d=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(d=wM(d,this.constraints[t],this.elastic[t])),l.set(d)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Tr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=bM(a.layoutBox,t):this.constraints=!1,this.elastic=EM(n),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&yi(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=TM(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Tr(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=RA(a,o.root,this.visualElement.getTransformPagePoint());let d=SM(o.layout.layoutBox,l);if(n){const u=n(MA(d));this.hasMutatedConstraints=!!u,u&&(d=I6(u))}return d}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:d,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},m=yi(g=>{if(!sc(g,n,this.currentDirection))return;let v=f&&f[g]||{};d&&(v={min:0,max:0});const y=o?200:1e6,S=o?40:1e7,b={type:"inertia",velocity:a?t[g]:0,bounceStiffness:y,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(g,b)});return Promise.all(m).then(u)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return Ph(this.visualElement,t),a.start(l1(t,a,0,n,this.visualElement,!1))}stopAnimation(){yi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){yi(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[n];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){yi(n=>{const{drag:a}=this.getProps();if(!sc(n,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(n);if(o&&o.layout){const{min:d,max:u}=o.layout.layoutBox[n];l.set(t[n]-Xe(d,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Tr(n)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};yi(d=>{const u=this.getAxisMotionValue(d);if(u&&this.constraints!==!1){const f=u.get();o[d]=CM({min:f,max:f},this.constraints[d])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),yi(d=>{if(!sc(d,t,null))return;const u=this.getAxisMotionValue(d),{min:f,max:m}=this.constraints[d];u.set(Xe(f,m,o[d]))})}addListeners(){if(!this.visualElement.current)return;jM.set(this.visualElement,this);const t=this.visualElement.current,n=co(t,"pointerdown",f=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(f)}),a=()=>{const{dragConstraints:f}=this.getProps();Tr(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ne.read(a);const d=Eo(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m})=>{this.isDragging&&m&&(yi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=f[g].translate,v.set(v.get()+f[g].translate))}),this.visualElement.render())});return()=>{d(),n(),l(),u&&u()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:d=$h,dragMomentum:u=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:d,dragMomentum:u}}}function sc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function MM(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class LM extends Qn{constructor(t){super(t),this.removeGroupControls=qt,this.removeListeners=qt,this.controls=new AM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qt}unmount(){this.removeGroupControls(),this.removeListeners()}}const S4=e=>(t,n)=>{e&&Ne.postRender(()=>e(t,n))};class OM extends Qn{constructor(){super(...arguments),this.removePointerDownListener=qt}onPointerDown(t){this.session=new aw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:S4(t),onStart:S4(n),onMove:a,onEnd:(l,d)=>{delete this.session,o&&Ne.postRender(()=>o(l,d))}}}mount(){this.removePointerDownListener=co(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Hc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function C4(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Qs={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ge.test(e))e=parseFloat(e);else return e;const n=C4(e,t.target.x),a=C4(e,t.target.y);return`${n}% ${a}%`}},RM={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,o=Wn.parse(e);if(o.length>5)return a;const l=Wn.createTransformer(e),d=typeof o[0]!="number"?1:0,u=n.x.scale*t.x,f=n.y.scale*t.y;o[0+d]/=u,o[1+d]/=f;const m=Xe(u,f,.5);return typeof o[2+d]=="number"&&(o[2+d]/=m),typeof o[3+d]=="number"&&(o[3+d]/=m),l(o)}};let y0=!1;class kM extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=t;iA(VM),l&&(n.group&&n.group.add(l),a&&a.register&&o&&a.register(l),y0&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Hc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:o,isPresent:l}=this.props,{projection:d}=a;return d&&(d.isPresent=l,y0=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==l?d.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?d.promote():d.relegate()||Ne.postRender(()=>{const u=d.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Zp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:o}=t;y0=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function sw(e){const[t,n]=A6(),a=R.useContext(Ep);return h.jsx(kM,{...e,layoutGroup:a,switchLayoutGroup:R.useContext($6),isPresent:t,safeToRemove:n})}const VM={borderRadius:{...Qs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Qs,borderTopRightRadius:Qs,borderBottomLeftRadius:Qs,borderBottomRightRadius:Qs,boxShadow:RM};function HM(e,t,n){const a=Ot(e)?e:Ai(e);return a.start(l1("",a,t,n)),a.animation}const DM=(e,t)=>e.depth-t.depth;class zM{constructor(){this.children=[],this.isDirty=!1}add(t){Ap(this.children,t),this.isDirty=!0}remove(t){Mp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(DM),this.isDirty=!1,this.children.forEach(t)}}function PM(e,t){const n=Gt.now(),a=({timestamp:o})=>{const l=o-n;l>=t&&(Oi(a),e(l-t))};return Ne.setup(a,!0),()=>Oi(a)}const ow=["TopLeft","TopRight","BottomLeft","BottomRight"],NM=ow.length,T4=e=>typeof e=="string"?parseFloat(e):e,E4=e=>typeof e=="number"||ge.test(e);function $M(e,t,n,a,o,l){o?(e.opacity=Xe(0,n.opacity??1,BM(a)),e.opacityExit=Xe(t.opacity??1,0,IM(a))):l&&(e.opacity=Xe(t.opacity??1,n.opacity??1,a));for(let d=0;d<NM;d++){const u=`border${ow[d]}Radius`;let f=j4(t,u),m=j4(n,u);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||E4(f)===E4(m)?(e[u]=Math.max(Xe(T4(f),T4(m),a),0),(Yi.test(m)||Yi.test(f))&&(e[u]+="%")):e[u]=m}(t.rotate||n.rotate)&&(e.rotate=Xe(t.rotate||0,n.rotate||0,a))}function j4(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const BM=lw(0,.5,_c),IM=lw(.5,.95,qt);function lw(e,t,n){return a=>a<e?0:a>t?1:n(Nr(e,t,a))}function A4(e,t){e.min=t.min,e.max=t.max}function vi(e,t){A4(e.x,t.x),A4(e.y,t.y)}function M4(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function L4(e,t,n,a,o){return e-=t,e=Xc(e,1/n,a),o!==void 0&&(e=Xc(e,1/o,a)),e}function UM(e,t=0,n=1,a=.5,o,l=e,d=e){if(Yi.test(t)&&(t=parseFloat(t),t=Xe(d.min,d.max,t/100)-d.min),typeof t!="number")return;let u=Xe(l.min,l.max,a);e===l&&(u-=t),e.min=L4(e.min,t,n,u,o),e.max=L4(e.max,t,n,u,o)}function O4(e,t,[n,a,o],l,d){UM(e,t[n],t[a],t[o],t.scale,l,d)}const _M=["x","scaleX","originX"],GM=["y","scaleY","originY"];function R4(e,t,n,a){O4(e.x,t,_M,n?n.x:void 0,a?a.x:void 0),O4(e.y,t,GM,n?n.y:void 0,a?a.y:void 0)}function k4(e){return e.translate===0&&e.scale===1}function cw(e){return k4(e.x)&&k4(e.y)}function V4(e,t){return e.min===t.min&&e.max===t.max}function qM(e,t){return V4(e.x,t.x)&&V4(e.y,t.y)}function H4(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function dw(e,t){return H4(e.x,t.x)&&H4(e.y,t.y)}function D4(e){return Dt(e.x)/Dt(e.y)}function z4(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class YM{constructor(){this.members=[]}add(t){Ap(this.members,t),t.scheduleRender()}remove(t){if(Mp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let a;for(let o=n;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function FM(e,t,n){let a="";const o=e.x.translate/t.x,l=e.y.translate/t.y,d=(n==null?void 0:n.z)||0;if((o||l||d)&&(a=`translate3d(${o}px, ${l}px, ${d}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:m,rotate:g,rotateX:v,rotateY:y,skewX:S,skewY:b}=n;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),v&&(a+=`rotateX(${v}deg) `),y&&(a+=`rotateY(${y}deg) `),S&&(a+=`skewX(${S}deg) `),b&&(a+=`skewY(${b}deg) `)}const u=e.x.scale*t.x,f=e.y.scale*t.y;return(u!==1||f!==1)&&(a+=`scale(${u}, ${f})`),a||"none"}const w0=["","X","Y","Z"],XM=1e3;let ZM=0;function b0(e,t,n,a){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function uw(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Z6(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ne,!(o||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&uw(a)}function fw({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(d={},u=t==null?void 0:t()){this.id=ZM++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(QM),this.nodes.forEach(iL),this.nodes.forEach(nL),this.nodes.forEach(JM)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new zM)}addEventListener(d,u){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Op),this.eventHandlers.get(d).add(u)}notifyListeners(d,...u){const f=this.eventHandlers.get(d);f&&f.notify(...u)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Kp(d)&&!Uj(d),this.instance=d;const{layoutId:u,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||u)&&(this.isLayoutDirty=!0),e){let g,v=0;const y=()=>this.root.updateBlockedByResize=!1;Ne.read(()=>{v=window.innerWidth}),e(d,()=>{const S=window.innerWidth;S!==v&&(v=S,this.root.updateBlockedByResize=!0,g&&g(),g=PM(y,250),Hc.hasAnimatedSinceResize&&(Hc.hasAnimatedSinceResize=!1,this.nodes.forEach($4)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&m&&(u||f)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:y,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||m.getDefaultTransition()||lL,{onLayoutAnimationStart:j,onLayoutAnimationComplete:L}=m.getProps(),M=!this.targetLayout||!dw(this.targetLayout,S),E=!v&&y;if(this.options.layoutRoot||this.resumeFrom||E||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...qp(b,"layout"),onPlay:j,onComplete:L};(m.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(g,E)}else v||$4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Oi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(aL),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&uw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(P4);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(N4);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(tL),this.nodes.forEach(WM),this.nodes.forEach(KM)):this.nodes.forEach(N4),this.clearAllSnapshots();const u=Gt.now();gt.delta=Xi(0,1e3/60,u-gt.timestamp),gt.timestamp=u,gt.isProcessing=!0,c0.update.process(gt),c0.preRender.process(gt),c0.render.process(gt),gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Zp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(eL),this.sharedNodes.forEach(rL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ne.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ne.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Dt(this.snapshot.measuredBox.x)&&!Dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=tt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(u=!1),u&&this.instance){const f=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!cw(this.projectionDelta),f=this.getTransformTemplate(),m=f?f(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;d&&this.instance&&(u||ya(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return d&&(f=this.removeTransform(f)),cL(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:d}=this.options;if(!d)return tt();const u=d.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(dL))){const{scroll:g}=this.root;g&&(Er(u.x,g.offset.x),Er(u.y,g.offset.y))}return u}removeElementScroll(d){var f;const u=tt();if(vi(u,d),(f=this.scroll)!=null&&f.wasRoot)return u;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:v,options:y}=g;g!==this.root&&v&&y.layoutScroll&&(v.wasRoot&&vi(u,d),Er(u.x,v.offset.x),Er(u.y,v.offset.y))}return u}applyTransform(d,u=!1){const f=tt();vi(f,d);for(let m=0;m<this.path.length;m++){const g=this.path[m];!u&&g.options.layoutScroll&&g.scroll&&g!==g.root&&jr(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ya(g.latestValues)&&jr(f,g.latestValues)}return ya(this.latestValues)&&jr(f,this.latestValues),f}removeTransform(d){const u=tt();vi(u,d);for(let f=0;f<this.path.length;f++){const m=this.path[f];if(!m.instance||!ya(m.latestValues))continue;Vh(m.latestValues)&&m.updateSnapshot();const g=tt(),v=m.measurePageBox();vi(g,v),R4(u,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return ya(this.latestValues)&&R4(u,this.latestValues),u}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var y;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==u;if(!(d||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=gt.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),fo(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=tt(),this.targetWithTransforms=tt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vi(this.target,this.layout.layoutBox),_6(this.target,this.targetDelta)):vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),fo(this.relativeTargetOrigin,this.target,S.target),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Vh(this.parent.latestValues)||U6(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const d=this.getLead(),u=!!this.resumingFrom||this!==d;let f=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(f=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===gt.timestamp&&(f=!1),f)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;vi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;OA(this.layoutCorrected,this.treeScale,this.path,u),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=tt());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(M4(this.prevProjectionDelta.x,this.projectionDelta.x),M4(this.prevProjectionDelta.y,this.projectionDelta.y)),uo(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!z4(this.projectionDelta.x,this.prevProjectionDelta.x)||!z4(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ar(),this.projectionDelta=Ar(),this.projectionDeltaWithTransform=Ar()}setAnimationOrigin(d,u=!1){const f=this.snapshot,m=f?f.latestValues:{},g={...this.latestValues},v=Ar();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const y=tt(),S=f?f.source:void 0,b=this.layout?this.layout.source:void 0,j=S!==b,L=this.getStack(),M=!L||L.members.length<=1,E=!!(j&&!M&&this.options.crossfade===!0&&!this.path.some(oL));this.animationProgress=0;let T;this.mixTargetDelta=V=>{const O=V/1e3;B4(v.x,d.x,O),B4(v.y,d.y,O),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fo(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sL(this.relativeTarget,this.relativeTargetOrigin,y,O),T&&qM(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=tt()),vi(T,this.relativeTarget)),j&&(this.animationValues=g,$M(g,m,this.latestValues,O,E,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var u,f,m;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(m=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Oi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ne.update(()=>{Hc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ai(0)),this.currentAnimation=HM(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(XM),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:u,target:f,layout:m,latestValues:g}=d;if(!(!u||!f||!m)){if(this!==d&&this.layout&&m&&hw(this.options.animationType,this.layout.layoutBox,m.layoutBox)){f=this.target||tt();const v=Dt(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+v;const y=Dt(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+y}vi(u,f),jr(u,g),uo(this.projectionDeltaWithTransform,this.layoutCorrected,u,g)}}registerSharedNode(d,u){this.sharedNodes.has(d)||this.sharedNodes.set(d,new YM),this.sharedNodes.get(d).add(u);const m=u.options.initialPromotionConfig;u.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(u):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var u;const{layoutId:d}=this.options;return d?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:d}=this.options;return d?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:u,preserveFollowOpacity:f}={}){const m=this.getStack();m&&m.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let u=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const m={};f.z&&b0("z",d,m,this.animationValues);for(let g=0;g<w0.length;g++)b0(`rotate${w0[g]}`,d,m,this.animationValues),b0(`skew${w0[g]}`,d,m,this.animationValues);d.render();for(const g in m)d.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);d.scheduleRender()}applyProjectionStyles(d,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Vc(u==null?void 0:u.pointerEvents)||"",d.transform=f?f(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Vc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!ya(this.latestValues)&&(d.transform=f?f({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let v=FM(this.projectionDeltaWithTransform,this.treeScale,g);f&&(v=f(g,v)),d.transform=v;const{x:y,y:S}=this.projectionDelta;d.transformOrigin=`${y.origin*100}% ${S.origin*100}% 0`,m.animationValues?d.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in To){if(g[b]===void 0)continue;const{correct:j,applyTo:L,isCSSVariable:M}=To[b],E=v==="none"?g[b]:j(g[b],m);if(L){const T=L.length;for(let V=0;V<T;V++)d[L[V]]=E}else M?this.options.visualElement.renderState.vars[b]=E:d[b]=E}this.options.layoutId&&(d.pointerEvents=m===this?Vc(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var u;return(u=d.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(P4),this.root.sharedNodes.clear()}}}function WM(e){e.updateLayout()}function KM(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:l}=e.options,d=t.source!==e.layout.source;l==="size"?yi(v=>{const y=d?t.measuredBox[v]:t.layoutBox[v],S=Dt(y);y.min=a[v].min,y.max=y.min+S}):hw(l,t.layoutBox,a)&&yi(v=>{const y=d?t.measuredBox[v]:t.layoutBox[v],S=Dt(a[v]);y.max=y.min+S,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[v].max=e.relativeTarget[v].min+S)});const u=Ar();uo(u,a,t.layoutBox);const f=Ar();d?uo(f,e.applyTransform(o,!0),t.measuredBox):uo(f,a,t.layoutBox);const m=!cw(u);let g=!1;if(!e.resumeFrom){const v=e.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:y,layout:S}=v;if(y&&S){const b=tt();fo(b,t.layoutBox,y.layoutBox);const j=tt();fo(j,a,S.layoutBox),dw(b,j)||(g=!0),v.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=b,e.relativeParent=v)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:f,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function QM(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function JM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function eL(e){e.clearSnapshot()}function P4(e){e.clearMeasurements()}function N4(e){e.isLayoutDirty=!1}function tL(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function $4(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function iL(e){e.resolveTargetDelta()}function nL(e){e.calcProjection()}function aL(e){e.resetSkewAndRotation()}function rL(e){e.removeLeadSnapshot()}function B4(e,t,n){e.translate=Xe(t.translate,0,n),e.scale=Xe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function I4(e,t,n,a){e.min=Xe(t.min,n.min,a),e.max=Xe(t.max,n.max,a)}function sL(e,t,n,a){I4(e.x,t.x,n.x,a),I4(e.y,t.y,n.y,a)}function oL(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const lL={duration:.45,ease:[.4,0,.1,1]},U4=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),_4=U4("applewebkit/")&&!U4("chrome/")?Math.round:qt;function G4(e){e.min=_4(e.min),e.max=_4(e.max)}function cL(e){G4(e.x),G4(e.y)}function hw(e,t,n){return e==="position"||e==="preserve-aspect"&&!mM(D4(t),D4(n),.2)}function dL(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const uL=fw({attachResizeListener:(e,t)=>Eo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),S0={current:void 0},pw=fw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!S0.current){const e=new uL({});e.mount(window),e.setOptions({layoutScroll:!0}),S0.current=e}return S0.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),fL={pan:{Feature:OM},drag:{Feature:LM,ProjectionNode:pw,MeasureLayout:sw}};function q4(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,l=a[o];l&&Ne.postRender(()=>l(t,zo(t)))}class hL extends Qn{mount(){const{current:t}=this.node;t&&(this.unmount=Mj(t,(n,a)=>(q4(this.node,a,"Start"),o=>q4(this.node,o,"End"))))}unmount(){}}class pL extends Qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(Eo(this.node.current,"focus",()=>this.onFocus()),Eo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Y4(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),l=a[o];l&&Ne.postRender(()=>l(t,zo(t)))}class mL extends Qn{mount(){const{current:t}=this.node;t&&(this.unmount=kj(t,(n,a)=>(Y4(this.node,a,"Start"),(o,{success:l})=>Y4(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Bh=new WeakMap,C0=new WeakMap,gL=e=>{const t=Bh.get(e.target);t&&t(e)},xL=e=>{e.forEach(gL)};function vL({root:e,...t}){const n=e||document;C0.has(n)||C0.set(n,{});const a=C0.get(n),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(xL,{root:e,...t})),a[o]}function yL(e,t,n){const a=vL(t);return Bh.set(e,n),a.observe(e),()=>{Bh.delete(e),a.unobserve(e)}}const wL={some:0,all:1};class bL extends Qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:o="some",once:l}=t,d={root:n?n.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:wL[o]},u=f=>{const{isIntersecting:m}=f;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),y=m?g:v;y&&y(f)};return yL(this.node.current,d,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(SL(t,n))&&this.startObserver()}unmount(){}}function SL({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const CL={inView:{Feature:bL},tap:{Feature:mL},focus:{Feature:pL},hover:{Feature:hL}},TL={layout:{ProjectionNode:pw,MeasureLayout:sw}},EL={...cM,...CL,...fL,...TL},D=AA(EL,BA),jL=50,F4=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),AL=()=>({time:0,x:F4(),y:F4()}),ML={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function X4(e,t,n,a){const o=n[t],{length:l,position:d}=ML[t],u=o.current,f=n.time;o.current=e[`scroll${d}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Nr(0,o.scrollLength,o.current);const m=a-f;o.velocity=m>jL?0:Rp(o.current-u,m)}function LL(e,t,n){X4(e,"x",t,n),X4(e,"y",t,n),t.time=n}function OL(e,t){const n={x:0,y:0};let a=e;for(;a&&a!==t;)if(Xp(a))n.x+=a.offsetLeft,n.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();n.x+=o.left-l.left,n.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();n.x+=o,n.y+=l;let d=null,u=a.parentNode;for(;!d;)u.tagName==="svg"&&(d=u),u=a.parentNode;a=d}else break;return n}const Ih={start:0,center:.5,end:1};function Z4(e,t,n=0){let a=0;if(e in Ih&&(e=Ih[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),n+a}const RL=[0,0];function kL(e,t,n,a){let o=Array.isArray(e)?e:RL,l=0,d=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Ih[e]?e:"0"]),l=Z4(o[0],n,a),d=Z4(o[1],t),l-d}const VL={All:[[0,0],[1,1]]},HL={x:0,y:0};function DL(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function zL(e,t,n){const{offset:a=VL.All}=n,{target:o=e,axis:l="y"}=n,d=l==="y"?"height":"width",u=o!==e?OL(o,e):HL,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:DL(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const v=a.length;for(let y=0;y<v;y++){const S=kL(a[y],m[d],f[d],u[l]);!g&&S!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=S}g&&(t[l].interpolate=Bp(t[l].offset,s6(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=Xi(0,1,t[l].interpolate(t[l].current))}function PL(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)n.x.targetOffset+=a.offsetLeft,n.y.targetOffset+=a.offsetTop,a=a.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function NL(e,t,n,a={}){return{measure:o=>{PL(e,a.target,n),LL(e,n,o),(a.offset||a.target)&&zL(e,n,a)},notify:()=>t(n)}}const Js=new WeakMap,W4=new WeakMap,T0=new WeakMap,K4=e=>e===document.scrollingElement?window:e;function mw(e,{container:t=document.scrollingElement,...n}={}){if(!t)return qt;let a=T0.get(t);a||(a=new Set,T0.set(t,a));const o=AL(),l=NL(t,e,o,n);if(a.add(l),!Js.has(t)){const u=()=>{for(const v of a)v.measure(gt.timestamp);Ne.preUpdate(f)},f=()=>{for(const v of a)v.notify()},m=()=>Ne.read(u);Js.set(t,m);const g=K4(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&W4.set(t,Ij(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const d=Js.get(t);return Ne.read(d,!1,!0),()=>{var m;Oi(d);const u=T0.get(t);if(!u||(u.delete(l),u.size))return;const f=Js.get(t);Js.delete(t),f&&(K4(t).removeEventListener("scroll",f),(m=W4.get(t))==null||m(),window.removeEventListener("resize",f))}}const Q4=new Map;function $L(e){const t={value:0},n=mw(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:n}}function gw({source:e,container:t,...n}){const{axis:a}=n;e&&(t=e);const o=Q4.get(t)??new Map;Q4.set(t,o);const l=n.target??"self",d=o.get(l)??{},u=a+(n.offset??[]).join(",");return d[u]||(d[u]=!n.target&&d6()?new ScrollTimeline({source:t,axis:a}):$L({container:t,...n})),d[u]}function BL(e,t){const n=gw(t);return e.attachTimeline({timeline:t.target?void 0:n,observe:a=>(a.pause(),j6(o=>{a.time=a.duration*o},n))})}function IL(e){return e.length===2}function UL(e,t){return IL(e)?mw(n=>{e(n[t.axis].progress,n)},t):j6(e,gw(t))}function _L(e,{axis:t="y",container:n=document.scrollingElement,...a}={}){if(!n)return qt;const o={axis:t,container:n,...a};return typeof e=="function"?UL(e,o):BL(e,o)}const GL=()=>({scrollX:Ai(0),scrollY:Ai(0),scrollXProgress:Ai(0),scrollYProgress:Ai(0)}),oc=e=>e?!e.current:!1;function vn({container:e,target:t,...n}={}){const a=La(GL),o=R.useRef(null),l=R.useRef(!1),d=R.useCallback(()=>(o.current=_L((u,{x:f,y:m})=>{a.scrollX.set(f.current),a.scrollXProgress.set(f.progress),a.scrollY.set(m.current),a.scrollYProgress.set(m.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var u;(u=o.current)==null||u.call(o)}),[e,t,JSON.stringify(n.offset)]);return ko(()=>{if(l.current=!1,oc(e)||oc(t)){l.current=!0;return}else return d()},[d]),R.useEffect(()=>{if(l.current)return wo(!oc(e)),wo(!oc(t)),d()},[d]),a}function qL(e){const t=La(()=>Ai(e)),{isStatic:n}=R.useContext(Sd);if(n){const[,a]=R.useState(e);R.useEffect(()=>t.on("change",a),[])}return t}function xw(e,t){const n=qL(t()),a=()=>n.set(t());return a(),ko(()=>{const o=()=>Ne.preRender(a,!1,!0),l=e.map(d=>d.on("change",o));return()=>{l.forEach(d=>d()),Oi(a)}}),n}function YL(e){lo.current=[],e();const t=xw(lo.current,e);return lo.current=void 0,t}function ot(e,t,n,a){if(typeof e=="function")return YL(e);const o=typeof t=="function"?t:_j(t,n,a);return Array.isArray(e)?J4(e,o):J4([e],([l])=>o(l))}function J4(e,t){const n=La(()=>[]);return xw(e,()=>{n.length=0;const a=e.length;for(let o=0;o<a;o++)n[o]=e[o].get();return t(n)})}function FL(e){e.values.forEach(t=>t.stop())}function Uh(e,t){[...t].reverse().forEach(a=>{const o=e.getVariant(a);o&&o1(e,o),e.variantChildren&&e.variantChildren.forEach(l=>{Uh(l,t)})})}function XL(e,t){if(Array.isArray(t))return Uh(e,t);if(typeof t=="string")return Uh(e,[t]);o1(e,t)}function ZL(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,a){const o=[];return e.forEach(l=>{o.push(Q6(l,n,{transitionOverride:a}))}),Promise.all(o)},set(n){return e.forEach(a=>{XL(a,n)})},stop(){e.forEach(n=>{FL(n)})},mount(){return()=>{t.stop()}}};return t}function WL(){const e=La(ZL);return ko(e.mount,[]),e}const KL=WL,QL={some:0,all:1};function JL(e,t,{root:n,margin:a,amount:o="some"}={}){const l=Fp(e),d=new WeakMap,u=m=>{m.forEach(g=>{const v=d.get(g.target);if(g.isIntersecting!==!!v)if(g.isIntersecting){const y=t(g.target,g);typeof y=="function"?d.set(g.target,y):f.unobserve(g.target)}else typeof v=="function"&&(v(g),d.delete(g.target))})},f=new IntersectionObserver(u,{root:n,rootMargin:a,threshold:typeof o=="number"?o:QL[o]});return l.forEach(m=>f.observe(m)),()=>f.disconnect()}function c1(e,{root:t,margin:n,amount:a,once:o=!1,initial:l=!1}={}){const[d,u]=R.useState(l);return R.useEffect(()=>{if(!e.current||o&&d)return;const f=()=>(u(!0),o?void 0:()=>u(!1)),m={root:t&&t.current||void 0,margin:n,amount:a};return JL(e.current,f,m)},[t,e,n,o,a]),d}const eO=w.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`,tO=w.button`
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
`,E0=w(D.div)`
  width: 20px;
  height: 2px;
  background: ${({$isOpen:e,$darkMode:t})=>e||t?"black":"white"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,iO=w(D.div)`
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
`,nO=w(Ct)`
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
`,aO=w.p`
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
`;w(D.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;w.div`
  padding: 10px 0;
`;const rO=w.img`
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

  ${rO} {
    padding: 8px;
    margin-right: -8px;
  }
`;const sO=w.div`
  background-color: ${({$active:e})=>e?"#3098EE":"#c3c2c2ff"};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`,oO=(e,t,n,a)=>{var l,d,u,f;const o=[n,{code:t,...a||{}}];if((d=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&d.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);ja(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(u=e==null?void 0:e.services)==null?void 0:u.logger)!=null&&f.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},ev={},_h=(e,t,n,a)=>{ja(n)&&ev[n]||(ja(n)&&(ev[n]=new Date),oO(e,t,n,a))},vw=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Gh=(e,t,n)=>{e.loadNamespaces(t,vw(e,n))},tv=(e,t,n,a)=>{if(ja(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Gh(e,n,a);n.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,vw(e,a))},lO=(e,t,n={})=>!t.languages||!t.languages.length?(_h(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),ja=e=>typeof e=="string",cO=e=>typeof e=="object"&&e!==null,dO=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,uO={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},fO=e=>uO[e],hO=e=>e.replace(dO,fO);let qh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:hO};const pO=(e={})=>{qh={...qh,...e}},mO=()=>qh;let yw;const gO=e=>{yw=e},xO=()=>yw,vO={type:"3rdParty",init(e){pO(e.options.react),gO(e)}},yO=R.createContext();class wO{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const bO=(e,t)=>{const n=R.useRef();return R.useEffect(()=>{n.current=e},[e,t]),n.current},ww=(e,t,n,a)=>e.getFixedT(t,n,a),SO=(e,t,n,a)=>R.useCallback(ww(e,t,n,a),[e,t,n,a]),d1=(e,t={})=>{var V,O,N,P;const{i18n:n}=t,{i18n:a,defaultNS:o}=R.useContext(yO)||{},l=n||a||xO();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new wO),!l){_h(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const _=(F,K)=>ja(K)?K:cO(K)&&ja(K.defaultValue)?K.defaultValue:Array.isArray(F)?F[F.length-1]:F,Y=[_,{},!1];return Y.t=_,Y.i18n={},Y.ready=!1,Y}(V=l.options.react)!=null&&V.wait&&_h(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const d={...mO(),...l.options.react,...t},{useSuspense:u,keyPrefix:f}=d;let m=o||((O=l.options)==null?void 0:O.defaultNS);m=ja(m)?[m]:m||["translation"],(P=(N=l.reportNamespaces).addUsedNamespaces)==null||P.call(N,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(_=>lO(_,l,d)),v=SO(l,t.lng||null,d.nsMode==="fallback"?m:m[0],f),y=()=>v,S=()=>ww(l,t.lng||null,d.nsMode==="fallback"?m:m[0],f),[b,j]=R.useState(y);let L=m.join();t.lng&&(L=`${t.lng}${L}`);const M=bO(L),E=R.useRef(!0);R.useEffect(()=>{const{bindI18n:_,bindI18nStore:Y}=d;E.current=!0,!g&&!u&&(t.lng?tv(l,t.lng,m,()=>{E.current&&j(S)}):Gh(l,m,()=>{E.current&&j(S)})),g&&M&&M!==L&&E.current&&j(S);const F=()=>{E.current&&j(S)};return _&&(l==null||l.on(_,F)),Y&&(l==null||l.store.on(Y,F)),()=>{E.current=!1,l&&_&&(_==null||_.split(" ").forEach(K=>l.off(K,F))),Y&&l&&Y.split(" ").forEach(K=>l.store.off(K,F))}},[l,L]),R.useEffect(()=>{E.current&&g&&j(y)},[l,f,g]);const T=[b,l,g];if(T.t=b,T.i18n=l,T.ready=g,g||!g&&!u)return T;throw new Promise(_=>{t.lng?tv(l,t.lng,m,()=>_()):Gh(l,m,()=>_())})},CO=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`,iv=w.div`
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
`,TO=w.div`
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
`,EO=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`,jO=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`,AO=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`,MO=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`,LO={open:{rotate:45,y:8},closed:{rotate:0,y:0}},OO={open:{opacity:0},closed:{opacity:1}},RO={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},kO={open:{opacity:1,x:0},closed:{opacity:0,x:"-100%"}},VO=({isOpen:e,setIsOpen:t})=>{const[,n]=R.useState(!1),{t:a}=d1(),o=Si(),l=["/contact","/service","/tips","/pricing","/fridge"].some(m=>o.pathname.startsWith(m));R.useEffect(()=>(document.body.style.overflow=e?"hidden":"auto",()=>{document.body.style.overflow="auto"}),[e]);const d=()=>{t(!1),n(!1)},u=m=>{const g=o.pathname;return m==="/home#hero"?g==="/"||g==="/home":g.startsWith(m.split("#")[0])},f=[{to:"/home#hero",label:"Home"},{to:"/service#all",label:"Services"},{to:"/about#ap",label:"About Us"},{to:"/tips#app",label:"Tips"},{to:"/contact#ap",label:"Contact"}];return h.jsxs(eO,{children:[h.jsxs(tO,{onClick:()=>t(!e),"aria-label":e?"Close menu":"Open menu",children:[h.jsx(E0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:LO}),h.jsx(E0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:OO}),h.jsx(E0,{$isOpen:e,$darkMode:l,animate:e?"open":"closed",variants:RO})]}),h.jsx(Qp,{children:e&&h.jsxs(iO,{initial:"closed",animate:"open",exit:"closed",variants:kO,transition:{duration:.3},children:[f.map((m,g)=>{const v=u(m.to);return h.jsxs("div",{children:[h.jsx(nO,{to:m.to,onClick:d,children:h.jsx(aO,{$active:v,children:a(m.label)})}),h.jsx(sO,{})]},g)}),h.jsxs(CO,{children:[h.jsxs(iv,{children:[h.jsx(Gn,{children:"Washing Machine Fix"}),h.jsx(Gn,{children:"Dishwasher Repair"}),h.jsx(Gn,{children:"Oven Maintenance"}),h.jsx(Gn,{children:"Dryer Troubleshooting"})]}),h.jsxs(iv,{children:[h.jsx(Gn,{children:"Microwave Service"}),h.jsx(Gn,{children:"Air Conditioner Repair"}),h.jsx(Gn,{children:"Coffee Maker Repair"}),h.jsx(Gn,{children:"Blender Maintenance"})]})]}),h.jsxs(TO,{children:[h.jsx(EO,{}),h.jsxs(jO,{children:[h.jsx(AO,{children:"Designed by TRBN"}),h.jsx(MO,{children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})})]})},HO="/assets/LogoandTextContainer-CnBPFIWK.svg",DO=w.div`
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
    justify-content: flex-end; /* Вирівнюємо контент справа */
    align-items: center;
    padding-right: 120px; /* Відступ від правої сторони */
  }
`,zO=w.img`
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
`,PO=w.div`
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
`,NO=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$O=w.p`
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

  /* Покращений рендеринг тексту на iOS */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`,BO=w.p`
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
`,IO=w.div`
  display: flex;
  gap: 8px;
  width: fit-content;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,bw=w(Ct)`
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
`;const nv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADESURBVHgBzZFhEcIwDIVTFFRCHYCESZgDJgEHmwPmYJWAhKGgONgccCgoL3e5I1eaAf/I3Xftkry+ZnVUiZyzx9KBPXiAm3Muln27ivCIJYEArmAFLfILCGQFimYTcidwNw8QYSv7A5iEILkBjDUhNy+yD3IQu40q79m9Jm7ALPsOXFRtVe75k7OX+fjAvrjRu7OauaHXz5v5BsqVbzRZYi4moxa+ea4IzkXOi3CgrZDGxLMW39vCilMvwki/hJox0t/FEx1sC+f02XQyAAAAAElFTkSuQmCC",UO=()=>{const[e,t]=R.useState(!1),[n]=R.useState(!1),[a,o]=R.useState(!1),l=Si(),d=["/contact","/service","/tips","/pricing","/fridge"].some(S=>l.pathname.startsWith(S)),u=n||a,f=lp(),m=S=>{S.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),window.location.pathname!=="/home"&&f("/home")};R.useEffect(()=>{const S=new IntersectionObserver(([j])=>{t(!j.isIntersecting)},{threshold:.1,rootMargin:"50px 0px 0px 0px"}),b=document.createElement("div");return b.style.position="absolute",b.style.top="50px",b.style.height="1px",b.style.pointerEvents="none",document.body.appendChild(b),S.observe(b),()=>{S.disconnect(),document.body.contains(b)&&document.body.removeChild(b)}},[]);const g=ke({query:"(max-width: 1439px)"}),v=ke({query:"(min-width: 768px) and (max-width: 1439px)"}),y=ke({query:"(min-width: 1440px)"});return h.jsxs(hT,{$isScrolled:e,$darkMode:d,children:[h.jsxs(pT,{id:"header",children:[h.jsx(mT,{to:"/home#hero",onClick:m,$overlayOpen:u,$darkMode:d,children:h.jsx("img",{src:HO,alt:"Logo"})}),!g&&h.jsxs(gT,{children:[h.jsx(Ws,{children:h.jsx(Ks,{to:"/home#hero",$overlayOpen:u,$darkMode:d,children:"Home"})}),h.jsx(Ws,{children:h.jsx(Ks,{to:"/service#all",$overlayOpen:u,$darkMode:d,children:"Services"})}),h.jsx(Ws,{children:h.jsx(Ks,{to:"/about#ap",$overlayOpen:u,$darkMode:d,children:"About Us"})}),h.jsx(Ws,{children:h.jsx(Ks,{to:"/tips#app",$overlayOpen:u,$darkMode:d,children:"Tips"})}),h.jsx(Ws,{children:h.jsx(Ks,{to:"/contact#ap",$overlayOpen:u,$darkMode:d,children:"Contact"})})]}),y&&h.jsxs(M3,{children:[h.jsxs(tc,{children:[h.jsx(_n,{$overlayOpen:u,$darkMode:d,children:h.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),h.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),h.jsxs(tc,{children:[h.jsxs(_n,{$overlayOpen:u,$darkMode:d,children:[h.jsx("img",{src:nv,alt:"🗺️"}),h.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),h.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"& Nearby Cities"})]})]}),h.jsx(xT,{children:h.jsxs("div",{style:{display:"flex"},children:[h.jsx(bw,{to:"/contact#ap",children:"Contact Us"}),h.jsx(H5,{$overlayOpen:u,$darkMode:d,children:h.jsx("a",{href:"tel:+18055002705",children:"Call Us"})}),g&&h.jsx(VO,{isOpen:a,setIsOpen:o})]})})]}),v&&h.jsxs(M3,{children:[h.jsxs(tc,{children:[h.jsx(_n,{$overlayOpen:u,$darkMode:d,children:h.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"})}),h.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"Mon–Sat: 8AM–6PM | Sun: 9AM–4PM"})]}),h.jsxs(tc,{children:[h.jsxs(_n,{$overlayOpen:u,$darkMode:d,children:[h.jsx("img",{src:nv,alt:"🗺️"}),h.jsx("a",{href:"https://www.google.com/maps/place/Thousand+Oaks",target:"_blank",rel:"noopener noreferrer",children:"Thousand Oaks"})]}),h.jsx(_n,{$overlayOpen:u,$darkMode:d,children:"& Nearby Cities"})]})]})]})},_O=w.footer`
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
`,GO=w.div`
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
`,qO=w.div`
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
`,j0=w.p`
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
`,YO=w.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
  }
`,FO=w.p`
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
`,XO=w.div`
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
`,ZO=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,WO=w.div`
  background: rgba(255, 255, 255, ${({opacity:e})=>e||.5});
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,KO=w.svg`
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
`;const QO=w.div`
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
`,JO=w.div`
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
`,eR=w.p`
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
`,tR=w.p`
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
`,Sw=w.div`
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
`,Cw=w.div`
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
`,Tw=w.button`
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
`,iR=w.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 55px;
  line-height: 90%;
  color: var(--blue-500);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`,nR=w.div`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  padding: 30px 0;
  background: var(--blue-form);
   z-index: 9000;
`,Ew=()=>{const e=[{title:"Last Updated: January 20, 2025",content:"At Airtexno, we are dedicated to safeguarding your privacy and ensuring that your personal data is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services."},{title:"INFORMATION WE COLLECT",content:"We may collect the following types of information: Personal Information: Name, email address, phone number, company name, and other details you provide when filling out forms, subscribing to newsletters, or contacting us directly. Usage Data: Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent. We may collect this through cookies and analytics tools. Third-Party Data: Information from services you've authorized us to use (e.g., analytics providers)."},{title:"HOW WE USE YOUR INFORMATION",content:"We may use or share your information with: Service Providers: To help operate our website, analytics, marketing, or provide services on our behalf. Legal Requirements: If required by applicable law or to comply with legal processes. Business Transfers: In the case of a merger or acquisition, data may be shared as part of that process. We do not sell personal data to third parties."},{title:"COOKIES AND TRACKING TECHNOLOGIES",content:"Our site uses cookies and similar technologies to enhance performance and user experience. Cookies help remember your preferences and analyze behavior. You can manage cookies through your browser settings. Please note that disabling cookies may impact site functionality."},{title:"DATA RETENTION",content:"We retain your data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations."},{title:"YOUR RIGHTS",content:"Depending on your location, you may have the right to: Access your data. Request corrections to inaccurate or incomplete data. Request deletion of your personal data. Object to certain processing activities. Request a copy of your data in machine-readable format. To exercise these rights, please contact us using the details below."},{title:"DATA SECURITY",content:"We implement appropriate technical and organizational measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection."},{title:"THIRD-PARTY LINKS",content:"Our website may contain links to external sites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies separately."},{title:"INTERNATIONAL DATA TRANSFERS",content:"If you access our site from outside our operating country, your data may be transferred and processed in other regions where our servers or partners are located. By using the site, you consent to this transfer."},{title:"UPDATES TO THIS POLICY",content:"We may update this Privacy Policy as necessary. Any changes will be reflected by updating the 'Last Updated' date above. We encourage you to check this page periodically."}];return h.jsxs("div",{children:[h.jsx(nR,{children:h.jsx(iR,{children:"Privacy and terms"})}),h.jsx(QO,{children:e.map((t,n)=>h.jsxs(JO,{children:[h.jsx(eR,{children:t.title}),h.jsx(tR,{children:t.content})]},n))})]})},aR=()=>{const[e,t]=R.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return h.jsxs(h.Fragment,{children:[h.jsx(_O,{children:h.jsxs(GO,{children:[h.jsxs(qO,{children:[h.jsxs(FO,{children:[h.jsx("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:"801 Tioga pl, Newbury Park, CA 91320"})," ",h.jsx("br",{}),h.jsx("a",{href:"tel:+18055002705",children:"+1 (805) 500-2705"}),h.jsx("br",{})," ",h.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]}),h.jsxs(XO,{children:[h.jsx(eo,{to:"/home#hero",children:"Home"}),h.jsx(eo,{to:"/service#all",children:"Services"}),h.jsx(eo,{to:"/about#ap",children:"About Us"}),h.jsx(eo,{to:"/tips#app",children:"Tips"}),h.jsx(eo,{to:"/contact#ap",children:"Contacts"}),h.jsx(j0,{onClick:n,style:{cursor:"pointer"},children:"Privacy and Terms"})]})]}),h.jsxs(ZO,{children:[h.jsxs(KO,{viewBox:"0 0 343 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M0 54.8045L19.396 1.71207H26.1359L45.457 54.8045H39.9152L34.2238 38.8768H11.2332L5.5417 54.8045H0ZM12.9556 33.9414H32.5013L22.7659 6.27353L12.9556 33.9414Z",fill:"#3098EE"}),h.jsx("path",{d:"M51.2842 54.8045V1.71207H56.3765V54.8045H51.2842Z",fill:"#3098EE"}),h.jsx("path",{d:"M67.6308 54.8045V1.71207H87.1016C90.896 1.71207 94.1161 2.36015 96.7622 3.6563C99.4581 4.9026 101.53 6.69727 102.978 9.04032C104.426 11.3834 105.15 14.2 105.15 17.4902C105.15 19.933 104.575 22.1015 103.427 23.9959C102.329 25.8903 100.856 27.4108 99.0088 28.5574C97.1616 29.704 95.1646 30.3521 93.0178 30.5016L92.6433 29.8286C96.1381 29.8286 98.8341 30.6262 100.731 32.2215C102.678 33.7669 103.802 36.2097 104.101 39.5498L105.449 54.8045H100.282L99.0088 39.9984C98.8091 37.5557 97.9354 35.761 96.3877 34.6144C94.84 33.418 92.3438 32.8197 88.8989 32.8197H72.7232V54.8045H67.6308ZM72.7232 27.8844H87.9254C91.5699 27.8844 94.4407 26.987 96.5375 25.1924C98.6843 23.3478 99.7577 20.7555 99.7577 17.4155C99.7577 13.9258 98.6843 11.2587 96.5375 9.41421C94.3907 7.56968 91.2205 6.64742 87.0267 6.64742H72.7232V27.8844Z",fill:"#3098EE"}),h.jsx("path",{d:"M125.684 54.8045V9.1151H109.359V1.71207H150.098V9.1151H133.772V54.8045H125.684Z",fill:"white"}),h.jsx("path",{d:"M153.991 54.8045V1.71207H188.589V9.1151H162.079V24.5941H187.691V31.7728H162.079V47.4014H189.188V54.8045H153.991Z",fill:"white"}),h.jsx("path",{d:"M192.736 54.8045L210.41 28.1835L192.886 1.71207H202.397L215.502 21.9021L228.383 1.71207H237.819L220.295 28.0339L238.043 54.8045H228.533L215.352 34.3153L202.172 54.8045H192.736Z",fill:"white"}),h.jsx("path",{d:"M243.289 54.8045V1.71207H253.549L278.112 45.0085V1.71207H286.2V54.8045H275.566L251.377 12.4801V54.8045H243.289Z",fill:"white"}),h.jsx("path",{d:"M318.137 56.0009C312.995 56.0009 308.577 54.9042 304.882 52.7107C301.188 50.4674 298.342 47.2768 296.345 43.1391C294.348 39.0014 293.349 34.066 293.349 28.333C293.349 22.6001 294.348 17.6647 296.345 13.527C298.342 9.33943 301.188 6.12397 304.882 3.88063C308.577 1.63729 312.995 0.515625 318.137 0.515625C323.329 0.515625 327.773 1.63729 331.467 3.88063C335.212 6.12397 338.057 9.33943 340.004 13.527C342.001 17.6647 343 22.6001 343 28.333C343 34.066 342.001 39.0014 340.004 43.1391C338.057 47.2768 335.212 50.4674 331.467 52.7107C327.773 54.9042 323.329 56.0009 318.137 56.0009ZM318.137 48.5979C321.582 48.5979 324.528 47.8003 326.974 46.205C329.47 44.6097 331.367 42.3165 332.665 39.3254C333.964 36.2844 334.613 32.6203 334.613 28.333C334.613 24.0458 333.964 20.3817 332.665 17.3407C331.367 14.2997 329.47 11.9816 326.974 10.3863C324.528 8.74121 321.582 7.91865 318.137 7.91865C314.742 7.91865 311.822 8.74121 309.375 10.3863C306.929 11.9816 305.032 14.2997 303.684 17.3407C302.386 20.3817 301.737 24.0458 301.737 28.333C301.737 32.6203 302.386 36.2844 303.684 39.3254C305.032 42.3165 306.929 44.6097 309.375 46.205C311.822 47.8003 314.742 48.5979 318.137 48.5979Z",fill:"white"})]}),h.jsx(WO,{opacity:.5}),h.jsxs(YO,{children:[h.jsx(j0,{size:"14px",weight:"500",children:"Designed by TRBN"}),h.jsx(j0,{size:"14px",children:"Copyright © 2025 Airtexno - All Rights Reserved."})]})]})]})}),e&&h.jsx(Sw,{onClick:a,children:h.jsxs(Cw,{onClick:o=>o.stopPropagation(),children:[h.jsx(Tw,{onClick:a,children:"×"}),h.jsx(Ew,{})]})})]})},rR="data:image/svg+xml,%3csvg%20width='1360'%20height='220'%20viewBox='0%200%201360%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20215.256L76.9053%204.74393H103.629L180.237%20215.256H158.265L135.698%20152.102H44.5397L21.9729%20215.256H0ZM51.3692%20132.534H128.868L90.2672%2022.8302L51.3692%20132.534Z'%20fill='%233098EE'/%3e%3cpath%20d='M203.342%20215.256V4.74393H223.534V215.256H203.342Z'%20fill='%233098EE'/%3e%3cpath%20d='M268.157%20215.256V4.74393H345.359C360.404%204.74393%20373.172%207.31356%20383.663%2012.4528C394.353%2017.3944%20402.568%2024.5103%20408.309%2033.8005C414.049%2043.0907%20416.92%2054.2588%20416.92%2067.3046C416.92%2076.9901%20414.643%2085.5885%20410.09%2093.0997C405.735%20100.611%20399.896%20106.64%20392.571%20111.186C385.247%20115.732%20377.329%20118.302%20368.817%20118.895L367.332%20116.226C381.189%20116.226%20391.879%20119.389%20399.401%20125.714C407.121%20131.842%20411.575%20141.527%20412.763%20154.771L418.108%20215.256H397.619L392.571%20156.55C391.78%20146.864%20388.315%20139.748%20382.179%20135.202C376.042%20130.458%20366.144%20128.086%20352.486%20128.086H288.348V215.256H268.157ZM288.348%20108.518H348.626C363.076%20108.518%20374.459%20104.96%20382.773%2097.8437C391.285%2090.5301%20395.541%2080.2516%20395.541%2067.0081C395.541%2053.1716%20391.285%2042.5966%20382.773%2035.283C374.261%2027.9694%20361.69%2024.3127%20345.062%2024.3127H288.348V108.518Z'%20fill='%233098EE'/%3e%3cpath%20d='M498.339%20215.256V34.097H433.608V4.74393H595.139V34.097H530.408V215.256H498.339Z'%20fill='white'/%3e%3cpath%20d='M610.577%20215.256V4.74393H747.76V34.097H642.646V95.4717H744.196V123.935H642.646V185.903H750.135V215.256H610.577Z'%20fill='white'/%3e%3cpath%20d='M764.202%20215.256L834.278%20109.704L764.796%204.74393H802.506L854.469%2084.7978L905.542%204.74393H942.955L873.473%20109.111L943.846%20215.256H906.135L853.875%20134.016L801.616%20215.256H764.202Z'%20fill='white'/%3e%3cpath%20d='M964.645%20215.256V4.74393H1005.32L1102.72%20176.415V4.74393H1134.79V215.256H1092.62L996.714%2047.4393V215.256H964.645Z'%20fill='white'/%3e%3cpath%20d='M1261.42%20220C1241.03%20220%201223.51%20215.651%201208.86%20206.954C1194.21%20198.059%201182.93%20185.409%201175.01%20169.003C1167.09%20152.597%201163.13%20133.028%201163.13%20110.296C1163.13%2087.5651%201167.09%2067.9964%201175.01%2051.5903C1182.93%2034.9865%201194.21%2022.2372%201208.86%2013.3423C1223.51%204.44743%201241.03%200%201261.42%200C1282.01%200%201299.62%204.44743%201314.27%2013.3423C1329.12%2022.2372%201340.4%2034.9865%201348.12%2051.5903C1356.04%2067.9964%201360%2087.5651%201360%20110.296C1360%20133.028%201356.04%20152.597%201348.12%20169.003C1340.4%20185.409%201329.12%20198.059%201314.27%20206.954C1299.62%20215.651%201282.01%20220%201261.42%20220ZM1261.42%20190.647C1275.08%20190.647%201286.76%20187.484%201296.46%20181.159C1306.35%20174.834%201313.88%20165.741%201319.02%20153.881C1324.17%20141.824%201326.74%20127.296%201326.74%20110.296C1326.74%2093.2974%201324.17%2078.7691%201319.02%2066.7116C1313.88%2054.6541%201306.35%2045.4627%201296.46%2039.1375C1286.76%2032.6145%201275.08%2029.3531%201261.42%2029.3531C1247.96%2029.3531%201236.38%2032.6145%201226.68%2039.1375C1216.98%2045.4627%201209.46%2054.6541%201204.11%2066.7116C1198.96%2078.7691%201196.39%2093.2974%201196.39%20110.296C1196.39%20127.296%201198.96%20141.824%201204.11%20153.881C1209.46%20165.741%201216.98%20174.834%201226.68%20181.159C1236.38%20187.484%201247.96%20190.647%201261.42%20190.647Z'%20fill='white'/%3e%3c/svg%3e",sR="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",oR=Qe`
  from { opacity: 0; }
  to { opacity: 1; }
`,lR=Qe`
  from { opacity: 1; }
  to { opacity: 0; }
`,cR=Qe`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`,dR=w.div`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  ${({$hide:e})=>e&&zt`
      animation: ${lR} 1s forwards;
    `}
`,uR=w.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  ${({$visible:e})=>e&&zt`
      animation: ${oR} 1.5s forwards;
    `}
`,fR=w.img`
  position: absolute;
  width: min-content;
  height: 27px;
  opacity: 0;
  ${({$show:e})=>e&&zt`
      animation: ${cR} 2s forwards;
    `}

      @media screen and (min-width: 744px) {
   height: 100px;
  }

  @media screen and (min-width: 1440px) {
  height: 240px;
  }
`,hR=({onComplete:e})=>{const[t,n]=R.useState(!0),[a,o]=R.useState(!1),[l,d]=R.useState(!1),u=R.useRef(null);return R.useEffect(()=>{u.current&&(u.current.onended=()=>{n(!1),o(!0),setTimeout(()=>{d(!0),setTimeout(e,1e3)},3e3)})},[e]),h.jsxs(dR,{$hide:l,children:[t&&h.jsx(uR,{ref:u,$visible:t,autoPlay:!0,muted:!0,playsInline:!0,children:h.jsx("source",{src:sR,type:"video/mp4"})}),a&&h.jsx(fR,{src:rR,alt:"Logo",$show:a})]})},pR=()=>{const e=Si(),[t,n]=R.useState(!1);R.useEffect(()=>{const o=()=>{sessionStorage.clear()};return window.addEventListener("beforeunload",o),()=>{window.removeEventListener("beforeunload",o)}},[]),R.useEffect(()=>{sessionStorage.getItem("hasSeenPreloader")||n(!0)},[]);const a=()=>{sessionStorage.setItem("hasSeenPreloader","true"),n(!1)};return R.useEffect(()=>{if(e.hash){const o=e.hash.replace("#",""),l=document.getElementById(o);l&&setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},400)}else window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),t?h.jsx(hR,{onComplete:a}):h.jsxs(h.Fragment,{children:[h.jsx(UO,{}),h.jsx(R.Suspense,{children:h.jsx(H9,{})}),h.jsx(aR,{})]})};function av(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function u1(e,t){e===void 0&&(e={}),t===void 0&&(t={});const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:av(t[a])&&av(e[a])&&Object.keys(t[a]).length>0&&u1(e[a],t[a])})}const jw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Fi(){const e=typeof document<"u"?document:{};return u1(e,jw),e}const mR={document:jw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Pt(){const e=typeof window<"u"?window:{};return u1(e,mR),e}function gR(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function xR(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Aw(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Zc(){return Date.now()}function vR(e){const t=Pt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function yR(e,t){t===void 0&&(t="x");const n=Pt();let a,o,l;const d=vR(e);return n.WebKitCSSMatrix?(o=d.transform||d.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(u=>u.replace(",",".")).join(", ")),l=new n.WebKitCSSMatrix(o==="none"?"":o)):(l=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=l.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?o=l.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(n.WebKitCSSMatrix?o=l.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function lc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function wR(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ri(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const a=n<0||arguments.length<=n?void 0:arguments[n];if(a!=null&&!wR(a)){const o=Object.keys(Object(a)).filter(l=>t.indexOf(l)<0);for(let l=0,d=o.length;l<d;l+=1){const u=o[l],f=Object.getOwnPropertyDescriptor(a,u);f!==void 0&&f.enumerable&&(lc(e[u])&&lc(a[u])?a[u].__swiper__?e[u]=a[u]:ri(e[u],a[u]):!lc(e[u])&&lc(a[u])?(e[u]={},a[u].__swiper__?e[u]=a[u]:ri(e[u],a[u])):e[u]=a[u])}}}return e}function cc(e,t,n){e.style.setProperty(t,n)}function Mw(e){let{swiper:t,targetPosition:n,side:a}=e;const o=Pt(),l=-t.translate;let d=null,u;const f=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const m=n>l?"next":"prev",g=(y,S)=>m==="next"&&y>=S||m==="prev"&&y<=S,v=()=>{u=new Date().getTime(),d===null&&(d=u);const y=Math.max(Math.min((u-d)/f,1),0),S=.5-Math.cos(y*Math.PI)/2;let b=l+S*(n-l);if(g(b,n)&&(b=n),t.wrapperEl.scrollTo({[a]:b}),g(b,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:b})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(v)};v()}function Ii(e,t){t===void 0&&(t="");const n=Pt(),a=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function bR(e,t){const n=[t];for(;n.length>0;){const a=n.shift();if(e===a)return!0;n.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function SR(e,t){const n=Pt();let a=t.contains(e);return!a&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=bR(e,t))),a}function Wc(e){try{console.warn(e);return}catch{}}function Kc(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:gR(t)),n}function CR(e,t){const n=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function TR(e,t){const n=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&n.push(a):n.push(a),e=a}return n}function Xn(e,t){return Pt().getComputedStyle(e,null).getPropertyValue(t)}function Qc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Lw(e,t){const n=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&n.push(a):n.push(a),a=a.parentElement;return n}function Yh(e,t,n){const a=Pt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function xt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Jc(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:n=>n}).createHTML(t):e.innerHTML=t}function Ow(e,t,n,a){return e.params.createElements&&Object.keys(a).forEach(o=>{if(!n[o]&&n.auto===!0){let l=Ii(e.el,`.${a[o]}`)[0];l||(l=Kc("div",a[o]),l.className=a[o],e.el.append(l)),n[o]=l,t[o]=l}}),n}function f1(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function l(b){let j;return b&&typeof b=="string"&&t.isElement&&(j=t.el.querySelector(b)||t.hostEl.querySelector(b),j)?j:(b&&(typeof b=="string"&&(j=[...document.querySelectorAll(b)]),t.params.uniqueNavElements&&typeof b=="string"&&j&&j.length>1&&t.el.querySelectorAll(b).length===1?j=t.el.querySelector(b):j&&j.length===1&&(j=j[0])),b&&!j?b:j)}function d(b,j){const L=t.params.navigation;b=xt(b),b.forEach(M=>{M&&(M.classList[j?"add":"remove"](...L.disabledClass.split(" ")),M.tagName==="BUTTON"&&(M.disabled=j),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](L.lockClass))})}function u(){const{nextEl:b,prevEl:j}=t.navigation;if(t.params.loop){d(j,!1),d(b,!1);return}d(j,t.isBeginning&&!t.params.rewind),d(b,t.isEnd&&!t.params.rewind)}function f(b){b.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),o("navigationPrev"))}function m(b){b.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),o("navigationNext"))}function g(){const b=t.params.navigation;if(t.params.navigation=Ow(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let j=l(b.nextEl),L=l(b.prevEl);Object.assign(t.navigation,{nextEl:j,prevEl:L}),j=xt(j),L=xt(L);const M=(E,T)=>{E&&E.addEventListener("click",T==="next"?m:f),!t.enabled&&E&&E.classList.add(...b.lockClass.split(" "))};j.forEach(E=>M(E,"next")),L.forEach(E=>M(E,"prev"))}function v(){let{nextEl:b,prevEl:j}=t.navigation;b=xt(b),j=xt(j);const L=(M,E)=>{M.removeEventListener("click",E==="next"?m:f),M.classList.remove(...t.params.navigation.disabledClass.split(" "))};b.forEach(M=>L(M,"next")),j.forEach(M=>L(M,"prev"))}a("init",()=>{t.params.navigation.enabled===!1?S():(g(),u())}),a("toEdge fromEdge lock unlock",()=>{u()}),a("destroy",()=>{v()}),a("enable disable",()=>{let{nextEl:b,prevEl:j}=t.navigation;if(b=xt(b),j=xt(j),t.enabled){u();return}[...b,...j].filter(L=>!!L).forEach(L=>L.classList.add(t.params.navigation.lockClass))}),a("click",(b,j)=>{let{nextEl:L,prevEl:M}=t.navigation;L=xt(L),M=xt(M);const E=j.target;let T=M.includes(E)||L.includes(E);if(t.isElement&&!T){const V=j.path||j.composedPath&&j.composedPath();V&&(T=V.find(O=>L.includes(O)||M.includes(O)))}if(t.params.navigation.hideOnClick&&!T){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===E||t.pagination.el.contains(E)))return;let V;L.length?V=L[0].classList.contains(t.params.navigation.hiddenClass):M.length&&(V=M[0].classList.contains(t.params.navigation.hiddenClass)),o(V===!0?"navigationShow":"navigationHide"),[...L,...M].filter(O=>!!O).forEach(O=>O.classList.toggle(t.params.navigation.hiddenClass))}});const y=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),u()},S=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(t.navigation,{enable:y,disable:S,update:u,init:g,destroy:v})}function to(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function ER(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:E=>E,formatFractionTotal:E=>E,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),t.pagination={el:null,bullets:[]};let d,u=0;function f(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function m(E,T){const{bulletActiveClass:V}=t.params.pagination;E&&(E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&(E.classList.add(`${V}-${T}`),E=E[`${T==="prev"?"previous":"next"}ElementSibling`],E&&E.classList.add(`${V}-${T}-${T}`)))}function g(E,T,V){if(E=E%V,T=T%V,T===E+1)return"next";if(T===E-1)return"previous"}function v(E){const T=E.target.closest(to(t.params.pagination.bulletClass));if(!T)return;E.preventDefault();const V=Qc(T)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===V)return;const O=g(t.realIndex,V,t.slides.length);O==="next"?t.slideNext():O==="previous"?t.slidePrev():t.slideToLoop(V)}else t.slideTo(V)}function y(){const E=t.rtl,T=t.params.pagination;if(f())return;let V=t.pagination.el;V=xt(V);let O,N;const P=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,_=t.params.loop?Math.ceil(P/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(N=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,N=t.previousSnapIndex):(N=t.previousIndex||0,O=t.activeIndex||0),T.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const Y=t.pagination.bullets;let F,K,ne;if(T.dynamicBullets&&(d=Yh(Y[0],t.isHorizontal()?"width":"height"),V.forEach(le=>{le.style[t.isHorizontal()?"width":"height"]=`${d*(T.dynamicMainBullets+4)}px`}),T.dynamicMainBullets>1&&N!==void 0&&(u+=O-(N||0),u>T.dynamicMainBullets-1?u=T.dynamicMainBullets-1:u<0&&(u=0)),F=Math.max(O-u,0),K=F+(Math.min(Y.length,T.dynamicMainBullets)-1),ne=(K+F)/2),Y.forEach(le=>{const ue=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(oe=>`${T.bulletActiveClass}${oe}`)].map(oe=>typeof oe=="string"&&oe.includes(" ")?oe.split(" "):oe).flat();le.classList.remove(...ue)}),V.length>1)Y.forEach(le=>{const ue=Qc(le);ue===O?le.classList.add(...T.bulletActiveClass.split(" ")):t.isElement&&le.setAttribute("part","bullet"),T.dynamicBullets&&(ue>=F&&ue<=K&&le.classList.add(...`${T.bulletActiveClass}-main`.split(" ")),ue===F&&m(le,"prev"),ue===K&&m(le,"next"))});else{const le=Y[O];if(le&&le.classList.add(...T.bulletActiveClass.split(" ")),t.isElement&&Y.forEach((ue,oe)=>{ue.setAttribute("part",oe===O?"bullet-active":"bullet")}),T.dynamicBullets){const ue=Y[F],oe=Y[K];for(let B=F;B<=K;B+=1)Y[B]&&Y[B].classList.add(...`${T.bulletActiveClass}-main`.split(" "));m(ue,"prev"),m(oe,"next")}}if(T.dynamicBullets){const le=Math.min(Y.length,T.dynamicMainBullets+4),ue=(d*le-d)/2-ne*d,oe=E?"right":"left";Y.forEach(B=>{B.style[t.isHorizontal()?oe:"top"]=`${ue}px`})}}V.forEach((Y,F)=>{if(T.type==="fraction"&&(Y.querySelectorAll(to(T.currentClass)).forEach(K=>{K.textContent=T.formatFractionCurrent(O+1)}),Y.querySelectorAll(to(T.totalClass)).forEach(K=>{K.textContent=T.formatFractionTotal(_)})),T.type==="progressbar"){let K;T.progressbarOpposite?K=t.isHorizontal()?"vertical":"horizontal":K=t.isHorizontal()?"horizontal":"vertical";const ne=(O+1)/_;let le=1,ue=1;K==="horizontal"?le=ne:ue=ne,Y.querySelectorAll(to(T.progressbarFillClass)).forEach(oe=>{oe.style.transform=`translate3d(0,0,0) scaleX(${le}) scaleY(${ue})`,oe.style.transitionDuration=`${t.params.speed}ms`})}T.type==="custom"&&T.renderCustom?(Jc(Y,T.renderCustom(t,O+1,_)),F===0&&o("paginationRender",Y)):(F===0&&o("paginationRender",Y),o("paginationUpdate",Y)),t.params.watchOverflow&&t.enabled&&Y.classList[t.isLocked?"add":"remove"](T.lockClass)})}function S(){const E=t.params.pagination;if(f())return;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let V=t.pagination.el;V=xt(V);let O="";if(E.type==="bullets"){let N=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&N>T&&(N=T);for(let P=0;P<N;P+=1)E.renderBullet?O+=E.renderBullet.call(t,P,E.bulletClass):O+=`<${E.bulletElement} ${t.isElement?'part="bullet"':""} class="${E.bulletClass}"></${E.bulletElement}>`}E.type==="fraction"&&(E.renderFraction?O=E.renderFraction.call(t,E.currentClass,E.totalClass):O=`<span class="${E.currentClass}"></span> / <span class="${E.totalClass}"></span>`),E.type==="progressbar"&&(E.renderProgressbar?O=E.renderProgressbar.call(t,E.progressbarFillClass):O=`<span class="${E.progressbarFillClass}"></span>`),t.pagination.bullets=[],V.forEach(N=>{E.type!=="custom"&&Jc(N,O||""),E.type==="bullets"&&t.pagination.bullets.push(...N.querySelectorAll(to(E.bulletClass)))}),E.type!=="custom"&&o("paginationRender",V[0])}function b(){t.params.pagination=Ow(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const E=t.params.pagination;if(!E.el)return;let T;typeof E.el=="string"&&t.isElement&&(T=t.el.querySelector(E.el)),!T&&typeof E.el=="string"&&(T=[...document.querySelectorAll(E.el)]),T||(T=E.el),!(!T||T.length===0)&&(t.params.uniqueNavElements&&typeof E.el=="string"&&Array.isArray(T)&&T.length>1&&(T=[...t.el.querySelectorAll(E.el)],T.length>1&&(T=T.find(V=>Lw(V,".swiper")[0]===t.el))),Array.isArray(T)&&T.length===1&&(T=T[0]),Object.assign(t.pagination,{el:T}),T=xt(T),T.forEach(V=>{E.type==="bullets"&&E.clickable&&V.classList.add(...(E.clickableClass||"").split(" ")),V.classList.add(E.modifierClass+E.type),V.classList.add(t.isHorizontal()?E.horizontalClass:E.verticalClass),E.type==="bullets"&&E.dynamicBullets&&(V.classList.add(`${E.modifierClass}${E.type}-dynamic`),u=0,E.dynamicMainBullets<1&&(E.dynamicMainBullets=1)),E.type==="progressbar"&&E.progressbarOpposite&&V.classList.add(E.progressbarOppositeClass),E.clickable&&V.addEventListener("click",v),t.enabled||V.classList.add(E.lockClass)}))}function j(){const E=t.params.pagination;if(f())return;let T=t.pagination.el;T&&(T=xt(T),T.forEach(V=>{V.classList.remove(E.hiddenClass),V.classList.remove(E.modifierClass+E.type),V.classList.remove(t.isHorizontal()?E.horizontalClass:E.verticalClass),E.clickable&&(V.classList.remove(...(E.clickableClass||"").split(" ")),V.removeEventListener("click",v))})),t.pagination.bullets&&t.pagination.bullets.forEach(V=>V.classList.remove(...E.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const E=t.params.pagination;let{el:T}=t.pagination;T=xt(T),T.forEach(V=>{V.classList.remove(E.horizontalClass,E.verticalClass),V.classList.add(t.isHorizontal()?E.horizontalClass:E.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?M():(b(),S(),y())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),a("snapIndexChange",()=>{y()}),a("snapGridLengthChange",()=>{S(),y()}),a("destroy",()=>{j()}),a("enable disable",()=>{let{el:E}=t.pagination;E&&(E=xt(E),E.forEach(T=>T.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{y()}),a("click",(E,T)=>{const V=T.target,O=xt(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!V.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&V===t.navigation.nextEl||t.navigation.prevEl&&V===t.navigation.prevEl))return;const N=O[0].classList.contains(t.params.pagination.hiddenClass);o(N===!0?"paginationShow":"paginationHide"),O.forEach(P=>P.classList.toggle(t.params.pagination.hiddenClass))}});const L=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:E}=t.pagination;E&&(E=xt(E),E.forEach(T=>T.classList.remove(t.params.pagination.paginationDisabledClass))),b(),S(),y()},M=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:E}=t.pagination;E&&(E=xt(E),E.forEach(T=>T.classList.add(t.params.pagination.paginationDisabledClass))),j()};Object.assign(t.pagination,{enable:L,disable:M,render:S,update:y,init:b,destroy:j})}function oi(e){let{swiper:t,extendParams:n,on:a,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,u,f=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,v=new Date().getTime(),y,S,b,j,L,M,E;function T(J){!t||t.destroyed||!t.wrapperEl||J.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",T),!(E||J.detail&&J.detail.bySwiperTouchMove)&&F())}const V=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?y=!0:y&&(m=g,y=!1);const J=t.autoplay.paused?g:v+m-new Date().getTime();t.autoplay.timeLeft=J,o("autoplayTimeLeft",J,J/f),u=requestAnimationFrame(()=>{V()})},O=()=>{let J;return t.virtual&&t.params.virtual.enabled?J=t.slides.find(k=>k.classList.contains("swiper-slide-active")):J=t.slides[t.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},N=J=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(u),V();let ie=typeof J>"u"?t.params.autoplay.delay:J;f=t.params.autoplay.delay,m=t.params.autoplay.delay;const k=O();!Number.isNaN(k)&&k>0&&typeof J>"u"&&(ie=k,f=k,m=k),g=ie;const X=t.params.speed,ae=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{N()})))};return ie>0?(clearTimeout(d),d=setTimeout(()=>{ae()},ie)):requestAnimationFrame(()=>{ae()}),ie},P=()=>{v=new Date().getTime(),t.autoplay.running=!0,N(),o("autoplayStart")},_=()=>{t.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(u),o("autoplayStop")},Y=(J,ie)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(d),J||(M=!0);const k=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",T):F()};if(t.autoplay.paused=!0,ie){L&&(g=t.params.autoplay.delay),L=!1,k();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-v),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),k())},F=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(v=new Date().getTime(),M?(M=!1,N(g)):N(),t.autoplay.paused=!1,o("autoplayResume"))},K=()=>{if(t.destroyed||!t.autoplay.running)return;const J=Fi();J.visibilityState==="hidden"&&(M=!0,Y(!0)),J.visibilityState==="visible"&&F()},ne=J=>{J.pointerType==="mouse"&&(M=!0,E=!0,!(t.animating||t.autoplay.paused)&&Y(!0))},le=J=>{J.pointerType==="mouse"&&(E=!1,t.autoplay.paused&&F())},ue=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ne),t.el.addEventListener("pointerleave",le))},oe=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ne),t.el.removeEventListener("pointerleave",le))},B=()=>{Fi().addEventListener("visibilitychange",K)},W=()=>{Fi().removeEventListener("visibilitychange",K)};a("init",()=>{t.params.autoplay.enabled&&(ue(),B(),P())}),a("destroy",()=>{oe(),W(),t.autoplay.running&&_()}),a("_freeModeStaticRelease",()=>{(b||M)&&F()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?_():Y(!0,!0)}),a("beforeTransitionStart",(J,ie,k)=>{t.destroyed||!t.autoplay.running||(k||!t.params.autoplay.disableOnInteraction?Y(!0,!0):_())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){_();return}S=!0,b=!1,M=!1,j=setTimeout(()=>{M=!0,b=!0,Y(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!S)){if(clearTimeout(j),clearTimeout(d),t.params.autoplay.disableOnInteraction){b=!1,S=!1;return}b&&t.params.cssMode&&F(),b=!1,S=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(L=!0)}),Object.assign(t.autoplay,{start:P,stop:_,pause:Y,resume:F})}let A0;function jR(){const e=Pt(),t=Fi();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Rw(){return A0||(A0=jR()),A0}let M0;function AR(e){let{userAgent:t}=e===void 0?{}:e;const n=Rw(),a=Pt(),o=a.navigator.platform,l=t||a.navigator.userAgent,d={ios:!1,android:!1},u=a.screen.width,f=a.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const v=l.match(/(iPod)(.*OS\s([\d_]+))?/),y=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),S=o==="Win32";let b=o==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&b&&n.touch&&j.indexOf(`${u}x${f}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),b=!1),m&&!S&&(d.os="android",d.android=!0),(g||y||v)&&(d.os="ios",d.ios=!0),d}function kw(e){return e===void 0&&(e={}),M0||(M0=AR(e)),M0}let L0;function MR(){const e=Pt(),t=kw();let n=!1;function a(){const u=e.navigator.userAgent.toLowerCase();return u.indexOf("safari")>=0&&u.indexOf("chrome")<0&&u.indexOf("android")<0}if(a()){const u=String(e.navigator.userAgent);if(u.includes("Version/")){const[f,m]=u.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));n=f<16||f===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=a(),d=l||o&&t.ios;return{isSafari:n||l,needPerspectiveFix:n,need3dFix:d,isWebView:o}}function Vw(){return L0||(L0=MR()),L0}function LR(e){let{swiper:t,on:n,emit:a}=e;const o=Pt();let l=null,d=null;const u=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},f=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(v=>{d=o.requestAnimationFrame(()=>{const{width:y,height:S}=t;let b=y,j=S;v.forEach(L=>{let{contentBoxSize:M,contentRect:E,target:T}=L;T&&T!==t.el||(b=E?E.width:(M[0]||M).inlineSize,j=E?E.height:(M[0]||M).blockSize)}),(b!==y||j!==S)&&u()})}),l.observe(t.el))},m=()=>{d&&o.cancelAnimationFrame(d),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){f();return}o.addEventListener("resize",u),o.addEventListener("orientationchange",g)}),n("destroy",()=>{m(),o.removeEventListener("resize",u),o.removeEventListener("orientationchange",g)})}function OR(e){let{swiper:t,extendParams:n,on:a,emit:o}=e;const l=[],d=Pt(),u=function(g,v){v===void 0&&(v={});const y=d.MutationObserver||d.WebkitMutationObserver,S=new y(b=>{if(t.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}const j=function(){o("observerUpdate",b[0])};d.requestAnimationFrame?d.requestAnimationFrame(j):d.setTimeout(j,0)});S.observe(g,{attributes:typeof v.attributes>"u"?!0:v.attributes,childList:t.isElement||(typeof v.childList>"u"?!0:v).childList,characterData:typeof v.characterData>"u"?!0:v.characterData}),l.push(S)},f=()=>{if(t.params.observer){if(t.params.observeParents){const g=Lw(t.hostEl);for(let v=0;v<g.length;v+=1)u(g[v])}u(t.hostEl,{childList:t.params.observeSlideChildren}),u(t.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",f),a("destroy",m)}var RR={on(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=n?"unshift":"push";return e.split(" ").forEach(l=>{a.eventsListeners[l]||(a.eventsListeners[l]=[]),a.eventsListeners[l][o](t)}),a},once(e,t,n){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,d=new Array(l),u=0;u<l;u++)d[u]=arguments[u];t.apply(a,d)}return o.__emitterProxy=t,a.on(e,o,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const a=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[a](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?n.eventsListeners[a]=[]:n.eventsListeners[a]&&n.eventsListeners[a].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&n.eventsListeners[a].splice(l,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,a;for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],n=l.slice(1,l.length),a=e):(t=l[0].events,n=l[0].data,a=l[0].context||e),n.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(f=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(m=>{m.apply(a,[f,...n])}),e.eventsListeners&&e.eventsListeners[f]&&e.eventsListeners[f].forEach(m=>{m.apply(a,n)})}),e}};function kR(){const e=this;let t,n;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=a.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Xn(a,"padding-left")||0,10)-parseInt(Xn(a,"padding-right")||0,10),n=n-parseInt(Xn(a,"padding-top")||0,10)-parseInt(Xn(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function VR(){const e=this;function t(F,K){return parseFloat(F.getPropertyValue(e.getDirectionLabel(K))||0)}const n=e.params,{wrapperEl:a,slidesEl:o,size:l,rtlTranslate:d,wrongRTL:u}=e,f=e.virtual&&n.virtual.enabled,m=f?e.virtual.slides.length:e.slides.length,g=Ii(o,`.${e.params.slideClass}, swiper-slide`),v=f?e.virtual.slides.length:g.length;let y=[];const S=[],b=[];let j=n.slidesOffsetBefore;typeof j=="function"&&(j=n.slidesOffsetBefore.call(e));let L=n.slidesOffsetAfter;typeof L=="function"&&(L=n.slidesOffsetAfter.call(e));const M=e.snapGrid.length,E=e.slidesGrid.length;let T=n.spaceBetween,V=-j,O=0,N=0;if(typeof l>"u")return;typeof T=="string"&&T.indexOf("%")>=0?T=parseFloat(T.replace("%",""))/100*l:typeof T=="string"&&(T=parseFloat(T)),e.virtualSize=-T,g.forEach(F=>{d?F.style.marginLeft="":F.style.marginRight="",F.style.marginBottom="",F.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(cc(a,"--swiper-centered-offset-before",""),cc(a,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let _;const Y=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(F=>typeof n.breakpoints[F].slidesPerView<"u").length>0;for(let F=0;F<v;F+=1){_=0;let K;if(g[F]&&(K=g[F]),P&&e.grid.updateSlide(F,K,g),!(g[F]&&Xn(K,"display")==="none")){if(n.slidesPerView==="auto"){Y&&(g[F].style[e.getDirectionLabel("width")]="");const ne=getComputedStyle(K),le=K.style.transform,ue=K.style.webkitTransform;if(le&&(K.style.transform="none"),ue&&(K.style.webkitTransform="none"),n.roundLengths)_=e.isHorizontal()?Yh(K,"width"):Yh(K,"height");else{const oe=t(ne,"width"),B=t(ne,"padding-left"),W=t(ne,"padding-right"),J=t(ne,"margin-left"),ie=t(ne,"margin-right"),k=ne.getPropertyValue("box-sizing");if(k&&k==="border-box")_=oe+J+ie;else{const{clientWidth:X,offsetWidth:ae}=K;_=oe+B+W+J+ie+(ae-X)}}le&&(K.style.transform=le),ue&&(K.style.webkitTransform=ue),n.roundLengths&&(_=Math.floor(_))}else _=(l-(n.slidesPerView-1)*T)/n.slidesPerView,n.roundLengths&&(_=Math.floor(_)),g[F]&&(g[F].style[e.getDirectionLabel("width")]=`${_}px`);g[F]&&(g[F].swiperSlideSize=_),b.push(_),n.centeredSlides?(V=V+_/2+O/2+T,O===0&&F!==0&&(V=V-l/2-T),F===0&&(V=V-l/2-T),Math.abs(V)<1/1e3&&(V=0),n.roundLengths&&(V=Math.floor(V)),N%n.slidesPerGroup===0&&y.push(V),S.push(V)):(n.roundLengths&&(V=Math.floor(V)),(N-Math.min(e.params.slidesPerGroupSkip,N))%e.params.slidesPerGroup===0&&y.push(V),S.push(V),V=V+_+T),e.virtualSize+=_+T,O=_,N+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+L,d&&u&&(n.effect==="slide"||n.effect==="coverflow")&&(a.style.width=`${e.virtualSize+T}px`),n.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+T}px`),P&&e.grid.updateWrapperSize(_,y),!n.centeredSlides){const F=[];for(let K=0;K<y.length;K+=1){let ne=y[K];n.roundLengths&&(ne=Math.floor(ne)),y[K]<=e.virtualSize-l&&F.push(ne)}y=F,Math.floor(e.virtualSize-l)-Math.floor(y[y.length-1])>1&&y.push(e.virtualSize-l)}if(f&&n.loop){const F=b[0]+T;if(n.slidesPerGroup>1){const K=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),ne=F*n.slidesPerGroup;for(let le=0;le<K;le+=1)y.push(y[y.length-1]+ne)}for(let K=0;K<e.virtual.slidesBefore+e.virtual.slidesAfter;K+=1)n.slidesPerGroup===1&&y.push(y[y.length-1]+F),S.push(S[S.length-1]+F),e.virtualSize+=F}if(y.length===0&&(y=[0]),T!==0){const F=e.isHorizontal()&&d?"marginLeft":e.getDirectionLabel("marginRight");g.filter((K,ne)=>!n.cssMode||n.loop?!0:ne!==g.length-1).forEach(K=>{K.style[F]=`${T}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let F=0;b.forEach(ne=>{F+=ne+(T||0)}),F-=T;const K=F>l?F-l:0;y=y.map(ne=>ne<=0?-j:ne>K?K+L:ne)}if(n.centerInsufficientSlides){let F=0;b.forEach(ne=>{F+=ne+(T||0)}),F-=T;const K=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(F+K<l){const ne=(l-F-K)/2;y.forEach((le,ue)=>{y[ue]=le-ne}),S.forEach((le,ue)=>{S[ue]=le+ne})}}if(Object.assign(e,{slides:g,snapGrid:y,slidesGrid:S,slidesSizesGrid:b}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){cc(a,"--swiper-centered-offset-before",`${-y[0]}px`),cc(a,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);const F=-e.snapGrid[0],K=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ne=>ne+F),e.slidesGrid=e.slidesGrid.map(ne=>ne+K)}if(v!==m&&e.emit("slidesLengthChange"),y.length!==M&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),S.length!==E&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!f&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const F=`${n.containerModifierClass}backface-hidden`,K=e.el.classList.contains(F);v<=n.maxBackfaceHiddenSlides?K||e.el.classList.add(F):K&&e.el.classList.remove(F)}}function HR(e){const t=this,n=[],a=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const d=u=>a?t.slides[t.getSlideIndexByData(u)]:t.slides[u];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(u=>{n.push(u)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const u=t.activeIndex+l;if(u>t.slides.length&&!a)break;n.push(d(u))}else n.push(d(t.activeIndex));for(l=0;l<n.length;l+=1)if(typeof n[l]<"u"){const u=n[l].offsetHeight;o=u>o?u:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function DR(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-n-e.cssOverflowAdjustment()}const rv=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function zR(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:a,rtlTranslate:o,snapGrid:l}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let d=-e;o&&(d=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let u=n.spaceBetween;typeof u=="string"&&u.indexOf("%")>=0?u=parseFloat(u.replace("%",""))/100*t.size:typeof u=="string"&&(u=parseFloat(u));for(let f=0;f<a.length;f+=1){const m=a[f];let g=m.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(g-=a[0].swiperSlideOffset);const v=(d+(n.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+u),y=(d-l[0]+(n.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+u),S=-(d-g),b=S+t.slidesSizesGrid[f],j=S>=0&&S<=t.size-t.slidesSizesGrid[f],L=S>=0&&S<t.size-1||b>1&&b<=t.size||S<=0&&b>=t.size;L&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(f)),rv(m,L,n.slideVisibleClass),rv(m,j,n.slideFullyVisibleClass),m.progress=o?-v:v,m.originalProgress=o?-y:y}}function PR(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const n=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:d,progressLoop:u}=t;const f=l,m=d;if(a===0)o=0,l=!0,d=!0;else{o=(e-t.minTranslate())/a;const g=Math.abs(e-t.minTranslate())<1,v=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,d=v||o>=1,g&&(o=0),v&&(o=1)}if(n.loop){const g=t.getSlideIndexByData(0),v=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],S=t.slidesGrid[v],b=t.slidesGrid[t.slidesGrid.length-1],j=Math.abs(e);j>=y?u=(j-y)/b:u=(j+b-S)/b,u>1&&(u-=1)}Object.assign(t,{progress:o,progressLoop:u,isBeginning:l,isEnd:d}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),l&&!f&&t.emit("reachBeginning toEdge"),d&&!m&&t.emit("reachEnd toEdge"),(f&&!l||m&&!d)&&t.emit("fromEdge"),t.emit("progress",o)}const O0=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function NR(){const e=this,{slides:t,params:n,slidesEl:a,activeIndex:o}=e,l=e.virtual&&n.virtual.enabled,d=e.grid&&n.grid&&n.grid.rows>1,u=v=>Ii(a,`.${n.slideClass}${v}, swiper-slide${v}`)[0];let f,m,g;if(l)if(n.loop){let v=o-e.virtual.slidesBefore;v<0&&(v=e.virtual.slides.length+v),v>=e.virtual.slides.length&&(v-=e.virtual.slides.length),f=u(`[data-swiper-slide-index="${v}"]`)}else f=u(`[data-swiper-slide-index="${o}"]`);else d?(f=t.find(v=>v.column===o),g=t.find(v=>v.column===o+1),m=t.find(v=>v.column===o-1)):f=t[o];f&&(d||(g=TR(f,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!g&&(g=t[0]),m=CR(f,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(v=>{O0(v,v===f,n.slideActiveClass),O0(v,v===g,n.slideNextClass),O0(v,v===m,n.slidePrevClass)}),e.emitSlidesClasses()}const Dc=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(n());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},R0=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Fh=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const d=o,u=[d-t];u.push(...Array.from({length:t}).map((f,m)=>d+a+m)),e.slides.forEach((f,m)=>{u.includes(f.column)&&R0(e,m)});return}const l=o+a-1;if(e.params.rewind||e.params.loop)for(let d=o-t;d<=l+t;d+=1){const u=(d%n+n)%n;(u<o||u>l)&&R0(e,u)}else for(let d=Math.max(o-t,0);d<=Math.min(l+t,n-1);d+=1)d!==o&&(d>l||d<o)&&R0(e,d)};function $R(e){const{slidesGrid:t,params:n}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?a>=t[l]&&a<t[l+1]-(t[l+1]-t[l])/2?o=l:a>=t[l]&&a<t[l+1]&&(o=l+1):a>=t[l]&&(o=l);return n.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function BR(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:l,realIndex:d,snapIndex:u}=t;let f=e,m;const g=S=>{let b=S-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof f>"u"&&(f=$R(t)),a.indexOf(n)>=0)m=a.indexOf(n);else{const S=Math.min(o.slidesPerGroupSkip,f);m=S+Math.floor((f-S)/o.slidesPerGroup)}if(m>=a.length&&(m=a.length-1),f===l&&!t.params.loop){m!==u&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(f===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(f);return}const v=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled&&o.loop)y=g(f);else if(v){const S=t.slides.find(j=>j.column===f);let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(S),0)),y=Math.floor(b/o.grid.rows)}else if(t.slides[f]){const S=t.slides[f].getAttribute("data-swiper-slide-index");S?y=parseInt(S,10):y=f}else y=f;Object.assign(t,{previousSnapIndex:u,snapIndex:m,previousRealIndex:d,realIndex:y,previousIndex:l,activeIndex:f}),t.initialized&&Fh(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(d!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function IR(e,t){const n=this,a=n.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(u=>{!o&&u.matches&&u.matches(`.${a.slideClass}, swiper-slide`)&&(o=u)});let l=!1,d;if(o){for(let u=0;u<n.slides.length;u+=1)if(n.slides[u]===o){l=!0,d=u;break}}if(o&&l)n.clickedSlide=o,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=d;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}a.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var UR={updateSize:kR,updateSlides:VR,updateAutoHeight:HR,updateSlidesOffset:DR,updateSlidesProgress:zR,updateProgress:PR,updateSlidesClasses:NR,updateActiveIndex:BR,updateClickedSlide:IR};function _R(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:a,translate:o,wrapperEl:l}=t;if(n.virtualTranslate)return a?-o:o;if(n.cssMode)return o;let d=yR(l,e);return d+=t.cssOverflowAdjustment(),a&&(d=-d),d||0}function GR(e,t){const n=this,{rtlTranslate:a,params:o,wrapperEl:l,progress:d}=n;let u=0,f=0;const m=0;n.isHorizontal()?u=a?-e:e:f=e,o.roundLengths&&(u=Math.floor(u),f=Math.floor(f)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?u:f,o.cssMode?l[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-u:-f:o.virtualTranslate||(n.isHorizontal()?u-=n.cssOverflowAdjustment():f-=n.cssOverflowAdjustment(),l.style.transform=`translate3d(${u}px, ${f}px, ${m}px)`);let g;const v=n.maxTranslate()-n.minTranslate();v===0?g=0:g=(e-n.minTranslate())/v,g!==d&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function qR(){return-this.snapGrid[0]}function YR(){return-this.snapGrid[this.snapGrid.length-1]}function FR(e,t,n,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),a===void 0&&(a=!0);const l=this,{params:d,wrapperEl:u}=l;if(l.animating&&d.preventInteractionOnTransition)return!1;const f=l.minTranslate(),m=l.maxTranslate();let g;if(a&&e>f?g=f:a&&e<m?g=m:g=e,l.updateProgress(g),d.cssMode){const v=l.isHorizontal();if(t===0)u[v?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return Mw({swiper:l,targetPosition:-g,side:v?"left":"top"}),!0;u.scrollTo({[v?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),n&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,n&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var XR={getTranslate:_R,setTranslate:GR,minTranslate:qR,maxTranslate:YR,translateTo:FR};function ZR(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Hw(e){let{swiper:t,runCallbacks:n,direction:a,step:o}=e;const{activeIndex:l,previousIndex:d}=t;let u=a;u||(l>d?u="next":l<d?u="prev":u="reset"),t.emit(`transition${o}`),n&&u==="reset"?t.emit(`slideResetTransition${o}`):n&&l!==d&&(t.emit(`slideChangeTransition${o}`),u==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function WR(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;a.cssMode||(a.autoHeight&&n.updateAutoHeight(),Hw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function KR(e,t){e===void 0&&(e=!0);const n=this,{params:a}=n;n.animating=!1,!a.cssMode&&(n.setTransition(0),Hw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var QR={setTransition:ZR,transitionStart:WR,transitionEnd:KR};function JR(e,t,n,a,o){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let d=e;d<0&&(d=0);const{params:u,snapGrid:f,slidesGrid:m,previousIndex:g,activeIndex:v,rtlTranslate:y,wrapperEl:S,enabled:b}=l;if(!b&&!a&&!o||l.destroyed||l.animating&&u.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const j=Math.min(l.params.slidesPerGroupSkip,d);let L=j+Math.floor((d-j)/l.params.slidesPerGroup);L>=f.length&&(L=f.length-1);const M=-f[L];if(u.normalizeSlideIndex)for(let P=0;P<m.length;P+=1){const _=-Math.floor(M*100),Y=Math.floor(m[P]*100),F=Math.floor(m[P+1]*100);typeof m[P+1]<"u"?_>=Y&&_<F-(F-Y)/2?d=P:_>=Y&&_<F&&(d=P+1):_>=Y&&(d=P)}if(l.initialized&&d!==v&&(!l.allowSlideNext&&(y?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(v||0)!==d))return!1;d!==(g||0)&&n&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let E;d>v?E="next":d<v?E="prev":E="reset";const T=l.virtual&&l.params.virtual.enabled;if(!(T&&o)&&(y&&-M===l.translate||!y&&M===l.translate))return l.updateActiveIndex(d),u.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),u.effect!=="slide"&&l.setTranslate(M),E!=="reset"&&(l.transitionStart(n,E),l.transitionEnd(n,E)),!1;if(u.cssMode){const P=l.isHorizontal(),_=y?M:-M;if(t===0)T&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),T&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[P?"scrollLeft":"scrollTop"]=_})):S[P?"scrollLeft":"scrollTop"]=_,T&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return Mw({swiper:l,targetPosition:_,side:P?"left":"top"}),!0;S.scrollTo({[P?"left":"top"]:_,behavior:"smooth"})}return!0}const N=Vw().isSafari;return T&&!o&&N&&l.isElement&&l.virtual.update(!1,!1,d),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(d),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,a),l.transitionStart(n,E),t===0?l.transitionEnd(n,E):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(_){!l||l.destroyed||_.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(n,E))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function ek(e,t,n,a){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let d=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)d=d+o.virtual.slidesBefore;else{let u;if(l){const y=d*o.params.grid.rows;u=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===y).column}else u=o.getSlideIndexByData(d);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let v=f-u<g;if(m&&(v=v||u<Math.ceil(g/2)),a&&m&&o.params.slidesPerView!=="auto"&&!l&&(v=!1),v){const y=m?u<o.activeIndex?"prev":"next":u-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?u+1:u-f+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(l){const y=d*o.params.grid.rows;d=o.slides.find(S=>S.getAttribute("data-swiper-slide-index")*1===y).column}else d=o.getSlideIndexByData(d)}return requestAnimationFrame(()=>{o.slideTo(d,t,n,a)}),o}function tk(e,t,n){t===void 0&&(t=!0);const a=this,{enabled:o,params:l,animating:d}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let u=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(u=Math.max(a.slidesPerViewDynamic("current",!0),1));const f=a.activeIndex<l.slidesPerGroupSkip?1:u,m=a.virtual&&l.virtual.enabled;if(l.loop){if(d&&!m&&l.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+f,e,t,n)}),!0}return l.rewind&&a.isEnd?a.slideTo(0,e,t,n):a.slideTo(a.activeIndex+f,e,t,n)}function ik(e,t,n){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:l,slidesGrid:d,rtlTranslate:u,enabled:f,animating:m}=a;if(!f||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const g=a.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const v=u?a.translate:-a.translate;function y(E){return E<0?-Math.floor(Math.abs(E)):Math.floor(E)}const S=y(v),b=l.map(E=>y(E)),j=o.freeMode&&o.freeMode.enabled;let L=l[b.indexOf(S)-1];if(typeof L>"u"&&(o.cssMode||j)){let E;l.forEach((T,V)=>{S>=T&&(E=V)}),typeof E<"u"&&(L=j?l[E]:l[E>0?E-1:E])}let M=0;if(typeof L<"u"&&(M=d.indexOf(L),M<0&&(M=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-a.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&a.isBeginning){const E=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(E,e,t,n)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(M,e,t,n)}),!0;return a.slideTo(M,e,t,n)}function nk(e,t,n){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,n)}function ak(e,t,n,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const d=Math.min(o.params.slidesPerGroupSkip,l),u=d+Math.floor((l-d)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[u]){const m=o.snapGrid[u],g=o.snapGrid[u+1];f-m>(g-m)*a&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[u-1],g=o.snapGrid[u];f-m<=(g-m)*a&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,n)}function rk(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const d=e.isElement?"swiper-slide":`.${t.slideClass}`,u=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(u?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Ii(n,`${d}[data-swiper-slide-index="${l}"]`)[0]),Aw(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var sk={slideTo:JR,slideToLoop:ek,slideNext:tk,slidePrev:ik,slideReset:nk,slideToClosest:ak,slideToClickedSlide:rk};function ok(e,t){const n=this,{params:a,slidesEl:o}=n;if(!a.loop||n.virtual&&n.params.virtual.enabled)return;const l=()=>{Ii(o,`.${a.slideClass}, swiper-slide`).forEach((S,b)=>{S.setAttribute("data-swiper-slide-index",b)})},d=()=>{const y=Ii(o,`.${a.slideBlankClass}`);y.forEach(S=>{S.remove()}),y.length>0&&(n.recalcSlides(),n.updateSlides())},u=n.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||u)&&d();const f=a.slidesPerGroup*(u?a.grid.rows:1),m=n.slides.length%f!==0,g=u&&n.slides.length%a.grid.rows!==0,v=y=>{for(let S=0;S<y;S+=1){const b=n.isElement?Kc("swiper-slide",[a.slideBlankClass]):Kc("div",[a.slideClass,a.slideBlankClass]);n.slidesEl.append(b)}};if(m){if(a.loopAddBlankSlides){const y=f-n.slides.length%f;v(y),n.recalcSlides(),n.updateSlides()}else Wc("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(a.loopAddBlankSlides){const y=a.grid.rows-n.slides.length%a.grid.rows;v(y),n.recalcSlides(),n.updateSlides()}else Wc("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();n.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function lk(e){let{slideRealIndex:t,slideTo:n=!0,direction:a,setTranslate:o,activeSlideIndex:l,initial:d,byController:u,byMousewheel:f}=e===void 0?{}:e;const m=this;if(!m.params.loop)return;m.emit("beforeLoopFix");const{slides:g,allowSlidePrev:v,allowSlideNext:y,slidesEl:S,params:b}=m,{centeredSlides:j,initialSlide:L}=b;if(m.allowSlidePrev=!0,m.allowSlideNext=!0,m.virtual&&b.virtual.enabled){n&&(!b.centeredSlides&&m.snapIndex===0?m.slideTo(m.virtual.slides.length,0,!1,!0):b.centeredSlides&&m.snapIndex<b.slidesPerView?m.slideTo(m.virtual.slides.length+m.snapIndex,0,!1,!0):m.snapIndex===m.snapGrid.length-1&&m.slideTo(m.virtual.slidesBefore,0,!1,!0)),m.allowSlidePrev=v,m.allowSlideNext=y,m.emit("loopFix");return}let M=b.slidesPerView;M==="auto"?M=m.slidesPerViewDynamic():(M=Math.ceil(parseFloat(b.slidesPerView,10)),j&&M%2===0&&(M=M+1));const E=b.slidesPerGroupAuto?M:b.slidesPerGroup;let T=j?Math.max(E,Math.ceil(M/2)):E;T%E!==0&&(T+=E-T%E),T+=b.loopAdditionalSlides,m.loopedSlides=T;const V=m.grid&&b.grid&&b.grid.rows>1;g.length<M+T||m.params.effect==="cards"&&g.length<M+T*2?Wc("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):V&&b.grid.fill==="row"&&Wc("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const O=[],N=[],P=V?Math.ceil(g.length/b.grid.rows):g.length,_=d&&P-L<M&&!j;let Y=_?L:m.activeIndex;typeof l>"u"?l=m.getSlideIndex(g.find(B=>B.classList.contains(b.slideActiveClass))):Y=l;const F=a==="next"||!a,K=a==="prev"||!a;let ne=0,le=0;const oe=(V?g[l].column:l)+(j&&typeof o>"u"?-M/2+.5:0);if(oe<T){ne=Math.max(T-oe,E);for(let B=0;B<T-oe;B+=1){const W=B-Math.floor(B/P)*P;if(V){const J=P-W-1;for(let ie=g.length-1;ie>=0;ie-=1)g[ie].column===J&&O.push(ie)}else O.push(P-W-1)}}else if(oe+M>P-T){le=Math.max(oe-(P-T*2),E),_&&(le=Math.max(le,M-P+L+1));for(let B=0;B<le;B+=1){const W=B-Math.floor(B/P)*P;V?g.forEach((J,ie)=>{J.column===W&&N.push(ie)}):N.push(W)}}if(m.__preventObserver__=!0,requestAnimationFrame(()=>{m.__preventObserver__=!1}),m.params.effect==="cards"&&g.length<M+T*2&&(N.includes(l)&&N.splice(N.indexOf(l),1),O.includes(l)&&O.splice(O.indexOf(l),1)),K&&O.forEach(B=>{g[B].swiperLoopMoveDOM=!0,S.prepend(g[B]),g[B].swiperLoopMoveDOM=!1}),F&&N.forEach(B=>{g[B].swiperLoopMoveDOM=!0,S.append(g[B]),g[B].swiperLoopMoveDOM=!1}),m.recalcSlides(),b.slidesPerView==="auto"?m.updateSlides():V&&(O.length>0&&K||N.length>0&&F)&&m.slides.forEach((B,W)=>{m.grid.updateSlide(W,B,m.slides)}),b.watchSlidesProgress&&m.updateSlidesOffset(),n){if(O.length>0&&K){if(typeof t>"u"){const B=m.slidesGrid[Y],J=m.slidesGrid[Y+ne]-B;f?m.setTranslate(m.translate-J):(m.slideTo(Y+Math.ceil(ne),0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-J,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-J))}else if(o){const B=V?O.length/b.grid.rows:O.length;m.slideTo(m.activeIndex+B,0,!1,!0),m.touchEventsData.currentTranslate=m.translate}}else if(N.length>0&&F)if(typeof t>"u"){const B=m.slidesGrid[Y],J=m.slidesGrid[Y-le]-B;f?m.setTranslate(m.translate-J):(m.slideTo(Y-le,0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-J,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-J))}else{const B=V?N.length/b.grid.rows:N.length;m.slideTo(m.activeIndex-B,0,!1,!0)}}if(m.allowSlidePrev=v,m.allowSlideNext=y,m.controller&&m.controller.control&&!u){const B={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(m.controller.control)?m.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...B,slideTo:W.params.slidesPerView===b.slidesPerView?n:!1})}):m.controller.control instanceof m.constructor&&m.controller.control.params.loop&&m.controller.control.loopFix({...B,slideTo:m.controller.control.params.slidesPerView===b.slidesPerView?n:!1})}m.emit("loopFix")}function ck(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{n.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var dk={loopCreate:ok,loopFix:lk,loopDestroy:ck};function uk(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function fk(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var hk={setGrabCursor:uk,unsetGrabCursor:fk};function pk(e,t){t===void 0&&(t=this);function n(a){if(!a||a===Fi()||a===Pt())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||n(a.getRootNode().host)}return n(t)}function sv(e,t,n){const a=Pt(),{params:o}=e,l=o.edgeSwipeDetection,d=o.edgeSwipeThreshold;return l&&(n<=d||n>=a.innerWidth-d)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function mk(e){const t=this,n=Fi();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){sv(t,a,a.targetTouches[0].pageX);return}const{params:l,touches:d,enabled:u}=t;if(!u||!l.simulateTouch&&a.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let f=a.target;if(l.touchEventsTarget==="wrapper"&&!SR(f,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=a.composedPath?a.composedPath():a.path;m&&a.target&&a.target.shadowRoot&&g&&(f=g[0]);const v=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(a.target&&a.target.shadowRoot);if(l.noSwiping&&(y?pk(v,f):f.closest(v))){t.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;d.currentX=a.pageX,d.currentY=a.pageY;const S=d.currentX,b=d.currentY;if(!sv(t,a,S))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=S,d.startY=b,o.touchStartTime=Zc(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let j=!0;f.matches(o.focusableElements)&&(j=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),n.activeElement&&n.activeElement.matches(o.focusableElements)&&n.activeElement!==f&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&n.activeElement.blur();const L=j&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||L)&&!f.isContentEditable&&a.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function gk(e){const t=Fi(),n=this,a=n.touchEventsData,{params:o,touches:l,rtlTranslate:d,enabled:u}=n;if(!u||!o.simulateTouch&&e.pointerType==="mouse")return;let f=e;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(a.touchId!==null||f.pointerId!==a.pointerId))return;let m;if(f.type==="touchmove"){if(m=[...f.changedTouches].find(O=>O.identifier===a.touchId),!m||m.identifier!==a.touchId)return}else m=f;if(!a.isTouched){a.startMoving&&a.isScrolling&&n.emit("touchMoveOpposite",f);return}const g=m.pageX,v=m.pageY;if(f.preventedByNestedSwiper){l.startX=g,l.startY=v;return}if(!n.allowTouchMove){f.target.matches(a.focusableElements)||(n.allowClick=!1),a.isTouched&&(Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v}),a.touchStartTime=Zc());return}if(o.touchReleaseOnEdges&&!o.loop)if(n.isVertical()){if(v<l.startY&&n.translate<=n.maxTranslate()||v>l.startY&&n.translate>=n.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(d&&(g>l.startX&&-n.translate<=n.maxTranslate()||g<l.startX&&-n.translate>=n.minTranslate()))return;if(!d&&(g<l.startX&&n.translate<=n.maxTranslate()||g>l.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==f.target&&f.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&f.target===t.activeElement&&f.target.matches(a.focusableElements)){a.isMoved=!0,n.allowClick=!1;return}a.allowTouchCallbacks&&n.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=v;const y=l.currentX-l.startX,S=l.currentY-l.startY;if(n.params.threshold&&Math.sqrt(y**2+S**2)<n.params.threshold)return;if(typeof a.isScrolling>"u"){let O;n.isHorizontal()&&l.currentY===l.startY||n.isVertical()&&l.currentX===l.startX?a.isScrolling=!1:y*y+S*S>=25&&(O=Math.atan2(Math.abs(S),Math.abs(y))*180/Math.PI,a.isScrolling=n.isHorizontal()?O>o.touchAngle:90-O>o.touchAngle)}if(a.isScrolling&&n.emit("touchMoveOpposite",f),typeof a.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(a.startMoving=!0),a.isScrolling||f.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;n.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let b=n.isHorizontal()?y:S,j=n.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(b=Math.abs(b)*(d?1:-1),j=Math.abs(j)*(d?1:-1)),l.diff=b,b*=o.touchRatio,d&&(b=-b,j=-j);const L=n.touchesDirection;n.swipeDirection=b>0?"prev":"next",n.touchesDirection=j>0?"prev":"next";const M=n.params.loop&&!o.cssMode,E=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!a.isMoved){if(M&&E&&n.loopFix({direction:n.swipeDirection}),a.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const O=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(O)}a.allowMomentumBounce=!1,o.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&L!==n.touchesDirection&&M&&E&&Math.abs(b)>=1){Object.assign(l,{startX:g,startY:v,currentX:g,currentY:v,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}n.emit("sliderMove",f),a.isMoved=!0,a.currentTranslate=b+a.startTranslate;let T=!0,V=o.resistanceRatio;if(o.touchReleaseOnEdges&&(V=0),b>0?(M&&E&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>n.minTranslate()&&(T=!1,o.resistance&&(a.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+a.startTranslate+b)**V))):b<0&&(M&&E&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(o.slidesPerView!=="auto"&&n.slides.length-o.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(o.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<n.maxTranslate()&&(T=!1,o.resistance&&(a.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-a.startTranslate-b)**V))),T&&(f.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,a.currentTranslate=a.startTranslate,l.diff=n.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&n.freeMode||o.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(a.currentTranslate),n.setTranslate(a.currentTranslate))}function xk(e){const t=this,n=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(O=>O.identifier===n.touchId),!o||o.identifier!==n.touchId)return}else{if(n.touchId!==null||a.pointerId!==n.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:d,touches:u,rtlTranslate:f,slidesGrid:m,enabled:g}=t;if(!g||!d.simulateTouch&&a.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",a),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&d.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}d.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const v=Zc(),y=v-n.touchStartTime;if(t.allowClick){const O=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(O&&O[0]||a.target,O),t.emit("tap click",a),y<300&&v-n.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(n.lastClickTime=Zc(),Aw(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||u.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let S;if(d.followFinger?S=f?t.translate:-t.translate:S=-n.currentTranslate,d.cssMode)return;if(d.freeMode&&d.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-t.maxTranslate()&&!t.params.loop;let j=0,L=t.slidesSizesGrid[0];for(let O=0;O<m.length;O+=O<d.slidesPerGroupSkip?1:d.slidesPerGroup){const N=O<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;typeof m[O+N]<"u"?(b||S>=m[O]&&S<m[O+N])&&(j=O,L=m[O+N]-m[O]):(b||S>=m[O])&&(j=O,L=m[m.length-1]-m[m.length-2])}let M=null,E=null;d.rewind&&(t.isBeginning?E=d.virtual&&d.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const T=(S-m[j])/L,V=j<d.slidesPerGroupSkip-1?1:d.slidesPerGroup;if(y>d.longSwipesMs){if(!d.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(T>=d.longSwipesRatio?t.slideTo(d.rewind&&t.isEnd?M:j+V):t.slideTo(j)),t.swipeDirection==="prev"&&(T>1-d.longSwipesRatio?t.slideTo(j+V):E!==null&&T<0&&Math.abs(T)>d.longSwipesRatio?t.slideTo(E):t.slideTo(j))}else{if(!d.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(j+V):t.slideTo(j):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:j+V),t.swipeDirection==="prev"&&t.slideTo(E!==null?E:j))}}function ov(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:l}=e,d=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const u=d&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!u?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!d?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function vk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function yk(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function wk(e){const t=this;Dc(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function bk(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Dw=(e,t)=>{const n=Fi(),{params:a,el:o,wrapperEl:l,device:d}=e,u=!!a.nested,f=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(n[f]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:u}),o[f]("touchstart",e.onTouchStart,{passive:!1}),o[f]("pointerdown",e.onTouchStart,{passive:!1}),n[f]("touchmove",e.onTouchMove,{passive:!1,capture:u}),n[f]("pointermove",e.onTouchMove,{passive:!1,capture:u}),n[f]("touchend",e.onTouchEnd,{passive:!0}),n[f]("pointerup",e.onTouchEnd,{passive:!0}),n[f]("pointercancel",e.onTouchEnd,{passive:!0}),n[f]("touchcancel",e.onTouchEnd,{passive:!0}),n[f]("pointerout",e.onTouchEnd,{passive:!0}),n[f]("pointerleave",e.onTouchEnd,{passive:!0}),n[f]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[f]("click",e.onClick,!0),a.cssMode&&l[f]("scroll",e.onScroll),a.updateOnWindowResize?e[m](d.ios||d.android?"resize orientationchange observerUpdate":"resize observerUpdate",ov,!0):e[m]("observerUpdate",ov,!0),o[f]("load",e.onLoad,{capture:!0}))};function Sk(){const e=this,{params:t}=e;e.onTouchStart=mk.bind(e),e.onTouchMove=gk.bind(e),e.onTouchEnd=xk.bind(e),e.onDocumentTouchStart=bk.bind(e),t.cssMode&&(e.onScroll=yk.bind(e)),e.onClick=vk.bind(e),e.onLoad=wk.bind(e),Dw(e,"on")}function Ck(){Dw(this,"off")}var Tk={attachEvents:Sk,detachEvents:Ck};const lv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Ek(){const e=this,{realIndex:t,initialized:n,params:a,el:o}=e,l=a.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const d=Fi(),u=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",f=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:d.querySelector(a.breakpointsBase),m=e.getBreakpoint(l,u,f);if(!m||e.currentBreakpoint===m)return;const v=(m in l?l[m]:void 0)||e.originalParams,y=lv(e,a),S=lv(e,v),b=e.params.grabCursor,j=v.grabCursor,L=a.enabled;y&&!S?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&S&&(o.classList.add(`${a.containerModifierClass}grid`),(v.grid.fill&&v.grid.fill==="column"||!v.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!j?e.unsetGrabCursor():!b&&j&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(N=>{if(typeof v[N]>"u")return;const P=a[N]&&a[N].enabled,_=v[N]&&v[N].enabled;P&&!_&&e[N].disable(),!P&&_&&e[N].enable()});const M=v.direction&&v.direction!==a.direction,E=a.loop&&(v.slidesPerView!==a.slidesPerView||M),T=a.loop;M&&n&&e.changeDirection(),ri(e.params,v);const V=e.params.enabled,O=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),L&&!V?e.disable():!L&&V&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",v),n&&(E?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!T&&O?(e.loopCreate(t),e.updateSlides()):T&&!O&&e.loopDestroy()),e.emit("breakpoint",v)}function jk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let a=!1;const o=Pt(),l=t==="window"?o.innerHeight:n.clientHeight,d=Object.keys(e).map(u=>{if(typeof u=="string"&&u.indexOf("@")===0){const f=parseFloat(u.substr(1));return{value:l*f,point:u}}return{value:u,point:u}});d.sort((u,f)=>parseInt(u.value,10)-parseInt(f.value,10));for(let u=0;u<d.length;u+=1){const{point:f,value:m}=d[u];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(a=f):m<=n.clientWidth&&(a=f)}return a||"max"}var Ak={setBreakpoint:Ek,getBreakpoint:jk};function Mk(e,t){const n=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&n.push(t+o)}):typeof a=="string"&&n.push(t+a)}),n}function Lk(){const e=this,{classNames:t,params:n,rtl:a,el:o,device:l}=e,d=Mk(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:a},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...d),o.classList.add(...t),e.emitContainerClasses()}function Ok(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var Rk={addClasses:Lk,removeClasses:Ok};function kk(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:a}=n;if(a){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Vk={checkOverflow:kk},Xh={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Hk(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],l=a[o];if(typeof l!="object"||l===null){ri(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){ri(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),ri(t,a)}}const k0={eventsEmitter:RR,update:UR,translate:XR,transition:QR,slide:sk,loop:dk,grabCursor:hk,events:Tk,breakpoints:Ak,checkOverflow:Vk,classes:Rk},V0={};let h1=class hn{constructor(){let t,n;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?n=o[0]:[t,n]=o,n||(n={}),n=ri({},n),t&&!n.el&&(n.el=t);const d=Fi();if(n.el&&typeof n.el=="string"&&d.querySelectorAll(n.el).length>1){const g=[];return d.querySelectorAll(n.el).forEach(v=>{const y=ri({},n,{el:v});g.push(new hn(y))}),g}const u=this;u.__swiper__=!0,u.support=Rw(),u.device=kw({userAgent:n.userAgent}),u.browser=Vw(),u.eventsListeners={},u.eventsAnyListeners=[],u.modules=[...u.__modules__],n.modules&&Array.isArray(n.modules)&&u.modules.push(...n.modules);const f={};u.modules.forEach(g=>{g({params:n,swiper:u,extendParams:Hk(n,f),on:u.on.bind(u),once:u.once.bind(u),off:u.off.bind(u),emit:u.emit.bind(u)})});const m=ri({},Xh,f);return u.params=ri({},m,V0,n),u.originalParams=ri({},u.params),u.passedParams=ri({},n),u.params&&u.params.on&&Object.keys(u.params.on).forEach(g=>{u.on(g,u.params.on[g])}),u.params&&u.params.onAny&&u.onAny(u.params.onAny),Object.assign(u,{enabled:u.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return u.params.direction==="horizontal"},isVertical(){return u.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:u.params.allowSlideNext,allowSlidePrev:u.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:u.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:u.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),u.emit("_swiper"),u.params.init&&u.init(),u}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:a}=this,o=Ii(n,`.${a.slideClass}, swiper-slide`),l=Qc(o[0]);return Qc(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(n=>n.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:n,params:a}=t;t.slides=Ii(n,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),d=(a.maxTranslate()-o)*t+o;a.translateTo(d,typeof n>"u"?0:n),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);n.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const a=this,{params:o,slides:l,slidesGrid:d,slidesSizesGrid:u,size:f,activeIndex:m}=a;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let v=l[m]?Math.ceil(l[m].swiperSlideSize):0,y;for(let S=m+1;S<l.length;S+=1)l[S]&&!y&&(v+=Math.ceil(l[S].swiperSlideSize),g+=1,v>f&&(y=!0));for(let S=m-1;S>=0;S-=1)l[S]&&!y&&(v+=l[S].swiperSlideSize,g+=1,v>f&&(y=!0))}else if(t==="current")for(let v=m+1;v<l.length;v+=1)(n?d[v]+u[v]-d[m]<f:d[v]-d[m]<f)&&(g+=1);else for(let v=m-1;v>=0;v-=1)d[m]-d[v]<f&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(d=>{d.complete&&Dc(t,d)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const d=t.rtlTranslate?t.translate*-1:t.translate,u=Math.min(Math.max(d,t.maxTranslate()),t.minTranslate());t.setTranslate(u),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const d=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(d.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}a.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),a.emit("changeDirection"),n&&a.update()),a}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let a=t||n.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=n,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const o=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let d=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Ii(a,o())[0];return!d&&n.params.createElements&&(d=Kc("div",n.params.wrapperClass),a.append(d),Ii(a,`.${n.params.slideClass}`).forEach(u=>{d.append(u)})),Object.assign(n,{el:a,wrapperEl:d,slidesEl:n.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:d,hostEl:n.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Xn(a,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Xn(a,"direction")==="rtl"),wrongRTL:Xn(d,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(void 0,!0),n.attachEvents();const o=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?Dc(n,l):l.addEventListener("load",d=>{Dc(n,d.target)})}),Fh(n),n.initialized=!0,Fh(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const a=this,{params:o,el:l,wrapperEl:d,slides:u}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),n&&(a.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),d&&d.removeAttribute("style"),u&&u.length&&u.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(f=>{a.off(f)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),xR(a)),a.destroyed=!0),null}static extendDefaults(t){ri(V0,t)}static get extendedDefaults(){return V0}static get defaults(){return Xh}static installModule(t){hn.prototype.__modules__||(hn.prototype.__modules__=[]);const n=hn.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>hn.installModule(n)),hn):(hn.installModule(t),hn)}};Object.keys(k0).forEach(e=>{Object.keys(k0[e]).forEach(t=>{h1.prototype[t]=k0[e][t]})});h1.use([LR,OR]);const zw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Aa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Or(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>n.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Aa(t[a])&&Aa(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:Or(e[a],t[a]):e[a]=t[a]})}function Pw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Nw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function $w(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Bw(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),n=[];return t.forEach(a=>{n.indexOf(a)<0&&n.push(a)}),n.join(" ")}function Dk(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function zk(e){let{swiper:t,slides:n,passedParams:a,changedParams:o,nextEl:l,prevEl:d,scrollbarEl:u,paginationEl:f}=e;const m=o.filter(Y=>Y!=="children"&&Y!=="direction"&&Y!=="wrapperClass"),{params:g,pagination:v,navigation:y,scrollbar:S,virtual:b,thumbs:j}=t;let L,M,E,T,V,O,N,P;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(L=!0),o.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(M=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||f)&&(g.pagination||g.pagination===!1)&&v&&!v.el&&(E=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||u)&&(g.scrollbar||g.scrollbar===!1)&&S&&!S.el&&(T=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||d)&&(a.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(V=!0);const _=Y=>{t[Y]&&(t[Y].destroy(),Y==="navigation"?(t.isElement&&(t[Y].prevEl.remove(),t[Y].nextEl.remove()),g[Y].prevEl=void 0,g[Y].nextEl=void 0,t[Y].prevEl=void 0,t[Y].nextEl=void 0):(t.isElement&&t[Y].el.remove(),g[Y].el=void 0,t[Y].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!a.loop?O=!0:!g.loop&&a.loop?N=!0:P=!0),m.forEach(Y=>{if(Aa(g[Y])&&Aa(a[Y]))Object.assign(g[Y],a[Y]),(Y==="navigation"||Y==="pagination"||Y==="scrollbar")&&"enabled"in a[Y]&&!a[Y].enabled&&_(Y);else{const F=a[Y];(F===!0||F===!1)&&(Y==="navigation"||Y==="pagination"||Y==="scrollbar")?F===!1&&_(Y):g[Y]=a[Y]}}),m.includes("controller")&&!M&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&n&&b&&g.virtual.enabled?(b.slides=n,b.update(!0)):o.includes("virtual")&&b&&g.virtual.enabled&&(n&&(b.slides=n),b.update(!0)),o.includes("children")&&n&&g.loop&&(P=!0),L&&j.init()&&j.update(!0),M&&(t.controller.control=g.controller.control),E&&(t.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-pagination"),f.part.add("pagination"),t.el.appendChild(f)),f&&(g.pagination.el=f),v.init(),v.render(),v.update()),T&&(t.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-scrollbar"),u.part.add("scrollbar"),t.el.appendChild(u)),u&&(g.scrollbar.el=u),S.init(),S.updateSize(),S.setTranslate()),V&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),Jc(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-button-prev"),Jc(d,t.hostEl.constructor.prevButtonSvg),d.part.add("button-prev"),t.el.appendChild(d))),l&&(g.navigation.nextEl=l),d&&(g.navigation.prevEl=d),y.init(),y.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(O||P)&&t.loopDestroy(),(N||P)&&t.loopCreate(),t.update()}function Pk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},a={},o={};Or(n,Xh),n._emitClasses=!0,n.init=!1;const l={},d=zw.map(f=>f.replace(/_/,"")),u=Object.assign({},e);return Object.keys(u).forEach(f=>{typeof e[f]>"u"||(d.indexOf(f)>=0?Aa(e[f])?(n[f]={},o[f]={},Or(n[f],e[f]),Or(o[f],e[f])):(n[f]=e[f],o[f]=e[f]):f.search(/on[A-Z]/)===0&&typeof e[f]=="function"?t?a[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:n.on[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:l[f]=e[f])}),["navigation","pagination","scrollbar"].forEach(f=>{n[f]===!0&&(n[f]={}),n[f]===!1&&delete n[f]}),{params:n,passedParams:o,rest:l,events:a}}function Nk(e,t){let{el:n,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:d,swiper:u}=e;Pw(t)&&a&&o&&(u.params.navigation.nextEl=a,u.originalParams.navigation.nextEl=a,u.params.navigation.prevEl=o,u.originalParams.navigation.prevEl=o),Nw(t)&&l&&(u.params.pagination.el=l,u.originalParams.pagination.el=l),$w(t)&&d&&(u.params.scrollbar.el=d,u.originalParams.scrollbar.el=d),u.init(n)}function $k(e,t,n,a,o){const l=[];if(!t)return l;const d=f=>{l.indexOf(f)<0&&l.push(f)};if(n&&a){const f=a.map(o),m=n.map(o);f.join("")!==m.join("")&&d("children"),a.length!==n.length&&d("children")}return zw.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in e&&f in t)if(Aa(e[f])&&Aa(t[f])){const m=Object.keys(e[f]),g=Object.keys(t[f]);m.length!==g.length?d(f):(m.forEach(v=>{e[f][v]!==t[f][v]&&d(f)}),g.forEach(v=>{e[f][v]!==t[f][v]&&d(f)}))}else e[f]!==t[f]&&d(f)}),l}const Bk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ed(){return ed=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ed.apply(this,arguments)}function Iw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Uw(e){const t=[];return je.Children.toArray(e).forEach(n=>{Iw(n)?t.push(n):n.props&&n.props.children&&Uw(n.props.children).forEach(a=>t.push(a))}),t}function Ik(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return je.Children.toArray(e).forEach(a=>{if(Iw(a))t.push(a);else if(a.props&&a.props.slot&&n[a.props.slot])n[a.props.slot].push(a);else if(a.props&&a.props.children){const o=Uw(a.props.children);o.length>0?o.forEach(l=>t.push(l)):n["container-end"].push(a)}else n["container-end"].push(a)}),{slides:t,slots:n}}function Uk(e,t,n){if(!n)return null;const a=g=>{let v=g;return g<0?v=t.length+g:v>=t.length&&(v=v-t.length),v},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:l,to:d}=n,u=e.params.loop?-t.length:0,f=e.params.loop?t.length*2:t.length,m=[];for(let g=u;g<f;g+=1)g>=l&&g<=d&&m.push(t[a(g)]);return m.map((g,v)=>je.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${v}`}))}function ho(e,t){return typeof window>"u"?R.useEffect(e,t):R.useLayoutEffect(e,t)}const cv=R.createContext(null),_k=R.createContext(null),Yt=R.forwardRef(function(e,t){let{className:n,tag:a="div",wrapperTag:o="div",children:l,onSwiper:d,...u}=e===void 0?{}:e,f=!1;const[m,g]=R.useState("swiper"),[v,y]=R.useState(null),[S,b]=R.useState(!1),j=R.useRef(!1),L=R.useRef(null),M=R.useRef(null),E=R.useRef(null),T=R.useRef(null),V=R.useRef(null),O=R.useRef(null),N=R.useRef(null),P=R.useRef(null),{params:_,passedParams:Y,rest:F,events:K}=Pk(u),{slides:ne,slots:le}=Ik(l),ue=()=>{b(!S)};Object.assign(_.on,{_containerClasses(ie,k){g(k)}});const oe=()=>{Object.assign(_.on,K),f=!0;const ie={..._};if(delete ie.wrapperClass,M.current=new h1(ie),M.current.virtual&&M.current.params.virtual.enabled){M.current.virtual.slides=ne;const k={cache:!1,slides:ne,renderExternal:y,renderExternalUpdate:!1};Or(M.current.params.virtual,k),Or(M.current.originalParams.virtual,k)}};L.current||oe(),M.current&&M.current.on("_beforeBreakpoint",ue);const B=()=>{f||!K||!M.current||Object.keys(K).forEach(ie=>{M.current.on(ie,K[ie])})},W=()=>{!K||!M.current||Object.keys(K).forEach(ie=>{M.current.off(ie,K[ie])})};R.useEffect(()=>()=>{M.current&&M.current.off("_beforeBreakpoint",ue)}),R.useEffect(()=>{!j.current&&M.current&&(M.current.emitSlidesClasses(),j.current=!0)}),ho(()=>{if(t&&(t.current=L.current),!!L.current)return M.current.destroyed&&oe(),Nk({el:L.current,nextEl:V.current,prevEl:O.current,paginationEl:N.current,scrollbarEl:P.current,swiper:M.current},_),d&&!M.current.destroyed&&d(M.current),()=>{M.current&&!M.current.destroyed&&M.current.destroy(!0,!1)}},[]),ho(()=>{B();const ie=$k(Y,E.current,ne,T.current,k=>k.key);return E.current=Y,T.current=ne,ie.length&&M.current&&!M.current.destroyed&&zk({swiper:M.current,slides:ne,passedParams:Y,changedParams:ie,nextEl:V.current,prevEl:O.current,scrollbarEl:P.current,paginationEl:N.current}),()=>{W()}}),ho(()=>{Bk(M.current)},[v]);function J(){return _.virtual?Uk(M.current,ne,v):ne.map((ie,k)=>je.cloneElement(ie,{swiper:M.current,swiperSlideIndex:k}))}return je.createElement(a,ed({ref:L,className:Bw(`${m}${n?` ${n}`:""}`)},F),je.createElement(_k.Provider,{value:M.current},le["container-start"],je.createElement(o,{className:Dk(_.wrapperClass)},le["wrapper-start"],J(),le["wrapper-end"]),Pw(_)&&je.createElement(je.Fragment,null,je.createElement("div",{ref:O,className:"swiper-button-prev"}),je.createElement("div",{ref:V,className:"swiper-button-next"})),$w(_)&&je.createElement("div",{ref:P,className:"swiper-scrollbar"}),Nw(_)&&je.createElement("div",{ref:N,className:"swiper-pagination"}),le["container-end"]))});Yt.displayName="Swiper";const Ft=R.forwardRef(function(e,t){let{tag:n="div",children:a,className:o="",swiper:l,zoom:d,lazy:u,virtualIndex:f,swiperSlideIndex:m,...g}=e===void 0?{}:e;const v=R.useRef(null),[y,S]=R.useState("swiper-slide"),[b,j]=R.useState(!1);function L(V,O,N){O===v.current&&S(N)}ho(()=>{if(typeof m<"u"&&(v.current.swiperSlideIndex=m),t&&(t.current=v.current),!(!v.current||!l)){if(l.destroyed){y!=="swiper-slide"&&S("swiper-slide");return}return l.on("_slideClass",L),()=>{l&&l.off("_slideClass",L)}}}),ho(()=>{l&&v.current&&!l.destroyed&&S(l.getSlideClasses(v.current))},[l]);const M={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},E=()=>typeof a=="function"?a(M):a,T=()=>{j(!0)};return je.createElement(n,ed({ref:v,className:Bw(`${y}${o?` ${o}`:""}`),"data-swiper-slide-index":f,onLoad:T},g),d&&je.createElement(cv.Provider,{value:M},je.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof d=="number"?d:void 0},E(),u&&!b&&je.createElement("div",{className:"swiper-lazy-preloader"}))),!d&&je.createElement(cv.Provider,{value:M},E(),u&&!b&&je.createElement("div",{className:"swiper-lazy-preloader"})))});Ft.displayName="SwiperSlide";const Gk=w(Yt)`
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
`,qk=w(Ft)`
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
`,Yk=w.section`
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
`,Fk=Qe`
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
`,Xk=Qe`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-2px);
  }
`,Zk=Qe`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(2px);
  }
`,Wk=Qe`
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
`,Kk=w.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,dv=w.button`
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
      ${Fk} 0.6s ease,
      ${Wk} 0.6s ease;
    transform: translateY(-2px);

    &::before {
      width: 300%;
      height: 300%;
    }

    ${e=>e.$bg==="#DBDBD8"&&zt`
        background-color: #c8c8c5;
        box-shadow: 0 4px 15px rgba(219, 219, 216, 0.4);

        svg {
          animation: ${Xk} 0.4s ease;
        }
      `}

    ${e=>e.$bg==="#3098EE"&&zt`
        background-color: #2580d6;
        box-shadow: 0 4px 15px rgba(48, 152, 238, 0.4);

        svg {
          animation: ${Zk} 0.4s ease;
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
`,Qk=w.div`
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
`,Jk=w.p`
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
`,eV=w.p`
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
`,tV=w.img`
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
`;const iV=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${e=>e.$isActive?"898px":"437px"};
    height: ${e=>e.$isActive?"500px":"285px"};
  }
`,nV=w.div`
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
`,aV=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,rV=w.div`
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
`;const uv=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sV=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oV=w.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,lV=w.div`
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
`,cV="/assets/Review%20Image%203-bwglEcYl.png",fv="/assets/Review%20Image%201-BysFOq9G.png",hv="/assets/Review%20Image%202-C_HtVc_c.png",pv="/assets/Review%20Image%205-B3ukDKHL.png",dV="/assets/Review%20Image%204-AW0fOgIu.png",uV=fT`
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
`,fV=w.section`
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
`,hV=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
`,pV=w.p`
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
`,mV=w.h3`
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
`,_w=w.span`
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
`,gV=w.div`
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
`,xV=w.div`
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
`,vV=w.div`
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
`,yV=w(vV)`
  ${e=>e.$isLargeDesktop&&`
    margin: 0;
    transition: all 0.2s ease;
    
    .overlay {
      margin-bottom: 5%;
    }
  `}
`,wV=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 0.5rem;
`,bV=w.div`
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
`,SV=w.p`
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
`,CV=w.div`
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
`;function Gw(){const[e,t]=R.useState(null),[n,a]=R.useState(0),o=R.useRef(null),l=R.useRef(null),d=()=>{e&&e.slidePrev()},u=()=>{e&&e.slideNext()},f=[{image:cV,description:"A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.",title:"Quick Fix for a Washing Machine Breakdown",type:"Washing Machine Repair"},{image:hv,description:"We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.",title:"Professional Dishwasher Installation",type:"Dishwasher Installation"},{image:pv,description:"A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.",title:"Refrigerator Leak and Cooling Repair",type:"Refrigerator Repair"},{image:dV,description:"The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.",title:"Dryer Overheating Problem Solved",type:"Dryer Repair"},{image:fv,description:"An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",title:"Oven Heating Restored for Perfect Meals",type:"Oven Repair"},{image:pv,description:"We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.",title:"Seamless Washing Machine Installation",type:"Washing Machine Installation"},{image:hv,description:"A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.",title:"Emergency Freezer Repair",type:"Freezer Repair"},{image:fv,description:"A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",title:"Stove Emergency Fixed Same Day",type:"Stove Repair"}],m={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},g={hidden:{opacity:0,scale:.9,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:te}}},v={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}},hover:{scale:1.1,transition:{duration:.2}},tap:{scale:.95}};return h.jsxs(Yk,{children:[h.jsxs(Qk,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",variants:m,children:h.jsx(Jk,{children:"Our Cases"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:m,transition:{delay:.1},children:h.jsxs(eV,{children:[h.jsx(_w,{children:"Success Stories "})," That Bring Your Appliances Back to Life"]})})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:g,children:h.jsx(lV,{children:h.jsx(Gk,{modules:[oi],pagination:{clickable:!0},spaceBetween:20,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,onSwiper:t,onSlideChange:y=>a(y.realIndex),breakpoints:{1440:{slidesPerView:6,spaceBetween:30,centeredSlides:!0}},children:f.map(({image:y,description:S,title:b,type:j},L)=>h.jsx(qk,{$isActive:n===L,$index:L,children:h.jsx(D.div,{whileHover:{scale:n===L?1.05:1.02,transition:{duration:.3}},whileTap:{scale:.98},children:h.jsxs(iV,{$isActive:n===L,$index:L,children:[h.jsx(D.div,{whileHover:{scale:1.1,transition:{duration:.4}},children:h.jsx(tV,{src:y,alt:j,$isActive:n===L,$index:L})}),h.jsx(nV,{$isActive:n===L,$index:L,children:h.jsxs(aV,{children:[h.jsx(rV,{children:h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.7,y:n===L?0:5},transition:{duration:.3},children:h.jsx(uv,{children:S})})}),h.jsxs(sV,{children:[h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.8,y:n===L?0:5},transition:{duration:.3,delay:.1},children:h.jsx(oV,{children:b})}),h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:n===L?1:.6,y:n===L?0:5},transition:{duration:.3,delay:.2},children:h.jsx(uv,{children:j})})]})]})})]})})},L))})})}),h.jsxs(Kk,{children:[h.jsx(D.div,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx(dv,{ref:o,$bg:"#DBDBD8",onClick:d,children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),h.jsx(D.div,{variants:v,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:h.jsx(dv,{ref:l,$bg:"#3098EE",onClick:u,children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})}const TV=w(D.div)`
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
`,EV=w.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`,jV=({type:e,message:t,onClose:n,autoClose:a=!0,autoCloseDuration:o=25e3})=>{const{t:l}=d1();R.useEffect(()=>{if(a){const u=setTimeout(()=>{n()},o);return()=>clearTimeout(u)}},[a,o,n]);const d={success:l("alert.success"),error:l("alert.error")};return h.jsxs(TV,{$type:e,initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",damping:25},children:[h.jsx("div",{children:t||d[e]}),h.jsx(EV,{onClick:n,children:"×"})]})},AV="/assets/ContactFormImage-CaQYWUqs.png",jd=()=>{const[e,t]=R.useState(""),[n,a]=R.useState({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),[o,l]=R.useState({}),[d,u]=R.useState(null),[f,m]=R.useState(!1),g=()=>{m(!0)},v=()=>{m(!1)},y=T=>{const{name:V,value:O}=T.target;a(N=>({...N,[V]:O})),l(N=>({...N,[V]:!1}))},S=()=>{const T={};return e||(T.service=!0),n.name||(T.name=!0),n.email||(T.email=!0),n.phone||(T.phone=!0),n.location||(T.location=!0),n.appliance||(T.appliance=!0),n.brand||(T.brand=!0),n.power||(T.power=!0),T},b=async T=>{T.preventDefault();const V=S();if(Object.keys(V).length>0){l(V),u({type:"error",message:"Please fill all required fields"});return}try{if((await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service:e,...n})})).ok)t(""),a({name:"",email:"",phone:"",location:"",appliance:"",brand:"",power:"",details:""}),l({}),u({type:"success",message:"Form submitted successfully! We will contact you soon."});else throw new Error("Failed to submit form")}catch(O){console.error("Error submitting form:",O),u({type:"error",message:"There was an error submitting the form. Please try again."})}},j={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},L={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.7,ease:te}}},M={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:te}},focus:{scale:1.02,transition:{duration:.2}}},E={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return h.jsxs(h.Fragment,{children:[h.jsxs(VV,{children:[h.jsxs(vv,{children:[h.jsxs(D0,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,children:h.jsxs(HV,{children:[" ",h.jsx("span",{children:"Contact"})," our team"]})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,transition:{delay:.1},children:h.jsx(fc,{children:"We love our customers, so feel free to call during normal business hours"})})]})," ",h.jsx(D.div,{variants:E,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(DV,{children:h.jsx(zV,{children:"Call Us for Fast Repair"})})})}),h.jsxs(vv,{children:[h.jsx(PV,{}),h.jsxs(NV,{children:[h.jsxs(yv,{width:"251px",children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,children:h.jsx(wv,{children:"Service Hours"})}),h.jsx(D0,{children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,transition:{delay:.2},children:h.jsxs(fc,{children:["Mon–Sat: 8AM–6PM ",h.jsx("br",{})," Sun: 9AM–4PM"," "]})})})]}),h.jsxs(yv,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,transition:{delay:.3},children:h.jsx(wv,{children:"Our Location"})}),h.jsxs(D0,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,transition:{delay:.4},children:h.jsxs("a",{href:"http://maps.google.com/?q=801+Tioga+pl,+Newbury+Park,+CA+91320",target:"_blank",rel:"noopener noreferrer",children:[" ",h.jsx(fc,{children:" 801 Tioga Pl, Newbury Park, CA 91320"})]})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,transition:{delay:.5},children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(fc,{children:"+1 (805) 500-2705"})})})]})]})]})]})]}),h.jsx(D.div,{variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:h.jsxs(MV,{onSubmit:b,children:[h.jsx(D.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,ease:te},children:h.jsx($V,{src:AV,alt:"contact image"})}),h.jsx(fn,{children:"What service do you need for your appliances?"}),h.jsxs(LV,{children:[h.jsx(D.div,{variants:M,whileHover:"hover",children:h.jsxs(mv,{style:o.service?{borderColor:"red"}:{},children:[h.jsx(gv,{name:"service",value:"Repair",checked:e==="Repair",onChange:T=>t(T.target.value)}),h.jsx(xv,{checked:e==="Repair"}),"Repair"]})}),h.jsx(D.div,{variants:M,transition:{delay:.1},whileHover:"hover",children:h.jsxs(mv,{style:o.service?{borderColor:"red"}:{},children:[h.jsx(gv,{name:"service",value:"Installation",checked:e==="Installation",onChange:T=>t(T.target.value)}),h.jsx(xv,{checked:e==="Installation"}),"Installation"]})})]}),h.jsxs(BV,{children:[h.jsxs(IV,{children:[h.jsx(fn,{children:"Name"}),h.jsx(D.div,{variants:M,transition:{delay:.2},whileFocus:"focus",children:h.jsx(H0,{name:"name",type:"text",placeholder:"Your Name",value:n.name,onChange:y,style:o.name?{borderBottom:"1px solid red"}:{}})}),h.jsx(fn,{children:"Email"}),h.jsx(D.div,{variants:M,transition:{delay:.3},whileFocus:"focus",children:h.jsx(H0,{name:"email",type:"email",placeholder:"Your Email",value:n.email,onChange:y,style:o.email?{borderBottom:"1px solid red"}:{}})}),h.jsx(fn,{children:"Phone Number"}),h.jsx(D.div,{variants:M,transition:{delay:.4},whileFocus:"focus",children:h.jsx(H0,{name:"phone",type:"tel",placeholder:"Your Phone Number",value:n.phone,onChange:y,style:o.phone?{borderBottom:"1px solid red"}:{}})})]}),h.jsxs(UV,{children:[h.jsx(fn,{children:"In what location do you need the service?"}),h.jsx(D.div,{variants:M,transition:{delay:.5},whileFocus:"focus",children:h.jsx(dc,{children:h.jsxs(uc,{name:"location",value:n.location,onChange:y,style:o.location?{borderBottom:"1px solid red"}:{},children:[h.jsx("option",{value:"",children:"Select location"}),h.jsx("option",{children:"Malibu"}),h.jsx("option",{children:"Los Angeles County"}),h.jsx("option",{children:"Thousand Oaks"}),h.jsx("option",{children:"Newbury Park"}),h.jsx("option",{children:"Westlake Village"}),h.jsx("option",{children:"Oak Park"}),h.jsx("option",{children:"Lake Sherwood"}),h.jsx("option",{children:"Hidden Valley"}),h.jsx("option",{children:"Camarillo"}),h.jsx("option",{children:"Agoura Hills"}),h.jsx("option",{children:"Moorpark"}),h.jsx("option",{children:"Calabasas"}),h.jsx("option",{children:"Santa Rosa Valley"}),h.jsx("option",{children:"Other"})]})})}),h.jsx(fn,{children:"What do you need repaired?"}),h.jsx(D.div,{variants:M,transition:{delay:.6},whileFocus:"focus",children:h.jsx(dc,{children:h.jsxs(uc,{name:"appliance",value:n.appliance,onChange:y,style:o.appliance?{borderBottom:"1px solid red"}:{},children:[h.jsx("option",{value:"",children:"Select appliance"}),h.jsx("option",{children:"Cooktop"}),h.jsx("option",{children:"Oven"}),h.jsx("option",{children:"Range"}),h.jsx("option",{children:"Washer"}),h.jsx("option",{children:"Refrigerator"}),h.jsx("option",{children:"Microwave"}),h.jsx("option",{children:"Dishwasher"}),h.jsx("option",{children:"Dryer"}),h.jsx("option",{children:"Washing Machine"}),h.jsx("option",{children:"Freezer"}),h.jsx("option",{children:"Stove"}),h.jsx("option",{children:"Wine Cooler"}),h.jsx("option",{children:"Other"})]})})}),h.jsx(fn,{children:"Brand of appliance"}),h.jsx(D.div,{variants:M,transition:{delay:.7},whileFocus:"focus",children:h.jsx(dc,{children:h.jsxs(uc,{name:"brand",value:n.brand,onChange:y,style:o.brand?{borderBottom:"1px solid red"}:{},children:[h.jsx("option",{value:"",children:"Select brand"}),h.jsx("option",{children:"LG"}),h.jsx("option",{children:"Samsung"}),h.jsx("option",{children:"Whirlpool"}),h.jsx("option",{children:"Bosch"}),h.jsx("option",{children:"GE"}),h.jsx("option",{children:"Frigidaire"}),h.jsx("option",{children:"Maytag"}),h.jsx("option",{children:"KitchenAid"}),h.jsx("option",{children:"Viking"}),h.jsx("option",{children:"Fisher & Paykel"}),h.jsx("option",{children:"Amana"}),h.jsx("option",{children:"JennAir"}),h.jsx("option",{children:"Haier"}),h.jsx("option",{children:"Sharp"}),h.jsx("option",{children:"Electrolux"}),h.jsx("option",{children:"Sub-Zero"}),h.jsx("option",{children:"Thermador"}),h.jsx("option",{children:"Wolf"}),h.jsx("option",{children:"Other"})]})})})]})]}),h.jsx(fn,{children:"What type of power does this appliance use?"}),h.jsx(D.div,{variants:M,transition:{delay:.8},whileFocus:"focus",children:h.jsx(dc,{children:h.jsxs(uc,{name:"power",value:n.power,onChange:y,style:o.power?{borderBottom:"1px solid red"}:{},children:[h.jsx("option",{value:"",children:"Select power"}),h.jsx("option",{children:"Electric"}),h.jsx("option",{children:"Gas"}),h.jsx("option",{children:"Dual Fuel"}),h.jsx("option",{children:"Induction"}),h.jsx("option",{children:"Solar"}),h.jsx("option",{children:"Propane"}),h.jsx("option",{children:"Natural Gas"}),h.jsx("option",{children:"Other"})]})})}),h.jsx(fn,{children:"Any details you'd like to add?"}),h.jsx(D.div,{variants:M,transition:{delay:.9},whileFocus:"focus",children:h.jsx(OV,{name:"details",placeholder:"Any details you'd like to add?",value:n.details,onChange:y})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:j,transition:{delay:1},children:h.jsxs(kV,{children:['By clicking "Submit" you hereby agree to our'," ",h.jsx("span",{onClick:g,style:{cursor:"pointer"},children:"Privacy Policy"})," ","."]})}),h.jsx(D.div,{variants:E,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:1.1},whileHover:"hover",whileTap:"tap",children:h.jsx(RV,{type:"submit",children:"Submit"})})]})}),h.jsx(Qp,{children:d&&h.jsx(jV,{type:d.type,message:d.message,onClose:()=>u(null)})})]})," ",f&&h.jsx(Sw,{onClick:v,children:h.jsxs(Cw,{onClick:T=>T.stopPropagation(),children:[h.jsx(Tw,{onClick:v,children:"×"}),h.jsx(Ew,{})]})})]})},MV=w.form`
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
`,LV=w.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,mv=w.label`
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
`,gv=w.input.attrs({type:"radio"})`
  display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,xv=w.span`
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
`,H0=w.input`
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
`,OV=w.textarea`
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
`,RV=w.button`
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
`,kV=w.p`
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
`,VV=w.div`
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
`,vv=w.div`
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
`,D0=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,HV=w.p`
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
`,DV=w.button`
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
`,zV=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,PV=w.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  height: 1px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,NV=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,yv=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${e=>e.width||"100%"};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,wv=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$V=w.img`
  margin: 0 auto;
  width: 100%;
  max-width: 696px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 668px;
  }

  @media screen and (min-width: 1440px) {
  }
`,BV=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,IV=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,UV=w.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 48%;
  }
`,bv="/assets/Ellipse%204aleksey-FxWBDF7j.png",Sv="/assets/Ellipse%204-sanal-avatar-Dxfndv0Z.png",Cv="/assets/Ellipse%204-Wendy%20Bailey-jDxdSyQ5.png",Tv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgESURBVHgB3Vr7b1NVHP/c29t3V9ZtsNG9Oh1TivJWCAaGYjSDxWgwBo3EmBgRTIiCidF/QBMTfoaYKGIkQIiiYTwSQHkZiKCM8d4YY2PtBuzRrs/b9l6/53aDjdFube9Yt09yt7b33HPP93zf3+/hoD442GxW5JocsOW8CKPxJRj1lRCEORA0BmVELBZEJFqPkFgPX7AR3r5j6Oq7A4+nByqDg1pwOBwozd+Egty3YTJOJyKAaAzKf0kGZHaxgfSH4+IXzwMaugRN/PIG2tHj2YEm11a43a1QAZkSyGOesxYV9m1EVBGCIRBnJCKGR3qQoddxMOhAczXg5p1vceHabvo9hjSRLoEcFjrfQGX5j8QJG3yBfhZx6RI2FDLNxaaymDjEosDN1rdw/uo+pIHUCXRMLcKCuf9Cr52OPr8UlzUVRX0oFKGG1cwhFG7AhSurcNPVlsoEmlQGY/nCTzFn1jH4gxaExQGOjRVx6J+bo3exjZyGGY5NsFg60eY+l8oEoxtXu+wgrJbXyRBE6ZuA8YAkRzHFIsDjO4W648swwOEkGA2BWqypuUIWsZLMeoyeSI3rakNGFEadAA3XiF2HnfRLNNnwkQjU4b2a6wiI5YhGmbqNpTimAFkiv8pBb2jBrroqJCEy2YI5rFnZiHD4KTL9WUTcAPqJ1GkbsfvQs0ggronNem31KSLs6ewkjoEMXDQqQ5KqULNsf6JRj9en6hc2Ymrux+RsSedU8m1jAtr4CIVKtpxnYLN04Lb7/LARw56pqCjH0udb0O0ha8mNj7VMFcy6FkwRcOhsITo77w6+NZw7CysPwOuTJgxxDDyttdcnY8lzfw67NeTbolmrIeic5BKyUOdGgBSTKR52Yu7MVYN/HkygAEfJXvgU7k08ApnRYaFjVdlPGETXQzGcN/NdJX1B+sTx9LwcESG72sl8MfuVwlTkZ7niYlqRVom104IsU4wl5BMXa3Dhah2GrGD1q5fJIj2bQapDqZKI4oJp+HvLNnj8PqSyTJvZguVfbURz222QA0fa4Oi1GqEDvx2xs69xDpYXVsBocCLcJyMT6ZQk6AUBZVOnAexKETmMMJojIzD2mw3T8bS9lGUecQIdpespHcncodPj0iDxilAud+pKAwReGFFY86xWeIJBkvNMQ13SxbAITC/8jAjcHCcwL/d9hCLEPXVTn0A4jFfeIaNmMMTLE8mg6GApeBorpauDAwhRKpdvW0OfvhBQXJwPE7HU64Pa4GkzdSWlEA3GUdkuRpacKXFxcDAb7cjLy6EV6EqU4tBkA9Nls7mMR65+hVL5mmxg6V2BZREPi3kGYhlarmwE46DRsESg4tHcseKgTCmb6HbRi5LoINM5rRa6IjvEaBSqgSI3Kj9WMgJnY4ygo6hk86av6RXahAZaoIins7cHW/f8TNWzKVANbOOINiomVasXe4phOIgTt7bvfWAR+VFM7e7ugr16LqVqlVAVkhQWxiqwZpMyfxYQRSIyyTjyj95AgGLXscjOWPlPigVochPU8T9D4AsFUbhyKTRGU2JHT++VaY/5MgdUNXWMb1I0KECMXYRJWAz16VPEUyYdCySLYvobMYogqbnJbD5RvMgjFGocMYxK/y1xzildJE3ii6VZaksQ04tQpJ6HP3Q6nrtNMrCgPRBo4tEdOKv06CYbWL+xK3iUR29vC2XBmHQQiGkej4uqUb1eBIMdZGQK1U6XlEjm/j2KKIwjp0usD2jLA6fTq6GPMvUs21lLnLFOwn3vr1To3QAxAjXBIpm1az+ipq1uxL2zWSz45fgRtHe4ldAtI+j1HDrub2cf47LZ2vYdygo3KD2/DB3/wMOMC1qtgB0Uqo0WzR0u7L3ZCOTakD5IbAw6nrL579m3OIEtHS2YH+okMZqqVKbSnrs/eqFMPkhhWyrIoWDAo0Q0GZcsOGrQNgwcYnhoXVo716GyZB/dRLrgqNzQ2nUP5sXOuJKnAtbkmVYEzZRcyt4yiGlyqK9/qfmbB2sadEtD7bJ78AesACaqY5RhJP3bc5itX9mlwdscQ1Pbh5QAa9QPK54ESPdyzByaXW8CD8PaoXJ0ruEPRCJu0oOJRyDLRsLhBqLh98E/P6ooMi5fX0CNfl7phU8UyOxwgplH/dWVj94armv3PT5qKHYhP7eW/CKrZWR3HMcYwU5eNLevR/2NY4/eTuwSaqsPw6B/jSreMrK128RsBTMqwdBJ7D+x7HFDEnNn//EaavA3QSvIWWl0lEhCYCFgExFXnWhYMvGTsLPOSTvUqkTm2UTkAHFGQws6D81EkgNBI+lXBDsPPEO9hWYKf5iYjn+FWKY1GA0cVeQb4fJX4a/MDgINgEftyydhNS6B1z9+hxMkZlDMlAH1HcSBE6xVPaJUjTZikXGj5Qfk2bpRlL9KORMqSU/w/Aw5cXaaJc+qwW33ehw98/lon0x9gTMryuGcUUedzln9xynH2I2wCIX8ckh04b/6+bh1tzOVp9PnwKLZq+Gw71WqV4EQ4yinGkeVA7Fc/ECsJHXj2p0PUH+J9dxTNnSZLkhQDi88VfIl+cxZSpdYFNPnqsyONGs5stxAMOxGq2sd/rl8AONwpHk42KH0soJPSE/WwmyyK+0r1tRhnSvlULr0cP8fHErvLyuymhBzRf6gG929e3DHtQXN2XEo/fGwWvNgtxbDlLOCTHoVcWQ2pfezqXpnUu7HpAAZqosIh5qIqNPo9Z1Bj78VPT1epCGGyfA/uU/qLszt8vwAAAAASUVORK5CYII=",Ev="/assets/Review%20Image-alexey-BS9M-VaX.png",jv="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",Av="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",Mv="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",hc=[{avatar:bv,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Ev},{avatar:Sv,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:jv},{avatar:Cv,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Av},{avatar:Tv,name:"Elizabeth Castorena",time:"2 месяца назад",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Mv},{avatar:bv,name:"Aleksei Sabitov",time:"a week ago",text:`My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,image:Ev},{avatar:Sv,name:"Sanal Kandymov",time:"a week ago",text:`Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,image:jv},{avatar:Cv,name:"Wendy Bailey",time:"a week ago",text:`I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,image:Av},{avatar:Tv,name:"Elizabeth Castorena",time:"a week ago",text:`Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,image:Mv}],Lv={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},z0={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:te}},hover:{y:-5,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.1)",transition:{duration:.3,ease:te}}},P0={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:te}},hover:{scale:1.1,rotate:5,transition:{duration:.2}}},N0={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}},hover:{scale:1.05,transition:{duration:.4}}},_V=w.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,GV=w.h2`
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
`,qV=w.p`
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
`,YV=w.div`
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
`,$0=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${e=>e.$isVisible?"block":"none"};

  @media screen and (min-width: 768px) {
    width: 50%;
    display: block;
  }
`,B0=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px;
`,I0=w.div`
  display: flex;
  gap: 19px;
  align-items: center;
`,U0=w.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`,_0=w.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,G0=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`,q0=w.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`,Y0=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`,F0=w.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`,X0=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Z0=w.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,Ad=()=>{const[,e]=je.useState(!1),t=je.useRef(null),n=je.useRef(null),a=je.useRef(null),o=ke({query:"(min-width: 768px)"}),l=ke({query:"(min-width: 1440px)"});return h.jsxs("div",{children:[h.jsxs(_V,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Lv,children:h.jsx(qV,{children:"Your Feedback Matters"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Lv,transition:{delay:.1},children:h.jsxs(GV,{children:["Discover why clients ",h.jsx("span",{children:" trust "})," our repairs"]})})]}),h.jsxs(YV,{ref:a,children:[h.jsxs($0,{$isVisible:!0,children:[h.jsx(X0,{}),h.jsx(Z0,{}),h.jsx(Yt,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:4e3,loop:!0,modules:[oi],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:hc.map((d,u)=>h.jsx(Ft,{children:h.jsx(D.div,{variants:z0,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:h.jsxs(B0,{children:[h.jsxs(I0,{children:[h.jsx(D.div,{variants:P0,whileHover:"hover",children:h.jsx(U0,{src:d.avatar,alt:d.name})}),h.jsxs(_0,{children:[h.jsx(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:h.jsx(G0,{children:d.name})}),h.jsx(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:h.jsx(q0,{children:d.time})})]})]}),h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:h.jsx(Y0,{children:d.text})}),h.jsx(D.div,{variants:N0,whileHover:"hover",children:h.jsx(F0,{src:d.image,alt:`Review by ${d.name}`})})]})})},`top-${u}`))})]}),h.jsxs($0,{$isVisible:o,children:[h.jsx(X0,{}),h.jsx(Z0,{}),h.jsx(Yt,{ref:n,direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!1,reverseDirection:!0},speed:2e3,loop:!0,modules:[oi],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,initialSlide:hc.length-1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:hc.map((d,u)=>h.jsx(Ft,{children:h.jsx(D.div,{variants:z0,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:h.jsxs(B0,{children:[h.jsxs(I0,{children:[h.jsx(D.div,{variants:P0,whileHover:"hover",children:h.jsx(U0,{src:d.avatar,alt:d.name})}),h.jsxs(_0,{children:[h.jsx(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:h.jsx(G0,{children:d.name})}),h.jsx(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:h.jsx(q0,{children:d.time})})]})]}),h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:h.jsx(Y0,{children:d.text})}),h.jsx(D.div,{variants:N0,whileHover:"hover",children:h.jsx(F0,{src:d.image,alt:`Review by ${d.name}`})})]})})},`bottom-${u}`))})]}),l&&h.jsxs($0,{$isVisible:!0,children:[h.jsx(X0,{}),h.jsx(Z0,{}),h.jsx(Yt,{direction:"vertical",slidesPerView:1,spaceBetween:20,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:6e3,loop:!0,modules:[oi],allowTouchMove:!1,simulateTouch:!1,touchRatio:0,grabCursor:!1,mousewheel:{enabled:!1},noSwiping:!0,noSwipingClass:"swiper-slide",resistance:!1,onReachBeginning:()=>e(!1),onReachEnd:()=>e(!1),style:{height:"100%"},children:hc.map((d,u)=>h.jsx(Ft,{children:h.jsx(D.div,{variants:z0,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:h.jsxs(B0,{children:[h.jsxs(I0,{children:[h.jsx(D.div,{variants:P0,whileHover:"hover",children:h.jsx(U0,{src:d.avatar,alt:d.name})}),h.jsxs(_0,{children:[h.jsx(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.1},children:h.jsx(G0,{children:d.name})}),h.jsx(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.2},children:h.jsx(q0,{children:d.time})})]})]}),h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3},children:h.jsx(Y0,{children:d.text})}),h.jsx(D.div,{variants:N0,whileHover:"hover",children:h.jsx(F0,{src:d.image,alt:`Review by ${d.name}`})})]})})},`desktop-${u}`))})]})]})]})},FV="/assets/Hero%20Image-CELmD3oB.png",p1="data:image/svg+xml,%3csvg%20width='140'%20height='33'%20viewBox='0%200%20140%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_586)'%3e%3cpath%20d='M0.00384521%2032.9336H31.9955V0.933594H0.00384521V32.9336ZM20.5091%203.37746C26.1637%205.23116%2030.25%2010.5932%2030.2654%2016.9275C30.2807%2023.1588%2026.277%2028.508%2020.5091%2030.4846V3.37746ZM15.9946%202.65223C17.0161%202.65223%2018.1043%202.78857%2019.0107%202.96908C19.0107%2010.2187%2012.0004%2016.185%204.76547%2016.185L1.74041%2016.1805C2.23648%208.74909%208.38454%202.65223%2015.9946%202.65223ZM4.76803%2017.6943C12.0017%2017.6943%2019.0094%2023.6542%2019.0094%2030.8968C18.1043%2031.0818%2016.9617%2031.2194%2015.9946%2031.2194C8.38198%2031.2092%202.02589%2025.0938%201.73849%2017.6943H4.76803ZM42.7049%2019.7452V17.7283H49.3618V15.157H42.7036V11.4131H49.7862V8.84766H39.9787V19.6287C39.9787%2022.3542%2041.1392%2024.2181%2043.8634%2024.6009C43.9178%2024.6143%2043.9716%2024.6246%2044.0215%2024.6259H44.0708C44.3499%2024.6572%2044.6347%2024.6777%2044.9336%2024.6777H49.975V22.1154H44.9561C44.09%2022.1154%2042.7049%2021.6879%2042.7049%2019.7452ZM51.9113%2024.6816H54.6374V8.84382H51.9113V24.6816ZM62.6404%2012.8674C59.1948%2012.8674%2056.6159%2015.2415%2056.6159%2018.938V19.0296C56.6159%2022.6358%2059.1033%2024.9638%2062.7089%2024.9638C64.4429%2024.9638%2066.063%2024.4851%2067.5461%2022.9092L65.903%2021.3121C65.0357%2022.1794%2064.1914%2022.6358%2062.7998%2022.6358C60.7688%2022.6358%2059.4227%2021.4491%2059.3312%2019.6229H68.2758C68.3212%2019.1665%2068.3212%2018.6647%2068.3212%2018.6647C68.3225%2015.4463%2066.063%2012.8674%2062.6404%2012.8674ZM59.4003%2017.7059C59.5142%2016.313%2060.9295%2015.1948%2062.6404%2015.1948C64.2375%2015.1948%2065.5381%2016.3361%2065.5381%2017.7059H59.4003ZM75.9825%2015.3094C77.2146%2015.3094%2078.1281%2015.7664%2078.9032%2016.5646L80.5918%2014.8069C79.2681%2013.3917%2077.6941%2012.8213%2075.9825%2012.8213C72.5138%2012.8213%2069.7301%2015.4003%2069.7301%2018.915C69.7301%2022.4297%2072.5138%2025.0093%2075.9825%2025.0093C77.6941%2025.0093%2079.2687%2024.439%2080.5918%2023.0237L78.9032%2021.266C78.1281%2022.0649%2077.2146%2022.5213%2075.9825%2022.5213C73.9739%2022.5213%2072.4453%2020.9914%2072.4453%2018.915C72.4453%2016.8385%2073.9739%2015.3094%2075.9825%2015.3094ZM85.0148%2019.7497H85.0116V15.7062H87.4906V13.2291H85.0148V8.84446H82.2886V19.9103L82.2963%2019.9097C82.3744%2022.4829%2083.5432%2024.2354%2086.1733%2024.6047C86.2277%2024.6182%2086.2815%2024.6284%2086.3314%2024.6291H86.3807C86.6598%2024.6604%2086.9446%2024.6816%2087.2436%2024.6816H87.5322L87.5418%2022.1193H87.266C86.3999%2022.1193%2085.0148%2021.6923%2085.0148%2019.7497ZM92.4885%2014.9324V13.2297H89.7847V24.6816H92.4885V18.6596C92.4885%2016.7739%2093.6925%2015.5916%2095.5775%2015.5916C96.009%2015.5916%2096.3956%2015.6365%2096.7137%2015.7056V13.0703C96.5998%2013.0479%2096.1914%2013.0018%2095.8963%2013.0018C94.2602%2013.0025%2093.0338%2013.7527%2092.4885%2014.9324ZM103.38%2012.8885C99.9033%2012.8885%2097.131%2015.5232%2097.131%2018.9553C97.131%2022.3856%2099.9033%2025.0221%20103.38%2025.0221C106.832%2025.0221%20109.627%2022.3856%20109.627%2018.9553C109.626%2015.5238%20106.832%2012.8885%20103.38%2012.8885ZM103.38%2022.5456C101.358%2022.5456%2099.8361%2020.9767%2099.8361%2018.9553C99.8361%2016.9326%20101.358%2015.3651%20103.38%2015.3651C105.379%2015.3651%20106.923%2016.9326%20106.923%2018.9553C106.922%2020.9774%20105.379%2022.5456%20103.38%2022.5456ZM111.303%2024.6816H114.03V8.84382H111.303V24.6816ZM123.862%2019.8866C123.862%2021.7039%20122.795%2022.4777%20121.363%2022.4777C119.932%2022.4777%20118.865%2021.7039%20118.865%2019.911V13.2297H116.115V20.1376C116.115%2023.4097%20118.5%2024.9773%20121.34%2024.9773C124.203%2024.9773%20126.61%2023.3867%20126.61%2020.0691V13.2297H123.862V19.8866ZM136.925%2021.0196L135.206%2018.6148L137.335%2015.7139L139.158%2013.2297H136.182L133.705%2016.6606L131.206%2013.2297H128.253L129.947%2015.5462L132.206%2018.6372L129.838%2021.9356L127.867%2024.6816H130.797L133.704%2020.6368L136.613%2024.6816H139.544L136.925%2021.0196Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_586'%3e%3crect%20width='139.541'%20height='32'%20fill='white'%20transform='translate(0.00384521%200.933594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",td="/assets/2-lv1xptCk.svg",m1="/assets/3-xYBlE7jA.svg",g1="data:image/svg+xml,%3csvg%20width='77'%20height='36'%20viewBox='0%200%2077%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M67.1338%2020.3456H71.0883V24.0242C70.3626%2024.3009%2068.9382%2024.5778%2067.5878%2024.5778C63.2137%2024.5778%2061.7591%2022.3574%2061.7591%2017.8483C61.7591%2013.5451%2063.1439%2011.0128%2067.5138%2011.0128C69.9492%2011.0128%2071.3309%2011.7769%2072.4762%2013.2341L75.4978%2010.4581C73.6527%207.82715%2070.4323%207.02979%2067.4087%207.02979C60.6107%207.02708%2057.0362%2010.7351%2057.0362%2017.8125C57.0362%2024.8547%2060.266%2028.6723%2067.3723%2028.6723C70.6355%2028.6723%2073.8247%2027.8417%2075.5614%2026.6244V16.4251H67.1339L67.1338%2020.3456ZM46.3909%2024.2661H56.4545V28.36H41.5343V7.33832H46.3913L46.3909%2024.2661Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4968%2029.43C35.8453%2023.0815%2035.8449%2012.7878%2029.4961%206.44074C23.1474%200.0925049%2012.854%200.0917411%206.50687%206.44012C0.158384%2012.7885%200.158766%2023.0823%206.5075%2029.4294C12.8561%2035.7781%2023.1497%2035.7783%2029.4968%2029.43Z'%20fill='%23242424'/%3e%3cpath%20d='M13.0698%2014.7643C13.4404%2014.7625%2013.8023%2014.6509%2014.1096%2014.4436C14.4169%2014.2364%2014.6559%2013.9428%2014.7965%2013.5998C14.9372%2013.2568%2014.973%2012.8798%2014.8996%2012.5165C14.8261%2012.1531%2014.6467%2011.8197%2014.384%2011.5583C14.1212%2011.2968%2013.7868%2011.119%2013.4232%2011.0474C13.0596%2010.9757%2012.6828%2011.0134%2012.3405%2011.1556C11.9982%2011.298%2011.7057%2011.5384%2011.4999%2011.8468C11.2942%2012.1551%2011.1845%2012.5174%2011.1845%2012.8881C11.185%2013.1351%2011.2342%2013.3796%2011.3293%2013.6075C11.4245%2013.8355%2011.5635%2014.0425%2011.7385%2014.2167C11.9136%2014.3909%2012.1213%2014.5289%2012.3497%2014.6229C12.5781%2014.7169%2012.8228%2014.7649%2013.0698%2014.7643ZM30.2643%2018.4501H21.9973V17.2255H31.4759C31.4889%2017.4627%2031.4953%2017.6998%2031.4953%2017.9398C31.4953%2025.3134%2025.4857%2031.2907%2018.0744%2031.2907C10.6628%2031.2907%204.65222%2025.3171%204.65222%2017.9398C4.65222%2010.5631%2010.6609%204.58887%2018.0731%204.58887C18.2688%204.58887%2018.4635%204.59282%2018.6572%204.60084V5.81624C18.4635%205.8076%2018.2694%205.80333%2018.0749%205.80333C11.3382%205.80333%205.87505%2011.2371%205.87505%2017.9385C5.87505%2024.6401%2011.3375%2030.0749%2018.0749%2030.0749C24.6272%2030.0749%2029.98%2024.9337%2030.2633%2018.4842L30.2643%2018.4501ZM21.9785%2023.5518H18.6561V11.0698H17.4278V24.7847H18.659V24.7765H21.9813L21.9785%2023.5518Z'%20fill='white'/%3e%3c/svg%3e",x1="/assets/5-DtA_MHfM.svg",v1="/assets/6-BYfTVs51.svg",y1="/assets/7-DtKFqDn5.svg",w1="/assets/8-C9mdpuht.svg",b1="/assets/9-1he0Czj8.svg",S1="data:image/svg+xml,%3csvg%20width='191'%20height='24'%20viewBox='0%200%20191%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_699)'%3e%3cmask%20id='mask0_277_699'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='190'%20height='56'%3e%3cpath%20d='M0.970825%2055.6831H189.922V0.547134H0.970825V55.6831Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_277_699)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M110.577%2023.4158H132.473L121.526%200.547155L110.577%2023.4158ZM188.424%2021.6962C188.63%2021.6962%20188.752%2021.5893%20188.752%2021.4207C188.752%2021.2342%20188.63%2021.1372%20188.424%2021.1372H188.012V21.6962H188.424ZM187.698%2020.8347H188.438C188.656%2020.8347%20188.827%2020.9045%20188.941%2021.0255C189.027%2021.1134%20189.076%2021.2395%20189.076%2021.3932C189.076%2021.6871%20188.92%2021.8643%20188.692%2021.9332L189.138%2022.6008H188.761L188.359%2021.9899H188.012V22.6008H187.698V20.8347ZM189.754%2021.7662C189.754%2020.9234%20189.146%2020.2473%20188.342%2020.2473C187.531%2020.2473%20186.917%2020.9317%20186.917%2021.7662C186.917%2022.6098%20187.526%2023.2846%20188.332%2023.2846C189.142%2023.2846%20189.754%2022.6008%20189.754%2021.7662ZM186.751%2021.775C186.751%2020.8478%20187.452%2020.0793%20188.342%2020.0793C189.23%2020.0793%20189.921%2020.8385%20189.921%2021.7569C189.921%2022.6846%20189.22%2023.4526%20188.332%2023.4526C187.444%2023.4526%20186.751%2022.6932%20186.751%2021.775ZM151.36%2012.3135V4.9244H156.648C159.337%204.9244%20160.934%206.2121%20160.934%208.57187C160.934%2010.867%20159.277%2012.3135%20156.679%2012.3135H151.36ZM159.692%2015.0823C162.586%2014.2016%20164.626%2012.0321%20164.626%208.41529C164.626%206.43127%20164.004%204.79723%20162.913%203.6014C161.582%202.21991%20159.542%201.40306%20156.945%201.40306H147.725V23.4158H151.36V15.7434H155.851L160.99%2023.4158H165.277L159.692%2015.0823ZM105.299%2012.4711C105.299%2016.7781%20102.461%2019.8896%2098.1221%2019.8896H94.0439V4.9244H98.1221C102.461%204.9244%20105.299%208.1%20105.299%2012.4075V12.4711ZM98.1221%201.40306H90.4052V23.4158H98.1221C104.62%2023.4158%20109.115%2018.604%20109.115%2012.4075C109.115%206.14909%20104.62%201.40306%2098.1221%201.40306ZM79.4093%2012.3915V23.4158H83.0453V1.40306H79.4093V12.3915ZM44.2722%2012.0246V23.4158H47.9065V1.40306H44.2722V12.0246ZM25.0175%2012.3135V4.9244H30.3084C32.996%204.9244%2034.5916%206.2121%2034.5916%208.57187C34.5916%2010.867%2032.9373%2012.3135%2030.3371%2012.3135H25.0175ZM33.351%2015.0823C36.2451%2014.2016%2038.2857%2012.0321%2038.2857%208.41529C38.2857%206.43127%2037.6644%204.79723%2036.5719%203.6014C35.2423%202.21991%2033.2018%201.40306%2030.6049%201.40306H21.3849V23.4158H25.0175V15.7434H29.5103L34.6509%2023.4158H38.9361L33.351%2015.0823ZM0.969482%2023.4158H4.60254V14.4522H16.359V10.9338H4.60254V4.9244H16.3646V1.40306H0.969482V23.4158ZM174.298%2019.9561V14.0421H185.997V10.5833H174.298V4.85948H185.997V1.40306H170.664V23.4158H186.002V19.9561H174.298ZM64.0979%2014.1057H69.3824V18.2267C68.1161%2019.2327%2066.3419%2019.8914%2064.3926%2019.8914C60.1678%2019.8914%2057.3605%2016.5598%2057.3605%2012.0321C57.3605%207.7529%2060.2547%204.20078%2064.0658%204.20078C66.697%204.20078%2068.2605%205.11279%2069.8567%206.55844L72.1616%203.63164C70.0378%201.71514%2067.8157%200.646822%2064.215%200.646822C57.9797%200.646822%2053.5473%205.86821%2053.5473%2012.0321C53.5473%2018.508%2057.8041%2023.4158%2064.2719%2023.4158C67.9364%2023.4158%2070.8605%2021.8424%2072.901%2019.9855V10.7377H64.0979V14.1057ZM136.715%2012.3915V23.4158H140.35V1.40306H136.715V12.3915Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M116.09%2019.8828L121.504%208.2977L126.96%2019.8828H116.09Z'%20fill='%23ED114C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_699'%3e%3crect%20width='190'%20height='24'%20fill='white'%20transform='translate(0.446045)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",C1="data:image/svg+xml,%3csvg%20width='197'%20height='18'%20viewBox='0%200%20197%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2176%206.82621L22.529%201.22314H16.5098L12.2064%206.67151C11.7989%207.13951%2011.0096%207.47882%2010.4092%207.47882H9.40262V1.22314H1.12445V16.224H9.37546V11.622H10.6836C11.2827%2011.622%2011.5815%2011.7793%2011.9089%2012.3526L14.2236%2016.224H24.1903L19.5608%208.70343C19.1791%208.07942%2018.144%207.55682%2017.0559%207.55682C16.7842%207.55682%2016.5098%207.58412%2017.2176%206.82621Z'%20fill='%23242424'/%3e%3cpath%20d='M26.857%2016.2085H34.6475V7.50488H26.857V16.2085Z'%20fill='%23242424'/%3e%3cpath%20d='M30.8807%206.77201C33.0351%206.62641%2034.7114%205.5539%2034.6258%204.37608C34.5375%203.19957%2032.7213%202.36106%2030.5683%202.50666C28.4138%202.65226%2026.7375%203.72478%2026.8245%204.89999C26.9114%206.0778%2028.7276%206.91501%2030.8807%206.77201Z'%20fill='%23242424'/%3e%3cpath%20d='M37.6958%207.45174H40.3107V4.5332H47.6625V7.45174H50.7135V10.3183H47.7725V12.0382C47.7725%2013.7581%2049.8414%2013.6528%2050.7665%2012.8741V15.322C47.9355%2016.5206%2043.2789%2016.8339%2041.4002%2015.608C40.4194%2014.958%2040.3107%2014.4354%2040.3107%2013.6528V10.3703H37.6958'%20fill='%23242424'/%3e%3cpath%20d='M68.658%207.9481C64.6276%206.01888%2059.1396%206.35818%2056.4323%207.7661C52.0881%2010.0203%2052.1547%2013.6994%2056.3766%2015.7911C59.4262%2017.3043%2066.6693%2016.8857%2068.6309%2015.1658V12.7439C65.7456%2014.1505%2063.7378%2013.9464%2062.5316%2013.5512C60.6529%2012.9376%2060.6081%2010.3999%2063.0206%209.95402C64.5719%209.66802%2066.5348%209.69402%2068.658%2010.7626'%20fill='%23242424'/%3e%3cpath%20d='M71.2731%202.47656V16.2099H78.5976V11.9862C78.7063%209.32764%2082.1934%209.82295%2082.1934%2011.7795V16.2099H89.4894V10.7902C89.4894%208.23433%2084.6983%205.3678%2078.6533%208.28503L78.7606%202.47656'%20fill='%23242424'/%3e%3cpath%20d='M113.071%207.47901V16.2086H120.915V11.5182C120.915%209.90094%20124.454%209.12093%20124.454%2011.5702V16.1566H131.372V10.8408C131.372%208.34742%20127.651%205.12858%20120.915%208.44362V7.47901'%20fill='%23242424'/%3e%3cpath%20d='M159.285%2016.1994H167.072V7.49707H159.285V16.1994Z'%20fill='%23242424'/%3e%3cpath%20d='M163.31%206.76292C165.463%206.61862%20167.138%205.54741%20167.052%204.36699C166.967%203.19048%20165.149%202.35327%20162.995%202.49887C160.841%202.64317%20159.167%203.71569%20159.253%204.8922C159.338%206.07131%20161.154%206.90852%20163.31%206.76292Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M192.259%205.01547V4.03396H192.943C193.291%204.03396%20193.663%204.10806%20193.663%204.49937C193.663%204.98557%20193.284%205.01547%20192.861%205.01547H192.259ZM192.867%207.95871C194.431%207.95871%20195.768%206.79519%20195.768%205.20527C195.768%203.62836%20194.431%202.46484%20192.867%202.46484C191.286%202.46484%20189.952%203.62836%20189.952%205.20527C189.952%206.79519%20191.286%207.95871%20192.867%207.95871ZM190.528%205.20527C190.528%203.90396%20191.554%202.92245%20192.867%202.92245C194.166%202.92245%20195.192%203.90396%20195.192%205.20527C195.192%206.52739%20194.166%207.5011%20192.867%207.5011C191.554%207.5011%20190.528%206.52739%20190.528%205.20527ZM192.259%205.42238H192.836L193.711%206.79519H194.272L193.329%205.40158C193.815%205.34308%20194.188%205.09477%20194.188%204.52927C194.188%203.90396%20193.802%203.62836%20193.018%203.62836H191.759V6.79519H192.259'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M100.473%2010.6355H103.389C103.436%209.74884%20102.65%209.30554%20101.815%209.30554C101.119%209.30554%20100.473%209.88014%20100.473%2010.6355ZM110.405%2012.8741C105.449%2012.5088%20100.165%2012.8208%20100.165%2012.8208C101.689%2015.218%20107.9%2014.854%20109.967%2013.2901L109.75%2015.322C105.611%2017.6685%2092.9763%2017.5645%2092.7576%2012.0915C92.5647%207.25931%20100.056%206.56641%20101.689%206.56641C105.555%206.56641%20111.22%208.28633%20110.405%2012.8741Z'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.468%2010.2156L142.754%206.14911L144.606%2010.2156H140.468ZM133.088%2016.1709H137.335L139.161%2012.8221H145.805L147.386%2016.1709H157.459L149.617%201.25195H139.594C140.577%201.61726%20140.848%202.24126%20140.577%202.76127'%20fill='%23242424'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M181.031%2010.6563C179.721%209.72548%20177.203%209.95819%20177.203%2011.448C177.203%2013.5878%20180.193%2013.2147%20181.031%2012.5634V10.6563ZM188.395%202.5V16.1567H181.044V15.218C177.395%2017.9286%20169.223%2016.4687%20169.223%2012.0915C169.223%206.72115%20178.1%205.99314%20181.095%207.86906V2.5'%20fill='%23242424'/%3e%3c/svg%3e",T1="data:image/svg+xml,%3csvg%20width='197'%20height='26'%20viewBox='0%200%20197%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M193.375%207.13851V7.56954H192.736V9.81922H192.298V7.56954H191.672V7.13851H193.375ZM193.824%207.02196C193.837%207.03955%20193.86%207.07913%20193.903%207.13851C193.943%207.20008%20193.994%207.27265%20194.054%207.35842C194.115%207.44638%20194.181%207.54314%20194.256%207.6465C194.33%207.75206%20194.407%207.85982%20194.484%207.96757C194.56%208.07753%20194.635%208.18308%20194.709%208.28864C194.784%208.39419%20194.85%208.48876%20194.909%208.57453C194.969%208.6603%20195.02%208.73286%20195.06%208.79004C195.101%208.84722%20195.126%208.8846%20195.137%208.89779C195.141%208.8912%20195.165%208.85821%20195.201%208.80543C195.237%208.75046%20195.286%208.68008%20195.344%208.59652C195.403%208.51295%20195.469%208.41839%20195.541%208.31063C195.616%208.20508%20195.693%208.09511%20195.769%207.98516C195.848%207.8752%20195.925%207.76525%20195.999%207.65749C196.074%207.54974%20196.142%207.45078%20196.206%207.36282C196.267%207.27486%20196.32%207.20008%20196.365%207.13851L196.446%207.01976V9.81922H195.98V8.45138C195.98%208.43159%20195.984%208.41179%20195.988%208.3898C195.993%208.36781%20195.995%208.35462%20195.995%208.35022L195.137%209.6257C195.124%209.6125%20195.097%209.57072%20195.052%209.50475C195.005%209.43878%20194.95%209.35961%20194.884%209.26944C194.822%209.17928%20194.754%209.08032%20194.684%208.97696C194.611%208.8736%20194.545%208.77684%20194.484%208.68667C194.42%208.59651%20194.367%208.52175%20194.322%208.45797C194.279%208.3964%20194.254%208.35901%20194.252%208.34802C194.252%208.35241%20194.252%208.36561%20194.258%208.3876C194.262%208.40959%20194.264%208.43159%20194.264%208.44918V9.81702H193.826V7.01756L193.824%207.02196ZM186.838%2013.87L183.252%2017.4633L179.74%2013.848V20.2804H176.92V7.09892H177.542L183.256%2012.8584L189.056%207.09892H189.659V20.2804H186.838V13.8678V13.87ZM58.3087%2013.87L54.7245%2017.4633L51.2126%2013.848V20.2804H48.3925V7.09892H49.014L54.7287%2012.8584L60.5286%207.09892H61.1288V20.2804H58.3087V13.8678V13.87ZM67.1671%2013.793C67.1671%2010.0721%2069.6999%207.02196%2073.8673%207.02196C78.0347%207.02196%2080.6101%2010.0721%2080.6101%2013.793C80.6101%2017.5139%2078.0773%2020.5641%2073.8673%2020.5641C69.6573%2020.5641%2067.1671%2017.5139%2067.1671%2013.793ZM77.4664%2013.793C77.4664%2011.5433%2075.8957%2010.0501%2073.8652%2010.0501C71.8347%2010.0501%2070.3065%2011.5433%2070.3065%2013.793C70.3065%2016.0427%2071.8772%2017.5359%2073.8652%2017.5359C75.8531%2017.5359%2077.4664%2016.0427%2077.4664%2013.793ZM98.28%2020.2826H97.7841L89.6621%2013.5247V20.2826H86.842V7.10113H87.3379L95.4599%2013.9799V7.12311H98.28V20.2826ZM104.514%2013.793C104.514%2010.0721%20107.049%207.02196%20111.214%207.02196C115.38%207.02196%20117.955%2010.0721%20117.955%2013.793C117.955%2017.5139%20115.422%2020.5641%20111.214%2020.5641C107.006%2020.5641%20104.514%2017.5139%20104.514%2013.793ZM114.816%2013.793C114.816%2011.5433%20113.245%2010.0501%20111.214%2010.0501C109.184%2010.0501%20107.656%2011.5433%20107.656%2013.793C107.656%2016.0427%20109.226%2017.5359%20111.214%2017.5359C113.202%2017.5359%20114.816%2016.0427%20114.816%2013.793ZM130.232%2012.5593H135.97V14.0085C135.97%2017.7954%20133.98%2020.5641%20129.961%2020.5641C125.943%2020.5641%20123.436%2017.5139%20123.436%2013.793C123.436%2010.0721%20125.775%207.02196%20129.961%207.02196C133.29%207.02196%20134.584%208.82742%20134.584%208.82742L132.843%2011.1277C132.843%2011.1277%20131.7%2010.0281%20129.921%2010.0281C127.89%2010.0281%20126.383%2011.5433%20126.383%2013.793C126.383%2016.0427%20127.89%2017.5579%20129.921%2017.5579C131.721%2017.5579%20132.664%2016.4319%20132.705%2015.1565V15.0267H130.234V12.5615L130.232%2012.5593ZM142.131%207.12311H147.861C151.043%207.12311%20152.805%208.99015%20152.805%2011.8226C152.805%2013.6391%20152.009%2014.9366%20150.711%2015.6952L150.577%2015.781L153.538%2020.0649V20.2804H150.277L147.806%2016.4935H144.896V20.2804H142.055L142.127%207.12091L142.131%207.12311ZM147.661%2010.0061H144.898V13.8986H147.682C149.085%2013.8986%20149.86%2013.2498%20149.86%2011.9524C149.86%2010.6549%20149.064%2010.0061%20147.661%2010.0061ZM164.552%207.10113H165.054L171.65%2020.2826H168.215L167.413%2018.5761H162.155L161.391%2020.2826H157.979L164.554%207.10113H164.552ZM164.782%2012.6143L163.056%2016.3704H166.491L164.782%2012.6143ZM4.175%200.635742L1.20588%207.51456H7.11645L14.1721%2023.8891L18.2267%2014.4791L12.2608%200.637943H4.17287L4.175%200.635742ZM25.2355%200.686331L21.1937%2010.0589L27.7896%2025.3647H35.8796L25.2355%200.686331ZM4.14094%2016.7948L0.446045%2025.3647H7.83585L4.14094%2016.7948Z'%20fill='%23242424'/%3e%3c/svg%3e",E1="/assets/13-_M_Krupi.svg",j1="data:image/svg+xml,%3csvg%20width='121'%20height='22'%20viewBox='0%200%20121%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M107.367%209.97166V12.1049H110.751V9.97166C110.751%209.05838%20109.987%208.29571%20109.073%208.29571C108.128%208.29571%20107.367%209.05838%20107.367%209.97166ZM116.359%206.95413C111.755%204.66888%20106.94%204.51551%20102.215%206.5272C98.3145%208.17275%2096.4866%2012.6852%2098.1612%2016.587C99.015%2018.5987%20100.446%2019.9997%20102.49%2020.7624C107.154%2022.5295%20111.755%2022.4079%20116.297%2020.3354C118.278%2019.4512%20119.651%2017.988%20120.382%2015.9459H114.408C113.737%2018.0806%20111.451%2019.2978%20109.289%2018.6291C109.105%2018.5683%20108.95%2018.5061%20108.739%2018.4149C107.884%2018.0184%20107.367%2017.1963%20107.367%2016.2513V14.7273H120.534C120.929%2011.4652%20119.314%208.44631%20116.359%206.95413ZM69.6909%209.97166C69.6909%209.05838%2068.9614%208.29571%2068.0177%208.29571C67.1017%208.29571%2066.3418%209.05838%2066.3418%209.97166V12.1049H69.6909V9.97166ZM79.4771%2014.7273C79.8736%2011.4652%2078.2571%208.44631%2075.3018%206.95413C70.7285%204.66888%2065.883%204.51551%2061.1592%206.5272C57.256%208.17275%2055.4599%2012.6852%2057.1026%2016.587C57.9565%2018.5987%2059.4197%2019.9997%2061.4618%2020.7624C66.0958%2022.5295%2070.7285%2022.4079%2075.2714%2020.3354C77.2209%2019.4512%2078.5942%2017.988%2079.3251%2015.9459H73.3495C72.7098%2018.0806%2070.4245%2019.2978%2068.2581%2018.6291C68.0771%2018.5683%2067.8933%2018.5061%2067.7123%2018.4149C66.8571%2018.0184%2066.3418%2017.1963%2066.3418%2016.2513V14.7273H79.4771ZM82.8884%2017.8968V4.21155H80.5133V0.85828H94.1696V17.8968H96.5764V21.2501H80.5133V17.8968H82.8884ZM46.2829%205.52136L51.1919%202.96115L49.6362%200.00441933L44.7286%202.53422L46.2829%205.52136ZM53.1428%2017.8968V5.91789H39.9439V9.27116H42.3494V17.8968H39.9439V21.2501H55.5483V17.8968H53.1428ZM20.0081%208.81383L25.771%200.85828H37.7803V4.21155H35.372V17.8968H37.7803V21.2501H22.1731V17.8968H24.5814V9.02661L15.7112%2021.2501L6.81057%209.02661V17.8968H9.21878V21.2501H0.59314V17.8968H2.96958V4.21155H0.59314V0.85828H14.2176L20.0081%208.81383Z'%20fill='%23242424'/%3e%3c/svg%3e",A1="/assets/15-VL89vzXY.svg",M1="/assets/16-D9KRuHZe.svg",L1="/assets/17-BRD6G3-l.svg",O1="/assets/18-D69HL7ID.svg",R1="/assets/19-Dos04ydj.svg",k1="/assets/21-BwEZSGFZ.svg",V1="/assets/22-CQ_f5juP.svg",H1="data:image/svg+xml,%3csvg%20width='160'%20height='26'%20viewBox='0%200%20160%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.01%2019.347L131.698%201.45459H137.34V24.006H129.228L123.598%205.49849H123.477L123.789%2024.006H118.183V1.45459H126.647L131.884%2019.347H132.01Z'%20fill='%23242424'/%3e%3cpath%20d='M29.4529%203.56613L26.3316%2024.2433H20.1786L24.4041%201.45459H34.5405L38.7466%2024.2433H32.6178L29.5813%203.56613H29.4529Z'%20fill='%23242424'/%3e%3cpath%20d='M53.0771%2024.2433L49.2656%203.75501H49.1421L48.9993%2024.2433H43.2918L43.7955%201.45459H53.094L55.9078%2018.8748H56.0289L58.8451%201.45459H68.1388L68.6328%2024.2433H62.9374L62.7873%203.75501H62.6686L58.8596%2024.2433H53.0771Z'%20fill='%23242424'/%3e%3cpath%20d='M10.5821%2017.8141C10.8048%2018.3662%2010.737%2019.0757%2010.6329%2019.5043C10.4416%2020.2622%209.92826%2021.0347%208.4124%2021.0347C6.98372%2021.0347%206.11683%2020.2162%206.11683%2018.9643V16.7583H0.00497197L0.00012207%2018.5236C0.00012207%2023.6039%204.00044%2025.1367%208.28648%2025.1367C12.4079%2025.1367%2015.8028%2023.7274%2016.3428%2019.9305C16.6188%2017.9618%2016.413%2016.6736%2016.3186%2016.1869C15.3572%2011.4165%206.70767%209.99269%206.06355%207.3242C5.95458%206.86654%205.98606%206.38224%206.03933%206.12314C6.19673%205.39669%206.69556%204.59517%208.12182%204.59517C9.45364%204.59517%2010.2406%205.41848%2010.2406%206.66313C10.2406%207.08205%2010.2406%208.07002%2010.2406%208.07002H15.9239V6.46941C15.9239%201.50535%2011.4683%200.730469%208.24047%200.730469C4.18689%200.730469%200.874285%202.06956%200.268911%205.77929C0.10425%206.80358%200.0800345%207.71648%200.319761%208.85943C1.315%2013.516%209.41006%2014.8647%2010.5821%2017.8141Z'%20fill='%23242424'/%3e%3cpath%20d='M84.685%2017.773C84.9102%2018.3203%2084.8375%2019.0104%2084.7358%2019.439C84.5494%2020.1945%2084.0408%2020.9549%2082.5347%2020.9549C81.1254%2020.9549%2080.2657%2020.1364%2080.2657%2018.9135L80.2609%2016.7269H74.212L74.2047%2018.468C74.2047%2023.4974%2078.1687%2025.0157%2082.4112%2025.0157C86.489%2025.0157%2089.8524%2023.6258%2090.3827%2019.8628C90.6588%2017.9086%2090.4626%2016.6373%2090.3633%2016.1603C89.4069%2011.4335%2080.8444%2010.0242%2080.2076%207.38237C80.0986%206.92713%2080.1301%206.44768%2080.1858%206.20311C80.348%205.47181%2080.8372%204.68967%2082.2489%204.68967C83.5686%204.68967%2084.3387%205.49361%2084.3387%206.72857C84.3387%207.14265%2084.3387%208.12093%2084.3387%208.12093H89.9783V6.53727C89.9783%201.62648%2085.5591%200.856445%2082.3627%200.856445C78.3552%200.856445%2075.0692%202.17858%2074.4759%205.86168C74.3113%206.87144%2074.2943%207.76739%2074.5292%208.90549C75.5099%2013.5136%2083.5251%2014.8527%2084.685%2017.773Z'%20fill='%23242424'/%3e%3cpath%20d='M103.827%2020.8337C105.408%2020.8337%20105.902%2019.7392%20106.011%2019.1799C106.057%2018.9329%20106.069%2018.6035%20106.064%2018.3081V1.44482H111.827V17.7923C111.839%2018.2113%20111.798%2019.0733%20111.779%2019.2888C111.374%2023.5434%20108.011%2024.9236%20103.824%2024.9236C99.6326%2024.9236%2096.2667%2023.5434%2095.8671%2019.2888C95.8478%2019.0733%2095.8066%2018.2113%2095.8187%2017.7923V1.44482H101.577V18.3081C101.577%2018.6035%20101.587%2018.9353%20101.63%2019.1799C101.754%2019.7392%20102.233%2020.8337%20103.827%2020.8337Z'%20fill='%23242424'/%3e%3cpath%20d='M151.365%2020.5938C153.017%2020.5938%20153.593%2019.5502%20153.7%2018.9424C153.741%2018.6809%20153.753%2018.3636%20153.751%2018.0755V14.7677H151.411V11.4406H159.492V17.5573C159.487%2017.9835%20159.477%2018.2983%20159.41%2019.0586C159.029%2023.2042%20155.433%2024.6837%20151.394%2024.6837C147.348%2024.6837%20143.757%2023.2042%20143.372%2019.0586C143.307%2018.2983%20143.297%2017.9835%20143.29%2017.5573L143.295%207.96089C143.295%207.5565%20143.345%206.83974%20143.389%206.45957C143.895%202.20016%20147.348%200.82959%20151.394%200.82959C155.436%200.82959%20158.974%202.19289%20159.393%206.45957C159.468%207.18601%20159.443%207.96089%20159.443%207.96089V8.72124H153.697V7.44511C153.702%207.44754%20153.69%206.9027%20153.622%206.57822C153.525%206.07455%20153.087%204.91707%20151.351%204.91707C149.69%204.91707%20149.203%206.01159%20149.082%206.57822C149.012%206.87848%20148.985%207.2853%20148.985%207.65336V18.0755C148.98%2018.3636%20148.997%2018.6809%20149.043%2018.9424C149.142%2019.5526%20149.716%2020.5938%20151.365%2020.5938Z'%20fill='%23242424'/%3e%3c/svg%3e",D1="/assets/24-Dmws8xhr.svg",z1="/assets/25-BaRLqQy_.svg",P1="/assets/26-B2H6SqHt.svg",N1="/assets/27-DBraEacE.svg",$1="data:image/svg+xml,%3csvg%20width='112'%20height='33'%20viewBox='0%200%20112%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_720)'%3e%3cpath%20d='M77.422%2013.2852C76.096%2013.3501%2073.7527%2014.0702%2073.2182%2016.3711L71.3498%2027.2529C70.9268%2029.6026%2072.0997%2032.2635%2074.6194%2032.2878H88.6321C90.433%2032.2608%2092.5012%2031.6842%2092.9916%2028.8771L95.0157%2017.508C95.3946%2015.2206%2093.8791%2013.3501%2091.7461%2013.2852H77.422Z'%20fill='%23242424'/%3e%3cpath%20d='M79.1346%2018.6451C78.1641%2018.5991%2077.8891%2018.9591%2077.7334%2019.4572L76.6435%2025.3041C76.5786%2026.1487%2077.0613%2027.0122%2077.8891%2027.0907H86.7638C87.6071%2027.0122%2088.2974%2026.4383%2088.4765%2025.629L89.4106%2020.2692C89.6753%2019.3191%2089.1927%2018.6018%2088.3208%2018.6451H79.1346Z'%20fill='white'/%3e%3cpath%20d='M70.5738%2018.6455H57.8067C56.8673%2018.5995%2056.5896%2018.9595%2056.4054%2019.4576L55.4712%2025.3046C55.2818%2026.1491%2055.7644%2027.0126%2056.7168%2027.0911H69.0168L68.0826%2032.2885H53.2915C50.8029%2032.2614%2049.63%2029.6005%2050.0218%2027.2536L52.0459%2016.3717C52.4559%2014.0681%2054.7991%2013.3507%2056.094%2013.2858H71.508L70.5738%2018.6455ZM43.48%2018.6455H31.0242L31.9584%2013.2858H45.9711C48.5245%2013.3507%2049.6949%2016.0117%2049.2407%2018.3207L47.3724%2029.2025C46.8716%2031.544%2044.5283%2032.2614%2043.1686%2032.2885H29.9344C27.3628%2032.2614%2026.1924%2029.6005%2026.6647%2027.2536L27.2875%2023.1932C27.778%2020.83%2030.1212%2020.11%2031.4913%2020.1072H43.1686C44.0457%2020.11%2044.7359%2018.6022%2043.48%2018.6455ZM25.7305%2018.6455H28.5331L29.4673%2013.2858H26.6647L28.8445%200.29248H23.8622L21.6824%2013.2858H7.51402C6.13351%2013.3507%203.79028%2014.0708%203.31021%2016.3717L1.44185%2027.2536C0.964382%2029.6032%202.1347%2032.2641%204.71148%2032.2885H20.9039C22.0561%2032.2614%2023.5015%2031.184%2023.7065%2029.5274L25.7305%2018.6455Z'%20fill='%23242424'/%3e%3cpath%20d='M7.98386%2027.0908C7.10158%2027.0123%206.61892%2026.1488%206.73829%2025.3042L7.82557%2019.4572C7.92677%2018.9592%208.20184%2018.6018%209.07115%2018.6452H20.7484L19.1914%2027.0908H7.98386Z'%20fill='white'/%3e%3cpath%20d='M103.268%2014.9093L104.513%2013.7724C105.115%2013.3501%20105.803%2013.3501%20106.537%2013.2852H111.052L110.118%2018.6449H105.136C103.875%2018.5989%20102.152%2019.2485%20101.866%2021.0811L99.8423%2032.2878H94.7043L98.1296%2013.2852H102.645L103.268%2014.9093Z'%20fill='%23242424'/%3e%3cpath%20d='M32.4256%2027.0908C31.6368%2027.0123%2031.4993%2025.3583%2032.737%2025.3042H43.013L42.7016%2027.0908H32.4256Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_720'%3e%3crect%20width='109.714'%20height='32'%20fill='white'%20transform='translate(1.33813%200.290039)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",B1="/assets/29-yivH26vR.svg",I1="/assets/30-DGc1459t.svg",U1="data:image/svg+xml,%3csvg%20width='121'%20height='36'%20viewBox='0%200%20121%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.45829%2023.2381H3.99829L2.66629%2018.1861H9.61429L21.9503%200.810059H31.3103L28.9703%2018.1261L41.9903%2018.1859L42.5663%2018.8819C45.6863%2016.7461%2049.8983%2016.7461%2051.4101%2019.4461C53.4981%2017.1899%2058.1781%2017.0579%2059.7621%2019.9499C60.3621%2021.0657%2060.2661%2022.5421%2059.7621%2024.3181L57.8663%2030.3901C57.9863%2031.0141%2058.6823%2032.4061%2056.9783%2032.4061H50.3423L52.4903%2025.7101C53.0543%2023.7419%2050.6543%2023.7419%2050.0903%2025.6499L48.0023%2032.3462H41.1743L43.2623%2025.5181C43.8863%2023.5621%2041.3543%2023.5621%2040.8503%2025.5779L38.7623%2032.2859H31.6223L33.8303%2025.1339C33.9623%2024.6301%2033.9023%2024.1859%2032.9543%2024.1859H28.1423L27.0743%2032.2501L16.7663%2032.2859L18.1583%2024.1859H12.1463L4.87429%2035.1897L0.446289%2031.7101L6.45829%2023.2381ZM16.0103%2018.1741L19.2023%2018.2102L20.3063%2011.8022L16.0103%2018.1741ZM107.222%2032.5262C105.578%2033.0301%20102.794%2033.3541%20101.222%2031.9621C99.6383%2030.5701%2099.5785%2027.1499%20100.526%2024.6899C101.786%2021.3419%20104.066%2018.2459%20107.474%2017.7421C109.694%2017.4301%20112.406%2018.3061%20113.99%2019.6981L114.302%2018.6899H120.446L116.642%2030.9539C116.894%2031.5779%20117.47%2032.4659%20116.138%2032.4659H109.694L110.042%2031.2661C109.214%2031.7342%20108.242%2032.2739%20107.222%2032.5262ZM107.042%2026.6821C107.198%2026.9341%20107.582%2027.2579%20108.278%2027.0059C109.514%2026.5859%20111.662%2024.5701%20112.01%2023.1419C111.122%2021.8817%20109.862%2021.5937%20108.53%2022.7341C107.774%2023.3941%20106.514%2025.7701%20107.042%2026.6821ZM62.1505%2031.9621C60.5665%2030.5701%2060.5063%2027.2222%2061.4545%2024.6899C62.6543%2021.3419%2064.9941%2018.2459%2068.4145%2017.7541C70.6225%2017.4421%2073.3465%2018.3061%2074.9305%2019.6981L75.2423%2018.6899H81.3745L77.5825%2030.9539C77.8345%2031.5899%2078.3985%2032.4659%2077.0786%2032.4659H70.6226L70.9706%2031.3379C70.1546%2031.8061%2069.1346%2032.2859%2068.1626%2032.5377C66.5183%2032.9819%2063.7345%2033.3541%2062.1505%2031.9621ZM68.2465%2026.6821C68.3783%2026.9702%2068.8223%2027.2579%2069.4825%2027.0059C70.7185%2026.5619%2072.8663%2024.5701%2073.2143%2023.1419C72.3263%2021.8817%2071.0903%2021.5339%2069.7345%2022.7341C69.0385%2023.3699%2067.8025%2025.6741%2068.2465%2026.6821ZM86.6181%2032.3342L88.7063%2025.6382C89.2821%2023.7421%2091.5503%2023.6822%2090.9863%2025.6382L89.0901%2032.4061H95.5943C97.3101%2032.4061%2096.6141%2031.0141%2096.4823%2030.3781L98.3781%2024.3061C98.882%2022.5421%2098.9181%2021.4021%2098.2583%2020.2019C96.77%2017.5499%2092.4981%2017.4659%2090.0383%2019.6261L89.5943%2018.7501H83.966L79.7901%2032.3341H86.6181V32.3342Z'%20fill='%23242424'/%3e%3c/svg%3e",XV=[{id:1,imageUrl:p1},{id:2,imageUrl:td},{id:3,imageUrl:m1},{id:4,imageUrl:g1},{id:5,imageUrl:x1},{id:6,imageUrl:v1},{id:7,imageUrl:y1},{id:8,imageUrl:w1},{id:9,imageUrl:b1},{id:10,imageUrl:S1},{id:11,imageUrl:C1},{id:12,imageUrl:T1},{id:13,imageUrl:E1},{id:14,imageUrl:j1},{id:15,imageUrl:A1},{id:16,imageUrl:M1},{id:17,imageUrl:L1},{id:18,imageUrl:O1},{id:19,imageUrl:R1},{id:20,imageUrl:td},{id:21,imageUrl:k1},{id:22,imageUrl:V1},{id:23,imageUrl:H1},{id:24,imageUrl:D1},{id:25,imageUrl:z1},{id:26,imageUrl:P1},{id:27,imageUrl:N1},{id:28,imageUrl:$1},{id:29,imageUrl:B1},{id:30,imageUrl:I1},{id:31,imageUrl:U1}],ZV=w.div`
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
`,WV=w.img`
  height: 32px;
  max-width: min-content;
  /* width: auto; */
  object-fit: contain;
  filter: brightness(1) invert(1);
  transition: all 0.3s ease;
  overflow: visible;
`,KV=w(Yt)`
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
`,QV=()=>h.jsx(ZV,{children:h.jsx(KV,{direction:"vertical",slidesPerView:10,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0},speed:4e3,modules:[oi],grabCursor:!1,allowTouchMove:!1,children:XV.map(e=>h.jsx(Ft,{children:h.jsx(WV,{src:e.imageUrl,alt:`Partner ${e.id}`,onError:t=>{t.target.style.display="none"}})},e.id))})}),Ov={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:te}}},Rv={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:te}}},JV=()=>{const e=ke({query:"(min-width: 1440px)"}),t=ke({query:"(max-width: 1024px)"}),[n,a]=R.useState(!1),o=R.useRef(null),l=c1(o,{once:!0,margin:"-10%"});R.useEffect(()=>{l&&!n&&a(!0)},[l,n]);const{scrollY:d}=vn(),u=ot(d,[0,400],[0,e?80:t?20:40]),f=ot(d,[0,300],[1,.95]);return h.jsx(h.Fragment,{children:h.jsxs(DO,{id:"hero",ref:o,children:[h.jsx(D.div,{style:{y:u,opacity:f},children:h.jsx(zO,{src:FV,alt:"Hero Image",loading:"eager",decoding:"async",onError:m=>{const g=m.target;g.style.display="none"}})}),e&&h.jsx(D.div,{initial:{opacity:0,x:50},animate:n?{opacity:1,x:0}:{opacity:0,x:50},transition:{duration:.7,ease:"easeOut"},children:h.jsx(QV,{})}),h.jsxs(PO,{children:[h.jsxs(NO,{children:[h.jsx(D.div,{initial:"hidden",animate:n?"visible":"hidden",variants:Ov,children:h.jsx($O,{children:"Your Local Appliance Repair & Maintenance Specialists"})}),h.jsx(D.div,{initial:"hidden",animate:n?"visible":"hidden",variants:Ov,transition:{delay:.1},children:h.jsx(BO,{children:"We provide reliable appliance repair services, so your fridge, oven, or washer works like new — and you can get back to your day."})})]}),h.jsxs(IO,{children:[h.jsx(D.div,{initial:"hidden",animate:n?"visible":"hidden",variants:Rv,children:h.jsx(bw,{to:"/contact#ap",children:"Contact Us"})}),h.jsx(D.div,{initial:"hidden",animate:n?"visible":"hidden",variants:Rv,transition:{delay:.05},children:h.jsx(H5,{children:h.jsx("a",{href:"tel:+18055002705",children:"Call Us"})})})]})]})]})})},eH="/assets/News%20Article%202%20Image%20Container-Dg9jwMew.png",tH="/assets/Review%20Image-Elizabeth%20Castorena-CceL9iOj.png",iH="/assets/Review%20Image-Wendy%20Bailey-B8AaJjII.png",nH="/assets/Review%20Image-sanal-avatar-Duv8UWqG.png",kv=[{img:eH,title:"APPLIANCE INSTALLATION SERVICES",description:"Professional installation for appliances, ensuring safety."},{img:tH,title:"WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",description:"Don't wait for food to spoil. Know the signs needing urgent help."},{img:iH,title:"WASHING MACHINE TROUBLESHOOTING",description:"Quick solutions for common washing machine issues."},{img:nH,title:"DISHWASHER MAINTENANCE TIPS",description:"Keep your dishwasher running smoothly with these tips."}],Vv={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},aH={hidden:{opacity:0,y:50,scale:.95,rotateX:-5},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.7,ease:te}},hover:{y:-10,scale:1.02,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}}},rH={hidden:{opacity:0,scale:1.1},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}},hover:{scale:1.05,transition:{duration:.4}}},Hv={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:te}}},sH=()=>{const e=R.useRef(null),t=ke({query:"(max-width: 767px)"}),n=ke({query:"(min-width: 768px)"}),a=ke({query:"(min-width: 1440px)"}),o=t?1:2,l=kv.length>o;return h.jsxs(fH,{children:[h.jsxs(hH,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Vv,children:h.jsx(pH,{children:"NEWS & TIPS"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Vv,transition:{delay:.1},children:h.jsxs(mH,{children:["APPLIANCE ",h.jsx("span",{children:"ADVICE"})," REPAIR ",h.jsx("span",{children:"TIPS"})," BLOG"]})})]}),h.jsxs(uH,{children:[h.jsx(D.div,{whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:.2},children:h.jsx(Dv,{onClick:()=>{var d;return(d=e.current)==null?void 0:d.slidePrev()},bg:"#DBDBD8",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),h.jsx(D.div,{whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:.2,delay:.1},children:h.jsx(Dv,{onClick:()=>{var d;return(d=e.current)==null?void 0:d.slideNext()},bg:"#3098EE",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),h.jsx(oH,{$isTablet:n,children:h.jsx(Yt,{modules:[f1,oi],onSwiper:d=>e.current=d,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:kv.map((d,u)=>h.jsx(Ft,{children:h.jsx(D.div,{variants:aH,whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:u*.1},children:h.jsxs(gH,{$isTablet:n,children:[h.jsx(D.div,{variants:rH,whileHover:"hover",children:h.jsx(xH,{src:d.img,alt:d.title,$isTablet:n})}),h.jsxs(vH,{children:[h.jsx(D.div,{variants:Hv,transition:{delay:u*.1+.1},children:h.jsx(yH,{$isTablet:n,children:d.title})}),h.jsx(D.div,{variants:Hv,transition:{delay:u*.1+.2},children:h.jsx(wH,{$isTablet:n,children:d.description})})]})]})})},u))})})]})},oH=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,lH=Qe`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,cH=Qe`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,dH=Qe`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,uH=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,Dv=w.button`
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
    animation: ${lH} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&zt`
        background-color: #c8c8c5;
        svg {
          animation: ${cH} 0.4s ease;
        }
      `}

    ${e=>e.bg==="#3098EE"&&zt`
        background-color: #2580d6;
        svg {
          animation: ${dH} 0.4s ease;
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
`,fH=w.div`
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
`,hH=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,pH=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,mH=w.p`
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
`,gH=w.div`
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
`,xH=w.img`
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
`,vH=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-radius: 10px;
`,yH=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"32px"};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,wH=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,bH=w.div`
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

  @media screen and (min-width: 744px) {
    width: 100vw;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
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
`;const zv=w.img`
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
`,SH=w(D.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,CH=w(D.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,TH=w.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
`,qw="data:image/svg+xml,%3csvg%20width='212'%20height='14'%20viewBox='0%200%20212%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_277_572)'%3e%3cpath%20d='M0.00384521%2013.2272V0.640137H8.99637V3.40837H3.33527V5.99308H8.54597V8.76131H3.33527V13.2272H0.00384521Z'%20fill='%23242424'/%3e%3cpath%20d='M18.6412%2013.2272H15.3253V0.640137H18.6412V13.2272Z'%20fill='%23242424'/%3e%3cpath%20d='M25.0556%209.25083C26.3309%2010.122%2027.8304%2010.6204%2029.381%2010.6885C30.3595%2010.6885%2031.2758%2010.4591%2031.2758%209.61789C31.2758%209.02907%2030.8409%208.79966%2030.1964%208.61613L28.2628%208.08083C26.1117%207.44613%2024.9935%206.43671%2024.9935%204.44848C24.9935%202.0473%2027.1368%200.472008%2029.8858%200.472008C31.2634%200.447396%2032.6243%200.771251%2033.8385%201.4126V4.47142C32.6991%203.68452%2031.3471%203.2505%2029.9557%203.22495C28.9617%203.22495%2028.255%203.50789%2028.255%204.20377C28.255%204.71613%2028.6045%204.9226%2029.2723%205.12907L31.2059%205.7026C33.5356%206.42142%2034.5995%207.5073%2034.5995%209.39613C34.5995%2012.1032%2032.1223%2013.4949%2029.3732%2013.4949C27.8643%2013.4989%2026.378%2013.1337%2025.0478%2012.432L25.0556%209.25083Z'%20fill='%23242424'/%3e%3cpath%20d='M52.4525%200.640137V13.2272H49.1211V8.18778H44.2676V13.2272H40.8973V0.640137H44.2676V5.41955H49.1599V0.640137H52.4525Z'%20fill='%23242424'/%3e%3cpath%20d='M68.6747%200.640137V3.40837H62.9049V5.41955H68.2166V8.18778H62.9049V10.4819H68.7136V13.2501H59.5347V0.640137H68.6747Z'%20fill='%23242424'/%3e%3cpath%20d='M75.524%200.640137H80.9599C83.8098%200.640137%2085.9764%202.16955%2085.9764%204.98367C86.0132%205.85467%2085.761%206.71377%2085.2581%207.43116C84.7551%208.14856%2084.0287%208.68525%2083.1886%208.96014L86.5589%2013.2272H82.6761L79.6553%209.33484H78.8244V13.2272H75.524V0.640137ZM78.8554%206.55131H80.7657C81.9694%206.55131%2082.746%205.9319%2082.746%204.96837C82.746%204.00484%2081.9694%203.39308%2080.7657%203.39308H78.8709L78.8554%206.55131Z'%20fill='%23242424'/%3e%3cpath%20d='M106.485%2012.1795C105.502%2013.0123%20104.241%2013.4588%20102.944%2013.4337C100.242%2013.4337%2097.9897%2011.6901%2097.9897%208.84543C98.0077%208.02146%2098.2249%207.21358%2098.6233%206.48878C99.0217%205.76399%2099.5899%205.14316%20100.281%204.67778L99.007%203.14837V0.640137H107.549V3.40837H102.991L106.446%207.7519L107.223%206.56661H110.679L108.217%2010.0537L110.756%2013.2272H107.285L106.485%2012.1795ZM104.738%2010.0537L102.051%206.78837C101.716%207.01078%20101.442%207.31015%20101.251%207.66058C101.06%208.01101%20100.959%208.40194%20100.956%208.79955C100.953%209.05676%20101.003%209.31195%20101.102%209.54974C101.202%209.78752%20101.349%2010.003%20101.536%2010.1831C101.722%2010.3631%20101.944%2010.5042%20102.187%2010.5976C102.431%2010.691%20102.691%2010.7349%20102.952%2010.7266C103.28%2010.737%20103.607%2010.6828%20103.914%2010.5673C104.22%2010.4518%20104.501%2010.2771%20104.738%2010.0537Z'%20fill='%23242424'/%3e%3cpath%20d='M126.264%2013.2272H122.933V0.640137H128.369C131.219%200.640137%20133.385%202.16955%20133.385%204.98367C133.385%207.79778%20131.219%209.33484%20128.369%209.33484H126.264V13.2272ZM126.264%206.56661H128.136C129.347%206.56661%20130.116%205.9472%20130.116%204.98367C130.116%204.02014%20129.339%203.40837%20128.136%203.40837H126.241L126.264%206.56661Z'%20fill='%23242424'/%3e%3cpath%20d='M145.997%2010.9101H140.879L139.963%2013.2043H136.678L141.881%200.640137H145.049L150.252%2013.2272H146.897L145.997%2010.9101ZM141.982%208.1419H144.894L143.442%204.45602L141.982%208.1419Z'%20fill='%23242424'/%3e%3cpath%20d='M157.288%2013.2272V8.34837L152.457%200.640137H156.208L159.058%205.49602L161.908%200.640137H165.449L160.619%208.34837V13.2272H157.288Z'%20fill='%23242424'/%3e%3cpath%20d='M173.487%205.99308L177.571%200.640137H181.454L176.733%206.66602L181.64%2013.2272H177.688L173.487%207.59131V13.2272H170.155V0.640137H173.487V5.99308Z'%20fill='%23242424'/%3e%3cpath%20d='M195.751%200.640137V3.40837H189.934V5.41955H195.246V8.18778H189.934V10.4819H195.751V13.2501H186.603V0.640137H195.751Z'%20fill='%23242424'/%3e%3cpath%20d='M202.6%200.640137H205.931V10.459H211.678V13.2272H202.6V0.640137Z'%20fill='%23242424'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_277_572'%3e%3crect%20width='212'%20height='13'%20fill='white'%20transform='translate(0.00384521%200.433594)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Yw=()=>{const e=ke({query:"(max-width: 743px)"}),t=ke({query:"(min-width: 744px) and (max-width: 1023px)"}),n=ke({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:p1},{id:2,imageUrl:td},{id:3,imageUrl:m1},{id:4,imageUrl:g1},{id:5,imageUrl:x1},{id:6,imageUrl:v1},{id:7,imageUrl:y1},{id:8,imageUrl:w1},{id:9,imageUrl:b1},{id:10,imageUrl:S1},{id:11,imageUrl:C1},{id:12,imageUrl:T1},{id:13,imageUrl:E1},{id:14,imageUrl:j1},{id:15,imageUrl:A1},{id:16,imageUrl:M1},{id:17,imageUrl:L1},{id:18,imageUrl:O1},{id:19,imageUrl:R1},{id:20,imageUrl:qw},{id:21,imageUrl:k1},{id:22,imageUrl:V1},{id:23,imageUrl:H1},{id:24,imageUrl:D1},{id:25,imageUrl:z1},{id:26,imageUrl:P1},{id:27,imageUrl:N1},{id:28,imageUrl:$1},{id:29,imageUrl:B1},{id:30,imageUrl:I1},{id:31,imageUrl:U1}],o=e?2:t?4:5,l=a.length>o,d={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},u={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:te}},hover:{scale:1.1,y:-5,transition:{duration:.3,ease:te}}};return h.jsxs("div",{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsx(TH,{children:"Quality Service for Major & Luxury Brands"})}),h.jsxs(bH,{children:[h.jsx(SH,{}),h.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map((f,m)=>h.jsx(Ft,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:u,transition:{delay:m*.05},whileHover:"hover",children:h.jsx(zv,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy"})})},f.id))}),h.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%"},children:a.map((f,m)=>h.jsx(Ft,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:u,transition:{delay:m*.05+.1},whileHover:"hover",children:h.jsx(zv,{src:f.imageUrl,alt:`Partner ${f.id}`,loading:"lazy"})})},f.id+100))}),h.jsx(CH,{})]})]})},Fw="/assets/ServicesImage-BRQYmF9y.png",EH=w.div`
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
`,jH=w.p`
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
`,AH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 3rem;
  }
`,MH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 0.25rem;
  }
`,Pv=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 0.75rem;
  }
`,LH=w.p`
  color: #242424;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,OH=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,Nv=w.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`,RH=w.p`
  color: #242424;
  font-family: var(--second-family);
  font-size: 28px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`,kH=w.img`
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
`,$v=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  
  @media screen and (min-width: 1440px) {
    padding-top: 40%;
  }
`,Bv=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;
`,id=w(Ct)`
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

  &:hover, &:focus {
    background-color: #242424;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,Iv=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  transition: color 0.2s ease;

  ${id}:hover &, ${id}:focus & {
    color: white;
  }
`,VH=w.div`
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
`,HH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,DH=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`,zH=w.p`
  color: var(--black-500);
  font-family: var(--font-family);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.4em;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`,PH=w.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
`,NH=w(Ct)`
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

  &:hover, &:focus {
    background: #1a7bc9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,Zh=w.button`
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

  &:hover, &:focus {
    background-color: #242424;
    border-color: #242424;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,Xw=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
`,$H=w(Xw)`
  color: #242424;
  transition: color 0.2s ease;

  ${Zh}:hover &, ${Zh}:focus & {
    color: white;
  }
`,BH=w.div`
  position: relative;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;w.div`
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
`;const W0={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:te}}},K0={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:te}}},pc={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:te}}},IH={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:te}}},UH={visible:{transition:{staggerChildren:.1}}},_H=()=>{const e=ke({query:"(min-width: 1440px)"}),[t,n]=R.useState(!1),a=R.useRef(null),o=c1(a,{once:!0,margin:"-20%"});R.useEffect(()=>{o&&!t&&n(!0)},[o,t]);const{scrollY:l}=vn(),d=ot(l,[0,300],[0,e?-50:-20],{clamp:!1});return h.jsxs(EH,{ref:a,children:[h.jsx(D.div,{initial:"hidden",animate:t?"visible":"hidden",variants:W0,children:h.jsx(jH,{children:"Our Service"})}),h.jsxs(AH,{children:[h.jsxs(MH,{children:[h.jsxs(D.div,{initial:"hidden",animate:t?"visible":"hidden",variants:UH,children:[h.jsx(D.div,{variants:K0,children:h.jsxs(Pv,{children:[h.jsx(LH,{children:"01."}),h.jsx(OH,{children:"Appliance Care & Tune-Ups"})]})}),h.jsx(D.div,{variants:K0,children:h.jsx(Nv,{children:"Professional Installations"})}),h.jsx(D.div,{variants:K0,children:h.jsx(Nv,{children:"Fast & Reliable Emergency Repairs"})})]}),e&&h.jsx(D.div,{initial:"hidden",animate:t?"visible":"hidden",variants:W0,children:h.jsxs($v,{children:[h.jsx(Bv,{children:"Do you want to know more about our service?"}),h.jsx(id,{to:"/fridge#ap",children:h.jsx(Iv,{children:"Learn more"})})]})})]}),h.jsxs(BH,{children:[h.jsx(D.div,{style:{y:d},initial:"hidden",animate:t?"visible":"hidden",variants:IH,children:h.jsx(kH,{src:Fw,alt:"Services Image",loading:"lazy"})}),h.jsx(D.div,{initial:"hidden",animate:t?"visible":"hidden",variants:pc,children:h.jsxs(VH,{children:[h.jsxs(HH,{children:[h.jsx(D.div,{variants:pc,children:h.jsx(Pv,{children:h.jsx(RH,{children:"Preventive Care"})})}),h.jsx(D.div,{variants:pc,children:h.jsx(DH,{children:h.jsx(zH,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),h.jsx(D.div,{variants:pc,children:h.jsxs(PH,{children:[h.jsx(NH,{to:"/contact#ap",children:h.jsx(Xw,{children:"Contact Us"})}),h.jsx(Zh,{children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx($H,{children:"Call Us"})})})]})})]})})]}),!e&&h.jsx(D.div,{initial:"hidden",animate:t?"visible":"hidden",variants:W0,children:h.jsxs($v,{children:[h.jsx(Bv,{children:"Do you want to know more about our service?"}),h.jsx(id,{to:"/fridge#ap",children:h.jsx(Iv,{children:"Learn more"})})]})})]})]})},GH="/assets/Service%20Area%20Section-B7et7wWI.webp",qH=w.div`
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
`,YH=w.h2`
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
`,FH=w.p`
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
`,XH=w.div`
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
`,ZH=w.div`
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
`,WH=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,KH=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,QH=w.p`
  color: #3098ee;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,JH=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,eD=[{county:"Ventura County",city:"Thousand Oaks",icon:h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:h.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Newbury Park",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Westlake Village",icon:h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:h.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Oak Park",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Lake Sherwood",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Hidden Valley",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Camarillo",icon:h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:h.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Agoura Hills",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Moorpark",icon:h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:h.jsx("path",{d:"M4.99998 7.33333H3.06665C2.69328 7.33333 2.50659 7.33333 2.36399 7.406C2.23854 7.46991 2.13656 7.5719 2.07264 7.69734C1.99998 7.83995 1.99998 8.02663 1.99998 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98675 2 9.61338 2 8.86665 2H7.13331C6.38658 2 6.01321 2 5.72799 2.14532C5.47711 2.27316 5.27314 2.47713 5.1453 2.72801C4.99998 3.01323 4.99998 3.3866 4.99998 4.13333V14M14.6666 14H1.33331M7.33331 4.66667H8.66665M7.33331 7.33333H8.66665M7.33331 10H8.66665",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Calabasas",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Ventura County",city:"Santa Rosa Valley",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})},{county:"Los Angeles County",city:"Malibu",icon:h.jsx("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",children:h.jsx("path",{d:"M5.50004 7.33333H3.56671C3.19334 7.33333 3.00665 7.33333 2.86405 7.406C2.73861 7.46991 2.63662 7.5719 2.5727 7.69734C2.50004 7.83995 2.50004 8.02663 2.50004 8.4V14M11.5 7.33333H13.4334C13.8067 7.33333 13.9934 7.33333 14.136 7.406C14.2615 7.46991 14.3635 7.5719 14.4274 7.69734C14.5 7.83995 14.5 8.02663 14.5 8.4V14M11.5 14V4.13333C11.5 3.3866 11.5 3.01323 11.3547 2.72801C11.2269 2.47713 11.0229 2.27316 10.772 2.14532C10.4868 2 10.1134 2 9.36671 2H7.63337C6.88664 2 6.51327 2 6.22805 2.14532C5.97717 2.27316 5.7732 2.47713 5.64537 2.72801C5.50004 3.01323 5.50004 3.3866 5.50004 4.13333V14M15.1667 14H1.83337M7.83337 4.66667H9.16671M7.83337 7.33333H9.16671M7.83337 10H9.16671",stroke:"#3098EE",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}],Uv={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},tD={hidden:{opacity:0,y:50,scale:.9,rotateX:-5},visible:e=>({opacity:1,y:0,scale:1,rotateX:0,transition:{duration:.6,delay:e*.1,ease:te}}),hover:{y:-10,scale:1.05,rotateY:5,boxShadow:"0 20px 40px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}},tap:{scale:.98}},iD={hidden:{opacity:0,scale:.8,rotate:-90},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.5,ease:Rt}},hover:{scale:1.2,rotate:5,transition:{duration:.2}}},nD=()=>h.jsxs(qH,{$bg:GH,children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Uv,children:h.jsx(YH,{children:"Serving Ventura and Los Angeles Counties"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Uv,transition:{delay:.1},children:h.jsx(FH,{children:"We provide expert service throughout the greater Los Angeles area."})}),h.jsx(XH,{children:eD.map((e,t)=>h.jsx(D.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:tD,whileHover:"hover",whileTap:"tap",children:h.jsxs(ZH,{children:[h.jsxs(WH,{children:[h.jsx(D.div,{variants:iD,whileHover:"hover",children:h.jsx(KH,{children:e.icon})}),h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.2},children:h.jsx(QH,{children:e.county})})]}),h.jsx(D.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t*.1+.3},children:h.jsx(JH,{children:e.city})})]})},t))})]}),aD="/assets/WhyAirtexnoImage-BBTHkk8n.png",_v="/assets/WhyAirtexnoImage2-BIh43Sbv.png",rD="/assets/WhyAirtexnoImage3-C5uIh3SS.png",Q0="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.5%2011H4.6C4.03995%2011%203.75992%2011%203.54601%2011.109C3.35785%2011.2049%203.20487%2011.3578%203.10899%2011.546C3%2011.7599%203%2012.0399%203%2012.6V21M16.5%2011H19.4C19.9601%2011%2020.2401%2011%2020.454%2011.109C20.6422%2011.2049%2020.7951%2011.3578%2020.891%2011.546C21%2011.7599%2021%2012.0399%2021%2012.6V21M16.5%2021V6.2C16.5%205.0799%2016.5%204.51984%2016.282%204.09202C16.0903%203.71569%2015.7843%203.40973%2015.408%203.21799C14.9802%203%2014.4201%203%2013.3%203H10.7C9.5799%203%209.01984%203%208.59202%203.21799C8.2157%203.40973%207.90973%203.71569%207.71799%204.09202C7.5%204.51984%207.5%205.0799%207.5%206.2V21M22%2021H2M11%207H13M11%2011H13M11%2015H13'%20stroke='%233098EE'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",sD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%206V12L16%2014M22%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%206.47715%206.47715%202%2012%202C17.5228%202%2022%206.47715%2022%2012Z'%20stroke='%23242424'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",oD=()=>{const e=ke({query:"(max-width: 743px)"}),t=ke({query:"(min-width: 744px) and (max-width: 1023px)"}),n=ke({query:"(min-width: 1024px)"}),a=ke({query:"(min-width: 1440px)"}),[o,l]=R.useState(!1),d=R.useRef(null),u=c1(d,{once:!0,margin:"-10%"});R.useEffect(()=>{u&&!o&&l(!0)},[u,o]);const f=[{title:"Manufacturer-Trained Technicians",text:"Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.",image:aD,icon:Q0},{title:"Genuine Parts in Stock",text:"We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.",image:_v,icon:sD},{title:"Fast, Hassle-Free Service",text:"One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.",image:rD,icon:Q0},{title:"Local & Fair Pricing",text:"As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.",image:_v,icon:Q0}],m=e?1:t?2:3,g=f.length>m,v={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:te}}},y={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}}};return h.jsxs(h.Fragment,{children:[h.jsx(uV,{}),h.jsxs(fV,{ref:d,children:[h.jsxs(hV,{children:[h.jsx(D.div,{initial:"hidden",animate:o?"visible":"hidden",variants:v,children:h.jsx(pV,{children:"why airtexno"})}),h.jsx(D.div,{initial:"hidden",animate:o?"visible":"hidden",variants:v,transition:{delay:.1},children:h.jsxs(mV,{children:["Same-Day Appliance Repair ",h.jsx(_w,{children:"You Can Rely On"})," "]})})]}),h.jsx(CV,{children:h.jsx(xV,{$isLargeDesktop:a,children:h.jsx(Yt,{modules:[ER,oi],pagination:{clickable:!0,dynamicBullets:!0},spaceBetween:a?0:16,loop:g,slidesPerView:m,centeredSlides:a,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:600,className:"businessSwiper",touchRatio:1.5,resistanceRatio:.5,children:f.map((S,b)=>h.jsx(Ft,{children:h.jsx(yV,{style:{backgroundImage:`url(${S.image})`},$isLargeDesktop:a,className:"slide-container",children:(S.title||S.text||S.icon)&&h.jsxs(D.div,{className:"overlay",initial:"hidden",animate:o?"visible":"hidden",variants:y,whileHover:e?{}:{scale:1.02,transition:{duration:.2}},children:[(S.title||S.icon)&&h.jsxs(wV,{children:[S.title&&h.jsx(D.div,{variants:v,children:h.jsx(gV,{children:S.title})}),S.icon&&h.jsx(D.div,{variants:v,transition:{delay:.1},children:h.jsx(bV,{className:"icon-wrapper",children:h.jsx("img",{src:S.icon,alt:S.title||"icon",className:"icon-image",loading:"lazy"})})})]}),S.text&&h.jsx(D.div,{variants:v,transition:{delay:.2},children:h.jsx(SV,{className:"slide-text",children:S.text})})]})})},b))})})})]})]})},lD=w.div`
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
`,J0=()=>h.jsx(h.Fragment,{children:h.jsxs(lD,{id:"hero",children:[h.jsx(JV,{}),h.jsx(_H,{}),h.jsx(oD,{}),h.jsx(Gw,{}),h.jsx(nD,{}),h.jsx(Yw,{}),h.jsx(Ad,{}),h.jsx(sH,{}),h.jsx(jd,{})]})}),cD=w.div`
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
  `,dD="/assets/Team%20Member%20Image-mppsJqlp.png",uD="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.99992%200.833008V17.1663M0.833252%208.99967H17.1666'%20stroke='black'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",fD=Qe`
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
`,hD=Qe`
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
`,pD=Qe`
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
`,Wh=w.p`
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
`,mD=w.button`
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
      ${hD} 1s ease,
      ${pD} 0.6s ease;
    background-position: 100% 50%;
    transform: translateY(-3px);
    box-shadow:
      0 8px 25px rgba(48, 152, 238, 0.4),
      0 4px 15px rgba(48, 152, 238, 0.3);

    &::before {
      left: 100%;
    }

    svg {
      animation: ${fD} 1s ease;
    }

    ${Wh} {
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

    &:hover ${Wh} {
      transform: translateX(3px);
    }
  }
`,gD=w.div`
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
`,xD=w.div`
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
`,vD=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`,yD=w.img`
  border-radius: 74px;
  width: 119px;
  height: 119px;
  object-fit: cover;
  margin-bottom: 36px;
`,wD=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,bD=w.p`
  color: #242424;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 400;
  line-height: 1em;
  width: 100%;
  padding-bottom: 16px;
`,SD=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`,CD=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`,TD=w.div`
  position: relative;
  width: 44px;
  height: 44px;
`,ED=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  background: #c6e6ff;
  border-radius: 100px;
`,jD=w.p`
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
const AD=w.div`
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
`,MD=w.h2`
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
`;const LD=w.div`
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
`,OD=w.button`
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
`,RD=w.div`
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
`,kD=w.img.attrs(()=>({}))`
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
`,VD=w.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`,HD=w.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`,_1=()=>{const[e,t]=R.useState(null),n=[{question:"How quickly can you repair my appliance?",answer:"Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call."},{question:"Do you offer emergency repair services?",answer:"Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours."},{question:"What brands and appliances do you service?",answer:"We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances."},{question:"How do I schedule a repair?",answer:"You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts."},{question:"What if I'm not satisfied with the repair?",answer:"We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service."},{question:"How much will the repair cost?",answer:"Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor."}],a=y=>{t(S=>S===y?null:y)},o={hidden:{opacity:0,scale:.8,rotate:-20,x:-50},visible:{opacity:1,scale:1,rotate:0,x:0,transition:{duration:1.2,ease:Rt,delay:.2}},hover:{scale:1.05,rotate:5,transition:{duration:.4,ease:te}}},l={hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1,transition:{duration:.8,ease:te,delay:.4}},hover:{scale:1.1,boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:te}},tap:{scale:.95}},d={hidden:{opacity:0,y:30,rotate:-5},visible:{opacity:1,y:0,rotate:0,transition:{duration:.9,ease:Rt,delay:.6}},hover:{y:-5,rotate:2,transition:{duration:.3,ease:te}}},u={hidden:{opacity:0,x:-100,rotate:-10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:te}}},f={hidden:{opacity:0,x:100,rotate:10},visible:{opacity:1,x:0,rotate:0,transition:{duration:.7,ease:te}}},m={hidden:{opacity:0,height:0,scale:.9},visible:{opacity:1,height:"auto",scale:1,transition:{duration:.5,ease:te}}},g={hidden:{opacity:0,y:-30,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,y:0,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 30px rgba(48, 152, 238, 0.8)","0 0 15px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:te,delay:.1}}},v=y=>y*.15;return h.jsxs(gD,{children:[h.jsxs(xD,{children:[h.jsxs(vD,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,whileHover:"hover",children:h.jsx(yD,{src:dD,alt:"Team Member Image"})}),h.jsxs(wD,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,children:h.jsx(bD,{children:"Book a Call"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,transition:{delay:.2},children:h.jsx(SD,{children:"Time to get introduced and explore how we can help"})}),h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileTap:"tap",children:h.jsx("a",{href:"tel:+18055002705",children:h.jsxs(mD,{children:[h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),h.jsx(Wh,{children:"Call us now"})]})})})]})]}),h.jsx(CD,{children:h.jsxs(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,whileHover:"hover",children:[h.jsxs(TD,{children:[h.jsx(ED,{}),h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",left:"10px",top:"10px"},children:h.jsx("path",{d:"M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z",stroke:"#808080",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),h.jsxs(jD,{children:["Prefer email communication?",h.jsx("br",{}),h.jsx("a",{href:"mailto:Airtexnola@gmail.com",children:"airtexno@gmail.com"})]})]})})]}),h.jsxs(AD,{children:[h.jsx(VD,{children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,children:h.jsx(MD,{children:"Frequently Asked Questions"})})}),h.jsx(HD,{children:n.map((y,S)=>h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:S%2===0?u:f,transition:{delay:v(S)},children:h.jsxs(LD,{children:[h.jsxs(OD,{onClick:()=>a(S),children:[y.question,h.jsx(kD,{src:uD,alt:"Toggle answer",$rotate:e===S})]}),h.jsx(D.div,{initial:"hidden",animate:e===S?"visible":"hidden",variants:m,style:{overflow:"hidden"},children:h.jsx(RD,{$isOpen:e===S,children:y.answer})})]})},S))})]})]})},DD=w.div`
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
`,zD=w.img`
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
`,PD=w.div`
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
`,ND=w.div`
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
`,$D=w.p`
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
`,BD=w.p`
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
`;const ID="/assets/HeroImage2About-CoU9D2Tq.png",UD=()=>{const{scrollY:e}=vn(),t=ot(e,[0,500],[0,150]),n=ot(e,[0,400],[1,1.1]),a=ot(e,[0,600],[0,-3]),o=ot(e,[0,300],[0,50]),l=ot(e,[0,200],[1,.8]),d={hidden:{opacity:0,x:-100,skewX:15},visible:{opacity:1,x:0,skewX:0,transition:{duration:1.2,ease:te,delay:.5}}},u={hidden:{opacity:0,y:50,scaleY:0,filter:"blur(10px)"},visible:{opacity:1,y:0,scaleY:1,filter:"blur(0px)",transition:{duration:.8,ease:_c,delay:.8}}},f={hidden:{opacity:0,y:80,rotateX:10},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1,ease:_c,delay:.3}}},m={hidden:{opacity:0,scale:0,rotate:0},visible:{opacity:1,scale:1,rotate:360,transition:{duration:1.5,ease:te,delay:1}}};return h.jsxs(DD,{id:"ap",children:[h.jsx(D.div,{style:{position:"absolute",top:"20%",left:"10%",width:"8px",height:"8px",background:"rgba(48, 152, 238, 0.6)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3}}),h.jsx(D.div,{style:{position:"absolute",top:"60%",right:"15%",width:"12px",height:"12px",background:"rgba(48, 152, 238, 0.4)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.5}}),h.jsx(D.div,{style:{position:"absolute",bottom:"30%",left:"20%",width:"6px",height:"6px",background:"rgba(48, 152, 238, 0.3)",borderRadius:"50%",zIndex:2},variants:m,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.8}}),h.jsx(D.div,{style:{y:t,scale:n,rotate:a},children:h.jsx(zD,{src:ID,alt:"Hero Image"})}),h.jsx(D.div,{style:{y:o,opacity:l},children:h.jsx(PD,{children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,children:h.jsxs(ND,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,children:h.jsx(BD,{children:"About Our Company and Team"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsx($D,{children:"Fast, affordable, and trusted service"})})]})})})}),h.jsx(D.div,{style:{position:"absolute",top:"10%",right:"5%",width:"2px",height:"100px",background:"linear-gradient(to bottom, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,height:0},whileInView:{opacity:1,height:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.2}}),h.jsx(D.div,{style:{position:"absolute",bottom:"15%",left:"5%",width:"100px",height:"2px",background:"linear-gradient(to right, transparent, #3098EE, transparent)",zIndex:2},initial:{opacity:0,width:0},whileInView:{opacity:1,width:100},viewport:{once:!0,amount:.3},transition:{duration:1,delay:1.5}})]})},_D=w.section`
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
`,GD=w.div`
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
`,qD=w.h3`
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
`,eh=w.span`
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
`,YD=w.div`
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
`,FD=w.div`
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
`,Gv=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 125%;
  color: var(--black-500);

  &:hover {
    color: var(--blue-500);
    transform: translateY(-1px);
  }
`,XD=w.div`
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
`,ZD=w.div`
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
`,qv=w.p`
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
`,WD=w.img`
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
`,KD=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,QD="/assets/Services%20Image-e7Omvubx.png",JD="/assets/Team%20Image-CG0rB-nI.png",ez=()=>{const e=ke({query:"(min-width: 1440px)"}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.8,ease:te}}},a={hidden:{opacity:0,x:30},visible:{opacity:1,x:0,transition:{duration:.8,ease:te}}};return h.jsxs(_D,{children:[h.jsx(GD,{children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:h.jsxs(qD,{children:["Our mission is to provide ",h.jsx(eh,{children:"reliable"})," and ",h.jsx(eh,{children:"efficient"}),"appliance repair services that improve",h.jsx(eh,{children:"everyday "}),"life"," "]})})}),h.jsxs(KD,{children:[h.jsxs(XD,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:h.jsx("img",{src:QD,alt:"image"})}),h.jsxs(FD,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.2},children:h.jsx(Gv,{children:"“Our goal is to bring comfort and convenience back to your home with every repair. We believe in honest service, quality workmanship, and building lasting relationships with our customers,”"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.3},children:h.jsx(YD,{children:"Sanal Gariaev"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.4},children:h.jsx(Gv,{children:"Chief Executive Officer"})})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.5},children:h.jsxs(qv,{children:["As a highly regarded and trusted appliance repair company, we take immense pride in having served our community with exceptional repair services since [год основания]. Our extensive experience and commitment to excellence have allowed us to build strong relationships with our customers. We fully recognize how vital it is for your household to have functioning appliances, as they play a crucial role in your daily routine. Whether it's your refrigerator keeping your food fresh, your washing machine ensuring your clothes are clean, or your oven preparing meals for your family, any malfunction can disrupt your life. That's why our primary goal is to restore the performance of your appliances swiftly and affordably, ensuring that you can return to your normal routine with minimal interruption. ",h.jsx("br",{}),e&&h.jsxs(h.Fragment,{children:[h.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})]})})]}),h.jsxs(ZD,{children:[!e&&h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.6},children:h.jsxs(qv,{children:[h.jsx("br",{}),"Through years of experience and a commitment to excellence, we offer trusted, fast, and sustainable solutions tailored to each client's needs. Whether it's a refrigerator, washing machine, or oven, our expert technicians are equipped to handle a wide range of appliances, ensuring your home stays comfortable and functional."]})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,transition:{delay:.7},children:h.jsx(WD,{src:JD,alt:"team"})})]})]})]})},tz=w.section`
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
`,iz=w.p`
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
`,nz=w.p`
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
`,az=w.div`
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
`,rz=w.div`
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
`,sz=w.div`
  background: rgba(33, 33, 33, 0.5);
  width: 100%;
  height: 1px;
`,oz=w.div`
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
`,lz=w.div`
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  @media (min-width: 1440px) {
    margin-right: 5.25rem; /* 84px - approximate gap-21 */
  }
`,cz=w.p`
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
`,dz=w.div`
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
`,uz=w.p`
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
`,fz=w.p`
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
`,hz=w.img`
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
`,pz="/assets/ValueImage-GehUXRc0.png",mz="/assets/ValueImage1-XDPVu8iL.png",gz="/assets/ValueImage2-CBdwtolx.png",xz="/assets/ValueImage3-4cmMPphm.png",vz=()=>{const e=d=>({__html:d}),t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},n={hidden:{opacity:0,y:50},visible:d=>({opacity:1,y:0,transition:{duration:.7,delay:d*.1}})},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5}}},o={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.6,delay:.2}}},l=[{id:1,number:"01",title:"<span>Reliable</span> Service",description:"We are committed to providing trustworthy repairs that you can count on. Our technicians arrive on time and deliver lasting solutions to keep your appliances running smoothly.",image:pz,alt:"Reliable Service"},{id:2,number:"02",title:"<span>Fast</span> Response",description:"We understand the importance of a quick fix. Our team works efficiently to diagnose and repair your appliances as soon as possible, minimizing downtime and inconvenience.",image:mz,alt:"Fast Response"},{id:3,number:"03",title:"<span>Customer-Centric</span> Approach",description:"Your satisfaction is our priority. We listen carefully to your needs and tailor our services to meet your specific requirements, ensuring a positive experience every time.",image:gz,alt:"Quality Work"},{id:4,number:"04",title:"Quality <span>and</span> Trust",description:"We use only high-quality parts and follow industry best practices to ensure durable repairs. Our goal is to build long-term relationships based on trust and excellent service.",image:xz,alt:"Durable Repairs"}];return h.jsxs(tz,{children:[h.jsxs("div",{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:h.jsx(iz,{children:"Our Values"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:h.jsxs(nz,{children:["Core ",h.jsx("span",{children:"Principles"})," That Drive Us"]})})]}),h.jsx(az,{children:l.map((d,u)=>h.jsx(D.div,{custom:u,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:n,children:h.jsxs(rz,{children:[h.jsx(sz,{}),h.jsxs(oz,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:h.jsx(lz,{children:h.jsx(cz,{children:d.number})})}),h.jsxs(dz,{children:[h.jsx(uz,{dangerouslySetInnerHTML:e(d.title)}),h.jsx(fz,{children:d.description})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,children:h.jsx(hz,{src:d.image,alt:d.alt,loading:"lazy"})})]})]})},d.id))})]})},yz=w.div`
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
`,wz=w.p`
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
`,bz=w.p`
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
`,Sz=w.div`
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
`,Yv=w.div`
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
`,Cz="/assets/Why%20Airtexno%20Image%201-BBN2sLs-.png",Tz="/assets/Why%20Airtexno%20Image%202-Cvbnvjs7.png",Ez="/assets/Why%20Airtexno%20Image%203-C0oUp0-3.png",jz="/assets/Why%20Airtexno%20Image%204-Bs7KaXbL.png",Az=()=>{const{scrollY:e}=vn(),t=ot(e,[0,300],[0,50]),n=ot(e,[0,200],[1,.8]),a={hidden:{opacity:0,y:60,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:1.2,ease:te}}},o={hidden:{opacity:0,scale:.8,borderRadius:"50%",filter:"blur(10px) grayscale(100%)"},visible:f=>({opacity:1,scale:1,borderRadius:"8px",filter:"blur(0px) grayscale(0%)",transition:{duration:1.4,delay:f*.2,ease:te}}),hover:{scale:1.08,borderRadius:"4px",filter:"grayscale(0%) brightness(110%)",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.25)",zIndex:10,transition:{duration:.5,ease:te}}},l={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:1,ease:te,staggerChildren:.1}}},d={hidden:{opacity:0,scale:.5,color:"#000000"},visible:{opacity:1,scale:1,color:"#3098EE",transition:{duration:1.5,ease:te,delay:.5}},hover:{scale:1.1,textShadow:"0 0 20px rgba(48, 152, 238, 0.8)",transition:{duration:.3,ease:te}}},u={hidden:{opacity:0,y:80,rotateX:15},visible:{opacity:1,y:0,rotateX:0,transition:{duration:1.2,ease:te}},hover:{y:-10,transition:{duration:.4,ease:te}}};return h.jsxs(yz,{children:[h.jsxs(D.div,{style:{y:t,opacity:n},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:l,children:[h.jsx(D.div,{variants:a,children:h.jsx(wz,{children:"Meet the Team"})}),h.jsx(D.div,{variants:a,transition:{delay:.2},children:h.jsxs(bz,{children:["Professionals committed to"," ",h.jsx(D.span,{variants:d,whileHover:"hover",children:"quality"})," ","service"]})})]}),h.jsxs(Sz,{children:[h.jsx(D.div,{variants:u,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:h.jsxs(Yv,{children:[h.jsx(D.div,{custom:0,variants:o,whileHover:"hover",children:h.jsx(mc,{src:Cz,alt:"Team Member 1"})}),h.jsx(D.div,{custom:1,variants:o,whileHover:"hover",children:h.jsx(mc,{src:Tz,alt:"Team Member 2"})})]})}),h.jsx(D.div,{variants:u,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},transition:{delay:.3},whileHover:"hover",children:h.jsxs(Yv,{children:[h.jsx(D.div,{custom:2,variants:o,whileHover:"hover",children:h.jsx(mc,{src:Ez,alt:"Team Member 3"})}),h.jsx(D.div,{custom:3,variants:o,whileHover:"hover",children:h.jsx(mc,{src:jz,alt:"Team Member 4"})})]})})]})]})},Mz=()=>h.jsxs(cD,{children:[h.jsx(UD,{}),h.jsx(ez,{}),h.jsx(vz,{}),h.jsx(Az,{}),h.jsx(_1,{})]}),Lz=w.div`
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
`;const Oz=()=>h.jsxs(Lz,{id:"ap",children:[h.jsx(jd,{}),h.jsx(Ad,{})]}),Rz=w.div`
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
`,kz=w.div`
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
`,Vz=w.h2`
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
`,Hz=w.div`
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
`,Dz=w(Ct)`
  text-decoration: none;
  color: inherit;
  max-width: 325px;
  @media (min-width: 1440px) {
  }
`,zz=w.div`
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
`,Pz=w.img`
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
`,Nz=w.h3`
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
`,$z=w.p`
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
`,G1="/assets/News%20Article%202%20Image%20Container%20(3)-BFGlTi7O.png",q1="/assets/Image3-DVPHBget.png",Zw="/assets/News%20Article%202%20Image%20Container%20(4)-BgDGi8hw.png",Y1="/assets/bosch-dishwasher-door-open-DswMTwMP.jpg",F1="/assets/News%20Article%202%20Image%20Container%20(6)-CPLTzZXw.png",Ww="/assets/News%20Article%202%20Image%20Container%20(7)-ml4_mJ5O.png",Bz=[{id:1,image:Ww,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",path:"/tips/refrigerator-maintenance#ap"},{id:2,image:q1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",path:"/tips/oven-repair-signs#ap"},{id:3,image:Zw,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",path:"/tips/laundry-appliance-maintenance#ap"},{id:4,image:Y1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:F1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:G1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],Iz={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te}}},Uz={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:te}},hover:{y:-5,transition:{duration:.3,ease:te}}},_z={hidden:{opacity:0,scale:1.05},visible:{opacity:1,scale:1,transition:{duration:.7,ease:te}},hover:{scale:1.03,transition:{duration:.3,ease:te}}},Gz={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5,ease:te}}},qz=()=>{const{scrollY:e}=vn(),t=KL(),n=ot(e,[0,300],[0,30]);return R.useEffect(()=>{t.start("visible")},[t]),h.jsxs(kz,{id:"app",children:[h.jsx(D.div,{style:{y:n},initial:"hidden",animate:t,variants:Iz,children:h.jsxs(Vz,{children:["News ",h.jsx("span",{children:"Tips"})," "]})}),h.jsx(Hz,{children:Bz.map((a,o)=>h.jsx(Dz,{to:a.path,children:h.jsx(D.div,{initial:"hidden",animate:t,variants:Uz,transition:{delay:o*.1},whileHover:"hover",children:h.jsxs(zz,{children:[h.jsx(D.div,{variants:_z,transition:{delay:o*.1},whileHover:"hover",children:h.jsx(Pz,{src:a.image,alt:a.title})}),h.jsx(D.div,{variants:Gz,transition:{delay:o*.1+.2},children:h.jsxs("div",{children:[h.jsx(Nz,{children:a.title}),h.jsx($z,{children:a.description})]})})]})})},a.id))})]})},Yz=()=>h.jsx(Rz,{id:"app",children:h.jsx(qz,{})}),Fz=w.div`
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
`,Xz=w.p`
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
`,Zz=w.div`
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
`,Wz=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Fv=w.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Kz=w.p`
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
`,Qz=w.p`
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
`,Xv=w.p`
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
`,Jz=w.p`
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
`,eP=w.img`
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
`,Zv=w.div`
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
`,Wv=w.p`
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
`,Kh=w(Ct)`
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
`,Kv=w.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Kh}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,tP=w.div`
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
`,iP=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,nP=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,aP=w.p`
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
`,rP=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,sP=w.button`
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
`,X1=w.button`
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
`,Kw=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${X1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,oP=w(Kw)`
  color: #242424;

  ${X1}:hover & {
    color: white;
  }
`,lP=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
  }
`,cP=()=>{const e=ke({query:"(min-width: 1440px)"}),{scrollY:t}=vn(),n=ot(t,[0,500],[0,100]),a=ot(t,[0,800],[0,-2]),o=ot(t,[0,400],[1,1.05]),l={hidden:{opacity:0,y:100,rotate:-10,scale:.8},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1.2,ease:te,delay:.2}},hover:{y:-15,rotate:2,scale:1.05,transition:{duration:.4,ease:te}}},d={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:te,delay:.1}}},u={hidden:{opacity:0,x:-50,skewX:-10},visible:{opacity:1,x:0,skewX:0,transition:{duration:.8,ease:Rt}}},f={hidden:{opacity:0,rotateY:90,scale:.8},visible:{opacity:1,rotateY:0,scale:1,transition:{duration:1,ease:te,delay:.3}},hover:{rotateY:5,scale:1.02,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}}},m={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.6,ease:te}},hover:{scale:1.1,boxShadow:"0 0 30px rgba(48, 152, 238, 0.4)",transition:{duration:.3,ease:te}},tap:{scale:.95}},g={hidden:{opacity:0,rotateX:45,scale:1.2},visible:{opacity:1,rotateX:0,scale:1,transition:{duration:1.4,ease:te}},hover:{rotateX:5,rotateY:5,scale:1.05,transition:{duration:.5,ease:te}}};return h.jsxs(Fz,{id:"all",children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,children:h.jsx(Xz,{children:"Our Service"})}),h.jsxs(Zz,{children:[h.jsxs(Wz,{children:[h.jsxs(Fv,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsx(Kz,{children:"01."})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,transition:{delay:.2},children:h.jsx(Qz,{children:"Appliance Care & Tune-Ups"})})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,transition:{delay:.3},children:h.jsx(Xv,{children:"Professional Installations"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,transition:{delay:.4},children:h.jsx(Xv,{children:"Fast & Reliable Emergency Repairs"})}),e&&h.jsxs(Zv,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,transition:{delay:.5},children:h.jsx(Wv,{children:"Do you want to know more about our service?"})}),h.jsx(D.div,{variants:m,whileTap:"tap",children:h.jsx(Kh,{to:"/fridge#ap",children:h.jsx(Kv,{children:"Learn more"})})})]})]}),h.jsxs(lP,{children:[h.jsx(D.div,{style:{y:n,rotate:a,scale:o},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:g,whileHover:"hover",children:h.jsx(eP,{src:Fw,alt:"Services Image"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:f,whileHover:"hover",children:h.jsxs(tP,{children:[h.jsxs(iP,{children:[h.jsx(Fv,{children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,children:h.jsx(Jz,{children:"Preventive Care"})})}),h.jsx(nP,{children:h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,transition:{delay:.2},children:h.jsx(aP,{children:"Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps your appliances working smoothly, prevents costly breakdowns, and extends their lifespan. We take the time to inspect and fine-tune your appliances, so they perform at their best and last longer."})})})]}),h.jsxs(rP,{children:[h.jsx(D.div,{variants:m,whileHover:"hover",whileTap:"tap",children:h.jsx(sP,{children:h.jsx(Kw,{children:"Contact Us"})})}),h.jsx(D.div,{variants:m,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:h.jsx(X1,{children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(oP,{children:"Call Us"})})})})]})]})})]}),!e&&h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:l,children:h.jsxs(Zv,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:u,children:h.jsx(Wv,{children:"Do you want to know more about our service?"})}),h.jsx(D.div,{variants:m,whileHover:"hover",whileTap:"tap",children:h.jsx(Kh,{to:"/fridge#ap",children:h.jsx(Kv,{children:"Learn more"})})})]})})]})]})},dP="/assets/Image1-oNBiuIma.png",uP="/assets/Image2-KhSZGRyT.png",fP="/assets/Image4-CFM8TNdX.png",hP="/assets/Image5-CmBoV_wK.png",pP=w.div`
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
`,mP=w(D.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`,gP=w(D.div)`
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
`;const xP=()=>{const e=ke({query:"(max-width: 743px)"}),t=ke({query:"(min-width: 744px) and (max-width: 1023px)"}),n=ke({query:"(min-width: 1024px)"}),a=[{id:1,imageUrl:p1},{id:2,imageUrl:td},{id:3,imageUrl:m1},{id:4,imageUrl:g1},{id:5,imageUrl:x1},{id:6,imageUrl:v1},{id:7,imageUrl:y1},{id:8,imageUrl:w1},{id:9,imageUrl:b1},{id:10,imageUrl:S1},{id:11,imageUrl:C1},{id:12,imageUrl:T1},{id:13,imageUrl:E1},{id:14,imageUrl:j1},{id:15,imageUrl:A1},{id:16,imageUrl:M1},{id:17,imageUrl:L1},{id:18,imageUrl:O1},{id:19,imageUrl:R1},{id:20,imageUrl:qw},{id:21,imageUrl:k1},{id:22,imageUrl:V1},{id:23,imageUrl:H1},{id:24,imageUrl:D1},{id:25,imageUrl:z1},{id:26,imageUrl:P1},{id:27,imageUrl:N1},{id:28,imageUrl:$1},{id:29,imageUrl:B1},{id:30,imageUrl:I1},{id:31,imageUrl:U1}],o=e?2:t?4:5,l=a.length>o;return h.jsxs("div",{children:[h.jsxs(pP,{children:[h.jsx(mP,{}),h.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%",paddingBottom:"20px"},children:a.map(d=>h.jsx(Ft,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:d.imageUrl?h.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"}):h.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"})},d.id))}),h.jsx(Yt,{loop:l,slidesPerView:o,spaceBetween:20,autoplay:{delay:0,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0,reverseDirection:!0},speed:4e3,modules:[oi],className:"mySwiper",style:{width:"100%"},children:a.map(d=>h.jsx(Ft,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"auto",paddingTop:10},children:d.imageUrl?h.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"}):h.jsx(gc,{src:d.imageUrl,alt:`Partner ${d.id}`,loading:"lazy"})},d.id))}),h.jsx(gP,{})]})," "]})},Qv=[{img:dP,title:"Refrigerator",description:"Fixing cooling issues and leaks."},{img:uP,title:"Washing Machine",description:"Restoring heating and control functions."},{img:q1,title:"Oven",description:"Fixing magnetron and door issues."},{img:fP,title:"Microwave",description:"Fixing cooling issues and leaks."},{img:hP,title:"Dishwasher",description:"Repairing leaks and drainage problems."}],vP=()=>{const e=R.useRef(null),t=ke({query:"(max-width: 767px)"}),n=ke({query:"(min-width: 768px) and (max-width: 1439px)"}),a=ke({query:"(min-width: 1440px)"}),o=t?1:n?3:4,l=Qv.length>o,d={hidden:{opacity:0,y:50,rotate:-5,scale:.9},visible:{opacity:1,y:0,rotate:0,scale:1,transition:{duration:1,ease:te,delay:.2}}},u={hidden:{opacity:0,y:100,rotateX:-45,scale:.8,filter:"blur(10px)"},visible:v=>({opacity:1,y:0,rotateX:0,scale:1,filter:"blur(0px)",transition:{duration:1.2,ease:te,delay:v*.15}}),hover:{y:-20,rotateY:10,scale:1.05,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:te}}},f={hidden:{opacity:0,scale:1.3,rotate:-5},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1.5,ease:te}},hover:{scale:1.1,rotate:2,transition:{duration:.6,ease:te}}},m={hidden:{opacity:0,x:-50,y:30},visible:{opacity:1,x:0,y:0,transition:{duration:.8,ease:Rt,delay:.3}},hover:{x:10,transition:{duration:.3}}},g={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.6,ease:te,delay:.5}},hover:{scale:1.15,rotate:5,boxShadow:"0 0 25px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:te}},tap:{scale:.95,rotate:-2}};return h.jsxs(TP,{children:[h.jsxs(EP,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsx(jP,{children:"Our Equipment"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,transition:{delay:.1},children:h.jsxs(AP,{children:[h.jsx("span",{children:"Trusted"})," brands we service"]})})]}),h.jsx(xP,{}),h.jsxs(wP,{children:[h.jsx(D.div,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx(Jv,{onClick:()=>{var v;return(v=e.current)==null?void 0:v.slidePrev()},bg:"#DBDBD8",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),h.jsx(D.div,{variants:g,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:h.jsx(Jv,{onClick:()=>{var v;return(v=e.current)==null?void 0:v.slideNext()},bg:"#3098EE",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]}),h.jsx(yP,{$isTablet:n,children:h.jsx(Yt,{modules:[f1,oi],onSwiper:v=>e.current=v,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,children:Qv.map((v,y)=>h.jsx(Ft,{children:h.jsx(D.div,{custom:y,variants:u,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:"hover",children:h.jsxs(MP,{$isTablet:n,children:[h.jsx(D.div,{variants:f,whileHover:"hover",children:h.jsx(LP,{src:v.img,alt:v.title,$isTablet:n})}),h.jsx(D.div,{variants:m,whileHover:"hover",children:h.jsxs(OP,{children:[h.jsx(RP,{$isTablet:n,children:v.title}),h.jsx(kP,{$isTablet:n,children:v.description})]})})]})})},y))})})]})},yP=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${e=>e.$isTablet?"50%":"auto"};
  }
`,wP=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,bP=Qe`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,SP=Qe`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,CP=Qe`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,Jv=w.button`
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
    animation: ${bP} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&zt`
        background-color: #c8c8c5;
        svg {
          animation: ${SP} 0.4s ease;
        }
      `}

    ${e=>e.bg==="#3098EE"&&zt`
        background-color: #2580d6;
        svg {
          animation: ${CP} 0.4s ease;
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
`,TP=w.div`
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
`,EP=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,jP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,AP=w.p`
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
`,MP=w.div`
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
`,LP=w.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`,OP=w.div`
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
`,RP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"24px":"28px"};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,kP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${e=>e.$isTablet?"14px":"16px"};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,VP="/assets/ProccessSection-CpT7luA8.png",HP=w.div`
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
`,DP=w.h2`
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
`,zP=w.p`
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
`,PP=w.div`
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
`,NP=w.div`
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
`,$P=w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,BP=w.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,IP=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,UP=w.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,_P=[{title:"Call Us",text:"Call us to schedule your repair. We`ll gather details and find a convenient time.",icon:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M6.98356 7.37779C7.56356 8.58581 8.35422 9.71801 9.35553 10.7193C10.3568 11.7206 11.4891 12.5113 12.6971 13.0913C12.801 13.1412 12.8529 13.1661 12.9187 13.1853C13.1523 13.2534 13.4392 13.2045 13.637 13.0628C13.6927 13.0229 13.7403 12.9753 13.8356 12.88C14.1269 12.5887 14.2726 12.443 14.4191 12.3478C14.9715 11.9886 15.6837 11.9886 16.2361 12.3478C16.3825 12.443 16.5282 12.5887 16.8196 12.88L16.9819 13.0424C17.4248 13.4853 17.6462 13.7067 17.7665 13.9446C18.0058 14.4175 18.0058 14.9761 17.7665 15.449C17.6462 15.6869 17.4248 15.9083 16.9819 16.3512L16.8506 16.4825C16.4092 16.9239 16.1886 17.1446 15.8885 17.3131C15.5556 17.5001 15.0385 17.6346 14.6567 17.6334C14.3126 17.6324 14.0774 17.5657 13.607 17.4322C11.0792 16.7147 8.69387 15.361 6.70388 13.371C4.7139 11.381 3.36017 8.99569 2.6427 6.46786C2.50919 5.99749 2.44244 5.7623 2.44141 5.41818C2.44028 5.03633 2.57475 4.51925 2.76176 4.18633C2.9303 3.88631 3.15098 3.66563 3.59233 3.22428L3.72369 3.09292C4.16656 2.65005 4.388 2.42861 4.62581 2.30833C5.09878 2.0691 5.65734 2.0691 6.1303 2.30832C6.36812 2.42861 6.58955 2.65005 7.03242 3.09291L7.19481 3.25531C7.48615 3.54665 7.63182 3.69231 7.72706 3.8388C8.08622 4.3912 8.08622 5.10336 7.72706 5.65576C7.63182 5.80225 7.48615 5.94791 7.19481 6.23925C7.09955 6.33451 7.05192 6.38214 7.01206 6.43782C6.87038 6.63568 6.82146 6.92256 6.88957 7.15619C6.90873 7.22193 6.93367 7.27389 6.98356 7.37779Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"We Respond",text:"Our team answers your questions and arranges a convenient visit.",icon:h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M8.33268 12.5001L5.76997 15.0948C5.4125 15.4568 5.23377 15.6377 5.08014 15.6505C4.94686 15.6616 4.81636 15.608 4.72931 15.5064C4.62898 15.3894 4.62898 15.1351 4.62898 14.6264V13.3264C4.62898 12.87 4.25524 12.5398 3.80369 12.4737V12.4737C2.7108 12.3136 1.8525 11.4553 1.69241 10.3624C1.66602 10.1822 1.66602 9.96718 1.66602 9.53712V5.66675C1.66602 4.26662 1.66602 3.56655 1.9385 3.03177C2.17818 2.56137 2.56063 2.17892 3.03104 1.93923C3.56582 1.66675 4.26588 1.66675 5.66602 1.66675H11.8327C13.2328 1.66675 13.9329 1.66675 14.4677 1.93923C14.9381 2.17892 15.3205 2.56137 15.5602 3.03177C15.8327 3.56655 15.8327 4.26662 15.8327 5.66675V9.16675M15.8327 18.3334L14.019 17.0725C13.7641 16.8952 13.6366 16.8066 13.4978 16.7438C13.3747 16.688 13.2453 16.6474 13.1123 16.6229C12.9625 16.5953 12.8073 16.5953 12.4968 16.5953H10.9993C10.0659 16.5953 9.59922 16.5953 9.2427 16.4137C8.92909 16.2539 8.67413 15.9989 8.51434 15.6853C8.33268 15.3288 8.33268 14.8621 8.33268 13.9287V11.8334C8.33268 10.9 8.33268 10.4333 8.51434 10.0768C8.67413 9.76316 8.92909 9.50819 9.2427 9.3484C9.59922 9.16675 10.0659 9.16675 10.9993 9.16675H15.666C16.5994 9.16675 17.0661 9.16675 17.4227 9.3484C17.7363 9.50819 17.9912 9.76316 18.151 10.0768C18.3327 10.4333 18.3327 10.9 18.3327 11.8334V14.0953C18.3327 14.8719 18.3327 15.2602 18.2058 15.5665C18.0367 15.9748 17.7122 16.2993 17.3038 16.4685C16.9975 16.5953 16.6093 16.5953 15.8327 16.5953V18.3334Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"On-Site Visit",text:"Technician arrives, assesses the issue, and provides an estimate.",icon:h.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M4.16602 8.83325H6.66602M1.66602 5.49992L3.33268 6.33325L4.39155 3.15664C4.61011 2.50096 4.71939 2.17312 4.92209 1.93074C5.10108 1.7167 5.33095 1.55102 5.5906 1.4489C5.88465 1.33325 6.23022 1.33325 6.92137 1.33325H13.0773C13.7685 1.33325 14.1141 1.33325 14.4081 1.4489C14.6678 1.55102 14.8976 1.7167 15.0766 1.93074C15.2793 2.17312 15.3886 2.50096 15.6071 3.15664L16.666 6.33325L18.3327 5.49992M13.3327 8.83325H15.8327M5.66602 6.33325H14.3327C15.7328 6.33325 16.4329 6.33325 16.9677 6.60574C17.4381 6.84542 17.8205 7.22787 18.0602 7.69828C18.3327 8.23305 18.3327 8.93312 18.3327 10.3333V12.5833C18.3327 12.9705 18.3327 13.1641 18.3007 13.3251C18.1691 13.9862 17.6523 14.503 16.9912 14.6346C16.8302 14.6666 16.6366 14.6666 16.2493 14.6666H15.8327C14.9122 14.6666 14.166 13.9204 14.166 12.9999C14.166 12.7698 13.9795 12.5833 13.7493 12.5833H6.24935C6.01923 12.5833 5.83268 12.7698 5.83268 12.9999C5.83268 13.9204 5.08649 14.6666 4.16602 14.6666H3.74935C3.36214 14.6666 3.16853 14.6666 3.00753 14.6346C2.34638 14.503 1.82955 13.9862 1.69804 13.3251C1.66602 13.1641 1.66602 12.9705 1.66602 12.5833V10.3333C1.66602 8.93312 1.66602 8.23305 1.9385 7.69828C2.17818 7.22787 2.56063 6.84542 3.03104 6.60574C3.56582 6.33325 4.26588 6.33325 5.66602 6.33325Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},{title:"Repair & Finish",text:"We fix your appliance on the spot and ensure everything works perfectly.",icon:h.jsx("svg",{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M4.99984 5.00008L8.74984 8.75008M4.99984 5.00008H2.49984L1.6665 2.50008L2.49984 1.66675L4.99984 2.50008V5.00008ZM16.049 2.28426L13.8593 4.47394C13.5293 4.80395 13.3643 4.96896 13.3025 5.15923C13.2481 5.3266 13.2481 5.50689 13.3025 5.67426C13.3643 5.86454 13.5293 6.02954 13.8593 6.35956L14.057 6.55727C14.387 6.88729 14.552 7.05229 14.7423 7.11412C14.9097 7.1685 15.09 7.1685 15.2574 7.11412C15.4476 7.05229 15.6126 6.88729 15.9426 6.55727L17.9909 4.50901C18.2115 5.04582 18.3332 5.63374 18.3332 6.25008C18.3332 8.78139 16.2811 10.8334 13.7498 10.8334C13.4447 10.8334 13.1465 10.8036 12.858 10.7467C12.4528 10.6668 12.2503 10.6268 12.1275 10.6391C11.9969 10.6521 11.9326 10.6717 11.8169 10.7336C11.7081 10.7918 11.599 10.9009 11.3807 11.1192L5.4165 17.0834C4.72615 17.7738 3.60686 17.7738 2.91651 17.0834C2.22615 16.393 2.22615 15.2738 2.91651 14.5834L8.88069 8.61922C9.09898 8.40094 9.20813 8.29179 9.26635 8.18299C9.32825 8.06731 9.34783 8.00297 9.36084 7.87242C9.37307 7.74963 9.33312 7.54707 9.25323 7.14195C9.19633 6.85346 9.1665 6.55526 9.1665 6.25008C9.1665 3.71878 11.2185 1.66675 13.7498 1.66675C14.5878 1.66675 15.3732 1.8916 16.049 2.28426ZM9.99988 12.5L14.5832 17.0833C15.2735 17.7737 16.3928 17.7737 17.0832 17.0833C17.7735 16.393 17.7735 15.2737 17.0832 14.5833L13.3126 10.8128C13.0457 10.7876 12.7854 10.7394 12.5338 10.6704C12.2096 10.5814 11.854 10.646 11.6162 10.8837L9.99988 12.5Z",stroke:"#242424",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}],GP={hidden:{opacity:0,scale:0,rotate:-180},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.8,ease:Rt,delay:.3}},hover:{rotate:360,scale:1.2,transition:{duration:.6,ease:te}}},qP={hidden:{opacity:0,y:50,skewY:5},visible:{opacity:1,y:0,skewY:0,transition:{duration:.8,ease:te}}},YP={hidden:{opacity:0,x:-100,scale:.9},visible:e=>({opacity:1,x:0,scale:1,transition:{duration:.7,delay:e*.2,ease:te}}),hover:{y:-15,scale:1.05,rotateY:10,boxShadow:"0 25px 50px rgba(0,0,0,0.15)",transition:{duration:.4,ease:te}}},ey={hidden:{opacity:0,x:50,filter:"blur(10px)"},visible:{opacity:1,x:0,filter:"blur(0px)",transition:{duration:.9,ease:te,delay:.5}}},FP={hidden:{opacity:0,scale:.5,textShadow:"0 0 0px rgba(48, 152, 238, 0)"},visible:{opacity:1,scale:1,textShadow:["0 0 0px rgba(48, 152, 238, 0)","0 0 20px rgba(48, 152, 238, 0.8)","0 0 10px rgba(48, 152, 238, 0.4)"],transition:{duration:1.5,ease:te,delay:.2}}},XP=()=>h.jsxs(HP,{$bg:VP,children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:qP,children:h.jsx(DP,{children:"Our Process"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:ey,children:h.jsx(zP,{children:"Quick steps to fix appliances reliably"})}),h.jsx(PP,{children:_P.map((e,t)=>h.jsx(D.div,{custom:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:YP,whileHover:"hover",children:h.jsxs(NP,{children:[h.jsx($P,{children:h.jsx(D.div,{variants:GP,whileHover:"hover",children:h.jsx(BP,{children:e.icon})})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:FP,transition:{delay:t*.2+.3},children:h.jsx(IP,{children:e.title})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:ey,transition:{delay:t*.2+.4},children:h.jsx(UP,{children:e.text})})]})},t))})]}),ZP=()=>h.jsxs(WP,{children:[h.jsx(cP,{}),h.jsx(vP,{}),h.jsx(Gw,{}),h.jsx(XP,{}),h.jsx(Ad,{}),h.jsx(_1,{}),h.jsx(jd,{})]}),WP=w.div`
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
`,KP=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  margin-bottom: 100px;
`,QP=w(Ct)`
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
`,JP=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  text-align: center;
  color: var(--black-500);
  margin-bottom: 30px;
`,eN=w.h1`
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
`,tN=w.img`
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
`,iN=w.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`,nN=w.p`
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
`,aN=w.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
  }
`,rN=w.h2`
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
`,sN=w.div`
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
`,oN=w(Ct)`
  text-decoration: none;
  color: inherit;
  width: 46%;
  @media (min-width: 1440px) {
    width: 425px;
  }
`,lN=w.div`
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
`,cN=w.img`
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
`,dN=w.h3`
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
`,uN=w.p`
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
`,fN=[{id:4,image:Y1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",path:"/tips/dishwasher-drainage#ap"},{id:5,image:F1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",path:"/tips/repair-vs-replace#ap"},{id:6,image:G1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",path:"/tips/oem-parts#ap"}],hN=()=>h.jsxs(aN,{children:[h.jsx(rN,{children:h.jsx("span",{children:" Other news and tips"})}),h.jsx(sN,{children:fN.map(e=>h.jsx(oN,{to:e.path,children:h.jsxs(lN,{children:[h.jsx(cN,{src:e.image,alt:e.title}),h.jsxs("div",{children:[h.jsx(dN,{children:e.title}),h.jsx(uN,{children:e.description})]})]})},e.id))})]}),pN=[{id:1,image:Ww,title:"HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS",description:"Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.",data:"22.07.25",content:`A refrigerator is one of the hardest-working appliances in your home. A little regular maintenance can help you avoid expensive breakdowns.

Clean the Condenser Coils
Dust and debris on condenser coils make your fridge work harder and increase energy bills. Clean the coils every 6–12 months with a vacuum or coil brush.

Check the Door Seals
Worn or dirty gaskets let cold air escape. Wipe the seals with warm soapy water and replace them if they are cracked or loose.

Replace the Water Filter
If your refrigerator has a water dispenser or ice maker, replace the filter every 6 months. This keeps the water clean and prevents clogs in the system.

Keep Temperatures Set Correctly
The ideal setting is 37°F for the fridge and 0°F for the freezer. Incorrect settings can cause food spoilage or frost buildup.

Pro Tip: If your fridge still isn't cooling properly, it may need professional service. In Thousand Oaks and Ventura County, AirTexno specializes in Sub-Zero, Thermador, Viking, and GE Monogram refrigerators.`},{id:2,image:q1,title:"TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR",description:"Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.",data:"27.07.25",content:`Your oven and range are the heart of your kitchen. Here are five signs that it's time to call a technician.

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

Pro Tip: AirTexno repairs premium brands like Thermador, Wolf, Viking, and GE Monogram in Thousand Oaks and surrounding areas.`},{id:3,image:Zw,title:"WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW",description:"Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.",data:"30.07.25",content:`Your washer and dryer handle heavy loads every week. With proper care, they'll last for years.

Clean the Washer Filter
Most washers have a drain filter that catches lint, coins, and debris. Clean it every few months to prevent clogs.

Balance the Washer
If your washer shakes or "walks" across the floor, adjust the leveling legs to keep it stable.

Clean the Dryer Lint Trap
Always remove lint after each load. A clogged lint trap reduces efficiency and can become a fire hazard.

Check the Dryer Vent
At least once a year, clean the vent hose and outside exhaust. Poor airflow causes overheating and long drying times.

Pro Tip: If your washer isn't spinning or your dryer isn't heating, call AirTexno. We service Whirlpool, LG, Samsung, Maytag, and more in Ventura County.`},{id:4,image:Y1,title:"DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES",description:"Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.",data:"02.08.25",content:`A dishwasher that won't drain is a common household problem. Here's what to check:

1. Clogged Filter
Food particles often block the filter at the bottom. Remove and rinse it under warm water.

2. Drain Hose Issues
Make sure the hose isn't kinked or clogged. Check for blockages near the sink connection.

3. Air Gap or High Loop
California plumbing code requires a dishwasher air gap or high loop. If it's clogged, water can back up.

4. Broken Drain Pump
If you hear the motor but no water drains, the pump may have failed.

Pro Tip: AirTexno installs and repairs dishwashers in Thousand Oaks, Westlake Village, and Camarillo. We specialize in KitchenAid, Bosch, and GE models.`},{id:5,image:F1,title:"WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE",description:"Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.",data:"08.08.25",content:`Every homeowner faces the repair-or-replace question. Here's how to decide.

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

Pro Tip: Not sure what to do? AirTexno provides honest advice and upfront estimates, so you don't waste money on unnecessary repairs.`},{id:6,image:G1,title:"WHY OEM PARTS MATTER IN APPLIANCE REPAIR",description:"Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.",data:"11.08.25",content:`When repairing appliances, you'll hear the term OEM parts. Here's why they matter.

What Are OEM Parts?
OEM stands for Original Equipment Manufacturer. These are the same parts your appliance was built with.

Why Choose OEM Over Generic?
Reliability: Fits perfectly, works as designed.
Warranty: Protects your manufacturer's warranty.
Longevity: Generic parts often fail sooner.

Examples
Using a genuine Sub-Zero compressor instead of a generic one ensures proper cooling performance.
An OEM KitchenAid dishwasher pump will last longer and run quieter.

Pro Tip: At AirTexno, we only use genuine OEM or manufacturer-approved parts for repairs in Thousand Oaks and Ventura County.`}],mN={hidden:{opacity:0,x:-100},visible:{opacity:1,x:0,transition:{duration:.8,ease:te}},exit:{opacity:0,x:100,transition:{duration:.5,ease:te}}},gN={hidden:{opacity:0,y:-30,rotate:-10},visible:{opacity:1,y:0,rotate:0,transition:{duration:.6,ease:Rt,delay:.1}},hover:{scale:1.05,x:-5,transition:{duration:.2,ease:te}},tap:{scale:.95}},xN={hidden:{opacity:0,y:50,scale:.9,textShadow:"0 0 0px rgba(0,0,0,0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(0,0,0,0)","0 0 30px rgba(0,0,0,0.3)","0 0 10px rgba(0,0,0,0.1)"],transition:{duration:1,ease:Rt,delay:.2}}},vN={hidden:{opacity:0,scale:1.2,rotate:-5,filter:"blur(10px)"},visible:{opacity:1,scale:1,rotate:0,filter:"blur(0px)",transition:{duration:1.2,ease:Rt,delay:.3}}},yN={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:te,delay:.4}}},wN={hidden:{opacity:0,y:20,skewY:2},visible:e=>({opacity:1,y:0,skewY:0,transition:{duration:.6,ease:te,delay:.5+e*.05}})},bN={hidden:{opacity:0,scale:.8,rotateX:-90},visible:{opacity:1,scale:1,rotateX:0,transition:{duration:.7,ease:Rt,delay:.1}}},gr=({articleId:e})=>{const{id:t}=y9(),n=e||parseInt(t||"1"),a=pN.find(f=>f.id===n),{scrollY:o}=vn(),l=ot(o,[0,500],[0,50]),d=ot(o,[0,300],[1,.9]);if(R.useEffect(()=>{const f=window.location.hash;if(f){const m=document.querySelector(f);m&&setTimeout(()=>{m.scrollIntoView({behavior:"smooth"})},500)}},[a]),!a)return h.jsx("div",{children:"Article not found"});const u=a.content.split(`

`);return h.jsx(D.div,{variants:mN,initial:"hidden",animate:"visible",exit:"exit",style:{y:l,opacity:d},children:h.jsxs(KP,{id:"ap",children:[h.jsx(D.div,{variants:gN,whileHover:"hover",whileTap:"tap",children:h.jsx(QP,{to:"/tips",children:"← Back to Tips"})}),h.jsx(D.div,{variants:bN,children:h.jsx(JP,{children:a.data})}),h.jsx(D.div,{variants:xN,children:h.jsx(eN,{children:a.title})}),h.jsx(D.div,{variants:vN,children:h.jsx(tN,{src:a.image,alt:a.title})}),h.jsx(D.div,{variants:yN,children:h.jsx(iN,{children:u.map((f,m)=>h.jsxs(D.div,{custom:m,variants:wN,initial:"hidden",animate:"visible",children:[h.jsx(nN,{children:f}),m<u.length-1&&h.jsx(h.Fragment,{children:h.jsx("br",{})})]},m))})}),h.jsx(D.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:h.jsx(hN,{})})]})})},SN=w.div`
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
`,Qh=w.div`
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
`,th=w.p`
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
`,CN=w.div`
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
`,TN=w.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,EN=w.img`
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
`,jN=w.p`
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
`,AN=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,MN=w(Ct)`
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
`,Z1=w.button`
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
`,Qw=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  transition: color 0.3s ease;

  ${Z1}:hover & {
    color: white;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,LN=w(Qw)`
  color: #242424;

  ${Z1}:hover & {
    color: white;
  }
`,ih=w.div`
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
`,nh=w.div`
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
`,nd=w.div`
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
`,ON=w.img`
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
`;const ty=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  width: 100%;
`,iy=w.div`
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
`,ny=w.div`
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
`,ay=w.p`
  font-family: 'Geist', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.25em;
  color: #242424;
  width: 100%;
  margin: 0;
`,ry=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`,sy=w.button`
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
`,Jh=w.button`
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
`,ep=w.p`
  color: #fff;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
  margin: 0;
`,oy=w(ep)`
  color: #242424;

  ${Jh}:hover & {
    color: #fff;
  }
`;w.div`
  @media (min-width: 768px) and (max-width: 1439px) {
    ${Qh} {
      display: none;
    }
    ${nd} {
      display: flex;
    }
  }

  @media (max-width: 767px), (min-width: 1440px) {
    ${nd} {
      display: none;
    }
    ${Qh} {
      display: flex;
    }
  }
`;const RN=w.div`
  width: 553px;
  height: 396px;
`,kN=w.div`
  width: 668px;
  height: 583px;
`,ah="/assets/fridge-AVDSsy-j.png",ly="/assets/fridge1-CZ9QJ0bU.png",VN="/assets/rating-D_Pf9sUB.svg",HN=()=>{const e=ke({query:"(min-width: 768px) and (max-width: 1439px)"}),t=ke({query:"(min-width: 1440px)"}),n={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:te}}},a={hidden:{opacity:0,scale:1.1,rotate:-2},visible:{opacity:1,scale:1,rotate:0,transition:{duration:1,ease:te,delay:.2}}},o={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:te,delay:.4}}},l={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te,delay:.6}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}},d={hidden:{opacity:0,scale:0,rotate:-180},visible:u=>({opacity:1,scale:1,rotate:0,transition:{duration:.5,delay:.8+u*.1,ease:Rt}})};return t?h.jsxs(nd,{children:[h.jsxs(RN,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:h.jsxs(th,{children:[h.jsx("span",{children:"Refrigeration"})," maintenance ",h.jsx("span",{children:"and "})," setup services"]})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,children:h.jsx(ay,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),h.jsxs(ry,{children:[h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx(sy,{children:h.jsx(ep,{children:"Contact Us"})})}),h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:h.jsx(Jh,{children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(oy,{children:"Call Us"})})})})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,transition:{delay:.8},children:h.jsx(ON,{src:VN,alt:"⭐⭐⭐⭐⭐"})})]}),h.jsx(kN,{children:h.jsx(ty,{children:h.jsxs(iy,{children:[h.jsxs(ny,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:h.jsx(xc,{src:ah,alt:"Why Airtexno Image 1",className:"main-image"})}),h.jsx(ih,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive at your home in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from our own warehouse"}].map((u,f)=>h.jsx(D.div,{custom:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsxs(nh,{children:[h.jsx("span",{style:{fontSize:"20px"},children:u.icon}),h.jsx("p",{children:u.text})]})},f))})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,transition:{delay:.3},children:h.jsx(xc,{src:ly,alt:"Why Airtexno Image 2",className:"secondary-image"})})]})})})]}):e?h.jsxs(nd,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:h.jsxs(th,{children:[h.jsx("span",{children:"Refrigeration"})," maintenance ",h.jsx("span",{children:"and "})," setup services"]})}),h.jsxs(ty,{children:[h.jsxs(iy,{children:[h.jsxs(ny,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:h.jsx(xc,{src:ah,alt:"Why Airtexno Image 1",className:"main-image"})}),h.jsx(ih,{className:"tablet-text-wrapper",children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((u,f)=>h.jsx(D.div,{custom:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsxs(nh,{children:[h.jsx("span",{style:{fontSize:"18px"},children:u.icon}),h.jsx("p",{children:u.text})]})},f))})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,transition:{delay:.3},children:h.jsx(xc,{src:ly,alt:"Why Airtexno Image 2",className:"secondary-image"})})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,children:h.jsx(ay,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),h.jsxs(ry,{children:[h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx(sy,{children:h.jsx(ep,{children:"Contact Us"})})}),h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:h.jsx(Jh,{children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(oy,{children:"Call Us"})})})})]})]})]}):h.jsxs(Qh,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:h.jsxs(th,{children:[h.jsx("span",{children:"Refrigeration"})," maintenance ",h.jsx("span",{children:"and "})," setup services"]})}),h.jsxs(CN,{children:[h.jsxs(TN,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:a,children:h.jsx(EN,{src:ah,alt:"Why Airtexno Image 1"})}),h.jsx(ih,{children:[{icon:"🔧",text:"Free diagnostics on the day of the request"},{icon:"⏱️",text:"The specialist will arrive in 45 minutes"},{icon:"🚚",text:"Delivery of spare parts from warehouse"}].map((u,f)=>h.jsx(D.div,{custom:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:d,children:h.jsxs(nh,{children:[h.jsx("span",{style:{fontSize:"16px"},children:u.icon}),h.jsx("p",{children:u.text})]})},f))})]}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:o,children:h.jsx(jN,{children:"We specialize in expert appliance repairs, bringing your home essentials back to life with care and precision — so your family can get back to what matters."})}),h.jsxs(AN,{children:[h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx(MN,{to:"/contact#ap",children:h.jsx(Qw,{children:"Contact Us"})})}),h.jsx(D.div,{variants:l,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:h.jsx(Z1,{children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(LN,{children:"Call Us"})})})})]})]})]})},DN=Qe`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`,zN=w.div`
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
`,PN=w.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,NN=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${DN} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    gap: 16px;
  }
`,$N=w.div`
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
`,BN=w.div`
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
`,IN=w.div`
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
`,UN=w.div`
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
`,_N=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px;
  }

  @media (min-width: 1440px) {
    max-width: 580px;
  }
`,GN=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    max-width: 600px;
  }
`,qN=w.p`
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
`,YN=w.h2`
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
`,FN=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);
  padding-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`,XN=w.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,ZN=w(Ct)`
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
`,WN=w.button`
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
`,KN=()=>{const e=[{title:"Not Freezing / Not Cooling",description:"If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",price:"from <span>$200</span>"},{title:"Leaking Water",description:"Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",price:"from <span>$225</span>"},{title:"Loud Noises",description:"Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.",price:"from <span>$200</span>"},{title:"Won't Turn On",description:"From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",price:"from <span> $250 </span>"},{title:"Not Cooling Properly",description:"We check thermostats, heating elements, and compressors to restore temperature control.",price:"from <span> $55 </span> "}],t={hidden:{opacity:0,y:50,scale:.9,rotate:-2},visible:{opacity:1,y:0,scale:1,rotate:0,transition:{duration:.8,ease:te}}},n={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.6,ease:te,delay:.2}}},a={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:te}},hover:{scale:1.05,transition:{duration:.2}},tap:{scale:.95}};return h.jsx(IN,{children:h.jsxs(UN,{children:[h.jsxs(_N,{children:[h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,children:h.jsx(qN,{children:"Typical Refrigerator Issues We Fix"})}),h.jsx(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:t,transition:{delay:.1},children:h.jsxs(YN,{children:["Professional Refrigerator Repair ",h.jsx("span",{children:" and Installation Services"})]})})]}),h.jsxs(GN,{children:[h.jsx(QN,{services:e}),h.jsxs(D.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:n,children:[h.jsx(FN,{children:"Having issues with your fridge? Call us today — we'll fix it and restore normal operation fast."}),h.jsxs(XN,{children:[h.jsx(D.div,{variants:a,whileHover:"hover",whileTap:"tap",children:h.jsx(ZN,{to:"/contact#ap",children:"Contact Us"})}),h.jsx(D.div,{variants:a,whileHover:"hover",whileTap:"tap",transition:{delay:.1},children:h.jsx("a",{href:"tel:+18055002705",children:h.jsx(WN,{children:"Call Us"})})})]})]})]})]})})},QN=({services:e})=>{const{scrollY:t}=vn(),n=ot(t,[0,1e3],[0,200]),a=ot(t,[0,800],[0,1]),o=[...e,...e],l={hidden:u=>({opacity:0,y:100,scale:.8,rotateX:-45,filter:"blur(5px)"}),visible:u=>({opacity:1,y:0,scale:1,rotateX:0,filter:"blur(0px)",transition:{duration:.7,delay:u*.1,ease:Rt}}),hover:{scale:1.02,y:-5,rotateY:3,boxShadow:"0 15px 30px rgba(0,0,0,0.15)",transition:{duration:.3,ease:te}}},d={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.5,ease:te,delay:.2}}};return h.jsx(D.div,{style:{y:n,rotate:a},children:h.jsx(zN,{children:h.jsx(PN,{children:h.jsx(NN,{children:o.map((u,f)=>h.jsx(D.div,{custom:f,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:l,whileHover:"hover",children:h.jsx($N,{children:h.jsx(D.div,{variants:d,children:h.jsxs(BN,{children:[h.jsx("h3",{children:u.title}),h.jsx("p",{children:u.description}),h.jsx("p",{dangerouslySetInnerHTML:{__html:u.price}})]})})})},f))})})})})},JN="/assets/1-BfPZdbUH.png",e$="/assets/2-zYtOs5TG.png",t$="/assets/3-SBPgwxa7.png",i$="/assets/4-CWtM_DtU.png",n$="/assets/5-DO04-jdm.png",cy=[{img:JN,title:"Built-In Refrigerators",description:"High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram."},{img:e$,title:"Freezers",description:"From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures."},{img:t$,title:"French Door & Side-by-Side Refrigerators",description:"Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues."},{img:i$,title:"Wine Coolers",description:"Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe."},{img:n$,title:"Two-compressor refrigerators",description:"Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability."}],a$=()=>{const e=R.useRef(null),t=ke({query:"(max-width: 767px)"}),n=ke({query:"(min-width: 768px) and (max-width: 1439px)"}),a=ke({query:"(min-width: 1440px)"}),o=t?1:n?2:a?4:2,l=cy.length>o,{scrollY:d}=vn(),u=ot(d,[0,500],[0,80]),f=ot(d,[0,300],[1,1.05]),m={hidden:{opacity:0,scale:.8,filter:"blur(20px) brightness(0.8)"},visible:{opacity:1,scale:1,filter:"blur(0px) brightness(1)",transition:{duration:1.2,ease:Rt}}},g={hidden:b=>({opacity:0,x:b%2===0?-100:100,y:50,rotate:b%2===0?-5:5,scale:.7}),visible:b=>({opacity:1,x:0,y:0,rotate:0,scale:1,transition:{duration:.9,delay:b*.2,ease:Rt}}),hover:{y:-20,scale:1.05,rotate:0,boxShadow:"0 30px 60px rgba(0,0,0,0.25)",transition:{duration:.4,ease:te}}},v={hidden:{opacity:0,y:30,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.7,ease:te,delay:.3}},hover:{y:-5,transition:{duration:.2,ease:te}}},y={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{duration:.6,ease:te}},hover:{scale:1.15,backgroundColor:"#2a8ad8",boxShadow:"0 0 40px rgba(48, 152, 238, 0.6)",transition:{duration:.3,ease:te}},tap:{scale:.95,transition:{duration:.1}}},S={hidden:{opacity:0,y:50,scale:.8,textShadow:"0 0 0px rgba(255, 255, 255, 0)"},visible:{opacity:1,y:0,scale:1,textShadow:["0 0 0px rgba(255, 255, 255, 0)","0 0 30px rgba(255, 255, 255, 0.8)","0 0 15px rgba(255, 255, 255, 0.4)"],transition:{duration:1.5,ease:te}}};return h.jsxs(d$,{children:[h.jsx(D.div,{style:{y:u,scale:f},initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:S,children:h.jsxs(u$,{children:[h.jsx(f$,{children:"Refrigerator Repair"}),h.jsxs(h$,{children:["We repair ",h.jsx("span",{children:" all types "})," of refrigerators"]})]})}),h.jsxs(r$,{children:[h.jsx(Yt,{modules:[f1,oi],onSwiper:b=>e.current=b,spaceBetween:20,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!0,pauseOnMouseEnter:!0},speed:6e3,loop:l,slidesPerView:o,centeredSlides:t,children:cy.map((b,j)=>h.jsx(Ft,{children:h.jsx(D.div,{custom:j,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:g,whileHover:"hover",children:h.jsxs(p$,{children:[h.jsx(D.div,{variants:m,whileHover:{scale:1.1},transition:{duration:.4},children:h.jsx(m$,{src:b.img,alt:b.title})}),h.jsx(D.div,{variants:v,whileHover:"hover",children:h.jsxs(g$,{children:[h.jsx(x$,{children:b.title}),h.jsx(v$,{children:b.description})]})})]})})},j))}),h.jsxs(c$,{children:[h.jsx(D.div,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},whileHover:"hover",whileTap:"tap",children:h.jsx(dy,{onClick:()=>{var b;return(b=e.current)==null?void 0:b.slidePrev()},bg:"#DBDBD8",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})}),h.jsx(D.div,{variants:y,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},transition:{delay:.1},whileHover:"hover",whileTap:"tap",children:h.jsx(dy,{onClick:()=>{var b;return(b=e.current)==null?void 0:b.slideNext()},bg:"#3098EE",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:h.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})]})]})},r$=w.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
  }
`,s$=Qe`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,o$=Qe`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`,l$=Qe`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`,c$=w.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`,dy=w.button`
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
    animation: ${s$} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${e=>e.bg==="#DBDBD8"&&zt`
        background-color: #c8c8c5;
        svg {
          animation: ${o$} 0.4s ease;
        }
      `}

    ${e=>e.bg==="#3098EE"&&zt`
        background-color: #2580d6;
        svg {
          animation: ${l$} 0.4s ease;
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
`,d$=w.div`
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
`,u$=w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,f$=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,h$=w.p`
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
`,p$=w.div`
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
`,m$=w.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,g$=w.div`
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
`,x$=w.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`,v$=w.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`,y$=()=>h.jsxs(SN,{id:"ap",children:[h.jsx(HN,{}),h.jsx(Yw,{}),h.jsx(KN,{}),h.jsx(a$,{}),h.jsx(Ad,{}),h.jsx(_1,{}),h.jsx(jd,{})]}),_t=({children:e})=>h.jsx("div",{style:{width:"100%",position:"relative"},children:e}),w$=()=>{const e=Si();return h.jsxs(h.Fragment,{children:[" ",h.jsx(Qp,{mode:"wait",children:h.jsxs(z9,{location:e,children:[h.jsx(mt,{path:"/",element:h.jsx(V9,{to:"/home"})}),h.jsxs(mt,{path:"/",element:h.jsx(pR,{}),children:[h.jsx(mt,{index:!0,element:h.jsx(_t,{children:h.jsx(J0,{})})}),h.jsx(mt,{path:"/home",element:h.jsx(_t,{children:h.jsx(J0,{})})}),h.jsx(mt,{path:"/service",element:h.jsx(_t,{children:h.jsx(ZP,{})})}),h.jsx(mt,{path:"/about",element:h.jsx(_t,{children:h.jsx(Mz,{})})}),h.jsxs(mt,{path:"/tips",children:[h.jsx(mt,{index:!0,element:h.jsx(_t,{children:h.jsx(Yz,{})})}),h.jsx(mt,{path:"refrigerator-maintenance",element:h.jsx(_t,{children:h.jsx(gr,{articleId:1})})}),h.jsx(mt,{path:"oven-repair-signs",element:h.jsx(_t,{children:h.jsx(gr,{articleId:2})})}),h.jsx(mt,{path:"laundry-appliance-maintenance",element:h.jsx(_t,{children:h.jsx(gr,{articleId:3})})}),h.jsx(mt,{path:"dishwasher-drainage",element:h.jsx(_t,{children:h.jsx(gr,{articleId:4})})}),h.jsx(mt,{path:"repair-vs-replace",element:h.jsx(_t,{children:h.jsx(gr,{articleId:5})})}),h.jsx(mt,{path:"oem-parts",element:h.jsx(_t,{children:h.jsx(gr,{articleId:6})})})]}),h.jsx(mt,{path:"/contact",element:h.jsx(_t,{children:h.jsx(Oz,{})})}),h.jsx(mt,{path:"/fridge",element:h.jsx(_t,{children:h.jsx(y$,{})})}),h.jsx(mt,{path:"*",element:h.jsx(_t,{children:h.jsx(J0,{})})})]})]},e.pathname)})]})},xe=e=>typeof e=="string",io=()=>{let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n},uy=e=>e==null?"":""+e,b$=(e,t,n)=>{e.forEach(a=>{t[a]&&(n[a]=t[a])})},S$=/###/g,fy=e=>e&&e.indexOf("###")>-1?e.replace(S$,"."):e,hy=e=>!e||xe(e),po=(e,t,n)=>{const a=xe(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(hy(e))return{};const l=fy(a[o]);!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return hy(e)?{}:{obj:e,k:fy(a[o])}},py=(e,t,n)=>{const{obj:a,k:o}=po(e,t,Object);if(a!==void 0||t.length===1){a[o]=n;return}let l=t[t.length-1],d=t.slice(0,t.length-1),u=po(e,d,Object);for(;u.obj===void 0&&d.length;)l=`${d[d.length-1]}.${l}`,d=d.slice(0,d.length-1),u=po(e,d,Object),u!=null&&u.obj&&typeof u.obj[`${u.k}.${l}`]<"u"&&(u.obj=void 0);u.obj[`${u.k}.${l}`]=n},C$=(e,t,n,a)=>{const{obj:o,k:l}=po(e,t,Object);o[l]=o[l]||[],o[l].push(n)},ad=(e,t)=>{const{obj:n,k:a}=po(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},T$=(e,t,n)=>{const a=ad(e,n);return a!==void 0?a:ad(t,n)},Jw=(e,t,n)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?xe(e[a])||e[a]instanceof String||xe(t[a])||t[a]instanceof String?n&&(e[a]=t[a]):Jw(e[a],t[a],n):e[a]=t[a]);return e},xr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var E$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const j$=e=>xe(e)?e.replace(/[&<>"'\/]/g,t=>E$[t]):e;class A${constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const M$=[" ",",","?","!",";"],L$=new A$(20),O$=(e,t,n)=>{t=t||"",n=n||"";const a=M$.filter(d=>t.indexOf(d)<0&&n.indexOf(d)<0);if(a.length===0)return!0;const o=L$.getRegExp(`(${a.map(d=>d==="?"?"\\?":d).join("|")})`);let l=!o.test(e);if(!l){const d=e.indexOf(n);d>0&&!o.test(e.substring(0,d))&&(l=!0)}return l},tp=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(n);let o=e;for(let l=0;l<a.length;){if(!o||typeof o!="object")return;let d,u="";for(let f=l;f<a.length;++f)if(f!==l&&(u+=n),u+=a[f],d=o[u],d!==void 0){if(["string","number","boolean"].indexOf(typeof d)>-1&&f<a.length-1)continue;l+=f-l+1;break}o=d}return o},rd=e=>e==null?void 0:e.replace("_","-"),R$={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var n,a;(a=(n=console==null?void 0:console[e])==null?void 0:n.apply)==null||a.call(n,console,t)}};class sd{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||R$,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,a,o){return o&&!this.debug?null:(xe(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new sd(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new sd(this.logger,t)}}var Ui=new sd;class Md{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(d=>{let[u,f]=d;for(let m=0;m<f;m++)u(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(d=>{let[u,f]=d;for(let m=0;m<f;m++)u.apply(u,[t,...a])})}}class my extends Md{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,a){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,d=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let u;t.indexOf(".")>-1?u=t.split("."):(u=[t,n],a&&(Array.isArray(a)?u.push(...a):xe(a)&&l?u.push(...a.split(l)):u.push(a)));const f=ad(this.data,u);return!f&&!n&&!a&&t.indexOf(".")>-1&&(t=u[0],n=u[1],a=u.slice(2).join(".")),f||!d||!xe(a)?f:tp((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[n],a,l)}addResource(t,n,a,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const d=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let u=[t,n];a&&(u=u.concat(d?a.split(d):a)),t.indexOf(".")>-1&&(u=t.split("."),o=n,n=u[1]),this.addNamespaces(n),py(this.data,u,o),l.silent||this.emit("added",t,n,a,o)}addResources(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in a)(xe(a[l])||Array.isArray(a[l]))&&this.addResource(t,n,l,a[l],{silent:!0});o.silent||this.emit("added",t,n,a)}addResourceBundle(t,n,a,o,l){let d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},u=[t,n];t.indexOf(".")>-1&&(u=t.split("."),o=a,a=n,n=u[1]),this.addNamespaces(n);let f=ad(this.data,u)||{};d.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?Jw(f,a,l):f={...f,...a},py(this.data,u,f),d.silent||this.emit("added",t,n,a)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var e8={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,a,o){return e.forEach(l=>{var d;t=((d=this.processors[l])==null?void 0:d.process(t,n,a,o))??t}),t}};const gy={},xy=e=>!xe(e)&&typeof e!="boolean"&&typeof e!="number";class od extends Md{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),b$(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ui.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,n);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let l=n.ns||this.options.defaultNS||[];const d=a&&t.indexOf(a)>-1,u=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!O$(t,a,o);if(d&&!u){const f=t.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:t,namespaces:xe(l)?[l]:l};const m=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:xe(l)?[l]:l}}translate(t,n,a){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,l=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:d,namespaces:u}=this.extractFromKey(t[t.length-1],n),f=u[u.length-1],m=n.lng||this.language,g=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const K=n.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${K}${d}`,usedKey:d,exactUsedKey:d,usedLng:m,usedNS:f,usedParams:this.getUsedParamsDetails(n)}:`${f}${K}${d}`}return o?{res:d,usedKey:d,exactUsedKey:d,usedLng:m,usedNS:f,usedParams:this.getUsedParamsDetails(n)}:d}const v=this.resolve(t,n);let y=v==null?void 0:v.res;const S=(v==null?void 0:v.usedKey)||d,b=(v==null?void 0:v.exactUsedKey)||d,j=["[object Number]","[object Function]","[object RegExp]"],L=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,E=n.count!==void 0&&!xe(n.count),T=od.hasDefaultValue(n),V=E?this.pluralResolver.getSuffix(m,n.count,n):"",O=n.ordinal&&E?this.pluralResolver.getSuffix(m,n.count,{ordinal:!1}):"",N=E&&!n.ordinal&&n.count===0,P=N&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${V}`]||n[`defaultValue${O}`]||n.defaultValue;let _=y;M&&!y&&T&&(_=P);const Y=xy(_),F=Object.prototype.toString.apply(_);if(M&&_&&Y&&j.indexOf(F)<0&&!(xe(L)&&Array.isArray(_))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const K=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,_,{...n,ns:u}):`key '${d} (${this.language})' returned an object instead of string.`;return o?(v.res=K,v.usedParams=this.getUsedParamsDetails(n),v):K}if(l){const K=Array.isArray(_),ne=K?[]:{},le=K?b:S;for(const ue in _)if(Object.prototype.hasOwnProperty.call(_,ue)){const oe=`${le}${l}${ue}`;T&&!y?ne[ue]=this.translate(oe,{...n,defaultValue:xy(P)?P[ue]:void 0,joinArrays:!1,ns:u}):ne[ue]=this.translate(oe,{...n,joinArrays:!1,ns:u}),ne[ue]===oe&&(ne[ue]=_[ue])}y=ne}}else if(M&&xe(L)&&Array.isArray(y))y=y.join(L),y&&(y=this.extendTranslation(y,t,n,a));else{let K=!1,ne=!1;!this.isValidLookup(y)&&T&&(K=!0,y=P),this.isValidLookup(y)||(ne=!0,y=d);const ue=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ne?void 0:y,oe=T&&P!==y&&this.options.updateMissing;if(ne||K||oe){if(this.logger.log(oe?"updateKey":"missingKey",m,f,d,oe?P:y),l){const ie=this.resolve(d,{...n,keySeparator:!1});ie&&ie.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let B=[];const W=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&W&&W[0])for(let ie=0;ie<W.length;ie++)B.push(W[ie]);else this.options.saveMissingTo==="all"?B=this.languageUtils.toResolveHierarchy(n.lng||this.language):B.push(n.lng||this.language);const J=(ie,k,X)=>{var re;const ae=T&&X!==y?X:ue;this.options.missingKeyHandler?this.options.missingKeyHandler(ie,f,k,ae,oe,n):(re=this.backendConnector)!=null&&re.saveMissing&&this.backendConnector.saveMissing(ie,f,k,ae,oe,n),this.emit("missingKey",ie,f,k,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&E?B.forEach(ie=>{const k=this.pluralResolver.getSuffixes(ie,n);N&&n[`defaultValue${this.options.pluralSeparator}zero`]&&k.indexOf(`${this.options.pluralSeparator}zero`)<0&&k.push(`${this.options.pluralSeparator}zero`),k.forEach(X=>{J([ie],d+X,n[`defaultValue${X}`]||P)})}):J(B,d,P))}y=this.extendTranslation(y,t,n,v,a),ne&&y===d&&this.options.appendNamespaceToMissingKey&&(y=`${f}:${d}`),(ne||K)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${d}`:d,K?y:void 0))}return o?(v.res=y,v.usedParams=this.getUsedParamsDetails(n),v):y}extendTranslation(t,n,a,o,l){var m,g;var d=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const v=xe(t)&&(((g=a==null?void 0:a.interpolation)==null?void 0:g.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(v){const b=t.match(this.interpolator.nestingRegexp);y=b&&b.length}let S=a.replace&&!xe(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(S={...this.options.interpolation.defaultVariables,...S}),t=this.interpolator.interpolate(t,S,a.lng||this.language||o.usedLng,a),v){const b=t.match(this.interpolator.nestingRegexp),j=b&&b.length;y<j&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var b=arguments.length,j=new Array(b),L=0;L<b;L++)j[L]=arguments[L];return(l==null?void 0:l[0])===j[0]&&!a.context?(d.logger.warn(`It seems you are nesting recursively key: ${j[0]} in key: ${n[0]}`),null):d.translate(...j,n)},a)),a.interpolation&&this.interpolator.reset()}const u=a.postProcess||this.options.postProcess,f=xe(u)?[u]:u;return t!=null&&(f!=null&&f.length)&&a.applyPostProcessor!==!1&&(t=e8.handle(f,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,l,d,u;return xe(t)&&(t=[t]),t.forEach(f=>{if(this.isValidLookup(a))return;const m=this.extractFromKey(f,n),g=m.key;o=g;let v=m.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const y=n.count!==void 0&&!xe(n.count),S=y&&!n.ordinal&&n.count===0,b=n.context!==void 0&&(xe(n.context)||typeof n.context=="number")&&n.context!=="",j=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);v.forEach(L=>{var M,E;this.isValidLookup(a)||(u=L,!gy[`${j[0]}-${L}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((E=this.utils)!=null&&E.hasLoadedNamespace(u))&&(gy[`${j[0]}-${L}`]=!0,this.logger.warn(`key "${o}" for languages "${j.join(", ")}" won't get resolved as namespace "${u}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),j.forEach(T=>{var N;if(this.isValidLookup(a))return;d=T;const V=[g];if((N=this.i18nFormat)!=null&&N.addLookupKeys)this.i18nFormat.addLookupKeys(V,g,T,L,n);else{let P;y&&(P=this.pluralResolver.getSuffix(T,n.count,n));const _=`${this.options.pluralSeparator}zero`,Y=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(V.push(g+P),n.ordinal&&P.indexOf(Y)===0&&V.push(g+P.replace(Y,this.options.pluralSeparator)),S&&V.push(g+_)),b){const F=`${g}${this.options.contextSeparator}${n.context}`;V.push(F),y&&(V.push(F+P),n.ordinal&&P.indexOf(Y)===0&&V.push(F+P.replace(Y,this.options.pluralSeparator)),S&&V.push(F+_))}}let O;for(;O=V.pop();)this.isValidLookup(a)||(l=O,a=this.getResource(T,L,O,n))}))})}),{res:a,usedKey:o,exactUsedKey:l,usedLng:d,usedNS:u}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,a){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,n,a,o):this.resourceStore.getResource(t,n,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!xe(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const l of n)delete o[l]}return o}static hasDefaultValue(t){const n="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&n===a.substring(0,n.length)&&t[a]!==void 0)return!0;return!1}}class vy{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ui.create("languageUtils")}getScriptPartFromCode(t){if(t=rd(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=rd(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(xe(t)&&t.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(t)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(a=>{if(n)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),xe(t)&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let a=t[n];return a||(a=t[this.getScriptPartFromCode(n)]),a||(a=t[this.formatLanguageCode(n)]),a||(a=t[this.getLanguagePartFromCode(n)]),a||(a=t.default),a||[]}toResolveHierarchy(t,n){const a=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],l=d=>{d&&(this.isSupportedCode(d)?o.push(d):this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))};return xe(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):xe(t)&&l(this.formatLanguageCode(t)),a.forEach(d=>{o.indexOf(d)<0&&l(this.formatLanguageCode(d))}),o}}const yy={zero:0,one:1,two:2,few:3,many:4,other:5},wy={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class k${constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=Ui.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,n){this.rules[t]=n}clearCache(){this.pluralRulesCache={}}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=rd(t==="dev"?"en":t),o=n.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:a,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let d;try{d=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),wy;if(!t.match(/-|_/))return wy;const f=this.languageUtils.getLanguagePartFromCode(t);d=this.getRule(f,n)}return this.pluralRulesCache[l]=d,d}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,l)=>yy[o]-yy[l]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",n,a))}}const by=function(e,t,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=T$(e,t,n);return!l&&o&&xe(n)&&(l=tp(e,n,a),l===void 0&&(l=tp(t,n,a))),l},rh=e=>e.replace(/\$/g,"$$$$");class V${constructor(){var n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ui.create("interpolator"),this.options=t,this.format=((n=t==null?void 0:t.interpolation)==null?void 0:n.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:l,prefixEscaped:d,suffix:u,suffixEscaped:f,formatSeparator:m,unescapeSuffix:g,unescapePrefix:v,nestingPrefix:y,nestingPrefixEscaped:S,nestingSuffix:b,nestingSuffixEscaped:j,nestingOptionsSeparator:L,maxReplaces:M,alwaysFormat:E}=t.interpolation;this.escape=n!==void 0?n:j$,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?xr(l):d||"{{",this.suffix=u?xr(u):f||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?xr(y):S||xr("$t("),this.nestingSuffix=b?xr(b):j||xr(")"),this.nestingOptionsSeparator=L||",",this.maxReplaces=M||1e3,this.alwaysFormat=E!==void 0?E:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,a)=>(n==null?void 0:n.source)===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,a,o){var S;let l,d,u;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=b=>{if(b.indexOf(this.formatSeparator)<0){const E=by(n,f,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,a,{...o,...n,interpolationkey:b}):E}const j=b.split(this.formatSeparator),L=j.shift().trim(),M=j.join(this.formatSeparator).trim();return this.format(by(n,f,L,this.options.keySeparator,this.options.ignoreJSONStructure),M,a,{...o,...n,interpolationkey:L})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,v=((S=o==null?void 0:o.interpolation)==null?void 0:S.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>rh(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?rh(this.escape(b)):rh(b)}].forEach(b=>{for(u=0;l=b.regex.exec(t);){const j=l[1].trim();if(d=m(j),d===void 0)if(typeof g=="function"){const M=g(t,l,o);d=xe(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,j))d="";else if(v){d=l[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${t}`),d="";else!xe(d)&&!this.useRawValueToEscape&&(d=uy(d));const L=b.safeValue(d);if(t=t.replace(l[0],L),v?(b.regex.lastIndex+=d.length,b.regex.lastIndex-=l[0].length):b.regex.lastIndex=0,u++,u>=this.maxReplaces)break}}),t}nest(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,d;const u=(f,m)=>{const g=this.nestingOptionsSeparator;if(f.indexOf(g)<0)return f;const v=f.split(new RegExp(`${g}[ ]*{`));let y=`{${v[1]}`;f=v[0],y=this.interpolate(y,d);const S=y.match(/'/g),b=y.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!b||b.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),m&&(d={...m,...d})}catch(j){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,j),`${f}${g}${y}`}return d.defaultValue&&d.defaultValue.indexOf(this.prefix)>-1&&delete d.defaultValue,f};for(;o=this.nestingRegexp.exec(t);){let f=[];d={...a},d=d.replace&&!xe(d.replace)?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(v=>v.trim());o[1]=g.shift(),f=g,m=!0}if(l=n(u.call(this,o[1].trim(),d),d),l&&o[0]===t&&!xe(l))return l;xe(l)||(l=uy(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=f.reduce((g,v)=>this.format(g,v,a.lng,{...a,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const H$=e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(d=>{if(d){const[u,...f]=d.split(":"),m=f.join(":").trim().replace(/^'+|'+$/g,""),g=u.trim();n[g]||(n[g]=m),m==="false"&&(n[g]=!1),m==="true"&&(n[g]=!0),isNaN(m)||(n[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:n}},vr=e=>{const t={};return(n,a,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const d=a+JSON.stringify(l);let u=t[d];return u||(u=e(rd(a),o),t[d]=u),u(n)}};class D${constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ui.create("formatter"),this.options=t,this.formats={number:vr((n,a)=>{const o=new Intl.NumberFormat(n,{...a});return l=>o.format(l)}),currency:vr((n,a)=>{const o=new Intl.NumberFormat(n,{...a,style:"currency"});return l=>o.format(l)}),datetime:vr((n,a)=>{const o=new Intl.DateTimeFormat(n,{...a});return l=>o.format(l)}),relativetime:vr((n,a)=>{const o=new Intl.RelativeTimeFormat(n,{...a});return l=>o.format(l,a.range||"day")}),list:vr((n,a)=>{const o=new Intl.ListFormat(n,{...a});return l=>o.format(l)})},this.init(t)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=vr(n)}format(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=n.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(u=>u.indexOf(")")>-1)){const u=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,u)].join(this.formatSeparator)}return l.reduce((u,f)=>{var v;const{formatName:m,formatOptions:g}=H$(f);if(this.formats[m]){let y=u;try{const S=((v=o==null?void 0:o.formatParams)==null?void 0:v[o.interpolationkey])||{},b=S.locale||S.lng||o.locale||o.lng||a;y=this.formats[m](u,b,{...g,...o,...S})}catch(S){this.logger.warn(S)}return y}else this.logger.warn(`there was no format function for ${m}`);return u},t)}}const z$=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class P$ extends Md{constructor(t,n,a){var l,d;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Ui.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(d=(l=this.backend)==null?void 0:l.init)==null||d.call(l,a,o.backend,o)}queueLoad(t,n,a,o){const l={},d={},u={},f={};return t.forEach(m=>{let g=!0;n.forEach(v=>{const y=`${m}|${v}`;!a.reload&&this.store.hasResourceBundle(m,v)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?d[y]===void 0&&(d[y]=!0):(this.state[y]=1,g=!1,d[y]===void 0&&(d[y]=!0),l[y]===void 0&&(l[y]=!0),f[v]===void 0&&(f[v]=!0)))}),g||(u[m]=!0)}),(Object.keys(l).length||Object.keys(d).length)&&this.queue.push({pending:d,pendingCount:Object.keys(d).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(d),toLoadLanguages:Object.keys(u),toLoadNamespaces:Object.keys(f)}}loaded(t,n,a){const o=t.split("|"),l=o[0],d=o[1];n&&this.emit("failedLoading",l,d,n),!n&&a&&this.store.addResourceBundle(l,d,a,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2,n&&a&&(this.state[t]=0);const u={};this.queue.forEach(f=>{C$(f.loaded,[l],d),z$(f,t),n&&f.errors.push(n),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(m=>{u[m]||(u[m]={});const g=f.loaded[m];g.length&&g.forEach(v=>{u[m][v]===void 0&&(u[m][v]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",u),this.queue=this.queue.filter(f=>!f.done)}read(t,n,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,d=arguments.length>5?arguments[5]:void 0;if(!t.length)return d(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:a,tried:o,wait:l,callback:d});return}this.readingCalls++;const u=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,a,o+1,l*2,d)},l);return}d(m,g)},f=this.backend[a].bind(this.backend);if(f.length===2){try{const m=f(t,n);m&&typeof m.then=="function"?m.then(g=>u(null,g)).catch(u):u(null,m)}catch(m){u(m)}return}return f(t,n,u)}prepareLoading(t,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();xe(t)&&(t=this.languageUtils.toResolveHierarchy(t)),xe(n)&&(n=[n]);const l=this.queueLoad(t,n,a,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(d=>{this.loadOne(d)})}load(t,n,a){this.prepareLoading(t,n,{},a)}reload(t,n,a){this.prepareLoading(t,n,{reload:!0},a)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],l=a[1];this.read(o,l,"read",void 0,void 0,(d,u)=>{d&&this.logger.warn(`${n}loading namespace ${l} for language ${o} failed`,d),!d&&u&&this.logger.log(`${n}loaded namespace ${l} for language ${o}`,u),this.loaded(t,d,u)})}saveMissing(t,n,a,o,l){var f,m,g,v,y;let d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(f=this.services)==null?void 0:f.utils)!=null&&m.hasLoadedNamespace&&!((v=(g=this.services)==null?void 0:g.utils)!=null&&v.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((y=this.backend)!=null&&y.create){const S={...d,isUpdate:l},b=this.backend.create.bind(this.backend);if(b.length<6)try{let j;b.length===5?j=b(t,n,a,o,S):j=b(t,n,a,o),j&&typeof j.then=="function"?j.then(L=>u(null,L)).catch(u):u(null,j)}catch(j){u(j)}else b(t,n,a,o,u,S)}!t||!t[0]||this.store.addResource(t[0],n,a,o)}}}const Sy=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),xe(e[1])&&(t.defaultValue=e[1]),xe(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const n=e[3]||e[2];Object.keys(n).forEach(a=>{t[a]=n[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Cy=e=>{var t,n;return xe(e.ns)&&(e.ns=[e.ns]),xe(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),xe(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((n=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:n.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},vc=()=>{},N$=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})};class jo extends Md{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Cy(t),this.services={},this.logger=Ui,this.modules={external:[]},N$(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(a=n,n={}),n.defaultNS==null&&n.ns&&(xe(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=Sy();this.options={...o,...this.options,...Cy(n)},this.options.interpolation={...o.interpolation,...this.options.interpolation},n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Ui.init(l(this.modules.logger),this.options):Ui.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=D$;const v=new vy(this.options);this.store=new my(this.options.resources,this.options);const y=this.services;y.logger=Ui,y.resourceStore=this.store,y.languageUtils=v,y.pluralResolver=new k$(v,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new V$(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new P$(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(S){for(var b=arguments.length,j=new Array(b>1?b-1:0),L=1;L<b;L++)j[L-1]=arguments[L];t.emit(S,...j)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new od(this.services,this.options),this.translator.on("*",function(S){for(var b=arguments.length,j=new Array(b>1?b-1:0),L=1;L<b;L++)j[L-1]=arguments[L];t.emit(S,...j)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,a||(a=vc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const f=io(),m=()=>{const g=(v,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(y),a(v,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),f}loadResources(t){var l,d;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc;const o=xe(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const u=[],f=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(v=>{v!=="cimode"&&u.indexOf(v)<0&&u.push(v)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>f(g)),(d=(l=this.options.preload)==null?void 0:l.forEach)==null||d.call(l,m=>f(m)),this.services.backendConnector.load(u,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(m)})}else a(null)}reloadResources(t,n,a){const o=io();return typeof t=="function"&&(a=t,t=void 0),typeof n=="function"&&(a=n,n=void 0),t||(t=this.languages),n||(n=this.options.ns),a||(a=vc),this.services.backendConnector.reload(t,n,l=>{o.resolve(),a(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&e8.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,n){var a=this;this.isLanguageChangingTo=t;const o=io();this.emit("languageChanging",t);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},d=(f,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),n&&n(f,function(){return a.t(...arguments)})},u=f=>{var g,v;!t&&!f&&this.services.languageDetector&&(f=[]);const m=xe(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(v=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||v.call(g,m)),this.loadResources(m,y=>{d(y,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?u(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(u):this.services.languageDetector.detect(u):u(t),o}getFixedT(t,n,a){var o=this;const l=function(d,u){let f;if(typeof u!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),v=2;v<m;v++)g[v-2]=arguments[v];f=o.options.overloadTranslationOptionHandler([d,u].concat(g))}else f={...u};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||a||l.keyPrefix);const y=o.options.keySeparator||".";let S;return f.keyPrefix&&Array.isArray(d)?S=d.map(b=>`${f.keyPrefix}${y}${b}`):S=f.keyPrefix?`${f.keyPrefix}${y}${d}`:d,o.t(S,f)};return xe(t)?l.lng=t:l.lngs=t,l.ns=n,l.keyPrefix=a,l}t(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...n)}exists(){var o;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...n)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const d=(u,f)=>{const m=this.services.backendConnector.state[`${u}|${f}`];return m===-1||m===0||m===2};if(n.precheck){const u=n.precheck(this,d);if(u!==void 0)return u}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||d(a,t)&&(!o||d(l,t)))}loadNamespaces(t,n){const a=io();return this.options.ns?(xe(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(t,n){const a=io();xe(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(d=>o.indexOf(d)<0&&this.services.languageUtils.isSupportedCode(d));return l.length?(this.options.preload=o.concat(l),this.loadResources(d=>{a.resolve(),n&&n(d)}),a):(n&&n(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((l=this.services)==null?void 0:l.languageUtils)||new vy(Sy());return n.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new jo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vc;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new jo(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(u=>{l[u]=this[u]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},a){const u=Object.keys(this.store.data).reduce((f,m)=>(f[m]={...this.store.data[m]},Object.keys(f[m]).reduce((g,v)=>(g[v]={...f[m][v]},g),{})),{});l.store=new my(u,o),l.services.resourceStore=l.store}return l.translator=new od(l.services,o),l.translator.on("*",function(u){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];l.emit(u,...m)}),l.init(o,n),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const kt=jo.createInstance();kt.createInstance=jo.createInstance;kt.createInstance;kt.dir;kt.init;kt.loadResources;kt.reloadResources;kt.use;kt.changeLanguage;kt.getFixedT;kt.t;kt.exists;kt.setDefaultNamespace;kt.hasLoadedNamespace;kt.loadNamespaces;kt.loadLanguages;function ip(e){"@babel/helpers - typeof";return ip=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ip(e)}function t8(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":ip(XMLHttpRequest))==="object"}function $$(e){return!!e&&typeof e.then=="function"}function B$(e){return $$(e)?e:Promise.resolve(e)}const I$="modulepreload",U$=function(e){return"/"+e},Ty={},_$=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let d=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));o=d(n.map(m=>{if(m=U$(m),m in Ty)return;Ty[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":I$,g||(y.as="script"),y.crossOrigin="",y.href=m,f&&y.setAttribute("nonce",f),document.head.appendChild(y),g)return new Promise((S,b)=>{y.addEventListener("load",S),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return o.then(d=>{for(const u of d||[])u.status==="rejected"&&l(u.reason);return t().catch(l)})};function Ey(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function jy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ey(Object(n),!0).forEach(function(a){G$(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function G$(e,t,n){return(t=q$(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q$(e){var t=Y$(e,"string");return Ma(t)=="symbol"?t:t+""}function Y$(e,t){if(Ma(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(Ma(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ma(e){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ma(e)}var Kn=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Kn=global.fetch:typeof window<"u"&&window.fetch&&(Kn=window.fetch);var Ao;t8()&&(typeof global<"u"&&global.XMLHttpRequest?Ao=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Ao=window.XMLHttpRequest));var ld;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?ld=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(ld=window.ActiveXObject));typeof Kn!="function"&&(Kn=void 0);if(!Kn&&!Ao&&!ld)try{_$(()=>import("./browser-ponyfill-D5NDb8Da.js").then(e=>e.b),[]).then(function(e){Kn=e.default}).catch(function(){})}catch{}var np=function(t,n){if(n&&Ma(n)==="object"){var a="";for(var o in n)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(n[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},Ay=function(t,n,a,o){var l=function(f){if(!f.ok)return a(f.statusText||"Error",{status:f.status});f.text().then(function(m){a(null,{status:f.status,data:m})}).catch(a)};if(o){var d=o(t,n);if(d instanceof Promise){d.then(l).catch(a);return}}typeof fetch=="function"?fetch(t,n).then(l).catch(a):Kn(t,n).then(l).catch(a)},My=!1,F$=function(t,n,a,o){t.queryStringParams&&(n=np(n,t.queryStringParams));var l=jy({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(l["Content-Type"]="application/json");var d=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,u=jy({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:l},My?{}:d),f=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Ay(n,u,o,f)}catch(m){if(!d||Object.keys(d).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(d).forEach(function(g){delete u[g]}),Ay(n,u,o,f),My=!0}catch(g){o(g)}}},X$=function(t,n,a,o){a&&Ma(a)==="object"&&(a=np("",a).slice(1)),t.queryStringParams&&(n=np(n,t.queryStringParams));try{var l=Ao?new Ao:new ld("MSXML2.XMLHTTP.3.0");l.open(a?"POST":"GET",n,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,a&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var d=t.customHeaders;if(d=typeof d=="function"?d():d,d)for(var u in d)l.setRequestHeader(u,d[u]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(a)}catch(f){console&&console.log(f)}},Z$=function(t,n,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},Kn&&n.indexOf("file:")!==0)return F$(t,n,a,o);if(t8()||typeof ActiveXObject=="function")return X$(t,n,a,o);o(new Error("No fetch and no xhr implementation found!"))};function Br(e){"@babel/helpers - typeof";return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Br(e)}function Ly(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function sh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ly(Object(n),!0).forEach(function(a){i8(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ly(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function W$(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K$(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,n8(a.key),a)}}function Q$(e,t,n){return t&&K$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i8(e,t,n){return(t=n8(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n8(e){var t=J$(e,"string");return Br(t)=="symbol"?t:t+""}function J$(e,t){if(Br(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(Br(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eB=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(n){return JSON.parse(n)},stringify:JSON.stringify,parsePayload:function(n,a,o){return i8({},a,o||"")},parseLoadPayload:function(n,a){},request:Z$,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},a8=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};W$(this,e),this.services=t,this.options=n,this.allOptions=a,this.type="backend",this.init(t,n,a)}return Q$(e,[{key:"init",value:function(n){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=n,this.options=sh(sh(sh({},eB()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var d=setInterval(function(){return a.reload()},this.options.reloadInterval);Br(d)==="object"&&typeof d.unref=="function"&&d.unref()}}},{key:"readMulti",value:function(n,a,o){this._readAny(n,n,a,a,o)}},{key:"read",value:function(n,a,o){this._readAny([n],n,[a],a,o)}},{key:"_readAny",value:function(n,a,o,l,d){var u=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(n,o)),f=B$(f),f.then(function(m){if(!m)return d(null,{});var g=u.services.interpolator.interpolate(m,{lng:n.join("+"),ns:o.join("+")});u.loadUrl(g,d,a,l)})}},{key:"loadUrl",value:function(n,a,o,l){var d=this,u=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(u,f);this.options.request(this.options,n,m,function(g,v){if(v&&(v.status>=500&&v.status<600||!v.status))return a("failed loading "+n+"; status code: "+v.status,!0);if(v&&v.status>=400&&v.status<500)return a("failed loading "+n+"; status code: "+v.status,!1);if(!v&&g&&g.message){var y=g.message.toLowerCase(),S=["failed","fetch","network","load"].find(function(L){return y.indexOf(L)>-1});if(S)return a("failed loading "+n+": "+g.message,!0)}if(g)return a(g,!1);var b,j;try{typeof v.data=="string"?b=d.options.parse(v.data,o,l):b=v.data}catch{j="failed parsing "+n+" to json"}if(j)return a(j,!1);a(null,b)})}},{key:"create",value:function(n,a,o,l,d){var u=this;if(this.options.addPath){typeof n=="string"&&(n=[n]);var f=this.options.parsePayload(a,o,l),m=0,g=[],v=[];n.forEach(function(y){var S=u.options.addPath;typeof u.options.addPath=="function"&&(S=u.options.addPath(y,a));var b=u.services.interpolator.interpolate(S,{lng:y,ns:a});u.options.request(u.options,b,f,function(j,L){m+=1,g.push(j),v.push(L),m===n.length&&typeof d=="function"&&d(g,v)})})}}},{key:"reload",value:function(){var n=this,a=this.services,o=a.backendConnector,l=a.languageUtils,d=a.logger,u=o.language;if(!(u&&u.toLowerCase()==="cimode")){var f=[],m=function(v){var y=l.toResolveHierarchy(v);y.forEach(function(S){f.indexOf(S)<0&&f.push(S)})};m(u),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),f.forEach(function(g){n.allOptions.ns.forEach(function(v){o.read(g,v,"read",null,null,function(y,S){y&&d.warn("loading namespace ".concat(v," for language ").concat(g," failed"),y),!y&&S&&d.log("loaded namespace ".concat(v," for language ").concat(g),S),o.loaded("".concat(g,"|").concat(v),y,S)})})})}}}])}();a8.type="backend";const{slice:tB,forEach:iB}=[];function nB(e){return iB.call(tB.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}function aB(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(e))}const Oy=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,rB=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(a.maxAge>0){const d=a.maxAge-0;if(Number.isNaN(d))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(d)}`}if(a.domain){if(!Oy.test(a.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${a.domain}`}if(a.path){if(!Oy.test(a.path))throw new TypeError("option path is invalid");l+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(l+="; Partitioned"),l},Ry={create(e,t,n,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+n*60*1e3)),a&&(o.domain=a),document.cookie=rB(e,t,o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let a=0;a<n.length;a++){let o=n[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var sB={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Ry.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:a,cookieDomain:o,cookieOptions:l}=t;n&&typeof document<"u"&&Ry.create(n,e,a,o,l)}},oB={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const d=o.substring(1).split("&");for(let u=0;u<d.length;u++){const f=d[u].indexOf("=");f>0&&d[u].substring(0,f)===t&&(n=d[u].substring(f+1))}}return n}},lB={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:n}=e,a;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const d=l.substring(1);if(t){const u=d.split("&");for(let f=0;f<u.length;f++){const m=u[f].indexOf("=");m>0&&u[f].substring(0,m)===t&&(a=u[f].substring(m+1))}}if(a)return a;if(!a&&n>-1){const u=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(u)?(o=u[typeof n=="number"?n:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let yr=null;const ky=()=>{if(yr!==null)return yr;try{if(yr=typeof window<"u"&&window.localStorage!==null,!yr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{yr=!1}return yr};var cB={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&ky())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&ky()&&window.localStorage.setItem(n,e)}};let wr=null;const Vy=()=>{if(wr!==null)return wr;try{if(wr=typeof window<"u"&&window.sessionStorage!==null,!wr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{wr=!1}return wr};var dB={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Vy())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Vy()&&window.sessionStorage.setItem(n,e)}},uB={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:a,language:o}=navigator;if(n)for(let l=0;l<n.length;l++)t.push(n[l]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},fB={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(n=a.getAttribute("lang")),n}},hB={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(o=n[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},pB={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,a=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[n]}};let r8=!1;try{document.cookie,r8=!0}catch{}const s8=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];r8||s8.splice(1,1);const mB=()=>({order:s8,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class o8{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=nB(n,this.options||{},mB()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(sB),this.addDetector(oB),this.addDetector(cB),this.addDetector(dB),this.addDetector(uB),this.addDetector(fB),this.addDetector(hB),this.addDetector(pB),this.addDetector(lB)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(n=n.concat(o))}}),n=n.filter(a=>a!=null&&!aB(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}o8.type="languageDetector";kt.use(a8).use(o8).use(vO).init({supportedLngs:["en","ru","es","uk"],fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"},detection:{order:["localStorage","navigator"],caches:["localStorage"]}});const gB=R.createContext(void 0),xB=({children:e})=>{const{i18n:t}=d1(),n=a=>{t.changeLanguage(a).then(()=>{window.location.reload()})};return h.jsx(gB.Provider,{value:{language:t.language,setLanguage:n},children:e})};Ib.createRoot(document.getElementById("root")).render(h.jsxs(je.StrictMode,{children:[h.jsx(sC,{styles:fC}),h.jsx(rS,{basename:"/",children:h.jsx(xB,{children:h.jsx(w$,{})})})]}));export{vB as c,cd as g};
