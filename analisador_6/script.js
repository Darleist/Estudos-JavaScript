var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
let valores = []
var res = document.getElementById('res')

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
}