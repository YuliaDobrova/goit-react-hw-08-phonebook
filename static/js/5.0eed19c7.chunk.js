(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(5),o=n(36),l=n(37),r=n(39),i=n(38),c=n(17),b=n(26),p=n(1),h={form:{marginTop:10},label:{marginRight:5,marginLeft:5},input:{marginRight:5,marginBottom:10},text:{marginRight:15}},j=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.onHandleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(s.a)({},a,o))},e.onHandleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({email:"",password:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(p.jsxs)("form",{style:h.form,onSubmit:this.onHandleSubmit,children:[Object(p.jsxs)("label",{style:h.label,children:[Object(p.jsx)("span",{style:h.text,children:" Email:"}),Object(p.jsx)("input",{style:h.input,type:"text",name:"email",autoComplete:"off",placeholder:"Enter email",onChange:this.onHandleChange,value:t})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{style:h.label,children:[Object(p.jsx)("span",{style:h.text,children:" Password:"}),Object(p.jsx)("input",{style:h.input,type:"text",name:"password",autoComplete:"off",placeholder:"Enter password",onChange:this.onHandleChange,value:n})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Login"})]})}}]),n}(a.Component),u={onLogin:b.a.logIn},m=Object(c.b)(null,u)(j);t.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Login, please"}),Object(p.jsx)(m,{})]})}}}]);
//# sourceMappingURL=5.0eed19c7.chunk.js.map