"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1008],{26129:function(e,t,n){var o=n(41376),u=n(79847),c=n(42010),r=n(54354),a=n(86923),i=n(12810);function f(e,t){document.getElementById(e).value=t.toFixed(2)}function l(e){return e-360*Math.floor((e+180)/360)}new o.Z({layers:[new c.Z({source:new u.Z})],target:"map",view:new r.ZP({center:[0,0],zoom:2})}).on("moveend",(function(e){var t=e.map,n=t.getView().calculateExtent(t.getSize()),o=(0,i.bU)((0,a.hC)(n)),u=(0,i.bU)((0,a.Xv)(n));f("left",l(o[0])),f("bottom",o[1]),f("right",l(u[0])),f("top",u[1])}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(26129)}]);
//# sourceMappingURL=moveend.js.map