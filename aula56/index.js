function criaPessoa(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `O ${this.nome} está falando sobre ${assunto}`
        },

       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        peso,
        altura,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
        
    }
}

const p1 = criaPessoa('Lucas' , 'Duarte' , 80 , 1.87)
console.log(p1.fala('JS'))
console.log(p1.imc())
console.log(p1.nomeCompleto)