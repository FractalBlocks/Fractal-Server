!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=28)}([function(e,t,n){"use strict";function r(e,t,n){if(e.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==t)for(var o=0;o<t.length;++o){var i=t[o].data;void 0!==i&&r(i,t[o].children,t[o].sel)}}function o(e,t,n){var o,s,u,c={};if(void 0!==n?(c=t,a.array(n)?o=n:a.primitive(n)?s=n:n&&n.sel&&(o=[n])):void 0!==t&&(a.array(t)?o=t:a.primitive(t)?s=t:t&&t.sel?o=[t]:c=t),a.array(o))for(u=0;u<o.length;++u)a.primitive(o[u])&&(o[u]=i.vnode(void 0,void 0,void 0,o[u]));return"s"!==e[0]||"v"!==e[1]||"g"!==e[2]||3!==e.length&&"."!==e[3]&&"#"!==e[3]||r(c,o,e),i.vnode(e,c,o,s,void 0)}var i=n(5),a=n(4);t.h=o,Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}r(n(16))},function(e,t,n){"use strict";function r(e,t,n){var r={};for(var o in t)r[o]=void 0!==n?e.style(t[o],{$debugName:"_"+n+"_"+o+"__"}):e.style(t[o]);return r}function o(e){for(var t in e)if(null!==e[t]&&"object"==typeof e[t]&&"base"==t)return!0;return!1}function i(e,t){return n={},n[e]=t,n;var n}function a(){var e={};if(arguments.length%2!=0)throw"Error CS function should have an even number of arguments";for(var t=0,n=arguments.length;t<n;t+=2)e[arguments[t]]=arguments[t+1];return e}function s(e,t){for(var n={base:{}},r=0,o=Object.keys(e),i=o.length;r<i;r++)n[o[r]]=e[o[r]];for(var r=0,o=Object.keys(t),i=o.length;r<i;r++)n[o[r]]&&"object"==typeof n[o[r]]?n[o[r]]=Object.assign({},n[o[r]],t[o[r]]):n[o[r]]=t[o[r]];return n}var u=n(6);t.getStyles=u.getStyles,t.styleGroup=r,t.hasBaseObject=o,t.c=i,t.cs=a,t.mergeStyles=s,t.placeholderColor=function(e){return{"&::-webkit-input-placeholder":{$unique:!0,color:e},"&::-moz-placeholder":{$unique:!0,color:e},"&:-ms-input-placeholder":{$unique:!0,color:e}}},t.absoluteCenter={display:"flex",alignItems:"center",justifyContent:"center"}},function(e,t,n){"use strict";function r(e){return e.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}function o(e){return"@"===e.charAt(0)}function i(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}function a(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return(t>>>0).toString(36)}function s(e,t){return"number"!=typeof t||0===t||m[e]||(t+="px"),e+":"+String(t)}function u(e){return e.sort(function(e,t){return e[0]>t[0]?1:-1})}function c(e,n){for(var o=[],a=[],s=!1,c=0,f=Object.keys(e);c<f.length;c++){var l=f[c],d=e[l];l===t.IS_UNIQUE?s=!!d:i(d)?a.push([l.trim(),d]):o.push([r(l.trim()),d])}return{properties:u(o),nestedStyles:n?a:u(a),isUnique:s}}function f(e){for(var t=[],n=function(e,n){null!=n&&(Array.isArray(n)?n.forEach(function(n){n&&t.push(s(e,n))}):t.push(s(e,n)))},r=0,o=e;r<o.length;r++){var i=o[r];n(i[0],i[1])}return t.join(";")}function l(e,t){return e.indexOf("&")>-1?e.replace(/&/g,t):t+" "+e}function d(e,t,n,r,i){var a=c(n,!!t),s=a.properties,u=a.nestedStyles,p=a.isUnique,h=f(s),v=h;if(o(t)){var g=e.add(new T(t,i?void 0:h,e.hash));if(h&&i){var m=g.add(new C(h,g.hash,p?"u"+(++y).toString(36):void 0));r.push([i,m])}for(var b=0,_=u;b<_.length;b++){var x=_[b],w=x[0],k=x[1];v+=w+d(g,w,k,r,i)}}else{var S=i?l(t,i):t;if(h){var m=e.add(new C(h,e.hash,p?"u"+(++y).toString(36):void 0));r.push([S,m])}for(var O=0,j=u;O<j.length;O++){var A=j[O],w=A[0],k=A[1];v+=w+d(e,w,k,r,S)}}return v}function p(e,t,n,r,o){for(var i=new O(e.hash),a=[],s=d(i,t,n,a),u="f"+i.hash(s),c=o?o+"_"+u:u,f=0,p=a;f<p.length;f++){var h=p[f],v=h[0],g=h[1],y=r?l(v,"."+c):v;g.add(new j(y,g.hash,void 0,s))}return{cache:i,pid:s,id:c}}function h(e){return e.values().map(function(e){return e.getStyles()}).join("")}function v(e,t){return void 0===e&&(e=a),void 0===t&&(t=!1),new A(e,t)}var g=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},y=0;t.IS_UNIQUE="__DO_NOT_DEDUPE_STYLE__";for(var m={"animation-iteration-count":!0,"box-flex":!0,"box-flex-group":!0,"column-count":!0,"counter-increment":!0,"counter-reset":!0,flex:!0,"flex-grow":!0,"flex-positive":!0,"flex-shrink":!0,"flex-negative":!0,"font-weight":!0,"line-clamp":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"tab-size":!0,widows:!0,"z-index":!0,zoom:!0,"fill-opacity":!0,"stroke-dashoffset":!0,"stroke-opacity":!0,"stroke-width":!0},b=0,_=["-webkit-","-ms-","-moz-","-o-"];b<_.length;b++)for(var x=_[b],w=0,k=Object.keys(m);w<k.length;w++){var S=k[w];m[x+S]=!0}t.stringHash=a;var O=function(){function e(e){this.hash=e,this.changeId=0,this._children={},this._keys=[],this._counters={}}return e.prototype.values=function(){var e=this;return this._keys.map(function(t){return e._children[t]})},e.prototype.add=function(t){var n=this._counters[t.id]||0,r=this._children[t.id]||t.clone();if(this._counters[t.id]=n+1,0===n)this._keys.push(r.id),this._children[r.id]=r,this.changeId++;else{if(r.getIdentifier()!==t.getIdentifier())throw new TypeError("Hash collision: "+t.getStyles()+" === "+r.getStyles());if(this._keys.splice(this._keys.indexOf(t.id),1),this._keys.push(t.id),r instanceof e&&t instanceof e){var o=r.changeId;r.merge(t),r.changeId!==o&&this.changeId++}}return r},e.prototype.remove=function(t){var n=this._counters[t.id];if(n>0){this._counters[t.id]=n-1;var r=this._children[t.id];if(1===n)delete this._counters[t.id],delete this._children[t.id],this._keys.splice(this._keys.indexOf(t.id),1),this.changeId++;else if(r instanceof e&&t instanceof e){var o=r.changeId;r.unmerge(t),r.changeId!==o&&this.changeId++}}},e.prototype.merge=function(e){for(var t=0,n=e.values();t<n.length;t++){var r=n[t];this.add(r)}return this},e.prototype.unmerge=function(e){for(var t=0,n=e.values();t<n.length;t++){var r=n[t];this.remove(r)}return this},e.prototype.clone=function(){return new e(this.hash).merge(this)},e}();t.Cache=O;var j=function(){function e(e,t,n,r){void 0===n&&(n="s"+t(e)),void 0===r&&(r=""),this.selector=e,this.hash=t,this.id=n,this.pid=r}return e.prototype.getStyles=function(){return this.selector},e.prototype.getIdentifier=function(){return this.pid+"."+this.selector},e.prototype.clone=function(){return new e(this.selector,this.hash,this.id,this.pid)},e}();t.Selector=j;var C=function(e){function t(t,n,r){void 0===r&&(r="c"+n(t));var o=e.call(this,n)||this;return o.style=t,o.hash=n,o.id=r,o}return g(t,e),t.prototype.getStyles=function(){return this.values().map(function(e){return e.getStyles()}).join(",")+"{"+this.style+"}"},t.prototype.getIdentifier=function(){return this.style},t.prototype.clone=function(){return new t(this.style,this.hash,this.id).merge(this)},t}(O);t.Style=C;var T=function(e){function t(t,n,r,o,i){void 0===n&&(n=""),void 0===o&&(o="a"+r(t+"."+n)),void 0===i&&(i="");var a=e.call(this,r)||this;return a.rule=t,a.style=n,a.hash=r,a.id=o,a.pid=i,a}return g(t,e),t.prototype.getStyles=function(){return this.rule+"{"+this.style+h(this)+"}"},t.prototype.getIdentifier=function(){return this.pid+"."+this.rule+"."+this.style},t.prototype.clone=function(){return new t(this.rule,this.style,this.hash,this.id,this.pid).merge(this)},t}(O);t.Rule=T;var A=function(e){function t(t,n,r){void 0===r&&(r="f"+(++y).toString(36));var o=e.call(this,t)||this;return o.hash=t,o.debug=n,o.id=r,o}return g(t,e),t.prototype.registerStyle=function(e,t){var n=p(this,"&",e,!0,this.debug?t:void 0),r=n.cache,o=n.id;return this.merge(r),o},t.prototype.registerKeyframes=function(e,t){return this.registerHashRule("@keyframes",e,t)},t.prototype.registerHashRule=function(e,t,n){var r=p(this,"",t,!1,this.debug?n:void 0),o=r.cache,i=r.pid,a=r.id,s=new T(e+" "+a,void 0,this.hash,void 0,i);return this.add(s.merge(o)),a},t.prototype.registerRule=function(e,t){this.merge(p(this,e,t,!1).cache)},t.prototype.registerCss=function(e){this.merge(p(this,"",e,!1).cache)},t.prototype.getStyles=function(){return h(this)},t.prototype.getIdentifier=function(){return this.id},t.prototype.clone=function(){return new t(this.hash,this.debug,this.id).merge(this)},t}(O);t.FreeStyle=A,t.create=v},function(e,t,n){"use strict";function r(e){return"string"==typeof e||"number"==typeof e}t.array=Array.isArray,t.primitive=r},function(e,t,n){"use strict";function r(e,t,n,r,o){return{sel:e,data:t,children:n,text:r,elm:o,key:void 0===t?void 0:t.key}}t.vnode=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){var t=new o.a({autoGenerateTag:!1});return e&&t.setStylesTarget(e),t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(26),i=n(27);n.n(i);n.d(t,"types",function(){return i});var a=n(7);n.d(t,"extend",function(){return a.a}),n.d(t,"classes",function(){return a.b}),n.d(t,"media",function(){return a.c}),n.d(t,"setStylesTarget",function(){return u}),n.d(t,"cssRaw",function(){return c}),n.d(t,"cssRule",function(){return f}),n.d(t,"forceRenderStyles",function(){return l}),n.d(t,"fontFace",function(){return d}),n.d(t,"getStyles",function(){return p}),n.d(t,"keyframes",function(){return h}),n.d(t,"reinit",function(){return v}),n.d(t,"style",function(){return g}),t.createTypeStyle=r;var s=new o.a({autoGenerateTag:!0}),u=s.setStylesTarget,c=s.cssRaw,f=s.cssRule,l=s.forceRenderStyles,d=s.fontFace,p=s.getStyles,h=s.keyframes,v=s.reinit,g=s.style},function(e,t,n){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(e){return!!e}).join(" ")}function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},r=0,i=e;r<i.length;r++){var a=i[r];if(null!=a&&a!==!1)for(var s in a){var u=a[s];(u||0===u)&&("$nest"===s&&u?n[s]=n.$nest?o(n.$nest,u):u:s.indexOf("&")!==-1||0===s.indexOf("@media")?n[s]=n[s]?o(n[s],u):u:n[s]=u)}}return n}n.d(t,"d",function(){return i}),t.b=r,t.a=o,n.d(t,"c",function(){return a});var i="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame.bind(window),a=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[];e.type&&r.push(e.type),e.orientation&&r.push(e.orientation),e.minWidth&&r.push("(min-width: "+e.minWidth+"px)"),e.maxWidth&&r.push("(max-width: "+e.maxWidth+"px)"),e.minHeight&&r.push("(min-height: "+e.minHeight+"px)"),e.maxHeight&&r.push("(max-height: "+e.maxHeight+"px)");var i="@media "+r.join(" and ");return{$nest:(a={},a[i]=o.apply(void 0,t),a)};var a}},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(2),a=n(0),s="Main",u=!1,c=function(e){return{toggle:function(){return f.Toggle()}}},f={Toggle:function(){return function(e){return!e}}},l=function(e,t){var n=e.groups.style;return a.default("div",{key:e.name,class:(r={},r[n.base]=!0,r)},[a.default("div",{class:(i={},i[n.button]=!0,i[n.buttonActive]=t,i),on:{click:o.ev(e,"toggle")}},t?"nice!! :')":"Click me!!")]);var r,i},d={base:r({width:"100%",height:"100%",overflow:"auto"},i.absoluteCenter),button:r({width:"280px",height:"70px",margin:"20px",fontSize:"38px",borderRadius:"35px",color:"white",backgroundColor:"#13A513",textAlign:"center",transition:"transform 0.4s",cursor:"pointer",userSelect:"none"},i.absoluteCenter,{"&:hover":{color:"white",backgroundColor:"purple",border:"3px solid purple",transform:"perspective(1px) scale(1.1)"}}),buttonActive:{color:"purple",backgroundColor:"#FBFBFB",border:"3px solid #13A513"}},p={name:s,groups:{style:d},state:u,inputs:c,actions:f,interfaces:{view:l}};t.default=p},function(e,t,n){"use strict";var r=n(6),o=n(2);t.styleHandler=function(e,t){return void 0===t&&(t=!1),function(n){var i=document.createElement("style");""!==e&&void 0!==e&&(i.id=e),document.head.appendChild(i);var a,s,u,c=r.createTypeStyle(i),f={container:i,instance:c};return{state:f,handle:function(e){var r=e[0],i=e[1];t&&(s=r.split("$"),a=s[s.length-1]),u=o.styleGroup(c,i,a),n.setGroup(r,"style",u)},dispose:function(){f={},i.remove()}}}}},function(e,t,n){"use strict";var r=n(23),o=n(20),i=n(19),a=n(21),s=n(17),u=n(22),c=n(0);t.viewHandler=function(e){return function(t){function n(e){l=p(l,c.default("div"+d,{key:d},[e])),f=l}var f,l,d="string"==typeof e?e:"",p=r.init([o.default,i.default,a.default,s.default(t.dispatch),u.default]);return{state:l,handle:function(r){if(l)n(r);else{var o=""!==d?document.querySelector(d):e;if(!o)return t.error("view","There are no element matching selector '"+d+"'");l=o,n(l),n(r)}},dispose:function(){}}}}},function(e,t,n){"use strict";t.warn=function(e,t){return console.warn("source: "+e+", description: "+t)},t.error=function(e,t){return console.error("source: "+e+", description: "+t)},t.onDispatch=function(e,t){console.log("dispatched input '"+t[1]+"' from space '"+t[0]+"' with parameters: '"+t[2]+"' and '"+t[3]+"'"),console.log(e.components[t[0]].state)},t.logFns={onDispatch:t.onDispatch,warn:t.warn,error:t.error}},function(e,t,n){"use strict";function r(e,t){for(var n={},r=0,i=Object.keys(e),a=i.length;r<a;r++){var s=e[i[r]],u=t[i[r]];if(n[i[r]]=s,s&&u)if("object"==typeof s.state)for(var c=0,f=Object.keys(s.state),l=f.length;c<l;c++)o(s.state[f[c]],u.def.state[f[r]])&&(n[i[r]].state[f[c]]=u.state[f[c]]);else s.state===u.def.state&&(n[i[r]].state=u.state)}return n}var o=n(13);t.mergeStates=r},function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var l=s(e),d=s(t)}catch(e){return!1}if(l.length!=d.length)return!1;for(l.sort(),d.sort(),i=l.length-1;i>=0;i--)if(l[i]!=d[i])return!1;for(i=l.length-1;i>=0;i--)if(f=l[i],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,s=n(15),u=n(14),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},function(e,t,n){"use strict";function r(e,t){return{id:""===e.id?t:e.id+"$"+t,name:t,groups:{},components:e.components,groupHandlers:e.groupHandlers,interfaceHandlers:e.interfaceHandlers,taskHandlers:e.taskHandlers,warn:e.warn,error:e.error}}function o(e,t){return e.components[e.id+"$"+t].state}function i(e,t,n){var r=e.id+"$"+t,o=e.components[r];return o?o.def.interfaces[n]?o.def.interfaces[n](o.ctx,o.state):(e.error("interfaceOf","there are no interface '"+n+"' in component '"+o.def.name+"' from space '"+r+"'"),{}):(e.error("interfaceOf","there are no component space '"+r+"'"),{})}function a(e,t,n){var o=""===e.id?t:e.id+"$"+t;e.components[o]&&e.warn("merge","component '"+e.id+"' has overwritten component space '"+o+"'"),e.components[e.id]&&!e.components[e.id].components[t]&&(e.components[e.id].components[t]=!0);var i=r(e,t);if(e.components[o]={ctx:i,state:"object"==typeof n.state?v(n.state):n.state,inputs:n.inputs(i),components:v(n.components||{}),def:n},n.components&&s(i,n.components),n.groups)for(var a=void 0,u=0,c=Object.keys(n.groups),f=c.length;u<f;u++)a=e.groupHandlers[c[u]],a?a.handle([i.id,n.groups[c[u]]]):e.error("merge","module has no group handler for '"+c[u]+"' of component '"+n.name+"' from space '"+i.id+"'");return n.init&&n.init(i),i}function s(e,t){for(var n=0,r=Object.keys(t),o=r.length;n<o;n++)a(e,r[n],t[r[n]])}function u(e,t){var n=t?e.id+"$"+t:e.id,r=e.components[n];if(!r)return e.error("unmerge","there is no component with name '"+t+"' at component '"+e.id+"'");t&&delete e.components[e.id].components[t];var o=r.components;o&&c(e.components[n].ctx,Object.keys(o)),r.def.destroy&&r.def.destroy(e.components[n].ctx),delete e.components[n]}function c(e,t){for(var n=0,r=t.length;n<r;n++)u(e,t[n])}function f(e,t,n,r){return void 0!==n||void 0!==r?[e.id,t,n,r]:[e.id,t]}function l(e,t){var n;if("*"===t[3])n=JSON.parse(JSON.stringify(e));else if(e&&void 0!==t[3])if(t[3]instanceof Array){var r=t[3];n=e;for(var o=0,i=r.length;o<i;o++)n=n[r[o]]}else n=e[t[3]];return void 0===t[2]&&void 0===t[3]?[t[0],t[1]]:[t[0],t[1],t[2],n,void 0!==t[2]&&void 0!==t[3]?"pair":void 0!==t[2]?"context":"fn"]}function d(e,t,n){var r=e.components[t];if("function"==typeof n)r.state=n(r.state),p(e);else if(n instanceof Array)if(n[0]&&"string"==typeof n[0]){if(!e.taskHandlers[n[0]])return e.error("execute","there are no task handler for '"+n[0]+"' in component '"+r.def.name+"' from space '"+t+"'");e.taskHandlers[n[0]].handle(n[1])}else if(n[0]instanceof Array||"function"==typeof n[0])for(var o=0,i=n.length;o<i;o++)if("function"==typeof n[o])r.state=n[o](r.state),p(e);else if(n[o]instanceof Array&&"string"==typeof n[o][0]){if(!e.taskHandlers[n[o][0]])return e.error("execute","there are no task handler for '"+n[o][0]+"' in component '"+r.def.name+"' from space '"+t+"'");e.taskHandlers[n[o][0]].handle(n[o][1])}}function p(e){for(var t=e.components[e.id],n=0,r=Object.keys(t.def.interfaces),o=r.length;n<o;n++)e.interfaceHandlers[r[n]]?e.interfaceHandlers[r[n]].handle(t.def.interfaces[r[n]](e,t.state)):e.error("notifyInterfaceHandlers","module does not have interface handler named '"+r[n]+"' for component '"+t.def.name+"' from space '"+e.id+"'")}function h(e){function n(n,d,p){i=n?n:e.root;var h=i.name;if(d?l.id="":l={id:"",name:h,groups:{},components:{},groupHandlers:{},taskHandlers:{},interfaceHandlers:{},warn:function(t,n){e.warn&&e.warn(t,n)},error:function(t,n){e.error&&e.error(t,n)}},f={dispatch:e.onDispatch?function(n){t.dispatch(l,n),e.onDispatch(l,n)}:function(e){return t.dispatch(l,e)},dispose:r,reattach:o,merge:function(e,t){return a(l,e,t)},mergeAll:function(e){return s(l,e)},unmerge:function(e){return u(l,e)},unmergeAll:function(e){return c(l,e)},setGroup:function(e,t,n){l.components[e].ctx.groups[t]=n},warn:l.warn,error:l.error},e.beforeInit&&e.beforeInit(f),!d)for(var v=void 0,g=0,y=t.handlerTypes.length;g<y;g++)if(v=e[t.handlerTypes[g]+"s"])for(var m=0,b=Object.keys(v),_=b.length;m<_;m++)l[t.handlerTypes[g]+"Handlers"][b[m]]=v[b[m]](f);l=a(l,i.name,i),p&&(l.components=p(l.components,d));for(var m=0,b=Object.keys(i.interfaces),y=b.length;m<y;m++){if(!l.interfaceHandlers[b[m]])return l.error("InterfaceHandlers","'"+h+"' component has no interface called '"+b[m]+"', missing interface handler");l.interfaceHandlers[b[m]].handle(i.interfaces[b[m]](l,l.components[h].state))}e.init&&e.init(f)}function r(){e.destroy&&e.destroy(f);for(var n,r=0,o=t.handlerTypes.length;r<o;r++){n=l[t.handlerTypes[r]+"Handlers"];for(var i=0,a=Object.keys(n),s=a.length;i<s;i++)n[a[i]].dispose()}u(l),l=void 0,this.isDisposed=!0}function o(e,t){var r=l.components;l.components={},n(e,r,t)}var i,f,l;return n(void 0),{moduleDef:e,isDisposed:!1,groupHandlers:l.groupHandlers,interfaceHandlers:l.interfaceHandlers,taskHandlers:l.taskHandlers,moduleAPI:f,ctx:l}}function v(e){var t,n,r;t=Array.isArray(e)?[]:{};for(r in e)n=e[r],t[r]="object"==typeof n?v(n):n;return t}t.handlerTypes=["interface","task","group"],t.createContext=r,t.stateOf=o,t.interfaceOf=i,t.merge=a,t.mergeAll=s,t.unmerge=u,t.unmergeAll=c,t.ev=f,t.computeEvent=l,t.dispatch=function(e,t){var n=t[0],r=e.components[e.id.split("$")[0]].ctx,o=r.components[n];if(!o)return r.error("dispatch","there are no component space '"+n+"'");var i=t[1],a=o.inputs[i];if(a){var s="pair"===t[4]?[t[2],t[3]]:"context"===t[4]?t[2]:t[3];if("nothing"!==a&&d(r,n,a(s)),"$"===i[0]){var u=n.split("$");if(u.length>1){var c=u.slice(0,-1).join("$"),f=i.slice(1,i.length),l=r.components[c].inputs["$"+o.ctx.name+"_"+f];l&&d(r,c,l(s))}}}else r.error("dispatch","there are no input named '"+i+"' in component '"+o.def.name+"' from space '"+t[0]+"'")},t.execute=d,t.notifyInterfaceHandlers=p,t.run=h,t.clone=v},function(e,t,n){"use strict";var r=n(1);t.eventListenersModule=function(e){function t(n,o){if(n instanceof Array&&"string"==typeof n[0])e(r.computeEvent(o,n));else for(var i=0;i<n.length;i++)t(n[i])}function n(e,n){var r=e.type,o=n.data.on;o&&o[r]&&t(o[r],e)}function o(){return function e(t){requestAnimationFrame(function(){setTimeout(function(){n(t,e.vnode)},0)})}}function i(e,t){var n,r=e.data.on,i=e.listener,a=e.elm,s=t&&t.data.on,u=t&&t.elm;if(r!==s){if(r&&i)if(s)for(n in r)s[n]||a.removeEventListener(n,i,!1);else for(n in r)a.removeEventListener(n,i,!1);if(s){var c=t.listener=e.listener||o();if(c.vnode=t,r)for(n in s)r[n]||u.addEventListener(n,c,!1);else for(n in s)u.addEventListener(n,c,!1)}}}return{create:i,update:i,destroy:i}},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.eventListenersModule},function(e,t,n){"use strict";function r(e){return document.createElement(e)}function o(e,t){return document.createElementNS(e,t)}function i(e){return document.createTextNode(e)}function a(e){return document.createComment(e)}function s(e,t,n){e.insertBefore(t,n)}function u(e,t){e.removeChild(t)}function c(e,t){e.appendChild(t)}function f(e){return e.parentNode}function l(e){return e.nextSibling}function d(e){return e.tagName}function p(e,t){e.textContent=t}function h(e){return e.textContent}function v(e){return 1===e.nodeType}function g(e){return 3===e.nodeType}function y(e){return 8===e.nodeType}t.htmlDomApi={createElement:r,createElementNS:o,createTextNode:i,createComment:a,insertBefore:s,removeChild:u,appendChild:c,parentNode:f,nextSibling:l,tagName:d,setTextContent:p,getTextContent:h,isElement:v,isText:g,isComment:y},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.htmlDomApi},function(e,t,n){"use strict";function r(e,t){var n,r,i=t.elm,s=e.data.attrs,u=t.data.attrs;if((s||u)&&s!==u){s=s||{},u=u||{};for(n in u){var c=u[n];s[n]!==c&&(a[n]?c?i.setAttribute(n,""):i.removeAttribute(n):(r=n.split(":"),r.length>1&&o.hasOwnProperty(r[0])?i.setAttributeNS(o[r[0]],n,c):i.setAttribute(n,c)))}for(n in s)n in u||i.removeAttribute(n)}}for(var o={xlink:"http://www.w3.org/1999/xlink"},i=["allowfullscreen","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","draggable","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","spellcheck","translate","truespeed","typemustmatch","visible"],a=Object.create(null),s=0,u=i.length;s<u;s++)a[i[s]]=!0;t.attributesModule={create:r,update:r},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.attributesModule},function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.class,a=t.data.class;if((i||a)&&i!==a){i=i||{},a=a||{};for(r in i)a[r]||o.classList.remove(r);for(r in a)(n=a[r])!==i[r]&&o.classList[n?"add":"remove"](r)}}t.classModule={create:r,update:r},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.classModule},function(e,t,n){"use strict";function r(e,t){var n,r,o=t.elm,i=e.data.props,a=t.data.props;if((i||a)&&i!==a){i=i||{},a=a||{};for(n in i)a[n]||delete o[n];for(n in a)r=a[n],i[n]===r||"value"===n&&o[n]===r||(o[n]=r)}}t.propsModule={create:r,update:r},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.propsModule},function(e,t,n){"use strict";function r(e,t,n){u(function(){e[t]=n})}function o(e,t){var n,o,i=t.elm,a=e.data.style,s=t.data.style;if((a||s)&&a!==s){a=a||{},s=s||{};var u="delayed"in a;for(o in a)s[o]||("-"===o[0]&&"-"===o[1]?i.style.removeProperty(o):i.style[o]="");for(o in s)if(n=s[o],"delayed"===o)for(o in s.delayed)n=s.delayed[o],u&&n===a.delayed[o]||r(i.style,o,n);else"remove"!==o&&n!==a[o]&&("-"===o[0]&&"-"===o[1]?i.style.setProperty(o,n):i.style[o]=n)}}function i(e){var t,n,r=e.elm,o=e.data.style;if(o&&(t=o.destroy))for(n in t)r.style[n]=t[n]}function a(e,t){var n=e.data.style;if(!n||!n.remove)return void t();var r,o,i=e.elm,a=0,s=n.remove,u=0,c=[];for(r in s)c.push(r),i.style[r]=s[r];o=getComputedStyle(i);for(var f=o["transition-property"].split(", ");a<f.length;++a)c.indexOf(f[a])!==-1&&u++;i.addEventListener("transitionend",function(e){e.target===i&&--u,0===u&&t()})}var s="undefined"!=typeof window&&window.requestAnimationFrame||setTimeout,u=function(e){s(function(){s(e)})};t.styleModule={create:o,update:o,destroy:i,remove:a},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styleModule},function(e,t,n){"use strict";function r(e){return void 0===e}function o(e){return void 0!==e}function i(e,t){return e.key===t.key&&e.sel===t.sel}function a(e){return void 0!==e.sel}function s(e,t,n){var r,o,i,a={};for(r=t;r<=n;++r)null!=(i=e[r])&&void 0!==(o=i.key)&&(a[o]=r);return a}function u(e,t){function n(e){var t=e.id?"#"+e.id:"",n=e.className?"."+e.className.split(" ").join("."):"";return c.default(k.tagName(e).toLowerCase()+t+n,{},[],void 0,e)}function u(e,t){return function(){if(0==--t){var n=k.parentNode(e);k.removeChild(n,e)}}}function h(e,t){var n,i=e.data;void 0!==i&&o(n=i.hook)&&o(n=n.init)&&(n(e),i=e.data);var a=e.children,s=e.sel;if("!"===s)r(e.text)&&(e.text=""),e.elm=k.createComment(e.text);else if(void 0!==s){var u=s.indexOf("#"),c=s.indexOf(".",u),l=u>0?u:s.length,p=c>0?c:s.length,v=u!==-1||c!==-1?s.slice(0,Math.min(l,p)):s,g=e.elm=o(i)&&o(n=i.ns)?k.createElementNS(n,v):k.createElement(v);for(l<p&&(g.id=s.slice(l+1,p)),c>0&&(g.className=s.slice(p+1).replace(/\./g," ")),n=0;n<w.create.length;++n)w.create[n](d,e);if(f.array(a))for(n=0;n<a.length;++n){var y=a[n];null!=y&&k.appendChild(g,h(y,t))}else f.primitive(e.text)&&k.appendChild(g,k.createTextNode(e.text));n=e.data.hook,o(n)&&(n.create&&n.create(d,e),n.insert&&t.push(e))}else e.elm=k.createTextNode(e.text);return e.elm}function v(e,t,n,r,o,i){for(;r<=o;++r){var a=n[r];null!=a&&k.insertBefore(e,h(a,i),t)}}function g(e){var t,n,r=e.data;if(void 0!==r){for(o(t=r.hook)&&o(t=t.destroy)&&t(e),t=0;t<w.destroy.length;++t)w.destroy[t](e);if(void 0!==e.children)for(n=0;n<e.children.length;++n)null!=(t=e.children[n])&&"string"!=typeof t&&g(t)}}function y(e,t,n,r){for(;n<=r;++n){var i=void 0,a=void 0,s=void 0,c=t[n];if(null!=c)if(o(c.sel)){for(g(c),a=w.remove.length+1,s=u(c.elm,a),i=0;i<w.remove.length;++i)w.remove[i](c,s);o(i=c.data)&&o(i=i.hook)&&o(i=i.remove)?i(c,s):s()}else k.removeChild(e,c.elm)}}function m(e,t,n,o){for(var a,u,c,f,l=0,d=0,p=t.length-1,g=t[0],m=t[p],_=n.length-1,x=n[0],w=n[_];l<=p&&d<=_;)null==g?g=t[++l]:null==m?m=t[--p]:null==x?x=n[++d]:null==w?w=n[--_]:i(g,x)?(b(g,x,o),g=t[++l],x=n[++d]):i(m,w)?(b(m,w,o),m=t[--p],w=n[--_]):i(g,w)?(b(g,w,o),k.insertBefore(e,g.elm,k.nextSibling(m.elm)),g=t[++l],w=n[--_]):i(m,x)?(b(m,x,o),k.insertBefore(e,m.elm,g.elm),m=t[--p],x=n[++d]):(void 0===a&&(a=s(t,l,p)),u=a[x.key],r(u)?(k.insertBefore(e,h(x,o),g.elm),x=n[++d]):(c=t[u],c.sel!==x.sel?k.insertBefore(e,h(x,o),g.elm):(b(c,x,o),t[u]=void 0,k.insertBefore(e,c.elm,g.elm)),x=n[++d]));l>p?(f=null==n[_+1]?null:n[_+1].elm,v(e,f,n,d,_,o)):d>_&&y(e,t,l,p)}function b(e,t,n){var i,a;o(i=t.data)&&o(a=i.hook)&&o(i=a.prepatch)&&i(e,t);var s=t.elm=e.elm,u=e.children,c=t.children;if(e!==t){if(void 0!==t.data){for(i=0;i<w.update.length;++i)w.update[i](e,t);i=t.data.hook,o(i)&&o(i=i.update)&&i(e,t)}r(t.text)?o(u)&&o(c)?u!==c&&m(s,u,c,n):o(c)?(o(e.text)&&k.setTextContent(s,""),v(s,null,c,0,c.length-1,n)):o(u)?y(s,u,0,u.length-1):o(e.text)&&k.setTextContent(s,""):e.text!==t.text&&k.setTextContent(s,t.text),o(a)&&o(i=a.postpatch)&&i(e,t)}}var _,x,w={},k=void 0!==t?t:l.default;for(_=0;_<p.length;++_)for(w[p[_]]=[],x=0;x<e.length;++x){var S=e[x][p[_]];void 0!==S&&w[p[_]].push(S)}return function(e,t){var r,o,s,u=[];for(r=0;r<w.pre.length;++r)w.pre[r]();for(a(e)||(e=n(e)),i(e,t)?b(e,t,u):(o=e.elm,s=k.parentNode(o),h(t,u),null!==s&&(k.insertBefore(s,t.elm,k.nextSibling(o)),y(s,[e],0,0))),r=0;r<u.length;++r)u[r].data.hook.insert(u[r]);for(r=0;r<w.post.length;++r)w.post[r]();return t}}var c=n(5),f=n(4),l=n(18),d=c.default("",{},[],void 0,void 0),p=["create","update","remove","destroy","pre","post"],h=n(0);t.h=h.h;var v=n(24);t.thunk=v.thunk,t.init=u},function(e,t,n){"use strict";function r(e,t){t.elm=e.elm,e.data.fn=t.data.fn,e.data.args=t.data.args,t.data=e.data,t.children=e.children,t.text=e.text,t.elm=e.elm}function o(e){var t=e.data;r(t.fn.apply(void 0,t.args),e)}function i(e,t){var n,o=e.data,i=t.data,a=o.args,s=i.args;for(o.fn===i.fn&&a.length===s.length||r(i.fn.apply(void 0,s),t),n=0;n<s.length;++n)if(a[n]!==s[n])return void r(i.fn.apply(void 0,s),t);r(e,t)}var a=n(0);t.thunk=function(e,t,n,r){return void 0===r&&(r=n,n=t,t=void 0),a.h(e,{key:t,hook:{init:o,prepatch:i},fn:n,args:r})},Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.thunk},function(e,t,n){"use strict";function r(e){var t={},n="";for(var o in e){var a=e[o];if("$unique"===o)t[i.IS_UNIQUE]=a;else if("$nest"===o){var s=a;for(var u in s){var c=s[u];t[u]=r(c).result}}else"$debugName"===o?n=a:t[o]=a}return{result:t,debugName:n}}function o(e){var t={$debugName:void 0,keyframes:{}};for(var n in e){var r=e[n];"$debugName"===n?t.$debugName=r:t.keyframes[n]=r}return t}var i=n(3);n.n(i);t.a=r,t.b=o},function(e,t,n){"use strict";var r=n(25),o=n(7),i=n(3);n.n(i);n.d(t,"a",function(){return a});var a=function(){function e(e){var t=e.autoGenerateTag,a=this;this.cssRaw=function(e){e&&(a._raw+=e||"",a._pendingRawChange=!0,a._styleUpdated())},this.cssRule=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=n.i(r.a)(o.a.apply(void 0,t)).result;a._freeStyle.registerRule(e,s),a._styleUpdated()},this.forceRenderStyles=function(){var e=a._getTag();e&&(e.textContent=a.getStyles())},this.fontFace=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=a._freeStyle,r=0,o=e;r<o.length;r++){var i=o[r];n.registerRule("@font-face",i)}a._styleUpdated()},this.getStyles=function(){return(a._raw||"")+a._freeStyle.getStyles()},this.keyframes=function(e){var t=n.i(r.b)(e),o=t.keyframes,i=t.$debugName,s=a._freeStyle.registerKeyframes(o,i);return a._styleUpdated(),s},this.reinit=function(){var e=i.create();a._freeStyle=e,a._lastFreeStyleChangeId=e.changeId,a._raw="",a._pendingRawChange=!1;var t=a._getTag();t&&(t.textContent="")},this.setStylesTarget=function(e){a._tag&&(a._tag.textContent=""),a._tag=e,a.forceRenderStyles()},this.style=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=a._freeStyle,s=n.i(r.a)(o.a.apply(void 0,e)),u=s.result,c=s.debugName,f=c?i.registerStyle(u,c):i.registerStyle(u);return a._styleUpdated(),f};var s=i.create();this._autoGenerateTag=t,this._freeStyle=s,this._lastFreeStyleChangeId=s.changeId,this._pending=0,this._pendingRawChange=!1,this._raw="",this._tag=void 0}return e.prototype._afterAllSync=function(e){var t=this;this._pending++;var r=this._pending;n.i(o.d)(function(){r===t._pending&&e()})},e.prototype._getTag=function(){if(this._tag)return this._tag;if(this._autoGenerateTag){var e="undefined"==typeof window?{textContent:""}:document.createElement("style");return"undefined"!=typeof document&&document.head.appendChild(e),this._tag=e,e}},e.prototype._styleUpdated=function(){var e=this,t=this._freeStyle.changeId,n=this._lastFreeStyleChangeId;(this._pendingRawChange||t!==n)&&(this._lastFreeStyleChangeId=t,this._pendingRawChange=!1,this._afterAllSync(function(){return e.forceRenderStyles()}))},e}()},function(e,t){},function(e,t,n){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(10),a=n(9),s=(n(12),n(11)),u=n(8),c=!1;o.run(r({root:u.default,groups:{style:a.styleHandler("",c)},interfaces:{view:i.viewHandler("#app")}},c?s.logFns:{}))}]);