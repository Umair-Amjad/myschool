(this["webpackJsonp@School-managment-system"]=this["webpackJsonp@School-managment-system"]||[]).push([[100],{1696:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(16),i=a(14),l=a(1),o=a(22),s=a(132),d=a(1623),u=a(1283),j=a(1326),b=a(1327),h=a(1329),x=a(1622),p=a(181),v=a(501),f=a(647),O=a(500),m=a(663),g=a(502),y=a(572),w=a(575),D=a(1201),C=a(5),k=a(21),S=a(543),M=a(18),T=a(36),E=a(171),A=a(58),V=a(108),W=a(1685),z=a(561),B=a(569),P=a(570),R=a(568),F=a(573),G=a(571),I=a(632),H=a(244),N=a(225),q=a(0),J=function(e,t){return e?{allDay:e.allDay||!1,color:e.color||"",description:e.description||"",end:e.end?new Date(e.end):Object(E.a)(new Date,30),start:e.start?new Date(e.start):new Date,title:e.title||"",submit:null}:t?{allDay:!1,color:"",description:"",end:new Date(t.end),start:new Date(t.start),title:"",submit:null}:{allDay:!1,color:"",description:"",end:Object(E.a)(new Date,30),start:new Date,title:"",submit:null}},K=function(e){var t=e.event,a=e.onAddComplete,n=e.onCancel,i=e.onDeleteComplete,l=e.onEditComplete,o=e.range,s=Object(N.b)(),d=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(Object(H.c)(t.id));case 3:null===i||void 0===i||i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(q.jsx)(V.c,{initialValues:J(t,o),validationSchema:A.f().shape({allDay:A.b(),description:A.h().max(5e3),end:A.d().when("start",(function(e,t){return e&&t.min(e,"End date must be later than start date")})),start:A.d(),title:A.h().max(255).required("Title is required")}),onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(n,c){var i,o,d,u,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=c.resetForm,o=c.setErrors,d=c.setStatus,u=c.setSubmitting,e.prev=1,j={allDay:n.allDay,description:n.description,end:n.end.getTime(),start:n.start.getTime(),title:n.title},!t){e.next=8;break}return e.next=6,s(Object(H.i)(t.id,j));case 6:e.next=10;break;case 8:return e.next=10,s(Object(H.b)(j));case 10:i(),d({success:!0}),u(!1),T.b.success("Calendar updated!"),!t&&a&&a(),t&&l&&l(),e.next=25;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),T.b.error("Something went wrong!"),d({success:!1}),o({submit:e.t0.message}),u(!1);case 25:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,r=e.handleBlur,c=e.handleChange,i=e.handleSubmit,l=e.isSubmitting,o=e.setFieldValue,s=e.touched,u=e.values;return Object(q.jsxs)("form",{onSubmit:i,children:[Object(q.jsx)(p.a,{sx:{p:3},children:Object(q.jsx)(O.a,{align:"center",color:"textPrimary",gutterBottom:!0,variant:"h5",children:t?"Add Event":"Edit Event"})}),Object(q.jsxs)(p.a,{sx:{p:3},children:[Object(q.jsx)(z.a,{error:Boolean(s.title&&a.title),fullWidth:!0,helperText:s.title&&a.title,label:"Title",name:"title",onBlur:r,onChange:c,value:u.title,variant:"outlined"}),Object(q.jsx)(p.a,{sx:{mt:2},children:Object(q.jsx)(z.a,{error:Boolean(s.description&&a.description),fullWidth:!0,helperText:s.description&&a.description,label:"Description",name:"description",onBlur:r,onChange:c,value:u.description,variant:"outlined"})}),Object(q.jsx)(p.a,{sx:{mt:2},children:Object(q.jsx)(B.a,{control:Object(q.jsx)(P.a,{checked:u.allDay,color:"primary",name:"allDay",onChange:c}),label:"All day"})}),Object(q.jsx)(p.a,{sx:{mt:2},children:Object(q.jsx)(W.a,{label:"Start date",onChange:function(e){return o("start",e)},renderInput:function(e){return Object(q.jsx)(z.a,Object(M.a)({fullWidth:!0,variant:"outlined"},e))},value:u.start})}),Object(q.jsx)(p.a,{sx:{mt:2},children:Object(q.jsx)(W.a,{label:"End date",onChange:function(e){return o("end",e)},renderInput:function(e){return Object(q.jsx)(z.a,Object(M.a)({fullWidth:!0,variant:"outlined"},e))},value:u.end})}),Boolean(s.end&&a.end)&&Object(q.jsx)(p.a,{sx:{mt:2},children:Object(q.jsx)(R.a,{error:!0,children:a.end})})]}),Object(q.jsx)(F.a,{}),Object(q.jsxs)(p.a,{sx:{alignItems:"center",display:"flex",p:2},children:[t&&Object(q.jsx)(G.a,{onClick:function(){return d()},children:Object(q.jsx)(I.a,{fontSize:"small"})}),Object(q.jsx)(p.a,{sx:{flexGrow:1}}),Object(q.jsx)(y.a,{color:"primary",onClick:n,variant:"text",children:"Cancel"}),Object(q.jsx)(y.a,{color:"primary",disabled:l,sx:{ml:1},type:"submit",variant:"contained",children:"Confirm"})]})]})}})},L=a(86),_=a(311),Q=a(1730),U=a(183),X=a(1332),Y=a.n(X),Z=a(1333),$=a.n(Z),ee=a(1334),te=a.n(ee),ae=a(1335),ne=a.n(ae),re=[{icon:Y.a,label:"Month",value:"dayGridMonth"},{icon:$.a,label:"Week",value:"timeGridWeek"},{icon:te.a,label:"Day",value:"timeGridDay"},{icon:ne.a,label:"Agenda",value:"listWeek"}],ce=function(e){var t=e.date,a=e.onDateNext,n=e.onDatePrev,r=e.onDateToday,c=e.onViewChange,i=e.view,l=Object(L.a)(e,["date","onDateNext","onDatePrev","onDateToday","onViewChange","view"]);return Object(q.jsxs)(f.a,Object(M.a)(Object(M.a)({alignItems:"center",container:!0,justifyContent:"space-between",spacing:3},l),{},{children:[Object(q.jsx)(f.a,{item:!0,children:Object(q.jsxs)(Q.a,{size:"small",children:[Object(q.jsx)(y.a,{onClick:n,children:"Prev"}),Object(q.jsx)(y.a,{onClick:r,children:"Today"}),Object(q.jsx)(y.a,{onClick:a,children:"Next"})]})}),Object(q.jsx)(f.a,{item:!0,children:Object(q.jsx)(O.a,{color:"textPrimary",variant:"h3",children:Object(_.a)(t,"dd MMMM y")})}),Object(q.jsx)(f.a,{item:!0,children:Object(q.jsx)(p.a,{sx:{color:"text.primary"},children:re.map((function(e){var t=e.icon;return Object(q.jsx)(U.a,{title:e.label,children:Object(q.jsx)(G.a,{color:e.value===i?"primary":"inherit",onClick:function(){return t=e.value,void(c&&c(t));var t},children:Object(q.jsx)(t,{fontSize:"small"})})},e.value)}))})})]}))},ie=a(220),le=a(616),oe=a(134),se=function(e){var t=e.calendar,a=t.events,n=t.selectedEventId;return n?a.find((function(e){return e.id===n})):null},de=Object(C.a)("div")((function(e){var t=e.theme;return{"& .fc-license-message":{display:"none"},"& .fc":{"--fc-bg-event-opacity":1,"--fc-border-color":t.palette.divider,"--fc-daygrid-event-dot-width":"10px","--fc-event-text-color":t.palette.text.primary,"--fc-list-event-hover-bg-color":t.palette.background.default,"--fc-neutral-bg-color":t.palette.background.default,"--fc-page-bg-color":t.palette.background.default,"--fc-today-bg-color":Object(k.a)(t.palette.primary.main,.25),color:t.palette.text.primary,fontFamily:t.typography.fontFamily},"& .fc .fc-col-header-cell-cushion":{paddingBottom:"10px",paddingTop:"10px"},"& .fc .fc-day-other .fc-daygrid-day-top":{color:t.palette.text.secondary},"& .fc-daygrid-event":{padding:"10px"}}}));t.default=function(){var e=Object(N.b)(),t=Object(l.useRef)(null),a=Object(S.a)((function(e){return e.breakpoints.down("sm")})),n=Object(N.c)((function(e){return e.calendar})),C=n.events,k=n.isModalOpen,M=n.selectedRange,T=Object(N.c)(se),E=Object(l.useState)(new Date),A=Object(i.a)(E,2),V=A[0],W=A[1],z=Object(l.useState)(a?"listWeek":"dayGridMonth"),B=Object(i.a)(z,2),P=B[0],R=B[1];Object(l.useEffect)((function(){oe.a.push({event:"page_view"})}),[]),Object(l.useEffect)((function(){e(Object(H.d)())}),[]),Object(l.useEffect)((function(){var e=t.current;if(e){var n=e.getApi(),r=a?"listWeek":"dayGridMonth";n.changeView(r),R(r)}}),[a]);var F=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.event,t.prev=1,t.next=4,e(Object(H.i)(n.id,{allDay:n.allDay,start:n.start,end:n.end}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.event,t.prev=1,t.next=4,e(Object(H.i)(n.id,{allDay:n.allDay,start:n.start,end:n.end}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),I=function(){e(Object(H.a)())};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(s.a,{children:Object(q.jsx)("title",{children:"Dashboard: Calendar | Material Kit Pro"})}),Object(q.jsx)(p.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(q.jsxs)(v.a,{maxWidth:!1,children:[Object(q.jsxs)(f.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(q.jsxs)(f.a,{item:!0,children:[Object(q.jsx)(O.a,{color:"textPrimary",variant:"h5",children:"Here's what you planned"}),Object(q.jsxs)(m.a,{"aria-label":"breadcrumb",separator:Object(q.jsx)(ie.a,{fontSize:"small"}),sx:{mt:1},children:[Object(q.jsx)(g.a,{color:"textPrimary",component:o.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(q.jsx)(O.a,{color:"textSecondary",variant:"subtitle2",children:"Calendar"})]})]}),Object(q.jsx)(f.a,{item:!0,children:Object(q.jsx)(p.a,{sx:{m:-1},children:Object(q.jsx)(y.a,{color:"primary",onClick:function(){e(Object(H.e)())},startIcon:Object(q.jsx)(le.a,{fontSize:"small"}),sx:{m:1},variant:"contained",children:"New Event"})})})]}),Object(q.jsx)(p.a,{sx:{mt:3},children:Object(q.jsx)(ce,{date:V,onDateNext:function(){var e=t.current;if(e){var a=e.getApi();a.next(),W(a.getDate())}},onDatePrev:function(){var e=t.current;if(e){var a=e.getApi();a.prev(),W(a.getDate())}},onDateToday:function(){var e=t.current;if(e){var a=e.getApi();a.today(),W(a.getDate())}},onViewChange:function(e){var a=t.current;a&&(a.getApi().changeView(e),R(e))},view:P})}),Object(q.jsx)(w.a,{sx:{mt:3,p:2},children:Object(q.jsx)(de,{children:Object(q.jsx)(d.a,{allDayMaintainDuration:!0,dayMaxEventRows:3,droppable:!0,editable:!0,eventClick:function(t){e(Object(H.g)(t.event.id))},eventDisplay:"block",eventDrop:G,eventResizableFromStart:!0,eventResize:F,events:C,headerToolbar:!1,height:800,initialDate:V,initialView:P,plugins:[u.b,j.a,b.a,h.a,x.a],ref:t,rerenderDelay:10,select:function(a){var n=t.current;n&&n.getApi().unselect();e(Object(H.h)(a.start.getTime(),a.end.getTime()))},selectable:!0,weekends:!0})})}),Object(q.jsx)(D.a,{fullWidth:!0,maxWidth:"sm",onClose:I,open:k,children:k&&Object(q.jsx)(K,{event:T,onAddComplete:I,onCancel:I,onDeleteComplete:I,onEditComplete:I,range:M})})]})})]})}},616:function(e,t,a){"use strict";var n=a(20),r=a(0),c=Object(n.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=c},632:function(e,t,a){"use strict";var n=a(20),r=a(0),c=Object(n.a)(Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash");t.a=c}}]);
//# sourceMappingURL=100.444c2253.chunk.js.map