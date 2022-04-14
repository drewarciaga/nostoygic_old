(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_ColorPicker_vue"],{

/***/ "./node_modules/@aesoper/normal-utils/NormalUtils.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aesoper/normal-utils/NormalUtils.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayUtils": () => (/* binding */ Yo),
/* harmony export */   "BrowserUtils": () => (/* binding */ Bt),
/* harmony export */   "DOMUtils": () => (/* binding */ Vn),
/* harmony export */   "DateUtils": () => (/* binding */ Go),
/* harmony export */   "NumberUtils": () => (/* binding */ Vo),
/* harmony export */   "ObjectUtils": () => (/* binding */ rr),
/* harmony export */   "StringUtils": () => (/* binding */ nr),
/* harmony export */   "hasOwn": () => (/* binding */ Nn),
/* harmony export */   "identity": () => (/* binding */ Xo),
/* harmony export */   "isArray": () => (/* binding */ Fn),
/* harmony export */   "isBool": () => (/* binding */ Ln),
/* harmony export */   "isDate": () => (/* binding */ Rn),
/* harmony export */   "isDef": () => (/* binding */ Hn),
/* harmony export */   "isEmpty": () => (/* binding */ Xn),
/* harmony export */   "isFunction": () => (/* binding */ In),
/* harmony export */   "isHTMLElement": () => (/* binding */ Bn),
/* harmony export */   "isMap": () => (/* binding */ Wn),
/* harmony export */   "isNull": () => (/* binding */ Gn),
/* harmony export */   "isNumber": () => (/* binding */ Pn),
/* harmony export */   "isObject": () => (/* binding */ Mn),
/* harmony export */   "isPromise": () => (/* binding */ Yn),
/* harmony export */   "isSet": () => (/* binding */ zn),
/* harmony export */   "isString": () => (/* binding */ jn),
/* harmony export */   "isSymbol": () => (/* binding */ Cn),
/* harmony export */   "noop": () => (/* binding */ Ho),
/* harmony export */   "objectToString": () => (/* binding */ _n),
/* harmony export */   "toRawType": () => (/* binding */ $n),
/* harmony export */   "toTypeString": () => (/* binding */ Dn)
/* harmony export */ });
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function e(t){var e={exports:{}};return t(e,e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,c={f:a&&!u.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:u},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,s=function(t){return f.call(t).slice(8,-1)},d="".split,v=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?d.call(t,""):Object(t)}:Object,p=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return v(p(t))},h=function(t){return"object"==typeof t?null!==t:"function"==typeof t},y=function(t,e){if(!h(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!h(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!h(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,S=function(t,e){return m.call(t,e)},x=r.document,b=h(x)&&h(x.createElement),E=function(t){return b?x.createElement(t):{}},w=!i&&!o((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,T={f:i?O:function(t,e){if(t=g(t),e=y(e,!0),w)try{return O(t,e)}catch(t){}if(S(t,e))return l(!c.f.call(t,e),t[e])}},A=function(t){if(!h(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,R={f:i?k:function(t,e,n){if(A(t),e=y(e,!0),A(n),w)try{return k(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},I=i?function(t,e,n){return R.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},j=function(t,e){try{I(r,t,e)}catch(n){r[t]=e}return e},C=r["__core-js_shared__"]||j("__core-js_shared__",{}),L=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return L.call(t)});var P,M,_,D=C.inspectSource,U=r.WeakMap,N="function"==typeof U&&/native code/.test(D(U)),F=e((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),W=0,z=Math.random(),$=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+z).toString(36)},B=F("keys"),Y=function(t){return B[t]||(B[t]=$(t))},G={},H=r.WeakMap;if(N){var X=C.state||(C.state=new H),V=X.get,K=X.has,q=X.set;P=function(t,e){return e.facade=t,q.call(X,t,e),e},M=function(t){return V.call(X,t)||{}},_=function(t){return K.call(X,t)}}else{var Q=Y("state");G[Q]=!0,P=function(t,e){return e.facade=t,I(t,Q,e),e},M=function(t){return S(t,Q)?t[Q]:{}},_=function(t){return S(t,Q)}}var J={set:P,get:M,has:_,enforce:function(t){return _(t)?M(t):P(t,{})},getterFor:function(t){return function(e){var n;if(!h(e)||(n=M(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=J.get,n=J.enforce,o=String(String).split("String");(t.exports=function(t,e,i,u){var a,c=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof e||S(i,"name")||I(i,"name",e),(a=n(i)).source||(a.source=o.join("string"==typeof e?e:""))),t!==r?(c?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=i:I(t,e,i)):l?t[e]=i:j(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||D(this)}))})),tt=r,et=function(t){return"function"==typeof t?t:void 0},nt=function(t,e){return arguments.length<2?et(tt[t])||et(r[t]):tt[t]&&tt[t][e]||r[t]&&r[t][e]},rt=Math.ceil,ot=Math.floor,it=function(t){return isNaN(t=+t)?0:(t>0?ot:rt)(t)},ut=Math.min,at=function(t){return t>0?ut(it(t),9007199254740991):0},ct=Math.max,lt=Math.min,ft=function(t,e){var n=it(t);return n<0?ct(n+e,0):lt(n,e)},st=function(t){return function(e,n,r){var o,i=g(e),u=at(i.length),a=ft(r,u);if(t&&n!=n){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},dt={includes:st(!0),indexOf:st(!1)},vt=dt.indexOf,pt=function(t,e){var n,r=g(t),o=0,i=[];for(n in r)!S(G,n)&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~vt(i,n)||i.push(n));return i},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ht=gt.concat("length","prototype"),yt={f:Object.getOwnPropertyNames||function(t){return pt(t,ht)}},mt={f:Object.getOwnPropertySymbols},St=nt("Reflect","ownKeys")||function(t){var e=yt.f(A(t)),n=mt.f;return n?e.concat(n(t)):e},xt=function(t,e){for(var n=St(e),r=R.f,o=T.f,i=0;i<n.length;i++){var u=n[i];S(t,u)||r(t,u,o(e,u))}},bt=/#|\.prototype\./,Et=function(t,e){var n=Ot[wt(t)];return n==At||n!=Tt&&("function"==typeof e?o(e):!!e)},wt=Et.normalize=function(t){return String(t).replace(bt,".").toLowerCase()},Ot=Et.data={},Tt=Et.NATIVE="N",At=Et.POLYFILL="P",kt=Et,Rt=T.f,It=function(t,e){var n,o,i,u,a,c=t.target,l=t.global,f=t.stat;if(n=l?r:f?r[c]||j(c,{}):(r[c]||{}).prototype)for(o in e){if(u=e[o],i=t.noTargetGet?(a=Rt(n,o))&&a.value:n[o],!kt(l?o:c+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;xt(u,i)}(t.sham||i&&i.sham)&&I(u,"sham",!0),Z(n,o,u,t)}},jt=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))},Ct=Object.defineProperty,Lt={},Pt=function(t){throw t},Mt=function(t,e){if(S(Lt,t))return Lt[t];e||(e={});var n=[][t],r=!!S(e,"ACCESSORS")&&e.ACCESSORS,u=S(e,0)?e[0]:Pt,a=S(e,1)?e[1]:void 0;return Lt[t]=!!n&&!o((function(){if(r&&!i)return!0;var t={length:-1};r?Ct(t,1,{enumerable:!0,get:Pt}):t[1]=1,n.call(t,u,a)}))},_t=dt.indexOf,Dt=[].indexOf,Ut=!!Dt&&1/[1].indexOf(1,-0)<0,Nt=jt("indexOf"),Ft=Mt("indexOf",{ACCESSORS:!0,1:0});function Wt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function zt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $t(t,e,n){return e&&zt(t.prototype,e),n&&zt(t,n),t}It({target:"Array",proto:!0,forced:Ut||!Nt||!Ft},{indexOf:function(t){return Ut?Dt.apply(this,arguments)||0:_t(this,t,arguments.length>1?arguments[1]:void 0)}});var Bt=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"isInBrowser",value:function(){return"undefined"!=typeof window}},{key:"isServer",value:function(){return"undefined"==typeof window}},{key:"getUA",value:function(){return t.isInBrowser()?window.navigator.userAgent.toLowerCase():""}},{key:"isMobile",value:function(){return/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion)}},{key:"isOpera",value:function(){return-1!==navigator.userAgent.indexOf("Opera")}},{key:"isIE",value:function(){var e=t.getUA();return""!==e&&e.indexOf("msie")>0}},{key:"isIE9",value:function(){var e=t.getUA();return""!==e&&e.indexOf("msie 9.0")>0}},{key:"isEdge",value:function(){var e=t.getUA();return""!==e&&e.indexOf("edge/")>0}},{key:"isChrome",value:function(){var e=t.getUA();return""!==e&&/chrome\/\d+/.test(e)&&!t.isEdge()}},{key:"isPhantomJS",value:function(){var e=t.getUA();return""!==e&&/phantomjs/.test(e)}},{key:"isFirefox",value:function(){var e=t.getUA();return""!==e&&/firefox/.test(e)}}]),t}(),Yt=[].join,Gt=v!=Object,Ht=jt("join",",");It({target:"Array",proto:!0,forced:Gt||!Ht},{join:function(t){return Yt.call(g(this),void 0===t?",":t)}});var Xt,Vt,Kt=function(t){return Object(p(t))},qt=Array.isArray||function(t){return"Array"==s(t)},Qt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),Jt=Qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Zt=F("wks"),te=r.Symbol,ee=Jt?te:te&&te.withoutSetter||$,ne=function(t){return S(Zt,t)||(Qt&&S(te,t)?Zt[t]=te[t]:Zt[t]=ee("Symbol."+t)),Zt[t]},re=ne("species"),oe=function(t,e){var n;return qt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!qt(n.prototype)?h(n)&&null===(n=n[re])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},ie=function(t,e,n){var r=y(e);r in t?R.f(t,r,l(0,n)):t[r]=n},ue=nt("navigator","userAgent")||"",ae=r.process,ce=ae&&ae.versions,le=ce&&ce.v8;le?Vt=(Xt=le.split("."))[0]+Xt[1]:ue&&(!(Xt=ue.match(/Edge\/(\d+)/))||Xt[1]>=74)&&(Xt=ue.match(/Chrome\/(\d+)/))&&(Vt=Xt[1]);var fe=Vt&&+Vt,se=ne("species"),de=function(t){return fe>=51||!o((function(){var e=[];return(e.constructor={})[se]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ve=de("splice"),pe=Mt("splice",{ACCESSORS:!0,0:0,1:2}),ge=Math.max,he=Math.min;It({target:"Array",proto:!0,forced:!ve||!pe},{splice:function(t,e){var n,r,o,i,u,a,c=Kt(this),l=at(c.length),f=ft(t,l),s=arguments.length;if(0===s?n=r=0:1===s?(n=0,r=l-f):(n=s-2,r=he(ge(it(e),0),l-f)),l+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=oe(c,r),i=0;i<r;i++)(u=f+i)in c&&ie(o,i,c[u]);if(o.length=r,n<r){for(i=f;i<l-r;i++)a=i+n,(u=i+r)in c?c[a]=c[u]:delete c[a];for(i=l;i>l-r+n;i--)delete c[i-1]}else if(n>r)for(i=l-r;i>f;i--)a=i+n-1,(u=i+r-1)in c?c[a]=c[u]:delete c[a];for(i=0;i<n;i++)c[i+f]=arguments[i+2];return c.length=l-r+n,o}});var ye={};ye[ne("toStringTag")]="z";var me="[object z]"===String(ye),Se=ne("toStringTag"),xe="Arguments"==s(function(){return arguments}()),be=me?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Se))?n:xe?s(e):"Object"==(r=s(e))&&"function"==typeof e.callee?"Arguments":r},Ee=me?{}.toString:function(){return"[object "+be(this)+"]"};me||Z(Object.prototype,"toString",Ee,{unsafe:!0});var we=function(){var t=A(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Oe(t,e){return RegExp(t,e)}var Te,Ae,ke={UNSUPPORTED_Y:o((function(){var t=Oe("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:o((function(){var t=Oe("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},Re=RegExp.prototype.exec,Ie=String.prototype.replace,je=Re,Ce=(Te=/a/,Ae=/b*/g,Re.call(Te,"a"),Re.call(Ae,"a"),0!==Te.lastIndex||0!==Ae.lastIndex),Le=ke.UNSUPPORTED_Y||ke.BROKEN_CARET,Pe=void 0!==/()??/.exec("")[1];(Ce||Pe||Le)&&(je=function(t){var e,n,r,o,i=this,u=Le&&i.sticky,a=we.call(i),c=i.source,l=0,f=t;return u&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",f=" "+f,l++),n=new RegExp("^(?:"+c+")",a)),Pe&&(n=new RegExp("^"+c+"$(?!\\s)",a)),Ce&&(e=i.lastIndex),r=Re.call(u?n:i,f),u?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Ce&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Pe&&r&&r.length>1&&Ie.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var Me=je;It({target:"RegExp",proto:!0,forced:/./.exec!==Me},{exec:Me});var _e=RegExp.prototype,De=_e.toString,Ue=o((function(){return"/a/b"!=De.call({source:"a",flags:"b"})})),Ne="toString"!=De.name;(Ue||Ne)&&Z(RegExp.prototype,"toString",(function(){var t=A(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in _e)?we.call(t):n)}),{unsafe:!0});var Fe=ne("species"),We=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),ze="$0"==="a".replace(/./,"$0"),$e=ne("replace"),Be=!!/./[$e]&&""===/./[$e]("a","$0"),Ye=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Ge=function(t,e,n,r){var i=ne(t),u=!o((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=u&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Fe]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!u||!a||"replace"===t&&(!We||!ze||Be)||"split"===t&&!Ye){var c=/./[i],l=n(i,""[t],(function(t,e,n,r,o){return e.exec===Me?u&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:ze,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Be}),f=l[0],s=l[1];Z(String.prototype,t,f),Z(RegExp.prototype,i,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)})}r&&I(RegExp.prototype[i],"sham",!0)},He=ne("match"),Xe=function(t){var e;return h(t)&&(void 0!==(e=t[He])?!!e:"RegExp"==s(t))},Ve=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Ke=ne("species"),qe=function(t){return function(e,n){var r,o,i=String(p(e)),u=it(n),a=i.length;return u<0||u>=a?t?"":void 0:(r=i.charCodeAt(u))<55296||r>56319||u+1===a||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):r:t?i.slice(u,u+2):o-56320+(r-55296<<10)+65536}},Qe={codeAt:qe(!1),charAt:qe(!0)},Je=Qe.charAt,Ze=function(t,e,n){return e+(n?Je(t,e).length:1)},tn=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return Me.call(t,e)},en=[].push,nn=Math.min,rn=!o((function(){return!RegExp(4294967295,"y")}));Ge("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(p(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!Xe(t))return e.call(r,t,o);for(var i,u,a,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=Me.call(s,r))&&!((u=s.lastIndex)>f&&(c.push(r.slice(f,i.index)),i.length>1&&i.index<r.length&&en.apply(c,i.slice(1)),a=i[0].length,f=u,c.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!a&&s.test("")||c.push(""):c.push(r.slice(f)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=p(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var u=A(t),a=String(this),c=function(t,e){var n,r=A(t).constructor;return void 0===r||null==(n=A(r)[Ke])?e:Ve(n)}(u,RegExp),l=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(rn?"y":"g"),s=new c(rn?u:"^(?:"+u.source+")",f),d=void 0===o?4294967295:o>>>0;if(0===d)return[];if(0===a.length)return null===tn(s,a)?[a]:[];for(var v=0,p=0,g=[];p<a.length;){s.lastIndex=rn?p:0;var h,y=tn(s,rn?a:a.slice(p));if(null===y||(h=nn(at(s.lastIndex+(rn?0:p)),a.length))===v)p=Ze(a,p,l);else{if(g.push(a.slice(v,p)),g.length===d)return g;for(var m=1;m<=y.length-1;m++)if(g.push(y[m]),g.length===d)return g;p=v=h}}return g.push(a.slice(v)),g}]}),!rn);var on="\t\n\v\f\r                　\u2028\u2029\ufeff",un="["+on+"]",an=RegExp("^"+un+un+"*"),cn=RegExp(un+un+"*$"),ln=function(t){return function(e){var n=String(p(e));return 1&t&&(n=n.replace(an,"")),2&t&&(n=n.replace(cn,"")),n}},fn={start:ln(1),end:ln(2),trim:ln(3)},sn=fn.trim;It({target:"String",proto:!0,forced:function(t){return o((function(){return!!on[t]()||"​᠎"!="​᠎"[t]()||on[t].name!==t}))}("trim")},{trim:function(){return sn(this)}});var dn=de("slice"),vn=Mt("slice",{ACCESSORS:!0,0:0,1:2}),pn=ne("species"),gn=[].slice,hn=Math.max;It({target:"Array",proto:!0,forced:!dn||!vn},{slice:function(t,e){var n,r,o,i=g(this),u=at(i.length),a=ft(t,u),c=ft(void 0===e?u:e,u);if(qt(i)&&("function"!=typeof(n=i.constructor)||n!==Array&&!qt(n.prototype)?h(n)&&null===(n=n[pn])&&(n=void 0):n=void 0,n===Array||void 0===n))return gn.call(i,a,c);for(r=new(void 0===n?Array:n)(hn(c-a,0)),o=0;a<c;a++,o++)a in i&&ie(r,o,i[a]);return r.length=o,r}});var yn=Object.keys||function(t){return pt(t,gt)},mn=o((function(){yn(1)}));It({target:"Object",stat:!0,forced:mn},{keys:function(t){return yn(Kt(t))}});var Sn,xn=function(t){if(Xe(t))throw TypeError("The method doesn't accept regular expressions");return t},bn=ne("match"),En=T.f,wn="".startsWith,On=Math.min,Tn=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[bn]=!1,"/./"[t](e)}catch(t){}}return!1}("startsWith"),An=!(Tn||(Sn=En(String.prototype,"startsWith"),!Sn||Sn.writable));function kn(t){return(kn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}It({target:"String",proto:!0,forced:!An&&!Tn},{startsWith:function(t){var e=String(p(this));xn(t);var n=at(On(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return wn?wn.call(e,r,n):e.slice(n,n+r.length)===r}});var Rn=function(t){return t instanceof Date},In=function(t){return"function"==typeof t},jn=function(t){return"string"==typeof t},Cn=function(t){return"symbol"===kn(t)},Ln=function(t){return"boolean"==typeof t},Pn=function(t){return"number"==typeof t},Mn=function(t){return null!==t&&"object"===kn(t)},_n=Object.prototype.toString,Dn=function(t){return _n.call(t)},Un=Object.prototype.hasOwnProperty,Nn=function(t,e){return Un.call(t,e)},Fn=Array.isArray,Wn=function(t){return"[object Map]"===Dn(t)},zn=function(t){return"[object Set]"===Dn(t)},$n=function(t){return Dn(t).slice(8,-1)},Bn=function(t){return $n(t).startsWith("HTML")},Yn=function(t){return Mn(t)&&In(t.then)&&In(t.catch)},Gn=function(t){return null===t},Hn=function(t){return void 0===t},Xn=function(t){return!t&&0!==t&&""!==t||Fn(t)&&!t.length||Mn(t)&&!Object.keys(t).length},Vn=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"isWindow",value:function(t){return t===window}},{key:"addEventListener",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t&&e&&n&&t.addEventListener(e,n,r)}},{key:"removeEventListener",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t&&e&&n&&t.removeEventListener(e,n,r)}},{key:"triggerDragEvent",value:function(e,n){var r=!1,o=function(t){var e;null===(e=n.drag)||void 0===e||e.call(n,t)},i=function e(i){var u;t.removeEventListener(document,"mousemove",o),t.removeEventListener(document,"mouseup",e),document.onselectstart=null,document.ondragstart=null,r=!1,null===(u=n.end)||void 0===u||u.call(n,i)};t.addEventListener(e,"mousedown",(function(e){var u;r||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},t.addEventListener(document,"mousemove",o),t.addEventListener(document,"mouseup",i),r=!0,null===(u=n.start)||void 0===u||u.call(n,e))}))}},{key:"getBoundingClientRect",value:function(t){return t&&Mn(t)&&1===t.nodeType?t.getBoundingClientRect():null}},{key:"hasClass",value:function(t,e){return!!(t&&Mn(t)&&jn(e)&&1===t.nodeType)&&t.classList.contains(e.trim())}},{key:"addClass",value:function(e,n){if(e&&Mn(e)&&jn(n)&&1===e.nodeType&&(n=n.trim(),!t.hasClass(e,n))){var r=e.className;e.className=r?r+" "+n:n}}},{key:"removeClass",value:function(t,e){if(t&&Mn(t)&&jn(e)&&1===t.nodeType&&"string"==typeof t.className){e=e.trim();for(var n=t.className.trim().split(" "),r=n.length-1;r>=0;r--)n[r]=n[r].trim(),n[r]&&n[r]!==e||n.splice(r,1);t.className=n.join(" ")}}},{key:"toggleClass",value:function(t,e,n){t&&Mn(t)&&jn(e)&&1===t.nodeType&&t.classList.toggle(e,n)}},{key:"replaceClass",value:function(e,n,r){e&&Mn(e)&&jn(n)&&jn(r)&&1===e.nodeType&&(n=n.trim(),r=r.trim(),t.removeClass(e,n),t.addClass(e,r))}},{key:"getScrollTop",value:function(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}},{key:"setScrollTop",value:function(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}},{key:"getRootScrollTop",value:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},{key:"setRootScrollTop",value:function(e){t.setScrollTop(window,e),t.setScrollTop(document.body,e)}},{key:"getElementTop",value:function(e,n){if(t.isWindow(e))return 0;var r=n?t.getScrollTop(n):t.getRootScrollTop();return e.getBoundingClientRect().top+r}},{key:"getVisibleHeight",value:function(e){return t.isWindow(e)?e.innerHeight:e.getBoundingClientRect().height}},{key:"isHidden",value:function(t){if(!t)return!1;var e=window.getComputedStyle(t),n="none"===e.display,r=null===t.offsetParent&&"fixed"!==e.position;return n||r}},{key:"triggerEvent",value:function(t,e){if("createEvent"in document){var n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n)}}},{key:"calcAngle",value:function(t,e){var n=t.getBoundingClientRect(),r=n.left+n.width/2,o=n.top+n.height/2,i=Math.abs(r-e.clientX),u=Math.abs(o-e.clientY),a=u/Math.sqrt(Math.pow(i,2)+Math.pow(u,2)),c=Math.acos(a),l=Math.floor(180/(Math.PI/c));return e.clientX>r&&e.clientY>o&&(l=180-l),e.clientX==r&&e.clientY>o&&(l=180),e.clientX>r&&e.clientY==o&&(l=90),e.clientX<r&&e.clientY>o&&(l=180+l),e.clientX<r&&e.clientY==o&&(l=270),e.clientX<r&&e.clientY<o&&(l=360-l),l}},{key:"querySelector",value:function(t,e){return e?e.querySelector(t):document.querySelector(t)}},{key:"createElement",value:function(t){for(var e=document.createElement(t),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var i=0;i<r.length;i++)r[i]&&e.classList.add(r[i]);return e}},{key:"appendChild",value:function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++)t.appendChild(e+1<1||arguments.length<=e+1?void 0:arguments[e+1])}},{key:"getWindow",value:function(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}},{key:"isElement",value:function(t){return t instanceof this.getWindow(t).Element||t instanceof Element}},{key:"isHTMLElement",value:function(t){return t instanceof this.getWindow(t).HTMLElement||t instanceof HTMLElement}},{key:"isShadowRoot",value:function(t){return"undefined"!=typeof ShadowRoot&&(t instanceof this.getWindow(t).ShadowRoot||t instanceof ShadowRoot)}},{key:"getWindowScroll",value:function(t){var e=this.getWindow(t);return{scrollLeft:e.pageXOffset||0,scrollTop:e.pageYOffset||0}}}]),t}(),Kn=Math.floor,qn="".replace,Qn=/\$([$&'`]|\d\d?|<[^>]*>)/g,Jn=/\$([$&'`]|\d\d?)/g,Zn=function(t,e,n,r,o,i){var u=n+t.length,a=r.length,c=Jn;return void 0!==o&&(o=Kt(o),c=Qn),qn.call(i,c,(function(i,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(u);case"<":l=o[c.slice(1,-1)];break;default:var f=+c;if(0===f)return i;if(f>a){var s=Kn(f/10);return 0===s?i:s<=a?void 0===r[s-1]?c.charAt(1):r[s-1]+c.charAt(1):i}l=r[f-1]}return void 0===l?"":l}))},tr=Math.max,er=Math.min;Ge("replace",2,(function(t,e,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,u=o?"$":"$0";return[function(n,r){var o=p(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(u)){var a=n(e,t,this,r);if(a.done)return a.value}var c=A(t),l=String(this),f="function"==typeof r;f||(r=String(r));var s=c.global;if(s){var d=c.unicode;c.lastIndex=0}for(var v=[];;){var p=tn(c,l);if(null===p)break;if(v.push(p),!s)break;""===String(p[0])&&(c.lastIndex=Ze(l,at(c.lastIndex),d))}for(var g,h="",y=0,m=0;m<v.length;m++){p=v[m];for(var S=String(p[0]),x=tr(er(it(p.index),l.length),0),b=[],E=1;E<p.length;E++)b.push(void 0===(g=p[E])?g:String(g));var w=p.groups;if(f){var O=[S].concat(b,x,l);void 0!==w&&O.push(w);var T=String(r.apply(void 0,O))}else T=Zn(S,l,x,b,w,r);x>=y&&(h+=l.slice(y,x)+T,y=x+S.length)}return h+l.slice(y)}]}));var nr=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"camelize",value:function(t){return t.replace(/-(\w)/g,(function(t,e){return e?e.toUpperCase():""}))}},{key:"capitalize",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}]),t}(),rr=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"_clone",value:function(){}}]),t}(),or=ne("isConcatSpreadable"),ir=fe>=51||!o((function(){var t=[];return t[or]=!1,t.concat()[0]!==t})),ur=de("concat"),ar=function(t){if(!h(t))return!1;var e=t[or];return void 0!==e?!!e:qt(t)};It({target:"Array",proto:!0,forced:!ir||!ur},{concat:function(t){var e,n,r,o,i,u=Kt(this),a=oe(u,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(ar(i=-1===e?u:arguments[e])){if(c+(o=at(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,c++)n in i&&ie(a,c,i[n])}else{if(c>=9007199254740991)throw TypeError("Maximum allowed index exceeded");ie(a,c++,i)}return a.length=c,a}});var cr,lr=function(t,e,n){if(Ve(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},fr=[].push,sr=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=7==t,a=5==t||i;return function(c,l,f,s){for(var d,p,g=Kt(c),h=v(g),y=lr(l,f,3),m=at(h.length),S=0,x=s||oe,b=e?x(c,m):n||u?x(c,0):void 0;m>S;S++)if((a||S in h)&&(p=y(d=h[S],S,g),t))if(e)b[S]=p;else if(p)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:fr.call(b,d)}else switch(t){case 4:return!1;case 7:fr.call(b,d)}return i?-1:r||o?o:b}},dr={forEach:sr(0),map:sr(1),filter:sr(2),some:sr(3),every:sr(4),find:sr(5),findIndex:sr(6),filterOut:sr(7)},vr=i?Object.defineProperties:function(t,e){A(t);for(var n,r=yn(e),o=r.length,i=0;o>i;)R.f(t,n=r[i++],e[n]);return t},pr=nt("document","documentElement"),gr=Y("IE_PROTO"),hr=function(){},yr=function(t){return"<script>"+t+"<\/script>"},mr=function(){try{cr=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;mr=cr?function(t){t.write(yr("")),t.close();var e=t.parentWindow.Object;return t=null,e}(cr):((e=E("iframe")).style.display="none",pr.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(yr("document.F=Object")),t.close(),t.F);for(var n=gt.length;n--;)delete mr.prototype[gt[n]];return mr()};G[gr]=!0;var Sr=Object.create||function(t,e){var n;return null!==t?(hr.prototype=A(t),n=new hr,hr.prototype=null,n[gr]=t):n=mr(),void 0===e?n:vr(n,e)},xr=ne("unscopables"),br=Array.prototype;null==br[xr]&&R.f(br,xr,{configurable:!0,value:Sr(null)});var Er=function(t){br[xr][t]=!0},wr=dr.find,Or=!0,Tr=Mt("find");"find"in[]&&Array(1).find((function(){Or=!1})),It({target:"Array",proto:!0,forced:Or||!Tr},{find:function(t){return wr(this,t,arguments.length>1?arguments[1]:void 0)}}),Er("find");var Ar=dr.findIndex,kr=!0,Rr=Mt("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){kr=!1})),It({target:"Array",proto:!0,forced:kr||!Rr},{findIndex:function(t){return Ar(this,t,arguments.length>1?arguments[1]:void 0)}}),Er("findIndex");var Ir=function(t,e,n,r,o,i,u,a){for(var c,l=o,f=0,s=!!u&&lr(u,a,3);f<r;){if(f in n){if(c=s?s(n[f],f,e):n[f],i>0&&qt(c))l=Ir(t,e,c,at(c.length),l,i-1)-1;else{if(l>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[l]=c}l++}f++}return l},jr=Ir;It({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=Kt(this),n=at(e.length),r=oe(e,0);return r.length=jr(r,e,e,n,0,void 0===t?1:it(t)),r}});var Cr=function(t){var e=t.return;if(void 0!==e)return A(e.call(t)).value},Lr=function(t,e,n,r){try{return r?e(A(n)[0],n[1]):e(n)}catch(e){throw Cr(t),e}},Pr={},Mr=ne("iterator"),_r=Array.prototype,Dr=function(t){return void 0!==t&&(Pr.Array===t||_r[Mr]===t)},Ur=ne("iterator"),Nr=function(t){if(null!=t)return t[Ur]||t["@@iterator"]||Pr[be(t)]},Fr=ne("iterator"),Wr=!1;try{var zr=0,$r={next:function(){return{done:!!zr++}},return:function(){Wr=!0}};$r[Fr]=function(){return this},Array.from($r,(function(){throw 2}))}catch(t){}var Br=function(t,e){if(!e&&!Wr)return!1;var n=!1;try{var r={};r[Fr]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n},Yr=!Br((function(t){Array.from(t)}));It({target:"Array",stat:!0,forced:Yr},{from:function(t){var e,n,r,o,i,u,a=Kt(t),c="function"==typeof this?this:Array,l=arguments.length,f=l>1?arguments[1]:void 0,s=void 0!==f,d=Nr(a),v=0;if(s&&(f=lr(f,l>2?arguments[2]:void 0,2)),null==d||c==Array&&Dr(d))for(n=new c(e=at(a.length));e>v;v++)u=s?f(a[v],v):a[v],ie(n,v,u);else for(i=(o=d.call(a)).next,n=new c;!(r=i.call(o)).done;v++)u=s?Lr(o,f,[r.value,v],!0):r.value,ie(n,v,u);return n.length=v,n}});var Gr=function(t){return function(e,n,r,o){Ve(n);var i=Kt(e),u=v(i),a=at(i.length),c=t?a-1:0,l=t?-1:1;if(r<2)for(;;){if(c in u){o=u[c],c+=l;break}if(c+=l,t?c<0:a<=c)throw TypeError("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=l)c in u&&(o=n(o,u[c],c,i));return o}},Hr={left:Gr(!1),right:Gr(!0)},Xr="process"==s(r.process),Vr=Hr.left,Kr=jt("reduce"),qr=Mt("reduce",{1:0});It({target:"Array",proto:!0,forced:!Kr||!qr||!Xr&&fe>79&&fe<83},{reduce:function(t){return Vr(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}}),Er("flat");var Qr,Jr,Zr,to=!o((function(){return Object.isExtensible(Object.preventExtensions({}))})),eo=e((function(t){var e=R.f,n=$("meta"),r=0,o=Object.isExtensible||function(){return!0},i=function(t){e(t,n,{value:{objectID:"O"+ ++r,weakData:{}}})},u=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!h(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!S(t,n)){if(!o(t))return"F";if(!e)return"E";i(t)}return t[n].objectID},getWeakData:function(t,e){if(!S(t,n)){if(!o(t))return!0;if(!e)return!1;i(t)}return t[n].weakData},onFreeze:function(t){return to&&u.REQUIRED&&o(t)&&!S(t,n)&&i(t),t}};G[n]=!0})),no=function(t,e){this.stopped=t,this.result=e},ro=function(t,e,n){var r,o,i,u,a,c,l,f=n&&n.that,s=!(!n||!n.AS_ENTRIES),d=!(!n||!n.IS_ITERATOR),v=!(!n||!n.INTERRUPTED),p=lr(e,f,1+s+v),g=function(t){return r&&Cr(r),new no(!0,t)},h=function(t){return s?(A(t),v?p(t[0],t[1],g):p(t[0],t[1])):v?p(t,g):p(t)};if(d)r=t;else{if("function"!=typeof(o=Nr(t)))throw TypeError("Target is not iterable");if(Dr(o)){for(i=0,u=at(t.length);u>i;i++)if((a=h(t[i]))&&a instanceof no)return a;return new no(!1)}r=o.call(t)}for(c=r.next;!(l=c.call(r)).done;){try{a=h(l.value)}catch(t){throw Cr(r),t}if("object"==typeof a&&a&&a instanceof no)return a}return new no(!1)},oo=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t},io=R.f,uo=ne("toStringTag"),ao=function(t,e,n){t&&!S(t=n?t:t.prototype,uo)&&io(t,uo,{configurable:!0,value:e})},co=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return A(n),function(t){if(!h(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),lo=function(t,e,n){for(var r in e)Z(t,r,e[r],n);return t},fo=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),so=Y("IE_PROTO"),vo=Object.prototype,po=fo?Object.getPrototypeOf:function(t){return t=Kt(t),S(t,so)?t[so]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?vo:null},go=ne("iterator"),ho=!1;[].keys&&("next"in(Zr=[].keys())?(Jr=po(po(Zr)))!==Object.prototype&&(Qr=Jr):ho=!0),(null==Qr||o((function(){var t={};return Qr[go].call(t)!==t})))&&(Qr={}),S(Qr,go)||I(Qr,go,(function(){return this}));var yo={IteratorPrototype:Qr,BUGGY_SAFARI_ITERATORS:ho},mo=yo.IteratorPrototype,So=function(){return this},xo=yo.IteratorPrototype,bo=yo.BUGGY_SAFARI_ITERATORS,Eo=ne("iterator"),wo=function(){return this},Oo=function(t,e,n,r,o,i,u){!function(t,e,n){var r=e+" Iterator";t.prototype=Sr(mo,{next:l(1,n)}),ao(t,r,!1),Pr[r]=So}(n,e,r);var a,c,f,s=function(t){if(t===o&&h)return h;if(!bo&&t in p)return p[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},d=e+" Iterator",v=!1,p=t.prototype,g=p[Eo]||p["@@iterator"]||o&&p[o],h=!bo&&g||s(o),y="Array"==e&&p.entries||g;if(y&&(a=po(y.call(new t)),xo!==Object.prototype&&a.next&&(po(a)!==xo&&(co?co(a,xo):"function"!=typeof a[Eo]&&I(a,Eo,wo)),ao(a,d,!0))),"values"==o&&g&&"values"!==g.name&&(v=!0,h=function(){return g.call(this)}),p[Eo]!==h&&I(p,Eo,h),Pr[e]=h,o)if(c={values:s("values"),keys:i?h:s("keys"),entries:s("entries")},u)for(f in c)(bo||v||!(f in p))&&Z(p,f,c[f]);else It({target:e,proto:!0,forced:bo||v},c);return c},To=ne("species"),Ao=R.f,ko=eo.fastKey,Ro=J.set,Io=J.getterFor;!function(t,e,n){var i=-1!==t.indexOf("Map"),u=-1!==t.indexOf("Weak"),a=i?"set":"add",c=r[t],l=c&&c.prototype,f=c,s={},d=function(t){var e=l[t];Z(l,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(u&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return u&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(u&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(kt(t,"function"!=typeof c||!(u||l.forEach&&!o((function(){(new c).entries().next()})))))f=n.getConstructor(e,t,i,a),eo.REQUIRED=!0;else if(kt(t,!0)){var v=new f,p=v[a](u?{}:-0,1)!=v,g=o((function(){v.has(1)})),y=Br((function(t){new c(t)})),m=!u&&o((function(){for(var t=new c,e=5;e--;)t[a](e,e);return!t.has(-0)}));y||((f=e((function(e,n){oo(e,f,t);var r=function(t,e,n){var r,o;return co&&"function"==typeof(r=e.constructor)&&r!==n&&h(o=r.prototype)&&o!==n.prototype&&co(t,o),t}(new c,e,f);return null!=n&&ro(n,r[a],{that:r,AS_ENTRIES:i}),r}))).prototype=l,l.constructor=f),(g||m)&&(d("delete"),d("has"),i&&d("get")),(m||p)&&d(a),u&&l.clear&&delete l.clear}s[t]=f,It({global:!0,forced:f!=c},s),ao(f,t),u||n.setStrong(f,t,i)}("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),{getConstructor:function(t,e,n,r){var o=t((function(t,u){oo(t,o,e),Ro(t,{type:e,index:Sr(null),first:void 0,last:void 0,size:0}),i||(t.size=0),null!=u&&ro(u,t[r],{that:t,AS_ENTRIES:n})})),u=Io(e),a=function(t,e,n){var r,o,a=u(t),l=c(t,e);return l?l.value=n:(a.last=l={index:o=ko(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=l),r&&(r.next=l),i?a.size++:t.size++,"F"!==o&&(a.index[o]=l)),t},c=function(t,e){var n,r=u(t),o=ko(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return lo(o.prototype,{clear:function(){for(var t=u(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,i?t.size=0:this.size=0},delete:function(t){var e=this,n=u(e),r=c(e,t);if(r){var o=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=o),o&&(o.previous=a),n.first==r&&(n.first=o),n.last==r&&(n.last=a),i?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=u(this),r=lr(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!c(this,t)}}),lo(o.prototype,n?{get:function(t){var e=c(this,t);return e&&e.value},set:function(t,e){return a(this,0===t?0:t,e)}}:{add:function(t){return a(this,t=0===t?0:t,t)}}),i&&Ao(o.prototype,"size",{get:function(){return u(this).size}}),o},setStrong:function(t,e,n){var r=e+" Iterator",o=Io(e),u=Io(r);Oo(t,e,(function(t,e){Ro(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=u(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),function(t){var e=nt(t),n=R.f;i&&e&&!e[To]&&n(e,To,{configurable:!0,get:function(){return this}})}(e)}});var jo=Qe.charAt,Co=J.set,Lo=J.getterFor("String Iterator");Oo(String,"String",(function(t){Co(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Lo(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=jo(n,r),e.index+=t.length,{value:t,done:!1})}));var Po={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Mo=J.set,_o=J.getterFor("Array Iterator"),Do=Oo(Array,"Array",(function(t,e){Mo(this,{type:"Array Iterator",target:g(t),index:0,kind:e})}),(function(){var t=_o(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");Pr.Arguments=Pr.Array,Er("keys"),Er("values"),Er("entries");var Uo=ne("iterator"),No=ne("toStringTag"),Fo=Do.values;for(var Wo in Po){var zo=r[Wo],$o=zo&&zo.prototype;if($o){if($o[Uo]!==Fo)try{I($o,Uo,Fo)}catch(t){$o[Uo]=Fo}if($o[No]||I($o,No,Wo),Po[Wo])for(var Bo in Do)if($o[Bo]!==Do[Bo])try{I($o,Bo,Do[Bo])}catch(t){$o[Bo]=Do[Bo]}}}var Yo=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"deduplicate",value:function(t){return Array.from(new Set(t))}},{key:"flat",value:function(e){return e.reduce((function(e,n){var r=Array.isArray(n)?t.flat(n):n;return e.concat(r)}),[])}},{key:"find",value:function(t,e){return t.find(e)}},{key:"findIndex",value:function(t,e){return t.findIndex(e)}}]),t}(),Go=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"today",value:function(){return new Date}}]),t}(),Ho=function(){},Xo=function(t){return t},Vo=function(){function t(){Wt(this,t)}return $t(t,null,[{key:"range",value:function(t,e,n){return Math.min(Math.max(t,e),n)}},{key:"clamp",value:function(t,e,n){return e<n?t<e?e:t>n?n:t:t<n?n:t>e?e:t}}]),t}();


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator),
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__["default"])
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(modifiers);

          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");


function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");















function getInnerBoundingClientRect(element) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;

  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);
    }

    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;

  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");







function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);

  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }

  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");


function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "write": () => (/* binding */ write),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.placement);
  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.within)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);

      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
    return [];
  }

  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement);
  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);

    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    }

    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyles": () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "arrow": () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "flip": () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "hide": () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "offset": () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");










