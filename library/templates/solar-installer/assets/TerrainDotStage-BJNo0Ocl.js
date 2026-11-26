import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{Cn as r,Gt as i,Kt as a,Mn as o,Nn as s,Ot as ee,S as c,Tt as te,Yt as ne,cr as l,f as u,i as re,lr as d,p as ie,qt as ae}from"./three.module-BtOiv6AT.js";import{n as oe}from"./webildReady-BQYIrrx1.js";var f=e(t(),1),p=n(),se=[`rise`,`valley`,`pulse`,`calm`],m=[[1,1,1.2,.1,5.5,.45,.7,24,1,1,2.85,1],[1.15,1.7,.95,.25,5.5,1,.5,26,1,1,2.85,0],[.85,1,1.9,-.25,5.2,.3,1.8,21,.9,.7,1.6,0],[.12,.15,2.8,-.6,5,.15,0,11,.5,.4,4,0]],h={x:0,y:.1,z:-2.5},g=`
uniform float uTime, uTravel, uAmp, uWall, uBump, uPulse, uPulseR, uPulseFade, uBeacon;
uniform vec2 uBumpAt;
vec3 perm3(vec3 x){ return mod(((x * 34.) + 1.) * x, 289.); }
float sn(vec2 v){
  const vec4 C = vec4(.211324865405187, .366025403784439, -.577350269189626, .024390243902439);
  vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = x0.x > x0.y ? vec2(1., 0.) : vec2(0., 1.);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
  i = mod(i, 289.);
  vec3 p = perm3(perm3(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
  vec3 m = max(.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.); m = m * m; m = m * m;
  vec3 x = 2. * fract(p * C.www) - 1.; vec3 h = abs(x) - .5; vec3 a0 = x - floor(x + .5);
  m *= 1.79284291400159 - .85373472095314 * (a0 * a0 + h * h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130. * dot(m, g);
}
const vec2 FOCUS = vec2(0., -2.5);
float ground(vec2 rel, out float ring){
  vec2 w = vec2(rel.x, rel.y - uTravel);
  float r = distance(rel, FOCUS);
  float h = (sn(w * .365) + sn(w * .91 + 7.3) * .45) * .2 * uAmp * mix(1., smoothstep(.25, 1.8, r), uBeacon);
  h += sin(r * .785 - uTime * 2.2) * .02 * exp(-r * .07) * uAmp;
  h += min(pow(max(abs(rel.x) - 1.8, 0.), 1.85) * .425, 7.) * uWall;
  vec2 b = rel - uBumpAt;
  h += exp(-dot(b, b) / .42) * .14 * uBump;
  ring = exp(-pow((r - uPulseR) / .55, 2.)) * uPulseFade * uPulse + exp(-r * r / .05) * uBeacon * .9;
  return h + ring * .06;
}`,ce=`
attribute float aSeed;
uniform float uDepth, uNear, uSize, uPR, uReveal, uFogNear, uFogFar;
uniform vec2 uEye;
varying float vFog, vRing, vPx;
${g}
void main(){
  vec2 rel = vec2(position.x, mod(position.z + uTravel, uDepth) - uDepth + uNear);
  float ring;
  float h = ground(rel, ring);
  vec4 mv = viewMatrix * vec4(rel.x, h + .045, rel.y, 1.);
  gl_Position = projectionMatrix * mv;
  float depth = -mv.z;
  float reveal = 1. - smoothstep(uReveal - 2.5, uReveal, distance(rel, uEye));
  gl_PointSize = uSize * uPR * (.45 + aSeed * 1.1) * clamp(8. / depth, .4, 1.6) * (1. + ring * .85) * reveal * smoothstep(.3, 1.2, depth);
  vFog = smoothstep(uFogNear, uFogFar, depth);
  vRing = ring;
  vPx = gl_PointSize;
}`,le=`
uniform vec3 uDot, uBg; uniform vec2 uRes; uniform float uFringe, uLight;
varying float vFog, vRing, vPx;
void main(){
  vec2 pc = gl_PointCoord - .5;
  vec2 off = (gl_FragCoord.xy / uRes - .5) * uFringe * smoothstep(3., 6., vPx);
  vec3 disc = 1. - smoothstep(.36, .5, vec3(length(pc - off), length(pc), length(pc + off)));
  if (max(disc.r, max(disc.g, disc.b)) < .5) discard;
  vec3 n = vec3(pc.x * 2., -pc.y * 2., 0.); n.z = sqrt(max(1. - dot(n.xy, n.xy), 0.));
  vec3 L = normalize(vec3(.4, .8, .6));
  float diff = max(dot(n, L), 0.);
  float spec = pow(max(reflect(-L, n).z, 0.), 11.);
  vec3 c = uDot * (.48 + .44 * diff + vRing * .5) + spec * .34;
  c = mix(c * step(.5, disc), mix(uBg, c, step(.5, disc)), uLight);
  gl_FragColor = vec4(mix(c, uBg, vFog), 1.);
}`,ue=`
uniform float uFogNear, uFogFar;
varying vec3 vN; varying float vFog, vH;
${g}
void main(){
  float ring;
  float h = ground(position.xz, ring);
  vN = normalize(vec3(h - ground(position.xz + vec2(.15, 0.), ring), .15, h - ground(position.xz + vec2(0., .15), ring)));
  vH = h;
  vec4 mv = viewMatrix * vec4(position.x, h, position.z, 1.);
  gl_Position = projectionMatrix * mv;
  vFog = smoothstep(uFogNear * .6, uFogFar * .8, -mv.z);
}`,de=`
uniform vec3 uDot, uBg, uInk; uniform float uMesh;
varying vec3 vN; varying float vFog, vH;
void main(){
  float lam = max(dot(normalize(vN), normalize(vec3(-.3, .35, .9))), 0.);
  vec3 base = mix(mix(uBg, uDot, .07), uBg, smoothstep(-.15, .35, vH));
  vec3 c = base + uDot * lam * .05 + uInk * .012;
  gl_FragColor = vec4(mix(uBg, c, uMesh * (1. - vFog)), 1.);
}`,fe=`
attribute vec3 aSeed;
uniform float uPR, uReveal, uFogNear, uFogFar, uLift;
uniform vec2 uEye;
varying float vA;
${g}
void main(){
  float life = fract(uTime * .05 * (.6 + aSeed.y) + aSeed.x);
  vec2 rel = vec2(position.x + sin(uTime * .2 + aSeed.x * 6.28) * .4 + life * .6, mod(position.z + uTravel, 24.) - 21.);
  float ring;
  float h = ground(rel, ring) + .05 + life * 2.2 * uLift;
  vec4 mv = viewMatrix * vec4(rel.x, h, rel.y, 1.);
  gl_Position = projectionMatrix * mv;
  float depth = -mv.z;
  gl_PointSize = uPR * (1. + aSeed.z * 1.6) * clamp(8. / depth, .4, 1.6);
  float reveal = 1. - smoothstep(uReveal - 2.5, uReveal, distance(rel, uEye));
  vA = sin(life * 3.14159) * .55 * (1. - smoothstep(uFogNear, uFogFar, depth)) * reveal * smoothstep(.3, 1.2, depth);
}`,pe=`
uniform vec3 uDot, uInk;
varying float vA;
void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .1, d) * vA; if (a < .01) discard; gl_FragColor = vec4(mix(uInk, uDot, .5), a); }`;function me({className:e}){let t=(0,f.useRef)(null),n=(0,f.useRef)(null),g=oe(t);return(0,f.useEffect)(()=>{let e=t.current,oe=n.current,f=matchMedia(`(prefers-reduced-motion: reduce)`).matches,p=!matchMedia(`(min-width: 880px)`).matches,me=matchMedia(`(pointer: fine)`).matches,_=p?160:260,he=p?28:40,v=p?34:40,ge=_*_,y=new re({canvas:oe,alpha:!0,antialias:!1,powerPreference:`high-performance`});y.setPixelRatio(Math.min(devicePixelRatio,p?1.25:1.5)),y.setClearColor(0,0);let b=new o,x=new i(p?70:52,1,.1,80),S={uTime:{value:0},uTravel:{value:0},uAmp:{value:0},uWall:{value:1},uBump:{value:0},uBumpAt:{value:new l(99,99)},uBeacon:{value:0},uPulse:{value:0},uPulseR:{value:0},uPulseFade:{value:0},uPR:{value:y.getPixelRatio()},uReveal:{value:f?60:2},uEye:{value:new l(0,5.5)},uFogNear:{value:4},uFogFar:{value:24},uDot:{value:new c},uBg:{value:new c},uInk:{value:new c},uRes:{value:new l(1,1)}},C=new Float32Array(ge*3),_e=new Float32Array(ge);for(let e=0,t=0;e<_;e++)for(let n=0;n<_;n++,t++)C[t*3]=((n+Math.random()*.6)/_-.5)*he,C[t*3+2]=(e+Math.random()*.6)/_*v,_e[t]=Math.random();let w=new ie;w.setAttribute(`position`,new u(C,3)),w.setAttribute(`aSeed`,new u(_e,1));let T=new s({uniforms:{...S,uDepth:{value:v},uNear:{value:6},uSize:{value:p?2:2.2},uFringe:{value:p?0:.12},uLight:{value:0}},vertexShader:ce,fragmentShader:le}),E=new ne(w,T);E.frustumCulled=!1,E.renderOrder=1,b.add(E);let ve=p?80:130,D=new ae(he,v,ve,ve);D.rotateX(-Math.PI/2),D.translate(0,0,6-v/2);let O=new s({uniforms:{...S,uMesh:{value:1}},vertexShader:ue,fragmentShader:de,depthWrite:!1}),ye=new ee(D,O);ye.frustumCulled=!1,b.add(ye);let k=2e3,A=new Float32Array(k*3),be=new Float32Array(k*3);for(let e=0;e<k;e++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*9;A[e*3]=Math.cos(t)*n,A[e*3+2]=Math.random()*24,be.set([Math.random(),Math.random(),Math.random()],e*3)}let j=new ie;j.setAttribute(`position`,new u(A,3)),j.setAttribute(`aSeed`,new u(be,3));let M=new s({uniforms:{...S,uLift:{value:1}},vertexShader:fe,fragmentShader:pe,transparent:!0,depthWrite:!1}),N=new ne(j,M);N.frustumCulled=!1,N.renderOrder=2,b.add(N);let P=(e,t,n,r)=>{r.setStyle(e.getPropertyValue(t).trim()||n).convertLinearToSRGB()},xe=``,Se=()=>{let t=getComputedStyle(e),n=[`--background`,`--accent`,`--foreground`].map(e=>t.getPropertyValue(e)).join();if(n===xe)return!1;xe=n,P(t,`--background`,`rgb(8, 9, 13)`,S.uBg.value),P(t,`--accent`,`rgb(236, 255, 62)`,S.uDot.value),P(t,`--foreground`,`rgb(232, 236, 239)`,S.uInk.value);let r=S.uBg.value;return T.uniforms.uLight.value=+(r.r+r.g+r.b>1.5),!0};Se();let F=m[0].slice(),I=m[0].slice(),Ce=()=>{let e=innerHeight*.5,t=innerHeight*.6,n=-1,r=-1,i=0;for(let t of document.querySelectorAll(`[data-terrain]`)){let a=se.indexOf(t.dataset.terrain);if(a<0)continue;let o=t.getBoundingClientRect().top;if(o<=e)n=a;else{r=a,i=o;break}}n<0&&(n=r<0?0:r);let a=r<0?0:te.smoothstep((e+t/2-i)/t,0,1),o=m[n],s=m[r<0?n:r];for(let e=0;e<o.length;e++)I[e]=o[e]+(s[e]-o[e])*a},L=new l,we=new r,Te=new a(new d(0,1,0),0),R=new d,Ee=new l,z=!1,De=e=>{L.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),z=!0},Oe=()=>z=!1;me&&!f&&(addEventListener(`pointermove`,De,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,Oe));let ke=new d,Ae=(e,t,n)=>{x.position.set(Math.sin(e)*F[4],F[2]+n+t*3,Math.cos(e)*F[4]),ke.set(0,F[3],0),x.lookAt(ke),S.uEye.value.set(x.position.x,x.position.z),S.uAmp.value=F[0],S.uWall.value=F[1],S.uPulse.value=F[6],S.uFogFar.value=F[7],O.uniforms.uMesh.value=F[8],M.uniforms.uLift.value=F[9],S.uBeacon.value=F[11]},B=new d,V=null,je=e=>{V?.isConnected||(V=document.querySelector(`[data-terrain-beacon]`)),V&&(x.updateMatrixWorld(),B.set(h.x,h.y,h.z).project(x),V.style.transform=`translate3d(${(B.x+1)/2*innerWidth}px, ${(1-B.y)/2*innerHeight}px, 0)`,V.style.opacity=String(Math.max(0,Math.min(1,F[11]*e))))},Me=()=>{y.setSize(innerWidth,innerHeight,!1),y.getDrawingBufferSize(S.uRes.value),x.aspect=innerWidth/innerHeight,x.updateProjectionMatrix()},H=()=>{Ce(),F.splice(0,F.length,...I),Ae(0,0,0),je(1),y.render(b,x),g()},U=0,W=()=>{Me(),f&&H()};addEventListener(`resize`,W),Me();let G=new MutationObserver(()=>{Se()&&f&&H()});G.observe(document.documentElement,{attributes:!0});let Ne=e.closest(`main`);Ne&&G.observe(Ne,{attributes:!0});let K=!1,Pe=()=>{K||(K=!0,requestAnimationFrame(()=>{K=!1,H()}))};if(f)return addEventListener(`scroll`,Pe,{passive:!0}),H(),()=>{removeEventListener(`scroll`,Pe),removeEventListener(`resize`,W),G.disconnect(),w.dispose(),T.dispose(),D.dispose(),O.dispose(),j.dispose(),M.dispose(),y.dispose()};let q=0,J=0,Fe=0,Y=scrollY,X=0,Z=0,Q=0,Ie=0,$=0,Le=0,Re=performance.now(),ze=(e,t,n,r)=>(t+=(n-e)*30*r,t*=Math.exp(-9*r),[e+t*r,t]),Be=e=>{let t=Math.min((e-Re)/1e3,1/20);Re=e,Ce();let n=Math.min(1,t*2.2);for(let e=0;e<F.length;e++)F[e]+=(I[e]-F[e])*n;q=Math.min(1,q+t/3.2);let r=1-(1-q)**3;S.uReveal.value=2+r*50;let i=scrollY;Fe+=Math.abs(i-Y)<innerHeight*3?(i-Y)*.0065*F[5]:0,Y=i,J+=(Fe-J)*Math.min(1,t*3),S.uTravel.value=J,X+=t,X>F[10]&&(X=0);let a=X/F[10];S.uPulseR.value=(1-(1-a)**3)*14,S.uPulseFade.value=Math.sin(Math.min(a*6,1)*Math.PI*.5)*(1-a),S.uTime.value=e/1e3,[Q,Ie]=ze(Q,Ie,z?L.x*.18:0,t),[$,Le]=ze($,Le,z?L.y*.08:0,t),Ae(Q,$,(1-r)*8),S.uAmp.value=F[0]*te.smoothstep(q,0,.55),Z+=(+!!z-Z)*Math.min(1,t*4),S.uBump.value=Z,z&&(x.updateMatrixWorld(),we.setFromCamera(L,x),we.ray.intersectPlane(Te,R)&&S.uBumpAt.value.lerp(Ee.set(R.x,R.z),Math.min(1,t*10))),je(r),y.render(b,x),g(),U=requestAnimationFrame(Be)},Ve=()=>{cancelAnimationFrame(U),document.hidden||(Re=performance.now(),U=requestAnimationFrame(Be))};return document.addEventListener(`visibilitychange`,Ve),U=requestAnimationFrame(Be),()=>{cancelAnimationFrame(U),document.removeEventListener(`visibilitychange`,Ve),removeEventListener(`pointermove`,De),document.documentElement.removeEventListener(`pointerleave`,Oe),removeEventListener(`resize`,W),G.disconnect(),w.dispose(),T.dispose(),D.dispose(),O.dispose(),j.dispose(),M.dispose(),y.dispose()}},[g]),(0,p.jsx)(`div`,{ref:t,"aria-hidden":`true`,className:`pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background ${e??``}`,children:(0,p.jsx)(`canvas`,{ref:n,className:`absolute inset-0 block size-full`})})}export{me as default};