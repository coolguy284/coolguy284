//red tiles made by The #1 Base 12 Proponent (Bio Updated 1/ᘔ/1200!!) 
var fadePoint = 100;
var Tile = function(points, clr){
    this.nodes = points;
    this.clr = clr;
    this.closestZ = -Infinity;
    this.rotateX = function(theta){
        var sinTheta = sin(theta);
        var cosTheta = cos(theta);
        for (var n = 0; n < this.nodes.length; n++) {
           var node = this.nodes[n];
           var y = node[1];
           var z = node[2];
           node[1] = y * cosTheta - z * sinTheta;
           node[2] = z * cosTheta + y * sinTheta;
        }
    };
    this.rotateY = function(theta){
        var sinTheta = sin(theta);
        var cosTheta = cos(theta);
        for (var n = 0; n < this.nodes.length; n++) {
            var node = this.nodes[n];
            var x = node[0];
            var z = node[2];
            node[0] = x * cosTheta - z * sinTheta;
            node[2] = z * cosTheta + x * sinTheta;
        }
    };
    this.rotateZ = function(theta){
        var sinTheta = sin(theta);
        var cosTheta = cos(theta);
        for (var n = 0; n < this.nodes.length; n++) {
           var node = this.nodes[n];
           var x = node[0];
           var y = node[1];
           node[0] = x * cosTheta - y * sinTheta;
           node[1] = y * cosTheta + x * sinTheta;
        }
    };
    this.update = function(){
        this.closestZ = -Infinity;
        for(var i = 0; i < this.nodes.length; i++){
            var z = this.nodes[i][2];
            if(z>this.closestZ){
                this.closestZ = z;
            }
        }
    };
    this.display = function(){
        fill(this.clr);
        noStroke();
        beginShape();
        for(var i = 0; i < this.nodes.length; i++){
            var n = this.nodes[i];
            var z = ((n[2]+fadePoint)/fadePoint);
            vertex(n[0]*z, n[1]*z);
        }
        if(this.nodes.length){
            var z = ((this.nodes[0][2]+fadePoint)/fadePoint);
            vertex(this.nodes[0][0]*z, this.nodes[0][1]*z);
        }
        endShape();
    };
};

var tiles = [
    
]; 
for(var z = -3; z < 3; z++){
    for(var x = -3; x < 3; x++){
        tiles.push(new Tile([
        [x*50, 0, 50+z*50],
        [x*50, 0, z*50],
        [50+x*50, 0, z*50],
        [50+x*50, 0, 50+z*50]],
        color(0, (abs(z+x)%2)*255, 0)));
        tiles.push(new Tile([
        [x*50, z*50, 0],
        [50+x*50, z*50, 0],
        [50+x*50, 50+z*50, 0],
        [x*50, 50+z*50, 0]],
        color(0, 0, (abs(z+x)%2)*255)));
        tiles.push(new Tile([
        [0, x*50, z*50],
        [0, 50+x*50, z*50],
        [0, 50+x*50, 50+z*50],
        [0, x*50, 50+z*50],
        ], color((abs(z+x)%2)*255, 0, 0)));
    }
}

var Sort = function(a, b){
    return a.closestZ-b.closestZ;
};

draw = function() {
    background(255);
    pushMatrix();
    translate(width/2, height/2);
    for(var i = 0; i < tiles.length; i++){
    tiles[i].display();
    
    tiles[i].update();
    }
    popMatrix();
    tiles.sort(Sort);
};

mouseDragged = function(){
for(var i = 0; i < tiles.length; i++){
    tiles[i].rotateX(-(mouseY-pmouseY));
    tiles[i].rotateY(-(mouseX-pmouseX));
    }
};