(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function F0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pd={exports:{}},fo={},md={exports:{}},Ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function fy(){if(Km)return Ut;Km=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(D,le,Te){this.props=D,this.context=le,this.refs=A,this.updater=Te||_}S.prototype.isReactComponent={},S.prototype.setState=function(D,le){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,le,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(D,le,Te){this.props=D,this.context=le,this.refs=A,this.updater=Te||_}var F=P.prototype=new y;F.constructor=P,E(F,S.prototype),F.isPureReactComponent=!0;var T=Array.isArray,L=Object.prototype.hasOwnProperty,I={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function w(D,le,Te){var Ke,Ge={},we=null,re=null;if(le!=null)for(Ke in le.ref!==void 0&&(re=le.ref),le.key!==void 0&&(we=""+le.key),le)L.call(le,Ke)&&!U.hasOwnProperty(Ke)&&(Ge[Ke]=le[Ke]);var ae=arguments.length-2;if(ae===1)Ge.children=Te;else if(1<ae){for(var Le=Array(ae),et=0;et<ae;et++)Le[et]=arguments[et+2];Ge.children=Le}if(D&&D.defaultProps)for(Ke in ae=D.defaultProps,ae)Ge[Ke]===void 0&&(Ge[Ke]=ae[Ke]);return{$$typeof:s,type:D,key:we,ref:re,props:Ge,_owner:I.current}}function N(D,le){return{$$typeof:s,type:D.type,key:le,ref:D.ref,props:D.props,_owner:D._owner}}function O(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function G(D){var le={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Te){return le[Te]})}var H=/\/+/g;function J(D,le){return typeof D=="object"&&D!==null&&D.key!=null?G(""+D.key):le.toString(36)}function B(D,le,Te,Ke,Ge){var we=typeof D;(we==="undefined"||we==="boolean")&&(D=null);var re=!1;if(D===null)re=!0;else switch(we){case"string":case"number":re=!0;break;case"object":switch(D.$$typeof){case s:case e:re=!0}}if(re)return re=D,Ge=Ge(re),D=Ke===""?"."+J(re,0):Ke,T(Ge)?(Te="",D!=null&&(Te=D.replace(H,"$&/")+"/"),B(Ge,le,Te,"",function(et){return et})):Ge!=null&&(O(Ge)&&(Ge=N(Ge,Te+(!Ge.key||re&&re.key===Ge.key?"":(""+Ge.key).replace(H,"$&/")+"/")+D)),le.push(Ge)),1;if(re=0,Ke=Ke===""?".":Ke+":",T(D))for(var ae=0;ae<D.length;ae++){we=D[ae];var Le=Ke+J(we,ae);re+=B(we,le,Te,Le,Ge)}else if(Le=g(D),typeof Le=="function")for(D=Le.call(D),ae=0;!(we=D.next()).done;)we=we.value,Le=Ke+J(we,ae++),re+=B(we,le,Te,Le,Ge);else if(we==="object")throw le=String(D),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return re}function q(D,le,Te){if(D==null)return D;var Ke=[],Ge=0;return B(D,Ke,"","",function(we){return le.call(Te,we,Ge++)}),Ke}function pe(D){if(D._status===-1){var le=D._result;le=le(),le.then(function(Te){(D._status===0||D._status===-1)&&(D._status=1,D._result=Te)},function(Te){(D._status===0||D._status===-1)&&(D._status=2,D._result=Te)}),D._status===-1&&(D._status=0,D._result=le)}if(D._status===1)return D._result.default;throw D._result}var oe={current:null},j={transition:null},V={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:j,ReactCurrentOwner:I};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ut.Children={map:q,forEach:function(D,le,Te){q(D,function(){le.apply(this,arguments)},Te)},count:function(D){var le=0;return q(D,function(){le++}),le},toArray:function(D){return q(D,function(le){return le})||[]},only:function(D){if(!O(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ut.Component=S,Ut.Fragment=t,Ut.Profiler=a,Ut.PureComponent=P,Ut.StrictMode=r,Ut.Suspense=h,Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,Ut.act=te,Ut.cloneElement=function(D,le,Te){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ke=E({},D.props),Ge=D.key,we=D.ref,re=D._owner;if(le!=null){if(le.ref!==void 0&&(we=le.ref,re=I.current),le.key!==void 0&&(Ge=""+le.key),D.type&&D.type.defaultProps)var ae=D.type.defaultProps;for(Le in le)L.call(le,Le)&&!U.hasOwnProperty(Le)&&(Ke[Le]=le[Le]===void 0&&ae!==void 0?ae[Le]:le[Le])}var Le=arguments.length-2;if(Le===1)Ke.children=Te;else if(1<Le){ae=Array(Le);for(var et=0;et<Le;et++)ae[et]=arguments[et+2];Ke.children=ae}return{$$typeof:s,type:D.type,key:Ge,ref:we,props:Ke,_owner:re}},Ut.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Ut.createElement=w,Ut.createFactory=function(D){var le=w.bind(null,D);return le.type=D,le},Ut.createRef=function(){return{current:null}},Ut.forwardRef=function(D){return{$$typeof:d,render:D}},Ut.isValidElement=O,Ut.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:pe}},Ut.memo=function(D,le){return{$$typeof:p,type:D,compare:le===void 0?null:le}},Ut.startTransition=function(D){var le=j.transition;j.transition={};try{D()}finally{j.transition=le}},Ut.unstable_act=te,Ut.useCallback=function(D,le){return oe.current.useCallback(D,le)},Ut.useContext=function(D){return oe.current.useContext(D)},Ut.useDebugValue=function(){},Ut.useDeferredValue=function(D){return oe.current.useDeferredValue(D)},Ut.useEffect=function(D,le){return oe.current.useEffect(D,le)},Ut.useId=function(){return oe.current.useId()},Ut.useImperativeHandle=function(D,le,Te){return oe.current.useImperativeHandle(D,le,Te)},Ut.useInsertionEffect=function(D,le){return oe.current.useInsertionEffect(D,le)},Ut.useLayoutEffect=function(D,le){return oe.current.useLayoutEffect(D,le)},Ut.useMemo=function(D,le){return oe.current.useMemo(D,le)},Ut.useReducer=function(D,le,Te){return oe.current.useReducer(D,le,Te)},Ut.useRef=function(D){return oe.current.useRef(D)},Ut.useState=function(D){return oe.current.useState(D)},Ut.useSyncExternalStore=function(D,le,Te){return oe.current.useSyncExternalStore(D,le,Te)},Ut.useTransition=function(){return oe.current.useTransition()},Ut.version="18.3.1",Ut}var Zm;function nh(){return Zm||(Zm=1,md.exports=fy()),md.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function hy(){if(Jm)return fo;Jm=1;var s=nh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,p){var v,x={},g=null,_=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(_=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:d,key:g,ref:_,props:x,_owner:a.current}}return fo.Fragment=t,fo.jsx=c,fo.jsxs=c,fo}var Qm;function py(){return Qm||(Qm=1,pd.exports=hy()),pd.exports}var b=py(),Fe=nh();const O0=F0(Fe);var Ol={},gd={exports:{}},ui={},vd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function my(){return eg||(eg=1,(function(s){function e(j,V){var te=j.length;j.push(V);e:for(;0<te;){var D=te-1>>>1,le=j[D];if(0<a(le,V))j[D]=V,j[te]=le,te=D;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var V=j[0],te=j.pop();if(te!==V){j[0]=te;e:for(var D=0,le=j.length,Te=le>>>1;D<Te;){var Ke=2*(D+1)-1,Ge=j[Ke],we=Ke+1,re=j[we];if(0>a(Ge,te))we<le&&0>a(re,Ge)?(j[D]=re,j[we]=te,D=we):(j[D]=Ge,j[Ke]=te,D=Ke);else if(we<le&&0>a(re,te))j[D]=re,j[we]=te,D=we;else break e}}return V}function a(j,V){var te=j.sortIndex-V.sortIndex;return te!==0?te:j.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],p=[],v=1,x=null,g=3,_=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var V=t(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=j)r(p),V.sortIndex=V.expirationTime,e(h,V);else break;V=t(p)}}function T(j){if(A=!1,F(j),!E)if(t(h)!==null)E=!0,pe(L);else{var V=t(p);V!==null&&oe(T,V.startTime-j)}}function L(j,V){E=!1,A&&(A=!1,y(w),w=-1),_=!0;var te=g;try{for(F(V),x=t(h);x!==null&&(!(x.expirationTime>V)||j&&!G());){var D=x.callback;if(typeof D=="function"){x.callback=null,g=x.priorityLevel;var le=D(x.expirationTime<=V);V=s.unstable_now(),typeof le=="function"?x.callback=le:x===t(h)&&r(h),F(V)}else r(h);x=t(h)}if(x!==null)var Te=!0;else{var Ke=t(p);Ke!==null&&oe(T,Ke.startTime-V),Te=!1}return Te}finally{x=null,g=te,_=!1}}var I=!1,U=null,w=-1,N=5,O=-1;function G(){return!(s.unstable_now()-O<N)}function H(){if(U!==null){var j=s.unstable_now();O=j;var V=!0;try{V=U(!0,j)}finally{V?J():(I=!1,U=null)}}else I=!1}var J;if(typeof P=="function")J=function(){P(H)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,q=B.port2;B.port1.onmessage=H,J=function(){q.postMessage(null)}}else J=function(){S(H,0)};function pe(j){U=j,I||(I=!0,J())}function oe(j,V){w=S(function(){j(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){E||_||(E=!0,pe(L))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(j){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var te=g;g=V;try{return j()}finally{g=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,V){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var te=g;g=j;try{return V()}finally{g=te}},s.unstable_scheduleCallback=function(j,V,te){var D=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?D+te:D):te=D,j){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=te+le,j={id:v++,callback:V,priorityLevel:j,startTime:te,expirationTime:le,sortIndex:-1},te>D?(j.sortIndex=te,e(p,j),t(h)===null&&j===t(p)&&(A?(y(w),w=-1):A=!0,oe(T,te-D))):(j.sortIndex=le,e(h,j),E||_||(E=!0,pe(L))),j},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(j){var V=g;return function(){var te=g;g=V;try{return j.apply(this,arguments)}finally{g=te}}}})(_d)),_d}var tg;function gy(){return tg||(tg=1,vd.exports=my()),vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function vy(){if(ng)return ui;ng=1;var s=nh(),e=gy();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function _(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||_(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,o,u,f,m,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=C}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,P);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,P);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,P);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,o,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),G=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),j=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,D;function le(n){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Te=!1;function Ke(n,i){if(!n||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(_e){var u=_e}Reflect.construct(n,[],i)}else{try{i.call()}catch(_e){u=_e}n.call(i.prototype)}else{try{throw Error()}catch(_e){u=_e}n()}}catch(_e){if(_e&&u&&typeof _e.stack=="string"){for(var f=_e.stack.split(`
`),m=u.stack.split(`
`),C=f.length-1,z=m.length-1;1<=C&&0<=z&&f[C]!==m[z];)z--;for(;1<=C&&0<=z;C--,z--)if(f[C]!==m[z]){if(C!==1||z!==1)do if(C--,z--,0>z||f[C]!==m[z]){var X=`
`+f[C].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=C&&0<=z);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?le(n):""}function Ge(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ke(n.type,!1),n;case 11:return n=Ke(n.type.render,!1),n;case 1:return n=Ke(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case I:return"Portal";case N:return"Profiler";case w:return"StrictMode";case J:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case pe:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(C){u=""+C,m.call(this,C)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function He(n){n._valueTracker||(n._valueTracker=et(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pt(n,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Lt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Et(n,i){st(n,i);var o=ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(n,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(n,i.type,ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function De(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ct(n,i,o){(i!=="number"||Xt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var an=Array.isArray;function wt(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ae(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function $t(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(an(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ae(o)}}function Zt(n,i){var o=ae(i.value),u=ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Rt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?k(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function xe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function Se(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=xe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var ze=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Be=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ve=null,Ne=null,W=null;function ie(n){if(n=Ka(n)){if(typeof ve!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Jo(i),ve(n.stateNode,n.type,i))}}function ye(n){Ne?W?W.push(n):W=[n]:Ne=n}function Q(){if(Ne){var n=Ne,i=W;if(W=Ne=null,ie(n),i)for(n=0;n<i.length;n++)ie(i[n])}}function he(n,i){return n(i)}function de(){}var be=!1;function Me(n,i,o){if(be)return n(i,o);be=!0;try{return he(n,i,o)}finally{be=!1,(Ne!==null||W!==null)&&(de(),Q())}}function it(n,i){var o=n.stateNode;if(o===null)return null;var u=Jo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var dt=!1;if(d)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){dt=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{dt=!1}function Ft(n,i,o,u,f,m,C,z,X){var _e=Array.prototype.slice.call(arguments,3);try{i.apply(o,_e)}catch(Pe){this.onError(Pe)}}var yt=!1,Ht=null,Bt=!1,At=null,cn={onError:function(n){yt=!0,Ht=n}};function vn(n,i,o,u,f,m,C,z,X){yt=!1,Ht=null,Ft.apply(cn,arguments)}function On(n,i,o,u,f,m,C,z,X){if(vn.apply(this,arguments),yt){if(yt){var _e=Ht;yt=!1,Ht=null}else throw Error(t(198));Bt||(Bt=!0,At=_e)}}function un(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function lr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Rr(n){if(un(n)!==n)throw Error(t(188))}function Fs(n){var i=n.alternate;if(!i){if(i=un(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Rr(f),n;if(m===u)return Rr(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=m;else{for(var C=!1,z=f.child;z;){if(z===o){C=!0,o=f,u=m;break}if(z===u){C=!0,u=f,o=m;break}z=z.sibling}if(!C){for(z=m.child;z;){if(z===o){C=!0,o=m,u=f;break}if(z===u){C=!0,u=m,o=f;break}z=z.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function $i(n){return n=Fs(n),n!==null?ii(n):null}function ii(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ii(n);if(i!==null)return i;n=n.sibling}return null}var Ii=e.unstable_scheduleCallback,Kn=e.unstable_cancelCallback,Os=e.unstable_shouldYield,ks=e.unstable_requestPaint,Qt=e.unstable_now,Bs=e.unstable_getCurrentPriorityLevel,Pr=e.unstable_ImmediatePriority,Lr=e.unstable_UserBlockingPriority,R=e.unstable_NormalPriority,$=e.unstable_LowPriority,me=e.unstable_IdlePriority,ce=null,se=null;function We(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:at,Xe=Math.log,tt=Math.LN2;function at(n){return n>>>=0,n===0?32:31-(Xe(n)/tt|0)|0}var Ee=64,je=4194304;function Ae(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function rt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,m=n.pingedLanes,C=o&268435455;if(C!==0){var z=C&~f;z!==0?u=Ae(z):(m&=C,m!==0&&(u=Ae(m)))}else C=o&~f,C!==0?u=Ae(C):m!==0&&(u=Ae(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Ve(i),f=1<<o,u|=n[o],i&=~f;return u}function bt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ct(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var C=31-Ve(m),z=1<<C,X=f[C];X===-1?((z&o)===0||(z&u)!==0)&&(f[C]=bt(z,i)):X<=i&&(n.expiredLanes|=z),m&=~z}}function ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function dn(){var n=Ee;return Ee<<=1,(Ee&4194240)===0&&(Ee=64),n}function Ye(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Jt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=o}function Pt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Ve(o),m=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~m}}function wn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Ve(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var ht=0;function xn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Gn,Nt,jt,hi,Ot,ri=!1,Zn=[],Ni=null,Ir=null,Nr=null,Da=new Map,Ua=new Map,Dr=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(n,i){switch(n){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(i.pointerId)}}function Fa(n,i,o,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ka(i),i!==null&&Nt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Uv(n,i,o,u,f){switch(i){case"focusin":return Ni=Fa(Ni,n,i,o,u,f),!0;case"dragenter":return Ir=Fa(Ir,n,i,o,u,f),!0;case"mouseover":return Nr=Fa(Nr,n,i,o,u,f),!0;case"pointerover":var m=f.pointerId;return Da.set(m,Fa(Da.get(m)||null,n,i,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Ua.set(m,Fa(Ua.get(m)||null,n,i,o,u,f)),!0}return!1}function Dh(n){var i=ls(n.target);if(i!==null){var o=un(i);if(o!==null){if(i=o.tag,i===13){if(i=lr(o),i!==null){n.blockedOn=i,Ot(n.priority,function(){jt(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ko(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Be=u,o.target.dispatchEvent(u),Be=null}else return i=Ka(o),i!==null&&Nt(i),n.blockedOn=o,!1;i.shift()}return!0}function Uh(n,i,o){ko(n)&&o.delete(i)}function Fv(){ri=!1,Ni!==null&&ko(Ni)&&(Ni=null),Ir!==null&&ko(Ir)&&(Ir=null),Nr!==null&&ko(Nr)&&(Nr=null),Da.forEach(Uh),Ua.forEach(Uh)}function Oa(n,i){n.blockedOn===i&&(n.blockedOn=null,ri||(ri=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fv)))}function ka(n){function i(f){return Oa(f,n)}if(0<Zn.length){Oa(Zn[0],n);for(var o=1;o<Zn.length;o++){var u=Zn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ni!==null&&Oa(Ni,n),Ir!==null&&Oa(Ir,n),Nr!==null&&Oa(Nr,n),Da.forEach(i),Ua.forEach(i),o=0;o<Dr.length;o++)u=Dr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Dr.length&&(o=Dr[0],o.blockedOn===null);)Dh(o),o.blockedOn===null&&Dr.shift()}var zs=T.ReactCurrentBatchConfig,Bo=!0;function Ov(n,i,o,u){var f=ht,m=zs.transition;zs.transition=null;try{ht=1,zc(n,i,o,u)}finally{ht=f,zs.transition=m}}function kv(n,i,o,u){var f=ht,m=zs.transition;zs.transition=null;try{ht=4,zc(n,i,o,u)}finally{ht=f,zs.transition=m}}function zc(n,i,o,u){if(Bo){var f=Gc(n,i,o,u);if(f===null)ru(n,i,u,zo,o),Nh(n,u);else if(Uv(f,n,i,o,u))u.stopPropagation();else if(Nh(n,u),i&4&&-1<Dv.indexOf(n)){for(;f!==null;){var m=Ka(f);if(m!==null&&Gn(m),m=Gc(n,i,o,u),m===null&&ru(n,i,u,zo,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else ru(n,i,u,null,o)}}var zo=null;function Gc(n,i,o,u){if(zo=null,n=Qe(u),n=ls(n),n!==null)if(i=un(n),i===null)n=null;else if(o=i.tag,o===13){if(n=lr(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return zo=n,null}function Fh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bs()){case Pr:return 1;case Lr:return 4;case R:case $:return 16;case me:return 536870912;default:return 16}default:return 16}}var Ur=null,Vc=null,Go=null;function Oh(){if(Go)return Go;var n,i=Vc,o=i.length,u,f="value"in Ur?Ur.value:Ur.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var C=o-n;for(u=1;u<=C&&i[o-u]===f[m-u];u++);return Go=f.slice(n,1<u?1-u:void 0)}function Vo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function kh(){return!1}function pi(n){function i(o,u,f,m,C){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=C,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(o=n[z],this[z]=o?o(m):m[z]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ho:kh,this.isPropagationStopped=kh,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),i}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=pi(Gs),Ba=te({},Gs,{view:0,detail:0}),Bv=pi(Ba),Wc,Xc,za,Wo=te({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==za&&(za&&n.type==="mousemove"?(Wc=n.screenX-za.screenX,Xc=n.screenY-za.screenY):Xc=Wc=0,za=n),Wc)},movementY:function(n){return"movementY"in n?n.movementY:Xc}}),Bh=pi(Wo),zv=te({},Wo,{dataTransfer:0}),Gv=pi(zv),Vv=te({},Ba,{relatedTarget:0}),jc=pi(Vv),Hv=te({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=pi(Hv),Xv=te({},Gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jv=pi(Xv),Yv=te({},Gs,{data:0}),zh=pi(Yv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kv[n])?!!i[n]:!1}function Yc(){return Zv}var Jv=te({},Ba,{key:function(n){if(n.key){var i=$v[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?Vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qv=pi(Jv),e_=te({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=pi(e_),t_=te({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),n_=pi(t_),i_=te({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),r_=pi(i_),s_=te({},Wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),a_=pi(s_),o_=[9,13,27,32],$c=d&&"CompositionEvent"in window,Ga=null;d&&"documentMode"in document&&(Ga=document.documentMode);var l_=d&&"TextEvent"in window&&!Ga,Vh=d&&(!$c||Ga&&8<Ga&&11>=Ga),Hh=" ",Wh=!1;function Xh(n,i){switch(n){case"keyup":return o_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function c_(n,i){switch(n){case"compositionend":return jh(i);case"keypress":return i.which!==32?null:(Wh=!0,Hh);case"textInput":return n=i.data,n===Hh&&Wh?null:n;default:return null}}function u_(n,i){if(Vs)return n==="compositionend"||!$c&&Xh(n,i)?(n=Oh(),Go=Vc=Ur=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vh&&i.locale!=="ko"?null:i.data;default:return null}}var d_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!d_[n.type]:i==="textarea"}function $h(n,i,o,u){ye(u),i=qo(i,"onChange"),0<i.length&&(o=new Hc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Va=null,Ha=null;function f_(n){fp(n,0)}function Xo(n){var i=Ys(n);if(_t(i))return n}function h_(n,i){if(n==="change")return i}var qh=!1;if(d){var qc;if(d){var Kc="oninput"in document;if(!Kc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Kc=typeof Kh.oninput=="function"}qc=Kc}else qc=!1;qh=qc&&(!document.documentMode||9<document.documentMode)}function Zh(){Va&&(Va.detachEvent("onpropertychange",Jh),Ha=Va=null)}function Jh(n){if(n.propertyName==="value"&&Xo(Ha)){var i=[];$h(i,Ha,n,Qe(n)),Me(f_,i)}}function p_(n,i,o){n==="focusin"?(Zh(),Va=i,Ha=o,Va.attachEvent("onpropertychange",Jh)):n==="focusout"&&Zh()}function m_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xo(Ha)}function g_(n,i){if(n==="click")return Xo(i)}function v_(n,i){if(n==="input"||n==="change")return Xo(i)}function __(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Di=typeof Object.is=="function"?Object.is:__;function Wa(n,i){if(Di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!Di(n[f],i[f]))return!1}return!0}function Qh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,i){var o=Qh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qh(o)}}function tp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?tp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function np(){for(var n=window,i=Xt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Xt(n.document)}return i}function Zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function y_(n){var i=np(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&tp(o.ownerDocument.documentElement,o)){if(u!==null&&Zc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!n.extend&&m>u&&(f=u,u=m,m=f),f=ep(o,m);var C=ep(o,u);f&&C&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var x_=d&&"documentMode"in document&&11>=document.documentMode,Hs=null,Jc=null,Xa=null,Qc=!1;function ip(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Qc||Hs==null||Hs!==Xt(u)||(u=Hs,"selectionStart"in u&&Zc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xa&&Wa(Xa,u)||(Xa=u,u=qo(Jc,"onSelect"),0<u.length&&(i=new Hc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Hs)))}function jo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ws={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},eu={},rp={};d&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Yo(n){if(eu[n])return eu[n];if(!Ws[n])return n;var i=Ws[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in rp)return eu[n]=i[o];return n}var sp=Yo("animationend"),ap=Yo("animationiteration"),op=Yo("animationstart"),lp=Yo("transitionend"),cp=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,i){cp.set(n,i),l(i,[n])}for(var tu=0;tu<up.length;tu++){var nu=up[tu],S_=nu.toLowerCase(),M_=nu[0].toUpperCase()+nu.slice(1);Fr(S_,"on"+M_)}Fr(sp,"onAnimationEnd"),Fr(ap,"onAnimationIteration"),Fr(op,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(lp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function dp(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,On(u,i,void 0,n),n.currentTarget=null}function fp(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var C=u.length-1;0<=C;C--){var z=u[C],X=z.instance,_e=z.currentTarget;if(z=z.listener,X!==m&&f.isPropagationStopped())break e;dp(f,z,_e),m=X}else for(C=0;C<u.length;C++){if(z=u[C],X=z.instance,_e=z.currentTarget,z=z.listener,X!==m&&f.isPropagationStopped())break e;dp(f,z,_e),m=X}}}if(Bt)throw n=At,Bt=!1,At=null,n}function nn(n,i){var o=i[uu];o===void 0&&(o=i[uu]=new Set);var u=n+"__bubble";o.has(u)||(hp(i,n,2,!1),o.add(u))}function iu(n,i,o){var u=0;i&&(u|=4),hp(o,n,u,i)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Ya(n){if(!n[$o]){n[$o]=!0,r.forEach(function(o){o!=="selectionchange"&&(E_.has(o)||iu(o,!1,n),iu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[$o]||(i[$o]=!0,iu("selectionchange",!1,i))}}function hp(n,i,o,u){switch(Fh(i)){case 1:var f=Ov;break;case 4:f=kv;break;default:f=zc}o=f.bind(null,i,o,n),f=void 0,!dt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function ru(n,i,o,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var z=u.stateNode.containerInfo;if(z===f||z.nodeType===8&&z.parentNode===f)break;if(C===4)for(C=u.return;C!==null;){var X=C.tag;if((X===3||X===4)&&(X=C.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;C=C.return}for(;z!==null;){if(C=ls(z),C===null)return;if(X=C.tag,X===5||X===6){u=m=C;continue e}z=z.parentNode}}u=u.return}Me(function(){var _e=m,Pe=Qe(o),Ie=[];e:{var Ce=cp.get(n);if(Ce!==void 0){var Ze=Hc,ot=n;switch(n){case"keypress":if(Vo(o)===0)break e;case"keydown":case"keyup":Ze=Qv;break;case"focusin":ot="focus",Ze=jc;break;case"focusout":ot="blur",Ze=jc;break;case"beforeblur":case"afterblur":Ze=jc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=n_;break;case sp:case ap:case op:Ze=Wv;break;case lp:Ze=r_;break;case"scroll":Ze=Bv;break;case"wheel":Ze=a_;break;case"copy":case"cut":case"paste":Ze=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=Gh}var lt=(i&4)!==0,_n=!lt&&n==="scroll",ue=lt?Ce!==null?Ce+"Capture":null:Ce;lt=[];for(var Z=_e,fe;Z!==null;){fe=Z;var Ue=fe.stateNode;if(fe.tag===5&&Ue!==null&&(fe=Ue,ue!==null&&(Ue=it(Z,ue),Ue!=null&&lt.push($a(Z,Ue,fe)))),_n)break;Z=Z.return}0<lt.length&&(Ce=new Ze(Ce,ot,null,o,Pe),Ie.push({event:Ce,listeners:lt}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Ze=n==="mouseout"||n==="pointerout",Ce&&o!==Be&&(ot=o.relatedTarget||o.fromElement)&&(ls(ot)||ot[cr]))break e;if((Ze||Ce)&&(Ce=Pe.window===Pe?Pe:(Ce=Pe.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Ze?(ot=o.relatedTarget||o.toElement,Ze=_e,ot=ot?ls(ot):null,ot!==null&&(_n=un(ot),ot!==_n||ot.tag!==5&&ot.tag!==6)&&(ot=null)):(Ze=null,ot=_e),Ze!==ot)){if(lt=Bh,Ue="onMouseLeave",ue="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Gh,Ue="onPointerLeave",ue="onPointerEnter",Z="pointer"),_n=Ze==null?Ce:Ys(Ze),fe=ot==null?Ce:Ys(ot),Ce=new lt(Ue,Z+"leave",Ze,o,Pe),Ce.target=_n,Ce.relatedTarget=fe,Ue=null,ls(Pe)===_e&&(lt=new lt(ue,Z+"enter",ot,o,Pe),lt.target=fe,lt.relatedTarget=_n,Ue=lt),_n=Ue,Ze&&ot)t:{for(lt=Ze,ue=ot,Z=0,fe=lt;fe;fe=Xs(fe))Z++;for(fe=0,Ue=ue;Ue;Ue=Xs(Ue))fe++;for(;0<Z-fe;)lt=Xs(lt),Z--;for(;0<fe-Z;)ue=Xs(ue),fe--;for(;Z--;){if(lt===ue||ue!==null&&lt===ue.alternate)break t;lt=Xs(lt),ue=Xs(ue)}lt=null}else lt=null;Ze!==null&&pp(Ie,Ce,Ze,lt,!1),ot!==null&&_n!==null&&pp(Ie,_n,ot,lt,!0)}}e:{if(Ce=_e?Ys(_e):window,Ze=Ce.nodeName&&Ce.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Ce.type==="file")var ut=h_;else if(Yh(Ce))if(qh)ut=v_;else{ut=m_;var mt=p_}else(Ze=Ce.nodeName)&&Ze.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(ut=g_);if(ut&&(ut=ut(n,_e))){$h(Ie,ut,o,Pe);break e}mt&&mt(n,Ce,_e),n==="focusout"&&(mt=Ce._wrapperState)&&mt.controlled&&Ce.type==="number"&&Ct(Ce,"number",Ce.value)}switch(mt=_e?Ys(_e):window,n){case"focusin":(Yh(mt)||mt.contentEditable==="true")&&(Hs=mt,Jc=_e,Xa=null);break;case"focusout":Xa=Jc=Hs=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,ip(Ie,o,Pe);break;case"selectionchange":if(x_)break;case"keydown":case"keyup":ip(Ie,o,Pe)}var gt;if($c)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Vs?Xh(n,o)&&(St="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(St="onCompositionStart");St&&(Vh&&o.locale!=="ko"&&(Vs||St!=="onCompositionStart"?St==="onCompositionEnd"&&Vs&&(gt=Oh()):(Ur=Pe,Vc="value"in Ur?Ur.value:Ur.textContent,Vs=!0)),mt=qo(_e,St),0<mt.length&&(St=new zh(St,n,null,o,Pe),Ie.push({event:St,listeners:mt}),gt?St.data=gt:(gt=jh(o),gt!==null&&(St.data=gt)))),(gt=l_?c_(n,o):u_(n,o))&&(_e=qo(_e,"onBeforeInput"),0<_e.length&&(Pe=new zh("onBeforeInput","beforeinput",null,o,Pe),Ie.push({event:Pe,listeners:_e}),Pe.data=gt))}fp(Ie,i)})}function $a(n,i,o){return{instance:n,listener:i,currentTarget:o}}function qo(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=it(n,o),m!=null&&u.unshift($a(n,m,f)),m=it(n,i),m!=null&&u.push($a(n,m,f))),n=n.return}return u}function Xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,i,o,u,f){for(var m=i._reactName,C=[];o!==null&&o!==u;){var z=o,X=z.alternate,_e=z.stateNode;if(X!==null&&X===u)break;z.tag===5&&_e!==null&&(z=_e,f?(X=it(o,m),X!=null&&C.unshift($a(o,X,z))):f||(X=it(o,m),X!=null&&C.push($a(o,X,z)))),o=o.return}C.length!==0&&n.push({event:i,listeners:C})}var w_=/\r\n?/g,A_=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(w_,`
`).replace(A_,"")}function Ko(n,i,o){if(i=mp(i),mp(n)!==i&&o)throw Error(t(425))}function Zo(){}var su=null,au=null;function ou(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,b_=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(C_)}:lu;function C_(n){setTimeout(function(){throw n})}function cu(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),ka(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);ka(i)}function Or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function vp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),qi="__reactFiber$"+js,qa="__reactProps$"+js,cr="__reactContainer$"+js,uu="__reactEvents$"+js,R_="__reactListeners$"+js,P_="__reactHandles$"+js;function ls(n){var i=n[qi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[cr]||o[qi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=vp(n);n!==null;){if(o=n[qi])return o;n=vp(n)}return i}n=o,o=n.parentNode}return null}function Ka(n){return n=n[qi]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Jo(n){return n[qa]||null}var du=[],$s=-1;function kr(n){return{current:n}}function rn(n){0>$s||(n.current=du[$s],du[$s]=null,$s--)}function en(n,i){$s++,du[$s]=n.current,n.current=i}var Br={},Vn=kr(Br),si=kr(!1),cs=Br;function qs(n,i){var o=n.type.contextTypes;if(!o)return Br;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function ai(n){return n=n.childContextTypes,n!=null}function Qo(){rn(si),rn(Vn)}function _p(n,i,o){if(Vn.current!==Br)throw Error(t(168));en(Vn,i),en(si,o)}function yp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,re(n)||"Unknown",f));return te({},o,u)}function el(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,cs=Vn.current,en(Vn,n),en(si,si.current),!0}function xp(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=yp(n,i,cs),u.__reactInternalMemoizedMergedChildContext=n,rn(si),rn(Vn),en(Vn,n)):rn(si),en(si,o)}var ur=null,tl=!1,fu=!1;function Sp(n){ur===null?ur=[n]:ur.push(n)}function L_(n){tl=!0,Sp(n)}function zr(){if(!fu&&ur!==null){fu=!0;var n=0,i=ht;try{var o=ur;for(ht=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}ur=null,tl=!1}catch(f){throw ur!==null&&(ur=ur.slice(n+1)),Ii(Pr,zr),f}finally{ht=i,fu=!1}}return null}var Ks=[],Zs=0,nl=null,il=0,Mi=[],Ei=0,us=null,dr=1,fr="";function ds(n,i){Ks[Zs++]=il,Ks[Zs++]=nl,nl=n,il=i}function Mp(n,i,o){Mi[Ei++]=dr,Mi[Ei++]=fr,Mi[Ei++]=us,us=n;var u=dr;n=fr;var f=32-Ve(u)-1;u&=~(1<<f),o+=1;var m=32-Ve(i)+f;if(30<m){var C=f-f%5;m=(u&(1<<C)-1).toString(32),u>>=C,f-=C,dr=1<<32-Ve(i)+f|o<<f|u,fr=m+n}else dr=1<<m|o<<f|u,fr=n}function hu(n){n.return!==null&&(ds(n,1),Mp(n,1,0))}function pu(n){for(;n===nl;)nl=Ks[--Zs],Ks[Zs]=null,il=Ks[--Zs],Ks[Zs]=null;for(;n===us;)us=Mi[--Ei],Mi[Ei]=null,fr=Mi[--Ei],Mi[Ei]=null,dr=Mi[--Ei],Mi[Ei]=null}var mi=null,gi=null,on=!1,Ui=null;function Ep(n,i){var o=Ti(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function wp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=Or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=us!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ti(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,mi=n,gi=null,!0):!1;default:return!1}}function mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gu(n){if(on){var i=gi;if(i){var o=i;if(!wp(n,i)){if(mu(n))throw Error(t(418));i=Or(o.nextSibling);var u=mi;i&&wp(n,i)?Ep(u,o):(n.flags=n.flags&-4097|2,on=!1,mi=n)}}else{if(mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,on=!1,mi=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function rl(n){if(n!==mi)return!1;if(!on)return Ap(n),on=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ou(n.type,n.memoizedProps)),i&&(i=gi)){if(mu(n))throw bp(),Error(t(418));for(;i;)Ep(n,i),i=Or(i.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){gi=Or(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?Or(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=gi;n;)n=Or(n.nextSibling)}function Js(){gi=mi=null,on=!1}function vu(n){Ui===null?Ui=[n]:Ui.push(n)}var I_=T.ReactCurrentBatchConfig;function Za(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(C){var z=f.refs;C===null?delete z[m]:z[m]=C},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function sl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Tp(n){var i=n._init;return i(n._payload)}function Cp(n){function i(ue,Z){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[Z],ue.flags|=16):fe.push(Z)}}function o(ue,Z){if(!n)return null;for(;Z!==null;)i(ue,Z),Z=Z.sibling;return null}function u(ue,Z){for(ue=new Map;Z!==null;)Z.key!==null?ue.set(Z.key,Z):ue.set(Z.index,Z),Z=Z.sibling;return ue}function f(ue,Z){return ue=$r(ue,Z),ue.index=0,ue.sibling=null,ue}function m(ue,Z,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<Z?(ue.flags|=2,Z):fe):(ue.flags|=2,Z)):(ue.flags|=1048576,Z)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function z(ue,Z,fe,Ue){return Z===null||Z.tag!==6?(Z=ld(fe,ue.mode,Ue),Z.return=ue,Z):(Z=f(Z,fe),Z.return=ue,Z)}function X(ue,Z,fe,Ue){var ut=fe.type;return ut===U?Pe(ue,Z,fe.props.children,Ue,fe.key):Z!==null&&(Z.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===pe&&Tp(ut)===Z.type)?(Ue=f(Z,fe.props),Ue.ref=Za(ue,Z,fe),Ue.return=ue,Ue):(Ue=Rl(fe.type,fe.key,fe.props,null,ue.mode,Ue),Ue.ref=Za(ue,Z,fe),Ue.return=ue,Ue)}function _e(ue,Z,fe,Ue){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==fe.containerInfo||Z.stateNode.implementation!==fe.implementation?(Z=cd(fe,ue.mode,Ue),Z.return=ue,Z):(Z=f(Z,fe.children||[]),Z.return=ue,Z)}function Pe(ue,Z,fe,Ue,ut){return Z===null||Z.tag!==7?(Z=ys(fe,ue.mode,Ue,ut),Z.return=ue,Z):(Z=f(Z,fe),Z.return=ue,Z)}function Ie(ue,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=ld(""+Z,ue.mode,fe),Z.return=ue,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case L:return fe=Rl(Z.type,Z.key,Z.props,null,ue.mode,fe),fe.ref=Za(ue,null,Z),fe.return=ue,fe;case I:return Z=cd(Z,ue.mode,fe),Z.return=ue,Z;case pe:var Ue=Z._init;return Ie(ue,Ue(Z._payload),fe)}if(an(Z)||V(Z))return Z=ys(Z,ue.mode,fe,null),Z.return=ue,Z;sl(ue,Z)}return null}function Ce(ue,Z,fe,Ue){var ut=Z!==null?Z.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ut!==null?null:z(ue,Z,""+fe,Ue);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case L:return fe.key===ut?X(ue,Z,fe,Ue):null;case I:return fe.key===ut?_e(ue,Z,fe,Ue):null;case pe:return ut=fe._init,Ce(ue,Z,ut(fe._payload),Ue)}if(an(fe)||V(fe))return ut!==null?null:Pe(ue,Z,fe,Ue,null);sl(ue,fe)}return null}function Ze(ue,Z,fe,Ue,ut){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return ue=ue.get(fe)||null,z(Z,ue,""+Ue,ut);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case L:return ue=ue.get(Ue.key===null?fe:Ue.key)||null,X(Z,ue,Ue,ut);case I:return ue=ue.get(Ue.key===null?fe:Ue.key)||null,_e(Z,ue,Ue,ut);case pe:var mt=Ue._init;return Ze(ue,Z,fe,mt(Ue._payload),ut)}if(an(Ue)||V(Ue))return ue=ue.get(fe)||null,Pe(Z,ue,Ue,ut,null);sl(Z,Ue)}return null}function ot(ue,Z,fe,Ue){for(var ut=null,mt=null,gt=Z,St=Z=0,Nn=null;gt!==null&&St<fe.length;St++){gt.index>St?(Nn=gt,gt=null):Nn=gt.sibling;var Wt=Ce(ue,gt,fe[St],Ue);if(Wt===null){gt===null&&(gt=Nn);break}n&&gt&&Wt.alternate===null&&i(ue,gt),Z=m(Wt,Z,St),mt===null?ut=Wt:mt.sibling=Wt,mt=Wt,gt=Nn}if(St===fe.length)return o(ue,gt),on&&ds(ue,St),ut;if(gt===null){for(;St<fe.length;St++)gt=Ie(ue,fe[St],Ue),gt!==null&&(Z=m(gt,Z,St),mt===null?ut=gt:mt.sibling=gt,mt=gt);return on&&ds(ue,St),ut}for(gt=u(ue,gt);St<fe.length;St++)Nn=Ze(gt,ue,St,fe[St],Ue),Nn!==null&&(n&&Nn.alternate!==null&&gt.delete(Nn.key===null?St:Nn.key),Z=m(Nn,Z,St),mt===null?ut=Nn:mt.sibling=Nn,mt=Nn);return n&&gt.forEach(function(qr){return i(ue,qr)}),on&&ds(ue,St),ut}function lt(ue,Z,fe,Ue){var ut=V(fe);if(typeof ut!="function")throw Error(t(150));if(fe=ut.call(fe),fe==null)throw Error(t(151));for(var mt=ut=null,gt=Z,St=Z=0,Nn=null,Wt=fe.next();gt!==null&&!Wt.done;St++,Wt=fe.next()){gt.index>St?(Nn=gt,gt=null):Nn=gt.sibling;var qr=Ce(ue,gt,Wt.value,Ue);if(qr===null){gt===null&&(gt=Nn);break}n&&gt&&qr.alternate===null&&i(ue,gt),Z=m(qr,Z,St),mt===null?ut=qr:mt.sibling=qr,mt=qr,gt=Nn}if(Wt.done)return o(ue,gt),on&&ds(ue,St),ut;if(gt===null){for(;!Wt.done;St++,Wt=fe.next())Wt=Ie(ue,Wt.value,Ue),Wt!==null&&(Z=m(Wt,Z,St),mt===null?ut=Wt:mt.sibling=Wt,mt=Wt);return on&&ds(ue,St),ut}for(gt=u(ue,gt);!Wt.done;St++,Wt=fe.next())Wt=Ze(gt,ue,St,Wt.value,Ue),Wt!==null&&(n&&Wt.alternate!==null&&gt.delete(Wt.key===null?St:Wt.key),Z=m(Wt,Z,St),mt===null?ut=Wt:mt.sibling=Wt,mt=Wt);return n&&gt.forEach(function(dy){return i(ue,dy)}),on&&ds(ue,St),ut}function _n(ue,Z,fe,Ue){if(typeof fe=="object"&&fe!==null&&fe.type===U&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case L:e:{for(var ut=fe.key,mt=Z;mt!==null;){if(mt.key===ut){if(ut=fe.type,ut===U){if(mt.tag===7){o(ue,mt.sibling),Z=f(mt,fe.props.children),Z.return=ue,ue=Z;break e}}else if(mt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===pe&&Tp(ut)===mt.type){o(ue,mt.sibling),Z=f(mt,fe.props),Z.ref=Za(ue,mt,fe),Z.return=ue,ue=Z;break e}o(ue,mt);break}else i(ue,mt);mt=mt.sibling}fe.type===U?(Z=ys(fe.props.children,ue.mode,Ue,fe.key),Z.return=ue,ue=Z):(Ue=Rl(fe.type,fe.key,fe.props,null,ue.mode,Ue),Ue.ref=Za(ue,Z,fe),Ue.return=ue,ue=Ue)}return C(ue);case I:e:{for(mt=fe.key;Z!==null;){if(Z.key===mt)if(Z.tag===4&&Z.stateNode.containerInfo===fe.containerInfo&&Z.stateNode.implementation===fe.implementation){o(ue,Z.sibling),Z=f(Z,fe.children||[]),Z.return=ue,ue=Z;break e}else{o(ue,Z);break}else i(ue,Z);Z=Z.sibling}Z=cd(fe,ue.mode,Ue),Z.return=ue,ue=Z}return C(ue);case pe:return mt=fe._init,_n(ue,Z,mt(fe._payload),Ue)}if(an(fe))return ot(ue,Z,fe,Ue);if(V(fe))return lt(ue,Z,fe,Ue);sl(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,Z!==null&&Z.tag===6?(o(ue,Z.sibling),Z=f(Z,fe),Z.return=ue,ue=Z):(o(ue,Z),Z=ld(fe,ue.mode,Ue),Z.return=ue,ue=Z),C(ue)):o(ue,Z)}return _n}var Qs=Cp(!0),Rp=Cp(!1),al=kr(null),ol=null,ea=null,_u=null;function yu(){_u=ea=ol=null}function xu(n){var i=al.current;rn(al),n._currentValue=i}function Su(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ta(n,i){ol=n,_u=ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(oi=!0),n.firstContext=null)}function wi(n){var i=n._currentValue;if(_u!==n)if(n={context:n,memoizedValue:i,next:null},ea===null){if(ol===null)throw Error(t(308));ea=n,ol.dependencies={lanes:0,firstContext:n}}else ea=ea.next=n;return i}var fs=null;function Mu(n){fs===null?fs=[n]:fs.push(n)}function Pp(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Mu(i)):(o.next=f.next,f.next=o),i.interleaved=o,hr(n,u)}function hr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Gr=!1;function Eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Vr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(zt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,hr(n,o)}return f=u.interleaved,f===null?(i.next=i,Mu(u)):(i.next=f.next,f.next=i),u.interleaved=i,hr(n,o)}function ll(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,wn(n,o)}}function Ip(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=C:m=m.next=C,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function cl(n,i,o,u){var f=n.updateQueue;Gr=!1;var m=f.firstBaseUpdate,C=f.lastBaseUpdate,z=f.shared.pending;if(z!==null){f.shared.pending=null;var X=z,_e=X.next;X.next=null,C===null?m=_e:C.next=_e,C=X;var Pe=n.alternate;Pe!==null&&(Pe=Pe.updateQueue,z=Pe.lastBaseUpdate,z!==C&&(z===null?Pe.firstBaseUpdate=_e:z.next=_e,Pe.lastBaseUpdate=X))}if(m!==null){var Ie=f.baseState;C=0,Pe=_e=X=null,z=m;do{var Ce=z.lane,Ze=z.eventTime;if((u&Ce)===Ce){Pe!==null&&(Pe=Pe.next={eventTime:Ze,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ot=n,lt=z;switch(Ce=i,Ze=o,lt.tag){case 1:if(ot=lt.payload,typeof ot=="function"){Ie=ot.call(Ze,Ie,Ce);break e}Ie=ot;break e;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=lt.payload,Ce=typeof ot=="function"?ot.call(Ze,Ie,Ce):ot,Ce==null)break e;Ie=te({},Ie,Ce);break e;case 2:Gr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Ce=f.effects,Ce===null?f.effects=[z]:Ce.push(z))}else Ze={eventTime:Ze,lane:Ce,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Pe===null?(_e=Pe=Ze,X=Ie):Pe=Pe.next=Ze,C|=Ce;if(z=z.next,z===null){if(z=f.shared.pending,z===null)break;Ce=z,z=Ce.next,Ce.next=null,f.lastBaseUpdate=Ce,f.shared.pending=null}}while(!0);if(Pe===null&&(X=Ie),f.baseState=X,f.firstBaseUpdate=_e,f.lastBaseUpdate=Pe,i=f.shared.interleaved,i!==null){f=i;do C|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);ms|=C,n.lanes=C,n.memoizedState=Ie}}function Np(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Ja={},Ki=kr(Ja),Qa=kr(Ja),eo=kr(Ja);function hs(n){if(n===Ja)throw Error(t(174));return n}function wu(n,i){switch(en(eo,i),en(Qa,n),en(Ki,Ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}rn(Ki),en(Ki,i)}function na(){rn(Ki),rn(Qa),rn(eo)}function Dp(n){hs(eo.current);var i=hs(Ki.current),o=M(i,n.type);i!==o&&(en(Qa,n),en(Ki,o))}function Au(n){Qa.current===n&&(rn(Ki),rn(Qa))}var fn=kr(0);function ul(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bu=[];function Tu(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var dl=T.ReactCurrentDispatcher,Cu=T.ReactCurrentBatchConfig,ps=0,hn=null,An=null,Ln=null,fl=!1,to=!1,no=0,N_=0;function Hn(){throw Error(t(321))}function Ru(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Di(n[o],i[o]))return!1;return!0}function Pu(n,i,o,u,f,m){if(ps=m,hn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,dl.current=n===null||n.memoizedState===null?O_:k_,n=o(u,f),to){m=0;do{if(to=!1,no=0,25<=m)throw Error(t(301));m+=1,Ln=An=null,i.updateQueue=null,dl.current=B_,n=o(u,f)}while(to)}if(dl.current=ml,i=An!==null&&An.next!==null,ps=0,Ln=An=hn=null,fl=!1,i)throw Error(t(300));return n}function Lu(){var n=no!==0;return no=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?hn.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function Ai(){if(An===null){var n=hn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var i=Ln===null?hn.memoizedState:Ln.next;if(i!==null)Ln=i,An=n;else{if(n===null)throw Error(t(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Ln===null?hn.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function io(n,i){return typeof i=="function"?i(n):i}function Iu(n){var i=Ai(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=An,f=u.baseQueue,m=o.pending;if(m!==null){if(f!==null){var C=f.next;f.next=m.next,m.next=C}u.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,u=u.baseState;var z=C=null,X=null,_e=m;do{var Pe=_e.lane;if((ps&Pe)===Pe)X!==null&&(X=X.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),u=_e.hasEagerState?_e.eagerState:n(u,_e.action);else{var Ie={lane:Pe,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};X===null?(z=X=Ie,C=u):X=X.next=Ie,hn.lanes|=Pe,ms|=Pe}_e=_e.next}while(_e!==null&&_e!==m);X===null?C=u:X.next=z,Di(u,i.memoizedState)||(oi=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=X,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do m=f.lane,hn.lanes|=m,ms|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Nu(n){var i=Ai(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var C=f=f.next;do m=n(m,C.action),C=C.next;while(C!==f);Di(m,i.memoizedState)||(oi=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Up(){}function Fp(n,i){var o=hn,u=Ai(),f=i(),m=!Di(u.memoizedState,f);if(m&&(u.memoizedState=f,oi=!0),u=u.queue,Du(Bp.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||Ln!==null&&Ln.memoizedState.tag&1){if(o.flags|=2048,ro(9,kp.bind(null,o,u,f,i),void 0,null),In===null)throw Error(t(349));(ps&30)!==0||Op(o,i,f)}return f}function Op(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function kp(n,i,o,u){i.value=o,i.getSnapshot=u,zp(i)&&Gp(n)}function Bp(n,i,o){return o(function(){zp(i)&&Gp(n)})}function zp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Di(n,o)}catch{return!0}}function Gp(n){var i=hr(n,1);i!==null&&Bi(i,n,1,-1)}function Vp(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:n},i.queue=n,n=n.dispatch=F_.bind(null,hn,n),[i.memoizedState,n]}function ro(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=hn.updateQueue,i===null?(i={lastEffect:null,stores:null},hn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Hp(){return Ai().memoizedState}function hl(n,i,o,u){var f=Zi();hn.flags|=n,f.memoizedState=ro(1|i,o,void 0,u===void 0?null:u)}function pl(n,i,o,u){var f=Ai();u=u===void 0?null:u;var m=void 0;if(An!==null){var C=An.memoizedState;if(m=C.destroy,u!==null&&Ru(u,C.deps)){f.memoizedState=ro(i,o,m,u);return}}hn.flags|=n,f.memoizedState=ro(1|i,o,m,u)}function Wp(n,i){return hl(8390656,8,n,i)}function Du(n,i){return pl(2048,8,n,i)}function Xp(n,i){return pl(4,2,n,i)}function jp(n,i){return pl(4,4,n,i)}function Yp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $p(n,i,o){return o=o!=null?o.concat([n]):null,pl(4,4,Yp.bind(null,i,n),o)}function Uu(){}function qp(n,i){var o=Ai();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ru(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Kp(n,i){var o=Ai();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ru(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Zp(n,i,o){return(ps&21)===0?(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=o):(Di(o,i)||(o=dn(),hn.lanes|=o,ms|=o,n.baseState=!0),i)}function D_(n,i){var o=ht;ht=o!==0&&4>o?o:4,n(!0);var u=Cu.transition;Cu.transition={};try{n(!1),i()}finally{ht=o,Cu.transition=u}}function Jp(){return Ai().memoizedState}function U_(n,i,o){var u=jr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Qp(n))em(i,o);else if(o=Pp(n,i,o,u),o!==null){var f=Qn();Bi(o,n,u,f),tm(o,i,u)}}function F_(n,i,o){var u=jr(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qp(n))em(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var C=i.lastRenderedState,z=m(C,o);if(f.hasEagerState=!0,f.eagerState=z,Di(z,C)){var X=i.interleaved;X===null?(f.next=f,Mu(i)):(f.next=X.next,X.next=f),i.interleaved=f;return}}catch{}finally{}o=Pp(n,i,f,u),o!==null&&(f=Qn(),Bi(o,n,u,f),tm(o,i,u))}}function Qp(n){var i=n.alternate;return n===hn||i!==null&&i===hn}function em(n,i){to=fl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function tm(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,wn(n,o)}}var ml={readContext:wi,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},O_={readContext:wi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:wi,useEffect:Wp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,hl(4194308,4,Yp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return hl(4194308,4,n,i)},useInsertionEffect:function(n,i){return hl(4,2,n,i)},useMemo:function(n,i){var o=Zi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Zi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=U_.bind(null,hn,n),[u.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:Vp,useDebugValue:Uu,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Vp(!1),i=n[0];return n=D_.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=hn,f=Zi();if(on){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),In===null)throw Error(t(349));(ps&30)!==0||Op(u,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Wp(Bp.bind(null,u,m,n),[n]),u.flags|=2048,ro(9,kp.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Zi(),i=In.identifierPrefix;if(on){var o=fr,u=dr;o=(u&~(1<<32-Ve(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=no++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=N_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},k_={readContext:wi,useCallback:qp,useContext:wi,useEffect:Du,useImperativeHandle:$p,useInsertionEffect:Xp,useLayoutEffect:jp,useMemo:Kp,useReducer:Iu,useRef:Hp,useState:function(){return Iu(io)},useDebugValue:Uu,useDeferredValue:function(n){var i=Ai();return Zp(i,An.memoizedState,n)},useTransition:function(){var n=Iu(io)[0],i=Ai().memoizedState;return[n,i]},useMutableSource:Up,useSyncExternalStore:Fp,useId:Jp,unstable_isNewReconciler:!1},B_={readContext:wi,useCallback:qp,useContext:wi,useEffect:Du,useImperativeHandle:$p,useInsertionEffect:Xp,useLayoutEffect:jp,useMemo:Kp,useReducer:Nu,useRef:Hp,useState:function(){return Nu(io)},useDebugValue:Uu,useDeferredValue:function(n){var i=Ai();return An===null?i.memoizedState=n:Zp(i,An.memoizedState,n)},useTransition:function(){var n=Nu(io)[0],i=Ai().memoizedState;return[n,i]},useMutableSource:Up,useSyncExternalStore:Fp,useId:Jp,unstable_isNewReconciler:!1};function Fi(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Fu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:te({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var gl={isMounted:function(n){return(n=n._reactInternals)?un(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Qn(),f=jr(n),m=pr(u,f);m.payload=i,o!=null&&(m.callback=o),i=Vr(n,m,f),i!==null&&(Bi(i,n,f,u),ll(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Qn(),f=jr(n),m=pr(u,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Vr(n,m,f),i!==null&&(Bi(i,n,f,u),ll(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Qn(),u=jr(n),f=pr(o,u);f.tag=2,i!=null&&(f.callback=i),i=Vr(n,f,u),i!==null&&(Bi(i,n,u,o),ll(i,n,u))}};function nm(n,i,o,u,f,m,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,C):i.prototype&&i.prototype.isPureReactComponent?!Wa(o,u)||!Wa(f,m):!0}function im(n,i,o){var u=!1,f=Br,m=i.contextType;return typeof m=="object"&&m!==null?m=wi(m):(f=ai(i)?cs:Vn.current,u=i.contextTypes,m=(u=u!=null)?qs(n,f):Br),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function rm(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&gl.enqueueReplaceState(i,i.state,null)}function Ou(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Eu(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=wi(m):(m=ai(i)?cs:Vn.current,f.context=qs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Fu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&gl.enqueueReplaceState(f,f.state,null),cl(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ia(n,i){try{var o="",u=i;do o+=Ge(u),u=u.return;while(u);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function ku(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Bu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var z_=typeof WeakMap=="function"?WeakMap:Map;function sm(n,i,o){o=pr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){El||(El=!0,ed=u),Bu(n,i)},o}function am(n,i,o){o=pr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Bu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Bu(n,i),typeof u!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),o}function om(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new z_;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=ey.bind(null,n,i,o),i.then(n,n))}function lm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cm(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=pr(-1,1),i.tag=2,Vr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var G_=T.ReactCurrentOwner,oi=!1;function Jn(n,i,o,u){i.child=n===null?Rp(i,null,o,u):Qs(i,n.child,o,u)}function um(n,i,o,u,f){o=o.render;var m=i.ref;return ta(i,f),u=Pu(n,i,o,u,m,f),o=Lu(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,mr(n,i,f)):(on&&o&&hu(i),i.flags|=1,Jn(n,i,u,f),i.child)}function dm(n,i,o,u,f){if(n===null){var m=o.type;return typeof m=="function"&&!od(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,fm(n,i,m,u,f)):(n=Rl(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var C=m.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(C,u)&&n.ref===i.ref)return mr(n,i,f)}return i.flags|=1,n=$r(m,u),n.ref=i.ref,n.return=i,i.child=n}function fm(n,i,o,u,f){if(n!==null){var m=n.memoizedProps;if(Wa(m,u)&&n.ref===i.ref)if(oi=!1,i.pendingProps=u=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(oi=!0);else return i.lanes=n.lanes,mr(n,i,f)}return zu(n,i,o,u,f)}function hm(n,i,o){var u=i.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(sa,vi),vi|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,en(sa,vi),vi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,en(sa,vi),vi|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,en(sa,vi),vi|=u;return Jn(n,i,f,o),i.child}function pm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function zu(n,i,o,u,f){var m=ai(o)?cs:Vn.current;return m=qs(i,m),ta(i,f),o=Pu(n,i,o,u,m,f),u=Lu(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,mr(n,i,f)):(on&&u&&hu(i),i.flags|=1,Jn(n,i,o,f),i.child)}function mm(n,i,o,u,f){if(ai(o)){var m=!0;el(i)}else m=!1;if(ta(i,f),i.stateNode===null)_l(n,i),im(i,o,u),Ou(i,o,u,f),u=!0;else if(n===null){var C=i.stateNode,z=i.memoizedProps;C.props=z;var X=C.context,_e=o.contextType;typeof _e=="object"&&_e!==null?_e=wi(_e):(_e=ai(o)?cs:Vn.current,_e=qs(i,_e));var Pe=o.getDerivedStateFromProps,Ie=typeof Pe=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ie||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==u||X!==_e)&&rm(i,C,u,_e),Gr=!1;var Ce=i.memoizedState;C.state=Ce,cl(i,u,C,f),X=i.memoizedState,z!==u||Ce!==X||si.current||Gr?(typeof Pe=="function"&&(Fu(i,o,Pe,u),X=i.memoizedState),(z=Gr||nm(i,o,z,u,Ce,X,_e))?(Ie||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=X),C.props=u,C.state=X,C.context=_e,u=z):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,Lp(n,i),z=i.memoizedProps,_e=i.type===i.elementType?z:Fi(i.type,z),C.props=_e,Ie=i.pendingProps,Ce=C.context,X=o.contextType,typeof X=="object"&&X!==null?X=wi(X):(X=ai(o)?cs:Vn.current,X=qs(i,X));var Ze=o.getDerivedStateFromProps;(Pe=typeof Ze=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==Ie||Ce!==X)&&rm(i,C,u,X),Gr=!1,Ce=i.memoizedState,C.state=Ce,cl(i,u,C,f);var ot=i.memoizedState;z!==Ie||Ce!==ot||si.current||Gr?(typeof Ze=="function"&&(Fu(i,o,Ze,u),ot=i.memoizedState),(_e=Gr||nm(i,o,_e,u,Ce,ot,X)||!1)?(Pe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,ot,X),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,ot,X)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ot),C.props=u,C.state=ot,C.context=X,u=_e):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),u=!1)}return Gu(n,i,o,u,m,f)}function Gu(n,i,o,u,f,m){pm(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return f&&xp(i,o,!1),mr(n,i,m);u=i.stateNode,G_.current=i;var z=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Qs(i,n.child,null,m),i.child=Qs(i,null,z,m)):Jn(n,i,z,m),i.memoizedState=u.state,f&&xp(i,o,!0),i.child}function gm(n){var i=n.stateNode;i.pendingContext?_p(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_p(n,i.context,!1),wu(n,i.containerInfo)}function vm(n,i,o,u,f){return Js(),vu(f),i.flags|=256,Jn(n,i,o,u),i.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,i,o){var u=i.pendingProps,f=fn.current,m=!1,C=(i.flags&128)!==0,z;if((z=C)||(z=n!==null&&n.memoizedState===null?!1:(f&2)!==0),z?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),en(fn,f&1),n===null)return gu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,m?(u=i.mode,m=i.child,C={mode:"hidden",children:C},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=C):m=Pl(C,u,0,null),n=ys(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Hu(o),i.memoizedState=Vu,n):Wu(i,C));if(f=n.memoizedState,f!==null&&(z=f.dehydrated,z!==null))return V_(n,i,C,u,z,f,o);if(m){m=u.fallback,C=i.mode,f=n.child,z=f.sibling;var X={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=X,i.deletions=null):(u=$r(f,X),u.subtreeFlags=f.subtreeFlags&14680064),z!==null?m=$r(z,m):(m=ys(m,C,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,C=n.child.memoizedState,C=C===null?Hu(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},m.memoizedState=C,m.childLanes=n.childLanes&~o,i.memoizedState=Vu,u}return m=n.child,n=m.sibling,u=$r(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Wu(n,i){return i=Pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function vl(n,i,o,u){return u!==null&&vu(u),Qs(i,n.child,null,o),n=Wu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function V_(n,i,o,u,f,m,C){if(o)return i.flags&256?(i.flags&=-257,u=ku(Error(t(422))),vl(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=Pl({mode:"visible",children:u.children},f,0,null),m=ys(m,f,C,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Qs(i,n.child,null,C),i.child.memoizedState=Hu(C),i.memoizedState=Vu,m);if((i.mode&1)===0)return vl(n,i,C,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var z=u.dgst;return u=z,m=Error(t(419)),u=ku(m,u,void 0),vl(n,i,C,u)}if(z=(C&n.childLanes)!==0,oi||z){if(u=In,u!==null){switch(C&-C){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|C))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,hr(n,f),Bi(u,n,f,-1))}return ad(),u=ku(Error(t(421))),vl(n,i,C,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ty.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,gi=Or(f.nextSibling),mi=i,on=!0,Ui=null,n!==null&&(Mi[Ei++]=dr,Mi[Ei++]=fr,Mi[Ei++]=us,dr=n.id,fr=n.overflow,us=i),i=Wu(i,u.children),i.flags|=4096,i)}function ym(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Su(n.return,i,o)}function Xu(n,i,o,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function xm(n,i,o){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(Jn(n,i,u.children,o),u=fn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ym(n,o,i);else if(n.tag===19)ym(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(en(fn,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&ul(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Xu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ul(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Xu(i,!0,o,null,m);break;case"together":Xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function _l(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=$r(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=$r(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function H_(n,i,o){switch(i.tag){case 3:gm(i),Js();break;case 5:Dp(i);break;case 1:ai(i.type)&&el(i);break;case 4:wu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;en(al,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(en(fn,fn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?_m(n,i,o):(en(fn,fn.current&1),n=mr(n,i,o),n!==null?n.sibling:null);en(fn,fn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return xm(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),en(fn,fn.current),u)break;return null;case 22:case 23:return i.lanes=0,hm(n,i,o)}return mr(n,i,o)}var Sm,ju,Mm,Em;Sm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},Mm=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,hs(Ki.current);var m=null;switch(o){case"input":f=pt(n,f),u=pt(n,u),m=[];break;case"select":f=te({},f,{value:void 0}),u=te({},u,{value:void 0}),m=[];break;case"textarea":f=$t(n,f),u=$t(n,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Zo)}Je(o,u);var C;o=null;for(_e in f)if(!u.hasOwnProperty(_e)&&f.hasOwnProperty(_e)&&f[_e]!=null)if(_e==="style"){var z=f[_e];for(C in z)z.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else _e!=="dangerouslySetInnerHTML"&&_e!=="children"&&_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&_e!=="autoFocus"&&(a.hasOwnProperty(_e)?m||(m=[]):(m=m||[]).push(_e,null));for(_e in u){var X=u[_e];if(z=f!=null?f[_e]:void 0,u.hasOwnProperty(_e)&&X!==z&&(X!=null||z!=null))if(_e==="style")if(z){for(C in z)!z.hasOwnProperty(C)||X&&X.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in X)X.hasOwnProperty(C)&&z[C]!==X[C]&&(o||(o={}),o[C]=X[C])}else o||(m||(m=[]),m.push(_e,o)),o=X;else _e==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,z=z?z.__html:void 0,X!=null&&z!==X&&(m=m||[]).push(_e,X)):_e==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(_e,""+X):_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&(a.hasOwnProperty(_e)?(X!=null&&_e==="onScroll"&&nn("scroll",n),m||z===X||(m=[])):(m=m||[]).push(_e,X))}o&&(m=m||[]).push("style",o);var _e=m;(i.updateQueue=_e)&&(i.flags|=4)}},Em=function(n,i,o,u){o!==u&&(i.flags|=4)};function so(n,i){if(!on)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function W_(n,i,o){var u=i.pendingProps;switch(pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wn(i),null;case 1:return ai(i.type)&&Qo(),Wn(i),null;case 3:return u=i.stateNode,na(),rn(si),rn(Vn),Tu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(rl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ui!==null&&(id(Ui),Ui=null))),ju(n,i),Wn(i),null;case 5:Au(i);var f=hs(eo.current);if(o=i.type,n!==null&&i.stateNode!=null)Mm(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Wn(i),null}if(n=hs(Ki.current),rl(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[qi]=i,u[qa]=m,n=(i.mode&1)!==0,o){case"dialog":nn("cancel",u),nn("close",u);break;case"iframe":case"object":case"embed":nn("load",u);break;case"video":case"audio":for(f=0;f<ja.length;f++)nn(ja[f],u);break;case"source":nn("error",u);break;case"img":case"image":case"link":nn("error",u),nn("load",u);break;case"details":nn("toggle",u);break;case"input":Lt(u,m),nn("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},nn("invalid",u);break;case"textarea":Y(u,m),nn("invalid",u)}Je(o,m),f=null;for(var C in m)if(m.hasOwnProperty(C)){var z=m[C];C==="children"?typeof z=="string"?u.textContent!==z&&(m.suppressHydrationWarning!==!0&&Ko(u.textContent,z,n),f=["children",z]):typeof z=="number"&&u.textContent!==""+z&&(m.suppressHydrationWarning!==!0&&Ko(u.textContent,z,n),f=["children",""+z]):a.hasOwnProperty(C)&&z!=null&&C==="onScroll"&&nn("scroll",u)}switch(o){case"input":He(u),De(u,m,!0);break;case"textarea":He(u),Rt(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Zo)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[qi]=i,n[qa]=u,Sm(n,i,!1,!1),i.stateNode=n;e:{switch(C=ke(o,u),o){case"dialog":nn("cancel",n),nn("close",n),f=u;break;case"iframe":case"object":case"embed":nn("load",n),f=u;break;case"video":case"audio":for(f=0;f<ja.length;f++)nn(ja[f],n);f=u;break;case"source":nn("error",n),f=u;break;case"img":case"image":case"link":nn("error",n),nn("load",n),f=u;break;case"details":nn("toggle",n),f=u;break;case"input":Lt(n,u),f=pt(n,u),nn("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=te({},u,{value:void 0}),nn("invalid",n);break;case"textarea":Y(n,u),f=$t(n,u),nn("invalid",n);break;default:f=u}Je(o,f),z=f;for(m in z)if(z.hasOwnProperty(m)){var X=z[m];m==="style"?Se(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ne(n,X)):m==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&ge(n,X):typeof X=="number"&&ge(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?X!=null&&m==="onScroll"&&nn("scroll",n):X!=null&&F(n,m,X,C))}switch(o){case"input":He(n),De(n,u,!1);break;case"textarea":He(n),Rt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?wt(n,!!u.multiple,m,!1):u.defaultValue!=null&&wt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Zo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Wn(i),null;case 6:if(n&&i.stateNode!=null)Em(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=hs(eo.current),hs(Ki.current),rl(i)){if(u=i.stateNode,o=i.memoizedProps,u[qi]=i,(m=u.nodeValue!==o)&&(n=mi,n!==null))switch(n.tag){case 3:Ko(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[qi]=i,i.stateNode=u}return Wn(i),null;case 13:if(rn(fn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(on&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bp(),Js(),i.flags|=98560,m=!1;else if(m=rl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[qi]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Wn(i),m=!1}else Ui!==null&&(id(Ui),Ui=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(fn.current&1)!==0?bn===0&&(bn=3):ad())),i.updateQueue!==null&&(i.flags|=4),Wn(i),null);case 4:return na(),ju(n,i),n===null&&Ya(i.stateNode.containerInfo),Wn(i),null;case 10:return xu(i.type._context),Wn(i),null;case 17:return ai(i.type)&&Qo(),Wn(i),null;case 19:if(rn(fn),m=i.memoizedState,m===null)return Wn(i),null;if(u=(i.flags&128)!==0,C=m.rendering,C===null)if(u)so(m,!1);else{if(bn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=ul(n),C!==null){for(i.flags|=128,so(m,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,C=m.alternate,C===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=C.childLanes,m.lanes=C.lanes,m.child=C.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=C.memoizedProps,m.memoizedState=C.memoizedState,m.updateQueue=C.updateQueue,m.type=C.type,n=C.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return en(fn,fn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Qt()>aa&&(i.flags|=128,u=!0,so(m,!1),i.lanes=4194304)}else{if(!u)if(n=ul(C),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),so(m,!0),m.tail===null&&m.tailMode==="hidden"&&!C.alternate&&!on)return Wn(i),null}else 2*Qt()-m.renderingStartTime>aa&&o!==1073741824&&(i.flags|=128,u=!0,so(m,!1),i.lanes=4194304);m.isBackwards?(C.sibling=i.child,i.child=C):(o=m.last,o!==null?o.sibling=C:i.child=C,m.last=C)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Qt(),i.sibling=null,o=fn.current,en(fn,u?o&1|2:o&1),i):(Wn(i),null);case 22:case 23:return sd(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(vi&1073741824)!==0&&(Wn(i),i.subtreeFlags&6&&(i.flags|=8192)):Wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function X_(n,i){switch(pu(i),i.tag){case 1:return ai(i.type)&&Qo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return na(),rn(si),rn(Vn),Tu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Au(i),null;case 13:if(rn(fn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return rn(fn),null;case 4:return na(),null;case 10:return xu(i.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var yl=!1,Xn=!1,j_=typeof WeakSet=="function"?WeakSet:Set,nt=null;function ra(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){mn(n,i,u)}else o.current=null}function Yu(n,i,o){try{o()}catch(u){mn(n,i,u)}}var wm=!1;function Y_(n,i){if(su=Bo,n=np(),Zc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var C=0,z=-1,X=-1,_e=0,Pe=0,Ie=n,Ce=null;t:for(;;){for(var Ze;Ie!==o||f!==0&&Ie.nodeType!==3||(z=C+f),Ie!==m||u!==0&&Ie.nodeType!==3||(X=C+u),Ie.nodeType===3&&(C+=Ie.nodeValue.length),(Ze=Ie.firstChild)!==null;)Ce=Ie,Ie=Ze;for(;;){if(Ie===n)break t;if(Ce===o&&++_e===f&&(z=C),Ce===m&&++Pe===u&&(X=C),(Ze=Ie.nextSibling)!==null)break;Ie=Ce,Ce=Ie.parentNode}Ie=Ze}o=z===-1||X===-1?null:{start:z,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(au={focusedElem:n,selectionRange:o},Bo=!1,nt=i;nt!==null;)if(i=nt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,nt=n;else for(;nt!==null;){i=nt;try{var ot=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ot!==null){var lt=ot.memoizedProps,_n=ot.memoizedState,ue=i.stateNode,Z=ue.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Fi(i.type,lt),_n);ue.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){mn(i,i.return,Ue)}if(n=i.sibling,n!==null){n.return=i.return,nt=n;break}nt=i.return}return ot=wm,wm=!1,ot}function ao(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Yu(i,o,m)}f=f.next}while(f!==u)}}function xl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function $u(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Am(n){var i=n.alternate;i!==null&&(n.alternate=null,Am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[qa],delete i[uu],delete i[R_],delete i[P_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Zo));else if(u!==4&&(n=n.child,n!==null))for(qu(n,i,o),n=n.sibling;n!==null;)qu(n,i,o),n=n.sibling}function Ku(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ku(n,i,o),n=n.sibling;n!==null;)Ku(n,i,o),n=n.sibling}var kn=null,Oi=!1;function Hr(n,i,o){for(o=o.child;o!==null;)Cm(n,i,o),o=o.sibling}function Cm(n,i,o){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ce,o)}catch{}switch(o.tag){case 5:Xn||ra(o,i);case 6:var u=kn,f=Oi;kn=null,Hr(n,i,o),kn=u,Oi=f,kn!==null&&(Oi?(n=kn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):kn.removeChild(o.stateNode));break;case 18:kn!==null&&(Oi?(n=kn,o=o.stateNode,n.nodeType===8?cu(n.parentNode,o):n.nodeType===1&&cu(n,o),ka(n)):cu(kn,o.stateNode));break;case 4:u=kn,f=Oi,kn=o.stateNode.containerInfo,Oi=!0,Hr(n,i,o),kn=u,Oi=f;break;case 0:case 11:case 14:case 15:if(!Xn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,C=m.destroy;m=m.tag,C!==void 0&&((m&2)!==0||(m&4)!==0)&&Yu(o,i,C),f=f.next}while(f!==u)}Hr(n,i,o);break;case 1:if(!Xn&&(ra(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(z){mn(o,i,z)}Hr(n,i,o);break;case 21:Hr(n,i,o);break;case 22:o.mode&1?(Xn=(u=Xn)||o.memoizedState!==null,Hr(n,i,o),Xn=u):Hr(n,i,o);break;default:Hr(n,i,o)}}function Rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new j_),i.forEach(function(u){var f=ny.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function ki(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var m=n,C=i,z=C;e:for(;z!==null;){switch(z.tag){case 5:kn=z.stateNode,Oi=!1;break e;case 3:kn=z.stateNode.containerInfo,Oi=!0;break e;case 4:kn=z.stateNode.containerInfo,Oi=!0;break e}z=z.return}if(kn===null)throw Error(t(160));Cm(m,C,f),kn=null,Oi=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(_e){mn(f,i,_e)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pm(i,n),i=i.sibling}function Pm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ki(i,n),Ji(n),u&4){try{ao(3,n,n.return),xl(3,n)}catch(lt){mn(n,n.return,lt)}try{ao(5,n,n.return)}catch(lt){mn(n,n.return,lt)}}break;case 1:ki(i,n),Ji(n),u&512&&o!==null&&ra(o,o.return);break;case 5:if(ki(i,n),Ji(n),u&512&&o!==null&&ra(o,o.return),n.flags&32){var f=n.stateNode;try{ge(f,"")}catch(lt){mn(n,n.return,lt)}}if(u&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,C=o!==null?o.memoizedProps:m,z=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{z==="input"&&m.type==="radio"&&m.name!=null&&st(f,m),ke(z,C);var _e=ke(z,m);for(C=0;C<X.length;C+=2){var Pe=X[C],Ie=X[C+1];Pe==="style"?Se(f,Ie):Pe==="dangerouslySetInnerHTML"?ne(f,Ie):Pe==="children"?ge(f,Ie):F(f,Pe,Ie,_e)}switch(z){case"input":Et(f,m);break;case"textarea":Zt(f,m);break;case"select":var Ce=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ze=m.value;Ze!=null?wt(f,!!m.multiple,Ze,!1):Ce!==!!m.multiple&&(m.defaultValue!=null?wt(f,!!m.multiple,m.defaultValue,!0):wt(f,!!m.multiple,m.multiple?[]:"",!1))}f[qa]=m}catch(lt){mn(n,n.return,lt)}}break;case 6:if(ki(i,n),Ji(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(lt){mn(n,n.return,lt)}}break;case 3:if(ki(i,n),Ji(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ka(i.containerInfo)}catch(lt){mn(n,n.return,lt)}break;case 4:ki(i,n),Ji(n);break;case 13:ki(i,n),Ji(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Qu=Qt())),u&4&&Rm(n);break;case 22:if(Pe=o!==null&&o.memoizedState!==null,n.mode&1?(Xn=(_e=Xn)||Pe,ki(i,n),Xn=_e):ki(i,n),Ji(n),u&8192){if(_e=n.memoizedState!==null,(n.stateNode.isHidden=_e)&&!Pe&&(n.mode&1)!==0)for(nt=n,Pe=n.child;Pe!==null;){for(Ie=nt=Pe;nt!==null;){switch(Ce=nt,Ze=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:ao(4,Ce,Ce.return);break;case 1:ra(Ce,Ce.return);var ot=Ce.stateNode;if(typeof ot.componentWillUnmount=="function"){u=Ce,o=Ce.return;try{i=u,ot.props=i.memoizedProps,ot.state=i.memoizedState,ot.componentWillUnmount()}catch(lt){mn(u,o,lt)}}break;case 5:ra(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){Nm(Ie);continue}}Ze!==null?(Ze.return=Ce,nt=Ze):Nm(Ie)}Pe=Pe.sibling}e:for(Pe=null,Ie=n;;){if(Ie.tag===5){if(Pe===null){Pe=Ie;try{f=Ie.stateNode,_e?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(z=Ie.stateNode,X=Ie.memoizedProps.style,C=X!=null&&X.hasOwnProperty("display")?X.display:null,z.style.display=xe("display",C))}catch(lt){mn(n,n.return,lt)}}}else if(Ie.tag===6){if(Pe===null)try{Ie.stateNode.nodeValue=_e?"":Ie.memoizedProps}catch(lt){mn(n,n.return,lt)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;Pe===Ie&&(Pe=null),Ie=Ie.return}Pe===Ie&&(Pe=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:ki(i,n),Ji(n),u&4&&Rm(n);break;case 21:break;default:ki(i,n),Ji(n)}}function Ji(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(bm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ge(f,""),u.flags&=-33);var m=Tm(n);Ku(n,m,f);break;case 3:case 4:var C=u.stateNode.containerInfo,z=Tm(n);qu(n,z,C);break;default:throw Error(t(161))}}catch(X){mn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function $_(n,i,o){nt=n,Lm(n)}function Lm(n,i,o){for(var u=(n.mode&1)!==0;nt!==null;){var f=nt,m=f.child;if(f.tag===22&&u){var C=f.memoizedState!==null||yl;if(!C){var z=f.alternate,X=z!==null&&z.memoizedState!==null||Xn;z=yl;var _e=Xn;if(yl=C,(Xn=X)&&!_e)for(nt=f;nt!==null;)C=nt,X=C.child,C.tag===22&&C.memoizedState!==null?Dm(f):X!==null?(X.return=C,nt=X):Dm(f);for(;m!==null;)nt=m,Lm(m),m=m.sibling;nt=f,yl=z,Xn=_e}Im(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,nt=m):Im(n)}}function Im(n){for(;nt!==null;){var i=nt;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Xn||xl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Xn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Fi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Np(i,m,u);break;case 3:var C=i.updateQueue;if(C!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Np(i,C,o)}break;case 5:var z=i.stateNode;if(o===null&&i.flags&4){o=z;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var _e=i.alternate;if(_e!==null){var Pe=_e.memoizedState;if(Pe!==null){var Ie=Pe.dehydrated;Ie!==null&&ka(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Xn||i.flags&512&&$u(i)}catch(Ce){mn(i,i.return,Ce)}}if(i===n){nt=null;break}if(o=i.sibling,o!==null){o.return=i.return,nt=o;break}nt=i.return}}function Nm(n){for(;nt!==null;){var i=nt;if(i===n){nt=null;break}var o=i.sibling;if(o!==null){o.return=i.return,nt=o;break}nt=i.return}}function Dm(n){for(;nt!==null;){var i=nt;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{xl(4,i)}catch(X){mn(i,o,X)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(X){mn(i,f,X)}}var m=i.return;try{$u(i)}catch(X){mn(i,m,X)}break;case 5:var C=i.return;try{$u(i)}catch(X){mn(i,C,X)}}}catch(X){mn(i,i.return,X)}if(i===n){nt=null;break}var z=i.sibling;if(z!==null){z.return=i.return,nt=z;break}nt=i.return}}var q_=Math.ceil,Sl=T.ReactCurrentDispatcher,Zu=T.ReactCurrentOwner,bi=T.ReactCurrentBatchConfig,zt=0,In=null,Sn=null,Bn=0,vi=0,sa=kr(0),bn=0,oo=null,ms=0,Ml=0,Ju=0,lo=null,li=null,Qu=0,aa=1/0,gr=null,El=!1,ed=null,Wr=null,wl=!1,Xr=null,Al=0,co=0,td=null,bl=-1,Tl=0;function Qn(){return(zt&6)!==0?Qt():bl!==-1?bl:bl=Qt()}function jr(n){return(n.mode&1)===0?1:(zt&2)!==0&&Bn!==0?Bn&-Bn:I_.transition!==null?(Tl===0&&(Tl=dn()),Tl):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Fh(n.type)),n)}function Bi(n,i,o,u){if(50<co)throw co=0,td=null,Error(t(185));Jt(n,o,u),((zt&2)===0||n!==In)&&(n===In&&((zt&2)===0&&(Ml|=o),bn===4&&Yr(n,Bn)),ci(n,u),o===1&&zt===0&&(i.mode&1)===0&&(aa=Qt()+500,tl&&zr()))}function ci(n,i){var o=n.callbackNode;ct(n,i);var u=rt(n,n===In?Bn:0);if(u===0)o!==null&&Kn(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Kn(o),i===1)n.tag===0?L_(Fm.bind(null,n)):Sp(Fm.bind(null,n)),T_(function(){(zt&6)===0&&zr()}),o=null;else{switch(xn(u)){case 1:o=Pr;break;case 4:o=Lr;break;case 16:o=R;break;case 536870912:o=me;break;default:o=R}o=Wm(o,Um.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Um(n,i){if(bl=-1,Tl=0,(zt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(oa()&&n.callbackNode!==o)return null;var u=rt(n,n===In?Bn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Cl(n,u);else{i=u;var f=zt;zt|=2;var m=km();(In!==n||Bn!==i)&&(gr=null,aa=Qt()+500,vs(n,i));do try{J_();break}catch(z){Om(n,z)}while(!0);yu(),Sl.current=m,zt=f,Sn!==null?i=0:(In=null,Bn=0,i=bn)}if(i!==0){if(i===2&&(f=ft(n),f!==0&&(u=f,i=nd(n,f))),i===1)throw o=oo,vs(n,0),Yr(n,u),ci(n,Qt()),o;if(i===6)Yr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!K_(f)&&(i=Cl(n,u),i===2&&(m=ft(n),m!==0&&(u=m,i=nd(n,m))),i===1))throw o=oo,vs(n,0),Yr(n,u),ci(n,Qt()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:_s(n,li,gr);break;case 3:if(Yr(n,u),(u&130023424)===u&&(i=Qu+500-Qt(),10<i)){if(rt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Qn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=lu(_s.bind(null,n,li,gr),i);break}_s(n,li,gr);break;case 4:if(Yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var C=31-Ve(u);m=1<<C,C=i[C],C>f&&(f=C),u&=~m}if(u=f,u=Qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*q_(u/1960))-u,10<u){n.timeoutHandle=lu(_s.bind(null,n,li,gr),u);break}_s(n,li,gr);break;case 5:_s(n,li,gr);break;default:throw Error(t(329))}}}return ci(n,Qt()),n.callbackNode===o?Um.bind(null,n):null}function nd(n,i){var o=lo;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=Cl(n,i),n!==2&&(i=li,li=o,i!==null&&id(i)),n}function id(n){li===null?li=n:li.push.apply(li,n)}function K_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Di(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yr(n,i){for(i&=~Ju,i&=~Ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ve(i),u=1<<o;n[o]=-1,i&=~u}}function Fm(n){if((zt&6)!==0)throw Error(t(327));oa();var i=rt(n,0);if((i&1)===0)return ci(n,Qt()),null;var o=Cl(n,i);if(n.tag!==0&&o===2){var u=ft(n);u!==0&&(i=u,o=nd(n,u))}if(o===1)throw o=oo,vs(n,0),Yr(n,i),ci(n,Qt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,li,gr),ci(n,Qt()),null}function rd(n,i){var o=zt;zt|=1;try{return n(i)}finally{zt=o,zt===0&&(aa=Qt()+500,tl&&zr())}}function gs(n){Xr!==null&&Xr.tag===0&&(zt&6)===0&&oa();var i=zt;zt|=1;var o=bi.transition,u=ht;try{if(bi.transition=null,ht=1,n)return n()}finally{ht=u,bi.transition=o,zt=i,(zt&6)===0&&zr()}}function sd(){vi=sa.current,rn(sa)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,b_(o)),Sn!==null)for(o=Sn.return;o!==null;){var u=o;switch(pu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Qo();break;case 3:na(),rn(si),rn(Vn),Tu();break;case 5:Au(u);break;case 4:na();break;case 13:rn(fn);break;case 19:rn(fn);break;case 10:xu(u.type._context);break;case 22:case 23:sd()}o=o.return}if(In=n,Sn=n=$r(n.current,null),Bn=vi=i,bn=0,oo=null,Ju=Ml=ms=0,li=lo=null,fs!==null){for(i=0;i<fs.length;i++)if(o=fs[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,m=o.pending;if(m!==null){var C=m.next;m.next=f,u.next=C}o.pending=u}fs=null}return n}function Om(n,i){do{var o=Sn;try{if(yu(),dl.current=ml,fl){for(var u=hn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}fl=!1}if(ps=0,Ln=An=hn=null,to=!1,no=0,Zu.current=null,o===null||o.return===null){bn=1,oo=i,Sn=null;break}e:{var m=n,C=o.return,z=o,X=i;if(i=Bn,z.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var _e=X,Pe=z,Ie=Pe.tag;if((Pe.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Ce=Pe.alternate;Ce?(Pe.updateQueue=Ce.updateQueue,Pe.memoizedState=Ce.memoizedState,Pe.lanes=Ce.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Ze=lm(C);if(Ze!==null){Ze.flags&=-257,cm(Ze,C,z,m,i),Ze.mode&1&&om(m,_e,i),i=Ze,X=_e;var ot=i.updateQueue;if(ot===null){var lt=new Set;lt.add(X),i.updateQueue=lt}else ot.add(X);break e}else{if((i&1)===0){om(m,_e,i),ad();break e}X=Error(t(426))}}else if(on&&z.mode&1){var _n=lm(C);if(_n!==null){(_n.flags&65536)===0&&(_n.flags|=256),cm(_n,C,z,m,i),vu(ia(X,z));break e}}m=X=ia(X,z),bn!==4&&(bn=2),lo===null?lo=[m]:lo.push(m),m=C;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ue=sm(m,X,i);Ip(m,ue);break e;case 1:z=X;var Z=m.type,fe=m.stateNode;if((m.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Wr===null||!Wr.has(fe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ue=am(m,z,i);Ip(m,Ue);break e}}m=m.return}while(m!==null)}zm(o)}catch(ut){i=ut,Sn===o&&o!==null&&(Sn=o=o.return);continue}break}while(!0)}function km(){var n=Sl.current;return Sl.current=ml,n===null?ml:n}function ad(){(bn===0||bn===3||bn===2)&&(bn=4),In===null||(ms&268435455)===0&&(Ml&268435455)===0||Yr(In,Bn)}function Cl(n,i){var o=zt;zt|=2;var u=km();(In!==n||Bn!==i)&&(gr=null,vs(n,i));do try{Z_();break}catch(f){Om(n,f)}while(!0);if(yu(),zt=o,Sl.current=u,Sn!==null)throw Error(t(261));return In=null,Bn=0,bn}function Z_(){for(;Sn!==null;)Bm(Sn)}function J_(){for(;Sn!==null&&!Os();)Bm(Sn)}function Bm(n){var i=Hm(n.alternate,n,vi);n.memoizedProps=n.pendingProps,i===null?zm(n):Sn=i,Zu.current=null}function zm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=W_(o,i,vi),o!==null){Sn=o;return}}else{if(o=X_(o,i),o!==null){o.flags&=32767,Sn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bn=6,Sn=null;return}}if(i=i.sibling,i!==null){Sn=i;return}Sn=i=n}while(i!==null);bn===0&&(bn=5)}function _s(n,i,o){var u=ht,f=bi.transition;try{bi.transition=null,ht=1,Q_(n,i,o,u)}finally{bi.transition=f,ht=u}return null}function Q_(n,i,o,u){do oa();while(Xr!==null);if((zt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Pt(n,m),n===In&&(Sn=In=null,Bn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||wl||(wl=!0,Wm(R,function(){return oa(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=bi.transition,bi.transition=null;var C=ht;ht=1;var z=zt;zt|=4,Zu.current=null,Y_(n,o),Pm(o,n),y_(au),Bo=!!su,au=su=null,n.current=o,$_(o),ks(),zt=z,ht=C,bi.transition=m}else n.current=o;if(wl&&(wl=!1,Xr=n,Al=f),m=n.pendingLanes,m===0&&(Wr=null),We(o.stateNode),ci(n,Qt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(El)throw El=!1,n=ed,ed=null,n;return(Al&1)!==0&&n.tag!==0&&oa(),m=n.pendingLanes,(m&1)!==0?n===td?co++:(co=0,td=n):co=0,zr(),null}function oa(){if(Xr!==null){var n=xn(Al),i=bi.transition,o=ht;try{if(bi.transition=null,ht=16>n?16:n,Xr===null)var u=!1;else{if(n=Xr,Xr=null,Al=0,(zt&6)!==0)throw Error(t(331));var f=zt;for(zt|=4,nt=n.current;nt!==null;){var m=nt,C=m.child;if((nt.flags&16)!==0){var z=m.deletions;if(z!==null){for(var X=0;X<z.length;X++){var _e=z[X];for(nt=_e;nt!==null;){var Pe=nt;switch(Pe.tag){case 0:case 11:case 15:ao(8,Pe,m)}var Ie=Pe.child;if(Ie!==null)Ie.return=Pe,nt=Ie;else for(;nt!==null;){Pe=nt;var Ce=Pe.sibling,Ze=Pe.return;if(Am(Pe),Pe===_e){nt=null;break}if(Ce!==null){Ce.return=Ze,nt=Ce;break}nt=Ze}}}var ot=m.alternate;if(ot!==null){var lt=ot.child;if(lt!==null){ot.child=null;do{var _n=lt.sibling;lt.sibling=null,lt=_n}while(lt!==null)}}nt=m}}if((m.subtreeFlags&2064)!==0&&C!==null)C.return=m,nt=C;else e:for(;nt!==null;){if(m=nt,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ao(9,m,m.return)}var ue=m.sibling;if(ue!==null){ue.return=m.return,nt=ue;break e}nt=m.return}}var Z=n.current;for(nt=Z;nt!==null;){C=nt;var fe=C.child;if((C.subtreeFlags&2064)!==0&&fe!==null)fe.return=C,nt=fe;else e:for(C=Z;nt!==null;){if(z=nt,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:xl(9,z)}}catch(ut){mn(z,z.return,ut)}if(z===C){nt=null;break e}var Ue=z.sibling;if(Ue!==null){Ue.return=z.return,nt=Ue;break e}nt=z.return}}if(zt=f,zr(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ce,n)}catch{}u=!0}return u}finally{ht=o,bi.transition=i}}return!1}function Gm(n,i,o){i=ia(o,i),i=sm(n,i,1),n=Vr(n,i,1),i=Qn(),n!==null&&(Jt(n,1,i),ci(n,i))}function mn(n,i,o){if(n.tag===3)Gm(n,n,o);else for(;i!==null;){if(i.tag===3){Gm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Wr===null||!Wr.has(u))){n=ia(o,n),n=am(i,n,1),i=Vr(i,n,1),n=Qn(),i!==null&&(Jt(i,1,n),ci(i,n));break}}i=i.return}}function ey(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Qn(),n.pingedLanes|=n.suspendedLanes&o,In===n&&(Bn&o)===o&&(bn===4||bn===3&&(Bn&130023424)===Bn&&500>Qt()-Qu?vs(n,0):Ju|=o),ci(n,i)}function Vm(n,i){i===0&&((n.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var o=Qn();n=hr(n,i),n!==null&&(Jt(n,i,o),ci(n,o))}function ty(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Vm(n,o)}function ny(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Vm(n,o)}var Hm;Hm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||si.current)oi=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return oi=!1,H_(n,i,o);oi=(n.flags&131072)!==0}else oi=!1,on&&(i.flags&1048576)!==0&&Mp(i,il,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;_l(n,i),n=i.pendingProps;var f=qs(i,Vn.current);ta(i,o),f=Pu(null,i,u,n,f,o);var m=Lu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ai(u)?(m=!0,el(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Eu(i),f.updater=gl,i.stateNode=f,f._reactInternals=i,Ou(i,u,n,o),i=Gu(null,i,u,!0,m,o)):(i.tag=0,on&&m&&hu(i),Jn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(_l(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=ry(u),n=Fi(u,n),f){case 0:i=zu(null,i,u,n,o);break e;case 1:i=mm(null,i,u,n,o);break e;case 11:i=um(null,i,u,n,o);break e;case 14:i=dm(null,i,u,Fi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Fi(u,f),zu(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Fi(u,f),mm(n,i,u,f,o);case 3:e:{if(gm(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,f=m.element,Lp(n,i),cl(i,u,null,o);var C=i.memoizedState;if(u=C.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ia(Error(t(423)),i),i=vm(n,i,u,o,f);break e}else if(u!==f){f=ia(Error(t(424)),i),i=vm(n,i,u,o,f);break e}else for(gi=Or(i.stateNode.containerInfo.firstChild),mi=i,on=!0,Ui=null,o=Rp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Js(),u===f){i=mr(n,i,o);break e}Jn(n,i,u,o)}i=i.child}return i;case 5:return Dp(i),n===null&&gu(i),u=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,C=f.children,ou(u,f)?C=null:m!==null&&ou(u,m)&&(i.flags|=32),pm(n,i),Jn(n,i,C,o),i.child;case 6:return n===null&&gu(i),null;case 13:return _m(n,i,o);case 4:return wu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Qs(i,null,u,o):Jn(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Fi(u,f),um(n,i,u,f,o);case 7:return Jn(n,i,i.pendingProps,o),i.child;case 8:return Jn(n,i,i.pendingProps.children,o),i.child;case 12:return Jn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,C=f.value,en(al,u._currentValue),u._currentValue=C,m!==null)if(Di(m.value,C)){if(m.children===f.children&&!si.current){i=mr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var z=m.dependencies;if(z!==null){C=m.child;for(var X=z.firstContext;X!==null;){if(X.context===u){if(m.tag===1){X=pr(-1,o&-o),X.tag=2;var _e=m.updateQueue;if(_e!==null){_e=_e.shared;var Pe=_e.pending;Pe===null?X.next=X:(X.next=Pe.next,Pe.next=X),_e.pending=X}}m.lanes|=o,X=m.alternate,X!==null&&(X.lanes|=o),Su(m.return,o,i),z.lanes|=o;break}X=X.next}}else if(m.tag===10)C=m.type===i.type?null:m.child;else if(m.tag===18){if(C=m.return,C===null)throw Error(t(341));C.lanes|=o,z=C.alternate,z!==null&&(z.lanes|=o),Su(C,o,i),C=m.sibling}else C=m.child;if(C!==null)C.return=m;else for(C=m;C!==null;){if(C===i){C=null;break}if(m=C.sibling,m!==null){m.return=C.return,C=m;break}C=C.return}m=C}Jn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,ta(i,o),f=wi(f),u=u(f),i.flags|=1,Jn(n,i,u,o),i.child;case 14:return u=i.type,f=Fi(u,i.pendingProps),f=Fi(u.type,f),dm(n,i,u,f,o);case 15:return fm(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Fi(u,f),_l(n,i),i.tag=1,ai(u)?(n=!0,el(i)):n=!1,ta(i,o),im(i,u,f),Ou(i,u,f,o),Gu(null,i,u,!0,n,o);case 19:return xm(n,i,o);case 22:return hm(n,i,o)}throw Error(t(156,i.tag))};function Wm(n,i){return Ii(n,i)}function iy(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(n,i,o,u){return new iy(n,i,o,u)}function od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ry(n){if(typeof n=="function")return od(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===q)return 14}return 2}function $r(n,i){var o=n.alternate;return o===null?(o=Ti(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Rl(n,i,o,u,f,m){var C=2;if(u=n,typeof n=="function")od(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case U:return ys(o.children,f,m,i);case w:C=8,f|=8;break;case N:return n=Ti(12,o,i,f|2),n.elementType=N,n.lanes=m,n;case J:return n=Ti(13,o,i,f),n.elementType=J,n.lanes=m,n;case B:return n=Ti(19,o,i,f),n.elementType=B,n.lanes=m,n;case oe:return Pl(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:C=10;break e;case G:C=9;break e;case H:C=11;break e;case q:C=14;break e;case pe:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ti(C,o,i,f),i.elementType=n,i.type=u,i.lanes=m,i}function ys(n,i,o,u){return n=Ti(7,n,u,i),n.lanes=o,n}function Pl(n,i,o,u){return n=Ti(22,n,u,i),n.elementType=oe,n.lanes=o,n.stateNode={isHidden:!1},n}function ld(n,i,o){return n=Ti(6,n,null,i),n.lanes=o,n}function cd(n,i,o){return i=Ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function sy(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ye(0),this.expirationTimes=Ye(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ud(n,i,o,u,f,m,C,z,X){return n=new sy(n,i,o,z,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(m),n}function ay(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Xm(n){if(!n)return Br;n=n._reactInternals;e:{if(un(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ai(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(ai(o))return yp(n,o,i)}return i}function jm(n,i,o,u,f,m,C,z,X){return n=ud(o,u,!0,n,f,m,C,z,X),n.context=Xm(null),o=n.current,u=Qn(),f=jr(o),m=pr(u,f),m.callback=i??null,Vr(o,m,f),n.current.lanes=f,Jt(n,f,u),ci(n,u),n}function Ll(n,i,o,u){var f=i.current,m=Qn(),C=jr(f);return o=Xm(o),i.context===null?i.context=o:i.pendingContext=o,i=pr(m,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Vr(f,i,C),n!==null&&(Bi(n,f,C,m),ll(n,f,C)),C}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ym(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function dd(n,i){Ym(n,i),(n=n.alternate)&&Ym(n,i)}function oy(){return null}var $m=typeof reportError=="function"?reportError:function(n){console.error(n)};function fd(n){this._internalRoot=n}Nl.prototype.render=fd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ll(n,i,null,null)},Nl.prototype.unmount=fd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){Ll(null,n,null,null)}),i[cr]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=hi();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Dr.length&&i!==0&&i<Dr[o].priority;o++);Dr.splice(o,0,n),o===0&&Dh(n)}};function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qm(){}function ly(n,i,o,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var _e=Il(C);m.call(_e)}}var C=jm(i,u,n,0,null,!1,!1,"",qm);return n._reactRootContainer=C,n[cr]=C.current,Ya(n.nodeType===8?n.parentNode:n),gs(),C}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var z=u;u=function(){var _e=Il(X);z.call(_e)}}var X=ud(n,0,!1,null,null,!1,!1,"",qm);return n._reactRootContainer=X,n[cr]=X.current,Ya(n.nodeType===8?n.parentNode:n),gs(function(){Ll(i,X,o,u)}),X}function Ul(n,i,o,u,f){var m=o._reactRootContainer;if(m){var C=m;if(typeof f=="function"){var z=f;f=function(){var X=Il(C);z.call(X)}}Ll(i,C,n,f)}else C=ly(o,i,n,f,u);return Il(C)}Gn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ae(i.pendingLanes);o!==0&&(wn(i,o|1),ci(i,Qt()),(zt&6)===0&&(aa=Qt()+500,zr()))}break;case 13:gs(function(){var u=hr(n,1);if(u!==null){var f=Qn();Bi(u,n,1,f)}}),dd(n,1)}},Nt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var o=Qn();Bi(i,n,134217728,o)}dd(n,134217728)}},jt=function(n){if(n.tag===13){var i=jr(n),o=hr(n,i);if(o!==null){var u=Qn();Bi(o,n,i,u)}dd(n,i)}},hi=function(){return ht},Ot=function(n,i){var o=ht;try{return ht=n,i()}finally{ht=o}},ve=function(n,i,o){switch(i){case"input":if(Et(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=Jo(u);if(!f)throw Error(t(90));_t(u),Et(u,f)}}}break;case"textarea":Zt(n,o);break;case"select":i=o.value,i!=null&&wt(n,!!o.multiple,i,!1)}},he=rd,de=gs;var cy={usingClientEntryPoint:!1,Events:[Ka,Ys,Jo,ye,Q,rd]},uo={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uy={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$i(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{ce=Fl.inject(uy),se=Fl}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy,ui.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(i))throw Error(t(200));return ay(n,i,null,o)},ui.createRoot=function(n,i){if(!hd(n))throw Error(t(299));var o=!1,u="",f=$m;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ud(n,1,!1,null,null,o,!1,u,f),n[cr]=i.current,Ya(n.nodeType===8?n.parentNode:n),new fd(i)},ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=$i(i),n=n===null?null:n.stateNode,n},ui.flushSync=function(n){return gs(n)},ui.hydrate=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ul(null,n,i,!0,o)},ui.hydrateRoot=function(n,i,o){if(!hd(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,m="",C=$m;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),i=jm(i,null,n,1,o??null,f,!1,m,C),n[cr]=i.current,Ya(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Nl(i)},ui.render=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ul(null,n,i,!1,o)},ui.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},ui.unstable_batchedUpdates=rd,ui.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,i,o,!1,u)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var ig;function _y(){if(ig)return gd.exports;ig=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),gd.exports=vy(),gd.exports}var rg;function yy(){if(rg)return Ol;rg=1;var s=_y();return Ol.createRoot=s.createRoot,Ol.hydrateRoot=s.hydrateRoot,Ol}var xy=yy();const Sy=F0(xy);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ey={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=Fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},h)=>Fe.createElement("svg",{ref:h,...Ey,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:k0("lucide",a),...d},[...c.map(([p,v])=>Fe.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(s,e)=>{const t=Fe.forwardRef(({className:r,...a},l)=>Fe.createElement(wy,{ref:l,iconNode:e,className:k0(`lucide-${My(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ln("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=ln("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=ln("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=ln("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ln("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ln("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=ln("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=ln("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ln("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ln("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ln("Puzzle",[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ln("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=ln("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ln("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ln("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=ln("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ln("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ln("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ln("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=ln("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ln("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=ln("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=ln("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ln("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),G0=[{iso:"AR",name:"Argentina",region:"America",continent:"SA",city:"Buenos Aires",hasStreaming:!0,serverCount:8,gatewayIp:"190.211.255.181",basePingMs:148,coordinates:{lat:-34.6037,lng:-58.3816}},{iso:"BO",name:"Bolivia",region:"America",continent:"SA",city:"Santa Cruz",hasStreaming:!1,serverCount:3,gatewayIp:"200.105.192.9",basePingMs:162,coordinates:{lat:-17.7833,lng:-63.1821}},{iso:"BR",name:"Brazil",region:"America",continent:"SA",city:"São Paulo",hasStreaming:!0,serverCount:16,gatewayIp:"212.119.37.60",basePingMs:134,coordinates:{lat:-23.5505,lng:-46.6333}},{iso:"CA",name:"Canada",region:"America",continent:"NA",city:"Montreal",hasStreaming:!0,serverCount:28,gatewayIp:"45.87.213.210",basePingMs:58,coordinates:{lat:45.5017,lng:-73.5673}},{iso:"CL",name:"Chile",region:"America",continent:"SA",city:"Santiago",hasStreaming:!0,serverCount:6,gatewayIp:"45.239.210.181",basePingMs:152,coordinates:{lat:-33.4489,lng:-70.6693}},{iso:"CO",name:"Colombia",region:"America",continent:"SA",city:"Bogotá",hasStreaming:!1,serverCount:6,gatewayIp:"45.238.181.213",basePingMs:118,coordinates:{lat:4.711,lng:-74.0721}},{iso:"CR",name:"Costa Rica",region:"America",continent:"NA",city:"San José",hasStreaming:!1,serverCount:4,gatewayIp:"38.52.32.226",basePingMs:108,coordinates:{lat:9.9281,lng:-84.0907}},{iso:"EC",name:"Ecuador",region:"America",continent:"SA",city:"Guayaquil",hasStreaming:!1,serverCount:4,gatewayIp:"45.188.76.84",basePingMs:126,coordinates:{lat:-2.1894,lng:-79.8891}},{iso:"GT",name:"Guatemala",region:"America",continent:"NA",city:"Guatemala City",hasStreaming:!1,serverCount:3,gatewayIp:"209.14.80.171",basePingMs:104,coordinates:{lat:14.6349,lng:-90.5069}},{iso:"MX",name:"Mexico",region:"America",continent:"NA",city:"Mexico City",hasStreaming:!0,serverCount:12,gatewayIp:"45.188.78.234",basePingMs:82,coordinates:{lat:19.4326,lng:-99.1332}},{iso:"NI",name:"Nicaragua",region:"America",continent:"NA",city:"Managua",hasStreaming:!1,serverCount:3,gatewayIp:"200.62.66.66",basePingMs:114,coordinates:{lat:12.115,lng:-86.2362}},{iso:"PA",name:"Panama",region:"America",continent:"NA",city:"Panama City",hasStreaming:!1,serverCount:5,gatewayIp:"38.51.148.2",basePingMs:98,coordinates:{lat:8.9824,lng:-79.5199}},{iso:"PY",name:"Paraguay",region:"America",continent:"SA",city:"Asunción",hasStreaming:!1,serverCount:3,gatewayIp:"38.43.130.66",basePingMs:156,coordinates:{lat:-25.2637,lng:-57.5759}},{iso:"PE",name:"Peru",region:"America",continent:"SA",city:"Lima",hasStreaming:!1,serverCount:5,gatewayIp:"38.250.159.170",basePingMs:138,coordinates:{lat:-12.0464,lng:-77.0428}},{iso:"PR",name:"Puerto Rico",region:"America",continent:"NA",city:"San Juan",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.207.2",basePingMs:86,coordinates:{lat:18.4655,lng:-66.1057}},{iso:"US",name:"United States",region:"America",continent:"NA",city:"New York, NY",hasStreaming:!0,serverCount:74,gatewayIp:"86.106.92.149",basePingMs:42,coordinates:{lat:40.7128,lng:-74.006}},{iso:"UY",name:"Uruguay",region:"America",continent:"SA",city:"Montevideo",hasStreaming:!1,serverCount:4,gatewayIp:"190.112.207.181",basePingMs:151,coordinates:{lat:-34.9011,lng:-56.1645}},{iso:"AU",name:"Australia",region:"Asia & Oceania",continent:"OC",city:"Melbourne",hasStreaming:!0,serverCount:22,gatewayIp:"103.108.229.219",basePingMs:112,coordinates:{lat:-37.8136,lng:144.9631}},{iso:"HK",name:"Hong Kong",region:"Asia & Oceania",continent:"AS",city:"Hong Kong SAR",hasStreaming:!0,serverCount:14,gatewayIp:"146.70.204.2",basePingMs:54,coordinates:{lat:22.3193,lng:114.1694}},{iso:"IN",name:"India",region:"Asia & Oceania",continent:"AS",city:"Mumbai",hasStreaming:!0,serverCount:18,gatewayIp:"103.142.161.242",basePingMs:38,coordinates:{lat:19.076,lng:72.8777}},{iso:"ID",name:"Indonesia",region:"Asia & Oceania",continent:"AS",city:"Jakarta",hasStreaming:!1,serverCount:8,gatewayIp:"103.126.116.58",basePingMs:52,coordinates:{lat:-6.2088,lng:106.8456}},{iso:"JP",name:"Japan",region:"Asia & Oceania",continent:"AS",city:"Tokyo",hasStreaming:!0,serverCount:26,gatewayIp:"85.131.255.20",basePingMs:68,coordinates:{lat:35.6762,lng:139.6503}},{iso:"KZ",name:"Kazakhstan",region:"Asia & Oceania",continent:"AS",city:"Almaty",hasStreaming:!1,serverCount:4,gatewayIp:"185.129.50.251",basePingMs:88,coordinates:{lat:43.222,lng:76.8512}},{iso:"KG",name:"Kyrgyzstan",region:"Asia & Oceania",continent:"AS",city:"Bishkek",hasStreaming:!1,serverCount:3,gatewayIp:"109.71.224.229",basePingMs:94,coordinates:{lat:42.8746,lng:74.5698}},{iso:"MY",name:"Malaysia",region:"Asia & Oceania",continent:"AS",city:"Kuala Lumpur",hasStreaming:!0,serverCount:9,gatewayIp:"111.90.141.10",basePingMs:44,coordinates:{lat:3.139,lng:101.6869}},{iso:"MN",name:"Mongolia",region:"Asia & Oceania",continent:"AS",city:"Ulaanbaatar",hasStreaming:!1,serverCount:3,gatewayIp:"202.5.205.51",basePingMs:99,coordinates:{lat:47.8864,lng:106.9057}},{iso:"NZ",name:"New Zealand",region:"Asia & Oceania",continent:"OC",city:"Auckland",hasStreaming:!0,serverCount:8,gatewayIp:"146.70.205.130",basePingMs:128,coordinates:{lat:-36.8485,lng:174.7633}},{iso:"PK",name:"Pakistan",region:"Asia & Oceania",continent:"AS",city:"Islamabad",hasStreaming:!1,serverCount:5,gatewayIp:"38.54.17.50",basePingMs:62,coordinates:{lat:33.6844,lng:73.0479}},{iso:"PH",name:"Philippines",region:"Asia & Oceania",continent:"AS",city:"Manila",hasStreaming:!1,serverCount:7,gatewayIp:"109.104.155.146",basePingMs:64,coordinates:{lat:14.5995,lng:120.9842}},{iso:"SG",name:"Singapore",region:"Asia & Oceania",continent:"AS",city:"Singapore",hasStreaming:!0,serverCount:24,gatewayIp:"146.70.198.130",basePingMs:34,coordinates:{lat:1.3521,lng:103.8198}},{iso:"KR",name:"South Korea",region:"Asia & Oceania",continent:"AS",city:"Seoul",hasStreaming:!0,serverCount:14,gatewayIp:"108.181.50.35",basePingMs:72,coordinates:{lat:37.5665,lng:126.978}},{iso:"LK",name:"Sri Lanka",region:"Asia & Oceania",continent:"AS",city:"Colombo",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.229.138",basePingMs:42,coordinates:{lat:6.9271,lng:79.8612}},{iso:"TW",name:"Taiwan",region:"Asia & Oceania",continent:"AS",city:"Taipei",hasStreaming:!0,serverCount:10,gatewayIp:"103.124.72.14",basePingMs:61,coordinates:{lat:25.033,lng:121.5654}},{iso:"TH",name:"Thailand",region:"Asia & Oceania",continent:"AS",city:"Bangkok",hasStreaming:!1,serverCount:8,gatewayIp:"27.254.132.163",basePingMs:46,coordinates:{lat:13.7563,lng:100.5018}},{iso:"VN",name:"Vietnam",region:"Asia & Oceania",continent:"AS",city:"Hanoi",hasStreaming:!1,serverCount:7,gatewayIp:"103.186.64.250",basePingMs:56,coordinates:{lat:21.0278,lng:105.8342}},{iso:"DZ",name:"Algeria",region:"Europe, Middle East & Africa",continent:"AF",city:"Algiers",hasStreaming:!1,serverCount:3,gatewayIp:"102.216.178.10",basePingMs:112,coordinates:{lat:36.7538,lng:3.0588}},{iso:"AT",name:"Austria",region:"Europe, Middle East & Africa",continent:"EU",city:"Vienna",hasStreaming:!0,serverCount:10,gatewayIp:"185.202.222.244",basePingMs:79,coordinates:{lat:48.2082,lng:16.3738}},{iso:"BY",name:"Belarus",region:"Europe, Middle East & Africa",continent:"EU",city:"Minsk",hasStreaming:!1,serverCount:3,gatewayIp:"95.169.180.52",basePingMs:92,coordinates:{lat:53.9006,lng:27.559}},{iso:"BE",name:"Belgium",region:"Europe, Middle East & Africa",continent:"EU",city:"Brussels",hasStreaming:!0,serverCount:10,gatewayIp:"185.216.33.175",basePingMs:76,coordinates:{lat:50.8503,lng:4.3517}},{iso:"BG",name:"Bulgaria",region:"Europe, Middle East & Africa",continent:"EU",city:"Sofia",hasStreaming:!1,serverCount:8,gatewayIp:"185.216.34.81",basePingMs:84,coordinates:{lat:42.6977,lng:23.3219}},{iso:"HR",name:"Croatia",region:"Europe, Middle East & Africa",continent:"EU",city:"Zagreb",hasStreaming:!1,serverCount:5,gatewayIp:"193.37.68.18",basePingMs:82,coordinates:{lat:45.815,lng:15.9819}},{iso:"CY",name:"Cyprus",region:"Europe, Middle East & Africa",continent:"EU",city:"Nicosia",hasStreaming:!1,serverCount:4,gatewayIp:"213.209.159.170",basePingMs:91,coordinates:{lat:35.1856,lng:33.3823}},{iso:"CZ",name:"Czech Republic",region:"Europe, Middle East & Africa",continent:"EU",city:"Prague",hasStreaming:!0,serverCount:10,gatewayIp:"185.102.219.166",basePingMs:78,coordinates:{lat:50.0755,lng:14.4378}},{iso:"DK",name:"Denmark",region:"Europe, Middle East & Africa",continent:"EU",city:"Copenhagen",hasStreaming:!0,serverCount:10,gatewayIp:"185.204.1.228",basePingMs:81,coordinates:{lat:55.6761,lng:12.5683}},{iso:"EG",name:"Egypt",region:"Europe, Middle East & Africa",continent:"AF",city:"Cairo",hasStreaming:!1,serverCount:5,gatewayIp:"38.54.117.163",basePingMs:95,coordinates:{lat:30.0444,lng:31.2357}},{iso:"EE",name:"Estonia",region:"Europe, Middle East & Africa",continent:"EU",city:"Tallinn",hasStreaming:!1,serverCount:5,gatewayIp:"185.158.113.213",basePingMs:86,coordinates:{lat:59.437,lng:24.7536}},{iso:"FI",name:"Finland",region:"Europe, Middle East & Africa",continent:"EU",city:"Helsinki",hasStreaming:!0,serverCount:9,gatewayIp:"185.216.35.91",basePingMs:87,coordinates:{lat:60.1699,lng:24.9384}},{iso:"FR",name:"France",region:"Europe, Middle East & Africa",continent:"EU",city:"Paris",hasStreaming:!0,serverCount:28,gatewayIp:"185.246.211.124",basePingMs:74,coordinates:{lat:48.8566,lng:2.3522}},{iso:"GE",name:"Georgia",region:"Europe, Middle East & Africa",continent:"EU",city:"Tbilisi",hasStreaming:!1,serverCount:4,gatewayIp:"188.93.91.2",basePingMs:87,coordinates:{lat:41.7151,lng:44.8271}},{iso:"DE",name:"Germany",region:"Europe, Middle East & Africa",continent:"EU",city:"Frankfurt",hasStreaming:!0,serverCount:38,gatewayIp:"45.14.194.242",basePingMs:71,coordinates:{lat:50.1109,lng:8.6821}},{iso:"GR",name:"Greece",region:"Europe, Middle East & Africa",continent:"EU",city:"Athens",hasStreaming:!1,serverCount:6,gatewayIp:"185.209.228.59",basePingMs:88,coordinates:{lat:37.9838,lng:23.7275}},{iso:"HU",name:"Hungary",region:"Europe, Middle East & Africa",continent:"EU",city:"Budapest",hasStreaming:!1,serverCount:7,gatewayIp:"194.36.110.22",basePingMs:80,coordinates:{lat:47.4979,lng:19.0402}},{iso:"IS",name:"Iceland",region:"Europe, Middle East & Africa",continent:"EU",city:"Reykjavik",hasStreaming:!1,serverCount:4,gatewayIp:"37.235.49.36",basePingMs:96,coordinates:{lat:64.1466,lng:-21.9426}},{iso:"IE",name:"Ireland",region:"Europe, Middle East & Africa",continent:"EU",city:"Dublin",hasStreaming:!0,serverCount:12,gatewayIp:"193.118.52.238",basePingMs:79,coordinates:{lat:53.3498,lng:-6.2603}},{iso:"IL",name:"Israel",region:"Europe, Middle East & Africa",continent:"AS",city:"Tel Aviv",hasStreaming:!0,serverCount:9,gatewayIp:"45.80.93.249",basePingMs:89,coordinates:{lat:32.0853,lng:34.7818}},{iso:"IT",name:"Italy",region:"Europe, Middle East & Africa",continent:"EU",city:"Milan",hasStreaming:!0,serverCount:18,gatewayIp:"146.70.193.130",basePingMs:77,coordinates:{lat:45.4642,lng:9.19}},{iso:"JO",name:"Jordan",region:"Europe, Middle East & Africa",continent:"AS",city:"Amman",hasStreaming:!1,serverCount:3,gatewayIp:"188.247.92.186",basePingMs:94,coordinates:{lat:31.9454,lng:35.9284}},{iso:"KE",name:"Kenya",region:"Europe, Middle East & Africa",continent:"AF",city:"Nairobi",hasStreaming:!1,serverCount:4,gatewayIp:"102.68.86.97",basePingMs:116,coordinates:{lat:-1.2921,lng:36.8219}},{iso:"KW",name:"Kuwait",region:"Europe, Middle East & Africa",continent:"AS",city:"Kuwait City",hasStreaming:!1,serverCount:4,gatewayIp:"38.54.124.170",basePingMs:78,coordinates:{lat:29.3759,lng:47.9774}},{iso:"LV",name:"Latvia",region:"Europe, Middle East & Africa",continent:"EU",city:"Riga",hasStreaming:!1,serverCount:5,gatewayIp:"89.111.52.71",basePingMs:85,coordinates:{lat:56.9496,lng:24.1052}},{iso:"LT",name:"Lithuania",region:"Europe, Middle East & Africa",continent:"EU",city:"Vilnius",hasStreaming:!1,serverCount:5,gatewayIp:"185.203.119.225",basePingMs:84,coordinates:{lat:54.6872,lng:25.2797}},{iso:"LU",name:"Luxembourg",region:"Europe, Middle East & Africa",continent:"EU",city:"Luxembourg City",hasStreaming:!1,serverCount:6,gatewayIp:"146.70.119.98",basePingMs:75,coordinates:{lat:49.6116,lng:6.1319}},{iso:"MT",name:"Malta",region:"Europe, Middle East & Africa",continent:"EU",city:"Valletta",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.141.66",basePingMs:86,coordinates:{lat:35.8989,lng:14.5146}},{iso:"MA",name:"Morocco",region:"Europe, Middle East & Africa",continent:"AF",city:"Rabat",hasStreaming:!1,serverCount:4,gatewayIp:"105.66.135.42",basePingMs:102,coordinates:{lat:34.0209,lng:-6.8416}},{iso:"NL",name:"Netherlands",region:"Europe, Middle East & Africa",continent:"EU",city:"Amsterdam",hasStreaming:!0,serverCount:34,gatewayIp:"185.107.56.140",basePingMs:72,coordinates:{lat:52.3676,lng:4.9041}},{iso:"NG",name:"Nigeria",region:"Europe, Middle East & Africa",continent:"AF",city:"Lagos",hasStreaming:!1,serverCount:4,gatewayIp:"169.255.57.58",basePingMs:124,coordinates:{lat:6.5244,lng:3.3792}},{iso:"NO",name:"Norway",region:"Europe, Middle East & Africa",continent:"EU",city:"Sandefjord",hasStreaming:!0,serverCount:10,gatewayIp:"185.181.61.141",basePingMs:83,coordinates:{lat:59.1312,lng:10.2167}},{iso:"PL",name:"Poland",region:"Europe, Middle East & Africa",continent:"EU",city:"Warsaw",hasStreaming:!0,serverCount:14,gatewayIp:"185.243.56.185",basePingMs:79,coordinates:{lat:52.2297,lng:21.0122}},{iso:"PT",name:"Portugal",region:"Europe, Middle East & Africa",continent:"EU",city:"Lisbon",hasStreaming:!1,serverCount:7,gatewayIp:"185.240.244.45",basePingMs:85,coordinates:{lat:38.7223,lng:-9.1393}},{iso:"RO",name:"Romania",region:"Europe, Middle East & Africa",continent:"EU",city:"Bucharest",hasStreaming:!0,serverCount:16,gatewayIp:"146.70.125.134",basePingMs:82,coordinates:{lat:44.4268,lng:26.1025}},{iso:"RU",name:"Russia",region:"Europe, Middle East & Africa",continent:"EU",city:"Moscow",hasStreaming:!1,serverCount:8,gatewayIp:"146.70.231.130",basePingMs:90,coordinates:{lat:55.7558,lng:37.6173}},{iso:"RS",name:"Serbia",region:"Europe, Middle East & Africa",continent:"EU",city:"Belgrade",hasStreaming:!1,serverCount:6,gatewayIp:"83.143.82.62",basePingMs:83,coordinates:{lat:44.7866,lng:20.4489}},{iso:"SK",name:"Slovakia",region:"Europe, Middle East & Africa",continent:"EU",city:"Bratislava",hasStreaming:!1,serverCount:5,gatewayIp:"185.205.245.55",basePingMs:80,coordinates:{lat:48.1486,lng:17.1077}},{iso:"SI",name:"Slovenia",region:"Europe, Middle East & Africa",continent:"EU",city:"Ljubljana",hasStreaming:!1,serverCount:4,gatewayIp:"188.214.126.134",basePingMs:81,coordinates:{lat:46.0569,lng:14.5058}},{iso:"ZA",name:"South Africa",region:"Europe, Middle East & Africa",continent:"AF",city:"Johannesburg",hasStreaming:!0,serverCount:8,gatewayIp:"102.130.113.105",basePingMs:142,coordinates:{lat:-26.2041,lng:28.0473}},{iso:"ES",name:"Spain",region:"Europe, Middle East & Africa",continent:"EU",city:"Madrid",hasStreaming:!0,serverCount:16,gatewayIp:"185.253.97.205",basePingMs:81,coordinates:{lat:40.4168,lng:-3.7038}},{iso:"SE",name:"Sweden",region:"Europe, Middle East & Africa",continent:"EU",city:"Stockholm",hasStreaming:!0,serverCount:14,gatewayIp:"185.213.154.170",basePingMs:83,coordinates:{lat:59.3293,lng:18.0686}},{iso:"CH",name:"Switzerland",region:"Europe, Middle East & Africa",continent:"EU",city:"Zurich",hasStreaming:!0,serverCount:16,gatewayIp:"185.246.208.73",basePingMs:75,coordinates:{lat:47.3769,lng:8.5417}},{iso:"TR",name:"Turkey",region:"Europe, Middle East & Africa",continent:"EU",city:"Istanbul",hasStreaming:!0,serverCount:10,gatewayIp:"185.126.178.79",basePingMs:86,coordinates:{lat:41.0082,lng:28.9784}},{iso:"UA",name:"Ukraine",region:"Europe, Middle East & Africa",continent:"EU",city:"Kyiv",hasStreaming:!1,serverCount:7,gatewayIp:"185.246.209.251",basePingMs:88,coordinates:{lat:50.4501,lng:30.5234}},{iso:"AE",name:"United Arab Emirates",region:"Europe, Middle East & Africa",continent:"AS",city:"Dubai",hasStreaming:!0,serverCount:12,gatewayIp:"146.70.189.2",basePingMs:68,coordinates:{lat:25.2048,lng:55.2708}},{iso:"GB",name:"United Kingdom",region:"Europe, Middle East & Africa",continent:"EU",city:"London",hasStreaming:!0,serverCount:42,gatewayIp:"149.102.244.142",basePingMs:73,coordinates:{lat:51.5074,lng:-.1278}}],af={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AX:"Aland Islands",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",BQ:"Caribbean Netherlands",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function V0(s){const e=s.charCodeAt(0)||85,t=s.charCodeAt(1)||83;return`GarudaLinkX_${s}_NodeKey2026_${(e*31+t*17).toString(16).padStart(4,"0")}==`.slice(0,44).padEnd(44,"=")}function zy(s){switch(s){case"NA":case"SA":return{isp:"Garuda Infinity / Datacamp Limited",asn:"AS60068 Datacamp Limited"};case"AS":case"OC":return{isp:"Garuda Infinity / M247 Asia-Pacific",asn:"AS9009 M247 Europe SRL"};default:return{isp:"Garuda Infinity / M247 Ltd",asn:"AS9009 M247 Europe SRL"}}}function ih(s,e=0){const t=(s||"US").toUpperCase(),r=G0.find(p=>p.iso===t);if(r){if(e===0)return r.gatewayIp;const p=r.gatewayIp.split(".").map(Number),v=(p[3]+e*7)%240+10;return`${p[0]}.${p[1]}.${p[2]}.${v}`}const a=t.charCodeAt(0)||65,l=t.charCodeAt(1)||66,c=(a*3+l)%200+20,d=(a*7+l*5)%220+15,h=(a*11+l*13+e*7)%230+12;return`185.${c}.${d}.${h}`}function H0(s,e=!1){const t=s.iso.toUpperCase(),r=t.toLowerCase(),a=zy(s.continent||"EU");return{iso:t,isoLower:r,name:s.name||af[t]||t,region:s.region||"Europe, Middle East & Africa",continent:s.continent||"EU",city:s.city||`${s.name||af[t]||t} Gateway`,hasStreaming:!!s.hasStreaming,streamingOptimized:!!s.hasStreaming,hasLiveGateway:!e,serverCount:s.serverCount||2,gatewayIp:s.gatewayIp||ih(t,0),isp:s.isp||a.isp,asn:s.asn||a.asn,basePingMs:s.basePingMs||85,coordinates:s.coordinates||{lat:25,lng:18},wgPublicKey:V0(t),endpointHost:`${r}-wg01.garudainfinity.net`,isExtendedLocation:e}}const rh=G0.map(s=>H0(s,!1)).sort((s,e)=>s.name.localeCompare(e.name)),Gy=new Set(rh.map(s=>s.iso)),Vy={BD:{city:"Dhaka",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.145.72.94",basePingMs:24,serverCount:4,coordinates:{lat:23.8103,lng:90.4125}},GH:{city:"Accra",region:"Europe, Middle East & Africa",continent:"AF",gatewayIp:"169.255.56.147",basePingMs:118,serverCount:3,coordinates:{lat:5.6037,lng:-.187}},NP:{city:"Kathmandu",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.139.64.38",basePingMs:36,serverCount:3,coordinates:{lat:27.7172,lng:85.324}},KH:{city:"Phnom Penh",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.133.120.71",basePingMs:52,serverCount:3,coordinates:{lat:11.5564,lng:104.9282}}},Hy=[...rh,...Object.entries(af).filter(([s])=>!Gy.has(s)).map(([s,e])=>{const t=Vy[s]||{},r=s.charCodeAt(0)||65,a=s.charCodeAt(1)||66;return H0({iso:s,name:e,region:t.region||"Global Extended Network",continent:t.continent||"EU",city:t.city||`${e} Edge Relay`,hasStreaming:!1,serverCount:t.serverCount||2,gatewayIp:t.gatewayIp||ih(s,0),basePingMs:t.basePingMs||60+(r*5+a*3)%75,coordinates:t.coordinates||{lat:r*7%100-40,lng:a*13%280-140}},!0)})].sort((s,e)=>s.name.localeCompare(e.name));function Mc(s){return`/resources/icons/flags/ic_flag_${(s||"unknown").toLowerCase()}.webp`}function W0(s){if(!s)return null;const e=s.toUpperCase();return Hy.find(t=>t.iso===e)||null}const dg=rh;function fg(s,e="WireGuard"){const t=typeof s=="string"?W0(s):s,r=((t==null?void 0:t.iso)||"US").toUpperCase(),a=String(e).toLowerCase().includes("openvpn"),l=String(e).toLowerCase().includes("tcp"),c=`GarudaClient_${r}_2026_x25519_key==`.slice(0,44).padEnd(44,"=");return{publicIp:(t==null?void 0:t.gatewayIp)||ih(r,0),isp:(t==null?void 0:t.isp)||"Garuda Infinity / M247 Ltd",asn:(t==null?void 0:t.asn)||"AS9009 M247 Europe SRL",tunnelInternalIp:"10.66.142.18",gatewayHost:(t==null?void 0:t.endpointHost)||`${r.toLowerCase()}-wg01.garudainfinity.net`,endpointPort:a?l?443:1194:51820,dnsServers:["1.1.1.1","1.0.0.1"],mtu:1420,cipher:a?"TLS 1.3 • AES-256-GCM (OpenVPN DCO)":"TLS 1.3 • ChaCha20-Poly1305 (Garuda LinkX)",clientPrivateKey:c,serverPublicKey:(t==null?void 0:t.wgPublicKey)||V0(r)}}const Er="1.1.2",Eo="1.1.1",wo="V1.1.2",Wy="V1.1.1",hg=1012,To="https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/Garuda-Infinity-Extension.zip",kl="https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/Garuda-Infinity.apk",Xy={AD:"Europe/Andorra",AE:"Asia/Dubai",AF:"Asia/Kabul",AG:"America/Antigua",AI:"America/Anguilla",AL:"Europe/Tirane",AM:"Asia/Yerevan",AO:"Africa/Luanda",AQ:"Antarctica/McMurdo",AR:"America/Argentina/Buenos_Aires",AS:"Pacific/Pago_Pago",AT:"Europe/Vienna",AU:"Australia/Melbourne",AW:"America/Aruba",AX:"Europe/Mariehamn",AZ:"Asia/Baku",BA:"Europe/Sarajevo",BB:"America/Barbados",BD:"Asia/Dhaka",BE:"Europe/Brussels",BF:"Africa/Ouagadougou",BG:"Europe/Sofia",BH:"Asia/Bahrain",BI:"Africa/Bujumbura",BJ:"Africa/Porto-Novo",BL:"America/St_Barthelemy",BM:"Atlantic/Bermuda",BN:"Asia/Brunei",BO:"America/La_Paz",BQ:"America/Kralendijk",BR:"America/Sao_Paulo",BS:"America/Nassau",BT:"Asia/Thimphu",BW:"Africa/Gaborone",BY:"Europe/Minsk",BZ:"America/Belize",CA:"America/Toronto",CC:"Indian/Cocos",CD:"Africa/Kinshasa",CF:"Africa/Bangui",CG:"Africa/Brazzaville",CH:"Europe/Zurich",CI:"Africa/Abidjan",CK:"Pacific/Rarotonga",CL:"America/Santiago",CM:"Africa/Douala",CN:"Asia/Shanghai",CO:"America/Bogota",CR:"America/Costa_Rica",CU:"America/Havana",CV:"Atlantic/Cape_Verde",CW:"America/Curacao",CX:"Indian/Christmas",CY:"Asia/Nicosia",CZ:"Europe/Prague",DE:"Europe/Berlin",DJ:"Africa/Djibouti",DK:"Europe/Copenhagen",DM:"America/Dominica",DO:"America/Santo_Domingo",DZ:"Africa/Algiers",EC:"America/Guayaquil",EE:"Europe/Tallinn",EG:"Africa/Cairo",EH:"Africa/El_Aaiun",ER:"Africa/Asmara",ES:"Europe/Madrid",ET:"Africa/Addis_Ababa",FI:"Europe/Helsinki",FJ:"Pacific/Fiji",FK:"Atlantic/Stanley",FM:"Pacific/Pohnpei",FO:"Atlantic/Faroe",FR:"Europe/Paris",GA:"Africa/Libreville",GB:"Europe/London",GD:"America/Grenada",GE:"Asia/Tbilisi",GF:"America/Cayenne",GG:"Europe/Guernsey",GH:"Africa/Accra",GI:"Europe/Gibraltar",GL:"America/Nuuk",GM:"Africa/Banjul",GN:"Africa/Conakry",GP:"America/Guadeloupe",GQ:"Africa/Malabo",GR:"Europe/Athens",GT:"America/Guatemala",GU:"Pacific/Guam",GW:"Africa/Bissau",GY:"America/Guyana",HK:"Asia/Hong_Kong",HN:"America/Tegucigalpa",HR:"Europe/Zagreb",HT:"America/Port-au-Prince",HU:"Europe/Budapest",ID:"Asia/Jakarta",IE:"Europe/Dublin",IL:"Asia/Jerusalem",IM:"Europe/Isle_of_Man",IN:"Asia/Kolkata",IO:"Indian/Chagos",IQ:"Asia/Baghdad",IR:"Asia/Tehran",IS:"Atlantic/Reykjavik",IT:"Europe/Rome",JE:"Europe/Jersey",JM:"America/Jamaica",JO:"Asia/Amman",JP:"Asia/Tokyo",KE:"Africa/Nairobi",KG:"Asia/Bishkek",KH:"Asia/Phnom_Penh",KI:"Pacific/Tarawa",KM:"Indian/Comoro",KN:"America/St_Kitts",KP:"Asia/Pyongyang",KR:"Asia/Seoul",KW:"Asia/Kuwait",KY:"America/Cayman",KZ:"Asia/Almaty",LA:"Asia/Vientiane",LB:"Asia/Beirut",LC:"America/St_Lucia",LI:"Europe/Vaduz",LK:"Asia/Colombo",LR:"Africa/Monrovia",LS:"Africa/Maseru",LT:"Europe/Vilnius",LU:"Europe/Luxembourg",LV:"Europe/Riga",LY:"Africa/Tripoli",MA:"Africa/Casablanca",MC:"Europe/Monaco",MD:"Europe/Chisinau",ME:"Europe/Podgorica",MF:"America/Marigot",MG:"Indian/Antananarivo",MH:"Pacific/Majuro",MK:"Europe/Skopje",ML:"Africa/Bamako",MM:"Asia/Yangon",MN:"Asia/Ulaanbaatar",MO:"Asia/Macau",MP:"Pacific/Saipan",MQ:"America/Martinique",MR:"Africa/Nouakchott",MS:"America/Montserrat",MT:"Europe/Malta",MU:"Indian/Mauritius",MV:"Indian/Maldives",MW:"Africa/Blantyre",MX:"America/Mexico_City",MY:"Asia/Kuala_Lumpur",MZ:"Africa/Maputo",NA:"Africa/Windhoek",NC:"Pacific/Noumea",NE:"Africa/Niamey",NF:"Pacific/Norfolk",NG:"Africa/Lagos",NI:"America/Managua",NL:"Europe/Amsterdam",NO:"Europe/Oslo",NP:"Asia/Kathmandu",NR:"Pacific/Nauru",NU:"Pacific/Niue",NZ:"Pacific/Auckland",OM:"Asia/Muscat",PA:"America/Panama",PE:"America/Lima",PF:"Pacific/Tahiti",PG:"Pacific/Port_Moresby",PH:"Asia/Manila",PK:"Asia/Karachi",PL:"Europe/Warsaw",PM:"America/Miquelon",PR:"America/Puerto_Rico",PS:"Asia/Hebron",PT:"Europe/Lisbon",PW:"Pacific/Palau",PY:"America/Asuncion",QA:"Asia/Qatar",RE:"Indian/Reunion",RO:"Europe/Bucharest",RS:"Europe/Belgrade",RU:"Europe/Moscow",RW:"Africa/Kigali",SA:"Asia/Riyadh",SB:"Pacific/Guadalcanal",SC:"Indian/Mahe",SD:"Africa/Khartoum",SE:"Europe/Stockholm",SG:"Asia/Singapore",SH:"Atlantic/St_Helena",SI:"Europe/Ljubljana",SJ:"Arctic/Longyearbyen",SK:"Europe/Bratislava",SL:"Africa/Freetown",SM:"Europe/San_Marino",SN:"Africa/Dakar",SO:"Africa/Mogadishu",SR:"America/Paramaribo",SS:"Africa/Juba",ST:"Africa/Sao_Tome",SV:"America/El_Salvador",SX:"America/Lower_Princes",SY:"Asia/Damascus",SZ:"Africa/Mbabane",TC:"America/Grand_Turk",TD:"Africa/Ndjamena",TG:"Africa/Lome",TH:"Asia/Bangkok",TJ:"Asia/Dushanbe",TK:"Pacific/Fakaofo",TL:"Asia/Dili",TM:"Asia/Ashgabat",TN:"Africa/Tunis",TO:"Pacific/Tongatapu",TR:"Europe/Istanbul",TT:"America/Port_of_Spain",TV:"Pacific/Funafuti",TW:"Asia/Taipei",TZ:"Africa/Dar_es_Salaam",UA:"Europe/Kyiv",UG:"Africa/Kampala",US:"America/New_York",UY:"America/Montevideo",UZ:"Asia/Tashkent",VA:"Europe/Vatican",VC:"America/St_Vincent",VE:"America/Caracas",VG:"America/Tortola",VI:"America/St_Thomas",VN:"Asia/Ho_Chi_Minh",VU:"Pacific/Efate",WF:"Pacific/Wallis",WS:"Pacific/Apia",XK:"Europe/Belgrade",YE:"Asia/Aden",YT:"Indian/Mayotte",ZA:"Africa/Johannesburg",ZM:"Africa/Lusaka",ZW:"Africa/Harare"};function yd(s){if(!s||typeof s!="string")return!1;try{return Intl.DateTimeFormat(void 0,{timeZone:s.trim()}),!0}catch{return!1}}function En(s="",e=""){const t=String(e||"").trim();if(yd(t))return t;const r=String(s||"").trim().toUpperCase(),a=Xy[r];if(a&&yd(a))return a;try{const l=Intl.DateTimeFormat().resolvedOptions().timeZone;if(yd(l))return l}catch{}return"UTC"}function Ci(s="",e="",t=new Date){var p;const r=t instanceof Date?t:new Date(t||Date.now()),a=En(s,e);let l="",c="",d="",h="UTC";try{l=new Intl.DateTimeFormat("en-US",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(r),d=new Intl.DateTimeFormat("en-US",{timeZone:a,hour:"2-digit",minute:"2-digit",hour12:!0}).format(r),c=new Intl.DateTimeFormat("en-GB",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(r);const x=((p=new Intl.DateTimeFormat("en-US",{timeZone:a,timeZoneName:"shortOffset"}).formatToParts(r).find(g=>g.type==="timeZoneName"))==null?void 0:p.value)||"";x&&(h=x.replace(/^GMT/,"UTC"))}catch{c=r.toTimeString().slice(0,8),l=r.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),d=r.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})}return{timeZone:a,time12:l,time24:c,shortTime12:d,offset:h,verifiedLabel:`${l} (${h})`,fullLabel:`${l} • ${a} (${h})`}}const sh=[117,114,98,97,110,45,118,112,110,46,99,111,109].map(s=>String.fromCharCode(s)).join(""),of=`https://api-pro.${sh}`,jy=`https://stats.${sh}`,Co=["URBAN","VPN","BROWSER","EXTENSION"].join("_"),X0="garuda_android_cloud_cache_v4",Yy=720*1e3,pg=[30*1e3,60*1e3,300*1e3,900*1e3],j0={NO:new Set(["83.143.82.62","83.143.82.58"]),RU:new Set(["146.70.52.54","146.70.52.62","146.70.52.94"]),KR:new Set(["79.110.55.34"])},Y0={NO:["185.181.61.141"],RU:["146.70.231.130"],KR:["108.181.50.35","61.255.174.11"],RS:["83.143.82.62","83.143.82.58"]},$y={RS:{sourceIso:"NO",allowedHosts:new Set(["83.143.82.62","83.143.82.58"])}},Li=new Map;let ah=0,Un=null,Ts=!1,xd=!1;const qy="cW9NiiSbuwbqZDHwUFlef1LQhwXlwQGu",qe={anonToken:"",accsToken:"",accsExpiresAt:0,countries:[],countriesFetchedAt:0,recentHostsByIso:{},pinnedStaticHostByIso:{},mintedProxyLeaseBySig:{},strikeHistoryByHost:{}};function mg(s){if(!s)return;qe.strikeHistoryByHost||(qe.strikeHistoryByHost={});const e=qe.strikeHistoryByHost[s]||{strikes:0},t=Math.min(e.strikes+1,10),r=Math.min(t-1,pg.length-1);qe.strikeHistoryByHost[s]={strikes:t,cooldownUntil:Date.now()+pg[r]},rs()}function Ky(s){var e;!s||!((e=qe.strikeHistoryByHost)!=null&&e[s])||(delete qe.strikeHistoryByHost[s],rs())}function gg(s){var t;if(!s)return!1;const e=(t=qe.strikeHistoryByHost)==null?void 0:t[s];return!e||!e.cooldownUntil?!1:Date.now()<e.cooldownUntil}function Zy(s){const e=[...s];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[r],e[r]=a}return e}typeof window<"u"&&(window.__onGarudaNativeCallback=(s,e)=>{const t=Li.get(s);if(t){Li.delete(s);try{t(JSON.parse(e))}catch{t({ok:!1,error:"Malformed native callback JSON"})}}});function sn(){return typeof window>"u"?!1:!!(window.GarudaAndroidBridge&&typeof window.GarudaAndroidBridge.httpFetchAsync=="function")}function Jy(s){try{if(sn()&&window.GarudaAndroidBridge.getStorageItem){const t=window.GarudaAndroidBridge.getStorageItem(s);if(t)return JSON.parse(t)}const e=localStorage.getItem(s);return e?JSON.parse(e):null}catch{return null}}function Qy(s,e){try{const t=JSON.stringify(e);sn()&&window.GarudaAndroidBridge.setStorageItem&&window.GarudaAndroidBridge.setStorageItem(s,t),localStorage.setItem(s,t)}catch{}}function ex(){const s=[34,35,45,52,54,64,66,74,82,89,91,104,138,142,148,151,185,193],e=s[Math.floor(Math.random()*s.length)],t=1+Math.floor(Math.random()*250),r=1+Math.floor(Math.random()*250),a=1+Math.floor(Math.random()*250);return`${e}.${t}.${r}.${a}`}function Ec(s={}){const e=ex();return{Accept:"application/json","X-Client-App":Co,"X-Forwarded-For":e,"X-Real-IP":e,"CF-Connecting-IP":e,"True-Client-IP":e,...s}}function Ra(s,e={}){const{method:t="GET",headers:r={},body:a="",useProxy:l=!1,timeoutMs:c=8500}=e;return sn()?new Promise(d=>{const h=`garuda_native_${Date.now()}_${++ah}`,p=setTimeout(()=>{Li.has(h)&&(Li.delete(h),d({ok:!1,status:0,error:"Native HTTP timeout"}))},c+1500);Li.set(h,v=>{clearTimeout(p),d(v||{ok:!1,status:0})});try{window.GarudaAndroidBridge.httpFetchAsync(h,s,t,JSON.stringify(r||{}),a||"",!!l,c)}catch(v){clearTimeout(p),Li.delete(h),d({ok:!1,status:0,error:(v==null?void 0:v.message)||"Bridge call error"})}}):Promise.reject(new Error("GarudaAndroidBridge not available"))}function Dc(){if(qe.anonToken)return;const s=Jy(X0);s&&typeof s=="object"&&(s.anonToken&&(qe.anonToken=s.anonToken),s.accsToken&&(qe.accsToken=s.accsToken),typeof s.accsExpiresAt=="number"&&(qe.accsExpiresAt=s.accsExpiresAt),Array.isArray(s.countries)&&(qe.countries=s.countries),typeof s.countriesFetchedAt=="number"&&(qe.countriesFetchedAt=s.countriesFetchedAt),s.recentHostsByIso&&typeof s.recentHostsByIso=="object"&&(qe.recentHostsByIso=s.recentHostsByIso),s.pinnedStaticHostByIso&&typeof s.pinnedStaticHostByIso=="object"&&(qe.pinnedStaticHostByIso=s.pinnedStaticHostByIso),s.mintedProxyLeaseBySig&&typeof s.mintedProxyLeaseBySig=="object"&&(qe.mintedProxyLeaseBySig=s.mintedProxyLeaseBySig),s.strikeHistoryByHost&&typeof s.strikeHistoryByHost=="object"&&(qe.strikeHistoryByHost=s.strikeHistoryByHost),typeof s.clientShardId=="number"&&(qe.clientShardId=s.clientShardId))}function rs(){Qy(X0,{anonToken:qe.anonToken,accsToken:qe.accsToken,accsExpiresAt:qe.accsExpiresAt,countries:qe.countries,countriesFetchedAt:qe.countriesFetchedAt,recentHostsByIso:qe.recentHostsByIso,pinnedStaticHostByIso:qe.pinnedStaticHostByIso,mintedProxyLeaseBySig:qe.mintedProxyLeaseBySig,strikeHistoryByHost:qe.strikeHistoryByHost,clientShardId:qe.clientShardId})}async function Uc(s=!1,e=!1){Dc();const t=Date.now();if(!s&&!e&&qe.anonToken&&qe.accsToken&&t<qe.accsExpiresAt-6e4)return{anonToken:qe.anonToken,accsToken:qe.accsToken};if(qe.countries=[],qe.countriesFetchedAt=0,!qe.anonToken||e){const l=await Ra(`${of}/rest/v1/registrations/clientApps/${Co}/users/anonymous`,{method:"POST",headers:Ec({"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co}}),useProxy:!1,timeoutMs:8500});if(l.ok&&l.body)try{const c=JSON.parse(l.body);c!=null&&c.value&&(qe.anonToken=c.value,rs())}catch{}}qe.anonToken||(qe.anonToken=qy);const r=await Ra(`${of}/rest/v1/security/tokens/accs`,{method:"POST",headers:Ec({Authorization:`Bearer ${qe.anonToken}`,"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co},type:"accs"}),useProxy:!1,timeoutMs:8500});if(!r.ok||!r.body){if(!e)return Uc(!0,!0);throw new Error(`Gateway access token exchange failed (${r.status||"network"})`)}const a=JSON.parse(r.body);if(!(a!=null&&a.value))throw new Error("Gateway access token missing value");return qe.accsToken=a.value,qe.accsExpiresAt=a.expirationTime||t+720*1e3,rs(),{anonToken:qe.anonToken,accsToken:qe.accsToken}}async function wc(s=!1,e=!1){var l;Dc();const t=Date.now();if(!s&&!e&&Array.isArray(qe.countries)&&qe.countries.length>0&&t-qe.countriesFetchedAt<360*1e3)return qe.countries;const{accsToken:r}=await Uc(s,e),a=await Ra(`${jy}/api/rest/v2/entrypoints/countries`,{method:"GET",headers:Ec({Authorization:`Bearer ${r}`}),useProxy:!1,timeoutMs:8500});if(!a.ok||!a.body)return s?e?qe.countries||[]:wc(!0,!0):wc(!0,!1);try{const c=JSON.parse(a.body),d=((l=c==null?void 0:c.countries)==null?void 0:l.elements)||(Array.isArray(c==null?void 0:c.countries)?c.countries:[]);if(Array.isArray(d)&&d.length>0)return qe.countries=d,qe.countriesFetchedAt=Date.now(),rs(),d}catch{}return qe.countries||[]}const tx=new Map;async function nx(s,e){var a,l;const t=String(e||"").toUpperCase();if(!s||!t||!/^\d+\.\d+\.\d+\.\d+$/.test(s)||(a=Y0[t])!=null&&a.includes(s))return!0;if((l=j0[t])!=null&&l.has(s))return!1;const r=tx.get(s);return r?r===t:!0}function ix(s="US"){Dc(),typeof qe.clientShardId!="number"&&(qe.clientShardId=Math.floor(Math.random()*1e6),rs());let e=0;for(let t=0;t<s.length;t++)e=e*31+s.charCodeAt(t)>>>0;return qe.clientShardId+e>>>0}function vg(s,e,t=!0,r=null){var y,P,F,T,L,I,U,w,N;const a=String(e||"US").toUpperCase(),l=$y[a],c=l?l.sourceIso:a;let d=s.find(O=>{var G;return String(((G=O==null?void 0:O.code)==null?void 0:G.iso2)||(O==null?void 0:O.iso2)||"").toUpperCase()===c});!d&&s.length>0&&(d=s.find(O=>{var G;return String(((G=O==null?void 0:O.code)==null?void 0:G.iso2)||(O==null?void 0:O.iso2)||"").toUpperCase()==="US"})||s[0]);const h=((y=d==null?void 0:d.servers)==null?void 0:y.elements)||[],p=j0[a],v=Y0[a]||[];let x=[];const g=new Set;for(const O of h){const G=(F=(P=O==null?void 0:O.address)==null?void 0:P.primary)==null?void 0:F.host,H=((L=(T=O==null?void 0:O.address)==null?void 0:T.primary)==null?void 0:L.port)||443,J=(O==null?void 0:O.signature)||"";!G||!J||p&&p.has(G)||r&&r.has(G)||l!=null&&l.allowedHosts&&!l.allowedHosts.has(G)||g.has(G)||(g.add(G),x.push({host:G,port:H,signature:J,weight:Number(O.weight)||1,title:(d==null?void 0:d.title)||a}))}if(x.sort((O,G)=>{const H=v.indexOf(O.host),J=v.indexOf(G.host);if(H!==-1&&J===-1)return-1;if(J!==-1&&H===-1)return 1;if(H!==-1&&J!==-1)return H-J;const B=(G.weight||0)-(O.weight||0);return B!==0?B:String(O.host).localeCompare(String(G.host))}),x.length===0)for(let O=1;O<=4;O++){const G=`custom-${a.toLowerCase()}-${O}.${sh}`;g.has(G)||(g.add(G),x.push({host:G,port:443,signature:"",weight:1,title:a}))}let _=[...x];if(x.length>1){if(t){const H=new Set(x.map(j=>j.host));let B=(Array.isArray((I=qe.recentHostsByIso)==null?void 0:I[a])?qe.recentHostsByIso[a]:[]).filter(j=>H.has(j));if(B.length>=x.length){const j=B[B.length-1];B=j?[j]:[]}const q=new Set(B),pe=Zy(x.filter(j=>!q.has(j.host))),oe=x.filter(j=>q.has(j.host)).sort((j,V)=>B.indexOf(j.host)-B.indexOf(V.host));_=[...pe,...oe]}else{let H=((U=qe.pinnedStaticHostByIso)==null?void 0:U[a])||Array.isArray((w=qe.recentHostsByIso)==null?void 0:w[a])&&qe.recentHostsByIso[a].slice(-1)[0];if(!H&&x.length>0){const J=ix(a)%x.length;H=(N=x[J])==null?void 0:N.host}if(H){const J=x.filter(q=>q.host===H),B=x.filter(q=>q.host!==H);J.length>0&&(_=[...J,...B])}}const O=_.filter(H=>!gg(H.host)),G=_.filter(H=>gg(H.host));O.length>0&&(_=[...O,...G])}const E=_[0];if(E!=null&&E.host){qe.recentHostsByIso||(qe.recentHostsByIso={}),qe.pinnedStaticHostByIso||(qe.pinnedStaticHostByIso={});const O=Array.isArray(qe.recentHostsByIso[a])?qe.recentHostsByIso[a].filter(G=>G!==E.host):[];O.push(E.host),qe.recentHostsByIso[a]=O.slice(-32),qe.pinnedStaticHostByIso[a]=E.host,rs()}const A=_.slice(0,8),S=Math.max(1,x.findIndex(O=>O.host===(E==null?void 0:E.host))+1);return{primary:A[0],backups:A,poolSize:x.length,poolIndex:S}}async function $0(s,e,t=!1){var l;if(!e)return s;Dc();const r=Date.now();if(!t&&((l=qe.mintedProxyLeaseBySig)!=null&&l[e])){const c=qe.mintedProxyLeaseBySig[e];if(c!=null&&c.username&&r<(c.expiresAt||0)-3e4)return c.username}const a=await Ra(`${of}/rest/v1/security/tokens/accs-proxy`,{method:"POST",headers:Ec({Authorization:`Bearer ${s}`,"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co},type:"accs-proxy",signature:e}),useProxy:!1,timeoutMs:7e3});if(a.ok&&a.body)try{const c=JSON.parse(a.body);if(c!=null&&c.value){qe.mintedProxyLeaseBySig||(qe.mintedProxyLeaseBySig={}),qe.mintedProxyLeaseBySig[e]={username:c.value,expiresAt:Date.now()+Yy};const d=Object.keys(qe.mintedProxyLeaseBySig);if(d.length>64)for(const h of d.slice(0,d.length-64))delete qe.mintedProxyLeaseBySig[h];return rs(),c.value}}catch{}return s}async function rx(s="US"){var e,t;if(!(!sn()||Ts||xd)){xd=!0;try{const r=await wc(!1,!1);if(Ts||!Array.isArray(r)||r.length===0)return;const{accsToken:a}=await Uc(!1,!1);if(Ts||!a)return;const l=Array.from(new Set([String(s||"US").toUpperCase(),"US","GB","DE","SG","NL"]));for(const c of l){if(Ts)break;const d=r.find(v=>{var x;return String(((x=v==null?void 0:v.code)==null?void 0:x.iso2)||(v==null?void 0:v.iso2)||"").toUpperCase()===c}),h=(t=(e=d==null?void 0:d.servers)==null?void 0:e.elements)==null?void 0:t[0],p=h==null?void 0:h.signature;p&&await $0(a,p,!1)}}catch{}finally{xd=!1}}}typeof window<"u"&&setTimeout(()=>{sn()&&!Ts&&rx("US")},1200);async function lf(s=!0,e=""){const t=String(e||s&&(Un==null?void 0:Un.iso2)||"").toUpperCase(),r=[{url:"https://api.2ip.io/",parse:c=>{var h,p;if(!c||!c.ip)return null;const d=String(c.code||"").toUpperCase();return{ip:c.ip,country:d,countryName:c.country||d,city:c.city||"",isp:((h=c.asn)==null?void 0:h.name)||"",asn:(p=c.asn)!=null&&p.id?`AS${c.asn.id} ${c.asn.name||""}`.trim():"",timeZone:En(d,c.time_zone||""),latitude:c.lat?Number(c.lat):void 0,longitude:c.lon?Number(c.lon):void 0}}},{url:"https://ipwho.is/",parse:c=>{var h,p,v,x;if(!c||c.success===!1||!c.ip)return null;const d=String(c.country_code||"").toUpperCase();return{ip:c.ip,country:d,countryName:c.country||d,city:c.city||"",isp:((h=c.connection)==null?void 0:h.isp)||((p=c.connection)==null?void 0:p.org)||"",asn:(v=c.connection)!=null&&v.asn?`AS${c.connection.asn}`:"",timeZone:En(d,((x=c.timezone)==null?void 0:x.id)||""),latitude:c.latitude,longitude:c.longitude}}},{url:"https://api.ip.sb/geoip",parse:c=>{if(!c||!c.ip)return null;const d=String(c.country_code||"").toUpperCase();return{ip:c.ip,country:d,countryName:c.country||d,city:c.city||"",isp:c.isp||c.organization||"",asn:c.asn?`AS${c.asn}`:"",timeZone:En(d,c.timezone||""),latitude:c.latitude,longitude:c.longitude}}}];let a=null;const l=async c=>{const d=await Ra(c.url,{method:"GET",headers:{Accept:"application/json","Cache-Control":"no-cache"},useProxy:s,timeoutMs:3200});if(d.ok&&d.body){const h=c.parse(JSON.parse(d.body));if(h!=null&&h.ip&&(a||(a=h),!t||h.country===t))return h}throw new Error("Geo probe mismatch or empty")};try{const c=await Promise.any(r.map(d=>l(d)));if(c!=null&&c.ip)return c}catch{}return a&&t&&a.country!==t?{...a,country:t,countryName:(Un==null?void 0:Un.countryName)||t,city:(Un==null?void 0:Un.defaultCity)||"",timeZone:En(t)}:a}function _g(){if(sn()&&typeof window.GarudaAndroidBridge.getVpnConnectedElapsedSeconds=="function")try{const s=Number(window.GarudaAndroidBridge.getVpnConnectedElapsedSeconds());if(Number.isFinite(s)&&s>=0)return Math.floor(s)}catch{}return Un!=null&&Un.connectedAt?Math.max(0,Math.floor((Date.now()-Un.connectedAt)/1e3)):0}async function sx(s="US",e="United States",t=!0,r=null){if(!sn())return{ok:!1,error:"Android native VPN bridge not available"};Ts=!0;try{const a=typeof s=="object"&&s!==null,l=String((a?s.iso||s.iso2:s)||"US").toUpperCase(),c=String((a?s.name||s.countryName:typeof e=="string"?e:l)||l),d=String(a&&s.city||""),h=typeof e=="boolean"?e:!!t,p=typeof t=="function"?t:typeof r=="function"?r:null,v=await wc(!1,!1),{accsToken:x}=await Uc(!1,!1),g=new Set;let _=vg(v,l,h,g);if(_.poolSize>1)for(let P=0;P<Math.min(_.poolSize,3)&&!await nx(_.primary.host,l);P++)g.add(_.primary.host),mg(_.primary.host),_=vg(v,l,!0,g);const E=await $0(x,_.primary.signature),A=await new Promise(P=>{const F=`garuda_vpn_start_${Date.now()}_${++ah}`,T=setTimeout(()=>{Li.has(F)&&(Li.delete(F),P({ok:!1,error:"Android VpnService start timed out"}))},25e3);Li.set(F,L=>{clearTimeout(T),P(L||{ok:!1})}),window.GarudaAndroidBridge.startVpnTunnelAsync(F,_.primary.host,_.primary.port||443,JSON.stringify(_.backups),E,"1",l,c)});if(!(A!=null&&A.ok))return mg(_.primary.host),{ok:!1,error:(A==null?void 0:A.error)||"Failed to establish Android System VPN tunnel"};Ky(_.primary.host);const S=Date.now(),y={ip:_.primary.host,country:l,countryName:c,city:d,isp:`Garuda Infinity Cloud Gateway (${_.primary.host})`,asn:"AS9009",timeZone:En(l)};return Un={iso2:l,countryName:c,defaultCity:d,primaryProxy:_.primary,backupProxies:_.backups,poolIndex:_.poolIndex,poolSize:_.poolSize,verifiedGeo:y,connectedAt:S},lf(!0,l).then(P=>{if(!(P!=null&&P.ip)||!Un||Un.connectedAt!==S)return;const F=!P.country||String(P.country).toUpperCase()===l,T={ip:P.ip||_.primary.host,country:l,countryName:F&&P.countryName||c,city:F&&P.city||d,isp:P.isp||`Garuda Infinity Cloud Gateway (${_.primary.host})`,asn:P.asn||"AS9009",timeZone:F&&P.timeZone||En(l),latitude:P.latitude,longitude:P.longitude};if(Un.verifiedGeo=T,sn()&&typeof window.GarudaAndroidBridge.updateVpnNotificationMetadata=="function")try{window.GarudaAndroidBridge.updateVpnNotificationMetadata(T.ip,l,T.countryName)}catch{}if(p)try{p(T)}catch{}}).catch(()=>{}),{ok:!0,state:"Connected",iso2:l,primaryProxy:_.primary,backupProxies:_.backups,poolIndex:_.poolIndex,poolSize:_.poolSize,proxyAuthUsername:E,exitIpInfo:y}}finally{Ts=!1}}async function yg(){return sn()?(Un=null,new Promise(s=>{const e=`garuda_vpn_stop_${Date.now()}_${++ah}`,t=setTimeout(()=>{Li.has(e)&&(Li.delete(e),s({ok:!0}))},6e3);Li.set(e,r=>{clearTimeout(t),s(r||{ok:!0})}),window.GarudaAndroidBridge.stopVpnTunnelAsync(e)})):{ok:!1}}const ax="garuda_infinity_updater_db",Pa="handles",q0="extension_root_dir",xg=["https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/version.json","https://api.github.com/repos/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/contents/version.json","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/dist-release/version.json","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/master/version.json"],ox=[To,"https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/dist-release/Garuda-Infinity-Extension.zip","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/master/Garuda-Infinity-Extension.zip"];function Sg(s){if(!s||typeof s!="object")return null;if(s.version||s.appVersion||s.extensionVersion)return s;if(typeof s.content=="string"&&s.encoding==="base64")try{const e=s.content.replace(/\s+/g,""),t=atob(e),r=JSON.parse(t);if(r&&(r.version||r.appVersion||r.extensionVersion))return r}catch{return null}return null}async function lx(){const s=`?t=${Date.now()}`;if(sn())for(const e of xg)try{const t=await Ra(`${e}${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:6500});if(t!=null&&t.ok&&t.body){const r=Sg(JSON.parse(t.body));if(r)return r}}catch{}for(const e of xg)try{const t=new AbortController,r=setTimeout(()=>t.abort(),5500),a=await fetch(`${e}${s}`,{method:"GET",cache:"no-store",signal:t.signal});if(clearTimeout(r),a.ok){const l=await a.json(),c=Sg(l);if(c)return c}}catch{}return null}function cf(s,e){const t=s||To,r="Garuda-Infinity-Extension.zip",a=document.createElement("a");a.href=`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`,a.download=r,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),document.body.removeChild(a)}function cx(s,e,t){var d;const r=String(e).replace(/^[vV]/,""),a=s,l=`${a}${a.includes("?")?"&":"?"}v=${r}_${Date.now()}`;if(sn()&&typeof((d=window.GarudaAndroidBridge)==null?void 0:d.downloadUpdateApk)=="function"&&l.startsWith("https://"))try{if(window.GarudaAndroidBridge.downloadUpdateApk(l,r))return{method:"download_manager",url:l}}catch{}const c=document.createElement("a");return c.href=l,c.download=`Garuda-Infinity-V${r}.apk`,c.target="_blank",c.rel="noopener noreferrer",document.body.appendChild(c),c.click(),document.body.removeChild(c),{method:"browser",url:l}}function K0(){return new Promise((s,e)=>{const t=indexedDB.open(ax,1);t.onupgradeneeded=()=>{const r=t.result;r.objectStoreNames.contains(Pa)||r.createObjectStore(Pa)},t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function ux(){try{const s=await K0();return await new Promise(e=>{const r=s.transaction(Pa,"readonly").objectStore(Pa).get(q0);r.onsuccess=()=>e(r.result||null),r.onerror=()=>e(null)})}catch{return null}}async function dx(s){try{const e=await K0();await new Promise((t,r)=>{const a=e.transaction(Pa,"readwrite");a.objectStore(Pa).put(s,q0),a.oncomplete=()=>t(),a.onerror=()=>r(a.error)})}catch{}}async function Mg(s,e=!0){if(!s)return!1;try{const t={mode:"readwrite"};if(await s.queryPermission(t)==="granted"||e&&await s.requestPermission(t)==="granted")return!0}catch{return!1}return!1}async function fx(s){const e=new DataView(s),t=new Uint8Array(s);let r=-1;const a=Math.max(0,t.length-65557);for(let v=t.length-22;v>=a;v--)if(e.getUint32(v,!0)===101010256){r=v;break}if(r===-1)throw new Error("Invalid ZIP archive (Central Directory not found)");const l=e.getUint16(r+10,!0),c=e.getUint32(r+16,!0),d=new TextDecoder("utf-8"),h=[];let p=c;for(let v=0;v<l&&e.getUint32(p,!0)===33639248;v++){const x=e.getUint16(p+10,!0),g=e.getUint32(p+20,!0),_=e.getUint16(p+28,!0),E=e.getUint16(p+30,!0),A=e.getUint16(p+32,!0),S=e.getUint32(p+42,!0),P=d.decode(t.subarray(p+46,p+46+_)).replace(/\\/g,"/").replace(/^\/+/,"");if(p+=46+_+E+A,!P||P.endsWith("/"))continue;if(e.getUint32(S,!0)!==67324752)throw new Error(`Corrupt local header for ${P}`);const F=e.getUint16(S+26,!0),T=e.getUint16(S+28,!0),L=S+30+F+T,I=t.subarray(L,L+g);let U;if(x===0)U=new Uint8Array(I);else if(x===8){const w=new DecompressionStream("deflate-raw"),N=w.writable.getWriter();N.write(I),N.close();const O=await new Response(w.readable).arrayBuffer();U=new Uint8Array(O)}else throw new Error(`Unsupported ZIP compression method ${x}`);h.push({path:P,data:U})}return h}async function hx(s,e,t){const r=e.split("/").filter(Boolean);if(r.length===0)return;let a=s;for(let h=0;h<r.length-1;h++)a=await a.getDirectoryHandle(r[h],{create:!0});const l=r[r.length-1],d=await(await a.getFileHandle(l,{create:!0})).createWritable();await d.write(t),await d.close()}async function px(){const s=Date.now();for(const e of ox)try{const t=`${e}${e.includes("?")?"&":"?"}t=${s}`,r=await fetch(t,{cache:"no-store"});if(r.ok){const a=await r.arrayBuffer();if(a&&a.byteLength>100)return a}}catch{}throw new Error("Failed to download extension update package from GitHub release")}async function Z0({onProgress:s,allowPicker:e=!0}={}){const t=v=>{typeof s=="function"&&s(v)};let r=await ux(),a=await Mg(r,!0);if(!a){if(!e||typeof window.showDirectoryPicker!="function")return{ok:!1,needsFolderSelection:!0};if(t("Select your unpacked Garuda Infinity extension folder once..."),r=await window.showDirectoryPicker({id:"garuda_infinity_ext_dir",mode:"readwrite"}),a=await Mg(r,!0),!a)throw new Error("Write permission to extension folder was denied.");await dx(r)}t("Downloading latest extension update package...");const l=await px();t("Extracting update files in-place...");const c=await fx(l);if(!c.length)throw new Error("Downloaded update archive was empty.");const d=c.some(v=>v.path==="manifest.json");let h="";if(!d){const v=c.find(x=>x.path.endsWith("/manifest.json"));v&&(h=v.path.slice(0,v.path.length-13))}let p=0;for(const v of c){let x=v.path;h&&x.startsWith(h)&&(x=x.slice(h.length)),x&&(await hx(r,x,v.data),p++)}return t(`Updated ${p} files! Reloading extension...`),setTimeout(()=>{var v,x;try{typeof chrome<"u"&&((v=chrome.runtime)!=null&&v.sendMessage)&&chrome.runtime.sendMessage({action:"RELOAD_EXTENSION"}),typeof chrome<"u"&&((x=chrome.runtime)!=null&&x.reload)&&chrome.runtime.reload()}catch{window.location.reload()}},550),{ok:!0,writtenCount:p}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="186",ba={ROTATE:0,DOLLY:1,PAN:2},Ea={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mx=0,Eg=1,gx=2,hc=1,vx=2,Ao=3,Ps=0,ti=1,Hi=2,br=0,Ro=1,As=2,wg=3,Ag=4,_x=5,Ma=100,yx=101,xx=102,Sx=103,Mx=104,Ex=200,wx=201,Ax=202,bx=203,J0=204,Q0=205,Tx=206,Cx=207,Rx=208,Px=209,Lx=210,Ix=211,Nx=212,Dx=213,Ux=214,uf=0,df=1,ff=2,Po=3,hf=4,pf=5,mf=6,gf=7,ev=0,Fx=1,Ox=2,rr=0,tv=1,nv=2,iv=3,lh=4,rv=5,sv=6,av=7,ov=300,Ls=301,La=302,Sd=303,Md=304,Fc=306,vf=1e3,Ar=1001,_f=1002,zn=1003,kx=1004,Bl=1005,qn=1006,Ed=1007,Cs=1008,Si=1009,lv=1010,cv=1011,Lo=1012,ch=1013,sr=1014,Xi=1015,ar=1016,uh=1017,dh=1018,Io=1020,uv=35902,dv=35899,fv=1021,hv=1022,ji=1023,Cr=1026,Rs=1027,fh=1028,hh=1029,Is=1030,ph=1031,mh=1033,pc=33776,mc=33777,gc=33778,vc=33779,yf=35840,xf=35841,Sf=35842,Mf=35843,Ef=36196,wf=37492,Af=37496,bf=37488,Tf=37489,Ac=37490,Cf=37491,Rf=37808,Pf=37809,Lf=37810,If=37811,Nf=37812,Df=37813,Uf=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Gf=37820,Vf=37821,Hf=36492,Wf=36494,Xf=36495,jf=36283,Yf=36284,bc=36285,$f=36286,Bx=3200,qf=0,zx=1,ns="",xi="srgb",Tc="srgb-linear",Cc="linear",qt="srgb",wd=7680,Gx=519,Vx=512,Hx=513,Wx=514,gh=515,Xx=516,jx=517,vh=518,Yx=519,$x=35044,bg="300 es",ir=2e3,No=2001;function qx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kx(){const s=Rc("canvas");return s.style.display="block",s}const Tg={};function Cg(...s){const e="THREE."+s.shift();console.log(e,...s)}function pv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=pv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Gt(...s){s=pv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ta(...s){const e=s.join(" ");e in Tg||(Tg[e]=!0,xt(...s))}function Zx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Jx={[uf]:df,[ff]:mf,[hf]:gf,[Po]:pf,[df]:uf,[mf]:ff,[gf]:hf,[pf]:Po};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Kf=180/Math.PI;function Uo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Qx(s,e){return(s%e+e)%e}function Ad(s,e,t){return(1-t)*s+t*e}function ho(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const eS={DEG2RAD:_c},Ch=class Ch{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;let vt=Ch;class ss{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let h=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3],g=l[c+0],_=l[c+1],E=l[c+2],A=l[c+3];if(x!==A||h!==g||p!==_||v!==E){let S=h*g+p*_+v*E+x*A;S<0&&(g=-g,_=-_,E=-E,A=-A,S=-S);let y=1-d;if(S<.9995){const P=Math.acos(S),F=Math.sin(P);y=Math.sin(y*P)/F,d=Math.sin(d*P)/F,h=h*y+g*d,p=p*y+_*d,v=v*y+E*d,x=x*y+A*d}else{h=h*y+g*d,p=p*y+_*d,v=v*y+E*d,x=x*y+A*d;const P=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=P,p*=P,v*=P,x*=P}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],h=r[a+1],p=r[a+2],v=r[a+3],x=l[c],g=l[c+1],_=l[c+2],E=l[c+3];return e[t]=d*E+v*x+h*_-p*g,e[t+1]=h*E+v*g+p*x-d*_,e[t+2]=p*E+v*_+d*g-h*x,e[t+3]=v*E-d*x-h*g-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,p=d(r/2),v=d(a/2),x=d(l/2),g=h(r/2),_=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=g*v*x+p*_*E,this._y=p*_*x-g*v*E,this._z=p*v*E+g*_*x,this._w=p*v*x-g*_*E;break;case"YXZ":this._x=g*v*x+p*_*E,this._y=p*_*x-g*v*E,this._z=p*v*E-g*_*x,this._w=p*v*x+g*_*E;break;case"ZXY":this._x=g*v*x-p*_*E,this._y=p*_*x+g*v*E,this._z=p*v*E+g*_*x,this._w=p*v*x-g*_*E;break;case"ZYX":this._x=g*v*x-p*_*E,this._y=p*_*x+g*v*E,this._z=p*v*E-g*_*x,this._w=p*v*x+g*_*E;break;case"YZX":this._x=g*v*x+p*_*E,this._y=p*_*x+g*v*E,this._z=p*v*E-g*_*x,this._w=p*v*x-g*_*E;break;case"XZY":this._x=g*v*x-p*_*E,this._y=p*_*x-g*v*E,this._z=p*v*E+g*_*x,this._w=p*v*x+g*_*E;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],h=t[9],p=t[2],v=t[6],x=t[10],g=r+d+x;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(v-h)*_,this._y=(l-p)*_,this._z=(c-a)*_}else if(r>d&&r>x){const _=2*Math.sqrt(1+r-d-x);this._w=(v-h)/_,this._x=.25*_,this._y=(a+c)/_,this._z=(l+p)/_}else if(d>x){const _=2*Math.sqrt(1+d-r-x);this._w=(l-p)/_,this._x=(a+c)/_,this._y=.25*_,this._z=(h+v)/_}else{const _=2*Math.sqrt(1+x-r-d);this._w=(c-a)/_,this._x=(l+p)/_,this._y=(h+v)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*d+a*p-l*h,this._y=a*v+c*h+l*d-r*p,this._z=l*v+c*p+r*h-a*d,this._w=c*v-r*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let h=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rh=class Rh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,p=2*(c*a-d*r),v=2*(d*t-l*a),x=2*(l*r-c*t);return this.x=t+h*p+c*x-d*v,this.y=r+h*v+d*p-l*x,this.z=a+h*x+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rh.prototype.isVector3=!0;let K=Rh;const bd=new K,Rg=new ss,Ph=class Ph{constructor(e,t,r,a,l,c,d,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,h,p)}set(e,t,r,a,l,c,d,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],h=r[6],p=r[1],v=r[4],x=r[7],g=r[2],_=r[5],E=r[8],A=a[0],S=a[3],y=a[6],P=a[1],F=a[4],T=a[7],L=a[2],I=a[5],U=a[8];return l[0]=c*A+d*P+h*L,l[3]=c*S+d*F+h*I,l[6]=c*y+d*T+h*U,l[1]=p*A+v*P+x*L,l[4]=p*S+v*F+x*I,l[7]=p*y+v*T+x*U,l[2]=g*A+_*P+E*L,l[5]=g*S+_*F+E*I,l[8]=g*y+_*T+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*d*p-r*l*v+r*d*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],v=e[8],x=v*c-d*p,g=d*h-v*l,_=p*l-c*h,E=t*x+r*g+a*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(a*p-v*r)*A,e[2]=(d*r-a*c)*A,e[3]=g*A,e[4]=(v*t-a*h)*A,e[5]=(a*l-d*t)*A,e[6]=_*A,e[7]=(r*h-p*t)*A,e[8]=(c*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*d)+c+e,-a*p,a*h,-a*(-p*c+h*d)+d+t,0,0,1),this}scale(e,t){return Ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Td.makeScale(e,t)),this}rotate(e){return Ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Td.makeRotation(-e)),this}translate(e,t){return Ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Td.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;let Tt=Ph;const Td=new Tt,Pg=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lg=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tS(){const s={enabled:!0,workingColorSpace:Tc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===qt&&(a.r=Tr(a.r),a.g=Tr(a.g),a.b=Tr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===qt&&(a.r=Ca(a.r),a.g=Ca(a.g),a.b=Ca(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ns?Cc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Tc]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:Pg,fromXYZ:Lg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:Pg,fromXYZ:Lg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const kt=tS();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ca(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let la;class nS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{la===void 0&&(la=Rc("canvas")),la.width=e.width,la.height=e.height;const a=la.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=la}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Tr(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Tr(t[r]/255)*255):t[r]=Tr(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iS=0;class _h{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Cd(a[c].image)):l.push(Cd(a[c]))}else l=Cd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let rS=0;const Rd=new K;class ni extends os{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,r=Ar,a=Ar,l=qn,c=Cs,d=ji,h=Si,p=ni.DEFAULT_ANISOTROPY,v=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Uo(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=ov;ni.DEFAULT_ANISOTROPY=1;const Lh=class Lh{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],x=h[8],g=h[1],_=h[5],E=h[9],A=h[2],S=h[6],y=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,T=(_+1)/2,L=(y+1)/2,I=(v+g)/4,U=(x+A)/4,w=(E+S)/4;return F>T&&F>L?F<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(F),a=I/r,l=U/r):T>L?T<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(T),r=I/a,l=w/a):L<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(L),r=U/l,a=w/l),this.set(r,a,l,t),this}let P=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(g-v)*(g-v));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(x-A)/P,this.z=(g-v)/P,this.w=Math.acos((p+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;let pn=Lh;class sS extends os{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new ni(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new _h(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends sS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class mv extends ni{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aS extends ni{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nc=class Nc{constructor(e,t,r,a,l,c,d,h,p,v,x,g,_,E,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,h,p,v,x,g,_,E,A,S)}set(e,t,r,a,l,c,d,h,p,v,x,g,_,E,A,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=c,y[9]=d,y[13]=h,y[2]=p,y[6]=v,y[10]=x,y[14]=g,y[3]=_,y[7]=E,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ca.setFromMatrixColumn(e,0).length(),l=1/ca.setFromMatrixColumn(e,1).length(),c=1/ca.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*v,_=c*x,E=d*v,A=d*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=_+E*p,t[5]=g-A*p,t[9]=-d*h,t[2]=A-g*p,t[6]=E+_*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,_=h*x,E=p*v,A=p*x;t[0]=g+A*d,t[4]=E*d-_,t[8]=c*p,t[1]=c*x,t[5]=c*v,t[9]=-d,t[2]=_*d-E,t[6]=A+g*d,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,_=h*x,E=p*v,A=p*x;t[0]=g-A*d,t[4]=-c*x,t[8]=E+_*d,t[1]=_+E*d,t[5]=c*v,t[9]=A-g*d,t[2]=-c*p,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,_=c*x,E=d*v,A=d*x;t[0]=h*v,t[4]=E*p-_,t[8]=g*p+A,t[1]=h*x,t[5]=A*p+g,t[9]=_*p-E,t[2]=-p,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,_=c*p,E=d*h,A=d*p;t[0]=h*v,t[4]=A-g*x,t[8]=E*x+_,t[1]=x,t[5]=c*v,t[9]=-d*v,t[2]=-p*v,t[6]=_*x+E,t[10]=g-A*x}else if(e.order==="XZY"){const g=c*h,_=c*p,E=d*h,A=d*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=g*x+A,t[5]=c*v,t[9]=_*x-E,t[2]=E*x-_,t[6]=d*v,t[10]=A*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,lS)}lookAt(e,t,r){const a=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Kr.crossVectors(r,_i),Kr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Kr.crossVectors(r,_i)),Kr.normalize(),zl.crossVectors(_i,Kr),a[0]=Kr.x,a[4]=zl.x,a[8]=_i.x,a[1]=Kr.y,a[5]=zl.y,a[9]=_i.y,a[2]=Kr.z,a[6]=zl.z,a[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],h=r[8],p=r[12],v=r[1],x=r[5],g=r[9],_=r[13],E=r[2],A=r[6],S=r[10],y=r[14],P=r[3],F=r[7],T=r[11],L=r[15],I=a[0],U=a[4],w=a[8],N=a[12],O=a[1],G=a[5],H=a[9],J=a[13],B=a[2],q=a[6],pe=a[10],oe=a[14],j=a[3],V=a[7],te=a[11],D=a[15];return l[0]=c*I+d*O+h*B+p*j,l[4]=c*U+d*G+h*q+p*V,l[8]=c*w+d*H+h*pe+p*te,l[12]=c*N+d*J+h*oe+p*D,l[1]=v*I+x*O+g*B+_*j,l[5]=v*U+x*G+g*q+_*V,l[9]=v*w+x*H+g*pe+_*te,l[13]=v*N+x*J+g*oe+_*D,l[2]=E*I+A*O+S*B+y*j,l[6]=E*U+A*G+S*q+y*V,l[10]=E*w+A*H+S*pe+y*te,l[14]=E*N+A*J+S*oe+y*D,l[3]=P*I+F*O+T*B+L*j,l[7]=P*U+F*G+T*q+L*V,l[11]=P*w+F*H+T*pe+L*te,l[15]=P*N+F*J+T*oe+L*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],p=e[13],v=e[2],x=e[6],g=e[10],_=e[14],E=e[3],A=e[7],S=e[11],y=e[15],P=h*_-p*g,F=d*_-p*x,T=d*g-h*x,L=c*_-p*v,I=c*g-h*v,U=c*x-d*v;return t*(A*P-S*F+y*T)-r*(E*P-S*L+y*I)+a*(E*F-A*L+y*U)-l*(E*T-A*I+S*U)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],d=e[9],h=e[2],p=e[6],v=e[10];return t*(c*v-d*p)-r*(l*v-d*h)+a*(l*p-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],v=e[8],x=e[9],g=e[10],_=e[11],E=e[12],A=e[13],S=e[14],y=e[15],P=t*d-r*c,F=t*h-a*c,T=t*p-l*c,L=r*h-a*d,I=r*p-l*d,U=a*p-l*h,w=v*A-x*E,N=v*S-g*E,O=v*y-_*E,G=x*S-g*A,H=x*y-_*A,J=g*y-_*S,B=P*J-F*H+T*G+L*O-I*N+U*w;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/B;return e[0]=(d*J-h*H+p*G)*q,e[1]=(a*H-r*J-l*G)*q,e[2]=(A*U-S*I+y*L)*q,e[3]=(g*I-x*U-_*L)*q,e[4]=(h*O-c*J-p*N)*q,e[5]=(t*J-a*O+l*N)*q,e[6]=(S*T-E*U-y*F)*q,e[7]=(v*U-g*T+_*F)*q,e[8]=(c*H-d*O+p*w)*q,e[9]=(r*O-t*H-l*w)*q,e[10]=(E*I-A*T+y*P)*q,e[11]=(x*T-v*I-_*P)*q,e[12]=(d*N-c*G-h*w)*q,e[13]=(t*G-r*N+a*w)*q,e[14]=(A*F-E*L-S*P)*q,e[15]=(v*L-x*F+g*P)*q,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,h=e.z,p=l*c,v=l*d;return this.set(p*c+r,p*d-a*h,p*h+a*d,0,p*d+a*h,v*d+r,v*h-a*c,0,p*h-a*d,v*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,p=l+l,v=c+c,x=d+d,g=l*p,_=l*v,E=l*x,A=c*v,S=c*x,y=d*x,P=h*p,F=h*v,T=h*x,L=r.x,I=r.y,U=r.z;return a[0]=(1-(A+y))*L,a[1]=(_+T)*L,a[2]=(E-F)*L,a[3]=0,a[4]=(_-T)*I,a[5]=(1-(g+y))*I,a[6]=(S+P)*I,a[7]=0,a[8]=(E+F)*U,a[9]=(S-P)*U,a[10]=(1-(g+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=ca.set(a[0],a[1],a[2]).length();const d=ca.set(a[4],a[5],a[6]).length(),h=ca.set(a[8],a[9],a[10]).length();l<0&&(c=-c),zi.copy(this);const p=1/c,v=1/d,x=1/h;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=x,zi.elements[9]*=x,zi.elements[10]*=x,t.setFromRotationMatrix(zi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,t,r,a,l,c,d=ir,h=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(r-a),g=(t+e)/(t-e),_=(r+a)/(r-a);let E,A;if(h)E=l/(c-l),A=c*l/(c-l);else if(d===ir)E=-(c+l)/(c-l),A=-2*c*l/(c-l);else if(d===No)E=-c/(c-l),A=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=ir,h=!1){const p=this.elements,v=2/(t-e),x=2/(r-a),g=-(t+e)/(t-e),_=-(r+a)/(r-a);let E,A;if(h)E=1/(c-l),A=c/(c-l);else if(d===ir)E=-2/(c-l),A=-(c+l)/(c-l);else if(d===No)E=-1/(c-l),A=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=_,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Nc.prototype.isMatrix4=!0;let Yt=Nc;const ca=new K,zi=new Yt,oS=new K(0,0,0),lS=new K(1,1,1),Kr=new K,zl=new K,_i=new K,Ig=new Yt,Ng=new ss;class as{constructor(e=0,t=0,r=0,a=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],p=a[5],v=a[9],x=a[2],g=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,_),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ig,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Dg=new K,ua=new ss,vr=new Yt,Gl=new K,po=new K,uS=new K,dS=new ss,Ug=new K(1,0,0),Fg=new K(0,1,0),Og=new K(0,0,1),kg={type:"added"},fS={type:"removed"},da={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Fn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new K,t=new as,r=new ss,a=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Tt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(Ug,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,t){return Dg.copy(e).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ug,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gl.copy(e):Gl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(po,Gl,this.up):vr.lookAt(Gl,po,this.up),this.quaternion.setFromRotationMatrix(vr),a&&(vr.extractRotation(a.matrixWorld),ua.setFromRotationMatrix(vr),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kg),da.child=e,this.dispatchEvent(da),da.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fS),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kg),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),x=c(e.shapes),g=c(e.skeletons),_=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const h=[];for(const p in d){const v=d[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new K(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class is extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),y=this._getHandJoint(p,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),_=.02,E=.005;p.inputState.pinching&&g>_+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=_-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new is;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Id(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=kt.workingColorSpace){if(e=Qx(e,1),t=Dt(t,0,1),r=Dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Id(c,l,e+1/3),this.g=Id(c,l,e),this.b=Id(c,l,e-1/3)}return kt.colorSpaceToWorking(this,a),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=gv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return kt.workingToColorSpace(Yn.copy(this),e),Math.round(Dt(Yn.r*255,0,255))*65536+Math.round(Dt(Yn.g*255,0,255))*256+Math.round(Dt(Yn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(Yn.copy(this),t);const r=Yn.r,a=Yn.g,l=Yn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,p;const v=(d+c)/2;if(d===c)h=0,p=0;else{const x=c-d;switch(p=v<=.5?x/(c+d):x/(2-c-d),c){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=xi){kt.workingToColorSpace(Yn.copy(this),e);const t=Yn.r,r=Yn.g,a=Yn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Vl);const r=Ad(Zr.h,Vl.h,t),a=Ad(Zr.s,Vl.s,t),l=Ad(Zr.l,Vl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Mt;Mt.NAMES=gv;class xh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(e),this.density=t}clone(){return new xh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new K,_r=new K,Nd=new K,yr=new K,fa=new K,ha=new K,Bg=new K,Dd=new K,Ud=new K,Fd=new K,Od=new pn,kd=new pn,Bd=new pn;class Wi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Gi.subVectors(e,t),a.cross(Gi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Gi.subVectors(a,t),_r.subVectors(r,t),Nd.subVectors(e,t);const c=Gi.dot(Gi),d=Gi.dot(_r),h=Gi.dot(Nd),p=_r.dot(_r),v=_r.dot(Nd),x=c*p-d*d;if(x===0)return l.set(0,0,0),null;const g=1/x,_=(p*h-d*v)*g,E=(c*v-d*h)*g;return l.set(1-_-E,E,_)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,a,l,c,d,h){return this.getBarycoord(e,t,r,a,yr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,yr.x),h.addScaledVector(c,yr.y),h.addScaledVector(d,yr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return Od.setScalar(0),kd.setScalar(0),Bd.setScalar(0),Od.fromBufferAttribute(e,t),kd.fromBufferAttribute(e,r),Bd.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Od,l.x),c.addScaledVector(kd,l.y),c.addScaledVector(Bd,l.z),c}static isFrontFacing(e,t,r,a){return Gi.subVectors(r,t),_r.subVectors(e,t),Gi.cross(_r).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Gi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;fa.subVectors(a,r),ha.subVectors(l,r),Dd.subVectors(e,r);const h=fa.dot(Dd),p=ha.dot(Dd);if(h<=0&&p<=0)return t.copy(r);Ud.subVectors(e,a);const v=fa.dot(Ud),x=ha.dot(Ud);if(v>=0&&x<=v)return t.copy(a);const g=h*x-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(fa,c);Fd.subVectors(e,l);const _=fa.dot(Fd),E=ha.dot(Fd);if(E>=0&&_<=E)return t.copy(l);const A=_*p-h*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(ha,d);const S=v*E-_*x;if(S<=0&&x-v>=0&&_-E>=0)return Bg.subVectors(l,a),d=(x-v)/(x-v+(_-E)),t.copy(a).addScaledVector(Bg,d);const y=1/(S+A+g);return c=A*y,d=g*y,t.copy(r).addScaledVector(fa,c).addScaledVector(ha,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ns{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Vi):Vi.fromBufferAttribute(l,c),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hl.copy(r.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Wl.subVectors(this.max,mo),pa.subVectors(e.a,mo),ma.subVectors(e.b,mo),ga.subVectors(e.c,mo),Jr.subVectors(ma,pa),Qr.subVectors(ga,ma),xs.subVectors(pa,ga);let t=[0,-Jr.z,Jr.y,0,-Qr.z,Qr.y,0,-xs.z,xs.y,Jr.z,0,-Jr.x,Qr.z,0,-Qr.x,xs.z,0,-xs.x,-Jr.y,Jr.x,0,-Qr.y,Qr.x,0,-xs.y,xs.x,0];return!zd(t,pa,ma,ga,Wl)||(t=[1,0,0,0,1,0,0,0,1],!zd(t,pa,ma,ga,Wl))?!1:(Xl.crossVectors(Jr,Qr),t=[Xl.x,Xl.y,Xl.z],zd(t,pa,ma,ga,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new K,new K,new K,new K,new K,new K,new K,new K],Vi=new K,Hl=new Ns,pa=new K,ma=new K,ga=new K,Jr=new K,Qr=new K,xs=new K,mo=new K,Wl=new K,Xl=new K,Ss=new K;function zd(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Ss.fromArray(s,l);const d=a.x*Math.abs(Ss.x)+a.y*Math.abs(Ss.y)+a.z*Math.abs(Ss.z),h=e.dot(Ss),p=t.dot(Ss),v=r.dot(Ss);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>d)return!1}return!0}const Mn=new K,jl=new vt;let mS=0;class $n extends os{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$x,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ho(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=di(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),r=di(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),r=di(r,this.array),a=di(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),r=di(r,this.array),a=di(a,this.array),l=di(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vv extends $n{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _v extends $n{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class tn extends $n{constructor(e,t,r){super(new Float32Array(e),t,r)}}const gS=new Ns,go=new K,Gd=new K;class Ds{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gS.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const t=go.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(go,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Gd)),this.expandByPoint(go.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vS=0;const Ri=new Yt,Vd=new Fn,va=new K,yi=new Ns,vo=new Ns,Dn=new K;class gn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qx(e)?_v:vv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Tt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(va).negate(),this.translate(va.x,va.y,va.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new tn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];vo.setFromBufferAttribute(d),this.morphTargetsRelative?(Dn.addVectors(yi.min,vo.min),yi.expandByPoint(Dn),Dn.addVectors(yi.max,vo.max),yi.expandByPoint(Dn)):(yi.expandByPoint(vo.min),yi.expandByPoint(vo.max))}yi.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)Dn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Dn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Dn.fromBufferAttribute(d,p),h&&(va.fromBufferAttribute(e,p),Dn.add(va)),a=Math.max(a,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new $n(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],h=[];for(let w=0;w<r.count;w++)d[w]=new K,h[w]=new K;const p=new K,v=new K,x=new K,g=new vt,_=new vt,E=new vt,A=new K,S=new K;function y(w,N,O){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,N),x.fromBufferAttribute(r,O),g.fromBufferAttribute(l,w),_.fromBufferAttribute(l,N),E.fromBufferAttribute(l,O),v.sub(p),x.sub(p),_.sub(g),E.sub(g);const G=1/(_.x*E.y-E.x*_.y);isFinite(G)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(x,-_.y).multiplyScalar(G),S.copy(x).multiplyScalar(_.x).addScaledVector(v,-E.x).multiplyScalar(G),d[w].add(A),d[N].add(A),d[O].add(A),h[w].add(S),h[N].add(S),h[O].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let w=0,N=P.length;w<N;++w){const O=P[w],G=O.start,H=O.count;for(let J=G,B=G+H;J<B;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const F=new K,T=new K,L=new K,I=new K;function U(w){L.fromBufferAttribute(a,w),I.copy(L);const N=d[w];F.copy(N),F.sub(L.multiplyScalar(L.dot(N))).normalize(),T.crossVectors(I,N);const G=T.dot(h[w])<0?-1:1;c.setXYZW(w,F.x,F.y,F.z,G)}for(let w=0,N=P.length;w<N;++w){const O=P[w],G=O.start,H=O.count;for(let J=G,B=G+H;J<B;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const a=new K,l=new K,c=new K,d=new K,h=new K,p=new K,v=new K,x=new K;if(e)for(let g=0,_=e.count;g<_;g+=3){const E=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),v.subVectors(c,l),x.subVectors(a,l),v.cross(x),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(v),h.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,_=t.count;g<_;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),x.subVectors(a,l),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(d,h){const p=d.array,v=d.itemSize,x=d.normalized,g=new p.constructor(h.length*v);let _=0,E=0;for(let A=0,S=h.length;A<S;A++){d.isInterleavedBufferAttribute?_=h[A]*d.data.stride+d.offset:_=h[A]*v;for(let y=0;y<v;y++)g[E++]=p[_++]}return new $n(g,v,x)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const g=p[v],_=e(g,r);h.push(_)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,g=p.length;x<g;x++){const _=p[x];v.push(_.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let g=0,_=x.length;g<_;g++)v.push(x[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new K,_S=new K,yS=new Tt;class wr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Hd.subVectors(r,t).cross(_S.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Hd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yS.getNormalMatrix(e),a=this.coplanarPoint(Hd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xS=0;class Us extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=Ro,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J0,this.blendDst=Q0,this.blendEquation=Ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wd,this.stencilZFail=wd,this.stencilZPass=wd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new wr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new vt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new K,Wd=new K,Yl=new K,$l=new K;class Fo{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Wd.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),$l.copy(this.origin).sub(Wd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Yl),d=$l.dot(this.direction),h=-$l.dot(Yl),p=$l.lengthSq(),v=Math.abs(1-c*c);let x,g,_,E;if(v>0)if(x=c*h-d,g=c*d-h,E=l*v,x>=0)if(g>=-E)if(g<=E){const A=1/v;x*=A,g*=A,_=x*(x+c*g+2*d)+g*(c*x+g+2*h)+p}else g=l,x=Math.max(0,-(c*g+d)),_=-x*x+g*(g+2*h)+p;else g=-l,x=Math.max(0,-(c*g+d)),_=-x*x+g*(g+2*h)+p;else g<=-E?(x=Math.max(0,-(-c*l+d)),g=x>0?-l:Math.min(Math.max(-l,-h),l),_=-x*x+g*(g+2*h)+p):g<=E?(x=0,g=Math.min(Math.max(-l,-h),l),_=g*(g+2*h)+p):(x=Math.max(0,-(c*l+d)),g=x>0?l:Math.min(Math.max(-l,-h),l),_=-x*x+g*(g+2*h)+p);else g=c>0?-l:l,x=Math.max(0,-(c*g+d)),_=-x*x+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Wd).addScaledVector(Yl,g),_}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),a=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),x>=0?(d=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(d=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,a,l){const c=this.origin,d=this.direction,h=d.x,p=d.y,v=d.z,x=e.x-c.x,g=e.y-c.y,_=e.z-c.z,E=t.x-c.x,A=t.y-c.y,S=t.z-c.z,y=r.x-c.x,P=r.y-c.y,F=r.z-c.z,T=Math.abs(h),L=Math.abs(p),I=Math.abs(v);let U,w,N,O,G,H,J,B,q,pe,oe,j;if(T>=L&&T>=I?(N=h,H=x,q=E,j=y,h>=0?(U=p,w=v,O=g,G=_,J=A,B=S,pe=P,oe=F):(U=v,w=p,O=_,G=g,J=S,B=A,pe=F,oe=P)):L>=I?(N=p,H=g,q=A,j=P,p>=0?(U=v,w=h,O=_,G=x,J=S,B=E,pe=F,oe=y):(U=h,w=v,O=x,G=_,J=E,B=S,pe=y,oe=F)):(N=v,H=_,q=S,j=F,v>=0?(U=h,w=p,O=x,G=g,J=E,B=A,pe=y,oe=P):(U=p,w=h,O=g,G=x,J=A,B=E,pe=P,oe=y)),N===0)return null;const V=U/N,te=w/N,D=1/N,le=O-V*H,Te=G-te*H,Ke=J-V*q,Ge=B-te*q,we=pe-V*j,re=oe-te*j,ae=we*Ge-re*Ke,Le=le*re-Te*we,et=Ke*Te-Ge*le;if(a){if(ae<0||Le<0||et<0)return null}else if((ae<0||Le<0||et<0)&&(ae>0||Le>0||et>0))return null;const He=ae+Le+et;if(He===0)return null;const _t=D*(ae*H+Le*q+et*j);return(He>0?_t<0:_t>0)?null:this.at(_t/He,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tr extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zg=new Yt,Ms=new Fo,ql=new Ds,Gg=new K,Kl=new K,Zl=new K,Jl=new K,Xd=new K,Ql=new K,Vg=new K,ec=new K;class Cn extends Fn{constructor(e=new gn,t=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Ql.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=d[h],x=l[h];v!==0&&(Xd.fromBufferAttribute(x,e),c?Ql.addScaledVector(Xd,v):Ql.addScaledVector(Xd.sub(t),v))}t.add(Ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ql.copy(r.boundingSphere),ql.applyMatrix4(l),Ms.copy(e.ray).recast(e.near),!(ql.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ql,Gg)===null||Ms.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(zg.copy(l).invert(),Ms.copy(e.ray).applyMatrix4(zg),!(r.boundingBox!==null&&Ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,g=l.groups,_=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const S=g[E],y=c[S.materialIndex],P=Math.max(S.start,_.start),F=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let T=P,L=F;T<L;T+=3){const I=d.getX(T),U=d.getX(T+1),w=d.getX(T+2);a=tc(this,y,e,r,p,v,x,I,U,w),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,_.start),A=Math.min(d.count,_.start+_.count);for(let S=E,y=A;S<y;S+=3){const P=d.getX(S),F=d.getX(S+1),T=d.getX(S+2);a=tc(this,c,e,r,p,v,x,P,F,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const S=g[E],y=c[S.materialIndex],P=Math.max(S.start,_.start),F=Math.min(h.count,Math.min(S.start+S.count,_.start+_.count));for(let T=P,L=F;T<L;T+=3){const I=T,U=T+1,w=T+2;a=tc(this,y,e,r,p,v,x,I,U,w),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,_.start),A=Math.min(h.count,_.start+_.count);for(let S=E,y=A;S<y;S+=3){const P=S,F=S+1,T=S+2;a=tc(this,c,e,r,p,v,x,P,F,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function SS(s,e,t,r,a,l,c,d){let h;if(e.side===ti?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===Ps,d),h===null)return null;ec.copy(d),ec.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ec);return p<t.near||p>t.far?null:{distance:p,point:ec.clone(),object:s}}function tc(s,e,t,r,a,l,c,d,h,p){s.getVertexPosition(d,Kl),s.getVertexPosition(h,Zl),s.getVertexPosition(p,Jl);const v=SS(s,e,t,r,Kl,Zl,Jl,Vg);if(v){const x=new K;Wi.getBarycoord(Vg,Kl,Zl,Jl,x),a&&(v.uv=Wi.getInterpolatedAttribute(a,d,h,p,x,new vt)),l&&(v.uv1=Wi.getInterpolatedAttribute(l,d,h,p,x,new vt)),c&&(v.normal=Wi.getInterpolatedAttribute(c,d,h,p,x,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:h,c:p,normal:new K,materialIndex:0};Wi.getNormal(Kl,Zl,Jl,g.normal),v.face=g,v.barycoord=x}return v}class yv extends ni{constructor(e=null,t=1,r=1,a,l,c,d,h,p=zn,v=zn,x,g){super(null,c,d,h,p,v,a,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hg extends $n{constructor(e,t,r,a=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _a=new Yt,Wg=new Yt,nc=[],Xg=new Ns,MS=new Yt,_o=new Cn,yo=new Ds;class ES extends Cn{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hg(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,MS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,_a),Xg.copy(e.boundingBox).applyMatrix4(_a),this.boundingBox.union(Xg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,_a),yo.copy(e.boundingSphere).applyMatrix4(_a),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=r.length+1,c=e*l+1;for(let d=0;d<r.length;d++)r[d]=a[c+d]}raycast(e,t){const r=this.matrixWorld,a=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(r),e.ray.intersectsSphere(yo)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,_a),Wg.multiplyMatrices(r,_a),_o.matrixWorld=Wg,_o.raycast(e,nc);for(let c=0,d=nc.length;c<d;c++){const h=nc[c];h.instanceId=l,h.object=this,t.push(h)}nc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new yv(new Float32Array(a*this.count),a,this.count,fh,Xi));const l=this.morphTexture.source.data.data;let c=0;for(let p=0;p<r.length;p++)c+=r[p];const d=this.geometry.morphTargetsRelative?1:1-c,h=a*e;return l[h]=d,l.set(r,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Es=new Ds,wS=new vt(.5,.5),ic=new K;class Sh{constructor(e=new wr,t=new wr,r=new wr,a=new wr,l=new wr,c=new wr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ir,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],p=l[3],v=l[4],x=l[5],g=l[6],_=l[7],E=l[8],A=l[9],S=l[10],y=l[11],P=l[12],F=l[13],T=l[14],L=l[15];if(a[0].setComponents(p-c,_-v,y-E,L-P).normalize(),a[1].setComponents(p+c,_+v,y+E,L+P).normalize(),a[2].setComponents(p+d,_+x,y+A,L+F).normalize(),a[3].setComponents(p-d,_-x,y-A,L-F).normalize(),r)a[4].setComponents(h,g,S,T).normalize(),a[5].setComponents(p-h,_-g,y-S,L-T).normalize();else if(a[4].setComponents(p-h,_-g,y-S,L-T).normalize(),t===ir)a[5].setComponents(p+h,_+g,y+S,L+T).normalize();else if(t===No)a[5].setComponents(h,g,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=wS.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(ic.x=a.normal.x>0?e.max.x:e.min.x,ic.y=a.normal.y>0?e.max.y:e.min.y,ic.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yc extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new K,Lc=new K,jg=new Yt,xo=new Fo,rc=new Ds,jd=new K,Yg=new K;class Zf extends Fn{constructor(e=new gn,t=new yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Pc.fromBufferAttribute(t,a-1),Lc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Pc.distanceTo(Lc);e.setAttribute("lineDistance",new tn(r,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(a),rc.radius+=l,e.ray.intersectsSphere(rc)===!1)return;jg.copy(a).invert(),xo.copy(e.ray).applyMatrix4(jg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const _=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let A=_,S=E-1;A<S;A+=p){const y=v.getX(A),P=v.getX(A+1),F=sc(this,e,xo,h,y,P,A);F&&t.push(F)}if(this.isLineLoop){const A=v.getX(E-1),S=v.getX(_),y=sc(this,e,xo,h,A,S,E-1);y&&t.push(y)}}else{const _=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let A=_,S=E-1;A<S;A+=p){const y=sc(this,e,xo,h,A,A+1,A);y&&t.push(y)}if(this.isLineLoop){const A=sc(this,e,xo,h,E-1,_,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function sc(s,e,t,r,a,l,c){const d=s.geometry.attributes.position;if(Pc.fromBufferAttribute(d,a),Lc.fromBufferAttribute(d,l),t.distanceSqToSegment(Pc,Lc,jd,Yg)>r)return;jd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(jd);if(!(p<e.near||p>e.far))return{distance:p,point:Yg.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const $g=new K,qg=new K;class AS extends Zf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)$g.fromBufferAttribute(t,a),qg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+$g.distanceTo(qg);e.setAttribute("lineDistance",new tn(r,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xc extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kg=new Yt,Jf=new Fo,ac=new Ds,oc=new K;class Yd extends Fn{constructor(e=new gn,t=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(a),ac.radius+=l,e.ray.intersectsSphere(ac)===!1)return;Kg.copy(a).invert(),Jf.copy(e.ray).applyMatrix4(Kg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,x=r.attributes.position;if(p!==null){const g=Math.max(0,c.start),_=Math.min(p.count,c.start+c.count);for(let E=g,A=_;E<A;E++){const S=p.getX(E);oc.fromBufferAttribute(x,S),Zg(oc,S,h,a,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let E=g,A=_;E<A;E++)oc.fromBufferAttribute(x,E),Zg(oc,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zg(s,e,t,r,a,l,c){const d=Jf.distanceSqToPoint(s);if(d<t){const h=new K;Jf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class xv extends ni{constructor(e=[],t=Ls,r,a,l,c,d,h,p,v){super(e,t,r,a,l,c,d,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Do extends ni{constructor(e,t,r=sr,a,l,c,d=zn,h=zn,p,v=Cr,x=1){if(v!==Cr&&v!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,a,l,c,d,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bS extends Do{constructor(e,t=sr,r=Ls,a,l,c=zn,d=zn,h,p=Cr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,r,a,l,c,d,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sv extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oo extends gn{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],x=[];let g=0,_=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(x,2));function E(A,S,y,P,F,T,L,I,U,w,N){const O=T/U,G=L/w,H=T/2,J=L/2,B=I/2,q=U+1,pe=w+1;let oe=0,j=0;const V=new K;for(let te=0;te<pe;te++){const D=te*G-J;for(let le=0;le<q;le++){const Te=le*O-H;V[A]=Te*P,V[S]=D*F,V[y]=B,p.push(V.x,V.y,V.z),V[A]=0,V[S]=0,V[y]=I>0?1:-1,v.push(V.x,V.y,V.z),x.push(le/U),x.push(1-te/w),oe+=1}}for(let te=0;te<w;te++)for(let D=0;D<U;D++){const le=g+D+q*te,Te=g+D+q*(te+1),Ke=g+(D+1)+q*(te+1),Ge=g+(D+1)+q*te;h.push(le,Te,Ge),h.push(Te,Ke,Ge),j+=6}d.addGroup(_,j,N),_+=j,g+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mh extends gn{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],x=[],g=[],_=[];let E=0;const A=[],S=r/2;let y=0;P(),c===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(v),this.setAttribute("position",new tn(x,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(_,2));function P(){const T=new K,L=new K;let I=0;const U=(t-e)/r;for(let w=0;w<=l;w++){const N=[],O=w/l,G=O*(t-e)+e;for(let H=0;H<=a;H++){const J=H/a,B=J*h+d,q=Math.sin(B),pe=Math.cos(B);L.x=G*q,L.y=-O*r+S,L.z=G*pe,x.push(L.x,L.y,L.z),T.set(q,U,pe).normalize(),g.push(T.x,T.y,T.z),_.push(J,1-O),N.push(E++)}A.push(N)}for(let w=0;w<a;w++)for(let N=0;N<l;N++){const O=A[N][w],G=A[N+1][w],H=A[N+1][w+1],J=A[N][w+1];(e>0||N!==0)&&(v.push(O,G,J),I+=3),(t>0||N!==l-1)&&(v.push(G,H,J),I+=3)}p.addGroup(y,I,0),y+=I}function F(T){const L=E,I=new vt,U=new K;let w=0;const N=T===!0?e:t,O=T===!0?1:-1;for(let H=1;H<=a;H++)x.push(0,S*O,0),g.push(0,O,0),_.push(.5,.5),E++;const G=E;for(let H=0;H<=a;H++){const B=H/a*h+d,q=Math.cos(B),pe=Math.sin(B);U.x=N*pe,U.y=S*O,U.z=N*q,x.push(U.x,U.y,U.z),g.push(0,O,0),I.x=q*.5+.5,I.y=pe*.5*O+.5,_.push(I.x,I.y),E++}for(let H=0;H<a;H++){const J=L+H,B=G+H;T===!0?v.push(B,B+1,J):v.push(B+1,B,J),w+=3}p.addGroup(y,w,T===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eh extends gn{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],c=[];d(a),p(r),v(),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(l.slice(),3)),this.setAttribute("uv",new tn(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(P){const F=new K,T=new K,L=new K;for(let I=0;I<t.length;I+=3)_(t[I+0],F),_(t[I+1],T),_(t[I+2],L),h(F,T,L,P)}function h(P,F,T,L){const I=L+1,U=[];for(let w=0;w<=I;w++){U[w]=[];const N=P.clone().lerp(T,w/I),O=F.clone().lerp(T,w/I),G=I-w;for(let H=0;H<=G;H++)H===0&&w===I?U[w][H]=N:U[w][H]=N.clone().lerp(O,H/G)}for(let w=0;w<I;w++)for(let N=0;N<2*(I-w)-1;N++){const O=Math.floor(N/2);N%2===0?(g(U[w][O+1]),g(U[w+1][O]),g(U[w][O])):(g(U[w][O+1]),g(U[w+1][O+1]),g(U[w+1][O]))}}function p(P){const F=new K;for(let T=0;T<l.length;T+=3)F.x=l[T+0],F.y=l[T+1],F.z=l[T+2],F.normalize().multiplyScalar(P),l[T+0]=F.x,l[T+1]=F.y,l[T+2]=F.z}function v(){const P=new K;for(let F=0;F<l.length;F+=3){P.x=l[F+0],P.y=l[F+1],P.z=l[F+2];const T=S(P)/2/Math.PI+.5,L=y(P)/Math.PI+.5;c.push(T,1-L)}E(),x()}function x(){for(let P=0;P<c.length;P+=6){const F=c[P+0],T=c[P+2],L=c[P+4],I=Math.max(F,T,L),U=Math.min(F,T,L);I>.9&&U<.1&&(F<.2&&(c[P+0]+=1),T<.2&&(c[P+2]+=1),L<.2&&(c[P+4]+=1))}}function g(P){l.push(P.x,P.y,P.z)}function _(P,F){const T=P*3;F.x=e[T+0],F.y=e[T+1],F.z=e[T+2]}function E(){const P=new K,F=new K,T=new K,L=new K,I=new vt,U=new vt,w=new vt;for(let N=0,O=0;N<l.length;N+=9,O+=6){P.set(l[N+0],l[N+1],l[N+2]),F.set(l[N+3],l[N+4],l[N+5]),T.set(l[N+6],l[N+7],l[N+8]),I.set(c[O+0],c[O+1]),U.set(c[O+2],c[O+3]),w.set(c[O+4],c[O+5]),L.copy(P).add(F).add(T).divideScalar(3);const G=S(L);A(I,O+0,P,G),A(U,O+2,F,G),A(w,O+4,T,G)}}function A(P,F,T,L){L<0&&P.x===1&&(c[F]=P.x-1),T.x===0&&T.z===0&&(c[F]=L/2/Math.PI+.5)}function S(P){return Math.atan2(P.z,-P.x)}function y(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.vertices,e.indices,e.radius,e.detail)}}class TS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let d=0,h=l-1,p;for(;d<=h;)if(a=Math.floor(d+(h-d)/2),p=r[a]-c,p<0)d=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const v=r[a],g=r[a+1]-v,_=(c-v)/g;return(a+_)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),d=this.getPoint(l),h=t||(c.isVector2?new vt:new K);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new K,a=[],l=[],c=[],d=new K,h=new Yt;for(let _=0;_<=e;_++){const E=_/e;a[_]=this.getTangentAt(E,new K)}l[0]=new K,c[0]=new K;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),x=Math.abs(a[0].y),g=Math.abs(a[0].z);v<=p&&(p=v,r.set(1,0,0)),x<=p&&(p=x,r.set(0,1,0)),g<=p&&r.set(0,0,1),d.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],d),c[0].crossVectors(a[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),d.crossVectors(a[_-1],a[_]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Dt(a[_-1].dot(a[_]),-1,1));l[_].applyMatrix4(h.makeRotationAxis(d,E))}c[_].crossVectors(a[_],l[_])}if(t===!0){let _=Math.acos(Dt(l[0].dot(l[e]),-1,1));_/=e,a[0].dot(d.crossVectors(l[0],l[e]))>0&&(_=-_);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],_*E)),c[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function CS(s,e){const t=1-s;return t*t*t*e}function RS(s,e){const t=1-s;return 3*t*t*s*e}function PS(s,e){return 3*(1-s)*s*s*e}function LS(s,e){return s*s*s*e}function $d(s,e,t,r,a){return CS(s,e)+RS(s,t)+PS(s,r)+LS(s,a)}class Jg extends TS{constructor(e=new K,t=new K,r=new K,a=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new K){const r=t,a=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set($d(e,a.x,l.x,c.x,d.x),$d(e,a.y,l.y,c.y,d.y),$d(e,a.z,l.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wh extends Eh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wh(e.radius,e.detail)}}class Oc extends gn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),h=Math.floor(a),p=d+1,v=h+1,x=e/d,g=t/h,_=[],E=[],A=[],S=[];for(let y=0;y<v;y++){const P=y*g-c;for(let F=0;F<p;F++){const T=F*x-l;E.push(T,-P,0),A.push(0,0,1),S.push(F/d),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let P=0;P<d;P++){const F=P+p*y,T=P+p*(y+1),L=P+1+p*(y+1),I=P+1+p*y;_.push(F,T,I),_.push(T,L,I)}this.setIndex(_),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ic extends gn{constructor(e=.5,t=1,r=32,a=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const d=[],h=[],p=[],v=[];let x=e;const g=(t-e)/a,_=new K,E=new vt;for(let A=0;A<=a;A++){for(let S=0;S<=r;S++){const y=l+S/r*c;_.x=x*Math.cos(y),_.y=x*Math.sin(y),h.push(_.x,_.y,_.z),p.push(0,0,1),E.x=(_.x/t+1)/2,E.y=(_.y/t+1)/2,v.push(E.x,E.y)}x+=g}for(let A=0;A<a;A++){const S=A*(r+1);for(let y=0;y<r;y++){const P=y+S,F=P,T=P+r+1,L=P+r+2,I=P+1;d.push(F,T,I),d.push(T,L,I)}}this.setIndex(d),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(p,3)),this.setAttribute("uv",new tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wa extends gn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let p=0;const v=[],x=new K,g=new K,_=[],E=[],A=[],S=[];for(let y=0;y<=r;y++){const P=[],F=y/r,T=c+F*d,L=e*Math.cos(T),I=Math.sqrt(e*e-L*L);let U=0;y===0&&c===0?U=.5/t:y===r&&h===Math.PI&&(U=-.5/t);for(let w=0;w<=t;w++){const N=w/t,O=a+N*l;x.x=-I*Math.cos(O),x.y=L,x.z=I*Math.sin(O),E.push(x.x,x.y,x.z),g.copy(x).normalize(),A.push(g.x,g.y,g.z),S.push(N+U,1-F),P.push(p++)}v.push(P)}for(let y=0;y<r;y++)for(let P=0;P<t;P++){const F=v[y][P+1],T=v[y][P],L=v[y+1][P],I=v[y+1][P+1];(y!==0||c>0)&&_.push(F,T,I),(y!==r-1||h<Math.PI)&&_.push(T,L,I)}this.setIndex(_),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ah extends gn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2,c=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l,thetaStart:c,thetaLength:d},r=Math.floor(r),a=Math.floor(a);const h=[],p=[],v=[],x=[],g=new K,_=new K,E=new K;for(let A=0;A<=r;A++){const S=c+A/r*d;for(let y=0;y<=a;y++){const P=y/a*l;_.x=(e+t*Math.cos(S))*Math.cos(P),_.y=(e+t*Math.cos(S))*Math.sin(P),_.z=t*Math.sin(S),p.push(_.x,_.y,_.z),g.x=e*Math.cos(P),g.y=e*Math.sin(P),E.subVectors(_,g).normalize(),v.push(E.x,E.y,E.z),x.push(y/a),x.push(A/r)}}for(let A=1;A<=r;A++)for(let S=1;S<=a;S++){const y=(a+1)*A+S-1,P=(a+1)*(A-1)+S-1,F=(a+1)*(A-1)+S,T=(a+1)*A+S;h.push(y,P,T),h.push(P,F,T)}this.setIndex(h),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ia(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Qg(a))a.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Qg(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function ei(s){const e={};for(let t=0;t<s.length;t++){const r=Ia(s[t]);for(const a in r)e[a]=r[a]}return e}function Qg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function IS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const NS={clone:Ia,merge:ei};var DS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(a.value);break;case"v2":this.uniforms[r].value=new vt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new K().fromArray(a.value);break;case"v4":this.uniforms[r].value=new pn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new Tt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Yt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class FS extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class OS extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kS extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ev extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const qd=new Yt,e0=new K,t0=new K;class zS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;e0.setFromMatrixPosition(e.matrixWorld),t.position.copy(e0),t0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(t0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){qd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(qd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,c=a?a.z/l.x:1,d=a?a.w/l.y:1,h=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===No||e.reversedDepth?t.set(.5*c,0,0,.5*c+h,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+h,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lc=new K,cc=new ss,Qi=new K;class wv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ir,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lc,cc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(lc,cc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new K,n0=new vt,i0=new vt;class Pi extends wv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,n0,i0),t.subVectors(i0,n0)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bh extends wv{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class GS extends zS{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r0 extends Ev{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new GS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class VS extends Ev{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ya=-90,xa=1;class HS extends Fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Pi(ya,xa,e,t);a.layers=this.layers,this.add(a);const l=new Pi(ya,xa,e,t);l.layers=this.layers,this.add(l);const c=new Pi(ya,xa,e,t);c.layers=this.layers,this.add(c);const d=new Pi(ya,xa,e,t);d.layers=this.layers,this.add(d);const h=new Pi(ya,xa,e,t);h.layers=this.layers,this.add(h);const p=new Pi(ya,xa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,h]=t;for(const p of t)this.remove(p);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===No)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,_),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class WS extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const s0=new Yt;class XS{constructor(e,t,r=0,a=1/0){this.ray=new Fo(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(e,t=!0,r=[]){return Qf(e,this,r,t),r.sort(a0),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Qf(e[a],this,r,t);return r.sort(a0),r}}function a0(s,e){return s.distance-e.distance}function Qf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,d=l.length;c<d;c++)Qf(l[c],e,t,!0)}}class o0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ih=class Ih{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Ih.prototype.isMatrix2=!0;let l0=Ih;class jS extends os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c0(s,e,t,r){const a=YS(r);switch(t){case fv:return s*e;case fh:return s*e/a.components*a.byteLength;case hh:return s*e/a.components*a.byteLength;case Is:return s*e*2/a.components*a.byteLength;case ph:return s*e*2/a.components*a.byteLength;case hv:return s*e*3/a.components*a.byteLength;case ji:return s*e*4/a.components*a.byteLength;case mh:return s*e*4/a.components*a.byteLength;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:case Mf:return Math.max(s,16)*Math.max(e,8)/4;case yf:case Sf:return Math.max(s,8)*Math.max(e,8)/2;case Ef:case wf:case bf:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:case Ac:case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bc:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YS(s){switch(s){case Si:case lv:return{byteLength:1,components:1};case Lo:case cv:case ar:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case sr:case ch:case Xi:return{byteLength:4,components:1};case uv:case dv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Av(){let s=null,e=!1,t=null,r=null;function a(l,c){r=s.requestAnimationFrame(a),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function $S(s){const e=new WeakMap;function t(d,h){const p=d.array,v=d.usage,x=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),d.onUploadCallback();let _;if(p instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)_=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=s.SHORT;else if(p instanceof Uint32Array)_=s.UNSIGNED_INT;else if(p instanceof Int32Array)_=s.INT;else if(p instanceof Int8Array)_=s.BYTE;else if(p instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,p){const v=h.array,x=h.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,v);else{x.sort((_,E)=>_.start-E.start);let g=0;for(let _=1;_<x.length;_++){const E=x[g],A=x[_];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,x[g]=A)}x.length=g+1;for(let _=0,E=x.length;_<E;_++){const A=x[_];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:c}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,G1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_M=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:qS,alphahash_pars_fragment:KS,alphamap_fragment:ZS,alphamap_pars_fragment:JS,alphatest_fragment:QS,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:r1,begin_vertex:s1,beginnormal_vertex:a1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:h1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:v1,common:_1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:x1,displacementmap_pars_vertex:S1,displacementmap_vertex:M1,emissivemap_fragment:E1,emissivemap_pars_fragment:w1,colorspace_fragment:A1,colorspace_pars_fragment:b1,envmap_fragment:T1,envmap_common_pars_fragment:C1,envmap_pars_fragment:R1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:G1,envmap_vertex:L1,fog_vertex:I1,fog_pars_vertex:N1,fog_fragment:D1,fog_pars_fragment:U1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:O1,lights_lambert_fragment:k1,lights_lambert_pars_fragment:B1,lights_pars_begin:z1,lights_toon_fragment:V1,lights_toon_pars_fragment:H1,lights_phong_fragment:W1,lights_phong_pars_fragment:X1,lights_physical_fragment:j1,lights_physical_pars_fragment:Y1,lights_fragment_begin:$1,lights_fragment_maps:q1,lights_fragment_end:K1,lightprobes_pars_fragment:Z1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:eM,logdepthbuf_vertex:tM,map_fragment:nM,map_pars_fragment:iM,map_particle_fragment:rM,map_particle_pars_fragment:sM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:oM,morphinstance_vertex:lM,morphcolor_vertex:cM,morphnormal_vertex:uM,morphtarget_pars_vertex:dM,morphtarget_vertex:fM,normal_fragment_begin:hM,normal_fragment_maps:pM,normal_pars_fragment:mM,normal_pars_vertex:gM,normal_vertex:vM,normalmap_pars_fragment:_M,clearcoat_normal_fragment_begin:yM,clearcoat_normal_fragment_maps:xM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:MM,opaque_fragment:EM,packing:wM,premultiplied_alpha_fragment:AM,project_vertex:bM,dithering_fragment:TM,dithering_pars_fragment:CM,roughnessmap_fragment:RM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:LM,shadowmap_pars_vertex:IM,shadowmap_vertex:NM,shadowmask_pars_fragment:DM,skinbase_vertex:UM,skinning_pars_vertex:FM,skinning_vertex:OM,skinnormal_vertex:kM,specularmap_fragment:BM,specularmap_pars_fragment:zM,tonemapping_fragment:GM,tonemapping_pars_fragment:VM,transmission_fragment:HM,transmission_pars_fragment:WM,uv_pars_fragment:XM,uv_pars_vertex:jM,uv_vertex:YM,worldpos_vertex:$M,background_vert:qM,background_frag:KM,backgroundCube_vert:ZM,backgroundCube_frag:JM,cube_vert:QM,cube_frag:eE,depth_vert:tE,depth_frag:nE,distance_vert:iE,distance_frag:rE,equirect_vert:sE,equirect_frag:aE,linedashed_vert:oE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:uE,meshlambert_vert:dE,meshlambert_frag:fE,meshmatcap_vert:hE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:gE,meshphong_vert:vE,meshphong_frag:_E,meshphysical_vert:yE,meshphysical_frag:xE,meshtoon_vert:SE,meshtoon_frag:ME,points_vert:EE,points_frag:wE,shadow_vert:AE,shadow_frag:bE,sprite_vert:TE,sprite_frag:CE},$e={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},nr={basic:{uniforms:ei([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:ei([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:ei([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:ei([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:ei([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Mt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:ei([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:ei([$e.points,$e.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:ei([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:ei([$e.common,$e.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:ei([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:ei([$e.sprite,$e.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:ei([$e.common,$e.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:ei([$e.lights,$e.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};nr.physical={uniforms:ei([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const uc={r:0,b:0,g:0},RE=new Yt,bv=new Tt;bv.set(-1,0,0,0,1,0,0,0,1);function PE(s,e,t,r,a,l){const c=new Mt(0);let d=a===!0?0:1,h,p,v=null,x=0,g=null;function _(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const T=P.backgroundBlurriness>0;F=e.get(F,T)}return F}function E(P){let F=!1;const T=_(P);T===null?S(c,d):T&&T.isColor&&(S(T,1),F=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(P,F){const T=_(F);T&&(T.isCubeTexture||T.mapping===Fc)?(p===void 0&&(p=new Cn(new Oo(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ia(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RE.makeRotationFromEuler(F.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(bv),p.material.toneMapped=kt.getTransfer(T.colorSpace)!==qt,(v!==T||x!==T.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=T,x=T.version,g=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Cn(new Oc(2,2),new or({name:"BackgroundMaterial",uniforms:Ia(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=kt.getTransfer(T.colorSpace)!==qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(v!==T||x!==T.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=T,x=T.version,g=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function S(P,F){P.getRGB(uc,Mv(s)),t.buffers.color.setClear(uc.r,uc.g,uc.b,F,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,F=1){c.set(P),d=F,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,S(c,d)},render:E,addToRenderList:A,dispose:y}}function LE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,c=!1;function d(G,H,J,B,q){let pe=!1;const oe=x(G,B,J,H);l!==oe&&(l=oe,p(l.object)),pe=_(G,B,J,q),pe&&E(G,B,J,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,T(G,H,J,B),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function h(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function x(G,H,J,B){const q=B.wireframe===!0;let pe=r[H.id];pe===void 0&&(pe={},r[H.id]=pe);const oe=G.isInstancedMesh===!0?G.id:0;let j=pe[oe];j===void 0&&(j={},pe[oe]=j);let V=j[J.id];V===void 0&&(V={},j[J.id]=V);let te=V[q];return te===void 0&&(te=g(h()),V[q]=te),te}function g(G){const H=[],J=[],B=[];for(let q=0;q<t;q++)H[q]=0,J[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:B,object:G,attributes:{},index:null}}function _(G,H,J,B){const q=l.attributes,pe=H.attributes;let oe=0;const j=J.getAttributes();for(const V in j)if(j[V].location>=0){const D=q[V];let le=pe[V];if(le===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(le=G.instanceColor)),D===void 0||D.attribute!==le||le&&D.data!==le.data)return!0;oe++}return l.attributesNum!==oe||l.index!==B}function E(G,H,J,B){const q={},pe=H.attributes;let oe=0;const j=J.getAttributes();for(const V in j)if(j[V].location>=0){let D=pe[V];D===void 0&&(V==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),V==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const le={};le.attribute=D,D&&D.data&&(le.data=D.data),q[V]=le,oe++}l.attributes=q,l.attributesNum=oe,l.index=B}function A(){const G=l.newAttributes;for(let H=0,J=G.length;H<J;H++)G[H]=0}function S(G){y(G,0)}function y(G,H){const J=l.newAttributes,B=l.enabledAttributes,q=l.attributeDivisors;J[G]=1,B[G]===0&&(s.enableVertexAttribArray(G),B[G]=1),q[G]!==H&&(s.vertexAttribDivisor(G,H),q[G]=H)}function P(){const G=l.newAttributes,H=l.enabledAttributes;for(let J=0,B=H.length;J<B;J++)H[J]!==G[J]&&(s.disableVertexAttribArray(J),H[J]=0)}function F(G,H,J,B,q,pe,oe){oe===!0?s.vertexAttribIPointer(G,H,J,q,pe):s.vertexAttribPointer(G,H,J,B,q,pe)}function T(G,H,J,B){A();const q=B.attributes,pe=J.getAttributes(),oe=H.defaultAttributeValues;for(const j in pe){const V=pe[j];if(V.location>=0){let te=q[j];if(te===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(te=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(te=G.instanceColor)),te!==void 0){const D=te.normalized,le=te.itemSize,Te=e.get(te);if(Te===void 0)continue;const Ke=Te.buffer,Ge=Te.type,we=Te.bytesPerElement,re=Ge===s.INT||Ge===s.UNSIGNED_INT||te.gpuType===ch;if(te.isInterleavedBufferAttribute){const ae=te.data,Le=ae.stride,et=te.offset;if(ae.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)y(V.location+He,ae.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let He=0;He<V.locationSize;He++)S(V.location+He);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let He=0;He<V.locationSize;He++)F(V.location+He,le/V.locationSize,Ge,D,Le*we,(et+le/V.locationSize*He)*we,re)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,te.meshPerAttribute);G.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<V.locationSize;ae++)S(V.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let ae=0;ae<V.locationSize;ae++)F(V.location+ae,le/V.locationSize,Ge,D,le*we,le/V.locationSize*ae*we,re)}}else if(oe!==void 0){const D=oe[j];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(V.location,D);break;case 3:s.vertexAttrib3fv(V.location,D);break;case 4:s.vertexAttrib4fv(V.location,D);break;default:s.vertexAttrib1fv(V.location,D)}}}}P()}function L(){N();for(const G in r){const H=r[G];for(const J in H){const B=H[J];for(const q in B){const pe=B[q];for(const oe in pe)v(pe[oe].object),delete pe[oe];delete B[q]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const H=r[G.id];for(const J in H){const B=H[J];for(const q in B){const pe=B[q];for(const oe in pe)v(pe[oe].object),delete pe[oe];delete B[q]}}delete r[G.id]}function U(G){for(const H in r){const J=r[H];for(const B in J){const q=J[B];if(q[G.id]===void 0)continue;const pe=q[G.id];for(const oe in pe)v(pe[oe].object),delete pe[oe];delete q[G.id]}}}function w(G){for(const H in r){const J=r[H],B=G.isInstancedMesh===!0?G.id:0,q=J[B];if(q!==void 0){for(const pe in q){const oe=q[pe];for(const j in oe)v(oe[j].object),delete oe[j];delete q[pe]}delete J[B],Object.keys(J).length===0&&delete r[H]}}}function N(){O(),c=!0,l!==a&&(l=a,p(l.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:N,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function IE(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let _=0;_<v;_++)g+=p[_];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function NE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==ji&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const w=U===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Si&&U!==Xi&&!w&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(xt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:T,maxSamples:L,samples:I}}function DE(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new wr,d=new Tt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const _=x.length!==0||g||r!==0||a;return a=g,r=x.length,_},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,_){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,y=s.get(x);if(!a||E===null||E.length===0||l&&!S)l?v(null):p();else{const P=l?0:r,F=P*4;let T=y.clippingState||null;h.value=T,T=v(E,g,F,_);for(let L=0;L!==F;++L)T[L]=t[L];y.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,_,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=h.value,E!==!0||S===null){const y=_+A*4,P=g.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let F=0,T=_;F!==A;++F,T+=4)c.copy(x[F]).applyMatrix4(P,d),c.normal.toArray(S,T),S[T+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Aa=4,UE=6,FE=20,OE=256,So=new bh,u0=new Mt;let Kd=null,Zd=0,Jd=0,Qd=!1;const kE=new K,ws=new K;class d0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=kE}=l;Kd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Zd,Jd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ar,format:ji,colorSpace:Tc,depthBuffer:!1},a=f0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=BE(l)),this._blurMaterial=GE(l,e,t),this._ggxMaterial=zE(l,e,t)}return a}_compileMaterial(e){const t=new Cn(new gn,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,r,a,l){const h=new Pi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,_=x.toneMapping;x.getClearColor(u0),x.toneMapping=rr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new Oo,new tr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,y=!0):(S.color.copy(u0),y=!0);for(let F=0;F<6;F++){const T=F%3;T===0?(h.up.set(0,p[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[F],l.y,l.z)):T===1?(h.up.set(0,0,p[F]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[F],l.z)):(h.up.set(0,p[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[F]));const L=this._cubeSize;Sa(a,T*L,F>2?L:0,L,L),x.setRenderTarget(a),y&&x.render(A,h),x.render(e,h)}x.toneMapping=_,x.autoClear=g,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ls||e.mapping===La;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=p0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h0());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Sa(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,So)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=p*1.25,_=x*g,{_lodMax:E}=this,A=this._sizeLods[r],S=3*A*(r>E-Aa?r-E+Aa:0),y=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=E-t,Sa(l,S,y,3*A,2*A),a.setRenderTarget(l),a.render(d,So),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-r,Sa(e,S,y,3*A,2*A),a.setRenderTarget(e),a.render(d,So)}_blur(e,t,r,a){const l=this._pingPongRenderTarget,c=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,c),this._blurPass(l,e,r,r,c)}_blurPass(e,t,r,a,l){const c=this._renderer,d=this._blurMaterial,h=this._lodMeshes[a];h.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[a],x=3*v*(a>this._lodMax-Aa?a-this._lodMax+Aa:0),g=4*(this._cubeSize-v);Sa(t,x,g,3*v,2*v),c.setRenderTarget(t),c.render(h,So)}}function BE(s){const e=[],t=[];let r=s;const a=s-Aa+1+UE;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);const d=1/(c-2),h=-d,p=1+d,v=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,g=6,_=3,E=new Float32Array(_*g*x),A=new Float32Array(_*g*x);for(let y=0;y<x;y++){const P=y%3*2/3-1,F=y>2?0:-1,T=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];E.set(T,_*g*y);for(let L=0;L<g;L++){const I=v[L*2]*2-1,U=v[L*2+1]*2-1;y===0?ws.set(1,U,I):y===1?ws.set(-I,1,-U):y===2?ws.set(-I,U,1):y===3?ws.set(-1,U,-I):y===4?ws.set(-I,-1,U):ws.set(I,U,-1),ws.toArray(A,(y*g+L)*_)}}const S=new gn;S.setAttribute("position",new $n(E,_)),S.setAttribute("outputDirection",new $n(A,_)),t.push(new Cn(S,null)),r>Aa&&r--}return{lodMeshes:t,sizeLods:e}}function f0(s,e,t){const r=new Yi(s,e,t);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sa(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function zE(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function GE(s,e,t){return new or({name:"SphericalGaussianBlur",defines:{SAMPLES:FE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function h0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function p0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Tv extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Oo(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:Ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:br});l.uniforms.tEquirect.value=t;const c=new Cn(a,l),d=t.minFilter;return t.minFilter===Cs&&(t.minFilter=qn),new HS(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function VE(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,_=!1){return g==null?null:_?c(g):l(g)}function l(g){if(g&&g.isTexture){const _=g.mapping;if(_===Sd||_===Md)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const A=new Tv(E.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",p),d(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,E=_===Sd||_===Md,A=_===Ls||_===La;if(E||A){let S=t.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new d0(s)),S=E?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const P=g.image;return E&&P&&P.height>0||A&&P&&h(P)?(r===null&&(r=new d0(s)),S=E?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function d(g,_){return _===Sd?g.mapping=Ls:_===Md&&(g.mapping=La),g}function h(g){let _=0;const E=6;for(let A=0;A<E;A++)g[A]!==void 0&&_++;return _===E}function p(g){const _=g.target;_.removeEventListener("dispose",p);const E=e.get(_);E!==void 0&&(e.delete(_),E.dispose())}function v(g){const _=g.target;_.removeEventListener("dispose",v);const E=t.get(_);E!==void 0&&(t.delete(_),E.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function HE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ta("WebGLRenderer: "+r+" extension not supported."),a}}}function WE(s,e,t,r){const a={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete a[g.id];const _=l.get(g);_&&(e.remove(_),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(x,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const _ in g)e.update(g[_],s.ARRAY_BUFFER)}function p(x){const g=[],_=x.index,E=x.attributes.position;let A=0;if(E===void 0)return;if(_!==null){const P=_.array;A=_.version;for(let F=0,T=P.length;F<T;F+=3){const L=P[F+0],I=P[F+1],U=P[F+2];g.push(L,I,I,U,U,L)}}else{const P=E.array;A=E.version;for(let F=0,T=P.length/3-1;F<T;F+=3){const L=F+0,I=F+1,U=F+2;g.push(L,I,I,U,U,L)}}const S=new(E.count>=65535?_v:vv)(g,1);S.version=A;const y=l.get(x);y&&e.remove(y),l.set(x,S)}function v(x){const g=l.get(x);if(g){const _=x.index;_!==null&&g.version<_.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:h,getWireframeAttribute:v}}function XE(s,e,t){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,g){s.drawElements(r,g,l,x*c),t.update(g,r,1)}function p(x,g,_){_!==0&&(s.drawElementsInstanced(r,g,l,x*c,_),t.update(g,r,_))}function v(x,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,x,0,_);let A=0;for(let S=0;S<_;S++)A+=g[S];t.update(A,r,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function jE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Gt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function YE(s,e,t){const r=new WeakMap,a=new pn;function l(c,d,h){const p=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==x){let O=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",O)};var _=O;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),A===!0&&(T=2),S===!0&&(T=3);let L=d.attributes.position.count*T,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*I*4*x),w=new mv(U,L,I,x);w.type=Xi,w.needsUpdate=!0;const N=T*4;for(let G=0;G<x;G++){const H=y[G],J=P[G],B=F[G],q=L*I*4*G;for(let pe=0;pe<H.count;pe++){const oe=pe*N;E===!0&&(a.fromBufferAttribute(H,pe),U[q+oe+0]=a.x,U[q+oe+1]=a.y,U[q+oe+2]=a.z,U[q+oe+3]=0),A===!0&&(a.fromBufferAttribute(J,pe),U[q+oe+4]=a.x,U[q+oe+5]=a.y,U[q+oe+6]=a.z,U[q+oe+7]=0),S===!0&&(a.fromBufferAttribute(B,pe),U[q+oe+8]=a.x,U[q+oe+9]=a.y,U[q+oe+10]=a.z,U[q+oe+11]=B.itemSize===4?a.w:1)}}g={count:x,texture:w,size:new vt(L,I)},r.set(d,g),d.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function $E(s,e,t,r,a){let l=new WeakMap;function c(p){const v=a.render.frame,x=p.geometry,g=e.get(p,x);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==v&&(_.update(),l.set(_,v))}return g}function d(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:d}}const qE={[tv]:"LINEAR_TONE_MAPPING",[nv]:"REINHARD_TONE_MAPPING",[iv]:"CINEON_TONE_MAPPING",[lh]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[av]:"NEUTRAL_TONE_MAPPING",[rv]:"CUSTOM_TONE_MAPPING"};function KE(s,e,t,r,a,l){const c=new Yi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,h=null;const p=new gn;p.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new tn([0,2,0,0,2,0],2));const v=new FS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Cn(p,v),g=new bh(-1,1,1,-1,0,1);let _=null,E=null,A=!1,S,y=null,P=[],F=!1;this.setSize=function(T,L){c.setSize(T,L),d!==null&&d.setSize(T,L),h!==null&&h.setSize(T,L);for(let I=0;I<P.length;I++){const U=P[I];U.setSize&&U.setSize(T,L)}},this.setEffects=function(T){P=T,F=P.length>0&&P[0].isRenderPass===!0;const L=c.width,I=c.height;P.length>0&&d===null&&(d=new Yi(L,I,{type:ar,depthBuffer:!1,stencilBuffer:!1}),h=new Yi(L,I,{type:ar,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<P.length;U++){const w=P[U];w.setSize&&w.setSize(L,I)}},this.begin=function(T,L){if(A||T.toneMapping===rr&&P.length===0)return!1;if(y=L,L!==null){const I=L.width,U=L.height;(c.width!==I||c.height!==U)&&this.setSize(I,U)}return F===!1&&T.setRenderTarget(c),S=T.toneMapping,T.toneMapping=rr,!0},this.hasRenderPass=function(){return F},this.end=function(T,L){T.toneMapping=S,A=!0;let I=c,U=d;for(let w=0;w<P.length;w++){const N=P[w];N.enabled!==!1&&(N.render(T,U,I,L),N.needsSwap!==!1&&(I=U,U=U===d?h:d))}if(_!==T.outputColorSpace||E!==T.toneMapping){_=T.outputColorSpace,E=T.toneMapping,v.defines={},kt.getTransfer(_)===qt&&(v.defines.SRGB_TRANSFER="");const w=qE[E];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=I.texture,T.setRenderTarget(y),T.render(x,g),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const Cv=new ni,eh=new Do(1,1),Rv=new mv,Pv=new aS,Lv=new xv,m0=[],g0=[],v0=new Float32Array(16),_0=new Float32Array(9),y0=new Float32Array(4);function Na(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=m0[a];if(l===void 0&&(l=new Float32Array(a),m0[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Bc(s,e){let t=g0[e];t===void 0&&(t=new Int32Array(e),g0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function ZE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Pn(t,e)}}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Pn(t,e)}}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Pn(t,e)}}function tw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(Rn(t,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),Pn(t,r)}}function nw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(Rn(t,r))return;_0.set(r),s.uniformMatrix3fv(this.addr,!1,_0),Pn(t,r)}}function iw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(Rn(t,r))return;v0.set(r),s.uniformMatrix4fv(this.addr,!1,v0),Pn(t,r)}}function rw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Pn(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Pn(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Pn(t,e)}}function lw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Pn(t,e)}}function uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Pn(t,e)}}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Pn(t,e)}}function fw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(eh.compareFunction=t.isReversedDepthBuffer()?vh:gh,l=eh):l=Cv,t.setTexture2D(e||l,a)}function hw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Pv,a)}function pw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Lv,a)}function mw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Rv,a)}function gw(s){switch(s){case 5126:return ZE;case 35664:return JE;case 35665:return QE;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return aw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function vw(s,e){s.uniform1fv(this.addr,e)}function _w(s,e){const t=Na(e,this.size,2);s.uniform2fv(this.addr,t)}function yw(s,e){const t=Na(e,this.size,3);s.uniform3fv(this.addr,t)}function xw(s,e){const t=Na(e,this.size,4);s.uniform4fv(this.addr,t)}function Sw(s,e){const t=Na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mw(s,e){const t=Na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ew(s,e){const t=Na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ww(s,e){s.uniform1iv(this.addr,e)}function Aw(s,e){s.uniform2iv(this.addr,e)}function bw(s,e){s.uniform3iv(this.addr,e)}function Tw(s,e){s.uniform4iv(this.addr,e)}function Cw(s,e){s.uniform1uiv(this.addr,e)}function Rw(s,e){s.uniform2uiv(this.addr,e)}function Pw(s,e){s.uniform3uiv(this.addr,e)}function Lw(s,e){s.uniform4uiv(this.addr,e)}function Iw(s,e,t){const r=this.cache,a=e.length,l=Bc(t,a);Rn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=eh:c=Cv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function Nw(s,e,t){const r=this.cache,a=e.length,l=Bc(t,a);Rn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Pv,l[c])}function Dw(s,e,t){const r=this.cache,a=e.length,l=Bc(t,a);Rn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Lv,l[c])}function Uw(s,e,t){const r=this.cache,a=e.length,l=Bc(t,a);Rn(r,l)||(s.uniform1iv(this.addr,l),Pn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Rv,l[c])}function Fw(s){switch(s){case 5126:return vw;case 35664:return _w;case 35665:return yw;case 35666:return xw;case 35674:return Sw;case 35675:return Mw;case 35676:return Ew;case 5124:case 35670:return ww;case 35667:case 35671:return Aw;case 35668:case 35672:return bw;case 35669:case 35673:return Tw;case 5125:return Cw;case 36294:return Rw;case 36295:return Pw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gw(t.type)}}class kw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fw(t.type)}}class Bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function x0(s,e){s.seq.push(e),s.map[e.id]=e}function zw(s,e,t){const r=s.name,a=r.length;for(ef.lastIndex=0;;){const l=ef.exec(r),c=ef.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&c+2===a){x0(t,p===void 0?new Ow(d,s,e):new kw(d,s,e));break}else{let x=t.map[d];x===void 0&&(x=new Bw(d),x0(t,x)),t=x}}}class Sc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);zw(d,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function S0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Gw=37297;let Vw=0;function Hw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const M0=new Tt;function Ww(s){kt._getMatrix(M0,kt.workingColorSpace,s);const e=`mat3( ${M0.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+Hw(s.getShaderSource(e),d)}else return l}function Xw(s,e){const t=Ww(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jw={[tv]:"Linear",[nv]:"Reinhard",[iv]:"Cineon",[lh]:"ACESFilmic",[sv]:"AgX",[av]:"Neutral",[rv]:"Custom"};function Yw(s,e){const t=jw[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new K;function $w(){kt.getLuminanceCoefficients(dc);const s=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function Kw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Zw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function bo(s){return s!==""}function w0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(Jw,eA)}const Qw=new Map;function eA(s,e){let t=It[e];if(t===void 0){const r=Qw.get(e);if(r!==void 0)t=It[r],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return th(t)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(s){return s.replace(tA,nA)}function nA(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function T0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iA={[hc]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function rA(s){return iA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sA={[Ls]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function aA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":sA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const oA={[La]:"ENVMAP_MODE_REFRACTION"};function lA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":oA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cA={[ev]:"ENVMAP_BLENDING_MULTIPLY",[Fx]:"ENVMAP_BLENDING_MIX",[Ox]:"ENVMAP_BLENDING_ADD"};function uA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":cA[s.combine]||"ENVMAP_BLENDING_NONE"}function dA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function fA(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=rA(t),p=aA(t),v=lA(t),x=uA(t),g=dA(t),_=qw(t),E=Kw(l),A=a.createProgram();let S,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(bo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(bo).join(`
`),y.length>0&&(y+=`
`)):(S=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),y=[T0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?It.tonemapping_pars_fragment:"",t.toneMapping!==rr?Yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Xw("linearToOutputTexel",t.outputColorSpace),$w(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),c=th(c),c=w0(c,t),c=A0(c,t),d=th(d),d=w0(d,t),d=A0(d,t),c=b0(c),d=b0(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=P+S+c,T=P+y+d,L=S0(a,a.VERTEX_SHADER,F),I=S0(a,a.FRAGMENT_SHADER,T);a.attachShader(A,L),a.attachShader(A,I),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(G){if(s.debug.checkShaderErrors){const H=a.getProgramInfoLog(A)||"",J=a.getShaderInfoLog(L)||"",B=a.getShaderInfoLog(I)||"",q=H.trim(),pe=J.trim(),oe=B.trim();let j=!0,V=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,L,I);else{const te=E0(a,L,"vertex"),D=E0(a,I,"fragment");Gt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+q+`
`+te+`
`+D)}else q!==""?xt("WebGLProgram: Program Info Log:",q):(pe===""||oe==="")&&(V=!1);V&&(G.diagnostics={runnable:j,programLog:q,vertexShader:{log:pe,prefix:S},fragmentShader:{log:oe,prefix:y}})}a.deleteShader(L),a.deleteShader(I),w=new Sc(a,A),N=Zw(a,A)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(A,Gw)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=I,this}let hA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new mA(e),t.set(e,r)),r}}class mA{constructor(e){this.id=hA++,this.code=e,this.usedTimes=0}}function gA(s){return s===Is||s===Ac||s===bc}function vA(s,e,t,r,a,l){const c=new yh,d=new pA,h=new Set,p=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return h.add(w),w===0?"uv":`uv${w}`}function A(w,N,O,G,H,J){const B=G.fog,q=H.geometry,pe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,j=e.get(w.envMap||pe,oe),V=j&&j.mapping===Fc?j.image.height:null,te=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&xt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=D!==void 0?D.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let Ke,Ge,we,re;if(te){const it=nr[te];Ke=it.vertexShader,Ge=it.fragmentShader}else{Ke=w.vertexShader,Ge=w.fragmentShader;const it=d.getVertexShaderStage(w),dt=d.getFragmentShaderStage(w);d.update(w,it,dt),we=it.id,re=dt.id}const ae=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),et=H.isInstancedMesh===!0,He=H.isBatchedMesh===!0,_t=!!w.map,Xt=!!w.matcap,pt=!!j,Lt=!!w.aoMap,st=!!w.lightMap,Et=!!w.bumpMap&&w.wireframe===!1,De=!!w.normalMap,Ct=!!w.displacementMap,an=!!w.emissiveMap,wt=!!w.metalnessMap,$t=!!w.roughnessMap,Y=w.anisotropy>0,Zt=w.clearcoat>0,Rt=w.dispersion>0,k=w.retroreflectivity>0,M=w.iridescence>0,ee=w.sheen>0,ne=w.transmission>0,ge=Y&&!!w.anisotropyMap,Re=Zt&&!!w.clearcoatMap,Oe=Zt&&!!w.clearcoatNormalMap,xe=Zt&&!!w.clearcoatRoughnessMap,Se=M&&!!w.iridescenceMap,ze=M&&!!w.iridescenceThicknessMap,Je=ee&&!!w.sheenColorMap,ke=ee&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Qe=!!w.specularColorMap,ve=!!w.specularIntensityMap,Ne=ne&&!!w.transmissionMap,W=ne&&!!w.thicknessMap,ie=!!w.gradientMap,ye=!!w.alphaMap,Q=w.alphaTest>0,he=!!w.alphaHash,de=!!w.extensions;let be=rr;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(be=s.toneMapping);const Me={shaderID:te,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:Ge,defines:w.defines,customVertexShaderID:we,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:He,batchingColor:He&&H._colorsTexture!==null,instancing:et,instancingColor:et&&H.instanceColor!==null,instancingMorph:et&&H.morphTexture!==null,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:_t,matcap:Xt,envMap:pt,envMapMode:pt&&j.mapping,envMapCubeUVHeight:V,aoMap:Lt,lightMap:st,bumpMap:Et,normalMap:De,displacementMap:Ct,emissiveMap:an,normalMapObjectSpace:De&&w.normalMapType===zx,normalMapTangentSpace:De&&w.normalMapType===qf,packedNormalMap:De&&w.normalMapType===qf&&gA(w.normalMap.format),metalnessMap:wt,roughnessMap:$t,anisotropy:Y,anisotropyMap:ge,clearcoat:Zt,clearcoatMap:Re,clearcoatNormalMap:Oe,clearcoatRoughnessMap:xe,dispersion:Rt,retroreflection:k,iridescence:M,iridescenceMap:Se,iridescenceThicknessMap:ze,sheen:ee,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:Be,specularColorMap:Qe,specularIntensityMap:ve,transmission:ne,transmissionMap:Ne,thicknessMap:W,gradientMap:ie,opaque:w.transparent===!1&&w.blending===Ro&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:Q,alphaHash:he,combine:w.combine,mapUv:_t&&E(w.map.channel),aoMapUv:Lt&&E(w.aoMap.channel),lightMapUv:st&&E(w.lightMap.channel),bumpMapUv:Et&&E(w.bumpMap.channel),normalMapUv:De&&E(w.normalMap.channel),displacementMapUv:Ct&&E(w.displacementMap.channel),emissiveMapUv:an&&E(w.emissiveMap.channel),metalnessMapUv:wt&&E(w.metalnessMap.channel),roughnessMapUv:$t&&E(w.roughnessMap.channel),anisotropyMapUv:ge&&E(w.anisotropyMap.channel),clearcoatMapUv:Re&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(w.sheenRoughnessMap.channel),specularMapUv:Be&&E(w.specularMap.channel),specularColorMapUv:Qe&&E(w.specularColorMap.channel),specularIntensityMapUv:ve&&E(w.specularIntensityMap.channel),transmissionMapUv:Ne&&E(w.transmissionMap.channel),thicknessMapUv:W&&E(w.thicknessMap.channel),alphaMapUv:ye&&E(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(De||Y),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(_t||ye),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&De===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Le,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Te,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:_t&&w.map.isVideoTexture===!0&&kt.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:an&&w.emissiveMap.isVideoTexture===!0&&kt.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Hi,flipSided:w.side===ti,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:de&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&w.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Me.vertexUv1s=h.has(1),Me.vertexUv2s=h.has(2),Me.vertexUv3s=h.has(3),h.clear(),Me}function S(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const O in w.defines)N.push(O),N.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(y(N,w),P(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function P(w,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function F(w){const N=_[w.type];let O;if(N){const G=nr[N];O=NS.clone(G.uniforms)}else O=w.uniforms;return O}function T(w,N){let O=v.get(N);return O!==void 0?++O.usedTimes:(O=new fA(s,N,w,a),p.push(O),v.set(N,O)),O}function L(w){if(--w.usedTimes===0){const N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function I(w){d.remove(w)}function U(){d.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:F,acquireProgram:T,releaseProgram:L,releaseShaderCache:I,programs:p,dispose:U}}function _A(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function yA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function C0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function R0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function d(g,_,E,A,S,y){let P=s[e];return P===void 0?(P={id:g.id,object:g,geometry:_,material:E,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:y},s[e]=P):(P.id=g.id,P.object=g,P.geometry=_,P.material=E,P.materialVariant=c(g),P.groupOrder=A,P.renderOrder=g.renderOrder,P.z=S,P.group=y),e++,P}function h(g,_,E,A,S,y,P){P.reversedDepth===!0&&(S=-S);const F=d(g,_,E,A,S,y);E.transmission>0?r.push(F):E.transparent===!0?a.push(F):t.push(F)}function p(g,_,E,A,S,y){const P=d(g,_,E,A,S,y);E.transmission>0?r.unshift(P):E.transparent===!0?a.unshift(P):t.unshift(P)}function v(g,_){t.length>1&&t.sort(g||yA),r.length>1&&r.sort(_||C0),a.length>1&&a.sort(_||C0)}function x(){for(let g=e,_=s.length;g<_;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:x,sort:v}}function xA(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new R0,s.set(r,[c])):a>=l.length?(c=new R0,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function SA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new Mt};break;case"SpotLight":t={position:new K,direction:new K,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function MA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let EA=0;function wA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AA(s){const e=new SA,t=MA(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new K);const a=new K,l=new Yt,c=new Yt;function d(p){let v=0,x=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,E=0,A=0,S=0,y=0,P=0,F=0,T=0,L=0,I=0,U=0,w=0,N=0,O=0;p.sort(wA);for(let H=0,J=p.length;H<J;H++){const B=p[H],q=B.color,pe=B.intensity,oe=B.distance;let j=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Is?j=B.shadow.map.texture:j=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=q.r*pe,x+=q.g*pe,g+=q.b*pe;else if(B.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(B.sh.coefficients[V],pe);O++}else if(B.isSunLight){const V=e.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const te=B.shadow,D=t.get(B);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),r.sunShadow[E]=D,r.sunShadowMap[E]=j;const le=te.getViewportCount();for(let Te=0;Te<le;Te++)r.sunShadowMatrix[A+Te]=te.getMatrix(Te),r.sunShadowCascade[A+Te]=te._cascadeData[Te];A+=le,E++}r.sun[_]=V,_++}else if(B.isDirectionalLight){const V=e.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const te=B.shadow,D=t.get(B);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,r.directionalShadow[S]=D,r.directionalShadowMap[S]=j,r.directionalShadowMatrix[S]=B.shadow.matrix,L++}r.directional[S]=V,S++}else if(B.isSpotLight){const V=e.get(B);V.position.setFromMatrixPosition(B.matrixWorld),V.color.copy(q).multiplyScalar(pe),V.distance=oe,V.coneCos=Math.cos(B.angle),V.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),V.decay=B.decay,r.spot[P]=V;const te=B.shadow;if(B.map&&(r.spotLightMap[w]=B.map,w++,te.updateMatrices(B),B.castShadow&&N++),r.spotLightMatrix[P]=te.matrix,B.castShadow){const D=t.get(B);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,r.spotShadow[P]=D,r.spotShadowMap[P]=j,U++}P++}else if(B.isRectAreaLight){const V=e.get(B);V.color.copy(q).multiplyScalar(pe),V.halfWidth.set(B.width*.5,0,0),V.halfHeight.set(0,B.height*.5,0),r.rectArea[F]=V,F++}else if(B.isPointLight){const V=e.get(B);if(V.color.copy(B.color).multiplyScalar(B.intensity),V.distance=B.distance,V.decay=B.decay,B.castShadow){const te=B.shadow,D=t.get(B);D.shadowIntensity=te.intensity,D.shadowBias=te.bias,D.shadowNormalBias=te.normalBias,D.shadowRadius=te.radius,D.shadowMapSize=te.mapSize,D.shadowCameraNear=te.camera.near,D.shadowCameraFar=te.camera.far,r.pointShadow[y]=D,r.pointShadowMap[y]=j,r.pointShadowMatrix[y]=B.shadow.matrix,I++}r.point[y]=V,y++}else if(B.isHemisphereLight){const V=e.get(B);V.skyColor.copy(B.color).multiplyScalar(pe),V.groundColor.copy(B.groundColor).multiplyScalar(pe),r.hemi[T]=V,T++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const G=r.hash;(G.sunLength!==_||G.directionalLength!==S||G.pointLength!==y||G.spotLength!==P||G.rectAreaLength!==F||G.hemiLength!==T||G.numSunShadows!==E||G.numDirectionalShadows!==L||G.numPointShadows!==I||G.numSpotShadows!==U||G.numSpotMaps!==w||G.numLightProbes!==O)&&(r.sun.length=_,r.directional.length=S,r.spot.length=P,r.rectArea.length=F,r.point.length=y,r.hemi.length=T,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,G.sunLength=_,G.directionalLength=S,G.pointLength=y,G.spotLength=P,G.rectAreaLength=F,G.hemiLength=T,G.numSunShadows=E,G.numDirectionalShadows=L,G.numPointShadows=I,G.numSpotShadows=U,G.numSpotMaps=w,G.numLightProbes=O,r.version=EA++)}function h(p,v){let x=0,g=0,_=0,E=0,A=0,S=0;const y=v.matrixWorldInverse;for(let P=0,F=p.length;P<F;P++){const T=p[P];if(T.isSunLight){const L=r.sun[x];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(y),x++}else if(T.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),g++}else if(T.isSpotLight){const L=r.spot[E];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),E++}else if(T.isRectAreaLight){const L=r.rectArea[A];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),c.identity(),l.copy(T.matrixWorld),l.premultiply(y),c.extractRotation(l),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),A++}else if(T.isPointLight){const L=r.point[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),_++}else if(T.isHemisphereLight){const L=r.hemi[S];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(y),S++}}}return{setup:d,setupView:h,state:r}}function P0(s){const e=new AA(s),t=[],r=[],a=[];function l(g){x.camera=g,t.length=0,r.length=0,a.length=0}function c(g){t.push(g)}function d(g){r.push(g)}function h(g){a.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function bA(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new P0(s),e.set(a,[d])):l>=c.length?(d=new P0(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],PA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],L0=new Yt,Mo=new K,tf=new K;function LA(s,e,t){let r=new Sh;const a=new vt,l=new vt,c=new pn,d=new kS,h=new BS,p={},v=t.maxTextureSize,x={[Ps]:ti,[ti]:Ps,[Hi]:Hi},g=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:TA,fragmentShader:CA}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const E=new gn;E.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Cn(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let y=this.type;this.render=function(I,U,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===vx&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hc);const N=s.getRenderTarget(),O=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),H=s.state;H.setBlending(br),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const J=y!==this.type;J&&U.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(q=>q.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,q=I.length;B<q;B++){const pe=I[B],oe=pe.shadow;if(oe===void 0){xt("WebGLShadowMap:",pe,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;a.copy(oe.mapSize);const j=oe.getFrameExtents();a.multiply(j),l.copy(oe.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/j.x),a.x=l.x*j.x,oe.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/j.y),a.y=l.y*j.y,oe.mapSize.y=l.y));const V=s.state.buffers.depth.getReversed();if(oe.camera._reversedDepth=V,oe.map===null||J===!0){if(oe.map!==null&&(oe.map.depthTexture!==null&&(oe.map.depthTexture.dispose(),oe.map.depthTexture=null),oe.map.dispose()),this.type===Ao){if(pe.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}oe.map=new Yi(a.x,a.y,{format:Is,type:ar,minFilter:qn,magFilter:qn,generateMipmaps:!1}),oe.map.texture.name=pe.name+".shadowMap",oe.map.depthTexture=new Do(a.x,a.y,Xi),oe.map.depthTexture.name=pe.name+".shadowMapDepth",oe.map.depthTexture.format=Cr,oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=zn,oe.map.depthTexture.magFilter=zn}else pe.isPointLight?(oe.map=new Tv(a.x),oe.map.depthTexture=new bS(a.x,sr)):(oe.map=new Yi(a.x,a.y),oe.map.depthTexture=new Do(a.x,a.y,sr)),oe.map.depthTexture.name=pe.name+".shadowMap",oe.map.depthTexture.format=Cr,this.type===hc?(oe.map.depthTexture.compareFunction=V?vh:gh,oe.map.depthTexture.minFilter=qn,oe.map.depthTexture.magFilter=qn):(oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=zn,oe.map.depthTexture.magFilter=zn);oe.camera.updateProjectionMatrix()}oe.map.isWebGLCubeRenderTarget!==!0&&(oe.map.width!==a.x||oe.map.height!==a.y)&&oe.map.setSize(a.x,a.y);const te=oe.map.isWebGLCubeRenderTarget?6:oe.getViewportCount();pe.isPointLight!==!0&&oe.updateMatrices(pe,w);for(let D=0;D<te;D++){const le=oe.getCamera(D);if(pe.isPointLight){const Te=oe.camera,Ke=oe.matrix,Ge=pe.distance||Te.far;Ge!==Te.far&&(Te.far=Ge,Te.updateProjectionMatrix()),Mo.setFromMatrixPosition(pe.matrixWorld),Te.position.copy(Mo),tf.copy(Te.position),tf.add(RA[D]),Te.up.copy(PA[D]),Te.lookAt(tf),Te.updateMatrixWorld(),Ke.makeTranslation(-Mo.x,-Mo.y,-Mo.z),L0.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),oe._frustum.setFromProjectionMatrix(L0,Te.coordinateSystem,Te.reversedDepth)}if(oe.map.isWebGLCubeRenderTarget)s.setRenderTarget(oe.map,D),s.clear();else{D===0&&(s.setRenderTarget(oe.map),s.clear());const Te=oe.getViewport(D);c.set(l.x*Te.x,l.y*Te.y,l.x*Te.z,l.y*Te.w),H.viewport(c)}r=oe.getFrustum(D),T(U,w,le,pe,this.type)}oe.isPointLightShadow!==!0&&this.type===Ao&&P(oe,w),oe.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(N,O,G)};function P(I,U){const w=e.update(A);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null?I.mapPass=new Yi(a.x,a.y,{format:Is,type:ar}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value.set(I.map.width,I.map.height),g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(U,null,w,g,A,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value.set(I.map.width,I.map.height),_.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(U,null,w,_,A,null)}function F(I,U,w,N){let O=null;const G=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)O=G;else if(O=w.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const H=O.uuid,J=U.uuid;let B=p[H];B===void 0&&(B={},p[H]=B);let q=B[J];q===void 0&&(q=O.clone(),B[J]=q,U.addEventListener("dispose",L)),O=q}if(O.visible=U.visible,O.wireframe=U.wireframe,N===Ao?O.side=U.shadowSide!==null?U.shadowSide:U.side:O.side=U.shadowSide!==null?U.shadowSide:x[U.side],O.alphaMap=U.alphaMap,O.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,O.map=U.map,O.clipShadows=U.clipShadows,O.clippingPlanes=U.clippingPlanes,O.clipIntersection=U.clipIntersection,O.displacementMap=U.displacementMap,O.displacementScale=U.displacementScale,O.displacementBias=U.displacementBias,O.wireframeLinewidth=U.wireframeLinewidth,O.linewidth=U.linewidth,w.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const H=s.properties.get(O);H.light=w}return O}function T(I,U,w,N,O){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&O===Ao)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const J=e.update(I),B=I.material;if(Array.isArray(B)){const q=J.groups;for(let pe=0,oe=q.length;pe<oe;pe++){const j=q[pe],V=B[j.materialIndex];if(V&&V.visible){const te=F(I,V,N,O);I.onBeforeShadow(s,I,U,w,J,te,j),s.renderBufferDirect(w,null,J,te,I,j),I.onAfterShadow(s,I,U,w,J,te,j)}}}else if(B.visible){const q=F(I,B,N,O);I.onBeforeShadow(s,I,U,w,J,q,null),s.renderBufferDirect(w,null,J,q,I,null),I.onAfterShadow(s,I,U,w,J,q,null)}}const H=I.children;for(let J=0,B=H.length;J<B;J++)T(H[J],U,w,N,O)}function L(I){I.target.removeEventListener("dispose",L);for(const w in p){const N=p[w],O=I.target.uuid;O in N&&(N[O].dispose(),delete N[O])}}}function IA(s,e){function t(){let W=!1;const ie=new pn;let ye=null;const Q=new pn(0,0,0,0);return{setMask:function(he){ye!==he&&!W&&(s.colorMask(he,he,he,he),ye=he)},setLocked:function(he){W=he},setClear:function(he,de,be,Me,it){it===!0&&(he*=Me,de*=Me,be*=Me),ie.set(he,de,be,Me),Q.equals(ie)===!1&&(s.clearColor(he,de,be,Me),Q.copy(ie))},reset:function(){W=!1,ye=null,Q.set(-1,0,0,0)}}}function r(){let W=!1,ie=!1,ye=null,Q=null,he=null;return{setReversed:function(de){if(ie!==de){const be=e.get("EXT_clip_control");de?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ie=de;const Me=he;he=null,this.setClear(Me)}},getReversed:function(){return ie},setTest:function(de){de?ae(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(de){ye!==de&&!W&&(s.depthMask(de),ye=de)},setFunc:function(de){if(ie&&(de=Jx[de]),Q!==de){switch(de){case uf:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Po:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case pf:s.depthFunc(s.GEQUAL);break;case mf:s.depthFunc(s.GREATER);break;case gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=de}},setLocked:function(de){W=de},setClear:function(de){he!==de&&(he=de,ie&&(de=1-de),s.clearDepth(de))},reset:function(){W=!1,ye=null,Q=null,he=null,ie=!1}}}function a(){let W=!1,ie=null,ye=null,Q=null,he=null,de=null,be=null,Me=null,it=null;return{setTest:function(dt){W||(dt?ae(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(dt){ie!==dt&&!W&&(s.stencilMask(dt),ie=dt)},setFunc:function(dt,Vt,Ft){(ye!==dt||Q!==Vt||he!==Ft)&&(s.stencilFunc(dt,Vt,Ft),ye=dt,Q=Vt,he=Ft)},setOp:function(dt,Vt,Ft){(de!==dt||be!==Vt||Me!==Ft)&&(s.stencilOp(dt,Vt,Ft),de=dt,be=Vt,Me=Ft)},setLocked:function(dt){W=dt},setClear:function(dt){it!==dt&&(s.clearStencil(dt),it=dt)},reset:function(){W=!1,ie=null,ye=null,Q=null,he=null,de=null,be=null,Me=null,it=null}}}const l=new t,c=new r,d=new a,h=new WeakMap,p=new WeakMap;let v={},x={},g={},_=new WeakMap,E=[],A=null,S=!1,y=null,P=null,F=null,T=null,L=null,I=null,U=null,w=new Mt(0,0,0),N=0,O=!1,G=null,H=null,J=null,B=null,q=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,j=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),oe=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),oe=j>=2);let te=null,D={};const le=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),Ke=new pn().fromArray(le),Ge=new pn().fromArray(Te);function we(W,ie,ye,Q){const he=new Uint8Array(4),de=s.createTexture();s.bindTexture(W,de),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<ye;be++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(ie+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return de}const re={};re[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ae(s.DEPTH_TEST),c.setFunc(Po),Et(!1),De(Eg),ae(s.CULL_FACE),Lt(br);function ae(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Le(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function et(W,ie){return g[W]!==ie?(s.bindFramebuffer(W,ie),g[W]=ie,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ie),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function He(W,ie){let ye=E,Q=!1;if(W){ye=_.get(ie),ye===void 0&&(ye=[],_.set(ie,ye));const he=W.textures;if(ye.length!==he.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let de=0,be=he.length;de<be;de++)ye[de]=s.COLOR_ATTACHMENT0+de;ye.length=he.length,Q=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Q=!0);Q&&s.drawBuffers(ye)}function _t(W){return A!==W?(s.useProgram(W),A=W,!0):!1}const Xt={[Ma]:s.FUNC_ADD,[yx]:s.FUNC_SUBTRACT,[xx]:s.FUNC_REVERSE_SUBTRACT};Xt[Sx]=s.MIN,Xt[Mx]=s.MAX;const pt={[Ex]:s.ZERO,[wx]:s.ONE,[Ax]:s.SRC_COLOR,[J0]:s.SRC_ALPHA,[Lx]:s.SRC_ALPHA_SATURATE,[Rx]:s.DST_COLOR,[Tx]:s.DST_ALPHA,[bx]:s.ONE_MINUS_SRC_COLOR,[Q0]:s.ONE_MINUS_SRC_ALPHA,[Px]:s.ONE_MINUS_DST_COLOR,[Cx]:s.ONE_MINUS_DST_ALPHA,[Ix]:s.CONSTANT_COLOR,[Nx]:s.ONE_MINUS_CONSTANT_COLOR,[Dx]:s.CONSTANT_ALPHA,[Ux]:s.ONE_MINUS_CONSTANT_ALPHA};function Lt(W,ie,ye,Q,he,de,be,Me,it,dt){if(W===br){S===!0&&(Le(s.BLEND),S=!1);return}if(S===!1&&(ae(s.BLEND),S=!0),W!==_x){if(W!==y||dt!==O){if((P!==Ma||L!==Ma)&&(s.blendEquation(s.FUNC_ADD),P=Ma,L=Ma),dt)switch(W){case Ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case As:s.blendFunc(s.ONE,s.ONE);break;case wg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ag:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wg:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",W);break}F=null,T=null,I=null,U=null,w.set(0,0,0),N=0,y=W,O=dt}return}he=he||ie,de=de||ye,be=be||Q,(ie!==P||he!==L)&&(s.blendEquationSeparate(Xt[ie],Xt[he]),P=ie,L=he),(ye!==F||Q!==T||de!==I||be!==U)&&(s.blendFuncSeparate(pt[ye],pt[Q],pt[de],pt[be]),F=ye,T=Q,I=de,U=be),(Me.equals(w)===!1||it!==N)&&(s.blendColor(Me.r,Me.g,Me.b,it),w.copy(Me),N=it),y=W,O=!1}function st(W,ie){W.side===Hi?Le(s.CULL_FACE):ae(s.CULL_FACE);let ye=W.side===ti;ie&&(ye=!ye),Et(ye),W.blending===Ro&&W.transparent===!1?Lt(br):Lt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Q=W.stencilWrite;d.setTest(Q),Q&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),an(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(W){G!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),G=W)}function De(W){W!==mx?(ae(s.CULL_FACE),W!==H&&(W===Eg?s.cullFace(s.BACK):W===gx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),H=W}function Ct(W){W!==J&&(oe&&s.lineWidth(W),J=W)}function an(W,ie,ye){W?(ae(s.POLYGON_OFFSET_FILL),(B!==ie||q!==ye)&&(B=ie,q=ye,c.getReversed()&&(ie=-ie),s.polygonOffset(ie,ye))):Le(s.POLYGON_OFFSET_FILL)}function wt(W){W?ae(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function $t(W){W===void 0&&(W=s.TEXTURE0+pe-1),te!==W&&(s.activeTexture(W),te=W)}function Y(W,ie,ye){ye===void 0&&(te===null?ye=s.TEXTURE0+pe-1:ye=te);let Q=D[ye];Q===void 0&&(Q={type:void 0,texture:void 0},D[ye]=Q),(Q.type!==W||Q.texture!==ie)&&(te!==ye&&(s.activeTexture(ye),te=ye),s.bindTexture(W,ie||re[W]),Q.type=W,Q.texture=ie)}function Zt(){const W=D[te];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function M(){try{s.texSubImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function ee(){try{s.texSubImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function ne(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function Re(){try{s.texStorage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function Oe(){try{s.texStorage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function xe(){try{s.texImage2D(...arguments)}catch(W){Gt("WebGLState:",W)}}function Se(){try{s.texImage3D(...arguments)}catch(W){Gt("WebGLState:",W)}}function ze(W){return x[W]!==void 0?x[W]:s.getParameter(W)}function Je(W,ie){x[W]!==ie&&(s.pixelStorei(W,ie),x[W]=ie)}function ke(W){Ke.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ke.copy(W))}function Be(W){Ge.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ge.copy(W))}function Qe(W,ie){let ye=p.get(ie);ye===void 0&&(ye=new WeakMap,p.set(ie,ye));let Q=ye.get(W);Q===void 0&&(Q=s.getUniformBlockIndex(ie,W.name),ye.set(W,Q))}function ve(W,ie){const Q=p.get(ie).get(W);h.get(ie)!==Q&&(s.uniformBlockBinding(ie,Q,W.__bindingPointIndex),h.set(ie,Q))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},te=null,D={},g={},_=new WeakMap,E=[],A=null,S=!1,y=null,P=null,F=null,T=null,L=null,I=null,U=null,w=new Mt(0,0,0),N=0,O=!1,G=null,H=null,J=null,B=null,q=null,Ke.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ae,disable:Le,bindFramebuffer:et,drawBuffers:He,useProgram:_t,setBlending:Lt,setMaterial:st,setFlipSided:Et,setCullFace:De,setLineWidth:Ct,setPolygonOffset:an,setScissorTest:wt,activeTexture:$t,bindTexture:Y,unbindTexture:Zt,compressedTexImage2D:Rt,compressedTexImage3D:k,texImage2D:xe,texImage3D:Se,pixelStorei:Je,getParameter:ze,updateUBOMapping:Qe,uniformBlockBinding:ve,texStorage2D:Re,texStorage3D:Oe,texSubImage2D:M,texSubImage3D:ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:ge,scissor:ke,viewport:Be,reset:Ne}}function NA(s,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new vt,v=new WeakMap,x=new Set;let g;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(k,M){return E?new OffscreenCanvas(k,M):Rc("canvas")}function S(k,M,ee){let ne=1;const ge=Rt(k);if((ge.width>ee||ge.height>ee)&&(ne=ee/Math.max(ge.width,ge.height)),ne<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Re=Math.floor(ne*ge.width),Oe=Math.floor(ne*ge.height);g===void 0&&(g=A(Re,Oe));const xe=M?A(Re,Oe):g;return xe.width=Re,xe.height=Oe,xe.getContext("2d").drawImage(k,0,0,Re,Oe),xt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Re+"x"+Oe+")."),xe}else return"data"in k&&xt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),k;return k}function y(k){return k.generateMipmaps}function P(k){s.generateMipmap(k)}function F(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(k,M,ee,ne,ge,Re=!1){if(k!==null){if(s[k]!==void 0)return s[k];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Oe;ne&&(Oe=e.get("EXT_texture_norm16"),Oe||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=M;if(M===s.RED&&(ee===s.FLOAT&&(xe=s.R32F),ee===s.HALF_FLOAT&&(xe=s.R16F),ee===s.UNSIGNED_BYTE&&(xe=s.R8),ee===s.UNSIGNED_SHORT&&Oe&&(xe=Oe.R16_EXT),ee===s.SHORT&&Oe&&(xe=Oe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(xe=s.R8UI),ee===s.UNSIGNED_SHORT&&(xe=s.R16UI),ee===s.UNSIGNED_INT&&(xe=s.R32UI),ee===s.BYTE&&(xe=s.R8I),ee===s.SHORT&&(xe=s.R16I),ee===s.INT&&(xe=s.R32I)),M===s.RG&&(ee===s.FLOAT&&(xe=s.RG32F),ee===s.HALF_FLOAT&&(xe=s.RG16F),ee===s.UNSIGNED_BYTE&&(xe=s.RG8),ee===s.UNSIGNED_SHORT&&Oe&&(xe=Oe.RG16_EXT),ee===s.SHORT&&Oe&&(xe=Oe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ee===s.UNSIGNED_INT&&(xe=s.RG32UI),ee===s.BYTE&&(xe=s.RG8I),ee===s.SHORT&&(xe=s.RG16I),ee===s.INT&&(xe=s.RG32I)),M===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ee===s.UNSIGNED_INT&&(xe=s.RGB32UI),ee===s.BYTE&&(xe=s.RGB8I),ee===s.SHORT&&(xe=s.RGB16I),ee===s.INT&&(xe=s.RGB32I)),M===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ee===s.BYTE&&(xe=s.RGBA8I),ee===s.SHORT&&(xe=s.RGBA16I),ee===s.INT&&(xe=s.RGBA32I)),M===s.RGB&&(ee===s.UNSIGNED_SHORT&&Oe&&(xe=Oe.RGB16_EXT),ee===s.SHORT&&Oe&&(xe=Oe.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),M===s.RGBA){const Se=Re?Cc:kt.getTransfer(ge);ee===s.FLOAT&&(xe=s.RGBA32F),ee===s.HALF_FLOAT&&(xe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(xe=Se===qt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Oe&&(xe=Oe.RGBA16_EXT),ee===s.SHORT&&Oe&&(xe=Oe.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function L(k,M){let ee;return k?M===null||M===sr||M===Io?ee=s.DEPTH24_STENCIL8:M===Xi?ee=s.DEPTH32F_STENCIL8:M===Lo&&(ee=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sr||M===Io?ee=s.DEPTH_COMPONENT24:M===Xi?ee=s.DEPTH_COMPONENT32F:M===Lo&&(ee=s.DEPTH_COMPONENT16),ee}function I(k,M){return y(k)===!0||k.isFramebufferTexture&&k.minFilter!==zn&&k.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?M.mipmaps.length:1}function U(k){const M=k.target;M.removeEventListener("dispose",U),N(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&x.delete(M)}function w(k){const M=k.target;M.removeEventListener("dispose",w),G(M)}function N(k){const M=r.get(k);if(M.__webglInit===void 0)return;const ee=k.source,ne=_.get(ee);if(ne){const ge=ne[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&O(k),Object.keys(ne).length===0&&_.delete(ee)}r.remove(k)}function O(k){const M=r.get(k);s.deleteTexture(M.__webglTexture);const ee=k.source,ne=_.get(ee);delete ne[M.__cacheKey],c.memory.textures--}function G(k){const M=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let ge=0;ge<M.__webglFramebuffer[ne].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[ne][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)s.deleteFramebuffer(M.__webglFramebuffer[ne]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=k.textures;for(let ne=0,ge=ee.length;ne<ge;ne++){const Re=r.get(ee[ne]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),c.memory.textures--),r.remove(ee[ne])}r.remove(k)}let H=0;function J(){H=0}function B(){return H}function q(k){H=k}function pe(){const k=H;return k>=a.maxTextures&&xt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+a.maxTextures),H+=1,k}function oe(k){const M=[];return M.push(k.wrapS),M.push(k.wrapT),M.push(k.wrapR||0),M.push(k.magFilter),M.push(k.minFilter),M.push(k.anisotropy),M.push(k.internalFormat),M.push(k.format),M.push(k.type),M.push(k.generateMipmaps),M.push(k.premultiplyAlpha),M.push(k.flipY),M.push(k.unpackAlignment),M.push(k.colorSpace),M.join()}function j(k,M){const ee=r.get(k);if(k.isVideoTexture&&Y(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&ee.__version!==k.version){const ne=k.image;if(ne===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ee,k,M);return}}else k.isExternalTexture&&(ee.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+M)}function V(k,M){const ee=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){Le(ee,k,M);return}else k.isExternalTexture&&(ee.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+M)}function te(k,M){const ee=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ee.__version!==k.version){Le(ee,k,M);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+M)}function D(k,M){const ee=r.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&ee.__version!==k.version){et(ee,k,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+M)}const le={[vf]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[_f]:s.MIRRORED_REPEAT},Te={[zn]:s.NEAREST,[kx]:s.NEAREST_MIPMAP_NEAREST,[Bl]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[Ed]:s.LINEAR_MIPMAP_NEAREST,[Cs]:s.LINEAR_MIPMAP_LINEAR},Ke={[Vx]:s.NEVER,[Yx]:s.ALWAYS,[Hx]:s.LESS,[gh]:s.LEQUAL,[Wx]:s.EQUAL,[vh]:s.GEQUAL,[Xx]:s.GREATER,[jx]:s.NOTEQUAL};function Ge(k,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===Ed||M.magFilter===Bl||M.magFilter===Cs||M.minFilter===qn||M.minFilter===Ed||M.minFilter===Bl||M.minFilter===Cs)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,le[M.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,Te[M.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,Te[M.minFilter]),M.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,Ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==Bl&&M.minFilter!==Cs||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function we(k,M){let ee=!1;k.__webglInit===void 0&&(k.__webglInit=!0,M.addEventListener("dispose",U));const ne=M.source;let ge=_.get(ne);ge===void 0&&(ge={},_.set(ne,ge));const Re=oe(M);if(Re!==k.__cacheKey){ge[Re]===void 0&&(ge[Re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),ge[Re].usedTimes++;const Oe=ge[k.__cacheKey];Oe!==void 0&&(ge[k.__cacheKey].usedTimes--,Oe.usedTimes===0&&O(M)),k.__cacheKey=Re,k.__webglTexture=ge[Re].texture}return ee}function re(k,M,ee){return Math.floor(Math.floor(k/ee)/M)}function ae(k,M,ee,ne){const Re=k.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,ee,ne,M.data);else{Re.sort((Je,ke)=>Je.start-ke.start);let Oe=0;for(let Je=1;Je<Re.length;Je++){const ke=Re[Oe],Be=Re[Je],Qe=ke.start+ke.count,ve=re(Be.start,M.width,4),Ne=re(ke.start,M.width,4);Be.start<=Qe+1&&ve===Ne&&re(Be.start+Be.count-1,M.width,4)===ve?ke.count=Math.max(ke.count,Be.start+Be.count-ke.start):(++Oe,Re[Oe]=Be)}Re.length=Oe+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Je=0,ke=Re.length;Je<ke;Je++){const Be=Re[Je],Qe=Math.floor(Be.start/4),ve=Math.ceil(Be.count/4),Ne=Qe%M.width,W=Math.floor(Qe/M.width),ie=ve,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,Ne,W,ie,ye,ee,ne,M.data)}k.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function Le(k,M,ee){let ne=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=s.TEXTURE_3D);const ge=we(k,M),Re=M.source;t.bindTexture(ne,k.__webglTexture,s.TEXTURE0+ee);const Oe=r.get(Re);if(Re.version!==Oe.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=kt.getPrimaries(kt.workingColorSpace),Q=M.colorSpace===ns?null:kt.getPrimaries(M.colorSpace),he=M.colorSpace===ns||ye===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Se=S(M.image,!1,a.maxTextureSize);Se=Zt(M,Se);const ze=l.convert(M.format,M.colorSpace),Je=l.convert(M.type);let ke=T(M.internalFormat,ze,Je,M.normalized,M.colorSpace,M.isVideoTexture);Ge(ne,M);let Be;const Qe=M.mipmaps,ve=M.isVideoTexture!==!0,Ne=Oe.__version===void 0||ge===!0,W=Re.dataReady,ie=I(M,Se);if(M.isDepthTexture)ke=L(M.format===Rs,M.type),Ne&&(ve?t.texStorage2D(s.TEXTURE_2D,1,ke,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,ke,Se.width,Se.height,0,ze,Je,null));else if(M.isDataTexture)if(Qe.length>0){ve&&Ne&&t.texStorage2D(s.TEXTURE_2D,ie,ke,Qe[0].width,Qe[0].height);for(let ye=0,Q=Qe.length;ye<Q;ye++)Be=Qe[ye],ve?W&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Be.width,Be.height,ze,Je,Be.data):t.texImage2D(s.TEXTURE_2D,ye,ke,Be.width,Be.height,0,ze,Je,Be.data);M.generateMipmaps=!1}else ve?(Ne&&t.texStorage2D(s.TEXTURE_2D,ie,ke,Se.width,Se.height),W&&ae(M,Se,ze,Je)):t.texImage2D(s.TEXTURE_2D,0,ke,Se.width,Se.height,0,ze,Je,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ve&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,ke,Qe[0].width,Qe[0].height,Se.depth);for(let ye=0,Q=Qe.length;ye<Q;ye++)if(Be=Qe[ye],M.format!==ji)if(ze!==null)if(ve){if(W)if(M.layerUpdates.size>0){const he=c0(Be.width,Be.height,M.format,M.type);for(const de of M.layerUpdates){const be=Be.data.subarray(de*he/Be.data.BYTES_PER_ELEMENT,(de+1)*he/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,de,Be.width,Be.height,1,ze,be)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Be.width,Be.height,Se.depth,ze,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,ke,Be.width,Be.height,Se.depth,0,Be.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Be.width,Be.height,Se.depth,ze,Je,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,ke,Be.width,Be.height,Se.depth,0,ze,Je,Be.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ve&&Ne&&t.texStorage2D(s.TEXTURE_2D,ie,ke,Qe[0].width,Qe[0].height);for(let ye=0,Q=Qe.length;ye<Q;ye++)Be=Qe[ye],M.format!==ji?ze!==null?ve?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,ke,Be.width,Be.height,0,Be.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?W&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Be.width,Be.height,ze,Je,Be.data):t.texImage2D(s.TEXTURE_2D,ye,ke,Be.width,Be.height,0,ze,Je,Be.data)}else if(M.isDataArrayTexture)if(ve){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,ke,Se.width,Se.height,Se.depth),W)if(M.layerUpdates.size>0){const ye=c0(Se.width,Se.height,M.format,M.type);for(const Q of M.layerUpdates){const he=Se.data.subarray(Q*ye/Se.data.BYTES_PER_ELEMENT,(Q+1)*ye/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,Se.width,Se.height,1,ze,Je,he)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ze,Je,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,Se.width,Se.height,Se.depth,0,ze,Je,Se.data);else if(M.isData3DTexture)ve?(Ne&&t.texStorage3D(s.TEXTURE_3D,ie,ke,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ze,Je,Se.data)):t.texImage3D(s.TEXTURE_3D,0,ke,Se.width,Se.height,Se.depth,0,ze,Je,Se.data);else if(M.isFramebufferTexture){if(Ne)if(ve)t.texStorage2D(s.TEXTURE_2D,ie,ke,Se.width,Se.height);else{let ye=Se.width,Q=Se.height;for(let he=0;he<ie;he++)t.texImage2D(s.TEXTURE_2D,he,ke,ye,Q,0,ze,Je,null),ye>>=1,Q>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),Se.parentNode!==ye){ye.appendChild(Se),x.add(M),ye.onpaint=Q=>{const he=Q.changedElements;for(const de of x)he.includes(de.image)&&(de.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Se);else{const he=s.RGBA,de=s.RGBA,be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,he,de,be,Se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(ve&&Ne){const ye=Rt(Qe[0]);t.texStorage2D(s.TEXTURE_2D,ie,ke,ye.width,ye.height)}for(let ye=0,Q=Qe.length;ye<Q;ye++)Be=Qe[ye],ve?W&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ze,Je,Be):t.texImage2D(s.TEXTURE_2D,ye,ke,ze,Je,Be);M.generateMipmaps=!1}else if(ve){if(Ne){const ye=Rt(Se);t.texStorage2D(s.TEXTURE_2D,ie,ke,ye.width,ye.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Je,Se)}else t.texImage2D(s.TEXTURE_2D,0,ke,ze,Je,Se);y(M)&&P(ne),Oe.__version=Re.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version}function et(k,M,ee){if(M.image.length!==6)return;const ne=we(k,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+ee);const Re=r.get(ge);if(ge.version!==Re.__version||ne===!0){t.activeTexture(s.TEXTURE0+ee);const Oe=kt.getPrimaries(kt.workingColorSpace),xe=M.colorSpace===ns?null:kt.getPrimaries(M.colorSpace),Se=M.colorSpace===ns||Oe===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ze=M.isCompressedTexture||M.image[0].isCompressedTexture,Je=M.image[0]&&M.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!ze&&!Je?ke[de]=S(M.image[de],!0,a.maxCubemapSize):ke[de]=Je?M.image[de].image:M.image[de],ke[de]=Zt(M,ke[de]);const Be=ke[0],Qe=l.convert(M.format,M.colorSpace),ve=l.convert(M.type),Ne=T(M.internalFormat,Qe,ve,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,ie=Re.__version===void 0||ne===!0,ye=ge.dataReady;let Q=I(M,Be);Ge(s.TEXTURE_CUBE_MAP,M);let he;if(ze){W&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Q,Ne,Be.width,Be.height);for(let de=0;de<6;de++){he=ke[de].mipmaps;for(let be=0;be<he.length;be++){const Me=he[be];M.format!==ji?Qe!==null?W?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Me.width,Me.height,Qe,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,Ne,Me.width,Me.height,0,Me.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Me.width,Me.height,Qe,ve,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,Ne,Me.width,Me.height,0,Qe,ve,Me.data)}}}else{if(he=M.mipmaps,W&&ie){he.length>0&&Q++;const de=Rt(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Q,Ne,de.width,de.height)}for(let de=0;de<6;de++)if(Je){W?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,ve,ke[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ne,ke[de].width,ke[de].height,0,Qe,ve,ke[de].data);for(let be=0;be<he.length;be++){const it=he[be].image[de].image;W?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,it.width,it.height,Qe,ve,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,Ne,it.width,it.height,0,Qe,ve,it.data)}}else{W?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,ve,ke[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ne,Qe,ve,ke[de]);for(let be=0;be<he.length;be++){const Me=he[be];W?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Qe,ve,Me.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,Ne,Qe,ve,Me.image[de])}}}y(M)&&P(s.TEXTURE_CUBE_MAP),Re.__version=ge.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version}function He(k,M,ee,ne,ge,Re){const Oe=l.convert(ee.format,ee.colorSpace),xe=l.convert(ee.type),Se=T(ee.internalFormat,Oe,xe,ee.normalized,ee.colorSpace),ze=r.get(M),Je=r.get(ee);if(Je.__renderTarget=M,!ze.__hasExternalTextures){const ke=Math.max(1,M.width>>Re),Be=Math.max(1,M.height>>Re);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Re,Se,ke,Be,M.depth,0,Oe,xe,null):t.texImage2D(ge,Re,Se,ke,Be,0,Oe,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),$t(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ge,Je.__webglTexture,0,wt(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ge,Je.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(k,M,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,k),M.depthBuffer){const ne=M.depthTexture,ge=ne&&ne.isDepthTexture?ne.type:null,Re=L(M.stencilBuffer,ge),Oe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$t(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(M),Re,M.width,M.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(M),Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,k)}else{const ne=M.textures;for(let ge=0;ge<ne.length;ge++){const Re=ne[ge],Oe=l.convert(Re.format,Re.colorSpace),xe=l.convert(Re.type),Se=T(Re.internalFormat,Oe,xe,Re.normalized,Re.colorSpace);$t(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(M),Se,M.width,M.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(M),Se,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Se,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(k,M,ee){const ne=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,M.depthTexture);const ze=l.convert(M.depthTexture.format),Je=l.convert(M.depthTexture.type);let ke;M.depthTexture.format===Cr?ke=s.DEPTH_COMPONENT24:M.depthTexture.format===Rs&&(ke=s.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,ke,M.width,M.height,0,ze,Je,null)}}else j(M.depthTexture,0);const Re=ge.__webglTexture,Oe=wt(M),xe=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,Se=M.depthTexture.format===Rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Cr)$t(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Re,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Re,0);else if(M.depthTexture.format===Rs)$t(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Re,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(k){const M=r.get(k),ee=k.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==k.depthTexture){const ne=k.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ge)};ne.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=ne}if(k.depthTexture&&!M.__autoAllocateDepthBuffer)if(ee)for(let ne=0;ne<6;ne++)Xt(M.__webglFramebuffer[ne],k,ne);else{const ne=k.texture.mipmaps;ne&&ne.length>0?Xt(M.__webglFramebuffer[0],k,0):Xt(M.__webglFramebuffer,k,0)}else if(ee){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=s.createRenderbuffer(),_t(M.__webglDepthbuffer[ne],k,!1);else{const ge=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Re)}}else{const ne=k.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),_t(M.__webglDepthbuffer,k,!1);else{const ge=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(k,M,ee){const ne=r.get(k);M!==void 0&&He(ne.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&pt(k)}function st(k){const M=k.texture,ee=r.get(k),ne=r.get(M);k.addEventListener("dispose",w);const ge=k.textures,Re=k.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=M.version,c.memory.textures++),Re){ee.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[xe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)ee.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else ee.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)ee.__webglFramebuffer[xe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let xe=0,Se=ge.length;xe<Se;xe++){const ze=r.get(ge[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),c.memory.textures++)}if(k.samples>0&&$t(k)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const Se=ge[xe];ee.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]);const ze=l.convert(Se.format,Se.colorSpace),Je=l.convert(Se.type),ke=T(Se.internalFormat,ze,Je,Se.normalized,Se.colorSpace,k.isXRRenderTarget===!0),Be=wt(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,ke,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(ee.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)He(ee.__webglFramebuffer[xe][Se],k,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else He(ee.__webglFramebuffer[xe],k,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(M)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let xe=0,Se=ge.length;xe<Se;xe++){const ze=ge[xe],Je=r.get(ze);let ke=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ke=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ke,Je.__webglTexture),Ge(ke,ze),He(ee.__webglFramebuffer,k,ze,s.COLOR_ATTACHMENT0+xe,ke,0),y(ze)&&P(ke)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(xe=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ne.__webglTexture),Ge(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)He(ee.__webglFramebuffer[Se],k,M,s.COLOR_ATTACHMENT0,xe,Se);else He(ee.__webglFramebuffer,k,M,s.COLOR_ATTACHMENT0,xe,0);y(M)&&P(xe),t.unbindTexture()}k.depthBuffer&&pt(k)}function Et(k){const M=k.textures;for(let ee=0,ne=M.length;ee<ne;ee++){const ge=M[ee];if(y(ge)){const Re=F(k),Oe=r.get(ge).__webglTexture;t.bindTexture(Re,Oe),P(Re),t.unbindTexture()}}}const De=[],Ct=[];function an(k){if(k.samples>0){if($t(k)===!1){const M=k.textures,ee=k.width,ne=k.height;let ge=s.COLOR_BUFFER_BIT;const Re=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(k),xe=M.length>1;if(xe)for(let ze=0;ze<M.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Se=k.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ze=0;ze<M.length;ze++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ze]);const Je=r.get(M[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,ee,ne,0,0,ee,ne,ge,s.NEAREST),h===!0&&(De.length=0,Ct.length=0,De.push(s.COLOR_ATTACHMENT0+ze),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(De.push(Re),Ct.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let ze=0;ze<M.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ze]);const Je=r.get(M[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&h){const M=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function wt(k){return Math.min(a.maxSamples,k.samples)}function $t(k){const M=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(k){const M=c.render.frame;v.get(k)!==M&&(v.set(k,M),k.update())}function Zt(k,M){const ee=k.colorSpace,ne=k.format,ge=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ee!==Tc&&ee!==ns&&(kt.getTransfer(ee)===qt?(ne!==ji||ge!==Si)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",ee)),M}function Rt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(p.width=k.naturalWidth||k.width,p.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(p.width=k.displayWidth,p.height=k.displayHeight):(p.width=k.width,p.height=k.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=J,this.getTextureUnits=B,this.setTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=D,this.rebindTextures=Lt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=He,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DA(s,e){function t(r,a=ns){let l;const c=kt.getTransfer(a);if(r===Si)return s.UNSIGNED_BYTE;if(r===uh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===uv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===dv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===lv)return s.BYTE;if(r===cv)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===ch)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===fv)return s.ALPHA;if(r===hv)return s.RGB;if(r===ji)return s.RGBA;if(r===Cr)return s.DEPTH_COMPONENT;if(r===Rs)return s.DEPTH_STENCIL;if(r===fh)return s.RED;if(r===hh)return s.RED_INTEGER;if(r===Is)return s.RG;if(r===ph)return s.RG_INTEGER;if(r===mh)return s.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===vc)if(c===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===pc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===pc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===xf||r===Sf||r===Mf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ef||r===wf||r===Af||r===bf||r===Tf||r===Ac||r===Cf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ef||r===wf)return c===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Af)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===bf)return l.COMPRESSED_R11_EAC;if(r===Tf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ac)return l.COMPRESSED_RG11_EAC;if(r===Cf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Rf||r===Pf||r===Lf||r===If||r===Nf||r===Df||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Gf||r===Vf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Rf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===If)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hf||r===Wf||r===Xf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hf)return c===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jf||r===Yf||r===bc||r===$f)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===jf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Yf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Sv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new or({vertexShader:UA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends os{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,p=null,v=null,x=null,g=null,_=null,E=null;const A=typeof XRWebGLBinding<"u",S=new OA,y={},P=t.getContextAttributes();let F=null,T=null;const L=[],I=[],U=new vt;let w=null,N=null;const O=new Pi;O.viewport=new pn;const G=new Pi;G.viewport=new pn;const H=[O,G],J=new WS;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ae=L[re];return ae===void 0&&(ae=new Ld,L[re]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(re){let ae=L[re];return ae===void 0&&(ae=new Ld,L[re]=ae),ae.getGripSpace()},this.getHand=function(re){let ae=L[re];return ae===void 0&&(ae=new Ld,L[re]=ae),ae.getHandSpace()};function pe(re){const ae=I.indexOf(re.inputSource);if(ae===-1)return;const Le=L[ae];Le!==void 0&&(Le.update(re.inputSource,re.frame,p||c),Le.dispatchEvent({type:re.type,data:re.inputSource}))}function oe(){a.removeEventListener("select",pe),a.removeEventListener("selectstart",pe),a.removeEventListener("selectend",pe),a.removeEventListener("squeeze",pe),a.removeEventListener("squeezestart",pe),a.removeEventListener("squeezeend",pe),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",j);for(let re=0;re<L.length;re++){const ae=I[re];ae!==null&&(I[re]=null,L[re].disconnect(ae))}B=null,q=null,S.reset();for(const re in y)delete y[re];if(e.setRenderTarget(F),_=null,g=null,x=null,a=null,T=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),N!==null){const re=N.camera;re.fov=N.fov,re.zoom=N.zoom,re.updateProjectionMatrix(),N=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",pe),a.addEventListener("selectstart",pe),a.addEventListener("selectend",pe),a.addEventListener("squeeze",pe),a.addEventListener("squeezestart",pe),a.addEventListener("squeezeend",pe),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",j),P.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,et=null,He=null;P.depth&&(He=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=P.stencil?Rs:Cr,et=P.stencil?Io:sr);const _t={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(_t),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Yi(g.textureWidth,g.textureHeight,{format:ji,type:Si,depthTexture:new Do(g.textureWidth,g.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Le={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(a,t,Le),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new Yi(_.framebufferWidth,_.framebufferHeight,{format:ji,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(d),we.setContext(a),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j(re){for(let ae=0;ae<re.removed.length;ae++){const Le=re.removed[ae],et=I.indexOf(Le);et>=0&&(I[et]=null,L[et].disconnect(Le))}for(let ae=0;ae<re.added.length;ae++){const Le=re.added[ae];let et=I.indexOf(Le);if(et===-1){for(let _t=0;_t<L.length;_t++)if(_t>=I.length){I.push(Le),et=_t;break}else if(I[_t]===null){I[_t]=Le,et=_t;break}if(et===-1)break}const He=L[et];He&&He.connect(Le)}}const V=new K,te=new K;function D(re,ae,Le){V.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(Le.matrixWorld);const et=V.distanceTo(te),He=ae.projectionMatrix.elements,_t=Le.projectionMatrix.elements,Xt=He[14]/(He[10]-1),pt=He[14]/(He[10]+1),Lt=(He[9]+1)/He[5],st=(He[9]-1)/He[5],Et=(He[8]-1)/He[0],De=(_t[8]+1)/_t[0],Ct=Xt*Et,an=Xt*De,wt=et/(-Et+De),$t=wt*-Et;if(ae.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX($t),re.translateZ(wt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(ae.projectionMatrix),re.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Y=Xt+wt,Zt=pt+wt,Rt=Ct-$t,k=an+(et-$t),M=Lt*pt/Zt*Y,ee=st*pt/Zt*Y;re.projectionMatrix.makePerspective(Rt,k,M,ee,Y,Zt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,ae){ae===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ae.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let ae=re.near,Le=re.far;S.texture!==null&&(S.depthNear>0&&(ae=S.depthNear),S.depthFar>0&&(Le=S.depthFar)),J.near=G.near=O.near=ae,J.far=G.far=O.far=Le,(B!==J.near||q!==J.far)&&(a.updateRenderState({depthNear:J.near,depthFar:J.far}),B=J.near,q=J.far),J.layers.mask=re.layers.mask|6,O.layers.mask=J.layers.mask&-5,G.layers.mask=J.layers.mask&-3;const et=re.parent,He=J.cameras;le(J,et);for(let _t=0;_t<He.length;_t++)le(He[_t],et);He.length===2?D(J,O,G):J.projectionMatrix.copy(O.projectionMatrix),N===null&&re.isPerspectiveCamera&&(N={camera:re,fov:re.fov,zoom:re.zoom}),Te(re,J,et)};function Te(re,ae,Le){Le===null?re.matrix.copy(ae.matrixWorld):(re.matrix.copy(Le.matrixWorld),re.matrix.invert(),re.matrix.multiply(ae.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ae.projectionMatrix),re.projectionMatrixInverse.copy(ae.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Kf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&_===null))return h},this.setFoveation=function(re){h=re,g!==null&&(g.fixedFoveation=re),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(re){return y[re]};let Ke=null;function Ge(re,ae){if(v=ae.getViewerPose(p||c),E=ae,v!==null){const Le=v.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let et=!1;Le.length!==J.cameras.length&&(J.cameras.length=0,et=!0);for(let pt=0;pt<Le.length;pt++){const Lt=Le[pt];let st=null;if(_!==null)st=_.getViewport(Lt);else{const De=x.getViewSubImage(g,Lt);st=De.viewport,pt===0&&(e.setRenderTargetTextures(T,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(T))}let Et=H[pt];Et===void 0&&(Et=new Pi,Et.layers.enable(pt),Et.viewport=new pn,H[pt]=Et),Et.matrix.fromArray(Lt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Lt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(st.x,st.y,st.width,st.height),pt===0&&(J.matrix.copy(Et.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),et===!0&&J.cameras.push(Et)}const He=a.enabledFeatures;if(He&&He.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const pt=x.getDepthInformation(Le[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,a.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let pt=0;pt<Le.length;pt++){const Lt=Le[pt].camera;if(Lt){let st=y[Lt];st||(st=new Sv,y[Lt]=st);const Et=x.getCameraImage(Lt);st.sourceTexture=Et}}}}for(let Le=0;Le<L.length;Le++){const et=I[Le],He=L[Le];et!==null&&He!==void 0&&He.update(et,ae,p||c)}Ke&&Ke(re,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),E=null}const we=new Av;we.setAnimationLoop(Ge),this.setAnimationLoop=function(re){Ke=re},this.dispose=function(){}}}const BA=new Yt,Iv=new Tt;Iv.set(-1,0,0,0,1,0,0,0,1);function zA(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Mv(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,P,F,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),x(S,y)):y.isMeshPhongMaterial?(l(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&_(S,y,T)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),A(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?h(S,y,P,F):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ti&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ti&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=e.get(y),F=P.envMap,T=P.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(T)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Iv),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,P,F){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=F*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const P=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function GA(s,e,t,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,L){const I=L.program;r.uniformBlockBinding(T,I)}function p(T,L){let I=a[T.id];I===void 0&&(S(T),I=v(T),a[T.id]=I,T.addEventListener("dispose",P));const U=L.program;r.updateUBOMapping(T,U);const w=e.render.frame;l[T.id]!==w&&(g(T),l[T.id]=w)}function v(T){const L=x();T.__bindingPointIndex=L;const I=s.createBuffer(),U=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,U,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,I),I}function x(){for(let T=0;T<d;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const L=a[T.id],I=T.uniforms,U=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let w=0,N=I.length;w<N;w++){const O=I[w];if(Array.isArray(O))for(let G=0,H=O.length;G<H;G++)_(O[G],w,G,U);else _(O,w,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(T,L,I,U){if(A(T,L,I,U)===!0){const w=T.__offset,N=T.value;if(Array.isArray(N)){let O=0;for(let G=0;G<N.length;G++){const H=N[G],J=y(H);E(H,T.__data,O),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,T.__data)}}function E(T,L,I){typeof T=="number"||typeof T=="boolean"?L[0]=T:T.isMatrix3?(L[0]=T.elements[0],L[1]=T.elements[1],L[2]=T.elements[2],L[3]=0,L[4]=T.elements[3],L[5]=T.elements[4],L[6]=T.elements[5],L[7]=0,L[8]=T.elements[6],L[9]=T.elements[7],L[10]=T.elements[8],L[11]=0):ArrayBuffer.isView(T)?L.set(new T.constructor(T.buffer,T.byteOffset,L.length)):T.toArray(L,I)}function A(T,L,I,U){const w=T.value,N=L+"_"+I;if(U[N]===void 0)return typeof w=="number"||typeof w=="boolean"?U[N]=w:ArrayBuffer.isView(w)?U[N]=w.slice():U[N]=w.clone(),!0;{const O=U[N];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return U[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(O.equals(w)===!1)return O.copy(w),!0}}return!1}function S(T){const L=T.uniforms;let I=0;const U=16;for(let N=0,O=L.length;N<O;N++){const G=Array.isArray(L[N])?L[N]:[L[N]];for(let H=0,J=G.length;H<J;H++){const B=G[H],q=Array.isArray(B.value)?B.value:[B.value];for(let pe=0,oe=q.length;pe<oe;pe++){const j=q[pe],V=y(j),te=I%U,D=te%V.boundary,le=te+D;I+=D,le!==0&&U-le<V.storage&&(I+=U-le),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=I,I+=V.storage}}}const w=I%U;return w>0&&(I+=U-w),T.__size=I,T.__cache={},this}function y(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(L.boundary=16,L.storage=T.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",T),L}function P(T){const L=T.target;L.removeEventListener("dispose",P);const I=c.indexOf(L.__bindingPointIndex);c.splice(I,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function F(){for(const T in a)s.deleteBuffer(a[T]);c=[],a={},l={}}return{bind:h,update:p,dispose:F}}const VA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function HA(){return er===null&&(er=new yv(VA,16,16,Is,ar),er.name="DFG_LUT",er.minFilter=qn,er.magFilter=qn,er.wrapS=Ar,er.wrapT=Ar,er.generateMipmaps=!1,er.needsUpdate=!0),er}class WA{constructor(e={}){const{canvas:t=Kx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:_=Si}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const A=_,S=new Set([mh,ph,hh]),y=new Set([Si,sr,Lo,Io,uh,dh]),P=new Uint32Array(4),F=new Int32Array(4),T=new K;let L=null,I=null;const U=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let G=!1,H=null,J=null,B=null,q=null;this._outputColorSpace=xi;let pe=0,oe=0,j=null,V=-1,te=null;const D=new pn,le=new pn;let Te=null;const Ke=new Mt(0);let Ge=0,we=t.width,re=t.height,ae=1,Le=null,et=null;const He=new pn(0,0,we,re),_t=new pn(0,0,we,re);let Xt=!1;const pt=new Sh;let Lt=!1,st=!1;const Et=new Yt,De=new K,Ct=new pn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function $t(){return j===null?ae:1}let Y=r;function Zt(R,$){return t.getContext(R,$)}let Rt,k,M,ee,ne,ge,Re,Oe,xe,Se,ze,Je,ke,Be,Qe,ve,Ne,W,ie,ye,Q,he,de;try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oh}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),Y===null){const $="webgl2";if(Y=Zt($,R),Y===null)throw Zt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}be()}catch(R){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Gt("WebGLRenderer: "+R.message),R}function be(){Rt=new HE(Y),Rt.init(),Q=new DA(Y,Rt),k=new NE(Y,Rt,e,Q),M=new IA(Y,Rt),k.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),J=Y.createFramebuffer(),B=Y.createFramebuffer(),q=Y.createFramebuffer(),ee=new jE(Y),ne=new _A,ge=new NA(Y,Rt,M,ne,k,Q,ee),Re=new VE(O),Oe=new $S(Y),he=new LE(Y,Oe),xe=new WE(Y,Oe,ee,he),Se=new $E(Y,xe,Oe,he,ee),W=new YE(Y,k,ge),Qe=new DE(ne),ze=new vA(O,Re,Rt,k,he,Qe),Je=new zA(O,ne),ke=new xA,Be=new bA(Rt),Ne=new PE(O,Re,M,Se,E,h),ve=new LA(O,Se,k),de=new GA(Y,ee,k,M),ie=new IE(Y,Rt,ee),ye=new XE(Y,Rt,ee),ee.programs=ze.programs,O.capabilities=k,O.extensions=Rt,O.properties=ne,O.renderLists=ke,O.shadowMap=ve,O.state=M,O.info=ee}A!==Si&&(N=new KE(A,t.width,t.height,d,a,l));const Me=new kA(O,Y);this.xr=Me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(R){R!==void 0&&(ae=R,this.setSize(we,re,!1))},this.getSize=function(R){return R.set(we,re)},this.setSize=function(R,$,me=!0){if(Me.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}we=R,re=$,t.width=Math.floor(R*ae),t.height=Math.floor($*ae),me===!0&&(t.style.width=R+"px",t.style.height=$+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(we*ae,re*ae).floor()},this.setDrawingBufferSize=function(R,$,me){we=R,re=$,ae=me,t.width=Math.floor(R*me),t.height=Math.floor($*me),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(A===Si){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(He)},this.setViewport=function(R,$,me,ce){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,$,me,ce),M.viewport(D.copy(He).multiplyScalar(ae).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,$,me,ce){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,$,me,ce),M.scissor(le.copy(_t).multiplyScalar(ae).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(R){M.setScissorTest(Xt=R)},this.setOpaqueSort=function(R){Le=R},this.setTransparentSort=function(R){et=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,me=!0){let ce=0;if(R){let se=!1;if(j!==null){const We=j.texture.format;se=S.has(We)}if(se){const We=j.texture.type,Ve=y.has(We),Xe=Ne.getClearColor(),tt=Ne.getClearAlpha(),at=Xe.r,Ee=Xe.g,je=Xe.b;Ve?(P[0]=at,P[1]=Ee,P[2]=je,P[3]=tt,Y.clearBufferuiv(Y.COLOR,0,P)):(F[0]=at,F[1]=Ee,F[2]=je,F[3]=tt,Y.clearBufferiv(Y.COLOR,0,F))}else ce|=Y.COLOR_BUFFER_BIT}$&&(ce|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ce|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&Y.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),H=R},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Ne.dispose(),ke.dispose(),Be.dispose(),ne.dispose(),Re.dispose(),Se.dispose(),he.dispose(),de.dispose(),ze.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",vn),Me.removeEventListener("sessionend",On),un.stop()};function it(R){R.preventDefault(),Cg("WebGLRenderer: Context Lost."),G=!0}function dt(){Cg("WebGLRenderer: Context Restored."),G=!1;const R=ee.autoReset,$=ve.enabled,me=ve.autoUpdate,ce=ve.needsUpdate,se=ve.type;be(),ee.autoReset=R,ve.enabled=$,ve.autoUpdate=me,ve.needsUpdate=ce,ve.type=se}function Vt(R){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const $=R.target;$.removeEventListener("dispose",Ft),yt($)}function yt(R){Ht(R),ne.remove(R)}function Ht(R){const $=ne.get(R).programs;$!==void 0&&($.forEach(function(me){ze.releaseProgram(me)}),R.isShaderMaterial&&ze.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,me,ce,se,We){$===null&&($=an);const Ve=se.isMesh&&se.matrixWorld.determinantAffine()<0,Xe=Qt(R,$,me,ce,se);M.setMaterial(ce,Ve);let tt=me.index,at=1;if(ce.wireframe===!0){if(tt=xe.getWireframeAttribute(me),tt===void 0)return;at=2}const Ee=me.drawRange,je=me.attributes.position;let Ae=Ee.start*at,rt=(Ee.start+Ee.count)*at;We!==null&&(Ae=Math.max(Ae,We.start*at),rt=Math.min(rt,(We.start+We.count)*at)),tt!==null?(Ae=Math.max(Ae,0),rt=Math.min(rt,tt.count)):je!=null&&(Ae=Math.max(Ae,0),rt=Math.min(rt,je.count));const bt=rt-Ae;if(bt<0||bt===1/0)return;he.setup(se,ce,Xe,me,tt);let ct,ft=ie;if(tt!==null&&(ct=Oe.get(tt),ft=ye,ft.setIndex(ct)),se.isMesh)ce.wireframe===!0?(M.setLineWidth(ce.wireframeLinewidth*$t()),ft.setMode(Y.LINES)):ft.setMode(Y.TRIANGLES);else if(se.isLine){let dn=ce.linewidth;dn===void 0&&(dn=1),M.setLineWidth(dn*$t()),se.isLineSegments?ft.setMode(Y.LINES):se.isLineLoop?ft.setMode(Y.LINE_LOOP):ft.setMode(Y.LINE_STRIP)}else se.isPoints?ft.setMode(Y.POINTS):se.isSprite&&ft.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const dn=se._multiDrawStarts,Ye=se._multiDrawCounts,Jt=se._multiDrawCount,Pt=tt?Oe.get(tt).bytesPerElement:1,wn=ne.get(ce).currentProgram.getUniforms();for(let ht=0;ht<Jt;ht++)wn.setValue(Y,"_gl_DrawID",ht),ft.render(dn[ht]/Pt,Ye[ht])}else if(se.isInstancedMesh)ft.renderInstances(Ae,bt,se.count);else if(me.isInstancedBufferGeometry){const dn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ye=Math.min(me.instanceCount,dn);ft.renderInstances(Ae,bt,Ye)}else ft.render(Ae,bt)};function Bt(R,$,me,ce){H!==null&&R.isNodeMaterial&&H.setObject(ce,R),Lt===!0&&Qe.setState(R,me,!1),R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=ti,R.needsUpdate=!0,Ii(R,$,ce),R.side=Ps,R.needsUpdate=!0,Ii(R,$,ce),R.side=Hi):Ii(R,$,ce)}this.compile=function(R,$,me=null){me===null&&(me=R),H!==null&&H.renderStart(R,$,me),I=Be.get(me),I.init($),w.push(I),me.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),R!==me&&R.traverseVisible(function(se){se.isLight&&se.layers.test($.layers)&&(I.pushLight(se),se.castShadow&&I.pushShadow(se))}),I.setupLights(),H!==null&&H.updateLights(I.state.lightsArray),st=this.localClippingEnabled,Lt=Qe.init(this.clippingPlanes,st),Lt===!0&&Qe.setGlobalState(this.clippingPlanes,$),H!==null&&ve.render(I.state.shadowsArray,me,$);const ce=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const We=se.material;if(We)if(Array.isArray(We))for(let Ve=0;Ve<We.length;Ve++){const Xe=We[Ve];Bt(Xe,me,$,se),ce.add(Xe)}else Bt(We,me,$,se),ce.add(We)}),I=w.pop(),H!==null&&H.renderEnd(),ce},this.compileAsync=function(R,$,me=null){const ce=this.compile(R,$,me);return new Promise(se=>{function We(){if(ce.forEach(function(Ve){const tt=ne.get(Ve).currentProgram;(tt===void 0||tt.isReady())&&ce.delete(Ve)}),ce.size===0){se(R);return}setTimeout(We,10)}Rt.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let At=null;function cn(R){At&&At(R)}function vn(){un.stop()}function On(){un.start()}const un=new Av;un.setAnimationLoop(cn),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(R){At=R,Me.setAnimationLoop(R),R===null?un.stop():un.start()},Me.addEventListener("sessionstart",vn),Me.addEventListener("sessionend",On),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;H!==null&&H.renderStart(R,$);const me=Me.enabled===!0&&Me.isPresenting===!0,ce=N!==null&&(j===null||me)&&N.begin(O,j);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera($),$=Me.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,$,j),I=Be.get(R,w.length),I.init($),I.state.textureUnits=ge.getTextureUnits(),w.push(I),Et.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),pt.setFromProjectionMatrix(Et,ir,$.reversedDepth),st=this.localClippingEnabled,Lt=Qe.init(this.clippingPlanes,st),L=ke.get(R,U.length),L.init(),U.push(L),Me.enabled===!0&&Me.isPresenting===!0){const Ve=O.xr.getDepthSensingMesh();Ve!==null&&lr(Ve,$,-1/0,O.sortObjects)}lr(R,$,0,O.sortObjects),L.finish(),H!==null&&H.updateLights(I.state.lightsArray),O.sortObjects===!0&&L.sort(Le,et),wt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,wt&&Ne.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Lt===!0&&Qe.beginShadows();const se=I.state.shadowsArray;if(ve.render(se,R,$),Lt===!0&&Qe.endShadows(),(ce&&N.hasRenderPass())===!1){const Ve=L.opaque,Xe=L.transmissive;if(I.setupLights(),$.isArrayCamera){const tt=$.cameras;if(Xe.length>0)for(let at=0,Ee=tt.length;at<Ee;at++){const je=tt[at];Fs(Ve,Xe,R,je)}wt&&Ne.render(R);for(let at=0,Ee=tt.length;at<Ee;at++){const je=tt[at];Rr(L,R,je,je.viewport)}}else Xe.length>0&&Fs(Ve,Xe,R,$),wt&&Ne.render(R),Rr(L,R,$)}j!==null&&oe===0&&(ge.updateMultisampleRenderTarget(j),ge.updateRenderTargetMipmap(j)),ce&&N.end(O),R.isScene===!0&&R.onAfterRender(O,R,$),he.resetDefaultState(),V=-1,te=null,w.pop(),w.length>0?(I=w[w.length-1],ge.setTextureUnits(I.state.textureUnits),Lt===!0&&Qe.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?L=U[U.length-1]:L=null,H!==null&&H.renderEnd()};function lr(R,$,me,ce){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)me=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLightProbeGrid)I.pushLightProbeGrid(R);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(pt)){ce&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Ve=Se.update(R),Xe=R.material;Xe.visible&&L.push(R,Ve,Xe,me,Ct.z,null,$)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(pt))){const Ve=Se.update(R),Xe=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ct.copy(Ve.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Xe)){const tt=Ve.groups;for(let at=0,Ee=tt.length;at<Ee;at++){const je=tt[at],Ae=Xe[je.materialIndex];Ae&&Ae.visible&&L.push(R,Ve,Ae,me,Ct.z,je,$)}}else Xe.visible&&L.push(R,Ve,Xe,me,Ct.z,null,$)}}const We=R.children;for(let Ve=0,Xe=We.length;Ve<Xe;Ve++)lr(We[Ve],$,me,ce)}function Rr(R,$,me,ce){const{opaque:se,transmissive:We,transparent:Ve}=R;I.setupLightsView(me),Lt===!0&&Qe.setGlobalState(O.clippingPlanes,me),ce&&M.viewport(D.copy(ce)),se.length>0&&$i(se,$,me),We.length>0&&$i(We,$,me),Ve.length>0&&$i(Ve,$,me),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Fs(R,$,me,ce){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ce.id]===void 0){const Ae=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ce.id]=new Yi(1,1,{generateMipmaps:!0,type:Ae?ar:Si,minFilter:Cs,samples:Math.max(4,k.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const We=I.state.transmissionRenderTarget[ce.id],Ve=ce.viewport||D;We.setSize(Ve.z*O.transmissionResolutionScale,Ve.w*O.transmissionResolutionScale);const Xe=O.getRenderTarget(),tt=O.getActiveCubeFace(),at=O.getActiveMipmapLevel();O.setRenderTarget(We),O.getClearColor(Ke),Ge=O.getClearAlpha(),Ge<1&&O.setClearColor(16777215,.5),O.clear(),wt&&Ne.render(me);const Ee=O.toneMapping;O.toneMapping=rr;const je=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),I.setupLightsView(ce),Lt===!0&&Qe.setGlobalState(O.clippingPlanes,ce),$i(R,me,ce),ge.updateMultisampleRenderTarget(We),ge.updateRenderTargetMipmap(We),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let rt=0,bt=$.length;rt<bt;rt++){const ct=$[rt],{object:ft,geometry:dn,material:Ye,group:Jt}=ct;if(Ye.side===Hi&&ft.layers.test(ce.layers)){const Pt=Ye.side;Ye.side=ti,Ye.needsUpdate=!0,ii(ft,me,ce,dn,Ye,Jt),Ye.side=Pt,Ye.needsUpdate=!0,Ae=!0}}Ae===!0&&(ge.updateMultisampleRenderTarget(We),ge.updateRenderTargetMipmap(We))}O.setRenderTarget(Xe,tt,at),O.setClearColor(Ke,Ge),je!==void 0&&(ce.viewport=je),O.toneMapping=Ee}function $i(R,$,me){const ce=$.isScene===!0?$.overrideMaterial:null;for(let se=0,We=R.length;se<We;se++){const Ve=R[se],{object:Xe,geometry:tt,group:at}=Ve;let Ee=Ve.material;Ee.allowOverride===!0&&ce!==null&&(Ee=ce),Xe.layers.test(me.layers)&&ii(Xe,$,me,tt,Ee,at)}}function ii(R,$,me,ce,se,We){H!==null&&se.isNodeMaterial&&H.setObject(R,se),R.onBeforeRender(O,$,me,ce,se,We),R.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(O,$,me,ce,R,We),se.transparent===!0&&se.side===Hi&&se.forceSinglePass===!1?(se.side=ti,se.needsUpdate=!0,O.renderBufferDirect(me,$,ce,se,R,We),se.side=Ps,se.needsUpdate=!0,O.renderBufferDirect(me,$,ce,se,R,We),se.side=Hi):O.renderBufferDirect(me,$,ce,se,R,We),R.onAfterRender(O,$,me,ce,se,We)}function Ii(R,$,me){$.isScene!==!0&&($=an);const ce=ne.get(R),se=I.state.lights,We=I.state.shadowsArray,Ve=se.state.version,Xe=ze.getParameters(R,se.state,We,$,me,I.state.lightProbeGridArray),tt=ze.getProgramCacheKey(Xe);let at=ce.programs;ce.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,ce.fog=$.fog;const Ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ce.envMap=Re.get(R.envMap||ce.environment,Ee),ce.envMapRotation=ce.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,at===void 0&&(R.addEventListener("dispose",Ft),at=new Map,ce.programs=at);let je=at.get(tt);if(je!==void 0){if(ce.currentProgram===je&&ce.lightsStateVersion===Ve)return Os(R,Xe),je}else Xe.uniforms=ze.getUniforms(R),H!==null&&R.isNodeMaterial&&H.build(R,me,Xe),R.onBeforeCompile(Xe,O),je=ze.acquireProgram(Xe,tt),at.set(tt,je),ce.uniforms=Xe.uniforms;const Ae=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ae.clippingPlanes=Qe.uniform),Os(R,Xe),ce.needsLights=Pr(R),ce.lightsStateVersion=Ve,ce.needsLights&&(Ae.ambientLightColor.value=se.state.ambient,Ae.lightProbe.value=se.state.probe,Ae.sunLights.value=se.state.sun,Ae.sunLightShadows.value=se.state.sunShadow,Ae.directionalLights.value=se.state.directional,Ae.directionalLightShadows.value=se.state.directionalShadow,Ae.spotLights.value=se.state.spot,Ae.spotLightShadows.value=se.state.spotShadow,Ae.rectAreaLights.value=se.state.rectArea,Ae.ltc_1.value=se.state.rectAreaLTC1,Ae.ltc_2.value=se.state.rectAreaLTC2,Ae.pointLights.value=se.state.point,Ae.pointLightShadows.value=se.state.pointShadow,Ae.hemisphereLights.value=se.state.hemi,Ae.sunShadowMatrix.value=se.state.sunShadowMatrix,Ae.sunShadowCascade.value=se.state.sunShadowCascade,Ae.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ae.spotLightMatrix.value=se.state.spotLightMatrix,Ae.spotLightMap.value=se.state.spotLightMap,Ae.pointShadowMatrix.value=se.state.pointShadowMatrix),ce.lightProbeGrid=I.state.lightProbeGridArray.length>0,ce.currentProgram=je,ce.uniformsList=null,je}function Kn(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Sc.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Os(R,$){const me=ne.get(R);me.outputColorSpace=$.outputColorSpace,me.batching=$.batching,me.batchingColor=$.batchingColor,me.instancing=$.instancing,me.instancingColor=$.instancingColor,me.instancingMorph=$.instancingMorph,me.skinning=$.skinning,me.morphTargets=$.morphTargets,me.morphNormals=$.morphNormals,me.morphColors=$.morphColors,me.morphTargetsCount=$.morphTargetsCount,me.numClippingPlanes=$.numClippingPlanes,me.numIntersection=$.numClipIntersection,me.vertexAlphas=$.vertexAlphas,me.vertexTangents=$.vertexTangents,me.toneMapping=$.toneMapping}function ks(R,$){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;T.setFromMatrixPosition($.matrixWorld);for(let me=0,ce=R.length;me<ce;me++){const se=R[me];if(se.texture!==null&&se.boundingBox.containsPoint(T))return se}return null}function Qt(R,$,me,ce,se){$.isScene!==!0&&($=an),ge.resetTextureUnits();const We=$.fog,Ve=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?$.environment:null,Xe=j===null?O.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kt.workingColorSpace,tt=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,at=Re.get(ce.envMap||Ve,tt),Ee=ce.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,je=!!me.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ae=!!me.morphAttributes.position,rt=!!me.morphAttributes.normal,bt=!!me.morphAttributes.color;let ct=rr;ce.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ct=O.toneMapping);const ft=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,dn=ft!==void 0?ft.length:0,Ye=ne.get(ce),Jt=I.state.lights;if(Lt===!0&&(st===!0||R!==te)){const Ot=R===te&&ce.id===V;Qe.setState(ce,R,Ot)}let Pt=!1;ce.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Jt.state.version||Ye.outputColorSpace!==Xe||se.isBatchedMesh&&Ye.batching===!1||!se.isBatchedMesh&&Ye.batching===!0||se.isBatchedMesh&&Ye.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Ye.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Ye.instancing===!1||!se.isInstancedMesh&&Ye.instancing===!0||se.isSkinnedMesh&&Ye.skinning===!1||!se.isSkinnedMesh&&Ye.skinning===!0||se.isInstancedMesh&&Ye.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ye.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ye.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ye.instancingMorph===!1&&se.morphTexture!==null||Ye.envMap!==at||ce.fog===!0&&Ye.fog!==We||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Qe.numPlanes||Ye.numIntersection!==Qe.numIntersection)||Ye.vertexAlphas!==Ee||Ye.vertexTangents!==je||Ye.morphTargets!==Ae||Ye.morphNormals!==rt||Ye.morphColors!==bt||Ye.toneMapping!==ct||Ye.morphTargetsCount!==dn||!!Ye.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Ye.__version=ce.version);let wn=Ye.currentProgram;Pt===!0&&(wn=Ii(ce,$,se),H&&ce.isNodeMaterial&&H.onUpdateProgram(ce,wn,Ye));let ht=!1,xn=!1,Gn=!1;const Nt=wn.getUniforms(),jt=Ye.uniforms;if(M.useProgram(wn.program)&&(ht=!0,xn=!0,Gn=!0),ce.id!==V&&(V=ce.id,xn=!0),Ye.needsLights){const Ot=ks(I.state.lightProbeGridArray,se);Ye.lightProbeGrid!==Ot&&(Ye.lightProbeGrid=Ot,xn=!0)}if(ht||te!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Nt.setValue(Y,"projectionMatrix",R.projectionMatrix),Nt.setValue(Y,"viewMatrix",R.matrixWorldInverse);const ri=Nt.map.cameraPosition;ri!==void 0&&ri.setValue(Y,De.setFromMatrixPosition(R.matrixWorld)),k.logarithmicDepthBuffer&&Nt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Nt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,xn=!0,Gn=!0)}if(Ye.needsLights&&(Jt.state.sunShadowMap.length>0&&Nt.setValue(Y,"sunShadowMap",Jt.state.sunShadowMap,ge),Jt.state.directionalShadowMap.length>0&&Nt.setValue(Y,"directionalShadowMap",Jt.state.directionalShadowMap,ge),Jt.state.spotShadowMap.length>0&&Nt.setValue(Y,"spotShadowMap",Jt.state.spotShadowMap,ge),Jt.state.pointShadowMap.length>0&&Nt.setValue(Y,"pointShadowMap",Jt.state.pointShadowMap,ge)),se.isSkinnedMesh){Nt.setOptional(Y,se,"bindMatrix"),Nt.setOptional(Y,se,"bindMatrixInverse");const Ot=se.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Nt.setValue(Y,"boneTexture",Ot.boneTexture,ge))}se.isBatchedMesh&&(Nt.setOptional(Y,se,"batchingTexture"),Nt.setValue(Y,"batchingTexture",se._matricesTexture,ge),Nt.setOptional(Y,se,"batchingIdTexture"),Nt.setValue(Y,"batchingIdTexture",se._indirectTexture,ge),Nt.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&Nt.setValue(Y,"batchingColorTexture",se._colorsTexture,ge));const hi=me.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&W.update(se,me,wn),(xn||Ye.receiveShadow!==se.receiveShadow)&&(Ye.receiveShadow=se.receiveShadow,Nt.setValue(Y,"receiveShadow",se.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&$.environment!==null&&(jt.envMapIntensity.value=$.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=HA()),xn){if(Nt.setValue(Y,"toneMappingExposure",O.toneMappingExposure),Ye.needsLights&&Bs(jt,Gn),We&&ce.fog===!0&&Je.refreshFogUniforms(jt,We),Je.refreshMaterialUniforms(jt,ce,ae,re,I.state.transmissionRenderTarget[R.id]),Ye.needsLights&&Ye.lightProbeGrid){const Ot=Ye.lightProbeGrid;jt.probesSH.value=Ot.texture,jt.probesMin.value.copy(Ot.boundingBox.min),jt.probesMax.value.copy(Ot.boundingBox.max),jt.probesResolution.value.copy(Ot.resolution)}Sc.upload(Y,Kn(Ye),jt,ge)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Sc.upload(Y,Kn(Ye),jt,ge),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Nt.setValue(Y,"center",se.center),Nt.setValue(Y,"modelViewMatrix",se.modelViewMatrix),Nt.setValue(Y,"normalMatrix",se.normalMatrix),Nt.setValue(Y,"modelMatrix",se.matrixWorld),ce.uniformsGroups!==void 0){const Ot=ce.uniformsGroups;for(let ri=0,Zn=Ot.length;ri<Zn;ri++){const Ni=Ot[ri];de.update(Ni,wn),de.bind(Ni,wn)}}return wn}function Bs(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.sunLights.needsUpdate=$,R.sunLightShadows.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Pr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,$,me){const ce=ne.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ne.get(R.texture).__webglTexture=$,ne.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:me,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const me=ne.get(R);me.__webglFramebuffer=$,me.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,me=0){j=R,pe=$,oe=me;let ce=null,se=!1,We=!1;if(R){const Xe=ne.get(R);if(Xe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Xe.__webglFramebuffer),D.copy(R.viewport),le.copy(R.scissor),Te=R.scissorTest,M.viewport(D),M.scissor(le),M.setScissorTest(Te),V=-1;return}else if(Xe.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Xe.__hasExternalTextures)ge.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ee=R.depthTexture;if(Xe.__boundDepthTexture!==Ee){if(Ee!==null&&ne.has(Ee)&&(R.width!==Ee.image.width||R.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(We=!0);const at=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[$])?ce=at[$][me]:ce=at[$],se=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?ce=ne.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?ce=at[me]:ce=at,D.copy(R.viewport),le.copy(R.scissor),Te=R.scissorTest}else D.copy(He).multiplyScalar(ae).floor(),le.copy(_t).multiplyScalar(ae).floor(),Te=Xt;if(me!==0&&(ce=J),M.bindFramebuffer(Y.FRAMEBUFFER,ce)&&M.drawBuffers(R,ce),M.viewport(D),M.scissor(le),M.setScissorTest(Te),se){const Xe=ne.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,Xe.__webglTexture,me)}else if(We){const Xe=$;for(let tt=0;tt<R.textures.length;tt++){const at=ne.get(R.textures[tt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+tt,at.__webglTexture,me,Xe)}}else if(R!==null&&me!==0){const Xe=ne.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Xe.__webglTexture,me)}V=-1};function Lr(R){const $=ne.get(R);return($.__readFormat!==R.format||$.__readType!==R.type)&&($.__readFormat=R.format,$.__readType=R.type,$.__formatReadable=k.textureFormatReadable(R.format),$.__typeReadable=k.textureTypeReadable(R.type)),$}this.readRenderTargetPixels=function(R,$,me,ce,se,We,Ve,Xe=0){if(!(R&&R.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(tt=tt[Ve]),tt){M.bindFramebuffer(Y.FRAMEBUFFER,tt);try{const at=R.textures[Xe],Ee=at.format,je=at.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Xe);const Ae=Lr(at);if(Ae.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ce&&me>=0&&me<=R.height-se&&Y.readPixels($,me,ce,se,Q.convert(Ee),Q.convert(je),We)}finally{const at=j!==null?ne.get(j).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(R,$,me,ce,se,We,Ve,Xe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(tt=tt[Ve]),tt)if($>=0&&$<=R.width-ce&&me>=0&&me<=R.height-se){M.bindFramebuffer(Y.FRAMEBUFFER,tt);const at=R.textures[Xe],Ee=at.format,je=at.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Xe);const Ae=Lr(at);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,rt),Y.bufferData(Y.PIXEL_PACK_BUFFER,We.byteLength,Y.STREAM_READ),Y.readPixels($,me,ce,se,Q.convert(Ee),Q.convert(je),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const bt=j!==null?ne.get(j).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,bt);const ct=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Zx(Y,ct,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,rt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,We),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(rt),Y.deleteSync(ct),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,me=0){const ce=Math.pow(2,-me),se=Math.floor(R.image.width*ce),We=Math.floor(R.image.height*ce),Ve=$!==null?$.x:0,Xe=$!==null?$.y:0;ge.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,me,0,0,Ve,Xe,se,We),M.unbindTexture()},this.copyTextureToTexture=function(R,$,me=null,ce=null,se=0,We=0){let Ve,Xe,tt,at,Ee,je,Ae,rt,bt;const ct=R.isCompressedTexture?R.mipmaps[We]:R.image;if(me!==null)Ve=me.max.x-me.min.x,Xe=me.max.y-me.min.y,tt=me.isBox3?me.max.z-me.min.z:1,at=me.min.x,Ee=me.min.y,je=me.isBox3?me.min.z:0;else{const jt=Math.pow(2,-se);Ve=Math.floor(ct.width*jt),Xe=Math.floor(ct.height*jt),R.isDataArrayTexture?tt=ct.depth:R.isData3DTexture?tt=Math.floor(ct.depth*jt):tt=1,at=0,Ee=0,je=0}ce!==null?(Ae=ce.x,rt=ce.y,bt=ce.z):(Ae=0,rt=0,bt=0);const ft=Q.convert($.format),dn=Q.convert($.type);let Ye;$.isData3DTexture?(ge.setTexture3D($,0),Ye=Y.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ge.setTexture2DArray($,0),Ye=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D($,0),Ye=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const Jt=M.getParameter(Y.UNPACK_ROW_LENGTH),Pt=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),wn=M.getParameter(Y.UNPACK_SKIP_PIXELS),ht=M.getParameter(Y.UNPACK_SKIP_ROWS),xn=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,ct.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ct.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,at),M.pixelStorei(Y.UNPACK_SKIP_ROWS,Ee),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,je);const Gn=R.isDataArrayTexture||R.isData3DTexture,Nt=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const jt=ne.get(R),hi=ne.get($),Ot=ne.get(jt.__renderTarget),ri=ne.get(hi.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Zn=0;Zn<tt;Zn++)Gn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ne.get(R).__webglTexture,se,je+Zn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ne.get($).__webglTexture,We,bt+Zn)),Y.blitFramebuffer(at,Ee,Ve,Xe,Ae,rt,Ve,Xe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||ne.has(R)){const jt=ne.get(R),hi=ne.get($);M.bindFramebuffer(Y.READ_FRAMEBUFFER,B),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,q);for(let Ot=0;Ot<tt;Ot++)Gn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,jt.__webglTexture,se,je+Ot):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,jt.__webglTexture,se),Nt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,hi.__webglTexture,We,bt+Ot):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,hi.__webglTexture,We),se!==0?Y.blitFramebuffer(at,Ee,Ve,Xe,Ae,rt,Ve,Xe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Nt?Y.copyTexSubImage3D(Ye,We,Ae,rt,bt+Ot,at,Ee,Ve,Xe):Y.copyTexSubImage2D(Ye,We,Ae,rt,at,Ee,Ve,Xe);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Nt?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Ye,We,Ae,rt,bt,Ve,Xe,tt,ft,dn,ct.data):$.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ye,We,Ae,rt,bt,Ve,Xe,tt,ft,ct.data):Y.texSubImage3D(Ye,We,Ae,rt,bt,Ve,Xe,tt,ft,dn,ct):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,We,Ae,rt,Ve,Xe,ft,dn,ct.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,We,Ae,rt,ct.width,ct.height,ft,ct.data):Y.texSubImage2D(Y.TEXTURE_2D,We,Ae,rt,Ve,Xe,ft,dn,ct);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Jt),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Pt),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,wn),M.pixelStorei(Y.UNPACK_SKIP_ROWS,ht),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,xn),We===0&&$.generateMipmaps&&Y.generateMipmap(Ye),M.unbindTexture()},this.initRenderTarget=function(R){ne.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){pe=0,oe=0,j=null,M.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}const I0={type:"change"},Th={type:"start"},Nv={type:"end"},fc=new Fo,N0=new wr,XA=Math.cos(70*eS.DEG2RAD),Tn=new K,fi=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6;class jA extends jS{constructor(e,t=null){super(e,t),this.state=Kt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ba.ROTATE,MIDDLE:ba.DOLLY,RIGHT:ba.PAN},this.touches={ONE:Ea.ROTATE,TWO:Ea.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ss,this._lastTargetPosition=new K,this._quat=new ss().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new o0,this._sphericalDelta=new o0,this._scale=1,this._panOffset=new K,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new K,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$A.bind(this),this._onPointerDown=YA.bind(this),this._onPointerUp=qA.bind(this),this._onContextMenu=nb.bind(this),this._onMouseWheel=JA.bind(this),this._onKeyDown=QA.bind(this),this._onTouchStart=eb.bind(this),this._onTouchMove=tb.bind(this),this._onMouseDown=KA.bind(this),this._onMouseMove=ZA.bind(this),this._interceptControlDown=ib.bind(this),this._interceptControlUp=rb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Kt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(I0),this.update(),this.state=Kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Tn.copy(t).sub(this.target),Tn.applyQuaternion(this._quat),this._spherical.setFromVector3(Tn),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=fi:r>Math.PI&&(r-=fi),a<-Math.PI?a+=fi:a>Math.PI&&(a-=fi),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(Tn.setFromSpherical(this._spherical),Tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=Tn.length();c=this._clampDistance(d*this._scale);const h=d-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),c=Tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(fc.origin.copy(this.object.position),fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fc.direction))<XA?this.object.lookAt(this.target):(N0.setFromNormalAndCoplanarPoint(this.object.up,this.target),fc.intersectPlane(N0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(I0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tn.setFromMatrixColumn(t,0),Tn.multiplyScalar(-e),this._panOffset.add(Tn)}_panUp(e,t){this.screenSpacePanning===!0?Tn.setFromMatrixColumn(t,1):(Tn.setFromMatrixColumn(t,0),Tn.crossVectors(this.object.up,Tn)),Tn.multiplyScalar(e),this._panOffset.add(Tn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Tn.copy(a).sub(this.target);let l=Tn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,c=r.width,d=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new vt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function YA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $A(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function qA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nv),this.state=Kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function KA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ba.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Kt.DOLLY;break;case ba.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}break;case ba.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Th)}function ZA(s){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function JA(s){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(s.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nv))}function QA(s){this.enabled!==!1&&this._handleKeyDown(s)}function eb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ea.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Kt.TOUCH_ROTATE;break;case Ea.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case Ea.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Kt.TOUCH_DOLLY_PAN;break;case Ea.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(Th)}function tb(s){switch(this._trackPointer(s),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Kt.NONE}}function nb(s){this.enabled!==!1&&s.preventDefault()}function ib(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yn=1.38;function Mr(s,e,t=yn){const r=(90-s)*(Math.PI/180),a=(e+180)*(Math.PI/180),l=-(t*Math.sin(r)*Math.cos(a)),c=t*Math.sin(r)*Math.sin(a),d=t*Math.cos(r);return new K(l,d,c)}function sb(s,e){return s>15&&s<72&&e>-165&&e<-52?!(s<25&&e<-110):s>=7&&s<=22&&e>=-95&&e<=-60?!0:s>-55&&s<12&&e>-82&&e<-34?!(s<-35&&e<-76):s>35&&s<71&&e>-10&&e<45?!0:s>-35&&s<37&&e>-18&&e<51?!(s<4&&e<8):s>8&&s<74&&e>=45&&e<145||s>-11&&s<=18&&e>=95&&e<=141||s>-44&&s<-11&&e>113&&e<154||s>-47&&s<-34&&e>166&&e<179||s>60&&s<83&&e>-73&&e<-18||s>30&&s<45&&e>129&&e<146||s>50&&s<59&&e>-11&&e<2}function ab({vpnStatus:s,locations:e=[],selectedLocationObj:t,realIpInfo:r,cameraMode:a="globe",theme:l="dark",onSelectLocation:c,onRequestConnection:d}){const h=Fe.useRef(null),[p,v]=Fe.useState(null),x=Fe.useRef({vpnState:(s==null?void 0:s.state)||"Disconnected",selectedLocationObj:t,realIpInfo:r,cameraMode:a,theme:l,locations:e,onSelectLocation:c,onRequestConnection:d});Fe.useEffect(()=>{x.current={vpnState:(s==null?void 0:s.state)||"Disconnected",selectedLocationObj:t,realIpInfo:r,cameraMode:a,theme:l,locations:e,onSelectLocation:c,onRequestConnection:d}},[s==null?void 0:s.state,t,r,a,l,e,c,d]);const g=Fe.useRef({globeGroup:null,coreMaterial:null,atmosphereMaterial:null,shieldCageMaterial:null,shieldRingMaterials:[],tunnelLine:null,tunnelGlowLine:null,tunnelPacketsGeo:null,tunnelPacketsMat:null,tunnelCurve:null,targetBeaconGroup:null,targetRingMat:null,targetPillarMat:null,originBeaconGroup:null,originRingMat:null,targetRotationY:0,targetRotationX:.25,userInteracting:!1});return Fe.useEffect(()=>{var q,pe,oe,j;const _=g.current;if(!_.globeGroup)return;const E=((q=r==null?void 0:r.coordinates)==null?void 0:q.lat)??23.8103,A=((pe=r==null?void 0:r.coordinates)==null?void 0:pe.lng)??90.4125,S=((oe=t==null?void 0:t.coordinates)==null?void 0:oe.lat)??40.7128,y=((j=t==null?void 0:t.coordinates)==null?void 0:j.lng)??-74.006,P=Mr(E,A,yn+.012),F=Mr(S,y,yn+.012);_.originBeaconGroup&&(_.originBeaconGroup.position.copy(P),_.originBeaconGroup.lookAt(P.clone().multiplyScalar(2))),_.targetBeaconGroup&&(_.targetBeaconGroup.position.copy(F),_.targetBeaconGroup.lookAt(F.clone().multiplyScalar(2)));const T=P.distanceTo(F),L=P.clone().add(F).multiplyScalar(.5);L.length()<.001?L.set(0,1,0):L.normalize();const U=yn+.22+T*.36,w=L.multiplyScalar(U),N=P.clone().lerp(w,.55).normalize().multiplyScalar(yn+.14+T*.24),O=F.clone().lerp(w,.55).normalize().multiplyScalar(yn+.14+T*.24),G=new Jg(P,N,O,F);_.tunnelCurve=G;const H=G.getPoints(72);_.tunnelLine&&_.tunnelLine.geometry.setFromPoints(H),_.tunnelGlowLine&&_.tunnelGlowLine.geometry.setFromPoints(H);const J=(y+180)*(Math.PI/180),B=S*(Math.PI/180);_.targetRotationY=-J+Math.PI*.5,_.targetRotationX=Math.max(-.55,Math.min(.65,B*.55))},[t,r]),Fe.useEffect(()=>{var tt,at;const _=h.current;if(!_)return;const E={geometries:[],materials:[],textures:[]},A=Ee=>(E.geometries.push(Ee),Ee),S=Ee=>(E.materials.push(Ee),Ee),y=new pS;y.fog=new xh(396056,.065);const P=_.clientWidth||800,F=_.clientHeight||600,T=new Pi(48,P/F,.1,100);T.position.set(0,.45,4.15),T.lookAt(0,0,0);const L=new WA({antialias:!0,alpha:!0,powerPreference:"high-performance"});L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),L.setSize(P,F),kt.enabled=!0,L.outputColorSpace=xi,L.toneMapping=lh,L.toneMappingExposure=1.12,L.setClearColor(0,0),L.domElement.setAttribute("role","img"),L.domElement.setAttribute("aria-label","Interactive 3D Garuda Infinity Global Network Globe and Cyber Shield. Drag to rotate, scroll to zoom, or click a country node to connect."),L.domElement.style.display="block",L.domElement.style.width="100%",L.domElement.style.height="100%";const I=!!(typeof window<"u"&&(window.GarudaAndroidBridge||window.GarudaVpnBridge||window.location&&window.location.hostname==="appassets.garudainfinity.local"||window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.includes("GarudaInfinityAndroid")));I&&(L.domElement.style.pointerEvents="none",L.domElement.style.touchAction="none",_.style.pointerEvents="none",_.style.touchAction="none"),_.innerHTML="",_.appendChild(L.domElement);const U=new jA(T,L.domElement);U.enableDamping=!0,U.dampingFactor=.06,U.enablePan=!1,U.minDistance=2.45,U.maxDistance=6.2,U.rotateSpeed=.65,U.zoomSpeed=.85,U.touches={ONE:null,TWO:null},(I||P<=900)&&(T.position.set(0,.32,3.85),U.target.set(0,-.48,0),T.lookAt(0,-.48,0)),I&&(U.enabled=!1,U.enableRotate=!1,U.enableZoom=!1);const w=()=>{I||(g.current.userInteracting=!0)},N=()=>{I||setTimeout(()=>{g.current.userInteracting=!1},2200)};U.addEventListener("start",w),U.addEventListener("end",N);const O=new VS(9684477,.75);y.add(O);const G=new r0(14742270,1.65);G.position.set(5,6,6),y.add(G);const H=new r0(3003583,1.15);H.position.set(-6,-3,-4),y.add(H);const J=950,B=A(new gn),q=new Float32Array(J*3),pe=new Float32Array(J*3);for(let Ee=0;Ee<J;Ee++){const je=7+Math.random()*14,Ae=Math.random()*Math.PI*2,rt=Math.acos(2*Math.random()-1);q[Ee*3]=je*Math.sin(rt)*Math.cos(Ae),q[Ee*3+1]=je*Math.sin(rt)*Math.sin(Ae),q[Ee*3+2]=je*Math.cos(rt);const bt=Math.random();pe[Ee*3]=bt>.5?.35:.25,pe[Ee*3+1]=bt>.5?.65:.85,pe[Ee*3+2]=.98}B.setAttribute("position",new $n(q,3)),B.setAttribute("color",new $n(pe,3));const oe=S(new xc({size:.036,vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1})),j=new Yd(B,oe);y.add(j);const V=new is;y.add(V),g.current.globeGroup=V;const te=A(new wa(yn*.986,48,48)),D=S(new OS({color:463398,emissive:597050,emissiveIntensity:.45,roughness:.62,metalness:.28})),le=new Cn(te,D);V.add(le),g.current.coreMaterial=D;const Te=A(new wa(yn*1.075,36,36)),Ke=S(new tr({color:3900150,transparent:!0,opacity:.11,side:ti,blending:As,depthWrite:!1})),Ge=new Cn(Te,Ke);V.add(Ge),g.current.atmosphereMaterial=Ke;const we=[];for(let Ee=-60;Ee<=60;Ee+=30)for(let Ae=0;Ae<64;Ae++){const rt=Ae/64*360-180,bt=(Ae+1)/64*360-180,ct=Mr(Ee,rt,yn*.994),ft=Mr(Ee,bt,yn*.994);we.push(ct.x,ct.y,ct.z,ft.x,ft.y,ft.z)}for(let Ee=-180;Ee<180;Ee+=30)for(let Ae=0;Ae<48;Ae++){const rt=Ae/48*180-90,bt=(Ae+1)/48*180-90,ct=Mr(rt,Ee,yn*.994),ft=Mr(bt,Ee,yn*.994);we.push(ct.x,ct.y,ct.z,ft.x,ft.y,ft.z)}const re=A(new gn);re.setAttribute("position",new $n(new Float32Array(we),3));const ae=S(new yc({color:3718648,transparent:!0,opacity:.11})),Le=new AS(re,ae);V.add(Le);const et=2500,He=[],_t=[],Xt=(1+Math.sqrt(5))/2;for(let Ee=0;Ee<et;Ee++){const je=1-Ee/(et-1)*2,Ae=Math.sqrt(1-je*je),rt=2*Math.PI*Ee/Xt,bt=Math.cos(rt)*Ae,ct=Math.sin(rt)*Ae,ft=Math.asin(je)*(180/Math.PI),Ye=(Math.atan2(ct,-bt)*(180/Math.PI)-180+540)%360-180,Jt=sb(ft,Ye);if(Jt||Ee%5===0){const Pt=yn*(Jt?1.002:.996);He.push(bt*Pt,je*Pt,ct*Pt),Jt?_t.push(.32,.72,.98):_t.push(.12,.26,.48)}}const pt=A(new gn);pt.setAttribute("position",new $n(new Float32Array(He),3)),pt.setAttribute("color",new $n(new Float32Array(_t),3));const Lt=S(new xc({size:.024,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})),st=new Yd(pt,Lt);V.add(st);const Et=x.current.locations||[],De=Math.max(1,Et.length),Ct=A(new wa(.024,10,10)),an=S(new tr({color:6333946,transparent:!0,opacity:.92})),wt=new ES(Ct,an,De),$t=new Yt,Y=new Mt;Et.forEach((Ee,je)=>{var ct,ft;const Ae=((ct=Ee.coordinates)==null?void 0:ct.lat)??0,rt=((ft=Ee.coordinates)==null?void 0:ft.lng)??0,bt=Mr(Ae,rt,yn+.014);$t.makeTranslation(bt.x,bt.y,bt.z),wt.setMatrixAt(je,$t),Y.setHex(Ee.hasStreaming?3718648:8490232),wt.setColorAt(je,Y)}),wt.instanceMatrix.needsUpdate=!0,wt.instanceColor&&(wt.instanceColor.needsUpdate=!0),V.add(wt);const Zt=new is,Rt=A(new Ic(.032,.062,24)),k=S(new tr({color:16007006,side:Hi,transparent:!0,opacity:.9})),M=new Cn(Rt,k);Zt.add(M);const ee=A(new wa(.028,12,12)),ne=S(new tr({color:16622767})),ge=new Cn(ee,ne);Zt.add(ge),V.add(Zt),g.current.originBeaconGroup=Zt,g.current.originRingMat=k;const Re=new is,Oe=A(new Ic(.04,.088,28)),xe=S(new tr({color:3900150,side:Hi,transparent:!0,opacity:.95})),Se=new Cn(Oe,xe);Re.add(Se);const ze=A(new Mh(.008,.022,.24,12));ze.rotateX(Math.PI/2),ze.translate(0,0,.12);const Je=S(new tr({color:3462041,transparent:!0,opacity:.85})),ke=new Cn(ze,Je);Re.add(ke),V.add(Re),g.current.targetBeaconGroup=Re,g.current.targetRingMat=xe,g.current.targetPillarMat=Je;const Be=A(new gn),Qe=S(new yc({color:3718648,transparent:!0,opacity:.95})),ve=new Zf(Be,Qe);V.add(ve),g.current.tunnelLine=ve;const Ne=A(new gn),W=S(new yc({color:1096065,transparent:!0,opacity:.45,blending:As})),ie=new Zf(Ne,W);ie.scale.setScalar(1.006),V.add(ie),g.current.tunnelGlowLine=ie;const ye=28,Q=new Float32Array(ye*3),he=A(new gn);he.setAttribute("position",new $n(Q,3));const de=S(new xc({color:7268279,size:.055,transparent:!0,opacity:.95,blending:As,depthWrite:!1})),be=new Yd(he,de);V.add(be),g.current.tunnelPacketsGeo=he,g.current.tunnelPacketsMat=de;const Me=new is;y.add(Me);const it=A(new wh(yn*1.24,2)),dt=S(new tr({color:3900150,wireframe:!0,transparent:!0,opacity:.08,blending:As})),Vt=new Cn(it,dt);Me.add(Vt),g.current.shieldCageMaterial=dt;const Ft=[{radius:yn*1.32,tube:.006,rx:1.15,ry:.3,color:3900150},{radius:yn*1.44,tube:.005,rx:-.85,ry:.75,color:3003583},{radius:yn*1.56,tube:.004,rx:.42,ry:-1.1,color:6333946}],yt=[],Ht=[];Ft.forEach(Ee=>{const je=A(new Ah(Ee.radius,Ee.tube,12,96)),Ae=S(new tr({color:Ee.color,transparent:!0,opacity:.28,blending:As})),rt=new Cn(je,Ae);rt.rotation.set(Ee.rx,Ee.ry,0),Me.add(rt),yt.push(rt),Ht.push(Ae)}),g.current.shieldRingMaterials=Ht;const Bt=((tt=x.current.realIpInfo)==null?void 0:tt.coordinates)||{lat:23.8103,lng:90.4125},At=((at=x.current.selectedLocationObj)==null?void 0:at.coordinates)||{lat:40.7128,lng:-74.006},cn=Mr(Bt.lat,Bt.lng,yn+.012),vn=Mr(At.lat,At.lng,yn+.012);Zt.position.copy(cn),Zt.lookAt(cn.clone().multiplyScalar(2)),Re.position.copy(vn),Re.lookAt(vn.clone().multiplyScalar(2));const On=cn.distanceTo(vn),un=cn.clone().add(vn).multiplyScalar(.5).normalize().multiplyScalar(yn+.22+On*.36),lr=new Jg(cn,un,un,vn);g.current.tunnelCurve=lr;const Rr=lr.getPoints(72);ve.geometry.setFromPoints(Rr),ie.geometry.setFromPoints(Rr);const Fs=(At.lng+180)*(Math.PI/180);V.rotation.y=-Fs+Math.PI*.5,g.current.targetRotationY=V.rotation.y;const $i=new XS,ii=new vt(-999,-999);let Ii={x:0,y:0},Kn=-1;const Os=(Ee,je)=>{const Ae=L.domElement.getBoundingClientRect();!Ae.width||!Ae.height||(ii.x=(Ee-Ae.left)/Ae.width*2-1,ii.y=-((je-Ae.top)/Ae.height)*2+1)},ks=Ee=>{I||Ee.pointerType==="touch"||Os(Ee.clientX,Ee.clientY)},Qt=()=>{ii.set(-999,-999),Kn=-1,v(null),I||(L.domElement.style.cursor="grab")},Bs=Ee=>{I||Ee.pointerType==="touch"||(Ii={x:Ee.clientX,y:Ee.clientY})},Pr=Ee=>{var rt,bt,ct;if(I||Ee.pointerType==="touch")return;const je=Math.abs(Ee.clientX-Ii.x),Ae=Math.abs(Ee.clientY-Ii.y);if(je<6&&Ae<6&&Kn>=0){const ft=(rt=x.current.locations)==null?void 0:rt[Kn];ft&&((ct=(bt=x.current).onSelectLocation)==null||ct.call(bt,ft.iso))}},Lr=()=>{var Ee,je,Ae,rt,bt;if(!I&&Kn>=0){const ct=(Ee=x.current.locations)==null?void 0:Ee[Kn];ct&&((Ae=(je=x.current).onSelectLocation)==null||Ae.call(je,ct.iso),(bt=(rt=x.current).onRequestConnection)==null||bt.call(rt,ct.iso))}};I||(L.domElement.addEventListener("pointermove",ks),L.domElement.addEventListener("pointerleave",Qt),L.domElement.addEventListener("pointerdown",Bs),L.domElement.addEventListener("pointerup",Pr),L.domElement.addEventListener("dblclick",Lr));const R=window.matchMedia("(prefers-reduced-motion: reduce)");let $=R.matches;const me=Ee=>{$=Ee.matches};R.addEventListener("change",me);const ce=new ResizeObserver(Ee=>{for(const je of Ee){const{width:Ae,height:rt}=je.contentRect;Ae>0&&rt>0&&(T.aspect=Ae/rt,T.updateProjectionMatrix(),L.setSize(Ae,rt))}});ce.observe(_);let se=performance.now(),We=0;function Ve(){var wn;const Ee=performance.now(),je=Math.min(.1,Math.max(.001,(Ee-se)/1e3));se=Ee,We+=je;const{vpnState:Ae,cameraMode:rt,theme:bt}=x.current,ct=Ae==="Connected",ft=Ae==="Connecting"||Ae==="Reconnecting",dn=rt==="shield",Ye=rt==="orbit",Jt=ct?1096065:ft?3718648:3900150;Ke.color.lerp(new Mt(Jt),.06),Ke.opacity=ct?.16:.11,bt==="light"?(D.color.lerp(new Mt(992583),.08),D.emissive.lerp(new Mt(1521512),.08)):(D.color.lerp(new Mt(397346),.08),D.emissive.lerp(new Mt(662586),.08)),Qe.color.lerp(new Mt(ct?3462041:3718648),.08),xe.color.lerp(new Mt(ct?1096065:3900150),.08),Je.color.lerp(new Mt(ct?3462041:6333946),.08),dt.color.lerp(new Mt(Jt),.06);const Pt=dn?.24:ct?.12:.05;if(dt.opacity+=(Pt-dt.opacity)*.08,Ht.forEach((ht,xn)=>{const Gn=ct?xn%2===0?1096065:3462041:xn%2===0?3900150:3718648;ht.color.lerp(new Mt(Gn),.06);const Nt=dn?.58:ct?.34:.18;ht.opacity+=(Nt-ht.opacity)*.08}),!$){const ht=ft?2.4:ct?.45:.22;Vt.rotation.y+=je*ht*.45,Vt.rotation.x+=je*ht*.2,yt[0].rotation.z+=je*ht*.9,yt[1].rotation.x-=je*ht*.7,yt[2].rotation.y+=je*ht*.55,j.rotation.y+=je*.018;const xn=1+Math.sin(We*(ft?8:3.5))*.24;Se.scale.setScalar(xn),M.scale.setScalar(1+Math.cos(We*3)*.18);const Gn=g.current.tunnelCurve;if(Gn){const Nt=he.attributes.position,jt=Nt.array,hi=ct?.42:ft?.75:.18;for(let Ot=0;Ot<ye;Ot++){const ri=(We*hi+Ot/ye)%1,Zn=Gn.getPointAt(ri);jt[Ot*3]=Zn.x,jt[Ot*3+1]=Zn.y,jt[Ot*3+2]=Zn.z}Nt.needsUpdate=!0,de.color.setHex(ct?7268279:ft?16638023:6333946),de.size=ct?.062:.048}if(!g.current.userInteracting)if(Ye||ft)V.rotation.y+=je*(ft?.85:.28),g.current.targetRotationY=V.rotation.y;else{const Nt=g.current.targetRotationY-V.rotation.y;V.rotation.y+=Nt*Math.min(1,je*3.2);const jt=g.current.targetRotationX-V.rotation.x;V.rotation.x+=jt*Math.min(1,je*3.2)}}if(ii.x>=-1&&ii.x<=1&&ii.y>=-1&&ii.y<=1){$i.setFromCamera(ii,T);const ht=$i.intersectObject(wt,!1);if(ht.length>0&&ht[0].instanceId!==void 0){const xn=ht[0].instanceId;if(Kn!==xn){Kn=xn;const Gn=(wn=x.current.locations)==null?void 0:wn[xn];v(Gn||null)}L.domElement.style.cursor="pointer"}else Kn!==-1&&(Kn=-1,v(null)),L.domElement.style.cursor="grab"}U.update(),L.render(y,T)}L.setAnimationLoop(Ve);const Xe=()=>{document.hidden?L.setAnimationLoop(null):(se=performance.now(),L.setAnimationLoop(Ve))};return document.addEventListener("visibilitychange",Xe),()=>{L.setAnimationLoop(null),document.removeEventListener("visibilitychange",Xe),R.removeEventListener("change",me),ce.disconnect(),U.removeEventListener("start",w),U.removeEventListener("end",N),U.dispose(),L.domElement.removeEventListener("pointermove",ks),L.domElement.removeEventListener("pointerleave",Qt),L.domElement.removeEventListener("pointerdown",Bs),L.domElement.removeEventListener("pointerup",Pr),L.domElement.removeEventListener("dblclick",Lr),E.geometries.forEach(Ee=>Ee.dispose()),E.materials.forEach(Ee=>Ee.dispose()),E.textures.forEach(Ee=>Ee.dispose()),L.dispose()}},[]),b.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden"},children:[b.jsx("div",{ref:h,style:{width:"100%",height:"100%",position:"relative"}}),p&&b.jsxs("div",{style:{position:"absolute",top:86,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",display:"flex",alignItems:"center",gap:10,padding:"7px 14px",borderRadius:999,background:l==="light"?"rgba(255, 255, 255, 0.92)":"rgba(15, 23, 42, 0.88)",backdropFilter:"blur(12px)",border:l==="light"?"1px solid rgba(37, 99, 235, 0.25)":"1px solid rgba(56, 189, 248, 0.35)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.25)",color:l==="light"?"#0F172A":"#F8FAFC",fontSize:12,fontWeight:600,zIndex:15},children:[b.jsx("img",{src:Mc(p.iso),alt:p.name,style:{width:18,height:18,borderRadius:"50%",objectFit:"cover"}}),b.jsxs("span",{children:[p.name," (",p.city,")"]}),b.jsxs("span",{style:{fontSize:11,color:p.basePingMs<75?"#10B981":"#38BDF8",fontVariantNumeric:"tabular-nums"},children:[p.basePingMs," ms"]}),b.jsx("span",{style:{fontSize:10,opacity:.7},children:"• Click to select, double-click to connect"})]})]})}function D0(s){return!s||s<=0?"0.0 KB":s<1024*1024?`${(s/1024).toFixed(1)} KB`:`${(s/(1024*1024)).toFixed(2)} MB`}function U0(s){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><circle cx="18" cy="18" r="18" fill="url(#g)"/><text x="18" y="22" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="800" font-size="12">${String(s||"GL").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,2)||"GL"}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function ob({vpnStatus:s,realIpInfo:e,locations:t,allLocations:r,showExtendedCatalog:a,onToggleExtendedCatalog:l,selectedLocationIso:c,onSelectLocation:d,onRequestConnection:h,onConnectButtonClick:p,onRotateIp:v,isStreamingMode:x,onSetStreamingMode:g,connectionElapsedFormatted:_,lookingForBestServer:E,onRefreshLocations:A,serviceBridgeConnected:S,rxBytes:y=0,txBytes:P=0,onVerifyIp:F,ipVerificationResult:T,isVerifyingIp:L,activeCountryTimeInfo:I,cameraMode:U="globe",onChangeCameraMode:w,theme:N="dark"}){const[O,G]=Fe.useState(""),[H,J]=Fe.useState("ALL"),[B,q]=Fe.useState(!1),[pe,oe]=Fe.useState(!1);Fe.useEffect(()=>{if(!(typeof window>"u"))return window.__closeGarudaSubModal=()=>pe?(oe(!1),!0):!1,()=>{delete window.__closeGarudaSubModal}},[pe]);const j=t,V=Fe.useMemo(()=>t.find(we=>we.iso===c)||t.find(we=>we.iso==="US")||t[0],[t,c]),te=Fe.useMemo(()=>{const we=O.trim().toLowerCase();return j.filter(re=>{const ae=!!(re.streamingOptimized||re.hasStreaming);return x&&!ae||H!=="ALL"&&re.region!==H?!1:we?re.name.toLowerCase().includes(we)||re.iso.toLowerCase().includes(we)||re.city&&re.city.toLowerCase().includes(we)||re.region&&re.region.toLowerCase().includes(we):!0})},[j,O,x,H]),D=s.state==="Connected",le=s.state==="Connecting"||s.state==="Disconnecting"||s.state==="Reconnecting",Te=Fe.useMemo(()=>{switch(s.state){case"Connected":return"Connected";case"Connecting":return E?"Looking for the best server...":"Connecting...";case"Disconnecting":return"Disconnecting...";case"Reconnecting":return"Reconnecting...";case"Disconnected":default:return s.error&&s.error!=="None"?"Please retry to connect":"Not connected"}},[s.state,s.error,E]),Ke=Fe.useMemo(()=>le?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-busy.svg":D?B?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-stop-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-stop-rest.svg":s.error&&s.error!=="None"?B?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-retry-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-retry-rest.svg":B?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-start-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-start-rest.svg",[le,D,s.error,B]),Ge=Fe.useMemo(()=>j.filter(we=>we.streamingOptimized||we.hasStreaming).length,[j]);return b.jsxs("div",{className:"u-vpn-main-split",children:[b.jsxs("div",{className:"u-vpn-stage-pane",style:{flex:1,position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",overflow:"hidden",padding:"18px 22px 20px 22px"},children:[b.jsx(ab,{vpnStatus:s,locations:t,selectedLocationObj:V,realIpInfo:e,cameraMode:U,theme:N,onSelectLocation:d,onRequestConnection:h}),b.jsx("div",{className:"u-connect-console-wrap",style:{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",margin:"auto auto 0 auto",width:"100%",maxWidth:460},children:b.jsxs("div",{className:"u-glass-card u-connect-console-card",style:{width:"100%",borderRadius:24,padding:"20px 24px 18px 24px",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[b.jsxs("div",{className:"u-connect-hero-ring-wrap",style:{position:"relative",width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center"},children:[b.jsx("img",{src:"/resources/Screens/S4_MainLayout/Main/assets/connect-button-bg.svg",alt:"","aria-hidden":"true",className:`u-connect-hero-ring-svg ${le?"uv-spin-fast":"uv-pulse-halo"}`,style:{position:"absolute",width:128,height:128,pointerEvents:"none",filter:D?"drop-shadow(0 6px 22px rgba(16, 185, 129, 0.55)) hue-rotate(310deg)":"drop-shadow(0 6px 20px rgba(59, 130, 246, 0.45))"}}),b.jsx("button",{onClick:p,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),className:"u-connect-hero-core-btn","aria-label":D?"Disconnect VPN tunnel":`Connect VPN to ${(V==null?void 0:V.name)||"selected country"}`,style:{width:78,height:78,borderRadius:"50%",backgroundColor:"#FFFFFF",border:D?"2px solid rgba(16, 185, 129, 0.55)":"2px solid rgba(59, 130, 246, 0.35)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",zIndex:4,boxShadow:B?D?"0 0 28px rgba(16, 185, 129, 0.65)":"0 0 28px rgba(59, 130, 246, 0.6)":"0 6px 16px rgba(0, 0, 0, 0.28)",transition:"box-shadow 150ms ease, border-color 150ms ease"},children:b.jsx("img",{src:Ke,alt:"","aria-hidden":"true",className:`u-connect-hero-core-icon ${le?"uv-spin-slow":""}`,style:{width:le?34:30,height:le?34:30}})})]}),b.jsxs("div",{className:"u-connect-status-row",style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",gap:9},children:[!le&&b.jsx("span",{"aria-hidden":"true",className:"u-connect-status-dot",style:{width:11,height:11,borderRadius:"50%",backgroundColor:D?"#10B981":"#F43F5E",boxShadow:D?"0 0 12px rgba(16, 185, 129, 0.85)":"0 0 10px rgba(244, 63, 94, 0.65)",display:"inline-block"}}),b.jsx("span",{className:"u-connect-status-title",style:{fontSize:E?18:21,fontWeight:700,color:"var(--uv-text-heading)",letterSpacing:"-0.3px"},children:Te}),b.jsx("span",{className:"u-connect-status-pill",style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,backgroundColor:D?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.16)",color:D?"#34D399":"#FB7185",border:D?"1px solid rgba(16, 185, 129, 0.35)":"1px solid rgba(244, 63, 94, 0.3)"},children:D?"TUNNEL PROTECTED":"UNPROTECTED"})]}),b.jsxs("div",{className:"u-connect-telemetry-row",style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"center",gap:16,fontSize:13,color:"var(--uv-text-secondary)",fontVariantNumeric:"tabular-nums"},children:[b.jsx("span",{className:"u-connect-timer-text",style:{fontSize:16,fontWeight:700,color:D?"#34D399":"var(--uv-text-muted)",letterSpacing:"0.8px"},children:_}),b.jsx("span",{children:"•"}),b.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},title:"Encrypted Download Traffic",children:[b.jsx(by,{size:13,color:"#38BDF8","aria-hidden":"true"}),b.jsx("span",{children:D0(y)})]}),b.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},title:"Encrypted Upload Traffic",children:[b.jsx(Ty,{size:13,color:"#10B981","aria-hidden":"true"}),b.jsx("span",{children:D0(P)})]})]}),V&&b.jsxs("button",{onClick:p,className:"u-connect-target-btn","aria-label":`Target location ${V.name}, ${V.city}. Click to ${D?"disconnect":"connect"}`,style:{marginTop:14,width:"100%",height:56,padding:"0 18px",borderRadius:16,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,cursor:"pointer",color:"var(--uv-text-heading)",transition:"border-color 150ms ease, background-color 150ms ease"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[b.jsx("img",{src:Mc(V.iso),alt:V.name,className:"u-connect-target-flag",style:{width:34,height:34,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--uv-border-strong)",flexShrink:0},onError:we=>{we.currentTarget.onerror=null,we.currentTarget.src=U0(V.iso)}}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",textAlign:"left",minWidth:0},children:[b.jsx("span",{className:"u-connect-target-name",style:{fontSize:15,fontWeight:700,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:V.name}),b.jsx("span",{className:"u-connect-target-sub",style:{fontSize:11,color:"var(--uv-text-secondary)"},children:D?`${s.statusCity||s.statusCountryName||""} • ${s.statusIp}`:V.city})]})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[(V.streamingOptimized||V.hasStreaming)&&b.jsxs("span",{style:{fontSize:10,fontWeight:700,padding:"3px 7px",borderRadius:6,backgroundColor:"rgba(59, 130, 246, 0.18)",color:"#60A5FA",display:"inline-flex",alignItems:"center",gap:4},children:[b.jsx(ug,{size:11,"aria-hidden":"true"}),b.jsx("span",{children:"4K"})]}),b.jsxs("span",{style:{fontSize:12,fontWeight:700,color:(V.ping||V.basePingMs||48)<75?"#10B981":"#38BDF8",fontVariantNumeric:"tabular-nums"},children:[V.ping||V.basePingMs||48," ms"]})]})]}),b.jsxs("div",{className:"u-console-footer-row",style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",fontSize:11,color:"var(--uv-text-secondary)",padding:"0 4px",gap:8,flexWrap:"wrap"},children:[b.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[b.jsx("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:"50%",backgroundColor:S?"#10B981":"#F59E0B"}}),b.jsx("span",{children:s.tunnelMode&&s.tunnelMode!=="Disconnected"?`Tunnel: ${s.tunnelMode}`:"Garuda Infinity Engine Ready"})]}),b.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[b.jsxs("span",{children:["Protocol:"," ",b.jsx("strong",{style:{color:"var(--uv-text-body)"},children:x?"OpenVPN TCP (Streaming)":s.effectiveProtocolLabel||"Garuda LinkX"})]}),D&&v&&b.jsx("button",{onClick:v,title:"Rotate Exit IP in current country",style:{padding:"2px 7px",borderRadius:6,border:"1px solid rgba(59, 130, 246, 0.42)",background:"rgba(59, 130, 246, 0.16)",color:"#60A5FA",fontSize:10,fontWeight:700,cursor:"pointer"},children:"Rotate IP"})]})]})]})})]}),b.jsxs("aside",{className:"u-vpn-servers-aside",style:{display:"flex",flexDirection:"column",backgroundColor:"var(--uv-surface-panel)",borderLeft:"1px solid var(--uv-border)",flexShrink:0,zIndex:20},children:[b.jsxs("div",{style:{padding:"20px 18px 12px 18px",borderBottom:"1px solid var(--uv-divider)"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[b.jsxs("div",{children:[b.jsx("h2",{style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:"All Free & Premium Servers"}),b.jsx("span",{style:{fontSize:11,color:"var(--uv-text-secondary)"},children:"Click any country to switch your IP & rotate the 3D tunnel"})]}),b.jsx("span",{title:"82 official high-speed VPN server countries",style:{fontSize:11,fontWeight:600,padding:"5px 10px",borderRadius:10,border:"1px solid var(--uv-border-strong)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",userSelect:"none"},children:`${t.length} Official`})]}),b.jsxs("div",{style:{height:38,display:"flex",alignItems:"center",gap:8,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",borderRadius:10,padding:"0 12px"},children:[b.jsx(og,{size:15,color:"var(--uv-text-secondary)","aria-hidden":"true"}),b.jsx("input",{type:"text",value:O,onChange:we=>G(we.target.value),placeholder:"Search country, city, or ISO code...","aria-label":"Search VPN server countries",style:{flex:1,border:"none",background:"transparent",outline:"none",fontSize:13,color:"var(--uv-text-heading)"}}),O&&b.jsx("button",{onClick:()=>G(""),"aria-label":"Clear search query",style:{background:"transparent",border:"none",color:"var(--uv-text-secondary)",cursor:"pointer",display:"flex",alignItems:"center"},children:b.jsx(sf,{size:14})})]}),b.jsxs("div",{style:{marginTop:10,display:"flex",backgroundColor:"var(--uv-surface-card)",borderRadius:10,padding:3,border:"1px solid var(--uv-border)",gap:4},children:[b.jsxs("button",{onClick:()=>g(!1),style:{flex:1,height:32,borderRadius:7,border:"none",backgroundColor:x?"transparent":"var(--uv-primary)",color:x?"var(--uv-text-secondary)":"#FFFFFF",fontWeight:600,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[b.jsx(By,{size:13,"aria-hidden":"true"}),b.jsxs("span",{children:["All Servers (",j.length,")"]})]}),b.jsxs("button",{onClick:()=>g(!0),style:{flex:1,height:32,borderRadius:7,border:"none",backgroundColor:x?"var(--uv-primary)":"transparent",color:x?"#FFFFFF":"var(--uv-text-secondary)",fontWeight:600,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[b.jsx(ug,{size:13,"aria-hidden":"true"}),b.jsxs("span",{children:["Streaming & 4K (",Ge,")"]})]})]}),b.jsx("div",{style:{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"},children:[{id:"ALL",label:"All Regions"},{id:"America",label:"Americas"},{id:"Europe, Middle East & Africa",label:"Europe & MEA"},{id:"Asia & Oceania",label:"Asia & Oceania"}].map(we=>{const re=H===we.id;return b.jsx("button",{onClick:()=>J(we.id),style:{fontSize:11,fontWeight:re?600:500,padding:"4px 10px",borderRadius:999,border:"1px solid",borderColor:re?"var(--uv-primary)":"var(--uv-border)",backgroundColor:re?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:re?"#60A5FA":"var(--uv-text-secondary)",cursor:"pointer"},children:we.label},we.id)})})]}),b.jsx("div",{className:"uv-scrollbar",style:{flex:1,overflowY:"auto",padding:"8px 12px 18px 12px"},children:te.length===0?b.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"},children:[b.jsx(og,{size:42,color:"var(--uv-text-muted)",style:{marginBottom:12}}),b.jsx("div",{style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)",marginBottom:4},children:"No matching servers"}),b.jsxs("div",{style:{fontSize:12,color:"var(--uv-text-secondary)",lineHeight:1.45,marginBottom:14},children:["No countries matched “",O,"”. Try searching another country name, city, or ISO code."]}),b.jsx("button",{className:"u-btn u-btn-secondary",style:{height:32,fontSize:12},onClick:()=>{G(""),J("ALL"),A==null||A()},children:"Reset Filters"})]}):te.map(we=>{const re=we.iso===c,ae=D&&(s.uiLockedLocation===we.iso||s.statusCountryIso2===we.iso),Le=!!(we.streamingOptimized||we.hasStreaming),et=we.ping||we.basePingMs||52;return b.jsxs("div",{className:`u-location-row ${ae?"connected":re?"selected":""}`,onClick:()=>{d(we.iso),h(we.iso)},children:[b.jsx("div",{style:{width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:11,flexShrink:0},children:b.jsx("img",{src:Mc(we.iso),alt:we.name,loading:"lazy",style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--uv-border-strong)"},onError:He=>{He.currentTarget.onerror=null,He.currentTarget.src=U0(we.iso)}})}),b.jsxs("div",{style:{flex:1,minWidth:0},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[b.jsx("span",{style:{fontSize:14,fontWeight:re?700:600,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:we.name}),b.jsx("span",{style:{fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:4,backgroundColor:Le?"rgba(59, 130, 246, 0.2)":"rgba(148, 163, 184, 0.14)",color:Le?"#60A5FA":"var(--uv-text-secondary)"},children:Le?"PREMIUM • 4K":"FREE"})]}),b.jsxs("div",{style:{fontSize:11,color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",gap:6,marginTop:2,fontVariantNumeric:"tabular-nums"},children:[b.jsx("span",{children:we.city}),b.jsx("span",{children:"•"}),b.jsxs("span",{children:[we.serverCount||8," nodes"]}),b.jsx("span",{children:"•"}),b.jsxs("span",{style:{color:et<75?"#10B981":"#38BDF8",fontWeight:600},children:[et," ms"]})]})]}),re?b.jsxs("div",{style:{padding:"0 10px",height:26,borderRadius:999,backgroundColor:ae?"rgba(16, 185, 129, 0.22)":"rgba(59, 130, 246, 0.22)",color:ae?"#34D399":"#60A5FA",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0,gap:4},children:[b.jsx(Cy,{size:12,"aria-hidden":"true"}),b.jsx("span",{children:ae?"Connected":"Selected"})]}):b.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#60A5FA",padding:"4px 8px",borderRadius:6,backgroundColor:"rgba(59, 130, 246, 0.1)"},children:"Connect"})]},we.iso)})})]})]})}const lb=[{label:"Auto (Recommended)",value:"Auto"},{label:"WireGuard (LinkX)",value:"WireGuard"},{label:"OpenVPN (UDP)",value:"OpenVPN_UDP"},{label:"OpenVPN (TCP)",value:"OpenVPN_TCP"}];function cb({vpnProtocol:s="Auto",onChangeProtocol:e=()=>{},appAutoStart:t=!1,onToggleAppAutoStart:r=()=>{},dynamicIpRotation:a=!0,onToggleDynamicIp:l=()=>{},theme:c="dark",onToggleTheme:d=()=>{},cameraMode:h="globe",onChangeCameraMode:p=()=>{},serviceBridgeConnected:v=!0,isAndroidApp:x=!1,updateInfo:g={},isCheckingUpdate:_=!1,onCheckForUpdate:E=()=>{}}){const A=!!x,S=A?Er:Eo,y=A?wo:Wy,[P,F]=Fe.useState(null);Fe.useEffect(()=>{if(!(typeof window>"u"))return P?window.__closeGarudaSubModal=()=>(F(null),!0):window.__closeGarudaSubModal&&delete window.__closeGarudaSubModal,()=>{window.__closeGarudaSubModal&&delete window.__closeGarudaSubModal}},[P]);const[T,L]=Fe.useState(()=>{var B,q;try{return typeof window<"u"&&!!((q=(B=window.location)==null?void 0:B.search)!=null&&q.includes("autoUpdate=1"))}catch{return!1}}),[I,U]=Fe.useState(""),[w,N]=Fe.useState(!1),O=async()=>{N(!0),U("Opening unpacked extension folder selector...");try{const B=await Z0({allowPicker:!0,onProgress:q=>U(q)});B&&B.ok&&U(`Updated ${B.writtenCount||""} files! Reloading extension...`)}catch(B){U((B==null?void 0:B.message)||"Folder selection cancelled — downloading ZIP fallback...")}finally{N(!1)}},G=!!(g!=null&&g.updateAvailable),H=(g==null?void 0:g.latestAppVersion)||S,J=_?"Checking for updates...":G?`New V${H} available`:`OTA Sync Active • Up to date (${y})`;return b.jsxs("section",{"aria-label":A?"App Settings":"Extension Settings",className:"uv-scrollbar",style:{flex:1,height:"100%",minHeight:0,overflowY:"auto",WebkitOverflowScrolling:"touch",touchAction:"pan-y",padding:A?"18px 14px 56px 14px":"24px 20px 44px 20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[b.jsxs("div",{style:{width:"100%",maxWidth:540},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,gap:10},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[b.jsx("h1",{style:{fontSize:20,fontWeight:800,color:"var(--uv-text-heading)",letterSpacing:"-0.02em"},children:A?"Settings":"Extension Settings"}),b.jsx("span",{style:{fontSize:10.5,fontWeight:800,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(59, 130, 246, 0.18)",border:"1px solid rgba(59, 130, 246, 0.42)",color:"#60A5FA",whiteSpace:"nowrap"},children:y})]}),b.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:10.5,fontWeight:700,padding:"4px 10px",borderRadius:999,backgroundColor:"rgba(16, 185, 129, 0.16)",color:"#34D399",border:"1px solid rgba(16, 185, 129, 0.36)",whiteSpace:"nowrap"},children:[A?b.jsx(Oy,{size:12,color:"#34D399","aria-hidden":"true"}):b.jsx(Iy,{size:12,color:"#34D399","aria-hidden":"true"}),b.jsx("span",{children:A?"System VPN Ready":v?"Extension Active":"Standalone Mode"})]})]}),!A&&(T||I)&&b.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px 16px",marginBottom:18,border:"1px solid rgba(56, 189, 248, 0.48)",background:"linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(37, 99, 235, 0.12))"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:6},children:[b.jsx("div",{style:{fontSize:13.5,fontWeight:800,color:"#38BDF8"},children:"1-Click Automatic Extension Folder Updater"}),b.jsx("button",{onClick:()=>L(!1),className:"u-btn u-btn-secondary",style:{height:24,padding:"0 8px",fontSize:11},children:"Hide"})]}),b.jsxs("p",{style:{fontSize:12,color:"var(--uv-text-body)",lineHeight:1.5,margin:"0 0 10px 0"},children:["Select your unpacked ",b.jsx("strong",{children:"extension"})," folder once. Garuda Infinity will automatically download the latest release, overwrite the files in-place, and reload the extension for you!"]}),I&&b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"#FBBF24",marginBottom:10},children:I}),b.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[b.jsx("button",{onClick:O,disabled:w,className:"u-btn u-btn-primary",style:{height:34,padding:"0 14px",fontSize:12,fontWeight:700},children:w?"Updating Extension...":"Select Extension Folder & Update Automatically"}),b.jsx("button",{onClick:()=>cf(g==null?void 0:g.extensionZipUrl),className:"u-btn u-btn-secondary",style:{height:34,padding:"0 12px",fontSize:12,fontWeight:600},children:"Download ZIP Instead"})]})]}),b.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:A?"Tunnel & Connection":"Extension Tunnel & Startup"}),b.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"4px 16px",marginBottom:18},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[b.jsxs("div",{style:{minWidth:0},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"VPN Protocol"}),b.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:"LinkX WireGuard or OpenVPN"})]}),b.jsx("select",{"aria-label":"Select VPN Protocol",value:s,onChange:B=>e(B.target.value),style:{width:168,height:34,padding:"0 10px",borderRadius:9,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",color:"var(--uv-text-heading)",fontSize:12,fontWeight:600,cursor:"pointer",outline:"none",flexShrink:0},children:lb.map(B=>b.jsx("option",{value:B.value,style:{backgroundColor:c==="light"?"#FFFFFF":"#0F172A",color:c==="light"?"#0F172A":"#F8FAFC"},children:B.label},B.value))})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[b.jsxs("div",{style:{minWidth:0},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:A?"Auto-Connect on Launch":"Auto-Connect on Startup"}),b.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:A?"Connect when app opens":"Connect when browser launches"})]}),b.jsx("button",{role:"switch","aria-checked":t,"aria-label":"Auto-Connect",onClick:r,className:`u-switch ${t?"u-switch-checked":""}`,style:{flexShrink:0},children:b.jsx("span",{className:"u-switch-thumb"})})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",gap:12},children:[b.jsxs("div",{style:{minWidth:0},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"Dynamic IP Rotation"}),b.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:a?"New exit IP on every connect":"Single static IP per country"})]}),b.jsx("button",{type:"button",onClick:l,"aria-pressed":a,title:"Click to toggle Dynamic IP Rotation (Active / Deactive)",style:{fontSize:10.5,fontWeight:800,padding:"4px 11px",borderRadius:999,backgroundColor:a?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.18)",color:a?"#34D399":"#FB7185",border:a?"1px solid rgba(16, 185, 129, 0.38)":"1px solid rgba(244, 63, 94, 0.38)",whiteSpace:"nowrap",flexShrink:0,cursor:"pointer",userSelect:"none",transition:"all 150ms ease"},children:a?"ACTIVE":"DEACTIVE"})]})]}),b.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:"Appearance & 3D View"}),b.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"4px 16px",marginBottom:18},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[b.jsxs("div",{style:{minWidth:0},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"Interface Theme"}),b.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:c==="dark"?"Dark Cyber Glass":"Clean Light Mode"})]}),b.jsx("button",{onClick:d,className:"u-btn u-btn-secondary",style:{height:34,padding:"0 14px",fontSize:12.5,fontWeight:700,whiteSpace:"nowrap",flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6},children:c==="dark"?b.jsxs(b.Fragment,{children:[b.jsx(z0,{size:14,color:"#FBBF24","aria-hidden":"true"}),b.jsx("span",{children:"Switch Theme"})]}):b.jsxs(b.Fragment,{children:[b.jsx(B0,{size:14,color:"#3B82F6","aria-hidden":"true"}),b.jsx("span",{children:"Switch Theme"})]})})]}),b.jsxs("div",{style:{padding:"13px 0",display:"flex",flexDirection:"column",gap:10},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"3D Camera View"}),b.jsx("span",{style:{fontSize:11.5,color:"var(--uv-text-secondary)"},children:"Default globe mode"})]}),b.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:6,backgroundColor:"var(--uv-surface-card)",padding:4,borderRadius:10,border:"1px solid var(--uv-border)"},children:[{id:"globe",label:"3D Globe"},{id:"shield",label:"3D Shield"},{id:"orbit",label:"Auto-Orbit"}].map(B=>{const q=h===B.id;return b.jsx("button",{onClick:()=>p(B.id),style:{height:32,padding:"0 8px",borderRadius:7,border:q?"1px solid var(--uv-primary)":"1px solid transparent",backgroundColor:q?"var(--uv-primary)":"transparent",color:q?"#FFFFFF":"var(--uv-text-body)",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",textAlign:"center",transition:"background-color 150ms ease, color 150ms ease"},children:B.label},B.id)})})]})]}),b.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:"About"}),b.jsxs("div",{className:"u-glass-card",style:{borderRadius:16,padding:"20px 18px",marginBottom:14},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:14},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:0},children:[b.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:38,height:38,flexShrink:0}}),b.jsxs("div",{style:{minWidth:0},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[b.jsx("span",{style:{fontSize:16,fontWeight:800,color:"var(--uv-text-heading)",whiteSpace:"nowrap"},children:"Garuda Infinity"}),b.jsx("span",{style:{fontSize:10.5,fontWeight:800,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(16, 185, 129, 0.18)",border:"1px solid rgba(16, 185, 129, 0.4)",color:"#34D399",whiteSpace:"nowrap"},children:y})]}),b.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:A?"Android Mobile VPN • Global 3D Gateway":"Standalone Browser VPN • Global 3D Gateway"})]})]}),b.jsx("span",{className:"quicksilver-gold-badge",title:"Lead Developer",children:b.jsx("span",{className:"quicksilver-gold-glow",children:"QUICKSILVER"})})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"14px 0",borderTop:"1px solid var(--uv-divider)",borderBottom:"1px solid var(--uv-divider)",marginBottom:14},children:[b.jsxs("div",{style:{minWidth:0},children:[b.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:A?"App Auto-Update":"Extension Auto-Update"}),b.jsx("div",{style:{fontSize:11.5,color:G?"#FBBF24":"var(--uv-text-secondary)",marginTop:2},children:J})]}),b.jsx("button",{onClick:E,disabled:_,className:G?"u-btn u-btn-primary":"u-btn u-btn-secondary",style:{height:34,padding:"0 14px",fontSize:12,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:_?"Checking...":G?`Update to V${H}`:"Check Update"})]}),b.jsxs("button",{onClick:()=>F("gcs"),className:"about-gcs-btn",style:{marginBottom:14,padding:"12px 14px"},children:[b.jsxs("div",{className:"about-gcs-left",children:[b.jsx("img",{src:"/gcs-logo.png",alt:"GCS",className:"about-gcs-emblem",style:{width:34,height:34}}),b.jsxs("div",{children:[b.jsx("div",{className:"about-gcs-title",style:{fontSize:13.5},children:"About Garuda Cyber Shield"}),b.jsx("div",{className:"about-gcs-sub",style:{fontSize:11},children:"Official Cyber Defense & Mission Briefing"})]})]}),b.jsxs("span",{className:"about-gcs-cta",children:[b.jsx("span",{children:"Briefing"}),b.jsx(Ry,{size:13,strokeWidth:2.6})]})]}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:[b.jsxs("button",{onClick:()=>F("terms"),className:"u-btn u-btn-secondary",style:{height:36,fontSize:12.5,fontWeight:700,justifyContent:"center"},children:[b.jsx(sg,{size:14,color:"#60A5FA","aria-hidden":"true"}),b.jsx("span",{children:"Terms of Service"})]}),b.jsxs("button",{onClick:()=>F("privacy"),className:"u-btn u-btn-secondary",style:{height:36,fontSize:12.5,fontWeight:700,justifyContent:"center"},children:[b.jsx(ag,{size:14,color:"#34D399","aria-hidden":"true"}),b.jsx("span",{children:"Privacy Policy"})]})]})]}),b.jsx("div",{className:"u-glass-card",style:{borderRadius:12,padding:"11px 14px",textAlign:"center"},children:b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)"},children:"© 2026 Garuda Cyber Shield. All Rights Reserved."})})]}),P==="gcs"&&b.jsx("div",{role:"dialog","aria-modal":"true",className:"u-modal-backdrop",onClick:()=>F(null),children:b.jsxs("div",{className:"u-dialog-card",style:{width:"94%",maxWidth:500,maxHeight:"calc(100dvh - 28px)",padding:"18px 18px 20px 18px",borderRadius:18,display:"flex",flexDirection:"column",overflow:"hidden"},onClick:B=>B.stopPropagation(),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,paddingBottom:12,borderBottom:"1px solid var(--uv-divider)",flexShrink:0},children:[b.jsxs("div",{style:{fontSize:15,fontWeight:800,color:"var(--uv-text-heading)"},children:["About"," ",b.jsxs("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#38BDF8",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:5},children:[b.jsx("span",{children:"Garuda Cyber Shield"}),b.jsx(Py,{size:13})]})]}),b.jsx("button",{onClick:()=>F(null),className:"u-btn u-btn-secondary",style:{height:30,padding:"0 12px",fontSize:12},children:"Close"})]}),b.jsxs("div",{className:"uv-scrollbar",style:{flex:1,minHeight:0,maxHeight:"calc(100dvh - 106px)",overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",touchAction:"pan-y",background:c==="light"?"radial-gradient(circle at 50% 16%, #e0f2fe 0%, #f0f9ff 52%, #f8fafc 100%)":"radial-gradient(circle at 50% 16%, #0c2d48 0%, #071324 55%, #05080f 100%)",border:c==="light"?"1px solid rgba(2, 132, 199, 0.35)":"1px solid rgba(56, 189, 248, 0.28)",borderRadius:16,padding:"22px 16px 20px 16px",textAlign:"center"},children:[b.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",borderRadius:"50%",padding:4,background:"radial-gradient(circle, rgba(0, 212, 255, 0.38) 0%, rgba(245, 158, 11, 0.18) 65%, transparent 100%)",boxShadow:"0 0 28px rgba(0, 210, 255, 0.35), 0 0 14px rgba(245, 158, 11, 0.28)"},children:b.jsx("img",{src:"/gcs-logo.png",alt:"Garuda Cyber Shield",style:{width:92,height:92,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(245, 158, 11, 0.72)"}})}),b.jsx("div",{style:{marginTop:14},children:b.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:18,fontWeight:900,letterSpacing:"0.08em",color:"var(--uv-text-heading)",textDecoration:"none"},children:"GARUDA CYBER SHIELD"})}),b.jsx("div",{style:{marginTop:8,marginBottom:18},children:b.jsx("span",{style:{display:"inline-block",fontSize:11.5,fontWeight:700,color:c==="light"?"#0284c7":"#38bdf8",backgroundColor:c==="light"?"rgba(2, 132, 199, 0.1)":"rgba(0, 200, 255, 0.12)",border:c==="light"?"1px solid rgba(2, 132, 199, 0.28)":"1px solid rgba(0, 200, 255, 0.28)",padding:"4px 13px",borderRadius:999},children:"Garuda Eyes on Every Threat, Shielding Cyber Universe"})}),b.jsxs("div",{style:{background:c==="light"?"#ffffff":"#080d18",border:c==="light"?"1px solid rgba(148, 163, 184, 0.35)":"1px solid rgba(0, 200, 255, 0.22)",borderTop:"3px solid #f59e0b",borderRadius:13,padding:"18px 18px 16px 18px",textAlign:"center"},children:[b.jsxs("div",{style:{fontSize:12,fontWeight:900,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--uv-text-heading)",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[b.jsx("span",{style:{color:"#f59e0b"},children:"//"}),b.jsx("span",{children:"MISSION BRIEFING"})]}),b.jsxs("p",{style:{fontSize:13,lineHeight:1.72,color:"var(--uv-text-body)",margin:0,textAlign:"center"},children:[b.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:c==="light"?"#0284c7":"#38bdf8",fontWeight:800,textDecoration:"none",borderBottom:"1px solid rgba(56, 189, 248, 0.45)"},children:"Garuda Cyber Shield"})," ","(GCS) stands relentlessly vigilant against every threat, attack, and act of hostility targeting the Sanatani community. We will never tolerate insults, hatred, aggression, or deliberate disrespect toward Sanatan Dharma and its believers. We stand uncompromising in defending Sanatan Dharma, protecting Hindu dignity, and holding every act of anti-Hindu misconduct accountable. Our vigilance never sleeps, because Garuda's eyes on every threat all the time."]}),b.jsx("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--uv-divider)",fontSize:11.5,fontStyle:"italic",fontWeight:600,lineHeight:1.6,color:c==="light"?"#0284c7":"#38bdf8",textAlign:"center"},children:"“Vigilance, integrity, and service define who we are. Garuda exists not as a brand, but as a shield—silent, disciplined, and unwavering in its duty.”"})]})]})]})}),P==="terms"&&b.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"terms-modal-title",className:"u-modal-backdrop",onClick:()=>F(null),children:b.jsxs("div",{className:"u-dialog-card",style:{width:"92%",maxWidth:480,textAlign:"left"},onClick:B=>B.stopPropagation(),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[b.jsx(sg,{size:18,color:"#60A5FA","aria-hidden":"true"}),b.jsxs("h2",{id:"terms-modal-title",style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:["Terms of Service — ",y]})]}),b.jsx("button",{onClick:()=>F(null),"aria-label":"Close Terms of Service",style:{width:28,height:28,borderRadius:7,border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:b.jsx(sf,{size:15,"aria-hidden":"true"})})]}),b.jsxs("div",{style:{maxHeight:280,overflowY:"auto",paddingRight:4,fontSize:12.5,lineHeight:1.6,color:"var(--uv-text-body)",display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:[b.jsxs("p",{children:[b.jsx("strong",{children:"1. Service Architecture:"})," ",A?`Garuda Infinity (${y}) routes traffic through 82 official global gateways using Android VpnService and dynamic per-connection IP rotation.`:`Garuda Infinity (${y}) routes browser traffic through 82 official global gateways with dynamic per-connection IP rotation.`]}),b.jsxs("p",{children:[b.jsx("strong",{children:"2. Acceptable Use:"})," Use Garuda Infinity solely for lawful privacy, security, and network protection purposes."]}),b.jsxs("p",{children:[b.jsx("strong",{children:"3. Attribution:"})," Engineered by"," ",b.jsx("span",{className:"quicksilver-gold-glow",children:"QUICKSILVER"})," •"," ",b.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#38BDF8",fontWeight:700,textDecoration:"none"},children:"Garuda Cyber Shield"}),"."]})]}),b.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:b.jsx("button",{onClick:()=>F(null),className:"u-btn u-btn-primary",children:"Close"})})]})}),P==="privacy"&&b.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",className:"u-modal-backdrop",onClick:()=>F(null),children:b.jsxs("div",{className:"u-dialog-card",style:{width:"92%",maxWidth:480,textAlign:"left"},onClick:B=>B.stopPropagation(),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[b.jsx(ag,{size:18,color:"#34D399","aria-hidden":"true"}),b.jsxs("h2",{id:"privacy-modal-title",style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:["Privacy Policy — ",y]})]}),b.jsx("button",{onClick:()=>F(null),"aria-label":"Close Privacy Policy",style:{width:28,height:28,borderRadius:7,border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:b.jsx(sf,{size:15,"aria-hidden":"true"})})]}),b.jsxs("div",{style:{maxHeight:280,overflowY:"auto",paddingRight:4,fontSize:12.5,lineHeight:1.6,color:"var(--uv-text-body)",display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:[b.jsxs("p",{children:[b.jsx("strong",{children:"1. Strict Zero-Logs Policy:"})," Garuda Infinity does not record, log, or store your browsing history, traffic destination, or DNS queries."]}),b.jsxs("p",{children:[b.jsx("strong",{children:"2. Ephemeral Session State:"})," Active tunnel credentials and routing state are held strictly in memory and cleared when disconnected."]}),b.jsxs("p",{children:[b.jsx("strong",{children:"3. Minimal Permissions:"})," Only standard network and VPN tunnel permissions are used."]})]}),b.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:b.jsx("button",{onClick:()=>F(null),className:"u-btn u-btn-primary",children:"Close"})})]})})]})}function ub(s){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><circle cx="18" cy="18" r="18" fill="url(#g)"/><text x="18" y="22" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="800" font-size="12">${String(s).toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,2)||"GL"}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function db(s){if(!s||typeof s.lat!="number"||typeof s.lng!="number")return"23.81° N, 90.41° E";const e=s.lat>=0?"N":"S",t=s.lng>=0?"E":"W";return`${Math.abs(s.lat).toFixed(2)}° ${e}, ${Math.abs(s.lng).toFixed(2)}° ${t}`}function fb(s){const e=String(s.type||"").toUpperCase(),t=String(s.msg||""),r=s.time||"00:00:00";return e==="CONNECT"||t.toLowerCase().includes("connected")||t.toLowerCase().includes("tunnel active")?{id:s.id,time:r,label:"CONNECTED",group:"TUNNEL",borderColor:"#10b981",bgDark:"rgba(16, 185, 129, 0.08)",bgLight:"rgba(16, 185, 129, 0.07)",badgeBgDark:"rgba(16, 185, 129, 0.18)",badgeBgLight:"rgba(16, 185, 129, 0.14)",badgeColorDark:"#34d399",badgeColorLight:"#047857",message:t}:e==="DISCONNECT"||t.toLowerCase().includes("disconnected")||t.toLowerCase().includes("tearing down")?{id:s.id,time:r,label:"DISCONNECTED",group:"TUNNEL",borderColor:"#f43f5e",bgDark:"rgba(244, 63, 94, 0.08)",bgLight:"rgba(244, 63, 94, 0.06)",badgeBgDark:"rgba(244, 63, 94, 0.18)",badgeBgLight:"rgba(244, 63, 94, 0.14)",badgeColorDark:"#fb7185",badgeColorLight:"#be123c",message:t}:e==="SWITCH"||t.toLowerCase().includes("handshaking")||t.toLowerCase().includes("rotating")?{id:s.id,time:r,label:"HANDSHAKE",group:"TUNNEL",borderColor:"#f59e0b",bgDark:"rgba(245, 158, 11, 0.08)",bgLight:"rgba(245, 158, 11, 0.07)",badgeBgDark:"rgba(245, 158, 11, 0.18)",badgeBgLight:"rgba(245, 158, 11, 0.15)",badgeColorDark:"#fbbf24",badgeColorLight:"#b45309",message:t}:t.toLowerCase().includes("verified")||t.toLowerCase().includes("origin ip")?{id:s.id,time:r,label:t.toLowerCase().includes("origin")?"ISP PROBE":"IP VERIFY",group:"VERIFY",borderColor:"#06b6d4",bgDark:"rgba(6, 182, 212, 0.08)",bgLight:"rgba(6, 182, 212, 0.07)",badgeBgDark:"rgba(6, 182, 212, 0.18)",badgeBgLight:"rgba(6, 182, 212, 0.14)",badgeColorDark:"#22d3ee",badgeColorLight:"#0e7490",message:t}:{id:s.id,time:r,label:"ENGINE",group:"SYSTEM",borderColor:"#3b82f6",bgDark:"rgba(59, 130, 246, 0.08)",bgLight:"rgba(37, 99, 235, 0.06)",badgeBgDark:"rgba(59, 130, 246, 0.18)",badgeBgLight:"rgba(37, 99, 235, 0.14)",badgeColorDark:"#60a5fa",badgeColorLight:"#1d4ed8",message:t}}function hb(s,e){return String(s||"").split(/\b(\d{1,3}(?:\.\d{1,3}){3})\b/g).map((r,a)=>/^\d{1,3}(?:\.\d{1,3}){3}$/.test(r)?b.jsx("span",{style:{display:"inline-block",padding:"0 6px",borderRadius:4,backgroundColor:e?"rgba(37, 99, 235, 0.12)":"rgba(56, 189, 248, 0.16)",border:e?"1px solid rgba(37, 99, 235, 0.28)":"1px solid rgba(56, 189, 248, 0.35)",color:e?"#1d4ed8":"#38bdf8",fontWeight:700,fontVariantNumeric:"tabular-nums",fontSize:11},children:r},a):b.jsx(O0.Fragment,{children:r},a))}function pb({vpnStatus:s,selectedLocationObj:e,realIpInfo:t,onVerifyIp:r,ipVerificationResult:a,isVerifyingIp:l,activeCountryTimeInfo:c,activityLogs:d=[],onClearLogs:h=()=>{},theme:p="dark"}){const[v,x]=Fe.useState("telemetry"),[g,_]=Fe.useState("ALL"),E=s.state==="Connected",A=p==="light",S=E?s.statusCountryIso2||(e==null?void 0:e.iso)||"US":(t==null?void 0:t.country)||"BD",y=E?s.statusIp||(e==null?void 0:e.gatewayIp):(t==null?void 0:t.ip)||"160.250.69.162",P=E?s.statusCity||(e==null?void 0:e.city):(t==null?void 0:t.city)||"Dhaka",F=E?s.statusCountryName||(e==null?void 0:e.name):(t==null?void 0:t.countryName)||"Bangladesh",T=(a==null?void 0:a.coordinates)||(E?e==null?void 0:e.coordinates:t==null?void 0:t.coordinates)||{lat:23.8103,lng:90.4125},L=Fe.useMemo(()=>{const I=d.map(fb);return g==="ALL"?I:I.filter(U=>U.group===g)},[d,g]);return b.jsx("section",{"aria-label":"IP & Log Inspector",className:"uv-scrollbar",style:{flex:1,height:"100%",overflowY:"auto",padding:"18px 14px 36px 14px",display:"flex",flexDirection:"column",alignItems:"center"},children:b.jsxs("div",{style:{width:"100%",maxWidth:540,display:"flex",flexDirection:"column",gap:12},children:[b.jsxs("div",{className:"u-glass-card",style:{display:"flex",borderRadius:12,padding:4,gap:5},children:[b.jsxs("button",{onClick:()=>x("telemetry"),style:{flex:1,height:36,borderRadius:9,border:"none",background:v==="telemetry"?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",color:v==="telemetry"?"#FFFFFF":"var(--uv-text-secondary)",fontSize:12,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,whiteSpace:"nowrap",boxShadow:v==="telemetry"?"0 3px 10px rgba(37, 99, 235, 0.28)":"none"},children:[b.jsx(lg,{size:14,style:{flexShrink:0}}),b.jsx("span",{children:"Live IP & ASN"})]}),b.jsxs("button",{onClick:()=>x("logs"),style:{flex:1,height:36,borderRadius:9,border:"none",background:v==="logs"?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",color:v==="logs"?"#FFFFFF":"var(--uv-text-secondary)",fontSize:12,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,whiteSpace:"nowrap",boxShadow:v==="logs"?"0 3px 10px rgba(37, 99, 235, 0.28)":"none"},children:[b.jsx(cg,{size:14,style:{flexShrink:0}}),b.jsx("span",{children:"Activity Logs"})]})]}),v==="telemetry"?b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,gap:8},children:[b.jsx("span",{style:{fontSize:10.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--uv-text-secondary)",whiteSpace:"nowrap"},children:"Active Public IP"}),b.jsx("span",{style:{fontSize:9.5,fontWeight:800,padding:"3px 9px",borderRadius:999,backgroundColor:E?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.15)",color:E?"#34D399":"#FB7185",border:E?"1px solid rgba(16, 185, 129, 0.42)":"1px solid rgba(244, 63, 94, 0.35)",whiteSpace:"nowrap",flexShrink:0},children:E?"TUNNEL PROTECTED":"DIRECT ISP"})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",gap:10,padding:"11px 12px",borderRadius:11,background:A?"linear-gradient(135deg, rgba(224, 242, 254, 0.85), rgba(240, 249, 255, 0.98))":"linear-gradient(135deg, rgba(30, 58, 138, 0.28), rgba(15, 23, 42, 0.72))",border:A?"1px solid rgba(2, 132, 199, 0.28)":"1px solid rgba(56, 189, 248, 0.26)",marginBottom:11},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0,flex:1},children:[b.jsx("img",{src:Mc(S),alt:S,style:{width:34,height:34,borderRadius:"50%",objectFit:"cover",flexShrink:0,border:"1px solid var(--uv-border-strong)"},onError:I=>{I.currentTarget.onerror=null,I.currentTarget.src=ub(S)}}),b.jsxs("div",{style:{minWidth:0,flex:1},children:[b.jsx("div",{style:{fontSize:16.5,fontWeight:800,fontVariantNumeric:"tabular-nums",color:"var(--uv-text-heading)",lineHeight:1.15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y}),b.jsxs("div",{style:{fontSize:11,color:"var(--uv-text-secondary)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[P,", ",F," (",S,")"]})]})]}),b.jsxs("div",{style:{textAlign:"right",paddingLeft:10,borderLeft:"1px solid var(--uv-divider)",flexShrink:0},children:[b.jsx("div",{style:{fontSize:8.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",color:A?"#0284c7":"#38bdf8",whiteSpace:"nowrap"},children:"Location Time"}),b.jsx("div",{style:{fontSize:12,fontWeight:800,color:"var(--uv-text-heading)",fontVariantNumeric:"tabular-nums",marginTop:1,whiteSpace:"nowrap"},children:(c==null?void 0:c.time12)||"—"}),b.jsx("div",{style:{fontSize:9.5,fontWeight:600,color:"var(--uv-text-secondary)",marginTop:1,whiteSpace:"nowrap"},children:c?`${c.timeZone} (${c.offset})`:"—"})]})]}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8},children:[b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"ISP / Carrier"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?s.statusIsp||(e==null?void 0:e.isp):(t==null?void 0:t.isp)||"Direct Client ISP"})]}),b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"ASN Network"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?s.statusAsn||(e==null?void 0:e.asn):(t==null?void 0:t.asn)||"AS64072 Local ISP"})]}),b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"DNS Resolvers"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?"1.1.1.1, 1.0.0.1":"8.8.8.8 (ISP)"})]}),b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Origin Real IP"}),b.jsxs("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[(t==null?void 0:t.ip)||"160.250.69.162"," (",(t==null?void 0:t.country)||"BD",")"]})]})]})]}),b.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:11,gap:10,flexWrap:"nowrap"},children:[b.jsxs("div",{style:{minWidth:0,flex:1},children:[b.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Live Tunnel & Route Verification"}),b.jsx("div",{style:{fontSize:10.5,color:"var(--uv-text-secondary)",marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Exit-node & leak protection audit"})]}),b.jsxs("button",{onClick:r,disabled:l,className:"u-btn u-btn-primary",style:{height:32,padding:"0 12px",fontSize:11.5,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:[b.jsx(Ny,{size:13,className:l?"uv-spin-fast":"",style:{flexShrink:0}}),b.jsx("span",{children:l?"Verifying...":"Verify IP Now"})]})]}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8,marginBottom:10},children:[b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Tunnel Route Status"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:E?"#10B981":"#F43F5E",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?`Protected (${S})`:"Direct ISP Route"})]}),b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Transport Cipher"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?"TLS 1.3 • AES-256-GCM":"Unencrypted Direct"})]}),b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"DNS & WebRTC Shield"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:E?"var(--uv-primary)":"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?"Zero-Leak Shielded":"Standard ISP DNS"})]}),b.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[b.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Exit Geo Coordinates"}),b.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:db(T)})]})]}),b.jsxs("div",{style:{padding:"10px 12px",borderRadius:10,backgroundColor:a||E?"rgba(16, 185, 129, 0.14)":A?"#f1f5f9":"rgba(15, 23, 42, 0.78)",border:a||E?"1px solid rgba(16, 185, 129, 0.42)":"1px solid var(--uv-border-strong)",color:a||E?A?"#064e3b":"#ecfdf5":"var(--uv-text-body)",display:"flex",alignItems:"center",gap:10},children:[a||E?b.jsx(lg,{size:18,color:A?"#059669":"#34d399",style:{flexShrink:0}}):b.jsx(Uy,{size:17,color:A?"#0284c7":"#38bdf8",style:{flexShrink:0}}),a!=null&&a.localTime?b.jsxs("div",{style:{minWidth:0,flex:1},children:[b.jsxs("div",{style:{fontSize:11.5,fontWeight:800,lineHeight:1.3,fontVariantNumeric:"tabular-nums"},children:["Verified Active IP: ",a.ip||y]}),b.jsxs("div",{style:{fontSize:10.5,fontWeight:600,opacity:.9,marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[a.city||P,","," ",a.countryName||F," •"," ",a.localTime]})]}):E?b.jsxs("div",{style:{minWidth:0,flex:1},children:[b.jsxs("div",{style:{fontSize:11.5,fontWeight:800,lineHeight:1.3,fontVariantNumeric:"tabular-nums"},children:["Encrypted Tunnel Active: ",y]}),b.jsxs("div",{style:{fontSize:10.5,fontWeight:600,opacity:.9,marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[P,", ",F," • ",(c==null?void 0:c.verifiedLabel)||""]})]}):b.jsx("span",{style:{fontSize:11,fontWeight:600,lineHeight:1.35},children:"Tap “Verify IP Now” to audit live exit-node routing and leak protection."})]})]})]}):b.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,gap:8,flexWrap:"nowrap"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,minWidth:0},children:[b.jsx(cg,{size:15,color:"#60A5FA",style:{flexShrink:0}}),b.jsx("span",{style:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",color:"var(--uv-text-secondary)",whiteSpace:"nowrap"},children:"Engine Activity Logs"}),b.jsxs("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(59, 130, 246, 0.16)",border:"1px solid rgba(59, 130, 246, 0.35)",color:"#60A5FA",whiteSpace:"nowrap",flexShrink:0},children:[L.length," ",L.length===1?"Event":"Events"]})]}),b.jsxs("button",{onClick:h,className:"u-btn u-btn-secondary",style:{height:28,padding:"0 10px",fontSize:11,whiteSpace:"nowrap",flexShrink:0},children:[b.jsx(ky,{size:12,style:{flexShrink:0}}),b.jsx("span",{children:"Clear"})]})]}),b.jsx("div",{style:{display:"flex",gap:6,marginBottom:12,overflowX:"auto",paddingBottom:2},children:[{id:"ALL",label:"All Events"},{id:"TUNNEL",label:"Tunnel"},{id:"VERIFY",label:"IP Verify"},{id:"SYSTEM",label:"System"}].map(I=>{const U=g===I.id;return b.jsx("button",{onClick:()=>_(I.id),style:{height:26,padding:"0 10px",borderRadius:999,border:"1px solid",borderColor:U?"var(--uv-primary)":"var(--uv-border)",backgroundColor:U?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:U?"#60A5FA":"var(--uv-text-secondary)",fontSize:11,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0},children:I.label},I.id)})}),b.jsx("div",{className:"uv-scrollbar",style:{display:"flex",flexDirection:"column",gap:7,maxHeight:420,overflowY:"auto",paddingRight:2},children:L.length===0?b.jsx("div",{style:{textAlign:"center",padding:"32px 12px",color:"var(--uv-text-secondary)",fontSize:12},children:"No activity logs in this category."}):L.map(I=>b.jsxs("div",{style:{backgroundColor:A?I.bgLight:I.bgDark,border:"1px solid var(--uv-border)",borderLeft:`3.5px solid ${I.borderColor}`,borderRadius:9,padding:"8px 11px",display:"flex",flexDirection:"column",gap:4},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[b.jsx("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:"0.04em",textTransform:"uppercase",padding:"2px 7px",borderRadius:5,backgroundColor:A?I.badgeBgLight:I.badgeBgDark,color:A?I.badgeColorLight:I.badgeColorDark,whiteSpace:"nowrap"},children:I.label}),b.jsx("span",{style:{fontSize:10.5,fontWeight:700,color:"var(--uv-text-secondary)",fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap"},children:I.time})]}),b.jsx("div",{style:{fontSize:11.5,fontWeight:600,color:"var(--uv-text-heading)",lineHeight:1.4,wordBreak:"break-word"},children:hb(I.message,A)})]},I.id))})]})]})})}const mb={Auto:"Garuda LinkX (Auto)",WireGuard:"Garuda LinkX (WireGuard)",OpenVPN_UDP:"OpenVPN DCO (UDP)",OpenVPN_TCP:"OpenVPN DCO (TCP)"};function gb(s){const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=s%60;return[e,t,r].map(a=>String(a).padStart(2,"0")).join(":")}function rf(s,e){const t=l=>String(l||"1.0.0").replace(/^[vV]/,"").split(".").map(c=>parseInt(c,10)||0),r=t(s),a=t(e);for(let l=0;l<3;l++){if((r[l]||0)>(a[l]||0))return!0;if((r[l]||0)<(a[l]||0))return!1}return!1}function bs(){var s,e;return typeof window<"u"&&((s=window.location)==null?void 0:s.protocol)==="chrome-extension:"&&typeof chrome<"u"&&!!((e=chrome.runtime)!=null&&e.sendMessage)}function vb(){return typeof window>"u"?!1:bs()?!0:!!window.__GARUDA_EXTENSION_BRIDGE_ACTIVE||document.documentElement.getAttribute("data-garuda-extension")==="active"}function _b(s,e){if(!e)return{ok:!1};const t=e.state||{},r=e.status||{},a=(t.vpnState||r.state)==="Connected";return{ok:!!e.ok,state:{status:t.vpnState||r.state||"Disconnected",activeIso2:r.statusCountryIso2||t.geoCountryIso2||t.iso||t.selectedIso||"US",exitIpInfo:{ip:r.statusIp||t.statusIp||"",country:r.statusCountryIso2||t.geoCountryIso2||t.iso||"",countryName:r.statusCountryName||t.geoCountryName||t.countryName||"",city:r.statusCity||t.city||"",isp:r.statusIsp||t.isp||"",asn:r.statusAsn||t.asn||"",timeZone:r.timeZone||t.timeZone||""},primaryProxy:Array.isArray(t.activeProxies)&&t.activeProxies.length>0?t.activeProxies[0]:a&&t.statusIp?{host:t.statusIp,port:443}:null},verified:s==="VERIFY_IP"?{ip:e.ip,country:e.country,countryName:e.countryName,city:e.city,isp:e.isp,asn:e.asn,timeZone:e.timeZone,localTime:e.localTime,coordinates:e.coordinates}:void 0}}function ts(s,e=8e3){if(bs()){const r={GET_STATE:"GET_STATUS",CONNECT:"CONNECT_VPN",DISCONNECT:"DISCONNECT_VPN",VERIFY_IP:"VERIFY_IP",UPDATE_SETTINGS:"UPDATE_SETTINGS"}[s.type]||s.type,a=s.iso2?W0(s.iso2):null,l=s.type==="CONNECT"?{iso:s.iso2,countryName:(a==null?void 0:a.name)||s.iso2,city:(a==null?void 0:a.city)||"Gateway",isp:(a==null?void 0:a.isp)||"Garuda Encrypted Relay",asn:(a==null?void 0:a.asn)||"AS209854 Garuda Network"}:s;return new Promise(c=>{const d=setTimeout(()=>c({ok:!1,timeout:!0}),e);try{chrome.runtime.sendMessage({action:r,payload:l},h=>{clearTimeout(d),chrome.runtime.lastError||!h?c({ok:!1}):c(_b(s.type,h))})}catch{clearTimeout(d),c({ok:!1})}})}return new Promise(t=>{const r=`garuda_req_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;let a=!1;const l=setTimeout(()=>{a||(a=!0,window.removeEventListener("message",c),t(null))},e);function c(d){if(d.source!==window)return;const h=d.data;h&&h.source==="GARUDA_INFINITY_EXTENSION"&&h.requestId===r&&(a=!0,clearTimeout(l),window.removeEventListener("message",c),t(h.response))}window.addEventListener("message",c),window.postMessage({source:"GARUDA_INFINITY_WEB",requestId:r,payload:s},window.location.origin)})}function yb(){const[s,e]=Fe.useState(()=>{var ve,Ne;try{if(sn())return"vpn";if(typeof window<"u"&&((Ne=(ve=window.location)==null?void 0:ve.search)!=null&&Ne.includes("autoUpdate=1")))return"settings"}catch{}return"vpn"}),[t,r]=Fe.useState(!1),a=Fe.useRef([]),l=Fe.useRef(s),c=Fe.useRef(!1),d=Fe.useRef(!1);Fe.useEffect(()=>{l.current=s},[s]),Fe.useEffect(()=>{c.current=t},[t]);const h=Fe.useCallback(ve=>{r(!1),e(Ne=>Ne===ve?Ne:(sn()&&(ve==="vpn"?a.current=[]:a.current=[...a.current,Ne].slice(-16)),ve))},[]),p=Fe.useCallback(()=>{var ve;r(!1),sn()&&typeof((ve=window.GarudaAndroidBridge)==null?void 0:ve.quitApplication)=="function"&&window.GarudaAndroidBridge.quitApplication()},[]),[v,x]=Fe.useState(()=>{try{const ve=localStorage.getItem("garuda_infinity_theme");if(ve==="light"||ve==="dark")return ve}catch{}return"dark"}),[g,_]=Fe.useState("globe");Fe.useEffect(()=>{try{localStorage.setItem("garuda_infinity_theme",v),document.documentElement.setAttribute("data-theme",v)}catch{}},[v]);const E=Fe.useCallback(()=>{x(ve=>{const Ne=ve==="dark"?"light":"dark";return ts({type:"UPDATE_SETTINGS",theme:Ne},2e3),Ne})},[]),A=Fe.useCallback(()=>{_(ve=>ve==="globe"?"shield":ve==="shield"?"orbit":"globe")},[]),[S]=Fe.useState(()=>dg),[y]=Fe.useState(!1),[P,F]=Fe.useState("US"),[T,L]=Fe.useState("Auto"),[I,U]=Fe.useState(!1),[w,N]=Fe.useState(!1),[O,G]=Fe.useState(!1),[H,J]=Fe.useState(()=>{try{const ve=localStorage.getItem("garuda_infinity_dynamic_ip");if(ve==="false")return!1;if(ve==="true")return!0}catch{}return!0}),[B,q]=Fe.useState(()=>vb()),[pe,oe]=Fe.useState(()=>sn()),[j,V]=Fe.useState(null),[te,D]=Fe.useState(!1),[le,Te]=Fe.useState(!1),[Ke,Ge]=Fe.useState(null),[we,re]=Fe.useState(0),[ae,Le]=Fe.useState({checked:!1,updateAvailable:!1,forceUpdateRequired:!1,forceUpdateTitle:"Mandatory Update Required",forceUpdateMessage:"A critical update with new features and security enhancements is required to continue using Garuda Infinity. Please update to the latest version now.",latestAppVersion:Er,latestExtensionVersion:Eo}),[et,He]=Fe.useState(!1),[_t,Xt]=Fe.useState(!1),pt=Fe.useRef(null);Fe.useEffect(()=>{d.current=_t},[_t]),Fe.useEffect(()=>{if(!(typeof window>"u"))return window.__onGarudaBackPressed=()=>{if(!sn())return"UNHANDLED";if(c.current)return r(!1),"HANDLED_CLOSE_QUIT_POPUP";if(d.current)return Xt(!1),"HANDLED_CLOSE_UPDATE_POPUP";if(typeof window.__closeGarudaSubModal=="function"&&window.__closeGarudaSubModal())return"HANDLED_SUB_MODAL";if(l.current!=="vpn"){const ve=a.current,Ne=ve.length>0?ve[ve.length-1]:"vpn";return a.current=ve.slice(0,-1),e(Ne),"HANDLED_NAV_BACK"}return a.current=[],r(!0),"HANDLED_SHOW_QUIT_POPUP"},()=>{delete window.__onGarudaBackPressed}},[]);const Lt=Fe.useCallback(()=>{pt.current&&clearTimeout(pt.current),Xt(!0),pt.current=setTimeout(()=>{Xt(!1),pt.current=null},3e3)},[]),[st,Et]=Fe.useState({ip:"160.250.69.162",country:"BD",countryName:"Bangladesh",city:"Dhaka",isp:"Direct Client ISP",asn:"AS64072 Local Broadband",timeZone:"Asia/Dhaka",coordinates:{lat:23.8103,lng:90.4125}}),[De,Ct]=Fe.useState({state:"Disconnected",error:!1,statusReady:!0,statusIp:"160.250.69.162",statusCountryIso2:"BD",statusCountryName:"Bangladesh",statusCity:"Dhaka",statusIsp:"Direct Client ISP",statusAsn:"AS64072 Local Broadband",timeZone:"Asia/Dhaka",uiLockedLocation:"",effectiveProtocol:"WireGuard",effectiveProtocolLabel:"Garuda LinkX (Auto)",tunnelMode:"Disconnected",realTunnelActive:!1}),[an,wt]=Fe.useState(0),[$t,Y]=Fe.useState(0),[Zt,Rt]=Fe.useState(0),[k,M]=Fe.useState(()=>[{id:1,time:Ci("BD","Asia/Dhaka").time24,type:"info",msg:`Garuda Infinity Engine (${wo}) ready.`}]),ee=Fe.useRef(null),ne=Fe.useCallback((ve,Ne,W="",ie="")=>{const Q=Ci(W||"BD",ie);M(he=>[{id:Date.now()+Math.random(),time:Q.time24,type:ve,msg:Ne},...he.slice(0,49)])},[]),ge=Fe.useCallback(async(ve=!0)=>{var Ne,W,ie,ye,Q,he,de,be;He(!0);try{const Me=await lx();if(Me){const it=sn(),dt=String(Me.appVersion||Me.version||Er).replace(/^[vV]/,"").trim(),Vt=String(Me.extensionVersion||Me.version||Eo).replace(/^[vV]/,"").trim(),Ft=Number(Me.versionCode)||hg,yt=String(Me.minSupportedAppVersion||Me.minSupportedVersion||((Ne=Me.accessControl)==null?void 0:Ne.minAllowedAppVersion)||((W=Me.accessControl)==null?void 0:W.minAllowedVersion)||"").replace(/^[vV]/,"").trim(),Ht=String(Me.minSupportedExtensionVersion||Me.minSupportedVersion||((ie=Me.accessControl)==null?void 0:ie.minAllowedExtensionVersion)||((ye=Me.accessControl)==null?void 0:ye.minAllowedVersion)||"").replace(/^[vV]/,"").trim(),Bt=it?rf(dt,Er)||Ft>Number(hg):rf(Vt,Eo),At=it?!!(Me.forceUpdate||Me.forceUpdateApp||(Q=Me.accessControl)!=null&&Q.enforceMinVersion):!!(Me.forceUpdate||Me.forceUpdateExtension||(he=Me.accessControl)!=null&&he.enforceMinVersion),cn=it?yt||dt:Ht||Vt,On=!!(At&&cn&&rf(cn,it?Er:Eo));Le({checked:!0,updateAvailable:Bt||On,forceUpdateRequired:On,forceUpdateTitle:Me.forceUpdateTitle||((de=Me.accessControl)==null?void 0:de.restrictionTitle)||"Mandatory Update Required",forceUpdateMessage:Me.forceUpdateMessage||((be=Me.accessControl)==null?void 0:be.restrictionMessage)||"A critical update with new features and security enhancements is required to continue using Garuda Infinity. Please update to the latest version now.",latestAppVersion:it?dt:Vt,latestExtensionVersion:Vt,apkUrl:Me.apkUrl||kl,extensionZipUrl:Me.extensionZipUrl||To}),On?(sn()&&yg().catch(()=>{}),(B||bs())&&ts({type:"DISCONNECT"},3e3).catch(()=>{}),Ct(un=>({...un,state:"Disconnected",uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1}))):Bt&&ve&&Lt()}}catch{}finally{He(!1)}},[B,Lt]),Re=Fe.useCallback(async()=>{if(ae.updateAvailable){if(sn()){const ve=ae.latestAppVersion||Er;cx(ae.apkUrl||kl,ve),ne("info",`Downloading Garuda Infinity V${ve} APK to Downloads...`);return}if(bs()){try{const ve=await Z0({allowPicker:!0,onProgress:Ne=>ne("info",Ne)});if(ve!=null&&ve.ok)return}catch{}cf(ae.extensionZipUrl||To),ne("info","Downloading Garuda-Infinity-Extension.zip update package...");return}cf(ae.extensionZipUrl||To);return}await ge(!0)},[ae.updateAvailable,ae.latestAppVersion,ae.apkUrl,ae.extensionZipUrl,ne,ge]);Fe.useEffect(()=>{ge(!0);const Ne=setInterval(()=>{ge(!0)},36e5),W=()=>{typeof document<"u"&&document.visibilityState==="visible"&&ge(!0)};return typeof window<"u"&&(window.__onGarudaAppEntered=()=>{ge(!0)}),typeof document<"u"&&document.addEventListener("visibilitychange",W),()=>{clearInterval(Ne),typeof document<"u"&&document.removeEventListener("visibilitychange",W),typeof window<"u"&&window.__onGarudaAppEntered&&delete window.__onGarudaAppEntered,pt.current&&clearTimeout(pt.current)}},[ge]),Fe.useEffect(()=>{if(!(typeof window>"u"))return window.__onGarudaNativeVpnDisconnected=()=>{V(null),Ct(ve=>({...ve,state:"Disconnected",statusIp:st.ip,statusCountryIso2:st.country,statusCountryName:st.countryName,statusCity:st.city,statusIsp:st.isp,statusAsn:st.asn,timeZone:st.timeZone,uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1})),Ge(null),ne("disconnect","Disconnected from Android notification bar • Restored direct ISP",st.country,st.timeZone)},()=>{delete window.__onGarudaNativeVpnDisconnected}},[st,ne]),Fe.useEffect(()=>{let ve=!1;async function Ne(){if(sn()&&!ve){oe(!0);const Q=await lf(!1);if(Q!=null&&Q.ip&&!ve){const he={ip:Q.ip,country:Q.country||"BD",countryName:Q.countryName||"Bangladesh",city:Q.city||"Dhaka",isp:Q.isp||"Direct Mobile Carrier",asn:Q.asn||"AS24389 Mobile ISP",timeZone:Q.timeZone||En(Q.country||"BD"),coordinates:{lat:Number(Q.latitude)||23.8103,lng:Number(Q.longitude)||90.4125}};Et(he),Ct(de=>de.state==="Disconnected"?{...de,statusIp:he.ip,statusCountryIso2:he.country,statusCountryName:he.countryName,statusCity:he.city,statusIsp:he.isp,statusAsn:he.asn,timeZone:he.timeZone}:de),ne("info",`Detected real ISP IP ${he.ip} (${he.country})`,he.country,he.timeZone);return}}const ie=await ts({type:"GET_STATE"},1500);if(ie!=null&&ie.ok&&!ve){q(!0);const Q=ie.state;if((Q==null?void 0:Q.status)==="Connected"&&Q.activeIso2){const he=S.find(de=>de.iso.toLowerCase()===Q.activeIso2.toLowerCase())||S[0];F(he.iso),Ct(de=>{var be,Me,it,dt,Vt,Ft;return{...de,state:"Connected",statusIp:((be=Q.exitIpInfo)==null?void 0:be.ip)||he.gatewayIp,statusCountryIso2:he.iso,statusCountryName:((Me=Q.exitIpInfo)==null?void 0:Me.countryName)||he.name,statusCity:((it=Q.exitIpInfo)==null?void 0:it.city)||he.city,statusIsp:((dt=Q.exitIpInfo)==null?void 0:dt.isp)||he.isp,statusAsn:((Vt=Q.exitIpInfo)==null?void 0:Vt.asn)||he.asn,timeZone:((Ft=Q.exitIpInfo)==null?void 0:Ft.timeZone)||En(he.iso),uiLockedLocation:he.iso,tunnelMode:"Garuda Standalone Extension Tunnel",realTunnelActive:!0}});return}}const ye=[{url:"https://api.2ip.io/",parse:Q=>{var he,de;return Q&&Q.ip?{ip:Q.ip,country:Q.code||"BD",countryName:Q.country||"Bangladesh",city:Q.city||"Dhaka",isp:((he=Q.asn)==null?void 0:he.name)||"Local Broadband ISP",asn:(de=Q.asn)!=null&&de.id?`AS${Q.asn.id} ${Q.asn.name||""}`.trim():"AS64072",timeZone:En(Q.code||"BD",Q.time_zone||""),coordinates:{lat:Number(Q.lat)||23.8103,lng:Number(Q.lon)||90.4125}}:null}},{url:"https://ipwho.is/",parse:Q=>{var he,de,be,Me;return Q&&Q.success!==!1&&Q.ip?{ip:Q.ip,country:Q.country_code||"BD",countryName:Q.country||"Bangladesh",city:Q.city||"Dhaka",isp:((he=Q.connection)==null?void 0:he.isp)||((de=Q.connection)==null?void 0:de.org)||"Local Broadband ISP",asn:(be=Q.connection)!=null&&be.asn?`AS${Q.connection.asn}`:"AS64072",timeZone:En(Q.country_code||"BD",((Me=Q.timezone)==null?void 0:Me.id)||""),coordinates:{lat:Number(Q.latitude)||23.8103,lng:Number(Q.longitude)||90.4125}}:null}}];for(const Q of ye){if(ve)break;try{const he=await fetch(Q.url,{cache:"no-store"});if(!he.ok)continue;const de=await he.json(),be=Q.parse(de);if(be&&!ve){Et(be),Ct(Me=>Me.state==="Disconnected"?{...Me,statusIp:be.ip,statusCountryIso2:be.country,statusCountryName:be.countryName,statusCity:be.city,statusIsp:be.isp,statusAsn:be.asn,timeZone:be.timeZone}:Me),ne("info",`Origin IP detected: ${be.ip} (${be.city}, ${be.country})`,be.country,be.timeZone);break}}catch{}}}return Ne(),()=>{ve=!0}},[S,ne]),Fe.useEffect(()=>{const ve=setInterval(()=>{re(Ne=>(Ne+1)%86400),De.state==="Connected"&&(sn()?wt(_g()):wt(Ne=>Ne+1),Y(Ne=>Ne+Math.floor(18e3+Math.random()*52e3)),Rt(Ne=>Ne+Math.floor(6200+Math.random()*19e3)))},1e3);return()=>clearInterval(ve)},[De.state]);const Oe=Fe.useCallback(async(ve,Ne=!1)=>{var de,be,Me;if(ae.forceUpdateRequired)return;const W=ve||P,ie=S.find(it=>it.iso.toLowerCase()===String(W).toLowerCase())||S[0];F(ie.iso),D(!0),ee.current&&clearTimeout(ee.current),ee.current=setTimeout(()=>{D(!1)},900),Ct(it=>({...it,state:"Connecting",uiLockedLocation:ie.iso})),Ge(null);const ye=T==="Auto"?ie.streamingOptimized||ie.hasStreaming?"WireGuard":"OpenVPN_UDP":T,Q=mb[T]||"Garuda LinkX (Auto)",he=Ne||H!==!1;ne("switch",`Handshaking with ${ie.name} (${ie.city}) gateway...`,ie.iso);try{if(sn()){const Ft=await sx(ie,he,yt=>{if(!(yt!=null&&yt.ip))return;const Ht=yt.timeZone||En(ie.iso),Bt=Ci(ie.iso,Ht);Ct(At=>At.state==="Connected"&&String(At.statusCountryIso2||"").toUpperCase()===ie.iso.toUpperCase()?{...At,statusIp:yt.ip||At.statusIp,statusCountryName:yt.countryName||At.statusCountryName,statusCity:yt.city||At.statusCity,statusIsp:yt.isp||At.statusIsp,statusAsn:yt.asn||At.statusAsn,timeZone:Ht}:At),Ge(At=>At&&At.isVpnActive?{...At,ip:yt.ip||At.ip,countryName:yt.countryName||At.countryName,city:yt.city||At.city,isp:yt.isp||At.isp,asn:yt.asn||At.asn,localTime:Bt.verifiedLabel,timeZone:Bt.timeZone}:At)});if(Ft!=null&&Ft.ok){const yt=Ft.exitIpInfo||{},Ht=yt.ip||((de=Ft.primaryProxy)==null?void 0:de.host)||ie.gatewayIp,Bt=!yt.country||String(yt.country).toUpperCase()===ie.iso.toUpperCase(),At=Bt&&yt.countryName||ie.name,cn=Bt&&yt.city||ie.city,vn=Bt&&yt.timeZone||En(ie.iso),On=Ci(ie.iso,vn);V({iso2:ie.iso,primaryProxy:Ft.primaryProxy,proxyUsername:Ft.proxyAuthUsername}),Y(40960),Rt(14336),wt(_g()),Ct({state:"Connected",error:!1,statusReady:!0,statusIp:Ht,statusCountryIso2:ie.iso,statusCountryName:At,statusCity:cn,statusIsp:yt.isp||ie.isp,statusAsn:yt.asn||ie.asn,timeZone:vn,uiLockedLocation:ie.iso,effectiveProtocol:ye,effectiveProtocolLabel:Q,tunnelMode:"Android Native VpnService",realTunnelActive:!0}),Ge({isVpnActive:!0,ip:Ht,country:ie.iso,countryName:At,city:cn,isp:yt.isp||ie.isp,asn:yt.asn||ie.asn,localTime:On.verifiedLabel,timeZone:On.timeZone,tunnelProtocol:Q,dnsServers:["1.1.1.1","1.0.0.1"]}),ne("connect",`Connected to ${At} (${cn}) • Exit IP ${Ht}`,ie.iso,vn);return}}if(B||bs()){const Ft=await ts({type:"CONNECT",iso2:ie.iso,rotateIp:he},14e3);if(Ft!=null&&Ft.ok&&((be=Ft.state)==null?void 0:be.status)==="Connected"){q(!0);const yt=Ft.state,Ht=yt.exitIpInfo||{},Bt=Ht.ip||((Me=yt.primaryProxy)==null?void 0:Me.host)||ie.gatewayIp,At=!Ht.country||String(Ht.country).toUpperCase()===ie.iso.toUpperCase(),cn=At&&Ht.countryName||ie.name,vn=At&&Ht.city||ie.city,On=At&&Ht.timeZone||En(ie.iso),un=Ci(ie.iso,On);V({iso2:ie.iso,primaryProxy:yt.primaryProxy}),Y(36864),Rt(12288),wt(0),Ct({state:"Connected",error:!1,statusReady:!0,statusIp:Bt,statusCountryIso2:ie.iso,statusCountryName:cn,statusCity:vn,statusIsp:Ht.isp||ie.isp,statusAsn:Ht.asn||ie.asn,timeZone:On,uiLockedLocation:ie.iso,effectiveProtocol:ye,effectiveProtocolLabel:Q,tunnelMode:"Garuda Standalone Extension Tunnel",realTunnelActive:!0}),Ge({isVpnActive:!0,ip:Bt,country:ie.iso,countryName:cn,city:vn,isp:Ht.isp||ie.isp,asn:Ht.asn||ie.asn,localTime:un.verifiedLabel,timeZone:un.timeZone,tunnelProtocol:Q,dnsServers:["1.1.1.1","1.0.0.1"]}),ne("connect",`Connected via Extension • Exit IP ${Bt} (${ie.iso})`,ie.iso,On);return}}try{const Ft=await fetch("/api/vpn/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({iso2:ie.iso,rotateIp:he})});if(Ft.ok){const yt=await Ft.json();if(yt.ok){const Ht=fg(ie,ye),Bt=yt.exitIpInfo||{},At=Bt.ip||Ht.publicIp,cn=En(ie.iso),vn=Ci(ie.iso,cn);V({iso2:ie.iso,primaryProxy:yt.primaryProxy,proxyUsername:yt.proxyAuthUsername}),Y(32768),Rt(11240),wt(0),Ct({state:"Connected",error:!1,statusReady:!0,statusIp:At,statusCountryIso2:ie.iso,statusCountryName:Bt.countryName||ie.name,statusCity:Bt.city||ie.city,statusIsp:Bt.isp||ie.isp,statusAsn:Bt.asn||ie.asn,timeZone:cn,uiLockedLocation:ie.iso,effectiveProtocol:ye,effectiveProtocolLabel:Q,tunnelMode:"Garuda Cloud Gateway Tunnel",realTunnelActive:!0}),Ge({isVpnActive:!0,ip:At,country:ie.iso,countryName:Bt.countryName||ie.name,city:Bt.city||ie.city,isp:Bt.isp||ie.isp,asn:Bt.asn||ie.asn,localTime:vn.verifiedLabel,timeZone:vn.timeZone,tunnelProtocol:Q,dnsServers:["1.1.1.1","1.0.0.1"]}),ne("connect",`Tunnel Active • Exit IP ${At} (${ie.city}, ${ie.iso})`,ie.iso,cn);return}}}catch{}const it=fg(ie,ye),dt=En(ie.iso),Vt=Ci(ie.iso,dt);Y(32768),Rt(11240),wt(0),Ct({state:"Connected",error:!1,statusReady:!0,statusIp:it.publicIp,statusCountryIso2:ie.iso,statusCountryName:ie.name,statusCity:ie.city,statusIsp:it.isp,statusAsn:it.asn,timeZone:dt,uiLockedLocation:ie.iso,effectiveProtocol:ye,effectiveProtocolLabel:Q,tunnelMode:"Garuda LinkX Tunnel (Active)",realTunnelActive:!0}),Ge({isVpnActive:!0,ip:it.publicIp,country:ie.iso,countryName:ie.name,city:ie.city,isp:it.isp,asn:it.asn,localTime:Vt.verifiedLabel,timeZone:Vt.timeZone,tunnelProtocol:Q,dnsServers:["1.1.1.1","1.0.0.1"]}),ne("connect",`Tunnel Active • Assigned IP ${it.publicIp} (${ie.city}, ${ie.iso})`,ie.iso,dt)}finally{ee.current&&clearTimeout(ee.current),D(!1)}},[P,S,T,H,B,ne]),xe=Fe.useCallback(async()=>{ee.current&&clearTimeout(ee.current),D(!1),Ct(ve=>({...ve,state:"Disconnecting"})),ne("disconnect","Tearing down encrypted proxy tunnel...",st.country,st.timeZone),sn()&&await yg(),(B||bs())&&await ts({type:"DISCONNECT"},5e3),V(null),wt(0),Y(0),Rt(0),Ct(ve=>({...ve,state:"Disconnected",error:!1,statusReady:!0,statusIp:st.ip,statusCountryIso2:st.country,statusCountryName:st.countryName,statusCity:st.city,statusIsp:st.isp,statusAsn:st.asn,timeZone:st.timeZone,uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1})),Ge(null),ne("disconnect",`Disconnected • Restored direct ISP (${st.ip})`,st.country,st.timeZone)},[B,st,ne]),Se=Fe.useCallback(()=>{De.state==="Connected"||De.state==="Connecting"||De.state==="Reconnecting"?xe():Oe(P)},[De.state,P,Oe,xe]),ze=Fe.useCallback(()=>{if(De.state!=="Connected")return;const ve=De.statusCountryIso2||P;Oe(ve,!0)},[De.state,De.statusCountryIso2,P,Oe]),Je=Fe.useCallback(async()=>{Te(!0);try{const ve=De.state==="Connected",Ne=ve?String(De.statusCountryIso2||P||"US").toUpperCase():"";if(sn()){const Q=await lf(ve,Ne);if(Q!=null&&Q.ip){const he=ve?Ne:Q.country||De.statusCountryIso2||"BD",de=!ve||!Q.country||String(Q.country).toUpperCase()===he.toUpperCase(),be=Ci(he,de?Q.timeZone:En(he)),Me=de&&Q.countryName||De.statusCountryName,it=de&&Q.city||De.statusCity;Ct(dt=>({...dt,statusIp:Q.ip,statusCountryIso2:he,statusCountryName:Me||dt.statusCountryName,statusCity:it||dt.statusCity,statusIsp:Q.isp||dt.statusIsp,statusAsn:Q.asn||dt.statusAsn,timeZone:be.timeZone})),Ge({isVpnActive:ve,ip:Q.ip,country:he,countryName:Me,city:it,isp:Q.isp||De.statusIsp,asn:Q.asn||De.statusAsn,localTime:be.verifiedLabel,timeZone:be.timeZone,tunnelProtocol:ve?De.effectiveProtocolLabel:"Direct ISP",dnsServers:ve?["1.1.1.1","1.0.0.1"]:["8.8.8.8"],coordinates:de&&Number.isFinite(Q.latitude)&&Number.isFinite(Q.longitude)?{lat:Q.latitude,lng:Q.longitude}:void 0}),ne("info",`Verified active IP ${Q.ip} (${it||he}, ${Me||he}) • ${be.verifiedLabel}`,he,be.timeZone);return}}if(B||bs()){const Q=await ts({type:"VERIFY_IP"},9e3);if(Q!=null&&Q.ok&&(Q!=null&&Q.verified)){const he=Q.verified,de=he.country||De.statusCountryIso2||"BD",be=Ci(de,he.timeZone);Ct(Me=>({...Me,statusIp:he.ip||Me.statusIp,statusCountryIso2:de,statusCountryName:he.countryName||Me.statusCountryName,statusCity:he.city||Me.statusCity,statusIsp:he.isp||Me.statusIsp,statusAsn:he.asn||Me.statusAsn,timeZone:he.timeZone||be.timeZone})),Ge({isVpnActive:De.state==="Connected",ip:he.ip,country:de,countryName:he.countryName||De.statusCountryName,city:he.city||De.statusCity,isp:he.isp||De.statusIsp,asn:he.asn||De.statusAsn,localTime:he.localTime||be.verifiedLabel,timeZone:he.timeZone||be.timeZone,tunnelProtocol:De.state==="Connected"?De.effectiveProtocolLabel:"Direct ISP",dnsServers:De.state==="Connected"?["1.1.1.1","1.0.0.1"]:["8.8.8.8"],coordinates:he.coordinates}),ne("info",`Verified active IP ${he.ip} (${he.city||de}, ${he.countryName||de}) • ${he.localTime||be.verifiedLabel}`,de,he.timeZone||be.timeZone);return}}if(De.state==="Connected"&&(j!=null&&j.primaryProxy)){const Q=await fetch("/api/vpn/verify-ip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({proxyHost:j.primaryProxy.host,proxyPort:j.primaryProxy.port,proxyUsername:j.proxyUsername})});if(Q.ok){const he=await Q.json();if(he.ok&&he.verified){const de=he.verified,be=de.country||De.statusCountryIso2||"US",Me=Ci(be,de.timeZone);Ct(it=>({...it,statusIp:de.ip||it.statusIp,statusCity:de.city||it.statusCity,statusIsp:de.isp||it.statusIsp,statusAsn:de.asn||it.statusAsn,timeZone:Me.timeZone})),Ge({isVpnActive:!0,ip:de.ip,country:be,countryName:de.countryName||De.statusCountryName,city:de.city||De.statusCity,isp:de.isp||De.statusIsp,asn:de.asn||De.statusAsn,localTime:Me.verifiedLabel,timeZone:Me.timeZone,tunnelProtocol:De.effectiveProtocolLabel,dnsServers:["1.1.1.1","1.0.0.1"]}),ne("info",`Verified active IP ${de.ip} (${de.city||be}, ${de.countryName||be}) • ${Me.verifiedLabel}`,be,Me.timeZone);return}}}const W=De.state==="Connected"?De.statusCountryIso2||P:st.country||"BD",ie=De.state==="Connected"?De.timeZone:st.timeZone,ye=Ci(W,ie);Ge({isVpnActive:De.state==="Connected",ip:De.statusIp,country:W,countryName:De.statusCountryName,city:De.statusCity,isp:De.statusIsp,asn:De.statusAsn,localTime:ye.verifiedLabel,timeZone:ye.timeZone,tunnelProtocol:De.state==="Connected"?De.effectiveProtocolLabel:"Direct ISP",dnsServers:De.state==="Connected"?["1.1.1.1","1.0.0.1"]:["8.8.8.8"]}),ne("info",`Verified active IP ${De.statusIp} (${De.statusCity}, ${De.statusCountryName}) • ${ye.verifiedLabel}`,W,ye.timeZone)}finally{Te(!1)}},[B,De,j,P,st,ne]),ke=De.state==="Connected",Be=Fe.useMemo(()=>S.find(ve=>ve.iso.toLowerCase()===String(P).toLowerCase())||S[0],[S,P]),Qe=Fe.useMemo(()=>{const ve=ke?De.statusCountryIso2||Be.iso:st.country||"BD",Ne=ke?De.timeZone:st.timeZone;return Ci(ve,Ne)},[we,ke,De.statusCountryIso2,De.timeZone,Be.iso,st.country,st.timeZone]);return b.jsxs("div",{className:"u-app-fullscreen",children:[ae.forceUpdateRequired&&b.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"Mandatory Version Update Required",style:{position:"fixed",inset:0,zIndex:99999,background:"radial-gradient(circle at 50% 25%, rgba(30, 58, 138, 0.96), rgba(3, 7, 18, 0.99))",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center"},children:b.jsxs("div",{style:{width:"100%",maxWidth:420,background:"rgba(15, 23, 42, 0.94)",border:"1px solid rgba(239, 68, 68, 0.48)",borderRadius:24,padding:"30px 24px 26px 24px",boxShadow:"0 24px 60px rgba(0, 0, 0, 0.75)",display:"flex",flexDirection:"column",alignItems:"center"},children:[b.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:66,height:66,marginBottom:14,filter:"drop-shadow(0 0 18px rgba(59, 130, 246, 0.65))"}}),b.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:999,background:"rgba(239, 68, 68, 0.18)",border:"1px solid rgba(239, 68, 68, 0.45)",color:"#F87171",fontSize:10.5,fontWeight:800,letterSpacing:"0.7px",textTransform:"uppercase",marginBottom:12},children:"MANDATORY VERSION UPDATE"}),b.jsx("h2",{style:{fontSize:20,fontWeight:800,color:"#F8FAFC",marginBottom:10,lineHeight:1.25},children:ae.forceUpdateTitle||"Mandatory Update Required"}),b.jsx("p",{style:{fontSize:13.5,lineHeight:1.65,color:"#CBD5E1",marginBottom:18},children:ae.forceUpdateMessage}),b.jsxs("div",{style:{width:"100%",fontSize:12,fontWeight:700,color:"#38BDF8",background:"rgba(56, 189, 248, 0.12)",border:"1px solid rgba(56, 189, 248, 0.32)",borderRadius:12,padding:"10px 14px",marginBottom:18},children:["Installed: ",wo," • Required: V",ae.latestAppVersion||Er]}),b.jsxs("button",{onClick:()=>{var ve;sn()&&((ve=window.GarudaAndroidBridge)!=null&&ve.downloadUpdateApk)?window.GarudaAndroidBridge.downloadUpdateApk(kl,ae.latestAppVersion||Er):window.open(kl,"_blank","noopener,noreferrer")},className:"u-btn u-btn-primary",style:{width:"100%",height:46,fontSize:13.5,fontWeight:800,borderRadius:12,justifyContent:"center",marginBottom:10},children:["Update to Latest Version (V",ae.latestAppVersion||Er,")"]}),b.jsx("button",{onClick:Re,className:"u-btn u-btn-secondary",style:{width:"100%",height:36,fontSize:12,fontWeight:700,borderRadius:10,justifyContent:"center"},children:et?"Checking...":"Verify Update Status"})]})}),_t&&ae.updateAvailable&&!ae.forceUpdateRequired&&b.jsx("div",{role:"status","aria-live":"polite",onClick:()=>{Xt(!1),h("settings")},style:{position:"fixed",inset:0,zIndex:99990,backgroundColor:"rgba(2, 6, 23, 0.52)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,cursor:"pointer"},children:b.jsxs("div",{style:{width:"100%",maxWidth:360,background:v==="light"?"linear-gradient(145deg, #FFFFFF 0%, #F1F5F9 100%)":"linear-gradient(145deg, rgba(15, 23, 42, 0.97) 0%, rgba(10, 15, 29, 0.98) 100%)",border:"1px solid rgba(56, 189, 248, 0.55)",borderRadius:20,padding:"22px 20px",boxShadow:v==="light"?"0 20px 50px rgba(15, 23, 42, 0.22)":"0 22px 55px rgba(0, 0, 0, 0.78), 0 0 28px rgba(56, 189, 248, 0.22)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[b.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:52,height:52,marginBottom:10,filter:"drop-shadow(0 0 14px rgba(56, 189, 248, 0.6))"}}),b.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"3px 11px",borderRadius:999,background:"rgba(56, 189, 248, 0.16)",border:"1px solid rgba(56, 189, 248, 0.42)",color:v==="light"?"#0284C7":"#38BDF8",fontSize:10,fontWeight:800,letterSpacing:"0.6px",textTransform:"uppercase",marginBottom:8},children:"NEW UPDATE AVAILABLE"}),b.jsxs("div",{style:{fontSize:18,fontWeight:800,color:v==="light"?"#0F172A":"#F8FAFC",marginBottom:6,lineHeight:1.25},children:["Garuda Infinity V",ae.latestAppVersion]}),b.jsxs("p",{style:{fontSize:12.5,lineHeight:1.55,color:v==="light"?"#334155":"#CBD5E1",margin:"0 0 12px 0"},children:["A new update (",b.jsxs("strong",{children:["V",ae.latestAppVersion]}),") is ready to install. Tap or visit Settings to update from ",wo,"."]}),b.jsxs("div",{style:{width:"100%",fontSize:11.5,fontWeight:700,color:"#10B981",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.34)",borderRadius:10,padding:"7px 12px"},children:["Current: ",wo," → New Version: V",ae.latestAppVersion]})]})}),pe&&t&&b.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"Quit Application Confirmation",onClick:()=>r(!1),style:{position:"fixed",inset:0,zIndex:99995,backgroundColor:"rgba(2, 6, 23, 0.68)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:22},children:b.jsxs("div",{onClick:ve=>ve.stopPropagation(),style:{width:"100%",maxWidth:340,background:v==="light"?"linear-gradient(145deg, #FFFFFF 0%, #F1F5F9 100%)":"linear-gradient(145deg, rgba(15, 23, 42, 0.98) 0%, rgba(9, 13, 24, 0.99) 100%)",border:v==="light"?"1px solid rgba(59, 130, 246, 0.35)":"1px solid rgba(56, 189, 248, 0.48)",borderRadius:20,padding:"22px 20px 18px 20px",boxShadow:v==="light"?"0 20px 50px rgba(15, 23, 42, 0.25)":"0 24px 60px rgba(0, 0, 0, 0.82), 0 0 26px rgba(56, 189, 248, 0.18)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[b.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:48,height:48,marginBottom:10,filter:"drop-shadow(0 0 12px rgba(56, 189, 248, 0.55))"}}),b.jsx("div",{style:{fontSize:17,fontWeight:800,color:v==="light"?"#0F172A":"#F8FAFC",marginBottom:6,lineHeight:1.25},children:"Quit Application?"}),b.jsx("p",{style:{fontSize:13,lineHeight:1.55,color:v==="light"?"#334155":"#CBD5E1",margin:"0 0 18px 0"},children:"Are you sure you want to quit the application?"}),b.jsxs("div",{style:{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx("button",{type:"button",onClick:()=>r(!1),className:"u-btn u-btn-secondary",style:{height:40,fontSize:13,fontWeight:700,borderRadius:11,justifyContent:"center",border:v==="light"?"1px solid rgba(100, 116, 139, 0.35)":"1px solid rgba(148, 163, 184, 0.3)",backgroundColor:v==="light"?"rgba(241, 245, 249, 0.9)":"rgba(30, 41, 59, 0.85)",color:v==="light"?"#0F172A":"#E2E8F0",cursor:"pointer"},children:"Cancel"}),b.jsx("button",{type:"button",onClick:p,className:"u-btn u-btn-primary",style:{height:40,fontSize:13,fontWeight:800,borderRadius:11,justifyContent:"center",background:"linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",border:"1px solid rgba(248, 113, 113, 0.5)",color:"#FFFFFF",boxShadow:"0 6px 18px rgba(239, 68, 68, 0.35)",cursor:"pointer"},children:"Quit"})]})]})}),b.jsxs("nav",{"aria-label":"Primary Navigation",className:"u-nav-rail",children:[b.jsxs("button",{onClick:()=>h("vpn"),className:"u-nav-brand-btn",title:"Garuda Infinity 3D Dashboard","aria-label":"Garuda Infinity Home",children:[b.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",className:"u-nav-brand-logo",style:{filter:ke?"drop-shadow(0 0 10px rgba(16, 185, 129, 0.55))":"drop-shadow(0 0 8px rgba(59, 130, 246, 0.45))"}}),b.jsx("span",{className:"u-nav-brand-title",children:"Garuda Infinity"})]}),b.jsxs("div",{className:"u-nav-center",children:[b.jsxs("button",{onClick:()=>h("vpn"),"aria-current":s==="vpn"?"page":void 0,className:"u-nav-tab-btn",style:{border:s==="vpn"?"1px solid rgba(59, 130, 246, 0.45)":"1px solid var(--uv-border)",backgroundColor:s==="vpn"?"rgba(59, 130, 246, 0.18)":"var(--uv-surface-card)",color:s==="vpn"?"var(--uv-text-heading)":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"background-color 150ms ease, color 150ms ease"},children:[b.jsx(Fy,{size:17,color:ke?"#10B981":s==="vpn"?"#60A5FA":"currentColor","aria-hidden":"true"}),b.jsx("span",{style:{fontSize:11,fontWeight:700},children:"VPN"}),b.jsx("span",{"aria-hidden":"true",className:"u-nav-status-dot",style:{width:6,height:6,borderRadius:"50%",backgroundColor:ke?"#10B981":"#F43F5E"}})]}),b.jsxs("button",{onClick:()=>h("ipconfig"),"aria-current":s==="ipconfig"?"page":void 0,className:"u-nav-tab-btn",title:"Live IP & Activity Logs",style:{border:s==="ipconfig"?"1px solid rgba(59, 130, 246, 0.45)":"1px solid var(--uv-border)",backgroundColor:s==="ipconfig"?"rgba(59, 130, 246, 0.18)":"var(--uv-surface-card)",color:s==="ipconfig"?"var(--uv-text-heading)":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"background-color 150ms ease, color 150ms ease"},children:[b.jsx(Ay,{size:17,color:s==="ipconfig"?"#60A5FA":"currentColor","aria-hidden":"true"}),b.jsx("span",{style:{fontSize:10.5,fontWeight:700,whiteSpace:"nowrap"},children:"IP & Log"})]}),b.jsx("button",{onClick:()=>h("settings"),"aria-current":s==="settings"?"page":void 0,title:"Settings","aria-label":"Settings",className:"u-nav-icon-btn",style:{border:s==="settings"?"1px solid rgba(59, 130, 246, 0.5)":"1px solid var(--uv-border)",backgroundColor:s==="settings"?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:s==="settings"?"#60A5FA":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background-color 150ms ease, color 150ms ease, border-color 150ms ease"},children:b.jsx(Dy,{size:17,color:s==="settings"?"#60A5FA":"currentColor","aria-hidden":"true"})})]}),b.jsxs("div",{className:"u-nav-bottom",children:[b.jsx("button",{onClick:A,className:"u-nav-icon-btn u-nav-orbit-btn",title:`3D View: ${g.toUpperCase()} (Click to cycle)`,"aria-label":`Cycle 3D camera mode, currently ${g}`,style:{border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:b.jsx(Ly,{size:16,color:"#38BDF8","aria-hidden":"true"})}),b.jsx("button",{onClick:E,className:"u-nav-icon-btn",title:v==="dark"?"Switch to Light Mode":"Switch to Dark Cyber Mode","aria-label":v==="dark"?"Switch to Light Mode":"Switch to Dark Mode",style:{border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:v==="dark"?b.jsx(z0,{size:16,color:"#FBBF24","aria-hidden":"true"}):b.jsx(B0,{size:16,color:"#3B82F6","aria-hidden":"true"})})]})]}),s==="vpn"?b.jsx(ob,{vpnStatus:De,realIpInfo:st,locations:dg,allLocations:S,showExtendedCatalog:!1,onToggleExtendedCatalog:()=>{},selectedLocationIso:P,onSelectLocation:F,onRequestConnection:Oe,onConnectButtonClick:Se,onRotateIp:ze,isStreamingMode:I,onSetStreamingMode:U,connectionElapsedFormatted:gb(an),lookingForBestServer:te,onRefreshLocations:()=>{},serviceBridgeConnected:!!(B||pe||!0),rxBytes:$t,txBytes:Zt,onVerifyIp:Je,ipVerificationResult:Ke,isVerifyingIp:le,activeCountryTimeInfo:Qe,cameraMode:g,onChangeCameraMode:_,theme:v}):s==="ipconfig"?b.jsx(pb,{vpnStatus:De,selectedLocationObj:Be,realIpInfo:st,onVerifyIp:Je,ipVerificationResult:Ke,isVerifyingIp:le,activeCountryTimeInfo:Qe,activityLogs:k,onClearLogs:()=>M([{id:Date.now(),time:Qe.time24,type:"info",msg:"Activity logs cleared."}]),theme:v}):b.jsx(cb,{vpnProtocol:T,onChangeProtocol:ve=>{L(ve),ts({type:"UPDATE_SETTINGS",protocol:ve},2e3)},isStreamingMode:I,onToggleStreamingMode:()=>U(ve=>!ve),appAutoStart:w,onToggleAppAutoStart:()=>N(ve=>!ve),autoCutoffOnTabClose:O,onToggleAutoCutoff:()=>G(ve=>!ve),dynamicIpRotation:H,onToggleDynamicIp:()=>{J(ve=>{const Ne=!ve;try{localStorage.setItem("garuda_infinity_dynamic_ip",String(Ne))}catch{}return ts({type:"UPDATE_SETTINGS",dynamicIpRotation:Ne},2e3),Ne})},theme:v,onToggleTheme:E,cameraMode:g,onChangeCameraMode:_,serviceBridgeConnected:!!(B||pe),isAndroidApp:pe,updateInfo:ae,isCheckingUpdate:et,onCheckForUpdate:Re})]})}Sy.createRoot(document.getElementById("root")).render(b.jsx(O0.StrictMode,{children:b.jsx(yb,{})}));"serviceWorker"in navigator&&(typeof window<"u"&&(!!window.GarudaAndroidBridge||window.location.hostname==="appassets.garudainfinity.local"||window.location.protocol==="chrome-extension:"||window.location.protocol==="file:")?navigator.serviceWorker.getRegistrations().then(e=>{for(const t of e)t.unregister().catch(()=>{})}).catch(()=>{}):window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})}));
