const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', evento => {
    const el = evento.target;

    if (el.tagName.toLowerCase() === 'a') {
        evento.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');

        const objConfig = {
            method: 'GET',
            url: href
        };

        const response = await request(objConfig);
        carregaResultado(response);

    } catch (erro) {
        console.error('Erro ao carregar a página:', erro);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    if (resultado) {
        resultado.innerHTML = response;
    }
}