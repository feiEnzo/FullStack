let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")


ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(0,0,40,40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(360,0,40,40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,360,40,40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(360,360,40,40);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0, 0);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(400, 0);
ctx.lineTo(0, 400);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0, 200);
ctx.lineTo(400, 200);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200, 80, 0, Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,150, 20, 0, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(320,150, 20, 0, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "24px Arial"
ctx.textAlign = "center"
ctx.fillText("Desenvolvimento Web", 200,80);
ctx.closePath();


ctx.beginPath();
ctx.strokeStyle = 'black'
ctx.lineWidth = 2;
ctx.strokeRect(0,0,400,400)