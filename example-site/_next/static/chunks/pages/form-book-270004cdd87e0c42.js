(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{9676:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ne}});var o=r(3716),n=r(4060),i=r(74),a=r(7956),c=r(2822),l=r(9639),d=r(849),s=r(8039),u=r(71),b=r(8301),p=r(443),g=r(2413),f=r(6527),y=r(181),m=r(89),h=r(7378),v=r(3457),O=r(8976),k=r(1562),D=r.n(k),P=r(1670),j=r(7800);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w="0 1px 1px rgba(0, 0, 0, 0.3)",T=function(e){var t=e.children,r=e.range;return(0,j.tZ)("div",{css:(0,P.iv)(X({"& .DayPicker":{display:"inline-block",fontSize:"1rem",backgroundColor:O._X.backgroundBody,color:O._X.foregroundText,boxShadow:w,borderWidth:O.TV.borderWidth.sm,borderStyle:"solid",borderColor:O._X.borderMuted,borderRadius:O.TV.borderRadius},"& .DayPicker-wrapper":{position:"relative",flexDirection:"row",padding:"".concat((0,O.XH)(1)),"&:focus":O.lB.outline},"& .DayPicker-Months":{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:(0,O.XH)(2)},"& .DayPicker-Month":{display:"table",borderSpacing:0,borderCollapse:"collapse",userSelect:"none"},"& .DayPicker-Caption":{display:"table-caption",marginBottom:(0,O.XH)(1.5),textAlign:"center"},"& .DayPicker-Caption > div":X(X({display:"flex",alignItems:"center",justifyContent:"center",height:"2.875rem"},(0,O.vY)("lg","nospace")),{},{fontWeight:O.TV.fontWeight.bold}),"& .DayPicker-Weekdays":{display:"table-header-group"},"& .DayPicker-WeekdaysRow":{display:"table-row"},"& .DayPicker-Weekday":X(X({display:"table-cell",textAlign:"center"},(0,O.vY)("sm","heading")),{},{color:O._X.foregroundMuted,paddingBottom:(0,O.XH)(.75)}),"& .DayPicker-Weekday abbr[title]":{borderBottom:"none",textDecoration:"none"},"& .DayPicker-Body":{display:"table-row-group"},"& .DayPicker-Week":{display:"table-row"},"& .DayPicker-Day":{display:"table-cell",verticalAlign:"middle",borderRadius:O.TV.borderRadius,width:"2.875rem",height:"2.875rem",textAlign:"center",cursor:"pointer",color:O._X.foregroundAction,"&:focus":O.lB.outline},"& .DayPicker-Day--disabled":{opacity:"0.3",cursor:"not-allowed"},"& .DayPicker-Day--selected:not(.DayPicker-Day--outside)":{position:"relative",backgroundColor:O._X.foregroundAction,color:O._X.backgroundBody},"& .DayPicker-Day:not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover":{backgroundColor:O._X.backgroundShade}},r&&{".DayPicker-Day--selected.DayPicker-Day--start:not(.DayPicker-Day--outside)":{borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",borderTopRightRadius:0,borderBottomRightRadius:0},".DayPicker-Day--selected.DayPicker-Day--end:not(.DayPicker-Day--outside)":{borderTopLeftRadius:0,borderBottomLeftRadius:0,borderTopRightRadius:"50%",borderBottomRightRadius:"50%"},".DayPicker-Day--selected.DayPicker-Day--start:not(.DayPicker-Day--outside).DayPicker-Day--end:not(.DayPicker-Day--outside)":{borderRadius:"50%"},".DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)":{backgroundColor:O._X.backgroundShade,color:O._X.foregroundText,borderRadius:0}}),"",""),children:t})},C=r(3715),Z=function(e){var t=e.showPreviousButton,r=e.onPreviousClick,o=e.showNextButton,n=e.onNextClick;return(0,j.BX)(h.Fragment,{children:[t?(0,j.tZ)(p.zx,{variant:"tertiary",onClick:function(){return r()},css:(0,P.iv)({position:"absolute",top:(0,O.XH)(1),left:(0,O.XH)(1.5),paddingLeft:0,paddingRight:0},"",""),"aria-label":"Previous month",children:(0,j.tZ)(C.wy,{size:"md",weight:"bold"})}):null,o?(0,j.tZ)(p.zx,{variant:"tertiary",onClick:function(){return n()},css:(0,P.iv)({position:"absolute",top:(0,O.XH)(1),right:(0,O.XH)(1.5),paddingLeft:0,paddingRight:0},"",""),"aria-label":"Next month",children:(0,j.tZ)(C.XC,{size:"md",weight:"bold"})}):null]})},R=["range","onDayClick"];function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){var t=e.range,r=void 0!==t&&t,o=e.onDayClick,n=(0,m.Z)(e,R);return(0,j.tZ)(T,{range:r,children:(0,j.tZ)(D(),B({navbarElement:Z,onDayClick:o},n))})},H=r(7728),W=r(8629),L=r(2345),E=r(2993),V=r(3730),Y=r(4720),q="dd/MM/yyyy",M=function(e){return(0,L.Z)(e,q)},z=function(e){if(e.length===q.length){var t=(0,E.Z)(e,q,new Date);return(0,V.Z)(t)&&(0,Y.Z)(t)?t:void 0}};var N=["label","required","requiredLabel","hint","message","invalid","valid","block","id","buttonRef","maxWidth","buttonOnClick","disabled","value","onChange"],A=["maxWidth"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=function(e){var t=e.label,r=e.required,o=e.requiredLabel,i=e.hint,a=e.message,c=e.invalid,l=e.valid,d=e.block,s=e.id,u=e.buttonRef,b=e.maxWidth,g=e.buttonOnClick,y=e.disabled,h=e.value,v=e.onChange,k=(0,m.Z)(e,N),D=I(I({},(0,f.c)({block:d,invalid:c,maxWidth:b,valid:l})),{},{width:"100%",borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}),x=D.maxWidth,X=(0,m.Z)(D,A);return(0,j.tZ)(W.gN,{label:t,required:Boolean(r),requiredLabel:o,hint:i,message:a,invalid:c,valid:l,id:s,children:function(e){return(0,j.BX)(n.kC,{alignItems:"flex-end",css:(0,P.iv)({maxWidth:x},"",""),children:[(0,j.tZ)(H.oc,I(I({mask:Date,pattern:"d{/}`m{/}`Y",format:function(e){return M(e)},parse:function(e){return z(e)||new Date},value:h,onAccept:function(e){return"string"===typeof e&&v(e)},unmask:!1,lazy:!1,blocks:{d:{mask:H.LV.MaskedRange,placeholderChar:"d",from:1,to:31,maxLength:2},m:{mask:H.LV.MaskedRange,placeholderChar:"m",from:1,to:12,maxLength:2},Y:{mask:H.LV.MaskedRange,placeholderChar:"y",from:1,to:9999,maxLength:4}},css:(0,P.iv)(I(I({},X),{},{maxWidth:"unset"}),"","")},k),e)),(0,j.tZ)(p.zx,{type:"button",ref:u,onClick:g,disabled:y,variant:"secondary","aria-label":"Choose date",css:(0,P.iv)({borderTopLeftRadius:0,borderBottomLeftRadius:0,paddingLeft:(0,O.XH)(1),paddingRight:(0,O.XH)(1)},"",""),children:(0,j.tZ)(C.Qu,{size:"md"})})]})}})},K=["value","onChange","initialMonth"];function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={name:"1739oy8",styles:"z-index:1"},U=function(e){var t=e.value,r=e.onChange,o=e.initialMonth,n=(0,m.Z)(e,K),i=(0,O.hb)(!1),a=(0,y.Z)(i,3),c=a[0],l=a[1],d=a[2],s=(0,h.useRef)(null),u=(0,h.useState)(null),b=u[0],p=u[1],g=(0,h.useState)(null),f=g[0],k=g[1],D=(0,v.D)(b,f,{placement:"bottom-start",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),P=D.styles,x=D.attributes,X=(0,h.useCallback)((function(e){var t;C(M(e)),r(e),d(),null===(t=s.current)||void 0===t||t.focus()}),[r,d]),w=(0,h.useState)(t?M(t):""),T=w[0],C=w[1],Z=(0,h.useCallback)((function(e){C(e);var t=z(e);r(t)}),[r]),R=(0,h.useRef)(f);R.current=f;var S=(0,h.useCallback)((function(){c&&d()}),[c,d]);return(0,O.O8)(R,S),(0,j.BX)("div",{ref:p,children:[(0,j.tZ)(Q,G(G({},n),{},{value:T,onChange:Z,buttonRef:s,buttonOnClick:l})),c?(0,j.tZ)("div",G(G({ref:k,style:P.popper},x.popper),{},{css:J,children:(0,j.tZ)(_,{selectedDays:t,onDayClick:X,initialMonth:o||t,numberOfMonths:1,range:!1})})):null]})};function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=b.Ry({fullName:b.Z_().required("Enter your name"),date:b.hT().required("Select a date")}).required(),oe=function(){var e,t,r=(0,s.cI)({resolver:(0,u.X)(re)}),o=r.control,n=r.register,i=r.handleSubmit,a=r.formState.errors;return(0,j.tZ)("form",{onSubmit:i((function(e){console.log(e)})),children:(0,j.BX)(g.R,{children:[(0,j.tZ)(s.Qr,{control:o,name:"date",render:function(e){var t=e.field,r=t.onChange,o=t.onBlur,n=t.value,i=t.name,a=e.fieldState,c=a.invalid,l=a.error;return(0,j.tZ)(U,{label:"Select a date",value:n,onChange:r,onBlur:o,name:i,invalid:c,message:null===l||void 0===l?void 0:l.message,maxWidth:"xl",required:!0})}}),(0,j.tZ)(f.o,te(te({label:"Full name"},n("fullName")),{},{invalid:Boolean(null===(e=a.fullName)||void 0===e?void 0:e.message),message:null===(t=a.fullName)||void 0===t?void 0:t.message,maxWidth:"xl",required:!0})),(0,j.tZ)("div",{children:(0,j.tZ)(p.zx,{type:"submit",children:"Request a booking"})})]})})},ne=function(){return(0,j.BX)(j.HY,{children:[(0,j.tZ)(l.$,{title:"Booking example"}),(0,j.tZ)(c.L,{children:(0,j.tZ)(i.V,{children:(0,j.tZ)(a.o,{children:(0,j.tZ)(a.s,{columnSpan:{xs:12,md:7},children:(0,j.BX)(n.Kq,{gap:2,children:[(0,j.BX)(o.u,{children:[(0,j.tZ)("h1",{children:"Book a visit"}),(0,j.tZ)("p",{children:"The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct."})]}),(0,j.tZ)(oe,{})]})})})})})]})}},3716:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var o=r(849),n=r(1670),i=r(8976),a=r(4060),c=r(7800);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=(0,i.yV)((function(e,t){return(0,c.tZ)(a.xu,d({ref:t,css:u},e))})),u=(0,n.iv)(d(d({margin:0,textSizeAdjust:"100%",color:i._X.foregroundText,fontFamily:i.TV.font.body},(0,i.vY)("sm","default")),{},{"a:not([class])":[a.Wf,a.j4],'[tabindex="0"]:focus, :target':{},mark:{color:i._X.backgroundBody,backgroundColor:i._X.foregroundAction},"& ::selection":{color:i._X.backgroundBody,backgroundColor:i._X.foregroundAction},img:{maxWidth:"100%"},"p:not([class])":{maxWidth:i.TV.maxWidth.bodyText,margin:0},"* + p:not([class])":{marginTop:(0,i.XH)(1.5)},"ul:not([class]),ol:not([class]),dl:not([class]),pre":{margin:0},"* + ul:not([class]), * + ol:not([class]), * + dl:not([class]), * + pre":{marginTop:(0,i.XH)(1.5)},"ul:not([class]), ol:not([class])":{"> li":{marginTop:(0,i.XH)(.5),"> ul:not([class]), > ol:not([class])":{marginTop:(0,i.XH)(.5)}},"> ul:not([class])":{listStyleType:"disc"}},"dl:not([class])":{"> dd":{marginTop:(0,i.XH)(.5),paddingLeft:(0,i.XH)(.5),marginLeft:0,borderLeftWidth:i.TV.borderWidth.sm,borderLeftStyle:"solid",borderLeftColor:i._X.border},"> dt":{marginTop:(0,i.XH)(1.5),fontWeight:"bold","&:first-of-type":{marginTop:0}}},"h1:not([class])":d(d({},(0,i.vY)("xxl","heading")),{},{marginTop:0,marginBottom:0}),"h2:not([class])":d(d({},(0,i.vY)("xl","heading")),{},{marginTop:0,marginBottom:0}),"h3:not([class])":d(d({},(0,i.vY)("lg","heading")),{},{marginTop:0,marginBottom:0}),"h4:not([class])":d(d({},(0,i.vY)("md","heading")),{},{marginTop:0,marginBottom:0}),"h5:not([class])":d(d({},(0,i.vY)("sm","heading")),{},{marginTop:0,marginBottom:0}),"h6:not([class])":d(d({},(0,i.vY)("xs","heading")),{},{marginTop:0,marginBottom:0}),"* + h1:not([class])":{marginTop:(0,i.XH)(3)},"* + h2:not([class])":{marginTop:(0,i.XH)(3)},"* + h3:not([class])":{marginTop:(0,i.XH)(1.5)},"* + h4:not([class])":{marginTop:(0,i.XH)(1.5)},"* + h5:not([class])":{marginTop:(0,i.XH)(1.5)},"* + h6:not([class])":{marginTop:(0,i.XH)(1.5)},"h1 + h2:not([class])":{marginTop:(0,i.XH)(1.5)},"h2 + h3:not([class])":{marginTop:(0,i.XH)(1.5)},"em,i":{fontStyle:"italic"},"strong,b":{fontWeight:"bold"},small:d({},(0,i.vY)("xs","default")),"s,del":{textDecoration:"line-through"},ins:{textDecorationLine:"underline",textDecorationStyle:"dashed",textDecorationSkipInk:"auto"},dfn:{fontStyle:"normal"},"abbr,abbr[title]":{borderBottom:"none",textDecoration:"underline dotted"},"abbr[title]":{cursor:"help"},"a abbr":{paddingBottom:1},var:{padding:"0 1px",fontStyle:"italic",fontFamily:"serif","sup,sub":{fontFamily:i.TV.font.body,fontStyle:"normal",padding:"0 1px"}},"sub,sup":d(d({},(0,i.vY)("xs","nospace")),{},{position:"relative",verticalAlign:"baseline"}),sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},"figure:not([class])":{marginTop:(0,i.XH)(1.5),marginBottom:0,marginLeft:0,marginRight:0},"blockquote:not([class])":{marginTop:(0,i.XH)(1.5),marginBottom:(0,i.XH)(1),marginLeft:0,marginRight:0,padding:(0,i.XH)(2),borderLeftWidth:i.TV.borderWidth.xl,borderLeftStyle:"solid",borderColor:i._X.border,background:i._X.backgroundShade},"kbd:not([class]),code:not([class]),samp:not([class])":d(d({},(0,i.vY)("xs","default")),{},{padding:(0,i.XH)(.25),fontFamily:i.TV.font.monospace,display:"inline-block",borderRadius:i.TV.borderRadius,backgroundColor:i._X.backgroundShade,color:i._X.foregroundText}),"pre:not([class])":{fontFamily:i.TV.font.monospace},"pre code":{display:"block",tabSize:4},"hr:not([class])":{boxSizing:"content-box",height:0,overflow:"visible",border:"none",borderTopWidth:i.TV.borderWidth.sm,borderTopStyle:"solid",borderColor:i._X.border,marginBottom:(0,i.XH)(1.5)},"* + hr:not([class])":{marginTop:(0,i.XH)(1.5)}}),"","")},2413:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var o=r(4060),n=r(7800);function i(e){var t=e.children;return(0,n.tZ)(o.kC,{flexDirection:"column",gap:2,children:t})}},1192:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form-book",function(){return r(9676)}])}},function(e){e.O(0,[717,110,822,889,774,888,179],(function(){return t=1192,e(e.s=t);var t}));var t=e.O();_N_E=t}]);