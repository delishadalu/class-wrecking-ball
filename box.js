class Box
{
    constructor(x,y)
    {
        var options={
            restitution:0.8,
            friction:1,
            density:0.05
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("block.jpg")
        this.visibility=255;
        World.add(world,this.body)
    }

    display()
    { 
        if(this.body.speed<5)
        {
        push ()
        translate(this.body.position.x,this.body.position.y)
       rotate (this.body.angle)
      
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop ()
        }
        else
        { push()
            World.remove(world,this.body);
            
            this.visibility=this.visibility-5;
            tint(255,this.visibility)
            imageMode(CENTER)
            image (this.image,this.body.position.x,this.body.position.y,50,50)
            pop()
        }
    }
}