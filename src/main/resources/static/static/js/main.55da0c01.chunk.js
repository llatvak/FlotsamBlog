(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(23),r=a.n(c),o=a(5),i=a(12),m=a(18),u=(a(50),Object(n.createContext)());function s(){return Object(n.useContext)(u)}var d=a(44);var p=function(e){var t=e.component,a=Object(d.a)(e,["component"]),n=s().authTokens;return l.a.createElement(m.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(t,e):l.a.createElement(m.a,{to:"/login"})}}))},E=a(7),g=a.n(E),f=a(9),b=a(10),h=a(3),v={marginTop:"10px"},O={marginTop:"5px",marginLeft:"20px"},y={marginRight:"3px"};function j(e){var t=e.post,a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],u=c[1],s=Object(n.useState)((localStorage.getItem("readPosts")||localStorage.setItem("readPosts",JSON.stringify([])),JSON.parse(localStorage.getItem("readPosts")))),d=Object(o.a)(s,2),p=d[0],E=d[1],g=Object(m.g)(),j="/posts/".concat(t.id);function k(e){window.scrollTo(0,0);var a=JSON.parse(localStorage.getItem("readPosts"));a.includes(t.id)||a.push(t.id),localStorage.setItem("readPosts",JSON.stringify(a)),E(JSON.stringify(a))}Object(n.useEffect)((function(){p.includes(t.id)&&!0!==r&&u(!0)}),[]);return l.a.createElement("div",null,l.a.createElement(h.c,null,l.a.createElement(h.c.Image,{size:"16by9"},l.a.createElement(h.m.Container,{size:"16by9"},l.a.createElement(h.m,{src:t.imageUrl}))),l.a.createElement(h.c.Content,null,l.a.createElement(h.p,null,l.a.createElement(h.p.Item,{align:"left"},t.date),l.a.createElement(h.p.Item,{align:"right",onClick:function(e){g.push({pathname:"/search",state:{query:e.target.lastChild.data}})}},l.a.createElement("a",null,t.category))),l.a.createElement("span",null,l.a.createElement(h.v,{as:i.b,to:j,size:4,onClick:k},t.title)),l.a.createElement("span",null,l.a.createElement(h.v,{subtitle:!0,style:v,responsive:{touch:{hide:{value:!0}}}},t.description))),l.a.createElement(h.c.Content,null,r?l.a.createElement("span",null,l.a.createElement(h.b,{as:i.b,to:j,color:"light",onClick:k},"Read more")):l.a.createElement("span",null,l.a.createElement(h.b,{as:i.b,to:j,color:"primary",onClick:k},"Read more")),l.a.createElement(h.l,{style:O,color:"grey"},l.a.createElement(f.a,{style:y,size:"lg",icon:b.d}),l.a.createElement("small",null,t.postLikes)))))}function k(e){var t=Object(n.useState)(e.posts),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){r(e.posts)}),[e.posts]),l.a.createElement("div",null,l.a.createElement(h.e,null,l.a.createElement(h.d.Group,{multiline:!0},c.map((function(e){return l.a.createElement(h.d,{key:e.id,size:"one-third"},l.a.createElement(j,{key:e.id,post:e}))})))))}var C={marginBottom:"50px"},S={bottom:"20px",right:"20px",position:"fixed"};function w(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){g.a.get("https://flotsamblog.herokuapp.com/api/posts").then((function(e){c(e.data)})).catch((function(e){alert("".concat(e))}))}),[]);return a.reverse(),l.a.createElement("div",null,l.a.createElement(h.k,{color:"primary",style:C},l.a.createElement(h.k.Body,null,l.a.createElement(h.e,null,l.a.createElement(h.v,null,"FlotsamBlog"),l.a.createElement(h.v,{as:"h2",subtitle:!0},"Read like you've never read before!")))),l.a.createElement(k,{posts:a}),l.a.createElement("div",null,l.a.createElement(h.b,{style:S,onClick:function(){window.scrollTo(0,0)},color:"primary"},l.a.createElement(h.l,{size:"small"},l.a.createElement(f.a,{icon:b.a})))))}var x=a(22),I=a(6),B=a.n(I),D={margin:"60px"},T={marginTop:"20px"};function L(e){var t,a,c,r,i,u,s,d=Object(n.useState)(""),p=Object(o.a)(d,2),E=p[0],v=p[1],O=Object(n.useState)(""),y=Object(o.a)(O,2),j=y[0],k=y[1],C=Object(n.useState)(""),S=Object(o.a)(C,2),w=S[0],L=S[1],P=Object(n.useState)(""),q=Object(o.a)(P,2),M=q[0],N=q[1],z=Object(n.useState)("https://source.unsplash.com/random/1600x900/?technology"),J=Object(o.a)(z,2),R=J[0],H=J[1],U=Object(n.useState)("https://source.unsplash.com/random/1600x900/?technology"),A=Object(o.a)(U,2),G=A[0],W=A[1],F=Object(n.useState)("Programming"),K=Object(o.a)(F,2),Y=K[0],V=K[1],$=Object(n.useState)([]),_=Object(o.a)($,2),Q=_[0],X=_[1],Z=Object(n.useState)(new Date),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)("".concat(te.getDate(),".").concat(te.getMonth()+1,".").concat(te.getFullYear())),le=Object(o.a)(ne,2),ce=le[0],re=le[1],oe=Object(n.useState)(!1),ie=Object(o.a)(oe,2),me=ie[0],ue=ie[1],se=Object(x.a)(),de=se.register,pe=se.handleSubmit,Ee=se.errors,ge="https://flotsamblog.herokuapp.com/api/posts",fe=ge+"/".concat(E);var be=Object(m.g)(),he=Object(I.useModali)({animated:!0,title:"Publish a new post?",message:"Post will be public",buttons:[l.a.createElement(B.a.Button,{label:"Cancel",isStyleCancel:!0,onClick:function(){return ye()}}),l.a.createElement(B.a.Button,{label:"Publish",isStyleDefault:!0,onClick:function(){return De()}})]}),ve=Object(o.a)(he,2),Oe=ve[0],ye=ve[1],je=Object(I.useModali)({animated:!0,title:"Cancel and go to dashboard?",message:"All modified data will be lost",buttons:[l.a.createElement(B.a.Button,{label:"Continue writing",isStyleCancel:!0,onClick:function(){return Se()}}),l.a.createElement(B.a.Button,{label:"Go to dashboard",isStyleDestructive:!0,onClick:function(){return Te()}})]}),ke=Object(o.a)(je,2),Ce=ke[0],Se=ke[1],we=Object(I.useModali)({animated:!0,title:"Post ".concat(j," was created/updated"),message:"Return to dashboard or go to home page?",onHide:function(){be.push({pathname:"/dashboard"})},buttons:[l.a.createElement(B.a.Button,{label:"Go to home",isStyleDefault:!0,onClick:function(){return Pe()}}),l.a.createElement(B.a.Button,{label:"Go to dashboard",isStyleDefault:!0,onClick:function(){return Le()}})]}),xe=Object(o.a)(we,2),Ie=xe[0],Be=xe[1];Object(n.useEffect)((function(){if(g.a.get("https://flotsamblog.herokuapp.com/api/categories").then((function(e){X(e.data)})).catch((function(e){alert("Backend error: ".concat(e))})),void 0!==e.location.state){var t=e.location.state.postData;v(t.id),k(t.title),L(t.description),N(t.body),H(t.imageUrl),V(t.category),re(t.date),ue(!0)}}),[]);var De=function(e){me?g.a.put(fe,qe).then((function(e){Be()})).catch((function(e){alert("Error: Post '".concat(qe.title,"' was not updated"))})):(ae(new Date),g.a.post(ge,qe).then((function(e){Be()})).catch((function(e){alert("Error: Post '".concat(qe.title,"' was not posted"))})))},Te=function(){ye(),Le()},Le=function(){be.push({pathname:"/dashboard"})},Pe=function(){be.push({pathname:"/"})},qe={title:j,description:w,body:M,imageUrl:R,date:ce,category:Y,url:ge};return l.a.createElement("div",null,l.a.createElement(h.e,{breakpoint:"touch"},l.a.createElement(h.a,{style:D},l.a.createElement("form",{onSubmit:pe(ye)},l.a.createElement(h.i,null,l.a.createElement(h.o,null,"Title"),l.a.createElement(h.g,null,l.a.createElement(h.n,{name:"Title",placeholder:"Post title",value:j,onChange:function(e){k(e.target.value)},ref:de({required:!0,minLength:10,maxLength:60})}),l.a.createElement(h.j,{color:"danger"},"required"===(null===(t=Ee.Title)||void 0===t?void 0:t.type)&&"Title is required"),l.a.createElement(h.j,{color:"danger"},"minLength"===(null===(a=Ee.Title)||void 0===a?void 0:a.type)&&"Title is too short"),l.a.createElement(h.j,{color:"danger"},"maxLength"===(null===(c=Ee.Title)||void 0===c?void 0:c.type)&&"Title is too long"),l.a.createElement(h.j,{color:"danger"},"pattern"===(null===(r=Ee.Title)||void 0===r?void 0:r.type)&&"Must start with capital letter"))),l.a.createElement(h.i,null,l.a.createElement(h.o,null,"Body"),l.a.createElement(h.g,null,l.a.createElement(h.u,{name:"Body",rows:15,placeholder:"Write here",value:M,onChange:function(e){var t=e.target.value.substring(0,40);L(t),N(e.target.value)},ref:de({required:!0,minLength:10,maxLength:5e3})}),l.a.createElement(h.j,{color:"danger"},"required"===(null===(i=Ee.Body)||void 0===i?void 0:i.type)&&"Body is required"),l.a.createElement(h.j,{color:"danger"},"minLength"===(null===(u=Ee.Body)||void 0===u?void 0:u.type)&&"Body is too short"),l.a.createElement(h.j,{color:"danger"},"maxLength"===(null===(s=Ee.Body)||void 0===s?void 0:s.type)&&"Body is too long"))),l.a.createElement(h.i,null,l.a.createElement(h.o,null,"Category"),l.a.createElement(h.g,null,l.a.createElement(h.s.Container,null,l.a.createElement(h.s,{onChange:function(e){e.preventDefault(),V(e.target.value)}},Q.map((function(e){return l.a.createElement(h.s.Option,{key:e.title,value:e.title},e.title)})))))),l.a.createElement(h.o,null,"Image"),l.a.createElement(h.i,{kind:"addons"},l.a.createElement(h.g,{iconLeft:!0},l.a.createElement(h.n,{placeholder:"Image URL",onChange:function(e){e.preventDefault(),W(e.target.value)}}),l.a.createElement(h.l,{size:"small",align:"left"},l.a.createElement(f.a,{icon:b.e}))),l.a.createElement(h.g,null,l.a.createElement(h.b,{onClick:function(e){e.preventDefault(),H(G)},color:"link"},"Add"))),l.a.createElement(h.q,null,l.a.createElement(h.q.Item,{as:"figure",align:"left"},l.a.createElement(h.m.Container,{as:"p",size:128},l.a.createElement("a",{href:R,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(h.m,{alt:"Image preview",src:R}))))),l.a.createElement(h.h,null),l.a.createElement(h.i,{kind:"group"},l.a.createElement(h.g,{style:T},l.a.createElement(h.b.Group,null,l.a.createElement(h.n,{as:h.b,type:"submit",color:"link"},"Publish"),l.a.createElement(h.b,{text:!0,onClick:Se},"Cancel"))))),l.a.createElement(B.a.Modal,Ce),l.a.createElement(B.a.Modal,Oe),l.a.createElement(B.a.Modal,Ie))))}var P={margin:"20px"};function q(e){var t=Object(n.useState)("grey"),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),u=m[0],s=m[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),E=p[0],v=p[1],O=e.comment,y="".concat("https://flotsamblog.herokuapp.com/api/comments","/").concat(O.id);Object(n.useEffect)((function(){localStorage.getItem("likedComments".concat(O.postId))&&JSON.parse(localStorage.getItem("likedComments".concat(O.postId))).includes(O.id)&&!E&&(s(!0),r("info"),v(!0))}),[u]);var j=function(e){var t={author:O.author,content:O.content,date:O.date,likes:O.likes,postId:O.postId};g.a.put(y,t).then((function(e){})).catch((function(e){alert("".concat(e))}))};return l.a.createElement("div",null,l.a.createElement(h.q,{style:P},l.a.createElement(h.q.Item,{as:"figure",align:"left"},l.a.createElement(f.a,{size:"3x",icon:b.j})),l.a.createElement(h.q.Item,{align:"content"},l.a.createElement(h.f,null,l.a.createElement("p",null,l.a.createElement("strong",null,O.author)," ",l.a.createElement("small",null,"@",O.author)," ",l.a.createElement("small",null,O.date),l.a.createElement("br",null),O.content)),l.a.createElement(h.p,{breakpoint:"mobile"},l.a.createElement(h.p.Item,{align:"left"},l.a.createElement(h.p.Item,{as:"a"},l.a.createElement(h.l,{size:"small",color:c},l.a.createElement(f.a,{icon:b.d,onClick:function(){return function(e){var t=[];localStorage.getItem("likedComments".concat(O.postId))&&(t=JSON.parse(localStorage.getItem("likedComments".concat(O.postId)))),t.includes(O.id)||t.push(O.id),localStorage.setItem("likedComments".concat(O.postId),JSON.stringify(t)),u?(j(--O.likes),r("grey"),s(!1),localStorage.setItem("likedComments".concat(O.postId),"")):(r("info"),j(++O.likes),s(!0))}()}}))),l.a.createElement(h.f,null,l.a.createElement("small",null,O.likes)))))))}var M={padding:"16px"},N={margin:"auto",marginTop:"60px",marginBottom:"100px",padding:"48px"},z={marginTop:"20px",marginBottom:"20px"},J={borderRadius:"5px"},R={whiteSpace:"pre-line",fontSize:"18px"},H={width:"72%",marginLeft:"5%"},U={paddingLeft:"40px"},A={marginRight:"3px"},G={margin:"20px"},W={paddingTop:"20px"};function F(e){var t=e.match.params.id,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],i=c[1],u=Object(n.useState)([]),s=Object(o.a)(u,2),d=s[0],p=s[1],E=Object(n.useState)(!0),v=Object(o.a)(E,2),O=v[0],y=v[1],j=Object(n.useState)([]),C=Object(o.a)(j,2),S=C[0],w=C[1],x=Object(n.useState)(""),I=Object(o.a)(x,2),B=I[0],D=I[1],T=Object(n.useState)("grey"),L=Object(o.a)(T,2),P=L[0],F=L[1],K=Object(n.useState)((localStorage.getItem("likedPosts")||localStorage.setItem("likedPosts",JSON.stringify([])),JSON.parse(localStorage.getItem("likedPosts")))),Y=Object(o.a)(K,2),V=Y[0],$=Y[1],_=Object(m.g)(),Q="https://flotsamblog.herokuapp.com/api/posts",X=Q+"/".concat(t),Z="https://flotsamblog.herokuapp.com/api/comments";Object(n.useEffect)((function(){te(),ae(),ne(),V.includes(Number(t))?F("info"):F("grey")}),[t]);var ee=function(e){var t={title:r.title,description:r.description,body:r.body,date:r.date,url:r.url,imageUrl:r.imageUrl,category:r.category,postLikes:r.postLikes};g.a.put(X,t).then((function(e){})).catch((function(e){alert("".concat(e))}))},te=function(){g.a.get(X).then((function(e){i(e.data)})).catch((function(e){alert("".concat(e))}))},ae=function(){g.a.get(Z).then((function(e){ce(e.data)})).catch((function(e){alert("".concat(e))}))},ne=function(){g.a.get(Q).then((function(e){p(le(e.data))})).catch((function(e){alert("".concat(e))}))},le=function(e){for(var a=[],n=[];n.length<3;){var l=Math.floor(Math.random()*e.length);l!==Number(t)-1&&-1===n.indexOf(l)&&n.push(l)}for(var c=0,r=n;c<r.length;c++){var o=r[c];a.push(e[o])}return a},ce=function(e){for(var a=[],n=0;n<e.length;n++)Number(e[n].postId)===Number(t)&&a.push(e[n]);w(a)},re=function(){return Math.floor(999*Math.random())+0},oe=function(e){var t=new Date(e),a=""+(t.getMonth()+1),n=""+t.getDate(),l=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[l,a,n].join(".")};return l.a.createElement("div",null,l.a.createElement(h.e,{breakpoint:"mobile",style:M},l.a.createElement(h.a,{style:N},l.a.createElement(h.f,null,l.a.createElement(h.v,{style:W},r.title),l.a.createElement(h.v,{size:6,onClick:function(e){_.push({pathname:"/search",state:{query:e.target.lastChild.data}})}},l.a.createElement("a",null,r.category)),l.a.createElement("p",null,r.date)),l.a.createElement(h.m.Container,{size:"16by9",style:z},l.a.createElement(h.m,{src:r.imageUrl,style:J})),l.a.createElement(h.f,{style:R},l.a.createElement("p",null,r.body)),l.a.createElement(h.p,{align:"center"},l.a.createElement(h.b,{style:H,outlined:!0,color:"#333",key:"#333",onClick:function(){return y(!O)}},"View Comments (",S.length,")"),l.a.createElement(h.l,{style:U,color:P,as:"a"},l.a.createElement(f.a,{style:A,size:"lg",icon:b.d,onClick:function(){return function(e){var a=JSON.parse(localStorage.getItem("likedPosts")),n=Number(t);if(a.includes(n)){if(ee(--r.postLikes),F("grey"),a.includes(n)){var l=a.indexOf(n);l>-1&&a.splice(l,1)}}else a.push(n),F("info"),ee(++r.postLikes);localStorage.setItem("likedPosts",JSON.stringify(a)),$(JSON.stringify(a))}()}}),l.a.createElement("small",null,r.postLikes))),l.a.createElement(h.f,{hidden:O,key:S.id},S.map((function(e){return l.a.createElement(q,{key:e.id,comment:e,postId:r.id})}))),l.a.createElement(h.f,{hidden:O},l.a.createElement(h.q,{style:G,as:"article"},l.a.createElement(h.q.Item,{align:"left"},l.a.createElement(f.a,{size:"3x",icon:b.j})),l.a.createElement(h.q.Item,{align:"content"},l.a.createElement(h.i,null,l.a.createElement(h.g,{as:"p"},l.a.createElement(h.u,{ref:function(e){D(e)},placeholder:"Add a comment..."}))),l.a.createElement(h.i,null,l.a.createElement(h.g,{as:"p"},l.a.createElement(h.b,{onClick:function(e){var a=oe((new Date).toString()),n=B.value;if(B.value.length>0){var l={author:"Guest".concat(re()),content:n,date:a,likes:0,postId:t};g.a.post(Z,l).then((function(e){B.value=""})).then((function(){return ae()})).catch((function(e){alert("".concat(e))}))}else alert("Comment length must be at least 1")}},"Post comment"))))))),l.a.createElement(h.a,{style:N},l.a.createElement(h.f,null,l.a.createElement(h.v,{style:W},"Recommended posts")),l.a.createElement(k,{posts:d}))))}var K={padding:"16px"},Y={margin:"auto",padding:"30px",marginTop:"100px",width:"320px"},V={marginTop:"20px"};function $(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),b=f[0],v=f[1],O=Object(n.useState)(!1),y=Object(o.a)(O,2),j=y[0],k=y[1],C=s().setAuthTokens,S=Object(x.a)(),w=S.register,I=S.handleSubmit,B=S.errors;var D=function(){var e={username:b,password:d};g.a.post("https://flotsamblog.herokuapp.com/login",e).then((function(e){200===e.status?e.headers.authorization.startsWith("Bearer ")&&(C(e.headers.authorization),r(!0)):k(!0)})).catch((function(e){k(!0)}))},T=function(e){"Enter"===e.key&&D()};return c?l.a.createElement(m.a,{to:"/dashboard"}):l.a.createElement("div",null,l.a.createElement(h.e,{breakpoint:"mobile",style:K},l.a.createElement(h.a,{style:Y},l.a.createElement("form",{onSubmit:I(D)},l.a.createElement(h.v,null,"Login"),l.a.createElement(h.j,{color:"danger"},j&&"Wrong username or password"),l.a.createElement(h.i,{align:"centered"},l.a.createElement(h.o,null,"Username"),l.a.createElement(h.g,null,l.a.createElement(h.n,{type:"text",color:"primary",name:"Username",placeholder:"Username",ref:w({required:!0}),onKeyDown:T,onChange:function(e){v(e.target.value)}}),l.a.createElement(h.j,{color:"danger"},B.Username&&"Username is required"))),l.a.createElement(h.i,{align:"centered"},l.a.createElement(h.o,null,"Password"),l.a.createElement(h.g,null,l.a.createElement(h.n,{type:"password",color:"primary",name:"Password",placeholder:"Password",ref:w({required:!0}),onKeyDown:T,onChange:function(e){p(e.target.value)}}),l.a.createElement(h.j,{color:"danger"},B.Password&&"Password is required"))),l.a.createElement(h.i,{style:V},l.a.createElement(h.g,null,l.a.createElement(h.n,{as:h.b,type:"submit",color:"primary"},"Login")))))))}var _={padding:"16px"},Q={margin:"auto",padding:"50px",marginTop:"50px",width:"80%"},X={marginTop:"20px",marginBottom:"20px"};function Z(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(-1),u=Object(o.a)(i,2),d=u[0],p=u[1],E=Object(n.useState)(-1),v=Object(o.a)(E,2),O=v[0],y=v[1],j=Object(m.g)(),k=s().setAuthTokens,C="https://flotsamblog.herokuapp.com/api/posts";var S=Object(I.useModali)({animated:!0,title:"Create a new post?",message:"A text editor will be opened",buttons:[l.a.createElement(B.a.Button,{label:"Cancel",isStyleCancel:!0,onClick:function(){return D()}}),l.a.createElement(B.a.Button,{label:"Go to editor",isStyleDefault:!0,onClick:function(){j.push({pathname:"/new"})}})]}),w=Object(o.a)(S,2),x=w[0],D=w[1],T=Object(I.useModali)({animated:!0,title:"Delete post ".concat(d,"?"),message:"Post will be permanently deleted.",buttons:[l.a.createElement(B.a.Button,{label:"Cancel",isStyleCancel:!0,onClick:function(){return q()}}),l.a.createElement(B.a.Button,{label:"Delete",isStyleDestructive:!0,onClick:function(){return function(e,t){var a=C+"/"+e;g.a.delete(a).then((function(e){})).catch((function(e){alert("Error: Post  was not deleted")}));for(var n=[],l=0;l<c.length;l++)if(c[l].id===e){console.log(c[l].id),c.splice(l,1),n=c.splice(0);break}r(n),q()}(d)}})]}),L=Object(o.a)(T,2),P=L[0],q=L[1],M=Object(I.useModali)({animated:!0,title:"Edit post ".concat(O.id,"?"),message:"Post will be modified",buttons:[l.a.createElement(B.a.Button,{label:"Cancel",isStyleCancel:!0,onClick:function(){return J()}}),l.a.createElement(B.a.Button,{label:"Edit",isStyleDefault:!0,onClick:function(){return e=O,void j.push({pathname:"/edit",state:{postData:e}});var e}})]}),N=Object(o.a)(M,2),z=N[0],J=N[1],R=Object(I.useModali)({animated:!0,title:"Log out?",buttons:[l.a.createElement(B.a.Button,{label:"Cancel",isStyleCancel:!0,onClick:function(){return A()}}),l.a.createElement(B.a.Button,{label:"Log out",isStyleDestructive:!0,onClick:function(){k("")}})]}),H=Object(o.a)(R,2),U=H[0],A=H[1];return Object(n.useEffect)((function(){g.a.get(C).then((function(e){r(e.data)})).catch((function(e){alert("".concat(e))}))}),[]),l.a.createElement("div",null,l.a.createElement(h.e,{breakpoint:"mobile",style:_},l.a.createElement(h.a,{style:Q},l.a.createElement(h.b.Group,{align:"right"},l.a.createElement(h.b,{onClick:A,color:"danger"},l.a.createElement(h.l,{size:"small"},l.a.createElement(f.a,{icon:b.h})),l.a.createElement("span",null,"Log out"))),l.a.createElement(h.v,null,"Dashboard"),l.a.createElement(h.b,{style:X,color:"success",onClick:function(e){return D()}},l.a.createElement(h.l,{size:"small"},l.a.createElement(f.a,{icon:b.f})),l.a.createElement("span",null,"New post")),l.a.createElement(h.o,null,"All posts"),l.a.createElement(h.t,{fullwidth:!0},l.a.createElement(h.t.Head,null,l.a.createElement(h.t.Row,null,l.a.createElement(h.t.Heading,null,"ID"),l.a.createElement(h.t.Heading,null,"Title"),l.a.createElement(h.t.Heading,null,"Description"),l.a.createElement(h.t.Heading,null,"Date"),l.a.createElement(h.t.Heading,null,"Comments"),l.a.createElement(h.t.Heading,null,"Edit"),l.a.createElement(h.t.Heading,null,"Remove"))),l.a.createElement(h.t.Body,null,c.map((function(e){return l.a.createElement(h.t.Row,{key:e.id},l.a.createElement(h.t.Cell,null,e.id),l.a.createElement(h.t.Cell,null,e.title),l.a.createElement(h.t.Cell,null,e.description.substring(0,40)+"..."),l.a.createElement(h.t.Cell,null,e.date),l.a.createElement(h.t.Cell,null,l.a.createElement(h.b,{color:"info",onClick:function(t){var a;a=e,j.push({pathname:"/comments",state:{postData:a}})}},l.a.createElement(h.l,null,l.a.createElement(f.a,{icon:b.b})))),l.a.createElement(h.t.Cell,null,l.a.createElement(h.b,{color:"info",onClick:function(t){y(e),J()}},l.a.createElement(h.l,null,l.a.createElement(f.a,{icon:b.c})))),l.a.createElement(h.t.Cell,null,l.a.createElement(h.b,{color:"danger",onClick:function(t){p(e.id),q()}},l.a.createElement(h.l,null,l.a.createElement(f.a,{icon:b.i})))))})))),l.a.createElement(B.a.Modal,P),l.a.createElement(B.a.Modal,z),l.a.createElement(B.a.Modal,U),l.a.createElement(B.a.Modal,x))))}function ee(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(x.a)(),i=r.register,u=r.handleSubmit,s=Object(m.g)(),d=function(){s.push({pathname:"/search",state:{query:a}}),c("")};return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:u(d)},l.a.createElement(h.i,{kind:"addons"},l.a.createElement(h.g,null,l.a.createElement(h.n,{type:"text",name:"Search",value:a,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&d()},placeholder:"Search posts",ref:i({required:!0,minLength:1})})),l.a.createElement(h.g,null,l.a.createElement(h.n,{as:h.b,color:"primary",type:"submit"},l.a.createElement(h.l,null,l.a.createElement(f.a,{icon:b.g})))))))}function te(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),u=Object(o.a)(r,2),s=u[0],d=u[1],p=Object(m.g)();Object(n.useEffect)((function(){g.a.get("https://flotsamblog.herokuapp.com/api/categories").then((function(e){d(e.data)})).catch((function(e){alert("Backend error: ".concat(e))}))}),[]);var E=function(e){p.push({pathname:"/search",state:{query:e.target.firstChild.data}})};return l.a.createElement("div",null,l.a.createElement(h.r,{fixed:"top",active:a},l.a.createElement(h.r.Brand,null,l.a.createElement(h.r.Item,{as:i.b,to:"/"},l.a.createElement(h.m,{src:"favicon.png"})),l.a.createElement(h.r.Burger,{onClick:function(){return c(!a)}})),l.a.createElement(h.r.Menu,null,l.a.createElement(h.r.Segment,{align:"start"},s.map((function(e){return l.a.createElement(h.r.Item,{key:e.id,onClick:E},e.title)}))),l.a.createElement(h.r.Segment,{align:"end"},l.a.createElement(h.r.Item,{as:"div"},l.a.createElement(ee,null)),l.a.createElement(h.r.Item,{as:"div"},l.a.createElement(h.l,{as:i.b,to:"/dashboard",color:"primary"},l.a.createElement(f.a,{icon:b.j,size:"lg"})))))))}function ae(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=e.location.state.query,u=Object(m.g)();Object(n.useEffect)((function(){void 0!==e.location.state&&(i=e.location.state.query,g.a.get("https://flotsamblog.herokuapp.com/api/posts").then((function(e){r(s(e.data,i))})).catch((function(e){alert("".concat(e))})))}),[e.location.state.query]);var s=function(e,t){return e.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.toLowerCase())||-1!==e.category.toLowerCase().indexOf(t.toLowerCase())}))};return l.a.createElement("div",null,l.a.createElement(h.e,{style:{marginTop:"20px"}},l.a.createElement(h.v,null,'"',i,'"'),l.a.createElement(h.v,null,"Results: ",c.length," "),l.a.createElement(k,{posts:c}),l.a.createElement(h.b,{style:{marginTop:"20px"},onClick:function(e){u.goBack()}},"Back")))}var ne={margin:"auto",padding:"50px",marginTop:"50px",maxWidth:"80%"},le={marginTop:"20px"};function ce(e){var t=e.location.state.postData,a=t.id,c="https://flotsamblog.herokuapp.com/api/comments",r=c+"/".concat(a);var i=Object(m.g)(),u=Object(n.useState)([]),s=Object(o.a)(u,2),d=s[0],p=s[1],E=Object(n.useState)(-1),v=Object(o.a)(E,2),O=v[0],y=v[1],j=Object(I.useModali)({animated:!0,title:"Delete comment ".concat(O,"?"),message:"Comment will be permanently deleted.",buttons:[l.a.createElement(B.a.Button,{label:"Cancel",isStyleCancel:!0,onClick:function(){return S()}}),l.a.createElement(B.a.Button,{label:"Delete",isStyleDestructive:!0,onClick:function(){return function(e,t){g.a.delete(r).then((function(e){})).catch((function(e){alert("Error: Comment  was not deleted")}));for(var a=[],n=0;n<d.length;n++)if(d[n].id===e){d.splice(n,1),a=d.splice(0);break}p(a),S()}(O)}})]}),k=Object(o.a)(j,2),C=k[0],S=k[1];Object(n.useEffect)((function(){w()}),[]);var w=function(){g.a.get(c).then((function(e){x(e.data)})).catch((function(e){alert("".concat(e))}))},x=function(e){for(var t=[],n=0;n<e.length;n++)Number(e[n].postId)===Number(a)&&t.push(e[n]);p(t)};return l.a.createElement("div",null,l.a.createElement(h.a,{style:ne},l.a.createElement(h.v,null,"Comments for post:"),l.a.createElement(h.o,null,t.id," - ",t.title),l.a.createElement(h.o,null,"All comments"),l.a.createElement(h.t,{fullwidth:!0},l.a.createElement(h.t.Head,null,l.a.createElement(h.t.Row,null,l.a.createElement(h.t.Heading,null,"ID"),l.a.createElement(h.t.Heading,null,"Comment"),l.a.createElement(h.t.Heading,null,"Likes"),l.a.createElement(h.t.Heading,null,"Date"),l.a.createElement(h.t.Heading,null,"Remove"))),l.a.createElement(h.t.Body,null,d.map((function(e){return l.a.createElement(h.t.Row,{key:e.id},l.a.createElement(h.t.Cell,null,e.id),l.a.createElement(h.t.Cell,null,function(e){if(e.length>20){return e.substring(0,40)+"..."}return e}(e.content)),l.a.createElement(h.t.Cell,null,e.likes),l.a.createElement(h.t.Cell,null,e.date),l.a.createElement(h.t.Cell,null,l.a.createElement(h.b,{color:"danger",onClick:function(t){y(e.id),S()}},l.a.createElement(h.l,null,l.a.createElement(f.a,{icon:b.i})))))})))),l.a.createElement(h.b,{style:le,onClick:function(e){i.goBack()}},"Back"),l.a.createElement(B.a.Modal,C)))}var re={marginTop:"100px"};function oe(){return l.a.createElement("div",null,l.a.createElement(h.e,null,l.a.createElement(h.p,null,l.a.createElement(h.p.Item,{textAlign:"centered"},l.a.createElement(h.v,{style:re},"404 Page not found")))))}function ie(){var e=JSON.parse(localStorage.getItem("tokens")),t=Object(n.useState)(e),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(u.Provider,{value:{authTokens:c,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),r(e)}}},l.a.createElement(i.a,null,l.a.createElement(te,null),l.a.createElement("div",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0,component:w}),l.a.createElement(m.b,{path:"/search",component:ae}),l.a.createElement(m.b,{path:"/posts/:id",component:F}),l.a.createElement(m.b,{path:"/login",component:$}),l.a.createElement(p,{path:"/dashboard",component:Z}),l.a.createElement(p,{path:"/new",component:L}),l.a.createElement(p,{path:"/edit",component:L}),l.a.createElement(p,{path:"/comments",component:ce}),l.a.createElement(m.b,{path:"*",component:oe})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.55da0c01.chunk.js.map