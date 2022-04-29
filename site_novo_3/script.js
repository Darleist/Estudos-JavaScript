function verificar() {
    var data = new Date ()
    var anoAtual = data.getFullYear ()
    var ano = document.getElementById ('ano')
    var resposta = document.getElementById ('resposta')
    
    if (ano.value.length == 0 || ano.value > anoAtual) {
        window.alert ('Tente novamente')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = anoAtual - Number(ano.value)
        var genero = ''
        var img = document.getElementById ('img')
        //var img = document.createElement ('img')
        //img.setAttribute ('id', 'foto')
        if (sex[0].checked)  {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/homem_criança.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/homem_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem_aulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        
        } else if (sex[1].checked) {
            genero = 'Mulher'
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
        resposta.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        
        }

}
