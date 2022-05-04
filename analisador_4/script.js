var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
let valores = []

function nrovalido (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
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

function add () {
    if (nrovalido(nro.value) && !nalista(nro.value, valores)) {
        valores.push (Number(nro.value))
        let item = document.createElement('option')
        item.text = `Número ${nro.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }  else {
        window.alert('[ERRO], número inválido')
    }
    nro.value = ''
    nro.focus()
}
function end(){
    if (valores.length == 0) {
        window.alert('Digite um número primeiro')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (maior < valores[pos])
            maior = valores[pos]
            if (menor > valores[pos])
            menor = valores [pos]
        }
        
    let media = soma / total
    
    res.innerHTML += `<p>O total de números é ${total} </p>`
    res.innerHTML += `<p>O número maior é ${maior} </p>`
    res.innerHTML += `<p>O número menor é ${menor} </p>`
    res.innerHTML += `<p>A media dos números é ${media} </p>`
    res.innerHTML += `<p>A soma dos números é ${soma} </p>`
}
}
