const headerMenuIcon = document.querySelector('.menu-responsive-icon');
const navbarResponsive = document.querySelector('.header-navbar-responsive');

const menuFilterIcon = document.querySelector('.menu-filter-icon');
const filterResponsive = document.querySelector('.menu-filter-responsive');

const botonesFiltros = document.querySelectorAll('.btn-filter');
console.log(botonesFiltros)
const projectsCards = document.querySelectorAll('.card-project');
console.log(projectsCards)




const filterCards = (btnFilter) =>{
    const filterCategory = btnFilter.value;
    console.log(filterCategory)
    
    for (let projectCard of projectsCards){

        const cardCategory = projectCard.dataset.category 
        console.log(cardCategory)

        if (cardCategory == filterCategory || filterCategory == "todos"){
            console.log(cardCategory == filterCategory)
            projectCard.classList.remove("hidde");
        }else {
            projectCard.classList.add("hidde");
            
        }
    }
}

// ----INICIALIZADORES ------//

// Funcionalidad del Boton Menu Header
headerMenuIcon.onclick = () => {

navbarResponsive.classList.toggle("header-navbar-is-hidden")

}

// Funcionalidad del Boton Filtro Mis Proyectos

menuFilterIcon.onclick = () => {

    filterResponsive.classList.toggle("filter-navbar-is-hidden")
    
}

for (let btnFilter of botonesFiltros){
    btnFilter.onclick = () => {
        filterCards(btnFilter);
    }
}
