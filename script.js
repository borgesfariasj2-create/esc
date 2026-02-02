// Mapeamento de botões para seções
const scrollMap = {
  btn3: 'porque',     // Por que nos escolher?
  btn4: 'vantagens',  // Vantagens
  btn5: 'missao'      // Nossa missão
};

// Percorre o mapa e aplica o scroll
Object.keys(scrollMap).forEach(btnId => {
  const button = document.getElementById(btnId);
  const targetId = scrollMap[btnId];
  const target = document.getElementById(targetId);

  if (button && target) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});