/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distanceAndSkiddingToXY": () => (/* binding */ distanceAndSkiddingToXY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement);
  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "createPopperLite": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   "applyStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   "arrow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   "computeStyles": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   "eventListeners": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   "flip": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   "hide": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   "offset": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   "popperOffsets": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   "preventOverflow": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeAutoPlacement)
/* harmony export */ });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAltAxis)
/* harmony export */ });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositePlacement)
/* harmony export */ });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOppositeVariationPlacement)
/* harmony export */ });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "within": () => (/* binding */ within),
/* harmony export */   "withinMaxClamp": () => (/* binding */ withinMaxClamp)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");

function within(min, value, max) {
  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ColorPicker.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ColorPicker.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue3_colorpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-colorpicker */ "./node_modules/vue3-colorpicker/index.es.js");
/* harmony import */ var vue3_colorpicker_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-colorpicker/style.css */ "./node_modules/vue3-colorpicker/style.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  components: {
    ColorPicker: vue3_colorpicker__WEBPACK_IMPORTED_MODULE_0__.ColorPicker
  },
  setup: function setup() {
    var pureColor = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)("red");
    var gradientColor = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");
    return {
      pureColor: pureColor,
      gradientColor: gradientColor
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ColorPicker.vue?vue&type=template&id=7893d754":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ColorPicker.vue?vue&type=template&id=7893d754 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_color_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("color-picker", true);

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_color_picker, {
    pureColor: _ctx.pureColor,
    "onUpdate:pureColor": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.pureColor = $event;
    }),
    gradientColor: _ctx.gradientColor,
    "onUpdate:gradientColor": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.gradientColor = $event;
    })
  }, null, 8
  /* PROPS */
  , ["pureColor", "gradientColor"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-angle/style.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-angle/style.css ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bee-angle{transform:rotate(90deg)}.bee-angle>*{display:inline-block;vertical-align:middle}.bee-angle.zero-right{transform:rotate(180deg)}.bee-angle.zero-bottom{transform:rotate(270deg)}.bee-angle__round{position:relative;margin-left:8px;width:16px;height:16px;border:1px solid #666;border-radius:50%;cursor:pointer;display:inline-block;vertical-align:middle}.bee-angle__round:before{content:\"\";position:absolute;top:50%;left:0;transform:translateY(-50%);width:50%;height:1px;background-color:#666}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-colorpicker/style.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-colorpicker/style.css ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-alpha-slider{height:10px!important}.small-alpha-slider .small-bar{height:10px!important;width:10px!important}.small-alpha-slider .small-bar div{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.bee-alpha-slider{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.bee-alpha-slider.is-vertical{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.bee-alpha-slider.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-alpha-slider__bar{position:relative;width:100%;height:100%;border-radius:15px}.bee-alpha-slider__bar-pointer{position:absolute;width:14px;height:14px}.bee-alpha-slider__bar-handle{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.bee-alpha-slider__bar-handle.vertical{transform:translateY(-7px);margin-top:0}.bee-compact{margin-bottom:15px;width:auto;box-shadow:3px 0 5px #00000014;display:inline-block}.bee-compact__row{position:relative;width:100%;margin:0}.bee-compact__row>*{display:inline-block;vertical-align:middle}.bee-compact__color_cube{width:100%;height:100%}.bee-compact__color_cube.transparent:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:white}.bee-compact__color_cube.transparent:after{content:\"\";position:absolute;top:100%;left:0;transform:rotate(-45deg);transform-origin:0 0;width:35px;height:1px;background:red}.bee-compact__color_cube.advance{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABqVJREFUeNrEl11yHDUQx1ua2Zlde2M7jqESqnjg45kjcBwOwQG4BY+8cwWK17xBUUARICQhTmI7tte7Ozs7o+bXLTleuACpKNJqJP3789+doKoSPxfVGxFZioS1iK5Yd0nCJko9iLTVVvZSlCOp5FBF7vP5RFTelyDHvmYvMPPtiP19fu+HIHPetrllX2TLMJAOgEehti3ZY/Axap51ZB5ZDEnGMUoCNCmDbRv+2Q4CDJ5Mymj4OmE0CNj6b5WJlkel3xkiGXjOc0imDH/JDid1AXQEfKgccHg3lN+uhh+v2WkkOvCUnT3GjP2WOfrJzjUNPq/ugPUej1TiwME3+DfVUhWkEQF6LZraJxsp6xHLIzW/DNyAW75PGJVrOxbQFSeWzOsdjQ/tZHTxtSgdzAimMfOAdbas7crUvIWAqZg5+gg8FBzYTOygbo1tAb1xTYMs/q1xAFgnvBx5JrKO2X9pzJrJhr+b5BaY8vjG3O+w7HFnypkZ+zP3K8AWL7FHiRsJappe4knA9fo/pj7WrIrdshBs8cukcu0ljhK2lZt1Q8B1msMj5WCQKoibd8q8p1J8i6aWJnrJCcDljDX2Cm8Jn2WJC9PtIHpYeowza125Dc3c6CQ1MbEdooxoPQw54Ak9jigaKcAMk9ddgUi68ZxMmNbNG8hTXXjOZrPf+vg4C+RpRRJqO0ps8FxtzhoJLiSIHCWtLi9u5LiZyqKv0UvlHmaccukoVjJLFu2YUy946FRidS7beCXN9i3gKzd1Yo53ps7ppTnqEYD0mYNldpuxnvIo2nZb/L+ay9tulA/sJpE/Tfchj1H2kW2KpsFYSK4YgI1vZDJe57XmIAu642N5kCxUJfQ8bA48IKpWGNKi/T7rPWRMBMkp5lhz5mUlV0O+fGAGC5XMkTzoG349I/D+Qis0jpeZBt0CXaZGnwtwdcS7A/4ycOIi3bNI0pzfxoVHQYYDIu+A9djJ5bKX+c2BVKnHS5Xcw8QTecWlXxi/khgvYMFzHlp4/g74WREshg3zpuS9mfowShxyrnv6wFS2Dl12QUDwaO54xIWTKZem8up7M0ojn5BzdftEdPMzII9ljE8kVde8Z5y89PSJYcACAJhWTigFOO1rpqRbWs0pKjp4Nkl6OMiGQiFnKsOnLQNqJNe33yV5iFml/4YLfzB+wwpvuNoT+eq0F+JWYtp50MlXLBvUAkLlXXbdloHkUsREDsc6y9LDvs2pTNJD6eM5+x/KAslqWK/pOo/WEIvw3PC3q8rZz3IzWBqqp2CpTvjAACIVyFhLMQmlwXPU9gYrC+lCZs0VtPkc0Jfc+Va+XK/lK3Pr10XhF8ToAjf1VKktAH0hd3srqesSMmCJaiNwJB/IzNviF9Uor8NnndSkyRBfExbPpdHfKRg/yqH8JCPxdvbZVE6+6GTzmCD9Af45RfhzLGZZtEaIVQVdDpLwVByAHeIu8DXWGTySUil8wSNw6fMoliZnfHsqfXiC2M+gjJXX7wuEOvm4gWUBa9h4xrAAtwy6hHyWo1QQGc9gDkD7sAt8VjqETSnUHaArd0Gupc8ZBv4n4ymUfiEPxEu4/A3eyayX+x+ZZjjoIEl6D+2zrJJgyOoKf68RCKJXOpt4B3xZQNclwVeSbXVd2hXzKXlpqsC3c0ttyR3La6rTW2yyP1dpSbdowUtBji1+aAioxTZXD+ORZcrs+A5YF9kWnnfWeJUSZgnswKeZ7FNHkaeXgjTmowVhkhuQ1pQxCE1aik2A16OVVwtvayxmW6fdeDNKKcs79Zhy5eaFwIOXsxu3grolVsUVS0y0pAKN3tpMStdlheJajZ1V5rxWHxoJjR6crr51frlg59K73AFWf7h3gs8BlWtpsHpqwrioa6nJj5lphgim1C3XdPGuuZm2hYIB90QCrKqxDnPkm81hN6pvAyqElRdvN3exjdXeYGQS8oXGmjgoICQjhUh6jdSYmvQdpakSFArIfg6bqiqZW6t3N6HaNbUX7M4Lt4NK8bX3SblJM9Mas+65xuodpVFRj58HfLyAdPZjftCittnLXaHWKQdczNE4trkfK8GFiT3RVqU523gaBbeC04/3zW3pp0yJWFqfofjZejBfw3bGE3WNO8jrmLtDt5ahVyHt+DiUDv/WtFpAQ+4MrDFvC3Bb+uXiI2f1TXGURfesNPc11mjacki1dK/JKTnsUmYGLnnM/2MycWRt7dCtedrSyhqPe39tPBecjV3rrTWDweqzSl2hsfVwM3lX+UL+f0CuTv/Hn38EGAAvCnNy1JKVIQAAAABJRU5ErkJggg==)}.bee-compact__color_cube .alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-compact__color-cube--wrap{position:relative;width:25px;height:25px;cursor:pointer;overflow:hidden}.bee-compact__color-cube--wrap:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.bee-colorPicker__record{display:flex;align-items:center;margin-top:20px}.bee-colorPicker__record .text{width:48px;margin-right:10px;text-align:right;font-size:12px;color:#666}.bee-colorPicker__record .color-list{width:auto;display:flex;position:relative;margin:0}.bee-colorPicker__record .color-list .color-item{position:relative;width:25px;height:25px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;margin-right:1px;box-shadow:3px 0 5px #00000014}.bee-colorPicker__record .color-list .color-item__round{border-radius:50%}.bee-colorPicker__record .color-list .color-item.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-colorPicker__record .color-list .color-item:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.bee-colorPicker__record .color-list .color-item__display{width:100%;height:100%}.small-hue-slider{height:10px!important}.small-hue-slider .small-bar{height:10px!important;width:10px!important}.small-hue-slider .small-bar div{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.bee-hue-colorPicker{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.bee-hue-colorPicker.is-vertical{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.bee-hue-colorPicker.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-hue-colorPicker__inner{position:relative;width:100%;height:100%;border-radius:15px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAdCAYAAAAAaUg8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKtJREFUeNrs09EKgjAUgOGzEFfv/7CVBceiLiJiLnf7fSAbDoUj/iWnyKgRcXxf9Wtt7Vvntf8854jLY3uN19qzf67nH/e2nmmdZ8xjg2x+sI533qf9g4wM/3GvLPumOHVMWf/4SiWWsUG6/6bG+/NWDgE0iQREAiIBkYBIQCQgEhAJiAQQCYgERAIiAZGASEAkIBJAJCASEAmIBEQCIgGRgEgAkYBIYNAqwAD5oWo3bpsiKwAAAABJRU5ErkJggg==);background-size:100%}.bee-hue-colorPicker__inner-pointer{position:absolute;width:14px;height:14px}.bee-hue-colorPicker__inner-handle{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.bee-hue-colorPicker__inner-handle.vertical{transform:translate(-1px,-7px);margin-top:0}.small-light-slider{height:10px!important}.small-light-slider .small-bar{height:10px!important;width:10px!important}.small-light-slider .small-bar div{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.bee-light-colorPicker{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.bee-light-colorPicker.is-vertical{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.bee-light-colorPicker.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-light-colorPicker__inner{position:relative;width:100%;height:100%;border-radius:15px}.bee-light-colorPicker__inner-pointer{position:absolute;width:14px;height:14px}.bee-light-colorPicker__inner-handle{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.bee-light-colorPicker__inner-handle.vertical{transform:translateY(-7px);margin-top:0}.bee-saturation{position:relative;margin-bottom:15px;width:100%;height:125px}.bee-saturation__chrome{border-top-left-radius:5px;border-top-right-radius:5px;border-color:transparent}.bee-saturation__hidden{overflow:hidden}.bee-saturation__white,.bee-saturation__black{position:absolute;top:0;left:0;right:0;bottom:0}.bee-saturation__black{background:linear-gradient(0deg,#000,transparent)}.bee-saturation__white{background:linear-gradient(90deg,#fff,rgba(255,255,255,0))}.bee-saturation__cursor{position:absolute}.bee-saturation__cursor div{transform:translate(-5px,-5px);box-shadow:0 1px 4px #0000005e;width:10px;height:10px;border:1px solid white;border-radius:50%;cursor:pointer}.inputs-controls{display:flex;font-size:16px;margin-bottom:5px}.inputs-controls .formatBtn{position:relative;display:inline-flex;justify-content:center;align-items:center;padding:1px;border:0;text-align:center;cursor:pointer;background-color:transparent;font-weight:700;outline:none;margin-right:5px}.inputs-controls .formatBtn:hover{color:#1a3aff}.inputs-controls .format-group{display:flex;flex-grow:1}.inputs-controls .format-group input{padding:5px;margin:0 3px;min-width:0;text-align:center;border-width:0 0 1px 0;-webkit-appearance:none;appearance:none;-moz-appearance:textfield;outline:none;flex:1}.inputs-controls .format-group input::-webkit-outer-spin-button,.inputs-controls .format-group input::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0}.bee-fk-colorPicker{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;width:249px;padding-bottom:10px}.bee-fk-colorPicker__inner{padding:12px}.bee-fk-colorPicker__header{margin-bottom:12px;z-index:999;text-align:left}.bee-fk-colorPicker__header .back{border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;margin-left:2px;transform:rotate(135deg);-webkit-transform:rotate(135deg)}.bee-fk-colorPicker__display{position:relative;width:100%;margin:0;text-align:left}.bee-fk-colorPicker__display .transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-fk-colorPicker__display .current-color{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.bee-fk-colorPicker__display .current-color .color-cube{width:100%;height:100%}.bee-fk-colorPicker__display .hexColor-prefix{position:relative;padding:0 4px;font-size:14px;display:inline-block;vertical-align:middle}.bee-fk-colorPicker__display input{width:25px;text-align:center;outline:0;border-top:0;border-right:0;border-left:none;display:inline-block;vertical-align:middle;padding-bottom:3px;border-bottom:1px solid #e3e2e8}.bee-fk-colorPicker__display .hexColor-input{width:64px}.bee-fk-colorPicker__display .action{float:right;vertical-align:middle}.bee-fk-colorPicker__display .action .clear-btn{border-color:transparent;color:#409eff;background:transparent;padding-left:0;padding-right:0;display:inline-block;vertical-align:middle;cursor:pointer}.bee-fk-colorPicker__display .action .copy-btn{border-color:transparent;color:#13ce66cc;background:transparent;padding-left:0;padding-right:0;display:inline-block;margin-left:10px;vertical-align:middle;cursor:pointer}.bee-ele-colorPicker{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;padding:10px;width:300px}.bee-ele-colorPicker .bee-ele-row{display:flex}.bee-ele-colorPicker .bee-ele-row .bee-ele-saturation{width:280px;height:180px}.bee-ele-colorPicker .bee-ele-row .bee-ele-hue{margin-left:10px;height:180px}.bee-chrome-colorPicker{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;width:250px;padding-bottom:20px}.bee-chrome-colorPicker-body{padding:0 12px;background-color:#fff}.bee-chrome-colorPicker-body .chrome-controls{display:flex}.bee-chrome-colorPicker-body .chrome-controls .chrome-color-wrap{position:relative;width:36px;height:36px;border-radius:50%;overflow:hidden;z-index:1}.bee-chrome-colorPicker-body .chrome-controls .chrome-color-wrap .current-color{width:100%;height:100%}.bee-chrome-colorPicker-body .chrome-controls .chrome-sliders{flex:1;margin-left:10px}.bee-color-wrap{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.bee-color-wrap.transparent{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.bee-color-wrap.round{width:22px;height:22px;border-radius:50%;border:1px solid #d8d8d8}.bee-color-wrap .current-color{width:100%;height:100%}.vc-alpha-slider[data-v-18925ba6]{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.vc-alpha-slider.is-vertical[data-v-18925ba6]{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.vc-alpha-slider.transparent[data-v-18925ba6]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-alpha-slider__bar[data-v-18925ba6]{position:relative;width:100%;height:100%;border-radius:15px}.vc-alpha-slider__bar-pointer[data-v-18925ba6]{position:absolute;width:14px;height:14px}.vc-alpha-slider__bar-handle[data-v-18925ba6]{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.vc-alpha-slider__bar-handle.vertical[data-v-18925ba6]{transform:translateY(-7px);margin-top:0}.vc-alpha-slider.small-slider[data-v-18925ba6]{height:10px!important}.vc-alpha-slider.small-slider .small-bar[data-v-18925ba6]{height:10px!important;width:10px!important}.vc-alpha-slider.small-slider .small-bar div[data-v-18925ba6]{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.vc-compact[data-v-b969fd48]{margin-bottom:15px;width:auto;box-shadow:3px 0 5px #00000014;display:inline-block}.vc-compact__row[data-v-b969fd48]{position:relative;width:100%;margin:0;height:27px}.vc-compact__row>*[data-v-b969fd48]{display:inline-block;vertical-align:middle}.vc-compact__color_cube[data-v-b969fd48]{width:100%;height:100%}.vc-compact__color_cube.transparent[data-v-b969fd48]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:white}.vc-compact__color_cube.transparent[data-v-b969fd48]:after{content:\"\";position:absolute;top:100%;left:0;transform:rotate(-45deg);transform-origin:0 0;width:35px;height:1px;background:red}.vc-compact__color_cube.advance[data-v-b969fd48]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABqVJREFUeNrEl11yHDUQx1ua2Zlde2M7jqESqnjg45kjcBwOwQG4BY+8cwWK17xBUUARICQhTmI7tte7Ozs7o+bXLTleuACpKNJqJP3789+doKoSPxfVGxFZioS1iK5Yd0nCJko9iLTVVvZSlCOp5FBF7vP5RFTelyDHvmYvMPPtiP19fu+HIHPetrllX2TLMJAOgEehti3ZY/Axap51ZB5ZDEnGMUoCNCmDbRv+2Q4CDJ5Mymj4OmE0CNj6b5WJlkel3xkiGXjOc0imDH/JDid1AXQEfKgccHg3lN+uhh+v2WkkOvCUnT3GjP2WOfrJzjUNPq/ugPUej1TiwME3+DfVUhWkEQF6LZraJxsp6xHLIzW/DNyAW75PGJVrOxbQFSeWzOsdjQ/tZHTxtSgdzAimMfOAdbas7crUvIWAqZg5+gg8FBzYTOygbo1tAb1xTYMs/q1xAFgnvBx5JrKO2X9pzJrJhr+b5BaY8vjG3O+w7HFnypkZ+zP3K8AWL7FHiRsJappe4knA9fo/pj7WrIrdshBs8cukcu0ljhK2lZt1Q8B1msMj5WCQKoibd8q8p1J8i6aWJnrJCcDljDX2Cm8Jn2WJC9PtIHpYeowza125Dc3c6CQ1MbEdooxoPQw54Ak9jigaKcAMk9ddgUi68ZxMmNbNG8hTXXjOZrPf+vg4C+RpRRJqO0ps8FxtzhoJLiSIHCWtLi9u5LiZyqKv0UvlHmaccukoVjJLFu2YUy946FRidS7beCXN9i3gKzd1Yo53ps7ppTnqEYD0mYNldpuxnvIo2nZb/L+ay9tulA/sJpE/Tfchj1H2kW2KpsFYSK4YgI1vZDJe57XmIAu642N5kCxUJfQ8bA48IKpWGNKi/T7rPWRMBMkp5lhz5mUlV0O+fGAGC5XMkTzoG349I/D+Qis0jpeZBt0CXaZGnwtwdcS7A/4ycOIi3bNI0pzfxoVHQYYDIu+A9djJ5bKX+c2BVKnHS5Xcw8QTecWlXxi/khgvYMFzHlp4/g74WREshg3zpuS9mfowShxyrnv6wFS2Dl12QUDwaO54xIWTKZem8up7M0ojn5BzdftEdPMzII9ljE8kVde8Z5y89PSJYcACAJhWTigFOO1rpqRbWs0pKjp4Nkl6OMiGQiFnKsOnLQNqJNe33yV5iFml/4YLfzB+wwpvuNoT+eq0F+JWYtp50MlXLBvUAkLlXXbdloHkUsREDsc6y9LDvs2pTNJD6eM5+x/KAslqWK/pOo/WEIvw3PC3q8rZz3IzWBqqp2CpTvjAACIVyFhLMQmlwXPU9gYrC+lCZs0VtPkc0Jfc+Va+XK/lK3Pr10XhF8ToAjf1VKktAH0hd3srqesSMmCJaiNwJB/IzNviF9Uor8NnndSkyRBfExbPpdHfKRg/yqH8JCPxdvbZVE6+6GTzmCD9Af45RfhzLGZZtEaIVQVdDpLwVByAHeIu8DXWGTySUil8wSNw6fMoliZnfHsqfXiC2M+gjJXX7wuEOvm4gWUBa9h4xrAAtwy6hHyWo1QQGc9gDkD7sAt8VjqETSnUHaArd0Gupc8ZBv4n4ymUfiEPxEu4/A3eyayX+x+ZZjjoIEl6D+2zrJJgyOoKf68RCKJXOpt4B3xZQNclwVeSbXVd2hXzKXlpqsC3c0ttyR3La6rTW2yyP1dpSbdowUtBji1+aAioxTZXD+ORZcrs+A5YF9kWnnfWeJUSZgnswKeZ7FNHkaeXgjTmowVhkhuQ1pQxCE1aik2A16OVVwtvayxmW6fdeDNKKcs79Zhy5eaFwIOXsxu3grolVsUVS0y0pAKN3tpMStdlheJajZ1V5rxWHxoJjR6crr51frlg59K73AFWf7h3gs8BlWtpsHpqwrioa6nJj5lphgim1C3XdPGuuZm2hYIB90QCrKqxDnPkm81hN6pvAyqElRdvN3exjdXeYGQS8oXGmjgoICQjhUh6jdSYmvQdpakSFArIfg6bqiqZW6t3N6HaNbUX7M4Lt4NK8bX3SblJM9Mas+65xuodpVFRj58HfLyAdPZjftCittnLXaHWKQdczNE4trkfK8GFiT3RVqU523gaBbeC04/3zW3pp0yJWFqfofjZejBfw3bGE3WNO8jrmLtDt5ahVyHt+DiUDv/WtFpAQ+4MrDFvC3Bb+uXiI2f1TXGURfesNPc11mjacki1dK/JKTnsUmYGLnnM/2MycWRt7dCtedrSyhqPe39tPBecjV3rrTWDweqzSl2hsfVwM3lX+UL+f0CuTv/Hn38EGAAvCnNy1JKVIQAAAABJRU5ErkJggg==)}.vc-compact__color_cube .alpha[data-v-b969fd48]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-compact__color-cube--wrap[data-v-b969fd48]{position:relative;width:27px;height:27px;cursor:pointer;overflow:hidden}.vc-compact__color-cube--wrap[data-v-b969fd48]:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.vc-saturation[data-v-63803390]{position:relative;margin-bottom:15px;width:100%;height:125px}.vc-saturation__chrome[data-v-63803390]{border-top-left-radius:5px;border-top-right-radius:5px;border-color:transparent}.vc-saturation__hidden[data-v-63803390]{overflow:hidden}.vc-saturation__white[data-v-63803390],.vc-saturation__black[data-v-63803390]{position:absolute;top:0;left:0;right:0;bottom:0}.vc-saturation__black[data-v-63803390]{background:linear-gradient(0deg,#000,transparent)}.vc-saturation__white[data-v-63803390]{background:linear-gradient(90deg,#fff,rgba(255,255,255,0))}.vc-saturation__cursor[data-v-63803390]{position:absolute}.vc-saturation__cursor div[data-v-63803390]{transform:translate(-5px,-5px);box-shadow:0 1px 4px #0000005e;width:10px;height:10px;border:1px solid white;border-radius:50%;cursor:pointer}.vc-hue-slider[data-v-5c4cae5b]{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.vc-hue-slider.is-vertical[data-v-5c4cae5b]{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.vc-hue-slider.transparent[data-v-5c4cae5b]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-hue-slider__bar[data-v-5c4cae5b]{position:relative;width:100%;height:100%;border-radius:15px;background:-ms-linear-gradient(left,red 0%,yellow 16.66%,lime 33.33%,aqua 50%,blue 66.66%,fuchsia 83.33%,red 100%)}.vc-hue-slider__bar-pointer[data-v-5c4cae5b]{position:absolute;width:14px;height:14px}.vc-hue-slider__bar-handle[data-v-5c4cae5b]{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.vc-hue-slider__bar-handle.vertical[data-v-5c4cae5b]{transform:translateY(-7px);margin-top:0}.vc-hue-slider.small-slider[data-v-5c4cae5b]{height:10px!important}.vc-hue-slider.small-slider .small-bar[data-v-5c4cae5b]{height:10px!important;width:10px!important}.vc-hue-slider.small-slider .small-bar div[data-v-5c4cae5b]{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.vc-lightness-slider[data-v-6156acb7]{position:relative;margin-bottom:15px;width:100%;height:14px;box-shadow:2px 0 8px #00000014;border-radius:15px}.vc-lightness-slider.is-vertical[data-v-6156acb7]{width:14px;height:100%;display:inline-block;transform:rotate(180deg)}.vc-lightness-slider.transparent[data-v-6156acb7]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-lightness-slider__bar[data-v-6156acb7]{position:relative;width:100%;height:100%;border-radius:15px}.vc-lightness-slider__bar-pointer[data-v-6156acb7]{position:absolute;width:14px;height:14px}.vc-lightness-slider__bar-handle[data-v-6156acb7]{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;margin-top:2px;box-shadow:0 1px 4px #0000005e;cursor:pointer}.vc-lightness-slider__bar-handle.vertical[data-v-6156acb7]{transform:translateY(-7px);margin-top:0}.vc-lightness-slider.small-slider[data-v-6156acb7]{height:10px!important}.vc-lightness-slider.small-slider .small-bar[data-v-6156acb7]{height:10px!important;width:10px!important}.vc-lightness-slider.small-slider .small-bar div[data-v-6156acb7]{width:12px!important;height:12px!important;border-radius:5px!important;transform:translate(-6px,-2px);margin-top:1px!important}.vc-colorPicker__record[data-v-7e6b67ca]{display:flex;align-items:center;margin-top:15px}.vc-colorPicker__record .text[data-v-7e6b67ca]{width:48px;margin-right:10px;text-align:right;font-size:12px;color:#666}.vc-colorPicker__record .color-list[data-v-7e6b67ca]{width:auto;display:flex;position:relative;margin:0}.vc-colorPicker__record .color-list .color-item[data-v-7e6b67ca]{position:relative;width:26px;height:26px;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle;margin-right:1px;box-shadow:3px 0 5px #00000014}.vc-colorPicker__record .color-list .color-item__round[data-v-7e6b67ca]{border-radius:50%}.vc-colorPicker__record .color-list .color-item.transparent[data-v-7e6b67ca]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-colorPicker__record .color-list .color-item[data-v-7e6b67ca]:hover{transform:scale(1.2);z-index:299;transition:transform .2s}.vc-colorPicker__record .color-list .color-item__display[data-v-7e6b67ca]{width:100%;height:100%}.vc-display[data-v-0067da1d]{margin-top:16px;height:28px;display:flex;align-items:center}.vc-display .vc-current-color[data-v-0067da1d]{margin-right:10px;width:50px;height:100%;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.vc-display .vc-current-color.vc-transparent[data-v-0067da1d]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-display .vc-current-color .color-cube[data-v-0067da1d]{width:100%;height:100%}.vc-display .vc-color-input[data-v-0067da1d]{height:100%;flex:1;flex-shrink:0;box-sizing:border-box;position:relative}.vc-display .vc-color-input input[data-v-0067da1d]{padding:0;border:0;outline:none;cursor:pointer;color:#33383e;font-size:14px;text-align:center;box-sizing:border-box;background-color:#f1f2f4;border-radius:4px;height:100%;width:100%}.vc-display .vc-alpha-input[data-v-0067da1d]{margin-left:8px;width:56px;height:100%;border:none;display:flex;justify-content:center;align-items:center;background-color:#f1f2f4;border-radius:4px;font-size:14px}.vc-display .vc-alpha-input>input[data-v-0067da1d]{width:100%;padding:0;text-align:center;color:inherit;font-size:inherit}.vc-display .vc-alpha-input__inner[data-v-0067da1d]{padding:10px 16px;border-radius:4px;color:#000;font-size:14px;line-height:20px;background:transparent;outline:none;border:none;display:block;box-sizing:border-box;cursor:pointer}.vc-fk-colorPicker[data-v-592a5ec3]{position:relative;box-sizing:border-box;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.vc-fk-colorPicker__inner[data-v-592a5ec3]{position:relative}.vc-fk-colorPicker__header[data-v-592a5ec3]{margin-bottom:12px;z-index:999;text-align:left}.vc-fk-colorPicker__header .back[data-v-592a5ec3]{border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;margin-left:2px;transform:rotate(135deg)}.vc-fk-colorPicker__display[data-v-592a5ec3]{position:relative;width:100%;margin:0;text-align:left}.vc-fk-colorPicker__display .transparent[data-v-592a5ec3]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-fk-colorPicker__display .current-color[data-v-592a5ec3]{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.vc-fk-colorPicker__display .current-color .color-cube[data-v-592a5ec3]{width:100%;height:100%}.vc-fk-colorPicker__display .hexColor-prefix[data-v-592a5ec3]{position:relative;padding:0 4px;font-size:14px;display:inline-block;vertical-align:middle}.vc-fk-colorPicker__display input[data-v-592a5ec3]{width:25px;text-align:center;outline:0;border-top:0;border-right:0;border-left:none;display:inline-block;vertical-align:middle;padding-bottom:3px;border-bottom:1px solid #e3e2e8}.vc-fk-colorPicker__display .hexColor-input[data-v-592a5ec3]{width:64px}.vc-fk-colorPicker__display .action[data-v-592a5ec3]{float:right;vertical-align:middle}.vc-fk-colorPicker__display .action .clear-btn[data-v-592a5ec3]{border-color:transparent;color:#409eff;background:transparent;padding-left:0;padding-right:0;display:inline-block;vertical-align:middle;cursor:pointer}.vc-fk-colorPicker__display .action .copy-btn[data-v-592a5ec3]{border-color:transparent;color:#13ce66cc;background:transparent;padding-left:0;padding-right:0;display:inline-block;margin-left:10px;vertical-align:middle;cursor:pointer}.vc-chrome-colorPicker[data-v-61d7303b]{position:relative;box-sizing:border-box;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.vc-chrome-colorPicker-body[data-v-61d7303b]{position:relative;background-color:#fff}.vc-chrome-colorPicker-body .chrome-controls[data-v-61d7303b]{display:flex}.vc-chrome-colorPicker-body .chrome-controls .chrome-color-wrap[data-v-61d7303b]{position:relative;width:36px;height:36px;border-radius:50%;overflow:hidden;z-index:1}.vc-chrome-colorPicker-body .chrome-controls .chrome-color-wrap.transparent[data-v-61d7303b]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-chrome-colorPicker-body .chrome-controls .chrome-color-wrap .current-color[data-v-61d7303b]{width:100%;height:100%}.vc-chrome-colorPicker-body .chrome-controls .chrome-sliders[data-v-61d7303b]{flex:1;margin-left:10px}.vc-gradient-picker[data-v-f63daa7a]{position:relative}.vc-gradient-picker__header[data-v-f63daa7a]{margin-bottom:20px;z-index:999;text-align:left}.vc-gradient-picker__header .back[data-v-f63daa7a]{border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;margin-left:2px;transform:rotate(135deg)}.vc-gradient-picker__body[data-v-f63daa7a]{margin-bottom:12px;display:flex;align-items:center}.vc-gradient-picker__body .vc-color-range[data-v-f63daa7a]{flex:1}.vc-gradient-picker__body .vc-color-range__container[data-v-f63daa7a]{position:relative;height:16px;border-radius:5px}.vc-gradient-picker__body .vc-color-range__container .vc-background[data-v-f63daa7a]{height:100%;border-radius:4px;box-shadow:inset 0 0 0 1px #0000000f}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container[data-v-f63daa7a]{position:absolute;width:100%;top:0;height:100%;left:0}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container .vc-gradient__stop[data-v-f63daa7a]{position:absolute;top:-2px;width:14px;height:16px;overflow:hidden;border:2px solid #fff;border-radius:2px;cursor:pointer;box-shadow:0 0 2px #00000059;box-sizing:content-box;transform:translate(-9px)}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container .vc-gradient__stop--inner[data-v-f63daa7a]{display:inline-block;height:100%}.vc-gradient-picker__body .vc-color-range__container .vc-gradient__stop__container .vc-gradient__stop--current[data-v-f63daa7a]{position:relative;z-index:1;box-shadow:0 0 4px #0003,0 0 0 1.2px #2254f4}.vc-gradient-picker__body .vc-degree-input[data-v-f63daa7a]{position:relative;z-index:2;font-size:12px;background-color:#f6f7f9;border-radius:4px}.vc-gradient-picker__body .vc-degree-input:hover .vc-degree-input__panel[data-v-f63daa7a]{display:block}.vc-gradient-picker__body .vc-degree-input__control[data-v-f63daa7a]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:4px;background-color:inherit}.vc-gradient-picker__body .vc-degree-input__control input[data-v-f63daa7a]{max-width:28px;text-align:center;border:none;outline:none;background-color:initial;color:#33383e;font-size:inherit;overflow:visible}.vc-gradient-picker__body .vc-degree-input__panel[data-v-f63daa7a]{display:none;padding-top:4px;z-index:10}.vc-gradient-picker__body .vc-degree-input__panel .vc-degree-input__disk[data-v-f63daa7a]{width:64px;height:64px;background-color:#fff;box-shadow:0 0 2px #00000029,0 1px 8px #0000000f,0 4px 12px #00000014;border-radius:4px;display:flex;justify-content:center;align-items:center;position:relative;transform:translate(0)}.vc-gradient-picker__body .vc-picker-degree-input[data-v-f63daa7a]{margin-left:8px;width:64px;height:28px}.vc-colorpicker[data-v-4afdf3bb]{position:relative;box-sizing:border-box;border-radius:3px;box-shadow:0 0 10px #00000026;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;width:276px;padding-bottom:10px;z-index:10000}.vc-colorpicker *[data-v-4afdf3bb]{outline:none;line-height:1}.vc-colorpicker--container[data-v-4afdf3bb]{padding:16px}.vc-colorpicker--tabs[data-v-4afdf3bb]{padding:2px;background:#f6f7f9;border-radius:6px;position:relative;margin-bottom:12px}.vc-colorpicker--tabs__inner[data-v-4afdf3bb]{display:flex;justify-content:space-between;padding:0;background:#f6f7f9;border-bottom:none;position:relative;box-sizing:border-box}.vc-colorpicker--tabs__btn[data-v-4afdf3bb]{flex:1;z-index:2;color:#636c78;font-size:14px;border-radius:4px;cursor:pointer}.vc-colorpicker--tabs__btn.vc-btn-active[data-v-4afdf3bb]{color:#33383e;font-weight:600}.vc-colorpicker--tabs__btn button[data-v-4afdf3bb]{width:100%;background-color:initial;padding:6px 0;font-size:14px;line-height:20px;color:#636c78;border:0;border-radius:0;outline:0;cursor:pointer;-webkit-appearance:none;font-weight:inherit}.vc-colorpicker--tabs__btn button .vc-btn__content[data-v-4afdf3bb]{position:relative;white-space:nowrap}.vc-colorpicker--tabs__bg[data-v-4afdf3bb]{position:absolute;top:0;bottom:0;background:#fff;box-shadow:0 1px 4px #0000001f;border-radius:4px;z-index:1;transition:left .2s ease-in-out}.vc-color-wrap[data-v-0aa3a75d]{margin-right:10px;width:50px;height:24px;box-shadow:3px 0 5px #00000014;position:relative;cursor:pointer;overflow:hidden;display:inline-block;vertical-align:middle}.vc-color-wrap.transparent[data-v-0aa3a75d]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);background-repeat:repeat}.vc-color-wrap.round[data-v-0aa3a75d]{width:22px;height:22px;border-radius:50%;border:1px solid #d8d8d8}.vc-color-wrap .current-color[data-v-0aa3a75d]{width:100%;height:100%}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/gradient-parser/build/node.js":
/*!****************************************************!*\
  !*** ./node_modules/gradient-parser/build/node.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) 2014 Rafael Caricio. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var GradientParser = (GradientParser || {});

GradientParser.stringify = (function() {

  var visitor = {

    'visit_linear-gradient': function(node) {
      return visitor.visit_gradient(node);
    },

    'visit_repeating-linear-gradient': function(node) {
      return visitor.visit_gradient(node);
    },

    'visit_radial-gradient': function(node) {
      return visitor.visit_gradient(node);
    },

    'visit_repeating-radial-gradient': function(node) {
      return visitor.visit_gradient(node);
    },

    'visit_gradient': function(node) {
      var orientation = visitor.visit(node.orientation);
      if (orientation) {
        orientation += ', ';
      }

      return node.type + '(' + orientation + visitor.visit(node.colorStops) + ')';
    },

    'visit_shape': function(node) {
      var result = node.value,
          at = visitor.visit(node.at),
          style = visitor.visit(node.style);

      if (style) {
        result += ' ' + style;
      }

      if (at) {
        result += ' at ' + at;
      }

      return result;
    },

    'visit_default-radial': function(node) {
      var result = '',
          at = visitor.visit(node.at);

      if (at) {
        result += at;
      }
      return result;
    },

    'visit_extent-keyword': function(node) {
      var result = node.value,
          at = visitor.visit(node.at);

      if (at) {
        result += ' at ' + at;
      }

      return result;
    },

    'visit_position-keyword': function(node) {
      return node.value;
    },

    'visit_position': function(node) {
      return visitor.visit(node.value.x) + ' ' + visitor.visit(node.value.y);
    },

    'visit_%': function(node) {
      return node.value + '%';
    },

    'visit_em': function(node) {
      return node.value + 'em';
    },

    'visit_px': function(node) {
      return node.value + 'px';
    },

    'visit_literal': function(node) {
      return visitor.visit_color(node.value, node);
    },

    'visit_hex': function(node) {
      return visitor.visit_color('#' + node.value, node);
    },

    'visit_rgb': function(node) {
      return visitor.visit_color('rgb(' + node.value.join(', ') + ')', node);
    },

    'visit_rgba': function(node) {
      return visitor.visit_color('rgba(' + node.value.join(', ') + ')', node);
    },

    'visit_color': function(resultColor, node) {
      var result = resultColor,
          length = visitor.visit(node.length);

      if (length) {
        result += ' ' + length;
      }
      return result;
    },

    'visit_angular': function(node) {
      return node.value + 'deg';
    },

    'visit_directional': function(node) {
      return 'to ' + node.value;
    },

    'visit_array': function(elements) {
      var result = '',
          size = elements.length;

      elements.forEach(function(element, i) {
        result += visitor.visit(element);
        if (i < size - 1) {
          result += ', ';
        }
      });

      return result;
    },

    'visit': function(element) {
      if (!element) {
        return '';
      }
      var result = '';

      if (element instanceof Array) {
        return visitor.visit_array(element, result);
      } else if (element.type) {
        var nodeVisitor = visitor['visit_' + element.type];
        if (nodeVisitor) {
          return nodeVisitor(element);
        } else {
          throw Error('Missing visitor visit_' + element.type);
        }
      } else {
        throw Error('Invalid node.');
      }
    }

  };

  return function(root) {
    return visitor.visit(root);
  };
})();

// Copyright (c) 2014 Rafael Caricio. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var GradientParser = (GradientParser || {});

GradientParser.parse = (function() {

  var tokens = {
    linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
    repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
    radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
    repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
    extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^\#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    rgbaColor: /^rgba/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
  };

  var input = '';

  function error(msg) {
    var err = new Error(input + ': ' + msg);
    err.source = input;
    throw err;
  }

  function getAST() {
    var ast = matchListDefinitions();

    if (input.length > 0) {
      error('Invalid input not EOF');
    }

    return ast;
  }

  function matchListDefinitions() {
    return matchListing(matchDefinition);
  }

  function matchDefinition() {
    return matchGradient(
            'linear-gradient',
            tokens.linearGradient,
            matchLinearOrientation) ||

          matchGradient(
            'repeating-linear-gradient',
            tokens.repeatingLinearGradient,
            matchLinearOrientation) ||

          matchGradient(
            'radial-gradient',
            tokens.radialGradient,
            matchListRadialOrientations) ||

          matchGradient(
            'repeating-radial-gradient',
            tokens.repeatingRadialGradient,
            matchListRadialOrientations);
  }

  function matchGradient(gradientType, pattern, orientationMatcher) {
    return matchCall(pattern, function(captures) {

      var orientation = orientationMatcher();
      if (orientation) {
        if (!scan(tokens.comma)) {
          error('Missing comma before color stops');
        }
      }

      return {
        type: gradientType,
        orientation: orientation,
        colorStops: matchListing(matchColorStop)
      };
    });
  }

  function matchCall(pattern, callback) {
    var captures = scan(pattern);

    if (captures) {
      if (!scan(tokens.startCall)) {
        error('Missing (');
      }

      var result = callback(captures);

      if (!scan(tokens.endCall)) {
        error('Missing )');
      }

      return result;
    }
  }

  function matchLinearOrientation() {
    return matchSideOrCorner() ||
      matchAngle();
  }

  function matchSideOrCorner() {
    return match('directional', tokens.sideOrCorner, 1);
  }

  function matchAngle() {
    return match('angular', tokens.angleValue, 1);
  }

  function matchListRadialOrientations() {
    var radialOrientations,
        radialOrientation = matchRadialOrientation(),
        lookaheadCache;

    if (radialOrientation) {
      radialOrientations = [];
      radialOrientations.push(radialOrientation);

      lookaheadCache = input;
      if (scan(tokens.comma)) {
        radialOrientation = matchRadialOrientation();
        if (radialOrientation) {
          radialOrientations.push(radialOrientation);
        } else {
          input = lookaheadCache;
        }
      }
    }

    return radialOrientations;
  }

  function matchRadialOrientation() {
    var radialType = matchCircle() ||
      matchEllipse();

    if (radialType) {
      radialType.at = matchAtPosition();
    } else {
      var extent = matchExtentKeyword();
      if (extent) {
        radialType = extent;
        var positionAt = matchAtPosition();
        if (positionAt) {
          radialType.at = positionAt;
        }
      } else {
        var defaultPosition = matchPositioning();
        if (defaultPosition) {
          radialType = {
            type: 'default-radial',
            at: defaultPosition
          };
        }
      }
    }

    return radialType;
  }

  function matchCircle() {
    var circle = match('shape', /^(circle)/i, 0);

    if (circle) {
      circle.style = matchLength() || matchExtentKeyword();
    }

    return circle;
  }

  function matchEllipse() {
    var ellipse = match('shape', /^(ellipse)/i, 0);

    if (ellipse) {
      ellipse.style =  matchDistance() || matchExtentKeyword();
    }

    return ellipse;
  }

  function matchExtentKeyword() {
    return match('extent-keyword', tokens.extentKeywords, 1);
  }

  function matchAtPosition() {
    if (match('position', /^at/, 0)) {
      var positioning = matchPositioning();

      if (!positioning) {
        error('Missing positioning value');
      }

      return positioning;
    }
  }

  function matchPositioning() {
    var location = matchCoordinates();

    if (location.x || location.y) {
      return {
        type: 'position',
        value: location
      };
    }
  }

  function matchCoordinates() {
    return {
      x: matchDistance(),
      y: matchDistance()
    };
  }

  function matchListing(matcher) {
    var captures = matcher(),
      result = [];

    if (captures) {
      result.push(captures);
      while (scan(tokens.comma)) {
        captures = matcher();
        if (captures) {
          result.push(captures);
        } else {
          error('One extra comma');
        }
      }
    }

    return result;
  }

  function matchColorStop() {
    var color = matchColor();

    if (!color) {
      error('Expected color definition');
    }

    color.length = matchDistance();
    return color;
  }

  function matchColor() {
    return matchHexColor() ||
      matchRGBAColor() ||
      matchRGBColor() ||
      matchLiteralColor();
  }

  function matchLiteralColor() {
    return match('literal', tokens.literalColor, 0);
  }

  function matchHexColor() {
    return match('hex', tokens.hexColor, 1);
  }

  function matchRGBColor() {
    return matchCall(tokens.rgbColor, function() {
      return  {
        type: 'rgb',
        value: matchListing(matchNumber)
      };
    });
  }

  function matchRGBAColor() {
    return matchCall(tokens.rgbaColor, function() {
      return  {
        type: 'rgba',
        value: matchListing(matchNumber)
      };
    });
  }

  function matchNumber() {
    return scan(tokens.number)[1];
  }

  function matchDistance() {
    return match('%', tokens.percentageValue, 1) ||
      matchPositionKeyword() ||
      matchLength();
  }

  function matchPositionKeyword() {
    return match('position-keyword', tokens.positionKeywords, 1);
  }

  function matchLength() {
    return match('px', tokens.pixelValue, 1) ||
      match('em', tokens.emValue, 1);
  }

  function match(type, pattern, captureIndex) {
    var captures = scan(pattern);
    if (captures) {
      return {
        type: type,
        value: captures[captureIndex]
      };
    }
  }

  function scan(regexp) {
    var captures,
        blankCaptures;

    blankCaptures = /^[\n\r\t\s]+/.exec(input);
    if (blankCaptures) {
        consume(blankCaptures[0].length);
    }

    captures = regexp.exec(input);
    if (captures) {
        consume(captures[0].length);
    }

    return captures;
  }

  function consume(size) {
    input = input.substr(size);
  }

  return function(code) {
    input = code.toString();
    return getAST();
  };
})();

exports.parse = GradientParser.parse;
exports.stringify = GradientParser.stringify;


/***/ }),

