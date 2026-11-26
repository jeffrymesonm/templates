import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{M as r,Mn as i,Nn as a,Ot as o,Rt as s,Tt as c,W as l,Yt as u,cr as d,f,h as p,i as m,lr as h,on as g,p as _,ur as v}from"./three.module-BtOiv6AT.js";import{n as y}from"./webildReady-BQYIrrx1.js";import{t as b}from"./introSignal-CF_rx8At.js";var x=e(t(),1),S=e=>e*e*(3-2*e),C=(e,t)=>{let n=new Float32Array(e.length),r=e.length,i=0,a=0,o=-1;for(let s=0;s<r;s+=1){let c=Math.max(0,s-t),l=Math.min(r-1,s+t);for(;o<l;)i+=e[++o];for(;a<c;)i-=e[a++];n[s]=i/(l-c+1)}return n},w=(e,t)=>{let n=new Float32Array(e.length);for(let r=0;r<e.length;r+=1){let i=1/0;for(let n=Math.max(0,r-t);n<=Math.min(e.length-1,r+t);n+=1)i=Math.min(i,e[n]);n[r]=i}return n},T=(e,t,n=2048)=>{let r=e.length,i=[],a=[],o=[],s=[],c=[],l=[],u=t=>t<0?{x:2*e[0].x-e[1].x,y:2*e[0].y-e[1].y}:t>r-1?{x:2*e[r-1].x-e[r-2].x,y:2*e[r-1].y-e[r-2].y}:e[t];for(let t=0;t<r-1;t+=1){let n=u(t-1),d=u(t),f=u(t+1),p=u(t+2),m=(e,t)=>Math.max(Math.sqrt(Math.hypot(t.x-e.x,t.y-e.y)),.001),h=m(n,d),g=h+m(d,f),_=g+m(f,p),v=Math.max(8,Math.ceil(Math.hypot(f.x-d.x,f.y-d.y)/2));l.push(i.length);for(let l=0;l<v||t===r-2&&l===v;l+=1){let r=l/v,u=h+(g-h)*r,m=(e,t,n,r)=>((r-u)*e+(u-n)*t)/(r-n),y=m(n.x,d.x,0,h),b=m(n.y,d.y,0,h),x=m(d.x,f.x,h,g),C=m(d.y,f.y,h,g),w=m(f.x,p.x,g,_),T=m(f.y,p.y,g,_),E=m(y,x,0,g),D=m(b,C,0,g),O=m(x,w,h,_),k=m(C,T,h,_);i.push(m(E,O,h,g)),a.push(m(D,k,h,g));let A=S(r);o.push(e[t].w+(e[t+1].w-e[t].w)*A),s.push(e[t].g+(e[t+1].g-e[t].g)*A),c.push((e[t].b??0)+((e[t+1].b??0)-(e[t].b??0))*A)}}l.push(i.length-1);let d=new Float64Array(i.length);for(let e=1;e<i.length;e+=1)d[e]=d[e-1]+Math.hypot(i[e]-i[e-1],a[e]-a[e-1]);let f=d[i.length-1],p=Math.max(t,f/(n-1)),m=Math.max(2,Math.floor(f/p)+1),h=new Float32Array(m),g=new Float32Array(m),_=new Float32Array(m),v=new Float32Array(m),y=new Float32Array(m),b=0;for(let e=0;e<m;e+=1){let t=Math.min(f,e*p);for(;b<i.length-2&&d[b+1]<t;)b+=1;let n=(t-d[b])/Math.max(d[b+1]-d[b],1e-6);h[e]=i[b]+(i[b+1]-i[b])*n,g[e]=a[b]+(a[b+1]-a[b])*n,_[e]=o[b]+(o[b+1]-o[b])*n,v[e]=s[b]+(s[b+1]-s[b])*n,y[e]=c[b]+(c[b+1]-c[b])*n}let x=l.map(e=>d[e]),T=Math.max(1,Math.round(24/p)),E=new Float32Array(m);for(let e=0;e<m;e+=1){let t=Math.max(0,e-2),n=Math.min(m-1,e+2),r=Math.atan2(g[n]-g[t],h[n]-h[t]);E[e]=e===0?r:E[e-1]+Math.atan2(Math.sin(r-E[e-1]),Math.cos(r-E[e-1]))}let D=C(E,T),O=new Float32Array(m);for(let e=0;e<m;e+=1){let t=Math.max(0,e-1),n=Math.min(m-1,e+1);O[e]=(D[n]-D[t])/Math.max((n-t)*p,1e-6)}let k=C(O,T),A=1e5,j=new Float32Array(m),M=new Float32Array(m);for(let e=0;e<m;e+=1)j[e]=k[e]>1e-6?Math.min(A,.8/k[e]):A,M[e]=k[e]<-1e-6?Math.min(A,.8/-k[e]):A;let N=Math.max(1,Math.round(90/p)),P=C(w(j,N),N),F=C(w(M,N),N),I=new Float32Array(m*12),L=new Float32Array(m);for(let e=0;e<m;e+=1)I.set([h[e],g[e],-Math.sin(D[e]),Math.cos(D[e])],e*4),I.set([_[e],v[e],Math.max(2,P[e]),Math.max(2,F[e])],(m+e)*4),I.set([y[e],0,0,0],(m*2+e)*4),L[e]=Math.max(e?L[e-1]:-1/0,g[e]);return{data:I,count:m,ds:p,length:f,at:x,maxY:L}},E=(e,t)=>{let n=0,r=e.count-1;if(e.maxY[r]<=t)return e.length;for(;n<r;){let i=n+r>>1;e.maxY[i]<t?n=i+1:r=i}return n*e.ds},D=n(),O=`
uniform sampler2D uPath;
uniform vec2 uRes;
uniform float uCount;
uniform float uDs;
uniform float uLen;
uniform float uScroll;
uniform float uTime;
uniform float uWob;
uniform vec4 uBox;
float dimAt(vec2 p) {
  float f = 48.0;
  float inside = smoothstep(uBox.x - f, uBox.x + f, p.x) * (1.0 - smoothstep(uBox.z - f, uBox.z + f, p.x)) * smoothstep(uBox.y - f, uBox.y + f, p.y) * (1.0 - smoothstep(uBox.w - f, uBox.w + f, p.y));
  return 1.0 - 0.8 * inside;
}
vec2 at(float s, out vec2 n, out float w, out float g, out vec2 lim, out float bias) {
  float f = clamp(s / uDs, 0.0, uCount - 1.001);
  int i = int(floor(f));
  float k = f - float(i);
  vec4 a = mix(texelFetch(uPath, ivec2(i, 0), 0), texelFetch(uPath, ivec2(i + 1, 0), 0), k);
  vec4 b = mix(texelFetch(uPath, ivec2(i, 1), 0), texelFetch(uPath, ivec2(i + 1, 1), 0), k);
  n = normalize(a.zw + vec2(1e-6));
  w = b.x;
  g = b.y;
  lim = b.zw;
  bias = mix(texelFetch(uPath, ivec2(i, 2), 0).x, texelFetch(uPath, ivec2(i + 1, 2), 0).x, k);
  return vec2(a.x, a.y - uScroll);
}
float bend(float o, vec2 lim) {
  float l = max(o > 0.0 ? lim.x : lim.y, 1.0);
  return sign(o) * l * tanh(min(abs(o) / l, 8.0));
}
vec4 clip(vec2 p) {
  return vec4(p.x / uRes.x * 2.0 - 1.0, 1.0 - p.y / uRes.y * 2.0, 0.0, 1.0);
}
float wobble(float s, float seed) {
  float l = s / 1500.0;
  return (sin(l * 8.0 + seed * 40.0 + uTime * (0.35 + seed * 0.3)) + 0.4 * sin(l * 21.0 + seed * 17.0 - uTime * 0.6)) * uWob;
}
`,k=`${O}
attribute vec4 aD;
uniform float uThick;
uniform float uApex;
uniform float uPinch;
varying float vSide;
varying float vS;
varying float vSeed;
varying float vU;
varying float vThick;
varying float vG;
void main() {
  float s = aD.x * uLen;
  vec2 n;
  float w;
  float g;
  vec2 lim;
  float bias;
  vec2 c = at(s, n, w, g, lim, bias);
  float across = w * (aD.y + bias + wobble(s, aD.w));
  float thick = max(uThick * mix(1.0, 0.15 + 0.85 * smoothstep(0.0, 200.0, abs(s - uApex)), uPinch), 1e-3);
  vThick = thick;
  vSide = aD.z * thick;
  vS = s;
  vSeed = aD.w;
  vU = aD.y;
  vec2 q = c + n * bend(across + vSide, lim);
  vG = g * dimAt(q);
  gl_Position = clip(q);
}
`,A=`${O}
attribute vec4 aD;
uniform float uDpr;
varying float vS;
varying float vSeed;
varying float vBig;
varying float vG;
void main() {
  float s = fract(aD.x + uTime * 7.5 * (0.4 + aD.z) / max(uLen, 1.0)) * uLen;
  vec2 n;
  float w;
  float g;
  vec2 lim;
  float bias;
  vec2 c = at(s, n, w, g, lim, bias);
  float drift = sin(uTime * 0.4 + aD.z * 60.0) * 0.2;
  vS = s;
  vSeed = aD.z;
  vBig = step(5.0, aD.w);
  vec2 q = c + n * bend(w * (aD.y + bias + drift) + 6.0 * sign(aD.y), lim);
  vG = g * dimAt(q);
  gl_PointSize = aD.w * uDpr;
  gl_Position = clip(q);
}
`,j=`
uniform vec3 uA;
uniform vec3 uB;
uniform float uGain;
uniform float uApex;
uniform float uLen;
uniform float uHead;
uniform float uSoft;
uniform float uTip;
uniform float uStag;
uniform float uTime;
float h(float x) { return fract(sin(x * 91.7 + 3.1) * 43758.5453); }
float drawn(float s) {
  return 1.0 - smoothstep(uHead - uSoft, uHead, s);
}
float tip(float s) {
  float q = (s - uHead + uSoft * 0.45) / (uSoft * 0.5);
  return uTip * exp(-q * q);
}
float ends(float s) {
  return smoothstep(0.0, 120.0, s) * (1.0 - smoothstep(uLen - 200.0, uLen, s));
}
uniform float uLight;
vec4 glow(vec3 col, float i) {
  vec3 c = max(col * i, vec3(0.0));
  float a = max(max(c.r, c.g), c.b);
  return vec4(c, uLight > 0.5 ? max(a, 0.85 * clamp(i, 0.0, 1.0)) : a);
}
`,M=`${j}
varying float vSide;
varying float vThick;
varying float vS;
varying float vSeed;
varying float vU;
varying float vG;
uniform float uSharp;
void main() {
  float d = abs(vSide);
  float k = uSharp > 0.5 ? exp(-d * d * 1.6) + 0.06 * exp(-d * 0.9) : exp(-d * d / (vThick * vThick * 0.16));
  float q = (vS - uApex) / 60.0;
  float apex = exp(-q * q);
  float line = 0.22 + 0.78 * pow(h(vSeed), 1.6);
  float edgeFade = 1.0 - 0.45 * abs(vU);
  float t = tip(vS);
  float boost = 1.0 + apex * (uSharp > 0.5 ? 3.0 : 1.2) + t * (uSharp > 0.5 ? 2.2 : 1.0);
  vec3 col = mix(uA, uB, step(0.78, h(vSeed + 7.0)) * 0.9);
  col = mix(col, vec3(1.0, 1.0, 0.92), (apex * 0.35 + t * 0.3) * uSharp);
  float i = k * line * edgeFade * boost * uGain * vG * drawn(vS + h(vSeed + 3.0) * uStag) * ends(vS);
  gl_FragColor = glow(col, i);
}
`,N=`${j}
varying float vS;
varying float vSeed;
varying float vBig;
varying float vG;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float disc = vBig > 0.5 ? (1.0 - smoothstep(0.55, 1.0, r)) * 0.22 : 1.0 - smoothstep(0.0, 1.0, r);
  float tw = 0.55 + 0.45 * sin(uTime * (1.0 + h(vSeed) * 2.0) + vSeed * 30.0);
  vec3 col = mix(uA, uB, step(0.7, h(vSeed + 2.0)));
  float i = disc * tw * uGain * vG * drawn(vS) * ends(vS) * (0.35 + 0.65 * h(vSeed + 5.0)) * (1.0 + tip(vS));
  gl_FragColor = glow(col, i);
}
`,P=(e,t)=>{let n=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0});if(!n)return[.78,.95,.36];n.fillStyle=t,n.fillStyle=e||t,n.fillRect(0,0,1,1);let r=n.getImageData(0,0,1,1).data;return[r[0]/255,r[1]/255,r[2]/255]},F=(e,t,n)=>{let r=e*(t+1)*2,i=new Float32Array(r*4),a=r>65535?new Uint32Array(e*t*6):new Uint16Array(e*t*6),o=0,s=0;for(let r=0;r<e;r+=1){let c=r*(t+1)*2,l=r/Math.max(1,e-1)*2-1,u=n?l:Math.sign(l)*Math.abs(l)**.85+(Math.random()-.5)*.05,d=Math.random();for(let e=0;e<=t;e+=1){let n=e/t;for(let e of[-1,1])i.set([n,u,e,d],o),o+=4;if(e<t){let t=c+e*2;a.set([t,t+1,t+2,t+1,t+3,t+2],s),s+=6}}}let c=new _;return c.setAttribute(`aD`,new f(i,4)),c.setIndex(new f(a,1)),c},I=e=>{let t=new Float32Array(e*4);for(let n=0;n<e;n+=1){let e=Math.random()<.12;t.set([Math.random(),(Math.random()*2-1)*1.25,Math.random(),e?6+Math.random()*12:1.2+Math.random()*2.2],n*4)}let n=new _;return n.setAttribute(`aD`,new f(t,4)),n.setDrawRange(0,e),n},L=(e,t)=>new a({vertexShader:e,fragmentShader:t,uniforms:{uPath:{value:null},uRes:{value:new d(1,1)},uCount:{value:2},uDs:{value:1},uLen:{value:1},uScroll:{value:0},uTime:{value:0},uWob:{value:0},uThick:{value:1},uApex:{value:0},uPinch:{value:0},uDpr:{value:1},uA:{value:new h},uB:{value:new h},uGain:{value:0},uHead:{value:0},uSoft:{value:1},uTip:{value:0},uStag:{value:0},uSharp:{value:0},uLight:{value:0},uBox:{value:new v(0,0,0,0)}},transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:201}),ee=e=>{let t=window.innerWidth,n=Math.max(t,640)/1280,r=window.scrollY,i=Array.from(document.querySelectorAll(`[data-section]`)),a=e=>e.getBoundingClientRect().top+r,o=i.find(e=>e.dataset.section===`hero`)??i[0],s=i.find(e=>e.dataset.section===`footer`),c=o?a(o):0,l=o?c+o.getBoundingClientRect().height:e,u=s?a(s)+e*.15:document.documentElement.scrollHeight,d=o?.querySelector(`h1`)??null;for(;d&&o&&d.parentElement&&d.parentElement!==o&&!d.querySelector(`a, button`);)d=d.parentElement;let f=d?Array.from(d.querySelectorAll(`h1, h2, p, a, button`)).concat(d).filter(e=>e.tagName!==`DIV`&&e.tagName!==`SECTION`).map(e=>e.getBoundingClientRect()).filter(e=>e.width>4&&e.height>4):[],p=f.length?{left:Math.min(...f.map(e=>e.left)),right:Math.max(...f.map(e=>e.right)),top:Math.min(...f.map(e=>e.top))+r,bottom:Math.max(...f.map(e=>e.bottom))+r}:{left:t*.25,right:t*.75,top:c+e*.2,bottom:c+e*.55},m=t-p.right,h=m>160*n?p.right+m*.55:t*.97,g=Math.min(150*n,Math.max(24,m*.3)),_=[],v=(e,t,n,r)=>_.push({x:e,y:t,w:n,g:r});v(t*.9,c-e*.35,48*n,1),v(h,(p.top+p.bottom)/2,g,.8),v(t*.5,p.bottom+e*.12,150*n,.6);let y=_.length;v(t*.14,Math.min(l,p.bottom+e*.3),48*n,1);let b=_[y].y,x=i.filter(e=>e!==o&&e!==s).map(a).filter(t=>t>b+e*.6&&t<u-e*.4),S=[],C=b;for(let t of[...x,u]){if(t-C<e*.95){t===u&&S.length&&(S[S.length-1]=u);continue}let n=Math.max(1,Math.floor((t-C)/(e*1.1)));for(let e=1;e<=n;e+=1)S.push(C+(t-C)*e/n);C=t}S.length||S.push(u);let w=b;S.forEach((e,r)=>{let i=r%2==0;v(t*(.5+(i?.04:-.04)),(w+e)/2,150*n,.5),v(t*(i?.84:.16),e,48*n,1),w=e}),v(_[_.length-1].x>t/2?t*.7:t*.3,u+e*.5,120*n,1);let E=T(_,6);return{sampled:E,apex:-1e6,heroEnd:E.at[y],box:p}};function R({className:e=``}){let t=(0,x.useRef)(null),[n,a]=(0,x.useState)(!1),f=y(t,!n);return(0,x.useEffect)(()=>{let e=t.current;if(!e||n)return;let h=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,_=!window.matchMedia(`(min-width: 880px)`).matches,v;try{v=new m({canvas:e,alpha:!0,antialias:!1,powerPreference:`high-performance`})}catch(e){console.warn(`StrandField: WebGL unavailable`,e),a(!0);return}let y=!1,x=e=>{y||(y=!0,console.warn(`StrandField: ${e}`),a(!0))};v.debug.checkShaderErrors=!0,v.debug.onShaderError=(e,t,n,r)=>{console.error(`StrandField shader error`,e.getProgramInfoLog(t),e.getShaderInfoLog(n),e.getShaderInfoLog(r)),x(`shader failed to compile`)},v.setClearColor(0,0),v.setPixelRatio(Math.min(window.devicePixelRatio||1,_?1.5:1.75));let S=e=>{e.preventDefault(),x(`WebGL context lost`)};e.addEventListener(`webglcontextlost`,S);let C=new i,w=new p,T=F(_?52:110,_?1e3:1800,!1),D=F(_?10:16,900,!0),O=I(_?160:420),j=L(k,M),R=L(k,M),z=L(A,N),B=[j,R,z];[new o(D,j),new o(T,R),new u(O,z)].forEach((e,t)=>{e.frustumCulled=!1,e.renderOrder=t,C.add(e)});let V={a:[0,0,0],b:[0,0,0],light:0},H=()=>{let e=getComputedStyle(document.documentElement),t=e.getPropertyValue(`--primary`).trim()||e.getPropertyValue(`--accent`).trim(),n=e.getPropertyValue(`--strand-tint`).trim(),[r,i,a]=P(e.getPropertyValue(`--background`).trim(),`rgb(12 13 12)`);V.a=P(t,`rgb(200 242 92)`),V.b=P(n||t,`rgb(63 196 224)`),V.light=+(.2126*r+.7152*i+.0722*a>.5)};H();let te=new MutationObserver(()=>{H(),h&&X(performance.now())});te.observe(document.documentElement,{attributes:!0,attributeFilter:[`style`,`class`,`data-theme`]});let U=window.innerHeight,W=ee(U),G=null,ne=()=>{let{data:e,count:t}=W.sampled;!G||G.image.width!==t?(G?.dispose(),G=new r(e,t,3,g,l),G.minFilter=s,G.magFilter=s,G.generateMipmaps=!1):G.image.data.set(e),G.needsUpdate=!0;for(let e of B)e.uniforms.uPath.value=G};ne();let re=()=>{U=window.innerHeight,W=ee(U),ne()},ie=()=>{let e=v.getSize(new d);(e.x!==window.innerWidth||e.y!==window.innerHeight)&&v.setSize(window.innerWidth,window.innerHeight,!1)},ae=e=>{let t=Math.max(1,document.documentElement.scrollHeight-U);return e+U*(.6+.6*c.smoothstep(e,t-U*1.2,t))},K=window.scrollY,q=performance.now(),J=q,Y=h?J-1e5:-1,oe=b.onReveal(()=>{Y<0&&(Y=performance.now())}),X=e=>{if(Y<0&&(e-J>2500||!b.isClaimed())&&(Y=e),y)return;ie();let t=Math.min(.1,(e-q)/1e3);q=e;let n=window.scrollY;K+=(n-K)*(h?1:Math.min(1,t*7)),Math.abs(n-K)<.5&&(K=n);let r=h?0:(e-J)/1e3,i=window.innerWidth,a=window.innerHeight,o=Math.max(i,640)/1280,{sampled:s,apex:l,heroEnd:u}=W,d=U*.25,p=Y<0?0:e-Y,m=Math.min(1,p/1400),g=1-(1-m)**3,_=E(s,ae(K)),x=Math.max(u,_),S=h?1e9:p<=0?-1e9:-d+(x+d)*g,T=h?0:m<1?1.4:c.clamp((_-u)/(U*.3),0,1),D=h?1:c.clamp((p-700)/900,0,1);for(let e of B){let t=e.uniforms;t.uRes.value.set(i,a),t.uBox.value.set(W.box.left,W.box.top-n,W.box.right,W.box.bottom-n),t.uCount.value=s.count,t.uDs.value=s.ds,t.uLen.value=s.length,t.uScroll.value=n,t.uTime.value=r,t.uApex.value=l,t.uHead.value=S,t.uSoft.value=d,t.uTip.value=T,t.uStag.value=U*.35*(1-g),t.uA.value.fromArray(V.a),t.uB.value.fromArray(V.b),t.uLight.value=V.light}j.uniforms.uGain.value=.13,j.uniforms.uWob.value=.14,j.uniforms.uThick.value=80*o,j.uniforms.uPinch.value=0,j.uniforms.uSharp.value=0,R.uniforms.uGain.value=.6,R.uniforms.uWob.value=.14,R.uniforms.uThick.value=2.6,R.uniforms.uSharp.value=1,z.uniforms.uGain.value=1.1*D,z.uniforms.uDpr.value=v.getPixelRatio(),v.render(C,w),f()},Z=0,se=e=>{X(e),Z=y?0:requestAnimationFrame(se)},Q=()=>{if(cancelAnimationFrame(Z),Z=0,h){X(performance.now());return}q=performance.now(),document.hidden||(Z=requestAnimationFrame(se))},ce=()=>{h&&X(performance.now())},$=()=>{re(),h&&X(performance.now())};Q();let le=new ResizeObserver($);return le.observe(document.body),window.addEventListener(`resize`,$),window.addEventListener(`scroll`,ce,{passive:!0}),document.addEventListener(`visibilitychange`,Q),()=>{y=!0,oe(),cancelAnimationFrame(Z),te.disconnect(),le.disconnect(),window.removeEventListener(`resize`,$),window.removeEventListener(`scroll`,ce),document.removeEventListener(`visibilitychange`,Q),e.removeEventListener(`webglcontextlost`,S),T.dispose(),D.dispose(),O.dispose(),B.forEach(e=>e.dispose()),G?.dispose(),v.dispose()}},[n,f]),(0,D.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none fixed inset-0 -z-10 ${e}`,children:n?(0,D.jsx)(`div`,{"data-strand-fallback":``,className:`absolute inset-0 bg-[radial-gradient(ellipse_32%_42%_at_50%_75%,color-mix(in_srgb,var(--primary,var(--accent))_28%,transparent),transparent_70%)]`}):(0,D.jsx)(`canvas`,{ref:t,className:`block h-full w-full`})})}export{R as default};