class Control{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 300
        }
        
        this.pointB = pointB
        this.control = Constraint.create(options);
        World.add(world, this.control);
    }
    attach(body){
        this.control.bodyA = body;
    }
    
    fly(){
        this.control.bodyA = null;
    }

    display(){
       
        if(this.control.bodyA){
            var pointA = this.control.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(3)
            line(pointB.x, pointB.y, pointA.x, pointA.y);

            pop();
        }
    }
    
}