/***/ "./node_modules/vue3-angle/style.css":
/*!*******************************************!*\
  !*** ./node_modules/vue3-angle/style.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-angle/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue3-colorpicker/style.css":
/*!*************************************************!*\
  !*** ./node_modules/vue3-colorpicker/style.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-colorpicker/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./resources/js/Components/ColorPicker.vue":
/*!*************************************************!*\
  !*** ./resources/js/Components/ColorPicker.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColorPicker_vue_vue_type_template_id_7893d754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPicker.vue?vue&type=template&id=7893d754 */ "./resources/js/Components/ColorPicker.vue?vue&type=template&id=7893d754");
/* harmony import */ var _ColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPicker.vue?vue&type=script&lang=js */ "./resources/js/Components/ColorPicker.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_nostoygic_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_nostoygic_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ColorPicker_vue_vue_type_template_id_7893d754__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/ColorPicker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/ColorPicker.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Components/ColorPicker.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ColorPicker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/ColorPicker.vue?vue&type=template&id=7893d754":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/ColorPicker.vue?vue&type=template&id=7893d754 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPicker_vue_vue_type_template_id_7893d754__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColorPicker_vue_vue_type_template_id_7893d754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColorPicker.vue?vue&type=template&id=7893d754 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ColorPicker.vue?vue&type=template&id=7893d754");


