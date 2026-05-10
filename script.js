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

function adicionarChip(palpite) {
  const lista = document.getElementById('historico-lista');
  const chip = document.createElement('span');
  chip.classList.add('chip');

  if (palpite < numeroSecreto) {
    chip.classList.add('baixo');
  } else if (palpite > numeroSecreto) {
    chip.classList.add('alto');
  } else {
    chip.style.background = 'rgba(46,204,113,0.2)';
    chip.style.border = '1px solid #2ecc71';
    chip.style.color = '#2ecc71';
  }

  chip.textContent = palpite;
  lista.appendChild(chip);
}

