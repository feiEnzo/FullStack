let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(300,100, 50, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = 'grey';
ctx.fillRect(0,300,400,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#87541e';
ctx.fillRect(140,200,120,100);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#ff9977';
ctx.moveTo(140, 200);
ctx.lineTo(200, 140);
ctx.lineTo(260, 200);
ctx.fill()
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(154,220,36,36);
ctx.fillRect(210,220,36,36);
ctx.fillStyle = '#573715';
ctx.fillRect(190,256,20,44);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cornflowerblue';
ctx.fillRect(0,300,60,100);
ctx.fillRect(60, 350,80,60);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cornflowerblue';
ctx.arc(0, 300, 60,Math.PI, 0);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'cornflowerblue';
ctx.arc(140, 400, 50, Math.PI, 0);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#87541e';
ctx.fillRect(60,300,20,-80);
ctx.fillStyle = 'green';
ctx.arc(70, 230, 30, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#87541e';
ctx.fillRect(350,350,20,-80);
ctx.fillStyle = 'green';
ctx.arc(360, 280, 30, 0, 2*Math.PI);
ctx.fill();
ctx.closePath();