/***/ }),

/***/ "./node_modules/vue3-angle/vue3-angle.es.js":
/*!**************************************************!*\
  !*** ./node_modules/vue3-angle/vue3-angle.es.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Angle": () => (/* binding */ Angle),
/* harmony export */   "default": () => (/* binding */ AnglePlugin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const calcAngle = (element, event) => {
  const rect = element.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const x = Math.abs(originX - event.clientX);
  const y = Math.abs(originY - event.clientY);
  const z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  const cos = y / z;
  const rad = Math.acos(cos);
  let angle = Math.floor(180 / (Math.PI / rad));
  if (event.clientX > originX && event.clientY > originY) {
    angle = 180 - angle;
  }
  if (event.clientX == originX && event.clientY > originY) {
    angle = 180;
  }
  if (event.clientX > originX && event.clientY == originY) {
    angle = 90;
  }
  if (event.clientX < originX && event.clientY > originY) {
    angle = 180 + angle;
  }
  if (event.clientX < originX && event.clientY == originY) {
    angle = 270;
  }
  if (event.clientX < originX && event.clientY < originY) {
    angle = 360 - angle;
  }
  return angle;
};
let isDragging = false;
const triggerDragEvent = (element, options) => {
  const moveFn = function(event) {
    var _a;
    (_a = options.drag) == null ? void 0 : _a.call(options, event);
  };
  const upFn = function(event) {
    var _a;
    document.removeEventListener("mousemove", moveFn, false);
    document.removeEventListener("mouseup", upFn, false);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    (_a = options.end) == null ? void 0 : _a.call(options, event);
  };
  if (element) {
    element.addEventListener("mousedown", (event) => {
      var _a;
      if (isDragging)
        return;
      document.onselectstart = () => false;
      document.ondragstart = () => false;
      document.addEventListener("mousemove", moveFn, false);
      document.addEventListener("mouseup", upFn, false);
      isDragging = true;
      (_a = options.start) == null ? void 0 : _a.call(options, event);
    });
  }
  return;
};
var index = "";
const angleProps = {
  angle: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 16,
    validator: (value) => {
      return value >= 16;
    }
  },
  borderWidth: {
    type: Number,
    default: 1,
    validator: (value) => {
      return value >= 1;
    }
  },
  borderColor: {
    type: String,
    default: "#666"
  }
};
var Angle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Angle",
  props: angleProps,
  emits: ["update:angle", "change"],
  setup(props, {
    emit
  }) {
    const angleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const rotate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.angle);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.angle, (angle) => {
      rotate.value = angle;
    });
    const updateAngle = () => {
      let value = Number(rotate.value);
      if (!isNaN(value)) {
        value = value > 360 || value < 0 ? props.angle : value;
        rotate.value = value === 360 ? 0 : value;
        emit("update:angle", rotate.value);
        emit("change", rotate.value);
      }
    };
    const getStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return {
        width: props.size + "px",
        height: props.size + "px",
        borderWidth: props.borderWidth + "px",
        borderColor: props.borderColor,
        transform: `rotate(${rotate.value}deg)`
      };
    });
    const handleDrag = (event) => {
      if (angleRef.value) {
        rotate.value = calcAngle(angleRef.value, event) % 360;
        updateAngle();
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      const dragConfig = {
        drag: (event) => {
          handleDrag(event);
        },
        end: (event) => {
          handleDrag(event);
        }
      };
      if (angleRef.value) {
        triggerDragEvent(angleRef.value, dragConfig);
      }
    });
    return () => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": "bee-angle"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": "bee-angle__round",
        "ref": angleRef,
        "style": getStyle.value
      }, null)]);
    };
  }
});
const AnglePlugin = {
  install: (app) => {
    app.component(Angle.name, Angle);
  }
};



/***/ }),

/***/ "./node_modules/vue3-colorpicker/index.es.js":
/*!***************************************************!*\
  !*** ./node_modules/vue3-colorpicker/index.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": () => (/* binding */ ColorPicker),
/* harmony export */   "default": () => (/* binding */ Vue3ColorPicker)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-types */ "./node_modules/vue-types/dist/vue-types.modern.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/shared/index.mjs");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");
/* harmony import */ var _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aesoper/normal-utils */ "./node_modules/@aesoper/normal-utils/NormalUtils.es.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/merge.js");
/* harmony import */ var vue3_angle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue3-angle */ "./node_modules/vue3-angle/vue3-angle.es.js");
/* harmony import */ var vue3_angle_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue3-angle/style.css */ "./node_modules/vue3-angle/style.css");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
/* harmony import */ var gradient_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gradient-parser */ "./node_modules/gradient-parser/build/node.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};










