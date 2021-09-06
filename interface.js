document.addEventListener('DOMContentLoaded',()=>{ //Quando a pagina carregar execute essa função 

    let casa = document.querySelectorAll(".casa"); //selecione todas a classe casa

    casa.forEach((casa)=>{ //Adicione em toda a classe casa essa função
        casa.addEventListener('click',posClick); //apos a cassa for clicada acione essa função
    })


})

function posClick(evento){//
    
    let casa = evento.target; // informa a localização da casa clicada
    let posicao = casa.id;

    if(movimento(posicao)){;// Envie para a função movimento a posição da casa escolhida
            
        score[vezDoJogador]++;
        scoreText[vezDoJogador].innerHTML = `${score[vezDoJogador]}`;
        setInterval(()=>{
            if(fimDeJogo){
                reiniciar()
            }
        },300)
        
    }
    

    simboloCasa(posicao);

}

function simboloCasa(posicao){ //Essa função preenche a casa com o simbolo do jogador da vez
    
    let casa = document.getElementById(posicao.toString());
    let simbolo = tabuleiro[posicao];
    casa.innerHTML = `<div class='${simbolo}'></div>`
}


function reiniciar(){
    let casa = document.querySelectorAll(".casa")

    tabuleiro = ['', '','','', '','','', '',''];
    vezDoJogador = 0;
    fimDeJogo = false;
    casa.forEach((casa)=>{
        casa.innerHTML = '';
    })
}
