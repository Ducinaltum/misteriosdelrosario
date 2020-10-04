function Flower(i){
    var img = flowersImages[i]
    var index = i;
    var ratio = img.height/ img.width
    var width = cnvs.clientWidth * 0.05;
    var height = width * ratio
    var radious = width>height? width /2 : height/2;

    this.draw =function(ctx){
        ctx.drawImage(img, 20 +(50*index), 50 +(50*index), width, height)
    };

    this.getIndex = function(){
        return index;
    };
    
}