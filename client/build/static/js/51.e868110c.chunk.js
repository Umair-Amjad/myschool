(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[51],{1312:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),c=n(16),o=n(14),i=n(1),l=n(181),s=n(501),u=n(18),d=n(28),j=n(86),h=n(26),b=n(22),x=n(575),p=n(561),m=n(574),O=n(892),f=n(644),v=n(572),g=n(581),w=n(582),y=n(583),S=n(584),C=n(585),k=n(557),_=n(502),P=n(500),R=n(571),z=n(1710),T=n(188),B=n(613),W=n(617),I=n(136),L=n(120),M=n(224),A=n(622),D=n(0),E=[{label:"2023",value:"2023"},{label:"2022",value:"2022"},{label:"2021",value:"2021"}],N=function(e){var t={notactive:{color:"error",text:"not active"},active:{color:"success",text:"active"}}[e],n=t.text,a=t.color;return Object(D.jsx)(A.a,{color:a,children:n})},V=function(e){var t=e.invoices,n=e.url,a=e.refresh,s=e.setfirst,A=e.navUrl,V=e.setRefresh,F=Object(j.a)(e,["invoices","url","refresh","setfirst","navUrl","setRefresh"]),H=Object(h.h)(),U=Object(i.useState)([]),J=Object(o.a)(U,2),Y=J[0],q=J[1],G=Object(i.useState)(0),K=Object(o.a)(G,2),Q=K[0],X=K[1],Z=Object(i.useState)(10),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ne=Object(i.useState)(""),ae=Object(o.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(i.useState)(E[0].value),ie=Object(o.a)(oe,2),le=ie[0],se=ie[1],ue=Object(i.useState)({status:null}),de=Object(o.a)(ue,2),je=de[0],he=(de[1],function(e){q(e.target.checked?t.map((function(e){return e.id})):[])}),be=function(){var e=Object(c.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1!=confirm("Are Your Sure You Want To delete")){e.next=10;break}return t="",Y.forEach((function(e){t=e+","+t})),t=t.slice(0,-1),c={id:t},e.next=8,L.a.putCall("".concat(n),{data:c}).then((function(e){e.json,q([]),V(!a)}));case 8:e.next=11;break;case 10:q(Object(d.a)(Y));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),xe=function(e,t,n){return e.filter((function(e){var a=!0;if(t){var r=!1;["name","email"].forEach((function(n){e[n],e[n].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(a=!1)}return n.status&&e.status!==n.status&&(a=!1),a}))}(t,re,je),pe=function(e,t,n){return e.slice(t*n,t*n+n)}(xe,Q,ee),me=Y.length>0,Oe=Y.length>0&&Y.length<t.length,fe=Y.length===t.length;return Object(D.jsxs)(x.a,Object(u.a)(Object(u.a)({},F),{},{children:[Object(D.jsxs)(l.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1,p:2},children:[Object(D.jsx)(l.a,{sx:{m:1,maxWidth:"100%",width:500},children:Object(D.jsx)(p.a,{fullWidth:!0,InputProps:{startAdornment:Object(D.jsx)(m.a,{position:"end",children:Object(D.jsx)(T.a,{fontSize:"small"})})},onChange:function(e){ce(e.target.value)},placeholder:"Search invoices by Student Name",value:re,variant:"outlined"})}),Object(D.jsx)(l.a,{sx:{m:1,maxWidth:"100%",width:240},children:Object(D.jsx)(p.a,{fullWidth:!0,label:"Session",name:"sort",onChange:function(e){var t=e.target.value;se(t),s(t)},select:!0,SelectProps:{native:!0},value:le,variant:"outlined",children:E.map((function(e){return Object(D.jsx)("option",{value:e.value,children:e.label},e.value)}))})})]}),me&&Object(D.jsx)(l.a,{sx:{position:"relative"},children:Object(D.jsx)(O.a,{direction:"row",children:Object(D.jsxs)(l.a,{sx:{backgroundColor:"background.paper",mt:"6px",position:"absolute",px:"4px",width:"100%",zIndex:2},children:[Object(D.jsx)(f.a,{checked:fe,color:"primary",indeterminate:Oe,onChange:he}),Object(D.jsx)(v.a,{color:"primary",sx:{ml:2},variant:"outlined",onClick:be,children:"Delete"}),Object(D.jsx)(v.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Edit"})]})})}),Object(D.jsx)(I.a,{children:Object(D.jsx)(l.a,{sx:{minWidth:1200},children:Object(D.jsxs)(g.a,{children:[Object(D.jsx)(w.a,{children:Object(D.jsxs)(y.a,{children:[Object(D.jsx)(S.a,{padding:"checkbox",children:Object(D.jsx)(f.a,{checked:fe,color:"primary",indeterminate:Oe,onChange:he})}),Object(D.jsx)(S.a,{children:"Name"}),Object(D.jsx)(S.a,{children:"Class"}),Object(D.jsx)(S.a,{children:"Section"}),Object(D.jsx)(S.a,{children:"Father Name"}),Object(D.jsx)(S.a,{children:"Status"}),Object(D.jsx)(S.a,{children:"Action"})]})}),Object(D.jsx)(C.a,{children:pe.map((function(e){var t=Y.includes(e.id);return Object(D.jsxs)(y.a,{hover:!0,selected:t,children:[Object(D.jsx)(S.a,{padding:"checkbox",children:Object(D.jsx)(f.a,{checked:t,color:"primary",onChange:function(t){return n=e.id,void(Y.includes(n)?q((function(e){return e.filter((function(e){return e!==n}))})):q((function(e){return[].concat(Object(d.a)(e),[n])})));var n},value:t})}),Object(D.jsx)(S.a,{children:Object(D.jsxs)(l.a,{sx:{alignItems:"center",display:"flex"},children:[Object(D.jsx)(k.a,{src:"http://localhost:8000/uploads/".concat(e.student_image),sx:{height:42,width:42},children:Object(M.a)(e.name)}),Object(D.jsxs)(l.a,{sx:{ml:1},children:[Object(D.jsx)(_.a,{color:"textPrimary",component:b.b,to:"#",underline:"none",variant:"subtitle2",children:e.name}),Object(D.jsx)(P.a,{color:"textSecondary",variant:"body2",children:e.email})]})]})}),Object(D.jsx)(S.a,{children:e.class}),Object(D.jsx)(S.a,{children:e.section}),Object(D.jsx)(S.a,{children:e.fname}),Object(D.jsx)(S.a,{children:N(e.status)}),Object(D.jsx)(S.a,{align:"left",children:Object(D.jsxs)(O.a,{direction:"row",children:[Object(D.jsx)(R.a,{title:"Edit",children:Object(D.jsx)(W.a,{onClick:function(){return H("/dashboard/".concat(A),{state:{row:e}})},fontSize:"small",color:"action"})}),Object(D.jsx)(R.a,{title:" Detail",children:Object(D.jsx)(B.a,{fontSize:"small",color:"action",onClick:function(){return H("/dashboard/Student-detail",{state:{row:e}})}})})]})})]},e.id)}))})]})})}),Object(D.jsx)(z.a,{component:"div",count:xe.length,onPageChange:function(e,t){X(t)},onRowsPerPageChange:function(e){te(parseInt(e.target.value,10))},page:Q,rowsPerPage:ee,rowsPerPageOptions:[5,10,25]})]}))},F=(n(45),n(606),n(132)),H=n(860),U=n(133);t.default=function(){var e=Object(U.a)(),t=(Object(h.h)(),Object(i.useState)([])),n=Object(o.a)(t,2),a=n[0],u=n[1],d=Object(i.useState)(!0),j=Object(o.a)(d,2),b=j[0],x=j[1],p=Object(i.useState)((new Date).getFullYear()),m=Object(o.a)(p,2),O=m[0],f=m[1],v=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.getCalls("list/list",{params:{yearid:O}});case 3:t=e.sent,u(t),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("tikees",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){v()}),[b,O]),Object(i.useEffect)((function(){console.log("first",O)})),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(F.a,{children:Object(D.jsx)("title",{children:"Dashboard: Invoice List | Material Kit Pro"})}),Object(D.jsx)(l.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(D.jsxs)(s.a,{maxWidth:!!e.compact&&"xl",children:[Object(D.jsx)(H.a,{text:"All Student Data",dashText:"Transport Detail"}),Object(D.jsx)(l.a,{sx:{mt:3},children:Object(D.jsx)(V,{setfirst:f,invoices:a,url:"list/del",refresh:b,setRefresh:x,navUrl:"Student-admission-form"})})]})})]})}},598:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=c},602:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload");t.a=c},606:function(e,t,n){"use strict";n(18),n(607)},607:function(e,t,n){"use strict";var a=n(45),r=n.n(a),c=(n(96),JSON.parse(localStorage.getItem("accessToken")));t.a=function(){var e=r.a.create({baseURL:"http://localhost:8000/",headers:{authorization:"bearer ".concat(c)}});return e.interceptors.response.use((function(e){return new Promise((function(t,n){t(e)}))}),(function(e){return e.response?(401==e.response.status&&console.log("your are not logedin"),Promise.reject(e)):new Promise((function(t,n){n(e)}))})),e}},613:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=c},616:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=c},617:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(r.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),Object(r.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt");t.a=c},622:function(e,t,n){"use strict";var a=n(18),r=n(86),c=n(5),o=n(0),i=Object(c.a)("span")((function(e){var t=e.theme,n=e.styleProps,a=t.palette[n.color].main,r=t.palette[n.color].contrastText;return{alignItems:"center",backgroundColor:a,borderRadius:t.shape.borderRadius,color:r,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(11),fontWeight:t.typography.fontWeightMedium,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingBottom:t.spacing(.5),paddingLeft:t.spacing(1),paddingRight:t.spacing(1),paddingTop:t.spacing(.5),textTransform:"uppercase",whiteSpace:"nowrap"}}));t.a=function(e){var t=e.color,n=void 0===t?"success":t,c=e.children,l=Object(r.a)(e,["color","children"]),s={color:n};return Object(o.jsx)(i,Object(a.a)(Object(a.a)({styleProps:s},l),{},{children:c}))}},860:function(e,t,n){"use strict";n(1);var a=n(647),r=n(500),c=n(181),o=n(572),i=n(663),l=n(502),s=n(22),u=n(602),d=n(598),j=n(220),h=n(501),b=n(552),x=n(616),p=n(9),m=n.n(p),O=n(16),f=n(58),v=n(108),g=(n(45),n(892)),w=n(561),y=n(568),S=(n(606),n(120)),C=n(0),k=function(e){var t=e.setOpen,n=e.rows;return console.log("rows",n),Object(C.jsx)(v.c,{initialValues:{name:"",phone:"",license_no:"",vehicle_no:"",route_name:""},validationSchema:f.f().shape({name:f.h().required("Name is required")}),onSubmit:function(){var e=Object(O.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:S.a.postCall("tranport/transport",{name:n.name,phone:n.phone,License_no:n.license_no,vehicle_no:n.vehicle_no,route_name:n.route_name}).then((function(e){e.json})).then((function(e){console.log(e)})),t(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.handleBlur,a=e.handleChange,i=e.handleSubmit,l=e.isSubmitting,s=e.touched,u=e.values;return Object(C.jsxs)("form",{noValidate:!0,onSubmit:i,children:[Object(C.jsx)(r.a,{style:{fontSize:20,color:"black"},children:Object(C.jsx)("strong",{children:"Add Transport"})}),Object(C.jsxs)(g.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},spacing:2,children:[Object(C.jsx)(w.a,{autoFocus:!0,error:Boolean(s.name&&t.name),fullWidth:!0,helperText:s.name&&t.name,label:"Name",margin:"normal",id:"name",onBlur:n,onChange:a,value:u.name,variant:"outlined"}),Object(C.jsx)(w.a,{fullwidth:!0,error:Boolean(s.phone&&t.phone),fullWidth:!0,helperText:s.phone&&t.phone,label:"Mobile",margin:"normal",name:"phone",onBlur:n,onChange:a,type:"phone",value:u.email,variant:"outlined"}),Object(C.jsx)(w.a,{error:Boolean(s.license_no&&t.license_no),helperText:s.license_no&&t.license_no,fullWidth:!0,id:"license_no",label:"LICENSE NO",margin:"normal",onBlur:n,onChange:a,type:"text",value:u.license_no,variant:"outlined"})," ",Object(C.jsx)(w.a,{error:Boolean(s.vehicle_no&&t.vehicle_no),fullWidth:!0,helperText:s.vehicle_no&&t.vehicle_no,label:"vehicle",margin:"normal",id:"vehicle_no",onBlur:n,onChange:a,type:"text",value:u.vehicle_no,variant:"outlined"}),Object(C.jsx)(w.a,{error:Boolean(s.route_name&&t.route_name),fullWidth:!0,helperText:s.route_name&&t.route_name,label:"Route",margin:"normal",id:"route_name",onBlur:n,onChange:a,type:"text",value:u.route_name,variant:"outlined"}),t.submit&&Object(C.jsx)(c.a,{sx:{mt:3},children:Object(C.jsx)(y.a,{error:!0,children:t.submit})}),Object(C.jsx)(c.a,{sx:{mt:2},children:Object(C.jsx)(o.a,{color:"primary",disabled:l,sx:{width:"211px"},size:"large",type:"submit",variant:"contained",children:"Add Trasport"})})]})]})}})},_=n(133),P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,marginTop:2},R=function(e){var t=e.open,n=e.setOpen,a=(e.text,e.rows),r=Object(_.a)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(h.a,{maxWidth:!!r.compact&&"xl",children:[Object(C.jsx)(o.a,{onClick:function(){return n(!0)},color:"primary",startIcon:Object(C.jsx)(x.a,{fontSize:"small"}),sx:{m:1},variant:"contained",children:"Add New"}),Object(C.jsx)(b.a,{open:t,onClose:function(){return n(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(C.jsx)(c.a,{sx:P,children:Object(C.jsx)(k,{rows:a,setOpen:n})})})]})})};t.a=function(e){var t=e.text,n=e.dashText,h=e.open,b=e.setOpen,x=e.rows;return Object(C.jsxs)(a.a,{style:{paddingBottom:"10px",marginTop:-30},container:!0,justifyContent:"space-between",spacing:3,children:[Object(C.jsxs)(a.a,{item:!0,children:[Object(C.jsx)(r.a,{color:"textPrimary",variant:"h5",children:t}),Object(C.jsxs)(i.a,{"aria-label":"breadcrumb",separator:Object(C.jsx)(j.a,{fontSize:"small"}),sx:{mt:1},children:[Object(C.jsx)(l.a,{color:"textPrimary",component:s.b,to:"/dashboard/maindash",variant:"subtitle2",children:"Dashboard"}),Object(C.jsx)(r.a,{color:"textSecondary",variant:"subtitle2",children:n})]}),Object(C.jsxs)(c.a,{sx:{mb:-1,mx:-1,mt:1},children:[Object(C.jsx)(o.a,{color:"primary",startIcon:Object(C.jsx)(u.a,{fontSize:"small"}),sx:{m:1},children:"Import"}),Object(C.jsx)(o.a,{color:"primary",startIcon:Object(C.jsx)(d.a,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),"Transport"===t&&Object(C.jsx)(a.a,{item:!0,children:Object(C.jsx)(c.a,{sx:{m:-1},children:Object(C.jsx)(R,{open:h,rows:x,setOpen:b})})})]})}}}]);
//# sourceMappingURL=51.e868110c.chunk.js.map