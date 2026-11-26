import{$t as e,Dt as t,Ft as n,It as r,J as i,K as a,L as o,M as s,Mn as c,Nn as l,Ot as u,S as d,Tn as f,Tt as p,Vn as m,Y as h,_t as g,b as _,cr as v,d as ee,ht as y,jn as b,lr as x,n as te,pr as ne,q as re,qt as S,t as ie,tt as ae,ur as oe}from"./three.module-BtOiv6AT.js";import{t as C}from"./BufferGeometryUtils-BCwTizHk.js";import{t as se}from"./Reflector-DJOHSeQL.js";import{t as ce}from"./RoundedBoxGeometry-07rcVPj6.js";import{t as le}from"./cameraRig-DZYJJrwO.js";import{a as ue,c as de,i as fe,l as pe,n as w,o as me,r as he,s as ge,t as T,u as _e}from"./lightPresets-Cae86WMC.js";var E=40,D=.0015,ve=[`plaster`,`stone`,`wood`,`paving`,`frame`,`glass`,`rail`],O={plaster:3,stone:2.4,wood:2.4,paving:2.4,frame:1,glass:1,rail:1},k=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},A=(e,t,n)=>e+(t-e)*n,j=(e,t,n)=>{let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},M=(e,t)=>(e%t+t)%t,ye=(e,t,n,r,i)=>{let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=M(a,n),f=M(a+1,n),p=M(o,r),m=M(o+1,r),h=j(d,p,i),g=j(f,p,i),_=j(d,m,i),v=j(f,m,i);return h+(g-h)*l+(_-h)*u+(h-g-_+v)*l*u},N=(e,t,n,r,i,a=4)=>{let o=0,s=.5,c=0;for(let l=0;l<a;l++)o+=s*ye(e*n,t*r,n,r,i+l),c+=s,s*=.5,n*=2,r*=2;return o/c},P=(e,t,n,r=!0)=>{let i=new s(e,t,t);return i.wrapS=i.wrapT=r?f:_,i.magFilter=y,i.minFilter=g,i.generateMipmaps=!0,i.anisotropy=8,n&&(i.colorSpace=b),i.needsUpdate=!0,i},F=(e,t,n)=>{let r=e*e,i=new Uint8Array(r*4),a=new Uint8Array(r*4),o=new Uint8Array(r*4),s=new Float32Array(r);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let a=n((r+.5)/e,(t+.5)/e),c=t*e+r;for(let e=0;e<3;e++)i[c*4+e]=Math.round(Math.min(1,Math.max(0,a.c[e]))*255);i[c*4+3]=255,o[c*4+1]=Math.round(Math.min(1,Math.max(0,a.r))*255),o[c*4+3]=255,s[c]=a.h}for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=n*e+r,o=s[n*e+(r+1)%e]-s[n*e+(r-1+e)%e],c=s[(n+1)%e*e+r]-s[(n-1+e)%e*e+r],l=-o*t,u=-c*t,d=Math.hypot(l,u,1);a[i*4]=Math.round((l/d*.5+.5)*255),a[i*4+1]=Math.round((u/d*.5+.5)*255),a[i*4+2]=Math.round((1/d*.5+.5)*255),a[i*4+3]=255}return{map:P(i,e,!0),normalMap:P(a,e,!1),roughnessMap:P(o,e,!1)}},be=(e,t)=>{let n=e*7,r=t*11,i=Math.floor(n),a=Math.floor(r),o=9,s=9,c=0;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let l=i+t,u=a+e,d=M(l,7),f=M(u,11),p=l+.05+.9*j(d,f,11),m=u+.05+.9*j(d,f,12),h=Math.hypot((n-p)*.34,(r-m)*.22)*(.8+.4*j(d,f,13));h<o?(s=o,o=h,c=d*31+f):h<s&&(s=h)}let l=N(e,t,24,24,3,4),u=N(e,t,96,96,4,2),d=s-o+(l-.5)*.03,f=k(.006,.026,d),p=Math.min(1,Math.sqrt(Math.max(d,0)/.1)),m=j(c,7,5),h=(.66+.46*j(c,3,9))*(.84+.3*l)*(.92+.16*u),g=[A(1.04,.88,m)*h,A(.98,.92,m)*h,A(.9,.96,m)*h],_=.5+.12*l;return{c:[A(_,g[0],f),A(_*.97,g[1],f),A(_*.92,g[2],f)],h:f*(.5+.35*p+.3*(l-.5)+.08*u)+(1-f)*.08*l,r:A(.97,.78+.18*l,f)}},xe=(e,t)=>{let n=t*16,r=Math.floor(n),i=n-r,a=k(0,.07,i)*(1-k(.93,1,i)),o=j(r,1,21),s=N(e,t,3,96,22+r%5*3,4),c=.5+.5*Math.sin((i*5+s*7+o*6)*6.283),l=(.78+.3*o)*(.84+.2*c)*(.9+.2*s)*(.3+.7*a);return{c:[l*1.02,l,l*.96],h:a*(.9+.08*c),r:.55+.25*c}},Se=(e,t)=>{let n=N(e,t,48,48,31,4),r=N(e,t,6,6,33,4),i=.95+(r-.5)*.08+(n-.5)*.04;return{c:[i*1.005,i,i*.985],h:n*.7+r*.3,r:.86+.1*n}},Ce=(e,t)=>{let n=e*4,r=t*4,i=n-Math.floor(n),a=r-Math.floor(r),o=k(0,.02,Math.min(i,1-i))*k(0,.02,Math.min(a,1-a)),s=j(Math.floor(n),Math.floor(r),41),c=N(e,t,64,64,42,3),l=(.86+.14*s)*(.9+.18*c)*A(.5,1,o);return{c:[l,l*.99,l*.97],h:o*(.8+.12*c),r:.72+.2*c}},we=(e,t)=>{let n=t*6,r=Math.floor(n),i=e*3+r%2*.5,a=M(Math.floor(i),3),o=i-Math.floor(i),s=n-r,c=k(0,.01,Math.min(o,1-o)*1.6)*k(0,.01,Math.min(s,1-s)*.8),l=j(a,M(r,6),71),u=N(e,t,3,40,72,4),d=N(e,t,12,12,73,3),f=k(.74,.8,N(e,t,160,160,74,2)),p=(.92+.08*l)*(.94+.08*u)*(.96+.06*d)*(1-.1*f)*A(.86,1,c);return{c:[p,p*.99,p*.96],h:c*.5+u*.04-f*.08,r:.7+.16*d+.1*f}},Te=(e,t)=>{let n=N(e,t,128,128,101,2),r=N(e,t,8,8,102,4),i=(.78+.3*r)*(.85+.3*n);return{c:[i*.96,i,i*.84],h:n*.6+r*.2,r:.95}},I=(e,t)=>{let n=e.attributes.position,r=e.attributes.normal,i=e.attributes.uv;for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));o>=a&&o>=s?i.setXY(e,n.getX(e)/t,n.getZ(e)/t):a>=s?i.setXY(e,n.getZ(e)/t,n.getY(e)/t):i.setXY(e,n.getX(e)/t,n.getY(e)/t)}return e},Ee=e=>{let t=Object.fromEntries(ve.map(e=>[e,[]])),n=[],r=(e,[r,i,a,o,s,c],l=.03,u=!0)=>{let d=i-r,f=o-a,p=c-s,m=Math.min(l,Math.min(d,f,p)*.45),h=m>.003?new ce(d,f,p,2,m):new ee(d,f,p);t[e].push(h.translate((r+i)/2,(a+o)/2,(s+c)/2)),u&&n.length<E*7&&n.push((r+i)/2,(a+o)/2,(s+c)/2,m,d/2,f/2,p/2)},i=(e,n,i,a,o)=>{let s=.06,c=.1,l=Math.max(1,Math.round((n-e)/1.6));r(`frame`,[e,n,i,i+s,o,o+c],.008,!1),r(`frame`,[e,n,a-s,a,o,o+c],.008,!1);for(let t=0;t<=l;t++){let u=Math.min(n-s,Math.max(e,e+(n-e)*t/l-s/2));r(`frame`,[u,u+s,i+s,a-s,o,o+c],.008,!1)}let u=Math.round(i*37+o*11+e*5);for(let r=0;r<l;r++){let s=e+(n-e)*r/l,d=e+(n-e)*(r+1)/l,f=(j(r,u,3)-.5)*.028,p=(j(r,u,7)-.5)*.014;t.glass.push(new S(d-s,a-i).rotateY(f).rotateX(p).translate((s+d)/2,(i+a)/2,o+c*.45))}},a=(e,[t,n,a,o,s,c],l)=>{let{a0:u,a1:d,b0:f,b1:p,d:m}=l;r(e,[t,n,p,o,s,c]),f>a+.01&&r(e,[t,n,a,f,s,c]),u>t+.01&&r(e,[t+D,u,a+D,o-D,s+D,c-D]),n>d+.01&&r(e,[d,n-D,a+D,o-D,s+D,c-D]),r(e,[u-.05,d+.05,Math.max(f-.05,a+D),p+.05,s+D,c-m],.01),l.glaze!==!1&&i(u,d,f,p,c-m)},o=(e,t,n,i,a)=>{r(`frame`,[e,t,i,i+.08,n-.05,n+.05],.01,!1);let o=Math.max(1,Math.round((t-e)/1.25)),s=(t-e)/o;for(let t=0;t<o;t++)r(`rail`,[e+s*t+.012,e+s*(t+1)-.012,i+.08,i+a,n-.01,n+.01],0,!1)},s=.47,c=3.6,l=6.8,u=e.floors>1.5,d=u?l:c,f=p.clamp(e.glass,.2,.95),m=e.overhang,h=e.stone>.5?`stone`:`plaster`,g=e.cladding>.5;r(h,[-9.6,10.6,0,s-.05,-9,2.6]),r(`paving`,[-9.7,10.7,s-.06,s,-9.1,2.68],.012);for(let e=1;e<=3;e++)r(`paving`,[-2.3,.7,s*(e-1)/3,s*e/3,2.68,2.68+.38*(4-e)],.012);let _=-5.4,v=_+f*(3.3-_);a(`plaster`,[-6,5.9,s,c,-8,0],{a0:_,a1:v,b0:s,b1:3.1,d:.45}),g&&r(`wood`,[v+.35,3.85,s,3.1,-.02,.04],.01),u&&a(`plaster`,[-8.6,5.9,c,l,-8.2,1.4],{a0:-8,a1:-8+f*11.6,b0:c+.25,b1:l-.4,d:.5});let y=u?1.4:0;r(h,[3.9,5.15,0,d+.06,-.8,Math.min(y+.5,y+m-.1)],.035),r(`plaster`,[(u?-8.6:-6)-m*.5,5.9+m*.35,d,d+.38,(u?-8.2:-8)-.4,y+m],.03);let b=c-.3;return a(`plaster`,[5.9,10.4,s,b,-7.6,.9],{a0:6.35,a1:9.95,b0:s,b1:2.85,d:.22,glaze:!1}),r(g?`wood`:`frame`,[6.35,9.95,s+D,2.85-D,.7,.76],.006),r(`plaster`,[5.85,10.5,b,b+.12,-7.7,1],.02),e.balcony>.5&&(o(5.95,10.45,.93,b+.12,1.05),o(-9.5,-2.5,2.52,s,1)),r(`paving`,[5.6,10.9,-.03,.012,2.68,18],.004,!1),r(`paving`,[-2.6,1,-.03,.01,3.82,12],.004,!1),{parts:t,occ:n}},De=`
#define NB ${E}
uniform vec4 uBoxC[NB];
uniform vec3 uBoxH[NB];
uniform int uBoxN;
uniform vec3 uLeafT1, uLeafT2;
uniform vec2 uLeafC, uLeafC2;
uniform float uTime, uLeaves, uMist, uFogK, uWin;
uniform vec3 uSunDir, uSunCol;
varying vec3 vVillaW, vVillaN;
float vhash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f); return mix(mix(vhash(i), vhash(i + vec2(1., 0.)), u.x), mix(vhash(i + vec2(0., 1.)), vhash(i + vec2(1., 1.)), u.x), u.y); }
float vfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .9375; }
float sdVilla(vec3 p){
  float d = p.y;
  for (int i = 0; i < NB; i++) {
    if (i >= uBoxN) break;
    vec4 c = uBoxC[i];
    vec3 q = abs(p - c.xyz) - uBoxH[i] + c.w;
    d = min(d, length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - c.w);
  }
  return d;
}
float villaAO(vec3 p, vec3 n){
  if (length(p.xz - vec2(.5, -3.)) > 24.) return 1.;
  float o = 0.;
  for (int i = 1; i <= 4; i++) {
    float h = .1 * float(i * i);
    o += clamp((h - sdVilla(p + n * h)) / h, 0., 1.) * (1.2 - .2 * float(i));
  }
  return clamp(1. - o * .32, 0., 1.);
}
float leafMask(vec3 w){
  if (uLeaves <= 0. || length(w.xz - vec2(.5, -3.)) > 30.) return 1.;
  vec2 q = vec2(dot(w, uLeafT1), dot(w, uLeafT2));
  float wob = (vnoise(q * .3 + 3.) - .5) * .6;
  float env = max(smoothstep(1.05, .4, length((q - uLeafC) / vec2(7., 4.2)) + wob), smoothstep(1.05, .4, length((q - uLeafC2) / vec2(6., 3.6)) + wob) * .8);
  vec2 sway = vec2(sin(uTime * .7) + sin(uTime * 1.13 + 1.), cos(uTime * .9) + sin(uTime * .53)) * .05;
  float holes = vfbm(q * 1.05 + sway + vec2(uTime * .015, 0.));
  float leaf = smoothstep(.4, .6, holes + (vnoise(q * 4.2 + sway * 2.5) - .5) * .22);
  return 1. - uLeaves * env * leaf * .9;
}
`,Oe=`
float ambientOcclusion = villaAO(vVillaW, normalize(vVillaN));
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_ENVMAP ) && defined( STANDARD )
  float dotNVo = saturate( dot( geometryNormal, geometryViewDir ) );
  reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVo, ambientOcclusion, material.roughness );
#endif
reflectedLight.directDiffuse *= mix(1., ambientOcclusion, .3);
`,ke=`
#ifdef USE_FOG
vec3 hV = vVillaW - cameraPosition;
float hD = length(hV);
float hAz = max(dot(normalize(hV.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
vec3 hFog = mix(fogColor, uSunCol, .25 + .5 * pow(hAz, 3.));
float hNear = 1. - exp(-fogDensity * fogDensity * hD * hD);
float hFar = 1. - exp(-max(length(vVillaW.xz - vec2(.5, -3.)) - 16., 0.) * .012 * uFogK);
float hMist = uMist * smoothstep(24., 140., hD) * exp(-max(vVillaW.y, 0.) * .25);
float hK = 1. - (1. - hNear) * (1. - hFar * .95) * (1. - hMist * .75);
gl_FragColor.rgb = mix(gl_FragColor.rgb, hFog * (1. + .06 * hMist), clamp(hK, 0., 1.));
#endif`,Ae=`#include <emissivemap_fragment>
float wPane = vhash(vec2(floor(vVillaW.x * .62 + .5), floor(vVillaW.y / 3.2)) + 7.3);
float wGrad = .55 + .45 * smoothstep(.2, 2.6, fract(vVillaW.y / 3.2 - .15) * 3.2);
totalEmissiveRadiance *= max(uWin * (.12 + .88 * step(.4, wPane)) * wGrad * (.7 + .5 * vnoise(vVillaW.xy * .7)), .008 * (.4 + wPane));`,je=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ]`,Me=`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,Ne=`
uniform vec3 uSky, uHaze, uGlow, uFoliage, uLawn, uSunDir, uCam;
uniform float uHazeK, uTime, uCoast;
varying vec3 vDir;
vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
float h1(float x){ return fract(sin(x * 127.1) * 43758.5453); }
float n1(float x){ float i = floor(x), f = fract(x); f = f * f * (3. - 2. * f); return mix(h1(i), h1(i + 1.), f); }
float fbm(float x){ float v = 0., w = .5; for (int i = 0; i < 5; i++) { v += w * n1(x); x = x * 2.07 + 17.3; w *= .5; } return v / .96875; }
float ridge(float x){ float r = 1. - abs(2. * n1(x * .8 + 3.1) - 1.); return fbm(x) * .72 + r * r * .28; }
vec3 hills(vec3 c, float y, float a, float f, float o, float b, float h, vec3 col, vec3 mist, vec3 rimC, float sa, float rimK){
  float r = b + h * ridge(a * f + o);
  float s = (b + h * ridge((a + .01) * f + o) - b - h * ridge((a - .01) * f + o)) / .02;
  float lit = clamp(-s * sign(sin(sa - a)) * 2.5, -1., 1.);
  float under = r - y;
  vec3 m = col * (1. + .22 * lit);
  m = mix(m, mist, smoothstep(.01, .1, under) * .55);
  m += rimC * rimK * exp(-max(under, 0.) / .006);
  return mix(c, m, smoothstep(-.0025, .0025, under));
}
float sn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h1(dot(i, vec2(1., 57.))), h1(dot(i + vec2(1., 0.), vec2(1., 57.))), f.x), mix(h1(dot(i + vec2(0., 1.), vec2(1., 57.))), h1(dot(i + vec2(1., 1.), vec2(1., 57.))), f.x), f.y); }
float swell(vec2 p, float t){
  return sn(p * .045 + vec2(uTime * .03, uTime * .015)) * .8 + sn(p * .13 + vec2(-uTime * .05, uTime * .04)) * .35 / (1. + t * .004) + sn(p * .42 + vec2(uTime * .09, -uTime * .07)) * .12 / (1. + t * .02);
}
vec3 seaShade(vec3 d, vec3 hor, vec3 glow, vec3 sky, float az){
  float t = (uCam.y + 8.) / max(-d.y, 1e-4);
  vec2 p = uCam.xz + d.xz * t;
  float h0 = swell(p, t);
  vec2 gr = vec2(swell(p + vec2(1., 0.), t) - h0, swell(p + vec2(0., 1.), t) - h0);
  float k = 2.2 / (1. + t * .004);
  vec3 n = normalize(vec3(-gr.x * k, 1., -gr.y * k));
  vec3 r = reflect(d, n);
  r.y = abs(r.y);
  vec3 refl = mix(hor, sky, pow(smoothstep(-.02, .55, r.y), .6));
  float fres = .04 + .96 * pow(1. - clamp(dot(n, -d), 0., 1.), 5.);
  vec3 deep = mix(sky, lin(uFoliage) * 2., .25) * .38;
  vec3 c = mix(deep, refl, clamp(fres * .42, 0., 1.));
  float facet = dot(normalize(n.xz + 1e-4), normalize(uSunDir.xz + 1e-4)) * length(n.xz);
  c *= 1. + facet * 1.6 / (1. + t * .003);
  float g = max(dot(r, uSunDir), 0.);
  float sp = smoothstep(.55, .95, sn(p * .8 + vec2(uTime * .35, uTime * .2))) / (1. + t * .02);
  c += glow * (pow(g, 90.) * .5 + pow(g, 700.) * 2. + pow(g, 40.) * sp * 4.);
  return mix(c, hor * (1. + .05 * az), 1. - exp(-t * .0009 * uHazeK));
}
float landR(float a, float cen, float wid, float h, float o){
  float e = (a - cen) / wid;
  return max(h * exp(-e * e) * (.45 + .9 * ridge(a * 9. + o)) - .004, 0.);
}
vec3 land(vec3 c, float y, float a, float cen, float wid, float h, float o, vec3 col, vec3 mist, vec3 rimC, float sa){
  float r = landR(a, cen, wid, h, o);
  float s = (landR(a + .01, cen, wid, h, o) - landR(a - .01, cen, wid, h, o)) / .02;
  float lit = clamp(-s * sign(sin(sa - a)) * 1.5, -1., 1.);
  vec3 m = col * (1. + .2 * lit);
  m = mix(m, mist, (1. - smoothstep(0., max(r * .85, 1e-4), y)) * .75);
  m += rimC * exp(-max(r - y, 0.) / .004) * .6;
  return mix(c, m, smoothstep(0., .0015, r - y));
}
void main(){
  vec3 d = normalize(vDir);
  vec3 haze = lin(uHaze), glow = lin(uGlow);
  float az = max(dot(normalize(d.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
  vec3 hor = mix(haze, glow, .25 + .5 * pow(az, 3.));
  vec3 c = mix(hor, lin(uSky), pow(smoothstep(-.02, .55, d.y), .6));
  float g = max(dot(d, uSunDir), 0.);
  c += glow * (pow(g, 6.) * .35 + pow(g, 60.) * 1.2 + smoothstep(.9993, .9997, g) * 12.);
  float a = atan(d.x, d.z);
  vec2 cq = d.xz / (d.y + .06) * .35 + uTime * vec2(.012, .004);
  float cl = 0., ca = .5;
  for (int i = 0; i < 4; i++) { vec2 ip = floor(cq), fp = fract(cq); fp = fp * fp * (3. - 2. * fp); float hv = mix(mix(h1(dot(ip, vec2(1., 57.))), h1(dot(ip + vec2(1., 0.), vec2(1., 57.))), fp.x), mix(h1(dot(ip + vec2(0., 1.), vec2(1., 57.))), h1(dot(ip + vec2(1., 1.), vec2(1., 57.))), fp.x), fp.y); cl += ca * hv; cq = cq * 2.1 + vec2(1.7, 9.2); ca *= .5; }
  float cloud = smoothstep(.54, .86, cl / .9375) * smoothstep(.06, .24, d.y) * (1. - smoothstep(.5, .85, d.y));
  c = mix(c, mix(haze * 1.12, glow * 1.2, .3 + .5 * az) * (.86 + .22 * smoothstep(.62, .92, cl / .9375)), cloud * .62);
  vec3 hill = lin(uFoliage) * 1.8;
  vec3 blue = mix(hor, lin(uSky), .28);
  vec3 mist = mix(hor, glow, .12 + .25 * az);
  vec3 rimC = glow * pow(az, 4.);
  float sa = atan(uSunDir.x, uSunDir.z);
  if (uCoast > .5) {
    c = land(c, d.y, a, 1.95, .3, .05, 2., mix(hill, mix(hor, blue, .7), clamp(.78 * uHazeK, 0., .92)), mist, rimC, sa);
    c = land(c, d.y, a, 2.2, .045, .02, 5., mix(hill, mix(hor, blue, .5), clamp(.7 * uHazeK, 0., .9)), mist, rimC, sa);
    c = land(c, d.y, a, 1.6, .06, .013, 8., mix(hill, mix(hor, blue, .5), clamp(.82 * uHazeK, 0., .94)), mist, rimC, sa);
    if (d.y < 0.) c = mix(c, seaShade(d, hor, glow, lin(uSky), az), smoothstep(0., -.004, d.y));
  } else {
    c = hills(c, d.y, a, 1.3, 9., .05, .15, mix(hill, mix(blue, lin(uSky), .25), clamp(.8 * uHazeK, 0., .95)), mist, rimC, sa, 1.);
    c = hills(c, d.y, a, 2.1, 4., .03, .1, mix(hill, mix(hor, blue, .7), clamp(.62 * uHazeK, 0., .9)), mist, rimC, sa, .8);
    c = hills(c, d.y, a, 3.4, 1., .015, .065, mix(hill * 1.15, mix(hor, blue, .4), clamp(.42 * uHazeK, 0., .85)), mist, rimC, sa, .6);
    c = mix(c, mix(hor, mix(lin(uLawn) * .5, haze * .6, .4), .5), smoothstep(-.005, -.08, d.y));
  }
  gl_FragColor = vec4(c, 1.);
}`,Pe=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,Fe=`
uniform sampler2D uSrc;
uniform vec2 uDir;
uniform float uThresh;
varying vec2 vUv;
vec3 tap(vec2 o){ vec3 c = texture2D(uSrc, vUv + o).rgb; return c * smoothstep(uThresh, uThresh + .4, dot(c, vec3(.3, .59, .11))); }
void main(){
  vec3 c = tap(vec2(0.)) * .227;
  c += (tap(uDir) + tap(-uDir)) * .195;
  c += (tap(uDir * 2.) + tap(-uDir * 2.)) * .122;
  c += (tap(uDir * 3.) + tap(-uDir * 3.)) * .054;
  c += (tap(uDir * 4.) + tap(-uDir * 4.)) * .016;
  gl_FragColor = vec4(c, 1.);
}`,Ie=`
uniform sampler2D uMain, uBloom;
uniform vec3 uHaze, uGlow, uFoliage;
uniform float uBloomK, uFade, uAspect, uTime, uExposure, uFrame, uSat;
uniform vec3 uLift, uWarm, uCool;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f); return mix(mix(hash(i), hash(i + vec2(1., 0.)), u.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), u.x), u.y); }
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 3; i++) { s += a * noise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .875; }
vec3 aces(vec3 x){ return clamp((x * (2.51 * x + .03)) / (x * (2.43 * x + .59) + .14), 0., 1.); }
void main(){
  vec3 c = texture2D(uMain, vUv).rgb;
  c += texture2D(uBloom, vUv).rgb * .35 * uBloomK;
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  float t = uTime;
  vec2 sway = vec2(sin(t * .31) + sin(t * .53 + 1.), cos(t * .27)) * .025;
  float ex = (1. - vUv.x) * uAspect;
  float et = 1. - vUv.y;
  float edge = min(ex, ex * .55 + et * .7);
  float n = fbm(p * 1.8 + sway + 4.);
  float n2 = fbm(p * 4.5 + sway * 2. + 9.);
  float m = smoothstep(.36, .1, edge + (n - .5) * .5 + (n2 - .5) * .22) * uFrame;
  float gap = smoothstep(.56, .78, fbm(p * 9. + sway * 3. + 2.)) * (1. - smoothstep(.75, 1., m));
  vec3 leaf = pow(uFoliage, vec3(2.2)) * (.5 + .8 * n2);
  leaf += pow(uGlow, vec3(2.2)) * .35 * smoothstep(.5, .9, n2) * m * (1. - m) * 4.;
  c = mix(c, leaf, m * (1. - gap * .85) * .97);
  c = aces(c * uExposure);
  c = pow(c, vec3(1. / 2.2));
  float l = dot(c, vec3(.299, .587, .114));
  c += uWarm * smoothstep(.35, 1., l) + uCool * smoothstep(.6, 0., l);
  c = mix(vec3(l), c, uSat);
  c = mix(c, c * c * (3. - 2. * c), .1);
  c = uLift + c * (1. - uLift);
  c *= 1. - .2 * pow(length((vUv - .5) * vec2(1.1, 1.)) * 1.3, 2.4);
  c = mix(c, uHaze, uFade);
  c += (hash(gl_FragCoord.xy + fract(t * 7.3) * 113.) - .5) * .015;
  gl_FragColor = vec4(c, 1.);
}`,Le=e=>{let t=p.clamp(e,0,1);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},L={id:`villa`,title:`Villa`,palette:{uSky:{cssVar:`--villa-sky`,label:`Sky`,fallback:T.golden.colors.sky},uHaze:{cssVar:`--villa-haze`,label:`Haze`,fallback:T.golden.colors.haze},uGlow:{cssVar:`--villa-sun`,label:`Sun`,fallback:T.golden.colors.sun},uPlaster:{cssVar:`--villa-plaster`,label:`Plaster`,fallback:`#f2f0eb`},uStone:{cssVar:`--villa-stone`,label:`Stone`,fallback:`#b29d82`},uWood:{cssVar:`--villa-wood`,label:`Wood`,fallback:`#8b5a39`},uFrame:{cssVar:`--villa-frame`,label:`Frames`,fallback:`#2b2c2e`},uGlass:{cssVar:`--villa-glass`,label:`Glass`,fallback:`#2a3236`},uLawn:{cssVar:`--villa-lawn`,label:`Lawn`,fallback:`#7aa24a`},uPaving:{cssVar:`--villa-paving`,label:`Paving`,fallback:`#dccbb0`},uFoliage:{cssVar:`--villa-foliage`,label:`Foliage`,fallback:`#22401f`}},params:[w,{key:`sun`,label:`Sun angle`,min:-3.14,max:3.14,step:.01,value:T.golden.sun},{key:`sunHeight`,label:`Sun height`,min:.04,max:.9,step:.01,value:T.golden.sunHeight},{key:`glass`,label:`Glass ratio`,min:.3,max:.95,step:.01,value:.72},{key:`overhang`,label:`Overhang`,min:.6,max:2.6,step:.05,value:1.3},{key:`floors`,label:`Floors`,min:1,max:2,step:1,value:2},{key:`stone`,label:`Stone wall`,min:0,max:1,step:1,value:1},{key:`cladding`,label:`Wood cladding`,min:0,max:1,step:1,value:1},{key:`balcony`,label:`Glass balconies`,min:0,max:1,step:1,value:1},{key:`leaves`,label:`Leaf shadows`,min:0,max:1,step:.05,value:.8},{key:`frame`,label:`Foliage frame`,min:0,max:1,step:.05,value:0},{key:`coastal`,label:`Coastal sea`,min:0,max:1,step:1,value:0},{key:`paved`,label:`Long front drive`,min:0,max:1,step:1,value:0},{key:`flightLength`,label:`Intro flight length`,min:1,max:8,step:.1,value:2.8},{key:`flightOrbit`,label:`Intro flight orbit`,min:-1.5,max:1.5,step:.01,value:0},{key:`flightRise`,label:`Intro flight rise`,min:0,max:1,step:.01,value:0},{key:`flightDolly`,label:`Intro flight dolly`,min:0,max:3,step:.05,value:1},{key:`haze`,label:`Haze`,min:0,max:3,step:.05,value:1},{key:`bloom`,label:`Bloom`,min:0,max:2,step:.05,value:1},{key:`exposure`,label:`Exposure`,min:.5,max:2,step:.05,value:1},{key:`glide`,label:`Camera glide`,min:0,max:2,step:.05,value:1}],fov:[38,58],travelPerScreen:0,creep:0,hover:{liquid:0,turn:0},resolution:1,antialias:!1,variants:{...fe({sky:`--villa-sky`,haze:`--villa-haze`,sun:`--villa-sun`}),coastal:{params:{coastal:1}}},setup({scene:s,camera:f,small:g,colors:_,pointer:fe,renderer:w}){f.near=.2,f.far=900,f.updateProjectionMatrix(),w.shadowMap.enabled=!0,w.shadowMap.type=1,w.shadowMap.autoUpdate=!1;let T=[],D=e=>(T.push(e),e),k=new c,A=new a(16777215,.004);k.fog=A;let j=new x(0,1,0),M={uTime:{value:0},uLeaves:{value:0},uLeafC:{value:new v},uLeafC2:{value:new v},uLeafT1:{value:new x(1,0,0)},uLeafT2:{value:new x(0,1,0)},uBoxC:{value:Array.from({length:E},()=>new oe)},uBoxH:{value:Array.from({length:E},()=>new x)},uBoxN:{value:0},uSunDir:{value:j},uSunCol:{value:new d},uMist:{value:0},uFogK:{value:1},uWin:{value:0}},ye=te.lights_fragment_begin.replace(je,`directLight.color *= villaLeaf;\n\t\t${je}`),N=e=>(e.onBeforeCompile=e=>{Object.assign(e.uniforms,M),e.vertexShader=`varying vec3 vVillaW, vVillaN;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 vW = vec4(transformed, 1.);
#ifdef USE_INSTANCING
vW = instanceMatrix * vW;
#endif
vVillaW = (modelMatrix * vW).xyz;
vVillaN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=De+e.fragmentShader.replace(`#include <aomap_fragment>`,Oe).replace(`#include <emissivemap_fragment>`,Ae).replace(`#include <lights_fragment_begin>`,`float villaLeaf = leafMask(vVillaW);\n${ye}`).replace(`#include <fog_fragment>`,ke)},e.customProgramCacheKey=()=>`villa`,D(e)),P=e=>(D(e.map),D(e.normalMap),D(e.roughnessMap),e),L={plaster:N(new r({...P(F(256,.5,Se)),roughness:1,normalScale:new v(.5,.5)})),stone:N(new r({...P(F(512,3.2,be)),roughness:1,normalScale:new v(1.3,1.3)})),wood:N(new r({...P(F(512,2.5,xe)),roughness:1})),paving:N(new r({...P(F(512,2,Ce)),roughness:1})),frame:N(new r({metalness:.55,roughness:.36})),glass:N(new n({roughness:.04,metalness:0,ior:1.5,specularIntensity:1,specularColor:new d(2.6,2.6,2.6),envMapIntensity:1.6})),rail:N(new n({transparent:!0,opacity:.3,depthWrite:!1,side:2,roughness:.04,ior:1.5,envMapIntensity:1.1}))},R=N(new r({...P(F(512,1.6,we)),roughness:1,normalScale:new v(.5,.5)})),Re=new u(D(I(new S(32,26).rotateX(-Math.PI/2).translate(-2,0,1),4.8)),R);Re.receiveShadow=!0;let z=new u(D(I(new S(40,26.6).rotateX(-Math.PI/2).translate(-2,.008,27.3),4.8)),R);z.receiveShadow=!0,z.visible=!1;let ze=N(new r({...P(F(256,2,Te)),roughness:1})),Be=new u(D(I(new S(1e3,800).rotateX(-Math.PI/2).translate(0,-.02,-260),3)),ze);Be.receiveShadow=!0;let Ve=new u(D(C([[-18.3,14.3,-12.3,-12],[-18.3,14.3,14,14.3],[-18.3,-18,-12,14],[14,14.3,-12,14]].map(([e,t,n,r])=>I(new ce(t-e,.16,r-n,2,.04).translate((e+t)/2,.05,(n+r)/2),O.paving)))),R);Ve.receiveShadow=Ve.castShadow=!0;let He=ge();for(let[e,t,n,r]of[[-50,30,-32,-30.6],[-50,30,40.6,42],[-50,-48.6,-30.6,40.6],[34.6,36,-30.6,40.6]])He.box(e,t,-.1,1.4,n,r);let Ue=new re,B={bark:[],olive:[],green:[]},We=7,V=()=>(We=We*16807%2147483647)/2147483647,H={bark:[],olive:[],green:[]},Ge=(e,t)=>t<-14||e>24,U=B,Ke=`olive`,W=me((e,t)=>(e===`bark`?U.bark:U[Ke]).push(t),V);for(let[e,t,n]of[[-23,-5,5.6],[-24,9,5],[-31,1,6],[17,-4,5.4],[19,7,5],[26,-16,6.2],[-14,-19,5.8],[3,19,4.6]])U=Ge(e,t)?H:B,W.olive(e,t,n);Ke=`green`,U=H;for(let e=-13;e<15;e+=5.4)W.tree(e+(V()-.5),0,-14-V(),9+V()*2.5,70,.17);for(let[e,t]of[[-42,-22],[-38,30],[28,-24],[30,24],[-20,34]])U=Ge(e,t)?H:B,W.tree(e,0,t,10+V()*2.5,70,.17);U=B;for(let e=-11;e<13;e+=1.9){let t=.75+V()*.35;W.bush(-18.42-t,0,e,t)}for(let e=-10;e<3;e+=1.6){let t=.6+V()*.3;W.bush(13.88-t,0,e,t)}for(let e=-12;e<14;e+=1.9){let t=.8+V()*.3;W.bush(e,0,-12.42-t,t)}let qe=_e(N(new r({map:D(de({hue:68,spread:30,sat:12,light:14,seed:9})),alphaTest:.4,alphaToCoverage:!0,roughness:.75,color:14081220})),!0),Je=_e(N(new r({map:D(de({hue:84,spread:30,sat:34,light:8,seed:3})),alphaTest:.4,alphaToCoverage:!0,roughness:.8,color:13820096})),!0),Ye=N(new r({map:D(ue(5917758)),roughness:.9}));for(let e of He.meshes(Je))D(e.geometry),Ue.add(D(e));let Xe=[];for(let[e,t]of[[B,null],[H,Xe]])for(let[n,r]of[[e.bark,Ye],[e.olive,qe],[e.green,Je]]){if(!n.length)continue;let e=C(n);for(let e of n)e.dispose();let i=new u(D(e),r);i.castShadow=i.receiveShadow=!0,k.add(i),t?.push(i)}let Ze=[{mat:qe,kind:`tree`,n:16},{mat:qe,kind:`tree`,n:22},{mat:Je,kind:`tree`,n:28}].map(({mat:e,n:t},n)=>{let r={bark:[],leaves:[]};me((e,t)=>r[e].push(t),V).tree(0,0,0,10,t,.3+.04*n);let i={bark:C(r.bark),leaves:C(r.leaves)};for(let e of[...r.bark,...r.leaves])e.dispose();return{...i,mat:e,mats:[],tints:[]}}),Qe=new e,$e=new x(0,1,0);for(let[e,n,r,i]of[[66,5.5,7,11],[96,7,8,13],[132,9,9,15]])for(let a of[0,1])for(let o=-2.3;o<.75;o+=n/e){let s=o+(V()-.5)*(n/e)*.8,c=e+a*8+(V()-.5)*7,l=.5+Math.cos(s)*c,u=-3+Math.sin(s)*c;if(l>-54&&l<40&&u>-36&&u<46||V()<.12)continue;let f=V()<.22?Ze[2]:Ze[Math.floor(V()*2)],p=(r+(i-r)*V())/10,m=.9+V()*.5;f.mats.push(new t().compose(new x(l,-p*1.8,u),Qe.setFromAxisAngle($e,V()*Math.PI*2),new x(p*m,p,p*m))),f.tints.push(new d().setRGB(.85+V()*.3,.88+V()*.24,.8+V()*.25))}for(let e of Ze)for(let[t,n]of[[e.bark,Ye],[e.leaves,e.mat]]){let r=new ae(D(t),n,e.mats.length);e.mats.forEach((e,t)=>r.setMatrixAt(t,e)),e.tints.forEach((e,t)=>r.setColorAt(t,e)),r.computeBoundingSphere(),k.add(r),Xe.push(r)}let et=new u(D(C([[-19.5,22,-12.8,70],[-70,-19.5,-6,70]].map(([e,t,n,r])=>I(new S(t-e,r-n).rotateX(-Math.PI/2).translate((e+t)/2,-.02,(n+r)/2),3)))),ze);et.receiveShadow=!0;let G=new u(D(C([[-19.5,22.4,-13.2,-12.8],[22,22.4,-12.8,70],[-70.2,-19.5,-6.2,-5.8],[-19.7,-19.3,-13,-6]].map(([e,t,n,r])=>I(new ce(t-e,.3,r-n,2,.05).translate((e+t)/2,.1,(n+r)/2),O.stone)))),L.stone);G.receiveShadow=G.castShadow=!0,k.add(Be,z,Ve,et,G);let tt=new u(D(C([[-15.4,-2.6,3.8,4.2],[-15.4,-2.6,9.2,9.6],[-15.4,-15,4.2,9.2],[-3,-2.6,4.2,9.2]].map(([e,t,n,r])=>I(new ee(t-e,.09,r-n).translate((e+t)/2,.015,(n+r)/2),O.paving)))),L.paving);tt.receiveShadow=tt.castShadow=!0;let K=new se(D(new S(12,5)),{color:12111056,textureWidth:g?512:1024,textureHeight:g?512:640,multisample:g?0:2,shader:pe()});D(K);let nt=K.onBeforeRender,rt=!1;K.onBeforeRender=(...e)=>{rt=!rt,rt&&nt.apply(K,e)};let it=K.material.uniforms.uTime;K.rotation.x=-Math.PI/2,K.position.set(-9,.03,6.7),k.add(Re,Ue,tt,K);let at={..._,uSunDir:{value:j},uHazeK:{value:1},uTime:M.uTime,uCoast:{value:0},uCam:{value:f.position}},ot=D(new l({vertexShader:Me,fragmentShader:Ne,uniforms:at,side:1,depthWrite:!1})),q=new u(D(new m(400,48,24)),ot);q.renderOrder=-1,q.frustumCulled=!1,k.add(q);let st=new c;st.add(new u(D(new m(100,48,24)),ot));let ct=D(new ie(w)),lt=null,J=new o(16777215,3.4);J.castShadow=!0;let Y=J.shadow;Y.mapSize.set(g?1024:2048,g?1024:2048),Object.assign(Y.camera,{left:-40,right:40,top:32,bottom:-32,near:20,far:220}),Y.camera.updateProjectionMatrix(),Y.bias=-4e-4,Y.normalBias=.025,Y.radius=4,J.target.position.set(-2,2,-1),k.add(J,J.target);let X=new h(16777215,16777215,.5),Z=new o(16777215,0);Z.target=J.target,k.add(X,Z);let ut=[],dt=e=>{for(let e of ut)k.remove(e),e.geometry.dispose();ut=[];let{parts:t,occ:n}=Ee(e);for(let e of ve){let n=t[e];if(!n.length)continue;if(e!==`glass`)for(let t of n)I(t,O[e]);let r=C(n);for(let e of n)e.dispose();if(!r)continue;let i=new u(r,L[e]);i.castShadow=e!==`rail`,i.receiveShadow=!0,e===`rail`&&(i.renderOrder=2),k.add(i),ut.push(i)}let r=Math.min(E,n.length/7);for(let e=0;e<r;e++)M.uBoxC.value[e].set(n[e*7],n[e*7+1],n[e*7+2],n[e*7+3]),M.uBoxH.value[e].set(n[e*7+4],n[e*7+5],n[e*7+6]);M.uBoxN.value=r},ft={type:i,minFilter:y,magFilter:y},Q=D(new ne(2,2,{...ft,depthBuffer:!0,samples:2})),pt=D(new ne(2,2,ft)),mt=D(new ne(2,2,ft)),ht=D(new S(2,2)),gt=(e,t)=>D(new l({vertexShader:Pe,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})),_t=e=>{let t=new u(ht,e);return t.frustumCulled=!1,t},vt=(e,t)=>{let n=gt(Fe,{uSrc:{value:e},uDir:{value:new v},uThresh:{value:t}}),r=new c;return r.add(_t(n)),{s:r,dir:n.uniforms.uDir.value}},yt=vt(Q.texture,.9),bt=vt(pt.texture,-1),xt=gt(Ie,{uMain:{value:Q.texture},uBloom:{value:mt.texture},uHaze:_.uHaze,uGlow:_.uGlow,uFoliage:_.uFoliage,uBloomK:{value:1},uFade:{value:0},uAspect:{value:1},uTime:{value:0},uExposure:{value:1},uFrame:{value:1},uSat:{value:1},uLift:{value:new x},uWarm:{value:new x},uCool:{value:new x}});s.add(_t(xt));let St=[[L.plaster,`uPlaster`],[L.stone,`uStone`],[L.wood,`uWood`],[L.paving,`uPaving`],[L.frame,`uFrame`],[L.glass,`uGlass`],[L.rail,`uGlass`],[R,`uPaving`],[ze,`uLawn`]],$=(e,t)=>{let n=_[e].value;return t.setRGB(n.x,n.y,n.z,b)},Ct=new x(0,1,0),wt=new x(-3.5,2.2,1.5),Tt=new x(-7,0,11),Et=new v,Dt=(e,t=0)=>le(f,fe,{pitch:t,base:g?new x(-9,e+.1,24):new x(-18,e,17),focus:g?new x(1.5,3.4,-2):new x(.5,3.4,-2.5),yaw:g?0:.14}),Ot=Dt(1.3),kt=Dt(2.8,-.07),At=``,jt=``,Mt=``;return{update(e){let{time:t,intro:n,params:r}=e,i=[`floors`,`glass`,`overhang`,`stone`,`cladding`,`balcony`].map(e=>r[e]).join();i!==At&&(At=i,dt(r),Mt=``);let a=r.sunHeight;j.set(-Math.sin(r.sun)*Math.cos(a),Math.sin(a),Math.cos(r.sun)*Math.cos(a));let o=he(r.light);J.position.copy(J.target.position).addScaledVector(j,100),Z.position.set(-j.x,.35,-j.z).multiplyScalar(50).add(J.target.position),Y.radius=o.softness,M.uLeafT1.value.crossVectors(j,Ct).normalize(),M.uLeafT2.value.crossVectors(M.uLeafT1.value,j),M.uLeafC.value.set(wt.dot(M.uLeafT1.value),wt.dot(M.uLeafT2.value)),M.uLeafC2.value.set(Tt.dot(M.uLeafT1.value),Tt.dot(M.uLeafT2.value)),M.uLeaves.value=r.leaves,M.uTime.value=t,at.uHazeK.value=r.haze;let s=r.coastal>.5;at.uCoast.value=+!!s,Be.visible=Ue.visible=!s,z.visible=r.paved>.5&&!s,Ve.visible=!z.visible,et.visible=G.visible=s;for(let e of Xe)e.visible=!s;for(let[e,t]of St)$(t,e.color);$(`uGlow`,J.color),M.uSunCol.value.copy(J.color),J.intensity=7.4*o.sunK*p.smoothstep(a,-.02,.12)*(1+.03*Math.sin(t*.4)+.015*Math.sin(t*1.1)),k.environmentIntensity=o.fill,$(`uSky`,X.color),$(`uLawn`,X.groundColor).lerp(J.color,.2).multiplyScalar(.8),X.intensity=o.bounce,Z.color.copy(X.groundColor).lerp(J.color,.5),Z.intensity=J.intensity*.06*o.bounce,it.value=t,L.glass.color.multiplyScalar(.18),L.glass.emissive.setRGB(1,.58,.26).multiplyScalar(1.5),M.uWin.value=o.windows,R.color.multiplyScalar(1.25),ze.color.multiplyScalar(1.15),$(`uHaze`,A.color);let c=Le(n/2.8);A.density=.0032*r.haze*o.fog+(1-c)*.03,M.uFogK.value=r.haze*o.fog,M.uMist.value=o.mist;let l=[r.coastal,r.sun,a,r.haze,...[`uSky`,`uHaze`,`uGlow`,`uFoliage`,`uLawn`].map(e=>_[e].value.toArray().join())].join(),u=w.getRenderTarget();if(l!==jt){jt=l;let e=ct.fromScene(st,0,.5,500);lt?.dispose(),lt=e,k.environment=e.texture,L.glass.envMap=L.rail.envMap=e.texture}let d=`${At}|${r.sun}|${a}|${r.coastal}`;d!==Mt&&(Mt=d,w.shadowMap.needsUpdate=!0),(s?kt:Ot)(e,r.glide),q.position.copy(f.position),w.getDrawingBufferSize(Et);let m=Math.max(2,Et.x),h=Math.max(2,Et.y);if(Q.width!==m||Q.height!==h){Q.setSize(m,h);let e=Math.max(2,Math.round(m/4)),t=Math.max(2,Math.round(h/4));pt.setSize(e,t),mt.setSize(e,t),yt.dir.set(1.5/e,0),bt.dir.set(0,1.5/t)}w.setRenderTarget(Q),w.clear(!0,!0,!1),w.render(k,f),w.setRenderTarget(pt),w.render(yt.s,f),w.setRenderTarget(mt),w.render(bt.s,f),w.setRenderTarget(u);let g=xt.uniforms;g.uAspect.value=f.aspect,g.uTime.value=t,g.uBloomK.value=r.bloom,g.uExposure.value=r.exposure*o.exposure,g.uSat.value=o.sat,g.uLift.value.fromArray(o.lift),g.uWarm.value.fromArray(o.warm),g.uCool.value.fromArray(o.cool),g.uFrame.value=r.frame,g.uFade.value=1-p.smoothstep(n,.05,1.1)},dispose(){for(let e of ut)e.geometry.dispose();lt?.dispose();for(let e of T)e.dispose();w.shadowMap.enabled=!1}}}};export{L as t};