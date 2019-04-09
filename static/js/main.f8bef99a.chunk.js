(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(101),a(12)),o=a(13),u=a(15),s=a(14),m=a(16),p=(a(102),a(95)),h=a(22),b=a.n(h),f=a(23),E=a.n(f),y=a(25),v=a.n(y),d=a(24),g=a.n(d),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter user details"}),r.a.createElement(v.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!0,style:O.button,onClick:this.continue})))}}]),t}(n.Component),O={button:{margin:15}},C=x,j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter Personal Details"}),r.a.createElement(v.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!0,style:T.button,onClick:this.continue}),r.a.createElement(g.a,{label:"Back",primary:!1,style:T.button,onClick:this.back})))}}]),t}(n.Component),T={button:{margin:15}},k=j,S=a(26),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Confirm User Data"}),r.a.createElement(S.List,null,r.a.createElement(S.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement("hr",null),r.a.createElement(S.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement("hr",null),r.a.createElement(S.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement("hr",null),r.a.createElement(S.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement("hr",null),r.a.createElement(S.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement("hr",null),r.a.createElement(S.ListItem,{primaryText:"Bio",secondaryText:i})),r.a.createElement(g.a,{label:"Confirm and Continue",primary:!0,style:w.button,onClick:this.continue}),r.a.createElement(g.a,{label:"Back",primary:!1,style:w.button,onClick:this.back})))}}]),t}(n.Component),w={button:{margin:15}},L=N,Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Success"}),r.a.createElement("h1",null,"Thank You For Your Submission"),r.a.createElement("p",null,"You will get and email for further information")))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(p.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(C,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(k,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(L,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(Y,null)}}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,a){e.exports=a(238)}},[[96,1,2]]]);
//# sourceMappingURL=main.f8bef99a.chunk.js.map