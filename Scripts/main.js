
var cnvs = document.getElementById("game")
var context = cnvs.getContext("2d");

function Start() {
    cnvs.addEventListener("mousemove", mouseMoveHandler, false);
    cnvs.addEventListener("mousedown", mouseDown, false);
    cnvs.addEventListener("mouseup", mouseUp, false);
    var mousePos = {
        X: 0,
        Y: 0
    }
    var isMouseDown = false;

    function mouseMoveHandler(e) {
        mousePos.X = e.clientX - cnvs.offsetLeft;
        mousePos.Y = e.clientY - cnvs.offsetTop;
    }
    
    function mouseDown(e){
        isMouseDown = true
    }
    function mouseUp(e){
        isMouseDown = false;
    }
    denario = new Denario()

    setInterval(() => {
        context.clearRect(0, 0, cnvs.clientWidth, cnvs.clientHeight);
        denario.cuentas.forEach(oracion => {
            //oracion.update(mousePos, isMouseDown)
            oracion.draw(context)
        });
        denario.aveMaria.forEach(oracion => {
            oracion.update(mousePos, isMouseDown)
            oracion.draw(context)
        });

        
    }, 1000 / 30);
}

Start()

function Denario() {
    this.aveMaria = []
    this.cuentas = []
    flowers = []
    //padrenuestro = new Cuentas()
    //gloria = new Cuentas()
    for (var i = 0; i < 10; i++) {
        this.aveMaria.push(new Flower(i))
        this.cuentas.push(new Cuentas(i))
    }
}

