let anoNascimento = 0
let idade = 0

function clicar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    const txtnascimento = document.getElementById('txtAno')
    const anoNascimento = Number(txtnascimento.value)
    
    
    let idade = 2023 - anoNascimento

    msg.innerHTML = `Detectamos pessoa de ${idade} anos.`

    if(idade >=  0 && idade < 12 ){
        img.src = 'img/crianca.jpg' 
    }else if(idade >= 12 && idade < 22){
        img.src = 'img/adoleceste.jpg'
    }else if(idade >= 22 && idade < 60){
        img.src = 'img/adulto.jpg'
    }else{
        img.src = "img/idosos.jpg"
    }




    

    


}    

