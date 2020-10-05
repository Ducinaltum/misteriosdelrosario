flowersImages = []

for(var i = 0; i< 10; i++){
    let image = new Image()
    image.src = "Assets\\flower_" + (i + 1) + ".png";
    flowersImages.push(image)
}
print("succes");