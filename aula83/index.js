class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }

    static trocaPilha(){
        console.log(`Ok, vou trocar!`)
    }

    static soma(x , y){
        return console.log(x + y)
    }
}

const controle1 = new ControleRemoto('LG')

controle1.aumentarVolume()

console.log(controle1)

ControleRemoto.trocaPilha()

ControleRemoto.soma(8 , 2)