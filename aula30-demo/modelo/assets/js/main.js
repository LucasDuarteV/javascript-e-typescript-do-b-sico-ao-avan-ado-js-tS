const dataId = document.querySelector('#data')
const data = new Date()

const diaSemana = data.getDay()
const mes = data.getMonth()
const dia = data.getDate()
const ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes()

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo'
        return diaSemanaTexto

        case 1:
            diaSemanaTexto = 'Segunda-Feira'
        return diaSemanaTexto

        case 2:
            diaSemanaTexto = 'Terça-Feira'
        return diaSemanaTexto

        case 3:
            diaSemanaTexto = 'Quarta-Feira'
        return diaSemanaTexto

        case 4:
            diaSemanaTexto = 'Quinta-Feira'
        return diaSemanaTexto

        case 5:
            diaSemanaTexto = 'Sexta-Feira'
        return diaSemanaTexto

        case 6:
            diaSemanaTexto = 'Sábado'
        return diaSemanaTexto
    }

}

function getMesAtual(mesAtual) {
    switch (mesAtual) {
        case 0:
            return 'Janeiro';

        case 1:
            return 'Fevereiro';

        case 2:
            return 'Março';

        case 3:
            return 'Abril';

        case 4:
            return 'Maio';

        case 5:
            return 'Junho';

        case 6:
            return 'Julho';

        case 7:
            return 'Agosto';

        case 8:
            return 'Setembro';

        case 9:
            return 'Outubro';

        case 10:
            return 'Novembro';

        case 11:
            return 'Dezembro';
    }
}

const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
const mesTexto = getMesAtual(mes)

dataId.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutos}`