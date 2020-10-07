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
        //fimage.onload = function(){console.log("ready")}
        flowersImages.push(fimage)
        let cimage = new Image()
        cimage.src = "Assets\\cuenta_" + (i + 1) + ".png";
        //cimage.onload = function(){console.log("cuentas ready")}
        cuentasImages.push(cimage)
    }
}

loadImages()

window.addEventListener("load", event => {
    var image = document.querySelector('img');
    console.log(image)
    console.log("load")
    //var isLoaded = image.complete && image.naturalHeight !== 0;
    //alert(isLoaded);
  });