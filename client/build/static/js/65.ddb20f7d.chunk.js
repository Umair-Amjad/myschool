(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[65],{1704:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),c=n(16),o=n(14),i=n(1),s=n(26),l=n(132),j=n(181),u=n(501),d=n(18),h=n(28),b=n(86),x=n(22),p=(n(621),n(575)),O=n(561),m=n(574),v=n(892),f=n(644),g=n(572),w=n(581),y=n(582),S=n(583),C=n(584),_=n(585),k=n(502),P=n(500),B=n(1710),T=(n(45),n(188)),R=(n(613),n(1201),n(1212),n(1234),n(1729),n(1233),n(0));var z=n(136),E=(n(606),n(607)),I=[{label:"Newest first",value:"createdAt|desc"},{label:"Oldest first",value:"createdAt|asc"}],W=function(e){var t=e.invoices,n=e.refresh,a=e.setRefresh,r=Object(b.a)(e,["invoices","refresh","setRefresh"]),c=Object(i.useState)([]),s=Object(o.a)(c,2),l=s[0],u=s[1],W=Object(i.useState)(0),L=Object(o.a)(W,2),N=L[0],A=L[1],M=Object(i.useState)(10),D=Object(o.a)(M,2),V=D[0],H=D[1],F=Object(i.useState)(""),J=Object(o.a)(F,2),U=J[0],q=J[1],Y=Object(i.useState)(I[0].value),K=Object(o.a)(Y,2),G=K[0],Q=K[1],X=Object(i.useState)({status:null}),Z=Object(o.a)(X,2),$=Z[0],ee=(Z[1],function(e){u(e.target.checked?t.map((function(e){return e.id})):[])}),te=function(e,t,n){return e.filter((function(e){var a=!0;if(t){var r=!1;["name","phone"].forEach((function(n){e[n].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(a=!1)}return n.status&&e.status!==n.status&&(a=!1),a}))}(t,U,$),ne=function(e,t,n){return e.slice(t*n,t*n+n)}(te,N,V),ae=l.length>0,re=l.length>0&&l.length<t.length,ce=l.length===t.length;return Object(R.jsxs)(p.a,Object(d.a)(Object(d.a)({},r),{},{children:[Object(R.jsxs)(j.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1,p:2},children:[Object(R.jsx)(j.a,{sx:{m:1,maxWidth:"100%",width:500},children:Object(R.jsx)(O.a,{fullWidth:!0,InputProps:{startAdornment:Object(R.jsx)(m.a,{position:"end",children:Object(R.jsx)(T.a,{fontSize:"small"})})},onChange:function(e){q(e.target.value)},placeholder:"Search invoices by Student Name",value:U,variant:"outlined"})}),Object(R.jsx)(j.a,{sx:{m:1,maxWidth:"100%",width:240},children:Object(R.jsx)(O.a,{fullWidth:!0,label:"Sort By",name:"sort",onChange:function(e){Q(e.target.value)},select:!0,SelectProps:{native:!0},value:G,variant:"outlined",children:I.map((function(e){return Object(R.jsx)("option",{value:e.value,children:e.label},e.value)}))})})]}),ae&&Object(R.jsx)(j.a,{sx:{position:"relative"},children:Object(R.jsx)(v.a,{direction:"row",children:Object(R.jsxs)(j.a,{sx:{backgroundColor:"background.paper",mt:"6px",position:"absolute",px:"4px",width:"100%",zIndex:2},children:[Object(R.jsx)(f.a,{checked:ce,color:"primary",indeterminate:re,onChange:ee}),Object(R.jsx)(g.a,{color:"primary",sx:{ml:2},variant:"outlined",onClick:function(){if(1==confirm("Are You Sure You Want to Delete ")){var e="";l.forEach((function(t){e=t+","+e}));var t={id:e=e.slice(0,-1)};Object(E.a)().delete("http://localhost:8000/tranport/delete",{data:t}).then((function(e){e.data.json,a(!n),u([])}))}else u(Object(h.a)(l))},children:"Delete"}),Object(R.jsx)(g.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Edit"})]})})}),Object(R.jsx)(z.a,{children:Object(R.jsx)(j.a,{sx:{minWidth:1200},children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(y.a,{children:Object(R.jsxs)(S.a,{children:[Object(R.jsx)(C.a,{padding:"checkbox",children:Object(R.jsx)(f.a,{checked:ce,color:"primary",indeterminate:re,onChange:ee})}),Object(R.jsx)(C.a,{children:"Name"}),Object(R.jsx)(C.a,{children:"Mobile"}),Object(R.jsx)(C.a,{children:"LICENSE NO"}),Object(R.jsx)(C.a,{children:"VEHICLE NO"}),Object(R.jsx)(C.a,{children:"ROUTE NAME"})]})}),Object(R.jsx)(_.a,{children:ne.map((function(e){var t=l.includes(e.id);return Object(R.jsxs)(S.a,{hover:!0,selected:t,children:[Object(R.jsx)(C.a,{padding:"checkbox",children:Object(R.jsx)(f.a,{checked:t,color:"primary",onChange:function(t){return n=e.id,void(l.includes(n)?u((function(e){return e.filter((function(e){return e!==n}))})):u((function(e){return[].concat(Object(h.a)(e),[n])})));var n},value:t})}),Object(R.jsxs)(C.a,{children:[Object(R.jsx)(k.a,{color:"textPrimary",component:x.b,to:"#",underline:"none",variant:"subtitle2",children:e.name}),Object(R.jsx)(P.a,{color:"textSecondary",variant:"body2",children:e.email})]}),Object(R.jsx)(C.a,{children:e.phone}),Object(R.jsx)(C.a,{children:e.License_no}),Object(R.jsx)(C.a,{children:e.vehicle_no}),Object(R.jsx)(C.a,{children:e.route_name})]},e.id)}))})]})})}),Object(R.jsx)(B.a,{component:"div",count:te.length,onPageChange:function(e,t){A(t)},onRowsPerPageChange:function(e){H(parseInt(e.target.value,10))},page:N,rowsPerPage:V,rowsPerPageOptions:[5,10,25]})]}))},L=n(133),N=n(134),A=n(860),M=n(120);t.default=function(){var e=Object(L.a)().settings,t=Object(s.i)().id;console.log(t);var n=Object(i.useState)([]),a=Object(o.a)(n,2),d=a[0],h=a[1],b=Object(i.useState)(!1),x=Object(o.a)(b,2),p=x[0],O=x[1],m=Object(i.useState)(!1),v=Object(o.a)(m,2),f=v[0],g=v[1];return Object(i.useEffect)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.getCall("tranport/transports");case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)}))),[p,f]),Object(i.useEffect)((function(){N.a.push({event:"page_view"})}),[]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(l.a,{children:Object(R.jsx)("title",{children:"Dashboard: Invoice List | Material Kit Pro"})}),Object(R.jsx)(j.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(R.jsxs)(u.a,{maxWidth:!!e.compact&&"xl",children:[Object(R.jsx)(A.a,{rows:d,open:p,setOpen:O,text:"Transport",dashText:"Transport Detail"}),Object(R.jsx)(j.a,{sx:{mt:3},children:Object(R.jsx)(W,{setRefresh:g,refresh:f,invoices:d})})]})})]})}},598:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=c},602:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload");t.a=c},606:function(e,t,n){"use strict";n(18),n(607)},607:function(e,t,n){"use strict";var a=n(45),r=n.n(a),c=(n(96),JSON.parse(localStorage.getItem("accessToken")));t.a=function(){var e=r.a.create({baseURL:"http://localhost:8000/",headers:{authorization:"bearer ".concat(c)}});return e.interceptors.response.use((function(e){return new Promise((function(t,n){t(e)}))}),(function(e){return e.response?(401==e.response.status&&console.log("your are not logedin"),Promise.reject(e)):new Promise((function(t,n){n(e)}))})),e}},613:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=c},616:function(e,t,n){"use strict";var a=n(20),r=n(0),c=Object(a.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=c},860:function(e,t,n){"use strict";n(1);var a=n(647),r=n(500),c=n(181),o=n(572),i=n(663),s=n(502),l=n(22),j=n(602),u=n(598),d=n(220),h=n(501),b=n(552),x=n(616),p=n(9),O=n.n(p),m=n(16),v=n(58),f=n(108),g=(n(45),n(892)),w=n(561),y=n(568),S=(n(606),n(120)),C=n(0),_=function(e){var t=e.setOpen,n=e.rows;return console.log("rows",n),Object(C.jsx)(f.c,{initialValues:{name:"",phone:"",license_no:"",vehicle_no:"",route_name:""},validationSchema:v.f().shape({name:v.h().required("Name is required")}),onSubmit:function(){var e=Object(m.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:S.a.postCall("tranport/transport",{name:n.name,phone:n.phone,License_no:n.license_no,vehicle_no:n.vehicle_no,route_name:n.route_name}).then((function(e){e.json})).then((function(e){console.log(e)})),t(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.handleBlur,a=e.handleChange,i=e.handleSubmit,s=e.isSubmitting,l=e.touched,j=e.values;return Object(C.jsxs)("form",{noValidate:!0,onSubmit:i,children:[Object(C.jsx)(r.a,{style:{fontSize:20,color:"black"},children:Object(C.jsx)("strong",{children:"Add Transport"})}),Object(C.jsxs)(g.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},spacing:2,children:[Object(C.jsx)(w.a,{autoFocus:!0,error:Boolean(l.name&&t.name),fullWidth:!0,helperText:l.name&&t.name,label:"Name",margin:"normal",id:"name",onBlur:n,onChange:a,value:j.name,variant:"outlined"}),Object(C.jsx)(w.a,{fullwidth:!0,error:Boolean(l.phone&&t.phone),fullWidth:!0,helperText:l.phone&&t.phone,label:"Mobile",margin:"normal",name:"phone",onBlur:n,onChange:a,type:"phone",value:j.email,variant:"outlined"}),Object(C.jsx)(w.a,{error:Boolean(l.license_no&&t.license_no),helperText:l.license_no&&t.license_no,fullWidth:!0,id:"license_no",label:"LICENSE NO",margin:"normal",onBlur:n,onChange:a,type:"text",value:j.license_no,variant:"outlined"})," ",Object(C.jsx)(w.a,{error:Boolean(l.vehicle_no&&t.vehicle_no),fullWidth:!0,helperText:l.vehicle_no&&t.vehicle_no,label:"vehicle",margin:"normal",id:"vehicle_no",onBlur:n,onChange:a,type:"text",value:j.vehicle_no,variant:"outlined"}),Object(C.jsx)(w.a,{error:Boolean(l.route_name&&t.route_name),fullWidth:!0,helperText:l.route_name&&t.route_name,label:"Route",margin:"normal",id:"route_name",onBlur:n,onChange:a,type:"text",value:j.route_name,variant:"outlined"}),t.submit&&Object(C.jsx)(c.a,{sx:{mt:3},children:Object(C.jsx)(y.a,{error:!0,children:t.submit})}),Object(C.jsx)(c.a,{sx:{mt:2},children:Object(C.jsx)(o.a,{color:"primary",disabled:s,sx:{width:"211px"},size:"large",type:"submit",variant:"contained",children:"Add Trasport"})})]})]})}})},k=n(133),P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,marginTop:2},B=function(e){var t=e.open,n=e.setOpen,a=(e.text,e.rows),r=Object(k.a)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(h.a,{maxWidth:!!r.compact&&"xl",children:[Object(C.jsx)(o.a,{onClick:function(){return n(!0)},color:"primary",startIcon:Object(C.jsx)(x.a,{fontSize:"small"}),sx:{m:1},variant:"contained",children:"Add New"}),Object(C.jsx)(b.a,{open:t,onClose:function(){return n(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(C.jsx)(c.a,{sx:P,children:Object(C.jsx)(_,{rows:a,setOpen:n})})})]})})};t.a=function(e){var t=e.text,n=e.dashText,h=e.open,b=e.setOpen,x=e.rows;return Object(C.jsxs)(a.a,{style:{paddingBottom:"10px",marginTop:-30},container:!0,justifyContent:"space-between",spacing:3,children:[Object(C.jsxs)(a.a,{item:!0,children:[Object(C.jsx)(r.a,{color:"textPrimary",variant:"h5",children:t}),Object(C.jsxs)(i.a,{"aria-label":"breadcrumb",separator:Object(C.jsx)(d.a,{fontSize:"small"}),sx:{mt:1},children:[Object(C.jsx)(s.a,{color:"textPrimary",component:l.b,to:"/dashboard/maindash",variant:"subtitle2",children:"Dashboard"}),Object(C.jsx)(r.a,{color:"textSecondary",variant:"subtitle2",children:n})]}),Object(C.jsxs)(c.a,{sx:{mb:-1,mx:-1,mt:1},children:[Object(C.jsx)(o.a,{color:"primary",startIcon:Object(C.jsx)(j.a,{fontSize:"small"}),sx:{m:1},children:"Import"}),Object(C.jsx)(o.a,{color:"primary",startIcon:Object(C.jsx)(u.a,{fontSize:"small"}),sx:{m:1},children:"Export"})]})]}),"Transport"===t&&Object(C.jsx)(a.a,{item:!0,children:Object(C.jsx)(c.a,{sx:{m:-1},children:Object(C.jsx)(B,{open:h,rows:x,setOpen:b})})})]})}}}]);
//# sourceMappingURL=65.ddb20f7d.chunk.js.map