var vidbg=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";var o="#?[".concat("a-f\\d","]{3}[").concat("a-f\\d","]?"),n="#?[".concat("a-f\\d","]{6}([").concat("a-f\\d","]{2})?"),i=new RegExp("[^#".concat("a-f\\d","]"),"gi"),a=new RegExp("^".concat(o,"$|^").concat(n,"$"),"i");e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e||i.test(e)||!a.test(e))throw new TypeError("Expected a valid hex string");var r=1;8===(e=e.replace(/^#/,"")).length&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(r=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16),n=o>>16,l=o>>8&255,c=255&o;return"array"===t.format?[n,l,c,r]:{red:n,green:l,blue:c,alpha:r}}},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}
/*!
 * vidbg.js v2.0 (https://github.com/blakewilson/vidbg)
 * vidbg.js By Blake Wilson
 * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
 */var s=function(){function e(t,r,o){var i=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"createContainer",(function(){i.containerEl=document.createElement("div"),i.containerEl.className="vidbg-container",i.createPoster(),i.el.appendChild(i.containerEl)})),c(this,"createOverlay",(function(){if(i.overlayEl=document.createElement("div"),i.overlayEl.className="vidbg-overlay",i.options.overlay){var e=n()(i.options.overlayColor,{format:"array"});i.overlayEl.style.backgroundColor="rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", ").concat(i.options.overlayAlpha,")")}i.containerEl.appendChild(i.overlayEl)})),c(this,"createPoster",(function(){i.options.poster&&(i.containerEl.style.backgroundImage="url(".concat(i.options.poster,")"))})),c(this,"createVideo",(function(){for(var e in i.videoEl=document.createElement("video"),i.videoEl.addEventListener("playing",i.onPlayEvent),i.attributes)i.videoEl[e]=i.attributes[e];if(i.options.mp4){var t=document.createElement("source");t.src=i.options.mp4,t.type="video/mp4",i.videoEl.appendChild(t)}if(i.options.webm){var r=document.createElement("source");r.src=i.options.webm,r.type="video/webm",i.videoEl.appendChild(r)}i.containerEl.appendChild(i.videoEl);var o=i.videoEl.play();void 0!==o&&o.catch((function(e){console.error(e),console.error("Autoplay is not supported"),i.removeVideo()}))})),c(this,"onPlayEvent",(function(e){i.resize(),i.videoEl.style.opacity=1})),c(this,"removeVideo",(function(){i.videoEl.remove()})),c(this,"resize",(function(){var e=i.containerEl.offsetWidth,t=i.containerEl.offsetHeight;e/i.videoEl.videoWidth>t/i.videoEl.videoHeight?(i.videoEl.style.width="".concat(e,"px"),i.videoEl.style.height="auto"):(i.videoEl.style.width="auto",i.videoEl.style.height="".concat(t,"px"))})),!t)return console.error("Please provide a selector"),!1;this.el=document.querySelector(t);this.options=a({},{mp4:null,webm:null,poster:null,overlay:!1,overlayColor:"#000",overlayAlpha:.3},{},r);if(this.attributes=a({},{controls:!1,loop:!0,muted:!0,playsInline:!0},{},o),!this.options.mp4&&!this.options.webm)return console.error("Please provide an mp4, webm, or both."),!1;this.init()}var t,r,o;return t=e,(r=[{key:"init",value:function(){this.el.style.position="relative",this.el.style.zIndex=1,this.createContainer(),this.createVideo(),this.createOverlay(),window.addEventListener("resize",this.resize)}}])&&l(t.prototype,r),o&&l(t,o),e}();t.default=s}]).default;