let tabuleiro = ['', '','','', '','','', '',''];
let vezDoJogador = 0;
let fimDeJogo = false;
let jogadores = ['x','o'];
let sequenciV = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function movimento(numCasa){
    
    if(fimDeJogo){
        
        return;
    }

    if (tabuleiro[numCasa] == ''){ // se a casa estiver vazia continui
        
        tabuleiro[numCasa] = jogadores[vezDoJogador]; //coloque X ou O na casa escolhida de acordo com o jogador da vez

        fimDeJogo = vitoria(); // ouve uma vitoria ?

        if(fimDeJogo == false){  // Se não ouver um vencedor passa a vez para outro jogador

            vezDoJogador = (vezDoJogador == 0) ?  1 : 0; 
        }
    }

    return fimDeJogo;    
}

function vitoria(){ //Essa função sera executada toda vez que ouver uma jogada
    
    for(let i = 0; i < sequenciV.length;i++){ // repita isso 8 X
        
        let seq = sequenciV[i]; // Seq e igual a uma [sequencia] de vitoria
        
        let pos1 = seq[0]; //Pos e igual a um [numero] da sequencia de vitoria
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != ''){
            return true;
        }

    }
    return false;
}


