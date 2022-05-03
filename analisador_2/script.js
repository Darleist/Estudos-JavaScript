var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
let valores = []

function nrovalido(n) {
    if (Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add(){
    if (nrovalido(nro.value) && !inlist (nro.value, valores)) {
        valores.push (Number (nro.value))
        let item = document.createElement('option')
        item.text = `Valor ${nro.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Errou')
    }
    nro.value = ''
    nro.focus ()
}

function end(){
    if (valores.length == 0) {
        window.alert('Digite um número primeiro')
    } else {
        var total = valores.length 
        let soma = 0
        let maior = valores [0]
        let menor = valores [0]
        
        for (let pos in valores) {
            soma += valores[pos]
            if (maior < valores[pos]) 
            maior = valores[pos]
            if (menor > valores[pos]) 
            menor = valores[pos]
        }
        media = soma / total        
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ao todo ${total} números.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma total é ${soma}. </p>`
        res.innerHTML += `<p>A media do total é ${media.toFixed(1)}. </p>`
    }   
}
