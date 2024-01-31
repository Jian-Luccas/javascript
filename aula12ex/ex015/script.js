function verificar () {
    var data = new Date()
    var ano = data.getFullYear() // pega a data completa
    var fano = document.getElementById('tano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-h.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-h.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}