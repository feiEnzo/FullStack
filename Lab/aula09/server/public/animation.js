let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")


let circulo = {
    x: 150,
    y: 150,
    vx: 0.7,
    vy: 0.9,
    r: 50,
    bounce: false,
    src: 'https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S284990.jpg',
    desenha: function () {
        img = new Image();
        img.src = this.src
        if (circulo.bounce){
            circulo.x += circulo.vx;
            circulo.y += circulo.vy;

            if (circulo.x < circulo.r){
                circulo.x = circulo.r
                circulo.vx = circulo.vx * -1
            }
            if (circulo.x > canvas.width-circulo.r){
                circulo.x = canvas.width-circulo.r
                circulo.vx = circulo.vx * -1
            }

            if (circulo.y < circulo.r){
                circulo.y = circulo.r
                circulo.vy = circulo.vy * -1
            }
            if (circulo.y > canvas.height-circulo.r){
                circulo.y = canvas.height-circulo.r
                circulo.vy = circulo.vy * -1
            }
        }
        ctx.beginPath();
        ctx.drawImage(img, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.closePath();
    }
}

function animacao() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    circulo.desenha();
    requestAnimationFrame(animacao)
}

animacao();

document.addEventListener("mousemove", function (evento) {
    if (circulo.bounce){
        return;
    }
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;

    circulo.x = x_mouse
    circulo.y = y_mouse

    if (circulo.x < circulo.r){
        circulo.x = circulo.r
    }
    if (circulo.x > canvas.width-circulo.r){
        circulo.x = canvas.width-circulo.r
    }

    if (circulo.y < circulo.r){
        circulo.y = circulo.r
    }
    if (circulo.y > canvas.height-circulo.r){
        circulo.y = canvas.height-circulo.r
    }

})

document.addEventListener("mousedown", function (evento) {
    if (circulo.bounce){
        return;
    }
    circulo.src = 'https://englishficando.com.br/storage/images/words/english-ficando-word-ball-20231113101601.jpg'
    circulo.desenha();
})

document.addEventListener("mouseup", function (evento) {
    if (circulo.bounce){
        return;
    }
    circulo.src = 'https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S284990.jpg'
    circulo.desenha();
})

document.addEventListener("keyup", function (evento) {

    if (evento.key === "Enter"){
        circulo.bounce = !circulo.bounce
        if (circulo.bounce){
            circulo.src = 'https://images.vexels.com/content/143390/preview/dvd-logo-blue-b0b340.png'
        }
        else {
            circulo.src = 'https://dmzn2b8hkpq8b.cloudfront.net/images/products/515x515/S284990.jpg'
        }
    }
    circulo.desenha();
})

