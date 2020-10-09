var mainDiv = document.getElementById("mainDiv")
var cnvs;
var context;
var gameState = {
    hasFinished:false,
    conteo: 0
}
var updater;

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
        var rect = e.target.getBoundingClientRect();
        mouse.X = e.clientX - rect.left; //x position within the element.
        mouse.Y = e.clientY - rect.top;  //y position within the element.
        //mouse.X = e.clientX - cnvs.offsetLeft;
        //mouse.Y = e.clientY - cnvs.offsetTop;
    }    
    function mouseDown(e){
        mouse.isMouseDown = true
    }
    function mouseUp(e){
        mouse.isMouseDown = false;
        mouse.isMouseLoaded = false;
    }
    aveMaria = []
    cuentas = []
    padreNuestro = null
    gloria = null
    for (var i = 0; i < 10; i++) {
        let cuenta = new Cuentas(i)
        let flower = new Flower(i, cuenta)
        aveMaria.push(flower)
        cuentas.push(cuenta)
    }
    padreNuestro = new CuentaPadrenuestro(cuentas[0].size().Y)
    gloria = new CuentaGloria(cuentas[0].size().Y)
    var updater = setInterval(() => {
        context.clearRect(0, 0, cnvs.clientWidth, cnvs.clientHeight);        
        padreNuestro.draw(context)
        cuentas.forEach(oracion => {
            oracion.draw(context)
        });
        gloria.draw(context)
        aveMaria.forEach((oracion, i) => {
            oracion.update(mouse, gameState)
            oracion.draw(context)
        });
        if(gameState.conteo >= 10 && !gameState.hasFinished){
            gameState.hasFinished = true
            finDeMisterio();
            clearInterval(updater);
        }        
    }, 1000 / 30);
}

function finDeMisterio(){
    gameState.hasFinished = false
    gameState.conteo = 0
    cnvs = {}
    var feedback = document.createElement("div");
    feedback.id = "texto"
    feedback.className = "text-center"
    var feedbackText = document.createElement("h2");
    feedbackText.className = "text-center"
    feedbackText.innerHTML = "¡Bendiciones! Completaste el " + valoresOrdinales(misterio.actual) + " misterio " + misterio.tipo.slice(0, misterio.tipo.length - 1);
    var nextButton = document.createElement("button");
    var btnText = ""
    nextButton.className = "btn btn-primary"
    if(misterio.actual < 5) {
        btnText = "Ir al siguiente misterio"
        nextButton.addEventListener("click", inicioDeNuevoMisterio, false);
    } else {
        btnText = "Vamos a hacer las oraciones finales"
        nextButton.addEventListener("click", inicioDeOracionesFinales, false);
    }
    nextButton.innerHTML = btnText;
    feedback.appendChild(feedbackText)
    feedback.appendChild(nextButton)
    mainDiv.removeChild(document.getElementById("game"))
    mainDiv.appendChild(feedback)
}

function inicioDeNuevoMisterio(){
    var size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }
    var divMisterios = document.createElement("div");
    divMisterios.id = "misterios"
    var hMisterio = document.createElement("h2");
    hMisterio.id = "tipoDeMisterio";
    var pMisterio = document.createElement("p");
    pMisterio.id = "descripcionDeMisterio"
    divMisterios.appendChild(hMisterio)
    divMisterios.appendChild(pMisterio)
    var canvas = document.createElement("canvas");
    canvas.id ="game"
    canvas.className = "border"
    canvas.width = size.width - Math.floor(size.width/10)
    canvas.height = Math.floor(size.height /2)
    var eliminateText = document.getElementById("texto")
    if(eliminateText) mainDiv.removeChild(document.getElementById("texto"))
    mainDiv.appendChild(divMisterios)
    mainDiv.appendChild(canvas)
    cnvs = document.getElementById("game")
    context = cnvs.getContext("2d");
    misterio.continuarAlSiguienteMisterio()
    Start()
}

function inicioDeOracionesFinales(){
    var divFinal = document.createElement("div");
    divFinal.id = "final"
    var hCierre = document.createElement("h2");
    hCierre.id = "cierre";
    hCierre.innerHTML = "Has finalizado los cinco misterios del rosario"
    var pOraciones = document.createElement("p");
    pOraciones.id = "oraciones"
    pOraciones.innerHTML = "Solo te queda un padre nuestro, tres avemarías, un gloria y el salve"
    var pSalve = document.createElement("p");
    pSalve.id = "salve"
    pSalve.innerHTML = "Dios te Salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra, Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas y gracias de nuestro Señor Jesucristo"
    var misterios = document.getElementById("misterios")
    var textos = document.getElementById("texto")
    var btnAmen = document.createElement("button");
    btnAmen.id = "btnAmen"
    btnAmen.className = "btn btn-primary"
    btnAmen.innerHTML = "Amén"
    mainDiv.removeChild(misterios) 
    mainDiv.removeChild(textos) 
    mainDiv.appendChild(divFinal)
    mainDiv.appendChild(hCierre)
    mainDiv.appendChild(pOraciones)
    mainDiv.appendChild(pSalve)
    mainDiv.appendChild(btnAmen)
    btnAmen.addEventListener("click", cierre, false);
}

function cierre(){
    mainDiv.removeChild(document.getElementById("final"))
    mainDiv.removeChild(document.getElementById("cierre"))
    mainDiv.removeChild(document.getElementById("oraciones"))
    mainDiv.removeChild(document.getElementById("salve"))
    mainDiv.removeChild(document.getElementById("btnAmen"))
    var btnReiniciar = document.createElement("button");
    btnReiniciar.className = "btn btn-primary"
    btnReiniciar.innerHTML = "Recomenzar"
    mainDiv.appendChild(btnReiniciar)
    btnReiniciar.addEventListener("click", reiniciarPagina, false);
}

function reiniciarPagina(){
    location.reload();
}