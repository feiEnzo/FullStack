class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    desenha() {
        ctx.beginPath();
        ctx.fillStyle = "magenta";
        ctx.arc(this.x, this.y, 20,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

class Turret extends Entity{
    constructor(x, y, range, damage) {
        super(x, y);
        this.range = range
        this.angle = 0
        this.damage = damage ? damage : 1
    }

    calc_distance(x,y){
        return Math.sqrt((x-this.x)**2 + (y-this.y)**2)
    }

    in_range(x,y, size){
        return this.calc_distance(x,y) <= (this.range + size);
    }

    get_closest_enemy(){
        let min = 0
        for (let index in enemies_list){
            if (this.calc_distance(enemies_list[index].x, enemies_list[index].y) < this.calc_distance(enemies_list[min].x, enemies_list[min].y)){
                min = index
            }
        }

        return enemies_list[min]

    }

    calc_angle(x,y){
        let cat_x = x-this.x
        let cat_y = y-this.y

        return Math.atan2(cat_x, cat_y)
    }

    desenha() {
        ctx.beginPath();
        ctx.fillStyle = "#0080ff30";
        ctx.arc(this.x, this.y, this.range,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, 20,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        let closest = this.get_closest_enemy()

        if (enemies_list.length > 0 && this.in_range(closest.x, closest.y, closest.size)){
            this.angle = this.calc_angle(closest.x, closest.y)
            closest.deal_damage(this.damage);
        }
        else {
            this.angle += 0.01
        }

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(Math.sin(this.angle)*40+this.x, Math.cos(this.angle)*40+this.y);
        ctx.stroke();
        ctx.closePath();

    }
}

class Enemy extends Entity {
    constructor(x, y, size, health, path_speed) {
        super(x, y);
        this.size = size;
        this.health = health;
        this.max_health = health
        this.path_pos = 0
        this.path_speed = path_speed;
    }

    desenha() {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath

        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'yellow';
        ctx.moveTo(this.x-this.size, this.y-this.size-10);
        let per = (1 - (this.health / this.max_health)) * (this.size*2)
        ctx.lineTo(this.x+this.size-per, this.y-this.size-10);
        ctx.stroke();
        ctx.closePath();


    }

    step_in_path(){
        this.x += this.path_speed;

        if (this.x >= canvas.width){
            this.x = canvas.width
            this.path_speed = -this.path_speed
        }
        else if (this.x <= 0){
            this.x = 0
            this.path_speed = -this.path_speed
        }

    }

    deal_damage(damage){
        this.health -= damage;

        if (this.health <= 0){
            let index = enemies_list.indexOf(this);
            if (index > -1) {
                enemies_list.splice(index, 1);
            }
        }

    }
}

function draw_entities() {
    for (let index in enemies_list){
        enemies_list[index].desenha();
    }

    for (let index in turrets_list) {
        turrets_list[index].desenha();
    }
}

function draw_scene(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    draw_entities()
}

function update_game(){
    for (let index in enemies_list){
        enemies_list[index].step_in_path()
    }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

let turrets_list = []
let enemies_list = []

enemies_list.push(new Enemy(400, 400, 20, 1000, 0))

let x_mouse = canvas.width/2
let y_mouse = canvas.height/2

function main(){
    update_game()

    draw_scene()

    requestAnimationFrame(main)
}

main()

document.addEventListener("mouseup", function (evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;

    console.log("New turret in "+x_mouse+","+y_mouse+"")

    turrets_list.push(new Turret(x_mouse, y_mouse, 200, 2))

})

document.addEventListener("mousemove", function (evento) {
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;

})

document.addEventListener("keyup", function (evento) {
    if (evento.key === "Enter"){
        enemies_list.push(new Enemy(400, 400, 20, 1000, 1))
    }
})