var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
let valores = []

function nrovalido(n){
    if (Number(n) >=1 && Number(n) <=1000){
        return true
    } else {
        return false
    }
}
function nalista (n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function add() {
    if(nrovalido(nro.value) && !nalista(nro.value, valores)) {
        valores.push(Number(nro.value))
        let item = document.createElement('option')
        item.text= `Valor ${nro.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Número inválido')
    }
    nro.value = ''
    nro.focus()
}
function end() {
    if (valores.length ==0){
        window.alert('Primeiro digite um número')
    } else {
        let total = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (maior < valores[pos])
            maior = valores[pos]
            if (menor > valores[pos])
            menor = valores[pos]
        }
        let media = soma/total
        res.innerHTML += `<p>Total de números declarados é ${total} </p>`
        res.innerHTML += `<p>A soma dos valores é ${soma} </p>`
        res.innerHTML += `<p>O maior número informado é ${maior} </p>`
        res.innerHTML += `<p>O menor número informado é ${menor}</p>`
        res.innerHTML += `<p>A media dos valores é ${media} </p>`
}
}