class stone{
    constructor(x, y, r) {
        var options = {
          isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/stone.png");
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        // translate(this.body.position.x, this.body.position.y,);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
        
        pop()
      }
}