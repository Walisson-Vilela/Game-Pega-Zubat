
var altura = 0
var largura = 0
var vidas = 1
var tempo =10
var criaZubatTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaZubatTempo = 1500
}else if(nivel === 'hard'){
    criaZubatTempo = 1000
}else if(nivel === 'crazy'){
    criaZubatTempo = 750
}

function ajusteTela(){
    altura = window.innerHeight
    largura = window.innerWidth

console.log(largura, altura)
}

ajusteTela()

//Criacao de cronometro
var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaZubat)
        window.location.href = 'vitoria.html'
    }else{
        document.querySelector('#cronometro').innerHTML = tempo
    }
    
}, 1000);




function posicaoRandomica(){
//Remover Zubat anterior, caso exista
if(document.querySelector('#zubat')){
    document.querySelector('#zubat').remove()

    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'

    }else{
    document.querySelector('#v' + vidas).src = "imagens/pokebola0.png"
    vidas++
    }
}
var posicaoX = Math.floor(Math.random() * largura) -90
var posicaoY = Math.floor(Math.random() * altura) -90 

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Criar elemento HTML
var zubat = document.createElement('img')
zubat.src = 'imagens/zubat.png'
zubat.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
zubat.style.left = posicaoX + 'px'
zubat.style.top = posicaoY + 'px'
zubat.style.position = 'absolute'
zubat.id = 'zubat'
zubat.onclick = function(){
    this.remove()
}


document.body.appendChild(zubat)
}

function tamanhoAleatorio(){

    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
        return 'zubat1'

        case 1:
            return 'zubat2'
        
        case 2:
            return 'zubat3'

    }

}

function ladoAleatorio(){
    
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
        return 'ladoA'

        case 1:
        return 'ladoB'
        
    }

}
