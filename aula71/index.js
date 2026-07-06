function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,

        get: function () {
            return estoquePrivado;
        },

        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Bad Value');
                return;
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1.estoque); // 3

p1.estoque = 5000;

console.log(p1.estoque); // 5000