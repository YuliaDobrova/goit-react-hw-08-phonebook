(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(3),r=n(38),l=n(39),i=n(41),o=n(40),c=n(8),b=n(27),h=n(1),j={form:{marginTop:10},label:{marginRight:5,marginLeft:5},input:{marginRight:5,marginBottom:10},text:{marginRight:15}},p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",password:""},e.onHandleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.onHandleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.password;return Object(h.jsxs)("form",{style:j.form,onSubmit:this.onHandleSubmit,children:[Object(h.jsxs)("label",{style:j.label,children:[Object(h.jsx)("span",{style:j.text,children:"Username:"}),Object(h.jsx)("input",{style:j.input,type:"text",name:"name",autoComplete:"off",placeholder:"Enter username",onChange:this.onHandleChange,value:t})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{style:j.label,children:[Object(h.jsx)("span",{style:j.text,children:" Email:"}),Object(h.jsx)("input",{style:j.input,type:"text",name:"email",autoComplete:"off",placeholder:"Enter email",onChange:this.onHandleChange,value:n})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{style:j.label,children:[Object(h.jsx)("span",{style:j.text,children:"Password:"}),Object(h.jsx)("input",{style:j.input,type:"text",name:"password",autoComplete:"off",placeholder:"Enter password",onChange:this.onHandleChange,value:a})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"Register"})]})}}]),n}(a.Component),u={onRegister:b.a.register},m=Object(c.b)(null,u)(p);t.default=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Go through a simple registration"}),Object(h.jsx)(m,{})]})}}}]);
//# sourceMappingURL=6.900732b2.chunk.js.map