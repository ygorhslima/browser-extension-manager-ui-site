// Obtendo o link do CSS para modo escuro
const modo_dark = document.getElementById("modo-dark"); 
const corpo = document.body;
let modoEscuro = false;

/** Evento de clique responsável pela mudança de tema no site (dark ou light) */
document.getElementById("button-dark-light").addEventListener("click", () => {
  const icon = document.getElementById("img-icon-light-dark");

  // Alterna entre modo escuro e claro
  modoEscuro = !modoEscuro;

  if (modoEscuro) {
    modo_dark.disabled = false; // ativa CSS do modo escuro
    icon.src = "./assets/images/icon-sun.svg"; // ícone de sol
  } else {
    modo_dark.disabled = true; // desativa CSS do modo escuro
    icon.src = "./assets/images/icon-moon.svg"; // ícone de lua
  }
});

/** Eventos de clique responsáveis por mostrar:
 - todos os itens
 - apenas os que estão ativados (checkbox marcado)
 - apenas os que estão desativados (checkbox desmarcado)
*/

const btn_all = document.getElementById("btn_all");
const btn_active = document.getElementById("btn_active");
const btn_inactive = document.getElementById("btn_inactive");

// Obtém todos os itens da grade (caixas)
const box_item = document.querySelectorAll(".box-item");

// Mostra todos os itens
btn_all.addEventListener("click", () => {
  box_item.forEach((item) => {
    item.style.display = '';
  });
});

// Mostra apenas os itens com checkbox marcado (ativos)
btn_active.addEventListener("click", () => {
  box_item.forEach((item) => {
    const checkbox = item.querySelector(".btn_active-desative");
    item.style.display = checkbox && checkbox.checked ? '' : 'none';
  });
});

// Mostra apenas os itens com checkbox desmarcado (inativos)
btn_inactive.addEventListener("click", () => {
  box_item.forEach((item) => {
    const checkbox = item.querySelector(".btn_active-desative");
    item.style.display = checkbox && !checkbox.checked ? '' : 'none';
  });
});

/** Evento de clique responsável por remover o item pai ao clicar no botão .btn_remove */
document.querySelectorAll('.btn_remove').forEach(botao => {
  botao.addEventListener('click', function () {
    this.closest('.box-item').remove(); // Remove o .box-item correspondente
  });
});
