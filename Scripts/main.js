var cnvs = document.getElementById("game")
var context = cnvs.getContext("2d");
var today = new Date();
console.log(today.getDay())

function Start() {
    cnvs.addEventListener("mousemove", mouseMoveHandler, false);
    cnvs.addEventListener("mousedown", mouseDown, false);
    cnvs.addEventListener("mouseup", mouseUp, false);
    var mouse = {
        X:0,
        Y:0,
        isMouseDown: false,
        isMouseLoaded: false,
        radious: 1
    }

    function mouseMoveHandler(e) {
        mouse.X = e.clientX - cnvs.offsetLeft;
        mouse.Y = e.clientY - cnvs.offsetTop;
    }    
    function mouseDown(e){
        mouse.isMouseDown = true
    }
    function mouseUp(e){
        mouse.isMouseDown = false;
        mouse.isMouseLoaded = false;
    }

    denario = new Denario()
    var updater = setInterval(() => {
        context.clearRect(0, 0, cnvs.clientWidth, cnvs.clientHeight);        
        denario.padreNuestro.draw(context)
        denario.cuentas.forEach(oracion => {
            oracion.draw(context)
        });
        denario.aveMaria.forEach((oracion, i) => {
            oracion.update(mouse, denario)
            oracion.draw(context)
        });
        denario.gloria.draw(context)
        if(denario.conteo >= 10){
            alert("Has completado un misterio!!!")
            clearInterval(updater);
        }

        
    }, 1000 / 30);
}

Start()

function Denario() {
    this.aveMaria = []
    this.cuentas = []
    this.padreNuestro = null
    this.gloria = null
    this.conteo = 0;
    for (var i = 0; i < 10; i++) {
        let cuenta = new Cuentas(i)
        let flower = new Flower(i, cuenta)
        this.aveMaria.push(flower)
        this.cuentas.push(cuenta)
    }
    this.padreNuestro = new CuentaPadrenuestro(this.cuentas[0].size().Y)
    this.gloria = new CuentaGloria(this.cuentas[0].size().Y)

}

var misterios = {
    gloriosos:{
        1:{
            titulo:"Primer Misterio Glorioso: La resurrección del Hijo de Dios",
            descripción:"«El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. Pero encontraron que la piedra había sido retirada del sepulcro, yentraron, pero no hallaron el cuerpo del Señor Jesús. No sabían que pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos resplandecientes. Ellas, despavoridas, miraban al suelo, yellos les dijeron: \"¿Por qué buscáis ente los muertos al que está vivo? No está aquí, ha resucitado\"» (Lc 24, 1-6)."
        },
        2:{
            titulo:"",
            descripcion:""
        },
        3:{
            titulo:"",
            descripcion:""
        },
        4:{
            titulo:"",
            descripcion:""
        },
        5:{
            titulo:"",
            descripcion:""
        }
    },
    dolorosos:{
        1:{
            titulo:"",
            descripción:""
        },
        2:{
            titulo:"",
            descripcion:""
        },
        3:{
            titulo:"",
            descripcion:""
        },
        4:{
            titulo:"",
            descripcion:""
        },
        5:{
            titulo:"",
            descripcion:""
        }
    },
    luminosos:{
        1:{
            titulo:"",
            descripción:""
        },
        2:{
            titulo:"",
            descripcion:""
        },
        3:{
            titulo:"",
            descripcion:""
        },
        4:{
            titulo:"",
            descripcion:""
        },
        5:{
            titulo:"",
            descripcion:""
        }
    },
    gozosos:{
        1:{
            titulo:"",
            descripción:""
        },
        2:{
            titulo:"",
            descripcion:""
        },
        3:{
            titulo:"",
            descripcion:""
        },
        4:{
            titulo:"",
            descripcion:""
        },
        5:{
            titulo:"",
            descripcion:""
        }
    }
}