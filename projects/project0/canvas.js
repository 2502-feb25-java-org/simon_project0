function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

innerWidth=canvas.width;
innerHeight=canvas.height;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX - c.canvas.offsetLeft
    mouse.y = event.clientY - c.canvas.offsetTop
})

// addEventListener('resize', () => {
//     canvas.width = innerWidth
//     canvas.height = innerHeight

//     init()
// })

// Objects
function Circle(x, y, radius, color, type, coll, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.type=type;
    this.coll=coll;
    this.dx=dx;
    this.dy=dy;
}
function Rectangle(x, y, height, width, color, type, coll){
    this.x=x;
    this.y=y;
    this.height=height;
    this.width=width;
    this.color=color;
    this.type=type;
    this.coll=coll;
}

Object.prototype.draw = function() {
    c.beginPath();
     c.fillStyle = this.color;
    if(this.type=='circle'){
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();}
    if(this.type=='rec'){
    c.fillRect(this.x, this.y, this.width, this.height)
    }
   
    
    c.closePath();
}

Object.prototype.update = function() {
     if(this.type=='circle' && this.coll==1){
     if(this.x+this.radius>=innerWidth){
    this.dx=-this.dx;//edit to have collision
     }
     if(this.x-this.radius <= rec1.x+rec1.width){
         if( this.y>=rec1.y && this.y<=rec1.y+rec1.height ){
        
          if(this.y>=rec1.y+(rec1.height/2)){
              this.dy= Math.abs(this.dy);
          }
          else{this.dy=-Math.abs(this.dy);}
        
        this.dx=this.dx*1.1;
        this.dx=-this.dx;
        score++;}
         
     }
     if(this.x-this.radius<=0){
         if(score>highscore){
             highscore=score;
         }
         etime=Date.now();
         temptime=etime-stime;
         init();
     }
    if(this.y+this.radius>=innerHeight || this.y-this.radius<=0){
    this.dy=-this.dy;
    }//circle loop with collision
    this.x+=this.dx;
    this.y+=this.dy;}
    if(this.type=='rec' && this.coll==1){
        //this.x=mouse.x-(this.width/2);
        this.y=mouse.y-(this.height/2);
        //console.log(this.x+" "+mouse.x);
    }
    
    this.draw()
}

// Implementation
var score=0;
var highscore=0;
let objects;
let circle1;
let rec1;
let stime = new Date(null);
let etime = new Date(null);
//let timespent = new Date(null);
let temptime;
let what = new Date(null);
function init() {
    circle1 = new Circle(innerWidth/2,randomIntFromRange(31, 569),30,'blue','circle', 1, 5, randomIntFromRange(2,6));
    rec1=new Rectangle(50, 0, 150, 30, 'white', 'rec', 1);
    score=0;
    stime=Date.now();
    document.querySelector('#highscore').innerHTML = "High Score: "+highscore;
    
if(temptime){
    
    what.setMilliseconds(temptime);
    document.querySelector('#time').innerHTML = "Previous time: "+(what.toISOString().substr(11, 8));
    what.setMilliseconds(0);
    what.setSeconds(0);
    what.setMinutes(0);//reset clock
}
    else{document.querySelector('#time').innerHTML = "Previous time: n/a";}
    
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    //  objects.forEach(object => {
    //   object.update()
    //  })
 //   debugger;
    circle1.update();
    rec1.update();
    //temptime=Date.now();
    document.querySelector('#score').innerHTML = "Score: "+score;
    //what= temptime-stime;
    //timespent.setMilliseconds(what);
   // what=timespent.toISOString().substr(11, 8);
  
}
init();
animate();
