import{c as x,M as T,m as P,u as F,j as s,r as V,R as _,b as $,L,a as c,F as j,V as G,d as N,f as O,s as B}from"../../_virtual_settings-W9jktp4-.js";import{C as w,T as R,t as E,s as f}from"../../styles-CIndU-LK.js";import{b as M,S as H}from"../../ArrayConstants-PhubJoph.js";import{L as Y}from"../../Line-BWJ8xhLn.js";import{u as J}from"../../useRandom-BZdmpElt.js";import{d as K}from"../../delay-49EBeRuT.js";function Q(){const e=new Map;return e.entries(),new Proxy(e,U)}const U={get(e,i){if(Reflect.has(e,i))return Reflect.get(e,i);if(i==="mapRefs")return function(n){const u=[];for(const t of e.values())u.push(n(t(),u.length));return u};if(typeof i=="string"){let n=e.get(i);return n||(n=x(),e.set(i,n)),n}},has(e,i){return Reflect.has(e,i)?!0:typeof i=="string"?e.has(i):!1}};let W;W??(W=new T("dichotomicSearch",!1));W.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const X=W;let z;z??(z=new T("dichotomicSearch",!1));z.loadData({version:0,timeEvents:[],seed:1370096817});const Z=z,m={...H};function y(e){return parseInt(e.childAs(0).text(),10)}function v(e){return e.bottom().addY(20)}function k(e,i,n){return s(Y,{ref:e,points:[[0,0],[0,100]],stroke:i,arrowSize:25,lineWidth:10,position:v(n),startArrow:!0})}function*ee(e,i=1){let n=e.scale();yield*c(e.scale(0).scale(n,i),e.opacity(0).opacity(1,i))}function*D(e){let i=e.lineWidth(),n=e.arrowSize();e.opacity(0),e.end(0),e.lineWidth(0),e.arrowSize(0),yield*c(e.lineWidth(i,1),e.arrowSize(n,1),e.opacity(1,1),e.end(1,1))}const d=P(function*(e){const i=F().variables.get("seed",42),n=F().variables.get("size",10)(),u=J(i());e.fill(w.background);const t=[],q=-(n*M(m)-m.boxGap)/2,C=x();e.add(s(L,{layout:!0,ref:C,gap:40,children:V(n).map(o=>u.nextInt(1,70)).sort().map((o,r)=>s(_,{ref:$(t,r),size:m.boxWidth,lineWidth:m.boxStrokeWidth,stroke:w.surface,fill:w.background,radius:m.boxRadius,topLeft:q+r*M(m),opacity:0,alignItems:"center",justifyContent:"center",children:s(R,{text:o.toString(),...E})}))})),yield*f(.025,...t.map(o=>ee(o,1)));const I=x(),S=x();e.add(s(L,{layout:!0,y:-200,scale:2,gap:10,children:[s(R,{ref:I,fill:"white"}),s(R,{ref:S,fill:"white",fontWeight:900})]}));let p=u.nextInt(0,t.length-1),b=y(t[p]);yield*f(.25,I().text("Target: ",1),S().text(`${b}`,1),K(.5,c(S().scale(1.5,.5).to(1,.5),t[p].fill("rgba(255, 255, 255, 0.25)",.5).to("rgba(255, 255, 255, 0.0)",.5),t[p].lineWidth(15,.5).to(8,.5),t[p].scale(1.1,.5).to(1,.5))));const a=Q();e.add(s(j,{children:[k(a.left,"white",t[0]),k(a.right,"white",t[t.length-1])]})),yield*c(...a.mapRefs(o=>D(o)));let h=0,g=t.length-1;for(;y(t[h])<=y(t[g]);){const o=Math.floor((h+g)/2);let r=t[o];e.add(k(a.mid,"orange",r)),yield*D(a.mid());const A=y(r);if(A===b){yield*c(a.left().opacity(0,1),a.left().position(a.mid().position,1),a.right().opacity(0,1),a.right().position(a.mid().position,1),a.mid().stroke("lightgreen",1),r.stroke("lightgreen",1),r.fill("rgba(0, 255, 0, 0.2)",1),f(.1,...t.slice(h-1,o).map(l=>l.opacity(.25,1))),f(.1,...t.slice(o+1,g+2).reverse().map(l=>l.opacity(.25,1))));break}A<b?(yield*c(a.left().position(v(t[o+1]),1),a.mid().opacity(0,1),f(.1,...t.slice(h,o+1).map(l=>l.opacity(.25,1)))),h=o+1):(yield*c(a.right().position(v(t[o-1]),1),a.mid().opacity(0,1),f(.1,...t.slice(o,g+1).reverse().map(l=>l.opacity(.25,1)))),g=o-1),a.mid().remove()}});d.name="dichotomicSearch";Z.attach(d.meta);d.onReplaced??(d.onReplaced=new G(d.config));const te=N({scenes:[d]}),le=O("dichotomicSearch",{core:"3.17.2",two:"3.17.2",ui:"3.17.2",vitePlugin:"3.17.2"},[],te,X,B);export{le as default};
