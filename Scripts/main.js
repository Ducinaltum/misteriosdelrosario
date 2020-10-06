
var cnvs = document.getElementById("game")
var context = cnvs.getContext("2d");

function Start() {
    cnvs.addEventListener("mousemove", mouseMoveHandler, false);
    cnvs.addEventListener("mousedown", mouseDown, false);
    cnvs.addEventListener("mouseup", mouseUp, false);
    var mouse = {
        posX:0,
        posY:0,
        isMouseDown: false,
        isMouseLoaded: false
    }
    /*var mousePos = {
        X: 0,
        Y: 0
    }
    var isMouseDown = false;
    var isMouseLoaded = false;*/

    function mouseMoveHandler(e) {
        mouse.posX = e.clientX - cnvs.offsetLeft;
        mouse.posY = e.clientY - cnvs.offsetTop;
        //mousePos.X = e.clientX - cnvs.offsetLeft;
        //mousePos.Y = e.clientY - cnvs.offsetTop;
    }
    
    function mouseDown(e){
        mouse.isMouseDown = true
    }
    function mouseUp(e){
        mouse.isMouseDown = false;
        mouse.isMouseLoaded = false;
    }
    denario = new Denario()

    setInterval(() => {
        console.log(mouse)
        context.clearRect(0, 0, cnvs.clientWidth, cnvs.clientHeight);
        denario.cuentas.forEach(oracion => {
            oracion.draw(context)
        });
        denario.aveMaria.forEach(oracion => {
            oracion.update(mouse)
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

