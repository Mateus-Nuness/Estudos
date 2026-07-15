function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dado e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe homi.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovi homi.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homi.png')
            } else {
                //idoso
                img.setAttribute('src', 'veio.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe muie.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovi muie.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'muie.png')
            } else {
                //idoso
                img.setAttribute('src', 'veia.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}