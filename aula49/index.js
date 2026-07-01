function falaOi(){
    console.log('Oi')
}

falaOi()

const souUmDado = function(){
    console.log('Sou um dado')
}

function executarFuncao(funcao){
    console.log('Vou executar sua funcao abaixo')
    return funcao()
}

executarFuncao(souUmDado)

const functionArrow = () =>{
    console.log('Sou uma arrow function')
}

functionArrow()

const obj = {
    falar: function(){
        console.log('Estou falando...')
    }
}

obj.falar()