function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são as ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto_manhã.png'
        document.body.style.background= '#7b6a1c'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'imagens/foto_tarde.png'
        document.body.style.background= '#aed9ef'
    } else if (hora > 18 && hora < 20) {
        img.src = 'imagens/foto_tardezinha.png'
        document.body.style.background= '#fbc66a'
    } else {
        img.src = 'imagens/foto_noite.png'
        document.body.style.background= '#3e2222'
    }


}