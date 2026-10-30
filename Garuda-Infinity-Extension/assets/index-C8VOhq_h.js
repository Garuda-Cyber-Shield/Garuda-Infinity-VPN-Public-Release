(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function O0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hd={exports:{}},fo={},pd={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function h_(){if(Km)return Rt;Km=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(D,le,Le){this.props=D,this.context=le,this.refs=A,this.updater=Le||y}S.prototype.isReactComponent={},S.prototype.setState=function(D,le){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,le,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=S.prototype;function P(D,le,Le){this.props=D,this.context=le,this.refs=A,this.updater=Le||y}var F=P.prototype=new _;F.constructor=P,E(F,S.prototype),F.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function w(D,le,Le){var Ke,$e={},Ae=null,re=null;if(le!=null)for(Ke in le.ref!==void 0&&(re=le.ref),le.key!==void 0&&(Ae=""+le.key),le)I.call(le,Ke)&&!U.hasOwnProperty(Ke)&&($e[Ke]=le[Ke]);var ne=arguments.length-2;if(ne===1)$e.children=Le;else if(1<ne){for(var Oe=Array(ne),Me=0;Me<ne;Me++)Oe[Me]=arguments[Me+2];$e.children=Oe}if(D&&D.defaultProps)for(Ke in ne=D.defaultProps,ne)$e[Ke]===void 0&&($e[Ke]=ne[Ke]);return{$$typeof:s,type:D,key:Ae,ref:re,props:$e,_owner:L.current}}function N(D,le){return{$$typeof:s,type:D.type,key:le,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function G(D){var le={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Le){return le[Le]})}var W=/\/+/g;function K(D,le){return typeof D=="object"&&D!==null&&D.key!=null?G(""+D.key):le.toString(36)}function z(D,le,Le,Ke,$e){var Ae=typeof D;(Ae==="undefined"||Ae==="boolean")&&(D=null);var re=!1;if(D===null)re=!0;else switch(Ae){case"string":case"number":re=!0;break;case"object":switch(D.$$typeof){case s:case e:re=!0}}if(re)return re=D,$e=$e(re),D=Ke===""?"."+K(re,0):Ke,b($e)?(Le="",D!=null&&(Le=D.replace(W,"$&/")+"/"),z($e,le,Le,"",function(Me){return Me})):$e!=null&&(k($e)&&($e=N($e,Le+(!$e.key||re&&re.key===$e.key?"":(""+$e.key).replace(W,"$&/")+"/")+D)),le.push($e)),1;if(re=0,Ke=Ke===""?".":Ke+":",b(D))for(var ne=0;ne<D.length;ne++){Ae=D[ne];var Oe=Ke+K(Ae,ne);re+=z(Ae,le,Le,Oe,$e)}else if(Oe=g(D),typeof Oe=="function")for(D=Oe.call(D),ne=0;!(Ae=D.next()).done;)Ae=Ae.value,Oe=Ke+K(Ae,ne++),re+=z(Ae,le,Le,Oe,$e);else if(Ae==="object")throw le=String(D),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return re}function J(D,le,Le){if(D==null)return D;var Ke=[],$e=0;return z(D,Ke,"","",function(Ae){return le.call(Le,Ae,$e++)}),Ke}function ge(D){if(D._status===-1){var le=D._result;le=le(),le.then(function(Le){(D._status===0||D._status===-1)&&(D._status=1,D._result=Le)},function(Le){(D._status===0||D._status===-1)&&(D._status=2,D._result=Le)}),D._status===-1&&(D._status=0,D._result=le)}if(D._status===1)return D._result.default;throw D._result}var q={current:null},ee={transition:null},H={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:ee,ReactCurrentOwner:L};function j(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:J,forEach:function(D,le,Le){J(D,function(){le.apply(this,arguments)},Le)},count:function(D){var le=0;return J(D,function(){le++}),le},toArray:function(D){return J(D,function(le){return le})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Rt.Component=S,Rt.Fragment=t,Rt.Profiler=a,Rt.PureComponent=P,Rt.StrictMode=r,Rt.Suspense=h,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Rt.act=j,Rt.cloneElement=function(D,le,Le){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ke=E({},D.props),$e=D.key,Ae=D.ref,re=D._owner;if(le!=null){if(le.ref!==void 0&&(Ae=le.ref,re=L.current),le.key!==void 0&&($e=""+le.key),D.type&&D.type.defaultProps)var ne=D.type.defaultProps;for(Oe in le)I.call(le,Oe)&&!U.hasOwnProperty(Oe)&&(Ke[Oe]=le[Oe]===void 0&&ne!==void 0?ne[Oe]:le[Oe])}var Oe=arguments.length-2;if(Oe===1)Ke.children=Le;else if(1<Oe){ne=Array(Oe);for(var Me=0;Me<Oe;Me++)ne[Me]=arguments[Me+2];Ke.children=ne}return{$$typeof:s,type:D.type,key:$e,ref:Ae,props:Ke,_owner:re}},Rt.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Rt.createElement=w,Rt.createFactory=function(D){var le=w.bind(null,D);return le.type=D,le},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(D){return{$$typeof:d,render:D}},Rt.isValidElement=k,Rt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:ge}},Rt.memo=function(D,le){return{$$typeof:p,type:D,compare:le===void 0?null:le}},Rt.startTransition=function(D){var le=ee.transition;ee.transition={};try{D()}finally{ee.transition=le}},Rt.unstable_act=j,Rt.useCallback=function(D,le){return q.current.useCallback(D,le)},Rt.useContext=function(D){return q.current.useContext(D)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(D){return q.current.useDeferredValue(D)},Rt.useEffect=function(D,le){return q.current.useEffect(D,le)},Rt.useId=function(){return q.current.useId()},Rt.useImperativeHandle=function(D,le,Le){return q.current.useImperativeHandle(D,le,Le)},Rt.useInsertionEffect=function(D,le){return q.current.useInsertionEffect(D,le)},Rt.useLayoutEffect=function(D,le){return q.current.useLayoutEffect(D,le)},Rt.useMemo=function(D,le){return q.current.useMemo(D,le)},Rt.useReducer=function(D,le,Le){return q.current.useReducer(D,le,Le)},Rt.useRef=function(D){return q.current.useRef(D)},Rt.useState=function(D){return q.current.useState(D)},Rt.useSyncExternalStore=function(D,le,Le){return q.current.useSyncExternalStore(D,le,Le)},Rt.useTransition=function(){return q.current.useTransition()},Rt.version="18.3.1",Rt}var Jm;function nh(){return Jm||(Jm=1,pd.exports=h_()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function p_(){if(Qm)return fo;Qm=1;var s=nh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,p){var v,x={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:d,key:g,ref:y,props:x,_owner:a.current}}return fo.Fragment=t,fo.jsx=c,fo.jsxs=c,fo}var eg;function m_(){return eg||(eg=1,hd.exports=p_()),hd.exports}var C=m_(),Ye=nh();const k0=O0(Ye);var Ol={},md={exports:{}},ii={},gd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function g_(){return tg||(tg=1,(function(s){function e(ee,H){var j=ee.length;ee.push(H);e:for(;0<j;){var D=j-1>>>1,le=ee[D];if(0<a(le,H))ee[D]=H,ee[j]=le,j=D;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var H=ee[0],j=ee.pop();if(j!==H){ee[0]=j;e:for(var D=0,le=ee.length,Le=le>>>1;D<Le;){var Ke=2*(D+1)-1,$e=ee[Ke],Ae=Ke+1,re=ee[Ae];if(0>a($e,j))Ae<le&&0>a(re,$e)?(ee[D]=re,ee[Ae]=j,D=Ae):(ee[D]=$e,ee[Ke]=j,D=Ke);else if(Ae<le&&0>a(re,j))ee[D]=re,ee[Ae]=j,D=Ae;else break e}}return H}function a(ee,H){var j=ee.sortIndex-H.sortIndex;return j!==0?j:ee.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],p=[],v=1,x=null,g=3,y=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(ee){for(var H=t(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=ee)r(p),H.sortIndex=H.expirationTime,e(h,H);else break;H=t(p)}}function b(ee){if(A=!1,F(ee),!E)if(t(h)!==null)E=!0,ge(I);else{var H=t(p);H!==null&&q(b,H.startTime-ee)}}function I(ee,H){E=!1,A&&(A=!1,_(w),w=-1),y=!0;var j=g;try{for(F(H),x=t(h);x!==null&&(!(x.expirationTime>H)||ee&&!G());){var D=x.callback;if(typeof D=="function"){x.callback=null,g=x.priorityLevel;var le=D(x.expirationTime<=H);H=s.unstable_now(),typeof le=="function"?x.callback=le:x===t(h)&&r(h),F(H)}else r(h);x=t(h)}if(x!==null)var Le=!0;else{var Ke=t(p);Ke!==null&&q(b,Ke.startTime-H),Le=!1}return Le}finally{x=null,g=j,y=!1}}var L=!1,U=null,w=-1,N=5,k=-1;function G(){return!(s.unstable_now()-k<N)}function W(){if(U!==null){var ee=s.unstable_now();k=ee;var H=!0;try{H=U(!0,ee)}finally{H?K():(L=!1,U=null)}}else L=!1}var K;if(typeof P=="function")K=function(){P(W)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,J=z.port2;z.port1.onmessage=W,K=function(){J.postMessage(null)}}else K=function(){S(W,0)};function ge(ee){U=ee,L||(L=!0,K())}function q(ee,H){w=S(function(){ee(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,ge(I))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(ee){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var j=g;g=H;try{return ee()}finally{g=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,H){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var j=g;g=ee;try{return H()}finally{g=j}},s.unstable_scheduleCallback=function(ee,H,j){var D=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,ee){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=j+le,ee={id:v++,callback:H,priorityLevel:ee,startTime:j,expirationTime:le,sortIndex:-1},j>D?(ee.sortIndex=j,e(p,ee),t(h)===null&&ee===t(p)&&(A?(_(w),w=-1):A=!0,q(b,j-D))):(ee.sortIndex=le,e(h,ee),E||y||(E=!0,ge(I))),ee},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(ee){var H=g;return function(){var j=g;g=H;try{return ee.apply(this,arguments)}finally{g=j}}}})(vd)),vd}var ng;function v_(){return ng||(ng=1,gd.exports=g_()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function y_(){if(ig)return ii;ig=1;var s=nh(),e=v_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,o,u,f,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,P);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,P);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,P);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,o,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),ee=Symbol.iterator;function H(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,D;function le(n){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Le=!1;function Ke(n,i){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ve){var u=ve}Reflect.construct(n,[],i)}else{try{i.call()}catch(ve){u=ve}n.call(i.prototype)}else{try{throw Error()}catch(ve){u=ve}n()}}catch(ve){if(ve&&u&&typeof ve.stack=="string"){for(var f=ve.stack.split(`
`),m=u.stack.split(`
`),T=f.length-1,B=m.length-1;1<=T&&0<=B&&f[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(f[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||f[T]!==m[B]){var X=`
`+f[T].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=T&&0<=B);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?le(n):""}function $e(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ke(n.type,!1),n;case 11:return n=Ke(n.type.render,!1),n;case 1:return n=Ke(n.type,!0),n;default:return""}}function Ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case L:return"Portal";case N:return"Profiler";case w:return"StrictMode";case K:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:Ae(n.type)||"Memo";case ge:i=n._payload,n=n._init;try{return Ae(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Me(n){var i=Oe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Be(n){n._valueTracker||(n._valueTracker=Me(n))}function yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Oe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _t(n,i){var o=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Mt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ne(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ut(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function mt(n,i){Ut(n,i);var o=ne(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?$t(n,i.type,o):i.hasOwnProperty("defaultValue")&&$t(n,i.type,ne(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Gt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function $t(n,i,o){(i!=="number"||Dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Vt=Array.isArray;function st(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ne(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Nt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Vt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ne(o)}}function kt(n,i){var o=ne(i.value),u=ne(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Pt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function O(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?O(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ie,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ie=ie||document.createElement("div"),ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ye(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(n){pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ne[i]=Ne[n]})});function oe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ne.hasOwnProperty(n)&&Ne[n]?(""+i).trim():i+"px"}function _e(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=oe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var se=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(n,i){if(i){if(se[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function te(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fe=null;function Te(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,Ce=null,V=null;function De(n){if(n=qa(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Jo(i),Re(n.stateNode,n.type,i))}}function xe(n){Ce?V?V.push(n):V=[n]:Ce=n}function Pe(){if(Ce){var n=Ce,i=V;if(V=Ce=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ee(n,i){return n(i)}function Se(){}var Ge=!1;function Ue(n,i,o){if(Ge)return n(i,o);Ge=!0;try{return Ee(n,i,o)}finally{Ge=!1,(Ce!==null||V!==null)&&(Se(),Pe())}}function vt(n,i){var o=n.stateNode;if(o===null)return null;var u=Jo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var pt=!1;if(d)try{var Bt={};Object.defineProperty(Bt,"passive",{get:function(){pt=!0}}),window.addEventListener("test",Bt,Bt),window.removeEventListener("test",Bt,Bt)}catch{pt=!1}function gn(n,i,o,u,f,m,T,B,X){var ve=Array.prototype.slice.call(arguments,3);try{i.apply(o,ve)}catch(Fe){this.onError(Fe)}}var mi=!1,Hi=null,Wi=!1,Ti=null,ar={onError:function(n){mi=!0,Hi=n}};function Xi(n,i,o,u,f,m,T,B,X){mi=!1,Hi=null,gn.apply(ar,arguments)}function Fs(n,i,o,u,f,m,T,B,X){if(Xi.apply(this,arguments),mi){if(mi){var ve=Hi;mi=!1,Hi=null}else throw Error(t(198));Wi||(Wi=!0,Ti=ve)}}function wn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function or(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Cr(n){if(wn(n)!==n)throw Error(t(188))}function Os(n){var i=n.alternate;if(!i){if(i=wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Cr(f),n;if(m===u)return Cr(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=m;else{for(var T=!1,B=f.child;B;){if(B===o){T=!0,o=f,u=m;break}if(B===u){T=!0,u=f,o=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===o){T=!0,o=m,u=f;break}if(B===u){T=!0,u=m,o=f;break}B=B.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ji(n){return n=Os(n),n!==null?qn(n):null}function qn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qn(n);if(i!==null)return i;n=n.sibling}return null}var bi=e.unstable_scheduleCallback,Hn=e.unstable_cancelCallback,ks=e.unstable_shouldYield,Bs=e.unstable_requestPaint,Zt=e.unstable_now,zs=e.unstable_getCurrentPriorityLevel,Rr=e.unstable_ImmediatePriority,Pr=e.unstable_UserBlockingPriority,R=e.unstable_NormalPriority,Y=e.unstable_LowPriority,me=e.unstable_IdlePriority,ce=null,ae=null;function We(n){if(ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:it,Xe=Math.log,et=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Xe(n)/et|0)|0}var we=64,je=4194304;function be(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var B=T&~f;B!==0?u=be(B):(m&=T,m!==0&&(u=be(m)))}else T=o&~f,T!==0?u=be(T):m!==0&&(u=be(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-He(i),f=1<<o,u|=n[o],i&=~f;return u}function Et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-He(m),B=1<<T,X=f[T];X===-1?((B&o)===0||(B&u)!==0)&&(f[T]=Et(B,i)):X<=i&&(n.expiredLanes|=B),m&=~B}}function ct(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function nn(){var n=we;return we<<=1,(we&4194240)===0&&(we=64),n}function Ze(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Yt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-He(i),n[i]=o}function At(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-He(o),m=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~m}}function vn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-He(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var ut=0;function fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dn,bt,Ht,ai,Lt,Kn=!1,Wn=[],Ci=null,Lr=null,Ir=null,Da=new Map,Ua=new Map,Nr=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(n,i){switch(n){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(i.pointerId)}}function Fa(n,i,o,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=qa(i),i!==null&&bt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Fv(n,i,o,u,f){switch(i){case"focusin":return Ci=Fa(Ci,n,i,o,u,f),!0;case"dragenter":return Lr=Fa(Lr,n,i,o,u,f),!0;case"mouseover":return Ir=Fa(Ir,n,i,o,u,f),!0;case"pointerover":var m=f.pointerId;return Da.set(m,Fa(Da.get(m)||null,n,i,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Ua.set(m,Fa(Ua.get(m)||null,n,i,o,u,f)),!0}return!1}function Uh(n){var i=os(n.target);if(i!==null){var o=wn(i);if(o!==null){if(i=o.tag,i===13){if(i=or(o),i!==null){n.blockedOn=i,Lt(n.priority,function(){Ht(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ko(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=zc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);fe=u,o.target.dispatchEvent(u),fe=null}else return i=qa(o),i!==null&&bt(i),n.blockedOn=o,!1;i.shift()}return!0}function Fh(n,i,o){ko(n)&&o.delete(i)}function Ov(){Kn=!1,Ci!==null&&ko(Ci)&&(Ci=null),Lr!==null&&ko(Lr)&&(Lr=null),Ir!==null&&ko(Ir)&&(Ir=null),Da.forEach(Fh),Ua.forEach(Fh)}function Oa(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ov)))}function ka(n){function i(f){return Oa(f,n)}if(0<Wn.length){Oa(Wn[0],n);for(var o=1;o<Wn.length;o++){var u=Wn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ci!==null&&Oa(Ci,n),Lr!==null&&Oa(Lr,n),Ir!==null&&Oa(Ir,n),Da.forEach(i),Ua.forEach(i),o=0;o<Nr.length;o++)u=Nr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Nr.length&&(o=Nr[0],o.blockedOn===null);)Uh(o),o.blockedOn===null&&Nr.shift()}var Gs=b.ReactCurrentBatchConfig,Bo=!0;function kv(n,i,o,u){var f=ut,m=Gs.transition;Gs.transition=null;try{ut=1,Bc(n,i,o,u)}finally{ut=f,Gs.transition=m}}function Bv(n,i,o,u){var f=ut,m=Gs.transition;Gs.transition=null;try{ut=4,Bc(n,i,o,u)}finally{ut=f,Gs.transition=m}}function Bc(n,i,o,u){if(Bo){var f=zc(n,i,o,u);if(f===null)iu(n,i,u,zo,o),Dh(n,u);else if(Fv(f,n,i,o,u))u.stopPropagation();else if(Dh(n,u),i&4&&-1<Uv.indexOf(n)){for(;f!==null;){var m=qa(f);if(m!==null&&Dn(m),m=zc(n,i,o,u),m===null&&iu(n,i,u,zo,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else iu(n,i,u,null,o)}}var zo=null;function zc(n,i,o,u){if(zo=null,n=Te(u),n=os(n),n!==null)if(i=wn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=or(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return zo=n,null}function Oh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zs()){case Rr:return 1;case Pr:return 4;case R:case Y:return 16;case me:return 536870912;default:return 16}default:return 16}}var Dr=null,Gc=null,Go=null;function kh(){if(Go)return Go;var n,i=Gc,o=i.length,u,f="value"in Dr?Dr.value:Dr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var T=o-n;for(u=1;u<=T&&i[o-u]===f[m-u];u++);return Go=f.slice(n,1<u?1-u:void 0)}function Vo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Bh(){return!1}function oi(n){function i(o,u,f,m,T){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ho:Bh,this.isPropagationStopped=Bh,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),i}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=oi(Vs),Ba=j({},Vs,{view:0,detail:0}),zv=oi(Ba),Hc,Wc,za,Wo=j({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==za&&(za&&n.type==="mousemove"?(Hc=n.screenX-za.screenX,Wc=n.screenY-za.screenY):Wc=Hc=0,za=n),Hc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),zh=oi(Wo),Gv=j({},Wo,{dataTransfer:0}),Vv=oi(Gv),Hv=j({},Ba,{relatedTarget:0}),Xc=oi(Hv),Wv=j({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=oi(Wv),jv=j({},Vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Yv=oi(jv),$v=j({},Vs,{data:0}),Gh=oi($v),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kv[n])?!!i[n]:!1}function jc(){return Jv}var Qv=j({},Ba,{key:function(n){if(n.key){var i=Zv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?Vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ey=oi(Qv),ty=j({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=oi(ty),ny=j({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),iy=oi(ny),ry=j({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=oi(ry),ay=j({},Wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=oi(ay),ly=[9,13,27,32],Yc=d&&"CompositionEvent"in window,Ga=null;d&&"documentMode"in document&&(Ga=document.documentMode);var cy=d&&"TextEvent"in window&&!Ga,Hh=d&&(!Yc||Ga&&8<Ga&&11>=Ga),Wh=" ",Xh=!1;function jh(n,i){switch(n){case"keyup":return ly.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function uy(n,i){switch(n){case"compositionend":return Yh(i);case"keypress":return i.which!==32?null:(Xh=!0,Wh);case"textInput":return n=i.data,n===Wh&&Xh?null:n;default:return null}}function dy(n,i){if(Hs)return n==="compositionend"||!Yc&&jh(n,i)?(n=kh(),Go=Gc=Dr=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hh&&i.locale!=="ko"?null:i.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fy[n.type]:i==="textarea"}function Zh(n,i,o,u){xe(u),i=Zo(i,"onChange"),0<i.length&&(o=new Vc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Va=null,Ha=null;function hy(n){hp(n,0)}function Xo(n){var i=$s(n);if(yt(i))return n}function py(n,i){if(n==="change")return i}var qh=!1;if(d){var $c;if(d){var Zc="oninput"in document;if(!Zc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Zc=typeof Kh.oninput=="function"}$c=Zc}else $c=!1;qh=$c&&(!document.documentMode||9<document.documentMode)}function Jh(){Va&&(Va.detachEvent("onpropertychange",Qh),Ha=Va=null)}function Qh(n){if(n.propertyName==="value"&&Xo(Ha)){var i=[];Zh(i,Ha,n,Te(n)),Ue(hy,i)}}function my(n,i,o){n==="focusin"?(Jh(),Va=i,Ha=o,Va.attachEvent("onpropertychange",Qh)):n==="focusout"&&Jh()}function gy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xo(Ha)}function vy(n,i){if(n==="click")return Xo(i)}function yy(n,i){if(n==="input"||n==="change")return Xo(i)}function _y(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ri=typeof Object.is=="function"?Object.is:_y;function Wa(n,i){if(Ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!Ri(n[f],i[f]))return!1}return!0}function ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tp(n,i){var o=ep(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ep(o)}}function np(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?np(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ip(){for(var n=window,i=Dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Dt(n.document)}return i}function qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function xy(n){var i=ip(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&np(o.ownerDocument.documentElement,o)){if(u!==null&&qc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!n.extend&&m>u&&(f=u,u=m,m=f),f=tp(o,m);var T=tp(o,u);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sy=d&&"documentMode"in document&&11>=document.documentMode,Ws=null,Kc=null,Xa=null,Jc=!1;function rp(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Jc||Ws==null||Ws!==Dt(u)||(u=Ws,"selectionStart"in u&&qc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xa&&Wa(Xa,u)||(Xa=u,u=Zo(Kc,"onSelect"),0<u.length&&(i=new Vc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ws)))}function jo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Xs={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Qc={},sp={};d&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Yo(n){if(Qc[n])return Qc[n];if(!Xs[n])return n;var i=Xs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in sp)return Qc[n]=i[o];return n}var ap=Yo("animationend"),op=Yo("animationiteration"),lp=Yo("animationstart"),cp=Yo("transitionend"),up=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,i){up.set(n,i),l(i,[n])}for(var eu=0;eu<dp.length;eu++){var tu=dp[eu],My=tu.toLowerCase(),Ey=tu[0].toUpperCase()+tu.slice(1);Ur(My,"on"+Ey)}Ur(ap,"onAnimationEnd"),Ur(op,"onAnimationIteration"),Ur(lp,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(cp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function fp(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Fs(u,i,void 0,n),n.currentTarget=null}function hp(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var B=u[T],X=B.instance,ve=B.currentTarget;if(B=B.listener,X!==m&&f.isPropagationStopped())break e;fp(f,B,ve),m=X}else for(T=0;T<u.length;T++){if(B=u[T],X=B.instance,ve=B.currentTarget,B=B.listener,X!==m&&f.isPropagationStopped())break e;fp(f,B,ve),m=X}}}if(Wi)throw n=Ti,Wi=!1,Ti=null,n}function Jt(n,i){var o=i[cu];o===void 0&&(o=i[cu]=new Set);var u=n+"__bubble";o.has(u)||(pp(i,n,2,!1),o.add(u))}function nu(n,i,o){var u=0;i&&(u|=4),pp(o,n,u,i)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Ya(n){if(!n[$o]){n[$o]=!0,r.forEach(function(o){o!=="selectionchange"&&(wy.has(o)||nu(o,!1,n),nu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[$o]||(i[$o]=!0,nu("selectionchange",!1,i))}}function pp(n,i,o,u){switch(Oh(i)){case 1:var f=kv;break;case 4:f=Bv;break;default:f=Bc}o=f.bind(null,i,o,n),f=void 0,!pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function iu(n,i,o,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var B=u.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(T===4)for(T=u.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;T=T.return}for(;B!==null;){if(T=os(B),T===null)return;if(X=T.tag,X===5||X===6){u=m=T;continue e}B=B.parentNode}}u=u.return}Ue(function(){var ve=m,Fe=Te(o),ke=[];e:{var Ie=up.get(n);if(Ie!==void 0){var Je=Vc,rt=n;switch(n){case"keypress":if(Vo(o)===0)break e;case"keydown":case"keyup":Je=ey;break;case"focusin":rt="focus",Je=Xc;break;case"focusout":rt="blur",Je=Xc;break;case"beforeblur":case"afterblur":Je=Xc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=iy;break;case ap:case op:case lp:Je=Xv;break;case cp:Je=sy;break;case"scroll":Je=zv;break;case"wheel":Je=oy;break;case"copy":case"cut":case"paste":Je=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Vh}var at=(i&4)!==0,cn=!at&&n==="scroll",de=at?Ie!==null?Ie+"Capture":null:Ie;at=[];for(var Q=ve,he;Q!==null;){he=Q;var ze=he.stateNode;if(he.tag===5&&ze!==null&&(he=ze,de!==null&&(ze=vt(Q,de),ze!=null&&at.push($a(Q,ze,he)))),cn)break;Q=Q.return}0<at.length&&(Ie=new Je(Ie,rt,null,o,Fe),ke.push({event:Ie,listeners:at}))}}if((i&7)===0){e:{if(Ie=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Ie&&o!==fe&&(rt=o.relatedTarget||o.fromElement)&&(os(rt)||rt[lr]))break e;if((Je||Ie)&&(Ie=Fe.window===Fe?Fe:(Ie=Fe.ownerDocument)?Ie.defaultView||Ie.parentWindow:window,Je?(rt=o.relatedTarget||o.toElement,Je=ve,rt=rt?os(rt):null,rt!==null&&(cn=wn(rt),rt!==cn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Je=null,rt=ve),Je!==rt)){if(at=zh,ze="onMouseLeave",de="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(at=Vh,ze="onPointerLeave",de="onPointerEnter",Q="pointer"),cn=Je==null?Ie:$s(Je),he=rt==null?Ie:$s(rt),Ie=new at(ze,Q+"leave",Je,o,Fe),Ie.target=cn,Ie.relatedTarget=he,ze=null,os(Fe)===ve&&(at=new at(de,Q+"enter",rt,o,Fe),at.target=he,at.relatedTarget=cn,ze=at),cn=ze,Je&&rt)t:{for(at=Je,de=rt,Q=0,he=at;he;he=js(he))Q++;for(he=0,ze=de;ze;ze=js(ze))he++;for(;0<Q-he;)at=js(at),Q--;for(;0<he-Q;)de=js(de),he--;for(;Q--;){if(at===de||de!==null&&at===de.alternate)break t;at=js(at),de=js(de)}at=null}else at=null;Je!==null&&mp(ke,Ie,Je,at,!1),rt!==null&&cn!==null&&mp(ke,cn,rt,at,!0)}}e:{if(Ie=ve?$s(ve):window,Je=Ie.nodeName&&Ie.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ie.type==="file")var lt=py;else if($h(Ie))if(qh)lt=yy;else{lt=gy;var dt=my}else(Je=Ie.nodeName)&&Je.toLowerCase()==="input"&&(Ie.type==="checkbox"||Ie.type==="radio")&&(lt=vy);if(lt&&(lt=lt(n,ve))){Zh(ke,lt,o,Fe);break e}dt&&dt(n,Ie,ve),n==="focusout"&&(dt=Ie._wrapperState)&&dt.controlled&&Ie.type==="number"&&$t(Ie,"number",Ie.value)}switch(dt=ve?$s(ve):window,n){case"focusin":($h(dt)||dt.contentEditable==="true")&&(Ws=dt,Kc=ve,Xa=null);break;case"focusout":Xa=Kc=Ws=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,rp(ke,o,Fe);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":rp(ke,o,Fe)}var ft;if(Yc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Hs?jh(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(Hh&&o.locale!=="ko"&&(Hs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Hs&&(ft=kh()):(Dr=Fe,Gc="value"in Dr?Dr.value:Dr.textContent,Hs=!0)),dt=Zo(ve,xt),0<dt.length&&(xt=new Gh(xt,n,null,o,Fe),ke.push({event:xt,listeners:dt}),ft?xt.data=ft:(ft=Yh(o),ft!==null&&(xt.data=ft)))),(ft=cy?uy(n,o):dy(n,o))&&(ve=Zo(ve,"onBeforeInput"),0<ve.length&&(Fe=new Gh("onBeforeInput","beforeinput",null,o,Fe),ke.push({event:Fe,listeners:ve}),Fe.data=ft))}hp(ke,i)})}function $a(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Zo(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=vt(n,o),m!=null&&u.unshift($a(n,m,f)),m=vt(n,i),m!=null&&u.push($a(n,m,f))),n=n.return}return u}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,i,o,u,f){for(var m=i._reactName,T=[];o!==null&&o!==u;){var B=o,X=B.alternate,ve=B.stateNode;if(X!==null&&X===u)break;B.tag===5&&ve!==null&&(B=ve,f?(X=vt(o,m),X!=null&&T.unshift($a(o,X,B))):f||(X=vt(o,m),X!=null&&T.push($a(o,X,B)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var Ay=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(Ay,`
`).replace(Ty,"")}function qo(n,i,o){if(i=gp(i),gp(n)!==i&&o)throw Error(t(425))}function Ko(){}var ru=null,su=null;function au(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(n){return vp.resolve(null).then(n).catch(Ry)}:ou;function Ry(n){setTimeout(function(){throw n})}function lu(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),ka(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);ka(i)}function Fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function yp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Ys,Za="__reactProps$"+Ys,lr="__reactContainer$"+Ys,cu="__reactEvents$"+Ys,Py="__reactListeners$"+Ys,Ly="__reactHandles$"+Ys;function os(n){var i=n[Yi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[lr]||o[Yi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=yp(n);n!==null;){if(o=n[Yi])return o;n=yp(n)}return i}n=o,o=n.parentNode}return null}function qa(n){return n=n[Yi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Jo(n){return n[Za]||null}var uu=[],Zs=-1;function Or(n){return{current:n}}function Qt(n){0>Zs||(n.current=uu[Zs],uu[Zs]=null,Zs--)}function qt(n,i){Zs++,uu[Zs]=n.current,n.current=i}var kr={},Un=Or(kr),Jn=Or(!1),ls=kr;function qs(n,i){var o=n.type.contextTypes;if(!o)return kr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Qn(n){return n=n.childContextTypes,n!=null}function Qo(){Qt(Jn),Qt(Un)}function _p(n,i,o){if(Un.current!==kr)throw Error(t(168));qt(Un,i),qt(Jn,o)}function xp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,re(n)||"Unknown",f));return j({},o,u)}function el(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,ls=Un.current,qt(Un,n),qt(Jn,Jn.current),!0}function Sp(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=xp(n,i,ls),u.__reactInternalMemoizedMergedChildContext=n,Qt(Jn),Qt(Un),qt(Un,n)):Qt(Jn),qt(Jn,o)}var cr=null,tl=!1,du=!1;function Mp(n){cr===null?cr=[n]:cr.push(n)}function Iy(n){tl=!0,Mp(n)}function Br(){if(!du&&cr!==null){du=!0;var n=0,i=ut;try{var o=cr;for(ut=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}cr=null,tl=!1}catch(f){throw cr!==null&&(cr=cr.slice(n+1)),bi(Rr,Br),f}finally{ut=i,du=!1}}return null}var Ks=[],Js=0,nl=null,il=0,gi=[],vi=0,cs=null,ur=1,dr="";function us(n,i){Ks[Js++]=il,Ks[Js++]=nl,nl=n,il=i}function Ep(n,i,o){gi[vi++]=ur,gi[vi++]=dr,gi[vi++]=cs,cs=n;var u=ur;n=dr;var f=32-He(u)-1;u&=~(1<<f),o+=1;var m=32-He(i)+f;if(30<m){var T=f-f%5;m=(u&(1<<T)-1).toString(32),u>>=T,f-=T,ur=1<<32-He(i)+f|o<<f|u,dr=m+n}else ur=1<<m|o<<f|u,dr=n}function fu(n){n.return!==null&&(us(n,1),Ep(n,1,0))}function hu(n){for(;n===nl;)nl=Ks[--Js],Ks[Js]=null,il=Ks[--Js],Ks[Js]=null;for(;n===cs;)cs=gi[--vi],gi[vi]=null,dr=gi[--vi],gi[vi]=null,ur=gi[--vi],gi[vi]=null}var li=null,ci=null,en=!1,Pi=null;function wp(n,i){var o=Si(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Ap(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,li=n,ci=Fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,li=n,ci=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=cs!==null?{id:ur,overflow:dr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Si(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,li=n,ci=null,!0):!1;default:return!1}}function pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mu(n){if(en){var i=ci;if(i){var o=i;if(!Ap(n,i)){if(pu(n))throw Error(t(418));i=Fr(o.nextSibling);var u=li;i&&Ap(n,i)?wp(u,o):(n.flags=n.flags&-4097|2,en=!1,li=n)}}else{if(pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,li=n}}}function Tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function rl(n){if(n!==li)return!1;if(!en)return Tp(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!au(n.type,n.memoizedProps)),i&&(i=ci)){if(pu(n))throw bp(),Error(t(418));for(;i;)wp(n,i),i=Fr(i.nextSibling)}if(Tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ci=Fr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ci=null}}else ci=li?Fr(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=ci;n;)n=Fr(n.nextSibling)}function Qs(){ci=li=null,en=!1}function gu(n){Pi===null?Pi=[n]:Pi.push(n)}var Ny=b.ReactCurrentBatchConfig;function Ka(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=f.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function sl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Cp(n){var i=n._init;return i(n._payload)}function Rp(n){function i(de,Q){if(n){var he=de.deletions;he===null?(de.deletions=[Q],de.flags|=16):he.push(Q)}}function o(de,Q){if(!n)return null;for(;Q!==null;)i(de,Q),Q=Q.sibling;return null}function u(de,Q){for(de=new Map;Q!==null;)Q.key!==null?de.set(Q.key,Q):de.set(Q.index,Q),Q=Q.sibling;return de}function f(de,Q){return de=Yr(de,Q),de.index=0,de.sibling=null,de}function m(de,Q,he){return de.index=he,n?(he=de.alternate,he!==null?(he=he.index,he<Q?(de.flags|=2,Q):he):(de.flags|=2,Q)):(de.flags|=1048576,Q)}function T(de){return n&&de.alternate===null&&(de.flags|=2),de}function B(de,Q,he,ze){return Q===null||Q.tag!==6?(Q=od(he,de.mode,ze),Q.return=de,Q):(Q=f(Q,he),Q.return=de,Q)}function X(de,Q,he,ze){var lt=he.type;return lt===U?Fe(de,Q,he.props.children,ze,he.key):Q!==null&&(Q.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ge&&Cp(lt)===Q.type)?(ze=f(Q,he.props),ze.ref=Ka(de,Q,he),ze.return=de,ze):(ze=Rl(he.type,he.key,he.props,null,de.mode,ze),ze.ref=Ka(de,Q,he),ze.return=de,ze)}function ve(de,Q,he,ze){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==he.containerInfo||Q.stateNode.implementation!==he.implementation?(Q=ld(he,de.mode,ze),Q.return=de,Q):(Q=f(Q,he.children||[]),Q.return=de,Q)}function Fe(de,Q,he,ze,lt){return Q===null||Q.tag!==7?(Q=ys(he,de.mode,ze,lt),Q.return=de,Q):(Q=f(Q,he),Q.return=de,Q)}function ke(de,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=od(""+Q,de.mode,he),Q.return=de,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case I:return he=Rl(Q.type,Q.key,Q.props,null,de.mode,he),he.ref=Ka(de,null,Q),he.return=de,he;case L:return Q=ld(Q,de.mode,he),Q.return=de,Q;case ge:var ze=Q._init;return ke(de,ze(Q._payload),he)}if(Vt(Q)||H(Q))return Q=ys(Q,de.mode,he,null),Q.return=de,Q;sl(de,Q)}return null}function Ie(de,Q,he,ze){var lt=Q!==null?Q.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return lt!==null?null:B(de,Q,""+he,ze);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case I:return he.key===lt?X(de,Q,he,ze):null;case L:return he.key===lt?ve(de,Q,he,ze):null;case ge:return lt=he._init,Ie(de,Q,lt(he._payload),ze)}if(Vt(he)||H(he))return lt!==null?null:Fe(de,Q,he,ze,null);sl(de,he)}return null}function Je(de,Q,he,ze,lt){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return de=de.get(he)||null,B(Q,de,""+ze,lt);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case I:return de=de.get(ze.key===null?he:ze.key)||null,X(Q,de,ze,lt);case L:return de=de.get(ze.key===null?he:ze.key)||null,ve(Q,de,ze,lt);case ge:var dt=ze._init;return Je(de,Q,he,dt(ze._payload),lt)}if(Vt(ze)||H(ze))return de=de.get(he)||null,Fe(Q,de,ze,lt,null);sl(Q,ze)}return null}function rt(de,Q,he,ze){for(var lt=null,dt=null,ft=Q,xt=Q=0,bn=null;ft!==null&&xt<he.length;xt++){ft.index>xt?(bn=ft,ft=null):bn=ft.sibling;var zt=Ie(de,ft,he[xt],ze);if(zt===null){ft===null&&(ft=bn);break}n&&ft&&zt.alternate===null&&i(de,ft),Q=m(zt,Q,xt),dt===null?lt=zt:dt.sibling=zt,dt=zt,ft=bn}if(xt===he.length)return o(de,ft),en&&us(de,xt),lt;if(ft===null){for(;xt<he.length;xt++)ft=ke(de,he[xt],ze),ft!==null&&(Q=m(ft,Q,xt),dt===null?lt=ft:dt.sibling=ft,dt=ft);return en&&us(de,xt),lt}for(ft=u(de,ft);xt<he.length;xt++)bn=Je(ft,de,xt,he[xt],ze),bn!==null&&(n&&bn.alternate!==null&&ft.delete(bn.key===null?xt:bn.key),Q=m(bn,Q,xt),dt===null?lt=bn:dt.sibling=bn,dt=bn);return n&&ft.forEach(function($r){return i(de,$r)}),en&&us(de,xt),lt}function at(de,Q,he,ze){var lt=H(he);if(typeof lt!="function")throw Error(t(150));if(he=lt.call(he),he==null)throw Error(t(151));for(var dt=lt=null,ft=Q,xt=Q=0,bn=null,zt=he.next();ft!==null&&!zt.done;xt++,zt=he.next()){ft.index>xt?(bn=ft,ft=null):bn=ft.sibling;var $r=Ie(de,ft,zt.value,ze);if($r===null){ft===null&&(ft=bn);break}n&&ft&&$r.alternate===null&&i(de,ft),Q=m($r,Q,xt),dt===null?lt=$r:dt.sibling=$r,dt=$r,ft=bn}if(zt.done)return o(de,ft),en&&us(de,xt),lt;if(ft===null){for(;!zt.done;xt++,zt=he.next())zt=ke(de,zt.value,ze),zt!==null&&(Q=m(zt,Q,xt),dt===null?lt=zt:dt.sibling=zt,dt=zt);return en&&us(de,xt),lt}for(ft=u(de,ft);!zt.done;xt++,zt=he.next())zt=Je(ft,de,xt,zt.value,ze),zt!==null&&(n&&zt.alternate!==null&&ft.delete(zt.key===null?xt:zt.key),Q=m(zt,Q,xt),dt===null?lt=zt:dt.sibling=zt,dt=zt);return n&&ft.forEach(function(f_){return i(de,f_)}),en&&us(de,xt),lt}function cn(de,Q,he,ze){if(typeof he=="object"&&he!==null&&he.type===U&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case I:e:{for(var lt=he.key,dt=Q;dt!==null;){if(dt.key===lt){if(lt=he.type,lt===U){if(dt.tag===7){o(de,dt.sibling),Q=f(dt,he.props.children),Q.return=de,de=Q;break e}}else if(dt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ge&&Cp(lt)===dt.type){o(de,dt.sibling),Q=f(dt,he.props),Q.ref=Ka(de,dt,he),Q.return=de,de=Q;break e}o(de,dt);break}else i(de,dt);dt=dt.sibling}he.type===U?(Q=ys(he.props.children,de.mode,ze,he.key),Q.return=de,de=Q):(ze=Rl(he.type,he.key,he.props,null,de.mode,ze),ze.ref=Ka(de,Q,he),ze.return=de,de=ze)}return T(de);case L:e:{for(dt=he.key;Q!==null;){if(Q.key===dt)if(Q.tag===4&&Q.stateNode.containerInfo===he.containerInfo&&Q.stateNode.implementation===he.implementation){o(de,Q.sibling),Q=f(Q,he.children||[]),Q.return=de,de=Q;break e}else{o(de,Q);break}else i(de,Q);Q=Q.sibling}Q=ld(he,de.mode,ze),Q.return=de,de=Q}return T(de);case ge:return dt=he._init,cn(de,Q,dt(he._payload),ze)}if(Vt(he))return rt(de,Q,he,ze);if(H(he))return at(de,Q,he,ze);sl(de,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,Q!==null&&Q.tag===6?(o(de,Q.sibling),Q=f(Q,he),Q.return=de,de=Q):(o(de,Q),Q=od(he,de.mode,ze),Q.return=de,de=Q),T(de)):o(de,Q)}return cn}var ea=Rp(!0),Pp=Rp(!1),al=Or(null),ol=null,ta=null,vu=null;function yu(){vu=ta=ol=null}function _u(n){var i=al.current;Qt(al),n._currentValue=i}function xu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function na(n,i){ol=n,vu=ta=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ei=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(vu!==n)if(n={context:n,memoizedValue:i,next:null},ta===null){if(ol===null)throw Error(t(308));ta=n,ol.dependencies={lanes:0,firstContext:n}}else ta=ta.next=n;return i}var ds=null;function Su(n){ds===null?ds=[n]:ds.push(n)}function Lp(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Su(i)):(o.next=f.next,f.next=o),i.interleaved=o,fr(n,u)}function fr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var zr=!1;function Mu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Gr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,fr(n,o)}return f=u.interleaved,f===null?(i.next=i,Su(u)):(i.next=f.next,f.next=i),u.interleaved=i,fr(n,o)}function ll(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,vn(n,o)}}function Np(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function cl(n,i,o,u){var f=n.updateQueue;zr=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var X=B,ve=X.next;X.next=null,T===null?m=ve:T.next=ve,T=X;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,B=Fe.lastBaseUpdate,B!==T&&(B===null?Fe.firstBaseUpdate=ve:B.next=ve,Fe.lastBaseUpdate=X))}if(m!==null){var ke=f.baseState;T=0,Fe=ve=X=null,B=m;do{var Ie=B.lane,Je=B.eventTime;if((u&Ie)===Ie){Fe!==null&&(Fe=Fe.next={eventTime:Je,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var rt=n,at=B;switch(Ie=i,Je=o,at.tag){case 1:if(rt=at.payload,typeof rt=="function"){ke=rt.call(Je,ke,Ie);break e}ke=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=at.payload,Ie=typeof rt=="function"?rt.call(Je,ke,Ie):rt,Ie==null)break e;ke=j({},ke,Ie);break e;case 2:zr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ie=f.effects,Ie===null?f.effects=[B]:Ie.push(B))}else Je={eventTime:Je,lane:Ie,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Fe===null?(ve=Fe=Je,X=ke):Fe=Fe.next=Je,T|=Ie;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Ie=B,B=Ie.next,Ie.next=null,f.lastBaseUpdate=Ie,f.shared.pending=null}}while(!0);if(Fe===null&&(X=ke),f.baseState=X,f.firstBaseUpdate=ve,f.lastBaseUpdate=Fe,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);ps|=T,n.lanes=T,n.memoizedState=ke}}function Dp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Ja={},$i=Or(Ja),Qa=Or(Ja),eo=Or(Ja);function fs(n){if(n===Ja)throw Error(t(174));return n}function Eu(n,i){switch(qt(eo,i),qt(Qa,n),qt($i,Ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Qt($i),qt($i,i)}function ia(){Qt($i),Qt(Qa),Qt(eo)}function Up(n){fs(eo.current);var i=fs($i.current),o=M(i,n.type);i!==o&&(qt(Qa,n),qt($i,o))}function wu(n){Qa.current===n&&(Qt($i),Qt(Qa))}var rn=Or(0);function ul(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Au=[];function Tu(){for(var n=0;n<Au.length;n++)Au[n]._workInProgressVersionPrimary=null;Au.length=0}var dl=b.ReactCurrentDispatcher,bu=b.ReactCurrentBatchConfig,hs=0,sn=null,yn=null,An=null,fl=!1,to=!1,no=0,Dy=0;function Fn(){throw Error(t(321))}function Cu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ri(n[o],i[o]))return!1;return!0}function Ru(n,i,o,u,f,m){if(hs=m,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,dl.current=n===null||n.memoizedState===null?ky:By,n=o(u,f),to){m=0;do{if(to=!1,no=0,25<=m)throw Error(t(301));m+=1,An=yn=null,i.updateQueue=null,dl.current=zy,n=o(u,f)}while(to)}if(dl.current=ml,i=yn!==null&&yn.next!==null,hs=0,An=yn=sn=null,fl=!1,i)throw Error(t(300));return n}function Pu(){var n=no!==0;return no=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?sn.memoizedState=An=n:An=An.next=n,An}function _i(){if(yn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=yn.next;var i=An===null?sn.memoizedState:An.next;if(i!==null)An=i,yn=n;else{if(n===null)throw Error(t(310));yn=n,n={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},An===null?sn.memoizedState=An=n:An=An.next=n}return An}function io(n,i){return typeof i=="function"?i(n):i}function Lu(n){var i=_i(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=yn,f=u.baseQueue,m=o.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}u.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,u=u.baseState;var B=T=null,X=null,ve=m;do{var Fe=ve.lane;if((hs&Fe)===Fe)X!==null&&(X=X.next={lane:0,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null}),u=ve.hasEagerState?ve.eagerState:n(u,ve.action);else{var ke={lane:Fe,action:ve.action,hasEagerState:ve.hasEagerState,eagerState:ve.eagerState,next:null};X===null?(B=X=ke,T=u):X=X.next=ke,sn.lanes|=Fe,ps|=Fe}ve=ve.next}while(ve!==null&&ve!==m);X===null?T=u:X.next=B,Ri(u,i.memoizedState)||(ei=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=X,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do m=f.lane,sn.lanes|=m,ps|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Iu(n){var i=_i(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do m=n(m,T.action),T=T.next;while(T!==f);Ri(m,i.memoizedState)||(ei=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Fp(){}function Op(n,i){var o=sn,u=_i(),f=i(),m=!Ri(u.memoizedState,f);if(m&&(u.memoizedState=f,ei=!0),u=u.queue,Nu(zp.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||An!==null&&An.memoizedState.tag&1){if(o.flags|=2048,ro(9,Bp.bind(null,o,u,f,i),void 0,null),Tn===null)throw Error(t(349));(hs&30)!==0||kp(o,i,f)}return f}function kp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Bp(n,i,o,u){i.value=o,i.getSnapshot=u,Gp(i)&&Vp(n)}function zp(n,i,o){return o(function(){Gp(i)&&Vp(n)})}function Gp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ri(n,o)}catch{return!0}}function Vp(n){var i=fr(n,1);i!==null&&Di(i,n,1,-1)}function Hp(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:n},i.queue=n,n=n.dispatch=Oy.bind(null,sn,n),[i.memoizedState,n]}function ro(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Wp(){return _i().memoizedState}function hl(n,i,o,u){var f=Zi();sn.flags|=n,f.memoizedState=ro(1|i,o,void 0,u===void 0?null:u)}function pl(n,i,o,u){var f=_i();u=u===void 0?null:u;var m=void 0;if(yn!==null){var T=yn.memoizedState;if(m=T.destroy,u!==null&&Cu(u,T.deps)){f.memoizedState=ro(i,o,m,u);return}}sn.flags|=n,f.memoizedState=ro(1|i,o,m,u)}function Xp(n,i){return hl(8390656,8,n,i)}function Nu(n,i){return pl(2048,8,n,i)}function jp(n,i){return pl(4,2,n,i)}function Yp(n,i){return pl(4,4,n,i)}function $p(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Zp(n,i,o){return o=o!=null?o.concat([n]):null,pl(4,4,$p.bind(null,i,n),o)}function Du(){}function qp(n,i){var o=_i();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Cu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Kp(n,i){var o=_i();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Cu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Jp(n,i,o){return(hs&21)===0?(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=o):(Ri(o,i)||(o=nn(),sn.lanes|=o,ps|=o,n.baseState=!0),i)}function Uy(n,i){var o=ut;ut=o!==0&&4>o?o:4,n(!0);var u=bu.transition;bu.transition={};try{n(!1),i()}finally{ut=o,bu.transition=u}}function Qp(){return _i().memoizedState}function Fy(n,i,o){var u=Xr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},em(n))tm(i,o);else if(o=Lp(n,i,o,u),o!==null){var f=jn();Di(o,n,u,f),nm(o,i,u)}}function Oy(n,i,o){var u=Xr(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(em(n))tm(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,o);if(f.hasEagerState=!0,f.eagerState=B,Ri(B,T)){var X=i.interleaved;X===null?(f.next=f,Su(i)):(f.next=X.next,X.next=f),i.interleaved=f;return}}catch{}finally{}o=Lp(n,i,f,u),o!==null&&(f=jn(),Di(o,n,u,f),nm(o,i,u))}}function em(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function tm(n,i){to=fl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function nm(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,vn(n,o)}}var ml={readContext:yi,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},ky={readContext:yi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Xp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,hl(4194308,4,$p.bind(null,i,n),o)},useLayoutEffect:function(n,i){return hl(4194308,4,n,i)},useInsertionEffect:function(n,i){return hl(4,2,n,i)},useMemo:function(n,i){var o=Zi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Zi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Fy.bind(null,sn,n),[u.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:Hp,useDebugValue:Du,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Hp(!1),i=n[0];return n=Uy.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=sn,f=Zi();if(en){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Tn===null)throw Error(t(349));(hs&30)!==0||kp(u,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Xp(zp.bind(null,u,m,n),[n]),u.flags|=2048,ro(9,Bp.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Zi(),i=Tn.identifierPrefix;if(en){var o=dr,u=ur;o=(u&~(1<<32-He(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=no++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Dy++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},By={readContext:yi,useCallback:qp,useContext:yi,useEffect:Nu,useImperativeHandle:Zp,useInsertionEffect:jp,useLayoutEffect:Yp,useMemo:Kp,useReducer:Lu,useRef:Wp,useState:function(){return Lu(io)},useDebugValue:Du,useDeferredValue:function(n){var i=_i();return Jp(i,yn.memoizedState,n)},useTransition:function(){var n=Lu(io)[0],i=_i().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:Op,useId:Qp,unstable_isNewReconciler:!1},zy={readContext:yi,useCallback:qp,useContext:yi,useEffect:Nu,useImperativeHandle:Zp,useInsertionEffect:jp,useLayoutEffect:Yp,useMemo:Kp,useReducer:Iu,useRef:Wp,useState:function(){return Iu(io)},useDebugValue:Du,useDeferredValue:function(n){var i=_i();return yn===null?i.memoizedState=n:Jp(i,yn.memoizedState,n)},useTransition:function(){var n=Iu(io)[0],i=_i().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:Op,useId:Qp,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Uu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:j({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var gl={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=jn(),f=Xr(n),m=hr(u,f);m.payload=i,o!=null&&(m.callback=o),i=Gr(n,m,f),i!==null&&(Di(i,n,f,u),ll(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=jn(),f=Xr(n),m=hr(u,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Gr(n,m,f),i!==null&&(Di(i,n,f,u),ll(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=jn(),u=Xr(n),f=hr(o,u);f.tag=2,i!=null&&(f.callback=i),i=Gr(n,f,u),i!==null&&(Di(i,n,u,o),ll(i,n,u))}};function im(n,i,o,u,f,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!Wa(o,u)||!Wa(f,m):!0}function rm(n,i,o){var u=!1,f=kr,m=i.contextType;return typeof m=="object"&&m!==null?m=yi(m):(f=Qn(i)?ls:Un.current,u=i.contextTypes,m=(u=u!=null)?qs(n,f):kr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function sm(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&gl.enqueueReplaceState(i,i.state,null)}function Fu(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Mu(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=yi(m):(m=Qn(i)?ls:Un.current,f.context=qs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Uu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&gl.enqueueReplaceState(f,f.state,null),cl(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ra(n,i){try{var o="",u=i;do o+=$e(u),u=u.return;while(u);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Ou(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ku(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Gy=typeof WeakMap=="function"?WeakMap:Map;function am(n,i,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){El||(El=!0,Qu=u),ku(n,i)},o}function om(n,i,o){o=hr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){ku(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ku(n,i),typeof u!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function lm(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Gy;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=t_.bind(null,n,i,o),i.then(n,n))}function cm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function um(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=hr(-1,1),i.tag=2,Gr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Vy=b.ReactCurrentOwner,ei=!1;function Xn(n,i,o,u){i.child=n===null?Pp(i,null,o,u):ea(i,n.child,o,u)}function dm(n,i,o,u,f){o=o.render;var m=i.ref;return na(i,f),u=Ru(n,i,o,u,m,f),o=Pu(),n!==null&&!ei?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,pr(n,i,f)):(en&&o&&fu(i),i.flags|=1,Xn(n,i,u,f),i.child)}function fm(n,i,o,u,f){if(n===null){var m=o.type;return typeof m=="function"&&!ad(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,hm(n,i,m,u,f)):(n=Rl(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(T,u)&&n.ref===i.ref)return pr(n,i,f)}return i.flags|=1,n=Yr(m,u),n.ref=i.ref,n.return=i,i.child=n}function hm(n,i,o,u,f){if(n!==null){var m=n.memoizedProps;if(Wa(m,u)&&n.ref===i.ref)if(ei=!1,i.pendingProps=u=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(ei=!0);else return i.lanes=n.lanes,pr(n,i,f)}return Bu(n,i,o,u,f)}function pm(n,i,o){var u=i.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(aa,ui),ui|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(aa,ui),ui|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,qt(aa,ui),ui|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,qt(aa,ui),ui|=u;return Xn(n,i,f,o),i.child}function mm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Bu(n,i,o,u,f){var m=Qn(o)?ls:Un.current;return m=qs(i,m),na(i,f),o=Ru(n,i,o,u,m,f),u=Pu(),n!==null&&!ei?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,pr(n,i,f)):(en&&u&&fu(i),i.flags|=1,Xn(n,i,o,f),i.child)}function gm(n,i,o,u,f){if(Qn(o)){var m=!0;el(i)}else m=!1;if(na(i,f),i.stateNode===null)yl(n,i),rm(i,o,u),Fu(i,o,u,f),u=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var X=T.context,ve=o.contextType;typeof ve=="object"&&ve!==null?ve=yi(ve):(ve=Qn(o)?ls:Un.current,ve=qs(i,ve));var Fe=o.getDerivedStateFromProps,ke=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function";ke||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==u||X!==ve)&&sm(i,T,u,ve),zr=!1;var Ie=i.memoizedState;T.state=Ie,cl(i,u,T,f),X=i.memoizedState,B!==u||Ie!==X||Jn.current||zr?(typeof Fe=="function"&&(Uu(i,o,Fe,u),X=i.memoizedState),(B=zr||im(i,o,B,u,Ie,X,ve))?(ke||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=X),T.props=u,T.state=X,T.context=ve,u=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,Ip(n,i),B=i.memoizedProps,ve=i.type===i.elementType?B:Li(i.type,B),T.props=ve,ke=i.pendingProps,Ie=T.context,X=o.contextType,typeof X=="object"&&X!==null?X=yi(X):(X=Qn(o)?ls:Un.current,X=qs(i,X));var Je=o.getDerivedStateFromProps;(Fe=typeof Je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==ke||Ie!==X)&&sm(i,T,u,X),zr=!1,Ie=i.memoizedState,T.state=Ie,cl(i,u,T,f);var rt=i.memoizedState;B!==ke||Ie!==rt||Jn.current||zr?(typeof Je=="function"&&(Uu(i,o,Je,u),rt=i.memoizedState),(ve=zr||im(i,o,ve,u,Ie,rt,X)||!1)?(Fe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,rt,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,rt,X)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),T.props=u,T.state=rt,T.context=X,u=ve):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),u=!1)}return zu(n,i,o,u,m,f)}function zu(n,i,o,u,f,m){mm(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return f&&Sp(i,o,!1),pr(n,i,m);u=i.stateNode,Vy.current=i;var B=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=ea(i,n.child,null,m),i.child=ea(i,null,B,m)):Xn(n,i,B,m),i.memoizedState=u.state,f&&Sp(i,o,!0),i.child}function vm(n){var i=n.stateNode;i.pendingContext?_p(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_p(n,i.context,!1),Eu(n,i.containerInfo)}function ym(n,i,o,u,f){return Qs(),gu(f),i.flags|=256,Xn(n,i,o,u),i.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,i,o){var u=i.pendingProps,f=rn.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),qt(rn,f&1),n===null)return mu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,m?(u=i.mode,m=i.child,T={mode:"hidden",children:T},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=Pl(T,u,0,null),n=ys(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Vu(o),i.memoizedState=Gu,n):Hu(i,T));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return Hy(n,i,T,u,B,f,o);if(m){m=u.fallback,T=i.mode,f=n.child,B=f.sibling;var X={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=X,i.deletions=null):(u=Yr(f,X),u.subtreeFlags=f.subtreeFlags&14680064),B!==null?m=Yr(B,m):(m=ys(m,T,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,T=n.child.memoizedState,T=T===null?Vu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=Gu,u}return m=n.child,n=m.sibling,u=Yr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Hu(n,i){return i=Pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function vl(n,i,o,u){return u!==null&&gu(u),ea(i,n.child,null,o),n=Hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Hy(n,i,o,u,f,m,T){if(o)return i.flags&256?(i.flags&=-257,u=Ou(Error(t(422))),vl(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=Pl({mode:"visible",children:u.children},f,0,null),m=ys(m,f,T,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&ea(i,n.child,null,T),i.child.memoizedState=Vu(T),i.memoizedState=Gu,m);if((i.mode&1)===0)return vl(n,i,T,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var B=u.dgst;return u=B,m=Error(t(419)),u=Ou(m,u,void 0),vl(n,i,T,u)}if(B=(T&n.childLanes)!==0,ei||B){if(u=Tn,u!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|T))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,fr(n,f),Di(u,n,f,-1))}return sd(),u=Ou(Error(t(421))),vl(n,i,T,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=n_.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,ci=Fr(f.nextSibling),li=i,en=!0,Pi=null,n!==null&&(gi[vi++]=ur,gi[vi++]=dr,gi[vi++]=cs,ur=n.id,dr=n.overflow,cs=i),i=Hu(i,u.children),i.flags|=4096,i)}function xm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),xu(n.return,i,o)}function Wu(n,i,o,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Sm(n,i,o){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(Xn(n,i,u.children,o),u=rn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xm(n,o,i);else if(n.tag===19)xm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(qt(rn,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&ul(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Wu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&ul(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Wu(i,!0,o,null,m);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ps|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Yr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Yr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Wy(n,i,o){switch(i.tag){case 3:vm(i),Qs();break;case 5:Up(i);break;case 1:Qn(i.type)&&el(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;qt(al,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(qt(rn,rn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?_m(n,i,o):(qt(rn,rn.current&1),n=pr(n,i,o),n!==null?n.sibling:null);qt(rn,rn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Sm(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qt(rn,rn.current),u)break;return null;case 22:case 23:return i.lanes=0,pm(n,i,o)}return pr(n,i,o)}var Mm,Xu,Em,wm;Mm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xu=function(){},Em=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,fs($i.current);var m=null;switch(o){case"input":f=_t(n,f),u=_t(n,u),m=[];break;case"select":f=j({},f,{value:void 0}),u=j({},u,{value:void 0}),m=[];break;case"textarea":f=Nt(n,f),u=Nt(n,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ko)}Ve(o,u);var T;o=null;for(ve in f)if(!u.hasOwnProperty(ve)&&f.hasOwnProperty(ve)&&f[ve]!=null)if(ve==="style"){var B=f[ve];for(T in B)B.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ve!=="dangerouslySetInnerHTML"&&ve!=="children"&&ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&ve!=="autoFocus"&&(a.hasOwnProperty(ve)?m||(m=[]):(m=m||[]).push(ve,null));for(ve in u){var X=u[ve];if(B=f!=null?f[ve]:void 0,u.hasOwnProperty(ve)&&X!==B&&(X!=null||B!=null))if(ve==="style")if(B){for(T in B)!B.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in X)X.hasOwnProperty(T)&&B[T]!==X[T]&&(o||(o={}),o[T]=X[T])}else o||(m||(m=[]),m.push(ve,o)),o=X;else ve==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(m=m||[]).push(ve,X)):ve==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(ve,""+X):ve!=="suppressContentEditableWarning"&&ve!=="suppressHydrationWarning"&&(a.hasOwnProperty(ve)?(X!=null&&ve==="onScroll"&&Jt("scroll",n),m||B===X||(m=[])):(m=m||[]).push(ve,X))}o&&(m=m||[]).push("style",o);var ve=m;(i.updateQueue=ve)&&(i.flags|=4)}},wm=function(n,i,o,u){o!==u&&(i.flags|=4)};function so(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function On(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Xy(n,i,o){var u=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(i),null;case 1:return Qn(i.type)&&Qo(),On(i),null;case 3:return u=i.stateNode,ia(),Qt(Jn),Qt(Un),Tu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(rl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pi!==null&&(nd(Pi),Pi=null))),Xu(n,i),On(i),null;case 5:wu(i);var f=fs(eo.current);if(o=i.type,n!==null&&i.stateNode!=null)Em(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return On(i),null}if(n=fs($i.current),rl(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Yi]=i,u[Za]=m,n=(i.mode&1)!==0,o){case"dialog":Jt("cancel",u),Jt("close",u);break;case"iframe":case"object":case"embed":Jt("load",u);break;case"video":case"audio":for(f=0;f<ja.length;f++)Jt(ja[f],u);break;case"source":Jt("error",u);break;case"img":case"image":case"link":Jt("error",u),Jt("load",u);break;case"details":Jt("toggle",u);break;case"input":Mt(u,m),Jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Jt("invalid",u);break;case"textarea":$(u,m),Jt("invalid",u)}Ve(o,m),f=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?u.textContent!==B&&(m.suppressHydrationWarning!==!0&&qo(u.textContent,B,n),f=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&qo(u.textContent,B,n),f=["children",""+B]):a.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Jt("scroll",u)}switch(o){case"input":Be(u),Gt(u,m,!0);break;case"textarea":Be(u),Pt(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ko)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=O(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[Yi]=i,n[Za]=u,Mm(n,i,!1,!1),i.stateNode=n;e:{switch(T=te(o,u),o){case"dialog":Jt("cancel",n),Jt("close",n),f=u;break;case"iframe":case"object":case"embed":Jt("load",n),f=u;break;case"video":case"audio":for(f=0;f<ja.length;f++)Jt(ja[f],n);f=u;break;case"source":Jt("error",n),f=u;break;case"img":case"image":case"link":Jt("error",n),Jt("load",n),f=u;break;case"details":Jt("toggle",n),f=u;break;case"input":Mt(n,u),f=_t(n,u),Jt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=j({},u,{value:void 0}),Jt("invalid",n);break;case"textarea":$(n,u),f=Nt(n,u),Jt("invalid",n);break;default:f=u}Ve(o,f),B=f;for(m in B)if(B.hasOwnProperty(m)){var X=B[m];m==="style"?_e(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ue(n,X)):m==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&ye(n,X):typeof X=="number"&&ye(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?X!=null&&m==="onScroll"&&Jt("scroll",n):X!=null&&F(n,m,X,T))}switch(o){case"input":Be(n),Gt(n,u,!1);break;case"textarea":Be(n),Pt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ne(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?st(n,!!u.multiple,m,!1):u.defaultValue!=null&&st(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ko)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return On(i),null;case 6:if(n&&i.stateNode!=null)wm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=fs(eo.current),fs($i.current),rl(i)){if(u=i.stateNode,o=i.memoizedProps,u[Yi]=i,(m=u.nodeValue!==o)&&(n=li,n!==null))switch(n.tag){case 3:qo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qo(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Yi]=i,i.stateNode=u}return On(i),null;case 13:if(Qt(rn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ci!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bp(),Qs(),i.flags|=98560,m=!1;else if(m=rl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Yi]=i}else Qs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;On(i),m=!1}else Pi!==null&&(nd(Pi),Pi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?_n===0&&(_n=3):sd())),i.updateQueue!==null&&(i.flags|=4),On(i),null);case 4:return ia(),Xu(n,i),n===null&&Ya(i.stateNode.containerInfo),On(i),null;case 10:return _u(i.type._context),On(i),null;case 17:return Qn(i.type)&&Qo(),On(i),null;case 19:if(Qt(rn),m=i.memoizedState,m===null)return On(i),null;if(u=(i.flags&128)!==0,T=m.rendering,T===null)if(u)so(m,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=ul(n),T!==null){for(i.flags|=128,so(m,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qt(rn,rn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Zt()>oa&&(i.flags|=128,u=!0,so(m,!1),i.lanes=4194304)}else{if(!u)if(n=ul(T),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),so(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!en)return On(i),null}else 2*Zt()-m.renderingStartTime>oa&&o!==1073741824&&(i.flags|=128,u=!0,so(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Zt(),i.sibling=null,o=rn.current,qt(rn,u?o&1|2:o&1),i):(On(i),null);case 22:case 23:return rd(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ui&1073741824)!==0&&(On(i),i.subtreeFlags&6&&(i.flags|=8192)):On(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function jy(n,i){switch(hu(i),i.tag){case 1:return Qn(i.type)&&Qo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ia(),Qt(Jn),Qt(Un),Tu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return wu(i),null;case 13:if(Qt(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qt(rn),null;case 4:return ia(),null;case 10:return _u(i.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var _l=!1,kn=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,tt=null;function sa(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){on(n,i,u)}else o.current=null}function ju(n,i,o){try{o()}catch(u){on(n,i,u)}}var Am=!1;function $y(n,i){if(ru=Bo,n=ip(),qc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,B=-1,X=-1,ve=0,Fe=0,ke=n,Ie=null;t:for(;;){for(var Je;ke!==o||f!==0&&ke.nodeType!==3||(B=T+f),ke!==m||u!==0&&ke.nodeType!==3||(X=T+u),ke.nodeType===3&&(T+=ke.nodeValue.length),(Je=ke.firstChild)!==null;)Ie=ke,ke=Je;for(;;){if(ke===n)break t;if(Ie===o&&++ve===f&&(B=T),Ie===m&&++Fe===u&&(X=T),(Je=ke.nextSibling)!==null)break;ke=Ie,Ie=ke.parentNode}ke=Je}o=B===-1||X===-1?null:{start:B,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(su={focusedElem:n,selectionRange:o},Bo=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var at=rt.memoizedProps,cn=rt.memoizedState,de=i.stateNode,Q=de.getSnapshotBeforeUpdate(i.elementType===i.type?at:Li(i.type,at),cn);de.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){on(i,i.return,ze)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return rt=Am,Am=!1,rt}function ao(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&ju(i,o,m)}f=f.next}while(f!==u)}}function xl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Yu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Tm(n){var i=n.alternate;i!==null&&(n.alternate=null,Tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[Za],delete i[cu],delete i[Py],delete i[Ly])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ko));else if(u!==4&&(n=n.child,n!==null))for($u(n,i,o),n=n.sibling;n!==null;)$u(n,i,o),n=n.sibling}function Zu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Zu(n,i,o),n=n.sibling;n!==null;)Zu(n,i,o),n=n.sibling}var Ln=null,Ii=!1;function Vr(n,i,o){for(o=o.child;o!==null;)Rm(n,i,o),o=o.sibling}function Rm(n,i,o){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(ce,o)}catch{}switch(o.tag){case 5:kn||sa(o,i);case 6:var u=Ln,f=Ii;Ln=null,Vr(n,i,o),Ln=u,Ii=f,Ln!==null&&(Ii?(n=Ln,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Ln.removeChild(o.stateNode));break;case 18:Ln!==null&&(Ii?(n=Ln,o=o.stateNode,n.nodeType===8?lu(n.parentNode,o):n.nodeType===1&&lu(n,o),ka(n)):lu(Ln,o.stateNode));break;case 4:u=Ln,f=Ii,Ln=o.stateNode.containerInfo,Ii=!0,Vr(n,i,o),Ln=u,Ii=f;break;case 0:case 11:case 14:case 15:if(!kn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&ju(o,i,T),f=f.next}while(f!==u)}Vr(n,i,o);break;case 1:if(!kn&&(sa(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){on(o,i,B)}Vr(n,i,o);break;case 21:Vr(n,i,o);break;case 22:o.mode&1?(kn=(u=kn)||o.memoizedState!==null,Vr(n,i,o),kn=u):Vr(n,i,o);break;default:Vr(n,i,o)}}function Pm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Yy),i.forEach(function(u){var f=i_.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function Ni(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Ln=B.stateNode,Ii=!1;break e;case 3:Ln=B.stateNode.containerInfo,Ii=!0;break e;case 4:Ln=B.stateNode.containerInfo,Ii=!0;break e}B=B.return}if(Ln===null)throw Error(t(160));Rm(m,T,f),Ln=null,Ii=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(ve){on(f,i,ve)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lm(i,n),i=i.sibling}function Lm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ni(i,n),qi(n),u&4){try{ao(3,n,n.return),xl(3,n)}catch(at){on(n,n.return,at)}try{ao(5,n,n.return)}catch(at){on(n,n.return,at)}}break;case 1:Ni(i,n),qi(n),u&512&&o!==null&&sa(o,o.return);break;case 5:if(Ni(i,n),qi(n),u&512&&o!==null&&sa(o,o.return),n.flags&32){var f=n.stateNode;try{ye(f,"")}catch(at){on(n,n.return,at)}}if(u&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,B=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&Ut(f,m),te(B,T);var ve=te(B,m);for(T=0;T<X.length;T+=2){var Fe=X[T],ke=X[T+1];Fe==="style"?_e(f,ke):Fe==="dangerouslySetInnerHTML"?ue(f,ke):Fe==="children"?ye(f,ke):F(f,Fe,ke,ve)}switch(B){case"input":mt(f,m);break;case"textarea":kt(f,m);break;case"select":var Ie=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Je=m.value;Je!=null?st(f,!!m.multiple,Je,!1):Ie!==!!m.multiple&&(m.defaultValue!=null?st(f,!!m.multiple,m.defaultValue,!0):st(f,!!m.multiple,m.multiple?[]:"",!1))}f[Za]=m}catch(at){on(n,n.return,at)}}break;case 6:if(Ni(i,n),qi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(at){on(n,n.return,at)}}break;case 3:if(Ni(i,n),qi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ka(i.containerInfo)}catch(at){on(n,n.return,at)}break;case 4:Ni(i,n),qi(n);break;case 13:Ni(i,n),qi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Ju=Zt())),u&4&&Pm(n);break;case 22:if(Fe=o!==null&&o.memoizedState!==null,n.mode&1?(kn=(ve=kn)||Fe,Ni(i,n),kn=ve):Ni(i,n),qi(n),u&8192){if(ve=n.memoizedState!==null,(n.stateNode.isHidden=ve)&&!Fe&&(n.mode&1)!==0)for(tt=n,Fe=n.child;Fe!==null;){for(ke=tt=Fe;tt!==null;){switch(Ie=tt,Je=Ie.child,Ie.tag){case 0:case 11:case 14:case 15:ao(4,Ie,Ie.return);break;case 1:sa(Ie,Ie.return);var rt=Ie.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Ie,o=Ie.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(at){on(u,o,at)}}break;case 5:sa(Ie,Ie.return);break;case 22:if(Ie.memoizedState!==null){Dm(ke);continue}}Je!==null?(Je.return=Ie,tt=Je):Dm(ke)}Fe=Fe.sibling}e:for(Fe=null,ke=n;;){if(ke.tag===5){if(Fe===null){Fe=ke;try{f=ke.stateNode,ve?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=ke.stateNode,X=ke.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=oe("display",T))}catch(at){on(n,n.return,at)}}}else if(ke.tag===6){if(Fe===null)try{ke.stateNode.nodeValue=ve?"":ke.memoizedProps}catch(at){on(n,n.return,at)}}else if((ke.tag!==22&&ke.tag!==23||ke.memoizedState===null||ke===n)&&ke.child!==null){ke.child.return=ke,ke=ke.child;continue}if(ke===n)break e;for(;ke.sibling===null;){if(ke.return===null||ke.return===n)break e;Fe===ke&&(Fe=null),ke=ke.return}Fe===ke&&(Fe=null),ke.sibling.return=ke.return,ke=ke.sibling}}break;case 19:Ni(i,n),qi(n),u&4&&Pm(n);break;case 21:break;default:Ni(i,n),qi(n)}}function qi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(bm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ye(f,""),u.flags&=-33);var m=Cm(n);Zu(n,m,f);break;case 3:case 4:var T=u.stateNode.containerInfo,B=Cm(n);$u(n,B,T);break;default:throw Error(t(161))}}catch(X){on(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Zy(n,i,o){tt=n,Im(n)}function Im(n,i,o){for(var u=(n.mode&1)!==0;tt!==null;){var f=tt,m=f.child;if(f.tag===22&&u){var T=f.memoizedState!==null||_l;if(!T){var B=f.alternate,X=B!==null&&B.memoizedState!==null||kn;B=_l;var ve=kn;if(_l=T,(kn=X)&&!ve)for(tt=f;tt!==null;)T=tt,X=T.child,T.tag===22&&T.memoizedState!==null?Um(f):X!==null?(X.return=T,tt=X):Um(f);for(;m!==null;)tt=m,Im(m),m=m.sibling;tt=f,_l=B,kn=ve}Nm(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,tt=m):Nm(n)}}function Nm(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:kn||xl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!kn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Li(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dp(i,m,u);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dp(i,T,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ve=i.alternate;if(ve!==null){var Fe=ve.memoizedState;if(Fe!==null){var ke=Fe.dehydrated;ke!==null&&ka(ke)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}kn||i.flags&512&&Yu(i)}catch(Ie){on(i,i.return,Ie)}}if(i===n){tt=null;break}if(o=i.sibling,o!==null){o.return=i.return,tt=o;break}tt=i.return}}function Dm(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var o=i.sibling;if(o!==null){o.return=i.return,tt=o;break}tt=i.return}}function Um(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{xl(4,i)}catch(X){on(i,o,X)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(X){on(i,f,X)}}var m=i.return;try{Yu(i)}catch(X){on(i,m,X)}break;case 5:var T=i.return;try{Yu(i)}catch(X){on(i,T,X)}}}catch(X){on(i,i.return,X)}if(i===n){tt=null;break}var B=i.sibling;if(B!==null){B.return=i.return,tt=B;break}tt=i.return}}var qy=Math.ceil,Sl=b.ReactCurrentDispatcher,qu=b.ReactCurrentOwner,xi=b.ReactCurrentBatchConfig,Ft=0,Tn=null,hn=null,In=0,ui=0,aa=Or(0),_n=0,oo=null,ps=0,Ml=0,Ku=0,lo=null,ti=null,Ju=0,oa=1/0,mr=null,El=!1,Qu=null,Hr=null,wl=!1,Wr=null,Al=0,co=0,ed=null,Tl=-1,bl=0;function jn(){return(Ft&6)!==0?Zt():Tl!==-1?Tl:Tl=Zt()}function Xr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&In!==0?In&-In:Ny.transition!==null?(bl===0&&(bl=nn()),bl):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Oh(n.type)),n)}function Di(n,i,o,u){if(50<co)throw co=0,ed=null,Error(t(185));Yt(n,o,u),((Ft&2)===0||n!==Tn)&&(n===Tn&&((Ft&2)===0&&(Ml|=o),_n===4&&jr(n,In)),ni(n,u),o===1&&Ft===0&&(i.mode&1)===0&&(oa=Zt()+500,tl&&Br()))}function ni(n,i){var o=n.callbackNode;ot(n,i);var u=nt(n,n===Tn?In:0);if(u===0)o!==null&&Hn(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Hn(o),i===1)n.tag===0?Iy(Om.bind(null,n)):Mp(Om.bind(null,n)),Cy(function(){(Ft&6)===0&&Br()}),o=null;else{switch(fn(u)){case 1:o=Rr;break;case 4:o=Pr;break;case 16:o=R;break;case 536870912:o=me;break;default:o=R}o=Xm(o,Fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Fm(n,i){if(Tl=-1,bl=0,(Ft&6)!==0)throw Error(t(327));var o=n.callbackNode;if(la()&&n.callbackNode!==o)return null;var u=nt(n,n===Tn?In:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Cl(n,u);else{i=u;var f=Ft;Ft|=2;var m=Bm();(Tn!==n||In!==i)&&(mr=null,oa=Zt()+500,gs(n,i));do try{Qy();break}catch(B){km(n,B)}while(!0);yu(),Sl.current=m,Ft=f,hn!==null?i=0:(Tn=null,In=0,i=_n)}if(i!==0){if(i===2&&(f=ct(n),f!==0&&(u=f,i=td(n,f))),i===1)throw o=oo,gs(n,0),jr(n,u),ni(n,Zt()),o;if(i===6)jr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!Ky(f)&&(i=Cl(n,u),i===2&&(m=ct(n),m!==0&&(u=m,i=td(n,m))),i===1))throw o=oo,gs(n,0),jr(n,u),ni(n,Zt()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:vs(n,ti,mr);break;case 3:if(jr(n,u),(u&130023424)===u&&(i=Ju+500-Zt(),10<i)){if(nt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){jn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=ou(vs.bind(null,n,ti,mr),i);break}vs(n,ti,mr);break;case 4:if(jr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var T=31-He(u);m=1<<T,T=i[T],T>f&&(f=T),u&=~m}if(u=f,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*qy(u/1960))-u,10<u){n.timeoutHandle=ou(vs.bind(null,n,ti,mr),u);break}vs(n,ti,mr);break;case 5:vs(n,ti,mr);break;default:throw Error(t(329))}}}return ni(n,Zt()),n.callbackNode===o?Fm.bind(null,n):null}function td(n,i){var o=lo;return n.current.memoizedState.isDehydrated&&(gs(n,i).flags|=256),n=Cl(n,i),n!==2&&(i=ti,ti=o,i!==null&&nd(i)),n}function nd(n){ti===null?ti=n:ti.push.apply(ti,n)}function Ky(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Ri(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(n,i){for(i&=~Ku,i&=~Ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-He(i),u=1<<o;n[o]=-1,i&=~u}}function Om(n){if((Ft&6)!==0)throw Error(t(327));la();var i=nt(n,0);if((i&1)===0)return ni(n,Zt()),null;var o=Cl(n,i);if(n.tag!==0&&o===2){var u=ct(n);u!==0&&(i=u,o=td(n,u))}if(o===1)throw o=oo,gs(n,0),jr(n,i),ni(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,vs(n,ti,mr),ni(n,Zt()),null}function id(n,i){var o=Ft;Ft|=1;try{return n(i)}finally{Ft=o,Ft===0&&(oa=Zt()+500,tl&&Br())}}function ms(n){Wr!==null&&Wr.tag===0&&(Ft&6)===0&&la();var i=Ft;Ft|=1;var o=xi.transition,u=ut;try{if(xi.transition=null,ut=1,n)return n()}finally{ut=u,xi.transition=o,Ft=i,(Ft&6)===0&&Br()}}function rd(){ui=aa.current,Qt(aa)}function gs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,by(o)),hn!==null)for(o=hn.return;o!==null;){var u=o;switch(hu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Qo();break;case 3:ia(),Qt(Jn),Qt(Un),Tu();break;case 5:wu(u);break;case 4:ia();break;case 13:Qt(rn);break;case 19:Qt(rn);break;case 10:_u(u.type._context);break;case 22:case 23:rd()}o=o.return}if(Tn=n,hn=n=Yr(n.current,null),In=ui=i,_n=0,oo=null,Ku=Ml=ps=0,ti=lo=null,ds!==null){for(i=0;i<ds.length;i++)if(o=ds[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,m=o.pending;if(m!==null){var T=m.next;m.next=f,u.next=T}o.pending=u}ds=null}return n}function km(n,i){do{var o=hn;try{if(yu(),dl.current=ml,fl){for(var u=sn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}fl=!1}if(hs=0,An=yn=sn=null,to=!1,no=0,qu.current=null,o===null||o.return===null){_n=1,oo=i,hn=null;break}e:{var m=n,T=o.return,B=o,X=i;if(i=In,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var ve=X,Fe=B,ke=Fe.tag;if((Fe.mode&1)===0&&(ke===0||ke===11||ke===15)){var Ie=Fe.alternate;Ie?(Fe.updateQueue=Ie.updateQueue,Fe.memoizedState=Ie.memoizedState,Fe.lanes=Ie.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var Je=cm(T);if(Je!==null){Je.flags&=-257,um(Je,T,B,m,i),Je.mode&1&&lm(m,ve,i),i=Je,X=ve;var rt=i.updateQueue;if(rt===null){var at=new Set;at.add(X),i.updateQueue=at}else rt.add(X);break e}else{if((i&1)===0){lm(m,ve,i),sd();break e}X=Error(t(426))}}else if(en&&B.mode&1){var cn=cm(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),um(cn,T,B,m,i),gu(ra(X,B));break e}}m=X=ra(X,B),_n!==4&&(_n=2),lo===null?lo=[m]:lo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var de=am(m,X,i);Np(m,de);break e;case 1:B=X;var Q=m.type,he=m.stateNode;if((m.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Hr===null||!Hr.has(he)))){m.flags|=65536,i&=-i,m.lanes|=i;var ze=om(m,B,i);Np(m,ze);break e}}m=m.return}while(m!==null)}Gm(o)}catch(lt){i=lt,hn===o&&o!==null&&(hn=o=o.return);continue}break}while(!0)}function Bm(){var n=Sl.current;return Sl.current=ml,n===null?ml:n}function sd(){(_n===0||_n===3||_n===2)&&(_n=4),Tn===null||(ps&268435455)===0&&(Ml&268435455)===0||jr(Tn,In)}function Cl(n,i){var o=Ft;Ft|=2;var u=Bm();(Tn!==n||In!==i)&&(mr=null,gs(n,i));do try{Jy();break}catch(f){km(n,f)}while(!0);if(yu(),Ft=o,Sl.current=u,hn!==null)throw Error(t(261));return Tn=null,In=0,_n}function Jy(){for(;hn!==null;)zm(hn)}function Qy(){for(;hn!==null&&!ks();)zm(hn)}function zm(n){var i=Wm(n.alternate,n,ui);n.memoizedProps=n.pendingProps,i===null?Gm(n):hn=i,qu.current=null}function Gm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Xy(o,i,ui),o!==null){hn=o;return}}else{if(o=jy(o,i),o!==null){o.flags&=32767,hn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);_n===0&&(_n=5)}function vs(n,i,o){var u=ut,f=xi.transition;try{xi.transition=null,ut=1,e_(n,i,o,u)}finally{xi.transition=f,ut=u}return null}function e_(n,i,o,u){do la();while(Wr!==null);if((Ft&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(At(n,m),n===Tn&&(hn=Tn=null,In=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||wl||(wl=!0,Xm(R,function(){return la(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=xi.transition,xi.transition=null;var T=ut;ut=1;var B=Ft;Ft|=4,qu.current=null,$y(n,o),Lm(o,n),xy(su),Bo=!!ru,su=ru=null,n.current=o,Zy(o),Bs(),Ft=B,ut=T,xi.transition=m}else n.current=o;if(wl&&(wl=!1,Wr=n,Al=f),m=n.pendingLanes,m===0&&(Hr=null),We(o.stateNode),ni(n,Zt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(El)throw El=!1,n=Qu,Qu=null,n;return(Al&1)!==0&&n.tag!==0&&la(),m=n.pendingLanes,(m&1)!==0?n===ed?co++:(co=0,ed=n):co=0,Br(),null}function la(){if(Wr!==null){var n=fn(Al),i=xi.transition,o=ut;try{if(xi.transition=null,ut=16>n?16:n,Wr===null)var u=!1;else{if(n=Wr,Wr=null,Al=0,(Ft&6)!==0)throw Error(t(331));var f=Ft;for(Ft|=4,tt=n.current;tt!==null;){var m=tt,T=m.child;if((tt.flags&16)!==0){var B=m.deletions;if(B!==null){for(var X=0;X<B.length;X++){var ve=B[X];for(tt=ve;tt!==null;){var Fe=tt;switch(Fe.tag){case 0:case 11:case 15:ao(8,Fe,m)}var ke=Fe.child;if(ke!==null)ke.return=Fe,tt=ke;else for(;tt!==null;){Fe=tt;var Ie=Fe.sibling,Je=Fe.return;if(Tm(Fe),Fe===ve){tt=null;break}if(Ie!==null){Ie.return=Je,tt=Ie;break}tt=Je}}}var rt=m.alternate;if(rt!==null){var at=rt.child;if(at!==null){rt.child=null;do{var cn=at.sibling;at.sibling=null,at=cn}while(at!==null)}}tt=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,tt=T;else e:for(;tt!==null;){if(m=tt,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ao(9,m,m.return)}var de=m.sibling;if(de!==null){de.return=m.return,tt=de;break e}tt=m.return}}var Q=n.current;for(tt=Q;tt!==null;){T=tt;var he=T.child;if((T.subtreeFlags&2064)!==0&&he!==null)he.return=T,tt=he;else e:for(T=Q;tt!==null;){if(B=tt,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:xl(9,B)}}catch(lt){on(B,B.return,lt)}if(B===T){tt=null;break e}var ze=B.sibling;if(ze!==null){ze.return=B.return,tt=ze;break e}tt=B.return}}if(Ft=f,Br(),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(ce,n)}catch{}u=!0}return u}finally{ut=o,xi.transition=i}}return!1}function Vm(n,i,o){i=ra(o,i),i=am(n,i,1),n=Gr(n,i,1),i=jn(),n!==null&&(Yt(n,1,i),ni(n,i))}function on(n,i,o){if(n.tag===3)Vm(n,n,o);else for(;i!==null;){if(i.tag===3){Vm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hr===null||!Hr.has(u))){n=ra(o,n),n=om(i,n,1),i=Gr(i,n,1),n=jn(),i!==null&&(Yt(i,1,n),ni(i,n));break}}i=i.return}}function t_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=jn(),n.pingedLanes|=n.suspendedLanes&o,Tn===n&&(In&o)===o&&(_n===4||_n===3&&(In&130023424)===In&&500>Zt()-Ju?gs(n,0):Ku|=o),ni(n,i)}function Hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var o=jn();n=fr(n,i),n!==null&&(Yt(n,i,o),ni(n,o))}function n_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Hm(n,o)}function i_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Hm(n,o)}var Wm;Wm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Jn.current)ei=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return ei=!1,Wy(n,i,o);ei=(n.flags&131072)!==0}else ei=!1,en&&(i.flags&1048576)!==0&&Ep(i,il,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;yl(n,i),n=i.pendingProps;var f=qs(i,Un.current);na(i,o),f=Ru(null,i,u,n,f,o);var m=Pu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qn(u)?(m=!0,el(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Mu(i),f.updater=gl,i.stateNode=f,f._reactInternals=i,Fu(i,u,n,o),i=zu(null,i,u,!0,m,o)):(i.tag=0,en&&m&&fu(i),Xn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(yl(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=s_(u),n=Li(u,n),f){case 0:i=Bu(null,i,u,n,o);break e;case 1:i=gm(null,i,u,n,o);break e;case 11:i=dm(null,i,u,n,o);break e;case 14:i=fm(null,i,u,Li(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),Bu(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),gm(n,i,u,f,o);case 3:e:{if(vm(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,f=m.element,Ip(n,i),cl(i,u,null,o);var T=i.memoizedState;if(u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ra(Error(t(423)),i),i=ym(n,i,u,o,f);break e}else if(u!==f){f=ra(Error(t(424)),i),i=ym(n,i,u,o,f);break e}else for(ci=Fr(i.stateNode.containerInfo.firstChild),li=i,en=!0,Pi=null,o=Pp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qs(),u===f){i=pr(n,i,o);break e}Xn(n,i,u,o)}i=i.child}return i;case 5:return Up(i),n===null&&mu(i),u=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,T=f.children,au(u,f)?T=null:m!==null&&au(u,m)&&(i.flags|=32),mm(n,i),Xn(n,i,T,o),i.child;case 6:return n===null&&mu(i),null;case 13:return _m(n,i,o);case 4:return Eu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ea(i,null,u,o):Xn(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),dm(n,i,u,f,o);case 7:return Xn(n,i,i.pendingProps,o),i.child;case 8:return Xn(n,i,i.pendingProps.children,o),i.child;case 12:return Xn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,T=f.value,qt(al,u._currentValue),u._currentValue=T,m!==null)if(Ri(m.value,T)){if(m.children===f.children&&!Jn.current){i=pr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var X=B.firstContext;X!==null;){if(X.context===u){if(m.tag===1){X=hr(-1,o&-o),X.tag=2;var ve=m.updateQueue;if(ve!==null){ve=ve.shared;var Fe=ve.pending;Fe===null?X.next=X:(X.next=Fe.next,Fe.next=X),ve.pending=X}}m.lanes|=o,X=m.alternate,X!==null&&(X.lanes|=o),xu(m.return,o,i),B.lanes|=o;break}X=X.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,B=T.alternate,B!==null&&(B.lanes|=o),xu(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Xn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,na(i,o),f=yi(f),u=u(f),i.flags|=1,Xn(n,i,u,o),i.child;case 14:return u=i.type,f=Li(u,i.pendingProps),f=Li(u.type,f),fm(n,i,u,f,o);case 15:return hm(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:Li(u,f),yl(n,i),i.tag=1,Qn(u)?(n=!0,el(i)):n=!1,na(i,o),rm(i,u,f),Fu(i,u,f,o),zu(null,i,u,!0,n,o);case 19:return Sm(n,i,o);case 22:return pm(n,i,o)}throw Error(t(156,i.tag))};function Xm(n,i){return bi(n,i)}function r_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(n,i,o,u){return new r_(n,i,o,u)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function s_(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===J)return 14}return 2}function Yr(n,i){var o=n.alternate;return o===null?(o=Si(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Rl(n,i,o,u,f,m){var T=2;if(u=n,typeof n=="function")ad(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return ys(o.children,f,m,i);case w:T=8,f|=8;break;case N:return n=Si(12,o,i,f|2),n.elementType=N,n.lanes=m,n;case K:return n=Si(13,o,i,f),n.elementType=K,n.lanes=m,n;case z:return n=Si(19,o,i,f),n.elementType=z,n.lanes=m,n;case q:return Pl(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:T=10;break e;case G:T=9;break e;case W:T=11;break e;case J:T=14;break e;case ge:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Si(T,o,i,f),i.elementType=n,i.type=u,i.lanes=m,i}function ys(n,i,o,u){return n=Si(7,n,u,i),n.lanes=o,n}function Pl(n,i,o,u){return n=Si(22,n,u,i),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function od(n,i,o){return n=Si(6,n,null,i),n.lanes=o,n}function ld(n,i,o){return i=Si(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function a_(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ze(0),this.expirationTimes=Ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function cd(n,i,o,u,f,m,T,B,X){return n=new a_(n,i,o,B,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Si(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(m),n}function o_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function jm(n){if(!n)return kr;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Qn(o))return xp(n,o,i)}return i}function Ym(n,i,o,u,f,m,T,B,X){return n=cd(o,u,!0,n,f,m,T,B,X),n.context=jm(null),o=n.current,u=jn(),f=Xr(o),m=hr(u,f),m.callback=i??null,Gr(o,m,f),n.current.lanes=f,Yt(n,f,u),ni(n,u),n}function Ll(n,i,o,u){var f=i.current,m=jn(),T=Xr(f);return o=jm(o),i.context===null?i.context=o:i.pendingContext=o,i=hr(m,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Gr(f,i,T),n!==null&&(Di(n,f,T,m),ll(n,f,T)),T}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $m(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function ud(n,i){$m(n,i),(n=n.alternate)&&$m(n,i)}function l_(){return null}var Zm=typeof reportError=="function"?reportError:function(n){console.error(n)};function dd(n){this._internalRoot=n}Nl.prototype.render=dd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ll(n,i,null,null)},Nl.prototype.unmount=dd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ms(function(){Ll(null,n,null,null)}),i[lr]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ai();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Nr.length&&i!==0&&i<Nr[o].priority;o++);Nr.splice(o,0,n),o===0&&Uh(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qm(){}function c_(n,i,o,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var ve=Il(T);m.call(ve)}}var T=Ym(i,u,n,0,null,!1,!1,"",qm);return n._reactRootContainer=T,n[lr]=T.current,Ya(n.nodeType===8?n.parentNode:n),ms(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var B=u;u=function(){var ve=Il(X);B.call(ve)}}var X=cd(n,0,!1,null,null,!1,!1,"",qm);return n._reactRootContainer=X,n[lr]=X.current,Ya(n.nodeType===8?n.parentNode:n),ms(function(){Ll(i,X,o,u)}),X}function Ul(n,i,o,u,f){var m=o._reactRootContainer;if(m){var T=m;if(typeof f=="function"){var B=f;f=function(){var X=Il(T);B.call(X)}}Ll(i,T,n,f)}else T=c_(o,i,n,f,u);return Il(T)}Dn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=be(i.pendingLanes);o!==0&&(vn(i,o|1),ni(i,Zt()),(Ft&6)===0&&(oa=Zt()+500,Br()))}break;case 13:ms(function(){var u=fr(n,1);if(u!==null){var f=jn();Di(u,n,1,f)}}),ud(n,1)}},bt=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var o=jn();Di(i,n,134217728,o)}ud(n,134217728)}},Ht=function(n){if(n.tag===13){var i=Xr(n),o=fr(n,i);if(o!==null){var u=jn();Di(o,n,i,u)}ud(n,i)}},ai=function(){return ut},Lt=function(n,i){var o=ut;try{return ut=n,i()}finally{ut=o}},Re=function(n,i,o){switch(i){case"input":if(mt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=Jo(u);if(!f)throw Error(t(90));yt(u),mt(u,f)}}}break;case"textarea":kt(n,o);break;case"select":i=o.value,i!=null&&st(n,!!o.multiple,i,!1)}},Ee=id,Se=ms;var u_={usingClientEntryPoint:!1,Events:[qa,$s,Jo,xe,Pe,id]},uo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d_={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ji(n),n===null?null:n.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||l_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{ce=Fl.inject(d_),ae=Fl}catch{}}return ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_,ii.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(i))throw Error(t(200));return o_(n,i,null,o)},ii.createRoot=function(n,i){if(!fd(n))throw Error(t(299));var o=!1,u="",f=Zm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=cd(n,1,!1,null,null,o,!1,u,f),n[lr]=i.current,Ya(n.nodeType===8?n.parentNode:n),new dd(i)},ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ji(i),n=n===null?null:n.stateNode,n},ii.flushSync=function(n){return ms(n)},ii.hydrate=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ul(null,n,i,!0,o)},ii.hydrateRoot=function(n,i,o){if(!fd(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,m="",T=Zm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Ym(i,null,n,1,o??null,f,!1,m,T),n[lr]=i.current,Ya(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Nl(i)},ii.render=function(n,i,o){if(!Dl(i))throw Error(t(200));return Ul(null,n,i,!1,o)},ii.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(ms(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},ii.unstable_batchedUpdates=id,ii.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,i,o,!1,u)},ii.version="18.3.1-next-f1338f8080-20240426",ii}var rg;function __(){if(rg)return md.exports;rg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),md.exports=y_(),md.exports}var sg;function x_(){if(sg)return Ol;sg=1;var s=__();return Ol.createRoot=s.createRoot,Ol.hydrateRoot=s.hydrateRoot,Ol}var S_=x_();const M_=O0(S_);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=Ye.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},h)=>Ye.createElement("svg",{ref:h,...w_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:B0("lucide",a),...d},[...c.map(([p,v])=>Ye.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(s,e)=>{const t=Ye.forwardRef(({className:r,...a},l)=>Ye.createElement(A_,{ref:l,iconNode:e,className:B0(`lucide-${E_(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=tn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=tn("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=tn("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=tn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=tn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=tn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
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
 */const z0=tn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=tn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=tn("Puzzle",[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=tn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=tn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=tn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=tn("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=tn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=tn("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=tn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=tn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=tn("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=tn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
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
 */const z_=tn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),V0=[{iso:"AR",name:"Argentina",region:"America",continent:"SA",city:"Buenos Aires",hasStreaming:!0,serverCount:8,gatewayIp:"190.211.255.181",basePingMs:148,coordinates:{lat:-34.6037,lng:-58.3816}},{iso:"BO",name:"Bolivia",region:"America",continent:"SA",city:"Santa Cruz",hasStreaming:!1,serverCount:3,gatewayIp:"200.105.192.9",basePingMs:162,coordinates:{lat:-17.7833,lng:-63.1821}},{iso:"BR",name:"Brazil",region:"America",continent:"SA",city:"São Paulo",hasStreaming:!0,serverCount:16,gatewayIp:"212.119.37.60",basePingMs:134,coordinates:{lat:-23.5505,lng:-46.6333}},{iso:"CA",name:"Canada",region:"America",continent:"NA",city:"Montreal",hasStreaming:!0,serverCount:28,gatewayIp:"45.87.213.210",basePingMs:58,coordinates:{lat:45.5017,lng:-73.5673}},{iso:"CL",name:"Chile",region:"America",continent:"SA",city:"Santiago",hasStreaming:!0,serverCount:6,gatewayIp:"45.239.210.181",basePingMs:152,coordinates:{lat:-33.4489,lng:-70.6693}},{iso:"CO",name:"Colombia",region:"America",continent:"SA",city:"Bogotá",hasStreaming:!1,serverCount:6,gatewayIp:"45.238.181.213",basePingMs:118,coordinates:{lat:4.711,lng:-74.0721}},{iso:"CR",name:"Costa Rica",region:"America",continent:"NA",city:"San José",hasStreaming:!1,serverCount:4,gatewayIp:"38.52.32.226",basePingMs:108,coordinates:{lat:9.9281,lng:-84.0907}},{iso:"EC",name:"Ecuador",region:"America",continent:"SA",city:"Guayaquil",hasStreaming:!1,serverCount:4,gatewayIp:"45.188.76.84",basePingMs:126,coordinates:{lat:-2.1894,lng:-79.8891}},{iso:"GT",name:"Guatemala",region:"America",continent:"NA",city:"Guatemala City",hasStreaming:!1,serverCount:3,gatewayIp:"209.14.80.171",basePingMs:104,coordinates:{lat:14.6349,lng:-90.5069}},{iso:"MX",name:"Mexico",region:"America",continent:"NA",city:"Mexico City",hasStreaming:!0,serverCount:12,gatewayIp:"45.188.78.234",basePingMs:82,coordinates:{lat:19.4326,lng:-99.1332}},{iso:"NI",name:"Nicaragua",region:"America",continent:"NA",city:"Managua",hasStreaming:!1,serverCount:3,gatewayIp:"200.62.66.66",basePingMs:114,coordinates:{lat:12.115,lng:-86.2362}},{iso:"PA",name:"Panama",region:"America",continent:"NA",city:"Panama City",hasStreaming:!1,serverCount:5,gatewayIp:"38.51.148.2",basePingMs:98,coordinates:{lat:8.9824,lng:-79.5199}},{iso:"PY",name:"Paraguay",region:"America",continent:"SA",city:"Asunción",hasStreaming:!1,serverCount:3,gatewayIp:"38.43.130.66",basePingMs:156,coordinates:{lat:-25.2637,lng:-57.5759}},{iso:"PE",name:"Peru",region:"America",continent:"SA",city:"Lima",hasStreaming:!1,serverCount:5,gatewayIp:"38.250.159.170",basePingMs:138,coordinates:{lat:-12.0464,lng:-77.0428}},{iso:"PR",name:"Puerto Rico",region:"America",continent:"NA",city:"San Juan",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.207.2",basePingMs:86,coordinates:{lat:18.4655,lng:-66.1057}},{iso:"US",name:"United States",region:"America",continent:"NA",city:"New York, NY",hasStreaming:!0,serverCount:74,gatewayIp:"86.106.92.149",basePingMs:42,coordinates:{lat:40.7128,lng:-74.006}},{iso:"UY",name:"Uruguay",region:"America",continent:"SA",city:"Montevideo",hasStreaming:!1,serverCount:4,gatewayIp:"190.112.207.181",basePingMs:151,coordinates:{lat:-34.9011,lng:-56.1645}},{iso:"AU",name:"Australia",region:"Asia & Oceania",continent:"OC",city:"Melbourne",hasStreaming:!0,serverCount:22,gatewayIp:"103.108.229.219",basePingMs:112,coordinates:{lat:-37.8136,lng:144.9631}},{iso:"HK",name:"Hong Kong",region:"Asia & Oceania",continent:"AS",city:"Hong Kong SAR",hasStreaming:!0,serverCount:14,gatewayIp:"146.70.204.2",basePingMs:54,coordinates:{lat:22.3193,lng:114.1694}},{iso:"IN",name:"India",region:"Asia & Oceania",continent:"AS",city:"Mumbai",hasStreaming:!0,serverCount:18,gatewayIp:"103.142.161.242",basePingMs:38,coordinates:{lat:19.076,lng:72.8777}},{iso:"ID",name:"Indonesia",region:"Asia & Oceania",continent:"AS",city:"Jakarta",hasStreaming:!1,serverCount:8,gatewayIp:"103.126.116.58",basePingMs:52,coordinates:{lat:-6.2088,lng:106.8456}},{iso:"JP",name:"Japan",region:"Asia & Oceania",continent:"AS",city:"Tokyo",hasStreaming:!0,serverCount:26,gatewayIp:"85.131.255.20",basePingMs:68,coordinates:{lat:35.6762,lng:139.6503}},{iso:"KZ",name:"Kazakhstan",region:"Asia & Oceania",continent:"AS",city:"Almaty",hasStreaming:!1,serverCount:4,gatewayIp:"185.129.50.251",basePingMs:88,coordinates:{lat:43.222,lng:76.8512}},{iso:"KG",name:"Kyrgyzstan",region:"Asia & Oceania",continent:"AS",city:"Bishkek",hasStreaming:!1,serverCount:3,gatewayIp:"109.71.224.229",basePingMs:94,coordinates:{lat:42.8746,lng:74.5698}},{iso:"MY",name:"Malaysia",region:"Asia & Oceania",continent:"AS",city:"Kuala Lumpur",hasStreaming:!0,serverCount:9,gatewayIp:"111.90.141.10",basePingMs:44,coordinates:{lat:3.139,lng:101.6869}},{iso:"MN",name:"Mongolia",region:"Asia & Oceania",continent:"AS",city:"Ulaanbaatar",hasStreaming:!1,serverCount:3,gatewayIp:"202.5.205.51",basePingMs:99,coordinates:{lat:47.8864,lng:106.9057}},{iso:"NZ",name:"New Zealand",region:"Asia & Oceania",continent:"OC",city:"Auckland",hasStreaming:!0,serverCount:8,gatewayIp:"146.70.205.130",basePingMs:128,coordinates:{lat:-36.8485,lng:174.7633}},{iso:"PK",name:"Pakistan",region:"Asia & Oceania",continent:"AS",city:"Islamabad",hasStreaming:!1,serverCount:5,gatewayIp:"38.54.17.50",basePingMs:62,coordinates:{lat:33.6844,lng:73.0479}},{iso:"PH",name:"Philippines",region:"Asia & Oceania",continent:"AS",city:"Manila",hasStreaming:!1,serverCount:7,gatewayIp:"109.104.155.146",basePingMs:64,coordinates:{lat:14.5995,lng:120.9842}},{iso:"SG",name:"Singapore",region:"Asia & Oceania",continent:"AS",city:"Singapore",hasStreaming:!0,serverCount:24,gatewayIp:"146.70.198.130",basePingMs:34,coordinates:{lat:1.3521,lng:103.8198}},{iso:"KR",name:"South Korea",region:"Asia & Oceania",continent:"AS",city:"Seoul",hasStreaming:!0,serverCount:14,gatewayIp:"108.181.50.35",basePingMs:72,coordinates:{lat:37.5665,lng:126.978}},{iso:"LK",name:"Sri Lanka",region:"Asia & Oceania",continent:"AS",city:"Colombo",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.229.138",basePingMs:42,coordinates:{lat:6.9271,lng:79.8612}},{iso:"TW",name:"Taiwan",region:"Asia & Oceania",continent:"AS",city:"Taipei",hasStreaming:!0,serverCount:10,gatewayIp:"103.124.72.14",basePingMs:61,coordinates:{lat:25.033,lng:121.5654}},{iso:"TH",name:"Thailand",region:"Asia & Oceania",continent:"AS",city:"Bangkok",hasStreaming:!1,serverCount:8,gatewayIp:"27.254.132.163",basePingMs:46,coordinates:{lat:13.7563,lng:100.5018}},{iso:"VN",name:"Vietnam",region:"Asia & Oceania",continent:"AS",city:"Hanoi",hasStreaming:!1,serverCount:7,gatewayIp:"103.186.64.250",basePingMs:56,coordinates:{lat:21.0278,lng:105.8342}},{iso:"DZ",name:"Algeria",region:"Europe, Middle East & Africa",continent:"AF",city:"Algiers",hasStreaming:!1,serverCount:3,gatewayIp:"102.216.178.10",basePingMs:112,coordinates:{lat:36.7538,lng:3.0588}},{iso:"AT",name:"Austria",region:"Europe, Middle East & Africa",continent:"EU",city:"Vienna",hasStreaming:!0,serverCount:10,gatewayIp:"185.202.222.244",basePingMs:79,coordinates:{lat:48.2082,lng:16.3738}},{iso:"BY",name:"Belarus",region:"Europe, Middle East & Africa",continent:"EU",city:"Minsk",hasStreaming:!1,serverCount:3,gatewayIp:"95.169.180.52",basePingMs:92,coordinates:{lat:53.9006,lng:27.559}},{iso:"BE",name:"Belgium",region:"Europe, Middle East & Africa",continent:"EU",city:"Brussels",hasStreaming:!0,serverCount:10,gatewayIp:"185.216.33.175",basePingMs:76,coordinates:{lat:50.8503,lng:4.3517}},{iso:"BG",name:"Bulgaria",region:"Europe, Middle East & Africa",continent:"EU",city:"Sofia",hasStreaming:!1,serverCount:8,gatewayIp:"185.216.34.81",basePingMs:84,coordinates:{lat:42.6977,lng:23.3219}},{iso:"HR",name:"Croatia",region:"Europe, Middle East & Africa",continent:"EU",city:"Zagreb",hasStreaming:!1,serverCount:5,gatewayIp:"193.37.68.18",basePingMs:82,coordinates:{lat:45.815,lng:15.9819}},{iso:"CY",name:"Cyprus",region:"Europe, Middle East & Africa",continent:"EU",city:"Nicosia",hasStreaming:!1,serverCount:4,gatewayIp:"213.209.159.170",basePingMs:91,coordinates:{lat:35.1856,lng:33.3823}},{iso:"CZ",name:"Czech Republic",region:"Europe, Middle East & Africa",continent:"EU",city:"Prague",hasStreaming:!0,serverCount:10,gatewayIp:"185.102.219.166",basePingMs:78,coordinates:{lat:50.0755,lng:14.4378}},{iso:"DK",name:"Denmark",region:"Europe, Middle East & Africa",continent:"EU",city:"Copenhagen",hasStreaming:!0,serverCount:10,gatewayIp:"185.204.1.228",basePingMs:81,coordinates:{lat:55.6761,lng:12.5683}},{iso:"EG",name:"Egypt",region:"Europe, Middle East & Africa",continent:"AF",city:"Cairo",hasStreaming:!1,serverCount:5,gatewayIp:"38.54.117.163",basePingMs:95,coordinates:{lat:30.0444,lng:31.2357}},{iso:"EE",name:"Estonia",region:"Europe, Middle East & Africa",continent:"EU",city:"Tallinn",hasStreaming:!1,serverCount:5,gatewayIp:"185.158.113.213",basePingMs:86,coordinates:{lat:59.437,lng:24.7536}},{iso:"FI",name:"Finland",region:"Europe, Middle East & Africa",continent:"EU",city:"Helsinki",hasStreaming:!0,serverCount:9,gatewayIp:"185.216.35.91",basePingMs:87,coordinates:{lat:60.1699,lng:24.9384}},{iso:"FR",name:"France",region:"Europe, Middle East & Africa",continent:"EU",city:"Paris",hasStreaming:!0,serverCount:28,gatewayIp:"185.246.211.124",basePingMs:74,coordinates:{lat:48.8566,lng:2.3522}},{iso:"GE",name:"Georgia",region:"Europe, Middle East & Africa",continent:"EU",city:"Tbilisi",hasStreaming:!1,serverCount:4,gatewayIp:"188.93.91.2",basePingMs:87,coordinates:{lat:41.7151,lng:44.8271}},{iso:"DE",name:"Germany",region:"Europe, Middle East & Africa",continent:"EU",city:"Frankfurt",hasStreaming:!0,serverCount:38,gatewayIp:"45.14.194.242",basePingMs:71,coordinates:{lat:50.1109,lng:8.6821}},{iso:"GR",name:"Greece",region:"Europe, Middle East & Africa",continent:"EU",city:"Athens",hasStreaming:!1,serverCount:6,gatewayIp:"185.209.228.59",basePingMs:88,coordinates:{lat:37.9838,lng:23.7275}},{iso:"HU",name:"Hungary",region:"Europe, Middle East & Africa",continent:"EU",city:"Budapest",hasStreaming:!1,serverCount:7,gatewayIp:"194.36.110.22",basePingMs:80,coordinates:{lat:47.4979,lng:19.0402}},{iso:"IS",name:"Iceland",region:"Europe, Middle East & Africa",continent:"EU",city:"Reykjavik",hasStreaming:!1,serverCount:4,gatewayIp:"37.235.49.36",basePingMs:96,coordinates:{lat:64.1466,lng:-21.9426}},{iso:"IE",name:"Ireland",region:"Europe, Middle East & Africa",continent:"EU",city:"Dublin",hasStreaming:!0,serverCount:12,gatewayIp:"193.118.52.238",basePingMs:79,coordinates:{lat:53.3498,lng:-6.2603}},{iso:"IL",name:"Israel",region:"Europe, Middle East & Africa",continent:"AS",city:"Tel Aviv",hasStreaming:!0,serverCount:9,gatewayIp:"45.80.93.249",basePingMs:89,coordinates:{lat:32.0853,lng:34.7818}},{iso:"IT",name:"Italy",region:"Europe, Middle East & Africa",continent:"EU",city:"Milan",hasStreaming:!0,serverCount:18,gatewayIp:"146.70.193.130",basePingMs:77,coordinates:{lat:45.4642,lng:9.19}},{iso:"JO",name:"Jordan",region:"Europe, Middle East & Africa",continent:"AS",city:"Amman",hasStreaming:!1,serverCount:3,gatewayIp:"188.247.92.186",basePingMs:94,coordinates:{lat:31.9454,lng:35.9284}},{iso:"KE",name:"Kenya",region:"Europe, Middle East & Africa",continent:"AF",city:"Nairobi",hasStreaming:!1,serverCount:4,gatewayIp:"102.68.86.97",basePingMs:116,coordinates:{lat:-1.2921,lng:36.8219}},{iso:"KW",name:"Kuwait",region:"Europe, Middle East & Africa",continent:"AS",city:"Kuwait City",hasStreaming:!1,serverCount:4,gatewayIp:"38.54.124.170",basePingMs:78,coordinates:{lat:29.3759,lng:47.9774}},{iso:"LV",name:"Latvia",region:"Europe, Middle East & Africa",continent:"EU",city:"Riga",hasStreaming:!1,serverCount:5,gatewayIp:"89.111.52.71",basePingMs:85,coordinates:{lat:56.9496,lng:24.1052}},{iso:"LT",name:"Lithuania",region:"Europe, Middle East & Africa",continent:"EU",city:"Vilnius",hasStreaming:!1,serverCount:5,gatewayIp:"185.203.119.225",basePingMs:84,coordinates:{lat:54.6872,lng:25.2797}},{iso:"LU",name:"Luxembourg",region:"Europe, Middle East & Africa",continent:"EU",city:"Luxembourg City",hasStreaming:!1,serverCount:6,gatewayIp:"146.70.119.98",basePingMs:75,coordinates:{lat:49.6116,lng:6.1319}},{iso:"MT",name:"Malta",region:"Europe, Middle East & Africa",continent:"EU",city:"Valletta",hasStreaming:!1,serverCount:4,gatewayIp:"146.70.141.66",basePingMs:86,coordinates:{lat:35.8989,lng:14.5146}},{iso:"MA",name:"Morocco",region:"Europe, Middle East & Africa",continent:"AF",city:"Rabat",hasStreaming:!1,serverCount:4,gatewayIp:"105.66.135.42",basePingMs:102,coordinates:{lat:34.0209,lng:-6.8416}},{iso:"NL",name:"Netherlands",region:"Europe, Middle East & Africa",continent:"EU",city:"Amsterdam",hasStreaming:!0,serverCount:34,gatewayIp:"185.107.56.140",basePingMs:72,coordinates:{lat:52.3676,lng:4.9041}},{iso:"NG",name:"Nigeria",region:"Europe, Middle East & Africa",continent:"AF",city:"Lagos",hasStreaming:!1,serverCount:4,gatewayIp:"169.255.57.58",basePingMs:124,coordinates:{lat:6.5244,lng:3.3792}},{iso:"NO",name:"Norway",region:"Europe, Middle East & Africa",continent:"EU",city:"Sandefjord",hasStreaming:!0,serverCount:10,gatewayIp:"185.181.61.141",basePingMs:83,coordinates:{lat:59.1312,lng:10.2167}},{iso:"PL",name:"Poland",region:"Europe, Middle East & Africa",continent:"EU",city:"Warsaw",hasStreaming:!0,serverCount:14,gatewayIp:"185.243.56.185",basePingMs:79,coordinates:{lat:52.2297,lng:21.0122}},{iso:"PT",name:"Portugal",region:"Europe, Middle East & Africa",continent:"EU",city:"Lisbon",hasStreaming:!1,serverCount:7,gatewayIp:"185.240.244.45",basePingMs:85,coordinates:{lat:38.7223,lng:-9.1393}},{iso:"RO",name:"Romania",region:"Europe, Middle East & Africa",continent:"EU",city:"Bucharest",hasStreaming:!0,serverCount:16,gatewayIp:"146.70.125.134",basePingMs:82,coordinates:{lat:44.4268,lng:26.1025}},{iso:"RU",name:"Russia",region:"Europe, Middle East & Africa",continent:"EU",city:"Moscow",hasStreaming:!1,serverCount:8,gatewayIp:"146.70.231.130",basePingMs:90,coordinates:{lat:55.7558,lng:37.6173}},{iso:"RS",name:"Serbia",region:"Europe, Middle East & Africa",continent:"EU",city:"Belgrade",hasStreaming:!1,serverCount:6,gatewayIp:"83.143.82.62",basePingMs:83,coordinates:{lat:44.7866,lng:20.4489}},{iso:"SK",name:"Slovakia",region:"Europe, Middle East & Africa",continent:"EU",city:"Bratislava",hasStreaming:!1,serverCount:5,gatewayIp:"185.205.245.55",basePingMs:80,coordinates:{lat:48.1486,lng:17.1077}},{iso:"SI",name:"Slovenia",region:"Europe, Middle East & Africa",continent:"EU",city:"Ljubljana",hasStreaming:!1,serverCount:4,gatewayIp:"188.214.126.134",basePingMs:81,coordinates:{lat:46.0569,lng:14.5058}},{iso:"ZA",name:"South Africa",region:"Europe, Middle East & Africa",continent:"AF",city:"Johannesburg",hasStreaming:!0,serverCount:8,gatewayIp:"102.130.113.105",basePingMs:142,coordinates:{lat:-26.2041,lng:28.0473}},{iso:"ES",name:"Spain",region:"Europe, Middle East & Africa",continent:"EU",city:"Madrid",hasStreaming:!0,serverCount:16,gatewayIp:"185.253.97.205",basePingMs:81,coordinates:{lat:40.4168,lng:-3.7038}},{iso:"SE",name:"Sweden",region:"Europe, Middle East & Africa",continent:"EU",city:"Stockholm",hasStreaming:!0,serverCount:14,gatewayIp:"185.213.154.170",basePingMs:83,coordinates:{lat:59.3293,lng:18.0686}},{iso:"CH",name:"Switzerland",region:"Europe, Middle East & Africa",continent:"EU",city:"Zurich",hasStreaming:!0,serverCount:16,gatewayIp:"185.246.208.73",basePingMs:75,coordinates:{lat:47.3769,lng:8.5417}},{iso:"TR",name:"Turkey",region:"Europe, Middle East & Africa",continent:"EU",city:"Istanbul",hasStreaming:!0,serverCount:10,gatewayIp:"185.126.178.79",basePingMs:86,coordinates:{lat:41.0082,lng:28.9784}},{iso:"UA",name:"Ukraine",region:"Europe, Middle East & Africa",continent:"EU",city:"Kyiv",hasStreaming:!1,serverCount:7,gatewayIp:"185.246.209.251",basePingMs:88,coordinates:{lat:50.4501,lng:30.5234}},{iso:"AE",name:"United Arab Emirates",region:"Europe, Middle East & Africa",continent:"AS",city:"Dubai",hasStreaming:!0,serverCount:12,gatewayIp:"146.70.189.2",basePingMs:68,coordinates:{lat:25.2048,lng:55.2708}},{iso:"GB",name:"United Kingdom",region:"Europe, Middle East & Africa",continent:"EU",city:"London",hasStreaming:!0,serverCount:42,gatewayIp:"149.102.244.142",basePingMs:73,coordinates:{lat:51.5074,lng:-.1278}}],af={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AX:"Aland Islands",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",BQ:"Caribbean Netherlands",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",SZ:"Eswatini",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MK:"North Macedonia",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function H0(s){const e=s.charCodeAt(0)||85,t=s.charCodeAt(1)||83;return`GarudaLinkX_${s}_NodeKey2026_${(e*31+t*17).toString(16).padStart(4,"0")}==`.slice(0,44).padEnd(44,"=")}function G_(s){switch(s){case"NA":case"SA":return{isp:"Garuda Infinity / Datacamp Limited",asn:"AS60068 Datacamp Limited"};case"AS":case"OC":return{isp:"Garuda Infinity / M247 Asia-Pacific",asn:"AS9009 M247 Europe SRL"};default:return{isp:"Garuda Infinity / M247 Ltd",asn:"AS9009 M247 Europe SRL"}}}function ih(s,e=0){const t=(s||"US").toUpperCase(),r=V0.find(p=>p.iso===t);if(r){if(e===0)return r.gatewayIp;const p=r.gatewayIp.split(".").map(Number),v=(p[3]+e*7)%240+10;return`${p[0]}.${p[1]}.${p[2]}.${v}`}const a=t.charCodeAt(0)||65,l=t.charCodeAt(1)||66,c=(a*3+l)%200+20,d=(a*7+l*5)%220+15,h=(a*11+l*13+e*7)%230+12;return`185.${c}.${d}.${h}`}function W0(s,e=!1){const t=s.iso.toUpperCase(),r=t.toLowerCase(),a=G_(s.continent||"EU");return{iso:t,isoLower:r,name:s.name||af[t]||t,region:s.region||"Europe, Middle East & Africa",continent:s.continent||"EU",city:s.city||`${s.name||af[t]||t} Gateway`,hasStreaming:!!s.hasStreaming,streamingOptimized:!!s.hasStreaming,hasLiveGateway:!e,serverCount:s.serverCount||2,gatewayIp:s.gatewayIp||ih(t,0),isp:s.isp||a.isp,asn:s.asn||a.asn,basePingMs:s.basePingMs||85,coordinates:s.coordinates||{lat:25,lng:18},wgPublicKey:H0(t),endpointHost:`${r}-wg01.garudainfinity.net`,isExtendedLocation:e}}const rh=V0.map(s=>W0(s,!1)).sort((s,e)=>s.name.localeCompare(e.name)),V_=new Set(rh.map(s=>s.iso)),H_={BD:{city:"Dhaka",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.145.72.94",basePingMs:24,serverCount:4,coordinates:{lat:23.8103,lng:90.4125}},GH:{city:"Accra",region:"Europe, Middle East & Africa",continent:"AF",gatewayIp:"169.255.56.147",basePingMs:118,serverCount:3,coordinates:{lat:5.6037,lng:-.187}},NP:{city:"Kathmandu",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.139.64.38",basePingMs:36,serverCount:3,coordinates:{lat:27.7172,lng:85.324}},KH:{city:"Phnom Penh",region:"Asia & Oceania",continent:"AS",gatewayIp:"103.133.120.71",basePingMs:52,serverCount:3,coordinates:{lat:11.5564,lng:104.9282}}},W_=[...rh,...Object.entries(af).filter(([s])=>!V_.has(s)).map(([s,e])=>{const t=H_[s]||{},r=s.charCodeAt(0)||65,a=s.charCodeAt(1)||66;return W0({iso:s,name:e,region:t.region||"Global Extended Network",continent:t.continent||"EU",city:t.city||`${e} Edge Relay`,hasStreaming:!1,serverCount:t.serverCount||2,gatewayIp:t.gatewayIp||ih(s,0),basePingMs:t.basePingMs||60+(r*5+a*3)%75,coordinates:t.coordinates||{lat:r*7%100-40,lng:a*13%280-140}},!0)})].sort((s,e)=>s.name.localeCompare(e.name));function Mc(s){return`/resources/icons/flags/ic_flag_${(s||"unknown").toLowerCase()}.webp`}function X0(s){if(!s)return null;const e=s.toUpperCase();return W_.find(t=>t.iso===e)||null}const fg=rh;function hg(s,e="WireGuard"){const t=typeof s=="string"?X0(s):s,r=((t==null?void 0:t.iso)||"US").toUpperCase(),a=String(e).toLowerCase().includes("openvpn"),l=String(e).toLowerCase().includes("tcp"),c=`GarudaClient_${r}_2026_x25519_key==`.slice(0,44).padEnd(44,"=");return{publicIp:(t==null?void 0:t.gatewayIp)||ih(r,0),isp:(t==null?void 0:t.isp)||"Garuda Infinity / M247 Ltd",asn:(t==null?void 0:t.asn)||"AS9009 M247 Europe SRL",tunnelInternalIp:"10.66.142.18",gatewayHost:(t==null?void 0:t.endpointHost)||`${r.toLowerCase()}-wg01.garudainfinity.net`,endpointPort:a?l?443:1194:51820,dnsServers:["1.1.1.1","1.0.0.1"],mtu:1420,cipher:a?"TLS 1.3 • AES-256-GCM (OpenVPN DCO)":"TLS 1.3 • ChaCha20-Poly1305 (Garuda LinkX)",clientPrivateKey:c,serverPublicKey:(t==null?void 0:t.wgPublicKey)||H0(r)}}const Mr="1.1.0",Eo="1.1.0",wo="V1.1.0",X_="V1.1.0",pg=1010,bo="https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/Garuda-Infinity-Extension.zip",kl="https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/Garuda-Infinity.apk",j_={AD:"Europe/Andorra",AE:"Asia/Dubai",AF:"Asia/Kabul",AG:"America/Antigua",AI:"America/Anguilla",AL:"Europe/Tirane",AM:"Asia/Yerevan",AO:"Africa/Luanda",AQ:"Antarctica/McMurdo",AR:"America/Argentina/Buenos_Aires",AS:"Pacific/Pago_Pago",AT:"Europe/Vienna",AU:"Australia/Melbourne",AW:"America/Aruba",AX:"Europe/Mariehamn",AZ:"Asia/Baku",BA:"Europe/Sarajevo",BB:"America/Barbados",BD:"Asia/Dhaka",BE:"Europe/Brussels",BF:"Africa/Ouagadougou",BG:"Europe/Sofia",BH:"Asia/Bahrain",BI:"Africa/Bujumbura",BJ:"Africa/Porto-Novo",BL:"America/St_Barthelemy",BM:"Atlantic/Bermuda",BN:"Asia/Brunei",BO:"America/La_Paz",BQ:"America/Kralendijk",BR:"America/Sao_Paulo",BS:"America/Nassau",BT:"Asia/Thimphu",BW:"Africa/Gaborone",BY:"Europe/Minsk",BZ:"America/Belize",CA:"America/Toronto",CC:"Indian/Cocos",CD:"Africa/Kinshasa",CF:"Africa/Bangui",CG:"Africa/Brazzaville",CH:"Europe/Zurich",CI:"Africa/Abidjan",CK:"Pacific/Rarotonga",CL:"America/Santiago",CM:"Africa/Douala",CN:"Asia/Shanghai",CO:"America/Bogota",CR:"America/Costa_Rica",CU:"America/Havana",CV:"Atlantic/Cape_Verde",CW:"America/Curacao",CX:"Indian/Christmas",CY:"Asia/Nicosia",CZ:"Europe/Prague",DE:"Europe/Berlin",DJ:"Africa/Djibouti",DK:"Europe/Copenhagen",DM:"America/Dominica",DO:"America/Santo_Domingo",DZ:"Africa/Algiers",EC:"America/Guayaquil",EE:"Europe/Tallinn",EG:"Africa/Cairo",EH:"Africa/El_Aaiun",ER:"Africa/Asmara",ES:"Europe/Madrid",ET:"Africa/Addis_Ababa",FI:"Europe/Helsinki",FJ:"Pacific/Fiji",FK:"Atlantic/Stanley",FM:"Pacific/Pohnpei",FO:"Atlantic/Faroe",FR:"Europe/Paris",GA:"Africa/Libreville",GB:"Europe/London",GD:"America/Grenada",GE:"Asia/Tbilisi",GF:"America/Cayenne",GG:"Europe/Guernsey",GH:"Africa/Accra",GI:"Europe/Gibraltar",GL:"America/Nuuk",GM:"Africa/Banjul",GN:"Africa/Conakry",GP:"America/Guadeloupe",GQ:"Africa/Malabo",GR:"Europe/Athens",GT:"America/Guatemala",GU:"Pacific/Guam",GW:"Africa/Bissau",GY:"America/Guyana",HK:"Asia/Hong_Kong",HN:"America/Tegucigalpa",HR:"Europe/Zagreb",HT:"America/Port-au-Prince",HU:"Europe/Budapest",ID:"Asia/Jakarta",IE:"Europe/Dublin",IL:"Asia/Jerusalem",IM:"Europe/Isle_of_Man",IN:"Asia/Kolkata",IO:"Indian/Chagos",IQ:"Asia/Baghdad",IR:"Asia/Tehran",IS:"Atlantic/Reykjavik",IT:"Europe/Rome",JE:"Europe/Jersey",JM:"America/Jamaica",JO:"Asia/Amman",JP:"Asia/Tokyo",KE:"Africa/Nairobi",KG:"Asia/Bishkek",KH:"Asia/Phnom_Penh",KI:"Pacific/Tarawa",KM:"Indian/Comoro",KN:"America/St_Kitts",KP:"Asia/Pyongyang",KR:"Asia/Seoul",KW:"Asia/Kuwait",KY:"America/Cayman",KZ:"Asia/Almaty",LA:"Asia/Vientiane",LB:"Asia/Beirut",LC:"America/St_Lucia",LI:"Europe/Vaduz",LK:"Asia/Colombo",LR:"Africa/Monrovia",LS:"Africa/Maseru",LT:"Europe/Vilnius",LU:"Europe/Luxembourg",LV:"Europe/Riga",LY:"Africa/Tripoli",MA:"Africa/Casablanca",MC:"Europe/Monaco",MD:"Europe/Chisinau",ME:"Europe/Podgorica",MF:"America/Marigot",MG:"Indian/Antananarivo",MH:"Pacific/Majuro",MK:"Europe/Skopje",ML:"Africa/Bamako",MM:"Asia/Yangon",MN:"Asia/Ulaanbaatar",MO:"Asia/Macau",MP:"Pacific/Saipan",MQ:"America/Martinique",MR:"Africa/Nouakchott",MS:"America/Montserrat",MT:"Europe/Malta",MU:"Indian/Mauritius",MV:"Indian/Maldives",MW:"Africa/Blantyre",MX:"America/Mexico_City",MY:"Asia/Kuala_Lumpur",MZ:"Africa/Maputo",NA:"Africa/Windhoek",NC:"Pacific/Noumea",NE:"Africa/Niamey",NF:"Pacific/Norfolk",NG:"Africa/Lagos",NI:"America/Managua",NL:"Europe/Amsterdam",NO:"Europe/Oslo",NP:"Asia/Kathmandu",NR:"Pacific/Nauru",NU:"Pacific/Niue",NZ:"Pacific/Auckland",OM:"Asia/Muscat",PA:"America/Panama",PE:"America/Lima",PF:"Pacific/Tahiti",PG:"Pacific/Port_Moresby",PH:"Asia/Manila",PK:"Asia/Karachi",PL:"Europe/Warsaw",PM:"America/Miquelon",PR:"America/Puerto_Rico",PS:"Asia/Hebron",PT:"Europe/Lisbon",PW:"Pacific/Palau",PY:"America/Asuncion",QA:"Asia/Qatar",RE:"Indian/Reunion",RO:"Europe/Bucharest",RS:"Europe/Belgrade",RU:"Europe/Moscow",RW:"Africa/Kigali",SA:"Asia/Riyadh",SB:"Pacific/Guadalcanal",SC:"Indian/Mahe",SD:"Africa/Khartoum",SE:"Europe/Stockholm",SG:"Asia/Singapore",SH:"Atlantic/St_Helena",SI:"Europe/Ljubljana",SJ:"Arctic/Longyearbyen",SK:"Europe/Bratislava",SL:"Africa/Freetown",SM:"Europe/San_Marino",SN:"Africa/Dakar",SO:"Africa/Mogadishu",SR:"America/Paramaribo",SS:"Africa/Juba",ST:"Africa/Sao_Tome",SV:"America/El_Salvador",SX:"America/Lower_Princes",SY:"Asia/Damascus",SZ:"Africa/Mbabane",TC:"America/Grand_Turk",TD:"Africa/Ndjamena",TG:"Africa/Lome",TH:"Asia/Bangkok",TJ:"Asia/Dushanbe",TK:"Pacific/Fakaofo",TL:"Asia/Dili",TM:"Asia/Ashgabat",TN:"Africa/Tunis",TO:"Pacific/Tongatapu",TR:"Europe/Istanbul",TT:"America/Port_of_Spain",TV:"Pacific/Funafuti",TW:"Asia/Taipei",TZ:"Africa/Dar_es_Salaam",UA:"Europe/Kyiv",UG:"Africa/Kampala",US:"America/New_York",UY:"America/Montevideo",UZ:"Asia/Tashkent",VA:"Europe/Vatican",VC:"America/St_Vincent",VE:"America/Caracas",VG:"America/Tortola",VI:"America/St_Thomas",VN:"Asia/Ho_Chi_Minh",VU:"Pacific/Efate",WF:"Pacific/Wallis",WS:"Pacific/Apia",XK:"Europe/Belgrade",YE:"Asia/Aden",YT:"Indian/Mayotte",ZA:"Africa/Johannesburg",ZM:"Africa/Lusaka",ZW:"Africa/Harare"};function yd(s){if(!s||typeof s!="string")return!1;try{return Intl.DateTimeFormat(void 0,{timeZone:s.trim()}),!0}catch{return!1}}function mn(s="",e=""){const t=String(e||"").trim();if(yd(t))return t;const r=String(s||"").trim().toUpperCase(),a=j_[r];if(a&&yd(a))return a;try{const l=Intl.DateTimeFormat().resolvedOptions().timeZone;if(yd(l))return l}catch{}return"UTC"}function Mi(s="",e="",t=new Date){var p;const r=t instanceof Date?t:new Date(t||Date.now()),a=mn(s,e);let l="",c="",d="",h="UTC";try{l=new Intl.DateTimeFormat("en-US",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(r),d=new Intl.DateTimeFormat("en-US",{timeZone:a,hour:"2-digit",minute:"2-digit",hour12:!0}).format(r),c=new Intl.DateTimeFormat("en-GB",{timeZone:a,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(r);const x=((p=new Intl.DateTimeFormat("en-US",{timeZone:a,timeZoneName:"shortOffset"}).formatToParts(r).find(g=>g.type==="timeZoneName"))==null?void 0:p.value)||"";x&&(h=x.replace(/^GMT/,"UTC"))}catch{c=r.toTimeString().slice(0,8),l=r.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),d=r.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})}return{timeZone:a,time12:l,time24:c,shortTime12:d,offset:h,verifiedLabel:`${l} (${h})`,fullLabel:`${l} • ${a} (${h})`}}const sh=[117,114,98,97,110,45,118,112,110,46,99,111,109].map(s=>String.fromCharCode(s)).join(""),of=`https://api-pro.${sh}`,Y_=`https://stats.${sh}`,Co=["URBAN","VPN","BROWSER","EXTENSION"].join("_"),j0="garuda_android_cloud_cache_v4",$_=720*1e3,mg=[30*1e3,60*1e3,300*1e3,900*1e3],Y0={NO:new Set(["83.143.82.62","83.143.82.58"]),RU:new Set(["146.70.52.54","146.70.52.62","146.70.52.94"]),KR:new Set(["79.110.55.34"])},$0={NO:["185.181.61.141"],RU:["146.70.231.130"],KR:["108.181.50.35","61.255.174.11"],RS:["83.143.82.62","83.143.82.58"]},Z_={RS:{sourceIso:"NO",allowedHosts:new Set(["83.143.82.62","83.143.82.58"])}},Ai=new Map;let ah=0,Rn=null,Ts=!1,_d=!1;const q_="cW9NiiSbuwbqZDHwUFlef1LQhwXlwQGu",Qe={anonToken:"",accsToken:"",accsExpiresAt:0,countries:[],countriesFetchedAt:0,recentHostsByIso:{},pinnedStaticHostByIso:{},mintedProxyLeaseBySig:{},strikeHistoryByHost:{}};function gg(s){if(!s)return;Qe.strikeHistoryByHost||(Qe.strikeHistoryByHost={});const e=Qe.strikeHistoryByHost[s]||{strikes:0},t=Math.min(e.strikes+1,10),r=Math.min(t-1,mg.length-1);Qe.strikeHistoryByHost[s]={strikes:t,cooldownUntil:Date.now()+mg[r]},Rs()}function K_(s){var e;!s||!((e=Qe.strikeHistoryByHost)!=null&&e[s])||(delete Qe.strikeHistoryByHost[s],Rs())}function vg(s){var t;if(!s)return!1;const e=(t=Qe.strikeHistoryByHost)==null?void 0:t[s];return!e||!e.cooldownUntil?!1:Date.now()<e.cooldownUntil}function J_(s){const e=[...s];for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[r],e[r]=a}return e}typeof window<"u"&&(window.__onGarudaNativeCallback=(s,e)=>{const t=Ai.get(s);if(t){Ai.delete(s);try{t(JSON.parse(e))}catch{t({ok:!1,error:"Malformed native callback JSON"})}}});function dn(){return typeof window>"u"?!1:!!(window.GarudaAndroidBridge&&typeof window.GarudaAndroidBridge.httpFetchAsync=="function")}function Q_(s){try{if(dn()&&window.GarudaAndroidBridge.getStorageItem){const t=window.GarudaAndroidBridge.getStorageItem(s);if(t)return JSON.parse(t)}const e=localStorage.getItem(s);return e?JSON.parse(e):null}catch{return null}}function ex(s,e){try{const t=JSON.stringify(e);dn()&&window.GarudaAndroidBridge.setStorageItem&&window.GarudaAndroidBridge.setStorageItem(s,t),localStorage.setItem(s,t)}catch{}}function tx(){const s=[34,35,45,52,54,64,66,74,82,89,91,104,138,142,148,151,185,193],e=s[Math.floor(Math.random()*s.length)],t=1+Math.floor(Math.random()*250),r=1+Math.floor(Math.random()*250),a=1+Math.floor(Math.random()*250);return`${e}.${t}.${r}.${a}`}function Ec(s={}){const e=tx();return{Accept:"application/json","X-Client-App":Co,"X-Forwarded-For":e,"X-Real-IP":e,"CF-Connecting-IP":e,"True-Client-IP":e,...s}}function is(s,e={}){const{method:t="GET",headers:r={},body:a="",useProxy:l=!1,timeoutMs:c=8500}=e;return dn()?new Promise(d=>{const h=`garuda_native_${Date.now()}_${++ah}`,p=setTimeout(()=>{Ai.has(h)&&(Ai.delete(h),d({ok:!1,status:0,error:"Native HTTP timeout"}))},c+1500);Ai.set(h,v=>{clearTimeout(p),d(v||{ok:!1,status:0})});try{window.GarudaAndroidBridge.httpFetchAsync(h,s,t,JSON.stringify(r||{}),a||"",!!l,c)}catch(v){clearTimeout(p),Ai.delete(h),d({ok:!1,status:0,error:(v==null?void 0:v.message)||"Bridge call error"})}}):Promise.reject(new Error("GarudaAndroidBridge not available"))}function oh(){if(Qe.anonToken)return;const s=Q_(j0);s&&typeof s=="object"&&(s.anonToken&&(Qe.anonToken=s.anonToken),s.accsToken&&(Qe.accsToken=s.accsToken),typeof s.accsExpiresAt=="number"&&(Qe.accsExpiresAt=s.accsExpiresAt),Array.isArray(s.countries)&&(Qe.countries=s.countries),typeof s.countriesFetchedAt=="number"&&(Qe.countriesFetchedAt=s.countriesFetchedAt),s.recentHostsByIso&&typeof s.recentHostsByIso=="object"&&(Qe.recentHostsByIso=s.recentHostsByIso),s.pinnedStaticHostByIso&&typeof s.pinnedStaticHostByIso=="object"&&(Qe.pinnedStaticHostByIso=s.pinnedStaticHostByIso),s.mintedProxyLeaseBySig&&typeof s.mintedProxyLeaseBySig=="object"&&(Qe.mintedProxyLeaseBySig=s.mintedProxyLeaseBySig),s.strikeHistoryByHost&&typeof s.strikeHistoryByHost=="object"&&(Qe.strikeHistoryByHost=s.strikeHistoryByHost))}function Rs(){ex(j0,{anonToken:Qe.anonToken,accsToken:Qe.accsToken,accsExpiresAt:Qe.accsExpiresAt,countries:Qe.countries,countriesFetchedAt:Qe.countriesFetchedAt,recentHostsByIso:Qe.recentHostsByIso,pinnedStaticHostByIso:Qe.pinnedStaticHostByIso,mintedProxyLeaseBySig:Qe.mintedProxyLeaseBySig,strikeHistoryByHost:Qe.strikeHistoryByHost})}async function Dc(s=!1,e=!1){oh();const t=Date.now();if(!s&&!e&&Qe.anonToken&&Qe.accsToken&&t<Qe.accsExpiresAt-6e4)return{anonToken:Qe.anonToken,accsToken:Qe.accsToken};if(Qe.countries=[],Qe.countriesFetchedAt=0,!Qe.anonToken||e){const l=await is(`${of}/rest/v1/registrations/clientApps/${Co}/users/anonymous`,{method:"POST",headers:Ec({"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co}}),useProxy:!1,timeoutMs:8500});if(l.ok&&l.body)try{const c=JSON.parse(l.body);c!=null&&c.value&&(Qe.anonToken=c.value,Rs())}catch{}}Qe.anonToken||(Qe.anonToken=q_);const r=await is(`${of}/rest/v1/security/tokens/accs`,{method:"POST",headers:Ec({Authorization:`Bearer ${Qe.anonToken}`,"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co},type:"accs"}),useProxy:!1,timeoutMs:8500});if(!r.ok||!r.body){if(!e)return Dc(!0,!0);throw new Error(`Gateway access token exchange failed (${r.status||"network"})`)}const a=JSON.parse(r.body);if(!(a!=null&&a.value))throw new Error("Gateway access token missing value");return Qe.accsToken=a.value,Qe.accsExpiresAt=a.expirationTime||t+720*1e3,Rs(),{anonToken:Qe.anonToken,accsToken:Qe.accsToken}}async function wc(s=!1,e=!1){var l;oh();const t=Date.now();if(!s&&!e&&Array.isArray(Qe.countries)&&Qe.countries.length>0&&t-Qe.countriesFetchedAt<360*1e3)return Qe.countries;const{accsToken:r}=await Dc(s,e),a=await is(`${Y_}/api/rest/v2/entrypoints/countries`,{method:"GET",headers:Ec({Authorization:`Bearer ${r}`}),useProxy:!1,timeoutMs:8500});if(!a.ok||!a.body)return s?e?Qe.countries||[]:wc(!0,!0):wc(!0,!1);try{const c=JSON.parse(a.body),d=((l=c==null?void 0:c.countries)==null?void 0:l.elements)||(Array.isArray(c==null?void 0:c.countries)?c.countries:[]);if(Array.isArray(d)&&d.length>0)return Qe.countries=d,Qe.countriesFetchedAt=Date.now(),Rs(),d}catch{}return Qe.countries||[]}const xd=new Map;async function nx(s,e){var a,l;const t=String(e||"").toUpperCase();if(!s||!t||!/^\d+\.\d+\.\d+\.\d+$/.test(s)||(a=$0[t])!=null&&a.includes(s))return!0;if((l=Y0[t])!=null&&l.has(s))return!1;const r=xd.get(s);if(r)return r===t;try{const c=await is(`https://api.2ip.io/${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:2600});if(c.ok&&c.body){const d=JSON.parse(c.body),h=String((d==null?void 0:d.code)||"").toUpperCase();if(h)return xd.set(s,h),h===t}}catch{}try{const c=await is(`https://ipwho.is/${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:2600});if(c.ok&&c.body){const d=JSON.parse(c.body),h=String((d==null?void 0:d.country_code)||"").toUpperCase();if(h)return xd.set(s,h),h===t}}catch{}return!0}function yg(s,e,t=!0,r=null){var _,P,F,b,I,L,U,w;const a=String(e||"US").toUpperCase(),l=Z_[a],c=l?l.sourceIso:a;let d=s.find(N=>{var k;return String(((k=N==null?void 0:N.code)==null?void 0:k.iso2)||(N==null?void 0:N.iso2)||"").toUpperCase()===c});!d&&s.length>0&&(d=s.find(N=>{var k;return String(((k=N==null?void 0:N.code)==null?void 0:k.iso2)||(N==null?void 0:N.iso2)||"").toUpperCase()==="US"})||s[0]);const h=((_=d==null?void 0:d.servers)==null?void 0:_.elements)||[],p=Y0[a],v=$0[a]||[];let x=[];const g=new Set;for(const N of h){const k=(F=(P=N==null?void 0:N.address)==null?void 0:P.primary)==null?void 0:F.host,G=((I=(b=N==null?void 0:N.address)==null?void 0:b.primary)==null?void 0:I.port)||443,W=(N==null?void 0:N.signature)||"";!k||!W||p&&p.has(k)||r&&r.has(k)||l!=null&&l.allowedHosts&&!l.allowedHosts.has(k)||g.has(k)||(g.add(k),x.push({host:k,port:G,signature:W,weight:Number(N.weight)||1,title:(d==null?void 0:d.title)||a}))}if(x.sort((N,k)=>{const G=v.indexOf(N.host),W=v.indexOf(k.host);if(G!==-1&&W===-1)return-1;if(W!==-1&&G===-1)return 1;if(G!==-1&&W!==-1)return G-W;const K=(k.weight||0)-(N.weight||0);return K!==0?K:String(N.host).localeCompare(String(k.host))}),x.length===0)for(let N=1;N<=4;N++){const k=`custom-${a.toLowerCase()}-${N}.${sh}`;g.has(k)||(g.add(k),x.push({host:k,port:443,signature:"",weight:1,title:a}))}let y=[...x];if(x.length>1){if(t){const G=new Set(x.map(q=>q.host));let K=(Array.isArray((L=Qe.recentHostsByIso)==null?void 0:L[a])?Qe.recentHostsByIso[a]:[]).filter(q=>G.has(q));if(K.length>=x.length){const q=K[K.length-1];K=q?[q]:[]}const z=new Set(K),J=J_(x.filter(q=>!z.has(q.host))),ge=x.filter(q=>z.has(q.host)).sort((q,ee)=>K.indexOf(q.host)-K.indexOf(ee.host));y=[...J,...ge]}else{const G=((U=Qe.pinnedStaticHostByIso)==null?void 0:U[a])||Array.isArray((w=Qe.recentHostsByIso)==null?void 0:w[a])&&Qe.recentHostsByIso[a].slice(-1)[0];if(G){const W=x.filter(z=>z.host===G),K=x.filter(z=>z.host!==G);W.length>0&&(y=[...W,...K])}}const N=y.filter(G=>!vg(G.host)),k=y.filter(G=>vg(G.host));N.length>0&&(y=[...N,...k])}const E=y[0];if(E!=null&&E.host){Qe.recentHostsByIso||(Qe.recentHostsByIso={}),Qe.pinnedStaticHostByIso||(Qe.pinnedStaticHostByIso={});const N=Array.isArray(Qe.recentHostsByIso[a])?Qe.recentHostsByIso[a].filter(k=>k!==E.host):[];N.push(E.host),Qe.recentHostsByIso[a]=N.slice(-32),Qe.pinnedStaticHostByIso[a]=E.host,Rs()}const A=y.slice(0,8),S=Math.max(1,x.findIndex(N=>N.host===(E==null?void 0:E.host))+1);return{primary:A[0],backups:A,poolSize:x.length,poolIndex:S}}async function Z0(s,e,t=!1){var l;if(!e)return s;oh();const r=Date.now();if(!t&&((l=Qe.mintedProxyLeaseBySig)!=null&&l[e])){const c=Qe.mintedProxyLeaseBySig[e];if(c!=null&&c.username&&r<(c.expiresAt||0)-3e4)return c.username}const a=await is(`${of}/rest/v1/security/tokens/accs-proxy`,{method:"POST",headers:Ec({Authorization:`Bearer ${s}`,"Content-Type":"application/json"}),body:JSON.stringify({clientApp:{name:Co},type:"accs-proxy",signature:e}),useProxy:!1,timeoutMs:7e3});if(a.ok&&a.body)try{const c=JSON.parse(a.body);if(c!=null&&c.value){Qe.mintedProxyLeaseBySig||(Qe.mintedProxyLeaseBySig={}),Qe.mintedProxyLeaseBySig[e]={username:c.value,expiresAt:Date.now()+$_};const d=Object.keys(Qe.mintedProxyLeaseBySig);if(d.length>64)for(const h of d.slice(0,d.length-64))delete Qe.mintedProxyLeaseBySig[h];return Rs(),c.value}}catch{}return s}async function ix(s="US"){var e,t;if(!(!dn()||Ts||_d)){_d=!0;try{const r=await wc(!1,!1);if(Ts||!Array.isArray(r)||r.length===0)return;const{accsToken:a}=await Dc(!1,!1);if(Ts||!a)return;const l=Array.from(new Set([String(s||"US").toUpperCase(),"US","GB","DE","SG","NL"]));for(const c of l){if(Ts)break;const d=r.find(v=>{var x;return String(((x=v==null?void 0:v.code)==null?void 0:x.iso2)||(v==null?void 0:v.iso2)||"").toUpperCase()===c}),h=(t=(e=d==null?void 0:d.servers)==null?void 0:e.elements)==null?void 0:t[0],p=h==null?void 0:h.signature;p&&await Z0(a,p,!1)}}catch{}finally{_d=!1}}}typeof window<"u"&&setTimeout(()=>{dn()&&!Ts&&ix("US")},1200);async function lf(s=!0,e=""){const t=String(e||s&&(Rn==null?void 0:Rn.iso2)||"").toUpperCase(),r=[{url:"https://api.2ip.io/",parse:c=>{var h,p;if(!c||!c.ip)return null;const d=String(c.code||"").toUpperCase();return{ip:c.ip,country:d,countryName:c.country||d,city:c.city||"",isp:((h=c.asn)==null?void 0:h.name)||"",asn:(p=c.asn)!=null&&p.id?`AS${c.asn.id} ${c.asn.name||""}`.trim():"",timeZone:mn(d,c.time_zone||""),latitude:c.lat?Number(c.lat):void 0,longitude:c.lon?Number(c.lon):void 0}}},{url:"https://ipwho.is/",parse:c=>{var h,p,v,x;if(!c||c.success===!1||!c.ip)return null;const d=String(c.country_code||"").toUpperCase();return{ip:c.ip,country:d,countryName:c.country||d,city:c.city||"",isp:((h=c.connection)==null?void 0:h.isp)||((p=c.connection)==null?void 0:p.org)||"",asn:(v=c.connection)!=null&&v.asn?`AS${c.connection.asn}`:"",timeZone:mn(d,((x=c.timezone)==null?void 0:x.id)||""),latitude:c.latitude,longitude:c.longitude}}},{url:"https://api.ip.sb/geoip",parse:c=>{if(!c||!c.ip)return null;const d=String(c.country_code||"").toUpperCase();return{ip:c.ip,country:d,countryName:c.country||d,city:c.city||"",isp:c.isp||c.organization||"",asn:c.asn?`AS${c.asn}`:"",timeZone:mn(d,c.timezone||""),latitude:c.latitude,longitude:c.longitude}}}];let a=null;const l=async c=>{const d=await is(c.url,{method:"GET",headers:{Accept:"application/json","Cache-Control":"no-cache"},useProxy:s,timeoutMs:3200});if(d.ok&&d.body){const h=c.parse(JSON.parse(d.body));if(h!=null&&h.ip&&(a||(a=h),!t||h.country===t))return h}throw new Error("Geo probe mismatch or empty")};try{const c=await Promise.any(r.map(d=>l(d)));if(c!=null&&c.ip)return c}catch{}return a&&t&&a.country!==t?{...a,country:t,countryName:(Rn==null?void 0:Rn.countryName)||t,city:(Rn==null?void 0:Rn.defaultCity)||"",timeZone:mn(t)}:a}function _g(){if(dn()&&typeof window.GarudaAndroidBridge.getVpnConnectedElapsedSeconds=="function")try{const s=Number(window.GarudaAndroidBridge.getVpnConnectedElapsedSeconds());if(Number.isFinite(s)&&s>=0)return Math.floor(s)}catch{}return Rn!=null&&Rn.connectedAt?Math.max(0,Math.floor((Date.now()-Rn.connectedAt)/1e3)):0}async function rx(s="US",e="United States",t=!0,r=null){if(!dn())return{ok:!1,error:"Android native VPN bridge not available"};Ts=!0;try{const a=typeof s=="object"&&s!==null,l=String((a?s.iso||s.iso2:s)||"US").toUpperCase(),c=String((a?s.name||s.countryName:typeof e=="string"?e:l)||l),d=String(a&&s.city||""),h=typeof e=="boolean"?e:!!t,p=typeof t=="function"?t:typeof r=="function"?r:null,v=await wc(!1,!1),{accsToken:x}=await Dc(!1,!1),g=new Set;let y=yg(v,l,h,g);if(y.poolSize>1)for(let P=0;P<Math.min(y.poolSize,3)&&!await nx(y.primary.host,l);P++)g.add(y.primary.host),gg(y.primary.host),y=yg(v,l,!0,g);const E=await Z0(x,y.primary.signature),A=await new Promise(P=>{const F=`garuda_vpn_start_${Date.now()}_${++ah}`,b=setTimeout(()=>{Ai.has(F)&&(Ai.delete(F),P({ok:!1,error:"Android VpnService start timed out"}))},25e3);Ai.set(F,I=>{clearTimeout(b),P(I||{ok:!1})}),window.GarudaAndroidBridge.startVpnTunnelAsync(F,y.primary.host,y.primary.port||443,JSON.stringify(y.backups),E,"1",l,c)});if(!(A!=null&&A.ok))return gg(y.primary.host),{ok:!1,error:(A==null?void 0:A.error)||"Failed to establish Android System VPN tunnel"};K_(y.primary.host);const S=Date.now(),_={ip:y.primary.host,country:l,countryName:c,city:d,isp:`Garuda Infinity Cloud Gateway (${y.primary.host})`,asn:"AS9009",timeZone:mn(l)};return Rn={iso2:l,countryName:c,defaultCity:d,primaryProxy:y.primary,backupProxies:y.backups,poolIndex:y.poolIndex,poolSize:y.poolSize,verifiedGeo:_,connectedAt:S},lf(!0,l).then(P=>{if(!(P!=null&&P.ip)||!Rn||Rn.connectedAt!==S)return;const F=!P.country||String(P.country).toUpperCase()===l,b={ip:P.ip||y.primary.host,country:l,countryName:F&&P.countryName||c,city:F&&P.city||d,isp:P.isp||`Garuda Infinity Cloud Gateway (${y.primary.host})`,asn:P.asn||"AS9009",timeZone:F&&P.timeZone||mn(l),latitude:P.latitude,longitude:P.longitude};if(Rn.verifiedGeo=b,dn()&&typeof window.GarudaAndroidBridge.updateVpnNotificationMetadata=="function")try{window.GarudaAndroidBridge.updateVpnNotificationMetadata(b.ip,l,b.countryName)}catch{}if(p)try{p(b)}catch{}}).catch(()=>{}),{ok:!0,state:"Connected",iso2:l,primaryProxy:y.primary,backupProxies:y.backups,poolIndex:y.poolIndex,poolSize:y.poolSize,proxyAuthUsername:E,exitIpInfo:_}}finally{Ts=!1}}async function xg(){return dn()?(Rn=null,new Promise(s=>{const e=`garuda_vpn_stop_${Date.now()}_${++ah}`,t=setTimeout(()=>{Ai.has(e)&&(Ai.delete(e),s({ok:!0}))},6e3);Ai.set(e,r=>{clearTimeout(t),s(r||{ok:!0})}),window.GarudaAndroidBridge.stopVpnTunnelAsync(e)})):{ok:!1}}const sx="garuda_infinity_updater_db",Pa="handles",q0="extension_root_dir",Sg=["https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/version.json","https://api.github.com/repos/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/contents/version.json","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/dist-release/version.json","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/master/version.json"],ax=[bo,"https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/main/dist-release/Garuda-Infinity-Extension.zip","https://raw.githubusercontent.com/Garuda-Cyber-Shield/Garuda-Infinity-VPN-Public-Release/master/Garuda-Infinity-Extension.zip"];function Mg(s){if(!s||typeof s!="object")return null;if(s.version||s.appVersion||s.extensionVersion)return s;if(typeof s.content=="string"&&s.encoding==="base64")try{const e=s.content.replace(/\s+/g,""),t=atob(e),r=JSON.parse(t);if(r&&(r.version||r.appVersion||r.extensionVersion))return r}catch{return null}return null}async function ox(){const s=`?t=${Date.now()}`;if(dn())for(const e of Sg)try{const t=await is(`${e}${s}`,{method:"GET",headers:{Accept:"application/json"},useProxy:!1,timeoutMs:6500});if(t!=null&&t.ok&&t.body){const r=Mg(JSON.parse(t.body));if(r)return r}}catch{}for(const e of Sg)try{const t=new AbortController,r=setTimeout(()=>t.abort(),5500),a=await fetch(`${e}${s}`,{method:"GET",cache:"no-store",signal:t.signal});if(clearTimeout(r),a.ok){const l=await a.json(),c=Mg(l);if(c)return c}}catch{}return null}function cf(s,e){const t=s||bo,r="Garuda-Infinity-Extension.zip",a=document.createElement("a");a.href=`${t}${t.includes("?")?"&":"?"}v=${Date.now()}`,a.download=r,a.target="_blank",a.rel="noopener noreferrer",document.body.appendChild(a),a.click(),document.body.removeChild(a)}function lx(s,e,t){var d;const r=String(e).replace(/^[vV]/,""),a=s,l=`${a}${a.includes("?")?"&":"?"}v=${r}_${Date.now()}`;if(dn()&&typeof((d=window.GarudaAndroidBridge)==null?void 0:d.downloadUpdateApk)=="function"&&l.startsWith("https://"))try{if(window.GarudaAndroidBridge.downloadUpdateApk(l,r))return{method:"download_manager",url:l}}catch{}const c=document.createElement("a");return c.href=l,c.download=`Garuda-Infinity-V${r}.apk`,c.target="_blank",c.rel="noopener noreferrer",document.body.appendChild(c),c.click(),document.body.removeChild(c),{method:"browser",url:l}}function K0(){return new Promise((s,e)=>{const t=indexedDB.open(sx,1);t.onupgradeneeded=()=>{const r=t.result;r.objectStoreNames.contains(Pa)||r.createObjectStore(Pa)},t.onsuccess=()=>s(t.result),t.onerror=()=>e(t.error)})}async function cx(){try{const s=await K0();return await new Promise(e=>{const r=s.transaction(Pa,"readonly").objectStore(Pa).get(q0);r.onsuccess=()=>e(r.result||null),r.onerror=()=>e(null)})}catch{return null}}async function ux(s){try{const e=await K0();await new Promise((t,r)=>{const a=e.transaction(Pa,"readwrite");a.objectStore(Pa).put(s,q0),a.oncomplete=()=>t(),a.onerror=()=>r(a.error)})}catch{}}async function Eg(s,e=!0){if(!s)return!1;try{const t={mode:"readwrite"};if(await s.queryPermission(t)==="granted"||e&&await s.requestPermission(t)==="granted")return!0}catch{return!1}return!1}async function dx(s){const e=new DataView(s),t=new Uint8Array(s);let r=-1;const a=Math.max(0,t.length-65557);for(let v=t.length-22;v>=a;v--)if(e.getUint32(v,!0)===101010256){r=v;break}if(r===-1)throw new Error("Invalid ZIP archive (Central Directory not found)");const l=e.getUint16(r+10,!0),c=e.getUint32(r+16,!0),d=new TextDecoder("utf-8"),h=[];let p=c;for(let v=0;v<l&&e.getUint32(p,!0)===33639248;v++){const x=e.getUint16(p+10,!0),g=e.getUint32(p+20,!0),y=e.getUint16(p+28,!0),E=e.getUint16(p+30,!0),A=e.getUint16(p+32,!0),S=e.getUint32(p+42,!0),P=d.decode(t.subarray(p+46,p+46+y)).replace(/\\/g,"/").replace(/^\/+/,"");if(p+=46+y+E+A,!P||P.endsWith("/"))continue;if(e.getUint32(S,!0)!==67324752)throw new Error(`Corrupt local header for ${P}`);const F=e.getUint16(S+26,!0),b=e.getUint16(S+28,!0),I=S+30+F+b,L=t.subarray(I,I+g);let U;if(x===0)U=new Uint8Array(L);else if(x===8){const w=new DecompressionStream("deflate-raw"),N=w.writable.getWriter();N.write(L),N.close();const k=await new Response(w.readable).arrayBuffer();U=new Uint8Array(k)}else throw new Error(`Unsupported ZIP compression method ${x}`);h.push({path:P,data:U})}return h}async function fx(s,e,t){const r=e.split("/").filter(Boolean);if(r.length===0)return;let a=s;for(let h=0;h<r.length-1;h++)a=await a.getDirectoryHandle(r[h],{create:!0});const l=r[r.length-1],d=await(await a.getFileHandle(l,{create:!0})).createWritable();await d.write(t),await d.close()}async function hx(){const s=Date.now();for(const e of ax)try{const t=`${e}${e.includes("?")?"&":"?"}t=${s}`,r=await fetch(t,{cache:"no-store"});if(r.ok){const a=await r.arrayBuffer();if(a&&a.byteLength>100)return a}}catch{}throw new Error("Failed to download extension update package from GitHub release")}async function J0({onProgress:s,allowPicker:e=!0}={}){const t=v=>{typeof s=="function"&&s(v)};let r=await cx(),a=await Eg(r,!0);if(!a){if(!e||typeof window.showDirectoryPicker!="function")return{ok:!1,needsFolderSelection:!0};if(t("Select your unpacked Garuda Infinity extension folder once..."),r=await window.showDirectoryPicker({id:"garuda_infinity_ext_dir",mode:"readwrite"}),a=await Eg(r,!0),!a)throw new Error("Write permission to extension folder was denied.");await ux(r)}t("Downloading latest extension update package...");const l=await hx();t("Extracting update files in-place...");const c=await dx(l);if(!c.length)throw new Error("Downloaded update archive was empty.");const d=c.some(v=>v.path==="manifest.json");let h="";if(!d){const v=c.find(x=>x.path.endsWith("/manifest.json"));v&&(h=v.path.slice(0,v.path.length-13))}let p=0;for(const v of c){let x=v.path;h&&x.startsWith(h)&&(x=x.slice(h.length)),x&&(await fx(r,x,v.data),p++)}return t(`Updated ${p} files! Reloading extension...`),setTimeout(()=>{var v,x;try{typeof chrome<"u"&&((v=chrome.runtime)!=null&&v.sendMessage)&&chrome.runtime.sendMessage({action:"RELOAD_EXTENSION"}),typeof chrome<"u"&&((x=chrome.runtime)!=null&&x.reload)&&chrome.runtime.reload()}catch{window.location.reload()}},550),{ok:!0,writtenCount:p}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="186",ba={ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},px=0,wg=1,mx=2,hc=1,gx=2,Ao=3,Ps=0,$n=1,ki=2,Ar=0,Ro=1,ws=2,Ag=3,Tg=4,vx=5,Ea=100,yx=101,_x=102,xx=103,Sx=104,Mx=200,Ex=201,wx=202,Ax=203,Q0=204,ev=205,Tx=206,bx=207,Cx=208,Rx=209,Px=210,Lx=211,Ix=212,Nx=213,Dx=214,uf=0,df=1,ff=2,Po=3,hf=4,pf=5,mf=6,gf=7,tv=0,Ux=1,Fx=2,nr=0,nv=1,iv=2,rv=3,ch=4,sv=5,av=6,ov=7,lv=300,Ls=301,La=302,Sd=303,Md=304,Uc=306,vf=1e3,wr=1001,yf=1002,Nn=1003,Ox=1004,Bl=1005,Vn=1006,Ed=1007,bs=1008,pi=1009,cv=1010,uv=1011,Lo=1012,uh=1013,ir=1014,zi=1015,rr=1016,dh=1017,fh=1018,Io=1020,dv=35902,fv=35899,hv=1021,pv=1022,Gi=1023,br=1026,Cs=1027,hh=1028,ph=1029,Is=1030,mh=1031,gh=1033,pc=33776,mc=33777,gc=33778,vc=33779,_f=35840,xf=35841,Sf=35842,Mf=35843,Ef=36196,wf=37492,Af=37496,Tf=37488,bf=37489,Ac=37490,Cf=37491,Rf=37808,Pf=37809,Lf=37810,If=37811,Nf=37812,Df=37813,Uf=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Gf=37820,Vf=37821,Hf=36492,Wf=36494,Xf=36495,jf=36283,Yf=36284,Tc=36285,$f=36286,kx=3200,Zf=0,Bx=1,ts="",hi="srgb",bc="srgb-linear",Cc="linear",Xt="srgb",wd=7680,zx=519,Gx=512,Vx=513,Hx=514,vh=515,Wx=516,Xx=517,yh=518,jx=519,Yx=35044,bg="300 es",tr=2e3,No=2001;function $x(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zx(){const s=Rc("canvas");return s.style.display="block",s}const Cg={};function Rg(...s){const e="THREE."+s.shift();console.log(e,...s)}function mv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=mv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ot(...s){s=mv(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ca(...s){const e=s.join(" ");e in Cg||(Cg[e]=!0,gt(...s))}function qx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Kx={[uf]:df,[ff]:mf,[hf]:gf,[Po]:pf,[df]:uf,[mf]:ff,[gf]:hf,[pf]:Po};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=Math.PI/180,qf=180/Math.PI;function Uo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Jx(s,e){return(s%e+e)%e}function Ad(s,e,t){return(1-t)*s+t*e}function ho(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qx={DEG2RAD:yc},Rh=class Rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let ht=Rh;class rs{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let h=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3],g=l[c+0],y=l[c+1],E=l[c+2],A=l[c+3];if(x!==A||h!==g||p!==y||v!==E){let S=h*g+p*y+v*E+x*A;S<0&&(g=-g,y=-y,E=-E,A=-A,S=-S);let _=1-d;if(S<.9995){const P=Math.acos(S),F=Math.sin(P);_=Math.sin(_*P)/F,d=Math.sin(d*P)/F,h=h*_+g*d,p=p*_+y*d,v=v*_+E*d,x=x*_+A*d}else{h=h*_+g*d,p=p*_+y*d,v=v*_+E*d,x=x*_+A*d;const P=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=P,p*=P,v*=P,x*=P}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],h=r[a+1],p=r[a+2],v=r[a+3],x=l[c],g=l[c+1],y=l[c+2],E=l[c+3];return e[t]=d*E+v*x+h*y-p*g,e[t+1]=h*E+v*g+p*x-d*y,e[t+2]=p*E+v*y+d*g-h*x,e[t+3]=v*E-d*x-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,p=d(r/2),v=d(a/2),x=d(l/2),g=h(r/2),y=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=g*v*x+p*y*E,this._y=p*y*x-g*v*E,this._z=p*v*E+g*y*x,this._w=p*v*x-g*y*E;break;case"YXZ":this._x=g*v*x+p*y*E,this._y=p*y*x-g*v*E,this._z=p*v*E-g*y*x,this._w=p*v*x+g*y*E;break;case"ZXY":this._x=g*v*x-p*y*E,this._y=p*y*x+g*v*E,this._z=p*v*E+g*y*x,this._w=p*v*x-g*y*E;break;case"ZYX":this._x=g*v*x-p*y*E,this._y=p*y*x+g*v*E,this._z=p*v*E-g*y*x,this._w=p*v*x+g*y*E;break;case"YZX":this._x=g*v*x+p*y*E,this._y=p*y*x+g*v*E,this._z=p*v*E-g*y*x,this._w=p*v*x-g*y*E;break;case"XZY":this._x=g*v*x-p*y*E,this._y=p*y*x-g*v*E,this._z=p*v*E+g*y*x,this._w=p*v*x+g*y*E;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],h=t[9],p=t[2],v=t[6],x=t[10],g=r+d+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-p)*y,this._z=(c-a)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(v-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(l-p)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(c-a)/y,this._x=(l+p)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*d+a*p-l*h,this._y=a*v+c*h+l*d-r*p,this._z=l*v+c*p+r*h-a*d,this._w=c*v-r*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let h=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,p=2*(c*a-d*r),v=2*(d*t-l*a),x=2*(l*r-c*t);return this.x=t+h*p+c*x-d*v,this.y=r+h*v+d*p-l*x,this.z=a+h*x+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let Z=Ph;const Td=new Z,Pg=new rs,Lh=class Lh{constructor(e,t,r,a,l,c,d,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,h,p)}set(e,t,r,a,l,c,d,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],h=r[6],p=r[1],v=r[4],x=r[7],g=r[2],y=r[5],E=r[8],A=a[0],S=a[3],_=a[6],P=a[1],F=a[4],b=a[7],I=a[2],L=a[5],U=a[8];return l[0]=c*A+d*P+h*I,l[3]=c*S+d*F+h*L,l[6]=c*_+d*b+h*U,l[1]=p*A+v*P+x*I,l[4]=p*S+v*F+x*L,l[7]=p*_+v*b+x*U,l[2]=g*A+y*P+E*I,l[5]=g*S+y*F+E*L,l[8]=g*_+y*b+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*d*p-r*l*v+r*d*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],v=e[8],x=v*c-d*p,g=d*h-v*l,y=p*l-c*h,E=t*x+r*g+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(a*p-v*r)*A,e[2]=(d*r-a*c)*A,e[3]=g*A,e[4]=(v*t-a*h)*A,e[5]=(a*l-d*t)*A,e[6]=y*A,e[7]=(r*h-p*t)*A,e[8]=(c*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*d)+c+e,-a*p,a*h,-a*(-p*c+h*d)+d+t,0,0,1),this}scale(e,t){return Ca("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return Ca("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return Ca("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;let wt=Lh;const bd=new wt,Lg=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eS(){const s={enabled:!0,workingColorSpace:bc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xt&&(a.r=Tr(a.r),a.g=Tr(a.g),a.b=Tr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xt&&(a.r=Ra(a.r),a.g=Ra(a.g),a.b=Ra(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ts?Cc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[bc]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:Lg,fromXYZ:Ig,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:Lg,fromXYZ:Ig,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const It=eS();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ca;class tS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ca===void 0&&(ca=Rc("canvas")),ca.width=e.width,ca.height=e.height;const a=ca.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ca}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Tr(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Tr(t[r]/255)*255):t[r]=Tr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nS=0;class _h{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Cd(a[c].image)):l.push(Cd(a[c]))}else l=Cd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let iS=0;const Rd=new Z;class Zn extends as{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,r=wr,a=wr,l=Vn,c=bs,d=Gi,h=pi,p=Zn.DEFAULT_ANISOTROPY,v=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Uo(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=lv;Zn.DEFAULT_ANISOTROPY=1;const Ih=class Ih{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],x=h[8],g=h[1],y=h[5],E=h[9],A=h[2],S=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,b=(y+1)/2,I=(_+1)/2,L=(v+g)/4,U=(x+A)/4,w=(E+S)/4;return F>b&&F>I?F<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(F),a=L/r,l=U/r):b>I?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=L/a,l=w/a):I<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),r=U/l,a=w/l),this.set(r,a,l,t),this}let P=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(g-v)*(g-v));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(x-A)/P,this.z=(g-v)/P,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;let an=Ih;class rS extends as{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Zn(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new _h(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends rS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class gv extends Zn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sS extends Zn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nc=class Nc{constructor(e,t,r,a,l,c,d,h,p,v,x,g,y,E,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,h,p,v,x,g,y,E,A,S)}set(e,t,r,a,l,c,d,h,p,v,x,g,y,E,A,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=d,_[13]=h,_[2]=p,_[6]=v,_[10]=x,_[14]=g,_[3]=y,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/ua.setFromMatrixColumn(e,0).length(),l=1/ua.setFromMatrixColumn(e,1).length(),c=1/ua.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*v,y=c*x,E=d*v,A=d*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=y+E*p,t[5]=g-A*p,t[9]=-d*h,t[2]=A-g*p,t[6]=E+y*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,y=h*x,E=p*v,A=p*x;t[0]=g+A*d,t[4]=E*d-y,t[8]=c*p,t[1]=c*x,t[5]=c*v,t[9]=-d,t[2]=y*d-E,t[6]=A+g*d,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,y=h*x,E=p*v,A=p*x;t[0]=g-A*d,t[4]=-c*x,t[8]=E+y*d,t[1]=y+E*d,t[5]=c*v,t[9]=A-g*d,t[2]=-c*p,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,y=c*x,E=d*v,A=d*x;t[0]=h*v,t[4]=E*p-y,t[8]=g*p+A,t[1]=h*x,t[5]=A*p+g,t[9]=y*p-E,t[2]=-p,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,y=c*p,E=d*h,A=d*p;t[0]=h*v,t[4]=A-g*x,t[8]=E*x+y,t[1]=x,t[5]=c*v,t[9]=-d*v,t[2]=-p*v,t[6]=y*x+E,t[10]=g-A*x}else if(e.order==="XZY"){const g=c*h,y=c*p,E=d*h,A=d*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=g*x+A,t[5]=c*v,t[9]=y*x-E,t[2]=E*x-y,t[6]=d*v,t[10]=A*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,oS)}lookAt(e,t,r){const a=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Zr.crossVectors(r,di),Zr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Zr.crossVectors(r,di)),Zr.normalize(),zl.crossVectors(di,Zr),a[0]=Zr.x,a[4]=zl.x,a[8]=di.x,a[1]=Zr.y,a[5]=zl.y,a[9]=di.y,a[2]=Zr.z,a[6]=zl.z,a[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],h=r[8],p=r[12],v=r[1],x=r[5],g=r[9],y=r[13],E=r[2],A=r[6],S=r[10],_=r[14],P=r[3],F=r[7],b=r[11],I=r[15],L=a[0],U=a[4],w=a[8],N=a[12],k=a[1],G=a[5],W=a[9],K=a[13],z=a[2],J=a[6],ge=a[10],q=a[14],ee=a[3],H=a[7],j=a[11],D=a[15];return l[0]=c*L+d*k+h*z+p*ee,l[4]=c*U+d*G+h*J+p*H,l[8]=c*w+d*W+h*ge+p*j,l[12]=c*N+d*K+h*q+p*D,l[1]=v*L+x*k+g*z+y*ee,l[5]=v*U+x*G+g*J+y*H,l[9]=v*w+x*W+g*ge+y*j,l[13]=v*N+x*K+g*q+y*D,l[2]=E*L+A*k+S*z+_*ee,l[6]=E*U+A*G+S*J+_*H,l[10]=E*w+A*W+S*ge+_*j,l[14]=E*N+A*K+S*q+_*D,l[3]=P*L+F*k+b*z+I*ee,l[7]=P*U+F*G+b*J+I*H,l[11]=P*w+F*W+b*ge+I*j,l[15]=P*N+F*K+b*q+I*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],p=e[13],v=e[2],x=e[6],g=e[10],y=e[14],E=e[3],A=e[7],S=e[11],_=e[15],P=h*y-p*g,F=d*y-p*x,b=d*g-h*x,I=c*y-p*v,L=c*g-h*v,U=c*x-d*v;return t*(A*P-S*F+_*b)-r*(E*P-S*I+_*L)+a*(E*F-A*I+_*U)-l*(E*b-A*L+S*U)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],d=e[9],h=e[2],p=e[6],v=e[10];return t*(c*v-d*p)-r*(l*v-d*h)+a*(l*p-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],v=e[8],x=e[9],g=e[10],y=e[11],E=e[12],A=e[13],S=e[14],_=e[15],P=t*d-r*c,F=t*h-a*c,b=t*p-l*c,I=r*h-a*d,L=r*p-l*d,U=a*p-l*h,w=v*A-x*E,N=v*S-g*E,k=v*_-y*E,G=x*S-g*A,W=x*_-y*A,K=g*_-y*S,z=P*K-F*W+b*G+I*k-L*N+U*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/z;return e[0]=(d*K-h*W+p*G)*J,e[1]=(a*W-r*K-l*G)*J,e[2]=(A*U-S*L+_*I)*J,e[3]=(g*L-x*U-y*I)*J,e[4]=(h*k-c*K-p*N)*J,e[5]=(t*K-a*k+l*N)*J,e[6]=(S*b-E*U-_*F)*J,e[7]=(v*U-g*b+y*F)*J,e[8]=(c*W-d*k+p*w)*J,e[9]=(r*k-t*W-l*w)*J,e[10]=(E*L-A*b+_*P)*J,e[11]=(x*b-v*L-y*P)*J,e[12]=(d*N-c*G-h*w)*J,e[13]=(t*G-r*N+a*w)*J,e[14]=(A*F-E*I-S*P)*J,e[15]=(v*I-x*F+g*P)*J,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,h=e.z,p=l*c,v=l*d;return this.set(p*c+r,p*d-a*h,p*h+a*d,0,p*d+a*h,v*d+r,v*h-a*c,0,p*h-a*d,v*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,p=l+l,v=c+c,x=d+d,g=l*p,y=l*v,E=l*x,A=c*v,S=c*x,_=d*x,P=h*p,F=h*v,b=h*x,I=r.x,L=r.y,U=r.z;return a[0]=(1-(A+_))*I,a[1]=(y+b)*I,a[2]=(E-F)*I,a[3]=0,a[4]=(y-b)*L,a[5]=(1-(g+_))*L,a[6]=(S+P)*L,a[7]=0,a[8]=(E+F)*U,a[9]=(S-P)*U,a[10]=(1-(g+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=ua.set(a[0],a[1],a[2]).length();const d=ua.set(a[4],a[5],a[6]).length(),h=ua.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Ui.copy(this);const p=1/c,v=1/d,x=1/h;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=x,Ui.elements[9]*=x,Ui.elements[10]*=x,t.setFromRotationMatrix(Ui),r.x=c,r.y=d,r.z=h,this}makePerspective(e,t,r,a,l,c,d=tr,h=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(r-a),g=(t+e)/(t-e),y=(r+a)/(r-a);let E,A;if(h)E=l/(c-l),A=c*l/(c-l);else if(d===tr)E=-(c+l)/(c-l),A=-2*c*l/(c-l);else if(d===No)E=-c/(c-l),A=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=tr,h=!1){const p=this.elements,v=2/(t-e),x=2/(r-a),g=-(t+e)/(t-e),y=-(r+a)/(r-a);let E,A;if(h)E=1/(c-l),A=c/(c-l);else if(d===tr)E=-2/(c-l),A=-(c+l)/(c-l);else if(d===No)E=-1/(c-l),A=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Nc.prototype.isMatrix4=!0;let Wt=Nc;const ua=new Z,Ui=new Wt,aS=new Z(0,0,0),oS=new Z(1,1,1),Zr=new Z,zl=new Z,di=new Z,Ng=new Wt,Dg=new rs;class ss{constructor(e=0,t=0,r=0,a=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],p=a[5],v=a[9],x=a[2],g=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ct(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const Ug=new Z,da=new rs,gr=new Wt,Gl=new Z,po=new Z,cS=new Z,uS=new rs,Fg=new Z(1,0,0),Og=new Z(0,1,0),kg=new Z(0,0,1),Bg={type:"added"},dS={type:"removed"},fa={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Pn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Z,t=new ss,r=new rs,a=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new wt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(Fg,e)}rotateY(e){return this.rotateOnAxis(Og,e)}rotateZ(e){return this.rotateOnAxis(kg,e)}translateOnAxis(e,t){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fg,e)}translateY(e){return this.translateOnAxis(Og,e)}translateZ(e){return this.translateOnAxis(kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gl.copy(e):Gl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(po,Gl,this.up):gr.lookAt(Gl,po,this.up),this.quaternion.setFromRotationMatrix(gr),a&&(gr.extractRotation(a.matrixWorld),da.setFromRotationMatrix(gr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bg),fa.child=e,this.dispatchEvent(fa),fa.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dS),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bg),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,cS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,uS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),x=c(e.shapes),g=c(e.skeletons),y=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const h=[];for(const p in d){const v=d[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new Z(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ns extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fS={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fS)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ns;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Id(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=It.workingColorSpace){if(e=Jx(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Id(c,l,e+1/3),this.g=Id(c,l,e),this.b=Id(c,l,e-1/3)}return It.colorSpaceToWorking(this,a),this}setStyle(e,t=hi){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=vv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return It.workingToColorSpace(zn.copy(this),e),Math.round(Ct(zn.r*255,0,255))*65536+Math.round(Ct(zn.g*255,0,255))*256+Math.round(Ct(zn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(zn.copy(this),t);const r=zn.r,a=zn.g,l=zn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,p;const v=(d+c)/2;if(d===c)h=0,p=0;else{const x=c-d;switch(p=v<=.5?x/(c+d):x/(2-c-d),c){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=hi){It.workingToColorSpace(zn.copy(this),e);const t=zn.r,r=zn.g,a=zn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Vl);const r=Ad(qr.h,Vl.h,t),a=Ad(qr.s,Vl.s,t),l=Ad(qr.l,Vl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new St;St.NAMES=vv;class Sh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=t}clone(){return new Sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hS extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new Z,vr=new Z,Nd=new Z,yr=new Z,ha=new Z,pa=new Z,zg=new Z,Dd=new Z,Ud=new Z,Fd=new Z,Od=new an,kd=new an,Bd=new an;class Bi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Fi.subVectors(e,t),a.cross(Fi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Fi.subVectors(a,t),vr.subVectors(r,t),Nd.subVectors(e,t);const c=Fi.dot(Fi),d=Fi.dot(vr),h=Fi.dot(Nd),p=vr.dot(vr),v=vr.dot(Nd),x=c*p-d*d;if(x===0)return l.set(0,0,0),null;const g=1/x,y=(p*h-d*v)*g,E=(c*v-d*h)*g;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,a,l,c,d,h){return this.getBarycoord(e,t,r,a,yr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,yr.x),h.addScaledVector(c,yr.y),h.addScaledVector(d,yr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return Od.setScalar(0),kd.setScalar(0),Bd.setScalar(0),Od.fromBufferAttribute(e,t),kd.fromBufferAttribute(e,r),Bd.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Od,l.x),c.addScaledVector(kd,l.y),c.addScaledVector(Bd,l.z),c}static isFrontFacing(e,t,r,a){return Fi.subVectors(r,t),vr.subVectors(e,t),Fi.cross(vr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Fi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Bi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;ha.subVectors(a,r),pa.subVectors(l,r),Dd.subVectors(e,r);const h=ha.dot(Dd),p=pa.dot(Dd);if(h<=0&&p<=0)return t.copy(r);Ud.subVectors(e,a);const v=ha.dot(Ud),x=pa.dot(Ud);if(v>=0&&x<=v)return t.copy(a);const g=h*x-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(ha,c);Fd.subVectors(e,l);const y=ha.dot(Fd),E=pa.dot(Fd);if(E>=0&&y<=E)return t.copy(l);const A=y*p-h*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(pa,d);const S=v*E-y*x;if(S<=0&&x-v>=0&&y-E>=0)return zg.subVectors(l,a),d=(x-v)/(x-v+(y-E)),t.copy(a).addScaledVector(zg,d);const _=1/(S+A+g);return c=A*_,d=g*_,t.copy(r).addScaledVector(ha,c).addScaledVector(pa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ns{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Oi):Oi.fromBufferAttribute(l,c),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hl.copy(r.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Wl.subVectors(this.max,mo),ma.subVectors(e.a,mo),ga.subVectors(e.b,mo),va.subVectors(e.c,mo),Kr.subVectors(ga,ma),Jr.subVectors(va,ga),_s.subVectors(ma,va);let t=[0,-Kr.z,Kr.y,0,-Jr.z,Jr.y,0,-_s.z,_s.y,Kr.z,0,-Kr.x,Jr.z,0,-Jr.x,_s.z,0,-_s.x,-Kr.y,Kr.x,0,-Jr.y,Jr.x,0,-_s.y,_s.x,0];return!zd(t,ma,ga,va,Wl)||(t=[1,0,0,0,1,0,0,0,1],!zd(t,ma,ga,va,Wl))?!1:(Xl.crossVectors(Kr,Jr),t=[Xl.x,Xl.y,Xl.z],zd(t,ma,ga,va,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Oi=new Z,Hl=new Ns,ma=new Z,ga=new Z,va=new Z,Kr=new Z,Jr=new Z,_s=new Z,mo=new Z,Wl=new Z,Xl=new Z,xs=new Z;function zd(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){xs.fromArray(s,l);const d=a.x*Math.abs(xs.x)+a.y*Math.abs(xs.y)+a.z*Math.abs(xs.z),h=e.dot(xs),p=t.dot(xs),v=r.dot(xs);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>d)return!1}return!0}const pn=new Z,jl=new ht;let pS=0;class Gn extends as{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Yx,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ho(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ri(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),r=ri(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),r=ri(r,this.array),a=ri(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),r=ri(r,this.array),a=ri(a,this.array),l=ri(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yv extends Gn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _v extends Gn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Kt extends Gn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const mS=new Ns,go=new Z,Gd=new Z;class Ds{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):mS.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const t=go.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(go,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(Gd)),this.expandByPoint(go.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gS=0;const Ei=new Wt,Vd=new Pn,ya=new Z,fi=new Ns,vo=new Ns,Cn=new Z;class ln extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($x(e)?_v:yv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Kt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];fi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];vo.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(fi.min,vo.min),fi.expandByPoint(Cn),Cn.addVectors(fi.max,vo.max),fi.expandByPoint(Cn)):(fi.expandByPoint(vo.min),fi.expandByPoint(vo.max))}fi.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)Cn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Cn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Cn.fromBufferAttribute(d,p),h&&(ya.fromBufferAttribute(e,p),Cn.add(ya)),a=Math.max(a,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Gn(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],h=[];for(let w=0;w<r.count;w++)d[w]=new Z,h[w]=new Z;const p=new Z,v=new Z,x=new Z,g=new ht,y=new ht,E=new ht,A=new Z,S=new Z;function _(w,N,k){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,N),x.fromBufferAttribute(r,k),g.fromBufferAttribute(l,w),y.fromBufferAttribute(l,N),E.fromBufferAttribute(l,k),v.sub(p),x.sub(p),y.sub(g),E.sub(g);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(G),S.copy(x).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(G),d[w].add(A),d[N].add(A),d[k].add(A),h[w].add(S),h[N].add(S),h[k].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let w=0,N=P.length;w<N;++w){const k=P[w],G=k.start,W=k.count;for(let K=G,z=G+W;K<z;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const F=new Z,b=new Z,I=new Z,L=new Z;function U(w){I.fromBufferAttribute(a,w),L.copy(I);const N=d[w];F.copy(N),F.sub(I.multiplyScalar(I.dot(N))).normalize(),b.crossVectors(L,N);const G=b.dot(h[w])<0?-1:1;c.setXYZW(w,F.x,F.y,F.z,G)}for(let w=0,N=P.length;w<N;++w){const k=P[w],G=k.start,W=k.count;for(let K=G,z=G+W;K<z;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const a=new Z,l=new Z,c=new Z,d=new Z,h=new Z,p=new Z,v=new Z,x=new Z;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),v.subVectors(c,l),x.subVectors(a,l),v.cross(x),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(v),h.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),x.subVectors(a,l),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(d,h){const p=d.array,v=d.itemSize,x=d.normalized,g=new p.constructor(h.length*v);let y=0,E=0;for(let A=0,S=h.length;A<S;A++){d.isInterleavedBufferAttribute?y=h[A]*d.data.stride+d.offset:y=h[A]*v;for(let _=0;_<v;_++)g[E++]=p[y++]}return new Gn(g,v,x)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const g=p[v],y=e(g,r);h.push(y)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,g=p.length;x<g;x++){const y=p[x];v.push(y.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let g=0,y=x.length;g<y;g++)v.push(x[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new Z,vS=new Z,yS=new wt;class Er{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Hd.subVectors(r,t).cross(vS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Hd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||yS.getNormalMatrix(e),a=this.coplanarPoint(Hd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _S=0;class Us extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=Ro,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q0,this.blendDst=ev,this.blendEquation=Ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wd,this.stencilZFail=wd,this.stencilZPass=wd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Er().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ht().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xr=new Z,Wd=new Z,Yl=new Z,$l=new Z;class Fo{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Wd.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),$l.copy(this.origin).sub(Wd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Yl),d=$l.dot(this.direction),h=-$l.dot(Yl),p=$l.lengthSq(),v=Math.abs(1-c*c);let x,g,y,E;if(v>0)if(x=c*h-d,g=c*d-h,E=l*v,x>=0)if(g>=-E)if(g<=E){const A=1/v;x*=A,g*=A,y=x*(x+c*g+2*d)+g*(c*x+g+2*h)+p}else g=l,x=Math.max(0,-(c*g+d)),y=-x*x+g*(g+2*h)+p;else g=-l,x=Math.max(0,-(c*g+d)),y=-x*x+g*(g+2*h)+p;else g<=-E?(x=Math.max(0,-(-c*l+d)),g=x>0?-l:Math.min(Math.max(-l,-h),l),y=-x*x+g*(g+2*h)+p):g<=E?(x=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(x=Math.max(0,-(c*l+d)),g=x>0?l:Math.min(Math.max(-l,-h),l),y=-x*x+g*(g+2*h)+p);else g=c>0?-l:l,x=Math.max(0,-(c*g+d)),y=-x*x+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Wd).addScaledVector(Yl,g),y}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);const r=xr.dot(this.direction),a=xr.dot(xr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),x>=0?(d=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(d=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,r,a,l){const c=this.origin,d=this.direction,h=d.x,p=d.y,v=d.z,x=e.x-c.x,g=e.y-c.y,y=e.z-c.z,E=t.x-c.x,A=t.y-c.y,S=t.z-c.z,_=r.x-c.x,P=r.y-c.y,F=r.z-c.z,b=Math.abs(h),I=Math.abs(p),L=Math.abs(v);let U,w,N,k,G,W,K,z,J,ge,q,ee;if(b>=I&&b>=L?(N=h,W=x,J=E,ee=_,h>=0?(U=p,w=v,k=g,G=y,K=A,z=S,ge=P,q=F):(U=v,w=p,k=y,G=g,K=S,z=A,ge=F,q=P)):I>=L?(N=p,W=g,J=A,ee=P,p>=0?(U=v,w=h,k=y,G=x,K=S,z=E,ge=F,q=_):(U=h,w=v,k=x,G=y,K=E,z=S,ge=_,q=F)):(N=v,W=y,J=S,ee=F,v>=0?(U=h,w=p,k=x,G=g,K=E,z=A,ge=_,q=P):(U=p,w=h,k=g,G=x,K=A,z=E,ge=P,q=_)),N===0)return null;const H=U/N,j=w/N,D=1/N,le=k-H*W,Le=G-j*W,Ke=K-H*J,$e=z-j*J,Ae=ge-H*ee,re=q-j*ee,ne=Ae*$e-re*Ke,Oe=le*re-Le*Ae,Me=Ke*Le-$e*le;if(a){if(ne<0||Oe<0||Me<0)return null}else if((ne<0||Oe<0||Me<0)&&(ne>0||Oe>0||Me>0))return null;const Be=ne+Oe+Me;if(Be===0)return null;const yt=D*(ne*W+Oe*J+Me*ee);return(Be>0?yt<0:yt>0)?null:this.at(yt/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gg=new Wt,Ss=new Fo,Zl=new Ds,Vg=new Z,ql=new Z,Kl=new Z,Jl=new Z,Xd=new Z,Ql=new Z,Hg=new Z,ec=new Z;class Sn extends Pn{constructor(e=new ln,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Ql.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=d[h],x=l[h];v!==0&&(Xd.fromBufferAttribute(x,e),c?Ql.addScaledVector(Xd,v):Ql.addScaledVector(Xd.sub(t),v))}t.add(Ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Zl.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Zl,Vg)===null||Ss.origin.distanceToSquared(Vg)>(e.far-e.near)**2))&&(Gg.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(Gg),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,g=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const S=g[E],_=c[S.materialIndex],P=Math.max(S.start,y.start),F=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let b=P,I=F;b<I;b+=3){const L=d.getX(b),U=d.getX(b+1),w=d.getX(b+2);a=tc(this,_,e,r,p,v,x,L,U,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const P=d.getX(S),F=d.getX(S+1),b=d.getX(S+2);a=tc(this,c,e,r,p,v,x,P,F,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const S=g[E],_=c[S.materialIndex],P=Math.max(S.start,y.start),F=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let b=P,I=F;b<I;b+=3){const L=b,U=b+1,w=b+2;a=tc(this,_,e,r,p,v,x,L,U,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const P=S,F=S+1,b=S+2;a=tc(this,c,e,r,p,v,x,P,F,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function xS(s,e,t,r,a,l,c,d){let h;if(e.side===$n?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===Ps,d),h===null)return null;ec.copy(d),ec.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ec);return p<t.near||p>t.far?null:{distance:p,point:ec.clone(),object:s}}function tc(s,e,t,r,a,l,c,d,h,p){s.getVertexPosition(d,ql),s.getVertexPosition(h,Kl),s.getVertexPosition(p,Jl);const v=xS(s,e,t,r,ql,Kl,Jl,Hg);if(v){const x=new Z;Bi.getBarycoord(Hg,ql,Kl,Jl,x),a&&(v.uv=Bi.getInterpolatedAttribute(a,d,h,p,x,new ht)),l&&(v.uv1=Bi.getInterpolatedAttribute(l,d,h,p,x,new ht)),c&&(v.normal=Bi.getInterpolatedAttribute(c,d,h,p,x,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:h,c:p,normal:new Z,materialIndex:0};Bi.getNormal(ql,Kl,Jl,g.normal),v.face=g,v.barycoord=x}return v}class xv extends Zn{constructor(e=null,t=1,r=1,a,l,c,d,h,p=Nn,v=Nn,x,g){super(null,c,d,h,p,v,a,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wg extends Gn{constructor(e,t,r,a=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _a=new Wt,Xg=new Wt,nc=[],jg=new Ns,SS=new Wt,yo=new Sn,_o=new Ds;class MS extends Sn{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wg(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,SS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,_a),jg.copy(e.boundingBox).applyMatrix4(_a),this.boundingBox.union(jg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,_a),_o.copy(e.boundingSphere).applyMatrix4(_a),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=r.length+1,c=e*l+1;for(let d=0;d<r.length;d++)r[d]=a[c+d]}raycast(e,t){const r=this.matrixWorld,a=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(r),e.ray.intersectsSphere(_o)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,_a),Xg.multiplyMatrices(r,_a),yo.matrixWorld=Xg,yo.raycast(e,nc);for(let c=0,d=nc.length;c<d;c++){const h=nc[c];h.instanceId=l,h.object=this,t.push(h)}nc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const r=t.morphTargetInfluences,a=r.length+1;this.morphTexture===null&&(this.morphTexture=new xv(new Float32Array(a*this.count),a,this.count,hh,zi));const l=this.morphTexture.source.data.data;let c=0;for(let p=0;p<r.length;p++)c+=r[p];const d=this.geometry.morphTargetsRelative?1:1-c,h=a*e;return l[h]=d,l.set(r,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ms=new Ds,ES=new ht(.5,.5),ic=new Z;class Mh{constructor(e=new Er,t=new Er,r=new Er,a=new Er,l=new Er,c=new Er){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],p=l[3],v=l[4],x=l[5],g=l[6],y=l[7],E=l[8],A=l[9],S=l[10],_=l[11],P=l[12],F=l[13],b=l[14],I=l[15];if(a[0].setComponents(p-c,y-v,_-E,I-P).normalize(),a[1].setComponents(p+c,y+v,_+E,I+P).normalize(),a[2].setComponents(p+d,y+x,_+A,I+F).normalize(),a[3].setComponents(p-d,y-x,_-A,I-F).normalize(),r)a[4].setComponents(h,g,S,b).normalize(),a[5].setComponents(p-h,y-g,_-S,I-b).normalize();else if(a[4].setComponents(p-h,y-g,_-S,I-b).normalize(),t===tr)a[5].setComponents(p+h,y+g,_+S,I+b).normalize();else if(t===No)a[5].setComponents(h,g,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=ES.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(ic.x=a.normal.x>0?e.max.x:e.min.x,ic.y=a.normal.y>0?e.max.y:e.min.y,ic.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _c extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new Z,Lc=new Z,Yg=new Wt,xo=new Fo,rc=new Ds,jd=new Z,$g=new Z;class Kf extends Pn{constructor(e=new ln,t=new _c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)Pc.fromBufferAttribute(t,a-1),Lc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=Pc.distanceTo(Lc);e.setAttribute("lineDistance",new Kt(r,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(a),rc.radius+=l,e.ray.intersectsSphere(rc)===!1)return;Yg.copy(a).invert(),xo.copy(e.ray).applyMatrix4(Yg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const y=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let A=y,S=E-1;A<S;A+=p){const _=v.getX(A),P=v.getX(A+1),F=sc(this,e,xo,h,_,P,A);F&&t.push(F)}if(this.isLineLoop){const A=v.getX(E-1),S=v.getX(y),_=sc(this,e,xo,h,A,S,E-1);_&&t.push(_)}}else{const y=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let A=y,S=E-1;A<S;A+=p){const _=sc(this,e,xo,h,A,A+1,A);_&&t.push(_)}if(this.isLineLoop){const A=sc(this,e,xo,h,E-1,y,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function sc(s,e,t,r,a,l,c){const d=s.geometry.attributes.position;if(Pc.fromBufferAttribute(d,a),Lc.fromBufferAttribute(d,l),t.distanceSqToSegment(Pc,Lc,jd,$g)>r)return;jd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(jd);if(!(p<e.near||p>e.far))return{distance:p,point:$g.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const Zg=new Z,qg=new Z;class wS extends Kf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Zg.fromBufferAttribute(t,a),qg.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Zg.distanceTo(qg);e.setAttribute("lineDistance",new Kt(r,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xc extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kg=new Wt,Jf=new Fo,ac=new Ds,oc=new Z;class Yd extends Pn{constructor(e=new ln,t=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(a),ac.radius+=l,e.ray.intersectsSphere(ac)===!1)return;Kg.copy(a).invert(),Jf.copy(e.ray).applyMatrix4(Kg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,x=r.attributes.position;if(p!==null){const g=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let E=g,A=y;E<A;E++){const S=p.getX(E);oc.fromBufferAttribute(x,S),Jg(oc,S,h,a,e,t,this)}}else{const g=Math.max(0,c.start),y=Math.min(x.count,c.start+c.count);for(let E=g,A=y;E<A;E++)oc.fromBufferAttribute(x,E),Jg(oc,E,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Jg(s,e,t,r,a,l,c){const d=Jf.distanceSqToPoint(s);if(d<t){const h=new Z;Jf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Sv extends Zn{constructor(e=[],t=Ls,r,a,l,c,d,h,p,v){super(e,t,r,a,l,c,d,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Do extends Zn{constructor(e,t,r=ir,a,l,c,d=Nn,h=Nn,p,v=br,x=1){if(v!==br&&v!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,a,l,c,d,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class AS extends Do{constructor(e,t=ir,r=Ls,a,l,c=Nn,d=Nn,h,p=br){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,r,a,l,c,d,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mv extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oo extends ln{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],x=[];let g=0,y=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(x,2));function E(A,S,_,P,F,b,I,L,U,w,N){const k=b/U,G=I/w,W=b/2,K=I/2,z=L/2,J=U+1,ge=w+1;let q=0,ee=0;const H=new Z;for(let j=0;j<ge;j++){const D=j*G-K;for(let le=0;le<J;le++){const Le=le*k-W;H[A]=Le*P,H[S]=D*F,H[_]=z,p.push(H.x,H.y,H.z),H[A]=0,H[S]=0,H[_]=L>0?1:-1,v.push(H.x,H.y,H.z),x.push(le/U),x.push(1-j/w),q+=1}}for(let j=0;j<w;j++)for(let D=0;D<U;D++){const le=g+D+J*j,Le=g+D+J*(j+1),Ke=g+(D+1)+J*(j+1),$e=g+(D+1)+J*j;h.push(le,Le,$e),h.push(Le,Ke,$e),ee+=6}d.addGroup(y,ee,N),y+=ee,g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eh extends ln{constructor(e=1,t=1,r=1,a=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],x=[],g=[],y=[];let E=0;const A=[],S=r/2;let _=0;P(),c===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(v),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(y,2));function P(){const b=new Z,I=new Z;let L=0;const U=(t-e)/r;for(let w=0;w<=l;w++){const N=[],k=w/l,G=k*(t-e)+e;for(let W=0;W<=a;W++){const K=W/a,z=K*h+d,J=Math.sin(z),ge=Math.cos(z);I.x=G*J,I.y=-k*r+S,I.z=G*ge,x.push(I.x,I.y,I.z),b.set(J,U,ge).normalize(),g.push(b.x,b.y,b.z),y.push(K,1-k),N.push(E++)}A.push(N)}for(let w=0;w<a;w++)for(let N=0;N<l;N++){const k=A[N][w],G=A[N+1][w],W=A[N+1][w+1],K=A[N][w+1];(e>0||N!==0)&&(v.push(k,G,K),L+=3),(t>0||N!==l-1)&&(v.push(G,W,K),L+=3)}p.addGroup(_,L,0),_+=L}function F(b){const I=E,L=new ht,U=new Z;let w=0;const N=b===!0?e:t,k=b===!0?1:-1;for(let W=1;W<=a;W++)x.push(0,S*k,0),g.push(0,k,0),y.push(.5,.5),E++;const G=E;for(let W=0;W<=a;W++){const z=W/a*h+d,J=Math.cos(z),ge=Math.sin(z);U.x=N*ge,U.y=S*k,U.z=N*J,x.push(U.x,U.y,U.z),g.push(0,k,0),L.x=J*.5+.5,L.y=ge*.5*k+.5,y.push(L.x,L.y),E++}for(let W=0;W<a;W++){const K=I+W,z=G+W;b===!0?v.push(z,z+1,K):v.push(z+1,z,K),w+=3}p.addGroup(_,w,b===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wh extends ln{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],c=[];d(a),p(r),v(),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(l.slice(),3)),this.setAttribute("uv",new Kt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(P){const F=new Z,b=new Z,I=new Z;for(let L=0;L<t.length;L+=3)y(t[L+0],F),y(t[L+1],b),y(t[L+2],I),h(F,b,I,P)}function h(P,F,b,I){const L=I+1,U=[];for(let w=0;w<=L;w++){U[w]=[];const N=P.clone().lerp(b,w/L),k=F.clone().lerp(b,w/L),G=L-w;for(let W=0;W<=G;W++)W===0&&w===L?U[w][W]=N:U[w][W]=N.clone().lerp(k,W/G)}for(let w=0;w<L;w++)for(let N=0;N<2*(L-w)-1;N++){const k=Math.floor(N/2);N%2===0?(g(U[w][k+1]),g(U[w+1][k]),g(U[w][k])):(g(U[w][k+1]),g(U[w+1][k+1]),g(U[w+1][k]))}}function p(P){const F=new Z;for(let b=0;b<l.length;b+=3)F.x=l[b+0],F.y=l[b+1],F.z=l[b+2],F.normalize().multiplyScalar(P),l[b+0]=F.x,l[b+1]=F.y,l[b+2]=F.z}function v(){const P=new Z;for(let F=0;F<l.length;F+=3){P.x=l[F+0],P.y=l[F+1],P.z=l[F+2];const b=S(P)/2/Math.PI+.5,I=_(P)/Math.PI+.5;c.push(b,1-I)}E(),x()}function x(){for(let P=0;P<c.length;P+=6){const F=c[P+0],b=c[P+2],I=c[P+4],L=Math.max(F,b,I),U=Math.min(F,b,I);L>.9&&U<.1&&(F<.2&&(c[P+0]+=1),b<.2&&(c[P+2]+=1),I<.2&&(c[P+4]+=1))}}function g(P){l.push(P.x,P.y,P.z)}function y(P,F){const b=P*3;F.x=e[b+0],F.y=e[b+1],F.z=e[b+2]}function E(){const P=new Z,F=new Z,b=new Z,I=new Z,L=new ht,U=new ht,w=new ht;for(let N=0,k=0;N<l.length;N+=9,k+=6){P.set(l[N+0],l[N+1],l[N+2]),F.set(l[N+3],l[N+4],l[N+5]),b.set(l[N+6],l[N+7],l[N+8]),L.set(c[k+0],c[k+1]),U.set(c[k+2],c[k+3]),w.set(c[k+4],c[k+5]),I.copy(P).add(F).add(b).divideScalar(3);const G=S(I);A(L,k+0,P,G),A(U,k+2,F,G),A(w,k+4,b,G)}}function A(P,F,b,I){I<0&&P.x===1&&(c[F]=P.x-1),b.x===0&&b.z===0&&(c[F]=I/2/Math.PI+.5)}function S(P){return Math.atan2(P.z,-P.x)}function _(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.vertices,e.indices,e.radius,e.detail)}}class TS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let d=0,h=l-1,p;for(;d<=h;)if(a=Math.floor(d+(h-d)/2),p=r[a]-c,p<0)d=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const v=r[a],g=r[a+1]-v,y=(c-v)/g;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),d=this.getPoint(l),h=t||(c.isVector2?new ht:new Z);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Z,a=[],l=[],c=[],d=new Z,h=new Wt;for(let y=0;y<=e;y++){const E=y/e;a[y]=this.getTangentAt(E,new Z)}l[0]=new Z,c[0]=new Z;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),x=Math.abs(a[0].y),g=Math.abs(a[0].z);v<=p&&(p=v,r.set(1,0,0)),x<=p&&(p=x,r.set(0,1,0)),g<=p&&r.set(0,0,1),d.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],d),c[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),d.crossVectors(a[y-1],a[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ct(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(d,E))}c[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(Ct(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],y*E)),c[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function bS(s,e){const t=1-s;return t*t*t*e}function CS(s,e){const t=1-s;return 3*t*t*s*e}function RS(s,e){return 3*(1-s)*s*s*e}function PS(s,e){return s*s*s*e}function $d(s,e,t,r,a){return bS(s,e)+CS(s,t)+RS(s,r)+PS(s,a)}class Qg extends TS{constructor(e=new Z,t=new Z,r=new Z,a=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Z){const r=t,a=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set($d(e,a.x,l.x,c.x,d.x),$d(e,a.y,l.y,c.y,d.y),$d(e,a.z,l.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ah extends wh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ah(e.radius,e.detail)}}class Fc extends ln{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),h=Math.floor(a),p=d+1,v=h+1,x=e/d,g=t/h,y=[],E=[],A=[],S=[];for(let _=0;_<v;_++){const P=_*g-c;for(let F=0;F<p;F++){const b=F*x-l;E.push(b,-P,0),A.push(0,0,1),S.push(F/d),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let P=0;P<d;P++){const F=P+p*_,b=P+p*(_+1),I=P+1+p*(_+1),L=P+1+p*_;y.push(F,b,L),y.push(b,I,L)}this.setIndex(y),this.setAttribute("position",new Kt(E,3)),this.setAttribute("normal",new Kt(A,3)),this.setAttribute("uv",new Kt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ic extends ln{constructor(e=.5,t=1,r=32,a=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:c},r=Math.max(3,r),a=Math.max(1,a);const d=[],h=[],p=[],v=[];let x=e;const g=(t-e)/a,y=new Z,E=new ht;for(let A=0;A<=a;A++){for(let S=0;S<=r;S++){const _=l+S/r*c;y.x=x*Math.cos(_),y.y=x*Math.sin(_),h.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/t+1)/2,E.y=(y.y/t+1)/2,v.push(E.x,E.y)}x+=g}for(let A=0;A<a;A++){const S=A*(r+1);for(let _=0;_<r;_++){const P=_+S,F=P,b=P+r+1,I=P+r+2,L=P+1;d.push(F,b,L),d.push(b,I,L)}}this.setIndex(d),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Aa extends ln{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let p=0;const v=[],x=new Z,g=new Z,y=[],E=[],A=[],S=[];for(let _=0;_<=r;_++){const P=[],F=_/r,b=c+F*d,I=e*Math.cos(b),L=Math.sqrt(e*e-I*I);let U=0;_===0&&c===0?U=.5/t:_===r&&h===Math.PI&&(U=-.5/t);for(let w=0;w<=t;w++){const N=w/t,k=a+N*l;x.x=-L*Math.cos(k),x.y=I,x.z=L*Math.sin(k),E.push(x.x,x.y,x.z),g.copy(x).normalize(),A.push(g.x,g.y,g.z),S.push(N+U,1-F),P.push(p++)}v.push(P)}for(let _=0;_<r;_++)for(let P=0;P<t;P++){const F=v[_][P+1],b=v[_][P],I=v[_+1][P],L=v[_+1][P+1];(_!==0||c>0)&&y.push(F,b,L),(_!==r-1||h<Math.PI)&&y.push(b,I,L)}this.setIndex(y),this.setAttribute("position",new Kt(E,3)),this.setAttribute("normal",new Kt(A,3)),this.setAttribute("uv",new Kt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Th extends ln{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2,c=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l,thetaStart:c,thetaLength:d},r=Math.floor(r),a=Math.floor(a);const h=[],p=[],v=[],x=[],g=new Z,y=new Z,E=new Z;for(let A=0;A<=r;A++){const S=c+A/r*d;for(let _=0;_<=a;_++){const P=_/a*l;y.x=(e+t*Math.cos(S))*Math.cos(P),y.y=(e+t*Math.cos(S))*Math.sin(P),y.z=t*Math.sin(S),p.push(y.x,y.y,y.z),g.x=e*Math.cos(P),g.y=e*Math.sin(P),E.subVectors(y,g).normalize(),v.push(E.x,E.y,E.z),x.push(_/a),x.push(A/r)}}for(let A=1;A<=r;A++)for(let S=1;S<=a;S++){const _=(a+1)*A+S-1,P=(a+1)*(A-1)+S-1,F=(a+1)*(A-1)+S,b=(a+1)*A+S;h.push(_,P,b),h.push(P,F,b)}this.setIndex(h),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ia(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(e0(a))a.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(e0(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Yn(s){const e={};for(let t=0;t<s.length;t++){const r=Ia(s[t]);for(const a in r)e[a]=r[a]}return e}function e0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function LS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ev(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const IS={clone:Ia,merge:Yn};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=DS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new St().setHex(a.value);break;case"v2":this.uniforms[r].value=new ht().fromArray(a.value);break;case"v3":this.uniforms[r].value=new Z().fromArray(a.value);break;case"v4":this.uniforms[r].value=new an().fromArray(a.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Wt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class US extends sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FS extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OS extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kS extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wv extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Zd=new Wt,t0=new Z,n0=new Z;class BS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){Zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Zd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,c=a?a.z/l.x:1,d=a?a.w/l.y:1,h=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===No||e.reversedDepth?t.set(.5*c,0,0,.5*c+h,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+h,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lc=new Z,cc=new rs,Ki=new Z;class Av extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lc,cc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(lc,cc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new Z,i0=new ht,r0=new ht;class wi extends Av{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,i0,r0),t.subVectors(r0,i0)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bh extends Av{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zS extends BS{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s0 extends wv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new zS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class GS extends wv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const xa=-90,Sa=1;class VS extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wi(xa,Sa,e,t);a.layers=this.layers,this.add(a);const l=new wi(xa,Sa,e,t);l.layers=this.layers,this.add(l);const c=new wi(xa,Sa,e,t);c.layers=this.layers,this.add(c);const d=new wi(xa,Sa,e,t);d.layers=this.layers,this.add(d);const h=new wi(xa,Sa,e,t);h.layers=this.layers,this.add(h);const p=new wi(xa,Sa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,h]=t;for(const p of t)this.remove(p);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===No)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class HS extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const a0=new Wt;class WS{constructor(e,t,r=0,a=1/0){this.ray=new Fo(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new xh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return a0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a0),this}intersectObject(e,t=!0,r=[]){return Qf(e,this,r,t),r.sort(o0),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Qf(e[a],this,r,t);return r.sort(o0),r}}function o0(s,e){return s.distance-e.distance}function Qf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,d=l.length;c<d;c++)Qf(l[c],e,t,!0)}}class l0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nh=class Nh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Nh.prototype.isMatrix2=!0;let c0=Nh;class XS extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function u0(s,e,t,r){const a=jS(r);switch(t){case hv:return s*e;case hh:return s*e/a.components*a.byteLength;case ph:return s*e/a.components*a.byteLength;case Is:return s*e*2/a.components*a.byteLength;case mh:return s*e*2/a.components*a.byteLength;case pv:return s*e*3/a.components*a.byteLength;case Gi:return s*e*4/a.components*a.byteLength;case gh:return s*e*4/a.components*a.byteLength;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:case Mf:return Math.max(s,16)*Math.max(e,8)/4;case _f:case Sf:return Math.max(s,8)*Math.max(e,8)/2;case Ef:case wf:case Tf:case bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:case Ac:case Cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tc:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jS(s){switch(s){case pi:case cv:return{byteLength:1,components:1};case Lo:case uv:case rr:return{byteLength:2,components:1};case dh:case fh:return{byteLength:2,components:4};case ir:case uh:case zi:return{byteLength:4,components:1};case dv:case fv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tv(){let s=null,e=!1,t=null,r=null;function a(l,c){r=s.requestAnimationFrame(a),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function YS(s){const e=new WeakMap;function t(d,h){const p=d.array,v=d.usage,x=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,p){const v=h.array,x=h.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,v);else{x.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<x.length;y++){const E=x[g],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,x[g]=A)}x.length=g+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:c}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZS=`#ifdef USE_ALPHAHASH
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
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
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
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
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
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o1=`#ifdef USE_IRIDESCENCE
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
#endif`,l1=`#ifdef USE_BUMPMAP
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,v1=`#define PI 3.141592653589793
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
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",A1=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,z1=`#ifdef USE_ENVMAP
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
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
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
#endif`,j1=`uniform sampler2D dfgLUT;
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
}`,Y1=`
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rM=`#if defined( USE_POINTS_UV )
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
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
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
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
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
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,FM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OM=`#ifdef USE_SKINNING
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
#endif`,kM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
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
}`,tE=`#if DEPTH_PACKING == 3200
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
}`,nE=`#define DISTANCE
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
}`,iE=`#define DISTANCE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`uniform float scale;
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
}`,oE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,cE=`uniform vec3 diffuse;
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
}`,uE=`#define LAMBERT
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
}`,dE=`#define LAMBERT
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
}`,fE=`#define MATCAP
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
}`,hE=`#define MATCAP
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
}`,pE=`#define NORMAL
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
}`,mE=`#define NORMAL
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
}`,gE=`#define PHONG
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
}`,vE=`#define PHONG
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
}`,xE=`#define TOON
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
}`,SE=`#define TOON
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
}`,ME=`uniform float size;
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
}`,EE=`uniform vec3 diffuse;
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
}`,wE=`#include <common>
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
}`,AE=`uniform vec3 color;
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
}`,bE=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:$S,alphahash_pars_fragment:ZS,alphamap_fragment:qS,alphamap_pars_fragment:KS,alphatest_fragment:JS,alphatest_pars_fragment:QS,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:a1,iridescence_fragment:o1,bumpmap_pars_fragment:l1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:f1,color_fragment:h1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:v1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:_1,displacementmap_pars_vertex:x1,displacementmap_vertex:S1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:w1,colorspace_pars_fragment:A1,envmap_fragment:T1,envmap_common_pars_fragment:b1,envmap_pars_fragment:C1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:z1,envmap_vertex:P1,fog_vertex:L1,fog_pars_vertex:I1,fog_fragment:N1,fog_pars_fragment:D1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:k1,lights_pars_begin:B1,lights_toon_fragment:G1,lights_toon_pars_fragment:V1,lights_phong_fragment:H1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:j1,lights_fragment_begin:Y1,lights_fragment_maps:$1,lights_fragment_end:Z1,lightprobes_pars_fragment:q1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:rM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:aM,morphinstance_vertex:oM,morphcolor_vertex:lM,morphnormal_vertex:cM,morphtarget_pars_vertex:uM,morphtarget_vertex:dM,normal_fragment_begin:fM,normal_fragment_maps:hM,normal_pars_fragment:pM,normal_pars_vertex:mM,normal_vertex:gM,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:yM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:xM,iridescence_pars_fragment:SM,opaque_fragment:MM,packing:EM,premultiplied_alpha_fragment:wM,project_vertex:AM,dithering_fragment:TM,dithering_pars_fragment:bM,roughnessmap_fragment:CM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:PM,shadowmap_pars_vertex:LM,shadowmap_vertex:IM,shadowmask_pars_fragment:NM,skinbase_vertex:DM,skinning_pars_vertex:UM,skinning_vertex:FM,skinnormal_vertex:OM,specularmap_fragment:kM,specularmap_pars_fragment:BM,tonemapping_fragment:zM,tonemapping_pars_fragment:GM,transmission_fragment:VM,transmission_pars_fragment:HM,uv_pars_fragment:WM,uv_pars_vertex:XM,uv_vertex:jM,worldpos_vertex:YM,background_vert:$M,background_frag:ZM,backgroundCube_vert:qM,backgroundCube_frag:KM,cube_vert:JM,cube_frag:QM,depth_vert:eE,depth_frag:tE,distance_vert:nE,distance_frag:iE,equirect_vert:rE,equirect_frag:sE,linedashed_vert:aE,linedashed_frag:oE,meshbasic_vert:lE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:dE,meshmatcap_vert:fE,meshmatcap_frag:hE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:gE,meshphong_frag:vE,meshphysical_vert:yE,meshphysical_frag:_E,meshtoon_vert:xE,meshtoon_frag:SE,points_vert:ME,points_frag:EE,shadow_vert:wE,shadow_frag:AE,sprite_vert:TE,sprite_frag:bE},qe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},er={basic:{uniforms:Yn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Yn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Yn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Yn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Yn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new St(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Yn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Yn([qe.points,qe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Yn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Yn([qe.common,qe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Yn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Yn([qe.sprite,qe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Yn([qe.common,qe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Yn([qe.lights,qe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};er.physical={uniforms:Yn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const uc={r:0,b:0,g:0},CE=new Wt,bv=new wt;bv.set(-1,0,0,0,1,0,0,0,1);function RE(s,e,t,r,a,l){const c=new St(0);let d=a===!0?0:1,h,p,v=null,x=0,g=null;function y(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const b=P.backgroundBlurriness>0;F=e.get(F,b)}return F}function E(P){let F=!1;const b=y(P);b===null?S(c,d):b&&b.isColor&&(S(b,1),F=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(P,F){const b=y(F);b&&(b.isCubeTexture||b.mapping===Uc)?(p===void 0&&(p=new Sn(new Oo(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Ia(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(bv),p.material.toneMapped=It.getTransfer(b.colorSpace)!==Xt,(v!==b||x!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=b,x=b.version,g=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Sn(new Fc(2,2),new sr({name:"BackgroundMaterial",uniforms:Ia(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=It.getTransfer(b.colorSpace)!==Xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||x!==b.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=b,x=b.version,g=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function S(P,F){P.getRGB(uc,Ev(s)),t.buffers.color.setClear(uc.r,uc.g,uc.b,F,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,F=1){c.set(P),d=F,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,S(c,d)},render:E,addToRenderList:A,dispose:_}}function PE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,c=!1;function d(G,W,K,z,J){let ge=!1;const q=x(G,z,K,W);l!==q&&(l=q,p(l.object)),ge=y(G,z,K,J),ge&&E(G,z,K,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,b(G,W,K,z),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function x(G,W,K,z){const J=z.wireframe===!0;let ge=r[W.id];ge===void 0&&(ge={},r[W.id]=ge);const q=G.isInstancedMesh===!0?G.id:0;let ee=ge[q];ee===void 0&&(ee={},ge[q]=ee);let H=ee[K.id];H===void 0&&(H={},ee[K.id]=H);let j=H[J];return j===void 0&&(j=g(h()),H[J]=j),j}function g(G){const W=[],K=[],z=[];for(let J=0;J<t;J++)W[J]=0,K[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:K,attributeDivisors:z,object:G,attributes:{},index:null}}function y(G,W,K,z){const J=l.attributes,ge=W.attributes;let q=0;const ee=K.getAttributes();for(const H in ee)if(ee[H].location>=0){const D=J[H];let le=ge[H];if(le===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(le=G.instanceColor)),D===void 0||D.attribute!==le||le&&D.data!==le.data)return!0;q++}return l.attributesNum!==q||l.index!==z}function E(G,W,K,z){const J={},ge=W.attributes;let q=0;const ee=K.getAttributes();for(const H in ee)if(ee[H].location>=0){let D=ge[H];D===void 0&&(H==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),H==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const le={};le.attribute=D,D&&D.data&&(le.data=D.data),J[H]=le,q++}l.attributes=J,l.attributesNum=q,l.index=z}function A(){const G=l.newAttributes;for(let W=0,K=G.length;W<K;W++)G[W]=0}function S(G){_(G,0)}function _(G,W){const K=l.newAttributes,z=l.enabledAttributes,J=l.attributeDivisors;K[G]=1,z[G]===0&&(s.enableVertexAttribArray(G),z[G]=1),J[G]!==W&&(s.vertexAttribDivisor(G,W),J[G]=W)}function P(){const G=l.newAttributes,W=l.enabledAttributes;for(let K=0,z=W.length;K<z;K++)W[K]!==G[K]&&(s.disableVertexAttribArray(K),W[K]=0)}function F(G,W,K,z,J,ge,q){q===!0?s.vertexAttribIPointer(G,W,K,J,ge):s.vertexAttribPointer(G,W,K,z,J,ge)}function b(G,W,K,z){A();const J=z.attributes,ge=K.getAttributes(),q=W.defaultAttributeValues;for(const ee in ge){const H=ge[ee];if(H.location>=0){let j=J[ee];if(j===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),j!==void 0){const D=j.normalized,le=j.itemSize,Le=e.get(j);if(Le===void 0)continue;const Ke=Le.buffer,$e=Le.type,Ae=Le.bytesPerElement,re=$e===s.INT||$e===s.UNSIGNED_INT||j.gpuType===uh;if(j.isInterleavedBufferAttribute){const ne=j.data,Oe=ne.stride,Me=j.offset;if(ne.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)_(H.location+Be,ne.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Be=0;Be<H.locationSize;Be++)S(H.location+Be);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let Be=0;Be<H.locationSize;Be++)F(H.location+Be,le/H.locationSize,$e,D,Oe*Ae,(Me+le/H.locationSize*Be)*Ae,re)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<H.locationSize;ne++)_(H.location+ne,j.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<H.locationSize;ne++)S(H.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let ne=0;ne<H.locationSize;ne++)F(H.location+ne,le/H.locationSize,$e,D,le*Ae,le/H.locationSize*ne*Ae,re)}}else if(q!==void 0){const D=q[ee];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(H.location,D);break;case 3:s.vertexAttrib3fv(H.location,D);break;case 4:s.vertexAttrib4fv(H.location,D);break;default:s.vertexAttrib1fv(H.location,D)}}}}P()}function I(){N();for(const G in r){const W=r[G];for(const K in W){const z=W[K];for(const J in z){const ge=z[J];for(const q in ge)v(ge[q].object),delete ge[q];delete z[J]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const K in W){const z=W[K];for(const J in z){const ge=z[J];for(const q in ge)v(ge[q].object),delete ge[q];delete z[J]}}delete r[G.id]}function U(G){for(const W in r){const K=r[W];for(const z in K){const J=K[z];if(J[G.id]===void 0)continue;const ge=J[G.id];for(const q in ge)v(ge[q].object),delete ge[q];delete J[G.id]}}}function w(G){for(const W in r){const K=r[W],z=G.isInstancedMesh===!0?G.id:0,J=K[z];if(J!==void 0){for(const ge in J){const q=J[ge];for(const ee in q)v(q[ee].object),delete q[ee];delete J[ge]}delete K[z],Object.keys(K).length===0&&delete r[W]}}}function N(){k(),c=!0,l!==a&&(l=a,p(l.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:N,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function LE(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let y=0;y<v;y++)g+=p[y];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function IE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const w=U===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==pi&&U!==zi&&!w&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:b,maxSamples:I,samples:L}}function NE(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Er,d=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||r!==0||a;return a=g,r=x.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,y){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!a||E===null||E.length===0||l&&!S)l?v(null):p();else{const P=l?0:r,F=P*4;let b=_.clippingState||null;h.value=b,b=v(E,g,F,y);for(let I=0;I!==F;++I)b[I]=t[I];_.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,y,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=h.value,E!==!0||S===null){const _=y+A*4,P=g.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let F=0,b=y;F!==A;++F,b+=4)c.copy(x[F]).applyMatrix4(P,d),c.normal.toArray(S,b),S[b+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Ta=4,DE=6,UE=20,FE=256,So=new bh,d0=new St;let qd=null,Kd=0,Jd=0,Qd=!1;const OE=new Z,Es=new Z;class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=OE}=l;qd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Kd,Jd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:rr,format:Gi,colorSpace:bc,depthBuffer:!1},a=h0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kE(l)),this._blurMaterial=zE(l,e,t),this._ggxMaterial=BE(l,e,t)}return a}_compileMaterial(e){const t=new Sn(new ln,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,r,a,l){const h=new wi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(d0),x.toneMapping=nr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Oo,new Qi({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,_=!0):(S.color.copy(d0),_=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(h.up.set(0,p[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[F],l.y,l.z)):b===1?(h.up.set(0,0,p[F]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[F],l.z)):(h.up.set(0,p[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[F]));const I=this._cubeSize;Ma(a,b*I,F>2?I:0,I,I),x.setRenderTarget(a),_&&x.render(A,h),x.render(e,h)}x.toneMapping=y,x.autoClear=g,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ls||e.mapping===La;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ma(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,So)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=p*1.25,y=x*g,{_lodMax:E}=this,A=this._sizeLods[r],S=3*A*(r>E-Ta?r-E+Ta:0),_=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=E-t,Ma(l,S,_,3*A,2*A),a.setRenderTarget(l),a.render(d,So),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-r,Ma(e,S,_,3*A,2*A),a.setRenderTarget(e),a.render(d,So)}_blur(e,t,r,a){const l=this._pingPongRenderTarget,c=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,c),this._blurPass(l,e,r,r,c)}_blurPass(e,t,r,a,l){const c=this._renderer,d=this._blurMaterial,h=this._lodMeshes[a];h.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[a],x=3*v*(a>this._lodMax-Ta?a-this._lodMax+Ta:0),g=4*(this._cubeSize-v);Ma(t,x,g,3*v,2*v),c.setRenderTarget(t),c.render(h,So)}}function kE(s){const e=[],t=[];let r=s;const a=s-Ta+1+DE;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);const d=1/(c-2),h=-d,p=1+d,v=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,g=6,y=3,E=new Float32Array(y*g*x),A=new Float32Array(y*g*x);for(let _=0;_<x;_++){const P=_%3*2/3-1,F=_>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];E.set(b,y*g*_);for(let I=0;I<g;I++){const L=v[I*2]*2-1,U=v[I*2+1]*2-1;_===0?Es.set(1,U,L):_===1?Es.set(-L,1,-U):_===2?Es.set(-L,U,1):_===3?Es.set(-1,U,-L):_===4?Es.set(-L,-1,U):Es.set(L,U,-1),Es.toArray(A,(_*g+I)*y)}}const S=new ln;S.setAttribute("position",new Gn(E,y)),S.setAttribute("outputDirection",new Gn(A,y)),t.push(new Sn(S,null)),r>Ta&&r--}return{lodMeshes:t,sizeLods:e}}function h0(s,e,t){const r=new Vi(s,e,t);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ma(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function BE(s,e,t){return new sr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function zE(s,e,t){return new sr({name:"SphericalGaussianBlur",defines:{SAMPLES:UE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function p0(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function m0(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

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
	`}class Cv extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Sv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Oo(5,5,5),l=new sr({name:"CubemapFromEquirect",uniforms:Ia(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:Ar});l.uniforms.tEquirect.value=t;const c=new Sn(a,l),d=t.minFilter;return t.minFilter===bs&&(t.minFilter=Vn),new VS(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function GE(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,y=!1){return g==null?null:y?c(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Sd||y===Md)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const A=new Cv(E.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",p),d(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const y=g.mapping,E=y===Sd||y===Md,A=y===Ls||y===La;if(E||A){let S=t.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new f0(s)),S=E?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const P=g.image;return E&&P&&P.height>0||A&&P&&h(P)?(r===null&&(r=new f0(s)),S=E?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function d(g,y){return y===Sd?g.mapping=Ls:y===Md&&(g.mapping=La),g}function h(g){let y=0;const E=6;for(let A=0;A<E;A++)g[A]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function VE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ca("WebGLRenderer: "+r+" extension not supported."),a}}}function HE(s,e,t,r){const a={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete a[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(x,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(x){const g=[],y=x.index,E=x.attributes.position;let A=0;if(E===void 0)return;if(y!==null){const P=y.array;A=y.version;for(let F=0,b=P.length;F<b;F+=3){const I=P[F+0],L=P[F+1],U=P[F+2];g.push(I,L,L,U,U,I)}}else{const P=E.array;A=E.version;for(let F=0,b=P.length/3-1;F<b;F+=3){const I=F+0,L=F+1,U=F+2;g.push(I,L,L,U,U,I)}}const S=new(E.count>=65535?_v:yv)(g,1);S.version=A;const _=l.get(x);_&&e.remove(_),l.set(x,S)}function v(x){const g=l.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:h,getWireframeAttribute:v}}function WE(s,e,t){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,g){s.drawElements(r,g,l,x*c),t.update(g,r,1)}function p(x,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,x*c,y),t.update(g,r,y))}function v(x,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,x,0,y);let A=0;for(let S=0;S<y;S++)A+=g[S];t.update(A,r,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function XE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ot("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function jE(s,e,t){const r=new WeakMap,a=new an;function l(c,d,h){const p=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==x){let k=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var y=k;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),A===!0&&(b=2),S===!0&&(b=3);let I=d.attributes.position.count*b,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*L*4*x),w=new gv(U,I,L,x);w.type=zi,w.needsUpdate=!0;const N=b*4;for(let G=0;G<x;G++){const W=_[G],K=P[G],z=F[G],J=I*L*4*G;for(let ge=0;ge<W.count;ge++){const q=ge*N;E===!0&&(a.fromBufferAttribute(W,ge),U[J+q+0]=a.x,U[J+q+1]=a.y,U[J+q+2]=a.z,U[J+q+3]=0),A===!0&&(a.fromBufferAttribute(K,ge),U[J+q+4]=a.x,U[J+q+5]=a.y,U[J+q+6]=a.z,U[J+q+7]=0),S===!0&&(a.fromBufferAttribute(z,ge),U[J+q+8]=a.x,U[J+q+9]=a.y,U[J+q+10]=a.z,U[J+q+11]=z.itemSize===4?a.w:1)}}g={count:x,texture:w,size:new ht(I,L)},r.set(d,g),d.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function YE(s,e,t,r,a){let l=new WeakMap;function c(p){const v=a.render.frame,x=p.geometry,g=e.get(p,x);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return g}function d(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:d}}const $E={[nv]:"LINEAR_TONE_MAPPING",[iv]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[av]:"AGX_TONE_MAPPING",[ov]:"NEUTRAL_TONE_MAPPING",[sv]:"CUSTOM_TONE_MAPPING"};function ZE(s,e,t,r,a,l){const c=new Vi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,h=null;const p=new ln;p.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const v=new US({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Sn(p,v),g=new bh(-1,1,1,-1,0,1);let y=null,E=null,A=!1,S,_=null,P=[],F=!1;this.setSize=function(b,I){c.setSize(b,I),d!==null&&d.setSize(b,I),h!==null&&h.setSize(b,I);for(let L=0;L<P.length;L++){const U=P[L];U.setSize&&U.setSize(b,I)}},this.setEffects=function(b){P=b,F=P.length>0&&P[0].isRenderPass===!0;const I=c.width,L=c.height;P.length>0&&d===null&&(d=new Vi(I,L,{type:rr,depthBuffer:!1,stencilBuffer:!1}),h=new Vi(I,L,{type:rr,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<P.length;U++){const w=P[U];w.setSize&&w.setSize(I,L)}},this.begin=function(b,I){if(A||b.toneMapping===nr&&P.length===0)return!1;if(_=I,I!==null){const L=I.width,U=I.height;(c.width!==L||c.height!==U)&&this.setSize(L,U)}return F===!1&&b.setRenderTarget(c),S=b.toneMapping,b.toneMapping=nr,!0},this.hasRenderPass=function(){return F},this.end=function(b,I){b.toneMapping=S,A=!0;let L=c,U=d;for(let w=0;w<P.length;w++){const N=P[w];N.enabled!==!1&&(N.render(b,U,L,I),N.needsSwap!==!1&&(L=U,U=U===d?h:d))}if(y!==b.outputColorSpace||E!==b.toneMapping){y=b.outputColorSpace,E=b.toneMapping,v.defines={},It.getTransfer(y)===Xt&&(v.defines.SRGB_TRANSFER="");const w=$E[E];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(_),b.render(x,g),_=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const Rv=new Zn,eh=new Do(1,1),Pv=new gv,Lv=new sS,Iv=new Sv,g0=[],v0=[],y0=new Float32Array(16),_0=new Float32Array(9),x0=new Float32Array(4);function Na(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=g0[a];if(l===void 0&&(l=new Float32Array(a),g0[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function En(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function kc(s,e){let t=v0[e];t===void 0&&(t=new Int32Array(e),v0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function KE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),En(t,e)}}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),En(t,e)}}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),En(t,e)}}function ew(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,r))return;x0.set(r),s.uniformMatrix2fv(this.addr,!1,x0),En(t,r)}}function tw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,r))return;_0.set(r),s.uniformMatrix3fv(this.addr,!1,_0),En(t,r)}}function nw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,r))return;y0.set(r),s.uniformMatrix4fv(this.addr,!1,y0),En(t,r)}}function iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),En(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),En(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),En(t,e)}}function ow(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),En(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),En(t,e)}}function uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),En(t,e)}}function dw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(eh.compareFunction=t.isReversedDepthBuffer()?yh:vh,l=eh):l=Rv,t.setTexture2D(e||l,a)}function fw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Lv,a)}function hw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Iv,a)}function pw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Pv,a)}function mw(s){switch(s){case 5126:return qE;case 35664:return KE;case 35665:return JE;case 35666:return QE;case 35674:return ew;case 35675:return tw;case 35676:return nw;case 5124:case 35670:return iw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return aw;case 5125:return ow;case 36294:return lw;case 36295:return cw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return hw;case 36289:case 36303:case 36311:case 36292:return pw}}function gw(s,e){s.uniform1fv(this.addr,e)}function vw(s,e){const t=Na(e,this.size,2);s.uniform2fv(this.addr,t)}function yw(s,e){const t=Na(e,this.size,3);s.uniform3fv(this.addr,t)}function _w(s,e){const t=Na(e,this.size,4);s.uniform4fv(this.addr,t)}function xw(s,e){const t=Na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sw(s,e){const t=Na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mw(s,e){const t=Na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ew(s,e){s.uniform1iv(this.addr,e)}function ww(s,e){s.uniform2iv(this.addr,e)}function Aw(s,e){s.uniform3iv(this.addr,e)}function Tw(s,e){s.uniform4iv(this.addr,e)}function bw(s,e){s.uniform1uiv(this.addr,e)}function Cw(s,e){s.uniform2uiv(this.addr,e)}function Rw(s,e){s.uniform3uiv(this.addr,e)}function Pw(s,e){s.uniform4uiv(this.addr,e)}function Lw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=eh:c=Rv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function Iw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Lv,l[c])}function Nw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Iv,l[c])}function Dw(s,e,t){const r=this.cache,a=e.length,l=kc(t,a);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Pv,l[c])}function Uw(s){switch(s){case 5126:return gw;case 35664:return vw;case 35665:return yw;case 35666:return _w;case 35674:return xw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return ww;case 35668:case 35672:return Aw;case 35669:case 35673:return Tw;case 5125:return bw;case 36294:return Cw;case 36295:return Rw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Dw}}class Fw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=mw(t.type)}}class Ow{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uw(t.type)}}class kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function S0(s,e){s.seq.push(e),s.map[e.id]=e}function Bw(s,e,t){const r=s.name,a=r.length;for(ef.lastIndex=0;;){const l=ef.exec(r),c=ef.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&c+2===a){S0(t,p===void 0?new Fw(d,s,e):new Ow(d,s,e));break}else{let x=t.map[d];x===void 0&&(x=new kw(d),S0(t,x)),t=x}}}class Sc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);Bw(d,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function M0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const zw=37297;let Gw=0;function Vw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const E0=new wt;function Hw(s){It._getMatrix(E0,It.workingColorSpace,s);const e=`mat3( ${E0.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function w0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+Vw(s.getShaderSource(e),d)}else return l}function Ww(s,e){const t=Hw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xw={[nv]:"Linear",[iv]:"Reinhard",[rv]:"Cineon",[ch]:"ACESFilmic",[av]:"AgX",[ov]:"Neutral",[sv]:"Custom"};function jw(s,e){const t=Xw[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new Z;function Yw(){It.getLuminanceCoefficients(dc);const s=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Zw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function To(s){return s!==""}function A0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(Kw,Qw)}const Jw=new Map;function Qw(s,e){let t=Tt[e];if(t===void 0){const r=Jw.get(e);if(r!==void 0)t=Tt[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return th(t)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(s){return s.replace(eA,tA)}function tA(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function C0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const nA={[hc]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function iA(s){return nA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rA={[Ls]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function sA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":rA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const aA={[La]:"ENVMAP_MODE_REFRACTION"};function oA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":aA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lA={[tv]:"ENVMAP_BLENDING_MULTIPLY",[Ux]:"ENVMAP_BLENDING_MIX",[Fx]:"ENVMAP_BLENDING_ADD"};function cA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":lA[s.combine]||"ENVMAP_BLENDING_NONE"}function uA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dA(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=iA(t),p=sA(t),v=oA(t),x=cA(t),g=uA(t),y=$w(t),E=Zw(l),A=a.createProgram();let S,_,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(To).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(To).join(`
`),_.length>0&&(_+=`
`)):(S=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),_=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==nr?jw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,Ww("linearToOutputTexel",t.outputColorSpace),Yw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),c=th(c),c=A0(c,t),c=T0(c,t),d=th(d),d=A0(d,t),d=T0(d,t),c=b0(c),d=b0(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const F=P+S+c,b=P+_+d,I=M0(a,a.VERTEX_SHADER,F),L=M0(a,a.FRAGMENT_SHADER,b);a.attachShader(A,I),a.attachShader(A,L),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(G){if(s.debug.checkShaderErrors){const W=a.getProgramInfoLog(A)||"",K=a.getShaderInfoLog(I)||"",z=a.getShaderInfoLog(L)||"",J=W.trim(),ge=K.trim(),q=z.trim();let ee=!0,H=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,I,L);else{const j=w0(a,I,"vertex"),D=w0(a,L,"fragment");Ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+j+`
`+D)}else J!==""?gt("WebGLProgram: Program Info Log:",J):(ge===""||q==="")&&(H=!1);H&&(G.diagnostics={runnable:ee,programLog:J,vertexShader:{log:ge,prefix:S},fragmentShader:{log:q,prefix:_}})}a.deleteShader(I),a.deleteShader(L),w=new Sc(a,A),N=qw(a,A)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let N;this.getAttributes=function(){return N===void 0&&U(this),N};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(A,zw)),k},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=L,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pA(e),t.set(e,r)),r}}class pA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function mA(s){return s===Is||s===Ac||s===Tc}function gA(s,e,t,r,a,l){const c=new xh,d=new hA,h=new Set,p=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return h.add(w),w===0?"uv":`uv${w}`}function A(w,N,k,G,W,K){const z=G.fog,J=W.geometry,ge=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ee=e.get(w.envMap||ge,q),H=ee&&ee.mapping===Uc?ee.image.height:null,j=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&gt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const D=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=D!==void 0?D.length:0;let Le=0;J.morphAttributes.position!==void 0&&(Le=1),J.morphAttributes.normal!==void 0&&(Le=2),J.morphAttributes.color!==void 0&&(Le=3);let Ke,$e,Ae,re;if(j){const vt=er[j];Ke=vt.vertexShader,$e=vt.fragmentShader}else{Ke=w.vertexShader,$e=w.fragmentShader;const vt=d.getVertexShaderStage(w),pt=d.getFragmentShaderStage(w);d.update(w,vt,pt),Ae=vt.id,re=pt.id}const ne=s.getRenderTarget(),Oe=s.state.buffers.depth.getReversed(),Me=W.isInstancedMesh===!0,Be=W.isBatchedMesh===!0,yt=!!w.map,Dt=!!w.matcap,_t=!!ee,Mt=!!w.aoMap,Ut=!!w.lightMap,mt=!!w.bumpMap&&w.wireframe===!1,Gt=!!w.normalMap,$t=!!w.displacementMap,Vt=!!w.emissiveMap,st=!!w.metalnessMap,Nt=!!w.roughnessMap,$=w.anisotropy>0,kt=w.clearcoat>0,Pt=w.dispersion>0,O=w.retroreflectivity>0,M=w.iridescence>0,ie=w.sheen>0,ue=w.transmission>0,ye=$&&!!w.anisotropyMap,Ne=kt&&!!w.clearcoatMap,pe=kt&&!!w.clearcoatNormalMap,oe=kt&&!!w.clearcoatRoughnessMap,_e=M&&!!w.iridescenceMap,se=M&&!!w.iridescenceThicknessMap,Ve=ie&&!!w.sheenColorMap,te=ie&&!!w.sheenRoughnessMap,fe=!!w.specularMap,Te=!!w.specularColorMap,Re=!!w.specularIntensityMap,Ce=ue&&!!w.transmissionMap,V=ue&&!!w.thicknessMap,De=!!w.gradientMap,xe=!!w.alphaMap,Pe=w.alphaTest>0,Ee=!!w.alphaHash,Se=!!w.extensions;let Ge=nr;w.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const Ue={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:$e,defines:w.defines,customVertexShaderID:Ae,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Be,batchingColor:Be&&W._colorsTexture!==null,instancing:Me,instancingColor:Me&&W.instanceColor!==null,instancingMorph:Me&&W.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:yt,matcap:Dt,envMap:_t,envMapMode:_t&&ee.mapping,envMapCubeUVHeight:H,aoMap:Mt,lightMap:Ut,bumpMap:mt,normalMap:Gt,displacementMap:$t,emissiveMap:Vt,normalMapObjectSpace:Gt&&w.normalMapType===Bx,normalMapTangentSpace:Gt&&w.normalMapType===Zf,packedNormalMap:Gt&&w.normalMapType===Zf&&mA(w.normalMap.format),metalnessMap:st,roughnessMap:Nt,anisotropy:$,anisotropyMap:ye,clearcoat:kt,clearcoatMap:Ne,clearcoatNormalMap:pe,clearcoatRoughnessMap:oe,dispersion:Pt,retroreflection:O,iridescence:M,iridescenceMap:_e,iridescenceThicknessMap:se,sheen:ie,sheenColorMap:Ve,sheenRoughnessMap:te,specularMap:fe,specularColorMap:Te,specularIntensityMap:Re,transmission:ue,transmissionMap:Ce,thicknessMap:V,gradientMap:De,opaque:w.transparent===!1&&w.blending===Ro&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:Pe,alphaHash:Ee,combine:w.combine,mapUv:yt&&E(w.map.channel),aoMapUv:Mt&&E(w.aoMap.channel),lightMapUv:Ut&&E(w.lightMap.channel),bumpMapUv:mt&&E(w.bumpMap.channel),normalMapUv:Gt&&E(w.normalMap.channel),displacementMapUv:$t&&E(w.displacementMap.channel),emissiveMapUv:Vt&&E(w.emissiveMap.channel),metalnessMapUv:st&&E(w.metalnessMap.channel),roughnessMapUv:Nt&&E(w.roughnessMap.channel),anisotropyMapUv:ye&&E(w.anisotropyMap.channel),clearcoatMapUv:Ne&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:se&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:te&&E(w.sheenRoughnessMap.channel),specularMapUv:fe&&E(w.specularMap.channel),specularColorMapUv:Te&&E(w.specularColorMap.channel),specularIntensityMapUv:Re&&E(w.specularIntensityMap.channel),transmissionMapUv:Ce&&E(w.transmissionMap.channel),thicknessMapUv:V&&E(w.thicknessMap.channel),alphaMapUv:xe&&E(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Gt||$),vertexNormals:!!J.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(yt||xe),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||J.attributes.normal===void 0&&Gt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Oe,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Le,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:yt&&w.map.isVideoTexture===!0&&It.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&It.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ki,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Se&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&w.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ue.vertexUv1s=h.has(1),Ue.vertexUv2s=h.has(2),Ue.vertexUv3s=h.has(3),h.clear(),Ue}function S(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)N.push(k),N.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(_(N,w),P(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function _(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function P(w,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function F(w){const N=y[w.type];let k;if(N){const G=er[N];k=IS.clone(G.uniforms)}else k=w.uniforms;return k}function b(w,N){let k=v.get(N);return k!==void 0?++k.usedTimes:(k=new dA(s,N,w,a),p.push(k),v.set(N,k)),k}function I(w){if(--w.usedTimes===0){const N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function L(w){d.remove(w)}function U(){d.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:F,acquireProgram:b,releaseProgram:I,releaseShaderCache:L,programs:p,dispose:U}}function vA(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function yA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function R0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function P0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,A,S,_){let P=s[e];return P===void 0?(P={id:g.id,object:g,geometry:y,material:E,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:_},s[e]=P):(P.id=g.id,P.object=g,P.geometry=y,P.material=E,P.materialVariant=c(g),P.groupOrder=A,P.renderOrder=g.renderOrder,P.z=S,P.group=_),e++,P}function h(g,y,E,A,S,_,P){P.reversedDepth===!0&&(S=-S);const F=d(g,y,E,A,S,_);E.transmission>0?r.push(F):E.transparent===!0?a.push(F):t.push(F)}function p(g,y,E,A,S,_){const P=d(g,y,E,A,S,_);E.transmission>0?r.unshift(P):E.transparent===!0?a.unshift(P):t.unshift(P)}function v(g,y){t.length>1&&t.sort(g||yA),r.length>1&&r.sort(y||R0),a.length>1&&a.sort(y||R0)}function x(){for(let g=e,y=s.length;g<y;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:x,sort:v}}function _A(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new P0,s.set(r,[c])):a>=l.length?(c=new P0,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function xA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new St};break;case"SpotLight":t={position:new Z,direction:new Z,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function SA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let MA=0;function EA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wA(s){const e=new xA,t=SA(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Z);const a=new Z,l=new Wt,c=new Wt;function d(p){let v=0,x=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,E=0,A=0,S=0,_=0,P=0,F=0,b=0,I=0,L=0,U=0,w=0,N=0,k=0;p.sort(EA);for(let W=0,K=p.length;W<K;W++){const z=p[W],J=z.color,ge=z.intensity,q=z.distance;let ee=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Is?ee=z.shadow.map.texture:ee=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=J.r*ge,x+=J.g*ge,g+=J.b*ge;else if(z.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],ge);k++}else if(z.isSunLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),r.sunShadow[E]=D,r.sunShadowMap[E]=ee;const le=j.getViewportCount();for(let Le=0;Le<le;Le++)r.sunShadowMatrix[A+Le]=j.getMatrix(Le),r.sunShadowCascade[A+Le]=j._cascadeData[Le];A+=le,E++}r.sun[y]=H,y++}else if(z.isDirectionalLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const j=z.shadow,D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,r.directionalShadow[S]=D,r.directionalShadowMap[S]=ee,r.directionalShadowMatrix[S]=z.shadow.matrix,I++}r.directional[S]=H,S++}else if(z.isSpotLight){const H=e.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(J).multiplyScalar(ge),H.distance=q,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,r.spot[P]=H;const j=z.shadow;if(z.map&&(r.spotLightMap[w]=z.map,w++,j.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[P]=j.matrix,z.castShadow){const D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,r.spotShadow[P]=D,r.spotShadowMap[P]=ee,U++}P++}else if(z.isRectAreaLight){const H=e.get(z);H.color.copy(J).multiplyScalar(ge),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[F]=H,F++}else if(z.isPointLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),H.distance=z.distance,H.decay=z.decay,z.castShadow){const j=z.shadow,D=t.get(z);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=ee,r.pointShadowMatrix[_]=z.shadow.matrix,L++}r.point[_]=H,_++}else if(z.isHemisphereLight){const H=e.get(z);H.skyColor.copy(z.color).multiplyScalar(ge),H.groundColor.copy(z.groundColor).multiplyScalar(ge),r.hemi[b]=H,b++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const G=r.hash;(G.sunLength!==y||G.directionalLength!==S||G.pointLength!==_||G.spotLength!==P||G.rectAreaLength!==F||G.hemiLength!==b||G.numSunShadows!==E||G.numDirectionalShadows!==I||G.numPointShadows!==L||G.numSpotShadows!==U||G.numSpotMaps!==w||G.numLightProbes!==k)&&(r.sun.length=y,r.directional.length=S,r.spot.length=P,r.rectArea.length=F,r.point.length=_,r.hemi.length=b,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=k,G.sunLength=y,G.directionalLength=S,G.pointLength=_,G.spotLength=P,G.rectAreaLength=F,G.hemiLength=b,G.numSunShadows=E,G.numDirectionalShadows=I,G.numPointShadows=L,G.numSpotShadows=U,G.numSpotMaps=w,G.numLightProbes=k,r.version=MA++)}function h(p,v){let x=0,g=0,y=0,E=0,A=0,S=0;const _=v.matrixWorldInverse;for(let P=0,F=p.length;P<F;P++){const b=p[P];if(b.isSunLight){const I=r.sun[x];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(_),x++}else if(b.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(_),g++}else if(b.isSpotLight){const I=r.spot[E];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(_),E++}else if(b.isRectAreaLight){const I=r.rectArea[A];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(_),c.identity(),l.copy(b.matrixWorld),l.premultiply(_),c.extractRotation(l),I.halfWidth.set(b.width*.5,0,0),I.halfHeight.set(0,b.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const I=r.point[y];I.position.setFromMatrixPosition(b.matrixWorld),I.position.applyMatrix4(_),y++}else if(b.isHemisphereLight){const I=r.hemi[S];I.direction.setFromMatrixPosition(b.matrixWorld),I.direction.transformDirection(_),S++}}}return{setup:d,setupView:h,state:r}}function L0(s){const e=new wA(s),t=[],r=[],a=[];function l(g){x.camera=g,t.length=0,r.length=0,a.length=0}function c(g){t.push(g)}function d(g){r.push(g)}function h(g){a.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function AA(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new L0(s),e.set(a,[d])):l>=c.length?(d=new L0(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`,CA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],RA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],I0=new Wt,Mo=new Z,tf=new Z;function PA(s,e,t){let r=new Mh;const a=new ht,l=new ht,c=new an,d=new OS,h=new kS,p={},v=t.maxTextureSize,x={[Ps]:$n,[$n]:Ps,[ki]:ki},g=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:TA,fragmentShader:bA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new ln;E.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Sn(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let _=this.type;this.render=function(L,U,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===gx&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hc);const N=s.getRenderTarget(),k=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Ar),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const K=_!==this.type;K&&U.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(J=>J.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,J=L.length;z<J;z++){const ge=L[z],q=ge.shadow;if(q===void 0){gt("WebGLShadowMap:",ge,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const ee=q.getFrameExtents();a.multiply(ee),l.copy(q.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ee.x),a.x=l.x*ee.x,q.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ee.y),a.y=l.y*ee.y,q.mapSize.y=l.y));const H=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=H,q.map===null||K===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ao){if(ge.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Vi(a.x,a.y,{format:Is,type:rr,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),q.map.texture.name=ge.name+".shadowMap",q.map.depthTexture=new Do(a.x,a.y,zi),q.map.depthTexture.name=ge.name+".shadowMapDepth",q.map.depthTexture.format=br,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn}else ge.isPointLight?(q.map=new Cv(a.x),q.map.depthTexture=new AS(a.x,ir)):(q.map=new Vi(a.x,a.y),q.map.depthTexture=new Do(a.x,a.y,ir)),q.map.depthTexture.name=ge.name+".shadowMap",q.map.depthTexture.format=br,this.type===hc?(q.map.depthTexture.compareFunction=H?yh:vh,q.map.depthTexture.minFilter=Vn,q.map.depthTexture.magFilter=Vn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);const j=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();ge.isPointLight!==!0&&q.updateMatrices(ge,w);for(let D=0;D<j;D++){const le=q.getCamera(D);if(ge.isPointLight){const Le=q.camera,Ke=q.matrix,$e=ge.distance||Le.far;$e!==Le.far&&(Le.far=$e,Le.updateProjectionMatrix()),Mo.setFromMatrixPosition(ge.matrixWorld),Le.position.copy(Mo),tf.copy(Le.position),tf.add(CA[D]),Le.up.copy(RA[D]),Le.lookAt(tf),Le.updateMatrixWorld(),Ke.makeTranslation(-Mo.x,-Mo.y,-Mo.z),I0.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),q._frustum.setFromProjectionMatrix(I0,Le.coordinateSystem,Le.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,D),s.clear();else{D===0&&(s.setRenderTarget(q.map),s.clear());const Le=q.getViewport(D);c.set(l.x*Le.x,l.y*Le.y,l.x*Le.z,l.y*Le.w),W.viewport(c)}r=q.getFrustum(D),b(U,w,le,ge,this.type)}q.isPointLightShadow!==!0&&this.type===Ao&&P(q,w),q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(N,k,G)};function P(L,U){const w=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null?L.mapPass=new Vi(a.x,a.y,{format:Is,type:rr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(U,null,w,g,A,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value.set(L.map.width,L.map.height),y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(U,null,w,y,A,null)}function F(L,U,w,N){let k=null;const G=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)k=G;else if(k=w.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=k.uuid,K=U.uuid;let z=p[W];z===void 0&&(z={},p[W]=z);let J=z[K];J===void 0&&(J=k.clone(),z[K]=J,U.addEventListener("dispose",I)),k=J}if(k.visible=U.visible,k.wireframe=U.wireframe,N===Ao?k.side=U.shadowSide!==null?U.shadowSide:U.side:k.side=U.shadowSide!==null?U.shadowSide:x[U.side],k.alphaMap=U.alphaMap,k.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,k.map=U.map,k.clipShadows=U.clipShadows,k.clippingPlanes=U.clippingPlanes,k.clipIntersection=U.clipIntersection,k.displacementMap=U.displacementMap,k.displacementScale=U.displacementScale,k.displacementBias=U.displacementBias,k.wireframeLinewidth=U.wireframeLinewidth,k.linewidth=U.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=s.properties.get(k);W.light=w}return k}function b(L,U,w,N,k){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Ao)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const K=e.update(L),z=L.material;if(Array.isArray(z)){const J=K.groups;for(let ge=0,q=J.length;ge<q;ge++){const ee=J[ge],H=z[ee.materialIndex];if(H&&H.visible){const j=F(L,H,N,k);L.onBeforeShadow(s,L,U,w,K,j,ee),s.renderBufferDirect(w,null,K,j,L,ee),L.onAfterShadow(s,L,U,w,K,j,ee)}}}else if(z.visible){const J=F(L,z,N,k);L.onBeforeShadow(s,L,U,w,K,J,null),s.renderBufferDirect(w,null,K,J,L,null),L.onAfterShadow(s,L,U,w,K,J,null)}}const W=L.children;for(let K=0,z=W.length;K<z;K++)b(W[K],U,w,N,k)}function I(L){L.target.removeEventListener("dispose",I);for(const w in p){const N=p[w],k=L.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function LA(s,e){function t(){let V=!1;const De=new an;let xe=null;const Pe=new an(0,0,0,0);return{setMask:function(Ee){xe!==Ee&&!V&&(s.colorMask(Ee,Ee,Ee,Ee),xe=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Se,Ge,Ue,vt){vt===!0&&(Ee*=Ue,Se*=Ue,Ge*=Ue),De.set(Ee,Se,Ge,Ue),Pe.equals(De)===!1&&(s.clearColor(Ee,Se,Ge,Ue),Pe.copy(De))},reset:function(){V=!1,xe=null,Pe.set(-1,0,0,0)}}}function r(){let V=!1,De=!1,xe=null,Pe=null,Ee=null;return{setReversed:function(Se){if(De!==Se){const Ge=e.get("EXT_clip_control");Se?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),De=Se;const Ue=Ee;Ee=null,this.setClear(Ue)}},getReversed:function(){return De},setTest:function(Se){Se?ne(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!V&&(s.depthMask(Se),xe=Se)},setFunc:function(Se){if(De&&(Se=Kx[Se]),Pe!==Se){switch(Se){case uf:s.depthFunc(s.NEVER);break;case df:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Po:s.depthFunc(s.LEQUAL);break;case hf:s.depthFunc(s.EQUAL);break;case pf:s.depthFunc(s.GEQUAL);break;case mf:s.depthFunc(s.GREATER);break;case gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Se}},setLocked:function(Se){V=Se},setClear:function(Se){Ee!==Se&&(Ee=Se,De&&(Se=1-Se),s.clearDepth(Se))},reset:function(){V=!1,xe=null,Pe=null,Ee=null,De=!1}}}function a(){let V=!1,De=null,xe=null,Pe=null,Ee=null,Se=null,Ge=null,Ue=null,vt=null;return{setTest:function(pt){V||(pt?ne(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(pt){De!==pt&&!V&&(s.stencilMask(pt),De=pt)},setFunc:function(pt,Bt,gn){(xe!==pt||Pe!==Bt||Ee!==gn)&&(s.stencilFunc(pt,Bt,gn),xe=pt,Pe=Bt,Ee=gn)},setOp:function(pt,Bt,gn){(Se!==pt||Ge!==Bt||Ue!==gn)&&(s.stencilOp(pt,Bt,gn),Se=pt,Ge=Bt,Ue=gn)},setLocked:function(pt){V=pt},setClear:function(pt){vt!==pt&&(s.clearStencil(pt),vt=pt)},reset:function(){V=!1,De=null,xe=null,Pe=null,Ee=null,Se=null,Ge=null,Ue=null,vt=null}}}const l=new t,c=new r,d=new a,h=new WeakMap,p=new WeakMap;let v={},x={},g={},y=new WeakMap,E=[],A=null,S=!1,_=null,P=null,F=null,b=null,I=null,L=null,U=null,w=new St(0,0,0),N=0,k=!1,G=null,W=null,K=null,z=null,J=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=ee>=2);let j=null,D={};const le=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Ke=new an().fromArray(le),$e=new an().fromArray(Le);function Ae(V,De,xe,Pe){const Ee=new Uint8Array(4),Se=s.createTexture();s.bindTexture(V,Se),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<xe;Ge++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(De+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Se}const re={};re[s.TEXTURE_2D]=Ae(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ne(s.DEPTH_TEST),c.setFunc(Po),mt(!1),Gt(wg),ne(s.CULL_FACE),Mt(Ar);function ne(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Oe(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Me(V,De){return g[V]!==De?(s.bindFramebuffer(V,De),g[V]=De,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Be(V,De){let xe=E,Pe=!1;if(V){xe=y.get(De),xe===void 0&&(xe=[],y.set(De,xe));const Ee=V.textures;if(xe.length!==Ee.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Ge=Ee.length;Se<Ge;Se++)xe[Se]=s.COLOR_ATTACHMENT0+Se;xe.length=Ee.length,Pe=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(xe)}function yt(V){return A!==V?(s.useProgram(V),A=V,!0):!1}const Dt={[Ea]:s.FUNC_ADD,[yx]:s.FUNC_SUBTRACT,[_x]:s.FUNC_REVERSE_SUBTRACT};Dt[xx]=s.MIN,Dt[Sx]=s.MAX;const _t={[Mx]:s.ZERO,[Ex]:s.ONE,[wx]:s.SRC_COLOR,[Q0]:s.SRC_ALPHA,[Px]:s.SRC_ALPHA_SATURATE,[Cx]:s.DST_COLOR,[Tx]:s.DST_ALPHA,[Ax]:s.ONE_MINUS_SRC_COLOR,[ev]:s.ONE_MINUS_SRC_ALPHA,[Rx]:s.ONE_MINUS_DST_COLOR,[bx]:s.ONE_MINUS_DST_ALPHA,[Lx]:s.CONSTANT_COLOR,[Ix]:s.ONE_MINUS_CONSTANT_COLOR,[Nx]:s.CONSTANT_ALPHA,[Dx]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(V,De,xe,Pe,Ee,Se,Ge,Ue,vt,pt){if(V===Ar){S===!0&&(Oe(s.BLEND),S=!1);return}if(S===!1&&(ne(s.BLEND),S=!0),V!==vx){if(V!==_||pt!==k){if((P!==Ea||I!==Ea)&&(s.blendEquation(s.FUNC_ADD),P=Ea,I=Ea),pt)switch(V){case Ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFunc(s.ONE,s.ONE);break;case Ag:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",V);break}else switch(V){case Ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ag:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tg:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",V);break}F=null,b=null,L=null,U=null,w.set(0,0,0),N=0,_=V,k=pt}return}Ee=Ee||De,Se=Se||xe,Ge=Ge||Pe,(De!==P||Ee!==I)&&(s.blendEquationSeparate(Dt[De],Dt[Ee]),P=De,I=Ee),(xe!==F||Pe!==b||Se!==L||Ge!==U)&&(s.blendFuncSeparate(_t[xe],_t[Pe],_t[Se],_t[Ge]),F=xe,b=Pe,L=Se,U=Ge),(Ue.equals(w)===!1||vt!==N)&&(s.blendColor(Ue.r,Ue.g,Ue.b,vt),w.copy(Ue),N=vt),_=V,k=!1}function Ut(V,De){V.side===ki?Oe(s.CULL_FACE):ne(s.CULL_FACE);let xe=V.side===$n;De&&(xe=!xe),mt(xe),V.blending===Ro&&V.transparent===!1?Mt(Ar):Mt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const Pe=V.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Vt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){G!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),G=V)}function Gt(V){V!==px?(ne(s.CULL_FACE),V!==W&&(V===wg?s.cullFace(s.BACK):V===mx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),W=V}function $t(V){V!==K&&(q&&s.lineWidth(V),K=V)}function Vt(V,De,xe){V?(ne(s.POLYGON_OFFSET_FILL),(z!==De||J!==xe)&&(z=De,J=xe,c.getReversed()&&(De=-De),s.polygonOffset(De,xe))):Oe(s.POLYGON_OFFSET_FILL)}function st(V){V?ne(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function Nt(V){V===void 0&&(V=s.TEXTURE0+ge-1),j!==V&&(s.activeTexture(V),j=V)}function $(V,De,xe){xe===void 0&&(j===null?xe=s.TEXTURE0+ge-1:xe=j);let Pe=D[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},D[xe]=Pe),(Pe.type!==V||Pe.texture!==De)&&(j!==xe&&(s.activeTexture(xe),j=xe),s.bindTexture(V,De||re[V]),Pe.type=V,Pe.texture=De)}function kt(){const V=D[j];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Pt(){try{s.compressedTexImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function M(){try{s.texSubImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ie(){try{s.texSubImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function Ne(){try{s.texStorage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function pe(){try{s.texStorage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function oe(){try{s.texImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function _e(){try{s.texImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function se(V){return x[V]!==void 0?x[V]:s.getParameter(V)}function Ve(V,De){x[V]!==De&&(s.pixelStorei(V,De),x[V]=De)}function te(V){Ke.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ke.copy(V))}function fe(V){$e.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),$e.copy(V))}function Te(V,De){let xe=p.get(De);xe===void 0&&(xe=new WeakMap,p.set(De,xe));let Pe=xe.get(V);Pe===void 0&&(Pe=s.getUniformBlockIndex(De,V.name),xe.set(V,Pe))}function Re(V,De){const Pe=p.get(De).get(V);h.get(De)!==Pe&&(s.uniformBlockBinding(De,Pe,V.__bindingPointIndex),h.set(De,Pe))}function Ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},j=null,D={},g={},y=new WeakMap,E=[],A=null,S=!1,_=null,P=null,F=null,b=null,I=null,L=null,U=null,w=new St(0,0,0),N=0,k=!1,G=null,W=null,K=null,z=null,J=null,Ke.set(0,0,s.canvas.width,s.canvas.height),$e.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ne,disable:Oe,bindFramebuffer:Me,drawBuffers:Be,useProgram:yt,setBlending:Mt,setMaterial:Ut,setFlipSided:mt,setCullFace:Gt,setLineWidth:$t,setPolygonOffset:Vt,setScissorTest:st,activeTexture:Nt,bindTexture:$,unbindTexture:kt,compressedTexImage2D:Pt,compressedTexImage3D:O,texImage2D:oe,texImage3D:_e,pixelStorei:Ve,getParameter:se,updateUBOMapping:Te,uniformBlockBinding:Re,texStorage2D:Ne,texStorage3D:pe,texSubImage2D:M,texSubImage3D:ie,compressedTexSubImage2D:ue,compressedTexSubImage3D:ye,scissor:te,viewport:fe,reset:Ce}}function IA(s,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ht,v=new WeakMap,x=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(O,M){return E?new OffscreenCanvas(O,M):Rc("canvas")}function S(O,M,ie){let ue=1;const ye=Pt(O);if((ye.width>ie||ye.height>ie)&&(ue=ie/Math.max(ye.width,ye.height)),ue<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ne=Math.floor(ue*ye.width),pe=Math.floor(ue*ye.height);g===void 0&&(g=A(Ne,pe));const oe=M?A(Ne,pe):g;return oe.width=Ne,oe.height=pe,oe.getContext("2d").drawImage(O,0,0,Ne,pe),gt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ne+"x"+pe+")."),oe}else return"data"in O&&gt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function _(O){return O.generateMipmaps}function P(O){s.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(O,M,ie,ue,ye,Ne=!1){if(O!==null){if(s[O]!==void 0)return s[O];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pe;ue&&(pe=e.get("EXT_texture_norm16"),pe||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=M;if(M===s.RED&&(ie===s.FLOAT&&(oe=s.R32F),ie===s.HALF_FLOAT&&(oe=s.R16F),ie===s.UNSIGNED_BYTE&&(oe=s.R8),ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.R16_EXT),ie===s.SHORT&&pe&&(oe=pe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.R8UI),ie===s.UNSIGNED_SHORT&&(oe=s.R16UI),ie===s.UNSIGNED_INT&&(oe=s.R32UI),ie===s.BYTE&&(oe=s.R8I),ie===s.SHORT&&(oe=s.R16I),ie===s.INT&&(oe=s.R32I)),M===s.RG&&(ie===s.FLOAT&&(oe=s.RG32F),ie===s.HALF_FLOAT&&(oe=s.RG16F),ie===s.UNSIGNED_BYTE&&(oe=s.RG8),ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.RG16_EXT),ie===s.SHORT&&pe&&(oe=pe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.RG8UI),ie===s.UNSIGNED_SHORT&&(oe=s.RG16UI),ie===s.UNSIGNED_INT&&(oe=s.RG32UI),ie===s.BYTE&&(oe=s.RG8I),ie===s.SHORT&&(oe=s.RG16I),ie===s.INT&&(oe=s.RG32I)),M===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),ie===s.UNSIGNED_INT&&(oe=s.RGB32UI),ie===s.BYTE&&(oe=s.RGB8I),ie===s.SHORT&&(oe=s.RGB16I),ie===s.INT&&(oe=s.RGB32I)),M===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),ie===s.UNSIGNED_INT&&(oe=s.RGBA32UI),ie===s.BYTE&&(oe=s.RGBA8I),ie===s.SHORT&&(oe=s.RGBA16I),ie===s.INT&&(oe=s.RGBA32I)),M===s.RGB&&(ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.RGB16_EXT),ie===s.SHORT&&pe&&(oe=pe.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),M===s.RGBA){const _e=Ne?Cc:It.getTransfer(ye);ie===s.FLOAT&&(oe=s.RGBA32F),ie===s.HALF_FLOAT&&(oe=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(oe=_e===Xt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&pe&&(oe=pe.RGBA16_EXT),ie===s.SHORT&&pe&&(oe=pe.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function I(O,M){let ie;return O?M===null||M===ir||M===Io?ie=s.DEPTH24_STENCIL8:M===zi?ie=s.DEPTH32F_STENCIL8:M===Lo&&(ie=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ir||M===Io?ie=s.DEPTH_COMPONENT24:M===zi?ie=s.DEPTH_COMPONENT32F:M===Lo&&(ie=s.DEPTH_COMPONENT16),ie}function L(O,M){return _(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nn&&O.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function U(O){const M=O.target;M.removeEventListener("dispose",U),N(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&x.delete(M)}function w(O){const M=O.target;M.removeEventListener("dispose",w),G(M)}function N(O){const M=r.get(O);if(M.__webglInit===void 0)return;const ie=O.source,ue=y.get(ie);if(ue){const ye=ue[M.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&k(O),Object.keys(ue).length===0&&y.delete(ie)}r.remove(O)}function k(O){const M=r.get(O);s.deleteTexture(M.__webglTexture);const ie=O.source,ue=y.get(ie);delete ue[M.__cacheKey],c.memory.textures--}function G(O){const M=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(M.__webglFramebuffer[ue]))for(let ye=0;ye<M.__webglFramebuffer[ue].length;ye++)s.deleteFramebuffer(M.__webglFramebuffer[ue][ye]);else s.deleteFramebuffer(M.__webglFramebuffer[ue]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ue])}else{if(Array.isArray(M.__webglFramebuffer))for(let ue=0;ue<M.__webglFramebuffer.length;ue++)s.deleteFramebuffer(M.__webglFramebuffer[ue]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ue=0;ue<M.__webglColorRenderbuffer.length;ue++)M.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ue]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=O.textures;for(let ue=0,ye=ie.length;ue<ye;ue++){const Ne=r.get(ie[ue]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),c.memory.textures--),r.remove(ie[ue])}r.remove(O)}let W=0;function K(){W=0}function z(){return W}function J(O){W=O}function ge(){const O=W;return O>=a.maxTextures&&gt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,O}function q(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function ee(O,M){const ie=r.get(O);if(O.isVideoTexture&&$(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ie.__version!==O.version){const ue=O.image;if(ue===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(ie,O,M);return}}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+M)}function H(O,M){const ie=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){Oe(ie,O,M);return}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+M)}function j(O,M){const ie=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){Oe(ie,O,M);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+M)}function D(O,M){const ie=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ie.__version!==O.version){Me(ie,O,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+M)}const le={[vf]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[yf]:s.MIRRORED_REPEAT},Le={[Nn]:s.NEAREST,[Ox]:s.NEAREST_MIPMAP_NEAREST,[Bl]:s.NEAREST_MIPMAP_LINEAR,[Vn]:s.LINEAR,[Ed]:s.LINEAR_MIPMAP_NEAREST,[bs]:s.LINEAR_MIPMAP_LINEAR},Ke={[Gx]:s.NEVER,[jx]:s.ALWAYS,[Vx]:s.LESS,[vh]:s.LEQUAL,[Hx]:s.EQUAL,[yh]:s.GEQUAL,[Wx]:s.GREATER,[Xx]:s.NOTEQUAL};function $e(O,M){if(M.type===zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Ed||M.magFilter===Bl||M.magFilter===bs||M.minFilter===Vn||M.minFilter===Ed||M.minFilter===Bl||M.minFilter===bs)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,le[M.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,le[M.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,le[M.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Le[M.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Le[M.minFilter]),M.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,Ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Nn||M.minFilter!==Bl&&M.minFilter!==bs||M.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(O,M){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",U));const ue=M.source;let ye=y.get(ue);ye===void 0&&(ye={},y.set(ue,ye));const Ne=q(M);if(Ne!==O.__cacheKey){ye[Ne]===void 0&&(ye[Ne]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ye[Ne].usedTimes++;const pe=ye[O.__cacheKey];pe!==void 0&&(ye[O.__cacheKey].usedTimes--,pe.usedTimes===0&&k(M)),O.__cacheKey=Ne,O.__webglTexture=ye[Ne].texture}return ie}function re(O,M,ie){return Math.floor(Math.floor(O/ie)/M)}function ne(O,M,ie,ue){const Ne=O.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,ie,ue,M.data);else{Ne.sort((Ve,te)=>Ve.start-te.start);let pe=0;for(let Ve=1;Ve<Ne.length;Ve++){const te=Ne[pe],fe=Ne[Ve],Te=te.start+te.count,Re=re(fe.start,M.width,4),Ce=re(te.start,M.width,4);fe.start<=Te+1&&Re===Ce&&re(fe.start+fe.count-1,M.width,4)===Re?te.count=Math.max(te.count,fe.start+fe.count-te.start):(++pe,Ne[pe]=fe)}Ne.length=pe+1;const oe=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ve=0,te=Ne.length;Ve<te;Ve++){const fe=Ne[Ve],Te=Math.floor(fe.start/4),Re=Math.ceil(fe.count/4),Ce=Te%M.width,V=Math.floor(Te/M.width),De=Re,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,Ce,V,De,xe,ie,ue,M.data)}O.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,oe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,se)}}function Oe(O,M,ie){let ue=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=s.TEXTURE_3D);const ye=Ae(O,M),Ne=M.source;t.bindTexture(ue,O.__webglTexture,s.TEXTURE0+ie);const pe=r.get(Ne);if(Ne.version!==pe.__version||ye===!0){if(t.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xe=It.getPrimaries(It.workingColorSpace),Pe=M.colorSpace===ts?null:It.getPrimaries(M.colorSpace),Ee=M.colorSpace===ts||xe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=S(M.image,!1,a.maxTextureSize);_e=kt(M,_e);const se=l.convert(M.format,M.colorSpace),Ve=l.convert(M.type);let te=b(M.internalFormat,se,Ve,M.normalized,M.colorSpace,M.isVideoTexture);$e(ue,M);let fe;const Te=M.mipmaps,Re=M.isVideoTexture!==!0,Ce=pe.__version===void 0||ye===!0,V=Ne.dataReady,De=L(M,_e);if(M.isDepthTexture)te=I(M.format===Cs,M.type),Ce&&(Re?t.texStorage2D(s.TEXTURE_2D,1,te,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,te,_e.width,_e.height,0,se,Ve,null));else if(M.isDataTexture)if(Te.length>0){Re&&Ce&&t.texStorage2D(s.TEXTURE_2D,De,te,Te[0].width,Te[0].height);for(let xe=0,Pe=Te.length;xe<Pe;xe++)fe=Te[xe],Re?V&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,se,Ve,fe.data):t.texImage2D(s.TEXTURE_2D,xe,te,fe.width,fe.height,0,se,Ve,fe.data);M.generateMipmaps=!1}else Re?(Ce&&t.texStorage2D(s.TEXTURE_2D,De,te,_e.width,_e.height),V&&ne(M,_e,se,Ve)):t.texImage2D(s.TEXTURE_2D,0,te,_e.width,_e.height,0,se,Ve,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Re&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,te,Te[0].width,Te[0].height,_e.depth);for(let xe=0,Pe=Te.length;xe<Pe;xe++)if(fe=Te[xe],M.format!==Gi)if(se!==null)if(Re){if(V)if(M.layerUpdates.size>0){const Ee=u0(fe.width,fe.height,M.format,M.type);for(const Se of M.layerUpdates){const Ge=fe.data.subarray(Se*Ee/fe.data.BYTES_PER_ELEMENT,(Se+1)*Ee/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Se,fe.width,fe.height,1,se,Ge)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,fe.width,fe.height,_e.depth,se,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,te,fe.width,fe.height,_e.depth,0,fe.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,fe.width,fe.height,_e.depth,se,Ve,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,te,fe.width,fe.height,_e.depth,0,se,Ve,fe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Re&&Ce&&t.texStorage2D(s.TEXTURE_2D,De,te,Te[0].width,Te[0].height);for(let xe=0,Pe=Te.length;xe<Pe;xe++)fe=Te[xe],M.format!==Gi?se!==null?Re?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,te,fe.width,fe.height,0,fe.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?V&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe.width,fe.height,se,Ve,fe.data):t.texImage2D(s.TEXTURE_2D,xe,te,fe.width,fe.height,0,se,Ve,fe.data)}else if(M.isDataArrayTexture)if(Re){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,te,_e.width,_e.height,_e.depth),V)if(M.layerUpdates.size>0){const xe=u0(_e.width,_e.height,M.format,M.type);for(const Pe of M.layerUpdates){const Ee=_e.data.subarray(Pe*xe/_e.data.BYTES_PER_ELEMENT,(Pe+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,_e.width,_e.height,1,se,Ve,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,se,Ve,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,te,_e.width,_e.height,_e.depth,0,se,Ve,_e.data);else if(M.isData3DTexture)Re?(Ce&&t.texStorage3D(s.TEXTURE_3D,De,te,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,se,Ve,_e.data)):t.texImage3D(s.TEXTURE_3D,0,te,_e.width,_e.height,_e.depth,0,se,Ve,_e.data);else if(M.isFramebufferTexture){if(Ce)if(Re)t.texStorage2D(s.TEXTURE_2D,De,te,_e.width,_e.height);else{let xe=_e.width,Pe=_e.height;for(let Ee=0;Ee<De;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,te,xe,Pe,0,se,Ve,null),xe>>=1,Pe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),x.add(M),xe.onpaint=Pe=>{const Ee=Pe.changedElements;for(const Se of x)Ee.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Ee=s.RGBA,Se=s.RGBA,Ge=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ee,Se,Ge,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Re&&Ce){const xe=Pt(Te[0]);t.texStorage2D(s.TEXTURE_2D,De,te,xe.width,xe.height)}for(let xe=0,Pe=Te.length;xe<Pe;xe++)fe=Te[xe],Re?V&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,se,Ve,fe):t.texImage2D(s.TEXTURE_2D,xe,te,se,Ve,fe);M.generateMipmaps=!1}else if(Re){if(Ce){const xe=Pt(_e);t.texStorage2D(s.TEXTURE_2D,De,te,xe.width,xe.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,Ve,_e)}else t.texImage2D(s.TEXTURE_2D,0,te,se,Ve,_e);_(M)&&P(ue),pe.__version=Ne.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Me(O,M,ie){if(M.image.length!==6)return;const ue=Ae(O,M),ye=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+ie);const Ne=r.get(ye);if(ye.version!==Ne.__version||ue===!0){t.activeTexture(s.TEXTURE0+ie);const pe=It.getPrimaries(It.workingColorSpace),oe=M.colorSpace===ts?null:It.getPrimaries(M.colorSpace),_e=M.colorSpace===ts||pe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const se=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,te=[];for(let Se=0;Se<6;Se++)!se&&!Ve?te[Se]=S(M.image[Se],!0,a.maxCubemapSize):te[Se]=Ve?M.image[Se].image:M.image[Se],te[Se]=kt(M,te[Se]);const fe=te[0],Te=l.convert(M.format,M.colorSpace),Re=l.convert(M.type),Ce=b(M.internalFormat,Te,Re,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,De=Ne.__version===void 0||ue===!0,xe=ye.dataReady;let Pe=L(M,fe);$e(s.TEXTURE_CUBE_MAP,M);let Ee;if(se){V&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ce,fe.width,fe.height);for(let Se=0;Se<6;Se++){Ee=te[Se].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const Ue=Ee[Ge];M.format!==Gi?Te!==null?V?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,Ue.width,Ue.height,Te,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,Ce,Ue.width,Ue.height,0,Ue.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,Ue.width,Ue.height,Te,Re,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,Ce,Ue.width,Ue.height,0,Te,Re,Ue.data)}}}else{if(Ee=M.mipmaps,V&&De){Ee.length>0&&Pe++;const Se=Pt(te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,Ce,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ve){V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,te[Se].width,te[Se].height,Te,Re,te[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ce,te[Se].width,te[Se].height,0,Te,Re,te[Se].data);for(let Ge=0;Ge<Ee.length;Ge++){const vt=Ee[Ge].image[Se].image;V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,vt.width,vt.height,Te,Re,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,Ce,vt.width,vt.height,0,Te,Re,vt.data)}}else{V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te,Re,te[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ce,Te,Re,te[Se]);for(let Ge=0;Ge<Ee.length;Ge++){const Ue=Ee[Ge];V?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,Te,Re,Ue.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,Ce,Te,Re,Ue.image[Se])}}}_(M)&&P(s.TEXTURE_CUBE_MAP),Ne.__version=ye.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function Be(O,M,ie,ue,ye,Ne){const pe=l.convert(ie.format,ie.colorSpace),oe=l.convert(ie.type),_e=b(ie.internalFormat,pe,oe,ie.normalized,ie.colorSpace),se=r.get(M),Ve=r.get(ie);if(Ve.__renderTarget=M,!se.__hasExternalTextures){const te=Math.max(1,M.width>>Ne),fe=Math.max(1,M.height>>Ne);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ne,_e,te,fe,M.depth,0,pe,oe,null):t.texImage2D(ye,Ne,_e,te,fe,0,pe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),Nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ye,Ve.__webglTexture,0,st(M)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,ye,Ve.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(O,M,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,O),M.depthBuffer){const ue=M.depthTexture,ye=ue&&ue.isDepthTexture?ue.type:null,Ne=I(M.stencilBuffer,ye),pe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Nt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st(M),Ne,M.width,M.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,st(M),Ne,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,O)}else{const ue=M.textures;for(let ye=0;ye<ue.length;ye++){const Ne=ue[ye],pe=l.convert(Ne.format,Ne.colorSpace),oe=l.convert(Ne.type),_e=b(Ne.internalFormat,pe,oe,Ne.normalized,Ne.colorSpace);Nt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st(M),_e,M.width,M.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,st(M),_e,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(O,M,ie){const ue=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=r.get(M.depthTexture);if(ye.__renderTarget=M,(!ye.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ue){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),$e(s.TEXTURE_CUBE_MAP,M.depthTexture);const se=l.convert(M.depthTexture.format),Ve=l.convert(M.depthTexture.type);let te;M.depthTexture.format===br?te=s.DEPTH_COMPONENT24:M.depthTexture.format===Cs&&(te=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,te,M.width,M.height,0,se,Ve,null)}}else ee(M.depthTexture,0);const Ne=ye.__webglTexture,pe=st(M),oe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,_e=M.depthTexture.format===Cs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===br)Nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,oe,Ne,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,_e,oe,Ne,0);else if(M.depthTexture.format===Cs)Nt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,oe,Ne,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,_e,oe,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(O){const M=r.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const ue=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ue){const ye=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ue.removeEventListener("dispose",ye)};ue.addEventListener("dispose",ye),M.__depthDisposeCallback=ye}M.__boundDepthTexture=ue}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(ie)for(let ue=0;ue<6;ue++)Dt(M.__webglFramebuffer[ue],O,ue);else{const ue=O.texture.mipmaps;ue&&ue.length>0?Dt(M.__webglFramebuffer[0],O,0):Dt(M.__webglFramebuffer,O,0)}else if(ie){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]===void 0)M.__webglDepthbuffer[ue]=s.createRenderbuffer(),yt(M.__webglDepthbuffer[ue],O,!1);else{const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=M.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Ne)}}else{const ue=O.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),yt(M.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Ne)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(O,M,ie){const ue=r.get(O);M!==void 0&&Be(ue.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&_t(O)}function Ut(O){const M=O.texture,ie=r.get(O),ue=r.get(M);O.addEventListener("dispose",w);const ye=O.textures,Ne=O.isWebGLCubeRenderTarget===!0,pe=ye.length>1;if(pe||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=M.version,c.memory.textures++),Ne){ie.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer[oe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)ie.__webglFramebuffer[oe][_e]=s.createFramebuffer()}else ie.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)ie.__webglFramebuffer[oe]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(pe)for(let oe=0,_e=ye.length;oe<_e;oe++){const se=r.get(ye[oe]);se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture(),c.memory.textures++)}if(O.samples>0&&Nt(O)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let oe=0;oe<ye.length;oe++){const _e=ye[oe];ie.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[oe]);const se=l.convert(_e.format,_e.colorSpace),Ve=l.convert(_e.type),te=b(_e.internalFormat,se,Ve,_e.normalized,_e.colorSpace,O.isXRRenderTarget===!0),fe=st(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,te,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ie.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(ie.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),$e(s.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Be(ie.__webglFramebuffer[oe][_e],O,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e);else Be(ie.__webglFramebuffer[oe],O,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(M)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let oe=0,_e=ye.length;oe<_e;oe++){const se=ye[oe],Ve=r.get(se);let te=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(te=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,Ve.__webglTexture),$e(te,se),Be(ie.__webglFramebuffer,O,se,s.COLOR_ATTACHMENT0+oe,te,0),_(se)&&P(te)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(oe=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,ue.__webglTexture),$e(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Be(ie.__webglFramebuffer[_e],O,M,s.COLOR_ATTACHMENT0,oe,_e);else Be(ie.__webglFramebuffer,O,M,s.COLOR_ATTACHMENT0,oe,0);_(M)&&P(oe),t.unbindTexture()}O.depthBuffer&&_t(O)}function mt(O){const M=O.textures;for(let ie=0,ue=M.length;ie<ue;ie++){const ye=M[ie];if(_(ye)){const Ne=F(O),pe=r.get(ye).__webglTexture;t.bindTexture(Ne,pe),P(Ne),t.unbindTexture()}}}const Gt=[],$t=[];function Vt(O){if(O.samples>0){if(Nt(O)===!1){const M=O.textures,ie=O.width,ue=O.height;let ye=s.COLOR_BUFFER_BIT;const Ne=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=r.get(O),oe=M.length>1;if(oe)for(let se=0;se<M.length;se++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const _e=O.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let se=0;se<M.length;se++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[se]);const Ve=r.get(M[se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,ie,ue,0,0,ie,ue,ye,s.NEAREST),h===!0&&(Gt.length=0,$t.length=0,Gt.push(s.COLOR_ATTACHMENT0+se),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Gt.push(Ne),$t.push(Ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let se=0;se<M.length;se++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,pe.__webglColorRenderbuffer[se]);const Ve=r.get(M[se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&h){const M=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function st(O){return Math.min(a.maxSamples,O.samples)}function Nt(O){const M=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $(O){const M=c.render.frame;v.get(O)!==M&&(v.set(O,M),O.update())}function kt(O,M){const ie=O.colorSpace,ue=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==bc&&ie!==ts&&(It.getTransfer(ie)===Xt?(ue!==Gi||ye!==pi)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",ie)),M}function Pt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ge,this.resetTextureUnits=K,this.getTextureUnits=z,this.setTextureUnits=J,this.setTexture2D=ee,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=D,this.rebindTextures=Mt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function NA(s,e){function t(r,a=ts){let l;const c=It.getTransfer(a);if(r===pi)return s.UNSIGNED_BYTE;if(r===dh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===cv)return s.BYTE;if(r===uv)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===uh)return s.INT;if(r===ir)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===rr)return s.HALF_FLOAT;if(r===hv)return s.ALPHA;if(r===pv)return s.RGB;if(r===Gi)return s.RGBA;if(r===br)return s.DEPTH_COMPONENT;if(r===Cs)return s.DEPTH_STENCIL;if(r===hh)return s.RED;if(r===ph)return s.RED_INTEGER;if(r===Is)return s.RG;if(r===mh)return s.RG_INTEGER;if(r===gh)return s.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===vc)if(c===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===pc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===pc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_f||r===xf||r===Sf||r===Mf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===_f)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ef||r===wf||r===Af||r===Tf||r===bf||r===Ac||r===Cf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ef||r===wf)return c===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Af)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Tf)return l.COMPRESSED_R11_EAC;if(r===bf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ac)return l.COMPRESSED_RG11_EAC;if(r===Cf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Rf||r===Pf||r===Lf||r===If||r===Nf||r===Df||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf||r===Gf||r===Vf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Rf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===If)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ff)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vf)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hf||r===Wf||r===Xf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hf)return c===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jf||r===Yf||r===Tc||r===$f)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===jf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Yf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Mv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new sr({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends as{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,p=null,v=null,x=null,g=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new FA,_={},P=t.getContextAttributes();let F=null,b=null;const I=[],L=[],U=new ht;let w=null,N=null;const k=new wi;k.viewport=new an;const G=new wi;G.viewport=new an;const W=[k,G],K=new HS;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ne=I[re];return ne===void 0&&(ne=new Ld,I[re]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(re){let ne=I[re];return ne===void 0&&(ne=new Ld,I[re]=ne),ne.getGripSpace()},this.getHand=function(re){let ne=I[re];return ne===void 0&&(ne=new Ld,I[re]=ne),ne.getHandSpace()};function ge(re){const ne=L.indexOf(re.inputSource);if(ne===-1)return;const Oe=I[ne];Oe!==void 0&&(Oe.update(re.inputSource,re.frame,p||c),Oe.dispatchEvent({type:re.type,data:re.inputSource}))}function q(){a.removeEventListener("select",ge),a.removeEventListener("selectstart",ge),a.removeEventListener("selectend",ge),a.removeEventListener("squeeze",ge),a.removeEventListener("squeezestart",ge),a.removeEventListener("squeezeend",ge),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",ee);for(let re=0;re<I.length;re++){const ne=L[re];ne!==null&&(L[re]=null,I[re].disconnect(ne))}z=null,J=null,S.reset();for(const re in _)delete _[re];if(e.setRenderTarget(F),y=null,g=null,x=null,a=null,b=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),N!==null){const re=N.camera;re.fov=N.fov,re.zoom=N.zoom,re.updateProjectionMatrix(),N=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",ge),a.addEventListener("selectstart",ge),a.addEventListener("selectend",ge),a.addEventListener("squeeze",ge),a.addEventListener("squeezestart",ge),a.addEventListener("squeezeend",ge),a.addEventListener("end",q),a.addEventListener("inputsourceschange",ee),P.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Me=null,Be=null;P.depth&&(Be=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=P.stencil?Cs:br,Me=P.stencil?Io:ir);const yt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(yt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Vi(g.textureWidth,g.textureHeight,{format:Gi,type:pi,depthTexture:new Do(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Oe={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,Oe),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(d),Ae.setContext(a),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(re){for(let ne=0;ne<re.removed.length;ne++){const Oe=re.removed[ne],Me=L.indexOf(Oe);Me>=0&&(L[Me]=null,I[Me].disconnect(Oe))}for(let ne=0;ne<re.added.length;ne++){const Oe=re.added[ne];let Me=L.indexOf(Oe);if(Me===-1){for(let yt=0;yt<I.length;yt++)if(yt>=L.length){L.push(Oe),Me=yt;break}else if(L[yt]===null){L[yt]=Oe,Me=yt;break}if(Me===-1)break}const Be=I[Me];Be&&Be.connect(Oe)}}const H=new Z,j=new Z;function D(re,ne,Oe){H.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(Oe.matrixWorld);const Me=H.distanceTo(j),Be=ne.projectionMatrix.elements,yt=Oe.projectionMatrix.elements,Dt=Be[14]/(Be[10]-1),_t=Be[14]/(Be[10]+1),Mt=(Be[9]+1)/Be[5],Ut=(Be[9]-1)/Be[5],mt=(Be[8]-1)/Be[0],Gt=(yt[8]+1)/yt[0],$t=Dt*mt,Vt=Dt*Gt,st=Me/(-mt+Gt),Nt=st*-mt;if(ne.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Nt),re.translateZ(st),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Be[10]===-1)re.projectionMatrix.copy(ne.projectionMatrix),re.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const $=Dt+st,kt=_t+st,Pt=$t-Nt,O=Vt+(Me-Nt),M=Mt*_t/kt*$,ie=Ut*_t/kt*$;re.projectionMatrix.makePerspective(Pt,O,M,ie,$,kt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function le(re,ne){ne===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ne.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let ne=re.near,Oe=re.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(Oe=S.depthFar)),K.near=G.near=k.near=ne,K.far=G.far=k.far=Oe,(z!==K.near||J!==K.far)&&(a.updateRenderState({depthNear:K.near,depthFar:K.far}),z=K.near,J=K.far),K.layers.mask=re.layers.mask|6,k.layers.mask=K.layers.mask&-5,G.layers.mask=K.layers.mask&-3;const Me=re.parent,Be=K.cameras;le(K,Me);for(let yt=0;yt<Be.length;yt++)le(Be[yt],Me);Be.length===2?D(K,k,G):K.projectionMatrix.copy(k.projectionMatrix),N===null&&re.isPerspectiveCamera&&(N={camera:re,fov:re.fov,zoom:re.zoom}),Le(re,K,Me)};function Le(re,ne,Oe){Oe===null?re.matrix.copy(ne.matrixWorld):(re.matrix.copy(Oe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ne.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ne.projectionMatrix),re.projectionMatrixInverse.copy(ne.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=qf*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(re){h=re,g!==null&&(g.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(re){return _[re]};let Ke=null;function $e(re,ne){if(v=ne.getViewerPose(p||c),E=ne,v!==null){const Oe=v.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let Me=!1;Oe.length!==K.cameras.length&&(K.cameras.length=0,Me=!0);for(let _t=0;_t<Oe.length;_t++){const Mt=Oe[_t];let Ut=null;if(y!==null)Ut=y.getViewport(Mt);else{const Gt=x.getViewSubImage(g,Mt);Ut=Gt.viewport,_t===0&&(e.setRenderTargetTextures(b,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(b))}let mt=W[_t];mt===void 0&&(mt=new wi,mt.layers.enable(_t),mt.viewport=new an,W[_t]=mt),mt.matrix.fromArray(Mt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Mt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),_t===0&&(K.matrix.copy(mt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Me===!0&&K.cameras.push(mt)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const _t=x.getDepthInformation(Oe[0]);_t&&_t.isValid&&_t.texture&&S.init(_t,a.renderState)}if(Be&&Be.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let _t=0;_t<Oe.length;_t++){const Mt=Oe[_t].camera;if(Mt){let Ut=_[Mt];Ut||(Ut=new Mv,_[Mt]=Ut);const mt=x.getCameraImage(Mt);Ut.sourceTexture=mt}}}}for(let Oe=0;Oe<I.length;Oe++){const Me=L[Oe],Be=I[Oe];Me!==null&&Be!==void 0&&Be.update(Me,ne,p||c)}Ke&&Ke(re,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),E=null}const Ae=new Tv;Ae.setAnimationLoop($e),this.setAnimationLoop=function(re){Ke=re},this.dispose=function(){}}}const kA=new Wt,Nv=new wt;Nv.set(-1,0,0,0,1,0,0,0,1);function BA(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Ev(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,P,F,b){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(S,_):_.isMeshLambertMaterial?(l(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(S,_),x(S,_)):_.isMeshPhongMaterial?(l(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(S,_),g(S,_),_.isMeshPhysicalMaterial&&y(S,_,b)):_.isMeshMatcapMaterial?(l(S,_),E(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),A(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?h(S,_,P,F):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===$n&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===$n&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=e.get(_),F=P.envMap,b=P.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(kA.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Nv),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,P,F){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=F*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const P=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function zA(s,e,t,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,I){const L=I.program;r.uniformBlockBinding(b,L)}function p(b,I){let L=a[b.id];L===void 0&&(S(b),L=v(b),a[b.id]=L,b.addEventListener("dispose",P));const U=I.program;r.updateUBOMapping(b,U);const w=e.render.frame;l[b.id]!==w&&(g(b),l[b.id]=w)}function v(b){const I=x();b.__bindingPointIndex=I;const L=s.createBuffer(),U=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,U,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,L),L}function x(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const I=a[b.id],L=b.uniforms,U=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let w=0,N=L.length;w<N;w++){const k=L[w];if(Array.isArray(k))for(let G=0,W=k.length;G<W;G++)y(k[G],w,G,U);else y(k,w,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(b,I,L,U){if(A(b,I,L,U)===!0){const w=b.__offset,N=b.value;if(Array.isArray(N)){let k=0;for(let G=0;G<N.length;G++){const W=N[G],K=_(W);E(W,b.__data,k),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,b.__data)}}function E(b,I,L){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,L)}function A(b,I,L,U){const w=b.value,N=I+"_"+L;if(U[N]===void 0)return typeof w=="number"||typeof w=="boolean"?U[N]=w:ArrayBuffer.isView(w)?U[N]=w.slice():U[N]=w.clone(),!0;{const k=U[N];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return U[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(k.equals(w)===!1)return k.copy(w),!0}}return!1}function S(b){const I=b.uniforms;let L=0;const U=16;for(let N=0,k=I.length;N<k;N++){const G=Array.isArray(I[N])?I[N]:[I[N]];for(let W=0,K=G.length;W<K;W++){const z=G[W],J=Array.isArray(z.value)?z.value:[z.value];for(let ge=0,q=J.length;ge<q;ge++){const ee=J[ge],H=_(ee),j=L%U,D=j%H.boundary,le=j+D;L+=D,le!==0&&U-le<H.storage&&(L+=U-le),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=L,L+=H.storage}}}const w=L%U;return w>0&&(L+=U-w),b.__size=L,b.__cache={},this}function _(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",b),I}function P(b){const I=b.target;I.removeEventListener("dispose",P);const L=c.indexOf(I.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function F(){for(const b in a)s.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:h,update:p,dispose:F}}const GA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function VA(){return Ji===null&&(Ji=new xv(GA,16,16,Is,rr),Ji.name="DFG_LUT",Ji.minFilter=Vn,Ji.magFilter=Vn,Ji.wrapS=wr,Ji.wrapT=wr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class HA{constructor(e={}){const{canvas:t=Zx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=pi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const A=y,S=new Set([gh,mh,ph]),_=new Set([pi,ir,Lo,Io,dh,fh]),P=new Uint32Array(4),F=new Int32Array(4),b=new Z;let I=null,L=null;const U=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,W=null,K=null,z=null,J=null;this._outputColorSpace=hi;let ge=0,q=0,ee=null,H=-1,j=null;const D=new an,le=new an;let Le=null;const Ke=new St(0);let $e=0,Ae=t.width,re=t.height,ne=1,Oe=null,Me=null;const Be=new an(0,0,Ae,re),yt=new an(0,0,Ae,re);let Dt=!1;const _t=new Mh;let Mt=!1,Ut=!1;const mt=new Wt,Gt=new Z,$t=new an,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Nt(){return ee===null?ne:1}let $=r;function kt(R,Y){return t.getContext(R,Y)}let Pt,O,M,ie,ue,ye,Ne,pe,oe,_e,se,Ve,te,fe,Te,Re,Ce,V,De,xe,Pe,Ee,Se;try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Bt,!1),$===null){const Y="webgl2";if($=kt(Y,R),$===null)throw kt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(R){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Bt,!1),Ot("WebGLRenderer: "+R.message),R}function Ge(){Pt=new VE($),Pt.init(),Pe=new NA($,Pt),O=new IE($,Pt,e,Pe),M=new LA($,Pt),O.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),K=$.createFramebuffer(),z=$.createFramebuffer(),J=$.createFramebuffer(),ie=new XE($),ue=new vA,ye=new IA($,Pt,M,ue,O,Pe,ie),Ne=new GE(k),pe=new YS($),Ee=new PE($,pe),oe=new HE($,pe,ie,Ee),_e=new YE($,oe,pe,Ee,ie),V=new jE($,O,ye),Te=new NE(ue),se=new gA(k,Ne,Pt,O,Ee,Te),Ve=new BA(k,ue),te=new _A,fe=new AA(Pt),Ce=new RE(k,Ne,M,_e,E,h),Re=new PA(k,_e,O),Se=new zA($,ie,O,M),De=new LE($,Pt,ie),xe=new WE($,Pt,ie),ie.programs=se.programs,k.capabilities=O,k.extensions=Pt,k.properties=ue,k.renderLists=te,k.shadowMap=Re,k.state=M,k.info=ie}A!==pi&&(N=new ZE(A,t.width,t.height,d,a,l));const Ue=new OA(k,$);this.xr=Ue,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(Ae,re,!1))},this.getSize=function(R){return R.set(Ae,re)},this.setSize=function(R,Y,me=!0){if(Ue.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=R,re=Y,t.width=Math.floor(R*ne),t.height=Math.floor(Y*ne),me===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(Ae*ne,re*ne).floor()},this.setDrawingBufferSize=function(R,Y,me){Ae=R,re=Y,ne=me,t.width=Math.floor(R*me),t.height=Math.floor(Y*me),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===pi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Be)},this.setViewport=function(R,Y,me,ce){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,Y,me,ce),M.viewport(D.copy(Be).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,me,ce){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,me,ce),M.scissor(le.copy(yt).multiplyScalar(ne).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){M.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){Oe=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,me=!0){let ce=0;if(R){let ae=!1;if(ee!==null){const We=ee.texture.format;ae=S.has(We)}if(ae){const We=ee.texture.type,He=_.has(We),Xe=Ce.getClearColor(),et=Ce.getClearAlpha(),it=Xe.r,we=Xe.g,je=Xe.b;He?(P[0]=it,P[1]=we,P[2]=je,P[3]=et,$.clearBufferuiv($.COLOR,0,P)):(F[0]=it,F[1]=we,F[2]=je,F[3]=et,$.clearBufferiv($.COLOR,0,F))}else ce|=$.COLOR_BUFFER_BIT}Y&&(ce|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ce|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&$.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),W=R},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Bt,!1),Ce.dispose(),te.dispose(),fe.dispose(),ue.dispose(),Ne.dispose(),_e.dispose(),Ee.dispose(),Se.dispose(),se.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Xi),Ue.removeEventListener("sessionend",Fs),wn.stop()};function vt(R){R.preventDefault(),Rg("WebGLRenderer: Context Lost."),G=!0}function pt(){Rg("WebGLRenderer: Context Restored."),G=!1;const R=ie.autoReset,Y=Re.enabled,me=Re.autoUpdate,ce=Re.needsUpdate,ae=Re.type;Ge(),ie.autoReset=R,Re.enabled=Y,Re.autoUpdate=me,Re.needsUpdate=ce,Re.type=ae}function Bt(R){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gn(R){const Y=R.target;Y.removeEventListener("dispose",gn),mi(Y)}function mi(R){Hi(R),ue.remove(R)}function Hi(R){const Y=ue.get(R).programs;Y!==void 0&&(Y.forEach(function(me){se.releaseProgram(me)}),R.isShaderMaterial&&se.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,me,ce,ae,We){Y===null&&(Y=Vt);const He=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Xe=Zt(R,Y,me,ce,ae);M.setMaterial(ce,He);let et=me.index,it=1;if(ce.wireframe===!0){if(et=oe.getWireframeAttribute(me),et===void 0)return;it=2}const we=me.drawRange,je=me.attributes.position;let be=we.start*it,nt=(we.start+we.count)*it;We!==null&&(be=Math.max(be,We.start*it),nt=Math.min(nt,(We.start+We.count)*it)),et!==null?(be=Math.max(be,0),nt=Math.min(nt,et.count)):je!=null&&(be=Math.max(be,0),nt=Math.min(nt,je.count));const Et=nt-be;if(Et<0||Et===1/0)return;Ee.setup(ae,ce,Xe,me,et);let ot,ct=De;if(et!==null&&(ot=pe.get(et),ct=xe,ct.setIndex(ot)),ae.isMesh)ce.wireframe===!0?(M.setLineWidth(ce.wireframeLinewidth*Nt()),ct.setMode($.LINES)):ct.setMode($.TRIANGLES);else if(ae.isLine){let nn=ce.linewidth;nn===void 0&&(nn=1),M.setLineWidth(nn*Nt()),ae.isLineSegments?ct.setMode($.LINES):ae.isLineLoop?ct.setMode($.LINE_LOOP):ct.setMode($.LINE_STRIP)}else ae.isPoints?ct.setMode($.POINTS):ae.isSprite&&ct.setMode($.TRIANGLES);if(ae.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))ct.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const nn=ae._multiDrawStarts,Ze=ae._multiDrawCounts,Yt=ae._multiDrawCount,At=et?pe.get(et).bytesPerElement:1,vn=ue.get(ce).currentProgram.getUniforms();for(let ut=0;ut<Yt;ut++)vn.setValue($,"_gl_DrawID",ut),ct.render(nn[ut]/At,Ze[ut])}else if(ae.isInstancedMesh)ct.renderInstances(be,Et,ae.count);else if(me.isInstancedBufferGeometry){const nn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ze=Math.min(me.instanceCount,nn);ct.renderInstances(be,Et,Ze)}else ct.render(be,Et)};function Wi(R,Y,me,ce){W!==null&&R.isNodeMaterial&&W.setObject(ce,R),Mt===!0&&Te.setState(R,me,!1),R.transparent===!0&&R.side===ki&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,bi(R,Y,ce),R.side=Ps,R.needsUpdate=!0,bi(R,Y,ce),R.side=ki):bi(R,Y,ce)}this.compile=function(R,Y,me=null){me===null&&(me=R),W!==null&&W.renderStart(R,Y,me),L=fe.get(me),L.init(Y),w.push(L),me.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),R!==me&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights(),W!==null&&W.updateLights(L.state.lightsArray),Ut=this.localClippingEnabled,Mt=Te.init(this.clippingPlanes,Ut),Mt===!0&&Te.setGlobalState(this.clippingPlanes,Y),W!==null&&Re.render(L.state.shadowsArray,me,Y);const ce=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const We=ae.material;if(We)if(Array.isArray(We))for(let He=0;He<We.length;He++){const Xe=We[He];Wi(Xe,me,Y,ae),ce.add(Xe)}else Wi(We,me,Y,ae),ce.add(We)}),L=w.pop(),W!==null&&W.renderEnd(),ce},this.compileAsync=function(R,Y,me=null){const ce=this.compile(R,Y,me);return new Promise(ae=>{function We(){if(ce.forEach(function(He){const et=ue.get(He).currentProgram;(et===void 0||et.isReady())&&ce.delete(He)}),ce.size===0){ae(R);return}setTimeout(We,10)}Pt.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Ti=null;function ar(R){Ti&&Ti(R)}function Xi(){wn.stop()}function Fs(){wn.start()}const wn=new Tv;wn.setAnimationLoop(ar),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(R){Ti=R,Ue.setAnimationLoop(R),R===null?wn.stop():wn.start()},Ue.addEventListener("sessionstart",Xi),Ue.addEventListener("sessionend",Fs),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(R,Y);const me=Ue.enabled===!0&&Ue.isPresenting===!0,ce=N!==null&&(ee===null||me)&&N.begin(k,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Y),Y=Ue.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Y,ee),L=fe.get(R,w.length),L.init(Y),L.state.textureUnits=ye.getTextureUnits(),w.push(L),mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),_t.setFromProjectionMatrix(mt,tr,Y.reversedDepth),Ut=this.localClippingEnabled,Mt=Te.init(this.clippingPlanes,Ut),I=te.get(R,U.length),I.init(),U.push(I),Ue.enabled===!0&&Ue.isPresenting===!0){const He=k.xr.getDepthSensingMesh();He!==null&&or(He,Y,-1/0,k.sortObjects)}or(R,Y,0,k.sortObjects),I.finish(),W!==null&&W.updateLights(L.state.lightsArray),k.sortObjects===!0&&I.sort(Oe,Me),st=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,st&&Ce.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Te.beginShadows();const ae=L.state.shadowsArray;if(Re.render(ae,R,Y),Mt===!0&&Te.endShadows(),(ce&&N.hasRenderPass())===!1){const He=I.opaque,Xe=I.transmissive;if(L.setupLights(),Y.isArrayCamera){const et=Y.cameras;if(Xe.length>0)for(let it=0,we=et.length;it<we;it++){const je=et[it];Os(He,Xe,R,je)}st&&Ce.render(R);for(let it=0,we=et.length;it<we;it++){const je=et[it];Cr(I,R,je,je.viewport)}}else Xe.length>0&&Os(He,Xe,R,Y),st&&Ce.render(R),Cr(I,R,Y)}ee!==null&&q===0&&(ye.updateMultisampleRenderTarget(ee),ye.updateRenderTargetMipmap(ee)),ce&&N.end(k),R.isScene===!0&&R.onAfterRender(k,R,Y),Ee.resetDefaultState(),H=-1,j=null,w.pop(),w.length>0?(L=w[w.length-1],ye.setTextureUnits(L.state.textureUnits),Mt===!0&&Te.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,U.pop(),U.length>0?I=U[U.length-1]:I=null,W!==null&&W.renderEnd()};function or(R,Y,me,ce){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)me=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)L.pushLightProbeGrid(R);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(_t)){ce&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const He=_e.update(R),Xe=R.material;Xe.visible&&I.push(R,He,Xe,me,$t.z,null,Y)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(_t))){const He=_e.update(R),Xe=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),$t.copy(He.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Xe)){const et=He.groups;for(let it=0,we=et.length;it<we;it++){const je=et[it],be=Xe[je.materialIndex];be&&be.visible&&I.push(R,He,be,me,$t.z,je,Y)}}else Xe.visible&&I.push(R,He,Xe,me,$t.z,null,Y)}}const We=R.children;for(let He=0,Xe=We.length;He<Xe;He++)or(We[He],Y,me,ce)}function Cr(R,Y,me,ce){const{opaque:ae,transmissive:We,transparent:He}=R;L.setupLightsView(me),Mt===!0&&Te.setGlobalState(k.clippingPlanes,me),ce&&M.viewport(D.copy(ce)),ae.length>0&&ji(ae,Y,me),We.length>0&&ji(We,Y,me),He.length>0&&ji(He,Y,me),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Os(R,Y,me,ce){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ce.id]===void 0){const be=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ce.id]=new Vi(1,1,{generateMipmaps:!0,type:be?rr:pi,minFilter:bs,samples:Math.max(4,O.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const We=L.state.transmissionRenderTarget[ce.id],He=ce.viewport||D;We.setSize(He.z*k.transmissionResolutionScale,He.w*k.transmissionResolutionScale);const Xe=k.getRenderTarget(),et=k.getActiveCubeFace(),it=k.getActiveMipmapLevel();k.setRenderTarget(We),k.getClearColor(Ke),$e=k.getClearAlpha(),$e<1&&k.setClearColor(16777215,.5),k.clear(),st&&Ce.render(me);const we=k.toneMapping;k.toneMapping=nr;const je=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),L.setupLightsView(ce),Mt===!0&&Te.setGlobalState(k.clippingPlanes,ce),ji(R,me,ce),ye.updateMultisampleRenderTarget(We),ye.updateRenderTargetMipmap(We),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let nt=0,Et=Y.length;nt<Et;nt++){const ot=Y[nt],{object:ct,geometry:nn,material:Ze,group:Yt}=ot;if(Ze.side===ki&&ct.layers.test(ce.layers)){const At=Ze.side;Ze.side=$n,Ze.needsUpdate=!0,qn(ct,me,ce,nn,Ze,Yt),Ze.side=At,Ze.needsUpdate=!0,be=!0}}be===!0&&(ye.updateMultisampleRenderTarget(We),ye.updateRenderTargetMipmap(We))}k.setRenderTarget(Xe,et,it),k.setClearColor(Ke,$e),je!==void 0&&(ce.viewport=je),k.toneMapping=we}function ji(R,Y,me){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,We=R.length;ae<We;ae++){const He=R[ae],{object:Xe,geometry:et,group:it}=He;let we=He.material;we.allowOverride===!0&&ce!==null&&(we=ce),Xe.layers.test(me.layers)&&qn(Xe,Y,me,et,we,it)}}function qn(R,Y,me,ce,ae,We){W!==null&&ae.isNodeMaterial&&W.setObject(R,ae),R.onBeforeRender(k,Y,me,ce,ae,We),R.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(k,Y,me,ce,R,We),ae.transparent===!0&&ae.side===ki&&ae.forceSinglePass===!1?(ae.side=$n,ae.needsUpdate=!0,k.renderBufferDirect(me,Y,ce,ae,R,We),ae.side=Ps,ae.needsUpdate=!0,k.renderBufferDirect(me,Y,ce,ae,R,We),ae.side=ki):k.renderBufferDirect(me,Y,ce,ae,R,We),R.onAfterRender(k,Y,me,ce,ae,We)}function bi(R,Y,me){Y.isScene!==!0&&(Y=Vt);const ce=ue.get(R),ae=L.state.lights,We=L.state.shadowsArray,He=ae.state.version,Xe=se.getParameters(R,ae.state,We,Y,me,L.state.lightProbeGridArray),et=se.getProgramCacheKey(Xe);let it=ce.programs;ce.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ce.fog=Y.fog;const we=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ce.envMap=Ne.get(R.envMap||ce.environment,we),ce.envMapRotation=ce.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,it===void 0&&(R.addEventListener("dispose",gn),it=new Map,ce.programs=it);let je=it.get(et);if(je!==void 0){if(ce.currentProgram===je&&ce.lightsStateVersion===He)return ks(R,Xe),je}else Xe.uniforms=se.getUniforms(R),W!==null&&R.isNodeMaterial&&W.build(R,me,Xe),R.onBeforeCompile(Xe,k),je=se.acquireProgram(Xe,et),it.set(et,je),ce.uniforms=Xe.uniforms;const be=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(be.clippingPlanes=Te.uniform),ks(R,Xe),ce.needsLights=Rr(R),ce.lightsStateVersion=He,ce.needsLights&&(be.ambientLightColor.value=ae.state.ambient,be.lightProbe.value=ae.state.probe,be.sunLights.value=ae.state.sun,be.sunLightShadows.value=ae.state.sunShadow,be.directionalLights.value=ae.state.directional,be.directionalLightShadows.value=ae.state.directionalShadow,be.spotLights.value=ae.state.spot,be.spotLightShadows.value=ae.state.spotShadow,be.rectAreaLights.value=ae.state.rectArea,be.ltc_1.value=ae.state.rectAreaLTC1,be.ltc_2.value=ae.state.rectAreaLTC2,be.pointLights.value=ae.state.point,be.pointLightShadows.value=ae.state.pointShadow,be.hemisphereLights.value=ae.state.hemi,be.sunShadowMatrix.value=ae.state.sunShadowMatrix,be.sunShadowCascade.value=ae.state.sunShadowCascade,be.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,be.spotLightMatrix.value=ae.state.spotLightMatrix,be.spotLightMap.value=ae.state.spotLightMap,be.pointShadowMatrix.value=ae.state.pointShadowMatrix),ce.lightProbeGrid=L.state.lightProbeGridArray.length>0,ce.currentProgram=je,ce.uniformsList=null,je}function Hn(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Sc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ks(R,Y){const me=ue.get(R);me.outputColorSpace=Y.outputColorSpace,me.batching=Y.batching,me.batchingColor=Y.batchingColor,me.instancing=Y.instancing,me.instancingColor=Y.instancingColor,me.instancingMorph=Y.instancingMorph,me.skinning=Y.skinning,me.morphTargets=Y.morphTargets,me.morphNormals=Y.morphNormals,me.morphColors=Y.morphColors,me.morphTargetsCount=Y.morphTargetsCount,me.numClippingPlanes=Y.numClippingPlanes,me.numIntersection=Y.numClipIntersection,me.vertexAlphas=Y.vertexAlphas,me.vertexTangents=Y.vertexTangents,me.toneMapping=Y.toneMapping}function Bs(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(Y.matrixWorld);for(let me=0,ce=R.length;me<ce;me++){const ae=R[me];if(ae.texture!==null&&ae.boundingBox.containsPoint(b))return ae}return null}function Zt(R,Y,me,ce,ae){Y.isScene!==!0&&(Y=Vt),ye.resetTextureUnits();const We=Y.fog,He=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Y.environment:null,Xe=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:It.workingColorSpace,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,it=Ne.get(ce.envMap||He,et),we=ce.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,je=!!me.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),be=!!me.morphAttributes.position,nt=!!me.morphAttributes.normal,Et=!!me.morphAttributes.color;let ot=nr;ce.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ot=k.toneMapping);const ct=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,nn=ct!==void 0?ct.length:0,Ze=ue.get(ce),Yt=L.state.lights;if(Mt===!0&&(Ut===!0||R!==j)){const Lt=R===j&&ce.id===H;Te.setState(ce,R,Lt)}let At=!1;ce.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Yt.state.version||Ze.outputColorSpace!==Xe||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isBatchedMesh&&Ze.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&Ze.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ze.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ze.instancingMorph===!1&&ae.morphTexture!==null||Ze.envMap!==it||ce.fog===!0&&Ze.fog!==We||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Te.numPlanes||Ze.numIntersection!==Te.numIntersection)||Ze.vertexAlphas!==we||Ze.vertexTangents!==je||Ze.morphTargets!==be||Ze.morphNormals!==nt||Ze.morphColors!==Et||Ze.toneMapping!==ot||Ze.morphTargetsCount!==nn||!!Ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Ze.__version=ce.version);let vn=Ze.currentProgram;At===!0&&(vn=bi(ce,Y,ae),W&&ce.isNodeMaterial&&W.onUpdateProgram(ce,vn,Ze));let ut=!1,fn=!1,Dn=!1;const bt=vn.getUniforms(),Ht=Ze.uniforms;if(M.useProgram(vn.program)&&(ut=!0,fn=!0,Dn=!0),ce.id!==H&&(H=ce.id,fn=!0),Ze.needsLights){const Lt=Bs(L.state.lightProbeGridArray,ae);Ze.lightProbeGrid!==Lt&&(Ze.lightProbeGrid=Lt,fn=!0)}if(ut||j!==R){M.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),bt.setValue($,"projectionMatrix",R.projectionMatrix),bt.setValue($,"viewMatrix",R.matrixWorldInverse);const Kn=bt.map.cameraPosition;Kn!==void 0&&Kn.setValue($,Gt.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&bt.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&bt.setValue($,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,fn=!0,Dn=!0)}if(Ze.needsLights&&(Yt.state.sunShadowMap.length>0&&bt.setValue($,"sunShadowMap",Yt.state.sunShadowMap,ye),Yt.state.directionalShadowMap.length>0&&bt.setValue($,"directionalShadowMap",Yt.state.directionalShadowMap,ye),Yt.state.spotShadowMap.length>0&&bt.setValue($,"spotShadowMap",Yt.state.spotShadowMap,ye),Yt.state.pointShadowMap.length>0&&bt.setValue($,"pointShadowMap",Yt.state.pointShadowMap,ye)),ae.isSkinnedMesh){bt.setOptional($,ae,"bindMatrix"),bt.setOptional($,ae,"bindMatrixInverse");const Lt=ae.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),bt.setValue($,"boneTexture",Lt.boneTexture,ye))}ae.isBatchedMesh&&(bt.setOptional($,ae,"batchingTexture"),bt.setValue($,"batchingTexture",ae._matricesTexture,ye),bt.setOptional($,ae,"batchingIdTexture"),bt.setValue($,"batchingIdTexture",ae._indirectTexture,ye),bt.setOptional($,ae,"batchingColorTexture"),ae._colorsTexture!==null&&bt.setValue($,"batchingColorTexture",ae._colorsTexture,ye));const ai=me.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&V.update(ae,me,vn),(fn||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,bt.setValue($,"receiveShadow",ae.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Y.environment!==null&&(Ht.envMapIntensity.value=Y.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=VA()),fn){if(bt.setValue($,"toneMappingExposure",k.toneMappingExposure),Ze.needsLights&&zs(Ht,Dn),We&&ce.fog===!0&&Ve.refreshFogUniforms(Ht,We),Ve.refreshMaterialUniforms(Ht,ce,ne,re,L.state.transmissionRenderTarget[R.id]),Ze.needsLights&&Ze.lightProbeGrid){const Lt=Ze.lightProbeGrid;Ht.probesSH.value=Lt.texture,Ht.probesMin.value.copy(Lt.boundingBox.min),Ht.probesMax.value.copy(Lt.boundingBox.max),Ht.probesResolution.value.copy(Lt.resolution)}Sc.upload($,Hn(Ze),Ht,ye)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Sc.upload($,Hn(Ze),Ht,ye),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&bt.setValue($,"center",ae.center),bt.setValue($,"modelViewMatrix",ae.modelViewMatrix),bt.setValue($,"normalMatrix",ae.normalMatrix),bt.setValue($,"modelMatrix",ae.matrixWorld),ce.uniformsGroups!==void 0){const Lt=ce.uniformsGroups;for(let Kn=0,Wn=Lt.length;Kn<Wn;Kn++){const Ci=Lt[Kn];Se.update(Ci,vn),Se.bind(Ci,vn)}}return vn}function zs(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.sunLights.needsUpdate=Y,R.sunLightShadows.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Rr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ge},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,Y,me){const ce=ue.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ue.get(R.texture).__webglTexture=Y,ue.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:me,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const me=ue.get(R);me.__webglFramebuffer=Y,me.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,me=0){ee=R,ge=Y,q=me;let ce=null,ae=!1,We=!1;if(R){const Xe=ue.get(R);if(Xe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer($.FRAMEBUFFER,Xe.__webglFramebuffer),D.copy(R.viewport),le.copy(R.scissor),Le=R.scissorTest,M.viewport(D),M.scissor(le),M.setScissorTest(Le),H=-1;return}else if(Xe.__webglFramebuffer===void 0)ye.setupRenderTarget(R);else if(Xe.__hasExternalTextures)ye.rebindTextures(R,ue.get(R.texture).__webglTexture,ue.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const we=R.depthTexture;if(Xe.__boundDepthTexture!==we){if(we!==null&&ue.has(we)&&(R.width!==we.image.width||R.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(We=!0);const it=ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?ce=it[Y][me]:ce=it[Y],ae=!0):R.samples>0&&ye.useMultisampledRTT(R)===!1?ce=ue.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?ce=it[me]:ce=it,D.copy(R.viewport),le.copy(R.scissor),Le=R.scissorTest}else D.copy(Be).multiplyScalar(ne).floor(),le.copy(yt).multiplyScalar(ne).floor(),Le=Dt;if(me!==0&&(ce=K),M.bindFramebuffer($.FRAMEBUFFER,ce)&&M.drawBuffers(R,ce),M.viewport(D),M.scissor(le),M.setScissorTest(Le),ae){const Xe=ue.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,me)}else if(We){const Xe=Y;for(let et=0;et<R.textures.length;et++){const it=ue.get(R.textures[et]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+et,it.__webglTexture,me,Xe)}}else if(R!==null&&me!==0){const Xe=ue.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Xe.__webglTexture,me)}H=-1};function Pr(R){const Y=ue.get(R);return(Y.__readFormat!==R.format||Y.__readType!==R.type)&&(Y.__readFormat=R.format,Y.__readType=R.type,Y.__formatReadable=O.textureFormatReadable(R.format),Y.__typeReadable=O.textureTypeReadable(R.type)),Y}this.readRenderTargetPixels=function(R,Y,me,ce,ae,We,He,Xe=0){if(!(R&&R.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(et=et[He]),et){M.bindFramebuffer($.FRAMEBUFFER,et);try{const it=R.textures[Xe],we=it.format,je=it.type;R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe);const be=Pr(it);if(be.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ce&&me>=0&&me<=R.height-ae&&$.readPixels(Y,me,ce,ae,Pe.convert(we),Pe.convert(je),We)}finally{const it=ee!==null?ue.get(ee).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(R,Y,me,ce,ae,We,He,Xe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(et=et[He]),et)if(Y>=0&&Y<=R.width-ce&&me>=0&&me<=R.height-ae){M.bindFramebuffer($.FRAMEBUFFER,et);const it=R.textures[Xe],we=it.format,je=it.type;R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe);const be=Pr(it);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,nt),$.bufferData($.PIXEL_PACK_BUFFER,We.byteLength,$.STREAM_READ),$.readPixels(Y,me,ce,ae,Pe.convert(we),Pe.convert(je),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Et=ee!==null?ue.get(ee).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,Et);const ot=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await qx($,ot,4),$.bindBuffer($.PIXEL_PACK_BUFFER,nt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,We),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(nt),$.deleteSync(ot),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,me=0){const ce=Math.pow(2,-me),ae=Math.floor(R.image.width*ce),We=Math.floor(R.image.height*ce),He=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;ye.setTexture2D(R,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,He,Xe,ae,We),M.unbindTexture()},this.copyTextureToTexture=function(R,Y,me=null,ce=null,ae=0,We=0){let He,Xe,et,it,we,je,be,nt,Et;const ot=R.isCompressedTexture?R.mipmaps[We]:R.image;if(me!==null)He=me.max.x-me.min.x,Xe=me.max.y-me.min.y,et=me.isBox3?me.max.z-me.min.z:1,it=me.min.x,we=me.min.y,je=me.isBox3?me.min.z:0;else{const Ht=Math.pow(2,-ae);He=Math.floor(ot.width*Ht),Xe=Math.floor(ot.height*Ht),R.isDataArrayTexture?et=ot.depth:R.isData3DTexture?et=Math.floor(ot.depth*Ht):et=1,it=0,we=0,je=0}ce!==null?(be=ce.x,nt=ce.y,Et=ce.z):(be=0,nt=0,Et=0);const ct=Pe.convert(Y.format),nn=Pe.convert(Y.type);let Ze;Y.isData3DTexture?(ye.setTexture3D(Y,0),Ze=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ye.setTexture2DArray(Y,0),Ze=$.TEXTURE_2D_ARRAY):(ye.setTexture2D(Y,0),Ze=$.TEXTURE_2D),M.activeTexture($.TEXTURE0),M.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);const Yt=M.getParameter($.UNPACK_ROW_LENGTH),At=M.getParameter($.UNPACK_IMAGE_HEIGHT),vn=M.getParameter($.UNPACK_SKIP_PIXELS),ut=M.getParameter($.UNPACK_SKIP_ROWS),fn=M.getParameter($.UNPACK_SKIP_IMAGES);M.pixelStorei($.UNPACK_ROW_LENGTH,ot.width),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,ot.height),M.pixelStorei($.UNPACK_SKIP_PIXELS,it),M.pixelStorei($.UNPACK_SKIP_ROWS,we),M.pixelStorei($.UNPACK_SKIP_IMAGES,je);const Dn=R.isDataArrayTexture||R.isData3DTexture,bt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Ht=ue.get(R),ai=ue.get(Y),Lt=ue.get(Ht.__renderTarget),Kn=ue.get(ai.__renderTarget);M.bindFramebuffer($.READ_FRAMEBUFFER,Lt.__webglFramebuffer),M.bindFramebuffer($.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Wn=0;Wn<et;Wn++)Dn&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(R).__webglTexture,ae,je+Wn),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(Y).__webglTexture,We,Et+Wn)),$.blitFramebuffer(it,we,He,Xe,be,nt,He,Xe,$.DEPTH_BUFFER_BIT,$.NEAREST);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||ue.has(R)){const Ht=ue.get(R),ai=ue.get(Y);M.bindFramebuffer($.READ_FRAMEBUFFER,z),M.bindFramebuffer($.DRAW_FRAMEBUFFER,J);for(let Lt=0;Lt<et;Lt++)Dn?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ht.__webglTexture,ae,je+Lt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ht.__webglTexture,ae),bt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ai.__webglTexture,We,Et+Lt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ai.__webglTexture,We),ae!==0?$.blitFramebuffer(it,we,He,Xe,be,nt,He,Xe,$.COLOR_BUFFER_BIT,$.NEAREST):bt?$.copyTexSubImage3D(Ze,We,be,nt,Et+Lt,it,we,He,Xe):$.copyTexSubImage2D(Ze,We,be,nt,it,we,He,Xe);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else bt?R.isDataTexture||R.isData3DTexture?$.texSubImage3D(Ze,We,be,nt,Et,He,Xe,et,ct,nn,ot.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(Ze,We,be,nt,Et,He,Xe,et,ct,ot.data):$.texSubImage3D(Ze,We,be,nt,Et,He,Xe,et,ct,nn,ot):R.isDataTexture?$.texSubImage2D($.TEXTURE_2D,We,be,nt,He,Xe,ct,nn,ot.data):R.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,We,be,nt,ot.width,ot.height,ct,ot.data):$.texSubImage2D($.TEXTURE_2D,We,be,nt,He,Xe,ct,nn,ot);M.pixelStorei($.UNPACK_ROW_LENGTH,Yt),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,At),M.pixelStorei($.UNPACK_SKIP_PIXELS,vn),M.pixelStorei($.UNPACK_SKIP_ROWS,ut),M.pixelStorei($.UNPACK_SKIP_IMAGES,fn),We===0&&Y.generateMipmaps&&$.generateMipmap(Ze),M.unbindTexture()},this.initRenderTarget=function(R){ue.get(R).__webglFramebuffer===void 0&&ye.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ye.setTextureCube(R,0):R.isData3DTexture?ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ye.setTexture2DArray(R,0):ye.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){ge=0,q=0,ee=null,M.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const N0={type:"change"},Ch={type:"start"},Dv={type:"end"},fc=new Fo,D0=new Er,WA=Math.cos(70*Qx.DEG2RAD),xn=new Z,si=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6;class XA extends XS{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ba.ROTATE,MIDDLE:ba.DOLLY,RIGHT:ba.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new rs,this._lastTargetPosition=new Z,this._quat=new rs().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new l0,this._sphericalDelta=new l0,this._scale=1,this._panOffset=new Z,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new Z,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YA.bind(this),this._onPointerDown=jA.bind(this),this._onPointerUp=$A.bind(this),this._onContextMenu=tT.bind(this),this._onMouseWheel=KA.bind(this),this._onKeyDown=JA.bind(this),this._onTouchStart=QA.bind(this),this._onTouchMove=eT.bind(this),this._onMouseDown=ZA.bind(this),this._onMouseMove=qA.bind(this),this._interceptControlDown=nT.bind(this),this._interceptControlUp=iT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(N0),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;xn.copy(t).sub(this.target),xn.applyQuaternion(this._quat),this._spherical.setFromVector3(xn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=si:r>Math.PI&&(r-=si),a<-Math.PI?a+=si:a>Math.PI&&(a-=si),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(xn.setFromSpherical(this._spherical),xn.applyQuaternion(this._quatInverse),t.copy(this.target).add(xn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=xn.length();c=this._clampDistance(d*this._scale);const h=d-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),c=xn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(fc.origin.copy(this.object.position),fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fc.direction))<WA?this.object.lookAt(this.target):(D0.setFromNormalAndCoplanarPoint(this.object.up,this.target),fc.intersectPlane(D0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(N0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?si/60*this.autoRotateSpeed*e:si/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xn.setFromMatrixColumn(t,0),xn.multiplyScalar(-e),this._panOffset.add(xn)}_panUp(e,t){this.screenSpacePanning===!0?xn.setFromMatrixColumn(t,1):(xn.setFromMatrixColumn(t,0),xn.crossVectors(this.object.up,xn)),xn.multiplyScalar(e),this._panOffset.add(xn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;xn.copy(a).sub(this.target);let l=xn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,c=r.width,d=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(si*this._rotateDelta.x/t.clientHeight),this._rotateUp(si*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(si*this._rotateDelta.x/t.clientHeight),this._rotateUp(si*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ht,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function jA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function $A(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dv),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ZA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ba.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=jt.DOLLY;break;case ba.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=jt.ROTATE}break;case ba.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Ch)}function qA(s){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KA(s){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(s.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Dv))}function JA(s){this.enabled!==!1&&this._handleKeyDown(s)}function QA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=jt.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=jt.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Ch)}function eT(s){switch(this._trackPointer(s),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=jt.NONE}}function tT(s){this.enabled!==!1&&s.preventDefault()}function nT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iT(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const un=1.38;function Sr(s,e,t=un){const r=(90-s)*(Math.PI/180),a=(e+180)*(Math.PI/180),l=-(t*Math.sin(r)*Math.cos(a)),c=t*Math.sin(r)*Math.sin(a),d=t*Math.cos(r);return new Z(l,d,c)}function rT(s,e){return s>15&&s<72&&e>-165&&e<-52?!(s<25&&e<-110):s>=7&&s<=22&&e>=-95&&e<=-60?!0:s>-55&&s<12&&e>-82&&e<-34?!(s<-35&&e<-76):s>35&&s<71&&e>-10&&e<45?!0:s>-35&&s<37&&e>-18&&e<51?!(s<4&&e<8):s>8&&s<74&&e>=45&&e<145||s>-11&&s<=18&&e>=95&&e<=141||s>-44&&s<-11&&e>113&&e<154||s>-47&&s<-34&&e>166&&e<179||s>60&&s<83&&e>-73&&e<-18||s>30&&s<45&&e>129&&e<146||s>50&&s<59&&e>-11&&e<2}function sT({vpnStatus:s,locations:e=[],selectedLocationObj:t,realIpInfo:r,cameraMode:a="globe",theme:l="dark",onSelectLocation:c,onRequestConnection:d}){const h=Ye.useRef(null),[p,v]=Ye.useState(null),x=Ye.useRef({vpnState:(s==null?void 0:s.state)||"Disconnected",selectedLocationObj:t,realIpInfo:r,cameraMode:a,theme:l,locations:e,onSelectLocation:c,onRequestConnection:d});Ye.useEffect(()=>{x.current={vpnState:(s==null?void 0:s.state)||"Disconnected",selectedLocationObj:t,realIpInfo:r,cameraMode:a,theme:l,locations:e,onSelectLocation:c,onRequestConnection:d}},[s==null?void 0:s.state,t,r,a,l,e,c,d]);const g=Ye.useRef({globeGroup:null,coreMaterial:null,atmosphereMaterial:null,shieldCageMaterial:null,shieldRingMaterials:[],tunnelLine:null,tunnelGlowLine:null,tunnelPacketsGeo:null,tunnelPacketsMat:null,tunnelCurve:null,targetBeaconGroup:null,targetRingMat:null,targetPillarMat:null,originBeaconGroup:null,originRingMat:null,targetRotationY:0,targetRotationX:.25,userInteracting:!1});return Ye.useEffect(()=>{var J,ge,q,ee;const y=g.current;if(!y.globeGroup)return;const E=((J=r==null?void 0:r.coordinates)==null?void 0:J.lat)??23.8103,A=((ge=r==null?void 0:r.coordinates)==null?void 0:ge.lng)??90.4125,S=((q=t==null?void 0:t.coordinates)==null?void 0:q.lat)??40.7128,_=((ee=t==null?void 0:t.coordinates)==null?void 0:ee.lng)??-74.006,P=Sr(E,A,un+.012),F=Sr(S,_,un+.012);y.originBeaconGroup&&(y.originBeaconGroup.position.copy(P),y.originBeaconGroup.lookAt(P.clone().multiplyScalar(2))),y.targetBeaconGroup&&(y.targetBeaconGroup.position.copy(F),y.targetBeaconGroup.lookAt(F.clone().multiplyScalar(2)));const b=P.distanceTo(F),I=P.clone().add(F).multiplyScalar(.5);I.length()<.001?I.set(0,1,0):I.normalize();const U=un+.22+b*.36,w=I.multiplyScalar(U),N=P.clone().lerp(w,.55).normalize().multiplyScalar(un+.14+b*.24),k=F.clone().lerp(w,.55).normalize().multiplyScalar(un+.14+b*.24),G=new Qg(P,N,k,F);y.tunnelCurve=G;const W=G.getPoints(72);y.tunnelLine&&y.tunnelLine.geometry.setFromPoints(W),y.tunnelGlowLine&&y.tunnelGlowLine.geometry.setFromPoints(W);const K=(_+180)*(Math.PI/180),z=S*(Math.PI/180);y.targetRotationY=-K+Math.PI*.5,y.targetRotationX=Math.max(-.55,Math.min(.65,z*.55))},[t,r]),Ye.useEffect(()=>{var et,it;const y=h.current;if(!y)return;const E={geometries:[],materials:[],textures:[]},A=we=>(E.geometries.push(we),we),S=we=>(E.materials.push(we),we),_=new hS;_.fog=new Sh(396056,.065);const P=y.clientWidth||800,F=y.clientHeight||600,b=new wi(48,P/F,.1,100);b.position.set(0,.45,4.15),b.lookAt(0,0,0);const I=new HA({antialias:!0,alpha:!0,powerPreference:"high-performance"});I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.setSize(P,F),It.enabled=!0,I.outputColorSpace=hi,I.toneMapping=ch,I.toneMappingExposure=1.12,I.setClearColor(0,0),I.domElement.setAttribute("role","img"),I.domElement.setAttribute("aria-label","Interactive 3D Garuda Infinity Global Network Globe and Cyber Shield. Drag to rotate, scroll to zoom, or click a country node to connect."),I.domElement.style.display="block",I.domElement.style.width="100%",I.domElement.style.height="100%";const L=!!(typeof window<"u"&&(window.GarudaAndroidBridge||window.GarudaVpnBridge||window.location&&window.location.hostname==="appassets.garudainfinity.local"||window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.includes("GarudaInfinityAndroid")));L&&(I.domElement.style.pointerEvents="none",I.domElement.style.touchAction="none",y.style.pointerEvents="none",y.style.touchAction="none"),y.innerHTML="",y.appendChild(I.domElement);const U=new XA(b,I.domElement);U.enableDamping=!0,U.dampingFactor=.06,U.enablePan=!1,U.minDistance=2.45,U.maxDistance=6.2,U.rotateSpeed=.65,U.zoomSpeed=.85,U.touches={ONE:null,TWO:null},(L||P<=900)&&(b.position.set(0,.32,3.85),U.target.set(0,-.48,0),b.lookAt(0,-.48,0)),L&&(U.enabled=!1,U.enableRotate=!1,U.enableZoom=!1);const w=()=>{L||(g.current.userInteracting=!0)},N=()=>{L||setTimeout(()=>{g.current.userInteracting=!1},2200)};U.addEventListener("start",w),U.addEventListener("end",N);const k=new GS(9684477,.75);_.add(k);const G=new s0(14742270,1.65);G.position.set(5,6,6),_.add(G);const W=new s0(3003583,1.15);W.position.set(-6,-3,-4),_.add(W);const K=950,z=A(new ln),J=new Float32Array(K*3),ge=new Float32Array(K*3);for(let we=0;we<K;we++){const je=7+Math.random()*14,be=Math.random()*Math.PI*2,nt=Math.acos(2*Math.random()-1);J[we*3]=je*Math.sin(nt)*Math.cos(be),J[we*3+1]=je*Math.sin(nt)*Math.sin(be),J[we*3+2]=je*Math.cos(nt);const Et=Math.random();ge[we*3]=Et>.5?.35:.25,ge[we*3+1]=Et>.5?.65:.85,ge[we*3+2]=.98}z.setAttribute("position",new Gn(J,3)),z.setAttribute("color",new Gn(ge,3));const q=S(new xc({size:.036,vertexColors:!0,transparent:!0,opacity:.55,depthWrite:!1})),ee=new Yd(z,q);_.add(ee);const H=new ns;_.add(H),g.current.globeGroup=H;const j=A(new Aa(un*.986,48,48)),D=S(new FS({color:463398,emissive:597050,emissiveIntensity:.45,roughness:.62,metalness:.28})),le=new Sn(j,D);H.add(le),g.current.coreMaterial=D;const Le=A(new Aa(un*1.075,36,36)),Ke=S(new Qi({color:3900150,transparent:!0,opacity:.11,side:$n,blending:ws,depthWrite:!1})),$e=new Sn(Le,Ke);H.add($e),g.current.atmosphereMaterial=Ke;const Ae=[];for(let we=-60;we<=60;we+=30)for(let be=0;be<64;be++){const nt=be/64*360-180,Et=(be+1)/64*360-180,ot=Sr(we,nt,un*.994),ct=Sr(we,Et,un*.994);Ae.push(ot.x,ot.y,ot.z,ct.x,ct.y,ct.z)}for(let we=-180;we<180;we+=30)for(let be=0;be<48;be++){const nt=be/48*180-90,Et=(be+1)/48*180-90,ot=Sr(nt,we,un*.994),ct=Sr(Et,we,un*.994);Ae.push(ot.x,ot.y,ot.z,ct.x,ct.y,ct.z)}const re=A(new ln);re.setAttribute("position",new Gn(new Float32Array(Ae),3));const ne=S(new _c({color:3718648,transparent:!0,opacity:.11})),Oe=new wS(re,ne);H.add(Oe);const Me=2500,Be=[],yt=[],Dt=(1+Math.sqrt(5))/2;for(let we=0;we<Me;we++){const je=1-we/(Me-1)*2,be=Math.sqrt(1-je*je),nt=2*Math.PI*we/Dt,Et=Math.cos(nt)*be,ot=Math.sin(nt)*be,ct=Math.asin(je)*(180/Math.PI),Ze=(Math.atan2(ot,-Et)*(180/Math.PI)-180+540)%360-180,Yt=rT(ct,Ze);if(Yt||we%5===0){const At=un*(Yt?1.002:.996);Be.push(Et*At,je*At,ot*At),Yt?yt.push(.32,.72,.98):yt.push(.12,.26,.48)}}const _t=A(new ln);_t.setAttribute("position",new Gn(new Float32Array(Be),3)),_t.setAttribute("color",new Gn(new Float32Array(yt),3));const Mt=S(new xc({size:.024,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})),Ut=new Yd(_t,Mt);H.add(Ut);const mt=x.current.locations||[],Gt=Math.max(1,mt.length),$t=A(new Aa(.024,10,10)),Vt=S(new Qi({color:6333946,transparent:!0,opacity:.92})),st=new MS($t,Vt,Gt),Nt=new Wt,$=new St;mt.forEach((we,je)=>{var ot,ct;const be=((ot=we.coordinates)==null?void 0:ot.lat)??0,nt=((ct=we.coordinates)==null?void 0:ct.lng)??0,Et=Sr(be,nt,un+.014);Nt.makeTranslation(Et.x,Et.y,Et.z),st.setMatrixAt(je,Nt),$.setHex(we.hasStreaming?3718648:8490232),st.setColorAt(je,$)}),st.instanceMatrix.needsUpdate=!0,st.instanceColor&&(st.instanceColor.needsUpdate=!0),H.add(st);const kt=new ns,Pt=A(new Ic(.032,.062,24)),O=S(new Qi({color:16007006,side:ki,transparent:!0,opacity:.9})),M=new Sn(Pt,O);kt.add(M);const ie=A(new Aa(.028,12,12)),ue=S(new Qi({color:16622767})),ye=new Sn(ie,ue);kt.add(ye),H.add(kt),g.current.originBeaconGroup=kt,g.current.originRingMat=O;const Ne=new ns,pe=A(new Ic(.04,.088,28)),oe=S(new Qi({color:3900150,side:ki,transparent:!0,opacity:.95})),_e=new Sn(pe,oe);Ne.add(_e);const se=A(new Eh(.008,.022,.24,12));se.rotateX(Math.PI/2),se.translate(0,0,.12);const Ve=S(new Qi({color:3462041,transparent:!0,opacity:.85})),te=new Sn(se,Ve);Ne.add(te),H.add(Ne),g.current.targetBeaconGroup=Ne,g.current.targetRingMat=oe,g.current.targetPillarMat=Ve;const fe=A(new ln),Te=S(new _c({color:3718648,transparent:!0,opacity:.95})),Re=new Kf(fe,Te);H.add(Re),g.current.tunnelLine=Re;const Ce=A(new ln),V=S(new _c({color:1096065,transparent:!0,opacity:.45,blending:ws})),De=new Kf(Ce,V);De.scale.setScalar(1.006),H.add(De),g.current.tunnelGlowLine=De;const xe=28,Pe=new Float32Array(xe*3),Ee=A(new ln);Ee.setAttribute("position",new Gn(Pe,3));const Se=S(new xc({color:7268279,size:.055,transparent:!0,opacity:.95,blending:ws,depthWrite:!1})),Ge=new Yd(Ee,Se);H.add(Ge),g.current.tunnelPacketsGeo=Ee,g.current.tunnelPacketsMat=Se;const Ue=new ns;_.add(Ue);const vt=A(new Ah(un*1.24,2)),pt=S(new Qi({color:3900150,wireframe:!0,transparent:!0,opacity:.08,blending:ws})),Bt=new Sn(vt,pt);Ue.add(Bt),g.current.shieldCageMaterial=pt;const gn=[{radius:un*1.32,tube:.006,rx:1.15,ry:.3,color:3900150},{radius:un*1.44,tube:.005,rx:-.85,ry:.75,color:3003583},{radius:un*1.56,tube:.004,rx:.42,ry:-1.1,color:6333946}],mi=[],Hi=[];gn.forEach(we=>{const je=A(new Th(we.radius,we.tube,12,96)),be=S(new Qi({color:we.color,transparent:!0,opacity:.28,blending:ws})),nt=new Sn(je,be);nt.rotation.set(we.rx,we.ry,0),Ue.add(nt),mi.push(nt),Hi.push(be)}),g.current.shieldRingMaterials=Hi;const Wi=((et=x.current.realIpInfo)==null?void 0:et.coordinates)||{lat:23.8103,lng:90.4125},Ti=((it=x.current.selectedLocationObj)==null?void 0:it.coordinates)||{lat:40.7128,lng:-74.006},ar=Sr(Wi.lat,Wi.lng,un+.012),Xi=Sr(Ti.lat,Ti.lng,un+.012);kt.position.copy(ar),kt.lookAt(ar.clone().multiplyScalar(2)),Ne.position.copy(Xi),Ne.lookAt(Xi.clone().multiplyScalar(2));const Fs=ar.distanceTo(Xi),wn=ar.clone().add(Xi).multiplyScalar(.5).normalize().multiplyScalar(un+.22+Fs*.36),or=new Qg(ar,wn,wn,Xi);g.current.tunnelCurve=or;const Cr=or.getPoints(72);Re.geometry.setFromPoints(Cr),De.geometry.setFromPoints(Cr);const Os=(Ti.lng+180)*(Math.PI/180);H.rotation.y=-Os+Math.PI*.5,g.current.targetRotationY=H.rotation.y;const ji=new WS,qn=new ht(-999,-999);let bi={x:0,y:0},Hn=-1;const ks=(we,je)=>{const be=I.domElement.getBoundingClientRect();!be.width||!be.height||(qn.x=(we-be.left)/be.width*2-1,qn.y=-((je-be.top)/be.height)*2+1)},Bs=we=>{L||we.pointerType==="touch"||ks(we.clientX,we.clientY)},Zt=()=>{qn.set(-999,-999),Hn=-1,v(null),L||(I.domElement.style.cursor="grab")},zs=we=>{L||we.pointerType==="touch"||(bi={x:we.clientX,y:we.clientY})},Rr=we=>{var nt,Et,ot;if(L||we.pointerType==="touch")return;const je=Math.abs(we.clientX-bi.x),be=Math.abs(we.clientY-bi.y);if(je<6&&be<6&&Hn>=0){const ct=(nt=x.current.locations)==null?void 0:nt[Hn];ct&&((ot=(Et=x.current).onSelectLocation)==null||ot.call(Et,ct.iso))}},Pr=()=>{var we,je,be,nt,Et;if(!L&&Hn>=0){const ot=(we=x.current.locations)==null?void 0:we[Hn];ot&&((be=(je=x.current).onSelectLocation)==null||be.call(je,ot.iso),(Et=(nt=x.current).onRequestConnection)==null||Et.call(nt,ot.iso))}};L||(I.domElement.addEventListener("pointermove",Bs),I.domElement.addEventListener("pointerleave",Zt),I.domElement.addEventListener("pointerdown",zs),I.domElement.addEventListener("pointerup",Rr),I.domElement.addEventListener("dblclick",Pr));const R=window.matchMedia("(prefers-reduced-motion: reduce)");let Y=R.matches;const me=we=>{Y=we.matches};R.addEventListener("change",me);const ce=new ResizeObserver(we=>{for(const je of we){const{width:be,height:nt}=je.contentRect;be>0&&nt>0&&(b.aspect=be/nt,b.updateProjectionMatrix(),I.setSize(be,nt))}});ce.observe(y);let ae=performance.now(),We=0;function He(){var vn;const we=performance.now(),je=Math.min(.1,Math.max(.001,(we-ae)/1e3));ae=we,We+=je;const{vpnState:be,cameraMode:nt,theme:Et}=x.current,ot=be==="Connected",ct=be==="Connecting"||be==="Reconnecting",nn=nt==="shield",Ze=nt==="orbit",Yt=ot?1096065:ct?3718648:3900150;Ke.color.lerp(new St(Yt),.06),Ke.opacity=ot?.16:.11,Et==="light"?(D.color.lerp(new St(992583),.08),D.emissive.lerp(new St(1521512),.08)):(D.color.lerp(new St(397346),.08),D.emissive.lerp(new St(662586),.08)),Te.color.lerp(new St(ot?3462041:3718648),.08),oe.color.lerp(new St(ot?1096065:3900150),.08),Ve.color.lerp(new St(ot?3462041:6333946),.08),pt.color.lerp(new St(Yt),.06);const At=nn?.24:ot?.12:.05;if(pt.opacity+=(At-pt.opacity)*.08,Hi.forEach((ut,fn)=>{const Dn=ot?fn%2===0?1096065:3462041:fn%2===0?3900150:3718648;ut.color.lerp(new St(Dn),.06);const bt=nn?.58:ot?.34:.18;ut.opacity+=(bt-ut.opacity)*.08}),!Y){const ut=ct?2.4:ot?.45:.22;Bt.rotation.y+=je*ut*.45,Bt.rotation.x+=je*ut*.2,mi[0].rotation.z+=je*ut*.9,mi[1].rotation.x-=je*ut*.7,mi[2].rotation.y+=je*ut*.55,ee.rotation.y+=je*.018;const fn=1+Math.sin(We*(ct?8:3.5))*.24;_e.scale.setScalar(fn),M.scale.setScalar(1+Math.cos(We*3)*.18);const Dn=g.current.tunnelCurve;if(Dn){const bt=Ee.attributes.position,Ht=bt.array,ai=ot?.42:ct?.75:.18;for(let Lt=0;Lt<xe;Lt++){const Kn=(We*ai+Lt/xe)%1,Wn=Dn.getPointAt(Kn);Ht[Lt*3]=Wn.x,Ht[Lt*3+1]=Wn.y,Ht[Lt*3+2]=Wn.z}bt.needsUpdate=!0,Se.color.setHex(ot?7268279:ct?16638023:6333946),Se.size=ot?.062:.048}if(!g.current.userInteracting)if(Ze||ct)H.rotation.y+=je*(ct?.85:.28),g.current.targetRotationY=H.rotation.y;else{const bt=g.current.targetRotationY-H.rotation.y;H.rotation.y+=bt*Math.min(1,je*3.2);const Ht=g.current.targetRotationX-H.rotation.x;H.rotation.x+=Ht*Math.min(1,je*3.2)}}if(qn.x>=-1&&qn.x<=1&&qn.y>=-1&&qn.y<=1){ji.setFromCamera(qn,b);const ut=ji.intersectObject(st,!1);if(ut.length>0&&ut[0].instanceId!==void 0){const fn=ut[0].instanceId;if(Hn!==fn){Hn=fn;const Dn=(vn=x.current.locations)==null?void 0:vn[fn];v(Dn||null)}I.domElement.style.cursor="pointer"}else Hn!==-1&&(Hn=-1,v(null)),I.domElement.style.cursor="grab"}U.update(),I.render(_,b)}I.setAnimationLoop(He);const Xe=()=>{document.hidden?I.setAnimationLoop(null):(ae=performance.now(),I.setAnimationLoop(He))};return document.addEventListener("visibilitychange",Xe),()=>{I.setAnimationLoop(null),document.removeEventListener("visibilitychange",Xe),R.removeEventListener("change",me),ce.disconnect(),U.removeEventListener("start",w),U.removeEventListener("end",N),U.dispose(),I.domElement.removeEventListener("pointermove",Bs),I.domElement.removeEventListener("pointerleave",Zt),I.domElement.removeEventListener("pointerdown",zs),I.domElement.removeEventListener("pointerup",Rr),I.domElement.removeEventListener("dblclick",Pr),E.geometries.forEach(we=>we.dispose()),E.materials.forEach(we=>we.dispose()),E.textures.forEach(we=>we.dispose()),I.dispose()}},[]),C.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden"},children:[C.jsx("div",{ref:h,style:{width:"100%",height:"100%",position:"relative"}}),p&&C.jsxs("div",{style:{position:"absolute",top:86,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",display:"flex",alignItems:"center",gap:10,padding:"7px 14px",borderRadius:999,background:l==="light"?"rgba(255, 255, 255, 0.92)":"rgba(15, 23, 42, 0.88)",backdropFilter:"blur(12px)",border:l==="light"?"1px solid rgba(37, 99, 235, 0.25)":"1px solid rgba(56, 189, 248, 0.35)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.25)",color:l==="light"?"#0F172A":"#F8FAFC",fontSize:12,fontWeight:600,zIndex:15},children:[C.jsx("img",{src:Mc(p.iso),alt:p.name,style:{width:18,height:18,borderRadius:"50%",objectFit:"cover"}}),C.jsxs("span",{children:[p.name," (",p.city,")"]}),C.jsxs("span",{style:{fontSize:11,color:p.basePingMs<75?"#10B981":"#38BDF8",fontVariantNumeric:"tabular-nums"},children:[p.basePingMs," ms"]}),C.jsx("span",{style:{fontSize:10,opacity:.7},children:"• Click to select, double-click to connect"})]})]})}function U0(s){return!s||s<=0?"0.0 KB":s<1024*1024?`${(s/1024).toFixed(1)} KB`:`${(s/(1024*1024)).toFixed(2)} MB`}function F0(s){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><circle cx="18" cy="18" r="18" fill="url(#g)"/><text x="18" y="22" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="800" font-size="12">${String(s||"GL").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,2)||"GL"}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function aT({vpnStatus:s,realIpInfo:e,locations:t,allLocations:r,showExtendedCatalog:a,onToggleExtendedCatalog:l,selectedLocationIso:c,onSelectLocation:d,onRequestConnection:h,onConnectButtonClick:p,onRotateIp:v,isStreamingMode:x,onSetStreamingMode:g,connectionElapsedFormatted:y,lookingForBestServer:E,onRefreshLocations:A,serviceBridgeConnected:S,rxBytes:_=0,txBytes:P=0,onVerifyIp:F,ipVerificationResult:b,isVerifyingIp:I,activeCountryTimeInfo:L,cameraMode:U="globe",onChangeCameraMode:w,theme:N="dark"}){const[k,G]=Ye.useState(""),[W,K]=Ye.useState("ALL"),[z,J]=Ye.useState(!1),[ge,q]=Ye.useState(!1),ee=t,H=Ye.useMemo(()=>t.find(Ae=>Ae.iso===c)||t.find(Ae=>Ae.iso==="US")||t[0],[t,c]),j=Ye.useMemo(()=>{const Ae=k.trim().toLowerCase();return ee.filter(re=>{const ne=!!(re.streamingOptimized||re.hasStreaming);return x&&!ne||W!=="ALL"&&re.region!==W?!1:Ae?re.name.toLowerCase().includes(Ae)||re.iso.toLowerCase().includes(Ae)||re.city&&re.city.toLowerCase().includes(Ae)||re.region&&re.region.toLowerCase().includes(Ae):!0})},[ee,k,x,W]),D=s.state==="Connected",le=s.state==="Connecting"||s.state==="Disconnecting"||s.state==="Reconnecting",Le=Ye.useMemo(()=>{switch(s.state){case"Connected":return"Connected";case"Connecting":return E?"Looking for the best server...":"Connecting...";case"Disconnecting":return"Disconnecting...";case"Reconnecting":return"Reconnecting...";case"Disconnected":default:return s.error&&s.error!=="None"?"Please retry to connect":"Not connected"}},[s.state,s.error,E]),Ke=Ye.useMemo(()=>le?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-busy.svg":D?z?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-stop-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-stop-rest.svg":s.error&&s.error!=="None"?z?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-retry-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-retry-rest.svg":z?"/resources/Screens/S4_MainLayout/Main/assets/connect-button-start-hover.svg":"/resources/Screens/S4_MainLayout/Main/assets/connect-button-start-rest.svg",[le,D,s.error,z]),$e=Ye.useMemo(()=>ee.filter(Ae=>Ae.streamingOptimized||Ae.hasStreaming).length,[ee]);return C.jsxs("div",{className:"u-vpn-main-split",children:[C.jsxs("div",{className:"u-vpn-stage-pane",style:{flex:1,position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",overflow:"hidden",padding:"18px 22px 20px 22px"},children:[C.jsx(sT,{vpnStatus:s,locations:t,selectedLocationObj:H,realIpInfo:e,cameraMode:U,theme:N,onSelectLocation:d,onRequestConnection:h}),C.jsx("div",{className:"u-connect-console-wrap",style:{position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",margin:"auto auto 0 auto",width:"100%",maxWidth:460},children:C.jsxs("div",{className:"u-glass-card u-connect-console-card",style:{width:"100%",borderRadius:24,padding:"20px 24px 18px 24px",display:"flex",flexDirection:"column",alignItems:"center",position:"relative"},children:[C.jsxs("div",{className:"u-connect-hero-ring-wrap",style:{position:"relative",width:128,height:128,display:"flex",alignItems:"center",justifyContent:"center"},children:[C.jsx("img",{src:"/resources/Screens/S4_MainLayout/Main/assets/connect-button-bg.svg",alt:"","aria-hidden":"true",className:`u-connect-hero-ring-svg ${le?"uv-spin-fast":"uv-pulse-halo"}`,style:{position:"absolute",width:128,height:128,pointerEvents:"none",filter:D?"drop-shadow(0 6px 22px rgba(16, 185, 129, 0.55)) hue-rotate(310deg)":"drop-shadow(0 6px 20px rgba(59, 130, 246, 0.45))"}}),C.jsx("button",{onClick:p,onMouseEnter:()=>J(!0),onMouseLeave:()=>J(!1),className:"u-connect-hero-core-btn","aria-label":D?"Disconnect VPN tunnel":`Connect VPN to ${(H==null?void 0:H.name)||"selected country"}`,style:{width:78,height:78,borderRadius:"50%",backgroundColor:"#FFFFFF",border:D?"2px solid rgba(16, 185, 129, 0.55)":"2px solid rgba(59, 130, 246, 0.35)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",zIndex:4,boxShadow:z?D?"0 0 28px rgba(16, 185, 129, 0.65)":"0 0 28px rgba(59, 130, 246, 0.6)":"0 6px 16px rgba(0, 0, 0, 0.28)",transition:"box-shadow 150ms ease, border-color 150ms ease"},children:C.jsx("img",{src:Ke,alt:"","aria-hidden":"true",className:`u-connect-hero-core-icon ${le?"uv-spin-slow":""}`,style:{width:le?34:30,height:le?34:30}})})]}),C.jsxs("div",{className:"u-connect-status-row",style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",gap:9},children:[!le&&C.jsx("span",{"aria-hidden":"true",className:"u-connect-status-dot",style:{width:11,height:11,borderRadius:"50%",backgroundColor:D?"#10B981":"#F43F5E",boxShadow:D?"0 0 12px rgba(16, 185, 129, 0.85)":"0 0 10px rgba(244, 63, 94, 0.65)",display:"inline-block"}}),C.jsx("span",{className:"u-connect-status-title",style:{fontSize:E?18:21,fontWeight:700,color:"var(--uv-text-heading)",letterSpacing:"-0.3px"},children:Le}),C.jsx("span",{className:"u-connect-status-pill",style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,backgroundColor:D?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.16)",color:D?"#34D399":"#FB7185",border:D?"1px solid rgba(16, 185, 129, 0.35)":"1px solid rgba(244, 63, 94, 0.3)"},children:D?"TUNNEL PROTECTED":"UNPROTECTED"})]}),C.jsxs("div",{className:"u-connect-telemetry-row",style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"center",gap:16,fontSize:13,color:"var(--uv-text-secondary)",fontVariantNumeric:"tabular-nums"},children:[C.jsx("span",{className:"u-connect-timer-text",style:{fontSize:16,fontWeight:700,color:D?"#34D399":"var(--uv-text-muted)",letterSpacing:"0.8px"},children:y}),C.jsx("span",{children:"•"}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},title:"Encrypted Download Traffic",children:[C.jsx(b_,{size:13,color:"#38BDF8","aria-hidden":"true"}),C.jsx("span",{children:U0(_)})]}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},title:"Encrypted Upload Traffic",children:[C.jsx(C_,{size:13,color:"#10B981","aria-hidden":"true"}),C.jsx("span",{children:U0(P)})]})]}),H&&C.jsxs("button",{onClick:p,className:"u-connect-target-btn","aria-label":`Target location ${H.name}, ${H.city}. Click to ${D?"disconnect":"connect"}`,style:{marginTop:14,width:"100%",height:56,padding:"0 18px",borderRadius:16,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,cursor:"pointer",color:"var(--uv-text-heading)",transition:"border-color 150ms ease, background-color 150ms ease"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[C.jsx("img",{src:Mc(H.iso),alt:H.name,className:"u-connect-target-flag",style:{width:34,height:34,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--uv-border-strong)",flexShrink:0},onError:Ae=>{Ae.currentTarget.onerror=null,Ae.currentTarget.src=F0(H.iso)}}),C.jsxs("div",{style:{display:"flex",flexDirection:"column",textAlign:"left",minWidth:0},children:[C.jsx("span",{className:"u-connect-target-name",style:{fontSize:15,fontWeight:700,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:H.name}),C.jsx("span",{className:"u-connect-target-sub",style:{fontSize:11,color:"var(--uv-text-secondary)"},children:D?`${s.statusCity||s.statusCountryName||""} • ${s.statusIp}`:H.city})]})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[(H.streamingOptimized||H.hasStreaming)&&C.jsxs("span",{style:{fontSize:10,fontWeight:700,padding:"3px 7px",borderRadius:6,backgroundColor:"rgba(59, 130, 246, 0.18)",color:"#60A5FA",display:"inline-flex",alignItems:"center",gap:4},children:[C.jsx(dg,{size:11,"aria-hidden":"true"}),C.jsx("span",{children:"4K"})]}),C.jsxs("span",{style:{fontSize:12,fontWeight:700,color:(H.ping||H.basePingMs||48)<75?"#10B981":"#38BDF8",fontVariantNumeric:"tabular-nums"},children:[H.ping||H.basePingMs||48," ms"]})]})]}),C.jsxs("div",{className:"u-console-footer-row",style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",fontSize:11,color:"var(--uv-text-secondary)",padding:"0 4px",gap:8,flexWrap:"wrap"},children:[C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[C.jsx("span",{"aria-hidden":"true",style:{width:7,height:7,borderRadius:"50%",backgroundColor:S?"#10B981":"#F59E0B"}}),C.jsx("span",{children:s.tunnelMode&&s.tunnelMode!=="Disconnected"?`Tunnel: ${s.tunnelMode}`:"Garuda Infinity Engine Ready"})]}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[C.jsxs("span",{children:["Protocol:"," ",C.jsx("strong",{style:{color:"var(--uv-text-body)"},children:x?"OpenVPN TCP (Streaming)":s.effectiveProtocolLabel||"Garuda LinkX"})]}),D&&v&&C.jsx("button",{onClick:v,title:"Rotate Exit IP in current country",style:{padding:"2px 7px",borderRadius:6,border:"1px solid rgba(59, 130, 246, 0.42)",background:"rgba(59, 130, 246, 0.16)",color:"#60A5FA",fontSize:10,fontWeight:700,cursor:"pointer"},children:"Rotate IP"})]})]})]})})]}),C.jsxs("aside",{className:"u-vpn-servers-aside",style:{display:"flex",flexDirection:"column",backgroundColor:"var(--uv-surface-panel)",borderLeft:"1px solid var(--uv-border)",flexShrink:0,zIndex:20},children:[C.jsxs("div",{style:{padding:"20px 18px 12px 18px",borderBottom:"1px solid var(--uv-divider)"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[C.jsxs("div",{children:[C.jsx("h2",{style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:"All Free & Premium Servers"}),C.jsx("span",{style:{fontSize:11,color:"var(--uv-text-secondary)"},children:"Click any country to switch your IP & rotate the 3D tunnel"})]}),C.jsx("span",{title:"82 official high-speed VPN server countries",style:{fontSize:11,fontWeight:600,padding:"5px 10px",borderRadius:10,border:"1px solid var(--uv-border-strong)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",userSelect:"none"},children:`${t.length} Official`})]}),C.jsxs("div",{style:{height:38,display:"flex",alignItems:"center",gap:8,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",borderRadius:10,padding:"0 12px"},children:[C.jsx(lg,{size:15,color:"var(--uv-text-secondary)","aria-hidden":"true"}),C.jsx("input",{type:"text",value:k,onChange:Ae=>G(Ae.target.value),placeholder:"Search country, city, or ISO code...","aria-label":"Search VPN server countries",style:{flex:1,border:"none",background:"transparent",outline:"none",fontSize:13,color:"var(--uv-text-heading)"}}),k&&C.jsx("button",{onClick:()=>G(""),"aria-label":"Clear search query",style:{background:"transparent",border:"none",color:"var(--uv-text-secondary)",cursor:"pointer",display:"flex",alignItems:"center"},children:C.jsx(sf,{size:14})})]}),C.jsxs("div",{style:{marginTop:10,display:"flex",backgroundColor:"var(--uv-surface-card)",borderRadius:10,padding:3,border:"1px solid var(--uv-border)",gap:4},children:[C.jsxs("button",{onClick:()=>g(!1),style:{flex:1,height:32,borderRadius:7,border:"none",backgroundColor:x?"transparent":"var(--uv-primary)",color:x?"var(--uv-text-secondary)":"#FFFFFF",fontWeight:600,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[C.jsx(z_,{size:13,"aria-hidden":"true"}),C.jsxs("span",{children:["All Servers (",ee.length,")"]})]}),C.jsxs("button",{onClick:()=>g(!0),style:{flex:1,height:32,borderRadius:7,border:"none",backgroundColor:x?"var(--uv-primary)":"transparent",color:x?"#FFFFFF":"var(--uv-text-secondary)",fontWeight:600,fontSize:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[C.jsx(dg,{size:13,"aria-hidden":"true"}),C.jsxs("span",{children:["Streaming & 4K (",$e,")"]})]})]}),C.jsx("div",{style:{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"},children:[{id:"ALL",label:"All Regions"},{id:"America",label:"Americas"},{id:"Europe, Middle East & Africa",label:"Europe & MEA"},{id:"Asia & Oceania",label:"Asia & Oceania"}].map(Ae=>{const re=W===Ae.id;return C.jsx("button",{onClick:()=>K(Ae.id),style:{fontSize:11,fontWeight:re?600:500,padding:"4px 10px",borderRadius:999,border:"1px solid",borderColor:re?"var(--uv-primary)":"var(--uv-border)",backgroundColor:re?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:re?"#60A5FA":"var(--uv-text-secondary)",cursor:"pointer"},children:Ae.label},Ae.id)})})]}),C.jsx("div",{className:"uv-scrollbar",style:{flex:1,overflowY:"auto",padding:"8px 12px 18px 12px"},children:j.length===0?C.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"},children:[C.jsx(lg,{size:42,color:"var(--uv-text-muted)",style:{marginBottom:12}}),C.jsx("div",{style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)",marginBottom:4},children:"No matching servers"}),C.jsxs("div",{style:{fontSize:12,color:"var(--uv-text-secondary)",lineHeight:1.45,marginBottom:14},children:["No countries matched “",k,"”. Try searching another country name, city, or ISO code."]}),C.jsx("button",{className:"u-btn u-btn-secondary",style:{height:32,fontSize:12},onClick:()=>{G(""),K("ALL"),A==null||A()},children:"Reset Filters"})]}):j.map(Ae=>{const re=Ae.iso===c,ne=D&&(s.uiLockedLocation===Ae.iso||s.statusCountryIso2===Ae.iso),Oe=!!(Ae.streamingOptimized||Ae.hasStreaming),Me=Ae.ping||Ae.basePingMs||52;return C.jsxs("div",{className:`u-location-row ${ne?"connected":re?"selected":""}`,onClick:()=>{d(Ae.iso),h(Ae.iso)},children:[C.jsx("div",{style:{width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:11,flexShrink:0},children:C.jsx("img",{src:Mc(Ae.iso),alt:Ae.name,loading:"lazy",style:{width:28,height:28,borderRadius:"50%",objectFit:"cover",border:"1px solid var(--uv-border-strong)"},onError:Be=>{Be.currentTarget.onerror=null,Be.currentTarget.src=F0(Ae.iso)}})}),C.jsxs("div",{style:{flex:1,minWidth:0},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[C.jsx("span",{style:{fontSize:14,fontWeight:re?700:600,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Ae.name}),C.jsx("span",{style:{fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:4,backgroundColor:Oe?"rgba(59, 130, 246, 0.2)":"rgba(148, 163, 184, 0.14)",color:Oe?"#60A5FA":"var(--uv-text-secondary)"},children:Oe?"PREMIUM • 4K":"FREE"})]}),C.jsxs("div",{style:{fontSize:11,color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",gap:6,marginTop:2,fontVariantNumeric:"tabular-nums"},children:[C.jsx("span",{children:Ae.city}),C.jsx("span",{children:"•"}),C.jsxs("span",{children:[Ae.serverCount||8," nodes"]}),C.jsx("span",{children:"•"}),C.jsxs("span",{style:{color:Me<75?"#10B981":"#38BDF8",fontWeight:600},children:[Me," ms"]})]})]}),re?C.jsxs("div",{style:{padding:"0 10px",height:26,borderRadius:999,backgroundColor:ne?"rgba(16, 185, 129, 0.22)":"rgba(59, 130, 246, 0.22)",color:ne?"#34D399":"#60A5FA",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0,gap:4},children:[C.jsx(R_,{size:12,"aria-hidden":"true"}),C.jsx("span",{children:ne?"Connected":"Selected"})]}):C.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#60A5FA",padding:"4px 8px",borderRadius:6,backgroundColor:"rgba(59, 130, 246, 0.1)"},children:"Connect"})]},Ae.iso)})})]})]})}const oT=[{label:"Auto (Recommended)",value:"Auto"},{label:"WireGuard (LinkX)",value:"WireGuard"},{label:"OpenVPN (UDP)",value:"OpenVPN_UDP"},{label:"OpenVPN (TCP)",value:"OpenVPN_TCP"}];function lT({vpnProtocol:s="Auto",onChangeProtocol:e=()=>{},appAutoStart:t=!1,onToggleAppAutoStart:r=()=>{},dynamicIpRotation:a=!0,onToggleDynamicIp:l=()=>{},theme:c="dark",onToggleTheme:d=()=>{},cameraMode:h="globe",onChangeCameraMode:p=()=>{},serviceBridgeConnected:v=!0,isAndroidApp:x=!1,updateInfo:g={},isCheckingUpdate:y=!1,onCheckForUpdate:E=()=>{}}){const A=!!x,S=A?Mr:Eo,_=A?wo:X_,[P,F]=Ye.useState(null),[b,I]=Ye.useState(()=>{var z,J;try{return typeof window<"u"&&!!((J=(z=window.location)==null?void 0:z.search)!=null&&J.includes("autoUpdate=1"))}catch{return!1}}),[L,U]=Ye.useState(""),[w,N]=Ye.useState(!1),k=async()=>{N(!0),U("Opening unpacked extension folder selector...");try{const z=await J0({allowPicker:!0,onProgress:J=>U(J)});z&&z.ok&&U(`Updated ${z.writtenCount||""} files! Reloading extension...`)}catch(z){U((z==null?void 0:z.message)||"Folder selection cancelled — downloading ZIP fallback...")}finally{N(!1)}},G=!!(g!=null&&g.updateAvailable),W=(g==null?void 0:g.latestAppVersion)||S,K=y?"Checking for updates...":G?`New V${W} available`:`OTA Sync Active • Up to date (${_})`;return C.jsxs("section",{"aria-label":A?"App Settings":"Extension Settings",className:"uv-scrollbar",style:{flex:1,height:"100%",overflowY:"auto",padding:A?"18px 14px 36px 14px":"24px 20px 44px 20px",display:"flex",flexDirection:"column",alignItems:"center"},children:[C.jsxs("div",{style:{width:"100%",maxWidth:540},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14,gap:10},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[C.jsx("h1",{style:{fontSize:20,fontWeight:800,color:"var(--uv-text-heading)",letterSpacing:"-0.02em"},children:A?"Settings":"Extension Settings"}),C.jsx("span",{style:{fontSize:10.5,fontWeight:800,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(59, 130, 246, 0.18)",border:"1px solid rgba(59, 130, 246, 0.42)",color:"#60A5FA",whiteSpace:"nowrap"},children:_})]}),C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:10.5,fontWeight:700,padding:"4px 10px",borderRadius:999,backgroundColor:"rgba(16, 185, 129, 0.16)",color:"#34D399",border:"1px solid rgba(16, 185, 129, 0.36)",whiteSpace:"nowrap"},children:[A?C.jsx(k_,{size:12,color:"#34D399","aria-hidden":"true"}):C.jsx(N_,{size:12,color:"#34D399","aria-hidden":"true"}),C.jsx("span",{children:A?"System VPN Ready":v?"Extension Active":"Standalone Mode"})]})]}),!A&&(b||L)&&C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px 16px",marginBottom:18,border:"1px solid rgba(56, 189, 248, 0.48)",background:"linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(37, 99, 235, 0.12))"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:6},children:[C.jsx("div",{style:{fontSize:13.5,fontWeight:800,color:"#38BDF8"},children:"1-Click Automatic Extension Folder Updater"}),C.jsx("button",{onClick:()=>I(!1),className:"u-btn u-btn-secondary",style:{height:24,padding:"0 8px",fontSize:11},children:"Hide"})]}),C.jsxs("p",{style:{fontSize:12,color:"var(--uv-text-body)",lineHeight:1.5,margin:"0 0 10px 0"},children:["Select your unpacked ",C.jsx("strong",{children:"extension"})," folder once. Garuda Infinity will automatically download the latest release, overwrite the files in-place, and reload the extension for you!"]}),L&&C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"#FBBF24",marginBottom:10},children:L}),C.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[C.jsx("button",{onClick:k,disabled:w,className:"u-btn u-btn-primary",style:{height:34,padding:"0 14px",fontSize:12,fontWeight:700},children:w?"Updating Extension...":"Select Extension Folder & Update Automatically"}),C.jsx("button",{onClick:()=>cf(g==null?void 0:g.extensionZipUrl),className:"u-btn u-btn-secondary",style:{height:34,padding:"0 12px",fontSize:12,fontWeight:600},children:"Download ZIP Instead"})]})]}),C.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:A?"Tunnel & Connection":"Extension Tunnel & Startup"}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"4px 16px",marginBottom:18},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"VPN Protocol"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:"LinkX WireGuard or OpenVPN"})]}),C.jsx("select",{"aria-label":"Select VPN Protocol",value:s,onChange:z=>e(z.target.value),style:{width:168,height:34,padding:"0 10px",borderRadius:9,backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border-strong)",color:"var(--uv-text-heading)",fontSize:12,fontWeight:600,cursor:"pointer",outline:"none",flexShrink:0},children:oT.map(z=>C.jsx("option",{value:z.value,style:{backgroundColor:c==="light"?"#FFFFFF":"#0F172A",color:c==="light"?"#0F172A":"#F8FAFC"},children:z.label},z.value))})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:A?"Auto-Connect on Launch":"Auto-Connect on Startup"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:A?"Connect when app opens":"Connect when browser launches"})]}),C.jsx("button",{role:"switch","aria-checked":t,"aria-label":"Auto-Connect",onClick:r,className:`u-switch ${t?"u-switch-checked":""}`,style:{flexShrink:0},children:C.jsx("span",{className:"u-switch-thumb"})})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"Dynamic IP Rotation"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:a?"New exit IP on every connect":"Single static IP per country"})]}),C.jsx("button",{type:"button",onClick:l,"aria-pressed":a,title:"Click to toggle Dynamic IP Rotation (Active / Deactive)",style:{fontSize:10.5,fontWeight:800,padding:"4px 11px",borderRadius:999,backgroundColor:a?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.18)",color:a?"#34D399":"#FB7185",border:a?"1px solid rgba(16, 185, 129, 0.38)":"1px solid rgba(244, 63, 94, 0.38)",whiteSpace:"nowrap",flexShrink:0,cursor:"pointer",userSelect:"none",transition:"all 150ms ease"},children:a?"ACTIVE":"DEACTIVE"})]})]}),C.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:"Appearance & 3D View"}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"4px 16px",marginBottom:18},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 0",borderBottom:"1px solid var(--uv-divider)",gap:12},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"Interface Theme"}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:c==="dark"?"Dark Cyber Glass":"Clean Light Mode"})]}),C.jsx("button",{onClick:d,className:"u-btn u-btn-secondary",style:{height:34,padding:"0 14px",fontSize:12.5,fontWeight:700,whiteSpace:"nowrap",flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6},children:c==="dark"?C.jsxs(C.Fragment,{children:[C.jsx(G0,{size:14,color:"#FBBF24","aria-hidden":"true"}),C.jsx("span",{children:"Switch Theme"})]}):C.jsxs(C.Fragment,{children:[C.jsx(z0,{size:14,color:"#3B82F6","aria-hidden":"true"}),C.jsx("span",{children:"Switch Theme"})]})})]}),C.jsxs("div",{style:{padding:"13px 0",display:"flex",flexDirection:"column",gap:10},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:"3D Camera View"}),C.jsx("span",{style:{fontSize:11.5,color:"var(--uv-text-secondary)"},children:"Default globe mode"})]}),C.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:6,backgroundColor:"var(--uv-surface-card)",padding:4,borderRadius:10,border:"1px solid var(--uv-border)"},children:[{id:"globe",label:"3D Globe"},{id:"shield",label:"3D Shield"},{id:"orbit",label:"Auto-Orbit"}].map(z=>{const J=h===z.id;return C.jsx("button",{onClick:()=>p(z.id),style:{height:32,padding:"0 8px",borderRadius:7,border:J?"1px solid var(--uv-primary)":"1px solid transparent",backgroundColor:J?"var(--uv-primary)":"transparent",color:J?"#FFFFFF":"var(--uv-text-body)",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap",textAlign:"center",transition:"background-color 150ms ease, color 150ms ease"},children:z.label},z.id)})})]})]}),C.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--uv-text-secondary)",marginBottom:8,paddingLeft:4},children:"About"}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:16,padding:"20px 18px",marginBottom:14},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,marginBottom:14},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:0},children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:38,height:38,flexShrink:0}}),C.jsxs("div",{style:{minWidth:0},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[C.jsx("span",{style:{fontSize:16,fontWeight:800,color:"var(--uv-text-heading)",whiteSpace:"nowrap"},children:"Garuda Infinity"}),C.jsx("span",{style:{fontSize:10.5,fontWeight:800,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(16, 185, 129, 0.18)",border:"1px solid rgba(16, 185, 129, 0.4)",color:"#34D399",whiteSpace:"nowrap"},children:_})]}),C.jsx("div",{style:{fontSize:11.5,color:"var(--uv-text-secondary)",marginTop:2},children:A?"Android Mobile VPN • Global 3D Gateway":"Standalone Browser VPN • Global 3D Gateway"})]})]}),C.jsx("span",{className:"quicksilver-gold-badge",title:"Lead Developer",children:C.jsx("span",{className:"quicksilver-gold-glow",children:"QUICKSILVER"})})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"14px 0",borderTop:"1px solid var(--uv-divider)",borderBottom:"1px solid var(--uv-divider)",marginBottom:14},children:[C.jsxs("div",{style:{minWidth:0},children:[C.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--uv-text-heading)"},children:A?"App Auto-Update":"Extension Auto-Update"}),C.jsx("div",{style:{fontSize:11.5,color:G?"#FBBF24":"var(--uv-text-secondary)",marginTop:2},children:K})]}),C.jsx("button",{onClick:E,disabled:y,className:G?"u-btn u-btn-primary":"u-btn u-btn-secondary",style:{height:34,padding:"0 14px",fontSize:12,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:y?"Checking...":G?`Update to V${W}`:"Check Update"})]}),C.jsxs("button",{onClick:()=>F("gcs"),className:"about-gcs-btn",style:{marginBottom:14,padding:"12px 14px"},children:[C.jsxs("div",{className:"about-gcs-left",children:[C.jsx("img",{src:"/gcs-logo.png",alt:"GCS",className:"about-gcs-emblem",style:{width:34,height:34}}),C.jsxs("div",{children:[C.jsx("div",{className:"about-gcs-title",style:{fontSize:13.5},children:"About Garuda Cyber Shield"}),C.jsx("div",{className:"about-gcs-sub",style:{fontSize:11},children:"Official Cyber Defense & Mission Briefing"})]})]}),C.jsxs("span",{className:"about-gcs-cta",children:[C.jsx("span",{children:"Briefing"}),C.jsx(P_,{size:13,strokeWidth:2.6})]})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:10},children:[C.jsxs("button",{onClick:()=>F("terms"),className:"u-btn u-btn-secondary",style:{height:36,fontSize:12.5,fontWeight:700,justifyContent:"center"},children:[C.jsx(ag,{size:14,color:"#60A5FA","aria-hidden":"true"}),C.jsx("span",{children:"Terms of Service"})]}),C.jsxs("button",{onClick:()=>F("privacy"),className:"u-btn u-btn-secondary",style:{height:36,fontSize:12.5,fontWeight:700,justifyContent:"center"},children:[C.jsx(og,{size:14,color:"#34D399","aria-hidden":"true"}),C.jsx("span",{children:"Privacy Policy"})]})]})]}),C.jsx("div",{className:"u-glass-card",style:{borderRadius:12,padding:"11px 14px",textAlign:"center"},children:C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)"},children:"© 2026 Garuda Cyber Shield. All Rights Reserved."})})]}),P==="gcs"&&C.jsx("div",{role:"dialog","aria-modal":"true",className:"u-modal-backdrop",onClick:()=>F(null),children:C.jsxs("div",{className:"u-dialog-card",style:{width:"94%",maxWidth:500,padding:"20px 20px 22px 20px",borderRadius:18},onClick:z=>z.stopPropagation(),children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,paddingBottom:12,borderBottom:"1px solid var(--uv-divider)"},children:[C.jsxs("div",{style:{fontSize:15,fontWeight:800,color:"var(--uv-text-heading)"},children:["About"," ",C.jsxs("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#38BDF8",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:5},children:[C.jsx("span",{children:"Garuda Cyber Shield"}),C.jsx(L_,{size:13})]})]}),C.jsx("button",{onClick:()=>F(null),className:"u-btn u-btn-secondary",style:{height:30,padding:"0 12px",fontSize:12},children:"Close"})]}),C.jsxs("div",{style:{background:c==="light"?"radial-gradient(circle at 50% 16%, #e0f2fe 0%, #f0f9ff 52%, #f8fafc 100%)":"radial-gradient(circle at 50% 16%, #0c2d48 0%, #071324 55%, #05080f 100%)",border:c==="light"?"1px solid rgba(2, 132, 199, 0.35)":"1px solid rgba(56, 189, 248, 0.28)",borderRadius:16,padding:"24px 18px 20px 18px",textAlign:"center"},children:[C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",borderRadius:"50%",padding:4,background:"radial-gradient(circle, rgba(0, 212, 255, 0.38) 0%, rgba(245, 158, 11, 0.18) 65%, transparent 100%)",boxShadow:"0 0 28px rgba(0, 210, 255, 0.35), 0 0 14px rgba(245, 158, 11, 0.28)"},children:C.jsx("img",{src:"/gcs-logo.png",alt:"Garuda Cyber Shield",style:{width:92,height:92,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(245, 158, 11, 0.72)"}})}),C.jsx("div",{style:{marginTop:14},children:C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{fontSize:18,fontWeight:900,letterSpacing:"0.08em",color:"var(--uv-text-heading)",textDecoration:"none"},children:"GARUDA CYBER SHIELD"})}),C.jsx("div",{style:{marginTop:8,marginBottom:18},children:C.jsx("span",{style:{display:"inline-block",fontSize:11.5,fontWeight:700,color:c==="light"?"#0284c7":"#38bdf8",backgroundColor:c==="light"?"rgba(2, 132, 199, 0.1)":"rgba(0, 200, 255, 0.12)",border:c==="light"?"1px solid rgba(2, 132, 199, 0.28)":"1px solid rgba(0, 200, 255, 0.28)",padding:"4px 13px",borderRadius:999},children:"Garuda Eyes on Every Threat, Shielding Cyber Universe"})}),C.jsxs("div",{style:{background:c==="light"?"#ffffff":"#080d18",border:c==="light"?"1px solid rgba(148, 163, 184, 0.35)":"1px solid rgba(0, 200, 255, 0.22)",borderTop:"3px solid #f59e0b",borderRadius:13,padding:"18px 18px 16px 18px",textAlign:"center"},children:[C.jsxs("div",{style:{fontSize:12,fontWeight:900,letterSpacing:"0.09em",textTransform:"uppercase",color:"var(--uv-text-heading)",marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[C.jsx("span",{style:{color:"#f59e0b"},children:"//"}),C.jsx("span",{children:"MISSION BRIEFING"})]}),C.jsxs("p",{style:{fontSize:13,lineHeight:1.72,color:"var(--uv-text-body)",margin:0,textAlign:"center"},children:[C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:c==="light"?"#0284c7":"#38bdf8",fontWeight:800,textDecoration:"none",borderBottom:"1px solid rgba(56, 189, 248, 0.45)"},children:"Garuda Cyber Shield"})," ","(GCS) stands relentlessly vigilant against every threat, attack, and act of hostility targeting the Sanatani community. We will never tolerate insults, hatred, aggression, or deliberate disrespect toward Sanatan Dharma and its believers. We stand uncompromising in defending Sanatan Dharma, protecting Hindu dignity, and holding every act of anti-Hindu misconduct accountable. Our vigilance never sleeps, because Garuda's eyes on every threat all the time."]}),C.jsx("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--uv-divider)",fontSize:11.5,fontStyle:"italic",fontWeight:600,lineHeight:1.6,color:c==="light"?"#0284c7":"#38bdf8",textAlign:"center"},children:"“Vigilance, integrity, and service define who we are. Garuda exists not as a brand, but as a shield—silent, disciplined, and unwavering in its duty.”"})]})]})]})}),P==="terms"&&C.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"terms-modal-title",className:"u-modal-backdrop",onClick:()=>F(null),children:C.jsxs("div",{className:"u-dialog-card",style:{width:"92%",maxWidth:480,textAlign:"left"},onClick:z=>z.stopPropagation(),children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[C.jsx(ag,{size:18,color:"#60A5FA","aria-hidden":"true"}),C.jsxs("h2",{id:"terms-modal-title",style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:["Terms of Service — ",_]})]}),C.jsx("button",{onClick:()=>F(null),"aria-label":"Close Terms of Service",style:{width:28,height:28,borderRadius:7,border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:C.jsx(sf,{size:15,"aria-hidden":"true"})})]}),C.jsxs("div",{style:{maxHeight:280,overflowY:"auto",paddingRight:4,fontSize:12.5,lineHeight:1.6,color:"var(--uv-text-body)",display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:[C.jsxs("p",{children:[C.jsx("strong",{children:"1. Service Architecture:"})," ",A?`Garuda Infinity (${_}) routes traffic through 82 official global gateways using Android VpnService and dynamic per-connection IP rotation.`:`Garuda Infinity (${_}) routes browser traffic through 82 official global gateways with dynamic per-connection IP rotation.`]}),C.jsxs("p",{children:[C.jsx("strong",{children:"2. Acceptable Use:"})," Use Garuda Infinity solely for lawful privacy, security, and network protection purposes."]}),C.jsxs("p",{children:[C.jsx("strong",{children:"3. Attribution:"})," Engineered by"," ",C.jsx("span",{className:"quicksilver-gold-glow",children:"QUICKSILVER"})," •"," ",C.jsx("a",{href:"https://garudacybershield.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#38BDF8",fontWeight:700,textDecoration:"none"},children:"Garuda Cyber Shield"}),"."]})]}),C.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:C.jsx("button",{onClick:()=>F(null),className:"u-btn u-btn-primary",children:"Close"})})]})}),P==="privacy"&&C.jsx("div",{role:"dialog","aria-modal":"true","aria-labelledby":"privacy-modal-title",className:"u-modal-backdrop",onClick:()=>F(null),children:C.jsxs("div",{className:"u-dialog-card",style:{width:"92%",maxWidth:480,textAlign:"left"},onClick:z=>z.stopPropagation(),children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[C.jsx(og,{size:18,color:"#34D399","aria-hidden":"true"}),C.jsxs("h2",{id:"privacy-modal-title",style:{fontSize:16,fontWeight:700,color:"var(--uv-text-heading)"},children:["Privacy Policy — ",_]})]}),C.jsx("button",{onClick:()=>F(null),"aria-label":"Close Privacy Policy",style:{width:28,height:28,borderRadius:7,border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:C.jsx(sf,{size:15,"aria-hidden":"true"})})]}),C.jsxs("div",{style:{maxHeight:280,overflowY:"auto",paddingRight:4,fontSize:12.5,lineHeight:1.6,color:"var(--uv-text-body)",display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:[C.jsxs("p",{children:[C.jsx("strong",{children:"1. Strict Zero-Logs Policy:"})," Garuda Infinity does not record, log, or store your browsing history, traffic destination, or DNS queries."]}),C.jsxs("p",{children:[C.jsx("strong",{children:"2. Ephemeral Session State:"})," Active tunnel credentials and routing state are held strictly in memory and cleared when disconnected."]}),C.jsxs("p",{children:[C.jsx("strong",{children:"3. Minimal Permissions:"})," Only standard network and VPN tunnel permissions are used."]})]}),C.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:C.jsx("button",{onClick:()=>F(null),className:"u-btn u-btn-primary",children:"Close"})})]})})]})}function cT(s){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#0f172a"/></linearGradient></defs><circle cx="18" cy="18" r="18" fill="url(#g)"/><text x="18" y="22" text-anchor="middle" fill="#f8fafc" font-family="sans-serif" font-weight="800" font-size="12">${String(s).toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,2)||"GL"}</text></svg>`;return"data:image/svg+xml;utf8,"+encodeURIComponent(t)}function uT(s){if(!s||typeof s.lat!="number"||typeof s.lng!="number")return"23.81° N, 90.41° E";const e=s.lat>=0?"N":"S",t=s.lng>=0?"E":"W";return`${Math.abs(s.lat).toFixed(2)}° ${e}, ${Math.abs(s.lng).toFixed(2)}° ${t}`}function dT(s){const e=String(s.type||"").toUpperCase(),t=String(s.msg||""),r=s.time||"00:00:00";return e==="CONNECT"||t.toLowerCase().includes("connected")||t.toLowerCase().includes("tunnel active")?{id:s.id,time:r,label:"CONNECTED",group:"TUNNEL",borderColor:"#10b981",bgDark:"rgba(16, 185, 129, 0.08)",bgLight:"rgba(16, 185, 129, 0.07)",badgeBgDark:"rgba(16, 185, 129, 0.18)",badgeBgLight:"rgba(16, 185, 129, 0.14)",badgeColorDark:"#34d399",badgeColorLight:"#047857",message:t}:e==="DISCONNECT"||t.toLowerCase().includes("disconnected")||t.toLowerCase().includes("tearing down")?{id:s.id,time:r,label:"DISCONNECTED",group:"TUNNEL",borderColor:"#f43f5e",bgDark:"rgba(244, 63, 94, 0.08)",bgLight:"rgba(244, 63, 94, 0.06)",badgeBgDark:"rgba(244, 63, 94, 0.18)",badgeBgLight:"rgba(244, 63, 94, 0.14)",badgeColorDark:"#fb7185",badgeColorLight:"#be123c",message:t}:e==="SWITCH"||t.toLowerCase().includes("handshaking")||t.toLowerCase().includes("rotating")?{id:s.id,time:r,label:"HANDSHAKE",group:"TUNNEL",borderColor:"#f59e0b",bgDark:"rgba(245, 158, 11, 0.08)",bgLight:"rgba(245, 158, 11, 0.07)",badgeBgDark:"rgba(245, 158, 11, 0.18)",badgeBgLight:"rgba(245, 158, 11, 0.15)",badgeColorDark:"#fbbf24",badgeColorLight:"#b45309",message:t}:t.toLowerCase().includes("verified")||t.toLowerCase().includes("origin ip")?{id:s.id,time:r,label:t.toLowerCase().includes("origin")?"ISP PROBE":"IP VERIFY",group:"VERIFY",borderColor:"#06b6d4",bgDark:"rgba(6, 182, 212, 0.08)",bgLight:"rgba(6, 182, 212, 0.07)",badgeBgDark:"rgba(6, 182, 212, 0.18)",badgeBgLight:"rgba(6, 182, 212, 0.14)",badgeColorDark:"#22d3ee",badgeColorLight:"#0e7490",message:t}:{id:s.id,time:r,label:"ENGINE",group:"SYSTEM",borderColor:"#3b82f6",bgDark:"rgba(59, 130, 246, 0.08)",bgLight:"rgba(37, 99, 235, 0.06)",badgeBgDark:"rgba(59, 130, 246, 0.18)",badgeBgLight:"rgba(37, 99, 235, 0.14)",badgeColorDark:"#60a5fa",badgeColorLight:"#1d4ed8",message:t}}function fT(s,e){return String(s||"").split(/\b(\d{1,3}(?:\.\d{1,3}){3})\b/g).map((r,a)=>/^\d{1,3}(?:\.\d{1,3}){3}$/.test(r)?C.jsx("span",{style:{display:"inline-block",padding:"0 6px",borderRadius:4,backgroundColor:e?"rgba(37, 99, 235, 0.12)":"rgba(56, 189, 248, 0.16)",border:e?"1px solid rgba(37, 99, 235, 0.28)":"1px solid rgba(56, 189, 248, 0.35)",color:e?"#1d4ed8":"#38bdf8",fontWeight:700,fontVariantNumeric:"tabular-nums",fontSize:11},children:r},a):C.jsx(k0.Fragment,{children:r},a))}function hT({vpnStatus:s,selectedLocationObj:e,realIpInfo:t,onVerifyIp:r,ipVerificationResult:a,isVerifyingIp:l,activeCountryTimeInfo:c,activityLogs:d=[],onClearLogs:h=()=>{},theme:p="dark"}){const[v,x]=Ye.useState("telemetry"),[g,y]=Ye.useState("ALL"),E=s.state==="Connected",A=p==="light",S=E?s.statusCountryIso2||(e==null?void 0:e.iso)||"US":(t==null?void 0:t.country)||"BD",_=E?s.statusIp||(e==null?void 0:e.gatewayIp):(t==null?void 0:t.ip)||"160.250.69.162",P=E?s.statusCity||(e==null?void 0:e.city):(t==null?void 0:t.city)||"Dhaka",F=E?s.statusCountryName||(e==null?void 0:e.name):(t==null?void 0:t.countryName)||"Bangladesh",b=(a==null?void 0:a.coordinates)||(E?e==null?void 0:e.coordinates:t==null?void 0:t.coordinates)||{lat:23.8103,lng:90.4125},I=Ye.useMemo(()=>{const L=d.map(dT);return g==="ALL"?L:L.filter(U=>U.group===g)},[d,g]);return C.jsx("section",{"aria-label":"IP & Log Inspector",className:"uv-scrollbar",style:{flex:1,height:"100%",overflowY:"auto",padding:"18px 14px 36px 14px",display:"flex",flexDirection:"column",alignItems:"center"},children:C.jsxs("div",{style:{width:"100%",maxWidth:540,display:"flex",flexDirection:"column",gap:12},children:[C.jsxs("div",{className:"u-glass-card",style:{display:"flex",borderRadius:12,padding:4,gap:5},children:[C.jsxs("button",{onClick:()=>x("telemetry"),style:{flex:1,height:36,borderRadius:9,border:"none",background:v==="telemetry"?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",color:v==="telemetry"?"#FFFFFF":"var(--uv-text-secondary)",fontSize:12,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,whiteSpace:"nowrap",boxShadow:v==="telemetry"?"0 3px 10px rgba(37, 99, 235, 0.28)":"none"},children:[C.jsx(cg,{size:14,style:{flexShrink:0}}),C.jsx("span",{children:"Live IP & ASN"})]}),C.jsxs("button",{onClick:()=>x("logs"),style:{flex:1,height:36,borderRadius:9,border:"none",background:v==="logs"?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",color:v==="logs"?"#FFFFFF":"var(--uv-text-secondary)",fontSize:12,fontWeight:700,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,whiteSpace:"nowrap",boxShadow:v==="logs"?"0 3px 10px rgba(37, 99, 235, 0.28)":"none"},children:[C.jsx(ug,{size:14,style:{flexShrink:0}}),C.jsx("span",{children:"Activity Logs"})]})]}),v==="telemetry"?C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,gap:8},children:[C.jsx("span",{style:{fontSize:10.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.05em",color:"var(--uv-text-secondary)",whiteSpace:"nowrap"},children:"Active Public IP"}),C.jsx("span",{style:{fontSize:9.5,fontWeight:800,padding:"3px 9px",borderRadius:999,backgroundColor:E?"rgba(16, 185, 129, 0.18)":"rgba(244, 63, 94, 0.15)",color:E?"#34D399":"#FB7185",border:E?"1px solid rgba(16, 185, 129, 0.42)":"1px solid rgba(244, 63, 94, 0.35)",whiteSpace:"nowrap",flexShrink:0},children:E?"TUNNEL PROTECTED":"DIRECT ISP"})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",gap:10,padding:"11px 12px",borderRadius:11,background:A?"linear-gradient(135deg, rgba(224, 242, 254, 0.85), rgba(240, 249, 255, 0.98))":"linear-gradient(135deg, rgba(30, 58, 138, 0.28), rgba(15, 23, 42, 0.72))",border:A?"1px solid rgba(2, 132, 199, 0.28)":"1px solid rgba(56, 189, 248, 0.26)",marginBottom:11},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0,flex:1},children:[C.jsx("img",{src:Mc(S),alt:S,style:{width:34,height:34,borderRadius:"50%",objectFit:"cover",flexShrink:0,border:"1px solid var(--uv-border-strong)"},onError:L=>{L.currentTarget.onerror=null,L.currentTarget.src=cT(S)}}),C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsx("div",{style:{fontSize:16.5,fontWeight:800,fontVariantNumeric:"tabular-nums",color:"var(--uv-text-heading)",lineHeight:1.15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:_}),C.jsxs("div",{style:{fontSize:11,color:"var(--uv-text-secondary)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[P,", ",F," (",S,")"]})]})]}),C.jsxs("div",{style:{textAlign:"right",paddingLeft:10,borderLeft:"1px solid var(--uv-divider)",flexShrink:0},children:[C.jsx("div",{style:{fontSize:8.5,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",color:A?"#0284c7":"#38bdf8",whiteSpace:"nowrap"},children:"Location Time"}),C.jsx("div",{style:{fontSize:12,fontWeight:800,color:"var(--uv-text-heading)",fontVariantNumeric:"tabular-nums",marginTop:1,whiteSpace:"nowrap"},children:(c==null?void 0:c.time12)||"—"}),C.jsx("div",{style:{fontSize:9.5,fontWeight:600,color:"var(--uv-text-secondary)",marginTop:1,whiteSpace:"nowrap"},children:c?`${c.timeZone} (${c.offset})`:"—"})]})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8},children:[C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"ISP / Carrier"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?s.statusIsp||(e==null?void 0:e.isp):(t==null?void 0:t.isp)||"Direct Client ISP"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"ASN Network"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?s.statusAsn||(e==null?void 0:e.asn):(t==null?void 0:t.asn)||"AS64072 Local ISP"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"DNS Resolvers"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?"1.1.1.1, 1.0.0.1":"8.8.8.8 (ISP)"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Origin Real IP"}),C.jsxs("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[(t==null?void 0:t.ip)||"160.250.69.162"," (",(t==null?void 0:t.country)||"BD",")"]})]})]})]}),C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[C.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:11,gap:10,flexWrap:"nowrap"},children:[C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--uv-text-heading)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Live Tunnel & Route Verification"}),C.jsx("div",{style:{fontSize:10.5,color:"var(--uv-text-secondary)",marginTop:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Exit-node & leak protection audit"})]}),C.jsxs("button",{onClick:r,disabled:l,className:"u-btn u-btn-primary",style:{height:32,padding:"0 12px",fontSize:11.5,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:[C.jsx(D_,{size:13,className:l?"uv-spin-fast":"",style:{flexShrink:0}}),C.jsx("span",{children:l?"Verifying...":"Verify IP Now"})]})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8,marginBottom:10},children:[C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Tunnel Route Status"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:E?"#10B981":"#F43F5E",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?`Protected (${S})`:"Direct ISP Route"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Transport Cipher"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?"TLS 1.3 • AES-256-GCM":"Unencrypted Direct"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"DNS & WebRTC Shield"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:E?"var(--uv-primary)":"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:E?"Zero-Leak Shielded":"Standard ISP DNS"})]}),C.jsxs("div",{style:{backgroundColor:"var(--uv-surface-card)",border:"1px solid var(--uv-border)",borderRadius:10,padding:"8px 10px",minWidth:0},children:[C.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--uv-text-secondary)",display:"block"},children:"Exit Geo Coordinates"}),C.jsx("div",{style:{fontSize:11.5,fontWeight:700,color:"var(--uv-text-heading)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:uT(b)})]})]}),C.jsxs("div",{style:{padding:"10px 12px",borderRadius:10,backgroundColor:a||E?"rgba(16, 185, 129, 0.14)":A?"#f1f5f9":"rgba(15, 23, 42, 0.78)",border:a||E?"1px solid rgba(16, 185, 129, 0.42)":"1px solid var(--uv-border-strong)",color:a||E?A?"#064e3b":"#ecfdf5":"var(--uv-text-body)",display:"flex",alignItems:"center",gap:10},children:[a||E?C.jsx(cg,{size:18,color:A?"#059669":"#34d399",style:{flexShrink:0}}):C.jsx(F_,{size:17,color:A?"#0284c7":"#38bdf8",style:{flexShrink:0}}),a!=null&&a.localTime?C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsxs("div",{style:{fontSize:11.5,fontWeight:800,lineHeight:1.3,fontVariantNumeric:"tabular-nums"},children:["Verified Active IP: ",a.ip||_]}),C.jsxs("div",{style:{fontSize:10.5,fontWeight:600,opacity:.9,marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[a.city||P,","," ",a.countryName||F," •"," ",a.localTime]})]}):E?C.jsxs("div",{style:{minWidth:0,flex:1},children:[C.jsxs("div",{style:{fontSize:11.5,fontWeight:800,lineHeight:1.3,fontVariantNumeric:"tabular-nums"},children:["Encrypted Tunnel Active: ",_]}),C.jsxs("div",{style:{fontSize:10.5,fontWeight:600,opacity:.9,marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[P,", ",F," • ",(c==null?void 0:c.verifiedLabel)||""]})]}):C.jsx("span",{style:{fontSize:11,fontWeight:600,lineHeight:1.35},children:"Tap “Verify IP Now” to audit live exit-node routing and leak protection."})]})]})]}):C.jsxs("div",{className:"u-glass-card",style:{borderRadius:14,padding:"14px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,gap:8,flexWrap:"nowrap"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,minWidth:0},children:[C.jsx(ug,{size:15,color:"#60A5FA",style:{flexShrink:0}}),C.jsx("span",{style:{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",color:"var(--uv-text-secondary)",whiteSpace:"nowrap"},children:"Engine Activity Logs"}),C.jsxs("span",{style:{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:999,backgroundColor:"rgba(59, 130, 246, 0.16)",border:"1px solid rgba(59, 130, 246, 0.35)",color:"#60A5FA",whiteSpace:"nowrap",flexShrink:0},children:[I.length," ",I.length===1?"Event":"Events"]})]}),C.jsxs("button",{onClick:h,className:"u-btn u-btn-secondary",style:{height:28,padding:"0 10px",fontSize:11,whiteSpace:"nowrap",flexShrink:0},children:[C.jsx(B_,{size:12,style:{flexShrink:0}}),C.jsx("span",{children:"Clear"})]})]}),C.jsx("div",{style:{display:"flex",gap:6,marginBottom:12,overflowX:"auto",paddingBottom:2},children:[{id:"ALL",label:"All Events"},{id:"TUNNEL",label:"Tunnel"},{id:"VERIFY",label:"IP Verify"},{id:"SYSTEM",label:"System"}].map(L=>{const U=g===L.id;return C.jsx("button",{onClick:()=>y(L.id),style:{height:26,padding:"0 10px",borderRadius:999,border:"1px solid",borderColor:U?"var(--uv-primary)":"var(--uv-border)",backgroundColor:U?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:U?"#60A5FA":"var(--uv-text-secondary)",fontSize:11,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0},children:L.label},L.id)})}),C.jsx("div",{className:"uv-scrollbar",style:{display:"flex",flexDirection:"column",gap:7,maxHeight:420,overflowY:"auto",paddingRight:2},children:I.length===0?C.jsx("div",{style:{textAlign:"center",padding:"32px 12px",color:"var(--uv-text-secondary)",fontSize:12},children:"No activity logs in this category."}):I.map(L=>C.jsxs("div",{style:{backgroundColor:A?L.bgLight:L.bgDark,border:"1px solid var(--uv-border)",borderLeft:`3.5px solid ${L.borderColor}`,borderRadius:9,padding:"8px 11px",display:"flex",flexDirection:"column",gap:4},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[C.jsx("span",{style:{fontSize:9.5,fontWeight:800,letterSpacing:"0.04em",textTransform:"uppercase",padding:"2px 7px",borderRadius:5,backgroundColor:A?L.badgeBgLight:L.badgeBgDark,color:A?L.badgeColorLight:L.badgeColorDark,whiteSpace:"nowrap"},children:L.label}),C.jsx("span",{style:{fontSize:10.5,fontWeight:700,color:"var(--uv-text-secondary)",fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap"},children:L.time})]}),C.jsx("div",{style:{fontSize:11.5,fontWeight:600,color:"var(--uv-text-heading)",lineHeight:1.4,wordBreak:"break-word"},children:fT(L.message,A)})]},L.id))})]})]})})}const pT={Auto:"Garuda LinkX (Auto)",WireGuard:"Garuda LinkX (WireGuard)",OpenVPN_UDP:"OpenVPN DCO (UDP)",OpenVPN_TCP:"OpenVPN DCO (TCP)"};function mT(s){const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=s%60;return[e,t,r].map(a=>String(a).padStart(2,"0")).join(":")}function rf(s,e){const t=l=>String(l||"1.0.0").replace(/^[vV]/,"").split(".").map(c=>parseInt(c,10)||0),r=t(s),a=t(e);for(let l=0;l<3;l++){if((r[l]||0)>(a[l]||0))return!0;if((r[l]||0)<(a[l]||0))return!1}return!1}function As(){var s,e;return typeof window<"u"&&((s=window.location)==null?void 0:s.protocol)==="chrome-extension:"&&typeof chrome<"u"&&!!((e=chrome.runtime)!=null&&e.sendMessage)}function gT(){return typeof window>"u"?!1:As()?!0:!!window.__GARUDA_EXTENSION_BRIDGE_ACTIVE||document.documentElement.getAttribute("data-garuda-extension")==="active"}function vT(s,e){if(!e)return{ok:!1};const t=e.state||{},r=e.status||{},a=(t.vpnState||r.state)==="Connected";return{ok:!!e.ok,state:{status:t.vpnState||r.state||"Disconnected",activeIso2:r.statusCountryIso2||t.geoCountryIso2||t.iso||t.selectedIso||"US",exitIpInfo:{ip:r.statusIp||t.statusIp||"",country:r.statusCountryIso2||t.geoCountryIso2||t.iso||"",countryName:r.statusCountryName||t.geoCountryName||t.countryName||"",city:r.statusCity||t.city||"",isp:r.statusIsp||t.isp||"",asn:r.statusAsn||t.asn||"",timeZone:r.timeZone||t.timeZone||""},primaryProxy:Array.isArray(t.activeProxies)&&t.activeProxies.length>0?t.activeProxies[0]:a&&t.statusIp?{host:t.statusIp,port:443}:null},verified:s==="VERIFY_IP"?{ip:e.ip,country:e.country,countryName:e.countryName,city:e.city,isp:e.isp,asn:e.asn,timeZone:e.timeZone,localTime:e.localTime,coordinates:e.coordinates}:void 0}}function es(s,e=8e3){if(As()){const r={GET_STATE:"GET_STATUS",CONNECT:"CONNECT_VPN",DISCONNECT:"DISCONNECT_VPN",VERIFY_IP:"VERIFY_IP",UPDATE_SETTINGS:"UPDATE_SETTINGS"}[s.type]||s.type,a=s.iso2?X0(s.iso2):null,l=s.type==="CONNECT"?{iso:s.iso2,countryName:(a==null?void 0:a.name)||s.iso2,city:(a==null?void 0:a.city)||"Gateway",isp:(a==null?void 0:a.isp)||"Garuda Encrypted Relay",asn:(a==null?void 0:a.asn)||"AS209854 Garuda Network"}:s;return new Promise(c=>{const d=setTimeout(()=>c({ok:!1,timeout:!0}),e);try{chrome.runtime.sendMessage({action:r,payload:l},h=>{clearTimeout(d),chrome.runtime.lastError||!h?c({ok:!1}):c(vT(s.type,h))})}catch{clearTimeout(d),c({ok:!1})}})}return new Promise(t=>{const r=`garuda_req_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;let a=!1;const l=setTimeout(()=>{a||(a=!0,window.removeEventListener("message",c),t(null))},e);function c(d){if(d.source!==window)return;const h=d.data;h&&h.source==="GARUDA_INFINITY_EXTENSION"&&h.requestId===r&&(a=!0,clearTimeout(l),window.removeEventListener("message",c),t(h.response))}window.addEventListener("message",c),window.postMessage({source:"GARUDA_INFINITY_WEB",requestId:r,payload:s},window.location.origin)})}function yT(){const[s,e]=Ye.useState(()=>{var pe,oe;try{if(typeof window<"u"&&((oe=(pe=window.location)==null?void 0:pe.search)!=null&&oe.includes("autoUpdate=1")))return"settings"}catch{}return"vpn"}),[t,r]=Ye.useState(()=>{try{const pe=localStorage.getItem("garuda_infinity_theme");if(pe==="light"||pe==="dark")return pe}catch{}return"dark"}),[a,l]=Ye.useState("globe");Ye.useEffect(()=>{try{localStorage.setItem("garuda_infinity_theme",t),document.documentElement.setAttribute("data-theme",t)}catch{}},[t]);const c=Ye.useCallback(()=>{r(pe=>{const oe=pe==="dark"?"light":"dark";return es({type:"UPDATE_SETTINGS",theme:oe},2e3),oe})},[]),d=Ye.useCallback(()=>{l(pe=>pe==="globe"?"shield":pe==="shield"?"orbit":"globe")},[]),[h]=Ye.useState(()=>fg),[p]=Ye.useState(!1),[v,x]=Ye.useState("US"),[g,y]=Ye.useState("Auto"),[E,A]=Ye.useState(!1),[S,_]=Ye.useState(!1),[P,F]=Ye.useState(!1),[b,I]=Ye.useState(()=>{try{const pe=localStorage.getItem("garuda_infinity_dynamic_ip");if(pe==="false")return!1;if(pe==="true")return!0}catch{}return!0}),[L,U]=Ye.useState(()=>gT()),[w,N]=Ye.useState(()=>dn()),[k,G]=Ye.useState(null),[W,K]=Ye.useState(!1),[z,J]=Ye.useState(!1),[ge,q]=Ye.useState(null),[ee,H]=Ye.useState(0),[j,D]=Ye.useState({checked:!1,updateAvailable:!1,forceUpdateRequired:!1,forceUpdateTitle:"Mandatory Update Required",forceUpdateMessage:"A critical update with new features and security enhancements is required to continue using Garuda Infinity. Please update to the latest version now.",latestAppVersion:Mr,latestExtensionVersion:Eo}),[le,Le]=Ye.useState(!1),[Ke,$e]=Ye.useState(!1),Ae=Ye.useRef(null),re=Ye.useCallback(()=>{Ae.current&&clearTimeout(Ae.current),$e(!0),Ae.current=setTimeout(()=>{$e(!1),Ae.current=null},3e3)},[]),[ne,Oe]=Ye.useState({ip:"160.250.69.162",country:"BD",countryName:"Bangladesh",city:"Dhaka",isp:"Direct Client ISP",asn:"AS64072 Local Broadband",timeZone:"Asia/Dhaka",coordinates:{lat:23.8103,lng:90.4125}}),[Me,Be]=Ye.useState({state:"Disconnected",error:!1,statusReady:!0,statusIp:"160.250.69.162",statusCountryIso2:"BD",statusCountryName:"Bangladesh",statusCity:"Dhaka",statusIsp:"Direct Client ISP",statusAsn:"AS64072 Local Broadband",timeZone:"Asia/Dhaka",uiLockedLocation:"",effectiveProtocol:"WireGuard",effectiveProtocolLabel:"Garuda LinkX (Auto)",tunnelMode:"Disconnected",realTunnelActive:!1}),[yt,Dt]=Ye.useState(0),[_t,Mt]=Ye.useState(0),[Ut,mt]=Ye.useState(0),[Gt,$t]=Ye.useState(()=>[{id:1,time:Mi("BD","Asia/Dhaka").time24,type:"info",msg:`Garuda Infinity Engine (${wo}) ready.`}]),Vt=Ye.useRef(null),st=Ye.useCallback((pe,oe,_e="",se="")=>{const te=Mi(_e||"BD",se);$t(fe=>[{id:Date.now()+Math.random(),time:te.time24,type:pe,msg:oe},...fe.slice(0,49)])},[]),Nt=Ye.useCallback(async(pe=!0)=>{var oe,_e,se,Ve,te,fe,Te,Re;Le(!0);try{const Ce=await ox();if(Ce){const V=dn(),De=String(Ce.appVersion||Ce.version||Mr).replace(/^[vV]/,"").trim(),xe=String(Ce.extensionVersion||Ce.version||Eo).replace(/^[vV]/,"").trim(),Pe=Number(Ce.versionCode)||pg,Ee=String(Ce.minSupportedAppVersion||Ce.minSupportedVersion||((oe=Ce.accessControl)==null?void 0:oe.minAllowedAppVersion)||((_e=Ce.accessControl)==null?void 0:_e.minAllowedVersion)||"").replace(/^[vV]/,"").trim(),Se=String(Ce.minSupportedExtensionVersion||Ce.minSupportedVersion||((se=Ce.accessControl)==null?void 0:se.minAllowedExtensionVersion)||((Ve=Ce.accessControl)==null?void 0:Ve.minAllowedVersion)||"").replace(/^[vV]/,"").trim(),Ge=V?rf(De,Mr)||Pe>Number(pg):rf(xe,Eo),Ue=V?!!(Ce.forceUpdate||Ce.forceUpdateApp||(te=Ce.accessControl)!=null&&te.enforceMinVersion):!!(Ce.forceUpdate||Ce.forceUpdateExtension||(fe=Ce.accessControl)!=null&&fe.enforceMinVersion),vt=V?Ee||De:Se||xe,Bt=!!(Ue&&vt&&rf(vt,V?Mr:Eo));D({checked:!0,updateAvailable:Ge||Bt,forceUpdateRequired:Bt,forceUpdateTitle:Ce.forceUpdateTitle||((Te=Ce.accessControl)==null?void 0:Te.restrictionTitle)||"Mandatory Update Required",forceUpdateMessage:Ce.forceUpdateMessage||((Re=Ce.accessControl)==null?void 0:Re.restrictionMessage)||"A critical update with new features and security enhancements is required to continue using Garuda Infinity. Please update to the latest version now.",latestAppVersion:V?De:xe,latestExtensionVersion:xe,apkUrl:Ce.apkUrl||kl,extensionZipUrl:Ce.extensionZipUrl||bo}),Bt?(dn()&&xg().catch(()=>{}),(L||As())&&es({type:"DISCONNECT"},3e3).catch(()=>{}),Be(gn=>({...gn,state:"Disconnected",uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1}))):Ge&&pe&&re()}}catch{}finally{Le(!1)}},[L,re]),$=Ye.useCallback(async()=>{if(j.updateAvailable){if(dn()){const pe=j.latestAppVersion||Mr;lx(j.apkUrl||kl,pe),st("info",`Downloading Garuda Infinity V${pe} APK to Downloads...`);return}if(As()){try{const pe=await J0({allowPicker:!0,onProgress:oe=>st("info",oe)});if(pe!=null&&pe.ok)return}catch{}cf(j.extensionZipUrl||bo),st("info","Downloading Garuda-Infinity-Extension.zip update package...");return}cf(j.extensionZipUrl||bo);return}await Nt(!0)},[j.updateAvailable,j.latestAppVersion,j.apkUrl,j.extensionZipUrl,st,Nt]);Ye.useEffect(()=>{Nt(!0);const oe=setInterval(()=>{Nt(!0)},36e5),_e=()=>{typeof document<"u"&&document.visibilityState==="visible"&&Nt(!0)};return typeof window<"u"&&(window.__onGarudaAppEntered=()=>{Nt(!0)}),typeof document<"u"&&document.addEventListener("visibilitychange",_e),()=>{clearInterval(oe),typeof document<"u"&&document.removeEventListener("visibilitychange",_e),typeof window<"u"&&window.__onGarudaAppEntered&&delete window.__onGarudaAppEntered,Ae.current&&clearTimeout(Ae.current)}},[Nt]),Ye.useEffect(()=>{if(!(typeof window>"u"))return window.__onGarudaNativeVpnDisconnected=()=>{G(null),Be(pe=>({...pe,state:"Disconnected",statusIp:ne.ip,statusCountryIso2:ne.country,statusCountryName:ne.countryName,statusCity:ne.city,statusIsp:ne.isp,statusAsn:ne.asn,timeZone:ne.timeZone,uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1})),q(null),st("disconnect","Disconnected from Android notification bar • Restored direct ISP",ne.country,ne.timeZone)},()=>{delete window.__onGarudaNativeVpnDisconnected}},[ne,st]),Ye.useEffect(()=>{let pe=!1;async function oe(){if(dn()&&!pe){N(!0);const te=await lf(!1);if(te!=null&&te.ip&&!pe){const fe={ip:te.ip,country:te.country||"BD",countryName:te.countryName||"Bangladesh",city:te.city||"Dhaka",isp:te.isp||"Direct Mobile Carrier",asn:te.asn||"AS24389 Mobile ISP",timeZone:te.timeZone||mn(te.country||"BD"),coordinates:{lat:Number(te.latitude)||23.8103,lng:Number(te.longitude)||90.4125}};Oe(fe),Be(Te=>Te.state==="Disconnected"?{...Te,statusIp:fe.ip,statusCountryIso2:fe.country,statusCountryName:fe.countryName,statusCity:fe.city,statusIsp:fe.isp,statusAsn:fe.asn,timeZone:fe.timeZone}:Te),st("info",`Detected real ISP IP ${fe.ip} (${fe.country})`,fe.country,fe.timeZone);return}}const se=await es({type:"GET_STATE"},1500);if(se!=null&&se.ok&&!pe){U(!0);const te=se.state;if((te==null?void 0:te.status)==="Connected"&&te.activeIso2){const fe=h.find(Te=>Te.iso.toLowerCase()===te.activeIso2.toLowerCase())||h[0];x(fe.iso),Be(Te=>{var Re,Ce,V,De,xe,Pe;return{...Te,state:"Connected",statusIp:((Re=te.exitIpInfo)==null?void 0:Re.ip)||fe.gatewayIp,statusCountryIso2:fe.iso,statusCountryName:((Ce=te.exitIpInfo)==null?void 0:Ce.countryName)||fe.name,statusCity:((V=te.exitIpInfo)==null?void 0:V.city)||fe.city,statusIsp:((De=te.exitIpInfo)==null?void 0:De.isp)||fe.isp,statusAsn:((xe=te.exitIpInfo)==null?void 0:xe.asn)||fe.asn,timeZone:((Pe=te.exitIpInfo)==null?void 0:Pe.timeZone)||mn(fe.iso),uiLockedLocation:fe.iso,tunnelMode:"Garuda Standalone Extension Tunnel",realTunnelActive:!0}});return}}const Ve=[{url:"https://api.2ip.io/",parse:te=>{var fe,Te;return te&&te.ip?{ip:te.ip,country:te.code||"BD",countryName:te.country||"Bangladesh",city:te.city||"Dhaka",isp:((fe=te.asn)==null?void 0:fe.name)||"Local Broadband ISP",asn:(Te=te.asn)!=null&&Te.id?`AS${te.asn.id} ${te.asn.name||""}`.trim():"AS64072",timeZone:mn(te.code||"BD",te.time_zone||""),coordinates:{lat:Number(te.lat)||23.8103,lng:Number(te.lon)||90.4125}}:null}},{url:"https://ipwho.is/",parse:te=>{var fe,Te,Re,Ce;return te&&te.success!==!1&&te.ip?{ip:te.ip,country:te.country_code||"BD",countryName:te.country||"Bangladesh",city:te.city||"Dhaka",isp:((fe=te.connection)==null?void 0:fe.isp)||((Te=te.connection)==null?void 0:Te.org)||"Local Broadband ISP",asn:(Re=te.connection)!=null&&Re.asn?`AS${te.connection.asn}`:"AS64072",timeZone:mn(te.country_code||"BD",((Ce=te.timezone)==null?void 0:Ce.id)||""),coordinates:{lat:Number(te.latitude)||23.8103,lng:Number(te.longitude)||90.4125}}:null}}];for(const te of Ve){if(pe)break;try{const fe=await fetch(te.url,{cache:"no-store"});if(!fe.ok)continue;const Te=await fe.json(),Re=te.parse(Te);if(Re&&!pe){Oe(Re),Be(Ce=>Ce.state==="Disconnected"?{...Ce,statusIp:Re.ip,statusCountryIso2:Re.country,statusCountryName:Re.countryName,statusCity:Re.city,statusIsp:Re.isp,statusAsn:Re.asn,timeZone:Re.timeZone}:Ce),st("info",`Origin IP detected: ${Re.ip} (${Re.city}, ${Re.country})`,Re.country,Re.timeZone);break}}catch{}}}return oe(),()=>{pe=!0}},[h,st]),Ye.useEffect(()=>{const pe=setInterval(()=>{H(oe=>(oe+1)%86400),Me.state==="Connected"&&(dn()?Dt(_g()):Dt(oe=>oe+1),Mt(oe=>oe+Math.floor(18e3+Math.random()*52e3)),mt(oe=>oe+Math.floor(6200+Math.random()*19e3)))},1e3);return()=>clearInterval(pe)},[Me.state]);const kt=Ye.useCallback(async(pe,oe=!1)=>{var Te,Re,Ce;if(j.forceUpdateRequired)return;const _e=pe||v,se=h.find(V=>V.iso.toLowerCase()===String(_e).toLowerCase())||h[0];x(se.iso),K(!0),Vt.current&&clearTimeout(Vt.current),Vt.current=setTimeout(()=>{K(!1)},900),Be(V=>({...V,state:"Connecting",uiLockedLocation:se.iso})),q(null);const Ve=g==="Auto"?se.streamingOptimized||se.hasStreaming?"WireGuard":"OpenVPN_UDP":g,te=pT[g]||"Garuda LinkX (Auto)",fe=oe||b!==!1;st("switch",`Handshaking with ${se.name} (${se.city}) gateway...`,se.iso);try{if(dn()){const Pe=await rx(se,fe,Ee=>{if(!(Ee!=null&&Ee.ip))return;const Se=Ee.timeZone||mn(se.iso),Ge=Mi(se.iso,Se);Be(Ue=>Ue.state==="Connected"&&String(Ue.statusCountryIso2||"").toUpperCase()===se.iso.toUpperCase()?{...Ue,statusIp:Ee.ip||Ue.statusIp,statusCountryName:Ee.countryName||Ue.statusCountryName,statusCity:Ee.city||Ue.statusCity,statusIsp:Ee.isp||Ue.statusIsp,statusAsn:Ee.asn||Ue.statusAsn,timeZone:Se}:Ue),q(Ue=>Ue&&Ue.isVpnActive?{...Ue,ip:Ee.ip||Ue.ip,countryName:Ee.countryName||Ue.countryName,city:Ee.city||Ue.city,isp:Ee.isp||Ue.isp,asn:Ee.asn||Ue.asn,localTime:Ge.verifiedLabel,timeZone:Ge.timeZone}:Ue)});if(Pe!=null&&Pe.ok){const Ee=Pe.exitIpInfo||{},Se=Ee.ip||((Te=Pe.primaryProxy)==null?void 0:Te.host)||se.gatewayIp,Ge=!Ee.country||String(Ee.country).toUpperCase()===se.iso.toUpperCase(),Ue=Ge&&Ee.countryName||se.name,vt=Ge&&Ee.city||se.city,pt=Ge&&Ee.timeZone||mn(se.iso),Bt=Mi(se.iso,pt);G({iso2:se.iso,primaryProxy:Pe.primaryProxy,proxyUsername:Pe.proxyAuthUsername}),Mt(40960),mt(14336),Dt(_g()),Be({state:"Connected",error:!1,statusReady:!0,statusIp:Se,statusCountryIso2:se.iso,statusCountryName:Ue,statusCity:vt,statusIsp:Ee.isp||se.isp,statusAsn:Ee.asn||se.asn,timeZone:pt,uiLockedLocation:se.iso,effectiveProtocol:Ve,effectiveProtocolLabel:te,tunnelMode:"Android Native VpnService",realTunnelActive:!0}),q({isVpnActive:!0,ip:Se,country:se.iso,countryName:Ue,city:vt,isp:Ee.isp||se.isp,asn:Ee.asn||se.asn,localTime:Bt.verifiedLabel,timeZone:Bt.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Connected to ${Ue} (${vt}) • Exit IP ${Se}`,se.iso,pt);return}}if(L||As()){const Pe=await es({type:"CONNECT",iso2:se.iso,rotateIp:fe},14e3);if(Pe!=null&&Pe.ok&&((Re=Pe.state)==null?void 0:Re.status)==="Connected"){U(!0);const Ee=Pe.state,Se=Ee.exitIpInfo||{},Ge=Se.ip||((Ce=Ee.primaryProxy)==null?void 0:Ce.host)||se.gatewayIp,Ue=!Se.country||String(Se.country).toUpperCase()===se.iso.toUpperCase(),vt=Ue&&Se.countryName||se.name,pt=Ue&&Se.city||se.city,Bt=Ue&&Se.timeZone||mn(se.iso),gn=Mi(se.iso,Bt);G({iso2:se.iso,primaryProxy:Ee.primaryProxy}),Mt(36864),mt(12288),Dt(0),Be({state:"Connected",error:!1,statusReady:!0,statusIp:Ge,statusCountryIso2:se.iso,statusCountryName:vt,statusCity:pt,statusIsp:Se.isp||se.isp,statusAsn:Se.asn||se.asn,timeZone:Bt,uiLockedLocation:se.iso,effectiveProtocol:Ve,effectiveProtocolLabel:te,tunnelMode:"Garuda Standalone Extension Tunnel",realTunnelActive:!0}),q({isVpnActive:!0,ip:Ge,country:se.iso,countryName:vt,city:pt,isp:Se.isp||se.isp,asn:Se.asn||se.asn,localTime:gn.verifiedLabel,timeZone:gn.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Connected via Extension • Exit IP ${Ge} (${se.iso})`,se.iso,Bt);return}}try{const Pe=await fetch("/api/vpn/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({iso2:se.iso,rotateIp:fe})});if(Pe.ok){const Ee=await Pe.json();if(Ee.ok){const Se=hg(se,Ve),Ge=Ee.exitIpInfo||{},Ue=Ge.ip||Se.publicIp,vt=mn(se.iso),pt=Mi(se.iso,vt);G({iso2:se.iso,primaryProxy:Ee.primaryProxy,proxyUsername:Ee.proxyAuthUsername}),Mt(32768),mt(11240),Dt(0),Be({state:"Connected",error:!1,statusReady:!0,statusIp:Ue,statusCountryIso2:se.iso,statusCountryName:Ge.countryName||se.name,statusCity:Ge.city||se.city,statusIsp:Ge.isp||se.isp,statusAsn:Ge.asn||se.asn,timeZone:vt,uiLockedLocation:se.iso,effectiveProtocol:Ve,effectiveProtocolLabel:te,tunnelMode:"Garuda Cloud Gateway Tunnel",realTunnelActive:!0}),q({isVpnActive:!0,ip:Ue,country:se.iso,countryName:Ge.countryName||se.name,city:Ge.city||se.city,isp:Ge.isp||se.isp,asn:Ge.asn||se.asn,localTime:pt.verifiedLabel,timeZone:pt.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Tunnel Active • Exit IP ${Ue} (${se.city}, ${se.iso})`,se.iso,vt);return}}}catch{}const V=hg(se,Ve),De=mn(se.iso),xe=Mi(se.iso,De);Mt(32768),mt(11240),Dt(0),Be({state:"Connected",error:!1,statusReady:!0,statusIp:V.publicIp,statusCountryIso2:se.iso,statusCountryName:se.name,statusCity:se.city,statusIsp:V.isp,statusAsn:V.asn,timeZone:De,uiLockedLocation:se.iso,effectiveProtocol:Ve,effectiveProtocolLabel:te,tunnelMode:"Garuda LinkX Tunnel (Active)",realTunnelActive:!0}),q({isVpnActive:!0,ip:V.publicIp,country:se.iso,countryName:se.name,city:se.city,isp:V.isp,asn:V.asn,localTime:xe.verifiedLabel,timeZone:xe.timeZone,tunnelProtocol:te,dnsServers:["1.1.1.1","1.0.0.1"]}),st("connect",`Tunnel Active • Assigned IP ${V.publicIp} (${se.city}, ${se.iso})`,se.iso,De)}finally{Vt.current&&clearTimeout(Vt.current),K(!1)}},[v,h,g,b,L,st]),Pt=Ye.useCallback(async()=>{Vt.current&&clearTimeout(Vt.current),K(!1),Be(pe=>({...pe,state:"Disconnecting"})),st("disconnect","Tearing down encrypted proxy tunnel...",ne.country,ne.timeZone),dn()&&await xg(),(L||As())&&await es({type:"DISCONNECT"},5e3),G(null),Dt(0),Mt(0),mt(0),Be(pe=>({...pe,state:"Disconnected",error:!1,statusReady:!0,statusIp:ne.ip,statusCountryIso2:ne.country,statusCountryName:ne.countryName,statusCity:ne.city,statusIsp:ne.isp,statusAsn:ne.asn,timeZone:ne.timeZone,uiLockedLocation:"",tunnelMode:"Disconnected",realTunnelActive:!1})),q(null),st("disconnect",`Disconnected • Restored direct ISP (${ne.ip})`,ne.country,ne.timeZone)},[L,ne,st]),O=Ye.useCallback(()=>{Me.state==="Connected"||Me.state==="Connecting"||Me.state==="Reconnecting"?Pt():kt(v)},[Me.state,v,kt,Pt]),M=Ye.useCallback(()=>{if(Me.state!=="Connected")return;const pe=Me.statusCountryIso2||v;kt(pe,!0)},[Me.state,Me.statusCountryIso2,v,kt]),ie=Ye.useCallback(async()=>{J(!0);try{const pe=Me.state==="Connected",oe=pe?String(Me.statusCountryIso2||v||"US").toUpperCase():"";if(dn()){const te=await lf(pe,oe);if(te!=null&&te.ip){const fe=pe?oe:te.country||Me.statusCountryIso2||"BD",Te=!pe||!te.country||String(te.country).toUpperCase()===fe.toUpperCase(),Re=Mi(fe,Te?te.timeZone:mn(fe)),Ce=Te&&te.countryName||Me.statusCountryName,V=Te&&te.city||Me.statusCity;Be(De=>({...De,statusIp:te.ip,statusCountryIso2:fe,statusCountryName:Ce||De.statusCountryName,statusCity:V||De.statusCity,statusIsp:te.isp||De.statusIsp,statusAsn:te.asn||De.statusAsn,timeZone:Re.timeZone})),q({isVpnActive:pe,ip:te.ip,country:fe,countryName:Ce,city:V,isp:te.isp||Me.statusIsp,asn:te.asn||Me.statusAsn,localTime:Re.verifiedLabel,timeZone:Re.timeZone,tunnelProtocol:pe?Me.effectiveProtocolLabel:"Direct ISP",dnsServers:pe?["1.1.1.1","1.0.0.1"]:["8.8.8.8"],coordinates:Te&&Number.isFinite(te.latitude)&&Number.isFinite(te.longitude)?{lat:te.latitude,lng:te.longitude}:void 0}),st("info",`Verified active IP ${te.ip} (${V||fe}, ${Ce||fe}) • ${Re.verifiedLabel}`,fe,Re.timeZone);return}}if(L||As()){const te=await es({type:"VERIFY_IP"},9e3);if(te!=null&&te.ok&&(te!=null&&te.verified)){const fe=te.verified,Te=fe.country||Me.statusCountryIso2||"BD",Re=Mi(Te,fe.timeZone);Be(Ce=>({...Ce,statusIp:fe.ip||Ce.statusIp,statusCountryIso2:Te,statusCountryName:fe.countryName||Ce.statusCountryName,statusCity:fe.city||Ce.statusCity,statusIsp:fe.isp||Ce.statusIsp,statusAsn:fe.asn||Ce.statusAsn,timeZone:fe.timeZone||Re.timeZone})),q({isVpnActive:Me.state==="Connected",ip:fe.ip,country:Te,countryName:fe.countryName||Me.statusCountryName,city:fe.city||Me.statusCity,isp:fe.isp||Me.statusIsp,asn:fe.asn||Me.statusAsn,localTime:fe.localTime||Re.verifiedLabel,timeZone:fe.timeZone||Re.timeZone,tunnelProtocol:Me.state==="Connected"?Me.effectiveProtocolLabel:"Direct ISP",dnsServers:Me.state==="Connected"?["1.1.1.1","1.0.0.1"]:["8.8.8.8"],coordinates:fe.coordinates}),st("info",`Verified active IP ${fe.ip} (${fe.city||Te}, ${fe.countryName||Te}) • ${fe.localTime||Re.verifiedLabel}`,Te,fe.timeZone||Re.timeZone);return}}if(Me.state==="Connected"&&(k!=null&&k.primaryProxy)){const te=await fetch("/api/vpn/verify-ip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({proxyHost:k.primaryProxy.host,proxyPort:k.primaryProxy.port,proxyUsername:k.proxyUsername})});if(te.ok){const fe=await te.json();if(fe.ok&&fe.verified){const Te=fe.verified,Re=Te.country||Me.statusCountryIso2||"US",Ce=Mi(Re,Te.timeZone);Be(V=>({...V,statusIp:Te.ip||V.statusIp,statusCity:Te.city||V.statusCity,statusIsp:Te.isp||V.statusIsp,statusAsn:Te.asn||V.statusAsn,timeZone:Ce.timeZone})),q({isVpnActive:!0,ip:Te.ip,country:Re,countryName:Te.countryName||Me.statusCountryName,city:Te.city||Me.statusCity,isp:Te.isp||Me.statusIsp,asn:Te.asn||Me.statusAsn,localTime:Ce.verifiedLabel,timeZone:Ce.timeZone,tunnelProtocol:Me.effectiveProtocolLabel,dnsServers:["1.1.1.1","1.0.0.1"]}),st("info",`Verified active IP ${Te.ip} (${Te.city||Re}, ${Te.countryName||Re}) • ${Ce.verifiedLabel}`,Re,Ce.timeZone);return}}}const _e=Me.state==="Connected"?Me.statusCountryIso2||v:ne.country||"BD",se=Me.state==="Connected"?Me.timeZone:ne.timeZone,Ve=Mi(_e,se);q({isVpnActive:Me.state==="Connected",ip:Me.statusIp,country:_e,countryName:Me.statusCountryName,city:Me.statusCity,isp:Me.statusIsp,asn:Me.statusAsn,localTime:Ve.verifiedLabel,timeZone:Ve.timeZone,tunnelProtocol:Me.state==="Connected"?Me.effectiveProtocolLabel:"Direct ISP",dnsServers:Me.state==="Connected"?["1.1.1.1","1.0.0.1"]:["8.8.8.8"]}),st("info",`Verified active IP ${Me.statusIp} (${Me.statusCity}, ${Me.statusCountryName}) • ${Ve.verifiedLabel}`,_e,Ve.timeZone)}finally{J(!1)}},[L,Me,k,v,ne,st]),ue=Me.state==="Connected",ye=Ye.useMemo(()=>h.find(pe=>pe.iso.toLowerCase()===String(v).toLowerCase())||h[0],[h,v]),Ne=Ye.useMemo(()=>{const pe=ue?Me.statusCountryIso2||ye.iso:ne.country||"BD",oe=ue?Me.timeZone:ne.timeZone;return Mi(pe,oe)},[ee,ue,Me.statusCountryIso2,Me.timeZone,ye.iso,ne.country,ne.timeZone]);return C.jsxs("div",{className:"u-app-fullscreen",children:[j.forceUpdateRequired&&C.jsx("div",{role:"dialog","aria-modal":"true","aria-label":"Mandatory Version Update Required",style:{position:"fixed",inset:0,zIndex:99999,background:"radial-gradient(circle at 50% 25%, rgba(30, 58, 138, 0.96), rgba(3, 7, 18, 0.99))",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,textAlign:"center"},children:C.jsxs("div",{style:{width:"100%",maxWidth:420,background:"rgba(15, 23, 42, 0.94)",border:"1px solid rgba(239, 68, 68, 0.48)",borderRadius:24,padding:"30px 24px 26px 24px",boxShadow:"0 24px 60px rgba(0, 0, 0, 0.75)",display:"flex",flexDirection:"column",alignItems:"center"},children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:66,height:66,marginBottom:14,filter:"drop-shadow(0 0 18px rgba(59, 130, 246, 0.65))"}}),C.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"4px 12px",borderRadius:999,background:"rgba(239, 68, 68, 0.18)",border:"1px solid rgba(239, 68, 68, 0.45)",color:"#F87171",fontSize:10.5,fontWeight:800,letterSpacing:"0.7px",textTransform:"uppercase",marginBottom:12},children:"MANDATORY VERSION UPDATE"}),C.jsx("h2",{style:{fontSize:20,fontWeight:800,color:"#F8FAFC",marginBottom:10,lineHeight:1.25},children:j.forceUpdateTitle||"Mandatory Update Required"}),C.jsx("p",{style:{fontSize:13.5,lineHeight:1.65,color:"#CBD5E1",marginBottom:18},children:j.forceUpdateMessage}),C.jsxs("div",{style:{width:"100%",fontSize:12,fontWeight:700,color:"#38BDF8",background:"rgba(56, 189, 248, 0.12)",border:"1px solid rgba(56, 189, 248, 0.32)",borderRadius:12,padding:"10px 14px",marginBottom:18},children:["Installed: ",wo," • Required: V",j.latestAppVersion||Mr]}),C.jsxs("button",{onClick:()=>{var pe;dn()&&((pe=window.GarudaAndroidBridge)!=null&&pe.downloadUpdateApk)?window.GarudaAndroidBridge.downloadUpdateApk(kl,j.latestAppVersion||Mr):window.open(kl,"_blank","noopener,noreferrer")},className:"u-btn u-btn-primary",style:{width:"100%",height:46,fontSize:13.5,fontWeight:800,borderRadius:12,justifyContent:"center",marginBottom:10},children:["Update to Latest Version (V",j.latestAppVersion||Mr,")"]}),C.jsx("button",{onClick:$,className:"u-btn u-btn-secondary",style:{width:"100%",height:36,fontSize:12,fontWeight:700,borderRadius:10,justifyContent:"center"},children:le?"Checking...":"Verify Update Status"})]})}),Ke&&j.updateAvailable&&!j.forceUpdateRequired&&C.jsx("div",{role:"status","aria-live":"polite",onClick:()=>{$e(!1),e("settings")},style:{position:"fixed",inset:0,zIndex:99990,backgroundColor:"rgba(2, 6, 23, 0.52)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,cursor:"pointer"},children:C.jsxs("div",{style:{width:"100%",maxWidth:360,background:t==="light"?"linear-gradient(145deg, #FFFFFF 0%, #F1F5F9 100%)":"linear-gradient(145deg, rgba(15, 23, 42, 0.97) 0%, rgba(10, 15, 29, 0.98) 100%)",border:"1px solid rgba(56, 189, 248, 0.55)",borderRadius:20,padding:"22px 20px",boxShadow:t==="light"?"0 20px 50px rgba(15, 23, 42, 0.22)":"0 22px 55px rgba(0, 0, 0, 0.78), 0 0 28px rgba(56, 189, 248, 0.22)",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",style:{width:52,height:52,marginBottom:10,filter:"drop-shadow(0 0 14px rgba(56, 189, 248, 0.6))"}}),C.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"3px 11px",borderRadius:999,background:"rgba(56, 189, 248, 0.16)",border:"1px solid rgba(56, 189, 248, 0.42)",color:t==="light"?"#0284C7":"#38BDF8",fontSize:10,fontWeight:800,letterSpacing:"0.6px",textTransform:"uppercase",marginBottom:8},children:"NEW UPDATE AVAILABLE"}),C.jsxs("div",{style:{fontSize:18,fontWeight:800,color:t==="light"?"#0F172A":"#F8FAFC",marginBottom:6,lineHeight:1.25},children:["Garuda Infinity V",j.latestAppVersion]}),C.jsxs("p",{style:{fontSize:12.5,lineHeight:1.55,color:t==="light"?"#334155":"#CBD5E1",margin:"0 0 12px 0"},children:["A new update (",C.jsxs("strong",{children:["V",j.latestAppVersion]}),") is ready to install. Tap or visit Settings to update from ",wo,"."]}),C.jsxs("div",{style:{width:"100%",fontSize:11.5,fontWeight:700,color:"#10B981",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.34)",borderRadius:10,padding:"7px 12px"},children:["Current: ",wo," → New Version: V",j.latestAppVersion]})]})}),C.jsxs("nav",{"aria-label":"Primary Navigation",className:"u-nav-rail",children:[C.jsxs("button",{onClick:()=>e("vpn"),className:"u-nav-brand-btn",title:"Garuda Infinity 3D Dashboard","aria-label":"Garuda Infinity Home",children:[C.jsx("img",{src:"/garuda-favicon.svg",alt:"Garuda Infinity",className:"u-nav-brand-logo",style:{filter:ue?"drop-shadow(0 0 10px rgba(16, 185, 129, 0.55))":"drop-shadow(0 0 8px rgba(59, 130, 246, 0.45))"}}),C.jsx("span",{className:"u-nav-brand-title",children:"Garuda Infinity"})]}),C.jsxs("div",{className:"u-nav-center",children:[C.jsxs("button",{onClick:()=>e("vpn"),"aria-current":s==="vpn"?"page":void 0,className:"u-nav-tab-btn",style:{border:s==="vpn"?"1px solid rgba(59, 130, 246, 0.45)":"1px solid var(--uv-border)",backgroundColor:s==="vpn"?"rgba(59, 130, 246, 0.18)":"var(--uv-surface-card)",color:s==="vpn"?"var(--uv-text-heading)":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"background-color 150ms ease, color 150ms ease"},children:[C.jsx(O_,{size:17,color:ue?"#10B981":s==="vpn"?"#60A5FA":"currentColor","aria-hidden":"true"}),C.jsx("span",{style:{fontSize:11,fontWeight:700},children:"VPN"}),C.jsx("span",{"aria-hidden":"true",className:"u-nav-status-dot",style:{width:6,height:6,borderRadius:"50%",backgroundColor:ue?"#10B981":"#F43F5E"}})]}),C.jsxs("button",{onClick:()=>e("ipconfig"),"aria-current":s==="ipconfig"?"page":void 0,className:"u-nav-tab-btn",title:"Live IP & Activity Logs",style:{border:s==="ipconfig"?"1px solid rgba(59, 130, 246, 0.45)":"1px solid var(--uv-border)",backgroundColor:s==="ipconfig"?"rgba(59, 130, 246, 0.18)":"var(--uv-surface-card)",color:s==="ipconfig"?"var(--uv-text-heading)":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative",transition:"background-color 150ms ease, color 150ms ease"},children:[C.jsx(T_,{size:17,color:s==="ipconfig"?"#60A5FA":"currentColor","aria-hidden":"true"}),C.jsx("span",{style:{fontSize:10.5,fontWeight:700,whiteSpace:"nowrap"},children:"IP & Log"})]}),C.jsx("button",{onClick:()=>e("settings"),"aria-current":s==="settings"?"page":void 0,title:"Settings","aria-label":"Settings",className:"u-nav-icon-btn",style:{border:s==="settings"?"1px solid rgba(59, 130, 246, 0.5)":"1px solid var(--uv-border)",backgroundColor:s==="settings"?"rgba(59, 130, 246, 0.2)":"var(--uv-surface-card)",color:s==="settings"?"#60A5FA":"var(--uv-text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background-color 150ms ease, color 150ms ease, border-color 150ms ease"},children:C.jsx(U_,{size:17,color:s==="settings"?"#60A5FA":"currentColor","aria-hidden":"true"})})]}),C.jsxs("div",{className:"u-nav-bottom",children:[C.jsx("button",{onClick:d,className:"u-nav-icon-btn u-nav-orbit-btn",title:`3D View: ${a.toUpperCase()} (Click to cycle)`,"aria-label":`Cycle 3D camera mode, currently ${a}`,style:{border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:C.jsx(I_,{size:16,color:"#38BDF8","aria-hidden":"true"})}),C.jsx("button",{onClick:c,className:"u-nav-icon-btn",title:t==="dark"?"Switch to Light Mode":"Switch to Dark Cyber Mode","aria-label":t==="dark"?"Switch to Light Mode":"Switch to Dark Mode",style:{border:"1px solid var(--uv-border)",backgroundColor:"var(--uv-surface-card)",color:"var(--uv-text-body)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t==="dark"?C.jsx(G0,{size:16,color:"#FBBF24","aria-hidden":"true"}):C.jsx(z0,{size:16,color:"#3B82F6","aria-hidden":"true"})})]})]}),s==="vpn"?C.jsx(aT,{vpnStatus:Me,realIpInfo:ne,locations:fg,allLocations:h,showExtendedCatalog:!1,onToggleExtendedCatalog:()=>{},selectedLocationIso:v,onSelectLocation:x,onRequestConnection:kt,onConnectButtonClick:O,onRotateIp:M,isStreamingMode:E,onSetStreamingMode:A,connectionElapsedFormatted:mT(yt),lookingForBestServer:W,onRefreshLocations:()=>{},serviceBridgeConnected:!!(L||w||!0),rxBytes:_t,txBytes:Ut,onVerifyIp:ie,ipVerificationResult:ge,isVerifyingIp:z,activeCountryTimeInfo:Ne,cameraMode:a,onChangeCameraMode:l,theme:t}):s==="ipconfig"?C.jsx(hT,{vpnStatus:Me,selectedLocationObj:ye,realIpInfo:ne,onVerifyIp:ie,ipVerificationResult:ge,isVerifyingIp:z,activeCountryTimeInfo:Ne,activityLogs:Gt,onClearLogs:()=>$t([{id:Date.now(),time:Ne.time24,type:"info",msg:"Activity logs cleared."}]),theme:t}):C.jsx(lT,{vpnProtocol:g,onChangeProtocol:pe=>{y(pe),es({type:"UPDATE_SETTINGS",protocol:pe},2e3)},isStreamingMode:E,onToggleStreamingMode:()=>A(pe=>!pe),appAutoStart:S,onToggleAppAutoStart:()=>_(pe=>!pe),autoCutoffOnTabClose:P,onToggleAutoCutoff:()=>F(pe=>!pe),dynamicIpRotation:b,onToggleDynamicIp:()=>{I(pe=>{const oe=!pe;try{localStorage.setItem("garuda_infinity_dynamic_ip",String(oe))}catch{}return es({type:"UPDATE_SETTINGS",dynamicIpRotation:oe},2e3),oe})},theme:t,onToggleTheme:c,cameraMode:a,onChangeCameraMode:l,serviceBridgeConnected:!!(L||w),isAndroidApp:w,updateInfo:j,isCheckingUpdate:le,onCheckForUpdate:$})]})}M_.createRoot(document.getElementById("root")).render(C.jsx(k0.StrictMode,{children:C.jsx(yT,{})}));"serviceWorker"in navigator&&(typeof window<"u"&&(!!window.GarudaAndroidBridge||window.location.hostname==="appassets.garudainfinity.local"||window.location.protocol==="chrome-extension:"||window.location.protocol==="file:")?navigator.serviceWorker.getRegistrations().then(e=>{for(const t of e)t.unregister().catch(()=>{})}).catch(()=>{}):window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})}));
