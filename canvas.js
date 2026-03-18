const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
let scale=1,x=0,y=0;
canvas.width=canvas.parentElement.clientWidth;
canvas.height=canvas.parentElement.clientHeight;
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.scale(scale,scale);ctx.fillStyle='#eee';ctx.fillRect(50,50,200,200);ctx.resetTransform()}
draw();
document.getElementById('zoomIn').onclick=()=>{scale*=1.2;draw()}
document.getElementById('zoomOut').onclick=()=>{scale/=1.2;draw()}
document.getElementById('reset').onclick=()=>{scale=1;draw()}
