(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[44],{1719:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(1),r=n(22),o=n(132),i=n(181),s=n(501),l=n(647),u=n(500),d=n(663),j=n(502),b=n(572),h=(n(874),n(45),n(9)),m=n.n(h),O=n(16),v=n(28),p=n(18),x=n(86),f=n(26),g=(n(621),n(575)),y=n(561),w=n(574),k=n(644),C=n(581),S=n(582),z=n(583),P=n(584),A=n(585),R=n(892),I=n(1710),M=n(613),D=n(617),B=n(188),H=n(120),L=n(136),E=n(0),T=[{label:"All",value:"all"},{label:"Section A",value:"Section A"},{label:"Section B",value:"Section B"},{label:"Section C",value:"Section C"}],V=[{label:"Newest first",value:"createdAt|desc"},{label:"Oldest first",value:"createdAt|asc"}],W=function(e){var t=Object(f.h)(),n=e.invoices,o=e.refresh,s=e.setRefresh,l=Object(x.a)(e,["invoices","refresh","setRefresh"]),u=Object(c.useState)([]),d=Object(a.a)(u,2),h=d[0],W=d[1],N=Object(c.useState)(0),$=Object(a.a)(N,2),J=$[0],F=$[1],G=Object(c.useState)(10),U=Object(a.a)(G,2),K=U[0],Z=U[1],_=Object(c.useState)(""),q=Object(a.a)(_,2),Q=q[0],X=q[1],Y=Object(c.useState)(V[0].value),ee=Object(a.a)(Y,2),te=ee[0],ne=ee[1],ae=Object(c.useState)({section:null}),ce=Object(a.a)(ae,2),re=ce[0],oe=ce[1],ie=function(e){W(e.target.checked?n.map((function(e){return e.id})):[])},se=function(){var e=Object(O.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{1==confirm("Are you sure you want to delete")?(n="",h.forEach((function(e){n=e+","+n})),n=n.slice(0,-1),a={id:n},H.a.putCalls("class/classes/del",{data:a}).then((function(e){e.json,W([]),s(!o)}))):W(h)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e,t,n){return e.filter((function(e){var a=!0;if(t){var c=!1;["className"].forEach((function(n){e[n].toLowerCase().includes(t.toLowerCase())&&(c=!0)})),c||(a=!1)}return n.section&&e.section!==n.section&&(a=!1),a}))}(n,Q,re),ue=function(e,t,n){return e.slice(t*n,t*n+n)}(le,J,K),de=h.length>0,je=h.length>0&&h.length<n.length,be=h.length===n.length;return Object(E.jsxs)(g.a,Object(p.a)(Object(p.a)({},l),{},{children:[Object(E.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1,p:2},children:[Object(E.jsx)(i.a,{sx:{m:1,maxWidth:"100%",width:500},children:Object(E.jsx)(y.a,{fullWidth:!0,InputProps:{startAdornment:Object(E.jsx)(w.a,{position:"start",children:Object(E.jsx)(B.a,{fontSize:"small"})})},onChange:function(e){X(e.target.value)},placeholder:"Search class by Class Name",value:Q,variant:"outlined"})}),Object(E.jsx)(i.a,{sx:{m:1,maxWidth:"100%",width:240},children:Object(E.jsx)(y.a,{fullWidth:!0,label:"Sort By",name:"sort",onChange:function(e){ne(e.target.value)},select:!0,SelectProps:{native:!0},value:te,variant:"outlined",children:V.map((function(e){return Object(E.jsx)("option",{value:e.value,children:e.label},e.value)}))})}),Object(E.jsx)(i.a,{sx:{m:1,maxWidth:"100%",width:240},children:Object(E.jsx)(y.a,{fullWidth:!0,label:"Section",name:"Section",onChange:function(e){console.log(e.target.value);var t=null;"all"!==e.target.value&&(t=e.target.value),oe((function(e){return Object(p.a)(Object(p.a)({},e),{},{section:t})}))},select:!0,SelectProps:{native:!0},value:re.section||"all",variant:"outlined",children:T.map((function(e){return Object(E.jsx)("option",{value:e.value,children:e.label},e.value)}))})})]}),de&&Object(E.jsx)(i.a,{sx:{position:"relative"},children:Object(E.jsxs)(i.a,{sx:{backgroundColor:"background.paper",mt:"6px",position:"absolute",px:"4px",width:"100%",zIndex:2},children:[Object(E.jsx)(k.a,{checked:be,color:"primary",indeterminate:je,onChange:ie}),Object(E.jsx)(b.a,{onClick:se,color:"primary",sx:{ml:2},variant:"outlined",children:"Delete"}),Object(E.jsx)(b.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Edit"})]})}),Object(E.jsx)(L.a,{children:Object(E.jsx)(i.a,{sx:{minWidth:1200},children:Object(E.jsxs)(C.a,{children:[Object(E.jsx)(S.a,{children:Object(E.jsxs)(z.a,{children:[Object(E.jsx)(P.a,{padding:"checkbox",children:Object(E.jsx)(k.a,{checked:be,color:"primary",indeterminate:je,onChange:ie})}),Object(E.jsx)(P.a,{children:"Class Name"}),Object(E.jsx)(P.a,{children:"Description"}),Object(E.jsx)(P.a,{children:"Actions"})]})}),Object(E.jsx)(A.a,{children:ue.map((function(e){var n=h.includes(e.id);return Object(E.jsxs)(z.a,{hover:!0,selected:n,children:[Object(E.jsx)(P.a,{padding:"checkbox",children:Object(E.jsx)(k.a,{checked:n,color:"primary",onChange:function(t){return n=e.id,void(h.includes(n)?W((function(e){return e.filter((function(e){return e!==n}))})):W((function(e){return[].concat(Object(v.a)(e),[n])})));var n},value:n})}),Object(E.jsx)(P.a,{children:Object(E.jsx)(j.a,{color:"textPrimary",component:r.b,to:"#",underline:"none",variant:"subtitle2",children:e.className})}),Object(E.jsx)(P.a,{children:e.description}),Object(E.jsx)(P.a,{children:Object(E.jsxs)(R.a,{direction:"row",spacing:1,children:[Object(E.jsx)(b.a,{disabled:!0,color:"primary",endIcon:Object(E.jsx)(M.a,{fontSize:"small"}),variant:"contained",onClick:function(){return t("/dashboard/staff-detail",{state:{invoice:e}})},children:"Detail"}),Object(E.jsx)(b.a,{color:"secondary",endIcon:Object(E.jsx)(D.a,{fontSize:"small"}),variant:"contained",onClick:function(){return t("/dashboard/addClass",{state:{invoice:e}})},children:"Edit"})]})})]},e.id)}))})]})})}),Object(E.jsx)(I.a,{component:"div",count:le.length,onPageChange:function(e,t){F(t)},onRowsPerPageChange:function(e){Z(parseInt(e.target.value,10))},page:J,rowsPerPage:K,rowsPerPageOptions:[5,10,25]})]}))},N=n(64),$=n(133),J=n(220),F=n(598),G=n(616),U=n(602),K=n(134),Z=n(631);t.default=function(){Object(N.a)();var e=Object($.a)().settings,t=Object(c.useState)([]),n=Object(a.a)(t,2),h=n[0],m=n[1],O=Object(c.useState)(!1),v=Object(a.a)(O,2),p=v[0],x=v[1];return Object(c.useEffect)((function(){K.a.push({event:"page_view"})}),[]),Object(c.useEffect)((function(){Object(Z.a)("class/api").then((function(e){m(e)}))}),[p]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(o.a,{children:Object(E.jsx)("title",{children:"Dashboard: Invoice List | Material Kit Pro"})}),Object(E.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(E.jsxs)(s.a,{maxWidth:!!e.compact&&"xl",children:[Object(E.jsxs)(l.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(E.jsxs)(l.a,{item:!0,children:[Object(E.jsx)(u.a,{color:"textPrimary",variant:"h5",children:"All Classes"}),Object(E.jsxs)(d.a,{"aria-label":"breadcrumb",separator:Object(E.jsx)(J.a,{fontSize:"small"}),sx:{mt:1},children:[Object(E.jsx)(j.a,{color:"textPrimary",component:r.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(E.jsx)(u.a,{color:"textSecondary",variant:"subtitle2",children:"Classes"})]}),Object(E.jsxs)(i.a,{sx:{mb:-1,mx:-1,mt:1},children:[Object(E.jsx)(b.a,{color:"primary",startIcon:Object(E.jsx)(U.a,{fontSize:"small"}),sx:{m:1},variant:"text",children:"Import"}),Object(E.jsx)(b.a,{color:"primary",startIcon:Object(E.jsx)(F.a,{fontSize:"small"}),sx:{m:1},variant:"text",children:"Export"})]})]}),Object(E.jsx)(l.a,{item:!0,children:Object(E.jsx)(i.a,{sx:{m:-1},children:Object(E.jsx)(b.a,{color:"primary",startIcon:Object(E.jsx)(G.a,{fontSize:"small"}),component:r.b,to:"/dashboard/addClass",sx:{m:1},variant:"contained",children:"Add Class"})})})]}),Object(E.jsx)(i.a,{sx:{mt:3},children:Object(E.jsx)(W,{invoices:h,setRefresh:x,refresh:p})})]})})]})}},598:function(e,t,n){"use strict";var a=n(20),c=n(0),r=Object(a.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=r},602:function(e,t,n){"use strict";var a=n(20),c=n(0),r=Object(a.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),"Upload");t.a=r},606:function(e,t,n){"use strict";n(18),n(607)},607:function(e,t,n){"use strict";var a=n(45),c=n.n(a),r=(n(96),JSON.parse(localStorage.getItem("accessToken")));t.a=function(){var e=c.a.create({baseURL:"http://localhost:8000/",headers:{authorization:"bearer ".concat(r)}});return e.interceptors.response.use((function(e){return new Promise((function(t,n){t(e)}))}),(function(e){return e.response?(401==e.response.status&&console.log("your are not logedin"),Promise.reject(e)):new Promise((function(t,n){n(e)}))})),e}},613:function(e,t,n){"use strict";var a=n(20),c=n(0),r=Object(a.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=r},616:function(e,t,n){"use strict";var a=n(20),c=n(0),r=Object(a.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=r},617:function(e,t,n){"use strict";var a=n(20),c=n(0),r=Object(a.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt");t.a=r},631:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(9),c=n.n(a),r=n(16),o=(n(45),n(120)),i=(n(606),function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getCall("".concat(t));case 2:return n=e.sent,e.next=5,n;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},644:function(e,t,n){"use strict";var a=n(3),c=n(4),r=n(2),o=n(1),i=n(490),s=n(222),l=n(20),u=n(0),d=Object(l.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(l.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=n(21),h=Object(l.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(7),O=n(12),v=n(5),p=n(314),x=n(491);function f(e){return Object(p.a)("MuiCheckbox",e)}var g=Object(x.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=Object(v.a)(s.a,{shouldForwardProp:function(e){return Object(v.b)(e)||"classes"===e}},{name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps;return Object(r.a)({},t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(m.a)(n.color))])}})((function(e){var t,n=e.theme,c=e.styleProps;return Object(r.a)({color:n.palette.text.secondary},"default"!==c.color&&(t={},Object(a.a)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:n.palette[c.color].main,"&:hover":{backgroundColor:Object(b.a)(n.palette[c.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),Object(a.a)(t,"&.".concat(g.disabled),{color:n.palette.action.disabled}),t))})),w=Object(u.jsx)(j,{}),k=Object(u.jsx)(d,{}),C=Object(u.jsx)(h,{}),S=o.forwardRef((function(e,t){var n=Object(O.a)({props:e,name:"MuiCheckbox"}),a=n.checkedIcon,s=void 0===a?w:a,l=n.color,d=void 0===l?"primary":l,j=n.icon,b=void 0===j?k:j,h=n.indeterminate,v=void 0!==h&&h,p=n.indeterminateIcon,x=void 0===p?C:p,g=n.inputProps,S=n.size,z=void 0===S?"medium":S,P=Object(c.a)(n,["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),A=v?x:b,R=v?x:s,I=Object(r.a)({},n,{color:d,indeterminate:v,size:z}),M=function(e){var t=e.classes,n=e.indeterminate,a=e.color,c={root:["root",n&&"indeterminate","color".concat(Object(m.a)(a))]},o=Object(i.a)(c,f,t);return Object(r.a)({},t,o)}(I);return Object(u.jsx)(y,Object(r.a)({type:"checkbox",color:d,inputProps:Object(r.a)({"data-indeterminate":v},g),icon:o.cloneElement(A,{fontSize:void 0===A.props.fontSize&&"medium"!==z?z:A.props.fontSize}),checkedIcon:o.cloneElement(R,{fontSize:void 0===R.props.fontSize&&"medium"!==z?z:R.props.fontSize}),styleProps:I,ref:t},P,{classes:M}))}));t.a=S},874:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(24),c=n(25),r=n(182),o=n(498),i=new Date,s=new(function(){function e(){Object(a.a)(this,e)}return Object(c.a)(e,[{key:"getInvoices",value:function(){var e=[{id:"5ecb868d0f437390ef3ac62c",currency:"$",customer:{email:"contact@anahenisky.io",name:"Ana Henisky"},issueDate:Object(r.a)(i,1).getTime(),status:"paid",totalAmount:55.5},{id:"5ecb868ada8deedee0638502",currency:"$",customer:{email:"sales@matt-jason.com",name:"Matt Jason"},issueDate:Object(o.a)(Object(r.a)(i,5),2).getTime(),status:"pending",totalAmount:253.76},{id:"5ecb868700aba84d0f1c0e48",currency:"$",customer:{email:"support@terrythomas.io",name:"Terry Thomas"},issueDate:Object(o.a)(Object(r.a)(i,4),6).getTime(),status:"canceled",totalAmount:781.5},{id:"5ecb8682038e1ddf4e868764",currency:"$",customer:{email:"contact@triv-shopper.co.uk",name:"Triv Shopper"},issueDate:Object(o.a)(Object(r.a)(i,2),15).getTime(),status:"paid",totalAmount:96.64}];return Promise.resolve(e)}},{key:"getInvoice",value:function(){var e={id:"5ecb86785312dcc69b5799ad",currency:"$",customer:{address:"271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand",company:"Countdown Grey Lynn",email:"contact@anahenisky.io",name:"Ana Henisky",taxId:"6934656584231"},dueDate:i.getTime(),issueDate:Object(r.a)(i,1).getTime(),items:[{id:"5ecb8694db1760a701dfbf74",currency:"$",description:"Freelancer Subscription (12/05/2019 - 11/06/2019)",unitAmount:55.5}],number:"DEV-9483",status:"paid",subtotalAmount:50,taxAmount:5.5,totalAmount:55.5};return Promise.resolve(e)}}]),e}())},892:function(e,t,n){"use strict";var a=n(3),c=n(4),r=n(2),o=n(1),i=n(43),s=n(50),l=n(495),u=n(315),d=n(5),j=n(12),b=n(0);function h(e,t){var n=o.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,c){return e.push(a),c<n.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(c)})),e}),[])}function m(e){var t,n=e.values,a=e.base,c=Object.keys(a);return 0===c.length?n:c.reduce((function(e,a){return e[a]="object"===typeof n?null!=n[a]?n[a]:n[t]:n,t=a,e}),{})}var O=Object(d.a)("div",{},{name:"Stack"})((function(e){var t=e.styleProps,n=e.theme,c=Object(r.a)({display:"flex"},Object(i.b)({theme:n},t.direction,(function(e){return{flexDirection:e}})));if(t.spacing){var o=Object(s.a)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),d=m({values:t.direction,base:l}),j=m({values:t.spacing,base:l});c=Object(u.a)(c,Object(i.b)({theme:n},j,(function(e,n){return{"& > :not(style) + :not(style)":Object(a.a)({margin:0},"margin".concat((c=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[c])),Object(s.d)(o,e))};var c})))}return c})),v=o.forwardRef((function(e,t){var n=Object(j.a)({props:e,name:"MuiStack"}),a=Object(l.a)(n),o=a.component,i=void 0===o?"div":o,s=a.direction,u=void 0===s?"column":s,d=a.spacing,m=void 0===d?0:d,v=a.divider,p=a.children,x=Object(c.a)(a,["component","direction","spacing","divider","children"]),f={direction:u,spacing:m};return Object(b.jsx)(O,Object(r.a)({as:i,styleProps:f,ref:t},x,{children:v?h(p,v):p}))}));t.a=v}}]);
//# sourceMappingURL=44.8fca7716.chunk.js.map