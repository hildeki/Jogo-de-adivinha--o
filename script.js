const TOTAL_TENTATIVAS = 10;
  let numeroSecreto;
  let tentativasRestantes;
  let jogoAtivo;
  let minimoAtual;
  let maximoAtual;
 
  function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = TOTAL_TENTATIVAS;
  jogoAtivo = true;
  minimoAtual = 1;
  maximoAtual = 100;
}

function mostrarMensagem(texto, cor) {
  const el = document.getElementById('mensagem');
  el.textContent = texto;
  el.style.color = cor;
}

function atualizarUI() {
  document.getElementById('tentativas-restantes').textContent =
    `${tentativasRestantes} tentativa(s) restante(s)`;

  document.getElementById('intervalo').textContent =
    `Intervalo: ${minimoAtual} – ${maximoAtual}`;

  const percentual = ((TOTAL_TENTATIVAS - tentativasRestantes) / TOTAL_TENTATIVAS) * 100;
  document.getElementById('barra').style.width = percentual + '%';
}

