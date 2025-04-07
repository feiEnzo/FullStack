let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

function quadrado(x1,y1,x2,y2,colorFill,colorStroke, lineWidth){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = colorFill;
    ctx.strokeStyle = colorStroke;
    ctx.fillRect(x1,y1,x2-x1,y2-y1);
    ctx.strokeRect(x1,y1,x2-x1,y2-y1);
    ctx.closePath();
}

function linha(x1,y1,x2,y2,lineWidth,color){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

function arco(x,y,r,start,end,colorFill,lineWidth,colorStroke){
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = colorFill;
    ctx.strokeStyle = colorStroke;
    ctx.arc(x,y,r,start*Math.PI,end*Math.PI);
    if (colorFill !== 0) {
        ctx.fill();
    }
    ctx.stroke();
    ctx.closePath();
}

function texto(text,x,y,size,fontSize,colorFill,colorStroke) {
    ctx.beginPath();
    ctx.lineWidth = size
    ctx.fillStyle = colorFill;
    ctx.strokeStyle = colorStroke;
    ctx.font = fontSize+"px Arial"
    ctx.textAlign = "center"
    ctx.fillText(text,x,y);
    ctx.strokeText(text,x,y);
    ctx.closePath();
}


quadrado(0,0,60,60,"blue","blue",0)
quadrado(240,0,300,60,"red","red",0)
quadrado(0,300,60, 240,"yellow","yellow",0)
quadrado(30,270,70, 230,"white","white",0)
quadrado(240,240,300, 300,"black","black",0)
quadrado(230,230,270, 270,"white","white",0)
quadrado(0,120, 30,180, "cyan", "cyan", 0)
quadrado(270,135, 300,165, "cyan", "cyan", 0)
quadrado(150,150, 100,200,"red","red",0)

linha(0,0,150,150, 1, "blue")
linha(300,0,150,150, 1, "red")
linha(0,150,300,150,1, "green")
linha(150,150,150,260,1, "green")

arco(150,300,40,1,0,"cyan",1,"green")
arco(150,300,60,1.5,0,0,1,"green")
arco(150,300,80,1,1.5,0,1,"green")
arco(150,150,60,1,0,0,1,"green")
arco(150,150,80,1,1.25,0,1,"green")
arco(150,150,80,1.75,0,0,1,"green")

arco(150, 120, 15, 0,2, "cyan", 1, "blue")
arco(60, 220, 15, 0,2, "yellow", 1, "green")
arco(240, 220, 15, 0,2, "yellow", 1, "green")

texto("Canvas", 150, 50, 0.2, 20,"black","black")