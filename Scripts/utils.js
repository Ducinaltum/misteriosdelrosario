function radCollition(a, b){
//    console.log(b)
    var dx = a.X - b.X;
    var dy = a.Y - b.Y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < a.radious + b.radious) {
        return true
    }
    return false
}