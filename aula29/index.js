function getDiaDaSemana(diaSemana){

    let diaSemanaTexto

    switch(diaDaSemana){
    case 0:
        diaSemanaTexto = 'Domingo'
    return diaSemanaTexto

    case 1:
        diaSemanaTexto = 'Segunda'
    return diaSemanaTexto

    case 2:
        diaSemanaTexto = 'Terça'
    return diaSemanaTexto

    case 3:
        diaSemanaTexto = 'Quarta'
    return diaSemanaTexto

    case 4:
        diaSemanaTexto = 'Quinta'
    return diaSemanaTexto

    case 5:
        diaSemanaTexto = 'Sexta'
    return diaSemanaTexto

    case 6:
        diaSemanaTexto = 'Sabado'
    return diaSemanaTexto
}

}


const data = new Date('2003-12-6 00:00:00')
const diaDaSemana = data.getDay()
const diaSemanaTexto = getDiaDaSemana(diaDaSemana)

console.log(diaSemanaTexto)