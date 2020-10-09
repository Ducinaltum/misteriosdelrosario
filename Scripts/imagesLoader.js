var flowersImages = []
var cuentasImages = []
var padreNuestroGloriaImage = new Image()
padreNuestroGloriaImage.src = "Assets\\cuenta_empty.png";
padreNuestroGloriaImage.onload = function(){waitForLoad()}
var hiloImage = new Image()
hiloImage.src = "Assets\\hilo_h.png";
hiloImage.onload = function(){waitForLoad()}

function loadImages(){
    for(var i = 0; i< 10; i++){
        let fimage = new Image()
        fimage.src = "Assets\\flower_" + (i + 1) + ".png";
        fimage.onload = function(){waitForLoad()}
        flowersImages.push(fimage)
        let cimage = new Image()
        cimage.src = "Assets\\cuenta_" + (i + 1) + ".png";
        cimage.onload = function(){waitForLoad()}
        cuentasImages.push(cimage)
    }
}

loadImages()
loadedImages = 0

function waitForLoad(){
    loadedImages++
    if(loadedImages >= 22 && !updater){
        document.getElementById("btnInicio").disabled = false
    }
}

