const muebles= document.querySelector("#muebles");
const showMoreBtn= document.querySelector(".btn_load");
const categories= document.querySelector(".categories");
const categoryList= document.querySelectorAll(".category");





//template
const createProductTemplate=(producto)=>{
    const {name, img, price, txt}= producto
    return `
    <div class="muebles__container">
        <div class="card__muebles">
            <div class="mueble__img">
                <img src="${img}" alt="${name}">
            </div>
            <p>${name}</p>
            <span>U$D ${price}</span>
            <button class"btn-carrito">${txt}</button>
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
    console.log(appState)
}

const addFilter=(e)=>{
    if(!isInactiveFilter(e.target))return;
    changeFilter(e.target)

    muebles.innerHTML="";

    if (appState.activeFilter){
        const filteredProducts=productsData.filter((product)  => 
            product.Category === appState.activeFilter)
            renderProducts(filteredProducts);
            // appState.currentProductIndex=0;
            return;
        }
        renderProducts(appState.products[0])
}

const init=()=>{
    renderProducts(appState.products[0]);
    showMoreBtn.addEventListener("click", showMoreProducts);
    categories.addEventListener("click", addFilter)
}
init()