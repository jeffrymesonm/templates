import{Dt as e,lr as t}from"./three.module-BtOiv6AT.js";var n=48,r=class{vx=new Float32Array(n*n);vy=new Float32Array(n*n);tx=new Float32Array(n*n);ty=new Float32Array(n*n);last=null;energy=0;update(e,t,r){let i=e*60;if(t&&this.last){let n=(t.u-this.last.u)/Math.max(e,1/240),i=(t.v-this.last.v)/Math.max(e,1/240);n*n+i*i>1e-4&&this.splat(t.u,t.v,n,i,r)}this.last=t?{...t}:null;let a=0,o=.92**i;for(let e=0;e<n;e++)for(let t=0;t<n;t++){let r=e*n+t,i=t>0?r-1:r,s=t<n-1?r+1:r,c=e>0?r-n:r,l=e<n-1?r+n:r;this.tx[r]=(this.vx[r]*.6+(this.vx[i]+this.vx[s]+this.vx[c]+this.vx[l])*.1)*o,this.ty[r]=(this.vy[r]*.6+(this.vy[i]+this.vy[s]+this.vy[c]+this.vy[l])*.1)*o,a=Math.max(a,Math.abs(this.tx[r])+Math.abs(this.ty[r]))}this.vx.set(this.tx),this.vy.set(this.ty),this.energy=a}splat(e,t,r,i,a){let o=.07,s=Math.ceil(o*3*n),c=e*n,l=t*n;for(let u=Math.max(0,Math.floor(l-s));u<Math.min(n,Math.ceil(l+s));u++)for(let l=Math.max(0,Math.floor(c-s));l<Math.min(n,Math.ceil(c+s));l++){let s=((l+.5)/n-e)*a,c=(u+.5)/n-t,d=Math.exp(-(s*s+c*c)/(o*o)),f=u*n+l;this.vx[f]+=r*d,this.vy[f]+=i*d}}sample(e,t,r){if(e<0||e>1||t<0||t>1){r.x=r.y=0;return}let i=Math.min(n-1,Math.floor(e*n)),a=Math.min(n-1,Math.floor(t*n));r.x=this.vx[a*n+i],r.y=this.vy[a*n+i]}},i=new e,a=new e,o=new t,s=new t,c={x:0,y:0},l=class{pos;vel;home;scatter;rand;count;settledAt=0;lastForm=-1;resting=!1;formPull;constructor(e,t,n,r=2){this.formPull=r,this.count=e.length/3,this.home=e,this.scatter=t,this.rand=n,this.pos=t.slice(),this.vel=new Float32Array(e.length)}step(e,t,n,r,l,u,d){if(this.resting&&n.energy<=.002&&d===this.lastForm)return!1;this.lastForm=d;let f=Math.min(3,e*60),p=.9**f;d<.999&&(this.settledAt=t);let m=1+(this.formPull-1)*Math.max(0,1-(t-this.settledAt)/1500),h=n.energy>.002;h&&(i.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse).multiply(r.matrixWorld),a.copy(r.matrixWorld).invert(),o.setFromMatrixColumn(l.matrixWorld,0).transformDirection(a),s.setFromMatrixColumn(l.matrixWorld,1).transformDirection(a));let g=i.elements,_=0;for(let e=0;e<this.count;e++){let t=e*3,r=this.pos[t],i=this.pos[t+1],a=this.pos[t+2],l=this.vel[t],v=this.vel[t+1],y=this.vel[t+2],b=1;if(h){let e=g[3]*r+g[7]*i+g[11]*a+g[15],t=((g[0]*r+g[4]*i+g[8]*a+g[12])/e+1)*.5,d=((g[1]*r+g[5]*i+g[9]*a+g[13])/e+1)*.5;n.sample(t,d,c);let p=c.x*u.x,m=c.y*u.y,h=5e-4*f;l+=(o.x*p+s.x*m)*h,v+=(o.y*p+s.y*m)*h,y+=(o.z*p+s.z*m)*h,b=Math.max(.3,1-Math.hypot(c.x,c.y)*.65)}let x=this.scatter[t]+(this.home[t]-this.scatter[t])*d,S=this.scatter[t+1]+(this.home[t+1]-this.scatter[t+1])*d,C=this.scatter[t+2]+(this.home[t+2]-this.scatter[t+2])*d,w=.005*m*f*b;l+=(x-r)*w,v+=(S-i)*w,y+=(C-a)*w,l*=p,v*=p,y*=p,this.vel[t]=l,this.vel[t+1]=v,this.vel[t+2]=y,this.pos[t]=r+l*f,this.pos[t+1]=i+v*f,this.pos[t+2]=a+y*f,_=Math.max(_,Math.abs(l)+Math.abs(v)+Math.abs(y))}return this.resting=_<2e-5,!0}},u=`
  uniform float uSize;
  uniform float uScale;
  uniform float uForm;
  uniform float uTime;
  uniform float uDrift;
  attribute float aRandom;
  attribute float aDepth;
  varying float vDepth;
  void main() {
    vec3 p = position + uDrift * vec3(
      sin(uTime * (1.1 + aRandom) + aRandom * 40.0),
      cos(uTime * (0.9 + aRandom) + aRandom * 30.0),
      sin(uTime * (0.7 + aRandom) + aRandom * 20.0)
    );
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vDepth = aDepth;
    gl_PointSize = uSize * (0.7 + aRandom * 0.6) * mix(0.55, 1.0, uForm) * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,d=`
  uniform float uForm;
  uniform float uDepthTone;
  uniform float uAlpha;
  varying float vDepth;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float r2 = dot(c, c);
    if (r2 > 1.0) discard;
    vec3 n = vec3(c.x, -c.y, sqrt(1.0 - r2));
    vec3 r = reflect(vec3(0.0, 0.0, -1.0), n);
    float env = smoothstep(-0.3, 0.95, r.y) * 0.7 + exp(-pow((r.y - 0.08) * 7.0, 2.0)) * 0.3;
    vec3 L = normalize(vec3(-0.4, 0.6, 0.75));
    float diffuse = max(dot(n, L), 0.0);
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    float spec = pow(max(dot(n, H), 0.0), 70.0) * 1.1 + pow(max(dot(n, H), 0.0), 12.0) * 0.18;
    float rim = pow(1.0 - n.z, 3.0);
    vec3 metal = vec3(0.88, 0.885, 0.89);
    vec3 base = metal * (0.14 + env * 0.95 + diffuse * 0.25) + vec3(spec) * 1.25 + rim * 0.28;
    base *= 0.82 + vDepth * uDepthTone;
    gl_FragColor = vec4(base * mix(0.45, 1.0, uForm), mix(0.5, 1.0, uForm) * uAlpha);
  }
`;export{r as i,u as n,l as r,d as t};