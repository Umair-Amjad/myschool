(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[95],{1198:function(e,t,a){"use strict";t.a={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"}},1727:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a.n(n),o=a(16),r=a(14),i=a(1),s=a(22),l=a(132),b=a(181),j=a(572),d=a(501),u=a(557),x=a(500),h=a(183),O=a(571),m=a(1308),p=a(1313),g=a(573),v=a(1198),f=a(1068),k=a.n(f),y=a(1247),w=a(1306),C=a(64),z=a(20),S=a(0),M=Object(z.a)(Object(S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(S.jsx)("path",{d:"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"})}),"DotsVertical"),A=a(134),P=[{label:"Timeline",value:"timeline"},{label:"Connections",value:"connections"}];t.default=function(){var e=Object(C.a)(),t=Object(i.useState)("timeline"),a=Object(r.a)(t,2),n=a[0],f=a[1],z=Object(i.useState)(null),_=Object(r.a)(z,2),I=_[0],K=_[1],L=Object(i.useState)("not_connected"),B=Object(r.a)(L,2),D=B[0],E=B[1];Object(i.useEffect)((function(){A.a.push({event:"page_view"})}),[]);var J=Object(i.useCallback)(Object(o.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.getProfile();case 3:a=t.sent,e.current&&K(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e]);Object(i.useEffect)((function(){J()}),[J]);var R=function(){E((function(e){return"not_connected"===e?"pending":"not_connected"}))};return I?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(l.a,{children:Object(S.jsx)("title",{children:"Dashboard: Social Profile | Material Kit Pro"})}),Object(S.jsxs)(b.a,{sx:{backgroundColor:"background.default",minHeight:"100%"},children:[Object(S.jsx)(b.a,{style:{backgroundImage:"url(".concat(I.cover,")")},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:460,position:"relative","&:before":{backgroundImage:"linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)",content:'" "',height:"100%",left:0,position:"absolute",top:0,width:"100%"},"&:hover":{"& button":{visibility:"visible"}}},children:Object(S.jsx)(j.a,{startIcon:Object(S.jsx)(k.a,{fontSize:"small"}),sx:{backgroundColor:v.a[900],bottom:{lg:24,xs:"auto"},color:"common.white",position:"absolute",right:24,top:{lg:"auto",xs:24},visibility:"hidden","&:hover":{backgroundColor:v.a[900]}},variant:"contained",children:"Change Cover"})}),Object(S.jsx)(d.a,{maxWidth:"lg",children:Object(S.jsxs)(b.a,{sx:{alignItems:"center",display:"flex",mt:1,position:"relative"},children:[Object(S.jsx)(u.a,{src:I.avatar,sx:{border:function(e){return"4px solid ".concat(e.palette.background.default)},height:120,left:24,position:"absolute",top:-60,width:120}}),Object(S.jsxs)(b.a,{sx:{ml:"160px"},children:[Object(S.jsx)(x.a,{color:"textSecondary",variant:"overline",children:I.bio}),Object(S.jsx)(x.a,{color:"textPrimary",variant:"h5",children:I.name})]}),Object(S.jsx)(b.a,{sx:{flexGrow:1}}),Object(S.jsxs)(b.a,{sx:{display:{md:"block",xs:"none"}},children:["not_connected"===D&&Object(S.jsx)(j.a,{color:"primary",onClick:R,size:"small",sx:{ml:1},variant:"outlined",children:"Connect"}),"pending"===D&&Object(S.jsx)(j.a,{color:"primary",onClick:R,size:"small",sx:{ml:1},variant:"outlined",children:"Pending"}),Object(S.jsx)(j.a,{color:"primary",component:s.b,size:"small",sx:{ml:1},to:"/dashboard/chat",variant:"contained",children:"Send Message"})]}),Object(S.jsx)(h.a,{title:"More options",children:Object(S.jsx)(O.a,{sx:{ml:1},children:Object(S.jsx)(M,{fontSize:"small"})})})]})}),Object(S.jsx)(b.a,{sx:{mt:3},children:Object(S.jsxs)(d.a,{maxWidth:"lg",children:[Object(S.jsx)(m.a,{indicatorColor:"primary",onChange:function(e,t){f(t)},scrollButtons:"auto",textColor:"primary",value:n,variant:"scrollable",children:P.map((function(e){return Object(S.jsx)(p.a,{label:e.label,value:e.value},e.value)}))}),Object(S.jsx)(g.a,{}),Object(S.jsxs)(b.a,{sx:{py:3},children:["timeline"===n&&Object(S.jsx)(w.d,{profile:I}),"connections"===n&&Object(S.jsx)(w.a,{})]})]})})]})]}):null}},868:function(e,t,a){"use strict";a(1);var n=a(20),c=a(0);t.a=Object(n.a)(Object(c.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},869:function(e,t,a){"use strict";a(1);var n=a(20),c=a(0);t.a=Object(n.a)(Object(c.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")}}]);
//# sourceMappingURL=95.1f4f3b68.chunk.js.map