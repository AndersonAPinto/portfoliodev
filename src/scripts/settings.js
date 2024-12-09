window.addEventListener("load", () => {
  const starBackground = document.querySelector(".star-background");

  // Gerar 50 estrelas estáticas
  for (let i = 0; i < 70; i++) {
    const star = document.createElement("div");
    star.classList.add("star-static");

    // Posições aleatórias para as estrelas estáticas
    const randomX = Math.random() * 100; // posição X aleatória entre 0 e 100%
    const randomY = Math.random() * 100; // posição Y aleatória entre 0 e 100%

    // Estilo dinâmico para a estrela estática
    star.style.left = `${randomX}%`;
    star.style.top = `${randomY}%`;

    // Adicionar a estrela ao fundo
    starBackground.appendChild(star);
  }

  // 30 estrelas em movimento
  for (let i = 0; i < 25; i++) {
    const star = document.createElement("div");
    star.classList.add("star-moving");

    // Posições iniciais aleatórias para as estrelas em movimento
    const randomX = Math.random() * 100; // posição X aleatória entre 0 e 100%
    const randomY = Math.random() * 100; // posição Y aleatória entre 0 e 100%

    // Estilo dinâmico para a estrela em movimento
    star.style.left = `${randomX}%`;
    star.style.top = `${randomY}%`;

    // Gerar movimento aleatório
    const endX = Math.random() * 200 + 100; // valor aleatório de movimento X
    const endY = Math.random() * 400 + 100; // valor aleatório de movimento Y

    // Aplicar a animação de movimento aleatório
    star.style.setProperty("--random-x", `${endX}vw`);
    star.style.setProperty("--random-y", `${endY}vh`);

    // Adicionar a estrela em movimento ao fundo
    starBackground.appendChild(star);
  }

  // Criando as estrelas adicionais que se movem para o outro lado
  for (let i = 0; i < 10; i++) {
    // Adicionando 10 estrelas que se movem para o outro lado
    const star = document.createElement("div");
    star.classList.add("star-moving-reverse"); // Classe para movimento reverso
    document.querySelector(".star-background").appendChild(star);

    // Definindo posições aleatórias para as estrelas
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 200;
    star.style.left = randomX + "vw";
    star.style.top = randomY + "vh";
  }
});


const certificadosContainer = document.querySelector('.content-certificados');
const cards = document.querySelectorAll('.card-c');

// Clonando os certificados para um efeito infinito
cards.forEach(card => {
  certificadosContainer.appendChild(card.cloneNode(true)); // Clona cada card
});
