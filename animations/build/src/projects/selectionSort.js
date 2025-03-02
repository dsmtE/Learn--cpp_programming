import{M as D,E as d,T as W,I as h,L as z,r as k,j as u,b as G,R as S,U as L,a as g,F as m,m as O,u as H,q as F,c as A,W as P,J as _,w as j,V as $,d as q,f as M,s as T}from"../../_virtual_settings-DVCYLlHS.js";import{C as a,T as x,t as B,u as E,s as U}from"../../styles-DiP1wR1d.js";let V;V??(V=new D("selectionSort",!1)),V.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:500},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const J=V;let R;R??(R=new D("selectionSort",!1)),R.loadData({version:0,timeEvents:[],seed:3911136328});const N=R;var K=Object.defineProperty,f=(e,t,i,s)=>{for(var l,a=void 0,o=e.length-1;o>=0;o--)(l=e[o])&&(a=l(t,i,a)||a);return a&&K(t,i,a),a};class p extends z{constructor(e){super({layout:!0,gap:()=>this.boxGap(),spawner:()=>(console.log(`spawner: ${Date.now()}`),this.rects.slice(0,this.length())),...e}),this.length=()=>this.values().length,this.rectsView=(e=0,t=this.length())=>this.rects.slice(e,t),this.rects=[],this.pool=k(64).map((e=>u(S,{ref:G(this.rects,e),size:this.boxWidth(),lineWidth:this.boxStrokeWidth,stroke:a.surface,fill:this.fillColor,radius:this.boxRadius,alignItems:"center",justifyContent:"center",children:u(x,{text:()=>this.values()[e].toString(),...B})})))}*highLightAt(e,t,i=this.highlightColor(),s=L){yield*this.rects[e].stroke(i,t,s)}*highLightAll(e,t=this.highlightColor(),i=L){yield*g(...k(this.values.length).map((s=>this.highLightAt(s,e,t,i))))}*deHighLightAt(e,t,i=this.strokeColor(),s=L){yield*this.rects[e].stroke(i,t,s)}*deHighLightAll(e,t=this.strokeColor(),i=L){yield*g(...k(this.values.length).map((s=>this.deHighLightAt(s,e,t,i))))}addLast(e){this.values([...this.values(),e])}removeLast(){this.values(this.values().slice(0,this.values().length-1))}addFirst(e){this.values([e,...this.values()])}removeFirst(){this.values(this.values().slice(1))}insertAt(e,t){this.values([...this.values().slice(0,e),t,...this.values().slice(e)])}removeAt(e){const t=this.values()[e];return this.values([...this.values().slice(0,e),...this.values().slice(e+1)]),t}*swap(e,t,i){let s=this.rects[e].clone(),l=this.rects[t].clone();this.parent().add(s),this.parent().add(l),s.absolutePosition(this.rects[e].absolutePosition()),l.absolutePosition(this.rects[t].absolutePosition());const a=this.rects[e].opacity(),o=this.rects[t].opacity();this.rects[e].opacity(0),this.rects[t].opacity(0),yield*i(s,l),s.remove(),l.remove(),[this.rects[e],this.rects[t]]=[this.rects[t],this.rects[e]];let h=this.rects[e].children();this.rects[e].children(this.rects[t].children()),this.rects[t].children(h);let r=[...this.values()];[r[e],r[t]]=[r[t],r[e]],this.values(r),this.rects[e].opacity(a),this.rects[t].opacity(o)}*swapUpDown(e,t,i){const s=this.boxGap()+this.boxWidth();yield*this.swap(e,t,(function*(e,t){yield*g(e.y(e.y()-s,.5),t.y(t.y()-s,.5)),yield*g(e.x(t.x(),i),t.x(e.x(),i)),yield*g(e.y(e.y()+s,.5),t.y(t.y()+s,.5))}))}}f([d([]),m()],p.prototype,"values"),f([d(128),m()],p.prototype,"boxWidth"),f([d(128),m()],p.prototype,"boxHeight"),f([d(28),m()],p.prototype,"boxGap"),f([d(4),m()],p.prototype,"boxRadius"),f([d(8),m()],p.prototype,"boxStrokeWidth"),f([d(new h(a.blue)),W()],p.prototype,"highlightColor"),f([d(new h(a.surface)),W()],p.prototype,"strokeColor"),f([d(new h(a.background)),W()],p.prototype,"fillColor");const b=O((function*(e){const t=H().variables.get("seed",42),i=H().variables.get("size",8),s=E(t()),l=k(i()).map((e=>s.nextInt(1,70))),o=A(),r=A(),n=A(),c=F(0),d=F(0);e.fill(a.background),e.add(u(_,{children:[u(p,{ref:o,values:l,highlightColor:new h(a.blue),strokeColor:new h(a.surface),fillColor:new h(a.background)}),u(P,{ref:r,x:()=>o().left().x+o().boxWidth()/2+c()*(o().boxWidth()+o().boxGap()),y:o().boxHeight()/2+20,children:[u(S,{stroke:a.blue,lineWidth:4,radius:4,width:o().boxWidth(),height:2,opacity:1}),u(x,{fill:a.whiteLabel,text:()=>`i = ${Math.ceil(c())}`,scale:.8,y:30})]}),u(P,{ref:n,x:()=>o().left().x+o().boxWidth()/2+d()*(o().boxWidth()+o().boxGap()),y:-o().boxHeight()/2-20,children:[u(S,{stroke:a.blue,lineWidth:4,radius:4,width:o().boxWidth(),height:2,opacity:1}),u(x,{fill:a.whiteLabel,text:()=>`j = ${Math.ceil(d())}`,scale:.8,y:-30})]})]})),yield*j(1);for(let p=0;p<o().length();p++){yield*c(p,.5);let e=p;yield*o().rectsView()[e].fill(o().highlightColor,.5),p+1<o().length()&&(d(p+1),yield*n().opacity(1,.3));for(let t=p+1;t<o().length();t++)yield*g(o().highLightAt(t,.5),d(t,.5)),o().values()[e]>o().values()[t]?(yield*g(o().rectsView()[e].fill(new h(a.transparent),.5),o().rectsView()[t].fill(o().highlightColor,.5),o().deHighLightAt(t,.5)),e=t):yield*o().deHighLightAt(t,.5);yield*n().opacity(0,.3),p!=e?(yield*g(o().rectsView()[e].fill(new h(a.transparent),.5),o().highLightAt(e,.5)),yield*o().swapUpDown(p,e,.5),yield*g(o().deHighLightAt(p,.5),o().deHighLightAt(e,.5))):yield*o().rectsView()[e].fill(new h(a.transparent),.5),yield*o().rectsView()[p].stroke(new h(a.green),.5)}yield*g(r().opacity(0,.3),n().opacity(0,.3)),yield*j(.5),yield*U(.1,...o().rectsView().map((e=>e.fill(new h(a.green),.3))))}));b.name="selectionSort",N.attach(b.meta),b.onReplaced??(b.onReplaced=new $(b.config));const Q=q({scenes:[b],variables:{size:8,seed:42}}),Z=M("selectionSort",{core:"3.17.2",two:"3.17.2",ui:"3.17.2",vitePlugin:"3.17.2"},[],Q,J,T);export{Z as default};