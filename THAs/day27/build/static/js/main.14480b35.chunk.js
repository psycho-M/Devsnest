(this.webpackJsonpday27=this.webpackJsonpday27||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),i=n(5),r=n.n(i),a=(n(18),n(19),n(12)),s=n(2),d=n(1);var l=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),n=e[0],o=e[1],i=Object(s.b)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("input",{type:"text",value:n,onChange:function(t){o(t.target.value)},placeholder:"Add Todo",style:{padding:"10px",margin:"10px"}}),Object(d.jsx)("button",{onClick:function(){i({type:"ADD_TODO",payload:{title:n,done:!1}}),o(""),console.log(n)},style:{padding:"10px"},children:"Add"}),Object(d.jsx)("button",{onClick:function(){i({type:"CLR_TODO"})},style:{padding:"10px",margin:"10px"},children:"Clear"}),Object(d.jsx)("section",{children:Object(d.jsx)("button",{onClick:function(){i((function(t){fetch("https://jsonplaceholder.typicode.com/todos/").then((function(t){return t.json()})).then((function(e){return t({type:"LOAD_TODO",payload:e})}))}))},children:"Load Todo"})})]})};var j=function(){var t=Object(s.c)((function(t){return t.todos})),e=Object(s.b)();return Object(d.jsx)("section",{style:{overflowY:"auto"},children:t.map((function(t,n){return Object(d.jsxs)("section",{children:[Object(d.jsx)("h5",{style:{display:"inline-block",padding:"10px",margin:"10px"},children:t.title}),Object(d.jsx)("button",{onClick:function(t){e({type:"DEL_TODO",payload:n})},children:"Delete"})]},n)}))})};var O=function(){return Object(d.jsxs)("section",{className:"todo-container",style:{textAlign:"center"},children:[Object(d.jsx)("h3",{children:"Todo-List"}),Object(d.jsx)(l,{}),Object(d.jsx)(j,{})]})};var u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(O,{},0)})},p=n(13);var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"ADD_TODO"===e.type?[].concat(Object(p.a)(t),[e.payload]):"DEL_TODO"===e.type?t.filter((function(t,n){return n!==e.payload})):"CLR_TODO"===e.type?[]:"LOAD_TODO"===e.type?e.payload:t},h=n(4),x=Object(h.b)({todos:b}),y=n(10),f=n.n(y),D=n(11),v=Object(h.c)(x,Object(h.a)(D.a,f.a));r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(s.a,{store:v,children:Object(d.jsx)(u,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.14480b35.chunk.js.map