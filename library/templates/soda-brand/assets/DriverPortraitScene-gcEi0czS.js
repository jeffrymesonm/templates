import{a as e}from"./chunk-BEqpzyXh.js";import{t}from"./react-CFRkDy7n.js";import{t as n}from"./jsx-runtime-BAjjBXwY.js";import{t as r}from"./bundle-mjs-Q0M0K08x.js";import{n as i}from"./mediaSrc-z4bRx4eO.js";import{C as a,Dt as o,Gt as s,H as c,J as l,Jn as u,Mn as d,N as f,Nn as p,Ot as m,P as h,S as g,Tn as _,W as v,Yn as ee,_t as te,bt as ne,cr as re,f as y,ht as b,i as ie,it as x,jn as S,lr as C,p as w,q as ae,qt as oe,rt as se,t as ce,u as le,xt as T,yt as E}from"./three.module-BtOiv6AT.js";import{t as ue}from"./BufferGeometryUtils-BCwTizHk.js";import{t as de}from"./GLTFLoader-s6ojLF3M.js";import{n as fe,t as pe}from"./cssColor-ByEPkjAs.js";import{t as D}from"./ContourField-DZrKg5Hf.js";import{t as me}from"./frameBudget-BT_0ZGeG.js";import{t as he}from"./webildReady-BQYIrrx1.js";import{t as O}from"./introSignal-CF_rx8At.js";var k=e(t(),1),A=new WeakMap,j=new URL(`/assets/draco_decoder-C32yEggz.wasm`,``+import.meta.url).toString(),M=new URL(`/assets/draco_wasm_wrapper-DxJM36Ib.js`,``+import.meta.url).toString(),N=new URL(`/assets/draco_decoder-fzg4nYZr.js`,``+import.meta.url).toString();new URL(`/assets/draco_wasm_wrapper-fZCQGLGb.js`,``+import.meta.url).toString(),new URL(`/assets/draco_decoder-Z1_iN-Ht.wasm`,``+import.meta.url).toString();var ge=class extends ne{constructor(e){super(e),this.decoderPaths={js:M,wasm:j,dep_js:N},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL=``,this.defaultAttributeIDs={position:`POSITION`,normal:`NORMAL`,color:`COLOR`,uv:`TEX_COORD`},this.defaultAttributeTypes={position:`Float32Array`,normal:`Float32Array`,color:`Float32Array`,uv:`Float32Array`}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e==`object`?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=T.resolveURL(`draco_wasm_wrapper.js`,e),t.wasm=T.resolveURL(`draco_decoder.wasm`,e),t.dep_js=T.resolveURL(`draco_decoder.js`,e)),this}setDecoderConfig(e){return console.warn(`THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194.`),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){let i=new c(this.manager);i.setPath(this.path),i.setResponseType(`arraybuffer`),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,e=>{this.parse(e,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,S,n).catch(n)}decodeDracoFile(e,t,n,r,i=E,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:i};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(A.has(e)){let t=A.get(e);if(t.key===n)return t.promise;if(e.byteLength===0)throw Error(`THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.`)}let r,i=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(i,a).then(n=>(r=n,new Promise((n,a)=>{r._callbacks[i]={resolve:n,reject:a},r.postMessage({type:`decode`,id:i,taskConfig:t,buffer:e},[e])}))).then(e=>this._createGeometry(e.geometry));return o.catch(()=>!0).then(()=>{r&&i&&this._releaseTask(r,i)}),A.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new w;e.index&&t.setIndex(new y(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:r,array:i,itemSize:a,stride:o,vertexColorSpace:s}=e.attributes[n],c;c=a===o?new y(i,a):new x(new se(i,o),a,0),r===`color`&&(this._assignVertexColorSpace(c,s),c.normalized=!(i instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==`srgb`)return;let n=new g;for(let t=0,r=e.count;t<r;t++)n.fromBufferAttribute(e,t),a.colorSpaceToWorking(n,S),e.setXYZ(t,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new c(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((t,r)=>{n.load(e,t,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!=`object`||this.decoderConfig.type===`js`,t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw Error(`THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.`);t.push(this._loadLibrary(n.dep_js,`text`))}else t.push(this._loadLibrary(n.js,`text`)),t.push(this._loadLibrary(n.wasm,`arraybuffer`));return this.decoderPending=Promise.all(t).then(t=>{let n=t[0];e||(this.decoderConfig.wasmBinary=t[1]);let r=P.toString(),i=[`/* draco decoder */`,n,``,`/* worker */`,r.substring(r.indexOf(`{`)+1,r.lastIndexOf(`}`))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:`init`,decoderConfig:this.decoderConfig}),e.onmessage=function(t){let n=t.data;switch(n.type){case`decode`:e._callbacks[n.id].resolve(n);break;case`error`:e._callbacks[n.id].reject(n);break;default:console.error(`THREE.DRACOLoader: Unexpected message, "`+n.type+`"`)}},this.workerPool.push(e)}else this.workerPool.sort(function(e,t){return e._taskLoad>t._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log(`Task load: `,this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==``&&URL.revokeObjectURL(this.workerSourceURL),this}};function P(){let e,t;onmessage=function(r){let i=r.data;switch(i.type){case`init`:e=i.decoderConfig,t=new Promise(function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)});break;case`decode`:let r=i.buffer,a=i.taskConfig;t.then(e=>{let t=e.draco,o=new t.Decoder;try{let e=n(t,o,new Int8Array(r),a),s=e.attributes.map(e=>e.array.buffer);e.index&&s.push(e.index.array.buffer),self.postMessage({type:`decode`,id:i.id,geometry:e},s)}catch(e){console.error(e),self.postMessage({type:`error`,id:i.id,error:e.message})}finally{t.destroy(o)}});break}};function n(e,t,n,a){let o=a.attributeIDs,s=a.attributeTypes,c,l,u=t.GetEncodedGeometryType(n);if(u===e.TRIANGULAR_MESH)c=new e.Mesh,l=t.DecodeArrayToMesh(n,n.byteLength,c);else if(u===e.POINT_CLOUD)c=new e.PointCloud,l=t.DecodeArrayToPointCloud(n,n.byteLength,c);else throw Error(`THREE.DRACOLoader: Unexpected geometry type.`);if(!l.ok()||c.ptr===0)throw Error(`THREE.DRACOLoader: Decoding failed: `+l.error_msg());let d={index:null,attributes:[]};for(let n in o){let r=self[s[n]],l,u;if(a.useUniqueIDs)u=o[n],l=t.GetAttributeByUniqueId(c,u);else{if(u=t.GetAttributeId(c,e[o[n]]),u===-1)continue;l=t.GetAttribute(c,u)}let f=i(e,t,c,n,r,l);n===`color`&&(f.vertexColorSpace=a.vertexColorSpace),d.attributes.push(f)}return u===e.TRIANGULAR_MESH&&(d.index=r(e,t,c)),e.destroy(c),d}function r(e,t,n){let r=n.num_faces()*3,i=r*4,a=e._malloc(i);t.GetTrianglesUInt32Array(n,i,a);let o=new Uint32Array(e.HEAPF32.buffer,a,r).slice();return e._free(a),{array:o,itemSize:1}}function i(e,t,n,r,i,o){let s=n.num_points(),c=o.num_components(),l=a(e,i),u=c*i.BYTES_PER_ELEMENT,d=Math.ceil(u/4)*4,f=d/i.BYTES_PER_ELEMENT,p=s*u,m=s*d,h=e._malloc(p);t.GetAttributeDataArrayForAllPoints(n,o,l,p,h);let g=new i(e.HEAPF32.buffer,h,p/i.BYTES_PER_ELEMENT),_;if(u===d)_=g.slice();else{_=new i(m/i.BYTES_PER_ELEMENT);let e=0;for(let t=0,n=g.length;t<n;t++){for(let n=0;n<c;n++)_[e+n]=g[t*c+n];e+=f}}return e._free(h),{name:r,count:s,itemSize:c,array:_,stride:f}}function a(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}}var _e=class extends f{constructor(e){super(e),this.type=l}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i?(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i)):!1},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;){if(c.string+=l+`
`,l.charAt(0)===`#`){c.comments+=l+`
`;continue}if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=h.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=h.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=h.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=h.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),u=c.width,d=c.height,f=i(s.subarray(s.pos),u,d),p,m,g;switch(this.type){case v:g=f.length/4;let e=new Float32Array(g*4);for(let t=0;t<g;t++)a(f,t*4,e,t*4);p=e,m=v;break;case l:g=f.length/4;let t=new Uint16Array(g*4);for(let e=0;e<g;e++)o(f,e*4,t,e*4);p=t,m=l;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:u,height:d,data:p,header:c.string,gamma:c.gamma,exposure:c.exposure,type:m,colorSpace:E,minFilter:b,magFilter:b,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}},F=n(),ve=`assets/vendor/draco/`,I=5.4,ye=.14,be=Math.PI/180,xe=35,Se=.1,Ce=-3,L=8,we=1.778,R={x:.3,y:.1},z=[{x:-.85,y:-.62},{x:.78,y:-.2},{x:-.7,y:.2},{x:.82,y:.6}],Te=new C(0,-.56,.35),B={cameraZ:6.5,subjectScale:1.15,subjectY:.42,subjectParallax:.02,riseDistance:200,riseDuration:2,headScale:.8,headY:.58,headParallax:.005,headRelight:.32,helmetScale:.62,helmetY:.45,helmetFollow:.01,helmetAmpX:2.5,helmetAmpY:2.1,trailRadius:.46,trailIdleScale:.28,trailTaper:1.9,trailTaperIdle:1.6,trailTaperFast:1.25,trailLength:.64,revealThreshold:.08,revealEdge:.005,revealWarp:1.29,revealWarpScale:2.9,revealSpeed:1.25,pointerLerp:.17,pacePeak:.029,paceAttack:.09,paceRelease:.205,paceThreshold:.06,paceRamp:.15,outlinePeriod:3.1,outlineStagger:1.2,outlineOpacity:.09,outlineWidth:.15,outlineLightness:.64,sweepWarp:.86,sweepLength:.67,sweepRadius:.33,bgLineOpacity:.85,bgRevealOpacity:1,introDuration:4,burnStart:.14,autoSweepAmount:0,autoSweepPeriod:5,autoSweepStroke:.45},Ee=e=>Math.min(1,Math.max(0,e)),De=(e,t,n)=>{let r=Ee((n-e)/(t-e));return r*r*(3-2*r)},Oe=()=>{let e=matchMedia(`(hover: none) and (pointer: coarse)`).matches,t=innerWidth,n=t<768||e&&t<1024?`mobile`:e||t<1280?`tablet`:`desktop`,r=n===`mobile`,i=matchMedia(`(prefers-reduced-motion: reduce)`).matches,a=navigator,o=!!a.connection?.saveData||(a.deviceMemory??8)<=2;return{name:n,mobile:r,coarse:e,maxDpr:r?2:1.5,frameInterval:n===`desktop`?0:1e3/60-2,pointer:!e&&!i,antialias:n===`desktop`,samples:r?28:n===`tablet`?44:72,outline:!0,reveal:!r,freeze:i||r&&o}},ke=(e,t)=>e>=880?null:e>=640?{top:t*.3,height:t*.7}:{top:t*.36,height:t*.64},Ae=`
uniform float uGrey;
uniform float uDim;
uniform vec3 uLift;
uniform float uLiftMix;
vec3 sceneGrade(vec3 c) {
  c = mix(c, vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), uGrey);
  c = mix(c, max(c, uLift), uLiftMix);
  return c * uDim;
}
`,V=(e,t,n,r,i,a,o,s,c)=>`
float ${e}(vec2 ndc) {
  float gate = smoothstep(uGateStart, uGateStart + uGateWidth, ${i});
  if (gate <= 0.0) return 0.0;
  vec2 bounded = vec2(ndc.x * uAspect, ndc.y);
  if (any(lessThan(bounded, ${n})) || any(greaterThan(bounded, ${r}))) return 0.0;
  vec2 point = bounded;
  if (${a} > 0.001) {
    vec2 noiseUv = ndc * 0.5 + 0.5;
    float nx = texture2D(uNoiseTex, noiseUv * uWarpScale + vec2(uTime * 0.07, uTime * 0.05)).r;
    float ny = texture2D(uNoiseTex, noiseUv * uWarpScale * 1.4 - vec2(uTime * 0.06, uTime * 0.09)).r;
    point += (vec2(nx, ny) - 0.5) * ${a} * 0.22;
  }
  float radius = ${s} * mix(uIdleScale, 1.0, ${i});
  float taper = uTaper * mix(uTaperIdle, uTaperFast, ${i});
  float span = max(${o} * float(${c} - 1), 1.0);
  float ceiling = uThreshold + uEdge;
  float trail = 0.0;
  for (int i = 0; i < ${c} - 1; i++) {
    if (float(i) >= span) break;
    float weight = pow(1.0 - float(i) / span, taper);
    if (weight <= trail) break;
    vec2 a = vec2(${t}[i].x * uAspect, ${t}[i].y);
    vec2 b = vec2(${t}[i + 1].x * uAspect, ${t}[i + 1].y);
    float r = radius * weight;
    trail = max(trail, weight * smoothstep(r, r * 0.35, revealSegment(point, a, b)));
    if (trail >= ceiling) break;
  }
  return smoothstep(uThreshold - uEdge, uThreshold + uEdge, trail) * gate;
}
`,je=e=>`
uniform vec2 uTrail[${e}];
uniform vec2 uTrailMin;
uniform vec2 uTrailMax;
uniform float uPace;
uniform vec2 uSweep[${e}];
uniform vec2 uSweepMin;
uniform vec2 uSweepMax;
uniform float uSweepPace;
uniform float uSweepWarp;
uniform float uSweepLength;
uniform float uSweepRadius;
uniform float uAspect;
uniform float uRadius;
uniform float uIdleScale;
uniform float uTaper;
uniform float uTaperIdle;
uniform float uTaperFast;
uniform float uLength;
uniform float uGateStart;
uniform float uGateWidth;
uniform float uWarpScale;
uniform float uTime;
uniform float uEdge;
uniform float uThreshold;
uniform float uWarp;
uniform float uRevealMix;
uniform sampler2D uNoiseTex;
float revealSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * h);
}
${V(`revealCursorTrail`,`uTrail`,`uTrailMin`,`uTrailMax`,`uPace`,`uWarp`,`uLength`,`uRadius`,e)}
${V(`revealSweepTrail`,`uSweep`,`uSweepMin`,`uSweepMax`,`uSweepPace`,`uSweepWarp`,`uSweepLength`,`uSweepRadius`,e)}
float revealTrail(vec2 ndc) {
  float cursor = revealCursorTrail(ndc);
  if (cursor >= 1.0) return 1.0;
  return max(cursor, revealSweepTrail(ndc));
}
`,Me=`
varying float vHeight;
uniform float uMinY;
uniform float uRangeY;
void main() {
  vHeight = (position.y - uMinY) / max(uRangeY, 0.0001);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ne=`
varying float vHeight;
uniform float uTime;
uniform float uPeriod;
uniform float uStagger;
uniform float uOpacity;
uniform float uWidth;
uniform float uLightness;
uniform float uRevealMix;
uniform vec3 uColor;
${Ae}
void main() {
  float width = max(uWidth, 0.0001);
  float period = max(uPeriod, 0.0001);
  float stagger = max(uStagger, 0.0001);
  float start = 1.0 + width * 3.0;
  float travel = 1.0 + width * 6.0;
  float wave = 0.0;
  for (int i = 0; i < ${L}; i++) {
    float age = mod(uTime, stagger) + float(i) * stagger;
    if (age > period) break;
    float centre = start - (age / period) * travel;
    float d = (vHeight - centre) / width;
    wave = max(wave, exp(-d * d));
  }
  vec3 stroke = mix(uColor, vec3(1.0), uLightness);
  gl_FragColor = vec4(sceneGrade(stroke), wave * uOpacity * uRevealMix);
}`,Pe=`
varying vec4 vClip;
void main() {
  vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vClip = clip;
  gl_Position = clip;
}`,Fe=e=>`
varying vec4 vClip;
uniform vec3 uBackground;
uniform vec3 uLineColor;
uniform vec3 uRevealColor;
uniform vec3 uRevealColorAlt;
uniform float uLineOpacity;
uniform float uRevealOpacity;
${je(e)}
${D}
${Ae}
void main() {
  vec2 ndc = vClip.xy / vClip.w;
  float level;
  float line = contourLines(ndc, uAspect, uTime * 0.28, 3.8, 2.5, 0.18, 1.15, level);
  vec3 color = mix(uBackground, uLineColor, line * uLineOpacity * uRevealMix);
  vec3 shade = mix(uRevealColor, uRevealColorAlt, mod(floor(level + 0.5), 2.0));
  if (uRevealOpacity > 0.001) color = mix(color, shade, revealTrail(ndc) * uRevealMix * uRevealOpacity);
  gl_FragColor = vec4(color, 1.0);
  #include <colorspace_fragment>
  gl_FragColor.rgb = sceneGrade(gl_FragColor.rgb);
}`,Ie=`
uniform float uExtend;
varying vec2 vUv;
void main() {
  vUv = vec2(uv.x, 1.0 - (1.0 - uv.y) * (1.0 + uExtend));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Le=`
uniform sampler2D uDiffuse;
uniform sampler2D uDepth;
uniform sampler2D uAlpha;
uniform sampler2D uNormal;
uniform vec2 uParallax;
uniform float uReveal;
uniform float uDepthScale;
uniform float uRelight;
varying vec2 vUv;
${Ae}
void main() {
  float depth = texture2D(uDepth, vUv).r;
  vec2 uv = vUv + uParallax * (depth - 0.5) * uDepthScale;
  vec4 color = texture2D(uDiffuse, uv);
  float alpha = texture2D(uAlpha, uv).r;
  vec3 normal = normalize(texture2D(uNormal, uv).rgb * 2.0 - 1.0);
  vec3 lightDir = normalize(vec3(uParallax * 1.6, 1.0));
  float lambert = max(dot(normal, lightDir), 0.0) - 0.72;
  gl_FragColor = vec4(clamp(color.rgb * (1.0 + lambert * uRelight), 0.0, 1.0), alpha * uReveal);
  #include <colorspace_fragment>
  gl_FragColor.rgb = sceneGrade(gl_FragColor.rgb);
}`;function Re({maps:e,helmetSrc:t,noiseSrc:n,environmentSrc:a,zoom:c,onFailed:l,className:f}){let h=(0,k.useRef)(null),v=(0,k.useRef)(c),ne=(0,k.useRef)(l);return(0,k.useEffect)(()=>{v.current=c,ne.current=l}),(0,k.useEffect)(()=>{let r=h.current,c=r.parentElement,l=r.closest(`section`)??c,f=!1,y=he(),b=()=>{f||(y(),O.markReady(),ne.current?.())},x,w=Oe();try{x=new ie({canvas:r,alpha:!1,antialias:w.antialias,stencil:!1,powerPreference:w.mobile?`default`:`high-performance`})}catch{b();return}let se=me();r.addEventListener(`webglcontextlost`,b);let T=window.setTimeout(()=>{V.ready||b()},2e4);x.toneMapping=4;let E=new d,D=new s(xe,1,.1,50);D.position.set(0,Se,B.cameraZ);let k=new ae,A=new ae,j=new ae;A.add(j),k.add(A),E.add(k);let M={...B},N=w.samples,P=Array.from({length:N},()=>new re(R.x,-R.y)),F=Array.from({length:N},()=>new re(z[0].x,-z[0].y)),L=(e,t)=>t*be*e,V={pointer:{...R},smoothed:{...R},last:{...R},seen:!1,tilt:L(R.y,B.helmetAmpX),yaw:L(R.x,B.helmetAmpY),pace:0,sweep:{...z[0]},sweepSmoothed:{...z[0]},sweepLast:{...z[0]},sweepPace:0,sweepCycle:0,readyAt:-1,intro:0,riseAt:-1,rising:!1,ready:!1,settled:!1,start:-1,width:1,height:1,aspect:1,zoom:-1},Re=()=>{V.pointer={...R},V.smoothed={...R},V.last={...R},V.tilt=L(R.y,M.helmetAmpX),V.yaw=L(R.x,M.helmetAmpY),V.seen=!1};w.pointer||Re();let H={uGrey:{value:0},uDim:{value:1},uLift:{value:new C},uLiftMix:{value:0}},ze=(e,t)=>new re(e,t),U={uTrail:{value:P},uTrailMin:{value:ze(-1e3,-1e3)},uTrailMax:{value:ze(1e3,1e3)},uSweep:{value:F},uSweepMin:{value:ze(-1e3,-1e3)},uSweepMax:{value:ze(1e3,1e3)},uSweepPace:{value:0},uSweepWarp:{value:M.sweepWarp},uSweepLength:{value:M.sweepLength},uSweepRadius:{value:M.sweepRadius},uAspect:{value:1},uRadius:{value:M.trailRadius},uIdleScale:{value:M.trailIdleScale},uTaper:{value:M.trailTaper},uTaperIdle:{value:M.trailTaperIdle},uTaperFast:{value:M.trailTaperFast},uLength:{value:M.trailLength},uPace:{value:0},uGateStart:{value:M.paceThreshold},uGateWidth:{value:M.paceRamp},uWarpScale:{value:M.revealWarpScale},uTime:{value:0},uThreshold:{value:M.revealThreshold},uEdge:{value:M.revealEdge},uWarp:{value:M.revealWarp},uRevealMix:{value:0},uNoiseTex:{value:null}},W={background:new g,line:new g,outline:new g,reveal:new g,revealAlt:new g},Be=()=>{let e=(e,t)=>e.setRGB(...pe(c,t),S);e(W.background,`--background`),e(W.line,`--contour`),e(W.outline,`--scene-outline`),e(W.reveal,`--scene-reveal`),e(W.revealAlt,`--scene-reveal-alt`),H.uLift.value.set(...pe(c,`--scene-lift`)),x.setClearColor(W.background),V.settled=!1};Be();let G=null,K=null,q=null,J=0,Y=[],Ve=()=>V.width>=880||V.aspect<1.2?1:Math.max(.9,Math.min(1,V.aspect/we)),He=()=>{Object.assign(M,B);let e=ke(V.width,V.height);if(e&&V.height>0){let t=e.height/V.height,n=2*B.cameraZ*Math.tan(xe*Math.PI/360);M.subjectScale=B.subjectScale*t,M.subjectY=Se+(B.subjectY-Se)*t+(V.height/2-(e.top+e.height/2))*n/V.height}V.width<880&&(M.bgRevealOpacity=0),matchMedia(`(hover: none)`).matches&&(M.autoSweepAmount=.76),V.width<640&&Object.assign(M,{sweepRadius:.95,sweepWarp:.18,autoSweepAmount:.55}),w.reveal||(M.autoSweepAmount=0),V.settled=!1},Ue=()=>{let e=Math.max(1,c.clientWidth),t=Math.max(1,c.clientHeight);V.width=e,V.height=t,V.aspect=e/t,x.setPixelRatio(Math.min(devicePixelRatio,w.maxDpr)*se.scale()),x.setSize(e,t,!1),D.aspect=V.aspect,D.updateProjectionMatrix(),U.uAspect.value=V.aspect,He()},We=(e,t,n,r,i,a)=>{let o=Math.min(e.length,Math.ceil(t*(N-1))+1),s=r+n*.22+.05,c=1/0,l=1/0,u=-1/0,d=-1/0;for(let t=0;t<o;t++){let n=e[t].x*V.aspect,r=e[t].y;c=Math.min(c,n),u=Math.max(u,n),l=Math.min(l,r),d=Math.max(d,r)}i.set(c-s,l-s),a.set(u+s,d+s)},Ge=()=>{let e=z[0].x*M.autoSweepAmount,t=z[0].y*M.autoSweepAmount;V.sweep={x:e,y:t},V.sweepSmoothed={x:e,y:t},V.sweepLast={x:e,y:t},V.sweepPace=0,F.forEach(n=>n.set(e,-t))},Ke=e=>{if(w.freeze||M.riseDistance===0)return 0;let t=1;if(V.rising){V.riseAt<0&&(V.riseAt=e);let n=Math.min(1,(e-V.riseAt)/M.riseDuration);t=(1-n)*(1-n)}return t<=0?0:t*M.riseDistance*(2*M.cameraZ*Math.tan(xe*Math.PI/360)/V.height)},qe=()=>{let e=v.current?.get()??0;if(e===V.zoom)return;V.zoom=e;let t=De(0,.42,e);H.uGrey.value=De(.08,.42,e),H.uDim.value=1-.18*t,H.uLiftMix.value=t*.85,V.settled=!1},Je=e=>{V.start<0&&(V.start=e);let t=(e-V.start)/1e3;w.freeze&&J>.995&&V.intro>=1&&(V.settled=!0);let n=M.autoSweepAmount>0&&!w.freeze&&V.intro>=1;if(n){let e=t%M.autoSweepPeriod;e<V.sweepCycle&&Ge(),V.sweepCycle=e;let n=Math.max(M.autoSweepStroke,.05),r=Math.floor(e/n);if(r<z.length-1){let t=Math.min(1,(e-r*n)/n),i=1-(1-t)*(1-t),a=z[r],o=z[r+1];V.sweep.x=(a.x+(o.x-a.x)*i)*M.autoSweepAmount,V.sweep.y=(a.y+(o.y-a.y)*i)*M.autoSweepAmount}}V.sweepSmoothed.x+=(V.sweep.x-V.sweepSmoothed.x)*M.pointerLerp,V.sweepSmoothed.y+=(V.sweep.y-V.sweepSmoothed.y)*M.pointerLerp;let r=Math.hypot(V.sweepSmoothed.x-V.sweepLast.x,V.sweepSmoothed.y-V.sweepLast.y),i=n?Math.min(1,r/M.pacePeak):0;V.sweepPace+=(i-V.sweepPace)*(i>V.sweepPace?M.paceAttack:M.paceRelease),V.sweepLast={...V.sweepSmoothed};let a=F.pop();if(a.set(V.sweepSmoothed.x,-V.sweepSmoothed.y),F.unshift(a),V.smoothed.x+=(V.pointer.x-V.smoothed.x)*M.pointerLerp,V.smoothed.y+=(V.pointer.y-V.smoothed.y)*M.pointerLerp,V.ready&&(V.readyAt<0&&(V.readyAt=t),V.intro=w.freeze?1:Math.min(1,(t-V.readyAt)/M.introDuration)),D.position.z=M.cameraZ,k.scale.setScalar(M.subjectScale*Ve()),k.position.x=V.smoothed.x*M.subjectParallax,k.position.y=M.subjectY-V.smoothed.y*M.subjectParallax-Ke(t),G){let e=G.material.uniforms;e.uParallax.value.set(V.smoothed.x,-V.smoothed.y),e.uReveal.value=J,e.uDepthScale.value=M.headParallax,e.uRelight.value=M.headRelight,G.scale.setScalar(M.headScale),G.position.y=-.55+M.headY-I*ye*M.headScale/2}V.tilt+=(L(V.smoothed.y,M.helmetAmpX)-V.tilt)*M.pointerLerp,V.yaw+=(L(V.smoothed.x,M.helmetAmpY)-V.yaw)*M.pointerLerp,j.rotation.set(V.tilt,V.yaw,0),A.position.set(V.smoothed.x*M.helmetFollow,M.helmetY-V.smoothed.y*M.helmetFollow*.8,0),A.scale.setScalar(M.helmetScale);let o=Math.hypot(V.smoothed.x-V.last.x,V.smoothed.y-V.last.y);if(w.pointer){let e=Math.min(1,o/M.pacePeak);V.pace+=(e-V.pace)*(e>V.pace?M.paceAttack:M.paceRelease)}else !n&&V.intro>=1&&w.reveal&&(V.pace=1);V.last={...V.smoothed};let s=P.pop();if(s.set(V.smoothed.x,-V.smoothed.y),P.unshift(s),U.uRadius.value=M.trailRadius,U.uPace.value=V.pace,U.uTime.value=t*M.revealSpeed,U.uRevealMix.value=J,U.uSweepPace.value=V.sweepPace,U.uSweepWarp.value=M.sweepWarp,U.uSweepRadius.value=M.sweepRadius,We(P,M.trailLength,M.revealWarp,M.trailRadius,U.uTrailMin.value,U.uTrailMax.value),We(F,M.sweepLength,M.sweepWarp,M.sweepRadius,U.uSweepMin.value,U.uSweepMax.value),K){let e=2*(D.position.z-Ce)*Math.tan(D.fov*Math.PI/360)*1.06;K.scale.set(e*V.aspect,e,1),K.material.uniforms.uRevealOpacity.value=M.bgRevealOpacity}if(q){let e=q.material.uniforms;e.uTime.value=t;let n=Math.max(1-M.burnStart,1e-4),r=Ee((V.intro-M.burnStart)/n);e.uRevealMix.value=J*r*r*(3-2*r)}x.render(E,D)},Ye=new ee,X=(e,t=!1)=>Ye.loadAsync(i(e)).then(e=>(t&&(e.colorSpace=S),e.minFilter=te,e.generateMipmaps=!0,Y.push(e),e)),Xe=new ge().setDecoderPath(ve),Ze=new de().setDRACOLoader(Xe),Qe=(e,t,n,r)=>{let i=new p({vertexShader:Ie,fragmentShader:Le,transparent:!0,uniforms:{...H,uDiffuse:{value:e},uDepth:{value:t},uAlpha:{value:n},uNormal:{value:r},uParallax:{value:new re},uReveal:{value:0},uDepthScale:{value:B.headParallax},uRelight:{value:B.headRelight},uExtend:{value:ye}}});G=new m(new oe(I,I*(1+ye)),i),G.position.set(0,-.55,0),k.add(G),Y.push(i,G.geometry)},$e=e=>{e.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.material;n.side=0,n.transparent=!0,n.depthWrite=!1,n.envMapIntensity=1.3,n.onBeforeCompile=e=>{Object.assign(e.uniforms,U,H),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec4 vRevealClip;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vRevealClip = gl_Position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec4 vRevealClip;\n${je(N)}\n${Ae}`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
diffuseColor.a *= revealTrail(vRevealClip.xy / vRevealClip.w) * uRevealMix;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
gl_FragColor.rgb = sceneGrade(gl_FragColor.rgb);`)},t.renderOrder=1,n.color.setScalar(1),Y.push(n,t.geometry)});let t=new le().setFromObject(e);e.scale.setScalar(I*.56/t.getSize(new C).y),t.setFromObject(e),e.position.sub(t.getCenter(new C)),j.position.copy(Te),j.add(e),A.updateMatrixWorld(!0);let n=j.matrixWorld.clone().invert(),r=[];e.traverse(e=>{let t=e;if(!t.isMesh||!t.visible)return;let i=t.geometry.clone();i.applyMatrix4(new o().multiplyMatrices(n,t.matrixWorld)),Object.keys(i.attributes).forEach(e=>e!==`position`&&i.deleteAttribute(e)),r.push(i)});let i=r.length?ue(r,!1):null;if(r.forEach(e=>e.dispose()),!i)return;i.computeBoundingBox();let a=i.boundingBox,s=new p({vertexShader:Me,fragmentShader:Ne,wireframe:!0,transparent:!0,depthWrite:!1,uniforms:{...H,uTime:{value:0},uPeriod:{value:B.outlinePeriod},uStagger:{value:B.outlineStagger},uOpacity:{value:B.outlineOpacity},uWidth:{value:B.outlineWidth},uLightness:{value:B.outlineLightness},uRevealMix:{value:0},uColor:{value:W.outline},uMinY:{value:a.min.y},uRangeY:{value:a.max.y-a.min.y}}});q=new m(i,s),q.renderOrder=3,q.visible=w.outline,j.add(q),Y.push(s,i)},et=()=>{let e=new p({vertexShader:Pe,fragmentShader:Fe(N),depthWrite:!1,uniforms:{...U,...H,uBackground:{value:W.background},uLineColor:{value:W.line},uRevealColor:{value:W.reveal},uRevealColorAlt:{value:W.revealAlt},uLineOpacity:{value:B.bgLineOpacity},uRevealOpacity:{value:B.bgRevealOpacity}}});K=new m(new oe(1,1),e),K.position.z=Ce,K.renderOrder=-1,E.add(K),Y.push(e,K.geometry)},tt=async()=>{try{let[r,o,s,c,l,d,p]=await Promise.all([new _e().loadAsync(i(a)),X(e.diffuse,!0),X(e.depth),X(e.alpha),X(e.normal),X(n),t?Ze.loadAsync(i(t)):Promise.resolve(null)]);if(f)return;let m=new ce(x),h=m.fromEquirectangular(r).texture;if(E.environment=h,r.dispose(),m.dispose(),Y.push(h),d.wrapS=d.wrapT=_,U.uNoiseTex.value=d,Qe(o,s,c,l),p&&$e(p.scene),et(),J=1,Y.forEach(e=>e instanceof u&&x.initTexture(e)),await x.compileAsync(E,D),f)return;Je(performance.now()),V.ready=!0,O.isClaimed()||(V.rising=!0),y(),O.markReady(),$()}catch{b()}},nt=e=>{let t=e.clientX/innerWidth*2-1,n=e.clientY/innerHeight*2-1;V.pointer={x:t,y:n},V.seen||(V.seen=!0,V.smoothed={x:t,y:n},V.last={x:t,y:n},V.tilt=L(n,M.helmetAmpX),V.yaw=L(t,M.helmetAmpY))},rt=!1,it=e=>{e&&!rt&&addEventListener(`pointermove`,nt,{passive:!0}),!e&&rt&&removeEventListener(`pointermove`,nt),rt=e};it(w.pointer);let at=()=>{let e=Oe(),t=w.pointer;w={...e,antialias:w.antialias,samples:w.samples},q&&(q.visible=w.outline),w.pointer?t||(V.seen=!1):Re(),w.freeze||(V.settled=!1),it(w.pointer),Ue()},ot=0,st=()=>{ot=l.getBoundingClientRect().top+scrollY},ct=c.clientWidth;Ue(),st();let lt=new ResizeObserver(()=>{let e=c.clientWidth;st(),e===ct?w.coarse||Ue():(ct=e,at()),$()});lt.observe(c);let ut=matchMedia(`(hover: none) and (pointer: coarse)`);ut.addEventListener(`change`,at);let Z=0,dt=!0,ft=10,pt=-1,Q=-1,mt=()=>dt?!0:ft>0?(--ft,!0):!1,ht=e=>{if(Z=0,!(f||document.hidden)&&mt()){if(Z=requestAnimationFrame(ht),scrollY-ot>innerHeight*1.15&&Math.min(.42,v.current?.get()??0)===Math.min(.42,V.zoom)){Q=-1;return}e-pt<=w.frameInterval||(pt=e,qe(),!(!V.ready||V.settled)&&(Q>0&&se.measure(e-Q)&&Ue(),Q=e,Je(e)))}},$=()=>{!Z&&!f&&!document.hidden&&V.ready&&(Z=requestAnimationFrame(ht))},gt=new IntersectionObserver(([e])=>{dt=e.isIntersecting,dt&&(ft=10,$())});gt.observe(c);let _t=()=>{Q=-1,$()};document.addEventListener(`visibilitychange`,_t);let vt=O.onReveal(()=>{V.rising=!0,$()}),yt=fe(c,Be),bt=()=>$();return addEventListener(`scroll`,bt,{passive:!0}),tt(),()=>{f=!0,y(),window.clearTimeout(T),r.removeEventListener(`webglcontextlost`,b),cancelAnimationFrame(Z),vt(),yt(),lt.disconnect(),gt.disconnect(),ut.removeEventListener(`change`,at),document.removeEventListener(`visibilitychange`,_t),removeEventListener(`scroll`,bt),it(!1),Y.forEach(e=>e.dispose()),Xe.dispose(),x.dispose()}},[e.diffuse,e.depth,e.alpha,e.normal,t,n,a]),(0,F.jsx)(`canvas`,{ref:h,"aria-hidden":`true`,className:r(`absolute inset-0 block size-full`,f)})}export{Re as n,ge as r,ve as t};