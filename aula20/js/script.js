function meuEscopo(){

    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    let pessoas = []

    function receberEvento(evento){
        evento.preventDefault()
        let nome = form.querySelector('.nome')
        let sobrenome = form.querySelector('.sobrenome')
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)
        resultado.innerHTML += ''
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value} kg, ${altura.value}<p>`
    }

    form.addEventListener('submit' , receberEvento)

}
meuEscopo()