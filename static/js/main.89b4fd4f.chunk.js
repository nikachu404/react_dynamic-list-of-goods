(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{24:function(t,n,e){},30:function(t,n,e){"use strict";e.r(n);var o=e(13),c=e.n(o),r=e(14),a=e(3),i=e(12),s=e.n(i),u=e(0),d=(e(24),e(42)),l=e(1),f=Object(u.memo)((function(t){var n=t.goods;return Object(l.jsx)("ul",{children:n.map((function(t){return Object(l.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function j(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(u.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],c=function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,n;case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"App_title",children:"Dynamic list of Goods"}),Object(l.jsx)(d.a,{sx:{m:.5},variant:"contained",color:"success",type:"button","data-cy":"all-button",onClick:function(){return c(j())},children:"Load all goods"}),Object(l.jsx)(d.a,{sx:{m:.5},variant:"contained",type:"button","data-cy":"first-five-button",onClick:function(){return c(j().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})))},children:"Load 5 first goods"}),Object(l.jsx)(d.a,{sx:{m:.5},variant:"contained",color:"error",type:"button","data-cy":"red-button",onClick:function(){return c(j().then((function(t){return t.filter((function(t){return"red"===t.color}))})))},children:"Load red goods"}),Object(l.jsx)(f,{goods:e})]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.89b4fd4f.chunk.js.map