function verificar (){
    var dia = new Date()
    var data = dia.getFullYear ()
    var ano = document.getElementById('ano')
    var resposta = document.getElementById('resultado')

    if (ano.value.length == 0 || ano.value > data) {
        window.alert('[ERRO] Tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = data - Number (ano.value)
        var sx = ''
        var img = document.getElementById ('img')

        if (sexo[0].checked) {
            sx = 'masculino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/homem_criança.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/homem_jovem.png')                
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }

        } else if (sexo[1].checked) {
            sx = 'femenino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher_criança.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/mulher_jovem.png')                
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        }
       
        resposta.style.textAlign = 'center'
       resposta.innerHTML = (`Detectamos ${sx} com ${idade} anos`)
    }

}
