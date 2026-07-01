const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let timer

function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR' , {
        hour12: false,
        timeZone: 'UTC'
    })
}


iniciar.addEventListener('click' , function(evento){
    clearInterval(timer)

    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criarHoraDosSegundos(segundos)
    } , 1000)
})

pausar.addEventListener('click' , function(evento){
    clearInterval(timer)
})

zerar.addEventListener('click' , function(evento){
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
})