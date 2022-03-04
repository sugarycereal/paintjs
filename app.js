const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#000";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        console.log("꼐속 있는 있는 그냥 선", x,y);
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        console.log("진짜 선!!!", x,y)
        ctx.lineTo(x,y);
        ctx.stroke()
    }
}

function onMouseDown(){
    painting = true;
}

function onMouseUp(){
    stopPainting()
}

function onMouseLeave(){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting)
}