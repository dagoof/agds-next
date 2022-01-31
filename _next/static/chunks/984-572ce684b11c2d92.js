"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{6378:function(t,e,r){r.d(e,{L:function(){return K}});var n=r(984),o=r(7023),i=r(9251),a=r(849),c=r(1670),l=r(181),d=(r(7378),r(3271)),u=r.n(d),f=r(7820),s="--nav-linkHoverBg",h="--nav-linkActiveBg",g="--nav-bottomBar",p={linkHoverBg:"var(".concat(s,")"),linkActiveBg:"var(".concat(h,")"),bottomBar:"var(".concat(g,")")},b=r(7800);function v(t){var e=t.onClick,r=t.children;return(0,b.tZ)(n.xu,{as:"button",display:{xs:"flex",md:"none"},flexDirection:"column",alignItems:"center",fontSize:"xs",lineHeight:"nospace",gap:.5,padding:1,focus:!0,css:(0,c.iv)({background:"transparent",color:f.pT.foreground.action,"&:hover":{color:f.pT.foreground.text,backgroundColor:p.linkHoverBg}},"",""),onClick:e,children:r})}function m(t){var e=t.onClick;return(0,b.BX)(v,{onClick:e,children:[(0,b.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:[(0,b.tZ)("rect",{x:"4",y:"16",width:"16",height:"2"}),(0,b.tZ)("rect",{x:"4",y:"11",width:"16",height:"2"}),(0,b.tZ)("rect",{x:"4",y:"6",width:"16",height:"2"})]}),(0,b.tZ)("span",{children:"Menu"})]})}function y(t){var e=t.onClick;return(0,b.BX)(v,{onClick:e,children:[(0,b.BX)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentcolor",xmlns:"http://www.w3.org/2000/svg",children:[(0,b.tZ)("rect",{x:"6",y:"17.3137",width:"16",height:"2",transform:"rotate(-45 6 17.3137)"}),(0,b.tZ)("rect",{x:"7.41406",y:"6",width:"16",height:"2",transform:"rotate(45 7.41406 6)"})]}),(0,b.tZ)("span",{children:"Close"})]})}var O={light:{theme:"light",background:"page",hover:"shade"},lightAlt:{theme:"light",background:"pageAlt",hover:"shadeAlt"},dark:{theme:"dark",background:"page",hover:"shade"},darkAlt:{theme:"dark",background:"pageAlt",hover:"shadeAlt"},agriculture:{theme:"dark",background:"shade",hover:"page"}},x={name:"bjn8wh",styles:"position:relative"};function j(t){var e,r=t.variant,o=t.children,i=O[r],d=i.theme,p=i.background,v=i.hover,j=(0,f.hb)(!1),k=(0,l.Z)(j,3),Z=k[0],D=k[1],S=k[2];return(0,b.BX)(n.xu,{"data-name":"nav-container",theme:d,background:p,color:"text",css:(0,c.iv)((e={position:"relative"},(0,a.Z)(e,s,f.pT.background[v]),(0,a.Z)(e,h,f.pT.background[p]),(0,a.Z)(e,g,f.xk.accent),e),"",""),children:[(0,b.tZ)(P,{}),(0,b.tZ)(n.kC,{as:"nav",justifyContent:"center",css:x,children:(0,b.BX)(n.xu,{maxWidth:f.TV.maxWidth.container,width:"100%",paddingX:{xs:.75,md:2},children:[(0,b.tZ)(m,{onClick:D}),(0,b.tZ)(u(),{active:Z,focusTrapOptions:{clickOutsideDeactivates:!0,onDeactivate:S},children:(0,b.BX)("div",{css:(0,c.iv)((0,a.Z)({},f.TV.mediaQuery.max.sm,{zIndex:200,position:"fixed",display:Z?"block":"none",background:f.pT.background.page,top:0,left:0,bottom:0,width:"100%",maxWidth:f.TV.maxWidth.mobileMenu,padding:(0,f.XH)(1),boxSizing:"border-box"}),"",""),children:[(0,b.tZ)(y,{onClick:S}),(0,b.tZ)(n.kC,{justifyContent:"space-between",width:"100%",flexDirection:{xs:"column",md:"row"},children:o})]})})]})}),(0,b.tZ)(w,{menuOpen:Z})]})}var k={name:"fywge2",styles:"position:fixed;top:0;left:0;bottom:0;right:0;background:#000;opacity:0.8;z-index:100"};function w(t){return t.menuOpen?(0,b.tZ)(n.xu,{display:{xs:"block",md:"none"},css:k}):null}function P(){return(0,b.tZ)(n.xu,{"data-name":"nav-bottom-bar",display:{xs:"none",md:"block"},paddingTop:.5,css:(0,c.iv)({position:"absolute",bottom:0,left:0,right:0,backgroundColor:p.bottomBar},"","")})}var Z=r(89);function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function z(t){var e=t.children,r=t.active;return(0,b.tZ)(n.xu,{as:"li",paddingBottom:{md:.5},fontFamily:"body",fontSize:"sm",lineHeight:"default",css:(0,f.mq)({" a":{position:"relative",display:"block",color:f.pT.foreground[r?"text":"action"],padding:(0,f.XH)(1),textDecoration:"none",fontWeight:(0,f.qz)({xs:r?"bold":void 0,md:"normal"}),"&:after":{content:(0,f.qz)({xs:void 0,md:'""'}),height:(0,f.XH)(.5),position:"absolute",top:"100%",left:0,right:0,backgroundColor:r?p.linkActiveBg:"transparent"},"&:focus":{outline:"none","&:before":S({content:'""',position:"absolute",zIndex:100,top:0,left:0,height:"100%",width:"100%"},f.Kl),"&::-moz-focus-inner":{border:0}},"&:hover":{textDecoration:"underline",textDecorationSkipInk:"auto",color:f.pT.foreground.text,backgroundColor:p.linkHoverBg,"&::after":{background:r?p.linkHoverBg:"transparent"}}}}),children:e})}var H=["href","label"];function C(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return W(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function X(t){var e=t.links,r=t.activePath,o=(0,f.yF)(),i=function(t,e){if(!e)return"";var r,n="",o=C(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.href===e)return i.href;null!==e&&void 0!==e&&e.startsWith(i.href)&&i.href.length>n.length&&(n=i.href)}}catch(a){o.e(a)}finally{o.f()}return n}(e,r);return(0,b.tZ)(n.kC,{as:"ul",flexDirection:{xs:"column",md:"row"},alignItems:"stretch",css:(0,c.iv)((0,a.Z)({},f.TV.mediaQuery.max.sm,{"& > li":{borderTop:"1px solid ".concat(f.pT.border)}}),"",""),children:e.map((function(t,e){var r=t.href,n=t.label,a=(0,Z.Z)(t,H);return(0,b.tZ)(z,{active:r===i,children:(0,b.tZ)(o,B(B({href:r},a),{},{children:n}))},e)}))})}function q(t){var e=t.variant,r=void 0===e?"darkAlt":e,n=t.links,o=t.secondaryLinks,i=t.activePath;return(0,b.BX)(j,{variant:r,children:[(0,b.tZ)(X,{links:n,activePath:i}),null!==o&&void 0!==o&&o.length?(0,b.tZ)(X,{links:o,activePath:i}):null]})}var A=r(6677),E=[{label:"Home",href:"/"},{label:"Packages",href:"/packages"},{label:"Releases",href:"/releases"},{label:"Guides",href:"/guides"}],V=[{label:"GitHub",href:"https://github.com/steelthreads/agds-next"}],I=function(){var t=(0,A.useRouter)();return(0,b.BX)(n.Kq,{children:[(0,b.tZ)(i.h4,{variant:"dark",logo:(0,b.tZ)(o.T,{}),heading:"AG Design-System",subline:"Welcome to the AG Design-System"}),(0,b.tZ)(q,{variant:"agriculture",links:E,secondaryLinks:V,activePath:t.asPath})]})},F=r(899),R=r(5613),L=r(837),Y=[{label:"Home",href:"/"},{label:"Storybook",href:"/storybook/index.html"},{label:"Playroom",href:"/playroom/index.html"}],G=function(){return(0,b.BX)(F.$,{children:[(0,b.tZ)(L.Mc,{links:Y,horizontal:!0}),(0,b.tZ)(n.iz,{}),(0,b.tZ)(R.x,{children:"\xa9 Commonwealth of Australia."})]})},K=function(t){var e=t.children;return(0,b.BX)(n.kC,{flexDirection:"column",fontFamily:"body",theme:"light",minHeight:"100vh",children:[(0,b.tZ)(I,{}),(0,b.tZ)(n.xu,{as:"main",flexGrow:1,children:e}),(0,b.tZ)(G,{})]})}},984:function(t,e,r){r.d(e,{xu:function(){return x},iz:function(){return j},kC:function(){return P},Kq:function(){return S},j4:function(){return b}});var n=r(849),o=r(89),i=r(1670),a=r(7820),c=["theme","color","background","border","borderLeft","borderRight","borderTop","borderBottom","borderX","borderY","rounded","display","flexDirection","flexWrap","flexGrow","flexShrink","justifyContent","alignItems","gap","width","minWidth","maxWidth","height","minHeight","maxHeight","paddingTop","paddingBottom","paddingRight","paddingLeft","paddingX","paddingY","padding","fontWeight","fontFamily","fontSize","focus","lineHeight"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t){var e=t.color,r=t.background;return{color:e?a.pT.foreground[e]:void 0,backgroundColor:r?a.pT.background[r]:void 0}}function f(t){var e,r=t.fontWeight,n=t.fontFamily,o=t.fontSize,i=t.lineHeight,c=void 0===i?"default":i,l=(0,a.qz)(o,(function(t){return(0,a.vY)(t,c)})),d=null!==(e=null===l||void 0===l?void 0:l.reduce((function(t,e,r){return t.fontSize[r]=s(e)?e.fontSize:null,t.lineHeight[r]=s(e)?e.lineHeight:null,t}),{fontSize:[],lineHeight:[]}))&&void 0!==e?e:{fontSize:void 0,lineHeight:void 0},u=d.fontSize,f=d.lineHeight;return{fontWeight:(0,a.qz)(r,(function(t){return a.TV.fontWeight[t]})),fontFamily:(0,a.qz)(n,(function(t){return a.TV.font[t]})),fontSize:u,lineHeight:f}}function s(t){return!!t}function h(t){var e=t.display,r=t.flexDirection,n=t.flexWrap,o=t.flexGrow,i=t.flexShrink,c=t.justifyContent,l=t.alignItems,d=t.gap,u=t.width,f=t.minWidth,s=t.maxWidth,h=t.height,g=t.minHeight,p=t.maxHeight;return{display:(0,a.qz)(e),flexDirection:(0,a.qz)(r),flexWrap:(0,a.qz)(n),flexGrow:(0,a.qz)(o),flexShrink:(0,a.qz)(i),justifyContent:(0,a.qz)(c),alignItems:(0,a.qz)(l),gap:(0,a.qz)(d,a.XH),width:(0,a.qz)(u),minWidth:(0,a.qz)(f),maxWidth:(0,a.qz)(s),height:(0,a.qz)(h),minHeight:(0,a.qz)(g),maxHeight:(0,a.qz)(p)}}function g(t){var e,r,n,o,i=t.border,c=t.borderLeft,l=t.borderRight,d=t.borderTop,u=t.borderBottom,f=t.borderX,s=t.borderY,h=t.rounded,g=i||c||l||u||f||s;return{borderWidth:0,borderLeftWidth:(null!==(e=null!==i&&void 0!==i?i:f)&&void 0!==e?e:c)?"1px":void 0,borderRightWidth:(null!==(r=null!==i&&void 0!==i?i:f)&&void 0!==r?r:l)?"1px":void 0,borderTopWidth:(null!==(n=null!==i&&void 0!==i?i:s)&&void 0!==n?n:d)?"1px":void 0,borderBottomWidth:(null!==(o=null!==i&&void 0!==i?i:s)&&void 0!==o?o:u)?"1px":void 0,borderColor:g?a.pT.border:void 0,borderStyle:g?"solid":void 0,borderRadius:h?a.TV.borderRadius:void 0}}function p(t){var e,r,n,o,i=t.paddingTop,c=t.paddingBottom,l=t.paddingRight,d=t.paddingLeft,u=t.paddingX,f=t.paddingY,s=t.padding;return{paddingTop:(0,a.qz)(null!==(e=null!==i&&void 0!==i?i:f)&&void 0!==e?e:s,a.XH),paddingBottom:(0,a.qz)(null!==(r=null!==c&&void 0!==c?c:f)&&void 0!==r?r:s,a.XH),paddingRight:(0,a.qz)(null!==(n=null!==l&&void 0!==l?l:u)&&void 0!==n?n:s,a.XH),paddingLeft:(0,a.qz)(null!==(o=null!==d&&void 0!==d?d:u)&&void 0!==o?o:s,a.XH)}}function b(t){return t.focus?{":focus":a.Kl,"&::-moz-focus-inner":{border:0}}:void 0}var v=r(181),m=r(7800),y=["as"];function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var x=(0,a.yV)((function(t,e){var r=t.as,l=void 0===r?"div":r,s=function(t){var e=t.theme,r=t.color,n=t.background,l=t.border,s=t.borderLeft,v=t.borderRight,m=t.borderTop,y=t.borderBottom,O=t.borderX,x=t.borderY,j=t.rounded,k=t.display,w=t.flexDirection,P=t.flexWrap,Z=t.flexGrow,D=t.flexShrink,S=t.justifyContent,z=t.alignItems,H=t.gap,C=t.width,W=t.minWidth,T=t.maxWidth,B=t.height,X=t.minHeight,q=t.maxHeight,A=t.paddingTop,E=t.paddingBottom,V=t.paddingRight,I=t.paddingLeft,F=t.paddingX,R=t.paddingY,L=t.padding,Y=t.fontWeight,G=t.fontFamily,K=t.fontSize,M=t.focus,_=t.lineHeight,$=(0,o.Z)(t,c);return[(0,i.iv)([e?a.np[e]:void 0,{boxSizing:"border-box",listStyle:"none",margin:0,padding:0},(0,a.mq)(d(d(d(d(d(d({},u({background:n,color:r})),g({border:l,borderLeft:s,borderRight:v,borderTop:m,borderBottom:y,borderX:O,borderY:x,rounded:j})),h({display:k,flexDirection:w,flexWrap:P,flexGrow:Z,flexShrink:D,justifyContent:S,alignItems:z,gap:H,width:C,minWidth:W,maxWidth:T,height:B,minHeight:X,maxHeight:q})),p({paddingTop:A,paddingBottom:E,paddingRight:V,paddingLeft:I,paddingX:F,paddingY:R,padding:L})),f({fontWeight:Y,fontFamily:G,fontSize:K,lineHeight:_})),b({focus:M})))],"",""),$]}((0,o.Z)(t,y)),x=(0,v.Z)(s,2),j=x[0],k=x[1];return(0,m.tZ)(l,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,css:j},k))}));function j(t){var e=t.accent;return(0,m.tZ)("hr",{css:(0,i.iv)({boxSizing:"content-box",height:0,margin:0,overflow:"visible",border:"none",borderTopWidth:1,borderTopStyle:"solid",borderColor:e?a.xk.accent:a.pT.border,width:"100%"},"","")})}var k=["inline","flexDirection","justifyContent","alignItems","display"];function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var P=(0,a.yV)((function(t,e){var r=t.inline,i=void 0!==r&&r,a=t.flexDirection,c=void 0===a?"row":a,l=t.justifyContent,d=void 0===l?"flex-start":l,u=t.alignItems,f=void 0===u?"stretch":u,s=t.display,h=(0,o.Z)(t,k);return(0,m.tZ)(x,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,display:null!==s&&void 0!==s?s:i?"inline-flex":"flex",flexDirection:c,justifyContent:d,alignItems:f},h))})),Z=["flexDirection","justifyContent","alignItems"];function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var S=(0,a.yV)((function(t,e){var r=t.flexDirection,i=void 0===r?"column":r,a=t.justifyContent,c=void 0===a?"flex-start":a,l=t.alignItems,d=void 0===l?"stretch":l,u=(0,o.Z)(t,Z);return(0,m.tZ)(x,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,display:"flex",flexDirection:i,justifyContent:c,alignItems:d},u))}))},897:function(t,e,r){r.d(e,{V:function(){return c}});var n=r(984),o=r(7820),i=r(7800),a={small:{xs:1,md:2},medium:{xs:1,md:3},large:{xs:1,md:4}};function c(t){var e=t.as,r=void 0===e?"section":e,c=t.spacing,l=void 0===c?"small":c,d=t.theme,u=t.background,f=t.children;return(0,i.tZ)(n.kC,{as:r,justifyContent:"center",theme:d,background:u,children:(0,i.tZ)(n.Kq,{width:"100%",maxWidth:o.TV.maxWidth.container,paddingY:a[l],paddingX:{xs:1,md:2},gap:1,children:f})})}},899:function(t,e,r){r.d(e,{$:function(){return c}});var n=r(1670),o=r(984),i=r(7820),a=r(7800),c=function(t){var e=t.variant,r=void 0===e?"dark":e,c=t.children;return(0,a.tZ)(o.kC,{as:"footer",justifyContent:"center",background:l[r].background,color:"text",theme:l[r].theme,paddingY:3,css:(0,n.iv)({borderTop:"4px solid",borderColor:i.xk.accent,li:{marginLeft:0},hr:{borderColor:i.xk.accent}},"",""),children:(0,a.tZ)(o.Kq,{maxWidth:i.TV.maxWidth.container,width:"100%",gap:1,paddingX:i.TV.gutter,children:c})})},l={light:{theme:"light",background:"page"},lightAlt:{theme:"light",background:"pageAlt"},dark:{theme:"dark",background:"page"},darkAlt:{theme:"dark",background:"pageAlt"}}},9251:function(t,e,r){r.d(e,{h4:function(){return s},R5:function(){return d},gM:function(){return f}});var n=r(984),o=r(5613),i=r(7820),a=r(7800);var c={name:"18x7o4s",styles:"text-decoration:none;:hover{text-decoration:underline;text-decoration-skip-ink:auto;}"},l={name:"ps6rdj",styles:" img, svg{width:100%;}"};function d(t){var e=t.href,r=void 0===e?"/":e,d=t.logo,u=t.heading,f=t.subline,s=(0,i.yF)();return(0,a.BX)(n.kC,{as:s,href:r,flexDirection:{xs:"column",md:"row"},color:"text",gap:1,focus:!0,alignItems:"stretch",css:c,children:[d?(0,a.tZ)(n.kC,{alignItems:"flex-start",maxWidth:"16rem",css:l,children:d}):null,d?(0,a.tZ)(n.xu,{borderRight:!0,display:{xs:"none",md:"block"}}):null,(0,a.BX)(n.Kq,{justifyContent:"center",children:[(0,a.tZ)(o.x,{lineHeight:"default",fontSize:{xs:"md",md:"xl"},fontWeight:"bold",children:u}),f&&(0,a.tZ)(o.x,{color:"muted",fontSize:{xs:"sm",md:"md"},children:f})]})]})}r(7378);var u={light:{theme:"light",background:"page"},lightAlt:{theme:"light",background:"pageAlt"},dark:{theme:"dark",background:"page"},darkAlt:{theme:"dark",background:"pageAlt"}};function f(t){var e=t.variant,r=t.children;return(0,a.tZ)(n.kC,{as:"header",theme:u[e].theme,background:u[e].background,color:"text",paddingY:{xs:1,md:3},justifyContent:"center",children:(0,a.tZ)(n.kC,{justifyContent:"flex-start",maxWidth:i.TV.maxWidth.container,paddingX:{xs:.75,md:2},width:"100%",children:r})})}function s(t){var e=t.logo,r=t.heading,n=t.subline,o=t.variant,i=void 0===o?"dark":o,c=t.href,l=void 0===c?"/":c;return(0,a.tZ)(f,{variant:i,children:(0,a.tZ)(d,{logo:e,href:l,heading:r,subline:n})})}},6219:function(t,e,r){r.d(e,{H1:function(){return h},H2:function(){return g},H3:function(){return p},H4:function(){return b},H5:function(){return v},H6:function(){return m},X:function(){return s}});var n=r(849),o=r(89),i=(r(7378),r(7820)),a=r(984),c=r(7800),l=["as","type","color","fontSize","fontFamily","fontWeight","lineHeight"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={h1:"xxl",h2:"xl",h3:"lg",h4:"md",h5:"sm",h6:"xs"},s=(0,i.yV)((function(t,e){var r=t.as,n=t.type,i=void 0===n?"h2":n,d=t.color,s=void 0===d?"text":d,h=t.fontSize,g=t.fontFamily,p=void 0===g?"body":g,b=t.fontWeight,v=void 0===b?"bold":b,m=t.lineHeight,y=void 0===m?"heading":m,O=(0,o.Z)(t,l),x=null!==r&&void 0!==r?r:i,j=null!==h&&void 0!==h?h:f[i];return(0,c.tZ)(a.xu,u({as:x,ref:e,color:s,fontSize:j,fontFamily:p,fontWeight:v,lineHeight:y},O))})),h=(0,i.yV)((function(t,e){return(0,c.tZ)(s,u({ref:e,as:"h1",type:"h1"},t))})),g=(0,i.yV)((function(t,e){return(0,c.tZ)(s,u({ref:e,as:"h2",type:"h2"},t))})),p=(0,i.yV)((function(t,e){return(0,c.tZ)(s,u({ref:e,as:"h3",type:"h3"},t))})),b=(0,i.yV)((function(t,e){return(0,c.tZ)(s,u({ref:e,as:"h4",type:"h4"},t))})),v=(0,i.yV)((function(t,e){return(0,c.tZ)(s,u({ref:e,as:"h5",type:"h5"},t))})),m=(0,i.yV)((function(t,e){return(0,c.tZ)(s,u({ref:e,as:"h6",type:"h6"},t))}))},837:function(t,e,r){r.d(e,{Mc:function(){return b}});var n=r(849),o=r(89),i=r(984),a=r(7800),c=function(t){var e=t.children,r=t.horizontal;return(0,a.tZ)(i.Kq,{as:"ul",gap:r?1:.5,flexDirection:r?"row":"column",flexWrap:"wrap",children:e})},l=r(1670),d=r(7820);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(t){var e=(0,d.yF)();return(0,a.tZ)(i.xu,{as:"li",fontSize:"sm",fontFamily:"body",lineHeight:"default",css:(0,l.iv)({a:{color:d.pT.foreground.action,textDecoration:"underline","&:hover":{color:d.pT.foreground.action,textDecoration:"none"},"&:focus":d.Kl}},"",""),children:(0,a.tZ)(e,f({},t))})},h=["label"];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=function(t){var e=t.links,r=t.horizontal;return(0,a.tZ)(c,{horizontal:r,children:e.map((function(t,e){var r=t.label,n=(0,o.Z)(t,h);return(0,a.tZ)(s,p(p({},n),{},{children:r}),e)}))})}},5613:function(t,e,r){r.d(e,{x:function(){return f}});var n=r(849),o=r(89),i=r(7820),a=r(984),c=r(7800),l=["as","color","fontFamily","fontSize","fontWeight","lineHeight"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var u={name:"172op4w",styles:"margin-top:0;margin-bottom:0"},f=(0,i.yV)((function(t,e){var r=t.as,i=void 0===r?"span":r,f=t.color,s=void 0===f?"text":f,h=t.fontFamily,g=void 0===h?"body":h,p=t.fontSize,b=void 0===p?"sm":p,v=t.fontWeight,m=void 0===v?"normal":v,y=t.lineHeight,O=void 0===y?"default":y,x=(0,o.Z)(t,l);return(0,c.tZ)(a.xu,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,as:i,css:u,color:s,fontFamily:g,fontSize:b,fontWeight:m,lineHeight:O},x))}))}}]);