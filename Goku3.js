var verificação = 'a';
var tentativas = 2
function Pergunta3(){
    var responder = prompt('Digite sua resposta');
    for (var i = 0; i < tentativas; i++){
        if (responder == verificação){
            alert('Resposta correta, vamos a próxima pergunta')
            window.location.assign('./winner.html');
            break;
        }else if (i < 1){ 
            alert('Resposta incorreta');
            responder = prompt('Digite sua resposta');
        }else{
            window.location.assign('./gameover.html');
        }
    }
}