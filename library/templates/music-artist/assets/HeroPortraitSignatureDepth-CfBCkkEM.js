import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{t as r}from"./react-azkLsmaj.js";import{t as i}from"./use-reduced-motion-B32dfh5T.js";import{t as a}from"./clsx-BxMt_E5H.js";import{t as o}from"./bundle-mjs-Q0M0K08x.js";import{n as s}from"./mediaSrc-z4bRx4eO.js";import{t as c}from"./Media-CZRK093i.js";import{i as l}from"./kitMotion-CcqiwdK5.js";import{Jn as ee,M as u,Mn as d,Nn as f,Ot as p,Ut as te,Yn as m,Z as h,cr as g,fr as ne,g as _,ht as re,i as ie,qt as ae,ur as oe}from"./three.module-BtOiv6AT.js";import{t as v}from"./introSignal-CF_rx8At.js";import{t as y}from"./GoldCardFace-DU9J9ilT.js";import{i as se,r as b,t as x}from"./PebbleTexture-B2WSEYM6.js";import{n as S}from"./sectionNeighbour-hMHp4R7j.js";var C=e(t(),1),w=n(),T=(...e)=>o(a(e)),E=[.65,.05,.36,1],D=`assets/media/set-01/`,ce=[.504,.667],O=.55,le=[{t:`1,0.07,-0.07,1,320.68,179.31`,cap:`round`,d:`M-200,100 C-140,40 -80,160 -20,100 C40,40 100,160 140,100`},{t:`1,0.05,-0.05,1,313.4,197.73`,cap:`butt`,d:`M0,0`},{t:`1,0,0,1,233.5,196.5`,cap:`butt`,d:`M0,0`},{t:`1,0,0,1,233.5,196.5`,cap:`butt`,d:`M0,0`}],ue=[{mask:0,t:`2.27,0,0,2.27,214.31,156.93`,t2:`1,0,0,1,52.15,27.3`,d:`M-400,-400H400V400H-400Z`},{mask:0,t:`2.27,0,0,2.27,131.53,8.78`,t2:`1,0,0,1,36.11,82.78`,d:`M-400,-400H400V400H-400Z`},{mask:1,t:`2.27,0,0,2.27,159.5,210.06`,t2:`1,0,0,1,12.86,38.37`,d:`M-400,-400H400V400H-400Z`},{mask:2,t:`2.27,0,0,2.27,16.17,23.77`,t2:`1,0,0,1,39.61,78.4`,d:`M-400,-400H400V400H-400Z`},{mask:3,t:`2.27,0,0,2.27,91.6,216.61`,t2:`1,0,0,1,8.87,35.99`,d:`M-400,-400H400V400H-400Z`}],k=[{index:2,at:0,duration:.75},{index:3,at:.7,duration:.25},{index:0,at:1,duration:1.1},{index:1,at:2,duration:.25}],de=`
uniform vec4 uRect;
uniform vec2 uPivot;
uniform vec2 uAnchor;
uniform float uZoom;
uniform vec2 uLockAnchor;
uniform float uLockZoom;
uniform vec2 uView;
uniform vec2 uTiltCenter;
uniform vec2 uTilt;
varying vec2 vUv;
varying vec2 vLock;
vec2 place(vec2 anchor, float zoom) {
  vec2 rest = mix(uRect.xy, uRect.zw, uv);
  vec2 pivot = mix(uRect.xy, uRect.zw, uPivot);
  return anchor + (rest - pivot) * zoom;
}
void main() {
  vUv = uv;
  vLock = place(uLockAnchor, uLockZoom) * 0.5 + 0.5;
  vec2 half_ = uView * 0.5;
  vec2 p = place(uAnchor, uZoom) * half_ - uTiltCenter;
  float down = -p.y;
  float y1 = down * cos(uTilt.y);
  float z1 = down * sin(uTilt.y);
  float x2 = p.x * cos(uTilt.x) + z1 * sin(uTilt.x);
  float z2 = -p.x * sin(uTilt.x) + z1 * cos(uTilt.x);
  float w = (1400.0 - z2) / 1400.0;
  gl_Position = vec4((uTiltCenter * w + vec2(x2, -y1)) / half_, 0.0, w);
}
`,fe=`
uniform sampler2D uDiffuse;
uniform sampler2D uDepth;
uniform sampler2D uAlpha;
uniform sampler2D uMask;
uniform sampler2D uTint;
uniform sampler2D uLogo;
uniform sampler2D uRefl;
uniform vec2 uPointer;
uniform float uScroll;
uniform float uLens;
uniform float uMaskEdge;
uniform vec2 uCell;
uniform vec2 uRes;
uniform float uVideoAspect;
uniform float uReveal;
uniform float uLensIn;
varying vec2 vUv;
varying vec2 vLock;

vec2 coverUv(vec2 screen) {
  float aspect = uRes.x / uRes.y;
  vec2 c = screen - 0.5;
  if (aspect > uVideoAspect) c.y *= uVideoAspect / aspect;
  else c.x *= aspect / uVideoAspect;
  return c + 0.5;
}

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1.0e-10)), d / (q.x + 1.0e-10), q.x);
}
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 grade(vec3 rgb, float sat, float bright) {
  vec3 hsv = rgb2hsv(rgb);
  hsv.y = clamp(hsv.y * sat, 0.0, 1.0);
  hsv.z = clamp(hsv.z * bright, 0.0, 1.0);
  return hsv2rgb(hsv);
}
vec3 overlayBlend(vec3 base, vec3 top) {
  return mix(2.0 * base * top, 1.0 - 2.0 * (1.0 - base) * (1.0 - top), step(0.5, base));
}

void main() {
  float depth = texture2D(uDepth, vUv).r;
  vec2 shift = vec2(0.0, -uScroll * 0.018);
  vec2 uv = vUv + shift * (depth - 0.5);
  vec3 base = texture2D(uDiffuse, uv).rgb;
  float alpha = texture2D(uAlpha, uv).r;
  float maskValue = texture2D(uMask, uv).r;
  float feather = max(fwidth(maskValue), 0.002);
  float edge = smoothstep(uMaskEdge - feather, uMaskEdge + feather, maskValue) * 0.75 * uLens;
  vec2 videoUv = coverUv(vLock) + vec2(-0.03 * uPointer.x, 0.02 * uPointer.y);
  float reveal = 1.0 - smoothstep(uReveal * 1.25 - 0.25, uReveal * 1.25, vUv.y);
  float lens = edge * uLensIn * reveal;
  vec3 color = base;
  if (lens > 0.001) {
    vec3 refl = texture2D(uRefl, clamp(videoUv, 0.0, 1.0)).rgb;
    vec3 lensColor = grade(refl, 0.75, 0.6) * 1.3;
    vec2 crt = vLock;
    float gx = crt.x / uCell.x * 6.2831853;
    vec3 grille = 0.5 + 0.5 * vec3(sin(gx), sin(gx + 2.0944), sin(gx + 4.1888));
    lensColor *= mix(vec3(1.0), 0.62 + 0.76 * grille, 0.25);
    lensColor *= 1.0 - 0.19 * (0.5 + 0.5 * sin(crt.y / uCell.y * 6.2831853));
    lensColor *= 1.11;
    vec4 shade = texture2D(uTint, uv);
    lensColor = mix(lensColor, overlayBlend(lensColor, grade(shade.rgb, 2.8, 1.0)), shade.a);
    vec4 logo = texture2D(uLogo, uv);
    lensColor = mix(lensColor, lensColor * logo.rgb, logo.a * 0.2);
    color = mix(base, lensColor, lens);
  }
  gl_FragColor = vec4(color, alpha * reveal);
}
`,A=e=>Math.min(1,Math.max(0,e)),pe=e=>{let t=A(e);return t*t*(3-2*t)},me=e=>1-(1-A(e))**3,j=e=>{let t=e.length,n=n=>e[(n+t)%t],r=`M${e[0][0]} ${e[0][1]}`;return e.forEach((e,t)=>{let[i,a,o]=[n(t-1),n(t+1),n(t+2)],s=[e[0]+(a[0]-i[0])/6,e[1]+(a[1]-i[1])/6],c=[a[0]-(o[0]-e[0])/6,a[1]-(o[1]-e[1])/6];r+=` C${s[0]} ${s[1]} ${c[0]} ${c[1]} ${a[0]} ${a[1]}`}),`${r}Z`},he=({size:e,lenses:t})=>{let n=document.createElement(`canvas`);n.width=e[0],n.height=e[1];let r=n.getContext(`2d`);if(!r)return null;r.fillStyle=`#000`,r.fillRect(0,0,e[0],e[1]),r.fillStyle=`#fff`,t.forEach(e=>r.fill(new Path2D(j(e))));let i=new _(n);return i.minFilter=re,i.generateMipmaps=!1,i},ge=({title:e=`Your Brand`,description:t=`A short story about where the athlete comes from and what drives them. Every move carries intention, style and a story beyond the field.`,cardText:n=`The draft pick out of college who rewrote the record books, the rookie card that marked the start of a long professional career.`,imageSrc:a=`${D}hero-portrait-mobile-1600.webp`,imageAlt:o=`Hero image: portrait of the athlete`,diffuseSrc:_=`${D}hero-diffuse-1600.webp`,depthSrc:A=`${D}hero-depth-1600.webp`,alphaSrc:j=`${D}hero-alpha-1600.webp`,lensMaskSrc:ge=`${D}hero-reflection-1600.webp`,lensTintSrc:_e=`${D}hero-shades-reflection-1600.webp`,lensLogoSrc:ve=`${D}hero-shades-logo-1600.webp`,lensOutline:M,reflectionSrc:ye=`${D}gallery-touchdown-us-bank-1600.webp`,reflectionVideoSrc:N=`${D}intro-1600.mp4`,wordmarkSrcs:P=[`${D}sig-justin-800.svg`,`${D}sig-jefferson-800.svg`],cardImageSrc:be=`${D}moment-peach-bowl-1600.webp`,cardImageAlt:F=`Card image: rookie card`,signatureText:I,ariaLabel:L=`Hero section`,className:R})=>{let z=(0,C.useRef)(null),xe=(0,C.useRef)(null),Se=(0,C.useRef)(null),B=(0,C.useRef)(null),V=(0,C.useId)().replace(/:/g,``);S(z);let H=i(),{ease:U,slow:W}=l(),[G,K]=(0,C.useState)(!1),q=!!(_&&A&&j);(0,C.useEffect)(()=>{if(!v.isClaimed()){K(!0);return}let e=document.querySelector(`nav[aria-label="Main"]`);e&&!v.isRevealed()&&(e.style.opacity=`0`);let t=0,n=v.onReveal(()=>{K(!0),t=window.setTimeout(()=>{e&&(e.style.transition=`opacity 1.4s cubic-bezier(0.33, 1, 0.68, 1)`,e.style.opacity=``)},H?0:1300)});return()=>{n(),window.clearTimeout(t),e&&(e.style.opacity=``)}},[H]),(0,C.useEffect)(()=>{let e=xe.current,t=Se.current,n=()=>{v.markReady(),v.isClaimed()||v.reveal()};if(!e||!t||H||!q){n();return}let r=t.parentElement;if(!r)return;let i=!1,a=0,o=!0,c;try{c=new ie({canvas:t,alpha:!0,antialias:!1,powerPreference:`high-performance`})}catch{n();return}let l=Math.min(window.devicePixelRatio||1,1.5);c.setPixelRatio(l);let y=new d,se=new te(-1,1,1,-1,0,1),b=new u(new Uint8Array([255,255,255,255]),1,1);b.needsUpdate=!0;let x=new u(new Uint8Array([0,0,0,0]),1,1);x.needsUpdate=!0;let S={uDiffuse:{value:b},uDepth:{value:b},uAlpha:{value:b},uMask:{value:b},uTint:{value:b},uLogo:{value:b},uRefl:{value:b},uPointer:{value:new g},uScroll:{value:0},uLens:{value:0},uMaskEdge:{value:M?.5:.36},uCell:{value:new g(6/window.innerWidth,5/window.innerHeight)},uRes:{value:new g(1,1)},uVideoAspect:{value:16/9},uRect:{value:new oe(-1,-1,1,1)},uPivot:{value:new g(...ce)},uAnchor:{value:new g},uZoom:{value:4},uLockAnchor:{value:new g},uLockZoom:{value:4},uView:{value:new g(1,1)},uTiltCenter:{value:new g},uTilt:{value:new g},uReveal:{value:0},uLensIn:{value:0}},C=new ae(2,2),w=new f({uniforms:S,vertexShader:de,fragmentShader:fe,transparent:!0});y.add(new p(C,w));let T=[],E=navigator.userAgent,D=/^((?!chrome|android).)*safari/i.test(E)?Number(E.match(/Version\/(\d+)/)?.[1]??0):1/0,O=E.includes(`Firefox`)?Number(E.match(/Firefox\/(\d+)\./)?.[1]??0):1/0,le=typeof createImageBitmap==`function`&&D>=17&&O>=98,ue=new m;ue.setCrossOrigin(`anonymous`);let k=new h;k.setCrossOrigin(`anonymous`),k.setOptions({imageOrientation:`flipY`,premultiplyAlpha:`none`,colorSpaceConversion:`none`});let P=e=>(e.minFilter=re,e.generateMipmaps=!1,T.push(e),e),be=e=>new Promise(t=>{if(!e)return t(null);if(!le){ue.load(s(e),e=>t(P(e)),void 0,()=>t(null));return}k.load(s(e),e=>{let n=new ee(e);n.flipY=!1,n.needsUpdate=!0,t(P(n))},void 0,()=>t(null))}),F=4,I=()=>window.innerWidth<880,L=()=>{c.setSize(Math.max(1,r.offsetWidth),Math.max(1,r.offsetHeight),!1),S.uView.value.set(Math.max(1,r.offsetWidth),Math.max(1,r.offsetHeight));let t=r.getBoundingClientRect(),n=e.getBoundingClientRect();if(t.width&&t.height&&n.width){let e=(n.left-t.left)/t.width,r=(n.right-t.left)/t.width,i=(n.top-t.top)/t.height,a=(n.bottom-t.top)/t.height;S.uRect.value.set(e*2-1,1-a*2,r*2-1,1-i*2),S.uTiltCenter.value.set((e+r-1)*.5*t.width,(1-i-a)*.5*t.height),F=Math.max(3.97*(I()?2.4:1)*t.width/n.width,1.47)}c.getDrawingBufferSize(S.uRes.value),S.uCell.value.set(6/window.innerWidth,5/window.innerHeight)},R=null,z=null,V=null,U=!N;if(N){let e=document.createElement(`video`);R=e,e.muted=!0,e.loop=!0,e.playsInline=!0,e.crossOrigin=`anonymous`,e.preload=`auto`,e.src=s(N);let t=new ne(e);t.minFilter=re,t.generateMipmaps=!1,z=t,e.addEventListener(`loadedmetadata`,()=>{e.videoWidth&&e.videoHeight&&(S.uVideoAspect.value=e.videoWidth/e.videoHeight)}),e.addEventListener(`loadeddata`,()=>$()),e.addEventListener(`error`,()=>{U=!0,V&&(S.uRefl.value=V),$()},{once:!0})}let W=()=>{R&&(o&&!document.hidden?R.play().catch(()=>{}):R.pause())},G=new ResizeObserver(L);G.observe(r),L();let K=new g,J=new g,Y=new g,X=e=>{K.set(e.clientX/window.innerWidth*2-1,1-e.clientY/window.innerHeight*2)};window.addEventListener(`pointermove`,X,{passive:!0});let Z=!1,Ce=!1,we=1/0,Te=0,Ee=0,Q=0,De=performance.now(),Oe=e=>{if(a=0,i||!o||document.hidden||!Z)return;if(!Ce){if(!U&&(!R||R.readyState<2))return;z&&!U&&(z.needsUpdate=!0,S.uRefl.value=z)}let r=e-De;De=e,Q=r>24?Q+1:Math.max(0,Q-1),Q>30&&l>1&&(l=1,Q=0,c.setPixelRatio(l),L());let s=Number.isFinite(we)?(e-we)/1e3:0,ee=me(s/1.4),u=pe((s-1.2)/.6),d=S.uRect.value,f=d.x+(d.z-d.x)*ce[0],p=d.y+(d.w-d.y)*ce[1],te=1-.4*(F-1);S.uZoom.value=1.2-.2*ee,S.uAnchor.value.set(f,p-.14*(1-ee)),S.uReveal.value=me(s/1.1),S.uLensIn.value=pe((s-.6)/.8),S.uLockZoom.value=F,S.uLockAnchor.value.set(f*te,p*te),J.lerp(K,.07),S.uPointer.value.copy(J).multiplyScalar(u),S.uScroll.value=Math.min(window.scrollY/window.innerHeight,1.5),Y.lerp(K,.07);let m=Y.x*u,h=Y.y*u;(Math.abs(m-Te)>5e-4||Math.abs(h-Ee)>5e-4)&&(Te=m,Ee=h,S.uTilt.value.set(m*2.5*Math.PI/180,-h*2.1*Math.PI/180)),c.render(y,se),Ce||(Ce=!0,t.style.opacity=`1`,B.current&&(B.current.style.opacity=`0`),n()),a=requestAnimationFrame(Oe)},$=()=>{W(),!a&&Z&&o&&!document.hidden&&!i&&(De=performance.now(),a=requestAnimationFrame(Oe))},ke=new IntersectionObserver(([e])=>{o=e.isIntersecting,$()});ke.observe(r),document.addEventListener(`visibilitychange`,$);let Ae=v.onReveal(()=>{we=performance.now(),$()});return Promise.all([_,A,j,ge,_e,ve,ye].map(be)).then(([e,t,r,a,o,s,c])=>{if(i)return;if(!e||!t||!r){n();return}S.uDiffuse.value=e,S.uDepth.value=t,S.uAlpha.value=r,V=c;let l=M?he(M):null;l&&T.push(l),(l||a)&&o&&(c||z)&&(S.uMask.value=l??a,S.uTint.value=o,S.uLogo.value=s??x,S.uLens.value=1),U&&c&&(S.uRefl.value=c),Z=!0,$()}),()=>{i=!0,a&&cancelAnimationFrame(a),Ae(),G.disconnect(),ke.disconnect(),window.removeEventListener(`pointermove`,X),document.removeEventListener(`visibilitychange`,$),T.forEach(e=>{e.dispose(),le&&e.image instanceof ImageBitmap&&e.image.close()}),R&&(R.pause(),R.removeAttribute(`src`),R.load()),z?.dispose(),b.dispose(),x.dispose(),C.dispose(),w.dispose(),c.dispose(),t.style.opacity=`0`,B.current&&(B.current.style.opacity=`1`)}},[H,q,_,A,j,ge,_e,ve,ye,N,M]);let J=e.trim().split(/\s+/),Y=[J[0]??``,J.slice(1).join(` `)||J[0]||``],X=O+.8,Z=Array.from(t);return(0,w.jsxs)(`section`,{ref:z,"aria-label":L,className:T(`relative z-0 h-svh w-full overflow-hidden lg:sticky lg:top-0 lg:z-[-1] bg-[var(--tint-3)] text-[var(--tint-2)]`,R),children:[(0,w.jsx)(b,{blend:`screen`}),(0,w.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-x-0 top-[calc(8.333%-6svh)] flex h-[112svh] flex-col gap-[2svh]`,children:Y.map((e,t)=>{let n=P[t];return(0,w.jsx)(`div`,{className:`flex flex-[0_0_55svh] items-center overflow-hidden mix-blend-soft-light`,children:(0,w.jsx)(r.div,{initial:H?!1:{y:`105%`,skewY:4},animate:G?{y:`0%`,skewY:0}:void 0,transition:{duration:1.2,ease:U,delay:.1+t*.12},className:`flex h-[55svh] items-center`,children:(0,w.jsx)(`div`,{className:`flex h-[55svh] w-max shrink-0 items-center gap-[8vw] px-[4vw]`,style:H?{transform:`translateX(-12%)`}:{animation:`${t?`marquee-horizontal-reverse`:`marquee-horizontal`} 90s linear infinite`},children:[0,1,2,3].map(t=>n?(0,w.jsxs)(`div`,{className:`relative h-full shrink-0`,children:[(0,w.jsx)(c,{src:n,alt:``,loading:`eager`,decoding:`async`,className:`h-full w-auto max-w-none opacity-0`}),(0,w.jsx)(`div`,{className:`absolute inset-0 bg-[var(--background)]`,style:{maskImage:`url("${s(n)}")`,maskSize:`contain`,maskRepeat:`no-repeat`,maskPosition:`center`,WebkitMaskImage:`url("${s(n)}")`,WebkitMaskSize:`contain`,WebkitMaskRepeat:`no-repeat`,WebkitMaskPosition:`center`}})]},t):(0,w.jsx)(`div`,{className:`shrink-0 font-[family-name:var(--font-heading)] text-[length:72svh] font-extrabold uppercase leading-[0.8] text-[var(--background)]`,children:e},t))})})},t)})}),(0,w.jsx)(x,{src:se.light01,className:`z-[5]`}),(0,w.jsxs)(`div`,{className:`absolute inset-0 z-[6] origin-bottom lg:[transform:scale(calc(1-var(--jj-wipe,0)*0.18))]`,children:[(0,w.jsx)(c,{src:a,alt:o,loading:`eager`,fetchPriority:`high`,decoding:`async`,sizes:`200vw`,className:T(`absolute bottom-0 left-1/2 h-[72svh] w-auto max-w-none -translate-x-1/2 object-contain object-bottom`,q&&`hidden`)}),q&&(0,w.jsx)(`div`,{ref:xe,className:`absolute left-1/2 top-[24svh] aspect-[2432/1750] w-[max(280vw,111svh)] -translate-x-1/2 lg:top-[4.5svh] lg:w-[max(88vw,139svh)]`,children:(0,w.jsx)(`img`,{ref:B,src:s(_),alt:``,"aria-hidden":`true`,loading:`eager`,decoding:`async`,className:`absolute inset-0 size-full object-cover`,style:{maskImage:`url("${s(j)}")`,maskSize:`100% 100%`,maskMode:`luminance`,WebkitMaskImage:`url("${s(j)}")`,WebkitMaskSize:`100% 100%`}})}),q&&(0,w.jsx)(`canvas`,{ref:Se,"aria-hidden":`true`,className:`absolute inset-0 size-full opacity-0`})]}),(0,w.jsx)(`div`,{className:`absolute inset-x-0 top-0 z-[7] flex justify-center pt-[2.25rem]`,children:(0,w.jsx)(`div`,{className:`overflow-hidden pb-[0.2em] -mb-[0.2em]`,children:(0,w.jsx)(r.h1,{initial:H?!1:{y:`110%`},animate:G?{y:`0%`}:void 0,transition:{duration:W,ease:U,delay:O+.75},className:`whitespace-nowrap text-[length:clamp(1.25rem,1.6vw,1.6rem)] uppercase leading-[0.9] text-[var(--tint-2)]`,children:e})})}),(0,w.jsxs)(`div`,{className:`absolute left-[var(--gutter)] top-[47%] z-[7] hidden w-[clamp(9rem,13.6vw,13rem)] flex-col gap-[1.5rem] lg:flex`,children:[(0,w.jsx)(`div`,{className:`flex h-[calc(clamp(6.5rem,10vw,9.5rem)*1.465)] items-end`,children:(0,w.jsx)(r.div,{"data-hero-card":!0,initial:H?!1:{opacity:0,y:40,rotate:-6},animate:G?{opacity:1,y:0,rotate:0}:void 0,transition:{duration:W,ease:U,delay:X},className:`w-[clamp(6.5rem,10vw,9.5rem)]`,children:(0,w.jsx)(r.div,{animate:H?void 0:{y:[0,-6,0],rotate:[0,1,0]},transition:{duration:7,ease:`easeInOut`,repeat:1/0},className:`aspect-[144/211] drop-shadow-[0_0.75rem_1.25rem_color-mix(in_srgb,var(--tint-2)_30%,transparent)]`,children:(0,w.jsx)(y,{src:be,alt:F,eager:!0,sizes:`10rem`})})})}),(0,w.jsx)(r.p,{initial:H?!1:{opacity:0,y:12},animate:G?{opacity:1,y:0}:void 0,transition:{duration:W,ease:U,delay:X+.3},className:`text-pretty text-[length:var(--text-body)] leading-[1.3] text-[var(--band-ink,var(--background))]`,children:n})]}),(0,w.jsxs)(`div`,{className:`absolute inset-x-[var(--gutter)] top-[6.5rem] z-[7] flex flex-row-reverse items-start justify-between gap-[1rem] lg:left-auto lg:right-[var(--gutter)] lg:top-[47%] lg:w-[clamp(9rem,13.6vw,13rem)] lg:flex-col lg:items-stretch lg:justify-start lg:gap-[1.5rem]`,children:[(0,w.jsx)(`div`,{className:`flex w-[clamp(4.5rem,22vw,6rem)] shrink-0 items-end lg:h-[calc(clamp(6.5rem,10vw,9.5rem)*1.465)] lg:w-full`,children:I?(0,w.jsx)(r.p,{"aria-hidden":`true`,initial:H?!1:{clipPath:`inset(-20% 100% -20% 0)`},animate:G?{clipPath:`inset(-20% 0% -20% 0)`}:void 0,transition:{duration:1.6,ease:E,delay:X+.2},className:`w-full -rotate-[8deg] whitespace-nowrap text-center font-[family-name:var(--font-signature,var(--font-heading))] text-[length:clamp(2.75rem,5vw,4.75rem)] leading-[1.1]`,style:{color:`color-mix(in srgb, var(--accent) 45%, var(--tint-2))`},children:I}):(0,w.jsxs)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 467 393`,fill:`none`,className:`h-auto w-full overflow-visible`,children:[(0,w.jsx)(`defs`,{children:le.map((e,t)=>{let n=k.find(e=>e.index===t);return(0,w.jsx)(`mask`,{id:`${V}-sig-${t}`,maskUnits:`userSpaceOnUse`,x:`0`,y:`0`,width:`467`,height:`393`,children:(0,w.jsx)(`g`,{transform:`matrix(${e.t})`,children:(0,w.jsx)(r.path,{d:e.d,stroke:`white`,strokeWidth:23,strokeLinecap:e.cap,fill:`none`,initial:H?!1:{pathLength:0},animate:G?{pathLength:1}:void 0,transition:{duration:n?.duration??.5,ease:E,delay:X+.2+(n?.at??0)}})})},t)})}),ue.map((e,t)=>(0,w.jsx)(`g`,{mask:`url(#${V}-sig-${e.mask})`,children:(0,w.jsx)(`g`,{transform:`matrix(${e.t})`,children:(0,w.jsx)(`g`,{transform:`matrix(${e.t2})`,children:(0,w.jsx)(`path`,{d:e.d,style:{fill:`color-mix(in srgb, var(--accent) 45%, var(--tint-2))`}})})})},t))]})}),(0,w.jsxs)(`div`,{className:`max-w-[17rem] text-pretty text-[length:var(--text-body)] leading-[1.3] text-[var(--band-ink,var(--background))] lg:max-w-none`,children:[(0,w.jsx)(`div`,{className:`sr-only`,children:t}),(0,w.jsx)(r.div,{"aria-hidden":`true`,initial:H?!1:`hidden`,animate:G?`show`:`hidden`,variants:{hidden:{},show:{transition:{delayChildren:X+.6,staggerChildren:.018}}},children:Z.map((e,t)=>(0,w.jsx)(r.div,{className:`inline`,variants:{hidden:{opacity:0},show:{opacity:1,transition:{duration:.2}}},children:e},t))})]})]})]})};export{ge as default};