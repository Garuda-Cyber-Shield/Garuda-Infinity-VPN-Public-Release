(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function F0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hd={exports:{}},fo={},pd={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function fy(){if(Zm)return Rt;Zm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(D,le,Pe){this.props=D,this.context=le,this.refs=A,this.updater=Pe||x}S.prototype.isReactComponent={},S.prototype.setState=function(D,le){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,le,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(D,le,Pe){this.props=D,this.context=le,this.refs=A,this.updater=Pe||x}var k=N.prototype=new y;k.constructor=N,M(k,S.prototype),k.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function w(D,le,Pe){var Ze,$e={},we=null,re=null;if(le!=null)for(Ze in le.ref!==void 0&&(re=le.ref),le.key!==void 0&&(we=""+le.key),le)I.call(le,Ze)&&!U.hasOwnProperty(Ze)&&($e[Ze]=le[Ze]);var ne=arguments.length-2;if(ne===1)$e.children=Pe;else if(1<ne){for(var Fe=Array(ne),Me=0;Me<ne;Me++)Fe[Me]=arguments[Me+2];$e.children=Fe}if(D&&D.defaultProps)for(Ze in ne=D.defaultProps,ne)$e[Ze]===void 0&&($e[Ze]=ne[Ze]);return{$$typeof:s,type:D,key:we,ref:re,props:$e,_owner:P.current}}function L(D,le){return{$$typeof:s,type:D.type,key:le,ref:D.ref,props:D.props,_owner:D._owner}}function O(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function G(D){var le={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Pe){return le[Pe]})}var W=/\/+/g;function K(D,le){return typeof D=="object"&&D!==null&&D.key!=null?G(""+D.key):le.toString(36)}function z(D,le,Pe,Ze,$e){var we=typeof D;(we==="undefined"||we==="boolean")&&(D=null);var re=!1;if(D===null)re=!0;else switch(we){case"string":case"number":re=!0;break;case"object":switch(D.$$typeof){case s:case e:re=!0}}if(re)return re=D,$e=$e(re),D=Ze===""?"."+K(re,0):Ze,b($e)?(Pe="",D!=null&&(Pe=D.replace(W,"$&/")+"/"),z($e,le,Pe,"",function(Me){return Me})):$e!=null&&(O($e)&&($e=L($e,Pe+(!$e.key||re&&re.key===$e.key?"":(""+$e.key).replace(W,"$&/")+"/")+D)),le.push($e)),1;if(re=0,Ze=Ze===""?".":Ze+":",b(D))for(var ne=0;ne<D.length;ne++){we=D[ne];var Fe=Ze+K(we,ne);re+=z(we,le,Pe,Fe,$e)}else if(Fe=g(D),typeof Fe=="function")for(D=Fe.call(D),ne=0;!(we=D.next()).done;)we=we.value,Fe=Ze+K(we,ne++),re+=z(we,le,Pe,Fe,$e);else if(we==="object")throw le=String(D),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return re}function Z(D,le,Pe){if(D==null)return D;var Ze=[],$e=0;return z(D,Ze,"","",function(we){return le.call(Pe,we,$e++)}),Ze}function ge(D){if(D._status===-1){var le=D._result;le=le(),le.then(function(Pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=Pe)},function(Pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=Pe)}),D._status===-1&&(D._status=0,D._result=le)}if(D._status===1)return D._result.default;throw D._result}var J={current:null},ee={transition:null},H={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:ee,ReactCurrentOwner:P};function j(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:Z,forEach:function(D,le,Pe){Z(D,function(){le.apply(this,arguments)},Pe)},count:function(D){var le=0;return Z(D,function(){le++}),le},toArray:function(D){return Z(D,function(le){return le})||[]},only:function(D){if(!O(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Rt.Component=S,Rt.Fragment=t,Rt.Profiler=a,Rt.PureComponent=N,Rt.StrictMode=r,Rt.Suspense=h,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Rt.act=j,Rt.cloneElement=function(D,le,Pe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ze=M({},D.props),$e=D.key,we=D.ref,re=D._owner;if(le!=null){if(le.ref!==void 0&&(we=le.ref,re=P.current),le.key!==void 0&&($e=""+le.key),D.type&&D.type.defaultProps)var ne=D.type.defaultProps;for(Fe in le)I.call(le,Fe)&&!U.hasOwnProperty(Fe)&&(Ze[Fe]=le[Fe]===void 0&&ne!==void 0?ne[Fe]:le[Fe])}var Fe=arguments.length-2;if(Fe===1)Ze.children=Pe;else if(1<Fe){ne=Array(Fe);for(var Me=0;Me<Fe;Me++)ne[Me]=arguments[Me+2];Ze.children=ne}return{$$typeof:s,type:D.type,key:$e,ref:we,props:Ze,_owner:re}},Rt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Rt.createElement=w,Rt.createFactory=function(D){var le=w.bind(null,D);return le.type=D,le},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(D){return{$$typeof:d,render:D}},Rt.isValidElement=O,Rt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:ge}},Rt.memo=function(D,le){return{$$typeof:p,type:D,compare:le===void 0?null:le}},Rt.startTransition=function(D){var le=ee.transition;ee.transition={};try{D()}finally{ee.transition=le}},Rt.unstable_act=j,Rt.useCallback=function(D,le){return J.current.useCallback(D,le)},Rt.useContext=function(D){return J.current.useContext(D)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(D){return J.current.useDeferredValue(D)},Rt.useEffect=function(D,le){return J.current.useEffect(D,le)},Rt.useId=function(){return J.current.useId()},Rt.useImperativeHandle=function(D,le,Pe){return J.current.useImperativeHandle(D,le,Pe)},Rt.useInsertionEffect=function(D,le){return J.current.useInsertionEffect(D,le)},Rt.useLayoutEffect=function(D,le){return J.current.useLayoutEffect(D,le)},Rt.useMemo=function(D,le){return J.current.useMemo(D,le)},Rt.useReducer=function(D,le,Pe){return J.current.useReducer(D,le,Pe)},Rt.useRef=function(D){return J.current.useRef(D)},Rt.useState=function(D){return J.current.useState(D)},Rt.useSyncExternalStore=function(D,le,Pe){return J.current.useSyncExternalStore(D,le,Pe)},Rt.useTransition=function(){return J.current.useTransition()},Rt.version="18.3.1",Rt}var Jm;function nh(){return Jm||(Jm=1,pd.exports=fy()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function hy(){if(Qm)return fo;Qm=1;var s=nh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var v,_={},g=null,x=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(x=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:d,key:g,ref:x,props:_,_owner:a.current}}return fo.Fragment=t,fo.jsx=u,fo.jsxs=u,fo}var eg;function py(){return eg||(eg=1,hd.exports=hy()),hd.exports}var C=py(),Ye=nh();const O0=F0(Ye);var Ol={},md={exports:{}},ni={},gd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function my(){return tg||(tg=1,(function(s){function e(ee,H){var j=ee.length;ee.push(H);e:for(;0<j;){var D=j-1>>>1,le=ee[D];if(0<a(le,H))ee[D]=H,ee[j]=le,j=D;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var H=ee[0],j=ee.pop();if(j!==H){ee[0]=j;e:for(var D=0,le=ee.length,Pe=le>>>1;D<Pe;){var Ze=2*(D+1)-1,$e=ee[Ze],we=Ze+1,re=ee[we];if(0>a($e,j))we<le&&0>a(re,$e)?(ee[D]=re,ee[we]=j,D=we):(ee[D]=$e,ee[Ze]=j,D=Ze);else if(we<le&&0>a(re,j))ee[D]=re,ee[we]=j,D=we;else break e}}return H}function a(ee,H){var j=ee.sortIndex-H.sortIndex;return j!==0?j:ee.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],v=1,_=null,g=3,x=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(ee){for(var H=t(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=ee)r(p),H.sortIndex=H.expirationTime,e(h,H);else break;H=t(p)}}function b(ee){if(A=!1,k(ee),!M)if(t(h)!==null)M=!0,ge(I);else{var H=t(p);H!==null&&J(b,H.startTime-ee)}}function I(ee,H){M=!1,A&&(A=!1,y(w),w=-1),x=!0;var j=g;try{for(k(H),_=t(h);_!==null&&(!(_.expirationTime>H)||ee&&!G());){var D=_.callback;if(typeof D=="function"){_.callback=null,g=_.priorityLevel;var le=D(_.expirationTime<=H);H=s.unstable_now(),typeof le=="function"?_.callback=le:_===t(h)&&r(h),k(H)}else r(h);_=t(h)}if(_!==null)var Pe=!0;else{var Ze=t(p);Ze!==null&&J(b,Ze.startTime-H),Pe=!1}return Pe}finally{_=null,g=j,x=!1}}var P=!1,U=null,w=-1,L=5,O=-1;function G(){return!(s.unstable_now()-O<L)}function W(){if(U!==null){var ee=s.unstable_now();O=ee;var H=!0;try{H=U(!0,ee)}finally{H?K():(P=!1,U=null)}}else P=!1}var K;if(typeof N=="function")K=function(){N(W)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Z=z.port2;z.port1.onmessage=W,K=function(){Z.postMessage(null)}}else K=function(){S(W,0)};function ge(ee){U=ee,P||(P=!0,K())}function J(ee,H){w=S(function(){ee(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,ge(I))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(ee){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var j=g;g=H;try{return ee()}finally{g=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,H){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var j=g;g=ee;try{return H()}finally{g=j}},s.unstable_scheduleCallback=function(ee,H,j){var D=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,ee){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=j+le,ee={id:v++,callback:H,priorityLevel:ee,startTime:j,expirationTime:le,sortIndex:-1},j>D?(ee.sortIndex=j,e(p,ee),t(h)===null&&ee===t(p)&&(A?(y(w),w=-1):A=!0,J(b,j-D))):(ee.sortIndex=le,e(h,ee),M||x||(M=!0,ge(I))),ee},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(ee){var H=g;return function(){var j=g;g=H;try{return ee.apply(this,arguments)}finally{g=j}}}})(vd)),vd}var ng;function gy(){return ng||(ng=1,gd.exports=my()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function vy(){if(ig)return ni;ig=1;var s=nh(),e=gy();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function x(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||x(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,o,c,f,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,N);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,N);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,N);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,o,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,f,c)&&(o=null),c||f===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),ee=Symbol.iterator;function H(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,D;function le(n){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Pe=!1;function Ze(n,i){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var c=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){c=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){c=ve}n()}}catch(ve){if(ve&&c&&typeof ve.stack=="string"){for(var f=ve.stack.split(`
`),m=c.stack.split(`
`),T=f.length-1,B=m.length-1;1<=T&&0<=B&&f[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(f[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||f[T]!==m[B]){var X=`
`+f[T].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=T&&0<=B);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?le(n):""}function $e(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ze(n.type,!1),n;case 11:return n=Ze(n.type.render,!1),n;case 1:return n=Ze(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case P:return"Portal";case L:return"Profiler";case w:return"StrictMode";case K:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ke(n){n._valueTracker||(n._valueTracker=Me(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var o=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Mt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ne(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ut(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function mt(n,i){Ut(n,i);var o=ne(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?$t(n,i.type,o):i.hasOwnProperty("defaultValue")&&$t(n,i.type,ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Gt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function $t(n,i,o){(i!=="number"||Dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Vt=Array.isArray;function st(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ne(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Nt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Vt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ne(o)}}function kt(n,i){var o=ne(i.value),c=ne(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Pt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?F(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ie,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ie=ie||document.createElement("div"),ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function _e(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(n){pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Le[i]=Le[n]})});function oe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Le.hasOwnProperty(n)&&Le[n]?(""+i).trim():i+"px"}function ye(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=oe(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var ae=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(n,i){if(i){if(ae[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function te(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fe=null;function Ae(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,be=null,V=null;function Ne(n){if(n=Ka(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Jo(i),Ce(n.stateNode,n.type,i))}}function xe(n){be?V?V.push(n):V=[n]:be=n}function Re(){if(be){var n=be,i=V;if(V=be=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function De(n,i){return n(i)}function Se(){}var Ge=!1;function Ve(n,i,o){if(Ge)return n(i,o);Ge=!0;try{return De(n,i,o)}finally{Ge=!1,(be!==null||V!==null)&&(Se(),Re())}}function vt(n,i){var o=n.stateNode;if(o===null)return null;var c=Jo(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var pt=!1;if(d)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){pt=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{pt=!1}function pn(n,i,o,c,f,m,T,B,X){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(o,ve)}catch(Ue){this.onError(Ue)}}var pi=!1,Hi=null,Wi=!1,Ai=null,ar={onError:function(n){pi=!0,Hi=n}};function Xi(n,i,o,c,f,m,T,B,X){pi=!1,Hi=null,pn.apply(ar,arguments)}function Fs(n,i,o,c,f,m,T,B,X){if(Xi.apply(this,arguments),pi){if(pi){var ve=Hi;pi=!1,Hi=null}else throw Error(t(198));Wi||(Wi=!0,Ai=ve)}}function En(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function or(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Cr(n){if(En(n)!==n)throw Error(t(188))}function Os(n){var i=n.alternate;if(!i){if(i=En(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Cr(f),n;if(m===c)return Cr(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var T=!1,B=f.child;B;){if(B===o){T=!0,o=f,c=m;break}if(B===c){T=!0,c=f,o=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===o){T=!0,o=m,c=f;break}if(B===c){T=!0,c=m,o=f;break}B=B.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ji(n){return n=Os(n),n!==null?qn(n):null}function qn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qn(n);if(i!==null)return i;n=n.sibling}return null}var Ti=e.unstable_scheduleCallback,Vn=e.unstable_cancelCallback,ks=e.unstable_shouldYield,Bs=e.unstable_requestPaint,qt=e.unstable_now,zs=e.unstable_getCurrentPriorityLevel,Rr=e.unstable_ImmediatePriority,Pr=e.unstable_UserBlockingPriority,R=e.unstable_NormalPriority,Y=e.unstable_LowPriority,me=e.unstable_IdlePriority,ce=null,se=null;function We(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:it,Xe=Math.log,et=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Xe(n)/et|0)|0}var Ee=64,je=4194304;function Te(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var B=T&~f;B!==0?c=Te(B):(m&=T,m!==0&&(c=Te(m)))}else T=o&~f,T!==0?c=Te(T):m!==0&&(c=Te(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-He(i),f=1<<o,c|=n[o],i&=~f;return c}function Et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-He(m),B=1<<T,X=f[T];X===-1?((B&o)===0||(B&c)!==0)&&(f[T]=Et(B,i)):X<=i&&(n.expiredLanes|=B),m&=~B}}function ct(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function nn(){var n=Ee;return Ee<<=1,(Ee&4194240)===0&&(Ee=64),n}function qe(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Yt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-He(i),n[i]=o}function At(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-He(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function mn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-He(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var ut=0;function dn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nn,bt,Ht,si,It,Kn=!1,Hn=[],bi=null,Ir=null,Lr=null,Da=new Map,Ua=new Map,Nr=[],Dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(n,i){switch(n){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(i.pointerId)}}function Fa(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ka(i),i!==null&&bt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Uv(n,i,o,c,f){switch(i){case"focusin":return bi=Fa(bi,n,i,o,c,f),!0;case"dragenter":return Ir=Fa(Ir,n,i,o,c,f),!0;case"mouseover":return Lr=Fa(Lr,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return Da.set(m,Fa(Da.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Ua.set(m,Fa(Ua.get(m)||null,n,i,o,c,f)),!0}return!1}function Uh(n){var i=os(n.target);if(i!==null){var o=En(i);if(o!==null){if(i=o.tag,i===13){if(i=or(o),i!==null){n.blockedOn=i,It(n.priority,function(){Ht(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ko(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=zc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);fe=c,o.target.dispatchEvent(c),fe=null}else return i=Ka(o),i!==null&&bt(i),n.blockedOn=o,!1;i.shift()}return!0}function Fh(n,i,o){ko(n)&&o.delete(i)}function Fv(){Kn=!1,bi!==null&&ko(bi)&&(bi=null),Ir!==null&&ko(Ir)&&(Ir=null),Lr!==null&&ko(Lr)&&(Lr=null),Da.forEach(Fh),Ua.forEach(Fh)}function Oa(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fv)))}function ka(n){function i(f){return Oa(f,n)}if(0<Hn.length){Oa(Hn[0],n);for(var o=1;o<Hn.length;o++){var c=Hn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(bi!==null&&Oa(bi,n),Ir!==null&&Oa(Ir,n),Lr!==null&&Oa(Lr,n),Da.forEach(i),Ua.forEach(i),o=0;o<Nr.length;o++)c=Nr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Nr.length&&(o=Nr[0],o.blockedOn===null);)Uh(o),o.blockedOn===null&&Nr.shift()}var Gs=b.ReactCurrentBatchConfig,Bo=!0;function Ov(n,i,o,c){var f=ut,m=Gs.transition;Gs.transition=null;try{ut=1,Bc(n,i,o,c)}finally{ut=f,Gs.transition=m}}function kv(n,i,o,c){var f=ut,m=Gs.transition;Gs.transition=null;try{ut=4,Bc(n,i,o,c)}finally{ut=f,Gs.transition=m}}function Bc(n,i,o,c){if(Bo){var f=zc(n,i,o,c);if(f===null)iu(n,i,c,zo,o),Dh(n,c);else if(Uv(f,n,i,o,c))c.stopPropagation();else if(Dh(n,c),i&4&&-1<Dv.indexOf(n)){for(;f!==null;){var m=Ka(f);if(m!==null&&Nn(m),m=zc(n,i,o,c),m===null&&iu(n,i,c,zo,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else iu(n,i,c,null,o)}}var zo=null;function zc(n,i,o,c){if(zo=null,n=Ae(c),n=os(n),n!==null)if(i=En(n),i===null)n=null;else if(o=i.tag,o===13){if(n=or(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return zo=n,null}function Oh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zs()){case Rr:return 1;case Pr:return 4;case R:case Y:return 16;case me:return 536870912;default:return 16}default:return 16}}var Dr=null,Gc=null,Go=null;function kh(){if(Go)return Go;var n,i=Gc,o=i.length,c,f="value"in Dr?Dr.value:Dr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===f[m-c];c++);return Go=f.slice(n,1<c?1-c:void 0)}function Vo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Bh(){return!1}function ai(n){function i(o,c,f,m,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ho:Bh,this.isPropagationStopped=Bh,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),i}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=ai(Vs),Ba=j({},Vs,{view:0,detail:0}),Bv=ai(Ba),Hc,Wc,za,Wo=j({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==za&&(za&&n.type==="mousemove"?(Hc=n.screenX-za.screenX,Wc=n.screenY-za.screenY):Wc=Hc=0,za=n),Hc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),zh=ai(Wo),zv=j({},Wo,{dataTransfer:0}),Gv=ai(zv),Vv=j({},Ba,{relatedTarget:0}),Xc=ai(Vv),Hv=j({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=ai(Hv),Xv=j({},Vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jv=ai(Xv),Yv=j({},Vs,{data:0}),Gh=ai(Yv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kv[n])?!!i[n]:!1}function jc(){return Zv}var Jv=j({},Ba,{key:function(n){if(n.key){var i=$v[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?Vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qv=ai(Jv),e_=j({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=ai(e_),t_=j({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),n_=ai(t_),i_=j({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),r_=ai(i_),s_=j({},Wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),a_=ai(s_),o_=[9,13,27,32],Yc=d&&"CompositionEvent"in window,Ga=null;d&&"documentMode"in document&&(Ga=document.documentMode);var l_=d&&"TextEvent"in window&&!Ga,Hh=d&&(!Yc||Ga&&8<Ga&&11>=Ga),Wh=" ",Xh=!1;function jh(n,i){switch(n){case"keyup":return o_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function c_(n,i){switch(n){case"compositionend":return Yh(i);case"keypress":return i.which!==32?null:(Xh=!0,Wh);case"textInput":return n=i.data,n===Wh&&Xh?null:n;default:return null}}function u_(n,i){if(Hs)return n==="compositionend"||!Yc&&jh(n,i)?(n=kh(),Go=Gc=Dr=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hh&&i.locale!=="ko"?null:i.data;default:return null}}var d_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!d_[n.type]:i==="textarea"}function qh(n,i,o,c){xe(c),i=qo(i,"onChange"),0<i.length&&(o=new Vc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Va=null,Ha=null;function f_(n){hp(n,0)}function Xo(n){var i=$s(n);if(_t(i))return n}function h_(n,i){if(n==="change")return i}var Kh=!1;if(d){var $c;if(d){var qc="oninput"in document;if(!qc){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),qc=typeof Zh.oninput=="function"}$c=qc}else $c=!1;Kh=$c&&(!document.documentMode||9<document.documentMode)}function Jh(){Va&&(Va.detachEvent("onpropertychange",Qh),Ha=Va=null)}function Qh(n){if(n.propertyName==="value"&&Xo(Ha)){var i=[];qh(i,Ha,n,Ae(n)),Ve(f_,i)}}function p_(n,i,o){n==="focusin"?(Jh(),Va=i,Ha=o,Va.attachEvent("onpropertychange",Qh)):n==="focusout"&&Jh()}function m_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xo(Ha)}function g_(n,i){if(n==="click")return Xo(i)}function v_(n,i){if(n==="input"||n==="change")return Xo(i)}function __(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ci=typeof Object.is=="function"?Object.is:__;function Wa(n,i){if(Ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!Ci(n[f],i[f]))return!1}return!0}function ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tp(n,i){var o=ep(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ep(o)}}function np(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?np(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ip(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Dt(n.document)}return i}function Kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function y_(n){var i=ip(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&np(o.ownerDocument.documentElement,o)){if(c!==null&&Kc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=tp(o,m);var T=tp(o,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var x_=d&&"documentMode"in document&&11>=document.documentMode,Ws=null,Zc=null,Xa=null,Jc=!1;function rp(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Jc||Ws==null||Ws!==Dt(c)||(c=Ws,"selectionStart"in c&&Kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xa&&Wa(Xa,c)||(Xa=c,c=qo(Zc,"onSelect"),0<c.length&&(i=new Vc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ws)))}function jo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Xs={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Qc={},sp={};d&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Yo(n){if(Qc[n])return Qc[n];if(!Xs[n])return n;var i=Xs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in sp)return Qc[n]=i[o];return n}var ap=Yo("animationend"),op=Yo("animationiteration"),lp=Yo("animationstart"),cp=Yo("transitionend"),up=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,i){up.set(n,i),l(i,[n])}for(var eu=0;eu<dp.length;eu++){var tu=dp[eu],S_=tu.toLowerCase(),M_=tu[0].toUpperCase()+tu.slice(1);Ur(S_,"on"+M_)}Ur(ap,"onAnimationEnd"),Ur(op,"onAnimationIteration"),Ur(lp,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(cp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function fp(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Fs(c,i,void 0,n),n.currentTarget=null}function hp(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],X=B.instance,ve=B.currentTarget;if(B=B.listener,X!==m&&f.isPropagationStopped())break e;fp(f,B,ve),m=X}else for(T=0;T<c.length;T++){if(B=c[T],X=B.instance,ve=B.currentTarget,B=B.listener,X!==m&&f.isPropagationStopped())break e;fp(f,B,ve),m=X}}}if(Wi)throw n=Ai,Wi=!1,Ai=null,n}function Jt(n,i){var o=i[cu];o===void 0&&(o=i[cu]=new Set);var c=n+"__bubble";o.has(c)||(pp(i,n,2,!1),o.add(c))}function nu(n,i,o){var c=0;i&&(c|=4),pp(o,n,c,i)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Ya(n){if(!n[$o]){n[$o]=!0,r.forEach(function(o){o!=="selectionchange"&&(E_.has(o)||nu(o,!1,n),nu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[$o]||(i[$o]=!0,nu("selectionchange",!1,i))}}function pp(n,i,o,c){switch(Oh(i)){case 1:var f=Ov;break;case 4:f=kv;break;default:f=Bc}o=f.bind(null,i,o,n),f=void 0,!pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function iu(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;T=T.return}for(;B!==null;){if(T=os(B),T===null)return;if(X=T.tag,X===5||X===6){c=m=T;continue e}B=B.parentNode}}c=c.return}Ve(function(){var ve=m,Ue=Ae(o),Oe=[];e:{var Ie=up.get(n);if(Ie!==void 0){var Je=Vc,rt=n;switch(n){case"keypress":if(Vo(o)===0)break e;case"keydown":case"keyup":Je=Qv;break;case"focusin":rt="focus",Je=Xc;break;case"focusout":rt="blur",Je=Xc;break;case"beforeblur":case"afterblur":Je=Xc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=n_;break;case ap:case op:case lp:Je=Wv;break;case cp:Je=r_;break;case"scroll":Je=Bv;break;case"wheel":Je=a_;break;case"copy":case"cut":case"paste":Je=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Vh}var at=(i&4)!==0,cn=!at&&n==="scroll",de=at?Ie!==null?Ie+"Capture":null:Ie;at=[];for(var Q=ve,he;Q!==null;){he=Q;var Be=he.stateNode;if(he.tag===5&&Be!==null&&(he=Be,de!==null&&(Be=vt(Q,de),Be!=null&&at.push($a(Q,Be,he)))),cn)break;Q=Q.return}0<at.length&&(Ie=new Je(Ie,rt,null,o,Ue),Oe.push({event:Ie,listeners:at}))}}if((i&7)===0){e:{if(Ie=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Ie&&o!==fe&&(rt=o.relatedTarget||o.fromElement)&&(os(rt)||rt[lr]))break e;if((Je||Ie)&&(Ie=Ue.window===Ue?Ue:(Ie=Ue.ownerDocument)?Ie.defaultView||Ie.parentWindow:window,Je?(rt=o.relatedTarget||o.toElement,Je=ve,rt=rt?os(rt):null,rt!==null&&(cn=En(rt),rt!==cn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Je=null,rt=ve),Je!==rt)){if(at=zh,Be="onMouseLeave",de="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(at=Vh,Be="onPointerLeave",de="onPointerEnter",Q="pointer"),cn=Je==null?Ie:$s(Je),he=rt==null?Ie:$s(rt),Ie=new at(Be,Q+"leave",Je,o,Ue),Ie.target=cn,Ie.relatedTarget=he,Be=null,os(Ue)===ve&&(at=new at(de,Q+"enter",rt,o,Ue),at.target=he,at.relatedTarget=cn,Be=at),cn=Be,Je&&rt)t:{for(at=Je,de=rt,Q=0,he=at;he;he=js(he))Q++;for(he=0,Be=de;Be;Be=js(Be))he++;for(;0<Q-he;)at=js(at),Q--;for(;0<he-Q;)de=js(de),he--;for(;Q--;){if(at===de||de!==null&&at===de.alternate)break t;at=js(at),de=js(de)}at=null}else at=null;Je!==null&&mp(Oe,Ie,Je,at,!1),rt!==null&&cn!==null&&mp(Oe,cn,rt,at,!0)}}e:{if(Ie=ve?$s(ve):window,Je=Ie.nodeName&&Ie.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ie.type==="file")var lt=h_;else if($h(Ie))if(Kh)lt=v_;else{lt=m_;var dt=p_}else(Je=Ie.nodeName)&&Je.toLowerCase()==="input"&&(Ie.type==="checkbox"||Ie.type==="radio")&&(lt=g_);if(lt&&(lt=lt(n,ve))){qh(Oe,lt,o,Ue);break e}dt&&dt(n,Ie,ve),n==="focusout"&&(dt=Ie._wrapperState)&&dt.controlled&&Ie.type==="number"&&$t(Ie,"number",Ie.value)}switch(dt=ve?$s(ve):window,n){case"focusin":($h(dt)||dt.contentEditable==="true")&&(Ws=dt,Zc=ve,Xa=null);break;case"focusout":Xa=Zc=Ws=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,rp(Oe,o,Ue);break;case"selectionchange":if(x_)break;case"keydown":case"keyup":rp(Oe,o,Ue)}var ft;if(Yc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Hs?jh(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(Hh&&o.locale!=="ko"&&(Hs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Hs&&(ft=kh()):(Dr=Ue,Gc="value"in Dr?Dr.value:Dr.textContent,Hs=!0)),dt=qo(ve,xt),0<dt.length&&(xt=new Gh(xt,n,null,o,Ue),Oe.push({event:xt,listeners:dt}),ft?xt.data=ft:(ft=Yh(o),ft!==null&&(xt.data=ft)))),(ft=l_?c_(n,o):u_(n,o))&&(ve=qo(ve,"onBeforeInput"),0<ve.length&&(Ue=new Gh("onBeforeInput","beforeinput",null,o,Ue),Oe.push({event:Ue,listeners:ve}),Ue.data=ft))}hp(Oe,i)})}function $a(n,i,o){return{instance:n,listener:i,currentTarget:o}}function qo(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=vt(n,o),m!=null&&c.unshift($a(n,m,f)),m=vt(n,i),m!=null&&c.push($a(n,m,f))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,i,o,c,f){for(var m=i._reactName,T=[];o!==null&&o!==c;){var B=o,X=B.alternate,ve=B.stateNode;if(X!==null&&X===c)break;B.tag===5&&ve!==null&&(B=ve,f?(X=vt(o,m),X!=null&&T.unshift($a(o,X,B))):f||(X=vt(o,m),X!=null&&T.push($a(o,X,B)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var w_=/\r\n?/g,A_=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(w_,`
`).replace(A_,"")}function Ko(n,i,o){if(i=gp(i),gp(n)!==i&&o)throw Error(t(425))}function Zo(){}var ru=null,su=null;function au(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,b_=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(n){return vp.resolve(null).then(n).catch(C_)}:ou;function C_(n){setTimeout(function(){throw n})}function lu(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),ka(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);ka(i)}function Fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _p(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Ys,qa="__reactProps$"+Ys,lr="__reactContainer$"+Ys,cu="__reactEvents$"+Ys,R_="__reactListeners$"+Ys,P_="__reactHandles$"+Ys;function os(n){var i=n[Yi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[lr]||o[Yi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=_p(n);n!==null;){if(o=n[Yi])return o;n=_p(n)}return i}n=o,o=n.parentNode}return null}function Ka(n){return n=n[Yi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Jo(n){return n[qa]||null}var uu=[],qs=-1;function Or(n){return{current:n}}function Qt(n){0>qs||(n.current=uu[qs],uu[qs]=null,qs--)}function Kt(n,i){qs++,uu[qs]=n.current,n.current=i}var kr={},Dn=Or(kr),Zn=Or(!1),ls=kr;function Ks(n,i){var o=n.type.contextTypes;if(!o)return kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Jn(n){return n=n.childContextTypes,n!=null}function Qo(){Qt(Zn),Qt(Dn)}function yp(n,i,o){if(Dn.current!==kr)throw Error(t(168));Kt(Dn,i),Kt(Zn,o)}function xp(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,re(n)||"Unknown",f));return j({},o,c)}function el(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,ls=Dn.current,Kt(Dn,n),Kt(Zn,Zn.current),!0}function Sp(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=xp(n,i,ls),c.__reactInternalMemoizedMergedChildContext=n,Qt(Zn),Qt(Dn),Kt(Dn,n)):Qt(Zn),Kt(Zn,o)}var cr=null,tl=!1,du=!1;function Mp(n){cr===null?cr=[n]:cr.push(n)}function I_(n){tl=!0,Mp(n)}function Br(){if(!du&&cr!==null){du=!0;var n=0,i=ut;try{var o=cr;for(ut=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}cr=null,tl=!1}catch(f){throw cr!==null&&(cr=cr.slice(n+1)),Ti(Rr,Br),f}finally{ut=i,du=!1}}return null}var Zs=[],Js=0,nl=null,il=0,mi=[],gi=0,cs=null,ur=1,dr="";function us(n,i){Zs[Js++]=il,Zs[Js++]=nl,nl=n,il=i}function Ep(n,i,o){mi[gi++]=ur,mi[gi++]=dr,mi[gi++]=cs,cs=n;var c=ur;n=dr;var f=32-He(c)-1;c&=~(1<<f),o+=1;var m=32-He(i)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,ur=1<<32-He(i)+f|o<<f|c,dr=m+n}else ur=1<<m|o<<f|c,dr=n}function fu(n){n.return!==null&&(us(n,1),Ep(n,1,0))}function hu(n){for(;n===nl;)nl=Zs[--Js],Zs[Js]=null,il=Zs[--Js],Zs[Js]=null;for(;n===cs;)cs=mi[--gi],mi[gi]=null,dr=mi[--gi],mi[gi]=null,ur=mi[--gi],mi[gi]=null}var oi=null,li=null,en=!1,Ri=null;function wp(n,i){var o=xi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Ap(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,oi=n,li=Fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,oi=n,li=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=cs!==null?{id:ur,overflow:dr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=xi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,oi=n,li=null,!0):!1;default:return!1}}function pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mu(n){if(en){var i=li;if(i){var o=i;if(!Ap(n,i)){if(pu(n))throw Error(t(418));i=Fr(o.nextSibling);var c=oi;i&&Ap(n,i)?wp(c,o):(n.flags=n.flags&-4097|2,en=!1,oi=n)}}else{if(pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,oi=n}}}function Tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function rl(n){if(n!==oi)return!1;if(!en)return Tp(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!au(n.type,n.memoizedProps)),i&&(i=li)){if(pu(n))throw bp(),Error(t(418));for(;i;)wp(n,i),i=Fr(i.nextSibling)}if(Tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){li=Fr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}li=null}}else li=oi?Fr(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=li;n;)n=Fr(n.nextSibling)}function Qs(){li=oi=null,en=!1}function gu(n){Ri===null?Ri=[n]:Ri.push(n)}var L_=b.ReactCurrentBatchConfig;function Za(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=f.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function sl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Cp(n){var i=n._init;return i(n._payload)}function Rp(n){function i(de,Q){if(n){var he=de.deletions;he===null?(de.deletions=[Q],de.flags|=16):he.push(Q)}}function o(de,Q){if(!n)return null;for(;Q!==null;)i(de,Q),Q=Q.sibling;return null}function c(de,Q){for(de=new Map;Q!==null;)Q.key!==null?de.set(Q.key,Q):de.set(Q.index,Q),Q=Q.sibling;return de}function f(de,Q){return de=Yr(de,Q),de.index=0,de.sibling=null,de}function m(de,Q,he){return de.index=he,n?(he=de.alternate,he!==null?(he=he.index,he<Q?(de.flags|=2,Q):he):(de.flags|=2,Q)):(de.flags|=1048576,Q)}function T(de){return n&&de.alternate===null&&(de.flags|=2),de}function B(de,Q,he,Be){return Q===null||Q.tag!==6?(Q=od(he,de.mode,Be),Q.return=de,Q):(Q=f(Q,he),Q.return=de,Q)}function X(de,Q,he,Be){var lt=he.type;return lt===U?Ue(de,Q,he.props.children,Be,he.key):Q!==null&&(Q.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ge&&Cp(lt)===Q.type)?(Be=f(Q,he.props),Be.ref=Za(de,Q,he),Be.return=de,Be):(Be=Rl(he.type,he.key,he.props,null,de.mode,Be),Be.ref=Za(de,Q,he),Be.return=de,Be)}function ve(de,Q,he,Be){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==he.containerInfo||Q.stateNode.implementation!==he.implementation?(Q=ld(he,de.mode,Be),Q.return=de,Q):(Q=f(Q,he.children||[]),Q.return=de,Q)}function Ue(de,Q,he,Be,lt){return Q===null||Q.tag!==7?(Q=_s(he,de.mode,Be,lt),Q.return=de,Q):(Q=f(Q,he),Q.return=de,Q)}function Oe(de,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=od(""+Q,de.mode,he),Q.return=de,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case I:return he=Rl(Q.type,Q.key,Q.props,null,de.mode,he),he.ref=Za(de,null,Q),he.return=de,he;case P:return Q=ld(Q,de.mode,he),Q.return=de,Q;case ge:var Be=Q._init;return Oe(de,Be(Q._payload),he)}if(Vt(Q)||H(Q))return Q=_s(Q,de.mode,he,null),Q.return=de,Q;sl(de,Q)}return null}function Ie(de,Q,he,Be){var lt=Q!==null?Q.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return lt!==null?null:B(de,Q,""+he,Be);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case I:return he.key===lt?X(de,Q,he,Be):null;case P:return he.key===lt?ve(de,Q,he,Be):null;case ge:return lt=he._init,Ie(de,Q,lt(he._payload),Be)}if(Vt(he)||H(he))return lt!==null?null:Ue(de,Q,he,Be,null);sl(de,he)}return null}function Je(de,Q,he,Be,lt){if(typeof Be=="string"&&Be!==""||typeof Be=="number")return de=de.get(he)||null,B(Q,de,""+Be,lt);if(typeof Be=="object"&&Be!==null){switch(Be.$$typeof){case I:return de=de.get(Be.key===null?he:Be.key)||null,X(Q,de,Be,lt);case P:return de=de.get(Be.key===null?he:Be.key)||null,ve(Q,de,Be,lt);case ge:var dt=Be._init;return Je(de,Q,he,dt(Be._payload),lt)}if(Vt(Be)||H(Be))return de=de.get(he)||null,Ue(Q,de,Be,lt,null);sl(Q,Be)}return null}function rt(de,Q,he,Be){for(var lt=null,dt=null,ft=Q,xt=Q=0,Tn=null;ft!==null&&xt<he.length;xt++){ft.index>xt?(Tn=ft,ft=null):Tn=ft.sibling;var zt=Ie(de,ft,he[xt],Be);if(zt===null){ft===null&&(ft=Tn);break}n&&ft&&zt.alternate===null&&i(de,ft),Q=m(zt,Q,xt),dt===null?lt=zt:dt.sibling=zt,dt=zt,ft=Tn}if(xt===he.length)return o(de,ft),en&&us(de,xt),lt;if(ft===null){for(;xt<he.length;xt++)ft=Oe(de,he[xt],Be),ft!==null&&(Q=m(ft,Q,xt),dt===null?lt=ft:dt.sibling=ft,dt=ft);return en&&us(de,xt),lt}for(ft=c(de,ft);xt<he.length;xt++)Tn=Je(ft,de,xt,he[xt],Be),Tn!==null&&(n&&Tn.alternate!==null&&ft.delete(Tn.key===null?xt:Tn.key),Q=m(Tn,Q,xt),dt===null?lt=Tn:dt.sibling=Tn,dt=Tn);return n&&ft.forEach(function($r){return i(de,$r)}),en&&us(de,xt),lt}function at(de,Q,he,Be){var lt=H(he);if(typeof lt!="function")throw Error(t(150));if(he=lt.call(he),he==null)throw Error(t(151));for(var dt=lt=null,ft=Q,xt=Q=0,Tn=null,zt=he.next();ft!==null&&!zt.done;xt++,zt=he.next()){ft.index>xt?(Tn=ft,ft=null):Tn=ft.sibling;var $r=Ie(de,ft,zt.value,Be);if($r===null){ft===null&&(ft=Tn);break}n&&ft&&$r.alternate===null&&i(de,ft),Q=m($r,Q,xt),dt===null?lt=$r:dt.sibling=$r,dt=$r,ft=Tn}if(zt.done)return o(de,ft),en&&us(de,xt),lt;if(ft===null){for(;!zt.done;xt++,zt=he.next())zt=Oe(de,zt.value,Be),zt!==null&&(Q=m(zt,Q,xt),dt===null?lt=zt:dt.sibling=zt,dt=zt);return en&&us(de,xt),lt}for(ft=c(de,ft);!zt.done;xt++,zt=he.next())zt=Je(ft,de,xt,zt.value,Be),zt!==null&&(n&&zt.alternate!==null&&ft.delete(zt.key===null?xt:zt.key),Q=m(zt,Q,xt),dt===null?lt=zt:dt.sibling=zt,dt=zt);return n&&ft.forEach(function(dy){return i(de,dy)}),en&&us(de,xt),lt}function cn(de,Q,he,Be){if(typeof he=="object"&&he!==null&&he.type===U&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case I:e:{for(var lt=he.key,dt=Q;dt!==null;){if(dt.key===lt){if(lt=he.type,lt===U){if(dt.tag===7){o(de,dt.sibling),Q=f(dt,he.props.children),Q.return=de,de=Q;break e}}else if(dt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ge&&Cp(lt)===dt.type){o(de,dt.sibling),Q=f(dt,he.props),Q.ref=Za(de,dt,he),Q.return=de,de=Q;break e}o(de,dt);break}else i(de,dt);dt=dt.sibling}he.type===U?(Q=_s(he.props.children,de.mode,Be,he.key),Q.return=de,de=Q):(Be=Rl(he.type,he.key,he.props,null,de.mode,Be),Be.ref=Za(de,Q,he),Be.return=de,de=Be)}return T(de);case P:e:{for(dt=he.key;Q!==null;){if(Q.key===dt)if(Q.tag===4&&Q.stateNode.containerInfo===he.containerInfo&&Q.stateNode.implementation===he.implementation){o(de,Q.sibling),Q=f(Q,he.children||[]),Q.return=de,de=Q;break e}else{o(de,Q);break}else i(de,Q);Q=Q.sibling}Q=ld(he,de.mode,Be),Q.return=de,de=Q}return T(de);case ge:return dt=he._init,cn(de,Q,dt(he._payload),Be)}if(Vt(he))return rt(de,Q,he,Be);if(H(he))return at(de,Q,he,Be);sl(de,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,Q!==null&&Q.tag===6?(o(de,Q.sibling),Q=f(Q,he),Q.return=de,de=Q):(o(de,Q),Q=od(he,de.mode,Be),Q.return=de,de=Q),T(de)):o(de,Q)}return cn}var ea=Rp(!0),Pp=Rp(!1),al=Or(null),ol=null,ta=null,vu=null;function _u(){vu=ta=ol=null}function yu(n){var i=al.current;Qt(al),n._currentValue=i}function xu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function na(n,i){ol=n,vu=ta=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qn=!0),n.firstContext=null)}function vi(n){var i=n._currentValue;if(vu!==n)if(n={context:n,memoizedValue:i,next:null},ta===null){if(ol===null)throw Error(t(308));ta=n,ol.dependencies={lanes:0,firstContext:n}}else ta=ta.next=n;return i}var ds=null;function Su(n){ds===null?ds=[n]:ds.push(n)}function Ip(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Su(i)):(o.next=f.next,f.next=o),i.interleaved=o,fr(n,c)}function fr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var zr=!1;function Mu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Gr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,fr(n,o)}return f=c.interleaved,f===null?(i.next=i,Su(c)):(i.next=f.next,f.next=i),c.interleaved=i,fr(n,o)}function ll(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,mn(n,o)}}function Np(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function cl(n,i,o,c){var f=n.updateQueue;zr=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var X=B,ve=X.next;X.next=null,T===null?m=ve:T.next=ve,T=X;var Ue=n.alternate;Ue!==null&&(Ue=Ue.updateQueue,B=Ue.lastBaseUpdate,B!==T&&(B===null?Ue.firstBaseUpdate=ve:B.next=ve,Ue.lastBaseUpdate=X))}if(m!==null){var Oe=f.baseState;T=0,Ue=ve=X=null,B=m;do{var Ie=B.lane,Je=B.eventTime;if((c&Ie)===Ie){Ue!==null&&(Ue=Ue.next={eventTime:Je,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var rt=n,at=B;switch(Ie=i,Je=o,at.tag){case 1:if(rt=at.payload,typeof rt=="function"){Oe=rt.call(Je,Oe,Ie);break e}Oe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=at.payload,Ie=typeof rt=="function"?rt.call(Je,Oe,Ie):rt,Ie==null)break e;Oe=j({},Oe,Ie);break e;case 2:zr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ie=f.effects,Ie===null?f.effects=[B]:Ie.push(B))}else Je={eventTime:Je,lane:Ie,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ue===null?(ve=Ue=Je,X=Oe):Ue=Ue.next=Je,T|=Ie;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Ie=B,B=Ie.next,Ie.next=null,f.lastBaseUpdate=Ie,f.shared.pending=null}}while(!0);if(Ue===null&&(X=Oe),f.baseState=X,f.firstBaseUpdate=ve,f.lastBaseUpdate=Ue,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);ps|=T,n.lanes=T,n.memoizedState=Oe}}function Dp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ja={},$i=Or(Ja),Qa=Or(Ja),eo=Or(Ja);function fs(n){if(n===Ja)throw Error(t(174));return n}function Eu(n,i){switch(Kt(eo,i),Kt(Qa,n),Kt($i,Ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Qt($i),Kt($i,i)}function ia(){Qt($i),Qt(Qa),Qt(eo)}function Up(n){fs(eo.current);var i=fs($i.current),o=E(i,n.type);i!==o&&(Kt(Qa,n),Kt($i,o))}function wu(n){Qa.current===n&&(Qt($i),Qt(Qa))}var rn=Or(0);function ul(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Au=[];function Tu(){for(var n=0;n<Au.length;n++)Au[n]._workInProgressVersionPrimary=null;Au.length=0}var dl=b.ReactCurrentDispatcher,bu=b.ReactCurrentBatchConfig,hs=0,sn=null,gn=null,wn=null,fl=!1,to=!1,no=0,N_=0;function Un(){throw Error(t(321))}function Cu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ci(n[o],i[o]))return!1;return!0}function Ru(n,i,o,c,f,m){if(hs=m,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,dl.current=n===null||n.memoizedState===null?O_:k_,n=o(c,f),to){m=0;do{if(to=!1,no=0,25<=m)throw Error(t(301));m+=1,wn=gn=null,i.updateQueue=null,dl.current=B_,n=o(c,f)}while(to)}if(dl.current=ml,i=gn!==null&&gn.next!==null,hs=0,wn=gn=sn=null,fl=!1,i)throw Error(t(300));return n}function Pu(){var n=no!==0;return no=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?sn.memoizedState=wn=n:wn=wn.next=n,wn}function _i(){if(gn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var i=wn===null?sn.memoizedState:wn.next;if(i!==null)wn=i,gn=n;else{if(n===null)throw Error(t(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},wn===null?sn.memoizedState=wn=n:wn=wn.next=n}return wn}function io(n,i){return typeof i=="function"?i(n):i}function Iu(n){var i=_i(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=gn,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var B=T=null,X=null,ve=m;do{var Ue=ve.lane;if((hs&Ue)===Ue)X!==null&&(X=X.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),c=ve.hasEagerState?ve.eagerState:n(c,ve.action);else{var Oe={lane:Ue,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};X===null?(B=X=Oe,T=c):X=X.next=Oe,sn.lanes|=Ue,ps|=Ue}ve=ve.next}while(ve!==null&&ve!==m);X===null?T=c:X.next=B,Ci(c,i.memoizedState)||(Qn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=X,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,sn.lanes|=m,ps|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Lu(n){var i=_i(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do m=n(m,T.action),T=T.next;while(T!==f);Ci(m,i.memoizedState)||(Qn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Fp(){}function Op(n,i){var o=sn,c=_i(),f=i(),m=!Ci(c.memoizedState,f);if(m&&(c.memoizedState=f,Qn=!0),c=c.queue,Nu(zp.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||wn!==null&&wn.memoizedState.tag&1){if(o.flags|=2048,ro(9,Bp.bind(null,o,c,f,i),void 0,null),An===null)throw Error(t(349));(hs&30)!==0||kp(o,i,f)}return f}function kp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Bp(n,i,o,c){i.value=o,i.getSnapshot=c,Gp(i)&&Vp(n)}function zp(n,i,o){return o(function(){Gp(i)&&Vp(n)})}function Gp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ci(n,o)}catch{return!0}}function Vp(n){var i=fr(n,1);i!==null&&Ni(i,n,1,-1)}function Hp(n){var i=qi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:n},i.queue=n,n=n.dispatch=F_.bind(null,sn,n),[i.memoizedState,n]}function ro(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Wp(){return _i().memoizedState}function hl(n,i,o,c){var f=qi();sn.flags|=n,f.memoizedState=ro(1|i,o,void 0,c===void 0?null:c)}function pl(n,i,o,c){var f=_i();c=c===void 0?null:c;var m=void 0;if(gn!==null){var T=gn.memoizedState;if(m=T.destroy,c!==null&&Cu(c,T.deps)){f.memoizedState=ro(i,o,m,c);return}}sn.flags|=n,f.memoizedState=ro(1|i,o,m,c)}function Xp(n,i){return hl(8390656,8,n,i)}function Nu(n,i){return pl(2048,8,n,i)}function jp(n,i){return pl(4,2,n,i)}function Yp(n,i){return pl(4,4,n,i)}function $p(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qp(n,i,o){return o=o!=null?o.concat([n]):null,pl(4,4,$p.bind(null,i,n),o)}function Du(){}function Kp(n,i){var o=_i();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Cu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Zp(n,i){var o=_i();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Cu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Jp(n,i,o){return(hs&21)===0?(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=o):(Ci(o,i)||(o=nn(),sn.lanes|=o,ps|=o,n.baseState=!0),i)}function D_(n,i){var o=ut;ut=o!==0&&4>o?o:4,n(!0);var c=bu.transition;bu.transition={};try{n(!1),i()}finally{ut=o,bu.transition=c}}function Qp(){return _i().memoizedState}function U_(n,i,o){var c=Xr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},em(n))tm(i,o);else if(o=Ip(n,i,o,c),o!==null){var f=Xn();Ni(o,n,c,f),nm(o,i,c)}}function F_(n,i,o){var c=Xr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(em(n))tm(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,o);if(f.hasEagerState=!0,f.eagerState=B,Ci(B,T)){var X=i.interleaved;X===null?(f.next=f,Su(i)):(f.next=X.next,X.next=f),i.interleaved=f;return}}catch{}finally{}o=Ip(n,i,f,c),o!==null&&(f=Xn(),Ni(o,n,c,f),nm(o,i,c))}}function em(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function tm(n,i){to=fl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function nm(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,mn(n,o)}}var ml={readContext:vi,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},O_={readContext:vi,useCallback:function(n,i){return qi().memoizedState=[n,i===void 0?null:i],n},useContext:vi,useEffect:Xp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,hl(4194308,4,$p.bind(null,i,n),o)},useLayoutEffect:function(n,i){return hl(4194308,4,n,i)},useInsertionEffect:function(n,i){return hl(4,2,n,i)},useMemo:function(n,i){var o=qi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=qi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=U_.bind(null,sn,n),[c.memoizedState,n]},useRef:function(n){var i=qi();return n={current:n},i.memoizedState=n},useState:Hp,useDebugValue:Du,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=Hp(!1),i=n[0];return n=D_.bind(null,n[1]),qi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=sn,f=qi();if(en){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),An===null)throw Error(t(349));(hs&30)!==0||kp(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Xp(zp.bind(null,c,m,n),[n]),c.flags|=2048,ro(9,Bp.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=qi(),i=An.identifierPrefix;if(en){var o=dr,c=ur;o=(c&~(1<<32-He(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=no++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=N_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},k_={readContext:vi,useCallback:Kp,useContext:vi,useEffect:Nu,useImperativeHandle:qp,useInsertionEffect:jp,useLayoutEffect:Yp,useMemo:Zp,useReducer:Iu,useRef:Wp,useState:function(){return Iu(io)},useDebugValue:Du,useDeferredValue:function(n){var i=_i();return Jp(i,gn.memoizedState,n)},useTransition:function(){var n=Iu(io)[0],i=_i().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:Op,useId:Qp,unstable_isNewReconciler:!1},B_={readContext:vi,useCallback:Kp,useContext:vi,useEffect:Nu,useImperativeHandle:qp,useInsertionEffect:jp,useLayoutEffect:Yp,useMemo:Zp,useReducer:Lu,useRef:Wp,useState:function(){return Lu(io)},useDebugValue:Du,useDeferredValue:function(n){var i=_i();return gn===null?i.memoizedState=n:Jp(i,gn.memoizedState,n)},useTransition:function(){var n=Lu(io)[0],i=_i().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:Op,useId:Qp,unstable_isNewReconciler:!1};function Pi(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Uu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:j({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var gl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Xn(),f=Xr(n),m=hr(c,f);m.payload=i,o!=null&&(m.callback=o),i=Gr(n,m,f),i!==null&&(Ni(i,n,f,c),ll(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Xn(),f=Xr(n),m=hr(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Gr(n,m,f),i!==null&&(Ni(i,n,f,c),ll(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Xn(),c=Xr(n),f=hr(o,c);f.tag=2,i!=null&&(f.callback=i),i=Gr(n,f,c),i!==null&&(Ni(i,n,c,o),ll(i,n,c))}};function im(n,i,o,c,f,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Wa(o,c)||!Wa(f,m):!0}function rm(n,i,o){var c=!1,f=kr,m=i.contextType;return typeof m=="object"&&m!==null?m=vi(m):(f=Jn(i)?ls:Dn.current,c=i.contextTypes,m=(c=c!=null)?Ks(n,f):kr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function sm(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&gl.enqueueReplaceState(i,i.state,null)}function Fu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Mu(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=vi(m):(m=Jn(i)?ls:Dn.current,f.context=Ks(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Uu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&gl.enqueueReplaceState(f,f.state,null),cl(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ra(n,i){try{var o="",c=i;do o+=$e(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Ou(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ku(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var z_=typeof WeakMap=="function"?WeakMap:Map;function am(n,i,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){El||(El=!0,Qu=c),ku(n,i)},o}function om(n,i,o){o=hr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){ku(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ku(n,i),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function lm(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new z_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=ey.bind(null,n,i,o),i.then(n,n))}function cm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function um(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hr(-1,1),i.tag=2,Gr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var G_=b.ReactCurrentOwner,Qn=!1;function Wn(n,i,o,c){i.child=n===null?Pp(i,null,o,c):ea(i,n.child,o,c)}function dm(n,i,o,c,f){o=o.render;var m=i.ref;return na(i,f),c=Ru(n,i,o,c,m,f),o=Pu(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,pr(n,i,f)):(en&&o&&fu(i),i.flags|=1,Wn(n,i,c,f),i.child)}function fm(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!ad(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,hm(n,i,m,c,f)):(n=Rl(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(T,c)&&n.ref===i.ref)return pr(n,i,f)}return i.flags|=1,n=Yr(m,c),n.ref=i.ref,n.return=i,i.child=n}function hm(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(Wa(m,c)&&n.ref===i.ref)if(Qn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Qn=!0);else return i.lanes=n.lanes,pr(n,i,f)}return Bu(n,i,o,c,f)}function pm(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(aa,ci),ci|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(aa,ci),ci|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Kt(aa,ci),ci|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Kt(aa,ci),ci|=c;return Wn(n,i,f,o),i.child}function mm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Bu(n,i,o,c,f){var m=Jn(o)?ls:Dn.current;return m=Ks(i,m),na(i,f),o=Ru(n,i,o,c,m,f),c=Pu(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,pr(n,i,f)):(en&&c&&fu(i),i.flags|=1,Wn(n,i,o,f),i.child)}function gm(n,i,o,c,f){if(Jn(o)){var m=!0;el(i)}else m=!1;if(na(i,f),i.stateNode===null)_l(n,i),rm(i,o,c),Fu(i,o,c,f),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var X=T.context,ve=o.contextType;typeof ve=="object"&&ve!==null?ve=vi(ve):(ve=Jn(o)?ls:Dn.current,ve=Ks(i,ve));var Ue=o.getDerivedStateFromProps,Oe=typeof Ue=="function"||typeof T.getSnapshotBeforeUpdate=="function";Oe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||X!==ve)&&sm(i,T,c,ve),zr=!1;var Ie=i.memoizedState;T.state=Ie,cl(i,c,T,f),X=i.memoizedState,B!==c||Ie!==X||Zn.current||zr?(typeof Ue=="function"&&(Uu(i,o,Ue,c),X=i.memoizedState),(B=zr||im(i,o,B,c,Ie,X,ve))?(Oe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),T.props=c,T.state=X,T.context=ve,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Lp(n,i),B=i.memoizedProps,ve=i.type===i.elementType?B:Pi(i.type,B),T.props=ve,Oe=i.pendingProps,Ie=T.context,X=o.contextType,typeof X=="object"&&X!==null?X=vi(X):(X=Jn(o)?ls:Dn.current,X=Ks(i,X));var Je=o.getDerivedStateFromProps;(Ue=typeof Je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Oe||Ie!==X)&&sm(i,T,c,X),zr=!1,Ie=i.memoizedState,T.state=Ie,cl(i,c,T,f);var rt=i.memoizedState;B!==Oe||Ie!==rt||Zn.current||zr?(typeof Je=="function"&&(Uu(i,o,Je,c),rt=i.memoizedState),(ve=zr||im(i,o,ve,c,Ie,rt,X)||!1)?(Ue||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,rt,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,rt,X)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=rt),T.props=c,T.state=rt,T.context=X,c=ve):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),c=!1)}return zu(n,i,o,c,m,f)}function zu(n,i,o,c,f,m){mm(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Sp(i,o,!1),pr(n,i,m);c=i.stateNode,G_.current=i;var B=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=ea(i,n.child,null,m),i.child=ea(i,null,B,m)):Wn(n,i,B,m),i.memoizedState=c.state,f&&Sp(i,o,!0),i.child}function vm(n){var i=n.stateNode;i.pendingContext?yp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yp(n,i.context,!1),Eu(n,i.containerInfo)}function _m(n,i,o,c,f){return Qs(),gu(f),i.flags|=256,Wn(n,i,o,c),i.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ym(n,i,o){var c=i.pendingProps,f=rn.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Kt(rn,f&1),n===null)return mu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=Pl(T,c,0,null),n=_s(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Vu(o),i.memoizedState=Gu,n):Hu(i,T));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return V_(n,i,T,c,B,f,o);if(m){m=c.fallback,T=i.mode,f=n.child,B=f.sibling;var X={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Yr(f,X),c.subtreeFlags=f.subtreeFlags&14680064),B!==null?m=Yr(B,m):(m=_s(m,T,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?Vu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=Gu,c}return m=n.child,n=m.sibling,c=Yr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Hu(n,i){return i=Pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function vl(n,i,o,c){return c!==null&&gu(c),ea(i,n.child,null,o),n=Hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function V_(n,i,o,c,f,m,T){if(o)return i.flags&256?(i.flags&=-257,c=Ou(Error(t(422))),vl(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Pl({mode:"visible",children:c.children},f,0,null),m=_s(m,f,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ea(i,n.child,null,T),i.child.memoizedState=Vu(T),i.memoizedState=Gu,m);if((i.mode&1)===0)return vl(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=Ou(m,c,void 0),vl(n,i,T,c)}if(B=(T&n.childLanes)!==0,Qn||B){if(c=An,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,fr(n,f),Ni(c,n,f,-1))}return sd(),c=Ou(Error(t(421))),vl(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ty.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,li=Fr(f.nextSibling),oi=i,en=!0,Ri=null,n!==null&&(mi[gi++]=ur,mi[gi++]=dr,mi[gi++]=cs,ur=n.id,dr=n.overflow,cs=i),i=Hu(i,c.children),i.flags|=4096,i)}function xm(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),xu(n.return,i,o)}function Wu(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Sm(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Wn(n,i,c.children,o),c=rn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xm(n,o,i);else if(n.tag===19)xm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(rn,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&ul(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Wu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ul(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Wu(i,!0,o,null,m);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function _l(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ps|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Yr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Yr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function H_(n,i,o){switch(i.tag){case 3:vm(i),Qs();break;case 5:Up(i);break;case 1:Jn(i.type)&&el(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Kt(al,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(rn,rn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ym(n,i,o):(Kt(rn,rn.current&1),n=pr(n,i,o),n!==null?n.sibling:null);Kt(rn,rn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sm(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Kt(rn,rn.current),c)break;return null;case 22:case 23:return i.lanes=0,pm(n,i,o)}return pr(n,i,o)}var Mm,Xu,Em,wm;Mm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xu=function(){},Em=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,fs($i.current);var m=null;switch(o){case"input":f=yt(n,f),c=yt(n,c),m=[];break;case"select":f=j({},f,{value:void 0}),c=j({},c,{value:void 0}),m=[];break;case"textarea":f=Nt(n,f),c=Nt(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Zo)}ze(o,c);var T;o=null;for(ve in f)if(!c.hasOwnProperty(ve)&&f.hasOwnProperty(ve)&&f[ve]!=null)if(ve==="style"){var B=f[ve];for(T in B)B.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(a.hasOwnProperty(ve)?m||(m=[]):(m=m||[]).push(ve,null));for(ve in c){var X=c[ve];if(B=f!=null?f[ve]:void 0,c.hasOwnProperty(ve)&&X!==B&&(X!=null||B!=null))if(ve==="style")if(B){for(T in B)!B.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in X)X.hasOwnProperty(T)&&B[T]!==X[T]&&(o||(o={}),o[T]=X[T])}else o||(m||(m=[]),m.push(ve,o)),o=X;else ve==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(m=m||[]).push(ve,X)):ve==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(ve,""+X):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(a.hasOwnProperty(ve)?(X!=null&&ve==="onScroll"&&Jt("scroll",n),m||B===X||(m=[])):(m=m||[]).push(ve,X))}o&&(m=m||[]).push("style",o);var ve=m;(i.updateQueue=ve)&&(i.flags|=4)}},wm=function(n,i,o,c){o!==c&&(i.flags|=4)};function so(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function W_(n,i,o){var c=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(i),null;case 1:return Jn(i.type)&&Qo(),Fn(i),null;case 3:return c=i.stateNode,ia(),Qt(Zn),Qt(Dn),Tu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(rl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(nd(Ri),Ri=null))),Xu(n,i),Fn(i),null;case 5:wu(i);var f=fs(eo.current);if(o=i.type,n!==null&&i.stateNode!=null)Em(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Fn(i),null}if(n=fs($i.current),rl(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Yi]=i,c[qa]=m,n=(i.mode&1)!==0,o){case"dialog":Jt("cancel",c),Jt("close",c);break;case"iframe":case"object":case"embed":Jt("load",c);break;case"video":case"audio":for(f=0;f<ja.length;f++)Jt(ja[f],c);break;case"source":Jt("error",c);break;case"img":case"image":case"link":Jt("error",c),Jt("load",c);break;case"details":Jt("toggle",c);break;case"input":Mt(c,m),Jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Jt("invalid",c);break;case"textarea":$(c,m),Jt("invalid",c)}ze(o,m),f=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&Ko(c.textContent,B,n),f=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Ko(c.textContent,B,n),f=["children",""+B]):a.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Jt("scroll",c)}switch(o){case"input":ke(c),Gt(c,m,!0);break;case"textarea":ke(c),Pt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Zo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(o,{is:c.is}):(n=T.createElement(o),o==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,o),n[Yi]=i,n[qa]=c,Mm(n,i,!1,!1),i.stateNode=n;e:{switch(T=te(o,c),o){case"dialog":Jt("cancel",n),Jt("close",n),f=c;break;case"iframe":case"object":case"embed":Jt("load",n),f=c;break;case"video":case"audio":for(f=0;f<ja.length;f++)Jt(ja[f],n);f=c;break;case"source":Jt("error",n),f=c;break;case"img":case"image":case"link":Jt("error",n),Jt("load",n),f=c;break;case"details":Jt("toggle",n),f=c;break;case"input":Mt(n,c),f=yt(n,c),Jt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=j({},c,{value:void 0}),Jt("invalid",n);break;case"textarea":$(n,c),f=Nt(n,c),Jt("invalid",n);break;default:f=c}ze(o,f),B=f;for(m in B)if(B.hasOwnProperty(m)){var X=B[m];m==="style"?ye(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ue(n,X)):m==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&_e(n,X):typeof X=="number"&&_e(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?X!=null&&m==="onScroll"&&Jt("scroll",n):X!=null&&k(n,m,X,T))}switch(o){case"input":ke(n),Gt(n,c,!1);break;case"textarea":ke(n),Pt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ne(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?st(n,!!c.multiple,m,!1):c.defaultValue!=null&&st(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Zo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Fn(i),null;case 6:if(n&&i.stateNode!=null)wm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=fs(eo.current),fs($i.current),rl(i)){if(c=i.stateNode,o=i.memoizedProps,c[Yi]=i,(m=c.nodeValue!==o)&&(n=oi,n!==null))switch(n.tag){case 3:Ko(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Yi]=i,i.stateNode=c}return Fn(i),null;case 13:if(Qt(rn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&li!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bp(),Qs(),i.flags|=98560,m=!1;else if(m=rl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Yi]=i}else Qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Fn(i),m=!1}else Ri!==null&&(nd(Ri),Ri=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?vn===0&&(vn=3):sd())),i.updateQueue!==null&&(i.flags|=4),Fn(i),null);case 4:return ia(),Xu(n,i),n===null&&Ya(i.stateNode.containerInfo),Fn(i),null;case 10:return yu(i.type._context),Fn(i),null;case 17:return Jn(i.type)&&Qo(),Fn(i),null;case 19:if(Qt(rn),m=i.memoizedState,m===null)return Fn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)so(m,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=ul(n),T!==null){for(i.flags|=128,so(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Kt(rn,rn.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>oa&&(i.flags|=128,c=!0,so(m,!1),i.lanes=4194304)}else{if(!c)if(n=ul(T),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),so(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!en)return Fn(i),null}else 2*qt()-m.renderingStartTime>oa&&o!==1073741824&&(i.flags|=128,c=!0,so(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,o=rn.current,Kt(rn,c?o&1|2:o&1),i):(Fn(i),null);case 22:case 23:return rd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ci&1073741824)!==0&&(Fn(i),i.subtreeFlags&6&&(i.flags|=8192)):Fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function X_(n,i){switch(hu(i),i.tag){case 1:return Jn(i.type)&&Qo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ia(),Qt(Zn),Qt(Dn),Tu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return wu(i),null;case 13:if(Qt(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qt(rn),null;case 4:return ia(),null;case 10:return yu(i.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var yl=!1,On=!1,j_=typeof WeakSet=="function"?WeakSet:Set,tt=null;function sa(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){on(n,i,c)}else o.current=null}function ju(n,i,o){try{o()}catch(c){on(n,i,c)}}var Am=!1;function Y_(n,i){if(ru=Bo,n=ip(),Kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,B=-1,X=-1,ve=0,Ue=0,Oe=n,Ie=null;t:for(;;){for(var Je;Oe!==o||f!==0&&Oe.nodeType!==3||(B=T+f),Oe!==m||c!==0&&Oe.nodeType!==3||(X=T+c),Oe.nodeType===3&&(T+=Oe.nodeValue.length),(Je=Oe.firstChild)!==null;)Ie=Oe,Oe=Je;for(;;){if(Oe===n)break t;if(Ie===o&&++ve===f&&(B=T),Ie===m&&++Ue===c&&(X=T),(Je=Oe.nextSibling)!==null)break;Oe=Ie,Ie=Oe.parentNode}Oe=Je}o=B===-1||X===-1?null:{start:B,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(su={focusedElem:n,selectionRange:o},Bo=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var at=rt.memoizedProps,cn=rt.memoizedState,de=i.stateNode,Q=de.getSnapshotBeforeUpdate(i.elementType===i.type?at:Pi(i.type,at),cn);de.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Be){on(i,i.return,Be)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return rt=Am,Am=!1,rt}function ao(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&ju(i,o,m)}f=f.next}while(f!==c)}}function xl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Yu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Tm(n){var i=n.alternate;i!==null&&(n.alternate=null,Tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[qa],delete i[cu],delete i[R_],delete i[P_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Zo));else if(c!==4&&(n=n.child,n!==null))for($u(n,i,o),n=n.sibling;n!==null;)$u(n,i,o),n=n.sibling}function qu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(qu(n,i,o),n=n.sibling;n!==null;)qu(n,i,o),n=n.sibling}var Pn=null,Ii=!1;function Vr(n,i,o){for(o=o.child;o!==null;)Rm(n,i,o),o=o.sibling}function Rm(n,i,o){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(ce,o)}catch{}switch(o.tag){case 5:On||sa(o,i);case 6:var c=Pn,f=Ii;Pn=null,Vr(n,i,o),Pn=c,Ii=f,Pn!==null&&(Ii?(n=Pn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Pn.removeChild(o.stateNode));break;case 18:Pn!==null&&(Ii?(n=Pn,o=o.stateNode,n.nodeType===8?lu(n.parentNode,o):n.nodeType===1&&lu(n,o),ka(n)):lu(Pn,o.stateNode));break;case 4:c=Pn,f=Ii,Pn=o.stateNode.containerInfo,Ii=!0,Vr(n,i,o),Pn=c,Ii=f;break;case 0:case 11:case 14:case 15:if(!On&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&ju(o,i,T),f=f.next}while(f!==c)}Vr(n,i,o);break;case 1:if(!On&&(sa(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(B){on(o,i,B)}Vr(n,i,o);break;case 21:Vr(n,i,o);break;case 22:o.mode&1?(On=(c=On)||o.memoizedState!==null,Vr(n,i,o),On=c):Vr(n,i,o);break;default:Vr(n,i,o)}}function Pm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new j_),i.forEach(function(c){var f=ny.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Li(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Pn=B.stateNode,Ii=!1;break e;case 3:Pn=B.stateNode.containerInfo,Ii=!0;break e;case 4:Pn=B.stateNode.containerInfo,Ii=!0;break e}B=B.return}if(Pn===null)throw Error(t(160));Rm(m,T,f),Pn=null,Ii=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(ve){on(f,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Im(i,n),i=i.sibling}function Im(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Li(i,n),Ki(n),c&4){try{ao(3,n,n.return),xl(3,n)}catch(at){on(n,n.return,at)}try{ao(5,n,n.return)}catch(at){on(n,n.return,at)}}break;case 1:Li(i,n),Ki(n),c&512&&o!==null&&sa(o,o.return);break;case 5:if(Li(i,n),Ki(n),c&512&&o!==null&&sa(o,o.return),n.flags&32){var f=n.stateNode;try{_e(f,"")}catch(at){on(n,n.return,at)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,B=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&Ut(f,m),te(B,T);var ve=te(B,m);for(T=0;T<X.length;T+=2){var Ue=X[T],Oe=X[T+1];Ue==="style"?ye(f,Oe):Ue==="dangerouslySetInnerHTML"?ue(f,Oe):Ue==="children"?_e(f,Oe):k(f,Ue,Oe,ve)}switch(B){case"input":mt(f,m);break;case"textarea":kt(f,m);break;case"select":var Ie=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Je=m.value;Je!=null?st(f,!!m.multiple,Je,!1):Ie!==!!m.multiple&&(m.defaultValue!=null?st(f,!!m.multiple,m.defaultValue,!0):st(f,!!m.multiple,m.multiple?[]:"",!1))}f[qa]=m}catch(at){on(n,n.return,at)}}break;case 6:if(Li(i,n),Ki(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(at){on(n,n.return,at)}}break;case 3:if(Li(i,n),Ki(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ka(i.containerInfo)}catch(at){on(n,n.return,at)}break;case 4:Li(i,n),Ki(n);break;case 13:Li(i,n),Ki(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Ju=qt())),c&4&&Pm(n);break;case 22:if(Ue=o!==null&&o.memoizedState!==null,n.mode&1?(On=(ve=On)||Ue,Li(i,n),On=ve):Li(i,n),Ki(n),c&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Ue&&(n.mode&1)!==0)for(tt=n,Ue=n.child;Ue!==null;){for(Oe=tt=Ue;tt!==null;){switch(Ie=tt,Je=Ie.child,Ie.tag){case 0:case 11:case 14:case 15:ao(4,Ie,Ie.return);break;case 1:sa(Ie,Ie.return);var rt=Ie.stateNode;if(typeof rt.componentWillUnmount=="function"){c=Ie,o=Ie.return;try{i=c,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(at){on(c,o,at)}}break;case 5:sa(Ie,Ie.return);break;case 22:if(Ie.memoizedState!==null){Dm(Oe);continue}}Je!==null?(Je.return=Ie,tt=Je):Dm(Oe)}Ue=Ue.sibling}e:for(Ue=null,Oe=n;;){if(Oe.tag===5){if(Ue===null){Ue=Oe;try{f=Oe.stateNode,ve?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Oe.stateNode,X=Oe.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=oe("display",T))}catch(at){on(n,n.return,at)}}}else if(Oe.tag===6){if(Ue===null)try{Oe.stateNode.nodeValue=ve?"":Oe.memoizedProps}catch(at){on(n,n.return,at)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===n)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===n)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===n)break e;Ue===Oe&&(Ue=null),Oe=Oe.return}Ue===Oe&&(Ue=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:Li(i,n),Ki(n),c&4&&Pm(n);break;case 21:break;default:Li(i,n),Ki(n)}}function Ki(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(bm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(_e(f,""),c.flags&=-33);var m=Cm(n);qu(n,m,f);break;case 3:case 4:var T=c.stateNode.containerInfo,B=Cm(n);$u(n,B,T);break;default:throw Error(t(161))}}catch(X){on(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function $_(n,i,o){tt=n,Lm(n)}function Lm(n,i,o){for(var c=(n.mode&1)!==0;tt!==null;){var f=tt,m=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||yl;if(!T){var B=f.alternate,X=B!==null&&B.memoizedState!==null||On;B=yl;var ve=On;if(yl=T,(On=X)&&!ve)for(tt=f;tt!==null;)T=tt,X=T.child,T.tag===22&&T.memoizedState!==null?Um(f):X!==null?(X.return=T,tt=X):Um(f);for(;m!==null;)tt=m,Lm(m),m=m.sibling;tt=f,yl=B,On=ve}Nm(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,tt=m):Nm(n)}}function Nm(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:On||xl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!On)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Pi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dp(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dp(i,T,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Ue=ve.memoizedState;if(Ue!==null){var Oe=Ue.dehydrated;Oe!==null&&ka(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||i.flags&512&&Yu(i)}catch(Ie){on(i,i.return,Ie)}}if(i===n){tt=null;break}if(o=i.sibling,o!==null){o.return=i.return,tt=o;break}tt=i.return}}function Dm(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var o=i.sibling;if(o!==null){o.return=i.return,tt=o;break}tt=i.return}}function Um(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{xl(4,i)}catch(X){on(i,o,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(X){on(i,f,X)}}var m=i.return;try{Yu(i)}catch(X){on(i,m,X)}break;case 5:var T=i.return;try{Yu(i)}catch(X){on(i,T,X)}}}catch(X){on(i,i.return,X)}if(i===n){tt=null;break}var B=i.sibling;if(B!==null){B.return=i.return,tt=B;break}tt=i.return}}var q_=Math.ceil,Sl=b.ReactCurrentDispatcher,Ku=b.ReactCurrentOwner,yi=b.ReactCurrentBatchConfig,Ft=0,An=null,fn=null,In=0,ci=0,aa=Or(0),vn=0,oo=null,ps=0,Ml=0,Zu=0,lo=null,ei=null,Ju=0,oa=1/0,mr=null,El=!1,Qu=null,Hr=null,wl=!1,Wr=null,Al=0,co=0,ed=null,Tl=-1,bl=0;function Xn(){return(Ft&6)!==0?qt():Tl!==-1?Tl:Tl=qt()}function Xr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&In!==0?In&-In:L_.transition!==null?(bl===0&&(bl=nn()),bl):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Oh(n.type)),n)}function Ni(n,i,o,c){if(50<co)throw co=0,ed=null,Error(t(185));Yt(n,o,c),((Ft&2)===0||n!==An)&&(n===An&&((Ft&2)===0&&(Ml|=o),vn===4&&jr(n,In)),ti(n,c),o===1&&Ft===0&&(i.mode&1)===0&&(oa=qt()+500,tl&&Br()))}function ti(n,i){var o=n.callbackNode;ot(n,i);var c=nt(n,n===An?In:0);if(c===0)o!==null&&Vn(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Vn(o),i===1)n.tag===0?I_(Om.bind(null,n)):Mp(Om.bind(null,n)),b_(function(){(Ft&6)===0&&Br()}),o=null;else{switch(dn(c)){case 1:o=Rr;break;case 4:o=Pr;break;case 16:o=R;break;case 536870912:o=me;break;default:o=R}o=Xm(o,Fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Fm(n,i){if(Tl=-1,bl=0,(Ft&6)!==0)throw Error(t(327));var o=n.callbackNode;if(la()&&n.callbackNode!==o)return null;var c=nt(n,n===An?In:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Cl(n,c);else{i=c;var f=Ft;Ft|=2;var m=Bm();(An!==n||In!==i)&&(mr=null,oa=qt()+500,gs(n,i));do try{J_();break}catch(B){km(n,B)}while(!0);_u(),Sl.current=m,Ft=f,fn!==null?i=0:(An=null,In=0,i=vn)}if(i!==0){if(i===2&&(f=ct(n),f!==0&&(c=f,i=td(n,f))),i===1)throw o=oo,gs(n,0),jr(n,c),ti(n,qt()),o;if(i===6)jr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!K_(f)&&(i=Cl(n,c),i===2&&(m=ct(n),m!==0&&(c=m,i=td(n,m))),i===1))throw o=oo,gs(n,0),jr(n,c),ti(n,qt()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:vs(n,ei,mr);break;case 3:if(jr(n,c),(c&130023424)===c&&(i=Ju+500-qt(),10<i)){if(nt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Xn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=ou(vs.bind(null,n,ei,mr),i);break}vs(n,ei,mr);break;case 4:if(jr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-He(c);m=1<<T,T=i[T],T>f&&(f=T),c&=~m}if(c=f,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*q_(c/1960))-c,10<c){n.timeoutHandle=ou(vs.bind(null,n,ei,mr),c);break}vs(n,ei,mr);break;case 5:vs(n,ei,mr);break;default:throw Error(t(329))}}}return ti(n,qt()),n.callbackNode===o?Fm.bind(null,n):null}function td(n,i){var o=lo;return n.current.memoizedState.isDehydrated&&(gs(n,i).flags|=256),n=Cl(n,i),n!==2&&(i=ei,ei=o,i!==null&&nd(i)),n}function nd(n){ei===null?ei=n:ei.push.apply(ei,n)}function K_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Ci(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(n,i){for(i&=~Zu,i&=~Ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-He(i),c=1<<o;n[o]=-1,i&=~c}}function Om(n){if((Ft&6)!==0)throw Error(t(327));la();var i=nt(n,0);if((i&1)===0)return ti(n,qt()),null;var o=Cl(n,i);if(n.tag!==0&&o===2){var c=ct(n);c!==0&&(i=c,o=td(n,c))}if(o===1)throw o=oo,gs(n,0),jr(n,i),ti(n,qt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,vs(n,ei,mr),ti(n,qt()),null}function id(n,i){var o=Ft;Ft|=1;try{return n(i)}finally{Ft=o,Ft===0&&(oa=qt()+500,tl&&Br())}}function ms(n){Wr!==null&&Wr.tag===0&&(Ft&6)===0&&la();var i=Ft;Ft|=1;var o=yi.transition,c=ut;try{if(yi.transition=null,ut=1,n)return n()}finally{ut=c,yi.transition=o,Ft=i,(Ft&6)===0&&Br()}}function rd(){ci=aa.current,Qt(aa)}function gs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,T_(o)),fn!==null)for(o=fn.return;o!==null;){var c=o;switch(hu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Qo();break;case 3:ia(),Qt(Zn),Qt(Dn),Tu();break;case 5:wu(c);break;case 4:ia();break;case 13:Qt(rn);break;case 19:Qt(rn);break;case 10:yu(c.type._context);break;case 22:case 23:rd()}o=o.return}if(An=n,fn=n=Yr(n.current,null),In=ci=i,vn=0,oo=null,Zu=Ml=ps=0,ei=lo=null,ds!==null){for(i=0;i<ds.length;i++)if(o=ds[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var T=m.next;m.next=f,c.next=T}o.pending=c}ds=null}return n}function km(n,i){do{var o=fn;try{if(_u(),dl.current=ml,fl){for(var c=sn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}fl=!1}if(hs=0,wn=gn=sn=null,to=!1,no=0,Ku.current=null,o===null||o.return===null){vn=1,oo=i,fn=null;break}e:{var m=n,T=o.return,B=o,X=i;if(i=In,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var ve=X,Ue=B,Oe=Ue.tag;if((Ue.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Ie=Ue.alternate;Ie?(Ue.updateQueue=Ie.updateQueue,Ue.memoizedState=Ie.memoizedState,Ue.lanes=Ie.lanes):(Ue.updateQueue=null,Ue.memoizedState=null)}var Je=cm(T);if(Je!==null){Je.flags&=-257,um(Je,T,B,m,i),Je.mode&1&&lm(m,ve,i),i=Je,X=ve;var rt=i.updateQueue;if(rt===null){var at=new Set;at.add(X),i.updateQueue=at}else rt.add(X);break e}else{if((i&1)===0){lm(m,ve,i),sd();break e}X=Error(t(426))}}else if(en&&B.mode&1){var cn=cm(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),um(cn,T,B,m,i),gu(ra(X,B));break e}}m=X=ra(X,B),vn!==4&&(vn=2),lo===null?lo=[m]:lo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var de=am(m,X,i);Np(m,de);break e;case 1:B=X;var Q=m.type,he=m.stateNode;if((m.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Hr===null||!Hr.has(he)))){m.flags|=65536,i&=-i,m.lanes|=i;var Be=om(m,B,i);Np(m,Be);break e}}m=m.return}while(m!==null)}Gm(o)}catch(lt){i=lt,fn===o&&o!==null&&(fn=o=o.return);continue}break}while(!0)}function Bm(){var n=Sl.current;return Sl.current=ml,n===null?ml:n}function sd(){(vn===0||vn===3||vn===2)&&(vn=4),An===null||(ps&268435455)===0&&(Ml&268435455)===0||jr(An,In)}function Cl(n,i){var o=Ft;Ft|=2;var c=Bm();(An!==n||In!==i)&&(mr=null,gs(n,i));do try{Z_();break}catch(f){km(n,f)}while(!0);if(_u(),Ft=o,Sl.current=c,fn!==null)throw Error(t(261));return An=null,In=0,vn}function Z_(){for(;fn!==null;)zm(fn)}function J_(){for(;fn!==null&&!ks();)zm(fn)}function zm(n){var i=Wm(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?Gm(n):fn=i,Ku.current=null}function Gm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=W_(o,i,ci),o!==null){fn=o;return}}else{if(o=X_(o,i),o!==null){o.flags&=32767,fn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=n}while(i!==null);vn===0&&(vn=5)}function vs(n,i,o){var c=ut,f=yi.transition;try{yi.transition=null,ut=1,Q_(n,i,o,c)}finally{yi.transition=f,ut=c}return null}function Q_(n,i,o,c){do la();while(Wr!==null);if((Ft&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(At(n,m),n===An&&(fn=An=null,In=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||wl||(wl=!0,Xm(R,function(){return la(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=yi.transition,yi.transition=null;var T=ut;ut=1;var B=Ft;Ft|=4,Ku.current=null,Y_(n,o),Im(o,n),y_(su),Bo=!!ru,su=ru=null,n.current=o,$_(o),Bs(),Ft=B,ut=T,yi.transition=m}else n.current=o;if(wl&&(wl=!1,Wr=n,Al=f),m=n.pendingLanes,m===0&&(Hr=null),We(o.stateNode),ti(n,qt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(El)throw El=!1,n=Qu,Qu=null,n;return(Al&1)!==0&&n.tag!==0&&la(),m=n.pendingLanes,(m&1)!==0?n===ed?co++:(co=0,ed=n):co=0,Br(),null}function la(){if(Wr!==null){var n=dn(Al),i=yi.transition,o=ut;try{if(yi.transition=null,ut=16>n?16:n,Wr===null)var c=!1;else{if(n=Wr,Wr=null,Al=0,(Ft&6)!==0)throw Error(t(331));var f=Ft;for(Ft|=4,tt=n.current;tt!==null;){var m=tt,T=m.child;if((tt.flags&16)!==0){var B=m.deletions;if(B!==null){for(var X=0;X<B.length;X++){var ve=B[X];for(tt=ve;tt!==null;){var Ue=tt;switch(Ue.tag){case 0:case 11:case 15:ao(8,Ue,m)}var Oe=Ue.child;if(Oe!==null)Oe.return=Ue,tt=Oe;else for(;tt!==null;){Ue=tt;var Ie=Ue.sibling,Je=Ue.return;if(Tm(Ue),Ue===ve){tt=null;break}if(Ie!==null){Ie.return=Je,tt=Ie;break}tt=Je}}}var rt=m.alternate;if(rt!==null){var at=rt.child;if(at!==null){rt.child=null;do{var cn=at.sibling;at.sibling=null,at=cn}while(at!==null)}}tt=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,tt=T;else e:for(;tt!==null;){if(m=tt,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ao(9,m,m.return)}var de=m.sibling;if(de!==null){de.return=m.return,tt=de;break e}tt=m.return}}var Q=n.current;for(tt=Q;tt!==null;){T=tt;var he=T.child;if((T.subtreeFlags&2064)!==0&&he!==null)he.return=T,tt=he;else e:for(T=Q;tt!==null;){if(B=tt,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:xl(9,B)}}catch(lt){on(B,B.return,lt)}if(B===T){tt=null;break e}var Be=B.sibling;if(Be!==null){Be.return=B.return,tt=Be;break e}tt=B.return}}if(Ft=f,Br(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(ce,n)}catch{}c=!0}return c}finally{ut=o,yi.transition=i}}return!1}function Vm(n,i,o){i=ra(o,i),i=am(n,i,1),n=Gr(n,i,1),i=Xn(),n!==null&&(Yt(n,1,i),ti(n,i))}function on(n,i,o){if(n.tag===3)Vm(n,n,o);else for(;i!==null;){if(i.tag===3){Vm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=ra(o,n),n=om(i,n,1),i=Gr(i,n,1),n=Xn(),i!==null&&(Yt(i,1,n),ti(i,n));break}}i=i.return}}function ey(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Xn(),n.pingedLanes|=n.suspendedLanes&o,An===n&&(In&o)===o&&(vn===4||vn===3&&(In&130023424)===In&&500>qt()-Ju?gs(n,0):Zu|=o),ti(n,i)}function Hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var o=Xn();n=fr(n,i),n!==null&&(Yt(n,i,o),ti(n,o))}function ty(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Hm(n,o)}function ny(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hm(n,o)}var Wm;Wm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zn.current)Qn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Qn=!1,H_(n,i,o);Qn=(n.flags&131072)!==0}else Qn=!1,en&&(i.flags&1048576)!==0&&Ep(i,il,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;_l(n,i),n=i.pendingProps;var f=Ks(i,Dn.current);na(i,o),f=Ru(null,i,c,n,f,o);var m=Pu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Jn(c)?(m=!0,el(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Mu(i),f.updater=gl,i.stateNode=f,f._reactInternals=i,Fu(i,c,n,o),i=zu(null,i,c,!0,m,o)):(i.tag=0,en&&m&&fu(i),Wn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(_l(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ry(c),n=Pi(c,n),f){case 0:i=Bu(null,i,c,n,o);break e;case 1:i=gm(null,i,c,n,o);break e;case 11:i=dm(null,i,c,n,o);break e;case 14:i=fm(null,i,c,Pi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pi(c,f),Bu(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pi(c,f),gm(n,i,c,f,o);case 3:e:{if(vm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Lp(n,i),cl(i,c,null,o);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ra(Error(t(423)),i),i=_m(n,i,c,o,f);break e}else if(c!==f){f=ra(Error(t(424)),i),i=_m(n,i,c,o,f);break e}else for(li=Fr(i.stateNode.containerInfo.firstChild),oi=i,en=!0,Ri=null,o=Pp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qs(),c===f){i=pr(n,i,o);break e}Wn(n,i,c,o)}i=i.child}return i;case 5:return Up(i),n===null&&mu(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,T=f.children,au(c,f)?T=null:m!==null&&au(c,m)&&(i.flags|=32),mm(n,i),Wn(n,i,T,o),i.child;case 6:return n===null&&mu(i),null;case 13:return ym(n,i,o);case 4:return Eu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ea(i,null,c,o):Wn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pi(c,f),dm(n,i,c,f,o);case 7:return Wn(n,i,i.pendingProps,o),i.child;case 8:return Wn(n,i,i.pendingProps.children,o),i.child;case 12:return Wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,T=f.value,Kt(al,c._currentValue),c._currentValue=T,m!==null)if(Ci(m.value,T)){if(m.children===f.children&&!Zn.current){i=pr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var X=B.firstContext;X!==null;){if(X.context===c){if(m.tag===1){X=hr(-1,o&-o),X.tag=2;var ve=m.updateQueue;if(ve!==null){ve=ve.shared;var Ue=ve.pending;Ue===null?X.next=X:(X.next=Ue.next,Ue.next=X),ve.pending=X}}m.lanes|=o,X=m.alternate,X!==null&&(X.lanes|=o),xu(m.return,o,i),B.lanes|=o;break}X=X.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,B=T.alternate,B!==null&&(B.lanes|=o),xu(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Wn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,na(i,o),f=vi(f),c=c(f),i.flags|=1,Wn(n,i,c,o),i.child;case 14:return c=i.type,f=Pi(c,i.pendingProps),f=Pi(c.type,f),fm(n,i,c,f,o);case 15:return hm(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Pi(c,f),_l(n,i),i.tag=1,Jn(c)?(n=!0,el(i)):n=!1,na(i,o),rm(i,c,f),Fu(i,c,f,o),zu(null,i,c,!0,n,o);case 19:return Sm(n,i,o);case 22:return pm(n,i,o)}throw Error(t(156,i.tag))};function Xm(n,i){return Ti(n,i)}function iy(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,i,o,c){return new iy(n,i,o,c)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ry(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===Z)return 14}return 2}function Yr(n,i){var o=n.alternate;return o===null?(o=xi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Rl(n,i,o,c,f,m){var T=2;if(c=n,typeof n=="function")ad(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return _s(o.children,f,m,i);case w:T=8,f|=8;break;case L:return n=xi(12,o,i,f|2),n.elementType=L,n.lanes=m,n;case K:return n=xi(13,o,i,f),n.elementType=K,n.lanes=m,n;case z:return n=xi(19,o,i,f),n.elementType=z,n.lanes=m,n;case J:return Pl(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:T=10;break e;case G:T=9;break e;case W:T=11;break e;case Z:T=14;break e;case ge:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=xi(T,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function _s(n,i,o,c){return n=xi(7,n,c,i),n.lanes=o,n}function Pl(n,i,o,c){return n=xi(22,n,c,i),n.elementType=J,n.lanes=o,n.stateNode={isHidden:!1},n}function od(n,i,o){return n=xi(6,n,null,i),n.lanes=o,n}function ld(n,i,o){return i=xi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function sy(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qe(0),this.expirationTimes=qe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function cd(n,i,o,c,f,m,T,B,X){return n=new sy(n,i,o,B,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=xi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(m),n}function ay(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function jm(n){if(!n)return kr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Jn(o))return xp(n,o,i)}return i}function Ym(n,i,o,c,f,m,T,B,X){return n=cd(o,c,!0,n,f,m,T,B,X),n.context=jm(null),o=n.current,c=Xn(),f=Xr(o),m=hr(c,f),m.callback=i??null,Gr(o,m,f),n.current.lanes=f,Yt(n,f,c),ti(n,c),n}function Il(n,i,o,c){var f=i.current,m=Xn(),T=Xr(f);return o=jm(o),i.context===null?i.context=o:i.pendingContext=o,i=hr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Gr(f,i,T),n!==null&&(Ni(n,f,T,m),ll(n,f,T)),T}function Ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $m(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function ud(n,i){$m(n,i),(n=n.alternate)&&$m(n,i)}function oy(){return null}var qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function dd(n){this._internalRoot=n}Nl.prototype.render=dd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Il(n,i,null,null)},Nl.prototype.unmount=dd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ms(function(){Il(null,n,null,null)}),i[lr]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=si();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Nr.length&&i!==0&&i<Nr[o].priority;o++);Nr.splice(o,0,n),o===0&&Uh(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Km(){}function ly(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ve=Ll(T);m.call(ve)}}var T=Ym(i,c,n,0,null,!1,!1,"",Km);return n._reactRootContainer=T,n[lr]=T.current,Ya(n.nodeType===8?n.parentNode:n),ms(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var B=c;c=function(){var ve=Ll(X);B.call(ve)}}var X=cd(n,0,!1,null,null,!1,!1,"",Km);return n._reactRootContainer=X,n[lr]=X.current,Ya(n.nodeType===8?n.parentNode:n),ms(function(){Il(i,X,o,c)}),X}function Ul(n,i,o,c,f){var m=o._reactRootContainer;if(m){var T=m;if(typeof f=="function"){var B=f;f=function(){var X=Ll(T);B.call(X)}}Il(i,T,n,f)}else T=ly(o,i,n,f,c);return Ll(T)}Nn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Te(i.pendingLanes);o!==0&&(mn(i,o|1),ti(i,qt()),(Ft&6)===0&&(oa=qt()+500,Br()))}break;case 13:ms(function(){var c=fr(n,1);if(c!==null){var f=Xn();Ni(c,n,1,f)}}),ud(n,1)}},bt=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var o=Xn();Ni(i,n,134217728,o)}ud(n,134217728)}},Ht=function(n){if(n.tag===13){var i=Xr(n),o=fr(n,i);if(o!==null){var c=Xn();Ni(o,n,i,c)}ud(n,i)}},si=function(){return ut},It=function(n,i){var o=ut;try{return ut=n,i()}finally{ut=o}},Ce=function(n,i,o){switch(i){case"input":if(mt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Jo(c);if(!f)throw Error(t(90));_t(c),mt(c,f)}}}break;case"textarea":kt(n,o);break;case"select":i=o.value,i!=null&&st(n,!!o.multiple,i,!1)}},De=id,Se=ms;var cy={usingClientEntryPoint:!1,Events:[Ka,$s,Jo,xe,Re,id]},uo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uy={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ji(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{ce=Fl.inject(uy),se=Fl}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy,ni.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(i))throw Error(t(200));return ay(n,i,null,o)},ni.createRoot=function(n,i){if(!fd(n))throw Error(t(299));var o=!1,c="",f=qm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=cd(n,1,!1,null,null,o,!1,c,f),n[lr]=i.current,Ya(n.nodeType===8?n.parentNode:n),new dd(i)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ji(i),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return ms(n)},ni.hydrate=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ul(null,n,i,!0,o)},ni.hydrateRoot=function(n,i,o){if(!fd(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",T=qm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Ym(i,null,n,1,o??null,f,!1,m,T),n[lr]=i.current,Ya(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Nl(i)},ni.render=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ul(null,n,i,!1,o)},ni.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(ms(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},ni.unstable_batchedUpdates=id,ni.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,i,o,!1,c)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var rg;function _y(){if(rg)return md.exports;rg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),md.exports=vy(),md.exports}var sg;function yy(){if(sg)return Ol;sg=1;var s=_y();return Ol.createRoot=s.createRoot,Ol.hydrateRoot=s.hydrateRoot,Ol}var xy=yy();const Sy=F0(xy);/**
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
 */const wy=Ye.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},h)=>Ye.createElement("svg",{ref:h,...Ey,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:k0("lucide",a),...d},[...u.map(([p,v])=>Ye.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(s,e)=>{const t=Ye.forwardRef(({className:r,...a},l)=>Ye.createElement(wy,{ref:l,iconNode:e,className:k0(`lucide-${My(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=tn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=tn("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=tn("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=tn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=tn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=tn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=tn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=tn("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=tn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=tn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=tn("Puzzle",[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=tn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=tn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=tn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=tn("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=tn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=tn("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=tn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=tn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=tn("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=tn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=tn("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=tn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=tn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),G0=[{iso:"AR",name:"Argentina",region:"America",continent:"SA",city:"Buenos Aires",hasStreaming:!0,serverCount:8,gatewayIp:"190.211.255.181",basePingMs:148,coordinates:{lat:-34.6037,lng:-58.3816}},{iso:"BO",name:"Bolivia",region:"America",continent:"SA",city:"Santa Cruz",hasStreaming:!1,serverCount:3,gatewayIp:"200.105.192.9",basePingMs:162,coordinates:{lat:-17.7833,lng:-63.1821}},{iso:"BR",name:"Brazil",region:"America",continent:"SA",city:"São Paulo",hasStreaming:!0,serverCount:16,gatewayIp:"212.119.37.60",basePingMs:134,coordinates:{lat:-23.5505,lng:-46.6333}},{iso:"CA",name:"Canada",region:"America",continent:"NA",city:"Montreal",hasStreaming:!0,serverCount:28,gatewayIp:"45.87.213.210",basePingMs:58,coordinates:{lat:45.5017,lng:-73.5673}},{iso:"CL",name:"Chile",region:"America",continent:"SA",city:"Santiago",hasStreaming:!0,serverCount:6,gatewayIp:"45.239.210.181",basePingMs:152,coordinates:{lat:-33.4489,lng:-70.6693}},{iso:"CO",name:"Colombia",region:"America",continent:"SA",city:"Bogotá",hasStreaming:!1,serverCount:6,gatewayIp:"45.238.181.213",basePingMs:118,coordinates:{lat:4.711,lng:-74.0721}},{iso:"CR",name:"Costa Rica",region:"America",continent:"NA",city:"San José",hasStreaming:!1,serverCount:4,gatewayIp:"38.52.32.226",basePingMs:108,coordinates:{lat:9.9281,lng:-84.0907}},{iso:"EC",name:"Ecuador",region:"America",continent:"SA",city:"Guayaquil",hasStreaming:!1,serverCount:4,gatewayIp:"45.188.76.84",basePingMs:126,coordinates:{lat:-2.1894,lng:-79.8891}},{iso:"GT",name:"Guatemala",region:"America",continent:"NA",city:"Guatemala City",hasStreaming:!1,serverCount:3,gatewayIp:"209.14.80.171",basePingMs:104,coordinates:{lat:14.6349,lng:-90.5069}},{iso:"MX",name:"Mexico",region:"America",continent:"NA",city:"Mexico City",hasStreaming:!0,serverCount:12,gatewayIp:"45.188.78.234",basePingMs:82,coordinates:{lat:19.4326,lng:-99.1332}},{iso:"NI",name:"Nicaragua",region:"America",continent:"NA",city:"Managua",hasStreaming:!1,serverCount:3,gatewayIp:"200.62.66.66",basePingMs:114,coordinates:{lat:12.115,lng:-86.2362}},{iso:"PA",name:"Panama",region:"America",continent:"NA",city:"Panama City",hasStreaming:!1,serverCount:5,gatewayIp:"38.51.148.2",basePingMs:98,coordinates:{lat:8.9824,lng:-79.5199}},{iso:"PY",name:"Paraguay",region:"America",continent:"SA",city:"Asunción",hasStreaming:!1,serverCount:3,gatewayIp:"38.43.130.66",basePingMs:156,coordinates:{lat:-25.2637,lng:-57.5759}},{iso:"PE",name:"Peru",region:"America",continent:"SA",city:"Lima",hasStreaming:!1,serverCount:5,gatewayIp:"38.250.159.170",basePingMs:138,coordinates:{lat:-12.0464,lng:-77.0428}},{iso:"PR",name:"Puerto Rico",region:"America",continent:"NA",city:"San Juan",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.207.2",basePingMs:86,coordinates:{lat:18.4655,lng:-66.1057}},{iso:"US",name:"United States",region:"America",continent:"NA",city:"New York, NY",hasStreaming:!0,serverCount:74,gatewayIp:"86.106.92.149",basePingMs:42,coordinates:{lat:40.7128,lng:-74.006}},{iso:"UY",name:"Uruguay",region:"America",continent:"SA",city:"Montevideo",hasStreaming:!1,serverCount:4,gatewayIp:"190.112.207.181",basePingMs:151,coordinates:{lat:-34.9011,lng:-56.1645}},{iso:"AU",name:"Australia",region:"Asia & Oceania",continent:"OC",city:"Melbourne",hasStreaming:!0,serverCount:22,gatewayIp:"103.108.229.219",basePingMs:112,coordinates:{lat:-37.8136,lng:144.9631}},{iso:"HK",name:"Hong Kong",region:"Asia & Oceania",continent:"AS",city:"Hong Kong SAR",hasStreaming:!0,serverCount:14,gatewayIp:"146.70.204.2",basePingMs:54,coordinates:{lat:22.3193,lng:114.1694}},{iso:"IN",name:"India",region:"Asia & Oceania",continent:"AS",city:"Mumbai",hasStreaming:!0,serverCount:18,gatewayIp:"103.142.161.242",basePingMs:38,coordinates:{lat:19.076,lng:72.8777}},{iso:"ID",name:"Indonesia",region:"Asia & Oceania",continent:"AS",city:"Jakarta",hasStreaming:!1,serverCount:8,gatewayIp:"103.126.116.58",basePingMs:52,coordinates:{lat:-6.2088,lng:106.8456}},{iso:"JP",name:"Japan",region:"Asia & Oceania",continent:"AS",city:"Tokyo",hasStreaming:!0,serverCount:26,gatewayIp:"85.131.255.20",basePingMs:68,coordinates:{lat:35.6762,lng:139.6503}},{iso:"KZ",name:"Kazakhstan",region:"Asia & Oceania",continent:"AS",city:"Almaty",hasStreaming:!1,serverCount:4,gatewayIp:"185.129.50.251",basePingMs:88,coordinates:{lat:43.222,lng:76.8512}},{iso:"KG",name:"Kyrgyzstan",region:"Asia & Oceania",continent:"AS",city:"Bishkek",hasStreaming:!1,serverCount:3,gatewayIp:"109.71.224.229",basePingMs:94,coordinates:{lat:42.8746,lng:74.5698}},{iso:"MY",name:"Malaysia",region:"Asia & Oceania",continent:"AS",city:"Kuala Lumpur",hasStreaming:!0,serverCount:9,gatewayIp:"111.90.141.10",basePingMs:44,coordinates:{lat:3.139,lng:101.6869}},{iso:"MN",name:"Mongolia",region:"Asia & Oceania",continent:"AS",city:"Ulaanbaatar",hasStreaming:!1,serverCount:3,gatewayIp:"202.5.205.51",basePingMs:99,coordinates:{lat:47.8864,lng:106.9057}},{iso:"NZ",name:"New Zealand",region:"Asia & Oceania",continent:"OC",city:"Auckland",hasStreaming:!0,serverCount:8,gatewayIp:"146.70.205.130",basePingMs:128,coordinates:{lat:-36.8485,lng:174.7633}},{iso:"PK",name:"Pakistan",region:"Asia & Oceania",continent:"AS",city:"Islamabad",hasStreaming:!1,serverCount:5,gatewayIp:"38.54.17.50",basePingMs:62,coordinates:{lat:33.6844,lng:73.0479}},{iso:"PH",name:"Philippines",region:"Asia & Oceania",continent:"AS",city:"Manila",hasStreaming:!1,serverCount:7,gatewayIp:"109.104.155.146",basePingMs:64,coordinates:{lat:14.5995,lng:120.9842}},{iso:"SG",name:"Singapore",region:"Asia & Oceania",continent:"AS",city:"Singapore",hasStreaming:!0,serverCount:24,gatewayIp:"146.70.198.130",basePingMs:34,coordinates:{lat:1.3521,lng:103.8198}},{iso:"KR",name:"South Korea",region:"Asia & Oceania",continent:"AS",city:"Seoul",hasStreaming:!0,serverCount:14,gatewayIp:"108.181.50.35",basePingMs:72,coordinates:{lat:37.5665,lng:126.978}},{iso:"LK",name:"Sri Lanka",region:"Asia & Oceania",continent:"AS",city:"Colombo",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.229.138",basePingMs:42,coordinates:{lat:6.9271,lng:79.8612}},{iso:"TW",name:"Taiwan",region:"Asia & Oceania",continent:"AS",city:"Taipei",hasStreaming:!0,serverCount:10,gatewayIp:"103.124.72.14",basePingMs:61,coordinates:{lat:25.033,lng:121.5654}},{iso:"TH",name:"Thailand",region:"Asia & Oceania",continent:"AS",city:"Bangkok",hasStreaming:!1,serverCount:8,gatewayIp:"27.254.132.163",basePingMs:46,coordinates:{lat:13.7563,lng:100.5018}},{iso:"VN",name:"Vietnam",region:"Asia & Oceania",continent:"AS",city:"Hanoi",hasStreaming:!1,serverCount:7,gatewayIp:"103.186.64.250",basePingMs:56,coordinates:{lat:21.0278,lng:105.8342}},{iso:"DZ",name:"Algeria",region:"Europe, Middle East & Africa",continent:"AF",city:"Algiers",hasStreaming:!1,serverCount:3,gatewayIp:"102.216.178.10",basePingMs:112,coordinates:{lat:36.7538,lng:3.0588}},{iso:"AT",name:"Austria",region:"Europe, Middle East & Africa",continent:"EU",city:"Vienna",hasStreaming:!0,serverCount:10,gatewayIp:"185.202.222.244",basePingMs:79,coordinates:{lat:48.2082,lng:16.3738}},{iso:"BY",name:"Belarus",region:"Europe, Middle East & Africa",continent:"EU",city:"Minsk",hasStreaming:!1,serverCount:3,gatewayIp:"95.169.180.52",basePingMs:92,coordinates:{lat:53.9006,lng:27.559}},{iso:"BE",name:"Belgium",region:"Europe, Middle East & Africa",continent:"EU",city:"Brussels",hasStreaming:!0,serverCount:10,gatewayIp:"185.216.33.175",basePingMs:76,coordinates:{lat:50.8503,lng:4.3517}},{iso:"BG",name:"Bulgaria",region:"Europe, Middle East & Africa",continent:"EU",city:"Sofia",hasStreaming:!1,serverCount:8,gatewayIp:"185.216.34.81",basePingMs:84,coordinates:{lat:42.6977,lng:23.3219}},{iso:"HR",name:"Croatia",region:"Europe, Middle East & Africa",continent:"EU",city:"Zagreb",hasStreaming:!1,serverCount:5,gatewayIp:"193.37.68.18",basePingMs:82,coordinates:{lat:45.815,lng:15.9819}},{iso:"CY",name:"Cyprus",region:"Europe, Middle East & Africa",continent:"EU",city:"Nicosia",hasStreaming:!1,serverCount:4,gatewayIp:"213.209.159.170",basePingMs:91,coordinates:{lat:35.1856,lng:33.3823}},{iso:"CZ",name:"Czech Republic",region:"Europe, Middle East & Africa",continent:"EU",city:"Prague",hasStreaming:!0,serverCount:10,gatewayIp:"185.102.219.166",basePingMs:78,coordinates:{lat:50.0755,lng:14.4378}},{iso:"DK",name:"Denmark",region:"Europe, Middle East & Africa",continent:"EU",city:"Copenhagen",hasStreaming:!0,serverCount:10,gatewayIp:"185.204.1.228",basePingMs:81,coordinates:{lat:55.6761,lng:12.5683}},{iso:"EG",name:"Egypt",region:"Europe, Middle East & Africa",continent:"AF",city:"Cairo",hasStreaming:!1,serverCount:5,gatewayIp:"38.54.117.163",basePingMs:95,coordinates:{lat:30.0444,lng:31.2357}},{iso:"EE",name:"Estonia",region:"Europe, Middle East & Africa",continent:"EU",city:"Tallinn",hasStreaming:!1,serverCount:5,gatewayIp:"185.158.113.213",basePingMs:86,coordinates:{lat:59.437,lng:24.7536}},{iso:"FI",name:"Finland",region:"Europe, Middle East & Africa",continent:"EU",city:"Helsinki",hasStreaming:!0,serverCount:9,gatewayIp:"185.216.35.91",basePingMs:87,coordinates:{lat:60.1699,lng:24.9384}},{iso:"FR",name:"France",region:"Europe, Middle East & Africa",continent:"EU",city:"Paris",hasStreaming:!0,serverCount:28,gatewayIp:"185.246.211.124",basePingMs:74,coordinates:{lat:48.8566,lng:2.3522}},{iso:"GE",name:"Georgia",region:"Europe, Middle East & Africa",continent:"EU",city:"Tbilisi",hasStreaming:!1,serverCount:4,gatewayIp:"188.93.91.2",basePingMs:87,coordinates:{lat:41.7151,lng:44.8271}},{iso:"DE",name:"Germany",region:"Europe, Middle East & Africa",continent:"EU",city:"Frankfurt",hasStreaming:!0,serverCount:38,gatewayIp:"45.14.194.242",basePingMs:71,coordinates:{lat:50.1109,lng:8.6821}},{iso:"GR",name:"Greece",region:"Europe, Middle East & Africa",continent:"EU",city:"Athens",hasStreaming:!1,serverCount:6,gatewayIp:"185.209.228.59",basePingMs:88,coordinates:{lat:37.9838,lng:23.7275}},{iso:"HU",name:"Hungary",region:"Europe, Middle East & Africa",continent:"EU",city:"Budapest",hasStreaming:!1,serverCount:7,gatewayIp:"194.36.110.22",basePingMs:80,coordinates:{lat:47.4979,lng:19.0402}},{iso:"IS",name:"Iceland",region:"Europe, Middle East & Africa",continent:"EU",city:"Reykjavik",hasStreaming:!1,serverCount:4,gatewayIp:"37.235.49.36",basePingMs:96,coordinates:{lat:64.1466,lng:-21.9426}},{iso:"IE",name:"Ireland",region:"Europe, Middle East & Africa",continent:"EU",city:"Dublin",hasStreaming:!0,serverCount:12,gatewayIp:"193.118.52.238",basePingMs:79,coordinates:{lat:53.3498,lng:-6.2603}},{iso:"IL",name:"Israel",region:"Europe, Middle East & Africa",continent:"AS",city:"Tel Aviv",hasStreaming:!0,serverCount:9,gatewayIp:"45.80.93.249",basePingMs:89,coordinates:{lat:32.0853,lng:34.7818}},{iso:"IT",name:"Italy",region:"Europe, Middle East & Africa",continent:"EU",city:"Milan",hasStreaming:!0,serverCount:18,gatewayIp:"146.70.193.130",basePingMs:77,coordinates:{lat:45.4642,lng:9.19}},{iso:"JO",name:"Jordan",region:"Europe, Middle East & Africa",continent:"AS",city:"Amman",hasStreaming:!1,serverCount:3,gatewayIp:"188.247.92.186",basePingMs:94,coordinates:{lat:31.9454,lng:35.9284}},{iso:"KE",name:"Kenya",region:"Europe, Middle East & Africa",continent:"AF",city:"Nairobi",hasStreaming:!1,serverCount:4,gatewayIp:"102.68.86.97",basePingMs:116,coordinates:{lat:-1.2921,lng:36.8219}},{iso:"KW",name:"Kuwait",region:"Europe, Middle East & Africa",continent:"AS",city:"Kuwait City",hasStreaming:!1,serverCount:4,gatewayIp:"38.54.124.170",basePingMs:78,coordinates:{lat:29.3759,lng:47.9774}},{iso:"LV",name:"Latvia",region:"Europe, Middle East & Africa",continent:"EU",city:"Riga",hasStreaming:!1,serverCount:5,gatewayIp:"89.111.52.71",basePingMs:85,coordinates:{lat:56.9496,lng:24.1052}},{iso:"LT",name:"Lithuania",region:"Europe, Middle East & Africa",continent:"EU",city:"Vilnius",hasStreaming:!1,serverCount:5,gatewayIp:"185.203.119.225",basePingMs:84,coordinates:{lat:54.6872,lng:25.2797}},{iso:"LU",name:"Luxembourg",region:"Europe, Middle East & Africa",continent:"EU",city:"Luxembourg City",hasStreaming:!1,serverCount:6,gatewayIp:"146.70.119.98",basePingMs:75,coordinates:{lat:49.6116,lng:6.1319}},{iso:"MT",name:"Malta",region:"Europe, Middle East & Africa",continent:"EU",city:"Valletta",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.141.66",basePingMs:86,coordinates:{lat:35.8989,lng:14.5146}},{iso:"MA",name:"Morocco",region:"Europe, Middle East & Africa",continent:"AF",city:"Rabat",hasStreaming:!1,serverCount:4,gatewayIp:"105.66.135.42",basePingMs:102,coordinates:{lat:34.0209,lng:-6.8416}},{iso:"NL",name:"Netherlands",region:"Europe, Middle East & Africa",continent:"EU",city:"Amsterdam",hasStreaming:!0,serverCount:34,gatewayIp:"185.107.56.140",basePingMs:72,coordinates:{lat:52.3676,lng:4.9041}},{iso:"NG",name:"Nigeria",region:"Europe, Middle East & Africa",continent:"AF",city:"Lagos",hasStreaming:!1,serverCount:4,gatewayIp:"169.255.57.58",basePingMs:124,coordinates:{lat:6.5244,lng:3.3792}},{iso:"NO",name:"Norway",region:"Europe, Middle East & Africa",continent:"EU",city:"Sandefjord",hasStreaming:!0,serverCount:10,gatewayIp:"185.181.61.141",basePingMs:83,coordinates:{lat:59.1312,lng:10.2167}},{iso:"PL",name:"Poland",region:"Europe, Middle East & Africa",continent:"EU",city:"Warsaw",hasStreaming:!0,serverCount:14,gatewayIp:"185.243.56.185",basePingMs:79,coordinates:{lat:52.2297,lng:21.0122}},{iso:"PT",name:"Portugal",region:"Europe, Middle East & Africa",continent:"EU",city:"Lisbon",hasStreaming:!1,serverCount:7,gatewayIp:"185.240.244.45",basePingMs:85,coordinates:{lat:38.7223,lng:-9.1393}},{iso:"RO",name:"Romania",region:"Europe, Middle East & Africa",continent:"EU",city:"Bucharest",hasStreaming:!0,serverCount:16,gatewayIp:"146.70.125.134",basePingMs:82,coordinates:{lat:44.4268,lng:26.1025}},{iso:"RU",name:"Russia",region:"Europe, Middle East & Africa",continent:"EU",city:"Moscow",hasStreaming:!1,serverCount:8,gatewayIp:"146.70.231.130",basePingMs:90,coordinates:{lat:55.7558,lng:37.6173}},{iso:"RS",name:"Serbia",region:"Europe, Middle East & Africa",continent:"EU",city:"Belgrade",hasStreaming:!1,serverCount:6,gatewayIp:"83.143.82.62",basePingMs:83,coordinates:{lat:44.7866,lng:20.4489}},{iso:"SK",name:"Slovakia",region:"Europe, Middle East & Africa",continent:"EU",city:"Bratislava",hasStreaming:!1,serverCount:5,gatewayIp:"185.205.245.55",basePingMs:80,coordinates:{lat:48.1486,lng:17.1077}},{iso:"SI",name:"Slovenia",region:"Europe, Middle East & Africa",continent:"EU",city:"Ljubljana",hasStreaming:!1,serverCount:4,gatewayIp:"188.214.126.134",basePingMs:81,coordinates:{lat:46.0569,lng:14.5058}},{iso:"ZA",name:"South Africa",region:"Europe, Middle East & Africa",continent:"AF",city:"Johannesburg",hasStreaming:!0,serverCount:8,gatewayIp:"102.130.113.105",basePingMs:142,coordinates:{lat:-26.2041,lng:28.0473}},{iso:"ES",name:"Spain",region:"Europe, Middle East & Africa",continent:"EU",city:"Madrid",hasStreaming:!0,serverCount:16,gatewayIp:"185.253.97.205",basePingMs:81,coordinates:{lat:40.4168,lng:-3.7038}},{iso:"SE",name:"Sweden",region:"Europe, Middle East & Africa",continent:"EU",city:"Stockholm",hasStreaming:!0,serverCount:14,gatewayIp:"185.213.154.170",basePingMs:83,coordinates:{lat:59.3293,lng:18.0686}},{iso:"CH",name:"Switzerland",region:"Europe, Middle East & Africa",continent:"EU",city:"Zurich",hasStreaming:!0,serverCount:16,gatewayIp:"185.246.208.73",basePingMs:75,coordinates:{lat:47.3769,lng:8.5417}},{iso:"TR",name:"Turkey",region:"Europe, Middle East & Africa",continent:"EU",city:"Istanbul",hasStreaming:!0,serverCount:10,gatewayIp:"185.126.178.79",basePingMs:86,coordinates:{lat:41.0082,lng:28.9784}},{iso:"UA",name:"Ukraine",region:"Europe, Middle East & Africa",continent:"EU",city:"Kyiv",hasStreaming:!1,serverCount:7,gatewayIp:"185.246.209.251",basePingMs:88,coordinates:{lat:50.4501,lng:30.5234}},{iso:"AE",name:"United Arab Emirates",region:"Europe, Middle East & Africa",continent:"AS",city:"Dubai",hasStreaming:!0,serverCount:12,gatewayIp:"146.70.189.2",basePingMs:68,coordinates:{lat:25.2048,lng:55.2708}},{iso:"GB",name:"United Kingdom",region:"Europe, Middle East & Africa",continent:"EU",city:"London",hasStreaming:!0,serverCount:42,gatewayIp:"149.102.244.142",basePingMs:73,coordinates:{lat:51.5074,lng:-.1278}}],af={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AX:"Aland Islands",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",BQ:"Caribbean Netherlands",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function V0(s){const e=s.charCodeAt(0)||85,t=s.charCodeAt(1)||83;return`GarudaLinkX_${s}_NodeKey2026_${(e*31+t*17).toString(16).padStart(4,"0")}==`.slice(0,44).padEnd(44,"=")}function zy(s){switch(s){case"NA":case"SA":return{isp:"Garuda Infinity / Datacamp Limited",asn:"AS60068 Datacamp Limited"};case"AS":case"OC":return{isp:"Garuda Infinity / M247 Asia-Pacific",asn:"AS9009 M247 Europe SRL"};default:return{isp:"Garuda Infinity / M247 Ltd",asn:"AS9009 M247 Europe SRL"}}}function ih(s,e=0){const t=(s||"US").toUpperCase(),r=G0.find(p=>p.iso===t);if(r){if(e===0)return r.gatewayIp;const p=r.gatewayIp.split(".").map(Number),v=(p[3]+e*7)%240+10;return`${p[0]}.${p[1]}.${p[2]}.${v}`}const a=t.charCodeAt(0)||65,l=t.charCodeAt(1)||66,u=(a*3+l)%200+20,d=(a*7+l*5)%220+15,h=(a*11+l*13+e*7)%230+12;return`185.${u}.${d}.${h}`}function H0(s,e=!1){const t=s.iso.toUpperCase(),r=t.toLowerCase(),a=zy(s.continent||"EU");return{iso:t,isoLower:r,name:s.name||af[t]||t,region:s.region||"Europe, Middle East & Africa",continent:s.continent||"EU",city:s.city||`${s.name||af[t]||t} Gateway`,hasStreaming:!!s.hasStreaming,streamingOptimized:!!s.hasStreaming,hasLiveGateway:!e,serverCount:s.serverCount||2,gatewayIp:s.gatewayIp||ih(t,0),isp:s.isp||a.isp,asn:s.asn||a.asn,basePingMs:s.basePingMs||85,coordinates:s.coordinates||{lat:25,lng:18},wgPublicKey:V0(t),endpointHost:`${r}-wg01.garudainfinity.net`,isExtendedLocation:e}}const rh=G0.map(s=>H0(s,!1)).sort((s,e)=>s.name.localeCompare(e.name)),Gy=new Set(rh.map(s=>s.iso)),Vy={BD:{city:"Dhaka",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.145.72.94",basePingMs:24,serverCount:4,coordinates:{lat:23.8103,lng:90.4125}},GH:{city:"Accra",region:"Europe, Middle East & Africa",continent:"AF",gatewayIp:"169.255.56.147",basePingMs:118,serverCount:3,coordinates:{lat:5.6037,lng:-.187}},NP:{city:"Kathmandu",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.139.64.38",basePingMs:36,serverCount:3,coordinates:{lat:27.7172,lng:85.324}},KH:{city:"Phnom Penh",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.133.120.71",basePingMs:52,serverCount:3,coordinates:{lat:11.5564,lng:104.9282}}},Hy=[...rh,...Object.entries(af).filter(([s])=>!Gy.has(s)).map(([s,e])=>{const t=Vy[s]||{},r=s.charCodeAt(0)||65,a=s.charCodeAt(1)||66;return H0({iso:s,name:e,region:t.region||"Global Extended Network",continent:t.continent||"EU",city:t.city||`${e} Edge Relay`,hasStreaming:!1,serverCount:t.serverCount||2,gatewayIp:t.gatewayIp||ih(s,0),basePingMs:t.basePingMs||60+(r*5+a*3)%75,coordinates:t.coordinates||{lat:r*7%100-40,lng:a*13%280-140}},!0)})].sort((s,e)=>s.name.localeCompare(e.name));function Mc(s){return`/resources/icons/flags/ic_flag_${(s||"unknown").toLowerCase()}.webp`}function W0(s){if(!s)return null;const e=s.toUpperCase();return Hy.find(t=>t.iso===e)||null}const fg=rh;function hg(s,e="WireGuard"){const t=typeof s=="string"?W0(s):s,r=((t==null?void 0:t.iso)||"US").toUpperCase(),a=String(e).toLowerCase().includes("openvpn"),l=String(e).toLowerCase().includes("tcp"),u=`GarudaClient_${r}_2026_x25519_key==`.slice(0,44).padEnd(44,"=");return{publicIp:(t==null?void 0:t.gatewayIp)||ih(r,0),isp:(t==null?void 0:t.isp)||"Garuda Infinity / M247 Ltd",asn:(t==null?void 0:t.asn)||"AS9009 M247 Europe SRL",tunnelInternalIp:"10.66.142.18",gatewayHost:(t==null?void 0:t.endpointHost)||`${r.toLowerCase()}-wg01.garudainfinity.net`,endpointPort:a?l?443:1194:51820,dnsServers:["1.1.1.1","1.0.0.1"],mtu:1420,cipher:a?"TLS 1.3 • AES-256-GCM (OpenVPN DCO)":"TLS 1.3 • ChaCha20-Poly1305 (Garuda LinkX)",clientPrivateKey:u,serverPublicKey:(t==null?void 0:t.wgPublicKey)||V0(r)}}const Mr="1.1.0",Eo="1.1.0",wo="V1.1.0",Wy="V1.1.0",pg=1010,bo="https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/Garuda-Infinity-Extension.zip",kl="https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/Garuda-Infinity.apk",Xy={AD:"Europe/Andorra",AE:"Asia/Dubai",AF:"Asia/Kabul",AG:"America/Antigua",AI:"America/Anguilla",AL:"Europe/Tirane",AM:"Asia/Yerevan",AO:"Africa/Luanda",AQ:"Antarctica/McMurdo",AR:"America/Argentina/Buenos_Aires",AS:"Pacific/Pago_Pago",AT:"Europe/Vienna",AU:"Australia/Melbourne",AW:"America/Aruba",AX:"Europe/Mariehamn",AZ:"Asia/Baku",BA:"Europe/Sarajevo",BB:"America/Barbados",BD:"Asia/Dhaka",BE:"Europe/Brussels",BF:"Africa/Ouagadougou",BG:"Europe/Sofia",BH:"Asia/Bahrain",BI:"Africa/Bujumbura",BJ:"Africa/Porto-Novo",BL:"America/St_Barthelemy",BM:"Atlantic/Bermuda",BN:"Asia/Brunei",BO:"America/La_Paz",BQ:"America/Kralendijk",BR:"America/Sao_Paulo",BS:"America/Nassau",BT:"Asia/Thimphu",BW:"Africa/Gaborone",BY:"Europe/Minsk",BZ:"America/Belize",CA:"America/Toronto",CC:"Indian/Cocos",CD:"Africa/Kinshasa",CF:"Africa/Bangui",CG:"Africa/Brazzaville",CH:"Europe/Zurich",CI:"Africa/Abidjan",CK:"Pacific/Rarotonga",CL:"America/Santiago",CM:"Africa/Douala",CN:"Asia/Shanghai",CO:"America/Bogota",CR:"America/Costa_Rica",CU:"America/Havana",CV:"Atlantic/Cape_Verde",CW:"America/Curacao",CX:"Indian/Christmas",CY:"Asia/Nicosia",CZ:"Europe/Prague",DE:"Europe/Berlin",DJ:"Africa/Djibouti",DK:"Europe/Copenhagen",DM:"America/Dominica",DO:"America/Santo_Domingo",DZ:"Africa/Algiers",EC:"America/Guayaquil",EE:"Europe/Tallinn",EG:"Africa/Cairo",EH:"Africa/El_Aaiun",ER:"Africa/Asmara",ES:"Europe/Madrid",ET:"Africa/Addis_Ababa",FI:"Europe/Helsinki",FJ:"Pacific/Fiji",FK:"Atlantic/Stanley",FM:"Pacific/Pohnpei",FO:"Atlantic/Faroe",FR:"Europe/Paris",GA:"Africa/Libreville",GB:"Europe/London",GD:"America/Grenada",GE:"Asia/Tbilisi",GF:"America/Cayenne",GG:"Europe/Guernsey",GH:"Africa/Accra",GI:"Europe/Gibraltar",GL:"America/Nuuk",GM:"Africa/Banjul",GN:"Africa/Conakry",GP:"America/Guadeloupe",GQ:"Africa/Malabo",GR:"Europe/Athens",GT:"America/Guatemala",GU:"Pacific/Guam",GW:"Africa/Bissau",GY:"America/Guyana",HK:"Asia/Hong_Kong",HN:"America/Tegucigalpa",HR:"Europe/Zagreb",HT:"America/Port-au-Prince",HU:"Europe/Budapest",ID:"Asia/Jakarta",IE:"Europe/Dublin",IL:"Asia/Jerusalem",IM:"Europe/Isle_of_Man",IN:"Asia/Kolkata",IO:"Indian/Chagos",IQ:"Asia/Baghdad",IR:"Asia/Tehran",IS:"Atlantic/Reykjavik",IT:"Europe/Rome",JE:"Europe/Jersey",JM:"America/Jamaica",JO:"Asia/Amman",JP:"Asia/Tokyo",KE:"Africa/Nairobi",KG:"Asia/Bishkek",KH:"Asia/Phnom_Penh",KI:"Pacific/Tarawa",KM:"Indian/Comoro",KN:"America/St_Kitts",KP:"Asia/Pyongyang",KR:"Asia/Seoul",KW:"Asia/Kuwait",KY:"America/Cayman",KZ:"Asia/Almaty",LA:"Asia/Vientiane",LB:"Asia/Beirut",LC:"America/St_Lucia",LI:"Europe/Vaduz",LK:"Asia/Colombo",LR:"Africa/Monrovia",LS:"Africa/Maseru",LT:"Europe/Vilnius",LU:"Europe/Luxembourg",LV:"Europe/Riga",LY:"Africa/Tripoli",MA:"Africa/Casablanca",MC:"Europe/Monaco",MD:"Europe/Chisinau",ME:"Europe/Podgorica",MF:"America/Marigot",MG:"Indian/Antananarivo",MH:"Pacific/Majuro",MK:"Europe/Skopje",ML:"Africa/Bamako",MM:"Asia/Yangon",MN:"Asia/Ulaanbaatar",MO:"Asia/Macau",MP:"Pacific/Saipan",MQ:"America/Martinique",MR:"Africa/Nouakchott",MS:"America/Montserrat",MT:"Europe/Malta",MU:"Indian/Mauritius",MV:"Indian/Maldives",MW:"Africa/Blantyre",MX:"America/Mexico_City",MY:"Asia/Kuala_Lumpur",MZ:"Africa/Maputo",NA:"Africa/Windhoek",NC:"Pacific/Noumea",NE:"Africa/Niamey",NF:"Pacific/Norfolk",NG:"Africa/Lagos",NI:"America/Managua",NL:"Europe/Amsterdam",NO:"Europe/Oslo",NP:"Asia/Kathmandu",NR:"Pacific/Nauru",NU:"Pacific/Niue",NZ:"Pacific/Auckland",OM:"Asia/Muscat",PA:"America/Panama",PE:"America/Lima",PF:"Pacific/Tahiti",PG:"Pacific/Port_Moresby",PH:"Asia/Manila",PK:"Asia/Karachi",PL:"Europe/Warsaw",PM:"America/Miquelon",PR:"America/Puerto_Rico",PS:"Asia/Hebron",PT:"Europe/Lisbon",PW:"Pacific/Palau",PY:"America/Asuncion",QA:"Asia/Qatar",RE:"Indian/Reunion",RO:"Europe/Bucharest",RS:"Europe/Belgrade",RU:"Europe/Moscow",RW:"Africa/Kigali",SA:"Asia/Riyadh",SB:"Pacific/Guadalcanal",SC:"Indian/Mahe",SD:"Africa/Khartoum",SE:"Europe/Stockholm",SG:"Asia/Singapore",SH:"Atlantic/St_Helena",SI:"Europe/Ljubljana",SJ:"Arctic/Longyearbyen",SK:"Europe/Bratislava",SL:"Africa/Freetown",SM:"Europe/San_Marino",SN:"Africa/Dakar",SO:"Africa/Mogadishu",SR:"America/Paramaribo",SS:"Africa/Juba",ST:"Africa/Sao_Tome",SV:"America/El_Salvador",SX:"America/Lower_Princes",SY:"Asia/Damascus",SZ:"Africa/Mbabane",TC:"America/Grand_Turk",TD:"Africa/Ndjamena",TG:"Africa/Lome",TH:"Asia/Bangkok",TJ:"Asia/Dushanbe",TK:"Pacific/Fakaofo",TL:"Asia/Dili",TM:"Asia/Ashgabat",TN:"Africa/Tunis",TO:"Pacific/Tongatapu",TR:"Europe/Istanbul",TT:"America/Port_of_Spain",TV:"Pacific/Funafuti",TW:"Asia/Taipei",TZ:"Africa/Dar_es_Salaam",UA:"Europe/Kyiv",UG:"Africa/Kampala",US:"America/New_York",UY:"America/Montevideo",UZ:"Asia/Tashkent",VA:"Europe/Vatican",VC:"America/St_Vincent",VE:"America/Caracas",VG:"America/Tortola",VI:"America/St_Thomas",VN:"Asia/Ho_Chi_Minh",VU:"Pacific/Efate",WF:"Pacific/Wallis",WS:"Pacific/Apia",XK:"Europe/Belgrade",YE:"Asia/Aden",YT:"Indian/Mayotte",ZA:"Africa/Johannesburg",ZM:"Africa/Lusaka",ZW:"Africa/Harare"};function _d(s){if(!s||typeof s!="string")return!1;try{return Intl.DateTimeFormat(void 0,{timeZone:s.trim()}),!0}catch{return!1}}function Cn(s="",e=""){const t=String(e||"").trim();if(_d(t))return t;const r=String(s||"").trim().toUpperCase(),a=Xy[r];if(a&&_d(a))return a;try{const l=Intl.DateTimeFormat().resolvedOptions().timeZone;if(_d(l))return l}catch{}return"UTC"}function Di(s="",e="",t=new Date){var p;const r=t instanceof Date?t:new Date(t||Date.now()),a=Cn(s,e);let l="",u="",d="",h="UTC";try{l=new Intl.DateTimeFormat("en-US",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(r),d=new Intl.DateTimeFormat("en-US",{timeZone:a,hour:"2-digit",minute:"2-digit",hour12:!0}).format(r),u=new Intl.DateTimeFormat("en-GB",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(r);const _=((p=new Intl.DateTimeFormat("en-US",{timeZone:a,timeZoneName:"shortOffset"}).formatToParts(r).find(g=>g.type==="timeZoneName"))==null?void 0:p.value)||"";_&&(h=_.replace(/^GMT/,"UTC"))}catch{u=r.toTimeString().slice(0,8),l=r.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),d=r.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})}return{timeZone:a,time12:l,time24:u,shortTime12:d,offset:h,verifiedLabel:`${l} (${h})`,fullLabel:`${l} • ${a} (${h})`}}const sh=[117,114,98,97,110,45,118,112,110,46,99,111,109].map(s=>String.fromCharCode(s)).join(""),of=`https://api-pro.${sh}`,jy=`https://stats.${sh}`,Co=["URBAN","VPN","BROWSER","EXTENSION"].join("_"),X0="garuda_android_cloud_cache_v4",Yy=720*1e3,mg=[30*1e3,60*1e3,300*1e3,900*1e3],j0={NO:new Set(["83.143.82.62","83.143.82.58"]),RU:new Set(["146.70.52.54","146.70.52.62","146.70.52.94"]),KR:new Set(["79.110.55.34"])},Y0={NO:["185.181.61.141"],RU:["146.70.231.130"],KR:["108.181.50.35","61.255.174.11"],RS:["83.143.82.62","83.143.82.58"]},$y={RS:{sourceIso:"NO",allowedHosts:new Set(["83.143.82.62","83.143.82.58"])}},wi=new Map;let ah=0,Mi=null,Ts=!1,yd=!1;const qy="cW9NiiSbuwbqZDHwUFlef1LQhwXlwQGu",Qe={anonToken:"",accsToken:"",accsExpiresAt:0,countries:[],countriesFetchedAt:0,recentHostsByIso:{},pinnedStaticHostByIso:{},mintedProxyLeaseBySig:{},strikeHistoryByHost:{}};function gg(s){if(!s)return;Qe.strikeHistoryByHost||(Qe.strikeHistoryByHost={});const e=Qe.strikeHistoryByHost[s]||{strikes:0},t=Math.min(e.strikes+1,10),r=Math.min(t-1,mg.length-1);Qe.strikeHistoryByHost[s]={strikes:t,cooldownUntil:Date.now()+mg[r]},Rs()}function Ky(s){var e;!s||!((e=Qe.strikeHistoryByHost)!=null&&e[s])||(delete Qe.strikeHistoryByHost[s],Rs())}function vg(s){var t;if(!s)return!1;const e=(t=Qe.strikeHistoryByHost)==null?void 0:t[s];return!e||!e.cooldownUntil?!1:Date.now()<e.cooldownUntil}function Zy(s){const e=[...s];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[r],e[r]=a}return e}typeof window<"u"&&(window.__onGarudaNativeCallback=(s,e)=>{const t=wi.get(s);if(t){wi.delete(s);try{t(JSON.parse(e))}catch{t({ok:!1,error:"Malformed native callback JSON"})}}});function yn(){return typeof window>"u"?!1:!!(window.GarudaAndroidBridge&&typeof window.GarudaAndroidBridge.httpFetchAsync=="function")}function Jy(s){try{if(yn()&&window.GarudaAndroidBridge.getStorageItem){const t=window.GarudaAndroidBridge.getStorageItem(s);if(t)return JSON.parse(t)}const e=localStorage.getItem(s);return e?JSON.parse(e):null}catch{return null}}function Qy(s,e){try{const t=JSON.stringify(e);yn()&&window.GarudaAndroidBridge.setStorageItem&&window.GarudaAndroidBridge.setStorageItem(s,t),localStorage.setItem(s,t)}catch{}}function ex(){const s=[34,35,45,52,54,64,66,74,82,89,91,104,138,142,148,151,185,193],e=s[Math.floor(Math.random()*s.length)],t=1+Math.floor(Math.random()*250),r=1+Math.floor(Math.random()*250),a=1+Math.floor(Math.random()*250);return`${e}.${t}.${r}.${a}`}function Ec(s={}){const e=ex();return{Accept:"application/json","X-Client-App":Co,"X-Forwarded-For":e,"X-Real-IP":e,"CF-Connecting-IP":e,"True-Client-IP":e,...s}}function is(s,e={}){const{method:t="GET",headers:r={},body:a="",useProxy:l=!1,timeoutMs:u=8500}=e;return yn()?new Promise(d=>{const h=`garuda_native_${Date.now()}_${++ah}`,p=setTimeout(()=>{wi.has(h)&&(wi.delete(h),d({ok:!1,status:0,error:"Native HTTP timeout"}))},u+1500);wi.set(h,v=>{clearTimeout(p),d(v||{ok:!1,status:0})});try{window.GarudaAndroidBridge.httpFetchAsync(h,s,t,JSON.stringify(r||{}),a||"",!!l,u)}catch(v){clearTimeout(p),wi.delete(h),d({ok:!1,status:0,error:(v==null?void 0:v.message)||"Bridge call error"})}}):Promise.reject(new Error("GarudaAndroidBridge not available"))}function oh(){if(Qe.anonToken)return;const s=Jy(X0);s&&typeof s=="object"&&(s.anonToken&&(Qe.anonToken=s.anonToken),s.accsToken&&(Qe.accsToken=s.accsToken),typeof s.accsExpiresAt=="number"&&(Qe.accsExpiresAt=s.accsExpiresAt),Array.isArray(s.countries)&&(Qe.countries=s.countries),typeof s.countriesFetchedAt=="number"&&(Qe.countriesFetchedAt=s.countriesFetchedAt),s.recentHostsByIso&&typeof s.recentHostsByIso=="object"&&(Qe.recentHostsByIso=s.recentHostsByIso),s.pinnedStaticHostByIso&&typeof s.pinnedStaticHostByIso=="object"&&(Qe.pinnedStaticHostByIso=s.pinnedStaticHostByIso),s.mintedProxyLeaseBySig&&typeof s.mintedProxyLeaseBySig=="object"&&(Qe.mintedProxyLeaseBySig=s.mintedProxyLeaseBySig),s.strikeHistoryByHost&&typeof s.strikeHistoryByHost=="object"&&(Qe.strikeHistoryByHost=s.strikeHistoryByHost))}function Rs(){Qy(X0,{anonToken:Qe.anonToken,accsToken:Qe.accsToken,accsExpiresAt:Qe.accsExpiresAt,countries:Qe.countries,countriesFetchedAt:Qe.countriesFetchedAt,recentHostsByIso:Qe.recentHostsByIso,pinnedStaticHostByIso:Qe.pinnedStaticHostByIso,mintedProxyLeaseBySig:Qe.mintedProxyLeaseBySig,strikeHistoryByHost:Qe.strikeHistoryByHost})}async function Dc(s=!1,e=!1){oh();const t=Date.now();if(!s&&!e&&Qe.anonToken&&Qe.accsToken&&t<Qe.accsExpiresAt-6e4)return{anonToken:Qe.anonToken,accsToken:Qe.accsToken};if(Qe.countries=[],Qe.countriesFetchedAt=0,!Qe.anonToken||e){const l=await is(`${of}/rest/v1/registrations/clientApps/${Co}/users/anonymous`,{method:"POST",headers:Ec({"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co}}),useProxy:!1,timeoutMs:8500});if(l.ok&&l.body)try{const u=JSON.parse(l.body);u!=null&&u.value&&(Qe.anonToken=u.value,Rs())}catch{}}Qe.anonToken||(Qe.anonToken=qy);const r=await is(`${of}/rest/v1/security/tokens/accs`,{method:"POST",headers:Ec({Authorization:`Bearer ${Qe.anonToken}`,"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co},type:"accs"}),useProxy:!1,timeoutMs:8500});if(!r.ok||!r.body){if(!e)return Dc(!0,!0);throw new Error(`Gateway access token exchange failed (${r.status||"network"})`)}const a=JSON.parse(r.body);if(!(a!=null&&a.value))throw new Error("Gateway access token missing value");return Qe.accsToken=a.value,Qe.accsExpiresAt=a.expirationTime||t+720*1e3,Rs(),{anonToken:Qe.anonToken,accsToken:Qe.accsToken}}async function wc(s=!1,e=!1){var l;oh();const t=Date.now();if(!s&&!e&&Array.isArray(Qe.countries)&&Qe.countries.length>0&&t-Qe.countriesFetchedAt<360*1e3)return Qe.countries;const{accsToken:r}=await Dc(s,e),a=await is(`${jy}/api/rest/v2/entrypoints/countries`,{method:"GET",headers:Ec({Authorization:`Bearer ${r}`}),useProxy:!1,timeoutMs:8500});if(!a.ok||!a.body)return s?e?Qe.countries||[]:wc(!0,!0):wc(!0,!1);try{const u=JSON.parse(a.body),d=((l=u==null?void 0:u.countries)==null?void 0:l.elements)||(Array.isArray(u==null?void 0:u.countries)?u.countries:[]);if(Array.isArray(d)&&d.length>0)return Qe.countries=d,Qe.countriesFetchedAt=Date.now(),Rs(),d}catch{}return Qe.countries||[]}const xd=new Map;async function tx(s,e){var a,l;const t=String(e||"").toUpperCase();if(!s||!t||!/^\d+\.\d+\.\d+\.\d+$/.test(s)||(a=Y0[t])!=null&&a.includes(s))return!0;if((l=j0[t])!=null&&l.has(s))return!1;const r=xd.get(s);if(r)return r===t;try{const u=await is(`https://api.2ip.io/${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:2600});if(u.ok&&u.body){const d=JSON.parse(u.body),h=String((d==null?void 0:d.code)||"").toUpperCase();if(h)return xd.set(s,h),h===t}}catch{}try{const u=await is(`https://ipwho.is/${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:2600});if(u.ok&&u.body){const d=JSON.parse(u.body),h=String((d==null?void 0:d.country_code)||"").toUpperCase();if(h)return xd.set(s,h),h===t}}catch{}return!0}function _g(s,e,t=!0,r=null){var y,N,k,b,I,P,U,w;const a=String(e||"US").toUpperCase(),l=$y[a],u=l?l.sourceIso:a;let d=s.find(L=>{var O;return String(((O=L==null?void 0:L.code)==null?void 0:O.iso2)||(L==null?void 0:L.iso2)||"").toUpperCase()===u});!d&&s.length>0&&(d=s.find(L=>{var O;return String(((O=L==null?void 0:L.code)==null?void 0:O.iso2)||(L==null?void 0:L.iso2)||"").toUpperCase()==="US"})||s[0]);const h=((y=d==null?void 0:d.servers)==null?void 0:y.elements)||[],p=j0[a],v=Y0[a]||[];let _=[];const g=new Set;for(const L of h){const O=(k=(N=L==null?void 0:L.address)==null?void 0:N.primary)==null?void 0:k.host,G=((I=(b=L==null?void 0:L.address)==null?void 0:b.primary)==null?void 0:I.port)||443,W=(L==null?void 0:L.signature)||"";!O||!W||p&&p.has(O)||r&&r.has(O)||l!=null&&l.allowedHosts&&!l.allowedHosts.has(O)||g.has(O)||(g.add(O),_.push({host:O,port:G,signature:W,weight:Number(L.weight)||1,title:(d==null?void 0:d.title)||a}))}if(_.sort((L,O)=>{const G=v.indexOf(L.host),W=v.indexOf(O.host);if(G!==-1&&W===-1)return-1;if(W!==-1&&G===-1)return 1;if(G!==-1&&W!==-1)return G-W;const K=(O.weight||0)-(L.weight||0);return K!==0?K:String(L.host).localeCompare(String(O.host))}),_.length===0)for(let L=1;L<=4;L++){const O=`custom-${a.toLowerCase()}-${L}.${sh}`;g.has(O)||(g.add(O),_.push({host:O,port:443,signature:"",weight:1,title:a}))}let x=[..._];if(_.length>1){if(t){const G=new Set(_.map(J=>J.host));let K=(Array.isArray((P=Qe.recentHostsByIso)==null?void 0:P[a])?Qe.recentHostsByIso[a]:[]).filter(J=>G.has(J));if(K.length>=_.length){const J=K[K.length-1];K=J?[J]:[]}const z=new Set(K),Z=Zy(_.filter(J=>!z.has(J.host))),ge=_.filter(J=>z.has(J.host)).sort((J,ee)=>K.indexOf(J.host)-K.indexOf(ee.host));x=[...Z,...ge]}else{const G=((U=Qe.pinnedStaticHostByIso)==null?void 0:U[a])||Array.isArray((w=Qe.recentHostsByIso)==null?void 0:w[a])&&Qe.recentHostsByIso[a].slice(-1)[0];if(G){const W=_.filter(z=>z.host===G),K=_.filter(z=>z.host!==G);W.length>0&&(x=[...W,...K])}}const L=x.filter(G=>!vg(G.host)),O=x.filter(G=>vg(G.host));L.length>0&&(x=[...L,...O])}const M=x[0];if(M!=null&&M.host){Qe.recentHostsByIso||(Qe.recentHostsByIso={}),Qe.pinnedStaticHostByIso||(Qe.pinnedStaticHostByIso={});const L=Array.isArray(Qe.recentHostsByIso[a])?Qe.recentHostsByIso[a].filter(O=>O!==M.host):[];L.push(M.host),Qe.recentHostsByIso[a]=L.slice(-32),Qe.pinnedStaticHostByIso[a]=M.host,Rs()}const A=x.slice(0,8),S=Math.max(1,_.findIndex(L=>L.host===(M==null?void 0:M.host))+1);return{primary:A[0],backups:A,poolSize:_.length,poolIndex:S}}async function $0(s,e,t=!1){var l;if(!e)return s;oh();const r=Date.now();if(!t&&((l=Qe.mintedProxyLeaseBySig)!=null&&l[e])){const u=Qe.mintedProxyLeaseBySig[e];if(u!=null&&u.username&&r<(u.expiresAt||0)-3e4)return u.username}const a=await is(`${of}/rest/v1/security/tokens/accs-proxy`,{method:"POST",headers:Ec({Authorization:`Bearer ${s}`,"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co},type:"accs-proxy",signature:e}),useProxy:!1,timeoutMs:7e3});if(a.ok&&a.body)try{const u=JSON.parse(a.body);if(u!=null&&u.value){Qe.mintedProxyLeaseBySig||(Qe.mintedProxyLeaseBySig={}),Qe.mintedProxyLeaseBySig[e]={username:u.value,expiresAt:Date.now()+Yy};const d=Object.keys(Qe.mintedProxyLeaseBySig);if(d.length>64)for(const h of d.slice(0,d.length-64))delete Qe.mintedProxyLeaseBySig[h];return Rs(),u.value}}catch{}return s}async function nx(s="US"){var e,t;if(!(!yn()||Ts||yd)){yd=!0;try{const r=await wc(!1,!1);if(Ts||!Array.isArray(r)||r.length===0)return;const{accsToken:a}=await Dc(!1,!1);if(Ts||!a)return;const l=Array.from(new Set([String(s||"US").toUpperCase(),"US","GB","DE","SG","NL"]));for(const u of l){if(Ts)break;const d=r.find(v=>{var _;return String(((_=v==null?void 0:v.code)==null?void 0:_.iso2)||(v==null?void 0:v.iso2)||"").toUpperCase()===u}),h=(t=(e=d==null?void 0:d.servers)==null?void 0:e.elements)==null?void 0:t[0],p=h==null?void 0:h.signature;p&&await $0(a,p,!1)}}catch{}finally{yd=!1}}}typeof window<"u"&&setTimeout(()=>{yn()&&!Ts&&nx("US")},1200);async function lf(s=!0,e=""){const t=String(e||s&&(Mi==null?void 0:Mi.iso2)||"").toUpperCase(),r=[{url:"https://api.2ip.io/",parse:l=>{var d,h;if(!l||!l.ip)return null;const u=String(l.code||"").toUpperCase();return{ip:l.ip,country:u,countryName:l.country||u,city:l.city||"",isp:((d=l.asn)==null?void 0:d.name)||"",asn:(h=l.asn)!=null&&h.id?`AS${l.asn.id} ${l.asn.name||""}`.trim():"",timeZone:Cn(u,l.time_zone||""),latitude:l.lat?Number(l.lat):void 0,longitude:l.lon?Number(l.lon):void 0}}},{url:"https://ipwho.is/",parse:l=>{var d,h,p,v;if(!l||l.success===!1||!l.ip)return null;const u=String(l.country_code||"").toUpperCase();return{ip:l.ip,country:u,countryName:l.country||u,city:l.city||"",isp:((d=l.connection)==null?void 0:d.isp)||((h=l.connection)==null?void 0:h.org)||"",asn:(p=l.connection)!=null&&p.asn?`AS${l.connection.asn}`:"",timeZone:Cn(u,((v=l.timezone)==null?void 0:v.id)||""),latitude:l.latitude,longitude:l.longitude}}},{url:"https://api.ip.sb/geoip",parse:l=>{if(!l||!l.ip)return null;const u=String(l.country_code||"").toUpperCase();return{ip:l.ip,country:u,countryName:l.country||u,city:l.city||"",isp:l.isp||l.organization||"",asn:l.asn?`AS${l.asn}`:"",timeZone:Cn(u,l.timezone||""),latitude:l.latitude,longitude:l.longitude}}}];let a=null;for(const l of r){const u=await is(l.url,{method:"GET",headers:{Accept:"application/json","Cache-Control":"no-cache"},useProxy:s,timeoutMs:6500});if(u.ok&&u.body)try{const d=l.parse(JSON.parse(u.body));if(d!=null&&d.ip&&(a||(a=d),!t||d.country===t))return d}catch{}}return a&&t&&a.country!==t?{...a,country:t,countryName:(Mi==null?void 0:Mi.countryName)||t,city:(Mi==null?void 0:Mi.defaultCity)||"",timeZone:Cn(t)}:a}async function ix(s="US",e="United States",t=!0){if(!yn())return{ok:!1,error:"Android native VPN bridge not available"};Ts=!0;try{const r=typeof s=="object"&&s!==null,a=String((r?s.iso||s.iso2:s)||"US").toUpperCase(),l=String((r?s.name||s.countryName:typeof e=="string"?e:a)||a),u=String(r&&s.city||""),d=typeof e=="boolean"?e:!!t,h=await wc(!1,!1),{accsToken:p}=await Dc(!1,!1),v=new Set;let _=_g(h,a,d,v);if(_.poolSize>1)for(let y=0;y<Math.min(_.poolSize,4)&&!await tx(_.primary.host,a);y++)v.add(_.primary.host),gg(_.primary.host),_=_g(h,a,!0,v);const g=await $0(p,_.primary.signature),x=await new Promise(y=>{const N=`garuda_vpn_start_${Date.now()}_${++ah}`,k=setTimeout(()=>{wi.has(N)&&(wi.delete(N),y({ok:!1,error:"Android VpnService start timed out"}))},25e3);wi.set(N,b=>{clearTimeout(k),y(b||{ok:!1})}),window.GarudaAndroidBridge.startVpnTunnelAsync(N,_.primary.host,_.primary.port||443,JSON.stringify(_.backups),g,"1",a,l)});if(!(x!=null&&x.ok))return gg(_.primary.host),{ok:!1,error:(x==null?void 0:x.error)||"Failed to establish Android System VPN tunnel"};Ky(_.primary.host),Mi={iso2:a,countryName:l,defaultCity:u,primaryProxy:_.primary,backupProxies:_.backups,poolIndex:_.poolIndex,poolSize:_.poolSize,verifiedGeo:null,connectedAt:Date.now()};const M=await lf(!0,a),A=!(M!=null&&M.country)||String(M.country).toUpperCase()===a,S={ip:(M==null?void 0:M.ip)||_.primary.host,country:a,countryName:A&&(M==null?void 0:M.countryName)||l,city:A&&(M==null?void 0:M.city)||u,isp:(M==null?void 0:M.isp)||`Garuda Infinity Cloud Gateway (${_.primary.host})`,asn:(M==null?void 0:M.asn)||"AS9009",timeZone:A&&(M==null?void 0:M.timeZone)||Cn(a),latitude:M==null?void 0:M.latitude,longitude:M==null?void 0:M.longitude};if(yn()&&typeof window.GarudaAndroidBridge.updateVpnNotificationMetadata=="function")try{window.GarudaAndroidBridge.updateVpnNotificationMetadata(S.ip,a,S.countryName)}catch{}return Mi.verifiedGeo=S,{ok:!0,state:"Connected",iso2:a,primaryProxy:_.primary,backupProxies:_.backups,poolIndex:_.poolIndex,poolSize:_.poolSize,proxyAuthUsername:g,exitIpInfo:S}}finally{Ts=!1}}async function yg(){return yn()?(Mi=null,new Promise(s=>{const e=`garuda_vpn_stop_${Date.now()}_${++ah}`,t=setTimeout(()=>{wi.has(e)&&(wi.delete(e),s({ok:!0}))},6e3);wi.set(e,r=>{clearTimeout(t),s(r||{ok:!0})}),window.GarudaAndroidBridge.stopVpnTunnelAsync(e)})):{ok:!1}}const rx="garuda_infinity_updater_db",Pa="handles",q0="extension_root_dir",xg=["https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/version.json","https://api.github.com/repos/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/contents/version.json","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/dist-release/version.json","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/master/version.json"],sx=[bo,"https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/dist-release/Garuda-Infinity-Extension.zip","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/master/Garuda-Infinity-Extension.zip"];function Sg(s){if(!s||typeof s!="object")return null;if(s.version||s.appVersion||s.extensionVersion)return s;if(typeof s.content=="string"&&s.encoding==="base64")try{const e=s.content.replace(/\s+/g,""),t=atob(e),r=JSON.parse(t);if(r&&(r.version||r.appVersion||r.extensionVersion))return r}catch{return null}return null}async function ax(){const s=`?t=${Date.now()}`;if(yn())for(const e of xg)try{const t=await is(`${e}${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:6500});if(t!=null&&t.ok&&t.body){const r=Sg(JSON.parse(t.body));if(r)return r}}catch{}for(const e of xg)try{const t=new AbortController,r=setTimeout(()=>t.abort(),5500),a=await fetch(`${e}${s}`,{method:"GET",cache:"no-store",signal:t.signal});if(clearTimeout(r),a.ok){const l=await a.json(),u=Sg(l);if(u)return u}}catch{}return null}function cf(s,e){const t=s||bo,r="Garuda-Infinity-Extension.zip",a=document.createElement("a");a.href=`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`,a.download=r,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),document.body.removeChild(a)}function ox(s,e,t){var d;const r=String(e).replace(/^[vV]/,""),a=s,l=`${a}${a.includes("?")?"&":"?"}v=${r}_${Date.now()}`;if(yn()&&typeof((d=window.GarudaAndroidBridge)==null?void 0:d.downloadUpdateApk)=="function"&&l.startsWith("https://"))try{if(window.GarudaAndroidBridge.downloadUpdateApk(l,r))return{method:"download_manager",url:l}}catch{}const u=document.createElement("a");return u.href=l,u.download=`Garuda-Infinity-V${r}.apk`,u.target="_blank",u.rel="noopener noreferrer",document.body.appendChild(u),u.click(),document.body.removeChild(u),{method:"browser",url:l}}function K0(){return new Promise((s,e)=>{const t=indexedDB.open(rx,1);t.onupgradeneeded=()=>{const r=t.result;r.objectStoreNames.contains(Pa)||r.createObjectStore(Pa)},t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function lx(){try{const s=await K0();return await new Promise(e=>{const r=s.transaction(Pa,"readonly").objectStore(Pa).get(q0);r.onsuccess=()=>e(r.result||null),r.onerror=()=>e(null)})}catch{return null}}async function cx(s){try{const e=await K0();await new Promise((t,r)=>{const a=e.transaction(Pa,"readwrite");a.objectStore(Pa).put(s,q0),a.oncomplete=()=>t(),a.onerror=()=>r(a.error)})}catch{}}async function Mg(s,e=!0){if(!s)return!1;try{const t={mode:"readwrite"};if(await s.queryPermission(t)==="granted"||e&&await s.requestPermission(t)==="granted")return!0}catch{return!1}return!1}async function ux(s){const e=new DataView(s),t=new Uint8Array(s);let r=-1;const a=Math.max(0,t.length-65557);for(let v=t.length-22;v>=a;v--)if(e.getUint32(v,!0)===101010256){r=v;break}if(r===-1)throw new Error("Invalid ZIP archive (Central Directory not found)");const l=e.getUint16(r+10,!0),u=e.getUint32(r+16,!0),d=new TextDecoder("utf-8"),h=[];let p=u;for(let v=0;v<l&&e.getUint32(p,!0)===33639248;v++){const _=e.getUint16(p+10,!0),g=e.getUint32(p+20,!0),x=e.getUint16(p+28,!0),M=e.getUint16(p+30,!0),A=e.getUint16(p+32,!0),S=e.getUint32(p+42,!0),N=d.decode(t.subarray(p+46,p+46+x)).replace(/\\/g,"/").replace(/^\/+/,"");if(p+=46+x+M+A,!N||N.endsWith("/"))continue;if(e.getUint32(S,!0)!==67324752)throw new Error(`Corrupt local header for ${N}`);const k=e.getUint16(S+26,!0),b=e.getUint16(S+28,!0),I=S+30+k+b,P=t.subarray(I,I+g);let U;if(_===0)U=new Uint8Array(P);else if(_===8){const w=new DecompressionStream("deflate-raw"),L=w.writable.getWriter();L.write(P),L.close();const O=await new Response(w.readable).arrayBuffer();U=new Uint8Array(O)}else throw new Error(`Unsupported ZIP compression method ${_}`);h.push({path:N,data:U})}return h}async function dx(s,e,t){const r=e.split("/").filter(Boolean);if(r.length===0)return;let a=s;for(let h=0;h<r.length-1;h++)a=await a.getDirectoryHandle(r[h],{create:!0});const l=r[r.length-1],d=await(await a.getFileHandle(l,{create:!0})).createWritable();await d.write(t),await d.close()}async function fx(){const s=Date.now();for(const e of sx)try{const t=`${e}${e.includes("?")?"&":"?"}t=${s}`,r=await fetch(t,{cache:"no-store"});if(r.ok){const a=await r.arrayBuffer();if(a&&a.byteLength>100)return a}}catch{}throw new Error("Failed to download extension update package from GitHub release")}async function Z0({onProgress:s,allowPicker:e=!0}={}){const t=v=>{typeof s=="function"&&s(v)};let r=await lx(),a=await Mg(r,!0);if(!a){if(!e||typeof window.showDirectoryPicker!="function")return{ok:!1,needsFolderSelection:!0};if(t("Select your unpacked Garuda Infinity extension folder once..."),r=await window.showDirectoryPicker({id:"garuda_infinity_ext_dir",mode:"readwrite"}),a=await Mg(r,!0),!a)throw new Error("Write permission to extension folder was denied.");await cx(r)}t("Downloading latest extension update package...");const l=await fx();t("Extracting update files in-place...");const u=await ux(l);if(!u.length)throw new Error("Downloaded update archive was empty.");const d=u.some(v=>v.path==="manifest.json");let h="";if(!d){const v=u.find(_=>_.path.endsWith("/manifest.json"));v&&(h=v.path.slice(0,v.path.length-13))}let p=0;for(const v of u){let _=v.path;h&&_.startsWith(h)&&(_=_.slice(h.length)),_&&(await dx(r,_,v.data),p++)}return t(`Updated ${p} files! Reloading extension...`),setTimeout(()=>{var v,_;try{typeof chrome<"u"&&((v=chrome.runtime)!=null&&v.sendMessage)&&chrome.runtime.sendMessage({action:"RELOAD_EXTENSION"}),typeof chrome<"u"&&((_=chrome.runtime)!=null&&_.reload)&&chrome.runtime.reload()}catch{window.location.reload()}},550),{ok:!0,writtenCount:p}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="186",ba={ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hx=0,Eg=1,px=2,hc=1,mx=2,Ao=3,Ps=0,Yn=1,ki=2,Ar=0,Ro=1,ws=2,wg=3,Ag=4,gx=5,Ea=100,vx=101,_x=102,yx=103,xx=104,Sx=200,Mx=201,Ex=202,wx=203,J0=204,Q0=205,Ax=206,Tx=207,bx=208,Cx=209,Rx=210,Px=211,Ix=212,Lx=213,Nx=214,uf=0,df=1,ff=2,Po=3,hf=4,pf=5,mf=6,gf=7,ev=0,Dx=1,Ux=2,nr=0,tv=1,nv=2,iv=3,ch=4,rv=5,sv=6,av=7,ov=300,Is=301,Ia=302,Sd=303,Md=304,Uc=306,vf=1e3,wr=1001,_f=1002,Ln=1003,Fx=1004,Bl=1005,Gn=1006,Ed=1007,bs=1008,hi=1009,lv=1010,cv=1011,Io=1012,uh=1013,ir=1014,zi=1015,rr=1016,dh=1017,fh=1018,Lo=1020,uv=35902,dv=35899,fv=1021,hv=1022,Gi=1023,br=1026,Cs=1027,hh=1028,ph=1029,Ls=1030,mh=1031,gh=1033,pc=33776,mc=33777,gc=33778,vc=33779,yf=35840,xf=35841,Sf=35842,Mf=35843,Ef=36196,wf=37492,Af=37496,Tf=37488,bf=37489,Ac=37490,Cf=37491,Rf=37808,Pf=37809,If=37810,Lf=37811,Nf=37812,Df=37813,Uf=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Gf=37820,Vf=37821,Hf=36492,Wf=36494,Xf=36495,jf=36283,Yf=36284,Tc=36285,$f=36286,Ox=3200,qf=0,kx=1,ts="",fi="srgb",bc="srgb-linear",Cc="linear",Xt="srgb",wd=7680,Bx=519,zx=512,Gx=513,Vx=514,vh=515,Hx=516,Wx=517,_h=518,Xx=519,jx=35044,Tg="300 es",tr=2e3,No=2001;function Yx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $x(){const s=Rc("canvas");return s.style.display="block",s}const bg={};function Cg(...s){const e="THREE."+s.shift();console.log(e,...s)}function pv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=pv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ot(...s){s=pv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ca(...s){const e=s.join(" ");e in bg||(bg[e]=!0,gt(...s))}function qx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Kx={[uf]:df,[ff]:mf,[hf]:gf,[Po]:pf,[df]:uf,[mf]:ff,[gf]:hf,[pf]:Po};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Kf=180/Math.PI;function Uo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Zx(s,e){return(s%e+e)%e}function Ad(s,e,t){return(1-t)*s+t*e}function ho(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Jx={DEG2RAD:_c},Rh=class Rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let ht=Rh;class rs{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let h=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3],g=l[u+0],x=l[u+1],M=l[u+2],A=l[u+3];if(_!==A||h!==g||p!==x||v!==M){let S=h*g+p*x+v*M+_*A;S<0&&(g=-g,x=-x,M=-M,A=-A,S=-S);let y=1-d;if(S<.9995){const N=Math.acos(S),k=Math.sin(N);y=Math.sin(y*N)/k,d=Math.sin(d*N)/k,h=h*y+g*d,p=p*y+x*d,v=v*y+M*d,_=_*y+A*d}else{h=h*y+g*d,p=p*y+x*d,v=v*y+M*d,_=_*y+A*d;const N=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=N,p*=N,v*=N,_*=N}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],h=r[a+1],p=r[a+2],v=r[a+3],_=l[u],g=l[u+1],x=l[u+2],M=l[u+3];return e[t]=d*M+v*_+h*x-p*g,e[t+1]=h*M+v*g+p*_-d*x,e[t+2]=p*M+v*x+d*g-h*_,e[t+3]=v*M-d*_-h*g-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),v=d(a/2),_=d(l/2),g=h(r/2),x=h(a/2),M=h(l/2);switch(u){case"XYZ":this._x=g*v*_+p*x*M,this._y=p*x*_-g*v*M,this._z=p*v*M+g*x*_,this._w=p*v*_-g*x*M;break;case"YXZ":this._x=g*v*_+p*x*M,this._y=p*x*_-g*v*M,this._z=p*v*M-g*x*_,this._w=p*v*_+g*x*M;break;case"ZXY":this._x=g*v*_-p*x*M,this._y=p*x*_+g*v*M,this._z=p*v*M+g*x*_,this._w=p*v*_-g*x*M;break;case"ZYX":this._x=g*v*_-p*x*M,this._y=p*x*_+g*v*M,this._z=p*v*M-g*x*_,this._w=p*v*_+g*x*M;break;case"YZX":this._x=g*v*_+p*x*M,this._y=p*x*_+g*v*M,this._z=p*v*M-g*x*_,this._w=p*v*_-g*x*M;break;case"XZY":this._x=g*v*_-p*x*M,this._y=p*x*_-g*v*M,this._z=p*v*M+g*x*_,this._w=p*v*_+g*x*M;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],v=t[6],_=t[10],g=r+d+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-h)*x,this._y=(l-p)*x,this._z=(u-a)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(v-h)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(l+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(l-p)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(h+v)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(u-a)/x,this._x=(l+p)/x,this._y=(h+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*d+a*p-l*h,this._y=a*v+u*h+l*d-r*p,this._z=l*v+u*p+r*h-a*d,this._w=u*v-r*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,u=-u,d=-d);let h=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*r),v=2*(d*t-l*a),_=2*(l*r-u*t);return this.x=t+h*p+u*_-d*v,this.y=r+h*v+d*p-l*_,this.z=a+h*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let q=Ph;const Td=new q,Rg=new rs,Ih=class Ih{constructor(e,t,r,a,l,u,d,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,p)}set(e,t,r,a,l,u,d,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],v=r[4],_=r[7],g=r[2],x=r[5],M=r[8],A=a[0],S=a[3],y=a[6],N=a[1],k=a[4],b=a[7],I=a[2],P=a[5],U=a[8];return l[0]=u*A+d*N+h*I,l[3]=u*S+d*k+h*P,l[6]=u*y+d*b+h*U,l[1]=p*A+v*N+_*I,l[4]=p*S+v*k+_*P,l[7]=p*y+v*b+_*U,l[2]=g*A+x*N+M*I,l[5]=g*S+x*k+M*P,l[8]=g*y+x*b+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-r*l*v+r*d*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],_=v*u-d*p,g=d*h-v*l,x=p*l-u*h,M=t*_+r*g+a*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(a*p-v*r)*A,e[2]=(d*r-a*u)*A,e[3]=g*A,e[4]=(v*t-a*h)*A,e[5]=(a*l-d*t)*A,e[6]=x*A,e[7]=(r*h-p*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return Ca("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return Ca("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return Ca("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ih.prototype.isMatrix3=!0;let wt=Ih;const bd=new wt,Pg=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){const s={enabled:!0,workingColorSpace:bc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Xt&&(a.r=Tr(a.r),a.g=Tr(a.g),a.b=Tr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(a.r=Ra(a.r),a.g=Ra(a.g),a.b=Ra(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ts?Cc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[bc]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:Pg,fromXYZ:Ig,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:Pg,fromXYZ:Ig,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Lt=Qx();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ca;class eS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ca===void 0&&(ca=Rc("canvas")),ca.width=e.width,ca.height=e.height;const a=ca.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ca}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Tr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Tr(t[r]/255)*255):t[r]=Tr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class yh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Cd(a[u].image)):l.push(Cd(a[u]))}else l=Cd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let nS=0;const Rd=new q;class $n extends as{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,r=wr,a=wr,l=Gn,u=bs,d=Gi,h=hi,p=$n.DEFAULT_ANISOTROPY,v=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Uo(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=ov;$n.DEFAULT_ANISOTROPY=1;const Lh=class Lh{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],_=h[8],g=h[1],x=h[5],M=h[9],A=h[2],S=h[6],y=h[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(p+1)/2,b=(x+1)/2,I=(y+1)/2,P=(v+g)/4,U=(_+A)/4,w=(M+S)/4;return k>b&&k>I?k<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(k),a=P/r,l=U/r):b>I?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=P/a,l=w/a):I<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),r=U/l,a=w/l),this.set(r,a,l,t),this}let N=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(_-A)/N,this.z=(g-v)/N,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;let an=Lh;class iS extends as{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new $n(a),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new yh(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends iS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class mv extends $n{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends $n{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nc=class Nc{constructor(e,t,r,a,l,u,d,h,p,v,_,g,x,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,p,v,_,g,x,M,A,S)}set(e,t,r,a,l,u,d,h,p,v,_,g,x,M,A,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=u,y[9]=d,y[13]=h,y[2]=p,y[6]=v,y[10]=_,y[14]=g,y[3]=x,y[7]=M,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ua.setFromMatrixColumn(e,0).length(),l=1/ua.setFromMatrixColumn(e,1).length(),u=1/ua.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,x=u*_,M=d*v,A=d*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=x+M*p,t[5]=g-A*p,t[9]=-d*h,t[2]=A-g*p,t[6]=M+x*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,x=h*_,M=p*v,A=p*_;t[0]=g+A*d,t[4]=M*d-x,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-d,t[2]=x*d-M,t[6]=A+g*d,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,x=h*_,M=p*v,A=p*_;t[0]=g-A*d,t[4]=-u*_,t[8]=M+x*d,t[1]=x+M*d,t[5]=u*v,t[9]=A-g*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,x=u*_,M=d*v,A=d*_;t[0]=h*v,t[4]=M*p-x,t[8]=g*p+A,t[1]=h*_,t[5]=A*p+g,t[9]=x*p-M,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,x=u*p,M=d*h,A=d*p;t[0]=h*v,t[4]=A-g*_,t[8]=M*_+x,t[1]=_,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=x*_+M,t[10]=g-A*_}else if(e.order==="XZY"){const g=u*h,x=u*p,M=d*h,A=d*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=g*_+A,t[5]=u*v,t[9]=x*_-M,t[2]=M*_-x,t[6]=d*v,t[10]=A*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,aS)}lookAt(e,t,r){const a=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),qr.crossVectors(r,ui),qr.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),qr.crossVectors(r,ui)),qr.normalize(),zl.crossVectors(ui,qr),a[0]=qr.x,a[4]=zl.x,a[8]=ui.x,a[1]=qr.y,a[5]=zl.y,a[9]=ui.y,a[2]=qr.z,a[6]=zl.z,a[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],v=r[1],_=r[5],g=r[9],x=r[13],M=r[2],A=r[6],S=r[10],y=r[14],N=r[3],k=r[7],b=r[11],I=r[15],P=a[0],U=a[4],w=a[8],L=a[12],O=a[1],G=a[5],W=a[9],K=a[13],z=a[2],Z=a[6],ge=a[10],J=a[14],ee=a[3],H=a[7],j=a[11],D=a[15];return l[0]=u*P+d*O+h*z+p*ee,l[4]=u*U+d*G+h*Z+p*H,l[8]=u*w+d*W+h*ge+p*j,l[12]=u*L+d*K+h*J+p*D,l[1]=v*P+_*O+g*z+x*ee,l[5]=v*U+_*G+g*Z+x*H,l[9]=v*w+_*W+g*ge+x*j,l[13]=v*L+_*K+g*J+x*D,l[2]=M*P+A*O+S*z+y*ee,l[6]=M*U+A*G+S*Z+y*H,l[10]=M*w+A*W+S*ge+y*j,l[14]=M*L+A*K+S*J+y*D,l[3]=N*P+k*O+b*z+I*ee,l[7]=N*U+k*G+b*Z+I*H,l[11]=N*w+k*W+b*ge+I*j,l[15]=N*L+k*K+b*J+I*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],v=e[2],_=e[6],g=e[10],x=e[14],M=e[3],A=e[7],S=e[11],y=e[15],N=h*x-p*g,k=d*x-p*_,b=d*g-h*_,I=u*x-p*v,P=u*g-h*v,U=u*_-d*v;return t*(A*N-S*k+y*b)-r*(M*N-S*I+y*P)+a*(M*k-A*I+y*U)-l*(M*b-A*P+S*U)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],d=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-d*p)-r*(l*v-d*h)+a*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],_=e[9],g=e[10],x=e[11],M=e[12],A=e[13],S=e[14],y=e[15],N=t*d-r*u,k=t*h-a*u,b=t*p-l*u,I=r*h-a*d,P=r*p-l*d,U=a*p-l*h,w=v*A-_*M,L=v*S-g*M,O=v*y-x*M,G=_*S-g*A,W=_*y-x*A,K=g*y-x*S,z=N*K-k*W+b*G+I*O-P*L+U*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/z;return e[0]=(d*K-h*W+p*G)*Z,e[1]=(a*W-r*K-l*G)*Z,e[2]=(A*U-S*P+y*I)*Z,e[3]=(g*P-_*U-x*I)*Z,e[4]=(h*O-u*K-p*L)*Z,e[5]=(t*K-a*O+l*L)*Z,e[6]=(S*b-M*U-y*k)*Z,e[7]=(v*U-g*b+x*k)*Z,e[8]=(u*W-d*O+p*w)*Z,e[9]=(r*O-t*W-l*w)*Z,e[10]=(M*P-A*b+y*N)*Z,e[11]=(_*b-v*P-x*N)*Z,e[12]=(d*L-u*G-h*w)*Z,e[13]=(t*G-r*L+a*w)*Z,e[14]=(A*k-M*I-S*N)*Z,e[15]=(v*I-_*k+g*N)*Z,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-a*h,p*h+a*d,0,p*d+a*h,v*d+r,v*h-a*u,0,p*h-a*d,v*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,v=u+u,_=d+d,g=l*p,x=l*v,M=l*_,A=u*v,S=u*_,y=d*_,N=h*p,k=h*v,b=h*_,I=r.x,P=r.y,U=r.z;return a[0]=(1-(A+y))*I,a[1]=(x+b)*I,a[2]=(M-k)*I,a[3]=0,a[4]=(x-b)*P,a[5]=(1-(g+y))*P,a[6]=(S+N)*P,a[7]=0,a[8]=(M+k)*U,a[9]=(S-N)*U,a[10]=(1-(g+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ua.set(a[0],a[1],a[2]).length();const d=ua.set(a[4],a[5],a[6]).length(),h=ua.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Ui.copy(this);const p=1/u,v=1/d,_=1/h;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,t.setFromRotationMatrix(Ui),r.x=u,r.y=d,r.z=h,this}makePerspective(e,t,r,a,l,u,d=tr,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),x=(r+a)/(r-a);let M,A;if(h)M=l/(u-l),A=u*l/(u-l);else if(d===tr)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(d===No)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=tr,h=!1){const p=this.elements,v=2/(t-e),_=2/(r-a),g=-(t+e)/(t-e),x=-(r+a)/(r-a);let M,A;if(h)M=1/(u-l),A=u/(u-l);else if(d===tr)M=-2/(u-l),A=-(u+l)/(u-l);else if(d===No)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Nc.prototype.isMatrix4=!0;let Wt=Nc;const ua=new q,Ui=new Wt,sS=new q(0,0,0),aS=new q(1,1,1),qr=new q,zl=new q,ui=new q,Lg=new Wt,Ng=new rs;class ss{constructor(e=0,t=0,r=0,a=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],v=a[9],_=a[2],g=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,x),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Lg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ng.setFromEuler(this),this.setFromQuaternion(Ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oS=0;const Dg=new q,da=new rs,gr=new Wt,Gl=new q,po=new q,lS=new q,cS=new rs,Ug=new q(1,0,0),Fg=new q(0,1,0),Og=new q(0,0,1),kg={type:"added"},uS={type:"removed"},fa={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Rn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new q,t=new ss,r=new rs,a=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new wt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(Ug,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,t){return Dg.copy(e).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ug,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gl.copy(e):Gl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(po,Gl,this.up):gr.lookAt(Gl,po,this.up),this.quaternion.setFromRotationMatrix(gr),a&&(gr.extractRotation(a.matrixWorld),da.setFromRotationMatrix(gr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kg),fa.child=e,this.dispatchEvent(fa),fa.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uS),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kg),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,lS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),x=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(d){const h=[];for(const p in d){const v=d[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ns extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dS={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),y=this._getHandJoint(p,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,M=.005;p.inputState.pinching&&g>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dS)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ns;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Lt.workingColorSpace){if(e=Zx(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ld(u,l,e+1/3),this.g=Ld(u,l,e),this.b=Ld(u,l,e-1/3)}return Lt.colorSpaceToWorking(this,a),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=gv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Lt.workingToColorSpace(Bn.copy(this),e),Math.round(Ct(Bn.r*255,0,255))*65536+Math.round(Ct(Bn.g*255,0,255))*256+Math.round(Ct(Bn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Bn.copy(this),t);const r=Bn.r,a=Bn.g,l=Bn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let h,p;const v=(d+u)/2;if(d===u)h=0,p=0;else{const _=u-d;switch(p=v<=.5?_/(u+d):_/(2-u-d),u){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=fi){Lt.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,r=Bn.g,a=Bn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Vl);const r=Ad(Kr.h,Vl.h,t),a=Ad(Kr.s,Vl.s,t),l=Ad(Kr.l,Vl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new St;St.NAMES=gv;class Sh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=t}clone(){return new Sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fS extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new q,vr=new q,Nd=new q,_r=new q,ha=new q,pa=new q,Bg=new q,Dd=new q,Ud=new q,Fd=new q,Od=new an,kd=new an,Bd=new an;class Bi{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Fi.subVectors(e,t),a.cross(Fi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Fi.subVectors(a,t),vr.subVectors(r,t),Nd.subVectors(e,t);const u=Fi.dot(Fi),d=Fi.dot(vr),h=Fi.dot(Nd),p=vr.dot(vr),v=vr.dot(Nd),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const g=1/_,x=(p*h-d*v)*g,M=(u*v-d*h)*g;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,a,l,u,d,h){return this.getBarycoord(e,t,r,a,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,_r.x),h.addScaledVector(u,_r.y),h.addScaledVector(d,_r.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return Od.setScalar(0),kd.setScalar(0),Bd.setScalar(0),Od.fromBufferAttribute(e,t),kd.fromBufferAttribute(e,r),Bd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Od,l.x),u.addScaledVector(kd,l.y),u.addScaledVector(Bd,l.z),u}static isFrontFacing(e,t,r,a){return Fi.subVectors(r,t),vr.subVectors(e,t),Fi.cross(vr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Fi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Bi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;ha.subVectors(a,r),pa.subVectors(l,r),Dd.subVectors(e,r);const h=ha.dot(Dd),p=pa.dot(Dd);if(h<=0&&p<=0)return t.copy(r);Ud.subVectors(e,a);const v=ha.dot(Ud),_=pa.dot(Ud);if(v>=0&&_<=v)return t.copy(a);const g=h*_-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ha,u);Fd.subVectors(e,l);const x=ha.dot(Fd),M=pa.dot(Fd);if(M>=0&&x<=M)return t.copy(l);const A=x*p-h*M;if(A<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(pa,d);const S=v*M-x*_;if(S<=0&&_-v>=0&&x-M>=0)return Bg.subVectors(l,a),d=(_-v)/(_-v+(x-M)),t.copy(a).addScaledVector(Bg,d);const y=1/(S+A+g);return u=A*y,d=g*y,t.copy(r).addScaledVector(ha,u).addScaledVector(pa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ns{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(l,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hl.copy(r.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Wl.subVectors(this.max,mo),ma.subVectors(e.a,mo),ga.subVectors(e.b,mo),va.subVectors(e.c,mo),Zr.subVectors(ga,ma),Jr.subVectors(va,ga),ys.subVectors(ma,va);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-ys.z,ys.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,ys.z,0,-ys.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-ys.y,ys.x,0];return!zd(t,ma,ga,va,Wl)||(t=[1,0,0,0,1,0,0,0,1],!zd(t,ma,ga,va,Wl))?!1:(Xl.crossVectors(Zr,Jr),t=[Xl.x,Xl.y,Xl.z],zd(t,ma,ga,va,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new q,new q,new q,new q,new q,new q,new q,new q],Oi=new q,Hl=new Ns,ma=new q,ga=new q,va=new q,Zr=new q,Jr=new q,ys=new q,mo=new q,Wl=new q,Xl=new q,xs=new q;function zd(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){xs.fromArray(s,l);const d=a.x*Math.abs(xs.x)+a.y*Math.abs(xs.y)+a.z*Math.abs(xs.z),h=e.dot(xs),p=t.dot(xs),v=r.dot(xs);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>d)return!1}return!0}const hn=new q,jl=new ht;let hS=0;class zn extends as{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=jx,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ho(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),r=ii(r,this.array),a=ii(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),r=ii(r,this.array),a=ii(a,this.array),l=ii(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vv extends zn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _v extends zn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Zt extends zn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const pS=new Ns,go=new q,Gd=new q;class Ds{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):pS.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const t=go.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(go,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Gd)),this.expandByPoint(go.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mS=0;const Si=new Wt,Vd=new Rn,_a=new q,di=new Ns,vo=new Ns,bn=new q;class ln extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yx(e)?_v:vv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,r){return Si.makeTranslation(e,t,r),this.applyMatrix4(Si),this}scale(e,t,r){return Si.makeScale(e,t,r),this.applyMatrix4(Si),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];di.setFromBufferAttribute(l),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];vo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(di.min,vo.min),di.expandByPoint(bn),bn.addVectors(di.max,vo.max),di.expandByPoint(bn)):(di.expandByPoint(vo.min),di.expandByPoint(vo.max))}di.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)bn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(bn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)bn.fromBufferAttribute(d,p),h&&(_a.fromBufferAttribute(e,p),bn.add(_a)),a=Math.max(a,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new zn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],h=[];for(let w=0;w<r.count;w++)d[w]=new q,h[w]=new q;const p=new q,v=new q,_=new q,g=new ht,x=new ht,M=new ht,A=new q,S=new q;function y(w,L,O){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,O),g.fromBufferAttribute(l,w),x.fromBufferAttribute(l,L),M.fromBufferAttribute(l,O),v.sub(p),_.sub(p),x.sub(g),M.sub(g);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(v,-M.x).multiplyScalar(G),d[w].add(A),d[L].add(A),d[O].add(A),h[w].add(S),h[L].add(S),h[O].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let w=0,L=N.length;w<L;++w){const O=N[w],G=O.start,W=O.count;for(let K=G,z=G+W;K<z;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const k=new q,b=new q,I=new q,P=new q;function U(w){I.fromBufferAttribute(a,w),P.copy(I);const L=d[w];k.copy(L),k.sub(I.multiplyScalar(I.dot(L))).normalize(),b.crossVectors(P,L);const G=b.dot(h[w])<0?-1:1;u.setXYZW(w,k.x,k.y,k.z,G)}for(let w=0,L=N.length;w<L;++w){const O=N[w],G=O.start,W=O.count;for(let K=G,z=G+W;K<z;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const a=new q,l=new q,u=new q,d=new q,h=new q,p=new q,v=new q,_=new q;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(v),h.add(v),p.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,x=t.count;g<x;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,h){const p=d.array,v=d.itemSize,_=d.normalized,g=new p.constructor(h.length*v);let x=0,M=0;for(let A=0,S=h.length;A<S;A++){d.isInterleavedBufferAttribute?x=h[A]*d.data.stride+d.offset:x=h[A]*v;for(let y=0;y<v;y++)g[M++]=p[x++]}return new zn(g,v,_)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let v=0,_=p.length;v<_;v++){const g=p[v],x=e(g,r);h.push(x)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,g=p.length;_<g;_++){const x=p[_];v.push(x.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new q,gS=new q,vS=new wt;class Er{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Hd.subVectors(r,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Hd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vS.getNormalMatrix(e),a=this.coplanarPoint(Hd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _S=0;class Us extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=Ro,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J0,this.blendDst=Q0,this.blendEquation=Ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wd,this.stencilZFail=wd,this.stencilZPass=wd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Er().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ht().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new q,Wd=new q,Yl=new q,$l=new q;class Fo{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Wd.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),$l.copy(this.origin).sub(Wd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Yl),d=$l.dot(this.direction),h=-$l.dot(Yl),p=$l.lengthSq(),v=Math.abs(1-u*u);let _,g,x,M;if(v>0)if(_=u*h-d,g=u*d-h,M=l*v,_>=0)if(g>=-M)if(g<=M){const A=1/v;_*=A,g*=A,x=_*(_+u*g+2*d)+g*(u*_+g+2*h)+p}else g=l,_=Math.max(0,-(u*g+d)),x=-_*_+g*(g+2*h)+p;else g=-l,_=Math.max(0,-(u*g+d)),x=-_*_+g*(g+2*h)+p;else g<=-M?(_=Math.max(0,-(-u*l+d)),g=_>0?-l:Math.min(Math.max(-l,-h),l),x=-_*_+g*(g+2*h)+p):g<=M?(_=0,g=Math.min(Math.max(-l,-h),l),x=g*(g+2*h)+p):(_=Math.max(0,-(u*l+d)),g=_>0?l:Math.min(Math.max(-l,-h),l),x=-_*_+g*(g+2*h)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+d)),x=-_*_+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Wd).addScaledVector(Yl,g),x}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),a=xr.dot(xr)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(d=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,r,a,l){const u=this.origin,d=this.direction,h=d.x,p=d.y,v=d.z,_=e.x-u.x,g=e.y-u.y,x=e.z-u.z,M=t.x-u.x,A=t.y-u.y,S=t.z-u.z,y=r.x-u.x,N=r.y-u.y,k=r.z-u.z,b=Math.abs(h),I=Math.abs(p),P=Math.abs(v);let U,w,L,O,G,W,K,z,Z,ge,J,ee;if(b>=I&&b>=P?(L=h,W=_,Z=M,ee=y,h>=0?(U=p,w=v,O=g,G=x,K=A,z=S,ge=N,J=k):(U=v,w=p,O=x,G=g,K=S,z=A,ge=k,J=N)):I>=P?(L=p,W=g,Z=A,ee=N,p>=0?(U=v,w=h,O=x,G=_,K=S,z=M,ge=k,J=y):(U=h,w=v,O=_,G=x,K=M,z=S,ge=y,J=k)):(L=v,W=x,Z=S,ee=k,v>=0?(U=h,w=p,O=_,G=g,K=M,z=A,ge=y,J=N):(U=p,w=h,O=g,G=_,K=A,z=M,ge=N,J=y)),L===0)return null;const H=U/L,j=w/L,D=1/L,le=O-H*W,Pe=G-j*W,Ze=K-H*Z,$e=z-j*Z,we=ge-H*ee,re=J-j*ee,ne=we*$e-re*Ze,Fe=le*re-Pe*we,Me=Ze*Pe-$e*le;if(a){if(ne<0||Fe<0||Me<0)return null}else if((ne<0||Fe<0||Me<0)&&(ne>0||Fe>0||Me>0))return null;const ke=ne+Fe+Me;if(ke===0)return null;const _t=D*(ne*W+Fe*Z+Me*ee);return(ke>0?_t<0:_t>0)?null:this.at(_t/ke,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zg=new Wt,Ss=new Fo,ql=new Ds,Gg=new q,Kl=new q,Zl=new q,Jl=new q,Xd=new q,Ql=new q,Vg=new q,ec=new q;class xn extends Rn{constructor(e=new ln,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Ql.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=d[h],_=l[h];v!==0&&(Xd.fromBufferAttribute(_,e),u?Ql.addScaledVector(Xd,v):Ql.addScaledVector(Xd.sub(t),v))}t.add(Ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ql.copy(r.boundingSphere),ql.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(ql.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(ql,Gg)===null||Ss.origin.distanceToSquared(Gg)>(e.far-e.near)**2))&&(zg.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(zg),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,x=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const S=g[M],y=u[S.materialIndex],N=Math.max(S.start,x.start),k=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let b=N,I=k;b<I;b+=3){const P=d.getX(b),U=d.getX(b+1),w=d.getX(b+2);a=tc(this,y,e,r,p,v,_,P,U,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let S=M,y=A;S<y;S+=3){const N=d.getX(S),k=d.getX(S+1),b=d.getX(S+2);a=tc(this,u,e,r,p,v,_,N,k,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const S=g[M],y=u[S.materialIndex],N=Math.max(S.start,x.start),k=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let b=N,I=k;b<I;b+=3){const P=b,U=b+1,w=b+2;a=tc(this,y,e,r,p,v,_,P,U,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let S=M,y=A;S<y;S+=3){const N=S,k=S+1,b=S+2;a=tc(this,u,e,r,p,v,_,N,k,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function yS(s,e,t,r,a,l,u,d){let h;if(e.side===Yn?h=r.intersectTriangle(u,l,a,!0,d):h=r.intersectTriangle(a,l,u,e.side===Ps,d),h===null)return null;ec.copy(d),ec.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ec);return p<t.near||p>t.far?null:{distance:p,point:ec.clone(),object:s}}function tc(s,e,t,r,a,l,u,d,h,p){s.getVertexPosition(d,Kl),s.getVertexPosition(h,Zl),s.getVertexPosition(p,Jl);const v=yS(s,e,t,r,Kl,Zl,Jl,Vg);if(v){const _=new q;Bi.getBarycoord(Vg,Kl,Zl,Jl,_),a&&(v.uv=Bi.getInterpolatedAttribute(a,d,h,p,_,new ht)),l&&(v.uv1=Bi.getInterpolatedAttribute(l,d,h,p,_,new ht)),u&&(v.normal=Bi.getInterpolatedAttribute(u,d,h,p,_,new q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:h,c:p,normal:new q,materialIndex:0};Bi.getNormal(Kl,Zl,Jl,g.normal),v.face=g,v.barycoord=_}return v}class yv extends $n{constructor(e=null,t=1,r=1,a,l,u,d,h,p=Ln,v=Ln,_,g){super(null,u,d,h,p,v,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hg extends zn{constructor(e,t,r,a=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ya=new Wt,Wg=new Wt,nc=[],Xg=new Ns,xS=new Wt,_o=new xn,yo=new Ds;class SS extends xn{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hg(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,xS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,ya),Xg.copy(e.boundingBox).applyMatrix4(ya),this.boundingBox.union(Xg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,ya),yo.copy(e.boundingSphere).applyMatrix4(ya),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=r.length+1,u=e*l+1;for(let d=0;d<r.length;d++)r[d]=a[u+d]}raycast(e,t){const r=this.matrixWorld,a=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(r),e.ray.intersectsSphere(yo)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ya),Wg.multiplyMatrices(r,ya),_o.matrixWorld=Wg,_o.raycast(e,nc);for(let u=0,d=nc.length;u<d;u++){const h=nc[u];h.instanceId=l,h.object=this,t.push(h)}nc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new yv(new Float32Array(a*this.count),a,this.count,hh,zi));const l=this.morphTexture.source.data.data;let u=0;for(let p=0;p<r.length;p++)u+=r[p];const d=this.geometry.morphTargetsRelative?1:1-u,h=a*e;return l[h]=d,l.set(r,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ms=new Ds,MS=new ht(.5,.5),ic=new q;class Mh{constructor(e=new Er,t=new Er,r=new Er,a=new Er,l=new Er,u=new Er){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr,r=!1){const a=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],v=l[4],_=l[5],g=l[6],x=l[7],M=l[8],A=l[9],S=l[10],y=l[11],N=l[12],k=l[13],b=l[14],I=l[15];if(a[0].setComponents(p-u,x-v,y-M,I-N).normalize(),a[1].setComponents(p+u,x+v,y+M,I+N).normalize(),a[2].setComponents(p+d,x+_,y+A,I+k).normalize(),a[3].setComponents(p-d,x-_,y-A,I-k).normalize(),r)a[4].setComponents(h,g,S,b).normalize(),a[5].setComponents(p-h,x-g,y-S,I-b).normalize();else if(a[4].setComponents(p-h,x-g,y-S,I-b).normalize(),t===tr)a[5].setComponents(p+h,x+g,y+S,I+b).normalize();else if(t===No)a[5].setComponents(h,g,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=MS.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(ic.x=a.normal.x>0?e.max.x:e.min.x,ic.y=a.normal.y>0?e.max.y:e.min.y,ic.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yc extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new q,Ic=new q,jg=new Wt,xo=new Fo,rc=new Ds,jd=new q,Yg=new q;class Zf extends Rn{constructor(e=new ln,t=new yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Pc.fromBufferAttribute(t,a-1),Ic.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Pc.distanceTo(Ic);e.setAttribute("lineDistance",new Zt(r,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(a),rc.radius+=l,e.ray.intersectsSphere(rc)===!1)return;jg.copy(a).invert(),xo.copy(e.ray).applyMatrix4(jg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let A=x,S=M-1;A<S;A+=p){const y=v.getX(A),N=v.getX(A+1),k=sc(this,e,xo,h,y,N,A);k&&t.push(k)}if(this.isLineLoop){const A=v.getX(M-1),S=v.getX(x),y=sc(this,e,xo,h,A,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=x,S=M-1;A<S;A+=p){const y=sc(this,e,xo,h,A,A+1,A);y&&t.push(y)}if(this.isLineLoop){const A=sc(this,e,xo,h,M-1,x,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function sc(s,e,t,r,a,l,u){const d=s.geometry.attributes.position;if(Pc.fromBufferAttribute(d,a),Ic.fromBufferAttribute(d,l),t.distanceSqToSegment(Pc,Ic,jd,Yg)>r)return;jd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(jd);if(!(p<e.near||p>e.far))return{distance:p,point:Yg.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const $g=new q,qg=new q;class ES extends Zf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)$g.fromBufferAttribute(t,a),qg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+$g.distanceTo(qg);e.setAttribute("lineDistance",new Zt(r,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xc extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kg=new Wt,Jf=new Fo,ac=new Ds,oc=new q;class Yd extends Rn{constructor(e=new ln,t=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(a),ac.radius+=l,e.ray.intersectsSphere(ac)===!1)return;Kg.copy(a).invert(),Jf.copy(e.ray).applyMatrix4(Kg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let M=g,A=x;M<A;M++){const S=p.getX(M);oc.fromBufferAttribute(_,S),Zg(oc,S,h,a,e,t,this)}}else{const g=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let M=g,A=x;M<A;M++)oc.fromBufferAttribute(_,M),Zg(oc,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zg(s,e,t,r,a,l,u){const d=Jf.distanceSqToPoint(s);if(d<t){const h=new q;Jf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class xv extends $n{constructor(e=[],t=Is,r,a,l,u,d,h,p,v){super(e,t,r,a,l,u,d,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Do extends $n{constructor(e,t,r=ir,a,l,u,d=Ln,h=Ln,p,v=br,_=1){if(v!==br&&v!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,u,d,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wS extends Do{constructor(e,t=ir,r=Is,a,l,u=Ln,d=Ln,h,p=br){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,a,l,u,d,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sv extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oo extends ln{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],_=[];let g=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(_,2));function M(A,S,y,N,k,b,I,P,U,w,L){const O=b/U,G=I/w,W=b/2,K=I/2,z=P/2,Z=U+1,ge=w+1;let J=0,ee=0;const H=new q;for(let j=0;j<ge;j++){const D=j*G-K;for(let le=0;le<Z;le++){const Pe=le*O-W;H[A]=Pe*N,H[S]=D*k,H[y]=z,p.push(H.x,H.y,H.z),H[A]=0,H[S]=0,H[y]=P>0?1:-1,v.push(H.x,H.y,H.z),_.push(le/U),_.push(1-j/w),J+=1}}for(let j=0;j<w;j++)for(let D=0;D<U;D++){const le=g+D+Z*j,Pe=g+D+Z*(j+1),Ze=g+(D+1)+Z*(j+1),$e=g+(D+1)+Z*j;h.push(le,Pe,$e),h.push(Pe,Ze,$e),ee+=6}d.addGroup(x,ee,L),x+=ee,g+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eh extends ln{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],_=[],g=[],x=[];let M=0;const A=[],S=r/2;let y=0;N(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(v),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(x,2));function N(){const b=new q,I=new q;let P=0;const U=(t-e)/r;for(let w=0;w<=l;w++){const L=[],O=w/l,G=O*(t-e)+e;for(let W=0;W<=a;W++){const K=W/a,z=K*h+d,Z=Math.sin(z),ge=Math.cos(z);I.x=G*Z,I.y=-O*r+S,I.z=G*ge,_.push(I.x,I.y,I.z),b.set(Z,U,ge).normalize(),g.push(b.x,b.y,b.z),x.push(K,1-O),L.push(M++)}A.push(L)}for(let w=0;w<a;w++)for(let L=0;L<l;L++){const O=A[L][w],G=A[L+1][w],W=A[L+1][w+1],K=A[L][w+1];(e>0||L!==0)&&(v.push(O,G,K),P+=3),(t>0||L!==l-1)&&(v.push(G,W,K),P+=3)}p.addGroup(y,P,0),y+=P}function k(b){const I=M,P=new ht,U=new q;let w=0;const L=b===!0?e:t,O=b===!0?1:-1;for(let W=1;W<=a;W++)_.push(0,S*O,0),g.push(0,O,0),x.push(.5,.5),M++;const G=M;for(let W=0;W<=a;W++){const z=W/a*h+d,Z=Math.cos(z),ge=Math.sin(z);U.x=L*ge,U.y=S*O,U.z=L*Z,_.push(U.x,U.y,U.z),g.push(0,O,0),P.x=Z*.5+.5,P.y=ge*.5*O+.5,x.push(P.x,P.y),M++}for(let W=0;W<a;W++){const K=I+W,z=G+W;b===!0?v.push(z,z+1,K):v.push(z+1,z,K),w+=3}p.addGroup(y,w,b===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wh extends ln{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],u=[];d(a),p(r),v(),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(l.slice(),3)),this.setAttribute("uv",new Zt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const k=new q,b=new q,I=new q;for(let P=0;P<t.length;P+=3)x(t[P+0],k),x(t[P+1],b),x(t[P+2],I),h(k,b,I,N)}function h(N,k,b,I){const P=I+1,U=[];for(let w=0;w<=P;w++){U[w]=[];const L=N.clone().lerp(b,w/P),O=k.clone().lerp(b,w/P),G=P-w;for(let W=0;W<=G;W++)W===0&&w===P?U[w][W]=L:U[w][W]=L.clone().lerp(O,W/G)}for(let w=0;w<P;w++)for(let L=0;L<2*(P-w)-1;L++){const O=Math.floor(L/2);L%2===0?(g(U[w][O+1]),g(U[w+1][O]),g(U[w][O])):(g(U[w][O+1]),g(U[w+1][O+1]),g(U[w+1][O]))}}function p(N){const k=new q;for(let b=0;b<l.length;b+=3)k.x=l[b+0],k.y=l[b+1],k.z=l[b+2],k.normalize().multiplyScalar(N),l[b+0]=k.x,l[b+1]=k.y,l[b+2]=k.z}function v(){const N=new q;for(let k=0;k<l.length;k+=3){N.x=l[k+0],N.y=l[k+1],N.z=l[k+2];const b=S(N)/2/Math.PI+.5,I=y(N)/Math.PI+.5;u.push(b,1-I)}M(),_()}function _(){for(let N=0;N<u.length;N+=6){const k=u[N+0],b=u[N+2],I=u[N+4],P=Math.max(k,b,I),U=Math.min(k,b,I);P>.9&&U<.1&&(k<.2&&(u[N+0]+=1),b<.2&&(u[N+2]+=1),I<.2&&(u[N+4]+=1))}}function g(N){l.push(N.x,N.y,N.z)}function x(N,k){const b=N*3;k.x=e[b+0],k.y=e[b+1],k.z=e[b+2]}function M(){const N=new q,k=new q,b=new q,I=new q,P=new ht,U=new ht,w=new ht;for(let L=0,O=0;L<l.length;L+=9,O+=6){N.set(l[L+0],l[L+1],l[L+2]),k.set(l[L+3],l[L+4],l[L+5]),b.set(l[L+6],l[L+7],l[L+8]),P.set(u[O+0],u[O+1]),U.set(u[O+2],u[O+3]),w.set(u[O+4],u[O+5]),I.copy(N).add(k).add(b).divideScalar(3);const G=S(I);A(P,O+0,N,G),A(U,O+2,k,G),A(w,O+4,b,G)}}function A(N,k,b,I){I<0&&N.x===1&&(u[k]=N.x-1),b.x===0&&b.z===0&&(u[k]=I/2/Math.PI+.5)}function S(N){return Math.atan2(N.z,-N.x)}function y(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.vertices,e.indices,e.radius,e.detail)}}class AS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,h=l-1,p;for(;d<=h;)if(a=Math.floor(d+(h-d)/2),p=r[a]-u,p<0)d=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===u)return a/(l-1);const v=r[a],g=r[a+1]-v,x=(u-v)/g;return(a+x)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),d=this.getPoint(l),h=t||(u.isVector2?new ht:new q);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new q,a=[],l=[],u=[],d=new q,h=new Wt;for(let x=0;x<=e;x++){const M=x/e;a[x]=this.getTangentAt(M,new q)}l[0]=new q,u[0]=new q;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),_=Math.abs(a[0].y),g=Math.abs(a[0].z);v<=p&&(p=v,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),g<=p&&r.set(0,0,1),d.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],d),u[0].crossVectors(a[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(a[x-1],a[x]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(Ct(a[x-1].dot(a[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(d,M))}u[x].crossVectors(a[x],l[x])}if(t===!0){let x=Math.acos(Ct(l[0].dot(l[e]),-1,1));x/=e,a[0].dot(d.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(a[M],x*M)),u[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function TS(s,e){const t=1-s;return t*t*t*e}function bS(s,e){const t=1-s;return 3*t*t*s*e}function CS(s,e){return 3*(1-s)*s*s*e}function RS(s,e){return s*s*s*e}function $d(s,e,t,r,a){return TS(s,e)+bS(s,t)+CS(s,r)+RS(s,a)}class Jg extends AS{constructor(e=new q,t=new q,r=new q,a=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new q){const r=t,a=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set($d(e,a.x,l.x,u.x,d.x),$d(e,a.y,l.y,u.y,d.y),$d(e,a.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ah extends wh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ah(e.radius,e.detail)}}class Fc extends ln{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(a),p=d+1,v=h+1,_=e/d,g=t/h,x=[],M=[],A=[],S=[];for(let y=0;y<v;y++){const N=y*g-u;for(let k=0;k<p;k++){const b=k*_-l;M.push(b,-N,0),A.push(0,0,1),S.push(k/d),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let N=0;N<d;N++){const k=N+p*y,b=N+p*(y+1),I=N+1+p*(y+1),P=N+1+p*y;x.push(k,b,P),x.push(b,I,P)}this.setIndex(x),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(A,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lc extends ln{constructor(e=.5,t=1,r=32,a=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const d=[],h=[],p=[],v=[];let _=e;const g=(t-e)/a,x=new q,M=new ht;for(let A=0;A<=a;A++){for(let S=0;S<=r;S++){const y=l+S/r*u;x.x=_*Math.cos(y),x.y=_*Math.sin(y),h.push(x.x,x.y,x.z),p.push(0,0,1),M.x=(x.x/t+1)/2,M.y=(x.y/t+1)/2,v.push(M.x,M.y)}_+=g}for(let A=0;A<a;A++){const S=A*(r+1);for(let y=0;y<r;y++){const N=y+S,k=N,b=N+r+1,I=N+r+2,P=N+1;d.push(k,b,P),d.push(b,I,P)}}this.setIndex(d),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Aa extends ln{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let p=0;const v=[],_=new q,g=new q,x=[],M=[],A=[],S=[];for(let y=0;y<=r;y++){const N=[],k=y/r,b=u+k*d,I=e*Math.cos(b),P=Math.sqrt(e*e-I*I);let U=0;y===0&&u===0?U=.5/t:y===r&&h===Math.PI&&(U=-.5/t);for(let w=0;w<=t;w++){const L=w/t,O=a+L*l;_.x=-P*Math.cos(O),_.y=I,_.z=P*Math.sin(O),M.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),S.push(L+U,1-k),N.push(p++)}v.push(N)}for(let y=0;y<r;y++)for(let N=0;N<t;N++){const k=v[y][N+1],b=v[y][N],I=v[y+1][N],P=v[y+1][N+1];(y!==0||u>0)&&x.push(k,b,P),(y!==r-1||h<Math.PI)&&x.push(b,I,P)}this.setIndex(x),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(A,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Th extends ln{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),a=Math.floor(a);const h=[],p=[],v=[],_=[],g=new q,x=new q,M=new q;for(let A=0;A<=r;A++){const S=u+A/r*d;for(let y=0;y<=a;y++){const N=y/a*l;x.x=(e+t*Math.cos(S))*Math.cos(N),x.y=(e+t*Math.cos(S))*Math.sin(N),x.z=t*Math.sin(S),p.push(x.x,x.y,x.z),g.x=e*Math.cos(N),g.y=e*Math.sin(N),M.subVectors(x,g).normalize(),v.push(M.x,M.y,M.z),_.push(y/a),_.push(A/r)}}for(let A=1;A<=r;A++)for(let S=1;S<=a;S++){const y=(a+1)*A+S-1,N=(a+1)*(A-1)+S-1,k=(a+1)*(A-1)+S,b=(a+1)*A+S;h.push(y,N,b),h.push(N,k,b)}this.setIndex(h),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function La(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Qg(a))a.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Qg(a[0])){const l=[];for(let u=0,d=a.length;u<d;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const r=La(s[t]);for(const a in r)e[a]=r[a]}return e}function Qg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function PS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const IS={clone:La,merge:jn};var LS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=PS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new St().setHex(a.value);break;case"v2":this.uniforms[r].value=new ht().fromArray(a.value);break;case"v3":this.uniforms[r].value=new q().fromArray(a.value);break;case"v4":this.uniforms[r].value=new an().fromArray(a.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Wt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class DS extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class US extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FS extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ev extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const qd=new Wt,e0=new q,t0=new q;class kS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;e0.setFromMatrixPosition(e.matrixWorld),t.position.copy(e0),t0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(t0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){qd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(qd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=a?a.z/l.x:1,d=a?a.w/l.y:1,h=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===No||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lc=new q,cc=new rs,Zi=new q;class wv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lc,cc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(lc,cc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new q,n0=new ht,i0=new ht;class Ei extends wv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,n0,i0),t.subVectors(i0,n0)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bh extends wv{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class BS extends kS{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r0 extends Ev{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new BS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zS extends Ev{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const xa=-90,Sa=1;class GS extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ei(xa,Sa,e,t);a.layers=this.layers,this.add(a);const l=new Ei(xa,Sa,e,t);l.layers=this.layers,this.add(l);const u=new Ei(xa,Sa,e,t);u.layers=this.layers,this.add(u);const d=new Ei(xa,Sa,e,t);d.layers=this.layers,this.add(d);const h=new Ei(xa,Sa,e,t);h.layers=this.layers,this.add(h);const p=new Ei(xa,Sa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===No)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class VS extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const s0=new Wt;class HS{constructor(e,t,r=0,a=1/0){this.ray=new Fo(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(e,t=!0,r=[]){return Qf(e,this,r,t),r.sort(a0),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Qf(e[a],this,r,t);return r.sort(a0),r}}function a0(s,e){return s.distance-e.distance}function Qf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Qf(l[u],e,t,!0)}}class o0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nh=class Nh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Nh.prototype.isMatrix2=!0;let l0=Nh;class WS extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c0(s,e,t,r){const a=XS(r);switch(t){case fv:return s*e;case hh:return s*e/a.components*a.byteLength;case ph:return s*e/a.components*a.byteLength;case Ls:return s*e*2/a.components*a.byteLength;case mh:return s*e*2/a.components*a.byteLength;case hv:return s*e*3/a.components*a.byteLength;case Gi:return s*e*4/a.components*a.byteLength;case gh:return s*e*4/a.components*a.byteLength;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:case Mf:return Math.max(s,16)*Math.max(e,8)/4;case yf:case Sf:return Math.max(s,8)*Math.max(e,8)/2;case Ef:case wf:case Tf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:case Ac:case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tc:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function XS(s){switch(s){case hi:case lv:return{byteLength:1,components:1};case Io:case cv:case rr:return{byteLength:2,components:1};case dh:case fh:return{byteLength:2,components:4};case ir:case uh:case zi:return{byteLength:4,components:1};case uv:case dv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Av(){let s=null,e=!1,t=null,r=null;function a(l,u){r=s.requestAnimationFrame(a),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function jS(s){const e=new WeakMap;function t(d,h){const p=d.array,v=d.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),d.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,h,p){const v=h.array,_=h.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,v);else{_.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<_.length;x++){const M=_[g],A=_[x];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,M=_.length;x<M;x++){const A=_[x];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$S=`#ifdef USE_ALPHAHASH
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
#endif`,qS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QS=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
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
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,o1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g1=`#define PI 3.141592653589793
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_1=`vec3 transformedNormal = objectNormal;
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
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
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
}`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
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
#endif`,X1=`uniform sampler2D dfgLUT;
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
}`,j1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iM=`#if defined( USE_POINTS_UV )
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
#endif`,rM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
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
#endif`,vM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LM=`float getShadowMask() {
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
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,eE=`#if DEPTH_PACKING == 3200
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
}`,tE=`#define DISTANCE
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
}`,nE=`#define DISTANCE
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
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
}`,aE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,lE=`uniform vec3 diffuse;
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
}`,cE=`#define LAMBERT
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
}`,uE=`#define LAMBERT
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
}`,dE=`#define MATCAP
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
}`,fE=`#define MATCAP
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
}`,hE=`#define NORMAL
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
}`,pE=`#define NORMAL
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
}`,mE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
}`,yE=`#define TOON
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
}`,xE=`#define TOON
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
}`,SE=`uniform float size;
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#include <common>
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
}`,wE=`uniform vec3 color;
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
}`,AE=`uniform float rotation;
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
}`,TE=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:YS,alphahash_pars_fragment:$S,alphamap_fragment:qS,alphamap_pars_fragment:KS,alphatest_fragment:ZS,alphatest_pars_fragment:JS,aomap_fragment:QS,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:r1,bsdfs:s1,iridescence_fragment:a1,bumpmap_pars_fragment:o1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:d1,color_fragment:f1,color_pars_fragment:h1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:y1,displacementmap_vertex:x1,emissivemap_fragment:S1,emissivemap_pars_fragment:M1,colorspace_fragment:E1,colorspace_pars_fragment:w1,envmap_fragment:A1,envmap_common_pars_fragment:T1,envmap_pars_fragment:b1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:B1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:I1,fog_fragment:L1,fog_pars_fragment:N1,gradientmap_pars_fragment:D1,lightmap_pars_fragment:U1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:O1,lights_pars_begin:k1,lights_toon_fragment:z1,lights_toon_pars_fragment:G1,lights_phong_fragment:V1,lights_phong_pars_fragment:H1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:j1,lights_fragment_maps:Y1,lights_fragment_end:$1,lightprobes_pars_fragment:q1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:Q1,map_fragment:eM,map_pars_fragment:tM,map_particle_fragment:nM,map_particle_pars_fragment:iM,metalnessmap_fragment:rM,metalnessmap_pars_fragment:sM,morphinstance_vertex:aM,morphcolor_vertex:oM,morphnormal_vertex:lM,morphtarget_pars_vertex:cM,morphtarget_vertex:uM,normal_fragment_begin:dM,normal_fragment_maps:fM,normal_pars_fragment:hM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:vM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:yM,iridescence_pars_fragment:xM,opaque_fragment:SM,packing:MM,premultiplied_alpha_fragment:EM,project_vertex:wM,dithering_fragment:AM,dithering_pars_fragment:TM,roughnessmap_fragment:bM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:PM,shadowmap_vertex:IM,shadowmask_pars_fragment:LM,skinbase_vertex:NM,skinning_pars_vertex:DM,skinning_vertex:UM,skinnormal_vertex:FM,specularmap_fragment:OM,specularmap_pars_fragment:kM,tonemapping_fragment:BM,tonemapping_pars_fragment:zM,transmission_fragment:GM,transmission_pars_fragment:VM,uv_pars_fragment:HM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:jM,background_vert:YM,background_frag:$M,backgroundCube_vert:qM,backgroundCube_frag:KM,cube_vert:ZM,cube_frag:JM,depth_vert:QM,depth_frag:eE,distance_vert:tE,distance_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:aE,meshbasic_vert:oE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:uE,meshmatcap_vert:dE,meshmatcap_frag:fE,meshnormal_vert:hE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:yE,meshtoon_frag:xE,points_vert:SE,points_frag:ME,shadow_vert:EE,shadow_frag:wE,sprite_vert:AE,sprite_frag:TE},Ke={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},er={basic:{uniforms:jn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:jn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:jn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:jn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:jn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new St(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:jn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:jn([Ke.points,Ke.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:jn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:jn([Ke.common,Ke.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:jn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:jn([Ke.sprite,Ke.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:jn([Ke.common,Ke.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:jn([Ke.lights,Ke.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};er.physical={uniforms:jn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const uc={r:0,b:0,g:0},bE=new Wt,Tv=new wt;Tv.set(-1,0,0,0,1,0,0,0,1);function CE(s,e,t,r,a,l){const u=new St(0);let d=a===!0?0:1,h,p,v=null,_=0,g=null;function x(N){let k=N.isScene===!0?N.background:null;if(k&&k.isTexture){const b=N.backgroundBlurriness>0;k=e.get(k,b)}return k}function M(N){let k=!1;const b=x(N);b===null?S(u,d):b&&b.isColor&&(S(b,1),k=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(N,k){const b=x(k);b&&(b.isCubeTexture||b.mapping===Uc)?(p===void 0&&(p=new xn(new Oo(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:La(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(bE.makeRotationFromEuler(k.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Tv),p.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Xt,(v!==b||_!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=b,_=b.version,g=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new xn(new Fc(2,2),new sr({name:"BackgroundMaterial",uniforms:La(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||_!==b.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=b,_=b.version,g=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function S(N,k){N.getRGB(uc,Mv(s)),t.buffers.color.setClear(uc.r,uc.g,uc.b,k,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,k=1){u.set(N),d=k,S(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,S(u,d)},render:M,addToRenderList:A,dispose:y}}function RE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function d(G,W,K,z,Z){let ge=!1;const J=_(G,z,K,W);l!==J&&(l=J,p(l.object)),ge=x(G,z,K,Z),ge&&M(G,z,K,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(ge||u)&&(u=!1,b(G,W,K,z),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function _(G,W,K,z){const Z=z.wireframe===!0;let ge=r[W.id];ge===void 0&&(ge={},r[W.id]=ge);const J=G.isInstancedMesh===!0?G.id:0;let ee=ge[J];ee===void 0&&(ee={},ge[J]=ee);let H=ee[K.id];H===void 0&&(H={},ee[K.id]=H);let j=H[Z];return j===void 0&&(j=g(h()),H[Z]=j),j}function g(G){const W=[],K=[],z=[];for(let Z=0;Z<t;Z++)W[Z]=0,K[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:z,object:G,attributes:{},index:null}}function x(G,W,K,z){const Z=l.attributes,ge=W.attributes;let J=0;const ee=K.getAttributes();for(const H in ee)if(ee[H].location>=0){const D=Z[H];let le=ge[H];if(le===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(le=G.instanceColor)),D===void 0||D.attribute!==le||le&&D.data!==le.data)return!0;J++}return l.attributesNum!==J||l.index!==z}function M(G,W,K,z){const Z={},ge=W.attributes;let J=0;const ee=K.getAttributes();for(const H in ee)if(ee[H].location>=0){let D=ge[H];D===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const le={};le.attribute=D,D&&D.data&&(le.data=D.data),Z[H]=le,J++}l.attributes=Z,l.attributesNum=J,l.index=z}function A(){const G=l.newAttributes;for(let W=0,K=G.length;W<K;W++)G[W]=0}function S(G){y(G,0)}function y(G,W){const K=l.newAttributes,z=l.enabledAttributes,Z=l.attributeDivisors;K[G]=1,z[G]===0&&(s.enableVertexAttribArray(G),z[G]=1),Z[G]!==W&&(s.vertexAttribDivisor(G,W),Z[G]=W)}function N(){const G=l.newAttributes,W=l.enabledAttributes;for(let K=0,z=W.length;K<z;K++)W[K]!==G[K]&&(s.disableVertexAttribArray(K),W[K]=0)}function k(G,W,K,z,Z,ge,J){J===!0?s.vertexAttribIPointer(G,W,K,Z,ge):s.vertexAttribPointer(G,W,K,z,Z,ge)}function b(G,W,K,z){A();const Z=z.attributes,ge=K.getAttributes(),J=W.defaultAttributeValues;for(const ee in ge){const H=ge[ee];if(H.location>=0){let j=Z[ee];if(j===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),j!==void 0){const D=j.normalized,le=j.itemSize,Pe=e.get(j);if(Pe===void 0)continue;const Ze=Pe.buffer,$e=Pe.type,we=Pe.bytesPerElement,re=$e===s.INT||$e===s.UNSIGNED_INT||j.gpuType===uh;if(j.isInterleavedBufferAttribute){const ne=j.data,Fe=ne.stride,Me=j.offset;if(ne.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)y(H.location+ke,ne.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ke=0;ke<H.locationSize;ke++)S(H.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ke=0;ke<H.locationSize;ke++)k(H.location+ke,le/H.locationSize,$e,D,Fe*we,(Me+le/H.locationSize*ke)*we,re)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)y(H.location+ne,j.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<H.locationSize;ne++)S(H.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ne=0;ne<H.locationSize;ne++)k(H.location+ne,le/H.locationSize,$e,D,le*we,le/H.locationSize*ne*we,re)}}else if(J!==void 0){const D=J[ee];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(H.location,D);break;case 3:s.vertexAttrib3fv(H.location,D);break;case 4:s.vertexAttrib4fv(H.location,D);break;default:s.vertexAttrib1fv(H.location,D)}}}}N()}function I(){L();for(const G in r){const W=r[G];for(const K in W){const z=W[K];for(const Z in z){const ge=z[Z];for(const J in ge)v(ge[J].object),delete ge[J];delete z[Z]}}delete r[G]}}function P(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const K in W){const z=W[K];for(const Z in z){const ge=z[Z];for(const J in ge)v(ge[J].object),delete ge[J];delete z[Z]}}delete r[G.id]}function U(G){for(const W in r){const K=r[W];for(const z in K){const Z=K[z];if(Z[G.id]===void 0)continue;const ge=Z[G.id];for(const J in ge)v(ge[J].object),delete ge[J];delete Z[G.id]}}}function w(G){for(const W in r){const K=r[W],z=G.isInstancedMesh===!0?G.id:0,Z=K[z];if(Z!==void 0){for(const ge in Z){const J=Z[ge];for(const ee in J)v(J[ee].object),delete J[ee];delete Z[ge]}delete K[z],Object.keys(K).length===0&&delete r[W]}}}function L(){O(),u=!0,l!==a&&(l=a,p(l.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:L,resetDefaultState:O,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function PE(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let x=0;x<v;x++)g+=p[x];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function IE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const w=U===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==hi&&U!==zi&&!w&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:k,maxFragmentUniforms:b,maxSamples:I,samples:P}}function LE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Er,d=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||a;return a=g,r=_.length,x},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,x){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=s.get(_);if(!a||M===null||M.length===0||l&&!S)l?v(null):p();else{const N=l?0:r,k=N*4;let b=y.clippingState||null;h.value=b,b=v(M,g,k,x);for(let I=0;I!==k;++I)b[I]=t[I];y.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,x,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,M!==!0||S===null){const y=x+A*4,N=g.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let k=0,b=x;k!==A;++k,b+=4)u.copy(_[k]).applyMatrix4(N,d),u.normal.toArray(S,b),S[b+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Ta=4,NE=6,DE=20,UE=256,So=new bh,u0=new St;let Kd=null,Zd=0,Jd=0,Qd=!1;const FE=new q,Es=new q;class d0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:d=FE}=l;Kd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Zd,Jd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:rr,format:Gi,colorSpace:bc,depthBuffer:!1},a=f0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=OE(l)),this._blurMaterial=BE(l,e,t),this._ggxMaterial=kE(l,e,t)}return a}_compileMaterial(e){const t=new xn(new ln,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,r,a,l){const h=new Ei(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(u0),_.toneMapping=nr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new Oo,new Qi({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,y=!0):(S.color.copy(u0),y=!0);for(let k=0;k<6;k++){const b=k%3;b===0?(h.up.set(0,p[k],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[k],l.y,l.z)):b===1?(h.up.set(0,0,p[k]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[k],l.z)):(h.up.set(0,p[k],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[k]));const I=this._cubeSize;Ma(a,b*I,k>2?I:0,I,I),_.setRenderTarget(a),y&&_.render(A,h),_.render(e,h)}_.toneMapping=x,_.autoClear=g,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Is||e.mapping===Ia;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=p0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ma(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,So)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=p*1.25,x=_*g,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-Ta?r-M+Ta:0),y=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,Ma(l,S,y,3*A,2*A),a.setRenderTarget(l),a.render(d,So),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,Ma(e,S,y,3*A,2*A),a.setRenderTarget(e),a.render(d,So)}_blur(e,t,r,a){const l=this._pingPongRenderTarget,u=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,a,l){const u=this._renderer,d=this._blurMaterial,h=this._lodMeshes[a];h.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[a],_=3*v*(a>this._lodMax-Ta?a-this._lodMax+Ta:0),g=4*(this._cubeSize-v);Ma(t,_,g,3*v,2*v),u.setRenderTarget(t),u.render(h,So)}}function OE(s){const e=[],t=[];let r=s;const a=s-Ta+1+NE;for(let l=0;l<a;l++){const u=Math.pow(2,r);e.push(u);const d=1/(u-2),h=-d,p=1+d,v=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,g=6,x=3,M=new Float32Array(x*g*_),A=new Float32Array(x*g*_);for(let y=0;y<_;y++){const N=y%3*2/3-1,k=y>2?0:-1,b=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];M.set(b,x*g*y);for(let I=0;I<g;I++){const P=v[I*2]*2-1,U=v[I*2+1]*2-1;y===0?Es.set(1,U,P):y===1?Es.set(-P,1,-U):y===2?Es.set(-P,U,1):y===3?Es.set(-1,U,-P):y===4?Es.set(-P,-1,U):Es.set(P,U,-1),Es.toArray(A,(y*g+I)*x)}}const S=new ln;S.setAttribute("position",new zn(M,x)),S.setAttribute("outputDirection",new zn(A,x)),t.push(new xn(S,null)),r>Ta&&r--}return{lodMeshes:t,sizeLods:e}}function f0(s,e,t){const r=new Vi(s,e,t);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ma(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function kE(s,e,t){return new sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function BE(s,e,t){return new sr({name:"SphericalGaussianBlur",defines:{SAMPLES:DE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function h0(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function p0(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bv extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Oo(5,5,5),l=new sr({name:"CubemapFromEquirect",uniforms:La(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ar});l.uniforms.tEquirect.value=t;const u=new xn(a,l),d=t.minFilter;return t.minFilter===bs&&(t.minFilter=Gn),new GS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function zE(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,x=!1){return g==null?null:x?u(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===Sd||x===Md)if(e.has(g)){const M=e.get(g).texture;return d(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new bv(M.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",p),d(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,M=x===Sd||x===Md,A=x===Is||x===Ia;if(M||A){let S=t.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new d0(s)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const N=g.image;return M&&N&&N.height>0||A&&N&&h(N)?(r===null&&(r=new d0(s)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function d(g,x){return x===Sd?g.mapping=Is:x===Md&&(g.mapping=Ia),g}function h(g){let x=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&x++;return x===M}function p(g){const x=g.target;x.removeEventListener("dispose",p);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function GE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ca("WebGLRenderer: "+r+" extension not supported."),a}}}function VE(s,e,t,r){const a={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete a[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(_,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function p(_){const g=[],x=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(x!==null){const N=x.array;A=x.version;for(let k=0,b=N.length;k<b;k+=3){const I=N[k+0],P=N[k+1],U=N[k+2];g.push(I,P,P,U,U,I)}}else{const N=M.array;A=M.version;for(let k=0,b=N.length/3-1;k<b;k+=3){const I=k+0,P=k+1,U=k+2;g.push(I,P,P,U,U,I)}}const S=new(M.count>=65535?_v:vv)(g,1);S.version=A;const y=l.get(_);y&&e.remove(y),l.set(_,S)}function v(_){const g=l.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:v}}function HE(s,e,t){let r;function a(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function h(_,g){s.drawElements(r,g,l,_*u),t.update(g,r,1)}function p(_,g,x){x!==0&&(s.drawElementsInstanced(r,g,l,_*u,x),t.update(g,r,x))}function v(_,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,x);let A=0;for(let S=0;S<x;S++)A+=g[S];t.update(A,r,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function WE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function XE(s,e,t){const r=new WeakMap,a=new an;function l(u,d,h){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let O=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",O)};var x=O;g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),S===!0&&(b=3);let I=d.attributes.position.count*b,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*P*4*_),w=new mv(U,I,P,_);w.type=zi,w.needsUpdate=!0;const L=b*4;for(let G=0;G<_;G++){const W=y[G],K=N[G],z=k[G],Z=I*P*4*G;for(let ge=0;ge<W.count;ge++){const J=ge*L;M===!0&&(a.fromBufferAttribute(W,ge),U[Z+J+0]=a.x,U[Z+J+1]=a.y,U[Z+J+2]=a.z,U[Z+J+3]=0),A===!0&&(a.fromBufferAttribute(K,ge),U[Z+J+4]=a.x,U[Z+J+5]=a.y,U[Z+J+6]=a.z,U[Z+J+7]=0),S===!0&&(a.fromBufferAttribute(z,ge),U[Z+J+8]=a.x,U[Z+J+9]=a.y,U[Z+J+10]=a.z,U[Z+J+11]=z.itemSize===4?a.w:1)}}g={count:_,texture:w,size:new ht(I,P)},r.set(d,g),d.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const A=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function jE(s,e,t,r,a){let l=new WeakMap;function u(p){const v=a.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==v&&(x.update(),l.set(x,v))}return g}function d(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const YE={[tv]:"LINEAR_TONE_MAPPING",[nv]:"REINHARD_TONE_MAPPING",[iv]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[sv]:"AGX_TONE_MAPPING",[av]:"NEUTRAL_TONE_MAPPING",[rv]:"CUSTOM_TONE_MAPPING"};function $E(s,e,t,r,a,l){const u=new Vi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,h=null;const p=new ln;p.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const v=new DS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new xn(p,v),g=new bh(-1,1,1,-1,0,1);let x=null,M=null,A=!1,S,y=null,N=[],k=!1;this.setSize=function(b,I){u.setSize(b,I),d!==null&&d.setSize(b,I),h!==null&&h.setSize(b,I);for(let P=0;P<N.length;P++){const U=N[P];U.setSize&&U.setSize(b,I)}},this.setEffects=function(b){N=b,k=N.length>0&&N[0].isRenderPass===!0;const I=u.width,P=u.height;N.length>0&&d===null&&(d=new Vi(I,P,{type:rr,depthBuffer:!1,stencilBuffer:!1}),h=new Vi(I,P,{type:rr,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<N.length;U++){const w=N[U];w.setSize&&w.setSize(I,P)}},this.begin=function(b,I){if(A||b.toneMapping===nr&&N.length===0)return!1;if(y=I,I!==null){const P=I.width,U=I.height;(u.width!==P||u.height!==U)&&this.setSize(P,U)}return k===!1&&b.setRenderTarget(u),S=b.toneMapping,b.toneMapping=nr,!0},this.hasRenderPass=function(){return k},this.end=function(b,I){b.toneMapping=S,A=!0;let P=u,U=d;for(let w=0;w<N.length;w++){const L=N[w];L.enabled!==!1&&(L.render(b,U,P,I),L.needsSwap!==!1&&(P=U,U=U===d?h:d))}if(x!==b.outputColorSpace||M!==b.toneMapping){x=b.outputColorSpace,M=b.toneMapping,v.defines={},Lt.getTransfer(x)===Xt&&(v.defines.SRGB_TRANSFER="");const w=YE[M];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(y),b.render(_,g),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const Cv=new $n,eh=new Do(1,1),Rv=new mv,Pv=new rS,Iv=new xv,m0=[],g0=[],v0=new Float32Array(16),_0=new Float32Array(9),y0=new Float32Array(4);function Na(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=m0[a];if(l===void 0&&(l=new Float32Array(a),m0[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function kc(s,e){let t=g0[e];t===void 0&&(t=new Int32Array(e),g0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function KE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function ZE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function QE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),Mn(t,r)}}function ew(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;_0.set(r),s.uniformMatrix3fv(this.addr,!1,_0),Mn(t,r)}}function tw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;v0.set(r),s.uniformMatrix4fv(this.addr,!1,v0),Mn(t,r)}}function nw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function aw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function uw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(eh.compareFunction=t.isReversedDepthBuffer()?_h:vh,l=eh):l=Cv,t.setTexture2D(e||l,a)}function dw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Pv,a)}function fw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Iv,a)}function hw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Rv,a)}function pw(s){switch(s){case 5126:return qE;case 35664:return KE;case 35665:return ZE;case 35666:return JE;case 35674:return QE;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return aw;case 36294:return ow;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return hw}}function mw(s,e){s.uniform1fv(this.addr,e)}function gw(s,e){const t=Na(e,this.size,2);s.uniform2fv(this.addr,t)}function vw(s,e){const t=Na(e,this.size,3);s.uniform3fv(this.addr,t)}function _w(s,e){const t=Na(e,this.size,4);s.uniform4fv(this.addr,t)}function yw(s,e){const t=Na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xw(s,e){const t=Na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sw(s,e){const t=Na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mw(s,e){s.uniform1iv(this.addr,e)}function Ew(s,e){s.uniform2iv(this.addr,e)}function ww(s,e){s.uniform3iv(this.addr,e)}function Aw(s,e){s.uniform4iv(this.addr,e)}function Tw(s,e){s.uniform1uiv(this.addr,e)}function bw(s,e){s.uniform2uiv(this.addr,e)}function Cw(s,e){s.uniform3uiv(this.addr,e)}function Rw(s,e){s.uniform4uiv(this.addr,e)}function Pw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=eh:u=Cv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||u,l[d])}function Iw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Pv,l[u])}function Lw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Iv,l[u])}function Nw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Rv,l[u])}function Dw(s){switch(s){case 5126:return mw;case 35664:return gw;case 35665:return vw;case 35666:return _w;case 35674:return yw;case 35675:return xw;case 35676:return Sw;case 5124:case 35670:return Mw;case 35667:case 35671:return Ew;case 35668:case 35672:return ww;case 35669:case 35673:return Aw;case 5125:return Tw;case 36294:return bw;case 36295:return Cw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Nw}}class Uw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pw(t.type)}}class Fw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dw(t.type)}}class Ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function x0(s,e){s.seq.push(e),s.map[e.id]=e}function kw(s,e,t){const r=s.name,a=r.length;for(ef.lastIndex=0;;){const l=ef.exec(r),u=ef.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){x0(t,p===void 0?new Uw(d,s,e):new Fw(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new Ow(d),x0(t,_)),t=_}}}class Sc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),h=e.getUniformLocation(t,d.name);kw(d,h,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function S0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Bw=37297;let zw=0;function Gw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const M0=new wt;function Vw(s){Lt._getMatrix(M0,Lt.workingColorSpace,s);const e=`mat3( ${M0.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Gw(s.getShaderSource(e),d)}else return l}function Hw(s,e){const t=Vw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ww={[tv]:"Linear",[nv]:"Reinhard",[iv]:"Cineon",[ch]:"ACESFilmic",[sv]:"AgX",[av]:"Neutral",[rv]:"Custom"};function Xw(s,e){const t=Ww[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new q;function jw(){Lt.getLuminanceCoefficients(dc);const s=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function $w(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function To(s){return s!==""}function w0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(Kw,Jw)}const Zw=new Map;function Jw(s,e){let t=Tt[e];if(t===void 0){const r=Zw.get(e);if(r!==void 0)t=Tt[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return th(t)}const Qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T0(s){return s.replace(Qw,eA)}function eA(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function b0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const tA={[hc]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function nA(s){return tA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Is]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function rA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const sA={[Ia]:"ENVMAP_MODE_REFRACTION"};function aA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[ev]:"ENVMAP_BLENDING_MULTIPLY",[Dx]:"ENVMAP_BLENDING_MIX",[Ux]:"ENVMAP_BLENDING_ADD"};function lA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":oA[s.combine]||"ENVMAP_BLENDING_NONE"}function cA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function uA(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=nA(t),p=rA(t),v=aA(t),_=lA(t),g=cA(t),x=Yw(t),M=$w(l),A=a.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(To).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(To).join(`
`),y.length>0&&(y+=`
`)):(S=[b0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),y=[b0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==nr?Xw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,Hw("linearToOutputTexel",t.outputColorSpace),jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),u=th(u),u=w0(u,t),u=A0(u,t),d=th(d),d=w0(d,t),d=A0(d,t),u=T0(u),d=T0(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const k=N+S+u,b=N+y+d,I=S0(a,a.VERTEX_SHADER,k),P=S0(a,a.FRAGMENT_SHADER,b);a.attachShader(A,I),a.attachShader(A,P),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(G){if(s.debug.checkShaderErrors){const W=a.getProgramInfoLog(A)||"",K=a.getShaderInfoLog(I)||"",z=a.getShaderInfoLog(P)||"",Z=W.trim(),ge=K.trim(),J=z.trim();let ee=!0,H=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,I,P);else{const j=E0(a,I,"vertex"),D=E0(a,P,"fragment");Ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+j+`
`+D)}else Z!==""?gt("WebGLProgram: Program Info Log:",Z):(ge===""||J==="")&&(H=!1);H&&(G.diagnostics={runnable:ee,programLog:Z,vertexShader:{log:ge,prefix:S},fragmentShader:{log:J,prefix:y}})}a.deleteShader(I),a.deleteShader(P),w=new Sc(a,A),L=qw(a,A)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(A,Bw)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=P,this}let dA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hA(e),t.set(e,r)),r}}class hA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function pA(s){return s===Ls||s===Ac||s===Tc}function mA(s,e,t,r,a,l){const u=new xh,d=new fA,h=new Set,p=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function A(w,L,O,G,W,K){const z=G.fog,Z=W.geometry,ge=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ee=e.get(w.envMap||ge,J),H=ee&&ee.mapping===Uc?ee.image.height:null,j=x[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&gt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const D=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=D!==void 0?D.length:0;let Pe=0;Z.morphAttributes.position!==void 0&&(Pe=1),Z.morphAttributes.normal!==void 0&&(Pe=2),Z.morphAttributes.color!==void 0&&(Pe=3);let Ze,$e,we,re;if(j){const vt=er[j];Ze=vt.vertexShader,$e=vt.fragmentShader}else{Ze=w.vertexShader,$e=w.fragmentShader;const vt=d.getVertexShaderStage(w),pt=d.getFragmentShaderStage(w);d.update(w,vt,pt),we=vt.id,re=pt.id}const ne=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),Me=W.isInstancedMesh===!0,ke=W.isBatchedMesh===!0,_t=!!w.map,Dt=!!w.matcap,yt=!!ee,Mt=!!w.aoMap,Ut=!!w.lightMap,mt=!!w.bumpMap&&w.wireframe===!1,Gt=!!w.normalMap,$t=!!w.displacementMap,Vt=!!w.emissiveMap,st=!!w.metalnessMap,Nt=!!w.roughnessMap,$=w.anisotropy>0,kt=w.clearcoat>0,Pt=w.dispersion>0,F=w.retroreflectivity>0,E=w.iridescence>0,ie=w.sheen>0,ue=w.transmission>0,_e=$&&!!w.anisotropyMap,Le=kt&&!!w.clearcoatMap,pe=kt&&!!w.clearcoatNormalMap,oe=kt&&!!w.clearcoatRoughnessMap,ye=E&&!!w.iridescenceMap,ae=E&&!!w.iridescenceThicknessMap,ze=ie&&!!w.sheenColorMap,te=ie&&!!w.sheenRoughnessMap,fe=!!w.specularMap,Ae=!!w.specularColorMap,Ce=!!w.specularIntensityMap,be=ue&&!!w.transmissionMap,V=ue&&!!w.thicknessMap,Ne=!!w.gradientMap,xe=!!w.alphaMap,Re=w.alphaTest>0,De=!!w.alphaHash,Se=!!w.extensions;let Ge=nr;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const Ve={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:$e,defines:w.defines,customVertexShaderID:we,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:ke,batchingColor:ke&&W._colorsTexture!==null,instancing:Me,instancingColor:Me&&W.instanceColor!==null,instancingMorph:Me&&W.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:_t,matcap:Dt,envMap:yt,envMapMode:yt&&ee.mapping,envMapCubeUVHeight:H,aoMap:Mt,lightMap:Ut,bumpMap:mt,normalMap:Gt,displacementMap:$t,emissiveMap:Vt,normalMapObjectSpace:Gt&&w.normalMapType===kx,normalMapTangentSpace:Gt&&w.normalMapType===qf,packedNormalMap:Gt&&w.normalMapType===qf&&pA(w.normalMap.format),metalnessMap:st,roughnessMap:Nt,anisotropy:$,anisotropyMap:_e,clearcoat:kt,clearcoatMap:Le,clearcoatNormalMap:pe,clearcoatRoughnessMap:oe,dispersion:Pt,retroreflection:F,iridescence:E,iridescenceMap:ye,iridescenceThicknessMap:ae,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:te,specularMap:fe,specularColorMap:Ae,specularIntensityMap:Ce,transmission:ue,transmissionMap:be,thicknessMap:V,gradientMap:Ne,opaque:w.transparent===!1&&w.blending===Ro&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:Re,alphaHash:De,combine:w.combine,mapUv:_t&&M(w.map.channel),aoMapUv:Mt&&M(w.aoMap.channel),lightMapUv:Ut&&M(w.lightMap.channel),bumpMapUv:mt&&M(w.bumpMap.channel),normalMapUv:Gt&&M(w.normalMap.channel),displacementMapUv:$t&&M(w.displacementMap.channel),emissiveMapUv:Vt&&M(w.emissiveMap.channel),metalnessMapUv:st&&M(w.metalnessMap.channel),roughnessMapUv:Nt&&M(w.roughnessMap.channel),anisotropyMapUv:_e&&M(w.anisotropyMap.channel),clearcoatMapUv:Le&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:te&&M(w.sheenRoughnessMap.channel),specularMapUv:fe&&M(w.specularMap.channel),specularColorMapUv:Ae&&M(w.specularColorMap.channel),specularIntensityMapUv:Ce&&M(w.specularIntensityMap.channel),transmissionMapUv:be&&M(w.transmissionMap.channel),thicknessMapUv:V&&M(w.thicknessMap.channel),alphaMapUv:xe&&M(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Gt||$),vertexNormals:!!Z.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(_t||xe),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Z.attributes.normal===void 0&&Gt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Fe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Pe,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:_t&&w.map.isVideoTexture===!0&&Lt.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ki,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Se&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&w.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=h.has(1),Ve.vertexUv2s=h.has(2),Ve.vertexUv3s=h.has(3),h.clear(),Ve}function S(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const O in w.defines)L.push(O),L.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(y(L,w),N(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function y(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function N(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function k(w){const L=x[w.type];let O;if(L){const G=er[L];O=IS.clone(G.uniforms)}else O=w.uniforms;return O}function b(w,L){let O=v.get(L);return O!==void 0?++O.usedTimes:(O=new uA(s,L,w,a),p.push(O),v.set(L,O)),O}function I(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){d.remove(w)}function U(){d.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:k,acquireProgram:b,releaseProgram:I,releaseShaderCache:P,programs:p,dispose:U}}function gA(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function vA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function C0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function R0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,M,A,S,y){let N=s[e];return N===void 0?(N={id:g.id,object:g,geometry:x,material:M,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:y},s[e]=N):(N.id=g.id,N.object=g,N.geometry=x,N.material=M,N.materialVariant=u(g),N.groupOrder=A,N.renderOrder=g.renderOrder,N.z=S,N.group=y),e++,N}function h(g,x,M,A,S,y,N){N.reversedDepth===!0&&(S=-S);const k=d(g,x,M,A,S,y);M.transmission>0?r.push(k):M.transparent===!0?a.push(k):t.push(k)}function p(g,x,M,A,S,y){const N=d(g,x,M,A,S,y);M.transmission>0?r.unshift(N):M.transparent===!0?a.unshift(N):t.unshift(N)}function v(g,x){t.length>1&&t.sort(g||vA),r.length>1&&r.sort(x||C0),a.length>1&&a.sort(x||C0)}function _(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:_,sort:v}}function _A(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new R0,s.set(r,[u])):a>=l.length?(u=new R0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function yA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new St};break;case"SpotLight":t={position:new q,direction:new q,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function xA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let SA=0;function MA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EA(s){const e=new yA,t=xA(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,l=new Wt,u=new Wt;function d(p){let v=0,_=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,M=0,A=0,S=0,y=0,N=0,k=0,b=0,I=0,P=0,U=0,w=0,L=0,O=0;p.sort(MA);for(let W=0,K=p.length;W<K;W++){const z=p[W],Z=z.color,ge=z.intensity,J=z.distance;let ee=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ls?ee=z.shadow.map.texture:ee=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=Z.r*ge,_+=Z.g*ge,g+=Z.b*ge;else if(z.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],ge);O++}else if(z.isSunLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[M]=D,r.sunShadowMap[M]=ee;const le=j.getViewportCount();for(let Pe=0;Pe<le;Pe++)r.sunShadowMatrix[A+Pe]=j.getMatrix(Pe),r.sunShadowCascade[A+Pe]=j._cascadeData[Pe];A+=le,M++}r.sun[x]=H,x++}else if(z.isDirectionalLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,r.directionalShadow[S]=D,r.directionalShadowMap[S]=ee,r.directionalShadowMatrix[S]=z.shadow.matrix,I++}r.directional[S]=H,S++}else if(z.isSpotLight){const H=e.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(Z).multiplyScalar(ge),H.distance=J,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,r.spot[N]=H;const j=z.shadow;if(z.map&&(r.spotLightMap[w]=z.map,w++,j.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[N]=j.matrix,z.castShadow){const D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,r.spotShadow[N]=D,r.spotShadowMap[N]=ee,U++}N++}else if(z.isRectAreaLight){const H=e.get(z);H.color.copy(Z).multiplyScalar(ge),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[k]=H,k++}else if(z.isPointLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),H.distance=z.distance,H.decay=z.decay,z.castShadow){const j=z.shadow,D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,r.pointShadow[y]=D,r.pointShadowMap[y]=ee,r.pointShadowMatrix[y]=z.shadow.matrix,P++}r.point[y]=H,y++}else if(z.isHemisphereLight){const H=e.get(z);H.skyColor.copy(z.color).multiplyScalar(ge),H.groundColor.copy(z.groundColor).multiplyScalar(ge),r.hemi[b]=H,b++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const G=r.hash;(G.sunLength!==x||G.directionalLength!==S||G.pointLength!==y||G.spotLength!==N||G.rectAreaLength!==k||G.hemiLength!==b||G.numSunShadows!==M||G.numDirectionalShadows!==I||G.numPointShadows!==P||G.numSpotShadows!==U||G.numSpotMaps!==w||G.numLightProbes!==O)&&(r.sun.length=x,r.directional.length=S,r.spot.length=N,r.rectArea.length=k,r.point.length=y,r.hemi.length=b,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,G.sunLength=x,G.directionalLength=S,G.pointLength=y,G.spotLength=N,G.rectAreaLength=k,G.hemiLength=b,G.numSunShadows=M,G.numDirectionalShadows=I,G.numPointShadows=P,G.numSpotShadows=U,G.numSpotMaps=w,G.numLightProbes=O,r.version=SA++)}function h(p,v){let _=0,g=0,x=0,M=0,A=0,S=0;const y=v.matrixWorldInverse;for(let N=0,k=p.length;N<k;N++){const b=p[N];if(b.isSunLight){const I=r.sun[_];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(y),_++}else if(b.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(y),g++}else if(b.isSpotLight){const I=r.spot[M];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(y),M++}else if(b.isRectAreaLight){const I=r.rectArea[A];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(y),u.identity(),l.copy(b.matrixWorld),l.premultiply(y),u.extractRotation(l),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),A++}else if(b.isPointLight){const I=r.point[x];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const I=r.hemi[S];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(y),S++}}}return{setup:d,setupView:h,state:r}}function P0(s){const e=new EA(s),t=[],r=[],a=[];function l(g){_.camera=g,t.length=0,r.length=0,a.length=0}function u(g){t.push(g)}function d(g){r.push(g)}function h(g){a.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:h}}function wA(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new P0(s),e.set(a,[d])):l>=u.length?(d=new P0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`,bA=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],CA=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],I0=new Wt,Mo=new q,tf=new q;function RA(s,e,t){let r=new Mh;const a=new ht,l=new ht,u=new an,d=new FS,h=new OS,p={},v=t.maxTextureSize,_={[Ps]:Yn,[Yn]:Ps,[ki]:ki},g=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:AA,fragmentShader:TA}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new ln;M.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new xn(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let y=this.type;this.render=function(P,U,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===mx&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hc);const L=s.getRenderTarget(),O=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Ar),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const K=y!==this.type;K&&U.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Z=>Z.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Z=P.length;z<Z;z++){const ge=P[z],J=ge.shadow;if(J===void 0){gt("WebGLShadowMap:",ge,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const ee=J.getFrameExtents();a.multiply(ee),l.copy(J.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ee.x),a.x=l.x*ee.x,J.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ee.y),a.y=l.y*ee.y,J.mapSize.y=l.y));const H=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=H,J.map===null||K===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ao){if(ge.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Vi(a.x,a.y,{format:Ls,type:rr,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),J.map.texture.name=ge.name+".shadowMap",J.map.depthTexture=new Do(a.x,a.y,zi),J.map.depthTexture.name=ge.name+".shadowMapDepth",J.map.depthTexture.format=br,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ln,J.map.depthTexture.magFilter=Ln}else ge.isPointLight?(J.map=new bv(a.x),J.map.depthTexture=new wS(a.x,ir)):(J.map=new Vi(a.x,a.y),J.map.depthTexture=new Do(a.x,a.y,ir)),J.map.depthTexture.name=ge.name+".shadowMap",J.map.depthTexture.format=br,this.type===hc?(J.map.depthTexture.compareFunction=H?_h:vh,J.map.depthTexture.minFilter=Gn,J.map.depthTexture.magFilter=Gn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ln,J.map.depthTexture.magFilter=Ln);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==a.x||J.map.height!==a.y)&&J.map.setSize(a.x,a.y);const j=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ge.isPointLight!==!0&&J.updateMatrices(ge,w);for(let D=0;D<j;D++){const le=J.getCamera(D);if(ge.isPointLight){const Pe=J.camera,Ze=J.matrix,$e=ge.distance||Pe.far;$e!==Pe.far&&(Pe.far=$e,Pe.updateProjectionMatrix()),Mo.setFromMatrixPosition(ge.matrixWorld),Pe.position.copy(Mo),tf.copy(Pe.position),tf.add(bA[D]),Pe.up.copy(CA[D]),Pe.lookAt(tf),Pe.updateMatrixWorld(),Ze.makeTranslation(-Mo.x,-Mo.y,-Mo.z),I0.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(I0,Pe.coordinateSystem,Pe.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,D),s.clear();else{D===0&&(s.setRenderTarget(J.map),s.clear());const Pe=J.getViewport(D);u.set(l.x*Pe.x,l.y*Pe.y,l.x*Pe.z,l.y*Pe.w),W.viewport(u)}r=J.getFrustum(D),b(U,w,le,ge,this.type)}J.isPointLightShadow!==!0&&this.type===Ao&&N(J,w),J.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(L,O,G)};function N(P,U){const w=e.update(A);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null?P.mapPass=new Vi(a.x,a.y,{format:Ls,type:rr}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(U,null,w,g,A,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(U,null,w,x,A,null)}function k(P,U,w,L){let O=null;const G=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)O=G;else if(O=w.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=O.uuid,K=U.uuid;let z=p[W];z===void 0&&(z={},p[W]=z);let Z=z[K];Z===void 0&&(Z=O.clone(),z[K]=Z,U.addEventListener("dispose",I)),O=Z}if(O.visible=U.visible,O.wireframe=U.wireframe,L===Ao?O.side=U.shadowSide!==null?U.shadowSide:U.side:O.side=U.shadowSide!==null?U.shadowSide:_[U.side],O.alphaMap=U.alphaMap,O.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,O.map=U.map,O.clipShadows=U.clipShadows,O.clippingPlanes=U.clippingPlanes,O.clipIntersection=U.clipIntersection,O.displacementMap=U.displacementMap,O.displacementScale=U.displacementScale,O.displacementBias=U.displacementBias,O.wireframeLinewidth=U.wireframeLinewidth,O.linewidth=U.linewidth,w.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const W=s.properties.get(O);W.light=w}return O}function b(P,U,w,L,O){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===Ao)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const K=e.update(P),z=P.material;if(Array.isArray(z)){const Z=K.groups;for(let ge=0,J=Z.length;ge<J;ge++){const ee=Z[ge],H=z[ee.materialIndex];if(H&&H.visible){const j=k(P,H,L,O);P.onBeforeShadow(s,P,U,w,K,j,ee),s.renderBufferDirect(w,null,K,j,P,ee),P.onAfterShadow(s,P,U,w,K,j,ee)}}}else if(z.visible){const Z=k(P,z,L,O);P.onBeforeShadow(s,P,U,w,K,Z,null),s.renderBufferDirect(w,null,K,Z,P,null),P.onAfterShadow(s,P,U,w,K,Z,null)}}const W=P.children;for(let K=0,z=W.length;K<z;K++)b(W[K],U,w,L,O)}function I(P){P.target.removeEventListener("dispose",I);for(const w in p){const L=p[w],O=P.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function PA(s,e){function t(){let V=!1;const Ne=new an;let xe=null;const Re=new an(0,0,0,0);return{setMask:function(De){xe!==De&&!V&&(s.colorMask(De,De,De,De),xe=De)},setLocked:function(De){V=De},setClear:function(De,Se,Ge,Ve,vt){vt===!0&&(De*=Ve,Se*=Ve,Ge*=Ve),Ne.set(De,Se,Ge,Ve),Re.equals(Ne)===!1&&(s.clearColor(De,Se,Ge,Ve),Re.copy(Ne))},reset:function(){V=!1,xe=null,Re.set(-1,0,0,0)}}}function r(){let V=!1,Ne=!1,xe=null,Re=null,De=null;return{setReversed:function(Se){if(Ne!==Se){const Ge=e.get("EXT_clip_control");Se?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Ne},setTest:function(Se){Se?ne(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!V&&(s.depthMask(Se),xe=Se)},setFunc:function(Se){if(Ne&&(Se=Kx[Se]),Re!==Se){switch(Se){case uf:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Po:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case pf:s.depthFunc(s.GEQUAL);break;case mf:s.depthFunc(s.GREATER);break;case gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=Se}},setLocked:function(Se){V=Se},setClear:function(Se){De!==Se&&(De=Se,Ne&&(Se=1-Se),s.clearDepth(Se))},reset:function(){V=!1,xe=null,Re=null,De=null,Ne=!1}}}function a(){let V=!1,Ne=null,xe=null,Re=null,De=null,Se=null,Ge=null,Ve=null,vt=null;return{setTest:function(pt){V||(pt?ne(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(pt){Ne!==pt&&!V&&(s.stencilMask(pt),Ne=pt)},setFunc:function(pt,Bt,pn){(xe!==pt||Re!==Bt||De!==pn)&&(s.stencilFunc(pt,Bt,pn),xe=pt,Re=Bt,De=pn)},setOp:function(pt,Bt,pn){(Se!==pt||Ge!==Bt||Ve!==pn)&&(s.stencilOp(pt,Bt,pn),Se=pt,Ge=Bt,Ve=pn)},setLocked:function(pt){V=pt},setClear:function(pt){vt!==pt&&(s.clearStencil(pt),vt=pt)},reset:function(){V=!1,Ne=null,xe=null,Re=null,De=null,Se=null,Ge=null,Ve=null,vt=null}}}const l=new t,u=new r,d=new a,h=new WeakMap,p=new WeakMap;let v={},_={},g={},x=new WeakMap,M=[],A=null,S=!1,y=null,N=null,k=null,b=null,I=null,P=null,U=null,w=new St(0,0,0),L=0,O=!1,G=null,W=null,K=null,z=null,Z=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=ee>=2);let j=null,D={};const le=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Ze=new an().fromArray(le),$e=new an().fromArray(Pe);function we(V,Ne,xe,Re){const De=new Uint8Array(4),Se=s.createTexture();s.bindTexture(V,Se),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<xe;Ge++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ne+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Se}const re={};re[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ne(s.DEPTH_TEST),u.setFunc(Po),mt(!1),Gt(Eg),ne(s.CULL_FACE),Mt(Ar);function ne(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Fe(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Me(V,Ne){return g[V]!==Ne?(s.bindFramebuffer(V,Ne),g[V]=Ne,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ke(V,Ne){let xe=M,Re=!1;if(V){xe=x.get(Ne),xe===void 0&&(xe=[],x.set(Ne,xe));const De=V.textures;if(xe.length!==De.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Ge=De.length;Se<Ge;Se++)xe[Se]=s.COLOR_ATTACHMENT0+Se;xe.length=De.length,Re=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Re=!0);Re&&s.drawBuffers(xe)}function _t(V){return A!==V?(s.useProgram(V),A=V,!0):!1}const Dt={[Ea]:s.FUNC_ADD,[vx]:s.FUNC_SUBTRACT,[_x]:s.FUNC_REVERSE_SUBTRACT};Dt[yx]=s.MIN,Dt[xx]=s.MAX;const yt={[Sx]:s.ZERO,[Mx]:s.ONE,[Ex]:s.SRC_COLOR,[J0]:s.SRC_ALPHA,[Rx]:s.SRC_ALPHA_SATURATE,[bx]:s.DST_COLOR,[Ax]:s.DST_ALPHA,[wx]:s.ONE_MINUS_SRC_COLOR,[Q0]:s.ONE_MINUS_SRC_ALPHA,[Cx]:s.ONE_MINUS_DST_COLOR,[Tx]:s.ONE_MINUS_DST_ALPHA,[Px]:s.CONSTANT_COLOR,[Ix]:s.ONE_MINUS_CONSTANT_COLOR,[Lx]:s.CONSTANT_ALPHA,[Nx]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(V,Ne,xe,Re,De,Se,Ge,Ve,vt,pt){if(V===Ar){S===!0&&(Fe(s.BLEND),S=!1);return}if(S===!1&&(ne(s.BLEND),S=!0),V!==gx){if(V!==y||pt!==O){if((N!==Ea||I!==Ea)&&(s.blendEquation(s.FUNC_ADD),N=Ea,I=Ea),pt)switch(V){case Ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFunc(s.ONE,s.ONE);break;case wg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ag:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",V);break}else switch(V){case Ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wg:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",V);break}k=null,b=null,P=null,U=null,w.set(0,0,0),L=0,y=V,O=pt}return}De=De||Ne,Se=Se||xe,Ge=Ge||Re,(Ne!==N||De!==I)&&(s.blendEquationSeparate(Dt[Ne],Dt[De]),N=Ne,I=De),(xe!==k||Re!==b||Se!==P||Ge!==U)&&(s.blendFuncSeparate(yt[xe],yt[Re],yt[Se],yt[Ge]),k=xe,b=Re,P=Se,U=Ge),(Ve.equals(w)===!1||vt!==L)&&(s.blendColor(Ve.r,Ve.g,Ve.b,vt),w.copy(Ve),L=vt),y=V,O=!1}function Ut(V,Ne){V.side===ki?Fe(s.CULL_FACE):ne(s.CULL_FACE);let xe=V.side===Yn;Ne&&(xe=!xe),mt(xe),V.blending===Ro&&V.transparent===!1?Mt(Ar):Mt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Re=V.stencilWrite;d.setTest(Re),Re&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Vt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){G!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),G=V)}function Gt(V){V!==hx?(ne(s.CULL_FACE),V!==W&&(V===Eg?s.cullFace(s.BACK):V===px?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),W=V}function $t(V){V!==K&&(J&&s.lineWidth(V),K=V)}function Vt(V,Ne,xe){V?(ne(s.POLYGON_OFFSET_FILL),(z!==Ne||Z!==xe)&&(z=Ne,Z=xe,u.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,xe))):Fe(s.POLYGON_OFFSET_FILL)}function st(V){V?ne(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function Nt(V){V===void 0&&(V=s.TEXTURE0+ge-1),j!==V&&(s.activeTexture(V),j=V)}function $(V,Ne,xe){xe===void 0&&(j===null?xe=s.TEXTURE0+ge-1:xe=j);let Re=D[xe];Re===void 0&&(Re={type:void 0,texture:void 0},D[xe]=Re),(Re.type!==V||Re.texture!==Ne)&&(j!==xe&&(s.activeTexture(xe),j=xe),s.bindTexture(V,Ne||re[V]),Re.type=V,Re.texture=Ne)}function kt(){const V=D[j];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Pt(){try{s.compressedTexImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function E(){try{s.texSubImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ie(){try{s.texSubImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function Le(){try{s.texStorage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function pe(){try{s.texStorage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function oe(){try{s.texImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ye(){try{s.texImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ae(V){return _[V]!==void 0?_[V]:s.getParameter(V)}function ze(V,Ne){_[V]!==Ne&&(s.pixelStorei(V,Ne),_[V]=Ne)}function te(V){Ze.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ze.copy(V))}function fe(V){$e.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),$e.copy(V))}function Ae(V,Ne){let xe=p.get(Ne);xe===void 0&&(xe=new WeakMap,p.set(Ne,xe));let Re=xe.get(V);Re===void 0&&(Re=s.getUniformBlockIndex(Ne,V.name),xe.set(V,Re))}function Ce(V,Ne){const Re=p.get(Ne).get(V);h.get(Ne)!==Re&&(s.uniformBlockBinding(Ne,Re,V.__bindingPointIndex),h.set(Ne,Re))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},j=null,D={},g={},x=new WeakMap,M=[],A=null,S=!1,y=null,N=null,k=null,b=null,I=null,P=null,U=null,w=new St(0,0,0),L=0,O=!1,G=null,W=null,K=null,z=null,Z=null,Ze.set(0,0,s.canvas.width,s.canvas.height),$e.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ne,disable:Fe,bindFramebuffer:Me,drawBuffers:ke,useProgram:_t,setBlending:Mt,setMaterial:Ut,setFlipSided:mt,setCullFace:Gt,setLineWidth:$t,setPolygonOffset:Vt,setScissorTest:st,activeTexture:Nt,bindTexture:$,unbindTexture:kt,compressedTexImage2D:Pt,compressedTexImage3D:F,texImage2D:oe,texImage3D:ye,pixelStorei:ze,getParameter:ae,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:Le,texStorage3D:pe,texSubImage2D:E,texSubImage3D:ie,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:te,viewport:fe,reset:be}}function IA(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ht,v=new WeakMap,_=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(F,E){return M?new OffscreenCanvas(F,E):Rc("canvas")}function S(F,E,ie){let ue=1;const _e=Pt(F);if((_e.width>ie||_e.height>ie)&&(ue=ie/Math.max(_e.width,_e.height)),ue<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Le=Math.floor(ue*_e.width),pe=Math.floor(ue*_e.height);g===void 0&&(g=A(Le,pe));const oe=E?A(Le,pe):g;return oe.width=Le,oe.height=pe,oe.getContext("2d").drawImage(F,0,0,Le,pe),gt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Le+"x"+pe+")."),oe}else return"data"in F&&gt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),F;return F}function y(F){return F.generateMipmaps}function N(F){s.generateMipmap(F)}function k(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(F,E,ie,ue,_e,Le=!1){if(F!==null){if(s[F]!==void 0)return s[F];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pe;ue&&(pe=e.get("EXT_texture_norm16"),pe||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=E;if(E===s.RED&&(ie===s.FLOAT&&(oe=s.R32F),ie===s.HALF_FLOAT&&(oe=s.R16F),ie===s.UNSIGNED_BYTE&&(oe=s.R8),ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.R16_EXT),ie===s.SHORT&&pe&&(oe=pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.R8UI),ie===s.UNSIGNED_SHORT&&(oe=s.R16UI),ie===s.UNSIGNED_INT&&(oe=s.R32UI),ie===s.BYTE&&(oe=s.R8I),ie===s.SHORT&&(oe=s.R16I),ie===s.INT&&(oe=s.R32I)),E===s.RG&&(ie===s.FLOAT&&(oe=s.RG32F),ie===s.HALF_FLOAT&&(oe=s.RG16F),ie===s.UNSIGNED_BYTE&&(oe=s.RG8),ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.RG16_EXT),ie===s.SHORT&&pe&&(oe=pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.RG8UI),ie===s.UNSIGNED_SHORT&&(oe=s.RG16UI),ie===s.UNSIGNED_INT&&(oe=s.RG32UI),ie===s.BYTE&&(oe=s.RG8I),ie===s.SHORT&&(oe=s.RG16I),ie===s.INT&&(oe=s.RG32I)),E===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),ie===s.UNSIGNED_INT&&(oe=s.RGB32UI),ie===s.BYTE&&(oe=s.RGB8I),ie===s.SHORT&&(oe=s.RGB16I),ie===s.INT&&(oe=s.RGB32I)),E===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),ie===s.UNSIGNED_INT&&(oe=s.RGBA32UI),ie===s.BYTE&&(oe=s.RGBA8I),ie===s.SHORT&&(oe=s.RGBA16I),ie===s.INT&&(oe=s.RGBA32I)),E===s.RGB&&(ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.RGB16_EXT),ie===s.SHORT&&pe&&(oe=pe.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),E===s.RGBA){const ye=Le?Cc:Lt.getTransfer(_e);ie===s.FLOAT&&(oe=s.RGBA32F),ie===s.HALF_FLOAT&&(oe=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(oe=ye===Xt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.RGBA16_EXT),ie===s.SHORT&&pe&&(oe=pe.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function I(F,E){let ie;return F?E===null||E===ir||E===Lo?ie=s.DEPTH24_STENCIL8:E===zi?ie=s.DEPTH32F_STENCIL8:E===Io&&(ie=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ir||E===Lo?ie=s.DEPTH_COMPONENT24:E===zi?ie=s.DEPTH_COMPONENT32F:E===Io&&(ie=s.DEPTH_COMPONENT16),ie}function P(F,E){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ln&&F.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function U(F){const E=F.target;E.removeEventListener("dispose",U),L(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function w(F){const E=F.target;E.removeEventListener("dispose",w),G(E)}function L(F){const E=r.get(F);if(E.__webglInit===void 0)return;const ie=F.source,ue=x.get(ie);if(ue){const _e=ue[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&O(F),Object.keys(ue).length===0&&x.delete(ie)}r.remove(F)}function O(F){const E=r.get(F);s.deleteTexture(E.__webglTexture);const ie=F.source,ue=x.get(ie);delete ue[E.__cacheKey],u.memory.textures--}function G(F){const E=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let _e=0;_e<E.__webglFramebuffer[ue].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[ue][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)s.deleteFramebuffer(E.__webglFramebuffer[ue]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=F.textures;for(let ue=0,_e=ie.length;ue<_e;ue++){const Le=r.get(ie[ue]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),u.memory.textures--),r.remove(ie[ue])}r.remove(F)}let W=0;function K(){W=0}function z(){return W}function Z(F){W=F}function ge(){const F=W;return F>=a.maxTextures&&gt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,F}function J(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function ee(F,E){const ie=r.get(F);if(F.isVideoTexture&&$(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ie.__version!==F.version){const ue=F.image;if(ue===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(ie,F,E);return}}else F.isExternalTexture&&(ie.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+E)}function H(F,E){const ie=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){Fe(ie,F,E);return}else F.isExternalTexture&&(ie.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+E)}function j(F,E){const ie=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){Fe(ie,F,E);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+E)}function D(F,E){const ie=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ie.__version!==F.version){Me(ie,F,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+E)}const le={[vf]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[_f]:s.MIRRORED_REPEAT},Pe={[Ln]:s.NEAREST,[Fx]:s.NEAREST_MIPMAP_NEAREST,[Bl]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[Ed]:s.LINEAR_MIPMAP_NEAREST,[bs]:s.LINEAR_MIPMAP_LINEAR},Ze={[zx]:s.NEVER,[Xx]:s.ALWAYS,[Gx]:s.LESS,[vh]:s.LEQUAL,[Vx]:s.EQUAL,[_h]:s.GEQUAL,[Hx]:s.GREATER,[Wx]:s.NOTEQUAL};function $e(F,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===Ed||E.magFilter===Bl||E.magFilter===bs||E.minFilter===Gn||E.minFilter===Ed||E.minFilter===Bl||E.minFilter===bs)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,le[E.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,Pe[E.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,Pe[E.minFilter]),E.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,Ze[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Bl&&E.minFilter!==bs||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function we(F,E){let ie=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",U));const ue=E.source;let _e=x.get(ue);_e===void 0&&(_e={},x.set(ue,_e));const Le=J(E);if(Le!==F.__cacheKey){_e[Le]===void 0&&(_e[Le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),_e[Le].usedTimes++;const pe=_e[F.__cacheKey];pe!==void 0&&(_e[F.__cacheKey].usedTimes--,pe.usedTimes===0&&O(E)),F.__cacheKey=Le,F.__webglTexture=_e[Le].texture}return ie}function re(F,E,ie){return Math.floor(Math.floor(F/ie)/E)}function ne(F,E,ie,ue){const Le=F.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ie,ue,E.data);else{Le.sort((ze,te)=>ze.start-te.start);let pe=0;for(let ze=1;ze<Le.length;ze++){const te=Le[pe],fe=Le[ze],Ae=te.start+te.count,Ce=re(fe.start,E.width,4),be=re(te.start,E.width,4);fe.start<=Ae+1&&Ce===be&&re(fe.start+fe.count-1,E.width,4)===Ce?te.count=Math.max(te.count,fe.start+fe.count-te.start):(++pe,Le[pe]=fe)}Le.length=pe+1;const oe=t.getParameter(s.UNPACK_ROW_LENGTH),ye=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ze=0,te=Le.length;ze<te;ze++){const fe=Le[ze],Ae=Math.floor(fe.start/4),Ce=Math.ceil(fe.count/4),be=Ae%E.width,V=Math.floor(Ae/E.width),Ne=Ce,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,be),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,be,V,Ne,xe,ie,ue,E.data)}F.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,oe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function Fe(F,E,ie){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);const _e=we(F,E),Le=E.source;t.bindTexture(ue,F.__webglTexture,s.TEXTURE0+ie);const pe=r.get(Le);if(Le.version!==pe.__version||_e===!0){if(t.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xe=Lt.getPrimaries(Lt.workingColorSpace),Re=E.colorSpace===ts?null:Lt.getPrimaries(E.colorSpace),De=E.colorSpace===ts||xe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ye=S(E.image,!1,a.maxTextureSize);ye=kt(E,ye);const ae=l.convert(E.format,E.colorSpace),ze=l.convert(E.type);let te=b(E.internalFormat,ae,ze,E.normalized,E.colorSpace,E.isVideoTexture);$e(ue,E);let fe;const Ae=E.mipmaps,Ce=E.isVideoTexture!==!0,be=pe.__version===void 0||_e===!0,V=Le.dataReady,Ne=P(E,ye);if(E.isDepthTexture)te=I(E.format===Cs,E.type),be&&(Ce?t.texStorage2D(s.TEXTURE_2D,1,te,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,te,ye.width,ye.height,0,ae,ze,null));else if(E.isDataTexture)if(Ae.length>0){Ce&&be&&t.texStorage2D(s.TEXTURE_2D,Ne,te,Ae[0].width,Ae[0].height);for(let xe=0,Re=Ae.length;xe<Re;xe++)fe=Ae[xe],Ce?V&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,ae,ze,fe.data):t.texImage2D(s.TEXTURE_2D,xe,te,fe.width,fe.height,0,ae,ze,fe.data);E.generateMipmaps=!1}else Ce?(be&&t.texStorage2D(s.TEXTURE_2D,Ne,te,ye.width,ye.height),V&&ne(E,ye,ae,ze)):t.texImage2D(s.TEXTURE_2D,0,te,ye.width,ye.height,0,ae,ze,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ce&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,te,Ae[0].width,Ae[0].height,ye.depth);for(let xe=0,Re=Ae.length;xe<Re;xe++)if(fe=Ae[xe],E.format!==Gi)if(ae!==null)if(Ce){if(V)if(E.layerUpdates.size>0){const De=c0(fe.width,fe.height,E.format,E.type);for(const Se of E.layerUpdates){const Ge=fe.data.subarray(Se*De/fe.data.BYTES_PER_ELEMENT,(Se+1)*De/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Se,fe.width,fe.height,1,ae,Ge)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,fe.width,fe.height,ye.depth,ae,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,te,fe.width,fe.height,ye.depth,0,fe.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,fe.width,fe.height,ye.depth,ae,ze,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,te,fe.width,fe.height,ye.depth,0,ae,ze,fe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ce&&be&&t.texStorage2D(s.TEXTURE_2D,Ne,te,Ae[0].width,Ae[0].height);for(let xe=0,Re=Ae.length;xe<Re;xe++)fe=Ae[xe],E.format!==Gi?ae!==null?Ce?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,ae,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,te,fe.width,fe.height,0,fe.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?V&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,ae,ze,fe.data):t.texImage2D(s.TEXTURE_2D,xe,te,fe.width,fe.height,0,ae,ze,fe.data)}else if(E.isDataArrayTexture)if(Ce){if(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,te,ye.width,ye.height,ye.depth),V)if(E.layerUpdates.size>0){const xe=c0(ye.width,ye.height,E.format,E.type);for(const Re of E.layerUpdates){const De=ye.data.subarray(Re*xe/ye.data.BYTES_PER_ELEMENT,(Re+1)*xe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Re,ye.width,ye.height,1,ae,ze,De)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ae,ze,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,ye.width,ye.height,ye.depth,0,ae,ze,ye.data);else if(E.isData3DTexture)Ce?(be&&t.texStorage3D(s.TEXTURE_3D,Ne,te,ye.width,ye.height,ye.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ae,ze,ye.data)):t.texImage3D(s.TEXTURE_3D,0,te,ye.width,ye.height,ye.depth,0,ae,ze,ye.data);else if(E.isFramebufferTexture){if(be)if(Ce)t.texStorage2D(s.TEXTURE_2D,Ne,te,ye.width,ye.height);else{let xe=ye.width,Re=ye.height;for(let De=0;De<Ne;De++)t.texImage2D(s.TEXTURE_2D,De,te,xe,Re,0,ae,ze,null),xe>>=1,Re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ye.parentNode!==xe){xe.appendChild(ye),_.add(E),xe.onpaint=Re=>{const De=Re.changedElements;for(const Se of _)De.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ye);else{const De=s.RGBA,Se=s.RGBA,Ge=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,Se,Ge,ye)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ce&&be){const xe=Pt(Ae[0]);t.texStorage2D(s.TEXTURE_2D,Ne,te,xe.width,xe.height)}for(let xe=0,Re=Ae.length;xe<Re;xe++)fe=Ae[xe],Ce?V&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ae,ze,fe):t.texImage2D(s.TEXTURE_2D,xe,te,ae,ze,fe);E.generateMipmaps=!1}else if(Ce){if(be){const xe=Pt(ye);t.texStorage2D(s.TEXTURE_2D,Ne,te,xe.width,xe.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,ze,ye)}else t.texImage2D(s.TEXTURE_2D,0,te,ae,ze,ye);y(E)&&N(ue),pe.__version=Le.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Me(F,E,ie){if(E.image.length!==6)return;const ue=we(F,E),_e=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+ie);const Le=r.get(_e);if(_e.version!==Le.__version||ue===!0){t.activeTexture(s.TEXTURE0+ie);const pe=Lt.getPrimaries(Lt.workingColorSpace),oe=E.colorSpace===ts?null:Lt.getPrimaries(E.colorSpace),ye=E.colorSpace===ts||pe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,ze=E.image[0]&&E.image[0].isDataTexture,te=[];for(let Se=0;Se<6;Se++)!ae&&!ze?te[Se]=S(E.image[Se],!0,a.maxCubemapSize):te[Se]=ze?E.image[Se].image:E.image[Se],te[Se]=kt(E,te[Se]);const fe=te[0],Ae=l.convert(E.format,E.colorSpace),Ce=l.convert(E.type),be=b(E.internalFormat,Ae,Ce,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Ne=Le.__version===void 0||ue===!0,xe=_e.dataReady;let Re=P(E,fe);$e(s.TEXTURE_CUBE_MAP,E);let De;if(ae){V&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,be,fe.width,fe.height);for(let Se=0;Se<6;Se++){De=te[Se].mipmaps;for(let Ge=0;Ge<De.length;Ge++){const Ve=De[Ge];E.format!==Gi?Ae!==null?V?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,Ve.width,Ve.height,Ae,Ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,be,Ve.width,Ve.height,0,Ve.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,Ve.width,Ve.height,Ae,Ce,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,be,Ve.width,Ve.height,0,Ae,Ce,Ve.data)}}}else{if(De=E.mipmaps,V&&Ne){De.length>0&&Re++;const Se=Pt(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,be,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ze){V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,te[Se].width,te[Se].height,Ae,Ce,te[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,te[Se].width,te[Se].height,0,Ae,Ce,te[Se].data);for(let Ge=0;Ge<De.length;Ge++){const vt=De[Ge].image[Se].image;V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,vt.width,vt.height,Ae,Ce,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,be,vt.width,vt.height,0,Ae,Ce,vt.data)}}else{V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae,Ce,te[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,Ae,Ce,te[Se]);for(let Ge=0;Ge<De.length;Ge++){const Ve=De[Ge];V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,Ae,Ce,Ve.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,be,Ae,Ce,Ve.image[Se])}}}y(E)&&N(s.TEXTURE_CUBE_MAP),Le.__version=_e.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function ke(F,E,ie,ue,_e,Le){const pe=l.convert(ie.format,ie.colorSpace),oe=l.convert(ie.type),ye=b(ie.internalFormat,pe,oe,ie.normalized,ie.colorSpace),ae=r.get(E),ze=r.get(ie);if(ze.__renderTarget=E,!ae.__hasExternalTextures){const te=Math.max(1,E.width>>Le),fe=Math.max(1,E.height>>Le);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Le,ye,te,fe,E.depth,0,pe,oe,null):t.texImage2D(_e,Le,ye,te,fe,0,pe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Nt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,_e,ze.__webglTexture,0,st(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,_e,ze.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(F,E,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,F),E.depthBuffer){const ue=E.depthTexture,_e=ue&&ue.isDepthTexture?ue.type:null,Le=I(E.stencilBuffer,_e),pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Nt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st(E),Le,E.width,E.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,st(E),Le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,F)}else{const ue=E.textures;for(let _e=0;_e<ue.length;_e++){const Le=ue[_e],pe=l.convert(Le.format,Le.colorSpace),oe=l.convert(Le.type),ye=b(Le.internalFormat,pe,oe,Le.normalized,Le.colorSpace);Nt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st(E),ye,E.width,E.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,st(E),ye,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ye,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(F,E,ie){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=r.get(E.depthTexture);if(_e.__renderTarget=E,(!_e.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),_e.__webglTexture===void 0){_e.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),$e(s.TEXTURE_CUBE_MAP,E.depthTexture);const ae=l.convert(E.depthTexture.format),ze=l.convert(E.depthTexture.type);let te;E.depthTexture.format===br?te=s.DEPTH_COMPONENT24:E.depthTexture.format===Cs&&(te=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,te,E.width,E.height,0,ae,ze,null)}}else ee(E.depthTexture,0);const Le=_e.__webglTexture,pe=st(E),oe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,ye=E.depthTexture.format===Cs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===br)Nt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,oe,Le,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ye,oe,Le,0);else if(E.depthTexture.format===Cs)Nt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,oe,Le,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ye,oe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yt(F){const E=r.get(F),ie=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ue=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",_e)};ue.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=ue}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(ie)for(let ue=0;ue<6;ue++)Dt(E.__webglFramebuffer[ue],F,ue);else{const ue=F.texture.mipmaps;ue&&ue.length>0?Dt(E.__webglFramebuffer[0],F,0):Dt(E.__webglFramebuffer,F,0)}else if(ie){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=s.createRenderbuffer(),_t(E.__webglDepthbuffer[ue],F,!1);else{const _e=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Le)}}else{const ue=F.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),_t(E.__webglDepthbuffer,F,!1);else{const _e=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(F,E,ie){const ue=r.get(F);E!==void 0&&ke(ue.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&yt(F)}function Ut(F){const E=F.texture,ie=r.get(F),ue=r.get(E);F.addEventListener("dispose",w);const _e=F.textures,Le=F.isWebGLCubeRenderTarget===!0,pe=_e.length>1;if(pe||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,u.memory.textures++),Le){ie.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer[oe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)ie.__webglFramebuffer[oe][ye]=s.createFramebuffer()}else ie.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)ie.__webglFramebuffer[oe]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(pe)for(let oe=0,ye=_e.length;oe<ye;oe++){const ae=r.get(_e[oe]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&Nt(F)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let oe=0;oe<_e.length;oe++){const ye=_e[oe];ie.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[oe]);const ae=l.convert(ye.format,ye.colorSpace),ze=l.convert(ye.type),te=b(ye.internalFormat,ae,ze,ye.normalized,ye.colorSpace,F.isXRRenderTarget===!0),fe=st(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,te,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ie.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(ie.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),$e(s.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ke(ie.__webglFramebuffer[oe][ye],F,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else ke(ie.__webglFramebuffer[oe],F,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(E)&&N(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let oe=0,ye=_e.length;oe<ye;oe++){const ae=_e[oe],ze=r.get(ae);let te=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(te=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,ze.__webglTexture),$e(te,ae),ke(ie.__webglFramebuffer,F,ae,s.COLOR_ATTACHMENT0+oe,te,0),y(ae)&&N(te)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(oe=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,ue.__webglTexture),$e(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ke(ie.__webglFramebuffer[ye],F,E,s.COLOR_ATTACHMENT0,oe,ye);else ke(ie.__webglFramebuffer,F,E,s.COLOR_ATTACHMENT0,oe,0);y(E)&&N(oe),t.unbindTexture()}F.depthBuffer&&yt(F)}function mt(F){const E=F.textures;for(let ie=0,ue=E.length;ie<ue;ie++){const _e=E[ie];if(y(_e)){const Le=k(F),pe=r.get(_e).__webglTexture;t.bindTexture(Le,pe),N(Le),t.unbindTexture()}}}const Gt=[],$t=[];function Vt(F){if(F.samples>0){if(Nt(F)===!1){const E=F.textures,ie=F.width,ue=F.height;let _e=s.COLOR_BUFFER_BIT;const Le=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=r.get(F),oe=E.length>1;if(oe)for(let ae=0;ae<E.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ye=F.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ae=0;ae<E.length;ae++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[ae]);const ze=r.get(E[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ze,0)}s.blitFramebuffer(0,0,ie,ue,0,0,ie,ue,_e,s.NEAREST),h===!0&&(Gt.length=0,$t.length=0,Gt.push(s.COLOR_ATTACHMENT0+ae),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Gt.push(Le),$t.push(Le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let ae=0;ae<E.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,pe.__webglColorRenderbuffer[ae]);const ze=r.get(E[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&h){const E=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function st(F){return Math.min(a.maxSamples,F.samples)}function Nt(F){const E=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $(F){const E=u.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function kt(F,E){const ie=F.colorSpace,ue=F.format,_e=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ie!==bc&&ie!==ts&&(Lt.getTransfer(ie)===Xt?(ue!==Gi||_e!==hi)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",ie)),E}function Pt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=ge,this.resetTextureUnits=K,this.getTextureUnits=z,this.setTextureUnits=Z,this.setTexture2D=ee,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=D,this.rebindTextures=Mt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LA(s,e){function t(r,a=ts){let l;const u=Lt.getTransfer(a);if(r===hi)return s.UNSIGNED_BYTE;if(r===dh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===uv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===dv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===lv)return s.BYTE;if(r===cv)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===uh)return s.INT;if(r===ir)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===rr)return s.HALF_FLOAT;if(r===fv)return s.ALPHA;if(r===hv)return s.RGB;if(r===Gi)return s.RGBA;if(r===br)return s.DEPTH_COMPONENT;if(r===Cs)return s.DEPTH_STENCIL;if(r===hh)return s.RED;if(r===ph)return s.RED_INTEGER;if(r===Ls)return s.RG;if(r===mh)return s.RG_INTEGER;if(r===gh)return s.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===vc)if(u===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===pc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===pc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===xf||r===Sf||r===Mf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ef||r===wf||r===Af||r===Tf||r===bf||r===Ac||r===Cf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ef||r===wf)return u===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Af)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Tf)return l.COMPRESSED_R11_EAC;if(r===bf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ac)return l.COMPRESSED_RG11_EAC;if(r===Cf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Rf||r===Pf||r===If||r===Lf||r===Nf||r===Df||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Gf||r===Vf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Rf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hf||r===Wf||r===Xf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hf)return u===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jf||r===Yf||r===Tc||r===$f)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===jf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Yf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
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

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Sv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new sr({vertexShader:NA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xn(new Fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FA extends as{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,v=null,_=null,g=null,x=null,M=null;const A=typeof XRWebGLBinding<"u",S=new UA,y={},N=t.getContextAttributes();let k=null,b=null;const I=[],P=[],U=new ht;let w=null,L=null;const O=new Ei;O.viewport=new an;const G=new Ei;G.viewport=new an;const W=[O,G],K=new VS;let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ne=I[re];return ne===void 0&&(ne=new Id,I[re]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(re){let ne=I[re];return ne===void 0&&(ne=new Id,I[re]=ne),ne.getGripSpace()},this.getHand=function(re){let ne=I[re];return ne===void 0&&(ne=new Id,I[re]=ne),ne.getHandSpace()};function ge(re){const ne=P.indexOf(re.inputSource);if(ne===-1)return;const Fe=I[ne];Fe!==void 0&&(Fe.update(re.inputSource,re.frame,p||u),Fe.dispatchEvent({type:re.type,data:re.inputSource}))}function J(){a.removeEventListener("select",ge),a.removeEventListener("selectstart",ge),a.removeEventListener("selectend",ge),a.removeEventListener("squeeze",ge),a.removeEventListener("squeezestart",ge),a.removeEventListener("squeezeend",ge),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",ee);for(let re=0;re<I.length;re++){const ne=P[re];ne!==null&&(P[re]=null,I[re].disconnect(ne))}z=null,Z=null,S.reset();for(const re in y)delete y[re];if(e.setRenderTarget(k),x=null,g=null,_=null,a=null,b=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),L!==null){const re=L.camera;re.fov=L.fov,re.zoom=L.zoom,re.updateProjectionMatrix(),L=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(k=e.getRenderTarget(),a.addEventListener("select",ge),a.addEventListener("selectstart",ge),a.addEventListener("selectend",ge),a.addEventListener("squeeze",ge),a.addEventListener("squeezestart",ge),a.addEventListener("squeezeend",ge),a.addEventListener("end",J),a.addEventListener("inputsourceschange",ee),N.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Me=null,ke=null;N.depth&&(ke=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=N.stencil?Cs:br,Me=N.stencil?Lo:ir);const _t={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(_t),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Vi(g.textureWidth,g.textureHeight,{format:Gi,type:hi,depthTexture:new Do(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Fe={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,Fe),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Vi(x.framebufferWidth,x.framebufferHeight,{format:Gi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),we.setContext(a),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(re){for(let ne=0;ne<re.removed.length;ne++){const Fe=re.removed[ne],Me=P.indexOf(Fe);Me>=0&&(P[Me]=null,I[Me].disconnect(Fe))}for(let ne=0;ne<re.added.length;ne++){const Fe=re.added[ne];let Me=P.indexOf(Fe);if(Me===-1){for(let _t=0;_t<I.length;_t++)if(_t>=P.length){P.push(Fe),Me=_t;break}else if(P[_t]===null){P[_t]=Fe,Me=_t;break}if(Me===-1)break}const ke=I[Me];ke&&ke.connect(Fe)}}const H=new q,j=new q;function D(re,ne,Fe){H.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(Fe.matrixWorld);const Me=H.distanceTo(j),ke=ne.projectionMatrix.elements,_t=Fe.projectionMatrix.elements,Dt=ke[14]/(ke[10]-1),yt=ke[14]/(ke[10]+1),Mt=(ke[9]+1)/ke[5],Ut=(ke[9]-1)/ke[5],mt=(ke[8]-1)/ke[0],Gt=(_t[8]+1)/_t[0],$t=Dt*mt,Vt=Dt*Gt,st=Me/(-mt+Gt),Nt=st*-mt;if(ne.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(st),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ke[10]===-1)re.projectionMatrix.copy(ne.projectionMatrix),re.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const $=Dt+st,kt=yt+st,Pt=$t-Nt,F=Vt+(Me-Nt),E=Mt*yt/kt*$,ie=Ut*yt/kt*$;re.projectionMatrix.makePerspective(Pt,F,E,ie,$,kt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,ne){ne===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ne.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let ne=re.near,Fe=re.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(Fe=S.depthFar)),K.near=G.near=O.near=ne,K.far=G.far=O.far=Fe,(z!==K.near||Z!==K.far)&&(a.updateRenderState({depthNear:K.near,depthFar:K.far}),z=K.near,Z=K.far),K.layers.mask=re.layers.mask|6,O.layers.mask=K.layers.mask&-5,G.layers.mask=K.layers.mask&-3;const Me=re.parent,ke=K.cameras;le(K,Me);for(let _t=0;_t<ke.length;_t++)le(ke[_t],Me);ke.length===2?D(K,O,G):K.projectionMatrix.copy(O.projectionMatrix),L===null&&re.isPerspectiveCamera&&(L={camera:re,fov:re.fov,zoom:re.zoom}),Pe(re,K,Me)};function Pe(re,ne,Fe){Fe===null?re.matrix.copy(ne.matrixWorld):(re.matrix.copy(Fe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ne.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ne.projectionMatrix),re.projectionMatrixInverse.copy(ne.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Kf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(re){h=re,g!==null&&(g.fixedFoveation=re),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(re){return y[re]};let Ze=null;function $e(re,ne){if(v=ne.getViewerPose(p||u),M=ne,v!==null){const Fe=v.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let Me=!1;Fe.length!==K.cameras.length&&(K.cameras.length=0,Me=!0);for(let yt=0;yt<Fe.length;yt++){const Mt=Fe[yt];let Ut=null;if(x!==null)Ut=x.getViewport(Mt);else{const Gt=_.getViewSubImage(g,Mt);Ut=Gt.viewport,yt===0&&(e.setRenderTargetTextures(b,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(b))}let mt=W[yt];mt===void 0&&(mt=new Ei,mt.layers.enable(yt),mt.viewport=new an,W[yt]=mt),mt.matrix.fromArray(Mt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Mt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),yt===0&&(K.matrix.copy(mt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Me===!0&&K.cameras.push(mt)}const ke=a.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const yt=_.getDepthInformation(Fe[0]);yt&&yt.isValid&&yt.texture&&S.init(yt,a.renderState)}if(ke&&ke.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let yt=0;yt<Fe.length;yt++){const Mt=Fe[yt].camera;if(Mt){let Ut=y[Mt];Ut||(Ut=new Sv,y[Mt]=Ut);const mt=_.getCameraImage(Mt);Ut.sourceTexture=mt}}}}for(let Fe=0;Fe<I.length;Fe++){const Me=P[Fe],ke=I[Fe];Me!==null&&ke!==void 0&&ke.update(Me,ne,p||u)}Ze&&Ze(re,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),M=null}const we=new Av;we.setAnimationLoop($e),this.setAnimationLoop=function(re){Ze=re},this.dispose=function(){}}}const OA=new Wt,Lv=new wt;Lv.set(-1,0,0,0,1,0,0,0,1);function kA(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Mv(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,N,k,b){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,b)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),A(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?h(S,y,N,k):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),k=N.envMap,b=N.envMapRotation;k&&(S.envMap.value=k,S.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(b)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Lv),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,N,k){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=k*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function BA(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,I){const P=I.program;r.uniformBlockBinding(b,P)}function p(b,I){let P=a[b.id];P===void 0&&(S(b),P=v(b),a[b.id]=P,b.addEventListener("dispose",N));const U=I.program;r.updateUBOMapping(b,U);const w=e.render.frame;l[b.id]!==w&&(g(b),l[b.id]=w)}function v(b){const I=_();b.__bindingPointIndex=I;const P=s.createBuffer(),U=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function _(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const I=a[b.id],P=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let w=0,L=P.length;w<L;w++){const O=P[w];if(Array.isArray(O))for(let G=0,W=O.length;G<W;G++)x(O[G],w,G,U);else x(O,w,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(b,I,P,U){if(A(b,I,P,U)===!0){const w=b.__offset,L=b.value;if(Array.isArray(L)){let O=0;for(let G=0;G<L.length;G++){const W=L[G],K=y(W);M(W,b.__data,O),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}function M(b,I,P){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,P)}function A(b,I,P,U){const w=b.value,L=I+"_"+P;if(U[L]===void 0)return typeof w=="number"||typeof w=="boolean"?U[L]=w:ArrayBuffer.isView(w)?U[L]=w.slice():U[L]=w.clone(),!0;{const O=U[L];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return U[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(O.equals(w)===!1)return O.copy(w),!0}}return!1}function S(b){const I=b.uniforms;let P=0;const U=16;for(let L=0,O=I.length;L<O;L++){const G=Array.isArray(I[L])?I[L]:[I[L]];for(let W=0,K=G.length;W<K;W++){const z=G[W],Z=Array.isArray(z.value)?z.value:[z.value];for(let ge=0,J=Z.length;ge<J;ge++){const ee=Z[ge],H=y(ee),j=P%U,D=j%H.boundary,le=j+D;P+=D,le!==0&&U-le<H.storage&&(P+=U-le),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=P,P+=H.storage}}}const w=P%U;return w>0&&(P+=U-w),b.__size=P,b.__cache={},this}function y(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",b),I}function N(b){const I=b.target;I.removeEventListener("dispose",N);const P=u.indexOf(I.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function k(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:h,update:p,dispose:k}}const zA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function GA(){return Ji===null&&(Ji=new yv(zA,16,16,Ls,rr),Ji.name="DFG_LUT",Ji.minFilter=Gn,Ji.magFilter=Gn,Ji.wrapS=wr,Ji.wrapT=wr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class VA{constructor(e={}){const{canvas:t=$x(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=hi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=x,S=new Set([gh,mh,ph]),y=new Set([hi,ir,Io,Lo,dh,fh]),N=new Uint32Array(4),k=new Int32Array(4),b=new q;let I=null,P=null;const U=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let G=!1,W=null,K=null,z=null,Z=null;this._outputColorSpace=fi;let ge=0,J=0,ee=null,H=-1,j=null;const D=new an,le=new an;let Pe=null;const Ze=new St(0);let $e=0,we=t.width,re=t.height,ne=1,Fe=null,Me=null;const ke=new an(0,0,we,re),_t=new an(0,0,we,re);let Dt=!1;const yt=new Mh;let Mt=!1,Ut=!1;const mt=new Wt,Gt=new q,$t=new an,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Nt(){return ee===null?ne:1}let $=r;function kt(R,Y){return t.getContext(R,Y)}let Pt,F,E,ie,ue,_e,Le,pe,oe,ye,ae,ze,te,fe,Ae,Ce,be,V,Ne,xe,Re,De,Se;try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Bt,!1),$===null){const Y="webgl2";if($=kt(Y,R),$===null)throw kt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(R){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Bt,!1),Ot("WebGLRenderer: "+R.message),R}function Ge(){Pt=new GE($),Pt.init(),Re=new LA($,Pt),F=new IE($,Pt,e,Re),E=new PA($,Pt),F.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),K=$.createFramebuffer(),z=$.createFramebuffer(),Z=$.createFramebuffer(),ie=new WE($),ue=new gA,_e=new IA($,Pt,E,ue,F,Re,ie),Le=new zE(O),pe=new jS($),De=new RE($,pe),oe=new VE($,pe,ie,De),ye=new jE($,oe,pe,De,ie),V=new XE($,F,_e),Ae=new LE(ue),ae=new mA(O,Le,Pt,F,De,Ae),ze=new kA(O,ue),te=new _A,fe=new wA(Pt),be=new CE(O,Le,E,ye,M,h),Ce=new RA(O,ye,F),Se=new BA($,ie,F,E),Ne=new PE($,Pt,ie),xe=new HE($,Pt,ie),ie.programs=ae.programs,O.capabilities=F,O.extensions=Pt,O.properties=ue,O.renderLists=te,O.shadowMap=Ce,O.state=E,O.info=ie}A!==hi&&(L=new $E(A,t.width,t.height,d,a,l));const Ve=new FA(O,$);this.xr=Ve,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(we,re,!1))},this.getSize=function(R){return R.set(we,re)},this.setSize=function(R,Y,me=!0){if(Ve.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}we=R,re=Y,t.width=Math.floor(R*ne),t.height=Math.floor(Y*ne),me===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(we*ne,re*ne).floor()},this.setDrawingBufferSize=function(R,Y,me){we=R,re=Y,ne=me,t.width=Math.floor(R*me),t.height=Math.floor(Y*me),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===hi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ke)},this.setViewport=function(R,Y,me,ce){R.isVector4?ke.set(R.x,R.y,R.z,R.w):ke.set(R,Y,me,ce),E.viewport(D.copy(ke).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,Y,me,ce){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,Y,me,ce),E.scissor(le.copy(_t).multiplyScalar(ne).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){E.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Fe=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,me=!0){let ce=0;if(R){let se=!1;if(ee!==null){const We=ee.texture.format;se=S.has(We)}if(se){const We=ee.texture.type,He=y.has(We),Xe=be.getClearColor(),et=be.getClearAlpha(),it=Xe.r,Ee=Xe.g,je=Xe.b;He?(N[0]=it,N[1]=Ee,N[2]=je,N[3]=et,$.clearBufferuiv($.COLOR,0,N)):(k[0]=it,k[1]=Ee,k[2]=je,k[3]=et,$.clearBufferiv($.COLOR,0,k))}else ce|=$.COLOR_BUFFER_BIT}Y&&(ce|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ce|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&$.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Bt,!1),be.dispose(),te.dispose(),fe.dispose(),ue.dispose(),Le.dispose(),ye.dispose(),De.dispose(),Se.dispose(),ae.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Xi),Ve.removeEventListener("sessionend",Fs),En.stop()};function vt(R){R.preventDefault(),Cg("WebGLRenderer: Context Lost."),G=!0}function pt(){Cg("WebGLRenderer: Context Restored."),G=!1;const R=ie.autoReset,Y=Ce.enabled,me=Ce.autoUpdate,ce=Ce.needsUpdate,se=Ce.type;Ge(),ie.autoReset=R,Ce.enabled=Y,Ce.autoUpdate=me,Ce.needsUpdate=ce,Ce.type=se}function Bt(R){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pn(R){const Y=R.target;Y.removeEventListener("dispose",pn),pi(Y)}function pi(R){Hi(R),ue.remove(R)}function Hi(R){const Y=ue.get(R).programs;Y!==void 0&&(Y.forEach(function(me){ae.releaseProgram(me)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,me,ce,se,We){Y===null&&(Y=Vt);const He=se.isMesh&&se.matrixWorld.determinantAffine()<0,Xe=qt(R,Y,me,ce,se);E.setMaterial(ce,He);let et=me.index,it=1;if(ce.wireframe===!0){if(et=oe.getWireframeAttribute(me),et===void 0)return;it=2}const Ee=me.drawRange,je=me.attributes.position;let Te=Ee.start*it,nt=(Ee.start+Ee.count)*it;We!==null&&(Te=Math.max(Te,We.start*it),nt=Math.min(nt,(We.start+We.count)*it)),et!==null?(Te=Math.max(Te,0),nt=Math.min(nt,et.count)):je!=null&&(Te=Math.max(Te,0),nt=Math.min(nt,je.count));const Et=nt-Te;if(Et<0||Et===1/0)return;De.setup(se,ce,Xe,me,et);let ot,ct=Ne;if(et!==null&&(ot=pe.get(et),ct=xe,ct.setIndex(ot)),se.isMesh)ce.wireframe===!0?(E.setLineWidth(ce.wireframeLinewidth*Nt()),ct.setMode($.LINES)):ct.setMode($.TRIANGLES);else if(se.isLine){let nn=ce.linewidth;nn===void 0&&(nn=1),E.setLineWidth(nn*Nt()),se.isLineSegments?ct.setMode($.LINES):se.isLineLoop?ct.setMode($.LINE_LOOP):ct.setMode($.LINE_STRIP)}else se.isPoints?ct.setMode($.POINTS):se.isSprite&&ct.setMode($.TRIANGLES);if(se.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))ct.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const nn=se._multiDrawStarts,qe=se._multiDrawCounts,Yt=se._multiDrawCount,At=et?pe.get(et).bytesPerElement:1,mn=ue.get(ce).currentProgram.getUniforms();for(let ut=0;ut<Yt;ut++)mn.setValue($,"_gl_DrawID",ut),ct.render(nn[ut]/At,qe[ut])}else if(se.isInstancedMesh)ct.renderInstances(Te,Et,se.count);else if(me.isInstancedBufferGeometry){const nn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,qe=Math.min(me.instanceCount,nn);ct.renderInstances(Te,Et,qe)}else ct.render(Te,Et)};function Wi(R,Y,me,ce){W!==null&&R.isNodeMaterial&&W.setObject(ce,R),Mt===!0&&Ae.setState(R,me,!1),R.transparent===!0&&R.side===ki&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,Ti(R,Y,ce),R.side=Ps,R.needsUpdate=!0,Ti(R,Y,ce),R.side=ki):Ti(R,Y,ce)}this.compile=function(R,Y,me=null){me===null&&(me=R),W!==null&&W.renderStart(R,Y,me),P=fe.get(me),P.init(Y),w.push(P),me.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),R!==me&&R.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights(),W!==null&&W.updateLights(P.state.lightsArray),Ut=this.localClippingEnabled,Mt=Ae.init(this.clippingPlanes,Ut),Mt===!0&&Ae.setGlobalState(this.clippingPlanes,Y),W!==null&&Ce.render(P.state.shadowsArray,me,Y);const ce=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const We=se.material;if(We)if(Array.isArray(We))for(let He=0;He<We.length;He++){const Xe=We[He];Wi(Xe,me,Y,se),ce.add(Xe)}else Wi(We,me,Y,se),ce.add(We)}),P=w.pop(),W!==null&&W.renderEnd(),ce},this.compileAsync=function(R,Y,me=null){const ce=this.compile(R,Y,me);return new Promise(se=>{function We(){if(ce.forEach(function(He){const et=ue.get(He).currentProgram;(et===void 0||et.isReady())&&ce.delete(He)}),ce.size===0){se(R);return}setTimeout(We,10)}Pt.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Ai=null;function ar(R){Ai&&Ai(R)}function Xi(){En.stop()}function Fs(){En.start()}const En=new Av;En.setAnimationLoop(ar),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){Ai=R,Ve.setAnimationLoop(R),R===null?En.stop():En.start()},Ve.addEventListener("sessionstart",Xi),Ve.addEventListener("sessionend",Fs),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(R,Y);const me=Ve.enabled===!0&&Ve.isPresenting===!0,ce=L!==null&&(ee===null||me)&&L.begin(O,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,Y,ee),P=fe.get(R,w.length),P.init(Y),P.state.textureUnits=_e.getTextureUnits(),w.push(P),mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),yt.setFromProjectionMatrix(mt,tr,Y.reversedDepth),Ut=this.localClippingEnabled,Mt=Ae.init(this.clippingPlanes,Ut),I=te.get(R,U.length),I.init(),U.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const He=O.xr.getDepthSensingMesh();He!==null&&or(He,Y,-1/0,O.sortObjects)}or(R,Y,0,O.sortObjects),I.finish(),W!==null&&W.updateLights(P.state.lightsArray),O.sortObjects===!0&&I.sort(Fe,Me),st=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,st&&be.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Ae.beginShadows();const se=P.state.shadowsArray;if(Ce.render(se,R,Y),Mt===!0&&Ae.endShadows(),(ce&&L.hasRenderPass())===!1){const He=I.opaque,Xe=I.transmissive;if(P.setupLights(),Y.isArrayCamera){const et=Y.cameras;if(Xe.length>0)for(let it=0,Ee=et.length;it<Ee;it++){const je=et[it];Os(He,Xe,R,je)}st&&be.render(R);for(let it=0,Ee=et.length;it<Ee;it++){const je=et[it];Cr(I,R,je,je.viewport)}}else Xe.length>0&&Os(He,Xe,R,Y),st&&be.render(R),Cr(I,R,Y)}ee!==null&&J===0&&(_e.updateMultisampleRenderTarget(ee),_e.updateRenderTargetMipmap(ee)),ce&&L.end(O),R.isScene===!0&&R.onAfterRender(O,R,Y),De.resetDefaultState(),H=-1,j=null,w.pop(),w.length>0?(P=w[w.length-1],_e.setTextureUnits(P.state.textureUnits),Mt===!0&&Ae.setGlobalState(O.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?I=U[U.length-1]:I=null,W!==null&&W.renderEnd()};function or(R,Y,me,ce){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)me=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(yt)){ce&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const He=ye.update(R),Xe=R.material;Xe.visible&&I.push(R,He,Xe,me,$t.z,null,Y)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(yt))){const He=ye.update(R),Xe=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),$t.copy(He.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Xe)){const et=He.groups;for(let it=0,Ee=et.length;it<Ee;it++){const je=et[it],Te=Xe[je.materialIndex];Te&&Te.visible&&I.push(R,He,Te,me,$t.z,je,Y)}}else Xe.visible&&I.push(R,He,Xe,me,$t.z,null,Y)}}const We=R.children;for(let He=0,Xe=We.length;He<Xe;He++)or(We[He],Y,me,ce)}function Cr(R,Y,me,ce){const{opaque:se,transmissive:We,transparent:He}=R;P.setupLightsView(me),Mt===!0&&Ae.setGlobalState(O.clippingPlanes,me),ce&&E.viewport(D.copy(ce)),se.length>0&&ji(se,Y,me),We.length>0&&ji(We,Y,me),He.length>0&&ji(He,Y,me),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Os(R,Y,me,ce){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ce.id]===void 0){const Te=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ce.id]=new Vi(1,1,{generateMipmaps:!0,type:Te?rr:hi,minFilter:bs,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const We=P.state.transmissionRenderTarget[ce.id],He=ce.viewport||D;We.setSize(He.z*O.transmissionResolutionScale,He.w*O.transmissionResolutionScale);const Xe=O.getRenderTarget(),et=O.getActiveCubeFace(),it=O.getActiveMipmapLevel();O.setRenderTarget(We),O.getClearColor(Ze),$e=O.getClearAlpha(),$e<1&&O.setClearColor(16777215,.5),O.clear(),st&&be.render(me);const Ee=O.toneMapping;O.toneMapping=nr;const je=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),P.setupLightsView(ce),Mt===!0&&Ae.setGlobalState(O.clippingPlanes,ce),ji(R,me,ce),_e.updateMultisampleRenderTarget(We),_e.updateRenderTargetMipmap(We),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let nt=0,Et=Y.length;nt<Et;nt++){const ot=Y[nt],{object:ct,geometry:nn,material:qe,group:Yt}=ot;if(qe.side===ki&&ct.layers.test(ce.layers)){const At=qe.side;qe.side=Yn,qe.needsUpdate=!0,qn(ct,me,ce,nn,qe,Yt),qe.side=At,qe.needsUpdate=!0,Te=!0}}Te===!0&&(_e.updateMultisampleRenderTarget(We),_e.updateRenderTargetMipmap(We))}O.setRenderTarget(Xe,et,it),O.setClearColor(Ze,$e),je!==void 0&&(ce.viewport=je),O.toneMapping=Ee}function ji(R,Y,me){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,We=R.length;se<We;se++){const He=R[se],{object:Xe,geometry:et,group:it}=He;let Ee=He.material;Ee.allowOverride===!0&&ce!==null&&(Ee=ce),Xe.layers.test(me.layers)&&qn(Xe,Y,me,et,Ee,it)}}function qn(R,Y,me,ce,se,We){W!==null&&se.isNodeMaterial&&W.setObject(R,se),R.onBeforeRender(O,Y,me,ce,se,We),R.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(O,Y,me,ce,R,We),se.transparent===!0&&se.side===ki&&se.forceSinglePass===!1?(se.side=Yn,se.needsUpdate=!0,O.renderBufferDirect(me,Y,ce,se,R,We),se.side=Ps,se.needsUpdate=!0,O.renderBufferDirect(me,Y,ce,se,R,We),se.side=ki):O.renderBufferDirect(me,Y,ce,se,R,We),R.onAfterRender(O,Y,me,ce,se,We)}function Ti(R,Y,me){Y.isScene!==!0&&(Y=Vt);const ce=ue.get(R),se=P.state.lights,We=P.state.shadowsArray,He=se.state.version,Xe=ae.getParameters(R,se.state,We,Y,me,P.state.lightProbeGridArray),et=ae.getProgramCacheKey(Xe);let it=ce.programs;ce.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ce.fog=Y.fog;const Ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ce.envMap=Le.get(R.envMap||ce.environment,Ee),ce.envMapRotation=ce.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",pn),it=new Map,ce.programs=it);let je=it.get(et);if(je!==void 0){if(ce.currentProgram===je&&ce.lightsStateVersion===He)return ks(R,Xe),je}else Xe.uniforms=ae.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,me,Xe),R.onBeforeCompile(Xe,O),je=ae.acquireProgram(Xe,et),it.set(et,je),ce.uniforms=Xe.uniforms;const Te=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Te.clippingPlanes=Ae.uniform),ks(R,Xe),ce.needsLights=Rr(R),ce.lightsStateVersion=He,ce.needsLights&&(Te.ambientLightColor.value=se.state.ambient,Te.lightProbe.value=se.state.probe,Te.sunLights.value=se.state.sun,Te.sunLightShadows.value=se.state.sunShadow,Te.directionalLights.value=se.state.directional,Te.directionalLightShadows.value=se.state.directionalShadow,Te.spotLights.value=se.state.spot,Te.spotLightShadows.value=se.state.spotShadow,Te.rectAreaLights.value=se.state.rectArea,Te.ltc_1.value=se.state.rectAreaLTC1,Te.ltc_2.value=se.state.rectAreaLTC2,Te.pointLights.value=se.state.point,Te.pointLightShadows.value=se.state.pointShadow,Te.hemisphereLights.value=se.state.hemi,Te.sunShadowMatrix.value=se.state.sunShadowMatrix,Te.sunShadowCascade.value=se.state.sunShadowCascade,Te.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Te.spotLightMatrix.value=se.state.spotLightMatrix,Te.spotLightMap.value=se.state.spotLightMap,Te.pointShadowMatrix.value=se.state.pointShadowMatrix),ce.lightProbeGrid=P.state.lightProbeGridArray.length>0,ce.currentProgram=je,ce.uniformsList=null,je}function Vn(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Sc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ks(R,Y){const me=ue.get(R);me.outputColorSpace=Y.outputColorSpace,me.batching=Y.batching,me.batchingColor=Y.batchingColor,me.instancing=Y.instancing,me.instancingColor=Y.instancingColor,me.instancingMorph=Y.instancingMorph,me.skinning=Y.skinning,me.morphTargets=Y.morphTargets,me.morphNormals=Y.morphNormals,me.morphColors=Y.morphColors,me.morphTargetsCount=Y.morphTargetsCount,me.numClippingPlanes=Y.numClippingPlanes,me.numIntersection=Y.numClipIntersection,me.vertexAlphas=Y.vertexAlphas,me.vertexTangents=Y.vertexTangents,me.toneMapping=Y.toneMapping}function Bs(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(Y.matrixWorld);for(let me=0,ce=R.length;me<ce;me++){const se=R[me];if(se.texture!==null&&se.boundingBox.containsPoint(b))return se}return null}function qt(R,Y,me,ce,se){Y.isScene!==!0&&(Y=Vt),_e.resetTextureUnits();const We=Y.fog,He=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Y.environment:null,Xe=ee===null?O.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Lt.workingColorSpace,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,it=Le.get(ce.envMap||He,et),Ee=ce.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,je=!!me.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Te=!!me.morphAttributes.position,nt=!!me.morphAttributes.normal,Et=!!me.morphAttributes.color;let ot=nr;ce.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ot=O.toneMapping);const ct=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,nn=ct!==void 0?ct.length:0,qe=ue.get(ce),Yt=P.state.lights;if(Mt===!0&&(Ut===!0||R!==j)){const It=R===j&&ce.id===H;Ae.setState(ce,R,It)}let At=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Yt.state.version||qe.outputColorSpace!==Xe||se.isBatchedMesh&&qe.batching===!1||!se.isBatchedMesh&&qe.batching===!0||se.isBatchedMesh&&qe.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&qe.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&qe.instancing===!1||!se.isInstancedMesh&&qe.instancing===!0||se.isSkinnedMesh&&qe.skinning===!1||!se.isSkinnedMesh&&qe.skinning===!0||se.isInstancedMesh&&qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&qe.instancingMorph===!1&&se.morphTexture!==null||qe.envMap!==it||ce.fog===!0&&qe.fog!==We||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==Ee||qe.vertexTangents!==je||qe.morphTargets!==Te||qe.morphNormals!==nt||qe.morphColors!==Et||qe.toneMapping!==ot||qe.morphTargetsCount!==nn||!!qe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,qe.__version=ce.version);let mn=qe.currentProgram;At===!0&&(mn=Ti(ce,Y,se),W&&ce.isNodeMaterial&&W.onUpdateProgram(ce,mn,qe));let ut=!1,dn=!1,Nn=!1;const bt=mn.getUniforms(),Ht=qe.uniforms;if(E.useProgram(mn.program)&&(ut=!0,dn=!0,Nn=!0),ce.id!==H&&(H=ce.id,dn=!0),qe.needsLights){const It=Bs(P.state.lightProbeGridArray,se);qe.lightProbeGrid!==It&&(qe.lightProbeGrid=It,dn=!0)}if(ut||j!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),bt.setValue($,"projectionMatrix",R.projectionMatrix),bt.setValue($,"viewMatrix",R.matrixWorldInverse);const Kn=bt.map.cameraPosition;Kn!==void 0&&Kn.setValue($,Gt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&bt.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&bt.setValue($,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,dn=!0,Nn=!0)}if(qe.needsLights&&(Yt.state.sunShadowMap.length>0&&bt.setValue($,"sunShadowMap",Yt.state.sunShadowMap,_e),Yt.state.directionalShadowMap.length>0&&bt.setValue($,"directionalShadowMap",Yt.state.directionalShadowMap,_e),Yt.state.spotShadowMap.length>0&&bt.setValue($,"spotShadowMap",Yt.state.spotShadowMap,_e),Yt.state.pointShadowMap.length>0&&bt.setValue($,"pointShadowMap",Yt.state.pointShadowMap,_e)),se.isSkinnedMesh){bt.setOptional($,se,"bindMatrix"),bt.setOptional($,se,"bindMatrixInverse");const It=se.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),bt.setValue($,"boneTexture",It.boneTexture,_e))}se.isBatchedMesh&&(bt.setOptional($,se,"batchingTexture"),bt.setValue($,"batchingTexture",se._matricesTexture,_e),bt.setOptional($,se,"batchingIdTexture"),bt.setValue($,"batchingIdTexture",se._indirectTexture,_e),bt.setOptional($,se,"batchingColorTexture"),se._colorsTexture!==null&&bt.setValue($,"batchingColorTexture",se._colorsTexture,_e));const si=me.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&V.update(se,me,mn),(dn||qe.receiveShadow!==se.receiveShadow)&&(qe.receiveShadow=se.receiveShadow,bt.setValue($,"receiveShadow",se.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Y.environment!==null&&(Ht.envMapIntensity.value=Y.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=GA()),dn){if(bt.setValue($,"toneMappingExposure",O.toneMappingExposure),qe.needsLights&&zs(Ht,Nn),We&&ce.fog===!0&&ze.refreshFogUniforms(Ht,We),ze.refreshMaterialUniforms(Ht,ce,ne,re,P.state.transmissionRenderTarget[R.id]),qe.needsLights&&qe.lightProbeGrid){const It=qe.lightProbeGrid;Ht.probesSH.value=It.texture,Ht.probesMin.value.copy(It.boundingBox.min),Ht.probesMax.value.copy(It.boundingBox.max),Ht.probesResolution.value.copy(It.resolution)}Sc.upload($,Vn(qe),Ht,_e)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Sc.upload($,Vn(qe),Ht,_e),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&bt.setValue($,"center",se.center),bt.setValue($,"modelViewMatrix",se.modelViewMatrix),bt.setValue($,"normalMatrix",se.normalMatrix),bt.setValue($,"modelMatrix",se.matrixWorld),ce.uniformsGroups!==void 0){const It=ce.uniformsGroups;for(let Kn=0,Hn=It.length;Kn<Hn;Kn++){const bi=It[Kn];Se.update(bi,mn),Se.bind(bi,mn)}}return mn}function zs(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.sunLights.needsUpdate=Y,R.sunLightShadows.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Rr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ge},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,Y,me){const ce=ue.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ue.get(R.texture).__webglTexture=Y,ue.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:me,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const me=ue.get(R);me.__webglFramebuffer=Y,me.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,me=0){ee=R,ge=Y,J=me;let ce=null,se=!1,We=!1;if(R){const Xe=ue.get(R);if(Xe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer($.FRAMEBUFFER,Xe.__webglFramebuffer),D.copy(R.viewport),le.copy(R.scissor),Pe=R.scissorTest,E.viewport(D),E.scissor(le),E.setScissorTest(Pe),H=-1;return}else if(Xe.__webglFramebuffer===void 0)_e.setupRenderTarget(R);else if(Xe.__hasExternalTextures)_e.rebindTextures(R,ue.get(R.texture).__webglTexture,ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ee=R.depthTexture;if(Xe.__boundDepthTexture!==Ee){if(Ee!==null&&ue.has(Ee)&&(R.width!==Ee.image.width||R.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);const it=ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?ce=it[Y][me]:ce=it[Y],se=!0):R.samples>0&&_e.useMultisampledRTT(R)===!1?ce=ue.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?ce=it[me]:ce=it,D.copy(R.viewport),le.copy(R.scissor),Pe=R.scissorTest}else D.copy(ke).multiplyScalar(ne).floor(),le.copy(_t).multiplyScalar(ne).floor(),Pe=Dt;if(me!==0&&(ce=K),E.bindFramebuffer($.FRAMEBUFFER,ce)&&E.drawBuffers(R,ce),E.viewport(D),E.scissor(le),E.setScissorTest(Pe),se){const Xe=ue.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,me)}else if(We){const Xe=Y;for(let et=0;et<R.textures.length;et++){const it=ue.get(R.textures[et]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+et,it.__webglTexture,me,Xe)}}else if(R!==null&&me!==0){const Xe=ue.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Xe.__webglTexture,me)}H=-1};function Pr(R){const Y=ue.get(R);return(Y.__readFormat!==R.format||Y.__readType!==R.type)&&(Y.__readFormat=R.format,Y.__readType=R.type,Y.__formatReadable=F.textureFormatReadable(R.format),Y.__typeReadable=F.textureTypeReadable(R.type)),Y}this.readRenderTargetPixels=function(R,Y,me,ce,se,We,He,Xe=0){if(!(R&&R.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(et=et[He]),et){E.bindFramebuffer($.FRAMEBUFFER,et);try{const it=R.textures[Xe],Ee=it.format,je=it.type;R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe);const Te=Pr(it);if(Te.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ce&&me>=0&&me<=R.height-se&&$.readPixels(Y,me,ce,se,Re.convert(Ee),Re.convert(je),We)}finally{const it=ee!==null?ue.get(ee).__webglFramebuffer:null;E.bindFramebuffer($.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,Y,me,ce,se,We,He,Xe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(et=et[He]),et)if(Y>=0&&Y<=R.width-ce&&me>=0&&me<=R.height-se){E.bindFramebuffer($.FRAMEBUFFER,et);const it=R.textures[Xe],Ee=it.format,je=it.type;R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe);const Te=Pr(it);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,nt),$.bufferData($.PIXEL_PACK_BUFFER,We.byteLength,$.STREAM_READ),$.readPixels(Y,me,ce,se,Re.convert(Ee),Re.convert(je),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Et=ee!==null?ue.get(ee).__webglFramebuffer:null;E.bindFramebuffer($.FRAMEBUFFER,Et);const ot=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await qx($,ot,4),$.bindBuffer($.PIXEL_PACK_BUFFER,nt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,We),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(nt),$.deleteSync(ot),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,me=0){const ce=Math.pow(2,-me),se=Math.floor(R.image.width*ce),We=Math.floor(R.image.height*ce),He=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;_e.setTexture2D(R,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,He,Xe,se,We),E.unbindTexture()},this.copyTextureToTexture=function(R,Y,me=null,ce=null,se=0,We=0){let He,Xe,et,it,Ee,je,Te,nt,Et;const ot=R.isCompressedTexture?R.mipmaps[We]:R.image;if(me!==null)He=me.max.x-me.min.x,Xe=me.max.y-me.min.y,et=me.isBox3?me.max.z-me.min.z:1,it=me.min.x,Ee=me.min.y,je=me.isBox3?me.min.z:0;else{const Ht=Math.pow(2,-se);He=Math.floor(ot.width*Ht),Xe=Math.floor(ot.height*Ht),R.isDataArrayTexture?et=ot.depth:R.isData3DTexture?et=Math.floor(ot.depth*Ht):et=1,it=0,Ee=0,je=0}ce!==null?(Te=ce.x,nt=ce.y,Et=ce.z):(Te=0,nt=0,Et=0);const ct=Re.convert(Y.format),nn=Re.convert(Y.type);let qe;Y.isData3DTexture?(_e.setTexture3D(Y,0),qe=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(_e.setTexture2DArray(Y,0),qe=$.TEXTURE_2D_ARRAY):(_e.setTexture2D(Y,0),qe=$.TEXTURE_2D),E.activeTexture($.TEXTURE0),E.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);const Yt=E.getParameter($.UNPACK_ROW_LENGTH),At=E.getParameter($.UNPACK_IMAGE_HEIGHT),mn=E.getParameter($.UNPACK_SKIP_PIXELS),ut=E.getParameter($.UNPACK_SKIP_ROWS),dn=E.getParameter($.UNPACK_SKIP_IMAGES);E.pixelStorei($.UNPACK_ROW_LENGTH,ot.width),E.pixelStorei($.UNPACK_IMAGE_HEIGHT,ot.height),E.pixelStorei($.UNPACK_SKIP_PIXELS,it),E.pixelStorei($.UNPACK_SKIP_ROWS,Ee),E.pixelStorei($.UNPACK_SKIP_IMAGES,je);const Nn=R.isDataArrayTexture||R.isData3DTexture,bt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Ht=ue.get(R),si=ue.get(Y),It=ue.get(Ht.__renderTarget),Kn=ue.get(si.__renderTarget);E.bindFramebuffer($.READ_FRAMEBUFFER,It.__webglFramebuffer),E.bindFramebuffer($.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Hn=0;Hn<et;Hn++)Nn&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(R).__webglTexture,se,je+Hn),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(Y).__webglTexture,We,Et+Hn)),$.blitFramebuffer(it,Ee,He,Xe,Te,nt,He,Xe,$.DEPTH_BUFFER_BIT,$.NEAREST);E.bindFramebuffer($.READ_FRAMEBUFFER,null),E.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||ue.has(R)){const Ht=ue.get(R),si=ue.get(Y);E.bindFramebuffer($.READ_FRAMEBUFFER,z),E.bindFramebuffer($.DRAW_FRAMEBUFFER,Z);for(let It=0;It<et;It++)Nn?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ht.__webglTexture,se,je+It):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ht.__webglTexture,se),bt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,si.__webglTexture,We,Et+It):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,si.__webglTexture,We),se!==0?$.blitFramebuffer(it,Ee,He,Xe,Te,nt,He,Xe,$.COLOR_BUFFER_BIT,$.NEAREST):bt?$.copyTexSubImage3D(qe,We,Te,nt,Et+It,it,Ee,He,Xe):$.copyTexSubImage2D(qe,We,Te,nt,it,Ee,He,Xe);E.bindFramebuffer($.READ_FRAMEBUFFER,null),E.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else bt?R.isDataTexture||R.isData3DTexture?$.texSubImage3D(qe,We,Te,nt,Et,He,Xe,et,ct,nn,ot.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(qe,We,Te,nt,Et,He,Xe,et,ct,ot.data):$.texSubImage3D(qe,We,Te,nt,Et,He,Xe,et,ct,nn,ot):R.isDataTexture?$.texSubImage2D($.TEXTURE_2D,We,Te,nt,He,Xe,ct,nn,ot.data):R.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,We,Te,nt,ot.width,ot.height,ct,ot.data):$.texSubImage2D($.TEXTURE_2D,We,Te,nt,He,Xe,ct,nn,ot);E.pixelStorei($.UNPACK_ROW_LENGTH,Yt),E.pixelStorei($.UNPACK_IMAGE_HEIGHT,At),E.pixelStorei($.UNPACK_SKIP_PIXELS,mn),E.pixelStorei($.UNPACK_SKIP_ROWS,ut),E.pixelStorei($.UNPACK_SKIP_IMAGES,dn),We===0&&Y.generateMipmaps&&$.generateMipmap(qe),E.unbindTexture()},this.initRenderTarget=function(R){ue.get(R).__webglFramebuffer===void 0&&_e.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?_e.setTextureCube(R,0):R.isData3DTexture?_e.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?_e.setTexture2DArray(R,0):_e.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){ge=0,J=0,ee=null,E.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const L0={type:"change"},Ch={type:"start"},Nv={type:"end"},fc=new Fo,N0=new Er,HA=Math.cos(70*Jx.DEG2RAD),_n=new q,ri=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6;class WA extends WS{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ba.ROTATE,MIDDLE:ba.DOLLY,RIGHT:ba.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new rs,this._lastTargetPosition=new q,this._quat=new rs().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new o0,this._sphericalDelta=new o0,this._scale=1,this._panOffset=new q,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new q,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jA.bind(this),this._onPointerDown=XA.bind(this),this._onPointerUp=YA.bind(this),this._onContextMenu=eT.bind(this),this._onMouseWheel=KA.bind(this),this._onKeyDown=ZA.bind(this),this._onTouchStart=JA.bind(this),this._onTouchMove=QA.bind(this),this._onMouseDown=$A.bind(this),this._onMouseMove=qA.bind(this),this._interceptControlDown=tT.bind(this),this._interceptControlUp=nT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L0),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;_n.copy(t).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=ri:r>Math.PI&&(r-=ri),a<-Math.PI?a+=ri:a>Math.PI&&(a-=ri),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),t.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=_n.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(fc.origin.copy(this.object.position),fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fc.direction))<HA?this.object.lookAt(this.target):(N0.setFromNormalAndCoplanarPoint(this.object.up,this.target),fc.intersectPlane(N0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(L0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ri/60*this.autoRotateSpeed*e:ri/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){_n.setFromMatrixColumn(t,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,t){this.screenSpacePanning===!0?_n.setFromMatrixColumn(t,1):(_n.setFromMatrixColumn(t,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;_n.copy(a).sub(this.target);let l=_n.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ht,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function XA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function YA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nv),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $A(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ba.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=jt.DOLLY;break;case ba.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=jt.ROTATE}break;case ba.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Ch)}function qA(s){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KA(s){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(s.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nv))}function ZA(s){this.enabled!==!1&&this._handleKeyDown(s)}function JA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=jt.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=jt.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Ch)}function QA(s){switch(this._trackPointer(s),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=jt.NONE}}function eT(s){this.enabled!==!1&&s.preventDefault()}function tT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const un=1.38;function Sr(s,e,t=un){const r=(90-s)*(Math.PI/180),a=(e+180)*(Math.PI/180),l=-(t*Math.sin(r)*Math.cos(a)),u=t*Math.sin(r)*Math.sin(a),d=t*Math.cos(r);return new q(l,d,u)}function iT(s,e){return s>15&&s<72&&e>-165&&e<-52?!(s<25&&e<-110):s>=7&&s<=22&&e>=-95&&e<=-60?!0:s>-55&&s<12&&e>-82&&e<-34?!(s<-35&&e<-76):s>35&&s<71&&e>-10&&e<45?!0:s>-35&&s<37&&e>-18&&e<51?!(s<4&&e<8):s>8&&s<74&&e>=45&&e<145||s>-11&&s<=18&&e>=95&&e<=141||s>-44&&s<-11&&e>113&&e<154||s>-47&&s<-34&&e>166&&e<179||s>60&&s<83&&e>-73&&e<-18||s>30&&s<45&&e>129&&e<146||s>50&&s<59&&e>-11&&e<2}function rT({vpnStatus:s,locations:e=[],selectedLocationObj:t,realIpInfo:r,cameraMode:a="globe",theme:l="dark",onSelectLocation:u,onRequestConnection:d}){const h=Ye.useRef(null),[p,v]=Ye.useState(null),_=Ye.useRef({vpnState:(s==null?void 0:s.state)||"Disconnected",selectedLocationObj:t,realIpInfo:r,cameraMode:a,theme:l,locations:e,onSelectLocation:u,onRequestConnection:d});Ye.useEffect(()=>{_.current={vpnState:(s==null?void 0:s.state)||"Disconnected",selectedLocationObj:t,realIpInfo:r,cameraMode:a,theme:l,locations:e,onSelectLocation:u,onRequestConnection:d}},[s==null?void 0:s.state,t,r,a,l,e,u,d]);const g=Ye.useRef({globeGroup:null,coreMaterial:null,atmosphereMaterial:null,shieldCageMaterial:null,shieldRingMaterials:[],tunnelLine:null,tunnelGlowLine:null,tunnelPacketsGeo:null,tunnelPacketsMat:null,tunnelCurve:null,targetBeaconGroup:null,targetRingMat:null,targetPillarMat:null,originBeaconGroup:null,originRingMat:null,targetRotationY:0,targetRotationX:.25,userInteracting:!1});return Ye.useEffect(()=>{var Z,ge,J,ee;const x=g.current;if(!x.globeGroup)return;const M=((Z=r==null?void 0:r.coordinates)==null?void 0:Z.lat)??23.8103,A=((ge=r==null?void 0:r.coordinates)==null?void 0:ge.lng)??90.4125,S=((J=t==null?void 0:t.coordinates)==null?void 0:J.lat)??40.7128,y=((ee=t==null?void 0:t.coordinates)==null?void 0:ee.lng)??-74.006,N=Sr(M,A,un+.012),k=Sr(S,y,un+.012);x.originBeaconGroup&&(x.originBeaconGroup.position.copy(N),x.originBeaconGroup.lookAt(N.clone().multiplyScalar(2))),x.targetBeaconGroup&&(x.targetBeaconGroup.position.copy(k),x.targetBeaconGroup.lookAt(k.clone().multiplyScalar(2)));const b=N.distanceTo(k),I=N.clone().add(k).multiplyScalar(.5);I.length()<.001?I.set(0,1,0):I.normalize();const U=un+.22+b*.36,w=I.multiplyScalar(U),L=N.clone().lerp(w,.55).normalize().multiplyScalar(un+.14+b*.24),O=k.clone().lerp(w,.55).normalize().multiplyScalar(un+.14+b*.24),G=new Jg(N,L,O,k);x.tunnelCurve=G;const W=G.getPoints(72);x.tunnelLine&&x.tunnelLine.geometry.setFromPoints(W),x.tunnelGlowLine&&x.tunnelGlowLine.geometry.setFromPoints(W);const K=(y+180)*(Math.PI/180),z=S*(Math.PI/180);x.targetRotationY=-K+Math.PI*.5,x.targetRotationX=Math.max(-.55,Math.min(.65,z*.55))},[t,r]),Ye.useEffect(()=>{var et,it;const x=h.current;if(!x)return;const M={geometries:[],materials:[],textures:[]},A=Ee=>(M.geometries.push(Ee),Ee),S=Ee=>(M.materials.push(Ee),Ee),y=new fS;y.fog=new Sh(396056,.065);const N=x.clientWidth||800,k=x.clientHeight||600,b=new Ei(48,N/k,.1,100);b.position.set(0,.45,4.15),b.lookAt(0,0,0);const I=new VA({antialias:!0,alpha:!0,powerPreference:"high-performance"});I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.setSize(N,k),Lt.enabled=!0,I.outputColorSpace=fi,I.toneMapping=ch,I.toneMappingExposure=1.12,I.setClearColor(0,0),I.domElement.setAttribute("role","img"),I.domElement.setAttribute("aria-label","Interactive 3D Garuda Infinity Global Network Globe and Cyber Shield. Drag to rotate, scroll to zoom, or click a country node to connect."),I.domElement.style.display="block",I.domElement.style.width="100%",I.domElement.style.height="100%";const P=!!(typeof window<"u"&&(window.GarudaAndroidBridge||window.GarudaVpnBridge||window.location&&window.location.hostname==="appassets.garudainfinity.local"||window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.includes("GarudaInfinityAndroid")));P&&(I.domElement.style.pointerEvents="none",I.domElement.style.touchAction="none",x.style.pointerEvents="none",x.style.touchAction="none"),x.innerHTML="",x.appendChild(I.domElement);const U=new WA(b,I.domElement);U.enableDamping=!0,U.dampingFactor=.06,U.enablePan=!1,U.minDistance=2.45,U.maxDistance=6.2,U.rotateSpeed=.65,U.zoomSpeed=.85,U.touches={ONE:null,TWO:null},(P||N<=900)&&(b.position.set(0,.32,3.85),U.target.set(0,-.48,0),b.lookAt(0,-.48,0)),P&&(U.enabled=!1,U.enableRotate=!1,U.enableZoom=!1);const w=()=>{P||(g.current.userInteracting=!0)},L=()=>{P||setTimeout(()=>{g.current.userInteracting=!1},2200)};U.addEventListener("start",w),U.addEventListener("end",L);const O=new zS(9684477,.75);y.add(O);const G=new r0(14742270,1.65);G.position.set(5,6,6),y.add(G);const W=new r0(3003583,1.15);W.position.set(-6,-3,-4),y.add(W);const K=950,z=A(new ln),Z=new Float32Array(K*3),ge=new Float32Array(K*3);for(let Ee=0;Ee<K;Ee++){const je=7+Math.random()*14,Te=Math.random()*Math.PI*2,nt=Math.acos(2*Math.random()-1);Z[Ee*3]=je*Math.sin(nt)*Math.cos(Te),Z[Ee*3+1]=je*Math.sin(nt)*Math.sin(Te),Z[Ee*3+2]=je*Math.cos(nt);const Et=Math.random();ge[Ee*3]=Et>.5?.35:.25,ge[Ee*3+1]=Et>.5?.65:.85,ge[Ee*3+2]=.98}z.setAttribute("position",new zn(Z,3)),z.setAttribute("color",new zn(ge,3));const J=S(new xc({size:.036,vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1})),ee=new Yd(z,J);y.add(ee);const H=new ns;y.add(H),g.current.globeGroup=H;const j=A(new Aa(un*.986,48,48)),D=S(new US({color:463398,emissive:597050,emissiveIntensity:.45,roughness:.62,metalness:.28})),le=new xn(j,D);H.add(le),g.current.coreMaterial=D;const Pe=A(new Aa(un*1.075,36,36)),Ze=S(new Qi({color:3900150,transparent:!0,opacity:.11,side:Yn,blending:ws,depthWrite:!1})),$e=new xn(Pe,Ze);H.add($e),g.current.atmosphereMaterial=Ze;const we=[];for(let Ee=-60;Ee<=60;Ee+=30)for(let Te=0;Te<64;Te++){const nt=Te/64*360-180,Et=(Te+1)/64*360-180,ot=Sr(Ee,nt,un*.994),ct=Sr(Ee,Et,un*.994);we.push(ot.x,ot.y,ot.z,ct.x,ct.y,ct.z)}for(let Ee=-180;Ee<180;Ee+=30)for(let Te=0;Te<48;Te++){const nt=Te/48*180-90,Et=(Te+1)/48*180-90,ot=Sr(nt,Ee,un*.994),ct=Sr(Et,Ee,un*.994);we.push(ot.x,ot.y,ot.z,ct.x,ct.y,ct.z)}const re=A(new ln);re.setAttribute("position",new zn(new Float32Array(we),3));const ne=S(new yc({color:3718648,transparent:!0,opacity:.11})),Fe=new ES(re,ne);H.add(Fe);const Me=2500,ke=[],_t=[],Dt=(1+Math.sqrt(5))/2;for(let Ee=0;Ee<Me;Ee++){const je=1-Ee/(Me-1)*2,Te=Math.sqrt(1-je*je),nt=2*Math.PI*Ee/Dt,Et=Math.cos(nt)*Te,ot=Math.sin(nt)*Te,ct=Math.asin(je)*(180/Math.PI),qe=(Math.atan2(ot,-Et)*(180/Math.PI)-180+540)%360-180,Yt=iT(ct,qe);if(Yt||Ee%5===0){const At=un*(Yt?1.002:.996);ke.push(Et*At,je*At,ot*At),Yt?_t.push(.32,.72,.98):_t.push(.12,.26,.48)}}const yt=A(new ln);yt.setAttribute("position",new zn(new Float32Array(ke),3)),yt.setAttribute("color",new zn(new Float32Array(_t),3));const Mt=S(new xc({size:.024,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})),Ut=new Yd(yt,Mt);H.add(Ut);const mt=_.current.locations||[],Gt=Math.max(1,mt.length),$t=A(new Aa(.024,10,10)),Vt=S(new Qi({color:6333946,transparent:!0,opacity:.92})),st=new SS($t,Vt,Gt),Nt=new Wt,$=new St;mt.forEach((Ee,je)=>{var ot,ct;const Te=((ot=Ee.coordinates)==null?void 0:ot.lat)??0,nt=((ct=Ee.coordinates)==null?void 0:ct.lng)??0,Et=Sr(Te,nt,un+.014);Nt.makeTranslation(Et.x,Et.y,Et.z),st.setMatrixAt(je,Nt),$.setHex(Ee.hasStreaming?3718648:8490232),st.setColorAt(je,$)}),st.instanceMatrix.needsUpdate=!0,st.instanceColor&&(st.instanceColor.needsUpdate=!0),H.add(st);const kt=new ns,Pt=A(new Lc(.032,.062,24)),F=S(new Qi({color:16007006,side:ki,transparent:!0,opacity:.9})),E=new xn(Pt,F);kt.add(E);const ie=A(new Aa(.028,12,12)),ue=S(new Qi({color:16622767})),_e=new xn(ie,ue);kt.add(_e),H.add(kt),g.current.originBeaconGroup=kt,g.current.originRingMat=F;const Le=new ns,pe=A(new Lc(.04,.088,28)),oe=S(new Qi({color:3900150,side:ki,transparent:!0,opacity:.95})),ye=new xn(pe,oe);Le.add(ye);const ae=A(new Eh(.008,.022,.24,12));ae.rotateX(Math.PI/2),ae.translate(0,0,.12);const ze=S(new Qi({color:3462041,transparent:!0,opacity:.85})),te=new xn(ae,ze);Le.add(te),H.add(Le),g.current.targetBeaconGroup=Le,g.current.targetRingMat=oe,g.current.targetPillarMat=ze;const fe=A(new ln),Ae=S(new yc({color:3718648,transparent:!0,opacity:.95})),Ce=new Zf(fe,Ae);H.add(Ce),g.current.tunnelLine=Ce;const be=A(new ln),V=S(new yc({color:1096065,transparent:!0,opacity:.45,blending:ws})),Ne=new Zf(be,V);Ne.scale.setScalar(1.006),H.add(Ne),g.current.tunnelGlowLine=Ne;const xe=28,Re=new Float32Array(xe*3),De=A(new ln);De.setAttribute("position",new zn(Re,3));const Se=S(new xc({color:7268279,size:.055,transparent:!0,opacity:.95,blending:ws,depthWrite:!1})),Ge=new Yd(De,Se);H.add(Ge),g.current.tunnelPacketsGeo=De,g.current.tunnelPacketsMat=Se;const Ve=new ns;y.add(Ve);const vt=A(new Ah(un*1.24,2)),pt=S(new Qi({color:3900150,wireframe:!0,transparent:!0,opacity:.08,blending:ws})),Bt=new xn(vt,pt);Ve.add(Bt),g.current.shieldCageMaterial=pt;const pn=[{radius:un*1.32,tube:.006,rx:1.15,ry:.3,color:3900150},{radius:un*1.44,tube:.005,rx:-.85,ry:.75,color:3003583},{radius:un*1.56,tube:.004,rx:.42,ry:-1.1,color:6333946}],pi=[],Hi=[];pn.forEach(Ee=>{const je=A(new Th(Ee.radius,Ee.tube,12,96)),Te=S(new Qi({color:Ee.color,transparent:!0,opacity:.28,blending:ws})),nt=new xn(je,Te);nt.rotation.set(Ee.rx,Ee.ry,0),Ve.add(nt),pi.push(nt),Hi.push(Te)}),g.current.shieldRingMaterials=Hi;const Wi=((et=_.current.realIpInfo)==null?void 0:et.coordinates)||{lat:23.8103,lng:90.4125},Ai=((it=_.current.selectedLocationObj)==null?void 0:it.coordinates)||{lat:40.7128,lng:-74.006},ar=Sr(Wi.lat,Wi.lng,un+.012),Xi=Sr(Ai.lat,Ai.lng,un+.012);kt.position.copy(ar),kt.lookAt(ar.clone().multiplyScalar(2)),Le.position.copy(Xi),Le.lookAt(Xi.clone().multiplyScalar(2));const Fs=ar.distanceTo(Xi),En=ar.clone().add(Xi).multiplyScalar(.5).normalize().multiplyScalar(un+.22+Fs*.36),or=new Jg(ar,En,En,Xi);g.current.tunnelCurve=or;const Cr=or.getPoints(72);Ce.geometry.setFromPoints(Cr),Ne.geometry.setFromPoints(Cr);const Os=(Ai.lng+180)*(Math.PI/180);H.rotation.y=-Os+Math.PI*.5,g.current.targetRotationY=H.rotation.y;const ji=new HS,qn=new ht(-999,-999);let Ti={x:0,y:0},Vn=-1;const ks=(Ee,je)=>{const Te=I.domElement.getBoundingClientRect();!Te.width||!Te.height||(qn.x=(Ee-Te.left)/Te.width*2-1,qn.y=-((je-Te.top)/Te.height)*2+1)},Bs=Ee=>{P||Ee.pointerType==="touch"||ks(Ee.clientX,Ee.clientY)},qt=()=>{qn.set(-999,-999),Vn=-1,v(null),P||(I.domElement.style.cursor="grab")},zs=Ee=>{P||Ee.pointerType==="touch"||(Ti={x:Ee.clientX,y:Ee.clientY})},Rr=Ee=>{var nt,Et,ot;if(P||Ee.pointerType==="touch")return;const je=Math.abs(Ee.clientX-Ti.x),Te=Math.abs(Ee.clientY-Ti.y);if(je<6&&Te<6&&Vn>=0){const ct=(nt=_.current.locations)==null?void 0:nt[Vn];ct&&((ot=(Et=_.current).onSelectLocation)==null||ot.call(Et,ct.iso))}},Pr=()=>{var Ee,je,Te,nt,Et;if(!P&&Vn>=0){const ot=(Ee=_.current.locations)==null?void 0:Ee[Vn];ot&&((Te=(je=_.current).onSelectLocation)==null||Te.call(je,ot.iso),(Et=(nt=_.current).onRequestConnection)==null||Et.call(nt,ot.iso))}};P||(I.domElement.addEventListener("pointermove",Bs),I.domElement.addEventListener("pointerleave",qt),I.domElement.addEventListener("pointerdown",zs),I.domElement.addEventListener("pointerup",Rr),I.domElement.addEventListener("dblclick",Pr));const R=window.matchMedia("(prefers-reduced-motion: reduce)");let Y=R.matches;const me=Ee=>{Y=Ee.matches};R.addEventListener("change",me);const ce=new ResizeObserver(Ee=>{for(const je of Ee){const{width:Te,height:nt}=je.contentRect;Te>0&&nt>0&&(b.aspect=Te/nt,b.updateProjectionMatrix(),I.setSize(Te,nt))}});ce.observe(x);let se=performance.now(),We=0;function He(){var mn;const Ee=performance.now(),je=Math.min(.1,Math.max(.001,(Ee-se)/1e3));se=Ee,We+=je;const{vpnState:Te,cameraMode:nt,theme:Et}=_.current,ot=Te==="Connected",ct=Te==="Connecting"||Te==="Reconnecting",nn=nt==="shield",qe=nt==="orbit",Yt=ot?1096065:ct?3718648:3900150;Ze.color.lerp(new St(Yt),.06),Ze.opacity=ot?.16:.11,Et==="light"?(D.color.lerp(new St(992583),.08),D.emissive.lerp(new St(1521512),.08)):(D.color.lerp(new St(397346),.08),D.emissive.lerp(new St(662586),.08)),Ae.color.lerp(new St(ot?3462041:3718648),.08),oe.color.lerp(new St(ot?1096065:3900150),.08),ze.color.lerp(new St(ot?3462041:6333946),.08),pt.color.lerp(new St(Yt),.06);const At=nn?.24:ot?.12:.05;if(pt.opacity+=(At-pt.opacity)*.08,Hi.forEach((ut,dn)=>{const Nn=ot?dn%2===0?1096065:3462041:dn%2===0?3900150:3718648;ut.color.lerp(new St(Nn),.06);const bt=nn?.58:ot?.34:.18;ut.opacity+=(bt-ut.opacity)*.08}),!Y){const ut=ct?2.4:ot?.45:.22;Bt.rotation.y+=je*ut*.45,Bt.rotation.x+=je*ut*.2,pi[0].rotation.z+=je*ut*.9,pi[1].rotation.x-=je*ut*.7,pi[2].rotation.y+=je*ut*.55,ee.rotation.y+=je*.018;const dn=1+Math.sin(We*(ct?8:3.5))*.24;ye.scale.setScalar(dn),E.scale.setScalar(1+Math.cos(We*3)*.18);const Nn=g.current.tunnelCurve;if(Nn){const bt=De.attributes.position,Ht=bt.array,si=ot?.42:ct?.75:.18;for(let It=0;It<xe;It++){const Kn=(We*si+It/xe)%1,Hn=Nn.getPointAt(Kn);Ht[It*3]=Hn.x,Ht[It*3+1]=Hn.y,Ht[It*3+2]=Hn.z}bt.needsUpdate=!0,Se.color.setHex(ot?7268279:ct?16638023:6333946),Se.size=ot?.062:.048}if(!g.current.userInteracting)if(qe||ct)H.rotation.y+=je*(ct?.85:.28),g.current.targetRotationY=H.rotation.y;else{const bt=g.current.targetRotationY-H.rotation.y;H.rotation.y+=bt*Math.min(1,je*3.2);const Ht=g.current.targetRotationX-H.rotation.x;H.rotation.x+=Ht*Math.min(1,je*3.2)}}if(qn.x>=-1&&qn.x<=1&&qn.y>=-1&&qn.y<=1){ji.setFromCamera(qn,b);const ut=ji.intersectObject(st,!1);if(ut.length>0&&ut[0].instanceId!==void 0){const dn=ut[0].instanceId;if(Vn!==dn){Vn=dn;const Nn=(mn=_.current.locations)==null?void 0:mn[dn];v(Nn||null)}I.domElement.style.cursor="pointer"}else Vn!==-1&&(Vn=-1,v(null)),I.domElement.style.cursor="grab"}U.update(),I.render(y,b)}I.setAnimationLoop(He);const Xe=()=>{document.hidden?I.setAnimationLoop(null):(se=performance.now(),I.setAnimationLoop(He))};return document.addEventListener("visibilitychange",Xe),()=>{I.setAnimationLoop(null),document.removeEventListener("visibilitychange",Xe),R.removeEventListener("change",me),ce.disconnect(),U.removeEventListener("start",w),U.removeEventListener("end",L),U.dispose(),I.domElement.removeEventListener("pointermove",Bs),I.domElement.removeEventListener("pointerleave",qt),I.domElement.removeEventListener("pointerdown",zs),I.domElement.removeEventListener("pointerup",Rr),I.domElement.removeEventListener("dblclick",Pr),M.geometries.forEach(Ee=>Ee.dispose()),M.materials.forEach(Ee=>Ee.dispose()),M.textures.forEach(Ee=>Ee.dispose()),I.dispose()}},[]),C.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden"},children:[C.jsx("div",{ref:h,style:{width:"100%",height:"100%",position:"relative"}}),p&&C.jsxs("div",{style:{position:"absolute",top:86,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",display:"flex",alignItems:"center",gap:10,padding:"7px 14px",borderRadius:999,background:l==="light"?"rgba(255, 255, 255, 0.92)":"rgba(15, 23, 42, 0.88)",backdropFilter:"blur(12px)",border:l==="light"?"1px solid rgba(37, 99, 235, 0.25)":"1px solid rgba(56, 189, 248, 0.35)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.25)",color:l==="light"?"#0F172A":"#F8FAFC",fontSize:12,fontWeight:600,zIndex:15},children:[C.jsx("img",{src:Mc(p.iso),alt:p.name,style:{width:18,height:18,borderRadius:"50%",objectFit:"cover"}}),C.jsxs("span",{children:[p.name," (",p.city,")"]}),C.jsxs("span",{style:{fontSize:11,color:p.basePingMs<75?"#10B981":"#38BDF8",fontVariantNumeric:"tabular-nums"},children:[p.basePingMs," ms"]}),C.jsx("span",{style:{fontSize:10,opacity:.7},children:"• Click to select, double-click to connect"})]})]})}function D0(s){return!s||s<=0?"0.0 KB":s<1024*1024?`${(s/1024).toFixed(1)} KB`:`${(s/(1024*1024)).toFixed(2)} MB`}function U0(s){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><circle cx="18" cy="18" r="18" fill="url(#g)"/><text x="18" y="22" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="800" font-size="12">${String(s||"GL").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,2)||"GL"}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function sT({vpnStatus:s,realIpInfo:e,locations:t,allLocations:r,showExtendedCatalog:a,onToggleExtendedCatalog:l,selectedLocationIso:u,onSelectLocation:d,onRequestConnection:h,onConnectButtonClick:p,onRotateIp:v,isStreamingMode:_,onSetStreamingMode:g,connectionElapsedFormatted:x,lookingForBestServer:M,onRefreshLocations:A,serviceBridgeConnected:S,rxBytes:y=0,txBytes:N=0,onVerifyIp:k,ipVerificationResult:b,isVerifyingIp:I,activeCountryTimeInfo:P,cameraMode:U="globe",onChangeCameraMode:w,theme:L="dark"}){const[O,G]=Ye.useState(""),[W,K]=Ye.useState("ALL"),[z,Z]=Ye.useState(!1),[ge,J]=Ye.useState(!1),ee=t,H=Ye.useMemo(()=>t.find(we=>we.iso===u)||t.find(we=>we.iso==="US")||t[0],[t,u]),j=Ye.useMemo(()=>{const we=O.trim().toLowerCase();return ee.filter(re=>{const ne=!!(re.streamingOptimized||re.hasStreaming);return _&&!ne||W!=="ALL"&&re.region!==W?!1:we?re.name.toLowerCase().includes(we)||re.iso.toLowerCase().includes(we)||re.city&&re.city.toLowerCase().includes(we)||re.region&&re.region.toLowerCase().includes(we):!0})},[ee,O,_,W]),D=s.state==="Connected",le=s.state==="Connecting"||s.state==="Disconnecting"||s.state==="Reconnecting",Pe=Ye.useMemo(()=>{switch(s.state){case"Connected":return"Connected";case"Connecting":return M?"Looking for the best server...":"Connecting...";case"Disconnecting":return"Disconnecting...";case"Reconnecting":return"Reconnecting...";case"Disconnected":default:return s.error&&s.error!=="None"?"Please retry to connect":"Not connected"}},[s.state,s.error,M]),Ze=Ye.useMemo(()=>le?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-busy.svg":D?z?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-stop-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-stop-rest.svg":s.error&&s.error!=="None"?z?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-retry-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-retry-rest.svg":z?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-start-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-start-rest.svg",[le,D,s.error,z]),$e=Ye.useMemo(()=>ee.filter(we=>we.streamingOptimized||we.hasStreaming).length,[ee]);return C.jsxs("div",{className:"u-vpn-main-split",children:[C.jsxs("div",{className:"u-vpn-stage-pane",style:{flex:1,position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",overflow:"hidden",padding:"18px 22px 20px 22px"},children:[C.jsx(rT,{vpnStatus:s,locations:t,selectedLocationObj:H,realIpInfo:e,cameraMode:U,theme:L,onSelectLocation:d,onRequestConnection:h}),C.jsx("div",{className:"u-connect-console-wrap",style:{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",margin:"auto auto 0 auto",width:"100%",maxWidth:460},children:C.jsxs("div",{className:"u-glass-card u-connect-console-card",style:{width:"100%",borderRadius:24,padding:"20px 24px 18px 24px",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[C.jsxs("div",{className:"u-connect-hero-ring-wrap",style:{position:"relative",width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center"},children:[C.jsx("img",{src:"/resources/Screens/S4_MainLayout/Main/assets/connect-button-bg.svg",alt:"","aria-hidden":"true",className:`u-connect-hero-ring-svg ${le?"uv-spin-fast":"uv-pulse-halo"}`,style:{position:"absolute",width:128,height:128,pointerEvents:"none",filter:D?"drop-shadow(0 6px 22px rgba(16, 185, 129, 0.55)) hue-rotate(310deg)":"drop-shadow(0 6px 20px rgba(59, 130, 246, 0.45))"}}),C.jsx("button",{onClick:p,onMouseEnter:()=>Z(!0),onMouseLeave:()=>Z(!1),className:"u-connect-hero-core-btn","aria-label":D?"Disconnect VPN tunnel":`Connect VPN to ${(H==null?void 0:H.name)||"selected country"}`,style:{width:78,height:78,borderRadius:"50%",backgroundColor:"#FFFFFF",border:D?"2px solid rgba(16, 185, 129, 0.55)":"2px solid rgba(59, 130, 246, 0.35)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",zIndex:4,boxShadow:z?D?"0 0 28px rgba(16, 185, 129, 0.65)":"0 0 28px rgba(59, 130, 246, 0.6)":"0 6px 16px rgba(0, 0, 0, 0.28)",transition:"box-shadow 150ms ease, border-color 150ms ease"},children:C.jsx("img",{src:Ze,alt:"","aria-hidden":"true",className:`u-connect-hero-core-icon ${le?"uv-spin-slow":""}`,style:{width:le?34:30,height:le?34:30}})})]}),C.jsxs("div",{className:"u-connect-status-row",style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",gap:9},children:[!le&&C.jsx("span",{"aria-hidden":"true",className:"u-connect-status-dot",style:{width:11,height:11,borderRadius:"50%",backgroundColor:D?"#10B981":"#F43F5E",boxShadow:D?"0 0 12px rgba(16, 185, 129, 0.85)":"0 0 10px rgba(244, 63, 94, 0.65)",display:"inline-block"}}),C.jsx("span",{className:"u-connect-status-title",style:{fontSize:M?18:21,fontWeight:700,color:"var(--uv-text-heading)",letterSpacing:"-0.3px"},children:Pe}),C.jsx("span",{className:"u-connect-status-pill",style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,backgroundColor:D?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.16)",color:D?"#34D399":"#FB7185",border:D?"1px solid rgba(16, 185, 129, 0.35)":"1px solid rgba(244, 63, 94, 0.3)"},children:D?"TUNNEL PROTECTED":"UNPROTECTED"})]}),C.jsxs("div",{className:"u-connect-telemetry-row",style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"center",gap:16,fontSize:13,color:"var(--uv-text-secondary)",fontVariantNumeric:"tabular-nums"},children:[C.jsx("span",{className:"u-connect-timer-text",style:{fontSize:16,fontWeight:700,color:D?"#34D399":"var(--uv-text-muted)",letterSpacing:"0.8px"},children:x}),C.jsx("span",{children:"•"}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},title:"Encrypted Download Traffic",children:[C.jsx(Ty,{size:13,color:"#38BDF8","aria-hidden":"true"}),C.jsx("span",{children:D0(y)})]}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},title:"Encrypted Upload Traffic",children:[C.jsx(by,{size:13,color:"#10B981","aria-hidden":"true"}),C.jsx("span",{children:D0(N)})]})]}),H&&C.jsxs("button",{onClick:p,className:"u-connect-target-btn","aria-label":`Target location ${H.name}, ${H.city}. Click to ${D?"disconnect":"connect"}`,style:{marginTop:14,width:"100%",height:56,padding:"0 18px",borderRadius:16,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,cursor:"pointer",color:"var(--uv-text-heading)",transition:"border-color 150ms ease, background-color 150ms ease"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[C.jsx("img",{src:Mc(H.iso),alt:H.name,className:"u-connect-target-flag",style:{width:34,height:34,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--uv-border-strong)",flexShrink:0},onError:we=>{we.currentTarget.onerror=null,we.currentTarget.src=U0(H.iso)}}),C.jsxs("div",{style:{display:"flex",flexDirection:"column",textAlign:"left",minWidth:0},children:[C.jsx("span",{className:"u-connect-target-name",style:{fontSize:15,fontWeight:700,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:H.name}),C.jsx("span",{className:"u-connect-target-sub",style:{fontSize:11,color:"var(--uv-text-secondary)"},children:D?`${s.statusCity||s.statusCountryName||""} • ${s.statusIp}`:H.city})]})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[(H.streamingOptimized||H.hasStreaming)&&C.jsxs("span",{style:{fontSize:10,fontWeight:700,padding:"3px 7px",borderRadius:6,backgroundColor:"rgba(59, 130, 246, 0.18)",color:"#60A5FA",display:"inline-flex",alignItems:"center",gap:4},children:[C.jsx(dg,{size:11,"aria-hidden":"true"}),C.jsx("span",{children:"4K"})]}),C.jsxs("span",{style:{fontSize:12,fontWeight:700,color:(H.ping||H.basePingMs||48)<75?"#10B981":"#38BDF8",fontVariantNumeric:"tabular-nums"},children:[H.ping||H.basePingMs||48," ms"]})]})]}),C.jsxs("div",{className:"u-console-footer-row",style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",fontSize:11,color:"var(--uv-text-secondary)",padding:"0 4px",gap:8,flexWrap:"wrap"},children:[C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[C.jsx("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:"50%",backgroundColor:S?"#10B981":"#F59E0B"}}),C.jsx("span",{children:s.tunnelMode&&s.tunnelMode!=="Disconnected"?`Tunnel: ${s.tunnelMode}`:"Garuda Infinity Engine Ready"})]}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[C.jsxs("span",{children:["Protocol:"," ",C.jsx("strong",{style:{color:"var(--uv-text-body)"},children:_?"OpenVPN TCP (Streaming)":s.effectiveProtocolLabel||"Garuda LinkX"})]}),D&&v&&C.jsx("button",{onClick:v,title:"Rotate Exit IP in current country",style:{padding:"2px 7px",borderRadius:6,border:"1px solid rgba(59, 130, 246, 0.42)",background:"rgba(59, 130, 246, 0.16)",color:"#60A5FA",fontSize:10,fontWeight:700,cursor:"pointer"},children:"Rotate IP"})]})]})]})})]}),C.jsxs("aside",{className:"u-vpn-servers-aside",style:{display:"flex",flexDirection:"column",backgroundColor:"var(--uv-surface-panel)",borderLeft:"1px solid var(--uv-border)",flexShrink:0,zIndex:20},children:[C.jsxs("div",{style:{padding:"20px 18px 12px 18px",borderBottom:"1px solid var(--uv-divider)"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[C.jsxs("div",{children:[C.jsx("h2",{style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:"All Free & Premium Servers"}),C.jsx("span",{style:{fontSize:11,color:"var(--uv-text-secondary)"},children:"Click any country to switch your IP & rotate the 3D tunnel"})]}),C.jsx("span",{title:"82 official high-speed VPN server countries",style:{fontSize:11,fontWeight:600,padding:"5px 10px",borderRadius:10,border:"1px solid var(--uv-border-strong)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",userSelect:"none"},children:`${t.length} Official`})]}),C.jsxs("div",{style:{height:38,display:"flex",alignItems:"center",gap:8,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",borderRadius:10,padding:"0 12px"},children:[C.jsx(lg,{size:15,color:"var(--uv-text-secondary)","aria-hidden":"true"}),C.jsx("input",{type:"text",value:O,onChange:we=>G(we.target.value),placeholder:"Search country, city, or ISO code...","aria-label":"Search VPN server countries",style:{flex:1,border:"none",background:"transparent",outline:"none",fontSize:13,color:"var(--uv-text-heading)"}}),O&&C.jsx("button",{onClick:()=>G(""),"aria-label":"Clear search query",style:{background:"transparent",border:"none",color:"var(--uv-text-secondary)",cursor:"pointer",display:"flex",alignItems:"center"},children:C.jsx(sf,{size:14})})]}),C.jsxs("div",{style:{marginTop:10,display:"flex",backgroundColor:"var(--uv-surface-card)",borderRadius:10,padding:3,border:"1px solid var(--uv-border)",gap:4},children:[C.jsxs("button",{onClick:()=>g(!1),style:{flex:1,height:32,borderRadius:7,border:"none",backgroundColor:_?"transparent":"var(--uv-primary)",color:_?"var(--uv-text-secondary)":"#FFFFFF",fontWeight:600,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[C.jsx(By,{size:13,"aria-hidden":"true"}),C.jsxs("span",{children:["All Servers (",ee.length,")"]})]}),C.jsxs("button",{onClick:()=>g(!0),style:{flex:1,height:32,borderRadius:7,border:"none",backgroundColor:_?"var(--uv-primary)":"transparent",color:_?"#FFFFFF":"var(--uv-text-secondary)",fontWeight:600,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[C.jsx(dg,{size:13,"aria-hidden":"true"}),C.jsxs("span",{children:["Streaming & 4K (",$e,")"]})]})]}),C.jsx("div",{style:{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"},children:[{id:"ALL",label:"All Regions"},{id:"America",label:"Americas"},{id:"Europe, Middle East & Africa",label:"Europe & MEA"},{id:"Asia & Oceania",label:"Asia & Oceania"}].map(we=>{const re=W===we.id;return C.jsx("button",{onClick:()=>K(we.id),style:{fontSize:11,fontWeight:re?600:500,padding:"4px 10px",borderRadius:999,border:"1px solid",borderColor:re?"var(--uv-primary)":"var(--uv-border)",backgroundColor:re?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:re?"#60A5FA":"var(--uv-text-secondary)",cursor:"pointer"},children:we.label},we.id)})})]}),C.jsx("div",{className:"uv-scrollbar",style:{flex:1,overflowY:"auto",padding:"8px 12px 18px 12px"},children:j.length===0?C.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"},children:[C.jsx(lg,{size:42,color:"var(--uv-text-muted)",style:{marginBottom:12}}),C.jsx("div",{style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)",marginBottom:4},children:"No matching servers"}),C.jsxs("div",{style:{fontSize:12,color:"var(--uv-text-secondary)",lineHeight:1.45,marginBottom:14},children:["No countries matched “",O,"”. Try searching another country name, city, or ISO code."]}),C.jsx("button",{className:"u-btn u-btn-secondary",style:{height:32,fontSize:12},onClick:()=>{G(""),K("ALL"),A==null||A()},children:"Reset Filters"})]}):j.map(we=>{const re=we.iso===u,ne=D&&(s.uiLockedLocation===we.iso||s.statusCountryIso2===we.iso),Fe=!!(we.streamingOptimized||we.hasStreaming),Me=we.ping||we.basePingMs||52;return C.jsxs("div",{className:`u-location-row ${ne?"connected":re?"selected":""}`,onClick:()=>{d(we.iso),h(we.iso)},children:[C.jsx("div",{style:{width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:11,flexShrink:0},children:C.jsx("img",{src:Mc(we.iso),alt:we.name,loading:"lazy",style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--uv-border-strong)"},onError:ke=>{ke.currentTarget.onerror=null,ke.currentTarget.src=U0(we.iso)}})}),C.jsxs("div",{style:{flex:1,minWidth:0},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[C.jsx("span",{style:{fontSize:14,fontWeight:re?700:600,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:we.name}),C.jsx("span",{style:{fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:4,backgroundColor:Fe?"rgba(59, 130, 246, 0.2)":"rgba(148, 163, 184, 0.14)",color:Fe?"#60A5FA":"var(--uv-text-secondary)"},children:Fe?"PREMIUM • 4K":"FREE"})]}),C.jsxs("div",{style:{fontSize:11,color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",gap:6,marginTop:2,fontVariantNumeric:"tabular-nums"},children:[C.jsx("span",{children:we.city}),C.jsx("span",{children:"•"}),C.jsxs("span",{children:[we.serverCount||8," nodes"]}),C.jsx("span",{children:"•"}),C.jsxs("span",{style:{color:Me<75?"#10B981":"#38BDF8",fontWeight:600},children:[Me," ms"]})]})]}),re?C.jsxs("div",{style:{padding:"0 10px",height:26,borderRadius:999,backgroundColor:ne?"rgba(16, 185, 129, 0.22)":"rgba(59, 130, 246, 0.22)",color:ne?"#34D399":"#60A5FA",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0,gap:4},children:[C.jsx(Cy,{size:12,"aria-hidden":"true"}),C.jsx("span",{children:ne?"Connected":"Selected"})]}):C.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#60A5FA",padding:"4px 8px",borderRadius:6,backgroundColor:"rgba(59, 130, 246, 0.1)"},children:"Connect"})]},we.iso)})})]})]})}const aT=[{label:"Auto (Recommended)",value:"Auto"},{label:"WireGuard (LinkX)",value:"WireGuard"},{label:"OpenVPN (UDP)",value:"OpenVPN_UDP"},{label:"OpenVPN (TCP)",value:"OpenVPN_TCP"}];function oT({vpnProtocol:s="Auto",onChangeProtocol:e=()=>{},appAutoStart:t=!1,onToggleAppAutoStart:r=()=>{},dynamicIpRotation:a=!0,onToggleDynamicIp:l=()=>{},theme:u="dark",onToggleTheme:d=()=>{},cameraMode:h="globe",onChangeCameraMode:p=()=>{},serviceBridgeConnected:v=!0,isAndroidApp:_=!1,updateInfo:g={},isCheckingUpdate:x=!1,onCheckForUpdate:M=()=>{}}){const A=!!_,S=A?Mr:Eo,y=A?wo:Wy,[N,k]=Ye.useState(null),[b,I]=Ye.useState(()=>{var z,Z;try{return typeof window<"u"&&!!((Z=(z=window.location)==null?void 0:z.search)!=null&&Z.includes("autoUpdate=1"))}catch{return!1}}),[P,U]=Ye.useState(""),[w,L]=Ye.useState(!1),O=async()=>{L(!0),U("Opening unpacked extension folder selector...");try{const z=await Z0({allowPicker:!0,onProgress:Z=>U(Z)});z&&z.ok&&U(`Updated ${z.writtenCount||""} files! Reloading extension...`)}catch(z){U((z==null?void 0:z.message)||"Folder selection cancelled — downloading ZIP fallback...")}finally{L(!1)}},G=!!(g!=null&&g.updateAvailable),W=(g==null?void 0:g.latestAppVersion)||S,K=x?"Checking for updates...":G?`New V${W} available`:`OTA Sync Active • Up to date (${y})`;return C.jsxs("section",{"aria-label":A?"App Settings":"Extension Settings",className:"uv-scrollbar",style:{flex:1,height:"100%",overflowY:"auto",padding:A?"18px 14px 36px 14px":"24px 20px 44px 20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[C.jsxs("div",{style:{width:"100%",maxWidth:540},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,gap:10},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[C.jsx("h1",{style:{fontSize:20,fontWeight:800,color:"var(--uv-text-heading)",letterSpacing:"-0.02em"},children:A?"Settings":"Extension Settings"}),C.jsx("span",{style:{fontSize:10.5,fontWeight:800,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(59, 130, 246, 0.18)",border:"1px solid rgba(59, 130, 246, 0.42)",color:"#60A5FA",whiteSpace:"nowrap"},children:y})]}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:10.5,fontWeight:700,padding:"4px 10px",borderRadius:999,backgroundColor:"rgba(16, 185, 129, 0.16)",color:"#34D399",border:"1px solid rgba(16, 185, 129, 0.36)",whiteSpace:"nowrap"},children:[A?C.jsx(Oy,{size:12,color:"#34D399","aria-hidden":"true"}):C.jsx(Ly,{size:12,color:"#34D399","aria-hidden":"true"}),C.jsx("span",{children:A?"System VPN Ready":v?"Extension Active":"Standalone Mode"})]})]}),!A&&(b||P)&&C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px 16px",marginBottom:18,border:"1px solid rgba(56, 189, 248, 0.48)",background:"linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(37, 99, 235, 0.12))"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:6},children:[C.jsx("div",{style:{fontSize:13.5,fontWeight:800,color:"#38BDF8"},children:"1-Click Automatic Extension Folder Updater"}),C.jsx("button",{onClick:()=>I(!1),className:"u-btn u-btn-secondary",style:{height:24,padding:"0 8px",fontSize:11},children:"Hide"})]}),C.jsxs("p",{style:{fontSize:12,color:"var(--uv-text-body)",lineHeight:1.5,margin:"0 0 10px 0"},children:["Select your unpacked ",C.jsx("strong",{children:"extension"})," folder once. Garuda Infinity will automatically download the latest release, overwrite the files in-place, and reload the extension for you!"]}),P&&C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"#FBBF24",marginBottom:10},children:P}),C.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[C.jsx("button",{onClick:O,disabled:w,className:"u-btn u-btn-primary",style:{height:34,padding:"0 14px",fontSize:12,fontWeight:700},children:w?"Updating Extension...":"Select Extension Folder & Update Automatically"}),C.jsx("button",{onClick:()=>cf(g==null?void 0:g.extensionZipUrl),className:"u-btn u-btn-secondary",style:{height:34,padding:"0 12px",fontSize:12,fontWeight:600},children:"Download ZIP Instead"})]})]}),C.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:A?"Tunnel & Connection":"Extension Tunnel & Startup"}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"4px 16px",marginBottom:18},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"VPN Protocol"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:"LinkX WireGuard or OpenVPN"})]}),C.jsx("select",{"aria-label":"Select VPN Protocol",value:s,onChange:z=>e(z.target.value),style:{width:168,height:34,padding:"0 10px",borderRadius:9,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",color:"var(--uv-text-heading)",fontSize:12,fontWeight:600,cursor:"pointer",outline:"none",flexShrink:0},children:aT.map(z=>C.jsx("option",{value:z.value,style:{backgroundColor:u==="light"?"#FFFFFF":"#0F172A",color:u==="light"?"#0F172A":"#F8FAFC"},children:z.label},z.value))})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:A?"Auto-Connect on Launch":"Auto-Connect on Startup"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:A?"Connect when app opens":"Connect when browser launches"})]}),C.jsx("button",{role:"switch","aria-checked":t,"aria-label":"Auto-Connect",onClick:r,className:`u-switch ${t?"u-switch-checked":""}`,style:{flexShrink:0},children:C.jsx("span",{className:"u-switch-thumb"})})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"Dynamic IP Rotation"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:a?"New exit IP on every connect":"Single static IP per country"})]}),C.jsx("button",{type:"button",onClick:l,"aria-pressed":a,title:"Click to toggle Dynamic IP Rotation (Active / Deactive)",style:{fontSize:10.5,fontWeight:800,padding:"4px 11px",borderRadius:999,backgroundColor:a?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.18)",color:a?"#34D399":"#FB7185",border:a?"1px solid rgba(16, 185, 129, 0.38)":"1px solid rgba(244, 63, 94, 0.38)",whiteSpace:"nowrap",flexShrink:0,cursor:"pointer",userSelect:"none",transition:"all 150ms ease"},children:a?"ACTIVE":"DEACTIVE"})]})]}),C.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:"Appearance & 3D View"}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"4px 16px",marginBottom:18},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"Interface Theme"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:u==="dark"?"Dark Cyber Glass":"Clean Light Mode"})]}),C.jsx("button",{onClick:d,className:"u-btn u-btn-secondary",style:{height:34,padding:"0 14px",fontSize:12.5,fontWeight:700,whiteSpace:"nowrap",flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6},children:u==="dark"?C.jsxs(C.Fragment,{children:[C.jsx(z0,{size:14,color:"#FBBF24","aria-hidden":"true"}),C.jsx("span",{children:"Switch Theme"})]}):C.jsxs(C.Fragment,{children:[C.jsx(B0,{size:14,color:"#3B82F6","aria-hidden":"true"}),C.jsx("span",{children:"Switch Theme"})]})})]}),C.jsxs("div",{style:{padding:"13px 0",display:"flex",flexDirection:"column",gap:10},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"3D Camera View"}),C.jsx("span",{style:{fontSize:11.5,color:"var(--uv-text-secondary)"},children:"Default globe mode"})]}),C.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:6,backgroundColor:"var(--uv-surface-card)",padding:4,borderRadius:10,border:"1px solid var(--uv-border)"},children:[{id:"globe",label:"3D Globe"},{id:"shield",label:"3D Shield"},{id:"orbit",label:"Auto-Orbit"}].map(z=>{const Z=h===z.id;return C.jsx("button",{onClick:()=>p(z.id),style:{height:32,padding:"0 8px",borderRadius:7,border:Z?"1px solid var(--uv-primary)":"1px solid transparent",backgroundColor:Z?"var(--uv-primary)":"transparent",color:Z?"#FFFFFF":"var(--uv-text-body)",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",textAlign:"center",transition:"background-color 150ms ease, color 150ms ease"},children:z.label},z.id)})})]})]}),C.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:"About"}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:16,padding:"20px 18px",marginBottom:14},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:14},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:0},children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:38,height:38,flexShrink:0}}),C.jsxs("div",{style:{minWidth:0},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[C.jsx("span",{style:{fontSize:16,fontWeight:800,color:"var(--uv-text-heading)",whiteSpace:"nowrap"},children:"Garuda Infinity"}),C.jsx("span",{style:{fontSize:10.5,fontWeight:800,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(16, 185, 129, 0.18)",border:"1px solid rgba(16, 185, 129, 0.4)",color:"#34D399",whiteSpace:"nowrap"},children:y})]}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:A?"Android Mobile VPN • Global 3D Gateway":"Standalone Browser VPN • Global 3D Gateway"})]})]}),C.jsx("span",{className:"quicksilver-gold-badge",title:"Lead Developer",children:C.jsx("span",{className:"quicksilver-gold-glow",children:"QUICKSILVER"})})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"14px 0",borderTop:"1px solid var(--uv-divider)",borderBottom:"1px solid var(--uv-divider)",marginBottom:14},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:A?"App Auto-Update":"Extension Auto-Update"}),C.jsx("div",{style:{fontSize:11.5,color:G?"#FBBF24":"var(--uv-text-secondary)",marginTop:2},children:K})]}),C.jsx("button",{onClick:M,disabled:x,className:G?"u-btn u-btn-primary":"u-btn u-btn-secondary",style:{height:34,padding:"0 14px",fontSize:12,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:x?"Checking...":G?`Update to V${W}`:"Check Update"})]}),C.jsxs("button",{onClick:()=>k("gcs"),className:"about-gcs-btn",style:{marginBottom:14,padding:"12px 14px"},children:[C.jsxs("div",{className:"about-gcs-left",children:[C.jsx("img",{src:"/gcs-logo.png",alt:"GCS",className:"about-gcs-emblem",style:{width:34,height:34}}),C.jsxs("div",{children:[C.jsx("div",{className:"about-gcs-title",style:{fontSize:13.5},children:"About Garuda Cyber Shield"}),C.jsx("div",{className:"about-gcs-sub",style:{fontSize:11},children:"Official Cyber Defense & Mission Briefing"})]})]}),C.jsxs("span",{className:"about-gcs-cta",children:[C.jsx("span",{children:"Briefing"}),C.jsx(Ry,{size:13,strokeWidth:2.6})]})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:[C.jsxs("button",{onClick:()=>k("terms"),className:"u-btn u-btn-secondary",style:{height:36,fontSize:12.5,fontWeight:700,justifyContent:"center"},children:[C.jsx(ag,{size:14,color:"#60A5FA","aria-hidden":"true"}),C.jsx("span",{children:"Terms of Service"})]}),C.jsxs("button",{onClick:()=>k("privacy"),className:"u-btn u-btn-secondary",style:{height:36,fontSize:12.5,fontWeight:700,justifyContent:"center"},children:[C.jsx(og,{size:14,color:"#34D399","aria-hidden":"true"}),C.jsx("span",{children:"Privacy Policy"})]})]})]}),C.jsx("div",{className:"u-glass-card",style:{borderRadius:12,padding:"11px 14px",textAlign:"center"},children:C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)"},children:"© 2026 Garuda Cyber Shield. All Rights Reserved."})})]}),N==="gcs"&&C.jsx("div",{role:"dialog","aria-modal":"true",className:"u-modal-backdrop",onClick:()=>k(null),children:C.jsxs("div",{className:"u-dialog-card",style:{width:"94%",maxWidth:500,padding:"20px 20px 22px 20px",borderRadius:18},onClick:z=>z.stopPropagation(),children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,paddingBottom:12,borderBottom:"1px solid var(--uv-divider)"},children:[C.jsxs("div",{style:{fontSize:15,fontWeight:800,color:"var(--uv-text-heading)"},children:["About"," ",C.jsxs("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#38BDF8",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:5},children:[C.jsx("span",{children:"Garuda Cyber Shield"}),C.jsx(Py,{size:13})]})]}),C.jsx("button",{onClick:()=>k(null),className:"u-btn u-btn-secondary",style:{height:30,padding:"0 12px",fontSize:12},children:"Close"})]}),C.jsxs("div",{style:{background:u==="light"?"radial-gradient(circle at 50% 16%, #e0f2fe 0%, #f0f9ff 52%, #f8fafc 100%)":"radial-gradient(circle at 50% 16%, #0c2d48 0%, #071324 55%, #05080f 100%)",border:u==="light"?"1px solid rgba(2, 132, 199, 0.35)":"1px solid rgba(56, 189, 248, 0.28)",borderRadius:16,padding:"24px 18px 20px 18px",textAlign:"center"},children:[C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",borderRadius:"50%",padding:4,background:"radial-gradient(circle, rgba(0, 212, 255, 0.38) 0%, rgba(245, 158, 11, 0.18) 65%, transparent 100%)",boxShadow:"0 0 28px rgba(0, 210, 255, 0.35), 0 0 14px rgba(245, 158, 11, 0.28)"},children:C.jsx("img",{src:"/gcs-logo.png",alt:"Garuda Cyber Shield",style:{width:92,height:92,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(245, 158, 11, 0.72)"}})}),C.jsx("div",{style:{marginTop:14},children:C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:18,fontWeight:900,letterSpacing:"0.08em",color:"var(--uv-text-heading)",textDecoration:"none"},children:"GARUDA CYBER SHIELD"})}),C.jsx("div",{style:{marginTop:8,marginBottom:18},children:C.jsx("span",{style:{display:"inline-block",fontSize:11.5,fontWeight:700,color:u==="light"?"#0284c7":"#38bdf8",backgroundColor:u==="light"?"rgba(2, 132, 199, 0.1)":"rgba(0, 200, 255, 0.12)",border:u==="light"?"1px solid rgba(2, 132, 199, 0.28)":"1px solid rgba(0, 200, 255, 0.28)",padding:"4px 13px",borderRadius:999},children:"Garuda Eyes on Every Threat, Shielding Cyber Universe"})}),C.jsxs("div",{style:{background:u==="light"?"#ffffff":"#080d18",border:u==="light"?"1px solid rgba(148, 163, 184, 0.35)":"1px solid rgba(0, 200, 255, 0.22)",borderTop:"3px solid #f59e0b",borderRadius:13,padding:"18px 18px 16px 18px",textAlign:"center"},children:[C.jsxs("div",{style:{fontSize:12,fontWeight:900,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--uv-text-heading)",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[C.jsx("span",{style:{color:"#f59e0b"},children:"//"}),C.jsx("span",{children:"MISSION BRIEFING"})]}),C.jsxs("p",{style:{fontSize:13,lineHeight:1.72,color:"var(--uv-text-body)",margin:0,textAlign:"center"},children:[C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:u==="light"?"#0284c7":"#38bdf8",fontWeight:800,textDecoration:"none",borderBottom:"1px solid rgba(56, 189, 248, 0.45)"},children:"Garuda Cyber Shield"})," ","(GCS) stands relentlessly vigilant against every threat, attack, and act of hostility targeting the Sanatani community. We will never tolerate insults, hatred, aggression, or deliberate disrespect toward Sanatan Dharma and its believers. We stand uncompromising in defending Sanatan Dharma, protecting Hindu dignity, and holding every act of anti-Hindu misconduct accountable. Our vigilance never sleeps, because Garuda's eyes on every threat all the time."]}),C.jsx("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--uv-divider)",fontSize:11.5,fontStyle:"italic",fontWeight:600,lineHeight:1.6,color:u==="light"?"#0284c7":"#38bdf8",textAlign:"center"},children:"“Vigilance, integrity, and service define who we are. Garuda exists not as a brand, but as a shield—silent, disciplined, and unwavering in its duty.”"})]})]})]})}),N==="terms"&&C.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"terms-modal-title",className:"u-modal-backdrop",onClick:()=>k(null),children:C.jsxs("div",{className:"u-dialog-card",style:{width:"92%",maxWidth:480,textAlign:"left"},onClick:z=>z.stopPropagation(),children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[C.jsx(ag,{size:18,color:"#60A5FA","aria-hidden":"true"}),C.jsxs("h2",{id:"terms-modal-title",style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:["Terms of Service — ",y]})]}),C.jsx("button",{onClick:()=>k(null),"aria-label":"Close Terms of Service",style:{width:28,height:28,borderRadius:7,border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:C.jsx(sf,{size:15,"aria-hidden":"true"})})]}),C.jsxs("div",{style:{maxHeight:280,overflowY:"auto",paddingRight:4,fontSize:12.5,lineHeight:1.6,color:"var(--uv-text-body)",display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:[C.jsxs("p",{children:[C.jsx("strong",{children:"1. Service Architecture:"})," ",A?`Garuda Infinity (${y}) routes traffic through 82 official global gateways using Android VpnService and dynamic per-connection IP rotation.`:`Garuda Infinity (${y}) routes browser traffic through 82 official global gateways with dynamic per-connection IP rotation.`]}),C.jsxs("p",{children:[C.jsx("strong",{children:"2. Acceptable Use:"})," Use Garuda Infinity solely for lawful privacy, security, and network protection purposes."]}),C.jsxs("p",{children:[C.jsx("strong",{children:"3. Attribution:"})," Engineered by"," ",C.jsx("span",{className:"quicksilver-gold-glow",children:"QUICKSILVER"})," •"," ",C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#38BDF8",fontWeight:700,textDecoration:"none"},children:"Garuda Cyber Shield"}),"."]})]}),C.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:C.jsx("button",{onClick:()=>k(null),className:"u-btn u-btn-primary",children:"Close"})})]})}),N==="privacy"&&C.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",className:"u-modal-backdrop",onClick:()=>k(null),children:C.jsxs("div",{className:"u-dialog-card",style:{width:"92%",maxWidth:480,textAlign:"left"},onClick:z=>z.stopPropagation(),children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[C.jsx(og,{size:18,color:"#34D399","aria-hidden":"true"}),C.jsxs("h2",{id:"privacy-modal-title",style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:["Privacy Policy — ",y]})]}),C.jsx("button",{onClick:()=>k(null),"aria-label":"Close Privacy Policy",style:{width:28,height:28,borderRadius:7,border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:C.jsx(sf,{size:15,"aria-hidden":"true"})})]}),C.jsxs("div",{style:{maxHeight:280,overflowY:"auto",paddingRight:4,fontSize:12.5,lineHeight:1.6,color:"var(--uv-text-body)",display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:[C.jsxs("p",{children:[C.jsx("strong",{children:"1. Strict Zero-Logs Policy:"})," Garuda Infinity does not record, log, or store your browsing history, traffic destination, or DNS queries."]}),C.jsxs("p",{children:[C.jsx("strong",{children:"2. Ephemeral Session State:"})," Active tunnel credentials and routing state are held strictly in memory and cleared when disconnected."]}),C.jsxs("p",{children:[C.jsx("strong",{children:"3. Minimal Permissions:"})," Only standard network and VPN tunnel permissions are used."]})]}),C.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:C.jsx("button",{onClick:()=>k(null),className:"u-btn u-btn-primary",children:"Close"})})]})})]})}function lT(s){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><circle cx="18" cy="18" r="18" fill="url(#g)"/><text x="18" y="22" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="800" font-size="12">${String(s).toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,2)||"GL"}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function cT(s){if(!s||typeof s.lat!="number"||typeof s.lng!="number")return"23.81° N, 90.41° E";const e=s.lat>=0?"N":"S",t=s.lng>=0?"E":"W";return`${Math.abs(s.lat).toFixed(2)}° ${e}, ${Math.abs(s.lng).toFixed(2)}° ${t}`}function uT(s){const e=String(s.type||"").toUpperCase(),t=String(s.msg||""),r=s.time||"00:00:00";return e==="CONNECT"||t.toLowerCase().includes("connected")||t.toLowerCase().includes("tunnel active")?{id:s.id,time:r,label:"CONNECTED",group:"TUNNEL",borderColor:"#10b981",bgDark:"rgba(16, 185, 129, 0.08)",bgLight:"rgba(16, 185, 129, 0.07)",badgeBgDark:"rgba(16, 185, 129, 0.18)",badgeBgLight:"rgba(16, 185, 129, 0.14)",badgeColorDark:"#34d399",badgeColorLight:"#047857",message:t}:e==="DISCONNECT"||t.toLowerCase().includes("disconnected")||t.toLowerCase().includes("tearing down")?{id:s.id,time:r,label:"DISCONNECTED",group:"TUNNEL",borderColor:"#f43f5e",bgDark:"rgba(244, 63, 94, 0.08)",bgLight:"rgba(244, 63, 94, 0.06)",badgeBgDark:"rgba(244, 63, 94, 0.18)",badgeBgLight:"rgba(244, 63, 94, 0.14)",badgeColorDark:"#fb7185",badgeColorLight:"#be123c",message:t}:e==="SWITCH"||t.toLowerCase().includes("handshaking")||t.toLowerCase().includes("rotating")?{id:s.id,time:r,label:"HANDSHAKE",group:"TUNNEL",borderColor:"#f59e0b",bgDark:"rgba(245, 158, 11, 0.08)",bgLight:"rgba(245, 158, 11, 0.07)",badgeBgDark:"rgba(245, 158, 11, 0.18)",badgeBgLight:"rgba(245, 158, 11, 0.15)",badgeColorDark:"#fbbf24",badgeColorLight:"#b45309",message:t}:t.toLowerCase().includes("verified")||t.toLowerCase().includes("origin ip")?{id:s.id,time:r,label:t.toLowerCase().includes("origin")?"ISP PROBE":"IP VERIFY",group:"VERIFY",borderColor:"#06b6d4",bgDark:"rgba(6, 182, 212, 0.08)",bgLight:"rgba(6, 182, 212, 0.07)",badgeBgDark:"rgba(6, 182, 212, 0.18)",badgeBgLight:"rgba(6, 182, 212, 0.14)",badgeColorDark:"#22d3ee",badgeColorLight:"#0e7490",message:t}:{id:s.id,time:r,label:"ENGINE",group:"SYSTEM",borderColor:"#3b82f6",bgDark:"rgba(59, 130, 246, 0.08)",bgLight:"rgba(37, 99, 235, 0.06)",badgeBgDark:"rgba(59, 130, 246, 0.18)",badgeBgLight:"rgba(37, 99, 235, 0.14)",badgeColorDark:"#60a5fa",badgeColorLight:"#1d4ed8",message:t}}function dT(s,e){return String(s||"").split(/\b(\d{1,3}(?:\.\d{1,3}){3})\b/g).map((r,a)=>/^\d{1,3}(?:\.\d{1,3}){3}$/.test(r)?C.jsx("span",{style:{display:"inline-block",padding:"0 6px",borderRadius:4,backgroundColor:e?"rgba(37, 99, 235, 0.12)":"rgba(56, 189, 248, 0.16)",border:e?"1px solid rgba(37, 99, 235, 0.28)":"1px solid rgba(56, 189, 248, 0.35)",color:e?"#1d4ed8":"#38bdf8",fontWeight:700,fontVariantNumeric:"tabular-nums",fontSize:11},children:r},a):C.jsx(O0.Fragment,{children:r},a))}function fT({vpnStatus:s,selectedLocationObj:e,realIpInfo:t,onVerifyIp:r,ipVerificationResult:a,isVerifyingIp:l,activeCountryTimeInfo:u,activityLogs:d=[],onClearLogs:h=()=>{},theme:p="dark"}){const[v,_]=Ye.useState("telemetry"),[g,x]=Ye.useState("ALL"),M=s.state==="Connected",A=p==="light",S=M?s.statusCountryIso2||(e==null?void 0:e.iso)||"US":(t==null?void 0:t.country)||"BD",y=M?s.statusIp||(e==null?void 0:e.gatewayIp):(t==null?void 0:t.ip)||"160.250.69.162",N=M?s.statusCity||(e==null?void 0:e.city):(t==null?void 0:t.city)||"Dhaka",k=M?s.statusCountryName||(e==null?void 0:e.name):(t==null?void 0:t.countryName)||"Bangladesh",b=(a==null?void 0:a.coordinates)||(M?e==null?void 0:e.coordinates:t==null?void 0:t.coordinates)||{lat:23.8103,lng:90.4125},I=Ye.useMemo(()=>{const P=d.map(uT);return g==="ALL"?P:P.filter(U=>U.group===g)},[d,g]);return C.jsx("section",{"aria-label":"IP & Log Inspector",className:"uv-scrollbar",style:{flex:1,height:"100%",overflowY:"auto",padding:"18px 14px 36px 14px",display:"flex",flexDirection:"column",alignItems:"center"},children:C.jsxs("div",{style:{width:"100%",maxWidth:540,display:"flex",flexDirection:"column",gap:12},children:[C.jsxs("div",{className:"u-glass-card",style:{display:"flex",borderRadius:12,padding:4,gap:5},children:[C.jsxs("button",{onClick:()=>_("telemetry"),style:{flex:1,height:36,borderRadius:9,border:"none",background:v==="telemetry"?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",color:v==="telemetry"?"#FFFFFF":"var(--uv-text-secondary)",fontSize:12,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,whiteSpace:"nowrap",boxShadow:v==="telemetry"?"0 3px 10px rgba(37, 99, 235, 0.28)":"none"},children:[C.jsx(cg,{size:14,style:{flexShrink:0}}),C.jsx("span",{children:"Live IP & ASN"})]}),C.jsxs("button",{onClick:()=>_("logs"),style:{flex:1,height:36,borderRadius:9,border:"none",background:v==="logs"?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",color:v==="logs"?"#FFFFFF":"var(--uv-text-secondary)",fontSize:12,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,whiteSpace:"nowrap",boxShadow:v==="logs"?"0 3px 10px rgba(37, 99, 235, 0.28)":"none"},children:[C.jsx(ug,{size:14,style:{flexShrink:0}}),C.jsx("span",{children:"Activity Logs"})]})]}),v==="telemetry"?C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,gap:8},children:[C.jsx("span",{style:{fontSize:10.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--uv-text-secondary)",whiteSpace:"nowrap"},children:"Active Public IP"}),C.jsx("span",{style:{fontSize:9.5,fontWeight:800,padding:"3px 9px",borderRadius:999,backgroundColor:M?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.15)",color:M?"#34D399":"#FB7185",border:M?"1px solid rgba(16, 185, 129, 0.42)":"1px solid rgba(244, 63, 94, 0.35)",whiteSpace:"nowrap",flexShrink:0},children:M?"TUNNEL PROTECTED":"DIRECT ISP"})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",gap:10,padding:"11px 12px",borderRadius:11,background:A?"linear-gradient(135deg, rgba(224, 242, 254, 0.85), rgba(240, 249, 255, 0.98))":"linear-gradient(135deg, rgba(30, 58, 138, 0.28), rgba(15, 23, 42, 0.72))",border:A?"1px solid rgba(2, 132, 199, 0.28)":"1px solid rgba(56, 189, 248, 0.26)",marginBottom:11},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0,flex:1},children:[C.jsx("img",{src:Mc(S),alt:S,style:{width:34,height:34,borderRadius:"50%",objectFit:"cover",flexShrink:0,border:"1px solid var(--uv-border-strong)"},onError:P=>{P.currentTarget.onerror=null,P.currentTarget.src=lT(S)}}),C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsx("div",{style:{fontSize:16.5,fontWeight:800,fontVariantNumeric:"tabular-nums",color:"var(--uv-text-heading)",lineHeight:1.15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:y}),C.jsxs("div",{style:{fontSize:11,color:"var(--uv-text-secondary)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[N,", ",k," (",S,")"]})]})]}),C.jsxs("div",{style:{textAlign:"right",paddingLeft:10,borderLeft:"1px solid var(--uv-divider)",flexShrink:0},children:[C.jsx("div",{style:{fontSize:8.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",color:A?"#0284c7":"#38bdf8",whiteSpace:"nowrap"},children:"Location Time"}),C.jsx("div",{style:{fontSize:12,fontWeight:800,color:"var(--uv-text-heading)",fontVariantNumeric:"tabular-nums",marginTop:1,whiteSpace:"nowrap"},children:(u==null?void 0:u.time12)||"—"}),C.jsx("div",{style:{fontSize:9.5,fontWeight:600,color:"var(--uv-text-secondary)",marginTop:1,whiteSpace:"nowrap"},children:u?`${u.timeZone} (${u.offset})`:"—"})]})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8},children:[C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"ISP / Carrier"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:M?s.statusIsp||(e==null?void 0:e.isp):(t==null?void 0:t.isp)||"Direct Client ISP"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"ASN Network"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:M?s.statusAsn||(e==null?void 0:e.asn):(t==null?void 0:t.asn)||"AS64072 Local ISP"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"DNS Resolvers"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:M?"1.1.1.1, 1.0.0.1":"8.8.8.8 (ISP)"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Origin Real IP"}),C.jsxs("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[(t==null?void 0:t.ip)||"160.250.69.162"," (",(t==null?void 0:t.country)||"BD",")"]})]})]})]}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:11,gap:10,flexWrap:"nowrap"},children:[C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Live Tunnel & Route Verification"}),C.jsx("div",{style:{fontSize:10.5,color:"var(--uv-text-secondary)",marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Exit-node & leak protection audit"})]}),C.jsxs("button",{onClick:r,disabled:l,className:"u-btn u-btn-primary",style:{height:32,padding:"0 12px",fontSize:11.5,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:[C.jsx(Ny,{size:13,className:l?"uv-spin-fast":"",style:{flexShrink:0}}),C.jsx("span",{children:l?"Verifying...":"Verify IP Now"})]})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8,marginBottom:10},children:[C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Tunnel Route Status"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:M?"#10B981":"#F43F5E",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:M?`Protected (${S})`:"Direct ISP Route"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Transport Cipher"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:M?"TLS 1.3 • AES-256-GCM":"Unencrypted Direct"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"DNS & WebRTC Shield"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:M?"var(--uv-primary)":"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:M?"Zero-Leak Shielded":"Standard ISP DNS"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Exit Geo Coordinates"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:cT(b)})]})]}),C.jsxs("div",{style:{padding:"10px 12px",borderRadius:10,backgroundColor:a||M?"rgba(16, 185, 129, 0.14)":A?"#f1f5f9":"rgba(15, 23, 42, 0.78)",border:a||M?"1px solid rgba(16, 185, 129, 0.42)":"1px solid var(--uv-border-strong)",color:a||M?A?"#064e3b":"#ecfdf5":"var(--uv-text-body)",display:"flex",alignItems:"center",gap:10},children:[a||M?C.jsx(cg,{size:18,color:A?"#059669":"#34d399",style:{flexShrink:0}}):C.jsx(Uy,{size:17,color:A?"#0284c7":"#38bdf8",style:{flexShrink:0}}),a!=null&&a.localTime?C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsxs("div",{style:{fontSize:11.5,fontWeight:800,lineHeight:1.3,fontVariantNumeric:"tabular-nums"},children:["Verified Active IP: ",a.ip||y]}),C.jsxs("div",{style:{fontSize:10.5,fontWeight:600,opacity:.9,marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[a.city||N,","," ",a.countryName||k," •"," ",a.localTime]})]}):M?C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsxs("div",{style:{fontSize:11.5,fontWeight:800,lineHeight:1.3,fontVariantNumeric:"tabular-nums"},children:["Encrypted Tunnel Active: ",y]}),C.jsxs("div",{style:{fontSize:10.5,fontWeight:600,opacity:.9,marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[N,", ",k," • ",(u==null?void 0:u.verifiedLabel)||""]})]}):C.jsx("span",{style:{fontSize:11,fontWeight:600,lineHeight:1.35},children:"Tap “Verify IP Now” to audit live exit-node routing and leak protection."})]})]})]}):C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,gap:8,flexWrap:"nowrap"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,minWidth:0},children:[C.jsx(ug,{size:15,color:"#60A5FA",style:{flexShrink:0}}),C.jsx("span",{style:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",color:"var(--uv-text-secondary)",whiteSpace:"nowrap"},children:"Engine Activity Logs"}),C.jsxs("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(59, 130, 246, 0.16)",border:"1px solid rgba(59, 130, 246, 0.35)",color:"#60A5FA",whiteSpace:"nowrap",flexShrink:0},children:[I.length," ",I.length===1?"Event":"Events"]})]}),C.jsxs("button",{onClick:h,className:"u-btn u-btn-secondary",style:{height:28,padding:"0 10px",fontSize:11,whiteSpace:"nowrap",flexShrink:0},children:[C.jsx(ky,{size:12,style:{flexShrink:0}}),C.jsx("span",{children:"Clear"})]})]}),C.jsx("div",{style:{display:"flex",gap:6,marginBottom:12,overflowX:"auto",paddingBottom:2},children:[{id:"ALL",label:"All Events"},{id:"TUNNEL",label:"Tunnel"},{id:"VERIFY",label:"IP Verify"},{id:"SYSTEM",label:"System"}].map(P=>{const U=g===P.id;return C.jsx("button",{onClick:()=>x(P.id),style:{height:26,padding:"0 10px",borderRadius:999,border:"1px solid",borderColor:U?"var(--uv-primary)":"var(--uv-border)",backgroundColor:U?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:U?"#60A5FA":"var(--uv-text-secondary)",fontSize:11,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0},children:P.label},P.id)})}),C.jsx("div",{className:"uv-scrollbar",style:{display:"flex",flexDirection:"column",gap:7,maxHeight:420,overflowY:"auto",paddingRight:2},children:I.length===0?C.jsx("div",{style:{textAlign:"center",padding:"32px 12px",color:"var(--uv-text-secondary)",fontSize:12},children:"No activity logs in this category."}):I.map(P=>C.jsxs("div",{style:{backgroundColor:A?P.bgLight:P.bgDark,border:"1px solid var(--uv-border)",borderLeft:`3.5px solid ${P.borderColor}`,borderRadius:9,padding:"8px 11px",display:"flex",flexDirection:"column",gap:4},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[C.jsx("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:"0.04em",textTransform:"uppercase",padding:"2px 7px",borderRadius:5,backgroundColor:A?P.badgeBgLight:P.badgeBgDark,color:A?P.badgeColorLight:P.badgeColorDark,whiteSpace:"nowrap"},children:P.label}),C.jsx("span",{style:{fontSize:10.5,fontWeight:700,color:"var(--uv-text-secondary)",fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap"},children:P.time})]}),C.jsx("div",{style:{fontSize:11.5,fontWeight:600,color:"var(--uv-text-heading)",lineHeight:1.4,wordBreak:"break-word"},children:dT(P.message,A)})]},P.id))})]})]})})}const hT={Auto:"Garuda LinkX (Auto)",WireGuard:"Garuda LinkX (WireGuard)",OpenVPN_UDP:"OpenVPN DCO (UDP)",OpenVPN_TCP:"OpenVPN DCO (TCP)"};function pT(s){const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=s%60;return[e,t,r].map(a=>String(a).padStart(2,"0")).join(":")}function rf(s,e){const t=l=>String(l||"1.0.0").replace(/^[vV]/,"").split(".").map(u=>parseInt(u,10)||0),r=t(s),a=t(e);for(let l=0;l<3;l++){if((r[l]||0)>(a[l]||0))return!0;if((r[l]||0)<(a[l]||0))return!1}return!1}function As(){var s,e;return typeof window<"u"&&((s=window.location)==null?void 0:s.protocol)==="chrome-extension:"&&typeof chrome<"u"&&!!((e=chrome.runtime)!=null&&e.sendMessage)}function mT(){return typeof window>"u"?!1:As()?!0:!!window.__GARUDA_EXTENSION_BRIDGE_ACTIVE||document.documentElement.getAttribute("data-garuda-extension")==="active"}function gT(s,e){if(!e)return{ok:!1};const t=e.state||{},r=e.status||{},a=(t.vpnState||r.state)==="Connected";return{ok:!!e.ok,state:{status:t.vpnState||r.state||"Disconnected",activeIso2:r.statusCountryIso2||t.geoCountryIso2||t.iso||t.selectedIso||"US",exitIpInfo:{ip:r.statusIp||t.statusIp||"",country:r.statusCountryIso2||t.geoCountryIso2||t.iso||"",countryName:r.statusCountryName||t.geoCountryName||t.countryName||"",city:r.statusCity||t.city||"",isp:r.statusIsp||t.isp||"",asn:r.statusAsn||t.asn||"",timeZone:r.timeZone||t.timeZone||""},primaryProxy:Array.isArray(t.activeProxies)&&t.activeProxies.length>0?t.activeProxies[0]:a&&t.statusIp?{host:t.statusIp,port:443}:null},verified:s==="VERIFY_IP"?{ip:e.ip,country:e.country,countryName:e.countryName,city:e.city,isp:e.isp,asn:e.asn,timeZone:e.timeZone,localTime:e.localTime,coordinates:e.coordinates}:void 0}}function es(s,e=8e3){if(As()){const r={GET_STATE:"GET_STATUS",CONNECT:"CONNECT_VPN",DISCONNECT:"DISCONNECT_VPN",VERIFY_IP:"VERIFY_IP",UPDATE_SETTINGS:"UPDATE_SETTINGS"}[s.type]||s.type,a=s.iso2?W0(s.iso2):null,l=s.type==="CONNECT"?{iso:s.iso2,countryName:(a==null?void 0:a.name)||s.iso2,city:(a==null?void 0:a.city)||"Gateway",isp:(a==null?void 0:a.isp)||"Garuda Encrypted Relay",asn:(a==null?void 0:a.asn)||"AS209854 Garuda Network"}:s;return new Promise(u=>{const d=setTimeout(()=>u({ok:!1,timeout:!0}),e);try{chrome.runtime.sendMessage({action:r,payload:l},h=>{clearTimeout(d),chrome.runtime.lastError||!h?u({ok:!1}):u(gT(s.type,h))})}catch{clearTimeout(d),u({ok:!1})}})}return new Promise(t=>{const r=`garuda_req_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;let a=!1;const l=setTimeout(()=>{a||(a=!0,window.removeEventListener("message",u),t(null))},e);function u(d){if(d.source!==window)return;const h=d.data;h&&h.source==="GARUDA_INFINITY_EXTENSION"&&h.requestId===r&&(a=!0,clearTimeout(l),window.removeEventListener("message",u),t(h.response))}window.addEventListener("message",u),window.postMessage({source:"GARUDA_INFINITY_WEB",requestId:r,payload:s},window.location.origin)})}function vT(){const[s,e]=Ye.useState(()=>{var pe,oe;try{if(typeof window<"u"&&((oe=(pe=window.location)==null?void 0:pe.search)!=null&&oe.includes("autoUpdate=1")))return"settings"}catch{}return"vpn"}),[t,r]=Ye.useState(()=>{try{const pe=localStorage.getItem("garuda_infinity_theme");if(pe==="light"||pe==="dark")return pe}catch{}return"dark"}),[a,l]=Ye.useState("globe");Ye.useEffect(()=>{try{localStorage.setItem("garuda_infinity_theme",t),document.documentElement.setAttribute("data-theme",t)}catch{}},[t]);const u=Ye.useCallback(()=>{r(pe=>{const oe=pe==="dark"?"light":"dark";return es({type:"UPDATE_SETTINGS",theme:oe},2e3),oe})},[]),d=Ye.useCallback(()=>{l(pe=>pe==="globe"?"shield":pe==="shield"?"orbit":"globe")},[]),[h]=Ye.useState(()=>fg),[p]=Ye.useState(!1),[v,_]=Ye.useState("US"),[g,x]=Ye.useState("Auto"),[M,A]=Ye.useState(!1),[S,y]=Ye.useState(!1),[N,k]=Ye.useState(!1),[b,I]=Ye.useState(()=>{try{const pe=localStorage.getItem("garuda_infinity_dynamic_ip");if(pe==="false")return!1;if(pe==="true")return!0}catch{}return!0}),[P,U]=Ye.useState(()=>mT()),[w,L]=Ye.useState(()=>yn()),[O,G]=Ye.useState(null),[W,K]=Ye.useState(!1),[z,Z]=Ye.useState(!1),[ge,J]=Ye.useState(null),[ee,H]=Ye.useState(0),[j,D]=Ye.useState({checked:!1,updateAvailable:!1,forceUpdateRequired:!1,forceUpdateTitle:"Mandatory Update Required",forceUpdateMessage:"A critical update with new features and security enhancements is required to continue using Garuda Infinity. Please update to the latest version now.",latestAppVersion:Mr,latestExtensionVersion:Eo}),[le,Pe]=Ye.useState(!1),[Ze,$e]=Ye.useState(!1),we=Ye.useRef(null),re=Ye.useCallback(()=>{we.current&&clearTimeout(we.current),$e(!0),we.current=setTimeout(()=>{$e(!1),we.current=null},3e3)},[]),[ne,Fe]=Ye.useState({ip:"160.250.69.162",country:"BD",countryName:"Bangladesh",city:"Dhaka",isp:"Direct Client ISP",asn:"AS64072 Local Broadband",timeZone:"Asia/Dhaka",coordinates:{lat:23.8103,lng:90.4125}}),[Me,ke]=Ye.useState({state:"Disconnected",error:!1,statusReady:!0,statusIp:"160.250.69.162",statusCountryIso2:"BD",statusCountryName:"Bangladesh",statusCity:"Dhaka",statusIsp:"Direct Client ISP",statusAsn:"AS64072 Local Broadband",timeZone:"Asia/Dhaka",uiLockedLocation:"",effectiveProtocol:"WireGuard",effectiveProtocolLabel:"Garuda LinkX (Auto)",tunnelMode:"Disconnected",realTunnelActive:!1}),[_t,Dt]=Ye.useState(0),[yt,Mt]=Ye.useState(0),[Ut,mt]=Ye.useState(0),[Gt,$t]=Ye.useState(()=>[{id:1,time:Di("BD","Asia/Dhaka").time24,type:"info",msg:`Garuda Infinity Engine (${wo}) ready.`}]),Vt=Ye.useRef(null),st=Ye.useCallback((pe,oe,ye="",ae="")=>{const te=Di(ye||"BD",ae);$t(fe=>[{id:Date.now()+Math.random(),time:te.time24,type:pe,msg:oe},...fe.slice(0,49)])},[]),Nt=Ye.useCallback(async(pe=!0)=>{var oe,ye,ae,ze,te,fe,Ae,Ce;Pe(!0);try{const be=await ax();if(be){const V=yn(),Ne=String(be.appVersion||be.version||Mr).replace(/^[vV]/,"").trim(),xe=String(be.extensionVersion||be.version||Eo).replace(/^[vV]/,"").trim(),Re=Number(be.versionCode)||pg,De=String(be.minSupportedAppVersion||be.minSupportedVersion||((oe=be.accessControl)==null?void 0:oe.minAllowedAppVersion)||((ye=be.accessControl)==null?void 0:ye.minAllowedVersion)||"").replace(/^[vV]/,"").trim(),Se=String(be.minSupportedExtensionVersion||be.minSupportedVersion||((ae=be.accessControl)==null?void 0:ae.minAllowedExtensionVersion)||((ze=be.accessControl)==null?void 0:ze.minAllowedVersion)||"").replace(/^[vV]/,"").trim(),Ge=V?rf(Ne,Mr)||Re>Number(pg):rf(xe,Eo),Ve=V?!!(be.forceUpdate||be.forceUpdateApp||(te=be.accessControl)!=null&&te.enforceMinVersion):!!(be.forceUpdate||be.forceUpdateExtension||(fe=be.accessControl)!=null&&fe.enforceMinVersion),vt=V?De||Ne:Se||xe,Bt=!!(Ve&&vt&&rf(vt,V?Mr:Eo));D({checked:!0,updateAvailable:Ge||Bt,forceUpdateRequired:Bt,forceUpdateTitle:be.forceUpdateTitle||((Ae=be.accessControl)==null?void 0:Ae.restrictionTitle)||"Mandatory Update Required",forceUpdateMessage:be.forceUpdateMessage||((Ce=be.accessControl)==null?void 0:Ce.restrictionMessage)||"A critical update with new features and security enhancements is required to continue using Garuda Infinity. Please update to the latest version now.",latestAppVersion:V?Ne:xe,latestExtensionVersion:xe,apkUrl:be.apkUrl||kl,extensionZipUrl:be.extensionZipUrl||bo}),Bt?(yn()&&yg().catch(()=>{}),(P||As())&&es({type:"DISCONNECT"},3e3).catch(()=>{}),ke(pn=>({...pn,state:"Disconnected",uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1}))):Ge&&pe&&re()}}catch{}finally{Pe(!1)}},[P,re]),$=Ye.useCallback(async()=>{if(j.updateAvailable){if(yn()){const pe=j.latestAppVersion||Mr;ox(j.apkUrl||kl,pe),st("info",`Downloading Garuda Infinity V${pe} APK to Downloads...`);return}if(As()){try{const pe=await Z0({allowPicker:!0,onProgress:oe=>st("info",oe)});if(pe!=null&&pe.ok)return}catch{}cf(j.extensionZipUrl||bo),st("info","Downloading Garuda-Infinity-Extension.zip update package...");return}cf(j.extensionZipUrl||bo);return}await Nt(!0)},[j.updateAvailable,j.latestAppVersion,j.apkUrl,j.extensionZipUrl,st,Nt]);Ye.useEffect(()=>{Nt(!0);const oe=setInterval(()=>{Nt(!0)},36e5),ye=()=>{typeof document<"u"&&document.visibilityState==="visible"&&Nt(!0)};return typeof window<"u"&&(window.__onGarudaAppEntered=()=>{Nt(!0)}),typeof document<"u"&&document.addEventListener("visibilitychange",ye),()=>{clearInterval(oe),typeof document<"u"&&document.removeEventListener("visibilitychange",ye),typeof window<"u"&&window.__onGarudaAppEntered&&delete window.__onGarudaAppEntered,we.current&&clearTimeout(we.current)}},[Nt]),Ye.useEffect(()=>{if(!(typeof window>"u"))return window.__onGarudaNativeVpnDisconnected=()=>{G(null),ke(pe=>({...pe,state:"Disconnected",statusIp:ne.ip,statusCountryIso2:ne.country,statusCountryName:ne.countryName,statusCity:ne.city,statusIsp:ne.isp,statusAsn:ne.asn,timeZone:ne.timeZone,uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1})),J(null),st("disconnect","Disconnected from Android notification bar • Restored direct ISP",ne.country,ne.timeZone)},()=>{delete window.__onGarudaNativeVpnDisconnected}},[ne,st]),Ye.useEffect(()=>{let pe=!1;async function oe(){if(yn()&&!pe){L(!0);const te=await lf(!1);if(te!=null&&te.ip&&!pe){const fe={ip:te.ip,country:te.country||"BD",countryName:te.countryName||"Bangladesh",city:te.city||"Dhaka",isp:te.isp||"Direct Mobile Carrier",asn:te.asn||"AS24389 Mobile ISP",timeZone:te.timeZone||Cn(te.country||"BD"),coordinates:{lat:Number(te.latitude)||23.8103,lng:Number(te.longitude)||90.4125}};Fe(fe),ke(Ae=>Ae.state==="Disconnected"?{...Ae,statusIp:fe.ip,statusCountryIso2:fe.country,statusCountryName:fe.countryName,statusCity:fe.city,statusIsp:fe.isp,statusAsn:fe.asn,timeZone:fe.timeZone}:Ae),st("info",`Detected real ISP IP ${fe.ip} (${fe.country})`,fe.country,fe.timeZone);return}}const ae=await es({type:"GET_STATE"},1500);if(ae!=null&&ae.ok&&!pe){U(!0);const te=ae.state;if((te==null?void 0:te.status)==="Connected"&&te.activeIso2){const fe=h.find(Ae=>Ae.iso.toLowerCase()===te.activeIso2.toLowerCase())||h[0];_(fe.iso),ke(Ae=>{var Ce,be,V,Ne,xe,Re;return{...Ae,state:"Connected",statusIp:((Ce=te.exitIpInfo)==null?void 0:Ce.ip)||fe.gatewayIp,statusCountryIso2:fe.iso,statusCountryName:((be=te.exitIpInfo)==null?void 0:be.countryName)||fe.name,statusCity:((V=te.exitIpInfo)==null?void 0:V.city)||fe.city,statusIsp:((Ne=te.exitIpInfo)==null?void 0:Ne.isp)||fe.isp,statusAsn:((xe=te.exitIpInfo)==null?void 0:xe.asn)||fe.asn,timeZone:((Re=te.exitIpInfo)==null?void 0:Re.timeZone)||Cn(fe.iso),uiLockedLocation:fe.iso,tunnelMode:"Garuda Standalone Extension Tunnel",realTunnelActive:!0}});return}}const ze=[{url:"https://api.2ip.io/",parse:te=>{var fe,Ae;return te&&te.ip?{ip:te.ip,country:te.code||"BD",countryName:te.country||"Bangladesh",city:te.city||"Dhaka",isp:((fe=te.asn)==null?void 0:fe.name)||"Local Broadband ISP",asn:(Ae=te.asn)!=null&&Ae.id?`AS${te.asn.id} ${te.asn.name||""}`.trim():"AS64072",timeZone:Cn(te.code||"BD",te.time_zone||""),coordinates:{lat:Number(te.lat)||23.8103,lng:Number(te.lon)||90.4125}}:null}},{url:"https://ipwho.is/",parse:te=>{var fe,Ae,Ce,be;return te&&te.success!==!1&&te.ip?{ip:te.ip,country:te.country_code||"BD",countryName:te.country||"Bangladesh",city:te.city||"Dhaka",isp:((fe=te.connection)==null?void 0:fe.isp)||((Ae=te.connection)==null?void 0:Ae.org)||"Local Broadband ISP",asn:(Ce=te.connection)!=null&&Ce.asn?`AS${te.connection.asn}`:"AS64072",timeZone:Cn(te.country_code||"BD",((be=te.timezone)==null?void 0:be.id)||""),coordinates:{lat:Number(te.latitude)||23.8103,lng:Number(te.longitude)||90.4125}}:null}}];for(const te of ze){if(pe)break;try{const fe=await fetch(te.url,{cache:"no-store"});if(!fe.ok)continue;const Ae=await fe.json(),Ce=te.parse(Ae);if(Ce&&!pe){Fe(Ce),ke(be=>be.state==="Disconnected"?{...be,statusIp:Ce.ip,statusCountryIso2:Ce.country,statusCountryName:Ce.countryName,statusCity:Ce.city,statusIsp:Ce.isp,statusAsn:Ce.asn,timeZone:Ce.timeZone}:be),st("info",`Origin IP detected: ${Ce.ip} (${Ce.city}, ${Ce.country})`,Ce.country,Ce.timeZone);break}}catch{}}}return oe(),()=>{pe=!0}},[h,st]),Ye.useEffect(()=>{const pe=setInterval(()=>{H(oe=>(oe+1)%86400),Me.state==="Connected"&&(Dt(oe=>oe+1),Mt(oe=>oe+Math.floor(18e3+Math.random()*52e3)),mt(oe=>oe+Math.floor(6200+Math.random()*19e3)))},1e3);return()=>clearInterval(pe)},[Me.state]);const kt=Ye.useCallback(async(pe,oe=!1)=>{var Ae,Ce,be;if(j.forceUpdateRequired)return;const ye=pe||v,ae=h.find(V=>V.iso.toLowerCase()===String(ye).toLowerCase())||h[0];_(ae.iso),K(!0),Vt.current&&clearTimeout(Vt.current),Vt.current=setTimeout(()=>{K(!1)},900),ke(V=>({...V,state:"Connecting",uiLockedLocation:ae.iso})),J(null);const ze=g==="Auto"?ae.streamingOptimized||ae.hasStreaming?"WireGuard":"OpenVPN_UDP":g,te=hT[g]||"Garuda LinkX (Auto)",fe=oe||b!==!1;st("switch",`Handshaking with ${ae.name} (${ae.city}) gateway...`,ae.iso);try{if(yn()){const Re=await ix(ae,fe);if(Re!=null&&Re.ok){const De=Re.exitIpInfo||{},Se=De.ip||((Ae=Re.primaryProxy)==null?void 0:Ae.host)||ae.gatewayIp,Ge=!De.country||String(De.country).toUpperCase()===ae.iso.toUpperCase(),Ve=Ge&&De.countryName||ae.name,vt=Ge&&De.city||ae.city,pt=Ge&&De.timeZone||Cn(ae.iso),Bt=Di(ae.iso,pt);G({iso2:ae.iso,primaryProxy:Re.primaryProxy,proxyUsername:Re.proxyAuthUsername}),Mt(40960),mt(14336),Dt(0),ke({state:"Connected",error:!1,statusReady:!0,statusIp:Se,statusCountryIso2:ae.iso,statusCountryName:Ve,statusCity:vt,statusIsp:De.isp||ae.isp,statusAsn:De.asn||ae.asn,timeZone:pt,uiLockedLocation:ae.iso,effectiveProtocol:ze,effectiveProtocolLabel:te,tunnelMode:"Android Native VpnService",realTunnelActive:!0}),J({isVpnActive:!0,ip:Se,country:ae.iso,countryName:Ve,city:vt,isp:De.isp||ae.isp,asn:De.asn||ae.asn,localTime:Bt.verifiedLabel,timeZone:Bt.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Connected to ${Ve} (${vt}) • Exit IP ${Se}`,ae.iso,pt);return}}if(P||As()){const Re=await es({type:"CONNECT",iso2:ae.iso,rotateIp:fe},14e3);if(Re!=null&&Re.ok&&((Ce=Re.state)==null?void 0:Ce.status)==="Connected"){U(!0);const De=Re.state,Se=De.exitIpInfo||{},Ge=Se.ip||((be=De.primaryProxy)==null?void 0:be.host)||ae.gatewayIp,Ve=!Se.country||String(Se.country).toUpperCase()===ae.iso.toUpperCase(),vt=Ve&&Se.countryName||ae.name,pt=Ve&&Se.city||ae.city,Bt=Ve&&Se.timeZone||Cn(ae.iso),pn=Di(ae.iso,Bt);G({iso2:ae.iso,primaryProxy:De.primaryProxy}),Mt(36864),mt(12288),Dt(0),ke({state:"Connected",error:!1,statusReady:!0,statusIp:Ge,statusCountryIso2:ae.iso,statusCountryName:vt,statusCity:pt,statusIsp:Se.isp||ae.isp,statusAsn:Se.asn||ae.asn,timeZone:Bt,uiLockedLocation:ae.iso,effectiveProtocol:ze,effectiveProtocolLabel:te,tunnelMode:"Garuda Standalone Extension Tunnel",realTunnelActive:!0}),J({isVpnActive:!0,ip:Ge,country:ae.iso,countryName:vt,city:pt,isp:Se.isp||ae.isp,asn:Se.asn||ae.asn,localTime:pn.verifiedLabel,timeZone:pn.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Connected via Extension • Exit IP ${Ge} (${ae.iso})`,ae.iso,Bt);return}}try{const Re=await fetch("/api/vpn/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({iso2:ae.iso,rotateIp:fe})});if(Re.ok){const De=await Re.json();if(De.ok){const Se=hg(ae,ze),Ge=De.exitIpInfo||{},Ve=Ge.ip||Se.publicIp,vt=Cn(ae.iso),pt=Di(ae.iso,vt);G({iso2:ae.iso,primaryProxy:De.primaryProxy,proxyUsername:De.proxyAuthUsername}),Mt(32768),mt(11240),Dt(0),ke({state:"Connected",error:!1,statusReady:!0,statusIp:Ve,statusCountryIso2:ae.iso,statusCountryName:Ge.countryName||ae.name,statusCity:Ge.city||ae.city,statusIsp:Ge.isp||ae.isp,statusAsn:Ge.asn||ae.asn,timeZone:vt,uiLockedLocation:ae.iso,effectiveProtocol:ze,effectiveProtocolLabel:te,tunnelMode:"Garuda Cloud Gateway Tunnel",realTunnelActive:!0}),J({isVpnActive:!0,ip:Ve,country:ae.iso,countryName:Ge.countryName||ae.name,city:Ge.city||ae.city,isp:Ge.isp||ae.isp,asn:Ge.asn||ae.asn,localTime:pt.verifiedLabel,timeZone:pt.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Tunnel Active • Exit IP ${Ve} (${ae.city}, ${ae.iso})`,ae.iso,vt);return}}}catch{}const V=hg(ae,ze),Ne=Cn(ae.iso),xe=Di(ae.iso,Ne);Mt(32768),mt(11240),Dt(0),ke({state:"Connected",error:!1,statusReady:!0,statusIp:V.publicIp,statusCountryIso2:ae.iso,statusCountryName:ae.name,statusCity:ae.city,statusIsp:V.isp,statusAsn:V.asn,timeZone:Ne,uiLockedLocation:ae.iso,effectiveProtocol:ze,effectiveProtocolLabel:te,tunnelMode:"Garuda LinkX Tunnel (Active)",realTunnelActive:!0}),J({isVpnActive:!0,ip:V.publicIp,country:ae.iso,countryName:ae.name,city:ae.city,isp:V.isp,asn:V.asn,localTime:xe.verifiedLabel,timeZone:xe.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Tunnel Active • Assigned IP ${V.publicIp} (${ae.city}, ${ae.iso})`,ae.iso,Ne)}finally{Vt.current&&clearTimeout(Vt.current),K(!1)}},[v,h,g,b,P,st]),Pt=Ye.useCallback(async()=>{Vt.current&&clearTimeout(Vt.current),K(!1),ke(pe=>({...pe,state:"Disconnecting"})),st("disconnect","Tearing down encrypted proxy tunnel...",ne.country,ne.timeZone),yn()&&await yg(),(P||As())&&await es({type:"DISCONNECT"},5e3),G(null),Dt(0),Mt(0),mt(0),ke(pe=>({...pe,state:"Disconnected",error:!1,statusReady:!0,statusIp:ne.ip,statusCountryIso2:ne.country,statusCountryName:ne.countryName,statusCity:ne.city,statusIsp:ne.isp,statusAsn:ne.asn,timeZone:ne.timeZone,uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1})),J(null),st("disconnect",`Disconnected • Restored direct ISP (${ne.ip})`,ne.country,ne.timeZone)},[P,ne,st]),F=Ye.useCallback(()=>{Me.state==="Connected"||Me.state==="Connecting"||Me.state==="Reconnecting"?Pt():kt(v)},[Me.state,v,kt,Pt]),E=Ye.useCallback(()=>{if(Me.state!=="Connected")return;const pe=Me.statusCountryIso2||v;kt(pe,!0)},[Me.state,Me.statusCountryIso2,v,kt]),ie=Ye.useCallback(async()=>{Z(!0);try{const pe=Me.state==="Connected",oe=pe?String(Me.statusCountryIso2||v||"US").toUpperCase():"";if(yn()){const te=await lf(pe,oe);if(te!=null&&te.ip){const fe=pe?oe:te.country||Me.statusCountryIso2||"BD",Ae=!pe||!te.country||String(te.country).toUpperCase()===fe.toUpperCase(),Ce=Di(fe,Ae?te.timeZone:Cn(fe)),be=Ae&&te.countryName||Me.statusCountryName,V=Ae&&te.city||Me.statusCity;ke(Ne=>({...Ne,statusIp:te.ip,statusCountryIso2:fe,statusCountryName:be||Ne.statusCountryName,statusCity:V||Ne.statusCity,statusIsp:te.isp||Ne.statusIsp,statusAsn:te.asn||Ne.statusAsn,timeZone:Ce.timeZone})),J({isVpnActive:pe,ip:te.ip,country:fe,countryName:be,city:V,isp:te.isp||Me.statusIsp,asn:te.asn||Me.statusAsn,localTime:Ce.verifiedLabel,timeZone:Ce.timeZone,tunnelProtocol:pe?Me.effectiveProtocolLabel:"Direct ISP",dnsServers:pe?["1.1.1.1","1.0.0.1"]:["8.8.8.8"],coordinates:Ae&&Number.isFinite(te.latitude)&&Number.isFinite(te.longitude)?{lat:te.latitude,lng:te.longitude}:void 0}),st("info",`Verified active IP ${te.ip} (${V||fe}, ${be||fe}) • ${Ce.verifiedLabel}`,fe,Ce.timeZone);return}}if(P||As()){const te=await es({type:"VERIFY_IP"},9e3);if(te!=null&&te.ok&&(te!=null&&te.verified)){const fe=te.verified,Ae=fe.country||Me.statusCountryIso2||"BD",Ce=Di(Ae,fe.timeZone);ke(be=>({...be,statusIp:fe.ip||be.statusIp,statusCountryIso2:Ae,statusCountryName:fe.countryName||be.statusCountryName,statusCity:fe.city||be.statusCity,statusIsp:fe.isp||be.statusIsp,statusAsn:fe.asn||be.statusAsn,timeZone:fe.timeZone||Ce.timeZone})),J({isVpnActive:Me.state==="Connected",ip:fe.ip,country:Ae,countryName:fe.countryName||Me.statusCountryName,city:fe.city||Me.statusCity,isp:fe.isp||Me.statusIsp,asn:fe.asn||Me.statusAsn,localTime:fe.localTime||Ce.verifiedLabel,timeZone:fe.timeZone||Ce.timeZone,tunnelProtocol:Me.state==="Connected"?Me.effectiveProtocolLabel:"Direct ISP",dnsServers:Me.state==="Connected"?["1.1.1.1","1.0.0.1"]:["8.8.8.8"],coordinates:fe.coordinates}),st("info",`Verified active IP ${fe.ip} (${fe.city||Ae}, ${fe.countryName||Ae}) • ${fe.localTime||Ce.verifiedLabel}`,Ae,fe.timeZone||Ce.timeZone);return}}if(Me.state==="Connected"&&(O!=null&&O.primaryProxy)){const te=await fetch("/api/vpn/verify-ip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({proxyHost:O.primaryProxy.host,proxyPort:O.primaryProxy.port,proxyUsername:O.proxyUsername})});if(te.ok){const fe=await te.json();if(fe.ok&&fe.verified){const Ae=fe.verified,Ce=Ae.country||Me.statusCountryIso2||"US",be=Di(Ce,Ae.timeZone);ke(V=>({...V,statusIp:Ae.ip||V.statusIp,statusCity:Ae.city||V.statusCity,statusIsp:Ae.isp||V.statusIsp,statusAsn:Ae.asn||V.statusAsn,timeZone:be.timeZone})),J({isVpnActive:!0,ip:Ae.ip,country:Ce,countryName:Ae.countryName||Me.statusCountryName,city:Ae.city||Me.statusCity,isp:Ae.isp||Me.statusIsp,asn:Ae.asn||Me.statusAsn,localTime:be.verifiedLabel,timeZone:be.timeZone,tunnelProtocol:Me.effectiveProtocolLabel,dnsServers:["1.1.1.1","1.0.0.1"]}),st("info",`Verified active IP ${Ae.ip} (${Ae.city||Ce}, ${Ae.countryName||Ce}) • ${be.verifiedLabel}`,Ce,be.timeZone);return}}}const ye=Me.state==="Connected"?Me.statusCountryIso2||v:ne.country||"BD",ae=Me.state==="Connected"?Me.timeZone:ne.timeZone,ze=Di(ye,ae);J({isVpnActive:Me.state==="Connected",ip:Me.statusIp,country:ye,countryName:Me.statusCountryName,city:Me.statusCity,isp:Me.statusIsp,asn:Me.statusAsn,localTime:ze.verifiedLabel,timeZone:ze.timeZone,tunnelProtocol:Me.state==="Connected"?Me.effectiveProtocolLabel:"Direct ISP",dnsServers:Me.state==="Connected"?["1.1.1.1","1.0.0.1"]:["8.8.8.8"]}),st("info",`Verified active IP ${Me.statusIp} (${Me.statusCity}, ${Me.statusCountryName}) • ${ze.verifiedLabel}`,ye,ze.timeZone)}finally{Z(!1)}},[P,Me,O,v,ne,st]),ue=Me.state==="Connected",_e=Ye.useMemo(()=>h.find(pe=>pe.iso.toLowerCase()===String(v).toLowerCase())||h[0],[h,v]),Le=Ye.useMemo(()=>{const pe=ue?Me.statusCountryIso2||_e.iso:ne.country||"BD",oe=ue?Me.timeZone:ne.timeZone;return Di(pe,oe)},[ee,ue,Me.statusCountryIso2,Me.timeZone,_e.iso,ne.country,ne.timeZone]);return C.jsxs("div",{className:"u-app-fullscreen",children:[j.forceUpdateRequired&&C.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"Mandatory Version Update Required",style:{position:"fixed",inset:0,zIndex:99999,background:"radial-gradient(circle at 50% 25%, rgba(30, 58, 138, 0.96), rgba(3, 7, 18, 0.99))",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center"},children:C.jsxs("div",{style:{width:"100%",maxWidth:420,background:"rgba(15, 23, 42, 0.94)",border:"1px solid rgba(239, 68, 68, 0.48)",borderRadius:24,padding:"30px 24px 26px 24px",boxShadow:"0 24px 60px rgba(0, 0, 0, 0.75)",display:"flex",flexDirection:"column",alignItems:"center"},children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:66,height:66,marginBottom:14,filter:"drop-shadow(0 0 18px rgba(59, 130, 246, 0.65))"}}),C.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:999,background:"rgba(239, 68, 68, 0.18)",border:"1px solid rgba(239, 68, 68, 0.45)",color:"#F87171",fontSize:10.5,fontWeight:800,letterSpacing:"0.7px",textTransform:"uppercase",marginBottom:12},children:"MANDATORY VERSION UPDATE"}),C.jsx("h2",{style:{fontSize:20,fontWeight:800,color:"#F8FAFC",marginBottom:10,lineHeight:1.25},children:j.forceUpdateTitle||"Mandatory Update Required"}),C.jsx("p",{style:{fontSize:13.5,lineHeight:1.65,color:"#CBD5E1",marginBottom:18},children:j.forceUpdateMessage}),C.jsxs("div",{style:{width:"100%",fontSize:12,fontWeight:700,color:"#38BDF8",background:"rgba(56, 189, 248, 0.12)",border:"1px solid rgba(56, 189, 248, 0.32)",borderRadius:12,padding:"10px 14px",marginBottom:18},children:["Installed: ",wo," • Required: V",j.latestAppVersion||Mr]}),C.jsxs("button",{onClick:()=>{var pe;yn()&&((pe=window.GarudaAndroidBridge)!=null&&pe.downloadUpdateApk)?window.GarudaAndroidBridge.downloadUpdateApk(kl,j.latestAppVersion||Mr):window.open(kl,"_blank","noopener,noreferrer")},className:"u-btn u-btn-primary",style:{width:"100%",height:46,fontSize:13.5,fontWeight:800,borderRadius:12,justifyContent:"center",marginBottom:10},children:["Update to Latest Version (V",j.latestAppVersion||Mr,")"]}),C.jsx("button",{onClick:$,className:"u-btn u-btn-secondary",style:{width:"100%",height:36,fontSize:12,fontWeight:700,borderRadius:10,justifyContent:"center"},children:le?"Checking...":"Verify Update Status"})]})}),Ze&&j.updateAvailable&&!j.forceUpdateRequired&&C.jsx("div",{role:"status","aria-live":"polite",onClick:()=>{$e(!1),e("settings")},style:{position:"fixed",inset:0,zIndex:99990,backgroundColor:"rgba(2, 6, 23, 0.52)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,cursor:"pointer"},children:C.jsxs("div",{style:{width:"100%",maxWidth:360,background:t==="light"?"linear-gradient(145deg, #FFFFFF 0%, #F1F5F9 100%)":"linear-gradient(145deg, rgba(15, 23, 42, 0.97) 0%, rgba(10, 15, 29, 0.98) 100%)",border:"1px solid rgba(56, 189, 248, 0.55)",borderRadius:20,padding:"22px 20px",boxShadow:t==="light"?"0 20px 50px rgba(15, 23, 42, 0.22)":"0 22px 55px rgba(0, 0, 0, 0.78), 0 0 28px rgba(56, 189, 248, 0.22)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:52,height:52,marginBottom:10,filter:"drop-shadow(0 0 14px rgba(56, 189, 248, 0.6))"}}),C.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"3px 11px",borderRadius:999,background:"rgba(56, 189, 248, 0.16)",border:"1px solid rgba(56, 189, 248, 0.42)",color:t==="light"?"#0284C7":"#38BDF8",fontSize:10,fontWeight:800,letterSpacing:"0.6px",textTransform:"uppercase",marginBottom:8},children:"NEW UPDATE AVAILABLE"}),C.jsxs("div",{style:{fontSize:18,fontWeight:800,color:t==="light"?"#0F172A":"#F8FAFC",marginBottom:6,lineHeight:1.25},children:["Garuda Infinity V",j.latestAppVersion]}),C.jsxs("p",{style:{fontSize:12.5,lineHeight:1.55,color:t==="light"?"#334155":"#CBD5E1",margin:"0 0 12px 0"},children:["A new update (",C.jsxs("strong",{children:["V",j.latestAppVersion]}),") is ready to install. Tap or visit Settings to update from ",wo,"."]}),C.jsxs("div",{style:{width:"100%",fontSize:11.5,fontWeight:700,color:"#10B981",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.34)",borderRadius:10,padding:"7px 12px"},children:["Current: ",wo," → New Version: V",j.latestAppVersion]})]})}),C.jsxs("nav",{"aria-label":"Primary Navigation",className:"u-nav-rail",children:[C.jsxs("button",{onClick:()=>e("vpn"),className:"u-nav-brand-btn",title:"Garuda Infinity 3D Dashboard","aria-label":"Garuda Infinity Home",children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",className:"u-nav-brand-logo",style:{filter:ue?"drop-shadow(0 0 10px rgba(16, 185, 129, 0.55))":"drop-shadow(0 0 8px rgba(59, 130, 246, 0.45))"}}),C.jsx("span",{className:"u-nav-brand-title",children:"Garuda Infinity"})]}),C.jsxs("div",{className:"u-nav-center",children:[C.jsxs("button",{onClick:()=>e("vpn"),"aria-current":s==="vpn"?"page":void 0,className:"u-nav-tab-btn",style:{border:s==="vpn"?"1px solid rgba(59, 130, 246, 0.45)":"1px solid var(--uv-border)",backgroundColor:s==="vpn"?"rgba(59, 130, 246, 0.18)":"var(--uv-surface-card)",color:s==="vpn"?"var(--uv-text-heading)":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"background-color 150ms ease, color 150ms ease"},children:[C.jsx(Fy,{size:17,color:ue?"#10B981":s==="vpn"?"#60A5FA":"currentColor","aria-hidden":"true"}),C.jsx("span",{style:{fontSize:11,fontWeight:700},children:"VPN"}),C.jsx("span",{"aria-hidden":"true",className:"u-nav-status-dot",style:{width:6,height:6,borderRadius:"50%",backgroundColor:ue?"#10B981":"#F43F5E"}})]}),C.jsxs("button",{onClick:()=>e("ipconfig"),"aria-current":s==="ipconfig"?"page":void 0,className:"u-nav-tab-btn",title:"Live IP & Activity Logs",style:{border:s==="ipconfig"?"1px solid rgba(59, 130, 246, 0.45)":"1px solid var(--uv-border)",backgroundColor:s==="ipconfig"?"rgba(59, 130, 246, 0.18)":"var(--uv-surface-card)",color:s==="ipconfig"?"var(--uv-text-heading)":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"background-color 150ms ease, color 150ms ease"},children:[C.jsx(Ay,{size:17,color:s==="ipconfig"?"#60A5FA":"currentColor","aria-hidden":"true"}),C.jsx("span",{style:{fontSize:10.5,fontWeight:700,whiteSpace:"nowrap"},children:"IP & Log"})]}),C.jsx("button",{onClick:()=>e("settings"),"aria-current":s==="settings"?"page":void 0,title:"Settings","aria-label":"Settings",className:"u-nav-icon-btn",style:{border:s==="settings"?"1px solid rgba(59, 130, 246, 0.5)":"1px solid var(--uv-border)",backgroundColor:s==="settings"?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:s==="settings"?"#60A5FA":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background-color 150ms ease, color 150ms ease, border-color 150ms ease"},children:C.jsx(Dy,{size:17,color:s==="settings"?"#60A5FA":"currentColor","aria-hidden":"true"})})]}),C.jsxs("div",{className:"u-nav-bottom",children:[C.jsx("button",{onClick:d,className:"u-nav-icon-btn u-nav-orbit-btn",title:`3D View: ${a.toUpperCase()} (Click to cycle)`,"aria-label":`Cycle 3D camera mode, currently ${a}`,style:{border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:C.jsx(Iy,{size:16,color:"#38BDF8","aria-hidden":"true"})}),C.jsx("button",{onClick:u,className:"u-nav-icon-btn",title:t==="dark"?"Switch to Light Mode":"Switch to Dark Cyber Mode","aria-label":t==="dark"?"Switch to Light Mode":"Switch to Dark Mode",style:{border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t==="dark"?C.jsx(z0,{size:16,color:"#FBBF24","aria-hidden":"true"}):C.jsx(B0,{size:16,color:"#3B82F6","aria-hidden":"true"})})]})]}),s==="vpn"?C.jsx(sT,{vpnStatus:Me,realIpInfo:ne,locations:fg,allLocations:h,showExtendedCatalog:!1,onToggleExtendedCatalog:()=>{},selectedLocationIso:v,onSelectLocation:_,onRequestConnection:kt,onConnectButtonClick:F,onRotateIp:E,isStreamingMode:M,onSetStreamingMode:A,connectionElapsedFormatted:pT(_t),lookingForBestServer:W,onRefreshLocations:()=>{},serviceBridgeConnected:!!(P||w||!0),rxBytes:yt,txBytes:Ut,onVerifyIp:ie,ipVerificationResult:ge,isVerifyingIp:z,activeCountryTimeInfo:Le,cameraMode:a,onChangeCameraMode:l,theme:t}):s==="ipconfig"?C.jsx(fT,{vpnStatus:Me,selectedLocationObj:_e,realIpInfo:ne,onVerifyIp:ie,ipVerificationResult:ge,isVerifyingIp:z,activeCountryTimeInfo:Le,activityLogs:Gt,onClearLogs:()=>$t([{id:Date.now(),time:Le.time24,type:"info",msg:"Activity logs cleared."}]),theme:t}):C.jsx(oT,{vpnProtocol:g,onChangeProtocol:pe=>{x(pe),es({type:"UPDATE_SETTINGS",protocol:pe},2e3)},isStreamingMode:M,onToggleStreamingMode:()=>A(pe=>!pe),appAutoStart:S,onToggleAppAutoStart:()=>y(pe=>!pe),autoCutoffOnTabClose:N,onToggleAutoCutoff:()=>k(pe=>!pe),dynamicIpRotation:b,onToggleDynamicIp:()=>{I(pe=>{const oe=!pe;try{localStorage.setItem("garuda_infinity_dynamic_ip",String(oe))}catch{}return es({type:"UPDATE_SETTINGS",dynamicIpRotation:oe},2e3),oe})},theme:t,onToggleTheme:u,cameraMode:a,onChangeCameraMode:l,serviceBridgeConnected:!!(P||w),isAndroidApp:w,updateInfo:j,isCheckingUpdate:le,onCheckForUpdate:$})]})}Sy.createRoot(document.getElementById("root")).render(C.jsx(O0.StrictMode,{children:C.jsx(vT,{})}));"serviceWorker"in navigator&&(typeof window<"u"&&(!!window.GarudaAndroidBridge||window.location.hostname==="appassets.garudainfinity.local"||window.location.protocol==="chrome-extension:"||window.location.protocol==="file:")?navigator.serviceWorker.getRegistrations().then(e=>{for(const t of e)t.unregister().catch(()=>{})}).catch(()=>{}):window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})}));
