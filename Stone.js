class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          density:2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("rgb(112,41,99)");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
