(this["webpackJsonpdemo-project"]=this["webpackJsonpdemo-project"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),l=a.n(o),i=(a(16),a(1)),s=a(2),c=a(5),u=a(4),m=(a(17),a(3)),p=function(e){return function(t){Object(c.a)(r,t);var a=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={formEl:null},e.connectState=function(t){e.setState({formEl:t})},e.updateFormState=function(t,a){var r=!0,n=e.state.formEl[a],o=t.target.value;n.validators.forEach((function(a){if(e.isElementValid(r,a,o)){var l=a.errorMessage;e.setState(e.updateState(o,n,l),e.updateFormValidity),r=!1}else r&&a.REQUIREDPATTERN&&a.REQUIREDPATTERN.forEach((function(a,l){if("EMAIL"===l&&!t.target.validity.valid){var i=a.errorMessage;e.setState(e.updateState(o,n,i),e.updateFormValidity),r=!1}}))})),r&&n.customValidators&&n.customValidators.forEach((function(t,a){if(t.errFunc(o)){var l=t.errorMessage;e.setState(e.updateState(o,n,l),e.updateFormValidity),r=!1}})),r&&e.setState(e.updateState(o,n,"",!0),e.updateFormValidity)},e.isElementValid=function(e,t,a){return e&&t.REQUIRED&&""===a||e&&t.MINLENGTH&&a.length<t.MINLENGTH},e.updateState=function(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l='{"'+a.name+'": { "value"   : "'+t+'", "valid"   : '+n+', "touched" : '+!0+', "errorMessage"   : "'+r+'" } }',i=JSON.parse(l);return i[a.name]=Object(m.a)({},a,{},i[a.name]),{formEl:Object(m.a)({},e.state.formEl,{valid:o,touched:!0},i)}},e.updateFormValidity=function(){var t=e.checkFormValidity();t!==e.state.formEl.valid&&e.setState({formEl:Object(m.a)({},e.state.formEl,{valid:t})})},e.checkFormValidity=function(){for(var t=!0,a=JSON.stringify(e.state.formEl).split('valid":'),r=2;r<a.length;r++)if("true"!==a[r].split(",")[0]){t=!1;break}return t},e}return Object(s.a)(r,[{key:"render",value:function(){var t=this;return n.a.createElement(e,{formEl:this.state.formEl,updateFormState:function(e,a){return t.updateFormState(e,a)},connectState:function(e){return t.connectState(e)}})}}]),r}(r.Component)},d=a(8),E=a(6),f=a(7),h=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"REQUIRED",value:function(e){return Object(m.a)({},Object(E.a)(this,v)[v],{errorMessage:e})}},{key:"REQUIREDPATTERN",value:function(){for(var e=new Map,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return a.forEach((function(t){var a=Object(d.a)(t,2),r=a[0],n=a[1];e.set(r,{errorMessage:n})})),Object(E.a)(this,y)[y]={REQUIREDPATTERN:e},Object(E.a)(this,y)[y]}}]),e}(),v=Object(f.a)("_required"),b=Object(f.a)("_minLength"),y=Object(f.a)("_requiredPattern");Object.defineProperty(h,v,{writable:!0,value:{REQUIRED:!0}}),Object.defineProperty(h,b,{writable:!0,value:null}),Object.defineProperty(h,y,{writable:!0,value:null}),h.MINLENGTH=function(e,t){return Object(E.a)(h,b)[b]={MINLENGTH:e},Object(m.a)({},Object(E.a)(h,b)[b],{errorMessage:t})},h.CUSTOMVALIDATORS=function(){for(var e=new Map,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return a.forEach((function(t){var a=Object(d.a)(t,3),r=a[0],n=a[1],o=a[2];e.set(r,{errFunc:n,errorMessage:o})})),e};var g=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"EMAIL",get:function(){return"EMAIL"}}]),e}(),O=h,j=(a(18),p(function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).requiredAplhaNumeric=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1===e.search("@")},e.formEl={name:"formEl",valid:!1,touched:!1,email:{name:"email",type:"email",valid:!1,touched:!1,value:"",errorMessage:"",validators:[O.REQUIRED("Email Required"),O.REQUIREDPATTERN([g.EMAIL,"Enter a valid email address"])]},city:{name:"city",valid:!1,touched:!1,value:"",errorMessage:"",data:[["PLEASE SELECT A CITY",""],["KOLKATA","KOLKATA"],["MUMBAI","MUMBAI"],["BANGALORE","BANGALORE"]],validators:[O.REQUIRED("Select a City")]},password:{name:"password",type:"password",valid:!1,touched:!1,value:"",errorMessage:"",validators:[O.REQUIRED("Password Required"),O.MINLENGTH(6,"Password must be of atleast 6 characters")],customValidators:O.CUSTOMVALIDATORS(["REQUIRED_ALPHA_NUMERIC",e.requiredAplhaNumeric,"Password need to contain alpha numeric characters"])}},e.submitHandler=function(e){e.preventDefault()},e.onElementChange=function(t,a){e.props.updateFormState(t,a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.formEl?n.a.createElement("form",{onSubmit:this.submitHandler},n.a.createElement("label",{htmlFor:this.props.formEl.email.name},"Name : "),n.a.createElement("input",{type:this.props.formEl.email.type,id:"email",name:this.props.formEl.email.name,value:this.props.formEl.email.value,autoComplete:this.props.formEl.email.name,onChange:function(t){return e.onElementChange(t,e.props.formEl.email.name)}}),n.a.createElement("span",{className:!this.props.formEl.email.valid&&this.props.formEl.email.touched?"text-danger":"text-hide"}," *",this.props.formEl.email.errorMessage," "),n.a.createElement("label",{htmlFor:this.props.formEl.password.name},"Password : "),n.a.createElement("input",{type:this.props.formEl.password.type,id:"name",name:this.props.formEl.password.name,value:this.props.formEl.password.value,autoComplete:this.props.formEl.password.name,onChange:function(t){return e.onElementChange(t,e.props.formEl.password.name)}}),n.a.createElement("span",{className:!this.props.formEl.password.valid&&this.props.formEl.password.touched?"text-danger":"text-hide"}," *",this.props.formEl.password.errorMessage," "),n.a.createElement("label",{htmlFor:this.props.formEl.city.name},"SELECT A CITY : "),n.a.createElement("select",{id:"city",name:this.props.formEl.city.name,value:this.props.formEl.city.value,autoComplete:this.props.formEl.city.name,onChange:function(t){return e.onElementChange(t,e.props.formEl.city.name)}},this.props.formEl.city.data.map((function(e){return n.a.createElement("option",{key:e[1],value:e[1]},e[0])}))),n.a.createElement("span",{className:!this.props.formEl.city.valid&&this.props.formEl.city.touched?"text-danger":"text-hide"}," *",this.props.formEl.city.errorMessage," "),n.a.createElement("button",{type:"submit",disabled:!this.props.formEl.valid},"SignUp")):null,n.a.createElement("div",{className:"showDetails"},n.a.createElement("fieldset",null,n.a.createElement("legend",null,"Features"),n.a.createElement("p",null,"Form elements validation decoupled from your logic"),n.a.createElement("p",null,'Configuring "form element validation" made simple'),n.a.createElement("p",null,"Have a look at the src file!!"),n.a.createElement("p",null,'More details can be found in "',n.a.createElement("span",null,"readme.txt"),'" attached with this project'))))}},{key:"componentDidMount",value:function(){this.props.connectState(this.formEl)}}]),a}(r.Component))),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4d82a312.chunk.js.map