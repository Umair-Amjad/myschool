(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[67],{1253:function(e,t,a){"use strict";var n=a(9),c=a.n(n),s=a(16),r=a(14),i=a(1),l=a(58),o=a(181),d=a(564),j=a(565),u=a(553),b=a(577),m=a(572),x=a(645),h=a(108),p=(a(45),a(631)),O=a(607),f=a(0),g=Object(x.a)({table:{minWidth:700},hedds:{width:"20%",margin:"8px 10px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px"},feild:{width:"20%",marginLeft:8},feilds:{width:"20%",marginLeft:8,marginBottom:10}});t.a=function(e){e.subject;var t=e.getSubjectData,a=e.setabc,n=g(),x=Object(i.useState)([]),v=Object(r.a)(x,2),w=v[0],S=v[1],y=Object(i.useState)([]),N=Object(r.a)(y,2),C=N[0],E=N[1],k=Object(i.useState)([]),z=Object(r.a)(k,2),G=z[0],L=z[1],R=Object(i.useState)([]),P=Object(r.a)(R,2),W=P[0],I=P[1];return Object(i.useEffect)(Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)().get("http://localhost:8000/exams/examsgroup");case 2:return t=e.sent,S(t.data),e.next=6,Object(O.a)().get("http://localhost:8000/exams/examsName");case 6:a=e.sent,E(a.data),Object(p.a)("class/api").then((function(e){L(e)})),Object(p.a)("class/api/section").then((function(e){I(e)}));case 12:case"end":return e.stop()}}),e)}))),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.c,{initialValues:{examsGroup:"",examsName:"",classid:"",sectionid:""},validationSchema:l.f().shape({}),onSubmit:function(){var e=Object(s.a)(c.a.mark((function e(n,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setErrors,s.setStatus,s.setSubmitting,t(n),a(n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur;var t=e.handleChange,a=e.handleSubmit,c=e.isSubmitting,s=(e.setFieldValue,e.setFieldTouched,e.touched,e.values);return Object(f.jsx)("form",{onSubmit:a,children:Object(f.jsxs)(o.a,{sx:{mt:2},children:[Object(f.jsxs)(d.a,{className:n.feilds,children:[Object(f.jsx)(j.a,{id:"examsGroup",children:"Exams Group"}),Object(f.jsx)(u.a,{fullWidth:!0,labelId:"examsGroup",value:s.examsGroup,onChange:t,id:"examsGroup",label:"exams Group",name:"examsGroup",children:w.map((function(e){return Object(f.jsx)(b.a,{value:e.id,children:e.name},e.id)}))})]}),Object(f.jsxs)(d.a,{className:n.feilds,children:[Object(f.jsx)(j.a,{id:"examsName",children:"Exams Name"}),Object(f.jsx)(u.a,{fullWidth:!0,labelId:"examsName",value:s.examsName,onChange:t,id:"examsName",label:"exams Name",name:"examsName",children:C.map((function(e){return Object(f.jsx)(b.a,{value:e.id,children:e.name},e.id)}))})]}),Object(f.jsxs)(d.a,{className:n.feild,children:[Object(f.jsx)(j.a,{id:"classid",children:"Department/Class"}),Object(f.jsx)(u.a,{fullWidth:!0,labelId:"classid",value:s.classid,onChange:t,id:"classid",label:"Department/Class",name:"classid",children:G.map((function(e){return Object(f.jsx)(b.a,{value:e.id,children:e.className},e.id)}))})]}),Object(f.jsxs)(d.a,{className:n.feild,children:[Object(f.jsx)(j.a,{id:"sectionid",children:"Section"}),Object(f.jsx)(u.a,{fullWidth:!0,labelId:"sectionid",value:s.sectionid,onChange:t,id:"sectionid",label:"Section",name:"sectionid",children:W.map((function(e){return Object(f.jsx)(b.a,{value:e.id,children:e.name},e.id)}))})]}),Object(f.jsx)(m.a,{sx:{mt:1,mr:2,ml:2},color:"primary",disabled:c,type:"submit",variant:"contained",children:"Search"})]})})}})})}},1649:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a.n(n),s=a(16),r=a(14),i=a(1),l=a(645),o=a(581),d=a(585),j=a(584),u=a(754),b=a(582),m=a(583),x=a(560),h=a(181),p=a(501),O=a(647),f=a(500),g=a(663),v=a(502),w=a(572),S=a(132),y=a(22),N=a(133),C=a(220),E=a(602),k=a(598),z=(a(616),a(45),a(1253),a(120)),G=a(0),L=Object(l.a)((function(e){return{table:{minWidth:650},TableContainer:{borderRadius:15,margin:"10px ,10px",maxWidth:1050},TableCell:{fontWeight:"bold",backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.error.dark)}}}));t.default=function(){var e=L(),t=Object(N.a)().settings,a=Object(i.useState)([]),n=Object(r.a)(a,2),l=n[0],R=n[1];return Object(i.useEffect)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.getCall("exams/total-Exams");case 2:t=e.sent,R(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(S.a,{children:Object(G.jsx)("title",{children:"Dashboard: Examination "})}),Object(G.jsx)(h.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:1},children:Object(G.jsxs)(p.a,{maxWidth:!!t.compact&&"xl",children:[Object(G.jsx)(O.a,{container:!0,justifyContent:"space-between",spacing:3,children:Object(G.jsxs)(O.a,{item:!0,children:[Object(G.jsx)(f.a,{color:"textPrimary",variant:"h5",children:"Exam Group List"}),Object(G.jsxs)(g.a,{"aria-label":"breadcrumb",separator:Object(G.jsx)(C.a,{fontSize:"small"}),sx:{mt:1},children:[Object(G.jsx)(v.a,{color:"textPrimary",component:y.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(G.jsx)(f.a,{color:"textSecondary",children:"Exam Group List"}),Object(G.jsx)(v.a,{color:"textPrimary",component:y.b,to:"/dashboard/examsList",variant:"subtitle2",children:"Exam List"}),Object(G.jsx)(v.a,{color:"textPrimary",component:y.b,to:"/dashboard/assign-student",variant:"subtitle2",children:"Assign Student"}),Object(G.jsx)(v.a,{color:"textPrimary",component:y.b,to:"/dashboard/examsSubject",variant:"subtitle2",children:"Exams Subjects"})]}),Object(G.jsxs)(h.a,{sx:{mb:-1,mx:-1,mt:1},children:[Object(G.jsx)(w.a,{color:"primary",startIcon:Object(G.jsx)(E.a,{fontSize:"small"}),sx:{m:1},variant:"text",children:"Import"}),Object(G.jsx)(w.a,{color:"primary",startIcon:Object(G.jsx)(k.a,{fontSize:"small"}),sx:{m:1},variant:"text",children:"Export"})]})]})}),Object(G.jsx)(u.a,{component:x.a,children:Object(G.jsxs)(o.a,{className:e.table,"aria-label":"caption table",children:[Object(G.jsx)(b.a,{className:e.TableCell,children:Object(G.jsxs)(m.a,{children:[Object(G.jsx)(j.a,{children:"Name"}),Object(G.jsx)(j.a,{align:"right",children:"No Of Exams"}),Object(G.jsx)(j.a,{align:"right",children:"Exams Type"}),Object(G.jsx)(j.a,{align:"right",children:"Action"})]})}),Object(G.jsx)(d.a,{children:l.map((function(e){return Object(G.jsxs)(m.a,{children:[Object(G.jsx)(j.a,{component:"th",scope:"row",children:e.name}),Object(G.jsx)(j.a,{align:"right",children:e.noexams}),Object(G.jsx)(j.a,{align:"right",children:e.examtype}),Object(G.jsx)(j.a,{align:"right",children:Object(G.jsx)(w.a,{style:{marginRight:5},size:"small",variant:"contained",color:"primary",children:"New Exams"})})]},e.id)}))})]})})]})})]})}},598:function(e,t,a){"use strict";var n=a(20),c=a(0),s=Object(n.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=s},602:function(e,t,a){"use strict";var n=a(20),c=a(0),s=Object(n.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload");t.a=s},606:function(e,t,a){"use strict";a(18),a(607)},607:function(e,t,a){"use strict";var n=a(45),c=a.n(n),s=(a(96),JSON.parse(localStorage.getItem("accessToken")));t.a=function(){var e=c.a.create({baseURL:"http://localhost:8000/",headers:{authorization:"bearer ".concat(s)}});return e.interceptors.response.use((function(e){return new Promise((function(t,a){t(e)}))}),(function(e){return e.response?(401==e.response.status&&console.log("your are not logedin"),Promise.reject(e)):new Promise((function(t,a){a(e)}))})),e}},616:function(e,t,a){"use strict";var n=a(20),c=a(0),s=Object(n.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=s},631:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(9),c=a.n(n),s=a(16),r=(a(45),a(120)),i=(a(606),function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.getCall("".concat(t));case 2:return a=e.sent,e.next=5,a;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=67.511f1e41.chunk.js.map