(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(15),r=n.n(c),o=n(13),m=n(11),i=(n(40),n(9)),u=n(3),s=n(10),E=n.n(s);function d(e){var t=e.post,n="/".concat(t.id);return l.a.createElement("div",null,l.a.createElement(u.c,null,l.a.createElement(u.c.Image,{size:"4by3"},l.a.createElement(u.i.Container,{size:"4by3"},l.a.createElement(u.i,{src:"https://source.unsplash.com/random"}))),l.a.createElement(u.c.Content,null,l.a.createElement(u.n,null,t.title),l.a.createElement(u.n,{subtitle:!0},t.description),l.a.createElement(u.b,{as:o.b,to:n,color:"primary",onClick:function(e){console.log("Read more "+n)}},"Read more"),l.a.createElement(u.b,{color:"danger",onClick:function(e){E.a.delete("https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts/{post.id}").then((function(e){console.log(e)})).catch((function(e){alert("Error: Post ".concat(t.id," was not deleted"))})),console.log("delete")}},"Delete")),l.a.createElement(u.c.Footer,null,t.date)))}var p=n(33),g=n(34);function h(e){e.category;var t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1],m=Object(a.useState)([]),s=Object(i.a)(m,2),d=s[0],h=s[1];return Object(a.useEffect)((function(){E.a.get("https://my-json-server.typicode.com/mkauha/JSON-server-demo/categories").then((function(e){h(e.data)})).catch((function(e){alert("Backend error: ".concat(e))}))}),[]),l.a.createElement("div",null,l.a.createElement(u.l,{active:c},l.a.createElement(u.l.Brand,null,l.a.createElement(u.l.Item,null,l.a.createElement("img",{src:"logo.png",alt:"logo"})),l.a.createElement(u.l.Burger,{onClick:function(){return r(!c)}})),l.a.createElement(u.l.Menu,null,l.a.createElement(u.l.Segment,{align:"start"},d.map((function(e){return l.a.createElement(u.l.Item,{key:e.title},e.title)}))),l.a.createElement(u.l.Segment,{align:"end"},l.a.createElement(u.l.Item,null,l.a.createElement(u.g,{kind:"addons"},l.a.createElement(u.f,null,l.a.createElement(u.j,{placeholder:"Search post"})),l.a.createElement(u.f,null,l.a.createElement(u.b,{color:"primary"},l.a.createElement(u.h,null,l.a.createElement(p.a,{icon:g.a})))))),l.a.createElement(u.l.Item,null,l.a.createElement(u.b,{as:o.b,to:"/newpost",color:"primary"},"New post"))))))}function f(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){E.a.get("https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts").then((function(e){c(e.data)})).catch((function(e){alert("Backend error: ".concat(e))}))}),[]),l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(u.e,null,l.a.createElement(u.d.Group,{vcentered:!0,multiline:!0},n.map((function(e){return l.a.createElement(u.d,{size:"one-third"},l.a.createElement(d,{key:e.title,post:e}))})))))}var b={margin:"60px"},v={marginRight:"20px"};function y(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),m=Object(i.a)(o,2),s=m[0],d=m[1],p=Object(a.useState)(new Date),g=Object(i.a)(p,2),f=g[0],y=g[1],j={title:c,description:s,image:"https://source.unsplash.com/random",date:"".concat(f.getDate(),".").concat(f.getMonth()+1,".").concat(f.getFullYear()),category:"food"};return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(u.a,{style:b},l.a.createElement(u.g,null,l.a.createElement(u.k,null,"Title"),l.a.createElement(u.f,null,l.a.createElement(u.j,{placeholder:"Your title",value:c,onChange:function(e){r(e.target.value)}})),l.a.createElement(u.k,null,"Body"),l.a.createElement(u.f,null,l.a.createElement(u.m,{placeholder:"Write here",value:s,onChange:function(e){d(e.target.value)}})),l.a.createElement(u.f,null,l.a.createElement(u.b,{style:v,color:"danger"},"Cancel"),l.a.createElement(u.b,{onClick:function(e){y(new Date),e.preventDefault(),E.a.post("https://my-json-server.typicode.com/mkauha/JSON-server-demo/blogposts",j).then((function(e){console.log(e)})).catch((function(e){alert("Error: Post '".concat(j.title,"' was not posted"))})),console.log("submit")},style:v,color:"success"},"Post")))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement((function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:f}),l.a.createElement(m.a,{path:"/newpost",component:y}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.810c9387.chunk.js.map