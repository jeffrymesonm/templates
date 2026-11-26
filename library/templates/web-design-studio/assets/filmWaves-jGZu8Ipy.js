import{cr as e,ur as t}from"./three.module-BtOiv6AT.js";var n=14,r=`
#define WAVES ${n}
uniform vec4 uWave[WAVES];
uniform vec2 uWaveDir[WAVES];
uniform float uWaveTime;
uniform vec4 uWaveShape;
uniform float uWaveDrag;

float waveHeight(vec2 q) {
  float h = 0.0;
  for (int i = 0; i < WAVES; i++) {
    vec4 w = uWave[i];
    float t = uWaveTime - w.z;
    if (w.w <= 0.0 || t < 0.0 || t > 2.2) continue;
    float d = length(q - w.xy);
    float front = d - uWaveShape.x * t;
    float ring = exp(-front * front / (uWaveShape.y * uWaveShape.y * 0.35));
    float fade = exp(-t * 1.7) / (1.0 + d / (uWaveShape.y * 1.5));
    h += w.w * ring * sin(6.2831853 * front / uWaveShape.y) * fade;
  }
  return h * uWaveShape.z;
}

vec2 waveDrag(vec2 q) {
  vec2 s = vec2(0.0);
  for (int i = 0; i < WAVES; i++) {
    vec4 w = uWave[i];
    float t = uWaveTime - w.z;
    if (w.w <= 0.0 || t < 0.0 || t > 1.4) continue;
    vec2 r = q - w.xy;
    float near = exp(-dot(r, r) / (2.0 * uWaveShape.w * uWaveShape.w));
    s += uWaveDir[i] * (w.w * near * exp(-t * 3.2) * cos(t * 10.0));
  }
  return s * uWaveDrag;
}
`,i=class{uniforms={uWave:{value:Array.from({length:n},()=>new t(0,0,-100,0))},uWaveDir:{value:Array.from({length:n},()=>new e(1,0))},uWaveTime:{value:0},uWaveShape:{value:new t(1,1,0,1)},uWaveDrag:{value:0}};scale={speed:1,wavelength:1,height:0,reach:1,drag:0,spacing:1,fullSpeed:1};origin=performance.now();next=0;last=null;vx=0;vy=0;travelled=0;setScale(e){this.scale=e,this.uniforms.uWaveShape.value.set(e.speed,e.wavelength,e.height,e.reach),this.uniforms.uWaveDrag.value=e.drag}update(e,t,r,i){let a=(e-this.origin)/1e3;if(this.uniforms.uWaveTime.value=a,!i){this.last=null,this.travelled=0;return}let o=this.last;if(this.last={x:t,y:r,t:a},!o)return;let s=Math.max(1/240,a-o.t),c=t-o.x,l=r-o.y;if(this.vx+=(c/s-this.vx)*.35,this.vy+=(l/s-this.vy)*.35,this.travelled+=Math.hypot(c,l),this.travelled<this.scale.spacing)return;this.travelled=0;let u=Math.hypot(this.vx,this.vy),d=Math.min(1,u/this.scale.fullSpeed);d<.04||(this.uniforms.uWave.value[this.next].set(t,r,a,d),this.uniforms.uWaveDir.value[this.next].set(this.vx/u,this.vy/u),this.next=(this.next+1)%n)}};export{r as n,i as t};