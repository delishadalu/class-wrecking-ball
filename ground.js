class Ground
{
    constructor()
    {
        this.body=Bodies.rectangle(400,380,800,20,{isStatic:true});
        World.add(world,this.body)
    }

    display()
    {
        push()
        fill ("brown")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,800,20);
        pop ()
    }
}