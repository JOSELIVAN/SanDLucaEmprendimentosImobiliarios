// Efeito de animação ao rolar a página
document.addEventListener("scroll", function () {
  const serviceCards = document.querySelectorAll(".card");
  const imoveis = document.querySelectorAll(".imovel");
  const triggerBottom = window.innerHeight * 0.8;

  serviceCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });

  imoveis.forEach((imovel) => {
    const imovelTop = imovel.getBoundingClientRect().top;
    if (imovelTop < triggerBottom) {
      imovel.classList.add("show");
    } else {
      imovel.classList.remove("show");
    }
  });
});

// Efeito suave ao clicar nos links do menu
const links = document.querySelectorAll("nav a");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
  // Efeito Parallax no Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollPos = window.scrollY;

    // Controla o movimento da imagem de fundo
    header.style.backgroundPositionY = `${scrollPos * 0.5}px`;

    // Efeito de desaparecimento do header conforme o scroll
    if (scrollPos > 300) {
      header.style.opacity = `${1 - (scrollPos - 300) / 300}`;
    } else {
      header.style.opacity = "1";
    }
  });
});
document.getElementById("whatsappIcon").addEventListener("click", function () {
  window.location.href = "https://wa.me/5511945115070";
});

//caroussel

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})

