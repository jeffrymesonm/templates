import{A as e,Gt as t,J as n,M as r,Mn as i,Nn as a,Ot as o,Rt as s,S as c,Tn as l,Tt as u,U as d,X as f,_t as p,cr as m,d as h,ht as g,j as _,lr as v,pr as y,qt as ee,rr as b,ur as te,wn as ne,xn as x}from"./three.module-BtOiv6AT.js";import{n as S,t as re}from"./BufferGeometryUtils-BCwTizHk.js";import{t as ie}from"./cameraRig-DZYJJrwO.js";var C=[],w={waterfront:{params:{glow:.75,haze:.8,flare:.35,bloom:.6},colors:{"--skyline-sky":`#5f8fc6`,"--skyline-haze":`#dfe2e4`,"--skyline-glow":`#fff1d8`,"--skyline-cloud":`#f4f3f0`,"--skyline-glass":`#3a5372`,"--skyline-water":`#25465e`}}},T=null,E=()=>T??=ae();function ae(){let e=be,t=e.slice(e.indexOf(`float box(`),e.indexOf(`void main(){`)),n=e.slice(e.indexOf(`  vec3 n = normalize(vN);`),e.indexOf(`  vec3 col = shade(`)),r=`
uniform float uFogK, uFogMax;
vec3 fogged(vec3 col, vec3 v, float dist){
  vec3 air = mix(horizonCol(-v), mix(uHaze, uSky, .25), .25);
  return mix(col, air, clamp(1. - exp(-max(dist - uFog * .8, 0.) * uFogK * uHazeK), 0., uFogMax));
}`;return{BUILD_VERTEX:`
attribute float aKind, aBase;
uniform float uMirror, uWaterY;
varying vec3 vObj, vWorld, vN, vON, vClipP;
varying vec2 vUv;
varying float vKind, vBase;
void main(){
  vObj = position;
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.);
  vClipP = w.xyz;
  vec3 nn = mat3(modelMatrix) * normal;
  if (uMirror < 0.) { w.y = 2. * uWaterY - w.y; nn.y = -nn.y; }
  vWorld = w.xyz;
  vN = nn;
  vON = normal;
  vKind = aKind;
  vBase = aBase;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,BUILD_FRAGMENT:`
${N}
uniform float uFloor, uVis, uCloudY, uEnvLod, uFog, uPier, uWash, uWaterY, uClip;
uniform vec3 uBands, uGrass, uWater, uWin;
uniform sampler2D uEnv;
varying vec3 vObj, vWorld, vN, vON, vClipP;
varying vec2 vUv;
varying float vKind, vBase;
${r}
${t}
void main(){
  if (vClipP.y < uClip) discard;
${n}

  if (k > 10.5) {
    vec3 wp = vClipP;
    float va = .5 + .25 * sin(wp.x * 2.3 + wp.z * 1.7 + wp.y * 3.1) + .25 * sin(wp.z * 3.7 - wp.x * 1.3 + wp.y * 2.3);
    alb = uGrass * mix(.5, 1.05, va) * mix(.7, 1.12, smoothstep(-.4, .9, n.y));
    F0 = vec3(.03);
    rough = .8;
    pn = normalize(n + vec3(sin(wp.y * 9. + wp.x * 7.), 0., cos(wp.y * 8. - wp.z * 7.)) * .25 * nfade(wp.y * 1.4, .2));
  }
  vec3 col = shade(alb, F0, rough, pn, v, L, ao) + uGlow * uGlowK * rim * .3;
  col = fogged(col, v, length(vWorld - cameraPosition));
  col = mix(col, mix(uCloud, horizonCol(-v), .35), smoothstep(uWaterY + uWash, uWaterY - .3, vClipP.y) * .45);
  gl_FragColor = vec4(min(col, vec3(1.)) + (hash(gl_FragCoord.xy) - .5) / 160., 1.);
}`,PLANE_VERTEX:`
varying vec3 vWorld;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,GROUND_FRAGMENT:`
${N}
uniform float uCloudY, uEnvLod, uFog, uGridA, uStreet, uRoofs, uFill, uLand;
uniform vec2 uBlock, uCoast;
uniform vec3 uGrass, uWater;
uniform sampler2D uEnv;
varying vec3 vWorld;
${r}
${t}
void main(){
  vec3 v = normalize(cameraPosition - vWorld);
  float dist = length(vWorld - cameraPosition);
  float c = cos(uGridA), s = sin(uGridA);
  vec2 q = vec2(vWorld.x * c - vWorld.z * s, vWorld.x * s + vWorld.z * c);
  vec2 g = q / uBlock;
  vec2 cell = floor(g);
  vec2 fw = fwidth(g);
  float fd = 1. - smoothstep(.1, .35, max(fw.x, fw.y));
  float road = max(lines(g.x, uStreet / uBlock.x), lines(g.y, uStreet / uBlock.y));
  float walk = max(lines(g.x, (uStreet + .7) / uBlock.x), lines(g.y, (uStreet + .7) / uBlock.y));
  vec2 rq = q / 2.7;
  vec2 rw = fwidth(rq);
  float rf = 1. - smoothstep(.12, .4, max(rw.x, rw.y));
  float rh = hash(floor(rq) + 1.7);
  vec3 roofs = mix(vec3(.52, .51, .5), mix(vec3(.36, .37, .4), vec3(.74, .71, .66), rh) * (1. - .3 * max(lines(rq.x, .05), lines(rq.y, .05))), rf);
  float far = uRoofs * smoothstep(uFill, uFill + 30., dist);
  float park = step(hash(cell + 7.3), .13) * far;
  vec3 block = mix(vec3(.64, .61, .56), roofs, far);
  block = mix(block, uGrass * mix(.85, 1.05, rh * rf + .5 * (1. - rf)), park);
  vec3 avg = mix(mix(vec3(.64, .61, .56), vec3(.53, .52, .5), far), uGrass * .95, .13 * far);
  block = mix(avg, block, fd);
  vec3 alb = mix(block, vec3(.7, .68, .64), walk);
  alb = mix(alb, vec3(.27, .28, .3), road);
  vec3 up = vec3(0., 1., 0.);
  vec3 L = normalize(vec3(uSun.x * 1.5, .5, uSun.z * -.1));
  vec3 col = alb * (envAt(up, uEnvLod) * .8 + uGlow * 2.4 * uGlowK * L.y * .32);
  if (uCoast.y > 0.) {
    float edge = vWorld.z - (uCoast.x + sin(vWorld.x * .013) * uCoast.y + sin(vWorld.x * .041 + 1.) * uCoast.y * .3);
    float sea = clamp(-edge / max(fwidth(edge), 1e-3) + .5, 0., 1.);
    if (uLand > .5 && sea < .01) discard;
    float F = .02 + .98 * pow(1. - max(v.y, 0.), 5.);
    vec3 R = reflect(-v, up);
    vec3 w = mix(uWater * (envAt(up, uEnvLod) * .7 + .1), skyCol(R), clamp(F * 1.2 + .1, 0., 1.));
    w += uGlow * uGlowK * pow(max(dot(R, uSun), 0.), 60.) * .6;
    vec3 beach = vec3(.78, .72, .6) * (envAt(up, uEnvLod) * .8 + uGlow * 2.4 * uGlowK * L.y * .32);
    col = mix(col, beach, clamp(1. - abs(edge + 2.) / max(fwidth(edge) * 2., 3.), 0., 1.) * (1. - uLand));
    col = mix(col, w, uLand > .5 ? 0. : sea);
  }
  col = fogged(col, v, dist);
  col = mix(col, horizonCol(-v), smoothstep(.03, .0, v.y));
  gl_FragColor = vec4(col + (hash(gl_FragCoord.xy) - .5) / 160., 1.);
}`,WATER_FRAGMENT:`
${N}
uniform float uCloudY, uEnvLod, uFog, uRipple;
uniform vec2 uRes;
uniform vec3 uWater;
uniform sampler2D uEnv, uRefl;
varying vec3 vWorld;
${r}
${t}
const vec3 WV[6] = vec3[6](vec3(9., .05, .3), vec3(5.3, .03, -.5), vec3(3.1, .018, 1.1), vec3(1.9, .01, -1.3), vec3(1.1, .006, .6), vec3(.6, .003, 2.));
void main(){
  vec3 v = normalize(cameraPosition - vWorld);
  float dist = length(vWorld - cameraPosition);
  vec2 p = vWorld.xz;
  vec2 fw = fwidth(p);
  float fp = max(fw.x, fw.y);
  vec2 gr = vec2(0.);
  for (int i = 0; i < 6; i++) {
    vec3 w = WV[i];
    float k = 6.2832 / w.x;
    vec2 d = vec2(cos(w.z), sin(w.z));
    float x = k * dot(d, p) - sqrt(9.8 * k) * .35 * uTime + float(i) * 1.7;
    gr += d * k * w.y * cos(x) * (1. - smoothstep(.12, .45, fp / w.x));
  }
  gr *= uRipple;
  vec3 n = normalize(vec3(-gr.x, 1., -gr.y));
  float F = .02 + .98 * pow(1. - max(dot(n, v), 0.), 5.);
  vec3 R = reflect(-v, n);
  vec2 suv = gl_FragCoord.xy / uRes;
  float sc = 1. / (1. + dist * .025);
  vec2 off = vec2(n.x * .6, n.z) * .05 * sc;
  float spread = .004 * sc + .002;
  vec4 r = texture2D(uRefl, suv + off) * .4 + texture2D(uRefl, suv + off + vec2(0., spread)) * .3 + texture2D(uRefl, suv + off - vec2(0., spread)) * .3;
  vec3 refl = skyCol(R) * (1. - r.a) + r.rgb;
  vec3 body = uWater * (envAt(vec3(0., 1., 0.), uEnvLod) * .6 + .12);
  vec3 col = mix(body, refl, clamp(F * 1.3 + .28, 0., 1.));
  float sd = max(dot(R, uSun), 0.);
  col += uGlow * uGlowK * (pow(sd, 400.) * 1.6 + pow(sd, 40.) * .18);
  col = fogged(col, v, dist);
  col = mix(col, horizonCol(-v), smoothstep(.03, .0, v.y));
  gl_FragColor = vec4(col + (hash(gl_FragCoord.xy) - .5) / 160., 1.);
}`,SKY_FRAGMENT:`
${N}
uniform vec3 uFloorC;
varying vec3 vRay;
void main(){
  vec3 d = normalize(vRay);
  vec3 c = skyCol(d);
  c = mix(c, uFloorC, smoothstep(0., -.2, d.y));
  gl_FragColor = vec4(c + (hash(gl_FragCoord.xy) - .5) / 160., 1.);
}`,COPY_FRAGMENT:`
uniform sampler2D uSrc;
varying vec2 vUv;
void main(){ gl_FragColor = vec4(texture2D(uSrc, vUv).rgb, 1.); }`}}var D=(e,t,n)=>[e*Math.cos(n)+t*Math.sin(n),-e*Math.sin(n)+t*Math.cos(n)],O=(e,t,n)=>D(e,t,-n),oe=(e,t,n,r)=>t<0&&Math.abs(e)<-t*j*n+r,se=(e,t,n,r,i=1.15,a=1)=>L(S(new f(e,a).scale(1,i,1).translate(t,n,r)),11),k=[0,0,0,7,7,2,6,0],A=(e,t,n,r,i,a,o,s)=>{let c=k[Math.floor(t()*k.length)];t()<.45&&e.push(R(a+.8,i,i+1.2+t()*1.6,t()<.5?7:2,n,o+.8,r)),e.push(R(a,i,i+s,c,n,o,r));let l=i+s;if(s>9&&t()<.4){let i=s*(.1+t()*.12);e.push(R(a*.72,l,l+i,c,n,o*.72,r)),l+=i,e.push(R(a*.72+.06,l,l+.12,3,n,o*.72+.06,r))}else e.push(R(a+.06,l,l+.12,3,n,o+.06,r))},ce=(e,t,n,r,i,a,o,s)=>{let c=Z,l=[];for(let s=-70;s<=70;s++)for(let u=-80;u<=-10;u++){let d=(s+.5)*12,f=(u+.5)*12,[p,m]=D(d,f,c),h=-m;if(!oe(p,m,1.2,20)||m>n-8+Math.sin(p*.013)*22||h>-n+r)continue;let g=Math.exp(-(((p/(h*j)-i)/a)**2));if(!(e()>.12+.88*g))for(let n=0;n<2;n++){if(e()<.3)continue;let r=2+e()*6+g*o*e()**2.2;A(l,e,d+(n-.5)*5.5,f+(e()-.5)*3,t+.3,2.6+e()*3,2+e()*3,r)}}for(let[n,r,i]of s){let[a,o]=O(n*r*j,-r,c);A(l,e,a,o,t+.3,6,6,i)}return l};function le(e){let t=-7.9,n=ce(Ce(11),t,-330,300,.42*e,.4,22,[[.4*e,380,46],[.56*e,410,34]]),[r,i]=O(-.8*470*j,-470,Z);return n.push(se(120,r,t-3,i,.12,3)),{grid:Z,field:n,floor:.24,water:t,ground:{y:t+.3,block:[12,12],street:1.4,roofs:1,fill:0,coast:[-330,22],land:!0},cam:{y:0,pitch:0,orbit:Q},sun:[1,.07],fog:[.0035,.88,44]}}function ue({scene:e,camera:r,small:d,colors:f,pointer:h,renderer:_}){let b=E(),x=le(d?.42:1);r.far=2400,r.updateProjectionMatrix();let S=new v(j*x.sun[0],de*x.sun[1],-1).normalize(),C={uTime:{value:0},uTan:{value:new m(1,1)},uSun:{value:S},uGlowK:{value:1},uHazeK:{value:1}},w=[],T=e=>(w.push(e),e),ae=T(new ee(2,2)),D=(e,t)=>{let n=new o(ae,e);return n.frustumCulled=!1,n.renderOrder=t,n},O=d?256:512,oe=T(new y(O,O/2,{type:n,depthBuffer:!1,generateMipmaps:!0,minFilter:p,magFilter:g,wrapS:l})),se=new v,k={uFogK:{value:x.fog[0]},uFogMax:{value:x.fog[1]},uFog:{value:x.fog[2]}},A={uEnv:{value:oe.texture},uEnvLod:{value:Math.log2(O)-2},...k},ce={value:x.water??-1e4},ue={value:1},M={value:-1e4},N=x.ground?.y??x.water??-40,F=new i,fe=D(T(new a({vertexShader:P,fragmentShader:b.SKY_FRAGMENT,depthTest:!1,depthWrite:!1,uniforms:{...f,...C,uFloorC:{value:se}}})),-1);F.add(fe);let me=new i,ye=new o(T(new ee(2,2,64,32)),T(new a({vertexShader:pe,fragmentShader:b.SKY_FRAGMENT,depthTest:!1,depthWrite:!1,uniforms:{...f,...C,uFloorC:{value:se}}})));ye.frustumCulled=!1,me.add(ye);let be=new t,Ce=e=>T(new a({vertexShader:b.BUILD_VERTEX,fragmentShader:b.BUILD_FRAGMENT,uniforms:{...f,...C,...A,uFloor:{value:e.floor},uBands:{value:new v(...e.bands??[99,99,.1])},uVis:{value:1},uCloudY:{value:N},uPier:{value:e.pier??0},uWash:{value:x.water===void 0?0:Math.min(e.wash??6,3)},uWaterY:ce,uMirror:ue,uClip:M}})),we=new i,I=T(new a({vertexShader:_e,fragmentShader:ve,depthTest:!1,depthWrite:!1,transparent:!0,blending:5,blendEquation:104,blendSrc:201,blendDst:201})),L=[];x.field.length&&((e,t,n,r,i)=>{T(e);let a=new o(e,t);a.frustumCulled=!1,a.position.set(n,0,r),a.rotation.y=i,F.add(a);let s=new o(e,I);s.frustumCulled=!1,s.position.copy(a.position),s.rotation.y=i,we.add(s),L.push(t)})(re(x.field,!1),Ce({floor:x.floor}),0,0,x.grid);let R=x.ground?T(new a({vertexShader:b.PLANE_VERTEX,fragmentShader:b.GROUND_FRAGMENT,uniforms:{...f,...C,...A,uCloudY:{value:x.ground.y},uGridA:{value:x.grid},uBlock:{value:new m(...x.ground.block)},uStreet:{value:x.ground.street},uRoofs:{value:x.ground.roofs},uFill:{value:x.ground.fill},uCoast:{value:new m(...x.ground.coast??[0,0])},uLand:{value:+!!x.ground.land}}})):null,Te=T(new ee(6e3,6e3).rotateX(-Math.PI/2)),z=null;R&&x.ground&&(z=new o(Te,R),z.frustumCulled=!1,z.position.y=x.ground.y,F.add(z));let Ee={type:n,minFilter:g,magFilter:g},B=T(new y(2,2,{...Ee,depthBuffer:!0,samples:4})),V=T(new y(2,2,{...Ee,depthBuffer:!0})),H=new m(2,2),U=null;x.water!==void 0&&(U=new o(Te,T(new a({vertexShader:b.PLANE_VERTEX,fragmentShader:b.WATER_FRAGMENT,uniforms:{...f,...C,...A,uCloudY:{value:x.water},uRefl:{value:V.texture},uRes:{value:H},uRipple:{value:.7}}}))),U.frustumCulled=!1,U.position.y=x.water,F.add(U));let W=T(new y(2,2,{type:n,format:ne,depthBuffer:!1,minFilter:s,magFilter:s}));e.add(D(T(new a({vertexShader:P,fragmentShader:b.COPY_FRAGMENT,depthTest:!1,depthWrite:!1,blending:0,uniforms:{uSrc:{value:B.texture},uTan:C.uTan}})),0));let G={type:n,depthBuffer:!1,minFilter:g,magFilter:g},K=T(new y(2,2,G)),q=T(new y(2,2,G)),J=(e,t)=>{let n=T(new a({vertexShader:P,fragmentShader:he,depthTest:!1,depthWrite:!1,blending:0,uniforms:{uSrc:{value:e},uDir:{value:new m},uThresh:{value:t},uTan:C.uTan}})),r=new i;return r.add(D(n,0)),{s:r,dir:n.uniforms.uDir.value}},Y=J(B.texture,.9),De=J(K.texture,-1),X=T(new a({vertexShader:P,fragmentShader:ge,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,uniforms:{...f,...C,uBloom:{value:q.texture},uBloomK:{value:1}}}));e.add(D(X,998));let Z=ke.map(()=>new te),Oe=T(new a({vertexShader:xe,fragmentShader:Se,transparent:!0,blending:2,depthTest:!1,depthWrite:!1,uniforms:{uDisc:{value:Z},uAspect:{value:1},uFlare:{value:1},uGlow:f.uGlow}}));e.add(D(Oe,999));let Q=new v,$=new m,Ae=new c,je=e=>1-(1-u.clamp(e,0,1))**3,Me=``,Ne=ie(r,h,{base:new v(0,x.cam.y,0),focus:new v(0,x.cam.y,-x.cam.orbit),pitch:x.cam.pitch});return{hoverMask:W.texture,update(e){let{time:t,params:n,intro:i}=e;Ne(e);let a=Math.tan(u.degToRad(r.fov/2));C.uTan.value.set(a*r.aspect,a),C.uTime.value=t,C.uGlowK.value=n.glow,C.uHazeK.value=n.haze;let o=f;se.copy(o.uWater.value).multiplyScalar(.9),_.getDrawingBufferSize($);let s=Math.max(2,$.x),c=Math.max(2,$.y);if(B.width!==s||B.height!==c){B.setSize(s,c),V.setSize(Math.max(2,Math.round(s/2)),Math.max(2,Math.round(c/2))),W.setSize(Math.max(2,Math.round(s/2)),Math.max(2,Math.round(c/2))),H.set(s,c);let e=Math.max(2,Math.round(s/8)),t=Math.max(2,Math.round(c/8));K.setSize(e,t),q.setSize(e,t),Y.dir.set(1.6/e,0),De.dir.set(0,1.6/t)}let l=_.getRenderTarget(),d=[n.glow,n.haze,...Object.values(f).flatMap(e=>e.value.toArray())].join();d!==Me&&(Me=d,_.setRenderTarget(oe),_.render(me,be)),_.getClearColor(Ae);let p=_.getClearAlpha();if(_.setClearColor(0,0),_.setRenderTarget(W),_.clear(),_.render(we,r),U){ue.value=-1,M.value=ce.value,U.visible=fe.visible=!1,z&&(z.visible=!1);for(let e of L)e.side=1;_.setRenderTarget(V),_.clear(),_.render(F,r);for(let e of L)e.side=0;ue.value=1,M.value=-1e4,U.visible=fe.visible=!0,z&&(z.visible=!0)}_.setClearColor(Ae,p),_.setRenderTarget(B),_.clear(),_.render(F,r),_.setRenderTarget(K),_.render(Y.s,r),_.setRenderTarget(q),_.render(De.s,r),_.setRenderTarget(l),X.uniforms.uBloomK.value=n.bloom,Q.copy(r.position).addScaledVector(S,100).project(r);let m=Q.z>1;ke.forEach(([e,t,n,r,i],a)=>Z[a].set(e+(Q.x-x.sun[0])*i,t+(Q.y-x.sun[1])*i,n,m?0:r)),Oe.uniforms.uAspect.value=r.aspect,Oe.uniforms.uFlare.value=n.flare*(.85+.15*Math.sin(t*.3))*je(i/2.5-.3)},dispose(){for(let e of w)e.dispose()}}}var de=Math.tan(u.degToRad(19)),j=de*1.84,M=48,N=`
uniform vec3 uSky, uHaze, uGlow, uCloud, uShade, uGlass, uSun;
uniform float uTime, uGlowK, uHazeK;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float breathe(){ return 1. + .06 * sin(uTime * .23) + .03 * sin(uTime * .61 + 1.3); }
vec3 horizonCol(vec3 d){
  vec2 f = normalize(d.xz + vec2(0., -1e-4)), s = normalize(uSun.xz);
  float side = pow(max(dot(f, s), 0.), 9.) * smoothstep(.3, -.02, d.y);
  return mix(uHaze, uGlow, clamp((side * 1.15 + pow(max(dot(f, s), 0.), 2.) * .25 * smoothstep(.4, 0., d.y)) * uGlowK * breathe(), 0., 1.));
}
vec3 skyCol(vec3 d){
  d = normalize(d);
  vec3 c = mix(horizonCol(d), uSky, smoothstep(-.02, .3, d.y));
  float g = max(dot(d, uSun), 0.);
  c = mix(c, mix(uHaze, vec3(.86), .4), clamp(pow(g, 3.) * .55 * uGlowK, 0., 1.));
  c = mix(c, mix(uHaze, uGlow, .6) * 1.04, clamp((pow(g, 16.) * .55 + pow(g, 40.) * .5) * uGlowK * breathe(), 0., 1.));
  return c;
}`,P=`
uniform vec2 uTan;
varying vec3 vRay;
varying vec2 vUv;
void main(){
  vUv = uv;
  vRay = vec3(position.x * uTan.x, position.y * uTan.y, -1.) * mat3(viewMatrix);
  gl_Position = vec4(position.xy, 1., 1.);
}`,F=`
${N}
varying vec3 vRay;
void main(){
  vec3 d = normalize(vRay);
  gl_FragColor = vec4(skyCol(d) + (hash(gl_FragCoord.xy) - .5) / 160., 1.);
}`,fe=`
${N}
uniform sampler3D uNoise;
uniform sampler2D uDist;
uniform vec2 uTan;
uniform float uDeck, uCover, uSigma;
varying vec3 vRay;
varying vec2 vUv;
const float YB = -40., YT = 2.;
float density(vec3 p, bool detail, out float h){
  h = (p.y + 14. - uDeck) / 16.;
  float an = p.x / max(-p.z, 4.) / max(uTan.x, ${j.toFixed(4)});
  float side = smoothstep(.62, 1.1, abs(an)) * (an < 0. ? 1. : .8);
  vec3 q = p + vec3(uTime * .45, 0., uTime * .12);
  float cov = texture(uNoise, vec3(q.xz * .006 + vec2(.41, .23), .37)).r;
  float z = -p.z;
  cov = clamp((cov - .45) * .5 + .7 + uCover + side * .25 + smoothstep(46., 22., z) * .2 * smoothstep(.55, .1, abs(an)) - smoothstep(60., 200., z) * .22, 0., 1.) * smoothstep(300., 150., z);
  float heap = texture(uNoise, vec3(q.xz * .028, .61)).r;
  float top = (.3 + .5 * cov + (heap - .5) * .55) * .8125 + side * .2;
  float prof = smoothstep(top, top - .22, h);
  float c = cov * prof;
  if (c < .01) return -1.;
  float shape = texture(uNoise, q * vec3(.015, .03, .017) + vec3(sin(uTime * .021) * .05, uTime * .0035, cos(uTime * .017) * .03)).r;
  float dd = max(clamp((shape - (1. - c)) / c, 0., 1.), smoothstep(top - .15, top - .45, h) * 1.2);
  if (detail && dd > 0. && dd < .7) {
    float det = texture(uNoise, q * .045 + vec3(uTime * .005, uTime * .006, 0.)).g;
    det = mix(1. - det, det, smoothstep(.1, .5, h));
    dd = clamp((dd - det * .08) / (1. - det * .08), 0., 1.);
  }
  return dd;
}
float hg(float c, float g){ float g2 = g * g; return (1. - g2) / pow(1. + g2 - 2. * g * c, 1.5); }
void main(){
  vec3 o = cameraPosition, d = normalize(vRay);
  float yt = YT + uDeck, yb = YB + uDeck;
  float dy = abs(d.y) < 1e-4 ? 1e-4 : d.y;
  float ta = (yt - o.y) / dy, tb = (yb - o.y) / dy;
  float t0 = max(min(ta, tb), 0.);
  float inv = texture2D(uDist, vUv).r;
  float t1 = min(min(max(ta, tb), 280.), inv > 0. ? 1. / inv : 1e4);
  if (t0 >= t1) { gl_FragColor = vec4(0.); return; }
  vec3 L = normalize(uSun + vec3(0., .55, 0.));
  float ct = dot(d, L);
  float phase = mix(hg(ct, .5), hg(ct, -.2), .35);
  vec3 sunC = uGlow * 1.05;
  vec3 ambTop = mix(uSky, vec3(1.), .78);
  vec3 col = vec3(0.);
  float T = 1.;
  float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(.06711056, .00583715))));
  float t = t0 + clamp(t0 * .025, .15, 4.) * ign;
  for (int i = 0; i < STEPS; i++) {
    if (t > t1 || T < .015) break;
    float dt = clamp(t * .025, .15, 4.);
    vec3 p = o + d * t;
    float h;
    float dd = density(p, true, h);
    if (dd > .002) {
      float od = 0., ls = .45, hh;
      vec3 lp = p;
      for (int j = 0; j < LSTEPS; j++) { lp += L * ls; od += max(density(lp, false, hh), 0.) * ls; ls *= 2.; }
      float Tl = max(exp(-od * uSigma), .55 * exp(-od * uSigma * .15));
      float powder = 1. - exp(-dd * 6.);
      vec3 amb = mix(uShade, ambTop, smoothstep(.05, .8, h)) * (.86 + .14 * powder);
      vec3 light = sunC * Tl * phase * .45 * (.5 + .5 * powder) + amb * .8;
      light = mix(light, horizonCol(d) * 1.02, 1. - exp(-t * .0095 * uHazeK));
      float tr = exp(-dd * uSigma * dt);
      col += T * (1. - tr) * light;
      T *= tr;
    }
    t += dd < 0. ? max(dt * 4., .8) : dt;
  }
  gl_FragColor = vec4(col, 1. - T);
}`,pe=`
varying vec3 vRay;
varying vec2 vUv;
void main(){
  vUv = uv;
  float ph = (uv.x - .5) * 6.2831853, th = (uv.y - .5) * 3.1415927;
  vRay = vec3(sin(ph) * cos(th), sin(th), -cos(ph) * cos(th));
  gl_Position = vec4(position.xy, 1., 1.);
}`,me=`
uniform sampler2D uClouds;
uniform vec2 uPx;
varying vec2 vUv;
void main(){
  vec2 o = uPx * 1.8;
  vec4 c = texture2D(uClouds, vUv) * .2;
  c += (texture2D(uClouds, vUv + vec2(o.x, 0.)) + texture2D(uClouds, vUv - vec2(o.x, 0.)) + texture2D(uClouds, vUv + vec2(0., o.y)) + texture2D(uClouds, vUv - vec2(0., o.y))) * .125;
  c += (texture2D(uClouds, vUv + o) + texture2D(uClouds, vUv - o) + texture2D(uClouds, vUv + vec2(o.x, -o.y)) + texture2D(uClouds, vUv - vec2(o.x, -o.y))) * .075;
  gl_FragColor = c;
}`,he=`
uniform sampler2D uSrc;
uniform vec2 uDir;
uniform float uThresh;
varying vec2 vUv;
vec3 tap(vec2 o){ vec3 c = texture2D(uSrc, vUv + o).rgb; return c * smoothstep(uThresh, uThresh + .35, dot(c, vec3(.3, .59, .11))); }
void main(){
  vec3 c = tap(vec2(0.)) * .227;
  c += (tap(uDir) + tap(-uDir)) * .195;
  c += (tap(uDir * 2.) + tap(-uDir * 2.)) * .122;
  c += (tap(uDir * 3.) + tap(-uDir * 3.)) * .054;
  c += (tap(uDir * 4.) + tap(-uDir * 4.)) * .016;
  gl_FragColor = vec4(c, 1.);
}`,ge=`
${N}
uniform sampler2D uBloom;
uniform float uBloomK;
varying vec3 vRay;
varying vec2 vUv;
void main(){
  vec3 d = normalize(vRay);
  float g = max(dot(d, uSun), 0.);
  float side = smoothstep(-.2, 1., vUv.x);
  vec3 veil = mix(mix(uHaze, uSky, .15), uGlow, clamp(pow(g, 3.) * uGlowK + side * .25, 0., 1.));
  float lift = (.06 + .1 * pow(g, 6.) * uGlowK + .03 * side) * uHazeK;
  vec3 b = texture2D(uBloom, vUv).rgb * .3 + uGlow * (pow(g, 24.) * .08 + pow(g, 6.) * .03) * uGlowK;
  gl_FragColor = vec4(b * uBloomK + veil * lift, clamp(lift, 0., .6));
}`,_e=`
varying vec3 vWorld;
void main(){
  vec4 w = modelMatrix * vec4(position, 1.);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,ve=`
