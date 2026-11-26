import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{$t as r,A as i,Bn as a,Cn as o,D as s,Dt as c,Gt as l,Kt as u,Mn as d,Nn as ee,S as f,Tt as te,X as p,Xn as ne,Xt as re,Yt as ie,Zn as m,cr as h,f as g,i as ae,lr as _,p as oe}from"./three.module-BtOiv6AT.js";import{n as v}from"./webildReady-BQYIrrx1.js";import{t as se}from"./stageHush-1EBrBZu2.js";import{_ as y,b,h as x,v as S}from"./particleShapes-DIhgbOPO.js";import{n as C,t as ce}from"./driftStats-DGhO6t9c.js";var w=e(t(),1),T=Math.random,E=Math.PI*2,D=(e,t)=>{let n=new Float32Array(e*3);for(let r=0;r<e;r++)n.set(t(r),r*3);return n},O=(e,t)=>e.map(e=>e*t),k=()=>(T()+T()+T()-1.5)/1.5,A=e=>D(e,()=>{let e=T()*E,t=T()*E,n=1.6,r=.78;return[(n+r*Math.cos(t))*Math.cos(e),(n+r*Math.cos(t))*Math.sin(e),r*Math.sin(t)]}),j=e=>D(e,e=>{let t=e%2,n=T()**.9*4.2,r=t*Math.PI+n*1.35+(T()-.5)*(.35+n*.08),i=T()<.35?(T()<.5?1.25:3.1)+(T()-.5)*.12:n,a=T()<.35?T()*E:r;return[Math.cos(a)*i,(T()-.5)*.08*(1.2-i/4.5),Math.sin(a)*i]}),M=()=>{let e=3+T()**.6*9,t=T()*E,n=Math.acos(2*T()-1);return[e*Math.sin(n)*Math.cos(t),e*Math.sin(n)*Math.sin(t)*.7,e*Math.cos(n)-2]},N=e=>D(e,M),P=e=>D(e,()=>{let e=T();if(e<.18){let e=new _(k(),k(),k()).normalize().multiplyScalar(.7*Math.cbrt(T()));return[e.x,e.y,e.z]}let t=e<.5?[1.5,.18]:e<.8?[2.5,.3]:[3.6,.12],n=t[0]+(T()-.5)*t[1],r=T()*E;return[Math.cos(r)*n,(T()-.5)*.04,Math.sin(r)*n]}),F=e=>{let t=Array.from({length:9},()=>[(T()-.5)*14,(T()-.5)*7,-2-T()*8,.8+T()*1.8]);return D(e,()=>{if(T()<.35)return M();let e=t[Math.floor(T()*t.length)];return[e[0]+k()*e[3],e[1]+k()*e[3]*.6,e[2]+k()*e[3]]})},I=e=>{let t=new c().makeRotationX(.9),n=new _;return D(e,()=>{let e=(T()-.5)*6.4,r=(T()-.5)*4,i=Math.sin(e*1.3)*.32+Math.cos(r*1.7+e*.6)*.26;return n.set(e,i,r).applyMatrix4(t),[n.x,n.y,n.z]})},L=e=>D(e,()=>{let e=(T()-.5)*5.6,t=e*1.6,n=1.15;if(T()<.22){let t=T()*2-1,r=Math.round(e*3)/3,i=r*1.6;return[Math.cos(i)*n*t,r,Math.sin(i)*n*t]}let r=T()<.5?0:Math.PI,i=.05;return[Math.cos(t+r)*n+k()*i,e,Math.sin(t+r)*n+k()*i]}),R=e=>D(e,()=>{let e=.9;return[Math.round((T()-.5)*16/e)*e+k()*.02,Math.round((T()-.5)*9/e)*e+k()*.02,(T()-.5)*12-2]}),z=e=>D(e,()=>{let e=[Math.floor(T()*7)-3,Math.floor(T()*7)-3,Math.floor(T()*7)-3],t=Math.floor(T()*3);e[t]+=T();let n=e.map(e=>e*1.05*.62);return Math.hypot(...n)>3.4?[n[0]*.5,n[1]*.5,n[2]*.5]:n}),B=e=>{let t=Array.from({length:70},()=>[(T()-.5)*16,(T()-.5)*9,-1-T()*10,.15+T()*.45]);return D(e,()=>{let e=t[Math.floor(T()*t.length)],n=new _(k(),k()*1.8,k()),r=Math.abs(n.x)+Math.abs(n.y)/1.8+Math.abs(n.z)||1;return n.multiplyScalar(e[3]/r),[e[0]+n.x,e[1]+n.y,e[2]+n.z]})},le=e=>{let t=Array.from({length:48},()=>new _(k(),k(),k()).normalize().multiplyScalar(2.2+T()*1.4)),n=[];t.forEach(e=>{[...t].sort((t,n)=>t.distanceTo(e)-n.distanceTo(e)).slice(1,4).forEach(t=>n.push([e,t]))});let r=new _;return D(e,()=>{if(T()<.3){let e=t[Math.floor(T()*t.length)];r.set(k(),k(),k()).multiplyScalar(.07).add(e)}else{let[e,t]=n[Math.floor(T()*n.length)];r.copy(e).lerp(t,T())}return[r.x,r.y*.9,r.z]})},V=e=>{let t=Array.from({length:140},()=>[(T()-.5)*15,(T()-.5)*8]);return D(e,()=>{let e=t[Math.floor(T()*t.length)];return[e[0]+k()*.02,e[1]+k()*.02,(T()-.5)*12-2]})},H={drift:{id:`drift`,label:`Drift: torus, galaxy, stars, knot`,heroRing:1.6,hero:A,galaxy:j,stars:N,model:e=>O(S(e=>e(new m(1,.28,320,28,2,3),90),e,0).positions,2.3),close:N},orbit:{id:`orbit`,label:`Orbit: sphere, rings, nebula, planet`,heroRing:0,hero:e=>O(y(e).positions,2.6),galaxy:P,stars:F,model:e=>{let t=new c().makeRotationX(.42).premultiply(new c().makeRotationZ(-.28)),n=[[2.35,.6,.16],[-2.05,-.95,.12],[.5,1.75,.09]];return b(e,e=>{let r=T();if(r<.46)e.set(k(),k(),k()).normalize().multiplyScalar(1.05);else if(r<.92){let n=Math.sqrt(1.55**2+T()*(2.35**2-1.55**2)),r=T()*E,i=n>1.92&&n<2?.6:1;e.set(Math.cos(r)*n*i,(T()-.5)*.03,Math.sin(r)*n*i).applyMatrix4(t)}else{let t=n[Math.floor(T()*n.length)];e.set(k(),k(),k()).normalize().multiplyScalar(t[2]).add(new _(t[0],t[1],.4))}})},close:F},wave:{id:`wave`,label:`Wave: field, helix, grid, ribbon`,heroRing:0,hero:I,galaxy:L,stars:R,model:e=>b(e,e=>{let t=(T()-.5)*4.8,n=(T()-.5)*1.8,r=t*.75+.4,i=Math.sin(t*1.3)*.75;e.set(t,i+Math.cos(r)*n,Math.sin(r)*n+Math.cos(t*.9)*.4)}),close:R},prism:{id:`prism`,label:`Prism: icosahedron, lattice, crystal, cluster`,heroRing:0,hero:e=>O(S(e=>e(new p(1,0),1),e,.55).positions,2.1),galaxy:z,stars:B,model:e=>O(S(e=>{let t=new _(0,1,0);[[0,0,.42,2.6],[.55,-.35,.3,1.8],[-.6,-.25,.32,1.9],[.3,.6,.24,1.4],[-.35,.55,.22,1.3],[.95,.15,.2,1.1],[-1,.2,.18,1]].forEach(([n,a,o,c])=>{let l=new i(o,o*1.08,c,6).translate(0,c/2,0),u=new s(o,o*1.7,6).translate(0,c+o*.85,0),d=new r().setFromUnitVectors(t,new _(n,1.6,a).normalize());[l,u].forEach(t=>e(t.applyQuaternion(d).translate(n*.35,-1.2,a*.35)))})},e,.4).positions,2.3),close:B},signal:{id:`signal`,label:`Signal: globe, network, stream, lattice sphere`,heroRing:0,hero:e=>O(x(46,!0)(e).positions,3.4),galaxy:le,stars:V,model:e=>O(S(e=>{e(new p(.95,2),5),[[1.3,.35,0],[1.55,-.5,.6],[1.8,.15,-.9]].forEach(([t,n,r])=>e(new ne(t,.012,3,160).rotateX(Math.PI/2+n).rotateZ(r),60))},e,.8).positions,2.2),close:V}},U=n(),ue=[`hero`,`galaxy`,`stars`,`model`,`close`],W=C,de=`
attribute vec3 aHero, aGalaxy, aStars, aModel, aClose; attribute vec2 aSeed;
uniform float uTime, uFrom, uTo, uMix, uPower, uSize, uPR, uCalm, uRing; uniform vec3 uPointer; uniform vec2 uTilt;
uniform vec3 teal, blue, violet, pink;
varying vec3 vColor; varying float vAlpha;

vec3 mod289(vec3 x){ return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(vec4 x){ return x - floor(x * (1. / 289.)) * 289.; }
vec4 permute(vec4 x){ return mod289(((x * 34.) + 1.) * x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - .85373472095314 * r; }
float snoise(vec3 v){
  const vec2 C = vec2(1. / 6., 1. / 3.); const vec4 D = vec4(0., .5, 1., 2.);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1. - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0., i1.z, i2.z, 1.)) + i.y + vec4(0., i1.y, i2.y, 1.)) + i.x + vec4(0., i1.x, i2.x, 1.));
  float n_ = .142857142857; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49. * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7. * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1. - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2. + 1.; vec4 s1 = floor(b1) * 2. + 1.; vec4 sh = -step(h, vec4(0.));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.); m = m * m;
  return 42. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c, 0., -s, 0., 1., 0., s, 0., c); }
mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1., 0., 0., 0., c, s, 0., -s, c); }
vec3 role(int k, out vec3 col){
  float t = uTime * uCalm;
  if (k == 0) {
    vec3 p = aHero;
    vec3 tc = uRing > 0. ? vec3(normalize(p.xy + 1e-4) * uRing, 0.) : vec3(0.);
    vec3 n = normalize(p - tc + 1e-4);
    float w = snoise(p * .6 + vec3(0., 0., t * .25)) * .3 + snoise(p * 1.6 - t * .2) * .09;
    p += n * w;
    p = rotY(sin(t * .25) * .35 + uTilt.x) * rotX(.2 + uTilt.y) * p;
    col = mix(violet, teal, smoothstep(-2.8, 2.6, p.y + p.x * .3));
    return p;
  }
  if (k == 1) {
    vec3 p = aGalaxy; float r = length(p.xz);
    p = rotY(t * .35 / (.35 + r * .5)) * p;
    p = rotX(.38) * p;
    p.y -= .25;
    col = mix(pink, blue, smoothstep(0., 1.4, r)); col = mix(col, teal, smoothstep(1.6, 3.4, r));
    return p * .92;
  }
  if (k == 3) {
    vec3 p = rotY(sin(t * .3) * .45 - .35 + uTilt.x) * aModel;
    p = rotX(uTilt.y * .6) * p;
    col = mix(violet, teal, smoothstep(-1.4, 1.6, aModel.y));
    return p;
  }
  vec3 p = k == 2 ? aStars : aClose; p.z += mod(t * .6 + aSeed.x * 12., 12.) - 13.;
  col = mix(vec3(.75, .85, 1.), teal, aSeed.y);
  return p;
}
void main(){
  float local = smoothstep(0., 1., clamp((uMix - aSeed.x * .35) / .65, 0., 1.));
  vec3 ca, cb;
  vec3 pa = role(int(uFrom + .5), ca), pb = role(int(uTo + .5), cb);
  vec3 p = mix(pa, pb, local);
  float mid = sin(local * 3.14159) * uCalm * step(.5, abs(uTo - uFrom));
  p += vec3(snoise(p * .5 + 3.1), snoise(p * .5 + 7.7), snoise(p * .5 + 1.3)) * mid * .3;
  vec3 col = mix(ca, cb, local);
  vec4 wp = modelMatrix * vec4(p, 1.);
  vec3 d = wp.xyz - uPointer; float dist = length(d.xy);
  float fall = exp(-dist * dist * 3.2) * uPower;
  wp.xy += normalize(d.xy + 1e-4) * fall * .16;
  wp.z += fall * .25;
  col = mix(col, vec3(1.), clamp(fall * 1.3, 0., 1.));
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  float twinkle = .75 + .25 * sin(uTime * 2. + aSeed.y * 60.);
  gl_PointSize = uSize * uPR * (.55 + aSeed.y * .9) * (9. / max(-mv.z, 7.)) * (1. + fall * 1.5);
  vColor = col * (.8 + .5 * twinkle);
  vAlpha = (.7 + .5 * aSeed.y) * smoothstep(1.5, 5., -mv.z);
}`,fe=`
varying vec3 vColor; varying float vAlpha;
void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, 0., d); gl_FragColor = vec4(vColor * a, a * vAlpha); }`;function pe({variant:e=`drift`,set:t,className:n}){let r=(0,w.useRef)(null),i=(0,w.useRef)(null),s=v(r);return(0,w.useEffect)(()=>{let n=r.current,c=i.current,p=t??H[e]??H.drift,ne=performance.now(),m=matchMedia(`(prefers-reduced-motion: reduce)`).matches,v=!matchMedia(`(min-width: 880px)`).matches,y=ce(),b=new ae({canvas:c,alpha:!0,antialias:!1,powerPreference:`high-performance`});b.setPixelRatio(Math.min(devicePixelRatio,v?1.5:2));let x=new d,S=new l(38,1,.1,100);S.position.set(0,0,11);let C=new Map,w=e=>(C.has(e)||C.set(e,e(y)),C.get(e)),T=new Float32Array(y*2);for(let e=0;e<y*2;e++)T[e]=Math.random();let E=w(p.hero),D=w(p.stars),O=new oe;O.setAttribute(`position`,new g(E,3)),O.setAttribute(`aHero`,new g(E,3)),O.setAttribute(`aGalaxy`,new g(w(p.galaxy),3)),O.setAttribute(`aStars`,new g(D,3)),O.setAttribute(`aModel`,new g(w(p.model),3)),O.setAttribute(`aClose`,new g(w(p.close),3)),O.setAttribute(`aSeed`,new g(T,2)),O.boundingSphere=new a(new _,20);let k=new ee({uniforms:{uTime:{value:0},uFrom:{value:0},uTo:{value:0},uMix:{value:0},uRing:{value:p.heroRing},uPointer:{value:new _(99,99,0)},uPower:{value:0},uTilt:{value:new h},uSize:{value:v?2.8:3.3},uPR:{value:b.getPixelRatio()},uCalm:{value:+!m},teal:{value:new f},blue:{value:new f},violet:{value:new f},pink:{value:new f}},vertexShader:de,fragmentShader:fe,transparent:!0,depthWrite:!1,blending:2}),A=k.uniforms,j=new ie(O,k);x.add(j);let M=new oe().setAttribute(`position`,new g(Float32Array.from({length:270},(e,t)=>t%3==2?-6-Math.random()*8:(Math.random()-.5)*26),3)),N=new re({size:.09,transparent:!0,opacity:.45,depthWrite:!1,blending:2}),P=new ie(M,N);x.add(P);let F=(e,t,n)=>{let r=e.getPropertyValue(t).trim();r&&n.setStyle(r).convertLinearToSRGB()},I=``,L=()=>{let e=getComputedStyle(n),t=[`--particle-a`,`--particle-b`,`--particle-c`,`--particle-d`].map(t=>e.getPropertyValue(t)).join();t!==I&&(I=t,F(e,`--particle-a`,A.teal.value),F(e,`--particle-b`,A.violet.value),F(e,`--particle-c`,A.pink.value),F(e,`--particle-d`,A.blue.value),N.color.copy(A.violet.value).lerp(A.blue.value,.5))};L();let R=new MutationObserver(L);R.observe(document.documentElement,{attributes:!0});let z=n.closest(`main`);z&&R.observe(z,{attributes:!0});let B=()=>Array.from(document.querySelectorAll(`[data-drift]`)).map(e=>({el:e,k:ue.indexOf(e.dataset.drift)})).filter(e=>e.k>=0),le=e=>{if(!e.length)return 0;let t=innerHeight/2,n=e.map(({el:e})=>{let t=e.getBoundingClientRect();return t.top+Math.min(t.height,innerHeight)/2});if(t<=n[0])return 0;for(let e=0;e<n.length-1;e++)if(t>=n[e]&&t<=n[e+1])return e+te.smoothstep((t-n[e])/(n[e+1]-n[e]),.35,.65);return n.length-1},V=new h,U=new o,pe=new u(new _(0,0,1),0),me=new _,G=new h,K=!1,q=0,he=e=>{V.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),K=!0,U.setFromCamera(V,S),U.ray.intersectPlane(pe,me)&&A.uPointer.value.copy(me)},ge=()=>K=!1;addEventListener(`pointermove`,he,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,ge);let J=()=>{b.setSize(innerWidth,innerHeight,!1),S.aspect=innerWidth/innerHeight,S.position.z=S.aspect<.8?17:11,S.updateProjectionMatrix()};addEventListener(`resize`,J),J(),W({count:y,frameMs:0,firstFrame:0,fps:0});let Y=0,X=0,Z=0,Q=0,_e=performance.now(),$=0,ve=e=>{let t=Math.min((e-_e)/1e3,1/20);_e=e,c.style.opacity=String(se(`[data-drift="none"]`));let n=B(),r=le(n);Q+=(r-Q)*Math.min(1,t*(m?20:4));let i=Math.min(Math.floor(Q),Math.max(n.length-1,0)),a=n[i]?.k??0,o=n[Math.min(i+1,n.length-1)]?.k??a,l=te.clamp(Q-i,0,1);A.uFrom.value=a,A.uTo.value=o,A.uMix.value=l,A.uTime.value=e/1e3,q+=(+!!K-q)*Math.min(1,t*5),A.uPower.value=q*(m?.4:1),G.x+=((K?V.x*.35:0)-G.x)*Math.min(1,t*2.5),G.y+=((K?-V.y*.2:0)-G.y)*Math.min(1,t*2.5),A.uTilt.value.copy(G);let u=(a===0?1-l:0)+(o===0?l:0),d=v?0:u*.35;j.position.x+=(d-j.position.x)*Math.min(1,t*4),P.rotation.y+=t*.01,b.render(x,S),s(),Z||(Z=(performance.now()-ne)/1e3,W({firstFrame:Z})),Y++,X+=t,X>.5&&(W({fps:Math.round(Y/X),frameMs:X/Y*1e3}),Y=0,X=0),$=requestAnimationFrame(ve)},ye=()=>{cancelAnimationFrame($),document.hidden||(_e=performance.now(),$=requestAnimationFrame(ve))};return document.addEventListener(`visibilitychange`,ye),$=requestAnimationFrame(ve),()=>{cancelAnimationFrame($),document.removeEventListener(`visibilitychange`,ye),removeEventListener(`pointermove`,he),document.documentElement.removeEventListener(`pointerleave`,ge),removeEventListener(`resize`,J),R.disconnect(),O.dispose(),k.dispose(),M.dispose(),N.dispose(),b.dispose()}},[e,t,s]),(0,U.jsxs)(`div`,{ref:r,"aria-hidden":`true`,className:`pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background ${n??``}`,children:[(0,U.jsxs)(`div`,{className:`drift-aurora absolute inset-0 overflow-hidden`,children:[(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{}),(0,U.jsx)(`div`,{})]}),(0,U.jsx)(`canvas`,{ref:i,className:`absolute inset-0 block size-full`})]})}export{pe as default,H as t};