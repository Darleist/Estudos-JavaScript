function contar (){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contagem = document.getElementById('contagem')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO], digite novamente')
    } else {
        contagem.innerHTML = 'Contando'
        let i = Number (inicio.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        
        if (i < f ) {
            for (let c=i; c<=f; c+=p) {
                contagem.innerHTML += `\u{1F449} ${c}`
            }
        } else {
            for (let c=i; c >=f; c-=p){
                contagem.innerHTML += `\u{1F449} ${c}`               
            }

        }
        contagem.innerHTML += `\u{1F361}`
    }
}