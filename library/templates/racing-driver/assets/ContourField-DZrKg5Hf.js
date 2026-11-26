import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{t as r}from"./bundle-mjs-Q0M0K08x.js";import{Mn as i,Nn as a,Ot as o,S as s,Ut as c,i as l,jn as u,qt as d}from"./three.module-BtOiv6AT.js";import{n as f,t as p}from"./cssColor-ByEPkjAs.js";var m=e(t(),1),h=n(),g=`
float contourField(vec2 p, float t) {
  float f = sin(p.x * 1.00 + t * 0.60) * 0.50;
  f += sin(p.y * 0.85 - t * 0.45) * 0.45;
  f += sin((p.x + p.y) * 0.65 + t * 0.35) * 0.35;
  f += sin((p.x - p.y) * 0.95 - t * 0.55) * 0.25;
  return f * 0.5 + 0.5;
}
float contourLines(vec2 ndc, float aspect, float time, float scale, float count, float wave, float thickness, out float level) {
  vec2 p = vec2(ndc.x * aspect, ndc.y) * scale;
  vec2 q = p;
  q.x += sin(p.y * 0.8 + time * 0.7) * wave;
  q.y += cos(p.x * 0.7 - time * 0.6) * wave;
  level = contourField(q, time) * count;
  float w = max(fwidth(level) * thickness, 1e-5);
  return 1.0 - smoothstep(0.0, w, abs(fract(level) - 0.5));
}
`,_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,v=`
uniform vec3 uBackground;
uniform vec3 uLine;
uniform float uTime;
uniform float uAspect;
varying vec2 vUv;
${g}
void main() {
  float level;
  float line = contourLines(vUv * 2.0 - 1.0, uAspect, uTime * 0.28, 3.8, 2.5, 0.18, 1.15, level);
  gl_FragColor = vec4(mix(uBackground, uLine, line * 0.85), 1.0);
  #include <colorspace_fragment>
}`;function y({className:e,background:t=`--background`,line:n=`--contour`}){let g=(0,m.useRef)(null),y=(0,m.useRef)(null);return(0,m.useEffect)(()=>{let e=g.current,r=y.current,m=matchMedia(`(prefers-reduced-motion: reduce)`).matches,h;try{h=new l({canvas:r,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`low-power`})}catch{return}h.setPixelRatio(1);let b={uBackground:{value:new s},uLine:{value:new s},uTime:{value:0},uAspect:{value:1}},x=new o(new d(2,2),new a({vertexShader:_,fragmentShader:v,uniforms:b,depthTest:!1,depthWrite:!1}));x.frustumCulled=!1;let S=new i;S.add(x);let C=new c(-1,1,1,-1,0,1),w=()=>{b.uBackground.value.setRGB(...p(e,t),u),b.uLine.value.setRGB(...p(e,n),u)};w();let T=0,E=0,D=()=>{let t=Math.max(2,e.clientWidth),n=Math.max(2,e.clientHeight);t===T&&n===E||(T=t,E=n,h.setSize(T,E,!1),b.uAspect.value=T/E)},O=0,k=!1,A=0,j=performance.now(),M=e=>{O=0,(e-A>=24||!A)&&(A=e,D(),b.uTime.value=m?0:(e-j)/1e3,h.render(S,C)),!m&&k&&!document.hidden&&(O=requestAnimationFrame(M))},N=()=>{!O&&k&&!document.hidden&&(O=requestAnimationFrame(M))},P=new IntersectionObserver(([e])=>{k=e.isIntersecting,k&&N()});P.observe(e);let F=()=>N();document.addEventListener(`visibilitychange`,F);let I=new ResizeObserver(()=>{A=0,N()});I.observe(e);let L=f(e,()=>{w(),A=0,N()});return()=>{cancelAnimationFrame(O),P.disconnect(),I.disconnect(),L(),document.removeEventListener(`visibilitychange`,F),x.geometry.dispose(),x.material.dispose(),h.dispose()}},[t,n]),(0,h.jsx)(`div`,{ref:g,"aria-hidden":`true`,className:r(`pointer-events-none absolute inset-0 overflow-hidden`,e),children:(0,h.jsx)(`canvas`,{ref:y,className:`absolute inset-0 block size-full`})})}export{y as n,g as t};