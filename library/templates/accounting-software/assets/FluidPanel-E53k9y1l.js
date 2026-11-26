import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{t as r}from"./Media-CZRK093i.js";import{Mn as i,Nn as a,Ot as o,cr as s,h as c,i as l,lr as u,qt as d}from"./three.module-BtOiv6AT.js";var f=e(t(),1),p=n(),m=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,h=`
precision highp float;
uniform vec2 uRes;
uniform float uTime, uSeed, uLift;
uniform vec2 uCss;
uniform vec3 uDeep, uMid, uHigh;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * f * (f * (f * 6. - 15.) + 10.); return mix(mix(hash(i), hash(i + vec2(1., 0.)), u.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), u.x), u.y); }
float fbm(vec2 p){ float v = 0., a = .62; mat2 m = mat2(1.6, 1.2, -1.2, 1.6); for (int i = 0; i < 3; i++) { v += a * noise(p); p = m * p; a *= .3; } return v / .8618; }
float field(vec2 p, vec2 r){ return fbm(p + 1.7 * r); }
void main(){
  float asp = uRes.x / uRes.y;
  vec2 uv = (vUv - .5) * vec2(asp, 1.) / max(1., asp * .55);
  float a = uSeed * 2.4;
  vec2 dir = vec2(cos(a), sin(a));
  mat2 rot = mat2(cos(a), sin(a), -sin(a), cos(a));
  float zoom = 2.1 * mix(1., .62, smoothstep(650., 1100., max(uCss.x, uCss.y)));
  vec2 p = rot * uv * .72 * zoom + vec2(3.1, 1.7);
  float t = uTime * .35 + uSeed * 2.7;
  vec2 q = vec2(fbm(p + vec2(0., t)), fbm(p + vec2(5.2, 1.3) - t * .8));
  vec2 r = vec2(fbm(p + 1.5 * q + vec2(1.7, 9.2) + t * .35), fbm(p + 1.5 * q + vec2(8.3, 2.8) - t * .3));
  float e = .015;
  float h = field(p, r);
  float hx = field(p + vec2(e, 0.), r);
  float hy = field(p + vec2(0., e), r);
  vec3 n = normalize(vec3((h - hx) / e * .7, (h - hy) / e * .7, 1.));
  float diff = clamp(dot(n, normalize(vec3(-.45, .55, .7))), 0., 1.);
  float hs = (h - .5) * 3.4 + .81 + dot(uv, dir) * .2 + uLift;
  vec3 peri = mix(uMid, uHigh, .32);
  vec3 col = mix(uMid * .45, min(uMid * 1.2, vec3(1.)), smoothstep(.08, .5, hs));
  col = mix(col, peri, smoothstep(.6, 1., hs));
  col = mix(col, uHigh, smoothstep(.95, 1.35, hs) * .7);
  col *= .82 + .32 * diff;
  float g = r.x - r.y + (q.x - .5) * .5;
  float zone = smoothstep(.62, .32, hs);
  float w = .035 + .05 * zone;
  float crease = (1. - smoothstep(w * .55, w, abs(g))) * zone;
  float rim = exp(-pow((abs(g) - w * 1.15) / (w * .22), 2.)) * zone;
  col = mix(col, uDeep, crease);
  col = mix(col, uHigh, rim * .55);
  col = mix(uDeep, col, smoothstep(-.06, .18, hs));
  col = mix(vec3(dot(col, vec3(.2126, .7152, .0722))), col, 1.18);
  gl_FragColor = vec4(clamp(col, 0., 1.), 1.);
}`,g=new Set,_=null,v=null,y=null,b=null,x=!1,S=0,C=0,w=0,T=null,E=null,D=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches,O=()=>matchMedia(`(max-width: 879px)`).matches,k=()=>{if(_||x)return _;try{let e=document.createElement(`canvas`);_=new l({canvas:e,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`low-power`}),_.setPixelRatio(1),_.autoClear=!1,v=new a({vertexShader:m,fragmentShader:h,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new s(1,1)},uTime:{value:0},uSeed:{value:0},uLift:{value:0},uCss:{value:new s(400,300)},uDeep:{value:new u},uMid:{value:new u},uHigh:{value:new u}}}),y=new i,y.add(new o(new d(2,2),v)),b=new c,e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),x=!0,g.forEach(e=>e.canvas.style.opacity=`0`)})}catch{x=!0,_=null}return _},A=(e,t)=>{if(E||=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),!E||!e)return t;E.clearRect(0,0,1,1),E.fillStyle=`black`,E.fillStyle=e,E.fillRect(0,0,1,1);let n=E.getImageData(0,0,1,1).data;return[n[0]/255,n[1]/255,n[2]/255]},j=e=>{let t=getComputedStyle(e.el),n=A(t.getPropertyValue(`--deep`).trim(),[.012,.016,.035]),r=A(t.getPropertyValue(`--accent`).trim(),[.145,.388,.922]),i=r.map(e=>e+(1-e)*.84),a=n.map((e,t)=>Math.min(e*.5+r[t]*.04,r[t]*.12+.01));e.colors[0].set(...a),e.colors[1].set(...r),e.colors[2].set(...i)},M=(e,t)=>{let n=k();if(!n||!v||!y||!b)return;let r=Math.min(devicePixelRatio||1,2)*(O()?.4:.55),i=e.el.getBoundingClientRect(),a=Math.min(1,900/Math.max(i.width*r,i.height*r,1)),o=Math.max(2,Math.round(i.width*r*a)),c=Math.max(2,Math.round(i.height*r*a));(e.canvas.width!==o||e.canvas.height!==c)&&(e.canvas.width=o,e.canvas.height=c);let l=n.getSize(new s);(l.x<o||l.y<c)&&n.setSize(Math.max(l.x,o),Math.max(l.y,c),!1);let u=n.getSize(new s);(t-e.colorAt>1e3||!e.colorAt)&&(j(e),e.colorAt=t);let d=Math.min(1,Math.max(0,(t-e.at)/2800));e.shown=e.from+(e.seed-e.from)*(d<.5?2*d*d:1-(-2*d+2)**2/2);let f=v.uniforms;f.uRes.value.set(o,c),f.uCss.value.set(i.width,i.height),f.uTime.value=D()?12:w*e.speed,f.uSeed.value=e.shown,f.uLift.value=e.lift,f.uDeep.value.copy(e.colors[0]),f.uMid.value.copy(e.colors[1]),f.uHigh.value.copy(e.colors[2]),n.setViewport(0,0,o,c),n.render(y,b),e.ctx.drawImage(n.domElement,0,u.y-c,o,c,0,0,o,c),e.drawn||(e.drawn=!0,e.canvas.style.opacity=`1`)},N=e=>{if(S=0,document.hidden||x)return;let t=[...g].filter(e=>e.visible);if(!t.length)return;let n=D(),r=O()?1e3/30:1e3/60;if(e-C>=r-2){let r=C?Math.min(e-C,100):0;C=e,w+=r/1e3;for(let r of t)(!n||!r.drawn)&&M(r,e)}(!n||t.some(e=>!e.drawn))&&(S=requestAnimationFrame(N))},P=()=>{!S&&!document.hidden&&(C=0,S=requestAnimationFrame(N))},F=()=>document.hidden?(cancelAnimationFrame(S),S=0):P(),I=e=>(g.size||(T=new IntersectionObserver(e=>{for(let t of e){let e=[...g].find(e=>e.el===t.target);e&&(e.visible=t.isIntersecting)}P()},{rootMargin:`120px 0px`}),document.addEventListener(`visibilitychange`,F)),g.add(e),T?.observe(e.el),()=>{T?.unobserve(e.el),g.delete(e),!g.size&&(T?.disconnect(),T=null,document.removeEventListener(`visibilitychange`,F),cancelAnimationFrame(S),S=0)});function L({seed:e=1,speed:t=1,lift:n=0,imageSrc:i,imageAlt:a=``,className:o=``,children:s}){let c=(0,f.useRef)(null),l=(0,f.useRef)(null),d=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let r=c.current,i=l.current,a=i?.getContext(`2d`);if(!r||!i||!a||!k())return;let o={el:r,canvas:i,ctx:a,seed:e,shown:e,from:e,at:0,speed:t,lift:n,visible:!1,drawn:!1,colorAt:0,colors:[new u,new u,new u]};d.current=o;let s=I(o),f=new ResizeObserver(()=>{o.drawn&&D()&&M(o,performance.now())});return f.observe(r),()=>{f.disconnect(),s(),d.current=null}},[]),(0,f.useEffect)(()=>{let r=d.current;r&&(r.seed!==e&&(r.from=r.shown,r.at=performance.now(),r.seed=e),r.speed=t,r.lift=n,D()&&(r.shown=e,M(r,performance.now())))},[e,t,n]),(0,p.jsxs)(`div`,{ref:c,className:`relative isolate overflow-hidden ${i?`bg-muted`:`bg-deep`} ${o}`,children:[i?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{src:i,alt:a,"aria-hidden":a===``,loading:`lazy`,decoding:`async`,className:`absolute inset-0 -z-10 h-full w-full object-cover`}),(0,p.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 -z-10 bg-black/20`})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_25%_20%,color-mix(in_srgb,var(--accent)_30%,white)_0%,var(--accent)_38%,transparent_72%),radial-gradient(80%_80%_at_85%_90%,var(--accent)_0%,transparent_60%)]`}),(0,p.jsx)(`canvas`,{ref:l,"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-700`})]}),s]})}export{L as t};