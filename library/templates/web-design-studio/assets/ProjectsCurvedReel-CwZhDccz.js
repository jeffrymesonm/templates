import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{t as r}from"./react-azkLsmaj.js";import{t as i}from"./AnimatePresence-DVI7xi0-.js";import{Cn as a,Gt as o,Mn as s,Nn as c,Ot as l,Yn as u,cr as d,fr as f,i as p,jn as m,qt as h}from"./three.module-BtOiv6AT.js";import{t as g}from"./frameBudget-BT_0ZGeG.js";import{t as _}from"./MarkerText-2J0sxhY3.js";import{t as v}from"./ScrollRuler-DOb5rxnv.js";import{n as y,t as ee}from"./filmWaves-jGZu8Ipy.js";var b=e(t(),1),x=n(),S=e=>Math.min(1,Math.max(0,e)),C=e=>e*e*(3-2*e),w=4.8,T=3,te=`
  uniform float uBend;
  uniform float uTime;
  uniform float uSpeedWave;
  uniform float uAspect;
  varying vec2 vUv;
  ${y}
  void main() {
    vUv = uv;
    vec3 p = position;
    p.z += uBend * (p.x * p.x * 0.085 + p.y * p.y * 0.04);
    p.z += sin(p.x * 1.6 + uTime * 3.0) * uSpeedWave * 0.25;
    vec4 viewPosition = modelViewMatrix * vec4(p, 1.0);
    vec4 flat_ = projectionMatrix * viewPosition;
    vec2 sp = flat_.xy / flat_.w * vec2(uAspect, 1.0);
    float facing = clamp(normalize(normalMatrix * vec3(0.0, 0.0, 1.0)).z, 0.0, 1.0);
    viewPosition.z += waveHeight(sp) * facing;
    vec4 clip = projectionMatrix * viewPosition;
    clip.xy += waveDrag(sp) * vec2(1.0 / uAspect, 1.0) * clip.w * facing;
    gl_Position = clip;
  }
`,ne=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  uniform vec2 uSize;
  uniform float uArrow;
  varying vec2 vUv;
  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  float seg(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0));
  }
  void main() {
    vec2 p = (vUv - 0.5) * uSize;
    float d = roundedBox(p, uSize * 0.5, 0.16);
    float edge = 1.0 - smoothstep(-0.01, 0.01, d);
    vec2 uv = vUv;
    vec4 color = texture2D(uMap, uv);
    if (uArrow > 0.001) {
      float frameAspect = uSize.x / uSize.y;
      vec2 aq = vUv * vec2(frameAspect, 1.0);
      float pop = smoothstep(0.0, 1.0, uArrow);
      float R = 0.07;
      vec2 b = aq - vec2(frameAspect - 1.75 * R, 1.0 - 1.75 * R);
      float r = R * mix(0.55, 1.0, pop);
      float cd = length(b) - r;
      float caa = max(fwidth(cd), 0.0005);
      float inside = (1.0 - smoothstep(-caa, caa, cd)) * pop;
      if (inside > 0.0) {
        float bo = 0.02;
        vec3 blur = (texture2D(uMap, uv + vec2(bo, bo)).rgb + texture2D(uMap, uv + vec2(-bo, bo)).rgb
          + texture2D(uMap, uv + vec2(bo, -bo)).rgb + texture2D(uMap, uv - vec2(bo)).rgb) * 0.25;
        vec3 glass = mix(blur, vec3(0.04), 0.45);
        glass += (1.0 - smoothstep(0.0, caa * 1.5, abs(cd + caa))) * 0.2;
        glass += (1.0 - smoothstep(0.0, caa * 4.0, -cd)) * clamp(dot(normalize(b + 1e-5), vec2(-0.7071, 0.7071)), 0.0, 1.0) * 0.18;
        vec2 a = b / (r / 11.0);
        float stroke = min(seg(a, vec2(-3.0, -3.0), vec2(3.0, 3.0)), min(seg(a, vec2(-3.0, 3.0), vec2(3.0, 3.0)), seg(a, vec2(3.0, 3.0), vec2(3.0, -3.0))));
        float sw = max(fwidth(stroke), 0.05);
        glass = mix(glass, vec3(0.98), 1.0 - smoothstep(0.42 - sw, 0.42 + sw, stroke));
        color.rgb = mix(color.rgb, glass, inside);
      }
    }
    gl_FragColor = vec4(color.rgb, edge * uOpacity);
    #include <colorspace_fragment>
  }
