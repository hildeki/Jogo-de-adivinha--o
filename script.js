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

function encerrarJogo() {
  jogoAtivo = false;
  document.getElementById('input-palpite').disabled = true;
  document.getElementById('btn-adivinhar').disabled = true;
}

function adivinhar() {
  if (!jogoAtivo) return;

  const input = document.getElementById('input-palpite');
  const palpite = parseInt(input.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mostrarMensagem('⚠️ Digite um número válido entre 1 e 100!', '#f0a500');
    return;
  }

  tentativasRestantes--;
  adicionarChip(palpite);

  if (palpite === numeroSecreto) {
    const usadas = TOTAL_TENTATIVAS - tentativasRestantes;
    mostrarMensagem(`🎉 Parabéns! Você acertou em ${usadas} tentativa(s)!`, '#2ecc71');
    encerrarJogo();
  } else if (tentativasRestantes === 0) {
    mostrarMensagem(`😢 Você perdeu! O número era ${numeroSecreto}.`, '#e94560');
    encerrarJogo();
  } else if (palpite < numeroSecreto) {
    minimoAtual = Math.max(minimoAtual, palpite + 1);
    mostrarMensagem(`📈 Muito baixo! Tente entre ${minimoAtual} e ${maximoAtual}.`, '#3ca0ff');
  } else {
    maximoAtual = Math.min(maximoAtual, palpite - 1);
    mostrarMensagem(`📉 Muito alto! Tente entre ${minimoAtual} e ${maximoAtual}.`, '#ff643c');
  }

  input.value = '';
  input.focus();
  atualizarUI();
}

// Conecta o botão
document.getElementById('btn-adivinhar').onclick = adivinhar;

// Permite usar o Enter
document.getElementById('input-palpite').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') adivinhar();
});

// Botão reiniciar
document.querySelector('.btn-reiniciar').onclick = iniciarJogo;

// Inicia o jogo ao carregar a página
iniciarJogo();