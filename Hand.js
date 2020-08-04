class Hand{
    constructor(x, y, width, height, angle, r, g, b) {
        var options = {
            
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        Matter.Body.setAngle(this.body, angle);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.r, this.g, this.b);
        rectMode(CENTER);
        rect(0,-(this.height/2),this.width, this.height);

        pop();
      }
}