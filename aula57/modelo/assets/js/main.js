function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEq: document.querySelector('.btn-eq'),

        inicia(){
            this.cliqueBotoes()
            this.pressionarEnter()
        },

        pressionarEnter(){
            this.display.addEventListener('keydown' , e =>{
                if(e.key == 'Enter'){
                    this.realizaConta()
                }
            })
        },

        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(conta === undefined || Number.isNaN(conta)){
                    alert('Conta inválida!')
                    return
                }

                this.display.value = conta
            }
            catch(e){
                alert('Conta inválida!')
                return
            }
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay(){
            this.display.value = ''
        },

         cliqueBotoes(){
            document.addEventListener('click' , e  => {
            const el = e.target

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText)
             }

             if(el.classList.contains('btn-clear')){
                this.clearDisplay(el.innerText)
             }

             if(el.classList.contains('btn-del')){
                this.apagaUm(el.innerText)
             }

             if(el.classList.contains('btn-eq')){
                this.realizaConta(el.innerText)
             }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    }
}

const calc = criaCalculadora()
calc.cliqueBotoes()