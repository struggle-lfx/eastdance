"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var n="undefined"!==typeof window?window:void 0,a=n.document,l={};function e(e,t){var o={width:300,height:"auto",header:{enabled:!0,content:"Panel title"},footer:{enabled:!0,content:"Panel footer"},body:{enabled:!0,content:"Panel content"},closeBtn:!0,backDrop:!1,floatHeight:10,floatHeightInvolve:!1};l[e]=new s(e);var i=o;return t&&(i=function e(t,o){if(null!=o){for(var i in o)if(o.hasOwnProperty(i)){if(Array.isArray(o[i]))t[i]=[];else if(null===o[i]){t[i]=null;continue}t[i]="object"===_typeof(o[i])?e(t[i],o[i]):o[i]}return t}}(o,t)),l[e].set(i),l[e].reposition(),l[e]}function s(e){var t=a.body;if(!e)throw"id required!";if("string"!=typeof e)throw"invalid id!";Object.defineProperty(this,"id",{configurable:!0,enumerable:!0,value:e,writable:!1}),this.floatHeight=0,this.floatHeightInvolve=!1,this.direction="up",this.edgeDetection=!0,Object.defineProperty(this,"_backDropNode",{configurable:!0,enumerable:!1,value:null,writable:!0});var o=a.getElementById(e);o&&o.parentNode.removeChild(o);var i=a.createElement("div");i.setAttribute("class","floatPanel invisible"),i.id=e,t.appendChild(i),Object.defineProperty(this,"node",{configurable:!0,enumerable:!0,value:a.getElementById(e),writable:!1});this.node.innerHTML='<div class="panel panel-blue"><div class="panel-header"><h3 class="panel-title"></h3></div><div class="panel-body"></div><div class="panel-footer"></div></div>',Object.defineProperties(this,{width:{configurable:!0,enumerable:!0,get:function(){return r(this.node,"width")},set:function(e){this.node.style.width="number"==typeof e?e+"px":e}},height:{configurable:!0,enumerable:!0,get:function(){return r(this.node,"height")},set:function(e){this.node.style.height="number"==typeof e?e+"px":e}},left:{configurable:!0,enumerable:!0,get:function(){return Number(r(this.node,"left").replace("px",""))},set:function(e){this.node.style.left="number"==typeof e?e+"px":e}},top:{configurable:!0,enumerable:!0,get:function(){return Number(r(this.node,"top").replace("px",""))},set:function(e){this.node.style.top="number"==typeof e?e+"px":e}},zIndex:{configurable:!0,enumerable:!0,get:function(){return Number(r(this.node,"z-index"))},set:function(e){this.node.style["z-index"]=e,this._backDropNode&&(this._backDropNode.style["z-index"]=Number(e)-1)}}})}function r(e,t){var o=null;switch(t){case"width":i(e,t,function(){o=e.offsetWidth});break;case"height":i(e,t,function(){o=e.offsetHeight});break;default:o=i(e,t)}return o}function i(e,t,o){var i=null;if(e.style.visibility="hidden",e.style.position="absolute",e.style.display="block",o?o():i=n.getComputedStyle(e)[t],e.style.visibility="",e.style.position="",e.style.display="",i)return i}function o(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function d(e,t){o(e,t)||(e.className+=" "+t)}function h(e,t){o(e,t)&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," "))}function c(){var e=void 0!==n.pageXOffset,t="CSS1Compat"===(a.compatMode||""),o=e?n.pageXOffset:t?a.documentElement.scrollLeft:a.body.scrollLeft;return{scrollTop:e?n.pageYOffset:t?a.documentElement.scrollTop:a.body.scrollTop,scrollLeft:o}}s.prototype={constructor:s,show:function(e,t){for(var o=arguments,i=(a.querySelector("html"),0);i<o.length;i++)"object"==_typeof(o[i])&&o[i].pageX&&o[i].pageY&&this.reposition(o[i]),"function"==typeof o[i]&&o[i].call(this);return this._backDropNode&&(this._backDropNode.style.display="block",a.querySelector("html").style.overflow="hidden"),d(this.node,"active"),this.node.style.display="block",h(this.node,"invisible"),this},hide:function(e){if(e&&e.pageX&&e.pageY){var t=this.width+10,o=this.height+1,i=Number(e.pageX),n=Number(e.pageY),l=this.top;if(1==this.floatHeightInvolve){o=this.height+1+this.floatHeight;this.direction&&"down"===this.direction.toLowerCase()&&(l-=this.floatHeight)}if(i>=this.left&&i<=this.left+t&&l<=n&&n<=l+o)return 0;this._backDropNode&&(this._backDropNode.style.display="none",a.querySelector("html").style.overflow=""),d(this.node,"invisible"),h(this.node,"active"),this.node.style.removeProperty("max-height"),this.node.style.removeProperty("max-width"),this.node.style.display="none"}else this._backDropNode&&(this._backDropNode.style.display="none",a.querySelector("html").style.overflow=""),d(this.node,"invisible"),h(this.node,"active"),this.node.style.removeProperty("max-height"),this.node.style.removeProperty("max-width"),this.node.style.display="none";return this},set:function(e){if(e){if(e.width&&(this.width=e.width),e.height&&(this.height=e.height),e.header&&(!0===e.header.enabled?this.node.querySelector("#"+this.id+" > .panel >.panel-header").style.display="block":!1===e.header.enabled&&(this.node.querySelector("#"+this.id+" > .panel >.panel-header").style.display="none"),e.header.content&&(this.node.querySelector("#"+this.id+" > .panel >.panel-header").innerHTML=e.header.content)),e.footer&&(!0===e.footer.enabled?this.node.querySelector("#"+this.id+" > .panel >.panel-footer").style.display="block":!1===e.footer.enabled&&(this.node.querySelector("#"+this.id+" > .panel >.panel-footer").style.display="none"),e.footer.content&&(this.node.querySelector("#"+this.id+" > .panel >.panel-footer").innerHTML=e.footer.content)),e.body&&(!0===e.body.enabled?this.node.querySelector("#"+this.id+" > .panel >.panel-body").style.display="block":!1===e.body.enabled&&(this.node.querySelector("#"+this.id+" > .panel >.panel-body").style.display="none"),e.body.content&&(this.node.querySelector("#"+this.id+" > .panel >.panel-body").innerHTML=e.body.content)),!0===e.closeBtn){var t="";(t=this.node.querySelector("#"+this.id+" >button.close-button"))&&t.parentNode.removeChild(t);this.node.insertAdjacentHTML("afterbegin",'<button aria-label="关闭" type="button" class="Button close-button Button-plain"><svg class="closeIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" ><path d="M13.486 12l5.208-5.207a1.048 1.048 0 0 0-.006-1.483 1.046 1.046 0 0 0-1.482-.005L12 10.514 6.793 5.305a1.048 1.048 0 0 0-1.483.005 1.046 1.046 0 0 0-.005 1.483L10.514 12l-5.208 5.207a1.048 1.048 0 0 0 .006 1.483 1.046 1.046 0 0 0 1.482.005L12 13.486l5.207 5.208a1.048 1.048 0 0 0 1.483-.006 1.046 1.046 0 0 0 .005-1.482L13.486 12z" fill-rule="evenodd"></path></svg ></button >'),this.node.querySelector("#"+this.id+" >button.close-button").addEventListener("click",(n=this,function(e){n.hide()}))}else if(!1===e.closeBtn){t="";(t=this.node.querySelector("#"+this.id+" >button.close-button"))&&t.parentNode.removeChild(t)}if(!0===e.backDrop){var o=a.querySelector("#"+this.id+"-backDrop");o&&o.parentNode.removeChild(o);var i='<div class="floatPanel-backdrop" id="'+this.id+'-backDrop" style="z-index:'+(this.zIndex-1)+'; display:none;"></div>';this.node.insertAdjacentHTML("beforebegin",i),this._backDropNode=a.getElementById(this.id+"-backDrop")}else!1===e.backDrop&&this._backDropNode&&(this._backDropNode.parentNode.removeChild(this._backDropNode),this._backDropNode=null);e.direction&&("down"===e.direction.toLowerCase()?this.direction="down":this.direction="up"),e.edgeDetection&&(0==e.edgeDetection?this.edgeDetection=!1:this.edgeDetection=!0),e.floatHeight&&(this.floatHeight=isNaN(Number(e.floatHeight))?this.floatHeight:Number(e.floatHeight)),e.floatHeightInvolve&&(this.floatHeightInvolve=!!e.floatHeightInvolve)}var n;return this},reposition:function(e){var t=a.documentElement.clientWidth,o=a.documentElement.clientHeight,i=c().scrollTop,n=c().scrollLeft,l=this.width,s=this.height+1;e&&e.pageX&&e.pageY||((e={}).pageX=t/2+n,this.direction&&"down"===this.direction.toLowerCase()?e.pageY=o/2+i-s/2-this.floatHeight:e.pageY=o/2+i+s/2+this.floatHeight);var r=Number(e.pageX);r-=l/2;var d=Number(e.pageY);return this.direction&&"down"===this.direction.toLowerCase()?d+=this.floatHeight:d=d-s-this.floatHeight,0==this.edgeDetection?(this.node.style.left=r+"px",this.node.style.top=d+"px"):(t<l?(this.node.style.left=5+n+"px",this.node.style["max-width"]=t-10+"px",this.node.style["overflow-x"]="auto"):this.node.style.left=r+l<t+n?r<n?5+n+"px":r+"px":r-(r+l-t-n)+"px",this.height>o?(this.node.style.top=5+i+"px",this.node.style["max-height"]=o-10+"px",this.node.style["overflow-y"]="auto"):this.node.style.top=d<i?5+i+"px":s+d-i<o?d+"px":d-(d-i+s-o)+"px"),this},destroy:function(){for(var e in this._backDropNode&&(this._backDropNode.parentNode.removeChild(this._backDropNode),delete this._backDropNode),this.node.parentNode.removeChild(this.node),this)delete this[e];return null},mouseleave:function(e){return this.node.addEventListener("mouseleave",e),this},mouseenter:function(e){return this.node.addEventListener("mouseenter",e),this}},"undefined"!=typeof module&&module.exports?module.exports=e:n.FloatPanel=e}();