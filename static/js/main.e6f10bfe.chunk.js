(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return d}));var c=n(2),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),i=Object(c.b)("contacts/addContactRequest"),o=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),d=Object(c.b)("contacts/setFilter")},104:function(t,e,n){},106:function(t,e,n){"use strict";n.r(e);var c,r,a,u,i,o,s,b,j,l,d=n(0),O=n.n(d),f=n(28),h=n.n(f),p=n(38),x=n(39),v=n(41),g=n(40),m=n(8),k=function(t){return t.auth.isAuthenticated},y=function(t){return t.auth.user.name},L=n(15),C=n(18),w=n(19),A=w.a.nav(c||(c=Object(C.a)(["\n  .navList {\n    display: flex;\n    justify-content: flex-end;\n  }\n  .navListItem:not(:last-child) {\n    margin-right: 20px;\n  }\n  .navLink {\n    text-decoration: none;\n    font-weight: 700;\n    color: white;\n  }\n  .navLinkActive {\n    color: turquoise;\n  }\n"]))),N=n(1),R=function(){return Object(N.jsx)(A,{children:Object(N.jsxs)("ul",{className:"navList",children:[Object(N.jsx)("li",{className:"navListItem",children:Object(N.jsx)(L.b,{to:"/register",exact:!0,className:"navLink",activeClassName:"navLinkActive",children:"Registration"})}),Object(N.jsx)("li",{className:"navListItem",children:Object(N.jsx)(L.b,{to:"/login",exact:!0,className:"navLink",activeClassName:"navLinkActive",children:"Login"})})]})})},T=w.a.nav(r||(r=Object(C.a)(["\n  .navList {\n    display: flex;\n\n    justify-content: flex-end;\n  }\n  .navListItem:not(:last-child) {\n    margin-right: 20px;\n  }\n  .navLink {\n    text-decoration: none;\n    font-weight: 700;\n    color: white;\n  }\n  .navLinkActive {\n    color: turquoise;\n  }\n"]))),q=Object(m.b)((function(t){return{isAuthenticated:k(t)}}))((function(t){var e=t.isAuthenticated;return Object(N.jsx)(T,{children:Object(N.jsxs)("ul",{className:"navList",children:[Object(N.jsx)("li",{className:"navListItem",children:Object(N.jsx)(L.b,{to:"/",exact:!0,className:"navLink",activeClassName:"navLinkActive",children:"Home"})}),e&&Object(N.jsx)("li",{className:"navListItem",children:Object(N.jsx)(L.b,{to:"/contacts",exact:!0,className:"navLink",activeClassName:"navLinkActive",children:"Contacts"})})]})})})),I=n(27),S=n.p+"static/media/user.869a9e23.png",E={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:20}},U={onLogout:I.a.logOut},z=Object(m.b)((function(t){return{name:y(t),avatar:S}}),U)((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(N.jsxs)("div",{style:E.container,children:[Object(N.jsx)("img",{src:e,alt:n,width:"24",style:E.avatar}),Object(N.jsxs)("span",{style:E.name,children:["Welcome, ",n]}),Object(N.jsx)("button",{type:"button",onClick:c,children:"Logout"})]})})),D=w.a.header(a||(a=Object(C.a)(["\n  height: 60px;\n  background-color: rgba(21, 36, 34, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 0 30px;\n"]))),B=Object(m.b)((function(t){return{isAuthenticated:k(t)}}))((function(t){var e=t.isAuthenticated;return Object(N.jsxs)(D,{children:[Object(N.jsx)(q,{}),e?Object(N.jsx)(z,{}):Object(N.jsx)(R,{})]})})),F=n(7),G=w.a.main(u||(u=Object(C.a)(["\n  padding: 20px;\n"]))),J=n(30),M=n.n(J),W=n(22),H=n(32),K=["component","isAuthenticated","redirectTo"],P=Object(m.b)((function(t){return{isAuthenticated:k(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(H.a)(t,K);return Object(N.jsx)(F.b,Object(W.a)(Object(W.a)({},r),{},{render:function(t){return n?Object(N.jsx)(e,Object(W.a)({},t)):Object(N.jsx)(F.a,{to:c})}}))})),Q=["component","isAuthenticated","redirectTo"],V=Object(m.b)((function(t){return{isAuthenticated:k(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(H.a)(t,Q);return Object(N.jsx)(F.b,Object(W.a)(Object(W.a)({},r),{},{render:function(t){return n&&r.restricted?Object(N.jsx)(F.a,{to:c}):Object(N.jsx)(e,Object(W.a)({},t))}}))})),X=Object(d.lazy)((function(){return n.e(4).then(n.bind(null,110))})),Y=Object(d.lazy)((function(){return n.e(3).then(n.bind(null,111))})),Z=Object(d.lazy)((function(){return n.e(6).then(n.bind(null,112))})),$=Object(d.lazy)((function(){return n.e(5).then(n.bind(null,113))})),_=function(){return Object(N.jsx)(G,{children:Object(N.jsx)(d.Suspense,{fallback:Object(N.jsx)(M.a,{type:"ThreeDots",color:"#40e0d0",height:70,width:70}),children:Object(N.jsxs)(F.d,{children:[Object(N.jsx)(V,{path:"/",exact:!0,component:X}),Object(N.jsx)(P,{path:"/contacts",component:Y,redirectTo:"/"}),Object(N.jsx)(V,{path:"/register",restricted:!0,component:Z,redirectTo:"/contacts"}),Object(N.jsx)(V,{path:"/login",restricted:!0,component:$,redirectTo:"/contacts"})]})})})},tt=function(t){Object(v.a)(n,t);var e=Object(g.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(B,{}),Object(N.jsx)(_,{})]})}}]),n}(d.Component),et={onGetCurrentUser:I.a.getCurrentUser},nt=Object(m.b)(null,et)(tt),ct=n(31),rt=n(2),at=n(3),ut=n(20),it=n(4),ot={name:null,email:null},st=Object(rt.c)(ot,(i={},Object(at.a)(i,it.l,(function(t,e){return e.payload.user})),Object(at.a)(i,it.f,(function(t,e){return e.payload.user})),Object(at.a)(i,it.i,(function(t,e){return ot})),Object(at.a)(i,it.c,(function(t,e){return e.payload})),i)),bt=Object(rt.c)(null,(o={},Object(at.a)(o,it.l,(function(t,e){return e.payload.token})),Object(at.a)(o,it.f,(function(t,e){return e.payload.token})),Object(at.a)(o,it.i,(function(){return null})),o)),jt=Object(rt.c)(null,(s={},Object(at.a)(s,it.j,(function(t,e){return e.payload})),Object(at.a)(s,it.d,(function(t,e){return e.payload})),Object(at.a)(s,it.g,(function(t,e){return e.payload})),Object(at.a)(s,it.a,(function(t,e){return e.payload})),s)),lt=Object(rt.c)(!1,(b={},Object(at.a)(b,it.l,(function(){return!0})),Object(at.a)(b,it.f,(function(){return!0})),Object(at.a)(b,it.c,(function(){return!0})),Object(at.a)(b,it.j,(function(){return!1})),Object(at.a)(b,it.d,(function(){return!1})),Object(at.a)(b,it.a,(function(){return!1})),Object(at.a)(b,it.i,(function(){return!1})),b)),dt=Object(ut.a)({user:st,isAuthenticated:lt,token:bt,error:jt}),Ot=n(10),ft=Object(rt.c)([],(j={},Object(at.a)(j,Ot.i,(function(t,e){return e.payload})),Object(at.a)(j,Ot.c,(function(t,e){var n=e.payload;return[].concat(Object(ct.a)(t),[n])})),Object(at.a)(j,Ot.f,(function(t,e){return t.filter((function(t){return t.id!==Number(e.payload)}))})),j)),ht=Object(rt.c)("",Object(at.a)({},Ot.j,(function(t,e){return e.payload}))),pt=Object(rt.c)(!1,(l={},Object(at.a)(l,Ot.h,(function(){return!0})),Object(at.a)(l,Ot.i,(function(){return!1})),Object(at.a)(l,Ot.g,(function(){return!1})),Object(at.a)(l,Ot.b,(function(){return!0})),Object(at.a)(l,Ot.c,(function(){return!1})),Object(at.a)(l,Ot.a,(function(){return!1})),Object(at.a)(l,Ot.e,(function(){return!0})),Object(at.a)(l,Ot.f,(function(){return!1})),Object(at.a)(l,Ot.d,(function(){return!1})),l)),xt=Object(ut.a)({items:ft,filter:ht,loading:pt}),vt=n(17),gt=n(54),mt=n.n(gt),kt=Object(ct.a)(Object(rt.d)({serializableCheck:{ignoredActions:[vt.a,vt.f,vt.b,vt.c,vt.d,vt.e]}})),yt={key:"auth",storage:mt.a,whiteList:["token"]},Lt=Object(rt.a)({reducer:{auth:Object(vt.g)(yt,dt),contacts:xt},middleware:kt,devTools:!1}),Ct={store:Lt,persistor:Object(vt.h)(Lt)},wt=(n(104),n(105),n(55));h.a.render(Object(N.jsx)(O.a.StrictMode,{children:Object(N.jsx)(m.a,{store:Ct.store,children:Object(N.jsx)(wt.a,{loading:Object(N.jsx)(M.a,{type:"ThreeDots",color:"#40e0d0",height:70,width:70}),persistor:Ct.persistor,children:Object(N.jsx)(L.a,{children:Object(N.jsx)(nt,{})})})})}),document.getElementById("root"))},27:function(t,e,n){"use strict";var c=n(16),r=n.n(c),a=n(26),u=n(23),i=n.n(u),o=n(4);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},j={register:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(o.k)()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:c=e.sent,s(c.data.token),n(Object(o.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(o.j)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(o.e)()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:c=e.sent,s(c.data.token),n(Object(o.f)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(o.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(o.h)()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:b(),e(Object(o.i)()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(o.g)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(a),e(Object(o.b)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:u=t.sent,e(Object(o.c)(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(o.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}};e.a=j},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return f}));var c=n(2),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),i=Object(c.b)("auth/loginRequest"),o=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),O=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError")}},[[106,1,2]]]);
//# sourceMappingURL=main.e6f10bfe.chunk.js.map