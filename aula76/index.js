function Produto(nome , preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia 
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome , preco , cor){
    Produto.call(this , nome , preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome , preco , material, estoque){
    Produto.call(this, nome , preco)
    this.tipo = material
    Object.defineProperty(this , 'estoque' , {
        enumerable: true,
        configurable: false,

        get: function(){
            return estoque
        },

        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Insira um número')
                return
            }
            
            estoque = valor
        }
    }
)}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen' , 111)
const camiseta = new Camiseta('Regata' , 7.5 , 'Preta')
console.log(produto)
console.log(camiseta)

const caneca = new Caneca('Caneca Batman' , 10 , 'Porcelana' , 5)
console.log(caneca)
console.log(caneca.estoque)