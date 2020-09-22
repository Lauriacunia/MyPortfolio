const headerMenuIcon = document.querySelector('.menu-responsive-icon');
const navbarResponsive = document.querySelector('.header-navbar-responsive');

const menuFilterIcon = document.querySelector('.menu-filter-icon');
const filterResponsive = document.querySelector('.menu-filter-responsive');


// Funcionalidad del Boton Menu Header
headerMenuIcon.onclick = () => {

navbarResponsive.classList.toggle("header-navbar-is-hidden")

}

// Funcionalidad del Boton Filtro Mis Proyectos

menuFilterIcon.onclick = () => {

    filterResponsive.classList.toggle("filter-navbar-is-hidden")
    
    }