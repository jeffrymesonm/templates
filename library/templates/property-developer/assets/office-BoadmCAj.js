import{A as e,Dt as t,It as n,J as r,K as i,L as a,M as o,Mn as s,Nn as c,Ot as l,S as u,Tn as d,Tt as f,Vn as p,Y as m,_t as h,cr as g,d as _,ht as v,jn as y,lr as b,n as ee,pr as te,qt as x,t as ne,ur as re}from"./three.module-BtOiv6AT.js";import{t as S}from"./BufferGeometryUtils-BCwTizHk.js";import{t as ie}from"./Reflector-DJOHSeQL.js";import{t as C}from"./RoundedBoxGeometry-07rcVPj6.js";import{t as ae}from"./cameraRig-DZYJJrwO.js";import{a as oe,c as se,i as ce,n as w,o as T,r as le,s as ue,t as E,u as de}from"./lightPresets-Cae86WMC.js";var D=40,fe=[`stone`,`frame`,`metal`,`glass`,`lobby`,`interior`,`lamp`,`hedge`],pe={stone:3.6,frame:1,metal:2,glass:1,lobby:1,interior:3,lamp:1,hedge:3},O=26,k=22,A=8.4,me=1.1,j=3.8,M=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},N=(e,t,n)=>e+(t-e)*n,P=(e,t,n)=>{let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},F=(e,t)=>(e%t+t)%t,I=(e,t,n,r,i)=>{let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=F(a,n),f=F(a+1,n),p=F(o,r),m=F(o+1,r),h=P(d,p,i),g=P(f,p,i),_=P(d,m,i),v=P(f,m,i);return h+(g-h)*l+(_-h)*u+(h-g-_+v)*l*u},L=(e,t,n,r,i,a=4)=>{let o=0,s=.5,c=0;for(let l=0;l<a;l++)o+=s*I(e*n,t*r,n,r,i+l),c+=s,s*=.5,n*=2,r*=2;return o/c},R=(e,t,n)=>{let r=new o(e,t,t);return r.wrapS=r.wrapT=d,r.magFilter=v,r.minFilter=h,r.generateMipmaps=!0,r.anisotropy=8,n&&(r.colorSpace=y),r.needsUpdate=!0,r},z=(e,t,n)=>{let r=e*e,i=new Uint8Array(r*4),a=new Uint8Array(r*4),o=new Uint8Array(r*4),s=new Float32Array(r);for(let t=0;t<e;t++)for(let r=0;r<e;r++){let a=n((r+.5)/e,(t+.5)/e),c=t*e+r;for(let e=0;e<3;e++)i[c*4+e]=Math.round(Math.min(1,Math.max(0,a.c[e]))*255);i[c*4+3]=255,o[c*4+1]=Math.round(Math.min(1,Math.max(0,a.r))*255),o[c*4+3]=255,s[c]=a.h}for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=n*e+r,o=s[n*e+(r+1)%e]-s[n*e+(r-1+e)%e],c=s[(n+1)%e*e+r]-s[(n-1+e)%e*e+r],l=-o*t,u=-c*t,d=Math.hypot(l,u,1);a[i*4]=Math.round((l/d*.5+.5)*255),a[i*4+1]=Math.round((u/d*.5+.5)*255),a[i*4+2]=Math.round((1/d*.5+.5)*255),a[i*4+3]=255}return{map:R(i,e,!0),normalMap:R(a,e,!1),roughnessMap:R(o,e,!1)}},he=(e,t)=>{let n=t*6,r=Math.floor(n),i=e*3,a=F(Math.floor(i),3),o=i-Math.floor(i),s=n-r,c=M(0,.008,Math.min(o,1-o)*1.6)*M(0,.008,Math.min(s,1-s)*.8),l=P(a,F(r,6),71),u=L(e,t,3,40,72,4),d=L(e,t,12,12,73,3),f=M(.76,.82,L(e,t,160,160,74,2)),p=(.93+.07*l)*(.95+.07*u)*(.96+.06*d)*(1-.06*f)*N(.78,1,c);return{c:[p,p*.99,p*.97],h:c*.5+u*.03-f*.05,r:.62+.16*d+.1*f}},ge=(e,t)=>{let n=t*8,r=Math.floor(n),i=e*4+r%2*.5,a=F(Math.floor(i),4),o=i-Math.floor(i),s=n-r,c=M(0,.012,Math.min(o,1-o))*M(0,.024,Math.min(s,1-s)),l=P(a,F(r,8),41),u=L(e,t,128,128,42,2),d=M(.66,.72,L(e,t,200,200,43,2)),f=L(e,t,8,8,44,3),p=(.88+.12*l)*(.92+.14*u)*(1-.3*d)*(.95+.08*f)*N(.72,1,c);return{c:[p,p,p*1.01],h:c*(.8+.1*u),r:.58+.24*u+.1*(1-c)}},_e=(e,t)=>{let n=L(e,t,48,48,31,4),r=L(e,t,6,6,33,4),i=.95+(r-.5)*.08+(n-.5)*.04;return{c:[i,i,i],h:n*.7+r*.3,r:.8+.1*n}},ve=(e,t)=>{let n=L(e,t,40,40,81,3),r=L(e,t,6,6,82,3),i=M(.62,.42,n),a=(.7+.5*r)*N(1.15,.35,i);return{c:[a*.95,a,a*.85],h:n*.8+r*.4,r:.85}},ye=(e,t)=>{let n=e.attributes.position,r=e.attributes.normal,i=e.attributes.uv;for(let e=0;e<n.count;e++){let a=Math.abs(r.getX(e)),o=Math.abs(r.getY(e)),s=Math.abs(r.getZ(e));o>=a&&o>=s?i.setXY(e,n.getX(e)/t,n.getZ(e)/t):a>=s?i.setXY(e,n.getZ(e)/t,n.getY(e)/t):i.setXY(e,n.getX(e)/t,n.getY(e)/t)}return e},be=[[-4.6,-5.6],[-4.6,-14],[3.2,8.4],[21.5,8.4]],xe=e=>{let t=Object.fromEntries(fe.map(e=>[e,[]])),n=[],r=(e,[r,i,a,o,s,c],l=.03,u=!0)=>{let d=i-r,f=o-a,p=c-s,m=Math.min(l,Math.min(d,f,p)*.45),h=m>.003?new C(d,f,p,2,m):new _(d,f,p);t[e].push(h.translate((r+i)/2,(a+o)/2,(s+c)/2)),u&&n.length<D*7&&n.push((r+i)/2,(a+o)/2,(s+c)/2,m,d/2,f/2,p/2)},i=(e,n,r,i,a,o,s)=>{let c=(P(s,1,3)-.5)*.03,l=(P(s,2,7)-.5)*.02,u=new x(n,r).rotateY(c).rotateX(l);t[e].push(i?u.rotateY(-Math.PI/2).translate(0,o,a):u.translate(a,o,0))},a=Math.round(f.clamp(e.floors,6,40)),o=A+me,s=o+a*j,c=f.clamp(e.mullion,1.1,3.2),l=Math.max(4,Math.round(O/c)),u=Math.max(4,Math.round(k/c));r(`frame`,[.35,O,A,s,-k,-.35],.02),r(`stone`,[0,O+.2,A,o,-k-.2,0],.03),r(`frame`,[-.3,O+.2,s,s+.6,-k-.2,.3],.02,!1);for(let e=1;e<l;e++){let t=O*e/l;r(`frame`,[t-.045,t+.045,o,s,-.05,.26],.01,!1)}for(let e=1;e<u;e++){let t=-k*e/u;r(`frame`,[-.26,.05,o,s,t-.045,t+.045],.01,!1)}r(`frame`,[-.16,.16,o,s,-.16,.16],.01,!1);for(let e=0;e<=a;e++){let t=o+e*j;r(`frame`,[0,O,t-.05,t+.05,-.05,.12],.008,!1),r(`frame`,[-.12,.05,t-.05,t+.05,-k,0],.008,!1)}for(let e=0;e<a;e++){let t=o+(e+.5)*j;for(let n=0;n<l;n++)i(`glass`,O/l,j,!1,O*(n+.5)/l,t,e*131+n);for(let n=0;n<u;n++)i(`glass`,k/u,j,!0,-k*(n+.5)/u,t,e*173+n+7919)}let d=O/l*3;r(`stone`,[0,1.5,0,A,-1.5,0],.03);for(let e=d;e<O-.8;e+=d)r(`stone`,[e-.55,e+.55,0,A,-1.1,0],.03);for(let e=-d;e>-k+.8;e-=d)r(`stone`,[0,1.1,0,A,e-.55,e+.55],.03);r(`metal`,[0,O,A-.16,A+.02,-k,0],.01);let p=3.6,m=-3.6,h=2.4;for(let e=p+h;e<O;e+=h)r(`frame`,[e-.03,e+.03,0,A-.16,m-.25,m+.04],.006,!1);for(let e=m-h;e>-k;e-=h)r(`frame`,[p-.04,p+.25,0,A-.16,e-.03,e+.03],.006,!1);r(`frame`,[p,O,0,.12,m-.1,m+.06],.006,!1),r(`frame`,[p-.06,p+.1,0,.12,-k,m],.006,!1),r(`frame`,[p-.06,p+.06,0,A-.16,m-.06,m+.06],.006,!1);let g=O-p,v=k+m,y=Math.round(g/h),b=Math.round(v/h);for(let e=0;e<y;e++)i(`lobby`,g/y,A-.28,!1,p+g*(e+.5)/y,(A-.04)/2,e+50);for(let e=0;e<b;e++)i(`lobby`,v/b,A-.28,!0,m-v*(e+.5)/b,(A-.04)/2,e+90);for(let e of t.lobby){e.computeBoundingBox();let t=e.boundingBox;t.max.x-t.min.x>.5?e.translate(0,0,m-.06):e.translate(p+.06,0,0)}r(`interior`,[p,O,0,A-.16,-k,-k+.4],.02),r(`interior`,[8.5,20.5,0,A-.16,-k+.4,-12.5],.03),r(`stone`,[10.5,17,0,1.1,-9.4,-8.4],.04);for(let e=1.2;e<O;e+=2.4)for(let t=-1.2;t>-k+.6;t-=2.4)r(`lamp`,[e-.14,e+.14,A-.19,A-.15,t-.14,t+.14],0,!1);if(e.canopy>.5){let e=O*.3,t=O*.84;r(`metal`,[e,t,6.1,6.55,m,6],.03),r(`frame`,[e-.04,t+.04,6.08,6.6,5.94,6.06],.01,!1);for(let n=e+1;n<t-.5;n+=2)for(let e=-1.6;e<5.6;e+=2.2)r(`lamp`,[n-.12,n+.12,6.06,6.1,e-.12,e+.12],0,!1)}for(let[e,t]of[[-21,11.3],[-13.5,11.3]])r(`stone`,[e,e+4.2,0,.46,t,t+.6],.03);for(let[e,t]of be)r(`stone`,[e,e+2.2,0,.72,t,t+2.2],.04);if(e.pool>.5)for(let e of[[-25,-3,0,.18,13.6,14.1],[-25,-3,0,.18,17.9,18.4],[-25,-24.5,0,.18,14.1,17.9],[-3.5,-3,0,.18,14.1,17.9]])r(`stone`,e,.02,!1);return{parts:t,occ:n,top:s}},Se=(e,t)=>{let n=L(e,t,180,180,91,2),r=L(e,t,3,3,92,3),i=L(e,t,10,10,93,3),a=.36*(.84+.32*n)*(.9+.2*r)*(1-.12*M(.55,.75,i));return{c:[a,a,a*1.03],h:n*.6,r:.84+.1*n-.08*r}},Ce=[`stone`,`paving`,`asphalt`,`paint`,`metal`,`glass`,`hedge`,`bark`,`leaves`],we=n=>{let r=Object.fromEntries(Ce.map(e=>[e,[]])),i=new t().makeRotationY(-.5635).setPosition(-24,0,26),a=11,o=()=>(a=a*16807%2147483647)/2147483647,s=(e,t,n=0)=>{let a=(t.index?t.toNonIndexed():t).applyMatrix4(i);r[e].push(n?ye(a,n):a)},c=(e,t,n,r,i,a,o,c=0,l=3.6)=>{let u=n-t,d=i-r,f=o-a;s(e,(c>0?new C(u,d,f,2,Math.min(c,Math.min(u,d,f)*.45)):new _(u,d,f)).translate((t+n)/2,(r+i)/2,-(a+o)/2),l)},l=(e,t,n,r,i,a,o=0)=>s(e,new x(n-t,a-i).rotateX(-Math.PI/2).translate((t+n)/2,r,-(i+a)/2),o),u=(e,t,r,a,o,s,c)=>{let l=new b(e,0,-t).applyMatrix4(i),u=new b(r,0,-a).applyMatrix4(i);n.hedge(l.x,l.z,u.x,u.z,o,s,c)},d=T(s,o),f=(e,t,n,r)=>d.tree(e,t,-n,r),p=(t,n,r)=>{s(`metal`,new e(.05,.075,6.5,12).translate(t,2.8,-n));let i=t+r*1.5;c(`metal`,Math.min(t,i),Math.max(t,i),5.98,6.06,n-.04,n+.04,.01),c(`metal`,i-.35,i+.35,5.9,6.02,n-.12,n+.12,.02)},m=(t,n)=>s(`metal`,new e(.09,.1,.85,14).translate(t,-.025,-n)),h=(e,t,n,r,i)=>{c(`stone`,e-n/2,e+n/2,0,.55,t-r/2,t+r/2,.04),c(`hedge`,e-n/2+.08,e+n/2-.08,.5,.56,t-r/2+.08,t+r/2-.08,0,3);let a=Math.min(n,r)/2-.12,o=Math.max(1,Math.round((r-.24)/(a*1.7)));for(let n=0;n<o;n++)d.bush(e,.5,-(t-r/2+.12+a+n*(r-.24-2*a)/Math.max(1,o-1)),a);i&&f(e,.55,t,i)},g=(e,t,n,r,i,a,s)=>{let d=(n,r)=>[Math.min(e+t*n,e+t*r),Math.max(e+t*n,e+t*r)],h=(e,t,n,r,i,a,o,s=0,l=3.6)=>c(e,...d(t,n),r,i,a,o,s,l),g=(e,t,n,r,i,a,o=0)=>l(e,...d(t,n),r,i,a,o);h(`stone`,0,.3,-.7,.02,-60,240,.02),h(`stone`,.3,.7,-.7,-.15,-60,240,.02),h(`stone`,.7,1.1,-.7,-.3,-60,240,.02),h(`paving`,1.1,4.8,-.75,-.45,-60,240,0,2.4),h(`stone`,4.75,5.05,-.75,-.43,-60,240,.03),g(`asphalt`,5.05,12.55,-.6,-60,240,6),h(`stone`,12.55,12.85,-.75,-.43,-60,240,.03),h(`paving`,12.85,16.3,-.75,-.45,-60,240,0,2.4),h(`stone`,16.3,16.9,-.75,.6,-60,240,.03),u(e+t*16.6,-60,e+t*16.6,240,.6,.9,.9),g(`hedge`,16.9,150,.4,-60,240,3),g(`paint`,5.2,5.35,-.59,-60,240),g(`paint`,12.25,12.4,-.59,-60,240);for(let e=-60;e<240;e+=9)(e+3<s-4.5||e>s+4.5)&&g(`paint`,8.725,8.875,-.59,e,e+3);for(let e=5.4;e<12;e+=1)g(`paint`,e,e+.5,-.588,s-2,s+2);g(`paint`,5.35,8.75,-.588,s-3.1,s-2.8),g(`paint`,8.85,12.25,-.588,s+2.8,s+3.1);for(let r of n)h(`metal`,2.3,3.6,-.46,-.43,r-.65,r+.65,.01),f(e+t*2.95,-.45,r,8+o()*1.4);for(let n of r)h(`metal`,13.95,15.25,-.46,-.43,n-.65,n+.65,.01),f(e+t*14.6,-.45,n,7.6+o()*1.4);for(let n of i)p(e+t*4.45,n,t);for(let n of a)p(e+t*13.15,n,-t);for(let n of[-2.3,-.9,.9,2.3])m(e+t*4.5,s+n),m(e+t*13.1,s+n)};l(`paving`,-9.7,39.7,0,-60,105,4.8),g(-9.7,-1,[40,58,68,79],[55,73],[36,63,90],[46,80],48.5),g(39.7,1,[28,40,52,66,80],[34,58,76],[34,60,86],[46,72],46),c(`stone`,-10,40,0,1.1,105,105.6,.03),u(-10,105.3,40,105.3,1.1,.9,.8),l(`hedge`,-9.7,39.7,.4,105.7,240,3);for(let[e,t]of[[59.1,59.2],[63.4,63.5]])c(`metal`,-25.75,-25.65,-.45,2.6,e,t),c(`metal`,-24.35,-24.25,-.45,2.6,e,t);return c(`metal`,-25.9,-24,2.6,2.72,58.9,63.7,.02),s(`glass`,new x(4.3,2.8).rotateY(Math.PI/2).translate(-25.68,1.15,-61.3)),s(`glass`,new x(1.4,2.8).translate(-24.98,1.15,-63.42)),c(`stone`,-25.6,-25.1,-.45,0,59.8,62.8,.03),h(-8.3,34,1.3,4,0),h(-8.3,46,1.3,3.4,0),h(-7.2,62,2.2,2.2,6),h(-7.2,80,2.2,2.2,6.4),r},B=`
uniform vec3 uSky, uHaze, uGlow, uSunDir, uInterior;
uniform float uHazeK, uTime;
vec3 skLin(vec3 c){ return pow(c, vec3(2.2)); }
float skH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float skN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(skH(i), skH(i + vec2(1., 0.)), f.x), mix(skH(i + vec2(0., 1.)), skH(i + vec2(1., 1.)), f.x), f.y); }
float skF(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 5; i++) { s += a * skN(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .96875; }
vec3 skyCol(vec3 d){
  vec3 haze = skLin(uHaze), glow = skLin(uGlow), sky = skLin(uSky);
  float e = max(d.y, 0.);
  float az = max(dot(normalize(d.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
  vec3 hor = mix(haze, glow, .08 + .2 * pow(az, 3.));
  vec3 c = mix(hor, sky, pow(smoothstep(-.02, .62, e), .55));
  float g = max(dot(d, uSunDir), 0.);
  c += glow * (pow(g, 8.) * .22 + pow(g, 180.) * 1.6 + smoothstep(.9995, .9998, g) * 18.);
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
`,Te=`
#define NB ${D}
uniform vec4 uBoxC[NB];
uniform vec3 uBoxH[NB];
uniform int uBoxN;
uniform vec3 uLeafT1, uLeafT2;
uniform vec2 uLeafC, uLeafC2;
uniform float uLeaves, uR0, uReflK, uFloorY, uFloorH, uPaneW, uMist, uFogK, uWin;
uniform vec3 uSunCol;
varying vec3 vOfW, vOfN;
${B}
float vhash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f); return mix(mix(vhash(i), vhash(i + vec2(1., 0.)), u.x), mix(vhash(i + vec2(0., 1.)), vhash(i + vec2(1., 1.)), u.x), u.y); }
float vfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.1; a *= .5; } return s / .9375; }
float sdOffice(vec3 p){
  float st = dot(p.xz - vec2(-24., 26.), vec2(.8455, .534));
  float d = p.y + (((st < -10. && st > -26.6) || (st > 40. && st < 56.6)) ? .6 : 0.);
  for (int i = 0; i < NB; i++) {
    if (i >= uBoxN) break;
    vec4 c = uBoxC[i];
    vec3 q = abs(p - c.xyz) - uBoxH[i] + c.w;
    d = min(d, length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - c.w);
  }
  return d;
}
float officeAO(vec3 p, vec3 n){
  if (p.y > 14. || length(p.xz - vec2(4., -4.)) > 42.) return 1.;
  float o = 0.;
  for (int i = 1; i <= 4; i++) {
    float h = .1 * float(i * i);
    o += clamp((h - sdOffice(p + n * h)) / h, 0., 1.) * (1.2 - .2 * float(i));
  }
  return clamp(1. - o * .32, 0., 1.);
}
float leafMask(vec3 w){
  if (uLeaves <= 0. || w.y > 3.) return 1.;
  vec2 q = vec2(dot(w, uLeafT1), dot(w, uLeafT2));
  float wob = (vnoise(q * .3 + 3.) - .5) * .6;
  float env = max(smoothstep(1.05, .4, length((q - uLeafC) / vec2(7., 4.2)) + wob), smoothstep(1.05, .4, length((q - uLeafC2) / vec2(6., 3.6)) + wob) * .8);
  vec2 sway = vec2(sin(uTime * .7) + sin(uTime * 1.13 + 1.), cos(uTime * .9) + sin(uTime * .53)) * .05;
  float holes = vfbm(q * 1.05 + sway + vec2(uTime * .015, 0.));
  float leaf = smoothstep(.4, .6, holes + (vnoise(q * 4.2 + sway * 2.5) - .5) * .22);
  return 1. - uLeaves * env * leaf * .9;
}
`,Ee=`
float ambientOcclusion = officeAO(vOfW, normalize(vOfN));
reflectedLight.indirectDiffuse *= ambientOcclusion;
#if defined( USE_ENVMAP ) && defined( STANDARD )
  float dotNVo = saturate( dot( geometryNormal, geometryViewDir ) );
  reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVo, ambientOcclusion, material.roughness );
#endif
reflectedLight.directDiffuse *= mix(1., ambientOcclusion, .3);
`,De=`
#ifdef OFFICE_GLASS
{
  vec3 gV = normalize(vOfW - cameraPosition);
  vec3 gN = normalize(vOfN);
  vec2 wq = vec2(vOfW.x - vOfW.z, vOfW.y);
  vec2 cell = floor(wq / vec2(uPaneW, uFloorH));
  float ph = vhash(cell + 17.);
  float ph2 = vhash(cell * 1.7 + 41.);
  #ifdef TOWER_FLAT
  ph = .5;
  #endif
  gN = normalize(gN + vec3(vnoise(wq * .45) - .5, (vnoise(wq * .45 + 7.) - .5) * .5, vnoise(wq * .45 + 3.) - .5) * .018);
  vec3 gR = reflect(gV, gN);
  float cosT = max(dot(-gV, gN), 0.);
  float fr = uR0 + (1. - uR0) * pow(1. - cosT, 5.);
  vec3 refl = skyCol(gR) * uReflK * (.82 + .32 * ph) * mix(vec3(1.), vec3(.94, .98, 1.04), ph2);
  #ifdef TOWER_FLAT
  float ff = .5;
  #else
  float ff = fract((vOfW.y - uFloorY) / uFloorH);
  #endif
  #ifdef OFFICE_LOBBY
  float a = mix(.95, 1., fr);
  refl *= mix(.3, 1., smoothstep(.05, .4, gR.y));
  vec3 body = outgoingLight * (.5 + .35 * ph2) + skLin(uInterior) * .012 * (.6 + .4 * ph);
  outgoingLight = (body * (1. - fr) * .95 + refl * fr) / a;
  diffuseColor.a = a;
  #else
  float vision = step(.24, ff) * step(ff, .9);
  vec3 body = outgoingLight * (1. + (1. - vision) * .6) * (.75 + .55 * ph2);
  body += mix(skLin(uHaze), skLin(uInterior), .4) * .022 * vision * smoothstep(.24, .9, ff) * (.5 + ph);
  body += skLin(uInterior) * (.035 + .3 * uWin) * smoothstep(.62, .86, ff) * vision * (.4 + .6 * step(.35, ph));
  body += skLin(uInterior) * uWin * .5 * vision * step(.42, ph2) * (.6 + .4 * ph);
  outgoingLight = body * (1. - fr) + refl * fr;
  #ifdef TOWER_HAZE
  outgoingLight = mix(outgoingLight, skyCol(normalize(vec3(gV.x, clamp(gV.y, .02, .06), gV.z))) * .92, 1. - exp(-length(vOfW - cameraPosition) * TOWER_HAZE));
  #endif
  #endif
}
#endif
#ifdef OFFICE_HAZE
{
  vec3 hV = normalize(vOfW - cameraPosition);
  outgoingLight = mix(outgoingLight, skyCol(normalize(vec3(hV.x, clamp(hV.y, .02, .06), hV.z))) * .92, 1. - exp(-length(vOfW - cameraPosition) * OFFICE_HAZE));
}
#endif
`,Oe=`
#ifdef USE_FOG
vec3 hV = vOfW - cameraPosition;
float hD = length(hV);
float hAz = max(dot(normalize(hV.xz + 1e-4), normalize(uSunDir.xz + 1e-4)), 0.);
vec3 hFog = mix(fogColor, uSunCol, .08 + .2 * pow(hAz, 3.));
float hNear = 1. - exp(-fogDensity * fogDensity * hD * hD);
float hFar = 1. - exp(-max(hD - 90., 0.) * .0022 * uFogK);
float hMist = uMist * smoothstep(120., 380., hD) * exp(-max(vOfW.y, 0.) * .08);
float hK = 1. - (1. - hNear) * (1. - hFar * .8) * (1. - hMist * .5);
gl_FragColor.rgb = mix(gl_FragColor.rgb, hFog * (1. + .05 * hMist), clamp(hK, 0., 1.));
#endif`,ke=`directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ]`,Ae=`
varying vec3 vDir;
void main(){
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,je=`
${B}
varying vec3 vDir;
void main(){ gl_FragColor = vec4(skyCol(normalize(vDir)), 1.); }`,Me=`
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
  c *= 1. - .16 * pow(length((vUv - .5) * vec2(1.1, 1.)) * 1.3, 2.4);
  c = mix(c, uHaze, uFade);
  c += (hash(gl_FragCoord.xy + fract(uTime * 7.3) * 113.) - .5) * .015;
  gl_FragColor = vec4(c, 1.);
}`,Fe=e=>{let t=f.clamp(e,0,1);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},V={id:`office`,title:`Office`,palette:{uSky:{cssVar:`--office-sky`,label:`Sky`,fallback:E.golden.colors.sky},uHaze:{cssVar:`--office-haze`,label:`Haze`,fallback:E.golden.colors.haze},uGlow:{cssVar:`--office-sun`,label:`Sun`,fallback:E.golden.colors.sun},uStone:{cssVar:`--office-stone`,label:`Stone`,fallback:`#ddd6ca`},uPaving:{cssVar:`--office-paving`,label:`Paving`,fallback:`#c4c0b9`},uFrame:{cssVar:`--office-frame`,label:`Mullions`,fallback:`#2a2e33`},uMetal:{cssVar:`--office-metal`,label:`Canopy`,fallback:`#c9cccf`},uGlass:{cssVar:`--office-glass`,label:`Glass`,fallback:`#1f2d38`},uInterior:{cssVar:`--office-interior`,label:`Lobby light`,fallback:`#f4c992`},uFoliage:{cssVar:`--office-foliage`,label:`Planters`,fallback:`#2f4b2c`}},params:[w,{key:`sun`,label:`Sun angle`,min:-3.14,max:3.14,step:.01,value:E.golden.sun},{key:`sunHeight`,label:`Sun height`,min:.04,max:1.2,step:.01,value:E.golden.sunHeight},{key:`floors`,label:`Floors`,min:8,max:40,step:1,value:24},{key:`mullion`,label:`Mullion spacing`,min:1.1,max:3.2,step:.05,value:1.6},{key:`tint`,label:`Glass tint`,min:0,max:1,step:.05,value:.5},{key:`canopy`,label:`Canopy`,min:0,max:1,step:1,value:1},{key:`pool`,label:`Reflecting pool`,min:0,max:1,step:1,value:1},{key:`leaves`,label:`Leaf shadows`,min:0,max:1,step:.05,value:.4},{key:`haze`,label:`Haze`,min:0,max:3,step:.05,value:1},{key:`bloom`,label:`Bloom`,min:0,max:2,step:.05,value:1},{key:`exposure`,label:`Exposure`,min:.5,max:2,step:.05,value:1},{key:`glide`,label:`Camera glide`,min:0,max:2,step:.05,value:1}],fov:[50,62],travelPerScreen:0,creep:0,hover:{liquid:.25,turn:0},resolution:1,antialias:!1,variants:{...ce({sky:`--office-sky`,haze:`--office-haze`,sun:`--office-sun`})},setup({scene:e,camera:t,small:o,colors:d,pointer:h,renderer:C}){t.near=.2,t.far=1200,t.updateProjectionMatrix(),C.shadowMap.enabled=!0,C.shadowMap.type=1,C.shadowMap.autoUpdate=!1;let ce=[],w=e=>(ce.push(e),e),T=new s,E=new i(16777215,.003);T.fog=E;let k=new b(0,1,0),M={uSky:d.uSky,uHaze:d.uHaze,uGlow:d.uGlow,uInterior:d.uInterior,uSunDir:{value:k},uHazeK:{value:1},uTime:{value:0}},P={...M,uLeaves:{value:0},uLeafC:{value:new g},uLeafC2:{value:new g},uLeafT1:{value:new b(1,0,0)},uLeafT2:{value:new b(0,1,0)},uBoxC:{value:Array.from({length:D},()=>new re)},uBoxH:{value:Array.from({length:D},()=>new b)},uBoxN:{value:0},uR0:{value:.15},uReflK:{value:1},uFloorY:{value:A+me},uFloorH:{value:j},uPaneW:{value:1.6},uSunCol:{value:new u},uMist:{value:0},uFogK:{value:1},uWin:{value:0}},F=ee.lights_fragment_begin.replace(ke,`directLight.color *= officeLeaf;\n\t\t${ke}`),I=(e,t=``)=>(e.onBeforeCompile=e=>{Object.assign(e.uniforms,P),e.vertexShader=`varying vec3 vOfW, vOfN;
`+e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
vec4 oW = vec4(transformed, 1.);
#ifdef USE_INSTANCING
oW = instanceMatrix * oW;
#endif
vOfW = (modelMatrix * oW).xyz;
vOfN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=t+Te+e.fragmentShader.replace(`#include <aomap_fragment>`,Ee).replace(`#include <lights_fragment_begin>`,`float officeLeaf = leafMask(vOfW);\n${F}`).replace(`#include <opaque_fragment>`,`${De}\n#include <opaque_fragment>`).replace(`#include <fog_fragment>`,Oe)},e.customProgramCacheKey=()=>`office`+t,w(e)),L=e=>(w(e.map),w(e.normalMap),w(e.roughnessMap),e),R=L(z(256,.5,_e)),B={stone:I(new n({...L(z(512,1.6,he)),roughness:1,normalScale:new g(.6,.6)})),frame:I(new n({metalness:.6,roughness:.38})),metal:I(new n({...R,metalness:.35,roughness:.5,normalScale:new g(.2,.2)})),glass:I(new n({roughness:.5,metalness:0,envMapIntensity:.3}),`#define OFFICE_GLASS
`),lobby:I(new n({roughness:.3,transparent:!0,depthWrite:!1,envMapIntensity:0}),`#define OFFICE_GLASS
#define OFFICE_LOBBY
`),interior:I(new n({...R,emissiveMap:R.map,roughness:1})),lamp:I(new n({color:0,roughness:1})),hedge:I(new n({...L(z(256,3,ve)),roughness:1}))},V=I(new n({...L(z(512,1.8,ge)),roughness:1,normalScale:new g(.6,.6)})),Ie=de(I(new n({map:w(se()),alphaTest:.4,alphaToCoverage:!0,roughness:.78,color:13161656}),`#define OFFICE_HAZE .0035
#define OFFICE_FOLIAGE
`),!0),Le={stone:B.stone,paving:V,asphalt:I(new n({...L(z(512,1.2,Se)),roughness:1,normalScale:new g(.5,.5)})),paint:I(new n({color:14210510,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),metal:B.frame,glass:B.lobby,hedge:B.hedge,bark:I(new n({map:w(oe(3616810)),roughness:.9}),`#define OFFICE_HAZE .003
`),leaves:Ie},Re=ue();for(let[e,t]of be)Re.box(e+.1,e+2.1,.66,1.15,t+.1,t+2.1);let ze=we(Re);for(let e of Re.meshes(Ie))w(e.geometry),T.add(w(e));for(let e of Ce){let t=S(ze[e]);for(let t of ze[e])t.dispose();if(!t)continue;let n=new l(w(t),Le[e]);n.castShadow=e!==`paving`&&e!==`asphalt`&&e!==`paint`&&e!==`glass`,n.receiveShadow=!0,e===`glass`&&(n.renderOrder=2),T.add(n)}let H=new ie(w(new x(21,3.8)),{color:11187387,textureWidth:o?512:1280,textureHeight:o?256:640,multisample:o?0:2});w(H);let Be=H.onBeforeRender,U=!1;H.onBeforeRender=(...e)=>{U=!U,U&&Be.apply(H,e)},H.rotation.x=-Math.PI/2,H.position.set(-14,.1,16),T.add(H);let Ve=e=>I(new n({roughness:.5,metalness:0,envMapIntensity:.3}),`#define OFFICE_GLASS
`+e),He=Ve(`#define TOWER_HAZE .0035
`),W=Ve(`#define TOWER_HAZE .0045
#define TOWER_FLAT
`),Ue=new l(w(S([new _(20,90,20).translate(13,45,-352),new _(18,125,18).translate(-46,62,-493)])),W);T.add(Ue);let We=e=>w(S(e.flatMap(([e,t,n,r,i,a=0])=>{let o=-24+.534*e+.846*t,s=26-.846*e+.534*t,c=[new _(n,i+60,r).translate(o,(i-60)/2,s)];return a&&c.push(new _(n*.6,i*a,r*.6).translate(o,i+i*a/2,s)),c})));T.add(new l(We([[88,62,16,16,46,.22],[125,72,18,18,78,.15],[110,-78,16,14,13],[150,-52,14,14,16,.3]]),He),new l(We([[170,18,22,20,70,.18],[230,-10,24,22,74,.12],[215,-95,20,18,24,.25],[250,-60,18,18,32,.2],[260,150,22,22,70]]),W),new l(We([[380,-120,26,26,62,.2],[400,30,22,22,88],[360,-190,24,24,48],[390,120,24,24,70]]),W));let Ge=w(new c({vertexShader:Ae,fragmentShader:je,uniforms:M,side:1,depthWrite:!1})),G=new l(w(new p(600,48,24)),Ge);G.renderOrder=-1,G.frustumCulled=!1,T.add(G);let Ke=new s;Ke.add(new l(w(new p(100,48,24)),Ge));let qe=w(new ne(C)),Je=null,K=new a(16777215,3.4);K.castShadow=!0;let q=K.shadow;q.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(q.camera,{left:-70,right:70,top:112,bottom:-60,near:40,far:560}),q.camera.updateProjectionMatrix(),q.bias=-5e-4,q.normalBias=.04,q.radius=4,K.target.position.set(-4,3,-6),T.add(K,K.target);let J=new m(16777215,16777215,.5),Y=new a(16777215,0);Y.target=K.target,T.add(J,Y);let X=[],Ye=e=>{for(let e of X)T.remove(e),e.geometry.dispose();X=[];let{parts:t,occ:n}=xe(e);for(let e of fe){let n=t[e];if(!n.length)continue;if(e!==`glass`&&e!==`lobby`)for(let t of n)ye(t,pe[e]);let r=S(n);for(let e of n)e.dispose();if(!r)continue;let i=new l(r,B[e]);i.castShadow=e!==`glass`&&e!==`lobby`&&e!==`lamp`,i.receiveShadow=e!==`lamp`,e===`lobby`&&(i.renderOrder=2),T.add(i),X.push(i)}let r=Math.min(D,n.length/7);for(let e=0;e<r;e++)P.uBoxC.value[e].set(n[e*7],n[e*7+1],n[e*7+2],n[e*7+3]),P.uBoxH.value[e].set(n[e*7+4],n[e*7+5],n[e*7+6]);P.uBoxN.value=r,P.uPaneW.value=O/Math.max(4,Math.round(O/f.clamp(e.mullion,1.1,3.2))),H.visible=e.pool>.5},Xe={type:r,minFilter:v,magFilter:v},Z=w(new te(2,2,{...Xe,depthBuffer:!0,samples:2})),Ze=w(new te(2,2,Xe)),Q=w(new te(2,2,Xe)),Qe=w(new x(2,2)),$e=(e,t)=>w(new c({vertexShader:Me,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1})),et=e=>{let t=new l(Qe,e);return t.frustumCulled=!1,t},tt=(e,t)=>{let n=$e(Ne,{uSrc:{value:e},uDir:{value:new g},uThresh:{value:t}}),r=new s;return r.add(et(n)),{s:r,dir:n.uniforms.uDir.value}},nt=tt(Z.texture,.9),rt=tt(Ze.texture,-1),it=$e(Pe,{uMain:{value:Z.texture},uBloom:{value:Q.texture},uHaze:d.uHaze,uBloomK:{value:1},uFade:{value:0},uTime:{value:0},uExposure:{value:1},uSat:{value:1},uLift:{value:new b},uWarm:{value:new b},uCool:{value:new b}});e.add(et(it));let at=[[B.stone,`uStone`],[B.frame,`uFrame`],[B.metal,`uMetal`],[B.glass,`uGlass`],[B.lobby,`uGlass`],[B.interior,`uInterior`],[B.hedge,`uFoliage`],[V,`uPaving`]],$=(e,t)=>{let n=d[e].value;return t.setRGB(n.x,n.y,n.z,y)},ot=new b(0,1,0),st=new b(-16,0,20),ct=new b(-30,0,8),lt=new g,ut=ae(t,h,{base:o?new b(-14,1.3,36):new b(-24,1.3,26),focus:o?new b(6,13,-4):new b(3,11.3,3),yaw:o?0:.3}),dt=``,ft=``,pt=``;return{update(e){let{time:n,intro:r,params:i}=e,a=[`floors`,`mullion`,`canopy`,`pool`].map(e=>i[e]).join();a!==dt&&(dt=a,Ye(i),pt=``);let o=i.sunHeight;k.set(-Math.sin(i.sun)*Math.cos(o),Math.sin(o),Math.cos(i.sun)*Math.cos(o));let s=le(i.light);K.position.copy(K.target.position).addScaledVector(k,300),Y.position.set(-k.x,.35,-k.z).multiplyScalar(80).add(K.target.position),q.radius=s.softness,P.uLeafT1.value.crossVectors(k,ot).normalize(),P.uLeafT2.value.crossVectors(P.uLeafT1.value,k),P.uLeafC.value.set(st.dot(P.uLeafT1.value),st.dot(P.uLeafT2.value)),P.uLeafC2.value.set(ct.dot(P.uLeafT1.value),ct.dot(P.uLeafT2.value)),P.uLeaves.value=i.leaves,P.uTime.value=n,P.uR0.value=N(.12,.32,i.tint),P.uReflK.value=N(1.1,.85,i.tint),V.color.multiplyScalar(.84),M.uHazeK.value=i.haze;for(let[e,t]of at)$(t,e.color);$(`uGlow`,K.color),P.uSunCol.value.copy(K.color),K.intensity=7*s.sunK*f.smoothstep(o,-.02,.12)*(1+.03*Math.sin(n*.4)+.015*Math.sin(n*1.1)),T.environmentIntensity=s.fill*.9,$(`uSky`,J.color),$(`uPaving`,J.groundColor).lerp(K.color,.25).multiplyScalar(.7),J.intensity=s.bounce,Y.color.copy(J.groundColor).lerp(K.color,.5),Y.intensity=K.intensity*.06*s.bounce,B.glass.color.multiplyScalar(N(.42,.16,i.tint)),He.color.copy(B.glass.color).multiplyScalar(.7),W.color.copy(B.glass.color).multiplyScalar(.7),$(`uInterior`,B.interior.emissive).multiplyScalar(.55+.9*s.windows),$(`uInterior`,B.lamp.emissive).multiplyScalar(5+4*s.windows),P.uWin.value=s.windows,$(`uHaze`,E.color);let c=Fe(r/2.8);E.density=.0018*i.haze*s.fog+(1-c)*.025,P.uFogK.value=i.haze*s.fog,P.uMist.value=s.mist;let l=[i.sun,o,i.haze,...[`uSky`,`uHaze`,`uGlow`].map(e=>d[e].value.toArray().join())].join(),u=C.getRenderTarget();if(l!==ft){ft=l;let e=qe.fromScene(Ke,0,.5,500);Je?.dispose(),Je=e,T.environment=e.texture}let p=`${dt}|${i.sun}|${o}`;p!==pt&&(pt=p,C.shadowMap.needsUpdate=!0),ut(e,i.glide),G.position.copy(t.position),C.getDrawingBufferSize(lt);let m=Math.max(2,lt.x),h=Math.max(2,lt.y);if(Z.width!==m||Z.height!==h){Z.setSize(m,h);let e=Math.max(2,Math.round(m/4)),t=Math.max(2,Math.round(h/4));Ze.setSize(e,t),Q.setSize(e,t),nt.dir.set(1.5/e,0),rt.dir.set(0,1.5/t)}C.setRenderTarget(Z),C.clear(!0,!0,!1),C.render(T,t),C.setRenderTarget(Ze),C.render(nt.s,t),C.setRenderTarget(Q),C.render(rt.s,t),C.setRenderTarget(u);let g=it.uniforms;g.uTime.value=n,g.uBloomK.value=i.bloom,g.uExposure.value=i.exposure*s.exposure,g.uSat.value=s.sat,g.uLift.value.fromArray(s.lift),g.uWarm.value.fromArray(s.warm),g.uCool.value.fromArray(s.cool),g.uFade.value=1-f.smoothstep(r,.05,1.1)},dispose(){for(let e of X)e.geometry.dispose();Je?.dispose();for(let e of ce)e.dispose();C.shadowMap.enabled=!1}}}};export{V as t};