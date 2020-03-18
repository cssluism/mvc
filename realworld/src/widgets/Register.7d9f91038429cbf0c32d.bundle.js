/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonprealworld_app=window.dojoWebpackJsonprealworld_app||[]).push([["src/widgets/Register"],{56:function(e,t,s){"use strict";s.r(t),s.d(t,"Register",function(){return i});var o=s(18),a=s(34),c=s(23),r=s(19),l=s(29),n=s(33);const i=Object(o.a)({icache:a.a,store:r.a})(function({middleware:{store:e,icache:t}}){const{get:s,path:a,executor:r}=e,i=s(a("register","isLoading")),u=s(a("errors")),g=t.get("email")||"",p=t.get("username")||"",d=t.get("password")||"";return Object(o.g)("div",{classes:["auth-page"]},Object(o.g)("div",{classes:["container","page"]},Object(o.g)("div",{classes:["row"]},Object(o.g)("div",{classes:["col-md-6","offset-md-3","col-xs-12"]},Object(o.g)("h1",{classes:["text-xs-center"]},"Sign In"),Object(o.g)("p",{classes:["text-xs-center"]},Object(o.g)(c.b,{to:"login"},"Have an account?")),u&&Object(o.g)(n.a,{errors:u}),Object(o.g)("form",{onsubmit:e=>{e.preventDefault(),r(l.c)({username:p,email:g,password:d})}},Object(o.g)("fieldset",null,Object(o.g)("fieldset",{classes:["form-group"]},Object(o.g)("input",{autocomplete:"username",value:p,placeholder:"Username",oninput:function(e){const s=e.target;t.set("username",s.value)},classes:["form-control","form-control-lg"]})),Object(o.g)("fieldset",{classes:["form-group"]},Object(o.g)("input",{autocomplete:"email",value:g,placeholder:"Email",type:"email",oninput:function(e){const s=e.target;t.set("email",s.value)},classes:["form-control","form-control-lg"]})),Object(o.g)("fieldset",{classes:["form-group"]},Object(o.g)("input",{autocomplete:"current-password",value:d,placeholder:"Password",type:"password",oninput:function(e){const s=e.target;t.set("password",s.value)},classes:["form-control","form-control-lg"]}))),Object(o.g)("button",{disabled:i,type:"submit",classes:["btn btn-lg","btn-primary","pull-xs-right"]},"Sign In"))))))});t.default=i}}]);
//# sourceMappingURL=Register.7d9f91038429cbf0c32d.bundle.js.map