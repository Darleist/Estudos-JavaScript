function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById ('ano')
    var res = document.getElementById ('res')
   
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert ('Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName ('sex')
        var idade = ano - Number (fAno.value)
        var sx = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            sx = 'Homem'
            if (idade >=0 && idade <12) {
                img.setAttribute('src', 'imagens/homem_criança.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/homem_jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }

        } else if (sex [1].checked) {
            sx = 'Mulher' 
            if (idade >=0 && idade <12) {
                img.setAttribute('src', 'imagens/mulher_criança.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/mulher_jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher_idosa.png') 
            }
         }  
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${sx} com idade calculada: ${idade}`  
         res.appendChild(img)
    }
}