/**
* Template Name: Bell
* Template URL: https://bootstrapmade.com/bell-free-bootstrap-4-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
import { loadComponent } from "./utils.js";  // Função para carregar componentes HTML
import "./menu.js";  // Lógica de navegação
import "./animations.js";  // Efeitos visuais
import "./api.js";  // Comunicação com serviços externos

document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header-container", "header.html");
  loadComponent("footer-container", "footer.html");
});