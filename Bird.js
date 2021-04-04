class Bird extends BaseClass {
    constructor(x, y) {
     super(x,y,50,50)
     this.image=loadImage("sprites/bird.png")
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
     super.display()
    };
  };

  //We use super() to transfer all the 
  //properties of the parent class to the
//child class through the parent class
//constructor.

//We use "extends" to create a child class.

  