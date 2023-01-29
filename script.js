let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize",(e)=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

})
let c = canvas.getContext("2d")

    function num1(min,max){
        return Math.floor(Math.random() * ( max-min+1 ) -  min)}

class ball{
    constructor(r,x,y,dx,dy,color){
        this.jazab = 1;
        this.r = r || 10
        this.x = num1(0+this.r,innerWidth-this.r)
        this.y = num1(0+this.r,innerHeight-this.r)
        this.color =  `rgba(${(Math.random()*255)}, ${(Math.random()*255)},${(Math.random()*255)},${(Math.random())})`
        this.dx = dx || (Math.random() -0.5) *10
        this.dy = dy || (Math.random() -0.5) 
        this.draw()

    }
    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.r,0 , 2 * Math.PI)
        c.fillStyle = this.color
        c.fill()

    }
    update(){
        if(this.x+this.r+this.dx> innerWidth || (this.x-this.r)+this.dx < 0){
            this.dx = -this.dx * 1.5
        }
        if(this.y+this.r+this.dy > innerHeight){
            this.dy = - this.dy 
            
        }else{
            this.dy += this.jazab
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
     
}
class canvas1{
    constructor(){
        this.balls = []
        for(let i = 0 ; i < 100 ; i++ ){
            this.balls.push(new ball)
        }
    }
    animation(){
        c.clearRect(0,0,innerWidth,innerHeight)
        this.balls.forEach(ball=> {
            ball.update()
            
        });
        requestAnimationFrame(this.animation.bind(this))
    
    }
}
let topp = new canvas1
topp.animation()

(Math.random()*255)