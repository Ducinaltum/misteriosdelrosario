function radCollition(a, b){
    var dx = a.X - b.X;
    var dy = a.Y - b.Y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < a.radious + b.radious) {
        return true
    }
    return false
}

function valoresOrdinales (num) {
    switch(num){
    case 1:
        return "primer";
        break;
    case 2:
        return "segundo";
        break;
    case 3:
        return "tercer";
        break;
    case 4:
        return "cuarto";
        break;
    case 5:
        return "quinto";
        break;
    }
    return ""
}