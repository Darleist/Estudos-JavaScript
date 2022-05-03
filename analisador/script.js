var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function umnro(n){
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function nalista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { 
        return false
    }     
}

function add() {
    if (umnro(nro.value) && !nalista(nro.value, valores)) { 
       valores.push (Number(nro.value))
       let item = document.createElement('option')
       item.text = `Valor ${nro.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    nro.value = ''
    nro.focus ()
}

function end(){
    if (valores.length ==0) {
        window.alert('Nenhum número encontrado')
    } else {
        let total = valores.length
        let maior = valores [0]
        let  menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            media += valores[pos] / valores.length
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma total é ${soma}. </p>`
        res.innerHTML += `<p>A media do total é ${media.toFixed(1)}. </p>`
    }
}
