class Bob
{
    constructor()
    {
        var options={
        
        frictionAir:0.005,
        density:0.1
        }
        this.body=Bodies.circle(143,217,25,options)
        World.add(world,this.body)
    }
    display()
    {
        push ()
        
        translate(this.body.position.x,this.body.position.y)
       
        ellipseMode(RADIUS)
        ellipse(0,0,25,25)
        pop ()
    }
}
