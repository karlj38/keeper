(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),j=n(7),o=n.n(j),i=n(34),s=n(20),l=n(30),b=n.n(l);function u(){return Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(b.a,{fontSize:"large"}),"Keeper"]})})}var d=n(24),O=n(29),x=n(67),h=n(66),f=n(32),p=n.n(f);function v(e){var t=Object(r.useState)({}),n=Object(s.a)(t,2),a=n[0],j=n[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),l=i[0],b=i[1];function u(e){var t=e.target,n=t.name,c=t.value;j(Object(O.a)(Object(O.a)({},a),{},Object(d.a)({},n,c)))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.content&&(e.addNote(a),j({title:"",content:""}))},className:"create-note",children:[l&&Object(c.jsx)("input",{id:"title",name:"title",placeholder:"Title",onChange:u,value:a.title}),Object(c.jsx)("textarea",{name:"content",placeholder:"Take a note...",rows:l?"3":"1",onChange:u,onFocus:function(){b(!0)},value:a.content}),l&&Object(c.jsx)(x.a,{in:!0,children:Object(c.jsx)(h.a,{type:"submit",children:Object(c.jsx)(p.a,{})})})]})})}function m(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["\xa9 Karl Jones ",e]})})}var N=n(33),g=n.n(N);var k=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{onClick:function(){e.deleteNote(e.index)},children:Object(c.jsx)(g.a,{})})]})};function S(e){return e.notes.map((function(t,n){return Object(c.jsx)(k,{title:t.title,content:t.content,index:n,deleteNote:e.deleteNote},n)}))}var w=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(v,{addNote:function(e){a([].concat(Object(i.a)(n),[e]))}}),Object(c.jsx)(S,{notes:n,deleteNote:function(e){a(n.filter((function(t,n){return n!==e})))}}),Object(c.jsx)(m,{})]})};n(48);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d3e8f0c4.chunk.js.map