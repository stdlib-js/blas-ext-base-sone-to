"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(h,u){
function T(e,r,i,y){var t,a;if(e<=0)return r;for(t=y,a=1;a<=e;a++)r[t]=a,t+=i;return r}u.exports=T
});var q=s(function(k,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=n();function x(e,r,i){return m(e,r,i,j(e,i))}v.exports=x
});var d=s(function(w,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),R=n();l(f,"ndarray",R);c.exports=f
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=d(),o,p=E(_(__dirname,"./native.js"));O(p)?o=b:o=p;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
