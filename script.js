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