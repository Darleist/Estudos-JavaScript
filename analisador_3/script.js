var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function nrovalido (n) {
    if (Number(n) <=100 && Number(n) >=1) {
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
        item.text = `Valor ${nro.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        window.alert('[ERRO]')
    }
    nro.value = ''
    nro.focus ()
} 

function end() {
    if (valores.length == 0) {
        window.alert('Digite um nro primeiro')
    } else {
        var total = valores.length 
        var maior = valores [0]
        var menor = valores [0]
        var soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (maior < valores[pos])
            maior = valores[pos]
            if (menor > valores [pos])
            menor = valores[pos]
        }
        var media = soma / total 

        res.innerHTML += `<p>O total de números é ${total} </p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os números é ${media}</p>`
    }
}