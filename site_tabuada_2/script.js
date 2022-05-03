function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')

    if (num.value.length == 0) {
        window.alert('[ERRO], favor inserir um número')
    } else {
        var nro = Number(num.value)
        tab.innerHTML= ''

        for (c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.text = `${c} x ${nro} = ${c*nro}`
            tab.appendChild(item)
        }


    }

}