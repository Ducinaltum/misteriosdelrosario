
var cnvs = document.getElementById("game")
var context = cnvs.getContext("2d");

function Start(){
    denario = new Denario()
    setInterval(() => {
        denario.aveMaria.forEach(oracion => {
            oracion.draw(context)
        });
    }, 1000/30);
}

Start()

function Denario(){
    this.aveMaria = []
    flowers = []
    padrenuestro = []
    gloria = []
    for(var i = 0; i < 10; i++){
        this.aveMaria.push(new Flower(i))
    }

    console.log(this.aveMaria)

}
