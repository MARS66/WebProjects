/*
 * @Description: 
 * @version: 1.0
 * @Author: kevin
 * @Date: 2021-09-22 12:34:23
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
const parallaxLayer = [5, 3, 7, 10];
let particles = [], W, H, mouseX = 0, mouseY = 0, parallax = 5;

window.onresize = function (){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  createParticles(25);
  document.body.addEventListener( 'pointermove', onPointerMove );
};

  // 鼠标移动事件
function onPointerMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

const sprite1 = new Image();
sprite1.src = '../static/img/blue.png';
const sprite2 = new Image()
sprite2.src='./static/img/jiyin.png' ;
const sprite3 = new Image()
sprite3.src='../static/img/ball.png';
const parameters = [
  { img: sprite3, size: 12 },
  { img: sprite1, size: 20 },
  { img: sprite2, size: 30 },
];
class Particle {
  constructor({img,size}){
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = Math.random() *1.5 - 0.3,
    this.vy = -(Math.random() + 0.5);
    this.size = Math.random() * size
    this.img = img;
    this.parallaxOffsetX = 0;
    this.parallaxOffsetY = 0;
    this.wheelCurY = 0;
    this.wheelCurX = 0;
    this.parallaxLayer = parallaxLayer[Math.floor(Math.random() * 4)] * parallax;
    this.wheelY = 0;
    this.wheelX = 0;
    return this;
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.wheelY += (this.wheelCurY / this.parallaxLayer - this.wheelY) / 10;
    this.wheelX += (this.wheelCurX/ this.parallaxLayer - this.wheelX) / 10;
    this.parallaxOffsetX += (mouseX/this.parallaxLayer - this.parallaxOffsetX) / 10;
    this.parallaxOffsetY += (mouseY/this.parallaxLayer - this.parallaxOffsetY) / 10;
    if(this.y< -this.size){
      this.y = H;
      this.wheelCurY = 0;
      this.wheelY = 0;
      this.x = Math.random() * W;
    }
    if (this.y> H + this.size) {
      this.y = 0;
      this.wheelCurY = 0;
      this.wheelY = 0;
      this.x = Math.random() * W;
    }
    if( this.x> W + this.size){
      this.x = 0;
      this.wheelCurX = 0;
      this.wheelX= 0;
      this.y = Math.random() * H;
    }
    if(this.x< -this.size){
      this.wheelCurX = 0;
      this.wheelX= 0;
      this.x = W;
      this.y = Math.random() * H;
    }
    return this;
  }
  render(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.drawImage(this.img,this.x - this.parallaxOffsetX + this.wheelX,this.y - this.parallaxOffsetY - this.wheelY ,this.size,this.size);
    ctx.fill();
    ctx.restore();
    return this;
  }
};

function createParticles(n) {
  if(n !== particles.length){
    particles = [];
    for(let i=0; i<n; i++){
      for (let index = 0; index < parameters.length; index++) {
        particles.push(new Particle(parameters[index]));
      }
    }
    ctx.fillStyle = 'rgba(255, 255, 255,0)';
  }
}

window.onresize();

(function fn(){
  window.requestAnimationFrame(fn);
  ctx.clearRect(0, 0, W, H);
  ctx.fillRect(0, 0, W, H);
  particles.forEach(function (item) {
    item.move().render(ctx);
  });
})();
    