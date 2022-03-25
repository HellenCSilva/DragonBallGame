var verificação = 'c';
var contador = 1
var tentativas = 2
function Pergunta2(){
    var responder = prompt('Digite sua resposta');
    for (var i = 0; i < tentativas; i++){
        if (responder == verificação){
            alert('Resposta correta, vamos a próxima pergunta')
            window.location.assign('./GokuF3.html');
            break;
        }else if (i < 1){ 
            alert('Resposta incorreta');
            responder = prompt('Digite sua resposta');
        }else{
            window.location.assign('./gameover.html');
        }
    }
}