import{$t as e,A as t,Dt as n,Ft as r,It as i,J as a,K as o,L as s,M as c,Mn as l,Nn as u,Ot as d,S as f,Tn as p,Tt as m,Vn as h,Y as g,_t as _,cr as v,d as ee,ht as te,jn as ne,lr as y,n as re,pr as ie,qt as b,t as ae,tt as oe,ur as se}from"./three.module-BtOiv6AT.js";import{t as x}from"./BufferGeometryUtils-BCwTizHk.js";import{t as ce}from"./RoundedBoxGeometry-07rcVPj6.js";import{t as le}from"./cameraRig-DZYJJrwO.js";import{a as ue,c as de,i as S,n as fe,o as pe,r as me,s as he,t as C,u as ge}from"./lightPresets-Cae86WMC.js";var w=40,_e=[`stone`,`plaster`,`brick`,`trim`,`frame`,`glass`,`rail`,`interior`,`lamp`,`hedge`,`bark`,`leaves`],ve={stone:3.6,plaster:3,brick:2.4,trim:3,frame:1,glass:1,rail:1,interior:3,lamp:1,hedge:3,bark:1,leaves:1},ye=new Set([`glass`,`rail`,`bark`,`leaves`]),T=36,E=22,D=1.9,O=4.4,k=3.2,A=15.6,j=20.4,M=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},N=(e,t,n)=>e+(t-e)*n,P=(e,t,n)=>{let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},F=(e,t)=>(e%t+t)%t,be=(e,t,n,r,i)=>{let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=F(a,n),f=F(a+1,n),p=F(o,r),m=F(o+1,r),h=P(d,p,i),g=P(f,p,i),_=P(d,m,i),v=P(f,m,i);return h+(g-h)*l+(_-h)*u+(h-g-_+v)*l*u},I=(e,t,n,r,i,a=4)=>{let o=0,s=.5,c=0;for(let l=0;l<a;l++)o+=s*be(e*n,t*r,n,r,i+l),c+=s,s*=.5,n*=2,r*=2;return o/c},L=(e,t,n)=>{let r=new c(e,t,t);return r.wrapS=r.wrapT=p,r.magFilter=te,r.minFilter=_,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=ne),r.needsUpdate=!0,r},R=(e,t,n)=>{let r=e*e,i=new Uint8Array(r*4),a=new Uint8Array(r*4),o=new Uint8Array(r*4),s=new Float32Array(r);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let a=n((r+.5)/e,(t+.5)/e),c=t*e+r;for(let e=0;e<3;e++)i[c*4+e]=Math.round(Math.min(1,Math.max(0,a.c[e]))*255);i[c*4+3]=255,o[c*4+1]=Math.round(Math.min(1,Math.max(0,a.r))*255),o[c*4+3]=255,s[c]=a.h}for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=n*e+r,o=s[n*e+(r+1)%e]-s[n*e+(r-1+e)%e],c=s[(n+1)%e*e+r]-s[(n-1+e)%e*e+r],l=-o*t,u=-c*t,d=Math.hypot(l,u,1);a[i*4]=Math.round((l/d*.5+.5)*255),a[i*4+1]=Math.round((u/d*.5+.5)*255),a[i*4+2]=Math.round((1/d*.5+.5)*255),a[i*4+3]=255}return{map:L(i,e,!0),normalMap:L(a,e,!1),roughnessMap:L(o,e,!1)}},xe=(e,t)=>{let n=t*6,r=Math.floor(n),i=e*3,a=F(Math.floor(i),3),o=i-Math.floor(i),s=n-r,c=M(0,.008,Math.min(o,1-o)*1.6)*M(0,.008,Math.min(s,1-s)*.8),l=P(a,F(r,6),71),u=I(e,t,3,40,72,4),d=I(e,t,12,12,73,3),f=M(.76,.82,I(e,t,160,160,74,2)),p=(.93+.07*l)*(.95+.07*u)*(.96+.06*d)*(1-.06*f)*N(.78,1,c);return{c:[p,p*.99,p*.97],h:c*.5+u*.03-f*.05,r:.62+.16*d+.1*f}},Se=(e,t)=>{let n=I(e,t,48,48,31,4),r=I(e,t,6,6,33,4),i=.95+(r-.5)*.08+(n-.5)*.04;return{c:[i,i,i],h:n*.7+r*.3,r:.8+.1*n}},Ce=(e,t)=>{let n=t*30,r=Math.floor(n),i=e*10+r%2*.5,a=F(Math.floor(i),10),o=i-Math.floor(i),s=n-r,c=I(e,t,48,48,61,3),l=M(.015,.045,Math.min(o,1-o))*M(.05,.14,Math.min(s,1-s)+(c-.5)*.04),u=P(a,F(r,30),62),d=P(a,F(r,30),63),f=(.5+.22*u)*(.86+.25*c),p=[f*N(1.02,.9,d),f*N(.86,.95,d),f*N(.8,.95,d)],m=.88+.1*c;return{c:[N(m,p[0],l),N(m*.98,p[1],l),N(m*.95,p[2],l)],h:l*(.7+.2*c),r:N(.97,.82,l)}},we=(e,t)=>{let n=t*8,r=Math.floor(n),i=e*4+r%2*.5,a=F(Math.floor(i),4),o=i-Math.floor(i),s=n-r,c=M(0,.012,Math.min(o,1-o))*M(0,.024,Math.min(s,1-s)),l=P(a,F(r,8),41),u=I(e,t,128,128,42,2),d=M(.66,.72,I(e,t,200,200,43,2)),f=I(e,t,8,8,44,3),p=(.88+.12*l)*(.92+.14*u)*(1-.3*d)*(.95+.08*f)*N(.72,1,c);return{c:[p,p,p*1.01],h:c*(.8+.1*u),r:.58+.24*u+.1*(1-c)}},Te=(e,t)=>{let n=I(e,t,180,180,91,2),r=I(e,t,3,3,92,3),i=I(e,t,10,10,93,3),a=.36*(.84+.32*n)*(.9+.2*r)*(1-.12*M(.55,.75,i));return{c:[a,a,a*1.03],h:n*.6,r:.84+.1*n-.08*r}},Ee=(e,t)=>{let n=I(e,t,128,128,101,2),r=I(e,t,8,8,102,4),i=(.78+.3*r)*(.85+.3*n);return{c:[i*.96,i,i*.86],h:n*.6+r*.2,r:.95}},De=(e,t)=>{let n=I(e,t,40,40,81,3),r=I(e,t,6,6,82,3),i=M(.62,.42,n),a=(.7+.5*r)*N(1.15,.35,i);return{c:[a*.95,a,a*.85],h:n*.8+r*.4,r:.85}},z=(e,t)=>{let n=e*3%1,r=t*3%1;return M(.16,.19,n)*M(.84,.81,n)*M(.26,.29,r)*M(.9,.87,r)},Oe=(e,t)=>{let n=z(e,t),r=I(e,t,8,8,121,3),i=P(Math.floor(e*3),Math.floor(t*3),122),a=N(.9+.1*r,.14+.12*i,n);return{c:[a,a,a*1.02],h:1-n,r:N(.9,.18,n)}},ke=(e,t)=>{let n=z(e,t);return{c:[n,n,n],h:0,r:0}},B=(e,t)=>{let n=e.attributes.position,r=e.attributes.normal,i=e.attributes.uv;for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));o>=a&&o>=s?i.setXY(e,n.getX(e)/t,n.getZ(e)/t):a>=s?i.setXY(e,n.getZ(e)/t,n.getY(e)/t):i.setXY(e,n.getX(e)/t,n.getY(e)/t)}return e},Ae=e=>{let t=Object.fromEntries(_e.map(e=>[e,[]])),n=[],r=(e,[r,i,a,o,s,c],l=.03,u=!0)=>{let d=i-r,f=o-a,p=c-s,m=Math.min(l,Math.min(d,f,p)*.45),h=m>.003?new ce(d,f,p,2,m):new ee(d,f,p);t[e].push(h.translate((r+i)/2,(a+o)/2,(s+c)/2)),u&&n.length<w*7&&n.push((r+i)/2,(a+o)/2,(s+c)/2,m,d/2,f/2,p/2)},i=(e,t,n,i,a,o,s,c,l,u=0)=>{let d=Math.min(n,i),f=Math.max(n,i);r(t,e?[s-l,s-c,a,o,d,f]:[d,f,a,o,s+c,s+l],u,!1)},a=(e,n,r,i,a,o,s,c)=>{let l=new b(Math.abs(i-r),o-a).rotateY((P(c,1,3)-.5)*.03).rotateX((P(c,2,7)-.5)*.016);t[n].push(e?l.rotateY(-Math.PI/2).translate(s,(a+o)/2,(r+i)/2):l.translate((r+i)/2,(a+o)/2,s))},o=(e,t,n,r,o,s,c,l=`glass`)=>{let u=Math.max(1,Math.round(Math.abs(n-t)/1.5));i(e,`frame`,t,n,r,r+.08,s,-.02,.1,.006),i(e,`frame`,t,n,o-.08,o,s,-.02,.1,.006);for(let a=0;a<=u;a++){let c=t+(n-t)*a/u;i(e,`frame`,c-.035,c+.035,r,o,s,-.02,.08)}for(let i=0;i<u;i++)a(e,l,t+(n-t)*i/u,t+(n-t)*(i+1)/u,r+.08,o-.08,s+(e?-.03:.03),c*31+i)},s=(e,t,n,r)=>{let a=Math.min(t,n),o=Math.max(t,n);i(e,`frame`,a,o,r+1.02,r+1.09,0,-.06,.03,.01);let s=Math.max(1,Math.round((o-a)/1.25)),c=(o-a)/s;for(let t=0;t<s;t++)i(e,`rail`,a+c*t+.012,a+c*(t+1)-.012,r+.04,r+1,0,-.03,-.01)},c=29,l=()=>(c=c*16807%2147483647)/2147483647,u=pe((e,n)=>t[e].push(n),l),d=Math.round(m.clamp(e.floors,6,9)),f=O+(d-1)*k,p=e.facade<.5?`stone`:e.facade<1.5?`plaster`:`brick`,h=e.greenery>.5;r(p,[D,T-.6,O-.32,f,-E+.6,-D],.02),r(p,[D,A,0,O-.32,-E+.6,-D],.02),r(p,[j,T-.6,0,O-.32,-E+.6,-D],.02),r(p,[A,j,0,O-.32,-E+.6,-D-4.2],.02),r(p,[T-.6,T,0,f,-E,0],.03),r(p,[0,T-.6,0,f,-E,-E+.6],.03),r(p,[-.15,T+.15,f-.32,f+.4,-E-.15,.15],.03);for(let e of[9,18,27])r(p,[e-.45,e+.45,O-.34,f,-D,.04],.03);for(let e of[-7.3,-14.7])r(p,[-.04,D,O-.34,f,e-.45,e+.45],.03);r(`interior`,[A,j,0,O-.32,-D-4.2,-D-4.05],.01,!1),r(`interior`,[A,A+.12,0,O-.32,-D-4.2,-D],.01,!1),r(`interior`,[j-.12,j,0,O-.32,-D-4.2,-D],.01,!1),r(`interior`,[A+.12,j-.12,O-.5,O-.32,-D-4.2,-D],.01,!1),r(`stone`,[A+1.2,j-1.2,0,1.05,-D-3.3,-D-2.7],.03,!1);for(let e=A+.8;e<j-.5;e+=1.6)r(`lamp`,[e-.12,e+.12,O-.53,O-.5,-D-2.2,-D-1.96],0,!1);o(!1,A+.12,j-.12,0,O-.5,-D-.02,3,`rail`),i(!1,`frame`,A,j,O-.5,O-.32,-D-.02,0,.12),r(`trim`,[A-1.4,j+1.4,3.42,3.66,-D,2.8],.04);for(let e=A-.6;e<j+1;e+=1.6)for(let t of[-.6,1.4])r(`lamp`,[e-.11,e+.11,3.4,3.42,t-.11,t+.11],0,!1);for(let e=1.5;e<T-1;e+=3)(e<A-1.6||e>j+1.6)&&r(`lamp`,[e-.11,e+.11,O-.34,O-.32,-1.06,-.84],0,!1);o(!1,D+.4,A-.25,.5,O-.6,-D,1),o(!1,j+.25,T-1,.5,O-.6,-D,2),o(!0,-D-.4,-E+1.2,.5,O-.6,D,4);for(let e=1;e<d;e++){let t=O+(e-1)*k;r(`trim`,[0,T-.6,t-.32,t,-D,0],.02),r(`trim`,[0,D,t-.32,t,-E+.6,-D],.02),o(!1,D+.05,T-.65,t,t+k-.32,-D,e*7+11),o(!0,-D-.05,-E+.65,t,t+k-.32,D,e*7+13);for(let[e,n]of[[.1,8.55],[9.45,17.55],[18.45,26.55],[27.45,T-.7]])s(!1,e,n,t);for(let[e,n]of[[-.1,-6.85],[-7.75,-14.25],[-15.15,-E+.7]])s(!0,e,n,t);if(h){for(let n=0;n<8;n++){if(P(n,e,5)>.45)continue;let i=2.25+4.5*n+(P(n,e,6)-.5)*1.6;r(`stone`,[i-.7,i+.7,t,t+.5,-.78,-.26],.03,!1),u.bush(i,t+.45,-.52,.62,.24)}for(let n=0;n<5;n++){if(P(n,e,8)>.45)continue;let i=-(2.2+4.4*n)+(P(n,e,9)-.5)*1.2;r(`stone`,[.26,.78,t,t+.5,i-.7,i+.7],.03,!1),u.bush(.52,t+.45,i,.24,.62)}}}let g=f+.4;if(s(!1,.1,T-.7,g),s(!0,-.1,-E+.7,g),r(p,[5,T-4,g,g+3,-E+2,-D-1.6],.03),o(!1,6,T-6,g,g+2.7,-D-1.6,97),r(`trim`,[4.7,T-3.7,g+3,g+3.25,-E+1.7,-D-1.1],.03),h)for(let[e,t,n]of[[2.6,-3.2,3.4],[T-2.8,-3,3]])r(`stone`,[e-.8,e+.8,g,g+.6,t-.8,t+.8],.04,!1),u.tree(e,g+.55,t,n,34,.22);for(let[e,t]of[[1,A-1.6],[j+1.6,T-1]]){r(`stone`,[e,t,0,.62,.9,2.3],.04),r(`hedge`,[e+.08,t-.08,.56,.64,.98,2.22],0,!1);for(let n=e+.75;n<t-.5;n+=1.45)u.bush(n,.56,1.6,.62+l()*.12,.6)}r(`stone`,[-2.6,-1.1,0,.62,-E+1,-D-.4],.04),r(`hedge`,[-2.52,-1.18,.56,.64,-E+1.08,-D-.48],0,!1);for(let e=-D-1.1;e>-E+1.5;e-=1.45)u.bush(-1.85,.56,e,.62,.62+l()*.12);return{parts:t,occ:n}},V=`
uniform vec3 uSky, uHaze, uGlow, uSunDir, uInterior;
uniform float uHazeK, uTime, uDisc;
vec3 skLin(vec3 c){ return pow(c, vec3(2.2)); }
float skH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float skN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(skH(i), skH(i + vec2(1., 0.)), f.x), mix(skH(i + vec2(0., 1.)), skH(i + vec2(1., 1.)), f.x), f.y); }
float skF(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++) { s += a * skN(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .96875; }
vec3 skyCol(vec3 d){
  vec3 haze = skLin(uHaze), glow = skLin(uGlow), sky = skLin(uSky);
  float e = max(d.y, 0.);
  float az = max(dot(normalize(d.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
  vec3 hor = mix(haze, glow, .1 + .25 * pow(az, 3.));
  vec3 c = mix(hor, sky, pow(smoothstep(-.02, .62, e), .55));
  float g = max(dot(d, uSunDir), 0.);
  c += glow * (pow(g, 8.) * .25 + pow(g, 160.) * 1.4 + smoothstep(.9995, .9998, g) * 18. * uDisc);
  vec2 wind = uTime * vec2(.011, .004);
  vec2 cq = d.xz / (e + .09) * 1.1 + wind;
  float cl = skF(cq);
  float lit = skF(cq + normalize(uSunDir.xz + 1e-4) * .06);
  float cov = smoothstep(.57, .82, cl) * smoothstep(.0, .14, e) * (1. - smoothstep(.75, 1., e));
  float shade = clamp((cl - lit) * 5. + .65, .25, 1.15);
  vec3 cloud = mix(mix(haze, sky, .35) * .85, mix(vec3(1.), glow, .4) * 1.18, shade);
  c = mix(c, cloud, cov * .7);
  c = mix(c, hor, exp(-e * 16.) * .55 * clamp(uHazeK, 0., 1.6));
  c = mix(c, mix(haze * .62, sky * .35, .25), smoothstep(-.005, -.06, d.y));
  return c;
}
`,je=`
#define NB ${w}
uniform vec4 uBoxC[NB];
uniform vec3 uBoxH[NB];
uniform int uBoxN;
uniform vec3 uLeafT1, uLeafT2;
uniform vec2 uLeafC, uLeafC2;
uniform float uLeaves, uMist, uFogK, uWin;
uniform vec3 uSunCol;
varying vec3 vAptW, vAptN;
${V}
float vhash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f); return mix(mix(vhash(i), vhash(i + vec2(1., 0.)), u.x), mix(vhash(i + vec2(0., 1.)), vhash(i + vec2(1., 1.)), u.x), u.y); }
float vfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .9375; }
float sdApt(vec3 p){
  float d = p.y;
  for (int i = 0; i < NB; i++) {
    if (i >= uBoxN) break;
    vec4 c = uBoxC[i];
    vec3 q = abs(p - c.xyz) - uBoxH[i] + c.w;
    d = min(d, length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - c.w);
  }
  return d;
}
float aptAO(vec3 p, vec3 n){
  if (length(p.xz - vec2(16., -10.)) > 44.) return 1.;
  float o = 0.;
  for (int i = 1; i <= 3; i++) {
    float h = .1 * float(i * i);
    o += clamp((h - sdApt(p + n * h)) / h, 0., 1.) * (1.2 - .2 * float(i));
  }
  return clamp(1. - o * .38, 0., 1.);
}
float leafMask(vec3 w){
  if (uLeaves <= 0. || w.y > 9.) return 1.;
  vec2 q = vec2(dot(w, uLeafT1), dot(w, uLeafT2));
  float wob = (vnoise(q * .3 + 3.) - .5) * .6;
  float env = max(smoothstep(1.05, .4, length((q - uLeafC) / vec2(6., 4.)) + wob), smoothstep(1.05, .4, length((q - uLeafC2) / vec2(5., 3.6)) + wob) * .8);
  vec2 sway = vec2(sin(uTime * .7) + sin(uTime * 1.13 + 1.), cos(uTime * .9) + sin(uTime * .53)) * .05;
  float holes = vfbm(q * 1.05 + sway + vec2(uTime * .015, 0.));
  float leaf = smoothstep(.4, .6, holes + (vnoise(q * 4.2 + sway * 2.5) - .5) * .22);
  return 1. - uLeaves * env * leaf * .9;
}
`,Me=`
float ambientOcclusion = aptAO(vAptW, normalize(vAptN));
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_ENVMAP ) && defined( STANDARD )
  float dotNVo = saturate( dot( geometryNormal, geometryViewDir ) );
  reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVo, ambientOcclusion, material.roughness );
#endif
reflectedLight.directDiffuse *= mix(1., ambientOcclusion, .3);
`,Ne=`#include <roughnessmap_fragment>
#ifdef APT_GLASS
float gPane = vhash(vec2(floor((vAptW.x - vAptW.z) / 1.5), floor(vAptW.y / ${k.toFixed(1)})) + 3.1);
roughnessFactor = clamp(roughnessFactor + (gPane - .5) * .06, .02, 1.);
diffuseColor.rgb *= .75 + .5 * gPane;
#endif`,Pe=`#include <emissivemap_fragment>
#ifdef APT_WIN
float wPane = vhash(vec2(floor((vAptW.x - vAptW.z) * .222), floor(vAptW.y / ${k.toFixed(1)})) + 7.3);
float wGrad = .55 + .45 * smoothstep(.2, 2.6, fract(vAptW.y / ${k.toFixed(1)} - .1) * ${k.toFixed(1)});
totalEmissiveRadiance *= max(uWin * (.06 + .94 * step(.55, wPane)) * wGrad * (.7 + .5 * vnoise(vAptW.xy * .7)), .01 * (.4 + wPane));
#endif`,Fe=`
#ifdef APT_HAZE
{
  vec3 hV = normalize(vAptW - cameraPosition);
  vec3 hCol = skyCol(normalize(vec3(hV.x, clamp(hV.y, .02, .06), hV.z))) * .92;
  #ifdef APT_FLAT
  float fLum = dot(outgoingLight, vec3(.3, .59, .11));
  outgoingLight = mix(outgoingLight, vec3(fLum), .55 * APT_FLAT);
  outgoingLight = mix(outgoingLight, vec3(mix(fLum, dot(hCol, vec3(.3, .59, .11)), .5)), .4 * APT_FLAT);
  hCol = mix(hCol, uSunCol * dot(hCol, vec3(.3, .59, .11)) * 1.6, .16 * pow(max(dot(normalize(hV.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.), 3.));
  #endif
  outgoingLight = mix(outgoingLight, hCol, 1. - exp(-length(vAptW - cameraPosition) * APT_HAZE));
}
#endif
#include <opaque_fragment>`,Ie=`
#ifdef USE_FOG
vec3 hV = vAptW - cameraPosition;
float hD = length(hV);
float hAz = max(dot(normalize(hV.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
vec3 hFog = mix(fogColor, uSunCol, .12 + .3 * pow(hAz, 3.));
float hNear = 1. - exp(-fogDensity * fogDensity * hD * hD);
float hFar = 1. - exp(-max(hD - 50., 0.) * .0035 * uFogK);
float hMist = uMist * smoothstep(80., 320., hD) * exp(-max(vAptW.y, 0.) * .06);
float hK = 1. - (1. - hNear) * (1. - hFar * .85) * (1. - hMist * .55);
gl_FragColor.rgb = mix(gl_FragColor.rgb, hFog * (1. + .05 * hMist), clamp(hK, 0., 1.));
#endif`,Le=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ]`,Re=`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,ze=`
${V}
varying vec3 vDir;
void main(){ gl_FragColor = vec4(skyCol(normalize(vDir)), 1.); }`,Be=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,Ve=`
uniform sampler2D uSrc;
uniform vec2 uDir;
uniform float uThresh;
varying vec2 vUv;
vec3 tap(vec2 o){ vec3 c = min(texture2D(uSrc, vUv + o).rgb, vec3(4.)); return c * smoothstep(uThresh, uThresh + .4, dot(c, vec3(.3, .59, .11))); }
void main(){
  vec3 c = tap(vec2(0.)) * .227;
  c += (tap(uDir) + tap(-uDir)) * .195;
  c += (tap(uDir * 2.) + tap(-uDir * 2.)) * .122;
  c += (tap(uDir * 3.) + tap(-uDir * 3.)) * .054;
  c += (tap(uDir * 4.) + tap(-uDir * 4.)) * .016;
  gl_FragColor = vec4(c, 1.);
}`,He=`
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
  c *= 1. - .16 * pow(length((vUv - .5) * vec2(1.1, 1.)) * 1.3, 2.4);
  c = mix(c, uHaze, uFade);
  c += (hash(gl_FragCoord.xy + fract(uTime * 7.3) * 113.) - .5) * .015;
  gl_FragColor = vec4(c, 1.);
}`,Ue=e=>{let t=m.clamp(e,0,1);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},H={id:`apartment`,title:`Apartment`,palette:{uSky:{cssVar:`--apartment-sky`,label:`Sky`,fallback:C.golden.colors.sky},uHaze:{cssVar:`--apartment-haze`,label:`Haze`,fallback:C.golden.colors.haze},uGlow:{cssVar:`--apartment-sun`,label:`Sun`,fallback:C.golden.colors.sun},uFacade:{cssVar:`--apartment-facade`,label:`Facade`,fallback:`#e6dccd`},uBrick:{cssVar:`--apartment-brick`,label:`Brick`,fallback:`#c08a70`},uTrim:{cssVar:`--apartment-trim`,label:`Balcony slabs`,fallback:`#eeeae3`},uFrame:{cssVar:`--apartment-frame`,label:`Frames`,fallback:`#2b2e32`},uGlass:{cssVar:`--apartment-glass`,label:`Glass`,fallback:`#26323a`},uInterior:{cssVar:`--apartment-interior`,label:`Lobby light`,fallback:`#f4c992`},uPaving:{cssVar:`--apartment-paving`,label:`Paving`,fallback:`#cdc6ba`},uLawn:{cssVar:`--apartment-lawn`,label:`Lawn`,fallback:`#76a048`},uFoliage:{cssVar:`--apartment-foliage`,label:`Foliage`,fallback:`#2f4b2c`},uCity:{cssVar:`--apartment-city`,label:`City`,fallback:`#d9cfc3`}},params:[fe,{key:`sun`,label:`Sun angle`,min:-3.14,max:3.14,step:.01,value:C.golden.sun},{key:`sunHeight`,label:`Sun height`,min:.04,max:1.2,step:.01,value:C.golden.sunHeight},{key:`floors`,label:`Floors`,min:6,max:9,step:1,value:7},{key:`facade`,label:`Facade (stone, plaster, brick)`,min:0,max:2,step:1,value:0},{key:`greenery`,label:`Balcony greenery`,min:0,max:1,step:1,value:1},{key:`leaves`,label:`Leaf shadows`,min:0,max:1,step:.05,value:0},{key:`haze`,label:`Haze`,min:0,max:3,step:.05,value:1},{key:`bloom`,label:`Bloom`,min:0,max:2,step:.05,value:1},{key:`exposure`,label:`Exposure`,min:.5,max:2,step:.05,value:1},{key:`glide`,label:`Camera glide`,min:0,max:2,step:.05,value:1}],fov:[50,62],travelPerScreen:0,creep:0,hover:{liquid:.25,turn:0},resolution:1,antialias:!1,variants:{...S({sky:`--apartment-sky`,haze:`--apartment-haze`,sun:`--apartment-sun`}),plaster:{params:{facade:1}},brick:{params:{facade:2}}},setup({scene:c,camera:p,small:_,colors:S,pointer:fe,renderer:C}){p.near=.2,p.far=1200,p.updateProjectionMatrix(),C.shadowMap.enabled=!0,C.shadowMap.type=1,C.shadowMap.autoUpdate=!1;let T=[],E=e=>(T.push(e),e),O=new l,k=new o(16777215,.003);O.fog=k;let M=new y(0,1,0),P={uSky:S.uSky,uHaze:S.uHaze,uGlow:S.uGlow,uInterior:S.uInterior,uSunDir:{value:M},uHazeK:{value:1},uTime:{value:0},uDisc:{value:1}},F={...P,uLeaves:{value:0},uLeafC:{value:new v},uLeafC2:{value:new v},uLeafT1:{value:new y(1,0,0)},uLeafT2:{value:new y(0,1,0)},uBoxC:{value:Array.from({length:w},()=>new se)},uBoxH:{value:Array.from({length:w},()=>new y)},uBoxN:{value:0},uSunCol:{value:new f},uMist:{value:0},uFogK:{value:1},uWin:{value:0}},be=re.lights_fragment_begin.replace(Le,`directLight.color *= aptLeaf;\n\t\t${Le}`),I=(e,t=``)=>(e.onBeforeCompile=e=>{Object.assign(e.uniforms,F),e.vertexShader=`varying vec3 vAptW, vAptN;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 aW = vec4(transformed, 1.);
#ifdef USE_INSTANCING
aW = instanceMatrix * aW;
#endif
vAptW = (modelMatrix * aW).xyz;
vAptN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=t+je+e.fragmentShader.replace(`#include <aomap_fragment>`,Me).replace(`#include <roughnessmap_fragment>`,Ne).replace(`#include <emissivemap_fragment>`,Pe).replace(`#include <lights_fragment_begin>`,`float aptLeaf = leafMask(vAptW);\n${be}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
#ifdef APT_SPEC
reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(APT_SPEC));
#endif`).replace(`#include <opaque_fragment>`,Fe).replace(`#include <fog_fragment>`,Ie)},e.customProgramCacheKey=()=>`apartment`+t,E(e)),L=e=>(E(e.map),E(e.normalMap),E(e.roughnessMap),e),z=L(R(256,.5,Se)),V=ge(I(new i({map:E(de({hue:80,spread:32,sat:32,light:8})),alphaTest:.4,alphaToCoverage:!0,roughness:.78,color:13951170}),`#define APT_HAZE .003
`),!0),H=I(new i({map:E(ue(4405037)),roughness:.9}),`#define APT_HAZE .003
`),U={stone:I(new i({...L(R(512,1.6,xe)),roughness:1,normalScale:new v(.6,.6)})),plaster:I(new i({...z,roughness:1,normalScale:new v(.5,.5)})),brick:I(new i({...L(R(512,2.6,Ce)),roughness:1})),trim:I(new i({...z,roughness:1,normalScale:new v(.3,.3)})),frame:I(new i({metalness:.55,roughness:.36})),glass:I(new r({roughness:.04,metalness:0,ior:1.5,specularIntensity:1,specularColor:new f(2.6,2.6,2.6),envMapIntensity:1.6}),`#define APT_GLASS
#define APT_WIN
#define APT_SPEC .5
`),rail:I(new r({transparent:!0,opacity:.3,depthWrite:!1,side:2,roughness:.04,ior:1.5,envMapIntensity:1.1}),`#define APT_SPEC .5
`),interior:I(new i({...z,emissiveMap:z.map,roughness:1})),lamp:I(new i({color:0,roughness:1})),hedge:I(new i({...L(R(256,3,De)),roughness:1})),bark:H,leaves:V},We=I(new i({...L(R(512,1.8,we)),roughness:1,normalScale:new v(.6,.6)})),Ge=I(new i({...L(R(512,1.2,Te)),roughness:1,normalScale:new v(.5,.5)})),Ke=I(new i({...L(R(256,2,Ee)),roughness:1})),qe=I(new i({color:14210510,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),Je=L(R(256,1,Oe)),Ye=R(128,0,ke);E(Ye.map),Ye.normalMap.dispose(),Ye.roughnessMap.dispose();let Xe=(e,t)=>I(new i({...Je,emissiveMap:Ye.map,roughness:1}),`#define APT_WIN\n#define APT_HAZE ${e}\n#define APT_FLAT ${t}\n`),Ze=[Xe(`.012`,`.9`),Xe(`.016`,`1.`),Xe(`.02`,`1.`)],Qe=[[B(new b(1400,1100).rotateX(-Math.PI/2).translate(0,-.08,-300),3),Ke],[B(new b(142,62.75).rotateX(-Math.PI/2).translate(0,0,-19.225),4.8),We],[B(new b(600,4.4).rotateX(-Math.PI/2).translate(0,.012,22.2),4.8),We],[B(new b(600,7.5).rotateX(-Math.PI/2).translate(0,.004,16.15),6),Ge]];for(let[e,t]of Qe){let n=new d(E(e),t);n.receiveShadow=!0,O.add(n)}let $e=[];for(let e=-300;e<300;e+=9)$e.push(new b(3,.14).rotateX(-Math.PI/2).translate(e,.02,16.15));for(let e of[12.65,19.65])$e.push(new b(600,.12).rotateX(-Math.PI/2).translate(0,.02,e));let et=new d(E(x($e)),qe);et.receiveShadow=!0;for(let e of $e)e.dispose();let tt=[[-300,300,0,.15,12.1,12.4],[-300,300,0,.15,19.9,20.2]].map(([e,t,n,r,i,a])=>B(new ce(t-e,r-n,a-i,2,.04).translate((e+t)/2,(n+r)/2,(i+a)/2),3.6)),nt=new d(E(x(tt)),U.stone);nt.receiveShadow=nt.castShadow=!0;let W=[];for(let[e,n,r]of[[-12,11.8,-1],[10,11.8,-1],[32,11.8,-1],[54,11.8,-1],[-56,20.6,1],[0,20.6,1],[30,20.6,1]])W.push(new t(.05,.075,6,10).translate(e,3,n)),W.push(new ee(.07,.07,1.4).translate(e,5.95,n+r*.7)),W.push(new ee(.28,.1,.6).translate(e,5.88,n+r*1.3));let rt=new d(E(x(W)),U.frame);rt.castShadow=rt.receiveShadow=!0;for(let e of[...tt,...W])e.dispose();O.add(et,nt,rt);let it={bark:[],leaves:[]},at=13,G=()=>(at=at*16807%2147483647)/2147483647,ot=pe((e,t)=>it[e].push(t),G),st=he();for(let[e,t,n]of[[34,10.9,8.6]])ot.tree(e,0,t,n,70,.17);let ct={stone:[],hedge:[],lawn:[]},K=(e,t,n,r,i,a,o,s=.04)=>ct[e].push(B(new ce(n-t,i-r,o-a,2,Math.min(s,(i-r)*.45)).translate((t+n)/2,(r+i)/2,(a+o)/2),e===`stone`?3.6:3)),q=(e,t,n,r,i=1.35)=>{K(`stone`,e,t,0,.5,n,r),st.box(e+.08,t-.08,.45,i,n+.08,r-.08)},lt=(e,t,n,r=0)=>{K(`stone`,e-n/2,e+n/2,0,.55,t-n/2,t+n/2),K(`hedge`,e-n/2+.1,e+n/2-.1,.5,.57,t-n/2+.1,t+n/2-.1,.02),r&&ot.tree(e,.55,t,r*1.15,80,.16);for(let[i,a]of r?[[-1,1],[1,-1]]:[[-1,-1],[1,-1],[-1,1],[1,1]])ot.bush(e+i*n*.22,.55,t+a*n*.22,n*.2+G()*.06)},ut=(e,t,n,r,i)=>{K(`stone`,e,t,0,.14,n,r,.03),K(`lawn`,e+.15,t-.15,.1,.16,n+.15,r-.15,.02);for(let a=0;a<i;a++)ot.bush(N(e+1.5,t-1.5,(a+.5)/i),.16,N(n,r,.3+G()*.4),.6+G()*.25)};q(-70,-36,10.5,11.7),q(-30,A-1.2,10.5,11.7),q(j+1.2,70,10.5,11.7),q(-4.4,-3.2,-26,3.4),q(-4.4,-3.2,7.6,10.5),q(-70.6,-69.4,-49.4,10.5,1.8),q(69.4,70.6,-49.4,10.5,1.8),q(-70.6,70.6,-50.6,-49.4,1.8),K(`stone`,-69.4,A,0,.03,4.2,6.8,.01),K(`stone`,A,j,0,.03,-D,12.1,.01);for(let[e,t]of[[-62,8],[-48,0],[-40,8.5],[-24,8],[-14,0]])lt(e,8.65,2.2,t);ut(-56,-16,-2,1.2,5);for(let[e,t,n,r]of[[-7,-8,3,10.5],[-9,-24,3,11],[44,4,3,9.5],[-52,-12,2.6,9.5],[-36,-12,2.6,0],[-22,-12,2.6,9],[-58,-36,2.6,0],[-42,-36,2.6,10],[-24,-36,2.6,0]])lt(e,t,n,r);ut(-62,-30,-24,-20.8,4);for(let e of[`stone`,`hedge`,`lawn`]){let t=new d(E(x(ct[e])),e===`lawn`?Ke:U[e]);for(let t of ct[e])t.dispose();t.receiveShadow=!0,t.castShadow=e!==`lawn`,O.add(t)}for(let e of st.meshes(V))E(e.geometry),O.add(E(e));for(let[e,t]of[[it.bark,H],[it.leaves,V]]){let n=x(e);for(let t of e)t.dispose();let r=new d(E(n),t);r.castShadow=r.receiveShadow=!0,O.add(r)}let dt=[16,22,28].map((e,t)=>{let n={bark:[],leaves:[]};pe((e,t)=>n[e].push(t),G).tree(0,0,0,10,e,.3+.03*t);let r={bark:x(n.bark),leaves:x(n.leaves)};for(let e of[...n.bark,...n.leaves])e.dispose();return{...r,mats:[],tints:[]}}),ft=new e,pt=new y(0,1,0),mt=(e,t,r)=>{let i=r/10,a=.8+G()*.5,o=dt[Math.floor(G()*dt.length)];o.mats.push(new n().compose(new y(e,-i*2,t),ft.setFromAxisAngle(pt,G()*Math.PI*2),new y(i*a,i,i*a))),o.tints.push(new f().setRGB(.85+G()*.3,.88+G()*.24,.8+G()*.25))},ht=[[],[],[]];for(let e=-340;e<=400;e+=30)for(let t=-440;t<=0;t+=30){let n=e+(G()-.5)*12,r=t+(G()-.5)*12;if(n>-80&&n<80&&r>-62)continue;let i=Math.hypot(n+22,r-22),a=Math.hypot(n-14,r+10);if(a<190||G()<.5){if(i<210)for(let e=0;e<(i<120?3:2);e++)mt(n+(G()-.5)*18,r+(G()-.5)*18,9+G()*7);continue}let o=14+G()*10,s=12+G()*10,c=(a<260?7+G()*8:10+G()*16)*(a>300&&G()<.05?2:1);ht[a<260?0:a<340?1:2].push(B(new ee(o,c,s).rotateY((G()-.5)*.3).translate(n,c/2,r),9.6)),a<200&&G()<.5&&mt(n+(G()<.5?-1:1)*(o/2+3),r+s/2+3,8+G()*5)}for(let e of[-64,-48,-30,-14,2,20,38,54,70])mt(e,-56-G()*5,10+G()*5);for(let e of[-34,-14,4])mt(-76,e+G()*6,10+G()*4);ht.forEach((e,t)=>{if(e.length){O.add(new d(E(x(e)),Ze[t]));for(let t of e)t.dispose()}});for(let e of dt)for(let[t,n]of[[e.bark,H],[e.leaves,V]]){let r=new oe(E(t),n,Math.max(1,e.mats.length));e.mats.forEach((e,t)=>r.setMatrixAt(t,e)),e.tints.forEach((e,t)=>r.setColorAt(t,e)),r.count=e.mats.length,r.computeBoundingSphere(),O.add(r)}let gt=E(new u({vertexShader:Re,fragmentShader:ze,uniforms:P,side:1,depthWrite:!1})),_t=new d(E(new h(600,48,24)),gt);_t.renderOrder=-1,_t.frustumCulled=!1,O.add(_t);let vt=new l;vt.add(new d(E(new h(100,48,24)),E(new u({vertexShader:Re,fragmentShader:ze,uniforms:{...P,uDisc:{value:0}},side:1,depthWrite:!1}))));let yt=E(new ae(C)),bt=null,J=new s(16777215,3.4);J.castShadow=!0;let Y=J.shadow;Y.mapSize.set(_?1024:2048,_?1024:2048),Object.assign(Y.camera,{left:-52,right:52,top:46,bottom:-36,near:20,far:320}),Y.camera.updateProjectionMatrix(),Y.bias=-4e-4,Y.normalBias=.03,Y.radius=4,J.target.position.set(14,6,-6),O.add(J,J.target);let X=new g(16777215,16777215,.5),Z=new s(16777215,0);Z.target=J.target,O.add(X,Z);let xt=[],St=e=>{for(let e of xt)O.remove(e),e.geometry.dispose();xt=[];let{parts:t,occ:n}=Ae(e);for(let e of _e){let n=t[e];if(!n.length)continue;if(!ye.has(e))for(let t of n)B(t,ve[e]);if(n.some(e=>!e.index)){let e=n.map(e=>e.index?e.toNonIndexed():e);for(let t of n)e.includes(t)||t.dispose();n=e}let r=x(n);for(let e of n)e.dispose();if(!r)continue;let i=new d(r,U[e]);i.castShadow=e!==`glass`&&e!==`rail`&&e!==`lamp`,i.receiveShadow=e!==`lamp`,e===`rail`&&(i.renderOrder=2),O.add(i),xt.push(i)}let r=Math.min(w,n.length/7);for(let e=0;e<r;e++)F.uBoxC.value[e].set(n[e*7],n[e*7+1],n[e*7+2],n[e*7+3]),F.uBoxH.value[e].set(n[e*7+4],n[e*7+5],n[e*7+6]);F.uBoxN.value=r},Ct={type:a,minFilter:te,magFilter:te},Q=E(new ie(2,2,{...Ct,depthBuffer:!0,samples:2})),wt=E(new ie(2,2,Ct)),Tt=E(new ie(2,2,Ct)),Et=E(new b(2,2)),Dt=(e,t)=>E(new u({vertexShader:Be,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})),Ot=e=>{let t=new d(Et,e);return t.frustumCulled=!1,t},kt=(e,t)=>{let n=Dt(Ve,{uSrc:{value:e},uDir:{value:new v},uThresh:{value:t}}),r=new l;return r.add(Ot(n)),{s:r,dir:n.uniforms.uDir.value}},At=kt(Q.texture,.9),jt=kt(wt.texture,-1),Mt=Dt(He,{uMain:{value:Q.texture},uBloom:{value:Tt.texture},uHaze:S.uHaze,uBloomK:{value:1},uFade:{value:0},uTime:{value:0},uExposure:{value:1},uSat:{value:1},uLift:{value:new y},uWarm:{value:new y},uCool:{value:new y}});c.add(Ot(Mt));let Nt=[[U.stone,`uFacade`],[U.plaster,`uFacade`],[U.brick,`uBrick`],[U.trim,`uTrim`],[U.frame,`uFrame`],[U.glass,`uGlass`],[U.interior,`uInterior`],[U.hedge,`uFoliage`],[We,`uPaving`],[Ke,`uLawn`],...Ze.map(e=>[e,`uCity`])],$=(e,t)=>{let n=S[e].value;return t.setRGB(n.x,n.y,n.z,ne)},Pt=new y(0,1,0),Ft=new y(-7,6.5,-8),It=new y(34,5,10.9),Lt=new v,Rt=le(p,fe,{base:_?new y(-10,1.6,38):new y(-22,1.6,22),focus:_?new y(12,12,-6):new y(9,11,-4),yaw:_?0:.3}),zt=``,Bt=``,Vt=``;return{update(e){let{time:t,intro:n,params:r}=e,i=[`floors`,`facade`,`greenery`].map(e=>r[e]).join();i!==zt&&(zt=i,St(r),Vt=``);let a=r.sunHeight;M.set(-Math.sin(r.sun)*Math.cos(a),Math.sin(a),Math.cos(r.sun)*Math.cos(a));let o=me(r.light);J.position.copy(J.target.position).addScaledVector(M,160),Z.position.set(-M.x,.35,-M.z).multiplyScalar(60).add(J.target.position),Y.radius=o.softness,F.uLeafT1.value.crossVectors(M,Pt).normalize(),F.uLeafT2.value.crossVectors(F.uLeafT1.value,M),F.uLeafC.value.set(Ft.dot(F.uLeafT1.value),Ft.dot(F.uLeafT2.value)),F.uLeafC2.value.set(It.dot(F.uLeafT1.value),It.dot(F.uLeafT2.value)),F.uLeaves.value=r.leaves,F.uTime.value=t,P.uHazeK.value=r.haze;for(let[e,t]of Nt)$(t,e.color);We.color.multiplyScalar(.86),Ke.color.multiplyScalar(1.1),U.hedge.color.multiplyScalar(1.5),U.glass.color.multiplyScalar(.2),U.glass.emissive.setRGB(1,.58,.26).multiplyScalar(1.5);for(let e of Ze)e.emissive.setRGB(1,.62,.3).multiplyScalar(1.1);$(`uGlow`,J.color),F.uSunCol.value.copy(J.color),J.intensity=7.2*o.sunK*m.smoothstep(a,-.02,.12)*(1+.03*Math.sin(t*.4)+.015*Math.sin(t*1.1)),O.environmentIntensity=o.fill,$(`uSky`,X.color),$(`uPaving`,X.groundColor).lerp(J.color,.25).multiplyScalar(.7),X.intensity=o.bounce,Z.color.copy(X.groundColor).lerp(J.color,.5),Z.intensity=J.intensity*.06*o.bounce,$(`uInterior`,U.interior.emissive).multiplyScalar(.55+.9*o.windows),$(`uInterior`,U.lamp.emissive).multiplyScalar(5+4*o.windows),F.uWin.value=o.windows,$(`uHaze`,k.color);let s=Ue(n/2.8);k.density=.0022*r.haze*o.fog+(1-s)*.03,F.uFogK.value=r.haze*o.fog,F.uMist.value=o.mist;let c=[r.sun,a,r.haze,...[`uSky`,`uHaze`,`uGlow`].map(e=>S[e].value.toArray().join())].join(),l=C.getRenderTarget();if(c!==Bt){Bt=c;let e=yt.fromScene(vt,0,.5,500);bt?.dispose(),bt=e,O.environment=e.texture,U.glass.envMap=e.texture,U.rail.envMap=e.texture}let u=`${zt}|${r.sun}|${a}`;u!==Vt&&(Vt=u,C.shadowMap.needsUpdate=!0),Rt(e,r.glide),_t.position.copy(p.position),C.getDrawingBufferSize(Lt);let d=Math.max(2,Lt.x),f=Math.max(2,Lt.y);if(Q.width!==d||Q.height!==f){Q.setSize(d,f);let e=Math.max(2,Math.round(d/4)),t=Math.max(2,Math.round(f/4));wt.setSize(e,t),Tt.setSize(e,t),At.dir.set(1.5/e,0),jt.dir.set(0,1.5/t)}C.setRenderTarget(Q),C.clear(!0,!0,!1),C.render(O,p),C.setRenderTarget(wt),C.render(At.s,p),C.setRenderTarget(Tt),C.render(jt.s,p),C.setRenderTarget(l);let h=Mt.uniforms;h.uTime.value=t,h.uBloomK.value=r.bloom,h.uExposure.value=r.exposure*o.exposure,h.uSat.value=o.sat,h.uLift.value.fromArray(o.lift),h.uWarm.value.fromArray(o.warm),h.uCool.value.fromArray(o.cool),h.uFade.value=1-m.smoothstep(n,.05,1.1)},dispose(){for(let e of xt)e.geometry.dispose();bt?.dispose();for(let e of T)e.dispose();C.shadowMap.enabled=!1}}}};export{H as t};