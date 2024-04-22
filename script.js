var numberToFind = 0;
var attemps = 0;
const mensagem = document.getElementById('mensagem');

function refresh() {
      //gera um numero aleatorio
      numberToFind = parseInt(Math.random() * 100);

}

function verifyNumber() {
      var bet = document.getElementById('bet').value;

      if (bet > 100 || bet < 1) {
            alert('Aposta Inválida');
            return;
      }

      if (bet > numberToFind) {
            attemps++;
            mensagem.innerHTML = 'O número para ser encontrato é MENOR!';
      }
      else if (bet < numberToFind) {
            attemps++;
            mensagem.innerHTML = 'O número para ser encontrado é MAIOR!';
      }
      else {
            mensagem.innerHTML = 'Você conseguiu, acertou em ' + attemps + ' tentativas. O número escolhido foi ' + numberToFind + '.'
      }


}

refresh();