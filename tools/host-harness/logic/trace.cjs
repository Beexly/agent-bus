const taci = require("/tmp/logic/taci.cjs");
const obs = Array.from({length:40},(_,i)=>({sampleId:`s${i}`,position:0,predictedMean:10,actualFantasyPoints:10}));
const out = taci.adaptiveConformalIntervals(obs,{targetCoverage:0.9,minAlpha:0.02,maxAlpha:0.5});
console.log("idx  alpha    p=1-alpha  k=ceil((n+1)p)  n  status                       covered");
out.forEach((r,i)=>{
  const p = 1-r.alpha; const n=i; const k=Math.ceil((n+1)*p);
  if(i<6 || i>34 || r.status!=="warmup_point_band")
    console.log(String(i).padStart(3), r.alpha.toFixed(4).padStart(7), p.toFixed(4).padStart(10), String(k).padStart(16), String(n).padStart(3), r.status.padEnd(28), String(r.covered).padStart(6));
});
