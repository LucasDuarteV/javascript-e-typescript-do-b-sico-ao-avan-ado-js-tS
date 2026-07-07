class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} está ligado!`)
            return
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado`)
            return
        }

        this.ligado = false
    }

}

class Celular extends DispositivoEletronico{
    constructor(nome,cor){
        super(nome)
        this.cor = cor
    }
}

const d1 = new Celular('Celular' , 'Preto')
d1.ligar()
console.log(d1)