var index = "";
const double = (num) => {
  return Math.round(num * 100) / 100;
};
class Color {
  constructor(input) {
    __publicField(this, "instance");
    __publicField(this, "alphaValue", 0);
    __publicField(this, "redValue", 0);
    __publicField(this, "greenValue", 0);
    __publicField(this, "blueValue", 0);
    __publicField(this, "hueValue", 0);
    __publicField(this, "saturationValue", 0);
    __publicField(this, "brightnessValue", 0);
    __publicField(this, "hslSaturationValue", 0);
    __publicField(this, "lightnessValue", 0);
    __publicField(this, "initAlpha", () => {
      const initAlpha = this.instance.getAlpha();
      this.alphaValue = Math.min(1, initAlpha) * 100;
    });
    __publicField(this, "initLightness", () => {
      const { s, l } = this.instance.toHsl();
      this.hslSaturationValue = double(s);
      this.lightnessValue = double(l);
    });
    __publicField(this, "initRgb", () => {
      const { r, g, b } = this.instance.toRgb();
      this.redValue = double(r);
      this.greenValue = double(g);
      this.blueValue = double(b);
    });
    __publicField(this, "initHsb", () => {
      const { h, s, v } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(h));
      this.saturationValue = double(s);
      this.brightnessValue = double(v);
    });
    __publicField(this, "toHexString", () => {
      return this.instance.toHexString();
    });
    __publicField(this, "toRgbString", () => {
      return this.instance.toRgbString();
    });
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(input);
    this.initRgb();
    this.initHsb();
    this.initLightness();
    this.initAlpha();
  }
  toString(format) {
    return this.instance.toString(format);
  }
  get hex() {
    return this.instance.toHex();
  }
  set hex(hexString) {
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(hexString);
    this.initHsb();
    this.initRgb();
    this.initAlpha();
    this.initLightness();
  }
  set hue(value) {
    if (this.saturation === 0 && this.brightness === 0) {
      this.saturationValue = 1;
      this.brightnessValue = 1;
    }
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
      h: double(value),
      s: this.saturation,
      v: this.brightness,
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initLightness();
    this.hueValue = double(value);
  }
  get hue() {
    return this.hueValue;
  }
  set saturation(value) {
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
      h: this.hue,
      s: double(value),
      v: this.brightness,
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initLightness();
    this.saturationValue = double(value);
  }
  get saturation() {
    return this.saturationValue;
  }
  set brightness(value) {
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
      h: this.hue,
      s: this.saturation,
      v: double(value),
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initLightness();
    this.brightnessValue = double(value);
  }
  get brightness() {
    return this.brightnessValue;
  }
  set lightness(value) {
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
      h: this.hue,
      s: this.hslSaturationValue,
      l: double(value),
      a: this.alphaValue / 100
    });
    this.initRgb();
    this.initHsb();
    this.lightnessValue = double(value);
  }
  get lightness() {
    return this.lightnessValue;
  }
  set red(value) {
    const rgb = this.instance.toRgb();
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(__spreadProps(__spreadValues({}, rgb), {
      r: double(value),
      a: this.alphaValue / 100
    }));
    this.initHsb();
    this.initLightness();
    this.redValue = double(value);
  }
  get red() {
    return this.redValue;
  }
  set green(value) {
    const rgb = this.instance.toRgb();
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(__spreadProps(__spreadValues({}, rgb), {
      g: double(value),
      a: this.alphaValue / 100
    }));
    this.initHsb();
    this.initLightness();
    this.greenValue = double(value);
  }
  get green() {
    return this.greenValue;
  }
  set blue(value) {
    const rgb = this.instance.toRgb();
    this.instance = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(__spreadProps(__spreadValues({}, rgb), {
      b: double(value),
      a: this.alphaValue / 100
    }));
    this.initHsb();
    this.initLightness();
    this.blueValue = double(value);
  }
  get blue() {
    return this.blueValue;
  }
  set alpha(value) {
    this.instance.setAlpha(value / 100);
    this.alphaValue = value;
  }
  get alpha() {
    return this.alphaValue;
  }
  get RGB() {
    return [this.red, this.green, this.blue, this.alpha / 100];
  }
  get HSB() {
    return [this.hue, this.saturation, this.brightness, this.alpha / 100];
  }
  get HSL() {
    return [this.hue, this.hslSaturationValue, this.lightness, this.alpha / 100];
  }
}
function rgbaColor(r, g, b, a) {
  return `rgba(${[r, g, b, a / 100].join(",")})`;
}
const clamp = (value, min, max) => {
  return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
};
const HistoryColorKey = "color-history";
const MAX_STORAGE_LENGTH = 8;
var Alpha_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Alpha",
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    size: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(props, { emit }) {
    const barElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const cursorElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    let color = props.color || new Color();
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      red: color.red,
      green: color.green,
      blue: color.blue,
      alpha: color.alpha
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.color, (value) => {
      if (value) {
        color = value;
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
          red: value.red,
          green: value.green,
          blue: value.blue,
          alpha: value.alpha
        });
      }
    }, { deep: true });
    const getBackgroundStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const startColor = rgbaColor(state.red, state.green, state.blue, 0);
      const endColor = rgbaColor(state.red, state.green, state.blue, 100);
      return {
        background: `linear-gradient(to right, ${startColor} , ${endColor})`
      };
    });
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const alpha = state.alpha / 100;
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2);
      }
      return 0;
    };
    const getCursorStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const left = getCursorLeft();
      return {
        left: left + "px",
        top: 0
      };
    });
    const onClickSider = (event) => {
      const target = event.target;
      if (target !== barElement.value) {
        onMoveBar(event);
      }
    };
    const onMoveBar = (event) => {
      event.stopPropagation();
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        let left = event.clientX - rect.left;
        left = Math.max(offsetWidth / 2, left);
        left = Math.min(left, rect.width - offsetWidth / 2);
        const alpha = Math.round((left - offsetWidth / 2) / (rect.width - offsetWidth) * 100);
        color.alpha = alpha;
        state.alpha = alpha;
        emit("change", alpha);
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.tryOnMounted)(() => {
      const dragConfig = {
        drag: (event) => {
          onMoveBar(event);
        },
        end: (event) => {
          onMoveBar(event);
        }
      };
      if (barElement.value && cursorElement.value) {
        _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__.DOMUtils.triggerDragEvent(barElement.value, dragConfig);
      }
    });
    return { barElement, cursorElement, getCursorStyle, getBackgroundStyle, onClickSider };
  }
});
const _withScopeId$5 = (n) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-18925ba6"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1$a = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vc-alpha-slider__bar-handle" }, null, -1));
const _hoisted_2$a = [
  _hoisted_1$a
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-alpha-slider", "transparent", { "small-slider": _ctx.size === "small" }])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getBackgroundStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickSider && _ctx.onClickSider(...args))
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-alpha-slider__bar-pointer", { "small-bar": _ctx.size === "small" }]),
        ref: "cursorElement",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getCursorStyle)
      }, _hoisted_2$a, 6)
    ], 4)
  ], 2);
}
var Alpha = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-18925ba6"]]);
var Palette_vue_vue_type_style_index_0_scoped_true_lang = "";
const defaultColors = [
  [
    "#fcc02e",
    "#f67c01",
    "#e64a19",
    "#d81b43",
    "#8e24aa",
    "#512da7",
    "#1f87e8",
    "#008781",
    "#05a045"
  ],
  [
    "#fed835",
    "#fb8c00",
    "#f5511e",
    "#eb1d4e",
    "#9c28b1",
    "#5d35b0",
    "#2097f3",
    "#029688",
    "#4cb050"
  ],
  [
    "#ffeb3c",
    "#ffa727",
    "#fe5722",
    "#eb4165",
    "#aa47bc",
    "#673bb7",
    "#42a5f6",
    "#26a59a",
    "#83c683"
  ],
  [
    "#fff176",
    "#ffb74e",
    "#ff8a66",
    "#f1627e",
    "#b968c7",
    "#7986cc",
    "#64b5f6",
    "#80cbc4",
    "#a5d6a7"
  ],
  [
    "#fff59c",
    "#ffcc80",
    "#ffab91",
    "#fb879e",
    "#cf93d9",
    "#9ea8db",
    "#90caf8",
    "#b2dfdc",
    "#c8e6ca"
  ],
  [
    "transparent",
    "#ffffff",
    "#dedede",
    "#a9a9a9",
    "#4b4b4b",
    "#353535",
    "#212121",
    "#000000",
    "advance"
  ]
];
const _sfc_main$a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Palette",
  emits: ["change"],
  setup(_props, { emit }) {
    const computedBgStyle = (color) => {
      if (color === "transparent") {
        return color;
      }
      if (color === "advance") {
        return {};
      }
      return { background: tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(color).toRgbString() };
    };
    const onColorChange = (color) => {
      emit("change", color);
    };
    return { palettes: defaultColors, computedBgStyle, onColorChange };
  }
});
const _hoisted_1$9 = { class: "vc-compact" };
const _hoisted_2$9 = ["onClick"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$9, [
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.palettes, (v, i) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: i,
        class: "vc-compact__row"
      }, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(v, (v1, k) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: k,
            class: "vc-compact__color-cube--wrap",
            onClick: ($event) => _ctx.onColorChange(v1)
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                "vc-compact__color_cube",
                {
                  advance: v1 === "advance",
                  transparent: v1 === "transparent"
                }
              ]),
              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.computedBgStyle(v1))
            }, null, 6)
          ], 8, _hoisted_2$9);
        }), 128))
      ]);
    }), 128))
  ]);
}
var Palette = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-b969fd48"]]);
var Board_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Board",
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    round: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    hide: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(true)
  },
  emits: ["change"],
  setup(props, { emit }) {
    var _a, _b, _c;
    const instance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    const hueHsv = {
      h: ((_a = props.color) == null ? void 0 : _a.hue) || 0,
      s: 1,
      v: 1
    };
    const hueColor = new Color(hueHsv).toHexString();
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      hueColor,
      saturation: ((_b = props.color) == null ? void 0 : _b.saturation) || 0,
      brightness: ((_c = props.color) == null ? void 0 : _c.brightness) || 0
    });
    const cursorTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const cursorLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const cursorElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const boardElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const getCursorStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return {
        top: cursorTop.value + "px",
        left: cursorLeft.value + "px"
      };
    });
    const updatePosition = () => {
      if (instance) {
        const el = instance.vnode.el;
        cursorLeft.value = state.saturation * (el == null ? void 0 : el.clientWidth);
        cursorTop.value = (1 - state.brightness) * (el == null ? void 0 : el.clientHeight);
      }
    };
    const onClickBoard = (event) => {
      const target = event.target;
      if (target !== boardElement.value) {
        handleDrag(event);
      }
    };
    const handleDrag = (event) => {
      if (instance) {
        const el = instance.vnode.el;
        const rect = el == null ? void 0 : el.getBoundingClientRect();
        let left = event.clientX - rect.left;
        let top = event.clientY - rect.top;
        left = clamp(left, 0, rect.width);
        top = clamp(top, 0, rect.height);
        const saturation = left / rect.width;
        const bright = clamp(-(top / rect.height) + 1, 0, 1);
        cursorLeft.value = left;
        cursorTop.value = top;
        state.saturation = saturation;
        state.brightness = bright;
        emit("change", saturation, bright);
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.tryOnMounted)(() => {
      if (instance && instance.vnode.el && cursorElement.value) {
        _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__.DOMUtils.triggerDragEvent(cursorElement.value, {
          drag: (event) => {
            handleDrag(event);
          },
          end: (event) => {
            handleDrag(event);
          }
        });
        updatePosition();
      }
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.color, (value) => {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
        hueColor: new Color({ h: value.hue, s: 1, v: 1 }).toHexString(),
        saturation: value.saturation,
        brightness: value.brightness
      });
      updatePosition();
    }, { deep: true });
    return { state, cursorElement, getCursorStyle, onClickBoard };
  }
});
const _withScopeId$4 = (n) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-63803390"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1$8 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vc-saturation__white" }, null, -1));
const _hoisted_2$8 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vc-saturation__black" }, null, -1));
const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, null, -1));
const _hoisted_4$5 = [
  _hoisted_3$6
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    ref: "boardElement",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-saturation", { "vc-saturation__chrome": _ctx.round, "vc-saturation__hidden": _ctx.hide }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ backgroundColor: _ctx.state.hueColor }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickBoard && _ctx.onClickBoard(...args))
  }, [
    _hoisted_1$8,
    _hoisted_2$8,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getCursorStyle)
    }, _hoisted_4$5, 4)
  ], 6);
}
var Board = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-63803390"]]);
var Hue_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Hue",
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    size: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(props, { emit }) {
    const barElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const cursorElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    let color = props.color || new Color();
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      hue: color.hue || 0
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.color, (value) => {
      if (value) {
        color = value;
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(state, { hue: color.hue });
      }
    }, { deep: true });
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        if (state.hue === 360) {
          return rect.width - offsetWidth / 2;
        }
        return state.hue % 360 * (rect.width - offsetWidth) / 360 + offsetWidth / 2;
      }
      return 0;
    };
    const getCursorStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const left = getCursorLeft();
      return {
        left: left + "px",
        top: 0
      };
    });
    const onClickSider = (event) => {
      const target = event.target;
      if (target !== barElement.value) {
        onMoveBar(event);
      }
    };
    const onMoveBar = (event) => {
      event.stopPropagation();
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        let left = event.clientX - rect.left;
        left = Math.min(left, rect.width - offsetWidth / 2);
        left = Math.max(offsetWidth / 2, left);
        const hue = Math.round((left - offsetWidth / 2) / (rect.width - offsetWidth) * 360);
        color.hue = hue;
        state.hue = hue;
        emit("change", hue);
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.tryOnMounted)(() => {
      const dragConfig = {
        drag: (event) => {
          onMoveBar(event);
        },
        end: (event) => {
          onMoveBar(event);
        }
      };
      if (barElement.value && cursorElement.value) {
        _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__.DOMUtils.triggerDragEvent(barElement.value, dragConfig);
      }
    });
    return { barElement, cursorElement, getCursorStyle, onClickSider };
  }
});
const _withScopeId$3 = (n) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5c4cae5b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1$7 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vc-hue-slider__bar-handle" }, null, -1));
const _hoisted_2$7 = [
  _hoisted_1$7
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-hue-slider", { "small-slider": _ctx.size === "small" }])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickSider && _ctx.onClickSider(...args))
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-hue-slider__bar-pointer", { "small-bar": _ctx.size === "small" }]),
        ref: "cursorElement",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getCursorStyle)
      }, _hoisted_2$7, 6)
    ], 512)
  ], 2);
}
var Hue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-5c4cae5b"]]);
var Lightness_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Lightness",
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    size: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(props, { emit }) {
    const barElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const cursorElement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    let color = props.color || new Color();
    const [h, s, l] = color.HSL;
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      hue: h,
      saturation: s,
      lightness: l
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.color, (value) => {
      if (value) {
        color = value;
        const [hue, saturation, lightness] = color.HSL;
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
          hue,
          saturation,
          lightness
        });
      }
    }, { deep: true });
    const getBackgroundStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const color1 = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
        h: state.hue,
        s: state.saturation,
        l: 0.8
      }).toPercentageRgbString();
      const color2 = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
        h: state.hue,
        s: state.saturation,
        l: 0.6
      }).toPercentageRgbString();
      const color3 = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
        h: state.hue,
        s: state.saturation,
        l: 0.4
      }).toPercentageRgbString();
      const color4 = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()({
        h: state.hue,
        s: state.saturation,
        l: 0.2
      }).toPercentageRgbString();
      return {
        background: [
          `-webkit-linear-gradient(left, rgb(255, 255, 255), ${color1}, ${color2}, ${color3}, ${color4}, rgb(0, 0, 0))`,
          `-moz-linear-gradient(left, rgb(255, 255, 255), ${color1}, ${color2}, ${color3}, ${color4}, rgb(0, 0, 0))`,
          `-ms-linear-gradient(left, rgb(255, 255, 255), ${color1}, ${color2}, ${color3}, ${color4}, rgb(0, 0, 0))`
        ]
      };
    });
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const lightness = state.lightness;
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        return (1 - lightness) * (rect.width - offsetWidth) + offsetWidth / 2;
      }
      return 0;
    };
    const getCursorStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const left = getCursorLeft();
      return {
        left: left + "px",
        top: 0
      };
    });
    const onClickSider = (event) => {
      const target = event.target;
      if (target !== barElement.value) {
        onMoveBar(event);
      }
    };
    const onMoveBar = (event) => {
      event.stopPropagation();
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect();
        const offsetWidth = cursorElement.value.offsetWidth;
        let left = event.clientX - rect.left;
        left = Math.max(offsetWidth / 2, left);
        left = Math.min(left, rect.width - offsetWidth / 2);
        const light = 1 - (left - offsetWidth / 2) / (rect.width - offsetWidth);
        color.lightness = light;
        emit("change", light);
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.tryOnMounted)(() => {
      const dragConfig = {
        drag: (event) => {
          onMoveBar(event);
        },
        end: (event) => {
          onMoveBar(event);
        }
      };
      if (barElement.value && cursorElement.value) {
        _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__.DOMUtils.triggerDragEvent(barElement.value, dragConfig);
      }
    });
    return { barElement, cursorElement, getCursorStyle, getBackgroundStyle, onClickSider };
  }
});
const _withScopeId$2 = (n) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6156acb7"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1$6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "vc-lightness-slider__bar-handle" }, null, -1));
const _hoisted_2$6 = [
  _hoisted_1$6
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-lightness-slider", { "small-slider": _ctx.size === "small" }])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getBackgroundStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickSider && _ctx.onClickSider(...args))
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-lightness-slider__bar-pointer", { "small-bar": _ctx.size === "small" }]),
        ref: "cursorElement",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getCursorStyle)
      }, _hoisted_2$6, 6)
    ], 4)
  ], 2);
}
var Lightness = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-6156acb7"]]);
var History_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "History",
  props: {
    colors: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].arrayOf(String).def(() => []),
    round: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false)
  },
  emits: ["change"],
  setup(_props, { emit }) {
    const onColorSelect = (v) => {
      emit("change", v);
    };
    return { onColorSelect };
  }
});
const _hoisted_1$5 = {
  key: 0,
  class: "vc-colorPicker__record"
};
const _hoisted_2$5 = { class: "color-list" };
const _hoisted_3$5 = ["onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.colors && _ctx.colors.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$5, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$5, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.colors, (v, i) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: i,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["color-item", "transparent", { "color-item__round": _ctx.round }]),
          onClick: ($event) => _ctx.onColorSelect(v)
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: "color-item__display",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ backgroundColor: v })
          }, null, 4)
        ], 10, _hoisted_3$5);
      }), 128))
    ])
  ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true);
}
var History = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-7e6b67ca"]]);
var Display_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Display",
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    disableAlpha: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false)
  },
  emits: ["update:color", "change"],
  setup(props, { emit }) {
    var _a, _b, _c;
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      color: props.color,
      previewBgColor: (_a = props.color) == null ? void 0 : _a.toRgbString(),
      alpha: ((_b = props.color) == null ? void 0 : _b.alpha) || 100,
      hex: (_c = props.color) == null ? void 0 : _c.hex
    });
    const getBgColorStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return {
        background: state.previewBgColor
      };
    });
    const onAlphaBlur = (evt) => {
      const target = evt.target;
      const opacity = parseInt(target.value.replace("%", ""));
      if (!isNaN(opacity) && state.color) {
        state.alpha = opacity;
        state.color.alpha = opacity;
      }
    };
    const onInputChange = (event) => {
      const target = event.target;
      const hex = target.value.replace("#", "");
      if (tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(hex).isValid() && state.color) {
        state.color.hex = hex;
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.color, (value) => {
      if (value) {
        state.color = value;
      }
    }, { deep: true });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => state.color, () => {
      if (state.color) {
        state.previewBgColor = state.color.toRgbString();
        state.alpha = state.color.alpha;
        state.hex = state.color.hex;
        emit("update:color", state.color);
        emit("change", state.color);
      }
    }, { deep: true });
    return { state, getBgColorStyle, onAlphaBlur, onInputChange };
  }
});
const _hoisted_1$4 = { class: "vc-display" };
const _hoisted_2$4 = { class: "vc-current-color vc-transparent" };
const _hoisted_3$4 = { class: "vc-color-input" };
const _hoisted_4$4 = ["value"];
const _hoisted_5$4 = {
  key: 0,
  class: "vc-alpha-input"
};
const _hoisted_6$2 = ["value"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$4, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "color-cube",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getBgColorStyle)
      }, null, 4)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3$4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        value: _ctx.state.hex,
        onBlur: _cache[0] || (_cache[0] = (...args) => _ctx.onInputChange && _ctx.onInputChange(...args))
      }, null, 40, _hoisted_4$4)
    ]),
    !_ctx.disableAlpha ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5$4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        class: "vc-alpha-input__inner",
        value: _ctx.state.alpha + "%",
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onAlphaBlur && _ctx.onAlphaBlur(...args))
      }, null, 40, _hoisted_6$2)
    ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
  ]);
}
var Display = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-0067da1d"]]);
var FkColorPicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "FkColorPicker",
  components: { Display, Alpha, Palette, Board, Hue, Lightness, History },
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    disableHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    roundHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    disableAlpha: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false)
  },
  emits: ["update:color", "change", "advanceChange"],
  setup(props, { emit }) {
    const colorInstance = props.color || new Color();
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      color: colorInstance,
      hex: colorInstance.toHexString(),
      rgb: colorInstance.toRgbString()
    });
    const advancePanelShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const previewStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return { background: state.rgb };
    });
    const onBack = () => {
      advancePanelShow.value = false;
      emit("advanceChange", false);
    };
    const historyColors = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(HistoryColorKey, [], {});
    const updateColorHistoryFn = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.useDebounceFn)(() => {
      if (props.disableHistory) {
        return;
      }
      const rgbString = state.color.toRgbString();
      historyColors.value = historyColors.value.filter((value) => {
        return !tinycolor2__WEBPACK_IMPORTED_MODULE_2___default().equals(value, rgbString);
      });
      if (historyColors.value.includes(rgbString)) {
        return;
      }
      while (historyColors.value.length > MAX_STORAGE_LENGTH) {
        historyColors.value.pop();
      }
      historyColors.value.unshift(rgbString);
    }, 500);
    const onCompactChange = (color) => {
      if (color === "advance") {
        advancePanelShow.value = true;
        emit("advanceChange", true);
      } else {
        state.color.hex = color;
        emit("advanceChange", false);
      }
    };
    const onAlphaChange = (alpha) => {
      state.color.alpha = alpha;
    };
    const onHueChange = (hue) => {
      state.color.hue = hue;
    };
    const onBoardChange = (saturation, brightness) => {
      state.color.saturation = saturation;
      state.color.brightness = brightness;
    };
    const onLightChange = (light) => {
      state.color.lightness = light;
    };
    const onInputChange = (event) => {
      const target = event.target;
      const hex = target.value.replace("#", "");
      if (tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(hex).isValid()) {
        state.color.hex = hex;
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.color, (value) => {
      if (value) {
        state.color = value;
      }
    }, { deep: true });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => state.color, () => {
      state.hex = state.color.hex;
      state.rgb = state.color.toRgbString();
      updateColorHistoryFn();
      emit("update:color", state.color);
      emit("change", state.color);
    }, { deep: true });
    return {
      state,
      advancePanelShow,
      onBack,
      onCompactChange,
      onAlphaChange,
      onHueChange,
      onBoardChange,
      onLightChange,
      onInputChange,
      previewStyle,
      historyColors
    };
  }
});
const _withScopeId$1 = (n) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-592a5ec3"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1$3 = { class: "vc-fk-colorPicker" };
const _hoisted_2$3 = { class: "vc-fk-colorPicker__inner" };
const _hoisted_3$3 = { class: "vc-fk-colorPicker__header" };
const _hoisted_4$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "back" }, null, -1));
const _hoisted_5$3 = [
  _hoisted_4$3
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Palette = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Palette");
  const _component_Board = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Board");
  const _component_Hue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Hue");
  const _component_Lightness = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Lightness");
  const _component_Alpha = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Alpha");
  const _component_Display = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Display");
  const _component_History = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("History");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$3, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3$3, [
        _ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 0,
          style: { "cursor": "pointer" },
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onBack && _ctx.onBack(...args))
        }, _hoisted_5$3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
      ]),
      !_ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Palette, {
        key: 0,
        onChange: _ctx.onCompactChange
      }, null, 8, ["onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      _ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Board, {
        key: 1,
        color: _ctx.state.color,
        onChange: _ctx.onBoardChange
      }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      _ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Hue, {
        key: 2,
        color: _ctx.state.color,
        onChange: _ctx.onHueChange
      }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      !_ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Lightness, {
        key: 3,
        color: _ctx.state.color,
        onChange: _ctx.onLightChange
      }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      !_ctx.disableAlpha ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Alpha, {
        key: 4,
        color: _ctx.state.color,
        onChange: _ctx.onAlphaChange
      }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Display, {
        color: _ctx.state.color,
        "disable-alpha": _ctx.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      !_ctx.disableHistory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_History, {
        key: 5,
        round: _ctx.roundHistory,
        colors: _ctx.historyColors,
        onChange: _ctx.onCompactChange
      }, null, 8, ["round", "colors", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
    ])
  ]);
}
var FkColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-592a5ec3"]]);
var ChromeColorPicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "ChromeColorPicker",
  components: { Display, Alpha, Board, Hue, History },
  props: {
    color: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color),
    disableHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    roundHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    disableAlpha: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false)
  },
  emits: ["update:color", "change"],
  setup(props, { emit }) {
    const colorInstance = props.color || new Color();
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      color: colorInstance,
      hex: colorInstance.toHexString(),
      rgb: colorInstance.toRgbString()
    });
    const previewStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return { background: state.rgb };
    });
    const historyColors = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(HistoryColorKey, [], {});
    const updateColorHistoryFn = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.useDebounceFn)(() => {
      if (props.disableHistory) {
        return;
      }
      const rgbString = state.color.toRgbString();
      historyColors.value = historyColors.value.filter((value) => {
        return !tinycolor2__WEBPACK_IMPORTED_MODULE_2___default().equals(value, rgbString);
      });
      if (historyColors.value.includes(rgbString)) {
        return;
      }
      while (historyColors.value.length > MAX_STORAGE_LENGTH) {
        historyColors.value.pop();
      }
      historyColors.value.unshift(rgbString);
    }, 500);
    const onAlphaChange = (alpha) => {
      state.color.alpha = alpha;
    };
    const onHueChange = (hue) => {
      state.color.hue = hue;
    };
    const onBoardChange = (saturation, brightness) => {
      state.color.saturation = saturation;
      state.color.brightness = brightness;
    };
    const onCompactChange = (color) => {
      if (color !== "advance") {
        state.color.hex = color;
      }
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.color, (value) => {
      if (value) {
        state.color = value;
      }
    }, { deep: true });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => state.color, () => {
      state.hex = state.color.hex;
      state.rgb = state.color.toRgbString();
      updateColorHistoryFn();
      emit("update:color", state.color);
      emit("change", state.color);
    }, { deep: true });
    return {
      state,
      previewStyle,
      historyColors,
      onAlphaChange,
      onHueChange,
      onBoardChange,
      onCompactChange
    };
  }
});
const _hoisted_1$2 = { class: "vc-chrome-colorPicker" };
const _hoisted_2$2 = { class: "vc-chrome-colorPicker-body" };
const _hoisted_3$2 = { class: "chrome-controls" };
const _hoisted_4$2 = { class: "chrome-color-wrap transparent" };
const _hoisted_5$2 = { class: "chrome-sliders" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Board = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Board");
  const _component_Hue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Hue");
  const _component_Alpha = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Alpha");
  const _component_Display = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Display");
  const _component_History = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("History");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$2, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Board, {
      round: true,
      hide: false,
      color: _ctx.state.color,
      onChange: _ctx.onBoardChange
    }, null, 8, ["color", "onChange"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3$2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4$2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: "current-color",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.previewStyle)
          }, null, 4)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5$2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Hue, {
            size: "small",
            color: _ctx.state.color,
            onChange: _ctx.onHueChange
          }, null, 8, ["color", "onChange"]),
          !_ctx.disableAlpha ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Alpha, {
            key: 0,
            size: "small",
            color: _ctx.state.color,
            onChange: _ctx.onAlphaChange
          }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Display, {
        color: _ctx.state.color,
        "disable-alpha": _ctx.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      !_ctx.disableHistory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_History, {
        key: 0,
        round: _ctx.roundHistory,
        colors: _ctx.historyColors,
        onChange: _ctx.onCompactChange
      }, null, 8, ["round", "colors", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
    ])
  ]);
}
var ChromeColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-61d7303b"]]);
const ColorPickerProviderKey = "Vue3ColorPickerProvider";
var GradientColorPicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "GradientColorPicker",
  components: { Angle: vue3_angle__WEBPACK_IMPORTED_MODULE_4__.Angle, Display, Alpha, Palette, Board, Hue, Lightness, History },
  props: {
    startColor: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color).isRequired,
    endColor: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].instanceOf(Color).isRequired,
    startColorStop: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].number.def(0),
    endColorStop: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].number.def(100),
    angle: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].number.def(0),
    disableHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    roundHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    disableAlpha: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false)
  },
  emits: [
    "update:startColor",
    "update:endColor",
    "update:angle",
    "update:startColorStop",
    "update:endColorStop",
    "startColorChange",
    "endColorChange",
    "advanceChange",
    "angleChange",
    "startColorStopChange",
    "endColorStopChange"
  ],
  setup(props, { emit }) {
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      startActive: true,
      startColor: props.startColor,
      endColor: props.endColor,
      startColorStop: props.startColorStop,
      endColorStop: props.endColorStop,
      angle: props.angle,
      startColorRgba: props.startColor.toRgbString(),
      endColorRgba: props.endColor.toRgbString()
    });
    const parent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(ColorPickerProviderKey);
    const advancePanelShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const startGradientRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const stopGradientRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const colorRangeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const currentColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
      get: () => {
        return state.startActive ? state.startColor : state.endColor;
      },
      set: (v) => {
        if (state.startActive) {
          state.startColor = v;
          return;
        }
        state.endColor = v;
      }
    });
    const getStartColorLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (colorRangeRef.value && startGradientRef.value) {
        const alpha = state.startColorStop / 100;
        const rect = colorRangeRef.value.getBoundingClientRect();
        const offsetWidth = startGradientRef.value.offsetWidth;
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2);
      }
      return 0;
    });
    const getEndColorLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (colorRangeRef.value && stopGradientRef.value) {
        const alpha = state.endColorStop / 100;
        const rect = colorRangeRef.value.getBoundingClientRect();
        const offsetWidth = stopGradientRef.value.offsetWidth;
        return Math.round(alpha * (rect.width - offsetWidth) + offsetWidth / 2);
      }
      return 0;
    });
    const gradientBg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return {
        background: `linear-gradient(${state.angle}deg, ${state.startColorRgba} ${state.startColorStop}%, ${state.endColorRgba} ${state.endColorStop}%)`
      };
    });
    const dragStartRange = (evt) => {
      var _a;
      state.startActive = true;
      if (colorRangeRef.value && startGradientRef.value) {
        const rect = (_a = colorRangeRef.value) == null ? void 0 : _a.getBoundingClientRect();
        let left = evt.clientX - rect.left;
        left = Math.max(startGradientRef.value.offsetWidth / 2, left);
        left = Math.min(left, rect.width - startGradientRef.value.offsetWidth / 2);
        state.startColorStop = Math.round((left - startGradientRef.value.offsetWidth / 2) / (rect.width - startGradientRef.value.offsetWidth) * 100);
        emit("update:startColorStop", state.startColorStop);
        emit("startColorStopChange", state.startColorStop);
      }
    };
    const dragEndRange = (evt) => {
      var _a;
      state.startActive = false;
      if (colorRangeRef.value && stopGradientRef.value) {
        const rect = (_a = colorRangeRef.value) == null ? void 0 : _a.getBoundingClientRect();
        let left = evt.clientX - rect.left;
        left = Math.max(stopGradientRef.value.offsetWidth / 2, left);
        left = Math.min(left, rect.width - stopGradientRef.value.offsetWidth / 2);
        state.endColorStop = Math.round((left - stopGradientRef.value.offsetWidth / 2) / (rect.width - stopGradientRef.value.offsetWidth) * 100);
        emit("update:endColorStop", state.endColorStop);
        emit("endColorStopChange", state.endColorStop);
      }
    };
    const onDegreeBlur = (evt) => {
      const target = evt.target;
      const degree = parseInt(target.value.replace("\xB0", ""));
      if (!isNaN(degree)) {
        state.angle = degree % 360;
      }
      emit("update:angle", state.angle);
      emit("angleChange", state.angle);
    };
    const onDegreeChange = (angle) => {
      state.angle = angle;
      emit("update:angle", state.angle);
      emit("angleChange", state.angle);
    };
    const onCompactChange = (color) => {
      if (color === "advance") {
        advancePanelShow.value = true;
        emit("advanceChange", true);
      } else {
        currentColor.value.hex = color;
        emit("advanceChange", false);
      }
      doColorChange();
    };
    const onAlphaChange = (alpha) => {
      currentColor.value.alpha = alpha;
      doColorChange();
    };
    const onHueChange = (hue) => {
      currentColor.value.hue = hue;
      doColorChange();
    };
    const onBoardChange = (saturation, brightness) => {
      currentColor.value.saturation = saturation;
      currentColor.value.brightness = brightness;
      doColorChange();
    };
    const onLightChange = (light) => {
      currentColor.value.lightness = light;
      doColorChange();
    };
    const doColorChange = () => {
      if (state.startActive) {
        emit("update:startColor", state.startColor);
        emit("startColorChange", state.startColor);
      } else {
        emit("update:endColor", state.endColor);
        emit("endColorChange", state.endColor);
      }
    };
    const onBack = () => {
      advancePanelShow.value = false;
      emit("advanceChange", false);
    };
    const historyColors = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(HistoryColorKey, [], {});
    const updateColorHistoryFn = (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.useDebounceFn)(() => {
      if (props.disableHistory) {
        return;
      }
      const rgbString = currentColor.value.toRgbString();
      historyColors.value = historyColors.value.filter((value) => {
        return !tinycolor2__WEBPACK_IMPORTED_MODULE_2___default().equals(value, rgbString);
      });
      if (historyColors.value.includes(rgbString)) {
        return;
      }
      while (historyColors.value.length > MAX_STORAGE_LENGTH) {
        historyColors.value.pop();
      }
      historyColors.value.unshift(rgbString);
    }, 500);
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.tryOnMounted)(() => {
      if (stopGradientRef.value && startGradientRef.value) {
        _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__.DOMUtils.triggerDragEvent(stopGradientRef.value, {
          drag: (event) => {
            dragEndRange(event);
          },
          end: (event) => {
            dragEndRange(event);
          }
        });
        _aesoper_normal_utils__WEBPACK_IMPORTED_MODULE_3__.DOMUtils.triggerDragEvent(startGradientRef.value, {
          drag: (event) => {
            dragStartRange(event);
          },
          end: (event) => {
            dragStartRange(event);
          }
        });
      }
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => state.startColor, (value) => {
      state.startColorRgba = value.toRgbString();
    }, { deep: true });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => state.endColor, (value) => {
      state.endColorRgba = value.toRgbString();
    }, { deep: true });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => currentColor.value, () => {
      updateColorHistoryFn();
    }, { deep: true });
    return {
      startGradientRef,
      stopGradientRef,
      colorRangeRef,
      state,
      currentColor,
      getStartColorLeft,
      getEndColorLeft,
      gradientBg,
      advancePanelShow,
      onDegreeBlur,
      onCompactChange,
      onAlphaChange,
      onHueChange,
      onBoardChange,
      onLightChange,
      historyColors,
      onBack,
      onDegreeChange,
      lang: parent == null ? void 0 : parent.lang
    };
  }
});
const _withScopeId = (n) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f63daa7a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1$1 = { class: "vc-gradient-picker" };
const _hoisted_2$1 = { class: "vc-gradient-picker__header" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "back" }, null, -1));
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = { class: "vc-gradient-picker__body" };
const _hoisted_6$1 = {
  class: "vc-color-range",
  ref: "colorRangeRef"
};
const _hoisted_7 = { class: "vc-color-range__container" };
const _hoisted_8 = { class: "vc-gradient__stop__container" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "vc-gradient__stop--inner" }, null, -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = ["title"];
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "vc-gradient__stop--inner" }, null, -1));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = { class: "vc-picker-degree-input vc-degree-input" };
const _hoisted_16 = { class: "vc-degree-input__control" };
const _hoisted_17 = ["value"];
const _hoisted_18 = { class: "vc-degree-input__panel" };
const _hoisted_19 = { class: "vc-degree-input__disk" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Angle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Angle");
  const _component_Palette = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Palette");
  const _component_Board = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Board");
  const _component_Hue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Hue");
  const _component_Lightness = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Lightness");
  const _component_Alpha = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Alpha");
  const _component_Display = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Display");
  const _component_History = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("History");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1$1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2$1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: { "cursor": "pointer" },
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onBack && _ctx.onBack(...args))
      }, _hoisted_4$1)
    ], 512), [
      [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.advancePanelShow]
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5$1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6$1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: "vc-background",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.gradientBg)
          }, null, 4),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                "vc-gradient__stop",
                {
                  "vc-gradient__stop--current": _ctx.state.startActive
                }
              ]),
              ref: "startGradientRef",
              title: _ctx.lang === "ZH-cn" ? "\u5F00\u59CB" : "Start",
              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ left: _ctx.getStartColorLeft + "px" })
            }, _hoisted_11, 14, _hoisted_9),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                "vc-gradient__stop",
                {
                  "vc-gradient__stop--current": !_ctx.state.startActive
                }
              ]),
              ref: "stopGradientRef",
              title: _ctx.lang === "ZH-cn" ? "\u7ED3\u675F" : "End",
              style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ left: _ctx.getEndColorLeft + "px" })
            }, _hoisted_14, 14, _hoisted_12)
          ])
        ])
      ], 512),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            value: _ctx.state.angle,
            onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onDegreeBlur && _ctx.onDegreeBlur(...args))
          }, null, 40, _hoisted_17)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Angle, {
              angle: _ctx.state.angle,
              "onUpdate:angle": _cache[2] || (_cache[2] = ($event) => _ctx.state.angle = $event),
              size: 40,
              onChange: _ctx.onDegreeChange
            }, null, 8, ["angle", "onChange"])
          ])
        ])
      ])
    ]),
    !_ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Palette, {
      key: 0,
      onChange: _ctx.onCompactChange
    }, null, 8, ["onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    _ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Board, {
      key: 1,
      color: _ctx.currentColor,
      onChange: _ctx.onBoardChange
    }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    _ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Hue, {
      key: 2,
      color: _ctx.currentColor,
      onChange: _ctx.onHueChange
    }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    !_ctx.advancePanelShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Lightness, {
      key: 3,
      color: _ctx.currentColor,
      onChange: _ctx.onLightChange
    }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    !_ctx.disableAlpha ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Alpha, {
      key: 4,
      color: _ctx.currentColor,
      onChange: _ctx.onAlphaChange
    }, null, 8, ["color", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Display, {
      color: _ctx.currentColor,
      "disable-alpha": _ctx.disableAlpha
    }, null, 8, ["color", "disable-alpha"]),
    !_ctx.disableHistory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_History, {
      key: 5,
      round: _ctx.roundHistory,
      colors: _ctx.historyColors,
      onChange: _ctx.onCompactChange
    }, null, 8, ["round", "colors", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
  ]);
}
var GradientColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-f63daa7a"]]);
var WrapContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "WrapContainer",
  props: {
    showTab: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
    activeKey: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["pure", "gradient"]).def("pure")
  },
  emits: ["update:activeKey", "change"],
  setup(props, { emit }) {
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      activeKey: props.activeKey
    });
    const parent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(ColorPickerProviderKey);
    const onActiveKeyChange = (key) => {
      state.activeKey = key;
      emit("update:activeKey", key);
      emit("change", key);
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.activeKey, (value) => {
      state.activeKey = value;
    });
    return { state, onActiveKeyChange, lang: parent == null ? void 0 : parent.lang };
  }
});
const _hoisted_1 = { class: "vc-colorpicker" };
const _hoisted_2 = { class: "vc-colorpicker--container" };
const _hoisted_3 = {
  key: 0,
  class: "vc-colorpicker--tabs"
};
const _hoisted_4 = { class: "vc-colorpicker--tabs__inner" };
const _hoisted_5 = { class: "vc-btn__content" };
const _hoisted_6 = { class: "vc-btn__content" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      _ctx.showTab ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": _ctx.state.activeKey === "pure"
              }
            ]),
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onActiveKeyChange("pure"))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.lang === "ZH-cn" ? "\u7EAF\u8272" : "Pure"), 1)
            ])
          ], 2),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": _ctx.state.activeKey === "gradient"
              }
            ]),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onActiveKeyChange("gradient"))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.lang === "ZH-cn" ? "\u6E10\u53D8\u8272" : "Gradient"), 1)
            ])
          ], 2),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: "vc-colorpicker--tabs__bg",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
              width: `50%`,
              left: `calc(${_ctx.state.activeKey === "gradient" ? 50 : 0}%)`
            })
          }, null, 4)
        ])
      ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var WrapContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4afdf3bb"]]);
