function verificar (){
    var data = new Date ()
    var anoAtual = data.getFullYear()
    var ano = document.getElementById ('ano')
    var resultado = document.getElementById ('resultado')
    

    if (ano.value.length == 0 || Number (ano.value) > anoAtual) {
        window.alert('[ERRO], tente novamente')
    } else {
       var idade = anoAtual - ano.value
       var sexo = document.getElementsByName('sexo')
       var sx= ''
       var img = document.getElementById('img')
       
       if (sexo[0].checked) {
           sx = 'um homem'
           if (idade >=0 && idade < 10) {
            img.setAttribute('src', 'imagens/homem_criança.png')
           } else if (idade < 20) {
               img.setAttribute('src', 'imagens/homem_jovem.png')
           } else if (idade < 50) {
               img.setAttribute('src', 'imagens/homem_adulto.png')
           } else {
               img.setAttribute('src', 'imagens/homem_idoso.png')
           }          
        } else if (sexo[1].checked) {
            sx= 'uma mulher'  
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/mulher_criança.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/mulher_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }     
       }
       resultado.style.textAlign = 'center' 
       resultado.innerHTML = (`Foi detectado ${sx} com ${idade} anos`)


    }



}