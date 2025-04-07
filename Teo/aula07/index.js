let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(390, 100);
ctx.lineTo(390, 250);
ctx.lineTo(350, 250);
ctx.lineTo(350, 10);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200, 50, 1.5*Math.PI, 2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center"
ctx.fillText("Ola", 200,350);
ctx.strokeText("Ola",200,350);
ctx.closePath();