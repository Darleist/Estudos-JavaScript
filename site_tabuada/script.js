function gerar() {
    let numero = document.getElementById('nro')
    let tab = document.getElementById('resultado')

    if (numero.value.length ==0 ){
        window.alert('[Erro], digite novamente')
    } else {
        let num = Number(numero.value)
        tab.innerHTML = ''
        
        for (c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }




    }





}