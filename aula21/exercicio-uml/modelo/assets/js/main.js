function meuEsocopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const niveis = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ]

    function receberEvento(evento){
        evento.preventDefault()

        const peso = Number(document.querySelector('#peso').value)
        const altura = Number(document.querySelector('#altura').value)

        if(!peso){
            resultado.innerHTML = `<p>O valor de Peso é inválido!!</p>`
            return
        }

        if(!altura){
            resultado.innerHTML = `<p>O valor de Altura é inválido!!</p>`
            return
        }

        const imc = getImc(peso , altura)
        const nivelImc = getNivelImc(imc)

        resultado.innerHTML = `<p>Seu IMC é ${imc} (${nivelImc})</p>`
    }

    function getImc(peso , altura){
        const imc = peso / (altura ** 2)
        return imc.toFixed(2)
    }

    function getNivelImc(imc){
        if(imc >= 40) return niveis[5]
        if(imc >= 35) return niveis[4]
        if(imc >= 30) return niveis[3]
        if(imc >= 25) return niveis[2]
        if(imc >= 18.5) return niveis[1]
        return niveis[0]
    }
    form.addEventListener('submit',receberEvento)
}

meuEsocopo()