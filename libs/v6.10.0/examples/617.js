"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[617],{22243:function(e,t,r){function n(e,t){var r=e.length-t,n=0;do{for(var o=t;o>0;o--)e[n+t]+=e[n],n++;r-=t}while(r>0)}function o(e,t,r){for(var n=0,o=e.length,i=o/r;o>t;){for(var u=t;u>0;--u)e[n+t]+=e[n],++n;o-=t}for(var a=e.slice(),c=0;c<i;++c)for(var f=0;f<r;++f)e[r*c+f]=a[(r-f-1)*i+c]}function i(e,t,r,i,u,a){if(!t||1===t)return e;for(var c=0;c<u.length;++c){if(u[c]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(u[c]!==u[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=u[0]/8,l=2===a?1:u.length,s=0;s<i&&!(s*l*r*f>=e.byteLength);++s){var p=void 0;if(2===t){switch(u[0]){case 8:p=new Uint8Array(e,s*l*r*f,l*r*f);break;case 16:p=new Uint16Array(e,s*l*r*f,l*r*f/2);break;case 32:p=new Uint32Array(e,s*l*r*f,l*r*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(u[0]," bits per sample."))}n(p,l)}else 3===t&&o(p=new Uint8Array(e,s*l*r*f,l*r*f),l,f)}return e}function u(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,o)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,{Z:function(){return c}});var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,o,c;return t=e,(r=[{key:"decode",value:(o=regeneratorRuntime.mark((function e(t,r){var n,o,u,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.decodeBlock(r);case 2:if(n=e.sent,1===(o=t.Predictor||1)){e.next=9;break}return u=!t.StripOffsets,a=u?t.TileWidth:t.ImageWidth,c=u?t.TileLength:t.RowsPerStrip||t.ImageLength,e.abrupt("return",i(n,o,a,c,t.BitsPerSample,t.PlanarConfiguration));case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(r,n){var i=o.apply(e,t);function a(e){u(i,r,n,a,c,"next",e)}function c(e){u(i,r,n,a,c,"throw",e)}a(void 0)}))},function(e,t){return c.apply(this,arguments)})}])&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},50617:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function c(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t),r.d(t,{default:function(){return l}});var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&u(e,t)}(f,e);var t,r,n,c=a(f);function f(){return o(this,f),c.apply(this,arguments)}return t=f,(r=[{key:"decodeBlock",value:function(e){for(var t=new DataView(e),r=[],n=0;n<e.byteLength;++n){var o=t.getInt8(n);if(o<0){var i=t.getUint8(n+1);o=-o;for(var u=0;u<=o;++u)r.push(i);n+=1}else{for(var a=0;a<=o;++a)r.push(t.getUint8(n+a+1));n+=o+1}}return new Uint8Array(r).buffer}}])&&i(t.prototype,r),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r(22243).Z)}}]);
//# sourceMappingURL=617.js.map