function Calculadora(){
    this.display = document.querySelector('.display')

    this.capturaCliques = () =>{
        document.addEventListener('click' , event =>{
            const el = event.target

            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.calculaResultado()
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }

    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0 , -1)

    this.calculaResultado = () => {
    const expressao = this.display.value

    // separa números e operadores, ex: "10+5*2" -> ["10","+","5","*","2"]
    const partes = expressao.match(/(\d+\.?\d*|[+\-*/])/g)

    if(!partes) {
        this.display.value = 'Erro'
        return
    }

    try {
        this.display.value = this.avalia(partes)
    } catch(erro) {
        this.display.value = 'Erro'
    }
}

this.avalia = partes => {
    // primeiro resolve * e /
    let i = 0
    while(i < partes.length){
        if(partes[i] === '*' || partes[i] === '/'){
            const a = parseFloat(partes[i-1])
            const b = parseFloat(partes[i+1])
            const resultado = partes[i] === '*' ? a * b : a / b
            partes.splice(i-1, 3, resultado)
            i = 0
        } else {
            i++
        }
    }

    // depois resolve + e -
    let total = parseFloat(partes[0])
    for(let j = 1; j < partes.length; j += 2){
        const operador = partes[j]
        const valor = parseFloat(partes[j+1])
        if(operador === '+') total += valor
        if(operador === '-') total -= valor
    }

    return total
}

    this.inicia = () =>{
        this.capturaCliques()
        this.capturaEnter()
    }

    this.capturaEnter = () =>{
        document.addEventListener('keydown' , e =>{
            if(e.key !== 'Enter') return
            this.calculaResultado()
        })
    }
}

const calculadora = new Calculadora()
calculadora.inicia()