(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(23),n=a.n(c),r=a(9),i=a(5);a(0),a(28);function l(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var s=a(21),o=a.n(s),j=a(2),d=a(4),u=function(e){var t=e.totalItems,a=e.itemPerPage,c=e.onPageChange,n=e.currentPage,i=e.currentItems,s=Object(j.j)(),u=Math.ceil(t.length/+a),h=l(1,u);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"pagination",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:o()("page-item",{disabled:n<=0}),children:Object(d.jsx)(r.b,{"data-cy":"prevLink",className:"page-link",to:{pathname:"/prev"},"aria-disabled":n<=0,onClick:function(){return c(n-1)},children:"\xab"})}),h.map((function(e){return Object(d.jsx)("li",{className:o()("page-item",{active:n===e-1}),children:Object(d.jsx)(r.b,{"data-cy":"pageLink",className:"page-link",to:{pathname:"/".concat(e+1),search:s.search},onClick:function(){return c(e-1)},children:e})},e)})),Object(d.jsx)("li",{className:o()("page-item",{disabled:n>=u-1}),children:Object(d.jsx)(r.b,{"data-cy":"nextLink",className:"page-link",to:"next","aria-disabled":n>=u-1,onClick:function(){return c(n+1)},children:"\xbb"})})]})}),Object(d.jsx)("ul",{children:i.map((function(e){return Object(d.jsx)("li",{"data-cy":"item",children:e},e)}))})]})},h=l(1,42).map((function(e){return"Item ".concat(e)})),m=function(){var e=Object(r.c)(),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Number(a.get("page")),l=Number(a.get("perPage")||5),s=function(e,t){return Object.entries(t).forEach((function(t){var a=Object(i.a)(t,2),c=a[0],n=a[1];null===n?e.delete(c):Array.isArray(n)?(e.delete(c),n.forEach((function(t){e.append(c,t)}))):e.set(c,n)})),e.toString()},o=l*n,j=Math.min((n+1)*l,h.length),m=h.slice(o,j);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(n+1," (items ").concat(o+1," - ").concat(j," of ").concat(h.length,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:l,onChange:function(e){c(s(a,{perPage:e.target.value||null,page:"0"}))},children:[Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"10",children:"10"}),Object(d.jsx)("option",{value:"20",children:"20"})]})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(u,{currentItems:m,totalItems:h,currentPage:n,onPageChange:function(e){c(s(a,{page:e.toString()||null}))},itemPerPage:l})]})};n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b6e2cd0a.chunk.js.map