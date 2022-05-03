var nro = document.getElementById('nro')
var lista = document.getElementById('lista')
var end = document.getElementById('end')
var res = document.getElementById('res')
var valores = []

function add(){
    if (nro.value.length == 0) {
        window.alert('[ERRO], digite um número válido')
        
    } else {
      // var num = Number (nro.value) 
       if (nro.value > 100) {
            window.alert('[ERRO], digite um número entre 1 e 100')  
       } else {
           
            window.alert('Certo')
       }
    
    } 
}

function end() {
}

var res = document.getElementById('res')