var ColorPicker_vue_vue_type_style_index_0_scoped_true_lang = "";
const colorPickerProps = {
  isWidget: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
  pickerType: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["fk", "chrome"]).def("fk"),
  shape: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["circle", "square"]).def("square"),
  pureColor: {
    type: [String, Object],
    default: "#000000"
  },
  gradientColor: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].string.def("#000"),
  format: {
    type: String,
    default: "rgb"
  },
  disableAlpha: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
  disableHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
  roundHistory: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].bool.def(false),
  useType: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["pure", "gradient", "both"]).def("pure"),
  activeKey: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].oneOf(["pure", "gradient"]).def("pure"),
  lang: {
    type: String,
    default: "ZH-cn"
  },
  zIndex: vue_types__WEBPACK_IMPORTED_MODULE_1__["default"].number.def(9999)
};
const _sfc_main = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "ColorPicker",
  components: { FkColorPicker, ChromeColorPicker, GradientColorPicker, WrapContainer },
  inheritAttrs: false,
  props: colorPickerProps,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(props, { emit }) {
    const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      pureColor: props.pureColor || "",
      activeKey: props.useType === "gradient" ? "gradient" : "pure",
      isAdvanceMode: false
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(ColorPickerProviderKey, {
      lang: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.lang || "ZH-cn")
    });
    const instance = new Color(state.pureColor);
    const colorInstance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(instance);
    const startColor = new Color("#000");
    const endColor = new Color("#000");
    const gradientState = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      startColor,
      endColor,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      gradientColor: props.gradientColor
    });
    const showPicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const colorCubeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const pickerRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    const getBgColorStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const bgColor = state.activeKey !== "gradient" ? tinycolor2__WEBPACK_IMPORTED_MODULE_2___default()(state.pureColor).toRgbString() : gradientState.gradientColor;
      return {
        background: bgColor
      };
    });
    const getComponentName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (state.activeKey === "gradient") {
        return GradientColorPicker.name;
      }
      return props.pickerType === "fk" ? FkColorPicker.name : ChromeColorPicker.name;
    });
    const getBindArgs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (state.activeKey === "gradient") {
        return {
          startColor: gradientState.startColor,
          endColor: gradientState.endColor,
          onStartColorChange: (v) => {
            gradientState.startColor = v;
            onGradientChange();
          },
          onEndColorChange: (v) => {
            gradientState.endColor = v;
            onGradientChange();
          },
          angle: gradientState.angle,
          startColorStop: gradientState.startColorStop,
          endColorStop: gradientState.endColorStop,
          onStartColorStopChange: (v) => {
            gradientState.startColorStop = v;
            onGradientChange();
          },
          onEndColorStopChange: (v) => {
            gradientState.endColorStop = v;
            onGradientChange();
          },
          onAngleChange: (v) => {
            gradientState.angle = v;
            onGradientChange();
          },
          onAdvanceChange: (v) => {
            state.isAdvanceMode = v;
          }
        };
      }
      return {
        disableAlpha: props.disableAlpha,
        disableHistory: props.disableHistory,
        roundHistory: props.roundHistory,
        color: colorInstance.value,
        onChange: onColorChange,
        onAdvanceChange
      };
    });
    const onAdvanceChange = (isAdvance) => {
      state.isAdvanceMode = isAdvance;
    };
    const onShowPicker = () => {
      showPicker.value = true;
    };
    const onHidePicker = () => {
      showPicker.value = false;
    };
    const parseGradientColor = () => {
      var _a, _b, _c, _d;
      try {
        const [colorNode] = (0,gradient_parser__WEBPACK_IMPORTED_MODULE_6__.parse)(gradientState.gradientColor);
        if (colorNode && colorNode.type === "linear-gradient" && ((_a = colorNode.orientation) == null ? void 0 : _a.type) === "angular" && colorNode.colorStops.length >= 2) {
          const startColorVal = colorNode.colorStops[0];
          const endColorVal = colorNode.colorStops[1];
          gradientState.startColorStop = Number((_b = startColorVal.length) == null ? void 0 : _b.value) || 0;
          gradientState.endColorStop = Number((_c = endColorVal.length) == null ? void 0 : _c.value) || 0;
          gradientState.angle = Number((_d = colorNode.orientation) == null ? void 0 : _d.value) || 0;
          const [r, g, b, a] = startColorVal.value;
          const [r1, g1, b1, a1] = startColorVal.value;
          gradientState.startColor = new Color({
            r: Number(r),
            g: Number(g),
            b: Number(b),
            a: Number(a)
          });
          gradientState.startColor = new Color({
            r: Number(r1),
            g: Number(g1),
            b: Number(b1),
            a: Number(a1)
          });
        }
      } catch (e) {
        console.log(`[Parse Color]: ${e}`);
      }
    };
    const onGradientChange = () => {
      const nodes = color2GradientNode();
      try {
        gradientState.gradientColor = (0,gradient_parser__WEBPACK_IMPORTED_MODULE_6__.stringify)(nodes);
        emit("update:gradientColor", gradientState.gradientColor);
        emit("gradientColorChange", gradientState.gradientColor);
      } catch (e) {
        console.log(e);
      }
    };
    const color2GradientNode = () => {
      const nodes = [];
      const startColorArr = gradientState.startColor.RGB.map((v) => v.toString());
      const endColorArr = gradientState.endColor.RGB.map((v) => v.toString());
      nodes.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: gradientState.angle + "" },
        colorStops: [
          {
            type: "rgba",
            value: [startColorArr[0], startColorArr[1], startColorArr[2], startColorArr[3]],
            length: { value: gradientState.startColorStop + "", type: "%" }
          },
          {
            type: "rgba",
            value: [endColorArr[0], endColorArr[1], endColorArr[2], endColorArr[3]],
            length: { value: gradientState.endColorStop + "", type: "%" }
          }
        ]
      });
      return nodes;
    };
    const onInit = () => {
      if (colorCubeRef.value && pickerRef.value) {
        (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_10__.createPopper)(colorCubeRef.value, pickerRef.value, {
          placement: "auto",
          modifiers: [
            {
              name: "flip",
              options: {
                fallbackPlacements: ["top", "left"]
              }
            }
          ]
        });
      }
    };
    const onColorChange = (v) => {
      colorInstance.value = v;
      state.pureColor = v.toString(props.format);
      emitColorChange();
    };
    const emitColorChange = () => {
      emit("update:pureColor", state.pureColor);
      emit("pureColorChange", state.pureColor);
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_9__.onClickOutside)(pickerRef, () => {
      onHidePicker();
    });
    const onActiveKeyChange = (key) => {
      state.activeKey = key;
      emit("update:activeKey", key);
      emit("activeKeyChange", key);
    };
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.tryOnMounted)(() => {
      onInit();
      emitColorChange();
      parseGradientColor();
      onGradientChange();
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.gradientColor, (value) => {
      if (value != gradientState.gradientColor) {
        gradientState.gradientColor = value;
      }
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => gradientState.gradientColor, () => {
      parseGradientColor();
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.activeKey, (value) => {
      state.activeKey = value;
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.useType, (value) => {
      if (state.activeKey !== "gradient" && value === "gradient") {
        state.activeKey = "gradient";
      } else {
        state.activeKey = "pure";
      }
    });
    (0,_vueuse_core__WEBPACK_IMPORTED_MODULE_8__.whenever)(() => props.pureColor, (value) => {
      const equal = tinycolor2__WEBPACK_IMPORTED_MODULE_2___default().equals(value, state.pureColor);
      if (!equal) {
        state.pureColor = value;
        colorInstance.value = new Color(value);
        emitColorChange();
      }
    }, { deep: true });
    return {
      colorCubeRef,
      pickerRef,
      showPicker,
      colorInstance,
      getBgColorStyle,
      onColorChange,
      onShowPicker,
      onActiveKeyChange,
      getComponentName,
      getBindArgs,
      state
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_WrapContainer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("WrapContainer");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    !_ctx.isWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["vc-color-wrap", "transparent", { round: _ctx.shape === "circle" }]),
      ref: "colorCubeRef"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "current-color",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getBgColorStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onShowPicker && _ctx.onShowPicker(...args))
      }, null, 4)
    ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    _ctx.isWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WrapContainer, {
      key: 1,
      "active-key": _ctx.state.activeKey,
      "onUpdate:active-key": _cache[1] || (_cache[1] = ($event) => _ctx.state.activeKey = $event),
      "show-tab": _ctx.useType === "both",
      onChange: _ctx.onActiveKeyChange,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ zIndex: _ctx.zIndex })
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.getComponentName), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: _ctx.getComponentName }, _ctx.getBindArgs), null, 16))
      ]),
      _: 1
    }, 8, ["active-key", "show-tab", "onChange", "style"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
    !_ctx.isWidget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
      key: 2,
      to: "body"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        ref: "pickerRef",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ zIndex: _ctx.zIndex })
      }, [
        _ctx.showPicker ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_WrapContainer, {
          key: 0,
          "show-tab": _ctx.useType === "both" && !_ctx.state.isAdvanceMode,
          "active-key": _ctx.state.activeKey,
          "onUpdate:active-key": _cache[2] || (_cache[2] = ($event) => _ctx.state.activeKey = $event),
          onChange: _ctx.onActiveKeyChange
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.getComponentName), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: _ctx.getComponentName }, _ctx.getBindArgs), null, 16))
          ]),
          _: 1
        }, 8, ["show-tab", "active-key", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
      ], 4), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.showPicker]
      ])
    ])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
  ], 64);
}
var ColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0aa3a75d"]]);
const Vue3ColorPicker = {
  install: (app) => {
    app.component(ColorPicker.name, ColorPicker);
    app.component("Vue3" + ColorPicker.name, ColorPicker);
  }
};



/***/ }),

