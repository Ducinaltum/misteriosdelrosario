function Flower(i){
    var img = flowersImages[i]
    var index = i;
    var ratio = img.height/ img.width
    var width = cnvs.clientWidth * (1/25);
    var height = width * ratio
    var rad = width > height? width /2 : height/2;
    var posX = Math.floor(Math.random()*cnvs.clientWidth)
    var posY = Math.floor(Math.random()*cnvs.clientHeight)
    var isClicked;

    this.update = function(mouse){
        if(mouse.isMouseDown){
            if(!mouse.isMouseLoaded){
                var dx = posX - mouse.posX;
                var dy = posY - mouse.posY;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < rad + 1) {
                    isClicked = true;
                    mouse.isMouseLoaded = true
                }
            }
        } else isClicked = false;
        if(isClicked){
            posX = mouse.posX
            posY = mouse.posY
        }
        //Si está colisionando con la cuenta que le corresponde incia un Lerp hasta centrase en su lugar
    }

    this.draw =function(ctx){
        ctx.drawImage(img, posX - width/2, posY - height/2, width, height)
    };

    this.getIndex = function(){
        return index;
    };

    this.size = function(){
        return obj = {
            X:posX,
            Y:posY,
            radious:rad
        }

    }    
}

function Cuentas(i){
    var img = cuentasImages[i]
    var index = i;
    var ratio = img.height/ img.width
    var width = cnvs.clientWidth * (1/24);
    var height = width
    var rad = width > height? width /2 : height/2;
    var posX = (width * 2 * index) + width * 3
    var posY = height * 2
    var hilo = new Hilo(width)
    this.draw =function(ctx){
        ctx.drawImage(hilo.img, posX + width/2 , posY - hilo.height/2, hilo.width, hilo.height)
        ctx.drawImage(img, posX - width/2, posY - height/2, width, height)
    };
}

function Hilo(objectiveSize){
    this.img = hiloImage;
    ratio = this.img.height / this.img.width
    this.width = objectiveSize
    this.height = objectiveSize * ratio
}