varying vec3 vWorld;
void main(){ gl_FragColor = vec4(1. / length(vWorld - cameraPosition), 0., 0., 1.); }`,ye=`
attribute float aKind, aBase;
varying vec3 vObj, vWorld, vN, vON;
varying vec2 vUv;
varying float vKind, vBase;
void main(){
  vObj = position;
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.);
  vWorld = w.xyz;
  vN = mat3(modelMatrix) * normal;
  vON = normal;
  vKind = aKind;
  vBase = aBase;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,be=`
${N}
uniform float uFloor, uVis, uCloudY, uEnvLod, uFog, uPier, uWash;
uniform vec3 uBands;
uniform sampler2D uEnv;
varying vec3 vObj, vWorld, vN, vON;
varying vec2 vUv;
varying float vKind, vBase;
float box(float x, float w, float s){ float fw = max(fwidth(x) * 1.5, s); vec2 a = vec2(x + w - fw * .5, x + w + fw * .5); vec2 i = floor(a) * 2. * w + min(fract(a), 2. * w); return (i.y - i.x) / fw; }
float lines(float x, float w){ return box(x, w, 1e-4); }
float fade(float x){ return 1. - smoothstep(.2, .6, fwidth(x)); }
float nfade(float x, float w){ return 1. - smoothstep(w * .5, w * 1.4, fwidth(x)); }
float sgn(float x){ return clamp((fract(x + .5) - .5) / max(fwidth(x), 1e-4) * .5, -1., 1.); }
vec3 envAt(vec3 r, float lod){
  r = normalize(r);
  return textureLod(uEnv, vec2(atan(r.x, -r.z) * .15915494 + .5, asin(clamp(r.y, -1., 1.)) * .31830989 + .5), lod).rgb;
}
vec3 shade(vec3 alb, vec3 F0, float rough, vec3 n, vec3 v, vec3 L, float ao){
  float NdV = max(dot(n, v), 1e-3), NdL = max(dot(n, L), 0.);
  vec3 h = normalize(L + v);
  float NdH = max(dot(n, h), 0.), a = rough * rough, a2 = a * a;
  float dn = NdH * NdH * (a2 - 1.) + 1.;
  float D = a2 / (3.14159 * dn * dn);
  float kk = (rough + 1.) * (rough + 1.) * .125;
  float G = NdV / (NdV * (1. - kk) + kk) * NdL / (NdL * (1. - kk) + kk);
  vec3 Fs = F0 + (1. - F0) * pow(1. - max(dot(h, v), 0.), 5.);
  vec3 Fe = F0 + (max(vec3(1. - rough), F0) - F0) * pow(1. - NdV, 5.);
  vec3 sunC = uGlow * 2.4 * uGlowK;
  vec3 irr = envAt(n, uEnvLod);
  vec3 refl = envAt(reflect(-v, n) + vec3(0., .1, 0.), rough * (uEnvLod - 1.5)) * mix(vec3(.9, .95, 1.03), vec3(1.07, 1.06, 1.04), smoothstep(uCloudY, uCloudY + 17., vWorld.y));
  vec3 spec = min(D * G / max(4. * NdV, 1e-3), 6.) * Fs * sunC;
  return alb * (irr * ao * .8 + sunC * NdL * .32) * (1. - Fe) + refl * Fe * mix(1., ao, .6) + spec;
}
void main(){
  vec3 n = normalize(vN);
  vec3 on = normalize(vON);
  vec3 v = normalize(cameraPosition - vWorld);
  vec3 L = normalize(vec3(uSun.x * 1.5, .5, uSun.z * -.1));
  vec3 up = vec3(0., 1., 0.);
  vec3 T = abs(n.y) < .95 ? normalize(cross(up, n)) : vec3(1., 0., 0.);
  float k = vKind;
  float u = abs(on.x) > .5 ? -sign(on.x) * vObj.z : sign(on.z + .001) * vObj.x;
  float y = vObj.y;
  float wall = 1. - smoothstep(.4, .7, abs(n.y));
  float ao = vBase > -39. ? mix(1., mix(.55, 1., smoothstep(0., .5, y - vBase)), wall) : 1.;
  float hgt = smoothstep(uCloudY, uCloudY + 15., vWorld.y);
  vec3 alb = vec3(.5);
  vec3 F0 = vec3(.04);
  float rough = .5;
  vec3 pn = n;
  if (k < .5) {
    float cu = u / .15, cy = y / uFloor;
    vec2 cell = floor(vec2(cu, cy));
    float fd = fade(cu) * fade(cy);
    vec3 hs = vec3(hash(cell), hash(cell + 3.1), hash(cell + 7.7));
    float fl = hash(vec2(17.3, cell.y));
    float tone = (fl > .88 ? .72 : fl < .1 ? 1.18 : 1.) * (.94 + .12 * hs.z) * (hash(cell + 11.3) > .965 ? .55 : 1.);
    float bow = hash(vec2(31.7, cell.y)) - .5;
    pn = normalize(n + (T * (hs.x - .5) * .08 + up * ((hs.y - .5) * .06 + bow * .26 + (fract(cy) - .5) * .22)) * fd * nfade(cu, .25) * nfade(cy, .25) + (up * sin(y * .9 + u * 2.3) * .06 + T * sin(y * .37 - u * 1.1) * .05));
    alb = uGlass * .38 * mix(.85, 1.15, hgt) * mix(1., tone, fd);
    F0 = mix(vec3(.24), uGlass * 1.35, .76) * mix(.9, 1.06, (fl * .7 + hs.z * .3) * fd) * mix(1., tone, fd * .6);
    rough = .03 + .05 * hs.y * fd;
    float mull = lines(cu, .025) * wall;
    pn = normalize(mix(pn, n + T * sgn(cu) * .35 * nfade(cu, .025), mull));
    alb = mix(alb, vec3(.4, .43, .5), mull * .25);
    F0 = mix(F0, vec3(.5, .53, .6), mull * .25);
    rough = mix(rough, .3, mull);
    float slab = lines(cy, .06) * wall;
    alb = mix(alb, uGlass * .3, slab);
    F0 = mix(F0, vec3(.08, .09, .12), slab);
    rough = mix(rough, .3, slab);
    float band = clamp(smoothstep(uBands.z, uBands.z * .55, abs(y - uBands.x)) + smoothstep(uBands.z, uBands.z * .55, abs(y - uBands.y)), 0., 1.) * wall;
    float louv = lines(y / .05, .2);
    alb = mix(alb, vec3(.02, .022, .028), band);
    F0 = mix(F0, vec3(.05) + .25 * louv, band);
    rough = mix(rough, .9, band);
    pn = normalize(mix(pn, n + up * louv * .6, band * nfade(y / .05, .2)));
  } else if (k < 1.5) {
    float cu = u / .075;
    float fin = lines(cu, .1) * wall;
    float rise = smoothstep(5.6, 9.8, y);
    float br = max(lines((u + y * .55) / .75, .05), lines((u - y * .55) / .75, .05)) * wall * fade(y / .75);
    alb = mix(uGlass * .5, vec3(.62, .66, .74), fin * .5);
    F0 = mix(mix(vec3(.4), uGlass * 1.9, .72) * mix(1., 1.12, rise), vec3(.66, .68, .72), fin);
    alb = mix(alb, vec3(.16, .19, .26), br * .7);
    F0 = mix(F0, F0 * .55, br * .7);
    rough = mix(.05 + .05 * rise, .28, fin);
    pn = normalize(n + T * sgn(cu) * .6 * fin * nfade(cu, .1));
  } else if (k < 2.5) {
    float cu = u / .2, cy = y / uFloor;
    float fu = abs(fract(cu) - .5);
    float pier = box(cu, .22, .04);
    float win = box(cy - .3, .3, .04);
    float top = smoothstep(.5, .8, n.y);
    vec3 stone = mix(vec3(.56, .53, .48), vec3(.8, .75, .65), smoothstep(-4.5, -2.5, y));
    vec3 glass = uGlass * .1;
    vec3 bronze = vec3(.2, .15, .11);
    alb = mix(mix(bronze, glass, win), stone, pier);
    F0 = mix(mix(vec3(.5, .38, .26), vec3(.1, .11, .13), win), vec3(.04), pier);
    rough = mix(mix(.35, .1, win), .45, pier);
    alb = mix(alb, stone * 1.05, top);
    F0 = mix(F0, vec3(.04), top);
    rough = mix(rough, .5, top);
    pn = normalize(n + T * sign(.5 - fract(cu)) * smoothstep(.25, .3, fu) * smoothstep(.35, .3, fu) * .7 * nfade(cu, .05));
    alb *= 1. - .12 * lines(y / (uFloor * 4.), .12) * wall;
  } else if (k < 3.5) {
    alb = vec3(.55, .56, .58);
    F0 = vec3(.88, .88, .9);
    rough = .22;
  } else if (k < 4.5) {
    float ua = atan(vObj.x, vObj.z) * 1.2;
    float l = max(lines((ua * 2. + y) / .6, .1), lines((ua * 2. - y) / .6, .1)) * wall;
    alb = mix(uGlass * .3, vec3(.5, .52, .55), l);
    F0 = mix(vec3(.12, .14, .18), vec3(.7, .72, .76), l);
    rough = mix(.08, .3, l);
  } else if (k < 6.5) {
    float cy = y / uFloor;
    float hs = hash(vec2(floor(u / .25), floor(cy)));
    alb = vec3(.36, .27, .2) * (1. - .2 * lines(cy, .1));
    F0 = mix(vec3(.26, .21, .16), vec3(.34, .28, .21), hs * fade(cy));
    rough = .14 + .1 * lines(u / .25, .12);
  } else if (k < 7.5) {
    float cu = u / .13, cy = y / uFloor;
    float win = (1. - box(cu, .22, .04)) * (1. - box(cy, .17, .06));
    alb = mix(vec3(.5, .52, .54), uGlass * .22, win);
    F0 = mix(vec3(.04), vec3(.12, .13, .15), win);
    rough = mix(.7, .08, win);
  } else if (k < 9.5) {
    float cu = u / .09, cy = y / uFloor;
    float fin = lines(cu, .14);
    float win = box(cy - .3, .3, .04) * .4;
    vec3 terra = vec3(.8, .77, .72);
    alb = mix(mix(terra, uGlass * .6, win * .3), vec3(.55, .47, .38), fin);
    F0 = mix(mix(vec3(.05), vec3(.18, .2, .26), win * .3), vec3(.66, .54, .4), fin);
    rough = mix(mix(.45, .1, win * .3), .28, fin);
    pn = normalize(n + T * sgn(cu) * .7 * fin * nfade(cu, .14));
    alb *= mix(.6, 1., wall);
    F0 = mix(vec3(.04), F0, wall);
  } else {
    alb = vec3(.24, .28, .36);
    F0 = vec3(.4, .44, .53);
    rough = .18;
  }
  if (uPier > 0. && wall > .5 && (k < .5 || (k > 1.5 && k < 8.5))) {
    float pu = u / uPier;
    float sd = (fract(pu + .5) - .5) * uPier;
    float shadow = smoothstep(-.16, -.03, sd) * clamp(.5 - sd / max(fwidth(sd), 1e-4), 0., 1.);
    ao *= mix(1., mix(.74, 1., smoothstep(.025, .1, abs(sd))) * (1. - .3 * shadow), nfade(pu, .15));
  }
  float rim = 0.;
  if (wall > .5 && k < 9.5 && abs(k - 4.) > .5) {
    float e = min(vUv.x, 1. - vUv.x) / max(fwidth(vUv.x), 1e-4);
    float bev = 1. - smoothstep(0., 1.5, e);
    vec3 bn = normalize(n + T * (vUv.x < .5 ? -1. : 1.));
    pn = normalize(mix(pn, bn, bev * .8));
    rough = mix(rough, .25, bev * .5);
    rim = bev * max(dot(bn, L), 0.);
  }
  vec3 col = shade(alb, F0, rough, pn, v, L, ao) + uGlow * uGlowK * rim * .3;
  float dist = length(vWorld - cameraPosition);
  vec3 air = mix(horizonCol(-v), mix(uHaze, uSky, .25), .25);
  col = mix(col, air, clamp(1. - exp(-max(dist - uFog * .8, 0.) * .012 * uHazeK), 0., .72));
  col = mix(col, mix(uCloud, horizonCol(-v), .35), smoothstep(uCloudY + uWash, uCloudY - 1., vWorld.y) * .8);
  gl_FragColor = vec4(min(col, vec3(1.)) + (hash(gl_FragCoord.xy) - .5) / 160., uVis);
}`,xe=`
varying vec2 vNdc;
void main(){ vNdc = position.xy; gl_Position = vec4(position.xy, 0., 1.); }`,Se=`
uniform vec4 uDisc[4];
uniform float uAspect, uFlare;
uniform vec3 uGlow;
varying vec2 vNdc;
void main(){
  vec3 col = vec3(0.);
  for (int i = 0; i < 4; i++) {
    vec4 c = uDisc[i];
    float r = length((vNdc - c.xy) * vec2(uAspect, 1.)) / c.z;
    float body = smoothstep(1., .8, r);
    float ring = smoothstep(.12, 0., abs(r - .93));
    vec3 tint = i == 0 ? mix(vec3(.75, .85, 1.), vec3(1., .9, .75), smoothstep(.85, 1., r)) : uGlow;
    col += tint * (body * .5 + ring * .5) * c.w;
  }
  gl_FragColor = vec4(col * uFlare, 1.);
}`,Ce=e=>()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},we=()=>{let e=Ce(9),t=t=>Float32Array.from({length:t*t*t*3},e),n=t=>Float32Array.from({length:t*t*t},e),r=(e,t)=>(e%t+t)%t,i=(e,t,n,i,a)=>{let o=e*i,s=t*i,c=n*i,l=Math.floor(o),u=Math.floor(s),d=Math.floor(c),f=9;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let p=l+n,m=u+t,h=d+e,g=((r(h,i)*i+r(m,i))*i+r(p,i))*3,_=p+a[g]-o,v=m+a[g+1]-s,y=h+a[g+2]-c;f=Math.min(f,_*_+v*v+y*y)}return Math.min(1,Math.sqrt(f))},a=(e,t,n,i,a)=>{let o=e*i,s=t*i,c=n*i,l=Math.floor(o),u=Math.floor(s),d=Math.floor(c),f=e=>e*e*(3-2*e),p=f(o-l),m=f(s-u),h=f(c-d),g=(e,t,n)=>a[(r(d+n,i)*i+r(u+t,i))*i+r(l+e,i)],_=(e,t,n)=>e+(t-e)*n;return _(_(_(g(0,0,0),g(1,0,0),p),_(g(0,1,0),g(1,1,0),p),m),_(_(g(0,0,1),g(1,0,1),p),_(g(0,1,1),g(1,1,1),p),m),h)},o=[4,8,16,32].map(e=>[e,t(e)]),s=[4,8,16,32].map(e=>[e,n(e)]),c=new Uint8Array(M*M*M*2);for(let e=0,t=0;e<M;e++)for(let n=0;n<M;n++)for(let r=0;r<M;r++,t+=2){let l=r/M,d=n/M,f=e/M,p=o.map(([e,t])=>i(l,d,f,e,t)),m=s.reduce((e,[t,n],r)=>e+a(l,d,f,t,n)*.5**(r+1),0)/.9375,h=1-(p[0]*.625+p[1]*.25+p[2]*.125),g=u.clamp(h+m*(1-h)-.35+(m-.5)*.4,0,1)/.75,_=1-(p[1]*.625+p[2]*.25+p[3]*.125);c[t]=Math.round(u.clamp(g,0,1)*255),c[t+1]=Math.round(u.clamp(_,0,1)*255)}let d=new _(c,M,M,M);return d.format=x,d.type=b,d.minFilter=d.magFilter=g,d.wrapS=d.wrapT=d.wrapR=l,d.unpackAlignment=1,d.needsUpdate=!0,d},I=-40,L=(e,t)=>{let n=e.getAttribute(`position`).count;return e.computeBoundingBox(),e.setAttribute(`aBase`,new d(new Float32Array(n).fill(e.boundingBox.min.y),1)),e.setAttribute(`aKind`,new d(new Float32Array(n).fill(t),1))},R=(e,t,n,r,i=0,a=e,o=0)=>L(new h(e,n-t,a).translate(i,(t+n)/2,o),r),Te=(t,n,r,i,a,o=4,s=0)=>L(new e(n,t,i-r,o,1).rotateY(o===4?Math.PI/4:0).translate(s,(r+i)/2,0),a),z=(e,t=1)=>(e.userData.layer=t,e),Ee=(e,t,n,r,i,a,o)=>[R(o,n,r,i,a-e/2+o/2,t-2*o),R(e-2*o,n,r,i,a,t),R(o,n,r,i,a+e/2-o/2,t-2*o)],B=(e,t,n,r,i,a,o,s,c=!1)=>{let l=[];for(let u=Math.ceil((e+s)/n)*n;u<=t-s+1e-6;u+=n)l.push(z(c?R(s,i,a,o,r+s/2,s,u):R(s,i,a,o,u,s,r+s/2)));return l},V=(e,t,n,r,i,a,o)=>[R(e,n,r,i,0,t),...B(-e/2,e/2,a,t/2,n,r,i,o),...B(-t/2,t/2,a,e/2,n,r,i,o,!0)],H=(e,t)=>{let n=e.getAttribute(`position`),r=e.boundingBox.max.y,i=(e.boundingBox.min.x+e.boundingBox.max.x)/2;for(let e=0;e<n.count;e++)n.getY(e)>r-1e-4&&n.getX(e)>i&&n.setY(e,r-t);return e.computeBoundingBox(),e},U=0,W=1.5,G=.8,K=.05,q=U+W/2,J=(e,t,n)=>Ee(W,G,e,t,n,U,K),Y=(e,t)=>R(W-.06,e,t,0,U,G-.06),De=[{d:86,x:.8,floor:.3,bands:[99,99,.1],delay:.5,parts:()=>[R(1.9,I,6,6,0,1.6),R(1.5,6,6.8,6,0,1.3),R(1.6,6.8,6.9,3,0,1.4)]},{d:80,x:-.78,floor:.3,bands:[99,99,.1],delay:.45,yaw:.15,parts:()=>[R(1.5,I,5.8,7,-1.05,.9),R(1.5,I,4.4,7,1.05,.9),R(.6,I,1.8,7,0,.5)]},{d:58,x:.36,floor:.24,bands:[99,99,.1],delay:.4,pier:.26,parts:()=>[...V(2,1.6,I,.6,7,.26,.05),R(2.12,.6,.75,3,0,1.72),R(2.12,.75,1.3,7,0,1.72),R(2.2,1.3,1.38,3,0,1.8)]},{d:52,x:-.34,floor:.2,bands:[99,99,.1],delay:.35,pier:.25,parts:()=>[H(R(1.6,I,4.8,0,0,1.2),1.4)]},{d:40,x:0,floor:.2,bands:[3.86,-1.24,.2],delay:0,pier:.3,wash:2.5,parts:()=>[...J(I,-1.38,0),Y(-1.38,-1.1),...J(-1.1,3.72,0),Y(3.72,4),...J(4,9.2,0),...B(U-W/2+K,q-K,.3,G/2,I,9.2,10,.045),...Array.from({length:10},(e,t)=>z(R(.06,I,8.4-t*1.4,9,q+.03+t*.06,.7-t*.035))),z(R(W+.02,9.2,9.23,3,U,G+.02),2)]},{d:36,x:.62,floor:.24,bands:[99,99,.1],delay:.3,pier:.4,parts:()=>[...V(2,1.7,I,-2.6,2,.4,.06),...V(1.55,1.35,-2.6,-1.3,2,.4,.05),...V(1.1,.95,-1.3,-.3,2,.4,.05),R(1.18,-.3,-.2,2,0,1.03)]},{d:30,x:-.62,floor:.3,bands:[99,99,.1],delay:.25,parts:()=>[Te(.9,.74,I,-1.4,4,28),z(Te(.76,.72,-1.4,-1.3,3,28))]}],X=1.29,Z=-.4,Oe=-.055,Q=40*1.29,$=new m(1,.15),ke=[[0,.04,.27,.045,0],[.47,.22,.11,.055,.5],[.63,.29,.075,.06,.7],[-.42,-.17,.04,.05,-.4]],Ae={id:`skyline`,title:`Skyline`,palette:{uSky:{cssVar:`--skyline-sky`,label:`Sky`,fallback:`#6789b0`},uHaze:{cssVar:`--skyline-haze`,label:`Haze`,fallback:`#c3ccd3`},uGlow:{cssVar:`--skyline-glow`,label:`Sun glow`,fallback:`#fbeedd`},uCloud:{cssVar:`--skyline-cloud`,label:`Cloud`,fallback:`#f5f4f2`},uShade:{cssVar:`--skyline-shade`,label:`Cloud shadow`,fallback:`#b4b6c4`},uGlass:{cssVar:`--skyline-glass`,label:`Glass`,fallback:`#3f5280`},uWater:{cssVar:`--skyline-water`,label:`Water`,fallback:`#2f4a5c`},uGrass:{cssVar:`--skyline-green`,label:`Green`,fallback:`#56683f`},uWin:{cssVar:`--skyline-window`,label:`Window light`,fallback:`#ffc27a`}},params:[{key:`deck`,label:`Cloud height`,min:-2,max:2,step:.05,value:-.4},{key:`cover`,label:`Cloud cover`,min:-.4,max:.4,step:.01,value:0},{key:`density`,label:`Cloud density`,min:.5,max:12,step:.1,value:1.8},{key:`haze`,label:`Haze`,min:.3,max:2,step:.05,value:1},{key:`glow`,label:`Sun glow`,min:0,max:1.5,step:.05,value:1},{key:`flare`,label:`Lens flare`,min:0,max:2,step:.05,value:1},{key:`bloom`,label:`Bloom`,min:0,max:2,step:.05,value:1},...C],variants:{clouds:{},...w},fov:[38,58],travelPerScreen:0,creep:0,hover:{liquid:0,turn:.4},resolution:1,antialias:!0,setup(e){let d=(e.variant??``).split(`+`)[0];if(d&&d!==`clouds`)return ue(e);let{scene:f,camera:h,small:_,colors:b,pointer:x,renderer:S}=e,C=new v(j*$.x,de*$.y,-1).normalize(),w={uTime:{value:0},uTan:{value:new m(1,1)},uSun:{value:C},uGlowK:{value:1},uHazeK:{value:1}},T=[],E=e=>(T.push(e),e),ae=E(new ee(2,2)),D=(e,t)=>{let n=new o(ae,e);return n.frustumCulled=!1,n.renderOrder=t,n};f.add(D(E(new a({vertexShader:P,fragmentShader:F,depthTest:!1,depthWrite:!1,uniforms:{...b,...w}})),-1));let O=_?.42:1,oe=new i,se=E(new a({vertexShader:_e,fragmentShader:ve,depthTest:!1,depthWrite:!1,transparent:!0,blending:5,blendEquation:104,blendSrc:201,blendDst:201})),k=_?256:512,A=E(new y(k,k/2,{type:n,depthBuffer:!1,generateMipmaps:!0,minFilter:p,magFilter:g,wrapS:l})),ce={uEnv:{value:A.texture},uEnvLod:{value:Math.log2(k)-2},uFog:{value:34*X}},le=new v(0,1,0),M=new v,N=De.map((e,t)=>{let n=e.yaw??-.4,r=e.x*j*e.d*X*O,i=new v(-r,0,e.d*X).applyAxisAngle(le,-n),s=E(re(e.parts().map((e,t)=>(e.boundingBox.getCenter(M),{g:e,j:t,l:e.userData.layer??0,r:Math.hypot(M.x-i.x,M.z-i.z)})).sort((e,t)=>e.l-t.l||t.r-e.r||e.j-t.j).map(e=>e.g),!1)),c=E(new a({vertexShader:ye,fragmentShader:be,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{...b,...w,...ce,uFloor:{value:e.floor},uBands:{value:new v(...e.bands)},uVis:{value:1},uCloudY:{value:-7},uPier:{value:e.pier??0},uWash:{value:e.wash??6}}})),l=new o(s,c);l.frustumCulled=!1,l.renderOrder=t,l.position.set(r,0,-e.d*X),l.rotation.y=n,f.add(l);let u=new o(s,se);return u.frustumCulled=!1,u.position.copy(l.position),u.rotation.y=l.rotation.y,oe.add(u),{material:c}}),Ce=E(we()),I=E(new r(new Uint8Array(4),1,1));I.needsUpdate=!0;let L=E(new ee(2,2,64,32)),R=new i,Te=new t,z=new o(L,E(new a({vertexShader:pe,fragmentShader:F,depthTest:!1,depthWrite:!1,uniforms:{...b,...w}}))),Ee=new o(L,E(new a({vertexShader:pe,fragmentShader:fe,defines:{STEPS:120,LSTEPS:4},transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,uniforms:{...b,...w,uNoise:{value:Ce},uDist:{value:I},uDeck:{value:0},uCover:{value:0},uSigma:{value:1.6}}})));for(let[e,t]of[[z,0],[Ee,1]])e.frustumCulled=!1,e.renderOrder=t,R.add(e);let B=``,V=E(new y(2,2,{type:n,depthBuffer:!1})),H=E(new y(2,2,{type:n,format:ne,depthBuffer:!1,minFilter:s,magFilter:s})),U=E(new a({vertexShader:P,fragmentShader:fe,defines:{STEPS:_?80:120,LSTEPS:_?3:4},depthTest:!1,depthWrite:!1,blending:0,uniforms:{...b,...w,uNoise:{value:Ce},uDist:{value:H.texture},uDeck:{value:0},uCover:{value:0},uSigma:{value:1.6}}})),W=new i;W.add(D(U,0));let G=E(new a({vertexShader:P,fragmentShader:me,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,uniforms:{uClouds:{value:V.texture},uTan:w.uTan,uPx:{value:new m(.5,.5)}}}));f.add(D(G,500));let K={type:n,depthBuffer:!1,minFilter:g,magFilter:g},q=E(new y(2,2,K)),J=E(new y(2,2,K)),Y=(e,t)=>{let n=E(new a({vertexShader:P,fragmentShader:he,depthTest:!1,depthWrite:!1,blending:0,uniforms:{uSrc:{value:e},uDir:{value:new m},uThresh:{value:t},uTan:w.uTan}})),r=new i;return r.add(D(n,0)),{s:r,dir:n.uniforms.uDir.value}},Z=Y(V.texture,.88),Ae=Y(q.texture,-1),je=E(new a({vertexShader:P,fragmentShader:ge,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,uniforms:{...b,...w,uBloom:{value:J.texture},uBloomK:{value:1}}}));f.add(D(je,998));let Me=ke.map(()=>new te),Ne=E(new a({vertexShader:xe,fragmentShader:Se,transparent:!0,blending:2,depthTest:!1,depthWrite:!1,uniforms:{uDisc:{value:Me},uAspect:{value:1},uFlare:{value:1},uGlow:b.uGlow}}));f.add(D(Ne,999));let Pe=new v,Fe=new m,Ie=new c,Le=e=>1-(1-u.clamp(e,0,1))**3,Re=ie(h,x,{base:new v,focus:new v(0,0,-Q),pitch:Oe});return{hoverMask:H.texture,update(e){let{time:t,params:n,intro:r}=e;Re(e);let i=Math.tan(u.degToRad(h.fov/2));w.uTan.value.set(i*h.aspect,i),w.uTime.value=t,w.uGlowK.value=n.glow,w.uHazeK.value=n.haze;for(let{material:e}of N)e.uniforms.uCloudY.value=-7.5+n.deck;let a=U.uniforms;a.uDeck.value=n.deck,a.uCover.value=n.cover,a.uSigma.value=n.density,S.getDrawingBufferSize(Fe);let o=Math.max(2,Math.round(Fe.x*.5)),s=Math.max(2,Math.round(Fe.y*.5));if(V.width!==o||V.height!==s){V.setSize(o,s),H.setSize(o,s),G.uniforms.uPx.value.set(1/o,1/s);let e=Math.max(2,Math.round(Fe.x/8)),t=Math.max(2,Math.round(Fe.y/8));q.setSize(e,t),J.setSize(e,t),Z.dir.set(1.6/e,0),Ae.dir.set(0,1.6/t)}let c=S.getRenderTarget(),l=[n.deck,n.cover,n.density,n.glow,n.haze,...Object.values(b).flatMap(e=>e.value.toArray())].join();if(l!==B){B=l;let e=Ee.material.uniforms;e.uDeck.value=n.deck,e.uCover.value=n.cover,e.uSigma.value=n.density,S.setRenderTarget(A),S.render(R,Te)}S.getClearColor(Ie);let d=S.getClearAlpha();S.setRenderTarget(H),S.setClearColor(0,0),S.clear(),S.render(oe,h),S.setClearColor(Ie,d),S.setRenderTarget(V),S.render(W,h),S.setRenderTarget(q),S.render(Z.s,h),S.setRenderTarget(J),S.render(Ae.s,h),S.setRenderTarget(c),je.uniforms.uBloomK.value=n.bloom,Pe.copy(h.position).addScaledVector(C,100).project(h);let f=Pe.z>1;ke.forEach(([e,t,n,r,i],a)=>Me[a].set(e+(Pe.x-$.x)*i,t+(Pe.y-$.y)*i,n,f?0:r)),Ne.uniforms.uAspect.value=h.aspect,Ne.uniforms.uFlare.value=n.flare*(.85+.15*Math.sin(t*.3))*Le(r/2.5-.3)},dispose(){for(let e of T)e.dispose()}}}};export{Ae as t};