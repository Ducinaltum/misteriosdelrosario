var flowersImages = []
var cuentasImages = []
var padreNuestroGloriaImage = new Image()
padreNuestroGloriaImage.src = "Assets\\cuenta_empty.png";
var hiloImage = new Image()
hiloImage.src = "Assets\\hilo_h.png";

function loadImages(){
    console.log("hi")
    for(var i = 0; i< 10; i++){
        let fimage = new Image()
        fimage.src = "Assets\\flower_" + (i + 1) + ".png";
        flowersImages.push(fimage)

        let cimage = new Image()
        cimage.src = "Assets\\cuenta_" + (i + 1) + ".png";
        cuentasImages.push(cimage)
    }
    console.log("succes")
}

loadImages()