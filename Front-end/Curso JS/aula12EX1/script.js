function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = new Date().getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotoManhã1.png'
        document.body.style.background = '#deb897'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto tarde1.png'
        document.body.style.background = 'rgb(240, 166, 82)'
    } else {
        img.src = 'fotoNoite1.png'
        document.body.style.background = '#293e47'
    }
}