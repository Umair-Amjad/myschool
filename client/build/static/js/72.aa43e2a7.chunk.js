(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[72],{1224:function(e,t,a){"use strict";var n=a(18),s=a(9),c=a.n(s),r=a(16),i=a(28),l=a(14),o=a(86),u=a(1),d=a(58),j=a(575),b=a(561),m=a(181),x=a(572),h=a(645),O=a(573),p=a(581),f=a(585),v=a(584),S=a(754),g=a(582),k=a(583),w=a(108),y=a(0),N=Object(h.a)({table:{minWidth:650}});t.a=function(e){var t=e.student,a=(e.Omarks,e.onSave),s=e.studentsMarks,h=e.setStudent,C=Object(o.a)(e,["student","Omarks","onSave","studentsMarks","setStudent"]),M=N(),E=Object(u.useState)({ObtMarks:""}),G=Object(l.a)(E,2),I=G[0],F=G[1],L=Object(u.useState)(null),R=Object(l.a)(L,2),z=(R[0],R[1]);return Object(u.useEffect)((function(){console.log(I)}),[I]),Object(y.jsx)(w.c,{initialValues:{ObtMarks:I,submit:null},validationSchema:d.f().shape({}),onSubmit:function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setErrors,n.setStatus,n.setSubmitting;try{a&&a()}catch(t){console.error(t),z(t.message)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur,e.handleChange;var a=e.handleSubmit,c=e.isSubmitting;e.setFieldValue,e.setFieldTouched,e.touched,e.values;return Object(y.jsx)("form",Object(n.a)(Object(n.a)({onSubmit:a},C),{},{children:t.length>0&&Object(y.jsxs)(j.a,{sx:{p:3,mt:2},children:[Object(y.jsx)(O.a,{}),Object(y.jsx)(S.a,{children:Object(y.jsxs)(p.a,{className:M.table,"aria-label":"simple table",children:[Object(y.jsx)(g.a,{children:Object(y.jsxs)(k.a,{children:[Object(y.jsx)(v.a,{children:"Roll No"}),Object(y.jsx)(v.a,{colSpan:1,children:"Student Name"}),Object(y.jsx)(v.a,{colSpan:1,children:"Gender"}),Object(y.jsx)(v.a,{colSpan:1,children:"Father Name"}),Object(y.jsx)(v.a,{children:"Marks Obtain "})]})}),Object(y.jsx)(f.a,{children:t.length>0?t.map((function(e,a){return Object(y.jsxs)(k.a,{children:[Object(y.jsx)(v.a,{component:"th",children:e.rollno}),Object(y.jsx)(v.a,{children:"".concat(e.name)}),Object(y.jsx)(v.a,{children:e.gender}),Object(y.jsx)(v.a,{children:e.fname}),Object(y.jsx)(v.a,{children:Object(y.jsx)(b.a,{onChange:function(n){!function(e,a){var n=Object(i.a)(t);F(n[a][e.target.name]=e.target.value),h(n),console.log(e.target.value)}(n,a),s(e,n.target.value)},value:I.ObtMarks,name:"ObtMarks",type:"number",placeholder:"Enter Marks"})})]},e.id)})):null})]})}),Object(y.jsxs)(m.a,{style:{display:"flex",justifyContent:"flex-end",marginTop:10},children:[Object(y.jsx)(m.a,{sx:{flexGrow:1}}),Object(y.jsx)(x.a,{color:"primary",disabled:c,type:"submit",variant:"contained",children:"Save"})]})]})}))}})}},1254:function(e,t,a){"use strict";var n=a(18),s=a(9),c=a.n(s),r=a(16),i=a(14),l=a(1),o=a(58),u=a(181),d=a(564),j=a(565),b=a(553),m=a(577),x=a(572),h=a(645),O=a(108),p=(a(45),a(631)),f=a(1224),v=a(120),S=a(0),g=Object(h.a)({table:{minWidth:700},hedds:{width:"20%",margin:"8px 10px",display:"inline-block",border:"1px solid #ccc",borderRadius:"4px"},feild:{width:"20%",marginLeft:8},feilds:{width:"20%",marginLeft:8,marginBottom:10}});t.a=function(e){var t=e.student,a=e.allStudentAttendence,s=e.setStudent,h=e.studentsMarks,k=e.onSave,w=e.setmarksFeild,y=g(),N=Object(l.useRef)(null),C=Object(l.useState)([]),M=Object(i.a)(C,2),E=M[0],G=M[1],I=Object(l.useState)([]),F=Object(i.a)(I,2),L=F[0],R=F[1],z=Object(l.useState)([]),P=Object(i.a)(z,2),W=P[0],V=P[1],B=Object(l.useState)([]),D=Object(i.a)(B,2),A=D[0],J=D[1],T=Object(l.useState)([]),H=Object(i.a)(T,2),U=H[0],_=H[1],q=Object(l.useState)([]),K=Object(i.a)(q,2),Q=K[0],X=K[1];Object(l.useEffect)(Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.getCall("exams/examsgroup");case 2:return t=e.sent,R(t),e.next=6,v.a.getCall("exams/examsName");case 6:a=e.sent,V(a),Object(p.a)("class/api").then((function(e){J(e)})),Object(p.a)("class/api/section").then((function(e){_(e)}));case 12:case"end":return e.stop()}}),e)}))),[]);var Y=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.getCalls("exams/api/select",{params:Object(n.a)({},N.current.values)});case 2:t=e.sent,X(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=E){e.next=4;break}return e.abrupt("return");case 4:Y();case 5:case"end":return e.stop()}}),e)}))),[E]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(O.c,{initialValues:{examsGroup:"",examsName:"",classid:"",sectionid:"",Subject:""},validationSchema:o.f().shape({}),innerRef:N,onSubmit:function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setErrors,n.setStatus,n.setSubmitting,alert(JSON.stringify(t),null),w(t),a(t);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur;var t=e.handleChange,a=e.handleSubmit,n=e.isSubmitting,s=(e.setFieldValue,e.setFieldTouched,e.touched,e.values);return Object(S.jsx)("form",{onSubmit:a,children:Object(S.jsxs)(u.a,{sx:{mt:2},children:[Object(S.jsxs)(d.a,{className:y.feilds,children:[Object(S.jsx)(j.a,{id:"examsGroup",children:"Exams Group"}),Object(S.jsx)(b.a,{fullWidth:!0,labelId:"examsGroup",value:s.examsGroup,onChange:t,id:"examsGroup",label:"exams Group",name:"examsGroup",children:L.map((function(e){return Object(S.jsx)(m.a,{value:e.id,children:e.name},e.id)}))})]}),Object(S.jsxs)(d.a,{className:y.feilds,children:[Object(S.jsx)(j.a,{id:"examsName",children:"Exams Name"}),Object(S.jsx)(b.a,{fullWidth:!0,labelId:"examsName",value:s.examsName,onChange:t,id:"examsName",label:"exams Name",name:"examsName",children:W.map((function(e){return Object(S.jsx)(m.a,{value:e.id,children:e.name},e.id)}))})]}),Object(S.jsxs)(d.a,{className:y.feild,children:[Object(S.jsx)(j.a,{id:"classid",children:"Department/Class"}),Object(S.jsx)(b.a,{fullWidth:!0,labelId:"classid",value:s.classid,onChange:t,id:"classid",label:"Department/Class",name:"classid",children:A.map((function(e){return Object(S.jsx)(m.a,{value:e.id,children:e.className},e.id)}))})]}),Object(S.jsxs)(d.a,{className:y.feild,children:[Object(S.jsx)(j.a,{id:"sectionid",children:"Section"}),Object(S.jsx)(b.a,{fullWidth:!0,labelId:"sectionid",value:E,onChange:function(e){t(e),function(e){G(e.target.value)}(e)},id:"sectionid",label:"Section",name:"sectionid",children:U.map((function(e){return Object(S.jsx)(m.a,{value:e.id,children:e.name},e.id)}))})]}),Object(S.jsxs)(d.a,{className:y.feild,children:[Object(S.jsx)(j.a,{id:"Subject",children:"Subject"}),Object(S.jsx)(b.a,{fullWidth:!0,labelId:"Subject",value:s.Subject,onChange:t,id:"Subject",label:"Subject",name:"Subject",children:Q.map((function(e){return Object(S.jsx)(m.a,{value:e.id,children:e.subjectName},e.id)}))})]}),Object(S.jsx)(x.a,{sx:{mt:1,mr:2,ml:2},color:"primary",disabled:n,type:"submit",variant:"contained",children:"Search"})]})})}}),Object(S.jsx)(f.a,{studentsMarks:h,onSave:k,setStudent:s,student:t})]})}},1651:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a.n(n),c=a(28),r=a(18),i=a(16),l=a(14),o=a(1),u=a(181),d=a(501),j=a(647),b=a(500),m=a(663),x=a(502),h=a(572),O=a(132),p=a(22),f=a(220),v=a(602),S=a(598),g=a(133),k=(a(45),a(1254)),w=a(36),y=(a(96),a(120)),N=a(0);t.default=function(){var e=Object(g.a)().settings,t=Object(o.useState)([]),a=Object(l.a)(t,2),n=a[0],C=a[1],M=Object(o.useState)([]),E=Object(l.a)(M,2),G=E[0],I=E[1],F=Object(o.useState)({}),L=Object(l.a)(F,2),R=L[0],z=L[1],P=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.a)({},R),a=Object(c.a)(G),n=Object(r.a)(Object(r.a)({},t),{},{studentMarks:Object(c.a)(a)}),e.prev=3,e.next=6,y.a.postCall("exams/Exams-marks",Object(r.a)({},n)).then((function(e){200==e.status&&w.b.success(e.message)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getCalls("exams/api/exams",{params:Object(r.a)({},t)});case 2:a=e.sent,C(a),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){W()}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(O.a,{children:Object(N.jsx)("title",{children:"Dashboard: Examination "})}),Object(N.jsxs)(u.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:1},children:[Object(N.jsx)(d.a,{maxWidth:!!e.compact&&"xl",children:Object(N.jsx)(j.a,{container:!0,justifyContent:"space-between",spacing:3,children:Object(N.jsxs)(j.a,{item:!0,children:[Object(N.jsx)(b.a,{color:"textPrimary",variant:"h5",children:"Assign Exams"}),Object(N.jsxs)(m.a,{"aria-label":"breadcrumb",separator:Object(N.jsx)(f.a,{fontSize:"small"}),sx:{mt:1},children:[Object(N.jsx)(x.a,{color:"textPrimary",component:p.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(N.jsx)(x.a,{color:"textPrimary",component:p.b,to:"/dashboard/examsGroup",variant:"subtitle2",children:"Exam Group List"}),Object(N.jsx)(x.a,{color:"textPrimary",component:p.b,to:"/dashboard/examsList",variant:"subtitle2",children:"Exam List"}),Object(N.jsx)(b.a,{color:"textSecondary",children:"Assign Student"}),Object(N.jsx)(x.a,{color:"textPrimary",component:p.b,to:"/dashboard",variant:"subtitle2",children:"Exams Subjects"})]}),Object(N.jsxs)(u.a,{sx:{mb:-1,mx:-1,mt:1},children:[Object(N.jsx)(h.a,{color:"primary",startIcon:Object(N.jsx)(v.a,{fontSize:"small"}),sx:{m:1},variant:"text",children:"Import"}),Object(N.jsx)(h.a,{color:"primary",startIcon:Object(N.jsx)(S.a,{fontSize:"small"}),sx:{m:1},variant:"text",children:"Export"})]})]})})}),Object(N.jsx)(k.a,{student:n,setStudent:C,setmarksFeild:z,onSave:P,studentsMarks:function(e,t){console.log("student",e,"Omarks",t);var a=Object(c.a)(G),n={Student_id:e.student_id,rollno:e.rollno,minMarks:e.minMarks,maxMarks:e.maxMarks,Obtmarks:t},s=a.findIndex((function(t){return t.rollno==e.rollno}));console.log(s),s>=0?a[s]=n:a.push(Object(r.a)({},n)),I(Object(c.a)(a))},allStudentAttendence:W})]})]})}},598:function(e,t,a){"use strict";var n=a(20),s=a(0),c=Object(n.a)(Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=c},602:function(e,t,a){"use strict";var n=a(20),s=a(0),c=Object(n.a)(Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload");t.a=c},606:function(e,t,a){"use strict";a(18),a(607)},607:function(e,t,a){"use strict";var n=a(45),s=a.n(n),c=(a(96),JSON.parse(localStorage.getItem("accessToken")));t.a=function(){var e=s.a.create({baseURL:"http://localhost:8000/",headers:{authorization:"bearer ".concat(c)}});return e.interceptors.response.use((function(e){return new Promise((function(t,a){t(e)}))}),(function(e){return e.response?(401==e.response.status&&console.log("your are not logedin"),Promise.reject(e)):new Promise((function(t,a){a(e)}))})),e}},631:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(9),s=a.n(n),c=a(16),r=(a(45),a(120)),i=(a(606),function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.getCall("".concat(t));case 2:return a=e.sent,e.next=5,a;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=72.aa43e2a7.chunk.js.map