var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o="Expected a function",r=0/0,a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if("symbol"==typeof(n=t)||n&&"object"==typeof n&&"[object Symbol]"==m.call(n))return r;if(b(t)){var n,i="function"==typeof t.valueOf?t.valueOf():t;t=b(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):l.test(t)?r:+t}i=function(t,n,i){var r=!0,a=!0;if("function"!=typeof t)throw TypeError(o);return b(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),function(t,n,i){var r,a,l,f,u,c,s=0,d=!1,v=!1,m=!0;if("function"!=typeof t)throw TypeError(o);function j(n){var i=r,o=a;return r=a=void 0,s=n,f=t.apply(o,i)}function T(t){var i=t-c,o=t-s;return void 0===c||i>=n||i<0||v&&o>=l}function O(){var t,i,o,r=y();if(T(r))return S(r);u=setTimeout(O,(t=r-c,i=r-s,o=n-t,v?p(o,l-i):o))}function S(t){return(u=void 0,m&&r)?j(t):(r=a=void 0,f)}function w(){var t,i=y(),o=T(i);if(r=arguments,a=this,c=i,o){if(void 0===u)return s=t=c,u=setTimeout(O,n),d?j(t):f;if(v)return u=setTimeout(O,n),j(c)}return void 0===u&&(u=setTimeout(O,n)),f}return n=h(n)||0,b(i)&&(d=!!i.leading,l=(v="maxWait"in i)?g(h(i.maxWait)||0,n):l,m="trailing"in i?!!i.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=c=a=u=void 0},w.flush=function(){return void 0===u?f:S(y())},w}(t,n,{leading:r,maxWait:n,trailing:a})};const j=document.querySelector(".feedback-form"),T="feedback-form-state";j.addEventListener("input",((t=i)&&t.__esModule?t.default:t)(function(t){O={email:S.value,message:w.value},localStorage.setItem(T,JSON.stringify(O))},500)),j.addEventListener("submit",function(t){if(e.preventDefault(),console.log({email:S.value,message:w.value}),""===S.value||""===w.value)return alert("Please fill in all the fields!");localStorage.removeItem(T),e.currentTarget.reset(),O={}});let O=JSON.parse(localStorage.getItem(T))||{};const{email:S,message:w}=j.elements;O&&(S.value=O.email||"",w.value=O.message||"");
//# sourceMappingURL=03-feedback.91fd2527.js.map
