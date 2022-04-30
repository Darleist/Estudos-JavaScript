function verificar (){
    var dia = new Date()
    var data = dia.getFullYear ()
    var ano = document.getElementById('ano')
    var resposta = document.getElementById('resultado')

    if (ano.value.length == 0 || ano.value > data) {
        window.alert('[ERRO] Tente novamente')
    }
}
