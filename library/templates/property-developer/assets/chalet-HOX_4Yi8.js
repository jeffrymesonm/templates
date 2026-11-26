import{$t as e,Dt as t,Fn as n,Ft as r,In as i,It as a,J as o,K as s,L as c,M as l,Mn as u,Nn as d,Ot as f,S as p,Tn as m,Tt as h,V as g,Vn as _,X as v,Y as y,Yt as b,_t as x,cr as S,d as ee,f as te,ht as C,jn as w,lr as T,p as ne,pr as E,qt as re,t as D,tt as ie,ur as O}from"./three.module-BtOiv6AT.js";import{n as k,t as A}from"./BufferGeometryUtils-BCwTizHk.js";import{t as ae}from"./RoundedBoxGeometry-07rcVPj6.js";import{t as j}from"./cameraRig-DZYJJrwO.js";import{a as M,c as N,i as P,n as F,o as oe,r as se,t as I,u as L}from"./lightPresets-Cae86WMC.js";var R=40,z=-4,ce=[`clad`,`stone`,`roof`,`frame`,`deck`,`paving`,`glass`,`rail`],le={clad:2.4,stone:2.4,roof:2.4,frame:1,deck:2.4,paving:1.6,glass:1,rail:1},B=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},V=(e,t,n)=>e+(t-e)*n,H=(e,t,n)=>{let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},U=(e,t)=>(e%t+t)%t,W=(e,t,n,r,i)=>{let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=U(a,n),f=U(a+1,n),p=U(o,r),m=U(o+1,r),h=H(d,p,i),g=H(f,p,i),_=H(d,m,i),v=H(f,m,i);return h+(g-h)*l+(_-h)*u+(h-g-_+v)*l*u},G=(e,t,n,r,i,a=4)=>{let o=0,s=.5,c=0;for(let l=0;l<a;l++)o+=s*W(e*n,t*r,n,r,i+l),c+=s,s*=.5,n*=2,r*=2;return o/c},K=(e,t)=>{let n=t+3,r=(e+n)*.7071,i=(e-n)*.7071,a=Math.hypot(e,n),o=(W(e*.025,t*.025,4096,4096,3)-.5)*5+(W(e*.08,t*.08,4096,4096,4)-.5)*1.4,s=B(-12,30,r)*B(5,80,i)*30+Math.max(o,0),c=Math.min(o,0)-B(45,150,i)*B(20,-25,r)*60-Math.max(0,-i-14)*.05-B(-8,-50,r)*(46+o*3);return B(18,30,a)*s+B(26,40,a)*c},q=(e,t,n)=>{let r=new l(e,t,t);return r.wrapS=r.wrapT=m,r.magFilter=C,r.minFilter=x,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=w),r.needsUpdate=!0,r},J=(e,t,n)=>{let r=e*e,i=new Uint8Array(r*4),a=new Uint8Array(r*4),o=new Uint8Array(r*4),s=new Float32Array(r);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let a=n((r+.5)/e,(t+.5)/e),c=t*e+r;for(let e=0;e<3;e++)i[c*4+e]=Math.round(Math.min(1,Math.max(0,a.c[e]))*255);i[c*4+3]=255,o[c*4+1]=Math.round(Math.min(1,Math.max(0,a.r))*255),o[c*4+3]=255,s[c]=a.h}for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=n*e+r,o=s[n*e+(r+1)%e]-s[n*e+(r-1+e)%e],c=s[(n+1)%e*e+r]-s[(n-1+e)%e*e+r],l=-o*t,u=-c*t,d=Math.hypot(l,u,1);a[i*4]=Math.round((l/d*.5+.5)*255),a[i*4+1]=Math.round((u/d*.5+.5)*255),a[i*4+2]=Math.round((1/d*.5+.5)*255),a[i*4+3]=255}return{map:q(i,e,!0),normalMap:q(a,e,!1),roughnessMap:q(o,e,!1)}},ue=(e,t)=>{let n=e*14,r=Math.floor(n),i=n-r,a=H(U(r,14),5,31),o=H(U(r,14),6,33)-.5,s=G(e,t,96,3,32+r%5*3,3),c=G(e,t,220,2,38+r%3,2),l=G(e,t,24,6,37,2),u=G(e,t,64,64,34,2),d=B(0,.06,Math.min(i,1-i)),f=(.74+.36*a)*(.76+.4*s)*(.88+.2*c)*(.92+.12*l)*(.97+.04*u)*V(.3,1,d);return{c:[f*(1+.1*o),f*.96,f*(.9-.14*o)],h:d*.8+s*.14+c*.06,r:.72+.2*u}},de=(e,t)=>ue(t,e),fe=(e,t)=>{let n=t*9,r=Math.floor(n),i=U(r,9),a=4+Math.floor(H(i,2,71)*3),o=e*a+H(i,3,72),s=U(Math.floor(o),a),c=o-Math.floor(o),l=n-r,u=G(e,t,40,40,73,4),d=G(e,t,12,12,74,3),f=B(.02,.1,Math.min(c*a*.5,(1-c)*a*.5,l,1-l)+(d-.5)*.12),p=H(s,i,75),m=H(s,i,76),h=(.62+.36*p)*(.82+.3*u),g=.42+.1*u;return{c:[V(g,h*V(1.04,.94,m),f),V(g*.98,h*V(.97,.96,m),f),V(g*.95,h*V(.88,.98,m),f)],h:f*(.6+.4*d)+u*.15,r:V(1,.86,f)}},pe=(e,t)=>{let n=e*10,r=n-Math.floor(n),i=1-B(0,.035,Math.abs(r-.5)-.465),a=G(e,t,48,48,81,3),o=G(e,t,20,2,82,3),s=(.86+.1*o+.04*a)*(1+.16*i);return{c:[s,s,s*1.01],h:i*.9+a*.03,r:.5+.2*o}},me=(e,t)=>{let n=G(e,t,64,64,42,3),r=G(e,t,6,6,43,3),i=(.8+.2*r)*(.9+.16*n);return{c:[i,i*.98,i*.95],h:n*.4+r*.3,r:.8+.15*n}},he=(e,t)=>{let n=G(e,t,5,5,51,4),r=G(e,t,18,18,52,3),i=G(e,t,96,96,53,2),a=B(.62,.7,G(e,t,9,9,54,3)),o=(.7+.3*n)*(.9+.14*i)*V(.7,1,B(.3,.45,r));return{c:[o*V(1,.9,a),o*V(.99,.92,a),o*V(.96,.6,a)],h:r*.6+i*.15,r:.85+.1*i}},ge=(e,t)=>{let n=G(e,t,128,128,101,2),r=G(e,t,8,8,102,4),i=B(.5,.8,G(e,t,3,3,103,3)),a=(.74+.34*r)*(.82+.34*n);return{c:[a*V(.94,1.08,i),a,a*V(.84,.7,i)],h:n*.6+r*.2,r:.95}},_e=(e,t)=>{let n=e.attributes.position,r=e.attributes.normal,i=e.attributes.uv;for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));o>=a&&o>=s?i.setXY(e,n.getX(e)/t,n.getZ(e)/t):a>=s?i.setXY(e,n.getZ(e)/t,n.getY(e)/t):i.setXY(e,n.getX(e)/t,n.getY(e)/t)}return e},ve=(e,t)=>{let n=e.attributes.position,r=e.attributes.uv;for(let e=0;e<n.count;e++)r.setXY(e,n.getZ(e)/t,(n.getX(e)+n.getY(e))/t);return e},ye=e=>{let t=Object.fromEntries(ce.map(e=>[e,[]])),r=[],a=(e,[n,i,a,o,s,c],l=.03,u=!0)=>{let d=i-n,f=o-a,p=c-s,m=Math.min(l,Math.min(d,f,p)*.45),h=m>.003?new ae(d,f,p,2,m):new ee(d,f,p);t[e].push(h.translate((n+i)/2,(a+o)/2,(s+c)/2)),u&&r.length<R*7&&r.push((n+i)/2,(a+o)/2,(s+c)/2,m,d/2,f/2,p/2)},o=(e,n,r,i,a,o,s,c)=>{t[e].push(new ae(a,o,s,2,Math.min(.03,o*.4)).rotateZ(c).translate(n,r,i))},s=(e,n,r,i,a,o,s,c)=>{let l=Math.hypot(i-n,a-r);t[e].push(new ee(l,c,s-o).rotateZ(Math.atan2(a-r,i-n)).translate((n+i)/2,(r+a)/2,(o+s)/2))},c=(e,t,n,r,i,o,s,c,l=.01)=>{let u=t.at+t.dir*s,d=t.at+t.dir*c,f=Math.min(u,d),p=Math.max(u,d);a(e,t.axis===`z`?[n,r,i,o,f,p]:[f,p,i,o,n,r],l,!1)},l=(e,n,r,i,a,o)=>{let s=new re(r-n,a-i).rotateY((H(o,1,3)-.5)*.03).rotateX((H(o,2,7)-.5)*.016);e.axis===`x`?s.rotateY(e.dir>0?Math.PI/2:-Math.PI/2):e.dir<0&&s.rotateY(Math.PI);let c=e.at+e.dir*.02;t.glass.push(e.axis===`z`?s.translate((n+r)/2,(i+a)/2,c):s.translate(c,(i+a)/2,(n+r)/2))},u=(e,t,n,r,i,a,o)=>{let s=(n-t)/a;for(let n=0;n<a;n++)l(e,t+s*n,t+s*(n+1),r,i,o+n);for(let n=0;n<=a;n++)c(`frame`,e,t+s*n-.06,t+s*n+.06,r,i,0,.1,.005);c(`frame`,e,t-.06,n+.06,r-.08,r,0,.12,.005),c(`frame`,e,t-.06,n+.06,i,i+.1,0,.12,.005)},d=(e,t,n,r,i,o)=>{let s=Math.max(1,Math.round((n-t)/1.3)),c=(n-t)/s,l=(t,n,i,o,s,c)=>a(c,e===`x`?[t,n,i,o,r-s,r+s]:[r-s,r+s,i,o,t,n],c===`rail`?0:.01,!1);l(t,n,i,i+.07,.05,`frame`),l(t,n,i+o,i+o+.05,.04,`frame`);for(let e=0;e<s;e++)l(t+c*e+.015,t+c*(e+1)-.015,i+.07,i+o,.01,`rail`)},f=1.1,p=f+3.1,m=h.clamp(e.roofPitch,.7,1.4),_=5*m,v=Math.atan(m),y={axis:`z`,at:0,dir:1},b={axis:`x`,at:-5,dir:-1};a(`stone`,[-5.06,5.06,0,f,-9.06,.06],.02),a(`clad`,[-5,5,f,p,-9,0],.01);let x=new n;x.moveTo(-5,p),x.lineTo(5,p),x.lineTo(0,p+_),x.closePath(),t.clad.push(new g(x,{depth:9,bevelEnabled:!1}).translate(0,0,-9));let S=.9,te=1.9,C=.3,w=(5+S)/Math.cos(v),T=C/2/Math.cos(v),ne=p+(_-S*m)/2+T,E=-9.9,D=0+te,ie=(E+D)/2;o(`roof`,0-(5+S)/2,ne,ie,w,C,D-E,v),o(`roof`,0+(5+S)/2,ne,ie,w,C,D-E,-v),a(`roof`,[-.2,.2,p+_+2*T-.12,p+_+2*T+.04,E,D],.05,!1);for(let e of[D-.05,E+.05])o(`frame`,0-(5+S)/2,ne-.14,e,w,.42,.1,v),o(`frame`,0+(5+S)/2,ne-.14,e,w,.42,.1,-v);let O=p-S*m;a(`frame`,[-5-S-.08,-5-S+.04,O-.38,O+.08,E,D],.01,!1),a(`frame`,[5+S-.04,5+S+.08,O-.38,O+.08,E,D],.01,!1);for(let e of[0+te-.5,.6])s(`frame`,-5-S*.7,p-S*.7*m-.2,0,p+_-.2,e-.09,e+.09,.22),s(`frame`,5+S*.7,p-S*.7*m-.2,0,p+_-.2,e-.09,e+.09,.22);let k=p+.22,A=p+_-.6/Math.cos(v),j=(A-k)/m,M=new n;M.moveTo(0-j,k),M.lineTo(0+j,k),M.lineTo(0,A),M.closePath(),t.glass.push(new i(M).translate(0,0,.02)),a(`frame`,[-4.9,4.9,p-.06,k,0,.14],.01,!1),s(`frame`,0-j-.06,k,0,A+.08,0,.1,.13),s(`frame`,0+j+.06,k,0,A+.08,0,.1,.13);for(let e of[-2/3,-1/3,0,1/3,2/3]){let t=0+e*j,n=A-Math.abs(t-0)*m;n-k>.3&&a(`frame`,[t-.05,t+.05,k,n,0,.08],0,!1)}let N=k+(A-k)*.42,P=(A-N)/m;a(`frame`,[0-P,0+P,N-.04,N+.04,0,.07],0,!1),u(y,-4.3,4.3,f+.08,p-.16,4,11),c(`frame`,b,-9,0,f-.04,f+.1,0,.07,.005),c(`frame`,b,-.16,.02,f,p,0,.08,.005),c(`frame`,b,-9.02,-8.84,f,p,0,.08,.005);for(let[e,t,n]of[[-2.6,-1,21],[-8.1,-6.5,23]])u(b,e,t,f+.62,p-.42,2,n),c(`frame`,b,e-.16,t+.16,f+.44,f+.54,0,.2,.01);u(b,-5.05,-3.95,f+.04,p-.42,1,25),c(`frame`,b,-5.05,-3.95,f+1.95,f+2.03,0,.09,.005);for(let e=1;e<=4;e++)a(`stone`,[-5.06-.34*(5-e),-5.06,0,f*e/4,-5.25,-3.75],.02,e===1);let F=2.1,oe=2.9,se=p+_*(1-(F-0)/5)+1.1;if(a(`stone`,[F,oe,p,se,-6,-5.2],.02,!1),a(`frame`,[F-.1,oe+.1,se,se+.1,-6.1,-5.1],.01,!1),e.deck>.5){let e=-6.2,t=5.4,n=3.6;a(`stone`,[e,t,0,f-.2,0,n-.12],.02),a(`deck`,[e-.05,t+.05,f-.2,f,-.02,n],.01),d(`x`,e+.05,-4.05,n-.08,f,1.05),d(`x`,-2.45,t-.05,n-.08,f,1.05),d(`z`,.15,n-.15,e+.08,f,1.05);for(let e=1;e<=4;e++)a(`stone`,[-3.95,-2.55,0,f*e/4,n,n+.34*(5-e)],.02,e===1)}if(e.annex>.5){let e=10.6,t=-7.8,n=-1.4,r=2.8;a(`stone`,[5,e,0,r,t,n],.02),a(`roof`,[5.95,e+.35,r,r+.24,t-.35,n+.4],.03,!1),a(`frame`,[5.95,e+.35,r-.14,r,n+.36,n+.44],.01,!1),a(`clad`,[6.3,e-.7,.02,2.35,n,n+.06],.01,!1),a(`frame`,[6.2,e-.6,2.35,2.47,n,n+.1],.01,!1)}let I=41,L=()=>(I=I*16807%2147483647)/2147483647;for(let e=0;e<15;e++){let n=e/14,r=-3.25-n*8.5-Math.sin(n*3)*1.6,i=5.5+n*12,a=.8+L()*.35,o=.55+L()*.25;t.paving.push(new ae(a,.14,o,2,.05).rotateY((L()-.5)*.8).translate(r+(L()-.5)*.3,K(r,i)+.02,i))}for(let e=0;e<7;e++){let n=-12.3+e%2*.45;for(;n<-6.5;){let r=Math.min(.75+L()*.55,-6.3-n);t.paving.push(new ae(r-.05,.12,.8,2,.035).translate(n+r/2,.03+L()*.02,-1.2+e*.86+.4)),n+=r}}return a(`stone`,[-12.85,-12.3,-.3,.36,-1.5,5.3],.04),a(`stone`,[-12.85,-8.6,-.3,.36,4.85,5.3],.04),{parts:t,occ:r,eave:[0,p+_,m,5+S],eaveZ:[E,D]}},be=(e,t,n,r,i,a,o=22,s=4,c=!1)=>{let l=T;e.limb(new l(n,r-.3,i),new l(n,r+a*.9,i),a*.017,a*.003);let u=.55+.45*t(),d=a*(.15+.05*t()),f=Math.max(c?6:8,Math.round(o*(c?.8:.5)*(.75+.25*u)));for(let o=0;o<f;o++){let p=.1+o/f*.84+(t()-.5)*.5/f,m=d*(1-(p-.1)/.9)**1.45+a*.008,h=Math.max(3,Math.round(m/a*(c?20:24)*u)),g=r+a*p,_=[new l(n,g-m*.2,i),m*1.05,m*.5],v=t()*Math.PI*2;for(let r=0;r<h;r++){let o=v+r/h*Math.PI*2+(t()-.5)*.7,u=Math.cos(o),d=Math.sin(o),f=m*(.5+.6*t()),p=new l(n,g,i),y=new l(n+u*f*.55,g-f*.12,i+d*f*.55),b=new l(n+u*f,g-f*(.5+.25*t()),i+d*f);c||(e.limb(p,y,a*.004,a*.0022),e.limb(y,b,a*.0022,a*9e-4)),e.branch(p.clone().lerp(y,.25),y,b,f*(.85+.25*t())*(.6+.4*Math.min(s/3,1)),_),e.branch(p,p.clone().lerp(y,.6),y.clone().lerp(b,.3),f*.6,_)}}if(c)return;let p=[new l(n,r+a*.9,i),a*.03,a*.08];e.foliage(new l(n,r+a*.9,i),a*.01,a*.05,4,a*.04,p,1.4,void 0,e.cells.SPRUCE)},xe=`
#define NB ${R}
uniform vec4 uBoxC[NB];
uniform vec3 uBoxH[NB];
uniform int uBoxN;
uniform float uTime, uMist, uFogK, uWin, uSnowK, uLake;
uniform vec3 uSunDir, uSunCol, uSnowCol;
uniform vec4 uEave;
uniform vec2 uEaveZ;
varying vec3 vChW, vChN;
float vhash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f); return mix(mix(vhash(i), vhash(i + vec2(1., 0.)), u.x), mix(vhash(i + vec2(0., 1.)), vhash(i + vec2(1., 1.)), u.x), u.y); }
float vfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .9375; }
float sdChalet(vec3 p){
  float d = p.y;
  for (int i = 0; i < NB; i++) {
    if (i >= uBoxN) break;
    vec4 c = uBoxC[i];
    vec3 q = abs(p - c.xyz) - uBoxH[i] + c.w;
    d = min(d, length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - c.w);
  }
  return d;
}
float chaletAO(vec3 p, vec3 n){
  if (length(p.xz - vec2(1.5, -3.)) > 24.) return 1.;
  float o = 0.;
  for (int i = 1; i <= 4; i++) {
    float h = .1 * float(i * i);
    o += clamp((h - sdChalet(p + n * h)) / h, 0., 1.) * (1.2 - .2 * float(i));
  }
  return clamp(1. - o * .32, 0., 1.);
}
`,Se=`
float ambientOcclusion = chaletAO(vChW, normalize(vChN));
float eDx = abs(vChW.x - uEave.x);
float eUnder = uEave.y - eDx * uEave.z - vChW.y;
if (eDx < uEave.w && vChW.z > uEaveZ.x && vChW.z < uEaveZ.y && eUnder > -.04) ambientOcclusion *= mix(.4, 1., smoothstep(0., 1.8, eUnder));
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_ENVMAP ) && defined( STANDARD )
  float dotNVo = saturate( dot( geometryNormal, geometryViewDir ) );
  reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVo, ambientOcclusion, material.roughness );
#endif
reflectedLight.directDiffuse *= mix(1., ambientOcclusion, .3);
`,Ce=`#include <color_fragment>
if (uLake > .5 && vChW.y < ${z.toFixed(1)}) discard;
#ifdef CH_GROUND
float gTurf = vfbm(vChW.xz * .045);
diffuseColor.rgb *= mix(vec3(1.1, 1.02, .78), vec3(.82, .94, .98), gTurf) * (.85 + .3 * vnoise(vChW.xz * .21 + 4.));
float gRock = max(smoothstep(.2, .42, 1. - normalize(vChN).y), smoothstep(.66, .82, vnoise(vChW.xz * .12 + 7.)) * .85);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.21, .2, .185) * (.7 + .6 * vnoise(vChW.xz * 1.7)), gRock);
#endif
float chSnow = uSnowK * smoothstep(.36, .62, normalize(vChN).y + (vfbm(vChW.xz * .45) - .5) * .42);
diffuseColor.rgb = mix(diffuseColor.rgb, uSnowCol * (.92 + .1 * vnoise(vChW.xz * 3.)), chSnow);
#ifdef CH_GROUND
diffuseColor.rgb *= mix(1., .88 + .18 * vnoise(vChW.xz * .3 + 2.), chSnow);
diffuseColor.rgb = mix(diffuseColor.rgb, uSnowCol * vec3(.78, .88, .98), uLake * smoothstep(${(z+.7).toFixed(2)}, ${(z+.15).toFixed(2)}, vChW.y) * .75);
#endif`,we=`#include <metalnessmap_fragment>
metalnessFactor *= 1. - chSnow;
roughnessFactor = mix(roughnessFactor, .75, chSnow);`,Te=`#include <normal_fragment_maps>
normal = normalize(mix(normal, nonPerturbedNormal, chSnow * .85));`,Ee=`
#ifdef USE_FOG
vec3 hV = vChW - cameraPosition;
float hD = length(hV);
float hAz = max(dot(normalize(hV.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
vec3 hFog = mix(fogColor, uSunCol, .25 + .5 * pow(hAz, 3.));
float hNear = 1. - exp(-fogDensity * fogDensity * hD * hD);
float hFar = 1. - exp(-max(length(vChW.xz - vec2(1.5, -3.)) - 20., 0.) * .006 * uFogK);
float hMist = uMist * smoothstep(20., 130., hD) * exp(-max(vChW.y + 20., 0.) * .03);
float hK = 1. - (1. - hNear) * (1. - hFar * .95) * (1. - hMist * .75);
#ifdef CH_LEAF
hFog = mix(fogColor * vec3(.7, .85, .98), uSunCol, .06 + .1 * pow(hAz, 3.));
hK = min(hK, .78);
#endif
gl_FragColor.rgb = mix(gl_FragColor.rgb, hFog * (1. + .06 * hMist), clamp(hK, 0., 1.));
#endif`,De=`#include <emissivemap_fragment>
float wPane = vhash(vec2(floor(vChW.x * .48 + .5) + floor(vChW.z * .5), floor((vChW.y - 1.1) / 3.1)) + 7.3);
float wGrad = .6 + .4 * smoothstep(9., 2., vChW.y);
totalEmissiveRadiance *= max(uWin * (.2 + .8 * step(.25, wPane)) * wGrad * (.75 + .45 * vnoise(vChW.xy * .6 + vChW.zy * .6)), .045 * (.4 + wPane) * wGrad);`,Oe=`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,ke=`
uniform vec3 uSky, uHaze, uGlow, uFoliage, uMeadow, uSnow, uSunDir, uCam;
uniform float uHazeK, uTime, uSnowK, uLake;
varying vec3 vDir;
vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
float h1(float x){ return fract(sin(x * 127.1) * 43758.5453); }
float n1(float x){ float i = floor(x), f = fract(x); f = f * f * (3. - 2. * f); return mix(h1(i), h1(i + 1.), f); }
float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h2(i), h2(i + vec2(1., 0.)), f.x), mix(h2(i + vec2(0., 1.)), h2(i + vec2(1., 1.)), f.x), f.y); }
float fbm(float x){ float v = 0., w = .5; for (int i = 0; i < 5; i++) { v += w * n1(x); x = x * 2.07 + 17.3; w *= .5; } return v / .96875; }
float ridge(float x){ float r = 1. - abs(2. * n1(x * .8 + 3.1) - 1.); return pow(fbm(x) * .6 + r * r * .4, 1.4); }
vec3 range(vec3 c, float y, float a, float f, float o, float b, float h, vec3 col, vec3 mist, vec3 snowC, float snowLo, vec3 rimC, float sa, float soft){
  float r = b + h * ridge(a * f + o);
  float under = r - y;
  if (under < -soft) return c;
  float s = (ridge((a + .01) * f + o) - ridge((a - .01) * f + o)) / .02;
  float lit = clamp(-s * sign(sin(sa - a)) * 1.5, -1., 1.);
  float rv = ridge(a * f + o);
  float cap = h * (.1 + .12 * uSnowK) * smoothstep(snowLo, snowLo + .25, rv) + 1e-4;
  float nn = n2(vec2(a * f * 14. + o, y * 30.)) * .7 + n2(vec2(a * f * 50., y * 110.)) * .3;
  float sn = (1. - smoothstep(cap * .3, cap, under * (.7 + .6 * nn))) * smoothstep(snowLo, snowLo + .25, rv);
  vec3 m = mix(col * (1. + .1 * lit), snowC * (.9 + .16 * lit), sn);
  m = mix(m, mist, smoothstep(h * .12, h * .85, under) * .5);
  m += rimC * exp(-max(under, 0.) / .003) * max(lit + .4, 0.);
  return mix(c, m, smoothstep(-soft, soft, under));
}
vec3 skyCol(vec3 d){
  vec3 haze = lin(uHaze), glow = lin(uGlow), sky = lin(uSky);
  float az = max(dot(normalize(d.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
  vec3 hor = mix(haze, glow, .2 + .45 * pow(az, 3.));
  vec3 c = mix(hor, sky, pow(smoothstep(-.02, .55, d.y), .6));
  float g = max(dot(d, uSunDir), 0.);
  c += glow * (pow(g, 6.) * .35 + pow(g, 60.) * 1.2 + smoothstep(.9993, .9997, g) * 12.);
  vec2 cq = d.xz / (d.y + .06) * .35 + uTime * vec2(.012, .004);
  float cl = 0., ca = .5;
  for (int i = 0; i < 4; i++) { vec2 ip = floor(cq), fp = fract(cq); fp = fp * fp * (3. - 2. * fp); float hv = mix(mix(h1(dot(ip, vec2(1., 57.))), h1(dot(ip + vec2(1., 0.), vec2(1., 57.))), fp.x), mix(h1(dot(ip + vec2(0., 1.), vec2(1., 57.))), h1(dot(ip + vec2(1., 1.), vec2(1., 57.))), fp.x), fp.y); cl += ca * hv; cq = cq * 2.1 + vec2(1.7, 9.2); ca *= .5; }
  float cloud = smoothstep(.54, .86, cl / .9375) * smoothstep(.12, .3, d.y) * (1. - smoothstep(.5, .85, d.y));
  c = mix(c, mix(haze * 1.12, glow * 1.2, .3 + .5 * az) * (.86 + .22 * smoothstep(.62, .92, cl / .9375)), cloud * .55);
  float a = atan(d.x, -d.z);
  float sa = atan(uSunDir.x, -uSunDir.z);
  vec3 rimC = glow * pow(az, 4.) * .5;
  vec3 snow = lin(uSnow) * .82;
  float hk = clamp(uHazeK, 0., 2.);
  vec3 far = sky * .42 + haze * .1 + lin(uFoliage) * .2;
  if (uLake > .5) {
    vec3 veil = mix(hor, glow, .15 * az);
    c = range(c, d.y, a, 1.25, 4., 0., .1, mix(far, veil, clamp(.45 * hk, 0., .8)), veil, mix(snow * (.8 + .2 * az), veil, .3 * hk), .26 - .1 * uSnowK, rimC, sa, .0025);
    vec3 midL = sky * .3 + haze * .06 + lin(uFoliage) * .35;
    c = range(c, d.y, a, 2.3, 9., 0., .06, mix(midL, veil, clamp(.38 * hk, 0., .8)), veil, mix(snow * .86, veil, .22 * hk), .34 - .12 * uSnowK, rimC, sa, .002);
    vec3 shoreL = lin(uFoliage) * 1.05 + sky * .07;
    c = range(c, d.y, a, 4.6, 15., 0., .022, mix(shoreL, veil, clamp(.24 * hk, 0., .7)), mix(hor, veil, .5), mix(snow * .9, veil, .14 * hk), .62 - .2 * uSnowK, rimC, sa, .0015);
    return c;
  }
  c = range(c, d.y, a, 1.6, 2., 0., .36, mix(far, hor, .16 * hk), mix(hor, far, .35), mix(snow * (.72 + .2 * az), hor, .2 * hk), .32 - .12 * uSnowK, rimC, sa, .004);
  vec3 midC = sky * .3 + lin(uFoliage) * .5;
  c = range(c, d.y, a, 2.6, 7., -.005, .2, mix(midC, hor, .24 * hk), mix(hor, haze, .3), mix(snow * .85, hor, .2 * hk), .45 - .2 * uSnowK, rimC, sa, .003);
  vec3 nearC = lin(uFoliage) * 1.15 + sky * .06;
  c = range(c, d.y, a, 4.5, 13., -.02, .1, mix(nearC, hor, .26 * hk), mix(hor, haze, .4), mix(snow * .9, hor, .16 * hk), 1.2 - .9 * uSnowK, rimC, sa, .0025);
  c = mix(c, mix(hor, lin(uMeadow) * .5, .2), smoothstep(-.04, -.25, d.y));
  return c;
}
float ripple(vec2 p){ return n2(p * .05 + uTime * vec2(.018, .011)) * .7 + n2(p * .11 + uTime * vec2(-.026, .02)) * .3; }
vec3 lake(vec3 d){
  float t = (uCam.y - ${z.toFixed(1)}) / max(-d.y, 1e-4);
  vec2 p = uCam.xz + d.xz * t;
  float h0 = ripple(p);
  vec2 gr = vec2(ripple(p + vec2(.8, 0.)) - h0, ripple(p + vec2(0., .8)) - h0);
  float k = .3 / (1. + t * .008);
  vec3 n = normalize(vec3(-gr.x * k, 1., -gr.y * k));
  vec3 r = reflect(d, n);
  r.y = max(r.y, .0004);
  float fres = .02 + .98 * pow(1. - clamp(dot(n, -d), 0., 1.), 5.);
  vec3 sky = lin(uSky), haze = lin(uHaze);
  vec3 deep = (sky * .45 + lin(uFoliage) * .55) * .2;
  vec3 c = mix(deep, skyCol(r) * .72, clamp(fres * .9, 0., 1.));
  float az = max(dot(normalize(d.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
  vec3 hor = mix(haze, lin(uGlow), .2 + .45 * pow(az, 3.));
  return mix(c, hor * .92, (1. - exp(-t * .0005 * uHazeK)) * .45);
}
void main(){
  vec3 d = normalize(vDir);
  vec3 c = skyCol(d);
  if (uLake > .5 && d.y < 0.) c = mix(c, lake(d), smoothstep(0., -.0015, d.y));
  gl_FragColor = vec4(c, 1.);
}`,Ae=`
uniform float uTime, uScale;
attribute float aS;
varying float vA;
void main(){
  vec3 p = position;
  p.y = fract(p.y - uTime * (.022 + .02 * aS));
  p.x = fract(p.x + uTime * .005 + sin(uTime * .7 + aS * 40.) * .004);
  p.z = fract(p.z + cos(uTime * .5 + aS * 31.) * .003);
  vec3 w = vec3(-25., -1., -15.) + p * vec3(40., 23., 40.);
  vec4 mv = modelViewMatrix * vec4(w, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uScale * (.55 + .8 * aS) / max(-mv.z, .1);
  vA = smoothstep(0., .06, p.y) * smoothstep(1., .9, p.y) * smoothstep(1.5, 4., -mv.z);
}`,je=`
uniform vec3 uCol;
uniform float uFall;
varying float vA;
void main(){
  float a = smoothstep(.5, .1, length(gl_PointCoord - .5)) * vA * uFall;
  if (a < .01) discard;
  gl_FragColor = vec4(uCol, a * .85);
}`,Me=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,Ne=`
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
}`,Pe=`
uniform sampler2D uMain, uBloom;
uniform vec3 uHaze;
uniform float uBloomK, uFade, uTime, uExposure, uSat;
uniform vec3 uLift, uWarm, uCool;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
vec3 aces(vec3 x){ return clamp((x * (2.51 * x + .03)) / (x * (2.43 * x + .59) + .14), 0., 1.); }
void main(){
  vec3 c = texture2D(uMain, vUv).rgb;
  c += texture2D(uBloom, vUv).rgb * .35 * uBloomK;
  c = aces(c * uExposure);
  c = pow(c, vec3(1. / 2.2));
  float l = dot(c, vec3(.299, .587, .114));
  c += uWarm * smoothstep(.35, 1., l) + uCool * smoothstep(.6, 0., l);
  c = mix(vec3(l), c, uSat);
  c = mix(c, c * c * (3. - 2. * c), .1);
  c = uLift + c * (1. - uLift);
  c *= 1. - .2 * pow(length((vUv - .5) * vec2(1.1, 1.)) * 1.3, 2.4);
  c = mix(c, uHaze, uFade);
  c += (hash(gl_FragCoord.xy + fract(uTime * 7.3) * 113.) - .5) * .015;
  gl_FragColor = vec4(c, 1.);
}`,Fe=e=>{let t=h.clamp(e,0,1);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},Y=I.golden,Ie={id:`chalet`,title:`Chalet`,palette:{uSky:{cssVar:`--chalet-sky`,label:`Sky`,fallback:Y.colors.sky},uHaze:{cssVar:`--chalet-haze`,label:`Haze`,fallback:Y.colors.haze},uGlow:{cssVar:`--chalet-sun`,label:`Sun`,fallback:Y.colors.sun},uClad:{cssVar:`--chalet-cladding`,label:`Cladding`,fallback:`#9c6f45`},uRoof:{cssVar:`--chalet-roof`,label:`Roof`,fallback:`#3a3c40`},uStone:{cssVar:`--chalet-stone`,label:`Stone`,fallback:`#a29c90`},uFrame:{cssVar:`--chalet-frame`,label:`Frames`,fallback:`#26221e`},uDeck:{cssVar:`--chalet-deck`,label:`Deck`,fallback:`#9c7b58`},uGlass:{cssVar:`--chalet-glass`,label:`Glass`,fallback:`#2a3236`},uPaving:{cssVar:`--chalet-path`,label:`Path`,fallback:`#b9b2a6`},uMeadow:{cssVar:`--chalet-meadow`,label:`Meadow`,fallback:`#6f8c48`},uFoliage:{cssVar:`--chalet-foliage`,label:`Conifers`,fallback:`#1d3324`},uSnow:{cssVar:`--chalet-snow`,label:`Snow`,fallback:`#e9eef5`}},params:[F,{key:`sun`,label:`Sun angle`,min:-3.14,max:3.14,step:.01,value:Y.sun},{key:`sunHeight`,label:`Sun height`,min:.04,max:.9,step:.01,value:Y.sunHeight},{key:`roofPitch`,label:`Roof pitch`,min:.7,max:1.4,step:.05,value:1},{key:`deck`,label:`Glass deck`,min:0,max:1,step:1,value:1},{key:`annex`,label:`Stone annex`,min:0,max:1,step:1,value:1},{key:`snow`,label:`Snow`,min:0,max:1,step:.05,value:0},{key:`snowfall`,label:`Falling snow`,min:0,max:1,step:.05,value:0},{key:`lake`,label:`Alpine lake`,min:0,max:1,step:1,value:0},{key:`haze`,label:`Haze`,min:0,max:3,step:.05,value:1},{key:`bloom`,label:`Bloom`,min:0,max:2,step:.05,value:1},{key:`exposure`,label:`Exposure`,min:.5,max:2,step:.05,value:1},{key:`glide`,label:`Camera glide`,min:0,max:2,step:.05,value:1}],fov:[38,58],travelPerScreen:0,creep:0,hover:{liquid:.25,turn:0},resolution:1,antialias:!1,variants:{...P({sky:`--chalet-sky`,haze:`--chalet-haze`,sun:`--chalet-sun`}),summer:{params:{light:0,sun:Y.sun,sunHeight:Y.sunHeight,snow:0,snowfall:0},colors:{"--chalet-sky":Y.colors.sky,"--chalet-haze":Y.colors.haze,"--chalet-sun":Y.colors.sun,"--chalet-meadow":`#6f8c48`}},winter:{params:{light:1,sun:2.1,sunHeight:.2,snow:1,snowfall:.6,lake:1,exposure:.85,bloom:.8},colors:{"--chalet-sky":`#6e8db9`,"--chalet-haze":`#dde3ec`,"--chalet-sun":`#ffe4cc`,"--chalet-meadow":`#d6dde6`,"--chalet-foliage":`#1a2c25`}}},setup({scene:n,camera:i,small:l,colors:m,pointer:g,renderer:x}){i.near=.2,i.far=900,i.updateProjectionMatrix(),x.shadowMap.enabled=!0,x.shadowMap.type=1,x.shadowMap.autoUpdate=!1;let ee=[],P=e=>(ee.push(e),e),F=new u,I=new s(16777215,.004);F.fog=I;let z=new T(0,1,0),B={uTime:{value:0},uBoxC:{value:Array.from({length:R},()=>new O)},uBoxH:{value:Array.from({length:R},()=>new T)},uBoxN:{value:0},uSunDir:{value:z},uSunCol:{value:new p},uSnowCol:{value:new p},uSnowK:{value:0},uLake:{value:0},uMist:{value:0},uFogK:{value:1},uWin:{value:0},uEave:{value:new O},uEaveZ:{value:new S}},V=e=>(e.onBeforeCompile=e=>{Object.assign(e.uniforms,B),e.vertexShader=`varying vec3 vChW, vChN;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 hW = vec4(transformed, 1.);
#ifdef USE_INSTANCING
hW = instanceMatrix * hW;
#endif
vChW = (modelMatrix * hW).xyz;
vChN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=xe+e.fragmentShader.replace(`#include <color_fragment>`,Ce).replace(`#include <metalnessmap_fragment>`,we).replace(`#include <normal_fragment_maps>`,Te).replace(`#include <aomap_fragment>`,Se).replace(`#include <emissivemap_fragment>`,De).replace(`#include <fog_fragment>`,Ee)},e.customProgramCacheKey=()=>`chalet`,P(e)),H=e=>(P(e.map),P(e.normalMap),P(e.roughnessMap),e),U={clad:V(new a({...H(J(512,2.6,ue)),roughness:1,normalScale:new S(1.1,1.1)})),stone:V(new a({...H(J(512,3,fe)),roughness:1,normalScale:new S(1.3,1.3)})),roof:V(new a({...H(J(256,2,pe)),roughness:1,metalness:.35})),frame:V(new a({roughness:.5})),deck:V(new a({...H(J(512,2.4,de)),roughness:1})),paving:V(new a({...H(J(256,2,me)),roughness:1})),glass:V(new r({roughness:.04,metalness:0,ior:1.5,specularIntensity:1,specularColor:new p(2.6,2.6,2.6),envMapIntensity:1.7})),rail:V(new r({transparent:!0,opacity:.3,depthWrite:!1,side:2,roughness:.04,ior:1.5,envMapIntensity:1.1}))},G=(()=>{let e=17;return()=>(e=e*16807%2147483647)/2147483647})(),q=new re(2,2,200,200).rotateX(-Math.PI/2),Y=q.attributes.position,Ie=e=>450*(.25*e+.75*e*Math.abs(e));for(let e=0;e<Y.count;e++){let t=-6+Ie(Y.getX(e)),n=4+Ie(Y.getZ(e));Y.setXYZ(e,t,K(t,n),n)}q.computeVertexNormals();let Le=V(new a({...H(J(256,2,ge)),roughness:1}));Le.defines={...Le.defines,CH_GROUND:``};let Re=new f(P(_e(q,3)),Le);Re.receiveShadow=!0,F.add(Re);let ze=V(new a({...H(J(256,2.4,he)),roughness:1})),Be=[],Ve=Array.from({length:15},(e,t)=>{let n=t/14;return[-3.25-n*8.5-Math.sin(n*3)*1.6,5.5+n*12]}),He=(e,t,n=0)=>!(e>-7.4-n&&e<11.6+n&&t>-10.8-n&&t<4.6+n)&&!(e>-13.1-n&&e<-5.8+n&&t>-1.8-n&&t<5.6+n)&&Ve.every(([r,i])=>Math.hypot(e-r,t-i)>1.1+n),Ue=(e,t,n)=>{let r=[];for(let i=0;r.length<e&&i<e*30;i++){let e=-42+G()*58,i=-26+G()*52;if(e>0&&G()<n)continue;let a=(e+i)*.7071,o=(e-i)*.7071-3;He(a,o,t)&&r.push([a,o])}return r},We=[[-8.6,8.6,.7],[-7.6,10.6,.45],[8.4,6.2,1.4],[11,2.4,.9],[-11,-6,1.2],[6.6,9.6,.7],[14,-2,1.3]];for(let[e,t]of Ue(56,.6,.55))We.push([e,t,.12+G()**3*(Math.hypot(e+21.5,t-21.5)<20?.45:1.7)]);for(let[e,t,n]of We){let r=new v(1,n>.5?4:3);r.deleteAttribute(`normal`),r.deleteAttribute(`uv`);let i=k(r);r.dispose();let a=i.attributes.position;i.setAttribute(`uv`,new te(new Float32Array(a.count*2),2));let o=Math.round(e*7+t*13);for(let e=0;e<a.count;e++){let t=a.getX(e),n=a.getY(e),r=a.getZ(e),i=.78+.36*W(t*1.6+9,r*1.6+n*1.3+9,4096,4096,o)+.1*W(t*4+3,n*4+r*2+3,4096,4096,o+1);a.setXYZ(e,t*i,Math.max(n*i,-.2),r*i)}i.computeVertexNormals(),i.scale(n*(1+G()*.4),n*.62,n).rotateY(G()*Math.PI).translate(e,K(e,t)-n*.16,t),Be.push(_e(i,2))}let Ge=new f(P(A(Be)),ze);for(let e of Be)e.dispose();Ge.castShadow=Ge.receiveShadow=!0,F.add(Ge);let Ke={bark:[],leaves:[]},qe=oe((e,t)=>Ke[e].push(t),G);for(let[e,t,n]of[[7.5,-15,15],[12.5,-10.5,12],[-1.5,-17.5,16],[16.5,-3.5,11],[3.5,-22,13],[20,-12,14],[19.5,4,10.5],[24,-1,13],[-6.5,-16,12]])be(qe,G,e,K(e,t),t,n);for(let[e,t,n]of[[-1.6,4.3,.5],[2.6,4.2,.6],[4.4,4.4,.45],[10.8,.4,.55]])qe.bush(e,K(e,t),t,n);let Je=[];for(let[e,t]of Ue(40,.6,1))e+t<-10&&(Je.push([e,t]),be(qe,G,e,K(e,t),t,.8+G()**2*2.2,8,2));for(let[e,t,n]of[[-14,1,4.2],[-16.5,-3,5.6],[-12.5,8.5,3.1],[-19,4,3.6],[-15,12,2.4]])be(qe,G,e,K(e,t),t,n,14,3);let Ye=L(V(new a({map:P(N({hue:136,spread:30,sat:26,light:6,seed:11})),alphaTest:.4,alphaToCoverage:!0,roughness:.8,color:13163727})));Ye.defines={...Ye.defines,CH_LEAF:``};let Xe=[{tex:{hue:82,spread:34,sat:30,light:12,seed:61},n:2,size:.3,lift:.06,count:460},{tex:{hue:46,spread:12,sat:78,light:38,seed:62},n:1,size:.13,lift:.16,count:150},{tex:{hue:262,spread:28,sat:42,light:36,seed:63},n:1,size:.13,lift:.16,count:120},{tex:{hue:40,spread:6,sat:14,light:62,seed:64},n:1,size:.11,lift:.15,count:110}].map(({tex:e,n:t,size:n,lift:r,count:i})=>{let o=[],s=oe((e,t)=>o.push(t),G);for(let[e,a]of Ue(i,.15,.5))s.foliage(new T(e,K(e,a)+r,a),n*.9,n*.35,t,n,void 0,.6);let c=L(V(new a({map:P(N({...e,photo:!1})),alphaTest:.4,alphaToCoverage:!0,roughness:.85}))),l=new f(P(A(o)),c);for(let e of o)e.dispose();return l.receiveShadow=!0,F.add(l),l}),Ze=V(new a({map:P(M(3878695)),roughness:.9}));for(let[e,t]of[[Ke.bark,Ze],[Ke.leaves,Ye]]){let n=A(e);for(let t of e)t.dispose();let r=new f(P(n),t);r.castShadow=r.receiveShadow=!0,F.add(r)}let Qe=[13,14,15].map(e=>{let t={bark:[],leaves:[]};be(oe((e,n)=>t[e].push(n),G),G,0,0,0,10,e,2,!0);let n={bark:A(t.bark),leaves:A(t.leaves)};for(let e of[...t.bark,...t.leaves])e.dispose();return{...n,mats:[],tints:[]}}),$e=new e,et=new T(0,1,0);for(let e=0;e<900;e++){let e=-80+G()*170,n=-12+G()*150;if(n<20&&e<18||e<-6&&n<58)continue;let r=(e+n)*.7071,i=(e-n)*.7071-3;if(W(r*.035,i*.035,4096,4096,9)<.42)continue;let a=(11+G()*9)/10,o=.85+G()*.35,s=Qe[Math.floor(G()*Qe.length)];s.mats.push(new t().compose(new T(r,K(r,i)-a*.3,i),$e.setFromAxisAngle(et,G()*Math.PI*2),new T(a*o,a,a*o))),s.tints.push(new p().setRGB(.5+G()*.22,.6+G()*.2,.62+G()*.2))}for(let e of Qe)for(let[t,n]of[[e.bark,Ze],[e.leaves,Ye]]){let r=new ie(P(t),n,e.mats.length);e.mats.forEach((e,t)=>r.setMatrixAt(t,e)),e.tints.forEach((e,t)=>r.setColorAt(t,e)),r.computeBoundingSphere(),r.castShadow=!0,F.add(r)}let tt=Math.atan2(23.5,24),nt=[];for(let e=8;e<=62;e+=2){let t=tt-e*Math.PI/180,n=Math.sin(t),r=-Math.cos(t),i=10;for(;i<200&&K(-21.5+n*i,21.5+r*i)>-.5;)i+=.25;nt.push(new S(-21.5+n*(i-1.2),21.5+r*(i-1.2)))}let rt=nt.slice(1).flatMap((e,t)=>{let n=nt[t],r=e.clone().add(n).multiplyScalar(.5);return Je.some(([e,t])=>Math.hypot(e-r.x,t-r.y)<1.6)?[]:[_e(new ae(e.distanceTo(n)+.3,.5,.55,2,.08).rotateY(-Math.atan2(e.y-n.y,e.x-n.x)).translate(r.x,Math.min(K(e.x,e.y),K(n.x,n.y))+.1,r.y),le.stone)]}),it=new f(P(A(rt)),U.stone);for(let e of rt)e.dispose();it.castShadow=it.receiveShadow=!0,F.add(it);let at=l?1200:2600,ot=new Float32Array(at*3),st=new Float32Array(at);for(let e=0;e<at;e++)ot.set([G(),G(),G()],e*3),st[e]=G();let ct=P(new ne);ct.setAttribute(`position`,new te(ot,3)),ct.setAttribute(`aS`,new te(st,1));let lt=P(new d({vertexShader:Ae,fragmentShader:je,uniforms:{uTime:B.uTime,uScale:{value:1},uFall:{value:0},uCol:{value:new p}},transparent:!0,depthWrite:!1})),ut=new b(ct,lt);ut.frustumCulled=!1,ut.renderOrder=3,F.add(ut);let dt={...m,uSunDir:{value:z},uHazeK:{value:1},uTime:B.uTime,uSnowK:B.uSnowK,uLake:B.uLake,uCam:{value:i.position}},ft=P(new d({vertexShader:Oe,fragmentShader:ke,uniforms:dt,side:1,depthWrite:!1})),pt=new f(P(new _(400,48,24)),ft);pt.renderOrder=-1,pt.frustumCulled=!1,F.add(pt);let mt=new u;mt.add(new f(P(new _(100,48,24)),ft));let ht=P(new D(x)),gt=null,X=new c(16777215,3.4);X.castShadow=!0;let Z=X.shadow;Z.mapSize.set(l?1024:2048,l?1024:2048),Object.assign(Z.camera,{left:-38,right:38,top:30,bottom:-30,near:20,far:200}),Z.camera.updateProjectionMatrix(),Z.bias=-4e-4,Z.normalBias=.025,Z.radius=4,X.target.position.set(1.5,3,-3),F.add(X,X.target);let _t=new y(16777215,16777215,.5),vt=new c(16777215,0);vt.target=X.target,F.add(_t,vt);let yt=[],bt=e=>{for(let e of yt)F.remove(e),e.geometry.dispose();yt=[];let{parts:t,occ:n,eave:r,eaveZ:i}=ye(e);B.uEave.value.fromArray(r),B.uEaveZ.value.fromArray(i);for(let e of ce){let n=t[e];if(!n.length)continue;if(e===`roof`)for(let t of n)ve(t,le[e]);else if(e!==`glass`)for(let t of n)_e(t,le[e]);if(n.some(e=>!e.index)){let e=n.map(e=>e.index?e.toNonIndexed():e);for(let t of n)e.includes(t)||t.dispose();n=e}let r=A(n);for(let e of n)e.dispose();if(!r)continue;let i=new f(r,U[e]);i.castShadow=e!==`rail`,i.receiveShadow=!0,e===`rail`&&(i.renderOrder=2),F.add(i),yt.push(i)}let a=Math.min(R,n.length/7);for(let e=0;e<a;e++)B.uBoxC.value[e].set(n[e*7],n[e*7+1],n[e*7+2],n[e*7+3]),B.uBoxH.value[e].set(n[e*7+4],n[e*7+5],n[e*7+6]);B.uBoxN.value=a},xt={type:o,minFilter:C,magFilter:C},Q=P(new E(2,2,{...xt,depthBuffer:!0,samples:2})),St=P(new E(2,2,xt)),Ct=P(new E(2,2,xt)),wt=P(new re(2,2)),Tt=(e,t)=>P(new d({vertexShader:Me,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})),Et=e=>{let t=new f(wt,e);return t.frustumCulled=!1,t},Dt=(e,t)=>{let n=Tt(Ne,{uSrc:{value:e},uDir:{value:new S},uThresh:{value:t}}),r=new u;return r.add(Et(n)),{s:r,dir:n.uniforms.uDir.value}},Ot=Dt(Q.texture,.9),kt=Dt(St.texture,-1),At=Tt(Pe,{uMain:{value:Q.texture},uBloom:{value:Ct.texture},uHaze:m.uHaze,uBloomK:{value:1},uFade:{value:0},uTime:{value:0},uExposure:{value:1},uSat:{value:1},uLift:{value:new T},uWarm:{value:new T},uCool:{value:new T}});n.add(Et(At));let jt=[[U.clad,`uClad`],[U.stone,`uStone`],[U.roof,`uRoof`],[U.frame,`uFrame`],[U.deck,`uDeck`],[U.paving,`uPaving`],[U.glass,`uGlass`],[U.rail,`uGlass`],[Le,`uMeadow`],[ze,`uStone`]],$=(e,t)=>{let n=m[e].value;return t.setRGB(n.x,n.y,n.z,w)},Mt=new S,Nt=j(i,g,{base:l?new T(-11,1.9,34):new T(-21.5,1.9,21.5),focus:l?new T(2.5,4.4,-2):new T(2,4.4,-2.5),yaw:l?0:.14}),Pt=``,Ft=``,It=``;return{update(e){let{time:t,intro:n,params:r}=e,a=[`roofPitch`,`deck`,`annex`].map(e=>r[e]).join();a!==Pt&&(Pt=a,bt(r),It=``);let o=r.sunHeight;z.set(-Math.sin(r.sun)*Math.cos(o),Math.sin(o),Math.cos(r.sun)*Math.cos(o));let s=se(r.light);X.position.copy(X.target.position).addScaledVector(z,100),vt.position.set(-z.x,.35,-z.z).multiplyScalar(50).add(X.target.position),Z.radius=s.softness,B.uTime.value=t,B.uSnowK.value=r.snow,B.uLake.value=+(r.lake>.5),it.visible=r.lake>.5,$(`uSnow`,B.uSnowCol.value).multiplyScalar(.8),dt.uHazeK.value=r.haze;for(let[e,t]of jt)$(t,e.color);$(`uGlow`,X.color),B.uSunCol.value.copy(X.color),X.intensity=7.4*s.sunK*h.smoothstep(o,-.02,.12)*(1+.03*Math.sin(t*.4)+.015*Math.sin(t*1.1)),F.environmentIntensity=s.fill,$(`uSky`,_t.color),$(`uMeadow`,_t.groundColor).lerp(X.color,.2).multiplyScalar(.8),_t.intensity=s.bounce,vt.color.copy(_t.groundColor).lerp(X.color,.5),vt.intensity=X.intensity*.12*s.bounce,U.glass.color.multiplyScalar(.18),U.glass.emissive.setRGB(1,.58,.26).multiplyScalar(2.6),B.uWin.value=s.windows,Le.color.multiplyScalar(1.1),$(`uHaze`,I.color);let c=Fe(n/2.8);I.density=.0032*r.haze*s.fog+(1-c)*.03,B.uFogK.value=r.haze*s.fog,B.uMist.value=s.mist,ut.visible=r.snowfall>.01;for(let e of Xe)e.visible=r.snow<.3;lt.uniforms.uFall.value=r.snowfall,$(`uSnow`,lt.uniforms.uCol.value).lerp(I.color,.3);let l=[r.sun,o,r.haze,r.snow,r.lake,...[`uSky`,`uHaze`,`uGlow`,`uFoliage`,`uMeadow`,`uSnow`].map(e=>m[e].value.toArray().join())].join(),u=x.getRenderTarget();if(l!==Ft){Ft=l;let e=ht.fromScene(mt,0,.5,500);gt?.dispose(),gt=e,F.environment=e.texture,U.glass.envMap=U.rail.envMap=e.texture}let d=`${Pt}|${r.sun}|${o}|${r.lake}`;d!==It&&(It=d,x.shadowMap.needsUpdate=!0),Nt(e,r.glide),pt.position.copy(i.position),x.getDrawingBufferSize(Mt);let f=Math.max(2,Mt.x),p=Math.max(2,Mt.y);if(lt.uniforms.uScale.value=.045*p/(2*Math.tan(h.degToRad(i.fov)/2)),Q.width!==f||Q.height!==p){Q.setSize(f,p);let e=Math.max(2,Math.round(f/4)),t=Math.max(2,Math.round(p/4));St.setSize(e,t),Ct.setSize(e,t),Ot.dir.set(1.5/e,0),kt.dir.set(0,1.5/t)}x.setRenderTarget(Q),x.clear(!0,!0,!1),x.render(F,i),x.setRenderTarget(St),x.render(Ot.s,i),x.setRenderTarget(Ct),x.render(kt.s,i),x.setRenderTarget(u);let g=At.uniforms;g.uTime.value=t,g.uBloomK.value=r.bloom,g.uExposure.value=r.exposure*s.exposure,g.uSat.value=s.sat,g.uLift.value.fromArray(s.lift),g.uWarm.value.fromArray(s.warm),g.uCool.value.fromArray(s.cool),g.uFade.value=1-h.smoothstep(n,.05,1.1)},dispose(){for(let e of yt)e.geometry.dispose();gt?.dispose();for(let e of ee)e.dispose();x.shadowMap.enabled=!1}}}};export{Ie as t};