`,E=({label:e,items:t,linkText:n=`View project`})=>{let y=(0,b.useRef)(null),E=(0,b.useRef)(null),[D,re]=(0,b.useState)(0),O=(0,b.useRef)(0),k=(0,b.useRef)(-1);(0,b.useEffect)(()=>{let e=E.current,n=y.current;if(!e||!n)return;let r;try{r=new p({antialias:!0,alpha:!0})}catch{return}let i=g(),_=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;r.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),r.outputColorSpace=m,e.appendChild(r.domElement),r.domElement.style.cssText=`width:100%;height:100%;display:block`;let v=new s,b=new o(40,1,.1,100);b.position.z=10;let x=new ee;x.setScale({speed:1.5,wavelength:.42,height:.08,reach:.22,drag:.009,spacing:.05,fullSpeed:4.5});let D={uAspect:{value:1},...x.uniforms},A=new u;A.setCrossOrigin(`anonymous`);let j=new h(w,T,48,30),M=t.map(e=>{let t=null,n;e.videoSrc&&!_?(t=document.createElement(`video`),t.src=e.videoSrc,t.poster=e.imageSrc,t.muted=!0,t.loop=!0,t.playsInline=!0,t.preload=`metadata`,t.crossOrigin=`anonymous`,n=new f(t)):n=A.load(e.imageSrc),n.colorSpace=m,n.anisotropy=r.capabilities.getMaxAnisotropy();let i=new c({vertexShader:te,fragmentShader:ne,uniforms:{uMap:{value:n},uBend:{value:.5},uTime:{value:0},uSpeedWave:{value:0},uOpacity:{value:1},uSize:{value:new d(w,T)},uArrow:{value:0},...D},transparent:!0,side:2}),a=new l(j,i);return v.add(a),{mesh:a,material:i,map:n,video:t,hover:0,hoverTarget:0}}),N=window.innerWidth<768,ie=()=>N?[{x:-2.4,y:5.2,z:-3,rx:.3,ry:.4,rz:.3,s:.45},{x:0,y:1.3,z:0,rx:0,ry:0,rz:0,s:.62},{x:2.2,y:-4.6,z:-3,rx:-.3,ry:.4,rz:-.25,s:.45}]:[{x:-6.6,y:4.8,z:-3.2,rx:.35,ry:.75,rz:.38,s:.62},{x:-1.45,y:0,z:0,rx:0,ry:.32,rz:0,s:.9},{x:-6.2,y:-4.7,z:-3.4,rx:-.35,ry:.75,rz:-.32,s:.62}],P=ie(),F=(e,t,n)=>({x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n,rx:e.rx+(t.rx-e.rx)*n,ry:e.ry+(t.ry-e.ry)*n,rz:e.rz+(t.rz-e.rz)*n,s:e.s+(t.s-e.s)*n}),ae=e=>{if(e<=-1){let t=P[0];return{...t,x:t.x+(e+1)*2.5,y:t.y-(e+1)*2.5,z:t.z+(e+1)*2}}if(e>=1){let t=P[2];return{...t,x:t.x-(e-1)*2.5,y:t.y-(e-1)*2.5,z:t.z-(e-1)*2}}return e<0?F(P[1],P[0],C(-e)):F(P[1],P[2],C(e))},I=()=>{let t=e.clientWidth,n=e.clientHeight;r.setPixelRatio(Math.min(window.devicePixelRatio,1.75)*i.scale()),r.setSize(t,n,!1),b.aspect=t/n,D.uAspect.value=t/n,b.updateProjectionMatrix(),N=t<768,P=ie()};I();let L=new ResizeObserver(I);L.observe(e);let R=!1,z=new IntersectionObserver(([e])=>{R=e.isIntersecting,R||M.forEach(({video:e})=>e?.pause())});z.observe(n);let B=()=>{document.hidden&&M.forEach(({video:e})=>e?.pause())};document.addEventListener(`visibilitychange`,B);let V=new a,H=new d(9,9),U=t=>{let n=e.getBoundingClientRect();H.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1)},W=()=>H.set(9,9);e.addEventListener(`pointermove`,U),e.addEventListener(`pointerleave`,W);let G=-1,K=!1,q=-1,J=r.domElement,Y=e=>{e.preventDefault(),K=!0},X=()=>{K=!1,q=-1};J.addEventListener(`webglcontextlost`,Y),J.addEventListener(`webglcontextrestored`,X);let Z=0,Q=performance.now(),$=0,oe=0,se=a=>{Z=requestAnimationFrame(se);let o=Math.min(50,a-Q),s=o/1e3;if(Q=a,!R||document.hidden){q=-1;return}q>0&&i.measure(a-q)&&I(),q=a;let c=n.getBoundingClientRect(),l=c.height-window.innerHeight,u=(l>0?S(-c.top/l):0)*(t.length-1),d=Math.min(t.length-2,Math.floor(u)),f=d+C(S((u-d-.25)/.5));$+=(f-$)*(1-Math.exp(-s*7));let p=Math.abs($-oe)/Math.max(s,.001);O.current=t.length>1?$/(t.length-1):0,oe=$;let m=Math.round($);V.setFromCamera(H,b);let h=V.intersectObject(M[m].mesh,!1)[0];x.update(a,H.x*D.uAspect.value,H.y,!!h);let g=h?`pointer`:``;e.style.cursor!==g&&(e.style.cursor=g),M.forEach((e,t)=>{let{mesh:n,material:r,video:i}=e,s=t-$,c=ae(s);if(n.position.set(c.x,c.y,c.z),n.rotation.set(c.rx,c.ry,c.rz),n.scale.setScalar(c.s),n.visible=Math.abs(s)<2.2,r.uniforms.uOpacity.value=1-S(Math.abs(s)-1.2),r.uniforms.uBend.value=.45+(_?0:Math.min(p,2)*.08),r.uniforms.uSpeedWave.value=_?0:Math.min(p,2)*.08,r.uniforms.uTime.value=a/1e3,n.renderOrder=100-Math.round(Math.abs(s)*10),i){let e=Math.abs(s)<1.4;e&&i.paused?i.play().catch(()=>{}):!e&&!i.paused&&i.pause()}e.hoverTarget=h&&t===m?1:0;let l=1-(1-(e.hoverTarget?.09:.07))**(o*.2);e.hover+=(e.hoverTarget-e.hover)*l,r.uniforms.uArrow.value=e.hover});let y=Math.min(t.length-1,Math.max(0,Math.round(f)));Math.abs($-y)<.3&&y!==G&&(G=y,k.current=y,re(y)),K||r.render(v,b)};return Z=requestAnimationFrame(se),()=>{cancelAnimationFrame(Z),e.removeEventListener(`pointermove`,U),e.removeEventListener(`pointerleave`,W),document.removeEventListener(`visibilitychange`,B),J.removeEventListener(`webglcontextlost`,Y),J.removeEventListener(`webglcontextrestored`,X),L.disconnect(),z.disconnect(),M.forEach(({material:e,map:t,video:n})=>{e.dispose(),t.dispose(),n&&(n.pause(),n.removeAttribute(`src`),n.load())}),j.dispose(),r.dispose(),r.domElement.remove()}},[t]);let A=t[D],j=(0,b.useMemo)(()=>t.map(e=>e.name),[t]);return(0,x.jsx)(`section`,{ref:y,className:`relative bg-black text-white`,style:{height:`${t.length*100}svh`},"aria-label":e,children:(0,x.jsxs)(`div`,{className:`sticky top-0 h-svh w-full overflow-hidden`,children:[(0,x.jsx)(`div`,{ref:E,className:`absolute inset-0`}),(0,x.jsx)(`p`,{className:`pointer-events-none absolute left-6 top-8 text-xs uppercase tracking-[0.25em] text-white/50 md:left-10 md:top-10`,children:e}),(0,x.jsx)(v,{sectionRef:y,labels:j,progressRef:O,activeRef:k,className:`scroll-ruler--inline`}),(0,x.jsxs)(`div`,{className:`absolute inset-x-6 bottom-16 flex flex-col items-start gap-4 md:inset-x-auto md:bottom-auto md:left-[58%] md:top-1/2 md:-translate-y-1/2`,children:[(0,x.jsxs)(`p`,{className:`font-mono text-xs tracking-[0.2em] text-white/50`,children:[String(D+1).padStart(2,`0`),` / `,String(t.length).padStart(2,`0`)]}),(0,x.jsx)(`div`,{className:`relative`,children:(0,x.jsx)(i,{mode:`popLayout`,initial:!1,children:(0,x.jsx)(r.div,{initial:{opacity:0,y:8,filter:`blur(6px)`},animate:{opacity:1,y:0,filter:`blur(0px)`,transition:{duration:.3,ease:[.25,.1,.25,1]}},exit:{opacity:0,y:-6,filter:`blur(6px)`,transition:{duration:.15,ease:[.4,0,.6,1]}},children:(0,x.jsx)(_,{as:`h2`,duration:.45,ease:`power2.inOut`,className:`text-platinum min-h-[1em] font-(family-name:--font-heading) text-[clamp(3rem,6.5vw,6.5rem)] leading-[0.9] tracking-tight`,children:A.name})},D)})}),(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,x.jsx)(`p`,{className:`rounded-full border border-white/20 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-white/75`,children:A.category}),(0,x.jsx)(`p`,{className:`rounded-full border border-white/20 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-white/75`,children:A.year})]}),(0,x.jsx)(`a`,{href:A.href,className:`mt-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.04]`,children:n})]})]})})};export{E as default};