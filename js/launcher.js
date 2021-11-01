class launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 10,
        }
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);

        this.bodyA = bodyA
        this.pointB = pointB
    }

    display(){

      if(this.launcher.bodyA !== null){

        var pointA = this.bodyA.position;
        var pointB = this.pointB

        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }

    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.launcher.bodyA = body;
    }
}