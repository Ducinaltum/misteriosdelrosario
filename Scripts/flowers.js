function Flower(i, cta){
    var img = flowersImages[i]
    var cuenta = cta;
    var index = i;
    var ratio = img.height/ img.width
    var width = cnvs.clientWidth * (1/25);
    var height = width * ratio
    var rad = width > height? width /2 : height/2;
    var posX = Math.floor(Math.random()*cnvs.clientWidth)
    var posY = Math.floor(Math.random()*cnvs.clientHeight)
    var isClicked;
    var hasReachedDestiny = false;

    this.update = function(mouse, denario){
        if(mouse.isMouseDown){
            if(!mouse.isMouseLoaded){
                if(radCollition(this.size(), mouse)){
                    isClicked = true;
                    mouse.isMouseLoaded = true;
                }
            }
        } else {
            isClicked = false;
            //console.log(cuenta)
            if( !hasReachedDestiny){
                if (radCollition(this.size(), cuenta.size())) {
                    console.log("done")
                    hasReachedDestiny = true
                    denario.conteo++;
                }
            }
        }
        if(isClicked){
            posX = mouse.X
            posY = mouse.Y
        }
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

    this.size = function(){
        return obj = {
            X:posX,
            Y:posY,
            radious:rad
        }
    }
}

function Hilo(objectiveSize){
    this.img = hiloImage;
    ratio = this.img.height / this.img.width
    this.width = objectiveSize
    this.height = objectiveSize * ratio
}

function CuentaPadrenuestro(posicionY){
    var img = padreNuestroGloriaImage
    var width = cnvs.clientWidth * (1/14);
    var height = width
    var rad = width > height? width /2 : height/2;
    var posX =  rad +10
    var posY = posicionY
    var hilo = new Hilo(cnvs.clientWidth * (1/24))
    this.draw =function(ctx){
        ctx.drawImage(hilo.img, posX + width/2 , posY - hilo.height/2, hilo.width, hilo.height)
        ctx.drawImage(img, posX - width/2, posY - height/2, width, height)
    };

    this.size = function(){
        return obj = {
            X:posX,
            Y:posY,
            radious:rad
        }
    }
}
function CuentaGloria(posicionY){
    console.log(posicionY)
    var img = padreNuestroGloriaImage
    var width = cnvs.clientWidth * (1/15);
    var height = width
    var rad = width > height? width /2 : height/2;
    var posX = cnvs.clientWidth - rad - 10
    var posY = posicionY
    this.draw =function(ctx){
        ctx.drawImage(img, posX - width/2, posY - height/2, width, height)
    };

    this.size = function(){
        return obj = {
            X:posX,
            Y:posY,
            radious:rad
        }
    }
}