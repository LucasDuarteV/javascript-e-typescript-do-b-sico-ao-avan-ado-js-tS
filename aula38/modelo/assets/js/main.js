const paragrafos = document.querySelector('#paragrafos');
const ps = paragrafos.querySelectorAll('p');

for (let p of ps){
    p.style.backgroundColor = 'green'
    p.style.color = '#FFFFFF'
}
