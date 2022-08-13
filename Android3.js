var verificação = 'b';
var tentativas = 2
function Pergunta3(){
    var responder = prompt('Digite sua resposta');
    for (var i = 0; i < tentativas; i++){
        if (responder == verificação){
            alert('Resposta correta')
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