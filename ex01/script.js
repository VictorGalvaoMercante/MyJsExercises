
function carregar(){
    let msg = document.getElementById('titlehours')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <12){
        img.src = 'img/fotoManhã.png'
    }else if(hora >= 12 && hora < 18){
        img.src='img/fotoTarde.png'
    }else {
        img.src = 'img/fotoNoite.png'
    }

    


}    

