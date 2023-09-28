/*! For license information please see 2103.95aadd73.js.LICENSE.txt */
(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[2103],{7967:(t,e)=>{"use strict";e.N=void 0;var n=/^([^\w]*)(javascript|data|vbscript)/im,r=/&#(\w+)(^\w|;)?/g,i=/&(newline|tab);/gi,s=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,a=/^.+(:|&colon;)/gim,o=[".","/"];e.N=function(t){var e,c=(e=t||"",e.replace(r,(function(t,e){return String.fromCharCode(e)}))).replace(i,"").replace(s,"").trim();if(!c)return"about:blank";if(function(t){return o.indexOf(t[0])>-1}(c))return c;var l=c.match(a);if(!l)return c;var h=l[0];return n.test(h)?"about:blank":c}},9661:(t,e,n)=>{"use strict";n.d(e,{Z:()=>E});var r=n(3366),i=n(7462),s=n(7294),a=n(6010),o=n(4780),c=n(2641),l=n(4502),h=n(8169),u=n(5893);const d=(0,h.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var p=n(1588),f=n(7621);function g(t){return(0,f.Z)("MuiAvatar",t)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})((({theme:t,ownerState:e})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===e.variant&&{borderRadius:0},e.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})))),b=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),_=(0,c.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});const E=s.forwardRef((function(t,e){const n=(0,l.Z)({props:t,name:"MuiAvatar"}),{alt:c,children:h,className:d,component:p="div",imgProps:f,sizes:E,src:T,srcSet:x,variant:A="circular"}=n,v=(0,r.Z)(n,m);let k=null;const C=function({crossOrigin:t,referrerPolicy:e,src:n,srcSet:r}){const[i,a]=s.useState(!1);return s.useEffect((()=>{if(!n&&!r)return;a(!1);let i=!0;const s=new Image;return s.onload=()=>{i&&a("loaded")},s.onerror=()=>{i&&a("error")},s.crossOrigin=t,s.referrerPolicy=e,s.src=n,r&&(s.srcset=r),()=>{i=!1}}),[t,e,n,r]),i}((0,i.Z)({},f,{src:T,srcSet:x})),S=T||x,w=S&&"error"!==C,N=(0,i.Z)({},n,{colorDefault:!w,component:p,variant:A}),I=(t=>{const{classes:e,variant:n,colorDefault:r}=t,i={root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,o.Z)(i,g,e)})(N);return k=w?(0,u.jsx)(b,(0,i.Z)({alt:c,src:T,srcSet:x,sizes:E,ownerState:N,className:I.img},f)):null!=h?h:S&&c?c[0]:(0,u.jsx)(_,{ownerState:N,className:I.fallback}),(0,u.jsx)(y,(0,i.Z)({as:p,ownerState:N,className:(0,a.Z)(I.root,d),ref:e},v,{children:k}))}))},8456:(t,e,n)=>{"use strict";n.d(e,{Z:()=>w});var r=n(3366),i=n(7462),s=n(7294),a=n(6010),o=n(4780),c=n(917),l=n(8216),h=n(4502),u=n(2641),d=n(1588),p=n(7621);function f(t){return(0,p.Z)("MuiCircularProgress",t)}(0,d.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=n(5893);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let y,b,_,E,T=t=>t;const x=44,A=(0,c.F4)(y||(y=T`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),v=(0,c.F4)(b||(b=T`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),k=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${(0,l.Z)(n.color)}`]]}})((({ownerState:t,theme:e})=>(0,i.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:e.transitions.create("transform")},"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main})),(({ownerState:t})=>"indeterminate"===t.variant&&(0,c.iv)(_||(_=T`
      animation: ${0} 1.4s linear infinite;
    `),A))),C=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),S=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${(0,l.Z)(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})((({ownerState:t,theme:e})=>(0,i.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,c.iv)(E||(E=T`
      animation: ${0} 1.4s ease-in-out infinite;