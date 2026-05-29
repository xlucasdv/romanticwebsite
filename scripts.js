function abrirPopup() {
  document.getElementById("popup").style.display = "flex";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

// Fechar ao clicar fora do conteúdo
document.getElementById("popup").addEventListener("click", function(e) {
  if (e.target === this) fecharPopup();
});