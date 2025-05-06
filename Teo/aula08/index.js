let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

let retangulo = {
    x: 10,
    y: 200,
    h: 50,
    w: 50,
    cor: "red",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}

let circulo = {
    x: 200,
    y: 200,
    r: 50,
    cor: "blue",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x, this.y,this.r,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

let imagem = {
    x: 0,
    y: 0,
    r: 50,
    img: new Image(),
    desenha: function () {
        this.img.src = 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/09/04/minecraft-jack-black-t4vpat3igdo8.jpg'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.r, 2*this.r);
        ctx.closePath();
    }
}

function animacao() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    imagem.desenha()
    retangulo.desenha();
    circulo.desenha();
    requestAnimationFrame(animacao)
}

animacao();

document.addEventListener("keydown", function (evento) {
    let tecla = evento.key;

    if (tecla === 'w'){
        retangulo.y -= 10;
    }
    else if (tecla === 'a'){
        retangulo.x -= 10;
    }
    else if (tecla === 's'){
        retangulo.y += 10;
    }
    else if (tecla === 'd'){
        retangulo.x += 10;
    }

    if (retangulo.x < 0){
        retangulo.x = 0
    }
    else if (retangulo.x > canvas.width-retangulo.w){
        retangulo.x = canvas.width-retangulo.w
    }

    if (retangulo.y < 0){
        retangulo.y = 0
    }
    else if (retangulo.y > canvas.height-retangulo.h){
        retangulo.y = canvas.height-retangulo.h
    }

});

document.addEventListener("mousemove", function (evento) {
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
    circulo.cor = "lime"

})

document.addEventListener("mouseup", function (evento) {
    circulo.cor = "blue"

})

