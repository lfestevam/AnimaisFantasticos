function initTabMenu() {
  const tabAnimais = document.querySelectorAll(".js-tabmenu li");
  const tabTextos = document.querySelectorAll(".js-tabcontent section");
  tabTextos[0].classList.add("ativo");

  // Verificar se existe elemento em tabContent e tabMenu
  if (tabTextos.length && tabAnimais.length) {
    tabTextos[0].classList.add("ativo");
    function tabIndex(index) {
      tabTextos.forEach((texto) => {
        texto.classList.remove("ativo");
      });
      tabTextos[index].classList.add("ativo");
    }

    tabAnimais.forEach((animal, index) => {
      animal.addEventListener("click", () => {
        tabIndex(index);
      });
    });
  }
}
initTabMenu();

function initAcordion() {
  const listDts = document.querySelectorAll(".js-acordion dt");

  if (listDts.length) {
    listDts[0].nextElementSibling.classList.add("ativo");
    listDts[0].classList.add("ativo");
    function mostrarPergunta() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    listDts.forEach((dt) => {
      dt.addEventListener("click", mostrarPergunta);
    });
  }
}
initAcordion();

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
function initScrollSuave() {
  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.hash;
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

const sections = document.querySelectorAll(".js-scroll");
function initAnima() {
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visibleSection = sectionTop - windowMetade < 0;
        if (visibleSection) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnima();
