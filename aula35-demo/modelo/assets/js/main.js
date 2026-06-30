const containerFrases = document.querySelector('#frases')

const frases = [
    '58 foi Pelé',
    '62 foi Mané',
    '70 o esquadrão',
    '94 Romario',
    '2002 Fenomeno' 
]

for(let i = 0; i < frases.length; i++){
    const p = document.createElement('p')
    p.innerHTML = frases[i]

    containerFrases.appendChild(p)
}