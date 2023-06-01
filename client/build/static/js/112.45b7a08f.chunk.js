(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[112],{1707:function(e,t,i){"use strict";i.r(t);var r=i(1),a=i(22),n=i(132),c=i(181),s=i(501),o=i(575),l=i(576),u=i(500),d=i(573),j=i(502),m=i(238),b=i(9),x=i.n(b),h=i(16),f=i(26),p=i(58),v=i(108),y=i(561),O=i(568),g=i(572),A=i(31),w=i(64),C=i(0),S=function(){var e,t=Object(w.a)(),i=Object(A.a)().verifyCode,a=Object(f.g)(),n=Object(f.h)(),s=Object(r.useRef)([]);return Object(r.useEffect)((function(){s.current=s.current.slice(0,6)}),[]),Object(C.jsx)(v.c,{initialValues:{email:(null===(e=a.state)||void 0===e?void 0:e.username)||"",code:["","","","","",""],submit:null},validationSchema:p.f().shape({email:p.h().email("Must be a valid email").max(255).required("Email is required"),code:p.a().of(p.h().required("Code is required"))}),onSubmit:function(){var e=Object(h.a)(x.a.mark((function e(r,a){var c,s,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.setErrors,s=a.setStatus,o=a.setSubmitting,e.prev=1,e.next=4,i(r.email,r.code.join(""));case 4:n("/authentication/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),t.current&&(s({success:!1}),c({submit:e.t0.message}),o(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,i){return e.apply(this,arguments)}}(),children:function(e){var t,i=e.errors,r=e.handleBlur,n=e.handleChange,o=e.handleSubmit,l=e.isSubmitting,d=e.setFieldValue,j=e.touched,m=e.values;return Object(C.jsxs)("form",{noValidate:!0,onSubmit:o,children:[(null===(t=a.state)||void 0===t?void 0:t.username)?Object(C.jsx)(y.a,{disabled:!0,fullWidth:!0,margin:"normal",value:a.state.username,variant:"outlined"}):Object(C.jsx)(y.a,{autoFocus:!0,error:Boolean(j.email&&i.email),fullWidth:!0,helperText:j.email&&i.email,label:"Email Address",margin:"normal",name:"email",onBlur:r,onChange:n,type:"email",value:m.email,variant:"outlined"}),Object(C.jsx)(u.a,{color:"textSecondary",sx:{mb:2,mt:3},variant:"subtitle2",children:"Verification code"}),Object(C.jsx)(c.a,{sx:{display:"grid",columnGap:"16px",gridTemplateColumns:"repeat(7, 1fr)",pt:1},children:[1,2,3,4,5,6].map((function(e,t){return Object(C.jsx)(y.a,{error:Boolean(Array.isArray(j.code)&&6===j.code.length&&i.code),fullWidth:!0,inputRef:function(e){return s.current[t]=e},name:"code[".concat(t,"]"),onBlur:r,onKeyDown:function(e){if("ENTER"===e.code){if(m.code[t])return void d("code[".concat(t,"]"),"");if(t>0)return d("code[".concat(t,"]"),""),void s.current[t-1].focus()}Number.isInteger(parseInt(e.key,10))&&(d("code[".concat(t,"]"),e.key),t<5&&s.current[t+1].focus())},onPaste:function(e){var t=e.clipboardData.getData("text").split("");if(6===t.length){var i=!0;t.forEach((function(e){Number.isInteger(parseInt(e,10))||(i=!1)})),i&&(d("code",t),s.current[5].focus())}},value:m.code[t],sx:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}},variant:"outlined"},"code-".concat(t))}))}),Boolean(Array.isArray(j.code)&&6===j.code.length&&i.code)&&Object(C.jsx)(O.a,{error:!0,sx:{mx:"14px"},children:Array.isArray(i.code)&&i.code.find((function(e){return void 0!==e}))}),i.submit&&Object(C.jsx)(c.a,{sx:{mt:3},children:Object(C.jsx)(O.a,{error:!0,children:i.submit})}),Object(C.jsx)(c.a,{sx:{mt:3},children:Object(C.jsx)(g.a,{color:"primary",disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Verify"})})]})}})},k=i(52),B=i(134),E={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"};t.default=function(){var e=Object(A.a)().platform;return Object(r.useEffect)((function(){B.a.push({event:"page_view"})}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(n.a,{children:Object(C.jsx)("title",{children:"Verify Code | Material Kit Pro"})}),Object(C.jsxs)(c.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[Object(C.jsx)(m.a,{}),Object(C.jsxs)(s.a,{maxWidth:"sm",sx:{py:10},children:[Object(C.jsx)(c.a,{sx:{display:"flex",justifyContent:"center"},children:Object(C.jsx)(a.b,{to:"/",children:Object(C.jsx)(k.a,{sx:{height:40,width:40}})})}),Object(C.jsx)(c.a,{sx:{display:"flex",justifyContent:"center",mb:8}}),Object(C.jsx)(o.a,{children:Object(C.jsxs)(l.a,{sx:{display:"flex",flexDirection:"column",p:4},children:[Object(C.jsxs)(c.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(u.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Verify Code"}),Object(C.jsx)(u.a,{color:"textSecondary",variant:"body2",children:"Confirm registration using your verification code"})]}),Object(C.jsx)(c.a,{sx:{height:32,"& > img":{maxHeight:"100%",width:"auto"}},children:Object(C.jsx)("img",{alt:"Auth platform",src:E[e]})})]}),Object(C.jsx)(c.a,{sx:{flexGrow:1,mt:3},children:"Amplify"===e&&Object(C.jsx)(S,{})}),Object(C.jsx)(d.a,{sx:{my:3}}),"Amplify"===e&&Object(C.jsx)(j.a,{color:"textSecondary",component:a.b,to:"/authentication/password-recovery",variant:"body2",children:"Did you not receive the code?"})]})})]})]})]})}}}]);
//# sourceMappingURL=112.45b7a08f.chunk.js.map