/**
* Template Name: Bell
* Template URL: https://bootstrapmade.com/bell-free-bootstrap-4-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

"use strict";

/**
 * Inicializar animações ao rolar a página usando AOS.js
 */
export function initAOS() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}

document.addEventListener("DOMContentLoaded", initAOS);

/**
 * Exibir botão de voltar ao topo ao rolar a página
 */
const scrollTop = document.querySelector(".scroll-top");

export function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}

if (scrollTop) {
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("scroll", toggleScrollTop);
window.addEventListener("load", toggleScrollTop);

/**
 * Inicializar biblioteca GLightbox para animações de galeria
 */
export function initGlightbox() {
  GLightbox({
    selector: ".glightbox",
  });
}

document.addEventListener("DOMContentLoaded", initGlightbox);
