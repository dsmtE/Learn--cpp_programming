import{K as B,N as g,l as h,O as y,B as A,P as C,Q as I,k as v,n as D,E as m,F as P,G as L,H as S}from"./_virtual_settings-DVCYLlHS.js";var $=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};class p extends B{constructor(t,e,s,i,n,r){super(),this.startPoint=t,this.radius=e,this.xAxisRotationDegree=s,this.largeArcFlag=i,this.sweepFlag=n,this.endPoint=r,this.xAxisRotation=this.xAxisRotationDegree*g,this.radius=new h(Math.abs(e.x),Math.abs(e.y));const o=t.sub(r).div(2).transform(y.fromRotation(-s).domMatrix),a=o.x*o.x/(e.x*e.x)+o.y*o.y/(e.y*e.y);if(a>1){const t=Math.sqrt(a);e.x=t*e.x,e.y=t*e.y}const l=new h(e.ctg*o.y,e.perpendicular.ctg*o.x).scale(Math.sqrt(1/(o.x*o.x/(e.x*e.x)+o.y*o.y/(e.y*e.y))-1)*(i===n?-1:1));this.xAxisRotationMatrix=y.fromRotation(s).domMatrix,this.center=l.transform(this.xAxisRotationMatrix).add(t.add(r).div(2));const c=o.sub(l).div(e),d=o.scale(-1).sub(l).div(e);this.startAngle=c.radians,this.deltaAngle=h.angleBetween(c,d)%(2*Math.PI),0===this.sweepFlag&&this.deltaAngle>0&&(this.deltaAngle-=2*Math.PI),1===this.sweepFlag&&this.deltaAngle<0&&(this.deltaAngle+=2*Math.PI),p.el.setAttribute("d",`M ${this.startPoint.x} ${this.startPoint.y} A ${this.radius.x} ${this.radius.y} ${this.xAxisRotationDegree} ${this.largeArcFlag} ${this.sweepFlag} ${this.endPoint.x} ${this.endPoint.y}`),this.length=p.el.getTotalLength();const u=new A(p.el.getBBox());this.points=[u.topLeft,u.bottomRight]}getAnglePosition(t){return this.radius.mul(h.fromRadians(t)).transform(this.xAxisRotationMatrix).add(this.center)}getAngleDerivative(t){return new h(-this.radius.x*Math.sin(t),this.radius.y*Math.cos(t)).transform(this.xAxisRotationMatrix)}draw(t,e,s,i){const n=this.startAngle+this.deltaAngle*e,r=this.startAngle+this.deltaAngle*s,o=this.getPoint(e),a=this.getPoint(s);return i&&t.moveTo(o.position.x,o.position.y),t.ellipse(this.center.x,this.center.y,this.radius.x,this.radius.y,this.xAxisRotation,n,r,0===this.sweepFlag),[o,a]}getPoint(t){const e=this.startAngle+t*this.deltaAngle,s=this.getAngleDerivative(e).normalized;return{position:0===t?this.startPoint:1===t?this.endPoint:this.getAnglePosition(e),tangent:s,normal:s.perpendicular}}get arcLength(){return this.length}}function z(t,e,s,i,n=!1){const r={arcLength:0,minSin:1,segments:[]};if(s<e){const t=Math.floor((e-s)/(2*Math.PI))+1;s+=2*Math.PI*t}else if(s>e+2*Math.PI){const t=Math.floor((s-e)/(2*Math.PI));s-=2*Math.PI*t}const o=(e+s)/2,a=t.mul(h.fromRadians(e)),l=t.mul(h.fromRadians(s)),c=t.mul(h.fromRadians(o)).scale(n?-1:1);return i&&u(r,new v(h.zero,a)),R(r,t,a,c,e,o,n),R(r,t,c,l,o,s,n),i&&u(r,new v(l,h.zero)),r}function u(t,e){t.segments.push(e),t.arcLength+=e.arcLength}function R(t,e,s,i,n,r,o){const a=Math.abs(n-r)<=180?1:0;u(t,new p(s,e,0,0,a^(o?0:1)^(n>r?0:1),i))}$([C((()=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path");return t.appendChild(e),I.shadowRoot.appendChild(t),e}))],p,"el",void 0);var x=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};let d=class extends D{constructor(t){super(t)}profile(){return z(this.size().scale(.5),this.startAngle()*g,this.endAngle()*g,this.closed(),this.counterclockwise())}desiredSize(){return{x:this.width.context.getter(),y:this.height.context.getter()}}offsetComputedLayout(t){return t}childrenBBox(){return A.fromSizeCentered(this.computedSize())}getPath(){return this.requiresProfile()?this.curveDrawingInfo().path:this.createPath()}getRipplePath(){return this.createPath(this.rippleSize())}getCacheBBox(){return super.getCacheBBox().expand(this.rippleSize())}createPath(t=0){const e=new Path2D,s=this.startAngle()*g;let i=this.endAngle()*g;const n=this.size().scale(.5).add(t),r=this.closed();if(i>s+2*Math.PI){const t=Math.floor((i-s)/(2*Math.PI));i-=2*Math.PI*t}return r&&e.moveTo(0,0),e.ellipse(0,0,n.x,n.y,0,s,i,this.counterclockwise()),r&&e.closePath(),e}};x([m(0),P()],d.prototype,"startAngle",void 0),x([m(360),P()],d.prototype,"endAngle",void 0),x([m(!1),P()],d.prototype,"counterclockwise",void 0),x([L()],d.prototype,"profile",null),d=x([S("Circle")],d);export{d as C};