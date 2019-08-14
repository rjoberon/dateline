/*!
 * Dateline 2.0.0
 * (c) 2019 Sjaak Priester, Amsterdam
 * MIT License
 * https://github.com/sjaakp/dateline
 * https://sjaakpriester.nl
 */
var Dateline=function(t){"use strict";
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */var e=function(t){function e(e){for(var n,i=[],r=arguments.length-1;r-- >0;)i[r]=arguments[r+1];t.call(this),Object.defineProperty(this,"compare",{value:e}),(n=this).insert.apply(n,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype._binarySearch=function(t){for(var e=-1,n=this.length;1+e<n;){var i=e+(n-e>>1);t(this[i])?n=i:e=i}return n},e.prototype.binIndexOf=function(t){var e=this,n=this._binarySearch(function(n){return 0>=e.compare(t,n)});return n>=this.length||this.compare(t,this[n])?-1:n},e.prototype.binInsertPosOf=function(t){var e=this;return this._binarySearch(function(n){return 0>=e.compare(t,n)})},e.prototype.binFind=function(t){var e=this,n=this._binarySearch(function(n){return 0>=e.compare(t,n)}),i=this[n];return n>=this.length||this.compare(t,i)?void 0:i},e.prototype.insert=function(){for(var t=this,e=[],n=arguments.length;n--;)e[n]=arguments[n];e.forEach(function(e){var n=t._binarySearch(function(n){return 0>=t.compare(e,n)});t.splice(n,0,e)})},e}(Array);
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */function n(t){return t instanceof Date?t:new Date(t)}function i(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=document.createElement("div");return(t=i.classList).add.apply(t,e),i}function r(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];t.forEach(function(t){t.classList.remove("d-hidden")})}function a(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];t.forEach(function(t){t.classList.add("d-hidden")})}function s(t,e,n){t.style[e]=n+"px"}
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */function o(t){var e=this;this.widget=t,this.info=i("d-info");var n=i("d-bubble","d-hidden"),r=i("d-close");r.innerHTML="&times;",r.addEventListener("click",function(t){e.hide()}),n.append(r,this.info),this.element=n}
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */
function u(t,e){var n=t.getFullYear();return{plus:!(n%e),text:n}}o.prototype={show:function(t){return r(this.element),s(this.element,"left",t.left),s(this.element,"top",t.top),this},hide:function(){return a(this.element),this.widget.clearHilight(),this},setInfo:function(t){return this.info.innerHTML=t,this}};var c=[function(t){var e=t.getMilliseconds();return{plus:!e,text:e}},function(t){var e=t.getSeconds();return{plus:!e,text:e}},function(t){var e=t.getMinutes();return{plus:!e,text:e||t.getHours()}},function(t){var e=t.getHours();return{plus:!e,text:e||t.getDate()}},function(t,e){var n=t.getDate();return{plus:1===n,text:1===n?t.toLocaleDateString(e,{month:"short"}):n}},function(t,e){return{plus:!1,text:t.toLocaleDateString(e,{month:"short",day:"numeric"})}},function(t,e){return t.getMonth()?{plus:!1,text:t.toLocaleDateString(e,{month:"short"})}:u(t,1)},function(t){return u(t,10)},function(t){return u(t,100)},function(t){return u(t,1e3)},function(t){return u(t,1e4)}];function l(t){this.content=t,this.band=t.band,this.widget=t.widget,this.markerText=c[t.band.scale],this.element=i("d-markers")}
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */
function h(t){this.content=t,this.band=t.band,this.widget=t.widget,this.renderEvent="overview"===t.band.layout?this.renderOverviewEvent:this.renderNormalEvent,this.element=i("d-events"),this.overflows=[]}
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */
function d(t){this.band=t,this.widget=t.widget,this.center=new Date(this.widget._cursor),this.range={begin:new Date,end:new Date},this.safe={begin:new Date,end:new Date},this.visible={begin:new Date,end:new Date};var e=i("d-content");this.markers=new l(this),this.events=new h(this),e.append(this.markers.element,this.events.element),this.element=e}l.prototype={render:function(){for(var t,e,n,r=this.content.range.begin,a=this.content.range.end,o=new Date(r);e=this.element.firstChild;)this.element.removeChild(e);for(this.band.ceilDate(o);o<a;)t=this.markerText(o,this.widget.settings.locale),n=i("d-marker"),t.plus&&n.classList.add("d-plus"),s(n,"left",this.band.calcPixels(o-r)),n.innerText=t.text,this.element.append(n),this.band.incrDate(o)}},h.prototype={render:function(){for(var t,e,n,i=this,r=this.widget.events,a=this.content.range,s=r.binInsertPosOf({start:a.begin}),o=r.binInsertPosOf({start:a.end});n=this.element.firstChild;)this.element.removeChild(n);for(this.nLines=Math.floor(this.element.clientHeight/this.widget.lineHeight),this.lines=[],t=0;t<this.nLines;t++)this.lines.push(0);for(this.topMargin=(this.element.clientHeight-this.nLines*this.widget.lineHeight)/2,t=0;t<s;t++)(e=r[t]).stop&&e.stop>a.begin&&this.renderEvent(e);for(t=s;t<o;t++)this.renderEvent(r[t]);this.overflows.forEach(function(t){var e=i.widget.events.findIndex(function(e){return e===t});e>-1&&i.widget.events.splice(e,1)})},renderNormalEvent:function(t){var e,n,r,a,o=this,u=this.band,c=u.index,l=this.content.range,h=this.calcPos(t.start),d=this.widget.settings.locale;if(h){t.elements[c]?e=t.elements[c]:(e=document.createElement("div"),n=t.start.toLocaleString(d,this.band.helpers.loc),t.class&&(e.className=t.class),e.innerHTML=t.text,e.dataset.id=t.id,t.stop?(n+=" ... "+t.stop.toLocaleString(d,this.band.helpers.loc),e.classList.add("d-tape-event"),e.prepend(i("d-tape"))):e.classList.add("d-event"),e.title=n,this.widget.settings.url&&(["touchstart","touchend","mousedown"].forEach(function(t){e.addEventListener(t,function(t){t.stopPropagation()})}),e.addEventListener("click",function(t){var e=o.widget.settings.url+t.target.dataset.id;if(o.widget.hilight(t.target),o.widget.settings.redirect)window.location=e;else{var n=o.band.element.getBoundingClientRect(),i={top:t.clientY-t.offsetY-n.y,left:t.clientX-t.offsetX-n.x},r=o.widget.bubble,a=new XMLHttpRequest;r.show(i).setInfo(o.widget.settings.loading),a.open("GET",e,!0),a.onloadend=function(){this.status>=200&&this.status<400&&r.setInfo(this.response)},a.send()}})),t.elements[c]=e),s(e,"left",h.left),s(e,"top",h.line*this.widget.lineHeight+this.topMargin),t.stop&&(r=Math.max(t.start,l.begin),a=Math.min(t.stop,l.end),s(e.firstChild,"width",Math.max(u.calcPixels(a-r),1)),t.post_start&&t.post_start>r&&s(e.firstChild,"borderLeftWidth",u.calcPixels(t.post_start-r)),t.pre_stop&&t.pre_stop<a&&s(e.firstChild,"borderRightWidth",u.calcPixels(a-t.pre_stop))),this.element.append(e);var f=window.getComputedStyle(e,":before");s(e,"marginLeft",parseInt(f.getPropertyValue("width"),10)/-2),this.lines[h.line]=h.left+e.clientWidth}else console.warn("Dateline overflow",t),this.overflows.push(t)},renderOverviewEvent:function(t){var e,n,r,a=this.band.index;t.elements[a]?e=t.elements[a]:(e=i(t.stop?"d-tape-pin":"d-pin"),t.elements[a]=e),t.stop?(n=Math.max(t.start,this.content.range.begin),r=Math.min(t.stop,this.content.range.end),s(e,"left",this.content.calcLeft(n)),s(e,"width",Math.max(this.band.calcPixels(r-n),1))):s(e,"left",this.content.calcLeft(t.start)),this.element.append(e)},calcPos:function(t){var e,n=this.content.calcLeft(t);for(e=0;e<this.nLines&&!(n>=this.lines[e]);e++);return!(e>=this.nLines)&&{left:n,line:e}}},d.prototype={render:function(){var t=this.widget,e=this.range.begin,n=this.range.end;if(this.markers.render(),this.events.render(),this.element.querySelectorAll(".d-limit").forEach(function(t){t.remove()}),t._begin&&t._begin>e&&t._begin<n){var r=i("d-limit","d-begin");s(r,"right",this.calcRight(t._begin)),this.element.append(r)}if(t._end&&t._end>e&&t._end<n){var a=i("d-limit","d-end");s(a,"left",this.calcLeft(t._end)),this.element.append(a)}},setWidth:function(t){this.width=t,this.calcRange(),s(this.element,"width",t),this.place(),this.render()},calcLeft:function(t){return this.band.calcPixels(t-this.range.begin)},calcRight:function(t){return this.band.calcPixels(this.range.end-t)},calcRange:function(){var t=this.center.getTime(),e=this.band.calcMs(this.width)/2,n=2*e/3;this.range.begin.setTime(t-e),this.range.end.setTime(t+e),this.safe.begin.setTime(t-n),this.safe.end.setTime(t+n)},place:function(){var t,e,n=this.widget._cursor,i=this.widget.getWidth();(n<this.safe.begin||n>this.safe.end)&&(this.center.setTime(n.getTime()),this.calcRange(),this.render()),s(this.element,"left",this.band.calcPixels(this.center-n)-(this.width-i)/2),t=n.getTime(),e=this.band.calcMs(i)/2,this.visible.begin.setTime(t-e),this.visible.end.setTime(t+e)}};var f={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},g={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},p=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],m={CSS:{},springs:{}};function v(t,e,n){return Math.min(Math.max(t,e),n)}function b(t,e){return t.indexOf(e)>-1}function y(t,e){return t.apply(null,e)}var w={arr:function(t){return Array.isArray(t)},obj:function(t){return b(Object.prototype.toString.call(t),"Object")},pth:function(t){return w.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||w.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return w.hex(t)||w.rgb(t)||w.hsl(t)},key:function(t){return!f.hasOwnProperty(t)&&!g.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function M(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function x(t,e){var n=M(t),i=v(w.und(n[0])?1:n[0],.1,100),r=v(w.und(n[1])?100:n[1],.1,100),a=v(w.und(n[2])?10:n[2],.1,100),s=v(w.und(n[3])?0:n[3],.1,100),o=Math.sqrt(r/i),u=a/(2*Math.sqrt(r*i)),c=u<1?o*Math.sqrt(1-u*u):0,l=1,h=u<1?(u*o-s)/c:-s+o;function d(t){var n=e?e*t/1e3:t;return n=u<1?Math.exp(-n*u*o)*(l*Math.cos(c*n)+h*Math.sin(c*n)):(l+h*n)*Math.exp(-n*o),0===t||1===t?t:1-n}return e?d:function(){var e=m.springs[t];if(e)return e;for(var n=0,i=0;;)if(1===d(n+=1/6)){if(++i>=16)break}else i=0;var r=n*(1/6)*1e3;return m.springs[t]=r,r}}function T(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=v(t,1,10),i=v(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-i/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/i)}}function L(t){return void 0===t&&(t=10),function(e){return Math.round(e*t)*(1/t)}}var E=function(){var t=11,e=1/(t-1);function n(t,e){return 1-3*e+3*t}function i(t,e){return 3*e-6*t}function r(t){return 3*t}function a(t,e,a){return((n(e,a)*t+i(e,a))*t+r(e))*t}function s(t,e,a){return 3*n(e,a)*t*t+2*i(e,a)*t+r(e)}return function(n,i,r,o){if(0<=n&&n<=1&&0<=r&&r<=1){var u=new Float32Array(t);if(n!==i||r!==o)for(var c=0;c<t;++c)u[c]=a(c*e,n,r);return function(t){return n===i&&r===o?t:0===t||1===t?t:a(l(t),i,o)}}function l(i){for(var o=0,c=1,l=t-1;c!==l&&u[c]<=i;++c)o+=e;var h=o+(i-u[--c])/(u[c+1]-u[c])*e,d=s(h,n,r);return d>=.001?function(t,e,n,i){for(var r=0;r<4;++r){var o=s(e,n,i);if(0===o)return e;e-=(a(e,n,i)-t)/o}return e}(i,h,n,r):0===d?h:function(t,e,n,i,r){var s,o,u=0;do{(s=a(o=e+(n-e)/2,i,r)-t)>0?n=o:e=o}while(Math.abs(s)>1e-7&&++u<10);return o}(i,o,o+e,n,r)}}}(),_=function(){var t=["Quad","Cubic","Quart","Quint","Sine","Expo","Circ","Back","Elastic"],e={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],T],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,e){return function(n){return 1-T(t,e)(1-n)}}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,e){return function(n){return n<.5?T(t,e)(2*n)/2:1-T(t,e)(-2*n+2)/2}}]},n={linear:[.25,.25,.75,.75]},i=function(i){e[i].forEach(function(e,r){n["ease"+i+t[r]]=e})};for(var r in e)i(r);return n}();function D(t,e){if(w.fnc(t))return t;var n=t.split("(")[0],i=_[n],r=M(t);switch(n){case"spring":return x(t,e);case"cubicBezier":return y(E,r);case"steps":return y(L,r);default:return w.fnc(i)?y(i,r):y(E,i)}}function I(t){try{return document.querySelectorAll(t)}catch(t){return}}function k(t,e){for(var n=t.length,i=arguments.length>=2?arguments[1]:void 0,r=[],a=0;a<n;a++)if(a in t){var s=t[a];e.call(i,s,a,t)&&r.push(s)}return r}function P(t){return t.reduce(function(t,e){return t.concat(w.arr(e)?P(e):e)},[])}function C(t){return w.arr(t)?t:(w.str(t)&&(t=I(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function O(t,e){return t.some(function(t){return t===e})}function F(t){var e={};for(var n in t)e[n]=t[n];return e}function S(t,e){var n=F(t);for(var i in t)n[i]=e.hasOwnProperty(i)?e[i]:t[i];return n}function H(t,e){var n=F(t);for(var i in e)n[i]=w.und(t[i])?e[i]:t[i];return n}function Y(t){return w.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:w.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,i){return e+e+n+n+i+i}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):w.hsl(t)?function(t){var e,n,i,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),a=parseInt(r[1],10)/360,s=parseInt(r[2],10)/100,o=parseInt(r[3],10)/100,u=r[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==s)e=n=i=o;else{var l=o<.5?o*(1+s):o+s-o*s,h=2*o-l;e=c(h,l,a+1/3),n=c(h,l,a),i=c(h,l,a-1/3)}return"rgba("+255*e+","+255*n+","+255*i+","+u+")"}(t):void 0;var e,n}function N(t){var e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[2]}function A(t,e){return w.fnc(t)?t(e.target,e.id,e.total):t}function B(t,e){return t.getAttribute(e)}function R(t,e,n){if(O([n,"deg","rad","turn"],N(e)))return e;var i=m.CSS[e+n];if(!w.und(i))return i;var r=document.createElement(t.tagName),a=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;a.appendChild(r),r.style.position="absolute",r.style.width=100+n;var s=100/r.offsetWidth;a.removeChild(r);var o=s*parseFloat(e);return m.CSS[e+n]=o,o}function W(t,e,n){if(e in t.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=t.style[e]||getComputedStyle(t).getPropertyValue(i)||"0";return n?R(t,r,n):r}}function X(t,e){return w.dom(t)&&!w.inp(t)&&(B(t,e)||w.svg(t)&&t[e])?"attribute":w.dom(t)&&O(p,e)?"transform":w.dom(t)&&"transform"!==e&&W(t,e)?"css":null!=t[e]?"object":void 0}function j(t){if(w.dom(t)){for(var e,n=t.style.transform||"",i=/(\w+)\(([^)]*)\)/g,r=new Map;e=i.exec(n);)r.set(e[1],e[2]);return r}}function q(t,e,n,i){var r=b(e,"scale")?1:0+function(t){return b(t,"translate")||"perspective"===t?"px":b(t,"rotate")||b(t,"skew")?"deg":void 0}(e),a=j(t).get(e)||r;return n&&(n.transforms.list.set(e,a),n.transforms.last=e),i?R(t,a,i):a}function $(t,e,n,i){switch(X(t,e)){case"transform":return q(t,e,i,n);case"css":return W(t,e,n);case"attribute":return B(t,e);default:return t[e]||0}}function z(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var i=N(t)||0,r=parseFloat(e),a=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return r+a+i;case"-":return r-a+i;case"*":return r*a+i}}function K(t,e){if(w.col(t))return Y(t);var n=N(t),i=n?t.substr(0,t.length-n.length):t;return e&&!/\s/g.test(t)?i+e:i}function U(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function V(t){for(var e,n=t.points,i=0,r=0;r<n.numberOfItems;r++){var a=n.getItem(r);r>0&&(i+=U(e,a)),e=a}return i}function Z(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*B(t,"r")}(t);case"rect":return function(t){return 2*B(t,"width")+2*B(t,"height")}(t);case"line":return function(t){return U({x:B(t,"x1"),y:B(t,"y1")},{x:B(t,"x2"),y:B(t,"y2")})}(t);case"polyline":return V(t);case"polygon":return function(t){var e=t.points;return V(t)+U(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function Q(t,e){var n=e||{},i=n.el||function(t){for(var e=t.parentNode;w.svg(e)&&(e=e.parentNode,w.svg(e.parentNode)););return e}(t),r=i.getBoundingClientRect(),a=B(i,"viewBox"),s=r.width,o=r.height,u=n.viewBox||(a?a.split(" "):[0,0,s,o]);return{el:i,viewBox:u,x:u[0]/1,y:u[1]/1,w:s/u[2],h:o/u[3]}}function G(t,e){function n(n){void 0===n&&(n=0);var i=e+n>=1?e+n:0;return t.el.getPointAtLength(i)}var i=Q(t.el,t.svg),r=n(),a=n(-1),s=n(1);switch(t.property){case"x":return(r.x-i.x)*i.w;case"y":return(r.y-i.y)*i.h;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function J(t,e){var n=/-?\d*\.?\d+/g,i=K(w.pth(t)?t.totalLength:t,e)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:w.str(t)||e?i.split(n):[]}}function tt(t){return k(t?P(w.arr(t)?t.map(C):C(t)):[],function(t,e,n){return n.indexOf(t)===e})}function et(t){var e=tt(t);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:j(t)}}})}function nt(t,e){var n=F(e);if(/^spring/.test(n.easing)&&(n.duration=x(n.easing)),w.arr(t)){var i=t.length;2===i&&!w.obj(t[0])?t={value:t}:w.fnc(e.duration)||(n.duration=e.duration/i)}var r=w.arr(t)?t:[t];return r.map(function(t,n){var i=w.obj(t)&&!w.pth(t)?t:{value:t};return w.und(i.delay)&&(i.delay=n?0:e.delay),w.und(i.endDelay)&&(i.endDelay=n===r.length-1?e.endDelay:0),i}).map(function(t){return H(t,n)})}function it(t,e){var n=[],i=e.keyframes;for(var r in i&&(e=H(function(t){for(var e=k(P(t.map(function(t){return Object.keys(t)})),function(t){return w.key(t)}).reduce(function(t,e){return t.indexOf(e)<0&&t.push(e),t},[]),n={},i=function(i){var r=e[i];n[r]=t.map(function(t){var e={};for(var n in t)w.key(n)?n==r&&(e.value=t[n]):e[n]=t[n];return e})},r=0;r<e.length;r++)i(r);return n}(i),e)),e)w.key(r)&&n.push({name:r,tweens:nt(e[r],t)});return n}function rt(t,e){var n;return t.tweens.map(function(i){var r=function(t,e){var n={};for(var i in t){var r=A(t[i],e);w.arr(r)&&1===(r=r.map(function(t){return A(t,e)})).length&&(r=r[0]),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(i,e),a=r.value,s=w.arr(a)?a[1]:a,o=N(s),u=$(e.target,t.name,o,e),c=n?n.to.original:u,l=w.arr(a)?a[0]:c,h=N(l)||N(u),d=o||h;return w.und(s)&&(s=c),r.from=J(l,d),r.to=J(z(s,l),d),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=D(r.easing,r.duration),r.isPath=w.pth(a),r.isColor=w.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var at={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,i,r){if(i.list.set(e,n),e===i.last||r){var a="";i.list.forEach(function(t,e){a+=e+"("+t+") "}),t.style.transform=a}}};function st(t,e){et(t).forEach(function(t){for(var n in e){var i=A(e[n],t),r=t.target,a=N(i),s=$(r,n,a,t),o=z(K(i,a||N(s)),s),u=X(r,n);at[u](r,n,o,t.transforms,!0)}})}function ot(t,e){return k(P(t.map(function(t){return e.map(function(e){return function(t,e){var n=X(t.target,e.name);if(n){var i=rt(e,t),r=i[i.length-1];return{type:n,property:e.name,animatable:t,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}(t,e)})})),function(t){return!w.und(t)})}function ut(t,e){var n=t.length,i=function(t){return t.timelineOffset?t.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,t.map(function(t){return i(t)+t.duration})):e.duration,r.delay=n?Math.min.apply(Math,t.map(function(t){return i(t)+t.delay})):e.delay,r.endDelay=n?r.duration-Math.max.apply(Math,t.map(function(t){return i(t)+t.duration-t.endDelay})):e.endDelay,r}var ct=0;var lt,ht=[],dt=[],ft=function(){function t(){lt=requestAnimationFrame(e)}function e(e){var n=ht.length;if(n){for(var i=0;i<n;){var r=ht[i];if(r.paused){var a=ht.indexOf(r);a>-1&&(ht.splice(a,1),n=ht.length)}else r.tick(e);i++}t()}else lt=cancelAnimationFrame(lt)}return t}();function gt(t){void 0===t&&(t={});var e,n=0,i=0,r=0,a=0,s=null;function o(t){var e=window.Promise&&new Promise(function(t){return s=t});return t.finished=e,e}var u=function(t){var e=S(f,t),n=S(g,t),i=it(n,t),r=et(t.targets),a=ot(r,i),s=ut(a,n),o=ct;return ct++,H(e,{id:o,children:[],animatables:r,animations:a,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(t);o(u);function c(){var t=u.direction;"alternate"!==t&&(u.direction="normal"!==t?"normal":"reverse"),u.reversed=!u.reversed,e.forEach(function(t){return t.reversed=u.reversed})}function l(t){return u.reversed?u.duration-t:t}function h(){n=0,i=l(u.currentTime)*(1/gt.speed)}function d(t,e){e&&e.seek(t-e.timelineOffset)}function p(t){for(var e=0,n=u.animations,i=n.length;e<i;){var r=n[e],a=r.animatable,s=r.tweens,o=s.length-1,c=s[o];o&&(c=k(s,function(e){return t<e.end})[0]||c);for(var l=v(t-c.start-c.delay,0,c.duration)/c.duration,h=isNaN(l)?1:c.easing(l),d=c.to.strings,f=c.round,g=[],p=c.to.numbers.length,m=void 0,b=0;b<p;b++){var y=void 0,w=c.to.numbers[b],M=c.from.numbers[b]||0;y=c.isPath?G(c.value,h*w):M+h*(w-M),f&&(c.isColor&&b>2||(y=Math.round(y*f)/f)),g.push(y)}var x=d.length;if(x){m=d[0];for(var T=0;T<x;T++){d[T];var L=d[T+1],E=g[T];isNaN(E)||(m+=L?E+L:E+" ")}}else m=g[0];at[r.type](a.target,r.property,m,a.transforms),r.currentValue=m,e++}}function m(t){u[t]&&!u.passThrough&&u[t](u)}function b(t){var h=u.duration,f=u.delay,g=h-u.endDelay,b=l(t);u.progress=v(b/h*100,0,100),u.reversePlayback=b<u.currentTime,e&&function(t){if(u.reversePlayback)for(var n=a;n--;)d(t,e[n]);else for(var i=0;i<a;i++)d(t,e[i])}(b),!u.began&&u.currentTime>0&&(u.began=!0,m("begin"),m("loopBegin")),b<=f&&0!==u.currentTime&&p(0),(b>=g&&u.currentTime!==h||!h)&&p(h),b>f&&b<g?(u.changeBegan||(u.changeBegan=!0,u.changeCompleted=!1,m("changeBegin")),m("change"),p(b)):u.changeBegan&&(u.changeCompleted=!0,u.changeBegan=!1,m("changeComplete")),u.currentTime=v(b,0,h),u.began&&m("update"),t>=h&&(i=0,u.remaining&&!0!==u.remaining&&u.remaining--,u.remaining?(n=r,m("loopComplete"),m("loopBegin"),"alternate"===u.direction&&c()):(u.paused=!0,u.completed||(u.completed=!0,m("loopComplete"),m("complete"),!u.passThrough&&"Promise"in window&&(s(),o(u)))))}return u.reset=function(){var t=u.direction;u.passThrough=!1,u.currentTime=0,u.progress=0,u.paused=!0,u.began=!1,u.changeBegan=!1,u.completed=!1,u.changeCompleted=!1,u.reversePlayback=!1,u.reversed="reverse"===t,u.remaining=u.loop,e=u.children;for(var n=a=e.length;n--;)u.children[n].reset();(u.reversed&&!0!==u.loop||"alternate"===t&&1===u.loop)&&u.remaining++,p(0)},u.set=function(t,e){return st(t,e),u},u.tick=function(t){r=t,n||(n=r),b((r+(i-n))*gt.speed)},u.seek=function(t){b(l(t))},u.pause=function(){u.paused=!0,h()},u.play=function(){u.paused&&(u.completed&&u.reset(),u.paused=!1,ht.push(u),h(),lt||ft())},u.reverse=function(){c(),h()},u.restart=function(){u.reset(),u.play()},u.reset(),u.autoplay&&u.play(),u}function pt(t,e){for(var n=e.length;n--;)O(t,e[n].animatable.target)&&e.splice(n,1)}"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(ht.forEach(function(t){return t.pause()}),dt=ht.slice(0),ht=[]):dt.forEach(function(t){return t.play()})}),gt.version="3.0.1",gt.speed=1,gt.running=ht,gt.remove=function(t){for(var e=tt(t),n=ht.length;n--;){var i=ht[n],r=i.animations,a=i.children;pt(e,r);for(var s=a.length;s--;){var o=a[s],u=o.animations;pt(e,u),u.length||o.children.length||a.splice(s,1)}r.length||a.length||i.pause()}},gt.get=$,gt.set=st,gt.convertPx=R,gt.path=function(t,e){var n=w.str(t)?I(t)[0]:t,i=e||100;return function(t){return{property:t,el:n,svg:Q(n),totalLength:Z(n)*(i/100)}}},gt.setDashoffset=function(t){var e=Z(t);return t.setAttribute("stroke-dasharray",e),e},gt.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",i=e.easing?D(e.easing):null,r=e.grid,a=e.axis,s=e.from||0,o="first"===s,u="center"===s,c="last"===s,l=w.arr(t),h=l?parseFloat(t[0]):parseFloat(t),d=l?parseFloat(t[1]):0,f=N(l?t[1]:t)||0,g=e.start||0+(l?h:0),p=[],m=0;return function(t,e,v){if(o&&(s=0),u&&(s=(v-1)/2),c&&(s=v-1),!p.length){for(var b=0;b<v;b++){if(r){var y=u?(r[0]-1)/2:s%r[0],w=u?(r[1]-1)/2:Math.floor(s/r[0]),M=y-b%r[0],x=w-Math.floor(b/r[0]),T=Math.sqrt(M*M+x*x);"x"===a&&(T=-M),"y"===a&&(T=-x),p.push(T)}else p.push(Math.abs(s-b));m=Math.max.apply(Math,p)}i&&(p=p.map(function(t){return i(t/m)*m})),"reverse"===n&&(p=p.map(function(t){return a?t<0?-1*t:-t:Math.abs(m-t)}))}return g+(l?(d-h)/m:h)*(Math.round(100*p[e])/100)+f}},gt.timeline=function(t){void 0===t&&(t={});var e=gt(t);return e.duration=0,e.add=function(n,i){var r=ht.indexOf(e),a=e.children;function s(t){t.passThrough=!0}r>-1&&ht.splice(r,1);for(var o=0;o<a.length;o++)s(a[o]);var u=H(n,S(g,t));u.targets=u.targets||t.targets;var c=e.duration;u.autoplay=!1,u.direction=e.direction,u.timelineOffset=w.und(i)?c:z(i,c),s(e),e.seek(u.timelineOffset);var l=gt(u);s(l),a.push(l);var h=ut(a,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},gt.easing=D,gt.penner=_,gt.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */
var mt,vt,bt,yt,wt,Mt,xt,Tt=[{ms:1,big:10,loc:{hour:"2-digit",minute:"2-digit",second:"2-digit"},floor:function(t,e){var n=t.getMilliseconds();t.setMilliseconds(n-n%e)},incr:function(t,e){t.setMilliseconds(t.getMilliseconds()+e)}},{ms:1e3,big:10,loc:{hour:"2-digit",minute:"2-digit",second:"2-digit"},floor:function(t,e){var n=t.getSeconds();t.setSeconds(n-n%e,0)},incr:function(t,e){t.setSeconds(t.getSeconds()+e,0)}},{ms:6e4,big:10,loc:{hour:"2-digit",minute:"2-digit",second:"2-digit"},floor:function(t,e){var n=t.getMinutes();t.setMiMinutes(n-n%e,0,0)},incr:function(t,e){t.setMinutes(t.getMinutes()+e,0,0)}},{ms:36e5,big:10,loc:{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"},floor:function(t,e){var n=t.getHours();t.setHours(n-n%e,0,0,0)},incr:function(t,e){t.setHours(t.getHours()+e,0,0,0)}},{ms:864e5,big:7,loc:{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit"},floor:function(t,e){var n=t.getTime()/864e5;t.setTime(864e5*(n-n%e)),t.setHours(0,0,0,0)},incr:function(t,e){t.setDate(t.getDate()+e)}},{ms:6048e5,big:10,loc:{year:"numeric",month:"long",day:"numeric"},floor:function(t,e){var n=t.getTime();n-=3456e5,n/=6048e5,t.setTime(6048e5*(n-n%e)),t.setHours(0,0,0,0)},incr:function(t,e){t.setDate(t.getDate()+7*e)}},{ms:2629743750,big:12,loc:{year:"numeric",month:"long",day:"numeric"},floor:function(t,e){var n=t.getMonth();t.setMonth(n-n%e,1),t.setHours(0,0,0,0)},incr:function(t,e){t.setMonth(t.getMonth()+e,1)}},{ms:31556925e3,big:10,loc:{year:"numeric",month:"long",day:"numeric"},floor:function(t,e){var n=t.getFullYear();t.setFullYear(n-n%e,0,1),t.setHours(0,0,0,0)},incr:function(t,e){t.setFullYear(t.getFullYear()+e,0,1)}},{ms:31556925e4,big:10,loc:{year:"numeric",month:"long",day:"numeric"},floor:function(t,e){var n=t.getFullYear();t.setFullYear(n-n%(10*e),0,1),t.setHours(0,0,0,0)},incr:function(t,e){t.setFullYear(t.getFullYear()+10*e,0,1)}},{ms:31556925e5,big:10,loc:{year:"numeric",month:"numeric"},floor:function(t,e){var n=t.getFullYear();t.setFullYear(n-n%(100*e),0,1),t.setHours(0,0,0,0)},incr:function(t,e){t.setFullYear(t.getFullYear()+100*e,0,1)}},{ms:31556925e6,big:10,loc:{year:"numeric",month:"numeric"},floor:function(t,e){var n=t.getFullYear();t.setFullYear(n-n%(1e3*e),0,1),t.setHours(0,0,0,0)},incr:function(t,e){t.setFullYear(t.getFullYear()+1e3*e,0,1)}}],Lt=0,Et=500,_t=.1,Dt=1500,It=.6;function kt(t){for(var e=0;e<t.changedTouches.length;e++)if(t.changedTouches[e].identifier===yt)return t.changedTouches[e];return null}function Pt(t){t.preventDefault();var e=kt(t);if(e){var n=e.clientX;mt.move(n-wt),Mt*=1-It,Mt+=It*((n-wt)/(t.timeStamp-xt)),wt=n,xt=t.timeStamp}}function Ct(t){t.preventDefault(),yt=void 0}function Ot(t){t.preventDefault();var e=kt(t);yt=void 0,e&&(Math.abs(Mt)>_t?(wt=0,Lt=gt({targets:{x:0},x:Mt*Et,duration:Dt,easing:"easeOutExpo",update:function(t){var e=t.animations[0].currentValue;mt.move(e-wt),wt=e},complete:function(t){Lt=0,mt.endDrag()}})):Math.abs(e.clientX-vt)<4&&Math.abs(e.clientY-bt)<4?mt.click(e.clientX):mt.endDrag())}function Ft(t){t.preventDefault(),mt.move(t.movementX)}function St(t){Math.abs(t.clientX-vt)<4&&Math.abs(t.clientY-bt)<4?mt.click(t.clientX):mt.endDrag(),document.removeEventListener("mousemove",Ft,!1),document.removeEventListener("mouseup",St,!1)}function Ht(t){vt=t.clientX,bt=t.clientY,document.addEventListener("mousemove",Ft,!1),document.addEventListener("mouseup",St,!1)}function Yt(t,e,n){var s=this;this.widget=t,this.index=n,Object.assign(this,{multiple:1},e),this.helpers=Tt[this.scale],this.before=i("d-range","d-before"),this.after=i("d-range","d-after"),this.leftIndicator=i("d-indicator","d-left","d-hidden"),this.leftIndicator.addEventListener("mousedown",function(t){s.stepLeft(t.shiftKey),t.preventDefault()}),this.rightIndicator=i("d-indicator","d-right","d-hidden"),this.rightIndicator.addEventListener("mousedown",function(t){s.stepRight(t.shiftKey),t.preventDefault()}),this.content=new d(this);var o=i("d-band","d-band-"+n,"d-scale-"+this.scale);o.setAttribute("tabindex","0"),o.style.height=this.size,o.append(this.before,this.after,this.content.element,this.leftIndicator,this.rightIndicator),o.addEventListener("touchstart",function(t){s.focus(),function(t){t.preventDefault(),void 0===yt&&(Lt&&(Lt.pause(),Lt=0),yt=t.changedTouches[0].identifier,wt=vt=t.changedTouches[0].clientX,bt=t.changedTouches[0].clientY,xt=t.timeStamp,Mt=0)}(t)},!1),o.addEventListener("touchmove",Pt,!1),o.addEventListener("touchend",Ot,!1),o.addEventListener("touchcancel",Ct,!1),o.addEventListener("mousedown",Ht,!1),o.addEventListener("focus",function(t){r(s.leftIndicator,s.rightIndicator),s.widget.focus=s.index,s.focus()}),o.addEventListener("blur",function(t){a(s.leftIndicator,s.rightIndicator)}),o.addEventListener("keydown",function(t){var e=s.widget,n=!0;switch(t.key){case"Tab":var i,r,a=e.events;(r=t.shiftKey?(i=a.binInsertPosOf({start:e.getMs()-1}))>0?a[i-1].start:e._begin:(i=a.binInsertPosOf({start:e.getMs()+1}))<a.length?a[i].start:e._end)&&s.animateTo(r.getTime());break;case"PageUp":s.stepRight(!0);break;case"PageDown":s.stepLeft(!0);break;case"End":e._end&&s.animateTo(e._end.getTime());break;case"Home":e._begin&&s.animateTo(e._begin.getTime());break;case"ArrowLeft":s.stepLeft(t.shiftKey);break;case"ArrowUp":e.cycleFocus(-1);break;case"ArrowRight":s.stepRight(t.shiftKey);break;case"ArrowDown":e.cycleFocus(1);break;default:n=!1}n&&(t.preventDefault(),t.stopPropagation())}),this.element=o}Yt.prototype={setWidth:function(t){this.content.setWidth(t)},place:function(){this.content.place()},setFocus:function(){this.element.focus()},setRange:function(t){var e=this.widget._cursor;t?(s(this.before,"width",this.calcPixels(e-t.begin)),s(this.after,"width",this.calcPixels(t.end-e))):(this.before.style.width=null,this.after.style.width=null)},setRangeFrom:function(t){this.setRange(t.content.visible)},calcPixels:function(t){var e=t*this.interval/this.helpers.ms;return+(Math.round(e+"e+3")+"e-3")},calcMs:function(t){return t*this.helpers.ms/this.interval},stepLeft:function(t){var e=this.widget;this.animateTo(e.getMs()-(t?this.helpers.big:1)*this.helpers.ms)},stepRight:function(t){var e=this.widget;this.animateTo(e.getMs()+(t?this.helpers.big:1)*this.helpers.ms)},floorDate:function(t){this.helpers.floor(t,this.multiple)},ceilDate:function(t){this.helpers.floor(t,this.multiple),this.helpers.incr(t,this.multiple)},incrDate:function(t){this.helpers.incr(t,this.multiple)},animateTo:function(t){var e=this.calcPixels(Math.abs(this.widget.getMs()-t));this.widget.animateTo(t,100*Math.log(e))},focus:function(){mt=this},move:function(t){this.widget.place(this.widget.getMs()-this.calcMs(t))},endDrag:function(){this.widget.triggerChange()},click:function(t){var e=this.element.getBoundingClientRect();this.animateTo(this.content.visible.begin.getTime()+this.calcMs(t-e.x))}};
/*!
   * Dateline 2.0.0
   * (c) 2019 Sjaak Priester, Amsterdam
   * MIT License
   * https://github.com/sjaakp/dateline
   * https://sjaakpriester.nl
   */
var Nt={size:"320px",bands:[{size:"100%",scale:6,interval:60}],cursor:new Date,rememberCursor:!0,begin:null,end:null,events:[],redirect:!1,url:!1,loading:"Loading&hellip;",scrollFactor:5,locale:"default"};function At(t,e){var r=this;if(this.id=t,this.settings=Object.assign({},Nt,e),["begin","end","cursor"].forEach(function(t){r.settings[t]&&(r["_"+t]=n(r.settings[t]))}),this.settings.rememberCursor){var a=parseInt(window.sessionStorage.getItem("dateline_"+this.id),10);a&&this._cursor.setTime(a)}var s=document.getElementById(t);s.classList.add("d-dateline"),s.setAttribute("tabindex","0"),s.style.height=this.settings.size;var u=window.getComputedStyle(s);this.lineHeight=parseInt(u.getPropertyValue("line-height"),10),this.inner=i("d-inner"),this.bubble=new o(this).setInfo("Bubble"),s.append(this.inner,this.bubble.element),this.element=s,this.focus=0,this.prepareBands(),this.prepareEvents(),this.setWidth(),this._hilight=null,this._intval=null,this._busy=!1,Object.defineProperty(this,"cursor",{get:function(){return new Date(this._cursor)},set:function(t){this.animateTo(n(t).getTime())},enumerable:!0,configurable:!0})}return At.prototype={prepareBands:function(){var t=this.settings.bands;t.length||(this.inner.innerHTML="No bands defined."),this.bands=t.map(function(t,e,n){var i=new Yt(this,t,e);return this.inner.append(i.element),i},this)},prepareEvents:function(){var t=this;this.events=new e(function(t,e){return t.start>e.start}),this.settings.events.forEach(function(e){["start","stop","post_start","pre_stop"].forEach(function(t){e[t]&&(e[t]=n(e[t]))}),e.elements=[],t.events.insert(e)})},getWidth:function(){return this.element.clientWidth},setWidth:function(){var t=this.element.clientWidth*this.settings.scrollFactor;this.bands.forEach(function(e){e.setWidth(t)}),this.sync()},place:function(t){var e;this.bubble.hide(),this._begin&&t<(e=this._begin.getTime())&&(t=e),this._end&&t>(e=this._end.getTime())&&(t=e),this._cursor.setTime(t),this.bands.forEach(function(t){t.content.place()}),this.sync()},animateTo:function(t,e){var n=this;if(!this._busy){this._busy=!0;var i,r={cursor:this.getMs()};this._begin&&t<(i=this._begin.getTime())&&(t=i),this._end&&t>(i=this._end.getTime())&&(t=i),gt({targets:r,cursor:t,duration:e||800,easing:"easeInOutCubic",update:function(t){n.place(r.cursor)},complete:function(t){n._busy=!1,n.triggerChange()}})}},getMs:function(){return this._cursor.getTime()},sync:function(){var t;this.bands.forEach(function(e){t&&e.setRangeFrom(t),t=e})},cycleFocus:function(t){var e=this.bands.length,n=this.focus;n+=e+t,n%=e,this.bands[n].setFocus()},hilight:function(t){this.clearHilight(),this._hilight=t,t.classList.add("d-hilight"),this._intval=window.setInterval(function(t){t._hilight.classList.toggle("d-hilight")},500,this)},clearHilight:function(){this._intval&&(window.clearInterval(this._intval),this._intval=null),this._hilight&&(this._hilight.classList.remove("d-hilight"),this._hilight=null)},triggerChange:function(){this.element.dispatchEvent(new CustomEvent("datelinechange",{bubbles:!0,detail:new Date(this._cursor)})),window.sessionStorage.setItem("dateline_"+this.id,this._cursor.getTime())},find:function(t){var e=this.events.find(function(e){return e.id==t});return e&&this.animateTo(e.start.getTime()),e}},t.CENTURY=9,t.DAY=4,t.DECADE=8,t.HOUR=3,t.MILLENNIUM=10,t.MILLISECOND=0,t.MINUTE=2,t.MONTH=6,t.SECOND=1,t.WEEK=5,t.Widget=At,t.YEAR=7,t.version="2.0.0",t}({});function dateline(t,e){return new Dateline.Widget(t,e)}