/***/ "./node_modules/@vueuse/core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/@vueuse/core/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.and),
/* harmony export */   "assert": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "biSyncRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.biSyncRef),
/* harmony export */   "bypassFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.bypassFilter),
/* harmony export */   "clamp": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "containsProp": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.containsProp),
/* harmony export */   "controlledComputed": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.controlledComputed),
/* harmony export */   "controlledRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.controlledRef),
/* harmony export */   "createEventHook": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook),
/* harmony export */   "createFilterWrapper": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper),
/* harmony export */   "createGlobalState": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState),
/* harmony export */   "createReactiveFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createReactiveFn),
/* harmony export */   "createSharedComposable": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSharedComposable),
/* harmony export */   "createSingletonPromise": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSingletonPromise),
/* harmony export */   "debounceFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debounceFilter),
/* harmony export */   "debouncedRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debouncedRef),
/* harmony export */   "debouncedWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debouncedWatch),
/* harmony export */   "eagerComputed": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.eagerComputed),
/* harmony export */   "extendRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.extendRef),
/* harmony export */   "get": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.get),
/* harmony export */   "identity": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity),
/* harmony export */   "ignorableWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch),
/* harmony export */   "increaseWithUnit": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.increaseWithUnit),
/* harmony export */   "invoke": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.invoke),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isBoolean),
/* harmony export */   "isClient": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient),
/* harmony export */   "isDef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDef),
/* harmony export */   "isDefined": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isDefined),
/* harmony export */   "isFunction": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNumber": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isString": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString),
/* harmony export */   "isWindow": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isWindow),
/* harmony export */   "makeDestructurable": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.makeDestructurable),
/* harmony export */   "noop": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   "not": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.not),
/* harmony export */   "now": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.now),
/* harmony export */   "objectPick": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectPick),
/* harmony export */   "or": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.or),
/* harmony export */   "pausableFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableFilter),
/* harmony export */   "pausableWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch),
/* harmony export */   "promiseTimeout": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout),
/* harmony export */   "rand": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.rand),
/* harmony export */   "reactify": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactify),
/* harmony export */   "reactifyObject": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactifyObject),
/* harmony export */   "reactivePick": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.reactivePick),
/* harmony export */   "refDefault": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.refDefault),
/* harmony export */   "set": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.set),
/* harmony export */   "syncRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.syncRef),
/* harmony export */   "throttleFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter),
/* harmony export */   "throttledRef": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttledRef),
/* harmony export */   "throttledWatch": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttledWatch),
/* harmony export */   "timestamp": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp),
/* harmony export */   "toReactive": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toReactive),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "tryOnBeforeUnmount": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnBeforeUnmount),
/* harmony export */   "tryOnMounted": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted),
/* harmony export */   "tryOnScopeDispose": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose),
/* harmony export */   "tryOnUnmounted": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted),
/* harmony export */   "until": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.until),
/* harmony export */   "useCounter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useCounter),
/* harmony export */   "useDebounce": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounce),
/* harmony export */   "useDebounceFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn),
/* harmony export */   "useInterval": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useInterval),
/* harmony export */   "useIntervalFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn),
/* harmony export */   "useLastChanged": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useLastChanged),
/* harmony export */   "useThrottle": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottle),
/* harmony export */   "useThrottleFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottleFn),
/* harmony export */   "useTimeout": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeout),
/* harmony export */   "useTimeoutFn": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn),
/* harmony export */   "useToggle": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useToggle),
/* harmony export */   "watchAtMost": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchAtMost),
/* harmony export */   "watchOnce": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchOnce),
/* harmony export */   "watchWithFilter": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter),
/* harmony export */   "whenever": () => (/* reexport safe */ _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.whenever),
/* harmony export */   "DefaultMagicKeysAliasMap": () => (/* binding */ DefaultMagicKeysAliasMap),
/* harmony export */   "StorageSerializers": () => (/* binding */ StorageSerializers),
/* harmony export */   "SwipeDirection": () => (/* binding */ SwipeDirection),
/* harmony export */   "TransitionPresets": () => (/* binding */ TransitionPresets),
/* harmony export */   "asyncComputed": () => (/* binding */ asyncComputed),
/* harmony export */   "autoResetRef": () => (/* binding */ autoResetRef),
/* harmony export */   "breakpointsAntDesign": () => (/* binding */ breakpointsAntDesign),
/* harmony export */   "breakpointsBootstrapV5": () => (/* binding */ breakpointsBootstrapV5),
/* harmony export */   "breakpointsQuasar": () => (/* binding */ breakpointsQuasar),
/* harmony export */   "breakpointsSematic": () => (/* binding */ breakpointsSematic),
/* harmony export */   "breakpointsTailwind": () => (/* binding */ breakpointsTailwind),
/* harmony export */   "breakpointsVuetify": () => (/* binding */ breakpointsVuetify),
/* harmony export */   "computedInject": () => (/* binding */ computedInject),
/* harmony export */   "createFetch": () => (/* binding */ createFetch),
/* harmony export */   "createUnrefFn": () => (/* binding */ createUnrefFn),
/* harmony export */   "onClickOutside": () => (/* binding */ onClickOutside),
/* harmony export */   "onKeyDown": () => (/* binding */ onKeyDown),
/* harmony export */   "onKeyPressed": () => (/* binding */ onKeyPressed),
/* harmony export */   "onKeyStroke": () => (/* binding */ onKeyStroke),
/* harmony export */   "onKeyUp": () => (/* binding */ onKeyUp),
/* harmony export */   "onStartTyping": () => (/* binding */ onStartTyping),
/* harmony export */   "templateRef": () => (/* binding */ templateRef),
/* harmony export */   "unrefElement": () => (/* binding */ unrefElement),
/* harmony export */   "useActiveElement": () => (/* binding */ useActiveElement),
/* harmony export */   "useAsyncState": () => (/* binding */ useAsyncState),
/* harmony export */   "useBase64": () => (/* binding */ useBase64),
/* harmony export */   "useBattery": () => (/* binding */ useBattery),
/* harmony export */   "useBreakpoints": () => (/* binding */ useBreakpoints),
/* harmony export */   "useBrowserLocation": () => (/* binding */ useBrowserLocation),
/* harmony export */   "useClipboard": () => (/* binding */ useClipboard),
/* harmony export */   "useConfirmDialog": () => (/* binding */ useConfirmDialog),
/* harmony export */   "useCssVar": () => (/* binding */ useCssVar),
/* harmony export */   "useDark": () => (/* binding */ useDark),
/* harmony export */   "useDebouncedRefHistory": () => (/* binding */ useDebouncedRefHistory),
/* harmony export */   "useDeviceMotion": () => (/* binding */ useDeviceMotion),
/* harmony export */   "useDeviceOrientation": () => (/* binding */ useDeviceOrientation),
/* harmony export */   "useDevicePixelRatio": () => (/* binding */ useDevicePixelRatio),
/* harmony export */   "useDevicesList": () => (/* binding */ useDevicesList),
/* harmony export */   "useDisplayMedia": () => (/* binding */ useDisplayMedia),
/* harmony export */   "useDocumentVisibility": () => (/* binding */ useDocumentVisibility),
/* harmony export */   "useDraggable": () => (/* binding */ useDraggable),
/* harmony export */   "useElementBounding": () => (/* binding */ useElementBounding),
/* harmony export */   "useElementHover": () => (/* binding */ useElementHover),
/* harmony export */   "useElementSize": () => (/* binding */ useElementSize),
/* harmony export */   "useElementVisibility": () => (/* binding */ useElementVisibility),
/* harmony export */   "useEventBus": () => (/* binding */ useEventBus),
/* harmony export */   "useEventListener": () => (/* binding */ useEventListener),
/* harmony export */   "useEventSource": () => (/* binding */ useEventSource),
/* harmony export */   "useEyeDropper": () => (/* binding */ useEyeDropper),
/* harmony export */   "useFavicon": () => (/* binding */ useFavicon),
/* harmony export */   "useFetch": () => (/* binding */ useFetch),
/* harmony export */   "useFocus": () => (/* binding */ useFocus),
/* harmony export */   "useFps": () => (/* binding */ useFps),
/* harmony export */   "useFullscreen": () => (/* binding */ useFullscreen),
/* harmony export */   "useGeolocation": () => (/* binding */ useGeolocation),
/* harmony export */   "useIdle": () => (/* binding */ useIdle),
/* harmony export */   "useIntersectionObserver": () => (/* binding */ useIntersectionObserver),
/* harmony export */   "useKeyModifier": () => (/* binding */ useKeyModifier),
/* harmony export */   "useLocalStorage": () => (/* binding */ useLocalStorage),
/* harmony export */   "useMagicKeys": () => (/* binding */ useMagicKeys),
/* harmony export */   "useManualRefHistory": () => (/* binding */ useManualRefHistory),
/* harmony export */   "useMediaControls": () => (/* binding */ useMediaControls),
/* harmony export */   "useMediaQuery": () => (/* binding */ useMediaQuery),
/* harmony export */   "useMemory": () => (/* binding */ useMemory),
/* harmony export */   "useMouse": () => (/* binding */ useMouse),
/* harmony export */   "useMouseInElement": () => (/* binding */ useMouseInElement),
/* harmony export */   "useMousePressed": () => (/* binding */ useMousePressed),
/* harmony export */   "useMutationObserver": () => (/* binding */ useMutationObserver),
/* harmony export */   "useNetwork": () => (/* binding */ useNetwork),
/* harmony export */   "useNow": () => (/* binding */ useNow),
/* harmony export */   "useOnline": () => (/* binding */ useOnline),
/* harmony export */   "usePageLeave": () => (/* binding */ usePageLeave),
/* harmony export */   "useParallax": () => (/* binding */ useParallax),
/* harmony export */   "usePermission": () => (/* binding */ usePermission),
/* harmony export */   "usePointer": () => (/* binding */ usePointer),
/* harmony export */   "usePointerSwipe": () => (/* binding */ usePointerSwipe),
/* harmony export */   "usePreferredColorScheme": () => (/* binding */ usePreferredColorScheme),
/* harmony export */   "usePreferredDark": () => (/* binding */ usePreferredDark),
/* harmony export */   "usePreferredLanguages": () => (/* binding */ usePreferredLanguages),
/* harmony export */   "useRafFn": () => (/* binding */ useRafFn),
/* harmony export */   "useRefHistory": () => (/* binding */ useRefHistory),
/* harmony export */   "useResizeObserver": () => (/* binding */ useResizeObserver),
/* harmony export */   "useScriptTag": () => (/* binding */ useScriptTag),
/* harmony export */   "useScroll": () => (/* binding */ useScroll),
/* harmony export */   "useSessionStorage": () => (/* binding */ useSessionStorage),
/* harmony export */   "useShare": () => (/* binding */ useShare),
/* harmony export */   "useSpeechRecognition": () => (/* binding */ useSpeechRecognition),
/* harmony export */   "useSpeechSynthesis": () => (/* binding */ useSpeechSynthesis),
/* harmony export */   "useStorage": () => (/* binding */ useStorage),
/* harmony export */   "useSwipe": () => (/* binding */ useSwipe),
/* harmony export */   "useTemplateRefsList": () => (/* binding */ useTemplateRefsList),
/* harmony export */   "useThrottledRefHistory": () => (/* binding */ useThrottledRefHistory),
/* harmony export */   "useTimeAgo": () => (/* binding */ useTimeAgo),
/* harmony export */   "useTimestamp": () => (/* binding */ useTimestamp),
/* harmony export */   "useTitle": () => (/* binding */ useTitle),
/* harmony export */   "useTransition": () => (/* binding */ useTransition),
/* harmony export */   "useUrlSearchParams": () => (/* binding */ useUrlSearchParams),
/* harmony export */   "useUserMedia": () => (/* binding */ useUserMedia),
/* harmony export */   "useVModel": () => (/* binding */ useVModel),
/* harmony export */   "useVModels": () => (/* binding */ useVModels),
/* harmony export */   "useVirtualList": () => (/* binding */ useVirtualList),
/* harmony export */   "useWakeLock": () => (/* binding */ useWakeLock),
/* harmony export */   "useWebSocket": () => (/* binding */ useWebSocket),
/* harmony export */   "useWebWorker": () => (/* binding */ useWebWorker),
/* harmony export */   "useWebWorkerFn": () => (/* binding */ useWebWorkerFn),
/* harmony export */   "useWindowFocus": () => (/* binding */ useWindowFocus),
/* harmony export */   "useWindowScroll": () => (/* binding */ useWindowScroll),
/* harmony export */   "useWindowSize": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/shared/index.mjs");
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");





function asyncComputed(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const started = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(!lazy);
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  let counter = 0;
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    try {
      if (evaluating) {
        Promise.resolve().then(() => {
          evaluating.value = true;
        });
      }
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function autoResetRef(defaultValue, afterMs = 1e4) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.customRef)((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(afterMs));
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key);
  if (defaultSource)
    source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key, defaultSource);
  if (treatDefaultAsFactory)
    source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.inject)(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)((ctx) => options(source, ctx));
  } else {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window : void 0;
const defaultDocument = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.document : void 0;
const defaultNavigator = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient ? window.navigator : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, event = "pointerdown" } = options;
  if (!window)
    return;
  const listener = (event2) => {
    const el = unrefElement(target);
    if (!el)
      return;
    if (el === event2.target || event2.composedPath().includes(el))
      return;
    handler(event2);
  };
  return useEventListener(window, event, listener, { passive: true });
}

var __defProp$c = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$6(__spreadValues$c({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$6(__spreadValues$c({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$6(__spreadValues$c({}, options), { eventName: "keyup" }));
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  let _trigger = () => {
  };
  const element = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.customRef)((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onMounted)(_trigger);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onUpdated)(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const counter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  if (window) {
    useEventListener(window, "blur", () => counter.value += 1, true);
    useEventListener(window, "focus", () => counter.value += 1, true);
  }
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    counter.value;
    return window == null ? void 0 : window.document.activeElement;
  });
}

function useAsyncState(promise, initialState, options = {}) {
  const {
    immediate = true,
    delay = 0,
    onError = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    resetOnExecute = true
  } = options;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialState);
  const isReady = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    if (delay2 > 0)
      await (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.promiseTimeout)(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    error,
    execute
  };
}

function useBase64(target, options) {
  const base64 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  function execute() {
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
        if (_target === void 0 || _target === null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(target, execute, { immediate: true });
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = navigator && "getBattery" in navigator;
  const charging = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const chargingTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const dischargingTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const level = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const mediaQuery = window.matchMedia(query);
  const matches = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(mediaQuery.matches);
  const handler = (event) => {
    matches.value = event.matches;
  };
  if ("addEventListener" in mediaQuery)
    mediaQuery.addEventListener("change", handler);
  else
    mediaQuery.addListener(handler);
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$b = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.increaseWithUnit)(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$b({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = true,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const copied = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const timeout = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

function useConfirmDialog(revealed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false)) {
  const confirmHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const cancelHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const revealHook = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  let _resolve = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow } = {}) {
  const variable = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const elRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(elRef, (el) => {
    if (el && window)
      variable.value = window.getComputedStyle(el).getPropertyValue(prop);
  }, { immediate: true });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(prop, val);
  });
  return variable;
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  }
};
function useStorage(key, initialValue, storage = ((_a) => (_a = defaultWindow) == null ? void 0 : _a.localStorage)(), options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(initialValue);
  const type = rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  const data = (shallow ? vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef : vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
      } else {
        data.value = serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.watchWithFilter)(data, () => {
      try {
        if (data.value == null)
          storage.removeItem(key);
        else
          storage.setItem(key, serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

function useDark(options = {}) {
  var _a;
  const {
    selector = "html",
    attribute = "class",
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow,
    storage = (_a = defaultWindow) == null ? void 0 : _a.localStorage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true
  } = options;
  const preferredDark = usePreferredDark({ window });
  const store = storageKey == null ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("auto") : useStorage(storageKey, "auto", storage, { window, listenToStorageChanges });
  const isDark = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return store.value === "auto" ? preferredDark.value : store.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        store.value = "auto";
      else
        store.value = v ? "dark" : "light";
    }
  });
  const onChanged = options.onChanged || ((v) => {
    const el = window == null ? void 0 : window.document.querySelector(selector);
    if (attribute === "class") {
      el == null ? void 0 : el.classList.toggle(valueDark, v);
      if (valueLight)
        el == null ? void 0 : el.classList.toggle(valueLight, !v);
    } else {
      el == null ? void 0 : el.setAttribute(attribute, v ? valueDark : valueLight);
    }
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isDark, onChanged, { flush: "post" });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => onChanged(isDark.value));
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.markRaw)({
      snapshot: dump(source.value),
      timestamp: (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)()
    });
  }
  const last = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(_createHistoryRecord());
  const undoStack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const redoStack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => [last.value, ...undoStack.value]);
  const canUndo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => undoStack.value.length > 0);
  const canRedo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$a = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableFilter)(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch)(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$5(__spreadValues$a({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$5(__spreadValues$a({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$9 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.debounceFilter)(options.debounce) : void 0;
  const history = useRefHistory(source, __spreadProps$4(__spreadValues$9({}, options), { eventFilter: filter }));
  return __spreadValues$9({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.bypassFilter
  } = options;
  const acceleration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ x: null, y: null, z: null });
  const rotationRate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ alpha: null, beta: null, gamma: null });
  const interval = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const accelerationIncludingGravity = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper)(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "DeviceOrientationEvent" in window);
  const isAbsolute = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const alpha = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const beta = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const gamma = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  if (window && isSupported) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = [
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
];
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1)
    };
  }
  const pixelRatio = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createSingletonPromise)(async () => {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    onUpdated
  } = options;
  const devices = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const videoInputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => devices.value.filter((i) => i.kind === "audiooutput"));
  let isSupported = false;
  const permissionGranted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  async function update() {
    if (!isSupported)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (navigator) {
    isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    if (isSupported) {
      if (requestPermissions)
        ensurePermissions();
      useEventListener(navigator.mediaDevices, "devicechange", update);
      update();
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a, _b;
  const enabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_b = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _b.getDisplayMedia);
  const constraint = { audio, video };
  const stream = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("visible");
  const visibility = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$8 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_b = options.initialValue) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const preventDefault = (e) => {
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.preventDefault))
      e.preventDefault();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.exact) && e.target !== (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target))
      return;
    const rect = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    preventDefault(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    preventDefault(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    preventDefault(e);
  };
  if (_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return __spreadProps$3(__spreadValues$8({}, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs)(position)), {
    position,
    isDragging: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => !!pressedDelta.value),
    style: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new window.ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const bottom = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const left = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const right = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const top = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  useResizeObserver(target, ([entry]) => {
    height.value = entry.contentRect.height;
    bottom.value = entry.contentRect.bottom;
    left.value = entry.contentRect.left;
    right.value = entry.contentRect.right;
    top.value = entry.contentRect.top;
    width.value = entry.contentRect.width;
    x.value = entry.contentRect.x;
    y.value = entry.contentRect.y;
  }, options);
  return {
    x,
    y,
    top,
    right,
    bottom,
    left,
    width,
    height
  };
}

function useElementHover(el) {
  const isHovered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialSize.width);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    if (!element.value) {
      elementIsVisible.value = false;
    } else {
      const rect = element.value.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(testBounding);
  if (window)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(() => useEventListener((scrollTarget == null ? void 0 : scrollTarget.value) || window, "scroll", testBounding, { capture: false, passive: true }));
  return elementIsVisible;
}

const events = new Map();

function useEventBus(key) {
  const scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentScope)();
  function on(listener) {
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    scope == null ? void 0 : scope.cleanups.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("CONNECTING");
  const eventSource = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper() {
  const isSupported = Boolean(window && "EyeDropper" in window);
  const sRGBHex = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  async function open() {
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open();
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(newIcon) ? newIcon : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(favicon, (i, o) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var __defProp$7 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.containsProp)(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError");
}
function headersToObject(headers) {
  if (headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => config.baseUrl ? joinPaths((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.baseUrl), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url)) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadValues$7(__spreadValues$7({}, options), args[0]);
      } else {
        fetchOptions = __spreadProps$2(__spreadValues$7(__spreadValues$7({}, fetchOptions), args[0]), {
          headers: __spreadValues$7(__spreadValues$7({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = __spreadValues$7(__spreadValues$7({}, options), args[1]);
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "get",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$7(__spreadValues$7({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$7(__spreadValues$7({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const errorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const finallyEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const isFinished = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isFetching = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const aborted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const statusCode = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const response = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(initialData);
  const canAbort = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = __spreadProps$2(__spreadValues$7({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.payload)) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.payload);
    }
    let isCanceled = false;
    const context = { url: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url), options: fetchOptions, cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve();
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, __spreadProps$2(__spreadValues$7(__spreadValues$7({}, defaultFetchOptions), context.options), {
        headers: __spreadValues$7(__spreadValues$7({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          reject(fetchError);
        else
          resolve(void 0);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => [
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(url),
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch)
  ], () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch) && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("get"),
    put: setMethod("put"),
    post: setMethod("post"),
    delete: setMethod("delete"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.isRef)(config.payload)) {
          (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => [
            (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(config.payload),
            (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch)
          ], () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.refetch) && execute(), { deep: true });
        }
        if (!payloadType && (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(payload) && Object.getPrototypeOf((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(payload)) === Object.prototype)
          config.payloadType = "json";
        return shell;
      }
      return void 0;
    };
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return shell;
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return shell;
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

function useFocus(options = {}) {
  const {
    initialValue = false
  } = options;
  const activeElement = useActiveElement(options);
  const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(options.target));
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
    get() {
      return activeElement.value === target.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = target.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = target.value) == null ? void 0 : _b.focus();
    }
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(target, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  function loop() {
    if (!isActive.value)
      return;
    fn();
    if (window)
      window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (immediate)
    resume();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(pause);
  return {
    isActive,
    pause,
    resume
  };
}

function useFps(options) {
  var _a;
  const fps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
function useFullscreen(target, options = {}) {
  const { document = defaultDocument } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document) {
    isSupported = false;
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "geolocation" in navigator;
  const locatedAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const coords = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({
    accuracy: 0,
    latitude: 0,
    longitude: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter)(50)
  } = options;
  const idle = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialState);
  const lastActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)());
  let timer;
  const onEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createFilterWrapper)(eventFilter, () => {
    idle.value = false;
    lastActive.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = window && "IntersectionObserver" in window;
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stopWatch = isSupported ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new window.IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
    };
  }, { immediate: true, flush: "post" }) : _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = ["mousedown", "mouseup", "keydown", "keyup"];
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop
  } = options;
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(obj) : obj;
  function updateRefs(e, value) {
    const key = e.key.toLowerCase();
    const code = e.code.toLowerCase();
    const values = [code, key];
    if (value)
      current.add(e.code);
    else
      current.delete(e.code);
    for (const key2 of values) {
      if (key2 in refs) {
        if (useReactive)
          refs[key2] = value;
        else
          refs[key2].value = value;
      }
    }
  }
  if (target) {
    useEventListener(target, "keydown", (e) => {
      updateRefs(e, true);
      return onEventFired(e);
    }, { passive });
    useEventListener(target, "keyup", (e) => {
      updateRefs(e, false);
      return onEventFired(e);
    }, { passive });
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => keys.every((key) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(proxy[key])));
        } else {
          refs[prop] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(r) : r;
    }
  });
  return proxy;
}

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source))
    cb((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = __spreadValues$6(__spreadValues$6({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const seeking = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const volume = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const waiting = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const ended = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const playing = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const rate = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(1);
  const stalled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const buffered = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const tracks = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const selectedTrack = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(-1);
  const isPictureInPicture = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const muted = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.createEventHook)();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!document)
      return;
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    const src = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.src);
    let sources = [];
    if (!src)
      return;
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(volume, (vol) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.volume = vol;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(muted, (mute) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.muted = mute;
  });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watchEffect)(() => {
    if (!document)
      return;
    const textTracks = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(options.tracks);
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch)(currentTime, (time) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.ignorableWatch)(playing, (isPlaying) => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([target], () => {
    const el = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

function useMemory(options = {}) {
  const memory = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const isSupported = performance && "memory" in performance;
  if (isSupported) {
    const { interval = 1e3 } = options;
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMouse(options = {}) {
  const {
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow
  } = options;
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue.x);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue.y);
  const sourceType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const mouseHandler = (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      x.value = event.touches[0].clientX;
      y.value = event.touches[0].clientY;
      sourceType.value = "touch";
    }
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandler, { passive: true });
    useEventListener(window, "dragover", mouseHandler, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandler, { passive: true });
      useEventListener(window, "touchmove", touchHandler, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementPositionX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementPositionY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementHeight = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const elementWidth = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const isOutside = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  let stop = () => {
  };
  if (window) {
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = elX < 0 || elY < 0 || elX > elementWidth.value || elY > elementHeight.value;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialValue);
  const sourceType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = __objRest$1(_a, ["window"]);
  let observer;
  const isSupported = window && "IntersectionObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new window.MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(stop);
  return {
    isSupported,
    stop
  };
}

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "connection" in navigator);
  const isOnline = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(true);
  const saveData = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const offlineAt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const downlink = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const downlinkMax = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const rtt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const effectiveType = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(void 0);
  const type = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("unknown");
  const connection = isSupported && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$5({
      now
    }, controls);
  } else {
    return now;
  }
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var __defProp$4 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ Object.keys(defaultState);
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.objectPick)(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return __spreadProps$1(__spreadValues$4({}, (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state)), {
    isInside
  });
}

var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const coordsEnd = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const diffX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => coordsStart.x - coordsEnd.x);
  const diffY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const direction = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop, optionsBlock);
  document.removeEventListener("x", _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => posStart.x - posEnd.x);
  const distanceY = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isPointerDown = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const direction = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(isSwiping),
    direction: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(direction),
    posStart: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(posStart),
    posEnd: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.readonly)(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(["en"]);
  const navigator = window.navigator;
  const value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

function useScriptTag(src, onLoaded = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument
  } = options;
  const scriptTag = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value) {
      document.head.removeChild(scriptTag.value);
      scriptTag.value = null;
    }
  };
  if (immediate && !manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnMounted)(load);
  if (!manual)
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnUnmounted)(unload);
  return { scriptTag, load, unload };
}

function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onScroll = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0);
  const isScrolling = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const arrivedState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  if (element) {
    const onScrollEnd = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useDebounceFn)(() => {
      isScrolling.value = false;
      onStop();
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0);
      x.value = scrollLeft;
      const scrollTop = eventTarget.scrollTop;
      arrivedState.top = scrollTop <= 0 + (offset.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd();
      onScroll();
    };
    useEventListener(element, "scroll", throttle ? (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useThrottleFn)(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState
  };
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = _navigator && "canShare" in _navigator;
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = __spreadValues$3(__spreadValues$3({}, (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(shareOptions)), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.lang || "en-US");
  const isListening = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const isFinal = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("");
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = Boolean(SpeechRecognition);
  let recognition;
  if (isSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    };
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  var _a, _b;
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = Boolean(synth);
  const isPlaying = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("init");
  const voiceInfo = {
    lang: ((_a = options.voice) == null ? void 0 : _a.lang) || "default",
    name: ((_b = options.voice) == null ? void 0 : _b.name) || ""
  };
  const spokenText = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(text || "");
  const lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.lang || "en-US");
  const error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    options.voice && (utterance2.voice = options.voice);
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      utterance2.lang = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(lang);
    };
  };
  const utterance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported) {
    bindEventsForUtterance(utterance.value);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    voiceInfo,
    utterance,
    error,
    toggle,
    speak
  };
}

function useTemplateRefsList() {
  const refs = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.onBeforeUpdate)(() => {
    refs.value.length = 0;
  });
  return refs;
}

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.throttleFilter)(throttle, trailing);
  const history = useRefHistory(source, __spreadProps(__spreadValues$2({}, options), { eventFilter: filter }));
  return __spreadValues$2({}, history);
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getTimeago(new Date((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(time)), (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(now.value)));
  if (exposeControls) {
    return __spreadValues$1({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)() + offset);
  const update = () => ts.value = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.timestamp)() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(update, interval, { immediate });
  if (exposeControls) {
    return __spreadValues({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false
  } = options;
  const title = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(title, (t, o) => {
    if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(t) && t !== o && document)
      document.title = t;
  }, { immediate: true });
  if (observe && document) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = document.title;
    }, { childList: true });
  }
  return title;
}

