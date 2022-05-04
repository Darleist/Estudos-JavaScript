var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function nrovalido(n) {
    if (Number(n) >= 1 && Number(n) <=1000) {
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

function add(){
    if (nrovalido(nro.value) && !nalista(nro.value, valores)) {
        valores.push(Number(nro.value))
        let item = document.createElement('option')
        item.text = `Valor ${nro.value} adicionado`
        lista.appendChild(item)
        res.innerHTML= ''

    } else {
        window.alert('[ERRO], valor inválido')
    }
    nro.value = ''
    nro.focus()
}
function end(){
    if (valores.length == 0) {
        window.alert('Primeiro digite um número')
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores [0]
        let soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (maior < valores[pos])
            maior = valores[pos]
            if (menor > valores[pos])
            menor = valores[pos]
        }
        media = soma/total

        res.innerHTML= ''
        res.innerHTML += `<p>O total de valores é ${total} </p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p>A media de todos os valores é ${media} </p>`
        res.innerHTML += `<p>O maior valor é ${maior} </p>`
        res.innerHTML += `<p>O menor valor é ${menor} </p>`
    }
}