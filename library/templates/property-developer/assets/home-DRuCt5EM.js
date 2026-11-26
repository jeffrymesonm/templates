import{$t as e,A as t,Dt as n,Fn as r,Ft as i,It as a,J as o,K as s,L as c,M as l,Mn as u,Nn as d,Ot as f,S as p,Tn as m,Tt as h,V as g,Vn as _,Y as v,_t as y,cr as b,d as x,ht as S,jn as C,lr as w,n as ee,pr as te,qt as T,t as ne,tt as re,ur as ie}from"./three.module-BtOiv6AT.js";import{t as E}from"./BufferGeometryUtils-BCwTizHk.js";import{t as D}from"./RoundedBoxGeometry-07rcVPj6.js";import{t as ae}from"./cameraRig-DZYJJrwO.js";import{a as oe,c as se,i as ce,n as O,o as le,r as ue,s as de,t as k,u as fe}from"./lightPresets-Cae86WMC.js";var A=40,pe=[`siding`,`brick`,`roof`,`trim`,`door`,`panel`,`concrete`,`paving`,`glass`],me={siding:2.4,brick:2.4,roof:2.4,trim:1,door:1,panel:2.4,concrete:2.4,paving:2.4,glass:1},j=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},M=(e,t,n)=>e+(t-e)*n,N=(e,t,n)=>{let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},P=(e,t)=>(e%t+t)%t,F=(e,t,n,r,i)=>{let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=P(a,n),f=P(a+1,n),p=P(o,r),m=P(o+1,r),h=N(d,p,i),g=N(f,p,i),_=N(d,m,i),v=N(f,m,i);return h+(g-h)*l+(_-h)*u+(h-g-_+v)*l*u},I=(e,t,n,r,i,a=4)=>{let o=0,s=.5,c=0;for(let l=0;l<a;l++)o+=s*F(e*n,t*r,n,r,i+l),c+=s,s*=.5,n*=2,r*=2;return o/c},L=(e,t,n)=>{let r=new l(e,t,t);return r.wrapS=r.wrapT=m,r.magFilter=S,r.minFilter=y,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=C),r.needsUpdate=!0,r},R=(e,t,n)=>{let r=e*e,i=new Uint8Array(r*4),a=new Uint8Array(r*4),o=new Uint8Array(r*4),s=new Float32Array(r);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let a=n((r+.5)/e,(t+.5)/e),c=t*e+r;for(let e=0;e<3;e++)i[c*4+e]=Math.round(Math.min(1,Math.max(0,a.c[e]))*255);i[c*4+3]=255,o[c*4+1]=Math.round(Math.min(1,Math.max(0,a.r))*255),o[c*4+3]=255,s[c]=a.h}for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=n*e+r,o=s[n*e+(r+1)%e]-s[n*e+(r-1+e)%e],c=s[(n+1)%e*e+r]-s[(n-1+e)%e*e+r],l=-o*t,u=-c*t,d=Math.hypot(l,u,1);a[i*4]=Math.round((l/d*.5+.5)*255),a[i*4+1]=Math.round((u/d*.5+.5)*255),a[i*4+2]=Math.round((1/d*.5+.5)*255),a[i*4+3]=255}return{map:L(i,e,!0),normalMap:L(a,e,!1),roughnessMap:L(o,e,!1)}},he=(e,t)=>{let n=t*12,r=Math.floor(n),i=n-r,a=N(r,3,11),o=I(e,t,4,96,12+r%4*3,3),s=I(e,t,64,64,14,2),c=M(1,.6,j(.8,1,i))*M(.92,1,j(0,.05,i)),l=(.95+.04*a)*(.97+.05*o)*(.97+.04*s)*c;return{c:[l,l,l*.99],h:(1-i)*.9+o*.03,r:.7+.15*s}},ge=(e,t)=>{let n=t*30,r=Math.floor(n),i=e*10+r%2*.5,a=P(Math.floor(i),10),o=i-Math.floor(i),s=n-r,c=I(e,t,48,48,61,3),l=j(.015,.045,Math.min(o,1-o))*j(.05,.14,Math.min(s,1-s)+(c-.5)*.04),u=N(a,P(r,30),62),d=N(a,P(r,30),63),f=(.5+.22*u)*(.86+.25*c),p=[f*M(1.02,.9,d),f*M(.86,.95,d),f*M(.8,.95,d)],m=.88+.1*c;return{c:[M(m,p[0],l),M(m*.98,p[1],l),M(m*.95,p[2],l)],h:l*(.7+.2*c),r:M(.97,.82,l)}},_e=(e,t)=>{let n=t*10,r=Math.floor(n),i=n-r,a=e*8+r%2*.5+(N(P(r,10),1,50)-.5)*.2,o=P(Math.floor(a),8),s=a-Math.floor(a),c=j(.006,.03,Math.min(s,1-s)),l=N(o,P(r,10),51),u=I(e,t,96,96,52,3),d=I(e,t,4,4,53,3),f=M(.5,1,j(0,.28,i))*M(.55,1,c),p=(.72+.4*l)*(.8+.35*u)*(.9+.2*d)*f;return{c:[p,p*.99,p*.97],h:(i*.7+u*.2)*M(.4,1,c),r:.82+.15*u}},ve=(e,t)=>{let n=e*4,r=t*4,i=n-Math.floor(n),a=r-Math.floor(r),o=Math.min(i,1-i),s=Math.min(a,1-a),c=j(0,.025,s),l=j(.07,.13,o)*j(.1,.18,s),u=I(e,t,32,32,91,2),d=(.9+.05*l+.02*u)*M(.55,1,c);return{c:[d,d,d],h:l*.6+c*.4,r:.55}},ye=(e,t)=>{let n=e*2,r=t*2,i=n-Math.floor(n),a=r-Math.floor(r),o=j(0,.006,Math.min(i,1-i))*j(0,.006,Math.min(a,1-a)),s=I(e,t,6,6,21,4),c=I(e,t,128,128,22,2),l=(.86+.08*N(Math.floor(n),Math.floor(r),23))*(.88+.18*s)*(.95+.08*c)*M(.6,1,o);return{c:[l,l*.99,l*.97],h:o*.6+c*.1,r:.8+.15*c}},be=(e,t)=>{let n=t*8,r=Math.floor(n),i=e*4+r%2*.5,a=i-Math.floor(i),o=n-r,s=j(0,.03,Math.min(a,1-a))*j(0,.05,Math.min(o,1-o)),c=N(P(Math.floor(i),4),P(r,8),41),l=I(e,t,64,64,42,3),u=(.84+.16*c)*(.9+.18*l)*M(.55,1,s);return{c:[u,u*.98,u*.95],h:s*(.8+.12*l),r:.75+.2*l}},xe=(e,t)=>{let n=I(e,t,128,128,101,2),r=I(e,t,8,8,102,4),i=(.78+.3*r)*(.85+.3*n);return{c:[i*.96,i,i*.86],h:n*.6+r*.2,r:.95}},z=(e,t)=>{let n=e.attributes.position,r=e.attributes.normal,i=e.attributes.uv;for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));o>=a&&o>=s?i.setXY(e,n.getX(e)/t,n.getZ(e)/t):a>=s?i.setXY(e,n.getZ(e)/t,n.getY(e)/t):i.setXY(e,n.getX(e)/t,n.getY(e)/t)}return e},Se=e=>{let t=Object.fromEntries(pe.map(e=>[e,[]])),n=[],i=(e,[r,i,a,o,s,c],l=.03,u=!0)=>{let d=i-r,f=o-a,p=c-s,m=Math.min(l,Math.min(d,f,p)*.45),h=m>.003?new D(d,f,p,2,m):new x(d,f,p);t[e].push(h.translate((r+i)/2,(a+o)/2,(s+c)/2)),u&&n.length<A*7&&n.push((r+i)/2,(a+o)/2,(s+c)/2,m,d/2,f/2,p/2)},a=(e,n,r,i,a,o,s,c)=>{t[e].push(new D(a,o,s,2,Math.min(.03,o*.4)).rotateX(c).translate(n,r,i))},o=(e,t,n,r,a,o,s,c,l=.01)=>{let u=t.at+t.dir*s,d=t.at+t.dir*c,f=Math.min(u,d),p=Math.max(u,d);i(e,t.axis===`z`?[n,r,a,o,f,p]:[f,p,a,o,n,r],l,!1)},s=(e,n,r,i,a,o)=>{let s=new T(r-n,a-i).rotateY((N(o,1,3)-.5)*.03).rotateX((N(o,2,7)-.5)*.016);e.axis===`x`?s.rotateY(e.dir>0?Math.PI/2:-Math.PI/2):e.dir<0&&s.rotateY(Math.PI);let c=e.at+e.dir*.014;t.glass.push(e.axis===`z`?s.translate((n+r)/2,(i+a)/2,c):s.translate(c,(i+a)/2,(n+r)/2))},c=e.shutters>.5,l=(e,t,n,r,i)=>{let a=t-r/2,l=t+r/2,u=.11,d=.032;o(`trim`,e,a-u,l+u,n+i,n+i+u+.04,0,.08),o(`trim`,e,a-u-.05,l+u+.05,n-.07,n,0,.1),o(`trim`,e,a-u,a,n,n+i,0,.065),o(`trim`,e,l,l+u,n,n+i,0,.065),s(e,a,l,n,n+i/2,Math.round(t*13+n*7)),s(e,a,l,n+i/2,n+i,Math.round(t*17+n*5+3)),o(`trim`,e,a,l,n+i/2-.035,n+i/2+.035,0,.05,.005),o(`trim`,e,a,l,n+i-.05,n+i,0,.04,.005),o(`trim`,e,a,l,n,n+.07,0,.04,.005),o(`trim`,e,a,a+.045,n,n+i,0,.04,.005),o(`trim`,e,l-.045,l,n,n+i,0,.04,.005),o(`trim`,e,t-d/2,t+d/2,n,n+i,0,.03,0),o(`trim`,e,a,l,n+i/4-d/2,n+i/4+d/2,0,.03,0),o(`trim`,e,a,l,n+3*i/4-d/2,n+3*i/4+d/2,0,.03,0),c&&(o(`door`,e,a-u-.46,a-u-.04,n-.02,n+i+.06,0,.045,.012),o(`door`,e,l+u+.04,l+u+.46,n-.02,n+i+.06,0,.045,.012))},u=(e,n,o,s,c,l,u,d)=>{let f=(c-s)/2,p=s+f,m=f*u,h=Math.atan(u),_=.16,v=new r;v.moveTo(s,l),v.lineTo(c,l),v.lineTo(p,l+m),v.closePath(),t[e].push(new g(v,{depth:o-n,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(o,0,0));let y=(f+d)/Math.cos(h),b=_/2/Math.cos(h),x=l+(m-d*u)/2+b,S=o-n+2*d;a(`roof`,(n+o)/2,x,p+(f+d)/2,S,_,y,h),a(`roof`,(n+o)/2,x,p-(f+d)/2,S,_,y,-h);for(let e of[n-d,o+d])a(`trim`,e,x-.06,p+(f+d)/2,.07,.3,y,h),a(`trim`,e,x-.06,p-(f+d)/2,.07,.3,y,-h);let C=l-d*u;return i(`trim`,[n-d,o+d,C-.24,C+.04,c+d-.06,c+d+.02],.02,!1),i(`trim`,[n-d,o+d,C-.24,C+.04,s-d-.02,s-d+.06],.02,!1),i(`roof`,[n-d,o+d,l+m+b-.04,l+m+b+.1,p-.16,p+.16],.05,!1),l+m},d=.55,f=2.9,p=e.floors>1.5,m=d+(p?2:1)*f,_=h.clamp(e.roofPitch,.3,1.2),v=e.brick>.5?`brick`:`siding`,y=4.4,b={axis:`z`,at:0,dir:1},S={axis:`x`,at:-7,dir:-1};i(`concrete`,[-7.05,y,0,d,-7,.05],.02),i(v,[-7,y-.01,d,m,-6.99,0],.02),i(`trim`,[-7.07,-6.88,d,m,-.12,.07],.01,!1),i(`trim`,[-7,y,m-.26,m,0,.035],.005,!1),i(`trim`,[-7.035,-7,m-.26,m,-7,0],.005,!1);let C=u(v,-7,y,-7,0,m,_,.5);i(`brick`,[-7.85,-6.98,0,m-.4,-4.3,-2.7],.02),i(`brick`,[-7.75,-7.02,m-.4,C+1,-4.1,-2.9],.02),i(`concrete`,[-7.84,-6.93,C+1,C+1.12,-4.2,-2.8],.02,!1);let w=e.porch>.5;for(let e of[-5.4,-2.2,1.4,3.2])Math.abs(e+.6)>1&&l(b,e,d+.75,.95,1.55);i(`door`,[-1.1,-.1,d,d+2.1,-.02,.05],.01,!1);for(let[e,t]of[[d+.2,d+.95],[d+1.15,d+1.9]])i(`door`,[-1,-.65,e,t,.05,.075],.01,!1),i(`door`,[-.55,-.2,e,t,.05,.075],.01,!1);if(o(`trim`,b,-1.24,-1.1,d,d+2.1,0,.07),o(`trim`,b,-.1,.04,d,d+2.1,0,.07),o(`trim`,b,-1.28,.08,d+2.1,d+2.28,0,.09),i(`trim`,[-.28,-.2,d+1,d+1.08,.05,.12],.01,!1),p)for(let e of[-5.4,-2.2,1,3.2])l(b,e,d+f+.55,.95,1.5);if(l(S,-6,d+.75,.9,1.5),l(S,-1.2,d+.75,.9,1.5),p&&(l(S,-6,d+f+.55,.9,1.4),l(S,-1.2,d+f+.55,.9,1.4)),w){let e=2.6;i(`concrete`,[-3.4,2,0,d,0,e],.03);for(let t=1;t<=3;t++)i(`concrete`,[-1.7,.5,d*(t-1)/3,d*t/3,e,e+.36*(4-t)],.02);let t=Math.min(d+f+.55-.15,m-.1),n=.4,r=e+.3,o=t-n-.32;for(let t of[-3.15,-1.95,.75,1.75])i(`trim`,[t-.16,t+.16,d,d+.22,e-.42,e-.1],.02,!1),i(`trim`,[t-.1,t+.1,d+.22,o-.12,e-.36,e-.16],.015,!1),i(`trim`,[t-.15,t+.15,o-.12,o,e-.41,e-.11],.015,!1);i(`trim`,[-3.45,2.05,o,o+.3,e-.44,e-.06],.02,!1);let s=Math.atan(n/r);a(`roof`,-.7,t-n/2+.08,r/2,5.9,.14,Math.hypot(r,n),s),i(`trim`,[-3.65,2.25,t-n-.14,t-n+.06,r-.04,r+.02],.02,!1)}else for(let e=1;e<=3;e++)i(`concrete`,[-1.5,.3,d*(e-1)/3,d*e/3,0,0+.36*(4-e)],.02);if(e.garage>.5){let e=y,t=.6,n=2.95,r=.42;i(`concrete`,[e,10,0,.12,-6,t],.01),i(v,[e,10,.12,n,-6,t-r],.02),i(v,[e,4.8,.12,n,t-r,t],.02),i(v,[9.6,10,.12,n,t-r,t],.02),i(v,[4.8,9.6,2.4,n,t-r,t],.02),i(`panel`,[4.8,9.6,0,2.4,t-.3,t-.22],.006,!1),i(`trim`,[4.66,4.8,0,2.4,t,t+.05],.01,!1),i(`trim`,[9.6,9.74,0,2.4,t,t+.05],.01,!1),i(`trim`,[4.66,9.74,2.4,2.56,t,t+.06],.01,!1),i(`trim`,[9.88,10.06,.12,n,t-.12,t+.06],.01,!1),i(`trim`,[e,10,n-.22,n,t,t+.035],.005,!1),(t- -6)/2,u(v,e,10,-6,t,n,Math.max(.08,Math.min(_,(m-.5*_-.3-n)/3.6999999999999997)),.4),i(`concrete`,[4.6,9.8,-.03,.02,t,22],.004,!1)}if(i(`concrete`,[-1.6,.4,-.03,.012,w?3.68:1.1,10.5],.004,!1),i(`concrete`,[-160,160,-.03,.016,10.5,12.3],.004,!1),i(`concrete`,[-160,160,0,.15,12.3,12.5],.03,!1),i(`concrete`,[-160,160,0,.15,20.5,20.7],.03,!1),i(`concrete`,[-160,160,-.03,.016,20.7,23],.004,!1),e.fence>.5)for(let[e,t]of[[-40,-1.75],[.55,4.5]]){i(`trim`,[e,t,.22,.3,9.62,9.68],0,!1),i(`trim`,[e,t,.72,.8,9.62,9.68],0,!1);for(let n=e+.04;n<t-.08;n+=.17)i(`trim`,[n,n+.085,.04,.98,9.68,9.71],0,!1);i(`trim`,[e-.06,e+.06,0,1.08,9.58,9.72],.01,!1),i(`trim`,[t-.06,t+.06,0,1.08,9.58,9.72],.01,!1)}return{parts:t,occ:n}},Ce=`
#define NB ${A}
uniform vec4 uBoxC[NB];
uniform vec3 uBoxH[NB];
uniform int uBoxN;
uniform vec3 uLeafT1, uLeafT2;
uniform vec2 uLeafC, uLeafC2;
uniform float uTime, uLeaves, uMist, uFogK, uWin;
uniform vec3 uSunDir, uSunCol;
varying vec3 vHomeW, vHomeN;
float vhash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f); return mix(mix(vhash(i), vhash(i + vec2(1., 0.)), u.x), mix(vhash(i + vec2(0., 1.)), vhash(i + vec2(1., 1.)), u.x), u.y); }
float vfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .9375; }
float sdHome(vec3 p){
  float d = p.y;
  for (int i = 0; i < NB; i++) {
    if (i >= uBoxN) break;
    vec4 c = uBoxC[i];
    vec3 q = abs(p - c.xyz) - uBoxH[i] + c.w;
    d = min(d, length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - c.w);
  }
  return d;
}
float homeAO(vec3 p, vec3 n){
  if (length(p.xz - vec2(1.5, -3.)) > 24.) return 1.;
  float o = 0.;
  for (int i = 1; i <= 4; i++) {
    float h = .1 * float(i * i);
    o += clamp((h - sdHome(p + n * h)) / h, 0., 1.) * (1.2 - .2 * float(i));
  }
  return clamp(1. - o * .32, 0., 1.);
}
float leafMask(vec3 w){
  if (uLeaves <= 0. || length(w.xz - vec2(1.5, -3.)) > 30.) return 1.;
  vec2 q = vec2(dot(w, uLeafT1), dot(w, uLeafT2));
  float wob = (vnoise(q * .3 + 3.) - .5) * .6;
  float env = max(smoothstep(1.05, .4, length((q - uLeafC) / vec2(7., 4.2)) + wob), smoothstep(1.05, .4, length((q - uLeafC2) / vec2(6., 3.6)) + wob) * .8);
  vec2 sway = vec2(sin(uTime * .7) + sin(uTime * 1.13 + 1.), cos(uTime * .9) + sin(uTime * .53)) * .05;
  float holes = vfbm(q * 1.05 + sway + vec2(uTime * .015, 0.));
  float leaf = smoothstep(.4, .6, holes + (vnoise(q * 4.2 + sway * 2.5) - .5) * .22);
  return 1. - uLeaves * env * leaf * .9;
}
`,we=`
float ambientOcclusion = homeAO(vHomeW, normalize(vHomeN));
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_ENVMAP ) && defined( STANDARD )
  float dotNVo = saturate( dot( geometryNormal, geometryViewDir ) );
  reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVo, ambientOcclusion, material.roughness );
#endif
reflectedLight.directDiffuse *= mix(1., ambientOcclusion, .3);
`,Te=`
#ifdef USE_FOG
vec3 hV = vHomeW - cameraPosition;
float hD = length(hV);
float hAz = max(dot(normalize(hV.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
vec3 hFog = mix(fogColor, uSunCol, .25 + .5 * pow(hAz, 3.));
float hNear = 1. - exp(-fogDensity * fogDensity * hD * hD);
float hFar = 1. - exp(-max(length(vHomeW.xz - vec2(1.5, -3.)) - 12., 0.) * .012 * uFogK);
float hMist = uMist * smoothstep(20., 130., hD) * exp(-max(vHomeW.y, 0.) * .28);
float hK = 1. - (1. - hNear) * (1. - hFar * .95) * (1. - hMist * .75);
gl_FragColor.rgb = mix(gl_FragColor.rgb, hFog * (1. + .06 * hMist), clamp(hK, 0., 1.));
#endif`,Ee=`#include <emissivemap_fragment>
totalEmissiveRadiance *= uWin * (.08 + step(.45, vhash(vec2(floor((vHomeW.x + vHomeW.z) * .55), floor(vHomeW.y / 2.9)) + 7.3)));`,De=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ]`,Oe=`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,ke=`
uniform vec3 uSky, uHaze, uGlow, uFoliage, uLawn, uSunDir;
uniform float uHazeK, uTime;
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
  float cloud = smoothstep(.54, .86, cl / .9375) * smoothstep(.08, .26, d.y) * (1. - smoothstep(.5, .85, d.y));
  c = mix(c, mix(haze * 1.12, glow * 1.2, .3 + .5 * az) * (.86 + .22 * smoothstep(.62, .92, cl / .9375)), cloud * .62);
  vec3 hill = lin(uFoliage) * 1.8;
  vec3 blue = mix(hor, lin(uSky), .28);
  vec3 mist = mix(hor, glow, .12 + .25 * az);
  vec3 rimC = glow * pow(az, 4.);
  float sa = atan(uSunDir.x, uSunDir.z);
  c = hills(c, d.y, a, 1.7, 9., .08, .07, mix(hill, blue, clamp(.9 * uHazeK, 0., .97)), mist, rimC, sa, .6);
  c = mix(c, mix(hor, mix(lin(uLawn) * .5, haze * .6, .4), .5), smoothstep(-.005, -.08, d.y));
  gl_FragColor = vec4(c, 1.);
}`,Ae=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,je=`
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
}`,Me=`
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
}`,Ne=e=>{let t=h.clamp(e,0,1);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},B={id:`home`,title:`Home`,palette:{uSky:{cssVar:`--home-sky`,label:`Sky`,fallback:k.golden.colors.sky},uHaze:{cssVar:`--home-haze`,label:`Haze`,fallback:k.golden.colors.haze},uGlow:{cssVar:`--home-sun`,label:`Sun`,fallback:k.golden.colors.sun},uSiding:{cssVar:`--home-siding`,label:`Siding`,fallback:`#c9cfcf`},uBrick:{cssVar:`--home-brick`,label:`Brick`,fallback:`#c98f76`},uRoof:{cssVar:`--home-roof`,label:`Roof`,fallback:`#55565a`},uTrim:{cssVar:`--home-trim`,label:`Trim`,fallback:`#f3f1ec`},uDoor:{cssVar:`--home-door`,label:`Door and shutters`,fallback:`#2d3b48`},uGlass:{cssVar:`--home-glass`,label:`Glass`,fallback:`#2a3236`},uLawn:{cssVar:`--home-lawn`,label:`Lawn`,fallback:`#75a046`},uPaving:{cssVar:`--home-paving`,label:`Paving`,fallback:`#d8d1c4`},uFoliage:{cssVar:`--home-foliage`,label:`Foliage`,fallback:`#22401f`}},params:[O,{key:`sun`,label:`Sun angle`,min:-3.14,max:3.14,step:.01,value:k.golden.sun},{key:`sunHeight`,label:`Sun height`,min:.04,max:.9,step:.01,value:k.golden.sunHeight},{key:`floors`,label:`Floors`,min:1,max:2,step:1,value:2},{key:`roofPitch`,label:`Roof pitch`,min:.3,max:1.2,step:.05,value:.7},{key:`brick`,label:`Brick walls`,min:0,max:1,step:1,value:0},{key:`porch`,label:`Front porch`,min:0,max:1,step:1,value:1},{key:`garage`,label:`Garage`,min:0,max:1,step:1,value:1},{key:`fence`,label:`Picket fence`,min:0,max:1,step:1,value:1},{key:`shutters`,label:`Shutters`,min:0,max:1,step:1,value:1},{key:`leaves`,label:`Leaf shadows`,min:0,max:1,step:.05,value:.8},{key:`frame`,label:`Foliage frame`,min:0,max:1,step:.05,value:0},{key:`haze`,label:`Haze`,min:0,max:3,step:.05,value:1},{key:`bloom`,label:`Bloom`,min:0,max:2,step:.05,value:1},{key:`exposure`,label:`Exposure`,min:.5,max:2,step:.05,value:1},{key:`glide`,label:`Camera glide`,min:0,max:2,step:.05,value:1}],fov:[38,58],travelPerScreen:0,creep:0,hover:{liquid:.25,turn:0},resolution:1,antialias:!1,variants:{...ce({sky:`--home-sky`,haze:`--home-haze`,sun:`--home-sun`}),brick:{params:{brick:1,shutters:0}},bungalow:{params:{floors:1,roofPitch:.55}}},setup({scene:l,camera:m,small:y,colors:D,pointer:ce,renderer:O}){m.near=.2,m.far=900,m.updateProjectionMatrix(),O.shadowMap.enabled=!0,O.shadowMap.type=1,O.shadowMap.autoUpdate=!1;let k=[],j=e=>(k.push(e),e),M=new u,N=new s(16777215,.004);M.fog=N;let P=new w(0,1,0),F={uTime:{value:0},uLeaves:{value:0},uLeafC:{value:new b},uLeafC2:{value:new b},uLeafT1:{value:new w(1,0,0)},uLeafT2:{value:new w(0,1,0)},uBoxC:{value:Array.from({length:A},()=>new ie)},uBoxH:{value:Array.from({length:A},()=>new w)},uBoxN:{value:0},uSunDir:{value:P},uSunCol:{value:new p},uMist:{value:0},uFogK:{value:1},uWin:{value:0}},I=ee.lights_fragment_begin.replace(De,`directLight.color *= homeLeaf;\n\t\t${De}`),L=e=>(e.onBeforeCompile=e=>{Object.assign(e.uniforms,F),e.vertexShader=`varying vec3 vHomeW, vHomeN;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 hW = vec4(transformed, 1.);
#ifdef USE_INSTANCING
hW = instanceMatrix * hW;
#endif
vHomeW = (modelMatrix * hW).xyz;
vHomeN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=Ce+e.fragmentShader.replace(`#include <aomap_fragment>`,we).replace(`#include <emissivemap_fragment>`,Ee).replace(`#include <lights_fragment_begin>`,`float homeLeaf = leafMask(vHomeW);\n${I}`).replace(`#include <fog_fragment>`,Te)},e.customProgramCacheKey=()=>`home`,j(e)),B=e=>(j(e.map),j(e.normalMap),j(e.roughnessMap),e),Pe=B(R(512,2,be)),Fe=B(R(512,1.4,ye)),V={siding:L(new a({...B(R(512,2.4,he)),roughness:1,normalScale:new b(1.1,1.1)})),brick:L(new a({...B(R(512,2.6,ge)),roughness:1})),roof:L(new a({...B(R(512,2.8,_e)),roughness:1,normalScale:new b(1.2,1.2)})),trim:L(new a({roughness:.55})),door:L(new a({roughness:.42})),panel:L(new a({...B(R(256,1.6,ve)),roughness:1})),concrete:L(new a({...Fe,roughness:1})),paving:L(new a({...Pe,roughness:1})),glass:L(new i({roughness:.04,metalness:0,ior:1.5,specularIntensity:1,specularColor:new p(2.6,2.6,2.6),envMapIntensity:1.7}))},Ie=L(new a({...B(R(256,2,xe)),roughness:1})),Le=new f(j(z(new T(1e3,800).rotateX(-Math.PI/2).translate(0,-.02,-260),3)),Ie);Le.receiveShadow=!0;let Re=L(new a({...Fe,roughness:1,color:6974318})),ze=L(new a({color:14868180,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),Be=new f(j(z(new T(320,8).rotateX(-Math.PI/2).translate(0,.004,16.5),6)),Re);Be.receiveShadow=!0;let Ve=[];for(let e=-160;e<160;e+=9)Ve.push(new T(3,.14).rotateX(-Math.PI/2).translate(e,.006,16.5));let He=new f(j(E(Ve)),ze);He.receiveShadow=!0;let Ue=L(new a({color:2895924,metalness:.5,roughness:.45})),H=[];for(let[e,n,r]of[[-44,12,1],[6,12,1],[30,12,1],[54,12,1],[78,12,1],[-6,21,-1],[18,21,-1],[42,21,-1],[66,21,-1]])H.push(new t(.05,.075,6,10).translate(e,3,n)),H.push(new x(.07,.07,1.4).translate(e,5.95,n+r*.7)),H.push(new x(.28,.1,.6).translate(e,5.88,n+r*1.3));let We=new f(j(E(H)),Ue);We.castShadow=We.receiveShadow=!0;let Ge={bark:[],leaves:[]},Ke=13,U=()=>(Ke=Ke*16807%2147483647)/2147483647,W=le((e,t)=>Ge[e].push(t),U);for(let[e,t,n]of[[-15,-10,10],[13,-11,11],[-6,-13.5,12],[-27,-5,9],[22,-6,9.5],[-38,2,10],[-44,-10,11]])W.tree(e,0,t,n,70,.17);for(let e of[-34,12,24,36,48,62,76])W.tree(e+U()-.5,0,11.4,7.6+U()*1.6,60,.17);for(let e of[-30,30,54,78])W.tree(e,0,22.2,7.4+U()*1.6,60,.17);for(let[e,t,n]of[[-40,-1.75,1.7],[.55,4.5,1.5]])for(let r=e+1;r<t;r+=n){let n=.6+U()*.3;W.bush(h.clamp(r,e+n+.12,t-n-.12),0,9.44-n,n)}for(let e of[-6.4,-5.2,-4.1,2.75,3.75])W.bush(e,.4,.625,.46);let qe=fe(L(new a({map:j(se({hue:80,spread:32,sat:32,light:8})),alphaTest:.4,alphaToCoverage:!0,roughness:.78,color:13951170})),!0),Je=L(new a({map:j(oe(4405037)),roughness:.9}));for(let[e,t]of[[Ge.bark,Je],[Ge.leaves,qe]]){let n=E(e);for(let t of e)t.dispose();let r=new f(j(n),t);r.castShadow=r.receiveShadow=!0,M.add(r)}let Ye=de();for(let[e,t,n,r,i]of[[-53,30,-16,-14.2,1.8],[-53,-51.2,-14.2,9.4,1.8],[28.2,30,-14.2,9.4,1.8],[-6.9,-3.6,.15,1.1,.9],[2.2,4.3,.15,1.1,.9]])Ye.box(e,t,-.05,i-.05,n,r);for(let e of Ye.meshes(qe))j(e.geometry),M.add(j(e));M.add(Le,Be,He,We);let Xe=[16,22,28].map((e,t)=>{let n={bark:[],leaves:[]};le((e,t)=>n[e].push(t),U).tree(0,0,0,10,e,.3+.03*t);let r={bark:E(n.bark),leaves:E(n.leaves)};for(let e of[...n.bark,...n.leaves])e.dispose();return{...r,mats:[],tints:[]}}),Ze=new e,Qe=new w(0,1,0);for(let[e,t,r,i]of[[50,5,10,16],[78,6.5,12,19],[118,8,14,23]])for(let a of[0,1])for(let o=-2.2;o<.66;o+=t/e){let s=o+(U()-.5)*(t/e)*.8,c=e+a*7+(U()-.5)*6,l=1.5+Math.cos(s)*c,u=-3+Math.sin(s)*c;if(u>4||l>-58&&l<34&&u>-20||U()<.12)continue;let d=(r+(i-r)*U())/10,f=.8+U()*.5,m=Xe[Math.floor(U()*Xe.length)];m.mats.push(new n().compose(new w(l,-d*2.2,u),Ze.setFromAxisAngle(Qe,U()*Math.PI*2),new w(d*f,d,d*f))),m.tints.push(new p().setRGB(.85+U()*.3,.88+U()*.24,.8+U()*.25))}for(let e of Xe)for(let[t,n]of[[e.bark,Je],[e.leaves,qe]]){let r=new re(j(t),n,e.mats.length);e.mats.forEach((e,t)=>r.setMatrixAt(t,e)),e.tints.forEach((e,t)=>r.setColorAt(t,e)),r.computeBoundingSphere(),M.add(r)}let $e=[],et=[];for(let[e,t]of[[-1.95,64],[-1.62,70],[-1.3,62],[-.98,68],[-.62,63],[-.3,71],[.05,66]]){let n=8+U()*4,i=7+U()*2,a=5.4+U()*1.4,o=i*(.32+U()*.12),s=Math.round(U())*(Math.PI/2)+(U()-.5)*.3,c=1.5+Math.cos(e)*t,l=-3+Math.sin(e)*t,u=new r;u.moveTo(-i/2-.5,0),u.lineTo(i/2+.5,0),u.lineTo(0,o),u.closePath(),$e.push(z(new x(n,a,i).translate(0,a/2,0).rotateY(s).translate(c,0,l),me.siding)),et.push(z(new g(u,{depth:n+.8,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(n/2+.4,a,0).rotateY(s).translate(c,0,l),me.roof))}for(let[e,t]of[[$e,V.siding],[et,V.roof]]){M.add(new f(j(E(e)),t));for(let t of e)t.dispose()}let tt={...D,uSunDir:{value:P},uHazeK:{value:1},uTime:F.uTime},nt=j(new d({vertexShader:Oe,fragmentShader:ke,uniforms:tt,side:1,depthWrite:!1})),G=new f(j(new _(400,48,24)),nt);G.renderOrder=-1,G.frustumCulled=!1,M.add(G);let rt=new u;rt.add(new f(j(new _(100,48,24)),nt));let it=j(new ne(O)),at=null,K=new c(16777215,3.4);K.castShadow=!0;let q=K.shadow;q.mapSize.set(y?1024:2048,y?1024:2048),Object.assign(q.camera,{left:-38,right:38,top:30,bottom:-30,near:20,far:200}),q.camera.updateProjectionMatrix(),q.bias=-4e-4,q.normalBias=.025,q.radius=4,K.target.position.set(1.5,2.5,-2),M.add(K,K.target);let J=new v(16777215,16777215,.5),Y=new c(16777215,0);Y.target=K.target,M.add(J,Y);let X=[],ot=e=>{for(let e of X)M.remove(e),e.geometry.dispose();X=[];let{parts:t,occ:n}=Se(e);for(let e of pe){let n=t[e];if(!n.length)continue;if(e!==`glass`)for(let t of n)z(t,me[e]);if(n.some(e=>!e.index)){let e=n.map(e=>e.index?e.toNonIndexed():e);for(let t of n)e.includes(t)||t.dispose();n=e}let r=E(n);for(let e of n)e.dispose();if(!r)continue;let i=new f(r,V[e]);i.castShadow=i.receiveShadow=!0,M.add(i),X.push(i)}let r=Math.min(A,n.length/7);for(let e=0;e<r;e++)F.uBoxC.value[e].set(n[e*7],n[e*7+1],n[e*7+2],n[e*7+3]),F.uBoxH.value[e].set(n[e*7+4],n[e*7+5],n[e*7+6]);F.uBoxN.value=r},st={type:o,minFilter:S,magFilter:S},Z=j(new te(2,2,{...st,depthBuffer:!0,samples:2})),ct=j(new te(2,2,st)),Q=j(new te(2,2,st)),lt=j(new T(2,2)),ut=(e,t)=>j(new d({vertexShader:Ae,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})),dt=e=>{let t=new f(lt,e);return t.frustumCulled=!1,t},ft=(e,t)=>{let n=ut(je,{uSrc:{value:e},uDir:{value:new b},uThresh:{value:t}}),r=new u;return r.add(dt(n)),{s:r,dir:n.uniforms.uDir.value}},pt=ft(Z.texture,.9),mt=ft(ct.texture,-1),ht=ut(Me,{uMain:{value:Z.texture},uBloom:{value:Q.texture},uHaze:D.uHaze,uGlow:D.uGlow,uFoliage:D.uFoliage,uBloomK:{value:1},uFade:{value:0},uAspect:{value:1},uTime:{value:0},uExposure:{value:1},uFrame:{value:1},uSat:{value:1},uLift:{value:new w},uWarm:{value:new w},uCool:{value:new w}});l.add(dt(ht));let gt=[[V.siding,`uSiding`],[V.brick,`uBrick`],[V.roof,`uRoof`],[V.trim,`uTrim`],[V.door,`uDoor`],[V.panel,`uTrim`],[V.concrete,`uPaving`],[V.paving,`uPaving`],[V.glass,`uGlass`],[Ie,`uLawn`]],$=(e,t)=>{let n=D[e].value;return t.setRGB(n.x,n.y,n.z,C)},_t=new w(0,1,0),vt=new w(-4.5,3,.5),yt=new w(-6,0,7),bt=new b,xt=ae(m,ce,{base:y?new w(-11,1.9,34):new w(-21.5,1.9,21.5),focus:y?new w(2.5,3.6,-2):new w(2,3.6,-2.5),yaw:y?0:.14}),St=``,Ct=``,wt=``;return{update(e){let{time:t,intro:n,params:r}=e,i=[`floors`,`roofPitch`,`brick`,`porch`,`garage`,`fence`,`shutters`].map(e=>r[e]).join();i!==St&&(St=i,ot(r),wt=``);let a=r.sunHeight;P.set(-Math.sin(r.sun)*Math.cos(a),Math.sin(a),Math.cos(r.sun)*Math.cos(a));let o=ue(r.light);K.position.copy(K.target.position).addScaledVector(P,100),Y.position.set(-P.x,.35,-P.z).multiplyScalar(50).add(K.target.position),q.radius=o.softness,F.uLeafT1.value.crossVectors(P,_t).normalize(),F.uLeafT2.value.crossVectors(F.uLeafT1.value,P),F.uLeafC.value.set(vt.dot(F.uLeafT1.value),vt.dot(F.uLeafT2.value)),F.uLeafC2.value.set(yt.dot(F.uLeafT1.value),yt.dot(F.uLeafT2.value)),F.uLeaves.value=r.leaves,F.uTime.value=t,tt.uHazeK.value=r.haze;for(let[e,t]of gt)$(t,e.color);$(`uGlow`,K.color),F.uSunCol.value.copy(K.color),K.intensity=7.4*o.sunK*h.smoothstep(a,-.02,.12)*(1+.03*Math.sin(t*.4)+.015*Math.sin(t*1.1)),M.environmentIntensity=o.fill,$(`uSky`,J.color),$(`uLawn`,J.groundColor).lerp(K.color,.2).multiplyScalar(.8),J.intensity=o.bounce,Y.color.copy(J.groundColor).lerp(K.color,.5),Y.intensity=K.intensity*.06*o.bounce,V.glass.color.multiplyScalar(.18),V.glass.emissive.setRGB(1,.58,.26).multiplyScalar(2.4),F.uWin.value=o.windows,Ie.color.multiplyScalar(1.15),$(`uHaze`,N.color);let s=Ne(n/2.8);N.density=.0032*r.haze*o.fog+(1-s)*.03,F.uFogK.value=r.haze*o.fog,F.uMist.value=o.mist;let c=[r.sun,a,r.haze,...[`uSky`,`uHaze`,`uGlow`,`uFoliage`,`uLawn`].map(e=>D[e].value.toArray().join())].join(),l=O.getRenderTarget();if(c!==Ct){Ct=c;let e=it.fromScene(rt,0,.5,500);at?.dispose(),at=e,M.environment=e.texture,V.glass.envMap=e.texture}let u=`${St}|${r.sun}|${a}`;u!==wt&&(wt=u,O.shadowMap.needsUpdate=!0),xt(e,r.glide),G.position.copy(m.position),O.getDrawingBufferSize(bt);let d=Math.max(2,bt.x),f=Math.max(2,bt.y);if(Z.width!==d||Z.height!==f){Z.setSize(d,f);let e=Math.max(2,Math.round(d/4)),t=Math.max(2,Math.round(f/4));ct.setSize(e,t),Q.setSize(e,t),pt.dir.set(1.5/e,0),mt.dir.set(0,1.5/t)}O.setRenderTarget(Z),O.clear(!0,!0,!1),O.render(M,m),O.setRenderTarget(ct),O.render(pt.s,m),O.setRenderTarget(Q),O.render(mt.s,m),O.setRenderTarget(l);let p=ht.uniforms;p.uAspect.value=m.aspect,p.uTime.value=t,p.uBloomK.value=r.bloom,p.uExposure.value=r.exposure*o.exposure,p.uSat.value=o.sat,p.uLift.value.fromArray(o.lift),p.uWarm.value.fromArray(o.warm),p.uCool.value.fromArray(o.cool),p.uFrame.value=r.frame,p.uFade.value=1-h.smoothstep(n,.05,1.1)},dispose(){for(let e of X)e.geometry.dispose();at?.dispose();for(let e of k)e.dispose();O.shadowMap.enabled=!1}}}};export{B as t};