const TransitionPresets = {
  linear: _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    onStarted = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
    transition = _vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.identity
  } = options;
  const currentTransition = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const t = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(transition);
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(t) ? t : createEasingFunction(t);
  });
  const sourceValue = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const s = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(source);
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(s) ? s : s.map(vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref);
  });
  const sourceVector = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.clamp)(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useTimeoutFn)(start, delay, { immediate: false });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(sourceVector, () => {
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    const targetVector = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.unref)(disabled) ? sourceVector : outputVector;
    return (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialValue);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.reactive)(initialValue);
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${location.hash || ""}`;
    if (mode === "hash-params")
      return `${location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.pausableWatch)(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState({}, "", window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  updateState(read());
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b, _c;
  const enabled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_a = options.enabled) != null ? _a : false);
  const autoSwitch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.videoDeviceId);
  const audioDeviceId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_c = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _c.getUserMedia);
  const stream = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    passive = false,
    eventName,
    deep = false
  } = options;
  const vm = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm));
  let event = eventName;
  if (!key) {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_1__.isVue2) {
      const modelOptions = (_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$options) == null ? void 0 : _c.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key}`;
  if (passive) {
    const proxy = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(props[key]);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(() => props[key], (v) => proxy.value = v);
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get() {
        return props[key];
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVirtualList(list, options) {
  const containerRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const size = useElementSize(containerRef);
  const currentList = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
  const source = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(list);
  const state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.watch)([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => getDistanceTop(state.value.start));
  const wrapperProps = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const { navigator = defaultNavigator, document = defaultDocument } = options;
  let wakeLock;
  const isSupported = navigator && "wakeLock" in navigator;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  async function onVisibilityChange() {
    if (!isSupported || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const status = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("CONNECTING");
  const wsRef = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (retries < 0 || retried < retries)
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.useIntervalFn)(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", close);
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
  const worker = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.shallowRef)();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new window.Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `${dep}`).toString();
  return `importScripts('${depsString}')`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const workerStatus = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)("PENDING");
  const promise = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)({});
  const timeoutId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_0__.tryOnScopeDispose)(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
  const focused = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0),
      y: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(0)
    };
  }
  const x = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.pageXOffset);
  const y = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize({ window = defaultWindow, initialWidth = Infinity, initialHeight = Infinity } = {}) {
  if (!window) {
    return {
      width: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialWidth),
      height: (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(initialHeight)
    };
  }
  const width = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.innerWidth);
  const height = (0,vue_demi__WEBPACK_IMPORTED_MODULE_1__.ref)(window.innerHeight);
  useEventListener("resize", () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }, { passive: true });
  return { width, height };
}




/***/ }),

/***/ "./node_modules/@vueuse/shared/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/@vueuse/shared/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "and": () => (/* binding */ and),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "biSyncRef": () => (/* binding */ biSyncRef),
/* harmony export */   "bypassFilter": () => (/* binding */ bypassFilter),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "containsProp": () => (/* binding */ containsProp),
/* harmony export */   "controlledComputed": () => (/* binding */ controlledComputed),
/* harmony export */   "controlledRef": () => (/* binding */ controlledRef),
/* harmony export */   "createEventHook": () => (/* binding */ createEventHook),
/* harmony export */   "createFilterWrapper": () => (/* binding */ createFilterWrapper),
/* harmony export */   "createGlobalState": () => (/* binding */ createGlobalState),
/* harmony export */   "createReactiveFn": () => (/* binding */ reactify),
/* harmony export */   "createSharedComposable": () => (/* binding */ createSharedComposable),
/* harmony export */   "createSingletonPromise": () => (/* binding */ createSingletonPromise),
/* harmony export */   "debounceFilter": () => (/* binding */ debounceFilter),
/* harmony export */   "debouncedRef": () => (/* binding */ useDebounce),
/* harmony export */   "debouncedWatch": () => (/* binding */ debouncedWatch),
/* harmony export */   "eagerComputed": () => (/* binding */ eagerComputed),
/* harmony export */   "extendRef": () => (/* binding */ extendRef),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "ignorableWatch": () => (/* binding */ ignorableWatch),
/* harmony export */   "increaseWithUnit": () => (/* binding */ increaseWithUnit),
/* harmony export */   "invoke": () => (/* binding */ invoke),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isClient": () => (/* binding */ isClient),
/* harmony export */   "isDef": () => (/* binding */ isDef),
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isWindow": () => (/* binding */ isWindow),
/* harmony export */   "makeDestructurable": () => (/* binding */ makeDestructurable),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "objectPick": () => (/* binding */ objectPick),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "pausableFilter": () => (/* binding */ pausableFilter),
/* harmony export */   "pausableWatch": () => (/* binding */ pausableWatch),
/* harmony export */   "promiseTimeout": () => (/* binding */ promiseTimeout),
/* harmony export */   "rand": () => (/* binding */ rand),
/* harmony export */   "reactify": () => (/* binding */ reactify),
/* harmony export */   "reactifyObject": () => (/* binding */ reactifyObject),
/* harmony export */   "reactivePick": () => (/* binding */ reactivePick),
/* harmony export */   "refDefault": () => (/* binding */ refDefault),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "syncRef": () => (/* binding */ syncRef),
/* harmony export */   "throttleFilter": () => (/* binding */ throttleFilter),
/* harmony export */   "throttledRef": () => (/* binding */ useThrottle),
/* harmony export */   "throttledWatch": () => (/* binding */ throttledWatch),
/* harmony export */   "timestamp": () => (/* binding */ timestamp),
/* harmony export */   "toReactive": () => (/* binding */ toReactive),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "tryOnBeforeUnmount": () => (/* binding */ tryOnBeforeUnmount),
/* harmony export */   "tryOnMounted": () => (/* binding */ tryOnMounted),
/* harmony export */   "tryOnScopeDispose": () => (/* binding */ tryOnScopeDispose),
/* harmony export */   "tryOnUnmounted": () => (/* binding */ tryOnUnmounted),
/* harmony export */   "until": () => (/* binding */ until),
/* harmony export */   "useCounter": () => (/* binding */ useCounter),
/* harmony export */   "useDebounce": () => (/* binding */ useDebounce),
/* harmony export */   "useDebounceFn": () => (/* binding */ useDebounceFn),
/* harmony export */   "useInterval": () => (/* binding */ useInterval),
/* harmony export */   "useIntervalFn": () => (/* binding */ useIntervalFn),
/* harmony export */   "useLastChanged": () => (/* binding */ useLastChanged),
/* harmony export */   "useThrottle": () => (/* binding */ useThrottle),
/* harmony export */   "useThrottleFn": () => (/* binding */ useThrottleFn),
/* harmony export */   "useTimeout": () => (/* binding */ useTimeout),
/* harmony export */   "useTimeoutFn": () => (/* binding */ useTimeoutFn),
/* harmony export */   "useToggle": () => (/* binding */ useToggle),
/* harmony export */   "watchAtMost": () => (/* binding */ watchAtMost),
/* harmony export */   "watchOnce": () => (/* binding */ watchOnce),
/* harmony export */   "watchWithFilter": () => (/* binding */ watchWithFilter),
/* harmony export */   "whenever": () => (/* binding */ whenever)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


function and(...args) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => args.every((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(i)));
}

function biSyncRef(a, b) {
  const flush = "sync";
  const stop1 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(a, (newValue) => {
    b.value = newValue;
  }, {
    flush,
    immediate: true
  });
  const stop2 = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(b, (newValue) => {
    a.value = newValue;
  }, {
    flush,
    immediate: true
  });
  return () => {
    stop1();
    stop2();
  };
}

function controlledComputed(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, () => {
    dirty.value = true;
    trigger();
  }, { flush: "sync" });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = fn();
          dirty.value = false;
        }
        track();
        return v;
      },
      set() {
      }
    };
  });
}

function __onlyVue3(name = "this function") {
  if (vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function controlledRef(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}

function createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function reactify(fn) {
  return function(...args) {
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => fn.apply(this, args.map((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(i))));
  };
}

function tryOnScopeDispose(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)()) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.effectScope)(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}

const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const isFunction = (val) => typeof val === "function";
const isNumber = (val) => typeof val === "number";
const isString = (val) => typeof val === "string";
const isObject = (val) => toString.call(val) === "[object Object]";
const isWindow = (val) => typeof window !== "undefined" && toString.call(val) === "[object Window]";
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(ms);
    const maxDuration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let preventLeading = !leading;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (preventLeading)
        preventLeading = false;
      else
        invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        if (!leading)
          preventLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => preventLeading = true, duration);
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || !obj[k] === void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}

function useDebounce(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => updater());
  return debounced;
}

var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, createFilterWrapper(eventFilter, cb), watchOptions);
}

var __defProp$7 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function debouncedWatch(source, cb, options = {}) {
  const _a = options, {
    debounce = 0
  } = _a, watchOptions = __objRest$4(_a, [
    "debounce"
  ]);
  return watchWithFilter(source, cb, __spreadProps$4(__spreadValues$7({}, watchOptions), {
    eventFilter: debounceFilter(debounce)
  }));
}

function eagerComputed(fn) {
  const result = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.shallowRef)();
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect)(() => {
    result.value = fn();
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.readonly)(result);
}

function get(obj, key) {
  if (key == null)
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj);
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj)[key];
}

var __defProp$6 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function ignorableWatch(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$3(_a, [
    "eventFilter"
  ]);
  const filteredCb = createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    const syncCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, () => {
      syncCounter.value++;
    }, __spreadProps$3(__spreadValues$6({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function isDefined(v) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(v) != null;
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$5({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function not(v) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(v));
}

function or(...args) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => args.some((i) => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(i)));
}

var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function pausableWatch(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$4({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj)) : value
    ];
  }));
}

function reactivePick(obj, ...keys) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.fromEntries(keys.map((k) => [k, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRef)(obj, k)])));
}

function refDefault(source, defaultValue) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue2) {
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.set)(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function syncRef(source, targets, {
  flush = "sync",
  deep = false,
  immediate = true
} = {}) {
  if (!Array.isArray(targets))
    targets = [targets];
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

function useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn);
}

function useThrottle(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(value.value);
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => updater());
  return throttled;
}

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function throttledWatch(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest$1(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return watchWithFilter(source, cb, __spreadProps$1(__spreadValues$3({}, watchOptions), {
    eventFilter: throttleFilter(throttle, trailing, leading)
  }));
}

function toReactive(objectRef) {
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(proxy);
}

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function toRefs(objectRef) {
  if (!(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(objectRef))
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.toRefs)(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.customRef)(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          objectRef.value = __spreadProps(__spreadValues$2({}, objectRef.value), { [key]: v });
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeUnmount(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(fn);
}

function tryOnMounted(fn, sync = true) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(fn);
  else if (sync)
    fn();
  else
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(fn);
}

function tryOnUnmounted(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(fn);
}

function until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(r, (v) => {
        if (condition(v) === !isNot) {
          stop == null ? void 0 : stop();
          resolve();
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout) {
      promises.push(promiseTimeout(timeout, throwOnTimeout).finally(() => {
        stop == null ? void 0 : stop();
      }));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    return toMatch((v) => v === (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value), options);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useCounter(initialValue = 0, options = {}) {
  const count = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (interval <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, interval);
  }
  if (immediate && isClient)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const controls = useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$1({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = options.initialValue) != null ? _a : null);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, () => ms.value = timestamp(), options);
  return ms;
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = useTimeoutFn(noop, interval, options);
  const ready = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(initialValue)) {
    return (value) => {
      initialValue.value = typeof value === "boolean" ? value : !initialValue.value;
    };
  } else {
    const boolean = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
    const toggle = (value) => {
      boolean.value = typeof value === "boolean" ? value : !boolean.value;
    };
    return [boolean, toggle];
  }
}

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest(_a, [
    "count"
  ]);
  const current = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  const stop = watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(count))
      stop();
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

function watchOnce(source, cb, options) {
  const stop = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (...args) => {
    stop();
    return cb(...args);
  }, options);
}

function whenever(source, cb, options) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}




/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);


/***/ }),

/***/ "./node_modules/lodash-es/_apply.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_apply.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apply);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/lodash-es/_assignMergeValue.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_assignMergeValue.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !(0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object[key], value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignMergeValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);


/***/ }),

/***/ "./node_modules/lodash-es/_baseCreate.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_baseFor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseFor.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseFor.js */ "./node_modules/lodash-es/_createBaseFor.js");


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = (0,_createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFor);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMerge.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseMerge.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_assignMergeValue.js */ "./node_modules/lodash-es/_assignMergeValue.js");
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ "./node_modules/lodash-es/_baseFor.js");
/* harmony import */ var _baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMergeDeep.js */ "./node_modules/lodash-es/_baseMergeDeep.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_safeGet.js */ "./node_modules/lodash-es/_safeGet.js");








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, function(srcValue, key) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue)) {
      (0,_baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer((0,_safeGet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, newValue);
    }
  }, _keysIn_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMerge);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMergeDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseMergeDeep.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignMergeValue.js */ "./node_modules/lodash-es/_assignMergeValue.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/lodash-es/_cloneTypedArray.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLikeObject.js */ "./node_modules/lodash-es/isArrayLikeObject.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isPlainObject.js */ "./node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_safeGet.js */ "./node_modules/lodash-es/_safeGet.js");
/* harmony import */ var _toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toPlainObject.js */ "./node_modules/lodash-es/toPlainObject.js");
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key),
      srcValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue),
        isBuff = !isArr && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(srcValue),
        isTyped = !isArr && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(objValue)) {
        newValue = objValue;
      }
      else if ((0,_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__["default"])(objValue)) {
        newValue = (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__["default"])(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if ((0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])(srcValue) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(srcValue)) {
      newValue = objValue;
      if ((0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(objValue)) {
        newValue = (0,_toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__["default"])(objValue);
      }
      else if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_12__["default"])(objValue) || (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_13__["default"])(objValue)) {
        newValue = (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMergeDeep);


/***/ }),

/***/ "./node_modules/lodash-es/_baseRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "./node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setToString.js */ "./node_modules/lodash-es/_setToString.js");




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"]), func + '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseRest);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSetToString.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseSetToString.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/lodash-es/constant.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(func, string) {
  return (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string),
    'writable': true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSetToString);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);


/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);


/***/ }),

/***/ "./node_modules/lodash-es/_copyObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);


/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]["__core-js_shared__"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ "./node_modules/lodash-es/_createAssigner.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createAssigner.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/lodash-es/_isIterateeCall.js");



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAssigner);


/***/ }),

/***/ "./node_modules/lodash-es/_createBaseFor.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_createBaseFor.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseFor);


/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ "./node_modules/lodash-es/_initCloneObject.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object))
    ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);


/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ "./node_modules/lodash-es/_isIterateeCall.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_isIterateeCall.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,_eq_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object[index], value);
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIterateeCall);


/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);


/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);


/***/ }),

/***/ "./node_modules/lodash-es/_overRest.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_overRest.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply.js */ "./node_modules/lodash-es/_apply.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return (0,_apply_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overRest);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_safeGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_safeGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (safeGet);


/***/ }),

/***/ "./node_modules/lodash-es/_setToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_setToString.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSetToString.js */ "./node_modules/lodash-es/_baseSetToString.js");
/* harmony import */ var _shortOut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shortOut.js */ "./node_modules/lodash-es/_shortOut.js");



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = (0,_shortOut_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToString);


/***/ }),

/***/ "./node_modules/lodash-es/_shortOut.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_shortOut.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortOut);


/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);


/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);


/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);


/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);


/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);


/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ "./node_modules/lodash-es/constant.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/constant.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constant);


/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ "./node_modules/lodash-es/identity.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/identity.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identity);


/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);


/***/ }),

/***/ "./node_modules/lodash-es/isArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/isArrayLikeObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLikeObject);


/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);


/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);


/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);


/***/ }),

/***/ "./node_modules/lodash-es/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);


/***/ }),

/***/ "./node_modules/lodash-es/merge.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/merge.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMerge.js */ "./node_modules/lodash-es/_baseMerge.js");
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "./node_modules/lodash-es/_createAssigner.js");



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = (0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, source, srcIndex) {
  (0,_baseMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, source, srcIndex);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);


/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);


/***/ }),

/***/ "./node_modules/lodash-es/toPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/toPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toPlainObject);


/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "BaseTransition": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "EffectScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Fragment": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "ReactiveEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   "Static": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "VueElement": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "compile": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.compile),
/* harmony export */   "computed": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createElementBlock": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   "createElementVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createPropsRestProxy": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   "createRenderer": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineCustomElement": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   "defineEmits": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   "defineExpose": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   "defineProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "defineSSRCustomElement": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   "devtools": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "effect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   "effectScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "guardReactiveProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   "h": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "initDirectivesForSSR": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   "inject": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isMemoSame": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   "isProxy": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isShallow": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVNode": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "mergeProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "normalizeClass": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   "normalizeProps": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   "normalizeStyle": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   "onActivated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "stop": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useSlots": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   "withAsyncContext": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   "withCtx": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDefaults": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   "withDirectives": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withMemo": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   "withModifiers": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "Vue": () => (/* reexport module object */ vue__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "Vue2": () => (/* binding */ Vue2),
/* harmony export */   "isVue2": () => (/* binding */ isVue2),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "install": () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var isVue2 = false
var isVue3 = true
var Vue2 = undefined

function install() {}

function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}





/***/ }),

/***/ "./node_modules/vue-types/dist/vue-types.modern.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-types/dist/vue-types.modern.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "any": () => (/* binding */ w),
/* harmony export */   "array": () => (/* binding */ q),
/* harmony export */   "arrayOf": () => (/* binding */ F),
/* harmony export */   "bool": () => (/* binding */ x),
/* harmony export */   "config": () => (/* binding */ n),
/* harmony export */   "createTypes": () => (/* binding */ R),
/* harmony export */   "custom": () => (/* binding */ k),
/* harmony export */   "default": () => (/* binding */ z),
/* harmony export */   "fromType": () => (/* binding */ T),
/* harmony export */   "func": () => (/* binding */ P),
/* harmony export */   "instanceOf": () => (/* binding */ Y),
/* harmony export */   "integer": () => (/* binding */ V),
/* harmony export */   "number": () => (/* binding */ N),
/* harmony export */   "object": () => (/* binding */ A),
/* harmony export */   "objectOf": () => (/* binding */ B),
/* harmony export */   "oneOf": () => (/* binding */ D),
/* harmony export */   "oneOfType": () => (/* binding */ L),
/* harmony export */   "shape": () => (/* binding */ I),
/* harmony export */   "string": () => (/* binding */ E),
/* harmony export */   "symbol": () => (/* binding */ S),
/* harmony export */   "toType": () => (/* binding */ j),
/* harmony export */   "toValidableType": () => (/* binding */ _),
/* harmony export */   "validateType": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/vue-types/node_modules/is-plain-object/dist/is-plain-object.mjs");
function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}function r(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}const n={silent:!1,logLevel:"warn"},i=["validator"],o=Object.prototype,a=o.toString,s=o.hasOwnProperty,u=/^\s*function (\w+)/;function l(e){var t;const r=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(r){const e=r.toString().match(u);return e?e[1]:""}return""}const c=is_plain_object__WEBPACK_IMPORTED_MODULE_0__.isPlainObject,f=e=>e;let d=f;if(true){const e="undefined"!=typeof console;d=e?function(e,t=n.logLevel){!1===n.silent&&console[t](`[VueTypes warn]: ${e}`)}:f}const p=(e,t)=>s.call(e,t),y=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},v=Array.isArray||function(e){return"[object Array]"===a.call(e)},h=e=>"[object Function]"===a.call(e),b=e=>c(e)&&p(e,"_vueTypes_name"),g=e=>c(e)&&(p(e,"type")||["_vueTypes_name","validator","default","required"].some(t=>p(e,t)));function O(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function m(e,t,r=!1){let n,i=!0,o="";n=c(e)?e:{type:e};const a=b(n)?n._vueTypes_name+" - ":"";if(g(n)&&null!==n.type){if(void 0===n.type||!0===n.type)return i;if(!n.required&&void 0===t)return i;v(n.type)?(i=n.type.some(e=>!0===m(e,t,!0)),o=n.type.map(e=>l(e)).join(" or ")):(o=l(n),i="Array"===o?v(t):"Object"===o?c(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";const t=e.constructor.toString().match(u);return t?t[1]:""}(t)===o:t instanceof n.type)}if(!i){const e=`${a}value "${t}" should be of type "${o}"`;return!1===r?(d(e),!1):e}if(p(n,"validator")&&h(n.validator)){const e=d,o=[];if(d=e=>{o.push(e)},i=n.validator(t),d=e,!i){const e=(o.length>1?"* ":"")+o.join("\n* ");return o.length=0,!1===r?(d(e),i):e}}return i}function j(e,t){const r=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(e){return void 0===e?(p(this,"default")&&delete this.default,this):h(e)||!0===m(this,e,!0)?(this.default=v(e)?()=>[...e]:c(e)?()=>Object.assign({},e):e,this):(d(`${this._vueTypes_name} - invalid default value: "${e}"`),this)}}}),{validator:n}=r;return h(n)&&(r.validator=O(n,r)),r}function _(e,t){const r=j(e,t);return Object.defineProperty(r,"validate",{value(e){return h(this.validator)&&d(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:\n${JSON.stringify(this)}`),this.validator=O(e,this),this}})}function T(e,t,n){const o=function(e){const t={};return Object.getOwnPropertyNames(e).forEach(r=>{t[r]=Object.getOwnPropertyDescriptor(e,r)}),Object.defineProperties({},t)}(t);if(o._vueTypes_name=e,!c(n))return o;const{validator:a}=n,s=r(n,i);if(h(a)){let{validator:e}=o;e&&(e=null!==(l=(u=e).__original)&&void 0!==l?l:u),o.validator=O(e?function(t){return e.call(this,t)&&a.call(this,t)}:a,o)}var u,l;return Object.assign(o,s)}function $(e){return e.replace(/^(?!\s*$)/gm,"  ")}const w=()=>_("any",{}),P=()=>_("function",{type:Function}),x=()=>_("boolean",{type:Boolean}),E=()=>_("string",{type:String}),N=()=>_("number",{type:Number}),q=()=>_("array",{type:Array}),A=()=>_("object",{type:Object}),V=()=>j("integer",{type:Number,validator:e=>y(e)}),S=()=>j("symbol",{validator:e=>"symbol"==typeof e});function k(e,t="custom validation failed"){if("function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return j(e.name||"<<anonymous function>>",{type:null,validator(r){const n=e(r);return n||d(`${this._vueTypes_name} - ${t}`),n}})}function D(e){if(!v(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const t=`oneOf - value should be one of "${e.join('", "')}".`,r=e.reduce((e,t)=>{if(null!=t){const r=t.constructor;-1===e.indexOf(r)&&e.push(r)}return e},[]);return j("oneOf",{type:r.length>0?r:void 0,validator(r){const n=-1!==e.indexOf(r);return n||d(t),n}})}function L(e){if(!v(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let t=!1,r=[];for(let n=0;n<e.length;n+=1){const i=e[n];if(g(i)){if(b(i)&&"oneOf"===i._vueTypes_name&&i.type){r=r.concat(i.type);continue}if(h(i.validator)&&(t=!0),!0===i.type||!i.type){d('oneOfType - invalid usage of "true" or "null" as types.');continue}r=r.concat(i.type)}else r.push(i)}r=r.filter((e,t)=>r.indexOf(e)===t);const n=r.length>0?r:null;return j("oneOfType",t?{type:n,validator(t){const r=[],n=e.some(e=>{const n=m(b(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof n&&r.push(n),!0===n});return n||d(`oneOfType - provided value does not match any of the ${r.length} passed-in validators:\n${$(r.join("\n"))}`),n}}:{type:n})}function F(e){return j("arrayOf",{type:Array,validator(t){let r="";const n=t.every(t=>(r=m(e,t,!0),!0===r));return n||d(`arrayOf - value validation error:\n${$(r)}`),n}})}function Y(e){return j("instanceOf",{type:e})}function B(e){return j("objectOf",{type:Object,validator(t){let r="";const n=Object.keys(t).every(n=>(r=m(e,t[n],!0),!0===r));return n||d(`objectOf - value validation error:\n${$(r)}`),n}})}function I(e){const t=Object.keys(e),r=t.filter(t=>{var r;return!(null===(r=e[t])||void 0===r||!r.required)}),n=j("shape",{type:Object,validator(n){if(!c(n))return!1;const i=Object.keys(n);if(r.length>0&&r.some(e=>-1===i.indexOf(e))){const e=r.filter(e=>-1===i.indexOf(e));return d(1===e.length?`shape - required property "${e[0]}" is not defined.`:`shape - required properties "${e.join('", "')}" are not defined.`),!1}return i.every(r=>{if(-1===t.indexOf(r))return!0===this._vueTypes_isLoose||(d(`shape - shape definition does not include a "${r}" property. Allowed keys: "${t.join('", "')}".`),!1);const i=m(e[r],n[r],!0);return"string"==typeof i&&d(`shape - "${r}" property validation error:\n ${$(i)}`),!0===i})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),n}const J=["name","validate","getter"],M=/*#__PURE__*/(()=>{var e,t;return t=e=class{static get any(){return w()}static get func(){return P().def(this.defaults.func)}static get bool(){return x().def(this.defaults.bool)}static get string(){return E().def(this.defaults.string)}static get number(){return N().def(this.defaults.number)}static get array(){return q().def(this.defaults.array)}static get object(){return A().def(this.defaults.object)}static get integer(){return V().def(this.defaults.integer)}static get symbol(){return S()}static extend(e){if(v(e))return e.forEach(e=>this.extend(e)),this;const{name:t,validate:n=!1,getter:i=!1}=e,o=r(e,J);if(p(this,t))throw new TypeError(`[VueTypes error]: Type "${t}" already defined`);const{type:a}=o;if(b(a))return delete o.type,Object.defineProperty(this,t,i?{get:()=>T(t,a,o)}:{value(...e){const r=T(t,a,o);return r.validator&&(r.validator=r.validator.bind(r,...e)),r}});let s;return s=i?{get(){const e=Object.assign({},o);return n?_(t,e):j(t,e)},enumerable:!0}:{value(...e){const r=Object.assign({},o);let i;return i=n?_(t,r):j(t,r),r.validator&&(i.validator=r.validator.bind(i,...e)),i},enumerable:!0},Object.defineProperty(this,t,s)}},e.defaults={},e.sensibleDefaults=void 0,e.config=n,e.custom=k,e.oneOf=D,e.instanceOf=Y,e.oneOfType=L,e.arrayOf=F,e.objectOf=B,e.shape=I,e.utils={validate:(e,t)=>!0===m(t,e,!0),toType:(e,t,r=!1)=>r?_(e,t):j(e,t)},t})();function R(e={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var r,n;return n=r=class extends M{static get sensibleDefaults(){return t({},this.defaults)}static set sensibleDefaults(r){this.defaults=!1!==r?t({},!0!==r?r:e):{}}},r.defaults=t({},e),n}class z extends(R()){}
//# sourceMappingURL=vue-types.modern.js.map


/***/ }),

/***/ "./node_modules/vue-types/node_modules/is-plain-object/dist/is-plain-object.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-types/node_modules/is-plain-object/dist/is-plain-object.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}




/***/ })

}]);