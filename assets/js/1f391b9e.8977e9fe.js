"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[6061],{67973:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});t(96540);var s=t(34164),n=t(1003),i=t(17559),r=t(16103),l=t(77910),o=t(67763),c=t(50996),d=t(12153);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var p=t(74848);function g(e){const{content:a}=e,{metadata:{title:t,editUrl:g,description:x,frontMatter:h,unlisted:u,lastUpdatedBy:j,lastUpdatedAt:A},assets:v}=a,{keywords:_,wrapperClassName:f,hide_table_of_contents:k}=h,w=v.image??h.image,b=!!(g||A||j);return(0,p.jsx)(n.e3,{className:(0,s.A)(f??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(n.be,{title:t,description:x,keywords:_,image:w}),(0,p.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,p.jsxs)("div",{className:(0,s.A)("row",m.mdxPageWrapper),children:[(0,p.jsxs)("div",{className:(0,s.A)("col",!k&&"col--8"),children:[u&&(0,p.jsx)(c.A,{}),(0,p.jsx)("article",{children:(0,p.jsx)(l.A,{children:(0,p.jsx)(a,{})})}),b&&(0,p.jsx)(d.A,{className:(0,s.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:g,lastUpdatedAt:A,lastUpdatedBy:j})]}),!k&&a.toc.length>0&&(0,p.jsx)("div",{className:"col col--2",children:(0,p.jsx)(o.A,{toc:a.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},11292:(e,a,t)=>{t.d(a,{A:()=>g});var s=t(43059),n=t(96540),i=t(94335),r=t(69762),l=t(56406),o=t(50526),c=t(89229),d=t(3246),m=t(37399),p=t(74848);const g={...s.A,VSCodeExtension:function(e){let{id:a}=e;const[t,s]=(0,n.useState)("loading"),g=`https://marketplace.visualstudio.com/items?itemName=${a}`,x=a.split(".")[1];return(0,n.useEffect)((()=>{(async()=>{try{const{data:e}=await(0,i.A)(g),a=r.Hh(e)("div#section-banner").find("img.image-display").attr().src;s(a)}catch(e){s(null)}})()}),[]),null==t?(0,p.jsx)(l.A,{title:`Unable to fetch link to VSCode extension with id: "${a}"`,children:(0,p.jsx)(o.A,{avatar:(0,p.jsx)(m.In,{icon:"openmoji:cross-mark",height:"48"}),label:x,variant:"outlined",color:"error"})}):(0,p.jsx)(o.A,{component:"a",avatar:"loading"!=t&&(0,p.jsx)(c.A,{alt:a,src:t,component:"span"})||(0,p.jsx)(d.A,{size:24,component:"span"}),label:x,href:g,clickable:!0,variant:"outlined"})},Icon:m.In}}}]);