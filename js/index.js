const muebles= document.querySelector("#muebles");
const showMoreBtn= document.querySelector(".btn_load");
const categories= document.querySelector(".categories");
const categoryList= document.querySelectorAll(".category");


const menuBtn = document.querySelector(".menu-label"); //menu hamburguesa
const menu= document.querySelector(".navbar-ul"); //ul

const productCard=document.querySelector(".card-container");
const overlay= document.querySelector(".overlay");
const addModal= document.querySelector(".modal");



//template
const createProductTemplate=(producto)=>{
    const {id,name, img, price, txt}= producto
    return `
    <div class="muebles__container">
        <div class="card__muebles">
            <div class="mueble__img">
                <img loading="lazy" src="${img}" alt="${name}">
            </div>
            <p>${name}</p>
            <small>${txt}</small>
            <span>$ ${price}</span>

        </div>        
    </div`

}

//renderizar productos
const renderProducts=(products)=>{
    muebles.innerHTML +=products.map(
        createProductTemplate).join("");
}



//mostrar mas productos
const showMoreProducts= ()=>{
    appState.currentProductIndex+=1;
    
    let {products, currentProductIndex, productLimit}=appState
    renderProducts(products[currentProductIndex])

    if(currentProductIndex === productLimit -1){
        showMoreBtn.classList.add("hidden")
    }
}

//filtros
const isInactiveFilter=(e)=>{
    return (e.classList.contains("category") && !e.classList.contains("active"))
}

//cambio de color active
const changeColorActive=(activeFilter)=> {
    const categories= [...categoryList]
    categories.forEach((categoryBtn)=>{
        if(categoryBtn.dataset.category !== activeFilter){
            categoryBtn.classList.remove("active")
            return;
        };
        categoryBtn.classList.add("active")
    });
   
};

const changeFilter=(btn)=>{
    appState.activeFilter=btn.dataset.category
    changeColorActive(appState.activeFilter)
    if(!appState.activeFilter){
        showMoreBtn.classList.remove("hidden");
        return;
    }
    showMoreBtn.classList.add("hidden");
}

const addFilter=(e)=>{
    if(!isInactiveFilter(e.target))return;
    changeFilter(e.target)

    muebles.innerHTML="";

    if (appState.activeFilter){
        const filteredProducts=productsData.filter((product)  => 
            product.Category === appState.activeFilter)
            renderProducts(filteredProducts);
            return;
        }
        renderProducts(appState.products[0])
}


//-----logica menu


const switchMenu = () => {
    menu.classList.toggle("open-menu");
    overlay.classList.toggle("overlayActive");
}



//  carrito
const switchCart = () => {
    cartModal.classList.toggle("open-cart");
    if (menu.classList.contains("open-menu")) {
        menu.classList.remove("open-menu"); 
        return;
    }
    overlay.classList.toggle("overlayActive")

}

const closeMenuCart = () => {
    if (menu.classList.contains("open-menu")) {
        menu.classList.remove("open-menu");
        overlay.classList.remove("overlayActive");
    }
}


const init = () => {
    renderProducts(appState.products[0]);
    showMoreBtn.addEventListener("click", showMoreProducts);
    categories.addEventListener("click", addFilter);

    menuBtn.addEventListener("click", switchMenu);
    overlay.addEventListener("click", closeMenuCart);
    window.addEventListener("scroll", closeMenuCart);
    renderBadge(cart);
}

init()