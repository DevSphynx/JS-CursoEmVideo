function carregar() {
    var msg = window.document.getElementById('divmsg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    divmsg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora <12) {
        divmsg.innerHTML += '<p>BOM DIA!</p>'
        img.src = 'assets/img/imgmanhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <18) {
        divmsg.innerHTML += '<p>BOA TARDE!</p>'
        img.src = 'assets/img/imgtarde.png'
        document.body.style.background = '#b9846f'
    } else {
        divmsg.innerHTML += '<p>BOA NOITE!</p>'
        img.src ='assets/img/imgnoite.png'
        document.body.style.background = '#515154'
    }
}