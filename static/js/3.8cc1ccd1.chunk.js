(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{107:function(t,e,n){t.exports={form:"ContactForm_form__3xfSJ",formName:"ContactForm_formName__35hCD",formPhonebookText:"ContactForm_formPhonebookText__12hSO"}},108:function(t,e,n){t.exports={contactList:"ContactList_contactList__21X6r",contactListItem:"ContactList_contactListItem___7xux",contactListItemSpan:"ContactList_contactListItemSpan__1ePHo",listItemButton:"ContactList_listItemButton__3fksU"}},109:function(t,e,n){t.exports={filterName:"FIlter_filterName__28jT1",formPhonebookText:"FIlter_formPhonebookText__1uGdY"}},111:function(t,e,n){"use strict";n.r(e);var a=n(38),c=n(39),r=n(41),o=n(40),s=n(0),i=n(22),u=n(3),l=n(16),m=n.n(l),f=n(26),b=n(23),p=n.n(b),h=n(10),j={addContact:function(t){return function(){var e=Object(f.a)(m.a.mark((function e(n){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(h.b)()),e.prev=1,e.next=4,p.a.post("/contacts",t);case 4:a=e.sent,c=a.data,n(Object(h.c)(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(h.a)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(f.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(h.e)()),e.prev=1,e.next=4,p.a.delete("/contacts/".concat(t));case 4:n(Object(h.f)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(h.d)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var t=Object(f.a)(m.a.mark((function t(e){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(h.h)()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,a=n.data,e(Object(h.i)(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(h.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},d=n(8),O=n(30),x=n.n(O),C=n(107),v=n.n(C),g=n(29),_=function(t){return t.contacts.loading},N=function(t){return t.contacts.filter},k=function(t){return t.contacts.items},L=Object(g.a)([k,N],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),y=n(1),w=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),console.log("this.props.contacts",t.props.contacts),t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))?alert("".concat(t.state.name," is already in contacts")):(t.props.addContact(Object(i.a)({},t.state)),t.setState({name:"",number:""}))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(y.jsxs)("form",{className:v.a.form,onSubmit:this.onHandleSubmit,children:[Object(y.jsxs)("label",{className:v.a.formName,children:[Object(y.jsx)("span",{className:v.a.formPhonebookText,children:"Name:"}),Object(y.jsx)("input",{className:v.a.formInput,type:"text",name:"name",autoComplete:"off",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.onHandleChange,required:!0})]}),Object(y.jsxs)("label",{className:v.a.formName,children:[Object(y.jsx)("span",{className:v.a.formPhonebookText,children:"Phone\u2116:"}),Object(y.jsx)("input",{className:v.a.formInput,type:"tel",name:"number",autoComplete:"off",placeholder:"Enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.onHandleChange,required:!0})]}),Object(y.jsx)("button",{type:"submit",className:v.a.formButton,children:"Add contact"}),this.props.isLoadingContacts&&Object(y.jsx)(x.a,{type:"ThreeDots",color:"#40e0d0",height:70,width:70})]})}}]),n}(s.Component),I=Object(d.b)((function(t){return{contacts:k(t),isLoadingContacts:_(t)}}),(function(t){return{fetchContacts:function(){return t(j.fetchContacts())},addContact:function(e){return t(j.addContact(e))}}}))(w),F=n(108),S=n.n(F),P=Object(d.b)((function(t){return{items:L(t)}}),(function(t){return{deleteContact:function(e){return t(j.deleteContact(e))}}}))((function(t){var e=t.items,n=t.deleteContact,a=function(t){n(t.target.id)};return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("ul",{className:S.a.contactList,children:e.length>0&&e.map((function(t){var e=t.name,n=t.number,c=t.id;return Object(y.jsxs)("li",{className:S.a.contactListItem,children:[Object(y.jsx)("span",{className:S.a.contactListItemSpan,children:e}),":",Object(y.jsx)("span",{className:S.a.contactListItemSpan,children:n}),Object(y.jsx)("button",{type:"button",className:S.a.listItemButton,onClick:a,id:c,children:"Detete"})]},c)}))})})})),T=n(109),A=n.n(T),H=Object(d.b)((function(t){return{filter:N(t)}}),{setFilter:h.j})((function(t){var e=t.filter,n=t.setFilter;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("label",{className:A.a.filterName,children:[Object(y.jsx)("span",{className:A.a.formPhonebookText,children:"Find contact by name"}),Object(y.jsx)("input",{className:A.a.filterInput,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})})),B=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{className:"appHeading",children:"Phonebook"}),Object(y.jsx)(I,{}),Object(y.jsx)("h2",{className:"appHeading",children:"Contacts"}),Object(y.jsx)(H,{}),Object(y.jsx)(P,{})]})}}]),n}(s.Component);e.default=B}}]);
//# sourceMappingURL=3.8cc1ccd1.chunk.js.map