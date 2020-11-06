class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      Matter.World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("rgb(178,132,190)");
      rect(0, 0, this.width, this.height);
      pop();

       }
      else{
      World.remove(world,this.body);
       push();
       this.Visiblity=this.Visiblity-5;
       tint(255,this.Visiblity);
       rect(0, 0, this.width, this.height);
       pop(); 

          }
        }
        score(){
          if (this.Visiblity < 0 && this.Visiblity > -1005){
            score++;
          }
          //if(this.Visiblity<0 && this.Visiblity>-50){
          //  pigSnortSound.play();
         // }
        }
      
      }