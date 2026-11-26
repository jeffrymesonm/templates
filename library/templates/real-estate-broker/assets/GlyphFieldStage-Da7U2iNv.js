import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{Bn as r,Cn as i,Dt as a,Gt as o,Kt as s,Mn as c,Nn as l,Ot as u,Rt as d,S as f,Tt as p,Yt as m,_t as ee,cr as h,f as g,g as te,i as ne,lr as _,p as re,pr as ie,qt as ae}from"./three.module-BtOiv6AT.js";import{n as oe}from"./webildReady-BQYIrrx1.js";import{t as se}from"./GlyphDust-SZRpp05k.js";import{t as ce}from"./stageHush-1EBrBZu2.js";import{t as v,u as y,v as b}from"./particleShapes-DIhgbOPO.js";var x=e(t(),1),S=[0,1.3,.6,2.2,3.2,2.5,3.9,5.1,4.3,6,7.4],C=2.1,w=1.25,T=.32,E=.2;function D(e,t,n,r){let i=r-n,a=(n+r)/2,o=w/2-E/2;for(let n of[-1,1])for(let r of[-1,1])e(y(E,i,E,t+n*o,a,r*o));for(let i of[n,r])for(let n of[-1,1])e(y(w,E,E,t,i,n*o)),e(y(E,E,w,t+n*o,i,0))}function O(e){let t=-(S.length-1)*C/2,n=-.7;S.forEach((r,i)=>{let a=t+i*C,o=Math.min(n,r),s=Math.max(n,r,o+.45),c=s+.55+i%3*.2,l=o-.45-i%2*.2;e(y(T,c-s,T,a,(c+s)/2,0),40),e(y(T,o-l,T,a,(o+l)/2,0),40),r>=n?e(y(w,s-o,w,a,(s+o)/2,0),20):D(e,a,o,s),n=r}),e(y((S.length-1)*C+w*2,.22,.22,0,-2.2,0),40)}var k=e=>({...b(e=>O((t,n)=>e(t.rotateY(.4).rotateX(-.22),n)),e,.5),motion:`static`}),A=(e,t)=>async n=>{let r=await e(n),i=r.positions,a=new _;for(let e=0;e<i.length;e+=3)a.set(i[e],i[e+1],i[e+2]).applyMatrix4(t),i[e]=a.x,i[e+1]=a.y,i[e+2]=a.z;return r},j=new a().makeRotationZ(.3).multiply(new a().makeRotationY(.9)).multiply(new a().makeRotationX(-.6)),le={auto:[-.25,.7],aviation:[0,.35]},M={finance:{...v.finance,hero:k},architecture:v.architecture,auto:v.auto,aviation:{...v.aviation,hero:A(v.aviation.hero,j)}},N=n(),ue=` .,:-*_<>/+oO#SF`,P=12,de=.6,fe=34,F=Math.random,pe=`
attribute vec3 aHero, aClose, aDust; attribute vec2 aSeed;
uniform float uTime, uCalm, uIntro, uMix, uFly, uHeroS, uCloseS, uPower, uSize, uCam;
uniform vec3 uHeroOff, uCloseOff, uPointer;
uniform vec2 uPose;
uniform float uGain;
varying float vW;
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c, 0., -s, 0., 1., 0., s, 0., c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1., 0., 0., 0., c, s, 0., -s, c); }
mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c, s, 0., -s, c, 0., 0., 0., 1.); }
float hash(float n){ return fract(sin(n) * 43758.5453); }
void main(){
  float t = uTime * uCalm;
  vec3 h = rotZ(uPose.y) * rotX(.32 + sin(t * .17) * .05) * rotY(-.5 + uPose.x + sin(t * .1) * .3) * aHero * uHeroS * (1. + uFly * .45);
  h += uHeroOff + vec3(0., uFly * .4, uFly * 3.2);
  float order = .5 - aHero.x * .5;
  float a = smoothstep(0., 1., clamp(uIntro * 1.8 - order * .6 - aSeed.x * .2, 0., 1.));
  h = mix(aDust, h, a);
  vec3 c = rotX(.55 + sin(t * .15) * .06) * rotY(.8 + t * .05) * aClose * uCloseS + uCloseOff;
  float local = smoothstep(0., 1., clamp((uMix - aSeed.x * .3) / .7, 0., 1.));
  vec3 p = mix(h, c, local);
  p += (vec3(hash(aSeed.x * 91.), hash(aSeed.y * 37.), hash(aSeed.x * 13. + aSeed.y)) - .5) * sin(local * 3.14159) * 2.5 * uCalm;
  vec2 d = p.xy - uPointer.xy;
  p.xy += normalize(d + 1e-4) * exp(-dot(d, d) * 1.6) * uPower * .1;
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  float z = -mv.z;
  float near = smoothstep(uCam + 5.5, uCam - 5.5, z);
  gl_PointSize = clamp(uSize / z, 1., 3.);
  vW = (.35 + .65 * near) * (.6 + .4 * aSeed.y) * smoothstep(.6, 2.5, z) * mix(.25, 1., a) * mix(uGain, 1., local);
}`,me=`
varying float vW;
void main(){ gl_FragColor = vec4(vW * .4, 0., 0., 1.); }`,he=`void main(){ gl_Position = vec4(position.xy, 0., 1.); }`,ge=`
uniform sampler2D uField, uAtlas;
uniform vec2 uGrid, uView;
uniform float uPR, uLift, uAlpha, uHot;
uniform vec3 uFg, uAccent;
uniform vec3 uTrail[${P}];
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float field(vec2 c){ return texture2D(uField, (c + .5) / uGrid).r; }
void main(){
  vec2 css = gl_FragCoord.xy / uPR;
  vec2 g = css / uView * uGrid;
  vec2 cell = floor(g);
  vec2 f = fract(g);
  float h = hash(vec2(cell.x, 7.31));
  float lift = clamp((uLift - h * .25) / .75, 0., 1.) * (1.2 + h);
  vec2 src = cell - vec2(0., floor(lift * uGrid.y));
  if (src.y < 0.) discard;
  float b = field(src);
  if (b < .02) discard;
  float lo = min(min(field(src + vec2(1., 0.)), field(src - vec2(1., 0.))), min(field(src + vec2(0., 1.)), field(src - vec2(0., 1.))));
  float edge = smoothstep(.12, .45, b - lo);
  float fade = 1. - smoothstep(.2, 1.1, lift);
  if (hash(src * 1.7 + 3.) > fade * 1.3) discard;
  float tr = 0.;
  if (uHot > 0.) {
    for (int i = 0; i < ${P}; i++) {
      vec2 d = (css - uTrail[i].xy) / 70.;
      tr += exp(-dot(d, d)) * uTrail[i].z;
    }
  }
  tr = min(tr, 1.) * max(edge, .35);
  float idx = clamp(floor(b * 12. + edge * 4. + tr * 2. + (hash(src) - .5) * 1.6), 1., 15.);
  float glyph = texture2D(uAtlas, vec2((idx + f.x) / 16., f.y)).r;
  float a = glyph * mix(.4, 1., clamp(b * .6 + edge * .6, 0., 1.)) * fade * uAlpha;
  vec3 col = mix(uFg, uAccent, tr);
  gl_FragColor = vec4(col * a, a);
}`,_e=(e,t)=>{let n=[1e9,1e9,1e9],r=[-1e9,-1e9,-1e9];for(let i=0;i<t*3;i++){let t=i%3;e[i]<n[t]&&(n[t]=e[i]),e[i]>r[t]&&(r[t]=e[i])}let i=Math.max(r[0]-n[0],r[1]-n[1],r[2]-n[2])/2||1,a=new Float32Array(t*3);for(let o=0;o<t*3;o++)a[o]=(e[o]-(n[o%3]+r[o%3])/2)/i;return{out:a,box:[(r[0]-n[0])/2/i,(r[1]-n[1])/2/i,(r[2]-n[2])/2/i]}};function I({introDelay:e=0,variant:t=`finance`,set:n,className:a}){let v=(0,x.useRef)(null),y=(0,x.useRef)(null),b=oe(v);return(0,x.useEffect)(()=>{let a=v.current,oe=y.current,se=n??M[t]??M.finance,x=a.closest(`main`)??document.documentElement,S=matchMedia(`(prefers-reduced-motion: reduce)`).matches,C=!matchMedia(`(min-width: 880px)`).matches,w=matchMedia(`(pointer: fine)`).matches,T=C?16e3:24e3,E=C?6:7,D=!1,O=new ne({canvas:oe,alpha:!0,antialias:!1,powerPreference:`high-performance`});O.setPixelRatio(Math.min(devicePixelRatio,C?1:1.5)),O.setClearColor(0,0);let k=new o(fe,1,.1,200);k.position.set(0,0,13.5);let A=new Float32Array(T*3),j=new Float32Array(T*2);for(let e=0;e<T;e++)A.set([(F()-.5)*30,(F()-.5)*16,(F()-.5)*14-3],e*3),j.set([F(),F()],e*2);let N=new re;N.setAttribute(`position`,new g(A,3)),N.setAttribute(`aDust`,new g(A,3)),N.setAttribute(`aHero`,new g(new Float32Array(T*3),3)),N.setAttribute(`aClose`,new g(new Float32Array(T*3),3)),N.setAttribute(`aSeed`,new g(j,2)),N.boundingSphere=new r(new _,80);let I=new l({uniforms:{uTime:{value:0},uCalm:{value:+!S},uIntro:{value:+!!S},uMix:{value:0},uFly:{value:0},uHeroS:{value:3},uCloseS:{value:4},uPower:{value:0},uSize:{value:C?16:20},uCam:{value:13.5},uHeroOff:{value:new _},uCloseOff:{value:new _},uPointer:{value:new _(99,99,0)},uPose:{value:new h},uGain:{value:1}},vertexShader:pe,fragmentShader:me,depthTest:!1,depthWrite:!1,blending:2}),ve=new c;ve.add(new m(N,I));let L=I.uniforms,R=[1,1,1],z=[1,1],B=le[t]??[0,0],ye=[1,1,1],be=0,V=new ie(1,1,{minFilter:d,magFilter:d,depthBuffer:!1}),H=document.createElement(`canvas`);H.width=512,H.height=32;let U=new te(H);U.minFilter=ee;let xe=getComputedStyle(x).getPropertyValue(`--font-label`).trim()||`monospace`,Se=()=>{let e=H.getContext(`2d`);e&&(e.clearRect(0,0,512,32),e.fillStyle=`white`,e.font=`26px ${xe}`,e.textAlign=`center`,e.textBaseline=`middle`,Array.from(ue).forEach((t,n)=>e.fillText(t,n*32+16,17)),U.needsUpdate=!0)};Se(),document.fonts?.load(`26px ${xe}`).then(()=>!D&&Se()).catch(()=>{});let W=Array.from({length:P},()=>new _(-999,-999,0)),Ce=W.map(()=>-1e9),we=new l({uniforms:{uField:{value:V.texture},uAtlas:{value:U},uGrid:{value:new h(1,1)},uView:{value:new h(1,1)},uPR:{value:O.getPixelRatio()},uLift:{value:0},uAlpha:{value:1},uHot:{value:0},uFg:{value:new f(1,1,1)},uAccent:{value:new f(1,.4,.1)},uTrail:{value:W}},vertexShader:he,fragmentShader:ge,depthTest:!1,depthWrite:!1,blending:0}),Te=new u(new ae(2,2),we);Te.frustumCulled=!1;let Ee=new c;Ee.add(Te);let G=we.uniforms,De=()=>{let e=getComputedStyle(x),t=e.getPropertyValue(`--foreground`).trim(),n=e.getPropertyValue(`--accent`).trim();t&&G.uFg.value.setStyle(t).convertLinearToSRGB(),n&&G.uAccent.value.setStyle(n).convertLinearToSRGB()};De();let Oe=new MutationObserver(De);Oe.observe(document.documentElement,{attributes:!0}),x!==document.documentElement&&Oe.observe(x,{attributes:!0});let ke=()=>2*k.position.z*Math.tan(p.degToRad(fe/2)),K=()=>{let e=ke(),t=e*k.aspect,n=document.querySelector(`[data-particle="hero"]`),r=n?.querySelector(`[data-particle-anchor]`)??n,i=innerWidth/2,a=innerHeight/2,o=innerWidth,s=innerHeight;if(n&&r){let e=n.getBoundingClientRect(),t=r.getBoundingClientRect();i=t.left+t.width/2,a=t.top-e.top+Math.min(t.height,innerHeight)/2,o=t.width,s=Math.min(t.height,innerHeight)}let c=o/innerWidth*t,l=s/innerHeight*e,u=R[0]*.92+R[2]*.55,d=R[1]*.95+R[2]*.45;if(innerWidth<880){let t=Math.min(c*.44/z[0],e*.24/z[1]);L.uHeroS.value=t,L.uPose.value.set(...B),L.uGain.value=p.clamp((t*innerHeight/e/E/78)**2*(24e3/T),.35,1),n?.style.setProperty(`--glyph-h`,`${Math.round(Math.max(2.2*z[1]*t/e*innerHeight,innerWidth*.6))}px`)}else L.uPose.value.set(0,0),L.uGain.value=1,n?.style.removeProperty(`--glyph-h`),L.uHeroS.value=Math.min(c*.43/u,l*.4/d);L.uHeroOff.value.set((i/innerWidth-.5)*t,-(a/innerHeight-.5)*e,0),L.uCloseS.value=Math.max(t,e*.85)*.62/Math.max(ye[0],ye[2]),L.uCloseOff.value.set(0,0,2.2)},Ae=e=>Promise.resolve().then(()=>se[e](T)).then(t=>{if(D)return;let{out:n,box:r}=_e(t.positions,Math.min(T,t.positions.length/3)),i=N.getAttribute(e===`hero`?`aHero`:`aClose`);if(i.array.set(n),i.needsUpdate=!0,e===`hero`){R=r,z=[0,0];let e=Math.cos(.32),t=Math.sin(.32),i=Math.cos(B[1]),a=Math.sin(B[1]);for(let r=-3;r<=3;r++){let o=-.5+B[0]+r*.1,s=Math.cos(o),c=Math.sin(o);for(let r=0;r<n.length;r+=3){let o=s*n[r]+c*n[r+2],l=e*n[r+1]-t*(s*n[r+2]-c*n[r]);z[0]=Math.max(z[0],Math.abs(i*o-a*l)),z[1]=Math.max(z[1],Math.abs(a*o+i*l))}}}else ye=r;be++,K()}).catch(t=>console.warn(`glyph ${se.id}.${e}`,t));Ae(`hero`),Ae(`close`);let je=()=>{O.setSize(innerWidth,innerHeight,!1),k.aspect=innerWidth/innerHeight,k.position.z=k.aspect<.85?17:13.5,L.uCam.value=k.position.z,k.updateProjectionMatrix();let e=Math.ceil(innerWidth/E),t=Math.ceil(innerHeight/E);V.setSize(e,t),G.uGrid.value.set(e,t),G.uView.value.set(innerWidth,innerHeight),K()};addEventListener(`resize`,je),je();let Me=new h,Ne=new i,Pe=new s(new _(0,0,1),0),Fe=new _,Ie=!1,Le=0,q=0,Re=0,ze=e=>{if(e.pointerType!==`mouse`)return;Ie=!0,Me.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),Ne.setFromCamera(Me,k),Ne.ray.intersectPlane(Pe,Fe)&&L.uPointer.value.copy(Fe);let t=performance.now();t-Re<30||(Re=t,q=(q+1)%P,W[q].set(e.clientX,innerHeight-e.clientY,0),Ce[q]=t)},Be=()=>Ie=!1;w&&!S&&(addEventListener(`pointermove`,ze,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,Be));let J=[],Y=+!!S,X=0,Ve=performance.now(),He=Ve,Z=0,Q=``,Ue=t=>{let n=Math.min((t-He)/1e3,1/20);He=t,oe.style.opacity=String(ce(`[data-particle="none"]`)),be&&(t-Ve)/1e3>=e&&(Y=Math.min(1,Y+n/2));let r=innerHeight,i=J.find(e=>e.dataset.particle===`hero`),o=J.find(e=>e.dataset.particle===`close`),s=0,c=0,l=0,u=r;if(i){let e=i.getBoundingClientRect();s=p.clamp(-e.top/Math.max(e.height,1),0,1),u=p.clamp(e.bottom+scrollY,1,r)}if(o){let e=o.getBoundingClientRect();c=p.smoothstep((u-e.top)/(u*.85),0,1);let t=e.top+e.height/2;S||(l=p.clamp((r/2-t)/(r/2+e.height/2),0,1))}X+=(c-X)*Math.min(1,n*(S?30:5)),L.uFly.value=S?0:s*(1-X),L.uMix.value=X,L.uIntro.value=Y,L.uTime.value=t/1e3,Le+=(+!!Ie-Le)*Math.min(1,n*5),L.uPower.value=Le,G.uLift.value=l,G.uAlpha.value=S?1:Math.min(1,Y*3);let d=0;W.forEach((e,n)=>{e.z=Math.max(0,1-(t-Ce[n])/1e3/de)*.45,d=Math.max(d,e.z)}),G.uHot.value=d;let f=``;for(let e of J){let t=e.getBoundingClientRect(),n=Math.max(0,Math.floor(t.top)),i=Math.min(r,Math.ceil(t.bottom));i>n&&(f+=`M${Math.floor(t.left)} ${n}H${Math.ceil(t.right)}V${i}H${Math.floor(t.left)}Z`)}let m=f&&l<1?`path("${f}")`:`inset(100%)`;m!==Q&&(Q=m,a.style.clipPath=Q),m!==`inset(100%)`&&(O.setRenderTarget(V),O.setClearColor(0,1),O.clear(),O.render(ve,k),O.setRenderTarget(null),O.setClearColor(0,0),O.clear(),O.render(Ee,k),b()),Z=requestAnimationFrame(Ue)},We=!1,Ge=e=>{cancelAnimationFrame(Z),e&&!document.hidden&&(He=performance.now(),Z=requestAnimationFrame(Ue))},Ke=()=>Ge(We);document.addEventListener(`visibilitychange`,Ke);let $=new Set,qe=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting?$.add(t.target):$.delete(t.target);let t=$.size>0;t!==We&&(We=t,Ge(t),t||(Q=`inset(100%)`,a.style.clipPath=Q))}),Je=new ResizeObserver(()=>K()),Ye=()=>{qe.disconnect(),Je.disconnect(),$.clear(),J=Array.from(document.querySelectorAll(`[data-particle="hero"], [data-particle="close"]`)),J.forEach(e=>qe.observe(e)),document.querySelectorAll(`[data-particle="hero"] [data-particle-anchor]`).forEach(e=>Je.observe(e)),K()};Ye();let Xe=new MutationObserver(Ye);return Xe.observe(x,{childList:!0}),()=>{D=!0,qe.disconnect(),Je.disconnect(),Xe.disconnect(),Oe.disconnect(),cancelAnimationFrame(Z),document.removeEventListener(`visibilitychange`,Ke),removeEventListener(`pointermove`,ze),document.documentElement.removeEventListener(`pointerleave`,Be),removeEventListener(`resize`,je),N.dispose(),I.dispose(),we.dispose(),Te.geometry.dispose(),U.dispose(),V.dispose(),O.dispose()}},[e,t,n,b]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(se,{}),(0,N.jsx)(`div`,{ref:v,"aria-hidden":`true`,className:`pointer-events-none fixed inset-0 -z-10 [clip-path:inset(100%)] ${a??``}`,children:(0,N.jsx)(`canvas`,{ref:y,className:`absolute inset-0 block size-full`})})]})}export{I as default,M as t};