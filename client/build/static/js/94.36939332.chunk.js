(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[94],{1654:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(28),l=t(9),i=t.n(l),c=t(16),o=t(14),d=t(1),s=t(575),u=t(647),j=t(500),b=t(1698),m=t(1728),f=t(1688),p=t(572),O=t(561),h=t(564),v=t(565),x=t(553),g=t(577),S=t(181),y=t(1200),N=t(576),C=t(645),k=t(1280),w=t(631),W=t(26),I=(t(96),t(120),t(36)),E=t(45),T=t.n(E),A=t(0),F=Object(C.a)((function(e){return{button:{marginRight:e.spacing(1)}}}));var P=[{value:"0",label:"Islam"},{value:"1",label:"Hindu"},{value:"2",label:"Cristion"}],D=[{label:"male",value:"0"},{label:"Female",value:"1"},{label:"Other",value:"2"}],_=[{label:"Teacher",value:"1"},{label:"Staff",value:"2"},{label:"Accounts",value:"3"},{label:"other's",value:"4"}],R=[{label:"Single",value:"1"},{label:"Married",value:"2"},{label:"Widow",value:"3"},{label:"Other",value:"4"}],q=[{label:"Permanent",value:"1"},{label:"Temporory",value:"2"}],z=function(e){e.sectionobj,e.classObj;var a=Object(k.d)(),t=a.control,r=a.formState.errors;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(k.a,{control:t,name:"staffid",rules:{required:"this field is required."},render:function(e){var a,t=e.field;return Object(A.jsx)(O.a,Object(n.a)(Object(n.a)({id:"staffid",label:"Staff Id",variant:"outlined",fullWidth:!0,margin:"normal"},t),{},{error:Boolean(null===r||void 0===r?void 0:r.staffid),helperText:null===(a=r.staffid)||void 0===a?void 0:a.message}))}}),Object(A.jsx)(k.a,{control:t,name:"role",render:function(e){var a=e.field;return Object(A.jsxs)(h.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(A.jsx)(v.a,{id:"demo-simple-select-outlined-label-role",children:"Role"}),Object(A.jsx)(x.a,Object(n.a)(Object(n.a)({labelId:"demo-simple-select-outlined-label-role",id:"demo-simple-select-outlined",label:"Role"},a),{},{children:_.map((function(e){return Object(A.jsx)(g.a,{value:e.value,children:e.label},e.value)}))}))]})}}),Object(A.jsx)(k.a,{control:t,name:"firstName",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"firstName",label:"Full Name",variant:"outlined",placeholder:"Enter Your  Name",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"fname",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"fname",label:"Father Name",variant:"outlined",fullWidth:!0,margin:"normal"},a))}})," ",Object(A.jsx)(k.a,{control:t,name:"motherName",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"motherName",label:"Mother Name",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"gender",rules:{required:!0},render:function(e){var a=e.field;return Object(A.jsxs)(h.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(A.jsx)(v.a,{id:"demo-simple-select-outlined-label",children:"Gender"}),Object(A.jsx)(x.a,Object(n.a)(Object(n.a)({labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Gender"},a),{},{children:D.map((function(e){return Object(A.jsx)(g.a,{value:e.label,children:e.label},e.value)}))}))]})}}),Object(A.jsx)(k.a,{control:t,name:"dob",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"dob",type:"date",label:"Date of Birth",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"joningDate",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"joningDate",type:"date",label:"Date of Joining",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"email",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"email",label:"E-mail",variant:"outlined",placeholder:"Enter Your E-mail",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"phone",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"phone",label:"Phone",variant:"outlined",placeholder:"Enter Your  phone number",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"CNIC",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"CNIC",label:" CNIC",variant:"outlined",placeholder:"Enter Your  CNIC number",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"maritalStatus",render:function(e){var a=e.field;return Object(A.jsxs)(h.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(A.jsx)(v.a,{id:"maritalStatus",children:"Marital Status"}),Object(A.jsx)(x.a,Object(n.a)(Object(n.a)({labelId:"maritalStatus",id:"maritalStatus",label:"Marital Status"},a),{},{children:R.map((function(e){return Object(A.jsx)(g.a,{value:e.value,children:e.label},e.value)}))}))]})}}),Object(A.jsx)(k.a,{control:t,name:"qualification",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"qualification",label:"Qualification",variant:"outlined",fullWidth:!0,margin:"normal"},a))}})," ",Object(A.jsx)(k.a,{control:t,name:"workExperince",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"workExperince",label:" work Experince",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:t,name:"religion",render:function(e){var a=e.field;return Object(A.jsxs)(h.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(A.jsx)(v.a,{id:"demo-simple-select-outlined-label-religion",children:"Religion"}),Object(A.jsx)(x.a,Object(n.a)(Object(n.a)({labelId:"demo-simple-select-outlined-label-religion",id:"demo-simple-select-outlined-religion",label:"Religion"},a),{},{children:P.map((function(e){return Object(A.jsx)(g.a,{value:e.label,children:e.label},e.value)}))}))]})}})]})},Y=function(){var e=Object(k.d)().control;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(k.a,{control:e,name:"epfNo",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"epfNo",label:"EPF Number",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:e,name:"baiscSalery",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"baiscSalery",label:"Basic Salery",variant:"outlined",fullWidth:!0,margin:"normal"},a))}})," ",Object(A.jsx)(k.a,{control:e,name:"workShift",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"workShift",label:"Work Shift",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:e,name:"contractType",render:function(e){var a=e.field;return Object(A.jsxs)(h.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(A.jsx)(v.a,{id:"demo-simple-select-outlined-label-contractType",children:"Religion"}),Object(A.jsx)(x.a,Object(n.a)(Object(n.a)({labelId:"demo-simple-select-outlined-label-contractType",id:"demo-simple-select-outlined-contractType",label:"Contract Type"},a),{},{children:q.map((function(e){return Object(A.jsx)(g.a,{value:e.label,children:e.label},e.value)}))}))]})}})," ",Object(A.jsx)(k.a,{control:e,name:"location",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"location",label:"Locatoin",variant:"outlined",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:e,name:"payScal",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"payScal",label:"Pay Scal",variant:"outlined",fullWidth:!0,margin:"normal"},a))}})]})},B=function(){var e=Object(k.d)().control;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(k.a,{control:e,name:"address1",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"address1",label:"Address 1",variant:"outlined",placeholder:"Enter Your Address 1",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:e,name:"address2",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"address2",label:"Address 2",variant:"outlined",placeholder:"Enter Your Address 2",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:e,name:"zipcode",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"zipcode",label:"Zip Code",variant:"outlined",placeholder:"Enter Your Country Name",fullWidth:!0,margin:"normal"},a))}}),Object(A.jsx)(k.a,{control:e,name:"permanentAddress",render:function(e){var a=e.field;return Object(A.jsx)(O.a,Object(n.a)({id:"permanentAddress",label:"Permanent Address",variant:"outlined",fullWidth:!0,margin:"normal"},a))}})]})},J=function(){Object(k.d)().control;var e=Object(k.d)(),a=e.register,t=e.setValue,r=Object(d.useState)(null),l=Object(o.a)(r,2),i=l[0],c=l[1];return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(S.a,{children:Object(A.jsxs)(s.a,{children:[i?Object(A.jsx)(y.a,{component:"img",src:i,height:"200",alt:"Selected Image Preview"}):Object(A.jsx)(N.a,{children:Object(A.jsx)(j.a,{variant:"body1",children:"Select an Image to Preview"})}),Object(A.jsx)(N.a,{children:Object(A.jsxs)(p.a,{variant:"contained",component:"label",children:["Upload File",Object(A.jsx)("input",Object(n.a)(Object(n.a)({type:"file",hidden:!0},a("photo")),{},{onChange:function(e){var a=e.target.files[0];if(a){var n=new FileReader;n.onload=function(e){c(e.target.result),t("photo",a)},n.readAsDataURL(a)}}}))]})})]})})})};function L(e,a,t){switch(e){case 0:return Object(A.jsx)(z,{});case 1:return Object(A.jsx)(Y,{});case 2:return Object(A.jsx)(B,{});case 3:return Object(A.jsx)(J,{});default:return"unknown step"}}a.default=function(e){var a=Object(d.useState)([]),t=Object(o.a)(a,2),l=t[0],O=t[1],h=Object(d.useState)([]),v=Object(o.a)(h,2),x=v[0],g=v[1],S=Object(W.g)().state;Object(W.h)();if(null===S)var y={id:"",staffid:"",role:"",firstName:"",fname:"",motherName:"",gender:"",email:"",dob:"",joningDate:"",phone:"",maritalStatus:"",CNIC:"",qualification:"",workExperince:"",religion:"",epfNo:"",baiscSalery:"",workShift:"",contractType:"",location:"",payScal:"",address1:"",address2:"",zipcode:"",permanentAddress:""};else{S.row;y=S.row}Object(d.useEffect)((function(){Object(w.a)("class/api").then((function(e){g(e)})),Object(w.a)("class/api/section").then((function(e){O(e)}))}),[]);var N=F(),C=Object(k.c)({defaultValues:{staffid:y.staff_id||"",role:y.Role||"",firstName:y.first_name||"",fname:y.father_name||"",motherName:y.mother_name||"",gender:y.gender||"",email:y.email||"",dob:y.dob||"",joningDate:y.date_of_joining||"",phone:y.phone||"",maritalStatus:y.marital_status||"",CNIC:y.CNIC_No||"",qualification:y.qualification||"",workExperince:y.work_experience||"",religion:y.religion||"",epfNo:y.epf_No||"",baiscSalery:y.basic_salery||"",workShift:y.work_shift||"",contractType:y.contract||"",location:y.location||"",payScal:y.payscall||"",address1:y.address1||"",address2:y.address2||"",zipcode:y.zipCode||"23610",permanentAddress:y.Per_address||"",submit:null}}),E=Object(d.useState)(0),P=Object(o.a)(E,2),D=P[0],_=P[1],R=Object(d.useState)([]),q=Object(o.a)(R,2),z=q[0],Y=q[1],B=["Personal information","Parent Information","Address Detail","Document"],J=function(e){return 1===e||2===e},M=function(e){return z.includes(e)},U=function(){var e=Object(c.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D!=B.length-1){e.next=39;break}return(t=new FormData).append("photo",a.photo),t.append("staffid",a.staffid),t.append("role",a.role),t.append("gender",a.gender),t.append("dob",a.dob),t.append("email",a.email),t.append("firstName",a.firstName),t.append("fname",a.fname),t.append("phone",a.phone),t.append("religion",a.religion),t.append("joningDate",a.joningDate),t.append("maritalStatus",a.maritalStatus),t.append("CNIC",a.CNIC),t.append("qualification",a.qualification),t.append("fatherCNIC",a.fatherCNIC),t.append("workExperince",a.workExperince),t.append("epfNo",a.epfNo),t.append("baiscSalery",a.baiscSalery),t.append("workShift",a.workShift),t.append("contractType",a.contractType),t.append("address1",a.address1),t.append("address2",a.address2),t.append("zipcode",a.zipcode),t.append("permanentAddress",a.permanentAddress),t.append("location",a.location),t.append("id",y.id?y.id:""),e.prev=28,e.next=31,T.a.post("http://localhost:8000/teacher/addupdate",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.json})).catch((function(e){console.log(e)}));case 31:I.b.success(y.id?"Update Data ":"Add SuccessFully"),e.next=37;break;case 34:e.prev=34,e.t0=e.catch(28),console.log(e.t0);case 37:e.next=41;break;case 39:_(D+1),Y(z.filter((function(e){return e!==D})));case 41:case"end":return e.stop()}}),e,null,[[28,34]])})));return function(a){return e.apply(this,arguments)}}();return Object(A.jsx)(s.a,{children:Object(A.jsxs)("div",{style:{padding:16},children:[Object(A.jsx)(u.a,{style:{paddingBottom:"10px",marginTop:5},container:!0,justifyContent:"center",spacing:3,children:Object(A.jsx)(j.a,{color:"textPrimary",variant:"h5",children:"Staff Registration Forms"})}),Object(A.jsx)(b.a,{alternativeLabel:!0,activeStep:D,children:B.map((function(e,a){var t={},r={};return J(a)&&(t.optional=Object(A.jsx)(j.a,{variant:"caption",align:"center",style:{display:"block"},children:"optional"})),M(a)&&(r.completed=!1),Object(d.createElement)(m.a,Object(n.a)(Object(n.a)({},r),{},{key:a}),Object(A.jsx)(f.a,Object(n.a)(Object(n.a)({},t),{},{children:e})))}))}),D===B.length?Object(A.jsx)(j.a,{variant:"h3",align:"center",children:"Thank You"}):Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(k.b,Object(n.a)(Object(n.a)({},C),{},{children:Object(A.jsxs)("form",{onSubmit:C.handleSubmit(U),children:[L(D,l,x),Object(A.jsx)(p.a,{className:N.button,disabled:0===D,onClick:function(){_(D-1)},children:"back"}),J(D)&&Object(A.jsx)(p.a,{className:N.button,variant:"contained",color:"primary",onClick:function(){M(D)||Y([].concat(Object(r.a)(z),[D])),_(D+1)},children:"skip"}),Object(A.jsx)(p.a,{className:N.button,variant:"contained",color:"primary",type:"submit",children:D===B.length-1?"Finish":"Next"})]})}))})]})})}},606:function(e,a,t){"use strict";t(18),t(607)},607:function(e,a,t){"use strict";var n=t(45),r=t.n(n),l=(t(96),JSON.parse(localStorage.getItem("accessToken")));a.a=function(){var e=r.a.create({baseURL:"http://localhost:8000/",headers:{authorization:"bearer ".concat(l)}});return e.interceptors.response.use((function(e){return new Promise((function(a,t){a(e)}))}),(function(e){return e.response?(401==e.response.status&&console.log("your are not logedin"),Promise.reject(e)):new Promise((function(a,t){t(e)}))})),e}},631:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(9),r=t.n(n),l=t(16),i=(t(45),t(120)),c=(t(606),function(){var e=Object(l.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getCall("".concat(a));case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=94.36939332.chunk.js.map